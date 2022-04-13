const axios = require("axios"); // npm i axios
const cheerio = require("cheerio"); // npm i cheerio 파싱 처리를 쉽게하기 위함(cheerio를 쓰지 않으면 정규식을 사용해야 할 것이다.)

const getHTML = async (keyword) => {
  try {
    const html = (
      await axios.get(
        `https://www.inflearn.com/courses?s=${encodeURI(keyword)}` // encodeURI(keyword) 한글 처리
      )
    ).data; // 데이터로 받음
    return html;
  } catch (e) {
    console.log(e);
  }
};

// getHTML("자바스크립트");

const parsing = async (page) => {
  const $ = cheerio.load(page);
  const courses = [];
  const $courseList = $(".course_card_item");
  $courseList.each((idx, node) => {
    // cheerio가 제공하는 each 함수 사용
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
};

const getCourse = async (keyword) => {
  const html = await getHTML(keyword);
  const courses = await parsing(html);
  console.log(courses);
  // await parsing(html);
  // return courses;
  // console.log(title, instructor, price, imgSrc, rating);
};

getCourse("자바스크립트");
