import React from "react";
import { NavLink, useLocation } from "react-router-dom";



export const Card = (props) => {
  const location = useLocation();
const isHome = location.pathname === "/home";
  const { id, img, country, continent, capital, subregion = "unknown", area = "unknown", population, activities } = props
  return (
    <div>
      <img src={img} alt='bandera' />
      <h6>Country: {country}</h6>
      <h6>Continent: {continent}</h6>
      <h6 className={isHome ? "noSeVe" : "seVe"}>Capital: {capital}</h6>
      <h6 className={isHome ? "noSeVe" : "seVe"}>Subregion: {subregion}</h6>
      <h6 className={isHome ? "noSeVe" : "seVe"}>Area: {area}</h6>
      <h6 className={isHome ? "noSeVe" : "seVe"}>Population: {population}</h6>
      <h6 className={isHome ? "noSeVe" : "seVe"}>Activities: {activities}</h6>
      <h6 className={isHome ? "noSeVe" : "seVe"}>ID: {id}</h6>
      <NavLink to={`/detail/${id}`}><button>See details</button></NavLink>
    </div>
  );
};


