const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const menuItem = require("./models/menu");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to our Hotel");
});

//Import the router files
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

app.listen(PORT, () => console.log(`Server is running at Port ${PORT}`));
