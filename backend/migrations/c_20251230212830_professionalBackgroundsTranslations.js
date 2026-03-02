/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(
    "professional_background_translations",
    function (table) {
      table.increments("id").primary();
      table.integer("background_id").unsigned().notNullable();
      table.string("locale", 10);
      table.string("institute_or_organization");
      table.text("occupation");
      table.string("location");
      table.text("details");

      table
        .foreign("background_id")
        .references("id")
        .inTable("professional_backgrounds");
    }
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.alterTable(
    "professional_background_translations",
    (table) => {
      table.dropForeign(
        ["background_id"],
        "professional_background_translations_background_id_foreign"
      );
    }
  );
  await knex.schema.dropTableIfExists("professional_background_translations");
};
