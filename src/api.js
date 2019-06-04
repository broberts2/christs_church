import config from "./config";

const api = {
  getAnnouncement: async array => {
    const content = await fetch(
      `${config.protocol}${config.api}${config.port}/api/get_announcement`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(array)
      }
    );
    return content.json();
  },
  fetchContent: async () => {
    const content = await fetch(
      `${config.protocol}${config.api}${config.port}/api/files`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );
    return content.json();
  },
  getEvents: async array => {
    const content = await fetch(
      `${config.protocol}${config.api}${config.port}/api/get_events`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(array)
      }
    );
    return content.json();
  },
  getBulletin: async array => {
    const content = await fetch(
      `${config.protocol}${config.api}${config.port}/api/get_bulletin`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(array)
      }
    );
    return content.json();
  },
  contactUs: async data => {
    const content = await fetch(
      `${config.protocol}${config.api}${config.port}/api/contact_us`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );
    return content.json();
  }
};

export default api;
