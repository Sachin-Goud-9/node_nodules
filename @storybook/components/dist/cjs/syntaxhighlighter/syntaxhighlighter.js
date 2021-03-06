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

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SyntaxHighlighter = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.object.entries.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.string.trim.js");

var _react = _interopRequireWildcard(require("react"));

var _clientLogger = require("@storybook/client-logger");

var _theming = require("@storybook/theming");

var _global = _interopRequireDefault(require("global"));

var _memoizerific = _interopRequireDefault(require("memoizerific"));

var _jsx = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/languages/prism/jsx"));

var _bash = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/languages/prism/bash"));

var _css = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/languages/prism/css"));

var _jsExtras = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/languages/prism/js-extras"));

var _json = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/languages/prism/json"));

var _graphql = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/languages/prism/graphql"));

var _markup = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/languages/prism/markup"));

var _markdown = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/languages/prism/markdown"));

var _yaml = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/languages/prism/yaml"));

var _tsx = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/languages/prism/tsx"));

var _typescript = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/languages/prism/typescript"));

var _prismLight = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/prism-light"));

var _ActionBar = require("../ActionBar/ActionBar");

var _ScrollArea = require("../ScrollArea/ScrollArea");

var _formatter = require("./formatter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var navigator = _global.default.navigator,
    document = _global.default.document,
    globalWindow = _global.default.window;

_prismLight.default.registerLanguage('jsextra', _jsExtras.default);

_prismLight.default.registerLanguage('jsx', _jsx.default);

_prismLight.default.registerLanguage('json', _json.default);

_prismLight.default.registerLanguage('yml', _yaml.default);

_prismLight.default.registerLanguage('md', _markdown.default);

_prismLight.default.registerLanguage('bash', _bash.default);

_prismLight.default.registerLanguage('css', _css.default);

_prismLight.default.registerLanguage('html', _markup.default);

_prismLight.default.registerLanguage('tsx', _tsx.default);

_prismLight.default.registerLanguage('typescript', _typescript.default);

_prismLight.default.registerLanguage('graphql', _graphql.default);

var themedSyntax = (0, _memoizerific.default)(2)(function (theme) {
  return Object.entries(theme.code || {}).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return Object.assign({}, acc, _defineProperty({}, "* .".concat(key), val));
  }, {});
});
var copyToClipboard;

if (navigator !== null && navigator !== void 0 && navigator.clipboard) {
  copyToClipboard = function copyToClipboard(text) {
    return navigator.clipboard.writeText(text);
  };
} else {
  copyToClipboard = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(text) {
      var tmp, focus;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tmp = document.createElement('TEXTAREA');
              focus = document.activeElement;
              tmp.value = text;
              document.body.appendChild(tmp);
              tmp.select();
              document.execCommand('copy');
              document.body.removeChild(tmp);
              focus.focus();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function copyToClipboard(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
}

var Wrapper = _theming.styled.div(function (_ref4) {
  var theme = _ref4.theme;
  return {
    position: 'relative',
    overflow: 'hidden',
    color: theme.color.defaultText
  };
}, function (_ref5) {
  var theme = _ref5.theme,
      bordered = _ref5.bordered;
  return bordered ? {
    border: "1px solid ".concat(theme.appBorderColor),
    borderRadius: theme.borderRadius,
    background: theme.background.content
  } : {};
});

var Scroller = (0, _theming.styled)(function (_ref6) {
  var children = _ref6.children,
      className = _ref6.className;
  return /*#__PURE__*/_react.default.createElement(_ScrollArea.ScrollArea, {
    horizontal: true,
    vertical: true,
    className: className
  }, children);
})({
  position: 'relative'
}, function (_ref7) {
  var theme = _ref7.theme;
  return {
    '& code': {
      paddingRight: theme.layoutMargin
    }
  };
}, function (_ref8) {
  var theme = _ref8.theme;
  return themedSyntax(theme);
});

var Pre = _theming.styled.pre(function (_ref9) {
  var theme = _ref9.theme,
      padded = _ref9.padded;
  return {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 0,
    padding: padded ? theme.layoutMargin : 0
  };
});

var Code = _theming.styled.code({
  flex: 1,
  paddingRight: 0,
  opacity: 1
});

var SyntaxHighlighter = function SyntaxHighlighter(_ref10) {
  var children = _ref10.children,
      _ref10$language = _ref10.language,
      language = _ref10$language === void 0 ? 'jsx' : _ref10$language,
      _ref10$copyable = _ref10.copyable,
      copyable = _ref10$copyable === void 0 ? false : _ref10$copyable,
      _ref10$bordered = _ref10.bordered,
      bordered = _ref10$bordered === void 0 ? false : _ref10$bordered,
      _ref10$padded = _ref10.padded,
      padded = _ref10$padded === void 0 ? false : _ref10$padded,
      _ref10$format = _ref10.format,
      format = _ref10$format === void 0 ? true : _ref10$format,
      _ref10$className = _ref10.className,
      className = _ref10$className === void 0 ? null : _ref10$className,
      _ref10$showLineNumber = _ref10.showLineNumbers,
      showLineNumbers = _ref10$showLineNumber === void 0 ? false : _ref10$showLineNumber,
      rest = _objectWithoutProperties(_ref10, ["children", "language", "copyable", "bordered", "padded", "format", "className", "showLineNumbers"]);

  if (typeof children !== 'string' || !children.trim()) {
    return null;
  }

  var highlightableCode = format ? (0, _formatter.formatter)(children) : children.trim();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      copied = _useState2[0],
      setCopied = _useState2[1];

  var onClick = function onClick(e) {
    e.preventDefault();
    copyToClipboard(highlightableCode).then(function () {
      setCopied(true);
      globalWindow.setTimeout(function () {
        return setCopied(false);
      }, 1500);
    }).catch(_clientLogger.logger.error);
  };

  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    bordered: bordered,
    padded: padded,
    className: className
  }, /*#__PURE__*/_react.default.createElement(Scroller, null, /*#__PURE__*/_react.default.createElement(_prismLight.default, _extends({
    padded: padded || bordered,
    language: language,
    showLineNumbers: showLineNumbers,
    showInlineLineNumbers: showLineNumbers,
    useInlineStyles: false,
    PreTag: Pre,
    CodeTag: Code,
    lineNumberContainerStyle: {}
  }, rest), highlightableCode)), copyable ? /*#__PURE__*/_react.default.createElement(_ActionBar.ActionBar, {
    actionItems: [{
      title: copied ? 'Copied' : 'Copy',
      onClick: onClick
    }]
  }) : null);
};

exports.SyntaxHighlighter = SyntaxHighlighter;
SyntaxHighlighter.displayName = "SyntaxHighlighter";
var _default = SyntaxHighlighter;
exports.default = _default;