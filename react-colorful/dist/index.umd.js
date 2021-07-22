!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],r):r((e||self)["react-colorful"]={},e.react)}(this,function(e,r){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(r);function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r.indexOf(t=a[o])>=0||(n[t]=e[t]);return n}var l="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function u(e){var t=r.useRef(e);return r.useEffect(function(){t.current=e}),r.useCallback(function(e){return t.current&&t.current(e)},[])}var c,f=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},s=function(e){return"touches"in e},i=function(e,r){var t=e.getBoundingClientRect(),o=s(r)?r.touches[0]:r;return{left:f((o.pageX-(t.left+window.pageXOffset))/t.width),top:f((o.pageY-(t.top+window.pageYOffset))/t.height)}},d=function(e){!s(e)&&e.preventDefault()},v=o.default.memo(function(e){var t=e.onMove,c=e.onKey,f=a(e,["onMove","onKey"]),v=r.useRef(null),h=r.useRef(!1),g=r.useState(!1),m=g[0],p=g[1],b=u(t),_=u(c),C=r.useCallback(function(e){d(e),(s(e)?e.touches.length>0:e.buttons>0)&&v.current?b(i(v.current,e)):p(!1)},[b]),E=r.useCallback(function(e){var r,t=e.nativeEvent,o=v.current;d(t),r=t,h.current&&!s(r)||(h.current||(h.current=s(r)),0)||!o||(o.focus(),b(i(o,t)),p(!0))},[b]),H=r.useCallback(function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),_({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},[_]),x=r.useCallback(function(){return p(!1)},[]),k=r.useCallback(function(e){var r=e?window.addEventListener:window.removeEventListener;r(h.current?"touchmove":"mousemove",C),r(h.current?"touchend":"mouseup",x)},[C,x]);return l(function(){return k(m),function(){m&&k(!1)}},[m,k]),o.default.createElement("div",n({},f,{className:"react-colorful__interactive",ref:v,onTouchStart:E,onMouseDown:E,onKeyDown:H,tabIndex:0,role:"slider"}))}),h=function(e){return e.filter(Boolean).join(" ")},g=function(e){var r=e.color,t=e.left,n=e.top,a=void 0===n?.5:n,l=h(["react-colorful__pointer",e.className]);return o.default.createElement("div",{className:l,style:{top:100*a+"%",left:100*t+"%"}},o.default.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},m=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},p={grad:.9,turn:360,rad:360/(2*Math.PI)},b=function(e){return"#"===e[0]&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},_=function(e,r){return void 0===r&&(r="deg"),Number(e)*(p[r]||1)},C=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?H({h:_(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},E=C,H=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},x=function(e){var r=e.s,t=e.v,o=e.a,n=(200-r)*t/100;return{h:m(e.h),s:m(n>0&&n<200?r*t/100/(n<=100?n:200-n)*100:0),l:m(n/2),a:m(o,2)}},k=function(e){var r=x(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},N=function(e){var r=x(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},M=function(e){var r=e.h,t=e.s,o=e.v,n=e.a;r=r/360*6,t/=100,o/=100;var a=Math.floor(r),l=o*(1-t),u=o*(1-(r-a)*t),c=o*(1-(1-r+a)*t),f=a%6;return{r:m(255*[o,u,l,l,c,o][f]),g:m(255*[c,o,o,u,l,l][f]),b:m(255*[l,l,c,o,o,u][f]),a:m(n,2)}},w=function(e){var r=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?O({h:_(r[1],r[2]),s:Number(r[3]),v:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},y=w,q=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?I({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},P=q,S=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},I=function(e){var r=e.r,t=e.g,o=e.b,n=e.a,a=Math.max(r,t,o),l=a-Math.min(r,t,o),u=l?a===r?(t-o)/l:a===t?2+(o-r)/l:4+(r-t)/l:0;return{h:m(60*(u<0?u+6:u)),s:m(a?l/a*100:0),v:m(a/255*100),a:n}},O=function(e){return{h:m(e.h),s:m(e.s),v:m(e.v),a:m(e.a,2)}},j=o.default.memo(function(e){var r=e.hue,t=e.onChange,n=h(["react-colorful__hue",e.className]);return o.default.createElement("div",{className:n},o.default.createElement(v,{onMove:function(e){t({h:360*e.left})},onKey:function(e){t({h:f(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":m(r)},o.default.createElement(g,{className:"react-colorful__hue-pointer",left:r/360,color:k({h:r,s:100,v:100,a:1})})))}),R=o.default.memo(function(e){var r=e.hsva,t=e.onChange,n={backgroundColor:k({h:r.h,s:100,v:100,a:1})};return o.default.createElement("div",{className:"react-colorful__saturation",style:n},o.default.createElement(v,{onMove:function(e){t({s:100*e.left,v:100-100*e.top})},onKey:function(e){t({s:f(r.s+100*e.left,0,100),v:f(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+m(r.s)+"%, Brightness "+m(r.v)+"%"},o.default.createElement(g,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:k(r)})))}),z=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},B=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")};function K(e,t,o){var n=u(o),a=r.useState(function(){return e.toHsva(t)}),l=a[0],c=a[1],f=r.useRef({color:t,hsva:l});r.useEffect(function(){if(!e.equal(t,f.current.color)){var r=e.toHsva(t);f.current={hsva:r,color:t},c(r)}},[t,e]),r.useEffect(function(){var r;z(l,f.current.hsva)||e.equal(r=e.fromHsva(l),f.current.color)||(f.current={hsva:l,color:r},n(r))},[l,e,n]);var s=r.useCallback(function(e){c(function(r){return Object.assign({},r,e)})},[]);return[l,s]}var L,A=function(){return c||("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0)},D=function(){l(function(){if("undefined"!=typeof document&&!L){(L=document.createElement("style")).innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';var e=A();e&&L.setAttribute("nonce",e),document.head.appendChild(L)}},[])},T=function(e){var r=e.className,t=e.colorModel,l=e.color,u=void 0===l?t.defaultColor:l,c=e.onChange,f=a(e,["className","colorModel","color","onChange"]);D();var s=K(t,u,c),i=s[0],d=s[1],v=h(["react-colorful",r]);return o.default.createElement("div",n({},f,{className:v}),o.default.createElement(R,{hsva:i,onChange:d}),o.default.createElement(j,{hue:i.h,onChange:d,className:"react-colorful__last-control"}))},F={defaultColor:"000",toHsva:function(e){return I(b(e))},fromHsva:function(e){return t=(r=M(e)).g,o=r.b,"#"+S(r.r)+S(t)+S(o);var r,t,o},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||z(b(e),b(r))}},X=function(e){var r=e.className,t=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+N(Object.assign({},t,{a:0}))+", "+N(Object.assign({},t,{a:1}))+")"},l=h(["react-colorful__alpha",r]);return o.default.createElement("div",{className:l},o.default.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),o.default.createElement(v,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:f(t.a+e.left)})},"aria-label":"Alpha","aria-valuetext":m(100*t.a)+"%"},o.default.createElement(g,{className:"react-colorful__alpha-pointer",left:t.a,color:N(t)})))},Y=function(e){var r=e.className,t=e.colorModel,l=e.color,u=void 0===l?t.defaultColor:l,c=e.onChange,f=a(e,["className","colorModel","color","onChange"]);D();var s=K(t,u,c),i=s[0],d=s[1],v=h(["react-colorful",r]);return o.default.createElement("div",n({},f,{className:v}),o.default.createElement(R,{hsva:i,onChange:d}),o.default.createElement(j,{hue:i.h,onChange:d}),o.default.createElement(X,{hsva:i,onChange:d,className:"react-colorful__last-control"}))},$={defaultColor:{h:0,s:0,l:0,a:1},toHsva:H,fromHsva:x,equal:z},G={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:C,fromHsva:N,equal:B},J={defaultColor:{h:0,s:0,l:0},toHsva:function(e){return H({h:e.h,s:e.s,l:e.l,a:1})},fromHsva:function(e){return{h:(r=x(e)).h,s:r.s,l:r.l};var r},equal:z},Q={defaultColor:"hsl(0, 0%, 0%)",toHsva:E,fromHsva:k,equal:B},U={defaultColor:{h:0,s:0,v:0,a:1},toHsva:function(e){return e},fromHsva:O,equal:z},V={defaultColor:"hsva(0, 0%, 0%, 1)",toHsva:w,fromHsva:function(e){var r=O(e);return"hsva("+r.h+", "+r.s+"%, "+r.v+"%, "+r.a+")"},equal:B},W={defaultColor:{h:0,s:0,v:0},toHsva:function(e){return{h:e.h,s:e.s,v:e.v,a:1}},fromHsva:function(e){var r=O(e);return{h:r.h,s:r.s,v:r.v}},equal:z},Z={defaultColor:"hsv(0, 0%, 0%)",toHsva:y,fromHsva:function(e){var r=O(e);return"hsv("+r.h+", "+r.s+"%, "+r.v+"%)"},equal:B},ee={defaultColor:{r:0,g:0,b:0,a:1},toHsva:I,fromHsva:M,equal:z},re={defaultColor:"rgba(0, 0, 0, 1)",toHsva:q,fromHsva:function(e){var r=M(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:B},te={defaultColor:{r:0,g:0,b:0},toHsva:function(e){return I({r:e.r,g:e.g,b:e.b,a:1})},fromHsva:function(e){return{r:(r=M(e)).r,g:r.g,b:r.b};var r},equal:z},oe={defaultColor:"rgb(0, 0, 0)",toHsva:P,fromHsva:function(e){var r=M(e);return"rgb("+r.r+", "+r.g+", "+r.b+")"},equal:B},ne=/^#?[0-9A-F]{3}$/i,ae=/^#?[0-9A-F]{6}$/i,le=function(e){return ae.test(e)||ne.test(e)},ue=function(e){return e.replace(/([^0-9A-F]+)/gi,"").substr(0,6)};e.HexColorInput=function(e){var t=e.color,l=void 0===t?"":t,c=e.onChange,f=e.onBlur,s=e.prefixed,i=a(e,["color","onChange","onBlur","prefixed"]),d=r.useState(function(){return ue(l)}),v=d[0],h=d[1],g=u(c),m=u(f),p=r.useCallback(function(e){var r=ue(e.target.value);h(r),le(r)&&g("#"+r)},[g]),b=r.useCallback(function(e){le(e.target.value)||h(ue(l)),m(e)},[l,m]);return r.useEffect(function(){h(ue(l))},[l]),o.default.createElement("input",n({},i,{value:(s?"#":"")+v,spellCheck:"false",onChange:p,onBlur:b}))},e.HexColorPicker=function(e){return o.default.createElement(T,n({},e,{colorModel:F}))},e.HslColorPicker=function(e){return o.default.createElement(T,n({},e,{colorModel:J}))},e.HslStringColorPicker=function(e){return o.default.createElement(T,n({},e,{colorModel:Q}))},e.HslaColorPicker=function(e){return o.default.createElement(Y,n({},e,{colorModel:$}))},e.HslaStringColorPicker=function(e){return o.default.createElement(Y,n({},e,{colorModel:G}))},e.HsvColorPicker=function(e){return o.default.createElement(T,n({},e,{colorModel:W}))},e.HsvStringColorPicker=function(e){return o.default.createElement(T,n({},e,{colorModel:Z}))},e.HsvaColorPicker=function(e){return o.default.createElement(Y,n({},e,{colorModel:U}))},e.HsvaStringColorPicker=function(e){return o.default.createElement(Y,n({},e,{colorModel:V}))},e.RgbColorPicker=function(e){return o.default.createElement(T,n({},e,{colorModel:te}))},e.RgbStringColorPicker=function(e){return o.default.createElement(T,n({},e,{colorModel:oe}))},e.RgbaColorPicker=function(e){return o.default.createElement(Y,n({},e,{colorModel:ee}))},e.RgbaStringColorPicker=function(e){return o.default.createElement(Y,n({},e,{colorModel:re}))},e.setNonce=function(e){c=e}});
//# sourceMappingURL=index.umd.js.map
