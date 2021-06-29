const crypto = require("crypto");

const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const travelers = await connection("travelers").select("*");

    return res.json(travelers);
  },
  
  async create(req, res) {
    const { name, age, whatsapp, email, cpf, rg, city, uf, address, description } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("travelers").insert({
      id,
      name,
      age,
      whatsapp,
      email,
      cpf,
      rg,
      city,
      uf,
      address,
      description
    });

    return res.json({ id });
  },
};
