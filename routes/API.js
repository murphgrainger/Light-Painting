require('dotenv').config();
var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
var Q = require('../db/queries');

router.get('/swingAPI', function(req, res, next) {
  fetch(swingURL())
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        res.json(json);
    }).catch(err => {
      res.send(err);
    });
});

function swingURL() {
    const swingAPI = 'https://api.swingbyswing.com/v2/courses/search_by_location?';
    let swingCoordinates = `lat=39&lng=-104.9`;
    let swingRadius = `&radius=100`;
    let holeCount = '&active_only=yes&hole_count=' + 18;
    let swingToken = process.env.SWING_TOKEN;
    return swingAPI + swingCoordinates + swingRadius + holeCount + swingToken;
}

module.exports = router;
