const express = require("express");
const path = require("path");

const rootDirPath = require("../utils/rootDirPath");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDirPath, "views", "home.html"));
});

router.get("/user", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "..", "views", "user.html"));
});

router.use("/", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = router;
