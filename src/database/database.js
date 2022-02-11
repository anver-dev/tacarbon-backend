import Sequelize from "sequelize";

export const sequelize = new Sequelize("tacarbondev", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 6,
    min: 0,
    require: 30000,
    idle: 10000,
  },
  logging: false,
});
