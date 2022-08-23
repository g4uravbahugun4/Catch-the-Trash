const mongoose = require("mongoose");

async function connectDb() {
  try {
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDb;
