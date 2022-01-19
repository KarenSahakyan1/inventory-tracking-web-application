const path = require('path')

const express = require('express');

const inventoryController = require('../controllers/inventory');

const router = express.Router();

router.get('/', inventoryController.getIndex);

router.get('/products', inventoryController.getProducts);

router.get('/products/:productId', inventoryController.getProduct);

router.get('/exportCSV', inventoryController.exportCSV)
router.get('/downloadCSV', inventoryController.downloadCSV, )

module.exports = router;
