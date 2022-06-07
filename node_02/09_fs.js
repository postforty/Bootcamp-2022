const fs = require("fs");

// fs.readFile("./sample/text.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// const data = fs.readFileSync("./sample/text.txt", "utf-8");
// console.log(data);

const txt = "파일쓰기 테스트";

// fs.writeFile("./sample/text_w.json", txt, "utf8", (err) => {
//   if (err) {
//     throw err;
//   }
//   const data2 = fs.readFileSync("./sample/text_w.json", "utf-8");
//   console.log(data2);
// });

// fs.writeFileSync("./sample/text2_w.json", txt, "utf8");
// const data3 = fs.readFileSync("./sample/text2_w.json", "utf-8");
// console.log(data3);

// fs.appendFile("./sample/text.txt", "추가 내용", function (err) {
//   if (err) throw err;
//   const data3 = fs.readFileSync("./sample/text.txt", "utf-8");
//   console.log(data3);
// });

fs.writeFileSync("./data/mdbpath.txt", txt, "utf8", (err) => {
  if (err) {
    throw err;
  }
  const data = fs.readFileSync("./data/mdbpath.txt", "utf-8");
  console.log(data);
});
