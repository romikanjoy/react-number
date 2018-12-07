import React from 'react';
import Hello from './Hello';
import Number from './Number';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <div>
        <Hello name="Romik" />
        <div className="container">
          <div className="row">
            <button className="btn btn-secondary" onClick={this.incrementCounter}>+</button>
          </div>
          <Number counter={this.state.counter} />
        </div>
      </div>
    );
  }
}

export default App;
