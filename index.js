const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dummyUsers = require("./utils/dummyData.js");
const io = require("socket.io")(5001, {
  cors: { origin: "http://localhost:3000" },
});

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("custom-event", (message) => {
    console.log(message);
    io.emit("recieve-message", "hi");
  });
});

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
