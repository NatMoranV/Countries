import React, { useState } from "react";
import { CardsGrid } from "../CardsGrid/CardsGrid";
import SearchBar from "../SearchBar/SearchBar";
import ActivityFilter from "../Filtros/ActivityFilter";
import ContinentFilter from "../Filtros/ContinentFilter";

export const HomePage = () => {
  // Estado para almacenar el valor de búsqueda
  const [searchValue, setSearchValue] = useState("");

  // Función para realizar la búsqueda
  const handleSearch = (value) => {
    setSearchValue(value); // Actualiza el estado con el valor de búsqueda
  };

  const handleClearFilter = () => {
    setSearchValue(""); // Restablece el valor de búsqueda a vacío
  };

  return (
    <div>
      <h1>Esta es la Home</h1>
      <SearchBar onSearch={handleSearch} onClearFilter={handleClearFilter} />
       <ContinentFilter />
      <ActivityFilter />
      <CardsGrid searchValue={searchValue} />
    </div>
  );
};

