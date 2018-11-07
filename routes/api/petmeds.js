const router = require("express").Router();
const petsController = require("../../controllers/petsController");

// Matches with "/api/petmeds"
router.route("/api/petmeds")
  .get(petsController.findAll)
  .post(petsController.create);

// Matches with "/api/petmeds/:id"
router
  .route("/:id")
  .get(petsController.findById)
  .put(petsController.update)
  .delete(petsController.remove);

module.exports = router;
