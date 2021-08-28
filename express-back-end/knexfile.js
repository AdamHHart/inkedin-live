require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host     : "ec2-52-45-179-101.compute-1.amazonaws.com:5432",
      user     : "vxrdjlrraaxbts",
      password : "a6a15c67c1ab9e21d885ea60be04c1cecd8dce964e12cb3c2cafeeecd35f7949",
      database : "d7e2i61onkfefs",
      port     : "5432",
      ssl      : process.env.DB_SSL,
      // host     : process.env.DB_HOST,
      // user     : process.env.DB_USER,
      // password : process.env.DB_PASS,
      // database : process.env.DB_NAME,
      // port     : process.env.DB_PORT,
      // ssl      : process.env.DB_SSL,
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
  },

};


