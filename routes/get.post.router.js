const express = require('express');
const indexController = require('../controllers/index.controller');
const getPostRouter = express.Router();

getPostRouter.use('/post/:slug', indexController.getPost);

module.exports = getPostRouter;
