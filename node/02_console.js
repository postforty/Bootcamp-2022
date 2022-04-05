console.log("hello world");

const world = "world";
console.log(`hello ${world}`);

console.error(new Error("에러 메시지 출력"));
console.error("에러 메시지 출력");

const arr = [
  { name: "John Doe", email: "john@gmail.com" },
  { name: "Sewol Han", email: "han@gmail.com" },
];

console.table(arr);

// 가독성 높여 주는 dir
const obj = {
  student: {
    grade1: { class1: {}, class2: {} },
    grade2: { class1: {}, class2: {} },
    teachers: ["John Doe", "Sewol Han"],
  },
};

console.log(obj);
console.dir(obj, { depth: 1, colors: true });

// 코드의 성능 확인
console.time("func 1");
for (let i = 0; i < 99999; i++) {}
console.timeEnd("func 1");
