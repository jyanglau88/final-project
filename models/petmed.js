const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  prescription: { type: String, required: true },
  sig: { type: String, required: true },
  prescriber: String,
});

const PetMed = mongoose.model("PetMed", petSchema);

module.exports = PetMed;
