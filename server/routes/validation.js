const express = require("express");

const { body } = require("express-validator");

const router = express.Router();

const Pizza = require("../models/pizza");

const viewController = require("../controllers/view");

router.get('/fetchAll', viewController.fetchPizzaNames);

module.exports = router;
