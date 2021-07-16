

const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: true },
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: false }
    ],

    ketQua: 'TIC TAC TOE !',
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/keo.png' }
}

const ticTacToeReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'CHON_KEO_BUA_BAO': {
            // reset mảng cược
            let mangCuocUpdate = [...state.mangDatCuoc];
            // tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền vào
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.payload) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            // setState của mảng cược => render lai giao dien
            state.mangDatCuoc = mangCuocUpdate
            console.log('mangDatCuocUpdate', mangCuocUpdate)
            return { ...state }
        }

        case 'RANDOM':{
            
            let soNgauNhien = Math.floor(Math.random() *3);
            let quanCoNgauNhien = state.mangDatCuoc[soNgauNhien];

            state.computer = quanCoNgauNhien;
            
            console.log('random',action)
            return {...state}
        }

        case 'RESULT': {
            let player = state.mangDatCuoc.find(item=>item.datCuoc === true);
            let computer = state.computer;

            switch(player.ma){
                case 'keo': {
                   if(computer.ma ==='keo'){
                       state.ketQua = 'TIE !!!'
                   } else if(computer.ma === 'bua'){
                       state.ketQua = 'BẠN ĐÃ THUA'
                   } else {
                        state.soBanThang +=1
                       state.ketQua = 'BẠN THẮNG'
                   }
                    break;
                }
                case 'bua': {
                    if(computer.ma ==='bua'){
                        state.ketQua = 'TIE !!!'
                    } else if(computer.ma === 'bao'){
                        state.ketQua = 'BẠN ĐÃ THUA'
                    } else {
                        state.soBanThang +=1
                        state.ketQua = 'BẠN THẮNG'
                    }
                     break;
                }
                
                case 'bao': {
                    if(computer.ma ==='bao'){
                        state.ketQua = 'TIE !!!'
                    } else if(computer.ma === 'keo'){
                        state.ketQua = 'BẠN ĐÃ THUA'
                    } else {
                        state.soBanThang +=1
                        state.ketQua = 'BẠN THẮNG'
                    }
                     break;
                 }
                default: {
                    state.ketQua = 'YOU WIN ^o^'
                }
            }
            state.soBanChoi +=1;
            return {...state}
        }
        default: return { ...state }
    }
}


export default ticTacToeReducer;