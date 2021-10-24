
const express = require("express");
const stuffController = require("../controllers/stuffController");

const urlencodedParser = express.urlencoded({extended: false});
  

const stuffRouter = new express.Router();
stuffRouter.get('/',stuffController.getAll);
stuffRouter.get('/item:id',stuffController.getItem);
stuffRouter.get('/newitem',stuffController.showCreateItem);
stuffRouter.post('/newitem', urlencodedParser, stuffController.createItem);

module.exports = stuffRouter;
