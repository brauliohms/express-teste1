import "dotenv/config";
import { Knex } from "knex";

const knexConfig: Knex.Config = {
  client: process.env.CLIENT,
  connection: {
    filename: process.env.FILENAME || "",
    host: process.env.DB_HOST || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "",
  },
  useNullAsDefault: true,
  pool: { min: 0, max: 7 },
};

export const knexConnector: Knex = require("knex")(knexConfig);
