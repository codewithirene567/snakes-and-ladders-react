import React from 'react';
import Dice from '../components/dice'
import Board from '../components/board'
//import Player from '../components/player'
import Snake from '../components/snakes'
import Ladder from '../components/ladders'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveGame, savePlayers, updatePlayers, updateGame, getAllGame, getPlayers, setPlayers, updatePlayersArray } from '../actions/gameActions';
import GamePanel from '../components/gamePanel';



//const Game = (props) => {
  class Game extends React.Component {
  constructor(props){
    super(props)
    this.savedOnce = false

  }


    startSavingGame(event){
       console.log(this.props.getPlayers())
      // console.log(this.props.getAllGame().length)
      console.log("Reading Games here");
      this.props.getPlayers()
      this.props.getAllGame()
        console.log(this.props.gameState);
        console.log(this.props.history.location.state.localGame);
        //  this.props.history.location.state.IdOfGame
      //  this.props.history.location.state.fromWhere ???
        // console.log(this.props.state);
        console.log(this.props.history.location.state.localGame)
        const newGame = {
          id: this.props.history.location.state.localGame.id,
         
          currPlayer: (this.props.game.currPlayer+1)%this.props.game.allplayers.length,
          winStatus: this.props.game.winStatus,
          winnerName: this.props.game.winnerName,
          timeStamp: this.props.history.location.state.localGame.timeStamp
        }
        this.props.updateGame(newGame)
        // this.props.updateGame(newGame)


        console.log(this.props.gameState);
        console.log(this.props.history.location.state);
        console.log(this.props.history.location.state.localGame.allplayers);//localGame is the local game but
        //an array of PLAYERS is still returned here, all players globally
        if (this.props.history.location.state.localPlayers.length === 0) {
          console.log("Came from previously saved game!");
        let j = 0;
        // let i = 0;
        let updatedPlayers = []
        // for(let i=0; i < this.props.history.location.state.localGame.allplayers.length; i++){

        // // }
        // // this.props.history.location.state.localGame.allplayers.map((player) => {
        // //   console.log(player, newGame);
        //   if (newGame.timeStamp === this.props.history.location.state.localGame.allplayers[i].timeStamp) {
        //         console.log(this.props.state.playerReducer.allplayers)
        //         const newPlayer = {
        //           id: this.props.history.location.state
        //           name: player.name,
        //           currentPostion: this.props.state.playerReducer.allplayers[j].currentPostion,
        //           timeStamp: player.timeStamp,
        //           playerId: player.playerId
        //         }
        //         console.log(newPlayer);
        //         setTimeout(this.props.updatePlayers(newPlayer), 2000);
        //         // this.props.updatePlayers(newPlayer)
        //         j++;
        //       }
        //       // i++;
        // })

        for(let i =0; i < this.props.history.location.state.localGame.allplayers.length; i++) {
          console.log(newGame.timeStamp, this.props.history.location.state.localGame.allplayers[i].timeStamp)
          if (newGame.timeStamp === this.props.history.location.state.localGame.allplayers[i].timeStamp) {
            console.log(this.props.state.playerReducer.allplayers)
            const newPlayer = {
              id: this.props.history.location.state.localGame.allplayers[i].id,
              name: this.props.history.location.state.localGame.allplayers[i].name,
              currentPostion: this.props.state.playerReducer.allplayers[j].currentPostion,
              playerId: this.props.history.location.state.localGame.allplayers[i].playerId
            }
           //this.props.updatePlayers(newPlayer)
            // this.props.updatePlayers(newPlayer)
            updatedPlayers.push(newPlayer)
            j++;
          }
        }
        this.props.updatePlayersArray(updatedPlayers)
      } else {
        console.log("Came from new game!");
        
        // let i =0;
        // console.log(this.props.state.playerReducer.allplayers)
        // this.props.history.location.state.localPlayers.map((player) => {
        //     const newPlayer = {
        //     id: this.props.history.location.state.localGame.allplayers.length + i, //localGame.allplayers refers to all the players globally 
        //     name: player.name,
        //     currentPostion: this.props.state.playerReducer.allplayers[i].currentPostion,
        //     timeStamp: player.timeStamp,
        //     playerId: player.playerId
        //   }
        //   i++;
        //   setTimeout(this.props.updatePlayers(newPlayer), 2000);
        // })
        let updatedPlayers = []
       
        for(let i =0; i < this.props.game.allplayers.length; i++) {
            console.log(this.props.history.location.state.localGame.allplayers.length + i,this.props.state.playerReducer.allplayers[i].currentPostion);
          if (this.props.gameState.length !== 0){
          const newPlayer = {
            id: this.props.history.location.state.localGame.allplayers.length + i + 1,
            name: this.props.history.location.state.localPlayers[i].name,
            currentPostion: this.props.state.playerReducer.allplayers[i].currentPostion,
            playerId: this.props.history.location.state.localPlayers[i].playerId
          }
          //this.props.updatePlayers(newPlayer)
          updatedPlayers.push(newPlayer)
        }
          else {
            const newPlayer = {
              id: i+1,
              name: this.props.history.location.state.localPlayers[i].name,
              currentPostion: this.props.state.playerReducer.allplayers[i].currentPostion,
              playerId: this.props.history.location.state.localPlayers[i].playerId
            }
            updatedPlayers.push(newPlayer)
          }
        }
        this.props.updatePlayersArray(updatedPlayers)
      }

      this.props.history.replace({pathname:'/home', state: {refresh: true}})
      

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
       <button id="save" onClick = {(event)=> this.startSavingGame(event)} >Save this game</button>
       <GamePanel />
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

    // let playerreducer= state.playerReducer
    // playerreducer.currPlayer = state.gameReducer.currPlayer
//change value of curr player in database to the localplayer reducer's current player, this way the 
//new player turn for the restore of the previously saved game is the next player

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
   export default connect(mapStateToProps, {saveGame,getAllGame, savePlayers, updatePlayers, updateGame, getPlayers, setPlayers, updatePlayersArray})(Game);