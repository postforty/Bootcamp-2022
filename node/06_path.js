const path = require("path");

// console.log(__filename);
// console.log(__dirname);
// console.log(path.basename(__filename));
// console.log(path.basename(__filename, ".js"));

// const filename = "index.html";
// console.log(filename.substring(filename.indexOf("."))); // .html

// console.log(path.extname("index.html")); // .html

console.log(path.parse(__filename));
