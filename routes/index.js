var express = require('express');
var router = express.Router();

// Home page
router.get('/', function(req, res) {
    res.render('index');
});

// About Me page
router.get('/aboutme', function(req, res) {
    res.render('aboutme');
});

// Projects page
router.get('/projects', function(req, res) {
    res.render('projects');
});

// Contact Me page
router.get('/contactme', function(req, res) {
    res.render('contactme');
});

module.exports = router;