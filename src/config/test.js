const config = {
  ES_URL: process.env.ES_URL || "http://192.168.56.130:9200",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  SWAGGER_ACTIVATED: process.env.SWAGGER_ACTIVATED || false,
};
module.exports = { config: config }
