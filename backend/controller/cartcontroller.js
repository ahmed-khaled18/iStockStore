const Product = require('../model/ProductModel');
const Cart = require('../model/CartModel');
exports.add_cart = async (req, res) => { 
    for (var product in req.body.products){
      try {
        const theproduct = await Product.findOne({product_id:req.body.products[product].product_id});
        const newstock = theproduct.countInStock - req.body.products[product].quantity;
        await Product.updateOne({product_id: req.body.products[product].product_id},{$set: {countInStock: newstock}});
      } catch (error) {
        console.log(error);
        
      };
    }
    //check if the cart already exist
    const cartExist = await Cart.findOne({email: req.body.user_id});
    if(cartExist){
      try {
        await Cart.updateOne({email: req.body.user_id},{$set:{products: req.body.products,order_total: req.body.order_total,}});
        res.status(200).send("cart Updated");
      } catch (error) {
        res.status(400).json(error);
      }


    }else{
      const cart = new Cart({
        products: req.body.products,
        order_total: req.body.order_total,
        email: req.body.email     
        });
        try {
          // saving the new user to the database
          const saveCart = await cart.save();
          res.send(saveCart);
          res.status(200);
      } catch (error) {
          res.status(400).send(error);
      }
    }

  };

  exports.get_cart = async (req, res) => {
    try {
      let theproducts=[];
      const usercart = await Cart.findOne({email:req.body.email});
      for (var product in usercart.products){
        let theproduct = await Product.findOne({product_id:usercart.products[product].product_id});
        theproducts.push(theproduct);
        }
      const response=[usercart,theproducts];
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send(error);
    }

  }; 