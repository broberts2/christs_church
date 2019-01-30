const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config");
const routifyPromise = require("./controllers/util").routifyPromise;

const authorize = require("./controllers/authorize").authorize;
const listFiles = require("./controllers/listFiles").listFiles;

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

app.listen(config.port);
