const config = {
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  SWAGGER_ACTIVATED: process.env.SWAGGER_ACTIVATED || false,
};
module.exports = { config: config }
