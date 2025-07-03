const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  slotTime: Date,
  status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' }
});
module.exports = mongoose.model('Booking', bookingSchema);