import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(express.static(__dirname, { extensions: ['html'] }));

app.get('*', (req, res, next) => {
  if (req.path.includes('.')) {
    return next();
  }
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`INSIGHT server running on http://${HOST}:${PORT}`);
});
