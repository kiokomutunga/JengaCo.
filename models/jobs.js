const mongoose = require ("mongoose")
const Schema = mongoose.Schema()
const JobsSchema = new Schema(
    {
        job_id:{
            type:String
        },
        title:{
            type: String
        },
        job_description:{
            type: String
        },
        budget:{
            type: Number
        },
        user_id:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        // i need to reference certain user created the job
        },
        status:{
            enum: ["Active", "Ongoing" , "Booked", "Pending"]
        },
        created_at: Date.now(),
        images:{
        }
    }
)
models.exports = job = mongoose.model("jobs", JobsSchema);