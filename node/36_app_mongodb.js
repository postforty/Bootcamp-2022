const express = require("express");
require("dotenv").config({ path: "mongodb/.env" });
const mongodb = require("./mongoose");
const Customer = require("./mongoose/schemas/customer");
const app = express();

mongodb.connect();

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
);

app.listen(3000, () => {
  console.log("3000번 포트로 서버가 시작되었습니다.");
});

app.get("/api/customers", async (req, res) => {
  const customers = await Customer.find(); // Customer 컬렉션과 자동으로 매핑되는 네이밍룰
  res.send(customers);
});

app.post("/api/customer", async (req, res) => {
  const r = await Customer.create(req.body.params);
  res.send(r);
});
