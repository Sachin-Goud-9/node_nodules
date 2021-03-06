"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollArea = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _react = _interopRequireWildcard(require("react"));

var _theming = require("@storybook/theming");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GlobalScrollAreaStyles = /*#__PURE__*/_react.default.lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./GlobalScrollAreaStyles'));
  });
});

var OverlayScrollbars = /*#__PURE__*/_react.default.lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./OverlayScrollbars'));
  });
});

var Scroller = function Scroller(_ref) {
  var horizontal = _ref.horizontal,
      vertical = _ref.vertical,
      props = _objectWithoutProperties(_ref, ["horizontal", "vertical"]);

  return /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react.default.createElement("div", props)
  }, /*#__PURE__*/_react.default.createElement(GlobalScrollAreaStyles, null), /*#__PURE__*/_react.default.createElement(OverlayScrollbars, _extends({
    options: {
      scrollbars: {
        autoHide: 'leave'
      }
    }
  }, props)));
};

Scroller.displayName = "Scroller";
var ScrollArea = (0, _theming.styled)(Scroller)(function (_ref2) {
  var vertical = _ref2.vertical;
  return !vertical ? {
    overflowY: 'hidden'
  } : {
    overflowY: 'auto',
    height: '100%'
  };
}, function (_ref3) {
  var horizontal = _ref3.horizontal;
  return !horizontal ? {
    overflowX: 'hidden'
  } : {
    overflowX: 'auto',
    width: '100%'
  };
});
exports.ScrollArea = ScrollArea;
ScrollArea.defaultProps = {
  horizontal: false,
  vertical: false
};