const initialState = {
    addressData : {}
};

const addressReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADDRESS_DATA':
            return {...state,addressData:action.payload}
        default:
            return state;
    }
}

export default addressReducer