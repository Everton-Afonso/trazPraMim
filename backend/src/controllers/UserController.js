const crypto = require("crypto");

const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const users = await connection("users").select("*");

    return res.json(users);
  },
  
  async create(req, res) {
    const { name, age, whatsapp, email, cpf, rg, city, uf, address } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("users").insert({
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
    });

    return res.json({ id });
  },
};
