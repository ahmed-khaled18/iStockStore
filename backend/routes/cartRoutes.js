const express=require('express');
const router=express.Router();
const authcontoller = require('../controller/cartcontroller');
//add cart
router.post("/cart",authcontoller.add_cart);

//delete cart
  router.post('/deleteCart', authcontoller.delete_cart);

 //edit cart
 router.post('/editCart',authcontoller.edit_cart);  
  
  module.exports=router;