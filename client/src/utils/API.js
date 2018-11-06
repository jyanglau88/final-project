import axios from "axios";

export default {
  // Gets all petmeds
  getPetMeds: function() {
    return axios.get("/api/petmeds");
  },
  // Gets the petmeds with the given id
  getPetMed: function(id) {
    return axios.get("/api/petmeds/" + id);
  },
  // Deletes the petmeds with the given id
  deletePetMed: function(id) {
    return axios.delete("/api/petmeds/" + id);
  },
  // Saves a petmeds to the database
  savePetMed: function(petmedData) {
    return axios.post("/api/petmeds", petmedData);
  }
};
