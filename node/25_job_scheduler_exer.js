const cron = require("node-cron");
cron.schedule("*/2 * * * * *;", () => {
  console.log("2초 마다 작업이 실행 됩니다.");
});
