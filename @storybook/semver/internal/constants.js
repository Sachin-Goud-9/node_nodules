"use strict";

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.max-safe-integer");

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
var SEMVER_SPEC_VERSION = '2.0.0';
var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */
9007199254740991; // Max safe segment length for coercion.

var MAX_SAFE_COMPONENT_LENGTH = 16;
module.exports = {
  SEMVER_SPEC_VERSION: SEMVER_SPEC_VERSION,
  MAX_LENGTH: MAX_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH
};