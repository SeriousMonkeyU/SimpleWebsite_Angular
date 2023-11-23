const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const validRoutes = require('./routes/validation');
const errorController = require('./controllers/errors');
const app = express();
const port = process.env.PORT || 2121;

app.use(cors()); // Apply CORS middleware first
app.use(bodyParser.json()); // Middleware to parse JSON requests

// Set CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/menu', validRoutes);

app.use(errorController.get404);

app.listen(port, () => console.log(`Listening on port ${port}`));
