// express
const express = require("express");
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

// http://localhost:3000
app.get("/", (req, res) => {
  // req는 클라이언트의 request 객체,  res는 서버의 response 객체
  res.send("Hello World");
});

app.get("/customers", (req, res) => {
  const customers = [
    { name: "Sewol", email: "sewol@gmail.com" },
    { name: "ilnam", email: "ilnam@gmail.com" },
  ];
  res.send(customers);
});

app.post("/customers", (req, res) => {
  console.log(req.body.param);
  res.send("Ok");
});
