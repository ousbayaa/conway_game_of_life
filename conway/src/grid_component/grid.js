import React, {useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Cell from '../cell_component/cell';
import { useCallback } from 'react';

function Grid() {
  const width = 25
  const height = 25

  const [grid, setGrid] = useState([]);

  function createGrid(width, height) {
    let list = [];
    for(let x = 0; x < width; x++){
      let row = [];
      for(let y = 0; y < height; y++){
        row[y] = 0;
      }
      list.push(row);
    }
    setGrid(list);
  }
  useEffect(() => {
    createGrid();
    console.log("creating grid");
  })
  return (
    <Cell />
  )
}

export default Grid;
