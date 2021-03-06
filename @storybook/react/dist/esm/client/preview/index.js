import "core-js/modules/es.array.concat.js";

/* eslint-disable prefer-destructuring */
import React from 'react';
import { start } from '@storybook/core/client';
import './globals';
import render from './render';
var framework = 'react';

var globalRender = function globalRender(args, _ref) {
  var parameters = _ref.parameters;
  var Component = parameters.component;
  return /*#__PURE__*/React.createElement(Component, args);
};

var api = start(render);
api.clientApi.globalRender = globalRender;
export var storiesOf = function storiesOf(kind, m) {
  return api.clientApi.storiesOf(kind, m).addParameters({
    framework: framework
  });
};
export var configure = function configure() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return api.configure.apply(api, [framework].concat(args));
};
export var addDecorator = api.clientApi.addDecorator;
export var addParameters = api.clientApi.addParameters;
export var clearDecorators = api.clientApi.clearDecorators;
export var setAddon = api.clientApi.setAddon;
export var forceReRender = api.forceReRender;
export var getStorybook = api.clientApi.getStorybook;
export var raw = api.clientApi.raw;