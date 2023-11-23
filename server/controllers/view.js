const { validationResult } = require('express-validator');

const Pizza = require('../models/pizza');

exports.fetchPizzaNames = async (req, res, next) => {
    try {
        const [allPosts] = await Pizza.getListOfNames();
        res.status(200).json(allPosts);
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}