function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,v=function(){return l.Date.now()};function g(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var e=r.test(t);return e||u.test(t)?a(t.slice(2),e?2:8):o.test(t)?NaN:+t}n=function(t,n,e){var i,o,r,u,a,f,c=0,l=!1,s=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=i,r=o;return i=o=void 0,c=n,u=t.apply(r,e)}function h(t){return c=t,a=setTimeout($,n),l?b(t):u}function j(t){var e=t-f;return void 0===f||e>=n||e<0||s&&t-c>=r}function $(){var t=v();if(j(t))return x(t);a=setTimeout($,function(t){var e=n-(t-f);return s?d(e,r-(t-c)):e}(t))}function x(t){return a=void 0,y&&i?b(t):(i=o=void 0,u)}function T(){var t=v(),e=j(t);if(i=arguments,o=this,f=t,e){if(void 0===a)return h(f);if(s)return a=setTimeout($,n),b(f)}return void 0===a&&(a=setTimeout($,n)),u}return n=m(n)||0,g(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(m(e.maxWait)||0,n):r,y="trailing"in e?!!e.trailing:y),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=o=a=void 0},T.flush=function(){return void 0===a?u:x(v())},T};const y=document.querySelector(".country-info");document.querySelector("input").addEventListener("input",t(n)((function(t,n){t.preventDefault(),b=t.target.value,function(t){if(""===t)return;fetch(`https://restcountries.com/v3.1/name/${t}`).then((t=>t.json())).then(h)}(b)}),300));let b="";function h(t){const n=t.map((({fifa:t,flags:n,altSpellings:e,capital:i,population:o,languages:r,coatOfArms:u})=>`<div class="card">\n       <div class="img-card"><img src="${n.png}" alt="${t}" width='100'></div>\n       <div class="text-card">\n         <p class="text">name: ${e}</p>\n         <p class="text">capital: ${i}</p>\n         <p class="text">population: ${o}</p>\n         <p class="text">languages: ${r}</p>\n       </div>\n     </div>`)).join("");y.innerHTML=n,console.log(t)}
//# sourceMappingURL=index.7548213a.js.map