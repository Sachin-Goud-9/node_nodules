"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareForInline = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

require("regenerator-runtime/runtime.js");

var _react = _interopRequireDefault(require("react"));

var _pLimit = _interopRequireDefault(require("p-limit"));

var _renderer = require("@storybook/angular/renderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var limit = (0, _pLimit.default)(1);
/**
 * Uses the angular renderer to generate a story. Uses p-limit to run synchronously
 */

var prepareForInline = function prepareForInline(storyFn, _ref) {
  var id = _ref.id,
      parameters = _ref.parameters;
  return /*#__PURE__*/_react.default.createElement('div', {
    ref: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(node) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (node) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", null);

              case 2:
                return _context2.abrupt("return", limit( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var renderer;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _renderer.rendererFactory.getRendererInstance(id, node);

                        case 2:
                          renderer = _context.sent;
                          _context.next = 5;
                          return renderer.render({
                            forced: false,
                            parameters: parameters,
                            storyFnAngular: storyFn(),
                            targetDOMNode: node
                          });

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function ref(_x) {
        return _ref2.apply(this, arguments);
      }

      return ref;
    }()
  });
};

exports.prepareForInline = prepareForInline;