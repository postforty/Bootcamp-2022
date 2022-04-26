module.exports = {
  categoryList: `select * from product_category`,
  categoryListByCondition: `select * from product_category where lower(category_name) like ?`,
  categoryDetail: `select * from product_category where product_category_id=?`,
  categoryInsert: `insert into product_category set ?`,
  categoryUpdate: `update product_category set ? where product_category_id=?`,
  categoryDelete: `delete from product_category where product_category_id=?`,
  imageInsert: `insert into product_image set ?`,
  productCount: `select count(*) as count from product where product_category_id=?`,
  supplierList: `select * from product_supplier`,
  supplierDetail: `select * from product_supplier where supplier_id=?`,
  supplierInsert: `insert into product_supplier set ?`,
  supplierDetail: `select * from product_supplier where supplier_id=?`,
};
