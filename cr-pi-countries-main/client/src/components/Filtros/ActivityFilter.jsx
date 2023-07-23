import React from "react";

const ActivityFilter = ({ activities, selectedActivity, onActivityChange }) => {
  // Verificar si el prop "activities" es null o undefined
  if (!activities) {
    return null; // Si no hay actividades, no renderizar nada
  }

  // Ordenar las actividades alfabéticamente por nombre
  const sortedActivities = activities.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h2>Filter by Activity</h2>
      {sortedActivities.length === 0 ? (
        <p>No activities available.</p>
      ) : (
        <select value={selectedActivity} onChange={onActivityChange}>
          <option value="">Todas las Actividades</option>
          {sortedActivities.map((actividad) => (
            <option key={actividad.id} value={actividad.id}>
              {actividad.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default ActivityFilter;
