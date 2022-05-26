const { rejects } = require("assert");
const crypto = require("crypto");
const { resolve } = require("path");

console.log(crypto.createHash("sha512").update("pw1234").digest("base64"));
// 9iSeOd1vv2qinR2UM5Aog5LmqBncF/oFeTTsPUjqwGoG3lG232280LqAScE7FR7HHe4K0gyedCN7iZDZl+NZaA==
console.log(crypto.createHash("sha512").update("pw1234").digest("hex"));
// f6249e39dd6fbf6aa29d1d943390288392e6a819dc17fa057934ec3d48eac06a06de51b6df6dbcd0ba8049c13b151ec71dee0ad20c9e74237b8990d997e35968
// 평문 그대로 보다는 안전하지만 100% 안전하다고 볼 수 없다.
// 헤커들은 거의 모든 비밀번호에 대한 "레인보우 테이블"을 가지고 있기 때문이다.

// salting 암호화
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });
};

const createCryptoPassword = async (plainPassword) => {
  const salt = createSalt();
  // 암호화할 문자열, salt, 반복횟수, 출력할 바이트수, 해시 알고리즘
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });
};

const getCryptoPassword = async (plainPassword, salt) => {
  // 암호화할 문자열, salt, 반복횟수, 출력할 바이트수, 해시 알고리즘
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });
};

// DB에 저장 관리되는 정뵈: 사용자 아이디, 암호화된 비밀번호, salt
