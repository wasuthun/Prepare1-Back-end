const express = require("express");
require("dotenv").config();
const db = require("./database");
const { status_filter, location_trend } = require("./twitter");
const cors = require("cors");
const firebaseDB = require('./firebaseConfig')
const app = express();
const PORT = 3000;
const HOST = "0.0.0.0";
var newsRef = firebaseDB.firebaseDB.ref('news');
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:7777"]
  })
);

app.get("/", (req, res) => {
  res.send("SWP practice API");
});
app.get("/track-filter", async (req, res) => {
  jsonDb = await db.read();
  newsRef.set(jsonDb)
  res.send(jsonDb);
});
status_filter("ไม่ไหวบอกไหว");

// location_trend(1)
// 23424960 = woeid of thailand
location_trend(23424960);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
