//container component
import React, { Component } from 'react';

class Player extends Component {
    
    state = {
        currentPostion: 0,
        name:'',
        status:'lose'

    } 

    render () {
        return (
            
             
                <div className="pawn" id="pawn" >
                    <img width="50" src="https://www.iconfinder.com/data/icons/chess-26/128/2-512.png"></img>
                </div>
                
            
            )

    }
}
export default Player