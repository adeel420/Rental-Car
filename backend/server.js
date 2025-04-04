const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const passport = require("./middleware/auth");

// Packages
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

// Routes
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Listening the port ${PORT}`);
});
