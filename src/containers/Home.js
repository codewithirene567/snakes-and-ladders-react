import React from 'react';
import PlayerInfo from '../components/playerInfo'
 import PlayerCreated from '../components/playerCreated';
import { connect } from 'react-redux';
import { addPlayer, saveGame, getAllGame, savePlayers,getPlayers } from '../actions/gameActions';


//const Home = (props) => {
  class Home extends React.Component {
  //2
  //2a
  
  componentDidMount(){
    this.props.getAllGame()
    this.props.getPlayers()
    //this.props.saveGame()
  }

  getRecentId(){
     //for(let i=0; i < this.props.Allgames.length; i++){ 
    //   this.props.Allgames.id
    // }
    if (this.props.Allgames.length === 0){
      return 0
    }
    console.log(this.props.Allgames[this.props.Allgames.length-1].id)
    
    return this.props.Allgames[this.props.Allgames.length-1].id+1
  }

render () {
    return (
      
      <div>
      <div>
        <h1>Welcome to Snakes and Ladders! Make some players by filling out your information below</h1><br></br>
        <PlayerInfo addPlayer={this.props.addPlayer} moveForward={this.props.moveForward}/>
      </div>
      <div>
        <PlayerCreated players={this.props.players} />
        </div>
        <button onClick={()=>{
          let currentTimeStamp = Math.floor(Date.now()/1000)

       
          
          console.log(this.props.players)
          console.log(this.props.Allgames);
          let initialGame = {}
          if (this.props.Allgames.length == 0) {
            initialGame = {
              id:this.getRecentId(),
              currPlayer: 0,
              winStatus: false,
              allplayers: this.props.players.allplayers,
              winnerName: "",
              timeStamp: currentTimeStamp,
            }
          } else {
          initialGame = {
            id:this.getRecentId(),
            currPlayer: 0,
            winStatus: false,
            allplayers: this.props.Allgames[0].allplayers,
            winnerName: "",
            timeStamp: currentTimeStamp,
          }
        }
          this.props.saveGame(initialGame);
          console.log(this.props.players.allplayers.length)
        for(let i=0; i < this.props.players.allplayers.length; i++){ 
          this.props.savePlayers(this.props.players.allplayers[i],currentTimeStamp);
          console.log(this.props.players[i])
        }
          console.log("Saved game here");
          this.props.history.push({pathname:'/game', state: {localGame: initialGame, localPlayers: this.props.players.allplayers}})
        }
        }>Start</button>
        <p>Already have a game started? Click the button below to play a previously saved game.</p>
        <button onClick={()=>{this.props.history.push('/previouslysavedgames')}}>Load Saved Game</button>
        </div>
    )
    }
  }
//1a
    const mapStateToProps = (state) => ({
       players: state.playerReducer,
       Allgames: state.gameReducer
      //  game: state.gameReducer.
      //console.log(state.gameReducer)
  })
//1
    export default connect(mapStateToProps,{addPlayer, saveGame, savePlayers, getAllGame, getPlayers})(Home)