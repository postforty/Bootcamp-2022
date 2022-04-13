const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);

const corsOptions = {
  origin: "http://localhost:5100",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5100",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    // socket 연결이 종료됐을 때
  });

  socket.on("client2server", (data) => {
    console.log(data); // 클라이언트로 부터 전달된 메시지
  });
});

const sendMsgToClient = () => {
  setInterval(() => {
    io.emit("server2client", {
      code: `item${Math.random()}`,
      price: Math.random(),
    });
  }, 1000);
};

app.get("/socket", (req, res) => {
  sendMsgToClient();
  res.send("서버로 부터 메시지 전송 시작");
});

httpServer.listen(3000, () => {
  console.log("3000번 포트로 서버가 실행됐습니다.");
});
