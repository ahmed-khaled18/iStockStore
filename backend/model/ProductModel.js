const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prodctSchema = new mongoose.Schema({
  product_id:{type:String,required: true,unique:true},
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number,min:0, default: 0, required: true },
  countInStock: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
  rating: { type: Number,min:0,max:5, default: 0, required: true },
  numReviews: { type: Number,min:0, default: 0, required: true },
});

module.exports= mongoose.model('Product', prodctSchema);