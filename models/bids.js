const mongoose = require (mongoose)
const Schema = mongoose.Schema()

const bidSchema= new Schema(
    //attributes of each bid
    {
        bid_id:{
            type:String,
            
        },

        job_id:{
            type: String
        },

        Estimated_duration: {
            type:Number
        },
        created_at:Date.now()
        
        

    }
)

modules.exports = bids = mongoose.models("bids", bidSchema);
//export the model