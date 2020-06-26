import React from "react";

function Cell(props) {
    let color = ""
    if (props.value == 1){
        color = "red"
    } else {
        color = "white"
    }
    console.log(props)
    return (
        <div style={{border: 'solid 1px black', backgroundColor: color, width: '10px', height: '10px'}}/>
    )
}

export default Cell;
