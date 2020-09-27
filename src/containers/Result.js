import React from 'react';
import { connect } from 'react-redux';

const Result = () => {
    return (
      <div>
        <h1>Here are the results of the game you just played</h1>
        
      </div>
      
    )
  }
{/* <div
        someoneWon(props.history.push('/results'))>
      </div> */}

      const mapStateToProps = (state) => {
        //debugger
        console.log(state)
      
    }

    export default connect(mapStateToProps)(Result)
 