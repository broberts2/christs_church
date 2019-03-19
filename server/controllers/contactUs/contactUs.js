const html = require("./html").html;
const config = require("../../config");

const subHTML = (html, data) => {
  html = data.information
    ? html.replace(
        `&inf&`,
        `<p style="display: inline-block; margin-right: 15px;"><b>X Information</b></p>`
      )
    : html.replace(
        `&inf&`,
        `<p style="display: inline-block; margin-right: 15px;">Information</p>`
      );
  html = data.prayers
    ? html.replace(
        `&pra&`,
        `<p style="display: inline-block;"><b>X</b> Prayers</p>`
      )
    : html.replace(`&pra&`, `<p style="display: inline-block;">Prayers</p>`);
  html = data.pbs
    ? html.replace(
        `&apb&`,
        `<p style="display: inline-block; margin-right: 15px;"><b>X</b> Personal</p>`
      )
    : html.replace(
        `&apb&`,
        `<p style="display: inline-block; margin-right: 15px;">Personal</p>`
      );
  html = data.other
    ? html.replace(
        `&oth&`,
        `<p style="display: inline-block;"><b>X</b> Other</p>`
      )
    : html.replace(`&oth&`, `<p style="display: inline-block;">Other</p>`);
  html = data.comment
    ? html.replace(`&com&`, `<p>${data.comment}</p>`)
    : html.replace(`&com&`, ``);
  html = data.name
    ? html.replace(`&nam&`, `<p>${data.name}</p>`)
    : html.replace(`&nam&`, ``);
  html = data.phone
    ? html.replace(`&pho&`, `<p>${data.phone}</p>`)
    : html.replace(`&pho&`, ``);
  html = data.email
    ? html.replace(`&ema&`, `<p>${data.email}</p>`)
    : html.replace(`&ema&`, ``);
  html = data.preferred.call
    ? html.replace(
        `&cal&`,
        `<p style="display: inline-block; margin-right: 15px;"><b>X</b> Call</p>`
      )
    : html.replace(
        `&cal&`,
        `<p style="display: inline-block; margin-right: 15px;">Call</p>`
      );
  html = data.preferred.text
    ? html.replace(
        `&tex&`,
        `<p style="display: inline-block; margin-right: 15px;"><b>X</b> Text</p>`
      )
    : html.replace(
        `&tex&`,
        `<p style="display: inline-block; margin-right: 15px;">Text</p>`
      );
  html = data.preferred.email
    ? html.replace(
        `&ema2&`,
        `<p style="display: inline-block;"><b>X</b> Email</p>`
      )
    : html.replace(`&ema2&`, `<p style="display: inline-block;">Email</p>`);
  return html;
};

module.exports = {
  contactUs: data => {
    const nodemailer = require("nodemailer");
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: config.contactFromEmail,
        pass: config.contactFromPassword
      }
    });
    // mslabulletin@bresnan.net
    let mailOptions = {
      from: config.contactFromEmail,
      to: config.contactFromEmail,
      subject: "Contact Request",
      html: subHTML(html, data)
    };
    return new Promise((resolve, reject) =>
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        }
        resolve("success");
      })
    );
  }
};
