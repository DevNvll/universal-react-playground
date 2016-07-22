import React, { Component, PropTypes } from 'react';
import {Grid, Col, Row, ProgressBar} from 'react-bootstrap';
import SelectedRepo from './repos/selectedRepo';


class Repos extends Component {
  constructor(props) {
   super(props);
  }
  componentDidMount() {
    this.props.fetchRepos(this.props.auth.providerData[0].uid);
  }
  createRepoList() {
    return this.props.repos.results.map((repo, i) => {
      return (<span className="repoitem" onClick={() => this.props.selectRepo(repo) } key={i}>{repo.name}<br /></span>);
    });
  }
  render() {
    return (
      <div>
        <section className="content-header">
          <h1>
            Repositories
            <small>My GitHub Repositories list</small>
          </h1>
        </section>
        <section className="content">
          <Grid>
            <Row>
              <Col xs={6} md={6} >
                {this.props.repos.isFetching && this.props.repos.results.length === 0 &&
                  <ProgressBar active now={100} />
                }
                {!this.props.repos.isFetching && this.props.repos.results.length === 0 &&
                  <h3>Error</h3>
                }
                {this.props.repos.results.length > 0 &&
                  this.createRepoList()
                }
              </Col>
              <Col xs={12} md={6} >
                <SelectedRepo selected={this.props.repos.selected} />
              </Col>
            </Row>
          </Grid>
        </section>
      </div>
    );
  }
}

Repos.propTypes = {
  selectRepo: PropTypes.func.isRequired,
  repos: PropTypes.shape({
    results: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    selected: PropTypes.object.isRequired
  })
}

export default Repos;
