/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("projects", function (table) {
    table.increments("id").primary();
    table.string("project_type");
    table.string("project_name");
    table.boolean("featured");
    table.date("start");
    table.date("end");
    table.string("partnerships");
    table.string("role_in_project");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
