import React, { Component } from 'react';

class PlayerInfo extends Component {
   
constructor(){
    super();
   this.variable = 0
    this.state ={
    name:'',
    color:'',
   
    }
}



handleChange = (event) => {
    
    this.setState({
        [event.target.name]: event.target.value});
        console.log(this.state)
 
}
  // this.setState({color: this.color})
  //from dice.js how can I access stuff in playerreducer.js for move forward
handleSubmit = (event) =>{
    event.preventDefault()
   //console.log(this.props)
    this.props.addPlayer({name: this.state.name, currentPostion: 0, id: this.variable})
   
    console.log(this.state)
       this.setState({name: '', color:'',
       })
    //   const playerInfoObject = {
    //     name: this.state.name,
    //     color: this.state.color
    // }
    // this.addPlayer(playerInfoObject)
    this.variable ++
}



render () {
    //console.log(this.state.value)
    
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input type="text" name = "name"value={this.state.name} onChange={this.handleChange} />
        </label>
        <br></br>
        <br></br>
        
        <input type="submit" value="Save Player" />
        </form>
        
        <p>{this.state.value}</p>
        </div>
    )
}
}




// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPlayer: (player) => dispatch({
//             type: 'ADD_PLAYER',
//             payload: player
//         })
//     }
// }

export default (PlayerInfo)