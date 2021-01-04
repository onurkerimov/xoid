/*! For license information please see 1fe9390e.e6da00bb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{69:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return s}));var n=t(2),o=t(7),u=(t(92),t(91)),c={id:"subscribe",title:"subscribe"},i={unversionedId:"api/subscribe",id:"api/subscribe",isDocsHomePage:!1,title:"subscribe",description:"`",source:"@site/../docs/api/subscribe.md",slug:"/api/subscribe",permalink:"/docs/api/subscribe",editUrl:"https://github.com/onurkerimov/xoid/blob/master/website/../docs/api/subscribe.md",version:"current",lastUpdatedAt:1609188618,sidebar:"docs",previous:{title:"use",permalink:"/docs/api/use"},next:{title:"useStore",permalink:"/docs/api/usestore"}},a=[],l={rightToc:a};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(u.b)("p",null,Object(u.b)("inlineCode",{parentName:"p"},"import { subscribe } from 'xoid'")),Object(u.b)("p",null,"Subscribes to a store, or a store member. Returns an unsubscribe function."),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { create, set, subscribe } from 'xoid';\n\nconst store = create(0);\nsetInterval(() => set(store, (s) => s + 1), 1000);\n\nconst unsubscribe = subscribe(store, (value) => {\n  console.log('elapsed seconds: ', value);\n});\n\nsetTimeout(unsubscribe, 10000);\n")),Object(u.b)("p",null,"It will throw an error when it's applied to non-store values:"),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"subscribe({}); // throws\n")))}s.isMDXComponent=!0},91:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return y}));var n=t(0),o=t.n(n);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,u=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(t),b=n,y=f["".concat(c,".").concat(b)]||f[b]||p[b]||u;return t?o.a.createElement(y,i(i({ref:r},l),{},{components:t})):o.a.createElement(y,i({ref:r},l))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var u=t.length,c=new Array(u);c[0]=b;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<u;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},92:function(e,r,t){"use strict";e.exports=t(93)},93:function(e,r,t){"use strict";var n=t(94),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||h}function j(){}function w(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var S=w.prototype=new j;S.constructor=w,n(S,g.prototype),S.isPureReactComponent=!0;var k={current:null},P=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,t){var n,o={},c=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)P.call(r,n)&&!x.hasOwnProperty(n)&&(o[n]=r[n]);var a=arguments.length-2;if(1===a)o.children=t;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var C=/\/+/g,$=[];function R(e,r,t,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function N(e,r,t,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case u:case c:i=!0}}if(i)return t(n,e,""===r?"."+I(e,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=r+I(o=e[a],a);i+=N(o,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),a=0;!(o=e.next()).done;)i+=N(o=o.value,l=r+I(o,a++),t,n);else if("object"===o)throw t=""+e,Error(v(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return i}function D(e,r,t){return null==e?0:N(e,"",r,t)}function I(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function A(e,r){e.func.call(e.context,r,e.count++)}function M(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?U(e,n,t,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,r){return{$$typeof:u,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+t)),n.push(e))}function U(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(C,"$&/")+"/"),D(e,M,r=R(r,u,n,o)),T(r)}var q={current:null};function F(){var e=q.current;if(null===e)throw Error(v(321));return e}var L={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return U(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;D(e,A,r=R(null,null,r,t)),T(r)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var r=[];return U(e,r,null,(function(e){return e})),r},only:function(e){if(!_(e))throw Error(v(143));return e}},r.Component=g,r.Fragment=i,r.Profiler=l,r.PureComponent=w,r.StrictMode=a,r.Suspense=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.cloneElement=function(e,r,t){if(null==e)throw Error(v(267,e));var o=n({},e.props),c=e.key,i=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,a=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in r)P.call(r,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==l?l[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:u,type:e.type,key:c,ref:i,props:o,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:p,render:e}},r.isValidElement=_,r.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:y,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return F().useCallback(e,r)},r.useContext=function(e,r){return F().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return F().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return F().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return F().useLayoutEffect(e,r)},r.useMemo=function(e,r){return F().useMemo(e,r)},r.useReducer=function(e,r,t){return F().useReducer(e,r,t)},r.useRef=function(e){return F().useRef(e)},r.useState=function(e){return F().useState(e)},r.version="16.13.1"},94:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,i,a=c(e),l=1;l<arguments.length;l++){for(var s in t=Object(arguments[l]))o.call(t,s)&&(a[s]=t[s]);if(n){i=n(t);for(var f=0;f<i.length;f++)u.call(t,i[f])&&(a[i[f]]=t[i[f]])}}return a}}}]);