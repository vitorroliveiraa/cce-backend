import { Knex } from 'knex';
import { ETableNames } from '../../types/enums.ts';

export async function seed(knex: Knex): Promise<void> {
  await knex(ETableNames.users).del();

  await knex(ETableNames.users).insert({
    full_name: 'Vitor Oliveira',
    ward_or_branch: 'Ala Cataratas',
    called: 'Secretario da Ala',
    church_record_number: '12345678',
    email: 'vitorroliveiraa@outlook.com.br',
    password: 'admin123',
  });
}
