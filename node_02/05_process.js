// const process = require("process");

process.on("beforeExit", (code) => {
  // 이벤트 루프에 등록된 작업이 모두 종료되고, 노드 프로세스가 종료되기 직전
  console.log("beforeExit 이벤트 리스너", code);
});

// process.exit(); // 멘토님은 관리자의 초기 환경 설정에서 딱 1번 사용했다고 함

process.on("exit", (code) => {
  // 종료될 때
  console.log("exit 이벤트 리스너", code);
});

console.log("출력");
