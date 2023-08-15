const axios = require("axios");
require("dotenv").config();
const server = require("./src/server");
const { conn } = require('./src/db.js');
const insertCountries = require("./src/controllers/countries/insertCountries");
const {PORT} = process.env || 3001;

axios.defaults.baseURL = 'https://countries-production-53c7.up.railway.app/'

insertCountries()

conn.sync({ alter: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))