import React from 'react';
import Dice from '../components/dice'
import Board from '../components/board'
import Player from '../components/player'
import Snake from '../components/snakes'
import Ladder from '../components/ladders'

const Game = () => {
    return (
      <div>
        <Dice/>
        <Player />
        <Snake />
        <Ladder />
        <Board />
        <h1>This is the game board</h1>
        <h1>test</h1>
      </div>
    )
  }
   export default Game;