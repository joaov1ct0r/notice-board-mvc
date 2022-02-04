const express = require('express');

const app = express();

const PORT = 3001;

const path = require('path');

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

app.use('/', express.static(path.join(__dirname, 'view')));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
