import React from 'react';
import Dice from '../components/dice'
import Board from '../components/board'
//import Player from '../components/player'
import Snake from '../components/snakes'
import Ladder from '../components/ladders'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveGame, updatePlayers, updateGame, getAllGame, getPlayers, setPlayers, updatePlayersArray } from '../actions/gameActions';
import GamePanel from '../components/gamePanel';



//const Game = (props) => {
  class Game extends React.Component {
  constructor(props){
    super(props)
    this.savedOnce = false

  }


    startSavingGame(event){
       console.log(this.props.getPlayers())
      
      console.log("Reading Games here");
      this.props.getPlayers()
      this.props.getAllGame()
        console.log(this.props.gameState);
        console.log(this.props.history.location.state.localGame);
       
        console.log(this.props.history.location.state.localGame)
        const newGame = {
          id: this.props.history.location.state.localGame.id,
          //might be whatever game user clicked on or from home.js
         
          currPlayer: (this.props.game.currPlayer+1)%this.props.game.allplayers.length,
          
          winStatus: this.props.game.winStatus,
          winnerName: this.props.game.winnerName,
          timeStamp: this.props.history.location.state.localGame.timeStamp
        }
        this.props.updateGame(newGame)
      


        console.log(this.props.gameState);
        console.log(this.props.history.location.state);
        console.log(this.props.history.location.state.localGame.allplayers);//localGame is the local game but
        //an array of PLAYERS is still returned here, all players globally
        if (this.props.history.location.state.localPlayers.length === 0) {
          //if this is coming from previously saved games because the players array is empty in the first place
          console.log("Came from previously saved game!");
        let j = 0;
       
        let updatedPlayers = []
        

        for(let i =0; i < this.props.history.location.state.localGame.allplayers.length; i++) {
          //all players is in every single localGame
          console.log(newGame.timeStamp, this.props.history.location.state.localGame.allplayers[i].timeStamp)
          if (newGame.timeStamp === this.props.history.location.state.localGame.allplayers[i].timeStamp) {
            console.log(this.props.state.playerReducer.allplayers)
            //is the timestamp from all of the players equal to the timestamp asked about
            const newPlayer = {
              id: this.props.history.location.state.localGame.allplayers[i].id,
              name: this.props.history.location.state.localGame.allplayers[i].name,
              currentPostion: this.props.state.playerReducer.allplayers[j].currentPostion,
              //local players j is only incremented when a player if found, access index of first player, and second player position found
              //player found to match, access index of player each time this happens
              playerId: this.props.history.location.state.localGame.allplayers[i].playerId
            }
           
            updatedPlayers.push(newPlayer)
            j++;
          }
        }
        this.props.updatePlayersArray(updatedPlayers)
      } else {
        console.log("Came from new game!");
        
        
        let updatedPlayers = []
       
        for(let i =0; i < this.props.game.allplayers.length; i++) {
            console.log(this.props.history.location.state.localGame.allplayers.length + i,this.props.state.playerReducer.allplayers[i].currentPostion);
          if (this.props.gameState.length !== 0){
          const newPlayer = {
            id: this.props.history.location.state.localGame.allplayers.length + i + 1,
            //adding to the database
            name: this.props.history.location.state.localPlayers[i].name,
            currentPostion: this.props.state.playerReducer.allplayers[i].currentPostion,
            //current position has to come from player reducer because it is referring to the local game which is trying to be 
            //updated
            playerId: this.props.history.location.state.localPlayers[i].playerId
          }
          
          updatedPlayers.push(newPlayer)
        }
          else {
            const newPlayer = {
              id: i+1,
              //adding things to the database in the first place, has to start with id of 1 because rails starts from 1
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


   export default connect(mapStateToProps, {saveGame,getAllGame, updateGame, getPlayers, setPlayers, updatePlayersArray})(Game);