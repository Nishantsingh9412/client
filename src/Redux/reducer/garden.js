const initialState = {
    gardenData : {}
};

const gardenReducer  = (state = initialState,action) => {
    switch(action.type){
        case 'GARDEN_DATA':
            return {...state,gardenData:action.payload};
        default:
            return state;
    }
}

export default gardenReducer