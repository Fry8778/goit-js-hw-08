!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,l=t,f=e.apply(i,n)}function T(e){return l=e,a=setTimeout(O,t),d?y(e):f}function x(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=p();if(x(e))return S(e);a=setTimeout(O,function(e){var n=t-(e-c);return s?b(n,u-(e-l)):n}(e))}function S(e){return a=void 0,v&&r?y(e):(r=o=void 0,f)}function h(){var e=p(),n=x(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return T(c);if(s)return a=setTimeout(O,t),y(c)}return void 0===a&&(a=setTimeout(O,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},h.flush=function(){return void 0===a?f:S(p())},h}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=f.test(t);return i||a.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var T,x={form:document.querySelector(".js-feedback-form"),textarea:document.querySelector(".js-feedback-form textarea")};x.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("STORAGE_KEY")})),x.textarea.addEventListener("input",e(t)(onTextareaSubmit,1e3)),(T=localStorage.getItem("STORAGE_KEY"))&&(x.textarea.value=T)}();
//# sourceMappingURL=03-feedback.670a717a.js.map
