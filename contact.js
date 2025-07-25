const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: String,
  email: String,
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
