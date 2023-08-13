import React from "react";
import { styled } from "styled-components";


const StyledComponente = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin: 0 0;
gap: 1.5rem;

& svg{
    width: 4rem;
    height: 4rem;
}

& h5{

text-align: center;

}

.description{

text-align: center;

font-size: 1rem;
font-style: normal;


}

`

export const Componente = ({ SVG, title, description }) => {
  return (
    <StyledComponente>
      <SVG/>
      <h5>{title}</h5>
      <span className="description">{description}</span>
    </StyledComponente>
  );
};
