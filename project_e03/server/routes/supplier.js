const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

router.get("/", async (req, res) => {
  const supplierList = await mysql.query("supplierList");
  res.send(supplierList);
});

router.get("/:supplier_id", async (req, res) => {
  const { supplier_id } = req.params;
  const supplierDetail = await mysql.query("supplierDetail", supplier_id);
  res.send(supplierDetail[0]);
});

router.post("/search", async (req, res) => {
  const supplierList = await mysql.query(
    "supplierListByCondition",
    req.body.param
  );
  res.send(supplierList);
});

router.post("/", async (req, res) => {
  const result = await mysql.query("supplierInsert", req.body.param);
  res.send(result);
});

router.put("/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const result = await mysql.query("categoryUpdate", [
    req.body.param,
    product_category_id,
  ]);
  res.send(result);
});

router.delete("/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const count = await mysql.query("productCount", product_category_id);
  if (count[0].count === 0) {
    const result = await mysql.query("categoryDelete", product_category_id);
    res.send(result);
  } else {
    res.send({ status: 501, count: count[0] });
  }
});

module.exports = router;
