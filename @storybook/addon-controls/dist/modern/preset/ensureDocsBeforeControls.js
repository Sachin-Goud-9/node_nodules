import path from 'path';
import { logger } from '@storybook/node-logger';
import dedent from 'ts-dedent';

const findIndex = (addon, addons) => addons.findIndex(entry => {
  const name = entry.name || entry;
  return name && name.includes(addon);
});

const indexOfAddonOrEssentials = (addon, addons) => {
  const index = findIndex(addon, addons);
  return index >= 0 ? index : findIndex('@storybook/addon-essentials', addons);
};

export const verifyDocsBeforeControls = addons => {
  const docsIndex = indexOfAddonOrEssentials('@storybook/addon-docs', addons);
  const controlsIndex = indexOfAddonOrEssentials('@storybook/addon-controls', addons);
  return controlsIndex >= 0 && docsIndex >= 0 && docsIndex <= controlsIndex;
};
export const ensureDocsBeforeControls = configDir => {
  const mainFile = path.isAbsolute(configDir) ? path.join(configDir, 'main') : path.join(process.cwd(), configDir, 'main');

  try {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const main = require(mainFile);

    if (!(main !== null && main !== void 0 && main.addons)) {
      logger.warn(`Unable to find main.js addons: ${mainFile}`);
      return;
    }

    if (!verifyDocsBeforeControls(main.addons)) {
      logger.warn(dedent`
        Expected '@storybook/addon-docs' to be listed before '@storybook/addon-controls' (or '@storybook/addon-essentials'). Check your main.js?
        
        https://github.com/storybookjs/storybook/issues/11442
      `);
    }
  } catch (err) {
    logger.warn(`Unable to find main.js: ${mainFile}`);
  }
};