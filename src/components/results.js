//presentational component
import React from 'react'
import { connect } from 'react-redux'

 function Results(props){
     console.log(props)
    return (
<div>name of winner and date of game</div>

    )
  }
    const mapStateToProps = (state) => {
        //debugger
        //console.log(state)
        // doneWinner: 
    }

    export default connect(mapStateToProps)(Results)
