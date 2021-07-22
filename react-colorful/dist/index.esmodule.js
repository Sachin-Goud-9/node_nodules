import e,{useLayoutEffect as r,useEffect as t,useCallback as o,useRef as a,useState as l}from"react";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function s(e,r){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)r.indexOf(t=l[o])>=0||(a[t]=e[t]);return a}const c="undefined"!=typeof window?r:t;function u(e){const r=a(e);return t(()=>{r.current=e}),o(e=>r.current&&r.current(e),[])}const i=(e,r=0,t=1)=>e>t?t:e<r?r:e,d=e=>"touches"in e,f=(e,r)=>{const t=e.getBoundingClientRect(),o=d(r)?r.touches[0]:r;return{left:i((o.pageX-(t.left+window.pageXOffset))/t.width),top:i((o.pageY-(t.top+window.pageYOffset))/t.height)}},h=e=>{!d(e)&&e.preventDefault()},v=e.memo(r=>{let{onMove:t,onKey:i}=r,v=s(r,["onMove","onKey"]);const m=a(null),g=a(!1),[p,b]=l(!1),_=u(t),C=u(i),x=o(e=>{h(e),(d(e)?e.touches.length>0:e.buttons>0)&&m.current?_(f(m.current,e)):b(!1)},[_]),E=o(({nativeEvent:e})=>{const r=m.current;var t;h(e),t=e,g.current&&!d(t)||(g.current||(g.current=d(t)),0)||!r||(r.focus(),_(f(r,e)),b(!0))},[_]),H=o(e=>{const r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),C({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},[C]),M=o(()=>b(!1),[]),N=o(e=>{const r=e?window.addEventListener:window.removeEventListener;r(g.current?"touchmove":"mousemove",x),r(g.current?"touchend":"mouseup",M)},[x,M]);return c(()=>(N(p),()=>{p&&N(!1)}),[p,N]),e.createElement("div",n({},v,{className:"react-colorful__interactive",ref:m,onTouchStart:E,onMouseDown:E,onKeyDown:H,tabIndex:0,role:"slider"}))}),m=e=>e.filter(Boolean).join(" "),g=({className:r,color:t,left:o,top:a=.5})=>{const l=m(["react-colorful__pointer",r]);return e.createElement("div",{className:l,style:{top:100*a+"%",left:100*o+"%"}},e.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},p=(e,r=0,t=Math.pow(10,r))=>Math.round(t*e)/t,b={grad:.9,turn:360,rad:360/(2*Math.PI)},_=e=>("#"===e[0]&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}),C=(e,r="deg")=>Number(e)*(b[r]||1),x=e=>{const r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?H({h:C(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},E=x,H=({h:e,s:r,l:t,a:o})=>({h:e,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:o}),M=({h:e,s:r,v:t,a:o})=>{const a=(200-r)*t/100;return{h:p(e),s:p(a>0&&a<200?r*t/100/(a<=100?a:200-a)*100:0),l:p(a/2),a:p(o,2)}},N=e=>{const{h:r,s:t,l:o}=M(e);return`hsl(${r}, ${t}%, ${o}%)`},w=e=>{const{h:r,s:t,l:o,a}=M(e);return`hsla(${r}, ${t}%, ${o}%, ${a})`},$=({h:e,s:r,v:t,a:o})=>{e=e/360*6,r/=100,t/=100;const a=Math.floor(e),l=t*(1-r),n=t*(1-(e-a)*r),s=t*(1-(1-e+a)*r),c=a%6;return{r:p(255*[t,n,l,l,s,t][c]),g:p(255*[s,t,t,n,l,l][c]),b:p(255*[l,l,s,t,t,n][c]),a:p(o,2)}},y=e=>{const r=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?z({h:C(r[1],r[2]),s:Number(r[3]),v:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},q=y,k=e=>{const r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?j({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},O=k,I=e=>{const r=e.toString(16);return r.length<2?"0"+r:r},j=({r:e,g:r,b:t,a:o})=>{const a=Math.max(e,r,t),l=a-Math.min(e,r,t),n=l?a===e?(r-t)/l:a===r?2+(t-e)/l:4+(e-r)/l:0;return{h:p(60*(n<0?n+6:n)),s:p(a?l/a*100:0),v:p(a/255*100),a:o}},z=e=>({h:p(e.h),s:p(e.s),v:p(e.v),a:p(e.a,2)}),B=e.memo(({className:r,hue:t,onChange:o})=>{const a=m(["react-colorful__hue",r]);return e.createElement("div",{className:a},e.createElement(v,{onMove:e=>{o({h:360*e.left})},onKey:e=>{o({h:i(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":p(t)},e.createElement(g,{className:"react-colorful__hue-pointer",left:t/360,color:N({h:t,s:100,v:100,a:1})})))}),K=e.memo(({hsva:r,onChange:t})=>{const o={backgroundColor:N({h:r.h,s:100,v:100,a:1})};return e.createElement("div",{className:"react-colorful__saturation",style:o},e.createElement(v,{onMove:e=>{t({s:100*e.left,v:100-100*e.top})},onKey:e=>{t({s:i(r.s+100*e.left,0,100),v:i(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":`Saturation ${p(r.s)}%, Brightness ${p(r.v)}%`},e.createElement(g,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:N(r)})))}),A=(e,r)=>{if(e===r)return!0;for(const t in e)if(e[t]!==r[t])return!1;return!0},L=(e,r)=>e.replace(/\s/g,"")===r.replace(/\s/g,"");function D(e,r,n){const s=u(n),[c,i]=l(()=>e.toHsva(r)),d=a({color:r,hsva:c});t(()=>{if(!e.equal(r,d.current.color)){const t=e.toHsva(r);d.current={hsva:t,color:r},i(t)}},[r,e]),t(()=>{let r;A(c,d.current.hsva)||e.equal(r=e.fromHsva(c),d.current.color)||(d.current={hsva:c,color:r},s(r))},[c,e,s]);const f=o(e=>{i(r=>Object.assign({},r,e))},[]);return[c,f]}let F;const S=()=>F||("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0),P=e=>{F=e};let T;const X=()=>{c(()=>{if("undefined"!=typeof document&&!T){T=document.createElement("style"),T.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';const e=S();e&&T.setAttribute("nonce",e),document.head.appendChild(T)}},[])},Y=r=>{let{className:t,colorModel:o,color:a=o.defaultColor,onChange:l}=r,c=s(r,["className","colorModel","color","onChange"]);X();const[u,i]=D(o,a,l),d=m(["react-colorful",t]);return e.createElement("div",n({},c,{className:d}),e.createElement(K,{hsva:u,onChange:i}),e.createElement(B,{hue:u.h,onChange:i,className:"react-colorful__last-control"}))},R={defaultColor:"000",toHsva:e=>j(_(e)),fromHsva:e=>(({r:e,g:r,b:t})=>"#"+I(e)+I(r)+I(t))($(e)),equal:(e,r)=>e.toLowerCase()===r.toLowerCase()||A(_(e),_(r))},G=r=>e.createElement(Y,n({},r,{colorModel:R})),J=({className:r,hsva:t,onChange:o})=>{const a={backgroundImage:`linear-gradient(90deg, ${w(Object.assign({},t,{a:0}))}, ${w(Object.assign({},t,{a:1}))})`},l=m(["react-colorful__alpha",r]);return e.createElement("div",{className:l},e.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),e.createElement(v,{onMove:e=>{o({a:e.left})},onKey:e=>{o({a:i(t.a+e.left)})},"aria-label":"Alpha","aria-valuetext":`${p(100*t.a)}%`},e.createElement(g,{className:"react-colorful__alpha-pointer",left:t.a,color:w(t)})))},Q=r=>{let{className:t,colorModel:o,color:a=o.defaultColor,onChange:l}=r,c=s(r,["className","colorModel","color","onChange"]);X();const[u,i]=D(o,a,l),d=m(["react-colorful",t]);return e.createElement("div",n({},c,{className:d}),e.createElement(K,{hsva:u,onChange:i}),e.createElement(B,{hue:u.h,onChange:i}),e.createElement(J,{hsva:u,onChange:i,className:"react-colorful__last-control"}))},U={defaultColor:{h:0,s:0,l:0,a:1},toHsva:H,fromHsva:M,equal:A},V=r=>e.createElement(Q,n({},r,{colorModel:U})),W={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:x,fromHsva:w,equal:L},Z=r=>e.createElement(Q,n({},r,{colorModel:W})),ee={defaultColor:{h:0,s:0,l:0},toHsva:({h:e,s:r,l:t})=>H({h:e,s:r,l:t,a:1}),fromHsva:e=>(({h:e,s:r,l:t})=>({h:e,s:r,l:t}))(M(e)),equal:A},re=r=>e.createElement(Y,n({},r,{colorModel:ee})),te={defaultColor:"hsl(0, 0%, 0%)",toHsva:E,fromHsva:N,equal:L},oe=r=>e.createElement(Y,n({},r,{colorModel:te})),ae={defaultColor:{h:0,s:0,v:0,a:1},toHsva:e=>e,fromHsva:z,equal:A},le=r=>e.createElement(Q,n({},r,{colorModel:ae})),ne={defaultColor:"hsva(0, 0%, 0%, 1)",toHsva:y,fromHsva:e=>{const{h:r,s:t,v:o,a}=z(e);return`hsva(${r}, ${t}%, ${o}%, ${a})`},equal:L},se=r=>e.createElement(Q,n({},r,{colorModel:ne})),ce={defaultColor:{h:0,s:0,v:0},toHsva:({h:e,s:r,v:t})=>({h:e,s:r,v:t,a:1}),fromHsva:e=>{const{h:r,s:t,v:o}=z(e);return{h:r,s:t,v:o}},equal:A},ue=r=>e.createElement(Y,n({},r,{colorModel:ce})),ie={defaultColor:"hsv(0, 0%, 0%)",toHsva:q,fromHsva:e=>{const{h:r,s:t,v:o}=z(e);return`hsv(${r}, ${t}%, ${o}%)`},equal:L},de=r=>e.createElement(Y,n({},r,{colorModel:ie})),fe={defaultColor:{r:0,g:0,b:0,a:1},toHsva:j,fromHsva:$,equal:A},he=r=>e.createElement(Q,n({},r,{colorModel:fe})),ve={defaultColor:"rgba(0, 0, 0, 1)",toHsva:k,fromHsva:e=>{const{r,g:t,b:o,a}=$(e);return`rgba(${r}, ${t}, ${o}, ${a})`},equal:L},me=r=>e.createElement(Q,n({},r,{colorModel:ve})),ge={defaultColor:{r:0,g:0,b:0},toHsva:({r:e,g:r,b:t})=>j({r:e,g:r,b:t,a:1}),fromHsva:e=>(({r:e,g:r,b:t})=>({r:e,g:r,b:t}))($(e)),equal:A},pe=r=>e.createElement(Y,n({},r,{colorModel:ge})),be={defaultColor:"rgb(0, 0, 0)",toHsva:O,fromHsva:e=>{const{r,g:t,b:o}=$(e);return`rgb(${r}, ${t}, ${o})`},equal:L},_e=r=>e.createElement(Y,n({},r,{colorModel:be})),Ce=/^#?[0-9A-F]{3}$/i,xe=/^#?[0-9A-F]{6}$/i,Ee=e=>xe.test(e)||Ce.test(e),He=e=>e.replace(/([^0-9A-F]+)/gi,"").substr(0,6),Me=r=>{const{color:a="",onChange:c,onBlur:i,prefixed:d}=r,f=s(r,["color","onChange","onBlur","prefixed"]),[h,v]=l(()=>He(a)),m=u(c),g=u(i),p=o(e=>{const r=He(e.target.value);v(r),Ee(r)&&m("#"+r)},[m]),b=o(e=>{Ee(e.target.value)||v(He(a)),g(e)},[a,g]);return t(()=>{v(He(a))},[a]),e.createElement("input",n({},f,{value:(d?"#":"")+h,spellCheck:"false",onChange:p,onBlur:b}))};export{Me as HexColorInput,G as HexColorPicker,re as HslColorPicker,oe as HslStringColorPicker,V as HslaColorPicker,Z as HslaStringColorPicker,ue as HsvColorPicker,de as HsvStringColorPicker,le as HsvaColorPicker,se as HsvaStringColorPicker,pe as RgbColorPicker,_e as RgbStringColorPicker,he as RgbaColorPicker,me as RgbaStringColorPicker,P as setNonce};
//# sourceMappingURL=index.esmodule.js.map
