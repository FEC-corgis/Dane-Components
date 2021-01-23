const express = require('express');
const photoRoutes = require('./controllers/PhotosController');
const { join } = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(join(__dirname, '..', 'frontend', 'dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
    const cors = require('cors');
    app.use(cors({ origin: 'http://localhost:3000' }));
}

// ROUTES
app.use('/api/photos', photoRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
