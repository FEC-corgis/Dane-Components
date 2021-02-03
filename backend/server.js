const express = require('express');
const { headerServiceRoutes, morePlacesRoutes } = require('./controllers');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use('/api/headerService', headerServiceRoutes);
app.use('/api/headerService', morePlacesRoutes);

module.exports = app;
