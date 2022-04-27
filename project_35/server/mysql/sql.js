module.exports = {
  categoryList: `select * from product_category`,
  categoryDetail: `select * from product_category where product_category_id=?`,
  categoryInsert: `insert into product_category set ?`,
  categoryUpdate: `update product_category set ? where product_category_id=?`,
  categoryDelete: `delete from product_category where product_category_id=?`,
  imageInsert: `insert into product_image set ?`,
  productCount: `select count(*) from product where product_category_id=?`,
};
