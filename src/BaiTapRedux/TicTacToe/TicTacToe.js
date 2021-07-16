import React, { Component } from 'react';
import Player from './Player';
import Computer from './Computer';
import Result from './Result';
import { connect } from 'react-redux';
import './TicTacToe.css';

class TicTacToe extends Component {
    

    
    render() {
        return (
            <div className="gameTicTacToe">
                <div className="row text-center mt-5">
                    <div className="col-4 mt-3">
                        <Player />
                    </div>
                    <div className="col-4 mt-3">
                        <Result />
                        <button className="btn btn-success p-3 mt-5" onClick={() => {
                            this.props.playGame()
                        }}>Play game</button>
                    </div>
                    <div className="col-4 mt-3">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {

            let count = 0;

            //khai báo lặp đi lặp lại
            let randomComputerItem = setInterval(() => {
                const action = {
                    type: 'RANDOM'
                }
                dispatch(action)
                count++;
                if (count >= 30) {
                    clearInterval(randomComputerItem)

                    dispatch({
                        type: 'RESULT',
                    })
                }
            }, 100)


        }
    }
}

export default connect(null, mapDispatchToProps)(TicTacToe)

