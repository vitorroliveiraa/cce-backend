import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames.ts';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(ETableNames.registrations, (table) => {
      table.increments('id').primary();
      table.string('full_name', 100);
      table.date('yellow_fever_vaccine');
      table.string('type_documentation', 50);
      table.string('document_number', 50).unique();
      table.date('date_birth');
      table.string('special_needs', 100);
      table.string('type_ordinance_temple', 50);
      table.string('scheduled_time_temple', 50);
      table.boolean('payment_done');
      table.string('payment_voucher_url', 255);
      table.boolean('qualified');
      table.timestamps(true, true);
      table.integer('created_by').unsigned().notNullable().references('id').inTable('users');
      table.integer('updated_by').unsigned().notNullable().references('id').inTable('users');
    })
    .then(() => {
      console.log(`# Created table: ${ETableNames.registrations}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(ETableNames.registrations).then(() => {
    console.log(`# Dropped table: ${ETableNames.registrations}`);
  });
}
