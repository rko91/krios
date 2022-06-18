const express = require('express')
const router = express.Router()

// GET Landing Page
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Home'
    });
});

module.exports = router;
