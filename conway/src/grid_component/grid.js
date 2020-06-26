import React, {useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Cell from '../cell_component/cell';
import { useCallback } from 'react';
import {Container, Col, Row } from 'react-bootstrap'

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

    console.log(list)
    setGrid(list);
  }
  useEffect(() => {
    createGrid(width, height);
    console.log("creating grid");
    console.log(grid)
  }, [])

  
  return (
    <Container style={{width: 'max-content'}}>
      {grid.map((x) =>
        <Row className="no-gutters" style={{width: 'max-content'}}>
          {x.map((y) =>
            <Col style={{padding: '0 !important', flexGrow: 0, minWidth: 'unset'}}>
              <Cell key={x.toString() + y.toString()} value={y}/>
              </Col>
          )}
        </Row>
      )}
    </Container>
  )
}

export default Grid;
