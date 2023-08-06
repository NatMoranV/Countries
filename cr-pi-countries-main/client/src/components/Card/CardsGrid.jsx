import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../Card/Card";
import ContinentFilter from "../Filtros/ContinentFilter";
import ActivityFilter from "../Filtros/ActivityFilter";
import { StyledCardsGrid } from "./StyledCardsGrid";
import { Dropdown } from "../Dropdown/StyledDropdown";

export const CardsGrid = ({ searchValue }) => {
  const [data, setData] = useState([]);
  const [activities, setActivities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Puede ser "asc" o 
  const [sortField, setSortField] = useState("name");

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
  const orderBy = ["name", "population"];
  const applyFilters = () => {
    let filteredData = data;

    filteredData.sort((a, b) => {
      if (sortField === "population") {
        // Ordenamiento numérico según la población
        const populationA = a[sortField] || 0;
        const populationB = b[sortField] || 0;

        if (sortOrder === "asc") {
          return populationA - populationB;
        } else {
          return populationB - populationA;
        }
      } else {
        // Ordenamiento alfabético para los otros campos
        const fieldValueA = a[sortField].toLowerCase();
        const fieldValueB = b[sortField].toLowerCase();

        if (sortOrder === "asc") {
          return fieldValueA.localeCompare(fieldValueB);
        } else {
          return fieldValueB.localeCompare(fieldValueA);
        }
      }
    });

    // Aplicar filtros
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

    return filteredData;
  };

  const filteredData = applyFilters();
  const totalPages = Math.ceil(filteredData.length / pageSize);

  const pageRange = 5;
  const pageStart = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const pageEnd = Math.min(totalPages, pageStart + pageRange - 1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  const handleSortChange = (field) => {
    if (field === sortField) {
      // Si se hace clic en el mismo campo, cambiar el tipo de ordenamiento
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      // Si se hace clic en un campo diferente, establecer el nuevo campo y el orden ascendente
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleHomeClick = () => {
    setSelectedContinent(""); // Restablecer el filtro de continente
    setSelectedActivity(""); // Restablecer el filtro de actividad
    setSortOrder("asc"); // Restablecer el orden ascendente/descendente
    setSortField("name"); // Restablecer el campo de ordenamiento
    setCurrentPage(1); // Restablecer la página actual
  };

  return (
    <div className="grid-container">
      <div className="filters">
        <Dropdown
          text={"Filtrar por continente"}
          array={continents}
          id={selectedContinent}
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
        />
        <Dropdown
          text={"Filtrar por actividad"}
          array={activities}
          id={selectedActivity}
          value={selectedActivity}
          onChange={(e) => setSelectedActivity(e.target.value)}
        />
        <Dropdown
          text={"Ordenar por"}
          array={orderBy}
          id={selectedActivity}
          value={selectedActivity}
          onChange={(e) => setSelectedActivity(e.target.value)}
        />
      </div>
      <div className="sort-buttons">
        <button
          onClick={() => handleSortChange("name")}
          className={sortField === "name" ? sortOrder : ""}
        >
          Name {sortField === "name" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
        </button>
        <button
          onClick={() => handleSortChange("population")}
          className={sortField === "population" ? sortOrder : ""}
        >
          Population{" "}
          {sortField === "population" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
        </button>
        {/* Agregar más botones para otros campos si es necesario */}
      </div>
      <button onClick={handleHomeClick}>Home</button>
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
                capital={country.capital}
                subregion={country.subregion || "unknown"}
                area={country.area || "unknown"}
                population={country.population || "unknown"}
                activities={thisActivity.name}
              />
            ))
        )}
      </StyledCardsGrid>

      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            {"<"}
          </button>
          {Array.from({ length: pageEnd - pageStart + 1 }).map((_, index) => {
            const pageNumber = pageStart + index;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={currentPage === pageNumber ? "active" : ""}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};
