import mongoose, { Schema } from "mongoose"; 

const groupSchema = new Schema(
    {
        groupName: {
            type: String, 
            required: true, 
        }, 
        createdBy: {
            type: String, 
            required: true, 
        }, 
        profilePicture: {
            type: String, 
        }, 
        isPublic: {
            type: Boolean, 
            required: true, 
        }
    }, 
    {
        timestamp: true, 
    }
); 

export const groupModel = mongoose.model("Group", groupSchema); 