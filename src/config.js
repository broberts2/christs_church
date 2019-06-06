module.exports = {
  fadeDelay: 500,
  fadeDuration: 1000,
  autoScrollToTop: true,
  protocol: process.env.NODE_ENV === "production" ? "https://" : "http://",
  api:
    process.env.NODE_ENV === "production"
      ? "christschurchmissoula.com"
      : "localhost",
  port: process.env.NODE_ENV === "production" ? "" : ":5000"
  // protocol: "https://",
  // api: "christschurchmissoula.herokuapp.com",
  // port: ""
};
