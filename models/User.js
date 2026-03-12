const mongoose = require ('mongoose')
const Schema = mongoose.Schema

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
            type:String,
            unique: true

        },
        phone:{
            required: true,
            type:String
        },
        role:{
            enum:["admin","user","professional"],
            type:String
        },
        location:{
            required: true,
            type: String
        },
        created_at: {
            type:Date,
            default:Date.now()}

    
    }


);
module.exports = user = mongoose.model("Users", UserSchema)
