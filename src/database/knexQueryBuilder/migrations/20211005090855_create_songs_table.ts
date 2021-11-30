import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('songs', table => {
    table.increments('id').notNullable().primary().unique().defaultTo(0);
    table.string('name');
    table.string('artist');
    table.string('year');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('songs');
}
