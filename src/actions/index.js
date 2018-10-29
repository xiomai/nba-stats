const NBA = require('nba');

async function fetchPlayerStats(req, res) {
  try {
    const response = await NBA.stats.playerProfile({ PlayerID: 2544 });

    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  fetchPlayerStats: (req, res) => fetchPlayerStats(req, res),
};
