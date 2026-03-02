/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("blog_posts", function (table) {
    table.increments("id").primary();
    table.integer("type_id").unsigned().notNullable();
    table.string("title");
    table.string("slug");
    table.string("excerpt");
    table.text("content");
    table.enu("status", ["draft", "published", "archived"]);
    table.text("images_url");
    table.string("published_at");
    table.date("created_at");
    table.date("update_at");

    table.foreign("type_id").references("id").inTable("blog_post_types");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.alterTable("blog_posts", (table) => {
    table.dropForeign(["type_id"], "blog_posts_type_id_foreign");
  });
  await knex.schema.dropTableIfExists("blog_posts");
};
