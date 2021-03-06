"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithPresetColors = exports.Undefined = exports.Basic = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Color = require("./Color");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  title: 'Controls/Color',
  component: _Color.ColorControl
};
exports.default = _default;

var Template = function Template(initialValue, presetColors) {
  var _useState = (0, _react.useState)(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Color.ColorControl, {
    name: "Color",
    value: value,
    onChange: function onChange(newVal) {
      return setValue(newVal);
    },
    presetColors: presetColors,
    startOpen: true
  }), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(value) || 'undefined'));
};

var Basic = function Basic() {
  return Template('#ff0');
};

exports.Basic = Basic;

var Undefined = function Undefined() {
  return Template(undefined);
};

exports.Undefined = Undefined;

var WithPresetColors = function WithPresetColors() {
  return Template('tan', [{
    color: '#ff4785',
    title: 'Coral'
  }, {
    color: '#1EA7FD',
    title: 'Ocean'
  }, {
    color: 'rgb(252, 82, 31)',
    title: 'Orange'
  }, {
    color: 'RGBA(255, 174, 0, 0.5)',
    title: 'Gold'
  }, {
    color: 'hsl(101, 52%, 49%)',
    title: 'Green'
  }, {
    color: 'HSLA(179,65%,53%,0.5)',
    title: 'Seafoam'
  }, {
    color: '#6F2CAC',
    title: 'Purple'
  }, {
    color: '#2A0481',
    title: 'Ultraviolet'
  }, {
    color: 'black'
  }, {
    color: '#333',
    title: 'Darkest'
  }, {
    color: '#444',
    title: 'Darker'
  }, {
    color: '#666',
    title: 'Dark'
  }, {
    color: '#999',
    title: 'Mediumdark'
  }, {
    color: '#ddd',
    title: 'Medium'
  }, {
    color: '#EEE',
    title: 'Mediumlight'
  }, {
    color: '#F3F3F3',
    title: 'Light'
  }, {
    color: '#F8F8F8',
    title: 'Lighter'
  }, {
    color: '#FFFFFF',
    title: 'Lightest'
  }, '#fe4a49', '#FED766', 'rgba(0, 159, 183, 1)', 'HSLA(240,11%,91%,0.5)', 'slategray']);
};

exports.WithPresetColors = WithPresetColors;