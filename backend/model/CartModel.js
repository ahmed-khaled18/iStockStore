const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    products: [{productId:mongoose.Schema.Types.ObjectId,quantity: Number,name: String}],
    order_total:{type:Number,required:true},
    user_id: {type: mongoose.Schema.Types.ObjectId,ref: "UserModel",required:true},
  },

);

module.exports = mongoose.model("Cart", CartSchema);