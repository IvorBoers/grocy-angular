const PROXY_CONFIG = {
  "/jumbo/*": {
    "target": "https://mobileapi.jumbo.com/v17/",
    "secure": false,
    "pathRewrite": {
      "^/jumbo": ""
    },
    "changeOrigin": true,
    "logLevel": "debug",
    "bypass": function (req, res, proxyOptions) {
      req.headers["X-jumbo-store"] = "national";
      req.headers["User-agent"] = "Jumbo/8.6.2(some app)";
      req.headers["content-type"] = "application/json";
    }
  }
}

module.exports = PROXY_CONFIG;