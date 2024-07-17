const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  web: { type: String, default: '' },
  image: {
    url: { type: String, default: '' },
    alt: { type: String, default: '' }
  },
  address: {
    state: { type: String, default: 'not defined' },
    country: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    houseNumber: { type: Number, required: true },
    zip: { type: String, default: '' }
  },
  bizNumber: { type: Number, required: true, unique: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Card', cardSchema);
