"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Textarea = exports.Select = exports.Input = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireWildcard(require("react"));

var _theming = require("@storybook/theming");

var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));

var _Button = require("../../Button/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styleResets = {
  // resets
  appearance: 'none',
  border: '0 none',
  boxSizing: 'inherit',
  display: ' block',
  margin: ' 0',
  background: 'transparent',
  padding: 0,
  fontSize: 'inherit',
  position: 'relative'
};

var styles = function styles(_ref) {
  var theme = _ref.theme;
  return Object.assign({}, styleResets, {
    transition: 'box-shadow 200ms ease-out, opacity 200ms ease-out',
    color: theme.input.color || 'inherit',
    background: theme.input.background,
    boxShadow: "".concat(theme.input.border, " 0 0 0 1px inset"),
    borderRadius: theme.input.borderRadius,
    fontSize: theme.typography.size.s2 - 1,
    lineHeight: '20px',
    padding: '6px 10px',
    // 32
    '&:focus': {
      boxShadow: "".concat(theme.color.secondary, " 0 0 0 1px inset"),
      outline: 'none'
    },
    '&[disabled]': {
      cursor: 'not-allowed',
      opacity: 0.5
    },
    '&:-webkit-autofill': {
      WebkitBoxShadow: "0 0 0 3em ".concat(theme.color.lightest, " inset")
    },
    '::placeholder': {
      color: theme.color.mediumdark
    }
  });
};

var sizes = function sizes(_ref2) {
  var size = _ref2.size;

  switch (size) {
    case '100%':
      {
        return {
          width: '100%'
        };
      }

    case 'flex':
      {
        return {
          flex: 1
        };
      }

    case 'auto':
    default:
      {
        return {
          display: 'inline'
        };
      }
  }
};

var alignment = function alignment(_ref3) {
  var align = _ref3.align;

  switch (align) {
    case 'end':
      {
        return {
          textAlign: 'right'
        };
      }

    case 'center':
      {
        return {
          textAlign: 'center'
        };
      }

    case 'start':
    default:
      {
        return {
          textAlign: 'left'
        };
      }
  }
};

var validation = function validation(_ref4) {
  var valid = _ref4.valid,
      theme = _ref4.theme;

  switch (valid) {
    case 'valid':
      {
        return {
          boxShadow: "".concat(theme.color.positive, " 0 0 0 1px inset !important")
        };
      }

    case 'error':
      {
        return {
          boxShadow: "".concat(theme.color.negative, " 0 0 0 1px inset !important")
        };
      }

    case 'warn':
      {
        return {
          boxShadow: "".concat(theme.color.warning, " 0 0 0 1px inset")
        };
      }

    case undefined:
    case null:
    default:
      {
        return {};
      }
  }
};

var Input = Object.assign((0, _theming.styled)( /*#__PURE__*/(0, _react.forwardRef)(function (_ref5, ref) {
  var size = _ref5.size,
      valid = _ref5.valid,
      align = _ref5.align,
      props = _objectWithoutProperties(_ref5, ["size", "valid", "align"]);

  return /*#__PURE__*/_react.default.createElement("input", _extends({}, props, {
    ref: ref
  }));
}))(styles, sizes, alignment, validation, {
  minHeight: 32
}), {
  displayName: 'Input'
});
exports.Input = Input;
var Select = Object.assign((0, _theming.styled)( /*#__PURE__*/(0, _react.forwardRef)(function (_ref6, ref) {
  var size = _ref6.size,
      valid = _ref6.valid,
      align = _ref6.align,
      props = _objectWithoutProperties(_ref6, ["size", "valid", "align"]);

  return /*#__PURE__*/_react.default.createElement("select", _extends({}, props, {
    ref: ref
  }));
}))(styles, sizes, validation, {
  height: 32,
  userSelect: 'none',
  paddingRight: 20,
  appearance: 'menulist'
}), {
  displayName: 'Select'
});
exports.Select = Select;
var Textarea = Object.assign((0, _theming.styled)( /*#__PURE__*/(0, _react.forwardRef)(function (_ref7, ref) {
  var size = _ref7.size,
      valid = _ref7.valid,
      align = _ref7.align,
      props = _objectWithoutProperties(_ref7, ["size", "valid", "align"]);

  return /*#__PURE__*/_react.default.createElement(_reactTextareaAutosize.default, _extends({}, props, {
    ref: ref
  }));
}))(styles, sizes, alignment, validation, function (_ref8) {
  var _ref8$height = _ref8.height,
      height = _ref8$height === void 0 ? 400 : _ref8$height;
  return {
    overflow: 'visible',
    maxHeight: height
  };
}), {
  displayName: 'Textarea'
});
exports.Textarea = Textarea;
var ButtonStyled = (0, _theming.styled)( /*#__PURE__*/(0, _react.forwardRef)(function (_ref9, ref) {
  var size = _ref9.size,
      valid = _ref9.valid,
      align = _ref9.align,
      props = _objectWithoutProperties(_ref9, ["size", "valid", "align"]);

  return /*#__PURE__*/_react.default.createElement(_Button.Button, _extends({}, props, {
    ref: ref
  }));
}))(sizes, validation, {
  // Custom styling for color widget nested in buttons
  userSelect: 'none',
  overflow: 'visible',
  zIndex: 2,
  // overrides the default hover from Button
  '&:hover': {
    transform: 'none'
  }
});
var Button = Object.assign( /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(ButtonStyled, _extends({}, props, {
    tertiary: true,
    small: true,
    inForm: true,
    ref: ref
  }));
}), {
  displayName: 'Button'
});
exports.Button = Button;