const initialState = {
  selectedContinent: "",
  selectedActivity: "",
  sortOrder: "asc",
  sortField: "name",
  searchValue: "",
  currentPage: 1,
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTERS":
      return {
        ...state,
        selectedContinent: action.payload.continent,
        selectedActivity: action.payload.activity,
        currentPage: 1,
      };
    case "SET_SORT":
      return {
        ...state,
        sortField: action.payload.field,
        sortOrder: action.payload.order,
        currentPage: 1,
      };
    case "SET_SEARCH_VALUE":
      return {
        ...state,
        searchValue: action.payload,
        currentPage: 1,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "SET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
