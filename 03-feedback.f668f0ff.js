!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n),n.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){u.default(e,t,r[t])}))}return e};var l,u=(l=n("hKHmD"))&&l.__esModule?l:{default:l};var f,i=n("1WSnx"),c={},d="feedback-form-state",s=document.querySelector(".feedback-form"),p=document.querySelector(".feedback-form textarea"),m=document.querySelector(".feedback-form input");s.addEventListener("submit",(function(e){e.preventDefault(),c={},s.reset(),console.log(JSON.parse(localStorage.getItem(d))),localStorage.removeItem(d)})),s.addEventListener("input",(0,i.throttle)((function(e){c[e.target.name]=e.target.value,localStorage.setItem(d,JSON.stringify(c))}),1e3)),(f=JSON.parse(localStorage.getItem(d)))&&(f.email&&(m.value=f.email),f.message&&(p.value=f.message),c=e(a)({},f))}();
//# sourceMappingURL=03-feedback.f668f0ff.js.map