import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Card } from "./Card";
import { Dropdown } from "../Dropdown/StyledDropdown";
import {
  faArrowDown,
  faArrowUp,
  faSearch,
  faFilterCircleXmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { styled } from "styled-components";
import { StyledInput } from "../Input/StyledInput";
import { CircleButton } from "../CircleButton/CircleButton";

const StyledCardsGrid = styled.div`
  margin: 5vh ;
  display: grid;
  gap: 3rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
`;
const ActionsContainer = styled.div`
  display: flex;
  padding: 3rem 10rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.125rem;
  justify-content: space-between;
  width: 100%;
`;

const PaginationContainer = styled.div`

display: flex;
align-items: center;
gap: 0.875rem;
justify-content: flex-end;
margin-bottom: 5rem;

`

export const CardsGrid = () => {
  const [data, setData] = useState([]);
  const [activities, setActivities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortField, setSortField] = useState("name");
  const [searchValue, setSearchValue] = useState("");

  const pageSize = 10;
  let thisActivity = {};

  useEffect(() => {
    axios
      .get("http://localhost:3001/countries")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/activities")
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const continents = [...new Set(data.map((country) => country.continent))];

  const orderers = ["population"];

  const applyFilters = () => {
    let filteredData = data;

    if (selectedContinent) {
      filteredData = filteredData.filter(
        (country) => country.continent === selectedContinent
      );
    }

    if (selectedActivity) {
      thisActivity = activities.find((e) => e.id == selectedActivity);
      filteredData = thisActivity.Countries;
    }

    if (searchValue) {
      filteredData = filteredData.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
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

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    dispatch(setName(searchValue));
    onSearch(searchValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  const handleSortFieldChange = (field) => {
    setSortField(field);
  };

  const handleSortAsc = () => {
    setSortOrder("asc");
  };

  const handleSortDesc = () => {
    setSortOrder("desc");
  };

  const clearFilters = () => {
    setSelectedContinent("");
    setSelectedActivity("");
    setSortOrder("asc");
    setSortField("name");
    setCurrentPage(1);
    setSearchValue("");
  };

  return (
    <div className="grid-container">
      <ActionsContainer>
        <StyledInput
          label={"Buscador"}
          placeholder={"Ex. Mexico / MEX "}
          type={"text"}
          helper={"Puedes buscar por nombre o código internacional (ISO)"}
          actionButton={handleSearch}
          icono={faSearch}
          onChange={handleInputChange}
          value={searchValue}
          onKeyDown={handleKeyDown}
        />
        <ButtonsContainer>
          <Dropdown
            label={"Filtrar por continente"}
            option1={"Todos"}
            array={continents}
            id={selectedContinent}
            selectedValue={selectedContinent}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "Todos") {
                setSelectedContinent("");
              } else setSelectedContinent(value);
            }}
          />
          <Dropdown
            label={"Filtrar por actividad"}
            option1={"Todas"}
            array={activities}
            id={selectedActivity}
            selectedValue={selectedActivity}
            onChange={(e) => setSelectedActivity(e.target.value)}
          />
          <Dropdown
            label={"Ordenar por"}
            option1={"name"}
            array={orderers}
            selectedValue={sortField}
            onChange={(e) => setSortField(e.target.value)}
          />
         
          <CircleButton
            icon={faArrowDown}
            onClick={handleSortAsc}
            className={sortOrder === "asc" ? "active" : ""}
          /> <CircleButton
            icon={faArrowUp}
            onClick={handleSortDesc}
            className={sortOrder === "desc" ? "active" : ""}
          />

          <CircleButton onClick={clearFilters} icon={faFilterCircleXmark} />
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
          <CircleButton onClick={handlePrevPage} disabled={currentPage === 1} icon={faArrowLeft}/>
         
          {Array.from({ length: pageEnd - pageStart + 1 }).map((_, index) => {
            const pageNumber = pageStart + index;
            return (
              <CircleButton
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={currentPage === pageNumber ? "active" : ""}
                content = {pageNumber}
              >
                
              </CircleButton>
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
