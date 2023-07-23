import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { useParams } from "react-router-dom";
import axios from "axios";

export const DetailPage = () => {
  const { id } = useParams();
  const [countryDetails, setCountryDetails] = useState(null); // Estado para almacenar los detalles del país

  useEffect(() => {
    // Realiza la solicitud HTTP para obtener los detalles del país
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((response) => {
        setCountryDetails(response.data); // Actualiza el estado con los detalles del país
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <h1>Esta es la Detail</h1>
      {countryDetails ? (
        <Card
          id={countryDetails.id}
          img={countryDetails.image}
          country={countryDetails.name}
          continent={countryDetails.continent}
          capital={countryDetails.capital}
          subregion={countryDetails.subregion}
          area={countryDetails.area}
          population={countryDetails.population}
          activities={countryDetails.Activities && countryDetails.Activities.length > 0 ? countryDetails.Activities[0].name : ""}

        />
      ) : (
        <p>Cargando detalles del país...</p>
      )}
    </div>
  );
};
