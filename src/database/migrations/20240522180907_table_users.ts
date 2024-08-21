import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames.ts';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(ETableNames.users, (table) => {
      table.increments('id').primary();
      table.string('full_name', 100).notNullable();
      table.string('ward_or_branch', 50).notNullable();
      table.string('called', 50).notNullable();
      table.string('church_record_number', 20).notNullable();
      table.string('email', 255).notNullable();
      table.string('password', 255).notNullable();
    })
    .then(() => {
      console.log(`# Created table: ${ETableNames.users}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(ETableNames.users).then(() => {
    console.log(`# Dropped table: ${ETableNames.users}`);
  });
}
