const express = require('express');
const { fetchPlayerStats } = require('./src/actions')

const app = express();
const port = 5000;

app.get('/api/nba/playerStats', fetchPlayerStats);

app.listen(port, () => `Server running on port ${port}`);
