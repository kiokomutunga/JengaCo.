const mongoose = require ("mongoose")
const Schema = mongoose.Schema()

const smsSchema = Schema.new(
    {
        to:string,
        from: String,
        status: {
            type: String,
            enum: ["pending", "Sent", "failed"],
            default: "pending"
        },
        message: String,
        sid: String,
        error: String
        

    
        
    }, { timestamps : true}
);
module.exports  = mongoose.models("Sms schema", smsSchema)