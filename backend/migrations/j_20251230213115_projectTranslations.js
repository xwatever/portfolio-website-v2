/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("project_translations", function (table) {
    table.increments("id").primary();
    table.integer("project_id").unsigned().notNullable();
    table.string("locale", 10);
    table.text("details");

    table.foreign("project_id").references("id").inTable("projects");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.alterTable("project_translations", (table) => {
    table.dropForeign(
      ["project_id"],
      "project_translations_project_id_foreign"
    );
  });
  await knex.schema.dropTableIfExists("project_translations");
};
