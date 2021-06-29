exports.up = function (knex) {
  return knex.schema.createTable("destination_products", function (table) {
    table.increments();

    table.string("title").notNullable();
    table.string("descriptionProducts").notNullable();

    table.string("travelers_id").notNullable();

    table.foreign("travelers_id").references("id").inTable("travelers");
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("destination_products");
};
