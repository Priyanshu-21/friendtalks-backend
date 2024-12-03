import mongoose, { Schema } from "mongoose";

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

export const userModel = mongoose.model("User", userSchema); 
