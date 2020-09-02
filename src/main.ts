import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { router } from './routes';
const app = express();

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));

app.use('/api', router);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
server.on('error', console.error);
