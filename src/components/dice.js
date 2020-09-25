//container component
import React, { Component } from 'react';
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

class Dice extends Component {

    state = {
        side:''
    } 
 
    render() {
        return (
          <div>
            <ReactDice
              numDice={1}
              rollDone={this.rollDoneCallback}
              ref={dice => this.reactDice = dice}
            />
          </div>
        )
      }
     
      rollAll() {
        this.reactDice.rollAll()
      }
     
      rollDoneCallback= (num) => {
        this.setState({side: `${num}`})
        //debugger
    }
    
}
    

export default Dice