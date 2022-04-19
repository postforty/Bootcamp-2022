const express = require("express");
const res = require("express/lib/response");
require("dotenv").config({ path: "mongodb/.env" });
const mongoDB = require("./mongodb");
const app = express();

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
);

app.listen(3000, () => {
  console.log("3000번 포트로 서버가 시작되었습니다.");
});

app.get("/api/customers", async (req, res) => {
  const customers = await mongoDB.find("customers");
  res.send(customers);
});

app.get("/api/customers/:name", async (req, res) => {
  // /person/i
  // new RegExp("", "")
  const customers = await mongoDB.find("customers", {
    name: new RegExp(req.params.name, "i"),
  });
  res.send(customers);
});

app.get("/api/customer/:_id", async (req, res) => {
  const customer = await mongoDB.findById("customer", req.params._id);
  res.send(customer);
});

app.post("/api/customer", async (req, res) => {
  const r = await mongoDB.insertOne("customers", req.body.params);
});

app.post("/api/customers", async (req, res) => {
  const r = await mongoDB.insertMany("customers", req.body.params);
});

app.put("/api/customer/:_id", async (req, res) => {
  const r = await mongoDB.updateById(
    "customers",
    req.body.params,
    req.params._id
  );
  res.send(r);
});

app.delete("/api/customers/:id", async (req, res) => {
  const r = await mongoDB.deleteById("customers", req.params.id);
  res.send(r);
});
