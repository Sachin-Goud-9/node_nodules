import "core-js/modules/es.promise.js";
import path from 'path';
import { getInterpretedFile, serverRequire } from '@storybook/core-common';
export async function getManagerBuilder(configDir) {
  var main = path.resolve(configDir, 'main');
  var mainFile = getInterpretedFile(main);

  var _ref = mainFile ? serverRequire(mainFile) : {
    core: null
  },
      core = _ref.core; // Builder can be any string including community builders like `storybook-builder-vite`.
  // - For now, `webpack5` triggers `manager-webpack5`
  // - Everything else builds with `manager-webpack4`
  //
  // Unlike preview builders, manager building is not pluggable!


  var builderPackage = (core === null || core === void 0 ? void 0 : core.builder) === 'webpack5' ? require.resolve('@storybook/manager-webpack5', {
    paths: [main]
  }) : '@storybook/manager-webpack4';
  var managerBuilder = await import(builderPackage);
  return managerBuilder;
}