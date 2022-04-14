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

// b와 C 사이에 아무 것도 없거나 하나 이상의 문자
app.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

// a가 포함된 모든 경우
app.get("/a/", (req, res) => {
  res.send("/a/");
});

// insert로 시작
app.get("/^insert/", (req, res) => {
  res.send("/a/");
});
