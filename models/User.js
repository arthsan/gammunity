const mongoose = require('mongoose');


const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  birthday: Date,
  photo: { type: String, default: 'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png' },
  role: { type: String, enum: ['ADMIN', 'GUEST', 'MEMBER'], default: 'GUEST' },
  clan: String,
  friends: Number,
  level: { type: Number, default: 0 },
  rate: { type: Number, default: 0 },
  host: { type: Number, default: 0 },
  event: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  // location:
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
