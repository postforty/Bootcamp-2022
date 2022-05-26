// express
const express = require("express");
const app = express();

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

// http://localhost:3000
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/customers", (req, res) => {
  const customers = [
    { name: "John", email: "john@gmail.com" },
    { name: "Jeremy", email: "Jeremy@gmail.com" },
  ];
  res.send(customers);
});

app.post("/customers", (req, res) => {
  console.log(req.body.param);
  res.send("Ok");
});
