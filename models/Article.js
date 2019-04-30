const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema({
  title: String,
  text: String,
  photo: { type: String, default: 'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png' },
  // _idUsername: String,
  // _idUserphoto: String,
  rate: { type: Number, default: 1 },
}, {
  timestamps: { type: Date, default: Date.now },
  comment: String,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;