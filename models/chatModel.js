const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    user: { type: "string", required: true },
    access: { type: "boolean", default: true },
    message: {
      text: {
        type: "string",
        required: [true, "Please add a text value"],
      },
      image: { type: "string" },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
