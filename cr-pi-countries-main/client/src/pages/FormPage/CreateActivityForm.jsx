import React, { useEffect, useState } from "react";
import axios from "axios";

import { StyledInput } from "../../components/Input/StyledInput";
import { Dropdown } from "../../components/Dropdown/StyledDropdown";
import { Chip } from "../../components/Chip/Chip";
import { TextButton } from "../../components/TextButton/TextButton";

const CreateActivityForm = () => {
  const [data, setData] = useState([]);
  const [selectedValues, setSelectedValues] = useState(new Set());
  const [temporaryDuration, setTemporaryDuration] = useState("");
  const dificultad = Array.from({ length: 5 }, (_, i) => i + 1);
  const temporadas = ["Primavera", "Verano", "Otoño", "Invierno"];

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

  const arrayCountries = [...new Set(data.map((country) => country.name))];
  arrayCountries.sort();

  const [activityData, setActivityData] = useState({
    name: "",
    difficulty: 0,
    duration: "",
    season: "",
    countries: [],
  });
  console.log(activityData.countries);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "duration") {
      const hours = Math.floor(temporaryDuration / 60);
      const remainingMinutes = temporaryDuration % 60;
      const formattedMinutes = remainingMinutes.toString().padStart(2, "0");
      const time = hours + ":" + formattedMinutes + ":00";
      setActivityData({
        ...activityData,
        duration: time,
      });
    } else {
      setActivityData((prevActivityData) => ({
        ...prevActivityData,
        [name]: value,
        countries: Array.from(selectedValues),
      }));
    }
  };

  const handleSelectedCountries = (e) => {
    const selectedOption = e.target.value;
    setSelectedValues(
      (prevSelectedValues) => new Set([...prevSelectedValues, selectedOption])
    );
  };

  const removeFromSelectedCountries = (valueToRemove) => {
    setSelectedValues((prevSelectedValues) => {
      const updatedSelectedValues = new Set(prevSelectedValues);
      updatedSelectedValues.delete(valueToRemove);
      return updatedSelectedValues;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que todos los campos estén completos
    if (
      !activityData.name ||
      !activityData.difficulty ||
      !activityData.duration ||
      !activityData.season ||
      selectedValues.size === 0
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    console.log(activityData);

    try {
      // Enviar los datos al servidor
      const response = await axios.post(
        "http://localhost:3001/activities",
        activityData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Respuesta del servidor:", response.data);

      // Limpiar el formulario después de enviar los datos
      setActivityData({
        name: "",
        difficulty: 0,
        duration: "",
        season: "",
        countries: [],
      });
      setSelectedValues(new Set());
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        name="name"
        id="name"
        label={"Nombre de la actividad"}
        placeholder={"Ej. Nadar "}
        type={"text"}
        helper={"Máximo 10 dígitos"}
        onChange={handleChange}
        value={activityData.name}
      />

      <Dropdown
        name="difficulty"
        label={"Dificultad"}
        array={dificultad}
        id={"difficulty"}
        value={Number(activityData.difficulty)}
        onChange={handleChange}
      />

      <StyledInput
        name="duration"
        id="duration"
        label={"Duración de la actividad"}
        placeholder={"Ej. 90 "}
        type={"number"}
        helper={"Tiempo en minutos"}
        onChange={(e) => {
          setTemporaryDuration(Number(e.target.value));
        }}
        onBlur={handleChange}
        value={temporaryDuration}
      />

      <Dropdown
        name="season"
        label={"Temporada"}
        array={temporadas}
        id={"season"}
        value={activityData.season}
        onChange={handleChange}
      />

      <Dropdown
        name="countries"
        label={"País / Países"}
        array={arrayCountries}
        id={"countries"}
        value={Array.from(selectedValues)}
        onChange={handleSelectedCountries}
        helper={"test"}
        onBlur={handleChange}
      />

      <p>Selecciones:</p>
      {Array.from(selectedValues).map((value, index) => (
        <Chip
          key={index}
          text={value}
          onClick={() => removeFromSelectedCountries(value)}
        />
      ))}

      <TextButton type="submit" text={"Crear"} />
    </form>
  );
};

export default CreateActivityForm;
