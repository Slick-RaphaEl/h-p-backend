const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const dbUrl = process.env.DATABSE_URI;

        const con = await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`database running on ${con.connection.host}`);
    } catch (error) {
        console.log(error.messsage);
    }
};

module.exports = connectDB;