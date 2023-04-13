
// const express = require("express");
import express from "express";

// const bodyParser = require("body-parser");
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use("/", express.static("static"));
app.use("/node_modules", express.static("node_modules"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/signup", bodyParser.json(), function (req, res) {
    console.log("sign up request made");
    // console.log(req.body);
    var name = req.body.name
    var email = req.body.email
    res.send("server received "+ name +" and "+ email);
});

app.listen(port, () => {
    console.log(`RoadRunner server listening on port ${port}`);
});
