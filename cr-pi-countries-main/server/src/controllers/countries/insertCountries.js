const { Country } = require("../../db.js");
require("dotenv").config();
const axios = require('axios');

const {URL_DATABASE} = process.env

module.exports = async () => {
  try {

    
    const response = await axios(`${URL_DATABASE}/countries`); 
    const countries = response.data;


    await Promise.all(countries.map(async (country) => {
      if (typeof country.flags[0] === "undefined") {
        country.flags[0] = "";
      }
        return Country.findOrCreate({
          where: {
            id: country.cca3,
            name: country.name.common,
            image: country.flags.svg,
            continent: country.continents[0],
            capital: country.capital ? country.capital[0] : "not found",
            subregion: country.subregion ? country.subregion : "not found",
            area: country.area,
            population: parseInt(country.population),
          },
        });
      })
    );
    console.log("countries loaded");
  } catch (error) {
    console.log(error);
  }
};