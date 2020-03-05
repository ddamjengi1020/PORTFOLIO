"use strict";

require("@babel/polyfill");

var _app = _interopRequireDefault(require("./app"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var PORT = process.env.PORT || 3000;

var handleListen = function handleListen() {
  console.log("\uD83D\uDFE2  Connecting Server http://localhost:3000");
};

_app["default"].listen(PORT, handleListen);