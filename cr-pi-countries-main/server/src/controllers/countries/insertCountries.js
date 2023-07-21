const { Country } = require("../../db.js");
const axios = require('axios');
module.exports = async () => {
  try {
    let countries =  (await axios.get("http://localhost:5000/countries")).data;;
    countries = await Promise.all(
      countries.map(async (country) => {
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
