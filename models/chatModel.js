const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    text: {
      type: "string",
      required: [true, "Please add a text value"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
