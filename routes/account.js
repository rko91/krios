const express = require('express')
const router = express.Router()

// GET Landing Page
router.get('/', function(req, res) {
    res.render('account/index', {
        title: 'Account'
    })
})

module.exports = router;
