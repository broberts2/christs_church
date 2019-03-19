const readline = require("readline");
const { google } = require("googleapis");
const credentials = require("../credentials");
const fs = require("fs");

module.exports = {
  getAnnouncement: (auth, eventsArray) => {
    const drive = google.drive({ version: "v3", auth });
    return new Promise((resolve, reject) =>
      drive.files.export(
        {
          fileId: eventsArray[0].id,
          mimeType: "text/plain"
        },
        (err, res) => {
          if (err) reject("The API returned an error: " + err);
          const title = res.data.match(
            /(?![<title>])(.*?)(?=-<\/title>|(?=<\/title>))/g
          );
          const description = res.data.match(
            /(?![<description>])(.*?)(?=-<\/description>|(?=<\/description>))/g
          );
          const obj = {
            title,
            description
          };
          resolve(obj);
        }
      )
    );
  }
};
