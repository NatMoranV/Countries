import React, { useState } from "react";
import { CardsGrid } from "../../components/Card/CardsGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import ActivityFilter from "../../components/Filtros/ActivityFilter";
import ContinentFilter from "../../components/Filtros/ContinentFilter";
import { styled } from "styled-components";

const StyledHome = styled.div`

margin-top: 10rem;
padding: 0 5rem 0 5rem;

`


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
    <StyledHome>
      <h4>Países</h4>
      <p>Aquí encontrarás toda la información de nuestro catálogo de países, puedes buscar y filtrar conforme a lo que necesites. </p>
      <SearchBar onSearch={handleSearch} onClearFilter={handleClearFilter} />
       <ContinentFilter />
      <ActivityFilter />
      <CardsGrid searchValue={searchValue} />
    </StyledHome>
  );
};

