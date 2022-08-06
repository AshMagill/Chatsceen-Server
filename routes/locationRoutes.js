const express = require("express");
const router = express.Router();
const { registerLocation } = require("../controllers/locationController");

router.post("/", registerLocation);

module.exports = router;
