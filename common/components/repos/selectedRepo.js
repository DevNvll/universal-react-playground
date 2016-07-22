import React, { Component, PropTypes } from 'react';

class SelectedRepo extends Component {

  render() {
    const { name, description, html_url } = this.props.selected;
    if(!name) {
      return(<div><h5>Select a repo</h5></div>);
    }

    return (
        <div>
          <h3><a href={html_url} target="_blank">{name}</a></h3>
          <h5>{description ? description : 'No Description'}</h5>
          <h5><a href={html_url} target="_blank">GitHub</a></h5>
        </div>
      );
  }

}

SelectedRepo.propTypes = {
  selected: PropTypes.object.isRequired
}

export default SelectedRepo;
