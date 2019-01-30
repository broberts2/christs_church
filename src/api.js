import config from "./config";

const api = {
  fetchContent: async () => {
    const setup = config.production
      ? ``
      : `${config.protocol}${config.api}:${config.port}`;
    const content = await fetch(`${setup}/files`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    return content.json();
  }
};

export default api;
