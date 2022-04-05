const process = require("process");

process.on("exit", (code) => {
  console.log("exit 이벤트 리스너", code);
});

process.on("beforeExit", (code) => {
  // 이벤트 루프에 등록된 작업이 모두 종료되고, 노드 프로세스가 종료되기 직전
  console.log("beforeExit 이벤트 리스너", code);
});

// process.exit();

console.log("출력");
