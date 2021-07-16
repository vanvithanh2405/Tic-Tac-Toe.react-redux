import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">{this.props.ketQua}</div>
                <div className="display-4 text-success">Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span></div>
                <div className="display-4 text-success">Tổng số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ketQua: state.ticTacToeReducer.ketQua,
        soBanThang: state.ticTacToeReducer.soBanThang,
        soBanChoi: state.ticTacToeReducer.soBanChoi,
    }
}

export default connect(mapStateToProps)(Result)