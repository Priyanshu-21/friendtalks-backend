import mongoose, { Schema, Types } from "mongoose"; 

const messageSchema = new Schema(
    {
        conversationId: {
            type: Schema.Types.ObjectId, 
            ref: "Conversation", 
            required: true, 
        }, 
        // SenderId: UserId 
        userId: {
            type: Schema.Types.ObjectId, 
            ref: "User", 
            required: true, 
        }, 
        messageType: {
            type: String, 
            enum: ["text", "image", "video"], 
            required: true, 
        }, 
        status: {
            type: String, 
            enum: ["sent", "seen", "delivered"], 
            required: true, 
        }
    }, 
    {
        timestamps: true, 
    }
); 

export const messageModel = mongoose.model("Message", messageSchema); 