const connection = require("../database/connection");

module.exports = {
  async userLogin(req, res) {
    const { id } = req.body;

    const user = await connection("users")
      .where("id", id)
      .select("name", "email", "id")
      .first();

    if (!user) {
      return res.status(400).json({ error: "No User found with this id" });
    }

    return res.json(user);
  },

  async travelerLogin(req, res) {
    const { id } = req.body;

    const travelers = await connection("travelers")
      .where("id", id)
      .select("name", "email", "id")
      .first();

    if (!travelers) {
      return res.status(400).json({ error: "No User found with this id" });
    }

    return res.json(travelers);
  }
};
