const mongoose = require (mongoose)
const Schema = mongoose.Schema()

const bidSchema= new Schema(
    //attributes of each bid
    {
        bid_id:{
            type:String,
            
        },

        job_id:{
            type: Schema.Type.ObjectId,
            ref:"job"
             }, // fetch the job being bidded

        Estimated_duration: {
            type:Number
        },
        
        created_at:Date.now()
        ,
        professional_id :{
            type: Schema.type.ObjectId,
            ref: "professional" // use the id of the person biding
        },
        proposal: String
        
        

    }
)

modules.exports = bids = mongoose.models("bids", bidSchema);
//export the model