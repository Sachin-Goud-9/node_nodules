"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.object.keys.js");

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
exports.Preview = void 0;

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.map.js");

var _react = _interopRequireWildcard(require("react"));

var _polished = require("polished");

var _theming = require("@storybook/theming");

var _BlockBackgroundStyles = require("./BlockBackgroundStyles");

var _Source = require("./Source");

var _ActionBar = require("../ActionBar/ActionBar");

var _Toolbar = require("./Toolbar");

var _ZoomContext = require("./ZoomContext");

var _Zoom = require("../Zoom/Zoom");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ChildrenContainer = _theming.styled.div(function (_ref) {
  var isColumn = _ref.isColumn,
      columns = _ref.columns,
      layout = _ref.layout;
  return {
    display: isColumn || !columns ? 'block' : 'flex',
    position: 'relative',
    flexWrap: 'wrap',
    overflow: 'auto',
    flexDirection: isColumn ? 'column' : 'row',
    '& .innerZoomElementWrapper > *': isColumn ? {
      width: layout !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
      display: 'block'
    } : {
      maxWidth: layout !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
      display: 'inline-block'
    }
  };
}, function (_ref2) {
  var _ref2$layout = _ref2.layout,
      layout = _ref2$layout === void 0 ? 'padded' : _ref2$layout;
  return layout === 'centered' || layout === 'padded' ? {
    padding: '30px 20px',
    margin: -10,
    '& .innerZoomElementWrapper > *': {
      width: 'auto',
      border: '10px solid transparent!important'
    }
  } : {};
}, function (_ref3) {
  var _ref3$layout = _ref3.layout,
      layout = _ref3$layout === void 0 ? 'padded' : _ref3$layout;
  return layout === 'centered' ? {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    alignItems: 'center'
  } : {};
}, function (_ref4) {
  var columns = _ref4.columns;
  return columns && columns > 1 ? {
    '.innerZoomElementWrapper > *': {
      minWidth: "calc(100% / ".concat(columns, " - 20px)")
    }
  } : {};
});

var StyledSource = (0, _theming.styled)(_Source.Source)(function (_ref5) {
  var theme = _ref5.theme;
  return {
    margin: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: theme.appBorderRadius,
    borderBottomRightRadius: theme.appBorderRadius,
    border: 'none',
    background: theme.base === 'light' ? 'rgba(0, 0, 0, 0.85)' : (0, _polished.darken)(0.05, theme.background.content),
    color: theme.color.lightest,
    button: {
      background: theme.base === 'light' ? 'rgba(0, 0, 0, 0.85)' : (0, _polished.darken)(0.05, theme.background.content)
    }
  };
});

var PreviewContainer = _theming.styled.div(function (_ref6) {
  var theme = _ref6.theme,
      withSource = _ref6.withSource,
      isExpanded = _ref6.isExpanded;
  return Object.assign({
    position: 'relative',
    overflow: 'hidden',
    margin: '25px 0 40px'
  }, (0, _BlockBackgroundStyles.getBlockBackgroundStyle)(theme), {
    borderBottomLeftRadius: withSource && isExpanded && 0,
    borderBottomRightRadius: withSource && isExpanded && 0,
    borderBottomWidth: isExpanded && 0
  });
}, function (_ref7) {
  var withToolbar = _ref7.withToolbar;
  return withToolbar && {
    paddingTop: 40
  };
});

var getSource = function getSource(withSource, expanded, setExpanded) {
  switch (true) {
    case !!(withSource && withSource.error):
      {
        return {
          source: null,
          actionItem: {
            title: 'No code available',
            className: 'docblock-code-toggle docblock-code-toggle--disabled',
            disabled: true,
            onClick: function onClick() {
              return setExpanded(false);
            }
          }
        };
      }

    case expanded:
      {
        return {
          source: /*#__PURE__*/_react.default.createElement(StyledSource, _extends({}, withSource, {
            dark: true
          })),
          actionItem: {
            title: 'Hide code',
            className: 'docblock-code-toggle docblock-code-toggle--expanded',
            onClick: function onClick() {
              return setExpanded(false);
            }
          }
        };
      }

    default:
      {
        return {
          source: null,
          actionItem: {
            title: 'Show code',
            className: 'docblock-code-toggle',
            onClick: function onClick() {
              return setExpanded(true);
            }
          }
        };
      }
  }
};

function getStoryId(children) {
  if (_react.Children.count(children) === 1) {
    var elt = children;

    if (elt.props) {
      return elt.props.id;
    }
  }

  return null;
}

var PositionedToolbar = (0, _theming.styled)(_Toolbar.Toolbar)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 40
});

var Relative = _theming.styled.div({
  overflow: 'hidden',
  position: 'relative'
});

var getLayout = function getLayout(children) {
  return children.reduce(function (result, c) {
    if (result) {
      return result;
    }

    if (typeof c === 'string' || typeof c === 'number') {
      return 'padded';
    }

    return c.props && c.props.parameters && c.props.parameters.layout || 'padded';
  }, undefined);
};
/**
 * A preview component for showing one or more component `Story`
 * items. The preview also shows the source for the component
 * as a drop-down.
 */


var Preview = function Preview(_ref8) {
  var isColumn = _ref8.isColumn,
      columns = _ref8.columns,
      children = _ref8.children,
      withSource = _ref8.withSource,
      _ref8$withToolbar = _ref8.withToolbar,
      withToolbar = _ref8$withToolbar === void 0 ? false : _ref8$withToolbar,
      _ref8$isExpanded = _ref8.isExpanded,
      isExpanded = _ref8$isExpanded === void 0 ? false : _ref8$isExpanded,
      additionalActions = _ref8.additionalActions,
      className = _ref8.className,
      props = _objectWithoutProperties(_ref8, ["isColumn", "columns", "children", "withSource", "withToolbar", "isExpanded", "additionalActions", "className"]);

  var _useState = (0, _react.useState)(isExpanded),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _getSource = getSource(withSource, expanded, setExpanded),
      source = _getSource.source,
      actionItem = _getSource.actionItem;

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      scale = _useState4[0],
      setScale = _useState4[1];

  var previewClasses = [className].concat(['sbdocs', 'sbdocs-preview']);
  var defaultActionItems = withSource ? [actionItem] : [];
  var actionItems = additionalActions ? [].concat(defaultActionItems, _toConsumableArray(additionalActions)) : defaultActionItems; // @ts-ignore

  var layout = getLayout(_react.Children.count(children) === 1 ? [children] : children);
  return /*#__PURE__*/_react.default.createElement(PreviewContainer, _extends({
    withSource: withSource,
    withToolbar: withToolbar
  }, props, {
    className: previewClasses.join(' ')
  }), withToolbar && /*#__PURE__*/_react.default.createElement(PositionedToolbar, {
    border: true,
    zoom: function zoom(z) {
      return setScale(scale * z);
    },
    resetZoom: function resetZoom() {
      return setScale(1);
    },
    storyId: getStoryId(children),
    baseUrl: "./iframe.html"
  }), /*#__PURE__*/_react.default.createElement(_ZoomContext.ZoomContext.Provider, {
    value: {
      scale: scale
    }
  }, /*#__PURE__*/_react.default.createElement(Relative, {
    className: "docs-story"
  }, /*#__PURE__*/_react.default.createElement(ChildrenContainer, {
    isColumn: isColumn || !Array.isArray(children),
    columns: columns,
    layout: layout
  }, /*#__PURE__*/_react.default.createElement(_Zoom.Zoom.Element, {
    scale: scale
  }, Array.isArray(children) ? // eslint-disable-next-line react/no-array-index-key
  children.map(function (child, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, child);
  }) : /*#__PURE__*/_react.default.createElement("div", null, children))), /*#__PURE__*/_react.default.createElement(_ActionBar.ActionBar, {
    actionItems: actionItems
  }))), withSource && source);
};

exports.Preview = Preview;
Preview.displayName = "Preview";