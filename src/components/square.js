import React from 'react'
//import playerReducer from '../reducers/playerReducer'
import Player from './player'
import {connect} from 'react-redux'

function Square(props) {
   //console.log(props)
      function conditionalPlayer1() {
         if (props.cellId === props.player1.currentPostion){
              return <Player link = "https://www.iconfinder.com/data/icons/chess-26/128/2-512.png"/>
         }
        }
          function conditionalPlayer2() {
          if (props.cellId === props.player2.currentPostion){
             return <Player link = "data:image/png;base64,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"/>
          
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

