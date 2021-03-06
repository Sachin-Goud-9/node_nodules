"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.promise.js");

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _webpack = require("webpack");

var _dotenvWebpack = _interopRequireDefault(require("dotenv-webpack"));

var _htmlWebpackPlugin = _interopRequireDefault(require("html-webpack-plugin"));

var _caseSensitivePathsWebpackPlugin = _interopRequireDefault(require("case-sensitive-paths-webpack-plugin"));

var _pnpWebpackPlugin = _interopRequireDefault(require("pnp-webpack-plugin"));

var _webpackVirtualModules = _interopRequireDefault(require("webpack-virtual-modules"));

var _terserWebpackPlugin = _interopRequireDefault(require("terser-webpack-plugin"));

var _paths = _interopRequireDefault(require("@storybook/theming/paths"));

var _paths2 = _interopRequireDefault(require("@storybook/ui/paths"));

var _readPkgUp = _interopRequireDefault(require("read-pkg-up"));

var _coreCommon = require("@storybook/core-common");

var _babelLoaderManager = require("./babel-loader-manager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var configDir, configType, docsMode, entries, refs, outputDir, previewUrl, versionCheck, releaseNotesData, presets, modern, envs, logLevel, template, headHtmlSnippet, isProd, refsTemplate, _yield$readPackage, version;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            configDir = _ref.configDir, configType = _ref.configType, docsMode = _ref.docsMode, entries = _ref.entries, refs = _ref.refs, outputDir = _ref.outputDir, previewUrl = _ref.previewUrl, versionCheck = _ref.versionCheck, releaseNotesData = _ref.releaseNotesData, presets = _ref.presets, modern = _ref.modern;
            _context.next = 3;
            return presets.apply('env');

          case 3:
            envs = _context.sent;
            _context.next = 6;
            return presets.apply('logLevel', undefined);

          case 6:
            logLevel = _context.sent;
            _context.next = 9;
            return presets.apply('managerMainTemplate', (0, _coreCommon.getManagerMainTemplate)());

          case 9:
            template = _context.sent;
            _context.next = 12;
            return presets.apply('managerHead', (0, _coreCommon.getManagerHeadTemplate)(configDir, process.env));

          case 12:
            headHtmlSnippet = _context.sent;
            isProd = configType === 'PRODUCTION';
            refsTemplate = _fsExtra.default.readFileSync(_path.default.join(__dirname, 'virtualModuleRef.template.js'), {
              encoding: 'utf8'
            });
            _context.next = 17;
            return (0, _readPkgUp.default)({
              cwd: __dirname
            });

          case 17:
            _yield$readPackage = _context.sent;
            version = _yield$readPackage.packageJson.version;
            return _context.abrupt("return", {
              name: 'manager',
              mode: isProd ? 'production' : 'development',
              bail: isProd,
              devtool: false,
              entry: entries,
              output: {
                path: outputDir,
                filename: isProd ? '[name].[contenthash].manager.bundle.js' : '[name].manager.bundle.js',
                publicPath: ''
              },
              watchOptions: {
                aggregateTimeout: 2000,
                ignored: /node_modules/
              },
              plugins: [refs ? new _webpackVirtualModules.default(_defineProperty({}, _path.default.resolve(_path.default.join(configDir, "generated-refs.js")), refsTemplate.replace("'{{refs}}'", JSON.stringify(refs)))) : null, new _htmlWebpackPlugin.default({
                filename: "index.html",
                // FIXME: `none` isn't a known option
                chunksSortMode: 'none',
                alwaysWriteToDisk: true,
                inject: false,
                templateParameters: function templateParameters(compilation, files, options) {
                  return {
                    compilation: compilation,
                    files: files,
                    options: options,
                    version: version,
                    globals: {
                      CONFIG_TYPE: configType,
                      LOGLEVEL: logLevel,
                      VERSIONCHECK: JSON.stringify(versionCheck),
                      RELEASE_NOTES_DATA: JSON.stringify(releaseNotesData),
                      DOCS_MODE: docsMode,
                      // global docs mode
                      PREVIEW_URL: previewUrl // global preview URL

                    },
                    headHtmlSnippet: headHtmlSnippet
                  };
                },
                template: template
              }), new _caseSensitivePathsWebpackPlugin.default(), new _dotenvWebpack.default({
                silent: true
              }), // graphql sources check process variable
              new _webpack.DefinePlugin({
                'process.env': (0, _coreCommon.stringifyEnvs)(envs),
                NODE_ENV: JSON.stringify(envs.NODE_ENV)
              }) // isProd &&
              //   BundleAnalyzerPlugin &&
              //   new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
              ].filter(Boolean),
              module: {
                rules: [(0, _babelLoaderManager.babelLoader)(), (0, _coreCommon.es6Transpiler)(), {
                  test: /\.css$/,
                  use: [require.resolve('style-loader'), {
                    loader: require.resolve('css-loader'),
                    options: {
                      importLoaders: 1
                    }
                  }]
                }, {
                  test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
                  loader: require.resolve('file-loader'),
                  options: {
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
              },
              resolve: {
                extensions: ['.mjs', '.js', '.jsx', '.json', '.cjs', '.ts', '.tsx'],
                modules: ['node_modules'].concat(envs.NODE_PATH || []),
                mainFields: [modern ? 'sbmodern' : null, 'browser', 'module', 'main'].filter(Boolean),
                alias: Object.assign({}, _paths.default, _paths2.default),
                plugins: [// Transparently resolve packages via PnP when needed; noop otherwise
                _pnpWebpackPlugin.default]
              },
              resolveLoader: {
                plugins: [_pnpWebpackPlugin.default.moduleLoader(module)]
              },
              recordsPath: (0, _coreCommon.resolvePathInStorybookCache)('public/records.json'),
              performance: {
                hints: false
              },
              optimization: {
                splitChunks: {
                  chunks: 'all'
                },
                runtimeChunk: true,
                sideEffects: true,
                usedExports: true,
                concatenateModules: true,
                minimizer: isProd ? [new _terserWebpackPlugin.default({
                  parallel: true,
                  terserOptions: {
                    mangle: false,
                    sourceMap: true,
                    keep_fnames: true
                  }
                })] : []
              }
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = _default;