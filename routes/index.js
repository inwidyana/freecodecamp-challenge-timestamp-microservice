var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/timestamp/:timestamp', function(req, res, next) {
    var date = new Date(req.params['timestamp']) ;
    if(date.getTime()) {
        date = {
            "unix": date.getTime(),
            "utc" : date.toUTCString(),
        }
    }
    else {
        date = {
            "error": "Invalid Date"
        }
    }
    res.send(date);
});

module.exports = router;
