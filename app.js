import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import AppRouter from './routes/routes.js';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

// Logs
app.use(morgan('dev'));

// CORS
app.use(cors());
app.options('*', cors());

// Live check
app.get('/', (_req, res) => res.status(200).send());

app.use('/externalapi', AppRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
