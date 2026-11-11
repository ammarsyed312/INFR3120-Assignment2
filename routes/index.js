var express = require('express');
var router = express.Router();

// Display the Home page.
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Home'
    });
});

// Display the About Me page.
router.get('/aboutme', function(req, res, next) {
    res.render('aboutme', {
        title: 'About Me'
    });
});

// Display the Projects page.
router.get('/projects', function(req, res, next) {
    res.render('projects', {
        title: 'Projects'
    });
});

// Display the contact page with no feedback initially.
router.get('/contactme', function(req, res, next) {
    res.render('contactme', {
        title: 'Contact Me',
        feedback: ''
    });
});

// Check submitted fields and display feedback.
router.post('/contactme', function(req, res, next) {
    if (!req.body.name || !req.body.email || !req.body.message) {
        res.render('contactme', {
            title: 'Contact Me',
            feedback: 'Please complete the name, email, and message fields.'
        });
    } else {
        res.render('contactme', {
            title: 'Contact Me',
            feedback: 'Thank you, ' + req.body.name +
                '. Your demonstration submission was received. ' +
                'It has not been emailed or saved.'
        });
    }
});

module.exports = router;