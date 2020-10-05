import React from 'react';
import { connect } from 'react-redux';

const Result = (props) => {
 
 
    return (
      <div>
        <h1 id="hereResults">Here are the results of the game you just played</h1>
        <p id="personWin">{props.winnerName} is the winner</p>
        <p id="resultTimestamp">{props.timeStamp}</p>
        <button id="backToHome" onClick={()=>{props.history.push('/home')}}> Click here to go back to the home page</button>
      </div>
      
    )
  }

  const mapStateToProps = (state) => {
      let winnerNamel = ''
        if (state.playerReducer.winStatus === true) { 
          winnerNamel = state.playerReducer.winnerName
        }
    
      
      return {winnerName: winnerNamel, timeStamp:state.playerReducer.timeStamp}
      
        
    }

   

    export default connect(mapStateToProps, null)(Result)
 