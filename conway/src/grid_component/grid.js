import React, {useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Cell from '../cell_component/cell';
import { useCallback } from 'react';
import {Container, Col, Row, Button } from 'react-bootstrap'
import InputRange from 'react-input-range';


function Grid() {
  const [grid, setGrid] = useState([]);
  const [rand, setRand] = useState(false);
  const [iterate, setIterate] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [width, setWidth] = useState(25)
  const [height, setHeight] = useState(25)
  const interRef = useRef(null);

  function createGrid(width, height, random = false) {
    let list = [];
    for(let x = 0; x < width; x++){
      let row = [];
      for(let y = 0; y < height; y++){
        if(random){
          row[y] = Math.round(Math.random())
        } else {
          row[y] = 0;
        }
        
      }
      list.push(row);
    }
    setGrid(list);
  }
  useEffect(() => {
    alert("First rule: A Live Cell with 2 or 3 Live Neighbour, Survives.    Second Rule: Any dead cell with three live neighbours becomes a live cell.")
  }, [])
  useEffect(() => {
    createGrid(width, height)
  }, [])
  useEffect(() => {
    stop()
    clear()
  }, [width, height])
  useEffect(() => {
    createGrid(width, height);
    console.log("creating grid");
  }, [rand])

  useEffect(() => {
    if(iterate != 0){
      iter()
    }
  }, [iterate])

  function iter() {
    let newGrid = JSON.parse(JSON.stringify(grid));
    for(let x = 0; x < width; x++){
      for(let y = 0; y < height; y++){
        let n = 0 // n is neighbours

        if(y > 0){
          if(grid[x][y -1 ] === 1){
            n++
          }
        }

        if(y < width -1){
          if(grid[x][y + 1] === 1){
            n++
          }
        }

        if(x > 0){
          if(grid[x - 1][y] === 1){
            n++
          }
        }

        if(x < width - 1){
          if(grid[x + 1][y] === 1){
            n++
          }
        }

        if(y > 0 && x >0){
          if(grid[x-1][y-1] === 1){
            n++
          }
        }

        if(y < width - 1 && x >0){
          if(grid[x-1][y+1] === 1){
            n++
          }
        }

        if(y > 0 && x < width -1){
          if(grid[x+1][y-1] === 1){
            n++
          }
        }

        if(y < height - 1 && x < width - 1){
          if(grid[x+1][y+1] === 1){
            n++
          }
        }

        if(grid[x][y] === 1){
          if(n === 2 || n === 3 ){
            newGrid[x][y] = 1
          }
          else{
            newGrid[x][y] = 0
          }
        }
        else{
          if(n === 3){
            newGrid[x][y] = 1
          }
          else{
            newGrid[x][y] = 0
          }
        }
      }
    }
    setGrid(newGrid)

  }

  useEffect(() => {
    let inter = null;
    if (isStart) {
      inter = setInterval(() => {
        setIterate(iterate => iterate +1);
      }, 2*200);
    }
    return () => clearInterval(inter);
  }, [isStart, iterate])

  function start(){
    setIsStart(true)
  }

  function stop(){
    setIsStart(false)
  }

  function clear(){
    createGrid(width, height)
    setIterate(0)
  }

  function randomize(){
    createGrid(width, height, true)
    setIterate(0)
  }

  function next() {
    setIterate(iterate + 1)
    iter()
  }

  function setGridHandler(x, y){
    if(!isStart){
      let newValue = 0
      if (grid[x][y] === 0){
          newValue = 1
      }
  
      let newGrid = grid
      newGrid[x][y] = newValue
      setGrid([...newGrid]);
    }
  }
  
  return (
    <>
    <Container style={{width: 'max-content'}}>
      {grid.map((x, iX) =>
        <Row key={iX} className="no-gutters" style={{width: 'max-content'}}>
          {x.map((y, iY) =>
            <Col key={"col-"+iY} style={{padding: '0 !important', flexGrow: 0, minWidth: 'unset'}}>
              <Cell key={iX + "-" + iY} value={y} x={iX} y={iY} grid={grid} setGridHandler={setGridHandler} />
              </Col>
          )}
        </Row>
      )}
    </Container>
    <div>
      <Button onClick={()=>start()} variant="primary" size="lg">
        Start
      </Button>
      <Button onClick={()=>stop()} variant="secondary" size="lg">
        Stop
      </Button>
      <Button onClick={()=>clear()} variant="secondary" size="lg">
        Clear
      </Button>
    </div>
    <div>
      <Button onClick={()=>randomize()} variant="secondary" size="lg">
        Randomize
      </Button>
      <Button onClick={()=>next()} variant="secondary" size="lg">
      Next
    </Button>
    <p style={{color: 'dodgerblue'}}>Current Generation: {iterate}</p>
    </div>
    <div style={{display: "flex", alignItems: "center", flexDirection: "column", color: "dodgerblue"}}>
      <div style={{width: "25%"}}>
        Width: {height}
        <InputRange
            maxValue={100}
            minValue={25}
            value={height}
            onChange={value => setHeight(value)} />
      </div>
      <div style={{width: "25%", paddingTop: "20px"}}>
        Height: {width}
        <InputRange
            maxValue={100}
            minValue={25}
            value={width}
            onChange={value => setWidth(value)} />
      </div>
    </div>
    </>
  )
}

export default Grid;
