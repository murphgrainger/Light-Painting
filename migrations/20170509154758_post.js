exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', function(table) {
    table.increments();
    table.text('date');
    table.text('address');
    table.integer('group_count');
    table.integer('handicap_min');
    table.integer('handicap_max');
    table.integer('age_min');
    table.integer('age_max');
    table.text('gender');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post');
};
