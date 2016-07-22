import React, { Component, PropTypes } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { incrementCounter, decrementCounter, setCounter, counter } = this.props;
    return (
      <div>
        <section className="content-header">
          <h1>
            Counter
            <small>This counter is here to show the state is conserved as you navigate through the app.</small>
          </h1>
        </section>
        <section className="content">
        <center>
          <h1><b>Counter: {counter} times</b></h1><br />
          {' '}
          <button className="btn btn-success" onClick={incrementCounter}><i className="fa fa-plus"></i></button>
          {' '}
          <button className="btn btn-danger" onClick={decrementCounter}><i className="fa fa-minus"></i></button>
        </center>
        </section>
      </div>

    );
  }
}

Counter.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
