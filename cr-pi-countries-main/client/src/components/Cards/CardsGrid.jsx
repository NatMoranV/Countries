import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Card } from "./Card";
import { Dropdown } from "../Dropdown/StyledDropdown";
import {
  faArrowDown,
  faArrowUp,
  faFilterCircleXmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { styled } from "styled-components";
import { StyledInput } from "../Input/StyledInput";
import { CircleButton } from "../CircleButton/CircleButton";
import {
  setFilters,
  setSort,
  setSearchValue,
  setCurrentPage,
} from "../../redux/actions";



export const CardsGrid = () => {
  const dispatch = useDispatch();
  const {
    selectedContinent,
    selectedActivity,
    sortOrder,
    sortField,
    searchValue,
    currentPage,
    activities,
  } = useSelector((state) => state);

  const pageSize = 10;
  let thisActivity = {};

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/countries")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/activities")
      .then((response) => {
        dispatch({ type: "SET_ACTIVITIES", payload: response.data }); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const continents = [...new Set(data.map((country) => country.continent))];

  const orderers = ["name", "population"];

  const applyFilters = () => {
    let filteredData = data;

    if (selectedContinent) {
      filteredData = filteredData.filter(
        (country) => country.continent === selectedContinent
      );
    }

    if (selectedActivity) {
      thisActivity = activities.find(
        (activity) => activity.name === selectedActivity
      );
      filteredData = thisActivity.Countries;
    }

    if (searchValue) {
      filteredData = filteredData.filter(
        (country) =>
          country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          country.id.toString().toLowerCase() === searchValue.toLowerCase()
      );
    }

    filteredData.sort((a, b) => {
      if (sortField === "population") {
        const populationA = a[sortField] || 0;
        const populationB = b[sortField] || 0;

        if (sortOrder === "asc") {
          return populationA - populationB;
        } else {
          return populationB - populationA;
        }
      } else {
        const fieldValueA = a[sortField].toLowerCase();
        const fieldValueB = b[sortField].toLowerCase();

        if (sortOrder === "asc") {
          return fieldValueA.localeCompare(fieldValueB);
        } else {
          return fieldValueB.localeCompare(fieldValueA);
        }
      }
    });

    return filteredData;
  };

  const filteredData = applyFilters();
  const totalPages = Math.ceil(filteredData.length / pageSize);

  const pageRange = 5;
  const pageStart = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const pageEnd = Math.min(totalPages, pageStart + pageRange - 1);

  const handleInputChange = (event) => {
    dispatch(setSearchValue(event.target.value));
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const handlePrevPage = () => {
    dispatch(setCurrentPage(Math.max(1, currentPage - 1)));
  };

  const handleNextPage = () => {
    dispatch(setCurrentPage(Math.min(totalPages, currentPage + 1)));
  };

  const handleSortFieldChange = (field) => {
    dispatch(setSort(field, sortOrder));
  };

  const handleSortAsc = () => {
    dispatch(setSort(sortField, "asc"));
  };

  const handleSortDesc = () => {
    dispatch(setSort(sortField, "desc"));
  };

  const clearFilters = () => {
    dispatch(setFilters("", ""));
    dispatch(setSort("name", "asc"));
    dispatch(setCurrentPage(1));
    dispatch(setSearchValue(""));
  };

  return (
    <div className="grid-container">
      <ActionsContainer>
        <StyledInput
        className={"input-container"}
          label={"Buscador"}
          placeholder={"Ex. Mexico / MEX "}
          type={"text"}
          helper={"Puedes buscar por nombre o código internacional (ISO)"}
          onChange={handleInputChange}
          value={searchValue}
        />
        <ButtonsContainer>
          <Dropdown
            label={"Filtrar por continente"}
            array={["Todos", ...continents]}
            id={selectedContinent}
            selectedValue={selectedContinent}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "Todos") {
                dispatch(setFilters("", selectedActivity));
              } else dispatch(setFilters(value, selectedActivity));
            }}
          />
          <Dropdown
            label={"Filtrar por actividad"}
            option1={"Ninguna"}
            array={activities.map((activity) => activity.name)}
            id={selectedActivity}
            selectedValue={selectedActivity}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "Ninguna") {
                dispatch(setFilters(selectedContinent, ""));
              } else dispatch(setFilters(selectedContinent, value));
            }}
          />
          <Dropdown
            label={"Ordenar por"}
            array={orderers}
            selectedValue={sortField}
            onChange={(e) => handleSortFieldChange(e.target.value)}
            visibleOption={["Nombre", "Población"]}
          />
          <CircleButtonsContainer>
            <CircleButton
              icon={faArrowDown}
              onClick={handleSortAsc}
              className={sortOrder === "asc" ? "active" : ""}
            />
            <CircleButton
              icon={faArrowUp}
              onClick={handleSortDesc}
              className={sortOrder === "desc" ? "active" : ""}
            />
            <CircleButton onClick={clearFilters} icon={faFilterCircleXmark} />
          </CircleButtonsContainer>
        </ButtonsContainer>
      </ActionsContainer>
      <StyledCardsGrid>
        {filteredData.length === 0 ? (
          <p>No se encontraron resultados.</p>
        ) : (
          filteredData
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map((country) => (
              <Card
                key={country.id}
                id={country.id}
                img={country.image}
                country={country.name}
                continent={country.continent}
              />
            ))
        )}
      </StyledCardsGrid>

      {totalPages > 1 && (
        <PaginationContainer>
          <CircleButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            icon={faArrowLeft}
          />

          {Array.from({ length: pageEnd - pageStart + 1 }).map((_, index) => {
            const pageNumber = pageStart + index;
            return (
              <CircleButton
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={currentPage === pageNumber ? "active" : ""}
                content={pageNumber}
              ></CircleButton>
            );
          })}
          <CircleButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            icon={faArrowRight}
          />
        </PaginationContainer>
      )}
    </div>
  );
};

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 5rem 0;

  & .input-container{
    width: 50%;
    margin: auto;
    @media (max-width: 1310px) {
    width: 100%;
  }
  }
`;

const ButtonsContainer = styled.div`

  display: grid;
  gap: 2rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  box-sizing: border-box;
`;

const CircleButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: auto;
  padding-top: 1.2rem;
  box-sizing: border-box;

  @media (max-width: 1728px) {
    justify-content: space-between;
  }

`;

const StyledCardsGrid = styled.div`
  margin: 3rem 0;
  display: grid;
  gap: 2rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  justify-content: flex-end;
  margin-bottom: 5rem;
`;