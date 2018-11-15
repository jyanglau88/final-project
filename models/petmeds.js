const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petMedsSchema = new Schema({

  prescription: { type: String, required: true },
  sig: { type: String, required: true },
  petname: { type: String },
  prescriber: { type: String },
  date: { type: Date }

});

const PetMeds = mongoose.model("PetMeds", petMedsSchema);

module.exports = PetMeds;
