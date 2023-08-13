export const SET_FILTERS = "SET_FILTERS";
export const SET_SORT = "SET_SORT";
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const TOGGLE_THEME = "TOGGLE_THEME";

export const setFilters = (continent, activity) => ({
  type: SET_FILTERS,
  payload: { continent, activity },
});

export const setSort = (field, order) => ({
  type: SET_SORT,
  payload: { field, order },
});

export const setSearchValue = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  payload: searchValue,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  };
};
