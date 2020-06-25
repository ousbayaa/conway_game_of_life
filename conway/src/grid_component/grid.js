import React from 'react';
import ReactDOM from 'react-dom';
import Cell from '../cell_component/cell';

class Grid extends React.Component {
  render() {
    return(
      <div>
        Grid
      </div>
    )
  }
}

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      generation: 0,
    }
  }

  render() {
    return (
      <div>
        <h1> The Game of Life</h1>
        <Grid 
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

export default Grid;

