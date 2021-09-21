const Product = require('../model/ProductModel');
const Cart = require('../model/CartModel');
exports.add_cart = async (req, res) => { 
    for (var product in req.body.products){
      try {
        const theproduct = await Product.findOne({_id:req.body.products[product].product_id});
        const newstock = theproduct.countInStock - req.body.products[product].quantity;
        await Product.updateOne({_id: req.body.products[product].product_id},{$set: {countInStock: newstock}});
      } catch (error) {
        console.log(error);
        
      };
    }
      const cart = new Cart({
      products: req.body.products,
      order_total: req.body.order_total,
      user_id: req.body.user_id     
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
      const usercart = await Cart.findOne({user_id:req.body.user_id});
      res.status(200).json(usercart);
    } catch (error) {
      res.status(400).send(error);
    }

  }; 