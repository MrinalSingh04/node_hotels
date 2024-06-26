const mongoose = require("mongoose");
require("dotenv").config();

//Define the Mongodb connection url
// const mongoURL = "mongodb://127.0.0.1:27017/hotels";  //Local url
// const mongoURL=process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

//Set up MongoDb connection
mongoose
  .connect(mongoURL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Err", err));

const db = mongoose.connection;

//Define event listeners for database connection
db.on("connected", () => {
  console.log("Connected to MongoDb server");
});

db.on("error", () => {
  console.log("MongoDb connection error");
});

db.on("disconnected", () => {
  console.log(" MongoDb disconnected");
});

//export the db connection
module.exports = db;
