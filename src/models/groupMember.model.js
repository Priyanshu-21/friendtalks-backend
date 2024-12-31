import mongoose, { Schema } from "mongoose"; 

const groupMemberSchema = new Schema(
    {
        //GroupId, UserId 
        groupId: {
            type: Schema.Types.ObjectId, 
            ref: "Group", 
            required: true, 
        }, 
        userId: {
            type: Schema.Types.ObjectId, 
            ref: "User"
        }, 
        role: {
            type: String, 
            enum: ["admin", "member"], 
        }, 
        joinedAt: {
            type: String, 
            required: true, 
        }
    }
); 

export const groupMemberModel = mongoose.model("Groupmember", groupMemberSchema); 