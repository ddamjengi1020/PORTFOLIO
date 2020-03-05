"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = require("path");

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.set("view engine", "pug");
app.set("views", (0, _path.join)(__dirname, "views"));
app.use(_express["default"]["static"]((0, _path.join)(__dirname, "static")));
app.use("/images", _express["default"]["static"]((0, _path.join)(__dirname, "images")));
app.use("/font", _express["default"]["static"]((0, _path.join)(__dirname, "font")));
app.use((0, _morgan["default"])("dev"));
app.get("/", function (req, res) {
  return res.render("home");
});
var _default = app;
exports["default"] = _default;