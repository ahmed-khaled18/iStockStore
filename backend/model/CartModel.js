const { string } = require("@hapi/joi");
const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    products: [{product_id:String,quantity: Number,name: String}],
    order_total:{type:Number,required:true},
    email: {type:String ,unique:true,required:true},
  },

);

module.exports = mongoose.model("Cart", CartSchema);