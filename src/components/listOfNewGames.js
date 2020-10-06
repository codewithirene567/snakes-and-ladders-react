import React from 'react';
import { withRouter } from 'react-router-dom'
import { getGame, setPlayers } from '../actions/gameActions';
import { connect } from 'react-redux';

    class ListOfNewGames extends React.Component {
    handleClick (gameId){
        

        console.log(this.props.games[gameId].timeStamp)
      
      
      let currentTimeStamp = this.props.games[gameId].timeStamp
      let array = this.props.games[gameId].allplayers.filter((player)=>{
        return currentTimeStamp ===player.timeStamp
      })
       
        this.props.setPlayers(array)
        //set players is giving the all players array value
    
     this.props.getGame(gameId)
     console.log(this.props.games[gameId]);
      this.props.history.push({
        pathname:"/game",
        state: {localGame:this.props.games[gameId], localPlayers: []}
       });
       //redirecting it to game once someone clicks on a game
    }

    
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
        let newDate = new Date();
        newDate.setTime(game.timeStamp*1000);
        let dateString = newDate.toUTCString();
       
        return <div><button className="savedGames" onClick = {(e) => this.handleClick(game.id, e, this.props)} >{dateString} {string}</button></div>
        })
       
    }
    return null;
    }    
   
 
}

export default withRouter(connect(null, {getGame, setPlayers})(ListOfNewGames));