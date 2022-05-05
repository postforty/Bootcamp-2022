const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

router.get("/", async (req, res) => {
  const shipperList = await mysql.query("shipperList");
  res.send(shipperList);
});

router.post("/", async (req, res) => {
  const r = await mysql.query("shipperMultipleInsert", [req.body.param]);
  res.send(r);
});

module.exports = router;
