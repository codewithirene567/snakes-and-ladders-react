import React, { createContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom'
import { getGame, getFirstPlayer, getPlayerOnebyOne, setPlayers } from '../actions/gameActions';
import { connect } from 'react-redux';
//const ListOfNewGames = (props) => {
    class ListOfNewGames extends React.Component {
    handleClick (gameId){
        //console.log(window.history)
        alert(gameId)
        //get stuff from database and put it into state
        //return <Redirect to="/game" />
        //let gameId = game.id
       //props.history.push('/game')
      //window.history.push('/game')
      //this.setState()

      //this.props.getGame(gameId)
    //   this.props.getPlayerOnebyOne()

        console.log(this.props.games[gameId].timeStamp)
      
      
      let currentTimeStamp = this.props.games[gameId].timeStamp
      let array = this.props.games[gameId].allplayers.filter((player)=>{
        return currentTimeStamp ===player.timeStamp
      })
        console.log(array)
        //make a new action to return a new array with all players inside
        //debugger
        this.props.setPlayers(array)
    //   for(let i=0; i < this.props.players.length; i++){
    //       if (currentTimeStamp === this.props.players[i].timeStamp){
    //      //currentTimeStamp when they press save - game table=== timestamp as soon as they press save the game - player table
    //     //  let object = {name: this.props.players[i].name, playerId: this.props.players[i].playerId, currentPostion: this.props.players[i].currentPostion}
    //         // console.log(i);
    //         array.push(i+1)
    //         // this.props.getPlayerOnebyOne(i);
      
    //     //  [{}, {}]
    //     //filter all players this.props.players.filter
    //     //get array of players
    //     //send an array in 
    //   }
    // //   this.props.getFirstPlayer(array[0]);
    //   for (let i = 1; i < array.length; i++) {
    //     this.props.getPlayerOnebyOne(array[i]);
    //   }
     this.props.getGame(gameId)
      this.props.history.push({
        pathname:"/game",
        state: {localGame:this.props.games[gameId], localPlayers: []}
       });
       //redirecting it to game once someone clicks on a game
    }

    //   context.router.push({

    //   })
      //props.history.push('/game')
      //window.location.replace(gameId, "http://127.0.0.1:3001/game");
       
    
    //console.log(props)
    // console.log(props.games)
    render () {
        
    if (this.props.games) {
        let gamesArray = Array.from(this.props.games);
        
        return gamesArray.map(game => {
            let string =""
            console.log(game, game['allplayers']);
            for(let i=0; i < game.allplayers.length; i++) {
            if (game.allplayers[i].timeStamp === game.timeStamp) {
               //going through each of the players timestamp through their indexes and then accessing the 
               //game variable from the map argument to get the timestamp from each game
               //if they are equal to each other return this string 
               //""" "players
                string = string + " " + game.allplayers[i].name

            }
        }
        
        //console.log(props.history)
        return <div><button onClick = {(e) => this.handleClick(game.id, e, this.props)} >{game.timeStamp} {string}</button></div>
        })
       
    }
    return null;
    }    
    //if map is not a function then the array-like collection is probably an html collection

         
 

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
 
}
//export default withRouter(ListOfNewGames);
export default withRouter(connect(null, {getGame, getFirstPlayer, getPlayerOnebyOne, setPlayers})(ListOfNewGames));