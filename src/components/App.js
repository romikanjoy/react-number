import React from 'react';
import Hello from './Hello';
import Number from './Number';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter(value) {
    this.setState((prevState) => ({
      counter: prevState.counter + value
    }));
  }

  render() {
    return (
      <div>
        <Hello name="Romik"/>
        <div className="container">
          <div className="row">
            <Button incrementCounter={this.incrementCounter} incrementValue={1} />
            <Button incrementCounter={this.incrementCounter} incrementValue={5} />
            <Button incrementCounter={this.incrementCounter} incrementValue={10} />
            <Button incrementCounter={this.incrementCounter} incrementValue={100} />
          </div>
          <Number counter={this.state.counter} />
        </div>
      </div>
    );
  }
}

export default App;
