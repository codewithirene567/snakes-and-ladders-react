import React from 'react';
class Button extends React.Component {
    constructor(props){
        super(props)
        //this.state = {clicked: false}
        
      }

    buttonFunction(){
        // console.log(this.props);
    if (this.props.buttonState === "grey"){
        this.props.parentCallBack("orange")
    } else {
        this.props.parentCallBack("grey")
    }
             console.log(this.props.buttonState)
        
        
    }
    

    render() {
        return(
    <div>
<button id="dark" onClick={()=> this.buttonFunction()} >dark mode</button> 

{/* when this button is clicked then it will make this grey because it wasn't grey in the first place */}
    </div>
        )
    }
}
export default Button