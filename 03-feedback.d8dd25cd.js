!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire4c75;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequire4c75=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var u=o("hKHmD"),a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i.default(e,t,r[t])}))}return e};var l,i=(l=o("hKHmD"))&&l.__esModule?l:{default:l};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t){return s.default(e)||c.default(e,t)||p.default(e,t)||d.default()};var s=y(o("8slrw")),c=y(o("7AJDX")),d=y(o("ifqQW")),p=y(o("auk6i"));function y(e){return e&&e.__esModule?e:{default:e}}var v,b,m=document.querySelector(".feedback-form"),g="formData";v=localStorage.getItem(g),(b=JSON.parse(v))&&Object.keys(b).forEach((function(e){m.elements[e].value=b[e]}));m.addEventListener("input",(function(t){var r=t.target,n=r.name,o=r.value,l=localStorage.getItem(g),i=JSON.parse(l),f=e(a)({},i,e(u)({},n,o)),s=JSON.stringify(f);localStorage.setItem(g,s)})),m.addEventListener("submit",(function(t){t.preventDefault();var r=t.currentTarget,n=new FormData(r),o={},u=!0,a=!1,l=void 0;try{for(var i,s=n.entries()[Symbol.iterator]();!(u=(i=s.next()).done);u=!0){var c=e(f)(i.value,2),d=c[0],p=c[1];if(!p)return void alert("please fill in all the fields!");o[d]=p}}catch(e){a=!0,l=e}finally{try{u||null==s.return||s.return()}finally{if(a)throw l}}o.canBeSpammed=!!o.canBeSpammed,console.log(o),r.reset(),localStorage.removeItem(g)}))}();
//# sourceMappingURL=03-feedback.d8dd25cd.js.map