import{g as xr,r as g,j as a,C as fo,S as ho,u as ta,L as ra,a as p,s as ne,p as Le,T as po,h as na,b as Cn,c as bt,R as A,G as Dt,F as He,I as ia,d as oa,e as sa,B as aa,f as mo,i as la,H as ca,k as ua,l as Vt,m as qt,n as da,o as fa}from"./index-fJRsFnJK.js";import{M as ha,T as go,I as pa,a as ma,b as ga,B as xa,C as ya,c as va,d as Wr,e as ba,H as wa,N as Sa,f as Ta,g as Vr,h as xo,i as Ea,j as ja}from"./Header.styled-8pydLepP.js";import{i as _a}from"./hero-65lZR4-D.js";var yo={exports:{}},Ca="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Oa=Ca,$a=Oa;function vo(){}function bo(){}bo.resetWarningCache=vo;var Aa=function(){function e(n,i,o,s,l,c){if(c!==$a){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:bo,resetWarningCache:vo};return r.PropTypes=r,r};yo.exports=Aa();var Fa=yo.exports;const ft=xr(Fa);var wo={exports:{}},V={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X=typeof Symbol=="function"&&Symbol.for,On=X?Symbol.for("react.element"):60103,$n=X?Symbol.for("react.portal"):60106,yr=X?Symbol.for("react.fragment"):60107,vr=X?Symbol.for("react.strict_mode"):60108,br=X?Symbol.for("react.profiler"):60114,wr=X?Symbol.for("react.provider"):60109,Sr=X?Symbol.for("react.context"):60110,An=X?Symbol.for("react.async_mode"):60111,Tr=X?Symbol.for("react.concurrent_mode"):60111,Er=X?Symbol.for("react.forward_ref"):60112,jr=X?Symbol.for("react.suspense"):60113,Ra=X?Symbol.for("react.suspense_list"):60120,_r=X?Symbol.for("react.memo"):60115,Cr=X?Symbol.for("react.lazy"):60116,Ia=X?Symbol.for("react.block"):60121,Ma=X?Symbol.for("react.fundamental"):60117,Pa=X?Symbol.for("react.responder"):60118,ka=X?Symbol.for("react.scope"):60119;function se(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case On:switch(e=e.type,e){case An:case Tr:case yr:case br:case vr:case jr:return e;default:switch(e=e&&e.$$typeof,e){case Sr:case Er:case Cr:case _r:case wr:return e;default:return t}}case $n:return t}}}function So(e){return se(e)===Tr}V.AsyncMode=An;V.ConcurrentMode=Tr;V.ContextConsumer=Sr;V.ContextProvider=wr;V.Element=On;V.ForwardRef=Er;V.Fragment=yr;V.Lazy=Cr;V.Memo=_r;V.Portal=$n;V.Profiler=br;V.StrictMode=vr;V.Suspense=jr;V.isAsyncMode=function(e){return So(e)||se(e)===An};V.isConcurrentMode=So;V.isContextConsumer=function(e){return se(e)===Sr};V.isContextProvider=function(e){return se(e)===wr};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===On};V.isForwardRef=function(e){return se(e)===Er};V.isFragment=function(e){return se(e)===yr};V.isLazy=function(e){return se(e)===Cr};V.isMemo=function(e){return se(e)===_r};V.isPortal=function(e){return se(e)===$n};V.isProfiler=function(e){return se(e)===br};V.isStrictMode=function(e){return se(e)===vr};V.isSuspense=function(e){return se(e)===jr};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===yr||e===Tr||e===br||e===vr||e===jr||e===Ra||typeof e=="object"&&e!==null&&(e.$$typeof===Cr||e.$$typeof===_r||e.$$typeof===wr||e.$$typeof===Sr||e.$$typeof===Er||e.$$typeof===Ma||e.$$typeof===Pa||e.$$typeof===ka||e.$$typeof===Ia)};V.typeOf=se;wo.exports=V;var Da=wo.exports,Fn=Da,La={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Na={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},za={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},To={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rn={};Rn[Fn.ForwardRef]=za;Rn[Fn.Memo]=To;function ni(e){return Fn.isMemo(e)?To:Rn[e.$$typeof]||La}var Ba=Object.defineProperty,Ua=Object.getOwnPropertyNames,ii=Object.getOwnPropertySymbols,Ha=Object.getOwnPropertyDescriptor,Wa=Object.getPrototypeOf,oi=Object.prototype;function Eo(e,t,r){if(typeof t!="string"){if(oi){var n=Wa(t);n&&n!==oi&&Eo(e,n,r)}var i=Ua(t);ii&&(i=i.concat(ii(t)));for(var o=ni(e),s=ni(t),l=0;l<i.length;++l){var c=i[l];if(!Na[c]&&!(r&&r[c])&&!(s&&s[c])&&!(o&&o[c])){var u=Ha(t,c);try{Ba(e,c,u)}catch{}}}}return e}var Va=Eo;const qa=xr(Va);var ln=new Map,Gt=new WeakMap,si=0,Ga=void 0;function Ka(e){return e?(Gt.has(e)||(si+=1,Gt.set(e,si.toString())),Gt.get(e)):"0"}function Qa(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Ka(e.root):e[t]}`).toString()}function Ja(e){let t=Qa(e),r=ln.get(t);if(!r){const n=new Map;let i;const o=new IntersectionObserver(s=>{s.forEach(l=>{var c;const u=l.isIntersecting&&i.some(f=>l.intersectionRatio>=f);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(c=n.get(l.target))==null||c.forEach(f=>{f(u,l)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},ln.set(t,r)}return r}function Ya(e,t,r={},n=Ga){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const c=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:i,observer:o,elements:s}=Ja(r);let l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(s.delete(e),o.unobserve(e)),s.size===0&&(o.disconnect(),ln.delete(i))}}function ai({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:i,triggerOnce:o,skip:s,initialInView:l,fallbackInView:c,onChange:u}={}){var f;const[d,h]=g.useState(null),b=g.useRef(),[y,v]=g.useState({inView:!!l,entry:void 0});b.current=u,g.useEffect(()=>{if(s||!d)return;let D;return D=Ya(d,(L,U)=>{v({inView:L,entry:U}),b.current&&b.current(L,U),U.isIntersecting&&o&&D&&(D(),D=void 0)},{root:i,rootMargin:n,threshold:e,trackVisibility:r,delay:t},c),()=>{D&&D()}},[Array.isArray(e)?e.toString():e,d,i,n,o,s,r,c,t]);const w=(f=y.entry)==null?void 0:f.target,T=g.useRef();!d&&w&&!o&&!s&&T.current!==w&&(T.current=w,v({inView:!!l,entry:void 0}));const j=[h,y.inView,y.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}const Za={instagram:"#e1306c",youtube:"#ff0000",facebook:"#3b5998",discord:"#7289d9"};function Xa({toggleTheme:e,isDarkTheme:t}){const[r,n]=g.useState(!1),i=()=>{n(!r)};return a.jsxs(a.Fragment,{children:[a.jsxs(ha,{children:[a.jsx(go,{toggleTheme:e,isDarkTheme:t}),a.jsx(pa,{onClick:i,children:a.jsx(ma,{})})]}),a.jsx(ga,{$isOpen:r,children:a.jsxs(xa,{children:[a.jsx(ya,{onClick:i}),a.jsx("nav",{children:a.jsxs(va,{children:[a.jsx("li",{onClick:i,children:a.jsx(Wr,{href:"#gallery",children:"Gallery"})}),a.jsx("li",{onClick:i,children:a.jsx(Wr,{href:"#about",children:"About"})}),a.jsx("li",{onClick:i,children:a.jsx(Wr,{href:"#exercises",children:"Exercises"})})]})}),a.jsx(fo,{}),a.jsx(ba,{children:a.jsx(ho,{color:Za,onClick:i})})]})})]})}function el({toggleTheme:e,isDarkTheme:t}){const r=ta(),n=i=>{const o=i.replace("/",""),s=document.getElementById(o);s?s.scrollIntoView({behavior:"smooth"}):r(i)};return a.jsxs(wa,{children:[a.jsx(ra,{}),a.jsx("div",{children:a.jsxs(Sa,{children:[a.jsxs(Ta,{children:[a.jsx("li",{children:a.jsx(Vr,{href:"/gallery",onClick:i=>{i.preventDefault(),n("/gallery")},children:"gallery"})}),a.jsx("li",{children:a.jsx(Vr,{href:"/about",onClick:i=>{i.preventDefault(),n("/about")},children:"about"})}),a.jsx("li",{children:a.jsx(Vr,{href:"/exercises",onClick:i=>{i.preventDefault(),n("/exercises")},children:"exercises"})})]}),a.jsx(ho,{}),a.jsx(go,{toggleTheme:e,isDarkTheme:t})]})}),a.jsx(Xa,{toggleTheme:e,isDarkTheme:t})]})}function Ze(e){this._maxSize=e,this.clear()}Ze.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ze.prototype.get=function(e){return this._values[e]};Ze.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var tl=/[^.^\]^[]+|(?=\[\]|\.\.)/g,jo=/^\d+$/,rl=/^\d/,nl=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,il=/^\s*(['"]?)(.*?)(\1)\s*$/,In=512,li=new Ze(In),ci=new Ze(In),ui=new Ze(In),Qe={Cache:Ze,split:cn,normalizePath:qr,setter:function(e){var t=qr(e);return ci.get(e)||ci.set(e,function(n,i){for(var o=0,s=t.length,l=n;o<s-1;){var c=t[o];if(c==="__proto__"||c==="constructor"||c==="prototype")return n;l=l[t[o++]]}l[t[o]]=i})},getter:function(e,t){var r=qr(e);return ui.get(e)||ui.set(e,function(i){for(var o=0,s=r.length;o<s;)if(i!=null||!t)i=i[r[o++]];else return;return i})},join:function(e){return e.reduce(function(t,r){return t+(Mn(r)||jo.test(r)?"["+r+"]":(t?".":"")+r)},"")},forEach:function(e,t,r){ol(Array.isArray(e)?e:cn(e),t,r)}};function qr(e){return li.get(e)||li.set(e,cn(e).map(function(t){return t.replace(il,"$2")}))}function cn(e){return e.match(tl)||[""]}function ol(e,t,r){var n=e.length,i,o,s,l;for(o=0;o<n;o++)i=e[o],i&&(ll(i)&&(i='"'+i+'"'),l=Mn(i),s=!l&&/^\d+$/.test(i),t.call(r,i,l,s,o,e))}function Mn(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function sl(e){return e.match(rl)&&!e.match(jo)}function al(e){return nl.test(e)}function ll(e){return!Mn(e)&&(sl(e)||al(e))}const cl=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Or=e=>e.match(cl)||[],$r=e=>e[0].toUpperCase()+e.slice(1),Pn=(e,t)=>Or(e).join(t).toLowerCase(),_o=e=>Or(e).reduce((t,r)=>`${t}${t?r[0].toUpperCase()+r.slice(1).toLowerCase():r.toLowerCase()}`,""),ul=e=>$r(_o(e)),dl=e=>Pn(e,"_"),fl=e=>Pn(e,"-"),hl=e=>$r(Pn(e," ")),pl=e=>Or(e).map($r).join(" ");var Gr={words:Or,upperFirst:$r,camelCase:_o,pascalCase:ul,snakeCase:dl,kebabCase:fl,sentenceCase:hl,titleCase:pl},kn={exports:{}};kn.exports=function(e){return Co(ml(e),e)};kn.exports.array=Co;function Co(e,t){var r=e.length,n=new Array(r),i={},o=r,s=gl(t),l=xl(e);for(t.forEach(function(u){if(!l.has(u[0])||!l.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||c(e[o],o,new Set);return n;function c(u,f,d){if(d.has(u)){var h;try{h=", node was:"+JSON.stringify(u)}catch{h=""}throw new Error("Cyclic dependency"+h)}if(!l.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[f]){i[f]=!0;var b=s.get(u)||new Set;if(b=Array.from(b),f=b.length){d.add(u);do{var y=b[--f];c(y,l.get(y),d)}while(f);d.delete(u)}n[--r]=u}}}function ml(e){for(var t=new Set,r=0,n=e.length;r<n;r++){var i=e[r];t.add(i[0]),t.add(i[1])}return Array.from(t)}function gl(e){for(var t=new Map,r=0,n=e.length;r<n;r++){var i=e[r];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function xl(e){for(var t=new Map,r=0,n=e.length;r<n;r++)t.set(e[r],r);return t}var yl=kn.exports;const vl=xr(yl),bl=Object.prototype.toString,wl=Error.prototype.toString,Sl=RegExp.prototype.toString,Tl=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",El=/^Symbol\((.*)\)(.*)$/;function jl(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function di(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const r=typeof e;if(r==="number")return jl(e);if(r==="string")return t?`"${e}"`:e;if(r==="function")return"[Function "+(e.name||"anonymous")+"]";if(r==="symbol")return Tl.call(e).replace(El,"Symbol($1)");const n=bl.call(e).slice(8,-1);return n==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):n==="Error"||e instanceof Error?"["+wl.call(e)+"]":n==="RegExp"?Sl.call(e):null}function ke(e,t){let r=di(e,t);return r!==null?r:JSON.stringify(e,function(n,i){let o=di(this[n],t);return o!==null?o:i},2)}function Oo(e){return e==null?[]:[].concat(e)}let $o,_l=/\$\{\s*(\w+)\s*\}/g;$o=Symbol.toStringTag;class oe extends Error{static formatError(t,r){const n=r.label||r.path||"this";return n!==r.path&&(r=Object.assign({},r,{path:n})),typeof t=="string"?t.replace(_l,(i,o)=>ke(r[o])):typeof t=="function"?t(r):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,r,n,i,o){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[$o]="Error",this.name="ValidationError",this.value=r,this.path=n,this.type=i,this.errors=[],this.inner=[],Oo(t).forEach(s=>{if(oe.isError(s)){this.errors.push(...s.errors);const l=s.inner.length?s.inner:[s];this.inner.push(...l)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!o&&Error.captureStackTrace&&Error.captureStackTrace(this,oe)}}let ye={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:r,originalValue:n})=>{const i=n!=null&&n!==r?` (cast from the value \`${ke(n,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${ke(r,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${ke(r,!0)}\``+i}},me={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Cl={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},un={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},Ol={isValue:"${path} field must be ${value}"},dn={noUnknown:"${path} field has unspecified keys: ${unknown}"},$l={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Al={notType:e=>{const{path:t,value:r,spec:n}=e,i=n.types.length;if(Array.isArray(r)){if(r.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${ke(r,!0)}\``;if(r.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${ke(r,!0)}\``}return oe.formatError(ye.notType,e)}};Object.assign(Object.create(null),{mixed:ye,string:me,number:Cl,date:un,object:dn,array:$l,boolean:Ol,tuple:Al});const Dn=e=>e&&e.__isYupSchema__;class dr{static fromOptions(t,r){if(!r.then&&!r.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:i,otherwise:o}=r,s=typeof n=="function"?n:(...l)=>l.every(c=>c===n);return new dr(t,(l,c)=>{var u;let f=s(...l)?i:o;return(u=f==null?void 0:f(c))!=null?u:c})}constructor(t,r){this.fn=void 0,this.refs=t,this.refs=t,this.fn=r}resolve(t,r){let n=this.refs.map(o=>o.getValue(r==null?void 0:r.value,r==null?void 0:r.parent,r==null?void 0:r.context)),i=this.fn(n,t,r);if(i===void 0||i===t)return t;if(!Dn(i))throw new TypeError("conditions must return a schema object");return i.resolve(r)}}const Kt={context:"$",value:"."};class Xe{constructor(t,r={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Kt.context,this.isValue=this.key[0]===Kt.value,this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?Kt.context:this.isValue?Kt.value:"";this.path=this.key.slice(n.length),this.getter=this.path&&Qe.getter(this.path,!0),this.map=r.map}getValue(t,r,n){let i=this.isContext?n:this.isValue?t:r;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,r){return this.getValue(t,r==null?void 0:r.parent,r==null?void 0:r.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Xe.prototype.__isYupRef=!0;const Ke=e=>e==null;function ht(e){function t({value:r,path:n="",options:i,originalValue:o,schema:s},l,c){const{name:u,test:f,params:d,message:h,skipAbsent:b}=e;let{parent:y,context:v,abortEarly:w=s.spec.abortEarly,disableStackTrace:T=s.spec.disableStackTrace}=i;function j(M){return Xe.isRef(M)?M.getValue(r,y,v):M}function D(M={}){var de;const q=Object.assign({value:r,originalValue:o,label:s.spec.label,path:M.path||n,spec:s.spec},d,M.params);for(const ae of Object.keys(q))q[ae]=j(q[ae]);const J=new oe(oe.formatError(M.message||h,q),r,q.path,M.type||u,(de=M.disableStackTrace)!=null?de:T);return J.params=q,J}const L=w?l:c;let U={path:n,parent:y,type:u,from:i.from,createError:D,resolve:j,options:i,originalValue:o,schema:s};const F=M=>{oe.isError(M)?L(M):M?c(null):L(D())},R=M=>{oe.isError(M)?L(M):l(M)};if(b&&Ke(r))return F(!0);let $;try{var N;if($=f.call(U,r,U),typeof((N=$)==null?void 0:N.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${U.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve($).then(F,R)}}catch(M){R(M);return}F($)}return t.OPTIONS=e,t}function Fl(e,t,r,n=r){let i,o,s;return t?(Qe.forEach(t,(l,c,u)=>{let f=c?l.slice(1,l.length-1):l;e=e.resolve({context:n,parent:i,value:r});let d=e.type==="tuple",h=u?parseInt(f,10):0;if(e.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(r&&h>=r.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);i=r,r=r&&r[h],e=d?e.spec.types[h]:e.innerType}if(!u){if(!e.fields||!e.fields[f])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);i=r,r=r&&r[f],e=e.fields[f]}o=f,s=c?"["+l+"]":"."+l}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class fr extends Set{describe(){const t=[];for(const r of this.values())t.push(Xe.isRef(r)?r.describe():r);return t}resolveAll(t){let r=[];for(const n of this.values())r.push(t(n));return r}clone(){return new fr(this.values())}merge(t,r){const n=this.clone();return t.forEach(i=>n.add(i)),r.forEach(i=>n.delete(i)),n}}function gt(e,t=new Map){if(Dn(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let r;if(e instanceof Date)r=new Date(e.getTime()),t.set(e,r);else if(e instanceof RegExp)r=new RegExp(e),t.set(e,r);else if(Array.isArray(e)){r=new Array(e.length),t.set(e,r);for(let n=0;n<e.length;n++)r[n]=gt(e[n],t)}else if(e instanceof Map){r=new Map,t.set(e,r);for(const[n,i]of e.entries())r.set(n,gt(i,t))}else if(e instanceof Set){r=new Set,t.set(e,r);for(const n of e)r.add(gt(n,t))}else if(e instanceof Object){r={},t.set(e,r);for(const[n,i]of Object.entries(e))r[n]=gt(i,t)}else throw Error(`Unable to clone ${e}`);return r}class we{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new fr,this._blacklist=new fr,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(ye.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(r=>{r.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const r=Object.create(Object.getPrototypeOf(this));return r.type=this.type,r._typeCheck=this._typeCheck,r._whitelist=this._whitelist.clone(),r._blacklist=this._blacklist.clone(),r.internalTests=Object.assign({},this.internalTests),r.exclusiveTests=Object.assign({},this.exclusiveTests),r.deps=[...this.deps],r.conditions=[...this.conditions],r.tests=[...this.tests],r.transforms=[...this.transforms],r.spec=gt(Object.assign({},this.spec,t)),r}label(t){let r=this.clone();return r.spec.label=t,r}meta(...t){if(t.length===0)return this.spec.meta;let r=this.clone();return r.spec.meta=Object.assign(r.spec.meta||{},t[0]),r}withMutation(t){let r=this._mutate;this._mutate=!0;let n=t(this);return this._mutate=r,n}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let r=this,n=t.clone();const i=Object.assign({},r.spec,n.spec);return n.spec=i,n.internalTests=Object.assign({},r.internalTests,n.internalTests),n._whitelist=r._whitelist.merge(t._whitelist,t._blacklist),n._blacklist=r._blacklist.merge(t._blacklist,t._whitelist),n.tests=r.tests,n.exclusiveTests=r.exclusiveTests,n.withMutation(o=>{t.tests.forEach(s=>{o.test(s.OPTIONS)})}),n.transforms=[...r.transforms,...n.transforms],n}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let r=this;if(r.conditions.length){let n=r.conditions;r=r.clone(),r.conditions=[],r=n.reduce((i,o)=>o.resolve(i,t),r),r=r.resolve(t)}return r}resolveOptions(t){var r,n,i,o;return Object.assign({},t,{from:t.from||[],strict:(r=t.strict)!=null?r:this.spec.strict,abortEarly:(n=t.abortEarly)!=null?n:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(o=t.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(t,r={}){let n=this.resolve(Object.assign({value:t},r)),i=r.assert==="ignore-optionality",o=n._cast(t,r);if(r.assert!==!1&&!n.isType(o)){if(i&&Ke(o))return o;let s=ke(t),l=ke(o);throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${s} 
`+(l!==s?`result of cast: ${l}`:""))}return o}_cast(t,r){let n=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return n===void 0&&(n=this.getDefault(r)),n}_validate(t,r={},n,i){let{path:o,originalValue:s=t,strict:l=this.spec.strict}=r,c=t;l||(c=this._cast(c,Object.assign({assert:!1},r)));let u=[];for(let f of Object.values(this.internalTests))f&&u.push(f);this.runTests({path:o,value:c,originalValue:s,options:r,tests:u},n,f=>{if(f.length)return i(f,c);this.runTests({path:o,value:c,originalValue:s,options:r,tests:this.tests},n,i)})}runTests(t,r,n){let i=!1,{tests:o,value:s,originalValue:l,path:c,options:u}=t,f=v=>{i||(i=!0,r(v,s))},d=v=>{i||(i=!0,n(v,s))},h=o.length,b=[];if(!h)return d([]);let y={value:s,originalValue:l,path:c,options:u,schema:this};for(let v=0;v<o.length;v++){const w=o[v];w(y,f,function(j){j&&(Array.isArray(j)?b.push(...j):b.push(j)),--h<=0&&d(b)})}}asNestedTest({key:t,index:r,parent:n,parentPath:i,originalParent:o,options:s}){const l=t??r;if(l==null)throw TypeError("Must include `key` or `index` for nested validations");const c=typeof l=="number";let u=n[l];const f=Object.assign({},s,{strict:!0,parent:n,value:u,originalValue:o[l],key:void 0,[c?"index":"key"]:l,path:c||l.includes(".")?`${i||""}[${u?l:`"${l}"`}]`:(i?`${i}.`:"")+t});return(d,h,b)=>this.resolve(f)._validate(u,f,h,b)}validate(t,r){var n;let i=this.resolve(Object.assign({},r,{value:t})),o=(n=r==null?void 0:r.disableStackTrace)!=null?n:i.spec.disableStackTrace;return new Promise((s,l)=>i._validate(t,r,(c,u)=>{oe.isError(c)&&(c.value=u),l(c)},(c,u)=>{c.length?l(new oe(c,u,void 0,void 0,o)):s(u)}))}validateSync(t,r){var n;let i=this.resolve(Object.assign({},r,{value:t})),o,s=(n=r==null?void 0:r.disableStackTrace)!=null?n:i.spec.disableStackTrace;return i._validate(t,Object.assign({},r,{sync:!0}),(l,c)=>{throw oe.isError(l)&&(l.value=c),l},(l,c)=>{if(l.length)throw new oe(l,t,void 0,void 0,s);o=c}),o}isValid(t,r){return this.validate(t,r).then(()=>!0,n=>{if(oe.isError(n))return!1;throw n})}isValidSync(t,r){try{return this.validateSync(t,r),!0}catch(n){if(oe.isError(n))return!1;throw n}}_getDefault(t){let r=this.spec.default;return r==null?r:typeof r=="function"?r.call(this,t):gt(r)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,r){const n=this.clone({nullable:t});return n.internalTests.nullable=ht({message:r,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),n}optionality(t,r){const n=this.clone({optional:t});return n.internalTests.optionality=ht({message:r,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),n}optional(){return this.optionality(!0)}defined(t=ye.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=ye.notNull){return this.nullability(!1,t)}required(t=ye.required){return this.clone().withMutation(r=>r.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let r=this.clone();return r.transforms.push(t),r}test(...t){let r;if(t.length===1?typeof t[0]=="function"?r={test:t[0]}:r=t[0]:t.length===2?r={name:t[0],test:t[1]}:r={name:t[0],message:t[1],test:t[2]},r.message===void 0&&(r.message=ye.default),typeof r.test!="function")throw new TypeError("`test` is a required parameters");let n=this.clone(),i=ht(r),o=r.exclusive||r.name&&n.exclusiveTests[r.name]===!0;if(r.exclusive&&!r.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return r.name&&(n.exclusiveTests[r.name]=!!r.exclusive),n.tests=n.tests.filter(s=>!(s.OPTIONS.name===r.name&&(o||s.OPTIONS.test===i.OPTIONS.test))),n.tests.push(i),n}when(t,r){!Array.isArray(t)&&typeof t!="string"&&(r=t,t=".");let n=this.clone(),i=Oo(t).map(o=>new Xe(o));return i.forEach(o=>{o.isSibling&&n.deps.push(o.key)}),n.conditions.push(typeof r=="function"?new dr(i,r):dr.fromOptions(i,r)),n}typeError(t){let r=this.clone();return r.internalTests.typeError=ht({message:t,name:"typeError",skipAbsent:!0,test(n){return this.schema._typeCheck(n)?!0:this.createError({params:{type:this.schema.type}})}}),r}oneOf(t,r=ye.oneOf){let n=this.clone();return t.forEach(i=>{n._whitelist.add(i),n._blacklist.delete(i)}),n.internalTests.whiteList=ht({message:r,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,s=o.resolveAll(this.resolve);return s.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:s}})}}),n}notOneOf(t,r=ye.notOneOf){let n=this.clone();return t.forEach(i=>{n._blacklist.add(i),n._whitelist.delete(i)}),n.internalTests.blacklist=ht({message:r,name:"notOneOf",test(i){let o=this.schema._blacklist,s=o.resolveAll(this.resolve);return s.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:s}}):!0}}),n}strip(t=!0){let r=this.clone();return r.spec.strip=t,r}describe(t){const r=(t?this.resolve(t):this).clone(),{label:n,meta:i,optional:o,nullable:s}=r.spec;return{meta:i,label:n,optional:o,nullable:s,default:r.getDefault(t),type:r.type,oneOf:r._whitelist.describe(),notOneOf:r._blacklist.describe(),tests:r.tests.map(c=>({name:c.OPTIONS.name,params:c.OPTIONS.params})).filter((c,u,f)=>f.findIndex(d=>d.name===c.name)===u)}}}we.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])we.prototype[`${e}At`]=function(t,r,n={}){const{parent:i,parentPath:o,schema:s}=Fl(this,t,r,n.context);return s[e](i&&i[o],Object.assign({},n,{parent:i,path:t}))};for(const e of["equals","is"])we.prototype[e]=we.prototype.oneOf;for(const e of["not","nope"])we.prototype[e]=we.prototype.notOneOf;let Rl=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Il=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Ml=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Pl=e=>Ke(e)||e===e.trim(),kl={}.toString();function fn(){return new Ao}class Ao extends we{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,r,n)=>{if(!n.spec.coerce||n.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===kl?t:i})})}required(t){return super.required(t).withMutation(r=>r.test({message:t||ye.required,name:"required",skipAbsent:!0,test:n=>!!n.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(r=>r.OPTIONS.name!=="required"),t))}length(t,r=me.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(n){return n.length===this.resolve(t)}})}min(t,r=me.min){return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(n){return n.length>=this.resolve(t)}})}max(t,r=me.max){return this.test({name:"max",exclusive:!0,message:r,params:{max:t},skipAbsent:!0,test(n){return n.length<=this.resolve(t)}})}matches(t,r){let n=!1,i,o;return r&&(typeof r=="object"?{excludeEmptyString:n=!1,message:i,name:o}=r:i=r),this.test({name:o||"matches",message:i||me.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&n||s.search(t)!==-1})}email(t=me.email){return this.matches(Rl,{name:"email",message:t,excludeEmptyString:!0})}url(t=me.url){return this.matches(Il,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=me.uuid){return this.matches(Ml,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=me.trim){return this.transform(r=>r!=null?r.trim():r).test({message:t,name:"trim",test:Pl})}lowercase(t=me.lowercase){return this.transform(r=>Ke(r)?r:r.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>Ke(r)||r===r.toLowerCase()})}uppercase(t=me.uppercase){return this.transform(r=>Ke(r)?r:r.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>Ke(r)||r===r.toUpperCase()})}}fn.prototype=Ao.prototype;const Dl=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function $e(e,t=0){return Number(e)||t}function Ll(e){const t=Dl.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const r={year:$e(t[1]),month:$e(t[2],1)-1,day:$e(t[3],1),hour:$e(t[4]),minute:$e(t[5]),second:$e(t[6]),millisecond:t[7]?$e(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:$e(t[10]),minuteOffset:$e(t[11])};if(r.z===void 0&&r.plusMinus===void 0)return new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond).valueOf();let n=0;return r.z!=="Z"&&r.plusMinus!==void 0&&(n=r.hourOffset*60+r.minuteOffset,r.plusMinus==="+"&&(n=0-n)),Date.UTC(r.year,r.month,r.day,r.hour,r.minute+n,r.second,r.millisecond)}let Nl=new Date(""),zl=e=>Object.prototype.toString.call(e)==="[object Date]";class Ar extends we{constructor(){super({type:"date",check(t){return zl(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,r,n)=>!n.spec.coerce||n.isType(t)||t===null?t:(t=Ll(t),isNaN(t)?Ar.INVALID_DATE:new Date(t)))})}prepareParam(t,r){let n;if(Xe.isRef(t))n=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);n=i}return n}min(t,r=un.min){let n=this.prepareParam(t,"min");return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(n)}})}max(t,r=un.max){let n=this.prepareParam(t,"max");return this.test({message:r,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(n)}})}}Ar.INVALID_DATE=Nl;Ar.prototype;function Bl(e,t=[]){let r=[],n=new Set,i=new Set(t.map(([s,l])=>`${s}-${l}`));function o(s,l){let c=Qe.split(s)[0];n.add(c),i.has(`${l}-${c}`)||r.push([l,c])}for(const s of Object.keys(e)){let l=e[s];n.add(s),Xe.isRef(l)&&l.isSibling?o(l.path,s):Dn(l)&&"deps"in l&&l.deps.forEach(c=>o(c,s))}return vl.array(Array.from(n),r).reverse()}function fi(e,t){let r=1/0;return e.some((n,i)=>{var o;if((o=t.path)!=null&&o.includes(n))return r=i,!0}),r}function Fo(e){return(t,r)=>fi(e,t)-fi(e,r)}const Ul=(e,t,r)=>{if(typeof e!="string")return e;let n=e;try{n=JSON.parse(e)}catch{}return r.isType(n)?n:e};function ar(e){if("fields"in e){const t={};for(const[r,n]of Object.entries(e.fields))t[r]=ar(n);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=ar(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(ar)}):"optional"in e?e.optional():e}const Hl=(e,t)=>{const r=[...Qe.normalizePath(t)];if(r.length===1)return r[0]in e;let n=r.pop(),i=Qe.getter(Qe.join(r),!0)(e);return!!(i&&n in i)};let hi=e=>Object.prototype.toString.call(e)==="[object Object]";function Wl(e,t){let r=Object.keys(e.fields);return Object.keys(t).filter(n=>r.indexOf(n)===-1)}const Vl=Fo([]);function Ro(e){return new Io(e)}class Io extends we{constructor(t){super({type:"object",check(r){return hi(r)||typeof r=="function"}}),this.fields=Object.create(null),this._sortErrors=Vl,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,r={}){var n;let i=super._cast(t,r);if(i===void 0)return this.getDefault(r);if(!this._typeCheck(i))return i;let o=this.fields,s=(n=r.stripUnknown)!=null?n:this.spec.noUnknown,l=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),c={},u=Object.assign({},r,{parent:c,__validating:r.__validating||!1}),f=!1;for(const d of l){let h=o[d],b=d in i;if(h){let y,v=i[d];u.path=(r.path?`${r.path}.`:"")+d,h=h.resolve({value:v,context:r.context,parent:c});let w=h instanceof we?h.spec:void 0,T=w==null?void 0:w.strict;if(w!=null&&w.strip){f=f||d in i;continue}y=!r.__validating||!T?h.cast(i[d],u):i[d],y!==void 0&&(c[d]=y)}else b&&!s&&(c[d]=i[d]);(b!==d in c||c[d]!==i[d])&&(f=!0)}return f?c:i}_validate(t,r={},n,i){let{from:o=[],originalValue:s=t,recursive:l=this.spec.recursive}=r;r.from=[{schema:this,value:s},...o],r.__validating=!0,r.originalValue=s,super._validate(t,r,n,(c,u)=>{if(!l||!hi(u)){i(c,u);return}s=s||u;let f=[];for(let d of this._nodes){let h=this.fields[d];!h||Xe.isRef(h)||f.push(h.asNestedTest({options:r,key:d,parent:u,parentPath:r.path,originalParent:s}))}this.runTests({tests:f,value:u,originalValue:s,options:r},n,d=>{i(d.sort(this._sortErrors).concat(c),u)})})}clone(t){const r=super.clone(t);return r.fields=Object.assign({},this.fields),r._nodes=this._nodes,r._excludedEdges=this._excludedEdges,r._sortErrors=this._sortErrors,r}concat(t){let r=super.concat(t),n=r.fields;for(let[i,o]of Object.entries(this.fields)){const s=n[i];n[i]=s===void 0?o:s}return r.withMutation(i=>i.setFields(n,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let r={};return this._nodes.forEach(n=>{var i;const o=this.fields[n];let s=t;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[n]})),r[n]=o&&"getDefault"in o?o.getDefault(s):void 0}),r}setFields(t,r){let n=this.clone();return n.fields=t,n._nodes=Bl(t,r),n._sortErrors=Fo(Object.keys(t)),r&&(n._excludedEdges=r),n}shape(t,r=[]){return this.clone().withMutation(n=>{let i=n._excludedEdges;return r.length&&(Array.isArray(r[0])||(r=[r]),i=[...n._excludedEdges,...r]),n.setFields(Object.assign(n.fields,t),i)})}partial(){const t={};for(const[r,n]of Object.entries(this.fields))t[r]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(t)}deepPartial(){return ar(this)}pick(t){const r={};for(const n of t)this.fields[n]&&(r[n]=this.fields[n]);return this.setFields(r,this._excludedEdges.filter(([n,i])=>t.includes(n)&&t.includes(i)))}omit(t){const r=[];for(const n of Object.keys(this.fields))t.includes(n)||r.push(n);return this.pick(r)}from(t,r,n){let i=Qe.getter(t,!0);return this.transform(o=>{if(!o)return o;let s=o;return Hl(o,t)&&(s=Object.assign({},o),n||delete s[t],s[r]=i(o)),s})}json(){return this.transform(Ul)}noUnknown(t=!0,r=dn.noUnknown){typeof t!="boolean"&&(r=t,t=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:r,test(i){if(i==null)return!0;const o=Wl(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return n.spec.noUnknown=t,n}unknown(t=!0,r=dn.noUnknown){return this.noUnknown(!t,r)}transformKeys(t){return this.transform(r=>{if(!r)return r;const n={};for(const i of Object.keys(r))n[t(i)]=r[i];return n})}camelCase(){return this.transformKeys(Gr.camelCase)}snakeCase(){return this.transformKeys(Gr.snakeCase)}constantCase(){return this.transformKeys(t=>Gr.snakeCase(t).toUpperCase())}describe(t){const r=(t?this.resolve(t):this).clone(),n=super.describe(t);n.fields={};for(const[o,s]of Object.entries(r.fields)){var i;let l=t;(i=l)!=null&&i.value&&(l=Object.assign({},l,{parent:l.value,value:l.value[o]})),n.fields[o]=s.describe(l)}return n}}Ro.prototype=Io.prototype;var ql=function(t){return Gl(t)&&!Kl(t)};function Gl(e){return!!e&&typeof e=="object"}function Kl(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Yl(e)}var Ql=typeof Symbol=="function"&&Symbol.for,Jl=Ql?Symbol.for("react.element"):60103;function Yl(e){return e.$$typeof===Jl}function Zl(e){return Array.isArray(e)?[]:{}}function hr(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Rt(Zl(e),e,t):e}function Xl(e,t,r){return e.concat(t).map(function(n){return hr(n,r)})}function ec(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=hr(e[i],r)}),Object.keys(t).forEach(function(i){!r.isMergeableObject(t[i])||!e[i]?n[i]=hr(t[i],r):n[i]=Rt(e[i],t[i],r)}),n}function Rt(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Xl,r.isMergeableObject=r.isMergeableObject||ql;var n=Array.isArray(t),i=Array.isArray(e),o=n===i;return o?n?r.arrayMerge(e,t,r):ec(e,t,r):hr(t,r)}Rt.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,i){return Rt(n,i,r)},{})};var hn=Rt,Mo=typeof global=="object"&&global&&global.Object===Object&&global,tc=typeof self=="object"&&self&&self.Object===Object&&self,Te=Mo||tc||Function("return this")(),De=Te.Symbol,Po=Object.prototype,rc=Po.hasOwnProperty,nc=Po.toString,Et=De?De.toStringTag:void 0;function ic(e){var t=rc.call(e,Et),r=e[Et];try{e[Et]=void 0;var n=!0}catch{}var i=nc.call(e);return n&&(t?e[Et]=r:delete e[Et]),i}var oc=Object.prototype,sc=oc.toString;function ac(e){return sc.call(e)}var lc="[object Null]",cc="[object Undefined]",pi=De?De.toStringTag:void 0;function et(e){return e==null?e===void 0?cc:lc:pi&&pi in Object(e)?ic(e):ac(e)}function ko(e,t){return function(r){return e(t(r))}}var Ln=ko(Object.getPrototypeOf,Object);function tt(e){return e!=null&&typeof e=="object"}var uc="[object Object]",dc=Function.prototype,fc=Object.prototype,Do=dc.toString,hc=fc.hasOwnProperty,pc=Do.call(Object);function mi(e){if(!tt(e)||et(e)!=uc)return!1;var t=Ln(e);if(t===null)return!0;var r=hc.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Do.call(r)==pc}var gi=Array.isArray,xi=Object.keys,mc=Object.prototype.hasOwnProperty,gc=typeof Element<"u";function pn(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=gi(e),n=gi(t),i,o,s;if(r&&n){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!pn(e[i],t[i]))return!1;return!0}if(r!=n)return!1;var l=e instanceof Date,c=t instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==t.getTime();var u=e instanceof RegExp,f=t instanceof RegExp;if(u!=f)return!1;if(u&&f)return e.toString()==t.toString();var d=xi(e);if(o=d.length,o!==xi(t).length)return!1;for(i=o;i--!==0;)if(!mc.call(t,d[i]))return!1;if(gc&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(s=d[i],!(s==="_owner"&&e.$$typeof)&&!pn(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}var xc=function(t,r){try{return pn(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const Me=xr(xc);function yc(){this.__data__=[],this.size=0}function Lo(e,t){return e===t||e!==e&&t!==t}function Fr(e,t){for(var r=e.length;r--;)if(Lo(e[r][0],t))return r;return-1}var vc=Array.prototype,bc=vc.splice;function wc(e){var t=this.__data__,r=Fr(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():bc.call(t,r,1),--this.size,!0}function Sc(e){var t=this.__data__,r=Fr(t,e);return r<0?void 0:t[r][1]}function Tc(e){return Fr(this.__data__,e)>-1}function Ec(e,t){var r=this.__data__,n=Fr(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function Fe(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Fe.prototype.clear=yc;Fe.prototype.delete=wc;Fe.prototype.get=Sc;Fe.prototype.has=Tc;Fe.prototype.set=Ec;function jc(){this.__data__=new Fe,this.size=0}function _c(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Cc(e){return this.__data__.get(e)}function Oc(e){return this.__data__.has(e)}function Lt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var $c="[object AsyncFunction]",Ac="[object Function]",Fc="[object GeneratorFunction]",Rc="[object Proxy]";function No(e){if(!Lt(e))return!1;var t=et(e);return t==Ac||t==Fc||t==$c||t==Rc}var Kr=Te["__core-js_shared__"],yi=function(){var e=/[^.]+$/.exec(Kr&&Kr.keys&&Kr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ic(e){return!!yi&&yi in e}var Mc=Function.prototype,Pc=Mc.toString;function rt(e){if(e!=null){try{return Pc.call(e)}catch{}try{return e+""}catch{}}return""}var kc=/[\\^$.*+?()[\]{}|]/g,Dc=/^\[object .+?Constructor\]$/,Lc=Function.prototype,Nc=Object.prototype,zc=Lc.toString,Bc=Nc.hasOwnProperty,Uc=RegExp("^"+zc.call(Bc).replace(kc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Hc(e){if(!Lt(e)||Ic(e))return!1;var t=No(e)?Uc:Dc;return t.test(rt(e))}function Wc(e,t){return e==null?void 0:e[t]}function nt(e,t){var r=Wc(e,t);return Hc(r)?r:void 0}var It=nt(Te,"Map"),Mt=nt(Object,"create");function Vc(){this.__data__=Mt?Mt(null):{},this.size=0}function qc(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Gc="__lodash_hash_undefined__",Kc=Object.prototype,Qc=Kc.hasOwnProperty;function Jc(e){var t=this.__data__;if(Mt){var r=t[e];return r===Gc?void 0:r}return Qc.call(t,e)?t[e]:void 0}var Yc=Object.prototype,Zc=Yc.hasOwnProperty;function Xc(e){var t=this.__data__;return Mt?t[e]!==void 0:Zc.call(t,e)}var eu="__lodash_hash_undefined__";function tu(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Mt&&t===void 0?eu:t,this}function Je(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Je.prototype.clear=Vc;Je.prototype.delete=qc;Je.prototype.get=Jc;Je.prototype.has=Xc;Je.prototype.set=tu;function ru(){this.size=0,this.__data__={hash:new Je,map:new(It||Fe),string:new Je}}function nu(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Rr(e,t){var r=e.__data__;return nu(t)?r[typeof t=="string"?"string":"hash"]:r.map}function iu(e){var t=Rr(this,e).delete(e);return this.size-=t?1:0,t}function ou(e){return Rr(this,e).get(e)}function su(e){return Rr(this,e).has(e)}function au(e,t){var r=Rr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function Ne(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ne.prototype.clear=ru;Ne.prototype.delete=iu;Ne.prototype.get=ou;Ne.prototype.has=su;Ne.prototype.set=au;var lu=200;function cu(e,t){var r=this.__data__;if(r instanceof Fe){var n=r.__data__;if(!It||n.length<lu-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ne(n)}return r.set(e,t),this.size=r.size,this}function wt(e){var t=this.__data__=new Fe(e);this.size=t.size}wt.prototype.clear=jc;wt.prototype.delete=_c;wt.prototype.get=Cc;wt.prototype.has=Oc;wt.prototype.set=cu;function uu(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var vi=function(){try{var e=nt(Object,"defineProperty");return e({},"",{}),e}catch{}}();function zo(e,t,r){t=="__proto__"&&vi?vi(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var du=Object.prototype,fu=du.hasOwnProperty;function Bo(e,t,r){var n=e[t];(!(fu.call(e,t)&&Lo(n,r))||r===void 0&&!(t in e))&&zo(e,t,r)}function Ir(e,t,r,n){var i=!r;r||(r={});for(var o=-1,s=t.length;++o<s;){var l=t[o],c=n?n(r[l],e[l],l,r,e):void 0;c===void 0&&(c=e[l]),i?zo(r,l,c):Bo(r,l,c)}return r}function hu(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var pu="[object Arguments]";function bi(e){return tt(e)&&et(e)==pu}var Uo=Object.prototype,mu=Uo.hasOwnProperty,gu=Uo.propertyIsEnumerable,xu=bi(function(){return arguments}())?bi:function(e){return tt(e)&&mu.call(e,"callee")&&!gu.call(e,"callee")},Nt=Array.isArray;function yu(){return!1}var Ho=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wi=Ho&&typeof module=="object"&&module&&!module.nodeType&&module,vu=wi&&wi.exports===Ho,Si=vu?Te.Buffer:void 0,bu=Si?Si.isBuffer:void 0,Wo=bu||yu,wu=9007199254740991,Su=/^(?:0|[1-9]\d*)$/;function Tu(e,t){var r=typeof e;return t=t??wu,!!t&&(r=="number"||r!="symbol"&&Su.test(e))&&e>-1&&e%1==0&&e<t}var Eu=9007199254740991;function Vo(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Eu}var ju="[object Arguments]",_u="[object Array]",Cu="[object Boolean]",Ou="[object Date]",$u="[object Error]",Au="[object Function]",Fu="[object Map]",Ru="[object Number]",Iu="[object Object]",Mu="[object RegExp]",Pu="[object Set]",ku="[object String]",Du="[object WeakMap]",Lu="[object ArrayBuffer]",Nu="[object DataView]",zu="[object Float32Array]",Bu="[object Float64Array]",Uu="[object Int8Array]",Hu="[object Int16Array]",Wu="[object Int32Array]",Vu="[object Uint8Array]",qu="[object Uint8ClampedArray]",Gu="[object Uint16Array]",Ku="[object Uint32Array]",K={};K[zu]=K[Bu]=K[Uu]=K[Hu]=K[Wu]=K[Vu]=K[qu]=K[Gu]=K[Ku]=!0;K[ju]=K[_u]=K[Lu]=K[Cu]=K[Nu]=K[Ou]=K[$u]=K[Au]=K[Fu]=K[Ru]=K[Iu]=K[Mu]=K[Pu]=K[ku]=K[Du]=!1;function Qu(e){return tt(e)&&Vo(e.length)&&!!K[et(e)]}function Nn(e){return function(t){return e(t)}}var qo=typeof exports=="object"&&exports&&!exports.nodeType&&exports,At=qo&&typeof module=="object"&&module&&!module.nodeType&&module,Ju=At&&At.exports===qo,Qr=Ju&&Mo.process,xt=function(){try{var e=At&&At.require&&At.require("util").types;return e||Qr&&Qr.binding&&Qr.binding("util")}catch{}}(),Ti=xt&&xt.isTypedArray,Yu=Ti?Nn(Ti):Qu,Zu=Object.prototype,Xu=Zu.hasOwnProperty;function Go(e,t){var r=Nt(e),n=!r&&xu(e),i=!r&&!n&&Wo(e),o=!r&&!n&&!i&&Yu(e),s=r||n||i||o,l=s?hu(e.length,String):[],c=l.length;for(var u in e)(t||Xu.call(e,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Tu(u,c)))&&l.push(u);return l}var ed=Object.prototype;function zn(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||ed;return e===r}var td=ko(Object.keys,Object),rd=Object.prototype,nd=rd.hasOwnProperty;function id(e){if(!zn(e))return td(e);var t=[];for(var r in Object(e))nd.call(e,r)&&r!="constructor"&&t.push(r);return t}function Ko(e){return e!=null&&Vo(e.length)&&!No(e)}function Bn(e){return Ko(e)?Go(e):id(e)}function od(e,t){return e&&Ir(t,Bn(t),e)}function sd(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var ad=Object.prototype,ld=ad.hasOwnProperty;function cd(e){if(!Lt(e))return sd(e);var t=zn(e),r=[];for(var n in e)n=="constructor"&&(t||!ld.call(e,n))||r.push(n);return r}function Un(e){return Ko(e)?Go(e,!0):cd(e)}function ud(e,t){return e&&Ir(t,Un(t),e)}var Qo=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ei=Qo&&typeof module=="object"&&module&&!module.nodeType&&module,dd=Ei&&Ei.exports===Qo,ji=dd?Te.Buffer:void 0,_i=ji?ji.allocUnsafe:void 0;function fd(e,t){if(t)return e.slice();var r=e.length,n=_i?_i(r):new e.constructor(r);return e.copy(n),n}function Jo(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function hd(e,t){for(var r=-1,n=e==null?0:e.length,i=0,o=[];++r<n;){var s=e[r];t(s,r,e)&&(o[i++]=s)}return o}function Yo(){return[]}var pd=Object.prototype,md=pd.propertyIsEnumerable,Ci=Object.getOwnPropertySymbols,Hn=Ci?function(e){return e==null?[]:(e=Object(e),hd(Ci(e),function(t){return md.call(e,t)}))}:Yo;function gd(e,t){return Ir(e,Hn(e),t)}function Zo(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var xd=Object.getOwnPropertySymbols,Xo=xd?function(e){for(var t=[];e;)Zo(t,Hn(e)),e=Ln(e);return t}:Yo;function yd(e,t){return Ir(e,Xo(e),t)}function es(e,t,r){var n=t(e);return Nt(e)?n:Zo(n,r(e))}function vd(e){return es(e,Bn,Hn)}function bd(e){return es(e,Un,Xo)}var mn=nt(Te,"DataView"),gn=nt(Te,"Promise"),xn=nt(Te,"Set"),yn=nt(Te,"WeakMap"),Oi="[object Map]",wd="[object Object]",$i="[object Promise]",Ai="[object Set]",Fi="[object WeakMap]",Ri="[object DataView]",Sd=rt(mn),Td=rt(It),Ed=rt(gn),jd=rt(xn),_d=rt(yn),Ge=et;(mn&&Ge(new mn(new ArrayBuffer(1)))!=Ri||It&&Ge(new It)!=Oi||gn&&Ge(gn.resolve())!=$i||xn&&Ge(new xn)!=Ai||yn&&Ge(new yn)!=Fi)&&(Ge=function(e){var t=et(e),r=t==wd?e.constructor:void 0,n=r?rt(r):"";if(n)switch(n){case Sd:return Ri;case Td:return Oi;case Ed:return $i;case jd:return Ai;case _d:return Fi}return t});const Wn=Ge;var Cd=Object.prototype,Od=Cd.hasOwnProperty;function $d(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&Od.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Ii=Te.Uint8Array;function Vn(e){var t=new e.constructor(e.byteLength);return new Ii(t).set(new Ii(e)),t}function Ad(e,t){var r=t?Vn(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Fd=/\w*$/;function Rd(e){var t=new e.constructor(e.source,Fd.exec(e));return t.lastIndex=e.lastIndex,t}var Mi=De?De.prototype:void 0,Pi=Mi?Mi.valueOf:void 0;function Id(e){return Pi?Object(Pi.call(e)):{}}function Md(e,t){var r=t?Vn(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Pd="[object Boolean]",kd="[object Date]",Dd="[object Map]",Ld="[object Number]",Nd="[object RegExp]",zd="[object Set]",Bd="[object String]",Ud="[object Symbol]",Hd="[object ArrayBuffer]",Wd="[object DataView]",Vd="[object Float32Array]",qd="[object Float64Array]",Gd="[object Int8Array]",Kd="[object Int16Array]",Qd="[object Int32Array]",Jd="[object Uint8Array]",Yd="[object Uint8ClampedArray]",Zd="[object Uint16Array]",Xd="[object Uint32Array]";function ef(e,t,r){var n=e.constructor;switch(t){case Hd:return Vn(e);case Pd:case kd:return new n(+e);case Wd:return Ad(e,r);case Vd:case qd:case Gd:case Kd:case Qd:case Jd:case Yd:case Zd:case Xd:return Md(e,r);case Dd:return new n;case Ld:case Bd:return new n(e);case Nd:return Rd(e);case zd:return new n;case Ud:return Id(e)}}var ki=Object.create,tf=function(){function e(){}return function(t){if(!Lt(t))return{};if(ki)return ki(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function rf(e){return typeof e.constructor=="function"&&!zn(e)?tf(Ln(e)):{}}var nf="[object Map]";function of(e){return tt(e)&&Wn(e)==nf}var Di=xt&&xt.isMap,sf=Di?Nn(Di):of,af="[object Set]";function lf(e){return tt(e)&&Wn(e)==af}var Li=xt&&xt.isSet,cf=Li?Nn(Li):lf,uf=1,df=2,ff=4,ts="[object Arguments]",hf="[object Array]",pf="[object Boolean]",mf="[object Date]",gf="[object Error]",rs="[object Function]",xf="[object GeneratorFunction]",yf="[object Map]",vf="[object Number]",ns="[object Object]",bf="[object RegExp]",wf="[object Set]",Sf="[object String]",Tf="[object Symbol]",Ef="[object WeakMap]",jf="[object ArrayBuffer]",_f="[object DataView]",Cf="[object Float32Array]",Of="[object Float64Array]",$f="[object Int8Array]",Af="[object Int16Array]",Ff="[object Int32Array]",Rf="[object Uint8Array]",If="[object Uint8ClampedArray]",Mf="[object Uint16Array]",Pf="[object Uint32Array]",G={};G[ts]=G[hf]=G[jf]=G[_f]=G[pf]=G[mf]=G[Cf]=G[Of]=G[$f]=G[Af]=G[Ff]=G[yf]=G[vf]=G[ns]=G[bf]=G[wf]=G[Sf]=G[Tf]=G[Rf]=G[If]=G[Mf]=G[Pf]=!0;G[gf]=G[rs]=G[Ef]=!1;function Ft(e,t,r,n,i,o){var s,l=t&uf,c=t&df,u=t&ff;if(r&&(s=i?r(e,n,i,o):r(e)),s!==void 0)return s;if(!Lt(e))return e;var f=Nt(e);if(f){if(s=$d(e),!l)return Jo(e,s)}else{var d=Wn(e),h=d==rs||d==xf;if(Wo(e))return fd(e,l);if(d==ns||d==ts||h&&!i){if(s=c||h?{}:rf(e),!l)return c?yd(e,ud(s,e)):gd(e,od(s,e))}else{if(!G[d])return i?e:{};s=ef(e,d,l)}}o||(o=new wt);var b=o.get(e);if(b)return b;o.set(e,s),cf(e)?e.forEach(function(w){s.add(Ft(w,t,r,w,e,o))}):sf(e)&&e.forEach(function(w,T){s.set(T,Ft(w,t,r,T,e,o))});var y=u?c?bd:vd:c?Un:Bn,v=f?void 0:y(e);return uu(v||e,function(w,T){v&&(T=w,w=e[T]),Bo(s,T,Ft(w,t,r,T,e,o))}),s}var kf=4;function Ni(e){return Ft(e,kf)}function is(e,t){for(var r=-1,n=e==null?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}var Df="[object Symbol]";function qn(e){return typeof e=="symbol"||tt(e)&&et(e)==Df}var Lf="Expected a function";function Gn(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Lf);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(Gn.Cache||Ne),r}Gn.Cache=Ne;var Nf=500;function zf(e){var t=Gn(e,function(n){return r.size===Nf&&r.clear(),n}),r=t.cache;return t}var Bf=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Uf=/\\(\\)?/g,Hf=zf(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Bf,function(r,n,i,o){t.push(i?o.replace(Uf,"$1"):n||r)}),t});const Wf=Hf;var Vf=1/0;function qf(e){if(typeof e=="string"||qn(e))return e;var t=e+"";return t=="0"&&1/e==-Vf?"-0":t}var Gf=1/0,zi=De?De.prototype:void 0,Bi=zi?zi.toString:void 0;function os(e){if(typeof e=="string")return e;if(Nt(e))return is(e,os)+"";if(qn(e))return Bi?Bi.call(e):"";var t=e+"";return t=="0"&&1/e==-Gf?"-0":t}function Kf(e){return e==null?"":os(e)}function ss(e){return Nt(e)?is(e,qf):qn(e)?[e]:Jo(Wf(Kf(e)))}var Qf=1,Jf=4;function Yf(e){return Ft(e,Qf|Jf)}function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W.apply(this,arguments)}function as(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Pe(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Ui(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Mr=g.createContext(void 0);Mr.displayName="FormikContext";var Zf=Mr.Provider,Xf=Mr.Consumer;function ls(){var e=g.useContext(Mr);return e}var Hi=function(t){return Array.isArray(t)&&t.length===0},te=function(t){return typeof t=="function"},zt=function(t){return t!==null&&typeof t=="object"},eh=function(t){return String(Math.floor(Number(t)))===t},Jr=function(t){return Object.prototype.toString.call(t)==="[object String]"},cs=function(t){return g.Children.count(t)===0},Yr=function(t){return zt(t)&&te(t.then)};function Q(e,t,r,n){n===void 0&&(n=0);for(var i=ss(t);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?r:e}function be(e,t,r){for(var n=Ni(e),i=n,o=0,s=ss(t);o<s.length-1;o++){var l=s[o],c=Q(e,s.slice(0,o+1));if(c&&(zt(c)||Array.isArray(c)))i=i[l]=Ni(c);else{var u=s[o+1];i=i[l]=eh(u)&&Number(u)>=0?[]:{}}}return(o===0?e:i)[s[o]]===r?e:(r===void 0?delete i[s[o]]:i[s[o]]=r,o===0&&r===void 0&&delete n[s[o]],n)}function us(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],l=e[s];zt(l)?r.get(l)||(r.set(l,!0),n[s]=Array.isArray(l)?[]:{},us(l,t,r,n[s])):n[s]=t}return n}function th(e,t){switch(t.type){case"SET_VALUES":return W({},e,{values:t.payload});case"SET_TOUCHED":return W({},e,{touched:t.payload});case"SET_ERRORS":return Me(e.errors,t.payload)?e:W({},e,{errors:t.payload});case"SET_STATUS":return W({},e,{status:t.payload});case"SET_ISSUBMITTING":return W({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return W({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return W({},e,{values:be(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return W({},e,{touched:be(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return W({},e,{errors:be(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return W({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return W({},e,{touched:us(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return W({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return W({},e,{isSubmitting:!1});default:return e}}var We={},Qt={};function rh(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,s=o===void 0?!1:o,l=e.isInitialValid,c=e.enableReinitialize,u=c===void 0?!1:c,f=e.onSubmit,d=Pe(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),h=W({validateOnChange:r,validateOnBlur:i,validateOnMount:s,onSubmit:f},d),b=g.useRef(h.initialValues),y=g.useRef(h.initialErrors||We),v=g.useRef(h.initialTouched||Qt),w=g.useRef(h.initialStatus),T=g.useRef(!1),j=g.useRef({});g.useEffect(function(){return T.current=!0,function(){T.current=!1}},[]);var D=g.useState(0),L=D[1],U=g.useRef({values:h.initialValues,errors:h.initialErrors||We,touched:h.initialTouched||Qt,status:h.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),F=U.current,R=g.useCallback(function(m){var S=U.current;U.current=th(S,m),S!==U.current&&L(function(E){return E+1})},[]),z=g.useCallback(function(m,S){return new Promise(function(E,O){var k=h.validate(m,S);k==null?E(We):Yr(k)?k.then(function(H){E(H||We)},function(H){O(H)}):E(k)})},[h.validate]),$=g.useCallback(function(m,S){var E=h.validationSchema,O=te(E)?E(S):E,k=S&&O.validateAt?O.validateAt(S,m):oh(m,O);return new Promise(function(H,Z){k.then(function(){H(We)},function(Oe){Oe.name==="ValidationError"?H(ih(Oe)):Z(Oe)})})},[h.validationSchema]),N=g.useCallback(function(m,S){return new Promise(function(E){return E(j.current[m].validate(S))})},[]),M=g.useCallback(function(m){var S=Object.keys(j.current).filter(function(O){return te(j.current[O].validate)}),E=S.length>0?S.map(function(O){return N(O,Q(m,O))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(E).then(function(O){return O.reduce(function(k,H,Z){return H==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||H&&(k=be(k,S[Z],H)),k},{})})},[N]),de=g.useCallback(function(m){return Promise.all([M(m),h.validationSchema?$(m):{},h.validate?z(m):{}]).then(function(S){var E=S[0],O=S[1],k=S[2],H=hn.all([E,O,k],{arrayMerge:sh});return H})},[h.validate,h.validationSchema,M,z,$]),q=ce(function(m){return m===void 0&&(m=F.values),R({type:"SET_ISVALIDATING",payload:!0}),de(m).then(function(S){return T.current&&(R({type:"SET_ISVALIDATING",payload:!1}),R({type:"SET_ERRORS",payload:S})),S})});g.useEffect(function(){s&&T.current===!0&&Me(b.current,h.initialValues)&&q(b.current)},[s,q]);var J=g.useCallback(function(m){var S=m&&m.values?m.values:b.current,E=m&&m.errors?m.errors:y.current?y.current:h.initialErrors||{},O=m&&m.touched?m.touched:v.current?v.current:h.initialTouched||{},k=m&&m.status?m.status:w.current?w.current:h.initialStatus;b.current=S,y.current=E,v.current=O,w.current=k;var H=function(){R({type:"RESET_FORM",payload:{isSubmitting:!!m&&!!m.isSubmitting,errors:E,touched:O,status:k,values:S,isValidating:!!m&&!!m.isValidating,submitCount:m&&m.submitCount&&typeof m.submitCount=="number"?m.submitCount:0}})};if(h.onReset){var Z=h.onReset(F.values,C);Yr(Z)?Z.then(H):H()}else H()},[h.initialErrors,h.initialStatus,h.initialTouched,h.onReset]);g.useEffect(function(){T.current===!0&&!Me(b.current,h.initialValues)&&u&&(b.current=h.initialValues,J(),s&&q(b.current))},[u,h.initialValues,J,s,q]),g.useEffect(function(){u&&T.current===!0&&!Me(y.current,h.initialErrors)&&(y.current=h.initialErrors||We,R({type:"SET_ERRORS",payload:h.initialErrors||We}))},[u,h.initialErrors]),g.useEffect(function(){u&&T.current===!0&&!Me(v.current,h.initialTouched)&&(v.current=h.initialTouched||Qt,R({type:"SET_TOUCHED",payload:h.initialTouched||Qt}))},[u,h.initialTouched]),g.useEffect(function(){u&&T.current===!0&&!Me(w.current,h.initialStatus)&&(w.current=h.initialStatus,R({type:"SET_STATUS",payload:h.initialStatus}))},[u,h.initialStatus,h.initialTouched]);var ae=ce(function(m){if(j.current[m]&&te(j.current[m].validate)){var S=Q(F.values,m),E=j.current[m].validate(S);return Yr(E)?(R({type:"SET_ISVALIDATING",payload:!0}),E.then(function(O){return O}).then(function(O){R({type:"SET_FIELD_ERROR",payload:{field:m,value:O}}),R({type:"SET_ISVALIDATING",payload:!1})})):(R({type:"SET_FIELD_ERROR",payload:{field:m,value:E}}),Promise.resolve(E))}else if(h.validationSchema)return R({type:"SET_ISVALIDATING",payload:!0}),$(F.values,m).then(function(O){return O}).then(function(O){R({type:"SET_FIELD_ERROR",payload:{field:m,value:Q(O,m)}}),R({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Ht=g.useCallback(function(m,S){var E=S.validate;j.current[m]={validate:E}},[]),it=g.useCallback(function(m){delete j.current[m]},[]),ot=ce(function(m,S){R({type:"SET_TOUCHED",payload:m});var E=S===void 0?i:S;return E?q(F.values):Promise.resolve()}),st=g.useCallback(function(m){R({type:"SET_ERRORS",payload:m})},[]),at=ce(function(m,S){var E=te(m)?m(F.values):m;R({type:"SET_VALUES",payload:E});var O=S===void 0?r:S;return O?q(E):Promise.resolve()}),Re=g.useCallback(function(m,S){R({type:"SET_FIELD_ERROR",payload:{field:m,value:S}})},[]),le=ce(function(m,S,E){R({type:"SET_FIELD_VALUE",payload:{field:m,value:S}});var O=E===void 0?r:E;return O?q(be(F.values,m,S)):Promise.resolve()}),ze=g.useCallback(function(m,S){var E=S,O=m,k;if(!Jr(m)){m.persist&&m.persist();var H=m.target?m.target:m.currentTarget,Z=H.type,Oe=H.name,Ur=H.id,Hr=H.value,Xs=H.checked,Dx=H.outerHTML,ri=H.options,ea=H.multiple;E=S||Oe||Ur,O=/number|range/.test(Z)?(k=parseFloat(Hr),isNaN(k)?"":k):/checkbox/.test(Z)?lh(Q(F.values,E),Xs,Hr):ri&&ea?ah(ri):Hr}E&&le(E,O)},[le,F.values]),je=ce(function(m){if(Jr(m))return function(S){return ze(S,m)};ze(m)}),ie=ce(function(m,S,E){S===void 0&&(S=!0),R({type:"SET_FIELD_TOUCHED",payload:{field:m,value:S}});var O=E===void 0?i:E;return O?q(F.values):Promise.resolve()}),lt=g.useCallback(function(m,S){m.persist&&m.persist();var E=m.target,O=E.name,k=E.id,H=E.outerHTML,Z=S||O||k;ie(Z,!0)},[ie]),fe=ce(function(m){if(Jr(m))return function(S){return lt(S,m)};lt(m)}),ct=g.useCallback(function(m){te(m)?R({type:"SET_FORMIK_STATE",payload:m}):R({type:"SET_FORMIK_STATE",payload:function(){return m}})},[]),_e=g.useCallback(function(m){R({type:"SET_STATUS",payload:m})},[]),ut=g.useCallback(function(m){R({type:"SET_ISSUBMITTING",payload:m})},[]),P=ce(function(){return R({type:"SUBMIT_ATTEMPT"}),q().then(function(m){var S=m instanceof Error,E=!S&&Object.keys(m).length===0;if(E){var O;try{if(O=I(),O===void 0)return}catch(k){throw k}return Promise.resolve(O).then(function(k){return T.current&&R({type:"SUBMIT_SUCCESS"}),k}).catch(function(k){if(T.current)throw R({type:"SUBMIT_FAILURE"}),k})}else if(T.current&&(R({type:"SUBMIT_FAILURE"}),S))throw m})}),_=ce(function(m){m&&m.preventDefault&&te(m.preventDefault)&&m.preventDefault(),m&&m.stopPropagation&&te(m.stopPropagation)&&m.stopPropagation(),P().catch(function(S){console.warn("Warning: An unhandled error was caught from submitForm()",S)})}),C={resetForm:J,validateForm:q,validateField:ae,setErrors:st,setFieldError:Re,setFieldTouched:ie,setFieldValue:le,setStatus:_e,setSubmitting:ut,setTouched:ot,setValues:at,setFormikState:ct,submitForm:P},I=ce(function(){return f(F.values,C)}),re=ce(function(m){m&&m.preventDefault&&te(m.preventDefault)&&m.preventDefault(),m&&m.stopPropagation&&te(m.stopPropagation)&&m.stopPropagation(),J()}),Be=g.useCallback(function(m){return{value:Q(F.values,m),error:Q(F.errors,m),touched:!!Q(F.touched,m),initialValue:Q(b.current,m),initialTouched:!!Q(v.current,m),initialError:Q(y.current,m)}},[F.errors,F.touched,F.values]),Ue=g.useCallback(function(m){return{setValue:function(E,O){return le(m,E,O)},setTouched:function(E,O){return ie(m,E,O)},setError:function(E){return Re(m,E)}}},[le,ie,Re]),Wt=g.useCallback(function(m){var S=zt(m),E=S?m.name:m,O=Q(F.values,E),k={name:E,value:O,onChange:je,onBlur:fe};if(S){var H=m.type,Z=m.value,Oe=m.as,Ur=m.multiple;H==="checkbox"?Z===void 0?k.checked=!!O:(k.checked=!!(Array.isArray(O)&&~O.indexOf(Z)),k.value=Z):H==="radio"?(k.checked=O===Z,k.value=Z):Oe==="select"&&Ur&&(k.value=k.value||[],k.multiple=!0)}return k},[fe,je,F.values]),Tt=g.useMemo(function(){return!Me(b.current,F.values)},[b.current,F.values]),dt=g.useMemo(function(){return typeof l<"u"?Tt?F.errors&&Object.keys(F.errors).length===0:l!==!1&&te(l)?l(h):l:F.errors&&Object.keys(F.errors).length===0},[l,Tt,F.errors,h]),Ce=W({},F,{initialValues:b.current,initialErrors:y.current,initialTouched:v.current,initialStatus:w.current,handleBlur:fe,handleChange:je,handleReset:re,handleSubmit:_,resetForm:J,setErrors:st,setFormikState:ct,setFieldTouched:ie,setFieldValue:le,setFieldError:Re,setStatus:_e,setSubmitting:ut,setTouched:ot,setValues:at,submitForm:P,validateForm:q,validateField:ae,isValid:dt,dirty:Tt,unregisterField:it,registerField:Ht,getFieldProps:Wt,getFieldMeta:Be,getFieldHelpers:Ue,validateOnBlur:i,validateOnChange:r,validateOnMount:s});return Ce}function nh(e){var t=rh(e),r=e.component,n=e.children,i=e.render,o=e.innerRef;return g.useImperativeHandle(o,function(){return t}),g.createElement(Zf,{value:t},r?g.createElement(r,t):i?i(t):n?te(n)?n(t):cs(n)?null:g.Children.only(n):null)}function ih(e){var t={};if(e.inner){if(e.inner.length===0)return be(t,e.path,e.message);for(var i=e.inner,r=Array.isArray(i),n=0,i=r?i:i[Symbol.iterator]();;){var o;if(r){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;Q(t,s.path)||(t=be(t,s.path,s.message))}}return t}function oh(e,t,r,n){r===void 0&&(r=!1);var i=vn(e);return t[r?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function vn(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(i){return Array.isArray(i)===!0||mi(i)?vn(i):i!==""?i:void 0}):mi(e[n])?t[n]=vn(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function sh(e,t,r){var n=e.slice();return t.forEach(function(o,s){if(typeof n[s]>"u"){var l=r.clone!==!1,c=l&&r.isMergeableObject(o);n[s]=c?hn(Array.isArray(o)?[]:{},o,r):o}else r.isMergeableObject(o)?n[s]=hn(e[s],o,r):e.indexOf(o)===-1&&n.push(o)}),n}function ah(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function lh(e,t,r){if(typeof e=="boolean")return!!t;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(r),i=o>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!i?n.concat(r):i?n.slice(0,o).concat(n.slice(o+1)):n}var ch=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?g.useLayoutEffect:g.useEffect;function ce(e){var t=g.useRef(e);return ch(function(){t.current=e}),g.useCallback(function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.current.apply(void 0,n)},[])}function uh(e){var t=e.validate,r=e.name,n=e.render,i=e.children,o=e.as,s=e.component,l=e.className,c=Pe(e,["validate","name","render","children","as","component","className"]),u=ls(),f=Pe(u,["validate","validationSchema"]),d=f.registerField,h=f.unregisterField;g.useEffect(function(){return d(r,{validate:t}),function(){h(r)}},[d,h,r,t]);var b=f.getFieldProps(W({name:r},c)),y=f.getFieldMeta(r),v={field:b,form:f};if(n)return n(W({},v,{meta:y}));if(te(i))return i(W({},v,{meta:y}));if(s){if(typeof s=="string"){var w=c.innerRef,T=Pe(c,["innerRef"]);return g.createElement(s,W({ref:w},b,T,{className:l}),i)}return g.createElement(s,W({field:b,form:f},c,{className:l}),i)}var j=o||"input";if(typeof j=="string"){var D=c.innerRef,L=Pe(c,["innerRef"]);return g.createElement(j,W({ref:D},b,L,{className:l}),i)}return g.createElement(j,W({},b,c,{className:l}),i)}var ds=g.forwardRef(function(e,t){var r=e.action,n=Pe(e,["action"]),i=r??"#",o=ls(),s=o.handleReset,l=o.handleSubmit;return g.createElement("form",W({onSubmit:l,ref:t,onReset:s,action:i},n))});ds.displayName="Form";function dh(e){var t=function(i){return g.createElement(Xf,null,function(o){return g.createElement(e,W({},i,{formik:o}))})},r=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+r+")",qa(t,e)}var fh=function(t,r,n){var i=Ye(t),o=i[r];return i.splice(r,1),i.splice(n,0,o),i},hh=function(t,r,n){var i=Ye(t),o=i[r];return i[r]=i[n],i[n]=o,i},Zr=function(t,r,n){var i=Ye(t);return i.splice(r,0,n),i},ph=function(t,r,n){var i=Ye(t);return i[r]=n,i},Ye=function(t){if(t){if(Array.isArray(t))return[].concat(t);var r=Object.keys(t).map(function(n){return parseInt(n)}).reduce(function(n,i){return i>n?i:n},0);return Array.from(W({},t,{length:r+1}))}else return[]},Wi=function(t,r){var n=typeof t=="function"?t:r;return function(i){if(Array.isArray(i)||zt(i)){var o=Ye(i);return n(o)}return i}},mh=function(e){as(t,e);function t(n){var i;return i=e.call(this,n)||this,i.updateArrayField=function(o,s,l){var c=i.props,u=c.name,f=c.formik.setFormikState;f(function(d){var h=Wi(l,o),b=Wi(s,o),y=be(d.values,u,o(Q(d.values,u))),v=l?h(Q(d.errors,u)):void 0,w=s?b(Q(d.touched,u)):void 0;return Hi(v)&&(v=void 0),Hi(w)&&(w=void 0),W({},d,{values:y,errors:l?be(d.errors,u,v):d.errors,touched:s?be(d.touched,u,w):d.touched})})},i.push=function(o){return i.updateArrayField(function(s){return[].concat(Ye(s),[Yf(o)])},!1,!1)},i.handlePush=function(o){return function(){return i.push(o)}},i.swap=function(o,s){return i.updateArrayField(function(l){return hh(l,o,s)},!0,!0)},i.handleSwap=function(o,s){return function(){return i.swap(o,s)}},i.move=function(o,s){return i.updateArrayField(function(l){return fh(l,o,s)},!0,!0)},i.handleMove=function(o,s){return function(){return i.move(o,s)}},i.insert=function(o,s){return i.updateArrayField(function(l){return Zr(l,o,s)},function(l){return Zr(l,o,null)},function(l){return Zr(l,o,null)})},i.handleInsert=function(o,s){return function(){return i.insert(o,s)}},i.replace=function(o,s){return i.updateArrayField(function(l){return ph(l,o,s)},!1,!1)},i.handleReplace=function(o,s){return function(){return i.replace(o,s)}},i.unshift=function(o){var s=-1;return i.updateArrayField(function(l){var c=l?[o].concat(l):[o];return s=c.length,c},function(l){return l?[null].concat(l):[null]},function(l){return l?[null].concat(l):[null]}),s},i.handleUnshift=function(o){return function(){return i.unshift(o)}},i.handleRemove=function(o){return function(){return i.remove(o)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(Ui(i)),i.pop=i.pop.bind(Ui(i)),i}var r=t.prototype;return r.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!Me(Q(i.formik.values,i.name),Q(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(i){var o;return this.updateArrayField(function(s){var l=s?Ye(s):[];return o||(o=l[i]),te(l.splice)&&l.splice(i,1),te(l.every)&&l.every(function(c){return c===void 0})?[]:l},!0,!0),o},r.pop=function(){var i;return this.updateArrayField(function(o){var s=o.slice();return i||(i=s&&s.pop&&s.pop()),s},!0,!0),i},r.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,s=o.component,l=o.render,c=o.children,u=o.name,f=o.formik,d=Pe(f,["validate","validationSchema"]),h=W({},i,{form:d,name:u});return s?g.createElement(s,h):l?l(h):c?typeof c=="function"?c(h):cs(c)?null:g.Children.only(c):null},t}(g.Component);mh.defaultProps={validateOnChange:!0};var gh=function(e){as(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.shouldComponentUpdate=function(i){return Q(this.props.formik.errors,this.props.name)!==Q(i.formik.errors,this.props.name)||Q(this.props.formik.touched,this.props.name)!==Q(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},r.render=function(){var i=this.props,o=i.component,s=i.formik,l=i.render,c=i.children,u=i.name,f=Pe(i,["component","formik","render","children","name"]),d=Q(s.touched,u),h=Q(s.errors,u);return d&&h?l?te(l)?l(h):null:c?te(c)?c(h):null:o?g.createElement(o,f,h):h:null},t}(g.Component),xh=dh(gh);const yh=p.div`
  visibility: ${e=>e!=null&&e.$showBMI?"visible":"hidden"};
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px;

  pointer-events: ${e=>e!=null&&e.$showBMI?"all":"none"};
  width: 100%;
  height: 100%;
  background-color: ${e=>e.theme.colors.mainBackdropBgColor};
  opacity: ${e=>e!=null&&e.$showBMI?1:0};
  overflow: auto;
  z-index: 1000;
  backdrop-filter: blur(3px);

  @media (min-width: 1440px) {
    overflow: ${e=>e!=null&&e.$showBMI?"hidden":"auto"};
  }
`,vh=p.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  padding: 4rem 2rem;
  color: ${e=>e.theme.colors.mainTextColorRev};
  background-color: ${e=>e.theme.colors.mainBgColorDark};
  border-radius: 2rem;
  z-index: 500;
  transition: 0.3s linear;

  position: absolute;
  top: 50%;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,bh=p(ds)`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,wh=p.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`,Sh=p(xo)`
  color: ${e=>e.theme.colors.mainBgColorLight};
  font-size: 2.4rem;
  top: 1.6rem;
  right: 1.6rem;
  position: absolute;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentColor};
  }
`,Vi=p(uh)`
  width: 24.4rem;
  padding: 1rem 1.2rem;
  border-radius: 0.6rem;
  outline: 1px solid transparent;
  background: none;
  border: none;
  background-color: ${e=>e.theme.colors.mainBgColorLight};
  color: ${e=>e.theme.colors.mainBgColorDark};

  &:hover {
    outline: 1px solid ${e=>e.theme.colors.blueColor};
  }

  &::placeholder {
    font-family: ${ne};
    font-size: 1.4rem;
    font-weight: 300;
    line-height: normal;
    color: ${e=>e.theme.colors.secondaryBlackTextColorDark};
  }

  &:focus-within {
    outline: 1px solid ${e=>e.theme.colors.blueColor};
  }
`,qi=p.div`
  position: relative;

  margin-top: 0.2rem;
`,Gi=p(xh)`
  color: ${e=>e.theme.colors.redColor};
  position: absolute;
  bottom: -2.2rem;
  left: 0;
  font-size: 1.2rem;
`,Ki=p.label`
  color: ${e=>e.theme.colors.mainBgColorLight};
  font-family: ${Le};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,Th=p.button`
  width: 100%;
  font-family: ${ne};
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem;
  background-color: ${e=>e.theme.colors.blueColor};
  border-radius: 0.6rem;
  color: ${e=>e.theme.colors.heroTextColor};
  cursor: pointer;
`,Eh=p.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
`,jh=p.svg`
  width: 4.4rem;
  height: 4.4rem;
`,Qi=p.p`
  color: ${e=>e.theme.colors.mainBgColorLight};
  font-family: ${ne};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: 0;
`,_h=p.span`
  font-family: ${ne};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: 0;
`,Ch=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;function Oh({showBMI:e,setShowBMI:t}){const[r,n]=g.useState(""),[i,o]=g.useState(""),[s,l]=g.useState(0),[c,u]=g.useState(""),[f,d]=g.useState(""),[h,b]=g.useState("");g.useEffect(()=>{s<18.5?(u("You are underweight"),d("images/icons.svg#icon-fitness"),b("#00cc44")):s>=18.5&&s<25?(u("You are on a good shape"),d("images/icons.svg#icon-yoga"),b("#3399ff")):s>=25&&s<30?(u("You are overweight"),d("images/icons.svg#icon-run"),b("#ff9900")):(u("You are in the obesity range"),d("images/icons.svg#icon-over"),b("#ff3300"))},[s]);function y(U){const F=U.weight,R=U.height;l(Number((F/(R*R)*703).toFixed(1))),n(""),o("")}function v(){t(U=>!U)}const w=g.useRef({x:0,y:0}),T=g.useRef(null),j=g.useRef(null),D=U=>{w.current={x:U.clientX,y:U.clientY},T.current!=null&&T.current.update()},L=Ro({weight:fn().max(3,"Weight should be up to 3 characters").required("Please fill up your weight!"),height:fn().max(2,"Height should be up to 2 characters").required("Please fill up your height!")});return a.jsx(yh,{$showBMI:e,children:a.jsxs(vh,{children:[a.jsx(Sh,{onClick:v}),a.jsx(nh,{initialValues:{weight:r,height:i},validationSchema:L,onSubmit:(U,F)=>{y(U),F.resetForm({values:{weight:r,height:i}})},children:a.jsxs(bh,{children:[a.jsxs(wh,{children:[a.jsxs("div",{children:[a.jsx(Ki,{htmlFor:"weight",children:"Weight (lbs)"}),a.jsxs(qi,{children:[a.jsx(Vi,{type:"number",name:"weight",placeholder:"0"}),a.jsx(Gi,{component:"span",name:"weight"})]})]}),a.jsxs("div",{children:[a.jsx(Ki,{htmlFor:"height",children:"Height (in)"}),a.jsxs(qi,{children:[a.jsx(Vi,{type:"number",name:"height",placeholder:"0"}),a.jsx(Gi,{component:"span",name:"height"})]})]})]}),a.jsx("div",{children:a.jsx(po,{title:"Check",placement:"top",arrow:!0,PopperProps:{popperRef:T,anchorEl:{getBoundingClientRect:()=>new DOMRect(w.current.x,j.current.getBoundingClientRect().y,0,0)}},children:a.jsx(Th,{onMouseMove:D,ref:j,type:"submit",children:"Check your BMI"})})})]})}),s>0&&a.jsxs(Eh,{children:[a.jsxs(Ch,{children:[a.jsxs(Qi,{children:["Your BMI is"," ",a.jsx(_h,{style:{color:h},children:s})]}),a.jsx(Qi,{children:c})]}),a.jsx("div",{children:a.jsx(jh,{children:a.jsx("use",{href:f})})})]})]})})}const $h=na`
  0% {
  background-color: ${e=>e.theme.colors.scrollUpColor};
  }
  50% {
  background-color: transparent;

  }
  100% {
  background-color: ${e=>e.theme.colors.scrollUpColor};
  }
`,fs=p.p`
  color: ${e=>e.theme.colors.heroTextColorLowOp};
  font-family: ${ne};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  transition: 0.3s linear;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`,Ah=p.div`
  position: fixed;
  top: 8rem;
  right: 4rem;
  background-color: ${e=>e.theme.colors.switcherHoverBg};
  background-color: ${e=>e.theme.colors.scrollUpColor};
  border-radius: 50rem;
  width: 3.2rem;
  height: 3.2rem;
  z-index: 1000;
  cursor: pointer;
  transition: 0.3s linear;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
  }

  @media (min-width: 1440px) {
    right: 3.2rem;
    width: 4.8rem;
    height: 4.8rem;
    border: 1px solid ${e=>e.theme.colors.accentColor};
    animation: ${$h} 3s linear infinite;
  }

  &:hover {
    border: 1px solid ${e=>e.theme.colors.accentColorLowOp};
    animation-play-state: paused;
    background-color: transparent;
  }

  &:hover {
    ${fs} {
      color: ${e=>e.theme.colors.accentColor};
    }
  }
`;function Fh(){const[e,t]=g.useState(!1);return a.jsx(po,{title:"Check BMI",placement:"bottom",arrow:!0,children:a.jsxs(Ah,{children:[e&&a.jsx(Oh,{showBMI:e,setShowBMI:t}),a.jsx(fs,{onClick:()=>t(r=>!r),children:"BMI"})]})})}const Rh=p.div`
  position: relative;
  width: 100%;
  min-height: auto;
  background: url(${_a});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem 0 1.2rem 1.2rem;
  border-radius: 1.2rem;
  overflow: hidden;

  display: grid;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#000, #000);
    opacity: 0.7;
    z-index: -5;
  }

  @media (min-width: 375px) {
    padding: 1.2rem;
  }

  @media (min-width: 768px) {
    background-size: 100%;
    min-height: auto;
    padding: 3.2rem;
    overflow: visible;
  }

  @media (min-width: 1440px) {
    min-height: 60rem;
    padding: 3.2rem;
  }
`,Ih=p.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`,Mh=p.div`
  width: 100%;
  height: 100%;
`,Ph=p.img`
  width: 27rem;

  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

  @media (min-width: 334px) {
    width: 30rem;
  }

  @media (min-width: 768px) {
    width: 35.2rem;
    height: auto;
    position: absolute;
    bottom: 0;
    z-index: 2;
    left: 1.2rem;
  }

  @media (min-width: 1440px) {
    width: 52rem;
    height: auto;
    position: absolute;
    bottom: 0;
    z-index: 2;
  }
`,kh=p.div`
  order: -1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  height: 100%;
  padding: 1.2rem;

  @media (min-width: 375px) {
    gap: 2.4rem;
  }

  @media (min-width: 768px) {
    order: 0;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    height: 100%;
  }
`,Dh=p.h1`
  text-align: start;
  color: ${e=>e.theme.colors.heroTextColor};
  font-family: ${Cn};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;

  @media (min-width: 375px) {
    font-size: 15px;
  }

  @media (min-width: 768px) {
    color: ${e=>e.theme.colors.heroTextColor};
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
  }

  @media (min-width: 1440px) {
    color: ${e=>e.theme.colors.heroTextColor};
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
  }
`,Lh=p.p`
  text-align: start;
  color: ${e=>e.theme.colors.heroTextColor};
  font-family: ${ne};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  z-index: 5;

  @media (min-width: 334px) {
    margin-bottom: 1.6rem;
  }

  @media (min-width: 358px) {
    margin-bottom: 2.2rem;
  }

  @media (min-width: 375px) {
    font-size: 12px;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    z-index: 5;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;function Nh(){return a.jsx(Rh,{children:a.jsxs(Ih,{children:[a.jsx(Mh,{children:a.jsx(Ph,{src:"images/pt.png",alt:"Personal Trainer",loading:"lazy"})}),a.jsxs(kh,{children:[a.jsx(Dh,{children:"Achieve Your Fitness Goals, Embrace a Happy and Healthy Lifestyle"}),a.jsx(Lh,{children:"As a champion in gymnastics, bodybuilding, and MMA, I bring over 14 years of expertise to your fitness goals. National champion, international competitor, and a certified US personal trainer. Let's build your success story together. Be fit, live well. Contact me to start your journey today."}),a.jsx(fo,{location:"hero"})]})]})})}const zh=p.div`
  border-radius: 1.2rem;
  background-color: ${e=>e.theme.colors.iconsBgColorLowOp};
`,Bh=p.div`
  width: 100%;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 1440px) {
    padding: 1.2rem 2.4rem;
  }
`,Uh=p.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,Hh=p.h2`
  text-align: center;
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${Le};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;

  padding-bottom: 1.2rem;
  border-bottom: 1px solid ${e=>e.theme.colors.accentColor};
`,Wh=p.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${bt};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.27;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,Jt=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 2.4rem;
  border-radius: 1.2rem;

  border-bottom: 0.1px solid ${e=>e.theme.colors.accentColor};

  background-color: ${e=>e.theme.colors.mainBgColor};

  @media (min-width: 1440px) {
    padding: 1.2rem;
  }
`,Vh=p.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 2.4rem;
    column-gap: 2.4rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;
  }
`,Yt=p.li`
  flex: 1 0 calc((100% / 2) - 16px);
`,Zt=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  margin-bottom: 1.2rem;

  border-radius: 50rem;
  background-color: ${e=>e.theme.colors.iconsBgColorLowOp};

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`,Xt=p.svg`
  width: 4.4rem;
  height: 4.4rem;
`,er=p.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${Cn};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.26px;

  @media (min-width: 325px) {
    letter-spacing: 0px;
  }

  @media (min-width: 1440px) {
    line-height: 1;
    letter-spacing: -0.46px;
  }
`,tr=p.p`
  color: ${e=>e.theme.colors.secondaryBlackTextColorLowOp};
  font-family: ${Cn};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media (min-width: 1440px) {
    letter-spacing: -0.386px;
  }
`;function qh(){return a.jsx(zh,{children:a.jsxs(Bh,{children:[a.jsxs(Uh,{children:[a.jsx(Hh,{children:"Elite 1:1 Coaching Experience"}),a.jsx(Wh,{children:"A completely Personalized Nutrition, Training, Cardio, and Supplementation Program based on your body type, height and desired physique goals. I'm here not just to instruct but to inspire, motivate, and guide you to reach your health and fitness goals."})]}),a.jsxs(Vh,{children:[a.jsx(Yt,{children:a.jsxs(Jt,{children:[a.jsx(Zt,{children:a.jsx(Xt,{children:a.jsx("use",{href:"images/icons.svg#icon-fitness"})})}),a.jsx(er,{children:"Bodybuilding & Fitness"}),a.jsx(tr,{children:"Build strength, shape muscles, and boost overall fitness with tailored programs."})]})}),a.jsx(Yt,{children:a.jsxs(Jt,{children:[a.jsx(Zt,{children:a.jsx(Xt,{children:a.jsx("use",{href:"images/icons.svg#icon-boxing"})})}),a.jsx(er,{children:"Boxing & MMA"}),a.jsx(tr,{children:"Discover your fighting spirit through boxing and MMA training."})]})}),a.jsx(Yt,{children:a.jsxs(Jt,{children:[a.jsx(Zt,{children:a.jsx(Xt,{children:a.jsx("use",{href:"images/icons.svg#icon-gymnastics"})})}),a.jsx(er,{children:"Calisthenics & Gymnastics"}),a.jsx(tr,{children:"Achieve agility and strength with dynamic bodyweight exercises."})]})}),a.jsx(Yt,{children:a.jsxs(Jt,{children:[a.jsx(Zt,{children:a.jsx(Xt,{children:a.jsx("use",{href:"images/icons.svg#icon-nutrition"})})}),a.jsx(er,{children:"Health & Nutrition"}),a.jsx(tr,{children:"Fuel your success with personalized health and nutrition guidance."})]})})]})]})})}var hs=function(){if(typeof Map<"u")return Map;function e(t,r){var n=-1;return t.some(function(i,o){return i[0]===r?(n=o,!0):!1}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(r){var n=e(this.__entries__,r),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(r,n){var i=e(this.__entries__,r);~i?this.__entries__[i][1]=n:this.__entries__.push([r,n])},t.prototype.delete=function(r){var n=this.__entries__,i=e(n,r);~i&&n.splice(i,1)},t.prototype.has=function(r){return!!~e(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,n){n===void 0&&(n=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];r.call(n,s[1],s[0])}},t}()}(),bn=typeof window<"u"&&typeof document<"u"&&window.document===document,pr=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Gh=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(pr):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Kh=2;function Qh(e,t){var r=!1,n=!1,i=0;function o(){r&&(r=!1,e()),n&&l()}function s(){Gh(o)}function l(){var c=Date.now();if(r){if(c-i<Kh)return;n=!0}else r=!0,n=!1,setTimeout(s,t);i=c}return l}var Jh=20,Yh=["top","right","bottom","left","width","height","size","weight"],Zh=typeof MutationObserver<"u",Xh=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Qh(this.refresh.bind(this),Jh)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var r=this.observers_,n=r.indexOf(t);~n&&r.splice(n,1),!r.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return t.forEach(function(r){return r.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!bn||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Zh?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!bn||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var r=t.propertyName,n=r===void 0?"":r,i=Yh.some(function(o){return!!~n.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),ps=function(e,t){for(var r=0,n=Object.keys(t);r<n.length;r++){var i=n[r];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},yt=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||pr},ms=Pr(0,0,0,0);function mr(e){return parseFloat(e)||0}function Ji(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(n,i){var o=e["border-"+i+"-width"];return n+mr(o)},0)}function ep(e){for(var t=["top","right","bottom","left"],r={},n=0,i=t;n<i.length;n++){var o=i[n],s=e["padding-"+o];r[o]=mr(s)}return r}function tp(e){var t=e.getBBox();return Pr(0,0,t.width,t.height)}function rp(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return ms;var n=yt(e).getComputedStyle(e),i=ep(n),o=i.left+i.right,s=i.top+i.bottom,l=mr(n.width),c=mr(n.height);if(n.boxSizing==="border-box"&&(Math.round(l+o)!==t&&(l-=Ji(n,"left","right")+o),Math.round(c+s)!==r&&(c-=Ji(n,"top","bottom")+s)),!ip(e)){var u=Math.round(l+o)-t,f=Math.round(c+s)-r;Math.abs(u)!==1&&(l-=u),Math.abs(f)!==1&&(c-=f)}return Pr(i.left,i.top,l,c)}var np=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof yt(e).SVGGraphicsElement}:function(e){return e instanceof yt(e).SVGElement&&typeof e.getBBox=="function"}}();function ip(e){return e===yt(e).document.documentElement}function op(e){return bn?np(e)?tp(e):rp(e):ms}function sp(e){var t=e.x,r=e.y,n=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return ps(s,{x:t,y:r,width:n,height:i,top:r,right:t+n,bottom:i+r,left:t}),s}function Pr(e,t,r,n){return{x:e,y:t,width:r,height:n}}var ap=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Pr(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=op(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),lp=function(){function e(t,r){var n=sp(r);ps(this,{target:t,contentRect:n})}return e}(),cp=function(){function e(t,r,n){if(this.activeObservations_=[],this.observations_=new hs,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=r,this.callbackCtx_=n}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)||(r.set(t,new ap(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)&&(r.delete(t),r.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&t.activeObservations_.push(r)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,r=this.activeObservations_.map(function(n){return new lp(n.target,n.broadcastRect())});this.callback_.call(t,r,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),gs=typeof WeakMap<"u"?new WeakMap:new hs,xs=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=Xh.getInstance(),n=new cp(t,r,this);gs.set(this,n)}return e}();["observe","unobserve","disconnect"].forEach(function(e){xs.prototype[e]=function(){var t;return(t=gs.get(this))[e].apply(t,arguments)}});var ys=function(){return typeof pr.ResizeObserver<"u"?pr.ResizeObserver:xs}(),ge={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e-.1)*5*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2,e<1?-.5*Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin((e-1.1)*5*Math.PI)+1)}},Back:{In:function(e){var t=1.70158;return e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)}},Bounce:{In:function(e){return 1-ge.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?ge.Bounce.In(e*2)*.5:ge.Bounce.Out(e*2-1)*.5+.5}}},Ot;typeof self>"u"&&typeof process<"u"&&process.hrtime?Ot=function(){var e=process.hrtime();return e[0]*1e3+e[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Ot=self.performance.now.bind(self.performance):Date.now!==void 0?Ot=Date.now:Ot=function(){return new Date().getTime()};var mt=Ot,Kn=function(){function e(){this._tweens={},this._tweensAddedDuringUpdate={}}return e.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(r){return t._tweens[r]})},e.prototype.removeAll=function(){this._tweens={}},e.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},e.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},e.prototype.update=function(t,r){t===void 0&&(t=mt()),r===void 0&&(r=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var o=this._tweens[n[i]],s=!r;o&&o.update(t,s)===!1&&!r&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},e}(),$t={Linear:function(e,t){var r=e.length-1,n=r*t,i=Math.floor(n),o=$t.Utils.Linear;return t<0?o(e[0],e[1],n):t>1?o(e[r],e[r-1],r-n):o(e[i],e[i+1>r?r:i+1],n-i)},Bezier:function(e,t){for(var r=0,n=e.length-1,i=Math.pow,o=$t.Utils.Bernstein,s=0;s<=n;s++)r+=i(1-t,n-s)*i(t,s)*e[s]*o(n,s);return r},CatmullRom:function(e,t){var r=e.length-1,n=r*t,i=Math.floor(n),o=$t.Utils.CatmullRom;return e[0]===e[r]?(t<0&&(i=Math.floor(n=r*(1+t))),o(e[(i-1+r)%r],e[i],e[(i+1)%r],e[(i+2)%r],n-i)):t<0?e[0]-(o(e[0],e[0],e[1],e[1],-n)-e[0]):t>1?e[r]-(o(e[r],e[r],e[r-1],e[r-1],n-r)-e[r]):o(e[i?i-1:0],e[i],e[r<i+1?r:i+1],e[r<i+2?r:i+2],n-i)},Utils:{Linear:function(e,t,r){return(t-e)*r+e},Bernstein:function(e,t){var r=$t.Utils.Factorial;return r(e)/r(t)/r(e-t)},Factorial:function(){var e=[1];return function(t){var r=1;if(e[t])return e[t];for(var n=t;n>1;n--)r*=n;return e[t]=r,r}}(),CatmullRom:function(e,t,r,n,i){var o=(r-e)*.5,s=(n-t)*.5,l=i*i,c=i*l;return(2*t-2*r+o+s)*c+(-3*t+3*r-2*o-s)*l+o*i+t}}},up=function(){function e(){}return e.nextId=function(){return e._nextId++},e._nextId=0,e}(),vs=new Kn,bs=function(){function e(t,r){r===void 0&&(r=vs),this._object=t,this._group=r,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ge.Linear.None,this._interpolationFunction=$t.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=up.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return e.prototype.getId=function(){return this._id},e.prototype.isPlaying=function(){return this._isPlaying},e.prototype.isPaused=function(){return this._isPaused},e.prototype.to=function(t,r){return this._valuesEnd=Object.create(t),r!==void 0&&(this._duration=r),this},e.prototype.duration=function(t){return this._duration=t,this},e.prototype.start=function(t){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var r in this._valuesStartRepeat)this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t!==void 0?typeof t=="string"?mt()+parseFloat(t):t:mt(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},e.prototype._setupProperties=function(t,r,n,i){for(var o in n){var s=t[o],l=Array.isArray(s),c=l?"array":typeof s,u=!l&&Array.isArray(n[o]);if(!(c==="undefined"||c==="function")){if(u){var f=n[o];if(f.length===0)continue;f=f.map(this._handleRelativeValue.bind(this,s)),n[o]=[s].concat(f)}if((c==="object"||l)&&s&&!u){r[o]=l?[]:{};for(var d in s)r[o][d]=s[d];i[o]=l?[]:{},this._setupProperties(s,r[o],n[o],i[o])}else typeof r[o]>"u"&&(r[o]=s),l||(r[o]*=1),u?i[o]=n[o].slice().reverse():i[o]=r[o]||0}}},e.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},e.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},e.prototype.pause=function(t){return t===void 0&&(t=mt()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},e.prototype.resume=function(t){return t===void 0&&(t=mt()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},e.prototype.stopChainedTweens=function(){for(var t=0,r=this._chainedTweens.length;t<r;t++)this._chainedTweens[t].stop();return this},e.prototype.group=function(t){return this._group=t,this},e.prototype.delay=function(t){return this._delayTime=t,this},e.prototype.repeat=function(t){return this._initialRepeat=t,this._repeat=t,this},e.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},e.prototype.yoyo=function(t){return this._yoyo=t,this},e.prototype.easing=function(t){return this._easingFunction=t,this},e.prototype.interpolation=function(t){return this._interpolationFunction=t,this},e.prototype.chain=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this._chainedTweens=t,this},e.prototype.onStart=function(t){return this._onStartCallback=t,this},e.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},e.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},e.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},e.prototype.onStop=function(t){return this._onStopCallback=t,this},e.prototype.update=function(t,r){if(t===void 0&&(t=mt()),r===void 0&&(r=!0),this._isPaused)return!0;var n,i,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>o)return!1;r&&this.start(t)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),i=(t-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var s=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,s),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var l=0,c=this._chainedTweens.length;l<c;l++)this._chainedTweens[l].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},e.prototype._updateProperties=function(t,r,n,i){for(var o in n)if(r[o]!==void 0){var s=r[o]||0,l=n[o],c=Array.isArray(t[o]),u=Array.isArray(l),f=!c&&u;f?t[o]=this._interpolationFunction(l,i):typeof l=="object"&&l?this._updateProperties(t[o],s,l,i):(l=this._handleRelativeValue(s,l),typeof l=="number"&&(t[o]=s+(l-s)*i))}},e.prototype._handleRelativeValue=function(t,r){return typeof r!="string"?r:r.charAt(0)==="+"||r.charAt(0)==="-"?t+parseFloat(r):parseFloat(r)},e.prototype._swapEndStartRepeatValues=function(t){var r=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=r},e}(),Se=vs;Se.getAll.bind(Se);Se.removeAll.bind(Se);Se.add.bind(Se);Se.remove.bind(Se);Se.update.bind(Se);function Pt(){return Pt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Pt.apply(this,arguments)}var ws=function(t,r){return r&&r<A.Children.count(t)?r:0},dp=function(t,r){if(typeof window<"u"&&Array.isArray(r))return r.find(function(n){return n.breakpoint<=t})},Yi={linear:ge.Linear.None,ease:ge.Quadratic.InOut,"ease-in":ge.Quadratic.In,"ease-out":ge.Quadratic.Out,cubic:ge.Cubic.InOut,"cubic-in":ge.Cubic.In,"cubic-out":ge.Cubic.Out},Ss=function(t){return t?Yi[t]:Yi.linear},Ts=function(t,r,n){var i=t.prevArrow,o=t.infinite,s=r<=0&&!o,l={"data-type":"prev","aria-label":"Previous Slide",disabled:s,onClick:n};if(i)return A.cloneElement(i,Pt({className:(i.props.className||"")+" nav "+(s?"disabled":"")},l));var c="nav default-nav "+(s?"disabled":"");return A.createElement("button",Object.assign({type:"button",className:c},l),A.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},A.createElement("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"})))},Es=function(t,r,n){var i=t.nextArrow,o=t.infinite,s=t.children,l=1;"slidesToScroll"in t&&(l=t.slidesToScroll||1);var c=r>=A.Children.count(s)-l&&!o,u={"data-type":"next","aria-label":"Next Slide",disabled:c,onClick:n};if(i)return A.cloneElement(i,Pt({className:(i.props.className||"")+" nav "+(c?"disabled":"")},u));var f="nav default-nav "+(c?"disabled":"");return A.createElement("button",Object.assign({type:"button",className:f},u),A.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},A.createElement("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})))},fp=function(t,r,n){return A.createElement("li",{key:r},A.createElement("button",Object.assign({type:"button",className:"each-slideshow-indicator "+(t?"active":"")},n)))},hp=function(t,r,n,i){return A.cloneElement(i,Pt({className:i.props.className+" "+(t?"active":""),key:r},n))},js=function(t,r,n,i){var o=t.children,s=t.indicators,l=1;i?l=i==null?void 0:i.settings.slidesToScroll:"slidesToScroll"in t&&(l=t.slidesToScroll||1);var c=Math.ceil(A.Children.count(o)/l);return A.createElement("ul",{className:"indicators"},Array.from({length:c},function(u,f){var d={"data-key":f,"aria-label":"Go to slide "+(f+1),onClick:n},h=Math.floor((r+l-1)/l)===f;return typeof s=="function"?hp(h,f,d,s(f)):fp(h,f,d)}))},kr={duration:5e3,transitionDuration:1e3,defaultIndex:0,infinite:!0,autoplay:!0,indicators:!1,arrows:!0,pauseOnHover:!0,easing:"linear",canSwipe:!0,cssClass:"",responsive:[]},Qn=A.forwardRef(function(e,t){var r=g.useState(ws(e.children,e.defaultIndex)),n=r[0],i=r[1],o=g.useRef(null),s=g.useRef(null),l=g.useRef(new Kn),c=g.useRef(),u=g.useRef(),f=g.useMemo(function(){return A.Children.count(e.children)},[e.children]),d=g.useCallback(function(){if(s.current&&o.current){var z=o.current.clientWidth,$=z*f;s.current.style.width=$+"px";for(var N=0;N<s.current.children.length;N++){var M=s.current.children[N];M&&(M.style.width=z+"px",M.style.left=N*-z+"px",M.style.display="block")}}},[o,s,f]),h=g.useCallback(function(){o.current&&(u.current=new ys(function(z){z&&d()}),u.current.observe(o.current))},[o,d]),b=g.useCallback(function(){var z=e.autoplay,$=e.children,N=e.duration,M=e.infinite;z&&A.Children.count($)>1&&(M||n<A.Children.count($)-1)&&(c.current=setTimeout(T,N))},[e,n]);g.useEffect(function(){return h(),function(){l.current.removeAll(),clearTimeout(c.current),y()}},[h,l]),g.useEffect(function(){clearTimeout(c.current),b()},[n,e.autoplay,b]),g.useEffect(function(){d()},[f,d]),g.useImperativeHandle(t,function(){return{goNext:function(){T()},goBack:function(){j()},goTo:function($,N){N!=null&&N.skipTransition?i($):F($)}}});var y=function(){u.current&&o.current&&u.current.unobserve(o.current)},v=function(){e.pauseOnHover&&clearTimeout(c.current)},w=function(){var $=e.pauseOnHover,N=e.autoplay,M=e.duration;$&&N&&(c.current=setTimeout(function(){return T()},M))},T=function(){var $=e.children,N=e.infinite;!N&&n===A.Children.count($)-1||U((n+1)%A.Children.count($))},j=function(){var $=e.children,N=e.infinite;!N&&n===0||U(n===0?A.Children.count($)-1:n-1)},D=function($){var N=$.currentTarget;N.dataset.type==="prev"?j():T()},L=function z(){requestAnimationFrame(z),l.current.update()},U=function($){var N=l.current.getAll();if(!N.length){var M;(M=s.current)!=null&&M.children[$]||($=0),clearTimeout(c.current);var de={opacity:0,scale:1};L();var q=new bs(de,l.current).to({opacity:1,scale:e.scale},e.transitionDuration).onUpdate(function(J){s.current&&(s.current.children[$].style.opacity=J.opacity,s.current.children[n].style.opacity=1-J.opacity,s.current.children[n].style.transform="scale("+J.scale+")")});q.easing(Ss(e.easing)),q.onStart(function(){typeof e.onStartChange=="function"&&e.onStartChange(n,$)}),q.onComplete(function(){s.current&&(i($),s.current.children[n].style.transform="scale(1)"),typeof e.onChange=="function"&&e.onChange(n,$)}),q.start()}},F=function($){$!==n&&U($)},R=function($){var N=$.currentTarget;N.dataset.key&&parseInt(N.dataset.key)!==n&&F(parseInt(N.dataset.key))};return A.createElement("div",{dir:"ltr","aria-roledescription":"carousel"},A.createElement("div",{className:"react-slideshow-container "+(e.cssClass||""),onMouseEnter:v,onMouseOver:v,onMouseLeave:w},e.arrows&&Ts(e,n,D),A.createElement("div",{className:"react-slideshow-fadezoom-wrapper "+e.cssClass,ref:o},A.createElement("div",{className:"react-slideshow-fadezoom-images-wrap",ref:s},(A.Children.map(e.children,function(z){return z})||[]).map(function(z,$){return A.createElement("div",{style:{opacity:$===n?"1":"0",zIndex:$===n?"1":"0"},"data-index":$,key:$,"aria-roledescription":"slide","aria-hidden":$===n?"false":"true"},z)}))),e.arrows&&Es(e,n,D)),e.indicators&&js(e,n,R))});Qn.defaultProps=kr;var pp=A.forwardRef(function(e,t){return A.createElement(Qn,Object.assign({},e,{scale:1,ref:t}))});pp.defaultProps=kr;var mp=A.forwardRef(function(e,t){return A.createElement(Qn,Object.assign({},e,{ref:t}))});mp.defaultProps=kr;var _s=A.forwardRef(function(e,t){var r=g.useState(ws(e.children,e.defaultIndex)),n=r[0],i=r[1],o=g.useState(0),s=o[0],l=o[1],c=g.useRef(null),u=g.useRef(null),f=g.useRef(new Kn),d=g.useMemo(function(){return dp(s,e.responsive)},[s,e.responsive]),h=g.useMemo(function(){return d?d.settings.slidesToScroll:e.slidesToScroll||1},[d,e.slidesToScroll]),b=g.useMemo(function(){return d?d.settings.slidesToShow:e.slidesToShow||1},[d,e.slidesToShow]),y=g.useMemo(function(){return A.Children.count(e.children)},[e.children]),v=g.useMemo(function(){return s/b},[s,b]),w=g.useRef(),T=g.useRef(),j,D=!1,L=0,U=e.vertical?"translateY":"translateX",F=e.vertical?"clientY":"clientX",R=e.vertical?"pageY":"pageX",z=g.useCallback(function(){if(u.current){var P=s*u.current.children.length,_=e.vertical?"height":"width";u.current.style[_]=P+"px",e.vertical&&c.current&&(c.current.style[_]=s+"px");for(var C=0;C<u.current.children.length;C++){var I=u.current.children[C];I&&(e.vertical||(I.style[_]=v+"px"),I.style.display="block")}}},[s,v]),$=g.useCallback(function(){c.current&&(T.current=new ys(function(P){P&&ze()}),T.current.observe(c.current))},[c]),N=g.useCallback(function(){var P=e.autoplay,_=e.infinite,C=e.duration;P&&(_||n<y-1)&&(w.current=setTimeout(J,C))},[e,y,n]);g.useEffect(function(){z()},[s,z]),g.useEffect(function(){return $(),function(){f.current.removeAll(),clearTimeout(w.current),M()}},[c,$,f]),g.useEffect(function(){clearTimeout(w.current),N()},[n,s,e.autoplay,N]),g.useImperativeHandle(t,function(){return{goNext:function(){J()},goBack:function(){ae()},goTo:function(_,C){C!=null&&C.skipTransition?i(_):it(_)}}});var M=function(){T&&c.current&&T.current.unobserve(c.current)},de=function(){e.pauseOnHover&&clearTimeout(w.current)},q=function(_){if(e.canSwipe&&D){var C;if(window.TouchEvent&&_.nativeEvent instanceof TouchEvent?C=_.nativeEvent.touches[0][R]:C=_.nativeEvent[F],C&&j){var I=v*(n+_e()),re=C-j;if(!e.infinite&&n===y-h&&re<0||!e.infinite&&n===0&&re>0)return;L=re,I-=L,u.current.style.transform=U+"(-"+I+"px)"}}},J=function(){if(!(!e.infinite&&n===y-h)){var _=ot(n+h);fe(_)}},ae=function(){if(!(!e.infinite&&n===0)){var _=n-h;_%h&&(_=Math.ceil(_/h)*h),fe(_)}},Ht=function(_){var C=_.currentTarget;if(C.dataset.key){var I=parseInt(C.dataset.key);it(I*h)}},it=function(_){fe(ot(_))},ot=function(_){return _<y&&_+h>y&&(y-h)%h?y-h:_},st=function(){D?ie():e.pauseOnHover&&e.autoplay&&(w.current=setTimeout(J,e.duration))},at=function(_){var C=_.currentTarget.dataset;C.type==="next"?J():ae()},Re=function(){return A.Children.toArray(e.children).slice(-b).map(function(_,C){return A.createElement("div",{"data-index":C-b,"aria-roledescription":"slide","aria-hidden":"true",key:C-b},_)})},le=function(){if(!(!e.infinite&&b===h))return A.Children.toArray(e.children).slice(0,b).map(function(_,C){return A.createElement("div",{"data-index":y+C,"aria-roledescription":"slide","aria-hidden":"true",key:y+C},_)})},ze=function(){var _=e.vertical?"clientHeight":"clientWidth";e.vertical?u.current&&l(u.current.children[0][_]):c.current&&l(c.current[_])},je=function(_){e.canSwipe&&(window.TouchEvent&&_.nativeEvent instanceof TouchEvent?j=_.nativeEvent.touches[0][R]:j=_.nativeEvent[F],clearTimeout(w.current),D=!0)},ie=function(){e.canSwipe&&(D=!1,Math.abs(L)/s>.2?L<0?J():ae():Math.abs(L)>0&&fe(n,300))},lt=function P(){requestAnimationFrame(P),f.current.update()},fe=function(_,C){var I=C||e.transitionDuration,re=n,Be=f.current.getAll();if(c.current){var Ue=e.vertical?"clientHeight":"clientWidth",Wt=c.current[Ue]/b;if(!Be.length){clearTimeout(w.current);var Tt={margin:-Wt*(re+_e())+L},dt=new bs(Tt,f.current).to({margin:-Wt*(_+_e())},I).onUpdate(function(m){u.current&&(u.current.style.transform=U+"("+m.margin+"px)")});dt.easing(Ss(e.easing)),lt();var Ce=_;Ce<0?Ce=y-h:Ce>=y&&(Ce=0),dt.onStart(function(){typeof e.onStartChange=="function"&&e.onStartChange(n,Ce)}),dt.onComplete(function(){L=0,typeof e.onChange=="function"&&e.onChange(n,Ce),i(Ce)}),dt.start()}}},ct=function(_){return _<n+b&&_>=n},_e=function(){return e.infinite?b:0},ut={transform:U+"(-"+(n+_e())*v+"px)"};return A.createElement("div",{dir:"ltr","aria-roledescription":"carousel"},A.createElement("div",{className:"react-slideshow-container",onMouseEnter:de,onMouseOver:de,onMouseLeave:st,onMouseDown:je,onMouseUp:ie,onMouseMove:q,onTouchStart:je,onTouchEnd:ie,onTouchCancel:ie,onTouchMove:q},e.arrows&&Ts(e,n,at),A.createElement("div",{className:"react-slideshow-wrapper slide "+(e.cssClass||""),ref:c},A.createElement("div",{className:"images-wrap "+(e.vertical?"vertical":"horizontal"),style:ut,ref:u},e.infinite&&Re(),(A.Children.map(e.children,function(P){return P})||[]).map(function(P,_){var C=ct(_);return A.createElement("div",{"data-index":_,key:_,className:C?"active":"","aria-roledescription":"slide","aria-hidden":C?"false":"true"},P)}),le())),e.arrows&&Es(e,n,at)),!!e.indicators&&js(e,n,Ht,d))});_s.defaultProps=kr;function gp(e){return Dt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"}}]})(e)}function xp(e){return Dt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"}}]})(e)}const yp=p.div`
  width: 100%;
  max-width: 336px;
  height: auto;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 704px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 882px;
    height: auto;
  }
`,he=p.div`
  width: 100%;
  height: auto;
`,pe=p.img`
  width: 100%;
  border-radius: 1.2rem;
  height: 224px;

  @media (min-width: 768px) {
    height: 470px;
  }

  @media (min-width: 1440px) {
    height: 640px;
  }
`,Cs=p(gp)`
  font-size: 1.6rem;
  color: ${e=>e.theme.colors.slideArrowButtons};
  transition: 0.2s ease-in-out;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`,Os=p(xp)`
  font-size: 1.6rem;
  color: ${e=>e.theme.colors.slideArrowButtons};
  transition: 0.3s linear;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`,vp=p.button`
  border: none;
  outline: none;
  background: none;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50rem;
  background-color: ${e=>e.theme.colors.iconsBgColorLowOp};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 0.8rem;

  @media (min-width: 768px) {
    width: 3.8rem;
    height: 3.8rem;
    margin-left: 1.2rem;
  }

  @media (min-width: 1440px) {
    width: 4.4rem;
    height: 4.4rem;
  }

  &:hover {
    ${Cs} {
      color: ${e=>e.theme.colors.accentColor};
    }
  }
`,bp=p.button`
  border: none;
  outline: none;
  background: none;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50rem;
  background-color: ${e=>e.theme.colors.iconsBgColorLowOp};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.8rem;

  @media (min-width: 768px) {
    width: 3.8rem;
    height: 3.8rem;
    margin-right: 1.2rem;
  }

  @media (min-width: 1440px) {
    width: 4.4rem;
    height: 4.4rem;
  }

  &:hover {
    ${Os} {
      color: ${e=>e.theme.colors.accentColor};
    }
  }
`;function wp(){const e={prevArrow:a.jsx(vp,{children:a.jsx(Cs,{})}),nextArrow:a.jsx(bp,{children:a.jsx(Os,{})})};return a.jsx(yp,{children:a.jsxs(_s,{...e,duration:5e3,autoplay:!0,infinite:!0,pauseOnHover:!1,children:[a.jsx(he,{children:a.jsx(pe,{src:"images/slide1.jpg",alt:"bodybuilding competition",loading:"lazy"})}),a.jsx(he,{children:a.jsx(pe,{src:"images/slide2.jpg",alt:"bodybuilding competition",loading:"lazy"})}),a.jsx(he,{children:a.jsx(pe,{src:"images/slide3.jpg",alt:"bodybuilding competition",loading:"lazy"})}),a.jsx(he,{children:a.jsx(pe,{src:"images/slide4.jpg",alt:"bodybuilding competition",loading:"lazy"})}),a.jsx(he,{children:a.jsx(pe,{src:"images/slide5.jpg",alt:"bodybuilding competition",loading:"lazy"})}),a.jsx(he,{children:a.jsx(pe,{src:"images/slide6.jpg",alt:"bodybuilding",loading:"lazy"})}),a.jsx(he,{children:a.jsx(pe,{src:"images/slide7.jpg",alt:"personal trainer",loading:"lazy"})}),a.jsx(he,{children:a.jsx(pe,{src:"images/slide8.jpg",alt:"bodybuilding",loading:"lazy"})}),a.jsx(he,{children:a.jsx(pe,{src:"images/slide9.jpg",alt:"bodybuilding",loading:"lazy"})}),a.jsx(he,{children:a.jsx(pe,{src:"images/slide10.jpg",alt:"bodybuilding",loading:"lazy"})}),a.jsx(he,{children:a.jsx(pe,{src:"images/slide11.jpg",alt:"bodybuilding",loading:"lazy"})})]})})}function Sp(e){return Dt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M20.2739 9.86883L16.8325 4.95392L18.4708 3.80676L21.9122 8.72167L20.2739 9.86883Z",fill:"currentColor"}},{tag:"path",attr:{d:"M18.3901 12.4086L16.6694 9.95121L8.47783 15.687L10.1985 18.1444L8.56023 19.2916L3.97162 12.7383L5.60992 11.5912L7.33068 14.0487L15.5222 8.31291L13.8015 5.8554L15.4398 4.70825L20.0284 11.2615L18.3901 12.4086Z",fill:"currentColor"}},{tag:"path",attr:{d:"M20.7651 7.08331L22.4034 5.93616L21.2562 4.29785L19.6179 5.445L20.7651 7.08331Z",fill:"currentColor"}},{tag:"path",attr:{d:"M7.16753 19.046L3.72607 14.131L2.08777 15.2782L5.52923 20.1931L7.16753 19.046Z",fill:"currentColor"}},{tag:"path",attr:{d:"M4.38208 18.5549L2.74377 19.702L1.59662 18.0637L3.23492 16.9166L4.38208 18.5549Z",fill:"currentColor"}}]})(e)}function Tp(e){return Dt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M211.832 39.06c-15.022 15.31-15.894 22.83-23.473 43.903 2.69 9.14 5.154 16.927 9.148 25.117 5.158.283 10.765.47 15.342.43-6.11-10.208-8.276-19.32-4.733-35.274 4.3 19.05 12.847 29.993 21.203 34.332 3.032-.334 5.957-.714 8.776-1.146-6.255-10.337-8.494-19.47-4.914-35.588 3.897 17.27 11.287 27.876 18.86 32.94 4.658-1.043 9.283-2.243 13.927-3.534-5.517-9.69-7.36-18.692-3.97-33.957 3.357 14.876 9.307 24.81 15.732 30.516 5.095-1.57 9.296-2.898 13.852-4.347-.685-5.782-.416-12.187 1.064-19.115l1.883-8.8 17.603 3.76-1.88 8.804c-3.636 17.008 1.324 24.42 7.306 28.666 5.98 4.244 14.69 3.46 16.03 2.6l7.576-4.86 9.72 15.15c-3.857 2.34-7.9 5.44-11.822 7.06 18.65 27.678 32.183 61.465 24.756 93.55-2.365 9.474-6.03 18.243-11.715 24.986 12.725 12.13 21.215 22.026 31.032 34.5-3.713-2.387-7.586-4.844-11.692-7.37-11.397-7.01-23.832-14.214-34.98-19.802-16.012-7.8-31.367-18.205-47.73-20.523-22.552-2.967-46.27 4.797-73.32 21.06 7.872 8.72 13.282 15.474 20.312 24.288-6.98-4.338-14.652-9.07-23.16-14.23-32.554-17.48-65.39-48.227-100.438-49.99-30.56-1.092-59.952 14.955-89.677 38.568L18 254.293V494h31.963c45.184-17.437 80.287-57.654 97.03-94.52l.25-.564.325-.52c9.463-15.252 11.148-29.688 16.79-44.732 5.645-15.044 16.907-29.718 41.884-38.756 4.353-2.16 5.07-1.415 8.633 1.395 30.468 24.01 57.29 32.02 83.24 32.35 32.61-1.557 58.442-9.882 85.682-19.38-3.966 3.528-8.77 7.21-13.986 10.762-15.323 10.436-34.217 19.928-46.304 24.8-14.716 2.006-28.36 2.416-41.967.616-9.96 12.09-25.574 20.358-37.35 26.673 63.92 14.023 115.88.91 167.386-22.896-9.522-1.817-19.008-3.692-27.994-5.42 31.634-4.422 64.984-3.766 94.705-3.53 4.084-.02 7.213-.453 8.7-.886 14.167-51.072-4.095-97.893-34.294-145.216-30.263-47.425-72.18-94.107-101.896-143.04-21.1-17.257-48.6-31.455-77.522-46.175-20.386 4.25-41.026 9.336-61.443 14.1zm85.385 70.49c-11.678 3.6-23.71 7.425-33.852 10.012 2.527 4.93 3.735 10.664 3.395 16.202 11.028.877 21.082-2.018 28.965-6.356 4.845-2.666 8.74-6.048 11.414-8.96-3.854-2.735-7.26-6.41-9.923-10.9zm-54.213 14.698c-11.76 1.143-24.59 2.362-35.06 2.236 2.39 4.772 3.78 12.067 8.51 14.84 11.18 1.164 20.6 1.997 29.91-1.746 5.435-3.214 1.818-15.058-3.36-15.33zm-34.98 209.332c-17.593 7.233-22.586 15.14-26.813 26.406-3.998 10.66-6.227 25.076-14.48 41.014 32.29-6.38 69.625-21.23 93.852-40.088-17.017-5.098-34.553-13.852-52.557-27.332zm9.318 71.385c-18.723 7.237-40.836 16.144-59.696 14.062C143.774 446.68 124.012 474.03 91.762 494h84.68c21.564-29.798 38.067-56.575 40.9-89.035z"}}]})(e)}const Ep=p.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3.2rem;
    justify-content: space-between;
    align-items: center;
  }
`,jp=p.img`
  width: 100%;
  border-radius: 1.2rem;
`,rr=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 336px;
  min-height: 330px;
  padding: 4.8rem 2.4rem 2.4rem;
  border-radius: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: ${e=>e.theme.colors.aboutBgColor};
  border-bottom: 1px solid ${e=>e.theme.colors.accentColorLowOp};

  @media (min-width: 768px) {
    min-height: 328px;
    max-width: 100%;
    width: calc((100% - 2.4rem) / 2);
  }
  @media (min-width: 1440px) {
    min-height: auto;
    width: calc((100% - 2.4rem) / 2);
    max-width: 100%;
  }
`,_p=p.div`
  border-radius: 20px;
  padding: 0;
  width: 100%;
  max-width: 336px;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  @media (min-width: 768px) {
    gap: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 4.8rem;
    column-gap: 2.4rem;
    width: 100%;
    max-width: 100%;
  }
`,nr=p.div`
  position: absolute;
  top: -3rem;
  align-self: center;
  font-size: 3.6rem;
  padding: 1.2rem;
  border-radius: 50rem;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 1.2rem;
  z-index: 1;
  background-color: ${e=>e.theme.colors.mainBgColor};
  border-bottom: 1px solid ${e=>e.theme.colors.accentColor};
`,ir=p.h3`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${ne};
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 0.8rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid ${e=>e.theme.colors.accentColorLowOp};

  @media (min-width: 768px) {
    font-size: 1.8rem;
    font-size: 2rem;
  }
  @media (min-width: 1440px) {
    font-size: 2.4rem;
  }
`,xe=p.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${bt};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,Xr=p.strong`
  color: ${e=>e.theme.colors.accentColor};
  font-family: ${ne};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
`,Cp=p.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,Ve=p.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`,qe=p.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.greenColor};
`;function Op(){return a.jsxs(Ep,{id:"about",children:[a.jsx("div",{children:a.jsx(jp,{src:"images/about.jpg",alt:"Personal Trainer in UFC Gym"})}),a.jsxs(_p,{children:[a.jsxs(rr,{children:[a.jsx(nr,{children:a.jsx(Ea,{})}),a.jsx(ir,{children:"Certified Fitness Professional"}),a.jsxs(Cp,{children:[a.jsxs(Ve,{children:[a.jsx(qe,{children:a.jsx(He,{})}),a.jsx(xe,{children:"Certified US Personal Trainer"})]}),a.jsxs(Ve,{children:[a.jsx(qe,{children:a.jsx(He,{})}),a.jsx(xe,{children:"Certified Bodybuilding Specialist"})]}),a.jsxs(Ve,{children:[a.jsx(qe,{children:a.jsx(He,{})}),a.jsx(xe,{children:"Certified MMA/Boxing coach"})]}),a.jsxs(Ve,{children:[a.jsx(qe,{children:a.jsx(He,{})}),a.jsx(xe,{children:"Certified Nutritionist"})]}),a.jsxs(Ve,{children:[a.jsx(qe,{children:a.jsx(He,{})}),a.jsx(xe,{children:"Master's in Physical Therapy"})]}),a.jsxs(Ve,{children:[a.jsx(qe,{children:a.jsx(He,{})}),a.jsx(xe,{children:"Certified Personal Trainer in Ukraine"})]}),a.jsxs(Ve,{children:[a.jsx(qe,{children:a.jsx(He,{})}),a.jsx(xe,{children:"Certified Personal Trainer in UAE"})]})]})]}),a.jsxs(rr,{children:[a.jsx(nr,{children:a.jsx(ia,{})}),a.jsx(ir,{children:"Global Expertise"}),a.jsxs(xe,{children:[a.jsx(Xr,{children:"14+ Years of International Experience."})," ","Explore fitness with a trainer who brings a wealth of knowledge from diverse countries, offering a global perspective to tailor your training."]})]}),a.jsxs(rr,{children:[a.jsx(nr,{children:a.jsx(Sp,{})}),a.jsx(ir,{children:"Unlock Your Full Potential"}),a.jsxs(xe,{children:[a.jsx(Xr,{children:"Build fitness plans for individual goals."})," ","Experience fitness on a personal level with programs designed exclusively for you, based on your unique aspirations and current fitness levels."]})]}),a.jsxs(rr,{children:[a.jsx(nr,{children:a.jsx(Tp,{})}),a.jsx(ir,{children:"Journey Through Sports"}),a.jsxs(xe,{children:[a.jsx(Xr,{children:"Train with a champion."})," ","Beginning my sports journey at the age of 4, I participated in gymnastics, football, bodybuilding, and MMA, achieving success as both a champion and finalist in national and international competitions. I'm here to guide you to success."]})]})]})]})}function $s(e,t){return function(){return e.apply(t,arguments)}}const{toString:$p}=Object.prototype,{getPrototypeOf:Jn}=Object,Dr=(e=>t=>{const r=$p.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Ee=e=>(e=e.toLowerCase(),t=>Dr(t)===e),Lr=e=>t=>typeof t===e,{isArray:St}=Array,kt=Lr("undefined");function Ap(e){return e!==null&&!kt(e)&&e.constructor!==null&&!kt(e.constructor)&&ue(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const As=Ee("ArrayBuffer");function Fp(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&As(e.buffer),t}const Rp=Lr("string"),ue=Lr("function"),Fs=Lr("number"),Nr=e=>e!==null&&typeof e=="object",Ip=e=>e===!0||e===!1,lr=e=>{if(Dr(e)!=="object")return!1;const t=Jn(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Mp=Ee("Date"),Pp=Ee("File"),kp=Ee("Blob"),Dp=Ee("FileList"),Lp=e=>Nr(e)&&ue(e.pipe),Np=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ue(e.append)&&((t=Dr(e))==="formdata"||t==="object"&&ue(e.toString)&&e.toString()==="[object FormData]"))},zp=Ee("URLSearchParams"),Bp=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bt(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),St(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(n=0;n<s;n++)l=o[n],t.call(null,e[l],l,e)}}function Rs(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,i;for(;n-- >0;)if(i=r[n],t===i.toLowerCase())return i;return null}const Is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ms=e=>!kt(e)&&e!==Is;function wn(){const{caseless:e}=Ms(this)&&this||{},t={},r=(n,i)=>{const o=e&&Rs(t,i)||i;lr(t[o])&&lr(n)?t[o]=wn(t[o],n):lr(n)?t[o]=wn({},n):St(n)?t[o]=n.slice():t[o]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&Bt(arguments[n],r);return t}const Up=(e,t,r,{allOwnKeys:n}={})=>(Bt(t,(i,o)=>{r&&ue(i)?e[o]=$s(i,r):e[o]=i},{allOwnKeys:n}),e),Hp=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Wp=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Vp=(e,t,r,n)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!n||n(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=r!==!1&&Jn(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},qp=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Gp=e=>{if(!e)return null;if(St(e))return e;let t=e.length;if(!Fs(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Kp=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Jn(Uint8Array)),Qp=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Jp=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Yp=Ee("HTMLFormElement"),Zp=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),Zi=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Xp=Ee("RegExp"),Ps=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Bt(r,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(n[o]=s||i)}),Object.defineProperties(e,n)},em=e=>{Ps(e,(t,r)=>{if(ue(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(ue(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},tm=(e,t)=>{const r={},n=i=>{i.forEach(o=>{r[o]=!0})};return St(e)?n(e):n(String(e).split(t)),r},rm=()=>{},nm=(e,t)=>(e=+e,Number.isFinite(e)?e:t),en="abcdefghijklmnopqrstuvwxyz",Xi="0123456789",ks={DIGIT:Xi,ALPHA:en,ALPHA_DIGIT:en+en.toUpperCase()+Xi},im=(e=16,t=ks.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function om(e){return!!(e&&ue(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const sm=e=>{const t=new Array(10),r=(n,i)=>{if(Nr(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[i]=n;const o=St(n)?[]:{};return Bt(n,(s,l)=>{const c=r(s,i+1);!kt(c)&&(o[l]=c)}),t[i]=void 0,o}}return n};return r(e,0)},am=Ee("AsyncFunction"),lm=e=>e&&(Nr(e)||ue(e))&&ue(e.then)&&ue(e.catch),x={isArray:St,isArrayBuffer:As,isBuffer:Ap,isFormData:Np,isArrayBufferView:Fp,isString:Rp,isNumber:Fs,isBoolean:Ip,isObject:Nr,isPlainObject:lr,isUndefined:kt,isDate:Mp,isFile:Pp,isBlob:kp,isRegExp:Xp,isFunction:ue,isStream:Lp,isURLSearchParams:zp,isTypedArray:Kp,isFileList:Dp,forEach:Bt,merge:wn,extend:Up,trim:Bp,stripBOM:Hp,inherits:Wp,toFlatObject:Vp,kindOf:Dr,kindOfTest:Ee,endsWith:qp,toArray:Gp,forEachEntry:Qp,matchAll:Jp,isHTMLForm:Yp,hasOwnProperty:Zi,hasOwnProp:Zi,reduceDescriptors:Ps,freezeMethods:em,toObjectSet:tm,toCamelCase:Zp,noop:rm,toFiniteNumber:nm,findKey:Rs,global:Is,isContextDefined:Ms,ALPHABET:ks,generateString:im,isSpecCompliantForm:om,toJSONObject:sm,isAsyncFn:am,isThenable:lm};function B(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}x.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ds=B.prototype,Ls={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ls[e]={value:e}});Object.defineProperties(B,Ls);Object.defineProperty(Ds,"isAxiosError",{value:!0});B.from=(e,t,r,n,i,o)=>{const s=Object.create(Ds);return x.toFlatObject(e,s,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),B.call(s,e.message,t,r,n,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const cm=null;function Sn(e){return x.isPlainObject(e)||x.isArray(e)}function Ns(e){return x.endsWith(e,"[]")?e.slice(0,-2):e}function eo(e,t,r){return e?e.concat(t).map(function(i,o){return i=Ns(i),!r&&o?"["+i+"]":i}).join(r?".":""):t}function um(e){return x.isArray(e)&&!e.some(Sn)}const dm=x.toFlatObject(x,{},null,function(t){return/^is[A-Z]/.test(t)});function zr(e,t,r){if(!x.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=x.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,w){return!x.isUndefined(w[v])});const n=r.metaTokens,i=r.visitor||f,o=r.dots,s=r.indexes,c=(r.Blob||typeof Blob<"u"&&Blob)&&x.isSpecCompliantForm(t);if(!x.isFunction(i))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(x.isDate(y))return y.toISOString();if(!c&&x.isBlob(y))throw new B("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(y)||x.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function f(y,v,w){let T=y;if(y&&!w&&typeof y=="object"){if(x.endsWith(v,"{}"))v=n?v:v.slice(0,-2),y=JSON.stringify(y);else if(x.isArray(y)&&um(y)||(x.isFileList(y)||x.endsWith(v,"[]"))&&(T=x.toArray(y)))return v=Ns(v),T.forEach(function(D,L){!(x.isUndefined(D)||D===null)&&t.append(s===!0?eo([v],L,o):s===null?v:v+"[]",u(D))}),!1}return Sn(y)?!0:(t.append(eo(w,v,o),u(y)),!1)}const d=[],h=Object.assign(dm,{defaultVisitor:f,convertValue:u,isVisitable:Sn});function b(y,v){if(!x.isUndefined(y)){if(d.indexOf(y)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(y),x.forEach(y,function(T,j){(!(x.isUndefined(T)||T===null)&&i.call(t,T,x.isString(j)?j.trim():j,v,h))===!0&&b(T,v?v.concat(j):[j])}),d.pop()}}if(!x.isObject(e))throw new TypeError("data must be an object");return b(e),t}function to(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Yn(e,t){this._pairs=[],e&&zr(e,this,t)}const zs=Yn.prototype;zs.append=function(t,r){this._pairs.push([t,r])};zs.toString=function(t){const r=t?function(n){return t.call(this,n,to)}:to;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function fm(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Bs(e,t,r){if(!t)return e;const n=r&&r.encode||fm,i=r&&r.serialize;let o;if(i?o=i(t,r):o=x.isURLSearchParams(t)?t.toString():new Yn(t,r).toString(n),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ro{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){x.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Us={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},hm=typeof URLSearchParams<"u"?URLSearchParams:Yn,pm=typeof FormData<"u"?FormData:null,mm=typeof Blob<"u"?Blob:null,gm={isBrowser:!0,classes:{URLSearchParams:hm,FormData:pm,Blob:mm},protocols:["http","https","file","blob","url","data"]},Hs=typeof window<"u"&&typeof document<"u",xm=(e=>Hs&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),ym=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",vm=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Hs,hasStandardBrowserEnv:xm,hasStandardBrowserWebWorkerEnv:ym},Symbol.toStringTag,{value:"Module"})),ve={...vm,...gm};function bm(e,t){return zr(e,new ve.classes.URLSearchParams,Object.assign({visitor:function(r,n,i,o){return ve.isNode&&x.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function wm(e){return x.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Sm(e){const t={},r=Object.keys(e);let n;const i=r.length;let o;for(n=0;n<i;n++)o=r[n],t[o]=e[o];return t}function Ws(e){function t(r,n,i,o){let s=r[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=o>=r.length;return s=!s&&x.isArray(i)?i.length:s,c?(x.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!l):((!i[s]||!x.isObject(i[s]))&&(i[s]=[]),t(r,n,i[s],o)&&x.isArray(i[s])&&(i[s]=Sm(i[s])),!l)}if(x.isFormData(e)&&x.isFunction(e.entries)){const r={};return x.forEachEntry(e,(n,i)=>{t(wm(n),i,r,0)}),r}return null}function Tm(e,t,r){if(x.isString(e))try{return(t||JSON.parse)(e),x.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const Zn={transitional:Us,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,o=x.isObject(t);if(o&&x.isHTMLForm(t)&&(t=new FormData(t)),x.isFormData(t))return i&&i?JSON.stringify(Ws(t)):t;if(x.isArrayBuffer(t)||x.isBuffer(t)||x.isStream(t)||x.isFile(t)||x.isBlob(t))return t;if(x.isArrayBufferView(t))return t.buffer;if(x.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return bm(t,this.formSerializer).toString();if((l=x.isFileList(t))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return zr(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return o||i?(r.setContentType("application/json",!1),Tm(t)):t}],transformResponse:[function(t){const r=this.transitional||Zn.transitional,n=r&&r.forcedJSONParsing,i=this.responseType==="json";if(t&&x.isString(t)&&(n&&!this.responseType||i)){const s=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?B.from(l,B.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ve.classes.FormData,Blob:ve.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch"],e=>{Zn.headers[e]={}});const Xn=Zn,Em=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jm=e=>{const t={};let r,n,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),r=s.substring(0,i).trim().toLowerCase(),n=s.substring(i+1).trim(),!(!r||t[r]&&Em[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},no=Symbol("internals");function jt(e){return e&&String(e).trim().toLowerCase()}function cr(e){return e===!1||e==null?e:x.isArray(e)?e.map(cr):String(e)}function _m(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Cm=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function tn(e,t,r,n,i){if(x.isFunction(n))return n.call(this,t,r);if(i&&(t=r),!!x.isString(t)){if(x.isString(n))return t.indexOf(n)!==-1;if(x.isRegExp(n))return n.test(t)}}function Om(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function $m(e,t){const r=x.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(i,o,s){return this[n].call(this,t,i,o,s)},configurable:!0})})}class Br{constructor(t){t&&this.set(t)}set(t,r,n){const i=this;function o(l,c,u){const f=jt(c);if(!f)throw new Error("header name must be a non-empty string");const d=x.findKey(i,f);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||c]=cr(l))}const s=(l,c)=>x.forEach(l,(u,f)=>o(u,f,c));return x.isPlainObject(t)||t instanceof this.constructor?s(t,r):x.isString(t)&&(t=t.trim())&&!Cm(t)?s(jm(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=jt(t),t){const n=x.findKey(this,t);if(n){const i=this[n];if(!r)return i;if(r===!0)return _m(i);if(x.isFunction(r))return r.call(this,i,n);if(x.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=jt(t),t){const n=x.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||tn(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let i=!1;function o(s){if(s=jt(s),s){const l=x.findKey(n,s);l&&(!r||tn(n,n[l],l,r))&&(delete n[l],i=!0)}}return x.isArray(t)?t.forEach(o):o(t),i}clear(t){const r=Object.keys(this);let n=r.length,i=!1;for(;n--;){const o=r[n];(!t||tn(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const r=this,n={};return x.forEach(this,(i,o)=>{const s=x.findKey(n,o);if(s){r[s]=cr(i),delete r[o];return}const l=t?Om(o):String(o).trim();l!==o&&delete r[o],r[l]=cr(i),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return x.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=t&&x.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[no]=this[no]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=jt(s);n[l]||($m(i,s),n[l]=!0)}return x.isArray(t)?t.forEach(o):o(t),this}}Br.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(Br.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});x.freezeMethods(Br);const Ae=Br;function rn(e,t){const r=this||Xn,n=t||r,i=Ae.from(n.headers);let o=n.data;return x.forEach(e,function(l){o=l.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Vs(e){return!!(e&&e.__CANCEL__)}function Ut(e,t,r){B.call(this,e??"canceled",B.ERR_CANCELED,t,r),this.name="CanceledError"}x.inherits(Ut,B,{__CANCEL__:!0});function Am(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new B("Request failed with status code "+r.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Fm=ve.hasStandardBrowserEnv?{write(e,t,r,n,i,o){const s=[e+"="+encodeURIComponent(t)];x.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),x.isString(n)&&s.push("path="+n),x.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Rm(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Im(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function qs(e,t){return e&&!Rm(t)?Im(e,t):t}const Mm=ve.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function i(o){let s=o;return t&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=i(window.location.href),function(s){const l=x.isString(s)?i(s):s;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}();function Pm(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function km(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),f=n[o];s||(s=u),r[i]=c,n[i]=u;let d=o,h=0;for(;d!==i;)h+=r[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const b=f&&u-f;return b?Math.round(h*1e3/b):void 0}}function io(e,t){let r=0;const n=km(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,l=o-r,c=n(l),u=o<=s;r=o;const f={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:c||void 0,estimated:c&&s&&u?(s-o)/c:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const Dm=typeof XMLHttpRequest<"u",Lm=Dm&&function(e){return new Promise(function(r,n){let i=e.data;const o=Ae.from(e.headers).normalize();let{responseType:s,withXSRFToken:l}=e,c;function u(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}let f;if(x.isFormData(i)){if(ve.hasStandardBrowserEnv||ve.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[v,...w]=f?f.split(";").map(T=>T.trim()).filter(Boolean):[];o.setContentType([v||"multipart/form-data",...w].join("; "))}}let d=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+w))}const h=qs(e.baseURL,e.url);d.open(e.method.toUpperCase(),Bs(h,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function b(){if(!d)return;const v=Ae.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),T={data:!s||s==="text"||s==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:v,config:e,request:d};Am(function(D){r(D),u()},function(D){n(D),u()},T),d=null}if("onloadend"in d?d.onloadend=b:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(b)},d.onabort=function(){d&&(n(new B("Request aborted",B.ECONNABORTED,e,d)),d=null)},d.onerror=function(){n(new B("Network Error",B.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const T=e.transitional||Us;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),n(new B(w,T.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,d)),d=null},ve.hasStandardBrowserEnv&&(l&&x.isFunction(l)&&(l=l(e)),l||l!==!1&&Mm(h))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&Fm.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in d&&x.forEach(o.toJSON(),function(w,T){d.setRequestHeader(T,w)}),x.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),s&&s!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",io(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",io(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=v=>{d&&(n(!v||v.type?new Ut(null,e,d):v),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const y=Pm(h);if(y&&ve.protocols.indexOf(y)===-1){n(new B("Unsupported protocol "+y+":",B.ERR_BAD_REQUEST,e));return}d.send(i||null)})},Tn={http:cm,xhr:Lm};x.forEach(Tn,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const oo=e=>`- ${e}`,Nm=e=>x.isFunction(e)||e===null||e===!1,Gs={getAdapter:e=>{e=x.isArray(e)?e:[e];const{length:t}=e;let r,n;const i={};for(let o=0;o<t;o++){r=e[o];let s;if(n=r,!Nm(r)&&(n=Tn[(s=String(r)).toLowerCase()],n===void 0))throw new B(`Unknown adapter '${s}'`);if(n)break;i[s||"#"+o]=n}if(!n){const o=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(oo).join(`
`):" "+oo(o[0]):"as no adapter specified";throw new B("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return n},adapters:Tn};function nn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ut(null,e)}function so(e){return nn(e),e.headers=Ae.from(e.headers),e.data=rn.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Gs.getAdapter(e.adapter||Xn.adapter)(e).then(function(n){return nn(e),n.data=rn.call(e,e.transformResponse,n),n.headers=Ae.from(n.headers),n},function(n){return Vs(n)||(nn(e),n&&n.response&&(n.response.data=rn.call(e,e.transformResponse,n.response),n.response.headers=Ae.from(n.response.headers))),Promise.reject(n)})}const ao=e=>e instanceof Ae?e.toJSON():e;function vt(e,t){t=t||{};const r={};function n(u,f,d){return x.isPlainObject(u)&&x.isPlainObject(f)?x.merge.call({caseless:d},u,f):x.isPlainObject(f)?x.merge({},f):x.isArray(f)?f.slice():f}function i(u,f,d){if(x.isUndefined(f)){if(!x.isUndefined(u))return n(void 0,u,d)}else return n(u,f,d)}function o(u,f){if(!x.isUndefined(f))return n(void 0,f)}function s(u,f){if(x.isUndefined(f)){if(!x.isUndefined(u))return n(void 0,u)}else return n(void 0,f)}function l(u,f,d){if(d in t)return n(u,f);if(d in e)return n(void 0,u)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,f)=>i(ao(u),ao(f),!0)};return x.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=c[f]||i,h=d(e[f],t[f],f);x.isUndefined(h)&&d!==l||(r[f]=h)}),r}const Ks="1.6.4",ei={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ei[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const lo={};ei.transitional=function(t,r,n){function i(o,s){return"[Axios v"+Ks+"] Transitional option '"+o+"'"+s+(n?". "+n:"")}return(o,s,l)=>{if(t===!1)throw new B(i(s," has been removed"+(r?" in "+r:"")),B.ERR_DEPRECATED);return r&&!lo[s]&&(lo[s]=!0,console.warn(i(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,s,l):!0}};function zm(e,t,r){if(typeof e!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const o=n[i],s=t[o];if(s){const l=e[o],c=l===void 0||s(l,o,e);if(c!==!0)throw new B("option "+o+" must be "+c,B.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new B("Unknown option "+o,B.ERR_BAD_OPTION)}}const En={assertOptions:zm,validators:ei},Ie=En.validators;class gr{constructor(t){this.defaults=t,this.interceptors={request:new ro,response:new ro}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=vt(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:o}=r;n!==void 0&&En.assertOptions(n,{silentJSONParsing:Ie.transitional(Ie.boolean),forcedJSONParsing:Ie.transitional(Ie.boolean),clarifyTimeoutError:Ie.transitional(Ie.boolean)},!1),i!=null&&(x.isFunction(i)?r.paramsSerializer={serialize:i}:En.assertOptions(i,{encode:Ie.function,serialize:Ie.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=o&&x.merge(o.common,o[r.method]);o&&x.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),r.headers=Ae.concat(s,o);const l=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(r)===!1||(c=c&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let f,d=0,h;if(!c){const y=[so.bind(this),void 0];for(y.unshift.apply(y,l),y.push.apply(y,u),h=y.length,f=Promise.resolve(r);d<h;)f=f.then(y[d++],y[d++]);return f}h=l.length;let b=r;for(d=0;d<h;){const y=l[d++],v=l[d++];try{b=y(b)}catch(w){v.call(this,w);break}}try{f=so.call(this,b)}catch(y){return Promise.reject(y)}for(d=0,h=u.length;d<h;)f=f.then(u[d++],u[d++]);return f}getUri(t){t=vt(this.defaults,t);const r=qs(t.baseURL,t.url);return Bs(r,t.params,t.paramsSerializer)}}x.forEach(["delete","get","head","options"],function(t){gr.prototype[t]=function(r,n){return this.request(vt(n||{},{method:t,url:r,data:(n||{}).data}))}});x.forEach(["post","put","patch"],function(t){function r(n){return function(o,s,l){return this.request(vt(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}gr.prototype[t]=r(),gr.prototype[t+"Form"]=r(!0)});const ur=gr;class ti{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(i=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](i);n._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{n.subscribe(l),o=l}).then(i);return s.cancel=function(){n.unsubscribe(o)},s},t(function(o,s,l){n.reason||(n.reason=new Ut(o,s,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new ti(function(i){t=i}),cancel:t}}}const Bm=ti;function Um(e){return function(r){return e.apply(null,r)}}function Hm(e){return x.isObject(e)&&e.isAxiosError===!0}const jn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(jn).forEach(([e,t])=>{jn[t]=e});const Wm=jn;function Qs(e){const t=new ur(e),r=$s(ur.prototype.request,t);return x.extend(r,ur.prototype,t,{allOwnKeys:!0}),x.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return Qs(vt(e,i))},r}const Y=Qs(Xn);Y.Axios=ur;Y.CanceledError=Ut;Y.CancelToken=Bm;Y.isCancel=Vs;Y.VERSION=Ks;Y.toFormData=zr;Y.AxiosError=B;Y.Cancel=Y.CanceledError;Y.all=function(t){return Promise.all(t)};Y.spread=Um;Y.isAxiosError=Hm;Y.mergeConfig=vt;Y.AxiosHeaders=Ae;Y.formToJSON=e=>Ws(x.isHTMLForm(e)?new FormData(e):e);Y.getAdapter=Gs.getAdapter;Y.HttpStatusCode=Wm;Y.default=Y;const Vm="https://your-energy.b.goit.study/api/",pt=Y.create({baseURL:Vm});function Js(){const[e,t]=g.useState(1),[r,n]=g.useState(1);async function i(f,d,h){var y,v;const b=`filters?filter=${f}&page=${d}&limit=${h}`;try{const w=await pt.get(b);return t((y=w==null?void 0:w.data)==null?void 0:y.totalPages),(v=w==null?void 0:w.data)==null?void 0:v.results}catch(w){throw console.error("Error fetching muscles:",w),w}}async function o(f,d){const h=`exercises?page=${f}&limit=${d}`;try{const b=await pt.get(h);return console.log(b),b==null?void 0:b.data}catch(b){throw console.error("Error fetching Exercise:",b),b}}async function s(f,d){const h=`filters?page=${f}&limit=${d}`;try{const b=await pt.get(h);return b==null?void 0:b.data}catch(b){throw console.error("Error fetching filters:",b),b}}async function l(f){const d=`exercises/${f}`;try{const h=await pt.get(d);return h==null?void 0:h.data}catch(h){throw console.error("Error fetching ExerciseById:",h),h}}async function c(){const f="quote";try{const d=await pt.get(f);return d==null?void 0:d.data}catch(d){return d}}async function u(f,d,h,b){var j,D;const y=f==null?void 0:f.bodypart,v=f==null?void 0:f.equipment,w=f==null?void 0:f.muscles,T=`exercises?bodypart=${y||""}&muscles=${w||""}&equipment=${v||""}&keyword=${d}&page=${h}&limit=${b}`;try{const L=await pt.get(T);return n((j=L==null?void 0:L.data)==null?void 0:j.totalPages),(D=L==null?void 0:L.data)==null?void 0:D.results}catch(L){throw console.error("Error fetching FilteredExercises:",L),L}}return{fetchMuscles:i,fetchExercise:o,fetchFilters:s,fetchExerciseById:l,fetchQuote:c,fetchFilteredExercises:u,totalPages:e,totalWorkoutPages:r,setTotalWorkoutPages:n,setTotalPages:t}}let or;const qm=new Uint8Array(16);function Gm(){if(!or&&(or=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!or))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return or(qm)}const ee=[];for(let e=0;e<256;++e)ee.push((e+256).toString(16).slice(1));function Km(e,t=0){return ee[e[t+0]]+ee[e[t+1]]+ee[e[t+2]]+ee[e[t+3]]+"-"+ee[e[t+4]]+ee[e[t+5]]+"-"+ee[e[t+6]]+ee[e[t+7]]+"-"+ee[e[t+8]]+ee[e[t+9]]+"-"+ee[e[t+10]]+ee[e[t+11]]+ee[e[t+12]]+ee[e[t+13]]+ee[e[t+14]]+ee[e[t+15]]}const Qm=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),co={randomUUID:Qm};function _n(e,t,r){if(co.randomUUID&&!t&&!e)return co.randomUUID();e=e||{};const n=e.random||(e.rng||Gm)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){r=r||0;for(let i=0;i<16;++i)t[r+i]=n[i];return t}return Km(n)}const Jm=p.p`
  text-align: center;
  font-family: sans-serif;
  font-family: ${ne};
  font-style: normal;
  font-weight: 400;
  color: ${e=>e.theme.colors.mainTextColor};

  @media (max-width: 374px) {
    width: 100%;
    font-size: 14px;
    line-height: 1.28;
    margin-top: 3rem;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    width: 318px;
    font-size: 14px;
    line-height: 1.28;
    margin-top: 5rem;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 554px;
    font-size: 18px;
    line-height: 1.33;
    margin-top: 5rem;
  }

  @media (min-width: 1440px) {
    width: 554px;
    font-size: 18px;
    line-height: 1.33;
    margin-top: 10rem;
    margin-right: 10rem;
  }
`;function Ym(){return a.jsx(Jm,{children:"Sorry, but we don't have anything for you with such filter. Please try another search"})}function Zm(e){return Dt({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z"}}]})(e)}const Xm=p.ul`
  @media (max-width: 374px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
    margin-right: 20px;
    row-gap: 20px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 335px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    row-gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    display: grid;
    width: 705px;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 141px;
    row-gap: 32px;
    column-gap: 16px;
    align-items: center;
  }

  @media (min-width: 1440px) {
    display: grid;
    width: 900px;
    grid-template-columns: 1fr 1fr;
    row-gap: 32px;
    column-gap: 16px;
  }
`,eg=p.li`
  cursor: pointer;
  text-decoration: none;
  font-family: sans-serif;
  border-radius: 15px;
  padding: 16px;
  background-color: ${e=>e.theme.colors.whiteColor};
  transition: transform 0.5s ease;
  position: relative;

  @media (max-width: 374px) {
    width: 100%;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    width: 335px;
    height: 141px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 344px;
    height: 141px;
  }

  @media (min-width: 1440px) {
    width: 442px;
    height: 141px;
  }

  &:hover {
    transform: translate(0, -4px);
  }
`,tg=p.div`
  display: flex;
  align-items: center;
`,rg=p.p`
  border: solid;
  border-radius: 15px;
  padding: 5px 8px;
  border-color: ${e=>e.theme.colors.mainTextColor};
  border-width: 1px;
  color: ${e=>e.theme.colors.mainTextColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  margin-right: 16px;
`,ng=p.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: DM Sans, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,ig=p(oa)`
  margin-left: 2px;
  max-width: 18px;
  max-height: 18px;
  color: ${e=>e.theme.colors.starColor};
`,Ys=p(Zm)`
  max-width: 16px;
  max-height: 16px;
  color: ${e=>e.theme.colors.mainTextColor};
  transition: 0.2s linear;
`,og=p.p`
  margin-left: auto;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-right: 0.8rem;

  &:hover {
    ${Ys} {
      color: ${e=>e.theme.colors.starColor};
      margin-right: -0.8rem;
    }
  }
`,sg=p.div`
  display: flex;
  margin-top: 25px;
  align-items: center;

  @media (min-width: 375px) and (max-width: 767px) {
    margin-top: 15px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    margin-top: 15px;
  }
`,ag=p.h3`
  margin-left: 16px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${bt};

  @media (max-width: 374px) {
    font-size: 20px;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 20px;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 24px;
    line-height: 1.33;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 1.33;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:first-letter {
    text-transform: uppercase;
  }
`,lg=p.div`
  display: flex;
  width: 312px;

  @media (max-width: 374px) {
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: 100%;
  }
`,cg=p.ul`
  display: flex;
  margin-top: 8px;
  width: 100%;

  @media (max-width: 374px) {
    line-height: 1;
    gap: 8px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    gap: 0;
  }

  @media (min-width: 1440px) {
    display: flex;
    gap: 16px;
  }
`,on=p.li`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 374px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    align-items: start;
  }

  @media (min-width: 1440px) {
    align-items: center;
  }
`,sn=p.p`
  color: ${e=>e.theme.colors.secondaryBlackTextColorLowOp};
  font-family: ${bt};
`,an=p.p`
  color: ${e=>e.theme.colors.mainTextColor};
  margin-left: 4px;
  font-family: ${bt};

  @media (max-width: 374px) {
    width: 100%;
    margin-left: 0px;
    text-align: center;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    width: 32px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 32px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 1440px) {
    width: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:first-letter {
    text-transform: uppercase;
  }
`,ug=p.div`
  width: 3.4rem;
  height: 3.4rem;
  padding: 0.6rem;
  background-color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,dg=p(ja)`
  color: ${e=>e.theme.colors.mainBgColor};
  width: 100%;
  height: 100%;
`;function fg({workoutCards:e,handleWorkoutCard:t}){return a.jsx(a.Fragment,{children:e.length===0?a.jsx(Ym,{}):a.jsx(Xm,{children:e==null?void 0:e.map(({_id:r,rating:n,name:i,burnedCalories:o,time:s,bodyPart:l,target:c})=>a.jsx(eg,{onClick:()=>t(r),children:a.jsxs("div",{children:[a.jsxs(tg,{children:[a.jsx(rg,{children:"Workout"}),a.jsx(ng,{children:Math.round(n*10)/10}),a.jsx(ig,{}),a.jsxs(og,{children:["Start ",a.jsx(Ys,{})]})]}),a.jsxs(sg,{children:[a.jsx(ug,{children:a.jsx(dg,{})}),a.jsx(ag,{children:i})]}),a.jsx(lg,{children:a.jsxs(cg,{children:[a.jsxs(on,{children:[a.jsx(sn,{children:"Burned calories:"}),a.jsxs(an,{children:[o," / ",s," min"]})]}),a.jsxs(on,{children:[a.jsx(sn,{children:"Body part:"}),a.jsx(an,{children:l})]}),a.jsxs(on,{children:[a.jsx(sn,{children:"Target:"}),a.jsx(an,{children:c})]})]})})]})},r))})})}const uo=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
`,hg=p.ul`
  @media (max-width: 374px) {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
    margin-right: 20px;
    row-gap: 20px;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    width: 335px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    row-gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    display: grid;
    width: 705px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 225px;
    row-gap: 32px;
    column-gap: 16px;
    align-items: center;
  }

  @media (min-width: 1440px) {
    display: grid;
    width: 900px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-auto-rows: 242px;
    row-gap: 32px;
    column-gap: 16px;
  }
`,pg=p.li`
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s linear;

  @media (max-width: 374px) {
    width: 100%;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    height: 225px;
    width: 335px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    height: 225px;
    width: 225px;
  }

  @media (min-width: 1440px) {
    height: 242px;
    width: 290px;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 12px;
    background-image: linear-gradient(
      0deg,
      ${e=>e.theme.colors.darkGradientCards} 0%,
      ${e=>e.theme.colors.darkGradientCards} 100%
    );
    opacity: 0.7;
    z-index: 1;
  }

  &:hover {
    transform: scale(1.05);
  }
`,mg=p.img`
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 374px) {
    width: 100%;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    height: 225px;
    width: 335px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    height: 225px;
    width: 225px;
  }

  @media (min-width: 1440px) {
    height: 242px;
    width: 290px;
  }
`,gg=p.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  color: ${e=>e.theme.colors.mainBgColor};
  font-family: sans-serif;
`,xg=p.h3`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  color: ${e=>e.theme.colors.initialCardTextColor};
  font-family: ${Le};

  &::first-letter {
    text-transform: uppercase;
  }
`,yg=p.p`
  text-align: center;
  color: ${e=>e.theme.colors.initialCardTextColor};
`,vg=p.div`
  display: flex;
  gap: 8px;
`,bg=p.button`
  border: none;
  outline: none;
  background: none;
  color: ${e=>e.$active?e.theme.colors.mainTextColor:e.theme.colors.notActivePaginationButton};
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.96px;
  cursor: pointer;
  transition: 0.3s linear;

  padding: ${e=>e.$active?"0px 10px":"0"};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: ${e=>e.$active?"18px":"0"};
  border: ${e=>e.$active?`1px solid ${e.theme.colors.mainTextColor}`:"none"};

  &:hover {
    color: ${e=>e.theme.colors.mainTextColor};
  }
`;function wg({totalPages:e,activePage:t,handlePageClick:r}){return e>1&&a.jsx(vg,{children:Array.from({length:e},(n,i)=>a.jsx(bg,{onClick:()=>r(i+1),$active:i+1===t,children:i+1},i+1))})}const Sg=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 46px;
`,Tg=p.button`
  border: none;
  outline: none;
  background: none;
  color: ${e=>e.$active?e.theme.colors.mainTextColor:e.theme.colors.notActivePaginationButton};
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.96px;
  cursor: pointer;
  transition: 0.3s linear;

  padding: ${e=>e.$active?"0px 10px":"0"};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: ${e=>e.$active?"18px":"0"};
  border: ${e=>e.$active?`1px solid ${e.theme.colors.mainTextColor}`:"none"};

  &:hover {
    color: ${e=>e.theme.colors.mainTextColor};
  }
`;function Eg({totalWorkoutPages:e,workoutActivePage:t,handleWorkoutPageClick:r}){const i=Math.min(7,e),s=(()=>{const l=Math.floor(3.5),c=Math.max(1,t-l);return Math.min(e-i+1,c)})();return e>1&&a.jsx(Sg,{children:Array.from({length:i},(l,c)=>a.jsx(Tg,{onClick:()=>r(s+c),$active:s+c===t,children:s+c},s+c))})}function jg({muscles:e,exercise:t,handleExerciseCard:r,workoutCards:n,handleWorkoutCard:i,totalPages:o,activePage:s,handlePageClick:l,handleWorkoutPageClick:c,totalWorkoutPages:u,workoutActivePage:f}){return t?a.jsxs(uo,{children:[a.jsx(hg,{children:e.map(d=>a.jsx(pg,{id:_n(),onClick:()=>r(d),children:a.jsxs("div",{children:[a.jsx(mg,{src:d.imgURL,alt:`${e}-${d.name}`,loading:"lazy"}),a.jsxs(gg,{children:[a.jsx(xg,{children:d.name}),a.jsx(yg,{children:d.filter})]})]})},_n()))}),a.jsx(wg,{totalPages:o,activePage:s,handlePageClick:l})]}):a.jsxs(uo,{children:[a.jsx(fg,{workoutCards:n,handleWorkoutCard:i}),n.length>0&&a.jsx(Eg,{workoutActivePage:f,handleWorkoutPageClick:c,totalWorkoutPages:u})]})}const _g=p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 180px;
  height: 100%;
`;function Cg({muscles:e,exercise:t,handleExerciseCard:r,workoutCards:n,handleWorkoutCard:i,totalPages:o,activePage:s,handlePageClick:l,handleWorkoutPageClick:c,totalWorkoutPages:u,workoutActivePage:f}){return a.jsx(_g,{children:a.jsx(jg,{muscles:e,exercise:t,handleExerciseCard:r,workoutCards:n,handleWorkoutCard:i,totalPages:o,activePage:s,handlePageClick:l,handleWorkoutPageClick:c,totalWorkoutPages:u,workoutActivePage:f})})}const Og=p.li`
  text-decoration: none;
  font-size: 16px;
  padding-bottom: 4px;
  cursor: pointer;
  transition: 0.3s linear;
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${ne};

  &:hover,
  &:focus {
    border-bottom: 3px solid
      ${e=>e.theme.colors.secondaryBlackTextColorLowOp};
  }

  ${e=>(e==null?void 0:e.$active)&&sa`
      border-bottom: 3px solid ${e.theme.colors.mainTextColor};
    `}
`;function $g({categories:e,setActiveCategory:t,activeCategory:r,setCatInfo:n,setSearchQuery:i,setParams:o,setActivePage:s,setWorkoutActivePage:l,setTotalWorkoutPages:c,setTotalPages:u,setExercise:f}){const d=h=>{t(h),n(!1),i(""),o(""),s(1),l(1),f(!0),h!==r&&(c(1),u(1))};return e==null?void 0:e.map(h=>a.jsx(Og,{id:h,onClick:()=>d(h),$active:r===h?r:"",children:h},_n()))}const Ag=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,Fg=p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    display: flex;
    gap: unset;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,Rg=p.h2`
  display: flex;
  gap: 8px;
  font-family: ${ne};
  font-size: 28px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: -0.02em;
  text-align: left;
  color: ${e=>e.theme.colors.mainTextColor};

  @media (min-width: 1440px) {
    margin: 0;
    flex-grow: 1;
    font-size: 44px;
  }
`,Ig=p.span`
  display: flex;
  width: max-content;
  gap: 8px;
  color: ${e=>e.theme.colors.secondaryBlackTextColorLowOp};
  font-size: 24px;
  font-family: ${ne};
`,Mg=p.div`
  font-size: 28px;
  color: ${e=>e.theme.colors.mainTextColor};

  @media (min-width: 768px) {
    font-size: 44px;
  }
`,Pg=p.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 48px;
  }

  @media (min-width: 1440px) {
    justify-content: flex-end;
    align-items: start;
  }
`,kg=p.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`,Dg=p.button`
  position: absolute;
  top: 30%;
  right: 3%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    right: 15%;
  }
`,Lg=p.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 30px;
  border: 1px solid ${e=>e.theme.colors.mainTextColor};
  color: ${e=>e.theme.colors.mainTextColor};
  outline: none;
  background-color: transparent;
  transition-property: border 0.3s linear;

  @media (min-width: 768px) {
    width: 273px;
    height: 48px;
    padding: 12px 14px;
    margin-right: 30px;
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${e=>e.theme.colors.accentColor};
  }
`,Ng=p(aa)`
  color: ${e=>e.theme.colors.mainTextColor};
`,zg=p.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 20px;
  text-align: left;

  @media (min-width: 1440px) {
    flex-wrap: nowrap;
    gap: 20px;
    margin: 0;
    height: 32px;
  }
`;function Bg({categories:e,activeCategory:t,setActiveCategory:r,activeCard:n,catInfo:i,setCatInfo:o,setSearchQuery:s,handleSearchBar:l,setParams:c,setActivePage:u,setWorkoutActivePage:f,setTotalWorkoutPages:d,setTotalPages:h,setExercise:b}){return a.jsx(Ag,{children:a.jsxs(Fg,{children:[a.jsxs(Rg,{children:["Exercises",i&&a.jsxs(Ig,{children:[a.jsx(Mg,{children:"/"}),n]})]}),a.jsxs(Pg,{children:[i&&a.jsxs(kg,{children:[a.jsx(Lg,{name:"search",type:"text",placeholder:"Search",onChange:y=>l(y.target.value)}),a.jsx(Dg,{type:"button",children:a.jsx(Ng,{})})]}),a.jsx(zg,{children:a.jsx($g,{categories:e,setActiveCategory:r,activeCategory:t,setCatInfo:o,setSearchQuery:s,setParams:c,setActivePage:u,setWorkoutActivePage:f,setTotalWorkoutPages:d,setTotalPages:h,setExercise:b})})]})]})})}const Ug=p.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${bt};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,Hg=p.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  color: ${e=>e.theme.colors.readMoreBtn};
  margin-left: 0.4rem;
`;function Wg({children:e,collapsedNumWords:t=27,expandButtonText:r="Show more",collapseButtonText:n="Show less",expanded:i=!1}){const[o,s]=g.useState(i),l=o?e:`${e.split(" ").slice(0,t).join(" ")}...`;return a.jsx("div",{children:a.jsxs(Ug,{children:[e.split(" ").length>t?l:e,e.split(" ").length>t&&a.jsx(Hg,{onClick:()=>s(c=>!c),children:o?n:r})]})})}const Vg=p.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 16px;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,qg=p.div`
  background-color: ${e=>e.theme.colors.mainTextColor};
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  max-width: 336px;
  display: flex;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 40px;
    width: 100%;
    max-width: 400px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 444px;
  }
`,Gg=p.div`
  width: 100%;
  max-width: 336px;
  height: auto;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 288px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 444px;
    height: 242px;
  }
`;p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  /* height: 350px; */

  width: 100%;
  max-width: 336px;
  height: auto;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 288px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 444px;
    height: 242px;
  }
`;const Kg=p.div`
  background-color: ${e=>e.theme.colors.aboutBgColor};
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  max-width: 336px;
  display: flex;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 40px;
    width: 100%;
    max-width: 400px;
    margin-top: 16px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 444px;
    margin-top: 0;
  }
`,Qg=p.div`
  background-color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 50%;
  width: 34px;
  height: 32px;
  fill: ${e=>e.theme.colors.initialCardTextColor};
  background-color: ${e=>e.theme.colors.secondaryWhiteTextColorLowOp};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
`,Jg=p.svg`
  width: 100%;
  height: 100%;
`,Yg=p.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`,Zg=p.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`,Xg=p.h3`
  color: ${e=>e.theme.colors.mainBgColor};
  font-family: ${ne};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,ex=p.svg`
  width: 20px;
  height: 20px;
  fill: ${e=>e.theme.colors.mainBgColor};

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,tx=p.p`
  color: ${e=>e.theme.colors.secondaryWhiteTextColorLowOp};
  font-family: ${Le};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 2px;
  }
`,rx=p.span`
  color: ${e=>e.theme.colors.mainBgColor};
  font-family: ${Le};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,nx=p.img`
  border-radius: 20px;
  width: 100%;
`,ix=p.div`
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.mainTextColor};
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${e=>e.theme.colors.mainBgColor};
`,ox=p.svg`
  width: 100%;
  height: 100%;
`,sx=p.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 20px;
  }
`,ax=p.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,lx=p.h3`
  font-style: normal;
  font-weight: 500;
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${Le};
  font-size: 20px;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,cx=p.span`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${ne};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;function ux(){const[e,t]=g.useState(""),[r,n]=g.useState(""),{fetchQuote:i}=Js();return g.useEffect(()=>{function o(){const u=new Date,f=u.getFullYear(),d=(u.getMonth()+1).toString().padStart(2,"0");return`${u.getDate().toString().padStart(2,"0")}/${d}/${f}`}async function s(){try{const{quote:u,author:f}=await i();t(u),n(f);const d=o();return localStorage.setItem("today",d),localStorage.setItem("quote",u),localStorage.setItem("author",f),{quote:u,author:f}}catch(u){console.error("Error fetching new quote:",u.message)}}const l=localStorage.getItem("today"),c=o();if(!l||l!==c)s();else{const u=localStorage.getItem("quote"),f=localStorage.getItem("author");t(u||""),n(f||"")}},[]),a.jsxs(Vg,{children:[a.jsxs(qg,{children:[a.jsx(Qg,{children:a.jsx(Jg,{"aria-label":"running icon",children:a.jsx("use",{href:"images/icons.svg#icon-running"})})}),a.jsxs(Yg,{children:[a.jsxs(Zg,{children:[a.jsx(Xg,{children:"Quote of the day"}),a.jsx(ex,{"aria-label":"quotes-icon",children:a.jsx("use",{href:"images/icons.svg#icon-quotes"})})]}),a.jsx(tx,{children:e}),a.jsx(rx,{children:r})]})]}),a.jsx(Gg,{children:a.jsx(nx,{src:"images/quote.jpg",alt:"Personal Trainer",width:"335",height:"242",loading:"lazy"})}),a.jsxs(Kg,{children:[a.jsx(ix,{children:a.jsx(ox,{"aria-label":"dumbell-icon",children:a.jsx("use",{href:"images/icons.svg#icon-dumbbell"})})}),a.jsxs(sx,{children:[a.jsxs(ax,{children:[a.jsx(lx,{children:"110 min"}),a.jsx(cx,{children:"Daily norm of sports"})]}),a.jsx(Wg,{children:"The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic physical activity throughout the week for adults aged 18-64. However, what happens if we adjust that number to 110 minutes every day? While it might seem like a high number to hit, dedicating 110 minutes daily to sporting activities may offer unparalleled benefits to physical health, mental well-being, and overall quality of life."})]})]})]})}const dx=p.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 80px;

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    gap: 64px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
  }
`,fx=p.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`,hx=p(mo)`
  color: ${e=>(e==null?void 0:e.value)!==0?e.theme.colors.starColor:e.theme.colors.mainTextColorRev};
  font-size: 1.6rem;
`;p(mo)`
  color: ${e=>(e==null?void 0:e.value)!==0?e.theme.colors.starColor:e.theme.colors.mainTextColorRev};
  font-size: 1.6rem;
`;const px=p(la)`
  color: ${e=>(e==null?void 0:e.value)!==0?e.theme.colors.starColor:e.theme.colors.mainTextColorRev};
  font-size: 1.6rem;
`;function mx({value:e,full:t}){return a.jsx(a.Fragment,{children:t?a.jsx(hx,{value:e}):a.jsx(px,{value:e})})}const gx=p.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.1rem;
`,xx=p.p`
  margin-left: 0.7rem;
  color: ${e=>e.theme.colors.mainTextColorRev};
  font-size: 1.6rem;
  font-family: ${Le};
  font-weight: 600;
  line-height: 1.25;
`,yx=p.div`
  display: flex;
  align-items: center;
  gap: 2px;
  width: 100%;
`;Zs.propTypes={maxRating:ft.number.isRequired,color:ft.string,size:ft.number,messages:ft.array,defaultRating:ft.number,onSetTextStarsRate:ft.func};function Zs({maxRating:e,rating:t,value:r}){return a.jsx("li",{children:a.jsx(yx,{children:a.jsxs(gx,{children:[Array.from({length:e},(n,i)=>a.jsx(mx,{value:r,full:t>=i+1},crypto.randomUUID())),a.jsx(xx,{children:t})]})})})}const vx=p.div`
  visibility: ${e=>e!=null&&e.$modalCard?"visible":"hidden"};
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px;

  pointer-events: ${e=>e!=null&&e.$modalCard?"all":"none"};
  width: 100%;
  height: 100%;
  background-color: ${e=>e.theme.colors.mainBackdropBgColor};
  opacity: ${e=>e!=null&&e.$modalCard?1:0};
  overflow: auto;
  z-index: 1000;
  backdrop-filter: blur(3px);

  @media (min-width: 1440px) {
    overflow: ${e=>e!=null&&e.$modalCard?"hidden":"auto"};
  }
`,bx=p.div`
  position: relative;

  left: 50%;
  transform: translate(-50%, 0) scale(1);

  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 20px;
  padding-left: 20px;
  color: ${e=>e.theme.colors.mainTextColorRev};
  background-color: ${e=>e.theme.colors.modalContainerColor};
  border-radius: 20px;
  z-index: 500;
  transition: transform 0.3s linear;
  will-change: transform;
  opacity: 1;

  @media (max-width: 767px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    width: 704px;
    display: flex;
    column-gap: 32px;
    position: absolute;
    top: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  @media (min-width: 1440px) {
    position: absolute;
    top: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    width: 708px;
  }
`,wx=p(xo)`
  color: ${e=>e.theme.colors.mainTextColorRev};
  font-size: 2.4rem;
  top: 1.6rem;
  right: 1.6rem;
  position: absolute;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.starColor};
  }
`,Sx=p.img`
  width: 100%;
  height: 100%;
`,Tx=p.div`
  height: 258px;
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 270px;
    height: 260px;
  }
`,Ex=p.div`
  @media (min-width: 768px) {
    width: 338px;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1440px) {
    width: 342px;
  }
`;p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  column-gap: 8px;
  row-gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;const jx=p.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  font-family: ${ne};

  @media (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1.33;
  }
`,_x=p.ul`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  column-gap: 2px;
`,Cx=p.ul`
  display: flex;
  margin-bottom: 20px;
  border-top: 1px solid ${e=>e.theme.colors.inactiveColor};
  border-bottom: 1px solid ${e=>e.theme.colors.inactiveColor};
  padding-top: 10px;
  padding-bottom: 10px;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,_t=p.p`
  margin-bottom: 4px;
  color: ${e=>e.theme.colors.secondaryWhiteTextColorLowOp};
  font-size: 12px;
  line-height: 1.5;
  font-family: ${ne};
`,Ct=p.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.286;
  font-family: ${Le};
`,Ox=p.p`
  color: ${e=>e.theme.colors.secondaryWhiteTextColorLowOp};
  font-size: 14px;
  line-height: 1.286;
`;function $x({modalWorkoutCards:e,modalCard:t,handleBackdrop:r}){function n(s){return typeof s!="string"?s:s.split(" ").map(u=>`${u.charAt(0).toUpperCase()}${u.slice(1)}`).join(" ")}function i(s){return s%1===0?Math.floor(s):s}function o(s){s.key==="Escape"&&r()}return g.useEffect(()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}),[]),e.map(({_id:s,gifUrl:l,name:c,rating:u,bodyPart:f,equipment:d,popularity:h,burnedCalories:b,time:y,description:v})=>a.jsx(vx,{$modalCard:t,children:a.jsxs(bx,{children:[a.jsx(wx,{onClick:r}),a.jsx(Tx,{children:a.jsx(Sx,{src:l,alt:c})}),a.jsx(Ex,{children:a.jsxs("div",{children:[a.jsx(jx,{children:n(c)}),a.jsx(_x,{children:a.jsx(Zs,{maxRating:5,rating:u!==void 0&&i(u.toFixed(1)),value:u!==void 0&&i(u.toFixed(1))})}),a.jsxs(Cx,{children:[a.jsxs("li",{children:[a.jsx(_t,{children:"Body Part"}),a.jsx(Ct,{children:n(f)})]}),a.jsxs("li",{children:[a.jsx(_t,{children:"Equipment"}),a.jsx(Ct,{children:n(d)})]}),a.jsxs("li",{children:[a.jsx(_t,{children:"Rating"}),a.jsx(Ct,{children:i(u.toFixed(1))})]}),a.jsxs("li",{children:[a.jsx(_t,{children:"Popular"}),a.jsx(Ct,{children:h})]}),a.jsxs("li",{children:[a.jsx(_t,{children:"Burned Calories"}),a.jsxs(Ct,{children:[b," / ",y," min"]})]})]}),a.jsx(Ox,{children:v})]})})]})},s))}function Ax(){const{fetchFilters:e,fetchMuscles:t,fetchFilteredExercises:r,fetchExerciseById:n,totalPages:i,totalWorkoutPages:o,setTotalPages:s,setTotalWorkoutPages:l}=Js(),[c,u]=g.useState([]),[f,d]=g.useState([]),[h,b]=g.useState("Body parts");g.useState(null),g.useState(1);const[y,v]=g.useState(1),[w,T]=g.useState(1),[j,D]=g.useState(12),[L,U]=g.useState(""),[F,R]=g.useState(!0),[z,$]=g.useState(!1),[N,M]=g.useState(!1),[de,q]=g.useState([]),[J,ae]=g.useState([]),[Ht,it]=g.useState(""),[ot,st]=g.useState(""),[at,Re]=g.useState(""),[le,ze]=g.useState(""),[je,ie]=g.useState("");g.useEffect(()=>{async function C(){try{const I=await e(y,j),re=[...new Set(I.results.map(({filter:Be})=>Be))];u(re)}catch(I){console.log("Error fetching filters:",I)}}C()},[]),g.useEffect(()=>{async function C(){try{const I=await t(h,y,j);d(I),R(!0)}catch(I){console.error("Error fetching data:",I.message)}}C()},[h,y]),g.useEffect(()=>{async function C(){try{const I=await r({...je},le,w,j);q(I)}catch(I){console.error("Error fetching data:",I.message)}}C()},[le,je,w]);async function lt(C){try{const I=await n(C);return ae(re=>[...re,I]),I}catch(I){console.error("Error fetching data:",I.message)}}function fe(C){const I=C.name;let re={};switch(C.filter){case"Body parts":it(I),re={bodypart:I};break;case"Equipment":st(I),re={equipment:I};break;case"Muscles":Re(I),re={muscles:I};break;default:console.log("Unknown filter:",C.filter);break}ie(re),R(Ue=>!Ue),$(Ue=>!Ue);const Be=`${I[0].toUpperCase()}${I.slice(1)}`;U(Be)}function ct(C){lt(C),M(I=>!I)}function _e(){M(C=>!C),ae([])}function ut(C){ze(C)}function P(C){v(C)}function _(C){T(C)}return a.jsxs("div",{children:[a.jsx(Bg,{categories:c,setActiveCategory:b,activeCategory:h,activeCard:L,handleExerciseCard:fe,catInfo:z,setCatInfo:$,value:le,handleSearchBar:ut,setSearchQuery:ze,setParams:ie,setActivePage:v,setWorkoutActivePage:T,setTotalWorkoutPages:l,setTotalPages:s,setExercise:R}),a.jsxs(dx,{children:[a.jsx(ux,{}),a.jsx(fx,{children:a.jsx(Cg,{muscles:f,exercise:F,handleExerciseCard:fe,workoutCards:de,handleWorkoutCard:ct,activePage:y,handlePageClick:P,handleWorkoutPageClick:_,totalPages:i,totalWorkoutPages:o,workoutActivePage:w})}),N&&a.jsx($x,{modalWorkoutCards:J,modalCard:N,handleBackdrop:_e})]})]})}const Fx=p.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;

  @media (min-width: 1440px) {
    gap: 2.4rem;
    flex-direction: row;
    justify-content: space-between;
  }
`,Rx=p.div`
  width: 12rem;
  height: auto;
  background-color: ${e=>e.theme.colors.initialCardTextColor};
  border-radius: 50rem;

  @media (min-width: 768px) {
    width: 14rem;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`,Ix=p.div`
  width: 12rem;
  height: auto;
  /* background-color: ${e=>e.theme.colors.mainBgColorRev}; */
  border-radius: 50rem;

  @media (min-width: 768px) {
    width: 14rem;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`,Mx=p.div`
  width: 12rem;
  height: auto;
  /* background-color: ${e=>e.theme.colors.mainBgColorRev}; */
  border-radius: 50rem;
  @media (min-width: 768px) {
    width: 14rem;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`,Px=p.div`
  width: 10rem;
  height: auto;

  @media (min-width: 768px) {
    width: 14rem;
  }
  @media (min-width: 1440px) {
    width: 16rem;
  }
  /* background-color: ${e=>e.theme.colors.mainBgColorRev}; */
  /* border-radius: 50rem; */
`,sr=p.img`
  width: 100%;
  height: 100%;
`;function kx(){return a.jsxs(Fx,{children:[a.jsx(Rx,{children:a.jsx(sr,{src:"images/issa.png",alt:"issa certified personal trainer",loading:"lazy"})}),a.jsx(Ix,{children:a.jsx(sr,{src:"images/rep.png",alt:"reps certified personal trainer",loading:"lazy"})}),a.jsx(Mx,{children:a.jsx(sr,{src:"images/golds.png",alt:"gold's gym",loading:"lazy"})}),a.jsx(Px,{children:a.jsx(sr,{src:"images/ufc.png",alt:"ufc",loading:"lazy"})})]})}function Bx({toggleTheme:e,isDarkTheme:t}){const{ref:r,inView:n}=ai({triggerOnce:!0,threshold:0,rootMargin:"100px"}),{ref:i,inView:o}=ai({triggerOnce:!0,threshold:0,rootMargin:"100px"});return a.jsxs(a.Fragment,{children:[a.jsx(ca,{children:a.jsxs(ua,{children:[a.jsx("title",{children:"Alex Smagin - Personal Trainer"}),a.jsx("meta",{name:"description",content:"Explore the world of fitness with Alex Smagin, a dedicated personal trainer. Discover fitness programs, exercise demos, and connect with a passionate fitness professional."}),a.jsx("meta",{name:"keywords",content:"Alex Smagin, personal trainer, fitness, nutritionist, MMA boxing coach, calisthenics, gymnastics, React, Vite, web development, frontend, software engineer"})]})}),a.jsx(Vt,{children:a.jsx(el,{toggleTheme:e,isDarkTheme:t})}),a.jsxs("main",{children:[a.jsxs(Vt,{children:[a.jsx(Fh,{}),a.jsx(qt,{children:a.jsx(Nh,{})}),a.jsx(qt,{id:"gallery",children:a.jsxs(da,{children:[a.jsx(qh,{}),a.jsx(wp,{})]})}),a.jsx(qt,{ref:i,$inView:o,children:a.jsx(Op,{})})]}),a.jsx(fa,{id:"exercises",ref:r,$inView:n,children:a.jsx(Vt,{children:a.jsx(Ax,{})})}),a.jsx(qt,{children:a.jsx(Vt,{children:a.jsx(kx,{})})})]})]})}export{Bx as default};
