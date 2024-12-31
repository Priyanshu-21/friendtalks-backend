import mongoose, { Schema } from "mongoose"; 

const conversationSchema = new Schema(
    {
        lastMessage: {
            type: Number, 
            required: true, 
        }, 
        type: {
            type: String, 
            enum: ["direct", "indirect"], 
            required: true,
        }, 
        lastMessageId: {
            type: Number, 
            required: true, 
        }
    },
    {
        timestamp: true, 
    }
);

export const conversationModel = mongoose.model("Conversation", conversationSchema);