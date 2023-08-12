import React, { useState } from 'react';
import axios from 'axios';

const CreateActivityForm = () => {
  const [activityData, setActivityData] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivityData({
      ...activityData,
      [name]: value,
    });
  };

  const handleCountryChange = (e) => {
    const countriesInput = e.target.value;
    const countriesArray = countriesInput.split(',').map((country) => country.trim());
    setActivityData({
      ...activityData,
      countries: countriesArray,
    });
    console.log(countriesArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los campos estén completos
    if (!activityData.name || !activityData.difficulty || !activityData.duration || !activityData.season || activityData.countries.length === 0) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validar que la dificultad sea un número
    if (isNaN(activityData.difficulty)) {
      alert('La dificultad debe ser un número.');
      return;
    }

    // Validar el formato HH:MM:SS para la duración
    if (!/^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/.test(activityData.duration)) {
      alert('El formato de duración debe ser HH:MM:SS.');
      return;
    }

    // Convertir el objeto activityData a formato JSON
    const jsonData = JSON.stringify(activityData);

    // Enviar los datos al servidor
    axios.post('http://localhost:3001/activities', jsonData, {
      headers: {
        'Content-Type': 'application/json', // Agregar el encabezado Content-Type
      },
    })
      .then((response) => {
        console.log('Respuesta del servidor:', response.data);
        // Aquí puedes manejar la respuesta del servidor, si es necesario.
      })
      .catch((error) => {
        console.error('Error al enviar la solicitud:', error);
        // Aquí puedes manejar el error, si es necesario.
      });

    // Limpiar el formulario después de enviar los datos
    setActivityData({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={activityData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="difficulty">Dificultad (Número):</label>
        <input
          type="number"
          id="difficulty"
          name="difficulty"
          value={Number(activityData.difficulty)}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="duration">Duración (HH:MM:SS):</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={activityData.duration}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="season">Temporada:</label>
        <input
          type="text"
          id="season"
          name="season"
          value={activityData.season}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="countries">Países (separados por coma):</label>
        <textarea
          id="countries"
          name="countries"
          value={activityData.countries.join(', ')} // Mostrar los países separados por coma y espacio en el textarea
          onChange={handleCountryChange}
        />
      </div>

      <button type="submit">Crear actividad turística</button>
    </form>
  );
};

export default CreateActivityForm;