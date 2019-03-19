const readline = require("readline");
const { google } = require("googleapis");
const credentials = require("../credentials");
const config = require("../config");
const getAccessToken = require("./getAccessToken").getAccessToken;
const fs = require("fs");

module.exports = {
  authorize: (callback, query) => {
    return new Promise((resolve, reject) => {
      const { client_secret, client_id, redirect_uris } = credentials.installed;
      const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
      );
      oAuth2Client.setCredentials(config.token);
      query
        ? resolve(callback(oAuth2Client, query))
        : resolve(callback(oAuth2Client));
    });
  }
};
