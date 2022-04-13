const express = require("express");
const session = require("express-session"); // npm i express-session
const cookieParser = require("cookie-parser"); // npm i cookie-parser(요청된 쿠키를 쉽게 추출)
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(cookieParser()); // cookie-parser 호출

// 세션 설정값
let sess = {
  secret: "sewol", // 암호화하기 위한 키(어떤 텍스트든 상관없음)
  resave: false, // 세션 변경사항이 없어도 항상 다시 저장할지 여부
  saveUninitialized: true, // 초기화되지 않은 세션을 저장소에 강제로 저장할지 여부
  cookie: {
    httpOnly: true, // document.cookie 해도 쿠키 정보를 볼 수 없음. 반드시 해주어야 함
    secure: false, // http
    maxAge: 1000 * 60 * 60, // 쿠기가 유지되는 시간(1시간)
  },
};

// 운영환경에서는 secure: true 모드(https)로 실행되도록 하는 코드
// if(app.get("env")=="prod"){
//     sess.cookie.secure = true;
// }

app.use(session(sess));

app.post("/login", (req, res) => {
  const { email, pw } = req.body.param;
  // 데이터베이스에 사용자가 있는지, 비밀번호는 맞는지 체크한 후에 아래 코드 진행
  req.session.email = email;
  req.session.isLogined = true;
  // save 해주어야 세션 정보가 저장됨
  req.session.save((err) => {
    if (err) throw err;

    res.send(req.session);
  });
});

app.post("/logout", (req, res) => {
  if (req.session.email) {
    // 로그인 되어 있다면
    req.session.destroy();
    res.redirect("/login");
  }
});

// 반드시 login, logout 아래에 작성
app.all("*", (req, res, next) => {
  // 정규식 *는 어떠한 형식의 path도 받기 위함
  if (req.session.email) {
    // 세션 정보가 있으면
    console.log(req.cookies); // cookie-parser로 암호화된 쿠키정보 확인
    next(); // 다음 라우터인 test를 실행함
  } else {
    res.redirect("/login");
  }
});

app.get("/test", (req, res) => {
  // if (!req.session.email) { // all("*")로 인해 if 문은 불필요
  //   res.redirect("/login");
  // }

  res.send("Ok");
});

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
