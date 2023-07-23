import React from "react";

const ContinentFilter = ({ continents, selectedContinent, onContinentChange }) => {
  if (!continents || continents.length === 0) {
    return null; // Mostrar algún indicador de carga o simplemente no renderizar si no hay datos
  }

  return (
    <div className="filter">
      <label htmlFor="continent">Filtrar por continente:</label>
      <select id="continent" value={selectedContinent} onChange={onContinentChange}>
        <option value="">Todos</option>
        {continents.map((continent, index) => (
          <option key={index} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ContinentFilter;