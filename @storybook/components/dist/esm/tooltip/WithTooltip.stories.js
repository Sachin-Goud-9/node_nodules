import React from 'react';
import { storiesOf } from '@storybook/react';
import { styled } from '@storybook/theming';
import { TooltipMessage } from './TooltipMessage';
import { WithToolTipState as WithTooltip } from './WithTooltip';
var ViewPort = styled.div({
  height: 300
});
var BackgroundBox = styled.div({
  width: 500,
  height: 500,
  overflowY: 'scroll',
  background: '#eee',
  position: 'relative'
});
var Spacer = styled.div({
  height: 100
});
var Trigger = styled.div({
  width: 200,
  height: 100,
  backgroundColor: 'red',
  color: 'white'
});

var Tooltip = function Tooltip(_ref) {
  var onHide = _ref.onHide;
  return /*#__PURE__*/React.createElement(TooltipMessage, {
    title: "Lorem ipsum dolor sit",
    desc: "Amet consectatur vestibulum concet durum politu coret weirom",
    links: [{
      title: 'Continue',
      onClick: onHide
    }]
  });
};

Tooltip.displayName = "Tooltip";
Tooltip.defaultProps = {
  onHide: null
};
storiesOf('basics/Tooltip/WithTooltip', module).addDecorator(function (storyFn) {
  return /*#__PURE__*/React.createElement(ViewPort, null, /*#__PURE__*/React.createElement(BackgroundBox, null, /*#__PURE__*/React.createElement(Spacer, null), storyFn()));
}).add('simple hover', function () {
  return /*#__PURE__*/React.createElement(WithTooltip, {
    placement: "top",
    trigger: "hover",
    tooltip: /*#__PURE__*/React.createElement(Tooltip, null)
  }, /*#__PURE__*/React.createElement(Trigger, null, "Hover me!"));
}).add('simple hover, functional', function () {
  return /*#__PURE__*/React.createElement(WithTooltip, {
    placement: "top",
    trigger: "hover",
    tooltip: Tooltip
  }, /*#__PURE__*/React.createElement(Trigger, null, "Hover me!"));
}).add('simple click', function () {
  return /*#__PURE__*/React.createElement(WithTooltip, {
    placement: "top",
    trigger: "click",
    tooltip: /*#__PURE__*/React.createElement(Tooltip, null)
  }, /*#__PURE__*/React.createElement(Trigger, null, "Click me!"));
}).add('simple click start open', function () {
  return /*#__PURE__*/React.createElement(WithTooltip, {
    placement: "top",
    trigger: "click",
    startOpen: true,
    tooltip: /*#__PURE__*/React.createElement(Tooltip, null)
  }, /*#__PURE__*/React.createElement(Trigger, null, "Click me!"));
}).add('simple click closeOnClick', function () {
  return /*#__PURE__*/React.createElement(WithTooltip, {
    placement: "top",
    trigger: "click",
    closeOnClick: true,
    tooltip: /*#__PURE__*/React.createElement(Tooltip, null)
  }, /*#__PURE__*/React.createElement(Trigger, null, "Click me!"));
}).add('no chrome', function () {
  return /*#__PURE__*/React.createElement(WithTooltip, {
    placement: "top",
    trigger: "click",
    hasChrome: false,
    tooltip: /*#__PURE__*/React.createElement(Tooltip, null)
  }, /*#__PURE__*/React.createElement(Trigger, null, "Click me!"));
});