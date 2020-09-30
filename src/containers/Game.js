import React from 'react';
import Dice from '../components/dice'
import Board from '../components/board'
//import Player from '../components/player'
import Snake from '../components/snakes'
import Ladder from '../components/ladders'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveGame, savePlayers, updatePlayers, updateGame, getAllGame } from '../actions/gameActions';
import listOfNewGames from '../components/listOfNewGames';


//const Game = (props) => {
  class Game extends React.Component {
  constructor(props){
    super(props)
    this.savedOnce = false

  }

    startSavingGame(event){
       console.log(this.props)
      // console.log(this.props.getAllGame().length)
       this.props.getAllGame()
      //  console.log(this.props)
      console.log(this.savedOnce)
// let games = this.props.gameState.length
// if (games >this.props.gameState.id)
      //id exists from the backend
      //notes: add a like button, previous save games list
      //understand plain react
    console.log("hit")
     let currentTimeStamp = Math.floor(Date.now()/1000)
     console.log(this.props.gameState)
    this.props.saveGame(this.props.game, currentTimeStamp)
     for(let i=0; i < this.props.game.allplayers.length; i++){ 
     //if the player already has an id then send a patch requests
     //update players patch
     //update games patch
      this.props.savePlayers(this.props.game.allplayers[i], currentTimeStamp)
      //console.log(props.game.allplayers[i])
      // reset state here, redirect to home
      
      }
      this.savedOnce = true;
      console.log(this.props.gameState);
  }
  // saving game again object: {id: 4, currPlayer: 0, winStatus: false, winnerName: "", timeStamp: 1601401153}
// currPlayer: 0
// id: 4
// timeStamp: 1601401153
// winStatus: false
// winnerName: ""

render () {
    return (
      <div>
        <h1>Snakes and Ladders - {this.props.winner}</h1>
        <Snake />
        <Dice/>
        <Ladder />
        <Board />
        {this.checkWin(this.props)}
       <button id="save" onClick = {(event)=> this.startSavingGame(event)}>Save this game</button>
        
      </div>
    )
  }

  //pass in props of all players
  //find the position
checkWin(props){
  {if (props.winStatus === true){ 
        return <Redirect to="/result" />
        }
      }
    }
  }
  const mapStateToProps = (state) => {

     console.log(state)
     let array=[]
     let highestName = ''
    for(let i=0; i < state.playerReducer.allplayers.length; i++){
      console.log(state.playerReducer);
      //my all players is equalling null because this is empty
      let position =  state.playerReducer.allplayers[i].currentPostion;
        array.push(position);
       
      }
      let maximum = Math.max(...array) //4

    for(let i=0; i < state.playerReducer.allplayers.length; i++){
      if (maximum === state.playerReducer.allplayers[i].currentPostion){
         highestName= state.playerReducer.allplayers[i].name
      }
      
    }
    return {winner:'Player '+highestName+' is winning!', winStatus: state.playerReducer.winStatus, game:state.playerReducer, gameState: state.gameReducer, state: state}
    
}



//  const mapDispatchToProps = (dispatch) => {
//    return {saveGame: () => dispatch(saveGame())}
//  }
   export default connect(mapStateToProps, {saveGame,getAllGame, savePlayers, updatePlayers, updateGame})(Game);