const axios = require("axios");
require("dotenv").config();
const server = require("./src/server");
const { conn } = require('./src/db.js');
const insertCountries = require("./src/controllers/countries/insertCountries");
const {PORT} = process.env;

insertCountries()

conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))