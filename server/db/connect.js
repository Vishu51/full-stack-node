const mongoose = require('mongoose')
URI="mongodb+srv://vishal:" + process.env.MONGO_ATLAS_PW + "@cluster0.wanef.mongodb.net/Cluster0?retryWrites=true&w=majority"
const connectDB = () => {
    // Mongoose DEPRECATED WARNING SETUP
    mongoose.set('strictQuery', false);

    return mongoose.connect(URI , { useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => {console.log('> MongoDB Connected'); return true })
    .catch(err => {console.log(`> Error while connecting to mongoDB : ${err.message}` ); return false})
}

module.exports = connectDB