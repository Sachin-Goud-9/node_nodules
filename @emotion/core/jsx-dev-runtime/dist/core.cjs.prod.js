"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("@babel/runtime/helpers/inheritsLoose"), require("react"), require("@emotion/cache");

var emotionElement = require("../../dist/emotion-element-0e1e5002.cjs.prod.js");

require("@emotion/utils"), require("@emotion/serialize");

var ReactJSXRuntimeDev = require("react/jsx-dev-runtime"), Fragment = ReactJSXRuntimeDev.Fragment;

function jsxDEV(type, props, key, isStaticChildren, source, self) {
  return emotionElement.hasOwnProperty.call(props, "css") ? ReactJSXRuntimeDev.jsxDEV(emotionElement.Emotion, emotionElement.createEmotionProps(type, props), key, isStaticChildren, source, self) : ReactJSXRuntimeDev.jsxDEV(type, props, key, isStaticChildren, source, self);
}

exports.Fragment = Fragment, exports.jsxDEV = jsxDEV;
