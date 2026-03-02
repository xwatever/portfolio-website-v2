/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("about_translations", function (table) {
    table.increments("id").primary();
    table.integer("about_feed_id").unsigned().notNullable();
    table.string("locale", 10);
    table.text("details");

    table.foreign("about_feed_id").references("id").inTable("about_feeds");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.alterTable("about_translations", (table) => {
    table.dropForeign(
      ["about_feed_id"],
      "about_translations_about_feed_id_foreign"
    );
  });
  return knex.schema.dropTableIfExists("about_translations");
};
