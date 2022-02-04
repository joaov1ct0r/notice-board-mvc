const express = require('express');

const app = express();

const PORT = 3001;

const path = require('path');

const bodyParser = require('body-parser');

const apiRoutes = require('./routes/routes.js');

app.use('/api', bodyParser.json(), apiRoutes);

app.use('/', express.static(path.join(__dirname, 'view')));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
