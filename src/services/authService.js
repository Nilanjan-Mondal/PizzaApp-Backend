const { findUser } = require("../repositories/userRepository.js");
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config/serverConfig.js");

async function loginUser (authDetails) {
    const email = authDetails.email;
    const plainPassword = authDetails.password;


    // 1. check if the user exists with the given email
    const user = await findUser({ email });

    if(!user) {
        throw {
            message: "User not found with the email",
            statusCode: 404
        }
    }

    // 2. If user is found we need to compare the plainIncomingPassword with the hashedPassword
    
    const isPasswordValidated = await bcrypt.compare(plainPassword, user.password);

    if(! isPasswordValidated) {
        throw {
            message: "Password is incorrect, please try again",
            statusCode: 400
        }
    }

    // 3. If the password is correct we will create a token and return it to the user

    const token = jwt.sign({email: user.email, id: user._id}, JWT_SECRET, {expiresIn: "60h"});

    return token;
}

module.exports = {
    loginUser
}