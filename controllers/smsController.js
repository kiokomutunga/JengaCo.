const Sms = require("../models/sms");

exports.createSms = async(req, res) => {
    const {to, message} = req.body;

    if (!message){
        return res.status(400).json(
            {
                success: false,
                message: "cannot access receivers address and message"
            }
        );
    }
    else if (!message){
        return res.status(400).json({
            success: false,
            message: "no message added"
        });
    }
        let logsms = await Sms.create(
            {
                to,
                from,
                status:"pending"
            }
        );

    try{
        const result = await sendSms({to, message})
        if (result.success){
            //change the ,essage status after success to sent.
            logsms.status = "sent"
            logsms.sid = result.sid
        }
        else {
            //label message as failed to sent but still save it
            logsms.status = "failed"
            logsms.sid = result.sid
        }

        await logsms.save()

        return res.status(200).json({
            success: true,
            message: "successfully sent",
            data:  logsms
        })

    }
    catch(error){
        logsms.status = "failed"
        logsms.error = error.message
        await logsms.save();



        return res.status(500).json({
            success: false,
            error : error.message,
            
        })
        
    }
}

