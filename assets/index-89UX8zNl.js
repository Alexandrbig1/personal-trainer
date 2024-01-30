var m4=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var sM=m4((At,Mt)=>{function g4(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Oo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dg={exports:{}},Cu={},Bg={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),y4=Symbol.for("react.portal"),v4=Symbol.for("react.fragment"),x4=Symbol.for("react.strict_mode"),w4=Symbol.for("react.profiler"),S4=Symbol.for("react.provider"),b4=Symbol.for("react.context"),E4=Symbol.for("react.forward_ref"),C4=Symbol.for("react.suspense"),T4=Symbol.for("react.memo"),k4=Symbol.for("react.lazy"),Tm=Symbol.iterator;function _4(e){return e===null||typeof e!="object"?null:(e=Tm&&e[Tm]||e["@@iterator"],typeof e=="function"?e:null)}var Ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wg=Object.assign,Hg={};function jo(e,t,n){this.props=e,this.context=t,this.refs=Hg,this.updater=n||Ug}jo.prototype.isReactComponent={};jo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vg(){}Vg.prototype=jo.prototype;function mp(e,t,n){this.props=e,this.context=t,this.refs=Hg,this.updater=n||Ug}var gp=mp.prototype=new Vg;gp.constructor=mp;Wg(gp,jo.prototype);gp.isPureReactComponent=!0;var km=Array.isArray,Gg=Object.prototype.hasOwnProperty,yp={current:null},Kg={key:!0,ref:!0,__self:!0,__source:!0};function qg(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Gg.call(t,r)&&!Kg.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ca,type:e,key:o,ref:s,props:i,_owner:yp.current}}function $4(e,t){return{$$typeof:ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vp(e){return typeof e=="object"&&e!==null&&e.$$typeof===ca}function O4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _m=/\/+/g;function Fc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?O4(""+e.key):t.toString(36)}function fl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ca:case y4:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Fc(s,0):r,km(i)?(n="",e!=null&&(n=e.replace(_m,"$&/")+"/"),fl(i,t,n,"",function(u){return u})):i!=null&&(vp(i)&&(i=$4(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_m,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",km(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Fc(o,a);s+=fl(o,t,n,l,i)}else if(l=_4(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Fc(o,a++),s+=fl(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ka(e,t,n){if(e==null)return e;var r=[],i=0;return fl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function j4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},dl={transition:null},P4={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:dl,ReactCurrentOwner:yp};ie.Children={map:ka,forEach:function(e,t,n){ka(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ka(e,function(){t++}),t},toArray:function(e){return ka(e,function(t){return t})||[]},only:function(e){if(!vp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=jo;ie.Fragment=v4;ie.Profiler=w4;ie.PureComponent=mp;ie.StrictMode=x4;ie.Suspense=C4;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P4;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wg({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=yp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Gg.call(t,l)&&!Kg.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ca,type:e.type,key:i,ref:o,props:r,_owner:s}};ie.createContext=function(e){return e={$$typeof:b4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:S4,_context:e},e.Consumer=e};ie.createElement=qg;ie.createFactory=function(e){var t=qg.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:E4,render:e}};ie.isValidElement=vp;ie.lazy=function(e){return{$$typeof:k4,_payload:{_status:-1,_result:e},_init:j4}};ie.memo=function(e,t){return{$$typeof:T4,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=dl.transition;dl.transition={};try{e()}finally{dl.transition=t}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(e,t){return ht.current.useCallback(e,t)};ie.useContext=function(e){return ht.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};ie.useEffect=function(e,t){return ht.current.useEffect(e,t)};ie.useId=function(){return ht.current.useId()};ie.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return ht.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};ie.useRef=function(e){return ht.current.useRef(e)};ie.useState=function(e){return ht.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return ht.current.useTransition()};ie.version="18.2.0";Bg.exports=ie;var b=Bg.exports;const N=Oo(b),Lf=g4({__proto__:null,default:N},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R4=b,A4=Symbol.for("react.element"),M4=Symbol.for("react.fragment"),I4=Object.prototype.hasOwnProperty,F4=R4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L4={key:!0,ref:!0,__self:!0,__source:!0};function Qg(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)I4.call(t,r)&&!L4.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:A4,type:e,key:o,ref:s,props:i,_owner:F4.current}}Cu.Fragment=M4;Cu.jsx=Qg;Cu.jsxs=Qg;Dg.exports=Cu;var d=Dg.exports,Nf={},Yg={exports:{}},zt={},Xg={exports:{}},Zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,I){var W=M.length;M.push(I);e:for(;0<W;){var ee=W-1>>>1,Y=M[ee];if(0<i(Y,I))M[ee]=I,M[W]=Y,W=ee;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var I=M[0],W=M.pop();if(W!==I){M[0]=W;e:for(var ee=0,Y=M.length,Pe=Y>>>1;ee<Pe;){var ue=2*(ee+1)-1,se=M[ue],he=ue+1,de=M[he];if(0>i(se,W))he<Y&&0>i(de,se)?(M[ee]=de,M[he]=W,ee=he):(M[ee]=se,M[ue]=W,ee=ue);else if(he<Y&&0>i(de,W))M[ee]=de,M[he]=W,ee=he;else break e}}return I}function i(M,I){var W=M.sortIndex-I.sortIndex;return W!==0?W:M.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,p=3,y=!1,v=!1,m=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(M){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=M)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function w(M){if(m=!1,x(M),!v)if(n(l)!==null)v=!0,J(k);else{var I=n(u);I!==null&&te(w,I.startTime-M)}}function k(M,I){v=!1,m&&(m=!1,g(O),O=-1),y=!0;var W=p;try{for(x(I),f=n(l);f!==null&&(!(f.expirationTime>I)||M&&!A());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,p=f.priorityLevel;var Y=ee(f.expirationTime<=I);I=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===n(l)&&r(l),x(I)}else r(l);f=n(l)}if(f!==null)var Pe=!0;else{var ue=n(u);ue!==null&&te(w,ue.startTime-I),Pe=!1}return Pe}finally{f=null,p=W,y=!1}}var T=!1,S=null,O=-1,j=5,$=-1;function A(){return!(e.unstable_now()-$<j)}function Q(){if(S!==null){var M=e.unstable_now();$=M;var I=!0;try{I=S(!0,M)}finally{I?D():(T=!1,S=null)}}else T=!1}var D;if(typeof h=="function")D=function(){h(Q)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,G=X.port2;X.port1.onmessage=Q,D=function(){G.postMessage(null)}}else D=function(){E(Q,0)};function J(M){S=M,T||(T=!0,D())}function te(M,I){O=E(function(){M(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,J(k))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var W=p;p=I;try{return M()}finally{p=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,I){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var W=p;p=M;try{return I()}finally{p=W}},e.unstable_scheduleCallback=function(M,I,W){var ee=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ee+W:ee):W=ee,M){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=W+Y,M={id:c++,callback:I,priorityLevel:M,startTime:W,expirationTime:Y,sortIndex:-1},W>ee?(M.sortIndex=W,t(u,M),n(l)===null&&M===n(u)&&(m?(g(O),O=-1):m=!0,te(w,W-ee))):(M.sortIndex=Y,t(l,M),v||y||(v=!0,J(k))),M},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(M){var I=p;return function(){var W=p;p=I;try{return M.apply(this,arguments)}finally{p=W}}}})(Zg);Xg.exports=Zg;var N4=Xg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg=b,Lt=N4;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ey=new Set,As={};function mi(e,t){so(e,t),so(e+"Capture",t)}function so(e,t){for(As[e]=t,e=0;e<t.length;e++)ey.add(t[e])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zf=Object.prototype.hasOwnProperty,z4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$m={},Om={};function D4(e){return zf.call(Om,e)?!0:zf.call($m,e)?!1:z4.test(e)?Om[e]=!0:($m[e]=!0,!1)}function B4(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U4(e,t,n,r){if(t===null||typeof t>"u"||B4(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ot[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ot[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ot[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ot[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ot[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ot[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ot[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ot[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ot[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var xp=/[\-:]([a-z])/g;function wp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xp,wp);ot[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xp,wp);ot[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xp,wp);ot[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ot[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});ot.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ot[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sp(e,t,n,r){var i=ot.hasOwnProperty(t)?ot[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U4(t,n,i,r)&&(n=null),r||i===null?D4(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var er=Jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),Li=Symbol.for("react.portal"),Ni=Symbol.for("react.fragment"),bp=Symbol.for("react.strict_mode"),Df=Symbol.for("react.profiler"),ty=Symbol.for("react.provider"),ny=Symbol.for("react.context"),Ep=Symbol.for("react.forward_ref"),Bf=Symbol.for("react.suspense"),Uf=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),ry=Symbol.for("react.offscreen"),jm=Symbol.iterator;function Wo(e){return e===null||typeof e!="object"?null:(e=jm&&e[jm]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,Lc;function as(e){if(Lc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Lc=t&&t[1]||""}return`
`+Lc+e}var Nc=!1;function zc(e,t){if(!e||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?as(e):""}function W4(e){switch(e.tag){case 5:return as(e.type);case 16:return as("Lazy");case 13:return as("Suspense");case 19:return as("SuspenseList");case 0:case 2:case 15:return e=zc(e.type,!1),e;case 11:return e=zc(e.type.render,!1),e;case 1:return e=zc(e.type,!0),e;default:return""}}function Wf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ni:return"Fragment";case Li:return"Portal";case Df:return"Profiler";case bp:return"StrictMode";case Bf:return"Suspense";case Uf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ny:return(e.displayName||"Context")+".Consumer";case ty:return(e._context.displayName||"Context")+".Provider";case Ep:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cp:return t=e.displayName||null,t!==null?t:Wf(e.type)||"Memo";case sr:t=e._payload,e=e._init;try{return Wf(e(t))}catch{}}return null}function H4(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wf(t);case 8:return t===bp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function V4(e){var t=iy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $a(e){e._valueTracker||(e._valueTracker=V4(e))}function oy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=iy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hf(e,t){var n=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_r(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sy(e,t){t=t.checked,t!=null&&Sp(e,"checked",t,!1)}function Vf(e,t){sy(e,t);var n=_r(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gf(e,t.type,_r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gf(e,t,n){(t!=="number"||zl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ls=Array.isArray;function Zi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_r(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Am(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(ls(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_r(n)}}function ay(e,t){var n=_r(t.value),r=_r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ly(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ly(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oa,uy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ms(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G4=["Webkit","ms","Moz","O"];Object.keys(ys).forEach(function(e){G4.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ys[t]=ys[e]})});function cy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ys.hasOwnProperty(e)&&ys[e]?(""+t).trim():t+"px"}function fy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var K4=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qf(e,t){if(t){if(K4[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Yf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=null;function Tp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zf=null,Ji=null,eo=null;function Im(e){if(e=pa(e)){if(typeof Zf!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Ou(t),Zf(e.stateNode,e.type,t))}}function dy(e){Ji?eo?eo.push(e):eo=[e]:Ji=e}function py(){if(Ji){var e=Ji,t=eo;if(eo=Ji=null,Im(e),t)for(e=0;e<t.length;e++)Im(t[e])}}function hy(e,t){return e(t)}function my(){}var Dc=!1;function gy(e,t,n){if(Dc)return e(t,n);Dc=!0;try{return hy(e,t,n)}finally{Dc=!1,(Ji!==null||eo!==null)&&(my(),py())}}function Is(e,t){var n=e.stateNode;if(n===null)return null;var r=Ou(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Jf=!1;if(qn)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){Jf=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{Jf=!1}function q4(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var vs=!1,Dl=null,Bl=!1,ed=null,Q4={onError:function(e){vs=!0,Dl=e}};function Y4(e,t,n,r,i,o,s,a,l){vs=!1,Dl=null,q4.apply(Q4,arguments)}function X4(e,t,n,r,i,o,s,a,l){if(Y4.apply(this,arguments),vs){if(vs){var u=Dl;vs=!1,Dl=null}else throw Error(R(198));Bl||(Bl=!0,ed=u)}}function gi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fm(e){if(gi(e)!==e)throw Error(R(188))}function Z4(e){var t=e.alternate;if(!t){if(t=gi(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Fm(i),e;if(o===r)return Fm(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function vy(e){return e=Z4(e),e!==null?xy(e):null}function xy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xy(e);if(t!==null)return t;e=e.sibling}return null}var wy=Lt.unstable_scheduleCallback,Lm=Lt.unstable_cancelCallback,J4=Lt.unstable_shouldYield,e3=Lt.unstable_requestPaint,ze=Lt.unstable_now,t3=Lt.unstable_getCurrentPriorityLevel,kp=Lt.unstable_ImmediatePriority,Sy=Lt.unstable_UserBlockingPriority,Ul=Lt.unstable_NormalPriority,n3=Lt.unstable_LowPriority,by=Lt.unstable_IdlePriority,Tu=null,jn=null;function r3(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Tu,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:s3,i3=Math.log,o3=Math.LN2;function s3(e){return e>>>=0,e===0?32:31-(i3(e)/o3|0)|0}var ja=64,Pa=4194304;function us(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=us(a):(o&=s,o!==0&&(r=us(o)))}else s=n&~i,s!==0?r=us(s):o!==0&&(r=us(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mn(t),i=1<<n,r|=e[n],t&=~i;return r}function a3(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l3(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-mn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=a3(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function td(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ey(){var e=ja;return ja<<=1,!(ja&4194240)&&(ja=64),e}function Bc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mn(t),e[t]=n}function u3(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-mn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function _p(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function Cy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ty,$p,ky,_y,$y,nd=!1,Ra=[],gr=null,yr=null,vr=null,Fs=new Map,Ls=new Map,ur=[],c3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nm(e,t){switch(e){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Fs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(t.pointerId)}}function Vo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=pa(t),t!==null&&$p(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function f3(e,t,n,r,i){switch(t){case"focusin":return gr=Vo(gr,e,t,n,r,i),!0;case"dragenter":return yr=Vo(yr,e,t,n,r,i),!0;case"mouseover":return vr=Vo(vr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Fs.set(o,Vo(Fs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ls.set(o,Vo(Ls.get(o)||null,e,t,n,r,i)),!0}return!1}function Oy(e){var t=Kr(e.target);if(t!==null){var n=gi(t);if(n!==null){if(t=n.tag,t===13){if(t=yy(n),t!==null){e.blockedOn=t,$y(e.priority,function(){ky(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xf=r,n.target.dispatchEvent(r),Xf=null}else return t=pa(n),t!==null&&$p(t),e.blockedOn=n,!1;t.shift()}return!0}function zm(e,t,n){pl(e)&&n.delete(t)}function d3(){nd=!1,gr!==null&&pl(gr)&&(gr=null),yr!==null&&pl(yr)&&(yr=null),vr!==null&&pl(vr)&&(vr=null),Fs.forEach(zm),Ls.forEach(zm)}function Go(e,t){e.blockedOn===t&&(e.blockedOn=null,nd||(nd=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,d3)))}function Ns(e){function t(i){return Go(i,e)}if(0<Ra.length){Go(Ra[0],e);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gr!==null&&Go(gr,e),yr!==null&&Go(yr,e),vr!==null&&Go(vr,e),Fs.forEach(t),Ls.forEach(t),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)Oy(n),n.blockedOn===null&&ur.shift()}var to=er.ReactCurrentBatchConfig,Hl=!0;function p3(e,t,n,r){var i=ye,o=to.transition;to.transition=null;try{ye=1,Op(e,t,n,r)}finally{ye=i,to.transition=o}}function h3(e,t,n,r){var i=ye,o=to.transition;to.transition=null;try{ye=4,Op(e,t,n,r)}finally{ye=i,to.transition=o}}function Op(e,t,n,r){if(Hl){var i=rd(e,t,n,r);if(i===null)Xc(e,t,r,Vl,n),Nm(e,r);else if(f3(i,e,t,n,r))r.stopPropagation();else if(Nm(e,r),t&4&&-1<c3.indexOf(e)){for(;i!==null;){var o=pa(i);if(o!==null&&Ty(o),o=rd(e,t,n,r),o===null&&Xc(e,t,r,Vl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xc(e,t,r,null,n)}}var Vl=null;function rd(e,t,n,r){if(Vl=null,e=Tp(r),e=Kr(e),e!==null)if(t=gi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vl=e,null}function jy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(t3()){case kp:return 1;case Sy:return 4;case Ul:case n3:return 16;case by:return 536870912;default:return 16}default:return 16}}var dr=null,jp=null,hl=null;function Py(){if(hl)return hl;var e,t=jp,n=t.length,r,i="value"in dr?dr.value:dr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return hl=i.slice(e,1<r?1-r:void 0)}function ml(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Aa(){return!0}function Dm(){return!1}function Dt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Aa:Dm,this.isPropagationStopped=Dm,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),t}var Po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pp=Dt(Po),da=Ie({},Po,{view:0,detail:0}),m3=Dt(da),Uc,Wc,Ko,ku=Ie({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ko&&(Ko&&e.type==="mousemove"?(Uc=e.screenX-Ko.screenX,Wc=e.screenY-Ko.screenY):Wc=Uc=0,Ko=e),Uc)},movementY:function(e){return"movementY"in e?e.movementY:Wc}}),Bm=Dt(ku),g3=Ie({},ku,{dataTransfer:0}),y3=Dt(g3),v3=Ie({},da,{relatedTarget:0}),Hc=Dt(v3),x3=Ie({},Po,{animationName:0,elapsedTime:0,pseudoElement:0}),w3=Dt(x3),S3=Ie({},Po,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b3=Dt(S3),E3=Ie({},Po,{data:0}),Um=Dt(E3),C3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=k3[e])?!!t[e]:!1}function Rp(){return _3}var $3=Ie({},da,{key:function(e){if(e.key){var t=C3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rp,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O3=Dt($3),j3=Ie({},ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=Dt(j3),P3=Ie({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rp}),R3=Dt(P3),A3=Ie({},Po,{propertyName:0,elapsedTime:0,pseudoElement:0}),M3=Dt(A3),I3=Ie({},ku,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),F3=Dt(I3),L3=[9,13,27,32],Ap=qn&&"CompositionEvent"in window,xs=null;qn&&"documentMode"in document&&(xs=document.documentMode);var N3=qn&&"TextEvent"in window&&!xs,Ry=qn&&(!Ap||xs&&8<xs&&11>=xs),Hm=" ",Vm=!1;function Ay(e,t){switch(e){case"keyup":return L3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function My(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zi=!1;function z3(e,t){switch(e){case"compositionend":return My(t);case"keypress":return t.which!==32?null:(Vm=!0,Hm);case"textInput":return e=t.data,e===Hm&&Vm?null:e;default:return null}}function D3(e,t){if(zi)return e==="compositionend"||!Ap&&Ay(e,t)?(e=Py(),hl=jp=dr=null,zi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ry&&t.locale!=="ko"?null:t.data;default:return null}}var B3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B3[e.type]:t==="textarea"}function Iy(e,t,n,r){dy(r),t=Gl(t,"onChange"),0<t.length&&(n=new Pp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ws=null,zs=null;function U3(e){Gy(e,0)}function _u(e){var t=Ui(e);if(oy(t))return e}function W3(e,t){if(e==="change")return t}var Fy=!1;if(qn){var Vc;if(qn){var Gc="oninput"in document;if(!Gc){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),Gc=typeof Km.oninput=="function"}Vc=Gc}else Vc=!1;Fy=Vc&&(!document.documentMode||9<document.documentMode)}function qm(){ws&&(ws.detachEvent("onpropertychange",Ly),zs=ws=null)}function Ly(e){if(e.propertyName==="value"&&_u(zs)){var t=[];Iy(t,zs,e,Tp(e)),gy(U3,t)}}function H3(e,t,n){e==="focusin"?(qm(),ws=t,zs=n,ws.attachEvent("onpropertychange",Ly)):e==="focusout"&&qm()}function V3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _u(zs)}function G3(e,t){if(e==="click")return _u(t)}function K3(e,t){if(e==="input"||e==="change")return _u(t)}function q3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xn=typeof Object.is=="function"?Object.is:q3;function Ds(e,t){if(xn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zf.call(t,i)||!xn(e[i],t[i]))return!1}return!0}function Qm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ym(e,t){var n=Qm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function Ny(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ny(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zy(){for(var e=window,t=zl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zl(e.document)}return t}function Mp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Q3(e){var t=zy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ny(n.ownerDocument.documentElement,n)){if(r!==null&&Mp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ym(n,o);var s=Ym(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Y3=qn&&"documentMode"in document&&11>=document.documentMode,Di=null,id=null,Ss=null,od=!1;function Xm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;od||Di==null||Di!==zl(r)||(r=Di,"selectionStart"in r&&Mp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ss&&Ds(Ss,r)||(Ss=r,r=Gl(id,"onSelect"),0<r.length&&(t=new Pp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Di)))}function Ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bi={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Kc={},Dy={};qn&&(Dy=document.createElement("div").style,"AnimationEvent"in window||(delete Bi.animationend.animation,delete Bi.animationiteration.animation,delete Bi.animationstart.animation),"TransitionEvent"in window||delete Bi.transitionend.transition);function $u(e){if(Kc[e])return Kc[e];if(!Bi[e])return e;var t=Bi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dy)return Kc[e]=t[n];return e}var By=$u("animationend"),Uy=$u("animationiteration"),Wy=$u("animationstart"),Hy=$u("transitionend"),Vy=new Map,Zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){Vy.set(e,t),mi(t,[e])}for(var qc=0;qc<Zm.length;qc++){var Qc=Zm[qc],X3=Qc.toLowerCase(),Z3=Qc[0].toUpperCase()+Qc.slice(1);jr(X3,"on"+Z3)}jr(By,"onAnimationEnd");jr(Uy,"onAnimationIteration");jr(Wy,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Hy,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J3=new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));function Jm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,X4(r,t,void 0,e),e.currentTarget=null}function Gy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Jm(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Jm(i,a,u),o=l}}}if(Bl)throw e=ed,Bl=!1,ed=null,e}function Ee(e,t){var n=t[cd];n===void 0&&(n=t[cd]=new Set);var r=e+"__bubble";n.has(r)||(Ky(t,e,2,!1),n.add(r))}function Yc(e,t,n){var r=0;t&&(r|=4),Ky(n,e,r,t)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function Bs(e){if(!e[Ia]){e[Ia]=!0,ey.forEach(function(n){n!=="selectionchange"&&(J3.has(n)||Yc(n,!1,e),Yc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ia]||(t[Ia]=!0,Yc("selectionchange",!1,t))}}function Ky(e,t,n,r){switch(jy(t)){case 1:var i=p3;break;case 4:i=h3;break;default:i=Op}n=i.bind(null,t,n,e),i=void 0,!Jf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Kr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}gy(function(){var u=o,c=Tp(n),f=[];e:{var p=Vy.get(e);if(p!==void 0){var y=Pp,v=e;switch(e){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":y=O3;break;case"focusin":v="focus",y=Hc;break;case"focusout":v="blur",y=Hc;break;case"beforeblur":case"afterblur":y=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=y3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=R3;break;case By:case Uy:case Wy:y=w3;break;case Hy:y=M3;break;case"scroll":y=m3;break;case"wheel":y=F3;break;case"copy":case"cut":case"paste":y=b3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Wm}var m=(t&4)!==0,E=!m&&e==="scroll",g=m?p!==null?p+"Capture":null:p;m=[];for(var h=u,x;h!==null;){x=h;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,g!==null&&(w=Is(h,g),w!=null&&m.push(Us(h,w,x)))),E)break;h=h.return}0<m.length&&(p=new y(p,v,null,n,c),f.push({event:p,listeners:m}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==Xf&&(v=n.relatedTarget||n.fromElement)&&(Kr(v)||v[Qn]))break e;if((y||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Kr(v):null,v!==null&&(E=gi(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(m=Bm,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(m=Wm,w="onPointerLeave",g="onPointerEnter",h="pointer"),E=y==null?p:Ui(y),x=v==null?p:Ui(v),p=new m(w,h+"leave",y,n,c),p.target=E,p.relatedTarget=x,w=null,Kr(c)===u&&(m=new m(g,h+"enter",v,n,c),m.target=x,m.relatedTarget=E,w=m),E=w,y&&v)t:{for(m=y,g=v,h=0,x=m;x;x=Ci(x))h++;for(x=0,w=g;w;w=Ci(w))x++;for(;0<h-x;)m=Ci(m),h--;for(;0<x-h;)g=Ci(g),x--;for(;h--;){if(m===g||g!==null&&m===g.alternate)break t;m=Ci(m),g=Ci(g)}m=null}else m=null;y!==null&&e0(f,p,y,m,!1),v!==null&&E!==null&&e0(f,E,v,m,!0)}}e:{if(p=u?Ui(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var k=W3;else if(Gm(p))if(Fy)k=K3;else{k=V3;var T=H3}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=G3);if(k&&(k=k(e,u))){Iy(f,k,n,c);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Gf(p,"number",p.value)}switch(T=u?Ui(u):window,e){case"focusin":(Gm(T)||T.contentEditable==="true")&&(Di=T,id=u,Ss=null);break;case"focusout":Ss=id=Di=null;break;case"mousedown":od=!0;break;case"contextmenu":case"mouseup":case"dragend":od=!1,Xm(f,n,c);break;case"selectionchange":if(Y3)break;case"keydown":case"keyup":Xm(f,n,c)}var S;if(Ap)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else zi?Ay(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Ry&&n.locale!=="ko"&&(zi||O!=="onCompositionStart"?O==="onCompositionEnd"&&zi&&(S=Py()):(dr=c,jp="value"in dr?dr.value:dr.textContent,zi=!0)),T=Gl(u,O),0<T.length&&(O=new Um(O,e,null,n,c),f.push({event:O,listeners:T}),S?O.data=S:(S=My(n),S!==null&&(O.data=S)))),(S=N3?z3(e,n):D3(e,n))&&(u=Gl(u,"onBeforeInput"),0<u.length&&(c=new Um("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=S))}Gy(f,t)})}function Us(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Is(e,n),o!=null&&r.unshift(Us(e,o,i)),o=Is(e,t),o!=null&&r.push(Us(e,o,i))),e=e.return}return r}function Ci(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function e0(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Is(n,o),l!=null&&s.unshift(Us(n,l,a))):i||(l=Is(n,o),l!=null&&s.push(Us(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var eS=/\r\n?/g,tS=/\u0000|\uFFFD/g;function t0(e){return(typeof e=="string"?e:""+e).replace(eS,`
`).replace(tS,"")}function Fa(e,t,n){if(t=t0(t),t0(e)!==t&&n)throw Error(R(425))}function Kl(){}var sd=null,ad=null;function ld(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ud=typeof setTimeout=="function"?setTimeout:void 0,nS=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,rS=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(e){return n0.resolve(null).then(e).catch(iS)}:ud;function iS(e){setTimeout(function(){throw e})}function Zc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ns(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ns(t)}function xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function r0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ro,Ws="__reactProps$"+Ro,Qn="__reactContainer$"+Ro,cd="__reactEvents$"+Ro,oS="__reactListeners$"+Ro,sS="__reactHandles$"+Ro;function Kr(e){var t=e[$n];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qn]||n[$n]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=r0(e);e!==null;){if(n=e[$n])return n;e=r0(e)}return t}e=n,n=e.parentNode}return null}function pa(e){return e=e[$n]||e[Qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ui(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Ou(e){return e[Ws]||null}var fd=[],Wi=-1;function Pr(e){return{current:e}}function ke(e){0>Wi||(e.current=fd[Wi],fd[Wi]=null,Wi--)}function be(e,t){Wi++,fd[Wi]=e.current,e.current=t}var $r={},ft=Pr($r),St=Pr(!1),ii=$r;function ao(e,t){var n=e.type.contextTypes;if(!n)return $r;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bt(e){return e=e.childContextTypes,e!=null}function ql(){ke(St),ke(ft)}function i0(e,t,n){if(ft.current!==$r)throw Error(R(168));be(ft,t),be(St,n)}function qy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,H4(e)||"Unknown",i));return Ie({},n,r)}function Ql(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$r,ii=ft.current,be(ft,e),be(St,St.current),!0}function o0(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=qy(e,t,ii),r.__reactInternalMemoizedMergedChildContext=e,ke(St),ke(ft),be(ft,e)):ke(St),be(St,n)}var Wn=null,ju=!1,Jc=!1;function Qy(e){Wn===null?Wn=[e]:Wn.push(e)}function aS(e){ju=!0,Qy(e)}function Rr(){if(!Jc&&Wn!==null){Jc=!0;var e=0,t=ye;try{var n=Wn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wn=null,ju=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(e+1)),wy(kp,Rr),i}finally{ye=t,Jc=!1}}return null}var Hi=[],Vi=0,Yl=null,Xl=0,Gt=[],Kt=0,oi=null,Hn=1,Vn="";function Ur(e,t){Hi[Vi++]=Xl,Hi[Vi++]=Yl,Yl=e,Xl=t}function Yy(e,t,n){Gt[Kt++]=Hn,Gt[Kt++]=Vn,Gt[Kt++]=oi,oi=e;var r=Hn;e=Vn;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var o=32-mn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Hn=1<<32-mn(t)+i|n<<i|r,Vn=o+e}else Hn=1<<o|n<<i|r,Vn=e}function Ip(e){e.return!==null&&(Ur(e,1),Yy(e,1,0))}function Fp(e){for(;e===Yl;)Yl=Hi[--Vi],Hi[Vi]=null,Xl=Hi[--Vi],Hi[Vi]=null;for(;e===oi;)oi=Gt[--Kt],Gt[Kt]=null,Vn=Gt[--Kt],Gt[Kt]=null,Hn=Gt[--Kt],Gt[Kt]=null}var It=null,Rt=null,je=!1,hn=null;function Xy(e,t){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function s0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Rt=xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=oi!==null?{id:Hn,overflow:Vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,It=e,Rt=null,!0):!1;default:return!1}}function dd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pd(e){if(je){var t=Rt;if(t){var n=t;if(!s0(e,t)){if(dd(e))throw Error(R(418));t=xr(n.nextSibling);var r=It;t&&s0(e,t)?Xy(r,n):(e.flags=e.flags&-4097|2,je=!1,It=e)}}else{if(dd(e))throw Error(R(418));e.flags=e.flags&-4097|2,je=!1,It=e}}}function a0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function La(e){if(e!==It)return!1;if(!je)return a0(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ld(e.type,e.memoizedProps)),t&&(t=Rt)){if(dd(e))throw Zy(),Error(R(418));for(;t;)Xy(e,t),t=xr(t.nextSibling)}if(a0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=xr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=It?xr(e.stateNode.nextSibling):null;return!0}function Zy(){for(var e=Rt;e;)e=xr(e.nextSibling)}function lo(){Rt=It=null,je=!1}function Lp(e){hn===null?hn=[e]:hn.push(e)}var lS=er.ReactCurrentBatchConfig;function fn(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Zl=Pr(null),Jl=null,Gi=null,Np=null;function zp(){Np=Gi=Jl=null}function Dp(e){var t=Zl.current;ke(Zl),e._currentValue=t}function hd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function no(e,t){Jl=e,Np=Gi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function Jt(e){var t=e._currentValue;if(Np!==e)if(e={context:e,memoizedValue:t,next:null},Gi===null){if(Jl===null)throw Error(R(308));Gi=e,Jl.dependencies={lanes:0,firstContext:e}}else Gi=Gi.next=e;return t}var qr=null;function Bp(e){qr===null?qr=[e]:qr.push(e)}function Jy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Bp(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yn(e,r)}function Yn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ar=!1;function Up(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ev(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yn(e,n)}return i=r.interleaved,i===null?(t.next=t,Bp(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yn(e,n)}function gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_p(e,n)}}function l0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eu(e,t,n,r){var i=e.updateQueue;ar=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,m=a;switch(p=t,y=n,m.tag){case 1:if(v=m.payload,typeof v=="function"){f=v.call(y,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=m.payload,p=typeof v=="function"?v.call(y,f,p):v,p==null)break e;f=Ie({},f,p);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=f):c=c.next=y,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ai|=s,e.lanes=s,e.memoizedState=f}}function u0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var tv=new Jg.Component().refs;function md(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pu={isMounted:function(e){return(e=e._reactInternals)?gi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),i=br(e),o=Gn(r,i);o.payload=t,n!=null&&(o.callback=n),t=wr(e,o,i),t!==null&&(gn(t,e,i,r),gl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),i=br(e),o=Gn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=wr(e,o,i),t!==null&&(gn(t,e,i,r),gl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=br(e),i=Gn(n,r);i.tag=2,t!=null&&(i.callback=t),t=wr(e,i,r),t!==null&&(gn(t,e,r,n),gl(t,e,r))}};function c0(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ds(n,r)||!Ds(i,o):!0}function nv(e,t,n){var r=!1,i=$r,o=t.contextType;return typeof o=="object"&&o!==null?o=Jt(o):(i=bt(t)?ii:ft.current,r=t.contextTypes,o=(r=r!=null)?ao(e,i):$r),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function f0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pu.enqueueReplaceState(t,t.state,null)}function gd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=tv,Up(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Jt(o):(o=bt(t)?ii:ft.current,i.context=ao(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(md(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Pu.enqueueReplaceState(i,i.state,null),eu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===tv&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Na(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function d0(e){var t=e._init;return t(e._payload)}function rv(e){function t(g,h){if(e){var x=g.deletions;x===null?(g.deletions=[h],g.flags|=16):x.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Er(g,h),g.index=0,g.sibling=null,g}function o(g,h,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<h?(g.flags|=2,h):x):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,x,w){return h===null||h.tag!==6?(h=af(x,g.mode,w),h.return=g,h):(h=i(h,x),h.return=g,h)}function l(g,h,x,w){var k=x.type;return k===Ni?c(g,h,x.props.children,w,x.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===sr&&d0(k)===h.type)?(w=i(h,x.props),w.ref=qo(g,h,x),w.return=g,w):(w=bl(x.type,x.key,x.props,null,g.mode,w),w.ref=qo(g,h,x),w.return=g,w)}function u(g,h,x,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=lf(x,g.mode,w),h.return=g,h):(h=i(h,x.children||[]),h.return=g,h)}function c(g,h,x,w,k){return h===null||h.tag!==7?(h=Jr(x,g.mode,w,k),h.return=g,h):(h=i(h,x),h.return=g,h)}function f(g,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=af(""+h,g.mode,x),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case _a:return x=bl(h.type,h.key,h.props,null,g.mode,x),x.ref=qo(g,null,h),x.return=g,x;case Li:return h=lf(h,g.mode,x),h.return=g,h;case sr:var w=h._init;return f(g,w(h._payload),x)}if(ls(h)||Wo(h))return h=Jr(h,g.mode,x,null),h.return=g,h;Na(g,h)}return null}function p(g,h,x,w){var k=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:a(g,h,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _a:return x.key===k?l(g,h,x,w):null;case Li:return x.key===k?u(g,h,x,w):null;case sr:return k=x._init,p(g,h,k(x._payload),w)}if(ls(x)||Wo(x))return k!==null?null:c(g,h,x,w,null);Na(g,x)}return null}function y(g,h,x,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(x)||null,a(h,g,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case _a:return g=g.get(w.key===null?x:w.key)||null,l(h,g,w,k);case Li:return g=g.get(w.key===null?x:w.key)||null,u(h,g,w,k);case sr:var T=w._init;return y(g,h,x,T(w._payload),k)}if(ls(w)||Wo(w))return g=g.get(x)||null,c(h,g,w,k,null);Na(h,w)}return null}function v(g,h,x,w){for(var k=null,T=null,S=h,O=h=0,j=null;S!==null&&O<x.length;O++){S.index>O?(j=S,S=null):j=S.sibling;var $=p(g,S,x[O],w);if($===null){S===null&&(S=j);break}e&&S&&$.alternate===null&&t(g,S),h=o($,h,O),T===null?k=$:T.sibling=$,T=$,S=j}if(O===x.length)return n(g,S),je&&Ur(g,O),k;if(S===null){for(;O<x.length;O++)S=f(g,x[O],w),S!==null&&(h=o(S,h,O),T===null?k=S:T.sibling=S,T=S);return je&&Ur(g,O),k}for(S=r(g,S);O<x.length;O++)j=y(S,g,O,x[O],w),j!==null&&(e&&j.alternate!==null&&S.delete(j.key===null?O:j.key),h=o(j,h,O),T===null?k=j:T.sibling=j,T=j);return e&&S.forEach(function(A){return t(g,A)}),je&&Ur(g,O),k}function m(g,h,x,w){var k=Wo(x);if(typeof k!="function")throw Error(R(150));if(x=k.call(x),x==null)throw Error(R(151));for(var T=k=null,S=h,O=h=0,j=null,$=x.next();S!==null&&!$.done;O++,$=x.next()){S.index>O?(j=S,S=null):j=S.sibling;var A=p(g,S,$.value,w);if(A===null){S===null&&(S=j);break}e&&S&&A.alternate===null&&t(g,S),h=o(A,h,O),T===null?k=A:T.sibling=A,T=A,S=j}if($.done)return n(g,S),je&&Ur(g,O),k;if(S===null){for(;!$.done;O++,$=x.next())$=f(g,$.value,w),$!==null&&(h=o($,h,O),T===null?k=$:T.sibling=$,T=$);return je&&Ur(g,O),k}for(S=r(g,S);!$.done;O++,$=x.next())$=y(S,g,O,$.value,w),$!==null&&(e&&$.alternate!==null&&S.delete($.key===null?O:$.key),h=o($,h,O),T===null?k=$:T.sibling=$,T=$);return e&&S.forEach(function(Q){return t(g,Q)}),je&&Ur(g,O),k}function E(g,h,x,w){if(typeof x=="object"&&x!==null&&x.type===Ni&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case _a:e:{for(var k=x.key,T=h;T!==null;){if(T.key===k){if(k=x.type,k===Ni){if(T.tag===7){n(g,T.sibling),h=i(T,x.props.children),h.return=g,g=h;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===sr&&d0(k)===T.type){n(g,T.sibling),h=i(T,x.props),h.ref=qo(g,T,x),h.return=g,g=h;break e}n(g,T);break}else t(g,T);T=T.sibling}x.type===Ni?(h=Jr(x.props.children,g.mode,w,x.key),h.return=g,g=h):(w=bl(x.type,x.key,x.props,null,g.mode,w),w.ref=qo(g,h,x),w.return=g,g=w)}return s(g);case Li:e:{for(T=x.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(g,h.sibling),h=i(h,x.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=lf(x,g.mode,w),h.return=g,g=h}return s(g);case sr:return T=x._init,E(g,h,T(x._payload),w)}if(ls(x))return v(g,h,x,w);if(Wo(x))return m(g,h,x,w);Na(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,x),h.return=g,g=h):(n(g,h),h=af(x,g.mode,w),h.return=g,g=h),s(g)):n(g,h)}return E}var uo=rv(!0),iv=rv(!1),ha={},Pn=Pr(ha),Hs=Pr(ha),Vs=Pr(ha);function Qr(e){if(e===ha)throw Error(R(174));return e}function Wp(e,t){switch(be(Vs,t),be(Hs,e),be(Pn,ha),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qf(t,e)}ke(Pn),be(Pn,t)}function co(){ke(Pn),ke(Hs),ke(Vs)}function ov(e){Qr(Vs.current);var t=Qr(Pn.current),n=qf(t,e.type);t!==n&&(be(Hs,e),be(Pn,n))}function Hp(e){Hs.current===e&&(ke(Pn),ke(Hs))}var Ae=Pr(0);function tu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ef=[];function Vp(){for(var e=0;e<ef.length;e++)ef[e]._workInProgressVersionPrimary=null;ef.length=0}var yl=er.ReactCurrentDispatcher,tf=er.ReactCurrentBatchConfig,si=0,Me=null,Ve=null,qe=null,nu=!1,bs=!1,Gs=0,uS=0;function at(){throw Error(R(321))}function Gp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xn(e[n],t[n]))return!1;return!0}function Kp(e,t,n,r,i,o){if(si=o,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yl.current=e===null||e.memoizedState===null?pS:hS,e=n(r,i),bs){o=0;do{if(bs=!1,Gs=0,25<=o)throw Error(R(301));o+=1,qe=Ve=null,t.updateQueue=null,yl.current=mS,e=n(r,i)}while(bs)}if(yl.current=ru,t=Ve!==null&&Ve.next!==null,si=0,qe=Ve=Me=null,nu=!1,t)throw Error(R(300));return e}function qp(){var e=Gs!==0;return Gs=0,e}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Me.memoizedState=qe=e:qe=qe.next=e,qe}function en(){if(Ve===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=qe===null?Me.memoizedState:qe.next;if(t!==null)qe=t,Ve=e;else{if(e===null)throw Error(R(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},qe===null?Me.memoizedState=qe=e:qe=qe.next=e}return qe}function Ks(e,t){return typeof t=="function"?t(e):t}function nf(e){var t=en(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Ve,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((si&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Me.lanes|=c,ai|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,xn(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Me.lanes|=o,ai|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rf(e){var t=en(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);xn(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function sv(){}function av(e,t){var n=Me,r=en(),i=t(),o=!xn(r.memoizedState,i);if(o&&(r.memoizedState=i,wt=!0),r=r.queue,Qp(cv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,qs(9,uv.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(R(349));si&30||lv(n,t,i)}return i}function lv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uv(e,t,n,r){t.value=n,t.getSnapshot=r,fv(t)&&dv(e)}function cv(e,t,n){return n(function(){fv(t)&&dv(e)})}function fv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xn(e,n)}catch{return!0}}function dv(e){var t=Yn(e,1);t!==null&&gn(t,e,1,-1)}function p0(e){var t=En();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:e},t.queue=e,e=e.dispatch=dS.bind(null,Me,e),[t.memoizedState,e]}function qs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pv(){return en().memoizedState}function vl(e,t,n,r){var i=En();Me.flags|=e,i.memoizedState=qs(1|t,n,void 0,r===void 0?null:r)}function Ru(e,t,n,r){var i=en();r=r===void 0?null:r;var o=void 0;if(Ve!==null){var s=Ve.memoizedState;if(o=s.destroy,r!==null&&Gp(r,s.deps)){i.memoizedState=qs(t,n,o,r);return}}Me.flags|=e,i.memoizedState=qs(1|t,n,o,r)}function h0(e,t){return vl(8390656,8,e,t)}function Qp(e,t){return Ru(2048,8,e,t)}function hv(e,t){return Ru(4,2,e,t)}function mv(e,t){return Ru(4,4,e,t)}function gv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yv(e,t,n){return n=n!=null?n.concat([e]):null,Ru(4,4,gv.bind(null,t,e),n)}function Yp(){}function vv(e,t){var n=en();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xv(e,t){var n=en();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wv(e,t,n){return si&21?(xn(n,t)||(n=Ey(),Me.lanes|=n,ai|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function cS(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=tf.transition;tf.transition={};try{e(!1),t()}finally{ye=n,tf.transition=r}}function Sv(){return en().memoizedState}function fS(e,t,n){var r=br(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bv(e))Ev(t,n);else if(n=Jy(e,t,n,r),n!==null){var i=pt();gn(n,e,r,i),Cv(n,t,r)}}function dS(e,t,n){var r=br(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bv(e))Ev(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,xn(a,s)){var l=t.interleaved;l===null?(i.next=i,Bp(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Jy(e,t,i,r),n!==null&&(i=pt(),gn(n,e,r,i),Cv(n,t,r))}}function bv(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function Ev(e,t){bs=nu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_p(e,n)}}var ru={readContext:Jt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},pS={readContext:Jt,useCallback:function(e,t){return En().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:h0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vl(4194308,4,gv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vl(4194308,4,e,t)},useInsertionEffect:function(e,t){return vl(4,2,e,t)},useMemo:function(e,t){var n=En();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=En();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fS.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var t=En();return e={current:e},t.memoizedState=e},useState:p0,useDebugValue:Yp,useDeferredValue:function(e){return En().memoizedState=e},useTransition:function(){var e=p0(!1),t=e[0];return e=cS.bind(null,e[1]),En().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Me,i=En();if(je){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Xe===null)throw Error(R(349));si&30||lv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,h0(cv.bind(null,r,o,e),[e]),r.flags|=2048,qs(9,uv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=En(),t=Xe.identifierPrefix;if(je){var n=Vn,r=Hn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hS={readContext:Jt,useCallback:vv,useContext:Jt,useEffect:Qp,useImperativeHandle:yv,useInsertionEffect:hv,useLayoutEffect:mv,useMemo:xv,useReducer:nf,useRef:pv,useState:function(){return nf(Ks)},useDebugValue:Yp,useDeferredValue:function(e){var t=en();return wv(t,Ve.memoizedState,e)},useTransition:function(){var e=nf(Ks)[0],t=en().memoizedState;return[e,t]},useMutableSource:sv,useSyncExternalStore:av,useId:Sv,unstable_isNewReconciler:!1},mS={readContext:Jt,useCallback:vv,useContext:Jt,useEffect:Qp,useImperativeHandle:yv,useInsertionEffect:hv,useLayoutEffect:mv,useMemo:xv,useReducer:rf,useRef:pv,useState:function(){return rf(Ks)},useDebugValue:Yp,useDeferredValue:function(e){var t=en();return Ve===null?t.memoizedState=e:wv(t,Ve.memoizedState,e)},useTransition:function(){var e=rf(Ks)[0],t=en().memoizedState;return[e,t]},useMutableSource:sv,useSyncExternalStore:av,useId:Sv,unstable_isNewReconciler:!1};function fo(e,t){try{var n="",r=t;do n+=W4(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function of(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gS=typeof WeakMap=="function"?WeakMap:Map;function Tv(e,t,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ou||(ou=!0,_d=r),yd(e,t)},n}function kv(e,t,n){n=Gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){yd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){yd(e,t),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function m0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jS.bind(null,e,t,n),t.then(e,e))}function g0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function y0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gn(-1,1),t.tag=2,wr(n,t,1))),n.lanes|=1),e)}var yS=er.ReactCurrentOwner,wt=!1;function dt(e,t,n,r){t.child=e===null?iv(t,null,n,r):uo(t,e.child,n,r)}function v0(e,t,n,r,i){n=n.render;var o=t.ref;return no(t,i),r=Kp(e,t,n,r,o,i),n=qp(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xn(e,t,i)):(je&&n&&Ip(t),t.flags|=1,dt(e,t,r,i),t.child)}function x0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ih(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_v(e,t,o,r,i)):(e=bl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ds,n(s,r)&&e.ref===t.ref)return Xn(e,t,i)}return t.flags|=1,e=Er(o,r),e.ref=t.ref,e.return=t,t.child=e}function _v(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ds(o,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Xn(e,t,i)}return vd(e,t,n,r,i)}function $v(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(qi,jt),jt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(qi,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,be(qi,jt),jt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,be(qi,jt),jt|=r;return dt(e,t,i,n),t.child}function Ov(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vd(e,t,n,r,i){var o=bt(n)?ii:ft.current;return o=ao(t,o),no(t,i),n=Kp(e,t,n,r,o,i),r=qp(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xn(e,t,i)):(je&&r&&Ip(t),t.flags|=1,dt(e,t,n,i),t.child)}function w0(e,t,n,r,i){if(bt(n)){var o=!0;Ql(t)}else o=!1;if(no(t,i),t.stateNode===null)xl(e,t),nv(t,n,r),gd(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Jt(u):(u=bt(n)?ii:ft.current,u=ao(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&f0(t,s,r,u),ar=!1;var p=t.memoizedState;s.state=p,eu(t,r,s,i),l=t.memoizedState,a!==r||p!==l||St.current||ar?(typeof c=="function"&&(md(t,n,c,r),l=t.memoizedState),(a=ar||c0(t,n,a,r,p,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ev(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:fn(t.type,a),s.props=u,f=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jt(l):(l=bt(n)?ii:ft.current,l=ao(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&f0(t,s,r,l),ar=!1,p=t.memoizedState,s.state=p,eu(t,r,s,i);var v=t.memoizedState;a!==f||p!==v||St.current||ar?(typeof y=="function"&&(md(t,n,y,r),v=t.memoizedState),(u=ar||c0(t,n,u,r,p,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return xd(e,t,n,r,o,i)}function xd(e,t,n,r,i,o){Ov(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&o0(t,n,!1),Xn(e,t,o);r=t.stateNode,yS.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=uo(t,e.child,null,o),t.child=uo(t,null,a,o)):dt(e,t,a,o),t.memoizedState=r.state,i&&o0(t,n,!0),t.child}function jv(e){var t=e.stateNode;t.pendingContext?i0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&i0(e,t.context,!1),Wp(e,t.containerInfo)}function S0(e,t,n,r,i){return lo(),Lp(i),t.flags|=256,dt(e,t,n,r),t.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Sd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pv(e,t,n){var r=t.pendingProps,i=Ae.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Ae,i&1),e===null)return pd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Iu(s,r,0,null),e=Jr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Sd(n),t.memoizedState=wd,e):Xp(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vS(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Er(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Er(a,o):(o=Jr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Sd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=wd,r}return o=e.child,e=o.sibling,r=Er(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xp(e,t){return t=Iu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function za(e,t,n,r){return r!==null&&Lp(r),uo(t,e.child,null,n),e=Xp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vS(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=of(Error(R(422))),za(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Iu({mode:"visible",children:r.children},i,0,null),o=Jr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&uo(t,e.child,null,s),t.child.memoizedState=Sd(s),t.memoizedState=wd,o);if(!(t.mode&1))return za(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(R(419)),r=of(o,r,void 0),za(e,t,s,r)}if(a=(s&e.childLanes)!==0,wt||a){if(r=Xe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yn(e,i),gn(r,e,i,-1))}return rh(),r=of(Error(R(421))),za(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=PS.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Rt=xr(i.nextSibling),It=t,je=!0,hn=null,e!==null&&(Gt[Kt++]=Hn,Gt[Kt++]=Vn,Gt[Kt++]=oi,Hn=e.id,Vn=e.overflow,oi=t),t=Xp(t,r.children),t.flags|=4096,t)}function b0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hd(e.return,t,n)}function sf(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Rv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(dt(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&b0(e,n,t);else if(e.tag===19)b0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&tu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sf(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&tu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sf(t,!0,n,null,o);break;case"together":sf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ai|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xS(e,t,n){switch(t.tag){case 3:jv(t),lo();break;case 5:ov(t);break;case 1:bt(t.type)&&Ql(t);break;case 4:Wp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;be(Zl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?Pv(e,t,n):(be(Ae,Ae.current&1),e=Xn(e,t,n),e!==null?e.sibling:null);be(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,$v(e,t,n)}return Xn(e,t,n)}var Av,bd,Mv,Iv;Av=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bd=function(){};Mv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qr(Pn.current);var o=null;switch(n){case"input":i=Hf(e,i),r=Hf(e,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=Kf(e,i),r=Kf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kl)}Qf(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(As.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(As.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ee("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Iv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qo(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wS(e,t,n){var r=t.pendingProps;switch(Fp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return bt(t.type)&&ql(),lt(t),null;case 3:return r=t.stateNode,co(),ke(St),ke(ft),Vp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(La(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,hn!==null&&(jd(hn),hn=null))),bd(e,t),lt(t),null;case 5:Hp(t);var i=Qr(Vs.current);if(n=t.type,e!==null&&t.stateNode!=null)Mv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return lt(t),null}if(e=Qr(Pn.current),La(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$n]=t,r[Ws]=o,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<cs.length;i++)Ee(cs[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Pm(r,o),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ee("invalid",r);break;case"textarea":Am(r,o),Ee("invalid",r)}Qf(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Fa(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Fa(r.textContent,a,e),i=["children",""+a]):As.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ee("scroll",r)}switch(n){case"input":$a(r),Rm(r,o,!0);break;case"textarea":$a(r),Mm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Kl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ly(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[$n]=t,e[Ws]=r,Av(e,t,!1,!1),t.stateNode=e;e:{switch(s=Yf(n,r),n){case"dialog":Ee("cancel",e),Ee("close",e),i=r;break;case"iframe":case"object":case"embed":Ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<cs.length;i++)Ee(cs[i],e);i=r;break;case"source":Ee("error",e),i=r;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),i=r;break;case"details":Ee("toggle",e),i=r;break;case"input":Pm(e,r),i=Hf(e,r),Ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),Ee("invalid",e);break;case"textarea":Am(e,r),i=Kf(e,r),Ee("invalid",e);break;default:i=r}Qf(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?fy(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uy(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ms(e,l):typeof l=="number"&&Ms(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(As.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Ee("scroll",e):l!=null&&Sp(e,o,l,s))}switch(n){case"input":$a(e),Rm(e,r,!1);break;case"textarea":$a(e),Mm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_r(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zi(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)Iv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Qr(Vs.current),Qr(Pn.current),La(t)){if(r=t.stateNode,n=t.memoizedProps,r[$n]=t,(o=r.nodeValue!==n)&&(e=It,e!==null))switch(e.tag){case 3:Fa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fa(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$n]=t,t.stateNode=r}return lt(t),null;case 13:if(ke(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&Rt!==null&&t.mode&1&&!(t.flags&128))Zy(),lo(),t.flags|=98560,o=!1;else if(o=La(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[$n]=t}else lo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),o=!1}else hn!==null&&(jd(hn),hn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Ge===0&&(Ge=3):rh())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return co(),bd(e,t),e===null&&Bs(t.stateNode.containerInfo),lt(t),null;case 10:return Dp(t.type._context),lt(t),null;case 17:return bt(t.type)&&ql(),lt(t),null;case 19:if(ke(Ae),o=t.memoizedState,o===null)return lt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Qo(o,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=tu(e),s!==null){for(t.flags|=128,Qo(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Ae,Ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>po&&(t.flags|=128,r=!0,Qo(o,!1),t.lanes=4194304)}else{if(!r)if(e=tu(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!je)return lt(t),null}else 2*ze()-o.renderingStartTime>po&&n!==1073741824&&(t.flags|=128,r=!0,Qo(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Ae.current,be(Ae,r?n&1|2:n&1),t):(lt(t),null);case 22:case 23:return nh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?jt&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function SS(e,t){switch(Fp(t),t.tag){case 1:return bt(t.type)&&ql(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return co(),ke(St),ke(ft),Vp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hp(t),null;case 13:if(ke(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));lo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Ae),null;case 4:return co(),null;case 10:return Dp(t.type._context),null;case 22:case 23:return nh(),null;case 24:return null;default:return null}}var Da=!1,ct=!1,bS=typeof WeakSet=="function"?WeakSet:Set,U=null;function Ki(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function Ed(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var E0=!1;function ES(e,t){if(sd=Hl,e=zy(),Mp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===e)break t;if(p===n&&++u===i&&(a=s),p===o&&++c===r&&(l=s),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:e,selectionRange:n},Hl=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var m=v.memoizedProps,E=v.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?m:fn(t.type,m),E);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){Ne(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return v=E0,E0=!1,v}function Es(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ed(t,n,o)}i=i.next}while(i!==r)}}function Au(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fv(e){var t=e.alternate;t!==null&&(e.alternate=null,Fv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$n],delete t[Ws],delete t[cd],delete t[oS],delete t[sS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lv(e){return e.tag===5||e.tag===3||e.tag===4}function C0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Td(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kl));else if(r!==4&&(e=e.child,e!==null))for(Td(e,t,n),e=e.sibling;e!==null;)Td(e,t,n),e=e.sibling}function kd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kd(e,t,n),e=e.sibling;e!==null;)kd(e,t,n),e=e.sibling}var tt=null,dn=!1;function rr(e,t,n){for(n=n.child;n!==null;)Nv(e,t,n),n=n.sibling}function Nv(e,t,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Tu,n)}catch{}switch(n.tag){case 5:ct||Ki(n,t);case 6:var r=tt,i=dn;tt=null,rr(e,t,n),tt=r,dn=i,tt!==null&&(dn?(e=tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(dn?(e=tt,n=n.stateNode,e.nodeType===8?Zc(e.parentNode,n):e.nodeType===1&&Zc(e,n),Ns(e)):Zc(tt,n.stateNode));break;case 4:r=tt,i=dn,tt=n.stateNode.containerInfo,dn=!0,rr(e,t,n),tt=r,dn=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ed(n,t,s),i=i.next}while(i!==r)}rr(e,t,n);break;case 1:if(!ct&&(Ki(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,t,a)}rr(e,t,n);break;case 21:rr(e,t,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,rr(e,t,n),ct=r):rr(e,t,n);break;default:rr(e,t,n)}}function T0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bS),t.forEach(function(r){var i=RS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:tt=a.stateNode,dn=!1;break e;case 3:tt=a.stateNode.containerInfo,dn=!0;break e;case 4:tt=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(tt===null)throw Error(R(160));Nv(o,s,i),tt=null,dn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zv(t,e),t=t.sibling}function zv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(an(t,e),Sn(e),r&4){try{Es(3,e,e.return),Au(3,e)}catch(m){Ne(e,e.return,m)}try{Es(5,e,e.return)}catch(m){Ne(e,e.return,m)}}break;case 1:an(t,e),Sn(e),r&512&&n!==null&&Ki(n,n.return);break;case 5:if(an(t,e),Sn(e),r&512&&n!==null&&Ki(n,n.return),e.flags&32){var i=e.stateNode;try{Ms(i,"")}catch(m){Ne(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&sy(i,o),Yf(a,s);var u=Yf(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?fy(i,f):c==="dangerouslySetInnerHTML"?uy(i,f):c==="children"?Ms(i,f):Sp(i,c,f,u)}switch(a){case"input":Vf(i,o);break;case"textarea":ay(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Zi(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Zi(i,!!o.multiple,o.defaultValue,!0):Zi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ws]=o}catch(m){Ne(e,e.return,m)}}break;case 6:if(an(t,e),Sn(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){Ne(e,e.return,m)}}break;case 3:if(an(t,e),Sn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ns(t.containerInfo)}catch(m){Ne(e,e.return,m)}break;case 4:an(t,e),Sn(e);break;case 13:an(t,e),Sn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(eh=ze())),r&4&&T0(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ct=(u=ct)||c,an(t,e),ct=u):an(t,e),Sn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(U=e,c=e.child;c!==null;){for(f=U=c;U!==null;){switch(p=U,y=p.child,p.tag){case 0:case 11:case 14:case 15:Es(4,p,p.return);break;case 1:Ki(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(m){Ne(r,n,m)}}break;case 5:Ki(p,p.return);break;case 22:if(p.memoizedState!==null){_0(f);continue}}y!==null?(y.return=p,U=y):_0(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cy("display",s))}catch(m){Ne(e,e.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){Ne(e,e.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:an(t,e),Sn(e),r&4&&T0(e);break;case 21:break;default:an(t,e),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lv(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ms(i,""),r.flags&=-33);var o=C0(e);kd(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=C0(e);Td(e,a,s);break;default:throw Error(R(161))}}catch(l){Ne(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function CS(e,t,n){U=e,Dv(e)}function Dv(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Da;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ct;a=Da;var u=ct;if(Da=s,(ct=l)&&!u)for(U=i;U!==null;)s=U,l=s.child,s.tag===22&&s.memoizedState!==null?$0(i):l!==null?(l.return=s,U=l):$0(i);for(;o!==null;)U=o,Dv(o),o=o.sibling;U=i,Da=a,ct=u}k0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):k0(e)}}function k0(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ct||Au(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:fn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&u0(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}u0(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ns(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}ct||t.flags&512&&Cd(t)}catch(p){Ne(t,t.return,p)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function _0(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function $0(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Au(4,t)}catch(l){Ne(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ne(t,i,l)}}var o=t.return;try{Cd(t)}catch(l){Ne(t,o,l)}break;case 5:var s=t.return;try{Cd(t)}catch(l){Ne(t,s,l)}}}catch(l){Ne(t,t.return,l)}if(t===e){U=null;break}var a=t.sibling;if(a!==null){a.return=t.return,U=a;break}U=t.return}}var TS=Math.ceil,iu=er.ReactCurrentDispatcher,Zp=er.ReactCurrentOwner,Yt=er.ReactCurrentBatchConfig,le=0,Xe=null,We=null,it=0,jt=0,qi=Pr(0),Ge=0,Qs=null,ai=0,Mu=0,Jp=0,Cs=null,vt=null,eh=0,po=1/0,Bn=null,ou=!1,_d=null,Sr=null,Ba=!1,pr=null,su=0,Ts=0,$d=null,wl=-1,Sl=0;function pt(){return le&6?ze():wl!==-1?wl:wl=ze()}function br(e){return e.mode&1?le&2&&it!==0?it&-it:lS.transition!==null?(Sl===0&&(Sl=Ey()),Sl):(e=ye,e!==0||(e=window.event,e=e===void 0?16:jy(e.type)),e):1}function gn(e,t,n,r){if(50<Ts)throw Ts=0,$d=null,Error(R(185));fa(e,n,r),(!(le&2)||e!==Xe)&&(e===Xe&&(!(le&2)&&(Mu|=n),Ge===4&&cr(e,it)),Et(e,r),n===1&&le===0&&!(t.mode&1)&&(po=ze()+500,ju&&Rr()))}function Et(e,t){var n=e.callbackNode;l3(e,t);var r=Wl(e,e===Xe?it:0);if(r===0)n!==null&&Lm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lm(n),t===1)e.tag===0?aS(O0.bind(null,e)):Qy(O0.bind(null,e)),rS(function(){!(le&6)&&Rr()}),n=null;else{switch(Cy(r)){case 1:n=kp;break;case 4:n=Sy;break;case 16:n=Ul;break;case 536870912:n=by;break;default:n=Ul}n=qv(n,Bv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bv(e,t){if(wl=-1,Sl=0,le&6)throw Error(R(327));var n=e.callbackNode;if(ro()&&e.callbackNode!==n)return null;var r=Wl(e,e===Xe?it:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=au(e,r);else{t=r;var i=le;le|=2;var o=Wv();(Xe!==e||it!==t)&&(Bn=null,po=ze()+500,Zr(e,t));do try{$S();break}catch(a){Uv(e,a)}while(!0);zp(),iu.current=o,le=i,We!==null?t=0:(Xe=null,it=0,t=Ge)}if(t!==0){if(t===2&&(i=td(e),i!==0&&(r=i,t=Od(e,i))),t===1)throw n=Qs,Zr(e,0),cr(e,r),Et(e,ze()),n;if(t===6)cr(e,r);else{if(i=e.current.alternate,!(r&30)&&!kS(i)&&(t=au(e,r),t===2&&(o=td(e),o!==0&&(r=o,t=Od(e,o))),t===1))throw n=Qs,Zr(e,0),cr(e,r),Et(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Wr(e,vt,Bn);break;case 3:if(cr(e,r),(r&130023424)===r&&(t=eh+500-ze(),10<t)){if(Wl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ud(Wr.bind(null,e,vt,Bn),t);break}Wr(e,vt,Bn);break;case 4:if(cr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-mn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TS(r/1960))-r,10<r){e.timeoutHandle=ud(Wr.bind(null,e,vt,Bn),r);break}Wr(e,vt,Bn);break;case 5:Wr(e,vt,Bn);break;default:throw Error(R(329))}}}return Et(e,ze()),e.callbackNode===n?Bv.bind(null,e):null}function Od(e,t){var n=Cs;return e.current.memoizedState.isDehydrated&&(Zr(e,t).flags|=256),e=au(e,t),e!==2&&(t=vt,vt=n,t!==null&&jd(t)),e}function jd(e){vt===null?vt=e:vt.push.apply(vt,e)}function kS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!xn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cr(e,t){for(t&=~Jp,t&=~Mu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mn(t),r=1<<n;e[n]=-1,t&=~r}}function O0(e){if(le&6)throw Error(R(327));ro();var t=Wl(e,0);if(!(t&1))return Et(e,ze()),null;var n=au(e,t);if(e.tag!==0&&n===2){var r=td(e);r!==0&&(t=r,n=Od(e,r))}if(n===1)throw n=Qs,Zr(e,0),cr(e,t),Et(e,ze()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wr(e,vt,Bn),Et(e,ze()),null}function th(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(po=ze()+500,ju&&Rr())}}function li(e){pr!==null&&pr.tag===0&&!(le&6)&&ro();var t=le;le|=1;var n=Yt.transition,r=ye;try{if(Yt.transition=null,ye=1,e)return e()}finally{ye=r,Yt.transition=n,le=t,!(le&6)&&Rr()}}function nh(){jt=qi.current,ke(qi)}function Zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nS(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(Fp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ql();break;case 3:co(),ke(St),ke(ft),Vp();break;case 5:Hp(r);break;case 4:co();break;case 13:ke(Ae);break;case 19:ke(Ae);break;case 10:Dp(r.type._context);break;case 22:case 23:nh()}n=n.return}if(Xe=e,We=e=Er(e.current,null),it=jt=t,Ge=0,Qs=null,Jp=Mu=ai=0,vt=Cs=null,qr!==null){for(t=0;t<qr.length;t++)if(n=qr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}qr=null}return e}function Uv(e,t){do{var n=We;try{if(zp(),yl.current=ru,nu){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nu=!1}if(si=0,qe=Ve=Me=null,bs=!1,Gs=0,Zp.current=null,n===null||n.return===null){Ge=1,Qs=t,We=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=it,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=g0(s);if(y!==null){y.flags&=-257,y0(y,s,a,o,t),y.mode&1&&m0(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var m=new Set;m.add(l),t.updateQueue=m}else v.add(l);break e}else{if(!(t&1)){m0(o,u,t),rh();break e}l=Error(R(426))}}else if(je&&a.mode&1){var E=g0(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),y0(E,s,a,o,t),Lp(fo(l,a));break e}}o=l=fo(l,a),Ge!==4&&(Ge=2),Cs===null?Cs=[o]:Cs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Tv(o,l,t);l0(o,g);break e;case 1:a=l;var h=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Sr===null||!Sr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=kv(o,a,t);l0(o,w);break e}}o=o.return}while(o!==null)}Vv(n)}catch(k){t=k,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function Wv(){var e=iu.current;return iu.current=ru,e===null?ru:e}function rh(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Xe===null||!(ai&268435455)&&!(Mu&268435455)||cr(Xe,it)}function au(e,t){var n=le;le|=2;var r=Wv();(Xe!==e||it!==t)&&(Bn=null,Zr(e,t));do try{_S();break}catch(i){Uv(e,i)}while(!0);if(zp(),le=n,iu.current=r,We!==null)throw Error(R(261));return Xe=null,it=0,Ge}function _S(){for(;We!==null;)Hv(We)}function $S(){for(;We!==null&&!J4();)Hv(We)}function Hv(e){var t=Kv(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?Vv(e):We=t,Zp.current=null}function Vv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=SS(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,We=null;return}}else if(n=wS(n,t,jt),n!==null){We=n;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Ge===0&&(Ge=5)}function Wr(e,t,n){var r=ye,i=Yt.transition;try{Yt.transition=null,ye=1,OS(e,t,n,r)}finally{Yt.transition=i,ye=r}return null}function OS(e,t,n,r){do ro();while(pr!==null);if(le&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(u3(e,o),e===Xe&&(We=Xe=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ba||(Ba=!0,qv(Ul,function(){return ro(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Yt.transition,Yt.transition=null;var s=ye;ye=1;var a=le;le|=4,Zp.current=null,ES(e,n),zv(n,e),Q3(ad),Hl=!!sd,ad=sd=null,e.current=n,CS(n),e3(),le=a,ye=s,Yt.transition=o}else e.current=n;if(Ba&&(Ba=!1,pr=e,su=i),o=e.pendingLanes,o===0&&(Sr=null),r3(n.stateNode),Et(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ou)throw ou=!1,e=_d,_d=null,e;return su&1&&e.tag!==0&&ro(),o=e.pendingLanes,o&1?e===$d?Ts++:(Ts=0,$d=e):Ts=0,Rr(),null}function ro(){if(pr!==null){var e=Cy(su),t=Yt.transition,n=ye;try{if(Yt.transition=null,ye=16>e?16:e,pr===null)var r=!1;else{if(e=pr,pr=null,su=0,le&6)throw Error(R(331));var i=le;for(le|=4,U=e.current;U!==null;){var o=U,s=o.child;if(U.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Es(8,c,o)}var f=c.child;if(f!==null)f.return=c,U=f;else for(;U!==null;){c=U;var p=c.sibling,y=c.return;if(Fv(c),c===u){U=null;break}if(p!==null){p.return=y,U=p;break}U=y}}}var v=o.alternate;if(v!==null){var m=v.child;if(m!==null){v.child=null;do{var E=m.sibling;m.sibling=null,m=E}while(m!==null)}}U=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,U=s;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Es(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,U=g;break e}U=o.return}}var h=e.current;for(U=h;U!==null;){s=U;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,U=x;else e:for(s=h;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Au(9,a)}}catch(k){Ne(a,a.return,k)}if(a===s){U=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,U=w;break e}U=a.return}}if(le=i,Rr(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Tu,e)}catch{}r=!0}return r}finally{ye=n,Yt.transition=t}}return!1}function j0(e,t,n){t=fo(n,t),t=Tv(e,t,1),e=wr(e,t,1),t=pt(),e!==null&&(fa(e,1,t),Et(e,t))}function Ne(e,t,n){if(e.tag===3)j0(e,e,n);else for(;t!==null;){if(t.tag===3){j0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){e=fo(n,e),e=kv(t,e,1),t=wr(t,e,1),e=pt(),t!==null&&(fa(t,1,e),Et(t,e));break}}t=t.return}}function jS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(it&n)===n&&(Ge===4||Ge===3&&(it&130023424)===it&&500>ze()-eh?Zr(e,0):Jp|=n),Et(e,t)}function Gv(e,t){t===0&&(e.mode&1?(t=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):t=1);var n=pt();e=Yn(e,t),e!==null&&(fa(e,t,n),Et(e,n))}function PS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gv(e,n)}function RS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Gv(e,n)}var Kv;Kv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,xS(e,t,n);wt=!!(e.flags&131072)}else wt=!1,je&&t.flags&1048576&&Yy(t,Xl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xl(e,t),e=t.pendingProps;var i=ao(t,ft.current);no(t,n),i=Kp(null,t,r,e,i,n);var o=qp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(o=!0,Ql(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Up(t),i.updater=Pu,t.stateNode=i,i._reactInternals=t,gd(t,r,e,n),t=xd(null,t,r,!0,o,n)):(t.tag=0,je&&o&&Ip(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=MS(r),e=fn(r,e),i){case 0:t=vd(null,t,r,e,n);break e;case 1:t=w0(null,t,r,e,n);break e;case 11:t=v0(null,t,r,e,n);break e;case 14:t=x0(null,t,r,fn(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:fn(r,i),vd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:fn(r,i),w0(e,t,r,i,n);case 3:e:{if(jv(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ev(e,t),eu(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=fo(Error(R(423)),t),t=S0(e,t,r,n,i);break e}else if(r!==i){i=fo(Error(R(424)),t),t=S0(e,t,r,n,i);break e}else for(Rt=xr(t.stateNode.containerInfo.firstChild),It=t,je=!0,hn=null,n=iv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lo(),r===i){t=Xn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return ov(t),e===null&&pd(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ld(r,i)?s=null:o!==null&&ld(r,o)&&(t.flags|=32),Ov(e,t),dt(e,t,s,n),t.child;case 6:return e===null&&pd(t),null;case 13:return Pv(e,t,n);case 4:return Wp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=uo(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:fn(r,i),v0(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,be(Zl,r._currentValue),r._currentValue=s,o!==null)if(xn(o.value,s)){if(o.children===i.children&&!St.current){t=Xn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Gn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hd(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),hd(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,no(t,n),i=Jt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=fn(r,t.pendingProps),i=fn(r.type,i),x0(e,t,r,i,n);case 15:return _v(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:fn(r,i),xl(e,t),t.tag=1,bt(r)?(e=!0,Ql(t)):e=!1,no(t,n),nv(t,r,i),gd(t,r,i,n),xd(null,t,r,!0,e,n);case 19:return Rv(e,t,n);case 22:return $v(e,t,n)}throw Error(R(156,t.tag))};function qv(e,t){return wy(e,t)}function AS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(e,t,n,r){return new AS(e,t,n,r)}function ih(e){return e=e.prototype,!(!e||!e.isReactComponent)}function MS(e){if(typeof e=="function")return ih(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ep)return 11;if(e===Cp)return 14}return 2}function Er(e,t){var n=e.alternate;return n===null?(n=Qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bl(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ih(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ni:return Jr(n.children,i,o,t);case bp:s=8,i|=8;break;case Df:return e=Qt(12,n,t,i|2),e.elementType=Df,e.lanes=o,e;case Bf:return e=Qt(13,n,t,i),e.elementType=Bf,e.lanes=o,e;case Uf:return e=Qt(19,n,t,i),e.elementType=Uf,e.lanes=o,e;case ry:return Iu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ty:s=10;break e;case ny:s=9;break e;case Ep:s=11;break e;case Cp:s=14;break e;case sr:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Qt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Jr(e,t,n,r){return e=Qt(7,e,r,t),e.lanes=n,e}function Iu(e,t,n,r){return e=Qt(22,e,r,t),e.elementType=ry,e.lanes=n,e.stateNode={isHidden:!1},e}function af(e,t,n){return e=Qt(6,e,null,t),e.lanes=n,e}function lf(e,t,n){return t=Qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function IS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oh(e,t,n,r,i,o,s,a,l){return e=new IS(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Up(o),e}function FS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Li,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qv(e){if(!e)return $r;e=e._reactInternals;e:{if(gi(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(bt(n))return qy(e,n,t)}return t}function Yv(e,t,n,r,i,o,s,a,l){return e=oh(n,r,!0,e,i,o,s,a,l),e.context=Qv(null),n=e.current,r=pt(),i=br(n),o=Gn(r,i),o.callback=t??null,wr(n,o,i),e.current.lanes=i,fa(e,i,r),Et(e,r),e}function Fu(e,t,n,r){var i=t.current,o=pt(),s=br(i);return n=Qv(n),t.context===null?t.context=n:t.pendingContext=n,t=Gn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wr(i,t,s),e!==null&&(gn(e,i,s,o),gl(e,i,s)),s}function lu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function P0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sh(e,t){P0(e,t),(e=e.alternate)&&P0(e,t)}function LS(){return null}var Xv=typeof reportError=="function"?reportError:function(e){console.error(e)};function ah(e){this._internalRoot=e}Lu.prototype.render=ah.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Fu(e,t,null,null)};Lu.prototype.unmount=ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;li(function(){Fu(null,e,null,null)}),t[Qn]=null}};function Lu(e){this._internalRoot=e}Lu.prototype.unstable_scheduleHydration=function(e){if(e){var t=_y();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ur.length&&t!==0&&t<ur[n].priority;n++);ur.splice(n,0,e),n===0&&Oy(e)}};function lh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function R0(){}function NS(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=lu(s);o.call(u)}}var s=Yv(t,r,e,0,null,!1,!1,"",R0);return e._reactRootContainer=s,e[Qn]=s.current,Bs(e.nodeType===8?e.parentNode:e),li(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=lu(l);a.call(u)}}var l=oh(e,0,!1,null,null,!1,!1,"",R0);return e._reactRootContainer=l,e[Qn]=l.current,Bs(e.nodeType===8?e.parentNode:e),li(function(){Fu(t,l,n,r)}),l}function zu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=lu(s);a.call(l)}}Fu(t,s,e,i)}else s=NS(n,t,e,i,r);return lu(s)}Ty=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=us(t.pendingLanes);n!==0&&(_p(t,n|1),Et(t,ze()),!(le&6)&&(po=ze()+500,Rr()))}break;case 13:li(function(){var r=Yn(e,1);if(r!==null){var i=pt();gn(r,e,1,i)}}),sh(e,1)}};$p=function(e){if(e.tag===13){var t=Yn(e,134217728);if(t!==null){var n=pt();gn(t,e,134217728,n)}sh(e,134217728)}};ky=function(e){if(e.tag===13){var t=br(e),n=Yn(e,t);if(n!==null){var r=pt();gn(n,e,t,r)}sh(e,t)}};_y=function(){return ye};$y=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};Zf=function(e,t,n){switch(t){case"input":if(Vf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ou(r);if(!i)throw Error(R(90));oy(r),Vf(r,i)}}}break;case"textarea":ay(e,n);break;case"select":t=n.value,t!=null&&Zi(e,!!n.multiple,t,!1)}};hy=th;my=li;var zS={usingClientEntryPoint:!1,Events:[pa,Ui,Ou,dy,py,th]},Yo={findFiberByHostInstance:Kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},DS={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vy(e),e===null?null:e.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||LS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{Tu=Ua.inject(DS),jn=Ua}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zS;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lh(t))throw Error(R(200));return FS(e,t,null,n)};zt.createRoot=function(e,t){if(!lh(e))throw Error(R(299));var n=!1,r="",i=Xv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=oh(e,1,!1,null,null,n,!1,r,i),e[Qn]=t.current,Bs(e.nodeType===8?e.parentNode:e),new ah(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=vy(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return li(e)};zt.hydrate=function(e,t,n){if(!Nu(t))throw Error(R(200));return zu(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!lh(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Xv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Yv(t,null,e,1,n??null,i,!1,o,s),e[Qn]=t.current,Bs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Lu(t)};zt.render=function(e,t,n){if(!Nu(t))throw Error(R(200));return zu(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!Nu(e))throw Error(R(40));return e._reactRootContainer?(li(function(){zu(null,null,e,!1,function(){e._reactRootContainer=null,e[Qn]=null})}),!0):!1};zt.unstable_batchedUpdates=th;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Nu(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return zu(e,t,n,!1,r)};zt.version="18.2.0-next-9e3b772b8-20220608";function Zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zv)}catch(e){console.error(e)}}Zv(),Yg.exports=zt;var uh=Yg.exports;const Wa=Oo(uh);var A0=uh;Nf.createRoot=A0.createRoot,Nf.hydrateRoot=A0.hydrateRoot;var Ye=function(){return Ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ye.apply(this,arguments)};function ho(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Jv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var BS=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,US=Jv(function(e){return BS.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ce="-ms-",ks="-moz-",pe="-webkit-",ex="comm",Du="rule",ch="decl",WS="@import",tx="@keyframes",HS="@layer",nx=Math.abs,fh=String.fromCharCode,Pd=Object.assign;function VS(e,t){return Qe(e,0)^45?(((t<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}function rx(e){return e.trim()}function Un(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function El(e,t,n){return e.indexOf(t,n)}function Qe(e,t){return e.charCodeAt(t)|0}function mo(e,t,n){return e.slice(t,n)}function Tn(e){return e.length}function ix(e){return e.length}function fs(e,t){return t.push(e),e}function GS(e,t){return e.map(t).join("")}function M0(e,t){return e.filter(function(n){return!Un(n,t)})}var Bu=1,go=1,ox=0,tn=0,Be=0,Ao="";function Uu(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Bu,column:go,length:s,return:"",siblings:a}}function or(e,t){return Pd(Uu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ti(e){for(;e.root;)e=or(e.root,{children:[e]});fs(e,e.siblings)}function KS(){return Be}function qS(){return Be=tn>0?Qe(Ao,--tn):0,go--,Be===10&&(go=1,Bu--),Be}function yn(){return Be=tn<ox?Qe(Ao,tn++):0,go++,Be===10&&(go=1,Bu++),Be}function ei(){return Qe(Ao,tn)}function Cl(){return tn}function Wu(e,t){return mo(Ao,e,t)}function Rd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function QS(e){return Bu=go=1,ox=Tn(Ao=e),tn=0,[]}function YS(e){return Ao="",e}function uf(e){return rx(Wu(tn-1,Ad(e===91?e+2:e===40?e+1:e)))}function XS(e){for(;(Be=ei())&&Be<33;)yn();return Rd(e)>2||Rd(Be)>3?"":" "}function ZS(e,t){for(;--t&&yn()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return Wu(e,Cl()+(t<6&&ei()==32&&yn()==32))}function Ad(e){for(;yn();)switch(Be){case e:return tn;case 34:case 39:e!==34&&e!==39&&Ad(Be);break;case 40:e===41&&Ad(e);break;case 92:yn();break}return tn}function JS(e,t){for(;yn()&&e+Be!==57;)if(e+Be===84&&ei()===47)break;return"/*"+Wu(t,tn-1)+"*"+fh(e===47?e:yn())}function eb(e){for(;!Rd(ei());)yn();return Wu(e,tn)}function tb(e){return YS(Tl("",null,null,null,[""],e=QS(e),0,[0],e))}function Tl(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,p=0,y=0,v=0,m=1,E=1,g=1,h=0,x="",w=i,k=o,T=r,S=x;E;)switch(v=h,h=yn()){case 40:if(v!=108&&Qe(S,f-1)==58){El(S+=ne(uf(h),"&","&\f"),"&\f",nx(u?a[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:S+=uf(h);break;case 9:case 10:case 13:case 32:S+=XS(v);break;case 92:S+=ZS(Cl()-1,7);continue;case 47:switch(ei()){case 42:case 47:fs(nb(JS(yn(),Cl()),t,n,l),l);break;default:S+="/"}break;case 123*m:a[u++]=Tn(S)*g;case 125*m:case 59:case 0:switch(h){case 0:case 125:E=0;case 59+c:g==-1&&(S=ne(S,/\f/g,"")),y>0&&Tn(S)-f&&fs(y>32?F0(S+";",r,n,f-1,l):F0(ne(S," ","")+";",r,n,f-2,l),l);break;case 59:S+=";";default:if(fs(T=I0(S,t,n,u,c,i,a,x,w=[],k=[],f,o),o),h===123)if(c===0)Tl(S,t,T,T,w,o,f,a,k);else switch(p===99&&Qe(S,3)===110?100:p){case 100:case 108:case 109:case 115:Tl(e,T,T,r&&fs(I0(e,T,T,0,0,i,a,x,i,w=[],f,k),k),i,k,f,a,r?w:k);break;default:Tl(S,T,T,T,[""],k,0,a,k)}}u=c=y=0,m=g=1,x=S="",f=s;break;case 58:f=1+Tn(S),y=v;default:if(m<1){if(h==123)--m;else if(h==125&&m++==0&&qS()==125)continue}switch(S+=fh(h),h*m){case 38:g=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(Tn(S)-1)*g,g=1;break;case 64:ei()===45&&(S+=uf(yn())),p=ei(),c=f=Tn(x=S+=eb(Cl())),h++;break;case 45:v===45&&Tn(S)==2&&(m=0)}}return o}function I0(e,t,n,r,i,o,s,a,l,u,c,f){for(var p=i-1,y=i===0?o:[""],v=ix(y),m=0,E=0,g=0;m<r;++m)for(var h=0,x=mo(e,p+1,p=nx(E=s[m])),w=e;h<v;++h)(w=rx(E>0?y[h]+" "+x:ne(x,/&\f/g,y[h])))&&(l[g++]=w);return Uu(e,t,n,i===0?Du:a,l,u,c,f)}function nb(e,t,n,r){return Uu(e,t,n,ex,fh(KS()),mo(e,2,-2),0,r)}function F0(e,t,n,r,i){return Uu(e,t,n,ch,mo(e,0,r),mo(e,r+1,-1),r,i)}function sx(e,t,n){switch(VS(e,t)){case 5103:return pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+e+e;case 4789:return ks+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+e+ks+e+Ce+e+e;case 5936:switch(Qe(e,t+11)){case 114:return pe+e+Ce+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pe+e+Ce+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pe+e+Ce+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return pe+e+Ce+e+e;case 6165:return pe+e+Ce+"flex-"+e+e;case 5187:return pe+e+ne(e,/(\w+).+(:[^]+)/,pe+"box-$1$2"+Ce+"flex-$1$2")+e;case 5443:return pe+e+Ce+"flex-item-"+ne(e,/flex-|-self/g,"")+(Un(e,/flex-|baseline/)?"":Ce+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return pe+e+Ce+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return pe+e+Ce+ne(e,"shrink","negative")+e;case 5292:return pe+e+Ce+ne(e,"basis","preferred-size")+e;case 6060:return pe+"box-"+ne(e,"-grow","")+pe+e+Ce+ne(e,"grow","positive")+e;case 4554:return pe+ne(e,/([^-])(transform)/g,"$1"+pe+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+e+e;case 4200:if(!Un(e,/flex-|baseline/))return Ce+"grid-column-align"+mo(e,t)+e;break;case 2592:case 3360:return Ce+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Un(r.props,/grid-\w+-end/)})?~El(e+(n=n[t].value),"span",0)?e:Ce+ne(e,"-start","")+e+Ce+"grid-row-span:"+(~El(n,"span",0)?Un(n,/\d+/):+Un(n,/\d+/)-+Un(e,/\d+/))+";":Ce+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Un(r.props,/grid-\w+-start/)})?e:Ce+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tn(e)-1-t>6)switch(Qe(e,t+1)){case 109:if(Qe(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+ks+(Qe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~El(e,"stretch",0)?sx(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return Ce+i+":"+o+u+(s?Ce+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(Qe(e,t+6)===121)return ne(e,":",":"+pe)+e;break;case 6444:switch(Qe(e,Qe(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(Qe(e,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+Ce+"$2box$3")+e;case 100:return ne(e,":",":"+Ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function uu(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function rb(e,t,n,r){switch(e.type){case HS:if(e.children.length)break;case WS:case ch:return e.return=e.return||e.value;case ex:return"";case tx:return e.return=e.value+"{"+uu(e.children,r)+"}";case Du:if(!Tn(e.value=e.props.join(",")))return""}return Tn(n=uu(e.children,r))?e.return=e.value+"{"+n+"}":""}function ib(e){var t=ix(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function ob(e){return function(t){t.root||(t=t.return)&&e(t)}}function sb(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ch:e.return=sx(e.value,e.length,n);return;case tx:return uu([or(e,{value:ne(e.value,"@","@"+pe)})],r);case Du:if(e.length)return GS(n=e.props,function(i){switch(Un(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ti(or(e,{props:[ne(i,/:(read-\w+)/,":"+ks+"$1")]})),Ti(or(e,{props:[i]})),Pd(e,{props:M0(n,r)});break;case"::placeholder":Ti(or(e,{props:[ne(i,/:(plac\w+)/,":"+pe+"input-$1")]})),Ti(or(e,{props:[ne(i,/:(plac\w+)/,":"+ks+"$1")]})),Ti(or(e,{props:[ne(i,/:(plac\w+)/,Ce+"input-$1")]})),Ti(or(e,{props:[i]})),Pd(e,{props:M0(n,r)});break}return""})}}var ab={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ot={},yo=typeof process<"u"&&Ot!==void 0&&(Ot.REACT_APP_SC_ATTR||Ot.SC_ATTR)||"data-styled",ax="active",lx="data-styled-version",Hu="6.1.6",dh=`/*!sc*/
`,ph=typeof window<"u"&&"HTMLElement"in window,lb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==""?Ot.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ot.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.SC_DISABLE_SPEEDY!==void 0&&Ot.SC_DISABLE_SPEEDY!==""&&Ot.SC_DISABLE_SPEEDY!=="false"&&Ot.SC_DISABLE_SPEEDY),ub={},Vu=Object.freeze([]),vo=Object.freeze({});function ux(e,t,n){return n===void 0&&(n=vo),e.theme!==n.theme&&e.theme||t||n.theme}var cx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fb=/(^-|-$)/g;function L0(e){return e.replace(cb,"-").replace(fb,"")}var db=/(a)(d)/gi,Ha=52,N0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Md(e){var t,n="";for(t=Math.abs(e);t>Ha;t=t/Ha|0)n=N0(t%Ha)+n;return(N0(t%Ha)+n).replace(db,"$1-$2")}var cf,fx=5381,Qi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},dx=function(e){return Qi(fx,e)};function hh(e){return Md(dx(e)>>>0)}function pb(e){return e.displayName||e.name||"Component"}function ff(e){return typeof e=="string"&&!0}var px=typeof Symbol=="function"&&Symbol.for,hx=px?Symbol.for("react.memo"):60115,hb=px?Symbol.for("react.forward_ref"):60112,mb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yb=((cf={})[hb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cf[hx]=mx,cf);function z0(e){return("type"in(t=e)&&t.type.$$typeof)===hx?mx:"$$typeof"in e?yb[e.$$typeof]:mb;var t}var vb=Object.defineProperty,xb=Object.getOwnPropertyNames,D0=Object.getOwnPropertySymbols,wb=Object.getOwnPropertyDescriptor,Sb=Object.getPrototypeOf,B0=Object.prototype;function gx(e,t,n){if(typeof t!="string"){if(B0){var r=Sb(t);r&&r!==B0&&gx(e,r,n)}var i=xb(t);D0&&(i=i.concat(D0(t)));for(var o=z0(e),s=z0(t),a=0;a<i.length;++a){var l=i[a];if(!(l in gb||n&&n[l]||s&&l in s||o&&l in o)){var u=wb(t,l);try{vb(e,l,u)}catch{}}}}return e}function ui(e){return typeof e=="function"}function mh(e){return typeof e=="object"&&"styledComponentId"in e}function Yr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function cu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ys(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Id(e,t,n){if(n===void 0&&(n=!1),!n&&!Ys(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Id(e[r],t[r]);else if(Ys(t))for(var r in t)e[r]=Id(e[r],t[r]);return e}function gh(e,t){Object.defineProperty(e,"toString",{value:t})}function ci(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var bb=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ci(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(dh);return n},e}(),kl=new Map,fu=new Map,_l=1,Va=function(e){if(kl.has(e))return kl.get(e);for(;fu.has(_l);)_l++;var t=_l++;return kl.set(e,t),fu.set(t,e),t},Eb=function(e,t){_l=t+1,kl.set(e,t),fu.set(t,e)},Cb="style[".concat(yo,"][").concat(lx,'="').concat(Hu,'"]'),Tb=new RegExp("^".concat(yo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kb=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},_b=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(dh),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(Tb);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Eb(c,u),kb(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function $b(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(yo,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(yo,ax),r.setAttribute(lx,Hu);var s=$b();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Ob=function(){function e(t){this.element=yx(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw ci(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),jb=function(){function e(t){this.element=yx(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Pb=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),U0=ph,Rb={isServer:!ph,useCSSOMInjection:!lb},du=function(){function e(t,n,r){t===void 0&&(t=vo),n===void 0&&(n={});var i=this;this.options=Ye(Ye({},Rb),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ph&&U0&&(U0=!1,function(o){for(var s=document.querySelectorAll(Cb),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(yo)!==ax&&(_b(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),gh(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var p=function(g){return fu.get(g)}(f);if(p===void 0)return"continue";var y=o.names.get(p),v=s.getGroup(f);if(y===void 0||v.length===0)return"continue";var m="".concat(yo,".g").concat(f,'[id="').concat(p,'"]'),E="";y!==void 0&&y.forEach(function(g){g.length>0&&(E+="".concat(g,","))}),l+="".concat(v).concat(m,'{content:"').concat(E,'"}').concat(dh)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Va(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ye(Ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Pb(i):r?new Ob(i):new jb(i)}(this.options),new bb(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Va(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Va(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Va(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ab=/&/g,Mb=/^\s*\/\/.*$/gm;function vx(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=vx(n.children,t)),n})}function Ib(e){var t,n,r,i=e===void 0?vo:e,o=i.options,s=o===void 0?vo:o,a=i.plugins,l=a===void 0?Vu:a,u=function(p,y,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):p},c=l.slice();c.push(function(p){p.type===Du&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Ab,n).replace(r,u))}),s.prefix&&c.push(sb),c.push(rb);var f=function(p,y,v,m){y===void 0&&(y=""),v===void 0&&(v=""),m===void 0&&(m="&"),t=m,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var E=p.replace(Mb,""),g=tb(v||y?"".concat(v," ").concat(y," { ").concat(E," }"):E);s.namespace&&(g=vx(g,s.namespace));var h=[];return uu(g,ib(c.concat(ob(function(x){return h.push(x)})))),h};return f.hash=l.length?l.reduce(function(p,y){return y.name||ci(15),Qi(p,y.name)},fx).toString():"",f}var Fb=new du,Fd=Ib(),xx=N.createContext({shouldForwardProp:void 0,styleSheet:Fb,stylis:Fd});xx.Consumer;N.createContext(void 0);function Ld(){return b.useContext(xx)}var wx=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Fd);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,gh(this,function(){throw ci(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Fd),this.name+t.hash},e}(),Lb=function(e){return e>="A"&&e<="Z"};function W0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Lb(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Sx=function(e){return e==null||e===!1||e===""},bx=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Sx(o)&&(Array.isArray(o)&&o.isCss||ui(o)?r.push("".concat(W0(i),":"),o,";"):Ys(o)?r.push.apply(r,ho(ho(["".concat(i," {")],bx(o),!1),["}"],!1)):r.push("".concat(W0(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ab||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Cr(e,t,n,r){if(Sx(e))return[];if(mh(e))return[".".concat(e.styledComponentId)];if(ui(e)){if(!ui(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Cr(i,t,n,r)}var o;return e instanceof wx?n?(e.inject(n,r),[e.getName(r)]):[e]:Ys(e)?bx(e):Array.isArray(e)?Array.prototype.concat.apply(Vu,e.map(function(s){return Cr(s,t,n,r)})):[e.toString()]}function Ex(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ui(n)&&!mh(n))return!1}return!0}var Nb=dx(Hu),zb=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ex(t),this.componentId=n,this.baseHash=Qi(Nb,n),this.baseStyle=r,du.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Yr(i,this.staticRulesId);else{var o=cu(Cr(this.rules,t,n,r)),s=Md(Qi(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Yr(i,s),this.staticRulesId=s}else{for(var l=Qi(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var p=cu(Cr(f,t,n,r));l=Qi(l,p+c),u+=p}}if(u){var y=Md(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=Yr(i,y)}}return i},e}(),Xs=N.createContext(void 0);Xs.Consumer;function Db(e){var t=N.useContext(Xs),n=b.useMemo(function(){return function(r,i){if(!r)throw ci(14);if(ui(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw ci(8);return i?Ye(Ye({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?N.createElement(Xs.Provider,{value:n},e.children):null}var df={};function Bb(e,t,n){var r=mh(e),i=e,o=!ff(e),s=t.attrs,a=s===void 0?Vu:s,l=t.componentId,u=l===void 0?function(w,k){var T=typeof w!="string"?"sc":L0(w);df[T]=(df[T]||0)+1;var S="".concat(T,"-").concat(hh(Hu+T+df[T]));return k?"".concat(k,"-").concat(S):S}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(w){return ff(w)?"styled.".concat(w):"Styled(".concat(pb(w),")")}(e):c,p=t.displayName&&t.componentId?"".concat(L0(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var m=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;v=function(w,k){return m(w,k)&&E(w,k)}}else v=m}var g=new zb(n,p,r?i.componentStyle:void 0);function h(w,k){return function(T,S,O){var j=T.attrs,$=T.componentStyle,A=T.defaultProps,Q=T.foldedComponentIds,D=T.styledComponentId,X=T.target,G=N.useContext(Xs),J=Ld(),te=T.shouldForwardProp||J.shouldForwardProp,M=ux(S,G,A)||vo,I=function(se,he,de){for(var xe,me=Ye(Ye({},he),{className:void 0,theme:de}),Je=0;Je<se.length;Je+=1){var K=ui(xe=se[Je])?xe(me):xe;for(var z in K)me[z]=z==="className"?Yr(me[z],K[z]):z==="style"?Ye(Ye({},me[z]),K[z]):K[z]}return he.className&&(me.className=Yr(me.className,he.className)),me}(j,S,M),W=I.as||X,ee={};for(var Y in I)I[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&I.theme===M||(Y==="forwardedAs"?ee.as=I.forwardedAs:te&&!te(Y,W)||(ee[Y]=I[Y]));var Pe=function(se,he){var de=Ld(),xe=se.generateAndInjectStyles(he,de.styleSheet,de.stylis);return xe}($,I),ue=Yr(Q,D);return Pe&&(ue+=" "+Pe),I.className&&(ue+=" "+I.className),ee[ff(W)&&!cx.has(W)?"class":"className"]=ue,ee.ref=O,b.createElement(W,ee)}(x,w,k)}h.displayName=f;var x=N.forwardRef(h);return x.attrs=y,x.componentStyle=g,x.displayName=f,x.shouldForwardProp=v,x.foldedComponentIds=r?Yr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=p,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(k){for(var T=[],S=1;S<arguments.length;S++)T[S-1]=arguments[S];for(var O=0,j=T;O<j.length;O++)Id(k,j[O],!0);return k}({},i.defaultProps,w):w}}),gh(x,function(){return".".concat(x.styledComponentId)}),o&&gx(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function H0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var V0=function(e){return Object.assign(e,{isCss:!0})};function ma(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ui(e)||Ys(e))return V0(Cr(H0(Vu,ho([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Cr(r):V0(Cr(H0(r,t)))}function Nd(e,t,n){if(n===void 0&&(n=vo),!t)throw ci(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,ma.apply(void 0,ho([i],o,!1)))};return r.attrs=function(i){return Nd(e,t,Ye(Ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Nd(e,t,Ye(Ye({},n),i))},r}var Cx=function(e){return Nd(Bb,e)},C=Cx;cx.forEach(function(e){C[e]=Cx(e)});var Ub=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ex(t),du.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(cu(Cr(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&du.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Wb(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ma.apply(void 0,ho([e],t,!1)),i="sc-global-".concat(hh(JSON.stringify(r))),o=new Ub(r,i),s=function(l){var u=Ld(),c=N.useContext(Xs),f=N.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(f,l,u.styleSheet,c,u.stylis),N.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,f,p){if(o.isStatic)o.renderStyles(l,ub,c,p);else{var y=Ye(Ye({},u),{theme:ux(u,f,s.defaultProps)});o.renderStyles(l,y,c,p)}}return N.memo(s)}function Gu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=cu(ma.apply(void 0,ho([e],t,!1))),i=hh(r);return new wx(i,r)}const Hb=Wb`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  @media(max-width:980px) {
    font-size: 55%;
  }

  body {
  background-color: ${e=>e.theme.colors.mainBgColor};
  font-family: 'Roboto', sans-serif;
  height: 100%;
  margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h1{
    margin: 0;
    padding: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }
  
  h3 {
    margin: 0;
    padding: 0;
  }
  h5 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    /* line-height: 1; */
    /* vertical-align: middle; */
  }
`,Vb=C.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,Gb=C.span`
  color: ${e=>{var t;return e!=null&&e.color?(t=e==null?void 0:e.color)==null?void 0:t.white:e.theme.colors.mainTextColor}};
  font-family: DM Sans;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -1.48px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`,Kb=C.div`
  width: 3.6rem;
  height: 2.4rem;
`,qb=C.svg`
  fill: ${e=>{var t;return e!=null&&e.color?(t=e==null?void 0:e.color)==null?void 0:t.white:e.theme.colors.mainTextColor}};

  width: 100%;
  height: 100%;
`;function Tx({color:e}){return d.jsxs(Vb,{children:[d.jsx(Kb,{children:d.jsx("a",{href:"https://alexsmagin.com",children:d.jsx(qb,{color:e,children:d.jsx("use",{href:"images/icons.svg#icon-logo"})})})}),d.jsx("a",{href:"https://alexsmagin.com",children:d.jsx(Gb,{color:e,children:"AlexSmagin"})})]})}var kx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},G0=N.createContext&&N.createContext(kx),Tr=function(){return Tr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Tr.apply(this,arguments)},Qb=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function _x(e){return e&&e.map(function(t,n){return N.createElement(t.tag,Tr({key:n},t.attr),_x(t.child))})}function _e(e){return function(t){return N.createElement(Yb,Tr({attr:Tr({},e.attr)},t),_x(e.child))}}function Yb(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=Qb(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),N.createElement("svg",Tr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Tr(Tr({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&N.createElement("title",null,o),e.children)};return G0!==void 0?N.createElement(G0.Consumer,null,function(n){return t(n)}):t(kx)}function Xb(e){return _e({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"}}]})(e)}function yh(e){return _e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(e)}const Zb=C.div`
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`,Jb=C.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`,e5=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${e=>e.theme.colors.mainBgColor};
  background-color: ${e=>e.theme.colors.burgerOverlay};
  z-index: 1000;
  transform: translateX(${e=>e!=null&&e.$isOpen?"0%":"-100%"});
  transition: transform 0.3s ease-in-out;
`,t5=C(Xb)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.mainTextColor};
`,n5=C(yh)`
  color: ${e=>e.theme.colors.mainTextColor};
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

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
`,r5=C.div`
  position: relative;
  left: 0;
  top: 10rem;
  width: 100%;
  max-width: 311px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;

  padding: 4rem;
  color: ${e=>e.theme.colors.mainTextColor};
  /* background-color: ${e=>e.theme.colors.modalContainerColor}; */
  border-radius: 20px;
  z-index: 500;
`,i5=C.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,o5=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`,pf=C.a`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: DM Sans;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
`;function s5(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M2 12h1"}},{tag:"path",attr:{d:"M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2"}},{tag:"path",attr:{d:"M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"}},{tag:"path",attr:{d:"M9 12h6"}},{tag:"path",attr:{d:"M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"}},{tag:"path",attr:{d:"M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2"}},{tag:"path",attr:{d:"M22 12h-1"}}]})(e)}function a5(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}},{tag:"path",attr:{d:"M13 17.5v4.5l2 -1.5l2 1.5v-4.5"}},{tag:"path",attr:{d:"M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"}},{tag:"path",attr:{d:"M6 9l12 0"}},{tag:"path",attr:{d:"M6 12l3 0"}},{tag:"path",attr:{d:"M6 15l2 0"}}]})(e)}function l5(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"}}]})(e)}function u5(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"}},{tag:"path",attr:{d:"M6.343 17.657l-1.414 1.414"}},{tag:"path",attr:{d:"M6.343 6.343l-1.414 -1.414"}},{tag:"path",attr:{d:"M17.657 6.343l1.414 -1.414"}},{tag:"path",attr:{d:"M17.657 17.657l1.414 1.414"}},{tag:"path",attr:{d:"M4 12h-2"}},{tag:"path",attr:{d:"M12 4v-2"}},{tag:"path",attr:{d:"M20 12h2"}},{tag:"path",attr:{d:"M12 20v2"}}]})(e)}const c5=C.button`
  border: none;
  outline: none;
  background: none;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: 0.3s;
`,f5=C(u5)`
  color: ${e=>e.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.3s;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    background-color: ${e=>e.theme.colors.switcherHoverBg};
  }
`,d5=C(l5)`
  color: ${e=>e.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.3s;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    background-color: ${e=>e.theme.colors.switcherHoverBg};
  }
`;function $x({toggleTheme:e,isDarkTheme:t}){const n=()=>{e()};return d.jsx(c5,{onClick:n,children:t?d.jsx(d5,{}):d.jsx(f5,{})})}function p5(e){return _e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function h5(e){return _e({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function m5(e){return _e({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}}]})(e)}function g5(e){return _e({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"}}]})(e)}function y5(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"}}]})(e)}function v5(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(e)}function Ox(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}}]})(e)}function x5(e){return _e({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}}]})(e)}const w5=C.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,Ga=C.a`
  display: block;
  width: 3.6rem;
  height: 3.6rem;
`,S5=C(h5)`
  color: ${e=>{var t;return e!=null&&e.color?(t=e==null?void 0:e.color)==null?void 0:t.white:e.theme.colors.mainTextColor}};
  font-size: 3.6rem;
  transition: 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: ${e=>{var t;return e!=null&&e.hover?(t=e==null?void 0:e.hover)==null?void 0:t.instagram:"#e1306c"}};
  }
`,b5=C(m5)`
  color: ${e=>{var t;return e!=null&&e.color?(t=e==null?void 0:e.color)==null?void 0:t.white:e.theme.colors.mainTextColor}};
  font-size: 3.6rem;
  transition: 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: ${e=>{var t;return e!=null&&e.hover?(t=e==null?void 0:e.hover)==null?void 0:t.youtube:"#ff0000"}};
  }
`,E5=C(p5)`
  color: ${e=>{var t;return e!=null&&e.color?(t=e==null?void 0:e.color)==null?void 0:t.white:e.theme.colors.mainTextColor}};
  font-size: 3.6rem;
  transition: color 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: ${e=>{var t;return e!=null&&e.hover?(t=e==null?void 0:e.hover)==null?void 0:t.facebook:"#3b5998"}};
  }
`,C5=C(y5)`
  color: ${e=>{var t;return e!=null&&e.color?(t=e==null?void 0:e.color)==null?void 0:t.white:e.theme.colors.mainTextColor}};
  font-size: 3.6rem;
  transition: color 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: ${e=>{var t;return e!=null&&e.hover?(t=e==null?void 0:e.hover)==null?void 0:t.discord:"#7289d9"}};
  }
`;function vh({color:e}){return d.jsxs(w5,{children:[d.jsx("li",{children:d.jsx(Ga,{href:"https://instagram.com/fitlife_alex1",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Alex Smagin's Instagram profile",children:d.jsx(S5,{color:e})})}),d.jsx("li",{children:d.jsx(Ga,{href:"https://youtube.com/@ALEXandRbig1",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Alex Smagin's YouTube channel",children:d.jsx(b5,{color:e})})}),d.jsx("li",{children:d.jsx(Ga,{href:"https://facebook.com/profile.php?id=100079407520314",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Alex Smagin's Facebook profile",children:d.jsx(E5,{color:e})})}),d.jsx("li",{children:d.jsx(Ga,{href:"https://discord.gg/jH3tqxTh",target:"_blank",rel:"noopener noreferrer","aria-label":"Join Alex Smagin's Discord server",children:d.jsx(C5,{color:e})})})]})}const T5=Gu`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`,k5=Gu`
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(-15deg) scale(1.2);
  }
  50% {
    transform: rotate(15deg) scale(1.2);
  }
  75% {
    transform: rotate(-15deg) scale(1.2);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`,_5=C.div`
  display: flex;
  align-items: ${e=>(e==null?void 0:e.$location)==="hero"?"end":"center"};
  flex-direction: ${e=>(e==null?void 0:e.$location)==="hero"?"column":"row"};
  gap: 1.2rem;
  z-index: 10;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    z-index: 10;
  }
`,jx=C.span`
  color: ${e=>e.theme.colors.greenColor};
  font-size: 1.4rem;
  width: 1.4rem;
  height: 1.4rem;
  transition: transform 5s ease-in-out;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    width: 2.4rem;
    height: 2.4rem;
  }
`,Px=C.span`
  color: ${e=>e.theme.colors.heroTextColor};
  font-size: 1.4rem;
  width: 1.4rem;
  height: 1.4rem;
  transition: transform 2s ease-in-out;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    width: 2.4rem;
    height: 2.4rem;
  }
`,K0=C.a`
  width: 10.4rem;
  cursor: pointer;
  background-color: ${e=>e.theme.colors.accentColor};
  outline: none;
  border: none;
  padding: 0.4rem 1.2rem;
  border-radius: 6px;
  color: ${e=>e.theme.colors.heroTextColor};
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${e=>e.theme.colors.heroTextColor};
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  &:hover {
    ${jx} {
      animation: ${T5} 1.2s infinite ease-in-out;
    }
    ${Px} {
      animation: ${k5} 2.5s infinite ease-in-out;
    }
  }

  @media (min-width: 768px) {
    width: auto;
    gap: 1.2rem;
    padding: 1.2rem 2.4rem;
    font-size: 16px;
    width: auto;
  }
`;function $5(e){return _e({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"}}]})(e)}function Nr(e){return _e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function Rx(e){return _e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function Ax(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"}}]})(e)}function xh({location:e}){return d.jsxs(_5,{$location:e,children:[d.jsxs(K0,{href:"tel:+17734141884","aria-label":"Phone number +1 (773) 4141884",rel:"noopener noreferrer",children:["Call Now",d.jsx(jx,{children:d.jsx(Rx,{})})]}),d.jsxs(K0,{href:"mailto:pt@alexsmagin.com",children:["Email Me",d.jsx(Px,{children:d.jsx(Ax,{})})]})]})}const O5={instagram:"#e1306c",youtube:"#ff0000",facebook:"#3b5998",discord:"#7289d9"};function j5({toggleTheme:e,isDarkTheme:t}){const[n,r]=b.useState(!1),i=()=>{r(!n)};return d.jsxs(d.Fragment,{children:[d.jsxs(Jb,{children:[d.jsx($x,{toggleTheme:e,isDarkTheme:t}),d.jsx(Zb,{onClick:i,children:d.jsx(t5,{})})]}),d.jsx(e5,{$isOpen:n,children:d.jsxs(r5,{children:[d.jsx(n5,{onClick:i}),d.jsx("nav",{children:d.jsxs(i5,{children:[d.jsx("li",{onClick:i,children:d.jsx(pf,{href:"#gallery",children:"Gallery"})}),d.jsx("li",{onClick:i,children:d.jsx(pf,{href:"#about",children:"About"})}),d.jsx("li",{onClick:i,children:d.jsx(pf,{href:"#exercises",children:"Exercises"})})]})}),d.jsx(xh,{}),d.jsx(o5,{children:d.jsx(vh,{color:O5,onClick:i})})]})})]})}const P5=C.header`
  padding: 2.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: top 0.3s ease-in-out;
  position: relative;
  z-index: 100;
`,R5=C.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`,A5=C.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,hf=C.a`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: DM Sans;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  transition: 0.3s linear;

  position: relative;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    background-color: ${e=>e.theme.colors.mainTextColor};
    height: 1px;
    width: 0;
    left: 0;
    bottom: 0;
    transition: 0.3s linear;
  }

  &:before {
    content: "";
    position: absolute;
    background-color: ${e=>e.theme.colors.mainTextColor};
    height: 1px;
    width: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s linear;
  }

  &:hover {
    color: ${e=>e.theme.colors.mainTextColor};
  }

  &:hover:after {
    width: 50%;
  }

  &:hover:before {
    width: 50%;
  }
`;function M5({toggleTheme:e,isDarkTheme:t}){return d.jsxs(P5,{children:[d.jsx(Tx,{}),d.jsx("div",{children:d.jsxs(R5,{children:[d.jsxs(A5,{children:[d.jsx("li",{children:d.jsx(hf,{href:"#gallery",children:"gallery"})}),d.jsx("li",{children:d.jsx(hf,{href:"#about",children:"about"})}),d.jsx("li",{children:d.jsx(hf,{href:"#exercises",children:"exercises"})})]}),d.jsx(vh,{}),d.jsx($x,{toggleTheme:e,isDarkTheme:t})]})}),d.jsx(j5,{toggleTheme:e,isDarkTheme:t})]})}const I5=Gu`
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,Mx=ma`
  animation: ${I5} 500ms linear;
`,Xo=C.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;

  @media (min-width: 375px) {
    max-width: 37.5rem;
  }

  @media (min-width: 768px) {
    max-width: 76.8rem;
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`,F5=C.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 3.2rem;
  justify-content: space-between;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: space-between;
  }
`,L5=C.footer`
  padding: 6.4rem 3.2rem 1.6rem;
  background-color: ${e=>e.theme.colors.footerBgColor};
`,ds=C.section`
  margin-bottom: 8.6rem;
  transition: opacity 500ms linear;
  ${e=>e!=null&&e.$inView?Mx:""};
`,N5=C(ds)`
  ${e=>e!=null&&e.$inView?Mx:""};
  transition: opacity 500ms linear;

  @media (min-width: 768px) {
    padding: 40px 0 40px;
  }
`;C.div`
  height: 0.1px;
  max-width: 100%;
  background-color: ${e=>e.theme.colors.accentColor};
  margin: 0 24rem;
`;const z5="/personal-trainer/assets/hero-Ged6vZba.jpg",D5=C.div`
  position: relative;
  width: 100%;
  min-height: auto;
  background: url(${z5});
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
`,B5=C.div`
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
`,U5=C.div`
  width: 100%;
  height: 100%;
`,W5=C.img`
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
`,H5=C.div`
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
`,V5=C.h1`
  text-align: start;
  color: ${e=>e.theme.colors.heroTextColor};
  font-family: DM Sans;
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
    font-family: DM Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
  }

  @media (min-width: 1440px) {
    color: ${e=>e.theme.colors.heroTextColor};
    font-family: DM Sans;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
  }
`,G5=C.p`
  text-align: start;
  color: ${e=>e.theme.colors.heroTextColor};
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  z-index: 5;
  margin-bottom: 1.2rem;

  @media (min-width: 343px) {
    margin-bottom: 3.6rem;
  }

  @media (min-width: 375px) {
    font-size: 12px;
    margin-bottom: 1.8rem;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    z-index: 5;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;function K5(){return d.jsx(D5,{children:d.jsxs(B5,{children:[d.jsx(U5,{children:d.jsx(W5,{src:"images/pt.png",alt:"Personal Trainer"})}),d.jsxs(H5,{children:[d.jsx(V5,{children:"Achieve Your Fitness Goals, Embrace a Happy and Healthy Lifestyle"}),d.jsx(G5,{children:"As a champion in gymnastics, bodybuilding, and MMA, I bring over 14 years of expertise to your fitness goals. National champion, international competitor, and a certified US personal trainer. Let's build your success story together. Be fit, live well. Contact me to start your journey today."}),d.jsx(xh,{location:"hero"})]})]})})}function q5(){const e=new Date().getFullYear();return d.jsx(d.Fragment,{children:e})}function gt(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}var Ix={exports:{}},Q5="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y5=Q5,X5=Y5;function Fx(){}function Lx(){}Lx.resetWarningCache=Fx;var Z5=function(){function e(r,i,o,s,a,l){if(l!==X5){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Lx,resetWarningCache:Fx};return n.PropTypes=n,n};Ix.exports=Z5();var J5=Ix.exports;const ki=Oo(J5);function Nx(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Nx(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Yi(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Nx(e))&&(r&&(r+=" "),r+=t);return r}function fr(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function zx(e){if(!fr(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=zx(e[n])}),t}function vn(e,t,n={clone:!0}){const r=n.clone?L({},e):e;return fr(e)&&fr(t)&&Object.keys(t).forEach(i=>{i!=="__proto__"&&(fr(t[i])&&i in e&&fr(e[i])?r[i]=vn(e[i],t[i],n):n.clone?r[i]=fr(t[i])?zx(t[i]):t[i]:r[i]=t[i])}),r}function xo(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function ti(e){if(typeof e!="string")throw new Error(xo(7));return e.charAt(0).toUpperCase()+e.slice(1)}function q0(e){return e&&e.ownerDocument||document}function zd(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const Zs=typeof window<"u"?b.useLayoutEffect:b.useEffect;let Q0=0;function eE(e){const[t,n]=b.useState(e),r=e||t;return b.useEffect(()=>{t==null&&(Q0+=1,n(`mui-${Q0}`))},[t]),r}const Y0=Lf.useId;function tE(e){if(Y0!==void 0){const t=Y0();return e??t}return eE(e)}function nE({controlled:e,default:t,name:n,state:r="value"}){const{current:i}=b.useRef(e!==void 0),[o,s]=b.useState(t),a=i?e:o,l=b.useCallback(u=>{i||s(u)},[]);return[a,l]}function rE(e){const t=b.useRef(e);return Zs(()=>{t.current=e}),b.useRef((...n)=>(0,t.current)(...n)).current}function wo(...e){return b.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{zd(n,t)})},e)}let Ku=!0,Dd=!1,X0;const iE={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function oE(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&iE[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function sE(e){e.metaKey||e.altKey||e.ctrlKey||(Ku=!0)}function mf(){Ku=!1}function aE(){this.visibilityState==="hidden"&&Dd&&(Ku=!0)}function lE(e){e.addEventListener("keydown",sE,!0),e.addEventListener("mousedown",mf,!0),e.addEventListener("pointerdown",mf,!0),e.addEventListener("touchstart",mf,!0),e.addEventListener("visibilitychange",aE,!0)}function uE(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Ku||oE(t)}function cE(){const e=b.useCallback(i=>{i!=null&&lE(i.ownerDocument)},[]),t=b.useRef(!1);function n(){return t.current?(Dd=!0,window.clearTimeout(X0),X0=window.setTimeout(()=>{Dd=!1},100),t.current=!1,!0):!1}function r(i){return uE(i)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function Dx(e,t){const n=L({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=L({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=e[r]||{},o=t[r];n[r]={},!o||!Object.keys(o)?n[r]=i:!i||!Object.keys(i)?n[r]=o:(n[r]=L({},o),Object.keys(i).forEach(s=>{n[r][s]=Dx(i[s],o[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function Bx(e,t,n=void 0){const r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((o,s)=>{if(s){const a=t(s);a!==""&&o.push(a),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),r}const Z0=e=>e,fE=()=>{let e=Z0;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Z0}}},dE=fE(),Ux={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Wx(e,t,n="Mui"){const r=Ux[t];return r?`${n}-${r}`:`${dE.generate(e)}-${t}`}function pE(e,t,n="Mui"){const r={};return t.forEach(i=>{r[i]=Wx(e,i,n)}),r}function hE(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}function mE(e){return typeof e=="string"}function ps(e,t,n){return e===void 0||mE(e)?t:L({},t,{ownerState:L({},t.ownerState,n)})}const gE={disableDefaultClasses:!1},yE=b.createContext(gE);function vE(e){const{disableDefaultClasses:t}=b.useContext(yE);return n=>t?"":e(n)}function xE(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function wE(e,t,n){return typeof e=="function"?e(t,n):e}function J0(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function SE(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:o}=e;if(!t){const y=Yi(n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),v=L({},n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),m=L({},n,i,r);return y.length>0&&(m.className=y),Object.keys(v).length>0&&(m.style=v),{props:m,internalRef:void 0}}const s=xE(L({},i,r)),a=J0(r),l=J0(i),u=t(s),c=Yi(u==null?void 0:u.className,n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),f=L({},u==null?void 0:u.style,n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),p=L({},u,n,l,a);return c.length>0&&(p.className=c),Object.keys(f).length>0&&(p.style=f),{props:p,internalRef:u.ref}}const bE=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function EE(e){var t;const{elementType:n,externalSlotProps:r,ownerState:i,skipResolvingSlotProps:o=!1}=e,s=gt(e,bE),a=o?{}:wE(r,i),{props:l,internalRef:u}=SE(L({},s,{externalSlotProps:a})),c=wo(u,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return ps(n,L({},l,{ref:c}),i)}const Hx="base";function CE(e){return`${Hx}--${e}`}function TE(e,t){return`${Hx}-${e}-${t}`}function Vx(e,t){const n=Ux[t];return n?CE(n):TE(e,t)}function kE(e,t){const n={};return t.forEach(r=>{n[r]=Vx(e,r)}),n}var Ct="top",nn="bottom",rn="right",Tt="left",wh="auto",ga=[Ct,nn,rn,Tt],So="start",Js="end",_E="clippingParents",Gx="viewport",Zo="popper",$E="reference",e1=ga.reduce(function(e,t){return e.concat([t+"-"+So,t+"-"+Js])},[]),Kx=[].concat(ga,[wh]).reduce(function(e,t){return e.concat([t,t+"-"+So,t+"-"+Js])},[]),OE="beforeRead",jE="read",PE="afterRead",RE="beforeMain",AE="main",ME="afterMain",IE="beforeWrite",FE="write",LE="afterWrite",NE=[OE,jE,PE,RE,AE,ME,IE,FE,LE];function In(e){return e?(e.nodeName||"").toLowerCase():null}function Nt(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function fi(e){var t=Nt(e).Element;return e instanceof t||e instanceof Element}function Xt(e){var t=Nt(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Sh(e){if(typeof ShadowRoot>"u")return!1;var t=Nt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function zE(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},i=t.attributes[n]||{},o=t.elements[n];!Xt(o)||!In(o)||(Object.assign(o.style,r),Object.keys(i).forEach(function(s){var a=i[s];a===!1?o.removeAttribute(s):o.setAttribute(s,a===!0?"":a)}))})}function DE(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var i=t.elements[r],o=t.attributes[r]||{},s=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),a=s.reduce(function(l,u){return l[u]="",l},{});!Xt(i)||!In(i)||(Object.assign(i.style,a),Object.keys(o).forEach(function(l){i.removeAttribute(l)}))})}}const BE={name:"applyStyles",enabled:!0,phase:"write",fn:zE,effect:DE,requires:["computeStyles"]};function Rn(e){return e.split("-")[0]}var ni=Math.max,pu=Math.min,bo=Math.round;function Bd(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function qx(){return!/^((?!chrome|android).)*safari/i.test(Bd())}function Eo(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,o=1;t&&Xt(e)&&(i=e.offsetWidth>0&&bo(r.width)/e.offsetWidth||1,o=e.offsetHeight>0&&bo(r.height)/e.offsetHeight||1);var s=fi(e)?Nt(e):window,a=s.visualViewport,l=!qx()&&n,u=(r.left+(l&&a?a.offsetLeft:0))/i,c=(r.top+(l&&a?a.offsetTop:0))/o,f=r.width/i,p=r.height/o;return{width:f,height:p,top:c,right:u+f,bottom:c+p,left:u,x:u,y:c}}function bh(e){var t=Eo(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Qx(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Sh(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Zn(e){return Nt(e).getComputedStyle(e)}function UE(e){return["table","td","th"].indexOf(In(e))>=0}function Ar(e){return((fi(e)?e.ownerDocument:e.document)||window.document).documentElement}function qu(e){return In(e)==="html"?e:e.assignedSlot||e.parentNode||(Sh(e)?e.host:null)||Ar(e)}function t1(e){return!Xt(e)||Zn(e).position==="fixed"?null:e.offsetParent}function WE(e){var t=/firefox/i.test(Bd()),n=/Trident/i.test(Bd());if(n&&Xt(e)){var r=Zn(e);if(r.position==="fixed")return null}var i=qu(e);for(Sh(i)&&(i=i.host);Xt(i)&&["html","body"].indexOf(In(i))<0;){var o=Zn(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function ya(e){for(var t=Nt(e),n=t1(e);n&&UE(n)&&Zn(n).position==="static";)n=t1(n);return n&&(In(n)==="html"||In(n)==="body"&&Zn(n).position==="static")?t:n||WE(e)||t}function Eh(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function _s(e,t,n){return ni(e,pu(t,n))}function HE(e,t,n){var r=_s(e,t,n);return r>n?n:r}function Yx(){return{top:0,right:0,bottom:0,left:0}}function Xx(e){return Object.assign({},Yx(),e)}function Zx(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var VE=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Xx(typeof t!="number"?t:Zx(t,ga))};function GE(e){var t,n=e.state,r=e.name,i=e.options,o=n.elements.arrow,s=n.modifiersData.popperOffsets,a=Rn(n.placement),l=Eh(a),u=[Tt,rn].indexOf(a)>=0,c=u?"height":"width";if(!(!o||!s)){var f=VE(i.padding,n),p=bh(o),y=l==="y"?Ct:Tt,v=l==="y"?nn:rn,m=n.rects.reference[c]+n.rects.reference[l]-s[l]-n.rects.popper[c],E=s[l]-n.rects.reference[l],g=ya(o),h=g?l==="y"?g.clientHeight||0:g.clientWidth||0:0,x=m/2-E/2,w=f[y],k=h-p[c]-f[v],T=h/2-p[c]/2+x,S=_s(w,T,k),O=l;n.modifiersData[r]=(t={},t[O]=S,t.centerOffset=S-T,t)}}function KE(e){var t=e.state,n=e.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||Qx(t.elements.popper,i)&&(t.elements.arrow=i))}const qE={name:"arrow",enabled:!0,phase:"main",fn:GE,effect:KE,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Co(e){return e.split("-")[1]}var QE={top:"auto",right:"auto",bottom:"auto",left:"auto"};function YE(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:bo(n*i)/i||0,y:bo(r*i)/i||0}}function n1(e){var t,n=e.popper,r=e.popperRect,i=e.placement,o=e.variation,s=e.offsets,a=e.position,l=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,f=e.isFixed,p=s.x,y=p===void 0?0:p,v=s.y,m=v===void 0?0:v,E=typeof c=="function"?c({x:y,y:m}):{x:y,y:m};y=E.x,m=E.y;var g=s.hasOwnProperty("x"),h=s.hasOwnProperty("y"),x=Tt,w=Ct,k=window;if(u){var T=ya(n),S="clientHeight",O="clientWidth";if(T===Nt(n)&&(T=Ar(n),Zn(T).position!=="static"&&a==="absolute"&&(S="scrollHeight",O="scrollWidth")),T=T,i===Ct||(i===Tt||i===rn)&&o===Js){w=nn;var j=f&&T===k&&k.visualViewport?k.visualViewport.height:T[S];m-=j-r.height,m*=l?1:-1}if(i===Tt||(i===Ct||i===nn)&&o===Js){x=rn;var $=f&&T===k&&k.visualViewport?k.visualViewport.width:T[O];y-=$-r.width,y*=l?1:-1}}var A=Object.assign({position:a},u&&QE),Q=c===!0?YE({x:y,y:m},Nt(n)):{x:y,y:m};if(y=Q.x,m=Q.y,l){var D;return Object.assign({},A,(D={},D[w]=h?"0":"",D[x]=g?"0":"",D.transform=(k.devicePixelRatio||1)<=1?"translate("+y+"px, "+m+"px)":"translate3d("+y+"px, "+m+"px, 0)",D))}return Object.assign({},A,(t={},t[w]=h?m+"px":"",t[x]=g?y+"px":"",t.transform="",t))}function XE(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0?!0:r,o=n.adaptive,s=o===void 0?!0:o,a=n.roundOffsets,l=a===void 0?!0:a,u={placement:Rn(t.placement),variation:Co(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,n1(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,n1(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const ZE={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:XE,data:{}};var Ka={passive:!0};function JE(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,o=i===void 0?!0:i,s=r.resize,a=s===void 0?!0:s,l=Nt(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach(function(c){c.addEventListener("scroll",n.update,Ka)}),a&&l.addEventListener("resize",n.update,Ka),function(){o&&u.forEach(function(c){c.removeEventListener("scroll",n.update,Ka)}),a&&l.removeEventListener("resize",n.update,Ka)}}const eC={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:JE,data:{}};var tC={left:"right",right:"left",bottom:"top",top:"bottom"};function $l(e){return e.replace(/left|right|bottom|top/g,function(t){return tC[t]})}var nC={start:"end",end:"start"};function r1(e){return e.replace(/start|end/g,function(t){return nC[t]})}function Ch(e){var t=Nt(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Th(e){return Eo(Ar(e)).left+Ch(e).scrollLeft}function rC(e,t){var n=Nt(e),r=Ar(e),i=n.visualViewport,o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;var u=qx();(u||!u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a+Th(e),y:l}}function iC(e){var t,n=Ar(e),r=Ch(e),i=(t=e.ownerDocument)==null?void 0:t.body,o=ni(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=ni(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Th(e),l=-r.scrollTop;return Zn(i||n).direction==="rtl"&&(a+=ni(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:l}}function kh(e){var t=Zn(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Jx(e){return["html","body","#document"].indexOf(In(e))>=0?e.ownerDocument.body:Xt(e)&&kh(e)?e:Jx(qu(e))}function $s(e,t){var n;t===void 0&&(t=[]);var r=Jx(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),o=Nt(r),s=i?[o].concat(o.visualViewport||[],kh(r)?r:[]):r,a=t.concat(s);return i?a:a.concat($s(qu(s)))}function Ud(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oC(e,t){var n=Eo(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function i1(e,t,n){return t===Gx?Ud(rC(e,n)):fi(t)?oC(t,n):Ud(iC(Ar(e)))}function sC(e){var t=$s(qu(e)),n=["absolute","fixed"].indexOf(Zn(e).position)>=0,r=n&&Xt(e)?ya(e):e;return fi(r)?t.filter(function(i){return fi(i)&&Qx(i,r)&&In(i)!=="body"}):[]}function aC(e,t,n,r){var i=t==="clippingParents"?sC(e):[].concat(t),o=[].concat(i,[n]),s=o[0],a=o.reduce(function(l,u){var c=i1(e,u,r);return l.top=ni(c.top,l.top),l.right=pu(c.right,l.right),l.bottom=pu(c.bottom,l.bottom),l.left=ni(c.left,l.left),l},i1(e,s,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function e2(e){var t=e.reference,n=e.element,r=e.placement,i=r?Rn(r):null,o=r?Co(r):null,s=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,l;switch(i){case Ct:l={x:s,y:t.y-n.height};break;case nn:l={x:s,y:t.y+t.height};break;case rn:l={x:t.x+t.width,y:a};break;case Tt:l={x:t.x-n.width,y:a};break;default:l={x:t.x,y:t.y}}var u=i?Eh(i):null;if(u!=null){var c=u==="y"?"height":"width";switch(o){case So:l[u]=l[u]-(t[c]/2-n[c]/2);break;case Js:l[u]=l[u]+(t[c]/2-n[c]/2);break}}return l}function ea(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,o=n.strategy,s=o===void 0?e.strategy:o,a=n.boundary,l=a===void 0?_E:a,u=n.rootBoundary,c=u===void 0?Gx:u,f=n.elementContext,p=f===void 0?Zo:f,y=n.altBoundary,v=y===void 0?!1:y,m=n.padding,E=m===void 0?0:m,g=Xx(typeof E!="number"?E:Zx(E,ga)),h=p===Zo?$E:Zo,x=e.rects.popper,w=e.elements[v?h:p],k=aC(fi(w)?w:w.contextElement||Ar(e.elements.popper),l,c,s),T=Eo(e.elements.reference),S=e2({reference:T,element:x,strategy:"absolute",placement:i}),O=Ud(Object.assign({},x,S)),j=p===Zo?O:T,$={top:k.top-j.top+g.top,bottom:j.bottom-k.bottom+g.bottom,left:k.left-j.left+g.left,right:j.right-k.right+g.right},A=e.modifiersData.offset;if(p===Zo&&A){var Q=A[i];Object.keys($).forEach(function(D){var X=[rn,nn].indexOf(D)>=0?1:-1,G=[Ct,nn].indexOf(D)>=0?"y":"x";$[D]+=Q[G]*X})}return $}function lC(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?Kx:l,c=Co(r),f=c?a?e1:e1.filter(function(v){return Co(v)===c}):ga,p=f.filter(function(v){return u.indexOf(v)>=0});p.length===0&&(p=f);var y=p.reduce(function(v,m){return v[m]=ea(e,{placement:m,boundary:i,rootBoundary:o,padding:s})[Rn(m)],v},{});return Object.keys(y).sort(function(v,m){return y[v]-y[m]})}function uC(e){if(Rn(e)===wh)return[];var t=$l(e);return[r1(e),t,r1(t)]}function cC(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!0:s,l=n.fallbackPlacements,u=n.padding,c=n.boundary,f=n.rootBoundary,p=n.altBoundary,y=n.flipVariations,v=y===void 0?!0:y,m=n.allowedAutoPlacements,E=t.options.placement,g=Rn(E),h=g===E,x=l||(h||!v?[$l(E)]:uC(E)),w=[E].concat(x).reduce(function(ue,se){return ue.concat(Rn(se)===wh?lC(t,{placement:se,boundary:c,rootBoundary:f,padding:u,flipVariations:v,allowedAutoPlacements:m}):se)},[]),k=t.rects.reference,T=t.rects.popper,S=new Map,O=!0,j=w[0],$=0;$<w.length;$++){var A=w[$],Q=Rn(A),D=Co(A)===So,X=[Ct,nn].indexOf(Q)>=0,G=X?"width":"height",J=ea(t,{placement:A,boundary:c,rootBoundary:f,altBoundary:p,padding:u}),te=X?D?rn:Tt:D?nn:Ct;k[G]>T[G]&&(te=$l(te));var M=$l(te),I=[];if(o&&I.push(J[Q]<=0),a&&I.push(J[te]<=0,J[M]<=0),I.every(function(ue){return ue})){j=A,O=!1;break}S.set(A,I)}if(O)for(var W=v?3:1,ee=function(se){var he=w.find(function(de){var xe=S.get(de);if(xe)return xe.slice(0,se).every(function(me){return me})});if(he)return j=he,"break"},Y=W;Y>0;Y--){var Pe=ee(Y);if(Pe==="break")break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}}const fC={name:"flip",enabled:!0,phase:"main",fn:cC,requiresIfExists:["offset"],data:{_skip:!1}};function o1(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function s1(e){return[Ct,rn,nn,Tt].some(function(t){return e[t]>=0})}function dC(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=ea(t,{elementContext:"reference"}),a=ea(t,{altBoundary:!0}),l=o1(s,r),u=o1(a,i,o),c=s1(l),f=s1(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":f})}const pC={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:dC};function hC(e,t,n){var r=Rn(e),i=[Tt,Ct].indexOf(r)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,s=o[0],a=o[1];return s=s||0,a=(a||0)*i,[Tt,rn].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function mC(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=i===void 0?[0,0]:i,s=Kx.reduce(function(c,f){return c[f]=hC(f,t.rects,o),c},{}),a=s[t.placement],l=a.x,u=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=s}const gC={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:mC};function yC(e){var t=e.state,n=e.name;t.modifiersData[n]=e2({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const vC={name:"popperOffsets",enabled:!0,phase:"read",fn:yC,data:{}};function xC(e){return e==="x"?"y":"x"}function wC(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!1:s,l=n.boundary,u=n.rootBoundary,c=n.altBoundary,f=n.padding,p=n.tether,y=p===void 0?!0:p,v=n.tetherOffset,m=v===void 0?0:v,E=ea(t,{boundary:l,rootBoundary:u,padding:f,altBoundary:c}),g=Rn(t.placement),h=Co(t.placement),x=!h,w=Eh(g),k=xC(w),T=t.modifiersData.popperOffsets,S=t.rects.reference,O=t.rects.popper,j=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,$=typeof j=="number"?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,Q={x:0,y:0};if(T){if(o){var D,X=w==="y"?Ct:Tt,G=w==="y"?nn:rn,J=w==="y"?"height":"width",te=T[w],M=te+E[X],I=te-E[G],W=y?-O[J]/2:0,ee=h===So?S[J]:O[J],Y=h===So?-O[J]:-S[J],Pe=t.elements.arrow,ue=y&&Pe?bh(Pe):{width:0,height:0},se=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Yx(),he=se[X],de=se[G],xe=_s(0,S[J],ue[J]),me=x?S[J]/2-W-xe-he-$.mainAxis:ee-xe-he-$.mainAxis,Je=x?-S[J]/2+W+xe+de+$.mainAxis:Y+xe+de+$.mainAxis,K=t.elements.arrow&&ya(t.elements.arrow),z=K?w==="y"?K.clientTop||0:K.clientLeft||0:0,H=(D=A==null?void 0:A[w])!=null?D:0,Z=te+me-H-z,we=te+Je-H,yt=_s(y?pu(M,Z):M,te,y?ni(I,we):I);T[w]=yt,Q[w]=yt-te}if(a){var Ut,Wt=w==="x"?Ct:Tt,wn=w==="x"?nn:rn,Ke=T[k],st=k==="y"?"height":"width",_=Ke+E[Wt],F=Ke-E[wn],B=[Ct,Tt].indexOf(g)!==-1,V=(Ut=A==null?void 0:A[k])!=null?Ut:0,q=B?_:Ke-S[st]-O[st]-V+$.altAxis,oe=B?Ke+S[st]+O[st]-V-$.altAxis:F,Re=y&&B?HE(q,Ke,oe):_s(y?q:_,Ke,y?oe:F);T[k]=Re,Q[k]=Re-Ke}t.modifiersData[r]=Q}}const SC={name:"preventOverflow",enabled:!0,phase:"main",fn:wC,requiresIfExists:["offset"]};function bC(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function EC(e){return e===Nt(e)||!Xt(e)?Ch(e):bC(e)}function CC(e){var t=e.getBoundingClientRect(),n=bo(t.width)/e.offsetWidth||1,r=bo(t.height)/e.offsetHeight||1;return n!==1||r!==1}function TC(e,t,n){n===void 0&&(n=!1);var r=Xt(t),i=Xt(t)&&CC(t),o=Ar(t),s=Eo(e,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((In(t)!=="body"||kh(o))&&(a=EC(t)),Xt(t)?(l=Eo(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=Th(o))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function kC(e){var t=new Map,n=new Set,r=[];e.forEach(function(o){t.set(o.name,o)});function i(o){n.add(o.name);var s=[].concat(o.requires||[],o.requiresIfExists||[]);s.forEach(function(a){if(!n.has(a)){var l=t.get(a);l&&i(l)}}),r.push(o)}return e.forEach(function(o){n.has(o.name)||i(o)}),r}function _C(e){var t=kC(e);return NE.reduce(function(n,r){return n.concat(t.filter(function(i){return i.phase===r}))},[])}function $C(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function OC(e){var t=e.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var a1={placement:"bottom",modifiers:[],strategy:"absolute"};function l1(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function jC(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,o=i===void 0?a1:i;return function(a,l,u){u===void 0&&(u=o);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},a1,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},f=[],p=!1,y={state:c,setOptions:function(g){var h=typeof g=="function"?g(c.options):g;m(),c.options=Object.assign({},o,c.options,h),c.scrollParents={reference:fi(a)?$s(a):a.contextElement?$s(a.contextElement):[],popper:$s(l)};var x=_C(OC([].concat(r,c.options.modifiers)));return c.orderedModifiers=x.filter(function(w){return w.enabled}),v(),y.update()},forceUpdate:function(){if(!p){var g=c.elements,h=g.reference,x=g.popper;if(l1(h,x)){c.rects={reference:TC(h,ya(x),c.options.strategy==="fixed"),popper:bh(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function($){return c.modifiersData[$.name]=Object.assign({},$.data)});for(var w=0;w<c.orderedModifiers.length;w++){if(c.reset===!0){c.reset=!1,w=-1;continue}var k=c.orderedModifiers[w],T=k.fn,S=k.options,O=S===void 0?{}:S,j=k.name;typeof T=="function"&&(c=T({state:c,options:O,name:j,instance:y})||c)}}}},update:$C(function(){return new Promise(function(E){y.forceUpdate(),E(c)})}),destroy:function(){m(),p=!0}};if(!l1(a,l))return y;y.setOptions(u).then(function(E){!p&&u.onFirstUpdate&&u.onFirstUpdate(E)});function v(){c.orderedModifiers.forEach(function(E){var g=E.name,h=E.options,x=h===void 0?{}:h,w=E.effect;if(typeof w=="function"){var k=w({state:c,name:g,instance:y,options:x}),T=function(){};f.push(k||T)}})}function m(){f.forEach(function(E){return E()}),f=[]}return y}}var PC=[eC,vC,ZE,BE,gC,fC,SC,qE,pC],RC=jC({defaultModifiers:PC});function AC(e){return typeof e=="function"?e():e}const MC=b.forwardRef(function(t,n){const{children:r,container:i,disablePortal:o=!1}=t,[s,a]=b.useState(null),l=wo(b.isValidElement(r)?r.ref:null,n);if(Zs(()=>{o||a(AC(i)||document.body)},[i,o]),Zs(()=>{if(s&&!o)return zd(n,s),()=>{zd(n,null)}},[n,s,o]),o){if(b.isValidElement(r)){const u={ref:l};return b.cloneElement(r,u)}return d.jsx(b.Fragment,{children:r})}return d.jsx(b.Fragment,{children:s&&uh.createPortal(r,s)})}),t2="Popper";function IC(e){return Vx(t2,e)}kE(t2,["root"]);const FC=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],LC=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function NC(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function Wd(e){return typeof e=="function"?e():e}function zC(e){return e.nodeType!==void 0}const DC=()=>Bx({root:["root"]},vE(IC)),BC={},UC=b.forwardRef(function(t,n){var r;const{anchorEl:i,children:o,direction:s,disablePortal:a,modifiers:l,open:u,placement:c,popperOptions:f,popperRef:p,slotProps:y={},slots:v={},TransitionProps:m}=t,E=gt(t,FC),g=b.useRef(null),h=wo(g,n),x=b.useRef(null),w=wo(x,p),k=b.useRef(w);Zs(()=>{k.current=w},[w]),b.useImperativeHandle(p,()=>x.current,[]);const T=NC(c,s),[S,O]=b.useState(T),[j,$]=b.useState(Wd(i));b.useEffect(()=>{x.current&&x.current.forceUpdate()}),b.useEffect(()=>{i&&$(Wd(i))},[i]),Zs(()=>{if(!j||!u)return;const G=M=>{O(M.placement)};let J=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:M})=>{G(M)}}];l!=null&&(J=J.concat(l)),f&&f.modifiers!=null&&(J=J.concat(f.modifiers));const te=RC(j,g.current,L({placement:T},f,{modifiers:J}));return k.current(te),()=>{te.destroy(),k.current(null)}},[j,a,l,u,f,T]);const A={placement:S};m!==null&&(A.TransitionProps=m);const Q=DC(),D=(r=v.root)!=null?r:"div",X=EE({elementType:D,externalSlotProps:y.root,externalForwardedProps:E,additionalProps:{role:"tooltip",ref:h},ownerState:t,className:Q.root});return d.jsx(D,L({},X,{children:typeof o=="function"?o(A):o}))}),WC=b.forwardRef(function(t,n){const{anchorEl:r,children:i,container:o,direction:s="ltr",disablePortal:a=!1,keepMounted:l=!1,modifiers:u,open:c,placement:f="bottom",popperOptions:p=BC,popperRef:y,style:v,transition:m=!1,slotProps:E={},slots:g={}}=t,h=gt(t,LC),[x,w]=b.useState(!0),k=()=>{w(!1)},T=()=>{w(!0)};if(!l&&!c&&(!m||x))return null;let S;if(o)S=o;else if(r){const $=Wd(r);S=$&&zC($)?q0($).body:q0(null).body}const O=!c&&l&&(!m||x)?"none":void 0,j=m?{in:c,onEnter:k,onExited:T}:void 0;return d.jsx(MC,{disablePortal:a,container:S,children:d.jsx(UC,L({anchorEl:r,direction:s,disablePortal:a,modifiers:u,ref:n,open:m?!x:c,placement:f,popperOptions:p,popperRef:y,slotProps:E,slots:g},h,{style:L({position:"fixed",top:0,left:0,display:O},v),TransitionProps:j,children:i}))})});function HC(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function VC(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var GC=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(VC(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=HC(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ut="-ms-",hu="-moz-",ce="-webkit-",n2="comm",_h="rule",$h="decl",KC="@import",r2="@keyframes",qC="@layer",QC=Math.abs,Qu=String.fromCharCode,YC=Object.assign;function XC(e,t){return rt(e,0)^45?(((t<<2^rt(e,0))<<2^rt(e,1))<<2^rt(e,2))<<2^rt(e,3):0}function i2(e){return e.trim()}function ZC(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,n){return e.replace(t,n)}function Hd(e,t){return e.indexOf(t)}function rt(e,t){return e.charCodeAt(t)|0}function ta(e,t,n){return e.slice(t,n)}function kn(e){return e.length}function Oh(e){return e.length}function qa(e,t){return t.push(e),e}function JC(e,t){return e.map(t).join("")}var Yu=1,To=1,o2=0,kt=0,Ue=0,Mo="";function Xu(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Yu,column:To,length:s,return:""}}function Jo(e,t){return YC(Xu("",null,null,"",null,null,0),e,{length:-e.length},t)}function e6(){return Ue}function t6(){return Ue=kt>0?rt(Mo,--kt):0,To--,Ue===10&&(To=1,Yu--),Ue}function Ft(){return Ue=kt<o2?rt(Mo,kt++):0,To++,Ue===10&&(To=1,Yu++),Ue}function An(){return rt(Mo,kt)}function Ol(){return kt}function va(e,t){return ta(Mo,e,t)}function na(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function s2(e){return Yu=To=1,o2=kn(Mo=e),kt=0,[]}function a2(e){return Mo="",e}function jl(e){return i2(va(kt-1,Vd(e===91?e+2:e===40?e+1:e)))}function n6(e){for(;(Ue=An())&&Ue<33;)Ft();return na(e)>2||na(Ue)>3?"":" "}function r6(e,t){for(;--t&&Ft()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return va(e,Ol()+(t<6&&An()==32&&Ft()==32))}function Vd(e){for(;Ft();)switch(Ue){case e:return kt;case 34:case 39:e!==34&&e!==39&&Vd(Ue);break;case 40:e===41&&Vd(e);break;case 92:Ft();break}return kt}function i6(e,t){for(;Ft()&&e+Ue!==57;)if(e+Ue===84&&An()===47)break;return"/*"+va(t,kt-1)+"*"+Qu(e===47?e:Ft())}function o6(e){for(;!na(An());)Ft();return va(e,kt)}function s6(e){return a2(Pl("",null,null,null,[""],e=s2(e),0,[0],e))}function Pl(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,p=0,y=0,v=0,m=1,E=1,g=1,h=0,x="",w=i,k=o,T=r,S=x;E;)switch(v=h,h=Ft()){case 40:if(v!=108&&rt(S,f-1)==58){Hd(S+=fe(jl(h),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:S+=jl(h);break;case 9:case 10:case 13:case 32:S+=n6(v);break;case 92:S+=r6(Ol()-1,7);continue;case 47:switch(An()){case 42:case 47:qa(a6(i6(Ft(),Ol()),t,n),l);break;default:S+="/"}break;case 123*m:a[u++]=kn(S)*g;case 125*m:case 59:case 0:switch(h){case 0:case 125:E=0;case 59+c:g==-1&&(S=fe(S,/\f/g,"")),y>0&&kn(S)-f&&qa(y>32?c1(S+";",r,n,f-1):c1(fe(S," ","")+";",r,n,f-2),l);break;case 59:S+=";";default:if(qa(T=u1(S,t,n,u,c,i,a,x,w=[],k=[],f),o),h===123)if(c===0)Pl(S,t,T,T,w,o,f,a,k);else switch(p===99&&rt(S,3)===110?100:p){case 100:case 108:case 109:case 115:Pl(e,T,T,r&&qa(u1(e,T,T,0,0,i,a,x,i,w=[],f),k),i,k,f,a,r?w:k);break;default:Pl(S,T,T,T,[""],k,0,a,k)}}u=c=y=0,m=g=1,x=S="",f=s;break;case 58:f=1+kn(S),y=v;default:if(m<1){if(h==123)--m;else if(h==125&&m++==0&&t6()==125)continue}switch(S+=Qu(h),h*m){case 38:g=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(kn(S)-1)*g,g=1;break;case 64:An()===45&&(S+=jl(Ft())),p=An(),c=f=kn(x=S+=o6(Ol())),h++;break;case 45:v===45&&kn(S)==2&&(m=0)}}return o}function u1(e,t,n,r,i,o,s,a,l,u,c){for(var f=i-1,p=i===0?o:[""],y=Oh(p),v=0,m=0,E=0;v<r;++v)for(var g=0,h=ta(e,f+1,f=QC(m=s[v])),x=e;g<y;++g)(x=i2(m>0?p[g]+" "+h:fe(h,/&\f/g,p[g])))&&(l[E++]=x);return Xu(e,t,n,i===0?_h:a,l,u,c)}function a6(e,t,n){return Xu(e,t,n,n2,Qu(e6()),ta(e,2,-2),0)}function c1(e,t,n,r){return Xu(e,t,n,$h,ta(e,0,r),ta(e,r+1,-1),r)}function io(e,t){for(var n="",r=Oh(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function l6(e,t,n,r){switch(e.type){case qC:if(e.children.length)break;case KC:case $h:return e.return=e.return||e.value;case n2:return"";case r2:return e.return=e.value+"{"+io(e.children,r)+"}";case _h:e.value=e.props.join(",")}return kn(n=io(e.children,r))?e.return=e.value+"{"+n+"}":""}function u6(e){var t=Oh(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function c6(e){return function(t){t.root||(t=t.return)&&e(t)}}var f6=function(t,n,r){for(var i=0,o=0;i=o,o=An(),i===38&&o===12&&(n[r]=1),!na(o);)Ft();return va(t,kt)},d6=function(t,n){var r=-1,i=44;do switch(na(i)){case 0:i===38&&An()===12&&(n[r]=1),t[r]+=f6(kt-1,n,r);break;case 2:t[r]+=jl(i);break;case 4:if(i===44){t[++r]=An()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Qu(i)}while(i=Ft());return t},p6=function(t,n){return a2(d6(s2(t),n))},f1=new WeakMap,h6=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!f1.get(r))&&!i){f1.set(t,!0);for(var o=[],s=p6(n,o),a=r.props,l=0,u=0;l<s.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=o[l]?s[l].replace(/&\f/g,a[c]):a[c]+" "+s[l]}}},m6=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function l2(e,t){switch(XC(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+hu+e+ut+e+e;case 6828:case 4268:return ce+e+ut+e+e;case 6165:return ce+e+ut+"flex-"+e+e;case 5187:return ce+e+fe(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+ut+"flex-$1$2")+e;case 5443:return ce+e+ut+"flex-item-"+fe(e,/flex-|-self/,"")+e;case 4675:return ce+e+ut+"flex-line-pack"+fe(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+ut+fe(e,"shrink","negative")+e;case 5292:return ce+e+ut+fe(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+fe(e,"-grow","")+ce+e+ut+fe(e,"grow","positive")+e;case 4554:return ce+fe(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+ut+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kn(e)-1-t>6)switch(rt(e,t+1)){case 109:if(rt(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+hu+(rt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Hd(e,"stretch")?l2(fe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(rt(e,t+1)!==115)break;case 6444:switch(rt(e,kn(e)-3-(~Hd(e,"!important")&&10))){case 107:return fe(e,":",":"+ce)+e;case 101:return fe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(rt(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+ut+"$2box$3")+e}break;case 5936:switch(rt(e,t+11)){case 114:return ce+e+ut+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+ut+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+ut+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+ut+e+e}return e}var g6=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case $h:t.return=l2(t.value,t.length);break;case r2:return io([Jo(t,{value:fe(t.value,"@","@"+ce)})],i);case _h:if(t.length)return JC(t.props,function(o){switch(ZC(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return io([Jo(t,{props:[fe(o,/:(read-\w+)/,":"+hu+"$1")]})],i);case"::placeholder":return io([Jo(t,{props:[fe(o,/:(plac\w+)/,":"+ce+"input-$1")]}),Jo(t,{props:[fe(o,/:(plac\w+)/,":"+hu+"$1")]}),Jo(t,{props:[fe(o,/:(plac\w+)/,ut+"input-$1")]})],i)}return""})}},y6=[g6],v6=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var E=m.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=t.stylisPlugins||y6,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var E=m.getAttribute("data-emotion").split(" "),g=1;g<E.length;g++)o[E[g]]=!0;a.push(m)});var l,u=[h6,m6];{var c,f=[l6,c6(function(m){c.insert(m)})],p=u6(u.concat(i,f)),y=function(E){return io(s6(E),p)};l=function(E,g,h,x){c=h,y(E?E+"{"+g.styles+"}":g.styles),x&&(v.inserted[g.name]=!0)}}var v={key:n,sheet:new GC({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return v.sheet.hydrate(a),v},u2={exports:{}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze=typeof Symbol=="function"&&Symbol.for,jh=Ze?Symbol.for("react.element"):60103,Ph=Ze?Symbol.for("react.portal"):60106,Zu=Ze?Symbol.for("react.fragment"):60107,Ju=Ze?Symbol.for("react.strict_mode"):60108,ec=Ze?Symbol.for("react.profiler"):60114,tc=Ze?Symbol.for("react.provider"):60109,nc=Ze?Symbol.for("react.context"):60110,Rh=Ze?Symbol.for("react.async_mode"):60111,rc=Ze?Symbol.for("react.concurrent_mode"):60111,ic=Ze?Symbol.for("react.forward_ref"):60112,oc=Ze?Symbol.for("react.suspense"):60113,x6=Ze?Symbol.for("react.suspense_list"):60120,sc=Ze?Symbol.for("react.memo"):60115,ac=Ze?Symbol.for("react.lazy"):60116,w6=Ze?Symbol.for("react.block"):60121,S6=Ze?Symbol.for("react.fundamental"):60117,b6=Ze?Symbol.for("react.responder"):60118,E6=Ze?Symbol.for("react.scope"):60119;function Bt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case jh:switch(e=e.type,e){case Rh:case rc:case Zu:case ec:case Ju:case oc:return e;default:switch(e=e&&e.$$typeof,e){case nc:case ic:case ac:case sc:case tc:return e;default:return t}}case Ph:return t}}}function c2(e){return Bt(e)===rc}ve.AsyncMode=Rh;ve.ConcurrentMode=rc;ve.ContextConsumer=nc;ve.ContextProvider=tc;ve.Element=jh;ve.ForwardRef=ic;ve.Fragment=Zu;ve.Lazy=ac;ve.Memo=sc;ve.Portal=Ph;ve.Profiler=ec;ve.StrictMode=Ju;ve.Suspense=oc;ve.isAsyncMode=function(e){return c2(e)||Bt(e)===Rh};ve.isConcurrentMode=c2;ve.isContextConsumer=function(e){return Bt(e)===nc};ve.isContextProvider=function(e){return Bt(e)===tc};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jh};ve.isForwardRef=function(e){return Bt(e)===ic};ve.isFragment=function(e){return Bt(e)===Zu};ve.isLazy=function(e){return Bt(e)===ac};ve.isMemo=function(e){return Bt(e)===sc};ve.isPortal=function(e){return Bt(e)===Ph};ve.isProfiler=function(e){return Bt(e)===ec};ve.isStrictMode=function(e){return Bt(e)===Ju};ve.isSuspense=function(e){return Bt(e)===oc};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Zu||e===rc||e===ec||e===Ju||e===oc||e===x6||typeof e=="object"&&e!==null&&(e.$$typeof===ac||e.$$typeof===sc||e.$$typeof===tc||e.$$typeof===nc||e.$$typeof===ic||e.$$typeof===S6||e.$$typeof===b6||e.$$typeof===E6||e.$$typeof===w6)};ve.typeOf=Bt;u2.exports=ve;var C6=u2.exports,Ah=C6,T6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},k6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_6={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mh={};Mh[Ah.ForwardRef]=_6;Mh[Ah.Memo]=f2;function d1(e){return Ah.isMemo(e)?f2:Mh[e.$$typeof]||T6}var $6=Object.defineProperty,O6=Object.getOwnPropertyNames,p1=Object.getOwnPropertySymbols,j6=Object.getOwnPropertyDescriptor,P6=Object.getPrototypeOf,h1=Object.prototype;function d2(e,t,n){if(typeof t!="string"){if(h1){var r=P6(t);r&&r!==h1&&d2(e,r,n)}var i=O6(t);p1&&(i=i.concat(p1(t)));for(var o=d1(e),s=d1(t),a=0;a<i.length;++a){var l=i[a];if(!k6[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=j6(t,l);try{$6(e,l,u)}catch{}}}}return e}var R6=d2;const A6=Oo(R6);var M6=!0;function I6(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var p2=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||M6===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},F6=function(t,n,r){p2(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function L6(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var N6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},z6=/[A-Z]|^ms/g,D6=/_EMO_([^_]+?)_([^]*?)_EMO_/g,h2=function(t){return t.charCodeAt(1)===45},m1=function(t){return t!=null&&typeof t!="boolean"},gf=Jv(function(e){return h2(e)?e:e.replace(z6,"-$&").toLowerCase()}),g1=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(D6,function(r,i,o){return _n={name:i,styles:o,next:_n},i})}return N6[t]!==1&&!h2(t)&&typeof n=="number"&&n!==0?n+"px":n};function ra(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return _n={name:n.name,styles:n.styles,next:_n},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)_n={name:r.name,styles:r.styles,next:_n},r=r.next;var i=n.styles+";";return i}return B6(e,t,n)}case"function":{if(e!==void 0){var o=_n,s=n(e);return _n=o,ra(e,t,s)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function B6(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ra(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":m1(s)&&(r+=gf(o)+":"+g1(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var a=0;a<s.length;a++)m1(s[a])&&(r+=gf(o)+":"+g1(o,s[a])+";");else{var l=ra(e,t,s);switch(o){case"animation":case"animationName":{r+=gf(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var y1=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_n,U6=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";_n=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=ra(r,n,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=ra(r,n,t[a]),i&&(o+=s[a]);y1.lastIndex=0;for(var l="",u;(u=y1.exec(o))!==null;)l+="-"+u[1];var c=L6(o)+l;return{name:c,styles:o,next:_n}},W6=function(t){return t()},H6=Lf.useInsertionEffect?Lf.useInsertionEffect:!1,V6=H6||W6,m2=b.createContext(typeof HTMLElement<"u"?v6({key:"css"}):null);m2.Provider;var G6=function(t){return b.forwardRef(function(n,r){var i=b.useContext(m2);return t(n,i,r)})},g2=b.createContext({}),K6=US,q6=function(t){return t!=="theme"},v1=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?K6:q6},x1=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Q6=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return p2(n,r,i),V6(function(){return F6(n,r,i)}),null},Y6=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var a=x1(t,n,r),l=a||v1(i),u=!l("as");return function(){var c=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)f.push.apply(f,c);else{f.push(c[0][0]);for(var p=c.length,y=1;y<p;y++)f.push(c[y],c[0][y])}var v=G6(function(m,E,g){var h=u&&m.as||i,x="",w=[],k=m;if(m.theme==null){k={};for(var T in m)k[T]=m[T];k.theme=b.useContext(g2)}typeof m.className=="string"?x=I6(E.registered,w,m.className):m.className!=null&&(x=m.className+" ");var S=U6(f.concat(w),E.registered,k);x+=E.key+"-"+S.name,s!==void 0&&(x+=" "+s);var O=u&&a===void 0?v1(h):l,j={};for(var $ in m)u&&$==="as"||O($)&&(j[$]=m[$]);return j.className=x,j.ref=g,b.createElement(b.Fragment,null,b.createElement(Q6,{cache:E,serialized:S,isStringTag:typeof h=="string"}),b.createElement(h,j))});return v.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=f,v.__emotion_forwardProp=a,Object.defineProperty(v,"toString",{value:function(){return"."+s}}),v.withComponent=function(m,E){return e(m,L({},n,E,{shouldForwardProp:x1(v,E,!0)})).apply(void 0,f)},v}},X6=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Gd=Y6.bind();X6.forEach(function(e){Gd[e]=Gd(e)});function Z6(e,t){return Gd(e,t)}const J6=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},eT=["values","unit","step"],tT=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>L({},n,{[r.key]:r.val}),{})};function nT(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,i=gt(e,eT),o=tT(t),s=Object.keys(o);function a(p){return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${n})`}function l(p){return`@media (max-width:${(typeof t[p]=="number"?t[p]:p)-r/100}${n})`}function u(p,y){const v=s.indexOf(y);return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${n}) and (max-width:${(v!==-1&&typeof t[s[v]]=="number"?t[s[v]]:y)-r/100}${n})`}function c(p){return s.indexOf(p)+1<s.length?u(p,s[s.indexOf(p)+1]):a(p)}function f(p){const y=s.indexOf(p);return y===0?a(s[1]):y===s.length-1?l(s[y]):u(p,s[s.indexOf(p)+1]).replace("@media","@media not all and")}return L({keys:s,values:o,up:a,down:l,between:u,only:c,not:f,unit:n},i)}const rT={borderRadius:4},iT=rT;function Os(e,t){return t?vn(e,t,{clone:!1}):e}const Ih={xs:0,sm:600,md:900,lg:1200,xl:1536},w1={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Ih[e]}px)`};function Jn(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const o=r.breakpoints||w1;return t.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(t[l]),s),{})}if(typeof t=="object"){const o=r.breakpoints||w1;return Object.keys(t).reduce((s,a)=>{if(Object.keys(o.values||Ih).indexOf(a)!==-1){const l=o.up(a);s[l]=n(t[a],a)}else{const l=a;s[l]=t[l]}return s},{})}return n(t)}function oT(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,i)=>{const o=e.up(i);return r[o]={},r},{}))||{}}function sT(e,t){return e.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},t)}function lc(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(r!=null)return r}return t.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,e)}function mu(e,t,n,r=n){let i;return typeof e=="function"?i=e(n):Array.isArray(e)?i=e[n]||r:i=lc(e,n)||r,t&&(i=t(i,r,e)),i}function De(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,o=s=>{if(s[t]==null)return null;const a=s[t],l=s.theme,u=lc(l,r)||{};return Jn(s,a,f=>{let p=mu(u,i,f);return f===p&&typeof f=="string"&&(p=mu(u,i,`${t}${f==="default"?"":ti(f)}`,f)),n===!1?p:{[n]:p}})};return o.propTypes={},o.filterProps=[t],o}function aT(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const lT={m:"margin",p:"padding"},uT={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},S1={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},cT=aT(e=>{if(e.length>2)if(S1[e])e=S1[e];else return[e];const[t,n]=e.split(""),r=lT[t],i=uT[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),Fh=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Lh=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Fh,...Lh];function xa(e,t,n,r){var i;const o=(i=lc(e,t,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function y2(e){return xa(e,"spacing",8)}function wa(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function fT(e,t){return n=>e.reduce((r,i)=>(r[i]=wa(t,n),r),{})}function dT(e,t,n,r){if(t.indexOf(n)===-1)return null;const i=cT(n),o=fT(i,r),s=e[n];return Jn(e,s,o)}function v2(e,t){const n=y2(e.theme);return Object.keys(e).map(r=>dT(e,t,r,n)).reduce(Os,{})}function Fe(e){return v2(e,Fh)}Fe.propTypes={};Fe.filterProps=Fh;function Le(e){return v2(e,Lh)}Le.propTypes={};Le.filterProps=Lh;function pT(e=8){if(e.mui)return e;const t=y2({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=t(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function uc(...e){const t=e.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>t[o]?Os(i,t[o](r)):i,{});return n.propTypes={},n.filterProps=e.reduce((r,i)=>r.concat(i.filterProps),[]),n}function qt(e){return typeof e!="number"?e:`${e}px solid`}function on(e,t){return De({prop:e,themeKey:"borders",transform:t})}const hT=on("border",qt),mT=on("borderTop",qt),gT=on("borderRight",qt),yT=on("borderBottom",qt),vT=on("borderLeft",qt),xT=on("borderColor"),wT=on("borderTopColor"),ST=on("borderRightColor"),bT=on("borderBottomColor"),ET=on("borderLeftColor"),CT=on("outline",qt),TT=on("outlineColor"),cc=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=xa(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:wa(t,r)});return Jn(e,e.borderRadius,n)}return null};cc.propTypes={};cc.filterProps=["borderRadius"];uc(hT,mT,gT,yT,vT,xT,wT,ST,bT,ET,cc,CT,TT);const fc=e=>{if(e.gap!==void 0&&e.gap!==null){const t=xa(e.theme,"spacing",8),n=r=>({gap:wa(t,r)});return Jn(e,e.gap,n)}return null};fc.propTypes={};fc.filterProps=["gap"];const dc=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=xa(e.theme,"spacing",8),n=r=>({columnGap:wa(t,r)});return Jn(e,e.columnGap,n)}return null};dc.propTypes={};dc.filterProps=["columnGap"];const pc=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=xa(e.theme,"spacing",8),n=r=>({rowGap:wa(t,r)});return Jn(e,e.rowGap,n)}return null};pc.propTypes={};pc.filterProps=["rowGap"];const kT=De({prop:"gridColumn"}),_T=De({prop:"gridRow"}),$T=De({prop:"gridAutoFlow"}),OT=De({prop:"gridAutoColumns"}),jT=De({prop:"gridAutoRows"}),PT=De({prop:"gridTemplateColumns"}),RT=De({prop:"gridTemplateRows"}),AT=De({prop:"gridTemplateAreas"}),MT=De({prop:"gridArea"});uc(fc,dc,pc,kT,_T,$T,OT,jT,PT,RT,AT,MT);function oo(e,t){return t==="grey"?t:e}const IT=De({prop:"color",themeKey:"palette",transform:oo}),FT=De({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:oo}),LT=De({prop:"backgroundColor",themeKey:"palette",transform:oo});uc(IT,FT,LT);function Pt(e){return e<=1&&e!==0?`${e*100}%`:e}const NT=De({prop:"width",transform:Pt}),Nh=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,i;const o=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Ih[n];return o?((i=e.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${o}${e.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:Pt(n)}};return Jn(e,e.maxWidth,t)}return null};Nh.filterProps=["maxWidth"];const zT=De({prop:"minWidth",transform:Pt}),DT=De({prop:"height",transform:Pt}),BT=De({prop:"maxHeight",transform:Pt}),UT=De({prop:"minHeight",transform:Pt});De({prop:"size",cssProperty:"width",transform:Pt});De({prop:"size",cssProperty:"height",transform:Pt});const WT=De({prop:"boxSizing"});uc(NT,Nh,zT,DT,BT,UT,WT);const HT={border:{themeKey:"borders",transform:qt},borderTop:{themeKey:"borders",transform:qt},borderRight:{themeKey:"borders",transform:qt},borderBottom:{themeKey:"borders",transform:qt},borderLeft:{themeKey:"borders",transform:qt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:qt},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:cc},color:{themeKey:"palette",transform:oo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:oo},backgroundColor:{themeKey:"palette",transform:oo},p:{style:Le},pt:{style:Le},pr:{style:Le},pb:{style:Le},pl:{style:Le},px:{style:Le},py:{style:Le},padding:{style:Le},paddingTop:{style:Le},paddingRight:{style:Le},paddingBottom:{style:Le},paddingLeft:{style:Le},paddingX:{style:Le},paddingY:{style:Le},paddingInline:{style:Le},paddingInlineStart:{style:Le},paddingInlineEnd:{style:Le},paddingBlock:{style:Le},paddingBlockStart:{style:Le},paddingBlockEnd:{style:Le},m:{style:Fe},mt:{style:Fe},mr:{style:Fe},mb:{style:Fe},ml:{style:Fe},mx:{style:Fe},my:{style:Fe},margin:{style:Fe},marginTop:{style:Fe},marginRight:{style:Fe},marginBottom:{style:Fe},marginLeft:{style:Fe},marginX:{style:Fe},marginY:{style:Fe},marginInline:{style:Fe},marginInlineStart:{style:Fe},marginInlineEnd:{style:Fe},marginBlock:{style:Fe},marginBlockStart:{style:Fe},marginBlockEnd:{style:Fe},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:fc},rowGap:{style:pc},columnGap:{style:dc},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Pt},maxWidth:{style:Nh},minWidth:{transform:Pt},height:{transform:Pt},maxHeight:{transform:Pt},minHeight:{transform:Pt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},zh=HT;function VT(...e){const t=e.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function GT(e,t){return typeof e=="function"?e(t):e}function KT(){function e(n,r,i,o){const s={[n]:r,theme:i},a=o[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:u,transform:c,style:f}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const p=lc(i,u)||{};return f?f(s):Jn(s,r,v=>{let m=mu(p,c,v);return v===m&&typeof v=="string"&&(m=mu(p,c,`${n}${v==="default"?"":ti(v)}`,v)),l===!1?m:{[l]:m}})}function t(n){var r;const{sx:i,theme:o={}}=n||{};if(!i)return null;const s=(r=o.unstable_sxConfig)!=null?r:zh;function a(l){let u=l;if(typeof l=="function")u=l(o);else if(typeof l!="object")return l;if(!u)return null;const c=oT(o.breakpoints),f=Object.keys(c);let p=c;return Object.keys(u).forEach(y=>{const v=GT(u[y],o);if(v!=null)if(typeof v=="object")if(s[y])p=Os(p,e(y,v,o,s));else{const m=Jn({theme:o},v,E=>({[y]:E}));VT(m,v)?p[y]=t({sx:v,theme:o}):p=Os(p,m)}else p=Os(p,e(y,v,o,s))}),sT(f,p)}return Array.isArray(i)?i.map(a):a(i)}return t}const hc=KT();hc.filterProps=["sx"];const qT=["breakpoints","palette","spacing","shape"];function Dh(e={},...t){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=e,s=gt(e,qT),a=nT(n),l=pT(i);let u=vn({breakpoints:a,direction:"ltr",components:{},palette:L({mode:"light"},r),spacing:l,shape:L({},iT,o)},s);return u=t.reduce((c,f)=>vn(c,f),u),u.unstable_sxConfig=L({},zh,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(f){return hc({sx:f,theme:this})},u}function QT(e){return Object.keys(e).length===0}function x2(e=null){const t=b.useContext(g2);return!t||QT(t)?e:t}const YT=Dh();function w2(e=YT){return x2(e)}const XT=["variant"];function b1(e){return e.length===0}function S2(e){const{variant:t}=e,n=gt(e,XT);let r=t||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=b1(r)?e[i]:ti(e[i]):r+=`${b1(r)?i:ti(i)}${ti(e[i].toString())}`}),r}const ZT=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function JT(e){return Object.keys(e).length===0}function e8(e){return typeof e=="string"&&e.charCodeAt(0)>96}const t8=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,gu=e=>{let t=0;const n={};return e&&e.forEach(r=>{let i="";typeof r.props=="function"?(i=`callback${t}`,t+=1):i=S2(r.props),n[i]=r.style}),n},n8=(e,t)=>{let n=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants),gu(n)},yu=(e,t,n)=>{const{ownerState:r={}}=e,i=[];let o=0;return n&&n.forEach(s=>{let a=!0;if(typeof s.props=="function"){const l=L({},e,r);a=s.props(l)}else Object.keys(s.props).forEach(l=>{r[l]!==s.props[l]&&e[l]!==s.props[l]&&(a=!1)});a&&(typeof s.props=="function"?i.push(t[`callback${o}`]):i.push(t[S2(s.props)])),typeof s.props=="function"&&(o+=1)}),i},r8=(e,t,n,r)=>{var i;const o=n==null||(i=n.components)==null||(i=i[r])==null?void 0:i.variants;return yu(e,t,o)};function Rl(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const i8=Dh(),o8=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Al({defaultTheme:e,theme:t,themeId:n}){return JT(t)?e:t[n]||t}function s8(e){return e?(t,n)=>n[e]:null}const E1=({styledArg:e,props:t,defaultTheme:n,themeId:r})=>{const i=e(L({},t,{theme:Al(L({},t,{defaultTheme:n,themeId:r}))}));let o;if(i&&i.variants&&(o=i.variants,delete i.variants),o){const s=yu(t,gu(o),o);return[i,...s]}return i};function a8(e={}){const{themeId:t,defaultTheme:n=i8,rootShouldForwardProp:r=Rl,slotShouldForwardProp:i=Rl}=e,o=s=>hc(L({},s,{theme:Al(L({},s,{defaultTheme:n,themeId:t}))}));return o.__mui_systemSx=!0,(s,a={})=>{J6(s,w=>w.filter(k=>!(k!=null&&k.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:c,skipSx:f,overridesResolver:p=s8(o8(u))}=a,y=gt(a,ZT),v=c!==void 0?c:u&&u!=="Root"&&u!=="root"||!1,m=f||!1;let E,g=Rl;u==="Root"||u==="root"?g=r:u?g=i:e8(s)&&(g=void 0);const h=Z6(s,L({shouldForwardProp:g,label:E},y)),x=(w,...k)=>{const T=k?k.map($=>{if(typeof $=="function"&&$.__emotion_real!==$)return A=>E1({styledArg:$,props:A,defaultTheme:n,themeId:t});if(fr($)){let A=$,Q;return $&&$.variants&&(Q=$.variants,delete A.variants,A=D=>{let X=$;return yu(D,gu(Q),Q).forEach(J=>{X=vn(X,J)}),X}),A}return $}):[];let S=w;if(fr(w)){let $;w&&w.variants&&($=w.variants,delete S.variants,S=A=>{let Q=w;return yu(A,gu($),$).forEach(X=>{Q=vn(Q,X)}),Q})}else typeof w=="function"&&w.__emotion_real!==w&&(S=$=>E1({styledArg:w,props:$,defaultTheme:n,themeId:t}));l&&p&&T.push($=>{const A=Al(L({},$,{defaultTheme:n,themeId:t})),Q=t8(l,A);if(Q){const D={};return Object.entries(Q).forEach(([X,G])=>{D[X]=typeof G=="function"?G(L({},$,{theme:A})):G}),p($,D)}return null}),l&&!v&&T.push($=>{const A=Al(L({},$,{defaultTheme:n,themeId:t}));return r8($,n8(l,A),A,l)}),m||T.push(o);const O=T.length-k.length;if(Array.isArray(w)&&O>0){const $=new Array(O).fill("");S=[...w,...$],S.raw=[...w.raw,...$]}const j=h(S,...T);return s.muiName&&(j.muiName=s.muiName),j};return h.withConfig&&(x.withConfig=h.withConfig),x}}function l8(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Dx(t.components[n].defaultProps,r)}function u8({props:e,name:t,defaultTheme:n,themeId:r}){let i=w2(n);return r&&(i=i[r]||i),l8({theme:i,name:t,props:e})}function Bh(e,t=0,n=1){return hE(e,t,n)}function c8(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function di(e){if(e.type)return e;if(e.charAt(0)==="#")return di(c8(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(xo(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(xo(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function mc(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function f8(e){e=di(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,o=r*Math.min(i,1-i),s=(u,c=(u+n/30)%12)=>i-o*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",l.push(t[3])),mc({type:a,values:l})}function C1(e){e=di(e);let t=e.type==="hsl"||e.type==="hsla"?di(f8(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function d8(e,t){const n=C1(e),r=C1(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function b2(e,t){return e=di(e),t=Bh(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,mc(e)}function p8(e,t){if(e=di(e),t=Bh(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return mc(e)}function h8(e,t){if(e=di(e),t=Bh(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return mc(e)}function m8(e,t){return L({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const g8={black:"#000",white:"#fff"},ia=g8,y8={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},v8=y8,x8={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},_i=x8,w8={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},$i=w8,S8={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},es=S8,b8={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Oi=b8,E8={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},ji=E8,C8={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Pi=C8,T8=["mode","contrastThreshold","tonalOffset"],T1={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ia.white,default:ia.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},yf={text:{primary:ia.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ia.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function k1(e,t,n,r){const i=r.light||r,o=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=h8(e.main,i):t==="dark"&&(e.dark=p8(e.main,o)))}function k8(e="light"){return e==="dark"?{main:Oi[200],light:Oi[50],dark:Oi[400]}:{main:Oi[700],light:Oi[400],dark:Oi[800]}}function _8(e="light"){return e==="dark"?{main:_i[200],light:_i[50],dark:_i[400]}:{main:_i[500],light:_i[300],dark:_i[700]}}function $8(e="light"){return e==="dark"?{main:$i[500],light:$i[300],dark:$i[700]}:{main:$i[700],light:$i[400],dark:$i[800]}}function O8(e="light"){return e==="dark"?{main:ji[400],light:ji[300],dark:ji[700]}:{main:ji[700],light:ji[500],dark:ji[900]}}function j8(e="light"){return e==="dark"?{main:Pi[400],light:Pi[300],dark:Pi[700]}:{main:Pi[800],light:Pi[500],dark:Pi[900]}}function P8(e="light"){return e==="dark"?{main:es[400],light:es[300],dark:es[700]}:{main:"#ed6c02",light:es[500],dark:es[900]}}function R8(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,i=gt(e,T8),o=e.primary||k8(t),s=e.secondary||_8(t),a=e.error||$8(t),l=e.info||O8(t),u=e.success||j8(t),c=e.warning||P8(t);function f(m){return d8(m,yf.text.primary)>=n?yf.text.primary:T1.text.primary}const p=({color:m,name:E,mainShade:g=500,lightShade:h=300,darkShade:x=700})=>{if(m=L({},m),!m.main&&m[g]&&(m.main=m[g]),!m.hasOwnProperty("main"))throw new Error(xo(11,E?` (${E})`:"",g));if(typeof m.main!="string")throw new Error(xo(12,E?` (${E})`:"",JSON.stringify(m.main)));return k1(m,"light",h,r),k1(m,"dark",x,r),m.contrastText||(m.contrastText=f(m.main)),m},y={dark:yf,light:T1};return vn(L({common:L({},ia),mode:t,primary:p({color:o,name:"primary"}),secondary:p({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:p({color:a,name:"error"}),warning:p({color:c,name:"warning"}),info:p({color:l,name:"info"}),success:p({color:u,name:"success"}),grey:v8,contrastThreshold:n,getContrastText:f,augmentColor:p,tonalOffset:r},y[t]),i)}const A8=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function M8(e){return Math.round(e*1e5)/1e5}const _1={textTransform:"uppercase"},$1='"Roboto", "Helvetica", "Arial", sans-serif';function I8(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=$1,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:c,pxToRem:f}=n,p=gt(n,A8),y=i/14,v=f||(g=>`${g/u*y}rem`),m=(g,h,x,w,k)=>L({fontFamily:r,fontWeight:g,fontSize:v(h),lineHeight:x},r===$1?{letterSpacing:`${M8(w/h)}em`}:{},k,c),E={h1:m(o,96,1.167,-1.5),h2:m(o,60,1.2,-.5),h3:m(s,48,1.167,0),h4:m(s,34,1.235,.25),h5:m(s,24,1.334,0),h6:m(a,20,1.6,.15),subtitle1:m(s,16,1.75,.15),subtitle2:m(a,14,1.57,.1),body1:m(s,16,1.5,.15),body2:m(s,14,1.43,.15),button:m(a,14,1.75,.4,_1),caption:m(s,12,1.66,.4),overline:m(s,12,2.66,1,_1),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return vn(L({htmlFontSize:u,pxToRem:v,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},E),p,{clone:!1})}const F8=.2,L8=.14,N8=.12;function $e(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${F8})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${L8})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${N8})`].join(",")}const z8=["none",$e(0,2,1,-1,0,1,1,0,0,1,3,0),$e(0,3,1,-2,0,2,2,0,0,1,5,0),$e(0,3,3,-2,0,3,4,0,0,1,8,0),$e(0,2,4,-1,0,4,5,0,0,1,10,0),$e(0,3,5,-1,0,5,8,0,0,1,14,0),$e(0,3,5,-1,0,6,10,0,0,1,18,0),$e(0,4,5,-2,0,7,10,1,0,2,16,1),$e(0,5,5,-3,0,8,10,1,0,3,14,2),$e(0,5,6,-3,0,9,12,1,0,3,16,2),$e(0,6,6,-3,0,10,14,1,0,4,18,3),$e(0,6,7,-4,0,11,15,1,0,4,20,3),$e(0,7,8,-4,0,12,17,2,0,5,22,4),$e(0,7,8,-4,0,13,19,2,0,5,24,4),$e(0,7,9,-4,0,14,21,2,0,5,26,4),$e(0,8,9,-5,0,15,22,2,0,6,28,5),$e(0,8,10,-5,0,16,24,2,0,6,30,5),$e(0,8,11,-5,0,17,26,2,0,6,32,5),$e(0,9,11,-5,0,18,28,2,0,7,34,6),$e(0,9,12,-6,0,19,29,2,0,7,36,6),$e(0,10,13,-6,0,20,31,3,0,8,38,7),$e(0,10,13,-6,0,21,33,3,0,8,40,7),$e(0,10,14,-6,0,22,35,3,0,8,42,7),$e(0,11,14,-7,0,23,36,3,0,9,44,8),$e(0,11,15,-7,0,24,38,3,0,9,46,8)],D8=["duration","easing","delay"],B8={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},U8={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function O1(e){return`${Math.round(e)}ms`}function W8(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function H8(e){const t=L({},B8,e.easing),n=L({},U8,e.duration);return L({getAutoHeightDuration:W8,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:l=0}=o;return gt(o,D8),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:O1(s)} ${a} ${typeof l=="string"?l:O1(l)}`).join(",")}},e,{easing:t,duration:n})}const V8={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},G8=V8,K8=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function q8(e={},...t){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=e,s=gt(e,K8);if(e.vars)throw new Error(xo(18));const a=R8(r),l=Dh(e);let u=vn(l,{mixins:m8(l.breakpoints,n),palette:a,shadows:z8.slice(),typography:I8(a,o),transitions:H8(i),zIndex:L({},G8)});return u=vn(u,s),u=t.reduce((c,f)=>vn(c,f),u),u.unstable_sxConfig=L({},zh,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(f){return hc({sx:f,theme:this})},u}const Q8=q8(),Uh=Q8,Wh="$$material",Y8=e=>Rl(e)&&e!=="classes",gc=a8({themeId:Wh,defaultTheme:Uh,rootShouldForwardProp:Y8});function E2(){const e=w2(Uh);return e[Wh]||e}function C2({props:e,name:t}){return u8({props:e,name:t,defaultTheme:Uh,themeId:Wh})}function Kd(e,t){return Kd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Kd(e,t)}function X8(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Kd(e,t)}const j1={disabled:!1},T2=N.createContext(null);var Z8=function(t){return t.scrollTop},hs="unmounted",Hr="exited",Vr="entering",Ii="entered",qd="exiting",tr=function(e){X8(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var s=i,a=s&&!s.isMounting?r.enter:r.appear,l;return o.appearStatus=null,r.in?a?(l=Hr,o.appearStatus=Vr):l=Ii:r.unmountOnExit||r.mountOnEnter?l=hs:l=Hr,o.state={status:l},o.nextCallback=null,o}t.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===hs?{status:Hr}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==Vr&&s!==Ii&&(o=Vr):(s===Vr||s===Ii)&&(o=qd)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,s,a;return o=s=a=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===Vr){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:Wa.findDOMNode(this);s&&Z8(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Hr&&this.setState({status:hs})},n.performEnter=function(i){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[Wa.findDOMNode(this),a],u=l[0],c=l[1],f=this.getTimeouts(),p=a?f.appear:f.enter;if(!i&&!s||j1.disabled){this.safeSetState({status:Ii},function(){o.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:Vr},function(){o.props.onEntering(u,c),o.onTransitionEnd(p,function(){o.safeSetState({status:Ii},function(){o.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:Wa.findDOMNode(this);if(!o||j1.disabled){this.safeSetState({status:Hr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:qd},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:Hr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:Wa.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===hs)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=gt(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return N.createElement(T2.Provider,{value:null},typeof s=="function"?s(i,a):N.cloneElement(N.Children.only(s),a))},t}(N.Component);tr.contextType=T2;tr.propTypes={};function Ri(){}tr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ri,onEntering:Ri,onEntered:Ri,onExit:Ri,onExiting:Ri,onExited:Ri};tr.UNMOUNTED=hs;tr.EXITED=Hr;tr.ENTERING=Vr;tr.ENTERED=Ii;tr.EXITING=qd;const J8=tr,ek=e=>e.scrollTop;function P1(e,t){var n,r;const{timeout:i,easing:o,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof i=="number"?i:i[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof o=="object"?o[t.mode]:o,delay:s.transitionDelay}}const tk=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Qd(e){return`scale(${e}, ${e**2})`}const nk={entering:{opacity:1,transform:Qd(1)},entered:{opacity:1,transform:"none"}},vf=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),k2=b.forwardRef(function(t,n){const{addEndListener:r,appear:i=!0,children:o,easing:s,in:a,onEnter:l,onEntered:u,onEntering:c,onExit:f,onExited:p,onExiting:y,style:v,timeout:m="auto",TransitionComponent:E=J8}=t,g=gt(t,tk),h=b.useRef(),x=b.useRef(),w=E2(),k=b.useRef(null),T=wo(k,o.ref,n),S=G=>J=>{if(G){const te=k.current;J===void 0?G(te):G(te,J)}},O=S(c),j=S((G,J)=>{ek(G);const{duration:te,delay:M,easing:I}=P1({style:v,timeout:m,easing:s},{mode:"enter"});let W;m==="auto"?(W=w.transitions.getAutoHeightDuration(G.clientHeight),x.current=W):W=te,G.style.transition=[w.transitions.create("opacity",{duration:W,delay:M}),w.transitions.create("transform",{duration:vf?W:W*.666,delay:M,easing:I})].join(","),l&&l(G,J)}),$=S(u),A=S(y),Q=S(G=>{const{duration:J,delay:te,easing:M}=P1({style:v,timeout:m,easing:s},{mode:"exit"});let I;m==="auto"?(I=w.transitions.getAutoHeightDuration(G.clientHeight),x.current=I):I=J,G.style.transition=[w.transitions.create("opacity",{duration:I,delay:te}),w.transitions.create("transform",{duration:vf?I:I*.666,delay:vf?te:te||I*.333,easing:M})].join(","),G.style.opacity=0,G.style.transform=Qd(.75),f&&f(G)}),D=S(p),X=G=>{m==="auto"&&(h.current=setTimeout(G,x.current||0)),r&&r(k.current,G)};return b.useEffect(()=>()=>{clearTimeout(h.current)},[]),d.jsx(E,L({appear:i,in:a,nodeRef:k,onEnter:j,onEntered:$,onEntering:O,onExit:Q,onExited:D,onExiting:A,addEndListener:X,timeout:m==="auto"?null:m},g,{children:(G,J)=>b.cloneElement(o,L({style:L({opacity:0,transform:Qd(.75),visibility:G==="exited"&&!a?"hidden":void 0},nk[G],v,o.props.style),ref:T},J))}))});k2.muiSupportAuto=!0;const R1=k2,rk=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],ik=gc(WC,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ok=b.forwardRef(function(t,n){var r;const i=x2(),o=C2({props:t,name:"MuiPopper"}),{anchorEl:s,component:a,components:l,componentsProps:u,container:c,disablePortal:f,keepMounted:p,modifiers:y,open:v,placement:m,popperOptions:E,popperRef:g,transition:h,slots:x,slotProps:w}=o,k=gt(o,rk),T=(r=x==null?void 0:x.root)!=null?r:l==null?void 0:l.Root,S=L({anchorEl:s,container:c,disablePortal:f,keepMounted:p,modifiers:y,open:v,placement:m,popperOptions:E,popperRef:g,transition:h},k);return d.jsx(ik,L({as:a,direction:i==null?void 0:i.direction,slots:{root:T},slotProps:w??u},S,{ref:n}))}),_2=ok;function sk(e){return Wx("MuiTooltip",e)}const ak=pE("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),hr=ak,lk=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function uk(e){return Math.round(e*1e5)/1e5}const ck=e=>{const{classes:t,disableInteractive:n,arrow:r,touch:i,placement:o}=e,s={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",i&&"touch",`tooltipPlacement${ti(o.split("-")[0])}`],arrow:["arrow"]};return Bx(s,sk,t)},fk=gc(_2,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})(({theme:e,ownerState:t,open:n})=>L({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${hr.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${hr.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${hr.arrow}`]:L({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${hr.arrow}`]:L({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),dk=gc("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t[`tooltipPlacement${ti(n.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>L({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:b2(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${uk(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${hr.popper}[data-popper-placement*="left"] &`]:L({transformOrigin:"right center"},t.isRtl?L({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):L({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${hr.popper}[data-popper-placement*="right"] &`]:L({transformOrigin:"left center"},t.isRtl?L({marginRight:"14px"},t.touch&&{marginRight:"24px"}):L({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${hr.popper}[data-popper-placement*="top"] &`]:L({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${hr.popper}[data-popper-placement*="bottom"] &`]:L({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),pk=gc("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:b2(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Qa=!1,xf=null,ts={x:0,y:0};function Ya(e,t){return n=>{t&&t(n),e(n)}}const hk=b.forwardRef(function(t,n){var r,i,o,s,a,l,u,c,f,p,y,v,m,E,g,h,x,w,k;const T=C2({props:t,name:"MuiTooltip"}),{arrow:S=!1,children:O,components:j={},componentsProps:$={},describeChild:A=!1,disableFocusListener:Q=!1,disableHoverListener:D=!1,disableInteractive:X=!1,disableTouchListener:G=!1,enterDelay:J=100,enterNextDelay:te=0,enterTouchDelay:M=700,followCursor:I=!1,id:W,leaveDelay:ee=0,leaveTouchDelay:Y=1500,onClose:Pe,onOpen:ue,open:se,placement:he="bottom",PopperComponent:de,PopperProps:xe={},slotProps:me={},slots:Je={},title:K,TransitionComponent:z=R1,TransitionProps:H}=T,Z=gt(T,lk),we=b.isValidElement(O)?O:d.jsx("span",{children:O}),yt=E2(),Ut=yt.direction==="rtl",[Wt,wn]=b.useState(),[Ke,st]=b.useState(null),_=b.useRef(!1),F=X||I,B=b.useRef(),V=b.useRef(),q=b.useRef(),oe=b.useRef(),[Re,Ht]=nE({controlled:se,default:!1,name:"Tooltip",state:"open"});let _t=Re;const Fr=tE(W),Lr=b.useRef(),No=b.useCallback(()=>{Lr.current!==void 0&&(document.body.style.WebkitUserSelect=Lr.current,Lr.current=void 0),clearTimeout(oe.current)},[]);b.useEffect(()=>()=>{clearTimeout(B.current),clearTimeout(V.current),clearTimeout(q.current),No()},[No]);const zo=re=>{clearTimeout(xf),Qa=!0,Ht(!0),ue&&!_t&&ue(re)},Ei=rE(re=>{clearTimeout(xf),xf=setTimeout(()=>{Qa=!1},800+ee),Ht(!1),Pe&&_t&&Pe(re),clearTimeout(B.current),B.current=setTimeout(()=>{_.current=!1},yt.transitions.duration.shortest)}),Rc=re=>{_.current&&re.type!=="touchstart"||(Wt&&Wt.removeAttribute("title"),clearTimeout(V.current),clearTimeout(q.current),J||Qa&&te?V.current=setTimeout(()=>{zo(re)},Qa?te:J):zo(re))},pm=re=>{clearTimeout(V.current),clearTimeout(q.current),q.current=setTimeout(()=>{Ei(re)},ee)},{isFocusVisibleRef:hm,onBlur:r4,onFocus:i4,ref:o4}=cE(),[,mm]=b.useState(!1),gm=re=>{r4(re),hm.current===!1&&(mm(!1),pm(re))},ym=re=>{Wt||wn(re.currentTarget),i4(re),hm.current===!0&&(mm(!0),Rc(re))},vm=re=>{_.current=!0;const $t=we.props;$t.onTouchStart&&$t.onTouchStart(re)},xm=Rc,wm=pm,s4=re=>{vm(re),clearTimeout(q.current),clearTimeout(B.current),No(),Lr.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",oe.current=setTimeout(()=>{document.body.style.WebkitUserSelect=Lr.current,Rc(re)},M)},a4=re=>{we.props.onTouchEnd&&we.props.onTouchEnd(re),No(),clearTimeout(q.current),q.current=setTimeout(()=>{Ei(re)},Y)};b.useEffect(()=>{if(!_t)return;function re($t){($t.key==="Escape"||$t.key==="Esc")&&Ei($t)}return document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)}},[Ei,_t]);const l4=wo(we.ref,o4,wn,n);!K&&K!==0&&(_t=!1);const Ac=b.useRef(),u4=re=>{const $t=we.props;$t.onMouseMove&&$t.onMouseMove(re),ts={x:re.clientX,y:re.clientY},Ac.current&&Ac.current.update()},Do={},Mc=typeof K=="string";A?(Do.title=!_t&&Mc&&!D?K:null,Do["aria-describedby"]=_t?Fr:null):(Do["aria-label"]=Mc?K:null,Do["aria-labelledby"]=_t&&!Mc?Fr:null);const sn=L({},Do,Z,we.props,{className:Yi(Z.className,we.props.className),onTouchStart:vm,ref:l4},I?{onMouseMove:u4}:{}),Bo={};G||(sn.onTouchStart=s4,sn.onTouchEnd=a4),D||(sn.onMouseOver=Ya(xm,sn.onMouseOver),sn.onMouseLeave=Ya(wm,sn.onMouseLeave),F||(Bo.onMouseOver=xm,Bo.onMouseLeave=wm)),Q||(sn.onFocus=Ya(ym,sn.onFocus),sn.onBlur=Ya(gm,sn.onBlur),F||(Bo.onFocus=ym,Bo.onBlur=gm));const c4=b.useMemo(()=>{var re;let $t=[{name:"arrow",enabled:!!Ke,options:{element:Ke,padding:4}}];return(re=xe.popperOptions)!=null&&re.modifiers&&($t=$t.concat(xe.popperOptions.modifiers)),L({},xe.popperOptions,{modifiers:$t})},[Ke,xe]),Uo=L({},T,{isRtl:Ut,arrow:S,disableInteractive:F,placement:he,PopperComponentProp:de,touch:_.current}),Ic=ck(Uo),Sm=(r=(i=Je.popper)!=null?i:j.Popper)!=null?r:fk,bm=(o=(s=(a=Je.transition)!=null?a:j.Transition)!=null?s:z)!=null?o:R1,Em=(l=(u=Je.tooltip)!=null?u:j.Tooltip)!=null?l:dk,Cm=(c=(f=Je.arrow)!=null?f:j.Arrow)!=null?c:pk,f4=ps(Sm,L({},xe,(p=me.popper)!=null?p:$.popper,{className:Yi(Ic.popper,xe==null?void 0:xe.className,(y=(v=me.popper)!=null?v:$.popper)==null?void 0:y.className)}),Uo),d4=ps(bm,L({},H,(m=me.transition)!=null?m:$.transition),Uo),p4=ps(Em,L({},(E=me.tooltip)!=null?E:$.tooltip,{className:Yi(Ic.tooltip,(g=(h=me.tooltip)!=null?h:$.tooltip)==null?void 0:g.className)}),Uo),h4=ps(Cm,L({},(x=me.arrow)!=null?x:$.arrow,{className:Yi(Ic.arrow,(w=(k=me.arrow)!=null?k:$.arrow)==null?void 0:w.className)}),Uo);return d.jsxs(b.Fragment,{children:[b.cloneElement(we,sn),d.jsx(Sm,L({as:de??_2,placement:he,anchorEl:I?{getBoundingClientRect:()=>({top:ts.y,left:ts.x,right:ts.x,bottom:ts.y,width:0,height:0})}:Wt,popperRef:Ac,open:Wt?_t:!1,id:Fr,transition:!0},Bo,f4,{popperOptions:c4,children:({TransitionProps:re})=>d.jsx(bm,L({timeout:yt.transitions.duration.shorter},re,d4,{children:d.jsxs(Em,L({},p4,{children:[K,S?d.jsx(Cm,L({},h4,{ref:st})):null]}))}))}))]})}),js=hk;function mk(e){return _e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M414.39 97.74A224 224 0 1097.61 414.52 224 224 0 10414.39 97.74zM64 256.13a191.63 191.63 0 016.7-50.31c7.34 15.8 18 29.45 25.25 45.66 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.21-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.08 8.72 21.52 10.08 33.36a305.36 305.36 0 007.45 41.27c0 .1 0 .21.08.31C117.8 411.13 64 339.8 64 256.13zm192 192a193.12 193.12 0 01-32-2.68c.11-2.71.16-5.24.43-7 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.68 34.11-33 8.78-13 11.41-30.5 7.79-45.69-5.33-22.44-35.82-29.93-52.26-42.1-9.45-7-17.86-17.82-30.27-18.7-5.72-.4-10.51.83-16.18-.63-5.2-1.35-9.28-4.15-14.82-3.42-10.35 1.36-16.88 12.42-28 10.92-10.55-1.41-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.68 5.78 2.14 8.51 7.8 13.7 10.66 9.73 5.34 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.21 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.06 10-21.46 1.65-3.45 0-8.24-2.78-12.75q5.41-2.28 11-4.23a15.6 15.6 0 008 3c6.69.44 13-3.18 18.84 1.38 6.48 5 11.15 11.32 19.75 12.88 8.32 1.51 17.13-3.34 19.19-11.86 1.25-5.18 0-10.65-1.2-16a190.83 190.83 0 01105 32.21c-2-.76-4.39-.67-7.34.7-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22 8.5 0 17.11-3.8 14.37-13.62-1.19-4.26-2.81-8.69-5.42-11.37a193.27 193.27 0 0118 14.14c-.09.09-.18.17-.27.27-5.76 6-12.45 10.75-16.39 18.05-2.78 5.14-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.4 3.74 23.51 8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0110.82 4.41c3.8 3.94 3.05 7.62 3.86 12.54 1.43 8.74 9.14 4 13.83-.41a192.12 192.12 0 019.24 18.77c-5.16 7.43-9.26 15.53-21.67 6.87-7.43-5.19-12-12.72-21.33-15.06-8.15-2-16.5.08-24.55 1.47-9.15 1.59-20 2.29-26.94 9.22-6.71 6.68-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.81 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21a158 158 0 004.74 30.07A191.75 191.75 0 01256 448.13z"}}]})(e)}function gk(e){return _e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"}},{tag:"circle",attr:{cx:"256",cy:"192",r:"48",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}}]})(e)}const yk=C.div`
  display: flex;
  flex-direction: column;
  gap: 7.2rem;
`,vk=C.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`,xk=C.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;

  @media (min-width: 440px) {
    flex-direction: row;
    gap: 2.4rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`,wk=C.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;C.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;const Ml=C.p`
  color: ${e=>e.theme.colors.heroTextColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  transition: 0.3s ease-in-out;
  border-bottom: 1px solid transparent;
`,wf=C.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &:hover {
    ${Ml} {
      cursor: pointer;
      border-bottom: 1px solid ${e=>e.theme.colors.heroTextColor};
    }
  }
`,Sf=C.div`
  font-size: 1.8rem;
`,Sk=C.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4.8rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 4.8rem;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`,bk=C.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 4.8rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4.8rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 4.8rem;
  }
`,Ek=C.p`
  color: ${e=>e.theme.colors.heroTextColor};
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.07;
  letter-spacing: -1.12px;

  @media (min-width: 365px) {
    font-size: 3.6rem;
  }

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }

  @media (min-width: 1440px) {
    font-size: 4.8rem;
  }
`,Ck=C.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  max-width: 70rem;
`,Tk=C.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 1.2rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`,A1=C.p`
  color: ${e=>e.theme.colors.footerInfoColor};
  text-align: right;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
`,ns={white:"#fafafa",instagram:"#e1306c",youtube:"#ff0000",facebook:"#3b5998",discord:"#7289d9",phone:"#28a745",mail:"#007bff",location:"#dc3545"};function kk(){return d.jsxs(yk,{children:[d.jsxs(Sk,{children:[d.jsxs(vk,{children:[d.jsxs(xk,{children:[d.jsx(Tx,{color:ns}),d.jsx(vh,{color:ns})]}),d.jsxs(wk,{children:[d.jsx(js,{title:"Call Me",arrow:!0,placement:"right",children:d.jsxs(wf,{href:"tel:+17734141884","aria-label":"Phone number +1 (773) 4141884",rel:"noopener noreferrer",children:[d.jsx(Sf,{children:d.jsx(Rx,{color:ns.phone})}),d.jsx(Ml,{children:"+1 (773) 414-1884"})]})}),d.jsx(js,{title:"Email Me",arrow:!0,placement:"right",children:d.jsxs(wf,{href:"mailto:pt@alexsmagin.com",children:[d.jsx(Sf,{children:d.jsx(Ax,{color:ns.mail})}),d.jsx(Ml,{children:"pt@alexsmagin.com"})]})}),d.jsx(js,{title:"My Location",arrow:!0,placement:"right",children:d.jsxs(wf,{href:"https://www.google.com/maps?q=Chicago,IL,USA",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(Sf,{children:d.jsx(gk,{color:ns.location})}),d.jsx(Ml,{children:"Chicago, IL, USA"})]})})]})]}),d.jsxs(bk,{children:[d.jsx(Ck,{children:d.jsx(Ek,{children:"Your Health is an Investment, Not an Expense."})}),d.jsx(xh,{location:"footer"})]})]}),d.jsxs(Tk,{children:[d.jsx("div",{children:d.jsxs(A1,{children:["©",d.jsx(q5,{})," AlexSmagin. All rights reserved."]})}),d.jsxs(A1,{children:[d.jsx("a",{to:"privacy",children:"Privacy Policy"}),d.jsx("span",{children:" / "}),d.jsx("a",{to:"terms",children:"Terms of Service"})]})]})]})}function _k(e){return _e({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M20.2739 9.86883L16.8325 4.95392L18.4708 3.80676L21.9122 8.72167L20.2739 9.86883Z",fill:"currentColor"}},{tag:"path",attr:{d:"M18.3901 12.4086L16.6694 9.95121L8.47783 15.687L10.1985 18.1444L8.56023 19.2916L3.97162 12.7383L5.60992 11.5912L7.33068 14.0487L15.5222 8.31291L13.8015 5.8554L15.4398 4.70825L20.0284 11.2615L18.3901 12.4086Z",fill:"currentColor"}},{tag:"path",attr:{d:"M20.7651 7.08331L22.4034 5.93616L21.2562 4.29785L19.6179 5.445L20.7651 7.08331Z",fill:"currentColor"}},{tag:"path",attr:{d:"M7.16753 19.046L3.72607 14.131L2.08777 15.2782L5.52923 20.1931L7.16753 19.046Z",fill:"currentColor"}},{tag:"path",attr:{d:"M4.38208 18.5549L2.74377 19.702L1.59662 18.0637L3.23492 16.9166L4.38208 18.5549Z",fill:"currentColor"}}]})(e)}function $k(e){return _e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M211.832 39.06c-15.022 15.31-15.894 22.83-23.473 43.903 2.69 9.14 5.154 16.927 9.148 25.117 5.158.283 10.765.47 15.342.43-6.11-10.208-8.276-19.32-4.733-35.274 4.3 19.05 12.847 29.993 21.203 34.332 3.032-.334 5.957-.714 8.776-1.146-6.255-10.337-8.494-19.47-4.914-35.588 3.897 17.27 11.287 27.876 18.86 32.94 4.658-1.043 9.283-2.243 13.927-3.534-5.517-9.69-7.36-18.692-3.97-33.957 3.357 14.876 9.307 24.81 15.732 30.516 5.095-1.57 9.296-2.898 13.852-4.347-.685-5.782-.416-12.187 1.064-19.115l1.883-8.8 17.603 3.76-1.88 8.804c-3.636 17.008 1.324 24.42 7.306 28.666 5.98 4.244 14.69 3.46 16.03 2.6l7.576-4.86 9.72 15.15c-3.857 2.34-7.9 5.44-11.822 7.06 18.65 27.678 32.183 61.465 24.756 93.55-2.365 9.474-6.03 18.243-11.715 24.986 12.725 12.13 21.215 22.026 31.032 34.5-3.713-2.387-7.586-4.844-11.692-7.37-11.397-7.01-23.832-14.214-34.98-19.802-16.012-7.8-31.367-18.205-47.73-20.523-22.552-2.967-46.27 4.797-73.32 21.06 7.872 8.72 13.282 15.474 20.312 24.288-6.98-4.338-14.652-9.07-23.16-14.23-32.554-17.48-65.39-48.227-100.438-49.99-30.56-1.092-59.952 14.955-89.677 38.568L18 254.293V494h31.963c45.184-17.437 80.287-57.654 97.03-94.52l.25-.564.325-.52c9.463-15.252 11.148-29.688 16.79-44.732 5.645-15.044 16.907-29.718 41.884-38.756 4.353-2.16 5.07-1.415 8.633 1.395 30.468 24.01 57.29 32.02 83.24 32.35 32.61-1.557 58.442-9.882 85.682-19.38-3.966 3.528-8.77 7.21-13.986 10.762-15.323 10.436-34.217 19.928-46.304 24.8-14.716 2.006-28.36 2.416-41.967.616-9.96 12.09-25.574 20.358-37.35 26.673 63.92 14.023 115.88.91 167.386-22.896-9.522-1.817-19.008-3.692-27.994-5.42 31.634-4.422 64.984-3.766 94.705-3.53 4.084-.02 7.213-.453 8.7-.886 14.167-51.072-4.095-97.893-34.294-145.216-30.263-47.425-72.18-94.107-101.896-143.04-21.1-17.257-48.6-31.455-77.522-46.175-20.386 4.25-41.026 9.336-61.443 14.1zm85.385 70.49c-11.678 3.6-23.71 7.425-33.852 10.012 2.527 4.93 3.735 10.664 3.395 16.202 11.028.877 21.082-2.018 28.965-6.356 4.845-2.666 8.74-6.048 11.414-8.96-3.854-2.735-7.26-6.41-9.923-10.9zm-54.213 14.698c-11.76 1.143-24.59 2.362-35.06 2.236 2.39 4.772 3.78 12.067 8.51 14.84 11.18 1.164 20.6 1.997 29.91-1.746 5.435-3.214 1.818-15.058-3.36-15.33zm-34.98 209.332c-17.593 7.233-22.586 15.14-26.813 26.406-3.998 10.66-6.227 25.076-14.48 41.014 32.29-6.38 69.625-21.23 93.852-40.088-17.017-5.098-34.553-13.852-52.557-27.332zm9.318 71.385c-18.723 7.237-40.836 16.144-59.696 14.062C143.774 446.68 124.012 474.03 91.762 494h84.68c21.564-29.798 38.067-56.575 40.9-89.035z"}}]})(e)}const Ok=C.div`
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
`,jk=C.img`
  width: 100%;
  border-radius: 1.2rem;
`,Xa=C.div`
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
`,Pk=C.div`
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
`,Za=C.div`
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
`,Ja=C.h3`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: DM Sans;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 0.8rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid ${e=>e.theme.colors.accentColorLowOp};

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1440px) {
    font-size: 2.4rem;
  }
`,bn=C.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: DM Sans;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,bf=C.strong`
  color: ${e=>e.theme.colors.accentColor};
  font-family: "DM Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
`,Rk=C.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,zr=C.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`,Dr=C.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.greenColor};
`;function Ak(){return d.jsxs(Ok,{id:"about",children:[d.jsx("div",{children:d.jsx(jk,{src:"images/about.jpg",alt:"Personal Trainer in UFC Gym"})}),d.jsxs(Pk,{children:[d.jsxs(Xa,{children:[d.jsx(Za,{children:d.jsx(a5,{})}),d.jsx(Ja,{children:"Certified Fitness Professional"}),d.jsxs(Rk,{children:[d.jsxs(zr,{children:[d.jsx(Dr,{children:d.jsx(Nr,{})}),d.jsx(bn,{children:"Certified US Personal Trainer"})]}),d.jsxs(zr,{children:[d.jsx(Dr,{children:d.jsx(Nr,{})}),d.jsx(bn,{children:"Certified Bodybuilding Specialist"})]}),d.jsxs(zr,{children:[d.jsx(Dr,{children:d.jsx(Nr,{})}),d.jsx(bn,{children:"Certified MMA/Boxing coach"})]}),d.jsxs(zr,{children:[d.jsx(Dr,{children:d.jsx(Nr,{})}),d.jsx(bn,{children:"Certified Nutritionist"})]}),d.jsxs(zr,{children:[d.jsx(Dr,{children:d.jsx(Nr,{})}),d.jsx(bn,{children:"Master's in Physical Therapy"})]}),d.jsxs(zr,{children:[d.jsx(Dr,{children:d.jsx(Nr,{})}),d.jsx(bn,{children:"Certified Personal Trainer in Ukraine"})]}),d.jsxs(zr,{children:[d.jsx(Dr,{children:d.jsx(Nr,{})}),d.jsx(bn,{children:"Certified Personal Trainer in UAE"})]})]})]}),d.jsxs(Xa,{children:[d.jsx(Za,{children:d.jsx(mk,{})}),d.jsx(Ja,{children:"Global Expertise"}),d.jsxs(bn,{children:[d.jsx(bf,{children:"14+ Years of International Experience."})," ","Explore fitness with a trainer who brings a wealth of knowledge from diverse countries, offering a global perspective to tailor your training."]})]}),d.jsxs(Xa,{children:[d.jsx(Za,{children:d.jsx(_k,{})}),d.jsx(Ja,{children:"Unlock Your Full Potential"}),d.jsxs(bn,{children:[d.jsx(bf,{children:"Build fitness plans for individual goals."})," ","Experience fitness on a personal level with programs designed exclusively for you, based on your unique aspirations and current fitness levels."]})]}),d.jsxs(Xa,{children:[d.jsx(Za,{children:d.jsx($k,{})}),d.jsx(Ja,{children:"Journey Through Sports"}),d.jsxs(bn,{children:[d.jsx(bf,{children:"Train with a champion."})," ","Beginning my sports journey at the age of 4, I participated in gymnastics, football, bodybuilding, and MMA, achieving success as both a champion and finalist in national and international competitions. I'm here to guide you to success."]})]})]})]})}function $2(e,t){return function(){return e.apply(t,arguments)}}const{toString:Mk}=Object.prototype,{getPrototypeOf:Hh}=Object,yc=(e=>t=>{const n=Mk.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Nn=e=>(e=e.toLowerCase(),t=>yc(t)===e),vc=e=>t=>typeof t===e,{isArray:Io}=Array,oa=vc("undefined");function Ik(e){return e!==null&&!oa(e)&&e.constructor!==null&&!oa(e.constructor)&&Zt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const O2=Nn("ArrayBuffer");function Fk(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&O2(e.buffer),t}const Lk=vc("string"),Zt=vc("function"),j2=vc("number"),xc=e=>e!==null&&typeof e=="object",Nk=e=>e===!0||e===!1,Il=e=>{if(yc(e)!=="object")return!1;const t=Hh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},zk=Nn("Date"),Dk=Nn("File"),Bk=Nn("Blob"),Uk=Nn("FileList"),Wk=e=>xc(e)&&Zt(e.pipe),Hk=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Zt(e.append)&&((t=yc(e))==="formdata"||t==="object"&&Zt(e.toString)&&e.toString()==="[object FormData]"))},Vk=Nn("URLSearchParams"),Gk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sa(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Io(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function P2(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const R2=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,A2=e=>!oa(e)&&e!==R2;function Yd(){const{caseless:e}=A2(this)&&this||{},t={},n=(r,i)=>{const o=e&&P2(t,i)||i;Il(t[o])&&Il(r)?t[o]=Yd(t[o],r):Il(r)?t[o]=Yd({},r):Io(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Sa(arguments[r],n);return t}const Kk=(e,t,n,{allOwnKeys:r}={})=>(Sa(t,(i,o)=>{n&&Zt(i)?e[o]=$2(i,n):e[o]=i},{allOwnKeys:r}),e),qk=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Qk=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Yk=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Hh(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Xk=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Zk=e=>{if(!e)return null;if(Io(e))return e;let t=e.length;if(!j2(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Jk=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Hh(Uint8Array)),e_=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},t_=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},n_=Nn("HTMLFormElement"),r_=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),M1=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),i_=Nn("RegExp"),M2=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Sa(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},o_=e=>{M2(e,(t,n)=>{if(Zt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Zt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},s_=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Io(e)?r(e):r(String(e).split(t)),n},a_=()=>{},l_=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ef="abcdefghijklmnopqrstuvwxyz",I1="0123456789",I2={DIGIT:I1,ALPHA:Ef,ALPHA_DIGIT:Ef+Ef.toUpperCase()+I1},u_=(e=16,t=I2.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function c_(e){return!!(e&&Zt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const f_=e=>{const t=new Array(10),n=(r,i)=>{if(xc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Io(r)?[]:{};return Sa(r,(s,a)=>{const l=n(s,i+1);!oa(l)&&(o[a]=l)}),t[i]=void 0,o}}return r};return n(e,0)},d_=Nn("AsyncFunction"),p_=e=>e&&(xc(e)||Zt(e))&&Zt(e.then)&&Zt(e.catch),P={isArray:Io,isArrayBuffer:O2,isBuffer:Ik,isFormData:Hk,isArrayBufferView:Fk,isString:Lk,isNumber:j2,isBoolean:Nk,isObject:xc,isPlainObject:Il,isUndefined:oa,isDate:zk,isFile:Dk,isBlob:Bk,isRegExp:i_,isFunction:Zt,isStream:Wk,isURLSearchParams:Vk,isTypedArray:Jk,isFileList:Uk,forEach:Sa,merge:Yd,extend:Kk,trim:Gk,stripBOM:qk,inherits:Qk,toFlatObject:Yk,kindOf:yc,kindOfTest:Nn,endsWith:Xk,toArray:Zk,forEachEntry:e_,matchAll:t_,isHTMLForm:n_,hasOwnProperty:M1,hasOwnProp:M1,reduceDescriptors:M2,freezeMethods:o_,toObjectSet:s_,toCamelCase:r_,noop:a_,toFiniteNumber:l_,findKey:P2,global:R2,isContextDefined:A2,ALPHABET:I2,generateString:u_,isSpecCompliantForm:c_,toJSONObject:f_,isAsyncFn:d_,isThenable:p_};function ae(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}P.inherits(ae,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const F2=ae.prototype,L2={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{L2[e]={value:e}});Object.defineProperties(ae,L2);Object.defineProperty(F2,"isAxiosError",{value:!0});ae.from=(e,t,n,r,i,o)=>{const s=Object.create(F2);return P.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ae.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const h_=null;function Xd(e){return P.isPlainObject(e)||P.isArray(e)}function N2(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function F1(e,t,n){return e?e.concat(t).map(function(i,o){return i=N2(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function m_(e){return P.isArray(e)&&!e.some(Xd)}const g_=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function wc(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,E){return!P.isUndefined(E[m])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(P.isDate(v))return v.toISOString();if(!l&&P.isBlob(v))throw new ae("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(v)||P.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,m,E){let g=v;if(v&&!E&&typeof v=="object"){if(P.endsWith(m,"{}"))m=r?m:m.slice(0,-2),v=JSON.stringify(v);else if(P.isArray(v)&&m_(v)||(P.isFileList(v)||P.endsWith(m,"[]"))&&(g=P.toArray(v)))return m=N2(m),g.forEach(function(x,w){!(P.isUndefined(x)||x===null)&&t.append(s===!0?F1([m],w,o):s===null?m:m+"[]",u(x))}),!1}return Xd(v)?!0:(t.append(F1(E,m,o),u(v)),!1)}const f=[],p=Object.assign(g_,{defaultVisitor:c,convertValue:u,isVisitable:Xd});function y(v,m){if(!P.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+m.join("."));f.push(v),P.forEach(v,function(g,h){(!(P.isUndefined(g)||g===null)&&i.call(t,g,P.isString(h)?h.trim():h,m,p))===!0&&y(g,m?m.concat(h):[h])}),f.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return y(e),t}function L1(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Vh(e,t){this._pairs=[],e&&wc(e,this,t)}const z2=Vh.prototype;z2.append=function(t,n){this._pairs.push([t,n])};z2.toString=function(t){const n=t?function(r){return t.call(this,r,L1)}:L1;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function y_(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function D2(e,t,n){if(!t)return e;const r=n&&n.encode||y_,i=n&&n.serialize;let o;if(i?o=i(t,n):o=P.isURLSearchParams(t)?t.toString():new Vh(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class N1{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const B2={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},v_=typeof URLSearchParams<"u"?URLSearchParams:Vh,x_=typeof FormData<"u"?FormData:null,w_=typeof Blob<"u"?Blob:null,S_={isBrowser:!0,classes:{URLSearchParams:v_,FormData:x_,Blob:w_},protocols:["http","https","file","blob","url","data"]},U2=typeof window<"u"&&typeof document<"u",b_=(e=>U2&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),E_=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",C_=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:U2,hasStandardBrowserEnv:b_,hasStandardBrowserWebWorkerEnv:E_},Symbol.toStringTag,{value:"Module"})),On={...C_,...S_};function T_(e,t){return wc(e,new On.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return On.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function k_(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function __(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function W2(e){function t(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&P.isArray(i)?i.length:s,l?(P.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!P.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&P.isArray(i[s])&&(i[s]=__(i[s])),!a)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,i)=>{t(k_(r),i,n,0)}),n}return null}function $_(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Gh={transitional:B2,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=P.isObject(t);if(o&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return i&&i?JSON.stringify(W2(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return T_(t,this.formSerializer).toString();if((a=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return wc(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),$_(t)):t}],transformResponse:[function(t){const n=this.transitional||Gh.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&P.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?ae.from(a,ae.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:On.classes.FormData,Blob:On.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{Gh.headers[e]={}});const Kh=Gh,O_=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),j_=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&O_[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},z1=Symbol("internals");function rs(e){return e&&String(e).trim().toLowerCase()}function Fl(e){return e===!1||e==null?e:P.isArray(e)?e.map(Fl):String(e)}function P_(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const R_=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Cf(e,t,n,r,i){if(P.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function A_(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function M_(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Sc{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,l,u){const c=rs(l);if(!c)throw new Error("header name must be a non-empty string");const f=P.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=Fl(a))}const s=(a,l)=>P.forEach(a,(u,c)=>o(u,c,l));return P.isPlainObject(t)||t instanceof this.constructor?s(t,n):P.isString(t)&&(t=t.trim())&&!R_(t)?s(j_(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=rs(t),t){const r=P.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return P_(i);if(P.isFunction(n))return n.call(this,i,r);if(P.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=rs(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Cf(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=rs(s),s){const a=P.findKey(r,s);a&&(!n||Cf(r,r[a],a,n))&&(delete r[a],i=!0)}}return P.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Cf(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return P.forEach(this,(i,o)=>{const s=P.findKey(r,o);if(s){n[s]=Fl(i),delete n[o];return}const a=t?A_(o):String(o).trim();a!==o&&delete n[o],n[a]=Fl(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[z1]=this[z1]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=rs(s);r[a]||(M_(i,s),r[a]=!0)}return P.isArray(t)?t.forEach(o):o(t),this}}Sc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(Sc.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});P.freezeMethods(Sc);const Kn=Sc;function Tf(e,t){const n=this||Kh,r=t||n,i=Kn.from(r.headers);let o=r.data;return P.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function H2(e){return!!(e&&e.__CANCEL__)}function ba(e,t,n){ae.call(this,e??"canceled",ae.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(ba,ae,{__CANCEL__:!0});function I_(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ae("Request failed with status code "+n.status,[ae.ERR_BAD_REQUEST,ae.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const F_=On.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];P.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),P.isString(r)&&s.push("path="+r),P.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function L_(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function N_(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function V2(e,t){return e&&!L_(t)?N_(e,t):t}const z_=On.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=P.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function D_(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function B_(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];s||(s=u),n[i]=l,r[i]=u;let f=o,p=0;for(;f!==i;)p+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const y=c&&u-c;return y?Math.round(p*1e3/y):void 0}}function D1(e,t){let n=0;const r=B_(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,l=r(a),u=o<=s;n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&u?(s-o)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const U_=typeof XMLHttpRequest<"u",W_=U_&&function(e){return new Promise(function(n,r){let i=e.data;const o=Kn.from(e.headers).normalize();let{responseType:s,withXSRFToken:a}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let c;if(P.isFormData(i)){if(On.hasStandardBrowserEnv||On.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((c=o.getContentType())!==!1){const[m,...E]=c?c.split(";").map(g=>g.trim()).filter(Boolean):[];o.setContentType([m||"multipart/form-data",...E].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+E))}const p=V2(e.baseURL,e.url);f.open(e.method.toUpperCase(),D2(p,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function y(){if(!f)return;const m=Kn.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),g={data:!s||s==="text"||s==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:m,config:e,request:f};I_(function(x){n(x),u()},function(x){r(x),u()},g),f=null}if("onloadend"in f?f.onloadend=y:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(y)},f.onabort=function(){f&&(r(new ae("Request aborted",ae.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new ae("Network Error",ae.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||B2;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),r(new ae(E,g.clarifyTimeoutError?ae.ETIMEDOUT:ae.ECONNABORTED,e,f)),f=null},On.hasStandardBrowserEnv&&(a&&P.isFunction(a)&&(a=a(e)),a||a!==!1&&z_(p))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&F_.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}i===void 0&&o.setContentType(null),"setRequestHeader"in f&&P.forEach(o.toJSON(),function(E,g){f.setRequestHeader(g,E)}),P.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),s&&s!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",D1(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",D1(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=m=>{f&&(r(!m||m.type?new ba(null,e,f):m),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const v=D_(p);if(v&&On.protocols.indexOf(v)===-1){r(new ae("Unsupported protocol "+v+":",ae.ERR_BAD_REQUEST,e));return}f.send(i||null)})},Zd={http:h_,xhr:W_};P.forEach(Zd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const B1=e=>`- ${e}`,H_=e=>P.isFunction(e)||e===null||e===!1,G2={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!H_(n)&&(r=Zd[(s=String(n)).toLowerCase()],r===void 0))throw new ae(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(B1).join(`
`):" "+B1(o[0]):"as no adapter specified";throw new ae("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Zd};function kf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ba(null,e)}function U1(e){return kf(e),e.headers=Kn.from(e.headers),e.data=Tf.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),G2.getAdapter(e.adapter||Kh.adapter)(e).then(function(r){return kf(e),r.data=Tf.call(e,e.transformResponse,r),r.headers=Kn.from(r.headers),r},function(r){return H2(r)||(kf(e),r&&r.response&&(r.response.data=Tf.call(e,e.transformResponse,r.response),r.response.headers=Kn.from(r.response.headers))),Promise.reject(r)})}const W1=e=>e instanceof Kn?e.toJSON():e;function ko(e,t){t=t||{};const n={};function r(u,c,f){return P.isPlainObject(u)&&P.isPlainObject(c)?P.merge.call({caseless:f},u,c):P.isPlainObject(c)?P.merge({},c):P.isArray(c)?c.slice():c}function i(u,c,f){if(P.isUndefined(c)){if(!P.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function o(u,c){if(!P.isUndefined(c))return r(void 0,c)}function s(u,c){if(P.isUndefined(c)){if(!P.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,c)=>i(W1(u),W1(c),!0)};return P.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=l[c]||i,p=f(e[c],t[c],c);P.isUndefined(p)&&f!==a||(n[c]=p)}),n}const K2="1.6.4",qh={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{qh[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const H1={};qh.transitional=function(t,n,r){function i(o,s){return"[Axios v"+K2+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new ae(i(s," has been removed"+(n?" in "+n:"")),ae.ERR_DEPRECATED);return n&&!H1[s]&&(H1[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function V_(e,t,n){if(typeof e!="object")throw new ae("options must be an object",ae.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new ae("option "+o+" must be "+l,ae.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ae("Unknown option "+o,ae.ERR_BAD_OPTION)}}const Jd={assertOptions:V_,validators:qh},ir=Jd.validators;class vu{constructor(t){this.defaults=t,this.interceptors={request:new N1,response:new N1}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ko(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Jd.assertOptions(r,{silentJSONParsing:ir.transitional(ir.boolean),forcedJSONParsing:ir.transitional(ir.boolean),clarifyTimeoutError:ir.transitional(ir.boolean)},!1),i!=null&&(P.isFunction(i)?n.paramsSerializer={serialize:i}:Jd.assertOptions(i,{encode:ir.function,serialize:ir.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&P.merge(o.common,o[n.method]);o&&P.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=Kn.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let c,f=0,p;if(!l){const v=[U1.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,u),p=v.length,c=Promise.resolve(n);f<p;)c=c.then(v[f++],v[f++]);return c}p=a.length;let y=n;for(f=0;f<p;){const v=a[f++],m=a[f++];try{y=v(y)}catch(E){m.call(this,E);break}}try{c=U1.call(this,y)}catch(v){return Promise.reject(v)}for(f=0,p=u.length;f<p;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=ko(this.defaults,t);const n=V2(t.baseURL,t.url);return D2(n,t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(t){vu.prototype[t]=function(n,r){return this.request(ko(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(ko(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}vu.prototype[t]=n(),vu.prototype[t+"Form"]=n(!0)});const Ll=vu;class Qh{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new ba(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Qh(function(i){t=i}),cancel:t}}}const G_=Qh;function K_(e){return function(n){return e.apply(null,n)}}function q_(e){return P.isObject(e)&&e.isAxiosError===!0}const ep={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ep).forEach(([e,t])=>{ep[t]=e});const Q_=ep;function q2(e){const t=new Ll(e),n=$2(Ll.prototype.request,t);return P.extend(n,Ll.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return q2(ko(e,i))},n}const He=q2(Kh);He.Axios=Ll;He.CanceledError=ba;He.CancelToken=G_;He.isCancel=H2;He.VERSION=K2;He.toFormData=wc;He.AxiosError=ae;He.Cancel=He.CanceledError;He.all=function(t){return Promise.all(t)};He.spread=K_;He.isAxiosError=q_;He.mergeConfig=ko;He.AxiosHeaders=Kn;He.formToJSON=e=>W2(P.isHTMLForm(e)?new FormData(e):e);He.getAdapter=G2.getAdapter;He.HttpStatusCode=Q_;He.default=He;const Y_="https://your-energy.b.goit.study/api/",Ai=He.create({baseURL:Y_});function Q2(){const[e,t]=b.useState(1),[n,r]=b.useState(1);async function i(c,f,p){var v,m;const y=`filters?filter=${c}&page=${f}&limit=${p}`;try{const E=await Ai.get(y);return t((v=E==null?void 0:E.data)==null?void 0:v.totalPages),(m=E==null?void 0:E.data)==null?void 0:m.results}catch(E){throw console.error("Error fetching muscles:",E),E}}async function o(c,f){const p=`exercises?page=${c}&limit=${f}`;try{const y=await Ai.get(p);return console.log(y),y==null?void 0:y.data}catch(y){throw console.error("Error fetching Exercise:",y),y}}async function s(c,f){const p=`filters?page=${c}&limit=${f}`;try{const y=await Ai.get(p);return y==null?void 0:y.data}catch(y){throw console.error("Error fetching filters:",y),y}}async function a(c){const f=`exercises/${c}`;try{const p=await Ai.get(f);return p==null?void 0:p.data}catch(p){throw console.error("Error fetching ExerciseById:",p),p}}async function l(){const c="quote";try{const f=await Ai.get(c);return f==null?void 0:f.data}catch(f){return f}}async function u(c,f,p,y){var h,x;const v=c==null?void 0:c.bodypart,m=c==null?void 0:c.equipment,E=c==null?void 0:c.muscles,g=`exercises?bodypart=${v||""}&muscles=${E||""}&equipment=${m||""}&keyword=${f}&page=${p}&limit=${y}`;try{const w=await Ai.get(g);return r((h=w==null?void 0:w.data)==null?void 0:h.totalPages),(x=w==null?void 0:w.data)==null?void 0:x.results}catch(w){throw console.error("Error fetching FilteredExercises:",w),w}}return{fetchMuscles:i,fetchExercise:o,fetchFilters:s,fetchExerciseById:a,fetchQuote:l,fetchFilteredExercises:u,totalPages:e,totalWorkoutPages:n,setTotalWorkoutPages:r,setTotalPages:t}}let el;const X_=new Uint8Array(16);function Z_(){if(!el&&(el=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!el))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return el(X_)}const et=[];for(let e=0;e<256;++e)et.push((e+256).toString(16).slice(1));function J_(e,t=0){return et[e[t+0]]+et[e[t+1]]+et[e[t+2]]+et[e[t+3]]+"-"+et[e[t+4]]+et[e[t+5]]+"-"+et[e[t+6]]+et[e[t+7]]+"-"+et[e[t+8]]+et[e[t+9]]+"-"+et[e[t+10]]+et[e[t+11]]+et[e[t+12]]+et[e[t+13]]+et[e[t+14]]+et[e[t+15]]}const e7=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),V1={randomUUID:e7};function tp(e,t,n){if(V1.randomUUID&&!t&&!e)return V1.randomUUID();e=e||{};const r=e.random||(e.rng||Z_)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return J_(r)}const Fo="Montserrat, sans-serif",Mr="Open Sans, sans-serif",bc="DM Sans, sans-serif",t7=C.p`
  text-align: center;
  font-family: sans-serif;
  font-family: ${Mr};
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
`;function n7(){return d.jsx(t7,{children:"Sorry, but we don't have anything for you with such filter. Please try another search"})}function r7(e){return _e({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z"}}]})(e)}const i7=C.ul`
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
`,o7=C.li`
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
`,s7=C.div`
  display: flex;
  align-items: center;
`,a7=C.p`
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
`,l7=C.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: DM Sans, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,u7=C(g5)`
  margin-left: 2px;
  max-width: 18px;
  max-height: 18px;
  color: ${e=>e.theme.colors.starColor};
`,Y2=C(r7)`
  max-width: 16px;
  max-height: 16px;
  color: ${e=>e.theme.colors.mainTextColor};
  transition: 0.2s linear;
`,c7=C.p`
  margin-left: auto;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-right: 0.8rem;

  &:hover {
    ${Y2} {
      color: ${e=>e.theme.colors.starColor};
      margin-right: -0.8rem;
    }
  }
`,f7=C.div`
  display: flex;
  margin-top: 25px;
  align-items: center;

  @media (min-width: 375px) and (max-width: 767px) {
    margin-top: 15px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    margin-top: 15px;
  }
`,d7=C.h3`
  margin-left: 16px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${bc};

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
`,p7=C.div`
  display: flex;
  width: 312px;

  @media (max-width: 374px) {
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: 100%;
  }
`,h7=C.ul`
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
`,_f=C.li`
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
`,$f=C.p`
  color: ${e=>e.theme.colors.secondaryBlackTextColorLowOp};
  font-family: ${bc};
`,Of=C.p`
  color: ${e=>e.theme.colors.mainTextColor};
  margin-left: 4px;
  font-family: ${bc};

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
`,m7=C.div`
  width: 3.4rem;
  height: 3.4rem;
  padding: 0.6rem;
  background-color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,g7=C(s5)`
  color: ${e=>e.theme.colors.mainBgColor};
  width: 100%;
  height: 100%;
`;function y7({workoutCards:e,handleWorkoutCard:t}){return d.jsx(d.Fragment,{children:e.length===0?d.jsx(n7,{}):d.jsx(i7,{children:e==null?void 0:e.map(({_id:n,rating:r,name:i,burnedCalories:o,time:s,bodyPart:a,target:l})=>d.jsx(o7,{onClick:()=>t(n),children:d.jsxs("div",{children:[d.jsxs(s7,{children:[d.jsx(a7,{children:"Workout"}),d.jsx(l7,{children:Math.round(r*10)/10}),d.jsx(u7,{}),d.jsxs(c7,{children:["Start ",d.jsx(Y2,{})]})]}),d.jsxs(f7,{children:[d.jsx(m7,{children:d.jsx(g7,{})}),d.jsx(d7,{children:i})]}),d.jsx(p7,{children:d.jsxs(h7,{children:[d.jsxs(_f,{children:[d.jsx($f,{children:"Burned calories:"}),d.jsxs(Of,{children:[o," / ",s," min"]})]}),d.jsxs(_f,{children:[d.jsx($f,{children:"Body part:"}),d.jsx(Of,{children:a})]}),d.jsxs(_f,{children:[d.jsx($f,{children:"Target:"}),d.jsx(Of,{children:l})]})]})})]})},n))})})}const G1=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
`,v7=C.ul`
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
`,x7=C.li`
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
`,w7=C.img`
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
`,S7=C.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  color: ${e=>e.theme.colors.mainBgColor};
  font-family: sans-serif;
`,b7=C.h3`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  color: ${e=>e.theme.colors.initialCardTextColor};
  font-family: ${Fo};

  &::first-letter {
    text-transform: uppercase;
  }
`,E7=C.p`
  text-align: center;
  color: ${e=>e.theme.colors.initialCardTextColor};
`,C7=C.div`
  display: flex;
  gap: 8px;
`,T7=C.button`
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
`;function k7({totalPages:e,activePage:t,handlePageClick:n}){return e>1&&d.jsx(C7,{children:Array.from({length:e},(r,i)=>d.jsx(T7,{onClick:()=>n(i+1),$active:i+1===t,children:i+1},i+1))})}const _7=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 46px;
`,$7=C.button`
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
`;function O7({totalWorkoutPages:e,workoutActivePage:t,handleWorkoutPageClick:n}){const i=Math.min(7,e),s=(()=>{const a=Math.floor(3.5),l=Math.max(1,t-a);return Math.min(e-i+1,l)})();return e>1&&d.jsx(_7,{children:Array.from({length:i},(a,l)=>d.jsx($7,{onClick:()=>n(s+l),$active:s+l===t,children:s+l},s+l))})}function j7({muscles:e,exercise:t,handleExerciseCard:n,workoutCards:r,handleWorkoutCard:i,totalPages:o,activePage:s,handlePageClick:a,handleWorkoutPageClick:l,totalWorkoutPages:u,workoutActivePage:c}){return t?d.jsxs(G1,{children:[d.jsx(v7,{children:e.map(f=>d.jsx(x7,{id:tp(),onClick:()=>n(f),children:d.jsxs("div",{children:[d.jsx(w7,{src:f.imgURL,alt:`${e}-${f.name}`,loading:"lazy"}),d.jsxs(S7,{children:[d.jsx(b7,{children:f.name}),d.jsx(E7,{children:f.filter})]})]})},tp()))}),d.jsx(k7,{totalPages:o,activePage:s,handlePageClick:a})]}):d.jsxs(G1,{children:[d.jsx(y7,{workoutCards:r,handleWorkoutCard:i}),r.length>0&&d.jsx(O7,{workoutActivePage:c,handleWorkoutPageClick:l,totalWorkoutPages:u})]})}const P7=C.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 180px;
  height: 100%;
`;function R7({muscles:e,exercise:t,handleExerciseCard:n,workoutCards:r,handleWorkoutCard:i,totalPages:o,activePage:s,handlePageClick:a,handleWorkoutPageClick:l,totalWorkoutPages:u,workoutActivePage:c}){return d.jsx(P7,{children:d.jsx(j7,{muscles:e,exercise:t,handleExerciseCard:n,workoutCards:r,handleWorkoutCard:i,totalPages:o,activePage:s,handlePageClick:a,handleWorkoutPageClick:l,totalWorkoutPages:u,workoutActivePage:c})})}const A7=C.li`
  text-decoration: none;
  font-size: 16px;
  padding-bottom: 4px;
  cursor: pointer;
  transition: 0.3s linear;
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${Mr};

  &:hover,
  &:focus {
    border-bottom: 3px solid
      ${e=>e.theme.colors.secondaryBlackTextColorLowOp};
  }

  ${e=>(e==null?void 0:e.$active)&&ma`
      border-bottom: 3px solid ${e.theme.colors.mainTextColor};
    `}
`;function M7({categories:e,setActiveCategory:t,activeCategory:n,setCatInfo:r,setSearchQuery:i,setParams:o,setActivePage:s,setWorkoutActivePage:a,setTotalWorkoutPages:l,setTotalPages:u,setExercise:c}){const f=p=>{t(p),r(!1),i(""),o(""),s(1),a(1),c(!0),p!==n&&(l(1),u(1))};return e==null?void 0:e.map(p=>d.jsx(A7,{id:p,onClick:()=>f(p),$active:n===p?n:"",children:p},tp()))}const I7=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,F7=C.div`
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
`,L7=C.h2`
  display: flex;
  gap: 8px;
  font-family: ${Mr};
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
`,N7=C.span`
  display: flex;
  width: max-content;
  gap: 8px;
  color: ${e=>e.theme.colors.secondaryBlackTextColorLowOp};
  font-size: 24px;
  font-family: ${Mr};
`,z7=C.div`
  font-size: 28px;
  color: ${e=>e.theme.colors.mainTextColor};

  @media (min-width: 768px) {
    font-size: 44px;
  }
`,D7=C.div`
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
`,B7=C.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`,U7=C.button`
  position: absolute;
  top: 30%;
  right: 3%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    right: 15%;
  }
`,W7=C.input`
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
`,H7=C(v5)`
  color: ${e=>e.theme.colors.mainTextColor};
`,V7=C.ul`
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
`;function G7({categories:e,activeCategory:t,setActiveCategory:n,activeCard:r,catInfo:i,setCatInfo:o,setSearchQuery:s,handleSearchBar:a,setParams:l,setActivePage:u,setWorkoutActivePage:c,setTotalWorkoutPages:f,setTotalPages:p,setExercise:y}){return d.jsx(I7,{children:d.jsxs(F7,{children:[d.jsxs(L7,{children:["Exercises",i&&d.jsxs(N7,{children:[d.jsx(z7,{children:"/"}),r]})]}),d.jsxs(D7,{children:[i&&d.jsxs(B7,{children:[d.jsx(W7,{name:"search",type:"text",placeholder:"Search",onChange:v=>a(v.target.value)}),d.jsx(U7,{type:"button",children:d.jsx(H7,{})})]}),d.jsx(V7,{children:d.jsx(M7,{categories:e,setActiveCategory:n,activeCategory:t,setCatInfo:o,setSearchQuery:s,setParams:l,setActivePage:u,setWorkoutActivePage:c,setTotalWorkoutPages:f,setTotalPages:p,setExercise:y})})]})]})})}const K7=C.aside`
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
`,q7=C.div`
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
`,Q7=C.div`
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
`;C.div`
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
`;const Y7=C.div`
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
`,X7=C.div`
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
`,Z7=C.svg`
  width: 100%;
  height: 100%;
`,J7=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`,e$=C.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`,t$=C.h3`
  color: ${e=>e.theme.colors.mainBgColor};
  font-family: ${Mr};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,n$=C.svg`
  width: 20px;
  height: 20px;
  fill: ${e=>e.theme.colors.mainBgColor};

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,r$=C.p`
  color: ${e=>e.theme.colors.secondaryWhiteTextColorLowOp};
  font-family: ${Fo};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 2px;
  }
`,i$=C.span`
  color: ${e=>e.theme.colors.mainBgColor};
  font-family: ${Fo};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,o$=C.img`
  border-radius: 20px;
  width: 100%;
`,s$=C.div`
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.mainTextColor};
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${e=>e.theme.colors.mainBgColor};
`,a$=C.svg`
  width: 100%;
  height: 100%;
`,l$=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 20px;
  }
`,u$=C.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,c$=C.h3`
  font-style: normal;
  font-weight: 500;
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${Fo};
  font-size: 20px;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,f$=C.span`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${Mr};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,d$=C.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${bc};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;

  @media (min-width: 1440px) {
    overflow: unset;
    text-overflow: unset;
    display: unset;
    -webkit-box-orient: unset;
    -webkit-line-clamp: unset;
  }
`;function p$(){const[e,t]=b.useState(""),[n,r]=b.useState(""),{fetchQuote:i}=Q2();return b.useEffect(()=>{function o(){const u=new Date,c=u.getFullYear(),f=(u.getMonth()+1).toString().padStart(2,"0");return`${u.getDate().toString().padStart(2,"0")}/${f}/${c}`}async function s(){try{const{quote:u,author:c}=await i();t(u),r(c);const f=o();return localStorage.setItem("today",f),localStorage.setItem("quote",u),localStorage.setItem("author",c),{quote:u,author:c}}catch(u){console.error("Error fetching new quote:",u.message)}}const a=localStorage.getItem("today"),l=o();if(!a||a!==l)s();else{const u=localStorage.getItem("quote"),c=localStorage.getItem("author");t(u||""),r(c||"")}},[]),d.jsxs(K7,{children:[d.jsxs(q7,{children:[d.jsx(X7,{children:d.jsx(Z7,{"aria-label":"running icon",children:d.jsx("use",{href:"/images/icons.svg#icon-running"})})}),d.jsxs(J7,{children:[d.jsxs(e$,{children:[d.jsx(t$,{children:"Quote of the day"}),d.jsx(n$,{"aria-label":"quotes-icon",children:d.jsx("use",{href:"/images/icons.svg#icon-quotes"})})]}),d.jsx(r$,{children:e}),d.jsx(i$,{children:n})]})]}),d.jsx(Q7,{children:d.jsx(o$,{src:"/images/quote.jpg",alt:"Personal Trainer",width:"335",height:"242",loading:"lazy"})}),d.jsxs(Y7,{children:[d.jsx(s$,{children:d.jsx(a$,{"aria-label":"dumbell-icon",children:d.jsx("use",{href:"/images/icons.svg#icon-dumbbell"})})}),d.jsxs(l$,{children:[d.jsxs(u$,{children:[d.jsx(c$,{children:"110 min"}),d.jsx(f$,{children:"Daily norm of sports"})]}),d.jsx(d$,{children:"The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic physical activity throughout the week for adults aged 18-64. However, what happens if we adjust that number to 110 minutes every day? While it might seem like a high number to hit, dedicating 110 minutes daily to sporting activities may offer unparalleled benefits to physical health, mental well-being, and overall quality of life."})]})]})]})}const h$=C.div`
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
`,m$=C.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`,g$=C(Ox)`
  color: ${e=>(e==null?void 0:e.value)!==0?e.theme.colors.starColor:e.theme.colors.mainTextColorRev};
  font-size: 1.6rem;
`;C(Ox)`
  color: ${e=>(e==null?void 0:e.value)!==0?e.theme.colors.starColor:e.theme.colors.mainTextColorRev};
  font-size: 1.6rem;
`;const y$=C(x5)`
  color: ${e=>(e==null?void 0:e.value)!==0?e.theme.colors.starColor:e.theme.colors.mainTextColorRev};
  font-size: 1.6rem;
`;function v$({value:e,full:t}){return d.jsx(d.Fragment,{children:t?d.jsx(g$,{value:e}):d.jsx(y$,{value:e})})}const x$=C.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.1rem;
`,w$=C.p`
  margin-left: 0.7rem;
  color: ${e=>e.theme.colors.mainTextColorRev};
  font-size: 1.6rem;
  font-family: ${Fo};
  font-weight: 600;
  line-height: 1.25;
`,S$=C.div`
  display: flex;
  align-items: center;
  gap: 2px;
  width: 100%;
`;X2.propTypes={maxRating:ki.number.isRequired,color:ki.string,size:ki.number,messages:ki.array,defaultRating:ki.number,onSetTextStarsRate:ki.func};function X2({maxRating:e,rating:t,value:n}){return d.jsx("li",{children:d.jsx(S$,{children:d.jsxs(x$,{children:[Array.from({length:e},(r,i)=>d.jsx(v$,{value:n,full:t>=i+1},crypto.randomUUID())),d.jsx(w$,{children:t})]})})})}const b$=C.div`
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
`,E$=C.div`
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
`,C$=C(yh)`
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
`,T$=C.img`
  width: 100%;
  height: 100%;
`,k$=C.div`
  height: 258px;
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 270px;
    height: 260px;
  }
`,_$=C.div`
  @media (min-width: 768px) {
    width: 338px;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1440px) {
    width: 342px;
  }
`;C.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  column-gap: 8px;
  row-gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;const $$=C.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  font-family: ${Mr};

  @media (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1.33;
  }
`,O$=C.ul`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  column-gap: 2px;
`,j$=C.ul`
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
`,is=C.p`
  margin-bottom: 4px;
  color: ${e=>e.theme.colors.secondaryWhiteTextColorLowOp};
  font-size: 12px;
  line-height: 1.5;
  font-family: ${Mr};
`,os=C.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.286;
  font-family: ${Fo};
`,P$=C.p`
  color: ${e=>e.theme.colors.secondaryWhiteTextColorLowOp};
  font-size: 14px;
  line-height: 1.286;
`;function R$({modalWorkoutCards:e,modalCard:t,handleBackdrop:n}){function r(s){return typeof s!="string"?s:s.split(" ").map(u=>`${u.charAt(0).toUpperCase()}${u.slice(1)}`).join(" ")}function i(s){return s%1===0?Math.floor(s):s}function o(s){s.key==="Escape"&&n()}return b.useEffect(()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}),[]),e.map(({_id:s,gifUrl:a,name:l,rating:u,bodyPart:c,equipment:f,popularity:p,burnedCalories:y,time:v,description:m})=>d.jsx(b$,{$modalCard:t,children:d.jsxs(E$,{children:[d.jsx(C$,{onClick:n}),d.jsx(k$,{children:d.jsx(T$,{src:a,alt:l})}),d.jsx(_$,{children:d.jsxs("div",{children:[d.jsx($$,{children:r(l)}),d.jsx(O$,{children:d.jsx(X2,{maxRating:5,rating:u!==void 0&&i(u.toFixed(1)),value:u!==void 0&&i(u.toFixed(1))})}),d.jsxs(j$,{children:[d.jsxs("li",{children:[d.jsx(is,{children:"Body Part"}),d.jsx(os,{children:r(c)})]}),d.jsxs("li",{children:[d.jsx(is,{children:"Equipment"}),d.jsx(os,{children:r(f)})]}),d.jsxs("li",{children:[d.jsx(is,{children:"Rating"}),d.jsx(os,{children:i(u.toFixed(1))})]}),d.jsxs("li",{children:[d.jsx(is,{children:"Popular"}),d.jsx(os,{children:p})]}),d.jsxs("li",{children:[d.jsx(is,{children:"Burned Calories"}),d.jsxs(os,{children:[y," / ",v," min"]})]})]}),d.jsx(P$,{children:m})]})})]})},s))}function A$(){const{fetchFilters:e,fetchMuscles:t,fetchFilteredExercises:n,fetchExerciseById:r,totalPages:i,totalWorkoutPages:o,setTotalPages:s,setTotalWorkoutPages:a}=Q2(),[l,u]=b.useState([]),[c,f]=b.useState([]),[p,y]=b.useState("Body parts");b.useState(null),b.useState(1);const[v,m]=b.useState(1),[E,g]=b.useState(1),[h,x]=b.useState(12),[w,k]=b.useState(""),[T,S]=b.useState(!0),[O,j]=b.useState(!1),[$,A]=b.useState(!1),[Q,D]=b.useState([]),[X,G]=b.useState([]),[J,te]=b.useState(""),[M,I]=b.useState(""),[W,ee]=b.useState(""),[Y,Pe]=b.useState(""),[ue,se]=b.useState("");b.useEffect(()=>{async function H(){try{const Z=await e(v,h),we=[...new Set(Z.results.map(({filter:yt})=>yt))];u(we)}catch(Z){console.log("Error fetching filters:",Z)}}H()},[]),b.useEffect(()=>{async function H(){try{const Z=await t(p,v,h);f(Z),S(!0)}catch(Z){console.error("Error fetching data:",Z.message)}}H()},[p,v]),b.useEffect(()=>{async function H(){try{const Z=await n({...ue},Y,E,h);D(Z)}catch(Z){console.error("Error fetching data:",Z.message)}}H()},[Y,ue,E]);async function he(H){try{const Z=await r(H);return G(we=>[...we,Z]),Z}catch(Z){console.error("Error fetching data:",Z.message)}}function de(H){const Z=H.name;let we={};switch(H.filter){case"Body parts":te(Z),we={bodypart:Z};break;case"Equipment":I(Z),we={equipment:Z};break;case"Muscles":ee(Z),we={muscles:Z};break;default:console.log("Unknown filter:",H.filter);break}se(we),S(Ut=>!Ut),j(Ut=>!Ut);const yt=`${Z[0].toUpperCase()}${Z.slice(1)}`;k(yt)}function xe(H){he(H),A(Z=>!Z)}function me(){A(H=>!H),G([])}function Je(H){Pe(H)}function K(H){m(H)}function z(H){g(H)}return d.jsxs("div",{children:[d.jsx(G7,{categories:l,setActiveCategory:y,activeCategory:p,activeCard:w,handleExerciseCard:de,catInfo:O,setCatInfo:j,value:Y,handleSearchBar:Je,setSearchQuery:Pe,setParams:se,setActivePage:m,setWorkoutActivePage:g,setTotalWorkoutPages:a,setTotalPages:s,setExercise:S}),d.jsxs(h$,{children:[d.jsx(p$,{}),d.jsx(m$,{children:d.jsx(R7,{muscles:c,exercise:T,handleExerciseCard:de,workoutCards:Q,handleWorkoutCard:xe,activePage:v,handlePageClick:K,handleWorkoutPageClick:z,totalPages:i,totalWorkoutPages:o,workoutActivePage:E})}),$&&d.jsx(R$,{modalWorkoutCards:X,modalCard:$,handleBackdrop:me})]})]})}const Z2=C($5)`
  font-size: 3.6rem;
  padding: 1rem;
  color: ${e=>e.theme.colors.mainBgColor};
  transition: all 0.3s linear;
  cursor: pointer;

  @media (min-width: 1440px) {
    font-size: 4.4rem;
    padding: 1rem;
  }
`,M$=C.button`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  border-radius: 2rem;
  background-color: ${e=>e.theme.colors.scrollUpColor};
  font-size: 0px;
  border: 1px solid ${e=>e.theme.colors.secondaryWhiteTextColorLowOp};
  transition: all 0.3s linear;
  opacity: ${e=>e!=null&&e.$visible?1:0};
  pointer-events: ${e=>e!=null&&e.$visible?"auto":"none"};
  z-index: 250;

  @media (min-width: 1440px) {
    bottom: 2.4rem;
    right: 3.2rem;
    border-radius: 2.5rem;
  }

  &:hover {
    border-color: ${e=>e.theme.colors.greenColor};
    background-color: ${e=>e.theme.colors.footerBgColor};
  }

  &:hover {
    ${Z2} {
      color: ${e=>e.theme.colors.greenColor};
    }
  }
`;function I$(){const[e,t]=b.useState(!1);function n(){t(window.scrollY>300)}function r(){window.scrollTo({top:0,behavior:"smooth"})}b.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]);const i=N.useRef({x:0,y:0}),o=N.useRef(null),s=N.useRef(null),a=l=>{i.current={x:l.clientX,y:l.clientY},o.current!=null&&o.current.update()};return d.jsx(js,{title:"Up!",placement:"top",arrow:!0,PopperProps:{popperRef:o,anchorEl:{getBoundingClientRect:()=>new DOMRect(i.current.x,s.current.getBoundingClientRect().y,0,0)}},children:d.jsx(M$,{type:"button",onClick:r,$visible:e,onMouseMove:a,ref:s,children:d.jsx(Z2,{})})})}const F$=C.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;

  @media (min-width: 1440px) {
    gap: 2.4rem;
    flex-direction: row;
    justify-content: space-between;
  }
`,L$=C.div`
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
`,N$=C.div`
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
`,z$=C.div`
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
`,D$=C.div`
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
`,tl=C.img`
  width: 100%;
  height: 100%;
`;function B$(){return d.jsxs(F$,{children:[d.jsx(L$,{children:d.jsx(tl,{src:"images/issa.png"})}),d.jsx(N$,{children:d.jsx(tl,{src:"images/rep.png"})}),d.jsx(z$,{children:d.jsx(tl,{src:"images/golds.png"})}),d.jsx(D$,{children:d.jsx(tl,{src:"images/ufc.png"})})]})}function yi(e){this._maxSize=e,this.clear()}yi.prototype.clear=function(){this._size=0,this._values=Object.create(null)};yi.prototype.get=function(e){return this._values[e]};yi.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var U$=/[^.^\]^[]+|(?=\[\]|\.\.)/g,J2=/^\d+$/,W$=/^\d/,H$=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,V$=/^\s*(['"]?)(.*?)(\1)\s*$/,Yh=512,K1=new yi(Yh),q1=new yi(Yh),Q1=new yi(Yh),ri={Cache:yi,split:np,normalizePath:jf,setter:function(e){var t=jf(e);return q1.get(e)||q1.set(e,function(r,i){for(var o=0,s=t.length,a=r;o<s-1;){var l=t[o];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[t[o++]]}a[t[o]]=i})},getter:function(e,t){var n=jf(e);return Q1.get(e)||Q1.set(e,function(i){for(var o=0,s=n.length;o<s;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(Xh(n)||J2.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){G$(Array.isArray(e)?e:np(e),t,n)}};function jf(e){return K1.get(e)||K1.set(e,np(e).map(function(t){return t.replace(V$,"$2")}))}function np(e){return e.match(U$)||[""]}function G$(e,t,n){var r=e.length,i,o,s,a;for(o=0;o<r;o++)i=e[o],i&&(Q$(i)&&(i='"'+i+'"'),a=Xh(i),s=!a&&/^\d+$/.test(i),t.call(n,i,a,s,o,e))}function Xh(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function K$(e){return e.match(W$)&&!e.match(J2)}function q$(e){return H$.test(e)}function Q$(e){return!Xh(e)&&(K$(e)||q$(e))}const Y$=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ec=e=>e.match(Y$)||[],Cc=e=>e[0].toUpperCase()+e.slice(1),Zh=(e,t)=>Ec(e).join(t).toLowerCase(),ew=e=>Ec(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),X$=e=>Cc(ew(e)),Z$=e=>Zh(e,"_"),J$=e=>Zh(e,"-"),eO=e=>Cc(Zh(e," ")),tO=e=>Ec(e).map(Cc).join(" ");var Pf={words:Ec,upperFirst:Cc,camelCase:ew,pascalCase:X$,snakeCase:Z$,kebabCase:J$,sentenceCase:eO,titleCase:tO},Jh={exports:{}};Jh.exports=function(e){return tw(nO(e),e)};Jh.exports.array=tw;function tw(e,t){var n=e.length,r=new Array(n),i={},o=n,s=rO(t),a=iO(e);for(t.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||l(e[o],o,new Set);return r;function l(u,c,f){if(f.has(u)){var p;try{p=", node was:"+JSON.stringify(u)}catch{p=""}throw new Error("Cyclic dependency"+p)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var y=s.get(u)||new Set;if(y=Array.from(y),c=y.length){f.add(u);do{var v=y[--c];l(v,a.get(v),f)}while(c);f.delete(u)}r[--n]=u}}}function nO(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function rO(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function iO(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var oO=Jh.exports;const sO=Oo(oO),aO=Object.prototype.toString,lO=Error.prototype.toString,uO=RegExp.prototype.toString,cO=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",fO=/^Symbol\((.*)\)(.*)$/;function dO(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Y1(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return dO(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return cO.call(e).replace(fO,"Symbol($1)");const r=aO.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+lO.call(e)+"]":r==="RegExp"?uO.call(e):null}function kr(e,t){let n=Y1(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=Y1(this[r],t);return o!==null?o:i},2)}function nw(e){return e==null?[]:[].concat(e)}let rw,pO=/\$\{\s*(\w+)\s*\}/g;rw=Symbol.toStringTag;class xt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(pO,(i,o)=>kr(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,o){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[rw]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],nw(t).forEach(s=>{if(xt.isError(s)){this.errors.push(...s.errors);const a=s.inner.length?s.inner:[s];this.inner.push(...a)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!o&&Error.captureStackTrace&&Error.captureStackTrace(this,xt)}}let Cn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${kr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${kr(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${kr(n,!0)}\``+i}},cn={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},hO={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},rp={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},mO={isValue:"${path} field must be ${value}"},ip={noUnknown:"${path} field has unspecified keys: ${unknown}"},gO={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},yO={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${kr(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${kr(n,!0)}\``}return xt.formatError(Cn.notType,e)}};Object.assign(Object.create(null),{mixed:Cn,string:cn,number:hO,date:rp,object:ip,array:gO,boolean:mO,tuple:yO});const em=e=>e&&e.__isYupSchema__;class xu{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,s=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new xu(t,(a,l)=>{var u;let c=s(...a)?i:o;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!em(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const nl={context:"$",value:"."};class vi{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===nl.context,this.isValue=this.key[0]===nl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?nl.context:this.isValue?nl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&ri.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}vi.prototype.__isYupRef=!0;const Xr=e=>e==null;function Mi(e){function t({value:n,path:r="",options:i,originalValue:o,schema:s},a,l){const{name:u,test:c,params:f,message:p,skipAbsent:y}=e;let{parent:v,context:m,abortEarly:E=s.spec.abortEarly,disableStackTrace:g=s.spec.disableStackTrace}=i;function h(A){return vi.isRef(A)?A.getValue(n,v,m):A}function x(A={}){var Q;const D=Object.assign({value:n,originalValue:o,label:s.spec.label,path:A.path||r,spec:s.spec},f,A.params);for(const G of Object.keys(D))D[G]=h(D[G]);const X=new xt(xt.formatError(A.message||p,D),n,D.path,A.type||u,(Q=A.disableStackTrace)!=null?Q:g);return X.params=D,X}const w=E?a:l;let k={path:r,parent:v,type:u,from:i.from,createError:x,resolve:h,options:i,originalValue:o,schema:s};const T=A=>{xt.isError(A)?w(A):A?l(null):w(x())},S=A=>{xt.isError(A)?w(A):a(A)};if(y&&Xr(n))return T(!0);let j;try{var $;if(j=c.call(k,n,k),typeof(($=j)==null?void 0:$.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${k.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(j).then(T,S)}}catch(A){S(A);return}T(j)}return t.OPTIONS=e,t}function vO(e,t,n,r=n){let i,o,s;return t?(ri.forEach(t,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;e=e.resolve({context:r,parent:i,value:n});let f=e.type==="tuple",p=u?parseInt(c,10):0;if(e.innerType||f){if(f&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(n&&p>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[p],e=f?e.spec.types[p]:e.innerType}if(!u){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);i=n,n=n&&n[c],e=e.fields[c]}o=c,s=l?"["+a+"]":"."+a}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class wu extends Set{describe(){const t=[];for(const n of this.values())t.push(vi.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new wu(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function Xi(e,t=new Map){if(em(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=Xi(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,Xi(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(Xi(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=Xi(i,t)}else throw Error(`Unable to clone ${e}`);return n}class Fn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new wu,this._blacklist=new wu,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Cn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Xi(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(s=>{o.test(s.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,o;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(o=t.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&Xr(o))return o;let s=kr(t),a=kr(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${s} 
`+(a!==s?`result of cast: ${a}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:o,originalValue:s=t,strict:a=this.spec.strict}=n,l=t;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:o,value:l,originalValue:s,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:o,value:l,originalValue:s,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:s,originalValue:a,path:l,options:u}=t,c=m=>{i||(i=!0,n(m,s))},f=m=>{i||(i=!0,r(m,s))},p=o.length,y=[];if(!p)return f([]);let v={value:s,originalValue:a,path:l,options:u,schema:this};for(let m=0;m<o.length;m++){const E=o[m];E(v,c,function(h){h&&(Array.isArray(h)?y.push(...h):y.push(h)),--p<=0&&f(y)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:s}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},s,{strict:!0,parent:r,value:u,originalValue:o[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+t});return(f,p,y)=>this.resolve(c)._validate(u,c,p,y)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((s,a)=>i._validate(t,n,(l,u)=>{xt.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new xt(l,u,void 0,void 0,o)):s(u)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o,s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(a,l)=>{throw xt.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new xt(a,t,void 0,void 0,s);o=l}),o}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(xt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(xt.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):Xi(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Mi({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Mi({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=Cn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Cn.notNull){return this.nullability(!1,t)}required(t=Cn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Cn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Mi(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(s=>!(s.OPTIONS.name===n.name&&(o||s.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=nw(t).map(o=>new vi(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new xu(i,n):xu.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Mi({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Cn.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Mi({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,s=o.resolveAll(this.resolve);return s.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:s}})}}),r}notOneOf(t,n=Cn.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Mi({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,s=o.resolveAll(this.resolve);return s.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:s}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:s}=n.spec;return{meta:i,label:r,optional:o,nullable:s,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(f=>f.name===l.name)===u)}}}Fn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Fn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:s}=vO(this,t,n,r.context);return s[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])Fn.prototype[e]=Fn.prototype.oneOf;for(const e of["not","nope"])Fn.prototype[e]=Fn.prototype.notOneOf;let xO=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,wO=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,SO=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,bO=e=>Xr(e)||e===e.trim(),EO={}.toString();function op(){return new iw}class iw extends Fn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===EO?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||Cn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=cn.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=cn.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=cn.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||cn.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&r||s.search(t)!==-1})}email(t=cn.email){return this.matches(xO,{name:"email",message:t,excludeEmptyString:!0})}url(t=cn.url){return this.matches(wO,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=cn.uuid){return this.matches(SO,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=cn.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:bO})}lowercase(t=cn.lowercase){return this.transform(n=>Xr(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Xr(n)||n===n.toLowerCase()})}uppercase(t=cn.uppercase){return this.transform(n=>Xr(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Xr(n)||n===n.toUpperCase()})}}op.prototype=iw.prototype;const CO=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Dn(e,t=0){return Number(e)||t}function TO(e){const t=CO.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:Dn(t[1]),month:Dn(t[2],1)-1,day:Dn(t[3],1),hour:Dn(t[4]),minute:Dn(t[5]),second:Dn(t[6]),millisecond:t[7]?Dn(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:Dn(t[10]),minuteOffset:Dn(t[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let kO=new Date(""),_O=e=>Object.prototype.toString.call(e)==="[object Date]";class Tc extends Fn{constructor(){super({type:"date",check(t){return _O(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=TO(t),isNaN(t)?Tc.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(vi.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=rp.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=rp.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Tc.INVALID_DATE=kO;Tc.prototype;function $O(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([s,a])=>`${s}-${a}`));function o(s,a){let l=ri.split(s)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const s of Object.keys(e)){let a=e[s];r.add(s),vi.isRef(a)&&a.isSibling?o(a.path,s):em(a)&&"deps"in a&&a.deps.forEach(l=>o(l,s))}return sO.array(Array.from(r),n).reverse()}function X1(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function ow(e){return(t,n)=>X1(e,t)-X1(e,n)}const OO=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Nl(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Nl(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Nl(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Nl)}):"optional"in e?e.optional():e}const jO=(e,t)=>{const n=[...ri.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=ri.getter(ri.join(n),!0)(e);return!!(i&&r in i)};let Z1=e=>Object.prototype.toString.call(e)==="[object Object]";function PO(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const RO=ow([]);function sw(e){return new aw(e)}class aw extends Fn{constructor(t){super({type:"object",check(n){return Z1(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=RO,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let o=this.fields,s=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(f=>!this._nodes.includes(f))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const f of a){let p=o[f],y=f in i;if(p){let v,m=i[f];u.path=(n.path?`${n.path}.`:"")+f,p=p.resolve({value:m,context:n.context,parent:l});let E=p instanceof Fn?p.spec:void 0,g=E==null?void 0:E.strict;if(E!=null&&E.strip){c=c||f in i;continue}v=!n.__validating||!g?p.cast(i[f],u):i[f],v!==void 0&&(l[f]=v)}else y&&!s&&(l[f]=i[f]);(y!==f in l||l[f]!==i[f])&&(c=!0)}return c?l:i}_validate(t,n={},r,i){let{from:o=[],originalValue:s=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:s},...o],n.__validating=!0,n.originalValue=s,super._validate(t,n,r,(l,u)=>{if(!a||!Z1(u)){i(l,u);return}s=s||u;let c=[];for(let f of this._nodes){let p=this.fields[f];!p||vi.isRef(p)||c.push(p.asNestedTest({options:n,key:f,parent:u,parentPath:n.path,originalParent:s}))}this.runTests({tests:c,value:u,originalValue:s,options:n},r,f=>{i(f.sort(this._sortErrors).concat(l),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const s=r[i];r[i]=s===void 0?o:s}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const o=this.fields[r];let s=t;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[r]})),n[r]=o&&"getDefault"in o?o.getDefault(s):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=$O(t,n),r._sortErrors=ow(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Nl(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=ri.getter(t,!0);return this.transform(o=>{if(!o)return o;let s=o;return jO(o,t)&&(s=Object.assign({},o),r||delete s[t],s[n]=i(o)),s})}json(){return this.transform(OO)}noUnknown(t=!0,n=ip.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=PO(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=ip.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(Pf.camelCase)}snakeCase(){return this.transformKeys(Pf.snakeCase)}constantCase(){return this.transformKeys(t=>Pf.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[o,s]of Object.entries(n.fields)){var i;let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[o]})),r.fields[o]=s.describe(a)}return r}}sw.prototype=aw.prototype;var AO=function(t){return MO(t)&&!IO(t)};function MO(e){return!!e&&typeof e=="object"}function IO(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||NO(e)}var FO=typeof Symbol=="function"&&Symbol.for,LO=FO?Symbol.for("react.element"):60103;function NO(e){return e.$$typeof===LO}function zO(e){return Array.isArray(e)?[]:{}}function Su(e,t){return t.clone!==!1&&t.isMergeableObject(e)?sa(zO(e),e,t):e}function DO(e,t,n){return e.concat(t).map(function(r){return Su(r,n)})}function BO(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=Su(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=Su(t[i],n):r[i]=sa(e[i],t[i],n)}),r}function sa(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||DO,n.isMergeableObject=n.isMergeableObject||AO;var r=Array.isArray(t),i=Array.isArray(e),o=r===i;return o?r?n.arrayMerge(e,t,n):BO(e,t,n):Su(t,n)}sa.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return sa(r,i,n)},{})};var sp=sa,lw=typeof global=="object"&&global&&global.Object===Object&&global,UO=typeof self=="object"&&self&&self.Object===Object&&self,zn=lw||UO||Function("return this")(),Or=zn.Symbol,uw=Object.prototype,WO=uw.hasOwnProperty,HO=uw.toString,ss=Or?Or.toStringTag:void 0;function VO(e){var t=WO.call(e,ss),n=e[ss];try{e[ss]=void 0;var r=!0}catch{}var i=HO.call(e);return r&&(t?e[ss]=n:delete e[ss]),i}var GO=Object.prototype,KO=GO.toString;function qO(e){return KO.call(e)}var QO="[object Null]",YO="[object Undefined]",J1=Or?Or.toStringTag:void 0;function xi(e){return e==null?e===void 0?YO:QO:J1&&J1 in Object(e)?VO(e):qO(e)}function cw(e,t){return function(n){return e(t(n))}}var tm=cw(Object.getPrototypeOf,Object);function wi(e){return e!=null&&typeof e=="object"}var XO="[object Object]",ZO=Function.prototype,JO=Object.prototype,fw=ZO.toString,ej=JO.hasOwnProperty,tj=fw.call(Object);function eg(e){if(!wi(e)||xi(e)!=XO)return!1;var t=tm(e);if(t===null)return!0;var n=ej.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&fw.call(n)==tj}var tg=Array.isArray,ng=Object.keys,nj=Object.prototype.hasOwnProperty,rj=typeof Element<"u";function ap(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=tg(e),r=tg(t),i,o,s;if(n&&r){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!ap(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,c=t instanceof RegExp;if(u!=c)return!1;if(u&&c)return e.toString()==t.toString();var f=ng(e);if(o=f.length,o!==ng(t).length)return!1;for(i=o;i--!==0;)if(!nj.call(t,f[i]))return!1;if(rj&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(s=f[i],!(s==="_owner"&&e.$$typeof)&&!ap(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}var ij=function(t,n){try{return ap(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const lr=Oo(ij);function oj(){this.__data__=[],this.size=0}function dw(e,t){return e===t||e!==e&&t!==t}function kc(e,t){for(var n=e.length;n--;)if(dw(e[n][0],t))return n;return-1}var sj=Array.prototype,aj=sj.splice;function lj(e){var t=this.__data__,n=kc(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():aj.call(t,n,1),--this.size,!0}function uj(e){var t=this.__data__,n=kc(t,e);return n<0?void 0:t[n][1]}function cj(e){return kc(this.__data__,e)>-1}function fj(e,t){var n=this.__data__,r=kc(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function nr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}nr.prototype.clear=oj;nr.prototype.delete=lj;nr.prototype.get=uj;nr.prototype.has=cj;nr.prototype.set=fj;function dj(){this.__data__=new nr,this.size=0}function pj(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function hj(e){return this.__data__.get(e)}function mj(e){return this.__data__.has(e)}function Ea(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var gj="[object AsyncFunction]",yj="[object Function]",vj="[object GeneratorFunction]",xj="[object Proxy]";function pw(e){if(!Ea(e))return!1;var t=xi(e);return t==yj||t==vj||t==gj||t==xj}var Rf=zn["__core-js_shared__"],rg=function(){var e=/[^.]+$/.exec(Rf&&Rf.keys&&Rf.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function wj(e){return!!rg&&rg in e}var Sj=Function.prototype,bj=Sj.toString;function Si(e){if(e!=null){try{return bj.call(e)}catch{}try{return e+""}catch{}}return""}var Ej=/[\\^$.*+?()[\]{}|]/g,Cj=/^\[object .+?Constructor\]$/,Tj=Function.prototype,kj=Object.prototype,_j=Tj.toString,$j=kj.hasOwnProperty,Oj=RegExp("^"+_j.call($j).replace(Ej,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function jj(e){if(!Ea(e)||wj(e))return!1;var t=pw(e)?Oj:Cj;return t.test(Si(e))}function Pj(e,t){return e==null?void 0:e[t]}function bi(e,t){var n=Pj(e,t);return jj(n)?n:void 0}var aa=bi(zn,"Map"),la=bi(Object,"create");function Rj(){this.__data__=la?la(null):{},this.size=0}function Aj(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Mj="__lodash_hash_undefined__",Ij=Object.prototype,Fj=Ij.hasOwnProperty;function Lj(e){var t=this.__data__;if(la){var n=t[e];return n===Mj?void 0:n}return Fj.call(t,e)?t[e]:void 0}var Nj=Object.prototype,zj=Nj.hasOwnProperty;function Dj(e){var t=this.__data__;return la?t[e]!==void 0:zj.call(t,e)}var Bj="__lodash_hash_undefined__";function Uj(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=la&&t===void 0?Bj:t,this}function pi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pi.prototype.clear=Rj;pi.prototype.delete=Aj;pi.prototype.get=Lj;pi.prototype.has=Dj;pi.prototype.set=Uj;function Wj(){this.size=0,this.__data__={hash:new pi,map:new(aa||nr),string:new pi}}function Hj(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function _c(e,t){var n=e.__data__;return Hj(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Vj(e){var t=_c(this,e).delete(e);return this.size-=t?1:0,t}function Gj(e){return _c(this,e).get(e)}function Kj(e){return _c(this,e).has(e)}function qj(e,t){var n=_c(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Ir(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ir.prototype.clear=Wj;Ir.prototype.delete=Vj;Ir.prototype.get=Gj;Ir.prototype.has=Kj;Ir.prototype.set=qj;var Qj=200;function Yj(e,t){var n=this.__data__;if(n instanceof nr){var r=n.__data__;if(!aa||r.length<Qj-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ir(r)}return n.set(e,t),this.size=n.size,this}function Lo(e){var t=this.__data__=new nr(e);this.size=t.size}Lo.prototype.clear=dj;Lo.prototype.delete=pj;Lo.prototype.get=hj;Lo.prototype.has=mj;Lo.prototype.set=Yj;function Xj(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var ig=function(){try{var e=bi(Object,"defineProperty");return e({},"",{}),e}catch{}}();function hw(e,t,n){t=="__proto__"&&ig?ig(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Zj=Object.prototype,Jj=Zj.hasOwnProperty;function mw(e,t,n){var r=e[t];(!(Jj.call(e,t)&&dw(r,n))||n===void 0&&!(t in e))&&hw(e,t,n)}function $c(e,t,n,r){var i=!n;n||(n={});for(var o=-1,s=t.length;++o<s;){var a=t[o],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?hw(n,a,l):mw(n,a,l)}return n}function e9(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var t9="[object Arguments]";function og(e){return wi(e)&&xi(e)==t9}var gw=Object.prototype,n9=gw.hasOwnProperty,r9=gw.propertyIsEnumerable,i9=og(function(){return arguments}())?og:function(e){return wi(e)&&n9.call(e,"callee")&&!r9.call(e,"callee")},Ca=Array.isArray;function o9(){return!1}var yw=typeof At=="object"&&At&&!At.nodeType&&At,sg=yw&&typeof Mt=="object"&&Mt&&!Mt.nodeType&&Mt,s9=sg&&sg.exports===yw,ag=s9?zn.Buffer:void 0,a9=ag?ag.isBuffer:void 0,vw=a9||o9,l9=9007199254740991,u9=/^(?:0|[1-9]\d*)$/;function c9(e,t){var n=typeof e;return t=t??l9,!!t&&(n=="number"||n!="symbol"&&u9.test(e))&&e>-1&&e%1==0&&e<t}var f9=9007199254740991;function xw(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=f9}var d9="[object Arguments]",p9="[object Array]",h9="[object Boolean]",m9="[object Date]",g9="[object Error]",y9="[object Function]",v9="[object Map]",x9="[object Number]",w9="[object Object]",S9="[object RegExp]",b9="[object Set]",E9="[object String]",C9="[object WeakMap]",T9="[object ArrayBuffer]",k9="[object DataView]",_9="[object Float32Array]",$9="[object Float64Array]",O9="[object Int8Array]",j9="[object Int16Array]",P9="[object Int32Array]",R9="[object Uint8Array]",A9="[object Uint8ClampedArray]",M9="[object Uint16Array]",I9="[object Uint32Array]",Te={};Te[_9]=Te[$9]=Te[O9]=Te[j9]=Te[P9]=Te[R9]=Te[A9]=Te[M9]=Te[I9]=!0;Te[d9]=Te[p9]=Te[T9]=Te[h9]=Te[k9]=Te[m9]=Te[g9]=Te[y9]=Te[v9]=Te[x9]=Te[w9]=Te[S9]=Te[b9]=Te[E9]=Te[C9]=!1;function F9(e){return wi(e)&&xw(e.length)&&!!Te[xi(e)]}function nm(e){return function(t){return e(t)}}var ww=typeof At=="object"&&At&&!At.nodeType&&At,Ps=ww&&typeof Mt=="object"&&Mt&&!Mt.nodeType&&Mt,L9=Ps&&Ps.exports===ww,Af=L9&&lw.process,_o=function(){try{var e=Ps&&Ps.require&&Ps.require("util").types;return e||Af&&Af.binding&&Af.binding("util")}catch{}}(),lg=_o&&_o.isTypedArray,N9=lg?nm(lg):F9,z9=Object.prototype,D9=z9.hasOwnProperty;function Sw(e,t){var n=Ca(e),r=!n&&i9(e),i=!n&&!r&&vw(e),o=!n&&!r&&!i&&N9(e),s=n||r||i||o,a=s?e9(e.length,String):[],l=a.length;for(var u in e)(t||D9.call(e,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||c9(u,l)))&&a.push(u);return a}var B9=Object.prototype;function rm(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||B9;return e===n}var U9=cw(Object.keys,Object),W9=Object.prototype,H9=W9.hasOwnProperty;function V9(e){if(!rm(e))return U9(e);var t=[];for(var n in Object(e))H9.call(e,n)&&n!="constructor"&&t.push(n);return t}function bw(e){return e!=null&&xw(e.length)&&!pw(e)}function im(e){return bw(e)?Sw(e):V9(e)}function G9(e,t){return e&&$c(t,im(t),e)}function K9(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var q9=Object.prototype,Q9=q9.hasOwnProperty;function Y9(e){if(!Ea(e))return K9(e);var t=rm(e),n=[];for(var r in e)r=="constructor"&&(t||!Q9.call(e,r))||n.push(r);return n}function om(e){return bw(e)?Sw(e,!0):Y9(e)}function X9(e,t){return e&&$c(t,om(t),e)}var Ew=typeof At=="object"&&At&&!At.nodeType&&At,ug=Ew&&typeof Mt=="object"&&Mt&&!Mt.nodeType&&Mt,Z9=ug&&ug.exports===Ew,cg=Z9?zn.Buffer:void 0,fg=cg?cg.allocUnsafe:void 0;function J9(e,t){if(t)return e.slice();var n=e.length,r=fg?fg(n):new e.constructor(n);return e.copy(r),r}function Cw(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function eP(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}function Tw(){return[]}var tP=Object.prototype,nP=tP.propertyIsEnumerable,dg=Object.getOwnPropertySymbols,sm=dg?function(e){return e==null?[]:(e=Object(e),eP(dg(e),function(t){return nP.call(e,t)}))}:Tw;function rP(e,t){return $c(e,sm(e),t)}function kw(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var iP=Object.getOwnPropertySymbols,_w=iP?function(e){for(var t=[];e;)kw(t,sm(e)),e=tm(e);return t}:Tw;function oP(e,t){return $c(e,_w(e),t)}function $w(e,t,n){var r=t(e);return Ca(e)?r:kw(r,n(e))}function sP(e){return $w(e,im,sm)}function aP(e){return $w(e,om,_w)}var lp=bi(zn,"DataView"),up=bi(zn,"Promise"),cp=bi(zn,"Set"),fp=bi(zn,"WeakMap"),pg="[object Map]",lP="[object Object]",hg="[object Promise]",mg="[object Set]",gg="[object WeakMap]",yg="[object DataView]",uP=Si(lp),cP=Si(aa),fP=Si(up),dP=Si(cp),pP=Si(fp),Gr=xi;(lp&&Gr(new lp(new ArrayBuffer(1)))!=yg||aa&&Gr(new aa)!=pg||up&&Gr(up.resolve())!=hg||cp&&Gr(new cp)!=mg||fp&&Gr(new fp)!=gg)&&(Gr=function(e){var t=xi(e),n=t==lP?e.constructor:void 0,r=n?Si(n):"";if(r)switch(r){case uP:return yg;case cP:return pg;case fP:return hg;case dP:return mg;case pP:return gg}return t});const am=Gr;var hP=Object.prototype,mP=hP.hasOwnProperty;function gP(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&mP.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var vg=zn.Uint8Array;function lm(e){var t=new e.constructor(e.byteLength);return new vg(t).set(new vg(e)),t}function yP(e,t){var n=t?lm(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var vP=/\w*$/;function xP(e){var t=new e.constructor(e.source,vP.exec(e));return t.lastIndex=e.lastIndex,t}var xg=Or?Or.prototype:void 0,wg=xg?xg.valueOf:void 0;function wP(e){return wg?Object(wg.call(e)):{}}function SP(e,t){var n=t?lm(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var bP="[object Boolean]",EP="[object Date]",CP="[object Map]",TP="[object Number]",kP="[object RegExp]",_P="[object Set]",$P="[object String]",OP="[object Symbol]",jP="[object ArrayBuffer]",PP="[object DataView]",RP="[object Float32Array]",AP="[object Float64Array]",MP="[object Int8Array]",IP="[object Int16Array]",FP="[object Int32Array]",LP="[object Uint8Array]",NP="[object Uint8ClampedArray]",zP="[object Uint16Array]",DP="[object Uint32Array]";function BP(e,t,n){var r=e.constructor;switch(t){case jP:return lm(e);case bP:case EP:return new r(+e);case PP:return yP(e,n);case RP:case AP:case MP:case IP:case FP:case LP:case NP:case zP:case DP:return SP(e,n);case CP:return new r;case TP:case $P:return new r(e);case kP:return xP(e);case _P:return new r;case OP:return wP(e)}}var Sg=Object.create,UP=function(){function e(){}return function(t){if(!Ea(t))return{};if(Sg)return Sg(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function WP(e){return typeof e.constructor=="function"&&!rm(e)?UP(tm(e)):{}}var HP="[object Map]";function VP(e){return wi(e)&&am(e)==HP}var bg=_o&&_o.isMap,GP=bg?nm(bg):VP,KP="[object Set]";function qP(e){return wi(e)&&am(e)==KP}var Eg=_o&&_o.isSet,QP=Eg?nm(Eg):qP,YP=1,XP=2,ZP=4,Ow="[object Arguments]",JP="[object Array]",eR="[object Boolean]",tR="[object Date]",nR="[object Error]",jw="[object Function]",rR="[object GeneratorFunction]",iR="[object Map]",oR="[object Number]",Pw="[object Object]",sR="[object RegExp]",aR="[object Set]",lR="[object String]",uR="[object Symbol]",cR="[object WeakMap]",fR="[object ArrayBuffer]",dR="[object DataView]",pR="[object Float32Array]",hR="[object Float64Array]",mR="[object Int8Array]",gR="[object Int16Array]",yR="[object Int32Array]",vR="[object Uint8Array]",xR="[object Uint8ClampedArray]",wR="[object Uint16Array]",SR="[object Uint32Array]",Se={};Se[Ow]=Se[JP]=Se[fR]=Se[dR]=Se[eR]=Se[tR]=Se[pR]=Se[hR]=Se[mR]=Se[gR]=Se[yR]=Se[iR]=Se[oR]=Se[Pw]=Se[sR]=Se[aR]=Se[lR]=Se[uR]=Se[vR]=Se[xR]=Se[wR]=Se[SR]=!0;Se[nR]=Se[jw]=Se[cR]=!1;function Rs(e,t,n,r,i,o){var s,a=t&YP,l=t&XP,u=t&ZP;if(n&&(s=i?n(e,r,i,o):n(e)),s!==void 0)return s;if(!Ea(e))return e;var c=Ca(e);if(c){if(s=gP(e),!a)return Cw(e,s)}else{var f=am(e),p=f==jw||f==rR;if(vw(e))return J9(e,a);if(f==Pw||f==Ow||p&&!i){if(s=l||p?{}:WP(e),!a)return l?oP(e,X9(s,e)):rP(e,G9(s,e))}else{if(!Se[f])return i?e:{};s=BP(e,f,a)}}o||(o=new Lo);var y=o.get(e);if(y)return y;o.set(e,s),QP(e)?e.forEach(function(E){s.add(Rs(E,t,n,E,e,o))}):GP(e)&&e.forEach(function(E,g){s.set(g,Rs(E,t,n,g,e,o))});var v=u?l?aP:sP:l?om:im,m=c?void 0:v(e);return Xj(m||e,function(E,g){m&&(g=E,E=e[g]),mw(s,g,Rs(E,t,n,g,e,o))}),s}var bR=4;function Cg(e){return Rs(e,bR)}function Rw(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var ER="[object Symbol]";function um(e){return typeof e=="symbol"||wi(e)&&xi(e)==ER}var CR="Expected a function";function cm(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(CR);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(cm.Cache||Ir),n}cm.Cache=Ir;var TR=500;function kR(e){var t=cm(e,function(r){return n.size===TR&&n.clear(),r}),n=t.cache;return t}var _R=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$R=/\\(\\)?/g,OR=kR(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(_R,function(n,r,i,o){t.push(i?o.replace($R,"$1"):r||n)}),t});const jR=OR;var PR=1/0;function RR(e){if(typeof e=="string"||um(e))return e;var t=e+"";return t=="0"&&1/e==-PR?"-0":t}var AR=1/0,Tg=Or?Or.prototype:void 0,kg=Tg?Tg.toString:void 0;function Aw(e){if(typeof e=="string")return e;if(Ca(e))return Rw(e,Aw)+"";if(um(e))return kg?kg.call(e):"";var t=e+"";return t=="0"&&1/e==-AR?"-0":t}function MR(e){return e==null?"":Aw(e)}function Mw(e){return Ca(e)?Rw(e,RR):um(e)?[e]:Cw(jR(MR(e)))}var IR=1,FR=4;function LR(e){return Rs(e,IR|FR)}function ge(){return ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ge.apply(this,arguments)}function Iw(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function mr(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function _g(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Oc=b.createContext(void 0);Oc.displayName="FormikContext";var NR=Oc.Provider,zR=Oc.Consumer;function Fw(){var e=b.useContext(Oc);return e}var $g=function(t){return Array.isArray(t)&&t.length===0},nt=function(t){return typeof t=="function"},Ta=function(t){return t!==null&&typeof t=="object"},DR=function(t){return String(Math.floor(Number(t)))===t},Mf=function(t){return Object.prototype.toString.call(t)==="[object String]"},Lw=function(t){return b.Children.count(t)===0},If=function(t){return Ta(t)&&nt(t.then)};function Oe(e,t,n,r){r===void 0&&(r=0);for(var i=Mw(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function Mn(e,t,n){for(var r=Cg(e),i=r,o=0,s=Mw(t);o<s.length-1;o++){var a=s[o],l=Oe(e,s.slice(0,o+1));if(l&&(Ta(l)||Array.isArray(l)))i=i[a]=Cg(l);else{var u=s[o+1];i=i[a]=DR(u)&&Number(u)>=0?[]:{}}}return(o===0?e:i)[s[o]]===n?e:(n===void 0?delete i[s[o]]:i[s[o]]=n,o===0&&n===void 0&&delete r[s[o]],r)}function Nw(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],a=e[s];Ta(a)?n.get(a)||(n.set(a,!0),r[s]=Array.isArray(a)?[]:{},Nw(a,t,n,r[s])):r[s]=t}return r}function BR(e,t){switch(t.type){case"SET_VALUES":return ge({},e,{values:t.payload});case"SET_TOUCHED":return ge({},e,{touched:t.payload});case"SET_ERRORS":return lr(e.errors,t.payload)?e:ge({},e,{errors:t.payload});case"SET_STATUS":return ge({},e,{status:t.payload});case"SET_ISSUBMITTING":return ge({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return ge({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return ge({},e,{values:Mn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return ge({},e,{touched:Mn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return ge({},e,{errors:Mn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return ge({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return ge({},e,{touched:Nw(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return ge({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return ge({},e,{isSubmitting:!1});default:return e}}var Br={},rl={};function UR(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,o=e.validateOnMount,s=o===void 0?!1:o,a=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,c=e.onSubmit,f=mr(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),p=ge({validateOnChange:n,validateOnBlur:i,validateOnMount:s,onSubmit:c},f),y=b.useRef(p.initialValues),v=b.useRef(p.initialErrors||Br),m=b.useRef(p.initialTouched||rl),E=b.useRef(p.initialStatus),g=b.useRef(!1),h=b.useRef({});b.useEffect(function(){return g.current=!0,function(){g.current=!1}},[]);var x=b.useState(0),w=x[1],k=b.useRef({values:p.initialValues,errors:p.initialErrors||Br,touched:p.initialTouched||rl,status:p.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=k.current,S=b.useCallback(function(_){var F=k.current;k.current=BR(F,_),F!==k.current&&w(function(B){return B+1})},[]),O=b.useCallback(function(_,F){return new Promise(function(B,V){var q=p.validate(_,F);q==null?B(Br):If(q)?q.then(function(oe){B(oe||Br)},function(oe){V(oe)}):B(q)})},[p.validate]),j=b.useCallback(function(_,F){var B=p.validationSchema,V=nt(B)?B(F):B,q=F&&V.validateAt?V.validateAt(F,_):VR(_,V);return new Promise(function(oe,Re){q.then(function(){oe(Br)},function(Ht){Ht.name==="ValidationError"?oe(HR(Ht)):Re(Ht)})})},[p.validationSchema]),$=b.useCallback(function(_,F){return new Promise(function(B){return B(h.current[_].validate(F))})},[]),A=b.useCallback(function(_){var F=Object.keys(h.current).filter(function(V){return nt(h.current[V].validate)}),B=F.length>0?F.map(function(V){return $(V,Oe(_,V))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(B).then(function(V){return V.reduce(function(q,oe,Re){return oe==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||oe&&(q=Mn(q,F[Re],oe)),q},{})})},[$]),Q=b.useCallback(function(_){return Promise.all([A(_),p.validationSchema?j(_):{},p.validate?O(_):{}]).then(function(F){var B=F[0],V=F[1],q=F[2],oe=sp.all([B,V,q],{arrayMerge:GR});return oe})},[p.validate,p.validationSchema,A,O,j]),D=Vt(function(_){return _===void 0&&(_=T.values),S({type:"SET_ISVALIDATING",payload:!0}),Q(_).then(function(F){return g.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:F})),F})});b.useEffect(function(){s&&g.current===!0&&lr(y.current,p.initialValues)&&D(y.current)},[s,D]);var X=b.useCallback(function(_){var F=_&&_.values?_.values:y.current,B=_&&_.errors?_.errors:v.current?v.current:p.initialErrors||{},V=_&&_.touched?_.touched:m.current?m.current:p.initialTouched||{},q=_&&_.status?_.status:E.current?E.current:p.initialStatus;y.current=F,v.current=B,m.current=V,E.current=q;var oe=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!_&&!!_.isSubmitting,errors:B,touched:V,status:q,values:F,isValidating:!!_&&!!_.isValidating,submitCount:_&&_.submitCount&&typeof _.submitCount=="number"?_.submitCount:0}})};if(p.onReset){var Re=p.onReset(T.values,H);If(Re)?Re.then(oe):oe()}else oe()},[p.initialErrors,p.initialStatus,p.initialTouched,p.onReset]);b.useEffect(function(){g.current===!0&&!lr(y.current,p.initialValues)&&u&&(y.current=p.initialValues,X(),s&&D(y.current))},[u,p.initialValues,X,s,D]),b.useEffect(function(){u&&g.current===!0&&!lr(v.current,p.initialErrors)&&(v.current=p.initialErrors||Br,S({type:"SET_ERRORS",payload:p.initialErrors||Br}))},[u,p.initialErrors]),b.useEffect(function(){u&&g.current===!0&&!lr(m.current,p.initialTouched)&&(m.current=p.initialTouched||rl,S({type:"SET_TOUCHED",payload:p.initialTouched||rl}))},[u,p.initialTouched]),b.useEffect(function(){u&&g.current===!0&&!lr(E.current,p.initialStatus)&&(E.current=p.initialStatus,S({type:"SET_STATUS",payload:p.initialStatus}))},[u,p.initialStatus,p.initialTouched]);var G=Vt(function(_){if(h.current[_]&&nt(h.current[_].validate)){var F=Oe(T.values,_),B=h.current[_].validate(F);return If(B)?(S({type:"SET_ISVALIDATING",payload:!0}),B.then(function(V){return V}).then(function(V){S({type:"SET_FIELD_ERROR",payload:{field:_,value:V}}),S({type:"SET_ISVALIDATING",payload:!1})})):(S({type:"SET_FIELD_ERROR",payload:{field:_,value:B}}),Promise.resolve(B))}else if(p.validationSchema)return S({type:"SET_ISVALIDATING",payload:!0}),j(T.values,_).then(function(V){return V}).then(function(V){S({type:"SET_FIELD_ERROR",payload:{field:_,value:Oe(V,_)}}),S({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),J=b.useCallback(function(_,F){var B=F.validate;h.current[_]={validate:B}},[]),te=b.useCallback(function(_){delete h.current[_]},[]),M=Vt(function(_,F){S({type:"SET_TOUCHED",payload:_});var B=F===void 0?i:F;return B?D(T.values):Promise.resolve()}),I=b.useCallback(function(_){S({type:"SET_ERRORS",payload:_})},[]),W=Vt(function(_,F){var B=nt(_)?_(T.values):_;S({type:"SET_VALUES",payload:B});var V=F===void 0?n:F;return V?D(B):Promise.resolve()}),ee=b.useCallback(function(_,F){S({type:"SET_FIELD_ERROR",payload:{field:_,value:F}})},[]),Y=Vt(function(_,F,B){S({type:"SET_FIELD_VALUE",payload:{field:_,value:F}});var V=B===void 0?n:B;return V?D(Mn(T.values,_,F)):Promise.resolve()}),Pe=b.useCallback(function(_,F){var B=F,V=_,q;if(!Mf(_)){_.persist&&_.persist();var oe=_.target?_.target:_.currentTarget,Re=oe.type,Ht=oe.name,_t=oe.id,Fr=oe.value,Lr=oe.checked,No=oe.outerHTML,zo=oe.options,Ei=oe.multiple;B=F||Ht||_t,V=/number|range/.test(Re)?(q=parseFloat(Fr),isNaN(q)?"":q):/checkbox/.test(Re)?qR(Oe(T.values,B),Lr,Fr):zo&&Ei?KR(zo):Fr}B&&Y(B,V)},[Y,T.values]),ue=Vt(function(_){if(Mf(_))return function(F){return Pe(F,_)};Pe(_)}),se=Vt(function(_,F,B){F===void 0&&(F=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:_,value:F}});var V=B===void 0?i:B;return V?D(T.values):Promise.resolve()}),he=b.useCallback(function(_,F){_.persist&&_.persist();var B=_.target,V=B.name,q=B.id,oe=B.outerHTML,Re=F||V||q;se(Re,!0)},[se]),de=Vt(function(_){if(Mf(_))return function(F){return he(F,_)};he(_)}),xe=b.useCallback(function(_){nt(_)?S({type:"SET_FORMIK_STATE",payload:_}):S({type:"SET_FORMIK_STATE",payload:function(){return _}})},[]),me=b.useCallback(function(_){S({type:"SET_STATUS",payload:_})},[]),Je=b.useCallback(function(_){S({type:"SET_ISSUBMITTING",payload:_})},[]),K=Vt(function(){return S({type:"SUBMIT_ATTEMPT"}),D().then(function(_){var F=_ instanceof Error,B=!F&&Object.keys(_).length===0;if(B){var V;try{if(V=Z(),V===void 0)return}catch(q){throw q}return Promise.resolve(V).then(function(q){return g.current&&S({type:"SUBMIT_SUCCESS"}),q}).catch(function(q){if(g.current)throw S({type:"SUBMIT_FAILURE"}),q})}else if(g.current&&(S({type:"SUBMIT_FAILURE"}),F))throw _})}),z=Vt(function(_){_&&_.preventDefault&&nt(_.preventDefault)&&_.preventDefault(),_&&_.stopPropagation&&nt(_.stopPropagation)&&_.stopPropagation(),K().catch(function(F){console.warn("Warning: An unhandled error was caught from submitForm()",F)})}),H={resetForm:X,validateForm:D,validateField:G,setErrors:I,setFieldError:ee,setFieldTouched:se,setFieldValue:Y,setStatus:me,setSubmitting:Je,setTouched:M,setValues:W,setFormikState:xe,submitForm:K},Z=Vt(function(){return c(T.values,H)}),we=Vt(function(_){_&&_.preventDefault&&nt(_.preventDefault)&&_.preventDefault(),_&&_.stopPropagation&&nt(_.stopPropagation)&&_.stopPropagation(),X()}),yt=b.useCallback(function(_){return{value:Oe(T.values,_),error:Oe(T.errors,_),touched:!!Oe(T.touched,_),initialValue:Oe(y.current,_),initialTouched:!!Oe(m.current,_),initialError:Oe(v.current,_)}},[T.errors,T.touched,T.values]),Ut=b.useCallback(function(_){return{setValue:function(B,V){return Y(_,B,V)},setTouched:function(B,V){return se(_,B,V)},setError:function(B){return ee(_,B)}}},[Y,se,ee]),Wt=b.useCallback(function(_){var F=Ta(_),B=F?_.name:_,V=Oe(T.values,B),q={name:B,value:V,onChange:ue,onBlur:de};if(F){var oe=_.type,Re=_.value,Ht=_.as,_t=_.multiple;oe==="checkbox"?Re===void 0?q.checked=!!V:(q.checked=!!(Array.isArray(V)&&~V.indexOf(Re)),q.value=Re):oe==="radio"?(q.checked=V===Re,q.value=Re):Ht==="select"&&_t&&(q.value=q.value||[],q.multiple=!0)}return q},[de,ue,T.values]),wn=b.useMemo(function(){return!lr(y.current,T.values)},[y.current,T.values]),Ke=b.useMemo(function(){return typeof a<"u"?wn?T.errors&&Object.keys(T.errors).length===0:a!==!1&&nt(a)?a(p):a:T.errors&&Object.keys(T.errors).length===0},[a,wn,T.errors,p]),st=ge({},T,{initialValues:y.current,initialErrors:v.current,initialTouched:m.current,initialStatus:E.current,handleBlur:de,handleChange:ue,handleReset:we,handleSubmit:z,resetForm:X,setErrors:I,setFormikState:xe,setFieldTouched:se,setFieldValue:Y,setFieldError:ee,setStatus:me,setSubmitting:Je,setTouched:M,setValues:W,submitForm:K,validateForm:D,validateField:G,isValid:Ke,dirty:wn,unregisterField:te,registerField:J,getFieldProps:Wt,getFieldMeta:yt,getFieldHelpers:Ut,validateOnBlur:i,validateOnChange:n,validateOnMount:s});return st}function WR(e){var t=UR(e),n=e.component,r=e.children,i=e.render,o=e.innerRef;return b.useImperativeHandle(o,function(){return t}),b.createElement(NR,{value:t},n?b.createElement(n,t):i?i(t):r?nt(r)?r(t):Lw(r)?null:b.Children.only(r):null)}function HR(e){var t={};if(e.inner){if(e.inner.length===0)return Mn(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var o;if(n){if(r>=i.length)break;o=i[r++]}else{if(r=i.next(),r.done)break;o=r.value}var s=o;Oe(t,s.path)||(t=Mn(t,s.path,s.message))}}return t}function VR(e,t,n,r){n===void 0&&(n=!1);var i=dp(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function dp(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||eg(i)?dp(i):i!==""?i:void 0}):eg(e[r])?t[r]=dp(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function GR(e,t,n){var r=e.slice();return t.forEach(function(o,s){if(typeof r[s]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(o);r[s]=l?sp(Array.isArray(o)?[]:{},o,n):o}else n.isMergeableObject(o)?r[s]=sp(e[s],o,n):e.indexOf(o)===-1&&r.push(o)}),r}function KR(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function qR(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,o=-1;if(Array.isArray(e))r=e,o=e.indexOf(n),i=o>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,o).concat(r.slice(o+1)):r}var QR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?b.useLayoutEffect:b.useEffect;function Vt(e){var t=b.useRef(e);return QR(function(){t.current=e}),b.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}function YR(e){var t=e.validate,n=e.name,r=e.render,i=e.children,o=e.as,s=e.component,a=e.className,l=mr(e,["validate","name","render","children","as","component","className"]),u=Fw(),c=mr(u,["validate","validationSchema"]),f=c.registerField,p=c.unregisterField;b.useEffect(function(){return f(n,{validate:t}),function(){p(n)}},[f,p,n,t]);var y=c.getFieldProps(ge({name:n},l)),v=c.getFieldMeta(n),m={field:y,form:c};if(r)return r(ge({},m,{meta:v}));if(nt(i))return i(ge({},m,{meta:v}));if(s){if(typeof s=="string"){var E=l.innerRef,g=mr(l,["innerRef"]);return b.createElement(s,ge({ref:E},y,g,{className:a}),i)}return b.createElement(s,ge({field:y,form:c},l,{className:a}),i)}var h=o||"input";if(typeof h=="string"){var x=l.innerRef,w=mr(l,["innerRef"]);return b.createElement(h,ge({ref:x},y,w,{className:a}),i)}return b.createElement(h,ge({},y,l,{className:a}),i)}var zw=b.forwardRef(function(e,t){var n=e.action,r=mr(e,["action"]),i=n??"#",o=Fw(),s=o.handleReset,a=o.handleSubmit;return b.createElement("form",ge({onSubmit:a,ref:t,onReset:s,action:i},r))});zw.displayName="Form";function XR(e){var t=function(i){return b.createElement(zR,null,function(o){return b.createElement(e,ge({},i,{formik:o}))})},n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+n+")",A6(t,e)}var ZR=function(t,n,r){var i=hi(t),o=i[n];return i.splice(n,1),i.splice(r,0,o),i},JR=function(t,n,r){var i=hi(t),o=i[n];return i[n]=i[r],i[r]=o,i},Ff=function(t,n,r){var i=hi(t);return i.splice(n,0,r),i},eA=function(t,n,r){var i=hi(t);return i[n]=r,i},hi=function(t){if(t){if(Array.isArray(t))return[].concat(t);var n=Object.keys(t).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(ge({},t,{length:n+1}))}else return[]},Og=function(t,n){var r=typeof t=="function"?t:n;return function(i){if(Array.isArray(i)||Ta(i)){var o=hi(i);return r(o)}return i}},tA=function(e){Iw(t,e);function t(r){var i;return i=e.call(this,r)||this,i.updateArrayField=function(o,s,a){var l=i.props,u=l.name,c=l.formik.setFormikState;c(function(f){var p=Og(a,o),y=Og(s,o),v=Mn(f.values,u,o(Oe(f.values,u))),m=a?p(Oe(f.errors,u)):void 0,E=s?y(Oe(f.touched,u)):void 0;return $g(m)&&(m=void 0),$g(E)&&(E=void 0),ge({},f,{values:v,errors:a?Mn(f.errors,u,m):f.errors,touched:s?Mn(f.touched,u,E):f.touched})})},i.push=function(o){return i.updateArrayField(function(s){return[].concat(hi(s),[LR(o)])},!1,!1)},i.handlePush=function(o){return function(){return i.push(o)}},i.swap=function(o,s){return i.updateArrayField(function(a){return JR(a,o,s)},!0,!0)},i.handleSwap=function(o,s){return function(){return i.swap(o,s)}},i.move=function(o,s){return i.updateArrayField(function(a){return ZR(a,o,s)},!0,!0)},i.handleMove=function(o,s){return function(){return i.move(o,s)}},i.insert=function(o,s){return i.updateArrayField(function(a){return Ff(a,o,s)},function(a){return Ff(a,o,null)},function(a){return Ff(a,o,null)})},i.handleInsert=function(o,s){return function(){return i.insert(o,s)}},i.replace=function(o,s){return i.updateArrayField(function(a){return eA(a,o,s)},!1,!1)},i.handleReplace=function(o,s){return function(){return i.replace(o,s)}},i.unshift=function(o){var s=-1;return i.updateArrayField(function(a){var l=a?[o].concat(a):[o];return s=l.length,l},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),s},i.handleUnshift=function(o){return function(){return i.unshift(o)}},i.handleRemove=function(o){return function(){return i.remove(o)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(_g(i)),i.pop=i.pop.bind(_g(i)),i}var n=t.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!lr(Oe(i.formik.values,i.name),Oe(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var o;return this.updateArrayField(function(s){var a=s?hi(s):[];return o||(o=a[i]),nt(a.splice)&&a.splice(i,1),nt(a.every)&&a.every(function(l){return l===void 0})?[]:a},!0,!0),o},n.pop=function(){var i;return this.updateArrayField(function(o){var s=o.slice();return i||(i=s&&s.pop&&s.pop()),s},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,s=o.component,a=o.render,l=o.children,u=o.name,c=o.formik,f=mr(c,["validate","validationSchema"]),p=ge({},i,{form:f,name:u});return s?b.createElement(s,p):a?a(p):l?typeof l=="function"?l(p):Lw(l)?null:b.Children.only(l):null},t}(b.Component);tA.defaultProps={validateOnChange:!0};var nA=function(e){Iw(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.shouldComponentUpdate=function(i){return Oe(this.props.formik.errors,this.props.name)!==Oe(i.formik.errors,this.props.name)||Oe(this.props.formik.touched,this.props.name)!==Oe(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,o=i.component,s=i.formik,a=i.render,l=i.children,u=i.name,c=mr(i,["component","formik","render","children","name"]),f=Oe(s.touched,u),p=Oe(s.errors,u);return f&&p?a?nt(a)?a(p):null:l?nt(l)?l(p):null:o?b.createElement(o,c,p):p:null},t}(b.Component),rA=XR(nA);const iA=C.div`
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
`,oA=C.div`
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
`,sA=C(zw)`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,aA=C.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`,lA=C(yh)`
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
`,jg=C(YR)`
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
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: normal;
    color: ${e=>e.theme.colors.secondaryBlackTextColorDark};
  }

  &:focus-within {
    outline: 1px solid ${e=>e.theme.colors.blueColor};
  }
`,Pg=C.div`
  position: relative;

  margin-top: 0.2rem;
`,Rg=C(rA)`
  color: ${e=>e.theme.colors.redColor};
  position: absolute;
  bottom: -2.2rem;
  left: 0;
  font-size: 1.2rem;
`,Ag=C.label`
  color: ${e=>e.theme.colors.mainBgColorLight};
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,uA=C.button`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem;
  background-color: ${e=>e.theme.colors.blueColor};
  border-radius: 0.6rem;
  color: ${e=>e.theme.colors.heroTextColor};
  cursor: pointer;
`,cA=C.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
`,fA=C.svg`
  width: 4.4rem;
  height: 4.4rem;
`,Mg=C.p`
  color: ${e=>e.theme.colors.mainBgColorLight};
  font-family: DM Sans;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: 0;
`,dA=C.span`
  font-family: DM Sans;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: 0;
`,pA=C.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;function hA({showBMI:e,setShowBMI:t}){const[n,r]=b.useState(""),[i,o]=b.useState(""),[s,a]=b.useState(0),[l,u]=b.useState(""),[c,f]=b.useState(""),[p,y]=b.useState("");b.useEffect(()=>{s<18.5?(u("You are underweight"),f("images/icons.svg#icon-fitness"),y("#00cc44")):s>=18.5&&s<25?(u("You are on a good shape"),f("images/icons.svg#icon-yoga"),y("#3399ff")):s>=25&&s<30?(u("You are overweight"),f("images/icons.svg#icon-run"),y("#ff9900")):(u("You are in the obesity range"),f("images/icons.svg#icon-over"),y("#ff3300"))},[s]);function v(k){const T=k.weight,S=k.height;a(Number((T/(S*S)*703).toFixed(1))),r(""),o("")}function m(){t(k=>!k)}const E=b.useRef({x:0,y:0}),g=b.useRef(null),h=b.useRef(null),x=k=>{E.current={x:k.clientX,y:k.clientY},g.current!=null&&g.current.update()},w=sw({weight:op().max(3,"Weight should be up to 3 characters").required("Please fill up your weight!"),height:op().max(2,"Height should be up to 2 characters").required("Please fill up your height!")});return d.jsx(iA,{$showBMI:e,children:d.jsxs(oA,{children:[d.jsx(lA,{onClick:m}),d.jsx(WR,{initialValues:{weight:n,height:i},validationSchema:w,onSubmit:(k,T)=>{v(k),T.resetForm({values:{weight:n,height:i}})},children:d.jsxs(sA,{children:[d.jsxs(aA,{children:[d.jsxs("div",{children:[d.jsx(Ag,{htmlFor:"weight",children:"Weight (lbs)"}),d.jsxs(Pg,{children:[d.jsx(jg,{type:"number",name:"weight",placeholder:"0"}),d.jsx(Rg,{component:"span",name:"weight"})]})]}),d.jsxs("div",{children:[d.jsx(Ag,{htmlFor:"height",children:"Height (in)"}),d.jsxs(Pg,{children:[d.jsx(jg,{type:"number",name:"height",placeholder:"0"}),d.jsx(Rg,{component:"span",name:"height"})]})]})]}),d.jsx("div",{children:d.jsx(js,{title:"Check",placement:"top",arrow:!0,PopperProps:{popperRef:g,anchorEl:{getBoundingClientRect:()=>new DOMRect(E.current.x,h.current.getBoundingClientRect().y,0,0)}},children:d.jsx(uA,{onMouseMove:x,ref:h,type:"submit",children:"Check your BMI"})})})]})}),s>0&&d.jsxs(cA,{children:[d.jsxs(pA,{children:[d.jsxs(Mg,{children:["Your BMI is"," ",d.jsx(dA,{style:{color:p},children:s})]}),d.jsx(Mg,{children:l})]}),d.jsx("div",{children:d.jsx(fA,{children:d.jsx("use",{href:c})})})]})]})})}const mA=Gu`
  0% {
  background-color: ${e=>e.theme.colors.scrollUpColor};
  }
  50% {
  background-color: transparent;

  }
  100% {
  background-color: ${e=>e.theme.colors.scrollUpColor};
  }
`,Dw=C.p`
  color: ${e=>e.theme.colors.heroTextColorLowOp};
  font-family: DM Sans;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  transition: 0.3s linear;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`,gA=C.div`
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
    animation: ${mA} 3s linear infinite;
  }

  &:hover {
    border: 1px solid ${e=>e.theme.colors.accentColorLowOp};
    animation-play-state: paused;
    background-color: transparent;
  }

  &:hover {
    ${Dw} {
      color: ${e=>e.theme.colors.accentColor};
    }
  }
`;function yA(){const[e,t]=b.useState(!1);return d.jsxs(gA,{children:[e&&d.jsx(hA,{showBMI:e,setShowBMI:t}),d.jsx(Dw,{onClick:()=>t(n=>!n),children:"BMI"})]})}var pp=new Map,il=new WeakMap,Ig=0,vA=void 0;function xA(e){return e?(il.has(e)||(Ig+=1,il.set(e,Ig.toString())),il.get(e)):"0"}function wA(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?xA(e.root):e[t]}`).toString()}function SA(e){let t=wA(e),n=pp.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(s=>{s.forEach(a=>{var l;const u=a.isIntersecting&&i.some(c=>a.intersectionRatio>=c);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=r.get(a.target))==null||l.forEach(c=>{c(u,a)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},pp.set(t,n)}return n}function bA(e,t,n={},r=vA){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:o,elements:s}=SA(n);let a=s.get(e)||[];return s.has(e)||s.set(e,a),a.push(t),o.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(s.delete(e),o.unobserve(e)),s.size===0&&(o.disconnect(),pp.delete(i))}}function Fg({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:s,initialInView:a,fallbackInView:l,onChange:u}={}){var c;const[f,p]=b.useState(null),y=b.useRef(),[v,m]=b.useState({inView:!!a,entry:void 0});y.current=u,b.useEffect(()=>{if(s||!f)return;let x;return x=bA(f,(w,k)=>{m({inView:w,entry:k}),y.current&&y.current(w,k),k.isIntersecting&&o&&x&&(x(),x=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{x&&x()}},[Array.isArray(e)?e.toString():e,f,i,r,o,s,n,l,t]);const E=(c=v.entry)==null?void 0:c.target,g=b.useRef();!f&&E&&!o&&!s&&g.current!==E&&(g.current=E,m({inView:!!a,entry:void 0}));const h=[p,v.inView,v.entry];return h.ref=h[0],h.inView=h[1],h.entry=h[2],h}const EA=C.div`
  border-radius: 1.2rem;
  background-color: ${e=>e.theme.colors.iconsBgColorLowOp};
`,CA=C.div`
  width: 100%;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 1440px) {
    padding: 1.2rem 2.4rem;
  }
`,TA=C.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,kA=C.h3`
  text-align: center;
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;

  padding-bottom: 1.2rem;
  border-bottom: 1px solid ${e=>e.theme.colors.accentColor};
`,_A=C.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.27;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,ol=C.div`
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
`,$A=C.ul`
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
`,sl=C.li`
  flex: 1 0 calc((100% / 2) - 16px);
`,al=C.div`
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
`,ll=C.svg`
  width: 4.4rem;
  height: 4.4rem;
`,ul=C.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,cl=C.p`
  color: ${e=>e.theme.colors.secondaryBlackTextColorLowOp};
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;function OA(){return d.jsx(EA,{children:d.jsxs(CA,{children:[d.jsxs(TA,{children:[d.jsx(kA,{children:"Elite 1:1 Coaching Experience"}),d.jsx(_A,{children:"A completely Personalized Nutrition, Training, Cardio, and Supplementation Program based on your body type, height and desired physique goals. I'm here not just to instruct but to inspire, motivate, and guide you to reach your health and fitness goals."})]}),d.jsxs($A,{children:[d.jsx(sl,{children:d.jsxs(ol,{children:[d.jsx(al,{children:d.jsx(ll,{children:d.jsx("use",{href:"images/icons.svg#icon-fitness"})})}),d.jsx(ul,{children:"Bodybuilding & Fitness"}),d.jsx(cl,{children:"Build strength, shape muscles, and boost overall fitness with tailored programs."})]})}),d.jsx(sl,{children:d.jsxs(ol,{children:[d.jsx(al,{children:d.jsx(ll,{children:d.jsx("use",{href:"images/icons.svg#icon-boxing"})})}),d.jsx(ul,{children:"Boxing & MMA"}),d.jsx(cl,{children:"Discover your fighting spirit through boxing and MMA training."})]})}),d.jsx(sl,{children:d.jsxs(ol,{children:[d.jsx(al,{children:d.jsx(ll,{children:d.jsx("use",{href:"images/icons.svg#icon-gymnastics"})})}),d.jsx(ul,{children:"Calisthenics & Gymnastics"}),d.jsx(cl,{children:"Achieve agility and strength with dynamic bodyweight exercises."})]})}),d.jsx(sl,{children:d.jsxs(ol,{children:[d.jsx(al,{children:d.jsx(ll,{children:d.jsx("use",{href:"images/icons.svg#icon-nutrition"})})}),d.jsx(ul,{children:"Health & Nutrition"}),d.jsx(cl,{children:"Fuel your success with personalized health and nutrition guidance."})]})})]})]})})}var Bw=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];n.call(r,s[1],s[0])}},t}()}(),hp=typeof window<"u"&&typeof document<"u"&&window.document===document,bu=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),jA=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(bu):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),PA=2;function RA(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function s(){jA(o)}function a(){var l=Date.now();if(n){if(l-i<PA)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=l}return a}var AA=20,MA=["top","right","bottom","left","width","height","size","weight"],IA=typeof MutationObserver<"u",FA=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=RA(this.refresh.bind(this),AA)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!hp||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),IA?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!hp||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=MA.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Uw=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},$o=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||bu},Ww=jc(0,0,0,0);function Eu(e){return parseFloat(e)||0}function Lg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Eu(o)},0)}function LA(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],s=e["padding-"+o];n[o]=Eu(s)}return n}function NA(e){var t=e.getBBox();return jc(0,0,t.width,t.height)}function zA(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Ww;var r=$o(e).getComputedStyle(e),i=LA(r),o=i.left+i.right,s=i.top+i.bottom,a=Eu(r.width),l=Eu(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Lg(r,"left","right")+o),Math.round(l+s)!==n&&(l-=Lg(r,"top","bottom")+s)),!BA(e)){var u=Math.round(a+o)-t,c=Math.round(l+s)-n;Math.abs(u)!==1&&(a-=u),Math.abs(c)!==1&&(l-=c)}return jc(i.left,i.top,a,l)}var DA=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof $o(e).SVGGraphicsElement}:function(e){return e instanceof $o(e).SVGElement&&typeof e.getBBox=="function"}}();function BA(e){return e===$o(e).document.documentElement}function UA(e){return hp?DA(e)?NA(e):zA(e):Ww}function WA(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return Uw(s,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),s}function jc(e,t,n,r){return{x:e,y:t,width:n,height:r}}var HA=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=jc(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=UA(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),VA=function(){function e(t,n){var r=WA(n);Uw(this,{target:t,contentRect:r})}return e}(),GA=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Bw,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof $o(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new HA(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof $o(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new VA(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Hw=typeof WeakMap<"u"?new WeakMap:new Bw,Vw=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=FA.getInstance(),r=new GA(t,n,this);Hw.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Vw.prototype[e]=function(){var t;return(t=Hw.get(this))[e].apply(t,arguments)}});var Gw=function(){return typeof bu.ResizeObserver<"u"?bu.ResizeObserver:Vw}(),pn={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e-.1)*5*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2,e<1?-.5*Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin((e-1.1)*5*Math.PI)+1)}},Back:{In:function(e){var t=1.70158;return e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)}},Bounce:{In:function(e){return 1-pn.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?pn.Bounce.In(e*2)*.5:pn.Bounce.Out(e*2-1)*.5+.5}}},ms;typeof self>"u"&&typeof process<"u"&&process.hrtime?ms=function(){var e=process.hrtime();return e[0]*1e3+e[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?ms=self.performance.now.bind(self.performance):Date.now!==void 0?ms=Date.now:ms=function(){return new Date().getTime()};var Fi=ms,fm=function(){function e(){this._tweens={},this._tweensAddedDuringUpdate={}}return e.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(n){return t._tweens[n]})},e.prototype.removeAll=function(){this._tweens={}},e.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},e.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},e.prototype.update=function(t,n){t===void 0&&(t=Fi()),n===void 0&&(n=!1);var r=Object.keys(this._tweens);if(r.length===0)return!1;for(;r.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<r.length;i++){var o=this._tweens[r[i]],s=!n;o&&o.update(t,s)===!1&&!n&&delete this._tweens[r[i]]}r=Object.keys(this._tweensAddedDuringUpdate)}return!0},e}(),gs={Linear:function(e,t){var n=e.length-1,r=n*t,i=Math.floor(r),o=gs.Utils.Linear;return t<0?o(e[0],e[1],r):t>1?o(e[n],e[n-1],n-r):o(e[i],e[i+1>n?n:i+1],r-i)},Bezier:function(e,t){for(var n=0,r=e.length-1,i=Math.pow,o=gs.Utils.Bernstein,s=0;s<=r;s++)n+=i(1-t,r-s)*i(t,s)*e[s]*o(r,s);return n},CatmullRom:function(e,t){var n=e.length-1,r=n*t,i=Math.floor(r),o=gs.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(i=Math.floor(r=n*(1+t))),o(e[(i-1+n)%n],e[i],e[(i+1)%n],e[(i+2)%n],r-i)):t<0?e[0]-(o(e[0],e[0],e[1],e[1],-r)-e[0]):t>1?e[n]-(o(e[n],e[n],e[n-1],e[n-1],r-n)-e[n]):o(e[i?i-1:0],e[i],e[n<i+1?n:i+1],e[n<i+2?n:i+2],r-i)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=gs.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:function(){var e=[1];return function(t){var n=1;if(e[t])return e[t];for(var r=t;r>1;r--)n*=r;return e[t]=n,n}}(),CatmullRom:function(e,t,n,r,i){var o=(n-e)*.5,s=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+o+s)*l+(-3*t+3*n-2*o-s)*a+o*i+t}}},KA=function(){function e(){}return e.nextId=function(){return e._nextId++},e._nextId=0,e}(),Kw=new fm,qw=function(){function e(t,n){n===void 0&&(n=Kw),this._object=t,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=pn.Linear.None,this._interpolationFunction=gs.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=KA.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return e.prototype.getId=function(){return this._id},e.prototype.isPlaying=function(){return this._isPlaying},e.prototype.isPaused=function(){return this._isPaused},e.prototype.to=function(t,n){return this._valuesEnd=Object.create(t),n!==void 0&&(this._duration=n),this},e.prototype.duration=function(t){return this._duration=t,this},e.prototype.start=function(t){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t!==void 0?typeof t=="string"?Fi()+parseFloat(t):t:Fi(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},e.prototype._setupProperties=function(t,n,r,i){for(var o in r){var s=t[o],a=Array.isArray(s),l=a?"array":typeof s,u=!a&&Array.isArray(r[o]);if(!(l==="undefined"||l==="function")){if(u){var c=r[o];if(c.length===0)continue;c=c.map(this._handleRelativeValue.bind(this,s)),r[o]=[s].concat(c)}if((l==="object"||a)&&s&&!u){n[o]=a?[]:{};for(var f in s)n[o][f]=s[f];i[o]=a?[]:{},this._setupProperties(s,n[o],r[o],i[o])}else typeof n[o]>"u"&&(n[o]=s),a||(n[o]*=1),u?i[o]=r[o].slice().reverse():i[o]=n[o]||0}}},e.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},e.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},e.prototype.pause=function(t){return t===void 0&&(t=Fi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},e.prototype.resume=function(t){return t===void 0&&(t=Fi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},e.prototype.stopChainedTweens=function(){for(var t=0,n=this._chainedTweens.length;t<n;t++)this._chainedTweens[t].stop();return this},e.prototype.group=function(t){return this._group=t,this},e.prototype.delay=function(t){return this._delayTime=t,this},e.prototype.repeat=function(t){return this._initialRepeat=t,this._repeat=t,this},e.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},e.prototype.yoyo=function(t){return this._yoyo=t,this},e.prototype.easing=function(t){return this._easingFunction=t,this},e.prototype.interpolation=function(t){return this._interpolationFunction=t,this},e.prototype.chain=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return this._chainedTweens=t,this},e.prototype.onStart=function(t){return this._onStartCallback=t,this},e.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},e.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},e.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},e.prototype.onStop=function(t){return this._onStopCallback=t,this},e.prototype.update=function(t,n){if(t===void 0&&(t=Fi()),n===void 0&&(n=!0),this._isPaused)return!0;var r,i,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>o)return!1;n&&this.start(t)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),i=(t-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var s=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,s),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},e.prototype._updateProperties=function(t,n,r,i){for(var o in r)if(n[o]!==void 0){var s=n[o]||0,a=r[o],l=Array.isArray(t[o]),u=Array.isArray(a),c=!l&&u;c?t[o]=this._interpolationFunction(a,i):typeof a=="object"&&a?this._updateProperties(t[o],s,a,i):(a=this._handleRelativeValue(s,a),typeof a=="number"&&(t[o]=s+(a-s)*i))}},e.prototype._handleRelativeValue=function(t,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?t+parseFloat(n):parseFloat(n)},e.prototype._swapEndStartRepeatValues=function(t){var n=this._valuesStartRepeat[t],r=this._valuesEnd[t];typeof r=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(r):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=n},e}(),Ln=Kw;Ln.getAll.bind(Ln);Ln.removeAll.bind(Ln);Ln.add.bind(Ln);Ln.remove.bind(Ln);Ln.update.bind(Ln);function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ua.apply(this,arguments)}var Qw=function(t,n){return n&&n<N.Children.count(t)?n:0},qA=function(t,n){if(typeof window<"u"&&Array.isArray(n))return n.find(function(r){return r.breakpoint<=t})},Ng={linear:pn.Linear.None,ease:pn.Quadratic.InOut,"ease-in":pn.Quadratic.In,"ease-out":pn.Quadratic.Out,cubic:pn.Cubic.InOut,"cubic-in":pn.Cubic.In,"cubic-out":pn.Cubic.Out},Yw=function(t){return t?Ng[t]:Ng.linear},Xw=function(t,n,r){var i=t.prevArrow,o=t.infinite,s=n<=0&&!o,a={"data-type":"prev","aria-label":"Previous Slide",disabled:s,onClick:r};if(i)return N.cloneElement(i,ua({className:(i.props.className||"")+" nav "+(s?"disabled":"")},a));var l="nav default-nav "+(s?"disabled":"");return N.createElement("button",Object.assign({type:"button",className:l},a),N.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},N.createElement("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"})))},Zw=function(t,n,r){var i=t.nextArrow,o=t.infinite,s=t.children,a=1;"slidesToScroll"in t&&(a=t.slidesToScroll||1);var l=n>=N.Children.count(s)-a&&!o,u={"data-type":"next","aria-label":"Next Slide",disabled:l,onClick:r};if(i)return N.cloneElement(i,ua({className:(i.props.className||"")+" nav "+(l?"disabled":"")},u));var c="nav default-nav "+(l?"disabled":"");return N.createElement("button",Object.assign({type:"button",className:c},u),N.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},N.createElement("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})))},QA=function(t,n,r){return N.createElement("li",{key:n},N.createElement("button",Object.assign({type:"button",className:"each-slideshow-indicator "+(t?"active":"")},r)))},YA=function(t,n,r,i){return N.cloneElement(i,ua({className:i.props.className+" "+(t?"active":""),key:n},r))},Jw=function(t,n,r,i){var o=t.children,s=t.indicators,a=1;i?a=i==null?void 0:i.settings.slidesToScroll:"slidesToScroll"in t&&(a=t.slidesToScroll||1);var l=Math.ceil(N.Children.count(o)/a);return N.createElement("ul",{className:"indicators"},Array.from({length:l},function(u,c){var f={"data-key":c,"aria-label":"Go to slide "+(c+1),onClick:r},p=Math.floor((n+a-1)/a)===c;return typeof s=="function"?YA(p,c,f,s(c)):QA(p,c,f)}))},Pc={duration:5e3,transitionDuration:1e3,defaultIndex:0,infinite:!0,autoplay:!0,indicators:!1,arrows:!0,pauseOnHover:!0,easing:"linear",canSwipe:!0,cssClass:"",responsive:[]},dm=N.forwardRef(function(e,t){var n=b.useState(Qw(e.children,e.defaultIndex)),r=n[0],i=n[1],o=b.useRef(null),s=b.useRef(null),a=b.useRef(new fm),l=b.useRef(),u=b.useRef(),c=b.useMemo(function(){return N.Children.count(e.children)},[e.children]),f=b.useCallback(function(){if(s.current&&o.current){var O=o.current.clientWidth,j=O*c;s.current.style.width=j+"px";for(var $=0;$<s.current.children.length;$++){var A=s.current.children[$];A&&(A.style.width=O+"px",A.style.left=$*-O+"px",A.style.display="block")}}},[o,s,c]),p=b.useCallback(function(){o.current&&(u.current=new Gw(function(O){O&&f()}),u.current.observe(o.current))},[o,f]),y=b.useCallback(function(){var O=e.autoplay,j=e.children,$=e.duration,A=e.infinite;O&&N.Children.count(j)>1&&(A||r<N.Children.count(j)-1)&&(l.current=setTimeout(g,$))},[e,r]);b.useEffect(function(){return p(),function(){a.current.removeAll(),clearTimeout(l.current),v()}},[p,a]),b.useEffect(function(){clearTimeout(l.current),y()},[r,e.autoplay,y]),b.useEffect(function(){f()},[c,f]),b.useImperativeHandle(t,function(){return{goNext:function(){g()},goBack:function(){h()},goTo:function(j,$){$!=null&&$.skipTransition?i(j):T(j)}}});var v=function(){u.current&&o.current&&u.current.unobserve(o.current)},m=function(){e.pauseOnHover&&clearTimeout(l.current)},E=function(){var j=e.pauseOnHover,$=e.autoplay,A=e.duration;j&&$&&(l.current=setTimeout(function(){return g()},A))},g=function(){var j=e.children,$=e.infinite;!$&&r===N.Children.count(j)-1||k((r+1)%N.Children.count(j))},h=function(){var j=e.children,$=e.infinite;!$&&r===0||k(r===0?N.Children.count(j)-1:r-1)},x=function(j){var $=j.currentTarget;$.dataset.type==="prev"?h():g()},w=function O(){requestAnimationFrame(O),a.current.update()},k=function(j){var $=a.current.getAll();if(!$.length){var A;(A=s.current)!=null&&A.children[j]||(j=0),clearTimeout(l.current);var Q={opacity:0,scale:1};w();var D=new qw(Q,a.current).to({opacity:1,scale:e.scale},e.transitionDuration).onUpdate(function(X){s.current&&(s.current.children[j].style.opacity=X.opacity,s.current.children[r].style.opacity=1-X.opacity,s.current.children[r].style.transform="scale("+X.scale+")")});D.easing(Yw(e.easing)),D.onStart(function(){typeof e.onStartChange=="function"&&e.onStartChange(r,j)}),D.onComplete(function(){s.current&&(i(j),s.current.children[r].style.transform="scale(1)"),typeof e.onChange=="function"&&e.onChange(r,j)}),D.start()}},T=function(j){j!==r&&k(j)},S=function(j){var $=j.currentTarget;$.dataset.key&&parseInt($.dataset.key)!==r&&T(parseInt($.dataset.key))};return N.createElement("div",{dir:"ltr","aria-roledescription":"carousel"},N.createElement("div",{className:"react-slideshow-container "+(e.cssClass||""),onMouseEnter:m,onMouseOver:m,onMouseLeave:E},e.arrows&&Xw(e,r,x),N.createElement("div",{className:"react-slideshow-fadezoom-wrapper "+e.cssClass,ref:o},N.createElement("div",{className:"react-slideshow-fadezoom-images-wrap",ref:s},(N.Children.map(e.children,function(O){return O})||[]).map(function(O,j){return N.createElement("div",{style:{opacity:j===r?"1":"0",zIndex:j===r?"1":"0"},"data-index":j,key:j,"aria-roledescription":"slide","aria-hidden":j===r?"false":"true"},O)}))),e.arrows&&Zw(e,r,x)),e.indicators&&Jw(e,r,S))});dm.defaultProps=Pc;var XA=N.forwardRef(function(e,t){return N.createElement(dm,Object.assign({},e,{scale:1,ref:t}))});XA.defaultProps=Pc;var ZA=N.forwardRef(function(e,t){return N.createElement(dm,Object.assign({},e,{ref:t}))});ZA.defaultProps=Pc;var e4=N.forwardRef(function(e,t){var n=b.useState(Qw(e.children,e.defaultIndex)),r=n[0],i=n[1],o=b.useState(0),s=o[0],a=o[1],l=b.useRef(null),u=b.useRef(null),c=b.useRef(new fm),f=b.useMemo(function(){return qA(s,e.responsive)},[s,e.responsive]),p=b.useMemo(function(){return f?f.settings.slidesToScroll:e.slidesToScroll||1},[f,e.slidesToScroll]),y=b.useMemo(function(){return f?f.settings.slidesToShow:e.slidesToShow||1},[f,e.slidesToShow]),v=b.useMemo(function(){return N.Children.count(e.children)},[e.children]),m=b.useMemo(function(){return s/y},[s,y]),E=b.useRef(),g=b.useRef(),h,x=!1,w=0,k=e.vertical?"translateY":"translateX",T=e.vertical?"clientY":"clientX",S=e.vertical?"pageY":"pageX",O=b.useCallback(function(){if(u.current){var K=s*u.current.children.length,z=e.vertical?"height":"width";u.current.style[z]=K+"px",e.vertical&&l.current&&(l.current.style[z]=s+"px");for(var H=0;H<u.current.children.length;H++){var Z=u.current.children[H];Z&&(e.vertical||(Z.style[z]=m+"px"),Z.style.display="block")}}},[s,m]),j=b.useCallback(function(){l.current&&(g.current=new Gw(function(K){K&&Pe()}),g.current.observe(l.current))},[l]),$=b.useCallback(function(){var K=e.autoplay,z=e.infinite,H=e.duration;K&&(z||r<v-1)&&(E.current=setTimeout(X,H))},[e,v,r]);b.useEffect(function(){O()},[s,O]),b.useEffect(function(){return j(),function(){c.current.removeAll(),clearTimeout(E.current),A()}},[l,j,c]),b.useEffect(function(){clearTimeout(E.current),$()},[r,s,e.autoplay,$]),b.useImperativeHandle(t,function(){return{goNext:function(){X()},goBack:function(){G()},goTo:function(z,H){H!=null&&H.skipTransition?i(z):te(z)}}});var A=function(){g&&l.current&&g.current.unobserve(l.current)},Q=function(){e.pauseOnHover&&clearTimeout(E.current)},D=function(z){if(e.canSwipe&&x){var H;if(window.TouchEvent&&z.nativeEvent instanceof TouchEvent?H=z.nativeEvent.touches[0][S]:H=z.nativeEvent[T],H&&h){var Z=m*(r+me()),we=H-h;if(!e.infinite&&r===v-p&&we<0||!e.infinite&&r===0&&we>0)return;w=we,Z-=w,u.current.style.transform=k+"(-"+Z+"px)"}}},X=function(){if(!(!e.infinite&&r===v-p)){var z=M(r+p);de(z)}},G=function(){if(!(!e.infinite&&r===0)){var z=r-p;z%p&&(z=Math.ceil(z/p)*p),de(z)}},J=function(z){var H=z.currentTarget;if(H.dataset.key){var Z=parseInt(H.dataset.key);te(Z*p)}},te=function(z){de(M(z))},M=function(z){return z<v&&z+p>v&&(v-p)%p?v-p:z},I=function(){x?se():e.pauseOnHover&&e.autoplay&&(E.current=setTimeout(X,e.duration))},W=function(z){var H=z.currentTarget.dataset;H.type==="next"?X():G()},ee=function(){return N.Children.toArray(e.children).slice(-y).map(function(z,H){return N.createElement("div",{"data-index":H-y,"aria-roledescription":"slide","aria-hidden":"true",key:H-y},z)})},Y=function(){if(!(!e.infinite&&y===p))return N.Children.toArray(e.children).slice(0,y).map(function(z,H){return N.createElement("div",{"data-index":v+H,"aria-roledescription":"slide","aria-hidden":"true",key:v+H},z)})},Pe=function(){var z=e.vertical?"clientHeight":"clientWidth";e.vertical?u.current&&a(u.current.children[0][z]):l.current&&a(l.current[z])},ue=function(z){e.canSwipe&&(window.TouchEvent&&z.nativeEvent instanceof TouchEvent?h=z.nativeEvent.touches[0][S]:h=z.nativeEvent[T],clearTimeout(E.current),x=!0)},se=function(){e.canSwipe&&(x=!1,Math.abs(w)/s>.2?w<0?X():G():Math.abs(w)>0&&de(r,300))},he=function K(){requestAnimationFrame(K),c.current.update()},de=function(z,H){var Z=H||e.transitionDuration,we=r,yt=c.current.getAll();if(l.current){var Ut=e.vertical?"clientHeight":"clientWidth",Wt=l.current[Ut]/y;if(!yt.length){clearTimeout(E.current);var wn={margin:-Wt*(we+me())+w},Ke=new qw(wn,c.current).to({margin:-Wt*(z+me())},Z).onUpdate(function(_){u.current&&(u.current.style.transform=k+"("+_.margin+"px)")});Ke.easing(Yw(e.easing)),he();var st=z;st<0?st=v-p:st>=v&&(st=0),Ke.onStart(function(){typeof e.onStartChange=="function"&&e.onStartChange(r,st)}),Ke.onComplete(function(){w=0,typeof e.onChange=="function"&&e.onChange(r,st),i(st)}),Ke.start()}}},xe=function(z){return z<r+y&&z>=r},me=function(){return e.infinite?y:0},Je={transform:k+"(-"+(r+me())*m+"px)"};return N.createElement("div",{dir:"ltr","aria-roledescription":"carousel"},N.createElement("div",{className:"react-slideshow-container",onMouseEnter:Q,onMouseOver:Q,onMouseLeave:I,onMouseDown:ue,onMouseUp:se,onMouseMove:D,onTouchStart:ue,onTouchEnd:se,onTouchCancel:se,onTouchMove:D},e.arrows&&Xw(e,r,W),N.createElement("div",{className:"react-slideshow-wrapper slide "+(e.cssClass||""),ref:l},N.createElement("div",{className:"images-wrap "+(e.vertical?"vertical":"horizontal"),style:Je,ref:u},e.infinite&&ee(),(N.Children.map(e.children,function(K){return K})||[]).map(function(K,z){var H=xe(z);return N.createElement("div",{"data-index":z,key:z,className:H?"active":"","aria-roledescription":"slide","aria-hidden":H?"false":"true"},K)}),Y())),e.arrows&&Zw(e,r,W)),!!e.indicators&&Jw(e,r,J,f))});e4.defaultProps=Pc;function JA(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"}}]})(e)}function eM(e){return _e({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"}}]})(e)}const tM=C.div`
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
`,ln=C.div`
  width: 100%;
  height: auto;
`,un=C.img`
  width: 100%;
  border-radius: 1.2rem;
  height: 224px;

  @media (min-width: 768px) {
    height: 470px;
  }

  @media (min-width: 1440px) {
    height: 640px;
  }
`,t4=C(JA)`
  font-size: 1.6rem;
  color: ${e=>e.theme.colors.slideArrowButtons};
  transition: 0.2s ease-in-out;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`,n4=C(eM)`
  font-size: 1.6rem;
  color: ${e=>e.theme.colors.slideArrowButtons};
  transition: 0.3s linear;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`,nM=C.button`
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
    ${t4} {
      color: ${e=>e.theme.colors.accentColor};
    }
  }
`,rM=C.button`
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
    ${n4} {
      color: ${e=>e.theme.colors.accentColor};
    }
  }
`;function iM(){const e={prevArrow:d.jsx(nM,{children:d.jsx(t4,{})}),nextArrow:d.jsx(rM,{children:d.jsx(n4,{})})};return d.jsx(tM,{children:d.jsxs(e4,{...e,duration:5e3,autoplay:!0,infinite:!0,pauseOnHover:!1,children:[d.jsx(ln,{children:d.jsx(un,{src:"images/slide1.jpg",alt:"bodybuilding competition",loading:"lazy"})}),d.jsx(ln,{children:d.jsx(un,{src:"images/slide2.jpg",alt:"bodybuilding competition",loading:"lazy"})}),d.jsx(ln,{children:d.jsx(un,{src:"images/slide3.jpg",alt:"bodybuilding competition",loading:"lazy"})}),d.jsx(ln,{children:d.jsx(un,{src:"images/slide4.jpg",alt:"bodybuilding competition",loading:"lazy"})}),d.jsx(ln,{children:d.jsx(un,{src:"images/slide5.jpg",alt:"bodybuilding competition",loading:"lazy"})}),d.jsx(ln,{children:d.jsx(un,{src:"images/slide6.jpg",alt:"bodybuilding",loading:"lazy"})}),d.jsx(ln,{children:d.jsx(un,{src:"images/slide7.jpg",alt:"personal trainer",loading:"lazy"})}),d.jsx(ln,{children:d.jsx(un,{src:"images/slide8.jpg",alt:"bodybuilding",loading:"lazy"})}),d.jsx(ln,{children:d.jsx(un,{src:"images/slide9.jpg",alt:"bodybuilding",loading:"lazy"})}),d.jsx(ln,{children:d.jsx(un,{src:"images/slide10.jpg",alt:"bodybuilding",loading:"lazy"})}),d.jsx(ln,{children:d.jsx(un,{src:"images/slide11.jpg",alt:"bodybuilding",loading:"lazy"})})]})})}const zg={light:{colors:{mainTextColor:"#242424",mainTextColorRev:"#fafafa",heroTextColor:"#f4f4f9",heroTextColorLowOp:"rgba(244, 244, 249,0.5)",accentColor:"#d9243a",accentColorLowOp:"rgb(217, 36, 58,0.3)",mainTextColorLowOp:"rgb(36, 36, 36,0.5)",burgerOverlay:"rgb(250, 250, 250,0.9)",initialCardTextColor:"#f8f9fa",mainBgColor:"#f8f9fa",mainBgColorLight:"#f8f9fa",mainBgColorRev:"#242424",mainBgColorDark:"#242424",aboutBgColor:"#f1f3f5",footerBgColor:"#242424",switcherHoverBg:"rgb(36, 36, 36,0.1)",footerInfoColor:"#C6CDD1",whiteColor:"#fff",secondaryWhiteTextColorLowOp:"rgba(244, 244, 244, 0.5)",inactiveColor:"rgba(244, 244, 244, 0.2)",secondaryBlackTextColorLowOp:"rgba(36, 36, 36, 0.5)",secondaryBlackTextColorDark:"rgba(36, 36, 36, 0.5)",iconsBgColorLowOp:"rgba(36, 36, 36, 0.1)",starColor:"#eea10c",greenColor:"#0ca678",blueColor:"#0077b6",redColor:"#ff3300",darkGradientCards:"rgba(17, 17, 17, 0.5)",modalBgColor:"#242424",modalContainerColor:"#242424",mainBackdropBgColor:"rgba(18, 20, 23, 0.5)",notActivePaginationButton:"#d4d4d4",scrollUpColor:"rgba(18, 20, 23, 0.5)",slideArrowButtons:"rgba(244, 244, 244, 0.9)"}},dark:{colors:{mainTextColor:"#fafafa",mainTextColorRev:"#242424",heroTextColor:"#f4f4f9",heroTextColorLowOp:"rgba(244, 244, 249,0.5)",accentColor:"#d9243a",accentColorLowOp:"rgb(217, 36, 58,0.3)",mainTextColorLowOp:"rgb(250, 250, 250,0.5)",burgerOverlay:"rgb(36, 36, 36,0.9)",initialCardTextColor:"#f8f9fa",mainBgColor:"#242424",mainBgColorRev:"#f8f9fa",mainBgColorLight:"#f8f9fa",mainBgColorDark:"#242424",aboutBgColor:"#1d1d1d",footerBgColor:"#1b1b1b",switcherHoverBg:"rgb(254, 250, 224, 0.1)",footerInfoColor:"#C6CDD1",whiteColor:"#1b1b1b",secondaryWhiteTextColorLowOp:"rgba(36, 36, 36, 0.5)",secondaryBlackTextColorDark:"rgba(36, 36, 36, 0.5)",inactiveColor:"rgba(36, 36, 36, 0.2)",secondaryBlackTextColorLowOp:"rgba(244, 244, 244, 0.5)",iconsBgColorLowOp:"rgba(244, 244, 244, 0.1)",starColor:"#eea10c",greenColor:"#0ca678",blueColor:"#0077b6",redColor:"#ff3300",darkGradientCards:"rgba(17, 17, 17, 0.5)",modalBgColor:"#242424",modalContainerColor:"#dfe0e1",mainBackdropBgColor:"rgba(146,146,146, 0.5)",notActivePaginationButton:"#494949",scrollUpColor:"rgba(200, 200, 200, 0.5)",slideArrowButtons:"rgba(244, 244, 244, 0.9)"}}};function oM(){const[e,t]=b.useState(()=>localStorage.getItem("theme")!=="light"),n=()=>{t(a=>!a),localStorage.setItem("theme",e?"light":"dark")},{ref:r,inView:i}=Fg({triggerOnce:!0,threshold:0,rootMargin:"100px"}),{ref:o,inView:s}=Fg({triggerOnce:!0,threshold:0,rootMargin:"100px"});return d.jsxs(Db,{theme:e?zg.dark:zg.light,children:[d.jsx(Xo,{children:d.jsx(M5,{toggleTheme:n,isDarkTheme:e})}),d.jsxs("main",{children:[d.jsxs(Xo,{children:[d.jsx(yA,{}),d.jsx(ds,{children:d.jsx(K5,{})}),d.jsx(ds,{id:"gallery",children:d.jsxs(F5,{children:[d.jsx(OA,{}),d.jsx(iM,{})]})}),d.jsx(ds,{ref:o,$inView:s,children:d.jsx(Ak,{})})]}),d.jsx(N5,{id:"exercises",ref:r,$inView:i,children:d.jsx(Xo,{children:d.jsx(A$,{})})}),d.jsx(ds,{children:d.jsx(Xo,{children:d.jsx(B$,{})})})]}),d.jsx(I$,{}),d.jsx(L5,{children:d.jsx(Xo,{children:d.jsx(kk,{})})}),d.jsx(Hb,{})]})}Nf.createRoot(document.getElementById("root")).render(d.jsx(N.StrictMode,{children:d.jsx(oM,{})}))});export default sM();
