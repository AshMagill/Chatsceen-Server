const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  getUsers,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

//const { imageUpload } = require("../middleware/imageUpload");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUser);
router.get("/", getUsers);

module.exports = router;
