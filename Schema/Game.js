const mongoose = require("mongoose");
const decks = require('../commands/cardNames');

const profileSchema = new mongoose.Schema({
  gameName: {type:String, require:true, unique: true},
  serverID: { type: String, require: true },
  channelID: { type: String, require: true, unique: true },
  players: [ {type: Number, unique: true} ],
  spirits: [ {type: Number, unique: true} ],
  minorDeck: [ decks.minor], 
  minorDiscard: [ ],
  minorDeck: [ decks.major ],
  majorDiscard: [ ],
  fear: [decks.fear]
});

const model = mongoose.model("NewGame", profileSchema);

module.exports = model;

