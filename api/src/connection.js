const mongoose = require("mongoose");

const User = require("./User.model");

const connection = "mongodb://mongo:27017/mongo-test";

/*
const connection = "mongodb://localhost:27017/mongo-test";
*/
const connectDb = () => {
  return mongoose.connect(connection, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true});
};

module.exports = connectDb;
