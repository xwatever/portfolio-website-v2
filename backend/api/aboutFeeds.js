const knex = require("../db");

exports.readFeeds = function (req, res) {
  const { post_id } = req.params;

  knex("about_feeds")
    .select({
      id: "id",
    })
    .where({ about_post_id: post_id })
    .orderBy("order")
    .then((about_feeds) => {
      return res.json(about_feeds);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        message: err,
      });
    });
};
