require("dotenv").config({ path: `nodemailer/.env` });
const nodemailer = require("./nodemailer");
require("dotenv").config({ path: `mysql/.env.test` });
const mysql = require("./mysql");
const xlsx = require("xlsx");
const { send } = require("express/lib/response");

const sendAttachedEmail = async () => {
  const workbook = xlsx.utils.book_new();
  const categoryList = await mysql.query("categoryList");

  const firstSheet = xlsx.utils.json_to_sheet(categoryList, {
    header: ["product_category_id", "category_name", "category_description"],
    skipHeader: true,
  }); // skipHeader가 false 이면 엑셀시트의 첫번째 행에 header에 해당하는 name, email, phone 나오게 됨

  firstSheet["!cols"] = [
    { wpx: 120 }, // product_category_id 열 너비
    { wpx: 250 }, // category_name 열 너비
    { wpx: 300 }, // category_description 열 너비
  ];

  // 가상의 파일 이용
  xlsx.utils.book_append_sheet(workbook, firstSheet, "Categories");

  const emailData = {
    from: "ubithus@gmail.com",
    to: "ubithus@gmail.com",
    subject: "엑셀 파일 첨부 테스트",
    text: "엑셀 파일 첨부해서 이메일로 보냅니다.",
    attachments: [
      // 가상의 파일 첨부
      {
        filename: "Categories.xlsx",
        content: Buffer.from(
          xlsx.write(workbook, { type: "base64" }),
          "base64"
        ),
      },
      // 물리적 파일 첨부
      {
        filename: "ERD다이어그램.png",
        path: "./uploads/1649332920187.png",
      },
    ],
  };

  await nodemailer.send(emailData);
};

sendAttachedEmail();
