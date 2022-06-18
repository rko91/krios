const express = require('express')
const router = express.Router()

// GET Landing Page
router.get('/', function(req, res) {
    res.render('images/index', {
        title: 'Images'
    });
});

router.post('/set_id', function(req, res) {
    res.render('images/set_id', {
        title: 'SetID'
    })
})

module.exports = router;
