const express = require("express");
const app = express();

const MongoClient = require("mongodb").MongoClient;

const PORT = process.env.PORT || 8000;
const CONNECTION_URI = "mongodb://mongo:27017/";
// const DATABASE = "weblog";
const OPTIONS = {
  family: 4,
  useUnifiedTopology: true,
};

MongoClient.connect(CONNECTION_URI, [OPTIONS], (err, client) => {
  // var db = client.db(DATABASE);
  if (err) throw err;
  console.log("mongodb connected");
  client.close();
});

// respond with "hello express" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello express");
});

// // run server
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
