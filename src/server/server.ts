import * as express from 'express';
import apiRouter from './routes';
import helmet from 'helmet';


const app = express();



app.use(express.static('public'));
app.use(apiRouter);
app.use(helmet())


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
