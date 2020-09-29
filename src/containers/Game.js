import React from 'react';
import Dice from '../components/dice'
import Board from '../components/board'
//import Player from '../components/player'
import Snake from '../components/snakes'
import Ladder from '../components/ladders'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveGame, savePlayers } from '../actions/gameActions';


const Game = (props) => {
 
  function startSavingGame(event){
    console.log("hit")
     let currentTimeStamp = Math.floor(Date.now()/1000)
    props.saveGame(props.game, currentTimeStamp)
     for(let i=0; i < props.game.allplayers.length; i++){ 
     
     props.savePlayers(props.game.allplayers[i], currentTimeStamp)
  
   }
  }

    return (
      <div>
        <h1>Snakes and Ladders - {props.winner}</h1>
        <Snake />
        <Dice/>
        <Ladder />
        <Board />
        {checkWin(props)}
       <button id="save" onClick = {(event)=> startSavingGame(event)}>Save this game</button>
        
      </div>
    )
  }
  //pass in props of all players
  //find the position
function checkWin(props){
  {if (props.winStatus === true){ 
        return <Redirect to="/result" />
        }
      }
    }
  const mapStateToProps = (state) => {

     console.log(state.playerReducer.allplayers)
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
    return {winner:'Player '+highestName+' is winning!', winStatus: state.playerReducer.winStatus, game:state.playerReducer}
    
}



//  const mapDispatchToProps = (dispatch) => {
//    return {saveGame: () => dispatch(saveGame())}
//  }
   export default connect(mapStateToProps, {saveGame, savePlayers})(Game);