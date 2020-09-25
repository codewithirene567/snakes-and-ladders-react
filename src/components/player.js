//container component
///https://www.youtube.com/watch?v=DqpPgK13oEM

import React, { Component } from 'react';
//import PlayerInfo from './playerInfo';

class Player extends Component {
    
   
//the display of the icon
    render (props) {
        return (
      
                <div className="pawn" id="pawn" >
                    <img width="50" alt="pawn" src={props.src}></img>
                </div>
                
               
            )

    }
}
export default Player