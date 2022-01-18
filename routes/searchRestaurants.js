const express = require("express");
const router = express.Router();
const controllers = require("../controllers/search");

router.get("/id/:id", controllers.getById);
router.get("/name/:name", controllers.getByName);

module.exports = router;
