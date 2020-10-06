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
 
handleSubmit = (event) =>{
    event.preventDefault()
   console.log(this.props)
    this.props.addPlayer({name: this.state.name, currentPostion: 0, playerId: this.variable})
   
    console.log(this.state)
       this.setState({name: '', color:'',
       })
    
    this.variable++
    if (this.variable === 3){
        document.getElementById('saveButton').disabled = true
    }
}



render () {
  
    
    return (
        <div >
        <form onSubmit={this.handleSubmit}>
        <label className="welcomeValue">
            Name:
            <input className="welcome" type="text" name = "name"value={this.state.name} onChange={this.handleChange} />
        </label>
        <br></br>
        <br></br>
        
        < input  id="saveButton" className="welcome" type="submit" value="Save Player" />
        </form>
        <br></br>
        <p>{this.state.value}</p> 
        </div>
    )
}
}






export default (PlayerInfo)