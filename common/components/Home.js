import React, { Component } from 'react';
import Markdown from 'react-remarkable';

class Home extends Component {

  render() {
    return (
      <div>
          <section className="content-header">
            <h1>
              Home
              <small>Home Page</small>
            </h1>
          </section>
          <section className="content">
            <Markdown>
              # Hello World
              {''}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus diam, imperdiet eu ex at, consequat malesuada odio.
              Integer id massa mauris. Fusce vulputate facilisis massa nec dignissim.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Integer cursus orci vel magna ultrices eleifend.Sed a justo eget neque bibendum cursus in ut metus.
              Suspendisse ut tempor ante, nec facilisis justo. In justo nibh, laoreet in nunc ac, vehicula aliquet nisi.
              Cras malesuada justo lacus, in consequat mi lobortis sit amet. Suspendisse potenti. In hac habitasse platea dictumst.
              Curabitur tempus quam in mattis consequat. Vestibulum luctus urna enim, vel placerat lacus efficitur nec.
              Donec sed tellus viverra, dictum ante sed, molestie nunc. Curabitur vel turpis eget diam egestas elementum.
              {''}
            </Markdown>
          </section>
  		</div>

    );
  }
}

export default Home;
