import React, {useState} from "react";

function Cell(props) {
    
    let color = ""
    if (props.value === 1){
        color = "red"
    } else {
        color = "white"
    }

    return (
        <div id={props.x + "-" + props.y} onClick={()=>props.setGridHandler(props.x, props.y)} style={{border: 'solid 1px black', backgroundColor: color, width: '15px', height: '15px'}}/>
    )
}

export default Cell;
