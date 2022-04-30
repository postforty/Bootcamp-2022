const mongoose = require("mongoose");

const { Schema } = mongoose;

// MongoDB는 mongoose와 같은 ORM을 사용할 때 데이터를 직관적으로 확인하기 좋다.
const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
