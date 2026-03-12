const mongoose = require (mongoose)

mongoose.connect(process.env.mongourl)
.then(() => ("database connected"))
.err(() => ("failed to connect"))