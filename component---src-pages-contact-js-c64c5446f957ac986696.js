"use strict";(self.webpackChunkgatsby_ovalb=self.webpackChunkgatsby_ovalb||[]).push([[501],{9718:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(7294);function a(e){return n.createElement("a",{className:"block",href:e.link},n.createElement("div",{className:"flex flex-row p-2 items-center text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"},n.createElement("img",{className:"h-9 md:h-12",src:e.img,alt:e.name+"-icon"}),n.createElement("div",{className:"flex flex-col px-5 align-middle"},n.createElement("h1",{className:"font-medium text-sm md:text-base"},e.name),n.createElement("h2",{className:"text-xs md:text-sm"},e.desc))))}},633:function(e,t,r){r.d(t,{Z:function(){return E}});var n=r(7294),a=r(4694),o=r(5697),l=r.n(o);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=p(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var y=!1;try{y=!0}catch(j){}function d(e){return e&&"object"===i(e)&&e.prefix&&e.iconName&&e.icon?e:a.parse.icon?a.parse.icon(e):null===e?null:e&&"object"===i(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function v(e){var t=e.forwardedRef,r=u(e,["forwardedRef"]),n=r.icon,o=r.mask,l=r.symbol,i=r.className,s=r.title,p=r.titleId,b=d(n),O=h("classes",[].concat(m(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,l=e.border,i=e.listItem,s=e.flip,f=e.size,u=e.rotation,m=e.pull,p=(c(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(f),null!=f),c(t,"fa-rotate-".concat(u),null!=u&&0!==u),c(t,"fa-pull-".concat(m),null!=m),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(r)),m(i.split(" ")))),x=h("transform","string"==typeof r.transform?a.parse.transform(r.transform):r.transform),w=h("mask",d(o)),E=(0,a.icon)(b,f({},O,{},x,{},w,{symbol:l,title:s,titleId:p}));if(!E)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var j=E.abstract,N={ref:t};return Object.keys(r).forEach((function(e){v.defaultProps.hasOwnProperty(e)||(N[e]=r[e])})),g(j[0],N)}v.displayName="FontAwesomeIcon",v.propTypes={border:l().bool,className:l().string,mask:l().oneOfType([l().object,l().array,l().string]),fixedWidth:l().bool,inverse:l().bool,flip:l().oneOf(["horizontal","vertical","both"]),icon:l().oneOfType([l().object,l().array,l().string]),listItem:l().bool,pull:l().oneOf(["right","left"]),pulse:l().bool,rotation:l().oneOf([0,90,180,270]),size:l().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l().bool,symbol:l().oneOfType([l().bool,l().string]),title:l().string,transform:l().oneOfType([l().string,l().object]),swapOpacity:l().bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=b(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[p(t)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,c=u(n,["style"]);return o.attrs.style=f({},o.attrs.style,{},i),t.apply(void 0,[r.tag,f({},o.attrs,{},c)].concat(m(a)))}.bind(null,n.createElement),O=r(7190),x=r(5444);function w(){return n.createElement("header",{className:"flex flex-row justify-between font-mono font-medium"},n.createElement("div",{className:"flex flex-row"},n.createElement(x.Link,{to:"/"},n.createElement("h1",{className:"dark:text-gray-200 header-btn"},"ovalb")),n.createElement("a",{className:"header-btn",href:"https://github.com/ovalb"},n.createElement(v,{icon:O.Nz9,size:"1x"})),n.createElement("a",{className:"header-btn",href:"https://stackoverflow.com/users/4354167/onval"},n.createElement(v,{icon:O.mGT,size:"1x"}))),n.createElement("div",null,n.createElement("ol",null,n.createElement("li",{className:"inline header-btn"},n.createElement(x.Link,{to:"/"},"Blog")),n.createElement("li",{className:"inline header-btn"},n.createElement(x.Link,{to:"/project"},"Projects")),n.createElement("li",{className:"inline header-btn"},n.createElement(x.Link,{to:"/contact"},"Contact")))))}var E=function(e){e.location,e.title;var t=e.children;return n.createElement("div",{className:"p-5 mx-auto max-w-5xl"},n.createElement(w,null),n.createElement("main",{className:"font-lato"},t),n.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},262:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(7294),a=r(633);r(9718);function o(){return n.createElement(a.Z,null,n.createElement("h1",null," Contact me bro! "))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-c64c5446f957ac986696.js.map