function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "core-js/modules/es.string.repeat.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.reflect.construct.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import inputUsageTypes from '../types/inputUsageTypes';

var JsonAddValue = /*#__PURE__*/function (_Component) {
  _inherits(JsonAddValue, _Component);

  var _super = _createSuper(JsonAddValue);

  function JsonAddValue(props) {
    var _this;

    _classCallCheck(this, JsonAddValue);

    _this = _super.call(this, props);
    _this.state = {
      inputRefKey: null,
      inputRefValue: null
    }; // Bind

    _this.refInputValue = _this.refInputValue.bind(_assertThisInitialized(_this));
    _this.refInputKey = _this.refInputKey.bind(_assertThisInitialized(_this));
    _this.onKeydown = _this.onKeydown.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(JsonAddValue, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$state = this.state,
          inputRefKey = _this$state.inputRefKey,
          inputRefValue = _this$state.inputRefValue;
      var onlyValue = this.props.onlyValue;

      if (inputRefKey && typeof inputRefKey.focus === 'function') {
        inputRefKey.focus();
      }

      if (onlyValue && inputRefValue && typeof inputRefValue.focus === 'function') {
        inputRefValue.focus();
      }

      document.addEventListener('keydown', this.onKeydown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown);
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat) return;

      if (event.code === 'Enter' || event.key === 'Enter') {
        event.preventDefault();
        this.onSubmit();
      }

      if (event.code === 'Escape' || event.key === 'Escape') {
        event.preventDefault();
        this.props.handleCancel();
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this$props = this.props,
          handleAdd = _this$props.handleAdd,
          onlyValue = _this$props.onlyValue,
          onSubmitValueParser = _this$props.onSubmitValueParser,
          keyPath = _this$props.keyPath,
          deep = _this$props.deep;
      var _this$state2 = this.state,
          inputRefKey = _this$state2.inputRefKey,
          inputRefValue = _this$state2.inputRefValue;
      var result = {}; // Check if we have the key

      if (!onlyValue) {
        // Check that there is a key
        if (!inputRefKey.value) {
          // Empty key => Not authorized
          return;
        }

        result.key = inputRefKey.value;
      }

      result.newValue = onSubmitValueParser(false, keyPath, deep, result.key, inputRefValue.value);
      handleAdd(result);
    }
  }, {
    key: "refInputKey",
    value: function refInputKey(node) {
      this.state.inputRefKey = node;
    }
  }, {
    key: "refInputValue",
    value: function refInputValue(node) {
      this.state.inputRefValue = node;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          handleCancel = _this$props2.handleCancel,
          onlyValue = _this$props2.onlyValue,
          addButtonElement = _this$props2.addButtonElement,
          cancelButtonElement = _this$props2.cancelButtonElement,
          inputElementGenerator = _this$props2.inputElementGenerator,
          keyPath = _this$props2.keyPath,
          deep = _this$props2.deep;
      var addButtonElementLayout = /*#__PURE__*/React.cloneElement(addButtonElement, {
        onClick: this.onSubmit
      });
      var cancelButtonElementLayout = /*#__PURE__*/React.cloneElement(cancelButtonElement, {
        onClick: handleCancel
      });
      var inputElementValue = inputElementGenerator(inputUsageTypes.VALUE, keyPath, deep);
      var inputElementValueLayout = /*#__PURE__*/React.cloneElement(inputElementValue, {
        placeholder: 'Value',
        ref: this.refInputValue
      });
      var inputElementKeyLayout = null;

      if (!onlyValue) {
        var inputElementKey = inputElementGenerator(inputUsageTypes.KEY, keyPath, deep);
        inputElementKeyLayout = /*#__PURE__*/React.cloneElement(inputElementKey, {
          placeholder: 'Key',
          ref: this.refInputKey
        });
      }

      return /*#__PURE__*/React.createElement("span", {
        className: "rejt-add-value-node"
      }, inputElementKeyLayout, inputElementValueLayout, cancelButtonElementLayout, addButtonElementLayout);
    }
  }]);

  return JsonAddValue;
}(Component);

JsonAddValue.displayName = "JsonAddValue";
JsonAddValue.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  onlyValue: PropTypes.bool,
  addButtonElement: PropTypes.element,
  cancelButtonElement: PropTypes.element,
  inputElementGenerator: PropTypes.func.isRequired,
  keyPath: PropTypes.array,
  deep: PropTypes.number,
  onSubmitValueParser: PropTypes.func.isRequired
};
JsonAddValue.defaultProps = {
  onlyValue: false,
  addButtonElement: /*#__PURE__*/React.createElement("button", null, "+"),
  cancelButtonElement: /*#__PURE__*/React.createElement("button", null, "c")
};
export default JsonAddValue;