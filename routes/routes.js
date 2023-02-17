const express = require("express");

const controller = require("../controllers/controller");

const router = express.Router();

router.get("/posts:stationId", controller.getCompetitors);
