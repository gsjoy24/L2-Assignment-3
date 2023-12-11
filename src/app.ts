import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

// test api
app.get('/', (req: Request, res: Response) => {
  res.send('server is running');
});

export default app;
