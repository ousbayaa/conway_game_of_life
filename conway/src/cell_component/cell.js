import React from "react";

function Cell(props) {
    let color = ""
    if (props.value === 1){
        color = "red"
    } else {
        color = "white"
    }
    return (
        <div style={{border: 'solid 1px black', backgroundColor: color, width: '15px', height: '15px'}}/>
    )
}

export default Cell;
