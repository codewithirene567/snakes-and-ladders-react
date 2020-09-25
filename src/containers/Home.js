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
        <PlayerInfo addPlayer={props.addPlayer}/>
        <h1>This is the welcome page where they are going to be able to fill out their user information</h1>
      </div>
      <div>
        <PlayerCreated players={props.players} />
        </div>
        </div>
    )
    }
//1a
    const mapStateToProps = (state) => ({
      players: state.playerReducer
  })
//1
    export default connect(mapStateToProps,{addPlayer})(Home)