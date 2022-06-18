const express = require('express');
const router = express.Router();
const Image = require('../models/image');

// GET Landing Page
router.get('/', function(req, res) {
    res.render('images/index', {
        title: 'Images'
    });
});

router.post('/set_id', function(req, res) {
    res.render('images/set_id', {
        title: 'SetID'
    });
});

module.exports = router;
