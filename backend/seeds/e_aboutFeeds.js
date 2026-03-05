/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("about_feeds").del();
  await knex("about_feeds").insert([
    {
      about_post_id: 1,
      title_name_for_context: "introduction_first",
      order: 1,
    },
    {
      about_post_id: 1,
      title_name_for_context: "introduction_second",
      order: 2,
    },
    {
      about_post_id: 1,
      title_name_for_context: "introduction_graphic_design",
      order: 3,
    },
    {
      about_post_id: 1,
      title_name_for_context: "introduction_photography",
      order: 4,
    },
    {
      about_post_id: 1,
      title_name_for_context: "introduction_closing",
      order: 5,
    },
  ]);
};
