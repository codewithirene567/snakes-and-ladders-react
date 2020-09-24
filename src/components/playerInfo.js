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
     this.setState({name: this.name})
     this.setState({color: this.color})
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
export default PlayerInfo