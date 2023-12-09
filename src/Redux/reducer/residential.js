const initialState = {
    residentialData: {
        hall: 0,
        bedroom: 0,
        bathroom: 0,
        kitchen: 0,
        toilet: 0,
        stairs: 0,
        garden: 0,
        livingRoom: 0,
        other: 0
    }
};


const residentialReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESIDENTIAL_DATA':
            return { ...state, residentialData: action.payload };
        default:
            return state;
    }
}

export default residentialReducer;