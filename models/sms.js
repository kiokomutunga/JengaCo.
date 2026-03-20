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
        message: String

    
        
    }, { timestamps : true}
);

mongoose.models.exports = sms = mongoose.models("Sms schema", smsSchema)