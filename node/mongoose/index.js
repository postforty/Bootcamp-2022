const mongoose = require("mongoose");

const connect = () => {
  mongoose.set("debug", true);

  mongoose.connect(
    `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}`,
    {
      dbName: process.env.MONGODB_DB,
    },
    (error) => {
      if (error) {
        console.log("MongoDB 연결 에러", error);
      } else {
        console.log("MongoDB 연결 성공");
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.log("MongoDB 연결 에러", error);
});

mongoose.connection.on("disconnected", (error) => {
  console.log("MongoDB 연결이 종료되어 연결을 재시도 합니다.");
  connect();
});

module.exports = {
  connect,
};
