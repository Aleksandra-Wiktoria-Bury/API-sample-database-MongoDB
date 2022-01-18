const express = require("express");
const router = express.Router();
const controllers = require("../controllers/update");

router.patch("/name/:id", controllers.updateName);
router.patch("/cuisine/:id", controllers.updateCuisine);
router.patch("/location/:id", controllers.updateLocation);
router.patch("/grades/:id", controllers.addGrades);
router.delete("/delete/:id", controllers.deleteDocument);

// testing the schema: router.post('/add', controllers.add);

module.exports = router;
