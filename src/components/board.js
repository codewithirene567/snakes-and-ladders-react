//container component
//divs and colums
import React, { Component } from 'react';
import Square from './square';

export default class Board extends Component {

makeSquares = (i) => {
    return <Square value={this.props.squares[i]}
    />
}

    render () {
        return (
            <div className="row">
              {this.makeSquares(0)}
              {this.makeSquares(1)}
              {this.makeSquares(2)}
              {this.makeSquares(3)}
              {this.makeSquares(4)}
              {this.makeSquares(5)}
              {this.makeSquares(6)}
              {this.makeSquares(7)}
              {this.makeSquares(8)}
              {this.makeSquares(9)}
            </div>
                <div className="row">
                {this.makeSquares(10)}
                {this.makeSquares(11)}
                {this.makeSquares(12)}
                {this.makeSquares(13)}
                {this.makeSquares(14)}
                {this.makeSquares(15)}
                {this.makeSquares(16)}
                {this.makeSquares(17)}
                {this.makeSquares(18)}
                {this.makeSquares(19)}
            </div>
            <div className="row">
            {this.makeSquares(20)}
            {this.makeSquares(21)}
            {this.makeSquares(22)}
            {this.makeSquares(23)}
            {this.makeSquares(24)}
            {this.makeSquares(25)}
            {this.makeSquares(26)}
            {this.makeSquares(27)}
            {this.makeSquares(28)}
            {this.makeSquares(29)}
            </div>
            <div className="row">
            {this.makeSquares(30)}
            {this.makeSquares(31)}
            {this.makeSquares(32)}
            {this.makeSquares(33)}
            {this.makeSquares(34)}
            {this.makeSquares(35)}
            {this.makeSquares(36)}
            {this.makeSquares(37)}
            {this.makeSquares(38)}
            {this.makeSquares(39)}
            </div>
            <div className="row">
            {this.makeSquares(40)}
            {this.makeSquares(41)}
            {this.makeSquares(42)}
            {this.makeSquares(43)}
            {this.makeSquares(44)}
            {this.makeSquares(45)}
            {this.makeSquares(46)}
            {this.makeSquares(47)}
            {this.makeSquares(48)}
            {this.makeSquares(49)}
            </div>
            <div className="row">
            {this.makeSquares(50)}
            {this.makeSquares(51)}
            {this.makeSquares(52)}
            {this.makeSquares(53)}
            {this.makeSquares(54)}
            {this.makeSquares(55)}
            {this.makeSquares(56)}
            {this.makeSquares(57)}
            {this.makeSquares(58)}
            {this.makeSquares(59)}
            </div>
            <div className="row">
            {this.makeSquares(60)}
            {this.makeSquares(60)}
            {this.makeSquares(62)}
            {this.makeSquares(63)}
            {this.makeSquares(64)}
            {this.makeSquares(65)}
            {this.makeSquares(66)}
            {this.makeSquares(67)}
            {this.makeSquares(68)}
            {this.makeSquares(69)}
            </div>
        <div className="row">
            {this.makeSquares(70)}
            {this.makeSquares(71)}
            {this.makeSquares(72)}
            {this.makeSquares(73)}
            {this.makeSquares(74)}
            {this.makeSquares(75)}
            {this.makeSquares(76)}
            {this.makeSquares(77)}
            {this.makeSquares(78)}
            {this.makeSquares(79)}
        </div>
        <div className="row">
        {this.makeSquares(80)}
        {this.makeSquares(81)}
        {this.makeSquares(82)}
        {this.makeSquares(83)}
        {this.makeSquares(84)}
        {this.makeSquares(85)}
        {this.makeSquares(86)}
        {this.makeSquares(87)}
        {this.makeSquares(88)}
        {this.makeSquares(89)}
        </div>
        <div className="row">
        {this.makeSquares(90)}
        {this.makeSquares(91)}
        {this.makeSquares(92)}
        {this.makeSquares(93)}
        {this.makeSquares(94)}
        {this.makeSquares(95)}
        {this.makeSquares(96)}
        {this.makeSquares(97)}
        {this.makeSquares(98)}
        {this.makeSquares(99)}
        </div>

        )
    }
}