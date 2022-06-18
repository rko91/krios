const express = require('express')
const router = express.Router()

// GET Landing Page
router.get('/', function(req, res) {
    res.render('about/index', {
        title: 'About'
    })
})

module.exports = router;
