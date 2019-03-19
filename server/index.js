const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config");
const routifyPromise = require("./controllers/util").routifyPromise;
const path = require("path");
const PORT = config.port;

const authorize = require("./controllers/authorize").authorize;
const listFiles = require("./controllers/listFiles").listFiles;
const getEvents = require("./controllers/getEvents").getEvents;
const getBulletin = require("./controllers/getBulletin").getBulletin;
const getAnnouncement = require("./controllers/getAnnouncement")
  .getAnnouncement;
const contactUs = require("./controllers/contactUs/contactUs").contactUs;

app.set("key", config.key);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/files", async (req, res) => {
  const resolved = await authorize(listFiles);
  res.json(resolved);
});

app.post("/get_events", async (req, res) => {
  const resolved = await authorize(getEvents, req.body);
  res.json(resolved);
});

app.post("/get_bulletin", async (req, res) => {
  const resolved = await authorize(getBulletin, req.body);
  res.json(resolved);
});

app.post("/get_announcement", async (req, res) => {
  const resolved = await authorize(getAnnouncement, req.body);
  res.json(resolved);
});

app.post("/contact_us", async (req, res) => {
  const resolved = await contactUs(req.body);
  res.json(resolved);
});

app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
