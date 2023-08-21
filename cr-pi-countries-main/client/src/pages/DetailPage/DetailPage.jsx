import React, { useEffect, useState } from "react";
import { DetailCard } from "../../components/Cards/DetailCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";



const StyledDetailPage = styled.div`
  margin-top: 8rem;
  padding: 0 5rem 0 5rem;

`;

const CardContainer = styled.div`

display: flex;
justify-content: center;
margin: 3rem;

`

export const DetailPage = () => {
  const { id } = useParams();
  const [countryDetails, setCountryDetails] = useState(null); // Estado para almacenar los detalles del país

  useEffect(() => {
    // Realiza la solicitud HTTP para obtener los detalles del país
    axios
      .get(`countries/${id}`)
      .then((response) => {
        setCountryDetails(response.data); // Actualiza el estado con los detalles del país
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <StyledDetailPage>
      <h4>Detalle</h4>
      <p>
        Aquí encontrarás la información más detallada sobre el país que elegiste
      </p>
      {countryDetails ? (
        <CardContainer>
        <DetailCard
          id={countryDetails.id}
          img={countryDetails.image}
          country={countryDetails.name}
          continent={countryDetails.continent}
          capital={countryDetails.capital}
          subregion={countryDetails.subregion}
          area={countryDetails.area}
          population={countryDetails.population}

        /></CardContainer>
      ) : (
        <p>Cargando detalles del país...</p>
      )}
    </StyledDetailPage>
  );
};
