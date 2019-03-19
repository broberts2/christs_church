const readline = require("readline");
const { google } = require("googleapis");
const credentials = require("../credentials");
const fs = require("fs");

module.exports = {
  getEvents: (auth, eventsArray) => {
    const drive = google.drive({ version: "v3", auth });
    const events = Promise.all(
      eventsArray.map(el => {
        return new Promise((resolve, reject) =>
          drive.files.export(
            {
              fileId: el.id,
              mimeType: "text/plain"
            },
            (err, res) => {
              if (err) reject("The API returned an error: " + err);
              let obj = {};
              const keys = res.data.split("\n").map(el => el.split(/:(.+)/)[1]);
              obj["title"] = keys[0].trim();
              obj["location"] = keys[1].trim();
              obj["description"] = keys[2].trim();
              obj["start"] = new Date(keys[3].trim());
              obj["end"] = new Date(keys[4].trim());
              obj["startTime"] = keys[5].trim();
              obj["endTime"] = keys[6].trim();
              resolve(obj);
            }
          )
        );
      })
    );
    return events;
  }
};
