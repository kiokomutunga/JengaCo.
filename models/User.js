const mongoose = require (mongoose)
const Schema = mongoose.Schema()

const UserSchema = new Schema(
    {
        id:{
            required: true,
            type:String
        },
        name:{
            required: true,
            type: String
        },
        email:{
            required: true,
            type:String

        },
        phone:{
            required: true,
            type:String
        },
        role:{
            role:["admin","user","professional"],
            type:String
        },
        location:{
            required: true,
            type: String
        },
        created_at: Date.now()

    
    }


);
Module.exports = user = mongoose.model("Users", UserSchema)
