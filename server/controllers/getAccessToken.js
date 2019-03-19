const readline = require("readline");
const { google } = require("googleapis");
const credentials = require("../credentials");
const fs = require("fs");

const SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"];
const TOKEN_PATH = "./token.json";

module.exports = {
  getAccessToken: async (req, res) => {
    (oAuth2Client, callback) => {
      const authUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES
      });
      console.log("Authorize this app by visiting this url:", authUrl);
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question("Enter the code from that page here: ", code => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
          if (err) return console.error("Error retrieving access token", err);
          oAuth2Client.setCredentials(token);
          fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
            if (err) console.error(err);
            console.log("Token stored to", TOKEN_PATH);
          });
          callback(oAuth2Client);
        });
      });
    };
  }
};
