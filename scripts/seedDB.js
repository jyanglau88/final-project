const mongoose = require("mongoose");
const db = require("../models");

// This file empties the PetMeds collection and inserts the PetMeds below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pillpals"
);

const petSeed = [
  {
    prescription: "Fluoxetine 10mg",
    sig: "Give 1 capsule by mouth every day",
    petname: "Fluffy",
    prescriber: "Dr. Pet Vet",
    date: 01/01/2018
  }
];

db.PetMeds
  .remove({})
  .then(() => db.PetMeds.collection.insertMany(petSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
