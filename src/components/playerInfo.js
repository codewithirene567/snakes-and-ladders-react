import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerInfo extends Component {
constructor(){
    super();
    this.state ={
    name:'',
    color:'',
    status:'lose'
    }
}

addPlayer = (playerInfoObject) => ({
    type: 'ADD_PLAYER',
    payload: playerInfoObject
})

handleChange = (event) => {
    
    this.setState({
        [event.target.name]: event.target.value});
        console.log(this.state)
 
}
  // this.setState({color: this.color})
handleSubmit = (event) =>{
    event.preventDefault()
    this.addPlayer({name: this.state.name, color: this.state.color, status: this.state.status})
    console.log(this.state)
    // this.setState({name: '', color:'',
    // status:'lose'})
}

render () {
    console.log(this.handleChange)
    
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
        </div>
    )
}
}

const mapDispatchToProps = (state) => ({
    players: state.players
})

export default connect(mapDispatchToProps, null) (PlayerInfo)