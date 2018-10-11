import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Game of Life</h1>
        <p>Tick count: <Ticker /></p>
        <button className="step-button">Step</button>
        <br/><br/>
        <div className='grid'>
          <Grid />
        </div>
        <div> 
        </div>
      </div>
    );
  }
}

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(814).fill(0),
    };
  }
  render() {
    return (
      <div className='cell-container'>
        {this.state.cells.map((cell) => (
          <button className="cell" value="cell"></button>
        ))}      
    </div>
    );
  }
}

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tick: 0
    };
  }
  render () {
    return (
      this.state.tick
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
