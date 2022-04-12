const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async (keyword) => {
  try {
    const html = (
      await axios.get(
        `https://www.inflearn.com/courses?s=${encodeURI(keyword)}`
      )
    ).data;
    return html;
  } catch (e) {
    console.log(e);
  }
};

const parsing = async (page) => {
  const $ = cheerio.load(page);
  const courses = [];
  const $courseList = $(".course_card_item");
  $courseList.each((idx, node) => {
    const title = $(node).find(".course_title:eq(0)").text();
    const instructor = $(node).find(".instructor:eq(0)").text();
    const price = $(node).find(".price:eq(0)").text();
    const imgSrc = $(node).find(".card-image > figure > img").attr("src");
    const rating = $(node).find(".star_solid").css("width");

    courses.push({
      title,
      instructor,
      price,
      imgSrc,
      rating,
    });
  });

  return courses;
  // console.log(title, instructor, price, imgSrc, rating);
};

const getCourse = async (keyword) => {
  const html = await getHTML(keyword);
  const courses = await parsing(html);
  console.log(courses);
};

getCourse("자바스크립트");
