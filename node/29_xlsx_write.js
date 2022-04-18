const xlsx = require("xlsx");
const workbook = xlsx.utils.book_new(); // 가상의 엑셀 파일 생성

const customers = [
  { name: "고객명", email: "이메일", phone: "연락처" }, // 첫번째 행 - 컬럼명
  { name: "유재석", email: "ryu@gmail.com", phone: "010-0000-00001" },
  { name: "김종국", email: "kim@gmail.com", phone: "010-0000-00002" },
  { name: "송지효", email: "song@gmail.com", phone: "010-0000-00003" },
];

const firstSheet = xlsx.utils.json_to_sheet(customers, {
  header: ["name", "email", "phone"],
  skipHeader: true, // 데이터에서 첫번째 객체를 엑셀시트의 첫번째 행을 컬럼명으로 사용
});

firstSheet["!cols"] = [
  { wpx: 120 }, // name 열 너비
  { wpx: 250 }, // email 열 너비
  { wpx: 200 }, // phone 열 너비
];

xlsx.utils.book_append_sheet(workbook, firstSheet, "Customers"); // 가상 엑셀 파일 workbook, customers sheet, sheet명
xlsx.writeFile(workbook, "./xlsx/customer.xlsx");
