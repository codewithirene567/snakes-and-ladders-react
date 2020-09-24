import React from 'react'

export default function Square(props) {
    //debugger
    return (
        <td className="square" id={props.cellId}>
            {props.value}
        </td>
    )
}

