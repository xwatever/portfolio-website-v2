const knex = require("../db");

exports.readSelectedAboutLocale = function (req, res) {
  const { feed_ids, locale } = req.body;
  var ids = [];
  feed_ids.forEach((element) => {
    ids.push(element.id);
  });

  knex("about_translations")
    .select({
      about_feed_id: "about_feed_id",
      details: "details",
      order: "order",
    })
    .whereIn("about_translations.about_feed_id", ids)
    .where({ locale: locale })
    .orderBy("about_feed_id")
    .orderBy("order")
    .then((about_translations) => {
      return res.json(about_translations);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        message: err,
      });
    });
};
