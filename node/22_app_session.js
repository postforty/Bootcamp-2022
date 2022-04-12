const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(cookieParser());

let sess = {
  secret: "sewol",
  resave: false, // 세션 변경사항이 없어도 항상 다시 저장할지 여부
  saveUninitialized: true, // 초기화되지 않은 세션을 저장소에 강제로 저장할지 여부
  cookie: {
    httpOnly: true, // document.cookie 해도 쿠키 정보를 볼 수 없음. 반드시 해주어야 함
    secure: false, // https
    maxAge: 1000 * 60 * 60, // 쿠기가 유지되는 시간(1시간)
  },
};

// if(app.get("env")=="prod"){
//     sess.cookie.secure = true;
// }

app.use(session(sess));

app.post("/login", (req, res) => {
  const { email, pw } = req.body.param;
  // 데이터베이스에 사용자가 있는지, 비밀번호는 맞는지 체크

  req.session.email = email;
  req.session.isLogined = true;
  req.session.save((err) => {
    if (err) throw err;

    res.send(req.session);
  });
});

app.post("/logout", (req, res) => {
  if (req.session.email) {
    req.session.destroy();
    res.redirect("/login");
  }
});

app.all("*", (req, res, next) => {
  if (req.session.email) {
    console.log(req.cookies);
    next();
  } else {
    res.redirect("/login");
  }
});

app.get("/test", (req, res) => {
  //   if (!req.session.email) {
  //     res.redirect("/login");
  //   }

  res.send("Ok");
});

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
