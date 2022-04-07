const express = require("express");
const app = express();

// http://localhost:3000/images/nodemon.png
app.use(express.static("public"));

// http://localhost:3000/static/images/nodemon.png
app.use("/static", express.static("public"));

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
