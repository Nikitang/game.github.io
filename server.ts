import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './webpack.config';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cors from 'cors';
import { expressPort } from './webpack.config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const compiler = webpack(config({ mode: 'production' }));

app.use(cors());
app.use(webpackDevMiddleware(compiler));
// app.use(
//     webpackDevMiddleware(compiler, {
//         publicPath: config({ mode: 'production' }).output?.publicPath,
//     }),
// );
app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/api/words', (req, res) => {
    try {
        const words = fs.readFileSync(path.resolve(__dirname, './src/data/data.json'), 'utf-8');
        const data = JSON.parse(words);
        res.status(200).send(data);
    } catch (error) {
        console.error('Error reading data:', error);
        res.status(500).send({ error: 'Error reading data' });
    }
});

app.get('*', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(expressPort, () => {
    console.log('Серевер запущен.');
});
