import * as express from 'express';
import apiRouter from './routes';
import * as path from 'path';
import helmet from 'helmet';


const app = express();


app.use(express.json());

app.use(express.static('public'));
app.use(apiRouter);
app.use(helmet());


app.get('*', (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
