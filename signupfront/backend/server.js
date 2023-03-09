const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

//mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected..."))
mongoose
  .connect(process.env.DATABASE_ACCESS)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("DataBase not connected: ", error.message);
  });

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(5000, () => console.log("Server running successfully"));
