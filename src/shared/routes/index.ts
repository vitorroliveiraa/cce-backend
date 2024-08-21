import { Router } from 'express';
import { ApiError, BadRequestError } from '../helpers/api-errors.ts';
import db from '../../database/db.ts';

const routes = Router();

routes.get('/', async (req, res) => {
  // try {
  //   await db.raw('SELECT 1+1 as result');
  //   console.log('💡 Conexão com o banco de dados bem-sucedida!');
  // } catch (error) {
  //   console.error('Erro ao conectar ao banco de dados:', error);
  // } finally {
  //   // Encerre a conexão com o banco de dados após o teste
  //   await db.destroy();
  //   console.log('❌ Conexão com o banco de dados fechada corretamente.');
  // }
});

export default routes;
