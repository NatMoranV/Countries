const { Country } = require('../../db.js')

module.exports = async (req, res) =>{
    try {
        const allCountries = await Country.findAll();

        return res.status(200).json(allCountries);
      } catch (error) {
        return res.status(500).json(error.message);
      }
}