import React from 'react'
//import playerReducer from '../reducers/playerReducer'
import Player from './player'
import {connect} from 'react-redux'

function Square(props) {
   //console.log(props)
      function conditionalPlayer1() {
         if (props.cellId == props.player1.currentPostion){
              return <Player src = "https://www.iconfinder.com/data/icons/chess-26/128/2-512.png"/>
         }
        }
          function conditionalPlayer2() {
          if (props.cellId == props.player2.currentPostion){
             return <Player src = "https://www.iconfinder.com/data/icons/chess-26/128/2-512.png"/>
          }
         }
        //  function conditionalPlayer3() {
        //      if (props.cellId == props.player3.currentPostion){
        //         return <Player/>
        //      }
        //     }
        //    function conditionalPlayer4() {
        //     if (props.cellId == props.player4.currentPostion){
        //        return <Player/>
        //     }
        //    }
      
              //could be props.player[0]
              //pass down props of player color
    
    return (
        
         //conditional statement in square, render player if id, make props.value show number on board, connect squares to the store
         //do any of these 4 squares have id equal to props.value
        
         
        <td className="square" id={props.cellId}>
            {props.cellId +1}
            {conditionalPlayer1()}
            {conditionalPlayer2()}
        </td>
    )
}
//four players back from store, get an array of players, pass down information about the color
//player 1 is this player 2 is that or set an array props.player[0] first person
const mapStateToProps= (state) => ({
   // console.log(state)
    //state from the store
    //anything you return from here is now a prop
    
     player1: state.playerReducer.allplayers[0],
     player2: state.playerReducer.allplayers[1],
     player3: state.playerReducer.allplayers[2],
     player4: state.playerReducer.allplayers[3]

})



export default connect(mapStateToProps)(Square)

//npm install --save redux-devtools-extension

