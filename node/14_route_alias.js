const express = require("express");
const app = express();
// console.log(app.get("env"));

require("dotenv").config({ path: `mysql/.env.${app.get("env")}` });
// console.log(process.env);
const mysql = require("./mysql");

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

app.post("/api/:alias", async (req, res) => {
  const categoryList = await mysql.query(req.params.alias, req.body.param);
  res.send(categoryList);
});
