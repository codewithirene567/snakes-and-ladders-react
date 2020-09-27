import React from 'react';


const PlayerCreated = (props) => {
 console.log(props.players) //props is currently rendering an empty {}
     if (props.players) {
       return props.players.allplayers.map(player => {
         return <div><li>{player.name}</li><br></br></div>
      })
    } else {
        return null
    }
    
 
 

}

export default PlayerCreated;

//https://www.youtube.com/watch?v=fcMNZ7j4JSg
//https://www.youtube.com/watch?v=DqpPgK13oEM