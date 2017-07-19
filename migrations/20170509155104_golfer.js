exports.up = function(knex, Promise) {
  return knex.schema.createTable('golfer', function(table) {
    table.increments();
    table.text('first_name').notNullable();
    table.integer('handicap').notNullable();
    table.integer('age').notNullable();
    table.text('gender');
    table.text('status');
    table.integer('post_id').references('post.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('golfer');
};
