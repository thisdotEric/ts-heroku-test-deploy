import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('songs').del();

  // Inserts seed entries
  await knex('songs').insert([
    { id: 0, name: 'Love so right', artist: 'BeeGees', year: '1980' },
    { name: "Don't throw it all away", artist: 'BeeGees', year: '1969' },
    { name: 'How deep is your love', artist: 'BeeGees', year: '1990' },
  ]);
}
