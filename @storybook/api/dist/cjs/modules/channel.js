"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;

require("core-js/modules/es.array.concat.js");

var _coreEvents = require("@storybook/core-events");

var init = function init(_ref) {
  var provider = _ref.provider;
  var api = {
    getChannel: function getChannel() {
      return provider.channel;
    },
    on: function on(type, cb) {
      provider.channel.addListener(type, cb);
      return function () {
        return provider.channel.removeListener(type, cb);
      };
    },
    off: function off(type, cb) {
      return provider.channel.removeListener(type, cb);
    },
    once: function once(type, cb) {
      return provider.channel.once(type, cb);
    },
    emit: function emit(type) {
      var _provider$channel;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_provider$channel = provider.channel).emit.apply(_provider$channel, [type].concat(args));
    },
    collapseAll: function collapseAll() {
      provider.channel.emit(_coreEvents.STORIES_COLLAPSE_ALL, {});
    },
    expandAll: function expandAll() {
      api.emit(_coreEvents.STORIES_EXPAND_ALL);
    }
  };
  return {
    api: api
  };
};

exports.init = init;