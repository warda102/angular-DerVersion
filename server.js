const express = require('express');
const cors = require('cors');

const app = express();

// Configurer les options CORS
const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type, Authorization',
};

// Utilisez le middleware CORS avec les options configurées
app.use(cors(corsOptions));

// ... autres configurations et routes

const port = 4200;
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
