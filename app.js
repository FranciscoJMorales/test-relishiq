import express from 'express';
import { AppRouter } from './routes/routes.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.status(200).send());

app.use('/externalapi', AppRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
