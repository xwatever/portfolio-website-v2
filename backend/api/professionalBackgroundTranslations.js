const knex = require("../db");

exports.readSelectedEducationLocale = function (req, res) {
  const { locale } = req.params;

  knex("professional_background_translations")
    .join(
      "professional_backgrounds",
      "professional_background_translations.background_id",
      "=",
      "professional_backgrounds.id",
    )
    .select(
      "professional_backgrounds.id",
      "professional_backgrounds.background_type",
      knex.raw(
        "DATE_FORMAT(professional_backgrounds.start, '%Y-%m-%d') as start",
      ),
      knex.raw("DATE_FORMAT(professional_backgrounds.end, '%Y-%m-%d') as end"),
      "professional_background_translations.institute_or_organization",
      "professional_background_translations.occupation",
      "professional_background_translations.location",
      "professional_background_translations.details",
    )
    .where({ locale: locale, background_type: "education" })
    .then((professional_background_translations) => {
      return res.json(professional_background_translations);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        message: err,
      });
    });
};

exports.readSelectedWorkLocale = function (req, res) {
  const { locale } = req.params;

  knex("professional_background_translations")
    .join(
      "professional_backgrounds",
      "professional_background_translations.background_id",
      "=",
      "professional_backgrounds.id",
    )
    .select(
      "professional_backgrounds.id",
      "professional_backgrounds.background_type",
      knex.raw(
        "DATE_FORMAT(professional_backgrounds.start, '%Y-%m-%d') as start",
      ),
      knex.raw("DATE_FORMAT(professional_backgrounds.end, '%Y-%m-%d') as end"),
      "professional_background_translations.institute_or_organization",
      "professional_background_translations.occupation",
      "professional_background_translations.location",
      "professional_background_translations.details",
    )
    .where({ locale: locale, background_type: "work" })
    .then((professional_background_translations) => {
      return res.json(professional_background_translations);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        message: err,
      });
    });
};
