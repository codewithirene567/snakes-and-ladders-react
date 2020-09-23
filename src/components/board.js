//container component
//divs and colums
import React, { Component } from 'react';

export default class Board extends Component {

makeSquares = () => (
    <div id="1"  style="background-color: rgb(255, 255, 255);"></div>
    <div id="2"  style="background-color: rgb(255, 255, 255);"></div>
)

    render () {
        return (
            <div id="squares">
              {this.makeSquares()}
            </div>
        )
    }
}