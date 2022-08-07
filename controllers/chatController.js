const asyncHandler = require("express-async-handler");
const dummyUsers = require("../utils/dummyData");

//instead of try catch, I'm wrapping everything in express-async-handler

const getMessages = asyncHandler(async (req, res) => {
  res.json(dummyUsers);
});

const createMessage = asyncHandler(async (req, res) => {
  if (!req.body.message) {
    res.status(400);
    throw new Error("Please provide a text");
  }
  res.json({ message: "createMessage" });
});

const editMessage = asyncHandler(async (req, res) => {
  res.json({ message: `update goal ${req.params.id}` });
});

const deleteMessage = asyncHandler(async (req, res) => {
  res.json({ message: `delete goal ${req.params.id}` });
});

module.exports = { getMessages, createMessage, editMessage, deleteMessage };
