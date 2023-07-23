import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../Card/Card";

export const CardsGrid = ({ searchValue }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const pageSize = 10; // Tamaño de la página (cantidad de países por página)

  const filteredData = searchValue
    ? data.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : data;

  const totalPages = Math.ceil(filteredData.length / pageSize);

  // Calcular el rango de páginas a mostrar en el paginador
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

  return (
    <div className="grid-container">
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
              activities={country.activities || "unknown"}
            />
          ))
      )}

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
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};
