const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const travelers_id = req.headers.authorization;

    const incidents = await connection("destination_products")
      .where("travelers_id", travelers_id)
      .select("*");

    return res.json(incidents);
  },

  async selectUser(req, res) {
    const user_id = req.headers.authorization;

    const user = await connection("users")
      .where("id", user_id)
      .select("*")
      .first();

    return res.json(user);
  },

  async selectTraveler(req, res) {
    const traveler_id = req.headers.authorization;

    const traveler = await connection("travelers")
      .where("id", traveler_id)
      .select("*")
      .first();

    return res.json(traveler);
  },
};
