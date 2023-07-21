const express = require("express");
const router = express.Router();

const countriesRoutes = require("./countries");
const activitiesRoutes = require("./activities");

router.use("/countries", countriesRoutes);
router.use("/activities", activitiesRoutes);

module.exports = router;