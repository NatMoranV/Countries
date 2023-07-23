import React from "react";

const ActivityFilter = ({ activities, selectedActivity, onActivityChange }) => {
    // Verificar si el prop "activities" es null o undefined
    if (!activities) {
      return null; // Si no hay actividades, no renderizar nada
    }
  
    return (
      <div>
        <h2>Filter by Activity</h2>
        {activities.length === 0 ? (
          <p>No activities available.</p>
        ) : (
          <select value={selectedActivity} onChange={onActivityChange}>
            <option value="">All Activities</option>
            {activities.map((activity) => (
              <option key={activity} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  };

export default ActivityFilter