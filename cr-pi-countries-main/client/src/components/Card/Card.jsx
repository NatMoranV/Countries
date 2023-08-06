import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { StyledCard } from "./StyledCard";
import { TextButton } from "../TextButton/TextButton";



export const Card = (props) => {
  const location = useLocation();
const isHome = location.pathname === "/home";
  const { id, img, country, continent, capital, subregion = "unknown", area = "unknown", population, activities } = props
  return (
    <StyledCard>
      <img src={img} alt='flag' />
      <h6>Country: <br />{country}</h6>
      <h6>Continent: <br />{continent}</h6>
      <h6 className={isHome ? "hidden" : ""}>Capital: <br />{capital}</h6>
      <h6 className={isHome ? "hidden" : ""}>Subregion: <br />{subregion}</h6>
      <h6 className={isHome ? "hidden" : ""}>Area: <br />{area}</h6>
      <h6 className={isHome ? "hidden" : ""}>Population: <br />{population}</h6>
      <h6 className={isHome ? "hidden" : ""}>Activities: <br />{activities}</h6>
      <h6 className={isHome ? "hidden" : ""}>ID: <br />{id}</h6>
      <NavLink to={`/detail/${id}`}><TextButton text="See details"/></NavLink>
    </StyledCard>
  );
};


