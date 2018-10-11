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

function Cell(props) {
  return (
    <p>
      {props.value}
    </p>
  );
}

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(100).fill(0),
    };
  }
  renderCell(i) {
    return (
      <Cell
        value={this.state.cells[i]}
      />
    );
  }
  render() {
    return (
      <div>
        {this.renderCell(0)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
