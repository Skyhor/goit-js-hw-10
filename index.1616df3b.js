!function(){function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,m=function(){return s.Date.now()};function y(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function b(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(y(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=y(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var f=u.test(n);return f||c.test(n)?a(n.slice(2),f?2:8):r.test(n)?NaN:+n}n=function(t,n,e){var o,i,r,u,c,a,f=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=o,r=i;return o=i=void 0,f=n,u=t.apply(r,e)}function h(t){return f=t,c=setTimeout(x,n),l?g(t):u}function j(t){var e=t-a;return void 0===a||e>=n||e<0||s&&t-f>=r}function x(){var t=m();if(j(t))return O(t);c=setTimeout(x,function(t){var e=n-(t-a);return s?v(e,r-(t-f)):e}(t))}function O(t){return c=void 0,d&&o?g(t):(o=i=void 0,u)}function T(){var t=m(),e=j(t);if(o=arguments,i=this,a=t,e){if(void 0===c)return h(a);if(s)return c=setTimeout(x,n),g(a)}return void 0===c&&(c=setTimeout(x,n)),u}return n=b(n)||0,y(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(b(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),T.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=i=c=void 0},T.flush=function(){return void 0===c?u:O(m())},T};var g=document.querySelector(".country-info");document.querySelector("input").addEventListener("input",t(n)((function(t,n){t.preventDefault(),function(t){if(""===t)return;var n="https://restcountries.com/v3.1/name/".concat(t);fetch(n).then((function(t){return t.json()})).then(h)}(t.target.value)}),300));function h(t){var n=t.map((function(t){var n=t.fifa,e=t.flags,o=t.altSpellings,i=t.capital,r=t.population,u=t.languages;t.coatOfArms;return'<div class="card">\n       <div class="img-card"><img src="'.concat(e.png,'" alt="').concat(n,'" width=\'100\'></div>\n       <div class="text-card">\n         <p class="text">name: ').concat(o,'</p>\n         <p class="text">capital: ').concat(i,'</p>\n         <p class="text">population: ').concat(r,'</p>\n         <p class="text">languages: ').concat(u,"</p>\n       </div>\n     </div>")})).join("");g.innerHTML=n,console.log(t)}}();
//# sourceMappingURL=index.1616df3b.js.map
