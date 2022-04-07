const express = require("express");
require("dotenv").config({ path: `mysql/.env.test` });
const productRoute = require("./routes/product");
const app = express();

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

app.use("/api/product", productRoute);
