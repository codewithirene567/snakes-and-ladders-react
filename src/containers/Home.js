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
        <PlayerInfo addPlayer={props.addPlayer}/>
      </div>
      <div>
        <PlayerCreated players={props.players} />
        </div>
        <button onClick={()=>{props.history.push('/game')}}>Start</button>
        </div>
    )
    }
//1a
    const mapStateToProps = (state) => ({
      players: state.playerReducer
  })
//1
    export default connect(mapStateToProps,{addPlayer})(Home)