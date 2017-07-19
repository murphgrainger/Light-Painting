const bcrypt = require('bcryptjs');

var hash = bcrypt.hashSync('password', 8);

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 1;')
    .then(function() {
      const user = [{
        first_name: 'Kiki',
        last_name: 'Grainger',
        email: 'kiki@example.com',
        phone: '970-481-3188',
        password: hash,
        handicap: 13,
        age: 28,
        gender: 'Female',
        zip_code: 80210
      }, {
        first_name: 'Kyle',
        last_name: 'Davis',
        email: 'kyle@example.com',
        phone: '123-456-7890',
        password: hash,
        handicap: 20,
        age: 27,
        gender: 'Male',
        zip_code: 80220

      } , {
        first_name: 'John',
        last_name: 'Kimble',
        email: 'john@example.com',
        phone: '123-226-2020',
        password: hash,
        handicap: 8,
        age: 45,
        gender: 'Male',
        zip_code: 90210
      }];
      return knex('user').insert(user);
    });
};
