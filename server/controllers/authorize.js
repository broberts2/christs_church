const readline = require("readline");
const { google } = require("googleapis");
const credentials = require("../credentials");
const getAccessToken = require("./getAccessToken").getAccessToken;
const fs = require("fs");
const TOKEN_PATH = "../token.json";

module.exports = {
  authorize: (callback, query) => {
    console.log("test");
    return new Promise((resolve, reject) => {
      const { client_secret, client_id, redirect_uris } = credentials.installed;
      const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
      );
      const token = fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getAccessToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        query
          ? resolve(callback(oAuth2Client, query))
          : resolve(callback(oAuth2Client));
      });
    });
  }
};
