"use strict";

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.freeze.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionsControl = void 0;

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _tsDedent = _interopRequireDefault(require("ts-dedent"));

var _clientLogger = require("@storybook/client-logger");

var _Checkbox = require("./Checkbox");

var _Radio = require("./Radio");

var _Select = require("./Select");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Options can accept `options` in two formats:
 * - array: ['a', 'b', 'c'] OR
 * - object: { a: 1, b: 2, c: 3 } (deprecated)
 *
 * We always normalize to the more generalized object format and ONLY handle
 * the object format in the underlying control implementations.
 *
 * While non-primitive values are deprecated, they might still not be valid
 * object keys, so the resulting object is a Label -> Value mapping.
 */
var normalizeOptions = function normalizeOptions(options, labels) {
  if (Array.isArray(options)) {
    return options.reduce(function (acc, item) {
      acc[(labels === null || labels === void 0 ? void 0 : labels[item]) || String(item)] = item;
      return acc;
    }, {});
  }

  return options;
};

var OptionsControl = function OptionsControl(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'select' : _props$type,
      options = props.options,
      labels = props.labels,
      argType = props.argType;
  var normalized = Object.assign({}, props, {
    options: normalizeOptions(options || argType.options, labels)
  });

  if (options) {
    _clientLogger.once.warn((0, _tsDedent.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      'control.options' is deprecated and will be removed in Storybook 7.0. Define 'options' directly on the argType instead, and use 'control.labels' for custom labels.\n\n      More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-controloptions\n    "]))));
  }

  switch (type) {
    case 'check':
    case 'inline-check':
      return /*#__PURE__*/_react.default.createElement(_Checkbox.CheckboxControl, _extends({}, normalized, {
        isInline: type === 'inline-check'
      }));

    case 'radio':
    case 'inline-radio':
      return /*#__PURE__*/_react.default.createElement(_Radio.RadioControl, _extends({}, normalized, {
        isInline: type === 'inline-radio'
      }));

    case 'select':
    case 'multi-select':
      return /*#__PURE__*/_react.default.createElement(_Select.SelectControl, _extends({}, normalized, {
        isMulti: type === 'multi-select'
      }));

    default:
      throw new Error("Unknown options type: ".concat(type));
  }
};

exports.OptionsControl = OptionsControl;