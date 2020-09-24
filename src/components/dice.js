//container component
import React, { Component } from 'react';


class Dice extends Component {

    
    
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
                hey
                <h1>Click the dice to roll</h1>
            <section class="container">
            <div id="cube" onClick={this.handleClick}>
                <div class="front">
                <span class="dot dot1"></span>
                </div>
                <div class="back">
                <span class="dot dot1"></span>
                <span class="dot dot2"></span>
                </div>
                <div class="right">
                <span class="dot dot1"></span>
                <span class="dot dot2"></span>  
                <span class="dot dot3"></span>
                </div>
                <div class="left">
                <span class="dot dot1"></span>
                <span class="dot dot2"></span>  
                <span class="dot dot3"></span>
                <span class="dot dot4"></span>
                </div>
                <div class="top">
                <span class="dot dot1"></span>
                <span class="dot dot2"></span>  
                <span class="dot dot3"></span>
                <span class="dot dot4"></span>
                <span class="dot dot5"></span>
                </div>
                <div class="bottom">
                <span class="dot dot1"></span>
                <span class="dot dot2"></span>  
                <span class="dot dot3"></span>
                <span class="dot dot4"></span>
                <span class="dot dot5"></span>
                <span class="dot dot6"></span>
                </div>
            </div>
            </section>
            </div>
        )
    }
}
export default Dice