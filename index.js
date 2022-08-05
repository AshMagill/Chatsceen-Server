const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dummyUsers = require("./utils/dummyData.js");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get("/posts", (req, res) => {
  try {
    res.json(dummyUsers);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
