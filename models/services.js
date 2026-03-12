const mongoose = require (mongoose)

const Schema = mongoose.Schema()

const serviceSchema = new Schema(
    {
        service_id : {
            type: String
        },
        name:{
            type: String,
            required: true
        },

        category: {
            enum: ["renovation", "Construction", "DIY"]//all categories i need to cover in the system

        },

        description:{
            type: String
        }
    }

);

models.export = service = mongoose.models("services", serviceSchema);