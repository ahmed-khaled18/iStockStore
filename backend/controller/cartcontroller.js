
exports.add_cart = async (req, res) => {
    const { productId, quantity, name, price } = req.body;
  
  //  const userId = "5de7ffa74fff640a0491bc4f"; //TODO: the logged in user id
  
    try {
      let cart = await Cart.findOne({ userId });
  
      if (cart) {
        //cart exists for user
        let itemIndex = cart.products.findIndex(p => p.productId == productId);
  
        if (itemIndex > -1) {
          //product exists in the cart, update the quantity
          let productItem = cart.products[itemIndex];
          productItem.quantity = quantity;
          cart.products[itemIndex] = productItem;
        } else {
          //product does not exists in cart, add new item
          cart.products.push({ productId, quantity, name, price });
        }
        cart = await cart.save();
        return res.status(201).send(cart);
      } else {
        //no cart for user, create new cart
        const newCart = await Cart.create({
          userId,
          products: [{ productId, quantity, name, price }]
        });
  
        return res.status(201).send(newCart);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  };

  exports.delete_cart = (req,res)=>{
    "use strict";
    let productId=req.body.productId;
    let userId=req.cookies.userId;
    user.update({userId:userId},{
     $pull:{
      cartList:{productId:productId}
     }
    },(err,doc)=>{
     if(err){
      res.json({
       status:1,
       MSG: 'database deletion failed'
      })
     }else{
      if(doc){
       res.json({
        status:0,
        MSG: 'shopping cart deleted successfully'
       })
      }
     }
    })
   };

   exports.edit_cart = (req,res)=>{
    "use strict";
    let productId=req.body.productId;
    let checked=req.body.checked;
    let productNum=req.body.productNum;
    let userId=req.cookies.userId;
    user.update({userId:userId,'cartList.productId':productId},{
     $set:{"cartList.$.checked":checked,"cartList.$.productNum":productNum}
    },(err,doc)=>{
     if(err){
      res.json({
       status:1,
       msg:err.message
      })
     }else {
      res.json({
       status:0,
       MSG: 'shopping cart updated successfully'
      })
     }
    })
   };