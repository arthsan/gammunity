const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  birthday: Date,
  photo: { type: String, default: 'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png' },
  role: { type: String, enum: ['ADMIN', 'GUEST', 'MEMBER'] },
  clan: String,
  friends: Number,
  level: { type: Number, default: 0 },
  rate: Number,
  host: Number,
  event: Number,
  comments: Number,
  // location:
}, {
  timestamps: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;