require('dotenv').config();
var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
var Q = require('../db/queries');


router.get('/posts', function(req, res, next) {
  Q.getPosts()
  .then(response => {
    console.log(response);
    res.json(response);
  }).catch(err => {
    res.send(err);
  });
});

router.get('/users', function(req, res, next) {
  Q.getUsers()
  .then(response => {
    console.log(response);
    res.json(response);
  }).catch(err => {
    res.send(err);
  });
});

router.post('/posts', function(req, res, next) {
  Q.addPost(req.body)
  .then(response => {
    res.json('Successful Post');
  }).catch(err => {
    res.send(err);
  });
});

module.exports = router;
