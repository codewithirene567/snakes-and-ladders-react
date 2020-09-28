import React from 'react';
import PlayerInfo from '../components/playerInfo'
 import PlayerCreated from '../components/playerCreated';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/gameActions';


const Home = (props) => {
  
  //2
  //2a
    return (
      
      <div>
      <div>
        <h1>Welcome to Snakes and Ladders! Make some players by filling out your information below</h1><br></br>
        <PlayerInfo addPlayer={props.addPlayer} moveForward={props.moveForward}/>
      </div>
      <div>
        <PlayerCreated players={props.players} />
        </div>
        <button onClick={()=>{props.history.push('/game')}}>Start</button>
        <p>Already have a game started? Click the button below to play a previously saved game.</p>
        <button onClick={()=>{props.history.push('/previouslysavedgames')}}>Load Saved Game</button>
        </div>
    )
    }
//1a
    const mapStateToProps = (state) => ({
      players: state.playerReducer
  })
//1
    export default connect(mapStateToProps,{addPlayer})(Home)