const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const app = express();
const port = 3001;

console.log("Loading restaurants server... 🧆");

//* ------- database connect
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Database connected! 😍"))
  .catch((error) => {
    console.log("Database is not connected! ☹️");
    console.log(error);
  });

//* ------- middleware
app.use(express.json());
app.use(cors());

//* ------- routes
const searchRestaurants = require("./routes/searchRestaurants");
app.use("/search", searchRestaurants);

const updateRestaurants = require("./routes/updateRestaurants");
app.use("/update", updateRestaurants);

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
});
