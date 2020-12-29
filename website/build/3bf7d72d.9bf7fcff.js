(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{66:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(83)),i={id:"api-overview",title:"API Overview"},c={unversionedId:"api-overview",id:"api-overview",isDocsHomePage:!1,title:"API Overview",description:"Next section provides a full API introduction. Most fundamental concepts are introduced before specialized ones. In the following sections, parts of the API are documented in the following order.",source:"@site/../docs/api-overview.md",slug:"/api-overview",permalink:"/docs/api-overview",editUrl:"https://github.com/onurkerimov/xoid/blob/master/website/../docs/api-overview.md",version:"current",lastUpdatedAt:1609278445,sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"create",permalink:"/docs/api/create"}},b=[],p={rightToc:b};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Next section provides a full API introduction. Most fundamental concepts are introduced before specialized ones. In the following sections, parts of the API are documented in the following order."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Exports"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"api/create"}),Object(o.b)("inlineCode",{parentName:"a"},"create"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Creates a store")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"api/get"}),Object(o.b)("inlineCode",{parentName:"a"},"get"))," , ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"api/set"}),Object(o.b)("inlineCode",{parentName:"a"},"set"))," , ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"api/use"}),Object(o.b)("inlineCode",{parentName:"a"},"use"))," , ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"api/subscribe"}),Object(o.b)("inlineCode",{parentName:"a"},"subscribe"))," , ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"api/usestore"}),Object(o.b)("inlineCode",{parentName:"a"},"useStore"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Interacts with stores")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"api/current"}),Object(o.b)("inlineCode",{parentName:"a"},"current"))," , ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"api/arrayof"}),Object(o.b)("inlineCode",{parentName:"a"},"arrayOf"))," , ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"api/objectof"}),Object(o.b)("inlineCode",{parentName:"a"},"objectOf"))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Utilities")))))}l.isMDXComponent=!0},83:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=l(r),s=n,O=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return r?a.a.createElement(O,c(c({ref:t},p),{},{components:r})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);