const express = require("express");
const session = require("express-session");
const app = express();
const fs = require("fs"); // 로그를 파일로 기록하기 위해 필요
const morgan = require("morgan"); // morgan
const rfs = require("rotating-file-stream"); // 자동으로 로그 파일을 채번해서 만들어 줌
const path = require("path");
const cors = require("cors");
const multer = require("multer");

require("dotenv").config({ path: `mysql/.env.${app.get("env")}` });
// require("dotenv").config({ path: `mysql/.env` });
// console.log(process.env);
const mysql = require("./mysql");

require("dotenv").config({ path: `nodemailer/.env.${app.get("env")}` });
const nodemailer = require("./nodemailer");

app.use("/static/images", express.static("public/images")); // 정적 파일 다룸

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

let sess = {
  secret: "sewol", // 암호화하기 위한 키(어떤 텍스트든 상관없음)
  resave: false, // 세션 변경사항이 없어도 항상 다시 저장할지 여부
  saveUninitialized: true, // 초기화되지 않은 세션을 저장소에 강제로 저장할지 여부
  cookie: {
    httpOnly: true, // document.cookie 해도 쿠키 정보를 볼 수 없음. 반드시 해주어야 함
    secure: false, // http
    maxAge: 1000 * 60 * 60, // 쿠키가 유지되는 시간(1시간)
  },
};

app.use(session(sess));

const corsOptions = {
  origin: "http://localhost:8080", // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); // 모든 라우터에 cors 적용

// 파일명을 만드는 함수
const generator = (time, index) => {
  if (!time) return "file.log"; // 시간 정보가 없을 때  기본 파일명

  const yearmonth =
    time.getFullYear() + (time.getMonth() + 1).toString().padStart(2, "0");
  const day = time.getDate().toString().padStart(2, "0");
  const hour = time.getHours().toString().padStart(2, "0");
  const minute = time.getMinutes().toString().padStart(2, "0");

  return `${yearmonth}/${yearmonth}${day}-${hour}${minute}-${index}-file.log`;
};

const accessLogStream = rfs.createStream(generator, {
  interval: "1d", // 1m은 1분 간격, 실무에서는 1d 하루 단위를 주로 사용
  size: "10M", // 파일의 최대 사이즈
  path: path.join(__dirname, "log"), // 현재 디렉토리(__dirname)의 log 폴더에 로그 파일 생성
});

// app.use(morgan("combined", { stream: accessLogStream }));
app.use(
  morgan("combined", {
    stream: accessLogStream,
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images"); // 전송된 파일이 저장되는 디렉토리
  },
  filename: function (req, file, cb) {
    // 현재 파일 업로드되는 년월일시분초밀리세컨드+업로드 파일의 확장자
    cb(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템 시간으로 파일이름을 변경해서 저장(동일한 파일명이 덮어 쓰는 현상을 예방하기 위함)
  },
});

const imageUpload = multer({ storage: imageStorage }); // 위에서 정의한 storage를 사용

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // 전송된 파일이 저장되는 디렉토리
  },
  filename: function (req, file, cb) {
    // 현재 파일 업로드되는 년월일시분초밀리세컨드+업로드 파일의 확장자
    cb(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템 시간으로 파일이름을 변경해서 저장(동일한 파일명이 덮어 쓰는 현상을 예방하기 위함)
  },
});

const fileUpload = multer({ storage: fileStorage }); // 위에서 정의한 storage를 사용

const productRoute = require("./routes/product");
app.use("/api/product", productRoute);

const supplierRoute = require("./routes/supplier");
app.use("/api/supplier", supplierRoute);

// app.post("/login", (req, res) => {
//   const { email, pw } = req.body.param;
//   // 데이터베이스에 사용자가 있는지, 비밀번호는 맞는지 체크한 후에 아래 코드 진행
//   req.session.email = email;
//   req.session.isLogined = true;
//   // save 해주어야 세션 정보가 저장됨
//   req.session.save((err) => {
//     if (err) throw err;

//     res.send(req.session);
//   });
// });

// app.post("/logout", (req, res) => {
//   if (req.session.email) {
//     // 로그인 되어 있다면
//     req.session.destroy();
//     res.redirect("/login");
//   }
// });

// // 반드시 login, logout 아래에 작성
// app.all("*", (req, res, next) => {
//   // 정규식 *는 어떠한 형식의 path도 받기 위함
//   if (req.session.email) {
//     // 세션 정보가 있으면
//     console.log(req.cookies); // cookie-parser로 암호화된 쿠키정보 확인
//     next(); // 다음 라우터인 test를 실행함
//   } else {
//     res.redirect("/login");
//   }
// });

app.get("/api/file/:filename", (req, res) => {
  const file = "./uploads/" + req.params.filename; // :filename 정보가 req.params.filename로 들어 옴

  // uploads에 파일이 존재하지 않을 수 있기 때문에 try catch문 사용
  try {
    if (fs.existsSync(file)) {
      res.download(file);
    } else {
      res.send("요청한 파일이 존재하지 않습니다.");
    }
  } catch (e) {
    console.log(e);
    res.send("파일을 다운로드 하는 중 에러가 발생했습니다.");
  }
});

app.post(
  "/api/upload/file",
  fileUpload.single("attachment"),
  async (req, res) => {
    const fileInfo = {
      product_id: parseInt(req.body.product_id),
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      filename: req.file.filename,
      path: req.file.path,
    };

    res.send(fileInfo);
  }
);

app.post(
  "/api/upload/image",
  imageUpload.single("attachment"),
  async (req, res) => {
    const fileInfo = {
      product_id: parseInt(req.body.product_id),
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      filename: req.file.filename,
      path: req.file.path,
    };

    res.send(fileInfo);
  }
);

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
