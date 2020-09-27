import React from 'react';
import Dice from '../components/dice'
import Board from '../components/board'
//import Player from '../components/player'
import Snake from '../components/snakes'
import Ladder from '../components/ladders'
import { connect } from 'react-redux';

const Game = (props) => {
  
    return (
      <div>
        <h1>Snakes and Ladders - Player {props.winner} is winning!</h1>
        <Snake />
        <Dice/>
        <Ladder />
        <Board />
        
       
      </div>
    )
  }
  //pass in props of all players
  //find the position
  const mapStateToProps = (state) => {
     //console.log(state.playerReducer)
     let array=[]
     let highestName = ''
    for(let i=0; i < state.playerReducer.allplayers.length; i++){

      let position =  state.playerReducer.allplayers[i].currentPostion
      
      
        array.push(position)
       
      }
      let maximum = Math.max(...array) //4

    for(let i=0; i < state.playerReducer.allplayers.length; i++){
      if (maximum === state.playerReducer.allplayers[i].currentPostion){
         highestName= state.playerReducer.allplayers[i].name
      }
      
    }
    return {winner:highestName}
    
}
   export default connect(mapStateToProps, null)(Game);