//container component
///https://www.youtube.com/watch?v=DqpPgK13oEM

import React, { Component } from 'react';
//import PlayerInfo from './playerInfo';

class Player extends Component {
    
    state = {
        currentPostion: {x:0, y:0},
        // {left:`${x}`, right: `${y}`},
      
    } 

    render () {
        return (
            // <div>
            //    {/* <PlayerInfo /> */}
            //    </div>
                <div className="pawn" id="pawn" >
                    <img width="50" alt="pawn" src="https://www.iconfinder.com/data/icons/chess-26/128/2-512.png"></img>
                </div>
                
               
            )

    }
}
export default Player