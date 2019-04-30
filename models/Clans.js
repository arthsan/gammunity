const mongoose = require('mongoose');

const { Schema } = mongoose;

const clanSchema = new Schema({
  clanname: String,
  password: String,
  rate: Number,
  photo: { type: String, default: 'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png' },
  role: { type: String, enum: ['ADMIN', 'MEMBER'] },
  members: Number,
  requisits: {
    level: Number,
    friends: Number,
  },
  event: Number,
  hosts: Number,
  comments: Number,

  level: { type: Number, default: 0 },
  // location:
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Clan = mongoose.model('Clan', clanSchema);

module.exports = Clan;