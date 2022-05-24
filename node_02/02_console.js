console.log("hello world");

const world = "world";
console.log(`hello ${world}`);

console.error(new Error("에러 메시지 출력"));
console.error("에러 메시지 출력");

const arr = [
  { name: "John Doe", email: "john@gmail.com" },
  { name: "Jeremy Go", email: "Jeremy@gmail.com" },
];

console.table(arr);

const obj = {
  students: {
    grade1: { class1: {}, class2: {} },
    grade2: { class1: {}, class2: {} },
    teachers: ["John Doe", "Jeremy Go"],
  },
};

console.log(obj);
console.dir(obj, { depth: 1, colors: true });

console.time("func 1");
for (let i = 0; i < 999999; i++) {}
console.timeEnd("func 1");
