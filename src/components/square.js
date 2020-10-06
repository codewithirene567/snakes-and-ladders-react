import React from 'react'
//import playerReducer from '../reducers/playerReducer'
import Player from './player'
import {connect} from 'react-redux'

function Square(props) {
  
      function conditionalPlayer1() {
         
            if(props.player1 != null && props.cellId === props.player1.currentPostion) {
              return <Player id= "pawn1" link = "https://www.iconfinder.com/data/icons/chess-26/128/2-512.png"/>
         } 
        }
          function conditionalPlayer2() {
         
            if (props.player2 != null && props.cellId === props.player2.currentPostion) {
               //if the player's existence is not equal to nothing and if the cell's id is equal to the player's condition
             return <Player id= "pawn2" link = "https://i.ibb.co/3mn7RqQ/strawberry.png" alt="strawberry" />
          
          }
         }
         function conditionalPlayer3() {
             if (props.player3 != null && props.cellId === props.player3.currentPostion){
                return <Player id= "pawn3" link = "https://i.ibb.co/KFbg9ks/greenone.png" alt="greenone" />
             }
            }
           function conditionalPlayer4() {
            if (props.player4 != null && props.cellId === props.player4.currentPostion){
               return <Player id= "pawn4" link = "https://i.ibb.co/3k2SbMc/blueone.png" alt="blueone" />
            }
           }
      
           
    
    return (
        
     
        
         
        <td className="square" style = {{background: props.color}} id={props.cellId}>
          {/* now when button is clicked props.color will have value from  */}
            {props.cellId +1}
            {conditionalPlayer1()}
            {conditionalPlayer2()}
            {conditionalPlayer3()}
            {conditionalPlayer4()}
        </td>
    )
}
//four players back from store, get an array of players, pass down information about the color
//player 1 is this player 2 is that or set an array props.player[0] first person
const mapStateToProps= (state) => ({
    //state from the store
    //anything you return from here is now a prop
    
     player1: state.playerReducer.allplayers[0],
     player2: state.playerReducer.allplayers[1],
     player3: state.playerReducer.allplayers[2],
     player4: state.playerReducer.allplayers[3]

})



export default connect(mapStateToProps)(Square)



