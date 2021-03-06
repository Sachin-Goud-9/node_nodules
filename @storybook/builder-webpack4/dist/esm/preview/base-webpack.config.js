function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import "core-js/modules/es.promise.js";
import autoprefixer from 'autoprefixer';
import findUp from 'find-up';
import path from 'path';
import { logger } from '@storybook/node-logger';
import deprecate from 'util-deprecate';
import dedent from 'ts-dedent';
var warnImplicitPostcssPlugins = deprecate(function () {
  return {
    // Additional config is merged with config, so we have it disabled currently
    config: false,
    plugins: [require('postcss-flexbugs-fixes'), // eslint-disable-line global-require
    autoprefixer({
      flexbox: 'no-2009'
    })]
  };
}, dedent`
    Default PostCSS plugins are deprecated. When switching to '@storybook/addon-postcss',
    you will need to add your own plugins, such as 'postcss-flexbugs-fixes' and 'autoprefixer'.

    See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-default-postcss-plugins for details.
  `);
var warnGetPostcssOptions = deprecate(function () {}, dedent`
    Relying on the implicit PostCSS loader is deprecated and will be removed in Storybook 7.0.
    If you need PostCSS, include '@storybook/addon-postcss' in your '.storybook/main.js' file.

    See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-implicit-postcss-loader for details.
    `);

var getPostcssOptions = async function () {
  var postcssConfigFiles = ['.postcssrc', '.postcssrc.json', '.postcssrc.yml', '.postcssrc.js', 'postcss.config.js']; // This is done naturally by newer postcss-loader (through cosmiconfig)

  var customPostcssConfig = await findUp(postcssConfigFiles);

  if (customPostcssConfig) {
    logger.info(`=> Using custom ${path.basename(customPostcssConfig)}`);
    warnGetPostcssOptions();
    return {
      config: customPostcssConfig
    };
  }

  return warnImplicitPostcssPlugins();
};

var presetName = function (preset) {
  return typeof preset === 'string' ? preset : preset.name;
};

export async function createDefaultWebpackConfig(storybookBaseConfig, options) {
  if (options.presetsList.some(function (preset) {
    return /@storybook(\/|\\)preset-create-react-app/.test(presetName(preset));
  })) {
    return storybookBaseConfig;
  }

  var hasPostcssAddon = options.presetsList.some(function (preset) {
    return /@storybook(\/|\\)addon-postcss/.test(presetName(preset));
  });
  var features = await options.presets.apply('features');
  var cssLoaders = {};

  if (!hasPostcssAddon) {
    logger.info(`=> Using implicit CSS loaders`);
    var use = [// TODO(blaine): Decide if we want to keep style-loader & css-loader in core
    // Trying to apply style-loader or css-loader to files that already have been
    // processed by them causes webpack to crash, so no one else can add similar
    // loader configurations to the `.css` extension.
    require.resolve('style-loader'), {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1
      }
    }, (features === null || features === void 0 ? void 0 : features.postcss) !== false ? {
      loader: require.resolve('postcss-loader'),
      options: {
        postcssOptions: await getPostcssOptions()
      }
    } : null];
    cssLoaders = {
      test: /\.css$/,
      sideEffects: true,
      use: use.filter(Boolean)
    };
  }

  var isProd = storybookBaseConfig.mode !== 'development';
  return _objectSpread(_objectSpread({}, storybookBaseConfig), {}, {
    module: _objectSpread(_objectSpread({}, storybookBaseConfig.module), {}, {
      rules: [...storybookBaseConfig.module.rules, cssLoaders, {
        test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        loader: require.resolve('file-loader'),
        options: {
          esModule: false,
          name: isProd ? 'static/media/[name].[contenthash:8].[ext]' : 'static/media/[path][name].[ext]'
        }
      }, {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: isProd ? 'static/media/[name].[contenthash:8].[ext]' : 'static/media/[path][name].[ext]'
        }
      }]
    })
  });
}