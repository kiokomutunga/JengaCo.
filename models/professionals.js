const mongoose = require (mongoose)

const Schema = mongoose.Schema()

const professionalSchema = new Schema(
    {
        name:{
            required: true,
        },

        email:{
            required: true,
            unique: true
        },

        skills:{

        },
        portfolio_images:{

        },
        is_verified:{
            enum:["verified", "not verified"]
        },

        service_area:{
            required: true
        },
        
        phone: String
    }

)

Module.exports = professional = mongoose.model("professional", professionalSchema);