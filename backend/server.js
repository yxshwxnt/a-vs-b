const { urlencoded } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var fs = require("fs");
var path = require("path");
const Player = require("./models/Players.Model");
var multer = require("multer");
const app = express();

const PORT = 5000;
const client = "mongodb://localhost:27017/A-vs-B";

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(urlencoded({ extended: true }));
app.use(express.json());

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

mongoose
  .connect(client, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connecting Success");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/get-data", async (req, res) => {
  try {
    // console.log(req.query);
    const jn=req.query.jno;
    const t=req.query.team; 
    const player = await Player.findOne({jno : jn,team: t});
    // const player = await Player.find({});
    res.json(player);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

var score_a = 0,
  score_b = 0;
app.get("/get-score", (req, res) => {
  res.json({ s_a: score_a, s_b: score_b });
});

app.post("/upload-data", (req, res) => {
  let data = {
    name: req.body.name,
    jno: req.body.jno,
    team: req.body.team,
    age: req.body.age,
    height: req.body.height,
    weight: req.body.weight,
  };
  let player = new Player(data);
  player
    .save()
    .then(() => {
      console.log("Data Added Successfully");
      res.send({ message: "Added" });
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
