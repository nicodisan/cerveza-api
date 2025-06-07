const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const db = require('./db');

app.use(express.json());

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('API de gestión de barriles funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
