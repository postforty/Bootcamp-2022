const express = require("express");
const router = express.Router();
const mysql = require("../mysql");
const sql = require("../mysql/sql");

router.post("/", async (req, res) => {
  // orderInsert
  // r.insertId
  // orederDetailInsert
  // rollback

  // 1. connection 가져오기
  const conn = await mysql.getConnection();
  await conn.beginTransaction();

  // 2. 주문의 헤더 정보 (order) 생성
  conn.query(sql["orderInsert"], req.body.header, async (err, rows, fields) => {
    if (err) {
      console.log(err);
      await conn.rollback();
      res.status(500).send({ err: err });
    } else {
      const orderId = rows.insertId;
      const items = [];

      for (const item of req.body.items) {
        items.push([orderId, item.product_id, item.order_qty]);
      }

      conn.query(
        sql["orderItemInsert"],
        [items],
        async (err2, rows2, fields2) => {
          if (err2) {
            console.log(err2);
            await conn.rollback();
            res.status(500).send({ err: err2 });
          } else {
            await conn.commit();
            res.status(200).send(rows);
          }

          await conn.release();
        }
      );
    }
  });

  // commit

  // rollback
});

module.exports = router;
