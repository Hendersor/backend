// Nos traemos a express
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, nueva ruta');
});

app.get('/products', (req, res) => {
  res.json({ product: 'ball' });
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
