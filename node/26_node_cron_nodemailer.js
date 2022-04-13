const cron = require("node-cron");
require("dotenv").config({ path: `nodemailer/.env` });
const nodemailer = require("./nodemailer");
require("dotenv").config({ path: `mysql/.env.test` });
const mysql = require("./mysql");

cron.schedule("* * * * *", async () => {
  const categoryList = await mysql.query("categoryList");
  const h = [];
  h.push(`<table  style="border:1px solid black;border-collapse:collapse;">`);
  h.push(`<thead>`);
  h.push(`<tr>`);
  h.push(`<th style="border:1px solid black;">Category ID</th>`);
  h.push(`<th style="border:1px solid black;">Category Name</th>`);
  h.push(`<th style="border:1px solid black;">Description</th>`);
  h.push(`</tr>`);
  h.push(`</thead>`);
  h.push(`<tbody>`);
  categoryList.forEach((category) => {
    h.push(`<tr>`);
    h.push(
      `<td style="border:1px solid black;">${category.product_category_id}</td>`
    );
    h.push(
      `<td style="border:1px solid black;">${category.category_name}</td>`
    );
    h.push(
      `<td style="border:1px solid black;">${category.category_description}</td>`
    );
    h.push(`</tr>`);
  });
  h.push(`</tbody>`);
  h.push(`</table>`);

  const emailData = {
    from: "ubithus@gmail.com",
    to: "ubithus@gmail.com",
    subject: "제품 카테고리 목록",
    html: h.join(""),
  };

  await nodemailer.send(emailData);
});
