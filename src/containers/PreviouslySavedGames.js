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
      console.log(this.props.player)
      return(
      <div>
        <h1>List of Previously Saved Games</h1>
        <div >
          <div>
          < ListOfNewGames 
       players={this.props.player} games={this.props.game} />
          </div>
        </div> 
        
        

      </div>
      )
  }

   

}
const mapStateToProps = (state) => ({
  //  console.log(state)
   game: state.gameReducer,
   player: state.playerReducer.allplayers
})
  export default connect(mapStateToProps, { getAllGame,getPlayers} )(PreviouslySavedGames)