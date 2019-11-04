
var data = {
  "root": {
    "src": "./src",
    "dest": "./public",
    "deploy": "./deploy"
  },
  "sftp": {
      "host": "192.168.159.97",
      "user": "ubuntu",
      "key": "",
      "remotePath": ""
  },
  "tasks": {
    "browserSync": {
      "server": {
        "baseDir": "public"
      }
    },

    "static": {
      "src": "static",
      "dest": "./"
    },

    "js": {
      "src": "javascripts",
      "dest": "javascripts",
      "entries": {
        "app": ["./app.js"]
      
      },
      "extensions": ["js", "json"],
      "babel": {
        "presets": ["es2015", "stage-1"],
        "plugins": []
      },
      "extractSharedJs": false
    },
    "css": {
      "src": "stylesheets",
      "dest": "stylesheets",
      "autoprefixer": {
        "browsers": ["last 3 versions"]
      },
      "sass": {
        "indentedSyntax": true,
        "includePaths": [
          "./node_modules/normalize.css"
        ]
      },
      "extensions": ["sass", "scss", "css"]
    },

    "html": {
      "src": "html",
      "dest": "./",
      "dataFile": "data/global.json",
      "min": false,
      "htmlmin": {
        "collapseWhitespace": true
      },
      "extensions": ["html", "json"],
      "excludeFolders": ["layouts", "shared", "macros", "data"]
    },

    "images": {
      "src": "images",
      "dest": "images",
      "extensions": ["jpg", "png", "svg", "gif"]
    },

    "fonts": {
      "src": "fonts",
      "dest": "fonts",
      "extensions": ["woff2", "woff", "eot", "ttf", "svg"]
    },

    "iconFont": {
      "src": "icons",
      "dest": "fonts",
      "sassDest": "generated",
      "extensions": ["woff2", "woff", "eot", "ttf", "svg"]
    },

    "svgSprite": {
      "src": "icons",
      "dest": "images",
      "extensions": ["svg"]
    },

    "production" : {
      "rev": false
    }
  }
};

var path         = require('path')
var fs           = require('fs');
var _            = require('lodash');
var localConfigPath = path.join(__dirname, 'config.local.js'); 
var localData = {};
if(fs.existsSync(localConfigPath)){
      localData = require(localConfigPath);
  }
data = _.merge(data, localData);

module.exports = data;
