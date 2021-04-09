const mongoose = require("mongoose");
const decks = require('./cardNames');

const profileSchema = new mongoose.Schema({
  gameID: { type: String, require: true, unique: true },
  player: {type: Number, require: true, unique: true},
  spirit: {type:String},
  hand: [ ],
  play: [ ],
  discard: [],
  energy: []
});

const model = mongoose.model("player", profileSchema);

module.exports = model;