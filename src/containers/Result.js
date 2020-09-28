import React from 'react';
import { connect } from 'react-redux';

const Result = (props) => {
 
 
    return (
      <div>
        <h1>Here are the results of the game you just played</h1>
        <p>{props.winnerName} is the winner</p>
        <p>{props.timeStamp}</p>
        
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
 