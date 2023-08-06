import React from "react";
import { StyledComponente } from "./StyledComponente";

export const Componente = ({ img, title, description }) => {
  return (
    <StyledComponente>
      <img src={img} />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </StyledComponente>
  );
};
