const User = require('../model/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registerValidation,loginValidation} = require('../middleware/validation');

exports.login_post = async (req,res) => {
    //valddating data
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);//error message  

    //check if the user exists
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email Does not exist');

    //check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass)return res.status(400).send('invalid password');

    //create jwt token
    const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

   
};

exports.register_post = async (req,res) => {

    //valddating data
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);//error message

    //check if the user already registered
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already Registered');

    //Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);


    //create a new user
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
        address: req.body.address,
        city: req.body.city,
        mobile: req.body.mobile,
    });
    try {
        // saving the new user to the database
        const saveUser = await user.save();
        res.send(saveUser);
        res.status(200);
    } catch (error) {
        res.status(400).send(error);
    }
};