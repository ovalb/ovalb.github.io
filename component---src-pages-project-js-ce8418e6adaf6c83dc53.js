"use strict";(self.webpackChunkgatsby_ovalb=self.webpackChunkgatsby_ovalb||[]).push([[746],{9718:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);function l(e){return r.createElement("a",{className:"block",href:e.link},r.createElement("div",{className:"flex flex-row p-2 my-1 items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"},r.createElement("img",{className:"h-9 md:h-12",src:e.img,alt:e.name+"-icon"}),r.createElement("div",{className:"flex flex-col px-5 align-middle"},r.createElement("span",{className:"text-xl text-md"},e.name),r.createElement("span",null,e.desc))))}},633:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7294),l=n(4694),a=n(5697),i=n.n(a);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),l=u(t.slice(0,r)),a=t.slice(r+1).trim();return l.startsWith("webkit")?e[(n=l,n.charAt(0).toUpperCase()+n.slice(1))]=a:e[l]=a,e}),{})}var f=!1;try{f=!0}catch(G){}function C(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:l.parse.icon?l.parse.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function A(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?o({},e,t):{}}function d(e){var t=e.forwardedRef,n=g(e,["forwardedRef"]),r=n.icon,a=n.mask,i=n.symbol,c=n.className,I=n.title,u=n.titleId,b=C(r),p=A("classes",[].concat(m(function(e){var t,n=e.spin,r=e.pulse,l=e.fixedWidth,a=e.inverse,i=e.border,c=e.listItem,I=e.flip,s=e.size,g=e.rotation,m=e.pull,u=(o(t={"fa-spin":n,"fa-pulse":r,"fa-fw":l,"fa-inverse":a,"fa-border":i,"fa-li":c,"fa-flip-horizontal":"horizontal"===I||"both"===I,"fa-flip-vertical":"vertical"===I||"both"===I},"fa-".concat(s),null!=s),o(t,"fa-rotate-".concat(g),null!=g&&0!==g),o(t,"fa-pull-".concat(m),null!=m),o(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(u).map((function(e){return u[e]?e:null})).filter((function(e){return e}))}(n)),m(c.split(" ")))),Z=A("transform","string"==typeof n.transform?l.parse.transform(n.transform):n.transform),j=A("mask",C(a)),v=(0,l.icon)(b,s({},p,{},Z,{},j,{symbol:i,title:I,titleId:u}));if(!v)return function(){var e;!f&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var G=v.abstract,P={ref:t};return Object.keys(n).forEach((function(e){d.defaultProps.hasOwnProperty(e)||(P[e]=n[e])})),y(G[0],P)}d.displayName="FontAwesomeIcon",d.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},d.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var y=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var l=(n.children||[]).map((function(n){return e(t,n)})),a=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=b(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[u(t)]=r}return e}),{attrs:{}}),i=r.style,c=void 0===i?{}:i,o=g(r,["style"]);return a.attrs.style=s({},a.attrs.style,{},c),t.apply(void 0,[n.tag,s({},a.attrs,{},o)].concat(m(l)))}.bind(null,r.createElement),p=n(7190),Z=n(5444);function j(){return r.createElement("header",{className:"flex flex-row justify-between font-mono font-medium"},r.createElement("div",{className:"flex flex-row"},r.createElement(Z.Link,{to:"/"},r.createElement("h1",{className:"header-btn"},"ovalb")),r.createElement("a",{className:"header-btn",href:"https://github.com/ovalb"},r.createElement(d,{icon:p.Nz9,size:"1x"})),r.createElement("a",{className:"header-btn",href:"https://stackoverflow.com/users/4354167/onval"},r.createElement(d,{icon:p.mGT,size:"1x"}))),r.createElement("div",null,r.createElement("ol",null,r.createElement("li",{className:"inline header-btn"},r.createElement(Z.Link,{to:"/"},"Blog")),r.createElement("li",{className:"inline header-btn"},r.createElement(Z.Link,{to:"/project"},"Projects")),r.createElement("li",{className:"inline header-btn"},r.createElement(Z.Link,{to:"/contact"},"Contact")))))}var v=function(e){var t=e.children;return r.createElement("div",{className:"p-5 mx-auto max-w-6xl"},r.createElement(j,null),r.createElement("main",{className:"font-lato mt-10"},t),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},1908:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(7294),l=n(633),a=n(9718);function i(){return r.createElement(l.Z,null,r.createElement("section",null,r.createElement("h2",{className:"font-semibold text-3xl"},"Projects"),r.createElement(a.Z,{name:"Dezone",desc:"all-in-one macOS timer app",img:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjEgKDU3NTAxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5kYXJrIGxvZ288L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUxLjY5NDU5NTglIiB5MT0iNTAlIiB4Mj0iOTcuNTQ0MDU0NCUiIHkyPSI5Ny40NTc4OTc3JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjkyODI4IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0NTQ0NDQiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNpcmNsZSBpZD0icGF0aC0yIiBjeD0iMzIiIGN5PSIzMiIgcj0iMjAiPjwvY2lyY2xlPgogICAgICAgIDxmaWx0ZXIgeD0iLTMwLjAlIiB5PSItMjUuMCUiIHdpZHRoPSIxNjAuMCUiIGhlaWdodD0iMTYwLjAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItMyI+CiAgICAgICAgICAgIDxmZU1vcnBob2xvZ3kgcmFkaXVzPSIzIiBvcGVyYXRvcj0iZGlsYXRlIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93U3ByZWFkT3V0ZXIxIj48L2ZlTW9ycGhvbG9neT4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMiIgaW49InNoYWRvd1NwcmVhZE91dGVyMSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZU1vcnBob2xvZ3kgcmFkaXVzPSIzIiBvcGVyYXRvcj0iZXJvZGUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dJbm5lciI+PC9mZU1vcnBob2xvZ3k+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJzaGFkb3dJbm5lciIgcmVzdWx0PSJzaGFkb3dJbm5lciI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIGluMj0ic2hhZG93SW5uZXIiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlQ29tcG9zaXRlPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjUgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImRhcmstbG9nbyI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiPjwvcmVjdD4KICAgICAgICAgICAgPGcgaWQ9Ik92YWwiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTMpIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPSIjQkU2M0Y1IiBzdHJva2Utd2lkdGg9IjQiIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMiIgc3Ryb2tlPSIjRDVBOUVGIiBzdHJva2Utd2lkdGg9IjMiIGN4PSIzMiIgY3k9IjMyIiByPSIxNCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyNC4wMDAwMDApIiBmaWxsPSIjRUZFRkVGIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMyIgY3g9IjgiIGN5PSI4IiByPSI4Ij48L2NpcmNsZT4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",link:"https://ovalb.github.io/Dezone"})))}}}]);
//# sourceMappingURL=component---src-pages-project-js-ce8418e6adaf6c83dc53.js.map