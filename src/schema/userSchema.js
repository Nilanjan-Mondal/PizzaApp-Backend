const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [5, "First name must be atleast 5 char long"],
        lowercase: true,
        trim: true,
        maxlength: [20, "First name must be 20 char or less"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [5, "Last name must be atleast 5 char long"],
        lowercase: true,
        trim: true,
        maxlength: [20, "Last name must be 20 char or less"]
    },
    mobileNumber: {
        type: String,
        trim: true,
        maxlength: [10, "Mobile number must be 10 digit long"],
        minlength: [10, "Mobile number must be 10 digit long"],
        unique: [true, "Phone number is already in use"],
        required: [true, "Mobile number is required"]
    },
    email: {
        type: String,
        trim: true,
        unique: [true, "Email is already in use"],
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be atleast 8 char long"],
        trim: true
    },
});

const user = mongoose.model("User", userSchema) // user is the collection object name

module.exports = user;