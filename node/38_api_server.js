const express = require("express");
const res = require("express/lib/response");
const app = express();
require("dotenv").config({ path: "mysql/.env" });
const mysql = require("./mysql");
const uuidAPIKey = require("uuid-apikey");

// console.log(uuidAPIKey.create());
const accessKey = {
  apiKey: "WZ5PXRZ-0CGM5BM-PQAZJGE-BEVH4JE",
  uuid: "e7cb6ee3-0321-42ae-b5d5-f9415bb71249",
};

app.listen(3001, () => {
  console.log("API 서버가 3001번 포트로 시작되었습니다.");
});

app.get("/api/:apikey/product/category", async (req, res) => {
  if (uuidAPIKey.toUUID(req.params.apikey) !== accessKey.uuid) {
    console.log("비정상적인 API KEY를 사용했습니다.");
    return res.send("Access denied!");
  }

  const categoryList = await mysql.query("categoryList");
  res.send(categoryList);
});
