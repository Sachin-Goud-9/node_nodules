import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.object.freeze.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.function.name.js";

var _templateObject, _templateObject2, _templateObject3;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import "core-js/modules/es.object.assign.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.values.js";
import "core-js/modules/es.string.match.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.array.reduce.js";
import "core-js/modules/es.string.split.js";
import "core-js/modules/es.string.trim.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.string.includes.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/web.dom-collections.for-each.js";

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import deprecate from 'util-deprecate';
import dedent from 'ts-dedent';
import { sanitize } from '@storybook/csf';
import mapValues from 'lodash/mapValues';
import { combineParameters } from '../index';
import merge from './merge';
var warnLegacyShowRoots = deprecate(function () {}, dedent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    The 'showRoots' config option is deprecated and will be removed in Storybook 7.0. Use 'sidebar.showRoots' instead.\n    Read more about it in the migration guide: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md\n  "]))));
var warnChangedDefaultHierarchySeparators = deprecate(function () {}, dedent(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    The default hierarchy separators changed in Storybook 6.0.\n    '|' and '.' will no longer create a hierarchy, but codemods are available.\n    Read more about it in the migration guide: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md\n  "]))));
export var denormalizeStoryParameters = function denormalizeStoryParameters(_ref) {
  var globalParameters = _ref.globalParameters,
      kindParameters = _ref.kindParameters,
      stories = _ref.stories;
  return mapValues(stories, function (storyData) {
    return Object.assign({}, storyData, {
      parameters: combineParameters(globalParameters, kindParameters[storyData.kind], storyData.parameters)
    });
  });
};
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/;
export var transformStoriesRawToStoriesHash = function transformStoriesRawToStoriesHash(input, _ref2) {
  var provider = _ref2.provider;
  var values = Object.values(input).filter(Boolean);
  var usesOldHierarchySeparator = values.some(function (_ref3) {
    var kind = _ref3.kind;
    return kind.match(/\.|\|/);
  }); // dot or pipe

  var storiesHashOutOfOrder = values.reduce(function (acc, item) {
    var kind = item.kind,
        parameters = item.parameters;

    var _provider$getConfig = provider.getConfig(),
        _provider$getConfig$s = _provider$getConfig.sidebar,
        sidebar = _provider$getConfig$s === void 0 ? {} : _provider$getConfig$s,
        deprecatedShowRoots = _provider$getConfig.showRoots;

    var _sidebar$showRoots = sidebar.showRoots,
        showRoots = _sidebar$showRoots === void 0 ? deprecatedShowRoots : _sidebar$showRoots,
        _sidebar$collapsedRoo = sidebar.collapsedRoots,
        collapsedRoots = _sidebar$collapsedRoo === void 0 ? [] : _sidebar$collapsedRoo,
        renderLabel = sidebar.renderLabel;

    if (typeof deprecatedShowRoots !== 'undefined') {
      warnLegacyShowRoots();
    }

    var setShowRoots = typeof showRoots !== 'undefined';

    if (usesOldHierarchySeparator && !setShowRoots) {
      warnChangedDefaultHierarchySeparators();
    }

    var groups = kind.trim().split(STORY_KIND_PATH_SEPARATOR);
    var root = (!setShowRoots || showRoots) && groups.length > 1 ? [groups.shift()] : [];
    var rootAndGroups = [].concat(root, _toConsumableArray(groups)).reduce(function (list, name, index) {
      var parent = index > 0 && list[index - 1].id;
      var id = sanitize(parent ? "".concat(parent, "-").concat(name) : name);

      if (parent === id) {
        throw new Error(dedent(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n              Invalid part '", "', leading to id === parentId ('", "'), inside kind '", "'\n\n              Did you create a path that uses the separator char accidentally, such as 'Vue <docs/>' where '/' is a separator char? See https://github.com/storybookjs/storybook/issues/6128\n            "])), name, id, kind));
      }

      if (root.length && index === 0) {
        list.push({
          id: id,
          name: name,
          depth: index,
          children: [],
          isComponent: false,
          isLeaf: false,
          isRoot: true,
          renderLabel: renderLabel,
          startCollapsed: collapsedRoots.includes(id)
        });
      } else {
        list.push({
          id: id,
          name: name,
          parent: parent,
          depth: index,
          children: [],
          isComponent: false,
          isLeaf: false,
          isRoot: false,
          renderLabel: renderLabel,
          parameters: {
            docsOnly: parameters === null || parameters === void 0 ? void 0 : parameters.docsOnly,
            viewMode: parameters === null || parameters === void 0 ? void 0 : parameters.viewMode
          }
        });
      }

      return list;
    }, []);
    var paths = [].concat(_toConsumableArray(rootAndGroups.map(function (_ref4) {
      var id = _ref4.id;
      return id;
    })), [item.id]); // Ok, now let's add everything to the store

    rootAndGroups.forEach(function (group, index) {
      var child = paths[index + 1];
      var id = group.id;
      acc[id] = merge(acc[id] || {}, Object.assign({}, group, child && {
        children: [child]
      }));
    });
    acc[item.id] = Object.assign({}, item, {
      depth: rootAndGroups.length,
      parent: rootAndGroups[rootAndGroups.length - 1].id,
      isLeaf: true,
      isComponent: false,
      isRoot: false,
      renderLabel: renderLabel
    });
    return acc;
  }, {});

  function addItem(acc, item) {
    if (!acc[item.id]) {
      // If we were already inserted as part of a group, that's great.
      acc[item.id] = item;
      var children = item.children;

      if (children) {
        var childNodes = children.map(function (id) {
          return storiesHashOutOfOrder[id];
        });
        acc[item.id].isComponent = childNodes.every(function (childNode) {
          return childNode.isLeaf;
        });
        childNodes.forEach(function (childNode) {
          return addItem(acc, childNode);
        });
      }
    }

    return acc;
  }

  return Object.values(storiesHashOutOfOrder).reduce(addItem, {});
};
export function isRoot(item) {
  if (item) {
    return item.isRoot;
  }

  return false;
}
export function isGroup(item) {
  if (item) {
    return !item.isRoot && !item.isLeaf;
  }

  return false;
}
export function isStory(item) {
  if (item) {
    return item.isLeaf;
  }

  return false;
}