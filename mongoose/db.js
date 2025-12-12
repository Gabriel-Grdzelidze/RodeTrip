const mongoose = require("mongoose");
const { User, Driver, Trip } = require("../mongoose/models/schema");

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(process.env.DATABASE_URL);

  await User.init();
  await Driver.init();
  await Trip.init();
};

module.exports = connectDB;
