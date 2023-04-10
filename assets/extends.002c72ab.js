import{r as l,R as u}from"./index.3e0bc316.js";var o={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=l.exports,x=Symbol.for("react.element"),m=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,b=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,n){var r,s={},f=null,c=null;n!==void 0&&(f=""+n),e.key!==void 0&&(f=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)v.call(e,r)&&!j.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:x,type:t,key:f,ref:c,props:s,_owner:b.current}}a.Fragment=m;a.jsx=p;a.jsxs=p;(function(t){t.exports=a})(o);const d=o.exports.Fragment,F=o.exports.jsx,R=o.exports.jsxs;var E=function(e){return e()},_=u["useInsertionEffect"]?u["useInsertionEffect"]:!1,g=_||E,h=_||l.exports.useLayoutEffect;function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}export{d as F,i as _,R as a,g as b,F as j,h as u};
//# sourceMappingURL=extends.002c72ab.js.map
