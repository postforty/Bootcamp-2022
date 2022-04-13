const express = require("express");
const app = express();
const fs = require("fs"); // 파일 관련
const path = require("path"); // 파일 위치 정보
const mime = require("mime"); // 마임타입(jpg, png 등)을 알기 위해
// const res = require("express/lib/response");

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

app.get("/file/:filename", (req, res) => {
  const file = "./uploads/" + req.params.filename; // :filename 정보가 req.params.filename로 들어 옴

  // uploads에 파일이 존재하지 않을 수 있기 때문에 try catch문 사용
  try {
    if (fs.existsSync(file)) {
      // const mimetype = mime.getType(file); // 마임 타입만
      // const filename = path.basename(file); // 실제 파일 이름만
      // res.setHeader("Content-disposition", "attachment; filename=" + filename); // 다운 파일명
      // res.setHeader("Content-type", mimetype); // 파일 형식 지정
      // const filestream = fs.createReadStream(file); // 버퍼에 담음
      // filestream.pipe(res); // 다운이 일어남
      res.download(file); // 위의 코드를 이 한 줄로 해결
    } else {
      res.send("요청한 파일이 존재하지 않습니다.");
    }
  } catch (e) {
    console.log(e);
    res.send("파일을 다운로드 하는 중 에러가 발생했습니다.");
  }
});
