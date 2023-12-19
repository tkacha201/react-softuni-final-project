const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  experience: { type: mongoose.Schema.Types.ObjectId, required: true },
  date: { type: Date, required: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
});

const BookingModel = mongoose.model("Booking", bookingSchema);

module.exports = BookingModel;
