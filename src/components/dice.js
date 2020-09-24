//container component
import React, { Component } from 'react';

//https://codepen.io/paulina-cisek/pen/VwvEOaz
class Dice extends Component {

    state = {
        side:''

    } 

    handleClick = () => {
        let cube = document.getElementById('cube');

      let min = 1;
      let max = 24;
      let xRand = this.getRandom(max, min);
      let yRand = this.getRandom(max, min);
        
      cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
      cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
    }
    
     getRandom(max, min) {
      return (Math.floor(Math.random() * (max-min)) + min) * 90;
    }

    render () {
        return (
            <div>
            
            <section className="container">
            <div id="cube" onClick={this.handleClick}>
                <div className="front" id="1">
                <span className="dot dot1"></span>
                </div>
                <div className="back">
                <span className="dot dot1"></span>
                <span className="dot dot2"></span>
                </div>
                <div className="right">
                <span className="dot dot1"></span>
                <span className="dot dot2"></span>  
                <span className="dot dot3"></span>
                </div>
                <div className="left">
                <span className="dot dot1"></span>
                <span className="dot dot2"></span>  
                <span className="dot dot3"></span>
                <span className="dot dot4"></span>
                </div>
                <div className="top" id="5">
                <span className="dot dot1"></span>
                <span className="dot dot2"></span>  
                <span className="dot dot3"></span>
                <span className="dot dot4"></span>
                <span className="dot dot5"></span>
                </div>
                <div className="bottom">
                <span className="dot dot1"></span>
                <span className="dot dot2"></span>  
                <span className="dot dot3"></span>
                <span className="dot dot4"></span>
                <span className="dot dot5"></span>
                <span className="dot dot6"></span>
                </div>
            </div>
            </section>
            </div>
        )
    }
}
export default Dice