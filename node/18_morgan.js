const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const path = require("path");
const res = require("express/lib/response");

const generator = (time, index) => {
  if (!time) return "file.log";

  const yearmonth =
    time.getFullYear() + (time.getMonth() + 1).toString().padStart(2, "0");
  const day = time.getDate().toString().padStart(2, "0");
  const hour = time.getHours().toString().padStart(2, "0");
  const minute = time.getMinutes().toString().padStart(2, "0");

  return `${yearmonth}/${yearmonth}${day}-${hour}${minute}-${index}-file.log`;
};
const accessLogStream = rfs.createStream(generator, {
  interval: "1m",
  size: "10M",
  path: path.join(__dirname, "log"),
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
