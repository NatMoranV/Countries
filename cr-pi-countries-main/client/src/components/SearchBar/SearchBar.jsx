import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../../redux/actions";

const SearchBar = ({ onSearch, onClearFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    dispatch(setName(searchTerm));
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm(""); 
    onClearFilter(); 
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(); 
    }
  };

  return (
    <div>
      <input onChange={handleInputChange} value={searchTerm} onKeyDown={handleKeyDown} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClear}>Limpiar filtro</button>
    </div>
  );
};

export default SearchBar;
