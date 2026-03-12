const mongoose = require (mongoose)

const connectedDB = async () => {
    try{

        conn = mongoose.connect(process.env.mongourl)

        console.log("database connected successfully")

    }
    catch(error){
        console.log(`could not connect to database: & {error.message} `);
        process.exit(1) //close the application after fail

    }
    

    

};

module.exports = connectedDB;
