import React, { Component } from 'react';
import { connect } from 'react-redux';

class Computer extends Component {
    render() {


        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 30px;}
            50% {top: -50px;}
            75% {top: 30px;}
            100% {top: 0;}
          }`

        return (
            <div className="text-center playerGame">
                <style>
                    {keyframe}
                </style>
                <div className="pickResult" style={{ position: 'relative' }}>
                    <img style={{ position: 'absolute', left:'30%' ,animation: `randomItem${Date.now()} 0.5s ` }} className="mt-5" width={60} height={60} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/playerComputer.png" alt="player" />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        computer: state.ticTacToeReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)
