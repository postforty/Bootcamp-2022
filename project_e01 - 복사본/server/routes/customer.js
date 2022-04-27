const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

router.get("/", async (req, res) => {
  const customerList = await mysql.query("customerList");
  res.send(customerList);
});

module.exports = router;
