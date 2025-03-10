const express = require('express');
const router = express.Router();
const toyController = require('../controllers/toyController');

// ...existing code...
router.get('/:id_seller', toyController.getToysBySeller);

module.exports = router;
