const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET Landing Page
router.get('/', function(req, res) {
    res.render('account/index', {
        title: 'Account'
    });
});

module.exports = router;
