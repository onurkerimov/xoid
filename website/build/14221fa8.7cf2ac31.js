/*! For license information please see 14221fa8.7cf2ac31.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(7),a=(r(92),r(91)),c={id:"create",title:"create"},i={unversionedId:"api/create",id:"api/create",isDocsHomePage:!1,title:"create",description:"`",source:"@site/../docs/api/create.md",slug:"/api/create",permalink:"/docs/api/create",editUrl:"https://github.com/onurkerimov/xoid/blob/master/website/../docs/api/create.md",version:"current",lastUpdatedAt:1609188618,sidebar:"docs",previous:{title:"API Overview",permalink:"/docs/api-overview"},next:{title:"get",permalink:"/docs/api/get"}},u=[{value:"Basic state",id:"basic-state",children:[]},{value:"Derived state",id:"derived-state",children:[]},{value:"Defining actions",id:"defining-actions",children:[]}],l={rightToc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"import { create } from 'xoid'")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"create")," is the store creator function. It returns a proxy object that ",Object(a.b)("em",{parentName:"p"},"represents")," state. This representation of state has the same tree structure with the actual state. It's values are not directly readable, nor it can be modified. To interact with the state; ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"get"}),Object(a.b)("inlineCode",{parentName:"a"},"get"))," , ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"set"}),Object(a.b)("inlineCode",{parentName:"a"},"set"))," , ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"use"}),Object(a.b)("inlineCode",{parentName:"a"},"use"))," , ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"subscribe"}),Object(a.b)("inlineCode",{parentName:"a"},"subscribe"))," core methods are used."),Object(a.b)("h2",{id:"basic-state"},"Basic state"),Object(a.b)("p",null,"Create a store by using the first argument as the initial state. State can be an object, an array, or a primitive such as a number, a string or a symbol."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const alpha = create(5);\nconst deepStore = create({ deeply: { nested: { value: 'OK' } } });\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"deepStore")," will have the same shape with its state. So, ",Object(a.b)("inlineCode",{parentName:"p"},"deepStore.deeply.nested.value")," is an observable address that exists in the store."),Object(a.b)("h2",{id:"derived-state"},"Derived state"),Object(a.b)("p",null,"By providing a function as the first argument, you can create a store that's value is derived by other stores."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const sum = create((get) => get(alpha) + get(beta));\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you are familiar with ",Object(a.b)("strong",{parentName:"p"},"Recoil"),", you can think of ",Object(a.b)("inlineCode",{parentName:"p"},"xoid.create")," as both Recoil functions combined: ",Object(a.b)("inlineCode",{parentName:"p"},"Recoil.atom")," , and ",Object(a.b)("inlineCode",{parentName:"p"},"Recoil.selector"),".")),Object(a.b)("h2",{id:"defining-actions"},"Defining actions"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"create")," function has an optional second argument which accepts a function. This function runs only once after the state is created. Return value of this function is stored internally, to be used by ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"use"}),Object(a.b)("inlineCode",{parentName:"a"},"use"))," method."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { create, set, use, useStore } from 'xoid';\n\nconst storeWithActions = create(5, (store) => ({\n  increment: () => set(store, (state) => state + 1),\n  reset: () => set(store, 0)\n}));\n\nuse(storeWithActions).increment();\n\n// also, in a React component\nconst [value, { increment }] = useStore(storeWithActions);\n")),Object(a.b)("p",null,"You can use this second argument to define actions for your store. See the documentation for ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"use"}),Object(a.b)("inlineCode",{parentName:"a"},"use"))," for some possible patterns."))}s.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),b=n,d=f["".concat(c,".").concat(b)]||f[b]||p[b]||a;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";e.exports=r(93)},93:function(e,t,r){"use strict";var n=r(94),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function j(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||O}function g(){}function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var S=w.prototype=new g;S.constructor=w,n(S,j.prototype),S.isPureReactComponent=!0;var C={current:null},k=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:C.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,_=[];function R(e,t,r,n){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function T(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case c:i=!0}}if(i)return r(n,e,""===t?"."+A(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+A(o=e[u],u);i+=T(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(o=e.next()).done;)i+=T(o=o.value,l=t+A(o,u++),r,n);else if("object"===o)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function D(e,t,r){return null==e?0:T(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(E,"$&/")+"/"),D(e,q,t=R(t,a,n,o)),$(t)}var U={current:null};function B(){var e=U.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,I,t=R(null,null,t,r)),$(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(h(143));return e}},t.Component=j,t.Fragment=i,t.Profiler=l,t.PureComponent=w,t.StrictMode=u,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=C.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)k.call(t,s)&&!N.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return B().useCallback(e,t)},t.useContext=function(e,t){return B().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return B().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return B().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return B().useLayoutEffect(e,t)},t.useMemo=function(e,t){return B().useMemo(e,t)},t.useReducer=function(e,t,r){return B().useReducer(e,t,r)},t.useRef=function(e){return B().useRef(e)},t.useState=function(e){return B().useState(e)},t.version="16.13.1"},94:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,u=c(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(u[s]=r[s]);if(n){i=n(r);for(var f=0;f<i.length;f++)a.call(r,i[f])&&(u[i[f]]=r[i[f]])}}return u}}}]);