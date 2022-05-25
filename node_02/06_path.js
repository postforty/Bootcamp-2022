const path = require("path");

console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));
console.log(path.extname("index.html"));
console.log(path.extname(__filename));

console.log(path.parse("/home/user/dir/file.txt"));
console.log(path.parse(__filename));
