import Knex from "knex";

export const db = Knex({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
});
