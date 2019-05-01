const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  category: String,
  photo: String,
  // location: String,
  date: { type: Date, default: Date.now },
  friends: Number,
  clan: String,
  requisits: {
    role: { type: String, enum: ['ADMIN', 'GUEST', 'MEMBER'] },
    clan: Boolean,
    friends: Number,
  },
  rate: { type: Number, default: 0 },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;