
const express = require("express");
const stuffController = require("../controllers/stuffController");

const stuffRouter = new express.Router();
stuffRouter.get('/',stuffController.getAll);
stuffRouter.get('/item:id',stuffController.getItem);
stuffRouter.post('/item',stuffController.createItem);

module.exports = stuffRouter;
