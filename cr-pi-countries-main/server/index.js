const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const insertCountries = require("./src/controllers/countries/insertCountries");
const PORT = 3001;

insertCountries()

conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
