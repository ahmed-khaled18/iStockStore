const express=require('express');
const router=express.Router();
const cartcontoller = require('../controller/cartcontroller');
//get cart
router.get("/",cartcontoller.get_cart);
//add cart
router.post("/addcart",cartcontoller.add_cart);

  module.exports=router;