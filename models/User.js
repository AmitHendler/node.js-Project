const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    first: { type: String, required: true },
    middle: String,
    last: { type: String, required: true }
  },
  isBusiness: { type: Boolean, default: false },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: {
    url: { type: String, default: '' },
    alt: { type: String, default: '' }
  },
  address: {
    state: { type: String, default: 'not defined' },
    country: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    houseNumber: { type: String, required: true },
    zip: { type: String, default: '' }
  },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
