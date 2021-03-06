import "core-js/modules/es.object.assign.js";
import Draggable from 'react-draggable';
import { styled } from '@storybook/theming';
var Handle = styled.div(function (_ref) {
  var theme = _ref.theme,
      isDragging = _ref.isDragging;
  return {
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: isDragging ? theme.color.secondary : theme.appBorderColor,
    overflow: 'hidden',
    transition: 'color 0.2s linear, background-position 0.2s linear, background-size 0.2s linear, background 0.2s linear',
    '&:hover': {
      color: theme.color.secondary
    }
  };
}, function (_ref2) {
  var axis = _ref2.axis;
  return {
    cursor: axis === 'x' ? 'col-resize' : 'row-resize'
  };
}, function (_ref3) {
  var theme = _ref3.theme,
      axis = _ref3.axis;
  return axis === 'x' ? {
    height: '100%',
    width: theme.layoutMargin,
    marginLeft: 0
  } : {
    height: theme.layoutMargin,
    width: '100%',
    marginTop: 0
  };
}, function (_ref4) {
  var axis = _ref4.axis,
      isDragging = _ref4.isDragging;

  if (axis === 'y') {
    var style = {
      backgroundImage: "radial-gradient(at center center,rgba(0,0,0,0.2) 0%,transparent 70%,transparent 100%)",
      backgroundSize: '100% 50px',
      backgroundPosition: '50% 0',
      backgroundRepeat: 'no-repeat'
    };
    return isDragging ? style : Object.assign({}, style, {
      backgroundPosition: '50% 10px',
      '&:hover': style
    });
  }

  if (axis === 'x') {
    var _style = {
      backgroundImage: "radial-gradient(at center center,rgba(0,0,0,0.2) 0%,transparent 70%,transparent 100%)",
      backgroundSize: '50px 100%',
      backgroundPosition: '0 50%',
      backgroundRepeat: 'no-repeat'
    };
    return isDragging ? _style : Object.assign({}, _style, {
      backgroundPosition: '10px 50%',
      '&:hover': _style
    });
  }

  return {};
});
export { Draggable, Handle };