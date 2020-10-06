import React from 'react';


const PlayerCreated = (props) => {

     if (props.players) {
       return props.players.allplayers.map(player => {
   
         return <div><li key = {player.playerId}>{player.name}</li><br></br></div>
      })
    } else {
        return null
    }
    
 
 

}

export default PlayerCreated;

