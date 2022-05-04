const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

router.get("/", async (req, res) => {
  const shipperList = await mysql.query("shipperList");
  res.send(shipperList);
});

module.exports = router;
