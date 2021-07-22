"use strict";

exports.__esModule = true;
exports["default"] = void 0;

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

var _default = numberToHex;
exports["default"] = _default;
module.exports = exports.default;