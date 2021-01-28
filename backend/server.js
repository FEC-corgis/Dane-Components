const express = require('express');
const photoRoutes = require('./controllers/HeaderServiceController');
const { join } = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(join(__dirname, '..', 'frontend', 'dist')));

// ROUTES
app.use('/api/headerService', photoRoutes);

module.exports = app;
