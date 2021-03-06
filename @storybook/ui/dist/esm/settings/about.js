import "core-js/modules/es.string.bold.js";
import React, { Fragment } from 'react';
import semver from '@storybook/semver';
import { styled } from '@storybook/theming';
import Markdown from 'markdown-to-jsx';
import { StorybookIcon, SyntaxHighlighter, Link, DocumentWrapper } from '@storybook/components';
import SettingsFooter from './SettingsFooter';
var Header = styled.header(function (_ref) {
  var theme = _ref.theme;
  return {
    marginBottom: 20,
    fontSize: theme.typography.size.m3,
    fontWeight: theme.typography.weight.black,
    alignItems: 'center',
    display: 'flex',
    '> svg': {
      height: 32,
      width: 'auto',
      marginRight: 8
    }
  };
});
var Subheading = styled.span(function (_ref2) {
  var theme = _ref2.theme;
  return {
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    fontWeight: theme.typography.weight.black,
    fontSize: theme.typography.size.s2 - 1,
    lineHeight: '24px',
    color: theme.color.mediumdark
  };
});
var SubheadingLink = styled(Link)(function (_ref3) {
  var theme = _ref3.theme;
  return {
    fontSize: theme.typography.size.s1
  };
});
var Subheader = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '.75rem'
});
var UpdateMessage = styled.div(function (_ref4) {
  var status = _ref4.status,
      theme = _ref4.theme;

  if (status === 'positive') {
    return {
      background: theme.background.positive,
      color: theme.color.positive
    };
  }

  if (status === 'negative') {
    return {
      background: theme.background.negative,
      color: theme.color.negative
    };
  }

  return {
    background: '#EAF3FC',
    color: theme.color.darkest
  };
}, function (_ref5) {
  var theme = _ref5.theme;
  return {
    fontWeight: theme.typography.weight.bold,
    fontSize: theme.typography.size.s2,
    padding: '10px 20px',
    marginBottom: 24,
    borderRadius: theme.appBorderRadius,
    border: "1px solid ".concat(theme.appBorderColor),
    textAlign: 'center'
  };
});
var ErrorMessage = styled.div(function (_ref6) {
  var theme = _ref6.theme;
  return {
    fontWeight: theme.typography.weight.bold,
    textAlign: 'center'
  };
});
var Upgrade = styled.div(function (_ref7) {
  var theme = _ref7.theme;
  return {
    marginTop: 20,
    borderTop: "1px solid ".concat(theme.appBorderColor)
  };
});
var Container = styled.div({
  padding: "3rem 20px",
  maxWidth: 600,
  margin: '0 auto'
});

var AboutScreen = function AboutScreen(_ref8) {
  var _ref8$latest = _ref8.latest,
      latest = _ref8$latest === void 0 ? null : _ref8$latest,
      current = _ref8.current;
  var canUpdate = latest && semver.gt(latest.version, current.version);
  var updateMessage;

  if (latest) {
    if (canUpdate) {
      updateMessage = /*#__PURE__*/React.createElement(UpdateMessage, {
        status: "positive"
      }, "Storybook ", latest.version, " is available. Upgrade from ", current.version, " now.");
    } else {
      updateMessage = /*#__PURE__*/React.createElement(UpdateMessage, {
        status: "neutral"
      }, "Looking good! You're up to date.");
    }
  } else {
    updateMessage = /*#__PURE__*/React.createElement(UpdateMessage, {
      status: "negative"
    }, "Oops! The latest version of Storybook couldn't be fetched.");
  }

  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(StorybookIcon, null), "Storybook ", current.version), updateMessage, latest ? /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Subheader, null, /*#__PURE__*/React.createElement(Subheading, null, latest.version, " Changelog"), /*#__PURE__*/React.createElement(SubheadingLink, {
    secondary: true,
    href: "https://github.com/storybookjs/storybook/blob/next/CHANGELOG.md",
    withArrow: true,
    cancel: false,
    target: "_blank"
  }, "Read full changelog")), /*#__PURE__*/React.createElement(DocumentWrapper, null, /*#__PURE__*/React.createElement(Markdown, null, latest.info.plain))) : /*#__PURE__*/React.createElement(ErrorMessage, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://github.com/storybookjs/storybook/releases",
    target: "_blank",
    withArrow: true,
    secondary: true,
    cancel: false
  }, "Check Storybook's release history")), canUpdate && /*#__PURE__*/React.createElement(Upgrade, null, /*#__PURE__*/React.createElement(DocumentWrapper, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Upgrade all Storybook packages to latest:")), /*#__PURE__*/React.createElement(SyntaxHighlighter, {
    language: "bash",
    copyable: true,
    padded: true,
    bordered: true
  }, "npx sb upgrade"))), /*#__PURE__*/React.createElement(SettingsFooter, null));
};

AboutScreen.displayName = "AboutScreen";
export { AboutScreen };