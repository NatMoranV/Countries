const initialState = {
  name: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload, 
      };
    
    default:
      return state;

      case "FILTER":
        const { continent, activity } = payload; 
        // Filtrar por género o estado
        const filteredCountries = state.allCountries.filter(
          (country) => country.continent === continent || country.activity === activity
        );
      
        return {
          ...state,
          myCountries: filteredCountries,
        };
  }
};

export default reducer;