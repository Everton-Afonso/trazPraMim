exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("age").notNullable();
    table.string("whatsapp").notNullable();
    table.string("email").notNullable();
    table.string("cpf").notNullable();
    table.string("rg").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
    table.string("address").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
