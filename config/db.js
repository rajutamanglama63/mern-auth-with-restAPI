const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DatabaseConnection = async (req, res) => {
    try {
        await mongoose.connect(process.env.MongoURI, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useCreateIndex : true
        });
        console.log(`MongoDB connection established...`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = DatabaseConnection;