const fs = require("fs");

// fs.readFile("./sample/text.txt", "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// const data = fs.readFileSync("./sample/text.txt", "utf8");
// console.log(data);

const txt = "파일 쓰기 테스트";
fs.writeFile("./sample/text_w.txt", txt, "utf-8", (err) => {
  if (err) {
    throw err;
  }
  const data2 = fs.readFileSync("./sample/text_w.txt", "utf8");
  console.log(data2);
});
