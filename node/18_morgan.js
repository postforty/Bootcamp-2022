const express = require("express");
const app = express();
const fs = require("fs"); // 로그를 파일로 기록하기 위해 필요
const morgan = require("morgan"); // morgan
const rfs = require("rotating-file-stream"); // 자동으로 로그 파일을 채번해서 만들어 줌
const path = require("path");

// 파일명을 만드는 함수
const generator = (time, index) => {
  if (!time) return "file.log"; // 시간 정보가 없을 때  기본 파일명

  const yearmonth =
    time.getFullYear() + (time.getMonth() + 1).toString().padStart(2, "0");
  const day = time.getDate().toString().padStart(2, "0");
  const hour = time.getHours().toString().padStart(2, "0");
  const minute = time.getMinutes().toString().padStart(2, "0");

  return `${yearmonth}/${yearmonth}${day}-${hour}${minute}-${index}-file.log`;
};

const accessLogStream = rfs.createStream(generator, {
  interval: "1m", // 1m은 1분 간격, 실무에서는 1d 하루 단위를 주로 사용
  size: "10M", // 파일의 최대 사이즈
  path: path.join(__dirname, "log"), // 현재 디렉토리(__dirname)의 log 폴더에 로그 파일 생성
});

app.use(morgan("combined", { stream: accessLogStream }));
// app.use(
//   morgan("combined", {
//     stream: accessLogStream,
//     skip: function (req, res) {
//       return res.statusCode < 400;
//     },
//   })
// );

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
