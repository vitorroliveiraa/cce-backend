import { Router } from 'express';
import { ApiError, BadRequestError } from '../helpers/api-errors.ts';
import db from '../../database/db.ts';

const routes = Router();

routes.get('/', async (req, res) => {
  return res.send();
});

export default routes;
