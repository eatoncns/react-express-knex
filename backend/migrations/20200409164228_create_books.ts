import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('books', (table) => {
        table.increments();
        table.string('title').notNullable();
        table.string('author');
    });
}



export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('books');
}

