const express = require('express');
const cors = require('cors');
const app = express();
const coletaRouter = require('./routes/coleta');

app.use(cors());
app.use(express.json());
app.use('/coletar', coletaRouter);

app.listen(3000, () => console.log("API rodando na porta 3000"));
