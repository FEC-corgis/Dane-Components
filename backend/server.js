const express = require('express');
const headerServiceRoute = require('./controllers/HeaderServiceController');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use('/api/headerService', headerServiceRoute);

module.exports = app;
