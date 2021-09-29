require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "ec2-3-218-71-191.compute-1.amazonaws.com",
      user: "vbcvsfkqqudldy",
      password:
        "b827b5260545d30e1bf2522f11f7e2ae86410c31a0898de7c6ae22e598207c4e",
      database: "d53rhfchq6e6nd",
      port: "5432",
      ssl: process.env.DB_SSL,
      // host     : process.env.DB_HOST,
      // user     : process.env.DB_USER,
      // password : process.env.DB_PASS,
      // database : process.env.DB_NAME,
      // port     : process.env.DB_PORT,
      // ssl      : process.env.DB_SSL,
    },
    migrations: {
      directory: "./db/migrations",
      tableName: "migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL + "?ssl=true",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "migrations",
    },
  },
};
