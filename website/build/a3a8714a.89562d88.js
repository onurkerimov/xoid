/*! For license information please see a3a8714a.89562d88.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(7),c=(n(93),n(92)),i={id:"finite-state-machines",title:"Finite State Machines"},u={unversionedId:"recipes/finite-state-machines",id:"recipes/finite-state-machines",isDocsHomePage:!1,title:"Finite State Machines",description:"xoid is not specialized for fsms (finite state machines), however, a considerable range of fsms can be expressed only by using the first argument of create function.",source:"@site/../docs/recipes/finite-state-machines.md",slug:"/recipes/finite-state-machines",permalink:"/docs/recipes/finite-state-machines",editUrl:"https://github.com/onurkerimov/xoid/blob/master/website/../docs/recipes/finite-state-machines.md",version:"current",lastUpdatedAt:1611584883},a=[],f={rightToc:a};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"xoid")," is ",Object(c.b)("strong",{parentName:"p"},"not")," specialized for ",Object(c.b)("strong",{parentName:"p"},"fsm"),"s (finite state machines), however, a considerable range of fsms can be expressed only by using the first argument of ",Object(c.b)("inlineCode",{parentName:"p"},"create")," function."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const fsm = create<{\n  name: string;\n  actions: Record<'melt' | 'freeze' | 'condense' | 'vaporize', () => void>;\n}>((_get, set) => {\n\n  function melt() {\n    set(liquid)\n    console.log('I melted')\n  }\n\n  function freeze() {\n    set(solid)\n    console.log('I freezed')\n  }\n\n  function condense() {\n    set(liquid)\n    console.log('I condensed')\n  }\n\n  function vaporize() {\n    set(gas)\n    console.log('I vaporized')\n  }\n\n  const solid = { name: \"ice\", actions: { melt } };\n  const liquid = { name: \"water\", actions: { freeze, vaporize } };\n  const gas = { name: \"vapor\", actions: { condense } };\n\n  return solid;\n})\n\nconst Water = () => {\n  const [{ name, actions }] = useStore(fsm)\n  return (\n    <div>\n      {name}\n      {Object.keys(actions).map((key) => (\n        <button key={key} onClick={actions[key]}>\n          {key}\n        </button>\n      ))}\n    </div>\n  )\n}\n")))}s.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=o.a.createContext({}),s=function(e){var t=o.a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(f.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),l=s(n),y=r,d=l["".concat(i,".").concat(y)]||l[y]||p[y]||c;return n?o.a.createElement(d,u(u({ref:t},f),{},{components:n})):o.a.createElement(d,u({ref:t},f))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=y;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var f=2;f<c;f++)i[f]=n[f];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";e.exports=n(94)},94:function(e,t,n){"use strict";var r=n(95),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=w.prototype=new j;S.constructor=w,r(S,O.prototype),S.isPureReactComponent=!0;var k={current:null},P=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,o={},i=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var f=Array(a),s=0;s<a;s++)f[s]=arguments[s+2];o.children=f}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:c,type:e,key:i,ref:u,props:o,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var C=/\/+/g,$=[];function R(e,t,n,r){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function N(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case c:case i:u=!0}}if(u)return n(r,e,""===t?"."+z(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=t+z(o=e[a],a);u+=N(o,f,n,r)}else if(null===e||"object"!=typeof e?f=null:f="function"==typeof(f=b&&e[b]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),a=0;!(o=e.next()).done;)u+=N(o=o.value,f=t+z(o,a++),n,r);else if("object"===o)throw n=""+e,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return u}function T(e,t,n){return null==e?0:N(e,"",t,n)}function z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,o){var c="";null!=n&&(c=(""+n).replace(C,"$&/")+"/"),T(e,A,t=R(t,c,r,o)),I(t)}var q={current:null};function U(){var e=q.current;if(null===e)throw Error(v(321));return e}var F={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,D,t=R(null,null,t,n)),I(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(v(143));return e}},t.Component=O,t.Fragment=u,t.Profiler=f,t.PureComponent=w,t.StrictMode=a,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error(v(267,e));var o=r({},e.props),i=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in t)P.call(t,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==f?f[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){f=Array(s);for(var l=0;l<s;l++)f[l]=arguments[l+2];o.children=f}return{$$typeof:c,type:e.type,key:i,ref:u,props:o,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},95:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,u,a=i(e),f=1;f<arguments.length;f++){for(var s in n=Object(arguments[f]))o.call(n,s)&&(a[s]=n[s]);if(r){u=r(n);for(var l=0;l<u.length;l++)c.call(n,u[l])&&(a[u[l]]=n[u[l]])}}return a}}}]);