// Window reducer.js
const initialState = {
    windowData: {}
  };
  
  const windowReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'WINDOWS_DATA':
        return {...state,windowData: action.payload};
      default:
        return state;
    }
  }
  
  export default windowReducer;