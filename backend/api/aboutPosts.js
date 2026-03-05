const knex = require("../db");

exports.readFeaturedPost = function (req, res) {
  knex("about_posts")
    .select({
      id: "id",
    })
    .where("featured", "=", 1)
    .first()
    .then((about_posts) => {
      return res.json(about_posts);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        message: err,
      });
    });
};
