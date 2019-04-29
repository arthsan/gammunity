const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  category: String,
  // location: String,
  date: Date,
  friends: String,
  clan: String,
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