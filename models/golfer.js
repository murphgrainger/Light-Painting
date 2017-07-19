const Model = require('objection').Model;

class Golfer extends Model {
  static get tableName() {
    return 'golfer';
  }

  static get relationMappings() {
    return {
      post: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/post',
        join: {
          from: 'golfer.post_id',
          to: 'post.id'
        }
      }
    };
  }
}

module.exports = Golfer;
