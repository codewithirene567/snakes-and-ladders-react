import React from 'react';
import Dice from '../components/dice'
import Board from '../components/board'
import Player from '../components/player'
import Snake from '../components/snakes'
import Ladder from '../components/ladders'

const Game = () => {
    return (
      <div>
        <h1>Snakes and Ladders</h1>
        <Dice/>
        <Player />
        <Snake />
        <Ladder />
        <Board />
      </div>
    )
  }
   export default Game;