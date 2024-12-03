import mongoose, { Schema } from "mongoose"; 

const messageSchema = new Schema(
    {
        content: {
            type: String, 
            required: true, 
        }, 
        userId: {
            type: Schema.Types.ObjectId, 
            ref: "User", 
        }, 
        chatId: {
            type: Schema.Types.ObjectId, 
            ref: "Chat", 
        }, 
        groupId: {
            type: Schema.Types.ObjectId, 
            ref: "Group", 
        }, 
    }, 
    {
        timestamps: true, 
    }
); 

export const messageModel = mongoose.model("Message", messageSchema); 