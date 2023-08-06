import React, { useState } from "react";
import { CardsGrid } from "../../components/Cards/CardsGrid";
import { styled } from "styled-components";

const StyledHome = styled.div`
  margin-top: 10rem;
  padding: 0 5rem 0 5rem;
`;

export const HomePage = () => {
  return (
    <StyledHome>
      <h4>Países</h4>
      <p>
        Aquí encontrarás toda la información de nuestro catálogo de países,
        puedes buscar y filtrar conforme a lo que necesites.{" "}
      </p>

      <CardsGrid />
    </StyledHome>
  );
};
