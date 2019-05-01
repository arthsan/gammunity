const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  category: String,
  photo: String,
  text: String,
  // location: String,
  date: { type: Date, default: Date.now },
  friends: { type: Number, default: 0 },
  clan: { type: String, default: 0 },
  requisits: {
    role: { type: String, enum: ['ADMIN', 'GUEST', 'MEMBER'] },
    clan: Boolean,
    friends: Number,
  },
  rate: { type: Number, default: 0 },
}, {
  timestamps: { type: Date, default: Date.now },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;