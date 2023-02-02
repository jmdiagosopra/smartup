import{L as e,c as t,h as n,S as r,g as o}from"./chunk-3dad17c8.js";import{h as i,a}from"./chunk-7e592414.js";import"./index-e1c26ed7.js";import"./chunk-85ef2c0a.js";const s=!(window.ShadyDOM&&window.ShadyDOM.inUse);let l,c;function d(e){l=(!e||!e.shimcssproperties)&&(s||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(c=window.ShadyCSS.cssBuild);Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?l=window.ShadyCSS.nativeCss:window.ShadyCSS?(d(window.ShadyCSS),window.ShadyCSS=void 0):d(window.WebComponents&&window.WebComponents.flags);const p=l;class u{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function h(e){return function e(t,n){let r=n.substring(t.start,t.end-1);t.parsedCssText=t.cssText=r.trim();if(t.parent){let e=t.previous?t.previous.end:t.parent.start;r=(r=(r=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e})}(r=n.substring(e,t.start-1))).replace(b.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);let o=t.parsedSelector=t.selector=r.trim();t.atRule=0===o.indexOf(v),t.atRule?0===o.indexOf(y)?t.type=m.MEDIA_RULE:o.match(b.keyframesRule)&&(t.type=m.KEYFRAMES_RULE,t.keyframesName=t.selector.split(b.multipleSpaces).pop()):0===o.indexOf(_)?t.type=m.MIXIN_RULE:t.type=m.STYLE_RULE}let o=t.rules;if(o)for(let i,a=0,s=o.length;a<s&&(i=o[a]);a++)e(i,n);return t}(function(e){let t=new u;t.start=0,t.end=e.length;let n=t;for(let r=0,o=e.length;r<o;r++)if(e[r]===g){n.rules||(n.rules=[]);let e=n,t=e.rules[e.rules.length-1]||null;(n=new u).start=r+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[r]===w&&(n.end=r+1,n=n.parent||t);return t}(e=e.replace(b.comments,"").replace(b.port,"")),e)}function f(e,t,n=""){let r="";if(e.cssText||e.rules){let n=e.rules;if(n&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(_)}(n))for(let e,o=0,i=n.length;o<i&&(e=n[o]);o++)r=f(e,t,r);else(r=(r=t?e.cssText:function(e){return function(e){return e.replace(b.mixinApply,"").replace(b.varApply,"")}(e=function(e){return e.replace(b.customProp,"").replace(b.mixinProp,"")}(e))}(e.cssText)).trim())&&(r="  "+r+"\n")}return r&&(e.selector&&(n+=e.selector+" "+g+"\n"),n+=r,e.selector&&(n+=w+"\n\n")),n}const m={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},g="{",w="}",b={comments:/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},_="--",y="@media",v="@",x=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,E=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,C=/@media\s(.*)/,S=new Set,O="shady-unscoped";function k(e){const t=e.textContent;if(!S.has(t)){S.add(t);const n=e.cloneNode(!0);document.head.appendChild(n)}}function R(e){return e.hasAttribute(O)}function A(e,t){return e?("string"==typeof e&&(e=h(e)),t&&P(e,t),f(e,p)):""}function T(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=h(e.textContent)),e.__cssRules||null}function P(e,t,n,r){if(!e)return;let o=!1,i=e.type;if(r&&i===m.MEDIA_RULE){let t=e.selector.match(C);t&&(window.matchMedia(t[1]).matches||(o=!0))}i===m.STYLE_RULE?t(e):n&&i===m.KEYFRAMES_RULE?n(e):i===m.MIXIN_RULE&&(o=!0);let a=e.rules;if(a&&!o)for(let s,l=0,c=a.length;l<c&&(s=a[l]);l++)P(s,t,n,r)}window.ShadyDOM&&window.ShadyDOM.wrap;const j=/;\s*/m,I=/^\s*(initial)|(inherit)\s*$/,N=/\s*!important/,$="_-_";class L{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let U=null;class M{constructor(){this._currentElement=null,this._measureElement=null,this._map=new L}detectMixin(e){return function(e){const t=E.test(e)||x.test(e);return E.lastIndex=0,x.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],n=e.querySelectorAll("style");for(let r=0;r<n.length;r++){const e=n[r];R(e)?s||(k(e),e.parentNode.removeChild(e)):(t.push(e.textContent),e.parentNode.removeChild(e))}return t.join("").trim()}(e.content);if(t){const n=document.createElement("style");return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=""){let n=T(e);return this.transformRules(n,t),e.textContent=A(n),n}transformCustomStyle(e){let t=T(e);return P(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=A(t),t}transformRules(e,t){this._currentElement=t,P(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(x,(e,n,r,o)=>this._produceCssProperties(e,n,r,o,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const n={};let r=!1;return P(t,t=>{(r=r||t===e)||t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))}),n}_consumeCssProperties(e,t){let n=null;for(;n=E.exec(e);){let r=n[0],o=n[1],i=n.index,a=i+r.indexOf("@apply"),s=i+r.length,l=e.slice(0,a),c=e.slice(s),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let p=this._atApplyToCssProperties(o,d);e=`${l}${p}${c}`,E.lastIndex=i+p.length}return e}_atApplyToCssProperties(e,t){e=e.replace(j,"");let n=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){let o,i,a;this._currentElement&&(r.dependants[this._currentElement]=!0);const s=r.properties;for(o in s)a=t&&t[o],i=[o,": var(",e,$,o],a&&i.push(",",a.replace(N,"")),i.push(")"),N.test(s[o])&&i.push(" !important"),n.push(i.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,t){let n=I.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let n,r,o=e.split(";"),i={};for(let a,s,l=0;l<o.length;l++)(a=o[l])&&(s=a.split(":")).length>1&&(n=s[0].trim(),r=s.slice(1).join(":"),t&&(r=this._replaceInitialOrInherit(n,r)),i[n]=r);return i}_invalidateMixinEntry(e){if(U)for(let t in e.dependants)t!==this._currentElement&&U(t)}_produceCssProperties(e,t,n,r,o){if(n&&function e(t,n){let r=t.indexOf("var(");if(-1===r)return n(t,"","","");let o=function(e,t){let n=0;for(let r=t,o=e.length;r<o;r++)if("("===e[r])n++;else if(")"===e[r]&&0==--n)return r;return-1}(t,r+3),i=t.substring(r+4,o),a=t.substring(0,r),s=e(t.substring(o+1),n),l=i.indexOf(",");return-1===l?n(a,i.trim(),"",s):n(a,i.substring(0,l).trim(),i.substring(l+1).trim(),s)}(n,(e,t)=>{t&&this._map.get(t)&&(r=`@apply ${t};`)}),!r)return e;let i=this._consumeCssProperties(""+r,o),a=e.slice(0,e.indexOf("--")),s=this._cssTextToMap(i,!0),l=s,c=this._map.get(t),d=c&&c.properties;d?l=Object.assign(Object.create(d),s):this._map.set(t,l);let p,u,h=[],f=!1;for(p in l)void 0===(u=s[p])&&(u="initial"),!d||p in d||(f=!0),h.push(`${t}${$}${p}: ${u}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),n&&(a=`${e};${a}`),`${a}${h.join("; ")};`}}M.prototype.detectMixin=M.prototype.detectMixin,M.prototype.transformStyle=M.prototype.transformStyle,M.prototype.transformCustomStyle=M.prototype.transformCustomStyle,M.prototype.transformRules=M.prototype.transformRules,M.prototype.transformRule=M.prototype.transformRule,M.prototype.transformTemplate=M.prototype.transformTemplate,M.prototype._separator=$,Object.defineProperty(M.prototype,"invalidCallback",{get:()=>U,set(e){U=e}});const B=e=>t=>(class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe(()=>this.stateChanged(e.getState())),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}}),D=(e,t)=>{let n=window.matchMedia(e);n.addListener(e=>t(e.matches)),t(n.matches)},V=e=>{window.addEventListener("online",()=>e(!1)),window.addEventListener("offline",()=>e(!0)),e(!1===navigator.onLine)},F=e=>{document.body.addEventListener("click",t=>{if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const n=t.composedPath().filter(e=>"A"===e.tagName)[0];if(!n||n.target||n.hasAttribute("download")||"external"===n.getAttribute("rel"))return;const r=n.href;if(!r||-1!==r.indexOf("mailto:"))return;const o=window.location,i=o.origin||o.protocol+"//"+o.host;0===r.indexOf(i)&&(t.preventDefault(),r!==o.href&&(window.history.pushState({},"",r),e(o,t)))}),window.addEventListener("popstate",t=>e(window.location,t)),e(window.location,null)},z=({title:e,description:t,url:n,image:r,imageAlt:o})=>{e&&(document.title=e,K("property","og:title",e)),t&&(K("name","description",t),K("property","og:description",t)),r&&K("property","og:image",r),o&&K("property","og:image:alt",o),K("property","og:url",n=n||window.location.href)};function K(e,t,n){let r=document.head.querySelector(`meta[${e}="${t}"]`);r||((r=document.createElement("meta")).setAttribute(e,t),document.head.appendChild(r)),r.setAttribute("content",n||"")}function W(e){return e=e||[],Array.isArray(e)?e:[e]}function H(e){return`[Vaadin.Router] ${e}`}const Y="module",X="nomodule",q=[Y,X];function G(e){if(!e.match(/.+\.[m]?js$/))throw new Error(H(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function J(e){if(!e||!re(e.path))throw new Error(H('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(ne(e.action)||Array.isArray(e.children)||ne(e.children)||te(t)||n.some(t=>re(e[t]))))throw new Error(H(`Expected route config "${e.path}" to include either "${n.join('", "')}" `+'or "action" function but none found.'));if(t)if(re(t))G(t);else{if(!q.some(e=>e in t))throw new Error(H('Expected route bundle to include either "'+X+'" or "'+Y+'" keys, or both'));q.forEach(e=>e in t&&G(t[e]))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(H(`Route config "${e.path}" has both "redirect" and "${t}" properties, `+`and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function Q(e){W(e).forEach(e=>J(e))}function Z(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||((n=document.createElement("script")).setAttribute("src",e),t===Y?n.setAttribute("type",Y):t===X&&n.setAttribute(X,""),n.async=!0),new Promise((e,t)=>{n.onreadystatechange=n.onload=(t=>{n.__dynamicImportLoaded=!0,e(t)}),n.onerror=(e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)}),null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()})}function ee(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function te(e){return"object"==typeof e&&!!e}function ne(e){return"function"==typeof e}function re(e){return"string"==typeof e}function oe(e){const t=new Error(H(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const ie=new class{};function ae(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let r=0;r<n.length;r++){const e=n[r];if(e.nodeName&&"a"===e.nodeName.toLowerCase()){t=e;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;t&&"a"===t.nodeName.toLowerCase()&&(t.target&&"_self"!==t.target.toLowerCase()||t.hasAttribute("download")||t.pathname===window.location.pathname&&""!==t.hash||(t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t))===window.location.origin&&ee("go",{pathname:t.pathname})&&e.preventDefault())}const se={activate(){window.document.addEventListener("click",ae)},inactivate(){window.document.removeEventListener("click",ae)}};function le(e){"vaadin-router-ignore"!==e.state&&ee("go",{pathname:window.location.pathname})}/Trident/.test(navigator.userAgent)&&!ne(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const ce={activate(){window.addEventListener("popstate",le)},inactivate(){window.removeEventListener("popstate",le)}};var de=Ce,pe=be,ue=function(e,t){return _e(be(e,t))},he=_e,fe=Ee,me="/",ge="./",we=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function be(e,t){for(var n,r=[],o=0,i=0,a="",s=t&&t.delimiter||me,l=t&&t.delimiters||ge,c=!1;null!==(n=we.exec(e));){var d=n[0],p=n[1],u=n.index;if(a+=e.slice(i,u),i=u+d.length,p)a+=p[1],c=!0;else{var h="",f=e[i],m=n[2],g=n[3],w=n[4],b=n[5];if(!c&&a.length){var _=a.length-1;l.indexOf(a[_])>-1&&(h=a[_],a=a.slice(0,_))}a&&(r.push(a),a="",c=!1);var y=""!==h&&void 0!==f&&f!==h,v="+"===b||"*"===b,x="?"===b||"*"===b,E=h||s,C=g||w;r.push({name:m||o++,prefix:h,delimiter:E,optional:x,repeat:v,partial:y,pattern:C?ve(C):"[^"+ye(E)+"]+?"})}}return(a||i<e.length)&&r.push(a+e.substr(i)),r}function _e(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var s=e[a];if("string"!=typeof s){var l,c=n?n[s.name]:void 0;if(Array.isArray(c)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===c.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(l=i(c[d],s),!t[a].test(l))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');o+=(0===d?s.prefix:s.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"));s.partial&&(o+=s.prefix)}else{if(l=i(String(c),s),!t[a].test(l))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+l+'"');o+=s.prefix+l}}else o+=s}return o}}function ye(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function ve(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function xe(e){return e&&e.sensitive?"":"i"}function Ee(e,t,n){for(var r=(n=n||{}).strict,o=!1!==n.end,i=ye(n.delimiter||me),a=n.delimiters||ge,s=[].concat(n.endsWith||[]).map(ye).concat("$").join("|"),l="",c=0===e.length,d=0;d<e.length;d++){var p=e[d];if("string"==typeof p)l+=ye(p),c=d===e.length-1&&a.indexOf(p[p.length-1])>-1;else{var u=ye(p.prefix),h=p.repeat?"(?:"+p.pattern+")(?:"+u+"(?:"+p.pattern+"))*":p.pattern;t&&t.push(p),p.optional?p.partial?l+=u+"("+h+")?":l+="(?:"+u+"("+h+"))?":l+=u+"("+h+")"}}return o?(r||(l+="(?:"+i+")?"),l+="$"===s?"$":"(?="+s+")"):(r||(l+="(?:"+i+"(?="+s+"))?"),c||(l+="(?="+i+"|"+s+")")),new RegExp("^"+l,xe(n))}function Ce(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(Ce(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",xe(n))}(e,t,n):function(e,t,n){return Ee(be(e,n),t,n)}(e,t,n)}de.parse=pe,de.compile=ue,de.tokensToFunction=he,de.tokensToRegExp=fe;const{hasOwnProperty:Se}=Object.prototype,Oe=new Map;function ke(e){try{return decodeURIComponent(e)}catch(t){return e}}function Re(e,t,n,r,o){let i,a,s=0,l=e.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(c){if(e===c)return{done:!0};const d=e.__children=e.__children||e.children;if(!i&&(i=function(e,t,n,r,o){const i=`${e}|${n=!!n}`;let a=Oe.get(i);if(!a){const t=[];a={keys:t,pattern:de(e,t,{end:n,strict:""===e})},Oe.set(i,a)}const s=a.pattern.exec(t);if(!s)return null;const l=Object.assign({},o);for(let c=1;c<s.length;c++){const e=a.keys[c-1],t=e.name,n=s[c];void 0===n&&Se.call(l,t)||(e.repeat?l[t]=n?n.split(e.delimiter).map(ke):[]:l[t]=n?ke(n):n)}return{path:s[0],keys:(r||[]).concat(a.keys),params:l}}(l,t,!d,r,o)))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&d)for(;s<d.length;){if(!a){const r=d[s];r.parent=e;let o=i.path.length;o>0&&"/"===t.charAt(o)&&(o+=1),a=Re(r,t.substr(o),n,i.keys,i.params)}const r=a.next(c);if(!r.done)return{done:!1,value:r.value};a=null,s++}return{done:!0}}}}function Ae(e){if(ne(e.route.action))return e.route.action(e)}Oe.set("|false",{keys:[],pattern:/(?:)/});class Te{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Ae,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Q(e);const t=[...W(e)];this.root.__children=t}addRoutes(e){return Q(e),this.root.__children.push(...W(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,re(e)?{pathname:e}:e),n=Re(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let o=null,i=null,a=t;function s(e,l=o.value.route,c){const d=null===c&&o.value.route;return o=i||n.next(d),i=null,e||!o.done&&function(e,t){let n=t;for(;n;)if((n=n.parent)===e)return!0;return!1}(l,o.value.route)?o.done?Promise.reject(oe(t)):(function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};!function(e,t){return!t.parent||!e||!e.length||e[e.length-1].route!==t.parent}(e.chain,n)?e.chain.push(t):e.chain=[t]}}(t,o.value),a=Object.assign({},t,o.value),Promise.resolve(r(a)).then(t=>null!=t&&t!==ie?(a.result=t.result||t,a):s(e,l,t))):(i=o,Promise.resolve(ie))}return t.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(a);if(e?console.warn(t):e=new Error(t),e.context=e.context||a,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return a.result=this.errorHandler(e),a;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}Te.pathToRegexp=de;const{pathToRegexp:Pe}=Te,je=new Map;function Ie(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}".`+" Try seting unique 'name' route properties.");return n&&n[0]}function Ne(e){let t=e.path;return void 0!==(t=Array.isArray(t)?t[0]:t)?t:""}function $e(e,t={}){if(!(e instanceof Te))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,o)=>{let i=Ie(n,r);if(!(i||(n.clear(),function e(t,n,r){const o=n.name||n.component;if(o&&(t.has(o)?t.get(o).push(n):t.set(o,[n])),Array.isArray(r))for(let i=0;i<r.length;i++){const o=r[i];o.parent=n,e(t,o,o.__children||o.children)}}(n,e.root,e.root.__children),i=Ie(n,r))))throw new Error(`Route "${r}" not found`);let a=je.get(i.fullPath);if(!a){let e=Ne(i),t=i.parent;for(;t;){const n=Ne(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=Pe.parse(e),r=Pe.tokensToFunction(n),o=Object.create(null);for(let i=0;i<n.length;i++)re(n[i])||(o[n[i].name]=!0);a={toPath:r,keys:o},je.set(e,a),i.fullPath=e}let s=a.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const e={},n=Object.keys(o);for(let t=0;t<n.length;t++){const r=n[t];a.keys[r]||(e[r]=o[r])}const r=t.stringifyQueryParams(e);r&&(s+="?"===r.charAt(0)?r:`?${r}`)}return s}}let Le=[];function Ue(e){Le.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),Le=e}const Me=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t},Be=(e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};function De(e,t){return e.classList.add(t),new Promise(n=>{if(Me(e)){const r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${o}`),Be(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}const Ve=256;function Fe(e){return null!=e}function ze({pathname:e="",chain:t=[],params:n={},redirectFrom:r,resolver:o},i){const a=t.map(e=>e.route);return{baseUrl:o&&o.baseUrl||"",pathname:e,routes:a,route:i||a.length&&a[a.length-1]||null,params:n,redirectFrom:r,getUrl:(e={})=>Xe(Ge.pathToRegexp.compile(qe(a))(Object.assign({},n,e)),o)}}function Ke(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function We(e,t,n){if(ne(e))return e.apply(n,t)}function He(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?We(n[e],t,n):void 0}function Ye(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function Xe(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function qe(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class Ge extends Te{constructor(e,t){const n=document.head.querySelector("base");super([],Object.assign({baseUrl:n&&n.getAttribute("href")},t)),this.resolveRoute=(e=>this.__resolveRoute(e));const r=Ge.NavigationTrigger;Ge.setTriggers.apply(Ge,Object.keys(r).map(e=>r[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=ze({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe()}__resolveRoute(e){const t=e.route;let n=Promise.resolve();ne(t.children)&&(n=n.then(()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{Fe(e)||ne(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!te(e))throw new Error(H(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=W(e);for(let r=0;r<n.length;r++)J(n[r]),t.__children.push(n[r])}(e,t)}));const r={redirect:t=>Ke(e,t),component:t=>(function(e,t){const n=document.createElement(t);n.location=ze(e);const r=e.chain.map(e=>e.route).indexOf(e.route);return e.chain[r].element=n,n})(e,t)};return n.then(()=>We(t.action,[e,r],t)).then(e=>Fe(e)&&(e instanceof HTMLElement||e.redirect||e===ie)?e:re(t.redirect)?r.redirect(t.redirect):t.bundle?function(e){return re(e)?Z(e):Promise.race(q.filter(t=>t in e).map(t=>Z(e[t],t)))}(t.bundle).then(()=>{},()=>{throw new Error(H(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0).then(e=>Fe(e)?e:re(t.component)?r.component(t.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e){this.__urlForName=void 0,super.setRoutes(e),this.__onNavigationEvent()}render(e,t){const n=++this.__lastStartedRenderId,r=e.pathname||e;return this.ready=this.resolve(e).then(e=>this.__fullyResolveChain(e)).then(e=>{if(n===this.__lastStartedRenderId){const r=this.__previousContext;if(e===r)return this.location;this.location=ze(e),ee("location-changed",{router:this,location:this.location}),t&&this.__updateBrowserHistory(e.pathname,e.redirectFrom),this.__addAppearingContent(e,r);const o=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),o.then(()=>{if(n===this.__lastStartedRenderId)return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),Ye(this.__outlet&&this.__outlet.children),this.location=ze({pathname:r,resolver:this}),ee("error",{router:this,error:e,pathname:r}),e}),this.ready}__fullyResolveChain(e,t=e){return this.__amendWithResolutionResult(t).then(n=>{const r=n!==t?n:e;return n.next().then(e=>{if(null===e||e===ie){if(Xe(qe(n.chain),n.resolver)!==n.pathname)throw oe(r)}return e&&e!==ie?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(r)})})}__amendWithResolutionResult(e){const t=e.result;return t instanceof HTMLElement?Promise.resolve(e):t.redirect?this.__redirect(t.redirect,e.__redirectCount).then(e=>this.__amendWithResolutionResult(e)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(H(`Invalid route resolution result for path "${e.pathname}". `+`Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". `+"Double check the action return value for the route.")))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=(this.__previousContext||{}).chain||[],n=e.chain;let r=Promise.resolve();const o=()=>({cancel:!0}),i=t=>Ke(e,t);if(e.__divergedChainIndex=0,t.length){for(let r=0;r<Math.min(t.length,n.length)&&(t[r].route===n[r].route&&t[r].path===n[r].path&&(t[r].element&&t[r].element.localName)===(n[r].element&&n[r].element.localName));r=++e.__divergedChainIndex);for(let n=t.length-1;n>=e.__divergedChainIndex;n--){const i=ze(e);r=r.then(He("onBeforeLeave",[i,{prevent:o},this],t[n].element)).then(e=>{if(!(e||{}).redirect)return e})}}for(let a=e.__divergedChainIndex;a<n.length;a++){const t=ze(e,n[a].route);r=r.then(He("onBeforeEnter",[t,{prevent:o,redirect:i},this],n[a].element))}return r.then(t=>{if(t){if(t.cancel)return this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount)}return e})}__redirect(e,t){if(t>Ve)throw new Error(H(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(H(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory(e,t){if(window.location.pathname!==e){const n=t?"replaceState":"pushState";window.history[n](null,document.title,e),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();let n=this.__outlet;for(let o=0;o<e.__divergedChainIndex;o++){const r=t&&t.chain[o].element;if(r){if(r.parentNode!==n)break;e.chain[o].element=r,n=r}}this.__disappearingContent=Array.from(n.children),this.__appearingContent=[];let r=n;for(let o=e.__divergedChainIndex;o<e.chain.length;o++){const t=e.chain[o].element;t&&(r.appendChild(t),r===n&&this.__appearingContent.push(t),r=t)}}__removeDisappearingContent(){this.__disappearingContent&&Ye(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Ye(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex;n--){const r=t.chain[n].element;if(r)try{const n=ze(e);We(r.onAfterLeave,[n,{},t.resolver],r)}finally{Ye(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const n=e.chain[t].element||{},r=ze(e,e.chain[t].route);We(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],o=e.chain;let i;for(let a=o.length;a>0;a--)if(o[a-1].route.animate){i=o[a-1].route.animate;break}if(t&&n&&i){const e=te(i)&&i.leave||"leaving",o=te(i)&&i.enter||"entering";r.push(De(t,e)),r.push(De(n,o))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const t=e?e.detail.pathname:window.location.pathname;re(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render(t,!0))}static setTriggers(...e){Ue(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=$e(this)),Xe(this.__urlForName(e,t),this)}urlForPath(e,t){return Xe(Ge.pathToRegexp.compile(e)(t),this)}static go(e){return ee("go",{pathname:e})}}const Je=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Qe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ze(e,t){if("function"!=typeof e)return;const n=Je.exec(e.toString());if(n)try{e=new Function(n[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return e(t)}window.Vaadin=window.Vaadin||{};const et=function(e,t){if(window.Vaadin.developmentMode)return Ze(e,t)};function tt(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Qe?!function(){if(Qe){const e=Object.keys(Qe).map(e=>Qe[e]).filter(e=>e.productionMode);if(e.length>0)return!0}return!1}():!Ze(function(){return!0}))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.2.0"}),et(tt),Ge.NavigationTrigger={POPSTATE:ce,CLICK:se};var nt=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),rt=function(){return Math.random().toString(36).substring(7).split("").join(".")},ot={INIT:"@@redux/INIT"+rt(),REPLACE:"@@redux/REPLACE"+rt(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+rt()}};function it(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function at(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}function st(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ct(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function dt(){}function pt(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}"production"!==process.env.NODE_ENV&&"string"==typeof dt.name&&"isCrushed"!==dt.name&&at('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');var ut=pt();ut.withExtraArgument=pt;const ht=e=>t=>{const n="/"===e?"home":e.slice(1);t(ft(n)),t(bt(!1))},ft=e=>t=>{switch(e){case"home":import("./index-e1c26ed7.js");break;case"training":import("./index-d57a7df9.js");break;case"community":import("./index-e5266bbb.js");break;case"career":import("./index-cb0f04df.js");break;default:e="view404",import("./view-404-b4a06e92.js")}t(mt(e))},mt=e=>({type:"UPDATE_PAGE",page:e});let gt;const wt=e=>(t,n)=>{e!==n().app.offline&&t((()=>e=>{e({type:"OPEN_SNACKBAR"}),window.clearTimeout(gt),gt=window.setTimeout(()=>e({type:"CLOSE_SNACKBAR"}),3e3)})()),t({type:"UPDATE_OFFLINE",offline:e})},bt=e=>({type:"UPDATE_DRAWER_STATE",opened:e}),_t={page:"",offline:!1,drawerOpened:!1,snackbarOpened:!1},yt={UPDATE_PAGE:(e,t)=>({...e,page:t.page}),UPDATE_OFFLINE:(e,t)=>({...e,offline:t.offline}),UPDATE_DRAWER_STATE:(e,t)=>({...e,drawerOpened:t.opened}),OPEN_SNACKBAR:e=>({...e,snackbarOpened:!0}),CLOSE_SNACKBAR:e=>({...e,snackbarOpened:!1}),default:e=>e},vt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ct,xt=function e(t,n,r){var o;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var i=t,a=n,s=[],l=s,c=!1;function d(){l===s&&(l=s.slice())}function p(){if(c)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return a}function u(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(c)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return d(),l.push(e),function(){if(t){if(c)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,d();var n=l.indexOf(e);l.splice(n,1)}}}function h(e){if(!it(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw new Error("Reducers may not dispatch actions.");try{c=!0,a=i(a,e)}finally{c=!1}for(var t=s=l,n=0;n<t.length;n++)(0,t[n])();return e}return h({type:ot.INIT}),(o={dispatch:h,subscribe:u,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");i=e,h({type:ot.REPLACE})}})[nt]=function(){var e,t=u;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(p())}return n(),{unsubscribe:t(n)}}})[nt]=function(){return this},e},o}(e=>e,(()=>{const e=localStorage.getItem("SMARTUP_EXPERIENCE")||"{}",t=JSON.parse(e);return t||void 0})(),vt((e=>{return t=>(n,r)=>{let o={};const i=t(n,r);return Object.assign({},i,{addReducers(t){const n=Object.assign({},o,t);this.replaceReducer(e(o=n))}})}})(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"production"!==process.env.NODE_ENV&&void 0===e[o]&&at('No reducer provided for key "'+o+'"'),"function"==typeof e[o]&&(n[o]=e[o])}var i,a,s=Object.keys(n);"production"!==process.env.NODE_ENV&&(i={});try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:ot.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:ot.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+ot.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(l){a=l}return function(e,t){if(void 0===e&&(e={}),a)throw a;if("production"!==process.env.NODE_ENV){var r=function(e,t,n,r){var o=Object.keys(t),i=n&&n.type===ot.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===o.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!it(e))return"The "+i+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following keys: "'+o.join('", "')+'"';var a=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)&&!r[e]});return a.forEach(function(e){r[e]=!0}),n&&n.type===ot.REPLACE?void 0:a.length>0?"Unexpected "+(a.length>1?"keys":"key")+' "'+a.join('", "')+'" found in '+i+'. Expected to find one of the known reducer keys instead: "'+o.join('", "')+'". Unexpected keys will be ignored.':void 0}(e,n,t,i);r&&at(r)}for(var o=!1,l={},c=0;c<s.length;c++){var d=s[c],p=n[d],u=e[d],h=p(u,t);if(void 0===h){var f=st(d,t);throw new Error(f)}l[d]=h,o=o||h!==u}return o?l:e}}),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){lt(e,t,n[t])})}return e}({},n,{dispatch:r=ct.apply(void 0,i)(n.dispatch)})}}}(ut)));xt.addReducers({app:(e=_t,t)=>(yt[t.type]||yt.default)(e,t)}),xt.subscribe(()=>{(e=>{const t=JSON.stringify(e);localStorage.setItem("SMARTUP_EXPERIENCE",t)})(xt.getState())});window.customElements.define("snack-bar",class extends e{static get styles(){return[t`
        :host {
          display: block;
          position: fixed;
          top: 100%;
          left: 0;
          right: 0;
          padding: 12px;
          background-color: var(--app-secondary-color);
          color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          text-align: center;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          transition-property: visibility, transform;
          transition-duration: 0.2s;
          visibility: hidden;
        }

        :host([active]) {
          visibility: visible;
          transform: translate3d(0, -100%, 0);
        }

        @media (min-width: 768px) {
          :host {
            width: 320px;
            margin: auto;
          }
        }
      `]}static get properties(){return{active:{type:Boolean}}}render(){return n`
      <slot></slot>
    `}});customElements.define("smartup-brand",class extends e{static get styles(){return[t`
        .brand-images {
          display: flex;
          align-items: center;
        }
        .brand-images img {
          width: 100%;
          box-sizing: border-box;
        }

        .brand-images .smartup-logo{
          width: 120px;
          padding: 10px;
          cursor: pointer;
        }

        @media(min-width: 768px) {
          .brand-images .smartup-logo {
            width: 180px;
            padding: 0px;
          }
        }
      `]}render(){return n`
      <a href="/smartup/home" class="brand-images" aria-label="Sopra Steria">
        <img class="smartup-logo" src="./assets/images/smartup-xperience-logo.png">
      </a>
    `}});const Et=e=>{new Ge(e,{baseUrl:"/smartup/"}).setRoutes([{path:"/",redirect:"/home"},{path:"/home",component:"main-view"},{path:"/training",component:"training-view",action:()=>import("./index-d57a7df9.js")},{path:"/community",component:"smartup-community-view",action:()=>import("./index-e5266bbb.js")},{path:"/career",component:"smartup-career-view",action:()=>import("./index-cb0f04df.js")},{path:"(.*)",component:"view-404",action:()=>import("./view-404-b4a06e92.js")}])};window.customElements.define("app-shell",class extends(B(xt)(e)){static get styles(){return[r,t`
        :host {
          height: 100%;
          --app-primary-color: #CC0033;
          --app-secondary-color: #4A4A4A;
          --app-background-color: #fff;
          --app-font-weight-light: 300;
          --app-font-weight-normal: 400;
          --app-font-weight-bold: 700;
          --app-font-weight-extrabold: 800;

          --app-mobile-menu-btn-color: white;
          --app-dark-text-color: var(--app-secondary-color);
          --app-light-text-color: white;

          --app-paragraph-font-size-mobile: 16px;
          --app-title-font-size-mobile: 18px;
          --app-subtitle-font-size: 24px;
          --app-image-text-font-size-mobile: 36px;
          --app-title-font-size-desktop: 32px;
          
          --app-section-padding-desktop: 75px 120px;
          --app-section-padding-mobile: 36px 16px;
          --app-section-tags-container-background-color: lightgrey;

          --app-header-background-color: black;
          --app-header-text-color: var(--app-light-text-color);
          --app-header-selected-color: var(--app-primary-color);

          --app-drawer-background-color: black;
          --app-drawer-text-color: var(--app-light-text-color);
          --app-drawer-selected-color: #78909C;

          --app-button-primary-color: #B3002D;

          --app-smarters-reviews-background: rgb(179, 79, 92);

          --header-height: 68px;
          --header-footer-padding: 0 1rem;
        }

        header {
          position: fixed;
          height: var(--header-height, 68px);
          z-index: 999;
          top: 0;
          left: 0;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          padding: var(--header-footer-padding, 0 1rem);
          align-items: center;
          background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
          transition: all 0.3s ease;
        }

        .toolbar-list {
          display: none;
          padding: 0;
        }

        .toolbar-list > li {
          list-style: none;
          display: inline-block;
          min-width: 100px;
          text-align: center;
        }

        .toolbar-list > li > a {
          letter-spacing: 0;
          text-align: center;
          font-weight: 300;
          font-size: 16px;
          color: var(--app-header-text-color);
          text-decoration: none;
        }

        .toolbar-list > li > a[selected],
        .toolbar-list > li > a:hover {
          font-weight: 800;
        }

        .navigation-buttons {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-grow: 1;
          padding-left: 10px;
        }

        .menu-btn {
          background: none;
          border: none;
          padding: 0;
          fill: var(--app-mobile-menu-btn-color);
          cursor: pointer;
          z-index: 1;
        }

        #want-know-btn {
          font-size: 9px;
          margin: 0;
          padding: 7px 20px;
          width: fit-content;
          height: fit-content;
          font-weight: 600;
        }

        .drawer-list {
          box-sizing: border-box;
          width: 100%;
          height: 100vh;
          background: var(--app-drawer-background-color);
          position: absolute;
          top: 0;
          left:0;
          padding-top: var(--header-height, 68px);
          text-align: right;
          opacity: 0.84;
          transition: all 0.5s ease;
          transform: translateX(100%);
        }

        .drawer-list[opened] {
          transform: translateX(0);
        }

        .drawer-list > a {
          display: block;
          text-decoration: none;
          color: var(--app-drawer-text-color);
          line-height: 40px;
          padding: 0 16px;
        }

        .drawer-list > a[selected] {
          font-weight: 800;
        }

        main {
          display: block;
          min-height: calc(100vh - var(--header-height, 68px));
        }

        .page {
          display: none;
        }

        .page[active] {
          display: block;
        }

        footer {
          height: var(--header-height, 68px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 8px;
          font-weight: 300;
          padding: var(--header-footer-padding, 0 1rem);
          background: var(--app-drawer-background-color);
          color: var(--app-drawer-text-color);
          position: relative;
        }

        footer:after {
          content: '';
          display: block;
          height: 100%;
          width: 100%;
          position: fixed;
          left: 0;
          bottom: 0;
          transform: translateY(100%);
          background: var(--app-drawer-background-color);
        }

        footer p {
          font-weight: bold;
          text-align: center;
          font-size: 11px;
          padding: 0 1rem;
        }

        .toggle-btn {
          width: 24px;
          height: 24px;
          cursor: pointer;
          z-index: 10;
        }

        .toggle-btn[clicked] .toggle-bar {
          background: inherit;
        }

        .toggle-btn[clicked] .toggle-bar:before,
        .toggle-btn[clicked] .toggle-bar:after {
          top: 0;
        }

        .toggle-btn[clicked] .toggle-bar:before {
          transform: rotate(45deg);
        }

        .toggle-btn[clicked] .toggle-bar:after {
          transform: rotate(-45deg);
        }

        #want-know-btn, .toggle-btn {
          margin-left: 20px;
        }

        [hidden] {
          display: none !important;
        }

        .back-to-top {
            position:fixed;
            width:40px;
            height:40px;
            bottom:50px;
            right:6px;
            background-color:#0C9;
            color:#FFF;
            cursor: pointer;
            border-radius:50px;
            text-align:center;
            box-shadow: -1px -1px 5px #999;
            z-index: 999;
            opacity: 0;
            transition: opacity 0.5s;
            background: var(--app-button-primary-color);
            transform: rotate(180deg);
            padding-top: 8px;
            border: 0;
        } 

        .back-to-top.active {
            opacity: 1;
        }
        
        footer .made-with-love svg {
          width: 20px;
          position: relative;
          top: 5px;
          margin: 0 3px;
        }

        @media (min-width: 768px) {
          :host {
            --header-height: 100px;
            --header-footer-padding: 0 120px;
          }

          header{
            padding: 0 25px;
          }

          .toolbar-list {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }

          .toggle-btn {
            display: none;
          }

          #want-know-btn {
            font-size: 1rem;
            font-weight: 700;
            padding: 1rem;
            height: 48px;
            width: 275px;
            margin-left: 0;
          }

          .main {
            padding-top: 107px;
          }

          .back-to-top.active {
            right: 11px;
            bottom: 80px;
          }
          
          footer {
            font-size: 16px;
          }

          footer p {
            padding: 0;
            font-size: 1rem;
          }
        }

        @media (min-width: 1024px) {
          header{
            padding: 0 120px;
          }
        }
      `]}static get properties(){return{appTitle:{type:String},_page:{type:String},_drawerOpened:{type:Boolean},_snackbarOpened:{type:Boolean},_offline:{type:Boolean},_isViewScrolled:{type:Boolean}}}constructor(){super(),this._isViewScrolled=!1,window.addEventListener("scroll",()=>{this.shadowRoot.querySelector("header").style.background=`rgba(1, 1, 1, ${window.scrollY/100})`,this._isViewScrolled=window.scrollY/100>.5,this.shadowRoot.querySelector(".back-to-top").classList.toggle("active",window.scrollY/100>5)}),this._setIntersectionObserversListeners()}render(){return n`
      <header ?solid=${this._isViewScrolled}>
        <smartup-brand></smartup-brand>
        <div class="navigation-buttons">
          <nav>
            <ul class="toolbar-list">
              <li><a ?selected="${"training"===this._page}" href="./training" @click="${()=>Ge.go("./training")}"><lit-i18n>TRAINING</lit-i18n></a></li>
              <li><a ?selected="${"community"===this._page}" href="/smartup/community"><lit-i18n>COMMUNITY</lit-i18n></a></li>
              <li><a ?selected="${"career"===this._page}" href="/smartup/career"><lit-i18n>CAREER</lit-i18n></a></li>
            </ul>
          </nav>
          <a class="primary-button big" id="want-know-btn" href="mailto:bedigital@soprasteria.com?subject=SmartUp+Xperience"><lit-i18n raw>WANT_TO_BE_SMARTER_BTN</lit-i18n></a>
        </div>
        <div ?clicked="${this._drawerOpened}" class="toggle-btn" @click="${this._menuButtonClicked}">
          <div class="toggle-bar" title="Menu" tabindex="3"></div>
        </div>
        <div ?opened="${this._drawerOpened}" class="drawer-list">
          <a ?selected="${"home"===this._page}" href="/home"><lit-i18n>HOME</lit-i18n></a>
          <a ?selected="${"training"===this._page}" href="/smartup/training"><lit-i18n>SMARTUP_TRAINING</lit-i18n></a>
          <a ?selected="${"community"===this._page}" href="/smartup/community"><lit-i18n>SMARTUP_COMMUNITY</lit-i18n></a>
          <a ?selected="${"career"===this._page}" href="/smartup/career"><lit-i18n>SMARTUP_CAREER</lit-i18n></a>
        </div>
      </header>
      
      <main></main>
      
      <footer>
        <p class="made-with-love" tabindex="0" aria-label="${o("MADE_WITH_LOVE_A11Y",!0)}"><lit-i18n>MADE_WITH_LOVE_1</lit-i18n>${i}<lit-i18n>MADE_WITH_LOVE_2</lit-i18n></p>
        <smartup-brand></smartup-brand>
      </footer>
      <button class="back-to-top" aria-label="${o("BACK_TO_TOP_BUTTOM",!0)}" @click="${this._backToTopButtonClicked}"> ${a}</button>
    `}firstUpdated(){F((e,t)=>{xt.dispatch(ht(decodeURIComponent(e.pathname))),t&&"click"===t.type&&window.scrollTo(0,0)}),V(e=>xt.dispatch(wt(e))),D("(min-width: 768px)",()=>xt.dispatch(bt(!1)))}updated(e){if(e.has("_page")){Et(this.shadowRoot.querySelector("main"));const e=this.appTitle+" - "+this._page;z({title:e,description:e})}}stateChanged(e){this._page=e.app.page,this._offline=e.app.offline,this._snackbarOpened=e.app.snackbarOpened,this._drawerOpened=e.app.drawerOpened}_menuButtonClicked(){xt.dispatch(bt(!this._drawerOpened))}_backToTopButtonClicked(){window.scrollTo({top:0,behavior:"smooth"})}_setIntersectionObserversListeners(){this.addEventListener("start-observing-intersection",e=>{const t=this._getOrCreateIntersectionObserverObject(e.detail.threshold);t.observer.observe(e.detail.element),t.fnMap.set(e.detail.element,e.detail.callback)}),this.addEventListener("stop-observing-intersection",e=>{const t=this._getOrCreateIntersectionObserverObject(e.detail.threshold);t.observer.unobserve(e.detail.element),t.fnMap.delete(e.detail.element)})}_getOrCreateIntersectionObserverObject(e=.99){const t="_intersectionObserver"+100*e;return this[t]||(this[t]={observer:new IntersectionObserver(e=>{e.forEach(e=>{this[t].fnMap.get(e.target)([e])})},{threshold:e}),fnMap:new Map}),this[t]}doScroll(e,t){if(t){const n=parseInt(getComputedStyle(e).getPropertyValue("--header-height"));window.scrollTo({left:0,top:t.offsetTop-n,behavior:"smooth"}),setTimeout(()=>t.focus())}}});
//# sourceMappingURL=main.js.map
