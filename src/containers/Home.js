import React from 'react';
import PlayerInfo from '../components/playerInfo'
 import PlayerCreated from '../components/playerCreated';
import { connect } from 'react-redux';
import { addPlayer, saveGame, getAllGame, savePlayers,getPlayers, clearState, savePlayersArray } from '../actions/gameActions';
import { useHistory } from 'react-router'

//const Home = (props) => {
  class Home extends React.Component {
  //2
  //2a
  
  componentDidMount(){
    // window.location.reload();
    
    this.props.getAllGame()
    this.props.getPlayers()
    this.props.clearState()
    //this.props.saveGame()
  }

  getRecentId(){
     //for(let i=0; i < this.props.Allgames.length; i++){ 
    //   this.props.Allgames.id
    // }
    if (this.props.Allgames.length === 0){
      return 0
    }
    //console.log(this.props.Allgames[this.props.Allgames.length-1].id)
    
    return this.props.Allgames[this.props.Allgames.length-1].id+1
  }

render () {
    // console.log(this.props);
    //console.log(this.props.location.state.refresh);
    // if (this.props.location.state.refresh === true) {
    //   // window.location.reload(false);
    //   // this.props.location.state.refresh = false;
    //   // this.props.history.push({pathname:'/home', state: {refresh: false}})
    //   // this.props.players = null;
    //   this.props.location.state.refresh = false;
    //   // this.setState({})
    //   // this.props.clearGameState();
    //   // this.props.clearPlayerState();
     
    // }
    // const history = useHistory()
    // history.go(0)
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
          
          if (this.props.players.allplayers.length === 0) {
            // document.getElementById('startGame').disabled = true
            alert('Please add players')
          } else {

          
            let currentTimeStamp = Math.floor(Date.now()/1000)
          console.log(this.props.players.allplayers)
          console.log(this.props.Allgames[0]);
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
       this.props.saveGame(initialGame)

        // this.props.saveGame(initialGame);
          console.log(this.props.players.allplayers.length)

          // this.props.players.allplayers.map((player) => {
          //   setTimeout(this.props.savePlayers(player,currentTimeStamp), 2000);
          // });
console.log("All local players", this.props.players.allplayers)
          this.props.savePlayersArray(this.props.players.allplayers, currentTimeStamp)

        // for(let i=0; i < this.props.players.allplayers.length; i++){ 
        //   setTimeout(this.props.savePlayers(this.props.players.allplayers[i],currentTimeStamp), 2000);
        //   // this.props.savePlayers(this.props.players.allplayers[i],currentTimeStamp);
        //   // console.log(this.props.players[i])
        // }
          console.log("Saved game here");
          console.log(initialGame, this.props.players.allplayers);
          this.props.history.push({pathname:'/game', state: {localGame: initialGame, localPlayers: this.props.players.allplayers}})//passing in information that would have been in the post
          //request-matches with line 92

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
      //  game: state.gameReducer.
      //console.log(state.gameReducer)
  })
//1
    export default connect(mapStateToProps,{addPlayer, saveGame, savePlayers, getAllGame, getPlayers, clearState, savePlayersArray})(Home)