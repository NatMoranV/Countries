import React, { useEffect, useState } from "react";
import axios from "axios";

import { StyledInput } from "../../components/Input/StyledInput";
import { Dropdown } from "../../components/Dropdown/StyledDropdown";
import { Chip } from "../../components/Chip/Chip";
import { TextButton } from "../../components/TextButton/TextButton";
import { styled } from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  & > button {
    width: 100%;
  }
`;

const ChipsContainer = styled.div`
width: 27rem;
  display: grid;
  gap: 1rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
`;

const CreateActivityForm = () => {
  const [data, setData] = useState([]);
  const [selectedValues, setSelectedValues] = useState(new Set());
  const [temporaryDuration, setTemporaryDuration] = useState("");
  const dificultad = Array.from({ length: 5 }, (_, i) => i + 1);
  const temporadas = [
    "Cualquier temporada",
    "Primavera",
    "Verano",
    "Otoño",
    "Invierno",
  ];

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
    difficulty: 1,
    duration: "",
    season: "Cualquier temporada",
    countries: [],
  });
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
        difficulty: 1,
        duration: "",
        season: "Cualquier temporada",
        countries: [],
      });
      setSelectedValues(new Set());
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        name="name"
        id="name"
        label={"¿Cómo se llama la actividad?"}
        placeholder={"Ej. Nadar "}
        type={"text"}
        helper={"Máximo 10 dígitos."}
        onChange={handleChange}
        value={activityData.name}
      />

      <StyledInput
        name="duration"
        id="duration"
        label={"¿Cuánto tiempo dura?"}
        placeholder={"Ej. 90 "}
        type={"number"}
        helper={"Tiempo en minutos."}
        onChange={(e) => {
          setTemporaryDuration(Number(e.target.value));
        }}
        onBlur={handleChange}
        value={temporaryDuration}
      />

      <Dropdown
        name="difficulty"
        label={"¿Cuál es el nivel de dificultad?"}
        array={dificultad}
        id={"difficulty"}
        value={Number(activityData.difficulty)}
        onChange={handleChange}
        helper={"El nivel se mide del 1 al 5 donde 1 es el más fácil."}
      />

      <Dropdown
        name="season"
        label={"¿Durante qué temporada se puede realizar?"}
        array={temporadas}
        id={"season"}
        value={activityData.season}
        onChange={handleChange}
        helper={"Selecciona una opción"}
      />

      <Dropdown
        name="countries"
        label={"¿En cuál país se puede realizar?"}
        array={arrayCountries}
        id={"countries"}
        value={Array.from(selectedValues)}
        onChange={handleSelectedCountries}
        helper={"Puedes seleccionar más de un país, los verás aquí."}
        onBlur={handleChange}
      />
      <ChipsContainer>
        {Array.from(selectedValues).map((value, index) => (
          <Chip
            key={index}
            text={value}
            onClick={() => removeFromSelectedCountries(value)}
          />
        ))}
      </ChipsContainer>
      <TextButton type="submit" text={"Crear"} />
    </StyledForm>
  );
};

export default CreateActivityForm;
