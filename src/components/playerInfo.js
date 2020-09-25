import React, { Component } from 'react';



class PlayerInfo extends Component {
constructor(){
    super();
    this.state ={
    name:'',
    color:'',
    status:'lose'
    }
}



handleChange = (event) => {
    
    this.setState({
        [event.target.name]: event.target.value});
        console.log(this.state)
 
}
  // this.setState({color: this.color})
handleSubmit = (event) =>{
    event.preventDefault()
    this.props.addPlayer({name: this.state.name, color: this.state.color, status: this.state.status})
    console.log(this.state)
    //   this.setState({name: '', color:'',
    //   status:'lose'})
    //   const playerInfoObject = {
    //     name: this.state.name,
    //     color: this.state.color
    // }
    // this.addPlayer(playerInfoObject)
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
        <label>
            Color:
            <input type="text" name="color" value={this.state.color} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
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