const knex = require('./knex');
const objection = require('objection');
const User = require('../models/user');
const Post = require('../models/post');
const Golfer = require('../models/golfer');

module.exports = {
    getPosts: function() {
      return Post
      .query()
      .skipUndefined();
  },

  getUsers: function() {
      return User
      .query()
      .skipUndefined();
  },
  
  addPost: function(post) {
    return User
    .query()
    .findById(post.currentUserId)
    .then(user => {
      return user
      .$relatedQuery('posts')
      .insert({
        date: post.date,
        handicap_min: post.handicapRange[0],
        handicap_max: post.handicapRange[1],
        age_min: post.ageRange[0],
        age_max: post.ageRange[1],
        gender: post.gender,
        group_count: post.sizeGroup,
        address: post.address
      });
    });
  }
};
