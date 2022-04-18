const express = require("express"); // 웹소켓 통신을 하기 위해서는 express, http가 모두 있어야 한다.
const { createServer } = require("http");
const { Server } = require("socket.io"); // npm i socket.io
const cors = require("cors");

const app = express();
const httpServer = createServer(app);

const corsOptions = {
  origin: "http://localhost:5500",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5500",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    // socket 연결이 종료됐을 때
  });

  // 이벤트명(client2server)이 동일할 경우 통신함
  socket.on("client2server", (data) => {
    console.log(data); // 클라이언트로 부터 전달된 메시지
    // socket.emit("server2client", {}); // 메시지를 전송한 클라이언트에만 전송
    // socket.broadcast.emit("", {}); // 메시지를 전송한 클라이언트를 제외한 나머지 모두에게 전송.
  });
});

const sendMsgToClient = () => {
  setInterval(() => {
    io.emit("server2client", {
      // 전송할 데이터(예: 제품코드, 가격을 랜덤함수로 생성)
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
