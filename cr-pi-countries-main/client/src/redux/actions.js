  export const setName = (name) => {
    return {
      type: "SET_NAME",
      payload: name,
    };
  };

  export const clearName = () => {
    return {
      type: "CLEAR_NAME",
    };
  };