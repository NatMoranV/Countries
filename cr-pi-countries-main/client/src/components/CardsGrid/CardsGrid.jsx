import React, { useEffect, useState } from "react";
import axios from "axios";
import  {Card}  from "../Card/Card"; 

export const CardsGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/countries")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="grid-container">
      {data.map((country) => (
        <Card
          key={country.id}
          img={country.image}
          country={country.name}
          continent={country.continent}
        />
      ))}
    </div>
  );
};
