import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames.ts';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(ETableNames.registrations, (table) => {
    table.increments('id').primary();
    table.string('full_name', 100);
    table.date('yellow_fever_vaccine');
    table.string('type_documentation', 50);
    table.string('document_number', 50);
    table.date('date_birth');
    table.string('person_special_needs', 100);
    table.string('scheduled_temple_ordinance', 50);
    table.string('scheduled_time_temple', 50);
    table.boolean('payment_done');
    table.boolean('qualified');
  });
}

export async function down(knex: Knex): Promise<void> {}
