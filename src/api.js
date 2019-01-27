import config from "./config";

const api = {
  fetchContent: async () => {
    const content = await fetch(
      `${config.protocol}${config.api}:${config.port}/files`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );
    return content.json();
  }
};

export default api;
