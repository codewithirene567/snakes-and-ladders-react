import React from 'react'

export default function GamePanel(props)  {
return (
<div id="instructions">
    How to play: This game can have multiple players who all
    take turns rolling a die and the number of die is the number
    of spaces they move on the board which has 100 squares to land
    on. When they get to a ladder space, the player game piece is 
    upposed to move up until it reaches the end of that ladder object
    placed on the board. On the other hand, if they land on a snake,
    they will move down until they reach the end of that snake object on the board.
    The first player who gets to 100 spaces officially wins the game.

</div>
)
}
