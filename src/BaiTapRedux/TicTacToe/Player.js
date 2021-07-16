import React, { Component } from 'react'
import { connect } from 'react-redux'


class Player extends Component {
    render() {
        console.log('Array', this.props.mangDatCuoc)
        return (
            <div className="text-center playerGame">
                <div className="pickResult">
                    <img className="mt-5" width={60} height={60} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/player.png" alt="player" />

                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {

                        // xét giá trị đặt cược và thêm viền cho item được chọn
                        let border = {};

                        if (item.datCuoc) {
                            border = { border: '5px solid orange' }
                        }



                        return <div className="col-4">
                            <button style={border} className="btnItem" onClick={() => {
                                this.props.datCuoc(item.ma)
                            }}>
                                <img width={50} height={50} src={item.hinhAnh} alt={item.hinhAnh} />
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.ticTacToeReducer.mangDatCuoc
    }
}


const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            const action = {
                type: 'CHON_KEO_BUA_BAO',
                payload: maCuoc
            }

            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
