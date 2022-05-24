const timeout = setTimeout(() => {
  console.log("1초 후에 실행됩니다.");
}, 1000);

const interval = setInterval(() => {
  console.log("1초 마다 실행됩니다.");
}, 1000);

const immediate = setImmediate(() => {
  console.log(
    "setImmediate 함수를 호출하고 난 뒤에 오는 모든 코드를 먼저 실행하고 그 다음 실행합니다."
  );
});

console.log("1");
console.log("2");
console.log("3");
