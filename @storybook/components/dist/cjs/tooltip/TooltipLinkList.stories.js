"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.links = void 0;

require("core-js/modules/es.array.slice.js");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _WithTooltip = require("./WithTooltip");

var _TooltipLinkList = require("./TooltipLinkList");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var onLinkClick = (0, _addonActions.action)('onLinkClick');

var StoryLinkWrapper = function StoryLinkWrapper(_ref) {
  var href = _ref.href,
      passHref = _ref.passHref,
      children = _ref.children;

  var child = _react.Children.only(children);

  return /*#__PURE__*/(0, _react.cloneElement)(child, {
    href: passHref && href,
    onClick: function onClick(e) {
      e.preventDefault();
      onLinkClick(href);
    }
  });
};

StoryLinkWrapper.defaultProps = {
  passHref: false
};
var links = [{
  id: '1',
  title: 'Link',
  href: 'http://google.com'
}, {
  id: '2',
  title: 'Link',
  href: 'http://google.com'
}, {
  id: '3',
  title: 'callback',
  onClick: (0, _addonActions.action)('onClick')
}];
exports.links = links;
(0, _react2.storiesOf)('basics/Tooltip/TooltipLinkList', module).addDecorator(function (storyFn) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '300px'
    }
  }, /*#__PURE__*/_react.default.createElement(_WithTooltip.WithTooltip, {
    placement: "top",
    trigger: "click",
    startOpen: true,
    tooltip: storyFn()
  }, /*#__PURE__*/_react.default.createElement("div", null, "Tooltip")));
}).add('links', function () {
  return /*#__PURE__*/_react.default.createElement(_TooltipLinkList.TooltipLinkList, {
    links: links.slice(0, 2),
    LinkWrapper: StoryLinkWrapper
  });
}).add('links and callback', function () {
  return /*#__PURE__*/_react.default.createElement(_TooltipLinkList.TooltipLinkList, {
    links: links,
    LinkWrapper: StoryLinkWrapper
  });
});