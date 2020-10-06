//container component
//divs and colums
import React, { Component } from 'react';
import Square from './square';
import Button from '../components/button';

class Board extends Component {

    state = {color: "orange"}//initially the colors for square will always be oragne

    makeSquares = (squares) => {
        
        let matrix = []
        let matrixKey = 0
        let cellId = 99
        for(let i=0; i < 10; i++){
            const squares =[]
            for (let i=0; i < 10; i++) {
                squares.push(<Square color= {this.state.color} key={cellId} cellId={cellId}/>)
                cellId--
            }
            matrix.push(<tr key ={matrixKey}>{squares}</tr>)
           ++matrixKey
         
        }
            return <table cellSpacing={0} id="matrix"><tbody >{matrix}</tbody></table>
     }
     
     

    callbackFunction = (orangeOrGrey) => {
        this.setState({color: orangeOrGrey})
    }

    //  callBackFunction(){
    //      if (this.state.clicked === true){
    //     this.setState({clicked: false})
    //      } else {
    //         this.setState({clicked: true})
    //      }
    //  }
//    changeColor() {
//        console.log(document.getElementById(99))
//        if (this.state.clicked === true) {
//             // change color to dark
//             document.getElementById(99).style.color = "grey"
//        } else {
//             // change color to light
//             document.getElementById(99).style.color = "orange"
//        }
//    }

    render () {
        console.log(this.state)
        //this.changeColor()
        return (
           
            <div>
                <div>
                <Button parentCallBack = {this.callbackFunction} buttonState = {this.state.color}/> 
                </div>
              
            <div className="row">
              {this.makeSquares()}
              
            </div>
           
            </div>
             
        );
    }
}

export default Board