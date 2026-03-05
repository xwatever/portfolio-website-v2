// const mysql = require("mysql");
// const express = require("express");

// var csrf = require("csurf");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

// const app = express();

// // identify port number
// const port = 8000;
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// var parseForm = bodyParser.urlencoded({ extended: false });
// app.use(cookieParser());
// var csrfProtect = csrf({ cookie: true });

// app.use(csrfProtect);

// app.get("/", (req, res) => {
//   res.json({ message: "ok" });
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:8080",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Cookie",
      "Content-Type",
      "Accept",
      "X-Access-Token",
      "X-XSRF-Token",
      "Authorization",
    ],
    credentials: true,
    methods: "GET,PATCH,POST,DELETE",
  }),
);

var professionalBackgroundTranslations = require("../api/professionalBackgroundTranslations");

var aboutPosts = require("../api/aboutPosts");
var aboutFeeds = require("../api/aboutFeeds");
var aboutImages = require("../api/aboutImages");
var aboutTranslations = require("../api/aboutTranslations");

// Test DB route
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*
===============================================
            Professional Background
===============================================
*/

app.get(
  "/api/professional-background-translations/work/:locale",
  professionalBackgroundTranslations.readSelectedWorkLocale,
);

app.get(
  "/api/professional-background-translations/education/:locale",
  professionalBackgroundTranslations.readSelectedEducationLocale,
);

/*
===============================================
                      About
===============================================
*/

app.get("/api/about/post/featured", aboutPosts.readFeaturedPost);

app.get("/api/about/feeds/:post_id", aboutFeeds.readFeeds);

app.post(
  "/api/about/images",
  express.json(),
  aboutImages.readImagesByTheirTheme,
);

app.post(
  "/api/about/translations",
  express.json(),
  aboutTranslations.readSelectedAboutLocale,
);
