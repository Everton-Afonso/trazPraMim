const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection("destination_products").count();

    const incidents = await connection("destination_products")
      .join(
        "travelers",
        "travelers.id",
        "=",
        "destination_products.travelers_id"
      )
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "destination_products.*",
        "travelers.name",
        "travelers.age",
        "travelers.whatsapp",
        "travelers.email",
        "travelers.cpf",
        "travelers.rg",
        "travelers.city",
        "travelers.uf",
        "travelers.address",
        "travelers.description",
      ]);

    res.header("X-Total-Count", count["count(*)"]);

    return res.json(incidents);
  },

  async create(req, res) {
    const { title, descriptionProducts } = req.body;
    const travelers_id = req.headers.authorization;

    const [id] = await connection("destination_products").insert({
      title,
      descriptionProducts,
      travelers_id,
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;
    const travelers_id = req.headers.authorization;

    const incidents = await connection("destination_products")
      .where("id", id)
      .select("travelers_id")
      .first();

    if (incidents.travelers_id !== travelers_id) {
      return res.status(401).json({ error: "Operation not permitted." });
    }

    await connection("destination_products").where("id", id).delete();

    return res.status(204).send();
  },
};
