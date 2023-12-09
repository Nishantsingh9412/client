const initialState = {
    isSaved: false,
};

export const saveReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_STATE':
            return { ...state, isSaved: true };
        case 'RESET_SAVE_STATE':
            return { ...state, isSaved: false };
        default:
            return state;
    }
};