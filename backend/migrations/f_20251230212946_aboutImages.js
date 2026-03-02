/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("about_images", function (table) {
    table.increments("id").primary();
    table.integer("about_feed_id").unsigned().notNullable();
    table.enu("image_theme", ["dark", "light"]);
    table.text("image_url");

    table.foreign("about_feed_id").references("id").inTable("about_feeds");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.alterTable("about_images", (table) => {
    table.dropForeign(["about_feed_id"], "about_images_about_feed_id_foreign");
  });
  await knex.schema.dropTableIfExists("about_images");
};
