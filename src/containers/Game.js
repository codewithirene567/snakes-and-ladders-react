import React from 'react';
import Dice from '../components/dice'
import Board from '../components/board'
import Player from '../components/player'
import Snake from '../components/snakes'

const Game = () => {
    return (
      <div>
        <Dice/>
        <Player />
        <Snake />
        <Board />
        <h1>This is the game board</h1>
      </div>
    )
  }
   export default Game;