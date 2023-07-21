const express = require("express");
const router = express.Router();

const getActivity = require("../controllers/activities/getActivity");
const postActivity = require("../controllers/activities/postActivity");

router.get("/", getActivity);
router.post("/", postActivity);

module.exports = router;