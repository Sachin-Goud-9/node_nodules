function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.reflect.construct.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import React, { Children, Component, Fragment, memo } from 'react';
import { styled } from '@storybook/theming';
import { sanitize } from '@storybook/csf';
import { Placeholder } from '../placeholder/placeholder';
import { FlexBar } from '../bar/bar';
import { TabButton } from '../bar/button';
var ignoreSsrWarning = '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */';
var Wrapper = styled.div(function (_ref) {
  var theme = _ref.theme,
      bordered = _ref.bordered;
  return bordered ? {
    backgroundClip: 'padding-box',
    border: "1px solid ".concat(theme.appBorderColor),
    borderRadius: theme.appBorderRadius,
    overflow: 'hidden',
    boxSizing: 'border-box'
  } : {};
}, function (_ref2) {
  var absolute = _ref2.absolute;
  return absolute ? {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  } : {
    display: 'block'
  };
});
export var TabBar = styled.div({
  overflow: 'hidden',
  '&:first-of-type': {
    marginLeft: 0
  }
});
var Content = styled.div({
  display: 'block',
  position: 'relative'
}, function (_ref3) {
  var theme = _ref3.theme;
  return {
    fontSize: theme.typography.size.s2 - 1,
    background: theme.background.content
  };
}, function (_ref4) {
  var bordered = _ref4.bordered,
      theme = _ref4.theme;
  return bordered ? {
    borderRadius: "0 0 ".concat(theme.appBorderRadius - 1, "px ").concat(theme.appBorderRadius - 1, "px")
  } : {};
}, function (_ref5) {
  var absolute = _ref5.absolute,
      bordered = _ref5.bordered;
  return absolute ? _defineProperty({
    height: "calc(100% - ".concat(bordered ? 42 : 40, "px)"),
    position: 'absolute',
    left: 0 + (bordered ? 1 : 0),
    right: 0 + (bordered ? 1 : 0),
    bottom: 0 + (bordered ? 1 : 0),
    top: 40 + (bordered ? 1 : 0),
    overflow: 'auto'
  }, "& > *:first-child".concat(ignoreSsrWarning), {
    position: 'absolute',
    left: 0 + (bordered ? 1 : 0),
    right: 0 + (bordered ? 1 : 0),
    bottom: 0 + (bordered ? 1 : 0),
    top: 0 + (bordered ? 1 : 0),
    height: "calc(100% - ".concat(bordered ? 2 : 0, "px)"),
    overflow: 'auto'
  }) : {};
});
var VisuallyHidden = styled.div(function (_ref7) {
  var active = _ref7.active;
  return active ? {
    display: 'block'
  } : {
    display: 'none'
  };
});
export var TabWrapper = function TabWrapper(_ref8) {
  var active = _ref8.active,
      render = _ref8.render,
      children = _ref8.children;
  return /*#__PURE__*/React.createElement(VisuallyHidden, {
    active: active
  }, render ? render() : children);
};
TabWrapper.displayName = "TabWrapper";
export var panelProps = {};

var childrenToList = function childrenToList(children, selected) {
  return Children.toArray(children).map(function (_ref9, index) {
    var _ref9$props = _ref9.props,
        title = _ref9$props.title,
        id = _ref9$props.id,
        color = _ref9$props.color,
        childrenOfChild = _ref9$props.children;
    var content = Array.isArray(childrenOfChild) ? childrenOfChild[0] : childrenOfChild;
    return {
      active: selected ? id === selected : index === 0,
      title: title,
      id: id,
      color: color,
      render: typeof content === 'function' ? content : function (_ref10) {
        var active = _ref10.active,
            key = _ref10.key;
        return /*#__PURE__*/React.createElement(VisuallyHidden, {
          key: key,
          active: active,
          role: "tabpanel"
        }, content);
      }
    };
  });
};

export var Tabs = /*#__PURE__*/memo(function (_ref11) {
  var children = _ref11.children,
      selected = _ref11.selected,
      actions = _ref11.actions,
      absolute = _ref11.absolute,
      bordered = _ref11.bordered,
      tools = _ref11.tools,
      backgroundColor = _ref11.backgroundColor,
      htmlId = _ref11.id;
  var list = childrenToList(children, selected);
  return list.length ? /*#__PURE__*/React.createElement(Wrapper, {
    absolute: absolute,
    bordered: bordered,
    id: htmlId
  }, /*#__PURE__*/React.createElement(FlexBar, {
    border: true,
    backgroundColor: backgroundColor
  }, /*#__PURE__*/React.createElement(TabBar, {
    role: "tablist"
  }, list.map(function (_ref12) {
    var title = _ref12.title,
        id = _ref12.id,
        active = _ref12.active,
        color = _ref12.color;
    var tabTitle = typeof title === 'function' ? title() : title;
    return /*#__PURE__*/React.createElement(TabButton, {
      id: "tabbutton-".concat(sanitize(tabTitle)),
      className: "tabbutton ".concat(active ? 'tabbutton-active' : ''),
      type: "button",
      key: id,
      active: active,
      textColor: color,
      onClick: function onClick(e) {
        e.preventDefault();
        actions.onSelect(id);
      },
      role: "tab"
    }, tabTitle);
  })), tools ? /*#__PURE__*/React.createElement(Fragment, null, tools) : null), /*#__PURE__*/React.createElement(Content, {
    id: "panel-tab-content",
    bordered: bordered,
    absolute: absolute
  }, list.map(function (_ref13) {
    var id = _ref13.id,
        active = _ref13.active,
        render = _ref13.render;
    return render({
      key: id,
      active: active
    });
  }))) : /*#__PURE__*/React.createElement(Placeholder, null, /*#__PURE__*/React.createElement(Fragment, {
    key: "title"
  }, "Nothing found"));
});
Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
  id: null,
  children: null,
  tools: null,
  selected: null,
  absolute: false,
  bordered: false
};
export var TabsState = /*#__PURE__*/function (_Component) {
  _inherits(TabsState, _Component);

  var _super = _createSuper(TabsState);

  function TabsState(props) {
    var _this;

    _classCallCheck(this, TabsState);

    _this = _super.call(this, props);
    _this.handlers = {
      onSelect: function onSelect(id) {
        return _this.setState({
          selected: id
        });
      }
    };
    _this.state = {
      selected: props.initial
    };
    return _this;
  }

  _createClass(TabsState, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$bordered = _this$props.bordered,
          bordered = _this$props$bordered === void 0 ? false : _this$props$bordered,
          _this$props$absolute = _this$props.absolute,
          absolute = _this$props$absolute === void 0 ? false : _this$props$absolute,
          children = _this$props.children,
          backgroundColor = _this$props.backgroundColor;
      var selected = this.state.selected;
      return /*#__PURE__*/React.createElement(Tabs, {
        bordered: bordered,
        absolute: absolute,
        selected: selected,
        backgroundColor: backgroundColor,
        actions: this.handlers
      }, children);
    }
  }]);

  return TabsState;
}(Component);
TabsState.displayName = "TabsState";
TabsState.defaultProps = {
  children: [],
  initial: null,
  absolute: false,
  bordered: false,
  backgroundColor: ''
};