!function(){var e={184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=l.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(r=function(){return l}.apply(t,[]))||(e.exports=r)}()},296:function(e,t,r){var n=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,c="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,s="object"==typeof self&&self&&self.Object===Object&&self,u=c||s||Function("return this")(),d=Object.prototype.toString,f=Math.max,m=Math.min,p=function(){return u.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=a.test(e);return r||i.test(e)?o(e.slice(2),r?2:8):l.test(e)?NaN:+e}e.exports=function(e,t,r){var n,l,a,i,o,c,s=0,u=!1,d=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,a=l;return n=l=void 0,s=t,i=e.apply(a,r)}function h(e){var r=e-c;return void 0===c||r>=t||r<0||d&&e-s>=a}function E(){var e=p();if(h(e))return _(e);o=setTimeout(E,function(e){var r=t-(e-c);return d?m(r,a-(e-s)):r}(e))}function _(e){return o=void 0,y&&n?g(e):(n=l=void 0,i)}function w(){var e=p(),r=h(e);if(n=arguments,l=this,c=e,r){if(void 0===o)return function(e){return s=e,o=setTimeout(E,t),u?g(e):i}(c);if(d)return o=setTimeout(E,t),g(c)}return void 0===o&&(o=setTimeout(E,t)),i}return t=v(t)||0,b(r)&&(u=!!r.leading,a=(d="maxWait"in r)?f(v(r.maxWait)||0,t):a,y="trailing"in r?!!r.trailing:y),w.cancel=function(){void 0!==o&&clearTimeout(o),s=0,n=c=l=o=void 0},w.flush=function(){return void 0===o?i:_(p())},w}}},t={};function r(n){var l=t[n];if(void 0!==l)return l.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}var n=window.React,l=r.n(n),a=r(184),i=r.n(a);function o(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function c(e){return!!e&&!!e[K]}function s(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===U}(e)||Array.isArray(e)||!!e[Z]||!!(null===(t=e.constructor)||void 0===t?void 0:t[Z])||p(e)||b(e))}function u(e,t,r){void 0===r&&(r=!1),0===d(e)?(r?Object.keys:G)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function d(e){var t=e[K];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:p(e)?2:b(e)?3:0}function f(e,t){return 2===d(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function m(e,t,r){var n=d(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function p(e){return z&&e instanceof Map}function b(e){return V&&e instanceof Set}function v(e){return e.o||e.t}function y(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=X(e);delete t[K];for(var r=G(t),n=0;n<r.length;n++){var l=r[n],a=t[l];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[l]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[l]})}return Object.create(Object.getPrototypeOf(e),t)}function g(e,t){return void 0===t&&(t=!1),E(e)||c(e)||!s(e)||(d(e)>1&&(e.set=e.add=e.clear=e.delete=h),Object.freeze(e),t&&u(e,(function(e,t){return g(t,!0)}),!0)),e}function h(){o(2)}function E(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function _(e){var t=J[e];return t||o(18,e),t}function w(){return B}function N(e,t){t&&(_("Patches"),e.u=[],e.s=[],e.v=t)}function P(e){C(e),e.p.forEach(S),e.p=null}function C(e){e===B&&(B=e.l)}function O(e){return B={p:[],l:B,h:e,m:!0,_:0}}function S(e){var t=e[K];0===t.i||1===t.i?t.j():t.g=!0}function x(e,t){t._=t.p.length;var r=t.p[0],n=void 0!==e&&e!==r;return t.h.O||_("ES5").S(t,e,n),n?(r[K].P&&(P(t),o(4)),s(e)&&(e=q(t,e),t.l||R(t,e)),t.u&&_("Patches").M(r[K].t,e,t.u,t.s)):e=q(t,r,[]),P(t),t.u&&t.v(t.u,t.s),e!==W?e:void 0}function q(e,t,r){if(E(t))return t;var n=t[K];if(!n)return u(t,(function(l,a){return j(e,n,t,l,a,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return R(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var l=4===n.i||5===n.i?n.o=y(n.k):n.o,a=l,i=!1;3===n.i&&(a=new Set(l),l.clear(),i=!0),u(a,(function(t,a){return j(e,n,l,t,a,r,i)})),R(e,l,!1),r&&e.u&&_("Patches").N(n,r,e.u,e.s)}return n.o}function j(e,t,r,n,l,a,i){if(c(l)){var o=q(e,l,a&&t&&3!==t.i&&!f(t.R,n)?a.concat(n):void 0);if(m(r,n,o),!c(o))return;e.m=!1}else i&&r.add(l);if(s(l)&&!E(l)){if(!e.h.D&&e._<1)return;q(e,l),t&&t.A.l||R(e,l)}}function R(e,t,r){void 0===r&&(r=!1),!e.l&&e.h.D&&e.m&&g(t,r)}function T(e,t){var r=e[K];return(r?v(r):e)[t]}function A(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function k(e){e.P||(e.P=!0,e.l&&k(e.l))}function M(e){e.o||(e.o=y(e.t))}function D(e,t,r){var n=p(t)?_("MapSet").F(t,r):b(t)?_("MapSet").T(t,r):e.O?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:w(),P:!1,I:!1,R:{},l:t,t:e,k:null,o:null,j:null,C:!1},l=n,a=Y;r&&(l=[n],a=Q);var i=Proxy.revocable(l,a),o=i.revoke,c=i.proxy;return n.k=c,n.j=o,c}(t,r):_("ES5").J(t,r);return(r?r.A:w()).p.push(n),n}function F(e){return c(e)||o(22,e),function e(t){if(!s(t))return t;var r,n=t[K],l=d(t);if(n){if(!n.P&&(n.i<4||!_("ES5").K(n)))return n.t;n.I=!0,r=L(t,l),n.I=!1}else r=L(t,l);return u(r,(function(t,l){n&&function(e,t){return 2===d(e)?e.get(t):e[t]}(n.t,t)===l||m(r,t,e(l))})),3===l?new Set(r):r}(e)}function L(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return y(e)}var H,B,I="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),z="undefined"!=typeof Map,V="undefined"!=typeof Set,$="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,W=I?Symbol.for("immer-nothing"):((H={})["immer-nothing"]=!0,H),Z=I?Symbol.for("immer-draftable"):"__$immer_draftable",K=I?Symbol.for("immer-state"):"__$immer_state",U=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),G="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,X=Object.getOwnPropertyDescriptors||function(e){var t={};return G(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},J={},Y={get:function(e,t){if(t===K)return e;var r=v(e);if(!f(r,t))return function(e,t,r){var n,l=A(t,r);return l?"value"in l?l.value:null===(n=l.get)||void 0===n?void 0:n.call(e.k):void 0}(e,r,t);var n=r[t];return e.I||!s(n)?n:n===T(e.t,t)?(M(e),e.o[t]=D(e.A.h,n,e)):n},has:function(e,t){return t in v(e)},ownKeys:function(e){return Reflect.ownKeys(v(e))},set:function(e,t,r){var n=A(v(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var l=T(v(e),t),a=null==l?void 0:l[K];if(a&&a.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,l)&&(void 0!==r||f(e.t,t)))return!0;M(e),k(e)}return e.o[t]===r&&(void 0!==r||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==T(e.t,t)||t in e.t?(e.R[t]=!1,M(e),k(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=v(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){o(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){o(12)}},Q={};u(Y,(function(e,t){Q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Q.deleteProperty=function(e,t){return Q.set.call(this,e,t,void 0)},Q.set=function(e,t,r){return Y.set.call(this,e[0],t,r,e[0])};var ee=function(){function e(e){var t=this;this.O=$,this.D=!0,this.produce=function(e,r,n){if("function"==typeof e&&"function"!=typeof r){var l=r;r=e;var a=t;return function(e){var t=this;void 0===e&&(e=l);for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return a.produce(e,(function(e){var n;return(n=r).call.apply(n,[t,e].concat(i))}))}}var i;if("function"!=typeof r&&o(6),void 0!==n&&"function"!=typeof n&&o(7),s(e)){var c=O(t),u=D(t,e,void 0),d=!0;try{i=r(u),d=!1}finally{d?P(c):C(c)}return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(e){return N(c,n),x(e,c)}),(function(e){throw P(c),e})):(N(c,n),x(i,c))}if(!e||"object"!=typeof e){if(void 0===(i=r(e))&&(i=e),i===W&&(i=void 0),t.D&&g(i,!0),n){var f=[],m=[];_("Patches").M(e,i,f,m),n(f,m)}return i}o(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var n=arguments.length,l=Array(n>1?n-1:0),a=1;a<n;a++)l[a-1]=arguments[a];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(l))}))};var n,l,a=t.produce(e,r,(function(e,t){n=e,l=t}));return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return[e,n,l]})):[a,n,l]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){s(e)||o(8),c(e)&&(e=F(e));var t=O(this),r=D(this,e,void 0);return r[K].C=!0,C(t),r},t.finishDraft=function(e,t){var r=(e&&e[K]).A;return N(r,t),x(void 0,r)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!$&&o(20),this.O=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));var l=_("Patches").$;return c(e)?l(e,t):this.produce(e,(function(e){return l(e,t)}))},e}(),te=new ee,re=te.produce,ne=(te.produceWithPatches.bind(te),te.setAutoFreeze.bind(te),te.setUseProxies.bind(te),te.applyPatches.bind(te),te.createDraft.bind(te),te.finishDraft.bind(te),window.wp.i18n),le=t=>{let{attributes:r,foundPosts:n,request:l,setRequest:a,layout:o,setLayout:c}=t;const s=e=>{c(e)};return(0,e.createElement)("div",{className:"fbdl-layout-control"},(0,e.createElement)("div",{className:"fbdl-layout-control-wrapper"},(0,e.createElement)("div",{className:"fbdl-layout-control-limit"},(0,ne.__)("Show","filebird-dl")," ",(0,e.createElement)("input",{type:"number",min:"1",max:200,value:l.pagination.limit,onChange:e=>{const t=e.target.value,r=t.toString().match(/[.,\s]/g);t<=0||r?.length?e.target.value=l.pagination.limit:a(re(l,(e=>{e.pagination.limit=t,e.pagination.current=1})))},disabled:r.isPreview})," ",(0,ne.__)("files","filebird-dl")),(0,e.createElement)("div",{className:"fbdl-layout-control-display"},(0,e.createElement)("span",{onClick:()=>s("grid")},(0,e.createElement)("svg",{className:i()({"fbdl-layout-control-display-selected":"grid"===o}),width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.25 1.875H2.5C2.15482 1.875 1.875 2.15482 1.875 2.5V6.25C1.875 6.59518 2.15482 6.875 2.5 6.875H6.25C6.59518 6.875 6.875 6.59518 6.875 6.25V2.5C6.875 2.15482 6.59518 1.875 6.25 1.875ZM2.5 0C1.11929 0 0 1.11929 0 2.5V6.25C0 7.63071 1.11929 8.75 2.5 8.75H6.25C7.63071 8.75 8.75 7.63071 8.75 6.25V2.5C8.75 1.11929 7.63071 0 6.25 0H2.5Z",fill:"currentColor"}),(0,e.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5 1.875H13.75C13.4048 1.875 13.125 2.15482 13.125 2.5V6.25C13.125 6.59518 13.4048 6.875 13.75 6.875H17.5C17.8452 6.875 18.125 6.59518 18.125 6.25V2.5C18.125 2.15482 17.8452 1.875 17.5 1.875ZM13.75 0C12.3693 0 11.25 1.11929 11.25 2.5V6.25C11.25 7.63071 12.3693 8.75 13.75 8.75H17.5C18.8807 8.75 20 7.63071 20 6.25V2.5C20 1.11929 18.8807 0 17.5 0H13.75Z",fill:"currentColor"}),(0,e.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5 13.125H13.75C13.4048 13.125 13.125 13.4048 13.125 13.75V17.5C13.125 17.8452 13.4048 18.125 13.75 18.125H17.5C17.8452 18.125 18.125 17.8452 18.125 17.5V13.75C18.125 13.4048 17.8452 13.125 17.5 13.125ZM13.75 11.25C12.3693 11.25 11.25 12.3693 11.25 13.75V17.5C11.25 18.8807 12.3693 20 13.75 20H17.5C18.8807 20 20 18.8807 20 17.5V13.75C20 12.3693 18.8807 11.25 17.5 11.25H13.75Z",fill:"currentColor"}),(0,e.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.25 13.125H2.5C2.15482 13.125 1.875 13.4048 1.875 13.75V17.5C1.875 17.8452 2.15482 18.125 2.5 18.125H6.25C6.59518 18.125 6.875 17.8452 6.875 17.5V13.75C6.875 13.4048 6.59518 13.125 6.25 13.125ZM2.5 11.25C1.11929 11.25 0 12.3693 0 13.75V17.5C0 18.8807 1.11929 20 2.5 20H6.25C7.63071 20 8.75 18.8807 8.75 17.5V13.75C8.75 12.3693 7.63071 11.25 6.25 11.25H2.5Z",fill:"currentColor"}))),(0,e.createElement)("span",{onClick:()=>s("list")},(0,e.createElement)("svg",{className:i()({"fbdl-layout-control-display-selected":"list"===o}),width:"23",height:"16",viewBox:"0 0 23 16",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M10.2222 2.90918H22.9999M10.2222 13.091H22.9999",stroke:"currentColor",strokeWidth:"1.5"}),(0,e.createElement)("ellipse",{cx:"2.875",cy:"13.0909",rx:"2.875",ry:"2.90909",fill:"currentColor"}),(0,e.createElement)("ellipse",{cx:"2.875",cy:"2.90909",rx:"2.875",ry:"2.90909",fill:"currentColor"}))))))};const ae=(e,t)=>{let r=t-e+1;return Array.from({length:r},((t,r)=>r+e))},ie="...";var oe=t=>{let{foundPosts:r,maxNumPages:l,request:a,setRequest:o}=t;const{pagination:c}=a,s=(e=>{let{totalCount:t,pageSize:r,maxNumPages:l,siblingCount:a=1,currentPage:i}=e;return(0,n.useMemo)((()=>{const e=l;if(a+5>=e)return ae(1,e);const t=Math.max(i-a,1),r=Math.min(i+a,e),n=t>2,o=r<e-2,c=e;if(!n&&o)return[...ae(1,5+a),ie,e];if(n&&!o){let t=ae(e-(5+a)+1,e);return[1,ie,...t]}if(n&&o){let e=ae(t,r);return[1,ie,...e,ie,c]}}),[l,t,r,a,i])})({maxNumPages:l,totalCount:r,currentPage:c.current,pageSize:c.limit});if(0===c.current||s.length<2)return null;const u=e=>c.current==e?"fbdl-selected":"fbdl-unselected";let d=s[s.length-1];const f=c.current*c.limit,m=f-c.limit+1;return(0,e.createElement)("div",{className:"fbdl-pagination"},(0,e.createElement)("div",{className:"fbdl-pagination-wrapper"},(0,e.createElement)("div",{className:"fbdl-pagination-info"},(0,e.createElement)("p",null,(0,ne.__)("Showing","filebird-dl")," ",(0,e.createElement)("span",null,m)," ",(0,ne.__)("to","filebird-dl")," ",(0,e.createElement)("span",null,f>r?r:f)," ",(0,ne.__)("of","filebird-dl")," ",(0,e.createElement)("span",null,r)," ",(0,ne.__)("files","filebird-dl"))),(0,e.createElement)("div",{className:"fbdl-pagination-page-number"},(0,e.createElement)("a",{href:!0,className:i()("fbdl-page-previous",{"fbdl-hidden":1==c.current}),disabled:1==c.current,onClick:()=>{o(re(a,(e=>{e.pagination.current=e.pagination.current-1})))}},(0,e.createElement)("span",null,(0,ne.__)("Previous","filebird-dl")),(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},(0,e.createElement)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}))),s.map((t=>t===ie?(0,e.createElement)("a",{className:"fbdl-page-dots"},"…"):(0,e.createElement)("a",{href:!0,"aria-current":"page",className:`fbdl-page-number ${u(t)}`,onClick:()=>(e=>{o(re(a,(t=>{t.pagination.current=e})))})(t)},t))),(0,e.createElement)("a",{className:i()("fbdl-page-next",{"fbdl-hidden":c.current==d}),disabled:c.current==d,onClick:()=>{o(re(a,(e=>{e.pagination.current=e.pagination.current+1})))}},(0,e.createElement)("span",null,(0,ne.__)("Next","filebird-dl")),(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},(0,e.createElement)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))))))},ce=r(296),se=r.n(ce),ue=t=>{let{request:r,setRequest:l,attributes:a}=t;(0,n.useCallback)(se()((e=>i(e)),500),[r]);const i=async e=>{l(re(r,(t=>{t.search=e,t.pagination.current=1})))};return(0,e.createElement)("div",{className:"fbdl-search-control"},(0,e.createElement)("div",{className:"fbdl-search-control-wrapper"},(0,e.createElement)("div",{className:"fbdl-title"},(0,e.createElement)("svg",{width:"40",height:"32",viewBox:"0 0 48 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M43.178 5.44153H19.1795C18.5049 5.44153 17.8302 5.15513 17.3483 4.6778L14.1678 1.43198C13.3004 0.477327 12.1438 0 10.8909 0H4.81897C2.12035 0 0 2.10024 0 4.77327V35.2267C0 37.8998 2.12035 40 4.81897 40H43.178C45.8766 40 47.997 37.8998 47.997 35.2267V10.2148C48.0933 7.54177 45.8766 5.44153 43.178 5.44153Z",fill:"#007CBA"})),(0,e.createElement)("h2",null,a.title))))};const{assets_icon_url:de,type_icons:fe}=fbdl;var me=t=>{let{files:r,column:n}=t;return(0,e.createElement)("div",{className:"fbdl-gridview"},(0,e.createElement)("div",{className:"fbdl-gridview-wrapper"},(0,e.createElement)("div",{className:"fbdl-gridview-container"},(0,e.createElement)("div",{className:`fbdl-grid fb-col-${n}`},r.map(((t,r)=>(0,e.createElement)("div",{className:"fbdl-grid-item",key:r},(0,e.createElement)("div",{className:"fbdl-grid-item-info"},(0,e.createElement)("div",{className:"fbdl-grid-icon"},(0,e.createElement)("img",{src:`${de}${fe[t.type]?fe[t.type]:fe.no_ext}`,alt:t.alt})),(0,e.createElement)("a",{rel:"noopener noreferrer",target:"_blank",href:t.link,className:"fbdl-title"},t.title),(0,e.createElement)("span",{className:"fbdl-file-size"},t.size)),(0,e.createElement)("a",{href:t.url,target:"_blank",download:!0,rel:"noopener noreferrer",className:"fbdl-download-button"},(0,ne.__)("Download","filebird-dl")))))))))};const{assets_icon_url:pe,type_icons:be}=fbdl;var ve=t=>{let{request:r,setRequest:l,files:a}=t;const i=t=>{let{type:r}=t;return(0,e.createElement)(n.Fragment,null)};return(0,e.createElement)("div",{className:"fbdl-listview"},(0,e.createElement)("div",{className:"fbdl-listview-wrapper"},(0,e.createElement)("div",{className:"fbdl-listview-container"},(0,e.createElement)("div",{className:"fbdl-list"},(0,e.createElement)("table",{className:"fbdl-table"},(0,e.createElement)("thead",null,(0,e.createElement)("tr",null,(0,e.createElement)("th",{className:"fbdl-table-first-header"},(0,e.createElement)("div",null,(0,ne.__)("File","filebird-dl"),(0,e.createElement)(i,{type:"post_title"}))),(0,e.createElement)("th",{className:"fbdl-table-header"},(0,e.createElement)("div",{className:"fbdl-table-header-wrapper"},(0,ne.__)("Size","filebird-dl"),(0,e.createElement)(i,{type:"size"}))),(0,e.createElement)("th",{className:"fbdl-table-header"},(0,e.createElement)("div",{className:"fbdl-table-header-wrapper"},(0,ne.__)("Type","filebird-dl"))),(0,e.createElement)("th",{className:"fbdl-table-header"},(0,e.createElement)("div",{className:"fbdl-table-header-wrapper"},(0,ne.__)("Last Modified","filebird-dl"),(0,e.createElement)(i,{type:"post_modified"}))),(0,e.createElement)("th",{className:"fbdl-table-last-header"},(0,ne.__)("Download","filebird-dl")))),(0,e.createElement)("tbody",null,a.map((t=>(0,e.createElement)("tr",null,(0,e.createElement)("td",{className:"fbdl-list-first-item"},(0,e.createElement)("div",{className:"fbdl-list-item-icon"},(0,e.createElement)("div",{className:"fbdl-list-item-icon-wrapper"},(0,e.createElement)("img",{src:`${pe}${be[t.type]?be[t.type]:be.no_ext}`,alt:t.alt})),(0,e.createElement)("div",{className:"fbdl-list-item-title"},(0,e.createElement)("div",null,(0,e.createElement)("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},t.title))))),(0,e.createElement)("td",{className:"fbdl-list-item"},(0,e.createElement)("div",null,t.size)),(0,e.createElement)("td",{className:"fbdl-list-item"},(0,e.createElement)("div",null,t.type?`.${t.type}`:"")),(0,e.createElement)("td",{className:"fbdl-list-item"},(0,e.createElement)("div",null,t.modified)),(0,e.createElement)("td",{className:"fbdl-list-last-item"},(0,e.createElement)("a",{href:t.url,target:"_blank",download:!0,rel:"noopener noreferrer"},(0,ne.__)("Download","filebird-dl"))))))))))))};const{assets_icon_url:ye,type_icons:ge}=fbdl;var he=()=>(0,e.createElement)("div",{className:"fbdl-empty"},(0,e.createElement)("div",{className:"fbdl-empty-wrapper"},(0,e.createElement)("img",{src:`${ye}empty.svg`}),(0,e.createElement)("div",{className:"fbdl-not-found"},(0,ne.__)("No attachments found.","filebird-dl"))));const Ee=fbdl.json_url;var _e=t=>{const r=t.loading?"fbdl-opacity-50":"";return(0,e.createElement)("div",{className:"fbdl-spinner"},t.loading&&(0,e.createElement)("div",null,(0,e.createElement)("div",{className:"fbdl-spinner-wrapper"},(0,e.createElement)("div",{className:"spin"},(0,e.createElement)("div",{className:"spinner-grow"})),(0,e.createElement)("div",{className:"fbdl-spinner-text"},"Loading..."))),(0,e.createElement)("div",{className:r},t.children))},we=t=>{let{loading:r,setLoading:l,setMaxNumPages:a,setFoundPosts:i,attributes:o,request:c,setRequest:s,layout:u,setLayout:d,column:f,setColumn:m}=t;const[p,b]=(0,n.useState)([]),[v,y]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{!async function(){l(!0);const e=await(async e=>{const t={"Content-Type":"application/json"};void 0!==window.fbv_data&&(t["X-WP-Nonce"]=window.fbv_data.rest_nonce);const r=await fetch(`${Ee}/get-attachments`,{method:"POST",headers:t,body:JSON.stringify(e)}).then((e=>{if(e.ok)return e;throw new Error((0,ne.__)("Network response was not ok.","filebird-dl"))}));return await r.json()})(c);l(!1),a(e.maxNumPages),i(e.foundPosts),b(e.files)}()}),[c]),(0,n.useEffect)((()=>{d(o.layout)}),[o.layout]),(0,n.useEffect)((()=>{m(o.column)}),[o.column]),(0,n.useEffect)((()=>{y(!0)}),[]),(0,n.useEffect)((()=>{s(re(c,(e=>{e.selectedFolder=o.request.selectedFolder})))}),[o.request.selectedFolder]),(0,n.useEffect)((()=>{s(re(c,(e=>{e.pagination.limit=o.request.pagination.limit})))}),[o.request.pagination.limit]),(0,n.useEffect)((()=>{s(re(c,(e=>{e.orderBy=o.request.orderBy})))}),[o.request.orderBy]),(0,n.useEffect)((()=>{s(re(c,(e=>{e.orderType=o.request.orderType})))}),[o.request.orderType]),(0,e.createElement)(_e,{loading:r},p.length||r||!v?"grid"===u?(0,e.createElement)(me,{files:p,column:f}):(0,e.createElement)(ve,{request:c,setRequest:s,files:p}):(0,e.createElement)(he,null))};const Ne={pagination:{current:1,limit:10},search:"",orderBy:"",orderType:"",selectedFolder:[]};var Pe=t=>{const[r,a]=(0,n.useState)((e=>{const t={...e.request.pagination},r={...e.request,pagination:t};return{...Ne,...r}})(t)),[i,o]=(0,n.useState)(!1),[c,s]=(0,n.useState)(0),[u,d]=(0,n.useState)(0),[f,m]=(0,n.useState)(t.layout),[p,b]=(0,n.useState)(t.column);return(0,e.createElement)(l().StrictMode,null,(0,e.createElement)(ue,{request:r,setRequest:a,attributes:t}),(0,e.createElement)(le,{request:r,setRequest:a,layout:f,setLayout:m,foundPosts:u,attributes:t}),(0,e.createElement)(we,{attributes:t,column:p,setColumn:b,layout:f,setLayout:m,request:r,setRequest:a,loading:i,setLoading:o,setMaxNumPages:s,setFoundPosts:d}),(0,e.createElement)(oe,{maxNumPages:c,foundPosts:u,request:r,setRequest:a}))},Ce=r=>{let{attributes:n}=r;return(0,e.createElement)("div",{id:"filebird-document-library",style:{pointerEvents:"none"}},(0,e.createElement)(Pe,t({},n,{isPreview:!0})))};const Oe=(0,n.createContext)(),{Consumer:Se,Provider:xe}=Oe,qe={pagination:{current:1,limit:10},search:"",orderBy:"",orderType:"",selectedFolder:[]},je=(e,t)=>{switch(t.type){case"SET_LOADING":return{...e,loading:t.payload};case"SET_LIMIT":return{...e,request:{...e.request,pagination:{...e.request.pagination,limit:t.payload,current:1}}};case"SET_SEARCH_TEXT":return{...e,request:{...e.request,search:t.payload,pagination:{...e.request.pagination,current:1}}};case"SET_FILES":return{...e,files:[...t.payload]};case"SET_PAGINATION":return{...e,foundPosts:t.payload.foundPosts,maxNumPages:t.payload.maxNumPages};case"SET_CURRENT_PAGE":return{...e,request:{...e.request,pagination:{...e.request.pagination,current:t.payload}}};case"SET_LAYOUT":return{...e,layout:t.payload};case"SET_COLUMN":return{...e,column:t.payload};case"SET_ORDER":return{...e,request:{...e.request,pagination:{...e.request.pagination,current:1},orderBy:t.payload.orderBy,orderType:t.payload.orderType}};default:throw new Error}};function Re(t){const[r,l]=(0,n.useReducer)(je,(a=t,{loading:!1,request:Object.assign(qe,{...a.request}),maxNumPages:0,foundPosts:0,layout:a.layout,title:a.title,column:a.column}));var a;return(0,e.createElement)(xe,{value:[r,l]},t.children)}const{Placeholder:Te,Icon:Ae,SelectControl:ke,PanelBody:Me,__experimentalNumberControl:De,__experimentalInputControl:Fe}=wp.components,{InspectorControls:Le}=wp.blockEditor,{useState:He,useEffect:Be}=wp.element,Ie=[{value:"grid",label:(0,ne.__)("Grid","filebird-dl")},{value:"list",label:(0,ne.__)("List","filebird-dl")}],ze=[{value:"post_title",label:(0,ne.__)("Name","filebird-dl")},{value:"post_modified",label:(0,ne.__)("Modified date","filebird-dl")},{value:"size",label:(0,ne.__)("Size","filebird-dl")}],Ve=[{value:"ASC",label:(0,ne.__)("Ascending","filebird-dl")},{value:"DESC",label:(0,ne.__)("Descending","filebird-dl")}];const{registerBlockType:$e}=wp.blocks;$e("filebird/document-library",{title:(0,ne.__)("FileBird Document Library","filebird-dl"),description:(0,ne.__)("Display folder item in a document library.","filebird-dl"),icon:"images-alt2",category:"common",keywords:["filebird-document-library","document","library"],supports:{align:!0},attributes:{request:{type:"object",default:{pagination:{current:1,limit:10},search:"",orderBy:"post_title",orderType:"DESC",selectedFolder:[]}},layout:{type:"string",default:"grid"},title:{type:"string",default:""},column:{type:"number",default:4}},edit:t=>{let{attributes:r,setAttributes:n}=t;const[l,a]=He([]),{selectedFolder:i}=r.request,{limit:o}=r.request.pagination;Be((()=>{(async()=>{const e=await fetch(`${fbv_data.json_url}/gutenberg-get-folders`,{method:"GET",headers:{"X-WP-Nonce":fbv_data.rest_nonce}}).then((e=>{if(e.ok)return e;throw new Error((0,ne.__)("Network response was not ok.","filebird-dl"))})),t=await e.json();a(t.data),c(i)})()}),[]);const c=e=>{const t={...r.request};t.selectedFolder=e,n({request:t})};return(0,e.createElement)(Re,r,i.length?(0,e.createElement)(Ce,{attributes:r}):(0,e.createElement)(Te,{icon:(0,e.createElement)(Ae,{icon:"media-document"}),label:(0,ne.__)("Document Library","filebird-dl"),instructions:(0,ne.__)("Select an image to remove this placeholder","filebird-dl")},(0,e.createElement)("div",{style:{backgroundColor:"#e7e7e7",width:"100%",padding:"30px",display:"flex",justifyContent:"center"}},(0,e.createElement)("div",null,(0,ne.__)("Please select a folder","filebird-dl")))),(0,e.createElement)(Le,null,(0,e.createElement)(Me,{title:(0,ne.__)("Document Library Settings","filebird-dl")},(0,e.createElement)(ke,{className:"filebird-select-wrapper",label:(0,ne.__)("Folder","filebird-dl"),value:i,options:l,onChange:c,multiple:!0,style:{height:100,overflow:"auto"}}),(0,e.createElement)(Fe,{className:"components-base-control",label:(0,ne.__)("Library title","filebird-dl"),value:r.title,type:"text",onChange:(e,t)=>{if(100-e.length<0){const r=e.slice(0,100);t.event.target.value=r,n({title:r})}else n({title:e})}}),"grid"===r.layout&&(0,e.createElement)(De,{className:"components-base-control",label:(0,ne.__)("Column","filebird-dl"),onChange:e=>{n({column:parseInt(e)})},step:1,min:1,max:6,value:r.column}),(0,e.createElement)(De,{className:"components-base-control",label:(0,ne.__)("Limit items","filebird-dl"),onChange:e=>{let t={...r.request};t.pagination.limit=parseInt(e),n({request:t})},min:1,max:200,shiftStep:5,step:1,value:o}),(0,e.createElement)(ke,{className:"components-base-control",label:(0,ne.__)("Layout display","filebird-dl"),value:r.layout,options:Ie,onChange:e=>{n({layout:e})}}),(0,e.createElement)(ke,{label:(0,ne.__)("Sort By","filebird-dl"),value:r.request.orderBy,onChange:e=>{const t={...r.request};t.orderBy=e,n({request:t})},options:ze}),(0,e.createElement)(ke,{label:(0,ne.__)("Sort Type","filebird-dl"),value:r.request.orderType,onChange:e=>{const t={...r.request};t.orderType=e,n({request:t})},options:Ve}))))},save:e=>{let{attributes:t,className:r}=e;return null}})}()}();