const dummyUsers = require("../utils/dummyData");
const getChat = (req, res) => {
  try {
    res.json(dummyUsers);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getChat };
