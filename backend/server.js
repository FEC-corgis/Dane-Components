const express = require('express');
const photoRoutes = require('./controllers/HeaderServiceController');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use('/api/headerService', photoRoutes);

module.exports = app;
