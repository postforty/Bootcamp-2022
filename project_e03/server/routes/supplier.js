const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

router.get("/", async (req, res) => {
  const supplierList = await mysql.query("supplierList");
  res.send(supplierList);
});

router.get("/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const categoryList = await mysql.query("categoryDetail", product_category_id);
  res.send(categoryList);
});

router.post("/category/search", async (req, res) => {
  const categoryList = await mysql.query(
    "categoryListByCondition",
    req.body.param
  );
  res.send(categoryList);
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
