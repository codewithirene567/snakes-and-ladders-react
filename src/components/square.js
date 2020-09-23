import React from 'react'

export default function Square(props) {
    //debugger
    return (
        <div className="square" id={props.cellId}>
            {props.value}
        </div>
    )
}