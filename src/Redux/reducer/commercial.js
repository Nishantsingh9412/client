const initialState = {
    commercialData : {
        floor:0,
        restRoom:0,
        washRoom:0,
        kitchen:0,
        commonRoom:0,
        officeRoom:0,
    }
};

const CommercialReducer = (state = initialState,action) => {
    switch(action.type){
        case 'COMMERCIAL_DATA':
            return {...state,commercialData:action.payload}
        default:
            return state;
    }
}
export default CommercialReducer