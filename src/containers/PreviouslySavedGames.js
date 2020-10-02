import React from 'react';
import { connect } from 'react-redux';
import { getAllGame, getPlayers } from '../actions/gameActions';
import ListOfNewGames from '../components/listOfNewGames';


class PreviouslySavedGames extends React.Component {
  
    grabGame(event){
  //      let game = props.getGame()
  //      let players = props.getPlayers()
       console.log(this.props.game)
       console.log(this.props.player)
       console.log("grabGame")
       

    }

    grabGAMES(){
      //console.log(this.props.game)
      let arrayOfGames = []
      let gamesInArray = this.props.game
      arrayOfGames.push(gamesInArray)
    //  let game = this.props.game
    //  return game
    return arrayOfGames.toString()
    }

    grabPLAYERS(){
       let player1 = this.props.player
       let array = []
       array.push(player1)
       return array.toString()
    }
   componentDidMount() {
    console.log("run component did mount ")
    this.props.getAllGame()
    this.props.getPlayers()
    
}

    render () {
      console.log(this.props.game)
      return(
      <div>
        <h1 className="savedGames">Previously Saved Games - Click to Load</h1>
        <div >
          <div>
          < ListOfNewGames 
       players={this.props.game} games={this.props.game} />
          </div>
        </div> 
        
        

      </div>
      )
  }

   

}
const mapStateToProps = (state) => {
   console.log(state)
   return {game: state.gameReducer,
   player: state.gameReducer.allplayers}
}
  export default connect(mapStateToProps, { getAllGame,getPlayers} )(PreviouslySavedGames)