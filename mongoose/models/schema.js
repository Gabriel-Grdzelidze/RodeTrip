const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const driverSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  licenseNumber: { type: String, required: true, unique: true },
  idNumber: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
});

const tripSchema = new Schema({
  locations: [{ type: String, required: true }],
  date: { type: Date, required: true },
  grade: { type: Number },
});

module.exports = {
  User: models.User || model("User", userSchema),
  Driver: models.Driver || model("Driver", driverSchema),
  Trip: models.Trip || model("Trip", tripSchema),
};
