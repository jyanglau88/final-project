const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  prescription: { type: String, required: true },
  sig: { type: String, required: true },
  petname: { type: String },
  prescriber: { type: String },
  date: { type: Date }

});

const PetMed = mongoose.model("PetMed", petSchema);

module.exports = PetMed;
