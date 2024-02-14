const mongoose = require("mongoose");

async function connectDb() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Connected to database: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDb;
