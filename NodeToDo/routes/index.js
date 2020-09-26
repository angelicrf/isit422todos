var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.sendFile('main.html', {
        root: 'public/'
    });
});

module.exports = router;
