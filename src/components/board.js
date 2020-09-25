//container component
//divs and colums
import React, { Component } from 'react';
import Square from './square';

class Board extends Component {

    makeSquares = (squares) => {
        
        let matrix = []
        let matrixKey = 0
        let cellId = 0
        for(let i=0; i < 10; i++){
            const squares =[]
            for (let i=0; i < 10; i++) {
                squares.push(<Square key={cellId} cellId={cellId}/>)
                cellId++
            }
            matrix.push(<tr key ={matrixKey}>{squares}</tr>)
           ++matrixKey
         
        }
            return <table cellSpacing={0} id="matrix"><tbody >{matrix}</tbody></table>
     }
     
    render () {
        console.log(this.props)
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