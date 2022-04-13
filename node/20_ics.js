// .ics 파일을 첨부파일로 같이 보내기 때문에 캘린더에 자동 등록
// iCalendar
const ics = require("ics"); // 추가
require("dotenv").config({ path: `nodemailer/.env` });
const nodemailer = require("./nodemailer");

// ics 파일을 구성하는 인벤트 정보
const event = {
  start: [2022, 4, 15, 9, 30], // 년, 월, 일, 시, 분
  duration: { hours: 1, minutes: 30 }, // 1시간 30분 동안 진행
  title: "Node.js 스터디 모임",
  description: "개발자의품격 부트캠프 1기 스터디 모임",
  location: "제주도 더그레잇 3층",
  geo: { lat: 30.2, lon: 50.45 }, // lat: 위도, lon: 경도
  url: "http://thegreat.io",
  organizer: { name: "Seungwon Go", email: "seungwon.go@gmail.com" }, // 주최자
  attendees: [
    {
      name: "한세월",
      email: "ubithus@gmail.com",
      rsvp: true, // 회신 여부
      role: "REQ-PARTICPANT", // 필수 참석자
    },
    {
      name: "두세월",
      email: "ubithus@gmail.com",
      //   rsvp: true, // 회신 여부
      role: "OPT-PARTICPANT", // 필수 참석자
    },
  ],
};

// 이메일을 보내는 함수
const sendEmailWithIcs = async () => {
  ics.createEvent(event, async (error, value) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log(value);

    const message = {
      from: "ubithus@gmail.com",
      to: "ubithus@gmail.com",
      subject: "Node.js 스터디 모임",
      text: "불라불라",
      icalEvent: {
        filename: "invitation.ics", // iCalendar 파일
        method: "REQUEST",
        content: value,
      },
    };
    await nodemailer.send(message);
  }); // ics 파일을 만드는 과정
};

sendEmailWithIcs();
