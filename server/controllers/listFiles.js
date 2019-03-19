const readline = require("readline");
const { google } = require("googleapis");
const Moment = require("moment");
const credentials = require("../credentials");
const fs = require("fs");

module.exports = {
  listFiles: auth => {
    return new Promise((resolve, reject) => {
      const drive = google.drive({ version: "v3", auth });
      drive.files.list(
        {
          pageSize: 100,
          fields:
            "nextPageToken, files(id, name, kind, version, createdTime, parents, mimeType, webViewLink, webContentLink, description)"
        },
        (err, res) => {
          if (err) reject("The API returned an error: " + err);
          let objectTree = {};
          let folders = [],
            data = [];
          res.data.files.map(el => {
            if (el.mimeType === "application/vnd.google-apps.folder") {
              el["children"] = [];
              folders.push(el);
            } else {
              el.createdTime = new Moment(el.createdTime).format(
                "MMMM Do, YYYY"
              );
              data.push(el);
            }
          });
          data.map(d => {
            folders.map(f => {
              if (d.parents[0] === f.id) {
                f.children.push(d);
              }
            });
          });
          folders.map(f => {
            if (f.parents[0] !== "0ADOq3tnHVh9yUk9PVA") {
              folders.map(f2 => {
                if (f.parents[0] === f2.id) {
                  f2.children.push(f);
                }
              });
            }
          });
          folders.map(f => {
            if (f.parents[0] === "0ADOq3tnHVh9yUk9PVA") {
              objectTree[f.name] = f;
            }
          });
          resolve(objectTree);
        }
      );
    });
  }
};
