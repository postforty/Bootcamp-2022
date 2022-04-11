const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
require("dotenv").config({ path: `mysql/.env.test` });
// console.log(process.env);
const mysql = require("./mysql");

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // 전송된 파일이 저장되는 디렉토리
  },
  filename: function (req, file, cb) {
    // 현재 파일 업로드되는 년월일시분초밀리세컨드+업로드 파일의 확장자
    cb(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템 시간으로 파일이름을 변경해서 저장(동일한 파일명이 덮어 쓰는 현상을 예방하기 위함)
  },
});

const upload = multer({ storage: storage }); // 위에서 정의한 storage를 사용

app.post("/api/attachment", upload.single("attachment"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);

  const fileInfo = {
    product_id: parseInt(req.body.product_id),
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    filename: req.file.fieldname,
    path: req.file.path,
  };

  const r = await mysql.query("imageInsert", fileInfo);

  res.send(r);
  res.send(req.file);

  // res.send(fileInfo);
});

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
