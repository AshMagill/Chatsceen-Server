//const jwt = require("jsonwebtoken");
//const bcrypt = require("bcryptjs");
//const asyncHandler = require("express-async-handler");
const location = require("../models/locationModel");

//register new location
const registerLocation = (req, res) => {
  res.json({ message: "Register User" });
};

//authenticate a location
const loginLocation = (req, res) => {
  res.json({ message: "Login User" });
};

//get location data
const getLocation = (req, res) => {
  res.json({ message: "Return User Data" });
};

module.exports = { registerLocation, loginLocation, getLocation };
