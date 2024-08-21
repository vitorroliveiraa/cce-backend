import express, { json, urlencoded } from 'express';
import cors from 'cors';

import routes from './shared/routes/index.ts';
import { errorMiddleware } from './shared/middlewares/error.ts';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(routes);

app.use(errorMiddleware);

export default app;
