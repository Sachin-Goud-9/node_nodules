import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';
import _extends from '@babel/runtime/helpers/esm/extends';
import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Popper, Manager, Reference } from 'react-popper';

var TooltipContext = /*#__PURE__*/React.createContext({}); // eslint-disable-next-line @typescript-eslint/no-explicit-any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var callAll = function callAll() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fns.forEach(function (fn) {
      return fn && fn.apply(void 0, args);
    });
  };
};
var noop = function noop() {// do nothing
};
var canUseDOM = function canUseDOM() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
};
var setRef = function setRef(ref, node) {
  if (typeof ref === 'function') {
    return ref(node);
  } else if (ref != null) {
    ref.current = node;
  }
};

var Tooltip = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Tooltip, _Component);

  function Tooltip() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.observer = void 0;
    _this.tooltipRef = void 0;

    _this.handleOutsideClick = function (event) {
      if (_this.tooltipRef && !_this.tooltipRef.contains(event.target)) {
        var parentOutsideClickHandler = _this.context.parentOutsideClickHandler;
        var _this$props = _this.props,
            hideTooltip = _this$props.hideTooltip,
            clearScheduled = _this$props.clearScheduled;
        clearScheduled();
        hideTooltip();

        if (parentOutsideClickHandler) {
          parentOutsideClickHandler(event);
        }
      }
    };

    _this.handleOutsideRightClick = function (event) {
      if (_this.tooltipRef && !_this.tooltipRef.contains(event.target)) {
        var parentOutsideRightClickHandler = _this.context.parentOutsideRightClickHandler;
        var _this$props2 = _this.props,
            hideTooltip = _this$props2.hideTooltip,
            clearScheduled = _this$props2.clearScheduled;
        clearScheduled();
        hideTooltip();

        if (parentOutsideRightClickHandler) {
          parentOutsideRightClickHandler(event);
        }
      }
    };

    _this.addOutsideClickHandler = function () {
      document.body.addEventListener('touchend', _this.handleOutsideClick);
      document.body.addEventListener('click', _this.handleOutsideClick);
    };

    _this.removeOutsideClickHandler = function () {
      document.body.removeEventListener('touchend', _this.handleOutsideClick);
      document.body.removeEventListener('click', _this.handleOutsideClick);
    };

    _this.addOutsideRightClickHandler = function () {
      return document.body.addEventListener('contextmenu', _this.handleOutsideRightClick);
    };

    _this.removeOutsideRightClickHandler = function () {
      return document.body.removeEventListener('contextmenu', _this.handleOutsideRightClick);
    };

    _this.getTooltipRef = function (node) {
      _this.tooltipRef = node;
      setRef(_this.props.innerRef, node);
    };

    _this.getArrowProps = function (props) {
      if (props === void 0) {
        props = {};
      }

      return _extends({}, props, {
        style: _extends({}, props.style, _this.props.arrowProps.style)
      });
    };

    _this.getTooltipProps = function (props) {
      if (props === void 0) {
        props = {};
      }

      return _extends({}, props, _this.isTriggeredBy('hover') && {
        onMouseEnter: callAll(_this.props.clearScheduled, props.onMouseEnter),
        onMouseLeave: callAll(_this.props.hideTooltip, props.onMouseLeave)
      }, {
        style: _extends({}, props.style, _this.props.style)
      });
    };

    _this.contextValue = {
      isParentNoneTriggered: _this.props.trigger === 'none',
      addParentOutsideClickHandler: _this.addOutsideClickHandler,
      addParentOutsideRightClickHandler: _this.addOutsideRightClickHandler,
      parentOutsideClickHandler: _this.handleOutsideClick,
      parentOutsideRightClickHandler: _this.handleOutsideRightClick,
      removeParentOutsideClickHandler: _this.removeOutsideClickHandler,
      removeParentOutsideRightClickHandler: _this.removeOutsideRightClickHandler
    };
    return _this;
  }

  var _proto = Tooltip.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var observer = this.observer = new MutationObserver(function () {
      _this2.props.update();
    });
    observer.observe(this.tooltipRef, this.props.mutationObserverOptions);

    if (this.isTriggeredBy('hover') || this.isTriggeredBy('click') || this.isTriggeredBy('right-click')) {
      var _this$context = this.context,
          removeParentOutsideClickHandler = _this$context.removeParentOutsideClickHandler,
          removeParentOutsideRightClickHandler = _this$context.removeParentOutsideRightClickHandler;
      this.addOutsideClickHandler();
      this.addOutsideRightClickHandler();

      if (removeParentOutsideClickHandler) {
        removeParentOutsideClickHandler();
      }

      if (removeParentOutsideRightClickHandler) {
        removeParentOutsideRightClickHandler();
      }
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.props.closeOnReferenceHidden && this.props.isReferenceHidden) {
      this.props.hideTooltip();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }

    if (this.isTriggeredBy('hover') || this.isTriggeredBy('click') || this.isTriggeredBy('right-click')) {
      var _this$context2 = this.context,
          isParentNoneTriggered = _this$context2.isParentNoneTriggered,
          addParentOutsideClickHandler = _this$context2.addParentOutsideClickHandler,
          addParentOutsideRightClickHandler = _this$context2.addParentOutsideRightClickHandler;
      this.removeOutsideClickHandler();
      this.removeOutsideRightClickHandler();
      this.handleOutsideClick = undefined;
      this.handleOutsideRightClick = undefined;

      if (!isParentNoneTriggered && addParentOutsideClickHandler) {
        addParentOutsideClickHandler();
      }

      if (!isParentNoneTriggered && addParentOutsideRightClickHandler) {
        addParentOutsideRightClickHandler();
      }
    }
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        arrowProps = _this$props3.arrowProps,
        placement = _this$props3.placement,
        tooltip = _this$props3.tooltip;
    return /*#__PURE__*/React.createElement(TooltipContext.Provider, {
      value: this.contextValue
    }, tooltip({
      arrowRef: arrowProps.ref,
      getArrowProps: this.getArrowProps,
      getTooltipProps: this.getTooltipProps,
      placement: placement,
      tooltipRef: this.getTooltipRef
    }));
  };

  _proto.isTriggeredBy = function isTriggeredBy(event) {
    var trigger = this.props.trigger;
    return trigger === event || Array.isArray(trigger) && trigger.includes(event);
  };

  return Tooltip;
}(Component);

Tooltip.contextType = TooltipContext;

var DEFAULT_MUTATION_OBSERVER_CONFIG = {
  childList: true,
  subtree: true
};

var TooltipTrigger = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TooltipTrigger, _Component);

  function TooltipTrigger() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      tooltipShown: _this.props.defaultTooltipShown
    };
    _this.hideTimeout = void 0;
    _this.showTimeout = void 0;
    _this.popperOffset = void 0;

    _this.setTooltipState = function (state) {
      var cb = function cb() {
        return _this.props.onVisibilityChange(state.tooltipShown);
      };

      _this.isControlled() ? cb() : _this.setState(state, cb);
    };

    _this.clearScheduled = function () {
      clearTimeout(_this.hideTimeout);
      clearTimeout(_this.showTimeout);
    };

    _this.showTooltip = function (_ref) {
      var pageX = _ref.pageX,
          pageY = _ref.pageY;

      _this.clearScheduled();

      var state = {
        tooltipShown: true
      };

      if (_this.props.followCursor) {
        state = _extends({}, state, {
          pageX: pageX,
          pageY: pageY
        });
      }

      _this.showTimeout = window.setTimeout(function () {
        return _this.setTooltipState(state);
      }, _this.props.delayShow);
    };

    _this.hideTooltip = function () {
      _this.clearScheduled();

      _this.hideTimeout = window.setTimeout(function () {
        return _this.setTooltipState({
          tooltipShown: false
        });
      }, _this.props.delayHide);
    };

    _this.toggleTooltip = function (_ref2) {
      var pageX = _ref2.pageX,
          pageY = _ref2.pageY;
      var action = _this.getState() ? 'hideTooltip' : 'showTooltip';

      _this[action]({
        pageX: pageX,
        pageY: pageY
      });
    };

    _this.clickToggle = function (event) {
      event.preventDefault();
      var pageX = event.pageX,
          pageY = event.pageY;
      var action = _this.props.followCursor ? 'showTooltip' : 'toggleTooltip';

      _this[action]({
        pageX: pageX,
        pageY: pageY
      });
    };

    _this.contextMenuToggle = function (event) {
      event.preventDefault();
      var pageX = event.pageX,
          pageY = event.pageY;
      var action = _this.props.followCursor ? 'showTooltip' : 'toggleTooltip';

      _this[action]({
        pageX: pageX,
        pageY: pageY
      });
    };

    _this.getTriggerProps = function (props) {
      if (props === void 0) {
        props = {};
      }

      return _extends({}, props, _this.isTriggeredBy('click') && {
        onClick: callAll(_this.clickToggle, props.onClick),
        onTouchEnd: callAll(_this.clickToggle, props.onTouchEnd)
      }, _this.isTriggeredBy('right-click') && {
        onContextMenu: callAll(_this.contextMenuToggle, props.onContextMenu)
      }, _this.isTriggeredBy('hover') && _extends({
        onMouseEnter: callAll(_this.showTooltip, props.onMouseEnter),
        onMouseLeave: callAll(_this.hideTooltip, props.onMouseLeave)
      }, _this.props.followCursor && {
        onMouseMove: callAll(_this.showTooltip, props.onMouseMove)
      }), _this.isTriggeredBy('focus') && {
        onFocus: callAll(_this.showTooltip, props.onFocus),
        onBlur: callAll(_this.hideTooltip, props.onBlur)
      });
    };

    return _this;
  }

  var _proto = TooltipTrigger.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearScheduled();
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        tooltip = _this$props.tooltip,
        placement = _this$props.placement,
        trigger = _this$props.trigger,
        getTriggerRef = _this$props.getTriggerRef,
        modifiers = _this$props.modifiers,
        closeOnReferenceHidden = _this$props.closeOnReferenceHidden,
        usePortal = _this$props.usePortal,
        portalContainer = _this$props.portalContainer,
        followCursor = _this$props.followCursor,
        getTooltipRef = _this$props.getTooltipRef,
        mutationObserverOptions = _this$props.mutationObserverOptions,
        restProps = _objectWithoutPropertiesLoose(_this$props, ["children", "tooltip", "placement", "trigger", "getTriggerRef", "modifiers", "closeOnReferenceHidden", "usePortal", "portalContainer", "followCursor", "getTooltipRef", "mutationObserverOptions"]);

    var popper = /*#__PURE__*/React.createElement(Popper, _extends({
      innerRef: getTooltipRef,
      placement: placement,
      modifiers: [{
        name: 'followCursor',
        enabled: followCursor,
        phase: 'main',
        fn: function fn(data) {
          _this2.popperOffset = data.state.rects.popper;
        }
      }].concat(modifiers)
    }, restProps), function (_ref3) {
      var ref = _ref3.ref,
          style = _ref3.style,
          placement = _ref3.placement,
          arrowProps = _ref3.arrowProps,
          isReferenceHidden = _ref3.isReferenceHidden,
          update = _ref3.update;

      if (followCursor && _this2.popperOffset) {
        var _this2$state = _this2.state,
            pageX = _this2$state.pageX,
            pageY = _this2$state.pageY;
        var _this2$popperOffset = _this2.popperOffset,
            width = _this2$popperOffset.width,
            height = _this2$popperOffset.height;
        var x = pageX + width > window.pageXOffset + document.body.offsetWidth ? pageX - width : pageX;
        var y = pageY + height > window.pageYOffset + document.body.offsetHeight ? pageY - height : pageY;
        style.transform = "translate3d(" + x + "px, " + y + "px, 0";
      }

      return /*#__PURE__*/React.createElement(Tooltip, _extends({
        arrowProps: arrowProps,
        closeOnReferenceHidden: closeOnReferenceHidden,
        isReferenceHidden: isReferenceHidden,
        placement: placement,
        update: update,
        style: style,
        tooltip: tooltip,
        trigger: trigger,
        mutationObserverOptions: mutationObserverOptions
      }, {
        clearScheduled: _this2.clearScheduled,
        hideTooltip: _this2.hideTooltip,
        innerRef: ref
      }));
    });
    return /*#__PURE__*/React.createElement(Manager, null, /*#__PURE__*/React.createElement(Reference, {
      innerRef: getTriggerRef
    }, function (_ref4) {
      var ref = _ref4.ref;
      return children({
        getTriggerProps: _this2.getTriggerProps,
        triggerRef: ref
      });
    }), this.getState() && (usePortal ? /*#__PURE__*/createPortal(popper, portalContainer) : popper));
  };

  _proto.isControlled = function isControlled() {
    return this.props.tooltipShown !== undefined;
  };

  _proto.getState = function getState() {
    return this.isControlled() ? this.props.tooltipShown : this.state.tooltipShown;
  };

  _proto.isTriggeredBy = function isTriggeredBy(event) {
    var trigger = this.props.trigger;
    return trigger === event || Array.isArray(trigger) && trigger.includes(event);
  };

  return TooltipTrigger;
}(Component);

TooltipTrigger.defaultProps = {
  closeOnReferenceHidden: true,
  defaultTooltipShown: false,
  delayHide: 0,
  delayShow: 0,
  followCursor: false,
  onVisibilityChange: noop,
  placement: 'right',
  portalContainer: canUseDOM() ? document.body : null,
  trigger: 'hover',
  usePortal: canUseDOM(),
  mutationObserverOptions: DEFAULT_MUTATION_OBSERVER_CONFIG,
  modifiers: []
};

export default TooltipTrigger;
//# sourceMappingURL=react-popper-tooltip.js.map
