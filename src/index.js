import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Game of Life</h1>
        <div className='grid'>
          <Grid />
        </div>
      </div>
    );
  }
}

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(1000).fill(0),
    };
  }
  render() {
    return (
      <div className='cell-container'>
        {this.state.cells.map((cell, index) => (
          <div className="cell">{cell}</div>
        ))}      
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
