const express = require('express');
const headerServiceRoutes = require('./controllers/HeaderServiceController');
const morePlacesRoutes = require('./controllers/morePlacesController/MorePlacesController');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use('/api/headerService', headerServiceRoutes);
app.use('/api/headerService', morePlacesRoutes);

module.exports = app;
