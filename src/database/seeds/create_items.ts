import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Troca de Pneus', image: 'pneu.svg' },
    { title: 'Mecânico', image: 'mecanico.svg' },
    { title: 'Lavagem de Carro', image: 'lavagemdecarro.svg' },
    { title: 'Checklist', image: 'checklist.svg' },
    { title: 'Bateria', image: 'bateria.svg' },
    { title: 'Aliamento de roda', image: 'aliamentoderoda.svg' },
  ]);
}