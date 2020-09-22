// Update with your config settings.

// var knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : 'postgres',
//     password : '0000',
//     database : 'knex_test'
//   }
// });

module.exports = {
  development: {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '0000',
    database : 'knex_test'
  },
    migrations: {
            tableName: "knex_migrations",
           directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
  onUpdateTrigger : table =>  
  `CREATE TRIGGER ${table}_updated_at
  BEFORE UPDATE ON ${table}
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();
  ` 
}
// module.exports = {
//   development: {
//     client: 'pq',
//     connection: {
//       database: "knex_test",
//       user: "postgres",
//       pasword: "0000"
//     },
//     migrations: {
//       tableName: "knex_migrations",
//       directory: `${__dirname}/src/database/migrations`
//     }
//   }
// };
