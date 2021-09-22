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

  };

  exports.get_cart = async (req, res) => {
    try {
      const usercart = await Cart.findOne({email:req.body.email});
      for (var product in usercart.products){
          const theproduct = await Product.findOne({product_id:usercart.products[product].product_id});
          console.log(theproduct);
  
        }
      const response=[usercart];
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send(error);
    }

  }; 