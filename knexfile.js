require('dotenv').config({ path: '../.env' });

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: "127.0.0.1",
      database: "wishboard",
      user: "root",
      password: "Pass5599!",
    },
    migrations: {
      directory: './migrations', // Directory for database migration files
    },
    seeds: {
      directory: './seeds', // Directory for database seed files
    },
  },
};