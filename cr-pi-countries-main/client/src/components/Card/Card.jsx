import React from "react";
import { NavLink } from "react-router-dom";
export const Card = ({ img, country, continent }) => {
  return (
    <div>
      <img src={img} alt='bandera' />
      <h6>Country: {country}</h6>
      <h6>Continent: {continent}</h6>
      <NavLink to="/detail"><button>See details</button></NavLink>
    </div>
  );
};


