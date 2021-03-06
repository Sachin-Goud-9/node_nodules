var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import "core-js/modules/es.array.find-index.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.string.includes.js";
import "core-js/modules/es.array.join.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.object.freeze.js";
import path from 'path';
import { logger } from '@storybook/node-logger';
import dedent from 'ts-dedent';

var findIndex = function findIndex(addon, addons) {
  return addons.findIndex(function (entry) {
    var name = entry.name || entry;
    return name && name.includes(addon);
  });
};

var indexOfAddonOrEssentials = function indexOfAddonOrEssentials(addon, addons) {
  var index = findIndex(addon, addons);
  return index >= 0 ? index : findIndex('@storybook/addon-essentials', addons);
};

export var verifyDocsBeforeControls = function verifyDocsBeforeControls(addons) {
  var docsIndex = indexOfAddonOrEssentials('@storybook/addon-docs', addons);
  var controlsIndex = indexOfAddonOrEssentials('@storybook/addon-controls', addons);
  return controlsIndex >= 0 && docsIndex >= 0 && docsIndex <= controlsIndex;
};
export var ensureDocsBeforeControls = function ensureDocsBeforeControls(configDir) {
  var mainFile = path.isAbsolute(configDir) ? path.join(configDir, 'main') : path.join(process.cwd(), configDir, 'main');

  try {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    var main = require(mainFile);

    if (!(main !== null && main !== void 0 && main.addons)) {
      logger.warn("Unable to find main.js addons: ".concat(mainFile));
      return;
    }

    if (!verifyDocsBeforeControls(main.addons)) {
      logger.warn(dedent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        Expected '@storybook/addon-docs' to be listed before '@storybook/addon-controls' (or '@storybook/addon-essentials'). Check your main.js?\n        \n        https://github.com/storybookjs/storybook/issues/11442\n      "]))));
    }
  } catch (err) {
    logger.warn("Unable to find main.js: ".concat(mainFile));
  }
};