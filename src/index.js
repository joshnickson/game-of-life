import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Game of Life</h1>
          <Ticker />
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
      cells: Array(840).fill(false),
    };
    this.toggleValue = this.toggleValue.bind(this)
  }

  toggleValue(i) {
    const cells= this.state.cells.slice();
    cells[i] = !cells[i];
    this.setState({cells: cells})
  }

  render() {
    return (
      <div className='cell-container'>
        {this.state.cells.map((cell, index) => (
          <button 
            className={cell ? "alive" : "dead"} 
            value={cell} 
            onClick={() => this.toggleValue(index)}>
          </button>
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
    this.incrementTick = this.incrementTick.bind(this)
  }
  
  incrementTick() {
    this.setState({
      tick: this.state.tick + 1
    })
  }

  render () {
    return (
      <div> 
        <div className='tick-count'>
          Tick count: {this.state.tick}
        </div>
        <div>
          <button className="step-button" onClick={this.incrementTick}>Step</button><br/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
