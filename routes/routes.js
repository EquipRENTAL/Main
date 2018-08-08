const router = require("express").Router();
const itemsController = require("../controllers/itemsController.js");

// Matches with "/api/items"
router.route("/api/")
  .get(itemsController.findAll)
  .post(itemsController.create);


// Matches with "/api/items"
router.route("/api/by-category/:category")
  .get(itemsController.findAll);

// Matches with "/api/items/:id"
router.route("/api/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  .delete(itemsController.remove);

module.exports = router;
