const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://Nikita:h6h2MFy4aPWHvHMS@cluster0.scyjpgf.mongodb.net/db_contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect success"))
  .catch((error) => console.log(error.message));

