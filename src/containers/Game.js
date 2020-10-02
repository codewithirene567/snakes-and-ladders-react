import React from 'react';
import Dice from '../components/dice'
import Board from '../components/board'
//import Player from '../components/player'
import Snake from '../components/snakes'
import Ladder from '../components/ladders'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveGame, savePlayers, updatePlayers, updateGame, getAllGame, getPlayers, setPlayers } from '../actions/gameActions';



//const Game = (props) => {
  class Game extends React.Component {
  constructor(props){
    super(props)
    this.savedOnce = false

  }


    startSavingGame(event){
       console.log(this.props)
      // console.log(this.props.getAllGame().length)
      console.log("Reading Games here");
      this.props.getPlayers()
        console.log(this.props.gameState);
        console.log(this.props.history.location.state.localGame);
        //  this.props.history.location.state.IdOfGame
      //  this.props.history.location.state.fromWhere ???
        // console.log(this.props.state);
        const newGame = {
          id: this.props.history.location.state.localGame.id,
          currPlayer: this.props.game.currPlayer,
          winStatus: this.props.game.winStatus,
          winnerName: this.props.game.winnerName,
          timeStamp: this.props.history.location.state.localGame.timeStamp
        }
        this.props.updateGame(newGame)


        console.log(this.props.gameState);

        if (this.props.history.location.state.localplayers == []) {
        let j = 0;
        for(let i =0; i < this.props.history.location.state.localGame.allplayers.length; i++) {
          console.log(newGame.timeStamp, this.props.history.location.state.localGame.allplayers[i].timeStamp)
          if (newGame.timeStamp === this.props.history.location.state.localGame.allplayers[i].timeStamp) {
            console.log(this.props.state.playerReducer.allplayers)
            const newPlayer = {
              id: this.props.history.location.state.localGame.allplayers[i].id,
              name: this.props.history.location.state.localGame.allplayers[i].name,
              currentPostion: this.props.state.playerReducer.allplayers[j].currentPostion,
              timeStamp: this.props.history.location.state.localGame.allplayers[i].timeStamp,
              playerId: this.props.history.location.state.localGame.allplayers[i].playerId
            }
            this.props.updatePlayers(newPlayer)
            j++;
          }
        }
      } else {
        for(let i =0; i < this.props.history.location.state.localPlayers.length; i++) {
            console.log(this.props.history.location.state.localGame.allplayers.length + i,this.props.state.playerReducer.allplayers[i].currentPostion);
          const newPlayer = {
            id: this.props.history.location.state.localGame.allplayers.length + i,
            name: this.props.history.location.state.localPlayers[i].name,
            currentPostion: this.props.state.playerReducer.allplayers[i].currentPostion,
            timeStamp: this.props.history.location.state.localPlayers[i].timeStamp,
            playerId: this.props.history.location.state.localPlayers[i].playerId
          }
          this.props.updatePlayers(newPlayer)
        }
      }


        // for(let i = 0; i < this.props.state.playerReducer.allplayers.length; i++) {
        //   // const currentplayer = this.props.state.playerReducer.allplayers[i]
          
        //   console.log(this.props.state.playerReducer.allplayers[i]);
        //   this.props.updatePlayers(this.props.state.playerReducer.allplayers[i]);
        // }
        //   for(let i=0; i < this.props.game.allplayers.length; i++) {
            
        //    if (this.props.game.allplayers[i].timeStamp === newGame.timeStamp){
        //     const newPlayer = {
        //       id: this.props.game.id,
        //       name: this.props.game.currPlayer,
        //       currentPostion: this.props.game.winStatus,
        //       timeStamp: this.props.game.winnerName,
        //       playerId: this.props.game.playerId
        //     }
    
        //     this.props.updatePlayers()
        //    }
        //  }
        
       // this.updatePlayers()
// let games = this.props.gameState.length
     
          //id exists from the backend
 
    // this.props.saveGame(this.props.game, currentTimeStamp)
    //  for(let i=0; i < this.props.game.allplayers.length; i++){ 
    //  //if the player already has an id then send a patch requests
    //  //update players patch
    //  //update games patch
    //   this.props.savePlayers(this.props.game.allplayers[i], currentTimeStamp)
    //   //console.log(props.game.allplayers[i])
    //   // reset state here, redirect to home
      
    //   }
     
      
  }
  

render () {


  console.log(this.props)
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
   export default connect(mapStateToProps, {saveGame,getAllGame, savePlayers, updatePlayers, updateGame, getPlayers, setPlayers})(Game);