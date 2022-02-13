import Sequelize from "sequelize";
const dotenv = require('dotenv');
dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: "postgres",
  port: 5432,
  pool: {
    max: 6,
    min: 0,
    require: 30000,
    idle: 10000,
  },
  logging: false,
});
