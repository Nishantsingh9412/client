const initialState = {
    hoursData : {}
};

const hoursReducer = (state = initialState,action) => {
    switch(action.type){
        case 'HOUR_DATA':
            return {...state,hoursData:action.payload}
        default:
            return state;
    }
}

export default hoursReducer;