exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('email').unique().notNullable();
    table.text('phone').unique();
    table.text('password').notNullable();
    table.integer('handicap').notNullable();
    table.integer('age').notNullable();
    table.text('gender');
    table.integer('zip_code');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
