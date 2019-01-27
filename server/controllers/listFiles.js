const readline = require("readline");
const { google } = require("googleapis");
const Moment = require("moment");
const credentials = require("../credentials");
const fs = require("fs");
const SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"];
const TOKEN_PATH = "../token.json";

module.exports = {
  listFiles: auth => {
    return new Promise((resolve, reject) => {
      const drive = google.drive({ version: "v3", auth });
      drive.files.list(
        {
          pageSize: 10,
          fields:
            "nextPageToken, files(id, name, kind, version, createdTime, parents, mimeType, webContentLink)"
        },
        (err, res) => {
          if (err) reject("The API returned an error: " + err);
          let folders = res.data.files.filter(el => {
            if (el.mimeType === "application/vnd.google-apps.folder") {
              el["children"] = [];
              return el;
            }
          });
          res.data.files.map(el => {
            if (el.mimeType === "audio/mp3") {
              folders.map(el2 => {
                if (el.parents[0] === el2.id) {
                  el["parentName"] = el2.name;
                  el.createdTime = Moment(el.createdTime).format(
                    "MMMM Do, YYYY"
                  );
                  el2.children.push(el);
                }
              });
            }
          });
          resolve(folders);
        }
      );
    });
  }
};
