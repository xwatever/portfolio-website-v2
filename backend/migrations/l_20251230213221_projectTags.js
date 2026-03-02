/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("project_tags", function (table) {
    table.increments("id").primary();
    table.integer("project_id").unsigned().notNullable();
    table.integer("tag_id").unsigned().notNullable();

    table.foreign("project_id").references("id").inTable("projects");
    table.foreign("tag_id").references("id").inTable("tags");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.alterTable("project_tags", (table) => {
    table.dropForeign(["project_id"], "project_tags_project_id_foreign");
    table.dropForeign(["tag_id"], "project_tags_tag_id_foreign");
  });
  await knex.schema.dropTableIfExists("project_tags");
};
