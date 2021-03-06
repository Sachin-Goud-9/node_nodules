import "core-js/modules/es.function.name.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import mapValues from 'lodash/mapValues';
import { logger } from '@storybook/client-logger';
import { combineParameters } from './parameters';
import { filterArgTypes } from './filterArgTypes';

var inferControl = function inferControl(argType, name, matchers) {
  var type = argType.type,
      options = argType.options;

  if (!type && !options) {
    return undefined;
  } // args that end with background or color e.g. iconColor


  if (matchers.color && matchers.color.test(name)) {
    var controlType = _typeof(argType.type.value);

    if (controlType === 'string') {
      return {
        control: {
          type: 'color'
        }
      };
    }

    logger.warn("Addon controls: Control of type color only supports string, received \"".concat(controlType, "\" instead"));
  } // args that end with date e.g. purchaseDate


  if (matchers.date && matchers.date.test(name)) {
    return {
      control: {
        type: 'date'
      }
    };
  }

  switch (type.name) {
    case 'array':
      return {
        control: {
          type: 'object'
        }
      };

    case 'boolean':
      return {
        control: {
          type: 'boolean'
        }
      };

    case 'string':
      return {
        control: {
          type: 'text'
        }
      };

    case 'number':
      return {
        control: {
          type: 'number'
        }
      };

    case 'enum':
      {
        var _ref = type,
            value = _ref.value;
        return {
          control: {
            type: (value === null || value === void 0 ? void 0 : value.length) <= 5 ? 'radio' : 'select'
          },
          options: value
        };
      }

    case 'function':
    case 'symbol':
    case 'void':
      return null;

    default:
      return {
        control: {
          type: options ? 'select' : 'object'
        }
      };
  }
};

export var inferControls = function inferControls(context) {
  var _context$parameters = context.parameters,
      __isArgsStory = _context$parameters.__isArgsStory,
      argTypes = _context$parameters.argTypes,
      _context$parameters$c = _context$parameters.controls;
  _context$parameters$c = _context$parameters$c === void 0 ? {} : _context$parameters$c;
  var _context$parameters$c2 = _context$parameters$c.include,
      include = _context$parameters$c2 === void 0 ? null : _context$parameters$c2,
      _context$parameters$c3 = _context$parameters$c.exclude,
      exclude = _context$parameters$c3 === void 0 ? null : _context$parameters$c3,
      _context$parameters$c4 = _context$parameters$c.matchers,
      matchers = _context$parameters$c4 === void 0 ? {} : _context$parameters$c4;
  if (!__isArgsStory) return argTypes;
  var filteredArgTypes = filterArgTypes(argTypes, include, exclude);
  var withControls = mapValues(filteredArgTypes, function (argType, name) {
    return (argType === null || argType === void 0 ? void 0 : argType.type) && inferControl(argType, name, matchers);
  });
  return combineParameters(withControls, filteredArgTypes);
};