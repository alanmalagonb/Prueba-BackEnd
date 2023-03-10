const express = require("express");

const controller = require("../controllers/controller");

const router = express.Router();

router.get("/getCompetitors:stationId", controller.getCompetitors);

module.exports = router;