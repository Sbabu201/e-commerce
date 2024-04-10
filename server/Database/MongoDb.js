const mongoose = require("mongoose")

const MongoDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://soumya:soumya@cluster0.rxfhjjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("connected to the database")
    } catch (error) {
        console.log('error', error)
    }
}

module.exports = MongoDb;