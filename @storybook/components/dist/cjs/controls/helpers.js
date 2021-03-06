"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getControlId = void 0;

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.exec.js");

/**
 * Adds `control` prefix to make ID attribute more specific.
 * Removes spaces because spaces are not allowed in ID attributes
 * @link http://xahlee.info/js/html_allowed_chars_in_attribute.html
 * @example getControlId('my prop name') -> 'control-my-prop-name'
 */
var getControlId = function getControlId(value) {
  return "control-".concat(value.replace(/\s+/g, '-'));
};

exports.getControlId = getControlId;