const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

// ? 0개 혹은 1개, /abcd, /acd
app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});

// b가 1개 이상
app.get("/ab+cd", (req, res) => {
  res.send("ab+cd");
});

//
app.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

app.get(/a/, (req, res) => {
  res.send("/a/");
});

app.get(/^insert/, (req, res) => {
  res.send("/a/");
});
