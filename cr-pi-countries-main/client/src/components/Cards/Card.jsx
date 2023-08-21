import React from "react";
import { NavLink } from "react-router-dom";
import { TextButton } from "../TextButton/TextButton";

import { styled } from "styled-components";

export const StyledCard = styled.div`
display: flex;
gap: 1rem;
padding: 1rem 1rem 2rem 1rem;
flex-direction: column;
justify-content: space-between;
align-items: center;

border-radius: 1rem;
background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.shortShadow};

a {
    text-decoration: none;
}

img{
  height: 10rem;
flex-shrink: 0;
align-self: stretch;
object-fit: cover;
border-radius: .5rem;
}

&:hover{
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
}

&& button{

  margin-top: 2rem;
}
`



export const Card = (props) => {
  const { id, img, country, continent, } = props
  return (
    <StyledCard>
      <img src={img} alt='flag' />
      <h6>{country}</h6>
      <h6>{continent}</h6>

      <NavLink to={`/detail/${id}`}><TextButton text="Ver más"/></NavLink>
    </StyledCard>
  );
};


