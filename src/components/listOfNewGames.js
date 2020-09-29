import React from 'react';


const ListOfNewGames = (props) => {
    console.log(props)
     console.log(props.games)
    if (props.games) {
        let gamesArray = Array.from(props.games);
        return gamesArray.map(game => {
            let string =""
            for(let i=0; i < props.players.length; i++) {
            if (props.players[i].timeStamp === game.timeStamp) {
               //going through each of the players timestamp through their indexes and then accessing the 
               //game variable from the map argument to get the timestamp from each game
               //if they are equal to each other return this string 
               //""" "players
                string = string + " " + props.players[i].name

            }
        }
        return <div><button>{game.timeStamp} {string}</button></div>
        })
       
    }
    //if map is not a function then the array-like collection is probably an html collection
//debugger
    //      if (props.players) {
    //        return props.players.map(player => {
    //    return <div><button onClick = {()=>{props.history.push('/game')}}>{player.name}  -  {player.timeStamp}</button></div>
    //       })
    
        //     if (props.games) {
        //         return props.games.map(game => {
        //             return <div><button>{game.timestamp}</button></div>
        //         })
            
        // } else {
           // return null
        // }
         }
 

//    const PlayerCreated = (props) => {
//     //console.log(props.players) //props is currently rendering an empty {}
//         if (props.players) {
//           return props.players.allplayers.map(player => {
//             return <div><li>{player.name}</li><br></br></div>
//          })
//        } else {
//            return null
//        }
       
    
    
   
//    }
 

export default ListOfNewGames;