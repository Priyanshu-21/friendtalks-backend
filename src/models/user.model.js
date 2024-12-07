import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken"; 

const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true, 
            unique: true,
            lowercase: true,  
            trim: true, 
            index: true,  
        }, 
        email: {
            type: String, 
            required: true, 
            unique: true, 
            lowercase: true, 
            trim: true, 
        }, 
        fullname: {
            type: String, 
            required: true, 
            trim: true, 
        }, 
        avatar: {
            type: String, // Will use cloudinary as 3rd party service for this 
            required: [true, "Avatar is required"]
        }, 
        password: {
            type: String, 
            required: [true, "Password is required"]
        }, 
        refreshToken: {
            type: String, 
        }
    }, 
    {
        timestamps: true
    }

);

// Adding Password hashing logics to store in DB before saving into DB 
// Encrypting password 
userSchema.pre("save", async function (next) {

    // Prevent saving password each time DB is saved. 
    if(!userSchema.isModified("password")) return next(); 

    this.password = await bcrypt.hash(this.password, 10); 
    next(); 
}); 

// Comparing password 
userSchema.methods.checkPassword = async function (password) {
    const result = await bcrypt.compare(password, this.password); 
    return result; 
}

// Access token 
userSchema.methods.generateAccessToken = function () {

    //Secret key 
    const secretKey = process.env.ACCESS_KEY_TOKEN; 
    
    //Payload 
    const payload = {
        _id: this._id, 
        username: this.username, 
        email: this.email, 
        fullname: this.fullname, 
    }

    //Option: expiry date of token
    const options = {
        expiresIn: process.env.ACCESS_EXPIRY_DATE,  
    }

    return jwt.sign(payload, secretKey, options); 
}

//Refresh Token 
userSchema.methods.generateRefreshToken = function () {

    return jwt.sign(
        {
            //Payload
            _id: this._id
        }, 
        // Signature 
        process.env.REFRESH_KEY_TOKEN, 
        {
            // Options 
            expiresIn: process.env.REFRESH_EXPIRY_DATE
        }
    ); 
}


export const userModel = mongoose.model("User", userSchema); 
