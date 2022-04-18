const xlsx = require("xlsx");

const workbook = xlsx.readFile("./xlsx/test.xlsx"); // 엑셀 파일 읽기
const firstSheetName = workbook.SheetNames[0]; // 첫번째 시트 이름
const firstSheet = workbook.Sheets[firstSheetName]; // 첫번째 시트 가져오기(대괄호내 값은 object)
console.log(firstSheet["A2"].v); // v는 value
firstSheet["B2"].v = "john@gmail.com"; // 이메일 주소 변경
firstSheet["A3"] = { t: "s", v: "Jeremy" }; // 새로운 셀을 기록. t는 type 's'는 string

xlsx.writeFile(workbook, "./xlsx/test2.xlsx"); // 변경된 내용을 새로운 엑셀 파일로 생성

// 엑셀 템플릿 > 수정 후 새로운 엑셀 파일 생성 > PDF로 변환하여 고객에게 전달
