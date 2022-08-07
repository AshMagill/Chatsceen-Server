const express = require("express");
const router = express.Router();
const {
  registerLocation,
  loginLocation,
  getLocation,
} = require("../controllers/locationController");

router.post("/", registerLocation);
router.post("/login", loginLocation);
router.get("/locationData", getLocation);

module.exports = router;
