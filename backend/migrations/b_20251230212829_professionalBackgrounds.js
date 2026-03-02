/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("professional_backgrounds", function (table) {
    table.increments("id").primary();
    table.enu("background_type", ["work", "education"]);
    table.date("start");
    table.date("end");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("professional_backgrounds");
};
