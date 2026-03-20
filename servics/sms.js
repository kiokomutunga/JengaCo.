const { response } = require("express");
const twilio = require("twilio")

const client =  twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN

);
const sendSms = async (to, message) => {
    try{
        const Response = await client.messages.create ({
            body:message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to,

        });

        return{
            success: true,
            sid: response.sid,
            response: response.status
        }



    }catch(error){
        return{
            success: false,
            error: error.message
        }
    }

    };

