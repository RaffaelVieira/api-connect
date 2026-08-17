const express = require('express');
const app = express();

app.use(express.json());

const rotas = require('./routes/connectRoutes');
app.use('/api', rotas);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});