function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

import { css, keyframes } from '@emotion/core';
export const easing = {
  rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)'
};
const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
const glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`;
const float = keyframes`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`;
const jiggle = keyframes`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`;
const inlineGlow = /*#__PURE__*/css("animation:", glow, " 1.5s ease-in-out infinite;color:transparent;cursor:progress;;label:inlineGlow;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNzQiIsImZpbGUiOiIuLi8uLi9zcmMvYW5pbWF0aW9uLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGVhc2luZyA9IHtcbiAgcnViYmVyOiAnY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMzUsIDEuMDUpJyxcbn07XG5cbmNvbnN0IHJvdGF0ZTM2MCA9IGtleWZyYW1lc2Bcblx0ZnJvbSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0dG8ge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdH1cbmA7XG5cbmNvbnN0IGdsb3cgPSBrZXlmcmFtZXNgXG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICA1MCUgeyBvcGFjaXR5OiAuNDsgfVxuYDtcblxuY29uc3QgZmxvYXQgPSBrZXlmcmFtZXNgXG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsgfVxuYDtcblxuY29uc3QgamlnZ2xlID0ga2V5ZnJhbWVzYFxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7IH1cbiAgMTIuNSUsIDYyLjUlIHsgdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC00cHgsMCwwKTsgfVxuICAzNy41JSwgODcuNSUgeyAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsMCwwKTsgIH1cbmA7XG5cbmNvbnN0IGlubGluZUdsb3cgPSBjc3NgXG4gIGFuaW1hdGlvbjogJHtnbG93fSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG5gO1xuXG4vLyBob3ZlciAmIGFjdGl2ZSBzdGF0ZSBmb3IgbGlua3MgYW5kIGJ1dHRvbnNcbmNvbnN0IGhvdmVyYWJsZSA9IGNzc2BcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2Utb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTJweCwgMCk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbiA9IHtcbiAgcm90YXRlMzYwLFxuICBnbG93LFxuICBmbG9hdCxcbiAgamlnZ2xlLFxuICBpbmxpbmVHbG93LFxuICBob3ZlcmFibGUsXG59O1xuIl19 */")); // hover & active state for links and buttons

const hoverable = process.env.NODE_ENV === "production" ? {
  name: "1o7rzh8-hoverable",
  styles: "transition:all 150ms ease-out;transform:translate3d(0,0,0);&:hover{transform:translate3d(0,-2px,0);}&:active{transform:translate3d(0,0,0);};label:hoverable;"
} : {
  name: "1o7rzh8-hoverable",
  styles: "transition:all 150ms ease-out;transform:translate3d(0,0,0);&:hover{transform:translate3d(0,-2px,0);}&:active{transform:translate3d(0,0,0);};label:hoverable;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NxQiIsImZpbGUiOiIuLi8uLi9zcmMvYW5pbWF0aW9uLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGVhc2luZyA9IHtcbiAgcnViYmVyOiAnY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMzUsIDEuMDUpJyxcbn07XG5cbmNvbnN0IHJvdGF0ZTM2MCA9IGtleWZyYW1lc2Bcblx0ZnJvbSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0dG8ge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdH1cbmA7XG5cbmNvbnN0IGdsb3cgPSBrZXlmcmFtZXNgXG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICA1MCUgeyBvcGFjaXR5OiAuNDsgfVxuYDtcblxuY29uc3QgZmxvYXQgPSBrZXlmcmFtZXNgXG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsgfVxuYDtcblxuY29uc3QgamlnZ2xlID0ga2V5ZnJhbWVzYFxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7IH1cbiAgMTIuNSUsIDYyLjUlIHsgdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC00cHgsMCwwKTsgfVxuICAzNy41JSwgODcuNSUgeyAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsMCwwKTsgIH1cbmA7XG5cbmNvbnN0IGlubGluZUdsb3cgPSBjc3NgXG4gIGFuaW1hdGlvbjogJHtnbG93fSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG5gO1xuXG4vLyBob3ZlciAmIGFjdGl2ZSBzdGF0ZSBmb3IgbGlua3MgYW5kIGJ1dHRvbnNcbmNvbnN0IGhvdmVyYWJsZSA9IGNzc2BcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2Utb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTJweCwgMCk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbiA9IHtcbiAgcm90YXRlMzYwLFxuICBnbG93LFxuICBmbG9hdCxcbiAgamlnZ2xlLFxuICBpbmxpbmVHbG93LFxuICBob3ZlcmFibGUsXG59O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
export const animation = {
  rotate360,
  glow,
  float,
  jiggle,
  inlineGlow,
  hoverable
};