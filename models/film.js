const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: String,
  director: String,
  release_date: String,
  episode_id: Number,
});

module.exports = mongoose.model('Film', filmSchema);
