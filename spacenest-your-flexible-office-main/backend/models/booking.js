const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  workspace: String,
  location: String,
  price: Number,
  userEmail: String,
  date: String
});

module.exports = mongoose.model("Booking", BookingSchema);