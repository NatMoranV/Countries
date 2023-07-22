const initialState = {
    id: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ID':
        return {
          ...state,
          id: action.payload,
        };
      case 'CLEAR_ID':
        return {
          ...state,
          id: null,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;