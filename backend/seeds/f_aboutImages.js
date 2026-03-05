/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("about_images").del();
  await knex("about_images").insert([
    {
      about_feed_id: 1,
      image_theme: "light",
      image_url:
        "/images/about_page/about_to_land_a_job/introduction_first_light.svg",
    },
    {
      about_feed_id: 1,
      image_theme: "dark",
      image_url:
        "/images/about_page/about_to_land_a_job/introduction_first_dark.svg",
    },

    {
      about_feed_id: 2,
      image_theme: "light",
      image_url: "/images/about_page/about_to_land_a_job/Sample.png",
    },
    {
      about_feed_id: 2,
      image_theme: "dark",
      image_url: "/images/about_page/about_to_land_a_job/Sample.png",
    },

    {
      about_feed_id: 3,
      image_theme: "light",
      image_url:
        "/images/about_page/about_to_land_a_job/introduction_graphic_design_light.svg",
    },
    {
      about_feed_id: 3,
      image_theme: "dark",
      image_url:
        "/images/about_page/about_to_land_a_job/introduction_graphic_design_dark.svg",
    },

    {
      about_feed_id: 4,
      image_theme: "light",
      image_url:
        "/images/about_page/about_to_land_a_job/introduction_photography_light.svg",
    },
    {
      about_feed_id: 4,
      image_theme: "dark",
      image_url:
        "/images/about_page/about_to_land_a_job/introduction_photography_dark.svg",
    },

    {
      about_feed_id: 5,
      image_theme: "light",
      image_url: "/images/about_page/about_to_land_a_job/Sample.png",
    },
    {
      about_feed_id: 5,
      image_theme: "dark",
      image_url: "/images/about_page/about_to_land_a_job/Sample.png",
    },
  ]);
};
