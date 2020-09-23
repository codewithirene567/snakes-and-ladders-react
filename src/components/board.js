//container component
//divs and colums
import React, { Component } from 'react';
import Square from './square';

class Board extends Component {

    makeSquares = (squares) => {
        
        let matrix = []
    
        let cellId = 0
        for(let i=0; i < 10; i++){
            const squares =[]
            for (let i=0; i < 10; i++) {
                squares.push(<Square key={i} cellId={cellId}/>)
                cellId++
            }
            matrix.push(<tr>{squares}</tr>)
           
         
        }
            return <tbody>{matrix}</tbody>
     }

    render () {
        return (
            <div>
            <div className="row">
              {this.makeSquares()}
            </div>
            </div>
        );
    }
}

export default Board