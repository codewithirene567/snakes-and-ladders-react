import React from 'react';
import PlayerInfo from '../components/playerInfo'
 import PlayerCreated from '../components/playerCreated';
import { connect } from 'react-redux';
import { addPlayer, saveGame, getAllGame, getPlayers, clearState, savePlayersArray } from '../actions/gameActions';
import { useHistory } from 'react-router'

//const Home = (props) => {
  class Home extends React.Component {
  //2
  //2a
  
  componentDidMount(){
    
    
    this.props.getAllGame()
    this.props.getPlayers()
    this.props.clearState()
    
  }

  getRecentId(){
     
    if (this.props.Allgames.length === 0){
      return 0
    }
   
    
    return this.props.Allgames[this.props.Allgames.length-1].id+1

    //ids in ruby start from one
  }

render () {
    
    console.log(this.props.players)
    return (
      
      <div className="welcome">
      <div  className="welcome">
        <h1>Welcome to Snakes and Ladders! Make some players by filling out your information below</h1><br></br>
        <PlayerInfo addPlayer={this.props.addPlayer} moveForward={this.props.moveForward}/>
      </div>
      <div  className="welcome">
        <PlayerCreated players={this.props.players} />
        </div>
        <button  className="welcome" id="startGame" onClick={()=>{
          //making a post request to save game and players
          if (this.props.players.allplayers.length === 0) {
            
            alert('Please add players')
          } else {

          
            let currentTimeStamp = Math.floor(Date.now()/1000)
          console.log(this.props.players.allplayers)
          console.log(this.props.Allgames[0]);
          let initialGame = {}
          if (this.props.Allgames.length == 0) {// checking if the games array is 0
            initialGame = {
              id:this.getRecentId(),
              currPlayer: 0,
              winStatus: false,
              allplayers: this.props.players.allplayers,
              winnerName: "",
              timeStamp: currentTimeStamp,
            }
          } else {
            //otherwise if stuff in the database exists
          initialGame = {
            id:this.getRecentId(),
            currPlayer: 0,
            winStatus: false,
            allplayers: this.props.Allgames[0].allplayers,
            //all the games always have access to all the players
            winnerName: "",
            timeStamp: currentTimeStamp,
          }
        }
       this.props.saveGame(initialGame)

        
          console.log(this.props.players.allplayers.length)

         
console.log("All local players", this.props.players.allplayers)
          this.props.savePlayersArray(this.props.players.allplayers, currentTimeStamp)

        
          console.log("Saved game here");
          console.log(initialGame, this.props.players.allplayers);
          this.props.history.push({pathname:'/game', state: {localGame: initialGame, localPlayers: this.props.players.allplayers}})//passing in information that would have been in the post
          //request-matches with line 92
        //this writing post request has not been posted to the database yet
        //manually pass state
        }
        }
        }
        
        >Start</button>
        <p>Already have a game started? Click the button below to play a previously saved game.</p>
        <button className="welcome" onClick={()=>{this.props.history.push('/previouslysavedgames')}}>Load Saved Game</button>
        </div>
    )
    }
  }
//1a
    const mapStateToProps = (state) => ({
       players: state.playerReducer,
       Allgames: state.gameReducer
     
  })
//1
    export default connect(mapStateToProps,{addPlayer, saveGame, getAllGame, getPlayers, clearState, savePlayersArray})(Home)