const router = require("express").Router();
const petRoutes = require("./petmeds");

// PetMed routes
router.use("/petmeds", petRoutes);

module.exports = router;
