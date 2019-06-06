module.exports = {
  fadeDelay: 500,
  fadeDuration: 1000,
  autoScrollToTop: true,
  protocol: process.env.NODE_ENV === "production" ? "https://" : "https://",
  api:
    process.env.NODE_ENV === "production"
      ? "christschurchmissoula.com"
      : "christschurchmissoula.com",
  port: process.env.NODE_ENV === "production" ? "" : ""
  // protocol: "https://",
  // api: "christschurchmissoula.herokuapp.com",
  // port: ""
};
