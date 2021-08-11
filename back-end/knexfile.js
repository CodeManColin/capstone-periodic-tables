/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://odfujxew:W2kS237dwDGOcIKwPK5kLzi7yWC1JIOu@kashin.db.elephantsql.com/odfujxew",
  DATABASE_URL_DEVELOPMENT = "postgres://hypwsxou:TS_jP0Ez3FUEjzPENPU-UOqfm0DgD_WA@kashin.db.elephantsql.com/hypwsxou",
  DATABASE_URL_TEST = "postgres://mjvfduig:OUzFL5th59NCHgjiNh6p3VILWQ2eeZTI@kashin.db.elephantsql.com/mjvfduig",
  DATABASE_URL_PREVIEW = "postgres://fhnkadff:2tbq-IiZLkb_DV0cUsX8iwWipmNR49HA@kashin.db.elephantsql.com/fhnkadff",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
