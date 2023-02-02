const e=new WeakMap,t=t=>"function"==typeof t&&e.has(t),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},r={},i={},o=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${o}--\x3e`,l=new RegExp(`${o}|${a}`),c="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],r=document.createTreeWalker(t.content,133,null,!1);let i=0,a=-1,p=0;const{strings:d,values:{length:f}}=e;for(;p<f;){const e=r.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let n=0;for(let e=0;e<s;e++)h(t[e].name,c)&&n++;for(;n-- >0;){const t=d[p],s=g.exec(t)[2],n=s.toLowerCase()+c,r=e.getAttribute(n);e.removeAttribute(n);const i=r.split(l);this.parts.push({type:"attribute",index:a,name:s,strings:i}),p+=i.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(o)>=0){const n=e.parentNode,r=t.split(l),i=r.length-1;for(let t=0;t<i;t++){let s,i=r[t];if(""===i)s=u();else{const e=g.exec(i);null!==e&&h(e[2],c)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-c.length)+e[3]),s=document.createTextNode(i)}n.insertBefore(s,e),this.parts.push({type:"node",index:++a})}""===r[i]?(n.insertBefore(u(),e),s.push(e)):e.data=r[i],p+=i}}else if(8===e.nodeType)if(e.data===o){const t=e.parentNode;null!==e.previousSibling&&a!==i||(a++,t.insertBefore(u(),e)),i=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(s.push(e),a--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(o,t+1));)this.parts.push({type:"node",index:-1}),p++}}else r.currentNode=n.pop()}for(const o of s)o.parentNode.removeChild(o)}}const h=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},d=e=>-1!==e.index,u=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class f{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const s of this.__parts)void 0!==s&&s.commit()}_clone(){const e=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i,o=0,a=0,l=r.nextNode();for(;o<n.length;)if(i=n[o],d(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=t.pop(),l=r.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return s&&(document.adoptNode(e),customElements.upgrade(e)),e}}class m{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],r=e.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===e.indexOf("--\x3e",r+1);const i=g.exec(e);t+=null===i?e+(s?o:a):e.substr(0,i.index)+i[1]+i[2]+c+i[3]+o}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const _=e=>null===e||!("object"==typeof e||"function"==typeof e),y=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class v{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let n=0;n<s.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new b(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(_(e)||!y(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===r||_(e)&&e===this.value||(this.value=e,t(e)||(this.committer.dirty=!0))}commit(){for(;t(this.value);){const e=this.value;this.value=r,e(this)}this.value!==r&&this.committer.commit()}}class S{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;t(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}const e=this.__pendingValue;e!==r&&(_(e)?e!==this.value&&this.__commitText(e):e instanceof m?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):y(e)?this.__commitIterable(e):e===i?(this.value=i,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof f&&this.value.template===t)this.value.update(e.values);else{const s=new f(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const r of e)void 0===(s=t[n])&&(s=new S(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(r),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class w{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;t(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=r}}class x extends v{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends b{}let P=!1;try{const e={get capture(){return P=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(de){}class N{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this.__pendingValue=e}commit(){for(;t(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=this.__pendingValue,s=this.value,n=null==e||null!=s&&(e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive),i=null!=e&&(null==s||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=E(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=r}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const E=e=>e&&(P?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const A=new class{handleAttributeExpressions(e,t,s,n){const r=t[0];return"."===r?new x(e,t.slice(1),s).parts:"@"===r?[new N(e,t.slice(1),n.eventContext)]:"?"===r?[new w(e,t.slice(1),s)]:new v(e,t,s).parts}handleTextExpression(e){return new S(e)}};function T(e){let t=k.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},k.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(o);return void 0===(s=t.keyString.get(n))&&(s=new p(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const k=new Map,V=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const z=(e,...t)=>new m(e,t,"html",A),U=133;function L(e,t){const{element:{content:s},parts:n}=e,r=document.createTreeWalker(s,U,null,!1);let i=O(n),o=n[i],a=-1,l=0;const c=[];let p=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===p&&(p=null),t.has(e)&&(c.push(e),null===p&&(p=e)),null!==p&&l++;void 0!==o&&o.index===a;)o.index=null!==p?-1:o.index-l,o=n[i=O(n,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const M=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,U,null,!1);for(;s.nextNode();)t++;return t},O=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(d(t))return s}return-1};const R=(e,t)=>`${e}--${t}`;let $=!0;void 0===window.ShadyCSS?$=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),$=!1);const q=e=>t=>{const s=R(t.type,e);let n=k.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},k.set(s,n));let r=n.stringsArray.get(t.strings);if(void 0!==r)return r;const i=t.strings.join(o);if(void 0===(r=n.keyString.get(i))){const s=t.getTemplateElement();$&&window.ShadyCSS.prepareTemplateDom(s,e),r=new p(t,s),n.keyString.set(i,r)}return n.stringsArray.set(t.strings,r),r},I=["html","svg"],j=new Set,F=(e,t,s)=>{j.add(s);const n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const i=document.createElement("style");for(let l=0;l<r;l++){const e=n[l];e.parentNode.removeChild(e),i.textContent+=e.textContent}(e=>{I.forEach(t=>{const s=k.get(R(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),L(e,s)})})})(s);const o=t.element.content;!function(e,t,s=null){const{element:{content:n},parts:r}=e;if(null==s)return void n.appendChild(t);const i=document.createTreeWalker(n,U,null,!1);let o=O(r),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===s&&(a=M(t),s.parentNode.insertBefore(t,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=O(r,o);return}o=O(r,o)}}(t,i,o.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s);const a=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)e.insertBefore(a.cloneNode(!0),e.firstChild);else{o.insertBefore(i,o.firstChild);const e=new Set;e.add(i),L(t,e)}};window.JSCompiler_renameProperty=((e,t)=>e);const B={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},H=(e,t)=>t!==e&&(t==t||e==e),D={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:H},W=Promise.resolve(!0),J=1,K=4,G=8,Q=16,X=32;class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=D){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const n=this[e];this[s]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=H){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||B,r="function"==typeof n?n:n.fromAttribute;return r?r(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||B.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|X,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=D){const n=this.constructor,r=n._attributeNameForProperty(e,s);if(void 0!==r){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|G,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=this._updateState&~G}}_attributeToProperty(e,t){if(this._updateState&G)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s._classProperties.get(n)||D;this._updateState=this._updateState|Q,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Q}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const n=this.constructor,r=n._classProperties.get(e)||D;n._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||this._updateState&Q||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|K;const s=this._updatePromise;this._updatePromise=new Promise((s,n)=>{e=s,t=n});try{await s}catch(n){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(n){t(n)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&X}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&J}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(s){throw e=!1,s}finally{this._markUpdated()}e&&(this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Y.finalized=!0;const Z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const se=(e,...t)=>{const s=t.reduce((t,s,n)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[n+1],e[0]);return new te(s,ee)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");const ne=e=>e.flat?e.flat(1/0):function e(t,s=[]){for(let n=0,r=t.length;n<r;n++){const r=t[n];Array.isArray(r)?e(r,s):s.push(r)}return s}(e);class re extends Y{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ne(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof m&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}re.finalized=!0,re.render=((e,t,s)=>{const r=s.scopeName,i=V.has(t),o=$&&11===t.nodeType&&!!t.host&&e instanceof m,a=o&&!j.has(r),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let r=V.get(t);void 0===r&&(n(t,t.firstChild),V.set(t,r=new S(Object.assign({templateFactory:T},s))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:q(r)},s)),a){const e=V.get(l);V.delete(l),e.value instanceof f&&F(l,e.value.template,r),n(t,t.firstChild),t.appendChild(l),V.set(t,e)}!i&&o&&window.ShadyCSS.styleElement(t.host)});var ie={"":["<em>","</em>"],_:["<strong>","</strong>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function oe(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function ae(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}customElements.define("lit-i18n",class extends re{static get properties(){return{raw:{type:Boolean}}}constructor(){super(),this.raw=!1}render(){return z`<slot></slot>`}connectedCallback(){this.key=this.textContent,document.addEventListener("LIT_I18N_UPDATED",this._handleUpdate.bind(this)),this._handleUpdate()}disconnectedCallback(){document.removeEventListener("LIT_I18N_UPDATED",this._handleUpdate.bind(this))}_handleUpdate(){if(this.raw){const e=document.createElement("span");e.innerText=pe(this.key,!0),this.shadowRoot.appendChild(e)}else this.shadowRoot.innerHTML=pe(this.key)}});let le={};const ce=(e=le.language)=>{e&&e!==le.language&&(le.language=e),le.resolveMethod(e).then(e=>{le.translationsCache=e,document.dispatchEvent(new CustomEvent("LIT_I18N_UPDATED"))}).catch(t=>{if(e===le.fallbackLanguage)throw new Error(`[lit-i18n] Error resolving locales for fallback language '${e}'. ${t}.`);ce(le.fallbackLanguage),console.warn(`[lit-i18n] Error resolving locales for language '${e}'. Falling back to '${le.fallbackLanguage}'. ${t}.`)})},pe=(e,t=!1)=>{if(!("translationsCache"in le))return"";if(e in le.translationsCache){const s=le.translationsCache[e];return t?s:function e(t){var s,n,r,i,o,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^```(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:\!\[([^\]]*?)\]\(([^\)]+?)\))|(\[)|(\](?:\(([^\)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(\-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,3})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*])/gm,l=[],c="",p=0,h={};function d(e){var t=ie[e.replace(/\*/g,"_")[1]||""],s=l[l.length-1]==e;return t?t[1]?(l[s?"pop":"push"](e),t[0|s]):t[0]:e}function u(){for(var e="";l.length;)e+=d(l[l.length-1]);return e}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(e,t,s){return h[t.toLowerCase()]=s,""}).replace(/^\n+|\n+$/g,"");r=a.exec(t);)n=t.substring(p,r.index),p=a.lastIndex,s=r[0],n.match(/[^\\](\\\\)*\\$/)||(r[3]||r[4]?s='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'">'+oe(ae(r[3]||r[4]).replace(/^\n+|\n+$/g,""))+"</pre>":r[6]?((o=r[6]).match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),i=e(oe(r[5].replace(/^\s*[>*+.-]/gm,""))),">"===o?o="blockquote":(o=o.match(/\./)?"ol":"ul",i=i.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),s="<"+o+">"+i+"</"+o+">"):r[8]?s='<img src="'+ae(r[8])+'" alt="'+ae(r[7])+'">':r[10]?(c=c.replace("<a>",'<a href="'+ae(r[11]||h[n.toLowerCase()])+'">'),s=u()+"</a>"):r[9]?s="<a>":r[12]||r[14]?s="<"+(o="h"+(r[14]?r[14].length:"="===r[13][0]?1:2))+">"+e(r[12]||r[15])+"</"+o+">":r[16]?s="<code>"+ae(r[16])+"</code>":(r[17]||r[1])&&(s=d(r[17]||"--"))),c+=n,c+=s;return(c+t.substring(p)+u()).trim()}(s)}return console.error(`[lit-i18n] Key '${e}' not found.`),e};(({resolveMethod:e,language:t,fallbackLanguage:s}={})=>{if(!e||"function"!=typeof e)throw new Error("[lit-i18n] resolveMethod is required and must be a function");s||console.warn("[lit-i18n] Warning: no fallback language specified (en-EN will be used)"),le={...le,resolveMethod:e,fallbackLanguage:s||"en-EN",language:t||navigator.language||navigator.userLanguage},ce()})({resolveMethod:e=>fetch(`./assets/locales/${e}.json`).then(e=>e.json()),language:"es-ES",fallbackLanguage:"es-ES"});const he=se`
  :host {
    display: block;
    box-sizing: border-box;

    --app-drawer-width: 256px;

    --app-primary-color: #CC0033;
    --app-secondary-color: #4A4A4A;
    --app-dark-text-color: var(--app-secondary-color);
    --app-light-text-color: white;
    --app-section-even-color: #f7f7f7;
    --app-section-odd-color: white;
    --app-section-border: 1px solid lightgray;

    --app-header-background-color: white;
    --app-header-text-color: var(--app-dark-text-color);
    --app-header-selected-color: var(--app-primary-color);

    --app-drawer-background-color: var(--app-secondary-color);
    --app-drawer-text-color: var(--app-light-text-color);
    --app-drawer-selected-color: #78909C;

    --app-ecosystem-background-color-primary: #B3002D;
    --app-ecosystem-light-text-color-button: #54565A;

    --app-frequent-questions-secondary-color: #484848;
    --app-frequent-questions-border-color: #969696;
    --app-frequent-questions-background-color: #F8F9F9;
  }

  section {
    background: var(--app-background-color, #fff);
    padding:0;
    font-size: var(--app-paragraph-font-size-mobile, 16px);
  }

  section h1.title.section-header {
    text-transform: uppercase;
    font-size: var(--app-title-font-size-mobile, 18px);
    white-space: nowrap;
    margin: 0;
    padding: 15px 18px;
    box-sizing: border-box;
  }

  section h1.section-header::before {
    content: "/";
    color: var(--app-primary-color, #CC0033);
    font-weight: var(--app-font-weight-extrabold, 900);
  }

  section > * {
    margin-right: auto;
    margin-left: auto;
  }

  h2 {
    font-size: var(--app-subtitle-font-size, 24px);
    text-align: center;
    color: var(--app-dark-text-color);
  }

  h1 {
    font-size: var(--app-subtitle-font-size, 24px);
  }

  .primary-button {
    background: var(--app-button-primary-color, red);
    border-radius: 6px;
    padding: 8px;
    border: none;
    color: var(--app-light-text-color, white);
    letter-spacing: 0;
    text-align: center;
    cursor: pointer;
    font-family: inherit;
    text-decoration: none;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .5);
  }

  .primary-button:active {
    background-color: var(--app-primary-color, red);
  }

  .primary-button.big {
    height: 48px;
    width: 275px;
    font-weight: var(--app-font-weight-bold, 700);
    font-size: 16px;
    text-decoration: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  .toggle-bar {
    text-align: initial;
    width: 24px;
    height: 2px;
    background: #fff;
    position: relative;
    top: 10px;
    margin: 0 auto;
  }

  .toggle-bar:before,
  .toggle-bar:after {
    width: 24px;
    height: 2px;
    background: #fff;
    content: '';
    position: absolute;
  }

  .toggle-bar:before {
    top: -9px;
  }

  .toggle-bar:after {
    top: 9px;
  }
          
  .toggle-bar,
  .toggle-bar:before,
  .toggle-bar:after {
    transition: all 0.35s;
  }

  h1:focus,
  h2:focus,
  h3:focus,
  h4:focus,
  h5:focus,
  h6:focus,
  section:focus,
  p:focus,
  div:focus
  {
    outline: none;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--app-title-font-size-desktop, 32px);
    }

    h2 {
      font-size: 36px;
    }

    .primary-button:hover {
      background-color: var(--app-primary-color, red);
    }
    
    section h1.title.section-header {
      font-size: var(--app-title-font-size-desktop, 32px);
      padding: 26px 120px;
    }
  }
`;export{re as L,he as S,se as c,pe as g,z as h};
//# sourceMappingURL=chunk-3dad17c8.js.map
