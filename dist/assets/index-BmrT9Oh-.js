var mi=Object.defineProperty;var mt=i=>{throw TypeError(i)};var gi=(i,e,t)=>e in i?mi(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var N=(i,e,t)=>gi(i,typeof e!="symbol"?e+"":e,t),Ge=(i,e,t)=>e.has(i)||mt("Cannot "+t);var g=(i,e,t)=>(Ge(i,e,"read from private field"),t?t.call(i):e.get(i)),C=(i,e,t)=>e.has(i)?mt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),S=(i,e,t,r)=>(Ge(i,e,"write to private field"),r?r.call(i,t):e.set(i,t),t),m=(i,e,t)=>(Ge(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=globalThis,st=Ne.ShadowRoot&&(Ne.ShadyCSS===void 0||Ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lt=Symbol(),gt=new WeakMap;let Ht=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==lt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(st&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=gt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&gt.set(t,e))}return e}toString(){return this.cssText}};const fi=i=>new Ht(typeof i=="string"?i:i+"",void 0,lt),se=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,n,a)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[a+1],i[0]);return new Ht(t,i,lt)},vi=(i,e)=>{if(st)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),n=Ne.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,i.appendChild(r)}},ft=st?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return fi(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bi,defineProperty:yi,getOwnPropertyDescriptor:wi,getOwnPropertyNames:_i,getOwnPropertySymbols:$i,getPrototypeOf:xi}=Object,G=globalThis,vt=G.trustedTypes,Ei=vt?vt.emptyScript:"",Ye=G.reactiveElementPolyfillSupport,xe=(i,e)=>i,He={toAttribute(i,e){switch(e){case Boolean:i=i?Ei:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},dt=(i,e)=>!bi(i,e),bt={attribute:!0,type:String,converter:He,reflect:!1,useDefault:!1,hasChanged:dt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),G.litPropertyMetadata??(G.litPropertyMetadata=new WeakMap);let pe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=bt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);n!==void 0&&yi(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:a}=wi(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:n,set(o){const l=n==null?void 0:n.call(this);a==null||a.call(this,o),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??bt}static _$Ei(){if(this.hasOwnProperty(xe("elementProperties")))return;const e=xi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(xe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xe("properties"))){const t=this.properties,r=[..._i(t),...$i(t)];for(const n of r)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,n]of t)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const n=this._$Eu(t,r);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(ft(n))}else e!==void 0&&t.push(ft(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vi(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var a;const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){const o=(((a=r.converter)==null?void 0:a.toAttribute)!==void 0?r.converter:He).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var a,o;const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const l=r.getPropertyOptions(n),s=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:He;this._$Em=n;const h=s.fromAttribute(t,l.type);this[n]=h??((o=this._$Ej)==null?void 0:o.get(n))??h,this._$Em=null}}requestUpdate(e,t,r){var n;if(e!==void 0){const a=this.constructor,o=this[e];if(r??(r=a.getPropertyOptions(e)),!((r.hasChanged??dt)(o,t)||r.useDefault&&r.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:n,wrapped:a},o){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),a!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[a,o]of n){const{wrapped:l}=o,s=this[a];l!==!0||this._$AL.has(a)||s===void 0||this.C(a,void 0,o,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(n=>{var a;return(a=n.hostUpdate)==null?void 0:a.call(n)}),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};pe.elementStyles=[],pe.shadowRootOptions={mode:"open"},pe[xe("elementProperties")]=new Map,pe[xe("finalized")]=new Map,Ye==null||Ye({ReactiveElement:pe}),(G.reactiveElementVersions??(G.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=globalThis,Be=Ee.trustedTypes,yt=Be?Be.createPolicy("lit-html",{createHTML:i=>i}):void 0,Bt="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,Ut="?"+F,Ai=`<${Ut}>`,oe=document,Se=()=>oe.createComment(""),Pe=i=>i===null||typeof i!="object"&&typeof i!="function",ct=Array.isArray,Si=i=>ct(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ke=`[ 	
\f\r]`,_e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wt=/-->/g,_t=/>/g,Q=RegExp(`>|${Ke}(?:([^\\s"'>=/]+)(${Ke}*=${Ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,xt=/"/g,qt=/^(?:script|style|textarea|title)$/i,Pi=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),f=Pi(1),me=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Et=new WeakMap,ee=oe.createTreeWalker(oe,129);function jt(i,e){if(!ct(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(e):e}const ki=(i,e)=>{const t=i.length-1,r=[];let n,a=e===2?"<svg>":e===3?"<math>":"",o=_e;for(let l=0;l<t;l++){const s=i[l];let h,c,d=-1,u=0;for(;u<s.length&&(o.lastIndex=u,c=o.exec(s),c!==null);)u=o.lastIndex,o===_e?c[1]==="!--"?o=wt:c[1]!==void 0?o=_t:c[2]!==void 0?(qt.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=Q):c[3]!==void 0&&(o=Q):o===Q?c[0]===">"?(o=n??_e,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?Q:c[3]==='"'?xt:$t):o===xt||o===$t?o=Q:o===wt||o===_t?o=_e:(o=Q,n=void 0);const v=o===Q&&i[l+1].startsWith("/>")?" ":"";a+=o===_e?s+Ai:d>=0?(r.push(h),s.slice(0,d)+Bt+s.slice(d)+F+v):s+F+(d===-2?l:v)}return[jt(i,a+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class ke{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let a=0,o=0;const l=e.length-1,s=this.parts,[h,c]=ki(e,t);if(this.el=ke.createElement(h,r),ee.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=ee.nextNode())!==null&&s.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(Bt)){const u=c[o++],v=n.getAttribute(d).split(F),b=/([.?@])?(.*)/.exec(u);s.push({type:1,index:a,name:b[2],strings:v,ctor:b[1]==="."?Di:b[1]==="?"?Ci:b[1]==="@"?Mi:Fe}),n.removeAttribute(d)}else d.startsWith(F)&&(s.push({type:6,index:a}),n.removeAttribute(d));if(qt.test(n.tagName)){const d=n.textContent.split(F),u=d.length-1;if(u>0){n.textContent=Be?Be.emptyScript:"";for(let v=0;v<u;v++)n.append(d[v],Se()),ee.nextNode(),s.push({type:2,index:++a});n.append(d[u],Se())}}}else if(n.nodeType===8)if(n.data===Ut)s.push({type:2,index:a});else{let d=-1;for(;(d=n.data.indexOf(F,d+1))!==-1;)s.push({type:7,index:a}),d+=F.length-1}a++}}static createElement(e,t){const r=oe.createElement("template");return r.innerHTML=e,r}}function ge(i,e,t=i,r){var o,l;if(e===me)return e;let n=r!==void 0?(o=t._$Co)==null?void 0:o[r]:t._$Cl;const a=Pe(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==a&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),a===void 0?n=void 0:(n=new a(i),n._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=n:t._$Cl=n),n!==void 0&&(e=ge(i,n._$AS(i,e.values),n,r)),e}class Oi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=((e==null?void 0:e.creationScope)??oe).importNode(t,!0);ee.currentNode=n;let a=ee.nextNode(),o=0,l=0,s=r[0];for(;s!==void 0;){if(o===s.index){let h;s.type===2?h=new Me(a,a.nextSibling,this,e):s.type===1?h=new s.ctor(a,s.name,s.strings,this,e):s.type===6&&(h=new Ni(a,this,e)),this._$AV.push(h),s=r[++l]}o!==(s==null?void 0:s.index)&&(a=ee.nextNode(),o++)}return ee.currentNode=oe,n}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Me{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ge(this,e,t),Pe(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==me&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Si(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==E&&Pe(this._$AH)?this._$AA.nextSibling.data=e:this.T(oe.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ke.createElement(jt(r.h,r.h[0]),this.options)),r);if(((a=this._$AH)==null?void 0:a._$AD)===n)this._$AH.p(t);else{const o=new Oi(n,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=Et.get(e.strings);return t===void 0&&Et.set(e.strings,t=new ke(e)),t}k(e){ct(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const a of e)n===t.length?t.push(r=new Me(this.O(Se()),this.O(Se()),this,this.options)):r=t[n],r._$AI(a),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Fe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,a){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=E}_$AI(e,t=this,r,n){const a=this.strings;let o=!1;if(a===void 0)e=ge(this,e,t,0),o=!Pe(e)||e!==this._$AH&&e!==me,o&&(this._$AH=e);else{const l=e;let s,h;for(e=a[0],s=0;s<a.length-1;s++)h=ge(this,l[r+s],t,s),h===me&&(h=this._$AH[s]),o||(o=!Pe(h)||h!==this._$AH[s]),h===E?e=E:e!==E&&(e+=(h??"")+a[s+1]),this._$AH[s]=h}o&&!n&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Di extends Fe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}}class Ci extends Fe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}}class Mi extends Fe{constructor(e,t,r,n,a){super(e,t,r,n,a),this.type=5}_$AI(e,t=this){if((e=ge(this,e,t,0)??E)===me)return;const r=this._$AH,n=e===E&&r!==E||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==E&&(r===E||n);n&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ni{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ge(this,e)}}const Je=Ee.litHtmlPolyfillSupport;Je==null||Je(ke,Me),(Ee.litHtmlVersions??(Ee.litHtmlVersions=[])).push("3.3.1");const Ri=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let n=r._$litPart$;if(n===void 0){const a=(t==null?void 0:t.renderBefore)??null;r._$litPart$=n=new Me(e.insertBefore(Se(),a),a,void 0,t??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=globalThis;class T extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ri(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return me}}var It;T._$litElement$=!0,T.finalized=!0,(It=ne.litElementHydrateSupport)==null||It.call(ne,{LitElement:T});const Ze=ne.litElementPolyfillSupport;Ze==null||Ze({LitElement:T});(ne.litElementVersions??(ne.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:dt},Ti=(i=Li,e,t)=>{const{kind:r,metadata:n}=t;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),a.set(t.name,i),r==="accessor"){const{name:o}=t;return{set(l){const s=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,s,i)},init(l){return l!==void 0&&this.C(o,void 0,i,l),l}}}if(r==="setter"){const{name:o}=t;return function(l){const s=this[o];e.call(this,l),this.requestUpdate(o,s,i)}}throw Error("Unsupported decorator location: "+r)};function D(i){return(e,t)=>typeof t=="object"?Ti(i,e,t):((r,n,a)=>{const o=n.hasOwnProperty(a);return n.constructor.createProperty(a,r),o?Object.getOwnPropertyDescriptor(n,a):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(i){return D({...i,state:!0,attribute:!1})}var zi=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,Ft=(i,e,t,r)=>{for(var n=r>1?void 0:r?Ii(e,t):e,a=i.length-1,o;a>=0;a--)(o=i[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&zi(e,t,n),n};let Ue=class extends T{constructor(){super(...arguments),this.currentView="list"}render(){return f`
      <nav>
        <ul class="nav-list">
          <li class="nav-item">
            <a 
              href="#" 
              class="nav-link ${this.currentView==="list"?"active":""}"
              @click=${this._handleNavClick}
              data-view="list"
            >
              Çalışan Listesi
            </a>
          </li>
          <li class="nav-item">
            <a 
              href="#" 
              class="nav-link ${this.currentView==="form"?"active":""}"
              @click=${this._handleNavClick}
              data-view="form"
            >
              Yeni Çalışan Ekle
            </a>
          </li>
        </ul>
      </nav>
    `}_handleNavClick(i){i.preventDefault();const t=i.target.getAttribute("data-view");t&&this.dispatchEvent(new CustomEvent("view-change",{detail:{view:t},bubbles:!0,composed:!0}))}};Ue.styles=se`
    :host {
      display: block;
    }

    nav {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 0;
      overflow: hidden;
    }

    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-item {
      flex: 1;
    }

    .nav-link {
      display: block;
      padding: 16px 24px;
      text-decoration: none;
      color: #666;
      font-weight: 500;
      text-align: center;
      transition: all 0.3s ease;
      border-bottom: 3px solid transparent;
    }

    .nav-link:hover {
      background-color: #f8f9fa;
      color: #333;
    }

    .nav-link.active {
      color: #007bff;
      border-bottom-color: #007bff;
      background-color: #f8f9fa;
    }

    .nav-link.active:hover {
      background-color: #e9ecef;
    }
  `;Ft([D({type:String})],Ue.prototype,"currentView",2);Ue=Ft([le("app-nav")],Ue);var Hi=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,be=(i,e,t,r)=>{for(var n=r>1?void 0:r?Bi(e,t):e,a=i.length-1,o;a>=0;a--)(o=i[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Hi(e,t,n),n};let K=class extends T{constructor(){super(...arguments),this.isOpen=!1,this.employee=null,this.employees=[],this.isMultiple=!1,this.language="tr"}render(){var i,e;return this.isOpen?f`
      <div class="modal-overlay" @click=${this._handleOverlayClick}>
        <div class="modal" @click=${this._handleModalClick}>
          <div class="modal-header">
            <h3 class="modal-title">${this.language==="tr"?"Emin misiniz?":"Are you sure?"}</h3>
            <button class="close-btn" @click=${this._handleClose}>&times;</button>
          </div>
          <div class="modal-body">
            <p class="modal-message">
              ${this.isMultiple?f`
                  ${this.language==="tr"?"Seçilen":"Selected"} <span class="employee-count">${this.employees.length}</span> ${this.language==="tr"?"personel kaydı silinecek":"employee records will be deleted"}
                `:f`
                  ${this.language==="tr"?"Seçilen personel kaydı":"Selected Employee record of"} 
                  <span class="employee-name">${(i=this.employee)==null?void 0:i.firstName} ${(e=this.employee)==null?void 0:e.lastName}</span> 
                  ${this.language==="tr"?"silinecek":"will be deleted"}
                `}
            </p>
            ${this.isMultiple?f`
              <div class="selected-employees">
                <h4>${this.language==="tr"?"Seçilen Personeller:":"Selected Employees:"}</h4>
                <ul>
                  ${this.employees.map(t=>f`
                    <li>${t.firstName} ${t.lastName}</li>
                  `)}
                </ul>
              </div>
            `:""}
            <div class="modal-actions">
              <button class="btn btn-cancel" @click=${this._handleCancel}>
                ${this.language==="tr"?"İptal":"Cancel"}
              </button>
              <button class="btn btn-proceed" @click=${this._handleProceed}>
                ${this.isMultiple?this.language==="tr"?"Tümünü Sil":"Delete All":this.language==="tr"?"Devam Et":"Proceed"}
              </button>
            </div>
          </div>
        </div>
      </div>
    `:f``}_handleOverlayClick(i){i.target===i.currentTarget&&this._handleClose()}_handleModalClick(i){i.stopPropagation()}_handleClose(){this.dispatchEvent(new CustomEvent("close"))}_handleCancel(){this._handleClose()}_handleProceed(){this.isMultiple?this.dispatchEvent(new CustomEvent("proceed",{detail:{employees:this.employees},bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("proceed",{detail:{employee:this.employee},bubbles:!0,composed:!0}))}};K.styles=se`
    :host {
      display: block;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: var(--ing-white);
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      max-width: 400px;
      width: 90%;
      position: relative;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      border-bottom: 1px solid var(--ing-border);
    }

    .modal-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin: 0;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: var(--ing-gray);
      padding: 0;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    .close-btn:hover {
      background-color: var(--ing-light-gray);
      color: #333;
    }

    .modal-body {
      padding: 24px;
    }

    .modal-message {
      color: #666;
      line-height: 1.5;
      margin: 0 0 24px 0;
    }

    .employee-name {
      font-weight: bold;
      color: var(--ing-orange);
    }

    .employee-count {
      font-weight: bold;
      color: var(--ing-orange);
      font-size: 18px;
    }

    .selected-employees {
      margin-top: 15px;
      padding: 10px;
      background: var(--ing-light-gray);
      border-radius: 4px;
      max-height: 150px;
      overflow-y: auto;
    }

    .selected-employees h4 {
      margin: 0 0 10px 0;
      color: var(--ing-gray);
      font-size: 14px;
    }

    .selected-employees ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .selected-employees li {
      padding: 4px 0;
      color: #333;
      font-size: 13px;
      border-bottom: 1px solid var(--ing-border);
    }

    .selected-employees li:last-child {
      border-bottom: none;
    }

    .modal-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }

    .btn {
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid transparent;
    }

    .btn-cancel {
      background: var(--ing-white);
      border-color: var(--ing-border);
      color: var(--ing-gray);
    }

    .btn-cancel:hover {
      background-color: var(--ing-light-gray);
      border-color: var(--ing-gray);
    }

    .btn-proceed {
      background: var(--ing-orange);
      color: white;
      border-color: var(--ing-orange);
    }

    .btn-proceed:hover {
      background: var(--ing-dark-orange);
      border-color: var(--ing-dark-orange);
    }
  `;be([D({type:Boolean})],K.prototype,"isOpen",2);be([D({type:Object})],K.prototype,"employee",2);be([D({type:Array})],K.prototype,"employees",2);be([D({type:Boolean})],K.prototype,"isMultiple",2);be([D({type:String})],K.prototype,"language",2);K=be([le("delete-modal")],K);var Ui=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,z=(i,e,t,r)=>{for(var n=r>1?void 0:r?qi(e,t):e,a=i.length-1,o;a>=0;a--)(o=i[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Ui(e,t,n),n};let O=class extends T{constructor(){super(...arguments),this.language="tr",this.employees=[{id:"1",firstName:"Ahmet",lastName:"Sourtimes",dateOfEmployment:"23/09/2022",dateOfBirth:"15/03/1990",phone:"+(90) 532 123 45 67",email:"ahmet@sourtimes.org",department:"Analytics",position:"Junior"},{id:"2",firstName:"Ayşe",lastName:"Demir",dateOfEmployment:"15/01/2021",dateOfBirth:"22/07/1988",phone:"+(90) 533 234 56 78",email:"ayse.demir@company.com",department:"Software Development",position:"Senior"},{id:"3",firstName:"Mehmet",lastName:"Kaya",dateOfEmployment:"08/03/2023",dateOfBirth:"10/11/1992",phone:"+(90) 534 345 67 89",email:"mehmet.kaya@company.com",department:"Marketing",position:"Manager"},{id:"4",firstName:"Fatma",lastName:"Yılmaz",dateOfEmployment:"12/06/2020",dateOfBirth:"05/09/1985",phone:"+(90) 535 456 78 90",email:"fatma.yilmaz@company.com",department:"Human Resources",position:"Director"},{id:"5",firstName:"Ali",lastName:"Özkan",dateOfEmployment:"20/11/2022",dateOfBirth:"18/12/1991",phone:"+(90) 536 567 89 01",email:"ali.ozkan@company.com",department:"Finance",position:"Senior"},{id:"6",firstName:"Zeynep",lastName:"Arslan",dateOfEmployment:"03/08/2021",dateOfBirth:"25/04/1989",phone:"+(90) 537 678 90 12",email:"zeynep.arslan@company.com",department:"Sales",position:"Manager"},{id:"7",firstName:"Can",lastName:"Şahin",dateOfEmployment:"14/12/2022",dateOfBirth:"30/01/1993",phone:"+(90) 538 789 01 23",email:"can.sahin@company.com",department:"Operations",position:"Junior"},{id:"8",firstName:"Elif",lastName:"Koç",dateOfEmployment:"07/05/2020",dateOfBirth:"12/08/1987",phone:"+(90) 539 890 12 34",email:"elif.koc@company.com",department:"Customer Service",position:"Senior"},{id:"9",firstName:"Burak",lastName:"Aydın",dateOfEmployment:"25/02/2023",dateOfBirth:"03/06/1994",phone:"+(90) 540 901 23 45",email:"burak.aydin@company.com",department:"IT Support",position:"Junior"}],this.searchTerm="",this.currentPage=1,this.selectedEmployees=new Set,this.showDeleteModal=!1,this.employeeToDelete=null,this.employeesToDelete=[],this.isMultipleDelete=!1,this.viewMode="table",this.itemsPerPage=5}connectedCallback(){super.connectedCallback(),window.addEventListener("employee-added",this._handleGlobalEmployeeAdded.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("employee-added",this._handleGlobalEmployeeAdded.bind(this))}render(){const i=this.employees.filter(a=>a.firstName.toLowerCase().includes(this.searchTerm.toLowerCase())||a.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())||a.email.toLowerCase().includes(this.searchTerm.toLowerCase())||a.department.toLowerCase().includes(this.searchTerm.toLowerCase())),e=Math.ceil(i.length/this.itemsPerPage),t=(this.currentPage-1)*this.itemsPerPage,r=t+this.itemsPerPage,n=i.slice(t,r);return f`
      <div>
        <div class="header">
          <h1 class="title">${this.language==="tr"?"Personel Listesi":"Employee List"}</h1>
          <div class="header-actions">
            ${this.selectedEmployees.size>0?f`
              <button class="bulk-delete-btn" @click=${this._handleBulkDelete}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
                ${this.language==="tr"?`Seçilen ${this.selectedEmployees.size} Kişiyi Sil`:`Delete ${this.selectedEmployees.size} Selected`}
              </button>
            `:""}
            <div class="view-toggles">
              <button 
                class="view-toggle ${this.viewMode==="table"?"active":""}" 
                @click=${()=>this._changeViewMode("table")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                </svg>
              </button>
              <button 
                class="view-toggle ${this.viewMode==="grid"?"active":""}" 
                @click=${()=>this._changeViewMode("grid")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        ${this.viewMode==="table"?f`
          <div class="table-container">
            <table class="employee-table">
              <thead>
                <tr>
                  <th style="width: 40px;">
                    <input type="checkbox" class="checkbox" @change=${this._handleSelectAll}>
                  </th>
                  <th>${this.language==="tr"?"Ad":"First Name"}</th>
                  <th>${this.language==="tr"?"Soyad":"Last Name"}</th>
                  <th>${this.language==="tr"?"İşe Başlama Tarihi":"Date of Employment"}</th>
                  <th>${this.language==="tr"?"Doğum Tarihi":"Date of Birth"}</th>
                  <th>${this.language==="tr"?"Telefon":"Phone"}</th>
                  <th>${this.language==="tr"?"E-posta":"Email"}</th>
                  <th>${this.language==="tr"?"Departman":"Department"}</th>
                  <th>${this.language==="tr"?"Pozisyon":"Position"}</th>
                  <th style="width: 100px;">${this.language==="tr"?"İşlemler":"Actions"}</th>
                </tr>
              </thead>
              <tbody>
                ${n.map(a=>f`
                  <tr>
                    <td>
                      <input 
                        type="checkbox" 
                        class="checkbox" 
                        .checked=${this.selectedEmployees.has(a.id)}
                        @change=${()=>this._handleSelectEmployee(a.id)}
                      >
                    </td>
                    <td>${a.firstName}</td>
                    <td>${a.lastName}</td>
                    <td>${a.dateOfEmployment}</td>
                    <td>${a.dateOfBirth}</td>
                    <td>${a.phone}</td>
                    <td>${a.email}</td>
                    <td>${a.department}</td>
                    <td>${a.position}</td>
                    <td>
                      <div class="action-buttons">
                        <button class="action-btn" @click=${()=>this._handleEdit(a)}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                          </svg>
                        </button>
                        <button class="action-btn" @click=${()=>this._handleDelete(a)}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
        `:f`
          <div class="grid-container">
            ${n.map(a=>f`
              <div class="employee-card">
                <div class="card-header">
                  <input 
                    type="checkbox" 
                    class="card-checkbox" 
                    .checked=${this.selectedEmployees.has(a.id)}
                    @change=${()=>this._handleSelectEmployee(a.id)}
                  >
                </div>
                <div class="employee-name">${a.firstName} ${a.lastName}</div>
                <div class="employee-info">
                  <div class="info-item">
                    <div class="info-label">${this.language==="tr"?"E-posta":"Email"}</div>
                    <div class="info-value">${a.email}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">${this.language==="tr"?"Telefon":"Phone"}</div>
                    <div class="info-value">${a.phone}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">${this.language==="tr"?"İşe Başlama":"Employment"}</div>
                    <div class="info-value">${a.dateOfEmployment}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">${this.language==="tr"?"Doğum Tarihi":"Birth Date"}</div>
                    <div class="info-value">${a.dateOfBirth}</div>
                  </div>
                </div>
                <div class="department-badge">${a.department} - ${a.position}</div>
                <div class="card-actions">
                  <button class="card-action-btn" @click=${()=>this._handleEdit(a)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                    ${this.language==="tr"?"Düzenle":"Edit"}
                  </button>
                  <button class="card-action-btn" @click=${()=>this._handleDelete(a)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                    </svg>
                    ${this.language==="tr"?"Sil":"Delete"}
                  </button>
                </div>
              </div>
            `)}
          </div>
        `}

        ${e>1?f`
          <div class="pagination">
            <button class="pagination-btn" ?disabled=${this.currentPage===1} @click=${()=>this._changePage(this.currentPage-1)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            ${this._generatePageNumbers(e)}
            <button class="pagination-btn" ?disabled=${this.currentPage===e} @click=${()=>this._changePage(this.currentPage+1)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        `:""}

        <delete-modal
          .isOpen=${this.showDeleteModal}
          .employee=${this.employeeToDelete}
          .employees=${this.employeesToDelete}
          .isMultiple=${this.isMultipleDelete}
          .language=${this.language}
          @close=${this._handleModalClose}
          @proceed=${this._handleModalProceed}
        ></delete-modal>
      </div>
    `}_changeViewMode(i){this.viewMode=i}_generatePageNumbers(i){const e=[];if(i<=7)for(let t=1;t<=i;t++)e.push(f`
          <button class="pagination-btn ${this.currentPage===t?"active":""}" @click=${()=>this._changePage(t)}>${t}</button>
        `);else{if(e.push(f`
        <button class="pagination-btn ${this.currentPage===1?"active":""}" @click=${()=>this._changePage(1)}>1</button>
      `),this.currentPage<=3){for(let t=2;t<=Math.min(4,i-1);t++)e.push(f`
            <button class="pagination-btn ${this.currentPage===t?"active":""}" @click=${()=>this._changePage(t)}>${t}</button>
          `);i>4&&e.push(f`<span>...</span>`)}else if(this.currentPage>=i-2){e.push(f`<span>...</span>`);for(let t=Math.max(2,i-3);t<i;t++)e.push(f`
            <button class="pagination-btn ${this.currentPage===t?"active":""}" @click=${()=>this._changePage(t)}>${t}</button>
          `)}else{e.push(f`<span>...</span>`);for(let t=this.currentPage-1;t<=this.currentPage+1;t++)e.push(f`
            <button class="pagination-btn ${this.currentPage===t?"active":""}" @click=${()=>this._changePage(t)}>${t}</button>
          `);e.push(f`<span>...</span>`)}i>1&&e.push(f`
          <button class="pagination-btn ${this.currentPage===i?"active":""}" @click=${()=>this._changePage(i)}>${i}</button>
        `)}return e}_handleSelectAll(i){i.target.checked?this.selectedEmployees=new Set(this.employees.map(t=>t.id)):this.selectedEmployees.clear(),this.requestUpdate()}_handleSelectEmployee(i){this.selectedEmployees.has(i)?this.selectedEmployees.delete(i):this.selectedEmployees.add(i),this.requestUpdate()}_handleEdit(i){this.dispatchEvent(new CustomEvent("edit-employee",{detail:{employee:i},bubbles:!0,composed:!0}))}_handleDelete(i){this.employeeToDelete=i,this.showDeleteModal=!0}_handleModalClose(){this.showDeleteModal=!1,this.employeeToDelete=null,this.employeesToDelete=[],this.isMultipleDelete=!1}_handleModalProceed(i){if(this.isMultipleDelete){const e=this.employeesToDelete.map(t=>t.id);this.employees=this.employees.filter(t=>!e.includes(t.id)),this.selectedEmployees.clear()}else{const{employee:e}=i.detail;this.employees=this.employees.filter(t=>t.id!==e.id)}this.showDeleteModal=!1,this.employeeToDelete=null,this.employeesToDelete=[],this.isMultipleDelete=!1}_changePage(i){this.currentPage=i}addEmployee(i){this.employees=[i,...this.employees],this.requestUpdate()}_handleBulkDelete(){this.employeesToDelete=this.employees.filter(i=>this.selectedEmployees.has(i.id)),this.isMultipleDelete=!0,this.showDeleteModal=!0}_handleGlobalEmployeeAdded(i){const{employee:e}=i.detail;this.addEmployee(e)}updated(i){super.updated(i),i.has("language")&&this.requestUpdate()}};O.styles=se`
    :host {
      display: block;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 30px;
      border-bottom: 1px solid var(--ing-border);
    }

    .title {
      font-size: 24px;
      font-weight: bold;
      color: var(--ing-orange);
      margin: 0;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .bulk-delete-btn {
      background-color: var(--ing-orange);
      color: white;
      padding: 8px 12px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 600;
      transition: background-color 0.3s ease;
    }

    .bulk-delete-btn:hover {
      background-color: var(--ing-dark-orange);
    }

    .view-toggles {
      display: flex;
      gap: 10px;
    }

    .view-toggle {
      width: 40px;
      height: 40px;
      border: 1px solid var(--ing-border);
      background: var(--ing-white);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .view-toggle.active {
      background: var(--ing-orange);
      border-color: var(--ing-orange);
      color: white;
    }

    .view-toggle:hover {
      border-color: var(--ing-orange);
    }

    .table-container {
      overflow-x: auto;
      position: relative;
      background: var(--ing-white);
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    /* Scroll indicator */
    .table-container::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 20px;
      background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8));
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .table-container:hover::after {
      opacity: 1;
    }

    .employee-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--ing-white);
      min-width: 800px; /* Minimum genişlik */
    }

    .employee-table th {
      background-color: var(--ing-light-gray);
      padding: 15px 12px;
      text-align: left;
      font-weight: 600;
      color: var(--ing-orange);
      border-bottom: 1px solid var(--ing-border);
      font-size: 14px;
      white-space: nowrap; /* Yazıların satır atlamasını engelle */
    }

    .employee-table td {
      padding: 15px 12px;
      text-align: left;
      border-bottom: 1px solid var(--ing-border);
      font-size: 14px;
      color: #333;
      white-space: nowrap; /* Yazıların satır atlamasını engelle */
    }

    /* Mobil için sabit sütunlar */
    .employee-table th:first-child,
    .employee-table td:first-child {
      position: sticky;
      left: 0;
      background: var(--ing-white);
      z-index: 10;
      border-right: 2px solid var(--ing-border);
    }

    .employee-table th:nth-child(2),
    .employee-table td:nth-child(2),
    .employee-table th:nth-child(3),
    .employee-table td:nth-child(3) {
      position: sticky;
      left: 52px; /* Checkbox genişliği + padding */
      background: var(--ing-white);
      z-index: 10;
      border-right: 2px solid var(--ing-border);
    }

    .employee-table th:nth-child(3),
    .employee-table td:nth-child(3) {
      left: 152px; /* Checkbox + First Name genişliği + padding */
    }

    /* Header için arka plan */
    .employee-table th:first-child,
    .employee-table th:nth-child(2),
    .employee-table th:nth-child(3) {
      background-color: var(--ing-light-gray);
    }

    /* Tüm hücreler için arka plan */
    .employee-table th,
    .employee-table td {
      background: var(--ing-white);
    }

    /* Hover durumunda arka plan */
    .employee-table tr:hover th,
    .employee-table tr:hover td {
      background-color: var(--ing-light-gray);
    }

    /* Sabit sütunlar için hover durumunda arka plan */
    .employee-table tr:hover th:first-child,
    .employee-table tr:hover td:first-child,
    .employee-table tr:hover th:nth-child(2),
    .employee-table tr:hover td:nth-child(2),
    .employee-table tr:hover th:nth-child(3),
    .employee-table tr:hover td:nth-child(3) {
      background-color: var(--ing-light-gray);
    }

    /* Mobil responsive */
    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        gap: 15px;
        align-items: stretch;
      }
      
      .header-actions {
        justify-content: space-between;
      }
      
      .bulk-delete-btn {
        font-size: 12px;
        padding: 6px 10px;
      }
      
      .table-container {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch; /* iOS için smooth scroll */
        background: var(--ing-white);
      }
      
      .employee-table {
        min-width: 900px; /* Mobilde daha geniş */
        background: var(--ing-white);
      }
      
      .employee-table th,
      .employee-table td {
        padding: 12px 8px; /* Mobilde daha az padding */
        font-size: 13px; /* Mobilde daha küçük font */
        background: var(--ing-white);
      }
      
      /* Sabit sütunlar için gölge efekti */
      .employee-table th:nth-child(3),
      .employee-table td:nth-child(3) {
        box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
      }
      
      /* Mobilde hover efektini kaldır */
      .employee-table tr:hover th,
      .employee-table tr:hover td {
        background-color: var(--ing-white);
      }
      
      /* Mobilde sabit sütunlar için hover */
      .employee-table tr:hover th:first-child,
      .employee-table tr:hover td:first-child,
      .employee-table tr:hover th:nth-child(2),
      .employee-table tr:hover td:nth-child(2),
      .employee-table tr:hover th:nth-child(3),
      .employee-table tr:hover td:nth-child(3) {
        background-color: var(--ing-light-gray);
      }
    }

    .checkbox {
      width: 16px;
      height: 16px;
      accent-color: var(--ing-orange);
    }

    .action-buttons {
      display: flex;
      gap: 8px;
    }

    .action-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: transparent;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      color: var(--ing-orange);
    }

    .action-btn:hover {
      background-color: var(--ing-light-gray);
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 20px;
      border-top: 1px solid var(--ing-border);
    }

    .pagination-btn {
      width: 32px;
      height: 32px;
      border: 1px solid var(--ing-border);
      background: var(--ing-white);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      color: var(--ing-gray);
    }

    .pagination-btn:hover {
      border-color: var(--ing-orange);
      color: var(--ing-orange);
    }

    .pagination-btn.active {
      background: var(--ing-orange);
      border-color: var(--ing-orange);
      color: white;
    }

    .pagination-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .empty-state {
      text-align: center;
      padding: 60px 20px;
      color: var(--ing-gray);
    }

    /* Grid View Styles */
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    @media (min-width: 700px) {
      .grid-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 699px) {
      .grid-container {
        grid-template-columns: 1fr;
      }
    }

    .employee-card {
      background: var(--ing-white);
      border: 1px solid var(--ing-border);
      border-radius: 8px;
      padding: 20px;
      transition: all 0.3s ease;
    }

    .employee-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .card-checkbox {
      width: 16px;
      height: 16px;
      accent-color: var(--ing-orange);
    }

    .card-actions {
      display: flex;
      gap: 8px;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid var(--ing-border);
    }

    .card-action-btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 8px 12px;
      border: 1px solid var(--ing-border);
      background: var(--ing-white);
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      color: var(--ing-gray);
      font-size: 12px;
      font-weight: 500;
    }

    .card-action-btn:hover {
      border-color: var(--ing-orange);
      color: var(--ing-orange);
      background-color: var(--ing-light-gray);
    }

    .card-action-btn:first-child {
      color: var(--ing-orange);
      border-color: var(--ing-orange);
    }

    .card-action-btn:first-child:hover {
      background-color: var(--ing-orange);
      color: white;
    }

    .card-action-btn:last-child {
      color: #dc3545;
      border-color: #dc3545;
    }

    .card-action-btn:last-child:hover {
      background-color: #dc3545;
      color: white;
    }

    .employee-name {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 10px;
    }

    .employee-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 15px;
    }

    .info-item {
      font-size: 14px;
    }

    .info-label {
      color: var(--ing-gray);
      font-weight: 500;
    }

    .info-value {
      color: #333;
      margin-top: 2px;
    }

    .department-badge {
      background: var(--ing-orange);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
      display: inline-block;
      margin-top: 5px;
    }
  `;z([D({type:String})],O.prototype,"language",2);z([w()],O.prototype,"employees",2);z([w()],O.prototype,"searchTerm",2);z([w()],O.prototype,"currentPage",2);z([w()],O.prototype,"selectedEmployees",2);z([w()],O.prototype,"showDeleteModal",2);z([w()],O.prototype,"employeeToDelete",2);z([w()],O.prototype,"employeesToDelete",2);z([w()],O.prototype,"isMultipleDelete",2);z([w()],O.prototype,"viewMode",2);O=z([le("employee-list")],O);var ji=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,ye=(i,e,t,r)=>{for(var n=r>1?void 0:r?Fi(e,t):e,a=i.length-1,o;a>=0;a--)(o=i[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&ji(e,t,n),n};let J=class extends T{constructor(){super(...arguments),this.language="tr",this.formData={firstName:"",lastName:"",dateOfEmployment:"",dateOfBirth:"",phone:"",email:"",department:"",position:""},this.errors={},this.isSubmitting=!1,this.isSuccess=!1,this.departments=["Analytics","Software Development","Human Resources","Marketing","Sales","Finance","Operations","Customer Service","IT Support"],this.positions=["Junior","Senior","Manager","Director","VP","C-Level"]}render(){return f`
      <div class="form-container">
        <div class="form-header">
          <h2>${this.language==="tr"?"Yeni Personel Ekle":"Add New Employee"}</h2>
          <p>${this.language==="tr"?"Aşağıdaki formu doldurarak yeni personel ekleyin":"Fill in the form below to add a new employee"}</p>
        </div>

        ${this.isSuccess?f`
            <div class="success-message">
              <p>${this.language==="tr"?"Personel başarıyla eklendi!":"Employee added successfully!"}</p>
              <button class="btn btn-secondary" @click=${this._resetForm}>${this.language==="tr"?"Başka Personel Ekle":"Add Another Employee"}</button>
            </div>
          `:f`
            <form @submit=${this._handleSubmit}>
              <div class="form-section">
                <h3 class="section-title">${this.language==="tr"?"Personel Bilgileri":"Employee Information"}</h3>
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label" for="firstName">
                      ${this.language==="tr"?"Ad":"First Name"} <span class="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      class="form-input"
                      .value=${this.formData.firstName}
                      @input=${this._handleInput}
                      data-field="firstName"
                      required
                    >
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="lastName">
                      ${this.language==="tr"?"Soyad":"Last Name"} <span class="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      class="form-input"
                      .value=${this.formData.lastName}
                      @input=${this._handleInput}
                      data-field="lastName"
                      required
                    >
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="dateOfBirth">
                      ${this.language==="tr"?"Doğum Tarihi":"Date of Birth"} <span class="required">*</span>
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      class="form-input"
                      .value=${this.formData.dateOfBirth}
                      @input=${this._handleInput}
                      data-field="dateOfBirth"
                      required
                    >
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="phone">
                      ${this.language==="tr"?"Telefon Numarası":"Phone Number"} <span class="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      class="form-input"
                      .value=${this.formData.phone}
                      @input=${this._handleInput}
                      data-field="phone"
                      required
                    >
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="dateOfEmployment">
                      ${this.language==="tr"?"İşe Başlama Tarihi":"Date of Employment"} <span class="required">*</span>
                    </label>
                    <input
                      type="date"
                      id="dateOfEmployment"
                      class="form-input"
                      .value=${this.formData.dateOfEmployment}
                      @input=${this._handleInput}
                      data-field="dateOfEmployment"
                      required
                    >
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="email">
                      ${this.language==="tr"?"E-posta Adresi":"Email Address"} <span class="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="form-input"
                      .value=${this.formData.email}
                      @input=${this._handleInput}
                      data-field="email"
                      required
                    >
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="department">
                      ${this.language==="tr"?"Departman":"Department"} <span class="required">*</span>
                    </label>
                    <select
                      id="department"
                      class="form-input"
                      .value=${this.formData.department}
                      @change=${this._handleInput}
                      data-field="department"
                      required
                    >
                      <option value="">${this.language==="tr"?"Departman Seçin":"Select Department"}</option>
                      ${this.departments.map(i=>f`
                        <option value="${i}">${i}</option>
                      `)}
                    </select>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="position">
                      ${this.language==="tr"?"Pozisyon":"Position"} <span class="required">*</span>
                    </label>
                    <select
                      id="position"
                      class="form-input"
                      .value=${this.formData.position}
                      @change=${this._handleInput}
                      data-field="position"
                      required
                    >
                      <option value="">${this.language==="tr"?"Pozisyon Seçin":"Select Position"}</option>
                      ${this.positions.map(i=>f`
                        <option value="${i}">${i}</option>
                      `)}
                    </select>
                  </div>
                </div>
              </div>

              <div class="form-actions">
                <button type="button" class="btn btn-secondary" @click=${this._resetForm}>
                  ${this.language==="tr"?"İptal":"Cancel"}
                </button>
                <button 
                  type="submit" 
                  class="btn btn-primary"
                  ?disabled=${this.isSubmitting}
                >
                  ${this.isSubmitting?this.language==="tr"?"Ekleniyor...":"Adding...":this.language==="tr"?"Personel Ekle":"Add Employee"}
                </button>
              </div>
            </form>
          `}
      </div>
    `}_handleInput(i){const e=i.target,t=e.getAttribute("data-field");this.formData={...this.formData,[t]:e.value},this.errors[t]&&(this.errors={...this.errors,[t]:void 0})}_validateForm(){const i={};return this.formData.firstName.trim()||(i.firstName="First name is required"),this.formData.lastName.trim()||(i.lastName="Last name is required"),this.formData.dateOfBirth||(i.dateOfBirth="Date of birth is required"),this.formData.phone.trim()||(i.phone="Phone number is required"),this.formData.dateOfEmployment||(i.dateOfEmployment="Date of employment is required"),this.formData.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)||(i.email="Please enter a valid email address"):i.email="Email is required",this.formData.department||(i.department="Department selection is required"),this.formData.position||(i.position="Position selection is required"),this.errors=i,Object.keys(i).length===0}async _handleSubmit(i){if(i.preventDefault(),!this._validateForm())return;this.isSubmitting=!0,await new Promise(t=>setTimeout(t,1e3));const e={id:Date.now().toString(),...this.formData,dateOfEmployment:this._formatDate(this.formData.dateOfEmployment),dateOfBirth:this._formatDate(this.formData.dateOfBirth)};this.dispatchEvent(new CustomEvent("employee-added",{detail:{employee:e},bubbles:!0,composed:!0})),this.isSubmitting=!1,this.isSuccess=!0}_resetForm(){this.formData={firstName:"",lastName:"",dateOfEmployment:"",dateOfBirth:"",phone:"",email:"",department:"",position:""},this.errors={},this.isSuccess=!1}_formatDate(i){const e=new Date(i),t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${n}`}};J.styles=se`
    :host {
      display: block;
    }

    .form-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 30px;
    }

    .form-header {
      margin-bottom: 30px;
      text-align: center;
    }

    .form-header h2 {
      color: var(--ing-orange);
      margin-bottom: 10px;
      font-size: 24px;
      font-weight: bold;
    }

    .form-header p {
      color: var(--ing-gray);
      margin: 0;
      font-size: 14px;
    }

    .form-section {
      background: var(--ing-white);
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 20px;
      border: 1px solid var(--ing-border);
    }

    .section-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--ing-orange);
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      width: 100%;
    }

    .form-group {
      margin-bottom: 20px;
      width: 100%;
    }

    .form-group.full-width {
      grid-column: 1 / -1;
    }

    .form-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #333;
      font-size: 14px;
    }

    .form-input {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--ing-border);
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.3s ease;
      background: var(--ing-white);
      box-sizing: border-box;
    }

    .form-input:focus {
      outline: none;
      border-color: var(--ing-orange);
      box-shadow: 0 0 0 2px rgba(255, 98, 0, 0.25);
    }

    .form-input.error {
      border-color: #dc3545;
    }

    .error-message {
      color: #dc3545;
      font-size: 12px;
      margin-top: 4px;
    }

    .form-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid var(--ing-border);
    }

    .btn {
      padding: 12px 24px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid transparent;
    }

    .btn-secondary {
      background: var(--ing-white);
      border-color: var(--ing-border);
      color: var(--ing-gray);
    }

    .btn-secondary:hover {
      background-color: var(--ing-light-gray);
      border-color: var(--ing-gray);
    }

    .btn-primary {
      background: var(--ing-orange);
      color: white;
      border-color: var(--ing-orange);
    }

    .btn-primary:hover {
      background: var(--ing-dark-orange);
      border-color: var(--ing-dark-orange);
    }

    .btn-primary:disabled {
      background: var(--ing-gray);
      border-color: var(--ing-gray);
      cursor: not-allowed;
    }

    .success-message {
      background-color: #d4edda;
      color: #155724;
      padding: 16px;
      border-radius: 4px;
      margin-bottom: 20px;
      text-align: center;
      border: 1px solid #c3e6cb;
    }

    .required {
      color: #dc3545;
    }

    @media (max-width: 768px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
      
      .form-container {
        padding: 20px;
      }
    }
  `;ye([D({type:String})],J.prototype,"language",2);ye([w()],J.prototype,"formData",2);ye([w()],J.prototype,"errors",2);ye([w()],J.prototype,"isSubmitting",2);ye([w()],J.prototype,"isSuccess",2);J=ye([le("employee-form")],J);var Vi=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,de=(i,e,t,r)=>{for(var n=r>1?void 0:r?Wi(e,t):e,a=i.length-1,o;a>=0;a--)(o=i[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Vi(e,t,n),n};let U=class extends T{constructor(){super(...arguments),this.employeeId="",this.employee=null,this.formData={},this.isLoading=!0,this.isSaving=!1,this.isSuccess=!1,this.departments=["Analytics","Software Development","Human Resources","Marketing","Sales","Finance","Operations","Customer Service","IT Support"],this.positions=["Junior","Senior","Manager","Director","VP","C-Level"],this.mockEmployees=[{id:"1",firstName:"Ahmet",lastName:"Sourtimes",dateOfEmployment:"2022-09-23",dateOfBirth:"1990-03-15",phone:"+(90) 532 123 45 67",email:"ahmet@sourtimes.org",department:"Analytics",position:"Junior"},{id:"2",firstName:"Ayşe",lastName:"Demir",dateOfEmployment:"2021-01-15",dateOfBirth:"1988-07-22",phone:"+(90) 533 234 56 78",email:"ayse.demir@company.com",department:"Software Development",position:"Senior"},{id:"3",firstName:"Mehmet",lastName:"Kaya",dateOfEmployment:"2023-03-08",dateOfBirth:"1992-11-10",phone:"+(90) 534 345 67 89",email:"mehmet.kaya@company.com",department:"Marketing",position:"Manager"}]}connectedCallback(){super.connectedCallback(),this._loadEmployee()}render(){return this.isLoading?f`
        <div class="edit-container">
          <div class="loading">
            <p>Personel bilgileri yükleniyor...</p>
          </div>
        </div>
      `:this.employee?f`
      <div class="edit-container">
        <div class="back-link" @click=${this._goBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Personel Listesine Dön
        </div>

        <div class="edit-header">
          <h2>Personel Düzenle</h2>
          <p>Aşağıdaki bilgileri güncelleyin</p>
        </div>

        ${this.isSuccess?f`
          <div class="success-message">
            <p>Personel başarıyla güncellendi!</p>
            <button class="btn btn-secondary" @click=${this._goBack}>Listeye Dön</button>
          </div>
        `:f`
          <form @submit=${this._handleSubmit}>
            <div class="form-section">
              <h3 class="section-title">Personel Bilgileri</h3>
              <div class="form-grid">
                <div class="form-group">
                  <label class="form-label" for="firstName">
                    Ad <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    class="form-input"
                    .value=${this.formData.firstName||this.employee.firstName}
                    @input=${this._handleInput}
                    data-field="firstName"
                    required
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="lastName">
                    Soyad <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    class="form-input"
                    .value=${this.formData.lastName||this.employee.lastName}
                    @input=${this._handleInput}
                    data-field="lastName"
                    required
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="dateOfBirth">
                    Doğum Tarihi <span class="required">*</span>
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    class="form-input"
                    .value=${this.formData.dateOfBirth||this.employee.dateOfBirth}
                    @input=${this._handleInput}
                    data-field="dateOfBirth"
                    required
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="phone">
                    Telefon Numarası <span class="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    class="form-input"
                    .value=${this.formData.phone||this.employee.phone}
                    @input=${this._handleInput}
                    data-field="phone"
                    required
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="dateOfEmployment">
                    İşe Başlama Tarihi <span class="required">*</span>
                  </label>
                  <input
                    type="date"
                    id="dateOfEmployment"
                    class="form-input"
                    .value=${this.formData.dateOfEmployment||this.employee.dateOfEmployment}
                    @input=${this._handleInput}
                    data-field="dateOfEmployment"
                    required
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="email">
                    E-posta Adresi <span class="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="form-input"
                    .value=${this.formData.email||this.employee.email}
                    @input=${this._handleInput}
                    data-field="email"
                    required
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="department">
                    Departman <span class="required">*</span>
                  </label>
                  <select
                    id="department"
                    class="form-input"
                    .value=${this.formData.department||this.employee.department}
                    @change=${this._handleInput}
                    data-field="department"
                    required
                  >
                    <option value="">Departman Seçin</option>
                    ${this.departments.map(i=>f`
                      <option value="${i}">${i}</option>
                    `)}
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="position">
                    Pozisyon <span class="required">*</span>
                  </label>
                  <select
                    id="position"
                    class="form-input"
                    .value=${this.formData.position||this.employee.position}
                    @change=${this._handleInput}
                    data-field="position"
                    required
                  >
                    <option value="">Pozisyon Seçin</option>
                    ${this.positions.map(i=>f`
                      <option value="${i}">${i}</option>
                    `)}
                  </select>
                </div>
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-secondary" @click=${this._goBack}>
                İptal
              </button>
              <button 
                type="submit" 
                class="btn btn-primary"
                ?disabled=${this.isSaving}
              >
                ${this.isSaving?"Kaydediliyor...":"Değişiklikleri Kaydet"}
              </button>
            </div>
          </form>
        `}
      </div>
    `:f`
        <div class="edit-container">
          <div class="loading">
            <p>Personel bulunamadı</p>
            <button class="btn btn-secondary" @click=${this._goBack}>Geri Dön</button>
          </div>
        </div>
      `}_loadEmployee(){setTimeout(()=>{this.employee=this.mockEmployees.find(i=>i.id===this.employeeId)||null,this.isLoading=!1},500)}_handleInput(i){const e=i.target,t=e.getAttribute("data-field");this.formData={...this.formData,[t]:e.value}}async _handleSubmit(i){i.preventDefault(),this.isSaving=!0,await new Promise(e=>setTimeout(e,1e3)),this.isSaving=!1,this.isSuccess=!0}_goBack(){window.history.back()}};U.styles=se`
    :host {
      display: block;
    }

    .edit-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 30px;
    }

    .edit-header {
      margin-bottom: 30px;
      text-align: center;
    }

    .edit-header h2 {
      color: var(--ing-orange);
      margin-bottom: 10px;
      font-size: 24px;
      font-weight: bold;
    }

    .edit-header p {
      color: var(--ing-gray);
      margin: 0;
      font-size: 14px;
    }

    .loading {
      text-align: center;
      padding: 60px 20px;
      color: var(--ing-gray);
    }

    .form-section {
      background: var(--ing-white);
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 20px;
      border: 1px solid var(--ing-border);
    }

    .section-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--ing-orange);
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      width: 100%;
    }

    .form-group {
      margin-bottom: 20px;
      width: 100%;
    }

    .form-group.full-width {
      grid-column: 1 / -1;
    }

    .form-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #333;
      font-size: 14px;
    }

    .form-input {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--ing-border);
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.3s ease;
      background: var(--ing-white);
      box-sizing: border-box;
    }

    .form-input:focus {
      outline: none;
      border-color: var(--ing-orange);
      box-shadow: 0 0 0 2px rgba(255, 98, 0, 0.25);
    }

    .form-input.error {
      border-color: #dc3545;
    }

    .error-message {
      color: #dc3545;
      font-size: 12px;
      margin-top: 4px;
    }

    .form-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid var(--ing-border);
    }

    .btn {
      padding: 12px 24px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid transparent;
    }

    .btn-secondary {
      background: var(--ing-white);
      border-color: var(--ing-border);
      color: var(--ing-gray);
    }

    .btn-secondary:hover {
      background-color: var(--ing-light-gray);
      border-color: var(--ing-gray);
    }

    .btn-primary {
      background: var(--ing-orange);
      color: white;
      border-color: var(--ing-orange);
    }

    .btn-primary:hover {
      background: var(--ing-dark-orange);
      border-color: var(--ing-dark-orange);
    }

    .btn-primary:disabled {
      background: var(--ing-gray);
      border-color: var(--ing-gray);
      cursor: not-allowed;
    }

    .success-message {
      background-color: #d4edda;
      color: #155724;
      padding: 16px;
      border-radius: 4px;
      margin-bottom: 20px;
      text-align: center;
      border: 1px solid #c3e6cb;
    }

    .required {
      color: #dc3545;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--ing-orange);
      text-decoration: none;
      font-size: 14px;
      margin-bottom: 20px;
      cursor: pointer;
    }

    .back-link:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
      
      .edit-container {
        padding: 20px;
      }
    }
  `;de([D({type:String})],U.prototype,"employeeId",2);de([w()],U.prototype,"employee",2);de([w()],U.prototype,"formData",2);de([w()],U.prototype,"isLoading",2);de([w()],U.prototype,"isSaving",2);de([w()],U.prototype,"isSuccess",2);U=de([le("edit-employee")],U);var Gi=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,ht=(i,e,t,r)=>{for(var n=r>1?void 0:r?Yi(e,t):e,a=i.length-1,o;a>=0;a--)(o=i[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Gi(e,t,n),n};let fe=class extends T{constructor(){super(...arguments),this.locale="tr",this.translations={tr:{"employee.list.title":"Çalışan Listesi","employee.add.title":"Yeni Çalışan Ekle","employee.name":"Ad Soyad","employee.email":"E-posta","employee.department":"Departman","employee.position":"Pozisyon","employee.salary":"Maaş","employee.hireDate":"İşe Başlama Tarihi","employee.search.placeholder":"Çalışan ara...","employee.add.success":"Çalışan başarıyla eklendi!","employee.add.submit":"Çalışan Ekle","employee.add.submitting":"Ekleniyor...","employee.add.reset":"Yeni Çalışan Ekle","nav.employee.list":"Çalışan Listesi","nav.employee.add":"Yeni Çalışan Ekle","form.required":"gereklidir","form.email.invalid":"Geçerli bir e-posta adresi girin","form.salary.invalid":"Maaş 0'dan büyük olmalıdır","form.department.select":"Departman seçin","common.empty.state":"Henüz çalışan bulunmuyor.","common.search.no.results":"Arama kriterlerine uygun çalışan bulunamadı."},en:{"employee.list.title":"Employee List","employee.add.title":"Add New Employee","employee.name":"Full Name","employee.email":"Email","employee.department":"Department","employee.position":"Position","employee.salary":"Salary","employee.hireDate":"Hire Date","employee.search.placeholder":"Search employees...","employee.add.success":"Employee added successfully!","employee.add.submit":"Add Employee","employee.add.submitting":"Adding...","employee.add.reset":"Add New Employee","nav.employee.list":"Employee List","nav.employee.add":"Add New Employee","form.required":"is required","form.email.invalid":"Please enter a valid email address","form.salary.invalid":"Salary must be greater than 0","form.department.select":"Select department","common.empty.state":"No employees found yet.","common.search.no.results":"No employees found matching search criteria."}}}render(){return f`
      <slot></slot>
    `}t(i){var e;return((e=this.translations[this.locale])==null?void 0:e[i])||i}setLocale(i){this.locale=i}};fe.styles=se`
    :host {
      display: block;
    }
  `;ht([D({type:String})],fe.prototype,"locale",2);ht([D({type:Object})],fe.prototype,"translations",2);fe=ht([le("i18n-provider")],fe);new fe;var Ki=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,Ve=(i,e,t,r)=>{for(var n=r>1?void 0:r?Ji(e,t):e,a=i.length-1,o;a>=0;a--)(o=i[a])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Ki(e,t,n),n};let ve=class extends T{constructor(){super(...arguments),this.currentRoute="/",this.currentLanguage="tr",this.showLanguageMenu=!1}connectedCallback(){super.connectedCallback(),this._handleClickOutside=this._handleClickOutside.bind(this),this._handlePopState=this._handlePopState.bind(this),document.addEventListener("click",this._handleClickOutside),window.addEventListener("popstate",this._handlePopState),this._updateCurrentRoute()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleClickOutside),window.removeEventListener("popstate",this._handlePopState)}render(){return f`
      <div class="app-container">
        <header class="header">
          <div class="logo-section" @click=${()=>this._navigateTo("/")}>
            <div class="logo">ING</div>
            <div>
              <div class="logo-text">Employee Management</div>
              <p class="page-title">${this._getPageTitle()}</p>
            </div>
          </div>
          
          <div class="nav-section">
            <div class="nav-item ${this.currentRoute==="/"?"active":""}" @click=${()=>this._navigateTo("/")}>
              <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.7 2.55A1 1 0 0 0 14 12h-2v8h2v-6h1l1 6h2l-1-5.43L16.5 16H18v6h2z"/>
              </svg>
              ${this.currentLanguage==="tr"?"Personel":"Employees"}
            </div>
            
            <div class="nav-item ${this.currentRoute==="/add"?"active":""}" @click=${()=>this._navigateTo("/add")}>
              <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              ${this.currentLanguage==="tr"?"Yeni Ekle":"Add New"}
            </div>
            
            <div class="language-selector">
              <button class="language-btn" @click=${i=>this._toggleLanguageMenu(i)}>
                ${this.currentLanguage==="tr"?"TR":"EN"}
              </button>
              <div class="language-menu ${this.showLanguageMenu?"show":""}">
                <div class="language-option ${this.currentLanguage==="tr"?"active":""}" @click=${()=>this._changeLanguage("tr")}>
                  TR
                </div>
                <div class="language-option ${this.currentLanguage==="en"?"active":""}" @click=${()=>this._changeLanguage("en")}>
                  EN
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <main class="content">
          <div id="router-outlet"></div>
        </main>
      </div>
    `}_updateCurrentRoute(){const i=window.location.pathname;this.currentRoute=i,this._renderContent()}_navigateTo(i){window.history.pushState({},"",i),this._updateCurrentRoute()}_handlePopState(){this._updateCurrentRoute()}_renderContent(){var t;const i=window.location.pathname,e=(t=this.shadowRoot)==null?void 0:t.getElementById("router-outlet");if(e)if(e.innerHTML="",i.startsWith("/edit/")){const r=document.createElement("edit-employee");r.setAttribute("language",this.currentLanguage),r.setAttribute("employeeId",i.split("/")[2]||""),e.appendChild(r)}else if(i==="/add"){const r=document.createElement("employee-form");r.setAttribute("language",this.currentLanguage),r.addEventListener("employee-added",this._handleEmployeeAdded.bind(this)),e.appendChild(r)}else{const r=document.createElement("employee-list");r.setAttribute("language",this.currentLanguage),r.addEventListener("edit-employee",this._handleEditEmployee.bind(this)),e.appendChild(r)}}_handleEditEmployee(i){const{employee:e}=i.detail;window.history.pushState({},"",`/edit/${e.id}`),this._updateCurrentRoute()}_handleEmployeeAdded(i){const{employee:e}=i.detail;window.dispatchEvent(new CustomEvent("employee-added",{detail:{employee:e}})),window.history.pushState({},"","/"),this._updateCurrentRoute()}_toggleLanguageMenu(i){i.stopPropagation(),this.showLanguageMenu=!this.showLanguageMenu}_changeLanguage(i){this.currentLanguage=i,this.showLanguageMenu=!1;const e=document.querySelector("i18n-provider");e&&e.setLocale(i),this.requestUpdate()}_handleClickOutside(i){i.target.closest(".language-selector")||(this.showLanguageMenu=!1)}_getPageTitle(){const i=window.location.pathname;if(i.startsWith("/edit/"))return this.currentLanguage==="tr"?"Personel Düzenle":"Edit Employee";switch(i){case"/add":return this.currentLanguage==="tr"?"Yeni Personel Ekle":"Add New Employee";case"/":default:return this.currentLanguage==="tr"?"Personel Listesi":"Employee List"}}};ve.styles=se`
    :host {
      display: block;
      min-height: 100vh;
      background-color: var(--ing-light-gray);
    }

    .app-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 20px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 0 10px;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo {
      width: 40px;
      height: 40px;
      background: var(--ing-orange);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .logo:hover {
      background: var(--ing-dark-orange);
      transform: scale(1.05);
    }

    .logo-text {
      font-size: 24px;
      font-weight: bold;
      color: var(--ing-orange);
    }

    .page-title {
      font-size: 14px;
      color: var(--ing-gray);
      margin: 0;
      font-weight: normal;
    }

    .nav-section {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--ing-gray);
      text-decoration: none;
      font-size: 14px;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .nav-item:hover {
      background: var(--ing-white);
      color: var(--ing-orange);
    }

    .nav-item.active {
      background: var(--ing-orange);
      color: white;
    }

    .nav-icon {
      width: 16px;
      height: 16px;
    }

    .language-selector {
      position: relative;
    }

    .language-btn {
      background: var(--ing-white);
      border: 1px solid var(--ing-border);
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      color: var(--ing-gray);
      transition: all 0.3s ease;
    }

    .language-btn:hover {
      border-color: var(--ing-orange);
      color: var(--ing-orange);
    }

    .language-menu {
      position: absolute;
      top: 100%;
      right: 0;
      background: var(--ing-white);
      border: 1px solid var(--ing-border);
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s ease;
    }

    .language-menu.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .language-option {
      padding: 8px 12px;
      cursor: pointer;
      font-size: 14px;
      color: var(--ing-gray);
      transition: all 0.3s ease;
    }

    .language-option:hover {
      background: var(--ing-light-gray);
      color: var(--ing-orange);
    }

    .language-option.active {
      background: var(--ing-orange);
      color: white;
    }

    .content {
      background: var(--ing-white);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      min-height: 500px;
    }

    #router-outlet {
      padding: 20px;
    }
  `;Ve([D({type:String})],ve.prototype,"currentRoute",2);Ve([w()],ve.prototype,"currentLanguage",2);Ve([w()],ve.prototype,"showLanguageMenu",2);ve=Ve([le("employee-app")],ve);function Zi(i){for(var e=[],t=0;t<i.length;){var r=i[t];if(r==="*"||r==="+"||r==="?"){e.push({type:"MODIFIER",index:t,value:i[t++]});continue}if(r==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:i[t++]});continue}if(r==="{"){e.push({type:"OPEN",index:t,value:i[t++]});continue}if(r==="}"){e.push({type:"CLOSE",index:t,value:i[t++]});continue}if(r===":"){for(var n="",a=t+1;a<i.length;){var o=i.charCodeAt(a);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){n+=i[a++];continue}break}if(!n)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:n}),t=a;continue}if(r==="("){var l=1,s="",a=t+1;if(i[a]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<i.length;){if(i[a]==="\\"){s+=i[a++]+i[a++];continue}if(i[a]===")"){if(l--,l===0){a++;break}}else if(i[a]==="("&&(l++,i[a+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(a));s+=i[a++]}if(l)throw new TypeError("Unbalanced pattern at ".concat(t));if(!s)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:s}),t=a;continue}e.push({type:"CHAR",index:t,value:i[t++]})}return e.push({type:"END",index:t,value:""}),e}function pt(i,e){e===void 0&&(e={});for(var t=Zi(i),r=e.prefixes,n=r===void 0?"./":r,a=e.delimiter,o=a===void 0?"/#?":a,l=[],s=0,h=0,c="",d=function(k){if(h<t.length&&t[h].type===k)return t[h++].value},u=function(k){var A=d(k);if(A!==void 0)return A;var I=t[h],We=I.type,ui=I.index;throw new TypeError("Unexpected ".concat(We," at ").concat(ui,", expected ").concat(k))},v=function(){for(var k="",A;A=d("CHAR")||d("ESCAPED_CHAR");)k+=A;return k},b=function(k){for(var A=0,I=o;A<I.length;A++){var We=I[A];if(k.indexOf(We)>-1)return!0}return!1},_=function(k){var A=l[l.length-1],I=k||(A&&typeof A=="string"?A:"");if(A&&!I)throw new TypeError('Must have text between two parameters, missing text after "'.concat(A.name,'"'));return!I||b(I)?"[^".concat(V(o),"]+?"):"(?:(?!".concat(V(I),")[^").concat(V(o),"])+?")};h<t.length;){var $=d("CHAR"),x=d("NAME"),ce=d("PATTERN");if(x||ce){var M=$||"";n.indexOf(M)===-1&&(c+=M,M=""),c&&(l.push(c),c=""),l.push({name:x||s++,prefix:M,suffix:"",pattern:ce||_(M),modifier:d("MODIFIER")||""});continue}var y=$||d("ESCAPED_CHAR");if(y){c+=y;continue}c&&(l.push(c),c="");var Z=d("OPEN");if(Z){var M=v(),q=d("NAME")||"",we=d("PATTERN")||"",he=v();u("CLOSE"),l.push({name:q||(we?s++:""),pattern:q&&!we?_(M):we,prefix:M,suffix:he,modifier:d("MODIFIER")||""});continue}u("END")}return l}function Vt(i,e){return Wt(pt(i,e),e)}function Wt(i,e){e===void 0&&(e={});var t=ut(e),r=e.encode,n=r===void 0?function(s){return s}:r,a=e.validate,o=a===void 0?!0:a,l=i.map(function(s){if(typeof s=="object")return new RegExp("^(?:".concat(s.pattern,")$"),t)});return function(s){for(var h="",c=0;c<i.length;c++){var d=i[c];if(typeof d=="string"){h+=d;continue}var u=s?s[d.name]:void 0,v=d.modifier==="?"||d.modifier==="*",b=d.modifier==="*"||d.modifier==="+";if(Array.isArray(u)){if(!b)throw new TypeError('Expected "'.concat(d.name,'" to not repeat, but got an array'));if(u.length===0){if(v)continue;throw new TypeError('Expected "'.concat(d.name,'" to not be empty'))}for(var _=0;_<u.length;_++){var $=n(u[_],d);if(o&&!l[c].test($))throw new TypeError('Expected all "'.concat(d.name,'" to match "').concat(d.pattern,'", but got "').concat($,'"'));h+=d.prefix+$+d.suffix}continue}if(typeof u=="string"||typeof u=="number"){var $=n(String(u),d);if(o&&!l[c].test($))throw new TypeError('Expected "'.concat(d.name,'" to match "').concat(d.pattern,'", but got "').concat($,'"'));h+=d.prefix+$+d.suffix;continue}if(!v){var x=b?"an array":"a string";throw new TypeError('Expected "'.concat(d.name,'" to be ').concat(x))}}return h}}function V(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ut(i){return i&&i.sensitive?"":"i"}function Qi(i,e){if(!e)return i;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,n=t.exec(i.source);n;)e.push({name:n[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),n=t.exec(i.source);return i}function Xi(i,e,t){var r=i.map(function(n){return Gt(n,e,t).source});return new RegExp("(?:".concat(r.join("|"),")"),ut(t))}function er(i,e,t){return tr(pt(i,t),e,t)}function tr(i,e,t){t===void 0&&(t={});for(var r=t.strict,n=r===void 0?!1:r,a=t.start,o=a===void 0?!0:a,l=t.end,s=l===void 0?!0:l,h=t.encode,c=h===void 0?function(A){return A}:h,d=t.delimiter,u=d===void 0?"/#?":d,v=t.endsWith,b=v===void 0?"":v,_="[".concat(V(b),"]|$"),$="[".concat(V(u),"]"),x=o?"^":"",ce=0,M=i;ce<M.length;ce++){var y=M[ce];if(typeof y=="string")x+=V(c(y));else{var Z=V(c(y.prefix)),q=V(c(y.suffix));if(y.pattern)if(e&&e.push(y),Z||q)if(y.modifier==="+"||y.modifier==="*"){var we=y.modifier==="*"?"?":"";x+="(?:".concat(Z,"((?:").concat(y.pattern,")(?:").concat(q).concat(Z,"(?:").concat(y.pattern,"))*)").concat(q,")").concat(we)}else x+="(?:".concat(Z,"(").concat(y.pattern,")").concat(q,")").concat(y.modifier);else{if(y.modifier==="+"||y.modifier==="*")throw new TypeError('Can not repeat "'.concat(y.name,'" without a prefix and suffix'));x+="(".concat(y.pattern,")").concat(y.modifier)}else x+="(?:".concat(Z).concat(q,")").concat(y.modifier)}}if(s)n||(x+="".concat($,"?")),x+=t.endsWith?"(?=".concat(_,")"):"$";else{var he=i[i.length-1],k=typeof he=="string"?$.indexOf(he[he.length-1])>-1:he===void 0;n||(x+="(?:".concat($,"(?=").concat(_,"))?")),k||(x+="(?=".concat($,"|").concat(_,")"))}return new RegExp(x,ut(t))}function Gt(i,e,t){return i instanceof RegExp?Qi(i,e):Array.isArray(i)?Xi(i,e,t):er(i,e,t)}function X(i){return typeof i=="object"&&!!i}function Oe(i){return typeof i=="function"}function B(i){return typeof i=="string"}function qe(i=[]){return Array.isArray(i)?i:[i]}function Y(i){return`[Vaadin.Router] ${i}`}class Yt extends Error{constructor(t){super(Y(`Page not found (${t.pathname})`));N(this,"code");N(this,"context");this.context=t,this.code=404}}const ae=Symbol("NotFoundResult");function Kt(i){return new Yt(i)}function Jt(i){return(Array.isArray(i)?i[0]:i)??""}function je(i){return Jt(i==null?void 0:i.path)}function ir(i){return Array.isArray(i)&&i.length>0?i:void 0}const Qe=new Map;Qe.set("|false",{keys:[],pattern:/(?:)/u});function At(i){try{return decodeURIComponent(i)}catch{return i}}function rr(i,e,t=!1,r=[],n){const a=`${i}|${String(t)}`,o=Jt(e);let l=Qe.get(a);if(!l){const c=[];l={keys:c,pattern:Gt(i,c,{end:t,strict:i===""})},Qe.set(a,l)}const s=l.pattern.exec(o);if(!s)return null;const h={...n};for(let c=1;c<s.length;c++){const d=l.keys[c-1],u=d.name,v=s[c];(v!==void 0||!Object.hasOwn(h,u))&&(d.modifier==="+"||d.modifier==="*"?h[u]=v?v.split(/[/?#]/u).map(At):[]:h[u]=v&&At(v))}return{keys:[...r,...l.keys],params:h,path:s[0]}}var nr=rr;function Zt(i,e,t,r,n){let a,o,l=0,s=je(i);return s.startsWith("/")&&(t&&(s=s.substring(1)),t=!0),{next(h){if(i===h)return{done:!0,value:void 0};i.__children??(i.__children=ir(i.children));const c=i.__children??[],d=!i.__children&&!i.children;if(!a&&(a=nr(s,e,d,r,n),a))return{value:{keys:a.keys,params:a.params,path:a.path,route:i}};if(a&&c.length>0)for(;l<c.length;){if(!o){const v=c[l];v.parent=i;let b=a.path.length;b>0&&e.charAt(b)==="/"&&(b+=1),o=Zt(v,e.substring(b),t,a.keys,a.params)}const u=o.next(h);if(!u.done)return{done:!1,value:u.value};o=null,l+=1}return{done:!0,value:void 0}}}}var ar=Zt;function or(i){if(Oe(i.route.action))return i.route.action(i)}function sr(i,e){let t=i;for(;t;)if(t=t.parent,t===e)return!0;return!1}function lr(i){return!!i&&typeof i=="object"&&"next"in i&&"params"in i&&"result"in i&&"route"in i}class dr extends Error{constructor(t,r){let n=`Path '${t.pathname}' is not properly resolved due to an error.`;const a=je(t.route);a&&(n+=` Resolution had failed on route: '${a}'`);super(n,r);N(this,"code");N(this,"context");this.code=r==null?void 0:r.code,this.context=t}warn(){console.warn(this.message)}}function cr(i,e){var n;const{path:t,route:r}=e;if(r&&!r.__synthetic){const a={path:t,route:r};if(r.parent&&i.chain)for(let o=i.chain.length-1;o>=0&&i.chain[o].route!==r.parent;o--)i.chain.pop();(n=i.chain)==null||n.push(a)}}var te,P;class Qt{constructor(e,{baseUrl:t="",context:r,errorHandler:n,resolveRoute:a=or}={}){N(this,"baseUrl");C(this,te);N(this,"errorHandler");N(this,"resolveRoute");C(this,P);if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t,this.errorHandler=n,this.resolveRoute=a,Array.isArray(e)?S(this,P,{__children:e,__synthetic:!0,action:()=>{},path:""}):S(this,P,{...e,parent:void 0}),S(this,te,{...r,hash:"",async next(){return ae},params:{},pathname:"",resolver:this,route:g(this,P),search:"",chain:[]})}get root(){return g(this,P)}get context(){return g(this,te)}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...g(this,P).__children??[]]}removeRoutes(){g(this,P).__children=[]}async resolve(e){const t=this,r={...g(this,te),...B(e)?{pathname:e}:e,next:h},n=ar(g(this,P),this.__normalizePathname(r.pathname)??r.pathname,!!this.baseUrl),a=this.resolveRoute;let o=null,l=null,s=r;async function h(c=!1,d=(v=>(v=o==null?void 0:o.value)==null?void 0:v.route)(),u){var $,x;const b=u===null?($=o==null?void 0:o.value)==null?void 0:$.route:void 0;if(o=l??n.next(b),l=null,!c&&(o.done||!sr(o.value.route,d)))return l=o,ae;if(o.done)throw Kt(r);s={...r,params:o.value.params,route:o.value.route,chain:(x=s.chain)==null?void 0:x.slice()},cr(s,o.value);const _=await a(s);return _!=null&&_!==ae?(s.result=lr(_)?_.result:_,S(t,te,s),s):await h(c,d,_)}try{return await h(!0,g(this,P))}catch(c){const d=c instanceof Yt?c:new dr(s,{code:500,cause:c});if(this.errorHandler)return s.result=this.errorHandler(d),s;throw c}}setRoutes(e){g(this,P).__children=[...qe(e)]}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=e.startsWith("/")?new URL(t).origin+e:`./${e}`,n=new URL(r,t).href;if(n.startsWith(t))return n.slice(t.length)}addRoutes(e){return g(this,P).__children=[...g(this,P).__children??[],...qe(e)],this.getRoutes()}}te=new WeakMap,P=new WeakMap;function Xt(i,e,t,r){var a;const n=e.name??(r==null?void 0:r(e));if(n&&(i.has(n)?(a=i.get(n))==null||a.push(e):i.set(n,[e])),Array.isArray(t))for(const o of t)o.parent=e,Xt(i,o,o.__children??o.children,r)}function St(i,e){const t=i.get(e);if(t){if(t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t[0]}}function hr(i,e={}){if(!(i instanceof Qt))throw new TypeError("An instance of Resolver is expected");const t=new Map,r=new Map;return(n,a)=>{let o=St(r,n);if(!o&&(r.clear(),Xt(r,i.root,i.root.__children,e.cacheKeyProvider),o=St(r,n),!o))throw new Error(`Route "${n}" not found`);let l=o.fullPath?t.get(o.fullPath):void 0;if(!l){let c=je(o),d=o.parent;for(;d;){const b=je(d);b&&(c=`${b.replace(/\/$/u,"")}/${c.replace(/^\//u,"")}`),d=d.parent}const u=pt(c),v=Object.create(null);for(const b of u)B(b)||(v[b.name]=!0);l={keys:v,tokens:u},t.set(c,l),o.fullPath=c}let h=Wt(l.tokens,{encode:encodeURIComponent,...e})(a)||"/";if(e.stringifyQueryParams&&a){const c={};for(const[u,v]of Object.entries(a))!(u in l.keys)&&v&&(c[u]=v);const d=e.stringifyQueryParams(c);d&&(h+=d.startsWith("?")?d:`?${d}`)}return h}}var pr=hr;const ur=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Re=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function mr(){function i(){return!0}return ei(i)}function gr(){try{return fr()?!0:vr()?Re?!br():!mr():!1}catch{return!1}}function fr(){return localStorage.getItem("vaadin.developmentmode.force")}function vr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function br(){return!!(Re&&Object.keys(Re).map(e=>Re[e]).filter(e=>e.productionMode).length>0)}function ei(i,e){if(typeof i!="function")return;const t=ur.exec(i.toString());if(t)try{i=new Function(t[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return i(e)}window.Vaadin=window.Vaadin||{};const Pt=function(i,e){if(window.Vaadin.developmentMode)return ei(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=gr());function yr(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const wr=function(){if(typeof Pt=="function")return Pt(yr)};function _r(i,e=window.Vaadin??(window.Vaadin={})){e.registrations??(e.registrations=[]),e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}_r();wr();const $r=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},xr=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};async function Er(i,e){return i.classList.add(e),await new Promise(t=>{if($r(i)){const r=i.getBoundingClientRect(),n=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;i.setAttribute("style",`position: absolute; ${n}`),xr(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}var kt=Er;function ti(i){if(!i||!B(i.path))throw new Error(Y('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!Oe(i.action)&&!Array.isArray(i.children)&&!Oe(i.children)&&!B(i.component)&&!B(i.redirect))throw new Error(Y(`Expected route config "${i.path}" to include either "component, redirect" or "action" function but none found.`));i.redirect&&["bundle","component"].forEach(e=>{e in i&&console.warn(Y(`Route config "${String(i.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function Ot(i){qe(i).forEach(e=>ti(e))}function Ar({next:i,...e}){return e}function Le(i,e){const t=e.__effectiveBaseUrl;return t?new URL(i.replace(/^\//u,""),t).pathname:i}function ii(i){return i.map(e=>e.path).reduce((e,t)=>t.length?`${e.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`:e,"")}function Sr(i){return ii(i.map(e=>e.route))}function R({chain:i=[],hash:e="",params:t={},pathname:r="",redirectFrom:n,resolver:a,search:o=""},l){const s=i.map(h=>h.route);return{baseUrl:(a==null?void 0:a.baseUrl)??"",getUrl:(h={})=>a?Le(Vt(Sr(i))({...t,...h}),a):"",hash:e,params:t,pathname:r,redirectFrom:n,route:l??(Array.isArray(s)?s.at(-1):void 0)??null,routes:s,search:o,searchParams:new URLSearchParams(o)}}function Dt(i,e){const t={...i.params};return{redirect:{from:i.pathname,params:t,pathname:e}}}function Pr(i,e){if(e.location=R(i),i.chain){const t=i.chain.map(r=>r.route).indexOf(i.route);i.chain[t].element=e}return e}function Te(i,e,...t){if(typeof i=="function")return i.apply(e,t)}function Ct(i,e,...t){return r=>r&&X(r)&&("cancel"in r||"redirect"in r)?r:Te(e==null?void 0:e[i],e,...t)}function kr(i,e){if(!Array.isArray(i)&&!X(i))throw new Error(Y(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(i)}`));const t=qe(i);t.forEach(r=>ti(r)),e.__children=t}function Ae(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function Or(i){if(typeof i!="object")return String(i);const[e="Unknown"]=/ (.*)\]$/u.exec(String(i))??[];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}function Dr(i){const{port:e,protocol:t}=i,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${a}`}function Mt(i){if(i instanceof Element)return i.nodeName.toLowerCase()}function Nt(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i instanceof MouseEvent?i.composedPath():i.path??[];for(let s=0;s<t.length;s++){const h=t[s];if("nodeName"in h&&h.nodeName.toLowerCase()==="a"){e=h;break}}for(;e&&e instanceof Node&&Mt(e)!=="a";)e=e.parentNode;if(!e||Mt(e)!=="a")return;const r=e;if(r.target&&r.target.toLowerCase()!=="_self"||r.hasAttribute("download")||r.hasAttribute("router-ignore")||r.pathname===window.location.pathname&&r.hash!==""||(r.origin||Dr(r))!==window.location.origin)return;const{hash:a,pathname:o,search:l}=r;Ae("go",{hash:a,pathname:o,search:l})&&i instanceof MouseEvent&&(i.preventDefault(),i.type==="click"&&window.scrollTo(0,0))}const Cr={activate(){window.document.addEventListener("click",Nt)},inactivate(){window.document.removeEventListener("click",Nt)}};var Mr=Cr;function Rt(i){if(i.state==="vaadin-router-ignore")return;const{hash:e,pathname:t,search:r}=window.location;Ae("go",{hash:e,pathname:t,search:r})}const Nr={activate(){window.addEventListener("popstate",Rt)},inactivate(){window.removeEventListener("popstate",Rt)}};var Rr=Nr;let Lt=[];const Lr={CLICK:Mr,POPSTATE:Rr};function Tt(i=[]){Lt.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),Lt=i}const Tr=256;function $e(){return{cancel:!0}}const zt={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return ae}};var De,ue,Ce,ie,W,re,H,L,p,ri,ni,ze,Xe,ai,oi,et,tt,it,j,rt,nt,Ie,at,si,li,di,ci,hi,pi,ot;class zr extends Qt{constructor(t,r){const n=document.head.querySelector("base"),a=n==null?void 0:n.getAttribute("href");super([],{baseUrl:a?new URL(a,document.URL).href.replace(/[^/]*$/u,""):void 0,...r,resolveRoute:async o=>await m(this,p,ri).call(this,o)});C(this,p);N(this,"location",R({resolver:this}));N(this,"ready",Promise.resolve(this.location));C(this,De,new WeakSet);C(this,ue,new WeakSet);C(this,Ce,m(this,p,ot).bind(this));C(this,ie,0);C(this,W);N(this,"__previousContext");C(this,re);C(this,H,null);C(this,L,null);Tt(Object.values(Lr)),this.setOutlet(t),this.subscribe()}setOutlet(t){t&&m(this,p,nt).call(this,t),S(this,W,t)}getOutlet(){return g(this,W)}async setRoutes(t,r=!1){return this.__previousContext=void 0,S(this,re,void 0),Ot(t),super.setRoutes(t),r||m(this,p,ot).call(this),await this.ready}addRoutes(t){return Ot(t),super.addRoutes(t)}async render(t,r=!1){S(this,ie,g(this,ie)+1);const n=g(this,ie),a={...zt,...B(t)?{hash:"",search:"",pathname:t}:t,__renderId:n};return this.ready=m(this,p,ni).call(this,a,r),await this.ready}subscribe(){window.addEventListener("vaadin-router-go",g(this,Ce))}unsubscribe(){window.removeEventListener("vaadin-router-go",g(this,Ce))}static setTriggers(...t){Tt(t)}urlForName(t,r){return g(this,re)||S(this,re,pr(this,{cacheKeyProvider(n){return"component"in n&&typeof n.component=="string"?n.component:void 0}})),Le(g(this,re).call(this,t,r??void 0),this)}urlForPath(t,r){return Le(Vt(t)(r??void 0),this)}static go(t){const{pathname:r,search:n,hash:a}=B(t)?new URL(t,"http://a"):t;return Ae("go",{pathname:r,search:n,hash:a})}}De=new WeakMap,ue=new WeakMap,Ce=new WeakMap,ie=new WeakMap,W=new WeakMap,re=new WeakMap,H=new WeakMap,L=new WeakMap,p=new WeakSet,ri=async function(t){const{route:r}=t;if(Oe(r.children)){let a=await r.children(Ar(t));Oe(r.children)||({children:a}=r),kr(a,r)}const n={component:a=>{const o=document.createElement(a);return g(this,ue).add(o),o},prevent:$e,redirect:a=>Dt(t,a)};return await Promise.resolve().then(async()=>{if(m(this,p,j).call(this,t))return await Te(r.action,r,t,n)}).then(a=>{if(a!=null&&(typeof a=="object"||typeof a=="symbol")&&(a instanceof HTMLElement||a===ae||X(a)&&"redirect"in a))return a;if(B(r.redirect))return n.redirect(r.redirect)}).then(a=>{if(a!=null)return a;if(B(r.component))return n.component(r.component)})},ni=async function(t,r){var a;const{__renderId:n}=t;try{const o=await this.resolve(t),l=await m(this,p,ze).call(this,o);if(!m(this,p,j).call(this,l))return this.location;const s=this.__previousContext;if(l===s)return m(this,p,Ie).call(this,s,!0),this.location;if(this.location=R(l),r&&m(this,p,Ie).call(this,l,n===1),Ae("location-changed",{router:this,location:this.location}),l.__skipAttach)return m(this,p,at).call(this,l,s),this.__previousContext=l,this.location;m(this,p,si).call(this,l,s);const h=m(this,p,pi).call(this,l);if(m(this,p,hi).call(this,l),m(this,p,ci).call(this,l,s),await h,m(this,p,j).call(this,l))return m(this,p,li).call(this),this.__previousContext=l,this.location}catch(o){if(n===g(this,ie)){r&&m(this,p,Ie).call(this,this.context);for(const l of((a=g(this,W))==null?void 0:a.children)??[])l.remove();throw this.location=R(Object.assign(t,{resolver:this})),Ae("error",{router:this,error:o,...t}),o}}return this.location},ze=async function(t,r=t){const n=await m(this,p,Xe).call(this,r),o=n!==r?n:t,s=Le(ii(n.chain??[]),this)===n.pathname,h=async(d,u=d.route,v)=>{const b=await d.next(!1,u,v);return b===null||b===ae?s?d:u.parent!=null?await h(d,u.parent,b):b:b},c=await h(n);if(c==null||c===ae)throw Kt(o);return c!==n?await m(this,p,ze).call(this,o,c):await m(this,p,ai).call(this,n)},Xe=async function(t){const{result:r}=t;if(r instanceof HTMLElement)return Pr(t,r),t;if(r&&"redirect"in r){const n=await m(this,p,rt).call(this,r.redirect,t.__redirectCount,t.__renderId);return await m(this,p,Xe).call(this,n)}throw r instanceof Error?r:new Error(Y(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Or(r)}". Double check the action return value for the route.`))},ai=async function(t){return await m(this,p,oi).call(this,t).then(async r=>r===this.__previousContext||r===t?r:await m(this,p,ze).call(this,r))},oi=async function(t){const r=this.__previousContext??{},n=r.chain??[],a=t.chain??[];let o=Promise.resolve(void 0);const l=s=>Dt(t,s);if(t.__divergedChainIndex=0,t.__skipAttach=!1,n.length){for(let s=0;s<Math.min(n.length,a.length)&&!(n[s].route!==a[s].route||n[s].path!==a[s].path&&n[s].element!==a[s].element||!m(this,p,it).call(this,n[s].element,a[s].element));t.__divergedChainIndex++,s++);if(t.__skipAttach=a.length===n.length&&t.__divergedChainIndex===a.length&&m(this,p,it).call(this,t.result,r.result),t.__skipAttach){for(let s=a.length-1;s>=0;s--)o=m(this,p,et).call(this,o,t,{prevent:$e},n[s]);for(let s=0;s<a.length;s++)o=m(this,p,tt).call(this,o,t,{prevent:$e,redirect:l},a[s]),n[s].element.location=R(t,n[s].route)}else for(let s=n.length-1;s>=t.__divergedChainIndex;s--)o=m(this,p,et).call(this,o,t,{prevent:$e},n[s])}if(!t.__skipAttach)for(let s=0;s<a.length;s++)s<t.__divergedChainIndex?s<n.length&&n[s].element&&(n[s].element.location=R(t,n[s].route)):(o=m(this,p,tt).call(this,o,t,{prevent:$e,redirect:l},a[s]),a[s].element&&(a[s].element.location=R(t,a[s].route)));return await o.then(async s=>{if(s&&X(s)){if("cancel"in s&&this.__previousContext)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if("redirect"in s)return await m(this,p,rt).call(this,s.redirect,t.__redirectCount,t.__renderId)}return t})},et=async function(t,r,n,a){const o=R(r);let l=await t;if(m(this,p,j).call(this,r)&&(l=Ct("onBeforeLeave",a.element,o,n,this)(l)),!(X(l)&&"redirect"in l))return l},tt=async function(t,r,n,a){const o=R(r,a.route),l=await t;if(m(this,p,j).call(this,r))return Ct("onBeforeEnter",a.element,o,n,this)(l)},it=function(t,r){return t instanceof Element&&r instanceof Element?g(this,ue).has(t)&&g(this,ue).has(r)?t.localName===r.localName:t===r:!1},j=function(t){return t.__renderId===g(this,ie)},rt=async function(t,r=0,n=0){if(r>Tr)throw new Error(Y(`Too many redirects when rendering ${t.from}`));return await this.resolve({...zt,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:r+1,__renderId:n})},nt=function(t=g(this,W)){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(Y(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))},Ie=function({pathname:t,search:r="",hash:n=""},a){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==n){const o=a?"replaceState":"pushState";window.history[o](null,document.title,t+r+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}},at=function(t,r){var a;let n=g(this,W);for(let o=0;o<(t.__divergedChainIndex??0);o++){const l=(a=r==null?void 0:r.chain)==null?void 0:a[o].element;if(l)if(l.parentNode===n)t.chain[o].element=l,n=l;else break}return n},si=function(t,r){var o;m(this,p,nt).call(this),m(this,p,di).call(this);const n=m(this,p,at).call(this,t,r);S(this,H,[]),S(this,L,Array.from((n==null?void 0:n.children)??[]).filter(l=>g(this,De).has(l)&&l!==t.result));let a=n;for(let l=t.__divergedChainIndex??0;l<(((o=t.chain)==null?void 0:o.length)??0);l++){const s=t.chain[l].element;s&&(a==null||a.appendChild(s),g(this,De).add(s),a===n&&g(this,H).push(s),a=s)}},li=function(){if(g(this,L))for(const t of g(this,L))t.remove();S(this,L,null),S(this,H,null)},di=function(){if(g(this,L)&&g(this,H)){for(const t of g(this,H))t.remove();S(this,L,null),S(this,H,null)}},ci=function(t,r){var n;if(!(!(r!=null&&r.chain)||t.__divergedChainIndex==null))for(let a=r.chain.length-1;a>=t.__divergedChainIndex&&m(this,p,j).call(this,t);a--){const o=r.chain[a].element;if(o)try{const l=R(t);Te(o.onAfterLeave,o,l,{},this)}finally{if((n=g(this,L))!=null&&n.includes(o))for(const l of o.children)l.remove()}}},hi=function(t){if(!(!t.chain||t.__divergedChainIndex==null))for(let r=t.__divergedChainIndex;r<t.chain.length&&m(this,p,j).call(this,t);r++){const n=t.chain[r].element;if(n){const a=R(t,t.chain[r].route);Te(n.onAfterEnter,n,a,{},this)}}},pi=async function(t){var s,h;const r=(s=g(this,L))==null?void 0:s[0],n=(h=g(this,H))==null?void 0:h[0],a=[],{chain:o=[]}=t;let l;for(let c=o.length-1;c>=0;c--)if(o[c].route.animate){l=o[c].route.animate;break}if(r&&n&&l){const c=X(l)&&l.leave?l.leave:"leaving",d=X(l)&&l.enter?l.enter:"entering";a.push(kt(r,c)),a.push(kt(n,d))}return await Promise.all(a),t},ot=function(t){const{pathname:r,search:n,hash:a}=t instanceof CustomEvent?t.detail:window.location;B(this.__normalizePathname(r))&&(t!=null&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:n,hash:a},!0))};const Ir=document.getElementById("app"),Hr=new zr(Ir);Hr.setRoutes([{path:"/",component:"employee-app"},{path:"/add",component:"employee-app"},{path:"/edit/:id",component:"employee-app"}]);
