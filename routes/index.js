var express = require('express');
var router = express.Router();

// Render the Home page and pass its title to EJS.
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

// Render the About Me page.
router.get('/aboutme', function(req, res, next) {
    res.render('aboutme', { title: 'About Me' });
});

// Render the Projects page.
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});

// Render the Contact Me page.
router.get('/contactme', function(req, res, next) {
    res.render('contactme', { title: 'Contact Me' });
});

module.exports = router;