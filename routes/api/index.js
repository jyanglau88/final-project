const router = require("express").Router();
const petRoutes = require("./petmeds");

// Book routes
router.use("/petmeds", petRoutes);

module.exports = router;
