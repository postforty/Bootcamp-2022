const crypto = require("crypto");
const { resolve } = require("path");

console.log(crypto.createHash("sha512").update("pw1234").digest("hex"));
// 9iSeOd1vv2qinR2UM5Aog5LmqBncF/oFeTTsPUjqwGoG3lG232280LqAScE7FR7HHe4K0gyedCN7iZDZl+NZaA==
// f6249e39dd6fbf6aa29d1d943390288392e6a819dc17fa057934ec3d48eac06a06de51b6df6dbcd0ba8049c13b151ec71dee0ad20c9e74237b8990d997e35968
// 해커들은 "레인보우 테이블"을 가지고 있다.
// salting 암호화를 하여야 더 안전하다. ※소금을 뿌려 보이지 않게 하듯이 알아보기 힘들게 만든다.
// salting 암호화를 위한 랜덤한 64비트 문자열을 만드는 함수
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });
};

const createCryptPassword = async (plainPassword) => {
  const salt = createSalt();
  // 암호화할 문자열, salt문자열, 반복횟수, 출력할 바이트수, 해시 알고리즘
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject;
      resolve({ password: key.toString("base64"), salt });
    });
  });
};

// 사용자 아이디, 암호화된 비밀번호, salt
// 사용자 아이디, 비밀번호
// -> salt

const getCryptPassword = async (plainPassword, salt) => {
  // 암호화할 문자열, salt문자열, 반복횟수, 출력할 바이트수, 해시 알고리즘
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject;
      resolve({ password: key.toString("base64"), salt });
    });
  });
};
