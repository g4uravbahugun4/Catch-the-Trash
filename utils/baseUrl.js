const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://catch-the-trash.herokuapp.com";

module.exports = baseUrl;