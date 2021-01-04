/*! For license information please see 1fc1b948.60209a39.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(7),c=(n(92),n(91)),a={id:"async",title:"Async Actions"},u={unversionedId:"recipes/async",id:"recipes/async",isDocsHomePage:!1,title:"Async Actions",description:"Common fetch as a model",source:"@site/../docs/recipes/async.md",slug:"/recipes/async",permalink:"/docs/recipes/async",editUrl:"https://github.com/onurkerimov/xoid/blob/master/website/../docs/recipes/async.md",version:"current",lastUpdatedAt:1609188618,sidebar:"docs",previous:{title:"objectOf",permalink:"/docs/api/objectof"},next:{title:"Local component state",permalink:"/docs/recipes/local-state"}},i=[{value:"Common <code>fetch</code> as a model",id:"common-fetch-as-a-model",children:[]},{value:"Async actions",id:"async-actions",children:[]}],s={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"common-fetch-as-a-model"},"Common ",Object(c.b)("inlineCode",{parentName:"h2"},"fetch")," as a model"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"fetch")," can be abstracted away as a model:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="./helpers.js"',title:'"./helpers.js"'}),"import { create, set } from 'xoid'\n\nexport const RequestModel = (endpoint, init) =>\n  create(\n    {\n      data: null,\n      loading: true,\n      error: null,\n    },\n    (store) => {\n      try {\n        const response = await fetch(endpoint, init);\n        set(store.data, response.json());\n        set(store.loading, false);\n      } catch (error) {\n        set(store.error, error);\n      }\n    }\n  );\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="./Component.js"',title:'"./Component.js"'}),"import { useMemo } from 'react';\nimport { useStore } from 'xoid';\nimport { RequestModel } from './helpers';\n\n// inside React\nconst [{ data, error, loading }] = useStore(\n  useMemo(() => RequestModel('/some-address'), [])\n);\n")),Object(c.b)("p",null,"Of course you could build the same functionality without ",Object(c.b)("strong",{parentName:"p"},"xoid"),", by using ",Object(c.b)("inlineCode",{parentName:"p"},"useState")," and ",Object(c.b)("inlineCode",{parentName:"p"},"useEffect"),". However note that with ",Object(c.b)("strong",{parentName:"p"},"xoid"),", ",Object(c.b)("inlineCode",{parentName:"p"},"RequestModel")," is framework agnostic and can be used outside React too:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { subscribe } from 'xoid';\nimport { RequestModel } from './helpers';\n\nsubscribe(RequestModel('/some-address'), (value) => {\n  const { data, error, loading } = value;\n  console.log({ data, error, loading });\n});\n")),Object(c.b)("p",null,"This also gives the ability to inform the React component transiently, without causing render:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { subscribe } from 'xoid';\nimport { RequestModel } from './helpers';\n\n// inside React\nuseEffect(\n  () =>\n    subscribe(RequestModel('/some-address'), (value) => {\n      const { data, error, loading } = value;\n      console.log({ data, error, loading });\n    }),\n  []\n);\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Note that ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily"}),"useMemo doesn't guarantee that the callback will run only once"),". You may consider ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/use-constant"}),Object(c.b)("inlineCode",{parentName:"a"},"use-constant"))," package for stricter scenarios.")),Object(c.b)("h2",{id:"async-actions"},"Async actions"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const NumberModel = (payload: number) =>\n  create(payload, (store) => {\n    const increment = () => set(store, (state) => state + 1)\n    const incrementAsync = async () => {\n      await delay(2000)\n      increment()\n    }\n    return { increment, incrementAsync }\n  });\n\nfunction delay(ms: number) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n")))}l.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||c;return n?o.a.createElement(m,u(u({ref:t},s),{},{components:n})):o.a.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";e.exports=n(93)},93:function(e,t,n){"use strict";var r=n(94),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}function g(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var k=w.prototype=new g;k.constructor=w,r(k,v.prototype),k.isPureReactComponent=!0;var S={current:null},x=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,o={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:c,type:e,key:a,ref:u,props:o,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var R=/\/+/g,N=[];function _(e,t,n,r){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function M(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case c:case a:u=!0}}if(u)return n(r,e,""===t?"."+q(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var s=t+q(o=e[i],i);u+=M(o,s,n,r)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=y&&e[y]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),i=0;!(o=e.next()).done;)u+=M(o=o.value,s=t+q(o,i++),n,r);else if("object"===o)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return u}function A(e,t,n){return null==e?0:M(e,"",t,n)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function I(e,t,n,r,o){var c="";null!=n&&(c=(""+n).replace(R,"$&/")+"/"),A(e,D,t=_(t,c,r,o)),$(t)}var U={current:null};function L(){var e=U.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,T,t=_(null,null,t,n)),$(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(h(143));return e}},t.Component=v,t.Fragment=u,t.Profiler=s,t.PureComponent=w,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)x.call(t,l)&&!C.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:c,type:e.type,key:a,ref:u,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return L().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,n){return L().useReducer(e,t,n)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.1"},94:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,u,i=a(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))o.call(n,l)&&(i[l]=n[l]);if(r){u=r(n);for(var f=0;f<u.length;f++)c.call(n,u[f])&&(i[u[f]]=n[u[f]])}}return i}}}]);