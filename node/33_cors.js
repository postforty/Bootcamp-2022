// cors - Cross-Origin Resource Sharing
// Origin - URL 구조의 프로토콜, 호스트, 포트를 합친것(세가지가 하나라도 다르면 cors 위배 -> 허용할 도메인 설정으로 해결)
// 클라이언트, 백엔드 서버를 각각 운용시 cors 위반 발생, 서버 자원을 사용할 수 없게됨.

const express = require("express");
const app = express();
const cors = require("cors");
const res = require("express/lib/response");

const corsOptions = {
  origin: "http://localhost:8080", // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); // 모든 라우터에 cors 적용

app.get("/", (req, res) => {
  res.send("Ok");
});

const corsOptions2 = {
  origin: "http://localhost:8080", // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};

app.get("/products/:id", cors(corsOptions2), (req, res) => {}); // 특정 라우터(/products/:id)만 정상 접속

app.listen(3000, function () {
  console.log("3000번 포트로 서버 실행");
});
