//container component
import React, { Component } from 'react';
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import { connect } from 'react-redux';
import { moveForward } from '../actions/gameActions';
import { changePlayer} from '../actions/gameActions';

class Dice extends Component {

    // state = {
    //     side:''
    // } 
 
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
     
      // for(let i=0; i < 10; i++){
      //   const squares =[]
      //   for (let i=0; i < 10; i++) {
      //       squares.push(<Square key={cellId} cellId={cellId}/>)
      //       cellId++
      //   }

      rollDoneCallback= (num) => {
        //console.log("dice")
        // this.setState({side: `${num}`})
        for (let i=0; i < num; i++) {
        this.props.moveForward()
        }
        this.props.changePlayer()
        //debugger
    }
    
}
    
 const mapStateToProps = (state) => ({
   players: state.playerReducer
 })
export default connect(mapStateToProps, {moveForward, changePlayer})(Dice)