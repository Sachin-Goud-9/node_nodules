function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const Main = props => /*#__PURE__*/React.createElement("article", _extends({}, props, {
  style: {
    padding: 15,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
    backgroundColor: '#fff',
    color: '#000'
  }
}));

const Title = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return /*#__PURE__*/React.createElement("h1", props, children);
};

const Note = props => /*#__PURE__*/React.createElement("p", _extends({}, props, {
  style: {
    opacity: 0.5
  }
}));

const InlineCode = props => /*#__PURE__*/React.createElement("code", _extends({}, props, {
  style: {
    fontSize: 15,
    fontWeight: 600,
    padding: '2px 5px',
    border: '1px solid #eae9e9',
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a'
  }
}));

const Link = (_ref2) => {
  let {
    children,
    href,
    target,
    rel
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, ["children", "href", "target", "rel"]);

  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, props, {
    target: target,
    rel: rel,
    style: {
      color: '#1474f3',
      textDecoration: 'none',
      borderBottom: '1px solid #1474f3',
      paddingBottom: 2
    }
  }), children);
};

const NavButton = (_ref3) => {
  let {
    children,
    onClick
  } = _ref3,
      props = _objectWithoutPropertiesLoose(_ref3, ["children", "onClick"]);

  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    type: "button",
    onClick: onClick,
    style: {
      color: '#1474f3',
      textDecoration: 'none',
      borderBottom: '1px solid #1474f3',
      paddingBottom: 2,
      borderTop: 'none',
      borderRight: 'none',
      borderLeft: 'none',
      backgroundColor: 'transparent',
      padding: 0,
      cursor: 'pointer',
      font: 'inherit'
    }
  }), children);
};

const Welcome = ({
  showApp
}) => /*#__PURE__*/React.createElement(Main, null, /*#__PURE__*/React.createElement(Title, null, "Welcome to storybook"), /*#__PURE__*/React.createElement("p", null, "This is a UI component dev environment for your app."), /*#__PURE__*/React.createElement("p", null, "We've added some basic stories inside the ", /*#__PURE__*/React.createElement(InlineCode, null, "src/stories"), " directory.", /*#__PURE__*/React.createElement("br", null), "A story is a single state of one or more UI components. You can have as many stories as you want.", /*#__PURE__*/React.createElement("br", null), "(Basically a story is like a visual test case.)"), /*#__PURE__*/React.createElement("p", null, "See these sample ", /*#__PURE__*/React.createElement(NavButton, {
  onClick: showApp
}, "stories"), " for a component called\xA0", /*#__PURE__*/React.createElement(InlineCode, null, "Button"), "."), /*#__PURE__*/React.createElement("p", null, "Just like that, you can add your own components as stories.", /*#__PURE__*/React.createElement("br", null), "You can also edit those components and see changes right away.", /*#__PURE__*/React.createElement("br", null), "(Try editing the ", /*#__PURE__*/React.createElement(InlineCode, null, "Button"), " stories located at\xA0", /*#__PURE__*/React.createElement(InlineCode, null, "src/stories/1-Button.stories.js"), ".)"), /*#__PURE__*/React.createElement("p", null, "Usually we create stories with smaller UI components in the app.", /*#__PURE__*/React.createElement("br", null), "Have a look at the\xA0", /*#__PURE__*/React.createElement(Link, {
  href: "https://storybook.js.org/basics/writing-stories",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Writing Stories"), "\xA0section in our documentation."), /*#__PURE__*/React.createElement(Note, null, /*#__PURE__*/React.createElement("b", null, "NOTE:"), /*#__PURE__*/React.createElement("br", null), "Have a look at the ", /*#__PURE__*/React.createElement(InlineCode, null, ".storybook/webpack.config.js"), " to add webpack loaders and plugins you are using in this project."));

Welcome.displayName = 'Welcome';
export { Welcome as default };