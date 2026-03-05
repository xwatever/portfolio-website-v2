const knex = require("../db");

exports.readImagesByTheirTheme = function (req, res) {
  const { feed_ids, image_theme } = req.body;
  var ids = [];
  feed_ids.forEach((element) => {
    ids.push(element.id);
  });

  knex("about_images")
    .join("about_feeds", "about_images.about_feed_id", "=", "about_feeds.id")
    .select(
      "about_images.about_feed_id",
      "about_feeds.title_name_for_context",
      "about_images.image_url",
    )
    .whereIn("about_images.about_feed_id", ids)
    .where("about_images.image_theme", "=", image_theme)
    .orderBy("order")
    .then((about_images) => {
      return res.json(about_images);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        message: err,
      });
    });
};
