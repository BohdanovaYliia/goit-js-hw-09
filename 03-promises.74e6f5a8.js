function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");function l(t,r){var n,o;(n=t,o=r,new Promise(((e,t)=>{const r=Math.random()>.3;setTimeout((()=>{r?e({position:n,delay:o}):t({position:n,delay:o})}),o)}))).then((({position:t,delay:r})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${r}ms`)})).catch((({position:t,delay:r})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${r}ms`)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.delay.value,r=e.currentTarget.step.value,n=e.currentTarget.amount.value;let o=0,i=0;for(let e=0;e<n;e+=1)i+=1,o=Number(t)+Number(r)*Number(e),l(i,o)}));
//# sourceMappingURL=03-promises.74e6f5a8.js.map