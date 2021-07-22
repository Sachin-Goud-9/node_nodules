import "core-js/modules/es.array.find.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.array.join.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.array.map.js";
import { logger } from '@storybook/client-logger';

function hasKeyword(keyword, keywords) {
  return keywords ? keywords.find(function (k) {
    return k.name === keyword;
  }) != null : false;
}

export var extractArgTypes = function extractArgTypes(component) {
  try {
    // eslint-disable-next-line no-underscore-dangle
    var docgen = component.__docgen;

    if (docgen) {
      return createArgTypes(docgen);
    }
  } catch (err) {
    logger.log("Error extracting argTypes: ".concat(err));
  }

  return {};
};
export var createArgTypes = function createArgTypes(docgen) {
  var results = {};
  docgen.data.forEach(function (item) {
    var _item$type, _item$type2;

    results[item.name] = {
      control: parseTypeToControl(item.type),
      name: item.name,
      description: item.description,
      type: {
        required: hasKeyword('required', item.keywords),
        summary: (_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.text
      },
      table: {
        type: {
          summary: (_item$type2 = item.type) === null || _item$type2 === void 0 ? void 0 : _item$type2.text
        },
        defaultValue: {
          summary: item.defaultValue
        },
        category: 'properties'
      }
    };
  });
  docgen.events.forEach(function (item) {
    results["event_".concat(item.name)] = {
      name: item.name,
      description: item.description,
      type: {
        name: 'void'
      },
      table: {
        category: 'events'
      }
    };
  });
  docgen.slots.forEach(function (item) {
    var _item$params;

    results["slot_".concat(item.name)] = {
      name: item.name,
      description: [item.description, (_item$params = item.params) === null || _item$params === void 0 ? void 0 : _item$params.map(function (p) {
        return "`".concat(p.name, "`");
      }).join(' ')].filter(function (p) {
        return p;
      }).join('\n\n'),
      type: {
        name: 'void'
      },
      table: {
        category: 'slots'
      }
    };
  });
  return results;
};
/**
 * Function to convert the type from sveltedoc-parser to a storybook type
 * @param typeName
 * @returns string
 */

var parseTypeToControl = function parseTypeToControl(type) {
  if (!type) {
    return null;
  }

  if (type.kind === 'type') {
    switch (type.type) {
      case 'string':
        return {
          type: 'text'
        };

      case 'enum':
        return {
          type: 'radio'
        };

      case 'any':
        return {
          type: 'object'
        };

      default:
        return {
          type: type.type
        };
    }
  } else if (type.kind === 'union') {
    if (Array.isArray(type.type) && !type.type.find(function (t) {
      return t.type !== 'string';
    })) {
      return {
        type: 'radio',
        options: type.type.filter(function (t) {
          return t.kind === 'const';
        }).map(function (t) {
          return t.value;
        })
      };
    }
  }

  return null;
};