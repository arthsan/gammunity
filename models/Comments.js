const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentsSchema = new Schema({
  title: String,
  text: String,
  // _idUsername: String,
  // _idclanname: String,
  // _idUserphoto: String,
  rate: { type: Number, default: 1 },
}, {
  timestamps: { type: Date, default: Date.now },
});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;