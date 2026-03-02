/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("about_feeds", function (table) {
    table.increments("id").primary();
    table.integer("about_post_id").unsigned().notNullable();
    table.string("title_name_for_context");
    table.integer("order");

    table.foreign("about_post_id").references("id").inTable("about_posts");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.alterTable("about_feeds", (table) => {
    table.dropForeign(["about_post_id"], "about_feeds_about_post_id_foreign");
  });
  return knex.schema.dropTableIfExists("about_feeds");
};
