// cors - Cross-Origin Resource Sharing
// Origin - URL 구조의 프로토콜, 호스트, 포트를 합친것

const express = require("express");
const app = express();
const cors = require("cors");
const res = require("express/lib/response");

const corsOptions = {
  origin: "http://localhost:8080", // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};

// app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Ok");
});

app.get("/products/:id", cors(corsOptions), (req, res) => {});

app.listen(3000, function () {
  console.log("3000번 포트로 서버 실행");
});
