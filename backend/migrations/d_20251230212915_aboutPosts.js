/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("about_posts", function (table) {
    table.increments("id").primary();
    table.date("date_published");
    table.string("post_explanation");
    table.boolean("featured");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("about_posts");
};
