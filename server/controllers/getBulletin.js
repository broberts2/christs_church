const readline = require("readline");
const { google } = require("googleapis");
const credentials = require("../credentials");
const fs = require("fs");

module.exports = {
  getBulletin: (auth, eventsArray) => {
    const drive = google.drive({ version: "v3", auth });
    return new Promise((resolve, reject) => {
      drive.files.export(
        {
          fileId: eventsArray[0].id,
          mimeType: "text/plain"
        },
        (err, res) => {
          if (err) reject("The API returned an error: " + err);
          const titles = res.data.match(
            /(?![<title>])(.*?)(?=-<\/title>|(?=<\/title>))/g
          );
          const dates = res.data.match(
            /(?![<date>])(.*?)(?=-<\/date>|(?=<\/date>))/g
          );
          const descriptions = res.data.match(
            /(?![<description>])(.*?)(?=-<\/description>|(?=<\/description>))/g
          );
          const imgs = res.data.match(
            /(?![<img>])(.*?)(?=-<\/img>|(?=<\/img>))/g
          );
          let obj = {};
          titles.map(
            (el, i) =>
              (obj[`event${i}`] = {
                title: el,
                date: dates[i],
                description: descriptions[i],
                img: imgs[i]
              })
          );
          resolve(obj);
        }
      );
    });
  }
};
