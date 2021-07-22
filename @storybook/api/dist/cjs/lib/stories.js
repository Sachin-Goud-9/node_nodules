"use strict";

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.freeze.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.function.name.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRoot = isRoot;
exports.isGroup = isGroup;
exports.isStory = isStory;
exports.transformStoriesRawToStoriesHash = exports.denormalizeStoryParameters = void 0;

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.values.js");

require("core-js/modules/es.string.match.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/web.dom-collections.for-each.js");

var _utilDeprecate = _interopRequireDefault(require("util-deprecate"));

var _tsDedent = _interopRequireDefault(require("ts-dedent"));

var _csf = require("@storybook/csf");

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

var _index = require("../index");

var _merge = _interopRequireDefault(require("./merge"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var warnLegacyShowRoots = (0, _utilDeprecate.default)(function () {}, (0, _tsDedent.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    The 'showRoots' config option is deprecated and will be removed in Storybook 7.0. Use 'sidebar.showRoots' instead.\n    Read more about it in the migration guide: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md\n  "]))));
var warnChangedDefaultHierarchySeparators = (0, _utilDeprecate.default)(function () {}, (0, _tsDedent.default)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    The default hierarchy separators changed in Storybook 6.0.\n    '|' and '.' will no longer create a hierarchy, but codemods are available.\n    Read more about it in the migration guide: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md\n  "]))));

var denormalizeStoryParameters = function denormalizeStoryParameters(_ref) {
  var globalParameters = _ref.globalParameters,
      kindParameters = _ref.kindParameters,
      stories = _ref.stories;
  return (0, _mapValues.default)(stories, function (storyData) {
    return Object.assign({}, storyData, {
      parameters: (0, _index.combineParameters)(globalParameters, kindParameters[storyData.kind], storyData.parameters)
    });
  });
};

exports.denormalizeStoryParameters = denormalizeStoryParameters;
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/;

var transformStoriesRawToStoriesHash = function transformStoriesRawToStoriesHash(input, _ref2) {
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
      var id = (0, _csf.sanitize)(parent ? "".concat(parent, "-").concat(name) : name);

      if (parent === id) {
        throw new Error((0, _tsDedent.default)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n              Invalid part '", "', leading to id === parentId ('", "'), inside kind '", "'\n\n              Did you create a path that uses the separator char accidentally, such as 'Vue <docs/>' where '/' is a separator char? See https://github.com/storybookjs/storybook/issues/6128\n            "])), name, id, kind));
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
      acc[id] = (0, _merge.default)(acc[id] || {}, Object.assign({}, group, child && {
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

exports.transformStoriesRawToStoriesHash = transformStoriesRawToStoriesHash;

function isRoot(item) {
  if (item) {
    return item.isRoot;
  }

  return false;
}

function isGroup(item) {
  if (item) {
    return !item.isRoot && !item.isLeaf;
  }

  return false;
}

function isStory(item) {
  if (item) {
    return item.isLeaf;
  }

  return false;
}