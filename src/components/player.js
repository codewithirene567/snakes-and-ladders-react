//container component
///https://www.youtube.com/watch?v=DqpPgK13oEM
//https://github.com/sayjeyhi/snakeAndLadders/blob/master/src/components/Canvas/Player.js
import React, { Component } from 'react';

class Player extends Component {
    
    state = {
        //currentPostion: {x:0, y:0},
        // {left:`${x}`, right: `${y}`},
        name:'',
        status:'lose'

    } 

    render () {
        return (
 
                <div className="pawn" id="pawn" >
                    <img width="50" alt="pawn" src="https://www.iconfinder.com/data/icons/chess-26/128/2-512.png"></img>
                </div>
                
            
            )

    }
}
export default Player