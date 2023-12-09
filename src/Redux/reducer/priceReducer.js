const initialState = {
    totalPrice : 0
};

const TotalpriceReducer = (state = initialState,action) => {
    switch(action.type){
        case 'SET_TOTAL_PRICE':
            return {...state,totalPrice:action.payload}
        default:
            return state;
    }
}

export default TotalpriceReducer;
