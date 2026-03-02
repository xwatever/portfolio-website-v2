/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("professional_backgrounds").del();
  await knex("professional_backgrounds").insert([
    /* --------------------------------- */
    /*            Education              */
    /* --------------------------------- */

    {
      background_type: "education",
      start: "2014-07-01",
      end: "2017-06-01",
    },
    {
      background_type: "education",
      start: "2017-09-01",
      end: "2024-06-01",
    },

    /* --------------------------------- */
    /*               Work                */
    /* --------------------------------- */

    {
      background_type: "work",
      start: "2019-09-01",
      end: "2021-07-01",
    },
    {
      background_type: "work",
      start: "2022-09-01",
      end: "2025-07-01",
    },
  ]);
};
