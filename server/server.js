import express from 'express';

import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation';
import { fetchComponentDataBeforeRender } from '../common/api/fetchComponentDataBeforeRender';

import configureStore from '../common/store/configureStore';
import routes from '../common/routes';

const app = express();

console.log('Running in', process.env.NODE_ENV);

const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>0x48</title>
      </head>
      <body class="hold-transition skin-black sidebar-mini">
        <div id="root">${html}</div>
        <script>
          var ENV = ${JSON.stringify(process.env.NODE_ENV)};
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}

if(process.env.NODE_ENV !== 'production'){
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}else{
  app.use('/static', express.static(__dirname + '/../build'));
}

app.get('/*', function (req, res) {
  const location = createLocation(req.url);

  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if(err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if(!renderProps)
      return res.status(404).end('Not found');

    const store = configureStore({});

    const InitialView = (
      <Provider store={store}>
				<RouterContext {...renderProps} />
      </Provider>
    );
    fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
      .then(html => {
        const componentHTML = ReactDOMServer.renderToString(InitialView);
        const initialState = store.getState();
        res.status(200).end(renderFullPage(componentHTML,initialState))
      })
      .catch(err => {
        res.send(err.message);
        res.end();
      });
  });

});

const port = 3000;

const server = app.listen(port, function () {
  console.log(`Listening at port ${port}`);
});
