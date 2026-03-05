/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("about_posts").del();
  await knex("about_posts").insert([
    {
      date_published: "2026-03-03",
      post_explanation: "About to land a job",
      featured: 1,
    },
  ]);
};
