const cron = require("node-cron");
require("dotenv").config({ path: `nodemailer/.env` });
const nodemailer = require("./nodemailer");

const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async (keyword) => {
  try {
    const html = (
      await axios.get(
        `https://www.jobkorea.co.kr/Search/?stext=${encodeURI(keyword)}`
      )
    ).data;
    return html;
  } catch (e) {
    console.log(e);
  }
};

const parsing = async (page) => {
  const $ = cheerio.load(page);
  const jobs = [];
  const $jobList = $(".list-post");
  $jobList.each((idx, node) => {
    const jobTitle = $(node).find(".title:eq(0)").text().trim();
    const url =
      "https://www.jobkorea.co.kr" + $(node).find(".title:eq(0)").attr("href");
    const company = $(node).find(".name:eq(0)").text().trim();
    const experience = $(node).find(".exp:eq(0)").text().trim();
    const education = $(node).find(".edu:eq(0)").text().trim();
    // console.log(jobTitle);
    if (
      experience.indexOf("신입") > -1 ||
      experience.indexOf("경력무관") > -1
    ) {
      jobs.push({
        jobTitle,
        company,
        experience,
        education,
        url,
      });
    }
  });

  return jobs;
};

const getJob = async (keyword) => {
  const html = await getHTML(keyword);
  const jobs = await parsing(html);
  console.log(jobs);

  const h = [];
  h.push('<table style="border:1px solid black;border-collapse:collapse;">');
  h.push("<thead>");
  h.push("<tr>");
  h.push('<th style="border:1px solid black;">구인제목</th>');
  h.push('<th style="border:1px solid black;">회사명</th>');
  h.push('<th style="border:1px solid black;">경력</th>');
  h.push('<th style="border:1px solid black;">학력</th>');
  h.push("</tr>");
  h.push("</thead>");
  h.push("<tbody>");
  jobs.forEach((j) => {
    h.push(`<tr>`);
    h.push(
      `<td style="border:1px solid black;"><a href="${j.url}">${j.jobTitle}</a></td>`
    );
    h.push(`<td style="border:1px solid black;">${j.company}</td>`);
    h.push(`<td style="border:1px solid black;">${j.experience}</td>`);
    h.push(`<td style="border:1px solid black;">${j.education}</td>`);
    h.push(`</tr>`);
  });
  h.push("</tbody>");
  h.push("</table>");

  const message = {
    from: "seungwon.go@gmail.com",
    to: "seungwon.go@gmail.com",
    subject: "Node.js 구인 회사 정보",
    html: h.join(""),
  };

  await nodemailer.send(message); // 이메일 발송
};

cron.schedule("* * * * *", () => {
  getJob("node.js");
});
