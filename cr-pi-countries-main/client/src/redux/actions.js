import { useState } from "react";

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



  export const useSearchActions = () => {
    const [searchValue, setSearchValue] = useState("");
  
    const handleSearch = (value) => {
      setSearchValue(value);
    };
  
    const handleClearFilter = () => {
      setSearchValue("");
    };
  
    return { searchValue, handleSearch, handleClearFilter };
  };

  