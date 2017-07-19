const Model = require('objection').Model;
const Golfer = require('./golfer');

class Post extends Model {
  static get tableName() {
    return 'post';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user',
        join: {
          from: 'post.user_id',
          to: 'user.id'
        }
      },
      golfers: {
        relation: Model.HasManyRelation,
        modelClass: Golfer,
        join:{
          from: 'post.id',
          to: 'golfer.post_id'
        }
      }
    };
  }
}

module.exports = Post;
