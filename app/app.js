const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const {
  CONNECTION_URI,
  DATABASE,
  OPTIONS,
} = require("./config/mongodb.config");

var bodyParser = require("body-parser");

// mongodb connection check function
const mongodbConnectionCheck = () => {
  MongoClient.connect(CONNECTION_URI, OPTIONS, (err, client) => {
    var db = client.db(DATABASE);
    db.collection("users")
      .findOne({ email: "yuta.sato@sample.com" })
      .then((doc) => {
        if (doc) {
          console.log(doc);
        } else {
          console.log("No document found");
        }
      })
      .catch((error) => {
        throw error;
      })
      .then(() => {
        client.close();
      });
  });
};
mongodbConnectionCheck();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log("Hello World edited!");

app.listen(8000);
