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
exports.Markdown = exports.Text = exports.NoText = exports.Empty = exports.WithSubtitle = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _DocsPage = require("./DocsPage");

var _index = require("./index");

var Story = _interopRequireWildcard(require("./Story.stories"));

var Preview = _interopRequireWildcard(require("./Preview.stories"));

var argsTable = _interopRequireWildcard(require("./ArgsTable/ArgsTable.stories"));

var source = _interopRequireWildcard(require("./Source.stories"));

var description = _interopRequireWildcard(require("./Description.stories"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "11oe0k1",
  styles: "ul,ol{list-style:none;}"
} : {
  name: "11oe0k1",
  styles: "ul,ol{list-style:none;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibG9ja3MvRG9jc1BhZ2Uuc3Rvcmllcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JxQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvYmxvY2tzL0RvY3NQYWdlLnN0b3JpZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmltcG9ydCB7IFRpdGxlLCBTdWJ0aXRsZSwgRG9jc1BhZ2VXcmFwcGVyIH0gZnJvbSAnLi9Eb2NzUGFnZSc7XG5pbXBvcnQgeyBBcmdzVGFibGUsIFNvdXJjZSwgRGVzY3JpcHRpb24gfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCAqIGFzIFN0b3J5IGZyb20gJy4vU3Rvcnkuc3Rvcmllcyc7XG5pbXBvcnQgKiBhcyBQcmV2aWV3IGZyb20gJy4vUHJldmlldy5zdG9yaWVzJztcbmltcG9ydCAqIGFzIGFyZ3NUYWJsZSBmcm9tICcuL0FyZ3NUYWJsZS9BcmdzVGFibGUuc3Rvcmllcyc7XG5pbXBvcnQgKiBhcyBzb3VyY2UgZnJvbSAnLi9Tb3VyY2Uuc3Rvcmllcyc7XG5pbXBvcnQgKiBhcyBkZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uLnN0b3JpZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnRG9jcy9Eb2NzUGFnZScsXG4gIGNvbXBvbmVudDogRG9jc1BhZ2VXcmFwcGVyLFxuICAvLyBUaGUgZ29hbCBvZiB0aGlzIGRlY29yYXRvciBpcyB0byBtaW1pYyBzb21lIENTUyByZXNldC5cbiAgLy8gTGlrZSBUYWlsd2luZCBDU1Mgb3IgQnVsbWEgZG8sIGZvciBleGFtcGxlLlxuICBkZWNvcmF0b3JzOiBbXG4gICAgKHN0b3J5Rm4pID0+IChcbiAgICAgIDw+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIHVsLFxuICAgICAgICAgICAgb2wge1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIC8+XG4gICAgICAgIHtzdG9yeUZuKCl9XG4gICAgICA8Lz5cbiAgICApLFxuICBdLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgbGF5b3V0OiAnZnVsbHNjcmVlbicsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgV2l0aFN1YnRpdGxlID0gKCkgPT4gKFxuICA8RG9jc1BhZ2VXcmFwcGVyPlxuICAgIDxUaXRsZT5Eb2NzUGFnZTwvVGl0bGU+XG4gICAgPFN1YnRpdGxlPlxuICAgICAgV2hhdCB0aGUgRG9jc1BhZ2UgbG9va3MgbGlrZS4gTWVhbnQgdG8gYmUgUUFlZCBpbiBDYW52YXMgdGFiIG5vdCBpbiBEb2NzIHRhYi5cbiAgICA8L1N1YnRpdGxlPlxuICAgIDxEZXNjcmlwdGlvbiB7Li4uZGVzY3JpcHRpb24uVGV4dC5hcmdzfSAvPlxuICAgIDxQcmV2aWV3LlNpbmdsZSAvPlxuICAgIDxBcmdzVGFibGUgey4uLmFyZ3NUYWJsZS5Ob3JtYWwuYXJnc30gLz5cbiAgICA8U291cmNlIHsuLi5zb3VyY2UuSlNYLmFyZ3N9IC8+XG4gIDwvRG9jc1BhZ2VXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGNvbnN0IEVtcHR5ID0gKCkgPT4gKFxuICA8RG9jc1BhZ2VXcmFwcGVyPlxuICAgIDxTdG9yeS5FcnJvciAvPlxuICAgIDxBcmdzVGFibGUgey4uLmFyZ3NUYWJsZS5FcnJvci5hcmdzfSAvPlxuICAgIDxTb3VyY2Ugey4uLnNvdXJjZS5Tb3VyY2VVbmF2YWlsYWJsZS5hcmdzfSAvPlxuICA8L0RvY3NQYWdlV3JhcHBlcj5cbik7XG5cbmV4cG9ydCBjb25zdCBOb1RleHQgPSAoKSA9PiAoXG4gIDxEb2NzUGFnZVdyYXBwZXI+XG4gICAgPFRpdGxlPm5vIHRleHQ8L1RpdGxlPlxuICAgIDxQcmV2aWV3LlNpbmdsZSAvPlxuICAgIDxBcmdzVGFibGUgey4uLmFyZ3NUYWJsZS5Ob3JtYWwuYXJnc30gLz5cbiAgICA8U291cmNlIHsuLi5zb3VyY2UuSlNYLmFyZ3N9IC8+XG4gIDwvRG9jc1BhZ2VXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGNvbnN0IFRleHQgPSAoKSA9PiAoXG4gIDxEb2NzUGFnZVdyYXBwZXI+XG4gICAgPFRpdGxlPlNlbnNvcml1bTwvVGl0bGU+XG4gICAgPERlc2NyaXB0aW9uIHsuLi5kZXNjcmlwdGlvbi5UZXh0LmFyZ3N9IC8+XG4gICAgPFByZXZpZXcuU2luZ2xlIC8+XG4gICAgPEFyZ3NUYWJsZSB7Li4uYXJnc1RhYmxlLk5vcm1hbC5hcmdzfSAvPlxuICAgIDxTb3VyY2Ugey4uLnNvdXJjZS5KU1guYXJnc30gLz5cbiAgPC9Eb2NzUGFnZVdyYXBwZXI+XG4pO1xuXG5leHBvcnQgY29uc3QgTWFya2Rvd24gPSAoKSA9PiAoXG4gIDxEb2NzUGFnZVdyYXBwZXI+XG4gICAgPFRpdGxlPm1hcmtkb3duPC9UaXRsZT5cbiAgICA8RGVzY3JpcHRpb24gey4uLmRlc2NyaXB0aW9uLk1hcmtkb3duLmFyZ3N9IC8+XG4gICAgPFByZXZpZXcuU2luZ2xlIC8+XG4gICAgPEFyZ3NUYWJsZSB7Li4uYXJnc1RhYmxlLk5vcm1hbC5hcmdzfSAvPlxuICAgIDxTb3VyY2Ugey4uLnNvdXJjZS5KU1guYXJnc30gLz5cbiAgPC9Eb2NzUGFnZVdyYXBwZXI+XG4pO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _default = {
  title: 'Docs/DocsPage',
  component: _DocsPage.DocsPageWrapper,
  // The goal of this decorator is to mimic some CSS reset.
  // Like Tailwind CSS or Bulma do, for example.
  decorators: [function (storyFn) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Global, {
      styles: _ref
    }), storyFn());
  }],
  parameters: {
    layout: 'fullscreen'
  }
};
exports.default = _default;

var WithSubtitle = function WithSubtitle() {
  return /*#__PURE__*/_react.default.createElement(_DocsPage.DocsPageWrapper, null, /*#__PURE__*/_react.default.createElement(_DocsPage.Title, null, "DocsPage"), /*#__PURE__*/_react.default.createElement(_DocsPage.Subtitle, null, "What the DocsPage looks like. Meant to be QAed in Canvas tab not in Docs tab."), /*#__PURE__*/_react.default.createElement(_index.Description, description.Text.args), /*#__PURE__*/_react.default.createElement(Preview.Single, null), /*#__PURE__*/_react.default.createElement(_index.ArgsTable, argsTable.Normal.args), /*#__PURE__*/_react.default.createElement(_index.Source, source.JSX.args));
};

exports.WithSubtitle = WithSubtitle;
WithSubtitle.displayName = "WithSubtitle";

var Empty = function Empty() {
  return /*#__PURE__*/_react.default.createElement(_DocsPage.DocsPageWrapper, null, /*#__PURE__*/_react.default.createElement(Story.Error, null), /*#__PURE__*/_react.default.createElement(_index.ArgsTable, argsTable.Error.args), /*#__PURE__*/_react.default.createElement(_index.Source, source.SourceUnavailable.args));
};

exports.Empty = Empty;
Empty.displayName = "Empty";

var NoText = function NoText() {
  return /*#__PURE__*/_react.default.createElement(_DocsPage.DocsPageWrapper, null, /*#__PURE__*/_react.default.createElement(_DocsPage.Title, null, "no text"), /*#__PURE__*/_react.default.createElement(Preview.Single, null), /*#__PURE__*/_react.default.createElement(_index.ArgsTable, argsTable.Normal.args), /*#__PURE__*/_react.default.createElement(_index.Source, source.JSX.args));
};

exports.NoText = NoText;
NoText.displayName = "NoText";

var Text = function Text() {
  return /*#__PURE__*/_react.default.createElement(_DocsPage.DocsPageWrapper, null, /*#__PURE__*/_react.default.createElement(_DocsPage.Title, null, "Sensorium"), /*#__PURE__*/_react.default.createElement(_index.Description, description.Text.args), /*#__PURE__*/_react.default.createElement(Preview.Single, null), /*#__PURE__*/_react.default.createElement(_index.ArgsTable, argsTable.Normal.args), /*#__PURE__*/_react.default.createElement(_index.Source, source.JSX.args));
};

exports.Text = Text;
Text.displayName = "Text";

var Markdown = function Markdown() {
  return /*#__PURE__*/_react.default.createElement(_DocsPage.DocsPageWrapper, null, /*#__PURE__*/_react.default.createElement(_DocsPage.Title, null, "markdown"), /*#__PURE__*/_react.default.createElement(_index.Description, description.Markdown.args), /*#__PURE__*/_react.default.createElement(Preview.Single, null), /*#__PURE__*/_react.default.createElement(_index.ArgsTable, argsTable.Normal.args), /*#__PURE__*/_react.default.createElement(_index.Source, source.JSX.args));
};

exports.Markdown = Markdown;
Markdown.displayName = "Markdown";