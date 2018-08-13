const config = {
  LOG_LEVEL: process.env.LOG_LEVEL || "debug",
  SWAGGER_ACTIVATED: process.env.SWAGGER_ACTIVATED || true,
};
module.exports = { config: config };
