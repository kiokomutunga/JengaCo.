const mongoose = require (mongoose)

const conversationSchema = new mongoose.Schema(
    {
        conversationID: String,
        senderId: {
            type: Schema.Type.ObjectId,
            ref: "User"
        },
        receiverId:{ 
            type:Schema.Type.ObjectId,
            ref: "User"
        },
        messagetext: String,        
        isread: Boolean,     
    }, 
    {timestamps:true} // fetch real time 
);
conversationSchema.Index({conversationID:1, createdAt: -1}); //index for fast retrival
models.export = conversation = mongoose.model("Conversations", conversationSchema);