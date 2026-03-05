/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("about_translations").del();
  await knex("about_translations").insert([
    {
      about_feed_id: 1,
      locale: "en",
      details:
        "<p>I'm a full stack developer based in Pekanbaru, Indonesia. I have been learning to code since 2014, which has given me knowledge, foundation in programming.</p>",
      order: 1,
    },
    {
      about_feed_id: 1,
      locale: "en",
      details:
        "<p>Over the years, I have grown by learning and developing with many tech stacks, trying to keeping up with modern technologies.</p>",
      order: 2,
    },
    {
      about_feed_id: 1,
      locale: "id",
      details:
        "<p>Saya seorang developer full stack berlokasi di Kota Pekanbaru, Indonesia. Saya telah mempelajari untuk mengoding sejak tahun 2014, yang membuat saya memiliki pengetahuan, dasar dalam pemrograman.</p>",
      order: 1,
    },
    {
      about_feed_id: 1,
      locale: "id",
      details:
        "<p>Selama bertahun-tahun, saya berkembang dengan mempelajari dan mengembangkan aplikasi saya menggunakan berbagai tech stack, berusaha mengikuti perkembangan teknologi modern.</p>",
      order: 2,
    },

    {
      about_feed_id: 2,
      locale: "en",
      details:
        "<p>I'm always eager to build, develop an app that helped or used by many users, be proud of things i have built, and of course, exploring new tools that will improve development efficiency.</p>",
      order: 1,
    },
    {
      about_feed_id: 2,
      locale: "id",
      details:
        "<p>Saya selalu berkeinginan untuk membuat, mengembangkan sebuah aplikasi yang dapat membantu atau digunakan banyak pengguna, menjadi bangga dengan hal yang telah saya kembangkan, dan pastinya, menjelajahi teknologi baru untuk mengembangkan efisiensi pengembangan.</p>",
      order: 1,
    },

    {
      about_feed_id: 3,
      locale: "en",
      details:
        "<p>I also have an interest in graphic design, and/or illustration, and want to develop my skill for it. Being versatile would make me skilled in both design and development, capable of handling projects independently from concept to execution.</p>",
      order: 1,
    },
    {
      about_feed_id: 3,
      locale: "id",
      details:
        "<p>Saya juga memiliki minat pada desain grafis, dan/atau ilustrasi, dan berkeinginan untuk mengembangkan kemampuan saya untuk hal ini. Menjadi seorang serbabisa dapat membuat saya berpengalaman di pengembangan dan desain, mampu dalam mengerjakan proyek secara independen dari konsep sampai ke eksekusi.</p>",
      order: 1,
    },

    {
      about_feed_id: 4,
      locale: "en",
      details:
        "<p>I also want to learn and deepen my skills in photography, capturing moments when i'm (and would) travelling and explore, fuels my creativity and keeps me inspired, creating stuffs, to enjoy more being alive.</p>",
      order: 1,
    },
    {
      about_feed_id: 4,
      locale: "id",
      details:
        "<p>Saya juga menginginkan untuk mempelajari dan memperdalam kemampuan saya didalam fotografis, mengabadikan momen ketika saya (dan diupayakan) melakukan travel dan berpetualang, memicu kekreativitasan dan tetap menginspirasi saya, membuat berbagai hal, untuk lebih bersyukur masih diberikan kehidupan sampai saat ini.</p>",
      order: 1,
    },

    {
      about_feed_id: 5,
      locale: "en",
      details:
        "<p>Feel free to visit my contacts, just to say hi, or to learn more about me, my work, or probably wanted to critize this portfolio website (that would give me feedback to improve, or to learn from my mistake). I'd love to hear from you!</p>",
      order: 1,
    },
    {
      about_feed_id: 5,
      locale: "en",
      details: "<p>Thanks for visiting this website!</p>",
      order: 2,
    },
    {
      about_feed_id: 5,
      locale: "id",
      details:
        "<p>Jangan ragu untuk mengunjungi kontak saya, untuk menyapa, atau untuk mengetahui hal lebih mengenai saya, pekerjaan saya, atau berkemungkinan ingin mengkritis website portofolio ini (yang dapat memberikan feedback untuk pengembangan, atau untuk mempelajari kesalahan saya). Tidak sabar disini untuk mendengar balasanmu!</p>",
      order: 1,
    },
    {
      about_feed_id: 5,
      locale: "id",
      details: "<p>Terima kasih telah mengunjungi website ini!</p>",
      order: 2,
    },
  ]);
};
