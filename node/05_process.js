const process = require("process");

// 노드 프로세스가 종료될 때
process.on("exit", (code) => {
  console.log("exit 이벤트 리스너", code);
});

// 이벤트 루프에 등록된 작업이 모두 종료되고, 노드 프로세스가 종료되기 직전
process.on("beforeExit", (code) => {
  console.log("beforeExit 이벤트 리스너", code);
});

// 이후의 코드가 실행되지 않게 한다.
process.exit();

console.log("출력");
