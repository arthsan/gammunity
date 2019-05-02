const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  category: String,
  photoName: String,
  photo: String,
  text: String,
  // location: String,
  date: { type: Date, default: Date.now },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  clan: { type: String, default: 0 },
  latitude: String,
  longitude: String,
  requisits: {
    role: { type: String, enum: ['ADMIN', 'GUEST', 'MEMBER'] },
    clan: Boolean,
    friends: Number,
  },
  rate: { type: Number, default: 0 },
  creator: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;