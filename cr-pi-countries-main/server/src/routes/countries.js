const express = require("express");
const router = express.Router();

const getAllCountries = require("../controllers/countries/getAllCountries");
const getCountry = require("../controllers/countries/getCountry");

router.get("/", getAllCountries);
router.get("/:query", getCountry);

module.exports = router;