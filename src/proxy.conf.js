const PROXY_CONFIG = {
  "/jumbo-api/*": {
    "target": "https://mobileapi.jumbo.com/v17/",
    "secure": false,
    "pathRewrite": {
      "^/jumbo-api": ""
    },
    "changeOrigin": true,
    "logLevel": "info",
    "bypass": function (req, res, proxyOptions) {
      req.headers["X-jumbo-store"] = "national";
      req.headers["User-agent"] = "Jumbo/8.6.2(some app)";
      req.headers["content-type"] = "application/json";
    }
  },
  "/jumboimages": {
    "target": "https://static-images.jumbo.com",
    "secure": false,
    "pathRewrite": {
      "^/jumboimages": ""
    },
    "changeOrigin": true,
    "logLevel": "debug",
    "bypass": function (req, res, proxyOptions) {
      req.headers["accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9";
      req.headers["accept-encoding"] = "gzip, deflate, br";
      req.headers["accept-language"] = "en-US,en;q=0.9,nl;q=0.8";
      req.headers["sec-ch-au"] = "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"";
      req.headers["sec-ch-au-mobile"] = "?0";
      req.headers["sec-ch-au-platform"] = "Windows";
      req.headers["sec-fetch-dest"] = "image";
      req.headers["sec-fetch-mode"] = "no-cors";
      req.headers["sec-fetch-site"] = "cross-site";
      req.headers["user-agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36";
    }
  },
  "/ah-api": {
    "target": "https://api.ah.nl/",
    "secure": false,
    "pathRewrite": {
      "^/ah-api": ""
    },
    "changeOrigin": true,
    "logLevel": "debug",
    "bypass": function (req, res, proxyOptions) {
      // req.headers["accept"] = "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8";
      req.headers["User-agent"] = 'Appie/8.8.2 Model/phone Android/7.0-API24';
      req.headers['Host'] = 'api.ah.nl';
      req.headers['x-dynatrace'] = 'MT_3_4_772337796_1_fae7f753-3422-4a18-83c1-b8e8d21caace_0_1589_109';
      req.headers['x-application'] =  'AHWEBSHOP';
      req.headers['content-type'] = 'application/json; charset=UTF-8';
    }
  },
  "/ahimages": {
    "target": "https://static.ah.nl",
    "secure": false,
    "pathRewrite": {
      "^/ahimages": ""
    },
    "changeOrigin": true,
    "logLevel": "debug",
    "bypass": function (req, res, proxyOptions) {
      req.headers["accept"] = "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8";
      req.headers["User-agent"] = "AH/8.6.2(some app)";
    }
  }
}

module.exports = PROXY_CONFIG;
