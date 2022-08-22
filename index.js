const mongoose = require("mongoose");
const {DB_HOST} = require('./config.js')

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect success"))
  .catch((error) => console.log(error.message));

