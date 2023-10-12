const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDb connected with server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`Mongodb error message ${err.message}`);
    });
};

module.exports = connectDB;
