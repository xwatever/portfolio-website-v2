/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("project_images", function (table) {
    table.increments("id").primary();
    table.integer("project_id").unsigned().notNullable();
    table.text("image_url");

    table.foreign("project_id").references("id").inTable("projects");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.alterTable("project_images", (table) => {
    table.dropForeign(["project_id"], "project_images_project_id_foreign");
  });
  await knex.schema.dropTableIfExists("project_images");
};
