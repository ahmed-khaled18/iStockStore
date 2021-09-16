//VALIDATION
const joi = require('@hapi/joi');

//Regsiter Validation
const registerValidation = data => {
    const schema ={
        username: joi.string().min(2).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    };
    return joi.validate(data,schema);
};

//Login Validation
const loginValidation = data => {
    const schema ={
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    };
    return joi.validate(data,schema);
};



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
