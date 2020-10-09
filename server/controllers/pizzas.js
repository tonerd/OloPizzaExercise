const axios = require('axios');
const config = require('../../config.js');

module.exports = (app) => {
  app.get('/api/pizzas/orders', (req, res) => {
    axios.get(config.oloJsonUrl)
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      })
  });
}
