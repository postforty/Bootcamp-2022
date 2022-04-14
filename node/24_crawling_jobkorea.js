const axios = require("axios");
const cheerio = require("cheerio");

require("dotenv").config({ path: `nodemailer/.env` });
const nodemailer = require("./nodemailer");

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
  // console.log(title, instructor, price, imgSrc, rating);
};

const getJobs = async (keyword) => {
  const html = await getHTML(keyword);
  const jobs = await parsing(html);
  console.log(jobs);

  const h = [];
  h.push('<table style="border:1px solid black;">');
  h.push("<thead>");
  h.push("<tr>");
  h.push("<th>구인제목</th>");
  h.push("<th>회사명</th>");
  h.push("<th>경력</th>");
  h.push("<th>학력</th>");
  h.push("</tr>");
  h.push("</thead>");
  h.push("<tbody>");
  jobs.forEach((j) => {
    h.push(`<tr>`);
    h.push(`<td><a href="${j.url}">${j.jobTitle}</a></td>`);
    h.push(`<td>${j.company}</td>`);
    h.push(`<td>${j.experience}</td>`);
    h.push(`<td>${j.education}</td>`);
    h.push(`</tr>`);
  });
  h.push("</tbody>");
  h.push("</table>");

  const message = {
    from: "ubithus@gmail.com",
    to: "ubithus@gmail.com",
    subject: "vue.js 구인 회사 정보",
    html: h.join(""),
  };
  await nodemailer.send(message);
};

getJobs("vue.js");
