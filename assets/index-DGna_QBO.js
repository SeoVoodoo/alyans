function j1(e,t){for(var l=0;l<t.length;l++){const r=t[l];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(r,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();function _1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mu={exports:{}},Ao={},Ru={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var On=Symbol.for("react.element"),z1=Symbol.for("react.portal"),L1=Symbol.for("react.fragment"),M1=Symbol.for("react.strict_mode"),R1=Symbol.for("react.profiler"),N1=Symbol.for("react.provider"),O1=Symbol.for("react.context"),B1=Symbol.for("react.forward_ref"),D1=Symbol.for("react.suspense"),F1=Symbol.for("react.memo"),W1=Symbol.for("react.lazy"),Id=Symbol.iterator;function V1(e){return e===null||typeof e!="object"?null:(e=Id&&e[Id]||e["@@iterator"],typeof e=="function"?e:null)}var Nu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ou=Object.assign,Bu={};function $r(e,t,l){this.props=e,this.context=t,this.refs=Bu,this.updater=l||Nu}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Du(){}Du.prototype=$r.prototype;function h0(e,t,l){this.props=e,this.context=t,this.refs=Bu,this.updater=l||Nu}var p0=h0.prototype=new Du;p0.constructor=h0;Ou(p0,$r.prototype);p0.isPureReactComponent=!0;var jd=Array.isArray,Fu=Object.prototype.hasOwnProperty,m0={current:null},Wu={key:!0,ref:!0,__self:!0,__source:!0};function Vu(e,t,l){var r,n={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Fu.call(t,r)&&!Wu.hasOwnProperty(r)&&(n[r]=t[r]);var a=arguments.length-2;if(a===1)n.children=l;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];n.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)n[r]===void 0&&(n[r]=a[r]);return{$$typeof:On,type:e,key:i,ref:o,props:n,_owner:m0.current}}function H1(e,t){return{$$typeof:On,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function g0(e){return typeof e=="object"&&e!==null&&e.$$typeof===On}function U1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return t[l]})}var _d=/\/+/g;function ss(e,t){return typeof e=="object"&&e!==null&&e.key!=null?U1(""+e.key):t.toString(36)}function vi(e,t,l,r,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case On:case z1:o=!0}}if(o)return o=e,n=n(o),e=r===""?"."+ss(o,0):r,jd(n)?(l="",e!=null&&(l=e.replace(_d,"$&/")+"/"),vi(n,t,l,"",function(c){return c})):n!=null&&(g0(n)&&(n=H1(n,l+(!n.key||o&&o.key===n.key?"":(""+n.key).replace(_d,"$&/")+"/")+e)),t.push(n)),1;if(o=0,r=r===""?".":r+":",jd(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+ss(i,a);o+=vi(i,t,l,s,n)}else if(s=V1(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+ss(i,a++),o+=vi(i,t,l,s,n);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Xn(e,t,l){if(e==null)return e;var r=[],n=0;return vi(e,r,"","",function(i){return t.call(l,i,n++)}),r}function G1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},yi={transition:null},q1={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:yi,ReactCurrentOwner:m0};function Hu(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Xn,forEach:function(e,t,l){Xn(e,function(){t.apply(this,arguments)},l)},count:function(e){var t=0;return Xn(e,function(){t++}),t},toArray:function(e){return Xn(e,function(t){return t})||[]},only:function(e){if(!g0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=$r;V.Fragment=L1;V.Profiler=R1;V.PureComponent=h0;V.StrictMode=M1;V.Suspense=D1;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1;V.act=Hu;V.cloneElement=function(e,t,l){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ou({},e.props),n=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=m0.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Fu.call(t,s)&&!Wu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=l;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:On,type:e.type,key:n,ref:i,props:r,_owner:o}};V.createContext=function(e){return e={$$typeof:O1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:N1,_context:e},e.Consumer=e};V.createElement=Vu;V.createFactory=function(e){var t=Vu.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:B1,render:e}};V.isValidElement=g0;V.lazy=function(e){return{$$typeof:W1,_payload:{_status:-1,_result:e},_init:G1}};V.memo=function(e,t){return{$$typeof:F1,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=yi.transition;yi.transition={};try{e()}finally{yi.transition=t}};V.unstable_act=Hu;V.useCallback=function(e,t){return je.current.useCallback(e,t)};V.useContext=function(e){return je.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return je.current.useDeferredValue(e)};V.useEffect=function(e,t){return je.current.useEffect(e,t)};V.useId=function(){return je.current.useId()};V.useImperativeHandle=function(e,t,l){return je.current.useImperativeHandle(e,t,l)};V.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return je.current.useMemo(e,t)};V.useReducer=function(e,t,l){return je.current.useReducer(e,t,l)};V.useRef=function(e){return je.current.useRef(e)};V.useState=function(e){return je.current.useState(e)};V.useSyncExternalStore=function(e,t,l){return je.current.useSyncExternalStore(e,t,l)};V.useTransition=function(){return je.current.useTransition()};V.version="18.3.1";Ru.exports=V;var $=Ru.exports;const Y=_1($),Y1=j1({__proto__:null,default:Y},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K1=$,X1=Symbol.for("react.element"),Q1=Symbol.for("react.fragment"),J1=Object.prototype.hasOwnProperty,Z1=K1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,em={key:!0,ref:!0,__self:!0,__source:!0};function Uu(e,t,l){var r,n={},i=null,o=null;l!==void 0&&(i=""+l),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)J1.call(t,r)&&!em.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:X1,type:e,key:i,ref:o,props:n,_owner:Z1.current}}Ao.Fragment=Q1;Ao.jsx=Uu;Ao.jsxs=Uu;Mu.exports=Ao;var d=Mu.exports,Gu={exports:{}},Qe={},qu={exports:{}},Yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,M){var R=_.length;_.push(M);e:for(;0<R;){var H=R-1>>>1,q=_[H];if(0<n(q,M))_[H]=M,_[R]=q,R=H;else break e}}function l(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var M=_[0],R=_.pop();if(R!==M){_[0]=R;e:for(var H=0,q=_.length,bl=q>>>1;H<bl;){var st=2*(H+1)-1,Vt=_[st],We=st+1,At=_[We];if(0>n(Vt,R))We<q&&0>n(At,Vt)?(_[H]=At,_[We]=R,H=We):(_[H]=Vt,_[st]=R,H=st);else if(We<q&&0>n(At,R))_[H]=At,_[We]=R,H=We;else break e}}return M}function n(_,M){var R=_.sortIndex-M.sortIndex;return R!==0?R:_.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],u=1,f=null,m=3,v=!1,C=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var M=l(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=_)r(c),M.sortIndex=M.expirationTime,t(s,M);else break;M=l(c)}}function y(_){if(x=!1,p(_),!C)if(l(s)!==null)C=!0,Q(b);else{var M=l(c);M!==null&&Fe(y,M.startTime-_)}}function b(_,M){C=!1,x&&(x=!1,g(I),I=-1),v=!0;var R=m;try{for(p(M),f=l(s);f!==null&&(!(f.expirationTime>M)||_&&!j());){var H=f.callback;if(typeof H=="function"){f.callback=null,m=f.priorityLevel;var q=H(f.expirationTime<=M);M=e.unstable_now(),typeof q=="function"?f.callback=q:f===l(s)&&r(s),p(M)}else r(s);f=l(s)}if(f!==null)var bl=!0;else{var st=l(c);st!==null&&Fe(y,st.startTime-M),bl=!1}return bl}finally{f=null,m=R,v=!1}}var k=!1,E=null,I=-1,A=5,T=-1;function j(){return!(e.unstable_now()-T<A)}function N(){if(E!==null){var _=e.unstable_now();T=_;var M=!0;try{M=E(!0,_)}finally{M?L():(k=!1,E=null)}}else k=!1}var L;if(typeof h=="function")L=function(){h(N)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,D=B.port2;B.port1.onmessage=N,L=function(){D.postMessage(null)}}else L=function(){w(N,0)};function Q(_){E=_,k||(k=!0,L())}function Fe(_,M){I=w(function(){_(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){C||v||(C=!0,Q(b))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return l(s)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var R=m;m=M;try{return _()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,M){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=m;m=_;try{return M()}finally{m=R}},e.unstable_scheduleCallback=function(_,M,R){var H=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?H+R:H):R=H,_){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=R+q,_={id:u++,callback:M,priorityLevel:_,startTime:R,expirationTime:q,sortIndex:-1},R>H?(_.sortIndex=R,t(c,_),l(s)===null&&_===l(c)&&(x?(g(I),I=-1):x=!0,Fe(y,R-H))):(_.sortIndex=q,t(s,_),C||v||(C=!0,Q(b))),_},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(_){var M=m;return function(){var R=m;m=M;try{return _.apply(this,arguments)}finally{m=R}}}})(Yu);qu.exports=Yu;var tm=qu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=$,Ke=tm;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,l=1;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ku=new Set,Cn={};function Vl(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(Cn[e]=t,e=0;e<t.length;e++)Ku.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Js=Object.prototype.hasOwnProperty,rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zd={},Ld={};function nm(e){return Js.call(Ld,e)?!0:Js.call(zd,e)?!1:rm.test(e)?Ld[e]=!0:(zd[e]=!0,!1)}function im(e,t,l,r){if(l!==null&&l.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:l!==null?!l.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function om(e,t,l,r){if(t===null||typeof t>"u"||im(e,t,l,r))return!0;if(r)return!1;if(l!==null)switch(l.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,l,r,n,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=n,this.mustUseProperty=l,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var C0=/[\-:]([a-z])/g;function v0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(C0,v0);Se[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(C0,v0);Se[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(C0,v0);Se[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function y0(e,t,l,r){var n=Se.hasOwnProperty(t)?Se[t]:null;(n!==null?n.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(om(t,l,n,r)&&(l=null),r||n===null?nm(t)&&(l===null?e.removeAttribute(t):e.setAttribute(t,""+l)):n.mustUseProperty?e[n.propertyName]=l===null?n.type===3?!1:"":l:(t=n.attributeName,r=n.attributeNamespace,l===null?e.removeAttribute(t):(n=n.type,l=n===3||n===4&&l===!0?"":""+l,r?e.setAttributeNS(r,t,l):e.setAttribute(t,l))))}var Wt=lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qn=Symbol.for("react.element"),Kl=Symbol.for("react.portal"),Xl=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),Zs=Symbol.for("react.profiler"),Xu=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),w0=Symbol.for("react.forward_ref"),ea=Symbol.for("react.suspense"),ta=Symbol.for("react.suspense_list"),b0=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),Ju=Symbol.for("react.offscreen"),Md=Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=Md&&e[Md]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,as;function Jr(e){if(as===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);as=t&&t[1]||""}return`
`+as+e}var ds=!1;function cs(e,t){if(!e||ds)return"";ds=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var n=c.stack.split(`
`),i=r.stack.split(`
`),o=n.length-1,a=i.length-1;1<=o&&0<=a&&n[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(n[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||n[o]!==i[a]){var s=`
`+n[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{ds=!1,Error.prepareStackTrace=l}return(e=e?e.displayName||e.name:"")?Jr(e):""}function sm(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=cs(e.type,!1),e;case 11:return e=cs(e.type.render,!1),e;case 1:return e=cs(e.type,!0),e;default:return""}}function la(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xl:return"Fragment";case Kl:return"Portal";case Zs:return"Profiler";case x0:return"StrictMode";case ea:return"Suspense";case ta:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qu:return(e.displayName||"Context")+".Consumer";case Xu:return(e._context.displayName||"Context")+".Provider";case w0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case b0:return t=e.displayName||null,t!==null?t:la(e.type)||"Memo";case Kt:t=e._payload,e=e._init;try{return la(e(t))}catch{}}return null}function am(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return la(t);case 8:return t===x0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pl(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dm(e){var t=Zu(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jn(e){e._valueTracker||(e._valueTracker=dm(e))}function ef(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),r="";return e&&(r=Zu(e)?e.checked?"true":"false":e.value),e=r,e!==l?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ra(e,t){var l=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??e._wrapperState.initialChecked})}function Rd(e,t){var l=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;l=pl(t.value!=null?t.value:l),e._wrapperState={initialChecked:r,initialValue:l,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tf(e,t){t=t.checked,t!=null&&y0(e,"checked",t,!1)}function na(e,t){tf(e,t);var l=pl(t.value),r=t.type;if(l!=null)r==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+l):e.value!==""+l&&(e.value=""+l);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ia(e,t.type,l):t.hasOwnProperty("defaultValue")&&ia(e,t.type,pl(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nd(e,t,l){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,l||t===e.value||(e.value=t),e.defaultValue=t}l=e.name,l!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,l!==""&&(e.name=l)}function ia(e,t,l){(t!=="number"||Di(e.ownerDocument)!==e)&&(l==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+l&&(e.defaultValue=""+l))}var Zr=Array.isArray;function ar(e,t,l,r){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&r&&(e[l].defaultSelected=!0)}else{for(l=""+pl(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,r&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function oa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Od(e,t){var l=t.value;if(l==null){if(l=t.children,t=t.defaultValue,l!=null){if(t!=null)throw Error(z(92));if(Zr(l)){if(1<l.length)throw Error(z(93));l=l[0]}t=l}t==null&&(t=""),l=t}e._wrapperState={initialValue:pl(l)}}function lf(e,t){var l=pl(t.value),r=pl(t.defaultValue);l!=null&&(l=""+l,l!==e.value&&(e.value=l),t.defaultValue==null&&e.defaultValue!==l&&(e.defaultValue=l)),r!=null&&(e.defaultValue=""+r)}function Bd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zn,nf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,l,r,n){MSApp.execUnsafeLocalFunction(function(){return e(t,l,r,n)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zn=Zn||document.createElement("div"),Zn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vn(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cm=["Webkit","ms","Moz","O"];Object.keys(nn).forEach(function(e){cm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nn[t]=nn[e]})});function of(e,t,l){return t==null||typeof t=="boolean"||t===""?"":l||typeof t!="number"||t===0||nn.hasOwnProperty(e)&&nn[e]?(""+t).trim():t+"px"}function sf(e,t){e=e.style;for(var l in t)if(t.hasOwnProperty(l)){var r=l.indexOf("--")===0,n=of(l,t[l],r);l==="float"&&(l="cssFloat"),r?e.setProperty(l,n):e[l]=n}}var um=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function aa(e,t){if(t){if(um[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function da(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ca=null;function S0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,dr=null,cr=null;function Dd(e){if(e=Fn(e)){if(typeof ua!="function")throw Error(z(280));var t=e.stateNode;t&&(t=_o(t),ua(e.stateNode,e.type,t))}}function af(e){dr?cr?cr.push(e):cr=[e]:dr=e}function df(){if(dr){var e=dr,t=cr;if(cr=dr=null,Dd(e),t)for(e=0;e<t.length;e++)Dd(t[e])}}function cf(e,t){return e(t)}function uf(){}var us=!1;function ff(e,t,l){if(us)return e(t,l);us=!0;try{return cf(e,t,l)}finally{us=!1,(dr!==null||cr!==null)&&(uf(),df())}}function yn(e,t){var l=e.stateNode;if(l===null)return null;var r=_o(l);if(r===null)return null;l=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(z(231,t,typeof l));return l}var fa=!1;if(Ot)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){fa=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{fa=!1}function fm(e,t,l,r,n,i,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(l,c)}catch(u){this.onError(u)}}var on=!1,Fi=null,Wi=!1,ha=null,hm={onError:function(e){on=!0,Fi=e}};function pm(e,t,l,r,n,i,o,a,s){on=!1,Fi=null,fm.apply(hm,arguments)}function mm(e,t,l,r,n,i,o,a,s){if(pm.apply(this,arguments),on){if(on){var c=Fi;on=!1,Fi=null}else throw Error(z(198));Wi||(Wi=!0,ha=c)}}function Hl(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function hf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fd(e){if(Hl(e)!==e)throw Error(z(188))}function gm(e){var t=e.alternate;if(!t){if(t=Hl(e),t===null)throw Error(z(188));return t!==e?null:e}for(var l=e,r=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(r=n.return,r!==null){l=r;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return Fd(n),e;if(i===r)return Fd(n),t;i=i.sibling}throw Error(z(188))}if(l.return!==r.return)l=n,r=i;else{for(var o=!1,a=n.child;a;){if(a===l){o=!0,l=n,r=i;break}if(a===r){o=!0,r=n,l=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===l){o=!0,l=i,r=n;break}if(a===r){o=!0,r=i,l=n;break}a=a.sibling}if(!o)throw Error(z(189))}}if(l.alternate!==r)throw Error(z(190))}if(l.tag!==3)throw Error(z(188));return l.stateNode.current===l?e:t}function pf(e){return e=gm(e),e!==null?mf(e):null}function mf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mf(e);if(t!==null)return t;e=e.sibling}return null}var gf=Ke.unstable_scheduleCallback,Wd=Ke.unstable_cancelCallback,Cm=Ke.unstable_shouldYield,vm=Ke.unstable_requestPaint,ce=Ke.unstable_now,ym=Ke.unstable_getCurrentPriorityLevel,k0=Ke.unstable_ImmediatePriority,Cf=Ke.unstable_UserBlockingPriority,Vi=Ke.unstable_NormalPriority,xm=Ke.unstable_LowPriority,vf=Ke.unstable_IdlePriority,Po=null,St=null;function wm(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Po,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:km,bm=Math.log,Sm=Math.LN2;function km(e){return e>>>=0,e===0?32:31-(bm(e)/Sm|0)|0}var ei=64,ti=4194304;function en(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var l=e.pendingLanes;if(l===0)return 0;var r=0,n=e.suspendedLanes,i=e.pingedLanes,o=l&268435455;if(o!==0){var a=o&~n;a!==0?r=en(a):(i&=o,i!==0&&(r=en(i)))}else o=l&~n,o!==0?r=en(o):i!==0&&(r=en(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&n)&&(n=r&-r,i=t&-t,n>=i||n===16&&(i&4194240)!==0))return t;if(r&4&&(r|=l&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)l=31-ft(t),n=1<<l,r|=e[l],t&=~n;return r}function Tm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Em(e,t){for(var l=e.suspendedLanes,r=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ft(i),a=1<<o,s=n[o];s===-1?(!(a&l)||a&r)&&(n[o]=Tm(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yf(){var e=ei;return ei<<=1,!(ei&4194240)&&(ei=64),e}function fs(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Bn(e,t,l){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=l}function Am(e,t){var l=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<l;){var n=31-ft(l),i=1<<n;t[n]=0,r[n]=-1,e[n]=-1,l&=~i}}function T0(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var r=31-ft(l),n=1<<r;n&t|e[r]&t&&(e[r]|=t),l&=~n}}var X=0;function xf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wf,E0,bf,Sf,kf,ma=!1,li=[],nl=null,il=null,ol=null,xn=new Map,wn=new Map,Qt=[],Pm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vd(e,t){switch(e){case"focusin":case"focusout":nl=null;break;case"dragenter":case"dragleave":il=null;break;case"mouseover":case"mouseout":ol=null;break;case"pointerover":case"pointerout":xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(t.pointerId)}}function Vr(e,t,l,r,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:r,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Fn(t),t!==null&&E0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function $m(e,t,l,r,n){switch(t){case"focusin":return nl=Vr(nl,e,t,l,r,n),!0;case"dragenter":return il=Vr(il,e,t,l,r,n),!0;case"mouseover":return ol=Vr(ol,e,t,l,r,n),!0;case"pointerover":var i=n.pointerId;return xn.set(i,Vr(xn.get(i)||null,e,t,l,r,n)),!0;case"gotpointercapture":return i=n.pointerId,wn.set(i,Vr(wn.get(i)||null,e,t,l,r,n)),!0}return!1}function Tf(e){var t=El(e.target);if(t!==null){var l=Hl(t);if(l!==null){if(t=l.tag,t===13){if(t=hf(l),t!==null){e.blockedOn=t,kf(e.priority,function(){bf(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(l===null){l=e.nativeEvent;var r=new l.constructor(l.type,l);ca=r,l.target.dispatchEvent(r),ca=null}else return t=Fn(l),t!==null&&E0(t),e.blockedOn=l,!1;t.shift()}return!0}function Hd(e,t,l){xi(e)&&l.delete(t)}function Im(){ma=!1,nl!==null&&xi(nl)&&(nl=null),il!==null&&xi(il)&&(il=null),ol!==null&&xi(ol)&&(ol=null),xn.forEach(Hd),wn.forEach(Hd)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,ma||(ma=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Im)))}function bn(e){function t(n){return Hr(n,e)}if(0<li.length){Hr(li[0],e);for(var l=1;l<li.length;l++){var r=li[l];r.blockedOn===e&&(r.blockedOn=null)}}for(nl!==null&&Hr(nl,e),il!==null&&Hr(il,e),ol!==null&&Hr(ol,e),xn.forEach(t),wn.forEach(t),l=0;l<Qt.length;l++)r=Qt[l],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(l=Qt[0],l.blockedOn===null);)Tf(l),l.blockedOn===null&&Qt.shift()}var ur=Wt.ReactCurrentBatchConfig,Ui=!0;function jm(e,t,l,r){var n=X,i=ur.transition;ur.transition=null;try{X=1,A0(e,t,l,r)}finally{X=n,ur.transition=i}}function _m(e,t,l,r){var n=X,i=ur.transition;ur.transition=null;try{X=4,A0(e,t,l,r)}finally{X=n,ur.transition=i}}function A0(e,t,l,r){if(Ui){var n=ga(e,t,l,r);if(n===null)bs(e,t,r,Gi,l),Vd(e,r);else if($m(n,e,t,l,r))r.stopPropagation();else if(Vd(e,r),t&4&&-1<Pm.indexOf(e)){for(;n!==null;){var i=Fn(n);if(i!==null&&wf(i),i=ga(e,t,l,r),i===null&&bs(e,t,r,Gi,l),i===n)break;n=i}n!==null&&r.stopPropagation()}else bs(e,t,r,null,l)}}var Gi=null;function ga(e,t,l,r){if(Gi=null,e=S0(r),e=El(e),e!==null)if(t=Hl(e),t===null)e=null;else if(l=t.tag,l===13){if(e=hf(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function Ef(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ym()){case k0:return 1;case Cf:return 4;case Vi:case xm:return 16;case vf:return 536870912;default:return 16}default:return 16}}var Zt=null,P0=null,wi=null;function Af(){if(wi)return wi;var e,t=P0,l=t.length,r,n="value"in Zt?Zt.value:Zt.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var o=l-e;for(r=1;r<=o&&t[l-r]===n[i-r];r++);return wi=n.slice(e,1<r?1-r:void 0)}function bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ri(){return!0}function Ud(){return!1}function Je(e){function t(l,r,n,i,o){this._reactName=l,this._targetInst=n,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(l=e[a],this[a]=l?l(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ri:Ud,this.isPropagationStopped=Ud,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),t}var Ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$0=Je(Ir),Dn=oe({},Ir,{view:0,detail:0}),zm=Je(Dn),hs,ps,Ur,$o=oe({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:I0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(hs=e.screenX-Ur.screenX,ps=e.screenY-Ur.screenY):ps=hs=0,Ur=e),hs)},movementY:function(e){return"movementY"in e?e.movementY:ps}}),Gd=Je($o),Lm=oe({},$o,{dataTransfer:0}),Mm=Je(Lm),Rm=oe({},Dn,{relatedTarget:0}),ms=Je(Rm),Nm=oe({},Ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Om=Je(Nm),Bm=oe({},Ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dm=Je(Bm),Fm=oe({},Ir,{data:0}),qd=Je(Fm),Wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Um(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hm[e])?!!t[e]:!1}function I0(){return Um}var Gm=oe({},Dn,{key:function(e){if(e.key){var t=Wm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:I0,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qm=Je(Gm),Ym=oe({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=Je(Ym),Km=oe({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:I0}),Xm=Je(Km),Qm=oe({},Ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jm=Je(Qm),Zm=oe({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eg=Je(Zm),tg=[9,13,27,32],j0=Ot&&"CompositionEvent"in window,sn=null;Ot&&"documentMode"in document&&(sn=document.documentMode);var lg=Ot&&"TextEvent"in window&&!sn,Pf=Ot&&(!j0||sn&&8<sn&&11>=sn),Kd=" ",Xd=!1;function $f(e,t){switch(e){case"keyup":return tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ql=!1;function rg(e,t){switch(e){case"compositionend":return If(t);case"keypress":return t.which!==32?null:(Xd=!0,Kd);case"textInput":return e=t.data,e===Kd&&Xd?null:e;default:return null}}function ng(e,t){if(Ql)return e==="compositionend"||!j0&&$f(e,t)?(e=Af(),wi=P0=Zt=null,Ql=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pf&&t.locale!=="ko"?null:t.data;default:return null}}var ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ig[e.type]:t==="textarea"}function jf(e,t,l,r){af(r),t=qi(t,"onChange"),0<t.length&&(l=new $0("onChange","change",null,l,r),e.push({event:l,listeners:t}))}var an=null,Sn=null;function og(e){Wf(e,0)}function Io(e){var t=er(e);if(ef(t))return e}function sg(e,t){if(e==="change")return t}var _f=!1;if(Ot){var gs;if(Ot){var Cs="oninput"in document;if(!Cs){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),Cs=typeof Jd.oninput=="function"}gs=Cs}else gs=!1;_f=gs&&(!document.documentMode||9<document.documentMode)}function Zd(){an&&(an.detachEvent("onpropertychange",zf),Sn=an=null)}function zf(e){if(e.propertyName==="value"&&Io(Sn)){var t=[];jf(t,Sn,e,S0(e)),ff(og,t)}}function ag(e,t,l){e==="focusin"?(Zd(),an=t,Sn=l,an.attachEvent("onpropertychange",zf)):e==="focusout"&&Zd()}function dg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Io(Sn)}function cg(e,t){if(e==="click")return Io(t)}function ug(e,t){if(e==="input"||e==="change")return Io(t)}function fg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:fg;function kn(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),r=Object.keys(t);if(l.length!==r.length)return!1;for(r=0;r<l.length;r++){var n=l[r];if(!Js.call(t,n)||!mt(e[n],t[n]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tc(e,t){var l=ec(e);e=0;for(var r;l;){if(l.nodeType===3){if(r=e+l.textContent.length,e<=t&&r>=t)return{node:l,offset:t-e};e=r}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ec(l)}}function Lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mf(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Di(e.document)}return t}function _0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hg(e){var t=Mf(),l=e.focusedElem,r=e.selectionRange;if(t!==l&&l&&l.ownerDocument&&Lf(l.ownerDocument.documentElement,l)){if(r!==null&&_0(l)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in l)l.selectionStart=t,l.selectionEnd=Math.min(e,l.value.length);else if(e=(t=l.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var n=l.textContent.length,i=Math.min(r.start,n);r=r.end===void 0?i:Math.min(r.end,n),!e.extend&&i>r&&(n=r,r=i,i=n),n=tc(l,i);var o=tc(l,r);n&&o&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(n.node,n.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=l;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<t.length;l++)e=t[l],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pg=Ot&&"documentMode"in document&&11>=document.documentMode,Jl=null,Ca=null,dn=null,va=!1;function lc(e,t,l){var r=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;va||Jl==null||Jl!==Di(r)||(r=Jl,"selectionStart"in r&&_0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dn&&kn(dn,r)||(dn=r,r=qi(Ca,"onSelect"),0<r.length&&(t=new $0("onSelect","select",null,t,l),e.push({event:t,listeners:r}),t.target=Jl)))}function ni(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Zl={animationend:ni("Animation","AnimationEnd"),animationiteration:ni("Animation","AnimationIteration"),animationstart:ni("Animation","AnimationStart"),transitionend:ni("Transition","TransitionEnd")},vs={},Rf={};Ot&&(Rf=document.createElement("div").style,"AnimationEvent"in window||(delete Zl.animationend.animation,delete Zl.animationiteration.animation,delete Zl.animationstart.animation),"TransitionEvent"in window||delete Zl.transitionend.transition);function jo(e){if(vs[e])return vs[e];if(!Zl[e])return e;var t=Zl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Rf)return vs[e]=t[l];return e}var Nf=jo("animationend"),Of=jo("animationiteration"),Bf=jo("animationstart"),Df=jo("transitionend"),Ff=new Map,rc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cl(e,t){Ff.set(e,t),Vl(t,[e])}for(var ys=0;ys<rc.length;ys++){var xs=rc[ys],mg=xs.toLowerCase(),gg=xs[0].toUpperCase()+xs.slice(1);Cl(mg,"on"+gg)}Cl(Nf,"onAnimationEnd");Cl(Of,"onAnimationIteration");Cl(Bf,"onAnimationStart");Cl("dblclick","onDoubleClick");Cl("focusin","onFocus");Cl("focusout","onBlur");Cl(Df,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Vl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vl("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cg=new Set("cancel close invalid load scroll toggle".split(" ").concat(tn));function nc(e,t,l){var r=e.type||"unknown-event";e.currentTarget=l,mm(r,t,void 0,e),e.currentTarget=null}function Wf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var r=e[l],n=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&n.isPropagationStopped())break e;nc(n,a,c),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&n.isPropagationStopped())break e;nc(n,a,c),i=s}}}if(Wi)throw e=ha,Wi=!1,ha=null,e}function ee(e,t){var l=t[Sa];l===void 0&&(l=t[Sa]=new Set);var r=e+"__bubble";l.has(r)||(Vf(t,e,2,!1),l.add(r))}function ws(e,t,l){var r=0;t&&(r|=4),Vf(l,e,r,t)}var ii="_reactListening"+Math.random().toString(36).slice(2);function Tn(e){if(!e[ii]){e[ii]=!0,Ku.forEach(function(l){l!=="selectionchange"&&(Cg.has(l)||ws(l,!1,e),ws(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ii]||(t[ii]=!0,ws("selectionchange",!1,t))}}function Vf(e,t,l,r){switch(Ef(t)){case 1:var n=jm;break;case 4:n=_m;break;default:n=A0}l=n.bind(null,t,l,e),n=void 0,!fa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),r?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function bs(e,t,l,r,n){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===n||a.nodeType===8&&a.parentNode===n)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===n||s.nodeType===8&&s.parentNode===n))return;o=o.return}for(;a!==null;){if(o=El(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}ff(function(){var c=i,u=S0(l),f=[];e:{var m=Ff.get(e);if(m!==void 0){var v=$0,C=e;switch(e){case"keypress":if(bi(l)===0)break e;case"keydown":case"keyup":v=qm;break;case"focusin":C="focus",v=ms;break;case"focusout":C="blur",v=ms;break;case"beforeblur":case"afterblur":v=ms;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Xm;break;case Nf:case Of:case Bf:v=Om;break;case Df:v=Jm;break;case"scroll":v=zm;break;case"wheel":v=eg;break;case"copy":case"cut":case"paste":v=Dm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Yd}var x=(t&4)!==0,w=!x&&e==="scroll",g=x?m!==null?m+"Capture":null:m;x=[];for(var h=c,p;h!==null;){p=h;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,g!==null&&(y=yn(h,g),y!=null&&x.push(En(h,y,p)))),w)break;h=h.return}0<x.length&&(m=new v(m,C,null,l,u),f.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&l!==ca&&(C=l.relatedTarget||l.fromElement)&&(El(C)||C[Bt]))break e;if((v||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,v?(C=l.relatedTarget||l.toElement,v=c,C=C?El(C):null,C!==null&&(w=Hl(C),C!==w||C.tag!==5&&C.tag!==6)&&(C=null)):(v=null,C=c),v!==C)){if(x=Gd,y="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Yd,y="onPointerLeave",g="onPointerEnter",h="pointer"),w=v==null?m:er(v),p=C==null?m:er(C),m=new x(y,h+"leave",v,l,u),m.target=w,m.relatedTarget=p,y=null,El(u)===c&&(x=new x(g,h+"enter",C,l,u),x.target=p,x.relatedTarget=w,y=x),w=y,v&&C)t:{for(x=v,g=C,h=0,p=x;p;p=ql(p))h++;for(p=0,y=g;y;y=ql(y))p++;for(;0<h-p;)x=ql(x),h--;for(;0<p-h;)g=ql(g),p--;for(;h--;){if(x===g||g!==null&&x===g.alternate)break t;x=ql(x),g=ql(g)}x=null}else x=null;v!==null&&ic(f,m,v,x,!1),C!==null&&w!==null&&ic(f,w,C,x,!0)}}e:{if(m=c?er(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var b=sg;else if(Qd(m))if(_f)b=ug;else{b=dg;var k=ag}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=cg);if(b&&(b=b(e,c))){jf(f,b,l,u);break e}k&&k(e,m,c),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&ia(m,"number",m.value)}switch(k=c?er(c):window,e){case"focusin":(Qd(k)||k.contentEditable==="true")&&(Jl=k,Ca=c,dn=null);break;case"focusout":dn=Ca=Jl=null;break;case"mousedown":va=!0;break;case"contextmenu":case"mouseup":case"dragend":va=!1,lc(f,l,u);break;case"selectionchange":if(pg)break;case"keydown":case"keyup":lc(f,l,u)}var E;if(j0)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ql?$f(e,l)&&(I="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(I="onCompositionStart");I&&(Pf&&l.locale!=="ko"&&(Ql||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ql&&(E=Af()):(Zt=u,P0="value"in Zt?Zt.value:Zt.textContent,Ql=!0)),k=qi(c,I),0<k.length&&(I=new qd(I,e,null,l,u),f.push({event:I,listeners:k}),E?I.data=E:(E=If(l),E!==null&&(I.data=E)))),(E=lg?rg(e,l):ng(e,l))&&(c=qi(c,"onBeforeInput"),0<c.length&&(u=new qd("onBeforeInput","beforeinput",null,l,u),f.push({event:u,listeners:c}),u.data=E))}Wf(f,t)})}function En(e,t,l){return{instance:e,listener:t,currentTarget:l}}function qi(e,t){for(var l=t+"Capture",r=[];e!==null;){var n=e,i=n.stateNode;n.tag===5&&i!==null&&(n=i,i=yn(e,l),i!=null&&r.unshift(En(e,i,n)),i=yn(e,t),i!=null&&r.push(En(e,i,n))),e=e.return}return r}function ql(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ic(e,t,l,r,n){for(var i=t._reactName,o=[];l!==null&&l!==r;){var a=l,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,n?(s=yn(l,i),s!=null&&o.unshift(En(l,s,a))):n||(s=yn(l,i),s!=null&&o.push(En(l,s,a)))),l=l.return}o.length!==0&&e.push({event:t,listeners:o})}var vg=/\r\n?/g,yg=/\u0000|\uFFFD/g;function oc(e){return(typeof e=="string"?e:""+e).replace(vg,`
`).replace(yg,"")}function oi(e,t,l){if(t=oc(t),oc(e)!==t&&l)throw Error(z(425))}function Yi(){}var ya=null,xa=null;function wa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ba=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,sc=typeof Promise=="function"?Promise:void 0,wg=typeof queueMicrotask=="function"?queueMicrotask:typeof sc<"u"?function(e){return sc.resolve(null).then(e).catch(bg)}:ba;function bg(e){setTimeout(function(){throw e})}function Ss(e,t){var l=t,r=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(r===0){e.removeChild(n),bn(t);return}r--}else l!=="$"&&l!=="$?"&&l!=="$!"||r++;l=n}while(l);bn(t)}function sl(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ac(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),wt="__reactFiber$"+jr,An="__reactProps$"+jr,Bt="__reactContainer$"+jr,Sa="__reactEvents$"+jr,Sg="__reactListeners$"+jr,kg="__reactHandles$"+jr;function El(e){var t=e[wt];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Bt]||l[wt]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=ac(e);e!==null;){if(l=e[wt])return l;e=ac(e)}return t}e=l,l=e.parentNode}return null}function Fn(e){return e=e[wt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function _o(e){return e[An]||null}var ka=[],tr=-1;function vl(e){return{current:e}}function le(e){0>tr||(e.current=ka[tr],ka[tr]=null,tr--)}function Z(e,t){tr++,ka[tr]=e.current,e.current=t}var ml={},Ae=vl(ml),Re=vl(!1),Ml=ml;function gr(e,t){var l=e.type.contextTypes;if(!l)return ml;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var n={},i;for(i in l)n[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=n),n}function Ne(e){return e=e.childContextTypes,e!=null}function Ki(){le(Re),le(Ae)}function dc(e,t,l){if(Ae.current!==ml)throw Error(z(168));Z(Ae,t),Z(Re,l)}function Hf(e,t,l){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return l;r=r.getChildContext();for(var n in r)if(!(n in t))throw Error(z(108,am(e)||"Unknown",n));return oe({},l,r)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ml,Ml=Ae.current,Z(Ae,e),Z(Re,Re.current),!0}function cc(e,t,l){var r=e.stateNode;if(!r)throw Error(z(169));l?(e=Hf(e,t,Ml),r.__reactInternalMemoizedMergedChildContext=e,le(Re),le(Ae),Z(Ae,e)):le(Re),Z(Re,l)}var _t=null,zo=!1,ks=!1;function Uf(e){_t===null?_t=[e]:_t.push(e)}function Tg(e){zo=!0,Uf(e)}function yl(){if(!ks&&_t!==null){ks=!0;var e=0,t=X;try{var l=_t;for(X=1;e<l.length;e++){var r=l[e];do r=r(!0);while(r!==null)}_t=null,zo=!1}catch(n){throw _t!==null&&(_t=_t.slice(e+1)),gf(k0,yl),n}finally{X=t,ks=!1}}return null}var lr=[],rr=0,Qi=null,Ji=0,et=[],tt=0,Rl=null,zt=1,Lt="";function kl(e,t){lr[rr++]=Ji,lr[rr++]=Qi,Qi=e,Ji=t}function Gf(e,t,l){et[tt++]=zt,et[tt++]=Lt,et[tt++]=Rl,Rl=e;var r=zt;e=Lt;var n=32-ft(r)-1;r&=~(1<<n),l+=1;var i=32-ft(t)+n;if(30<i){var o=n-n%5;i=(r&(1<<o)-1).toString(32),r>>=o,n-=o,zt=1<<32-ft(t)+n|l<<n|r,Lt=i+e}else zt=1<<i|l<<n|r,Lt=e}function z0(e){e.return!==null&&(kl(e,1),Gf(e,1,0))}function L0(e){for(;e===Qi;)Qi=lr[--rr],lr[rr]=null,Ji=lr[--rr],lr[rr]=null;for(;e===Rl;)Rl=et[--tt],et[tt]=null,Lt=et[--tt],et[tt]=null,zt=et[--tt],et[tt]=null}var qe=null,Ge=null,re=!1,ut=null;function qf(e,t){var l=lt(5,null,null,0);l.elementType="DELETED",l.stateNode=t,l.return=e,t=e.deletions,t===null?(e.deletions=[l],e.flags|=16):t.push(l)}function uc(e,t){switch(e.tag){case 5:var l=e.type;return t=t.nodeType!==1||l.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ge=sl(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(l=Rl!==null?{id:zt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:l,retryLane:1073741824},l=lt(18,null,null,0),l.stateNode=t,l.return=e,e.child=l,qe=e,Ge=null,!0):!1;default:return!1}}function Ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if(re){var t=Ge;if(t){var l=t;if(!uc(e,t)){if(Ta(e))throw Error(z(418));t=sl(l.nextSibling);var r=qe;t&&uc(e,t)?qf(r,l):(e.flags=e.flags&-4097|2,re=!1,qe=e)}}else{if(Ta(e))throw Error(z(418));e.flags=e.flags&-4097|2,re=!1,qe=e}}}function fc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function si(e){if(e!==qe)return!1;if(!re)return fc(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wa(e.type,e.memoizedProps)),t&&(t=Ge)){if(Ta(e))throw Yf(),Error(z(418));for(;t;)qf(e,t),t=sl(t.nextSibling)}if(fc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"){if(t===0){Ge=sl(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=qe?sl(e.stateNode.nextSibling):null;return!0}function Yf(){for(var e=Ge;e;)e=sl(e.nextSibling)}function Cr(){Ge=qe=null,re=!1}function M0(e){ut===null?ut=[e]:ut.push(e)}var Eg=Wt.ReactCurrentBatchConfig;function Gr(e,t,l){if(e=l.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(z(309));var r=l.stateNode}if(!r)throw Error(z(147,e));var n=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=n.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!l._owner)throw Error(z(290,e))}return e}function ai(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hc(e){var t=e._init;return t(e._payload)}function Kf(e){function t(g,h){if(e){var p=g.deletions;p===null?(g.deletions=[h],g.flags|=16):p.push(h)}}function l(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function n(g,h){return g=ul(g,h),g.index=0,g.sibling=null,g}function i(g,h,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<h?(g.flags|=2,h):p):(g.flags|=2,h)):(g.flags|=1048576,h)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,p,y){return h===null||h.tag!==6?(h=js(p,g.mode,y),h.return=g,h):(h=n(h,p),h.return=g,h)}function s(g,h,p,y){var b=p.type;return b===Xl?u(g,h,p.props.children,y,p.key):h!==null&&(h.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kt&&hc(b)===h.type)?(y=n(h,p.props),y.ref=Gr(g,h,p),y.return=g,y):(y=$i(p.type,p.key,p.props,null,g.mode,y),y.ref=Gr(g,h,p),y.return=g,y)}function c(g,h,p,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=_s(p,g.mode,y),h.return=g,h):(h=n(h,p.children||[]),h.return=g,h)}function u(g,h,p,y,b){return h===null||h.tag!==7?(h=_l(p,g.mode,y,b),h.return=g,h):(h=n(h,p),h.return=g,h)}function f(g,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=js(""+h,g.mode,p),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qn:return p=$i(h.type,h.key,h.props,null,g.mode,p),p.ref=Gr(g,null,h),p.return=g,p;case Kl:return h=_s(h,g.mode,p),h.return=g,h;case Kt:var y=h._init;return f(g,y(h._payload),p)}if(Zr(h)||Fr(h))return h=_l(h,g.mode,p,null),h.return=g,h;ai(g,h)}return null}function m(g,h,p,y){var b=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:a(g,h,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qn:return p.key===b?s(g,h,p,y):null;case Kl:return p.key===b?c(g,h,p,y):null;case Kt:return b=p._init,m(g,h,b(p._payload),y)}if(Zr(p)||Fr(p))return b!==null?null:u(g,h,p,y,null);ai(g,p)}return null}function v(g,h,p,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(p)||null,a(h,g,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qn:return g=g.get(y.key===null?p:y.key)||null,s(h,g,y,b);case Kl:return g=g.get(y.key===null?p:y.key)||null,c(h,g,y,b);case Kt:var k=y._init;return v(g,h,p,k(y._payload),b)}if(Zr(y)||Fr(y))return g=g.get(p)||null,u(h,g,y,b,null);ai(h,y)}return null}function C(g,h,p,y){for(var b=null,k=null,E=h,I=h=0,A=null;E!==null&&I<p.length;I++){E.index>I?(A=E,E=null):A=E.sibling;var T=m(g,E,p[I],y);if(T===null){E===null&&(E=A);break}e&&E&&T.alternate===null&&t(g,E),h=i(T,h,I),k===null?b=T:k.sibling=T,k=T,E=A}if(I===p.length)return l(g,E),re&&kl(g,I),b;if(E===null){for(;I<p.length;I++)E=f(g,p[I],y),E!==null&&(h=i(E,h,I),k===null?b=E:k.sibling=E,k=E);return re&&kl(g,I),b}for(E=r(g,E);I<p.length;I++)A=v(E,g,I,p[I],y),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?I:A.key),h=i(A,h,I),k===null?b=A:k.sibling=A,k=A);return e&&E.forEach(function(j){return t(g,j)}),re&&kl(g,I),b}function x(g,h,p,y){var b=Fr(p);if(typeof b!="function")throw Error(z(150));if(p=b.call(p),p==null)throw Error(z(151));for(var k=b=null,E=h,I=h=0,A=null,T=p.next();E!==null&&!T.done;I++,T=p.next()){E.index>I?(A=E,E=null):A=E.sibling;var j=m(g,E,T.value,y);if(j===null){E===null&&(E=A);break}e&&E&&j.alternate===null&&t(g,E),h=i(j,h,I),k===null?b=j:k.sibling=j,k=j,E=A}if(T.done)return l(g,E),re&&kl(g,I),b;if(E===null){for(;!T.done;I++,T=p.next())T=f(g,T.value,y),T!==null&&(h=i(T,h,I),k===null?b=T:k.sibling=T,k=T);return re&&kl(g,I),b}for(E=r(g,E);!T.done;I++,T=p.next())T=v(E,g,I,T.value,y),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?I:T.key),h=i(T,h,I),k===null?b=T:k.sibling=T,k=T);return e&&E.forEach(function(N){return t(g,N)}),re&&kl(g,I),b}function w(g,h,p,y){if(typeof p=="object"&&p!==null&&p.type===Xl&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qn:e:{for(var b=p.key,k=h;k!==null;){if(k.key===b){if(b=p.type,b===Xl){if(k.tag===7){l(g,k.sibling),h=n(k,p.props.children),h.return=g,g=h;break e}}else if(k.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kt&&hc(b)===k.type){l(g,k.sibling),h=n(k,p.props),h.ref=Gr(g,k,p),h.return=g,g=h;break e}l(g,k);break}else t(g,k);k=k.sibling}p.type===Xl?(h=_l(p.props.children,g.mode,y,p.key),h.return=g,g=h):(y=$i(p.type,p.key,p.props,null,g.mode,y),y.ref=Gr(g,h,p),y.return=g,g=y)}return o(g);case Kl:e:{for(k=p.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){l(g,h.sibling),h=n(h,p.children||[]),h.return=g,g=h;break e}else{l(g,h);break}else t(g,h);h=h.sibling}h=_s(p,g.mode,y),h.return=g,g=h}return o(g);case Kt:return k=p._init,w(g,h,k(p._payload),y)}if(Zr(p))return C(g,h,p,y);if(Fr(p))return x(g,h,p,y);ai(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(l(g,h.sibling),h=n(h,p),h.return=g,g=h):(l(g,h),h=js(p,g.mode,y),h.return=g,g=h),o(g)):l(g,h)}return w}var vr=Kf(!0),Xf=Kf(!1),Zi=vl(null),eo=null,nr=null,R0=null;function N0(){R0=nr=eo=null}function O0(e){var t=Zi.current;le(Zi),e._currentValue=t}function Aa(e,t,l){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===l)break;e=e.return}}function fr(e,t){eo=e,R0=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(R0!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(eo===null)throw Error(z(308));nr=e,eo.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Al=null;function B0(e){Al===null?Al=[e]:Al.push(e)}function Qf(e,t,l,r){var n=t.interleaved;return n===null?(l.next=l,B0(t)):(l.next=n.next,n.next=l),t.interleaved=l,Dt(e,r)}function Dt(e,t){e.lanes|=t;var l=e.alternate;for(l!==null&&(l.lanes|=t),l=e,e=e.return;e!==null;)e.childLanes|=t,l=e.alternate,l!==null&&(l.childLanes|=t),l=e,e=e.return;return l.tag===3?l.stateNode:null}var Xt=!1;function D0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function al(e,t,l){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var n=r.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),r.pending=t,Dt(e,l)}return n=r.interleaved,n===null?(t.next=t,B0(r)):(t.next=n.next,n.next=t),r.interleaved=t,Dt(e,l)}function Si(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,l|=r,t.lanes=l,T0(e,l)}}function pc(e,t){var l=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,l===r)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var o={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};i===null?n=i=o:i=i.next=o,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:r.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}function to(e,t,l,r){var n=e.updateQueue;Xt=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,a=n.shared.pending;if(a!==null){n.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=s))}if(i!==null){var f=n.baseState;o=0,u=c=s=null,a=i;do{var m=a.lane,v=a.eventTime;if((r&m)===m){u!==null&&(u=u.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=e,x=a;switch(m=t,v=l,x.tag){case 1:if(C=x.payload,typeof C=="function"){f=C.call(v,f,m);break e}f=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=x.payload,m=typeof C=="function"?C.call(v,f,m):C,m==null)break e;f=oe({},f,m);break e;case 2:Xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=n.effects,m===null?n.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=v,s=f):u=u.next=v,o|=m;if(a=a.next,a===null){if(a=n.shared.pending,a===null)break;m=a,a=m.next,m.next=null,n.lastBaseUpdate=m,n.shared.pending=null}}while(!0);if(u===null&&(s=f),n.baseState=s,n.firstBaseUpdate=c,n.lastBaseUpdate=u,t=n.shared.interleaved,t!==null){n=t;do o|=n.lane,n=n.next;while(n!==t)}else i===null&&(n.shared.lanes=0);Ol|=o,e.lanes=o,e.memoizedState=f}}function mc(e,t,l){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],n=r.callback;if(n!==null){if(r.callback=null,r=l,typeof n!="function")throw Error(z(191,n));n.call(r)}}}var Wn={},kt=vl(Wn),Pn=vl(Wn),$n=vl(Wn);function Pl(e){if(e===Wn)throw Error(z(174));return e}function F0(e,t){switch(Z($n,t),Z(Pn,e),Z(kt,Wn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sa(t,e)}le(kt),Z(kt,t)}function yr(){le(kt),le(Pn),le($n)}function Zf(e){Pl($n.current);var t=Pl(kt.current),l=sa(t,e.type);t!==l&&(Z(Pn,e),Z(kt,l))}function W0(e){Pn.current===e&&(le(kt),le(Pn))}var ne=vl(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ts=[];function V0(){for(var e=0;e<Ts.length;e++)Ts[e]._workInProgressVersionPrimary=null;Ts.length=0}var ki=Wt.ReactCurrentDispatcher,Es=Wt.ReactCurrentBatchConfig,Nl=0,ie=null,pe=null,Ce=null,ro=!1,cn=!1,In=0,Ag=0;function ke(){throw Error(z(321))}function H0(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!mt(e[l],t[l]))return!1;return!0}function U0(e,t,l,r,n,i){if(Nl=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ki.current=e===null||e.memoizedState===null?jg:_g,e=l(r,n),cn){i=0;do{if(cn=!1,In=0,25<=i)throw Error(z(301));i+=1,Ce=pe=null,t.updateQueue=null,ki.current=zg,e=l(r,n)}while(cn)}if(ki.current=no,t=pe!==null&&pe.next!==null,Nl=0,Ce=pe=ie=null,ro=!1,t)throw Error(z(300));return e}function G0(){var e=In!==0;return In=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ie.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function it(){if(pe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=Ce===null?ie.memoizedState:Ce.next;if(t!==null)Ce=t,pe=e;else{if(e===null)throw Error(z(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ce===null?ie.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function jn(e,t){return typeof t=="function"?t(e):t}function As(e){var t=it(),l=t.queue;if(l===null)throw Error(z(311));l.lastRenderedReducer=e;var r=pe,n=r.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}r.baseQueue=n=i,l.pending=null}if(n!==null){i=n.next,r=r.baseState;var a=o=null,s=null,c=i;do{var u=c.lane;if((Nl&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=f,o=r):s=s.next=f,ie.lanes|=u,Ol|=u}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=a,mt(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,l.lastRenderedState=r}if(e=l.interleaved,e!==null){n=e;do i=n.lane,ie.lanes|=i,Ol|=i,n=n.next;while(n!==e)}else n===null&&(l.lanes=0);return[t.memoizedState,l.dispatch]}function Ps(e){var t=it(),l=t.queue;if(l===null)throw Error(z(311));l.lastRenderedReducer=e;var r=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);mt(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,r]}function eh(){}function th(e,t){var l=ie,r=it(),n=t(),i=!mt(r.memoizedState,n);if(i&&(r.memoizedState=n,Me=!0),r=r.queue,q0(nh.bind(null,l,r,e),[e]),r.getSnapshot!==t||i||Ce!==null&&Ce.memoizedState.tag&1){if(l.flags|=2048,_n(9,rh.bind(null,l,r,n,t),void 0,null),xe===null)throw Error(z(349));Nl&30||lh(l,t,n)}return n}function lh(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function rh(e,t,l,r){t.value=l,t.getSnapshot=r,ih(t)&&oh(e)}function nh(e,t,l){return l(function(){ih(t)&&oh(e)})}function ih(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!mt(e,l)}catch{return!0}}function oh(e){var t=Dt(e,1);t!==null&&ht(t,e,1,-1)}function gc(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t.queue=e,e=e.dispatch=Ig.bind(null,ie,e),[t.memoizedState,e]}function _n(e,t,l,r){return e={tag:e,create:t,destroy:l,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(l=t.lastEffect,l===null?t.lastEffect=e.next=e:(r=l.next,l.next=e,e.next=r,t.lastEffect=e)),e}function sh(){return it().memoizedState}function Ti(e,t,l,r){var n=yt();ie.flags|=e,n.memoizedState=_n(1|t,l,void 0,r===void 0?null:r)}function Lo(e,t,l,r){var n=it();r=r===void 0?null:r;var i=void 0;if(pe!==null){var o=pe.memoizedState;if(i=o.destroy,r!==null&&H0(r,o.deps)){n.memoizedState=_n(t,l,i,r);return}}ie.flags|=e,n.memoizedState=_n(1|t,l,i,r)}function Cc(e,t){return Ti(8390656,8,e,t)}function q0(e,t){return Lo(2048,8,e,t)}function ah(e,t){return Lo(4,2,e,t)}function dh(e,t){return Lo(4,4,e,t)}function ch(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uh(e,t,l){return l=l!=null?l.concat([e]):null,Lo(4,4,ch.bind(null,t,e),l)}function Y0(){}function fh(e,t){var l=it();t=t===void 0?null:t;var r=l.memoizedState;return r!==null&&t!==null&&H0(t,r[1])?r[0]:(l.memoizedState=[e,t],e)}function hh(e,t){var l=it();t=t===void 0?null:t;var r=l.memoizedState;return r!==null&&t!==null&&H0(t,r[1])?r[0]:(e=e(),l.memoizedState=[e,t],e)}function ph(e,t,l){return Nl&21?(mt(l,t)||(l=yf(),ie.lanes|=l,Ol|=l,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=l)}function Pg(e,t){var l=X;X=l!==0&&4>l?l:4,e(!0);var r=Es.transition;Es.transition={};try{e(!1),t()}finally{X=l,Es.transition=r}}function mh(){return it().memoizedState}function $g(e,t,l){var r=cl(e);if(l={lane:r,action:l,hasEagerState:!1,eagerState:null,next:null},gh(e))Ch(t,l);else if(l=Qf(e,t,l,r),l!==null){var n=Ie();ht(l,e,r,n),vh(l,t,r)}}function Ig(e,t,l){var r=cl(e),n={lane:r,action:l,hasEagerState:!1,eagerState:null,next:null};if(gh(e))Ch(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,l);if(n.hasEagerState=!0,n.eagerState=a,mt(a,o)){var s=t.interleaved;s===null?(n.next=n,B0(t)):(n.next=s.next,s.next=n),t.interleaved=n;return}}catch{}finally{}l=Qf(e,t,n,r),l!==null&&(n=Ie(),ht(l,e,r,n),vh(l,t,r))}}function gh(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Ch(e,t){cn=ro=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function vh(e,t,l){if(l&4194240){var r=t.lanes;r&=e.pendingLanes,l|=r,t.lanes=l,T0(e,l)}}var no={readContext:nt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},jg={readContext:nt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Cc,useImperativeHandle:function(e,t,l){return l=l!=null?l.concat([e]):null,Ti(4194308,4,ch.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Ti(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ti(4,2,e,t)},useMemo:function(e,t){var l=yt();return t=t===void 0?null:t,e=e(),l.memoizedState=[e,t],e},useReducer:function(e,t,l){var r=yt();return t=l!==void 0?l(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$g.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:gc,useDebugValue:Y0,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=gc(!1),t=e[0];return e=Pg.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,l){var r=ie,n=yt();if(re){if(l===void 0)throw Error(z(407));l=l()}else{if(l=t(),xe===null)throw Error(z(349));Nl&30||lh(r,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Cc(nh.bind(null,r,i,e),[e]),r.flags|=2048,_n(9,rh.bind(null,r,i,l,t),void 0,null),l},useId:function(){var e=yt(),t=xe.identifierPrefix;if(re){var l=Lt,r=zt;l=(r&~(1<<32-ft(r)-1)).toString(32)+l,t=":"+t+"R"+l,l=In++,0<l&&(t+="H"+l.toString(32)),t+=":"}else l=Ag++,t=":"+t+"r"+l.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_g={readContext:nt,useCallback:fh,useContext:nt,useEffect:q0,useImperativeHandle:uh,useInsertionEffect:ah,useLayoutEffect:dh,useMemo:hh,useReducer:As,useRef:sh,useState:function(){return As(jn)},useDebugValue:Y0,useDeferredValue:function(e){var t=it();return ph(t,pe.memoizedState,e)},useTransition:function(){var e=As(jn)[0],t=it().memoizedState;return[e,t]},useMutableSource:eh,useSyncExternalStore:th,useId:mh,unstable_isNewReconciler:!1},zg={readContext:nt,useCallback:fh,useContext:nt,useEffect:q0,useImperativeHandle:uh,useInsertionEffect:ah,useLayoutEffect:dh,useMemo:hh,useReducer:Ps,useRef:sh,useState:function(){return Ps(jn)},useDebugValue:Y0,useDeferredValue:function(e){var t=it();return pe===null?t.memoizedState=e:ph(t,pe.memoizedState,e)},useTransition:function(){var e=Ps(jn)[0],t=it().memoizedState;return[e,t]},useMutableSource:eh,useSyncExternalStore:th,useId:mh,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var l in e)t[l]===void 0&&(t[l]=e[l]);return t}return t}function Pa(e,t,l,r){t=e.memoizedState,l=l(r,t),l=l==null?t:oe({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Mo={isMounted:function(e){return(e=e._reactInternals)?Hl(e)===e:!1},enqueueSetState:function(e,t,l){e=e._reactInternals;var r=Ie(),n=cl(e),i=Rt(r,n);i.payload=t,l!=null&&(i.callback=l),t=al(e,i,n),t!==null&&(ht(t,e,n,r),Si(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var r=Ie(),n=cl(e),i=Rt(r,n);i.tag=1,i.payload=t,l!=null&&(i.callback=l),t=al(e,i,n),t!==null&&(ht(t,e,n,r),Si(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Ie(),r=cl(e),n=Rt(l,r);n.tag=2,t!=null&&(n.callback=t),t=al(e,n,r),t!==null&&(ht(t,e,r,l),Si(t,e,r))}};function vc(e,t,l,r,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!kn(l,r)||!kn(n,i):!0}function yh(e,t,l){var r=!1,n=ml,i=t.contextType;return typeof i=="object"&&i!==null?i=nt(i):(n=Ne(t)?Ml:Ae.current,r=t.contextTypes,i=(r=r!=null)?gr(e,n):ml),t=new t(l,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),t}function yc(e,t,l,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,r),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function $a(e,t,l,r){var n=e.stateNode;n.props=l,n.state=e.memoizedState,n.refs={},D0(e);var i=t.contextType;typeof i=="object"&&i!==null?n.context=nt(i):(i=Ne(t)?Ml:Ae.current,n.context=gr(e,i)),n.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Pa(e,t,i,l),n.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(t=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),t!==n.state&&Mo.enqueueReplaceState(n,n.state,null),to(e,l,n,r),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,t){try{var l="",r=t;do l+=sm(r),r=r.return;while(r);var n=l}catch(i){n=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:n,digest:null}}function $s(e,t,l){return{value:e,source:null,stack:l??null,digest:t??null}}function Ia(e,t){try{console.error(t.value)}catch(l){setTimeout(function(){throw l})}}var Lg=typeof WeakMap=="function"?WeakMap:Map;function xh(e,t,l){l=Rt(-1,l),l.tag=3,l.payload={element:null};var r=t.value;return l.callback=function(){oo||(oo=!0,Da=r),Ia(e,t)},l}function wh(e,t,l){l=Rt(-1,l),l.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var n=t.value;l.payload=function(){return r(n)},l.callback=function(){Ia(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){Ia(e,t),typeof r!="function"&&(dl===null?dl=new Set([this]):dl.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),l}function xc(e,t,l){var r=e.pingCache;if(r===null){r=e.pingCache=new Lg;var n=new Set;r.set(t,n)}else n=r.get(t),n===void 0&&(n=new Set,r.set(t,n));n.has(l)||(n.add(l),e=Yg.bind(null,e,t,l),t.then(e,e))}function wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bc(e,t,l,r,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===t?e.flags|=65536:(e.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(t=Rt(-1,1),t.tag=2,al(l,t,1))),l.lanes|=1),e)}var Mg=Wt.ReactCurrentOwner,Me=!1;function $e(e,t,l,r){t.child=e===null?Xf(t,null,l,r):vr(t,e.child,l,r)}function Sc(e,t,l,r,n){l=l.render;var i=t.ref;return fr(t,n),r=U0(e,t,l,r,i,n),l=G0(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,Ft(e,t,n)):(re&&l&&z0(t),t.flags|=1,$e(e,t,r,n),t.child)}function kc(e,t,l,r,n){if(e===null){var i=l.type;return typeof i=="function"&&!ld(i)&&i.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(t.tag=15,t.type=i,bh(e,t,i,r,n)):(e=$i(l.type,null,r,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&n)){var o=i.memoizedProps;if(l=l.compare,l=l!==null?l:kn,l(o,r)&&e.ref===t.ref)return Ft(e,t,n)}return t.flags|=1,e=ul(i,r),e.ref=t.ref,e.return=t,t.child=e}function bh(e,t,l,r,n){if(e!==null){var i=e.memoizedProps;if(kn(i,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=i,(e.lanes&n)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Ft(e,t,n)}return ja(e,t,l,r,n)}function Sh(e,t,l){var r=t.pendingProps,n=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(or,He),He|=l;else{if(!(l&1073741824))return e=i!==null?i.baseLanes|l:l,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(or,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:l,Z(or,He),He|=r}else i!==null?(r=i.baseLanes|l,t.memoizedState=null):r=l,Z(or,He),He|=r;return $e(e,t,n,l),t.child}function kh(e,t){var l=t.ref;(e===null&&l!==null||e!==null&&e.ref!==l)&&(t.flags|=512,t.flags|=2097152)}function ja(e,t,l,r,n){var i=Ne(l)?Ml:Ae.current;return i=gr(t,i),fr(t,n),l=U0(e,t,l,r,i,n),r=G0(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,Ft(e,t,n)):(re&&r&&z0(t),t.flags|=1,$e(e,t,l,n),t.child)}function Tc(e,t,l,r,n){if(Ne(l)){var i=!0;Xi(t)}else i=!1;if(fr(t,n),t.stateNode===null)Ei(e,t),yh(t,l,r),$a(t,l,r,n),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,c=l.contextType;typeof c=="object"&&c!==null?c=nt(c):(c=Ne(l)?Ml:Ae.current,c=gr(t,c));var u=l.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&yc(t,o,r,c),Xt=!1;var m=t.memoizedState;o.state=m,to(t,r,o,n),s=t.memoizedState,a!==r||m!==s||Re.current||Xt?(typeof u=="function"&&(Pa(t,l,u,r),s=t.memoizedState),(a=Xt||vc(t,l,a,r,m,s,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Jf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:dt(t.type,a),o.props=c,f=t.pendingProps,m=o.context,s=l.contextType,typeof s=="object"&&s!==null?s=nt(s):(s=Ne(l)?Ml:Ae.current,s=gr(t,s));var v=l.getDerivedStateFromProps;(u=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==s)&&yc(t,o,r,s),Xt=!1,m=t.memoizedState,o.state=m,to(t,r,o,n);var C=t.memoizedState;a!==f||m!==C||Re.current||Xt?(typeof v=="function"&&(Pa(t,l,v,r),C=t.memoizedState),(c=Xt||vc(t,l,c,r,m,C,s)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),o.props=r,o.state=C,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return _a(e,t,l,r,i,n)}function _a(e,t,l,r,n,i){kh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return n&&cc(t,l,!1),Ft(e,t,i);r=t.stateNode,Mg.current=t;var a=o&&typeof l.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=vr(t,e.child,null,i),t.child=vr(t,null,a,i)):$e(e,t,a,i),t.memoizedState=r.state,n&&cc(t,l,!0),t.child}function Th(e){var t=e.stateNode;t.pendingContext?dc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dc(e,t.context,!1),F0(e,t.containerInfo)}function Ec(e,t,l,r,n){return Cr(),M0(n),t.flags|=256,$e(e,t,l,r),t.child}var za={dehydrated:null,treeContext:null,retryLane:0};function La(e){return{baseLanes:e,cachePool:null,transitions:null}}function Eh(e,t,l){var r=t.pendingProps,n=ne.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(n&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),Z(ne,n&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Oo(o,r,0,null),e=_l(e,r,l,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=La(l),t.memoizedState=za,e):K0(t,o));if(n=e.memoizedState,n!==null&&(a=n.dehydrated,a!==null))return Rg(e,t,o,r,a,n,l);if(i){i=r.fallback,o=t.mode,n=e.child,a=n.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==n?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ul(n,s),r.subtreeFlags=n.subtreeFlags&14680064),a!==null?i=ul(a,i):(i=_l(i,o,l,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?La(l):{baseLanes:o.baseLanes|l,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~l,t.memoizedState=za,r}return i=e.child,e=i.sibling,r=ul(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=l),r.return=t,r.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=r,t.memoizedState=null,r}function K0(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function di(e,t,l,r){return r!==null&&M0(r),vr(t,e.child,null,l),e=K0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rg(e,t,l,r,n,i,o){if(l)return t.flags&256?(t.flags&=-257,r=$s(Error(z(422))),di(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,n=t.mode,r=Oo({mode:"visible",children:r.children},n,0,null),i=_l(i,n,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&vr(t,e.child,null,o),t.child.memoizedState=La(o),t.memoizedState=za,i);if(!(t.mode&1))return di(e,t,o,null);if(n.data==="$!"){if(r=n.nextSibling&&n.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(z(419)),r=$s(i,r,void 0),di(e,t,o,r)}if(a=(o&e.childLanes)!==0,Me||a){if(r=xe,r!==null){switch(o&-o){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(r.suspendedLanes|o)?0:n,n!==0&&n!==i.retryLane&&(i.retryLane=n,Dt(e,n),ht(r,e,n,-1))}return td(),r=$s(Error(z(421))),di(e,t,o,r)}return n.data==="$?"?(t.flags|=128,t.child=e.child,t=Kg.bind(null,e),n._reactRetry=t,null):(e=i.treeContext,Ge=sl(n.nextSibling),qe=t,re=!0,ut=null,e!==null&&(et[tt++]=zt,et[tt++]=Lt,et[tt++]=Rl,zt=e.id,Lt=e.overflow,Rl=t),t=K0(t,r.children),t.flags|=4096,t)}function Ac(e,t,l){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Aa(e.return,t,l)}function Is(e,t,l,r,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:l,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=l,i.tailMode=n)}function Ah(e,t,l){var r=t.pendingProps,n=r.revealOrder,i=r.tail;if($e(e,t,r.children,l),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,l,t);else if(e.tag===19)Ac(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(ne,r),!(t.mode&1))t.memoizedState=null;else switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&lo(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Is(t,!1,n,l,i);break;case"backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&lo(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Is(t,!0,l,null,i);break;case"together":Is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ei(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Ol|=t.lanes,!(l&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,l=ul(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=ul(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Ng(e,t,l){switch(t.tag){case 3:Th(t),Cr();break;case 5:Zf(t);break;case 1:Ne(t.type)&&Xi(t);break;case 4:F0(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,n=t.memoizedProps.value;Z(Zi,r._currentValue),r._currentValue=n;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(ne,ne.current&1),t.flags|=128,null):l&t.child.childLanes?Eh(e,t,l):(Z(ne,ne.current&1),e=Ft(e,t,l),e!==null?e.sibling:null);Z(ne,ne.current&1);break;case 19:if(r=(l&t.childLanes)!==0,e.flags&128){if(r)return Ah(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Z(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Sh(e,t,l)}return Ft(e,t,l)}var Ph,Ma,$h,Ih;Ph=function(e,t){for(var l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return;l=l.return}l.sibling.return=l.return,l=l.sibling}};Ma=function(){};$h=function(e,t,l,r){var n=e.memoizedProps;if(n!==r){e=t.stateNode,Pl(kt.current);var i=null;switch(l){case"input":n=ra(e,n),r=ra(e,r),i=[];break;case"select":n=oe({},n,{value:void 0}),r=oe({},r,{value:void 0}),i=[];break;case"textarea":n=oa(e,n),r=oa(e,r),i=[];break;default:typeof n.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}aa(l,r);var o;l=null;for(c in n)if(!r.hasOwnProperty(c)&&n.hasOwnProperty(c)&&n[c]!=null)if(c==="style"){var a=n[c];for(o in a)a.hasOwnProperty(o)&&(l||(l={}),l[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Cn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=n!=null?n[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(l||(l={}),l[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(l||(l={}),l[o]=s[o])}else l||(i||(i=[]),i.push(c,l)),l=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Cn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ee("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}l&&(i=i||[]).push("style",l);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Ih=function(e,t,l,r){l!==r&&(t.flags|=4)};function qr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var r=null;l!==null;)l.alternate!==null&&(r=l),l=l.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,r=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,r|=n.subtreeFlags&14680064,r|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,r|=n.subtreeFlags,r|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=r,e.childLanes=l,t}function Og(e,t,l){var r=t.pendingProps;switch(L0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ne(t.type)&&Ki(),Te(t),null;case 3:return r=t.stateNode,yr(),le(Re),le(Ae),V0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(Va(ut),ut=null))),Ma(e,t),Te(t),null;case 5:W0(t);var n=Pl($n.current);if(l=t.type,e!==null&&t.stateNode!=null)$h(e,t,l,r,n),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Te(t),null}if(e=Pl(kt.current),si(t)){r=t.stateNode,l=t.type;var i=t.memoizedProps;switch(r[wt]=t,r[An]=i,e=(t.mode&1)!==0,l){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(n=0;n<tn.length;n++)ee(tn[n],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Rd(r,i),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ee("invalid",r);break;case"textarea":Od(r,i),ee("invalid",r)}aa(l,i),n=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&oi(r.textContent,a,e),n=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&oi(r.textContent,a,e),n=["children",""+a]):Cn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(l){case"input":Jn(r),Nd(r,i,!0);break;case"textarea":Jn(r),Bd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yi)}r=n,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rf(l)),e==="http://www.w3.org/1999/xhtml"?l==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(l,{is:r.is}):(e=o.createElement(l),l==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,l),e[wt]=t,e[An]=r,Ph(e,t,!1,!1),t.stateNode=e;e:{switch(o=da(l,r),l){case"dialog":ee("cancel",e),ee("close",e),n=r;break;case"iframe":case"object":case"embed":ee("load",e),n=r;break;case"video":case"audio":for(n=0;n<tn.length;n++)ee(tn[n],e);n=r;break;case"source":ee("error",e),n=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),n=r;break;case"details":ee("toggle",e),n=r;break;case"input":Rd(e,r),n=ra(e,r),ee("invalid",e);break;case"option":n=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},n=oe({},r,{value:void 0}),ee("invalid",e);break;case"textarea":Od(e,r),n=oa(e,r),ee("invalid",e);break;default:n=r}aa(l,n),a=n;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?sf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&nf(e,s)):i==="children"?typeof s=="string"?(l!=="textarea"||s!=="")&&vn(e,s):typeof s=="number"&&vn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Cn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ee("scroll",e):s!=null&&y0(e,i,s,o))}switch(l){case"input":Jn(e),Nd(e,r,!1);break;case"textarea":Jn(e),Bd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pl(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ar(e,!!r.multiple,i,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=Yi)}switch(l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Ih(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(l=Pl($n.current),Pl(kt.current),si(t)){if(r=t.stateNode,l=t.memoizedProps,r[wt]=t,(i=r.nodeValue!==l)&&(e=qe,e!==null))switch(e.tag){case 3:oi(r.nodeValue,l,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oi(r.nodeValue,l,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(l.nodeType===9?l:l.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Te(t),null;case 13:if(le(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ge!==null&&t.mode&1&&!(t.flags&128))Yf(),Cr(),t.flags|=98560,i=!1;else if(i=si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[wt]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else ut!==null&&(Va(ut),ut=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=l,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?me===0&&(me=3):td())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return yr(),Ma(e,t),e===null&&Tn(t.stateNode.containerInfo),Te(t),null;case 10:return O0(t.type._context),Te(t),null;case 17:return Ne(t.type)&&Ki(),Te(t),null;case 19:if(le(ne),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)qr(i,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=lo(e),o!==null){for(t.flags|=128,qr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=l,l=t.child;l!==null;)i=l,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),l=l.sibling;return Z(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>wr&&(t.flags|=128,r=!0,qr(i,!1),t.lanes=4194304)}else{if(!r)if(e=lo(o),e!==null){if(t.flags|=128,r=!0,l=e.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),qr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!re)return Te(t),null}else 2*ce()-i.renderingStartTime>wr&&l!==1073741824&&(t.flags|=128,r=!0,qr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(l=i.last,l!==null?l.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,l=ne.current,Z(ne,r?l&1|2:l&1),t):(Te(t),null);case 22:case 23:return ed(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Bg(e,t){switch(L0(t),t.tag){case 1:return Ne(t.type)&&Ki(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),le(Re),le(Ae),V0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return W0(t),null;case 13:if(le(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(ne),null;case 4:return yr(),null;case 10:return O0(t.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var ci=!1,Ee=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,O=null;function ir(e,t){var l=e.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(r){se(e,t,r)}else l.current=null}function Ra(e,t,l){try{l()}catch(r){se(e,t,r)}}var Pc=!1;function Fg(e,t){if(ya=Ui,e=Mf(),_0(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var r=l.getSelection&&l.getSelection();if(r&&r.rangeCount!==0){l=r.anchorNode;var n=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var o=0,a=-1,s=-1,c=0,u=0,f=e,m=null;t:for(;;){for(var v;f!==l||n!==0&&f.nodeType!==3||(a=o+n),f!==i||r!==0&&f.nodeType!==3||(s=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===l&&++c===n&&(a=o),m===i&&++u===r&&(s=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}l=a===-1||s===-1?null:{start:a,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(xa={focusedElem:e,selectionRange:l},Ui=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var x=C.memoizedProps,w=C.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:dt(t.type,x),w);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(y){se(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return C=Pc,Pc=!1,C}function un(e,t,l){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var i=n.destroy;n.destroy=void 0,i!==void 0&&Ra(t,l,i)}n=n.next}while(n!==r)}}function Ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var l=t=t.next;do{if((l.tag&e)===e){var r=l.create;l.destroy=r()}l=l.next}while(l!==t)}}function Na(e){var t=e.ref;if(t!==null){var l=e.stateNode;switch(e.tag){case 5:e=l;break;default:e=l}typeof t=="function"?t(e):t.current=e}}function jh(e){var t=e.alternate;t!==null&&(e.alternate=null,jh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[An],delete t[Sa],delete t[Sg],delete t[kg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _h(e){return e.tag===5||e.tag===3||e.tag===4}function $c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_h(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oa(e,t,l){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?l.nodeType===8?l.parentNode.insertBefore(e,t):l.insertBefore(e,t):(l.nodeType===8?(t=l.parentNode,t.insertBefore(e,l)):(t=l,t.appendChild(e)),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(Oa(e,t,l),e=e.sibling;e!==null;)Oa(e,t,l),e=e.sibling}function Ba(e,t,l){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ba(e,t,l),e=e.sibling;e!==null;)Ba(e,t,l),e=e.sibling}var we=null,ct=!1;function Ut(e,t,l){for(l=l.child;l!==null;)zh(e,t,l),l=l.sibling}function zh(e,t,l){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Po,l)}catch{}switch(l.tag){case 5:Ee||ir(l,t);case 6:var r=we,n=ct;we=null,Ut(e,t,l),we=r,ct=n,we!==null&&(ct?(e=we,l=l.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)):we.removeChild(l.stateNode));break;case 18:we!==null&&(ct?(e=we,l=l.stateNode,e.nodeType===8?Ss(e.parentNode,l):e.nodeType===1&&Ss(e,l),bn(e)):Ss(we,l.stateNode));break;case 4:r=we,n=ct,we=l.stateNode.containerInfo,ct=!0,Ut(e,t,l),we=r,ct=n;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=l.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){n=r=r.next;do{var i=n,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ra(l,t,o),n=n.next}while(n!==r)}Ut(e,t,l);break;case 1:if(!Ee&&(ir(l,t),r=l.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=l.memoizedProps,r.state=l.memoizedState,r.componentWillUnmount()}catch(a){se(l,t,a)}Ut(e,t,l);break;case 21:Ut(e,t,l);break;case 22:l.mode&1?(Ee=(r=Ee)||l.memoizedState!==null,Ut(e,t,l),Ee=r):Ut(e,t,l);break;default:Ut(e,t,l)}}function Ic(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var l=e.stateNode;l===null&&(l=e.stateNode=new Dg),t.forEach(function(r){var n=Xg.bind(null,e,r);l.has(r)||(l.add(r),r.then(n,n))})}}function at(e,t){var l=t.deletions;if(l!==null)for(var r=0;r<l.length;r++){var n=l[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,ct=!1;break e;case 3:we=a.stateNode.containerInfo,ct=!0;break e;case 4:we=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(we===null)throw Error(z(160));zh(i,o,n),we=null,ct=!1;var s=n.alternate;s!==null&&(s.return=null),n.return=null}catch(c){se(n,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lh(t,e),t=t.sibling}function Lh(e,t){var l=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),vt(e),r&4){try{un(3,e,e.return),Ro(3,e)}catch(x){se(e,e.return,x)}try{un(5,e,e.return)}catch(x){se(e,e.return,x)}}break;case 1:at(t,e),vt(e),r&512&&l!==null&&ir(l,l.return);break;case 5:if(at(t,e),vt(e),r&512&&l!==null&&ir(l,l.return),e.flags&32){var n=e.stateNode;try{vn(n,"")}catch(x){se(e,e.return,x)}}if(r&4&&(n=e.stateNode,n!=null)){var i=e.memoizedProps,o=l!==null?l.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&tf(n,i),da(a,o);var c=da(a,i);for(o=0;o<s.length;o+=2){var u=s[o],f=s[o+1];u==="style"?sf(n,f):u==="dangerouslySetInnerHTML"?nf(n,f):u==="children"?vn(n,f):y0(n,u,f,c)}switch(a){case"input":na(n,i);break;case"textarea":lf(n,i);break;case"select":var m=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?ar(n,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?ar(n,!!i.multiple,i.defaultValue,!0):ar(n,!!i.multiple,i.multiple?[]:"",!1))}n[An]=i}catch(x){se(e,e.return,x)}}break;case 6:if(at(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(z(162));n=e.stateNode,i=e.memoizedProps;try{n.nodeValue=i}catch(x){se(e,e.return,x)}}break;case 3:if(at(t,e),vt(e),r&4&&l!==null&&l.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(x){se(e,e.return,x)}break;case 4:at(t,e),vt(e);break;case 13:at(t,e),vt(e),n=e.child,n.flags&8192&&(i=n.memoizedState!==null,n.stateNode.isHidden=i,!i||n.alternate!==null&&n.alternate.memoizedState!==null||(J0=ce())),r&4&&Ic(e);break;case 22:if(u=l!==null&&l.memoizedState!==null,e.mode&1?(Ee=(c=Ee)||u,at(t,e),Ee=c):at(t,e),vt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(f=O=u;O!==null;){switch(m=O,v=m.child,m.tag){case 0:case 11:case 14:case 15:un(4,m,m.return);break;case 1:ir(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,l=m.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(x){se(r,l,x)}}break;case 5:ir(m,m.return);break;case 22:if(m.memoizedState!==null){_c(f);continue}}v!==null?(v.return=m,O=v):_c(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{n=f.stateNode,c?(i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,s=f.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=of("display",o))}catch(x){se(e,e.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){se(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:at(t,e),vt(e),r&4&&Ic(e);break;case 21:break;default:at(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var l=e.return;l!==null;){if(_h(l)){var r=l;break e}l=l.return}throw Error(z(160))}switch(r.tag){case 5:var n=r.stateNode;r.flags&32&&(vn(n,""),r.flags&=-33);var i=$c(e);Ba(e,i,n);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$c(e);Oa(e,a,o);break;default:throw Error(z(161))}}catch(s){se(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wg(e,t,l){O=e,Mh(e)}function Mh(e,t,l){for(var r=(e.mode&1)!==0;O!==null;){var n=O,i=n.child;if(n.tag===22&&r){var o=n.memoizedState!==null||ci;if(!o){var a=n.alternate,s=a!==null&&a.memoizedState!==null||Ee;a=ci;var c=Ee;if(ci=o,(Ee=s)&&!c)for(O=n;O!==null;)o=O,s=o.child,o.tag===22&&o.memoizedState!==null?zc(n):s!==null?(s.return=o,O=s):zc(n);for(;i!==null;)O=i,Mh(i),i=i.sibling;O=n,ci=a,Ee=c}jc(e)}else n.subtreeFlags&8772&&i!==null?(i.return=n,O=i):jc(e)}}function jc(e){for(;O!==null;){var t=O;if(t.flags&8772){var l=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||Ro(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(l===null)r.componentDidMount();else{var n=t.elementType===t.type?l.memoizedProps:dt(t.type,l.memoizedProps);r.componentDidUpdate(n,l.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&mc(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(l=null,t.child!==null)switch(t.child.tag){case 5:l=t.child.stateNode;break;case 1:l=t.child.stateNode}mc(t,o,l)}break;case 5:var a=t.stateNode;if(l===null&&t.flags&4){l=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break;case"img":s.src&&(l.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&bn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ee||t.flags&512&&Na(t)}catch(m){se(t,t.return,m)}}if(t===e){O=null;break}if(l=t.sibling,l!==null){l.return=t.return,O=l;break}O=t.return}}function _c(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}function zc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var l=t.return;try{Ro(4,t)}catch(s){se(t,l,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var n=t.return;try{r.componentDidMount()}catch(s){se(t,n,s)}}var i=t.return;try{Na(t)}catch(s){se(t,i,s)}break;case 5:var o=t.return;try{Na(t)}catch(s){se(t,o,s)}}}catch(s){se(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Vg=Math.ceil,io=Wt.ReactCurrentDispatcher,X0=Wt.ReactCurrentOwner,rt=Wt.ReactCurrentBatchConfig,G=0,xe=null,fe=null,be=0,He=0,or=vl(0),me=0,zn=null,Ol=0,No=0,Q0=0,fn=null,Le=null,J0=0,wr=1/0,It=null,oo=!1,Da=null,dl=null,ui=!1,el=null,so=0,hn=0,Fa=null,Ai=-1,Pi=0;function Ie(){return G&6?ce():Ai!==-1?Ai:Ai=ce()}function cl(e){return e.mode&1?G&2&&be!==0?be&-be:Eg.transition!==null?(Pi===0&&(Pi=yf()),Pi):(e=X,e!==0||(e=window.event,e=e===void 0?16:Ef(e.type)),e):1}function ht(e,t,l,r){if(50<hn)throw hn=0,Fa=null,Error(z(185));Bn(e,l,r),(!(G&2)||e!==xe)&&(e===xe&&(!(G&2)&&(No|=l),me===4&&Jt(e,be)),Oe(e,r),l===1&&G===0&&!(t.mode&1)&&(wr=ce()+500,zo&&yl()))}function Oe(e,t){var l=e.callbackNode;Em(e,t);var r=Hi(e,e===xe?be:0);if(r===0)l!==null&&Wd(l),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(l!=null&&Wd(l),t===1)e.tag===0?Tg(Lc.bind(null,e)):Uf(Lc.bind(null,e)),wg(function(){!(G&6)&&yl()}),l=null;else{switch(xf(r)){case 1:l=k0;break;case 4:l=Cf;break;case 16:l=Vi;break;case 536870912:l=vf;break;default:l=Vi}l=Vh(l,Rh.bind(null,e))}e.callbackPriority=t,e.callbackNode=l}}function Rh(e,t){if(Ai=-1,Pi=0,G&6)throw Error(z(327));var l=e.callbackNode;if(hr()&&e.callbackNode!==l)return null;var r=Hi(e,e===xe?be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var n=G;G|=2;var i=Oh();(xe!==e||be!==t)&&(It=null,wr=ce()+500,jl(e,t));do try{Gg();break}catch(a){Nh(e,a)}while(!0);N0(),io.current=i,G=n,fe!==null?t=0:(xe=null,be=0,t=me)}if(t!==0){if(t===2&&(n=pa(e),n!==0&&(r=n,t=Wa(e,n))),t===1)throw l=zn,jl(e,0),Jt(e,r),Oe(e,ce()),l;if(t===6)Jt(e,r);else{if(n=e.current.alternate,!(r&30)&&!Hg(n)&&(t=ao(e,r),t===2&&(i=pa(e),i!==0&&(r=i,t=Wa(e,i))),t===1))throw l=zn,jl(e,0),Jt(e,r),Oe(e,ce()),l;switch(e.finishedWork=n,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Tl(e,Le,It);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=J0+500-ce(),10<t)){if(Hi(e,0)!==0)break;if(n=e.suspendedLanes,(n&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=ba(Tl.bind(null,e,Le,It),t);break}Tl(e,Le,It);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,n=-1;0<r;){var o=31-ft(r);i=1<<o,o=t[o],o>n&&(n=o),r&=~i}if(r=n,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vg(r/1960))-r,10<r){e.timeoutHandle=ba(Tl.bind(null,e,Le,It),r);break}Tl(e,Le,It);break;case 5:Tl(e,Le,It);break;default:throw Error(z(329))}}}return Oe(e,ce()),e.callbackNode===l?Rh.bind(null,e):null}function Wa(e,t){var l=fn;return e.current.memoizedState.isDehydrated&&(jl(e,t).flags|=256),e=ao(e,t),e!==2&&(t=Le,Le=l,t!==null&&Va(t)),e}function Va(e){Le===null?Le=e:Le.push.apply(Le,e)}function Hg(e){for(var t=e;;){if(t.flags&16384){var l=t.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var r=0;r<l.length;r++){var n=l[r],i=n.getSnapshot;n=n.value;try{if(!mt(i(),n))return!1}catch{return!1}}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~Q0,t&=~No,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var l=31-ft(t),r=1<<l;e[l]=-1,t&=~r}}function Lc(e){if(G&6)throw Error(z(327));hr();var t=Hi(e,0);if(!(t&1))return Oe(e,ce()),null;var l=ao(e,t);if(e.tag!==0&&l===2){var r=pa(e);r!==0&&(t=r,l=Wa(e,r))}if(l===1)throw l=zn,jl(e,0),Jt(e,t),Oe(e,ce()),l;if(l===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tl(e,Le,It),Oe(e,ce()),null}function Z0(e,t){var l=G;G|=1;try{return e(t)}finally{G=l,G===0&&(wr=ce()+500,zo&&yl())}}function Bl(e){el!==null&&el.tag===0&&!(G&6)&&hr();var t=G;G|=1;var l=rt.transition,r=X;try{if(rt.transition=null,X=1,e)return e()}finally{X=r,rt.transition=l,G=t,!(G&6)&&yl()}}function ed(){He=or.current,le(or)}function jl(e,t){e.finishedWork=null,e.finishedLanes=0;var l=e.timeoutHandle;if(l!==-1&&(e.timeoutHandle=-1,xg(l)),fe!==null)for(l=fe.return;l!==null;){var r=l;switch(L0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ki();break;case 3:yr(),le(Re),le(Ae),V0();break;case 5:W0(r);break;case 4:yr();break;case 13:le(ne);break;case 19:le(ne);break;case 10:O0(r.type._context);break;case 22:case 23:ed()}l=l.return}if(xe=e,fe=e=ul(e.current,null),be=He=t,me=0,zn=null,Q0=No=Ol=0,Le=fn=null,Al!==null){for(t=0;t<Al.length;t++)if(l=Al[t],r=l.interleaved,r!==null){l.interleaved=null;var n=r.next,i=l.pending;if(i!==null){var o=i.next;i.next=n,r.next=o}l.pending=r}Al=null}return e}function Nh(e,t){do{var l=fe;try{if(N0(),ki.current=no,ro){for(var r=ie.memoizedState;r!==null;){var n=r.queue;n!==null&&(n.pending=null),r=r.next}ro=!1}if(Nl=0,Ce=pe=ie=null,cn=!1,In=0,X0.current=null,l===null||l.return===null){me=1,zn=t,fe=null;break}e:{var i=e,o=l.return,a=l,s=t;if(t=be,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=wc(o);if(v!==null){v.flags&=-257,bc(v,o,a,i,t),v.mode&1&&xc(i,c,t),t=v,s=c;var C=t.updateQueue;if(C===null){var x=new Set;x.add(s),t.updateQueue=x}else C.add(s);break e}else{if(!(t&1)){xc(i,c,t),td();break e}s=Error(z(426))}}else if(re&&a.mode&1){var w=wc(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),bc(w,o,a,i,t),M0(xr(s,a));break e}}i=s=xr(s,a),me!==4&&(me=2),fn===null?fn=[i]:fn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=xh(i,s,t);pc(i,g);break e;case 1:a=s;var h=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dl===null||!dl.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=wh(i,a,t);pc(i,y);break e}}i=i.return}while(i!==null)}Dh(l)}catch(b){t=b,fe===l&&l!==null&&(fe=l=l.return);continue}break}while(!0)}function Oh(){var e=io.current;return io.current=no,e===null?no:e}function td(){(me===0||me===3||me===2)&&(me=4),xe===null||!(Ol&268435455)&&!(No&268435455)||Jt(xe,be)}function ao(e,t){var l=G;G|=2;var r=Oh();(xe!==e||be!==t)&&(It=null,jl(e,t));do try{Ug();break}catch(n){Nh(e,n)}while(!0);if(N0(),G=l,io.current=r,fe!==null)throw Error(z(261));return xe=null,be=0,me}function Ug(){for(;fe!==null;)Bh(fe)}function Gg(){for(;fe!==null&&!Cm();)Bh(fe)}function Bh(e){var t=Wh(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?Dh(e):fe=t,X0.current=null}function Dh(e){var t=e;do{var l=t.alternate;if(e=t.return,t.flags&32768){if(l=Bg(l,t),l!==null){l.flags&=32767,fe=l;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,fe=null;return}}else if(l=Og(l,t,He),l!==null){fe=l;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);me===0&&(me=5)}function Tl(e,t,l){var r=X,n=rt.transition;try{rt.transition=null,X=1,qg(e,t,l,r)}finally{rt.transition=n,X=r}return null}function qg(e,t,l,r){do hr();while(el!==null);if(G&6)throw Error(z(327));l=e.finishedWork;var n=e.finishedLanes;if(l===null)return null;if(e.finishedWork=null,e.finishedLanes=0,l===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=l.lanes|l.childLanes;if(Am(e,i),e===xe&&(fe=xe=null,be=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||ui||(ui=!0,Vh(Vi,function(){return hr(),null})),i=(l.flags&15990)!==0,l.subtreeFlags&15990||i){i=rt.transition,rt.transition=null;var o=X;X=1;var a=G;G|=4,X0.current=null,Fg(e,l),Lh(l,e),hg(xa),Ui=!!ya,xa=ya=null,e.current=l,Wg(l),vm(),G=a,X=o,rt.transition=i}else e.current=l;if(ui&&(ui=!1,el=e,so=n),i=e.pendingLanes,i===0&&(dl=null),wm(l.stateNode),Oe(e,ce()),t!==null)for(r=e.onRecoverableError,l=0;l<t.length;l++)n=t[l],r(n.value,{componentStack:n.stack,digest:n.digest});if(oo)throw oo=!1,e=Da,Da=null,e;return so&1&&e.tag!==0&&hr(),i=e.pendingLanes,i&1?e===Fa?hn++:(hn=0,Fa=e):hn=0,yl(),null}function hr(){if(el!==null){var e=xf(so),t=rt.transition,l=X;try{if(rt.transition=null,X=16>e?16:e,el===null)var r=!1;else{if(e=el,el=null,so=0,G&6)throw Error(z(331));var n=G;for(G|=4,O=e.current;O!==null;){var i=O,o=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(O=c;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:un(8,u,i)}var f=u.child;if(f!==null)f.return=u,O=f;else for(;O!==null;){u=O;var m=u.sibling,v=u.return;if(jh(u),u===c){O=null;break}if(m!==null){m.return=v,O=m;break}O=v}}}var C=i.alternate;if(C!==null){var x=C.child;if(x!==null){C.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}O=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,O=o;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:un(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,O=g;break e}O=i.return}}var h=e.current;for(O=h;O!==null;){o=O;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,O=p;else e:for(o=h;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ro(9,a)}}catch(b){se(a,a.return,b)}if(a===o){O=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,O=y;break e}O=a.return}}if(G=n,yl(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Po,e)}catch{}r=!0}return r}finally{X=l,rt.transition=t}}return!1}function Mc(e,t,l){t=xr(l,t),t=xh(e,t,1),e=al(e,t,1),t=Ie(),e!==null&&(Bn(e,1,t),Oe(e,t))}function se(e,t,l){if(e.tag===3)Mc(e,e,l);else for(;t!==null;){if(t.tag===3){Mc(t,e,l);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dl===null||!dl.has(r))){e=xr(l,e),e=wh(t,e,1),t=al(t,e,1),e=Ie(),t!==null&&(Bn(t,1,e),Oe(t,e));break}}t=t.return}}function Yg(e,t,l){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&l,xe===e&&(be&l)===l&&(me===4||me===3&&(be&130023424)===be&&500>ce()-J0?jl(e,0):Q0|=l),Oe(e,t)}function Fh(e,t){t===0&&(e.mode&1?(t=ti,ti<<=1,!(ti&130023424)&&(ti=4194304)):t=1);var l=Ie();e=Dt(e,t),e!==null&&(Bn(e,t,l),Oe(e,l))}function Kg(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Fh(e,l)}function Xg(e,t){var l=0;switch(e.tag){case 13:var r=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Fh(e,l)}var Wh;Wh=function(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Me=!0;else{if(!(e.lanes&l)&&!(t.flags&128))return Me=!1,Ng(e,t,l);Me=!!(e.flags&131072)}else Me=!1,re&&t.flags&1048576&&Gf(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ei(e,t),e=t.pendingProps;var n=gr(t,Ae.current);fr(t,l),n=U0(null,t,r,e,n,l);var i=G0();return t.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,Xi(t)):i=!1,t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,D0(t),n.updater=Mo,t.stateNode=n,n._reactInternals=t,$a(t,r,e,l),t=_a(null,t,r,!0,i,l)):(t.tag=0,re&&i&&z0(t),$e(null,t,n,l),t=t.child),t;case 16:r=t.elementType;e:{switch(Ei(e,t),e=t.pendingProps,n=r._init,r=n(r._payload),t.type=r,n=t.tag=Jg(r),e=dt(r,e),n){case 0:t=ja(null,t,r,e,l);break e;case 1:t=Tc(null,t,r,e,l);break e;case 11:t=Sc(null,t,r,e,l);break e;case 14:t=kc(null,t,r,dt(r.type,e),l);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,n=t.pendingProps,n=t.elementType===r?n:dt(r,n),ja(e,t,r,n,l);case 1:return r=t.type,n=t.pendingProps,n=t.elementType===r?n:dt(r,n),Tc(e,t,r,n,l);case 3:e:{if(Th(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,n=i.element,Jf(e,t),to(t,r,null,l);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){n=xr(Error(z(423)),t),t=Ec(e,t,r,l,n);break e}else if(r!==n){n=xr(Error(z(424)),t),t=Ec(e,t,r,l,n);break e}else for(Ge=sl(t.stateNode.containerInfo.firstChild),qe=t,re=!0,ut=null,l=Xf(t,null,r,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Cr(),r===n){t=Ft(e,t,l);break e}$e(e,t,r,l)}t=t.child}return t;case 5:return Zf(t),e===null&&Ea(t),r=t.type,n=t.pendingProps,i=e!==null?e.memoizedProps:null,o=n.children,wa(r,n)?o=null:i!==null&&wa(r,i)&&(t.flags|=32),kh(e,t),$e(e,t,o,l),t.child;case 6:return e===null&&Ea(t),null;case 13:return Eh(e,t,l);case 4:return F0(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,l):$e(e,t,r,l),t.child;case 11:return r=t.type,n=t.pendingProps,n=t.elementType===r?n:dt(r,n),Sc(e,t,r,n,l);case 7:return $e(e,t,t.pendingProps,l),t.child;case 8:return $e(e,t,t.pendingProps.children,l),t.child;case 12:return $e(e,t,t.pendingProps.children,l),t.child;case 10:e:{if(r=t.type._context,n=t.pendingProps,i=t.memoizedProps,o=n.value,Z(Zi,r._currentValue),r._currentValue=o,i!==null)if(mt(i.value,o)){if(i.children===n.children&&!Re.current){t=Ft(e,t,l);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Rt(-1,l&-l),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),Aa(i.return,l,t),a.lanes|=l;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(z(341));o.lanes|=l,a=o.alternate,a!==null&&(a.lanes|=l),Aa(o,l,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}$e(e,t,n.children,l),t=t.child}return t;case 9:return n=t.type,r=t.pendingProps.children,fr(t,l),n=nt(n),r=r(n),t.flags|=1,$e(e,t,r,l),t.child;case 14:return r=t.type,n=dt(r,t.pendingProps),n=dt(r.type,n),kc(e,t,r,n,l);case 15:return bh(e,t,t.type,t.pendingProps,l);case 17:return r=t.type,n=t.pendingProps,n=t.elementType===r?n:dt(r,n),Ei(e,t),t.tag=1,Ne(r)?(e=!0,Xi(t)):e=!1,fr(t,l),yh(t,r,n),$a(t,r,n,l),_a(null,t,r,!0,e,l);case 19:return Ah(e,t,l);case 22:return Sh(e,t,l)}throw Error(z(156,t.tag))};function Vh(e,t){return gf(e,t)}function Qg(e,t,l,r){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,l,r){return new Qg(e,t,l,r)}function ld(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jg(e){if(typeof e=="function")return ld(e)?1:0;if(e!=null){if(e=e.$$typeof,e===w0)return 11;if(e===b0)return 14}return 2}function ul(e,t){var l=e.alternate;return l===null?(l=lt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&14680064,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l}function $i(e,t,l,r,n,i){var o=2;if(r=e,typeof e=="function")ld(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Xl:return _l(l.children,n,i,t);case x0:o=8,n|=8;break;case Zs:return e=lt(12,l,t,n|2),e.elementType=Zs,e.lanes=i,e;case ea:return e=lt(13,l,t,n),e.elementType=ea,e.lanes=i,e;case ta:return e=lt(19,l,t,n),e.elementType=ta,e.lanes=i,e;case Ju:return Oo(l,n,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xu:o=10;break e;case Qu:o=9;break e;case w0:o=11;break e;case b0:o=14;break e;case Kt:o=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=lt(o,l,t,n),t.elementType=e,t.type=r,t.lanes=i,t}function _l(e,t,l,r){return e=lt(7,e,r,t),e.lanes=l,e}function Oo(e,t,l,r){return e=lt(22,e,r,t),e.elementType=Ju,e.lanes=l,e.stateNode={isHidden:!1},e}function js(e,t,l){return e=lt(6,e,null,t),e.lanes=l,e}function _s(e,t,l){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zg(e,t,l,r,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fs(0),this.expirationTimes=fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fs(0),this.identifierPrefix=r,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function rd(e,t,l,r,n,i,o,a,s){return e=new Zg(e,t,l,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=lt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},D0(i),e}function eC(e,t,l){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kl,key:r==null?null:""+r,children:e,containerInfo:t,implementation:l}}function Hh(e){if(!e)return ml;e=e._reactInternals;e:{if(Hl(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var l=e.type;if(Ne(l))return Hf(e,l,t)}return t}function Uh(e,t,l,r,n,i,o,a,s){return e=rd(l,r,!0,e,n,i,o,a,s),e.context=Hh(null),l=e.current,r=Ie(),n=cl(l),i=Rt(r,n),i.callback=t??null,al(l,i,n),e.current.lanes=n,Bn(e,n,r),Oe(e,r),e}function Bo(e,t,l,r){var n=t.current,i=Ie(),o=cl(n);return l=Hh(l),t.context===null?t.context=l:t.pendingContext=l,t=Rt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=al(n,t,o),e!==null&&(ht(e,n,o,i),Si(e,n,o)),o}function co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function nd(e,t){Rc(e,t),(e=e.alternate)&&Rc(e,t)}function tC(){return null}var Gh=typeof reportError=="function"?reportError:function(e){console.error(e)};function id(e){this._internalRoot=e}Do.prototype.render=id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Bo(e,t,null,null)};Do.prototype.unmount=id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bl(function(){Bo(null,e,null,null)}),t[Bt]=null}};function Do(e){this._internalRoot=e}Do.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Qt.length&&t!==0&&t<Qt[l].priority;l++);Qt.splice(l,0,e),l===0&&Tf(e)}};function od(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nc(){}function lC(e,t,l,r,n){if(n){if(typeof r=="function"){var i=r;r=function(){var c=co(o);i.call(c)}}var o=Uh(t,r,e,0,null,!1,!1,"",Nc);return e._reactRootContainer=o,e[Bt]=o.current,Tn(e.nodeType===8?e.parentNode:e),Bl(),o}for(;n=e.lastChild;)e.removeChild(n);if(typeof r=="function"){var a=r;r=function(){var c=co(s);a.call(c)}}var s=rd(e,0,!1,null,null,!1,!1,"",Nc);return e._reactRootContainer=s,e[Bt]=s.current,Tn(e.nodeType===8?e.parentNode:e),Bl(function(){Bo(t,s,l,r)}),s}function Wo(e,t,l,r,n){var i=l._reactRootContainer;if(i){var o=i;if(typeof n=="function"){var a=n;n=function(){var s=co(o);a.call(s)}}Bo(t,o,e,n)}else o=lC(l,t,e,n,r);return co(o)}wf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var l=en(t.pendingLanes);l!==0&&(T0(t,l|1),Oe(t,ce()),!(G&6)&&(wr=ce()+500,yl()))}break;case 13:Bl(function(){var r=Dt(e,1);if(r!==null){var n=Ie();ht(r,e,1,n)}}),nd(e,1)}};E0=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var l=Ie();ht(t,e,134217728,l)}nd(e,134217728)}};bf=function(e){if(e.tag===13){var t=cl(e),l=Dt(e,t);if(l!==null){var r=Ie();ht(l,e,t,r)}nd(e,t)}};Sf=function(){return X};kf=function(e,t){var l=X;try{return X=e,t()}finally{X=l}};ua=function(e,t,l){switch(t){case"input":if(na(e,l),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<l.length;t++){var r=l[t];if(r!==e&&r.form===e.form){var n=_o(r);if(!n)throw Error(z(90));ef(r),na(r,n)}}}break;case"textarea":lf(e,l);break;case"select":t=l.value,t!=null&&ar(e,!!l.multiple,t,!1)}};cf=Z0;uf=Bl;var rC={usingClientEntryPoint:!1,Events:[Fn,er,_o,af,df,Z0]},Yr={findFiberByHostInstance:El,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nC={bundleType:Yr.bundleType,version:Yr.version,rendererPackageName:Yr.rendererPackageName,rendererConfig:Yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pf(e),e===null?null:e.stateNode},findFiberByHostInstance:Yr.findFiberByHostInstance||tC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fi.isDisabled&&fi.supportsFiber)try{Po=fi.inject(nC),St=fi}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rC;Qe.createPortal=function(e,t){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(t))throw Error(z(200));return eC(e,t,null,l)};Qe.createRoot=function(e,t){if(!od(e))throw Error(z(299));var l=!1,r="",n=Gh;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=rd(e,1,!1,null,null,l,!1,r,n),e[Bt]=t.current,Tn(e.nodeType===8?e.parentNode:e),new id(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=pf(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Bl(e)};Qe.hydrate=function(e,t,l){if(!Fo(t))throw Error(z(200));return Wo(null,e,t,!0,l)};Qe.hydrateRoot=function(e,t,l){if(!od(e))throw Error(z(405));var r=l!=null&&l.hydratedSources||null,n=!1,i="",o=Gh;if(l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onRecoverableError!==void 0&&(o=l.onRecoverableError)),t=Uh(t,null,e,1,l??null,n,!1,i,o),e[Bt]=t.current,Tn(e),r)for(e=0;e<r.length;e++)l=r[e],n=l._getVersion,n=n(l._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[l,n]:t.mutableSourceEagerHydrationData.push(l,n);return new Do(t)};Qe.render=function(e,t,l){if(!Fo(t))throw Error(z(200));return Wo(null,e,t,!1,l)};Qe.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(z(40));return e._reactRootContainer?(Bl(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Z0;Qe.unstable_renderSubtreeIntoContainer=function(e,t,l,r){if(!Fo(l))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Wo(e,t,l,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function qh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qh)}catch(e){console.error(e)}}qh(),Gu.exports=Qe;var iC=Gu.exports,Yh,Oc=iC;Yh=Oc.createRoot,Oc.hydrateRoot;const oC="modulepreload",sC=function(e){return"/"+e},Bc={},aC=function(t,l,r){let n=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(l.map(s=>{if(s=sC(s),s in Bc)return;Bc[s]=!0;const c=s.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":oC,c||(f.as="script"),f.crossOrigin="",f.href=s,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,v)=>{f.addEventListener("load",m),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${s}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return n.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var ye=function(){return ye=Object.assign||function(t){for(var l,r=1,n=arguments.length;r<n;r++){l=arguments[r];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i])}return t},ye.apply(this,arguments)};function br(e,t,l){if(l||arguments.length===2)for(var r=0,n=t.length,i;r<n;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var te="-ms-",pn="-moz-",K="-webkit-",Kh="comm",Vo="rule",sd="decl",dC="@import",Xh="@keyframes",cC="@layer",Qh=Math.abs,ad=String.fromCharCode,Ha=Object.assign;function uC(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function Jh(e){return e.trim()}function jt(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,l){return e.replace(t,l)}function Ii(e,t,l){return e.indexOf(t,l)}function ve(e,t){return e.charCodeAt(t)|0}function Sr(e,t,l){return e.slice(t,l)}function xt(e){return e.length}function Zh(e){return e.length}function ln(e,t){return t.push(e),e}function fC(e,t){return e.map(t).join("")}function Dc(e,t){return e.filter(function(l){return!jt(l,t)})}var Ho=1,kr=1,ep=0,ot=0,ue=0,_r="";function Uo(e,t,l,r,n,i,o,a){return{value:e,root:t,parent:l,type:r,props:n,children:i,line:Ho,column:kr,length:o,return:"",siblings:a}}function Yt(e,t){return Ha(Uo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Yl(e){for(;e.root;)e=Yt(e.root,{children:[e]});ln(e,e.siblings)}function hC(){return ue}function pC(){return ue=ot>0?ve(_r,--ot):0,kr--,ue===10&&(kr=1,Ho--),ue}function pt(){return ue=ot<ep?ve(_r,ot++):0,kr++,ue===10&&(kr=1,Ho++),ue}function zl(){return ve(_r,ot)}function ji(){return ot}function Go(e,t){return Sr(_r,e,t)}function Ua(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mC(e){return Ho=kr=1,ep=xt(_r=e),ot=0,[]}function gC(e){return _r="",e}function zs(e){return Jh(Go(ot-1,Ga(e===91?e+2:e===40?e+1:e)))}function CC(e){for(;(ue=zl())&&ue<33;)pt();return Ua(e)>2||Ua(ue)>3?"":" "}function vC(e,t){for(;--t&&pt()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return Go(e,ji()+(t<6&&zl()==32&&pt()==32))}function Ga(e){for(;pt();)switch(ue){case e:return ot;case 34:case 39:e!==34&&e!==39&&Ga(ue);break;case 40:e===41&&Ga(e);break;case 92:pt();break}return ot}function yC(e,t){for(;pt()&&e+ue!==57;)if(e+ue===84&&zl()===47)break;return"/*"+Go(t,ot-1)+"*"+ad(e===47?e:pt())}function xC(e){for(;!Ua(zl());)pt();return Go(e,ot)}function wC(e){return gC(_i("",null,null,null,[""],e=mC(e),0,[0],e))}function _i(e,t,l,r,n,i,o,a,s){for(var c=0,u=0,f=o,m=0,v=0,C=0,x=1,w=1,g=1,h=0,p="",y=n,b=i,k=r,E=p;w;)switch(C=h,h=pt()){case 40:if(C!=108&&ve(E,f-1)==58){Ii(E+=W(zs(h),"&","&\f"),"&\f",Qh(c?a[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:E+=zs(h);break;case 9:case 10:case 13:case 32:E+=CC(C);break;case 92:E+=vC(ji()-1,7);continue;case 47:switch(zl()){case 42:case 47:ln(bC(yC(pt(),ji()),t,l,s),s);break;default:E+="/"}break;case 123*x:a[c++]=xt(E)*g;case 125*x:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+u:g==-1&&(E=W(E,/\f/g,"")),v>0&&xt(E)-f&&ln(v>32?Wc(E+";",r,l,f-1,s):Wc(W(E," ","")+";",r,l,f-2,s),s);break;case 59:E+=";";default:if(ln(k=Fc(E,t,l,c,u,n,a,p,y=[],b=[],f,i),i),h===123)if(u===0)_i(E,t,k,k,y,i,f,a,b);else switch(m===99&&ve(E,3)===110?100:m){case 100:case 108:case 109:case 115:_i(e,k,k,r&&ln(Fc(e,k,k,0,0,n,a,p,n,y=[],f,b),b),n,b,f,a,r?y:b);break;default:_i(E,k,k,k,[""],b,0,a,b)}}c=u=v=0,x=g=1,p=E="",f=o;break;case 58:f=1+xt(E),v=C;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&pC()==125)continue}switch(E+=ad(h),h*x){case 38:g=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(xt(E)-1)*g,g=1;break;case 64:zl()===45&&(E+=zs(pt())),m=zl(),u=f=xt(p=E+=xC(ji())),h++;break;case 45:C===45&&xt(E)==2&&(x=0)}}return i}function Fc(e,t,l,r,n,i,o,a,s,c,u,f){for(var m=n-1,v=n===0?i:[""],C=Zh(v),x=0,w=0,g=0;x<r;++x)for(var h=0,p=Sr(e,m+1,m=Qh(w=o[x])),y=e;h<C;++h)(y=Jh(w>0?v[h]+" "+p:W(p,/&\f/g,v[h])))&&(s[g++]=y);return Uo(e,t,l,n===0?Vo:a,s,c,u,f)}function bC(e,t,l,r){return Uo(e,t,l,Kh,ad(hC()),Sr(e,2,-2),0,r)}function Wc(e,t,l,r,n){return Uo(e,t,l,sd,Sr(e,0,r),Sr(e,r+1,-1),r,n)}function tp(e,t,l){switch(uC(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return pn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+pn+e+te+e+e;case 5936:switch(ve(e,t+11)){case 114:return K+e+te+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+te+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+te+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+te+e+e;case 6165:return K+e+te+"flex-"+e+e;case 5187:return K+e+W(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+te+"flex-$1$2")+e;case 5443:return K+e+te+"flex-item-"+W(e,/flex-|-self/g,"")+(jt(e,/flex-|baseline/)?"":te+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return K+e+te+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+te+W(e,"shrink","negative")+e;case 5292:return K+e+te+W(e,"basis","preferred-size")+e;case 6060:return K+"box-"+W(e,"-grow","")+K+e+te+W(e,"grow","positive")+e;case 4554:return K+W(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!jt(e,/flex-|baseline/))return te+"grid-column-align"+Sr(e,t)+e;break;case 2592:case 3360:return te+W(e,"template-","")+e;case 4384:case 3616:return l&&l.some(function(r,n){return t=n,jt(r.props,/grid-\w+-end/)})?~Ii(e+(l=l[t].value),"span",0)?e:te+W(e,"-start","")+e+te+"grid-row-span:"+(~Ii(l,"span",0)?jt(l,/\d+/):+jt(l,/\d+/)-+jt(e,/\d+/))+";":te+W(e,"-start","")+e;case 4896:case 4128:return l&&l.some(function(r){return jt(r.props,/grid-\w+-start/)})?e:te+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+pn+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ii(e,"stretch",0)?tp(W(e,"stretch","fill-available"),t,l)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,i,o,a,s,c){return te+n+":"+i+c+(o?te+n+"-span:"+(a?s:+s-+i)+c:"")+e});case 4949:if(ve(e,t+6)===121)return W(e,":",":"+K)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(ve(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+te+"$2box$3")+e;case 100:return W(e,":",":"+te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function uo(e,t){for(var l="",r=0;r<e.length;r++)l+=t(e[r],r,e,t)||"";return l}function SC(e,t,l,r){switch(e.type){case cC:if(e.children.length)break;case dC:case sd:return e.return=e.return||e.value;case Kh:return"";case Xh:return e.return=e.value+"{"+uo(e.children,r)+"}";case Vo:if(!xt(e.value=e.props.join(",")))return""}return xt(l=uo(e.children,r))?e.return=e.value+"{"+l+"}":""}function kC(e){var t=Zh(e);return function(l,r,n,i){for(var o="",a=0;a<t;a++)o+=e[a](l,r,n,i)||"";return o}}function TC(e){return function(t){t.root||(t=t.return)&&e(t)}}function EC(e,t,l,r){if(e.length>-1&&!e.return)switch(e.type){case sd:e.return=tp(e.value,e.length,l);return;case Xh:return uo([Yt(e,{value:W(e.value,"@","@"+K)})],r);case Vo:if(e.length)return fC(l=e.props,function(n){switch(jt(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Yl(Yt(e,{props:[W(n,/:(read-\w+)/,":"+pn+"$1")]})),Yl(Yt(e,{props:[n]})),Ha(e,{props:Dc(l,r)});break;case"::placeholder":Yl(Yt(e,{props:[W(n,/:(plac\w+)/,":"+K+"input-$1")]})),Yl(Yt(e,{props:[W(n,/:(plac\w+)/,":"+pn+"$1")]})),Yl(Yt(e,{props:[W(n,/:(plac\w+)/,te+"input-$1")]})),Yl(Yt(e,{props:[n]})),Ha(e,{props:Dc(l,r)});break}return""})}}var AC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ve={},Tr=typeof process<"u"&&Ve!==void 0&&(Ve.REACT_APP_SC_ATTR||Ve.SC_ATTR)||"data-styled",lp="active",rp="data-styled-version",qo="6.1.13",dd=`/*!sc*/
`,fo=typeof window<"u"&&"HTMLElement"in window,PC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ve!==void 0&&Ve.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ve.REACT_APP_SC_DISABLE_SPEEDY!==""?Ve.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ve.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ve!==void 0&&Ve.SC_DISABLE_SPEEDY!==void 0&&Ve.SC_DISABLE_SPEEDY!==""&&Ve.SC_DISABLE_SPEEDY!=="false"&&Ve.SC_DISABLE_SPEEDY),$C={},Yo=Object.freeze([]),Er=Object.freeze({});function np(e,t,l){return l===void 0&&(l=Er),e.theme!==l.theme&&e.theme||t||l.theme}var ip=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),IC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jC=/(^-|-$)/g;function Vc(e){return e.replace(IC,"-").replace(jC,"")}var _C=/(a)(d)/gi,hi=52,Hc=function(e){return String.fromCharCode(e+(e>25?39:97))};function qa(e){var t,l="";for(t=Math.abs(e);t>hi;t=t/hi|0)l=Hc(t%hi)+l;return(Hc(t%hi)+l).replace(_C,"$1-$2")}var Ls,op=5381,sr=function(e,t){for(var l=t.length;l;)e=33*e^t.charCodeAt(--l);return e},sp=function(e){return sr(op,e)};function cd(e){return qa(sp(e)>>>0)}function zC(e){return e.displayName||e.name||"Component"}function Ms(e){return typeof e=="string"&&!0}var ap=typeof Symbol=="function"&&Symbol.for,dp=ap?Symbol.for("react.memo"):60115,LC=ap?Symbol.for("react.forward_ref"):60112,MC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},RC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},NC=((Ls={})[LC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ls[dp]=cp,Ls);function Uc(e){return("type"in(t=e)&&t.type.$$typeof)===dp?cp:"$$typeof"in e?NC[e.$$typeof]:MC;var t}var OC=Object.defineProperty,BC=Object.getOwnPropertyNames,Gc=Object.getOwnPropertySymbols,DC=Object.getOwnPropertyDescriptor,FC=Object.getPrototypeOf,qc=Object.prototype;function up(e,t,l){if(typeof t!="string"){if(qc){var r=FC(t);r&&r!==qc&&up(e,r,l)}var n=BC(t);Gc&&(n=n.concat(Gc(t)));for(var i=Uc(e),o=Uc(t),a=0;a<n.length;++a){var s=n[a];if(!(s in RC||l&&l[s]||o&&s in o||i&&s in i)){var c=DC(t,s);try{OC(e,s,c)}catch{}}}}return e}function Dl(e){return typeof e=="function"}function ud(e){return typeof e=="object"&&"styledComponentId"in e}function $l(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ho(e,t){if(e.length===0)return"";for(var l=e[0],r=1;r<e.length;r++)l+=e[r];return l}function Ln(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ya(e,t,l){if(l===void 0&&(l=!1),!l&&!Ln(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ya(e[r],t[r]);else if(Ln(t))for(var r in t)e[r]=Ya(e[r],t[r]);return e}function fd(e,t){Object.defineProperty(e,"toString",{value:t})}function gl(e){for(var t=[],l=1;l<arguments.length;l++)t[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var WC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var l=0,r=0;r<t;r++)l+=this.groupSizes[r];return l},e.prototype.insertRules=function(t,l){if(t>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;t>=i;)if((i<<=1)<0)throw gl(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),s=(o=0,l.length);o<s;o++)this.tag.insertRule(a,l[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var l=this.groupSizes[t],r=this.indexOfGroup(t),n=r+l;this.groupSizes[t]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var l="";if(t>=this.length||this.groupSizes[t]===0)return l;for(var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r,o=n;o<i;o++)l+="".concat(this.tag.getRule(o)).concat(dd);return l},e}(),zi=new Map,po=new Map,Li=1,pi=function(e){if(zi.has(e))return zi.get(e);for(;po.has(Li);)Li++;var t=Li++;return zi.set(e,t),po.set(t,e),t},VC=function(e,t){Li=t+1,zi.set(e,t),po.set(t,e)},HC="style[".concat(Tr,"][").concat(rp,'="').concat(qo,'"]'),UC=new RegExp("^".concat(Tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),GC=function(e,t,l){for(var r,n=l.split(","),i=0,o=n.length;i<o;i++)(r=n[i])&&e.registerName(t,r)},qC=function(e,t){for(var l,r=((l=t.textContent)!==null&&l!==void 0?l:"").split(dd),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var s=a.match(UC);if(s){var c=0|parseInt(s[1],10),u=s[2];c!==0&&(VC(u,c),GC(e,u,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(a)}}},Yc=function(e){for(var t=document.querySelectorAll(HC),l=0,r=t.length;l<r;l++){var n=t[l];n&&n.getAttribute(Tr)!==lp&&(qC(e,n),n.parentNode&&n.parentNode.removeChild(n))}};function YC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fp=function(e){var t=document.head,l=e||t,r=document.createElement("style"),n=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Tr,"]")));return s[s.length-1]}(l),i=n!==void 0?n.nextSibling:null;r.setAttribute(Tr,lp),r.setAttribute(rp,qo);var o=YC();return o&&r.setAttribute("nonce",o),l.insertBefore(r,i),r},KC=function(){function e(t){this.element=fp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(l){if(l.sheet)return l.sheet;for(var r=document.styleSheets,n=0,i=r.length;n<i;n++){var o=r[n];if(o.ownerNode===l)return o}throw gl(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,l){try{return this.sheet.insertRule(l,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var l=this.sheet.cssRules[t];return l&&l.cssText?l.cssText:""},e}(),XC=function(){function e(t){this.element=fp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,l){if(t<=this.length&&t>=0){var r=document.createTextNode(l);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),QC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,l){return t<=this.length&&(this.rules.splice(t,0,l),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Kc=fo,JC={isServer:!fo,useCSSOMInjection:!PC},mo=function(){function e(t,l,r){t===void 0&&(t=Er),l===void 0&&(l={});var n=this;this.options=ye(ye({},JC),t),this.gs=l,this.names=new Map(r),this.server=!!t.isServer,!this.server&&fo&&Kc&&(Kc=!1,Yc(this)),fd(this,function(){return function(i){for(var o=i.getTag(),a=o.length,s="",c=function(f){var m=function(g){return po.get(g)}(f);if(m===void 0)return"continue";var v=i.names.get(m),C=o.getGroup(f);if(v===void 0||!v.size||C.length===0)return"continue";var x="".concat(Tr,".g").concat(f,'[id="').concat(m,'"]'),w="";v!==void 0&&v.forEach(function(g){g.length>0&&(w+="".concat(g,","))}),s+="".concat(C).concat(x,'{content:"').concat(w,'"}').concat(dd)},u=0;u<a;u++)c(u);return s}(n)})}return e.registerId=function(t){return pi(t)},e.prototype.rehydrate=function(){!this.server&&fo&&Yc(this)},e.prototype.reconstructWithOptions=function(t,l){return l===void 0&&(l=!0),new e(ye(ye({},this.options),t),this.gs,l&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(l){var r=l.useCSSOMInjection,n=l.target;return l.isServer?new QC(n):r?new KC(n):new XC(n)}(this.options),new WC(t)));var t},e.prototype.hasNameForId=function(t,l){return this.names.has(t)&&this.names.get(t).has(l)},e.prototype.registerName=function(t,l){if(pi(t),this.names.has(t))this.names.get(t).add(l);else{var r=new Set;r.add(l),this.names.set(t,r)}},e.prototype.insertRules=function(t,l,r){this.registerName(t,l),this.getTag().insertRules(pi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(pi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ZC=/&/g,ev=/^\s*\/\/.*$/gm;function hp(e,t){return e.map(function(l){return l.type==="rule"&&(l.value="".concat(t," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(t," ")),l.props=l.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=hp(l.children,t)),l})}function tv(e){var t,l,r,n=Er,i=n.options,o=i===void 0?Er:i,a=n.plugins,s=a===void 0?Yo:a,c=function(m,v,C){return C.startsWith(l)&&C.endsWith(l)&&C.replaceAll(l,"").length>0?".".concat(t):m},u=s.slice();u.push(function(m){m.type===Vo&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(ZC,l).replace(r,c))}),o.prefix&&u.push(EC),u.push(SC);var f=function(m,v,C,x){v===void 0&&(v=""),C===void 0&&(C=""),x===void 0&&(x="&"),t=x,l=v,r=new RegExp("\\".concat(l,"\\b"),"g");var w=m.replace(ev,""),g=wC(C||v?"".concat(C," ").concat(v," { ").concat(w," }"):w);o.namespace&&(g=hp(g,o.namespace));var h=[];return uo(g,kC(u.concat(TC(function(p){return h.push(p)})))),h};return f.hash=s.length?s.reduce(function(m,v){return v.name||gl(15),sr(m,v.name)},op).toString():"",f}var lv=new mo,Ka=tv(),pp=Y.createContext({shouldForwardProp:void 0,styleSheet:lv,stylis:Ka});pp.Consumer;Y.createContext(void 0);function Xa(){return $.useContext(pp)}var mp=function(){function e(t,l){var r=this;this.inject=function(n,i){i===void 0&&(i=Ka);var o=r.name+i.hash;n.hasNameForId(r.id,o)||n.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=l,fd(this,function(){throw gl(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ka),this.name+t.hash},e}(),rv=function(e){return e>="A"&&e<="Z"};function Xc(e){for(var t="",l=0;l<e.length;l++){var r=e[l];if(l===1&&r==="-"&&e[0]==="-")return e;rv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var gp=function(e){return e==null||e===!1||e===""},Cp=function(e){var t,l,r=[];for(var n in e){var i=e[n];e.hasOwnProperty(n)&&!gp(i)&&(Array.isArray(i)&&i.isCss||Dl(i)?r.push("".concat(Xc(n),":"),i,";"):Ln(i)?r.push.apply(r,br(br(["".concat(n," {")],Cp(i),!1),["}"],!1)):r.push("".concat(Xc(n),": ").concat((t=n,(l=i)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||t in AC||t.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return r};function fl(e,t,l,r){if(gp(e))return[];if(ud(e))return[".".concat(e.styledComponentId)];if(Dl(e)){if(!Dl(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var n=e(t);return fl(n,t,l,r)}var i;return e instanceof mp?l?(e.inject(l,r),[e.getName(r)]):[e]:Ln(e)?Cp(e):Array.isArray(e)?Array.prototype.concat.apply(Yo,e.map(function(o){return fl(o,t,l,r)})):[e.toString()]}function vp(e){for(var t=0;t<e.length;t+=1){var l=e[t];if(Dl(l)&&!ud(l))return!1}return!0}var nv=sp(qo),iv=function(){function e(t,l,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&vp(t),this.componentId=l,this.baseHash=sr(nv,l),this.baseStyle=r,mo.registerId(l)}return e.prototype.generateAndInjectStyles=function(t,l,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,l,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))n=$l(n,this.staticRulesId);else{var i=ho(fl(this.rules,t,l,r)),o=qa(sr(this.baseHash,i)>>>0);if(!l.hasNameForId(this.componentId,o)){var a=r(i,".".concat(o),void 0,this.componentId);l.insertRules(this.componentId,o,a)}n=$l(n,o),this.staticRulesId=o}else{for(var s=sr(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f;else if(f){var m=ho(fl(f,t,l,r));s=sr(s,m+u),c+=m}}if(c){var v=qa(s>>>0);l.hasNameForId(this.componentId,v)||l.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),n=$l(n,v)}}return n},e}(),Ar=Y.createContext(void 0);Ar.Consumer;function zr(){var e=$.useContext(Ar);if(!e)throw gl(18);return e}function ov(e){var t=Y.useContext(Ar),l=$.useMemo(function(){return function(r,n){if(!r)throw gl(14);if(Dl(r)){var i=r(n);return i}if(Array.isArray(r)||typeof r!="object")throw gl(8);return n?ye(ye({},n),r):r}(e.theme,t)},[e.theme,t]);return e.children?Y.createElement(Ar.Provider,{value:l},e.children):null}var Rs={};function sv(e,t,l){var r=ud(e),n=e,i=!Ms(e),o=t.attrs,a=o===void 0?Yo:o,s=t.componentId,c=s===void 0?function(y,b){var k=typeof y!="string"?"sc":Vc(y);Rs[k]=(Rs[k]||0)+1;var E="".concat(k,"-").concat(cd(qo+k+Rs[k]));return b?"".concat(b,"-").concat(E):E}(t.displayName,t.parentComponentId):s,u=t.displayName,f=u===void 0?function(y){return Ms(y)?"styled.".concat(y):"Styled(".concat(zC(y),")")}(e):u,m=t.displayName&&t.componentId?"".concat(Vc(t.displayName),"-").concat(t.componentId):t.componentId||c,v=r&&n.attrs?n.attrs.concat(a).filter(Boolean):a,C=t.shouldForwardProp;if(r&&n.shouldForwardProp){var x=n.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;C=function(y,b){return x(y,b)&&w(y,b)}}else C=x}var g=new iv(l,m,r?n.componentStyle:void 0);function h(y,b){return function(k,E,I){var A=k.attrs,T=k.componentStyle,j=k.defaultProps,N=k.foldedComponentIds,L=k.styledComponentId,B=k.target,D=Y.useContext(Ar),Q=Xa(),Fe=k.shouldForwardProp||Q.shouldForwardProp,_=np(E,D,j)||Er,M=function(Vt,We,At){for(var Dr,Sl=ye(ye({},We),{className:void 0,theme:At}),os=0;os<Vt.length;os+=1){var Kn=Dl(Dr=Vt[os])?Dr(Sl):Dr;for(var Ht in Kn)Sl[Ht]=Ht==="className"?$l(Sl[Ht],Kn[Ht]):Ht==="style"?ye(ye({},Sl[Ht]),Kn[Ht]):Kn[Ht]}return We.className&&(Sl.className=$l(Sl.className,We.className)),Sl}(A,E,_),R=M.as||B,H={};for(var q in M)M[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&M.theme===_||(q==="forwardedAs"?H.as=M.forwardedAs:Fe&&!Fe(q,R)||(H[q]=M[q]));var bl=function(Vt,We){var At=Xa(),Dr=Vt.generateAndInjectStyles(We,At.styleSheet,At.stylis);return Dr}(T,M),st=$l(N,L);return bl&&(st+=" "+bl),M.className&&(st+=" "+M.className),H[Ms(R)&&!ip.has(R)?"class":"className"]=st,H.ref=I,$.createElement(R,H)}(p,y,b)}h.displayName=f;var p=Y.forwardRef(h);return p.attrs=v,p.componentStyle=g,p.displayName=f,p.shouldForwardProp=C,p.foldedComponentIds=r?$l(n.foldedComponentIds,n.styledComponentId):"",p.styledComponentId=m,p.target=r?n.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(b){for(var k=[],E=1;E<arguments.length;E++)k[E-1]=arguments[E];for(var I=0,A=k;I<A.length;I++)Ya(b,A[I],!0);return b}({},n.defaultProps,y):y}}),fd(p,function(){return".".concat(p.styledComponentId)}),i&&up(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Qc(e,t){for(var l=[e[0]],r=0,n=t.length;r<n;r+=1)l.push(t[r],e[r+1]);return l}var Jc=function(e){return Object.assign(e,{isCss:!0})};function U(e){for(var t=[],l=1;l<arguments.length;l++)t[l-1]=arguments[l];if(Dl(e)||Ln(e))return Jc(fl(Qc(Yo,br([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?fl(r):Jc(fl(Qc(r,t)))}function Qa(e,t,l){if(l===void 0&&(l=Er),!t)throw gl(1,t);var r=function(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,l,U.apply(void 0,br([n],i,!1)))};return r.attrs=function(n){return Qa(e,t,ye(ye({},l),{attrs:Array.prototype.concat(l.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return Qa(e,t,ye(ye({},l),n))},r}var yp=function(e){return Qa(sv,e)},S=yp;ip.forEach(function(e){S[e]=yp(e)});var av=function(){function e(t,l){this.rules=t,this.componentId=l,this.isStatic=vp(t),mo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,l,r,n){var i=n(ho(fl(this.rules,l,r,n)),""),o=this.componentId+t;r.insertRules(o,o,i)},e.prototype.removeStyles=function(t,l){l.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,l,r,n){t>2&&mo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,l,r,n)},e}();function dv(e){for(var t=[],l=1;l<arguments.length;l++)t[l-1]=arguments[l];var r=U.apply(void 0,br([e],t,!1)),n="sc-global-".concat(cd(JSON.stringify(r))),i=new av(r,n),o=function(s){var c=Xa(),u=Y.useContext(Ar),f=Y.useRef(c.styleSheet.allocateGSInstance(n)).current;return c.styleSheet.server&&a(f,s,c.styleSheet,u,c.stylis),Y.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,s,c.styleSheet,u,c.stylis),function(){return i.removeStyles(f,c.styleSheet)}},[f,s,c.styleSheet,u,c.stylis]),null};function a(s,c,u,f,m){if(i.isStatic)i.renderStyles(s,$C,u,m);else{var v=ye(ye({},c),{theme:np(c,f,o.defaultProps)});i.renderStyles(s,v,u,m)}}return Y.memo(o)}function xl(e){for(var t=[],l=1;l<arguments.length;l++)t[l-1]=arguments[l];var r=ho(U.apply(void 0,br([e],t,!1))),n=cd(r);return new mp(n,r)}const cv=dv`

    html {
        font-size: ${e=>e.fontSize}px;
        scroll-behavior: smooth;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {        
        font-family: 'Montserrat', 'Arial', 'Helvetica', sans-serif;
        /* -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; */
        min-width: 360px;
        color: ${({theme:e})=>e.color.defaultText};
        background-color: ${({theme:e})=>e.bgCol.default};
    }
    
    section {
        margin-bottom: 80px;
        @media ${({theme:e})=>e.media.laptop} {
            margin-bottom: 60px;
        }
        @media ${({theme:e})=>e.media.tablet} {
            margin-bottom: 50px;
        }
        @media ${({theme:e})=>e.media.mobile} {
            margin-bottom: 40px;
        }
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    img {
        filter: ${({theme:e})=>e.filter};
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: ${({theme:e})=>e.color.defaultText};
    }

    .swiper-pagination-bullet-active {    
        background: ${({theme:e})=>e.bgCol.swiperPaginationBulletActive};
    }

    .bulletLocation_services .swiper-slide {
        width: ${e=>e.fontSize>14?"355px":"305px"};        
    }

    
    @media ${({theme:e})=>e.media.tablet} {

        .bulletLocation_services .swiper-slide {
            width: ${e=>e.fontSize>14?"355px":"224px"};  
        }

        .bulletLocation_news .swiper-slide {
            width: ${e=>e.fontSize>14?"304px":"224px"};  
        }
    }

`,mi={default:{bgCol:{header:{top:"rgba(244, 244, 245, 1)",bottom:"rgba(0, 166, 81, 1)",mobileTop:"rgba(244, 244, 245, 1)",menu:{textDecorationLink:"white",submenu:"white"}},footer:"rgba(213, 243, 238, 0.3)",gradientFooter:"linear-gradient(to bottom, rgba(243, 252, 250, 0.25), #F3FCFA)",btn:{primary:"rgba(0, 166, 81, 1)",secondary:"rgba(245, 130, 32, 1)",primaryHover:"linear-gradient(225.00deg, rgb(0, 176, 101) 46.498%, rgb(28, 255, 158) 100%)",secondaryHover:"linear-gradient(225.00deg, rgb(245, 130, 32) 49.939%,rgb(255, 216, 183) 100%)",footerSpoiler:"rgba(243, 252, 250, 1)",close:"rgba(151, 151, 151, 1)",mobileFhone:"rgba(245, 130, 32, 1)"},default:"white",defaultHover:"#1D1F24",firstLinkMenu:"rgba(91, 238, 208, 0.2)",swiperPaginationBulletActive:"rgba(245, 130, 32, 1)",homePage:{advantages:{0:"rgba(213, 243, 238, 1)",1:"rgba(160, 228, 220, 1)",2:"rgba(245, 130, 32, 0.5)",3:"rgba(231, 236, 240, 1)"},promotions:{1:{bg:"rgba(213, 243, 238, 1)",bgSale:"rgba(245, 130, 32, 1)"},2:{bg:"rgba(246, 191, 142, 1)",bgSale:"white"},3:{bg:"rgba(231, 236, 240, 1)"}},doctors:"rgba(231, 236, 240, 0.3)",news:"rgba(246, 191, 142, 0.1)",review:"rgba(160, 228, 220, 0.1)",info:"rgba(231, 236, 240, 0.6)"},pageName:{price:"rgba(242, 245, 247, 1)",reviews:"rgba(242, 245, 247, 1)"}},color:{primary:"rgba(0, 166, 81, 1)",secondary:"rgba(245, 130, 32, 1)",outline:"transparent",defaultText:"rgb(29, 31, 36)",defaultTextHover:"white",defaultBtn:"white",multiСhannel:"rgba(151, 151, 151, 1)",defaultLinkMenu:"white",activeLinkMenu:"rgba(255, 255, 255, .8)",firstLinkMenu:"white",borderVisuallyImpairedPanelBtn:"black",fillContactIcon:"#1D1F24",mobileFillPhoneBtn:"white",placeholder:"#6b6b6b",searchIcon:"#6b6b6b",searchBoxShadow:"rgba(0, 0, 0, 0.5)",borderFieldSet:"rgba(151, 151, 151, 0.4)",homePage:{promotions:{1:{title:"rgba(245, 130, 32, 1)",subTitle:"rgba(0, 166, 81, 1)",sale:"white"},2:{title:"rgba(29, 31, 36, 1)",subTitle:"rgba(0, 166, 81, 1)",sale:"rgba(245, 130, 32, 1)"},3:{title:"rgba(245, 130, 32, 1)",subTitle:"rgba(0, 166, 81, 1)"}}}},childrenCount:{primary:"rgba(245, 130, 32, 1)",secondary:"rgb(0, 166, 81)",totalColor:"white",bgTotalColor:"rgba(245, 130, 32, 1)",borderColor:"transparent"},homeSlider:{orange:"rgba(245, 130, 32, 1)",green:"rgba(0, 166, 81, 1)",black:"rgba(29, 31, 36, 1)",white:"rgba(255, 255, 255, 1)"},filterLogo:"none",filter:"none",media:{laptop:"screen and (max-width: 1200px)",lg992:"screen and (max-width: 992px)",tablet:"screen and (max-width: 767px)",mobile:"screen and (max-width: 576px)"}},light:{bgCol:{header:{top:"rgba(255, 255, 255, 1)",bottom:"rgba(255, 255, 255, 1)",mobileTop:"rgba(255, 255, 255, 1)",menu:{textDecorationLink:"black",submenu:"rgba(255, 255, 255, 1)"}},footer:"white",gradientFooter:"linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.9))",btn:{primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 1)",primaryHover:"rgba(0, 0, 0, .4)",secondaryHover:"rgba(0, 0, 0, .4)",footerSpoiler:"rgba(255, 255, 255, 1)",close:"rgba(0, 0, 0, 1)",mobileFhone:"rgba(0, 0, 0, 1)"},default:"white",defaultHover:"rgba(0, 0, 0, .4)",firstLinkMenu:"rgba(0, 0, 0, 1)",swiperPaginationBulletActive:"rgba(0, 0, 0, 1)",homePage:{advantages:{0:"rgba(255, 255, 255, 1)",1:"rgba(255, 255, 255, 1)",2:"rgba(255, 255, 255, 1)",3:"rgba(255, 255, 255, 1)"},promotions:{1:{bg:"rgba(255, 255, 255, 1)",bgSale:"rgba(255, 255, 255, 1)"},2:{bg:"rgba(255, 255, 255, 1)",bgSale:"rgba(255, 255, 255, 1)"},3:{bg:"rgba(255, 255, 255, 1)"}},doctors:"rgba(255, 255, 255, 1)",news:"rgba(255, 255, 255, 1)",review:"rgba(255, 255, 255, 1)",info:"rgba(255, 255, 255, 1)"},pageName:{price:"rgba(255, 255, 255, 1)",reviews:"rgba(255, 255, 255, 1)"}},color:{primary:"rgba(0, 0, 0, 1)",secondary:"rgba(0, 0, 0, 1)",outline:"black",defaultText:"black",defaultTextHover:"black",defaultBtn:"black",multiСhannel:"rgba(151, 151, 151, 1)",defaultLinkMenu:"black",activeLinkMenu:"#6b6b6b",firstLinkMenu:"white",borderVisuallyImpairedPanelBtn:"black",fillContactIcon:"black",mobileFillPhoneBtn:"white",searchIcon:"black",searchBoxShadow:"rgba(0, 0, 0, 0.5)",placeholder:"rgb(29, 31, 36)",borderFieldSet:"rgba(151, 151, 151, 0.4)",homePage:{promotions:{1:{title:"black",subTitle:"black",sale:"black"},2:{title:"black",subTitle:"black",sale:"black"},3:{title:"black",subTitle:"black"}}}},childrenCount:{primary:"black",secondary:"black",totalColor:"black",bgTotalColor:"white",borderColor:"black"},homeSlider:{color:"black",transparent:"transparent"},filterLogo:"grayscale(100%)",filter:"grayscale(100%)",media:{laptop:"screen and (max-width: 1200px)",lg992:"screen and (max-width: 992px)",tablet:"screen and (max-width: 767px)",mobile:"screen and (max-width: 576px)"}},dark:{bgCol:{header:{top:"rgba(0, 0, 0, 1)",bottom:"rgba(0, 0, 0, 1)",mobileTop:"rgba(0, 0, 0, 1)",menu:{textDecorationLink:"white",submenu:"rgba(0, 0, 0, 1)"}},footer:"black",gradientFooter:"linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.9))",btn:{primary:"rgba(0, 0, 0, 1)",secondary:"rgba(0, 0, 0, 1)",primaryHover:"rgba(255, 255, 255, .2)",secondaryHover:"rgba(255, 255, 255, .2)",footerSpoiler:"rgba(0, 0, 0, 1)",close:"rgba(255, 255, 255, 1)",mobileFhone:"rgba(255, 255, 255, 1)"},default:"black",defaultHover:"#6b6b6b",firstLinkMenu:"rgba(255, 255, 255, 1)",swiperPaginationBulletActive:"rgba(0, 0, 0, 1)",homePage:{advantages:{0:"rgba(0, 0, 0, 1)",1:"rgba(0, 0, 0, 1)",2:"rgba(0, 0, 0, 1)",3:"rgba(0, 0, 0, 1)"},promotions:{1:{bg:"rgba(0, 0, 0, 1)",bgSale:"rgba(0, 0, 0, 1)"},2:{bg:"rgba(0, 0, 0, 1)",bgSale:"rgba(0, 0, 0, 1)"},3:{bg:"rgba(0, 0, 0, 1)"}},doctors:"rgba(0, 0, 0, 1)",news:"rgba(0, 0, 0, 1)",review:"rgba(0, 0, 0, 1)",info:"rgba(0, 0, 0, 1)"},pageName:{price:"rgba(0, 0, 0, 1)",reviews:"rgba(0, 0, 0, 1)"}},color:{primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 1)",outline:"white",defaultText:"white",defaultTextHover:"white",defaultBtn:"white",multiСhannel:"rgba(255, 255, 255, .8)",defaultLinkMenu:"white",activeLinkMenu:"rgba(255, 255, 255, .5)",firstLinkMenu:"black",borderVisuallyImpairedPanelBtn:"white",fillContactIcon:"white",mobileFillPhoneBtn:"black",searchIcon:"white",searchBoxShadow:"rgba(255, 255, 255, 0.75)",placeholder:"#6b6b6b",borderFieldSet:"rgba(255, 255, 255, 0.4)",homePage:{promotions:{1:{title:"white",subTitle:"white",sale:"white"},2:{title:"white",subTitle:"white",sale:"white"},3:{title:"white",subTitle:"white"}}}},childrenCount:{primary:"white",secondary:"white",totalColor:"white",bgTotalColor:"black",borderColor:"white"},homeSlider:{color:"black",transparent:"transparent"},filterLogo:"grayscale(100%)",filter:"grayscale(100%)",media:{laptop:"screen and (max-width: 1200px)",lg992:"screen and (max-width: 992px)",tablet:"screen and (max-width: 767px)",mobile:"screen and (max-width: 576px)"}},blue:{bgCol:{header:{top:"rgba(157, 209, 255, 1)",bottom:"rgba(157, 209, 255, 1)",mobileTop:"rgba(157, 209, 255, 1)",menu:{textDecorationLink:"#063462",submenu:"rgba(157, 209, 255, .8)"}},footer:"rgba(157, 209, 255, 1)",gradientFooter:"linear-gradient(to bottom, rgba(157, 209, 255, 0.25), rgba(157, 209, 255, 0.9))",btn:{primary:"rgba(157, 209, 255, 1)",secondary:"rgba(157, 209, 255, 1)",primaryHover:"rgba(255, 255, 255, .2)",secondaryHover:"rgba(255, 255, 255, .2)",footerSpoiler:"rgba(157, 209, 255, 1)",close:"#063462",mobileFhone:"#063462"},default:"rgba(157, 209, 255, 1)",defaultHover:"rgba(157, 209, 255, .5)",firstLinkMenu:"rgba(157, 209, 255, 1)",swiperPaginationBulletActive:"rgba(6, 52, 98, 1)",homePage:{advantages:{0:"rgba(157, 209, 255, 1)",1:"rgba(157, 209, 255, 1)",2:"rgba(157, 209, 255, 1)",3:"rgba(157, 209, 255, 1)"},promotions:{1:{bg:"rgba(157, 209, 255, 1)",bgSale:"rgba(157, 209, 255, 1)"},2:{bg:"rgba(157, 209, 255, 1)",bgSale:"rgba(157, 209, 255, 1)"},3:{bg:"rgba(157, 209, 255, 1)"}},doctors:"rgba(157, 209, 255, 1)",news:"rgba(157, 209, 255, 1)",review:"rgba(157, 209, 255, 1)",info:"rgba(157, 209, 255, 1)"},pageName:{price:"rgba(157, 209, 255, 1)",reviews:"rgba(157, 209, 255, 1)"}},color:{primary:"#063462",secondary:"#063462",outline:"#063462",defaultText:"#063462",defaultTextHover:"rgba(0, 0, 0, .5)",defaultBtn:"#063462",multiСhannel:"rgba(6, 52, 98, .75)",defaultLinkMenu:"#063462",activeLinkMenu:"rgba(6, 52, 98, .5)",firstLinkMenu:"#063462",borderVisuallyImpairedPanelBtn:"#063462",fillContactIcon:"#063462",mobileFillPhoneBtn:"white",searchIcon:"#063462",searchBoxShadow:"rgba(6, 52, 98, 0.5)",placeholder:"rgb(29, 31, 36)",borderFieldSet:"rgba(6, 52, 98, 0.4)",homePage:{promotions:{1:{title:"#063462",subTitle:"#063462",sale:"#063462"},2:{title:"#063462",subTitle:"#063462",sale:"#063462"},3:{title:"#063462",subTitle:"#063462"}}}},childrenCount:{primary:"#063462",secondary:"#063462",totalColor:"#063462",bgTotalColor:"white",borderColor:"#063462"},homeSlider:{color:"#063462",transparent:"transparent"},filterLogo:"hue-rotate(60deg)",filter:"grayscale(100%)",media:{laptop:"screen and (max-width: 1200px)",lg992:"screen and (max-width: 992px)",tablet:"screen and (max-width: 767px)",mobile:"screen and (max-width: 576px)"}}},ae=S.div`
    max-width: 1320px;
    width: 100%;
    min-height: 100%;
    padding: 0 20px;
    margin: 0 auto;
    //outline: 1px solid red;
`,xp="/assets/images/png-sprite/icons/sprite-min.png";/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mn(){return Mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},Mn.apply(this,arguments)}var tl;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tl||(tl={}));const Zc="popstate";function uv(e){e===void 0&&(e={});function t(r,n){let{pathname:i,search:o,hash:a}=r.location;return Ja("",{pathname:i,search:o,hash:a},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function l(r,n){return typeof n=="string"?n:go(n)}return hv(t,l,null,e)}function de(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fv(){return Math.random().toString(36).substr(2,8)}function eu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ja(e,t,l,r){return l===void 0&&(l=null),Mn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Lr(t):t,{state:l,key:t&&t.key||r||fv()})}function go(e){let{pathname:t="/",search:l="",hash:r=""}=e;return l&&l!=="?"&&(t+=l.charAt(0)==="?"?l:"?"+l),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Lr(e){let t={};if(e){let l=e.indexOf("#");l>=0&&(t.hash=e.substr(l),e=e.substr(0,l));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function hv(e,t,l,r){r===void 0&&(r={});let{window:n=document.defaultView,v5Compat:i=!1}=r,o=n.history,a=tl.Pop,s=null,c=u();c==null&&(c=0,o.replaceState(Mn({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function f(){a=tl.Pop;let w=u(),g=w==null?null:w-c;c=w,s&&s({action:a,location:x.location,delta:g})}function m(w,g){a=tl.Push;let h=Ja(x.location,w,g);c=u()+1;let p=eu(h,c),y=x.createHref(h);try{o.pushState(p,"",y)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;n.location.assign(y)}i&&s&&s({action:a,location:x.location,delta:1})}function v(w,g){a=tl.Replace;let h=Ja(x.location,w,g);c=u();let p=eu(h,c),y=x.createHref(h);o.replaceState(p,"",y),i&&s&&s({action:a,location:x.location,delta:0})}function C(w){let g=n.location.origin!=="null"?n.location.origin:n.location.href,h=typeof w=="string"?w:go(w);return h=h.replace(/ $/,"%20"),de(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let x={get action(){return a},get location(){return e(n,o)},listen(w){if(s)throw new Error("A history only accepts one active listener");return n.addEventListener(Zc,f),s=w,()=>{n.removeEventListener(Zc,f),s=null}},createHref(w){return t(n,w)},createURL:C,encodeLocation(w){let g=C(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:v,go(w){return o.go(w)}};return x}var tu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(tu||(tu={}));function pv(e,t,l){return l===void 0&&(l="/"),mv(e,t,l,!1)}function mv(e,t,l,r){let n=typeof t=="string"?Lr(t):t,i=Pr(n.pathname||"/",l);if(i==null)return null;let o=bp(e);gv(o);let a=null;for(let s=0;a==null&&s<o.length;++s){let c=Av(i);a=Tv(o[s],c,r)}return a}function bp(e,t,l,r){t===void 0&&(t=[]),l===void 0&&(l=[]),r===void 0&&(r="");let n=(i,o,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(de(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=hl([r,s.relativePath]),u=l.concat(s);i.children&&i.children.length>0&&(de(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),bp(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Sv(c,i.index),routesMeta:u})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))n(i,o);else for(let s of Sp(i.path))n(i,o,s)}),t}function Sp(e){let t=e.split("/");if(t.length===0)return[];let[l,...r]=t,n=l.endsWith("?"),i=l.replace(/\?$/,"");if(r.length===0)return n?[i,""]:[i];let o=Sp(r.join("/")),a=[];return a.push(...o.map(s=>s===""?i:[i,s].join("/"))),n&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function gv(e){e.sort((t,l)=>t.score!==l.score?l.score-t.score:kv(t.routesMeta.map(r=>r.childrenIndex),l.routesMeta.map(r=>r.childrenIndex)))}const Cv=/^:[\w-]+$/,vv=3,yv=2,xv=1,wv=10,bv=-2,lu=e=>e==="*";function Sv(e,t){let l=e.split("/"),r=l.length;return l.some(lu)&&(r+=bv),t&&(r+=yv),l.filter(n=>!lu(n)).reduce((n,i)=>n+(Cv.test(i)?vv:i===""?xv:wv),r)}function kv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,n)=>r===t[n])?e[e.length-1]-t[t.length-1]:0}function Tv(e,t,l){let{routesMeta:r}=e,n={},i="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=Co({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},u),m=s.route;if(!f&&c&&l&&!r[r.length-1].route.index&&(f=Co({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},u)),!f)return null;Object.assign(n,f.params),o.push({params:n,pathname:hl([i,f.pathname]),pathnameBase:jv(hl([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=hl([i,f.pathnameBase]))}return o}function Co(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[l,r]=Ev(e.path,e.caseSensitive,e.end),n=t.match(l);if(!n)return null;let i=n[0],o=i.replace(/(.)\/+$/,"$1"),a=n.slice(1);return{params:r.reduce((c,u,f)=>{let{paramName:m,isOptional:v}=u;if(m==="*"){let x=a[f]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const C=a[f];return v&&!C?c[m]=void 0:c[m]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function Ev(e,t,l){t===void 0&&(t=!1),l===void 0&&(l=!0),wp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),r]}function Av(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Pr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let l=t.endsWith("/")?t.length-1:t.length,r=e.charAt(l);return r&&r!=="/"?null:e.slice(l)||"/"}function Pv(e,t){t===void 0&&(t="/");let{pathname:l,search:r="",hash:n=""}=typeof e=="string"?Lr(e):e;return{pathname:l?l.startsWith("/")?l:$v(l,t):t,search:_v(r),hash:zv(n)}}function $v(e,t){let l=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?l.length>1&&l.pop():n!=="."&&l.push(n)}),l.length>1?l.join("/"):"/"}function Ns(e,t,l,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Iv(e){return e.filter((t,l)=>l===0||t.route.path&&t.route.path.length>0)}function kp(e,t){let l=Iv(e);return t?l.map((r,n)=>n===l.length-1?r.pathname:r.pathnameBase):l.map(r=>r.pathnameBase)}function Tp(e,t,l,r){r===void 0&&(r=!1);let n;typeof e=="string"?n=Lr(e):(n=Mn({},e),de(!n.pathname||!n.pathname.includes("?"),Ns("?","pathname","search",n)),de(!n.pathname||!n.pathname.includes("#"),Ns("#","pathname","hash",n)),de(!n.search||!n.search.includes("#"),Ns("#","search","hash",n)));let i=e===""||n.pathname==="",o=i?"/":n.pathname,a;if(o==null)a=l;else{let f=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;n.pathname=m.join("/")}a=f>=0?t[f]:"/"}let s=Pv(n,a),c=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&l.endsWith("/");return!s.pathname.endsWith("/")&&(c||u)&&(s.pathname+="/"),s}const hl=e=>e.join("/").replace(/\/\/+/g,"/"),jv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_v=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Lv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ep=["post","put","patch","delete"];new Set(Ep);const Mv=["get",...Ep];new Set(Mv);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rn(){return Rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},Rn.apply(this,arguments)}const Ko=$.createContext(null),Ap=$.createContext(null),wl=$.createContext(null),Xo=$.createContext(null),Ul=$.createContext({outlet:null,matches:[],isDataRoute:!1}),Pp=$.createContext(null);function Rv(e,t){let{relative:l}=t===void 0?{}:t;Vn()||de(!1);let{basename:r,navigator:n}=$.useContext(wl),{hash:i,pathname:o,search:a}=Qo(e,{relative:l}),s=o;return r!=="/"&&(s=o==="/"?r:hl([r,o])),n.createHref({pathname:s,search:a,hash:i})}function Vn(){return $.useContext(Xo)!=null}function Mr(){return Vn()||de(!1),$.useContext(Xo).location}function $p(e){$.useContext(wl).static||$.useLayoutEffect(e)}function Nv(){let{isDataRoute:e}=$.useContext(Ul);return e?Xv():Ov()}function Ov(){Vn()||de(!1);let e=$.useContext(Ko),{basename:t,future:l,navigator:r}=$.useContext(wl),{matches:n}=$.useContext(Ul),{pathname:i}=Mr(),o=JSON.stringify(kp(n,l.v7_relativeSplatPath)),a=$.useRef(!1);return $p(()=>{a.current=!0}),$.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Tp(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:hl([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,o,i,e])}function Qo(e,t){let{relative:l}=t===void 0?{}:t,{future:r}=$.useContext(wl),{matches:n}=$.useContext(Ul),{pathname:i}=Mr(),o=JSON.stringify(kp(n,r.v7_relativeSplatPath));return $.useMemo(()=>Tp(e,JSON.parse(o),i,l==="path"),[e,o,i,l])}function Bv(e,t){return Dv(e,t)}function Dv(e,t,l,r){Vn()||de(!1);let{navigator:n}=$.useContext(wl),{matches:i}=$.useContext(Ul),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=Mr(),u;if(t){var f;let w=typeof t=="string"?Lr(t):t;s==="/"||(f=w.pathname)!=null&&f.startsWith(s)||de(!1),u=w}else u=c;let m=u.pathname||"/",v=m;if(s!=="/"){let w=s.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(w.length).join("/")}let C=pv(e,{pathname:v}),x=Uv(C&&C.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:hl([s,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:hl([s,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,l,r);return t&&x?$.createElement(Xo.Provider,{value:{location:Rn({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:tl.Pop}},x):x}function Fv(){let e=Kv(),t=Lv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),l=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),l?$.createElement("pre",{style:n},l):null,null)}const Wv=$.createElement(Fv,null);class Vv extends $.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,l){return l.location!==t.location||l.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:l.error,location:l.location,revalidation:t.revalidation||l.revalidation}}componentDidCatch(t,l){console.error("React Router caught the following error during render",t,l)}render(){return this.state.error!==void 0?$.createElement(Ul.Provider,{value:this.props.routeContext},$.createElement(Pp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hv(e){let{routeContext:t,match:l,children:r}=e,n=$.useContext(Ko);return n&&n.static&&n.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=l.route.id),$.createElement(Ul.Provider,{value:t},r)}function Uv(e,t,l,r){var n;if(t===void 0&&(t=[]),l===void 0&&(l=null),r===void 0&&(r=null),e==null){var i;if(!l)return null;if(l.errors)e=l.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!l.initialized&&l.matches.length>0)e=l.matches;else return null}let o=e,a=(n=l)==null?void 0:n.errors;if(a!=null){let u=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);u>=0||de(!1),o=o.slice(0,Math.min(o.length,u+1))}let s=!1,c=-1;if(l&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:m,errors:v}=l,C=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||C){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,f,m)=>{let v,C=!1,x=null,w=null;l&&(v=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||Wv,s&&(c<0&&m===0?(C=!0,w=null):c===m&&(C=!0,w=f.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,m+1)),h=()=>{let p;return v?p=x:C?p=w:f.route.Component?p=$.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=u,$.createElement(Hv,{match:f,routeContext:{outlet:u,matches:g,isDataRoute:l!=null},children:p})};return l&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?$.createElement(Vv,{location:l.location,revalidation:l.revalidation,component:x,error:v,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var Ip=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ip||{}),vo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vo||{});function Gv(e){let t=$.useContext(Ko);return t||de(!1),t}function qv(e){let t=$.useContext(Ap);return t||de(!1),t}function Yv(e){let t=$.useContext(Ul);return t||de(!1),t}function jp(e){let t=Yv(),l=t.matches[t.matches.length-1];return l.route.id||de(!1),l.route.id}function Kv(){var e;let t=$.useContext(Pp),l=qv(vo.UseRouteError),r=jp(vo.UseRouteError);return t!==void 0?t:(e=l.errors)==null?void 0:e[r]}function Xv(){let{router:e}=Gv(Ip.UseNavigateStable),t=jp(vo.UseNavigateStable),l=$.useRef(!1);return $p(()=>{l.current=!0}),$.useCallback(function(n,i){i===void 0&&(i={}),l.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,Rn({fromRouteId:t},i)))},[e,t])}function ge(e){de(!1)}function Qv(e){let{basename:t="/",children:l=null,location:r,navigationType:n=tl.Pop,navigator:i,static:o=!1,future:a}=e;Vn()&&de(!1);let s=t.replace(/^\/*/,"/"),c=$.useMemo(()=>({basename:s,navigator:i,static:o,future:Rn({v7_relativeSplatPath:!1},a)}),[s,a,i,o]);typeof r=="string"&&(r=Lr(r));let{pathname:u="/",search:f="",hash:m="",state:v=null,key:C="default"}=r,x=$.useMemo(()=>{let w=Pr(u,s);return w==null?null:{location:{pathname:w,search:f,hash:m,state:v,key:C},navigationType:n}},[s,u,f,m,v,C,n]);return x==null?null:$.createElement(wl.Provider,{value:c},$.createElement(Xo.Provider,{children:l,value:x}))}function Jv(e){let{children:t,location:l}=e;return Bv(Za(t),l)}new Promise(()=>{});function Za(e,t){t===void 0&&(t=[]);let l=[];return $.Children.forEach(e,(r,n)=>{if(!$.isValidElement(r))return;let i=[...t,n];if(r.type===$.Fragment){l.push.apply(l,Za(r.props.children,i));return}r.type!==ge&&de(!1),!r.props.index||!r.props.children||de(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Za(r.props.children,i)),l.push(o)}),l}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},yo.apply(this,arguments)}function _p(e,t){if(e==null)return{};var l={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(l[n]=e[n]);return l}function Zv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ey(e,t){return e.button===0&&(!t||t==="_self")&&!Zv(e)}const ty=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ly=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],ry="6";try{window.__reactRouterVersion=ry}catch{}const ny=$.createContext({isTransitioning:!1}),iy="startTransition",ru=Y1[iy];function oy(e){let{basename:t,children:l,future:r,window:n}=e,i=$.useRef();i.current==null&&(i.current=uv({window:n,v5Compat:!0}));let o=i.current,[a,s]=$.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=$.useCallback(f=>{c&&ru?ru(()=>s(f)):s(f)},[s,c]);return $.useLayoutEffect(()=>o.listen(u),[o,u]),$.createElement(Qv,{basename:t,children:l,location:a.location,navigationType:a.action,navigator:o,future:r})}const sy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ay=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=$.forwardRef(function(t,l){let{onClick:r,relative:n,reloadDocument:i,replace:o,state:a,target:s,to:c,preventScrollReset:u,unstable_viewTransition:f}=t,m=_p(t,ty),{basename:v}=$.useContext(wl),C,x=!1;if(typeof c=="string"&&ay.test(c)&&(C=c,sy))try{let p=new URL(window.location.href),y=c.startsWith("//")?new URL(p.protocol+c):new URL(c),b=Pr(y.pathname,v);y.origin===p.origin&&b!=null?c=b+y.search+y.hash:x=!0}catch{}let w=Rv(c,{relative:n}),g=cy(c,{replace:o,state:a,target:s,preventScrollReset:u,relative:n,unstable_viewTransition:f});function h(p){r&&r(p),p.defaultPrevented||g(p)}return $.createElement("a",yo({},m,{href:C||w,onClick:x||i?r:h,ref:l,target:s}))}),rn=$.forwardRef(function(t,l){let{"aria-current":r="page",caseSensitive:n=!1,className:i="",end:o=!1,style:a,to:s,unstable_viewTransition:c,children:u}=t,f=_p(t,ly),m=Qo(s,{relative:f.relative}),v=Mr(),C=$.useContext(Ap),{navigator:x,basename:w}=$.useContext(wl),g=C!=null&&uy(m)&&c===!0,h=x.encodeLocation?x.encodeLocation(m).pathname:m.pathname,p=v.pathname,y=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;n||(p=p.toLowerCase(),y=y?y.toLowerCase():null,h=h.toLowerCase()),y&&w&&(y=Pr(y,w)||y);const b=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let k=p===h||!o&&p.startsWith(h)&&p.charAt(b)==="/",E=y!=null&&(y===h||!o&&y.startsWith(h)&&y.charAt(h.length)==="/"),I={isActive:k,isPending:E,isTransitioning:g},A=k?r:void 0,T;typeof i=="function"?T=i(I):T=[i,k?"active":null,E?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let j=typeof a=="function"?a(I):a;return $.createElement(Pe,yo({},f,{"aria-current":A,className:T,ref:l,style:j,to:s,unstable_viewTransition:c}),typeof u=="function"?u(I):u)});var e0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(e0||(e0={}));var nu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nu||(nu={}));function dy(e){let t=$.useContext(Ko);return t||de(!1),t}function cy(e,t){let{target:l,replace:r,state:n,preventScrollReset:i,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,s=Nv(),c=Mr(),u=Qo(e,{relative:o});return $.useCallback(f=>{if(ey(f,l)){f.preventDefault();let m=r!==void 0?r:go(c)===go(u);s(e,{replace:m,state:n,preventScrollReset:i,relative:o,unstable_viewTransition:a})}},[c,s,u,r,n,l,e,i,o,a])}function uy(e,t){t===void 0&&(t={});let l=$.useContext(ny);l==null&&de(!1);let{basename:r}=dy(e0.useViewTransitionState),n=Qo(e,{relative:t.relative});if(!l.isTransitioning)return!1;let i=Pr(l.currentLocation.pathname,r)||l.currentLocation.pathname,o=Pr(l.nextLocation.pathname,r)||l.nextLocation.pathname;return Co(n.pathname,o)!=null||Co(n.pathname,i)!=null}const hd=e=>d.jsx(fy,{head:e.head,children:d.jsx(Pe,{to:"/",children:d.jsx(hy,{head:e.head})})}),fy=S.div`
    grid-area: logo;
    
    @media ${({theme:e})=>e.media.lg992} {
        width: min-content;
    }
             
`,hy=S.div`
    background-image: url(${xp});    
    height: 124px;
    max-width: 198px; 
    min-width: 164px;   
    width: 100%;    
    //background-position: 0px -94px;
    background-position: 0% 27.168%;
    background-size: 301.01% 379.032%;
    display: inline-block;
    
    cursor: pointer;
    filter: ${({theme:e})=>e.filterLogo};

    @media ${({theme:e})=>e.media.lg992} {
        max-width: ${e=>e.head?"164px":"198px"};
        min-width: ${e=>e.head?"164px":"198px"};
        height: ${e=>e.head?"104px":"124px"};
    }
    
    @media ${({theme:e})=>e.media.mobile} {
        max-width: ${e=>e.head?"150px":"198px"};
        min-width: ${e=>e.head?"150px":"198px"};
        height: ${e=>e.head?"94px":"124px"};
    }
`,py="/assets/images/svg-sprite/icons-sprite.svg",Tt=e=>d.jsx("svg",{width:e.width||"50",className:e.className||"",height:e.height||"50",viewBox:e.viewBox||"0 0 50 50",fill:e.fill||"none",stroke:e.stroke||"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("use",{xlinkHref:`${py}#${e.id}`})}),my=e=>{const[t,l]=$.useState(!1),r=()=>{l(n=>!n)};return d.jsx(gy,{children:d.jsx("form",{role:"search",method:"get",action:"",children:d.jsxs(Cy,{children:[d.jsx(yy,{onMouseEnter:r,onMouseLeave:r,type:"button",children:d.jsx(Tt,{id:"search",width:e.windowWidth>767?"24":"20",height:e.windowWidth>767?"24":"20",viewBox:(e.windowWidth>767,"0 0 24 24"),fill:t?"#1D1F24":"#6b6b6b"})}),d.jsx(vy,{type:"search",name:"search-text",placeholder:"Поиск по сайту"})]})})})},gy=S.div`
    /* grid-area: search;
    justify-self: center;    
    max-width: 506px;
    width: 100%;      */
`,Cy=S.div`    
    position: relative;
`,vy=S.input`
    width: 100%;
    height: 38px;
    line-height: 18px;
    padding: 0 20px 0 64px;
    //border: 1px solid rgb(29, 31, 36); 
    border: 1.25px solid #6b6b6b;    
    border-radius: 10px; 
    font-size: 1.14rem;   
    font-style: italic;
    

    &::placeholder,
    &::-webkit-input-placeholder {
        font-weight: 700; 
        font-size: 1rem;        
        color:  ${({theme:e})=>e.color.placeholder};      
          
    }
    
    &:focus-visible {        
        outline: 2px solid aquamarine;
    }

    @media ${({theme:e})=>e.media.tablet} {
        height: 30px;
        padding: 0 16px 0 48px;
    }
`,yy=S.button`    
    width: 64px;
    height: 38px;    
    border: none;
    border-radius: 10px 0 0 10px;
    padding-top: 2px; 
    background-color: transparent;
    

    position: absolute; 
    transition: all 0.25s ease;   

    /* &:hover {
        background-color: rgb(29, 31, 36);      
    } */

    @media ${({theme:e})=>e.media.tablet} {
        width: 48px;
        height: 30px;
    }   
`,xy=()=>{const e=zr(),[t,l]=$.useState(!1);function r(){l(n=>!n)}return d.jsx(wy,{children:d.jsxs(by,{isPush:t,children:[d.jsx(Sy,{onClick:r,type:"button",children:d.jsx(Tt,{id:"search",width:"18",height:"18",viewBox:"0 -1 24 24",fill:e.color.searchIcon})}),d.jsx(ky,{role:"search",method:"get",action:"",children:d.jsx(Ty,{type:"search",name:"search-text",placeholder:"Поиск по сайту",isPush:t})})]})})},wy=S.div`
    //position: relative;        
`,by=S.div`        
    /* position: absolute; */
    /* top: 50%;
    left: 100%;  */
    /* transform: translate(-50%, -50%); */
    width: ${e=>e.isPush?"274px":"0px"};
    height: 26px;
    background-color: ${({theme:e})=>e.bgCol.default}; 
    line-height: 26px;
    padding-right: 40px;
    border-radius: 8px;
    box-shadow: 0 0 10px ${({theme:e})=>e.color.searchBoxShadow};
    transition: all 0.5s ease;
    padding-left: ${e=>e.isPush?"40px":"0px"};     
    z-index: 100;  
    outline: 1px solid ${({theme:e})=>e.color.outline};  
    
    position: relative;
`,Sy=S.button`    
    width: 40px;
    height: 26px;    
    border: none;        
    background-color: transparent;
    
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;       
`,ky=S.form`
    height: 26px;
`,Ty=S.input`
    
    border: 0;
    background-color: transparent;
    width: ${e=>e.isPush?"98%":"0%"};
    height: 100%;
    z-index: 100;
    outline: none;
    
    font-size: 1rem;
   
    font-style: italic;
    color: ${({theme:e})=>e.color.defaultText};
    transition: all 0.5s 0.6s ease;
    
    

    &::placeholder,
    &::-webkit-input-placeholder {
        font-weight: 700; 
        font-size: 1rem;        
        color:  ${({theme:e})=>e.color.placeholder};
    }
    
    /* &:focus-visible {        
        outline: 2px solid aquamarine;
    } */
`,zp=e=>d.jsx(Ey,{children:e.windowWidth>576?d.jsx(my,{windowWidth:e.windowWidth}):d.jsx(xy,{})}),Ey=S.div`
    max-width: 506px;
    @media ${({theme:e})=>e.media.lg992} {
      max-width: 360px;  
      margin-left: 12px;
    }
    @media screen and (min-width: 577px) {
        grid-area: search;
        justify-self: center;    
        /* max-width: 506px; */
        width: 100%;
    }         
`,Jo=e=>{const t=zr();return d.jsx(Ay,{fontSize:e.fontSize,children:e.socials.map((l,r)=>d.jsx(Py,{href:l.link,children:d.jsx(Tt,{id:l.id,width:e.width,height:e.height,viewBox:"0 0 40 40",fill:e.themeName!=="default"?t.color.outline:l.id==="classmates"?"#F96600":l.id==="telegram"?"#1C8ADB":l.id==="viber"?"#6F3FAA":"#2787F5",stroke:e.themeName==="dark"?"black":"none"})},r))})},Ay=S.div`
    grid-area: social;
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 10px;

    @media ${({theme:e})=>e.media.laptop}{
        column-gap: 16px;  
    }

    @media ${({theme:e})=>e.media.lg992}{
        justify-content: ${e=>e.fontSize&&e.fontSize>14?"center":"flex-end"};  
    }

    @media ${({theme:e})=>e.media.tablet}{
        padding-top: 4px;  
    }

    /* @media ${({theme:e})=>e.media.mobile}{
        padding-top: 4px;        
    } */
`,Py=S.a`
    transform: translateY(0);
    transition: transform 0.4s;
    //filter: ${({theme:e})=>e.filter};

    &:hover {
        transform: translateY(-4px);    
    }
`,Lp=e=>{const t=zr(),l=992;return d.jsx($y,{onClick:e.handleVisuallyImpairedPanel,children:e.isShowVisuallyImpairedPanel?d.jsxs(d.Fragment,{children:[d.jsx(Tt,{id:"eye-off",width:"24",height:"24",viewBox:"0 0 48 48",fill:t.color.defaultText,className:"icon"}),e.windowWidth>l?"Обычная версия сайта":""]}):d.jsxs(d.Fragment,{children:[d.jsx(Tt,{id:"eye",width:"24",height:"16",viewBox:"0 0 24 16",fill:t.color.defaultText,className:"icon"}),e.windowWidth>l?"Версия для слабовидящих":""]})})},$y=S.button`
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    border: none;
    outline: 1px solid ${({theme:e})=>e.color.outline};
    border-radius: 10px;
    font-size: 1rem;
    line-height: 18px;
    font-weight: 700;
    background-color: ${({theme:e})=>e.bgCol.default};
    color: ${({theme:e})=>e.color.defaultText};

    max-width: 280px;
    width: 100%;
    padding: 17px 20px;
    
    display: flex;
    align-items: center;
    gap: 12px;

    transition: all 0.25s ease;

    & > svg {
       flex-shrink: 0; 
    }

    &:hover {
        background-color: ${({theme:e})=>e.bgCol.defaultHover};
        color: ${({theme:e})=>e.color.defaultTextHover};

        .icon {
            fill: ${({theme:e})=>e.color.defaultTextHover};
        }
    }

    @media ${({theme:e})=>e.media.mobile} {
        &:hover {
            background-color: ${({theme:e})=>e.bgCol.default};
            color: ${({theme:e})=>e.color.defaultText};
            .icon {
                fill: ${({theme:e})=>e.color.defaultText};
            }
        }
    }

    @media ${({theme:e})=>e.media.lg992} {
        width: 40px;
        height: 40px;
        padding: 5px 8px;
        border-radius: 8px;        
    }
    

    @media ${({theme:e})=>e.media.mobile} {        
        height: 26px;                
    }

    // &:hover {        
    //     background-color: ${({theme:e})=>e.bgCol.defaultHover};
    //     color: ${({theme:e})=>e.color.defaultTextHover}; 
    // }
`,Mp=e=>d.jsxs(Iy,{children:[d.jsxs(iu,{children:[e.windowWidth>e.breakpoint?d.jsx("span",{children:"Размер шрифта:"}):d.jsxs("span",{children:["Размер",d.jsx("br",{}),"шрифта:"]}),d.jsx(Kr,{type:"button",name:"decrease",onClick:e.handleFontSize,children:"А-"}),d.jsx(Kr,{type:"button",name:"add",onClick:e.handleFontSize,children:"А+"})]}),d.jsxs(iu,{children:[e.windowWidth>e.breakpoint?d.jsx("span",{children:"Цвет сайта:"}):d.jsxs("span",{children:["Цвет",d.jsx("br",{}),"сайта:"]}),d.jsx(Kr,{onClick:e.handleToggleTheme,name:"light",type:"button",children:"А"}),d.jsx(Kr,{onClick:e.handleToggleTheme,name:"dark",type:"button",children:"А"}),d.jsx(Kr,{onClick:e.handleToggleTheme,name:"blue",type:"button",children:"А"})]})]}),Iy=S.div`
    height: 58px;
    width: max-content; 
    margin: 0 auto;
    padding: 10px 0;

    font-weight: 700;
    font-size: 1rem;

    display: flex;

    & > div:first-of-type > button:first-of-type { 
        background-color: ${({theme:e})=>e.bgCol.default};
        color: ${({theme:e})=>e.color.borderVisuallyImpairedPanelBtn}; 
    }

    & > div:first-of-type > button:nth-of-type(2) {
        background-color: ${({theme:e})=>e.bgCol.default}; 
        color: ${({theme:e})=>e.color.borderVisuallyImpairedPanelBtn};       
        margin-left: -1px;
        margin-right: 40px;
    }

    & > div:last-of-type > button:first-of-type {
        background-color: white;
        color: black;
    }

    & > div:last-of-type > button:nth-of-type(2) {
        background-color: black;
        color: white; 
        margin-left: 1px;
    }

    & > div:last-of-type > button:last-of-type {
        background-color: rgba(157, 209, 255, 1);
        color: black; 
        margin-left: 1px;
    }

    @media ${({theme:e})=>e.media.mobile} {
        font-size: 0.86rem;
    }
`,iu=S.div`
    display: flex;
    align-items: center;

    span {        
        margin-right: 15px;
    }    
`,Kr=S.button`
    width: 37px;
    height: 38px;
    border: 1px solid ${({theme:e})=>e.color.borderVisuallyImpairedPanelBtn};
    font-size: 1rem;
    font-weight: 700;
    line-height: 36px;
    text-align: center;  
    
    @media ${({theme:e})=>e.media.mobile} {
        width: 30px;
        height: 31px;
        line-height: 12px;
    }
`,Gl=e=>d.jsx(jy,{children:d.jsx(_y,{top:e.top,right:e.right,left:e.left,onClick:e.handleToggleModalWindow||e.handleToggleSidebar||e.handleCloseMobileModalWindowMenu||e.handleCloseMobileModalWindowContact})}),jy=S.div`    
    width: 100%;
    position: relative;    
`,_y=S.button`
    position: absolute;
    top: ${e=>e.top||"-18px"};
    right: ${e=>e.right||"-18px"};
    left: ${e=>e.left};

    width: 34px;
    height: 34px;
    border: none;
    background-color: ${({theme:e})=>e.bgCol.default};

    &::before {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${({theme:e})=>e.bgCol.btn.close};                
        transform: translateY(1px) rotate(-45deg);
    }

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;        
        background-color: ${({theme:e})=>e.bgCol.btn.close};
        transform: translateY(-1px) rotate(45deg);       
    }
`,Et=S.button`
    border: none;
    outline: 1px solid ${({theme:e})=>e.color.outline};
    border-radius: 10px;
    font-size: 1rem;
    line-height: 18px;
    font-weight: 700;    
    background-color: ${({theme:e})=>e.bgCol.btn.primary};
    color: ${({theme:e})=>e.color.defaultBtn};
    /* transition: background-color 0.4s, box-shadow 0.2s 0.1s; */

    &:hover {
        background: ${({theme:e})=>e.bgCol.btn.primaryHover};
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    &:focus-visible {
        outline: 2px solid rgb(0, 96, 223);
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    }
`,Xe=S(Et)`
    background-color: ${({theme:e})=>e.bgCol.btn.secondary};
    color: ${({theme:e})=>e.color.defaultBtn};    

    &:hover { 
        background: ${({theme:e})=>e.bgCol.btn.secondaryHover};
        box-shadow: none;       
    }
`,gt=S(rn)`
    display: block;
    width: 200px;
    padding: 20px 0;
    border-radius: 10px;
    outline: 1px solid ${({theme:e})=>e.color.outline};    
    font-size: 1rem;
    line-height: 18px;
    font-weight: 700;
    text-align: center;

    background-color: ${({theme:e})=>e.bgCol.btn.secondary};
    color: ${({theme:e})=>e.color.defaultBtn};    

    &:hover { 
        background: ${({theme:e})=>e.bgCol.btn.secondaryHover};               
    }

    @media ${({theme:e})=>e.media.laptop} {
        padding: 16px 0;
    }

    @media ${({theme:e})=>e.media.tablet} {
        margin: 0 auto;
    }

    @media ${({theme:e})=>e.media.mobile} {
        width: 150px;
        padding: 12px 0;
    }
`,pd=S(Pe)`
    display: block;
    max-width: 264px;
    width: 100%;
    padding: 20px 0;
    border-radius: 10px;
    outline: 1px solid ${({theme:e})=>e.color.outline};    
    font-size: 1rem;
    line-height: 18px;
    font-weight: 700;
    text-align: center;

    background-color: ${({theme:e})=>e.bgCol.btn.primary};
    color: ${({theme:e})=>e.color.defaultBtn};    

    &:hover {
        background: ${({theme:e})=>e.bgCol.btn.primaryHover};        
    }

    @media ${({theme:e})=>e.media.laptop} {
        padding: 16px 0;
    }

    @media ${({theme:e})=>e.media.mobile} {
        padding: 12px 0;
    }
`,B6=S.button`
    max-width: 456px;
    width: 100%;
    height: 50px;
    padding: 12px 20px;
    border: 1px solid ${({theme:e})=>e.color.primary};
    //outline: 1px solid ${({theme:e})=>e.color.outline};
    border-radius: 9px;
    font-size: 1rem;    
    font-weight: 700; 

    background-color: ${e=>e.isOpenMenu?({theme:t})=>t.bgCol.btn.primary:({theme:t})=>t.bgCol.default};

    color: ${e=>e.isOpenMenu?({theme:t})=>t.color.defaultBtn:({theme:t})=>t.color.primary};
    z-index: 30;
    /* transition: background-color 0.4s, box-shadow 0.2s 0.1s; */

    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        box-shadow: rgba(0, 166, 81, 1) 0px 0px 10px 2px inset;
    }
    
    @media ${({theme:e})=>e.media.mobile} {
        /* left: 50%;
        transform: translateX(-50%); */
        max-width: 300px;
        &:hover {
            box-shadow: none;
        }
    }
`,J=S.h2`

    color: ${({theme:e})=>e.color.secondary};
    font-size: calc((100vw - 26rem)/(137 - 26) * (3.4 - 1.4) + 1.4rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 28px;

    span {
        color: ${({theme:e})=>e.color.primary}; 
    }

    @media ${({theme:e})=>e.media.tablet} {
        margin-bottom: 15px;
    }
    
`,md=e=>{const t=zr(),l=767,r=n=>n.replace(/\D/g,"");return d.jsxs(zy,{children:[d.jsxs(ou,{children:[d.jsx(Tt,{id:"phone",width:"20",height:"20",viewBox:"0 0 20 20",fill:t.color.fillContactIcon}),e.windowWidth>l?e.contacts.phone1:d.jsx("a",{href:`tel:${r(e.contacts.phone1)}`,children:e.contacts.phone1})]}),d.jsx(Ly,{children:"(многоканальный)"}),d.jsxs(ou,{children:[d.jsx(Tt,{id:"phone",width:"20",height:"20",viewBox:"0 0 20 20",fill:t.color.fillContactIcon}),e.windowWidth>l?e.contacts.phone2:d.jsx("a",{href:`tel:${r(e.contacts.phone2)}`,children:e.contacts.phone2})]}),d.jsxs(My,{href:`mailto:${e.contacts.email}`,children:[d.jsx(Tt,{id:"email",width:"20",height:"20",viewBox:"0 0 20 20",fill:t.color.fillContactIcon}),e.contacts.email]}),e.contacts.callback&&e.handleToggleModalWindow&&d.jsx(Ry,{onClick:()=>{var n;return(n=e.handleToggleModalWindow)==null?void 0:n.call(e,"callback")},children:"Заказать звонок"})]})},zy=S.div`
    grid-area: contact;    
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media ${({theme:e})=>e.media.tablet} {
        align-items: flex-start;
    }    
`,ou=S.span`
    display: flex;
    column-gap: 10px;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem); 
    font-weight: 700;
    line-height: 20px;
    color: ${({theme:e})=>e.color.defaultText};
`,Ly=S.span`
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem); 
    color: ${({theme:e})=>e.color.multiСhannel};
    margin-bottom: 10px;

    @media ${({theme:e})=>e.media.tablet} {
        align-self: center;
    }
`,My=S.a`
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-weight: 700;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem); 
    text-decoration: none;
    color: ${({theme:e})=>e.color.defaultText};
    margin-top: 10px;
`,Ry=S.a`
    font-size: calc((100vw - 26rem)/(137 - 26) * (0.86 - 1) + 1rem); 
    color: ${({theme:e})=>e.color.primary};
    font-weight: 700;
    margin-top: 10px;

    &:hover {
        color: ${({theme:e})=>e.color.secondary};  
    }

    @media ${({theme:e})=>e.media.tablet} {
        align-self: center;
    }
`,Ny=e=>d.jsxs(Oy,{isOpen:e.isOpen,children:[d.jsx(Gl,{handleCloseMobileModalWindowContact:e.handleCloseMobileModalWindowContact,top:"-20vh",right:"0"}),d.jsx(J,{children:"Связаться с нами"}),d.jsx(Et,{onClick:()=>e.handleToggleModalWindow("record"),children:"Запись на прием"}),d.jsx(Xe,{onClick:()=>e.handleToggleModalWindow("callback"),children:"Заказать обратный звонок"}),d.jsx(Jo,{themeName:e.themeName,socials:e.socials,width:"60",height:"60"}),d.jsx(md,{themeName:e.themeName,contacts:e.contacts,windowWidth:e.windowWidth})]}),Oy=S.div`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100vh;
    padding: 0 20px;
       
    
    background-color: ${({theme:e})=>e.bgCol.default};
    z-index: 1000;
    
    position: fixed;
    top: 58px;  
    left: 0;
    right: 0;
    bottom: 0;
    transform: ${e=>e.isOpen?"translateY(0)":"translateY(calc(-100vh - 58px))"};
    transition: transform 0.6s; 

    ${Et}, ${Xe} {
        width: 100%;
        padding: 15px 20px; 
        margin-bottom: 20px;       
    }

    & div:last-of-type {
        margin-top: 20px;
    } 
`,mn="/assets/images/png-sprite/counter/sprite_counter-min.png",By=xl`

    0% {
            -webkit-transform: translate(10px, 10px);
                    transform: translate(10px, 10px);
    }
    25% {
        -webkit-transform: translate(10px, 0);
                transform: translate(10px, 0);
    }
    50% {
        -webkit-transform: translate(0, -10px);
                transform: translate(0, -10px);
    }
    75% {
        -webkit-transform: translate(0, 0);
                transform: translate(0, 0);
    }
    100% {
        -webkit-transform: translate(10px, 10px);
                transform: translate(10px, 10px);
    }  

`,Dy=xl`
    0% {
		-webkit-transform: translate(-10px, 0px);
		        transform: translate(-10px, 0px);
	}
	25% {
		-webkit-transform: translate(0px, -10px);
		        transform: translate(0px, -10px);
	}
	50% {
		-webkit-transform: translate(0, 10px);
		        transform: translate(0, 10px);
	}
	75% {
		-webkit-transform: translate(0, 0);
		        transform: translate(0, 0);
	}
	100% {
		-webkit-transform: translate(-10px, 0px);
		        transform: translate(-10px, 0px);
	}
`,Fy=xl`
    0% {
		-webkit-transform: scale(0);
		        transform: scale(0);
	}
	50% {
		-webkit-transform: scale(3);
		        transform: scale(3);
	}
	100% {
		-webkit-transform: scale(3);
		        transform: scale(3);
	}
`,Wy=xl`
    0% {
		transform: translateY(0);
	}
	30% {
		transform: translateY(0);
	}
	60% {
		transform: translateY(-20px);
	}
	90% {
		transform: translateY(0);
	}
`;xl`
	0% {
		height: 66px;
		/* opacity: 0; */
	}
	25% {
		height: 132px;
		/* opacity: 0.25; */
	}
	50% {
		height: 188px;
		/* opacity: 0.5; */
	}
	
	100% {
		height: 264px;
		/* opacity: 1; */
	}
`;const Hn=xl`
    from {
      /* visibility: hidden; */
      opacity: 0;
    }  
    to {
      /* visibility: visible; */
      opacity: 1;
    }
`,Rp=xl`
	from {
		transform: translateY(-150%);
		opacity: 0;
  	}
	to {
		transform: translateY(0%);
		opacity: 1;
	}
`,Np=xl`
	from {
		transform: translateY(0%);
		opacity: 1;
  	}
	to {
		transform: translateY(150%);
		opacity: 0;
	}
`,gd=e=>{const t=String(e.counter.girls+e.counter.boys);return d.jsxs(Vy,{fontSize:e.fontSize,children:[d.jsxs(Hy,{children:[d.jsx("span",{children:"Наши детки"}),d.jsxs(Uy,{children:[d.jsx(Gy,{}),d.jsxs(qy,{children:[d.jsx("span",{children:t[0]}),d.jsx("span",{children:t[1]}),d.jsx("span",{children:t[2]}),d.jsx("span",{children:t[3]})]})]})]}),d.jsxs(Yy,{children:[d.jsx("span",{children:"Девочки"}),d.jsx("span",{children:e.counter.girls})]}),d.jsx(Ky,{}),d.jsxs(Xy,{children:[d.jsx("span",{children:"Мальчики"}),d.jsx("span",{children:e.counter.boys})]})]})},Vy=S.div`
    grid-area: counter_children; 
    justify-self: center;
    padding-top: 10px;
    
    max-width: 506px;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-style: italic;
    
    display: grid;
    grid-template-columns: minmax(128px, 196px) auto auto auto;
    grid-template-areas:
        "total_count girls_count kids boys_count";

    @media ${({theme:e})=>e.media.lg992} {
        display: ${e=>e.fontSize&&e.fontSize>14?"none":"grid"};
        max-width: 394px;
        margin: 0 auto; 
        grid-template-columns: minmax(128px, 170px) auto auto auto;
        align-items: center;        
    }

    @media ${({theme:e})=>e.media.mobile} {
        max-width: 224px;        
        margin-bottom: 10px;        
        grid-template-columns: auto 1fr auto;
        grid-template-areas:
        "total_count total_count total_count" 
        "girls_count kids boys_count";        
    }
`,Hy=S.div`
    grid-area: total_count;
    text-align: center;
    overflow: hidden;

    & > span {        
        font-size: 20px;
        line-height: 20px;        
        color: ${({theme:e})=>e.childrenCount.secondary};               
    }

    @media ${({theme:e})=>e.media.lg992} {
        width: 170px;
        margin: 0 auto;
        
        & > span {
            font-size: 16px;
            line-height: 16px; 
        }
    }

    /* @media ${({theme:e})=>e.media.mobile} {
        width: 170px; 
        margin: 0 auto;
        

        & > span {
            font-size: 1.14rem;
            line-height: 1.14rem; 
        }
    } */
    
    
`,Uy=S.div`
    
    width: 196px;
    //width: 100%;
    height: 82px;
    
    background-image: url(${mn});
    background-position: 0 0;
    background-size: 118.878%, 217.073%;
    background-repeat: no-repeat;
    filter: ${({theme:e})=>e.filter};    

    position: relative;
    
    &::before {
        content: "";
        display: block;
        width: 28px;
        height: 49px;
        background-image: url(${mn});
        //background-position: -196px -66px;
        background-position: 95.61% 51.163%;
        background-size: 832.143%, 363.265%;
        //filter: ${({theme:e})=>e.filter};

        position: absolute;
        top: 8px;
        left: 10px;
        z-index: 10;
        animation: ${By} 7s cubic-bezier(0.4, 0.51, 0.52, 0.57) infinite;
    }

    &::after {
        content: "";
        display: block;
        width: 37px;
        height: 66px;
        background-image: url(${mn});
        //background-position: -196px 0px;
        background-position: 100% 0;
        background-size: 629.73%, 269.697%;
        //filter: ${({theme:e})=>e.filter};

        position: absolute;
        top: 6px;
        right: 0;
        z-index: 10;
        animation: ${Dy} 7s cubic-bezier(0.4, 0.51, 0.52, 0.57) infinite;
    }   

    @media ${({theme:e})=>e.media.lg992} {
        width: 149.96px;
        height: 62.42px;
        margin: 0 auto;        

        &::before {
            width: 20.27px;
            height: 36.48px;
            left: 4px;
        }

        &::after {
            width: 27.56px;
            height: 49.45px;
        }

    }
    
    /* @media ${({theme:e})=>e.media.mobile} {
        width: 149.96px;
        height: 62.42px;
        margin: 0 auto;        

        &::before {
            width: 20.27px;
            height: 36.48px;
            left: 4px;
        }

        &::after {
            width: 27.56px;
            height: 49.45px;
        }
    } */
`,Gy=S.div`    
    display: block;
    width: 157px;
    height: 32px;
    background-image: url(${mn});
    //background-position: 0px -146px;
    background-position: 0 100%;
    background-size: 148.408%, 556.25%;
    //filter: ${({theme:e})=>e.filter};
    

    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 10;
    animation:  ${Fy} 2s ease-in-out infinite;

    @media ${({theme:e})=>e.media.lg992} {
        width: 119.97px;        
        height: 24.32px;
    }

`,qy=S.div`

    position: absolute; 
    width: max-content; 
         
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    

    span {
        display: inline-block;        
        font-style: normal;
        /* font-size: 2.85rem;
        line-height: 3.28rem; */
        font-size: 40px;
        line-height: 44px;
        
        width: 30px;
        height: 44px;
        border: 1px solid ${({theme:e})=>e.childrenCount.borderColor};
        text-align: center;
        background-color: ${({theme:e})=>e.childrenCount.bgTotalColor};  
        color: ${({theme:e})=>e.childrenCount.totalColor};             
    }

    span + span {
        margin-left: 2px;
    }

    @media ${({theme:e})=>e.media.lg992} {        
        span {
            width: 23.51px;        
            height: 33.23px;
            /* font-size: 2.2rem;
            line-height: 2.53rem; */
            font-size: 30px;
            line-height: 33px;
        }        
    }
`,Yy=S.div`
    grid-area: girls_count;
    
    /* font-size: 1.29rem;
    line-height: 1.43rem;*/
    font-size: 18px;
    line-height: 20px; 
    color: ${({theme:e})=>e.childrenCount.primary};

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    span + span {
        /* font-size: 3.71rem;
        line-height: 5.86rem; */
        font-size: 52px;
        line-height: 82px; 
        color: ${({theme:e})=>e.childrenCount.secondary};
    }

    @media ${({theme:e})=>e.media.lg992} {
        /* font-size: 1.14rem;
        line-height: 1.29rem; */
        font-size: 16px;
        line-height: 18px; 
        margin-left: 30px;

        span + span {
            /* font-size: 2.9rem;
            line-height: 3.33rem; */
            font-size: 40px;
            line-height: 46px; 
        }
    }

    @media ${({theme:e})=>e.media.mobile} {
        margin-left: 0;
    }

`,Ky=S.div`
    grid-area: kids;
    justify-self: end;

    display: block;
    margin-top: 25px;
    background-image: url(${mn});    
    //background-position: 0px -82px;
    background-position: 0 71.93%;
    background-size: 240.206%, 278.125%;
    filter: ${({theme:e})=>e.filter};
    width: 97px;
    height: 64px;

    animation: ${Wy} 3s cubic-bezier(0.4, 0, 0.2, 1) 8;

    @media ${({theme:e})=>e.media.lg992} {
        width: 73.76px;
        height: 47.83px;
        margin-top: 12px;
    }
`,Xy=S.div`
    grid-area: boys_count;    
    
    /* font-size: 1.29rem;
    line-height: 1.43rem; */
    font-size: 18px;
    line-height: 20px;
    color: ${({theme:e})=>e.childrenCount.primary}; 

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span + span {
        /* font-size: 3.71rem;
        line-height: 5.86rem; */
        font-size: 52px;
        line-height: 82px;
        color: ${({theme:e})=>e.childrenCount.secondary};
    }

    @media ${({theme:e})=>e.media.lg992} {
        /* font-size: 1.14rem;
        line-height: 1.29rem; */
        font-size: 16px;
        line-height: 18px;

        span + span {
            /* font-size: 2.9rem;
            line-height: 3.33rem; */
            font-size: 40px;
            line-height: 46px;
        }
    }
`,Qy=e=>{const[t,l]=$.useState(!1);function r(){l(u=>!u)}function n(u,f){u.preventDefault(),e.setIsActiveId(f),l(m=>!m)}const i=e.sidebar.sidebarMenu.entities.pages[e.id],{title:o,path:a,level:s}=i,c="pages"in i?i.pages:null;return d.jsxs(Jy,{isOpen:t,level:s,pages:c,descktop:e.descktop,mobile:e.mobile,children:[d.jsxs(Zy,{children:[d.jsx(Pe,{to:`/${a}`,onClick:u=>n(u,e.id),children:o}),c&&d.jsx(e2,{isOpen:t,onClick:()=>r(),children:"Свернуть/развернуть"})]}),t&&c&&d.jsx(Cd,{sidebar:e.sidebar,ids:c,isActiveId:e.isActiveId,setIsActiveId:e.setIsActiveId})]})},Jy=S.li`
   
      
    width: "100%";      
    padding: ${e=>e.level===1?"3px 0":"8px 0"};
    
    font-weight: ${e=>e.level===1?"500":"700"};
    
    text-align: left;

    /* border-bottom: 1px solid ${e=>e.level===1?"transparent":({theme:t})=>t.color.primary}; */

    ${e=>e.descktop&&U`
        border-bottom: 1px solid ${t=>t.level===1?"transparent":({theme:l})=>l.color.primary};
    `}

    ${e=>e.mobile&&U`
        border-bottom: 1px solid ${t=>t.level===-1?({theme:l})=>l.color.primary:"red"};
    `}

    
    

    &:first-of-type {
        border-top: 1px solid ${e=>e.level===0||e.level===-1?({theme:t})=>t.color.primary:"transparent"};
    }  

    a {       
        text-align: left;
        max-width: 260px;
        padding: 3px 0;
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);

        color: ${e=>e.isOpen&&e.level===0&&e.pages?({theme:t})=>t.color.primary:({theme:t})=>t.color.defaultText}; 

        margin-bottom: ${e=>e.isOpen&&(e.level===0||e.level===-1)&&e.pages?"10px":"0"};        
    }

    a:hover {
        text-decoration: ${e=>e.level===1?"underline":"none"};
    }

    @media ${({theme:e})=>e.media.lg992}{ 
        
        a {
            text-align: center;
            max-width: 100%;  
        }
    }

    @media ${({theme:e})=>e.media.mobile}{ 
        a {
            text-align: left;             
        }
    }
`,Zy=S.div`
    
    width: 100%;
    display: grid;
    grid-template-columns: auto 20px;
    justify-content: space-between;
    align-items: center;

    a {
        grid-column: 1/2;
    }

    @media ${({theme:e})=>e.media.lg992}{ 
        width: auto;
        
        a {
            margin-left: calc(50vw - 20px);
            transform: translateX(-50%);  
        }
    }

    @media ${({theme:e})=>e.media.mobile}{ 
        width: 100%;       
        a {
            margin-left: 0;
            transform: translateX(0);
        }
    }
`,e2=S.button`
    grid-column: 2/3;
    position: relative;
    font-size: 0;    
    //background-color: aqua;    
    background-color: transparent;    
    width: 20px;
    height: 20px;
    border: none;    
    transition: transform .3s;  
    transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0deg)"};  

    &::before {
        content: '';
        position: absolute;        
        width: 8px;
        height: 8px;
        top: 0;
        right: 0;
        bottom: 0;    
        left: 0;
        margin: auto; 
        border-right: 2px solid ${({theme:e})=>e.color.defaultText};
        border-bottom: 2px solid ${({theme:e})=>e.color.defaultText};   
        transform: rotate(45deg);        
    }

    @media ${({theme:e})=>e.media.lg992}{ 
        justify-self: end;
    }
`,Cd=e=>d.jsx(t2,{descktop:e.descktop,children:e.ids.map(t=>d.jsx(Qy,{id:t,isActiveId:e.isActiveId,setIsActiveId:e.setIsActiveId,sidebar:e.sidebar,mobile:e.mobile,descktop:e.descktop},t))}),t2=S.ul`
    width: ${e=>e.descktop?"306px":"100%"}; 
    //transition: height 1.3s ease;  
    /* @media ${({theme:e})=>e.media.lg992}{ 
        margin-top: 20px;
    } */
`,Op=e=>($.useEffect(()=>(e.isOpen&&(document.body.style.overflowY="auto",document.body.style.position="fixed",document.body.style.width="100%"),()=>{document.body.style.overflowY="unset",document.body.style.position="unset",document.body.style.width="unset"}),[e.isOpen]),d.jsxs(l2,{isOpen:e.isOpen,children:[d.jsx(Gl,{handleCloseMobileModalWindowMenu:e.handleCloseModalWindowMenu,top:"-20px",right:"0"}),d.jsx(gd,{counter:e.counter}),d.jsx(Et,{onClick:()=>e.handleToggleModalWindow("3ndfl"),children:"Возврат 13%"}),d.jsx(Cd,{sidebar:e.sidebar,ids:e.sidebar.sidebarMenu.entities.topLevelIds.mobile,isActiveId:e.isActiveId,setIsActiveId:e.setIsActiveId,mobile:!0})]})),l2=S.div`  
    width: 100%;
    height: 100%;    
    padding: 44px 20px 64px;
    margin: 0 auto; 
    overflow-y: auto;      
    
    background-color: ${({theme:e})=>e.bgCol.default};
    z-index: 100;
    
    position: fixed;
    top: 58px;  
    left: 0;  
      
    transform: ${e=>e.isOpen?"translateX(0)":"translateX(-100%)"};
    transition: transform 0.6s; 


    @media ${({theme:e})=>e.media.lg992}{
        ${Et} {
            display: none;                   
        }

        & > div:nth-of-type(2) {
            margin-bottom: 20px;
        }        
    }

    @media ${({theme:e})=>e.media.tablet}{
        ${Et} {
            display: block; 
            width: 100%;
            padding: 15px 20px; 
            margin-bottom: 10px;      
        }
    }
`,t0=e=>d.jsx(r2,{onClick:e.handleBurgerBtnClick,children:d.jsx("span",{})}),r2=S.button`
    display: none;
    width: 45px;
    height: 45px;
    border: none;
    background-color: transparent;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${({theme:e})=>e.color.defaultText};
        position: relative;

        &::before{
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${({theme:e})=>e.color.defaultText};
            transform: translateY(-10px);
            position: absolute;
        }
        &::after{
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${({theme:e})=>e.color.defaultText};
            transform: translateY(8px);
            position: absolute;
        }
    }

    @media ${({theme:e})=>e.media.lg992} {
        display: block;
    }    
`,n2=e=>{const t=zr(),[l,r]=$.useState(!1),n=()=>{r(o=>!o)},i=()=>{r(o=>!o)};return $.useEffect(()=>(l&&(document.body.style.overflowY="hidden"),()=>{document.body.style.overflowY="unset"}),[l]),d.jsxs(i2,{children:[d.jsx(Mp,{handleToggleTheme:e.handleToggleTheme,handleFontSize:e.handleFontSize,breakpoint:e.breakpoint,windowWidth:e.windowWidth}),d.jsx(o2,{children:d.jsxs(ae,{children:[d.jsx(Lp,{handleVisuallyImpairedPanel:e.handleVisuallyImpairedPanel,isShowVisuallyImpairedPanel:e.visuallyImpairedPanel.show,breakpoint:e.breakpoint,windowWidth:e.windowWidth}),d.jsx(zp,{windowWidth:e.windowWidth}),d.jsx(Jo,{themeName:e.themeName,socials:e.socials,width:e.windowWidth>576?"30":"24",height:e.windowWidth>576?"30":"24"}),d.jsx(s2,{onClick:n,children:d.jsx(Tt,{id:"phone",width:"18",height:"18",viewBox:"0 0 20 20",fill:t.color.mobileFillPhoneBtn})}),e.windowWidth>576&&d.jsx(t0,{handleBurgerBtnClick:e.handleBurgerBtnClick}),d.jsx(Ny,{isOpen:l,handleToggleModalWindow:e.handleToggleModalWindow,handleCloseMobileModalWindowContact:i,themeName:e.themeName,contacts:e.contacts,socials:e.socials,windowWidth:e.windowWidth})]})}),d.jsxs(a2,{children:[d.jsxs(ae,{children:[d.jsx(hd,{head:!0}),e.windowWidth>576&&d.jsx(gd,{counter:e.counter}),e.windowWidth<=576&&d.jsx(t0,{handleBurgerBtnClick:e.handleBurgerBtnClick})]}),d.jsx(Op,{isOpen:e.isOpenMenu,handleCloseModalWindowMenu:e.handleCloseModalWindowMenu,counter:e.counter,handleToggleModalWindow:e.handleToggleModalWindow,sidebar:e.sidebar,isActiveId:e.isActiveId,setIsActiveId:e.setIsActiveId})]})]})},i2=S.header` 
    display: flex;
    flex-direction: column;    
   
`,o2=S.div` 
    background-color: ${({theme:e})=>e.bgCol.header.mobileTop};
    height: 46px;
    overflow: hidden;

    ${ae} {
        display: flex;        
        align-items: center;
        justify-content: space-between; 
        gap: 14px;  
    }    
`,s2=S.button`
    width: 40px;    
    height: 26px;
    background-color: ${({theme:e})=>e.bgCol.btn.mobileFhone};    
    border: none;
    border-radius: 8px;
    flex-shrink: 0;
`,a2=S.div`
    padding: 10px 0;

    ${ae} {
        display: flex; 
        justify-content: space-between;       
        align-items: center;        
    }
       
`,d2=e=>{const t=zr(),l=t.color.activeLinkMenu,r=t.color.defaultLinkMenu,n=e.subMenu.map((o,a)=>d.jsx(h2,{children:d.jsx(rn,{to:`/${o.path}`,children:o.ancor})},a)),i=e.mainMenu.map((o,a)=>a===0?d.jsx(Os,{children:d.jsxs(rn,{to:`${o.path}`,onClick:e.handleToggleSidebar,children:[d.jsx(Tt,{id:"burgermenu",width:"24",height:"24",viewBox:"0 0 24 24",stroke:t.color.firstLinkMenu}),o.ancor]})},a):a===6?d.jsx(Os,{children:d.jsxs(rn,{to:"/#",children:[o.ancor,d.jsx(f2,{children:n})]})},a):d.jsx(Os,{children:d.jsx(rn,{to:`/${o.path}`,style:({isActive:s,isPending:c})=>({color:s?l:r}),children:o.ancor})},a));return d.jsx(c2,{children:d.jsx(u2,{children:i})})},c2=S.nav` 
    @media ${({theme:e})=>e.media.lg992}{
        display: none;
    }
    
`,u2=S.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 16px;
    min-height: 64px;
    list-style: none;
    
    & > li:first-child a { 
        display: flex;
        align-items: center;
        gap: 10px;
        
        height: 54px;       
        padding: 12px 20px;
        border-radius: 10px;
        text-decoration: none;
        background-color: ${({theme:e})=>e.bgCol.firstLinkMenu};
        color: ${({theme:e})=>e.color.firstLinkMenu} !important;               
    }

    
    & > li:first-child a:hover {
        box-shadow: ${({theme:e})=>e.color.firstLinkMenu} 0px 0px 10px 2px inset;
    }

    & > li:nth-child(7) a {        
        position: relative;
        display: inline-block;
        padding: 22.5px 5px;                
    }
`,Os=S.li`

    a {
        font-size: 1.1rem;
        font-weight: 700;
        text-decoration: none;
        color: ${({theme:e})=>e.color.defaultLinkMenu};
        padding: 6px 0; 
    }

    a::after {
        content: "";
        display: block;        
        height: 1.25px;
        background-color: ${({theme:e})=>e.bgCol.header.menu.textDecorationLink};
        transform: scale(0);
        transition: transform 0.4s;
    }

    
    &:nth-child(7):hover ul {
        opacity: 1;
        transform: scale(1);
    } 

    &:not(:nth-child(7)) a:hover::after {
        transform: scale(1);  
    }
`,f2=S.ul`
    position: absolute; 
    
    list-style: none;
    width: 178px;    
    background-color: ${({theme:e})=>e.bgCol.header.menu.submenu}; 
    padding: 15px;
    border-radius: 10px;
    top: 64.5px;
    left: -58px;
    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 6px;    
    
    opacity: 0;
    transform: scaleY(0);
    transform-origin: 0 0;
    transition: .5s ease-in-out;


    &::before {
        position: absolute;
        left: 50%;
        top: -2px;
        content: '';
        display: block;
        width: 15px;
        height: 15px;
        background-color: ${({theme:e})=>e.bgCol.header.bottom};
        transform: rotate(45deg) translateX(-50%);
        /* margin: 0 auto; 
        margin-top: -22px; */
    }
`,h2=S.li`
    

    & > a {
        font-size: 1rem;
        font-weight: 500;
        line-height: 17px;
        color: ${({theme:e})=>e.color.defaultText};
        padding: 4px 0 !important;        
    }

    & > a::after {
        content: "";
        display: block;               
        /* height: 1.25px; */
        background-color: ${({theme:e})=>e.color.defaultText};
        transform: scale(0);
        transition: transform 0.4s;
    }

    & > a:hover::after {
        transform: scale(1);  
    }   

`,p2=e=>d.jsxs(m2,{children:[d.jsx(Mp,{handleToggleTheme:e.handleToggleTheme,handleFontSize:e.handleFontSize,breakpoint:e.breakpoint,windowWidth:e.windowWidth}),d.jsx(g2,{children:d.jsxs(ae,{children:[d.jsx(Lp,{handleVisuallyImpairedPanel:e.handleVisuallyImpairedPanel,isShowVisuallyImpairedPanel:e.visuallyImpairedPanel.show,breakpoint:e.breakpoint,windowWidth:e.windowWidth}),d.jsxs(C2,{children:[d.jsx(Et,{onClick:()=>e.handleToggleModalWindow("3ndfl"),children:"Возврат 13%"}),d.jsx(Et,{onClick:()=>e.handleToggleModalWindow("record"),children:"Запись на прием"}),d.jsx(Xe,{onClick:()=>e.handleToggleModalWindow("callback"),children:e.windowWidth>992?"Заказать обратный звонок":"Заказать звонок"}),d.jsx(t0,{handleBurgerBtnClick:e.handleBurgerBtnClick}),d.jsx(Op,{isOpen:e.isOpenMenu,handleCloseModalWindowMenu:e.handleCloseModalWindowMenu,counter:e.counter,handleToggleModalWindow:e.handleToggleModalWindow,sidebar:e.sidebar,isActiveId:e.isActiveId,setIsActiveId:e.setIsActiveId})]})]})}),d.jsx(v2,{fontSize:e.fontSize,children:d.jsxs(ae,{children:[d.jsx(hd,{head:!0}),d.jsx(gd,{counter:e.counter,fontSize:e.fontSize}),d.jsx(zp,{windowWidth:e.windowWidth}),d.jsx(Jo,{themeName:e.themeName,socials:e.socials,width:e.windowWidth>992?"40":"30",height:e.windowWidth>992?"40":"30",fontSize:e.fontSize}),d.jsx(md,{themeName:e.themeName,contacts:e.contacts,windowWidth:e.windowWidth})]})}),d.jsx(y2,{children:d.jsx(ae,{children:d.jsx(d2,{mainMenu:e.mainMenu,subMenu:e.subMenu,handleToggleSidebar:e.handleToggleSidebar})})})]}),m2=S.div` 
    
`,g2=S.div`
    background-color: ${({theme:e})=>e.bgCol.header.top};
    height: 70px; 
    
    ${ae} {
        display: flex;        
        align-items: center;        
    }
`,C2=S.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;    
    gap: 10px;    

    ${Et} {
        padding: 16px 20px;        
    } 

    ${Xe} {
        max-width: 312px;
        width: 100%;
        padding: 16px 20px;        
    }

    button:last-of-type {
        margin-left: 10px;
    }
    
    @media ${({theme:e})=>e.media.lg992} {
        ${Et} {
            padding: 14px 16px;                    
        }

        ${Xe} {           
            padding: 14px 16px;                  
        }
    }
`,v2=S.div`
    background-color: ${({theme:e})=>e.bgCol.header.default};
    height: 182px;
    
    ${ae} {
        display: grid; 
        grid-template-columns: minmax(164px, 198px) 1fr auto;
        grid-template-rows: repeat(4, minmax(20px, auto));
        grid-template-areas:    
            "logo counter_children social" 
            "logo counter_children contact"  
            "logo search contact"
            "logo search contact";
        align-items: center;
    }

    @media ${({theme:e})=>e.media.lg992} {
        ${e=>e.fontSize>14&&U`    
            ${ae} {
                //grid-template-columns: minmax(164px, 198px) 1fr;
                grid-template-rows: repeat(3, minmax(20px, auto));
                grid-template-areas:    
                    "logo social contact" 
                    "logo search contact"  
                    "logo search contact";
            }
        `}        
    }
`,y2=S.div`
    background-color: ${({theme:e})=>e.bgCol.header.bottom};    
`,x2=e=>{const[l,r]=$.useState(null),[n,i]=$.useState(!1),o=()=>{i(s=>!s)},a=()=>{i(s=>!s)};return d.jsx(w2,{children:e.windowWidth>767?d.jsx(p2,{mainMenu:e.mainMenu,subMenu:e.subMenu,contacts:e.contacts,counter:e.counter,socials:e.socials,handleToggleTheme:e.handleToggleTheme,handleFontSize:e.handleFontSize,themeName:e.themeName,setThemeName:e.setThemeName,fontSize:e.fontSize,handleVisuallyImpairedPanel:e.handleVisuallyImpairedPanel,visuallyImpairedPanel:e.visuallyImpairedPanel,handleToggleSidebar:e.handleToggleSidebar,handleToggleModalWindow:e.handleToggleModalWindow,breakpoint:767,windowWidth:e.windowWidth,sidebar:e.sidebar,isActiveId:l,setIsActiveId:r,isOpenMenu:n,setIsOpenNenu:i,handleCloseModalWindowMenu:o,handleBurgerBtnClick:a}):d.jsx(n2,{counter:e.counter,socials:e.socials,contacts:e.contacts,handleToggleTheme:e.handleToggleTheme,handleFontSize:e.handleFontSize,themeName:e.themeName,handleVisuallyImpairedPanel:e.handleVisuallyImpairedPanel,visuallyImpairedPanel:e.visuallyImpairedPanel,handleToggleModalWindow:e.handleToggleModalWindow,breakpoint:767,windowWidth:e.windowWidth,sidebar:e.sidebar,isActiveId:l,setIsActiveId:r,isOpenMenu:n,setIsOpenNenu:i,handleCloseModalWindowMenu:o,handleBurgerBtnClick:a})})},w2=S.div` 
    
`,b2=()=>d.jsx("div",{children:"Страница врачей"}),S2=e=>{const{gordeeva_1:t,gordeeva_2:l,volkova:r,ladyagina:n,sabirova:i,serebryakova:o,shabarshina:a,simanskaya:s,lavrenuk:c,klemendeev:u,salmina:f,kogevnikova:m,manipulation:v,procedure:C}=e.timeTablePage.calendar.mapper,x={gordeeva_1:d.jsxs("span",{children:[d.jsx("b",{children:t.doctor}),d.jsx("br",{}),t.description]}),gordeeva_2:d.jsxs("span",{children:[d.jsx("b",{children:l.doctor}),d.jsx("br",{}),l.description]}),volkova:d.jsxs("span",{children:[d.jsx("b",{children:r.doctor}),d.jsx("br",{}),r.description]}),ladyagina:d.jsxs("span",{children:[d.jsx("b",{children:n.doctor}),d.jsx("br",{}),n.description]}),sabirova:d.jsxs("span",{children:[d.jsx("b",{children:i.doctor}),d.jsx("br",{}),i.description]}),serebryakova:d.jsxs("span",{children:[d.jsx("b",{children:o.doctor}),d.jsx("br",{}),o.description]}),shabarshina:d.jsxs("span",{children:[d.jsx("b",{children:a.doctor}),d.jsx("br",{}),a.description]}),simanskaya:d.jsxs("span",{children:[d.jsx("b",{children:s.doctor}),d.jsx("br",{}),s.description]}),lavrenuk:d.jsxs("span",{children:[d.jsx("b",{children:c.doctor}),d.jsx("br",{}),c.description]}),klemendeev:d.jsxs("span",{children:[d.jsx("b",{children:u.doctor}),d.jsx("br",{}),u.description]}),salmina:d.jsxs("span",{children:[d.jsx("b",{children:f.doctor}),d.jsx("br",{}),f.description]}),kogevnikova:d.jsxs("span",{children:[d.jsx("b",{children:m.doctor}),d.jsx("br",{}),m.description]}),manipulation:d.jsxs("span",{children:[d.jsx("b",{children:v.doctor}),d.jsx("br",{}),v.description]}),procedure:d.jsxs("span",{children:[d.jsx("b",{children:C.doctor}),d.jsx("br",{}),C.description]})};return d.jsx(ae,{children:d.jsx(k2,{cellspacing:0,cellpadding:0,style:{border:"1px solid black",width:"100%"},children:e.timeTablePage.calendar.surova.map(w=>d.jsxs("tr",{children:[d.jsx(Gt,{children:x[w.id]}),w.Monday!==void 0&&d.jsx(Gt,{colspan:w.Monday==="Отпуск"?w.colspan:1,children:w.Monday}),w.Tuesday!==void 0&&d.jsx(Gt,{colspan:w.Tuesday==="Отпуск"?w.colspan:1,children:w.Tuesday}),w.Wednesday!==void 0&&d.jsx(Gt,{colspan:w.colspan??1,children:w.Wednesday}),w.Thursday!==void 0&&d.jsx(Gt,{colspan:w.colspan??1,children:w.Thursday}),w.Friday!==void 0&&d.jsx(Gt,{colspan:w.colspan??1,children:w.Friday}),w.Saturday!==void 0&&d.jsx(Gt,{colspan:w.colspan??1,children:w.Saturday}),w.Sunday!==void 0&&d.jsx(Gt,{colspan:w.colspan??1,children:w.Sunday})]},w.id))})})},k2=S.table`  
  border-collapse: collapse;
  margin: 50px 0;
`,Gt=S.td`
  border: 1px solid black;  
  min-width: 10px;
  text-align: center;
  //colspan: ${e=>e.colspan?e.colspan:1};
`,T2=()=>d.jsx("div",{children:"Страница эко по омс"}),E2=()=>d.jsx("div",{children:"Страница вопрос-ответ"}),A2=()=>d.jsx("div",{children:"Страница контакты"}),P2=()=>d.jsx("div",{children:"Страница О нас"}),$2=()=>d.jsx("div",{children:"Разводящая новостей"}),I2=()=>d.jsx("div",{children:"Пройти опрос"}),j2=()=>d.jsx("div",{children:"Страница документы"}),_2=()=>d.jsx("div",{children:"Страница вакансий"}),z2=()=>d.jsx("div",{children:"Страница прием граждан"}),L2=()=>d.jsxs("div",{children:["Страница 3Д - тур",d.jsx("iframe",{src:"/virtual_tour/tour.html",frameBorder:"0",scrolling:"no",style:{display:"block",margin:"0 auto"},width:"100%",height:"650",title:"Тур"})]}),M2=()=>d.jsx("div",{children:"Страница условия оплаты"});function su(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function vd(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(l=>{typeof e[l]>"u"?e[l]=t[l]:su(t[l])&&su(e[l])&&Object.keys(t[l]).length>0&&vd(e[l],t[l])})}const Bp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Nt(){const e=typeof document<"u"?document:{};return vd(e,Bp),e}const R2={document:Bp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ze(){const e=typeof window<"u"?window:{};return vd(e,R2),e}function N2(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function O2(e){const t=e;Object.keys(t).forEach(l=>{try{t[l]=null}catch{}try{delete t[l]}catch{}})}function l0(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function xo(){return Date.now()}function B2(e){const t=Ze();let l;return t.getComputedStyle&&(l=t.getComputedStyle(e,null)),!l&&e.currentStyle&&(l=e.currentStyle),l||(l=e.style),l}function D2(e,t){t===void 0&&(t="x");const l=Ze();let r,n,i;const o=B2(e);return l.WebKitCSSMatrix?(n=o.transform||o.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(a=>a.replace(",",".")).join(", ")),i=new l.WebKitCSSMatrix(n==="none"?"":n)):(i=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=i.toString().split(",")),t==="x"&&(l.WebKitCSSMatrix?n=i.m41:r.length===16?n=parseFloat(r[12]):n=parseFloat(r[4])),t==="y"&&(l.WebKitCSSMatrix?n=i.m42:r.length===16?n=parseFloat(r[13]):n=parseFloat(r[5])),n||0}function gi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function F2(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ue(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let l=1;l<arguments.length;l+=1){const r=l<0||arguments.length<=l?void 0:arguments[l];if(r!=null&&!F2(r)){const n=Object.keys(Object(r)).filter(i=>t.indexOf(i)<0);for(let i=0,o=n.length;i<o;i+=1){const a=n[i],s=Object.getOwnPropertyDescriptor(r,a);s!==void 0&&s.enumerable&&(gi(e[a])&&gi(r[a])?r[a].__swiper__?e[a]=r[a]:Ue(e[a],r[a]):!gi(e[a])&&gi(r[a])?(e[a]={},r[a].__swiper__?e[a]=r[a]:Ue(e[a],r[a])):e[a]=r[a])}}}return e}function Ci(e,t,l){e.style.setProperty(t,l)}function Dp(e){let{swiper:t,targetPosition:l,side:r}=e;const n=Ze(),i=-t.translate;let o=null,a;const s=t.params.speed;t.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(t.cssModeFrameID);const c=l>i?"next":"prev",u=(m,v)=>c==="next"&&m>=v||c==="prev"&&m<=v,f=()=>{a=new Date().getTime(),o===null&&(o=a);const m=Math.max(Math.min((a-o)/s,1),0),v=.5-Math.cos(m*Math.PI)/2;let C=i+v*(l-i);if(u(C,l)&&(C=l),t.wrapperEl.scrollTo({[r]:C}),u(C,l)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:C})}),n.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=n.requestAnimationFrame(f)};f()}function Fp(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function bt(e,t){t===void 0&&(t="");const l=[...e.children];return e instanceof HTMLSlotElement&&l.push(...e.assignedElements()),t?l.filter(r=>r.matches(t)):l}function W2(e,t){const l=t.contains(e);return!l&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):l}function wo(e){try{console.warn(e);return}catch{}}function ll(e,t){t===void 0&&(t=[]);const l=document.createElement(e);return l.classList.add(...Array.isArray(t)?t:N2(t)),l}function V2(e,t){const l=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&l.push(r):l.push(r),e=r}return l}function H2(e,t){const l=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&l.push(r):l.push(r),e=r}return l}function rl(e,t){return Ze().getComputedStyle(e,null).getPropertyValue(t)}function bo(e){let t=e,l;if(t){for(l=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(l+=1);return l}}function Wp(e,t){const l=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&l.push(r):l.push(r),r=r.parentElement;return l}function U2(e,t){function l(r){r.target===e&&(t.call(e,r),e.removeEventListener("transitionend",l))}t&&e.addEventListener("transitionend",l)}function r0(e,t,l){const r=Ze();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Pt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function G2(e){return t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t}let Bs;function q2(){const e=Ze(),t=Nt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Vp(){return Bs||(Bs=q2()),Bs}let Ds;function Y2(e){let{userAgent:t}=e===void 0?{}:e;const l=Vp(),r=Ze(),n=r.navigator.platform,i=t||r.navigator.userAgent,o={ios:!1,android:!1},a=r.screen.width,s=r.screen.height,c=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad).*OS\s([\d_]+)/);const f=i.match(/(iPod)(.*OS\s([\d_]+))?/),m=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=n==="Win32";let C=n==="MacIntel";const x=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&C&&l.touch&&x.indexOf(`${a}x${s}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),C=!1),c&&!v&&(o.os="android",o.android=!0),(u||m||f)&&(o.os="ios",o.ios=!0),o}function Hp(e){return e===void 0&&(e={}),Ds||(Ds=Y2(e)),Ds}let Fs;function K2(){const e=Ze(),t=Hp();let l=!1;function r(){const a=e.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(r()){const a=String(e.navigator.userAgent);if(a.includes("Version/")){const[s,c]=a.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));l=s<16||s===16&&c<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),i=r(),o=i||n&&t.ios;return{isSafari:l||i,needPerspectiveFix:l,need3dFix:o,isWebView:n}}function X2(){return Fs||(Fs=K2()),Fs}function Q2(e){let{swiper:t,on:l,emit:r}=e;const n=Ze();let i=null,o=null;const a=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},s=()=>{!t||t.destroyed||!t.initialized||(i=new ResizeObserver(f=>{o=n.requestAnimationFrame(()=>{const{width:m,height:v}=t;let C=m,x=v;f.forEach(w=>{let{contentBoxSize:g,contentRect:h,target:p}=w;p&&p!==t.el||(C=h?h.width:(g[0]||g).inlineSize,x=h?h.height:(g[0]||g).blockSize)}),(C!==m||x!==v)&&a()})}),i.observe(t.el))},c=()=>{o&&n.cancelAnimationFrame(o),i&&i.unobserve&&t.el&&(i.unobserve(t.el),i=null)},u=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};l("init",()=>{if(t.params.resizeObserver&&typeof n.ResizeObserver<"u"){s();return}n.addEventListener("resize",a),n.addEventListener("orientationchange",u)}),l("destroy",()=>{c(),n.removeEventListener("resize",a),n.removeEventListener("orientationchange",u)})}function J2(e){let{swiper:t,extendParams:l,on:r,emit:n}=e;const i=[],o=Ze(),a=function(u,f){f===void 0&&(f={});const m=o.MutationObserver||o.WebkitMutationObserver,v=new m(C=>{if(t.__preventObserver__)return;if(C.length===1){n("observerUpdate",C[0]);return}const x=function(){n("observerUpdate",C[0])};o.requestAnimationFrame?o.requestAnimationFrame(x):o.setTimeout(x,0)});v.observe(u,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:t.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),i.push(v)},s=()=>{if(t.params.observer){if(t.params.observeParents){const u=Wp(t.hostEl);for(let f=0;f<u.length;f+=1)a(u[f])}a(t.hostEl,{childList:t.params.observeSlideChildren}),a(t.wrapperEl,{attributes:!1})}},c=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};l({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",s),r("destroy",c)}var Z2={on(e,t,l){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const n=l?"unshift":"push";return e.split(" ").forEach(i=>{r.eventsListeners[i]||(r.eventsListeners[i]=[]),r.eventsListeners[i][n](t)}),r},once(e,t,l){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function n(){r.off(e,n),n.__emitterProxy&&delete n.__emitterProxy;for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];t.apply(r,o)}return n.__emitterProxy=t,r.on(e,n,l)},onAny(e,t){const l=this;if(!l.eventsListeners||l.destroyed||typeof e!="function")return l;const r=t?"unshift":"push";return l.eventsAnyListeners.indexOf(e)<0&&l.eventsAnyListeners[r](e),l},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const l=t.eventsAnyListeners.indexOf(e);return l>=0&&t.eventsAnyListeners.splice(l,1),t},off(e,t){const l=this;return!l.eventsListeners||l.destroyed||!l.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?l.eventsListeners[r]=[]:l.eventsListeners[r]&&l.eventsListeners[r].forEach((n,i)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&l.eventsListeners[r].splice(i,1)})}),l},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,l,r;for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return typeof i[0]=="string"||Array.isArray(i[0])?(t=i[0],l=i.slice(1,i.length),r=e):(t=i[0].events,l=i[0].data,r=i[0].context||e),l.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(s=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[s,...l])}),e.eventsListeners&&e.eventsListeners[s]&&e.eventsListeners[s].forEach(c=>{c.apply(r,l)})}),e}};function ex(){const e=this;let t,l;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?l=e.params.height:l=r.clientHeight,!(t===0&&e.isHorizontal()||l===0&&e.isVertical())&&(t=t-parseInt(rl(r,"padding-left")||0,10)-parseInt(rl(r,"padding-right")||0,10),l=l-parseInt(rl(r,"padding-top")||0,10)-parseInt(rl(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(l)&&(l=0),Object.assign(e,{width:t,height:l,size:e.isHorizontal()?t:l}))}function tx(){const e=this;function t(T,j){return parseFloat(T.getPropertyValue(e.getDirectionLabel(j))||0)}const l=e.params,{wrapperEl:r,slidesEl:n,size:i,rtlTranslate:o,wrongRTL:a}=e,s=e.virtual&&l.virtual.enabled,c=s?e.virtual.slides.length:e.slides.length,u=bt(n,`.${e.params.slideClass}, swiper-slide`),f=s?e.virtual.slides.length:u.length;let m=[];const v=[],C=[];let x=l.slidesOffsetBefore;typeof x=="function"&&(x=l.slidesOffsetBefore.call(e));let w=l.slidesOffsetAfter;typeof w=="function"&&(w=l.slidesOffsetAfter.call(e));const g=e.snapGrid.length,h=e.slidesGrid.length;let p=l.spaceBetween,y=-x,b=0,k=0;if(typeof i>"u")return;typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*i:typeof p=="string"&&(p=parseFloat(p)),e.virtualSize=-p,u.forEach(T=>{o?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),l.centeredSlides&&l.cssMode&&(Ci(r,"--swiper-centered-offset-before",""),Ci(r,"--swiper-centered-offset-after",""));const E=l.grid&&l.grid.rows>1&&e.grid;E?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let I;const A=l.slidesPerView==="auto"&&l.breakpoints&&Object.keys(l.breakpoints).filter(T=>typeof l.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<f;T+=1){I=0;let j;if(u[T]&&(j=u[T]),E&&e.grid.updateSlide(T,j,u),!(u[T]&&rl(j,"display")==="none")){if(l.slidesPerView==="auto"){A&&(u[T].style[e.getDirectionLabel("width")]="");const N=getComputedStyle(j),L=j.style.transform,B=j.style.webkitTransform;if(L&&(j.style.transform="none"),B&&(j.style.webkitTransform="none"),l.roundLengths)I=e.isHorizontal()?r0(j,"width"):r0(j,"height");else{const D=t(N,"width"),Q=t(N,"padding-left"),Fe=t(N,"padding-right"),_=t(N,"margin-left"),M=t(N,"margin-right"),R=N.getPropertyValue("box-sizing");if(R&&R==="border-box")I=D+_+M;else{const{clientWidth:H,offsetWidth:q}=j;I=D+Q+Fe+_+M+(q-H)}}L&&(j.style.transform=L),B&&(j.style.webkitTransform=B),l.roundLengths&&(I=Math.floor(I))}else I=(i-(l.slidesPerView-1)*p)/l.slidesPerView,l.roundLengths&&(I=Math.floor(I)),u[T]&&(u[T].style[e.getDirectionLabel("width")]=`${I}px`);u[T]&&(u[T].swiperSlideSize=I),C.push(I),l.centeredSlides?(y=y+I/2+b/2+p,b===0&&T!==0&&(y=y-i/2-p),T===0&&(y=y-i/2-p),Math.abs(y)<1/1e3&&(y=0),l.roundLengths&&(y=Math.floor(y)),k%l.slidesPerGroup===0&&m.push(y),v.push(y)):(l.roundLengths&&(y=Math.floor(y)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&m.push(y),v.push(y),y=y+I+p),e.virtualSize+=I+p,b=I,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+w,o&&a&&(l.effect==="slide"||l.effect==="coverflow")&&(r.style.width=`${e.virtualSize+p}px`),l.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+p}px`),E&&e.grid.updateWrapperSize(I,m),!l.centeredSlides){const T=[];for(let j=0;j<m.length;j+=1){let N=m[j];l.roundLengths&&(N=Math.floor(N)),m[j]<=e.virtualSize-i&&T.push(N)}m=T,Math.floor(e.virtualSize-i)-Math.floor(m[m.length-1])>1&&m.push(e.virtualSize-i)}if(s&&l.loop){const T=C[0]+p;if(l.slidesPerGroup>1){const j=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/l.slidesPerGroup),N=T*l.slidesPerGroup;for(let L=0;L<j;L+=1)m.push(m[m.length-1]+N)}for(let j=0;j<e.virtual.slidesBefore+e.virtual.slidesAfter;j+=1)l.slidesPerGroup===1&&m.push(m[m.length-1]+T),v.push(v[v.length-1]+T),e.virtualSize+=T}if(m.length===0&&(m=[0]),p!==0){const T=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((j,N)=>!l.cssMode||l.loop?!0:N!==u.length-1).forEach(j=>{j.style[T]=`${p}px`})}if(l.centeredSlides&&l.centeredSlidesBounds){let T=0;C.forEach(N=>{T+=N+(p||0)}),T-=p;const j=T>i?T-i:0;m=m.map(N=>N<=0?-x:N>j?j+w:N)}if(l.centerInsufficientSlides){let T=0;C.forEach(N=>{T+=N+(p||0)}),T-=p;const j=(l.slidesOffsetBefore||0)+(l.slidesOffsetAfter||0);if(T+j<i){const N=(i-T-j)/2;m.forEach((L,B)=>{m[B]=L-N}),v.forEach((L,B)=>{v[B]=L+N})}}if(Object.assign(e,{slides:u,snapGrid:m,slidesGrid:v,slidesSizesGrid:C}),l.centeredSlides&&l.cssMode&&!l.centeredSlidesBounds){Ci(r,"--swiper-centered-offset-before",`${-m[0]}px`),Ci(r,"--swiper-centered-offset-after",`${e.size/2-C[C.length-1]/2}px`);const T=-e.snapGrid[0],j=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(N=>N+T),e.slidesGrid=e.slidesGrid.map(N=>N+j)}if(f!==c&&e.emit("slidesLengthChange"),m.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==h&&e.emit("slidesGridLengthChange"),l.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!s&&!l.cssMode&&(l.effect==="slide"||l.effect==="fade")){const T=`${l.containerModifierClass}backface-hidden`,j=e.el.classList.contains(T);f<=l.maxBackfaceHiddenSlides?j||e.el.classList.add(T):j&&e.el.classList.remove(T)}}function lx(e){const t=this,l=[],r=t.virtual&&t.params.virtual.enabled;let n=0,i;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=a=>r?t.slides[t.getSlideIndexByData(a)]:t.slides[a];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(a=>{l.push(a)});else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const a=t.activeIndex+i;if(a>t.slides.length&&!r)break;l.push(o(a))}else l.push(o(t.activeIndex));for(i=0;i<l.length;i+=1)if(typeof l[i]<"u"){const a=l[i].offsetHeight;n=a>n?a:n}(n||n===0)&&(t.wrapperEl.style.height=`${n}px`)}function rx(){const e=this,t=e.slides,l=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-l-e.cssOverflowAdjustment()}const au=(e,t,l)=>{t&&!e.classList.contains(l)?e.classList.add(l):!t&&e.classList.contains(l)&&e.classList.remove(l)};function nx(e){e===void 0&&(e=this&&this.translate||0);const t=this,l=t.params,{slides:r,rtlTranslate:n,snapGrid:i}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;n&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=l.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:typeof a=="string"&&(a=parseFloat(a));for(let s=0;s<r.length;s+=1){const c=r[s];let u=c.swiperSlideOffset;l.cssMode&&l.centeredSlides&&(u-=r[0].swiperSlideOffset);const f=(o+(l.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+a),m=(o-i[0]+(l.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+a),v=-(o-u),C=v+t.slidesSizesGrid[s],x=v>=0&&v<=t.size-t.slidesSizesGrid[s],w=v>=0&&v<t.size-1||C>1&&C<=t.size||v<=0&&C>=t.size;w&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s)),au(c,w,l.slideVisibleClass),au(c,x,l.slideFullyVisibleClass),c.progress=n?-f:f,c.originalProgress=n?-m:m}}function ix(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const l=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:n,isBeginning:i,isEnd:o,progressLoop:a}=t;const s=i,c=o;if(r===0)n=0,i=!0,o=!0;else{n=(e-t.minTranslate())/r;const u=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;i=u||n<=0,o=f||n>=1,u&&(n=0),f&&(n=1)}if(l.loop){const u=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[u],v=t.slidesGrid[f],C=t.slidesGrid[t.slidesGrid.length-1],x=Math.abs(e);x>=m?a=(x-m)/C:a=(x+C-v)/C,a>1&&(a-=1)}Object.assign(t,{progress:n,progressLoop:a,isBeginning:i,isEnd:o}),(l.watchSlidesProgress||l.centeredSlides&&l.autoHeight)&&t.updateSlidesProgress(e),i&&!s&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(s&&!i||c&&!o)&&t.emit("fromEdge"),t.emit("progress",n)}const Ws=(e,t,l)=>{t&&!e.classList.contains(l)?e.classList.add(l):!t&&e.classList.contains(l)&&e.classList.remove(l)};function ox(){const e=this,{slides:t,params:l,slidesEl:r,activeIndex:n}=e,i=e.virtual&&l.virtual.enabled,o=e.grid&&l.grid&&l.grid.rows>1,a=f=>bt(r,`.${l.slideClass}${f}, swiper-slide${f}`)[0];let s,c,u;if(i)if(l.loop){let f=n-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),s=a(`[data-swiper-slide-index="${f}"]`)}else s=a(`[data-swiper-slide-index="${n}"]`);else o?(s=t.filter(f=>f.column===n)[0],u=t.filter(f=>f.column===n+1)[0],c=t.filter(f=>f.column===n-1)[0]):s=t[n];s&&(o||(u=H2(s,`.${l.slideClass}, swiper-slide`)[0],l.loop&&!u&&(u=t[0]),c=V2(s,`.${l.slideClass}, swiper-slide`)[0],l.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(f=>{Ws(f,f===s,l.slideActiveClass),Ws(f,f===u,l.slideNextClass),Ws(f,f===c,l.slidePrevClass)}),e.emitSlidesClasses()}const Mi=(e,t)=>{if(!e||e.destroyed||!e.params)return;const l=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(l());if(r){let n=r.querySelector(`.${e.params.lazyPreloaderClass}`);!n&&e.isElement&&(r.shadowRoot?n=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(n=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),n&&n.remove())})),n&&n.remove()}},Vs=(e,t)=>{if(!e.slides[t])return;const l=e.slides[t].querySelector('[loading="lazy"]');l&&l.removeAttribute("loading")},n0=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const l=e.slides.length;if(!l||!t||t<0)return;t=Math.min(t,l);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),n=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=n,a=[o-t];a.push(...Array.from({length:t}).map((s,c)=>o+r+c)),e.slides.forEach((s,c)=>{a.includes(s.column)&&Vs(e,c)});return}const i=n+r-1;if(e.params.rewind||e.params.loop)for(let o=n-t;o<=i+t;o+=1){const a=(o%l+l)%l;(a<n||a>i)&&Vs(e,a)}else for(let o=Math.max(n-t,0);o<=Math.min(i+t,l-1);o+=1)o!==n&&(o>i||o<n)&&Vs(e,o)};function sx(e){const{slidesGrid:t,params:l}=e,r=e.rtlTranslate?e.translate:-e.translate;let n;for(let i=0;i<t.length;i+=1)typeof t[i+1]<"u"?r>=t[i]&&r<t[i+1]-(t[i+1]-t[i])/2?n=i:r>=t[i]&&r<t[i+1]&&(n=i+1):r>=t[i]&&(n=i);return l.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function ax(e){const t=this,l=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:n,activeIndex:i,realIndex:o,snapIndex:a}=t;let s=e,c;const u=v=>{let C=v-t.virtual.slidesBefore;return C<0&&(C=t.virtual.slides.length+C),C>=t.virtual.slides.length&&(C-=t.virtual.slides.length),C};if(typeof s>"u"&&(s=sx(t)),r.indexOf(l)>=0)c=r.indexOf(l);else{const v=Math.min(n.slidesPerGroupSkip,s);c=v+Math.floor((s-v)/n.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===i&&!t.params.loop){c!==a&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(s===i&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(s);return}const f=t.grid&&n.grid&&n.grid.rows>1;let m;if(t.virtual&&n.virtual.enabled&&n.loop)m=u(s);else if(f){const v=t.slides.filter(x=>x.column===s)[0];let C=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(C)&&(C=Math.max(t.slides.indexOf(v),0)),m=Math.floor(C/n.grid.rows)}else if(t.slides[s]){const v=t.slides[s].getAttribute("data-swiper-slide-index");v?m=parseInt(v,10):m=s}else m=s;Object.assign(t,{previousSnapIndex:a,snapIndex:c,previousRealIndex:o,realIndex:m,previousIndex:i,activeIndex:s}),t.initialized&&n0(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==m&&t.emit("realIndexChange"),t.emit("slideChange"))}function dx(e,t){const l=this,r=l.params;let n=e.closest(`.${r.slideClass}, swiper-slide`);!n&&l.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(a=>{!n&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(n=a)});let i=!1,o;if(n){for(let a=0;a<l.slides.length;a+=1)if(l.slides[a]===n){i=!0,o=a;break}}if(n&&i)l.clickedSlide=n,l.virtual&&l.params.virtual.enabled?l.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):l.clickedIndex=o;else{l.clickedSlide=void 0,l.clickedIndex=void 0;return}r.slideToClickedSlide&&l.clickedIndex!==void 0&&l.clickedIndex!==l.activeIndex&&l.slideToClickedSlide()}var cx={updateSize:ex,updateSlides:tx,updateAutoHeight:lx,updateSlidesOffset:rx,updateSlidesProgress:nx,updateProgress:ix,updateSlidesClasses:ox,updateActiveIndex:ax,updateClickedSlide:dx};function ux(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:l,rtlTranslate:r,translate:n,wrapperEl:i}=t;if(l.virtualTranslate)return r?-n:n;if(l.cssMode)return n;let o=D2(i,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function fx(e,t){const l=this,{rtlTranslate:r,params:n,wrapperEl:i,progress:o}=l;let a=0,s=0;const c=0;l.isHorizontal()?a=r?-e:e:s=e,n.roundLengths&&(a=Math.floor(a),s=Math.floor(s)),l.previousTranslate=l.translate,l.translate=l.isHorizontal()?a:s,n.cssMode?i[l.isHorizontal()?"scrollLeft":"scrollTop"]=l.isHorizontal()?-a:-s:n.virtualTranslate||(l.isHorizontal()?a-=l.cssOverflowAdjustment():s-=l.cssOverflowAdjustment(),i.style.transform=`translate3d(${a}px, ${s}px, ${c}px)`);let u;const f=l.maxTranslate()-l.minTranslate();f===0?u=0:u=(e-l.minTranslate())/f,u!==o&&l.updateProgress(e),l.emit("setTranslate",l.translate,t)}function hx(){return-this.snapGrid[0]}function px(){return-this.snapGrid[this.snapGrid.length-1]}function mx(e,t,l,r,n){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),l===void 0&&(l=!0),r===void 0&&(r=!0);const i=this,{params:o,wrapperEl:a}=i;if(i.animating&&o.preventInteractionOnTransition)return!1;const s=i.minTranslate(),c=i.maxTranslate();let u;if(r&&e>s?u=s:r&&e<c?u=c:u=e,i.updateProgress(u),o.cssMode){const f=i.isHorizontal();if(t===0)a[f?"scrollLeft":"scrollTop"]=-u;else{if(!i.support.smoothScroll)return Dp({swiper:i,targetPosition:-u,side:f?"left":"top"}),!0;a.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(i.setTransition(0),i.setTranslate(u),l&&(i.emit("beforeTransitionStart",t,n),i.emit("transitionEnd"))):(i.setTransition(t),i.setTranslate(u),l&&(i.emit("beforeTransitionStart",t,n),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(m){!i||i.destroyed||m.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,i.animating=!1,l&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}var gx={getTranslate:ux,setTranslate:fx,minTranslate:hx,maxTranslate:px,translateTo:mx};function Cx(e,t){const l=this;l.params.cssMode||(l.wrapperEl.style.transitionDuration=`${e}ms`,l.wrapperEl.style.transitionDelay=e===0?"0ms":""),l.emit("setTransition",e,t)}function Up(e){let{swiper:t,runCallbacks:l,direction:r,step:n}=e;const{activeIndex:i,previousIndex:o}=t;let a=r;if(a||(i>o?a="next":i<o?a="prev":a="reset"),t.emit(`transition${n}`),l&&i!==o){if(a==="reset"){t.emit(`slideResetTransition${n}`);return}t.emit(`slideChangeTransition${n}`),a==="next"?t.emit(`slideNextTransition${n}`):t.emit(`slidePrevTransition${n}`)}}function vx(e,t){e===void 0&&(e=!0);const l=this,{params:r}=l;r.cssMode||(r.autoHeight&&l.updateAutoHeight(),Up({swiper:l,runCallbacks:e,direction:t,step:"Start"}))}function yx(e,t){e===void 0&&(e=!0);const l=this,{params:r}=l;l.animating=!1,!r.cssMode&&(l.setTransition(0),Up({swiper:l,runCallbacks:e,direction:t,step:"End"}))}var xx={setTransition:Cx,transitionStart:vx,transitionEnd:yx};function wx(e,t,l,r,n){e===void 0&&(e=0),l===void 0&&(l=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:s,slidesGrid:c,previousIndex:u,activeIndex:f,rtlTranslate:m,wrapperEl:v,enabled:C}=i;if(!C&&!r&&!n||i.destroyed||i.animating&&a.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=i.params.speed);const x=Math.min(i.params.slidesPerGroupSkip,o);let w=x+Math.floor((o-x)/i.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const g=-s[w];if(a.normalizeSlideIndex)for(let b=0;b<c.length;b+=1){const k=-Math.floor(g*100),E=Math.floor(c[b]*100),I=Math.floor(c[b+1]*100);typeof c[b+1]<"u"?k>=E&&k<I-(I-E)/2?o=b:k>=E&&k<I&&(o=b+1):k>=E&&(o=b)}if(i.initialized&&o!==f&&(!i.allowSlideNext&&(m?g>i.translate&&g>i.minTranslate():g<i.translate&&g<i.minTranslate())||!i.allowSlidePrev&&g>i.translate&&g>i.maxTranslate()&&(f||0)!==o))return!1;o!==(u||0)&&l&&i.emit("beforeSlideChangeStart"),i.updateProgress(g);let h;o>f?h="next":o<f?h="prev":h="reset";const p=i.virtual&&i.params.virtual.enabled;if(!(p&&n)&&(m&&-g===i.translate||!m&&g===i.translate))return i.updateActiveIndex(o),a.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),a.effect!=="slide"&&i.setTranslate(g),h!=="reset"&&(i.transitionStart(l,h),i.transitionEnd(l,h)),!1;if(a.cssMode){const b=i.isHorizontal(),k=m?g:-g;if(t===0)p&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),p&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[b?"scrollLeft":"scrollTop"]=k})):v[b?"scrollLeft":"scrollTop"]=k,p&&requestAnimationFrame(()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1});else{if(!i.support.smoothScroll)return Dp({swiper:i,targetPosition:k,side:b?"left":"top"}),!0;v.scrollTo({[b?"left":"top"]:k,behavior:"smooth"})}return!0}return i.setTransition(t),i.setTranslate(g),i.updateActiveIndex(o),i.updateSlidesClasses(),i.emit("beforeTransitionStart",t,r),i.transitionStart(l,h),t===0?i.transitionEnd(l,h):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(k){!i||i.destroyed||k.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(l,h))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function bx(e,t,l,r){e===void 0&&(e=0),l===void 0&&(l=!0),typeof e=="string"&&(e=parseInt(e,10));const n=this;if(n.destroyed)return;typeof t>"u"&&(t=n.params.speed);const i=n.grid&&n.params.grid&&n.params.grid.rows>1;let o=e;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)o=o+n.virtual.slidesBefore;else{let a;if(i){const m=o*n.params.grid.rows;a=n.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===m)[0].column}else a=n.getSlideIndexByData(o);const s=i?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c}=n.params;let u=n.params.slidesPerView;u==="auto"?u=n.slidesPerViewDynamic():(u=Math.ceil(parseFloat(n.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let f=s-a<u;if(c&&(f=f||a<Math.ceil(u/2)),r&&c&&n.params.slidesPerView!=="auto"&&!i&&(f=!1),f){const m=c?a<n.activeIndex?"prev":"next":a-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?a+1:a-s+1,slideRealIndex:m==="next"?n.realIndex:void 0})}if(i){const m=o*n.params.grid.rows;o=n.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===m)[0].column}else o=n.getSlideIndexByData(o)}return requestAnimationFrame(()=>{n.slideTo(o,t,l,r)}),n}function Sx(e,t,l){t===void 0&&(t=!0);const r=this,{enabled:n,params:i,animating:o}=r;if(!n||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let a=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<i.slidesPerGroupSkip?1:a,c=r.virtual&&i.virtual.enabled;if(i.loop){if(o&&!c&&i.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,l)}),!0}return i.rewind&&r.isEnd?r.slideTo(0,e,t,l):r.slideTo(r.activeIndex+s,e,t,l)}function kx(e,t,l){t===void 0&&(t=!0);const r=this,{params:n,snapGrid:i,slidesGrid:o,rtlTranslate:a,enabled:s,animating:c}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const u=r.virtual&&n.virtual.enabled;if(n.loop){if(c&&!u&&n.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=a?r.translate:-r.translate;function m(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const v=m(f),C=i.map(g=>m(g));let x=i[C.indexOf(v)-1];if(typeof x>"u"&&n.cssMode){let g;i.forEach((h,p)=>{v>=h&&(g=p)}),typeof g<"u"&&(x=i[g>0?g-1:g])}let w=0;if(typeof x<"u"&&(w=o.indexOf(x),w<0&&(w=r.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(w=w-r.slidesPerViewDynamic("previous",!0)+1,w=Math.max(w,0))),n.rewind&&r.isBeginning){const g=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(g,e,t,l)}else if(n.loop&&r.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{r.slideTo(w,e,t,l)}),!0;return r.slideTo(w,e,t,l)}function Tx(e,t,l){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,l)}function Ex(e,t,l,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);let i=n.activeIndex;const o=Math.min(n.params.slidesPerGroupSkip,i),a=o+Math.floor((i-o)/n.params.slidesPerGroup),s=n.rtlTranslate?n.translate:-n.translate;if(s>=n.snapGrid[a]){const c=n.snapGrid[a],u=n.snapGrid[a+1];s-c>(u-c)*r&&(i+=n.params.slidesPerGroup)}else{const c=n.snapGrid[a-1],u=n.snapGrid[a];s-c<=(u-c)*r&&(i-=n.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,n.slidesGrid.length-1),n.slideTo(i,e,t,l)}function Ax(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:l}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let n=e.clickedIndex,i;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?n<e.loopedSlides-r/2||n>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),n=e.getSlideIndex(bt(l,`${o}[data-swiper-slide-index="${i}"]`)[0]),l0(()=>{e.slideTo(n)})):e.slideTo(n):n>e.slides.length-r?(e.loopFix(),n=e.getSlideIndex(bt(l,`${o}[data-swiper-slide-index="${i}"]`)[0]),l0(()=>{e.slideTo(n)})):e.slideTo(n)}else e.slideTo(n)}var Px={slideTo:wx,slideToLoop:bx,slideNext:Sx,slidePrev:kx,slideReset:Tx,slideToClosest:Ex,slideToClickedSlide:Ax};function $x(e){const t=this,{params:l,slidesEl:r}=t;if(!l.loop||t.virtual&&t.params.virtual.enabled)return;const n=()=>{bt(r,`.${l.slideClass}, swiper-slide`).forEach((f,m)=>{f.setAttribute("data-swiper-slide-index",m)})},i=t.grid&&l.grid&&l.grid.rows>1,o=l.slidesPerGroup*(i?l.grid.rows:1),a=t.slides.length%o!==0,s=i&&t.slides.length%l.grid.rows!==0,c=u=>{for(let f=0;f<u;f+=1){const m=t.isElement?ll("swiper-slide",[l.slideBlankClass]):ll("div",[l.slideClass,l.slideBlankClass]);t.slidesEl.append(m)}};if(a){if(l.loopAddBlankSlides){const u=o-t.slides.length%o;c(u),t.recalcSlides(),t.updateSlides()}else wo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(s){if(l.loopAddBlankSlides){const u=l.grid.rows-t.slides.length%l.grid.rows;c(u),t.recalcSlides(),t.updateSlides()}else wo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();t.loopFix({slideRealIndex:e,direction:l.centeredSlides?void 0:"next"})}function Ix(e){let{slideRealIndex:t,slideTo:l=!0,direction:r,setTranslate:n,activeSlideIndex:i,byController:o,byMousewheel:a}=e===void 0?{}:e;const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:f,slidesEl:m,params:v}=s,{centeredSlides:C}=v;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&v.virtual.enabled){l&&(!v.centeredSlides&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):v.centeredSlides&&s.snapIndex<v.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=u,s.allowSlideNext=f,s.emit("loopFix");return}let x=v.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(v.slidesPerView,10)),C&&x%2===0&&(x=x+1));const w=v.slidesPerGroupAuto?x:v.slidesPerGroup;let g=w;g%w!==0&&(g+=w-g%w),g+=v.loopAdditionalSlides,s.loopedSlides=g;const h=s.grid&&v.grid&&v.grid.rows>1;c.length<x+g?wo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&v.grid.fill==="row"&&wo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const p=[],y=[];let b=s.activeIndex;typeof i>"u"?i=s.getSlideIndex(c.filter(L=>L.classList.contains(v.slideActiveClass))[0]):b=i;const k=r==="next"||!r,E=r==="prev"||!r;let I=0,A=0;const T=h?Math.ceil(c.length/v.grid.rows):c.length,N=(h?c[i].column:i)+(C&&typeof n>"u"?-x/2+.5:0);if(N<g){I=Math.max(g-N,w);for(let L=0;L<g-N;L+=1){const B=L-Math.floor(L/T)*T;if(h){const D=T-B-1;for(let Q=c.length-1;Q>=0;Q-=1)c[Q].column===D&&p.push(Q)}else p.push(T-B-1)}}else if(N+x>T-g){A=Math.max(N-(T-g*2),w);for(let L=0;L<A;L+=1){const B=L-Math.floor(L/T)*T;h?c.forEach((D,Q)=>{D.column===B&&y.push(Q)}):y.push(B)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),E&&p.forEach(L=>{c[L].swiperLoopMoveDOM=!0,m.prepend(c[L]),c[L].swiperLoopMoveDOM=!1}),k&&y.forEach(L=>{c[L].swiperLoopMoveDOM=!0,m.append(c[L]),c[L].swiperLoopMoveDOM=!1}),s.recalcSlides(),v.slidesPerView==="auto"?s.updateSlides():h&&(p.length>0&&E||y.length>0&&k)&&s.slides.forEach((L,B)=>{s.grid.updateSlide(B,L,s.slides)}),v.watchSlidesProgress&&s.updateSlidesOffset(),l){if(p.length>0&&E){if(typeof t>"u"){const L=s.slidesGrid[b],D=s.slidesGrid[b+I]-L;a?s.setTranslate(s.translate-D):(s.slideTo(b+Math.ceil(I),0,!1,!0),n&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-D,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-D))}else if(n){const L=h?p.length/v.grid.rows:p.length;s.slideTo(s.activeIndex+L,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(y.length>0&&k)if(typeof t>"u"){const L=s.slidesGrid[b],D=s.slidesGrid[b-A]-L;a?s.setTranslate(s.translate-D):(s.slideTo(b-A,0,!1,!0),n&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-D,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-D))}else{const L=h?y.length/v.grid.rows:y.length;s.slideTo(s.activeIndex-L,0,!1,!0)}}if(s.allowSlidePrev=u,s.allowSlideNext=f,s.controller&&s.controller.control&&!o){const L={slideRealIndex:t,direction:r,setTranslate:n,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(B=>{!B.destroyed&&B.params.loop&&B.loopFix({...L,slideTo:B.params.slidesPerView===v.slidesPerView?l:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...L,slideTo:s.controller.control.params.slidesPerView===v.slidesPerView?l:!1})}s.emit("loopFix")}function jx(){const e=this,{params:t,slidesEl:l}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(n=>{const i=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;r[i]=n}),e.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),r.forEach(n=>{l.append(n)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var _x={loopCreate:$x,loopFix:Ix,loopDestroy:jx};function zx(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const l=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),l.style.cursor="move",l.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Lx(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Mx={setGrabCursor:zx,unsetGrabCursor:Lx};function Rx(e,t){t===void 0&&(t=this);function l(r){if(!r||r===Nt()||r===Ze())return null;r.assignedSlot&&(r=r.assignedSlot);const n=r.closest(e);return!n&&!r.getRootNode?null:n||l(r.getRootNode().host)}return l(t)}function du(e,t,l){const r=Ze(),{params:n}=e,i=n.edgeSwipeDetection,o=n.edgeSwipeThreshold;return i&&(l<=o||l>=r.innerWidth-o)?i==="prevent"?(t.preventDefault(),!0):!1:!0}function Nx(e){const t=this,l=Nt();let r=e;r.originalEvent&&(r=r.originalEvent);const n=t.touchEventsData;if(r.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==r.pointerId)return;n.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(n.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){du(t,r,r.targetTouches[0].pageX);return}const{params:i,touches:o,enabled:a}=t;if(!a||!i.simulateTouch&&r.pointerType==="mouse"||t.animating&&i.preventInteractionOnTransition)return;!t.animating&&i.cssMode&&i.loop&&t.loopFix();let s=r.target;if(i.touchEventsTarget==="wrapper"&&!W2(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||n.isTouched&&n.isMoved)return;const c=!!i.noSwipingClass&&i.noSwipingClass!=="",u=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&u&&(s=u[0]);const f=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(i.noSwiping&&(m?Rx(f,s):s.closest(f))){t.allowClick=!0;return}if(i.swipeHandler&&!s.closest(i.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const v=o.currentX,C=o.currentY;if(!du(t,r,v))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=v,o.startY=C,n.touchStartTime=xo(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,i.threshold>0&&(n.allowThresholdMove=!1);let x=!0;s.matches(n.focusableElements)&&(x=!1,s.nodeName==="SELECT"&&(n.isTouched=!1)),l.activeElement&&l.activeElement.matches(n.focusableElements)&&l.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(n.focusableElements))&&l.activeElement.blur();const w=x&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.animating&&!i.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function Ox(e){const t=Nt(),l=this,r=l.touchEventsData,{params:n,touches:i,rtlTranslate:o,enabled:a}=l;if(!a||!n.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].filter(k=>k.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&l.emit("touchMoveOpposite",s);return}const u=c.pageX,f=c.pageY;if(s.preventedByNestedSwiper){i.startX=u,i.startY=f;return}if(!l.allowTouchMove){s.target.matches(r.focusableElements)||(l.allowClick=!1),r.isTouched&&(Object.assign(i,{startX:u,startY:f,currentX:u,currentY:f}),r.touchStartTime=xo());return}if(n.touchReleaseOnEdges&&!n.loop){if(l.isVertical()){if(f<i.startY&&l.translate<=l.maxTranslate()||f>i.startY&&l.translate>=l.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(u<i.startX&&l.translate<=l.maxTranslate()||u>i.startX&&l.translate>=l.minTranslate())return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,l.allowClick=!1;return}r.allowTouchCallbacks&&l.emit("touchMove",s),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=u,i.currentY=f;const m=i.currentX-i.startX,v=i.currentY-i.startY;if(l.params.threshold&&Math.sqrt(m**2+v**2)<l.params.threshold)return;if(typeof r.isScrolling>"u"){let k;l.isHorizontal()&&i.currentY===i.startY||l.isVertical()&&i.currentX===i.startX?r.isScrolling=!1:m*m+v*v>=25&&(k=Math.atan2(Math.abs(v),Math.abs(m))*180/Math.PI,r.isScrolling=l.isHorizontal()?k>n.touchAngle:90-k>n.touchAngle)}if(r.isScrolling&&l.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;l.allowClick=!1,!n.cssMode&&s.cancelable&&s.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&s.stopPropagation();let C=l.isHorizontal()?m:v,x=l.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;n.oneWayMovement&&(C=Math.abs(C)*(o?1:-1),x=Math.abs(x)*(o?1:-1)),i.diff=C,C*=n.touchRatio,o&&(C=-C,x=-x);const w=l.touchesDirection;l.swipeDirection=C>0?"prev":"next",l.touchesDirection=x>0?"prev":"next";const g=l.params.loop&&!n.cssMode,h=l.touchesDirection==="next"&&l.allowSlideNext||l.touchesDirection==="prev"&&l.allowSlidePrev;if(!r.isMoved){if(g&&h&&l.loopFix({direction:l.swipeDirection}),r.startTranslate=l.getTranslate(),l.setTransition(0),l.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});l.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,n.grabCursor&&(l.allowSlideNext===!0||l.allowSlidePrev===!0)&&l.setGrabCursor(!0),l.emit("sliderFirstMove",s)}let p;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&w!==l.touchesDirection&&g&&h&&Math.abs(C)>=1){Object.assign(i,{startX:u,startY:f,currentX:u,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}l.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=C+r.startTranslate;let y=!0,b=n.resistanceRatio;if(n.touchReleaseOnEdges&&(b=0),C>0?(g&&h&&!p&&r.allowThresholdMove&&r.currentTranslate>(n.centeredSlides?l.minTranslate()-l.slidesSizesGrid[l.activeIndex+1]-(n.slidesPerView!=="auto"&&l.slides.length-n.slidesPerView>=2?l.slidesSizesGrid[l.activeIndex+1]+l.params.spaceBetween:0)-l.params.spaceBetween:l.minTranslate())&&l.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>l.minTranslate()&&(y=!1,n.resistance&&(r.currentTranslate=l.minTranslate()-1+(-l.minTranslate()+r.startTranslate+C)**b))):C<0&&(g&&h&&!p&&r.allowThresholdMove&&r.currentTranslate<(n.centeredSlides?l.maxTranslate()+l.slidesSizesGrid[l.slidesSizesGrid.length-1]+l.params.spaceBetween+(n.slidesPerView!=="auto"&&l.slides.length-n.slidesPerView>=2?l.slidesSizesGrid[l.slidesSizesGrid.length-1]+l.params.spaceBetween:0):l.maxTranslate())&&l.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:l.slides.length-(n.slidesPerView==="auto"?l.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),r.currentTranslate<l.maxTranslate()&&(y=!1,n.resistance&&(r.currentTranslate=l.maxTranslate()+1-(l.maxTranslate()-r.startTranslate-C)**b))),y&&(s.preventedByNestedSwiper=!0),!l.allowSlideNext&&l.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!l.allowSlidePrev&&l.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!l.allowSlidePrev&&!l.allowSlideNext&&(r.currentTranslate=r.startTranslate),n.threshold>0)if(Math.abs(C)>n.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,r.currentTranslate=r.startTranslate,i.diff=l.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{r.currentTranslate=r.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&l.freeMode||n.watchSlidesProgress)&&(l.updateActiveIndex(),l.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&l.freeMode&&l.freeMode.onTouchMove(),l.updateProgress(r.currentTranslate),l.setTranslate(r.currentTranslate))}function Bx(e){const t=this,l=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let n;if(r.type==="touchend"||r.type==="touchcancel"){if(n=[...r.changedTouches].filter(b=>b.identifier===l.touchId)[0],!n||n.identifier!==l.touchId)return}else{if(l.touchId!==null||r.pointerId!==l.pointerId)return;n=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;l.pointerId=null,l.touchId=null;const{params:o,touches:a,rtlTranslate:s,slidesGrid:c,enabled:u}=t;if(!u||!o.simulateTouch&&r.pointerType==="mouse")return;if(l.allowTouchCallbacks&&t.emit("touchEnd",r),l.allowTouchCallbacks=!1,!l.isTouched){l.isMoved&&o.grabCursor&&t.setGrabCursor(!1),l.isMoved=!1,l.startMoving=!1;return}o.grabCursor&&l.isMoved&&l.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=xo(),m=f-l.touchStartTime;if(t.allowClick){const b=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(b&&b[0]||r.target,b),t.emit("tap click",r),m<300&&f-l.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(l.lastClickTime=xo(),l0(()=>{t.destroyed||(t.allowClick=!0)}),!l.isTouched||!l.isMoved||!t.swipeDirection||a.diff===0&&!l.loopSwapReset||l.currentTranslate===l.startTranslate&&!l.loopSwapReset){l.isTouched=!1,l.isMoved=!1,l.startMoving=!1;return}l.isTouched=!1,l.isMoved=!1,l.startMoving=!1;let v;if(o.followFinger?v=s?t.translate:-t.translate:v=-l.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const C=v>=-t.maxTranslate()&&!t.params.loop;let x=0,w=t.slidesSizesGrid[0];for(let b=0;b<c.length;b+=b<o.slidesPerGroupSkip?1:o.slidesPerGroup){const k=b<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[b+k]<"u"?(C||v>=c[b]&&v<c[b+k])&&(x=b,w=c[b+k]-c[b]):(C||v>=c[b])&&(x=b,w=c[c.length-1]-c[c.length-2])}let g=null,h=null;o.rewind&&(t.isBeginning?h=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const p=(v-c[x])/w,y=x<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(m>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(p>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?g:x+y):t.slideTo(x)),t.swipeDirection==="prev"&&(p>1-o.longSwipesRatio?t.slideTo(x+y):h!==null&&p<0&&Math.abs(p)>o.longSwipesRatio?t.slideTo(h):t.slideTo(x))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(x+y):t.slideTo(x):(t.swipeDirection==="next"&&t.slideTo(g!==null?g:x+y),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:x))}}function cu(){const e=this,{params:t,el:l}=e;if(l&&l.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:n,snapGrid:i}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!a?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=n,e.allowSlideNext=r,e.params.watchOverflow&&i!==e.snapGrid&&e.checkOverflow()}function Dx(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Fx(){const e=this,{wrapperEl:t,rtlTranslate:l,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let n;const i=e.maxTranslate()-e.minTranslate();i===0?n=0:n=(e.translate-e.minTranslate())/i,n!==e.progress&&e.updateProgress(l?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Wx(e){const t=this;Mi(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Vx(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Gp=(e,t)=>{const l=Nt(),{params:r,el:n,wrapperEl:i,device:o}=e,a=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;!n||typeof n=="string"||(l[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:a}),n[s]("touchstart",e.onTouchStart,{passive:!1}),n[s]("pointerdown",e.onTouchStart,{passive:!1}),l[s]("touchmove",e.onTouchMove,{passive:!1,capture:a}),l[s]("pointermove",e.onTouchMove,{passive:!1,capture:a}),l[s]("touchend",e.onTouchEnd,{passive:!0}),l[s]("pointerup",e.onTouchEnd,{passive:!0}),l[s]("pointercancel",e.onTouchEnd,{passive:!0}),l[s]("touchcancel",e.onTouchEnd,{passive:!0}),l[s]("pointerout",e.onTouchEnd,{passive:!0}),l[s]("pointerleave",e.onTouchEnd,{passive:!0}),l[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&n[s]("click",e.onClick,!0),r.cssMode&&i[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",cu,!0):e[c]("observerUpdate",cu,!0),n[s]("load",e.onLoad,{capture:!0}))};function Hx(){const e=this,{params:t}=e;e.onTouchStart=Nx.bind(e),e.onTouchMove=Ox.bind(e),e.onTouchEnd=Bx.bind(e),e.onDocumentTouchStart=Vx.bind(e),t.cssMode&&(e.onScroll=Fx.bind(e)),e.onClick=Dx.bind(e),e.onLoad=Wx.bind(e),Gp(e,"on")}function Ux(){Gp(this,"off")}var Gx={attachEvents:Hx,detachEvents:Ux};const uu=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function qx(){const e=this,{realIndex:t,initialized:l,params:r,el:n}=e,i=r.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const o=e.getBreakpoint(i,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const s=(o in i?i[o]:void 0)||e.originalParams,c=uu(e,r),u=uu(e,s),f=e.params.grabCursor,m=s.grabCursor,v=r.enabled;c&&!u?(n.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&u&&(n.classList.add(`${r.containerModifierClass}grid`),(s.grid.fill&&s.grid.fill==="column"||!s.grid.fill&&r.grid.fill==="column")&&n.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),f&&!m?e.unsetGrabCursor():!f&&m&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(p=>{if(typeof s[p]>"u")return;const y=r[p]&&r[p].enabled,b=s[p]&&s[p].enabled;y&&!b&&e[p].disable(),!y&&b&&e[p].enable()});const C=s.direction&&s.direction!==r.direction,x=r.loop&&(s.slidesPerView!==r.slidesPerView||C),w=r.loop;C&&l&&e.changeDirection(),Ue(e.params,s);const g=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!g?e.disable():!v&&g&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",s),l&&(x?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!w&&h?(e.loopCreate(t),e.updateSlides()):w&&!h&&e.loopDestroy()),e.emit("breakpoint",s)}function Yx(e,t,l){if(t===void 0&&(t="window"),!e||t==="container"&&!l)return;let r=!1;const n=Ze(),i=t==="window"?n.innerHeight:l.clientHeight,o=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const s=parseFloat(a.substr(1));return{value:i*s,point:a}}return{value:a,point:a}});o.sort((a,s)=>parseInt(a.value,10)-parseInt(s.value,10));for(let a=0;a<o.length;a+=1){const{point:s,value:c}=o[a];t==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=l.clientWidth&&(r=s)}return r||"max"}var Kx={setBreakpoint:qx,getBreakpoint:Yx};function Xx(e,t){const l=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(n=>{r[n]&&l.push(t+n)}):typeof r=="string"&&l.push(t+r)}),l}function Qx(){const e=this,{classNames:t,params:l,rtl:r,el:n,device:i}=e,o=Xx(["initialized",l.direction,{"free-mode":e.params.freeMode&&l.freeMode.enabled},{autoheight:l.autoHeight},{rtl:r},{grid:l.grid&&l.grid.rows>1},{"grid-column":l.grid&&l.grid.rows>1&&l.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":l.cssMode},{centered:l.cssMode&&l.centeredSlides},{"watch-progress":l.watchSlidesProgress}],l.containerModifierClass);t.push(...o),n.classList.add(...t),e.emitContainerClasses()}function Jx(){const e=this,{el:t,classNames:l}=e;!t||typeof t=="string"||(t.classList.remove(...l),e.emitContainerClasses())}var Zx={addClasses:Qx,removeClasses:Jx};function ew(){const e=this,{isLocked:t,params:l}=e,{slidesOffsetBefore:r}=l;if(r){const n=e.slides.length-1,i=e.slidesGrid[n]+e.slidesSizesGrid[n]+r*2;e.isLocked=e.size>i}else e.isLocked=e.snapGrid.length===1;l.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),l.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var tw={checkOverflow:ew},i0={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function lw(e,t){return function(r){r===void 0&&(r={});const n=Object.keys(r)[0],i=r[n];if(typeof i!="object"||i===null){Ue(t,r);return}if(e[n]===!0&&(e[n]={enabled:!0}),n==="navigation"&&e[n]&&e[n].enabled&&!e[n].prevEl&&!e[n].nextEl&&(e[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&e[n]&&e[n].enabled&&!e[n].el&&(e[n].auto=!0),!(n in e&&"enabled"in i)){Ue(t,r);return}typeof e[n]=="object"&&!("enabled"in e[n])&&(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),Ue(t,r)}}const Hs={eventsEmitter:Z2,update:cx,translate:gx,transition:xx,slide:Px,loop:_x,grabCursor:Mx,events:Gx,breakpoints:Kx,checkOverflow:tw,classes:Zx},Us={};let yd=class $t{constructor(){let t,l;for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];n.length===1&&n[0].constructor&&Object.prototype.toString.call(n[0]).slice(8,-1)==="Object"?l=n[0]:[t,l]=n,l||(l={}),l=Ue({},l),t&&!l.el&&(l.el=t);const o=Nt();if(l.el&&typeof l.el=="string"&&o.querySelectorAll(l.el).length>1){const u=[];return o.querySelectorAll(l.el).forEach(f=>{const m=Ue({},l,{el:f});u.push(new $t(m))}),u}const a=this;a.__swiper__=!0,a.support=Vp(),a.device=Hp({userAgent:l.userAgent}),a.browser=X2(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],l.modules&&Array.isArray(l.modules)&&a.modules.push(...l.modules);const s={};a.modules.forEach(u=>{u({params:l,swiper:a,extendParams:lw(l,s),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=Ue({},i0,s);return a.params=Ue({},c,Us,l),a.originalParams=Ue({},a.params),a.passedParams=Ue({},l),a.params&&a.params.on&&Object.keys(a.params.on).forEach(u=>{a.on(u,a.params.on[u])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:l,params:r}=this,n=bt(l,`.${r.slideClass}, swiper-slide`),i=bo(n[0]);return bo(t)-i}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(l=>l.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:l,params:r}=t;t.slides=bt(l,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,l){const r=this;t=Math.min(Math.max(t,0),1);const n=r.minTranslate(),o=(r.maxTranslate()-n)*t+n;r.translateTo(o,typeof l>"u"?0:l),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const l=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",l.join(" "))}getSlideClasses(t){const l=this;return l.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(l.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const l=[];t.slides.forEach(r=>{const n=t.getSlideClasses(r);l.push({slideEl:r,classNames:n}),t.emit("_slideClass",r,n)}),t.emit("_slideClasses",l)}slidesPerViewDynamic(t,l){t===void 0&&(t="current"),l===void 0&&(l=!1);const r=this,{params:n,slides:i,slidesGrid:o,slidesSizesGrid:a,size:s,activeIndex:c}=r;let u=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let f=i[c]?Math.ceil(i[c].swiperSlideSize):0,m;for(let v=c+1;v<i.length;v+=1)i[v]&&!m&&(f+=Math.ceil(i[v].swiperSlideSize),u+=1,f>s&&(m=!0));for(let v=c-1;v>=0;v-=1)i[v]&&!m&&(f+=i[v].swiperSlideSize,u+=1,f>s&&(m=!0))}else if(t==="current")for(let f=c+1;f<i.length;f+=1)(l?o[f]+a[f]-o[c]<s:o[f]-o[c]<s)&&(u+=1);else for(let f=c-1;f>=0;f-=1)o[c]-o[f]<s&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:l,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Mi(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function n(){const o=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let i;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)n(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const o=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;i=t.slideTo(o.length-1,0,!1,!0)}else i=t.slideTo(t.activeIndex,0,!1,!0);i||n()}r.watchOverflow&&l!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,l){l===void 0&&(l=!0);const r=this,n=r.params.direction;return t||(t=n==="horizontal"?"vertical":"horizontal"),t===n||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${n}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(i=>{t==="vertical"?i.style.width="":i.style.height=""}),r.emit("changeDirection"),l&&r.update()),r}changeLanguageDirection(t){const l=this;l.rtl&&t==="rtl"||!l.rtl&&t==="ltr"||(l.rtl=t==="rtl",l.rtlTranslate=l.params.direction==="horizontal"&&l.rtl,l.rtl?(l.el.classList.add(`${l.params.containerModifierClass}rtl`),l.el.dir="rtl"):(l.el.classList.remove(`${l.params.containerModifierClass}rtl`),l.el.dir="ltr"),l.update())}mount(t){const l=this;if(l.mounted)return!0;let r=t||l.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=l,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===l.params.swiperElementNodeName.toUpperCase()&&(l.isElement=!0);const n=()=>`.${(l.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(n()):bt(r,n())[0];return!o&&l.params.createElements&&(o=ll("div",l.params.wrapperClass),r.append(o),bt(r,`.${l.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(l,{el:r,wrapperEl:o,slidesEl:l.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:l.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||rl(r,"direction")==="rtl",rtlTranslate:l.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||rl(r,"direction")==="rtl"),wrongRTL:rl(o,"display")==="-webkit-box"}),!0}init(t){const l=this;if(l.initialized||l.mount(t)===!1)return l;l.emit("beforeInit"),l.params.breakpoints&&l.setBreakpoint(),l.addClasses(),l.updateSize(),l.updateSlides(),l.params.watchOverflow&&l.checkOverflow(),l.params.grabCursor&&l.enabled&&l.setGrabCursor(),l.params.loop&&l.virtual&&l.params.virtual.enabled?l.slideTo(l.params.initialSlide+l.virtual.slidesBefore,0,l.params.runCallbacksOnInit,!1,!0):l.slideTo(l.params.initialSlide,0,l.params.runCallbacksOnInit,!1,!0),l.params.loop&&l.loopCreate(),l.attachEvents();const n=[...l.el.querySelectorAll('[loading="lazy"]')];return l.isElement&&n.push(...l.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(i=>{i.complete?Mi(l,i):i.addEventListener("load",o=>{Mi(l,o.target)})}),n0(l),l.initialized=!0,n0(l),l.emit("init"),l.emit("afterInit"),l}destroy(t,l){t===void 0&&(t=!0),l===void 0&&(l=!0);const r=this,{params:n,el:i,wrapperEl:o,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),n.loop&&r.loopDestroy(),l&&(r.removeClasses(),i&&typeof i!="string"&&i.removeAttribute("style"),o&&o.removeAttribute("style"),a&&a.length&&a.forEach(s=>{s.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),O2(r)),r.destroyed=!0),null}static extendDefaults(t){Ue(Us,t)}static get extendedDefaults(){return Us}static get defaults(){return i0}static installModule(t){$t.prototype.__modules__||($t.prototype.__modules__=[]);const l=$t.prototype.__modules__;typeof t=="function"&&l.indexOf(t)<0&&l.push(t)}static use(t){return Array.isArray(t)?(t.forEach(l=>$t.installModule(l)),$t):($t.installModule(t),$t)}};Object.keys(Hs).forEach(e=>{Object.keys(Hs[e]).forEach(t=>{yd.prototype[t]=Hs[e][t]})});yd.use([Q2,J2]);const qp=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Fl(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function pr(e,t){const l=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>l.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Fl(t[r])&&Fl(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:pr(e[r],t[r]):e[r]=t[r]})}function Yp(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Kp(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Xp(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Qp(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),l=[];return t.forEach(r=>{l.indexOf(r)<0&&l.push(r)}),l.join(" ")}function rw(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function nw(e){let{swiper:t,slides:l,passedParams:r,changedParams:n,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:s}=e;const c=n.filter(A=>A!=="children"&&A!=="direction"&&A!=="wrapperClass"),{params:u,pagination:f,navigation:m,scrollbar:v,virtual:C,thumbs:x}=t;let w,g,h,p,y,b,k,E;n.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(w=!0),n.includes("controller")&&r.controller&&r.controller.control&&u.controller&&!u.controller.control&&(g=!0),n.includes("pagination")&&r.pagination&&(r.pagination.el||s)&&(u.pagination||u.pagination===!1)&&f&&!f.el&&(h=!0),n.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&v&&!v.el&&(p=!0),n.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(y=!0);const I=A=>{t[A]&&(t[A].destroy(),A==="navigation"?(t.isElement&&(t[A].prevEl.remove(),t[A].nextEl.remove()),u[A].prevEl=void 0,u[A].nextEl=void 0,t[A].prevEl=void 0,t[A].nextEl=void 0):(t.isElement&&t[A].el.remove(),u[A].el=void 0,t[A].el=void 0))};n.includes("loop")&&t.isElement&&(u.loop&&!r.loop?b=!0:!u.loop&&r.loop?k=!0:E=!0),c.forEach(A=>{if(Fl(u[A])&&Fl(r[A]))Object.assign(u[A],r[A]),(A==="navigation"||A==="pagination"||A==="scrollbar")&&"enabled"in r[A]&&!r[A].enabled&&I(A);else{const T=r[A];(T===!0||T===!1)&&(A==="navigation"||A==="pagination"||A==="scrollbar")?T===!1&&I(A):u[A]=r[A]}}),c.includes("controller")&&!g&&t.controller&&t.controller.control&&u.controller&&u.controller.control&&(t.controller.control=u.controller.control),n.includes("children")&&l&&C&&u.virtual.enabled?(C.slides=l,C.update(!0)):n.includes("virtual")&&C&&u.virtual.enabled&&(l&&(C.slides=l),C.update(!0)),n.includes("children")&&l&&u.loop&&(E=!0),w&&x.init()&&x.update(!0),g&&(t.controller.control=u.controller.control),h&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-pagination"),s.part.add("pagination"),t.el.appendChild(s)),s&&(u.pagination.el=s),f.init(),f.render(),f.update()),p&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),t.el.appendChild(a)),a&&(u.scrollbar.el=a),v.init(),v.updateSize(),v.setTranslate()),y&&(t.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),i.innerHTML=t.hostEl.constructor.nextButtonSvg,i.part.add("button-next"),t.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),m.init(),m.update()),n.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),n.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),n.includes("direction")&&t.changeDirection(r.direction,!1),(b||E)&&t.loopDestroy(),(k||E)&&t.loopCreate(),t.update()}function iw(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const l={on:{}},r={},n={};pr(l,i0),l._emitClasses=!0,l.init=!1;const i={},o=qp.map(s=>s.replace(/_/,"")),a=Object.assign({},e);return Object.keys(a).forEach(s=>{typeof e[s]>"u"||(o.indexOf(s)>=0?Fl(e[s])?(l[s]={},n[s]={},pr(l[s],e[s]),pr(n[s],e[s])):(l[s]=e[s],n[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:l.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:i[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{l[s]===!0&&(l[s]={}),l[s]===!1&&delete l[s]}),{params:l,passedParams:n,rest:i,events:r}}function ow(e,t){let{el:l,nextEl:r,prevEl:n,paginationEl:i,scrollbarEl:o,swiper:a}=e;Yp(t)&&r&&n&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=n,a.originalParams.navigation.prevEl=n),Kp(t)&&i&&(a.params.pagination.el=i,a.originalParams.pagination.el=i),Xp(t)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(l)}function sw(e,t,l,r,n){const i=[];if(!t)return i;const o=s=>{i.indexOf(s)<0&&i.push(s)};if(l&&r){const s=r.map(n),c=l.map(n);s.join("")!==c.join("")&&o("children"),r.length!==l.length&&o("children")}return qp.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(Fl(e[s])&&Fl(t[s])){const c=Object.keys(e[s]),u=Object.keys(t[s]);c.length!==u.length?o(s):(c.forEach(f=>{e[s][f]!==t[s][f]&&o(s)}),u.forEach(f=>{e[s][f]!==t[s][f]&&o(s)}))}else e[s]!==t[s]&&o(s)}),i}const aw=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function So(){return So=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},So.apply(this,arguments)}function Jp(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Zp(e){const t=[];return Y.Children.toArray(e).forEach(l=>{Jp(l)?t.push(l):l.props&&l.props.children&&Zp(l.props.children).forEach(r=>t.push(r))}),t}function dw(e){const t=[],l={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Y.Children.toArray(e).forEach(r=>{if(Jp(r))t.push(r);else if(r.props&&r.props.slot&&l[r.props.slot])l[r.props.slot].push(r);else if(r.props&&r.props.children){const n=Zp(r.props.children);n.length>0?n.forEach(i=>t.push(i)):l["container-end"].push(r)}else l["container-end"].push(r)}),{slides:t,slots:l}}function cw(e,t,l){if(!l)return null;const r=u=>{let f=u;return u<0?f=t.length+u:f>=t.length&&(f=f-t.length),f},n=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${l.offset}px`}:{top:`${l.offset}px`},{from:i,to:o}=l,a=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let u=a;u<s;u+=1)u>=i&&u<=o&&c.push(t[r(u)]);return c.map((u,f)=>Y.cloneElement(u,{swiper:e,style:n,key:u.props.virtualIndex||u.key||`slide-${f}`}))}function gn(e,t){return typeof window>"u"?$.useEffect(e,t):$.useLayoutEffect(e,t)}const fu=$.createContext(null),uw=$.createContext(null),Rr=$.forwardRef(function(e,t){let{className:l,tag:r="div",wrapperTag:n="div",children:i,onSwiper:o,...a}=e===void 0?{}:e,s=!1;const[c,u]=$.useState("swiper"),[f,m]=$.useState(null),[v,C]=$.useState(!1),x=$.useRef(!1),w=$.useRef(null),g=$.useRef(null),h=$.useRef(null),p=$.useRef(null),y=$.useRef(null),b=$.useRef(null),k=$.useRef(null),E=$.useRef(null),{params:I,passedParams:A,rest:T,events:j}=iw(a),{slides:N,slots:L}=dw(i),B=()=>{C(!v)};Object.assign(I.on,{_containerClasses(M,R){u(R)}});const D=()=>{Object.assign(I.on,j),s=!0;const M={...I};if(delete M.wrapperClass,g.current=new yd(M),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=N;const R={cache:!1,slides:N,renderExternal:m,renderExternalUpdate:!1};pr(g.current.params.virtual,R),pr(g.current.originalParams.virtual,R)}};w.current||D(),g.current&&g.current.on("_beforeBreakpoint",B);const Q=()=>{s||!j||!g.current||Object.keys(j).forEach(M=>{g.current.on(M,j[M])})},Fe=()=>{!j||!g.current||Object.keys(j).forEach(M=>{g.current.off(M,j[M])})};$.useEffect(()=>()=>{g.current&&g.current.off("_beforeBreakpoint",B)}),$.useEffect(()=>{!x.current&&g.current&&(g.current.emitSlidesClasses(),x.current=!0)}),gn(()=>{if(t&&(t.current=w.current),!!w.current)return g.current.destroyed&&D(),ow({el:w.current,nextEl:y.current,prevEl:b.current,paginationEl:k.current,scrollbarEl:E.current,swiper:g.current},I),o&&!g.current.destroyed&&o(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),gn(()=>{Q();const M=sw(A,h.current,N,p.current,R=>R.key);return h.current=A,p.current=N,M.length&&g.current&&!g.current.destroyed&&nw({swiper:g.current,slides:N,passedParams:A,changedParams:M,nextEl:y.current,prevEl:b.current,scrollbarEl:E.current,paginationEl:k.current}),()=>{Fe()}}),gn(()=>{aw(g.current)},[f]);function _(){return I.virtual?cw(g.current,N,f):N.map((M,R)=>Y.cloneElement(M,{swiper:g.current,swiperSlideIndex:R}))}return Y.createElement(r,So({ref:w,className:Qp(`${c}${l?` ${l}`:""}`)},T),Y.createElement(uw.Provider,{value:g.current},L["container-start"],Y.createElement(n,{className:rw(I.wrapperClass)},L["wrapper-start"],_(),L["wrapper-end"]),Yp(I)&&Y.createElement(Y.Fragment,null,Y.createElement("div",{ref:b,className:"swiper-button-prev"}),Y.createElement("div",{ref:y,className:"swiper-button-next"})),Xp(I)&&Y.createElement("div",{ref:E,className:"swiper-scrollbar"}),Kp(I)&&Y.createElement("div",{ref:k,className:"swiper-pagination"}),L["container-end"]))});Rr.displayName="Swiper";const Nr=$.forwardRef(function(e,t){let{tag:l="div",children:r,className:n="",swiper:i,zoom:o,lazy:a,virtualIndex:s,swiperSlideIndex:c,...u}=e===void 0?{}:e;const f=$.useRef(null),[m,v]=$.useState("swiper-slide"),[C,x]=$.useState(!1);function w(y,b,k){b===f.current&&v(k)}gn(()=>{if(typeof c<"u"&&(f.current.swiperSlideIndex=c),t&&(t.current=f.current),!(!f.current||!i)){if(i.destroyed){m!=="swiper-slide"&&v("swiper-slide");return}return i.on("_slideClass",w),()=>{i&&i.off("_slideClass",w)}}}),gn(()=>{i&&f.current&&!i.destroyed&&v(i.getSlideClasses(f.current))},[i]);const g={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},h=()=>typeof r=="function"?r(g):r,p=()=>{x(!0)};return Y.createElement(l,So({ref:f,className:Qp(`${m}${n?` ${n}`:""}`),"data-swiper-slide-index":s,onLoad:p},u),o&&Y.createElement(fu.Provider,{value:g},Y.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},h(),a&&!C&&Y.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&Y.createElement(fu.Provider,{value:g},h(),a&&!C&&Y.createElement("div",{className:"swiper-lazy-preloader"})))});Nr.displayName="SwiperSlide";function fw(e,t,l,r){return e.params.createElements&&Object.keys(r).forEach(n=>{if(!l[n]&&l.auto===!0){let i=bt(e.el,`.${r[n]}`)[0];i||(i=ll("div",r[n]),i.className=r[n],e.el.append(i)),l[n]=i,t[n]=i}}),l}function Xr(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Un(e){let{swiper:t,extendParams:l,on:r,emit:n}=e;const i="swiper-pagination";l({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),t.pagination={el:null,bullets:[]};let o,a=0;function s(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(h,p){const{bulletActiveClass:y}=t.params.pagination;h&&(h=h[`${p==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${y}-${p}`),h=h[`${p==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${y}-${p}-${p}`)))}function u(h,p,y){if(h=h%y,p=p%y,p===h+1)return"next";if(p===h-1)return"previous"}function f(h){const p=h.target.closest(Xr(t.params.pagination.bulletClass));if(!p)return;h.preventDefault();const y=bo(p)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===y)return;const b=u(t.realIndex,y,t.slides.length);b==="next"?t.slideNext():b==="previous"?t.slidePrev():t.slideToLoop(y)}else t.slideTo(y)}function m(){const h=t.rtl,p=t.params.pagination;if(s())return;let y=t.pagination.el;y=Pt(y);let b,k;const E=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,I=t.params.loop?Math.ceil(E/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(k=t.previousRealIndex||0,b=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(b=t.snapIndex,k=t.previousSnapIndex):(k=t.previousIndex||0,b=t.activeIndex||0),p.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const A=t.pagination.bullets;let T,j,N;if(p.dynamicBullets&&(o=r0(A[0],t.isHorizontal()?"width":"height"),y.forEach(L=>{L.style[t.isHorizontal()?"width":"height"]=`${o*(p.dynamicMainBullets+4)}px`}),p.dynamicMainBullets>1&&k!==void 0&&(a+=b-(k||0),a>p.dynamicMainBullets-1?a=p.dynamicMainBullets-1:a<0&&(a=0)),T=Math.max(b-a,0),j=T+(Math.min(A.length,p.dynamicMainBullets)-1),N=(j+T)/2),A.forEach(L=>{const B=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(D=>`${p.bulletActiveClass}${D}`)].map(D=>typeof D=="string"&&D.includes(" ")?D.split(" "):D).flat();L.classList.remove(...B)}),y.length>1)A.forEach(L=>{const B=bo(L);B===b?L.classList.add(...p.bulletActiveClass.split(" ")):t.isElement&&L.setAttribute("part","bullet"),p.dynamicBullets&&(B>=T&&B<=j&&L.classList.add(...`${p.bulletActiveClass}-main`.split(" ")),B===T&&c(L,"prev"),B===j&&c(L,"next"))});else{const L=A[b];if(L&&L.classList.add(...p.bulletActiveClass.split(" ")),t.isElement&&A.forEach((B,D)=>{B.setAttribute("part",D===b?"bullet-active":"bullet")}),p.dynamicBullets){const B=A[T],D=A[j];for(let Q=T;Q<=j;Q+=1)A[Q]&&A[Q].classList.add(...`${p.bulletActiveClass}-main`.split(" "));c(B,"prev"),c(D,"next")}}if(p.dynamicBullets){const L=Math.min(A.length,p.dynamicMainBullets+4),B=(o*L-o)/2-N*o,D=h?"right":"left";A.forEach(Q=>{Q.style[t.isHorizontal()?D:"top"]=`${B}px`})}}y.forEach((A,T)=>{if(p.type==="fraction"&&(A.querySelectorAll(Xr(p.currentClass)).forEach(j=>{j.textContent=p.formatFractionCurrent(b+1)}),A.querySelectorAll(Xr(p.totalClass)).forEach(j=>{j.textContent=p.formatFractionTotal(I)})),p.type==="progressbar"){let j;p.progressbarOpposite?j=t.isHorizontal()?"vertical":"horizontal":j=t.isHorizontal()?"horizontal":"vertical";const N=(b+1)/I;let L=1,B=1;j==="horizontal"?L=N:B=N,A.querySelectorAll(Xr(p.progressbarFillClass)).forEach(D=>{D.style.transform=`translate3d(0,0,0) scaleX(${L}) scaleY(${B})`,D.style.transitionDuration=`${t.params.speed}ms`})}p.type==="custom"&&p.renderCustom?(A.innerHTML=p.renderCustom(t,b+1,I),T===0&&n("paginationRender",A)):(T===0&&n("paginationRender",A),n("paginationUpdate",A)),t.params.watchOverflow&&t.enabled&&A.classList[t.isLocked?"add":"remove"](p.lockClass)})}function v(){const h=t.params.pagination;if(s())return;const p=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let y=t.pagination.el;y=Pt(y);let b="";if(h.type==="bullets"){let k=t.params.loop?Math.ceil(p/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&k>p&&(k=p);for(let E=0;E<k;E+=1)h.renderBullet?b+=h.renderBullet.call(t,E,h.bulletClass):b+=`<${h.bulletElement} ${t.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?b=h.renderFraction.call(t,h.currentClass,h.totalClass):b=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?b=h.renderProgressbar.call(t,h.progressbarFillClass):b=`<span class="${h.progressbarFillClass}"></span>`),t.pagination.bullets=[],y.forEach(k=>{h.type!=="custom"&&(k.innerHTML=b||""),h.type==="bullets"&&t.pagination.bullets.push(...k.querySelectorAll(Xr(h.bulletClass)))}),h.type!=="custom"&&n("paginationRender",y[0])}function C(){t.params.pagination=fw(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const h=t.params.pagination;if(!h.el)return;let p;typeof h.el=="string"&&t.isElement&&(p=t.el.querySelector(h.el)),!p&&typeof h.el=="string"&&(p=[...document.querySelectorAll(h.el)]),p||(p=h.el),!(!p||p.length===0)&&(t.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(p)&&p.length>1&&(p=[...t.el.querySelectorAll(h.el)],p.length>1&&(p=p.filter(y=>Wp(y,".swiper")[0]===t.el)[0])),Array.isArray(p)&&p.length===1&&(p=p[0]),Object.assign(t.pagination,{el:p}),p=Pt(p),p.forEach(y=>{h.type==="bullets"&&h.clickable&&y.classList.add(...(h.clickableClass||"").split(" ")),y.classList.add(h.modifierClass+h.type),y.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(y.classList.add(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&y.classList.add(h.progressbarOppositeClass),h.clickable&&y.addEventListener("click",f),t.enabled||y.classList.add(h.lockClass)}))}function x(){const h=t.params.pagination;if(s())return;let p=t.pagination.el;p&&(p=Pt(p),p.forEach(y=>{y.classList.remove(h.hiddenClass),y.classList.remove(h.modifierClass+h.type),y.classList.remove(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(y.classList.remove(...(h.clickableClass||"").split(" ")),y.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(y=>y.classList.remove(...h.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const h=t.params.pagination;let{el:p}=t.pagination;p=Pt(p),p.forEach(y=>{y.classList.remove(h.horizontalClass,h.verticalClass),y.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?g():(C(),v(),m())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&m()}),r("snapIndexChange",()=>{m()}),r("snapGridLengthChange",()=>{v(),m()}),r("destroy",()=>{x()}),r("enable disable",()=>{let{el:h}=t.pagination;h&&(h=Pt(h),h.forEach(p=>p.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{m()}),r("click",(h,p)=>{const y=p.target,b=Pt(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&b&&b.length>0&&!y.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&y===t.navigation.nextEl||t.navigation.prevEl&&y===t.navigation.prevEl))return;const k=b[0].classList.contains(t.params.pagination.hiddenClass);n(k===!0?"paginationShow":"paginationHide"),b.forEach(E=>E.classList.toggle(t.params.pagination.hiddenClass))}});const w=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Pt(h),h.forEach(p=>p.classList.remove(t.params.pagination.paginationDisabledClass))),C(),v(),m()},g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Pt(h),h.forEach(p=>p.classList.add(t.params.pagination.paginationDisabledClass))),x()};Object.assign(t.pagination,{enable:w,disable:g,render:v,update:m,init:C,destroy:x})}function hw(e){let{swiper:t,extendParams:l,on:r,emit:n,params:i}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},l({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,s=i&&i.autoplay?i.autoplay.delay:3e3,c=i&&i.autoplay?i.autoplay.delay:3e3,u,f=new Date().getTime(),m,v,C,x,w,g,h;function p(_){!t||t.destroyed||!t.wrapperEl||_.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",p),!(h||_.detail&&_.detail.bySwiperTouchMove)&&T())}const y=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?m=!0:m&&(c=u,m=!1);const _=t.autoplay.paused?u:f+c-new Date().getTime();t.autoplay.timeLeft=_,n("autoplayTimeLeft",_,_/s),a=requestAnimationFrame(()=>{y()})},b=()=>{let _;return t.virtual&&t.params.virtual.enabled?_=t.slides.filter(R=>R.classList.contains("swiper-slide-active"))[0]:_=t.slides[t.activeIndex],_?parseInt(_.getAttribute("data-swiper-autoplay"),10):void 0},k=_=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(a),y();let M=typeof _>"u"?t.params.autoplay.delay:_;s=t.params.autoplay.delay,c=t.params.autoplay.delay;const R=b();!Number.isNaN(R)&&R>0&&typeof _>"u"&&(M=R,s=R,c=R),u=M;const H=t.params.speed,q=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(H,!0,!0),n("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,H,!0,!0),n("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(H,!0,!0),n("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,H,!0,!0),n("autoplay")),t.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{k()})))};return M>0?(clearTimeout(o),o=setTimeout(()=>{q()},M)):requestAnimationFrame(()=>{q()}),M},E=()=>{f=new Date().getTime(),t.autoplay.running=!0,k(),n("autoplayStart")},I=()=>{t.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),n("autoplayStop")},A=(_,M)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(o),_||(g=!0);const R=()=>{n("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",p):T()};if(t.autoplay.paused=!0,M){w&&(u=t.params.autoplay.delay),w=!1,R();return}u=(u||t.params.autoplay.delay)-(new Date().getTime()-f),!(t.isEnd&&u<0&&!t.params.loop)&&(u<0&&(u=0),R())},T=()=>{t.isEnd&&u<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(f=new Date().getTime(),g?(g=!1,k(u)):k(),t.autoplay.paused=!1,n("autoplayResume"))},j=()=>{if(t.destroyed||!t.autoplay.running)return;const _=Nt();_.visibilityState==="hidden"&&(g=!0,A(!0)),_.visibilityState==="visible"&&T()},N=_=>{_.pointerType==="mouse"&&(g=!0,h=!0,!(t.animating||t.autoplay.paused)&&A(!0))},L=_=>{_.pointerType==="mouse"&&(h=!1,t.autoplay.paused&&T())},B=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",N),t.el.addEventListener("pointerleave",L))},D=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",N),t.el.removeEventListener("pointerleave",L))},Q=()=>{Nt().addEventListener("visibilitychange",j)},Fe=()=>{Nt().removeEventListener("visibilitychange",j)};r("init",()=>{t.params.autoplay.enabled&&(B(),Q(),E())}),r("destroy",()=>{D(),Fe(),t.autoplay.running&&I()}),r("_freeModeStaticRelease",()=>{(C||g)&&T()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?I():A(!0,!0)}),r("beforeTransitionStart",(_,M,R)=>{t.destroyed||!t.autoplay.running||(R||!t.params.autoplay.disableOnInteraction?A(!0,!0):I())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){I();return}v=!0,C=!1,g=!1,x=setTimeout(()=>{g=!0,C=!0,A(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!v)){if(clearTimeout(x),clearTimeout(o),t.params.autoplay.disableOnInteraction){C=!1,v=!1;return}C&&t.params.cssMode&&T(),C=!1,v=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(w=!0)}),Object.assign(t.autoplay,{start:E,stop:I,pause:A,resume:T})}function e1(e){const{effect:t,swiper:l,on:r,setTranslate:n,setTransition:i,overwriteParams:o,perspective:a,recreateShadows:s,getEffectParams:c}=e;r("beforeInit",()=>{if(l.params.effect!==t)return;l.classNames.push(`${l.params.containerModifierClass}${t}`),a&&a()&&l.classNames.push(`${l.params.containerModifierClass}3d`);const f=o?o():{};Object.assign(l.params,f),Object.assign(l.originalParams,f)}),r("setTranslate",()=>{l.params.effect===t&&n()}),r("setTransition",(f,m)=>{l.params.effect===t&&i(m)}),r("transitionEnd",()=>{if(l.params.effect===t&&s){if(!c||!c().slideShadows)return;l.slides.forEach(f=>{f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(m=>m.remove())}),s()}});let u;r("virtualUpdate",()=>{l.params.effect===t&&(l.slides.length||(u=!0),requestAnimationFrame(()=>{u&&l.slides&&l.slides.length&&(n(),u=!1)}))})}function pw(e,t){const l=Fp(t);return l!==t&&(l.style.backfaceVisibility="hidden",l.style["-webkit-backface-visibility"]="hidden"),l}function mw(e){let{swiper:t,duration:l,transformElements:r,allSlides:n}=e;const{activeIndex:i}=t,o=a=>a.parentElement?a.parentElement:t.slides.filter(c=>c.shadowRoot&&c.shadowRoot===a.parentNode)[0];if(t.params.virtualTranslate&&l!==0){let a=!1,s;n?s=r:s=r.filter(c=>{const u=c.classList.contains("swiper-slide-transform")?o(c):c;return t.getSlideIndex(u)===i}),s.forEach(c=>{U2(c,()=>{if(a||!t||t.destroyed)return;a=!0,t.animating=!1;const u=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(u)})})}}function gw(e){let{swiper:t,extendParams:l,on:r}=e;l({fadeEffect:{crossFade:!1}}),e1({effect:"fade",swiper:t,on:r,setTranslate:()=>{const{slides:o}=t,a=t.params.fadeEffect;for(let s=0;s<o.length;s+=1){const c=t.slides[s];let f=-c.swiperSlideOffset;t.params.virtualTranslate||(f-=t.translate);let m=0;t.isHorizontal()||(m=f,f=0);const v=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(c.progress),0):1+Math.min(Math.max(c.progress,-1),0),C=pw(a,c);C.style.opacity=v,C.style.transform=`translate3d(${f}px, ${m}px, 0px)`}},setTransition:o=>{const a=t.slides.map(s=>Fp(s));a.forEach(s=>{s.style.transitionDuration=`${o}ms`}),mw({swiper:t,duration:o,transformElements:a,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}function Cw(e){let{swiper:t,extendParams:l,on:r}=e;l({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const n=(s,c,u)=>{let f=u?s.querySelector(".swiper-slide-shadow-left"):s.querySelector(".swiper-slide-shadow-top"),m=u?s.querySelector(".swiper-slide-shadow-right"):s.querySelector(".swiper-slide-shadow-bottom");f||(f=ll("div",`swiper-slide-shadow-cube swiper-slide-shadow-${u?"left":"top"}`.split(" ")),s.append(f)),m||(m=ll("div",`swiper-slide-shadow-cube swiper-slide-shadow-${u?"right":"bottom"}`.split(" ")),s.append(m)),f&&(f.style.opacity=Math.max(-c,0)),m&&(m.style.opacity=Math.max(c,0))};e1({effect:"cube",swiper:t,on:r,setTranslate:()=>{const{el:s,wrapperEl:c,slides:u,width:f,height:m,rtlTranslate:v,size:C,browser:x}=t,w=G2(t),g=t.params.cubeEffect,h=t.isHorizontal(),p=t.virtual&&t.params.virtual.enabled;let y=0,b;g.shadow&&(h?(b=t.wrapperEl.querySelector(".swiper-cube-shadow"),b||(b=ll("div","swiper-cube-shadow"),t.wrapperEl.append(b)),b.style.height=`${f}px`):(b=s.querySelector(".swiper-cube-shadow"),b||(b=ll("div","swiper-cube-shadow"),s.append(b))));for(let E=0;E<u.length;E+=1){const I=u[E];let A=E;p&&(A=parseInt(I.getAttribute("data-swiper-slide-index"),10));let T=A*90,j=Math.floor(T/360);v&&(T=-T,j=Math.floor(-T/360));const N=Math.max(Math.min(I.progress,1),-1);let L=0,B=0,D=0;A%4===0?(L=-j*4*C,D=0):(A-1)%4===0?(L=0,D=-j*4*C):(A-2)%4===0?(L=C+j*4*C,D=C):(A-3)%4===0&&(L=-C,D=3*C+C*4*j),v&&(L=-L),h||(B=L,L=0);const Q=`rotateX(${w(h?0:-T)}deg) rotateY(${w(h?T:0)}deg) translate3d(${L}px, ${B}px, ${D}px)`;N<=1&&N>-1&&(y=A*90+N*90,v&&(y=-A*90-N*90)),I.style.transform=Q,g.slideShadows&&n(I,N,h)}if(c.style.transformOrigin=`50% 50% -${C/2}px`,c.style["-webkit-transform-origin"]=`50% 50% -${C/2}px`,g.shadow)if(h)b.style.transform=`translate3d(0px, ${f/2+g.shadowOffset}px, ${-f/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${g.shadowScale})`;else{const E=Math.abs(y)-Math.floor(Math.abs(y)/90)*90,I=1.5-(Math.sin(E*2*Math.PI/360)/2+Math.cos(E*2*Math.PI/360)/2),A=g.shadowScale,T=g.shadowScale/I,j=g.shadowOffset;b.style.transform=`scale3d(${A}, 1, ${T}) translate3d(0px, ${m/2+j}px, ${-m/2/T}px) rotateX(-89.99deg)`}const k=(x.isSafari||x.isWebView)&&x.needPerspectiveFix?-C/2:0;c.style.transform=`translate3d(0px,0,${k}px) rotateX(${w(t.isHorizontal()?0:y)}deg) rotateY(${w(t.isHorizontal()?-y:0)}deg)`,c.style.setProperty("--swiper-cube-translate-z",`${k}px`)},setTransition:s=>{const{el:c,slides:u}=t;if(u.forEach(f=>{f.style.transitionDuration=`${s}ms`,f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(m=>{m.style.transitionDuration=`${s}ms`})}),t.params.cubeEffect.shadow&&!t.isHorizontal()){const f=c.querySelector(".swiper-cube-shadow");f&&(f.style.transitionDuration=`${s}ms`)}},recreateShadows:()=>{const s=t.isHorizontal();t.slides.forEach(c=>{const u=Math.max(Math.min(c.progress,1),-1);n(c,u,s)})},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}const vw=e=>d.jsx(yw,{children:d.jsx(Rr,{pagination:!0,modules:[gw,Un,hw],className:"mySwiper",autoplay:{delay:2500,disableOnInteraction:!1},children:e.data.map((t,l)=>d.jsxs(Nr,{children:[d.jsx(xw,{children:d.jsxs("picture",{children:[d.jsx("source",{media:"(max-width: 360px)",srcSet:t.srcMobile}),d.jsx("source",{media:"(min-width: 768px)",srcSet:t.srcDesktop}),d.jsx("img",{src:t.srcTablet,alt:t.imageAlt})]})}),d.jsxs(ww,{children:[d.jsx(bw,{colorTitleType:t.colorTitleType,themeName:e.themeName,fontSize:e.fontSize,children:t.title}),t.colorSubTitleType&&d.jsx(Sw,{colorSubTitleType:t.colorSubTitleType,themeName:e.themeName,children:t.subTitle}),d.jsx(kw,{colorDescriptionType:t.colorDescriptionType,descriptionWeight:t.descriptionWeight,themeName:e.themeName,fontSize:e.fontSize,children:t.description}),d.jsx(Tw,{as:"a",href:t.path,bgBtnType:t.bgBtnType,themeName:e.themeName,children:"Узнать подробнее"})]})]},l))})}),yw=S.section` 
    margin-bottom: 0;   
    /* img {
        max-width: 1920px;
        width: 100%;        
        object-fit: cover;
    }
    @media ${({theme:e})=>e.media.tablet}{
        img {
            max-width: 100%;
            width: 100%; 
            height: 100%;
            object-position: center;
        }
    } */
`,xw=S.div`
    max-width: 1920px;
    height: auto;
    width: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }

    @media ${({theme:e})=>e.media.lg992}{
        max-width: 992px;
        height: 460px;

        img {
            object-position: right;
        }
    }

    @media ${({theme:e})=>e.media.tablet}{
        max-width: 767px;
        height: 350px;
    }

    @media screen and (max-width: 360px) {
        max-width: 360px;
        height: 274px;
    }
`,ww=S.div`    
    position: absolute;
    max-width: 1320px;
    width: 100%;    
    left: calc((100vw - 1320px)/2 + 20px);    
    top: 50%;    
    transform: translateY(-50%);
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media screen and (max-width: 1320px) {
        left: 20px;
    } 
`,bw=S.h2`

    font-size: calc((100vw - 26rem)/(137 - 26) * (5 - 2) + 2rem);    
    /* margin-bottom: 1.7rem; */
    margin-bottom: 24px;
    max-width: ${e=>e.fontSize>14?"100%":"625px"};
    line-height: ${e=>e.fontSize>14?"100%":"120%"};  
    //line-height: 120%;
    
    @media ${({theme:e})=>e.media.tablet}{
        margin-bottom: 0;    
    }

    @media ${({theme:e})=>e.media.mobile}{
        line-height: ${e=>e.fontSize>14?"100%":"2.2rem"};     
    }

    ${e=>e.colorTitleType==="orange"&&U`     
        color: ${t=>t.themeName==="default"?({theme:l})=>l.homeSlider.orange:({theme:l})=>l.homeSlider.color}  
    `}

    ${e=>e.colorTitleType==="white"&&U`    
        color: ${t=>t.themeName==="default"?({theme:l})=>l.homeSlider.white:({theme:l})=>l.homeSlider.color}
    `}

    ${e=>e.colorTitleType==="black"&&U`    
        color: ${t=>t.themeName==="default"?({theme:l})=>l.homeSlider.black:({theme:l})=>l.homeSlider.color}
    `}
`,Sw=S.h3` 
    font-size: calc((100vw - 26rem)/(137 - 26) * (3.4 - 1.14) + 1.14rem);
    max-width: 700px;
    margin-bottom: 1.2rem;

    @media ${({theme:e})=>e.media.tablet}{        
        margin-top: 20px;  
        margin-bottom: 0;  
    }

    @media ${({theme:e})=>e.media.mobile}{
        max-width: 320px;
        margin-top: 15px;          
    }

    ${e=>e.colorSubTitleType==="green"&&U`     
        color: ${t=>t.themeName==="default"?({theme:l})=>l.homeSlider.green:({theme:l})=>l.homeSlider.color}  
    `}    
`,kw=S.span` 
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.86 - 1) + 1rem); 
    font-weight: ${e=>e.descriptionWeight};

    @media ${({theme:e})=>e.media.tablet}{
        margin-top: 16px;
    }

    @media ${({theme:e})=>e.media.mobile}{
        max-width: ${e=>e.fontSize>14?"100%":"300px"};        
    }
    
    ${e=>e.colorDescriptionType==="green"&&U`     
        color: ${t=>t.themeName==="default"?({theme:l})=>l.homeSlider.green:({theme:l})=>l.homeSlider.color}
    `}
    
    ${e=>e.colorDescriptionType==="black"&&U`     
        color: ${t=>t.themeName==="default"?({theme:l})=>l.homeSlider.black:({theme:l})=>l.homeSlider.color}
    `}
`,Tw=S.button`
    padding: 20px 80px;
    border: none;    
    font-size: 1rem;
    line-height: 18px;
    font-weight: 700;  
    border-radius: 10px;
    margin-top: 2.2rem;

    color: ${e=>e.themeName==="default"?({theme:t})=>t.color.defaultBtn:({theme:t})=>t.homeSlider.color};

    outline: 1px solid ${e=>e.themeName==="default"?({theme:t})=>t.color.outline:({theme:t})=>t.homeSlider.color}; 
    
    &:hover {
        background: ${e=>e.bgBtnType==="green"?({theme:t})=>t.bgCol.btn.primaryHover:({theme:t})=>t.bgCol.btn.secondaryHover};      
    }

    @media ${({theme:e})=>e.media.tablet}{
        padding: 16px 22px;
        margin-top: 20px;
    }

    @media ${({theme:e})=>e.media.mobile}{
        margin-top: 15px;     
    }

    ${e=>e.bgBtnType==="orange"&&U`    
        background: ${t=>t.themeName==="default"?({theme:l})=>l.homeSlider.orange:({theme:l})=>l.homeSlider.transparent}
    `}

    ${e=>e.bgBtnType==="green"&&U`    
        background: ${t=>t.themeName==="default"?({theme:l})=>l.homeSlider.green:({theme:l})=>l.homeSlider.transparent}
    `}

    
`,Zo=S.div`
    background-image: url(${xp}); 
    background-position: ${e=>e.pos};
    width: ${e=>e.width};
    height: ${e=>e.height};
    filter: ${({theme:e})=>e.filter};
`,Ew=e=>d.jsxs(Aw,{num:e.num,fontSize:e.fontSize,children:[d.jsx(Zo,{pos:e.pos}),d.jsxs(Pw,{children:[e.startWord,d.jsx("br",{}),e.endWord]})]}),Aw=S.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;   
    outline: 1px solid ${({theme:e})=>e.color.outline};

    @media ${({theme:e})=>e.media.mobile} {  
        gap: 0;
    }    
    
    ${Zo} {
        width: 99px; 
        height: 90px;        

        @media ${({theme:e})=>e.media.mobile} {  
            //transform: scale(0.5);  
            transform: ${e=>e.fontSize>14?"scale(1)":"scale(0.5)"}           
        }
    }

    ${e=>e.num===0&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.advantages[0]}
    `}

    ${e=>e.num===1&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.advantages[1]}
    `}

    ${e=>e.num===2&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.advantages[2]}
    `}

    ${e=>e.num===3&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.advantages[3]}
    `}
`,Pw=S.span`
    text-align: center;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.4 - 1.1) + 1.1rem);
    font-weight: 700;    
`,$w=e=>d.jsxs(Iw,{children:[d.jsxs(J,{children:["Альянс ",d.jsx("span",{children:"Клиник"}),d.jsx("br",{})," в гармонии с собой, в альянсе со здоровьем!"]}),d.jsx(jw,{fontSize:e.fontSize,children:e.advantages.map((t,l)=>d.jsx(Ew,{pos:t.bgPosition,startWord:t.startWord,endWord:t.endWord,num:l,fontSize:e.fontSize},l))})]}),Iw=S.section`
        
`,jw=S.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 304px);    
    grid-auto-rows: ${e=>e.fontSize>14?"238px":"208px"};
    justify-content: center;
    gap: 20px;

    @media ${({theme:e})=>e.media.tablet} {
        grid-template-columns: repeat(2, minmax(200px, 250px));        
    }

    @media ${({theme:e})=>e.media.mobile} {        
        grid-template-columns: ${e=>e.fontSize>14?"280px":"repeat(2, 150px)"};
        grid-template-rows: ${e=>e.fontSize>14?"repeat(4, 280px)":"repeat(2, 150px)"};
    }
`,_w=e=>d.jsx(zw,{slideIndex:e.slideIndex,children:d.jsx(Pe,{to:`/${e.path}`,style:{display:"block",padding:"10px 15px"},children:d.jsxs(Lw,{children:[d.jsx(Mw,{children:e.serviceName}),d.jsx(Zo,{pos:e.bgPosition})]})})}),zw=S.li`
    //width: 303px; 
    width: 100%;      
    //height: 80px;
    height: 100%;
    //padding: 10px 15px;
    border-radius: 24px;       
    list-style: none;
    outline: 1px solid ${({theme:e})=>e.color.outline};
    
    &:hover{                
        //box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.25);
    }   

    
   
    @media ${({theme:e})=>e.media.tablet} {
            //width: 222px;
            //height: 60px;
            padding: 0 15px;       
    }
    
    
    ${e=>e.slideIndex===0&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.advantages[0]};
          
    `}
    ${e=>e.slideIndex===1&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.advantages[1]}   
    `}
    ${e=>e.slideIndex===2&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.advantages[2]}   
    `}
    ${e=>e.slideIndex===3&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.advantages[3]}   
    `}
`,Lw=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Zo}{
        width: 60px;
        height: 60px;
        flex-shrink: 0;

        @media ${({theme:e})=>e.media.tablet} {
            transform: scale(0.75);       
        }
    }
`,Mw=S.span`
    color: ${({theme:e})=>e.color.defaultText};  
    font-weight: 700;    
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem); 
`,Rw=e=>d.jsx(Nw,{slideIndex:e.slideIndex,children:e.slide.map((t,l)=>d.jsx(_w,{serviceName:t.serviceName,path:t.path,bgPosition:t.bgPosition,slideIndex:e.slideIndex},l))}),Nw=S.ul`     
    margin: 1px 0 0 1px;
    display: flex;
    flex-direction: column;
    gap: 12px;

`,Ow=e=>d.jsxs(Bw,{className:"bulletLocation_services",children:[d.jsxs(J,{children:["Наши ",d.jsx("span",{children:"услуги"})]}),d.jsx(Rr,{pagination:!0,modules:[Un],slidesPerView:"auto",spaceBetween:15,initialSlide:0,className:"mySwiper",children:e.services.map((t,l)=>d.jsx(Nr,{children:d.jsx(Rw,{slide:t,slideIndex:l})},l))})]}),Bw=S.section`
        
`,Dw="/assets/images/single-img/desctop/bg_left_advantages.svg",Fw="/assets/images/single-img/desctop/bg_right_advantages.svg",Ww="/assets/images/single-img/mobile/bg_360_advantages.svg",Vw="/assets/images/single-img/tablet/bg_tablet_advantages.svg",xd=e=>d.jsxs(Hw,{children:[d.jsx(Uw,{children:d.jsx("img",{src:e.doctor.foto})}),d.jsxs(Gw,{fontSize:e.fontSize,children:[d.jsx(qw,{children:e.doctor.fullName}),d.jsx(Yw,{children:e.doctor.post}),d.jsxs(Kw,{children:[d.jsx("span",{children:"Стаж:"})," ",e.doctor.workExperience]}),d.jsx(pd,{to:`${e.doctor.path}`,children:"Подробнее"})]})]}),Hw=S.li`    
    max-width: 304px;
    width: 100%;
    display: flex;
    flex-direction: column;    
`,Uw=S.div`
    img {
        max-width: 100%;    
        height: auto;
    }    
`,Gw=S.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 304px;    
    width: 100%;     
    padding: 20px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.bgCol.default};
    outline: 1px solid ${({theme:e})=>e.color.outline};
    margin-top: -68px;
    z-index: 10;

    height: ${e=>e.fontSize>14?"100%":"249px"}; 
    /* ${e=>e.fontSize&&U`
        height: ${e.fontSize>14?"100%":"249px"};    
    `} */

    @media ${({theme:e})=>e.media.mobile} {
        margin-top: -52px;    
    }
`,qw=S.span`
    margin-bottom: 12px;
    font-weight: 700;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
`,Yw=S.span`
    max-width: 224px;
    width: 100%;
    margin-bottom: auto;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem);
    color: ${({theme:e})=>e.color.multiСhannel};
    font-weight: 600;
`,Kw=S.span`
    margin-bottom: 16px;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
    color: ${({theme:e})=>e.color.multiСhannel};
    font-weight: 600;
    span {
        font-weight: 700;
        color: ${({theme:e})=>e.color.defaultText};
    }
`,Xw=e=>d.jsxs(Qw,{children:[d.jsxs(Jw,{children:[d.jsx(J,{children:d.jsx("span",{children:"Наши врачи"})}),d.jsx(gt,{to:"/doctors",children:"Все врачи"})]}),d.jsx(Zw,{children:e.doctors.map((t,l)=>d.jsx(xd,{doctor:t,fontSize:e.fontSize},l))})]}),Qw=S.section`
    padding: 50px 0;    
`,Jw=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    height: 60px;
    margin-bottom: 40px; 
    
    ${J} {
        margin-bottom: 0;
    }
`,Zw=S.ul`
    display: flex;
    //flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;    
`,eb=e=>d.jsxs(tb,{children:[d.jsxs(lb,{children:[d.jsx(J,{children:d.jsx("span",{children:"Наши врачи"})}),d.jsx(gt,{to:"/doctors",children:"Все врачи"})]}),d.jsx(rb,{children:e.doctors.slice(0,-1).map((t,l)=>d.jsx(xd,{doctor:t,fontSize:e.fontSize},l))})]}),tb=S.section`
    padding: 50px 0;    
`,lb=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    height: 60px;
    margin-bottom: 40px; 
    
    ${J} {
        margin-bottom: 0;
    }
`,rb=S.ul`
    display: flex;
    //flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;    
`,nb=e=>d.jsxs(ib,{className:"bulletLocation_doctors",children:[d.jsx(J,{children:d.jsx("span",{children:"Наши врачи"})}),d.jsx(ob,{children:d.jsx(Rr,{effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:!0,modules:[Cw,Un],className:"mySwiper",children:e.doctors.map((t,l)=>d.jsx(Nr,{children:d.jsx(xd,{doctor:t,fontSize:e.fontSize})},l))})}),d.jsx(gt,{to:"/doctors",children:"Все врачи"})]}),ib=S.section`
    padding: 20px 0;    
`,ob=S.div`
    max-width: 304px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 70px;
    
    @media ${({theme:e})=>e.media.mobile} {
        max-width: 224px;
    }
`,Gn=()=>{const[e,t]=$.useState(window.innerWidth),l=()=>t(window.innerWidth);return $.useEffect(()=>(window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}),[]),e},sb=e=>{const t=Gn();return d.jsx(d.Fragment,{children:t>767?t>1200?d.jsx(Xw,{doctors:e.doctors,fontSize:e.fontSize}):d.jsx(eb,{doctors:e.doctors,fontSize:e.fontSize}):d.jsx(nb,{doctors:e.doctors,fontSize:e.fontSize})})},ab="/assets/images/single-img/desctop/bg_doctors.svg",db=e=>d.jsx(cb,{id:e.promo.id,frontImg:e.promo.frontImg,backImg:e.promo.backImg,fontSize:e.fontSize,children:d.jsx(Pe,{to:`/${e.promo.path}`,style:{display:"block"},children:d.jsxs(ub,{children:[d.jsxs(hb,{children:[d.jsx(pb,{fontSize:e.fontSize,children:e.promo.endDate}),d.jsx(Ri,{fontSize:e.fontSize,children:e.promo.title}),d.jsx(Ni,{fontSize:e.fontSize,children:e.promo.subTitle}),e.promo.id!==3&&d.jsx(mb,{id:e.promo.id,children:e.promo.sale}),e.promo.id===3&&d.jsx(gb,{fontSize:e.fontSize,children:e.promo.note})]}),d.jsx(fb,{frontImg:e.promo.frontImg,backImg:e.promo.backImg,fontSize:e.fontSize})]})})}),cb=S.li`
    list-style: none;    
    border-radius: 24px;
    outline: 1px solid ${({theme:e})=>e.color.outline};
    max-width: 414px;
    width: 100%;
    height: ${e=>e.fontSize>14?"330px":"285px"};

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
    }

    @media ${({theme:e})=>e.media.laptop} {
        max-width: 354px;  
        width: 304px;         
        height: ${e=>e.fontSize>14?"375px":"228px"};        
        flex-grow: 1;       
    }

    @media ${({theme:e})=>e.media.tablet} {
        max-width: ${e=>e.fontSize>14?"354px":"291px"};
        height: ${e=>e.fontSize>14?"375px":"200px"};         
    }

    @media ${({theme:e})=>e.media.mobile} {        
        max-width: ${e=>e.fontSize>14?"354px":"267px"};        
        height: ${e=>e.fontSize>14?"375px":"185px"};         
    }

    ${e=>e.id===1&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.promotions[1].bg};

        ${Ri}{
            color: ${({theme:t})=>t.color.homePage.promotions[1].title};
        }

        ${Ni}{
            color: ${({theme:t})=>t.color.homePage.promotions[1].subTitle};
        }
    `}

    ${e=>e.id===2&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.promotions[2].bg};

        ${Ri}{
            color: ${({theme:t})=>t.color.homePage.promotions[2].title};
        }
        
        ${Ni}{
            color: ${({theme:t})=>t.color.homePage.promotions[2].subTitle};
        }
    `}

    ${e=>e.id===3&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.promotions[3].bg};

        ${Ri}{
            color: ${({theme:t})=>t.color.homePage.promotions[3].title};
        } 
        
        ${Ni}{
            color: ${({theme:t})=>t.color.homePage.promotions[3].subTitle};
        }
    `}
       
`,ub=S.div`    
    position: relative;
`,fb=S.div`
    max-width: 179px;
    width: 100%;    
    height: ${e=>e.fontSize>14?"330px":"285px"};   
    border-radius: 0 24px 24px 0;
    background-image: url(${e=>e.frontImg}), url(${e=>e.backImg});
    background-position: right bottom;
    background-repeat: no-repeat;    
    filter: ${({theme:e})=>e.filter};   

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    

    @media ${({theme:e})=>e.media.laptop} {
        height: ${e=>e.fontSize>14?"375px":"228px"};
        background-size: contain;        
    }

    @media ${({theme:e})=>e.media.tablet} {
        height: ${e=>e.fontSize>14?"375px":"200px"};               
    }

    @media ${({theme:e})=>e.media.mobile} {
        height: ${e=>e.fontSize>14?"375px":"185px"};              
    }
    
`,hb=S.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 20px;

    position: absolute;
    top: 0;
    left: 0;    
    z-index: 10;

    @media ${({theme:e})=>e.media.laptop} {
        padding: 30px 15px;
    }

    @media ${({theme:e})=>e.media.tablet} {
        padding: 20px 15px;
    }

    @media ${({theme:e})=>e.media.mobile} {
        padding: 20px 10px;       
    }
`,pb=S.span`
    width: max-content;     
    padding: 6px 10px;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem); 
    outline: 1px solid ${({theme:e})=>e.color.outline};
    background-color: ${({theme:e})=>e.bgCol.default};
    color: ${({theme:e})=>e.color.defaultText};    
    border-radius: 10px;  
    margin-bottom: 20px; 
    white-space: pre-wrap;
    
    @media ${({theme:e})=>e.media.laptop} {
        width: ${e=>e.fontSize>14?"100%":"max-content"};       
    }

    @media ${({theme:e})=>e.media.tablet} {
        margin-bottom: 14px;       
    }

    @media ${({theme:e})=>e.media.mobile} {
        margin-bottom: 8px;       
    }
`,Ri=S.span`    
    max-width: ${e=>e.fontSize>14?"max-content":"210px"};  
    width: 100%;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.57 - 1) + 1rem);
    font-weight: 700;   

    @media ${({theme:e})=>e.media.laptop} {
        max-width: ${e=>e.fontSize>14?"max-content":"185px"};
    } 

    @media ${({theme:e})=>e.media.tablet} {
        max-width: ${e=>e.fontSize>14?"max-content":"165px"};
    } 

    @media ${({theme:e})=>e.media.mobile} {
        max-width: ${e=>e.fontSize>14?"max-content":"145px"};
    }  
`,Ni=S.span`
    max-width: ${e=>e.fontSize>14?"max-content":"255px"}; 
    width: 100%;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.57 - 1) + 1rem);
    font-weight: 700;

    @media ${({theme:e})=>e.media.laptop} {
        max-width: ${e=>e.fontSize>14?"max-content":"226px"};
    }

    @media ${({theme:e})=>e.media.tablet} {
        max-width: ${e=>e.fontSize>14?"max-content":"200px"};
    }
    
    @media ${({theme:e})=>e.media.mobile} {
        max-width: ${e=>e.fontSize>14?"max-content":"190px"};
    }
`,mb=S.div`
    padding: 12px 5px;
    font-weight: 700;
    width: max-content;
    margin-top: 20px;
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.color.secondary};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 0.86) + 0.86rem);
    
    position: relative;

    &::before {
            content: "";
            position: absolute;
            top: -8px;
            left: 16px;
            z-index: 10;
            width: 15px;
            height: 15px;
            border-top: 1px solid ${({theme:e})=>e.color.secondary};
            border-right: 1px solid ${({theme:e})=>e.color.secondary};            
            transform: rotate(-45deg);
        } 

    @media ${({theme:e})=>e.media.tablet} {
        padding: 8px 3px;
        margin-top: 16px;
    }
    
    
    ${e=>e.id===1&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.promotions[1].bgSale}; 
        color: ${({theme:t})=>t.color.homePage.promotions[1].sale};  
        
        &::before {            
            background-color: ${({theme:t})=>t.bgCol.homePage.promotions[1].bgSale};            
        }
    `}

    ${e=>e.id===2&&U`
        background-color: ${({theme:t})=>t.bgCol.homePage.promotions[2].bgSale}; 
        color: ${({theme:t})=>t.color.homePage.promotions[2].sale};  
        
        &::before {            
            background-color: ${({theme:t})=>t.bgCol.homePage.promotions[2].bgSale};           
        }
    `}
`,gb=S.div`    
    max-width: ${e=>e.fontSize>14?"max-content":"215px"}; 
    width: 100%;
    margin-top: 4px;
    color: ${({theme:e})=>e.color.defaultText};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem);
`,Cb=e=>d.jsxs(vb,{children:[d.jsx(J,{children:"Акции"}),d.jsx(yb,{children:e.promotions.map(t=>d.jsx(db,{promo:t,fontSize:e.fontSize},t.id))})]}),vb=S.section`
    
`,yb=S.ul`
    display: flex;
    
    justify-content: space-between;
    gap: 20px;

    @media ${({theme:e})=>e.media.laptop} {
        justify-content: center; 
        flex-wrap: wrap;   
    }

    @media ${({theme:e})=>e.media.tablet} { 
        flex-direction: column;
        align-items: center;
    }
`,wd=e=>d.jsxs(xb,{fontSize:e.fontSize,children:[d.jsx(wb,{children:d.jsx("img",{src:e.news.img})}),d.jsxs(bb,{fontSize:e.fontSize,children:[d.jsxs(Sb,{fontSize:e.fontSize,children:[d.jsx(kb,{fontSize:e.fontSize,children:e.news.title}),d.jsx(Tb,{children:e.news.data})]}),d.jsx(Eb,{fontSize:e.fontSize,children:e.news.prev}),d.jsx(pd,{to:`/${e.news.path}`,children:"Читать новость"})]})]}),xb=S.li`    
    max-width: 304px;
    width: 100%;
    //height: ${e=>e.fontSize>14?"max-content":"100%"};
    display: flex;
    flex-direction: column;
    
    @media ${({theme:e})=>e.media.mobile} {
        max-width: ${e=>e.fontSize>14?"304px":"224px"}; 
    }
`,wb=S.div`
    img {
        max-width: 100%;    
        height: auto;
    }    
`,bb=S.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;         
    padding: 16px 20px 25px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.bgCol.default};
    outline: 1px solid ${({theme:e})=>e.color.outline};
    margin-top: -54px;
    z-index: 10;
    
    height: ${e=>e.fontSize>14?"100%":"346px"}; 

    /* ${e=>e.fontSize&&U`
        height: ${e.fontSize>14?"100%":"249px"};    
    `} */

    @media ${({theme:e})=>e.media.laptop} {
        padding: 15px 14px;    
    }

    @media ${({theme:e})=>e.media.tablet} {
        margin-top: -44px;    
    }
`,Sb=S.div`    
    display: flex;
    flex-direction: column;    
    height: ${e=>e.fontSize>14?"100%":"114px"}; 
    margin-bottom: 12px;   

    @media ${({theme:e})=>e.media.tablet} {
        height: ${e=>e.fontSize>14?"100%":"126px"};     
    }
`,kb=S.span`    
    font-weight: 700;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
    margin-bottom: 6px;   
    
    @media ${({theme:e})=>e.media.laptop} {
        word-break: ${e=>e.fontSize>14?"break-all":"normal"}; 
    }

    @media ${({theme:e})=>e.media.tablet} {
        word-break: normal; 
    }
`,Tb=S.span`    
    margin-top: auto;    
    color: ${({theme:e})=>e.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
`,Eb=S.span`    
    max-width: 268px;
    width: 100%;
    height: ${e=>e.fontSize>14?"100%":"102px"};    
    margin-bottom: 16px;    
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem);
    color: ${({theme:e})=>e.color.multiСhannel};
    font-weight: 600;

    @media ${({theme:e})=>e.media.laptop} {
        height: ${e=>e.fontSize>14?"100%":"120px"};     
    }
`,Ab=e=>{const t=[...e.lastNews].reverse();return d.jsxs(Pb,{children:[d.jsxs($b,{children:[d.jsx(J,{children:d.jsx("span",{children:"Новости клиники"})}),d.jsx(gt,{to:"/news",children:"Все новости"})]}),d.jsx(Ib,{children:t.map(l=>d.jsx(wd,{news:l,fontSize:e.fontSize},l.id))})]})},Pb=S.section`
  padding: 50px 0;  
`,$b=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    height: 60px;
    margin-bottom: 40px; 
    
    ${J} {
        margin-bottom: 0;
    }
`,Ib=S.ul`
    display: flex;    
    justify-content: space-between;
    gap: 20px;    
`,jb=e=>{const t=[...e.lastNews].reverse();return d.jsxs(_b,{children:[d.jsxs(zb,{children:[d.jsx(J,{children:d.jsx("span",{children:"Новости клиники"})}),d.jsx(gt,{to:"/news",children:"Все новости"})]}),d.jsx(Lb,{children:t.slice(0,-1).map(l=>d.jsx(wd,{news:l,fontSize:e.fontSize},l.id))})]})},_b=S.section`
  padding: 50px 0;  
`,zb=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    height: 60px;
    margin-bottom: 40px; 
    
    ${J} {
        margin-bottom: 0;
    }
`,Lb=S.ul`
    display: flex;    
    justify-content: space-between;
    gap: 20px;    
`,Mb=e=>{const t=[...e.lastNews].reverse();return d.jsxs(Rb,{className:"bulletLocation_news",children:[d.jsx(J,{children:d.jsx("span",{children:"Новости клиники"})}),d.jsx(Nb,{children:d.jsx(Rr,{pagination:!0,modules:[Un],grabCursor:!0,slidesPerView:"auto",spaceBetween:18,initialSlide:0,className:"mySwiper",children:t.map(l=>d.jsx(Nr,{children:d.jsx(wd,{news:l,fontSize:e.fontSize})},l.id))})}),d.jsx(gt,{to:"/news",children:"Все новости"})]})},Rb=S.section`
    padding: 20px 0;    
`,Nb=S.div`
    margin-bottom: 18px;   
`,Ob=e=>{const t=Gn(),l=1200,r=767;return t>l?d.jsx(Ab,{lastNews:e.lastNews,fontSize:e.fontSize}):t>r&&t<=l?d.jsx(jb,{lastNews:e.lastNews,fontSize:e.fontSize}):d.jsx(Mb,{lastNews:e.lastNews,fontSize:e.fontSize})},bd=e=>d.jsxs(Bb,{fontSize:e.fontSize,children:[d.jsx(Db,{children:d.jsx("img",{src:e.article.img})}),d.jsxs(Fb,{fontSize:e.fontSize,children:[d.jsx(Wb,{fontSize:e.fontSize,children:e.article.title}),d.jsx(pd,{to:`/${e.article.path}`,children:"Читать"})]})]}),Bb=S.li`    
    max-width: 304px;
    width: 100%;    
    display: flex;
    flex-direction: column;
    
    @media ${({theme:e})=>e.media.mobile} {
        max-width: ${e=>e.fontSize>14?"304px":"224px"}; 
        
    }
`,Db=S.div`
    img {
        max-width: 100%;    
        height: auto;
    }    
`,Fb=S.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;         
    padding: 16px 20px 20px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.bgCol.default};
    outline: 1px solid ${({theme:e})=>e.color.outline};
    margin-top: -54px;
    z-index: 10;
    min-height: 186px;    
    height: ${e=>e.fontSize>14?"100%":"186px"};    

    @media ${({theme:e})=>e.media.laptop} {
        padding: 16px 12px 15px;    
    }

    @media ${({theme:e})=>e.media.tablet} {
        margin-top: -44px;    
    }
`,Wb=S.span`    
    font-weight: 700;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
    margin-bottom: 6px; 
    word-break: ${e=>e.fontSize>14?"break-all":"normal"};    
`,Vb=e=>{const t=[...e.usefulInfo].reverse();return d.jsxs(Hb,{children:[d.jsxs(Ub,{children:[d.jsx(J,{children:d.jsx("span",{children:"Полезная информация"})}),d.jsx(gt,{to:"/usefulInfo",children:"Все записи"})]}),d.jsx(Gb,{children:t.map(l=>d.jsx(bd,{article:l,fontSize:e.fontSize},l.id))})]})},Hb=S.section`
  padding: 50px 0;  
`,Ub=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    height: 60px;
    margin-bottom: 40px; 
    
    ${J} {
        margin-bottom: 0;
    }
`,Gb=S.ul`
    display: flex;    
    justify-content: space-between;
    gap: 20px;    
`,qb=e=>{const t=[...e.usefulInfo].reverse();return d.jsxs(Yb,{children:[d.jsxs(Kb,{children:[d.jsx(J,{children:d.jsx("span",{children:"Полезная информация"})}),d.jsx(gt,{to:"/usefulInfo",children:"Все записи"})]}),d.jsx(Xb,{children:t.slice(0,-1).map(l=>d.jsx(bd,{article:l,fontSize:e.fontSize},l.id))})]})},Yb=S.section`
  padding: 50px 0;  
`,Kb=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    height: 60px;
    margin-bottom: 40px; 
    
    ${J} {
        margin-bottom: 0;
    }
`,Xb=S.ul`
    display: flex;    
    justify-content: space-between;
    gap: 20px;    
`,Qb=e=>{const t=[...e.usefulInfo].reverse();return d.jsxs(Jb,{className:"bulletLocation_news",children:[d.jsx(J,{children:d.jsx("span",{children:"Полезная информация"})}),d.jsx(Zb,{children:d.jsx(Rr,{pagination:!0,modules:[Un],grabCursor:!0,slidesPerView:"auto",spaceBetween:18,initialSlide:0,className:"mySwiper",children:t.map(l=>d.jsx(Nr,{children:d.jsx(bd,{article:l,fontSize:e.fontSize})},l.id))})}),d.jsx(gt,{to:"/usefulInfo",children:"Все записи"})]})},Jb=S.section`
    padding: 20px 0;    
`,Zb=S.div`
    margin-bottom: 18px;   
`,eS=e=>{const t=Gn(),l=1200,r=767;return t>l?d.jsx(Vb,{usefulInfo:e.usefulInfo,fontSize:e.fontSize}):t>r&&t<=l?d.jsx(qb,{usefulInfo:e.usefulInfo,fontSize:e.fontSize}):d.jsx(Qb,{usefulInfo:e.usefulInfo,fontSize:e.fontSize})},hu=e=>d.jsx(tS,{width:e.partner.width,children:d.jsx("img",{src:e.partner.img})}),tS=S.li`
    
   
   max-width: ${e=>e.width};
   width: ${e=>parseInt(`${e.width}`)*.9}px;     
   
   img {
    max-width: 100%;  
    height: auto;
   }

   @media ${({theme:e})=>e.media.laptop} {       
    width: ${e=>parseInt(`${e.width}`)*.8}px;         
   }  

   @media ${({theme:e})=>e.media.tablet} {       
    width: ${e=>parseInt(`${e.width}`)*.71}px;         
   }

   @media ${({theme:e})=>e.media.mobile} {       
    width: ${e=>parseInt(`${e.width}`)*.64}px;         
   }
`,lS=e=>d.jsxs(rS,{children:[d.jsx(J,{children:"Партнеры клиники"}),d.jsx(pu,{children:"Медицинское страхование:"}),d.jsx(mu,{children:e.partners.slice(0,5).map(t=>d.jsx(hu,{partner:t},t.id))}),d.jsx(pu,{children:"Лабораторная диагностика:"}),d.jsx(mu,{children:e.partners.slice(5).map(t=>d.jsx(hu,{partner:t},t.id))})]}),rS=S.section`

    & ul:last-of-type {
        margin-bottom: 0;
    }
    
`,pu=S.h3`
    margin-bottom: 36px;
    font-weight: 500;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
    text-align: center;
    color: ${({theme:e})=>e.color.primary} ;   
`,mu=S.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 46px;

    
    @media ${({theme:e})=>e.media.laptop} {       
        gap: 30;          
    }      

    @media ${({theme:e})=>e.media.tablet} {
        column-gap: 20px;
        row-gap: 16px;    
    }

    @media ${({theme:e})=>e.media.mobile} {        
        row-gap: 12px;        
    }
    
`,nS=e=>{const[t,l]=$.useState(null);setTimeout(()=>{l(window.store.getState().homePage.lastReview)},3e3);const r=t??e.lastReview,n=767;return d.jsxs(iS,{children:[d.jsxs(oS,{children:[d.jsx(J,{children:"Последний отзыв"}),e.windowWidth>n&&d.jsx(gt,{to:"/reviews",children:"Все отзывы"})]}),d.jsxs(sS,{children:[d.jsx("span",{children:"Пациент:"}),d.jsxs("span",{children:[d.jsx("div",{children:r.patient}),d.jsx("div",{children:r.date})]}),d.jsx("span",{children:"История пациента:"}),d.jsx("span",{children:r.history}),d.jsx("span",{children:r.liked?"Понравилось:":""}),d.jsx("span",{children:r.liked}),d.jsx("span",{children:r.notLiked?"Не понравилось:":""}),d.jsx("span",{children:r.notLiked}),d.jsxs("span",{children:["Представитель",d.jsx("br",{}),"клиники:"]}),d.jsx("span",{children:r.сlinicAdministrator})]}),e.windowWidth<=n&&d.jsx(gt,{to:"/reviews",children:"Все отзывы"})]})},iS=S.section`
    
`,oS=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    height: 60px;
    margin-bottom: 40px; 
    
    ${J} {
        margin-bottom: 0;
    }

    @media ${({theme:e})=>e.media.tablet} {
        margin-bottom: 24px;
        height: auto;

        ${J} {
            margin: 0 auto;
        }        
    }

    @media ${({theme:e})=>e.media.mobile} {
        margin-bottom: 10px;
    }
`,sS=S.div`
    padding: 20px 40px;
    background-color: ${({theme:e})=>e.bgCol.homePage.review};
    border-radius: 24px;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 60px;
    row-gap: 20px;

    span:nth-child(odd) {
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.43 - 0.86) + 0.86rem);
        font-weight: 700;
    }
    span:nth-child(even) {
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
        font-weight: 500;
    }
    span:nth-child(2) {
        display: flex;
        //flex-direction: row-reverse;
        justify-content: space-between;
    }

    @media ${({theme:e})=>e.media.tablet} {
        padding: 20px;
        margin-bottom: 20px;
    }

    @media ${({theme:e})=>e.media.mobile} {
        padding: 15px;
        grid-template-columns: 1fr;
        row-gap: 8px;

        span:nth-child(even) {
            margin-bottom: 12px;
        }

    }
`,aS={prices:"Цены",reviews:"Отзывы"},dS=()=>{const e=Mr();let t="";const l=e.pathname.split("/").filter(r=>r!=="").map(r=>(t+=`/${r}`,d.jsx(uS,{children:d.jsx(Pe,{to:t,children:aS[r]},r)})));return d.jsxs(cS,{children:[d.jsx(Pe,{to:"/",children:"Главная"})," ",l]})},cS=S.div`
    grid-column: 1/2;
    grid-row: 1/2;
    //margin-top: 36px; 
    align-self: end; 
    a {
        font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.93) + 0.93rem); 
        color: ${({theme:e})=>e.color.multiСhannel};
    }
     
`,uS=S.div`
    display: inline-block;
    margin-left: 20px;

    &::before {
        content: "";
        margin-right: 10px;
        //color: ${({theme:e})=>e.color.multiСhannel};
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${({theme:e})=>e.color.multiСhannel};
        transform: translate(-12px, 12px);
    }
`,t1=S.h1`

    color: ${({theme:e})=>e.color.primary};
    font-size: calc((100vw - 26rem)/(137 - 26) * (4.3 - 1.7) + 1.7rem);
    font-weight: 700;
    text-align: left;
    //margin-bottom: 24px;

    span {
        color: ${({theme:e})=>e.color.secondary}; 
    }

    @media ${({theme:e})=>e.media.tablet} {
        margin-bottom: 15px;
    }
    
`,fS=e=>d.jsx(hS,{bgColor:e.pageTopPart.pageName,children:d.jsx(ae,{children:d.jsxs(pS,{children:[d.jsx(dS,{}),d.jsx(t1,{children:e.pageTopPart.title}),d.jsx(mS,{src:e.windowWidth>576?e.pageTopPart.srcDesktop:e.pageTopPart.srcMobile})]})})}),hS=S.div`
    height: auto;
    background-color: ${e=>({theme:t})=>t.bgCol.pageName[e.bgColor]};
`,pS=S.div`
    display: grid;
    grid-template-columns: 1fr auto;
    padding-right: 4vw;
    //gap: 20px;

    ${t1} {
        grid-column: 1/2;
        grid-row: 2/3;
        align-self: center;
    }
`,mS=S.img`
    grid-column: 2/3;
    grid-row: 1/3;    
`,gS="/assets/images/home_slider/pgt.webp",CS="/assets/images/home_slider/unikalnaya-specializirovannaya-sreda.webp",vS="/assets/images/home_slider/artroskopiya-kolennogo-sustava.webp",yS="/assets/images/home_slider/besplatnye-pervichnye-konsultacii.webp",xS="/assets/images/home_slider/prp-terapiya.webp",wS="/assets/images/home_slider/dnk-analiz.webp",bS="/assets/images/home_slider/eko.webp",SS="/assets/images/home_slider/kriokonservaciya-materiala.webp",kS="/assets/images/home_slider/onlajn-konsultaciya.webp",TS="/assets/images/home_slider/tablet/pgt.webp",ES="/assets/images/home_slider/tablet/unikalnaya-specializirovannaya-sreda.webp",AS="/assets/images/home_slider/tablet/artroskopiya-kolennogo-sustava.webp",PS="/assets/images/home_slider/tablet/besplatnye-pervichnye-konsultacii.webp",$S="/assets/images/home_slider/tablet/prp-terapiya.webp",IS="/assets/images/home_slider/tablet/dnk-analiz.webp",jS="/assets/images/home_slider/tablet/eko.webp",_S="/assets/images/home_slider/tablet/kriokonservaciya-materiala.webp",zS="/assets/images/home_slider/tablet/onlajn-konsultaciya.webp",LS="/assets/images/home_slider/mobile/pgt.webp",MS="/assets/images/home_slider/mobile/unikalnaya-specializirovannaya-sreda.webp",RS="/assets/images/home_slider/mobile/artroskopiya-kolennogo-sustava.webp",NS="/assets/images/home_slider/mobile/besplatnye-pervichnye-konsultacii.webp",OS="/assets/images/home_slider/mobile/prp-terapiya.webp",BS="/assets/images/home_slider/mobile/dnk-analiz.webp",DS="/assets/images/home_slider/mobile/eko.webp",FS="/assets/images/home_slider/mobile/kriokonservaciya-materiala.webp",WS="/assets/images/home_slider/mobile/onlajn-konsultaciya.webp",VS="/assets/images/single-img/homePage/doctors/preview/doctor_1.webp",HS="/assets/images/single-img/homePage/doctors/preview/doctor_2.webp",US="/assets/images/single-img/homePage/doctors/preview/doctor_3.webp",GS="/assets/images/single-img/homePage/doctors/preview/doctor_4.webp",qS="/assets/images/single-img/homePage/promotions/stock_1.webp",YS="/assets/images/single-img/homePage/promotions/stock_2.webp",KS="/assets/images/single-img/homePage/promotions/stock_3.webp",gu="/assets/images/single-img/homePage/promotions/ellipse-orange.webp",XS="/assets/images/single-img/homePage/promotions/ellipse-green.webp",QS="/assets/images/single-img/news/preview/news-1.webp",JS="/assets/images/single-img/news/preview/news-2.webp",ZS="/assets/images/single-img/news/preview/news-3.webp",e3="/assets/images/single-img/news/preview/news-4.webp",t3="/assets/images/single-img/info/preview/info-1.webp",l3="/assets/images/single-img/info/preview/info-2.webp",r3="/assets/images/single-img/info/preview/info-3.webp",n3="/assets/images/single-img/info/preview/info-4.webp",i3="/assets/images/single-img/homePage/partners/partners_1.webp",o3="/assets/images/single-img/homePage/partners/partners_2.webp",s3="/assets/images/single-img/homePage/partners/partners_3.webp",a3="/assets/images/single-img/homePage/partners/partners_4.webp",d3="/assets/images/single-img/homePage/partners/partners_5.webp",c3="/assets/images/single-img/homePage/partners/partners_6.webp",u3="/assets/images/single-img/homePage/partners/partners_7.webp",f3="/assets/images/single-img/homePage/partners/partners_8.webp",l1="UPDATE_LAST_REVIEW",h3={mainSlider:[{srcDesktop:gS,srcTablet:TS,srcMobile:LS,imageAlt:"ПГТ",title:"ПГТ",subTitle:"Преимплантанционный генетический тест",path:"#",colorTitleType:"orange",colorSubTitleType:"green",bgBtnType:"orange"},{srcDesktop:CS,srcTablet:ES,srcMobile:MS,imageAlt:"Уникальная, специализированная среда",title:"Уникальная, специализированная среда",subTitle:"EmbryoGlue для переноса эмбриона",description:"Среда повышает уровень успеха имплантации эмбрионов на 8-9%",descriptionWeight:500,path:"#",colorTitleType:"orange",colorSubTitleType:"green",colorDescriptionType:"black",bgBtnType:"green"},{srcDesktop:vS,srcTablet:AS,srcMobile:RS,imageAlt:"Артроскопия коленного сустава",title:"Артроскопия коленного сустава",subTitle:"Бесплатно по полису ОМС",description:"Мы вернем Вам радость движения!",descriptionWeight:500,path:"#",colorTitleType:"black",colorSubTitleType:"green",colorDescriptionType:"black",bgBtnType:"orange"},{srcDesktop:yS,srcTablet:PS,srcMobile:NS,imageAlt:"Бесплатные первичные консультации",title:"Бесплатные первичные консультации",subTitle:"",description:"По проблемам бесплодия",descriptionWeight:700,path:"#",colorTitleType:"orange",colorDescriptionType:"green",bgBtnType:"orange"},{srcDesktop:xS,srcTablet:$S,srcMobile:OS,imageAlt:"PRP-терапия",title:"PRP-терапия",subTitle:"",description:"Уменьшение боли",descriptionWeight:700,path:"#",colorTitleType:"black",colorDescriptionType:"green",bgBtnType:"green"},{srcDesktop:wS,srcTablet:IS,srcMobile:BS,imageAlt:"ДНК-анализ",title:"ДНК-анализ",subTitle:"",description:"С целью установления родства",descriptionWeight:700,path:"#",colorTitleType:"white",colorDescriptionType:"black",bgBtnType:"orange"},{srcDesktop:bS,srcTablet:jS,srcMobile:DS,imageAlt:"ЭКО",title:"ЭКО",subTitle:"",description:"Бесплатно по полису ОМС",descriptionWeight:700,path:"#",colorTitleType:"orange",colorDescriptionType:"black",bgBtnType:"green"},{srcDesktop:SS,srcTablet:_S,srcMobile:FS,imageAlt:"Криоконсервация материала",title:"Криоконсервация материала",subTitle:"",description:"Самый лучший способ сохранить биоматериал",descriptionWeight:700,path:"#",colorTitleType:"white",colorDescriptionType:"black",bgBtnType:"green"},{srcDesktop:kS,srcTablet:zS,srcMobile:WS,imageAlt:"Онлайн консультация",title:"Онлайн консультация",subTitle:"",description:"Как это работает?",descriptionWeight:400,path:"#",colorTitleType:"orange",colorDescriptionType:"black",bgBtnType:"green"}],advantages:[{bgPosition:"-497px -90px",startWord:"12 лет",endWord:"на рынке ВРТ"},{bgPosition:"-497px -180px",startWord:"Более 4000",endWord:"программ ЭКО"},{bgPosition:"-497px -270px",startWord:"Эффективность",endWord:"программ ЭКО 47%"},{bgPosition:"-497px 0px",startWord:"Более 50 тысяч",endWord:"довольных клиентов"}],services:[[{serviceName:"Диагностика бесплодия",path:"infertility-diagnosis",bgPosition:"0px -410px"},{serviceName:"Услуги для беременных",path:"pregnant-women-services",bgPosition:"-60px -410px"},{serviceName:"Артроскопия коленного сустава",path:"knee-joint-arthroscopy",bgPosition:"-120px -410px"},{serviceName:"Генетические тесты",path:"genetic-tests",bgPosition:"-180px -410px"}],[{serviceName:"Лечение бесплодия",path:"infertility-treatment",bgPosition:"-240px -410px"},{serviceName:"Урология-андрология",path:"urology-andrology",bgPosition:"-300px -410px"},{serviceName:"Ультразвуковые исследования",path:"ultrasound-scan",bgPosition:"-360px -410px"},{serviceName:"ДНК-тесты на родство",path:"kinship-dna-tests",bgPosition:"-420px -410px"}],[{serviceName:"Гинекология",path:"gynecology",bgPosition:"-480px -410px"},{serviceName:"Урологические операции",path:"urological-operations",bgPosition:"-198px -94px"},{serviceName:"Ударно-волновая терапия",path:"shock-wave-therapy",bgPosition:"-198px -154px"},{serviceName:"Эндокринология",path:"endocrinology",bgPosition:"-160px -329px"}],[{serviceName:"Гинекологические операции",path:"gynecological-operations",bgPosition:"-220px -329px"},{serviceName:"Травматология и ортопедия",path:"traumatology-orthopedics",bgPosition:"-280px -329px"},{serviceName:"Функциональная диагностика",path:"functional-diagnostics",bgPosition:"-340px -329px"},{serviceName:"Терапия",path:"therapy",bgPosition:"-400px -329px"}]],doctors:[{fullName:"Гордеева Ирина Викторовна",post:"Главный врач клиники репродуктивного здоровья с лабораторией ЭКО ООО «Альянс Клиник»",workExperience:"с 2003 года",foto:VS,path:"#"},{fullName:"Симанская Светлана Юрьевна",post:"Заместитель главного врача по медицинской части, врач-терапевт",workExperience:"с 2005 года",foto:HS,path:"#"},{fullName:"Волкова Татьяна Евгеньевна",post:"Заведующий отделением ВРТ, врач-акушер-гинеколог, репродуктолог",workExperience:"с 2003 года",foto:US,path:"#"},{fullName:"Ладягина Елена Викторовна",post:"Заведующий консультативно-диагностическим отделением, врач-акушер-гинеколог, репродуктолог",workExperience:"с 2004 года",foto:GS,path:"#"}],promotions:[{id:1,endDate:"акция действует до 15.03",title:"Комплексное обследование",subTitle:"«Женское здоровье»",sale:"СКИДКА 10%",note:"",path:"clinic",frontImg:qS,backImg:gu},{id:2,endDate:"акция действует до 15.03",title:"По воскресеньям на Сурова",subTitle:"на все анализы",sale:"СКИДКА 10%",note:"",path:"clinic",frontImg:YS,backImg:XS},{id:3,endDate:"акция действует до 15.03",title:"БЕСПЛАТНЫЕ",subTitle:"консультации по вопросам бесплодия – на Сурова",sale:"",note:"(по вторникам, по предварительной записи)",path:"clinic",frontImg:KS,backImg:gu}],lastNews:[{id:1,img:QS,title:"ВАЖНО! Информация для пациентов!",data:"20.02.2023",prev:"Уважаемые, пациенты. Доводим до вашего сведения, что с 1 марта изменился режим работы клиники по адресу пр-т врача Сурова,4. Теперь мы работаем для вас ежедневно без выходных.",path:"news_1"},{id:2,img:JS,title:"Планируете криоперенос? Тогда это предложение для вас!",data:"16.11.2023",prev:"Уважаемые пациенты! В связи с повышением цен с 1 января 2024 года, на ряд услуг ВРТ, ограниченным количеством данных услуг в рамках ОМС ...",path:"news_2"},{id:3,img:ZS,title:"С 2024 года артроскопию коленного сустава наши пациенты смогут пройти бесплатно, по полису ОМС",data:"22.01.2024",prev:"Друзья, мы рады сообщить отличную новость! С 2024 года артроскопию коленного сустава наши пациенты ...",path:"news_3"},{id:4,img:e3,title:'Тематическая неделя по сохранению репродуктивного здоровья в рамках НП "Демография"',data:"06.02.2024",prev:"В рамках национального проекта «Демография» в Ульяновской области с 09 февраля проходит тематическая неделя по сохранению репродуктивного здоровья населения.",path:"news_4"}],lastReview:{date:"11.09.2024 13:40",patient:"7 960 37XXXXX",history:'Я обратилась в "Альянс клиник" с проблемой бесплодия. Даже и не знала, что творится в моём организме. Думала, что у меня всё в порядке со здоровьем. Пройдя многочисленные обследования, я поняла, что есть проблемы (и не одна). Здесь мне назначали лечение лекарствами, делали уколы, ставили систему и сделали уже четыре операции.',liked:"Вежливое обслуживание. Девушки в приёмной очень доброжелательные. Когда надо - всё подскажут и помогут при необходимости. Мне нравится ходить на сдачу анализов к лаборанту Наталье. Она очень приветливая. Безболезненно берёт кровь и делает уколы. С ней приятно общаться. Может дать полезный совет. На операции я хожу почти без страха. Знаю, что работают отличные специалисты. После операции появляется желание пойти и заняться своими делами, забывая о том, что надо отдохнуть. Болезненных ощущений особо не чувствуешь.",notLiked:"Всё понравилось.",сlinicAdministrator:"Добрый день, уважаемый пациент. Признательны за ваш выбор и оказанное доверие. Рады, что вы внимательно относитесь к своему здоровью. Желаем, чтобы дальше всё складывалось замечательно!"},usefulInfo:[{id:1,img:t3,title:"Нарушение овуляции",path:"article_1"},{id:2,img:l3,title:"Уникальная, специализированная среда EmbryoGlue для переноса эмбриона",path:"article_2"},{id:3,img:r3,title:"TORCH - комплекс",path:"article_3"},{id:4,img:n3,title:"Внимание, коронавирус!",path:"article_4"}],partners:[{id:1,width:"234px",height:"57px",img:i3},{id:2,width:"231px",height:"53px",img:o3},{id:3,width:"200px",height:"50px",img:s3},{id:4,width:"185px",height:"53px",img:a3},{id:5,width:"251px",height:"54px",img:d3},{id:6,width:"231px",height:"80px",img:c3},{id:7,width:"212px",height:"75px",img:u3},{id:8,width:"160px",height:"81px",img:f3}]},p3=(e=h3,t)=>{switch(t.type){case l1:return{...e,lastReview:{...e.lastReview,date:t.newDate,patient:t.newPatient,history:t.newHistory,liked:t.newLiked,notLiked:t.newNotLiked,сlinicAdministrator:t.newAnswer}};default:return e}},m3=(...e)=>{const[t,l,r,n,i,o]=e;return{type:l1,newDate:t,newPatient:l,newHistory:r,newLiked:n,notLiked:i,newAnswer:o}},r1=e=>($.useEffect(()=>{const t=document.createElement("script");return t.src="https://prodoctorov.ru/static/js/widget_big.js?v7",t.defer=!0,document.body.appendChild(t),()=>{document.body.removeChild(t)}},[]),setTimeout(()=>{const l=document.querySelector(".pd-widget-reviews__header > div").innerHTML,n=document.querySelector(".pd-widget-reviews__date").innerHTML,o=document.querySelector(".pd-widget-reviews__review").querySelectorAll(".pd-widget-reviews__comment-text"),a=o[0].innerHTML,s=o[1].innerHTML,c=o[2]?o[2].innerHTML:"",f=document.querySelector(".pd-widget-reviews__reply-text").innerHTML,m=m3(l,n,a,s,c,f);e.dispatch(m)},1e3),d.jsxs(g3,{hidden:e.hidden,children:[!e.hidden&&d.jsx(fS,{pageTopPart:e.reviewsPage.pageTopPart,windowWidth:e.windowWidth}),d.jsx(ae,{children:d.jsx(C3,{children:d.jsx("div",{id:"pd_widget_big","data-lpu":"40755",dangerouslySetInnerHTML:{__html:`
            <div class="pd_rate_header">Отзывы о «Альянс клиник» на Сурова<br>
            <a target="_blank" class="pd_rate_new" href="https://prodoctorov.ru/new/rate/lpu/40755/">Оставить отзыв</a></div>

            <div id="pd_widget_big_content"></div>
            <a target="_blank" href="https://prodoctorov.ru/ulyanovsk/lpu/40755-alyans-klinik-na-surova/#otzivi" class="pd_read_all">Читать все отзывы</a>

            <span id="pd_powered_by"><a target="_blank" href="https://prodoctorov.ru"><img class='pd_logo' src="https://prodoctorov.ru/static/_v1/pd/logos/logo-pd-widget.png"></a></span>
        `}})})})]})),g3=S.div`
  width: 100%;
  display: ${e=>e.hidden?"none":"block"};    
`,C3=S.div`
  display: flex;
  justify-content: center;   
`,v3=e=>d.jsxs(d.Fragment,{children:[d.jsx(vw,{data:e.homePage.mainSlider,themeName:e.themeName,fontSize:e.fontSize}),d.jsx(y3,{children:d.jsxs(ae,{children:[d.jsx($w,{advantages:e.homePage.advantages,fontSize:e.fontSize}),d.jsx(Cb,{promotions:e.homePage.promotions,fontSize:e.fontSize})]})}),d.jsx(ae,{children:d.jsx(Ow,{services:e.homePage.services})}),d.jsx(x3,{children:d.jsx(ae,{children:d.jsx(sb,{doctors:e.homePage.doctors,fontSize:e.fontSize})})}),d.jsx(w3,{children:d.jsx(ae,{children:d.jsx(Ob,{lastNews:e.homePage.lastNews,fontSize:e.fontSize})})}),d.jsx(ae,{children:d.jsx(nS,{lastReview:e.homePage.lastReview,windowWidth:e.windowWidth})}),d.jsx(b3,{children:d.jsx(ae,{children:d.jsx(eS,{usefulInfo:e.homePage.usefulInfo,fontSize:e.fontSize})})}),d.jsx(ae,{children:d.jsx(lS,{partners:e.homePage.partners})}),d.jsx(r1,{reviewsPage:null,windowWidth:null,dispatch:e.dispatch,hidden:!0})]}),y3=S.div`
  padding-top: 30px;
  margin-top: -5px;
  background-image: url(${Dw}), url(${Fw});
  background-color: rgba(213, 243, 238, 0.15);
  background-position: left top, right top;
  background-repeat: no-repeat;
  background-size: 50%;

  @media ${({theme:e})=>e.media.tablet} {
    background-image: url(${Vw});
    background-position: left top;
    background-size: cover;    
  }

  @media ${({theme:e})=>e.media.mobile} {
    background-image: url(${Ww});    
  } 
`,x3=S.div`
  background-image: url(${ab});
  background-color: ${({theme:e})=>e.bgCol.homePage.doctors};

  @media ${({theme:e})=>e.media.tablet} {
    background-image: none;
        
  }
`,w3=S.div`
  background-color: ${({theme:e})=>e.bgCol.homePage.news};
`,b3=S.div`
  background-color: ${({theme:e})=>e.bgCol.homePage.info};
`,S3=()=>d.jsx("div",{children:"Разводящая страница Полезная информация"}),k3=e=>d.jsx(T3,{children:e.addresses.map((t,l)=>d.jsx(E3,{children:t},l))}),T3=S.ul` 
    

    li:last-of-type {
        margin-bottom: 0;
    }

    @media ${({theme:e})=>e.media.laptop} {        
        min-width: 192px;
        width: 100%;
    }

    @media ${({theme:e})=>e.media.tablet} {
        margin-bottom: 20px;        
    }
       
`,E3=S.li`
    text-align: right; 
    margin-bottom: 6px; 
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem); 
    
    @media ${({theme:e})=>e.media.tablet} {
        text-align: center;
        margin-bottom: 10px;
    }
`,A3=e=>d.jsxs(P3,{fontSize:e.fontSize,children:[d.jsx(Cu,{children:e.duplicateLinks.slice(0,6).map(t=>d.jsx(vu,{children:d.jsx(Pe,{to:`${t.path}`,children:t.ancor})},t.id))}),d.jsx(Cu,{children:e.duplicateLinks.slice(6).map(t=>d.jsx(vu,{children:d.jsx(Pe,{to:`${t.path}`,children:t.ancor})},t.id))})]}),P3=S.div`
    grid-area: links;
    display: flex;
    column-gap: 38px;
    
    justify-content: ${e=>e.fontSize>14?"flex-start":"center"};
    

    @media ${({theme:e})=>e.media.laptop}{
        justify-self: center;   
    }

    @media ${({theme:e})=>e.media.tablet}{
        margin-bottom: 40px;   
    }

    @media ${({theme:e})=>e.media.mobile}{
        min-width: 320px; 
        flex-wrap: ${e=>e.fontSize>16?"wrap":"nowrap"};
    }
`,Cu=S.ul`

`,vu=S.li`
    display: block;
    width: max-content;
    margin-bottom: 12px; 
    white-space: wrap;
    word-break: break-all;
    
    &:last-of-type {
        margin-bottom: 0;    
    }

    a {        
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 0.86) + 0.86rem); 
        font-weight: 700;
        text-decoration: none;
        color: ${({theme:e})=>e.color.defaultText};
        padding: 3px 0;
        white-space: wrap;
        word-break: break-all;        
    }

    
    a::after {
        content: "";
        display: block;        
        height: 1.25px;
        background-color: ${({theme:e})=>e.color.defaultText};
        transform: scale(0);
        transition: transform 0.4s;
    }

    & a:hover::after {
        transform: scale(1);  
    }

`,$3=e=>d.jsx(I3,{index:e.index,children:e.links.map(t=>d.jsx(j3,{level:t.level,children:d.jsx(Pe,{to:`/${t.path}`,children:t.title})},t.id))}),I3=S.ul`
    display: flex;
    flex-direction: column;  
    width: ${e=>e.index%3===2?"272px":"100%"};

    @media ${({theme:e})=>e.media.laptop}{
        width: 100%;
    }
`,j3=S.li`    
    margin-bottom: 10px;

    a { 
        color: ${e=>e.level===0?({theme:t})=>t.color.primary:({theme:t})=>t.color.defaultText};
        
        font-size: ${e=>e.level===0?"calc((100vw - 26rem)/(137 - 26) * (1.43 - 1) + 1rem)":"calc((100vw - 26rem)/(137 - 26) * (1 - 0.93) + 0.93rem)"};
        
        font-weight: ${e=>e.level===0?"700":"400"};

        padding: 3px 0;
    }

    a:hover {
        text-decoration: ${e=>e.level===0?"none":"underline"};

        color: ${e=>e.level===0?({theme:t})=>t.color.secondary:({theme:t})=>t.color.defaultText};
    }
 
`,_3=e=>d.jsx(z3,{children:e.servicesLinks.map((t,l)=>d.jsx($3,{links:t,index:l},l))}),z3=S.div`
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(272px, auto));    
       
    column-gap: 60px;
    row-gap: 30px;
    justify-content: space-between;

    @media ${({theme:e})=>e.media.laptop}{
        grid-template-columns: repeat(2, auto);
        column-gap: 20px;
    }
`,L3=e=>d.jsx(M3,{children:e.servicesLinks.map(t=>t.filter(l=>l.level===0)).map(t=>d.jsx(R3,{children:d.jsx(Pe,{to:`/${t[0].path}`,children:t[0].title})},t[0].id))}),M3=S.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;    
`,R3=S.li`
    a { 
        color: ${({theme:e})=>e.color.primary};        
        font-size: 1rem;        
        font-weight: 700;
        padding: 3px 0;
    }
`,N3=e=>{const t=Gn(),l=576,[r,n]=$.useState(!1),i=()=>n(o=>!o);return d.jsxs(O3,{children:[d.jsx(B3,{children:d.jsxs(ae,{children:[d.jsxs(H3,{fontSize:e.fontSize,children:[d.jsx(hd,{}),d.jsx(A3,{duplicateLinks:e.duplicateLinks,fontSize:e.fontSize}),d.jsx(md,{themeName:e.themeName,contacts:{...e.contacts,callback:!0},windowWidth:t,handleToggleModalWindow:e.handleToggleModalWindow}),d.jsx(Jo,{themeName:e.themeName,socials:e.socials,width:"40",height:"40"}),d.jsx(U3,{fontSize:e.fontSize,children:"Лицензия ЛО-73-01-002159 от 03.12.2019 г. выдана Министерством здравоохранения Ульяновской области."}),d.jsx(k3,{addresses:e.addresses}),d.jsx(G3,{href:e.banner.path,fontSize:e.fontSize,children:d.jsx("img",{src:e.banner.src})})]}),d.jsxs(q3,{isShow:r,children:[!r&&d.jsx(Y3,{}),d.jsx(K3,{children:"Услуги:"}),t>l?d.jsx(_3,{servicesLinks:e.servicesLinks}):d.jsx(L3,{servicesLinks:e.servicesLinks})]})]})}),d.jsxs(D3,{children:[d.jsx(W3,{onClick:i,children:d.jsx(V3,{isShow:r})}),d.jsx(ae,{children:d.jsxs(X3,{children:[d.jsx("span",{children:"© 2011-2025. Многопрофильный медицинский центр «Альянс Клиник»."}),d.jsx(Pe,{to:"/privacy-policy",children:"Политика конфиденциальности"}),d.jsx("span",{children:"При использование материлаов сайта, ссылка на сайт обязательна."})]})}),d.jsx(F3,{})]})]})},O3=S.section`    
    background-color: ${({theme:e})=>e.bgCol.footer};
    margin-bottom: 0;
`,B3=S.div`
    padding: 20px 0 40px;
    border-top: 1px solid  ${({theme:e})=>e.color.primary};
    border-bottom: 1px solid  ${({theme:e})=>e.color.primary};
`,D3=S.div`    
    position: relative;    
`,F3=S.div`
    position: absolute;
    z-index: -10;
    //background-color: #f53245;
    background-color: ${({theme:e})=>e.bgCol.footer};    
    left: 0;
    right: 0;
    bottom: -58px;
    width: 100%;
    height: 58px;
`,W3=S.button`
    position: absolute;
    z-index: 10;
    width: 60px;
    height: 60px;
    border: 1px solid  ${({theme:e})=>e.color.primary};
    background-color: ${({theme:e})=>e.bgCol.btn.footerSpoiler};

    border-radius: 50%;
    left: 50%;
    top: -30px;
    transform: translateX(-50%); 
`,V3=S.div`
    width: 24px;
    height: 4px;
    margin: 0 auto;
    background-color: ${({theme:e})=>e.color.primary};

    &::before {
        content: "";
        display: block;
        width: 24px;
        height: 4px;
        background-color: ${({theme:e})=>e.color.primary};
        transform: ${e=>e.isShow?"rotate(0)":"rotate(-90deg)"};
        transition: transform 0.6s ease-in-out; 
    }

    @media ${({theme:e})=>e.media.tablet} {
        &::before {
            transition: transform 0.8s ease-in-out;    
        }

    }
`,H3=S.div`
    display: grid;
    grid-template-columns: 270px auto 1fr auto;
        
    grid-template-areas:
        "logo links contact addresses"
        "license links contact social"
        "banner banner banner banner"; 
    
    column-gap: 20px;     
    align-content: flex-start;
        
    div:nth-of-type(3) {
        justify-self: center;        
    }

    div:nth-of-type(4) {
        justify-self: end; 
        align-self: start; 
        padding-top: 0;
        margin-top: -20px;      
    }  


    @media ${({theme:e})=>e.media.laptop} {
        ${e=>e.fontSize<=16&&U`

            grid-template-columns: auto 1fr auto;        
            grid-template-areas:
                "logo links contact"
                "license links addresses"
                ". . social"
                ". banner .";
                    
            div:nth-of-type(3) {
                justify-self: end; 
                margin-bottom: 12px;       
            }

            div:nth-of-type(4){
                margin-top: 0;  
            }
        `}

        ${e=>e.fontSize>16&&U`
            grid-template-columns: 320px;
                grid-template-areas:
                    "logo"
                    "license"
                    "links"
                    "contact"
                    "addresses"
                    "social"
                    "banner";
                justify-content: center;
                justify-items: center;  
                
                div:nth-of-type(3),  div:nth-of-type(4), ul{
                    justify-self: center;                               
                }

                div:nth-of-type(3) {
                    margin-bottom: 20px;
                }
        `}
    }

    @media ${({theme:e})=>e.media.tablet} {
        ${e=>e.fontSize<=16&&U`
            grid-template-columns: 320px;
            grid-template-areas:
                "logo"
                "license"
                "links"
                "contact"
                "addresses"
                "social"
                "banner";
            justify-content: center;
            justify-items: center;  
            
            div:nth-of-type(3),  div:nth-of-type(4), ul{
                justify-self: center;                               
            }

            div:nth-of-type(3) {
                margin-bottom: 20px;
            }
        `}        
    }

    ${e=>e.fontSize>16&&U`

        grid-template-columns: auto auto;
        grid-template-areas:
            "logo addresses"
            "links contact"
            "links social"
            "license banner";
        justify-content: space-between;
        align-items: center; 
        
        div:nth-of-type(3) {
            justify-self: end;
            margin-bottom: 20px;        
        }
    `}
`,U3=S.span`
    grid-area: license;
    margin-top: 18px;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem);
    max-width: 270px;
    width: 100%;
    height: auto;

    @media ${({theme:e})=>e.media.tablet} {
        min-width: 255px;
        margin-bottom: 20px;
    }

    ${e=>e.fontSize>16&&U`
        max-width: 100%;
        align-self: center;
    `}
`,G3=S.a`
    grid-area: banner;
    justify-self: end;
    align-self: start;
    margin-top: -50px;
    
    img {       
        max-width: 100%;
        height: auto;        
    }

    &:hover {
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);        
    }

    @media ${({theme:e})=>e.media.laptop}{
        justify-self: center;  
        margin-top: -10px; 
    }

    @media ${({theme:e})=>e.media.tablet} {
        margin-top: 40px;     
    }

    ${e=>e.fontSize>16&&U`
        margin-top: 0;
    `}
`,q3=S.div`
    width: 100%;
    overflow: hidden;

    max-height: ${e=>e.isShow?"2000px":"500px"};
    transition: max-height 0.45s ease-out;
    position: relative;

    @media ${({theme:e})=>e.media.tablet} {
        transition: max-height 0.6s ease-in;
    }

    @media ${({theme:e})=>e.media.mobile} {
        max-height: ${e=>e.isShow?"800px":"250px"};
        transition: max-height 0.4s linear;
    }
`,Y3=S.div`
    position: absolute;
    top: 55%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: ${({theme:e})=>e.bgCol.gradientFooter}     
`,K3=S.h3`
    margin: 15px 0 20px;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.86 - 1.43) + 1.43rem);

    @media ${({theme:e})=>e.media.mobile} {
        margin: 40px 0 20px;
        text-align: center;     
    }
`,X3=S.div`
    padding-top: 40px;
    height: 50px;  
    display: grid;
    grid-template-columns: 50% 50%;    
    gap: 15px;

    span {
        font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem);        
    }
    
    span:first-of-type {
        grid-column: 1/2;
        grid-row: 1/2;        
    }   

    span:last-of-type {
        grid-column: 1/2;
        grid-row: 2/3;        
    }

    a {
        grid-column: 2/3;
        grid-row: 2/3;
        justify-self: end;
        font-weight: 700;
        text-decoration: underline; 
        padding: 3px 0;       
    }

    a:hover {
        text-decoration: none; 
    }

    @media ${({theme:e})=>e.media.laptop} {
        height: 62px;
    }

    @media ${({theme:e})=>e.media.mobile}{
        grid-template-columns: 100%;

        a {
            grid-column: 1/2;
            grid-row: 3/4;
            justify-self: start;
        }        
    }
`,Q3=e=>{const[t,l]=$.useState(null);return d.jsxs(J3,{isOpenSidebar:e.isOpenSidebar,children:[d.jsx(Gl,{handleToggleSidebar:e.handleToggleSidebar,top:"0",left:"274px"}),d.jsx(Z3,{children:d.jsx(Cd,{sidebar:e.sidebar,ids:e.sidebar.sidebarMenu.entities.topLevelIds.descktop,isActiveId:t,setIsActiveId:l,descktop:!0})})]})},J3=S.div`
    
    width: 386px;
    padding: 40px;
    height: 100%;
    overflow: auto;
    background-color: ${({theme:e})=>e.bgCol.default};
    z-index: 100;
    
    position: fixed;
    top: 0;    
    left: 0;
    transform: ${e=>e.isOpenSidebar?"translateX(0)":"translateX(-100%)"};
    transition: transform 0.8s;

    /* scrollbar-width: thin;
    scrollbar-color: rgba(193, 193, 193, 1) rgba(227, 227, 227, 1); */

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background-color: rgba(227, 227, 227, 1);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(193, 193, 193, 1);
        border-radius: 10px;
        border: 2px solid rgba(227, 227, 227, 1);
    }   
    
`,Z3=S.nav`    
    margin-top: 50px;    
`,e5=S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;    
    //background-color: rgba(140, 174, 200, 0.8);
    background-color: rgba(217, 217, 217, 0.5);
    backdrop-filter: blur(5px);
    animation-name: ${Hn};
    animation-duration: 0.8s;
    animation-delay: 0s;
    animation-fill-mode: both;
`,es="/assets/images/single-img/desctop/bg_form_3ndfl.svg",Sd=e=>{const{error:t,label:l,name:r}=e;return d.jsx(t5,{error:t,children:d.jsxs("label",{children:[t&&d.jsx(l5,{children:t}),d.jsx("input",{type:"checkbox",name:r}),typeof l=="string"?d.jsx("span",{children:l}):l]})})},t5=S.div`
    align-self: flex-start;   
    label { 
        text-align: left;        
        color: ${({theme:e})=>e.color.multiСhannel};
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.29 - 1) + 1rem);      
    }

    input {        
        opacity: 0;
        position: absolute;        
    }

    input + span {
        display: inline-block;
        position: relative;
        padding-left: 30px;                      
    }

    input + span::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border: 1px solid ${e=>e.error?"red":({theme:t})=>t.color.multiСhannel};                              
    }

    input:focus-visible + span::before {
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25); 
    }

    input:checked + span::after {
        content: "\\002714";
        position: absolute;
        left: 2px;
        top: 1px;
        color: ${({theme:e})=>e.color.defaultText};
        line-height: 1em;
        font-weight: 600;
        width: 1em;
        height: 1em;        
        text-align: center;
    }    

    a {
        color: ${({theme:e})=>e.color.multiСhannel};       
        display: inline-block;
        border-bottom: 1px solid ${({theme:e})=>e.color.multiСhannel};
    }

    input:checked + span, input:checked + span a {
        color: ${({theme:e})=>e.color.defaultText};         
    } 
`,l5=S.span` 
    display: block;    
    color: red;
`,Mt=e=>{const{error:t,...l}=e;return d.jsxs(r5,{children:[t&&d.jsx(n5,{children:t}),d.jsx(i5,{error:t,...l})]})},r5=S.div`
    width: 100%;
    text-align: left; 
`,n5=S.span`    
    color: red;
`,i5=S.input`
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.14rem;
    background-color: ${({theme:e})=>e.bgCol.default}; 
    outline: 1px solid ${e=>e.error?"red":"transparent"};
    
    &::placeholder {
        color: ${({theme:e})=>e.color.multiСhannel};
    }

    &:focus-visible {
        outline: 1px solid ${({theme:e})=>e.color.multiСhannel};
    }

    &:not([type="checkbox"]) {
        padding: 16px 20px;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    }

    @media ${({theme:e})=>e.media.tablet} {
        &:not([type="checkbox"]) {
            padding: 10px 20px;
        }
    }
`;function n1(e,t){return function(){return e.apply(t,arguments)}}const{toString:o5}=Object.prototype,{getPrototypeOf:kd}=Object,ts=(e=>t=>{const l=o5.call(t);return e[l]||(e[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),Ct=e=>(e=e.toLowerCase(),t=>ts(t)===e),ls=e=>t=>typeof t===e,{isArray:Or}=Array,Nn=ls("undefined");function s5(e){return e!==null&&!Nn(e)&&e.constructor!==null&&!Nn(e.constructor)&&Ye(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const i1=Ct("ArrayBuffer");function a5(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&i1(e.buffer),t}const d5=ls("string"),Ye=ls("function"),o1=ls("number"),rs=e=>e!==null&&typeof e=="object",c5=e=>e===!0||e===!1,Oi=e=>{if(ts(e)!=="object")return!1;const t=kd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},u5=Ct("Date"),f5=Ct("File"),h5=Ct("Blob"),p5=Ct("FileList"),m5=e=>rs(e)&&Ye(e.pipe),g5=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ye(e.append)&&((t=ts(e))==="formdata"||t==="object"&&Ye(e.toString)&&e.toString()==="[object FormData]"))},C5=Ct("URLSearchParams"),[v5,y5,x5,w5]=["ReadableStream","Request","Response","Headers"].map(Ct),b5=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function qn(e,t,{allOwnKeys:l=!1}={}){if(e===null||typeof e>"u")return;let r,n;if(typeof e!="object"&&(e=[e]),Or(e))for(r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else{const i=l?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function s1(e,t){t=t.toLowerCase();const l=Object.keys(e);let r=l.length,n;for(;r-- >0;)if(n=l[r],t===n.toLowerCase())return n;return null}const Il=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,a1=e=>!Nn(e)&&e!==Il;function o0(){const{caseless:e}=a1(this)&&this||{},t={},l=(r,n)=>{const i=e&&s1(t,n)||n;Oi(t[i])&&Oi(r)?t[i]=o0(t[i],r):Oi(r)?t[i]=o0({},r):Or(r)?t[i]=r.slice():t[i]=r};for(let r=0,n=arguments.length;r<n;r++)arguments[r]&&qn(arguments[r],l);return t}const S5=(e,t,l,{allOwnKeys:r}={})=>(qn(t,(n,i)=>{l&&Ye(n)?e[i]=n1(n,l):e[i]=n},{allOwnKeys:r}),e),k5=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),T5=(e,t,l,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),l&&Object.assign(e.prototype,l)},E5=(e,t,l,r)=>{let n,i,o;const a={};if(t=t||{},e==null)return t;do{for(n=Object.getOwnPropertyNames(e),i=n.length;i-- >0;)o=n[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=l!==!1&&kd(e)}while(e&&(!l||l(e,t))&&e!==Object.prototype);return t},A5=(e,t,l)=>{e=String(e),(l===void 0||l>e.length)&&(l=e.length),l-=t.length;const r=e.indexOf(t,l);return r!==-1&&r===l},P5=e=>{if(!e)return null;if(Or(e))return e;let t=e.length;if(!o1(t))return null;const l=new Array(t);for(;t-- >0;)l[t]=e[t];return l},$5=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&kd(Uint8Array)),I5=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const i=n.value;t.call(e,i[0],i[1])}},j5=(e,t)=>{let l;const r=[];for(;(l=e.exec(t))!==null;)r.push(l);return r},_5=Ct("HTMLFormElement"),z5=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(l,r,n){return r.toUpperCase()+n}),yu=(({hasOwnProperty:e})=>(t,l)=>e.call(t,l))(Object.prototype),L5=Ct("RegExp"),d1=(e,t)=>{const l=Object.getOwnPropertyDescriptors(e),r={};qn(l,(n,i)=>{let o;(o=t(n,i,e))!==!1&&(r[i]=o||n)}),Object.defineProperties(e,r)},M5=e=>{d1(e,(t,l)=>{if(Ye(e)&&["arguments","caller","callee"].indexOf(l)!==-1)return!1;const r=e[l];if(Ye(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+l+"'")})}})},R5=(e,t)=>{const l={},r=n=>{n.forEach(i=>{l[i]=!0})};return Or(e)?r(e):r(String(e).split(t)),l},N5=()=>{},O5=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Gs="abcdefghijklmnopqrstuvwxyz",xu="0123456789",c1={DIGIT:xu,ALPHA:Gs,ALPHA_DIGIT:Gs+Gs.toUpperCase()+xu},B5=(e=16,t=c1.ALPHA_DIGIT)=>{let l="";const{length:r}=t;for(;e--;)l+=t[Math.random()*r|0];return l};function D5(e){return!!(e&&Ye(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const F5=e=>{const t=new Array(10),l=(r,n)=>{if(rs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[n]=r;const i=Or(r)?[]:{};return qn(r,(o,a)=>{const s=l(o,n+1);!Nn(s)&&(i[a]=s)}),t[n]=void 0,i}}return r};return l(e,0)},W5=Ct("AsyncFunction"),V5=e=>e&&(rs(e)||Ye(e))&&Ye(e.then)&&Ye(e.catch),u1=((e,t)=>e?setImmediate:t?((l,r)=>(Il.addEventListener("message",({source:n,data:i})=>{n===Il&&i===l&&r.length&&r.shift()()},!1),n=>{r.push(n),Il.postMessage(l,"*")}))(`axios@${Math.random()}`,[]):l=>setTimeout(l))(typeof setImmediate=="function",Ye(Il.postMessage)),H5=typeof queueMicrotask<"u"?queueMicrotask.bind(Il):typeof process<"u"&&process.nextTick||u1,P={isArray:Or,isArrayBuffer:i1,isBuffer:s5,isFormData:g5,isArrayBufferView:a5,isString:d5,isNumber:o1,isBoolean:c5,isObject:rs,isPlainObject:Oi,isReadableStream:v5,isRequest:y5,isResponse:x5,isHeaders:w5,isUndefined:Nn,isDate:u5,isFile:f5,isBlob:h5,isRegExp:L5,isFunction:Ye,isStream:m5,isURLSearchParams:C5,isTypedArray:$5,isFileList:p5,forEach:qn,merge:o0,extend:S5,trim:b5,stripBOM:k5,inherits:T5,toFlatObject:E5,kindOf:ts,kindOfTest:Ct,endsWith:A5,toArray:P5,forEachEntry:I5,matchAll:j5,isHTMLForm:_5,hasOwnProperty:yu,hasOwnProp:yu,reduceDescriptors:d1,freezeMethods:M5,toObjectSet:R5,toCamelCase:z5,noop:N5,toFiniteNumber:O5,findKey:s1,global:Il,isContextDefined:a1,ALPHABET:c1,generateString:B5,isSpecCompliantForm:D5,toJSONObject:F5,isAsyncFn:W5,isThenable:V5,setImmediate:u1,asap:H5};function F(e,t,l,r,n){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),l&&(this.config=l),r&&(this.request=r),n&&(this.response=n,this.status=n.status?n.status:null)}P.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}});const f1=F.prototype,h1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{h1[e]={value:e}});Object.defineProperties(F,h1);Object.defineProperty(f1,"isAxiosError",{value:!0});F.from=(e,t,l,r,n,i)=>{const o=Object.create(f1);return P.toFlatObject(e,o,function(s){return s!==Error.prototype},a=>a!=="isAxiosError"),F.call(o,e.message,t,l,r,n),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const U5=null;function s0(e){return P.isPlainObject(e)||P.isArray(e)}function p1(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function wu(e,t,l){return e?e.concat(t).map(function(n,i){return n=p1(n),!l&&i?"["+n+"]":n}).join(l?".":""):t}function G5(e){return P.isArray(e)&&!e.some(s0)}const q5=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function ns(e,t,l){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,l=P.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,w){return!P.isUndefined(w[x])});const r=l.metaTokens,n=l.visitor||u,i=l.dots,o=l.indexes,s=(l.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(n))throw new TypeError("visitor must be a function");function c(C){if(C===null)return"";if(P.isDate(C))return C.toISOString();if(!s&&P.isBlob(C))throw new F("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(C)||P.isTypedArray(C)?s&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function u(C,x,w){let g=C;if(C&&!w&&typeof C=="object"){if(P.endsWith(x,"{}"))x=r?x:x.slice(0,-2),C=JSON.stringify(C);else if(P.isArray(C)&&G5(C)||(P.isFileList(C)||P.endsWith(x,"[]"))&&(g=P.toArray(C)))return x=p1(x),g.forEach(function(p,y){!(P.isUndefined(p)||p===null)&&t.append(o===!0?wu([x],y,i):o===null?x:x+"[]",c(p))}),!1}return s0(C)?!0:(t.append(wu(w,x,i),c(C)),!1)}const f=[],m=Object.assign(q5,{defaultVisitor:u,convertValue:c,isVisitable:s0});function v(C,x){if(!P.isUndefined(C)){if(f.indexOf(C)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(C),P.forEach(C,function(g,h){(!(P.isUndefined(g)||g===null)&&n.call(t,g,P.isString(h)?h.trim():h,x,m))===!0&&v(g,x?x.concat(h):[h])}),f.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return v(e),t}function bu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Td(e,t){this._pairs=[],e&&ns(e,this,t)}const m1=Td.prototype;m1.append=function(t,l){this._pairs.push([t,l])};m1.toString=function(t){const l=t?function(r){return t.call(this,r,bu)}:bu;return this._pairs.map(function(n){return l(n[0])+"="+l(n[1])},"").join("&")};function Y5(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function g1(e,t,l){if(!t)return e;const r=l&&l.encode||Y5,n=l&&l.serialize;let i;if(n?i=n(t,l):i=P.isURLSearchParams(t)?t.toString():new Td(t,l).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Su{constructor(){this.handlers=[]}use(t,l,r){return this.handlers.push({fulfilled:t,rejected:l,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const C1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},K5=typeof URLSearchParams<"u"?URLSearchParams:Td,X5=typeof FormData<"u"?FormData:null,Q5=typeof Blob<"u"?Blob:null,J5={isBrowser:!0,classes:{URLSearchParams:K5,FormData:X5,Blob:Q5},protocols:["http","https","file","blob","url","data"]},Ed=typeof window<"u"&&typeof document<"u",a0=typeof navigator=="object"&&navigator||void 0,Z5=Ed&&(!a0||["ReactNative","NativeScript","NS"].indexOf(a0.product)<0),e4=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",t4=Ed&&window.location.href||"http://localhost",l4=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ed,hasStandardBrowserEnv:Z5,hasStandardBrowserWebWorkerEnv:e4,navigator:a0,origin:t4},Symbol.toStringTag,{value:"Module"})),Be={...l4,...J5};function r4(e,t){return ns(e,new Be.classes.URLSearchParams,Object.assign({visitor:function(l,r,n,i){return Be.isNode&&P.isBuffer(l)?(this.append(r,l.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function n4(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function i4(e){const t={},l=Object.keys(e);let r;const n=l.length;let i;for(r=0;r<n;r++)i=l[r],t[i]=e[i];return t}function v1(e){function t(l,r,n,i){let o=l[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),s=i>=l.length;return o=!o&&P.isArray(n)?n.length:o,s?(P.hasOwnProp(n,o)?n[o]=[n[o],r]:n[o]=r,!a):((!n[o]||!P.isObject(n[o]))&&(n[o]=[]),t(l,r,n[o],i)&&P.isArray(n[o])&&(n[o]=i4(n[o])),!a)}if(P.isFormData(e)&&P.isFunction(e.entries)){const l={};return P.forEachEntry(e,(r,n)=>{t(n4(r),n,l,0)}),l}return null}function o4(e,t,l){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const Yn={transitional:C1,adapter:["xhr","http","fetch"],transformRequest:[function(t,l){const r=l.getContentType()||"",n=r.indexOf("application/json")>-1,i=P.isObject(t);if(i&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return n?JSON.stringify(v1(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t)||P.isReadableStream(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return r4(t,this.formSerializer).toString();if((a=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return ns(a?{"files[]":t}:t,s&&new s,this.formSerializer)}}return i||n?(l.setContentType("application/json",!1),o4(t)):t}],transformResponse:[function(t){const l=this.transitional||Yn.transitional,r=l&&l.forcedJSONParsing,n=this.responseType==="json";if(P.isResponse(t)||P.isReadableStream(t))return t;if(t&&P.isString(t)&&(r&&!this.responseType||n)){const o=!(l&&l.silentJSONParsing)&&n;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?F.from(a,F.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Be.classes.FormData,Blob:Be.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{Yn.headers[e]={}});const s4=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),a4=e=>{const t={};let l,r,n;return e&&e.split(`
`).forEach(function(o){n=o.indexOf(":"),l=o.substring(0,n).trim().toLowerCase(),r=o.substring(n+1).trim(),!(!l||t[l]&&s4[l])&&(l==="set-cookie"?t[l]?t[l].push(r):t[l]=[r]:t[l]=t[l]?t[l]+", "+r:r)}),t},ku=Symbol("internals");function Qr(e){return e&&String(e).trim().toLowerCase()}function Bi(e){return e===!1||e==null?e:P.isArray(e)?e.map(Bi):String(e)}function d4(e){const t=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=l.exec(e);)t[r[1]]=r[2];return t}const c4=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function qs(e,t,l,r,n){if(P.isFunction(r))return r.call(this,t,l);if(n&&(t=l),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function u4(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,l,r)=>l.toUpperCase()+r)}function f4(e,t){const l=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+l,{value:function(n,i,o){return this[r].call(this,t,n,i,o)},configurable:!0})})}class De{constructor(t){t&&this.set(t)}set(t,l,r){const n=this;function i(a,s,c){const u=Qr(s);if(!u)throw new Error("header name must be a non-empty string");const f=P.findKey(n,u);(!f||n[f]===void 0||c===!0||c===void 0&&n[f]!==!1)&&(n[f||s]=Bi(a))}const o=(a,s)=>P.forEach(a,(c,u)=>i(c,u,s));if(P.isPlainObject(t)||t instanceof this.constructor)o(t,l);else if(P.isString(t)&&(t=t.trim())&&!c4(t))o(a4(t),l);else if(P.isHeaders(t))for(const[a,s]of t.entries())i(s,a,r);else t!=null&&i(l,t,r);return this}get(t,l){if(t=Qr(t),t){const r=P.findKey(this,t);if(r){const n=this[r];if(!l)return n;if(l===!0)return d4(n);if(P.isFunction(l))return l.call(this,n,r);if(P.isRegExp(l))return l.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,l){if(t=Qr(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!l||qs(this,this[r],r,l)))}return!1}delete(t,l){const r=this;let n=!1;function i(o){if(o=Qr(o),o){const a=P.findKey(r,o);a&&(!l||qs(r,r[a],a,l))&&(delete r[a],n=!0)}}return P.isArray(t)?t.forEach(i):i(t),n}clear(t){const l=Object.keys(this);let r=l.length,n=!1;for(;r--;){const i=l[r];(!t||qs(this,this[i],i,t,!0))&&(delete this[i],n=!0)}return n}normalize(t){const l=this,r={};return P.forEach(this,(n,i)=>{const o=P.findKey(r,i);if(o){l[o]=Bi(n),delete l[i];return}const a=t?u4(i):String(i).trim();a!==i&&delete l[i],l[a]=Bi(n),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const l=Object.create(null);return P.forEach(this,(r,n)=>{r!=null&&r!==!1&&(l[n]=t&&P.isArray(r)?r.join(", "):r)}),l}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,l])=>t+": "+l).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...l){const r=new this(t);return l.forEach(n=>r.set(n)),r}static accessor(t){const r=(this[ku]=this[ku]={accessors:{}}).accessors,n=this.prototype;function i(o){const a=Qr(o);r[a]||(f4(n,o),r[a]=!0)}return P.isArray(t)?t.forEach(i):i(t),this}}De.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(De.prototype,({value:e},t)=>{let l=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[l]=r}}});P.freezeMethods(De);function Ys(e,t){const l=this||Yn,r=t||l,n=De.from(r.headers);let i=r.data;return P.forEach(e,function(a){i=a.call(l,i,n.normalize(),t?t.status:void 0)}),n.normalize(),i}function y1(e){return!!(e&&e.__CANCEL__)}function Br(e,t,l){F.call(this,e??"canceled",F.ERR_CANCELED,t,l),this.name="CanceledError"}P.inherits(Br,F,{__CANCEL__:!0});function x1(e,t,l){const r=l.config.validateStatus;!l.status||!r||r(l.status)?e(l):t(new F("Request failed with status code "+l.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}function h4(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function p4(e,t){e=e||10;const l=new Array(e),r=new Array(e);let n=0,i=0,o;return t=t!==void 0?t:1e3,function(s){const c=Date.now(),u=r[i];o||(o=c),l[n]=s,r[n]=c;let f=i,m=0;for(;f!==n;)m+=l[f++],f=f%e;if(n=(n+1)%e,n===i&&(i=(i+1)%e),c-o<t)return;const v=u&&c-u;return v?Math.round(m*1e3/v):void 0}}function m4(e,t){let l=0,r=1e3/t,n,i;const o=(c,u=Date.now())=>{l=u,n=null,i&&(clearTimeout(i),i=null),e.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-l;f>=r?o(c,u):(n=c,i||(i=setTimeout(()=>{i=null,o(n)},r-f)))},()=>n&&o(n)]}const ko=(e,t,l=3)=>{let r=0;const n=p4(50,250);return m4(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-r,c=n(s),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},l)},Tu=(e,t)=>{const l=e!=null;return[r=>t[0]({lengthComputable:l,total:e,loaded:r}),t[1]]},Eu=e=>(...t)=>P.asap(()=>e(...t)),g4=Be.hasStandardBrowserEnv?function(){const t=Be.navigator&&/(msie|trident)/i.test(Be.navigator.userAgent),l=document.createElement("a");let r;function n(i){let o=i;return t&&(l.setAttribute("href",o),o=l.href),l.setAttribute("href",o),{href:l.href,protocol:l.protocol?l.protocol.replace(/:$/,""):"",host:l.host,search:l.search?l.search.replace(/^\?/,""):"",hash:l.hash?l.hash.replace(/^#/,""):"",hostname:l.hostname,port:l.port,pathname:l.pathname.charAt(0)==="/"?l.pathname:"/"+l.pathname}}return r=n(window.location.href),function(o){const a=P.isString(o)?n(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),C4=Be.hasStandardBrowserEnv?{write(e,t,l,r,n,i){const o=[e+"="+encodeURIComponent(t)];P.isNumber(l)&&o.push("expires="+new Date(l).toGMTString()),P.isString(r)&&o.push("path="+r),P.isString(n)&&o.push("domain="+n),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function v4(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function y4(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function w1(e,t){return e&&!v4(t)?y4(e,t):t}const Au=e=>e instanceof De?{...e}:e;function Wl(e,t){t=t||{};const l={};function r(c,u,f){return P.isPlainObject(c)&&P.isPlainObject(u)?P.merge.call({caseless:f},c,u):P.isPlainObject(u)?P.merge({},u):P.isArray(u)?u.slice():u}function n(c,u,f){if(P.isUndefined(u)){if(!P.isUndefined(c))return r(void 0,c,f)}else return r(c,u,f)}function i(c,u){if(!P.isUndefined(u))return r(void 0,u)}function o(c,u){if(P.isUndefined(u)){if(!P.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function a(c,u,f){if(f in t)return r(c,u);if(f in e)return r(void 0,c)}const s={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>n(Au(c),Au(u),!0)};return P.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=s[u]||n,m=f(e[u],t[u],u);P.isUndefined(m)&&f!==a||(l[u]=m)}),l}const b1=e=>{const t=Wl({},e);let{data:l,withXSRFToken:r,xsrfHeaderName:n,xsrfCookieName:i,headers:o,auth:a}=t;t.headers=o=De.from(o),t.url=g1(w1(t.baseURL,t.url),e.params,e.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let s;if(P.isFormData(l)){if(Be.hasStandardBrowserEnv||Be.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((s=o.getContentType())!==!1){const[c,...u]=s?s.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Be.hasStandardBrowserEnv&&(r&&P.isFunction(r)&&(r=r(t)),r||r!==!1&&g4(t.url))){const c=n&&i&&C4.read(i);c&&o.set(n,c)}return t},x4=typeof XMLHttpRequest<"u",w4=x4&&function(e){return new Promise(function(l,r){const n=b1(e);let i=n.data;const o=De.from(n.headers).normalize();let{responseType:a,onUploadProgress:s,onDownloadProgress:c}=n,u,f,m,v,C;function x(){v&&v(),C&&C(),n.cancelToken&&n.cancelToken.unsubscribe(u),n.signal&&n.signal.removeEventListener("abort",u)}let w=new XMLHttpRequest;w.open(n.method.toUpperCase(),n.url,!0),w.timeout=n.timeout;function g(){if(!w)return;const p=De.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),b={data:!a||a==="text"||a==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:p,config:e,request:w};x1(function(E){l(E),x()},function(E){r(E),x()},b),w=null}"onloadend"in w?w.onloadend=g:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(g)},w.onabort=function(){w&&(r(new F("Request aborted",F.ECONNABORTED,e,w)),w=null)},w.onerror=function(){r(new F("Network Error",F.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){let y=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const b=n.transitional||C1;n.timeoutErrorMessage&&(y=n.timeoutErrorMessage),r(new F(y,b.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,w)),w=null},i===void 0&&o.setContentType(null),"setRequestHeader"in w&&P.forEach(o.toJSON(),function(y,b){w.setRequestHeader(b,y)}),P.isUndefined(n.withCredentials)||(w.withCredentials=!!n.withCredentials),a&&a!=="json"&&(w.responseType=n.responseType),c&&([m,C]=ko(c,!0),w.addEventListener("progress",m)),s&&w.upload&&([f,v]=ko(s),w.upload.addEventListener("progress",f),w.upload.addEventListener("loadend",v)),(n.cancelToken||n.signal)&&(u=p=>{w&&(r(!p||p.type?new Br(null,e,w):p),w.abort(),w=null)},n.cancelToken&&n.cancelToken.subscribe(u),n.signal&&(n.signal.aborted?u():n.signal.addEventListener("abort",u)));const h=h4(n.url);if(h&&Be.protocols.indexOf(h)===-1){r(new F("Unsupported protocol "+h+":",F.ERR_BAD_REQUEST,e));return}w.send(i||null)})},b4=(e,t)=>{const{length:l}=e=e?e.filter(Boolean):[];if(t||l){let r=new AbortController,n;const i=function(c){if(!n){n=!0,a();const u=c instanceof Error?c:this.reason;r.abort(u instanceof F?u:new Br(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new F(`timeout ${t} of ms exceeded`,F.ETIMEDOUT))},t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:s}=r;return s.unsubscribe=()=>P.asap(a),s}},S4=function*(e,t){let l=e.byteLength;if(l<t){yield e;return}let r=0,n;for(;r<l;)n=r+t,yield e.slice(r,n),r=n},k4=async function*(e,t){for await(const l of T4(e))yield*S4(l,t)},T4=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:l,value:r}=await t.read();if(l)break;yield r}}finally{await t.cancel()}},Pu=(e,t,l,r)=>{const n=k4(e,t);let i=0,o,a=s=>{o||(o=!0,r&&r(s))};return new ReadableStream({async pull(s){try{const{done:c,value:u}=await n.next();if(c){a(),s.close();return}let f=u.byteLength;if(l){let m=i+=f;l(m)}s.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(s){return a(s),n.return()}},{highWaterMark:2})},is=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",S1=is&&typeof ReadableStream=="function",E4=is&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),k1=(e,...t)=>{try{return!!e(...t)}catch{return!1}},A4=S1&&k1(()=>{let e=!1;const t=new Request(Be.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),$u=64*1024,d0=S1&&k1(()=>P.isReadableStream(new Response("").body)),To={stream:d0&&(e=>e.body)};is&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!To[t]&&(To[t]=P.isFunction(e[t])?l=>l[t]():(l,r)=>{throw new F(`Response type '${t}' is not supported`,F.ERR_NOT_SUPPORT,r)})})})(new Response);const P4=async e=>{if(e==null)return 0;if(P.isBlob(e))return e.size;if(P.isSpecCompliantForm(e))return(await new Request(Be.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(P.isArrayBufferView(e)||P.isArrayBuffer(e))return e.byteLength;if(P.isURLSearchParams(e)&&(e=e+""),P.isString(e))return(await E4(e)).byteLength},$4=async(e,t)=>{const l=P.toFiniteNumber(e.getContentLength());return l??P4(t)},I4=is&&(async e=>{let{url:t,method:l,data:r,signal:n,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:s,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:m}=b1(e);c=c?(c+"").toLowerCase():"text";let v=b4([n,i&&i.toAbortSignal()],o),C;const x=v&&v.unsubscribe&&(()=>{v.unsubscribe()});let w;try{if(s&&A4&&l!=="get"&&l!=="head"&&(w=await $4(u,r))!==0){let b=new Request(t,{method:"POST",body:r,duplex:"half"}),k;if(P.isFormData(r)&&(k=b.headers.get("content-type"))&&u.setContentType(k),b.body){const[E,I]=Tu(w,ko(Eu(s)));r=Pu(b.body,$u,E,I)}}P.isString(f)||(f=f?"include":"omit");const g="credentials"in Request.prototype;C=new Request(t,{...m,signal:v,method:l.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:g?f:void 0});let h=await fetch(C);const p=d0&&(c==="stream"||c==="response");if(d0&&(a||p&&x)){const b={};["status","statusText","headers"].forEach(A=>{b[A]=h[A]});const k=P.toFiniteNumber(h.headers.get("content-length")),[E,I]=a&&Tu(k,ko(Eu(a),!0))||[];h=new Response(Pu(h.body,$u,E,()=>{I&&I(),x&&x()}),b)}c=c||"text";let y=await To[P.findKey(To,c)||"text"](h,e);return!p&&x&&x(),await new Promise((b,k)=>{x1(b,k,{data:y,headers:De.from(h.headers),status:h.status,statusText:h.statusText,config:e,request:C})})}catch(g){throw x&&x(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new F("Network Error",F.ERR_NETWORK,e,C),{cause:g.cause||g}):F.from(g,g&&g.code,e,C)}}),c0={http:U5,xhr:w4,fetch:I4};P.forEach(c0,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Iu=e=>`- ${e}`,j4=e=>P.isFunction(e)||e===null||e===!1,T1={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let l,r;const n={};for(let i=0;i<t;i++){l=e[i];let o;if(r=l,!j4(l)&&(r=c0[(o=String(l)).toLowerCase()],r===void 0))throw new F(`Unknown adapter '${o}'`);if(r)break;n[o||"#"+i]=r}if(!r){const i=Object.entries(n).map(([a,s])=>`adapter ${a} `+(s===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(Iu).join(`
`):" "+Iu(i[0]):"as no adapter specified";throw new F("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:c0};function Ks(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Br(null,e)}function ju(e){return Ks(e),e.headers=De.from(e.headers),e.data=Ys.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),T1.getAdapter(e.adapter||Yn.adapter)(e).then(function(r){return Ks(e),r.data=Ys.call(e,e.transformResponse,r),r.headers=De.from(r.headers),r},function(r){return y1(r)||(Ks(e),r&&r.response&&(r.response.data=Ys.call(e,e.transformResponse,r.response),r.response.headers=De.from(r.response.headers))),Promise.reject(r)})}const E1="1.7.7",Ad={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ad[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _u={};Ad.transitional=function(t,l,r){function n(i,o){return"[Axios v"+E1+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new F(n(o," has been removed"+(l?" in "+l:"")),F.ERR_DEPRECATED);return l&&!_u[o]&&(_u[o]=!0,console.warn(n(o," has been deprecated since v"+l+" and will be removed in the near future"))),t?t(i,o,a):!0}};function _4(e,t,l){if(typeof e!="object")throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let n=r.length;for(;n-- >0;){const i=r[n],o=t[i];if(o){const a=e[i],s=a===void 0||o(a,i,e);if(s!==!0)throw new F("option "+i+" must be "+s,F.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new F("Unknown option "+i,F.ERR_BAD_OPTION)}}const u0={assertOptions:_4,validators:Ad},qt=u0.validators;class Ll{constructor(t){this.defaults=t,this.interceptors={request:new Su,response:new Su}}async request(t,l){try{return await this._request(t,l)}catch(r){if(r instanceof Error){let n;Error.captureStackTrace?Error.captureStackTrace(n={}):n=new Error;const i=n.stack?n.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,l){typeof t=="string"?(l=l||{},l.url=t):l=t||{},l=Wl(this.defaults,l);const{transitional:r,paramsSerializer:n,headers:i}=l;r!==void 0&&u0.assertOptions(r,{silentJSONParsing:qt.transitional(qt.boolean),forcedJSONParsing:qt.transitional(qt.boolean),clarifyTimeoutError:qt.transitional(qt.boolean)},!1),n!=null&&(P.isFunction(n)?l.paramsSerializer={serialize:n}:u0.assertOptions(n,{encode:qt.function,serialize:qt.function},!0)),l.method=(l.method||this.defaults.method||"get").toLowerCase();let o=i&&P.merge(i.common,i[l.method]);i&&P.forEach(["delete","get","head","post","put","patch","common"],C=>{delete i[C]}),l.headers=De.concat(o,i);const a=[];let s=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(l)===!1||(s=s&&x.synchronous,a.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let u,f=0,m;if(!s){const C=[ju.bind(this),void 0];for(C.unshift.apply(C,a),C.push.apply(C,c),m=C.length,u=Promise.resolve(l);f<m;)u=u.then(C[f++],C[f++]);return u}m=a.length;let v=l;for(f=0;f<m;){const C=a[f++],x=a[f++];try{v=C(v)}catch(w){x.call(this,w);break}}try{u=ju.call(this,v)}catch(C){return Promise.reject(C)}for(f=0,m=c.length;f<m;)u=u.then(c[f++],c[f++]);return u}getUri(t){t=Wl(this.defaults,t);const l=w1(t.baseURL,t.url);return g1(l,t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(t){Ll.prototype[t]=function(l,r){return this.request(Wl(r||{},{method:t,url:l,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function l(r){return function(i,o,a){return this.request(Wl(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Ll.prototype[t]=l(),Ll.prototype[t+"Form"]=l(!0)});class Pd{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(i){l=i});const r=this;this.promise.then(n=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](n);r._listeners=null}),this.promise.then=n=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(n);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new Br(i,o,a),l(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const l=this._listeners.indexOf(t);l!==-1&&this._listeners.splice(l,1)}toAbortSignal(){const t=new AbortController,l=r=>{t.abort(r)};return this.subscribe(l),t.signal.unsubscribe=()=>this.unsubscribe(l),t.signal}static source(){let t;return{token:new Pd(function(n){t=n}),cancel:t}}}function z4(e){return function(l){return e.apply(null,l)}}function L4(e){return P.isObject(e)&&e.isAxiosError===!0}const f0={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(f0).forEach(([e,t])=>{f0[t]=e});function A1(e){const t=new Ll(e),l=n1(Ll.prototype.request,t);return P.extend(l,Ll.prototype,t,{allOwnKeys:!0}),P.extend(l,t,null,{allOwnKeys:!0}),l.create=function(n){return A1(Wl(e,n))},l}const he=A1(Yn);he.Axios=Ll;he.CanceledError=Br;he.CancelToken=Pd;he.isCancel=y1;he.VERSION=E1;he.toFormData=ns;he.AxiosError=F;he.Cancel=he.CanceledError;he.all=function(t){return Promise.all(t)};he.spread=z4;he.isAxiosError=L4;he.mergeConfig=Wl;he.AxiosHeaders=De;he.formToJSON=e=>v1(P.isHTMLForm(e)?new FormData(e):e);he.getAdapter=T1.getAdapter;he.HttpStatusCode=f0;he.default=he;const M4=(e,t)=>{const l={};for(const[r,n]of Object.entries(t)){const i=e.get(r);console.log("value",i),(!i||i==="")&&n.required&&(l[r]="Поле обязательно"),i&&(n!=null&&n.validator)&&!n.validator(i)&&(l[r]=(n==null?void 0:n.message)||"Введите корректное значение")}return l},$d=async(e,t,l,r,n,i,o)=>{e.preventDefault();const a=new FormData(e.target);console.log("formData",a);const s=M4(a,r);if(n(s),Object.keys(s).length!==0)return;const c={};for(let[f,m]of a)c[f]=m.toString();console.log("formEntries",c),delete c.agreement;const u=Object.entries(c).map(([f,m])=>`<b>${l[f]||f}: </b> ${m}<br>`).join("");await he.post("http://localhost:5000/send-mail",{subject:t,message:u}).then(()=>{console.log("Успех"),e.target.reset(),i()}).catch(f=>{console.log("Неудача",f),o()})},R4={username:"ФИО",phone:"Телефон",email:"Email"},N4={username:{required:!0,validator:e=>e.length>2,message:"ФИО должно быть не меньше 3 символов"},phone:{required:!0,validator:e=>/^(?:\+7|8)(?:\(\d{3}\)|\d{3})\d{3}-?\d\d-?\d\d$/.test(String(e)),message:"Номер введен неверно"},email:{required:!0,validator:e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e)),message:"Некорректный Email"},agreement:{required:!0}},O4=e=>{const[t,l]=$.useState({}),r="Хочу записаться на прием";return d.jsx(B4,{children:d.jsxs(D4,{children:[d.jsx(Gl,{handleToggleModalWindow:()=>e.handleToggleModalWindow("record")}),d.jsx(J,{children:d.jsx("span",{children:"Записаться на прием"})}),d.jsxs(F4,{onSubmit:n=>$d(n,r,R4,N4,l,e.onSuccess,e.onError),children:[d.jsx(Mt,{error:t.username,type:"text",name:"username",placeholder:"ФИО*",maxLength:50}),d.jsx(Mt,{error:t.phone,type:"tel",name:"phone",placeholder:"Телефон*"}),d.jsx(Mt,{error:t.email,type:"text",name:"email",placeholder:"Email*"}),d.jsx(Sd,{error:t.agreement,name:"agreement",label:d.jsxs("span",{style:{textAlign:"left"},children:["Я согласен на обработку ",d.jsx(Pe,{to:"#",children:"персональных данных"})]})}),d.jsx(Xe,{type:"submit",children:"Отправить"}),d.jsx(W4,{children:"* - поля обязательные для заполнения"})]})]})})},B4=S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;    
    //background-color: rgba(140, 174, 200, 0.8);
    background-color: rgba(217, 217, 217, 0.5);
    backdrop-filter: blur(5px);
    animation-name: ${Hn};
    animation-duration: 0.8s;
    animation-delay: 0s;
    animation-fill-mode: both;
`,D4=S.div`
    width: 782px;    
    padding: 34px 30px 24px;
    border-radius: 10px;
    background-color: ${({theme:e})=>e.bgCol.default};    
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    background-image: url(${es});

    //position: relative;

    @media ${({theme:e})=>e.media.laptop} {
        width: 620px;
    }

    @media ${({theme:e})=>e.media.tablet} {
        width: 514px;
    }
`,F4=S.form`
    max-width: 702px;
    width: 100%;     
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin: 0 auto;
    
    ${Xe} {
        width: 100%;
        padding: 16px;
    }
`,W4=S.span`
    align-self: flex-start;
    color: ${({theme:e})=>e.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.29 - 1) + 1rem);
`,V4={username:"ФИО",phone:"Телефон"},H4={username:{required:!0,validator:e=>e.length>2,message:"ФИО должно быть не меньше 3 символов"},phone:{required:!0,validator:e=>/^(?:\+7|8)(?:\(\d{3}\)|\d{3})\d{3}-?\d\d-?\d\d$/.test(String(e)),message:"Номер введен неверно"},agreement:{required:!0}},U4=e=>{const[t,l]=$.useState({}),r="Заявка на обратный звонок";return d.jsx(G4,{isOpenModalWindowCallback:e.isOpenModalWindowCallback,children:d.jsxs(q4,{isOpenModalWindowCallback:e.isOpenModalWindowCallback,children:[d.jsx(Gl,{handleToggleModalWindow:()=>e.handleToggleModalWindow("callback")}),d.jsx(J,{children:d.jsx("span",{children:"Заказать обратный звонок"})}),d.jsxs(Y4,{onSubmit:n=>$d(n,r,V4,H4,l,e.onSuccess,e.onError),children:[d.jsx(Mt,{error:t.username,type:"text",name:"username",placeholder:"ФИО*",maxLength:50}),d.jsx(Mt,{error:t.phone,type:"tel",name:"phone",placeholder:"Телефон*"}),d.jsx(Sd,{error:t.agreement,name:"agreement",label:d.jsxs("span",{style:{textAlign:"left"},children:["Я согласен на обработку ",d.jsx(Pe,{to:"#",children:"персональных данных"})]})}),d.jsx(Xe,{type:"submit",children:"Отправить"}),d.jsx(K4,{children:"* - поля обязательные для заполнения"})]})]})})},G4=S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;    
    //background-color: rgba(140, 174, 200, 0.8);
    background-color: rgba(217, 217, 217, 0.5);
    backdrop-filter: blur(5px);
    animation-name: ${Hn};
    animation-duration: 0.8s;
    animation-delay: 0s;
    animation-fill-mode: both;
    /* opacity: ${e=>e.isOpenModalWindowCallback?"1":"0"};
    transition: opacity 5s ease 2s;     */
`,q4=S.div`
    width: 782px;    
    padding: 34px 30px 24px;
    border-radius: 10px;
    background-color: ${({theme:e})=>e.bgCol.default};    
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    background-image: url(${es});
    /* animation-name: ${e=>e.isOpenModalWindowCallback?Rp:Np};
    animation-duration: 0.5s;
    animation-timing-function: ${e=>e.isOpenModalWindowCallback?"ease-out":"ease-in"};
    animation-delay: 1s; */
    //position: relative;

    @media ${({theme:e})=>e.media.laptop} {
        width: 620px;
    }

    @media ${({theme:e})=>e.media.tablet} {
        width: 514px;
    }
`,Y4=S.form`
    max-width: 702px;
    width: 100%;     
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin: 0 auto;
    
    ${Xe} {
        width: 100%;
        padding: 16px;
    }    
`,K4=S.span`
    align-self: flex-start;
    color: ${({theme:e})=>e.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.29 - 1) + 1rem);
`,X4=e=>d.jsx(Q4,{isOpenModalWindowThanks:e.isOpenModalWindowThanks,children:d.jsxs(J4,{isOpenModalWindowThanks:e.isOpenModalWindowThanks,children:[d.jsx(Gl,{handleToggleModalWindow:()=>e.handleToggleModalWindow("thanks")}),d.jsx(J,{children:d.jsx("span",{children:"Спасибо за вашу заявку!"})}),d.jsxs(Z4,{children:["Мы свяжемся с Вами",d.jsx("br",{}),"в ближайшее время"]}),d.jsx(Xe,{onClick:()=>e.handleToggleModalWindow("thanks"),children:"Понятно"})]})}),Q4=S.div`
    display: ${e=>e.isOpenModalWindowThanks?"flex":"none"};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;    
    //background-color: rgba(140, 174, 200, 0.8);
    background-color: rgba(217, 217, 217, 0.5);
    backdrop-filter: blur(5px);
    animation-name: ${Hn};
    animation-duration: 0.8s;
    animation-delay: 0s;
    animation-fill-mode: both;
    /* opacity: ${e=>e.isOpenModalWindowThanks?"1":"0"};
    transition: opacity 5s ease 2s;     */
`,J4=S.div`
    width: 782px;    
    padding: 34px 30px 24px;
    border-radius: 10px;
    background-color: ${({theme:e})=>e.bgCol.default};    
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    background-image: url(${es});
    /* animation-name: ${e=>e.isOpenModalWindowThanks?Rp:Np};
    animation-duration: 0.5s;
    animation-timing-function: ${e=>e.isOpenModalWindowThanks?"ease-out":"ease-in"};
    animation-delay: 1s; */
    //position: relative;

    ${Xe} {
        width: 100%;
        padding: 16px;
    }

    @media ${({theme:e})=>e.media.laptop} {
        width: 620px;
    }

    @media ${({theme:e})=>e.media.tablet} {
        width: 514px;
    }
`,Z4=S.div`
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.86 - 1.14) + 0.86rem); 
    font-weight: 500;
    margin-bottom: 20px;    
`,zu=({error:e,title:t,name:l,options:r})=>{const[n,i]=$.useState(""),o=a=>{i(a.target.value)};return d.jsxs(d.Fragment,{children:[e&&d.jsx(e6,{children:e}),d.jsxs(t6,{error:e,name:l,value:n,onChange:o,defaultValue:"",children:[d.jsx("option",{value:"",hidden:!0,children:t}),r.map(a=>d.jsx("option",{value:a.value,children:a.label}))]}),d.jsx("input",{type:"hidden",name:l,value:n})]})},e6=S.span`
 align-self: flex-start;
 margin-bottom: -8px;
 color: red;  
`,t6=S.select`
    width: 100%; 
    padding: 16px 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    background-color: transparent;

    font-family: 'Montserrat', sans-serif;
    font-size: 1.14rem;  
        
    color: ${({theme:e})=>e.color.multiСhannel};
    outline: 1px solid ${e=>e.error?"red":"transparent"};
        
    option {        
        background-color: ${({theme:e})=>e.bgCol.default};               
    }

    &:focus-visible {
        outline: 1px solid ${({theme:e})=>e.color.multiСhannel};
    }

    @media ${({theme:e})=>e.media.tablet} {
        padding: 10px 20px;
    }
`,l6=({error:e,title:t,options:l,name:r})=>{const[n,i]=$.useState([]),o=a=>{const{value:s,checked:c}=a.target;i(c?u=>[...u,s]:u=>u.filter(f=>f!==s))};return d.jsxs(r6,{error:e,children:[d.jsx("legend",{children:e?d.jsx("span",{children:e}):t}),l.map(a=>d.jsxs("label",{children:[d.jsx("input",{type:"checkbox",name:r,value:a.value,onChange:o}),d.jsx("span",{children:a.label})]},a.value)),d.jsx("input",{type:"hidden",name:r,value:n})]})},r6=S.fieldset`
    width: 100%;
    padding: 10px 15px 14px;
    border: 1px solid ${e=>e.error?"red":({theme:t})=>t.color.borderFieldSet};
    background-color: ${({theme:e})=>e.bgCol.default};
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.14rem;    
    display: flex;
    
    legend {
        text-align: left;
        margin-left: 4px;
        color: ${({theme:e})=>e.color.multiСhannel};
    }

    legend > span {
        color: red;
    }

    label:first-of-type {
        margin-left: 5px;
    }

    label {
        margin-right: 30px;  
        display: flex;
        align-items: center;  
        color: ${({theme:e})=>e.color.multiСhannel};
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.29 - 1.14) + 1.14rem);
    }

    input {        
        opacity: 0;
        position: absolute;        
    }

    input + span {
        display: inline-block;
        position: relative;
        padding-left: 1.5em;        
    }

    input + span::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border: 1px solid ${({theme:e})=>e.color.multiСhannel};                       
    }

    input:focus-visible + span::before {
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25); 
    }

    input:checked + span::after {
        content: "\\002714";
        position: absolute;
        left: 2px;
        top: 1px;
        color: ${({theme:e})=>e.color.defaultText};
        line-height: 1em;
        font-weight: 600;
        width: 1em;
        height: 1em;        
        text-align: center;
    }    

    /* @media ${({theme:e})=>e.media.mobile} {
        legend {
            color: red;
        }
    } */
`,n6={username_taxpayer:"ФИО налогоплательщика",inn:"ИНН налогоплательщика",username_patient:"ФИО пациента",forWhom:"За кого возвращаете",phone:"Телефон",period:"Период",branchAddress:"Хочу забрать на"},i6=e=>e.map(t=>({label:t,value:t})),o6=[{label:"Сурова, д.4",value:"Сурова, д.4"},{label:"Бебеля, д.1А",value:"Бебеля, д.1А"}],s6=[{label:"За себя",value:"За себя"},{label:"За жену",value:"За жену"},{label:"За мужа",value:"За мужа"},{label:"За сына",value:"За сына"},{label:"За дочь",value:"За дочь"},{label:"За мать",value:"За мать"},{label:"За отца",value:"За отца"}],a6={username_taxpayer:{required:!0,validator:e=>e.length>2,message:"ФИО должно быть не меньше 3 символов"},inn:{required:!0},username_patient:{required:!0,validator:e=>e.length>2,message:"ФИО должно быть не меньше 3 символов"},forWhom:{required:!0},phone:{required:!0,validator:e=>/^(?:\+7|8)(?:\(\d{3}\)|\d{3})\d{3}-?\d\d-?\d\d$/.test(String(e)),message:"Номер введен неверно"},period:{required:!0},branchAddress:{required:!0},agreement:{required:!0}},d6=e=>{const[t,l]=$.useState({}),r="Хочу справку для оформления 3НДФЛ";return d.jsx(c6,{children:d.jsxs(u6,{children:[d.jsx(Gl,{handleToggleModalWindow:()=>e.handleToggleModalWindow("3ndfl")}),d.jsx(J,{children:d.jsxs("span",{children:["Заказать справку об",d.jsx("br",{}),"оплате медицинских услуг"]})}),d.jsxs(f6,{onSubmit:n=>$d(n,r,n6,a6,l,e.onSuccess,e.onError),children:[d.jsx(Mt,{error:t.username_taxpayer,type:"text",name:"username_taxpayer",placeholder:"ФИО налогоплательщика*",maxLength:50}),d.jsx(Mt,{error:t.inn,type:"text",name:"inn",placeholder:"ИНН налогоплательщика*",pattern:"[0-9]{10,12}",minLength:10,maxLength:12}),d.jsx(Mt,{error:t.username_patient,type:"text",name:"username_patient",placeholder:"ФИО пациента*",maxLength:50}),d.jsx(zu,{error:t.forWhom,title:"За кого возвращаете*",name:"forWhom",options:s6}),d.jsx(Mt,{error:t.phone,type:"tel",name:"phone",placeholder:"Телефон*"}),d.jsx(l6,{error:t.period,title:"Период*",name:"period",options:i6(e.values)}),d.jsx(zu,{error:t.branchAddress,title:"Где забрать справку*",name:"branchAddress",options:o6}),d.jsx(Sd,{error:t.agreement,name:"agreement",label:d.jsxs("span",{style:{textAlign:"left"},children:["Я согласен на обработку ",d.jsx(Pe,{to:"#",children:"персональных данных"})]})}),d.jsx(Xe,{type:"submit",children:"Отправить"}),d.jsx(h6,{children:"* - поля обязательные для заполнения"})]})]})})},c6=S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;    
    //background-color: rgba(140, 174, 200, 0.8);
    background-color: rgba(217, 217, 217, 0.5);
    backdrop-filter: blur(5px);
    animation-name: ${Hn};
    animation-duration: 0.8s;
    animation-delay: 0s;
    animation-fill-mode: both;
`,u6=S.div`
    width: 782px;    
    padding: 34px 30px 24px;
    border-radius: 10px;
    background-color: ${({theme:e})=>e.bgCol.default};    
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    background-image: url(${es});

    //position: relative;

    @media ${({theme:e})=>e.media.laptop} {
        width: 620px;
    }

    @media ${({theme:e})=>e.media.tablet} {
        width: 514px;
    }

    /* @media ${({theme:e})=>e.media.mobile} {
        height: 100vh;
    } */
`,f6=S.form`
    max-width: 702px;
    width: 100%;     
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin: 0 auto;
    
    ${Xe} {
        width: 100%;
        padding: 16px;
    }    
`,h6=S.span`
    align-self: flex-start;
    color: ${({theme:e})=>e.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.29 - 1) + 1rem);
`,p6=$.lazy(()=>aC(()=>import("./Prices-BTEkOnaK.js"),[])),Xs=14,m6={show:!1,translateY:"-58px"};function g6(e){const[t,l]=$.useState("default"),[r,n]=$.useState(Xs),[i,o]=$.useState(m6);function a(T){T.currentTarget.name==="light"&&t!=="light"&&(window.localStorage.setItem("themeName","light"),l("light")),T.currentTarget.name==="dark"&&t!=="dark"&&(window.localStorage.setItem("themeName","dark"),l("dark")),T.currentTarget.name==="blue"&&t!=="blue"&&(window.localStorage.setItem("themeName","blue"),l("blue")),T.currentTarget.name||(window.localStorage.setItem("themeName","default"),l("default"))}function s(T){T.currentTarget.name==="decrease"&&r!==12&&(window.localStorage.setItem("fontSize",`${r-1}`),n(j=>j-1)),T.currentTarget.name==="add"&&r!==26&&(window.localStorage.setItem("fontSize",`${r+1}`),n(j=>j+1))}const c=()=>{i.show||(window.localStorage.setItem("translateY","0"),window.localStorage.setItem("show","true"),o({...i,show:!0,translateY:"0"})),i.show&&(t==="default"?(window.localStorage.setItem("translateY","-58px"),window.localStorage.setItem("show","false"),window.localStorage.fontSize=Xs):(window.localStorage.clear(),l("default")),n(Xs),o({...i,show:!1,translateY:"-58px"}))};$.useEffect(()=>{const T=window.localStorage.getItem("translateY"),j=window.localStorage.getItem("show")==="true";T&&o({...i,translateY:T,show:j})},[]),$.useEffect(()=>{const T=window.localStorage.getItem("themeName");T&&l(T)},[]),$.useEffect(()=>{const T=window.localStorage.getItem("fontSize");T&&n(+T)},[]);const[u,f]=$.useState(!1),m=()=>f(T=>!T),[v,C]=$.useState(!1),[x,w]=$.useState(!1),[g,h]=$.useState(!1),[p,y]=$.useState(!1),b=T=>{switch(T){case"3ndfl":C(j=>!j);break;case"record":w(j=>!j);break;case"callback":h(j=>!j);break;case"thanks":y(j=>!j);break;default:f(j=>!j)}},k=()=>{C(!1),w(!1),h(!1),y(!0)},E=()=>{alert("Упс, что-то пошло не так..")};$.useEffect(()=>((v||x||g)&&(document.body.style.overflowY="scroll",document.body.style.position="fixed",document.body.style.width="100%"),()=>{document.body.style.overflowY="unset",document.body.style.position="unset",document.body.style.width="unset"}),[v||x||g]);const I=Gn(),A=e.store.getState();return d.jsxs(ov,{theme:t==="light"?mi.light:t==="dark"?mi.dark:t==="blue"?mi.blue:mi.default,children:[d.jsx(Q3,{isOpenSidebar:u,handleToggleSidebar:m,sidebar:A.sidebar}),u&&d.jsx(e5,{}),v&&d.jsx(d6,{handleToggleModalWindow:b,values:A.header.forms.ndfl.values,onSuccess:k,onError:E}),x&&d.jsx(O4,{handleToggleModalWindow:b,onSuccess:k,onError:E}),g&&d.jsx(U4,{isOpenModalWindowCallback:g,handleToggleModalWindow:b,onSuccess:k,onError:E}),d.jsx(X4,{isOpenModalWindowThanks:p,handleToggleModalWindow:b}),d.jsxs(C6,{offset:i.translateY,children:[d.jsx(x2,{mainMenu:A.header.headerMenu.mainMenu,subMenu:A.header.headerMenu.subMenu,contacts:A.header.contacts,counter:A.header.counter,socials:A.header.socials,handleToggleTheme:a,handleFontSize:s,themeName:t,setThemeName:l,fontSize:r,handleVisuallyImpairedPanel:c,visuallyImpairedPanel:i,handleToggleSidebar:m,handleToggleModalWindow:b,sidebar:A.sidebar,windowWidth:I}),d.jsx($.Suspense,{fallback:"Загрузка...",children:d.jsxs(Jv,{children:[d.jsx(ge,{path:"/",element:d.jsx(v3,{homePage:A.homePage,themeName:t,fontSize:r,dispatch:e.store.dispatch,windowWidth:I})}),d.jsx(ge,{path:"/prices",element:d.jsx(p6,{pricesPage:A.pricesPage,windowWidth:I})}),d.jsx(ge,{path:"/reviews",element:d.jsx(r1,{reviewsPage:A.reviewsPage,windowWidth:I,dispatch:e.store.dispatch})}),d.jsx(ge,{path:"/timetable",element:d.jsx(S2,{timeTablePage:A.timeTablePage})}),d.jsx(ge,{path:"/doctors",element:d.jsx(b2,{})}),d.jsx(ge,{path:"/eco",element:d.jsx(T2,{})}),d.jsx(ge,{path:"/faq",element:d.jsx(E2,{})}),d.jsx(ge,{path:"/contacts",element:d.jsx(A2,{})}),d.jsx(ge,{path:"/about",element:d.jsx(P2,{})}),d.jsx(ge,{path:"/news",element:d.jsx($2,{})}),d.jsx(ge,{path:"/usefulInfo",element:d.jsx(S3,{})}),d.jsx(ge,{path:"/questionnaire",element:d.jsx(I2,{})}),d.jsx(ge,{path:"/documents",element:d.jsx(j2,{})}),d.jsx(ge,{path:"/vacancy",element:d.jsx(_2,{})}),d.jsx(ge,{path:"/reception-of-citizens",element:d.jsx(z2,{})}),d.jsx(ge,{path:"/3d-tour",element:d.jsx(L2,{})}),d.jsx(ge,{path:"/payment-terms",element:d.jsx(M2,{})})]})}),d.jsx(N3,{contacts:A.header.contacts,socials:A.header.socials,duplicateLinks:A.footer.footerMenu.duplicateLinks,servicesLinks:A.footer.footerMenu.servicesLinks,addresses:A.footer.addresses,banner:A.footer.banner,themeName:t,fontSize:r,handleToggleModalWindow:b}),d.jsx(cv,{fontSize:r})]})]})}const C6=S.div`
  transform: translateY(${e=>e.offset}); 
  transition: transform 0.5s ease-in-out;  
  
  /* @media ${({theme:e})=>e.media.mobile} {
    overflow-x: hidden;
  } */
`;function ze(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var v6=typeof Symbol=="function"&&Symbol.observable||"@@observable",Lu=v6,Qs=()=>Math.random().toString(36).substring(7).split("").join("."),y6={INIT:`@@redux/INIT${Qs()}`,REPLACE:`@@redux/REPLACE${Qs()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Qs()}`},Eo=y6;function x6(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function w6(e,t,l){if(typeof e!="function")throw new Error(ze(2));let r=e,n=t,i=new Map,o=i,a=0,s=!1;function c(){o===i&&(o=new Map,i.forEach((w,g)=>{o.set(g,w)}))}function u(){if(s)throw new Error(ze(3));return n}function f(w){if(typeof w!="function")throw new Error(ze(4));if(s)throw new Error(ze(5));let g=!0;c();const h=a++;return o.set(h,w),function(){if(g){if(s)throw new Error(ze(6));g=!1,c(),o.delete(h),i=null}}}function m(w){if(!x6(w))throw new Error(ze(7));if(typeof w.type>"u")throw new Error(ze(8));if(typeof w.type!="string")throw new Error(ze(17));if(s)throw new Error(ze(9));try{s=!0,n=r(n,w)}finally{s=!1}return(i=o).forEach(h=>{h()}),w}function v(w){if(typeof w!="function")throw new Error(ze(10));r=w,m({type:Eo.REPLACE})}function C(){const w=f;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(ze(11));function h(){const y=g;y.next&&y.next(u())}return h(),{unsubscribe:w(h)}},[Lu](){return this}}}return m({type:Eo.INIT}),{dispatch:m,subscribe:f,getState:u,replaceReducer:v,[Lu]:C}}function b6(e,t,l){return w6(e,t)}function S6(e){Object.keys(e).forEach(t=>{const l=e[t];if(typeof l(void 0,{type:Eo.INIT})>"u")throw new Error(ze(12));if(typeof l(void 0,{type:Eo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ze(13))})}function k6(e){const t=Object.keys(e),l={};for(let i=0;i<t.length;i++){const o=t[i];typeof e[o]=="function"&&(l[o]=e[o])}const r=Object.keys(l);let n;try{S6(l)}catch(i){n=i}return function(o={},a){if(n)throw n;let s=!1;const c={};for(let u=0;u<r.length;u++){const f=r[u],m=l[f],v=o[f],C=m(v,a);if(typeof C>"u")throw a&&a.type,new Error(ze(14));c[f]=C,s=s||C!==v}return s=s||r.length!==Object.keys(o).length,s?c:o}}const T6={headerMenu:{mainMenu:[{ancor:"Услуги",path:"#"},{ancor:"Цены",path:"prices"},{ancor:"Наши врачи",path:"doctors"},{ancor:"График приема",path:"timetable"},{ancor:"Эко по ОМС",path:"eco"},{ancor:"Вопрос-Ответ",path:"faq"},{ancor:"О нас",path:"#"},{ancor:"Контакты",path:"contacts"}],subMenu:[{ancor:"О клинике",path:"about"},{ancor:"Отзывы",path:"reviews"},{ancor:"Новости",path:"news"},{ancor:"Пройти опрос",path:"questionnaire"},{ancor:"Документы",path:"documents"},{ancor:"Вакансии",path:"vacancy"},{ancor:"Прием граждан",path:"reception-of-citizens"},{ancor:"3Д тур по клинике",path:"3d-tour"},{ancor:"Условия оплаты",path:"payment-terms"}]},contacts:{phone1:"8 (8422) 24-01-44",phone2:"8 (8422) 25-54-23",email:"a-klinik@yandex.ru",callback:!1},counter:{boys:518,girls:496},socials:[{id:"classmates",link:"https://ok.ru/profile/593726626588"},{id:"telegram",link:"https://t.me/aliansklinikeko"},{id:"viber",link:"https://invite.viber.com/?g2=AQBAf%2Bx%2F82e7mktNV7q6hphMd%2FGP4D8mqeuOFWjD2vnFajGX828VqIasBDcHG7f3"},{id:"vk",link:"https://vk.com/aliansklinikeko73"}],forms:{ndfl:{values:["2024","2023","2022"]}}},E6=(e=T6,t)=>e,A6="/assets/images/single-img/footer/control.webp",P6={footerMenu:{duplicateLinks:[{id:1,ancor:"О клинике",path:"about"},{id:2,ancor:"Новости",path:"news"},{id:3,ancor:"Отзывы",path:"reviews"},{id:4,ancor:"Вакансии",path:"vacancy"},{id:5,ancor:"3D-тур по клинике ",path:"3d-tour"},{id:6,ancor:"Условия оплаты",path:"payment-terms"},{id:7,ancor:"Наши врачи",path:"doctors"},{id:8,ancor:"График приема",path:"timetable"},{id:9,ancor:"Цены",path:"prices"},{id:10,ancor:"Вопрос-ответ",path:"faq"},{id:11,ancor:"Полезно знать",path:"usefulInfo"},{id:12,ancor:"Контакты",path:"contacts"}],servicesLinks:[[{id:"infertility-diagnosis",title:"Диагностика бесплодия",path:"infertility-diagnosis",level:0},{id:"assessment-of-ovarian-reserve",title:"Оценка овариального резерва яичников",path:"assessment-of-ovarian-reserve",level:1},{id:"tubal-patency-assessment",title:"Оценка проходимости маточных труб",path:"tubal-patency-assessment",level:1},{id:"ultrasound-of-the-pelvic-organs-in-women",title:"УЗИ органов малого таза у женщин",path:"ultrasound-of-the-pelvic-organs-in-women",level:1},{id:"folliculometry",title:"Фолликулометрия",path:"folliculometry",level:1},{id:"ultrasound-of-the-thyroid-gland",title:"УЗИ щитовидной железы",path:"ultrasound-of-the-thyroid-gland",level:1},{id:"ultrasound-of-the-mammary-glands",title:"УЗИ молочных желез",path:"ultrasound-of-the-mammary-glands",level:1},{id:"ultrasound-of-the-scrotum-organs",title:"УЗИ органов мошонки",path:"ultrasound-of-the-scrotum-organs",level:1},{id:"spermogram-of-the-pelvis-in-women",title:"Спермограмма (базовая и расширенная) малого таза у женщин",path:"spermogram-of-the-pelvis-in-women",level:1},{id:"kruger-morphology",title:"Морфология по Крюгеру (оценка внешнего строения сперматозоидов)",path:"kruger-morphology",level:1},{id:"map-test",title:"МАР-тест (определение иммунного бесплодия)",path:"map-test",level:1},{id:"determination-of-leukocytes-in-sperm",title:"LeucoScreen (определение лейкоцитов в сперме)",path:"determination-of-leukocytes-in-sperm",level:1},{id:"sperm-DNA-fragmentation-analysis",title:"Анализ на фрагментацию ДНК сперматозоидов",path:"sperm-DNA-fragmentation-analysis",level:1},{id:"diagnostic-hysteroscopy",title:"Диагностическая гистероскопия",path:"diagnostic-hysteroscopy",level:1},{id:"medical-tests",title:"Медицинские анализы",path:"medical-tests",level:1},{id:"karyotype-analysis",title:"Анализ на кариотип (кариотипирование)",path:"karyotype-analysis",level:1},{id:"preparing-for-research",title:"Подготовка к исследованиям",path:"preparing-for-research",level:1}],[{id:"infertility-treatment",title:"Лечение бесплодия",path:"infertility-treatment",level:0},{id:"appointment-with-a-fertility-specialist",title:"Приём врача репродуктолога",path:"appointment-with-a-fertility-specialist",level:1},{id:"in-vitro-fertilization",title:"Экстракорпоральное оплодотворение (ЭКО/ИК­СИ)",path:"in-vitro-fertilization",level:1},{id:"eco",title:"Бесплатное ЭКО по ОМС",path:"eco",level:1},{id:"IVF-with-donor-eggs",title:"ЭКО с донорской яйцеклеткой",path:"IVF-with-donor-eggs",level:1},{id:"IVF-with-donor-embryos",title:"ЭКО с донорскими эмбрионами",path:"IVF-with-donor-embryos",level:1},{id:"IVF-with-donor-sperm",title:"ЭКО с донорской спермой",path:"IVF-with-donor-sperm",level:1},{id:"ERA-test",title:"Определение рецептивности эндометрия – тест ERA (ЭРА)",path:"ERA-test",level:1},{id:"assisted-hatching",title:"Вспомогательный хетчинг",path:"assisted-hatching",level:1},{id:"preimplantation-genetic-diagnosis",title:"Преимплантационная генетическая диагностика",path:"preimplantation-genetic-diagnosis",level:1},{id:"cryopreservation",title:"Криоконсервация",path:"cryopreservation",level:1},{id:"",title:"Криоконсервация эмбрионов",path:"",level:1},{id:"embryo-cryopreservation",title:"Криоконсервация яйцеклеток",path:"embryo-cryopreservation",level:1},{id:"sperm-cryopreservation",title:"Криоконсервация спермы",path:"sperm-cryopreservation",level:1},{id:"intrauterine-insemination",title:"Внутриматочная инсеминация (ВМИ)",path:"intrauterine-insemination",level:1},{id:"hormonal-stimulation-of-the-ovaries",title:"Гормональная стимуляция яичников",path:"hormonal-stimulation-of-the-ovaries",level:1}],[{id:"urology-andrology",title:"Урология-андрология",path:"urology-andrology",level:0},{id:"appointment-of-a-urologist-andrologist",title:"Приём уролога-андролога",path:"appointment-of-a-urologist-andrologist",level:1},{id:"urological-diseases",title:"Урологические заболевания",path:"urological-diseases",level:1},{id:"male-infertility",title:"Мужское бесплодие",path:"male-infertility",level:1},{id:"urological-research",title:"Урологические исследования",path:"urological-research",level:1},{id:"examination-of-a-man-at-the-stage-of-pregnancy-planning",title:"Обследование мужчины на этапе планирования беременности",path:"examination-of-a-man-at-the-stage-of-pregnancy-planning",level:1},{id:"sperm-examination",title:"Исследование спермы",path:"sperm-examination",level:1},{id:"ultrasound-urological",title:"УЗИ урологическое",path:"ultrasound-urological",level:1},{id:"cystoscopy",title:"Цистоскопия",path:"cystoscopy",level:1},{id:"testicular-epididymal-biopsy",title:"Биопсия яичка/придатка",path:"testicular-epididymal-biopsy",level:1},{id:"IVF-using-ICSI",title:"ЭКО методом ИКСИ",path:"IVF-using-ICSI",level:1}],[{id:"gynecological-operations",title:"Гинекологические операции",path:"gynecological-operations",level:0},{id:"hysteroscopy",title:"Гистероскопия",path:"hysteroscopy",level:1},{id:"hysteroresectoscopy",title:"Гистерорезектоскопия",path:"hysteroresectoscopy",level:1},{id:"hymenoplasty",title:"Гименопластика (восстановление девственной плевы)",path:"hymenoplasty",level:1},{id:"correction-of-the-labia-minora",title:"Коррекция малых половых губ (лабиопластика)",path:"correction-of-the-labia-minora",level:1},{id:"minor-gynecological-operations",title:"Малые гинекологические операции",path:"minor-gynecological-operations",level:1},{id:"radio-wave-treatment-of-the-cervix",title:"Радиоволновое лечение шейки матки",path:"radio-wave-treatment-of-the-cervix",level:1}],[{id:"pregnant-women-services",title:"Услуги для беременных",path:"pregnant-women-services",level:0},{id:"determining-the-sex-of-a-child-by-mothers-blood",title:"Определение пола ребёнка по крови матери",path:"determining-the-sex-of-a-child-by-mothers-blood",level:1},{id:"prenetix-test",title:"Определение генетических патологий на сроке 10 недель по крови матери (тест Prenetix)",path:"prenetix-test",level:1},{id:"determination-of-the-rhesus-factor",title:"Определение резусфактора (профилактика резусконфликта)",path:"determination-of-the-rhesus-factor",level:1},{id:"pregnancy-management",title:"Ведение беременности",path:"pregnancy-management",level:1},{id:"screening-examinations-during-pregnancy",title:"Скрининговые обследования при беременности",path:"screening-examinations-during-pregnancy",level:1}],[{id:"gynecology",title:"Гинекология",path:"gynecology",level:0},{id:"gynecologist-appointment",title:"Приём гинеколога",path:"gynecologist-appointment",level:1},{id:"gynecological-diseases",title:"Гинекологические заболевания",path:"gynecological-diseases",level:1},{id:"female-infertility",title:"Женское бесплодие",path:"female-infertility",level:1},{id:"gynecological-smears",title:"Гинекологические мазки",path:"gynecological-smears",level:1},{id:"gynecological-ultrasound",title:"УЗИ гинекологическое",path:"gynecological-ultrasound",level:1},{id:"colposcopy",title:"Кольпоскопия",path:"colposcopy",level:1},{id:"pathologies-of-the-cervix",title:"Патологии шейки матки",path:"pathologies-of-the-cervix",level:1},{id:"endometrial-biopsy-of-the-uterus",title:"Биопсия энд­метрия матки (пайпель)",path:"endometrial-biopsy-of-the-uterus",level:1}],[{id:"genetic-tests",title:"Генетические тесты",path:"genetic-tests",level:0},{id:"prenatal-diagnosis",title:"Пренатальная диагностика",path:"prenatal-diagnosis",level:1},{id:"reproduction-disorder",title:"Нарушение репродукции",path:"reproduction-disorder",level:1},{id:"establishment-of-paternity-and-relationship",title:"Установление отцовства и родства",path:"establishment-of-paternity-and-relationship",level:1},{id:"hereditary-diseases-and-chromosomal-pathology",title:"Наследственные заболевания и хромосомная патология",path:"hereditary-diseases-and-chromosomal-pathology",level:1},{id:"oncogenetics",title:"Онкогенетика",path:"oncogenetics",level:1}],[{id:"ultrasound-scan",title:"Ультразвуковые исследования",path:"ultrasound-scan",level:0},{id:"expert-class-ultrasound",title:"УЗИ экспертного класса",path:"expert-class-ultrasound",level:1},{id:"ultrasound-for-infertility",title:"УЗИ при бесплодии",path:"ultrasound-for-infertility",level:1},{id:"ultrasound-of-the-abdominal-organs",title:"УЗИ органов брюшной полости",path:"ultrasound-of-the-abdominal-organs",level:1},{id:"ultrasound-of-the-prostate-gland",title:"УЗИ предстательной железы (ТРУЗИ - трансректально)",path:"ultrasound-of-the-prostate-gland",level:1},{id:"4d-ultrasound",title:"4D УЗИ",path:"4d-ultrasound",level:1},{id:"how-to-prepare-for-ultrasound",title:"Как подготовиться к УЗИ",path:"how-to-prepare-for-ultrasound",level:1}],[{id:"urological-operations",title:"Урологические операции",path:"urological-operations",level:0},{id:"varicocelectomy",title:"Варикоцелэктомия",path:"varicocelectomy",level:1},{id:"circumcisio",title:"Циркумцизио (обрезание крайней плоти)",path:"circumcisio",level:1}],[{id:"knee-joint-arthroscopy",title:"Артроскопия коленного сустава",path:"knee-joint-arthroscopy",level:0}],[{id:"shock-wave-therapy",title:"Ударно-волновая терапия",path:"shock-wave-therapy",level:0}],[{id:"endocrinology",title:"Эндокринология",path:"endocrinology",level:0}],[{id:"traumatology-orthopedics",title:"Травматология и ортопедия",path:"traumatology-orthopedics",level:0}],[{id:"functional-diagnostics",title:"Функциональная диагностика",path:"functional-diagnostics",level:0}],[{id:"therapy",title:"Терапия",path:"therapy",level:0}]]},addresses:["г. Ульяновск, пр-т. Врача Сурова, д. 4","г. Ульяновск, ул. Бебеля, 1А","г. Ульяновск, ул. Рябикова, 96"],banner:{src:A6,path:"https://minzdrav.gov.ru/open/supervision/format/nezavisimaya-sistema-otsenki-kachestva-okazaniya-uslug-meditsinskimi-organizatsiyami/nezavisimaya-otsenka-kachestva-okazaniya-uslug-meditsinskimi-organizatsiyami"}},$6=(e=P6,t)=>e,I6={sidebarMenu:{entities:{pages:{services:{id:"services",title:"Услуги",path:"services",level:-1,pages:["infertility-diagnosis","infertility-treatment","gynecology","gynecological-operations","pregnant-women-services","urology-andrology","urological-operations","traumatology-orthopedics","knee-joint-arthroscopy","ultrasound-scan","shock-wave-therapy","functional-diagnostics","genetic-tests","therapy","endocrinology"]},prices:{id:"prices",title:"Цены",path:"prices",level:-1},doctors:{id:"doctors",title:"Наши врачи",path:"doctors",level:-1},timetable:{id:"timetable",title:"График приема",path:"timetable",level:-1},"eco-oms":{id:"eco-oms",title:"Эко по ОМС",path:"eco",level:-1},faq:{id:"faq",title:"Вопрос-Ответ",path:"faq",level:-1},"about-us":{id:"about-us",title:"О нас",path:"#",level:-1,pages:["about","reviews","news","questionnaire","documents","vacancy","reception-of-citizens","3d-tour","payment-terms"]},contacts:{id:"contacts",title:"Контакты",path:"contacts",level:-1},about:{id:"about",title:"О компании",path:"about",level:0,parentId:"about-us"},reviews:{id:"reviews",title:"Отзывы",path:"reviews",level:0,parentId:"about-us"},news:{id:"news",title:"Новости",path:"news",level:0,parentId:"about-us"},questionnaire:{id:"questionnaire",title:"Пройти опрос",path:"questionnaire",level:0,parentId:"about-us"},documents:{id:"documents",title:"Документы",path:"documents",level:0,parentId:"about-us"},vacancy:{id:"vacancy",title:"Вакансии",path:"vacancy",level:0,parentId:"about-us"},"reception-of-citizens":{id:"reception-of-citizens",title:"Прием граждан",path:"reception-of-citizens",level:0,parentId:"about-us"},"3d-tour":{id:"3d-tour",title:"3Д-тур по клинике",path:"3d-tour",level:0,parentId:"about-us"},"payment-terms":{id:"payment-terms",title:"Условия оплаты",path:"payment-terms",level:0,parentId:"about-us"},"infertility-diagnosis":{id:"infertility-diagnosis",title:"Диагностика бесплодия",path:"infertility-diagnosis",level:0,pages:["assessment-of-ovarian-reserve","tubal-patency-assessment","ultrasound-of-the-pelvic-organs-in-women","folliculometry","ultrasound-of-the-thyroid-gland","ultrasound-of-the-mammary-glands","ultrasound-of-the-scrotum-organs","spermogram-of-the-pelvis-in-women","kruger-morphology","map-test","determination-of-leukocytes-in-sperm","sperm-DNA-fragmentation-analysis","diagnostic-hysteroscopy","medical-tests","karyotype-analysis","preparing-for-research"]},"assessment-of-ovarian-reserve":{id:"assessment-of-ovarian-reserve",title:"Оценка овариального резерва яичников",path:"assessment-of-ovarian-reserve",level:1,parentId:"infertility-diagnosis"},"tubal-patency-assessment":{id:"tubal-patency-assessment",title:"Оценка проходимости маточных труб",path:"tubal-patency-assessment",level:1,parentId:"infertility-diagnosis"},"ultrasound-of-the-pelvic-organs-in-women":{id:"ultrasound-of-the-pelvic-organs-in-women",title:"УЗИ органов малого таза у женщин",path:"ultrasound-of-the-pelvic-organs-in-women",level:1,parentId:"infertility-diagnosis"},folliculometry:{id:"folliculometry",title:"Фолликулометрия",path:"folliculometry",level:1,parentId:"infertility-diagnosis"},"ultrasound-of-the-thyroid-gland":{id:"ultrasound-of-the-thyroid-gland",title:"УЗИ щитовидной железы",path:"ultrasound-of-the-thyroid-gland",level:1,parentId:"infertility-diagnosis"},"ultrasound-of-the-mammary-glands":{id:"ultrasound-of-the-mammary-glands",title:"УЗИ молочных желез",path:"ultrasound-of-the-mammary-glands",level:1,parentId:"infertility-diagnosis"},"ultrasound-of-the-scrotum-organs":{id:"ultrasound-of-the-scrotum-organs",title:"УЗИ органов мошонки",path:"ultrasound-of-the-scrotum-organs",level:1,parentId:"infertility-diagnosis"},"spermogram-of-the-pelvis-in-women":{id:"spermogram-of-the-pelvis-in-women",title:"Спермограмма (базовая и расширенная) малого таза у женщин",path:"spermogram-of-the-pelvis-in-women",level:1,parentId:"infertility-diagnosis"},"kruger-morphology":{id:"kruger-morphology",title:"Морфология по Крюгеру (оценка внешнего строения сперматозоидов)",path:"kruger-morphology",level:1,parentId:"infertility-diagnosis"},"map-test":{id:"map-test",title:"МАР-тест (определение иммунного бесплодия)",path:"map-test",level:1,parentId:"infertility-diagnosis"},"determination-of-leukocytes-in-sperm":{id:"determination-of-leukocytes-in-sperm",title:"LeucoScreen (определение лейкоцитов в сперме)",path:"determination-of-leukocytes-in-sperm",level:1,parentId:"infertility-diagnosis"},"sperm-DNA-fragmentation-analysis":{id:"sperm-DNA-fragmentation-analysis",title:"Анализ на фрагментацию ДНК сперматозоидов",path:"sperm-DNA-fragmentation-analysis",level:1,parentId:"infertility-diagnosis"},"diagnostic-hysteroscopy":{id:"diagnostic-hysteroscopy",title:"Диагностическая гистероскопия",path:"diagnostic-hysteroscopy",level:1,parentId:"infertility-diagnosis"},"medical-tests":{id:"medical-tests",title:"Медицинские анализы",path:"medical-tests",level:1,parentId:"infertility-diagnosis"},"karyotype-analysis":{id:"karyotype-analysis",title:"Анализ на кариотип (кариотипирование)",path:"karyotype-analysis",level:1,parentId:"infertility-diagnosis"},"preparing-for-research":{id:"preparing-for-research",title:"Подготовка к исследованиям",path:"preparing-for-research",level:1,parentId:"infertility-diagnosis"},"infertility-treatment":{id:"infertility-treatment",title:"Лечение бесплодия",path:"infertility-treatment",level:0,pages:["appointment-with-a-fertility-specialist","in-vitro-fertilization","eco","IVF-with-donor-eggs","IVF-with-donor-embryos","IVF-with-donor-sperm","ERA-test","assisted-hatching","preimplantation-genetic-diagnosis","cryopreservation","embryo-cryopreservation","eggs-cryopreservation","sperm-cryopreservation","intrauterine-insemination","hormonal-stimulation-of-the-ovaries"]},"appointment-with-a-fertility-specialist":{id:"appointment-with-a-fertility-specialist",title:"Приём врача репродуктолога",path:"appointment-with-a-fertility-specialist",level:1,parentId:"infertility-treatment"},"in-vitro-fertilization":{id:"in-vitro-fertilization",title:"Экстракорпоральное оплодотворение (ЭКО/ИКСИ)",path:"in-vitro-fertilization",level:1,parentId:"infertility-treatment"},eco:{id:"eco",title:"Бесплатное ЭКО по ОМС",path:"eco",level:1,parentId:"infertility-treatment"},"IVF-with-donor-eggs":{id:"IVF-with-donor-eggs",title:"ЭКО с донорской яйцеклеткой",path:"IVF-with-donor-eggs",level:1,parentId:"infertility-treatment"},"IVF-with-donor-embryos":{id:"IVF-with-donor-embryos",title:"ЭКО с донорскими эмбрионами",path:"IVF-with-donor-embryos",level:1,parentId:"infertility-treatment"},"IVF-with-donor-sperm":{id:"IVF-with-donor-sperm",title:"ЭКО с донорской спермой",path:"IVF-with-donor-sperm",level:1,parentId:"infertility-treatment"},"ERA-test":{id:"ERA-test",title:"Определение рецептивности эндометрия – тест ERA (ЭРА)",path:"ERA-test",level:1,parentId:"infertility-treatment"},"assisted-hatching":{id:"assisted-hatching",title:"Вспомогательный хетчинг",path:"assisted-hatching",level:1,parentId:"infertility-treatment"},"preimplantation-genetic-diagnosis":{id:"preimplantation-genetic-diagnosis",title:"Преимплантационная генетическая диагностика",path:"preimplantation-genetic-diagnosis",level:1,parentId:"infertility-treatment"},cryopreservation:{id:"cryopreservation",title:"Криоконсервация",path:"cryopreservation",level:1,parentId:"infertility-treatment"},"embryo-cryopreservation":{id:"embryo-cryopreservation",title:"Криоконсервация эмбрионов",path:"embryo-cryopreservation",level:1,parentId:"infertility-treatment"},"eggs-cryopreservation":{id:"eggs-cryopreservation",title:"Криоконсервация яйцеклеток",path:"eggs-cryopreservation",level:1,parentId:"infertility-treatment"},"sperm-cryopreservation":{id:"sperm-cryopreservation",title:"Криоконсервация спермы",path:"sperm-cryopreservation",level:1,parentId:"infertility-treatment"},"intrauterine-insemination":{id:"intrauterine-insemination",title:"Внутриматочная инсеминация (ВМИ)",path:"intrauterine-insemination",level:1,parentId:"infertility-treatment"},"hormonal-stimulation-of-the-ovaries":{id:"hormonal-stimulation-of-the-ovaries",title:"Гормональная стимуляция яичников",path:"hormonal-stimulation-of-the-ovaries",level:1,parentId:"infertility-treatment"},gynecology:{id:"gynecology",title:"Гинекология",path:"gynecology",level:0,pages:["gynecologist-appointment","gynecological-diseases","female-infertility","gynecological-smears","gynecological-ultrasound","colposcopy","pathologies-of-the-cervix","endometrial-biopsy-of-the-uterus"]},"gynecologist-appointment":{id:"gynecologist-appointment",title:"Приём гинеколога",path:"gynecologist-appointment",level:1,parentId:"gynecology"},"gynecological-diseases":{id:"gynecological-diseases",title:"Гинекологические заболевания",path:"gynecological-diseases",level:1,parentId:"gynecology"},"female-infertility":{id:"female-infertility",title:"Женское бесплодие",path:"female-infertility",level:1,parentId:"gynecology"},"gynecological-smears":{id:"gynecological-smears",title:"Гинекологические мазки",path:"gynecological-smears",level:1,parentId:"gynecology"},"gynecological-ultrasound":{id:"gynecological-ultrasound",title:"УЗИ гинекологическое",path:"gynecological-ultrasound",level:1,parentId:"gynecology"},colposcopy:{id:"colposcopy",title:"Кольпоскопия",path:"colposcopy",level:1,parentId:"gynecology"},"pathologies-of-the-cervix":{id:"pathologies-of-the-cervix",title:"Патологии шейки матки",path:"pathologies-of-the-cervix",level:1,parentId:"gynecology"},"endometrial-biopsy-of-the-uterus":{id:"endometrial-biopsy-of-the-uterus",title:"Биопсия эндметрия матки (пайпель)",path:"endometrial-biopsy-of-the-uterus",level:1,parentId:"gynecology"},"gynecological-operations":{id:"gynecological-operations",title:"Гинекологические операции",path:"gynecological-operations",level:0,pages:["hysteroscopy","hysteroresectoscopy","hymenoplasty","correction-of-the-labia-minora","minor-gynecological-operations","radio-wave-treatment-of-the-cervix"]},hysteroscopy:{id:"hysteroscopy",title:"Гистероскопия",path:"hysteroscopy",level:1,parentId:"gynecological-operations"},hysteroresectoscopy:{id:"hysteroresectoscopy",title:"Гистерорезектоскопия",path:"hysteroresectoscopy",level:1,parentId:"gynecological-operations"},hymenoplasty:{id:"hymenoplasty",title:"Гименопластика (восстановление девственной плевы)",path:"hymenoplasty",level:1,parentId:"gynecological-operations"},"correction-of-the-labia-minora":{id:"correction-of-the-labia-minora",title:"Коррекция малых половых губ (лабиопластика)",path:"correction-of-the-labia-minora",level:1,parentId:"gynecological-operations"},"minor-gynecological-operations":{id:"minor-gynecological-operations",title:"Малые гинекологические операции",path:"minor-gynecological-operations",level:1,parentId:"gynecological-operations"},"radio-wave-treatment-of-the-cervix":{id:"radio-wave-treatment-of-the-cervix",title:"Радиоволновое лечение шейки матки",path:"radio-wave-treatment-of-the-cervix",level:1,parentId:"gynecological-operations"},"pregnant-women-services":{id:"pregnant-women-services",title:"Услуги для беременных",path:"pregnant-women-services",level:0,pages:["determining-the-sex-of-a-child-by-mothers-blood","prenetix-test","determination-of-the-rhesus-factor","pregnancy-management","screening-examinations-during-pregnancy"]},"determining-the-sex-of-a-child-by-mothers-blood":{id:"determining-the-sex-of-a-child-by-mothers-blood",title:"Определение пола ребёнка по крови матери",path:"determining-the-sex-of-a-child-by-mothers-blood",level:1,parentId:"pregnant-women-services"},"prenetix-test":{id:"prenetix-test",title:"Определение генетических патологий на сроке 10 недель по крови матери (тест Prenetix)",path:"prenetix-test",level:1,parentId:"pregnant-women-services"},"determination-of-the-rhesus-factor":{id:"determination-of-the-rhesus-factor",title:"Определение резусфактора (профилактика резусконфликта)",path:"determination-of-the-rhesus-factor",level:1,parentId:"pregnant-women-services"},"pregnancy-management":{id:"pregnancy-management",title:"Ведение беременности",path:"pregnancy-management",level:1,parentId:"pregnant-women-services"},"screening-examinations-during-pregnancy":{id:"screening-examinations-during-pregnancy",title:"Скрининговые обследования при беременности",path:"screening-examinations-during-pregnancy",level:1,parentId:"pregnant-women-services"},"urology-andrology":{id:"urology-andrology",title:"Урология-андрология",path:"urology-andrology",level:0,pages:["appointment-of-a-urologist-andrologist","urological-diseases","male-infertility","urological-research","examination-of-a-man-at-the-stage-of-pregnancy-planning","sperm-examination","ultrasound-urological","cystoscopy","testicular-epididymal-biopsy","IVF-using-ICSI"]},"appointment-of-a-urologist-andrologist":{id:"appointment-of-a-urologist-andrologist",title:"Приём уролога-андролога",path:"appointment-of-a-urologist-andrologist",level:1,parentId:"urology-andrology"},"urological-diseases":{id:"urological-diseases",title:"Урологические заболевания",path:"urological-diseases",level:1,parentId:"urology-andrology"},"male-infertility":{id:"male-infertility",title:"Мужское бесплодие",path:"male-infertility",level:1,parentId:"urology-andrology"},"urological-research":{id:"urological-research",title:"Урологические исследования",path:"urological-research",level:1,parentId:"urology-andrology"},"examination-of-a-man-at-the-stage-of-pregnancy-planning":{id:"examination-of-a-man-at-the-stage-of-pregnancy-planning",title:"Обследование мужчины на этапе планирования беременности",path:"examination-of-a-man-at-the-stage-of-pregnancy-planning",level:1,parentId:"urology-andrology"},"sperm-examination":{id:"sperm-examination",title:"Исследование спермы",path:"sperm-examination",level:1,parentId:"urology-andrology"},"ultrasound-urological":{id:"ultrasound-urological",title:"УЗИ урологическое",path:"ultrasound-urological",level:1,parentId:"urology-andrology"},cystoscopy:{id:"cystoscopy",title:"Цистоскопия",path:"cystoscopy",level:1,parentId:"urology-andrology"},"testicular-epididymal-biopsy":{id:"testicular-epididymal-biopsy",title:"Биопсия яичка/придатка",path:"testicular-epididymal-biopsy",level:1,parentId:"urology-andrology"},"IVF-using-ICSI":{id:"IVF-using-ICSI",title:"ЭКО методом ИКСИ",path:"IVF-using-ICSI",level:1,parentId:"urology-andrology"},"urological-operations":{id:"urological-operations",title:"Урологические операции",path:"urological-operations",level:0,pages:["varicocelectomy","circumcisio"]},varicocelectomy:{id:"varicocelectomy",title:"Варикоцелэктомия",path:"varicocelectomy",level:1,parentId:"urological-operations"},circumcisio:{id:"circumcisio",title:"Циркумцизио (обрезание крайней плоти)",path:"circumcisio",level:1,parentId:"urological-operations"},"traumatology-orthopedics":{id:"traumatology-orthopedics",title:"Травматология и ортопедия",path:"traumatology-orthopedics",level:0},"knee-joint-arthroscopy":{id:"knee-joint-arthroscopy",title:"Артроскопия коленного сустава",path:"knee-joint-arthroscopy",level:0},"ultrasound-scan":{id:"ultrasound-scan",title:"Ультразвуковые исследования",path:"ultrasound-scan",level:0,pages:["expert-class-ultrasound","ultrasound-for-infertility","ultrasound-of-the-abdominal-organs","ultrasound-of-the-prostate-gland","4d-ultrasound","how-to-prepare-for-ultrasound"]},"expert-class-ultrasound":{id:"expert-class-ultrasound",title:"УЗИ экспертного класса",path:"expert-class-ultrasound",level:1,parentId:"ultrasound-scan"},"ultrasound-for-infertility":{id:"ultrasound-for-infertility",title:"УЗИ при бесплодии",path:"ultrasound-for-infertility",level:1,parentId:"ultrasound-scan"},"ultrasound-of-the-abdominal-organs":{id:"ultrasound-of-the-abdominal-organs",title:"УЗИ органов брюшной полости",path:"ultrasound-of-the-abdominal-organs",level:1,parentId:"ultrasound-scan"},"ultrasound-of-the-prostate-gland":{id:"ultrasound-of-the-prostate-gland",title:"УЗИ предстательной железы (ТРУЗИ - трансректально)",path:"ultrasound-of-the-prostate-gland",level:1,parentId:"ultrasound-scan"},"4d-ultrasound":{id:"4d-ultrasound",title:"4D УЗИ",path:"4d-ultrasound",level:1,parentId:"ultrasound-scan"},"how-to-prepare-for-ultrasound":{id:"how-to-prepare-for-ultrasound",title:"Как подготовиться к УЗИ",path:"how-to-prepare-for-ultrasound",level:1,parentId:"ultrasound-scan"},"shock-wave-therapy":{id:"shock-wave-therapy",title:"Ударно-волновая терапия",path:"shock-wave-therapy",level:0},"functional-diagnostics":{id:"functional-diagnostics",title:"Функциональная диагностика",path:"functional-diagnostics",level:0},"genetic-tests":{id:"genetic-tests",title:"Генетические тесты",path:"genetic-tests",level:0,pages:["prenatal-diagnosis","reproduction-disorder","establishment-of-paternity-and-relationship","hereditary-diseases-and-chromosomal-pathology","oncogenetics"]},"prenatal-diagnosis":{id:"prenatal-diagnosis",title:"Пренатальная диагностика",path:"prenatal-diagnosis",level:1,parentId:"genetic-tests"},"reproduction-disorder":{id:"reproduction-disorder",title:"Нарушение репродукции",path:"reproduction-disorder",level:1,parentId:"genetic-tests"},"establishment-of-paternity-and-relationship":{id:"establishment-of-paternity-and-relationship",title:"Установление отцовства и родства",path:"establishment-of-paternity-and-relationship",level:1,parentId:"genetic-tests"},"hereditary-diseases-and-chromosomal-pathology":{id:"hereditary-diseases-and-chromosomal-pathology",title:"Наследственные заболевания и хромосомная патология",path:"hereditary-diseases-and-chromosomal-pathology",level:1,parentId:"genetic-tests"},oncogenetics:{id:"oncogenetics",title:"Онкогенетика",path:"oncogenetics",level:1,parentId:"genetic-tests"},therapy:{id:"therapy",title:"Терапия",path:"therapy",level:0},endocrinology:{id:"endocrinology",title:"Эндокринология",path:"endocrinology",level:0}},topLevelIds:{descktop:["infertility-diagnosis","infertility-treatment","gynecology","gynecological-operations","pregnant-women-services","urology-andrology","urological-operations","traumatology-orthopedics","knee-joint-arthroscopy","ultrasound-scan","shock-wave-therapy","functional-diagnostics","genetic-tests","therapy","endocrinology"],mobile:["services","prices","doctors","timetable","eco-oms","faq","about-us","contacts"]}}}},j6=(e=I6,t)=>e,P1="/assets/images/single-img/desctop/childrens.webp",$1="/assets/images/single-img/mobile/children.webp",_6={pageTopPart:{pageName:"price",srcDesktop:P1,srcMobile:$1,title:"Цены"},tabs:[{title:"Новый город (пр-т Врача Сурова, д.4)",status:"surova"},{title:"Центр (ул. Бебеля, 1А)",status:"bebelya"},{title:"Генетические исследования",status:"geneticResearch"}],navigation:{surova:[{name:"1. Консультационно-диагностическое отделение",href:"Раздел 1"},{name:"1.1 Врачебные лечебно-диагностические услуги",href:"1.1"},{name:"1.2 Процедуры и лечебные манипуляции",href:"1.2"},{name:"1.2.1 Гинекология и урология",href:"1.2.1"},{name:"1.2.2 Травматология",href:"1.2.2"},{name:"1.3 Услуги отделения УЗД (ультразвуковой диагностики)",href:"1.3"},{name:"1.3.1 Акушерство и гинекология",href:"1.3.1"},{name:"1.3.2 УЗИ органов малого таза, брюшной полости, забрюшинного пространства и мочеполовой системы",href:"1.3.2"},{name:"1.3.3 Поверхностные структуры",href:"1.3.3"},{name:"1.3.4 Сердечно-сосудистая система",href:"1.3.4"},{name:"1.3.5 Ультрозвуковая диагностика (дети)",href:"1.3.5"},{name:"1.4 Функциональная диагностика",href:"1.4"},{name:"2. Оперативное лечение",href:"Раздел 2"},{name:"2.1 Гинекология и урология",href:"2.1"},{name:"2.2 Травматология",href:"2.2"},{name:"3. Лаборатория ВРТ (Вспомогательные репродуктивные технологии)",href:"Раздел 3"},{name:"4. Лабораторные исследования",href:"Раздел 4"}],bebelya:[{name:"1. Консультационно-диагностическое отделение",href:"Раздел 1"},{name:"1.1 Врачебные лечебно-диагностические услуги",href:"1.1"},{name:"1.2 Процедуры и лечебные манипуляции",href:"1.2"},{name:"1.2.1 Гинекология и урология",href:"1.2.1"},{name:"1.2.2 Травматология",href:"1.2.2"},{name:"1.3 Услуги отделения УЗД (ультразвуковой диагностики)",href:"1.3"},{name:"1.3.1 Акушерство и гинекология",href:"1.3.1"},{name:"1.3.2 УЗИ органов малого таза, брюшной полости, забрюшинного пространства и мочеполовой системы",href:"1.3.2"},{name:"1.3.3 Поверхностные структуры",href:"1.3.3"},{name:"1.3.4 Сердечно-сосудистая система",href:"1.3.4"},{name:"1.3.5 Ультрозвуковая диагностика (дети)",href:"1.3.5"},{name:"1.4 Функциональная диагностика",href:"1.4"},{name:"2. Лаборатория ВРТ (вспомогательные репродуктивные технологии)",href:"Раздел 2"},{name:"3. Лабораторные исследования",href:"Раздел 3"}]},content:{surova:[{firstCell:"Раздел 1",secondCell:"100",thirdCell:"Консультационно - диагностическое отделение",fourthСell:"",chapter:!0},{firstCell:"1.1",secondCell:"",thirdCell:"Врачебные лечебно-диагностические услуги",fourthСell:"",subChapter:!0},{firstCell:"В01.001.001",secondCell:"100.01",thirdCell:"Прием врача-акушера-гинеколога первичный (комплексный осмотр репродуктолога: консультация врача, инструментальный осмотр, УЗИ обследование)",fourthСell:"1 800,00"},{firstCell:"В01.001.001",secondCell:"100.02",thirdCell:"Прием врача-акушера-гинеколога первичный (репродуктолог)",fourthСell:"1 100,00"},{firstCell:"В01.001.001",secondCell:"100.02.01",thirdCell:"Прием врача-акушера-гинеколога первичный (репродуктолог, кандидат медицинских наук)",fourthСell:"1200,00"},{firstCell:"B01.001.002",secondCell:"100.03",thirdCell:"Прием врача-акушера-гинеколога повторный (репродуктолог)",fourthСell:"1 000,00"},{firstCell:"B01.001.002",secondCell:"100.03.01",thirdCell:"Прием врача-акушера-гинеколога повторный (репродуктолог, кандидат медицинских наук)",fourthСell:"1100,00"},{firstCell:"В01.001.001",secondCell:"100.05",thirdCell:"Прием врача-акушера - гинеколога первичный (Комплекс: консультация врача, обследование в смотровом кабинете, инструментальный осмотр, ультразвуковое исследование)",fourthСell:"1700,00"},{firstCell:"В01.001.001",secondCell:"100.06",thirdCell:"Прием врача-акушера - гинеколога первичный",fourthСell:"1000,00"},{firstCell:"В01.001.001",secondCell:"100.06.1",thirdCell:"Прием врача-акушера - гинеколога  первичный (кандидат медицинских наук)",fourthСell:"1100,00"},{firstCell:"B01.001.002",secondCell:"100.07",thirdCell:"Прием врача-акушера - гинеколога повторный",fourthСell:"900,00"},{firstCell:"B01.001.002",secondCell:"100.07.1",thirdCell:"Прием врача-акушера - гинеколога повторный (кандидат медицинских услуг)",fourthСell:"1000,00"},{firstCell:"B01.001.002",secondCell:"100.27",thirdCell:"Прием врача-акушера-гинеколога повторный  (выписка из амбулаторной карты)",fourthСell:"600,00"},{firstCell:"B01.053.001 ",secondCell:"100.08",thirdCell:"Прием врача-уролога первичный",fourthСell:"950,00"},{firstCell:"B01.053.001",secondCell:"100.08.1",thirdCell:"Прием врача-уролога первичный (кандидат медицинских наук)",fourthСell:"1050,00"},{firstCell:"B01.053.001",secondCell:"100.08.2",thirdCell:"Прием врача-уролога первичный (доктор медицинских наук)",fourthСell:"2000,00"},{firstCell:"B01.053.002 ",secondCell:"100.09",thirdCell:"Прием врача-уролога повторный",fourthСell:"750,00"},{firstCell:"B01.053.002",secondCell:"100.09.1",thirdCell:"Прием врача-уролога повторный (кандидат медицинских наук)",fourthСell:"800,00"},{firstCell:"B01.053.002",secondCell:"100.09.2",thirdCell:"Прием врача-уролога повторный (доктор медицинских наук)",fourthСell:"1930,00"},{firstCell:"B01.015.001 ",secondCell:"Б100.12",thirdCell:"Прием врача-кардиолога (терапевта)  первичный ",fourthСell:"1100,00"},{firstCell:"B01.015.002",secondCell:"Б100.12.1",thirdCell:"Прием врача-кардиолога (терапевта) повторный",fourthСell:"1000,00"},{firstCell:"B01.058.001 ",secondCell:"100.13",thirdCell:"Прием врача-эндокринолога первичный",fourthСell:"1000,00"},{firstCell:"B01.058.002",secondCell:"100.13.1",thirdCell:"Прием врача-эндокринолога повторный",fourthСell:"900,00"},{firstCell:"B01.047.001 ",secondCell:"100.15",thirdCell:"Прием врача-терапевта первичный",fourthСell:"900,00"},{firstCell:"B01.047.002 ",secondCell:"100.15.1",thirdCell:"Прием врача-терапевта повторный",fourthСell:"800,00"},{firstCell:"B01.050.001 ",secondCell:"Б100.41",thirdCell:"Прием врача-травматолога-ортопеда первичный",fourthСell:"1000,00"},{firstCell:"B01.050.002",secondCell:"Б100.41.1",thirdCell:"Прием врача-травматолога-ортопеда повторный",fourthСell:"900,00"},{firstCell:"B01.027.002 ",secondCell:"Б100.42",thirdCell:"Прием врача-онколога первичный",fourthСell:"1000,00"},{firstCell:"B01.027.003",secondCell:"Б100.42.1",thirdCell:"Прием врача-онколога повторный",fourthСell:"900,00"},{firstCell:"",secondCell:"",thirdCell:"Приемы врачей-специалистов перед вводом в программу ЭКО по ОМС",fourthСell:"",title:!0},{firstCell:"B01.001.002",secondCell:"100.45",thirdCell:"Прием врача-акушера-гинеколога повторный (оформление репродуктологом выписки на проведение ЭКО по ОМС)",fourthСell:"3000,00"},{firstCell:"B01.001.002",secondCell:"100.45.1",thirdCell:"Прием врача-акушера-гинеколога повторный (срочное оформление репродуктологом выписки на проведение ЭКО по ОМС)",fourthСell:"5000,00"},{firstCell:"B01.047.002",secondCell:"100.17",thirdCell:"Консультация врача-терапевта (допуск к программе ЭКО/гистероскопии)",fourthСell:"800,00"},{firstCell:"",secondCell:"",thirdCell:"Консультации врачей-специалистов по результатам обследования",fourthСell:"",title:!0},{firstCell:"B01.001.002",secondCell:"100.38",thirdCell:"Консультация врача-акушера-гинеколога повторная (по результатам обследования)",fourthСell:"500,00"},{firstCell:"B01.047.002",secondCell:"100.38.1",thirdCell:"Консультация врача-терапевта повторная (по результатам обследования)",fourthСell:"500,00"},{firstCell:"B01.053.002",secondCell:"100.38.2",thirdCell:"Консультация врача-уролога повторная (по результатам обследования)",fourthСell:"500,00"},{firstCell:"",secondCell:"",thirdCell:"Ведение беременности",fourthСell:"",title:!0},{firstCell:"B01.001.004",secondCell:"100.21",thirdCell:"Прием врача-акушера-гинеколога беременной первичный (Комплекс: консультация врача, обследование в смотровом кабинете, инструментальный осмотр, для беременных, не состоящих на учете в клинике)",fourthСell:"1300,00"},{firstCell:"B01.001.005",secondCell:"100.21.1",thirdCell:"Прием врача-акушера-гинеколога беременной повторный  (Комплекс: :консультация врача, обследование в смотровом кабинете, инструментальный осмотр, для беременных, не состоящих на учете в клинике)",fourthСell:"950,00"},{firstCell:"B01.001.004",secondCell:"100.22",thirdCell:"Прием врача-акушера-гинеколога беременной первичный (Программа первичного обследования для постановки на учет и ведение беременности: скрининг УЗИ, скрининг биохимический, полное обследование и осмотр специалистов согласно приказу МЗ РФ)",fourthСell:"15000,00"},{firstCell:"B01.001.005 ",secondCell:"100.23",thirdCell:"Прием врача-акушера-гинеколога беременной повторный (Ведение беременности 1 триместр: скрининг УЗИ, скрининг биохимический, полное обследование и осмотр специалистов согласно приказу МЗ РФ, 2 посещения по 30 мин.)",fourthСell:"8000,00"},{firstCell:"B01.001.005",secondCell:"100.24",thirdCell:"Прием врача-акушера-гинеколога беременной повторный (Ведение беременности 2 триместр: скрининг УЗИ, скрининг биохимический, полное обследование согласно приказу МЗ РФ, 5 посещений по 30 мин.)",fourthСell:"13000,00"},{firstCell:"B01.001.005",secondCell:"100.25",thirdCell:"Прием врача-акушера-гинеколога беременной повторный (Ведение беременности 3 триместр: скрининг УЗИ, полное обследование, а так же: КТГ плода и осмотр специалистов согласно приказу МЗ РФ, 8 посещений по 30 мин.)",fourthСell:"26000,00"},{firstCell:"",secondCell:"",thirdCell:"Дистанционное консультирование",fourthСell:"",title:!0},{firstCell:"В01.001.001",secondCell:"ДИС100.02",thirdCell:"Консультация врача-акушера-гинеколога первичная (репродуктолог, дистанционное информирование)",fourthСell:"500,00"},{firstCell:"В01.001.001",secondCell:"ДИС100.02.01",thirdCell:"Консультация врача-акушера-гинеколога  первичная (репродуктолог, кандидат медицинских наук, дистанционное информирование)",fourthСell:"600,00"},{firstCell:"B01.001.002",secondCell:"ДИС100.03",thirdCell:"Консультация врача-акушера-гинеколога повторная (репродуктолог, дистанционная)",fourthСell:"850,00"},{firstCell:"B01.001.002",secondCell:"ДИС100.03.01",thirdCell:"Консультация врача-акушера-гинеколога повторная (репродуктолог, кандидат медицинских наук, дистанционная)",fourthСell:"950,00"},{firstCell:"В01.001.001",secondCell:"ДИС100.06",thirdCell:"Консультация врача-акушера - гинеколога первичная (дистанционное информирование)",fourthСell:"500,00"},{firstCell:"B01.001.002",secondCell:"ДИС100.07",thirdCell:"Консультация врача-акушера - гинеколога повторная (дистанционная)",fourthСell:"800,00"},{firstCell:"B01.053.001",secondCell:"ДИС100.08",thirdCell:"Консультация врача-уролога первичная (дистанционное информирование)",fourthСell:"500,00"},{firstCell:"B01.053.002",secondCell:"ДИС100.09",thirdCell:"Консультация врача-уролога повторная (дистанционная)",fourthСell:"700,00"},{firstCell:"B01.053.002",secondCell:"ДИС100.09.2",thirdCell:"Консультация врача-уролога повторная (дистанционная, доктор медицинских наук)",fourthСell:"1350,00"},{firstCell:"B01.058.001",secondCell:"ДИС100.13",thirdCell:"Консультация врача-эндокринолога первичная (дистанционное информирование)",fourthСell:"500,00"},{firstCell:"B01.058.002",secondCell:"ДИС100.13.1",thirdCell:"Консультация врача-эндокринолога повторная (дистанционная)",fourthСell:"700,00"},{firstCell:"B01.047.002",secondCell:"ДИС100.15.1",thirdCell:"Консультация врача-терапевта повторная (дистанционная)",fourthСell:"600,00"},{firstCell:"",secondCell:"",thirdCell:"Функциональное обследование",fourthСell:"",title:!0},{firstCell:"А01.30",secondCell:"Б100.44",thirdCell:"Пред-послерейсовый осмотр водителя",fourthСell:"100"},{firstCell:"1.2",secondCell:"100",thirdCell:"Процедуры и лечебные манипуляции",fourthСell:"",subChapter:!0},{firstCell:"1.2.1",secondCell:"",thirdCell:"Гинекология и урология",fourthСell:"",subSubChapter:!0},{firstCell:"A03.20.001",secondCell:"200.06",thirdCell:"Кольпоскопия (исследование шейки матки методом видеокольпоскопии)",fourthСell:"1050,00"},{firstCell:"A03.20.001",secondCell:"200.09",thirdCell:"Кольпоскопия",fourthСell:"1000,00"},{firstCell:"A03.20.005",secondCell:"200.08",thirdCell:"Вульвоскопия",fourthСell:"850,00"},{firstCell:"A16.20.036.001",secondCell:"200.30",thirdCell:"Электродиатермоконизация шейки матки (аргоноплазменная конизации)",fourthСell:"3500,00"},{firstCell:"A16.20.036.001",secondCell:"200.31",thirdCell:"Электродиатермоконизация шейки матки (радиоволновая конизация)",fourthСell:"3300,00"},{firstCell:"A16.20.090",secondCell:"200.22",thirdCell:"Снятие швов с шейки матки ",fourthСell:"850,00"},{firstCell:"A16.30.069",secondCell:"200.22.1",thirdCell:"Снятие послеоперационных швов (лигатур)",fourthСell:"850,00"},{firstCell:"A11.28.008",secondCell:"200.01",thirdCell:"Инстилляция мочевого пузыря  (капельное введение лекарственных средств в мочевой пузырь)",fourthСell:"800,00"},{firstCell:"A11.20.024",secondCell:"200.01.1",thirdCell:"Введение лекарственных препаратов интравагинально (в цервикальный канал)",fourthСell:"850,00"},{firstCell:"A11.20.024",secondCell:"200.01.2",thirdCell:"Введение лекарственных препаратов интравагинально  (введение препарата Антиадгезин 3г (противоспаечный гель) в полость матки, включая стоимость препарата)",fourthСell:"7000,00"},{firstCell:"A11.20.024",secondCell:"200.01.3",thirdCell:"Введение лекарственных препаратов интравагинально  (введение препарата Антиадгезин 5г (противоспаечный гель) в полость матки, включая стоимость препарата)",fourthСell:"7500,00"},{firstCell:"A11.20.024",secondCell:"200.55",thirdCell:"Введение лекарственных препаратов интравагинально  (введение препарата Мезогель в полость матки,  включая стоимость препарата)",fourthСell:"6500,00"},{firstCell:"A11.20.024",secondCell:"200.29",thirdCell:"Введение лекарственных препаратов интравагинально (в полость матки, без стоимости препарата)",fourthСell:"850,00"},{firstCell:"A11.20.024",secondCell:"200.29.1",thirdCell:"Введение лекарственных препаратов интравагинально (введение препарата Инстиллагель в полость матки, включая стоимость препарата)",fourthСell:"1200,00"},{firstCell:"A11.20.024",secondCell:"200.65",thirdCell:"Введение лекарственных препаратов интравагинально (ванночки, инстилляция препарата в цервикальный канал, без стоимости лекарственного препарата)",fourthСell:"700,00"},{firstCell:"A11.20.003 ",secondCell:"200.11",thirdCell:"Биопсия тканей матки (взятие биопсийного материала с шейки матки в амбулаторных условиях с гистологическим исследованием)",fourthСell:"3000,00"},{firstCell:"А11.20.",secondCell:"200.12",thirdCell:"Получение аспирата эндометрия на гистологическое исследование",fourthСell:"4500,00"},{firstCell:"А11.20.",secondCell:"200.13",thirdCell:"Получение аспирата эндометрия для бактериологического исследования",fourthСell:"4500,00"},{firstCell:"A11.20.005 ",secondCell:"200.17",thirdCell:"Получение влагалищного мазка",fourthСell:"300,00"},{firstCell:"A11.20.014 ",secondCell:"200.18",thirdCell:"Введение внутриматочной спирали  (под УЗИ контролем, без стоимости внутриматочной спирали)",fourthСell:"2000,00"},{firstCell:"A11.20.015",secondCell:"200.19",thirdCell:"Удаление внутриматочной спирали ",fourthСell:"1000,00"},{firstCell:"A11.20.013",secondCell:"200.54",thirdCell:"Тампонирование лечебное влагалища (без стоимости препаратов)",fourthСell:"250,00"},{firstCell:"A11.20.041",secondCell:"200.56",thirdCell:"Введение акушерского разгружающего поддерживающего кольца (пессария) (со стоимостью пессария)",fourthСell:"9000,00"},{firstCell:"A11.20.041",secondCell:"200.56.1",thirdCell:"Введение акушерского разгружающего поддерживающего кольца (пессария) (без стоимости пессария)",fourthСell:"1000,00"},{firstCell:"A11.20.041 ",secondCell:"200.57",thirdCell:"Введение акушерского разгружающего поддерживающего кольца (пессария) (примерка пессария) ",fourthСell:"300,00"},{firstCell:"A11.20.030",secondCell:"200.67",thirdCell:'Внутриматочное введение эмбриона ("Пробный" перенос эмбриона в полость матки)',fourthСell:"2900,00"},{firstCell:"A11.21.004",secondCell:"200.04",thirdCell:"Сбор секрета простаты ",fourthСell:"750,00"},{firstCell:"A11.28.009",secondCell:"200.01.4",thirdCell:"Инстилляция  уретры (капельное введение лекарственных средств в уретру)",fourthСell:"800,00"},{firstCell:"A11.28.009",secondCell:"200.29.2",thirdCell:"Инстилляция  уретры (в уретру, без стоимости препарата)",fourthСell:"800,00"},{firstCell:"A11.28.006",secondCell:"200.52",thirdCell:"Получение уретрального отделяемого",fourthСell:"300,00"},{firstCell:"A16.01.017",secondCell:"200.24",thirdCell:"Удаление доброкачественных новообразований кожи  (удаление единичных папиллом/кондилом половых органов радиоволновым методом)",fourthСell:"2500,00"},{firstCell:"A16.01.017 ",secondCell:"200.25",thirdCell:"Удаление доброкачественных новообразований кожи (удаление множественных папиллом/кондилом половых органов радиоволновым методом)",fourthСell:"4500,00"},{firstCell:"A16.01.017",secondCell:"200.26",thirdCell:"Удаление доRC:R[20]Cброкачественных новообразований кожи (удаление папиллом/кондилом анагенитальной области)",fourthСell:"5700,00"},{firstCell:"A16.01.017",secondCell:"200.27",thirdCell:"Удаление доброкачественных новообразований кожи (аргоноплазменная вапоризация кондилом половых органов)",fourthСell:"4500,00"},{firstCell:"A16.01.017",secondCell:"200.28",thirdCell:"Удаление доброкачественных новообразований кожи (аргоноплазменная вапоризация папиллом/кондилом анагенитальной области)",fourthСell:"5800,00"},{firstCell:"A16.01.004",secondCell:"200.39",thirdCell:"Хирургическая обработка раны или инфицированной ткани  (обработка раны и наложение асептической повязки)",fourthСell:"250,00"},{firstCell:"A16.01.004",secondCell:"200.21",thirdCell:"Хирургическая обработка раны или инфицированной ткани (обработка швов на шейке матки, влагалище)",fourthСell:"750,00"},{firstCell:"A16.01.004",secondCell:"200.66",thirdCell:"Хирургическая обработка раны или инфицированной ткани (послеоперационная обработка шейки матки)",fourthСell:"350,00"},{firstCell:"A17.30.021",secondCell:"200.14",thirdCell:"Электрокоагуляция (аргоноплазменная коагуляция шейки матки)",fourthСell:"2700,00"},{firstCell:"A17.30.021",secondCell:"200.15",thirdCell:"Электрокоагуляция (радиоволновая коагуляция шейки матки)",fourthСell:"2500,00"},{firstCell:"A21.21.001",secondCell:"200.05",thirdCell:"Массаж простаты",fourthСell:"800,00"},{firstCell:"A25.20.001",secondCell:"200.15.1",thirdCell:"Назначение лекарственных препаратов при заболеваниях женских половых органов (диагностика и лечение патологии шейки матки)",fourthСell:"3670,00"},{firstCell:"A11.02.002",secondCell:"200.33",thirdCell:"Внутримышечное введение лекарственных препаратов  (без стоимости препаратов)",fourthСell:"120,00"},{firstCell:"A11.12.003",secondCell:"200.32",thirdCell:"Внутривенное введение лекарственных препаратов  (без стоимости одноразовой иглы с адаптером и лекарственных препаратов)",fourthСell:"200,00"},{firstCell:"A11.12.003.001",secondCell:"200.34",thirdCell:"Внутривенное введение лекарственных препаратов (включая стоимость одноразовой иглы с адаптером, без стоимости лекарственных препаратов)",fourthСell:"300,00"},{firstCell:"A11.12.003.001",secondCell:"200.34.1",thirdCell:"Внутривенное введение лекарственных препаратов (включая стоимость одноразовой системы, окситоцина 5МЕ/1 мл , натрия хлорида 200 мл)",fourthСell:"500,00"},{firstCell:"A11.12.003.001",secondCell:"200.34.2",thirdCell:"Внутривенное введение лекарственных препаратов (без стоимости одноразовой системы, без стоимости лекарственных препаратов)",fourthСell:"400,00"},{firstCell:"A11.12.003.001",secondCell:"200.34.3",thirdCell:"Внутривенное введение лекарственных препаратов (включая стоимость одноразовой системы, без стоимости лекарственных препаратов)",fourthСell:"450,00"},{firstCell:"A11.12.009",secondCell:"01-00-001",thirdCell:"Взятие крови из периферической вены (с использованием вакуумной системы)",fourthСell:"150,00"},{firstCell:"A11.08.010.001",secondCell:"01-00-002",thirdCell:"Получение мазков со слизистой оболочки носоглотки",fourthСell:"100,00"},{firstCell:"A11.08.010.002",secondCell:"01-00-003",thirdCell:"Получение мазков со слизистой оболочки ротоглотки",fourthСell:"100,00"},{firstCell:"A11.21.005",secondCell:"600.72",thirdCell:"Биопсия предстательной железы (под ТрУЗИ контролем и гистология)",fourthСell:"6600,00"},{firstCell:"А23.02",secondCell:"200.23",thirdCell:"Постановка экспресс-теста на беременность",fourthСell:"220,00"},{firstCell:"1.2.2",secondCell:"",thirdCell:"Травматология",fourthСell:"",subSubChapter:!0},{firstCell:"A11.04.004",secondCell:"200.68",thirdCell:"Внутрисуставное введение лекарственных препаратов  (PRP терапия)",fourthСell:"8000,00"},{firstCell:"A11.04.005",secondCell:"200.68.1",thirdCell:"Пункция синовиальной сумки сустава",fourthСell:"900,00"},{firstCell:"A11.04.006",secondCell:"200.68.2",thirdCell:"Околосуставное введение лекарственных препаратов (без стоимости препаратов)",fourthСell:"900,00"},{firstCell:"A11.04.006",secondCell:"200.68.3",thirdCell:"Околосуставное введение лекарственных препаратов (со стоимостью препарата)",fourthСell:"1500,00"},{firstCell:"A16.04.051",secondCell:"200.68.4",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости ( со стоимостью препарата Русвиск 1,6% 2 мл.)",fourthСell:"10000,00"},{firstCell:"A16.04.051",secondCell:"200.68.4.1",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости ( со стоимостью препарата Русвиск 2,2% 3 мл.)",fourthСell:"15000,00"},{firstCell:"A16.04.051",secondCell:"200.68.4.2",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости ( со стоимостью препарата Русвиск 2,2% 5 мл.)",fourthСell:"20000,00"},{firstCell:"A16.04.051",secondCell:"200.68.5",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости  ( со стоимостью препарата Армавискон 1,5 % 2мл.)",fourthСell:"8500,00"},{firstCell:"A16.04.051",secondCell:"200.68.6",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости ( со стоимостью препарата Гиапро 1,5 % 30 мг/2 мл.)",fourthСell:"10000,00"},{firstCell:"A16.04.051",secondCell:"200.68.6.1",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости ( со стоимостью препарата Гиапро 2 % 40 мг/2 мл.)",fourthСell:"15000,00"},{firstCell:"A16.04.051",secondCell:"200.68.6.2",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости ( со стоимостью препарата Гиапро Макс 2 % 40 мг/2 мл.)",fourthСell:"20000,00"},{firstCell:"A16.30.069",secondCell:"200.22.1",thirdCell:"Снятие послеоперационных швов (лигатур)",fourthСell:"850,00"},{firstCell:"A15.04.003",secondCell:"200.69",thirdCell:"Наложение повязки при операциях на суставах",fourthСell:"550,00"},{firstCell:"1.3",secondCell:"",thirdCell:"Услуги отделения УЗД (ультразвуковой диагностики)",fourthСell:"",subChapter:!0},{firstCell:"1.3.1",secondCell:"",thirdCell:"Акушерство и гинекология",fourthСell:"",subSubChapter:!0},{firstCell:"A04.20.001.001",secondCell:"600.01",thirdCell:"Ультразвуковое исследование матки и придатков трансвагиальное",fourthСell:"1000,00"},{firstCell:"A04.20.001",secondCell:"600.02",thirdCell:"Ультразвуковое исследование матки и придатков трансабдоминальное",fourthСell:"700,00"},{firstCell:"A04.20.001.002",secondCell:"600.04",thirdCell:"Ультразвуковое исследование матки и придатков трансректальное",fourthСell:"900,00"},{firstCell:"A04.20.001 A04.20.001.001",secondCell:"600.05",thirdCell:"Ультразвуковое исследование матки и придатков трансвагиальное/ трансабдоминальное (в динамике, в течение 1 месяца)",fourthСell:"700,00"},{firstCell:"B01.052.001",secondCell:"600.06",thirdCell:"Осмотр врача ультразвуковой диагностики  (УЗ-мониторинг овуляции: включает оценку эндометрия и фолликулярного аппарата яичников, на аппарате экспертного класса)",fourthСell:"800,00"},{firstCell:"B01.001.002",secondCell:"200.16",thirdCell:"Прием врача-акушера-гинеколога повторный (ультразвуковой мониторинг овуляции: включает оценку эндометрия и фолликулярного аппарата яичников)",fourthСell:"700,00"},{firstCell:"A04.20.001.004",secondCell:"600.07",thirdCell:"Ультразвуковое исследование шейки матки (УЗ-цервикометрия)",fourthСell:"800,00"},{firstCell:"A04.30.010",secondCell:"600.08",thirdCell:"Ультразвуковое исследование органов малого таза (комплексное) (трехмерная реконструкция органов малого таза (у женщин)",fourthСell:"900,00"},{firstCell:"",secondCell:"",thirdCell:"Исследования при сроке беременности до 11 недель",fourthСell:"",title:!0},{firstCell:"A04.30.001",secondCell:"600.09",thirdCell:"Ультразвуковое исследование плода  (при сроке беременности до 11 недель)",fourthСell:"1000,00"},{firstCell:"A04.30.001",secondCell:"600.10",thirdCell:"Ультразвуковое исследование плода (при сроке беременности до 11 недель, многоплодная беременность (двойня)",fourthСell:"1100,00"},{firstCell:"A04.30.001",secondCell:"600.11",thirdCell:"Ультразвуковое исследование плода (при сроке беременности до 11 недель, многоплодная беременность (тройня)",fourthСell:"1200,00"},{firstCell:"",secondCell:"",thirdCell:"Исследования при сроке беременности 11-18 недель",fourthСell:"",title:!0},{firstCell:"A04.30.001",secondCell:"600.15",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  11-18 недель, демонстрация родственникам и фотография в подарок)",fourthСell:"1300,00"},{firstCell:"A04.30.001",secondCell:"600.16",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  11-18 недель, многоплодная беременность (двойня), демонстрация родственникам и фотография в подарок)",fourthСell:"1400,00"},{firstCell:"A04.30.001",secondCell:"600.17",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  11-18 недель многоплодная беременность (тройня), демонстрация родственникам и фотография в подарок)",fourthСell:"1450,00"},{firstCell:"A04.30.001",secondCell:"600.18",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  11-18 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса)",fourthСell:"1500,00"},{firstCell:"A04.30.001",secondCell:"600.19",thirdCell:"Ультразвуковое исследование плода ( при сроке беременности  11-18 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса, многоплодная беременность (двойня)",fourthСell:"1650,00"},{firstCell:"A04.30.001",secondCell:"600.20",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  11-18 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса, многоплодная беременность (тройня)",fourthСell:"1700,00"},{firstCell:"A04.30.001",secondCell:"600.24",thirdCell:"Ультразвуковое исследование плода  (при сроке беременности до 18 недель, в режиме 3D/4D, демонстрация родственникам, запись на DVD )",fourthСell:"2400,00"},{firstCell:"A04.30.001",secondCell:"600.25",thirdCell:"Ультразвуковое исследование плода (при сроке беременности до 18 недель (двойня), в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"3000,00"},{firstCell:"A04.30.001",secondCell:"600.26",thirdCell:"Ультразвуковое исследование плода (при сроке беременности до 18 недель (тройня), в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"3300,00"},{firstCell:"A04.12.024",secondCell:"600.27",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности до 18 недель, цветное картирование)",fourthСell:"1000,00"},{firstCell:"A04.12.024.001",secondCell:"600.28",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности до 18 недель (двойня), цветное картирование)",fourthСell:"1050,00"},{firstCell:"A04.12.024.002",secondCell:"600.29",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности до 18 недель (тройня), цветное картирование)",fourthСell:"1100,00"},{firstCell:"",secondCell:"",thirdCell:"Исследования при сроке беременности  18-30 недель",fourthСell:"",title:!0},{firstCell:"A04.30.001",secondCell:"600.30",thirdCell:"Ультразвуковое исследование плода (при сроке беременности 18-30 недель, демонстрация родственникам и фотография в подарок) ",fourthСell:"1500,00"},{firstCell:"A04.30.001",secondCell:"600.31",thirdCell:"Ультразвуковое исследование плода (при сроке беременности 18-30 недель (двойня), демонстрация родственникам и фотография в подарок)",fourthСell:"1600,00"},{firstCell:"A04.30.001",secondCell:"600.32",thirdCell:"Ультразвуковое исследование плода (при сроке беременности 18-30 недель (тройня), демонстрация родственникам и фотография в подарок)",fourthСell:"1700,00"},{firstCell:"A04.30.001",secondCell:"600.33",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  18-30 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса)",fourthСell:"1700,00"},{firstCell:"A04.30.001",secondCell:"600.34",thirdCell:"Ультразвуковое исследование плода ( при сроке беременности  18-30 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса, многоплодная беременность (двойня)",fourthСell:"1900,00"},{firstCell:"A04.30.001",secondCell:"600.35",thirdCell:"Ультразвуковое исследование плода (при сроке беременности 18-30 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса, многоплодная беременность (тройня)",fourthСell:"2000,00"},{firstCell:"A04.30.001",secondCell:"600.39",thirdCell:"Ультразвуковое исследование плода  (при сроке беременности 18-30 недель, в режиме 3D/4D, демонстрация родственникам, запись на DVD ) ",fourthСell:"2400,00"},{firstCell:"A04.30.001",secondCell:"600.40",thirdCell:"Ультразвуковое исследование плода (при сроке беременности 18-30 недель (двойня), в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"3000,00"},{firstCell:"A04.30.001",secondCell:"600.41",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  18-30  недель (тройня), в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"3500,00"},{firstCell:"A04.12.024",secondCell:"600.42",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности 18-30 недель, цветное картирование)",fourthСell:"1000,00"},{firstCell:"A04.12.024",secondCell:"600.43",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности 18-30 недель (двойня), цветное картирование)",fourthСell:"1100,00"},{firstCell:"A04.12.024",secondCell:"600.44",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности 18-30 недель (тройня), цветное картирование)",fourthСell:"1200,00"},{firstCell:"",secondCell:"",thirdCell:"Исследования при сроке беременности более 30 недель",fourthСell:"",title:!0},{firstCell:"A04.30.001",secondCell:"600.45",thirdCell:"Ультразвуковое исследование плода (при сроке беременности более 30 недель, демонстрация родственникам и фотография в подарок)",fourthСell:"1300,00"},{firstCell:"A04.30.001",secondCell:"600.46",thirdCell:"Ультразвуковое исследование плода (при сроке беременности более 30 недель (двойня), демонстрация родственникам и фотография в подарок)",fourthСell:"1700,00"},{firstCell:"A04.30.001",secondCell:"600.47",thirdCell:"Ультразвуковое исследование плода (при сроке беременности более 30 недель (тройня), демонстрация родственникам и фотография в подарок)",fourthСell:"2600,00"},{firstCell:"A04.30.001",secondCell:"600.48",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  более 30 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса)",fourthСell:"1600,00"},{firstCell:"A04.30.001",secondCell:"600.49",thirdCell:"Ультразвуковое исследование плода ( при сроке беременности  более 30 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса, многоплодная беременность (двойня)",fourthСell:"2000,00"},{firstCell:"A04.30.001",secondCell:"600.50",thirdCell:"Ультразвуковое исследование плода (при сроке беременности более 30 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса, многоплодная беременность (тройня)",fourthСell:"2100,00"},{firstCell:"A04.30.001",secondCell:"600.54",thirdCell:"Ультразвуковое исследование плода  (при сроке беременности более 30 недель, в режиме 3D/4D, демонстрация родственникам, запись на DVD ) ",fourthСell:"2400,00"},{firstCell:"A04.30.001",secondCell:"600.55",thirdCell:"Ультразвуковое исследование плода (при сроке беременности более 30 недель (двойня), в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"3000,00"},{firstCell:"A04.30.001",secondCell:"600.56",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  более 30  недель (тройня), в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"3500,00"},{firstCell:"A04.12.024",secondCell:"600.57",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности более 30 недель, цветное картирование)",fourthСell:"1000,00"},{firstCell:"A04.12.024",secondCell:"600.58",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности более 30 недель (двойня), цветное картирование)",fourthСell:"1100,00"},{firstCell:"A04.12.024",secondCell:"600.59",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности более 30 недель (тройня), цветное картирование)",fourthСell:"1200,00"},{firstCell:"1.3.2",secondCell:"",thirdCell:"УЗИ органов малого таза, брюшной полости, забрюшинного пространства и мочеполовой системы",fourthСell:"",subSubChapter:!0},{firstCell:"B03.052.001",secondCell:"600.60",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (брюшная полость: печень, желчный пузырь, поджелудочная железа, селезенка)",fourthСell:"1000,00"},{firstCell:"B03.052.001",secondCell:"600.61",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (органы брюшной полости и почки)",fourthСell:"1400,00"},{firstCell:"B03.052.001",secondCell:"600.62",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (почки, надпочечники и забрюшинное пространство)",fourthСell:"700,00"},{firstCell:"A04.28.002.001",secondCell:"600.63",thirdCell:"Ультразвуковое исследование почек  (допплерография почек с цветным картированием)",fourthСell:"900,00"},{firstCell:"A04.28.002.003",secondCell:"600.64",thirdCell:"Ультразвуковое исследование мочевого пузыря",fourthСell:"700,00"},{firstCell:"A04.09.001",secondCell:"600.65",thirdCell:"Ультразвуковое исследование плевральной полости",fourthСell:"700,00"},{firstCell:"A04.18.001 ",secondCell:"600.66",thirdCell:"Ультразвуковое исследование толстой кишки",fourthСell:"700,00"},{firstCell:"A04.19.001.001",secondCell:"600.67",thirdCell:"Ультразвуковое исследование прямой кишки трансректальное (с допплерографией и цветным картированием)",fourthСell:"800,00"},{firstCell:"A04.21.001",secondCell:"600.68",thirdCell:"Ультразвуковое исследование предстательной железы ",fourthСell:"800,00"},{firstCell:"A04.21.001.001 ",secondCell:"600.69",thirdCell:"Ультразвуковое исследование предстательной железы трансректальное ",fourthСell:"800,00"},{firstCell:"A04.21.001.001",secondCell:"600.69",thirdCell:"Ультразвуковое исследование предстательной железы трансректальное",fourthСell:"800,00"},{firstCell:"A04.21.001",secondCell:"600.70",thirdCell:"Ультразвуковое исследование предстательной железы  (Комплекс: предстательная железа и мочевой пузырь, определение остаточной мочи (трансабдоминально)",fourthСell:"1300,00"},{firstCell:"A04.21.001.001",secondCell:"600.71",thirdCell:"Ультразвуковое исследование предстательной железы трансректальное ( с допплерографией и цветным картированием)",fourthСell:"900,00"},{firstCell:"A04.28.003",secondCell:"600.74",thirdCell:"Ультразвуковое исследование органов мошонки (с допплерографией)",fourthСell:"900,00"},{firstCell:"B03.052.001",secondCell:"Б600.91",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (трансвагинальное: тазовое дно и уретра)",fourthСell:"1400,00"},{firstCell:"1.3.3",secondCell:"",thirdCell:"Поверхностные структуры",fourthСell:"",subSubChapter:!0},{firstCell:"A04.22.001 ",secondCell:"600.80",thirdCell:"Ультразвуковое исследование щитовидной железы и паращитовидных желез  (с регионарными лимфатическими узлами и допплерографией щитовидной железы с цветным картированием)",fourthСell:"900,00"},{firstCell:"A04.20.002",secondCell:"600.82",thirdCell:"Ультразвуковое исследование молочных желез (с регионарными лимфоузлами)",fourthСell:"900,00"},{firstCell:"A04.07.002",secondCell:"600.83",thirdCell:"Ультразвуковое исследование слюнных желез",fourthСell:"800,00"},{firstCell:"A04.06.002",secondCell:"600.84",thirdCell:"Ультразвуковое исследование лимфатических узлов (одна анатомическая зона) при системных заболеваниях",fourthСell:"800,00"},{firstCell:"A04.06.002",secondCell:"600.84.1",thirdCell:"Ультразвуковое исследование лимфатических узлов (все группы лимфатических узлов при системных заболеваниях)",fourthСell:"1400,00"},{firstCell:"A04.01.001",secondCell:"600.85",thirdCell:"Ультразвуковое исследование мягких тканей (одна анатомическая зона)",fourthСell:"700,00"},{firstCell:"1.3.4",secondCell:"",thirdCell:"Сердечно-сосудистая система",fourthСell:"",subSubChapter:!0},{firstCell:"A04.10.002",secondCell:"600.86",thirdCell:"Эхокардиография (УЗИ сердца с допплеровским анализом)",fourthСell:"1000,00"},{firstCell:"A04.12.",secondCell:"600.87",thirdCell:"Цветное допплеровское картирование и допплерометрия сосудов матки",fourthСell:"1000,00"},{firstCell:"A04.12.",secondCell:"Б600.92",thirdCell:"УЗДГ МАГ и шеи",fourthСell:"1000,00"},{firstCell:"A04.12.002",secondCell:"Б600.93",thirdCell:"Ультразвуковая допплерография сосудов (артерий) верхних конечностей",fourthСell:"1000,00"},{firstCell:"A04.12.002.001",secondCell:"Б600.94",thirdCell:"Ультразвуковая допплерография сосудов (артерий) нижних конечностей ",fourthСell:"1000,00"},{firstCell:"A04.12.002.001",secondCell:"Б600.95",thirdCell:"Ультразвуковая допплерография вен нижних конечностей",fourthСell:"1000,00"},{firstCell:"A04.12.002",secondCell:"Б600.96",thirdCell:"Ультразвуковая допплерография вен верхних конечностей ",fourthСell:"1000,00"},{firstCell:"1.3.5",secondCell:"",thirdCell:"Ультразвуковая диагностика (дети)",fourthСell:"",subSubChapter:!0},{firstCell:"A04.20.002 ",secondCell:"600.82.1",thirdCell:"Ультразвуковое исследование молочных желез (с регионарными лимфоузлами у детей)",fourthСell:"750,00"},{firstCell:"B03.052.001",secondCell:"600.98",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (брюшная полость, почки, забрюшинное пространство)",fourthСell:"1200,00"},{firstCell:"B03.052.001",secondCell:"600.99",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (брюшная полость, почки)",fourthСell:"1000,00"},{firstCell:"B03.052.001",secondCell:"600.60.1",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (брюшная полость: печень, желчный пузырь, поджелудочная железа, селезенка)",fourthСell:"870,00"},{firstCell:"A04.07.002",secondCell:"600.83",thirdCell:"Ультразвуковое исследование слюнных желез",fourthСell:"700,00"},{firstCell:"A04.28.002.001",secondCell:"600.63.1",thirdCell:"Ультразвуковое исследование почек (с допплерографией сосудов)",fourthСell:"800,00"},{firstCell:"A04.28.002.001 A04.28.002.005",secondCell:"600.64.1",thirdCell:"Ультразвуковое исследование почек и мочевого пузыря (с определением остаточной мочи)",fourthСell:"1150,00"},{firstCell:"A04.28.002.005",secondCell:"600.100",thirdCell:"Ультразвуковое исследование мочевого пузыря с определением остаточной мочи",fourthСell:"650,00"},{firstCell:"B03.052.001",secondCell:"600.101",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (почки и надпочечники)",fourthСell:"700,00"},{firstCell:"A04.21.001",secondCell:"600.68.1",thirdCell:"Ультразвуковое исследование предстательной железы",fourthСell:"700,00"},{firstCell:"A04.22.001",secondCell:"600.80.1",thirdCell:"Ультразвуковое исследование щитовидной железы и паращитовидных желез  (ЦДК и регионарными лимфатическими узлами)",fourthСell:"750,00"},{firstCell:"A04.28.003",secondCell:"600.104",thirdCell:"Ультразвуковое исследование органов мошонки (с допплерографией и пробой Вальсальвы)",fourthСell:"700,00"},{firstCell:"A04.01.001",secondCell:"600.105",thirdCell:"Ультразвуковое исследование мягких тканей",fourthСell:"600,00"},{firstCell:"A04.30.010",secondCell:"600.106",thirdCell:"Ультразвуковое исследование органов малого таза (комплексное), трансобдоминально",fourthСell:"700,00"},{firstCell:"1.4",secondCell:"",thirdCell:"Функциональная диагностика",fourthСell:"",subChapter:!0},{firstCell:"A05.10.006",secondCell:" Б1002.1",thirdCell:"Регистрация электрокардиограммы (ЭКГ с расшифровкой)",fourthСell:"450,00"},{firstCell:"A05.10.006",secondCell:"Б1002.2",thirdCell:"Регистрация электрокардиограммы (ЭКГ с описанием и интерпретацией данных)",fourthСell:"650,00"},{firstCell:"A05.10.006",secondCell:"100.36",thirdCell:"Регистрация электрокардиограммы (ЭКГ без описания)",fourthСell:"330,00"},{firstCell:"A05.30.001",secondCell:"200.50",thirdCell:"Кардиотокография плода",fourthСell:"1000,00"},{firstCell:"Раздел 2",secondCell:"300",thirdCell:"Оперативное лечение ",fourthСell:"",chapter:!0},{firstCell:"2.1",secondCell:"",thirdCell:"Гинекология и урология",fourthСell:"",subChapter:!0},{firstCell:"A16.20.084",secondCell:"300.11",thirdCell:"Удаление полипа женских половых органов (удаление полипа шейки матки с гистологическим исследованием)",fourthСell:"6500,00"},{firstCell:"A16.20.084",secondCell:"300.11.1",thirdCell:"Удаление полипа женских половых органов (удаление полипа шейки матки без гистологического исследования)",fourthСell:"4800,00"},{firstCell:"A16.20.084",secondCell:"300.12",thirdCell:"Удаление полипа женских половых органов (удаление полипа цервикального канала с выскабливанием цервикального канала)",fourthСell:"5700,00"},{firstCell:"A16.20.059.001",secondCell:"300.13",thirdCell:"Удаление новообразования влагалища  (удаление кисты влагалища размером до 2-х см)",fourthСell:"8000,00"},{firstCell:"A16.20.059.001",secondCell:"300.14",thirdCell:"Удаление новообразования влагалища (удаление кисты влагалища размером свыше 2-х см)",fourthСell:"9000,00"},{firstCell:"A16.20.059.001",secondCell:"300.16",thirdCell:"Удаление новообразования влагалища (удаление кисты бартолиниевой железы) ",fourthСell:"8500,00"},{firstCell:"A11.20.040",secondCell:"300.21",thirdCell:"Биопсия вульвы",fourthСell:"5800,00"},{firstCell:"A16.20.021",secondCell:"300.17",thirdCell:"Рассечение девственной плевы",fourthСell:"8500,00"},{firstCell:"A16.20.060",secondCell:"300.18",thirdCell:"Восстановление девственной плевы",fourthСell:"12000,00"},{firstCell:"A16.20.060",secondCell:"300.18.1",thirdCell:"Восстановление девственной плевы (долговременная)",fourthСell:"15000,00"},{firstCell:"A16.20.065",secondCell:"300.19",thirdCell:"Рассечение перегородки влагалища (удаление)",fourthСell:"10000,00"},{firstCell:"A16.20.098",secondCell:"300.20",thirdCell:"Пластика малых половых губ",fourthСell:"18000,00"},{firstCell:"A03.20.003",secondCell:"300.04",thirdCell:"Гистероскопия (диагностическая, с в/в обезболиванием)",fourthСell:"15000,00"},{firstCell:"A03.20.003",secondCell:"300.27",thirdCell:"Гистерорезектоскопия ( I ст. сложности: в/в обезболивание, удаление полипов, гиперплазия эндометрия)",fourthСell:"16000,00"},{firstCell:"A03.20.003",secondCell:"300.27.1",thirdCell:"Гистерорезектоскопия ( II ст. сложности: в/в обезболивание, рассечение синехий)",fourthСell:"17000,00"},{firstCell:"A03.20.003",secondCell:"300.27.2",thirdCell:"Гистерорезектоскопия (III ст. сложности: в/в обезболивание, удаление миоматозных узлов, лигатур)",fourthСell:"18000,00"},{firstCell:"A03.20.003",secondCell:"300.27.3",thirdCell:"Гистерорезектоскопия (I ст. сложности: в/в обезболивание, удаление полипов эндометрия, удаление полипов цервикального канала, гистологическое исследование)",fourthСell:"19000,00"},{firstCell:"A03.28.001",secondCell:"300.01",thirdCell:"Цистоскопия (осмотр мочевого пузыря с помощью оптики)",fourthСell:"3900,00"},{firstCell:"A03.28.001",secondCell:"300.02",thirdCell:"Цистоскопия (взятие биопсии)",fourthСell:"4000,00"},{firstCell:"A11.20.008.001",secondCell:"300.09",thirdCell:"Раздельное диагностическое выскабливание полости матки  (диагностическое, с гистологическим исследованием)",fourthСell:"9000,00"},{firstCell:"A11.20.008.001",secondCell:"300.10",thirdCell:"Раздельное диагностическое выскабливание полости матки  (с гистологическим исследованием, в/в обезболиванием)",fourthСell:"9500,00"},{firstCell:"A11.20.008.002",secondCell:"300.07",thirdCell:"Раздельное диагностическое выскабливание цервикального канала  (в амбулаторных условиях, взятие материала с шейки матки для гистологического исследования)",fourthСell:"3700,00"},{firstCell:"A11.20.007",secondCell:"300.30",thirdCell:"Пункция кисты яичника и аспирация экссудата",fourthСell:"13200,00"},{firstCell:"А16.20",secondCell:"300.28",thirdCell:"Бужирование цервикального канала (без обезболивания)",fourthСell:"1500,00"},{firstCell:"А16.20",secondCell:"300.29",thirdCell:"Бужирование цервикального канала (с в/в обезболиванием)",fourthСell:"6700,00"},{firstCell:"A16.01.018",secondCell:"300.15",thirdCell:"Удаление доброкачественных новообразований подкожно-жировой клетчатки (удаление липом/атером половых органов)",fourthСell:"5600,00"},{firstCell:"А16.20",secondCell:"300.08",thirdCell:"Инструментальная дилатация цервикального канала при его атрезии",fourthСell:"4000,00"},{firstCell:"A16.21.038",secondCell:"300.22",thirdCell:"Пластика уздечки крайней плоти",fourthСell:"6500,00"},{firstCell:"A16.21.038",secondCell:"300.22.1",thirdCell:"Пластика уздечки крайней плоти (с в/в обезболиванием)",fourthСell:"8000,00"},{firstCell:"A16.21.013",secondCell:"300.23",thirdCell:"Обрезание крайней плоти (при фимозе)",fourthСell:"9000,00"},{firstCell:"А16.21",secondCell:"300.24",thirdCell:"Хирургическое лечение водянки яичек (гидроцеле)",fourthСell:"12000,00"},{firstCell:"А16.21",secondCell:"300.25",thirdCell:"Хирургическое лечение варикоцеле",fourthСell:"10000,00"},{firstCell:"A11.12.003",secondCell:"300.06",thirdCell:"Внутривенное введение лекарственных препаратов (обезболивание, при проведении малых операций)",fourthСell:"3100,00"},{firstCell:"2.2",secondCell:"",thirdCell:"Травматология",fourthСell:"",subChapter:!0},{firstCell:"A03.04.001",secondCell:"300.33",thirdCell:"Артроскопия диагностическая (коленный сустав)",fourthСell:"28000,00"},{firstCell:"A03.04.001",secondCell:"300.33.3",thirdCell:"Артроскопия диагностическая 2 степени сложности (коленный сустав)",fourthСell:"40000,00"},{firstCell:"A16.01.004",secondCell:"300.32",thirdCell:"Хирургическая обработка раны или инфицированной ткани (обработка раны, наложение швов)",fourthСell:"2500,00"},{firstCell:"A16.01.027.001",secondCell:"300.31",thirdCell:"Удаление ногтевой пластинки с клиновидной резекцией матрикса (вросший ноготь)",fourthСell:"3000,00"},{firstCell:"A16.04.047",secondCell:"300.33.1",thirdCell:"Артроскопическая санация сустава (I ст. сложности: рассечение медиопателлярной складки, синовэктомия коленного сустава)",fourthСell:"49000,00"},{firstCell:"A16.04.047",secondCell:"300.33.2",thirdCell:"Артроскопическая санация сустава (II ст. сложности: расширенная синовэктомия, резекция тел мениска, удаление свободных тел)",fourthСell:"54000,00"},{firstCell:"А16.02",secondCell:"300.34",thirdCell:"Хирургическое  лечение синдрома карпального канала",fourthСell:"7000,00"},{firstCell:"А16.02",secondCell:"300.35",thirdCell:"Хирургическое лечение лигаментита",fourthСell:"7000,00"},{firstCell:"А16.02",secondCell:"300.36",thirdCell:"Хирургическое лечение болезни де Кервена",fourthСell:"7000,00"},{firstCell:"А16.04",secondCell:"300.37",thirdCell:"Хирургическое лечение гигромы",fourthСell:"7500,00"},{firstCell:"А16.02",secondCell:"300.38",thirdCell:"Хирургическое лечение синдрома канала Гийона",fourthСell:"7000,00"},{firstCell:"A16.02.004",secondCell:"300.39",thirdCell:"Иссечение контрактуры Дюпюитрена (I ст. сложности)",fourthСell:"8000,00"},{firstCell:"A16.02.004",secondCell:"300.39.1",thirdCell:"Иссечение контрактуры Дюпюитрена (II ст. сложности)",fourthСell:"13000,00"},{firstCell:"A16.02.004",secondCell:"300.39.2",thirdCell:"Иссечение контрактуры Дюпюитрена  (Игольная апоневротомия)",fourthСell:"8000,00"},{firstCell:"А16.04",secondCell:"300.40",thirdCell:"Иссечение препателлярной бурсы коленного сустава",fourthСell:"8000,00"},{firstCell:"А16.04",secondCell:"300.40.1",thirdCell:"Удаление бурсы локтевого сустава",fourthСell:"7000,00"},{firstCell:"A16.03.089",secondCell:"300.41",thirdCell:"Удаление экзостоза, хондромы (остеохондропатия бугристости большеберцовой кости) ",fourthСell:"18000,00"},{firstCell:"A16.03.014.002",secondCell:"300.42",thirdCell:"Удаление инородного тела кости экстрамедуллярных металлоконструкций",fourthСell:"23000,00"},{firstCell:"A16.04.037.003",secondCell:"300.43",thirdCell:"Пластика боковой связки коленного сустава",fourthСell:"28000,00"},{firstCell:"A16.03.028.002",secondCell:"300.44",thirdCell:"Остеосинтез ключицы",fourthСell:"28000,00"},{firstCell:"Раздел 3",secondCell:"400",thirdCell:"Лаборатория ВРТ (вспомогательные репродуктивные технологии)",fourthСell:"",chapter:!0},{firstCell:"A11.20.034 ",secondCell:"400.05",thirdCell:"Внутриматочное введение спермы мужа (партнера)",fourthСell:"10000,00"},{firstCell:"A11.20.035",secondCell:"400.05.01",thirdCell:"Внутриматочное введение спермы донора",fourthСell:"10000,00"},{firstCell:"A11.21.002",secondCell:"400.07",thirdCell:"Биопсия яичка, придатка яичка и семенного канатика  (комплекс: тестикулярная биопсия с целью получения жизнеспособных сперматозоидов, в/в обезболивание, пребывание в палате с наблюдением)",fourthСell:"20000,00"},{firstCell:"A11.21.002",secondCell:"400.08",thirdCell:"Биопсия яичка, придатка яичка и семенного канатика (комплекс: тестикулярная биопсия  с целью получения жизнеспособных сперматозоидов, местное обезболивание, пребывание в палате с наблюдением)",fourthСell:"18000,00"},{firstCell:"",secondCell:"400.11",thirdCell:"Цикл лечения методом ЭКО без стоимости препаратов. В том числе:",fourthСell:"97500,00",title:!0},{firstCell:"B01.001.002",secondCell:"400.11.01",thirdCell:"Прием врача-акушера-гинеколога повторный  (Выбор тактики лечения, овариальная гиперстимуляция без стоимости препаратов,коррекция стимуляции суперовуляции, УЗИ мониторинг созревания фолликулов)",fourthСell:"21500,00"},{firstCell:"A11.20.019",secondCell:"400.11.02",thirdCell:"Трансвагинальная пункция фолликулов яичников (ТВП, консультация врача-анестезиолога-реаниматолога, пребывание в палате с наблюдением)",fourthСell:"38000,00"},{firstCell:"A11.20.027 A11.20.028",secondCell:"400.11.03",thirdCell:"Экстракорпоральное оплодотворение ооцитов и культивирование эмбрионов",fourthСell:"27000,00"},{firstCell:"A11.20.030",secondCell:"400.11.04",thirdCell:"Внутриматочное введение эмбриона",fourthСell:"11000,00"},{firstCell:"A11.20.030.001",secondCell:"400.11.04.01",thirdCell:"Внутриматочное введение эмбриона (с применением специализированной среды с гиалуроновой кислотой)",fourthСell:"18000,00"},{firstCell:"А11.20.024.006",secondCell:"400.11.04.02",thirdCell:"Введение лекарственных препаратов интравагинально  (применение специализированной среды с гиалуроновой кислотой)",fourthСell:"7000,00"},{firstCell:"",secondCell:"400.12",thirdCell:"Повторный цикл лечения методом ЭКО без стоимости препаратов. В том числе:",fourthСell:"89000,00",title:!0},{firstCell:"B01.001.002",secondCell:"400.12.01",thirdCell:"Прием врача-акушера-гинеколога повторный (Выбор тактики лечения, овариальная гиперстимуляция без стоимости препаратов, коррекция стимуляции суперовуляции, УЗИ мониторинг созревания фолликулов. Для пациентов, проходящих повторный цикл ЭКО)",fourthСell:"18500,00"},{firstCell:"A11.20.019",secondCell:"400.12.02",thirdCell:"Трансвагинальная пункция фолликулов яичников (ТВП, консультация врача-анестезиолога-реаниматолога, пребывание в палате с наблюдением)",fourthСell:"36500,00"},{firstCell:"A11.20.027 A11.20.028",secondCell:"400.12.03",thirdCell:"Экстракорпоральное оплодотворение ооцитов и культивирование эмбрионов (для пациентов, проходящих повторный цикл лечения методом ЭКО)",fourthСell:"24000,00"},{firstCell:"A11.20.030",secondCell:"400.12.04",thirdCell:"Внутриматочное введение эмбриона  (для пациентов, проходящих повторный цикл лечения методом ЭКО)",fourthСell:"10000,00"},{firstCell:"A11.20.030",secondCell:"400.12.04.01",thirdCell:"Внутриматочное введение эмбриона (с применением специализированной среды с гиалуроновой кислотой)",fourthСell:"17000,00"},{firstCell:"А11.20.024",secondCell:"400.11.04.02",thirdCell:"Введение лекарственных препаратов интравагинально  (применение специализированной среды с гиалуроновой кислотой)",fourthСell:"7000,00"},{firstCell:"",secondCell:"400.13",thirdCell:"Цикл лечения методом ЭКО в натуральном цикле. В том числе:",fourthСell:"81000,00",title:!0},{firstCell:"B01.001.002",secondCell:"400.13.01",thirdCell:"Прием врача-акушера-гинеколога повторный (ультразвуковой мониторинг созревания фолликулов)",fourthСell:"5000,00"},{firstCell:"A11.20.019",secondCell:"400.13.02",thirdCell:"Трансвагинальная пункция фолликулов яичников (ТВП, консультация врача-анестезиолога-реаниматолога, пребывание в палате с наблюдением)",fourthСell:"38000,00"},{firstCell:"A11.20.027 A11.20.028 ",secondCell:"400.13.03",thirdCell:"Экстракорпоральное оплодотворение ооцитов и культивирование эмбрионов",fourthСell:"27000,00"},{firstCell:"A11.20.030",secondCell:"400.13.04",thirdCell:"Внутриматочное введение эмбриона",fourthСell:"11000,00"},{firstCell:"A11.20.030",secondCell:"400.11.04.01",thirdCell:"Внутриматочное введение эмбриона (с применением специализированной среды с гиалуроновой кислотой)",fourthСell:"18000,00"},{firstCell:"A11.20.024",secondCell:"400.11.04.02",thirdCell:"Введение лекарственных препаратов интравагинально  (применение специализированной среды с гиалуроновой кислотой)",fourthСell:"7000,00"},{firstCell:"",secondCell:"",thirdCell:"Донорский биоматериал / донор",fourthСell:"",title:!0},{firstCell:"",secondCell:"400.31",thirdCell:"Предоставление законсервированной спермы (2 соломины для процедуры ЭКО) (г.Казань)",fourthСell:"26000,00"},{firstCell:"",secondCell:"400.31.1",thirdCell:"Предоставление законсервированной спермы (1 доза), г. Москва",fourthСell:"60000,00"},{firstCell:"",secondCell:"400.31.2",thirdCell:"Предоставление законсервированной спермы (3 соломины для процедуры ВМИ) г. Казань",fourthСell:"29000,00"},{firstCell:"",secondCell:"400.32",thirdCell:"Предоставление донорских ооцитов (6 шт.)",fourthСell:"180000,00"},{firstCell:"",secondCell:"400.33",thirdCell:"Предоставление донорских ооцитов (7 шт.)",fourthСell:"195000,00"},{firstCell:"",secondCell:"400.34",thirdCell:"Предоставление донорских ооцитов (8 шт.)",fourthСell:"210000,00"},{firstCell:"",secondCell:"400.32-5",thirdCell:"Предоставление донорских ооцитов (9 шт.)",fourthСell:"225000,00"},{firstCell:"",secondCell:"400.32-6",thirdCell:"Предоставление донорских ооцитов (10 шт.)",fourthСell:"240000,00"},{firstCell:"",secondCell:"",thirdCell:"Методы ЭКО, хетчинг",fourthСell:"",title:!0},{firstCell:"A11.20.027",secondCell:"400.15",thirdCell:"Экстракорпоральное оплодотворение ооцитов (оплодотворение методом ИКСИ (свыше 3-х клеток), осуществляется дополнительно к процедуре ЭКО)",fourthСell:"30000,00"},{firstCell:"A11.20.027",secondCell:"400.15.1",thirdCell:"Экстракорпоральное оплодотворение ооцитов (оплодотворение методом ПИКСИ, осуществляется дополнительно к процедуре ИКСИ)",fourthСell:"16000,00"},{firstCell:"A11.20.027",secondCell:"400.15.2",thirdCell:"Экстракорпоральное оплодотворение ооцитов (оплодотворение методом ИКСИ (1- 3 клетки), осуществляется дополнительно к процедуре ЭКО)",fourthСell:"20000,00"},{firstCell:"A11.20.029",secondCell:"400.16",thirdCell:"Вспомогательный хетчинг (рассечение блестящей оболочки) эмбриона",fourthСell:"6000,00"},{firstCell:"",secondCell:"",thirdCell:"Криоконсервация, разморозка, хранение биоматериала",fourthСell:"",title:!0},{firstCell:"A11.20.031",secondCell:"400.17",thirdCell:"Криоконсервация эмбрионов  (Комплекс: криоконсервация методом витрификации  (1-3) эмбрионов и их хранение в течение 2-х лет)",fourthСell:"15000,00"},{firstCell:"A11.20.031",secondCell:"400.17.1",thirdCell:"Криоконсервация эмбрионов  (Комплекс: криоконсервация методом витрификации  (4-х и более) эмбрионов и их хранение в течение 2-х лет)",fourthСell:"21000,00"},{firstCell:"A11.20.031",secondCell:"400.17.1.1",thirdCell:"Криоконсервация эмбрионов  (Комплекс: криоконсервация методом витрификации  (6-8 эмбрионов) и их хранение в течение 6 мес.)",fourthСell:"16500,00"},{firstCell:"A11.20.031",secondCell:"400.17.4",thirdCell:"Криоконсервация эмбрионов (комплекс: витрификация (1-3)  эмбрионов и  хранение в течение 3-х месяцев)",fourthСell:"10000,00"},{firstCell:"A11.20.031",secondCell:"400.17.5",thirdCell:"Криоконсервация эмбрионов (комплекс: витрификация (1-3)  эмбрионов и  хранение в течение 1 месяца)",fourthСell:"9500,00"},{firstCell:"A11.20.032",secondCell:"400.17.2",thirdCell:"Криоконсервация гамет (комплекс: витрификация ооцитов (до 6-ти клеток) и хранение их в течение 2-х лет)",fourthСell:"22000,00"},{firstCell:"A11.20.032",secondCell:"400.17.2.1",thirdCell:"Криоконсервация гамет (комплекс: витрификация ооцитов (до 6-ти клеток) и хранение их в течение 6 месяцев)",fourthСell:"13800,00"},{firstCell:"A11.20.032",secondCell:"400.17.2.2",thirdCell:"Криоконсервация гамет (комплекс: витрификация ооцитов (до 6-ти клеток)",fourthСell:"12000,00"},{firstCell:"A11.20.032",secondCell:"400.17.3",thirdCell:"Криоконсервация гамет (комплекс: витрификация ооцитов (более 6-ти клеток) и хранение их в течение 2-х лет)",fourthСell:"25000,00"},{firstCell:"A11.20.032",secondCell:"400.17.3.1",thirdCell:"Криоконсервация гамет (комплекс: витрификация ооцитов (более 6 клеток) и хранение их в течение 9 месяцев)",fourthСell:"17500,00"},{firstCell:"A11.20.032",secondCell:"400.19",thirdCell:"Криоконсервация гамет (комплекс: криоконсервация тестикулярного биоптата, спермы мужа и хранение в течение 1 месяца)",fourthСell:"10000,00"},{firstCell:"A11.20.032",secondCell:"400.21.1",thirdCell:"Криоконсервация гамет (комплекс : криоконсервация и хранение в течение 1 месяца спермы мужа (до двух сдач)",fourthСell:"12500,00"},{firstCell:"A11.20.032",secondCell:"400.21",thirdCell:"Криоконсервация гамет (комплекс: криоконсервация и хранение в течение 1 месяца спермы мужа (до трех сдач)",fourthСell:"14000,00"},{firstCell:"A11.20.032",secondCell:"400.19.2",thirdCell:"Криоконсервация гамет (комплекс: криоконсервация тестикулярного биоптата, спермы мужа и хранение в течение 1 года)",fourthСell:"15000,00"},{firstCell:"A11.20.032",secondCell:"400.21.3",thirdCell:"Криоконсервация гамет (комплекс : криоконсервация и хранение до 1 года спермы мужа (до двух сдач)",fourthСell:"16200,00"},{firstCell:"A11.20.032",secondCell:"400.21.2",thirdCell:"Криоконсервация гамет (комплекс: криоконсервация и хранение в течение 1 года спермы мужа (до трех сдач)",fourthСell:"17500,00"},{firstCell:"A11.20.",secondCell:"400.18",thirdCell:"Разморозка ооцитов",fourthСell:"12000,00"},{firstCell:"A11.20.",secondCell:"400.18.1",thirdCell:"Разморозка эмбрионов",fourthСell:"12500,00"},{firstCell:"A11.20.",secondCell:"400.19.1",thirdCell:"Разморозка тестикулярного биоптата, спермы",fourthСell:"4000,00"},{firstCell:"A11.20.032",secondCell:"400.20",thirdCell:"Криоконсервация гамет (хранение эмбрионов, спермы, тестикулярного биоптата за каждый последующий месяц)",fourthСell:"750,00"},{firstCell:"A11.20.032",secondCell:"400.20.1",thirdCell:"Криоконсервация гамет (хранение эмбрионов, спермы, тестикулярного биоптата в течение 1 года (при оплате 10 месяцев хранения  2 месяца Вы получаете в подарок)",fourthСell:"7500,00"},{firstCell:"",secondCell:"",thirdCell:"Исследование эякулята",fourthСell:"",title:!0},{firstCell:"B03.053.002",secondCell:"400.22",thirdCell:"Спермограмма (для цикла ЭКО по критериям Крюгера: спермограмма по ВОЗ, MAR - тест, исследование морфологии)",fourthСell:"3000,00"},{firstCell:"B03.053.002",secondCell:"400.22В",thirdCell:"Спермограмма (для цикла ЭКО по критериям Крюгера)",fourthСell:"2450,00"},{firstCell:"A11.21.010",secondCell:"400.22.1",thirdCell:"Обработка спермы для проведения процедуры экстракорпорального оплодотворения (осуществляется дополнительно к спермограмме для цикла ЭКО по критериям Крюгера)",fourthСell:"3000,00"},{firstCell:"B03.053.002",secondCell:"400.23",thirdCell:"Спермограмма",fourthСell:"1000,00"},{firstCell:"A12.21.001",secondCell:"400.24",thirdCell:"Микроскопическое исследование спермы  (MAR тест с использованием IgG)",fourthСell:"1800,00"},{firstCell:"A12.21.001",secondCell:"400.25",thirdCell:"Микроскопическое исследование спермы (исследование морфологии эякулята по критериям Крюгера)",fourthСell:"1500,00"},{firstCell:"A12.21.001",secondCell:"400.26",thirdCell:"Микроскопическое исследование спермы (тест на криотолерантность сперматозоидов, комплексное исследование)",fourthСell:"4500,00"},{firstCell:"A12.21.001",secondCell:"400.27",thirdCell:"Микроскопическое исследование спермы (анализ на среду)",fourthСell:"2300,00"},{firstCell:"A12.21.001",secondCell:"400.29",thirdCell:"Микроскопическое исследование спермы (проба Шуварского, посткоитальный тест)",fourthСell:"800,00"},{firstCell:"A12.21.001",secondCell:"400.37",thirdCell:"Микроскопическое исследование спермы (НВА тест на связывание сперматозоидов с гиалуроновой кислотой)",fourthСell:"6900,00"},{firstCell:"A12.21.001",secondCell:"400.46",thirdCell:"Микроскопическое исследование спермы (Тест-LeucoScreen определение пероксидаза-положительных лейкоцитов в сперме)",fourthСell:"1500,00"},{firstCell:"B03.045.030",secondCell:"700.70",thirdCell:"Комплекс исследований для установления родословных кровнородственных связей (ДНК-профилирование (25-маркеров) 1 человек)",fourthСell:"6800,00"},{firstCell:"",secondCell:"",thirdCell:"Биопсия эмбрионов, ПГД",fourthСell:"",title:!0},{firstCell:"A11.30.010",secondCell:"400.38",thirdCell:"Биопсия эмбриона  (биопсия трофэктодермы бластоцисты (1 эмбриона на 5-6 день развития)",fourthСell:"12000,00"},{firstCell:"A11.30.010.001",secondCell:"400.39",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (2 эмбрионов на 5-6 день развития)",fourthСell:"13000,00"},{firstCell:"A11.30.010.002",secondCell:"400.40",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (3 эмбрионов на 5-6 день развития)",fourthСell:"17500,00"},{firstCell:"A11.30.010.004",secondCell:"400.41.1",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (4 эмбрионов на 5-6 день развития)",fourthСell:"19000,00"},{firstCell:"A11.30.010.005",secondCell:"400.41.2",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (5 эмбрионов на 5-6 день развития)",fourthСell:"24500,00"},{firstCell:"A11.30.010.006",secondCell:"400.41.3",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (6 эмбрионов на 5-6 день развития)",fourthСell:"27000,00"},{firstCell:"A11.30.010.007",secondCell:"400.41.4",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (7 эмбрионов на 5-6 день развития)",fourthСell:"33000,00"},{firstCell:"A11.30.010.008",secondCell:"400.41.5",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (8 эмбрионов на 5-6 день развития)",fourthСell:"35500,00"},{firstCell:"А10.20.001.001",secondCell:"400.42",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А)  (исследование 1 эмбриона методом NGS)",fourthСell:"35000,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.1",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А) (исследование 2 эмбрионов методом NGS)",fourthСell:"60000,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.2",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А)  (исследование 3 эмбрионов методом NGS)",fourthСell:"80000,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.3",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А)  (исследование 4 эмбрионов методом NGS",fourthСell:"95000,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.8",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А)  (исследование 5 эмбрионов методом NGS)",fourthСell:"115000,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.4",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А)  (исследование 6 эмбрионов методом NGS)",fourthСell:"135000,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.5",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А) (исследование 7 эмбрионов методом NGS)",fourthСell:"157500,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.6",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А)  (исследование 8 эмбрионов методом NGS)",fourthСell:"180000,00"},{firstCell:"А10.20.001.002",secondCell:"400.42.9",thirdCell:"Преимплантационное генетическое исследование на моногенные заболевания (ПГТ-М)",fourthСell:"170000,00"},{firstCell:"",secondCell:"500",thirdCell:"Дневной стационар",fourthСell:"",title:!0},{firstCell:"A25.20.004",secondCell:"500.01",thirdCell:"Назначение лекарственных препаратов при беременности  (лечение раннего токсикоза в сроке до 12 недель беременности, размещение в дневном стационаре, 1 пациенто-день: пребывание, обследование, наблюдение со стоимостью препаратов). Минимальный срок лечения 7 пациенто-дней",fourthСell:"2000,00"},{firstCell:"A25.20.004",secondCell:"500.02",thirdCell:"Назначение лекарственных препаратов при беременности (лечение фетоплацентарной недостаточности в сроке до 34 недель беременности, размещение в дневном стационаре). Минимальный срок лечения 6 пациенто-дней",fourthСell:"2200,00"},{firstCell:"A25.20.004",secondCell:"500.03",thirdCell:"Назначение лекарственных препаратов при беременности (лечение угрозы прерывания беременности I и II триместров, размещение в дневном стационаре, 1 пациенто-день: пребывание, обследование, наблюдение со стоимостью препаратов). Минимальный срок лечения 7 пациенто-дней",fourthСell:"2000,00"},{firstCell:"A25.20.001",secondCell:"500.04",thirdCell:"Назначение лекарственных препаратов при заболеваниях женских половых органов  (внутривенное переливание после пункции фолликулов для профилактики СГЯ)",fourthСell:"1600,00"},{firstCell:"A25.20.001",secondCell:"500.05",thirdCell:"Назначение лекарственных препаратов при заболеваниях женских половых органов (лечение СГЯ легкой степени, размещение в дневном стационаре, 1 пациенто-день) Минимальный срок лечения 5 пациенто-дней",fourthСell:"2300,00"},{firstCell:"A25.20.001",secondCell:"500.06",thirdCell:"Назначение лекарственных препаратов при заболеваниях женских половых органов (лечение хронических воспалительных заболеваний мочеполовой системы, размещение в дневном стационаре, 1 койко-день: пребывание, обследование, наблюдение со стоимостью препаратов)",fourthСell:"2300,00"},{firstCell:"A25.20.001",secondCell:"500.07",thirdCell:"Назначение лекарственных препаратов при заболеваниях женских половых органов (пребывание и наблюдение в дневном стационаре, 1 пациенто-день без стоимости препаратов)",fourthСell:"1300,00"},{firstCell:"A25.20.001",secondCell:"500.08",thirdCell:"Назначение лекарственных препаратов при заболеваниях женских половых органов (оказание помощи при обильном кровотечении, размещение в дневном стационаре, 1 пациенто/день  со стоимостью медикаментов)",fourthСell:"1700,00"},{firstCell:"Раздел 4",secondCell:"",thirdCell:"Лабораторные исследования",fourthСell:"",chapter:!0},{firstCell:"",secondCell:"700",thirdCell:"Генетические исследования",fourthСell:"",title:!0},{firstCell:"B03.045.031",secondCell:"700.1",thirdCell:"Тест на родство «Универсальный»",fourthСell:"18000,00"},{firstCell:"B03.045.031",secondCell:"700.1.1",thirdCell:"Тест на родство «Универсальный» (досудебная, судебная экспертиза)",fourthСell:"20000,00"},{firstCell:"B03.045.031",secondCell:"700.2",thirdCell:"Тест на отцовство/материнство (дуэт) 20 маркеров",fourthСell:"13000,00"},{firstCell:"B03.045.031",secondCell:"700.2.1",thirdCell:"Дополнительный участник исследования, 20 маркеров",fourthСell:"6000,00"},{firstCell:"B03.045.031",secondCell:"700.2.1.1",thirdCell:"Тест на отцовство/материнство (дуэт, трио) 20 маркеров (судебная/досудебная экспертиза)",fourthСell:"17000,00"},{firstCell:"B03.045.031",secondCell:"700.5",thirdCell:"Тест на отцовство/материнство ТРИО, 20 маркеров (3 участника: 1 предполагаемый родитель, 1 безусловный родитель, 1 ребенок)",fourthСell:"14000,00"},{firstCell:"B03.045.031",secondCell:"700.7",thirdCell:"ТЕСТ НА РОДСТВО, 20 маркеров (исследуются аутосомные маркеры, 2 участника: дедушка/бабушка - внук/внучка, дядя/тетя - племянник/племянница (авункулярный тест), родные/сводные братья/сестры (полно- и полусиблинговый, близнецовый тест",fourthСell:"13500,00"},{firstCell:"B03.045.031",secondCell:"700.8",thirdCell:"ТЕСТ НА РОДСТВО, 24 маркера (исследуются аутосомные маркеры, 2 участника: дедушка/бабушка - внук/внучка, дядя/тетя - племянник/племянница (авункулярный тест), родные/сводные братья/сестры (полно- и полусиблинговый, близнецовый тест",fourthСell:"17000,00"},{firstCell:"B03.045.031",secondCell:"700.10",thirdCell:"ТЕСТ на родство, тестирование Х-хромосом (2 участника: бабушка по линии отца, внучка)",fourthСell:"16000,00"},{firstCell:"B03.045.031",secondCell:"700.11",thirdCell:"ТЕСТ на родство, тестирование Х-хромосом (2 участника: бабушка по линии отца, внучка), досудебная/судебная экспертиза",fourthСell:"22000,00"},{firstCell:"B03.045.031",secondCell:"700.13",thirdCell:"ТЕСТ НА РОДСТВО, тестирование Y-хромосомы (2 участника: дедушка по линии отца - внук, дядя - племянник, родные/сводные по отцу братья)",fourthСell:"16000,00"},{firstCell:"B03.045.031",secondCell:"700.26",thirdCell:"ТЕСТ на отцовство/материнство (дуэт, трио) 20 маркеров (досудебная экспертиза)",fourthСell:"15000,00"},{firstCell:"B03.045.031",secondCell:"700.44",thirdCell:"ВЫДЕЛЕНИЕ ДНК ИЗ НЕСТАНДАРТНОГО ОБРАЗЦА 1 ТИПА (волосы с корешками; ногти; окурок; жевательная резинка; зубная щетка; ушная сера; детская соска-пустыш",fourthСell:"5000,00"},{firstCell:"B03.045.031",secondCell:"ВКР 700.1",thirdCell:"Неинвазивный тест по дородовому установлению отцовствства",fourthСell:"90000,00"},{firstCell:"B03.006",secondCell:"НИПТ31",thirdCell:"Неинвазивный пренатальный тест (расширенная панель, 31 синдром)+определение пола плода",fourthСell:"35000,00"},{firstCell:"B03.006",secondCell:"НИПТ7",thirdCell:"Неинвазивный пренатальный тест (стандартная панель 7 синдромов)+определение пола плода",fourthСell:"30000,00"},{firstCell:"B03.006",secondCell:"НИПС1",thirdCell:"Неинвазивный пренатальный ДНК скрининг на синдром Дауна + определение пола плода",fourthСell:"23000,00"},{firstCell:"",secondCell:"700.9era",thirdCell:"Определение уровня рецептивности эндометрия - тест ERA",fourthСell:"60000,00"}],bebelya:[{firstCell:"Раздел 1",secondCell:"100",thirdCell:"Консультационно - диагностическое отделение",fourthСell:"",chapter:!0},{firstCell:"1.1",secondCell:"",thirdCell:"Врачебные лечебно-диагностические услуги",fourthСell:"",subChapter:!0},{firstCell:"В01.001.001",secondCell:"100.01",thirdCell:"Прием врача-акушера-гинеколога первичный (комплексный осмотр репродуктолога: консультация врача, инструментальный осмотр, УЗИ обследование)",fourthСell:"1800,00"},{firstCell:"В01.001.001",secondCell:"100.02",thirdCell:"Прием врача-акушера-гинеколога первичный (репродуктолог)",fourthСell:"1100,00"},{firstCell:"В01.001.001",secondCell:"100.02.01",thirdCell:"Прием врача-акушера-гинеколога первичный (репродуктолог, кандидат медицинских наук)",fourthСell:"1200,00"},{firstCell:"B01.001.002",secondCell:"100.03",thirdCell:"Прием врача-акушера-гинеколога повторный (репродуктолог)",fourthСell:"1000,00"},{firstCell:"B01.001.002",secondCell:"100.03.01",thirdCell:"Прием врача-акушера-гинеколога повторный (репродуктолог, кандидат медицинских наук)",fourthСell:"1100,00"},{firstCell:"В01.001.001",secondCell:"100.05",thirdCell:"Прием врача-акушера - гинеколога первичный (Комплекс: консультация врача, обследование в смотровом кабинете, инструментальный осмотр, ультразвуковое исследование",fourthСell:"1700,00"},{firstCell:"В01.001.001",secondCell:"100.06",thirdCell:"Прием врача-акушера - гинеколога первичный",fourthСell:"1000,00"},{firstCell:"В01.001.001",secondCell:"100.06.1",thirdCell:"Прием врача-акушера - гинеколога  первичный (кандидат медицинских наук)",fourthСell:"1100,00"},{firstCell:"B01.001.002 ",secondCell:"100.07",thirdCell:"Прием врача-акушера - гинеколога повторный",fourthСell:"900,00"},{firstCell:"B01.001.002",secondCell:"100.07.1",thirdCell:"Прием врача-акушера - гинеколога повторный (кандидат медицинских услуг)",fourthСell:"1000,00"},{firstCell:"B01.001.002",secondCell:"100.27",thirdCell:"Прием врача-акушера-гинеколога повторный  (выписка из амбулаторной карты)",fourthСell:"600,00"},{firstCell:"B01.053.001",secondCell:"100.08",thirdCell:"Прием врача-уролога первичный",fourthСell:"950,00"},{firstCell:"B01.053.001",secondCell:"100.08.2",thirdCell:"Прием врача-уролога первичный (доктор медицинских наук)",fourthСell:"2000,00"},{firstCell:"B01.053.002",secondCell:"100.09",thirdCell:"Прием врача-уролога повторный",fourthСell:"750,00"},{firstCell:"B01.053.002",secondCell:"100.09.2",thirdCell:"Прием врача-уролога повторный (доктор медицинских наук)",fourthСell:"1930,00"},{firstCell:"B01.058.001",secondCell:"100.13",thirdCell:"Прием врача-эндокринолога первичный",fourthСell:"1000,00"},{firstCell:"B01.058.002",secondCell:"100.13.1",thirdCell:"Прием врача-эндокринолога повторный",fourthСell:"900,00"},{firstCell:"B01.047.001",secondCell:"100.15",thirdCell:"Прием врача-терапевта первичный",fourthСell:"900,00"},{firstCell:"B01.047.002",secondCell:"100.15.1",thirdCell:"Прием врача-терапевта повторный",fourthСell:"800,00"},{firstCell:"B01.050.001",secondCell:"Б100.41",thirdCell:"Прием врача-травматолога-ортопеда первичный",fourthСell:"1000,00"},{firstCell:"B01.050.002",secondCell:"Б100.41.1",thirdCell:"Прием врача-травматолога-ортопеда повторный",fourthСell:"900,00"},{firstCell:"B01.027.002",secondCell:"Б100.42",thirdCell:"Прием врача-онколога первичный",fourthСell:"1000,00"},{firstCell:"B01.027.003",secondCell:"Б100.42.1",thirdCell:"Прием врача-онколога повторный",fourthСell:"900,00"},{firstCell:"B01.047.002",secondCell:"100.17",thirdCell:"Консультация врача-терапевта (допуск к программе ЭКО/гистероскопии)",fourthСell:"800,00"},{firstCell:"B01.001.002",secondCell:"100.38",thirdCell:"Консультация врача-акушера-гинеколога повторная (по результатам обследования)",fourthСell:"500,00"},{firstCell:"B01.047.002",secondCell:"100.38.1",thirdCell:"Консультация врача-терапевта повторная (по результатам обследования)",fourthСell:"500,00"},{firstCell:"B01.053.002",secondCell:"100.38.2",thirdCell:"Консультация врача-уролога повторная (по результатам обследования)",fourthСell:"500,00"},{firstCell:"",secondCell:"",thirdCell:"Ведение беременности",fourthСell:"",title:!0},{firstCell:"B01.001.004 ",secondCell:"100.21",thirdCell:"Прием врача-акушера-гинеколога беременной первичный (Комплекс: консультация врача, обследование в смотровом кабинете, инструментальный осмотр, для беременных, не состоящих на учете в клинике)",fourthСell:"1300,00"},{firstCell:"B01.001.005",secondCell:"100.21.1",thirdCell:"Прием врача-акушера-гинеколога беременной повторный  (Комплекс: :консультация врача, обследование в смотровом кабинете, инструментальный осмотр, для беременных, не состоящих на учете в клинике)",fourthСell:"950,00"},{firstCell:"B01.001.004",secondCell:"100.22",thirdCell:"Прием врача-акушера-гинеколога беременной первичный (Программа первичного обследования для постановки на учет и ведение беременности: скрининг УЗИ, скрининг биохимический, полное обследование и осмотр специалистов согласно приказу МЗ РФ)",fourthСell:"15000,00"},{firstCell:"B01.001.005",secondCell:"100.23",thirdCell:"Прием врача-акушера-гинеколога беременной повторный (Ведение беременности 1 триместр: скрининг УЗИ, скрининг биохимический, полное обследование и осмотр специалистов согласно приказу МЗ РФ, 2 посещения по 30 мин.)",fourthСell:"8000,00"},{firstCell:"B01.001.005",secondCell:"100.24",thirdCell:"Прием врача-акушера-гинеколога беременной повторный (Ведение беременности 2 триместр: скрининг УЗИ, скрининг биохимический, полное обследование согласно приказу МЗ РФ, 5 посещений по 30 мин.)",fourthСell:"13000,00"},{firstCell:"B01.001.005",secondCell:"100.25",thirdCell:"Прием врача-акушера-гинеколога беременной повторный (Ведение беременности 3 триместр: скрининг УЗИ, полное обследование, а так же: КТГ плода и осмотр специалистов согласно приказу МЗ РФ, 8 посещений по 30 мин.)",fourthСell:"26000,00"},{firstCell:"",secondCell:"",thirdCell:"Дистанционное консультирование",fourthСell:"",title:!0},{firstCell:"В01.001.001",secondCell:"ДИС100.02",thirdCell:"Консультация врача-акушера-гинеколога первичная (репродуктолог, дистанционное информирование)",fourthСell:"500,00"},{firstCell:"В01.001.001",secondCell:"ДИС100.02.01",thirdCell:"Консультация врача-акушера-гинеколога  первичная (репродуктолог, кандидат медицинских наук, дистанционное информирование)",fourthСell:"600,00"},{firstCell:"B01.001.002",secondCell:"ДИС100.03",thirdCell:"Консультация врача-акушера-гинеколога повторная (репродуктолог, дистанционная)",fourthСell:"850,00"},{firstCell:"B01.001.002",secondCell:"ДИС100.03.01",thirdCell:"Консультация врача-акушера-гинеколога повторная (репродуктолог, кандидат медицинских наук, дистанционная)",fourthСell:"950,00"},{firstCell:"В01.001.001",secondCell:"ДИС100.06",thirdCell:"Консультация врача-акушера - гинеколога первичная (дистанционное информирование)",fourthСell:"500,00"},{firstCell:"B01.001.002",secondCell:"ДИС100.07",thirdCell:"Консультация врача-акушера - гинеколога повторная (дистанционная)",fourthСell:"800,00"},{firstCell:"1.2",secondCell:"",thirdCell:"Процедуры и лечебные манипуляции",fourthСell:"",subChapter:!0},{firstCell:"1.2.1",secondCell:"",thirdCell:"Гинекология и урология",fourthСell:"",subSubChapter:!0},{firstCell:"A03.20.001",secondCell:"200.06",thirdCell:"Кольпоскопия (исследование шейки матки методом видеокольпоскопии)",fourthСell:"1050,00"},{firstCell:"A03.20.001",secondCell:"200.09",thirdCell:"Кольпоскопия",fourthСell:"1000,00"},{firstCell:"A03.20.005 ",secondCell:"200.08",thirdCell:"Вульвоскопия",fourthСell:"850,00"},{firstCell:"A16.20.036.001",secondCell:"200.30",thirdCell:"Электродиатермоконизация шейки матки (аргоноплазменная конизации)",fourthСell:"3500,00"},{firstCell:"A16.20.036.001",secondCell:"200.31",thirdCell:"Электродиатермоконизация шейки матки (радиоволновая конизация)",fourthСell:"3300,00"},{firstCell:"A16.20.090",secondCell:"200.22",thirdCell:"Снятие швов с шейки матки",fourthСell:"850,00"},{firstCell:"A16.30.069",secondCell:"200.22.1",thirdCell:"Снятие послеоперационных швов (лигатур)",fourthСell:"850,00"},{firstCell:"A11.28.008",secondCell:"200.01",thirdCell:"Инстилляция мочевого пузыря  (капельное введение лекарственных средств в мочевой пузырь)",fourthСell:"800,00"},{firstCell:"A11.20.024",secondCell:"200.01.1",thirdCell:"Введение лекарственных препаратов интравагинально (в цервикальный канал)",fourthСell:"850,00"},{firstCell:"A11.20.024",secondCell:"200.01.2",thirdCell:"Введение лекарственных препаратов интравагинально  (введение препарата Антиадгезин 3г (противоспаечный гель) в полость матки, включая стоимость препарата)",fourthСell:"7000,00"},{firstCell:"A11.20.024",secondCell:"200.01.3",thirdCell:"Введение лекарственных препаратов интравагинально  (введение препарата Антиадгезин 5г (противоспаечный гель) в полость матки, включая стоимость препарата)",fourthСell:"7500,00"},{firstCell:"A11.20.024",secondCell:"200.55",thirdCell:"Введение лекарственных препаратов интравагинально  (введение препарата Мезогель в полость матки,  включая стоимость препарата)",fourthСell:"6500,00"},{firstCell:"A11.20.024",secondCell:"200.29",thirdCell:"Введение лекарственных препаратов интравагинально (в полость матки, без стоимости препарата)",fourthСell:"850,00"},{firstCell:"A11.20.024",secondCell:"200.29.1",thirdCell:"Введение лекарственных препаратов интравагинально (введение препарата Инстиллагель в полость матки, включая стоимость препарата)",fourthСell:"1200,00"},{firstCell:"A11.20.024",secondCell:"200.65",thirdCell:"Введение лекарственных препаратов интравагинально (ванночки, инстилляция препарата в цервикальный канал, без стоимости лекарственного препарата)",fourthСell:"700,00"},{firstCell:"A11.20.003",secondCell:"200.11",thirdCell:"Биопсия тканей матки (взятие биопсийного материала с шейки матки в амбулаторных условиях с гистологическим исследованием)",fourthСell:"3000,00"},{firstCell:"А11.20.",secondCell:"200.12",thirdCell:"Получение аспирата эндометрия на гистологическое исследование",fourthСell:"4500,00"},{firstCell:"А11.20.",secondCell:"200.13",thirdCell:"Получение аспирата эндометрия для бактериологического исследования",fourthСell:"4500,00"},{firstCell:"A11.20.005",secondCell:"200.17",thirdCell:"Получение влагалищного мазка",fourthСell:"300,00"},{firstCell:"A11.20.014",secondCell:"200.18",thirdCell:"Введение внутриматочной спирали  (под УЗИ контролем, без стоимости внутриматочной спирали)",fourthСell:"2000,00"},{firstCell:"A11.20.015",secondCell:"200.19",thirdCell:"Удаление внутриматочной спирали",fourthСell:"1000,00"},{firstCell:"A11.20.013",secondCell:"200.54",thirdCell:"Тампонирование лечебное влагалища (без стоимости препаратов)",fourthСell:"250,00"},{firstCell:"A11.21.004",secondCell:"200.04",thirdCell:"Сбор секрета простаты",fourthСell:"750,00"},{firstCell:" A11.28.009",secondCell:"200.01.4",thirdCell:"Инстилляция уретры (капельное введение лекарственных средств в уретру)",fourthСell:"800,00"},{firstCell:" A11.28.009",secondCell:"200.29.2",thirdCell:"Инстилляция уретры (в уретру, без стоимости препарата)",fourthСell:"800,00"},{firstCell:"A11.28.006",secondCell:"200.52",thirdCell:"Получение уретрального отделяемого",fourthСell:"300,00"},{firstCell:"A16.01.004",secondCell:"200.39",thirdCell:"Хирургическая обработка раны или инфицированной ткани  (обработка раны и наложение асептической повязки)",fourthСell:"250,00"},{firstCell:"A16.01.004",secondCell:"200.21",thirdCell:"Хирургическая обработка раны или инфицированной ткани (обработка швов на шейке матки, влагалище)",fourthСell:"750,00"},{firstCell:"A16.01.004",secondCell:"200.66",thirdCell:"Хирургическая обработка раны или инфицированной ткани (послеоперационная обработка шейки матки)",fourthСell:"350,00"},{firstCell:"A17.30.021",secondCell:"200.14",thirdCell:"Электрокоагуляция (аргоноплазменная коагуляция шейки матки)",fourthСell:"2700,00"},{firstCell:"A17.30.021",secondCell:"200.15",thirdCell:"Электрокоагуляция (радиоволновая коагуляция шейки матки)",fourthСell:"2500,00"},{firstCell:"A21.21.001",secondCell:"200.05",thirdCell:"Массаж простаты",fourthСell:"800,00"},{firstCell:"A25.20.001",secondCell:"200.15.1",thirdCell:"Назначение лекарственных препаратов при заболеваниях женских половых органов (диагностика и лечение патологии шейки матки)",fourthСell:"3670,00"},{firstCell:"A11.02.002",secondCell:"200.33",thirdCell:"Внутримышечное введение лекарственных препаратов  (без стоимости препаратов)",fourthСell:"120,00"},{firstCell:"A11.12.003",secondCell:"200.32",thirdCell:"Внутривенное введение лекарственных препаратов  (без стоимости одноразовой иглы с адаптером и лекарственных препаратов)",fourthСell:"200,00"},{firstCell:"A11.12.003.001",secondCell:"200.34",thirdCell:"Внутривенное введение лекарственных препаратов (включая стоимость одноразовой иглы с адаптером, без стоимости лекарственных препаратов)",fourthСell:"300,00"},{firstCell:"A11.12.003.001",secondCell:"200.34.1",thirdCell:"Внутривенное введение лекарственных препаратов (включая стоимость одноразовой системы, окситоцина 5МЕ/1 мл , натрия хлорида 200 мл)",fourthСell:"500,00"},{firstCell:"A11.12.003.001",secondCell:"200.34.2",thirdCell:"Внутривенное введение лекарственных препаратов (без стоимости одноразовой системы, без стоимости лекарственных препаратов)",fourthСell:"400,00"},{firstCell:"A11.12.003.001",secondCell:"200.34.3",thirdCell:"Внутривенное введение лекарственных препаратов (включая стоимость одноразовой системы, без стоимости лекарственных препаратов)",fourthСell:"450,00"},{firstCell:"A11.12.009",secondCell:"01-00-001",thirdCell:"Взятие крови из периферической вены (с использованием вакуумной системы)",fourthСell:"150,00"},{firstCell:"A11.08.010.001",secondCell:"01-00-002",thirdCell:"Получение мазков со слизистой оболочки носоглотки",fourthСell:"100,00"},{firstCell:"A11.08.010.002",secondCell:"01-00-003",thirdCell:"Получение мазков со слизистой оболочки ротоглотки",fourthСell:"100,00"},{firstCell:"А23.02",secondCell:"200.23",thirdCell:"Постановка экспресс-теста на беременность",fourthСell:"220,00"},{firstCell:"1.2.2",secondCell:"",thirdCell:"Травматология",fourthСell:"",subSubChapter:!0},{firstCell:"A11.04.004",secondCell:"200.68",thirdCell:"Внутрисуставное введение лекарственных препаратов  (PRP терапия)",fourthСell:"8000,00"},{firstCell:"A11.04.005",secondCell:"200.68.1",thirdCell:"Пункция синовиальной сумки сустава",fourthСell:"900,00"},{firstCell:"A11.04.006",secondCell:"200.68.2",thirdCell:"Околосуставное введение лекарственных препаратов (без стоимости препаратов)",fourthСell:"900,00"},{firstCell:"A11.04.006",secondCell:"200.68.3",thirdCell:"Околосуставное введение лекарственных препаратов (со стоимостью препарата)",fourthСell:"1500,00"},{firstCell:"A16.04.051",secondCell:"200.68.4",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости ( со стоимостью препарата Русвиск 1,6% 2 мл.)",fourthСell:"10000,00"},{firstCell:"A16.04.051",secondCell:"200.68.4.1",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости ( со стоимостью препарата Русвиск 2,2% 3 мл.)",fourthСell:"15000,00"},{firstCell:"A16.04.051",secondCell:"200.68.4.2",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости ( со стоимостью препарата Русвиск 2,2% 5 мл.)",fourthСell:"20000,00"},{firstCell:"A16.04.051",secondCell:"200.68.5",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости  ( со стоимостью препарата Армавискон 1,5 % 2мл.)",fourthСell:"8500,00"},{firstCell:"A16.04.051",secondCell:"200.68.6",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости ( со стоимостью препарата Гиапро 1,5 % 30 мг/2 мл.)",fourthСell:"10000,00"},{firstCell:"A16.04.051",secondCell:"200.68.6.1",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости ( со стоимостью препарата Гиапро 2 % 40 мг/2 мл.)",fourthСell:"15000,00"},{firstCell:"A16.04.051",secondCell:"200.68.6.2",thirdCell:"Внутрисуставное введение заменителей (протезов) синовиальной жидкости ( со стоимостью препарата Гиапро Макс 2 % 40 мг/2 мл.)",fourthСell:"20000,00"},{firstCell:"A16.30.069",secondCell:"200.22.1",thirdCell:"Снятие послеоперационных швов (лигатур)",fourthСell:"850,00"},{firstCell:"A15.04.003",secondCell:"200.69",thirdCell:"Наложение повязки при операциях на суставах",fourthСell:"550,00"},{firstCell:"1.3",secondCell:"",thirdCell:"Услуги отделения УЗД (ультразвуковой диагностики)",fourthСell:"",subChapter:!0},{firstCell:"1.3.1",secondCell:"",thirdCell:"Акушерство и гинекология",fourthСell:"",subSubChapter:!0},{firstCell:"A04.20.001.001",secondCell:"600.01",thirdCell:"Ультразвуковое исследование матки и придатков трансвагиальное",fourthСell:"1000,00"},{firstCell:"A04.20.001",secondCell:"600.02",thirdCell:"Ультразвуковое исследование матки и придатков трансабдоминальное ",fourthСell:"700,00"},{firstCell:"A04.20.001.002",secondCell:"600.04",thirdCell:"Ультразвуковое исследование матки и придатков трансректальное",fourthСell:"900,00"},{firstCell:"A04.20.001 A04.20.001.001",secondCell:"600.05",thirdCell:"Ультразвуковое исследование матки и придатков трансвагиальное/ трансабдоминальное (в динамике, в течение 1 месяца)",fourthСell:"700,00"},{firstCell:"B01.052.001",secondCell:"600.06",thirdCell:"Осмотр врача ультразвуковой диагностики (УЗ-мониторинг овуляции: включает оценку эндометрия и фолликулярного аппарата яичников, на аппарате экспертного класса)",fourthСell:"800,00"},{firstCell:"B01.001.002",secondCell:"200.16",thirdCell:"Прием врача-акушера-гинеколога повторный (ультразвуковой мониторинг овуляции: включает оценку эндометрия и фолликулярного аппарата яичников)",fourthСell:"700,00"},{firstCell:"A04.20.001.004",secondCell:"600.07",thirdCell:"Ультразвуковое исследование шейки матки (УЗ-цервикометрия)",fourthСell:"800,00"},{firstCell:"A04.30.010",secondCell:"600.08",thirdCell:"Ультразвуковое исследование органов малого таза (комплексное) (трехмерная реконструкция органов малого таза (у женщин)",fourthСell:"900,00"},{firstCell:"",secondCell:"",thirdCell:"Исследования при сроке беременности до 11 недель",fourthСell:"",title:!0},{firstCell:"A04.30.001",secondCell:"600.09",thirdCell:"Ультразвуковое исследование плода  (при сроке беременности до 11 недель)",fourthСell:"1000,00"},{firstCell:"A04.30.001",secondCell:"600.10",thirdCell:"Ультразвуковое исследование плода (при сроке беременности до 11 недель, многоплодная беременность (двойня)",fourthСell:"1100,00"},{firstCell:"A04.30.001",secondCell:"600.11",thirdCell:"Ультразвуковое исследование плода (при сроке беременности до 11 недель, многоплодная беременность (тройня)",fourthСell:"1200,00"},{firstCell:"",secondCell:"",thirdCell:"Исследования при сроке беременности 11-18 недель",fourthСell:"",title:!0},{firstCell:"A04.30.001",secondCell:"600.15",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  11-18 недель, демонстрация родственникам и фотография в подарок)",fourthСell:"1300,00"},{firstCell:"A04.30.001",secondCell:"600.16",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  11-18 недель, многоплодная беременность (двойня), демонстрация родственникам и фотография в подарок)",fourthСell:"1400,00"},{firstCell:"A04.30.001",secondCell:"600.17",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  11-18 недель многоплодная беременность (тройня), демонстрация родственникам и фотография в подарок)",fourthСell:"1450,00"},{firstCell:"A04.30.001",secondCell:"600.18",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  11-18 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса)",fourthСell:"1500,00"},{firstCell:"A04.30.001",secondCell:"600.19",thirdCell:"Ультразвуковое исследование плода ( при сроке беременности  11-18 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса, многоплодная беременность (двойня)",fourthСell:"1650,00"},{firstCell:"A04.30.001",secondCell:"600.20",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  11-18 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса, многоплодная беременность (тройня)",fourthСell:"1700,00"},{firstCell:"A04.30.001",secondCell:"600.24",thirdCell:"Ультразвуковое исследование плода  (при сроке беременности до 18 недель, в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"2400,00"},{firstCell:"A04.30.001",secondCell:"600.25",thirdCell:"Ультразвуковое исследование плода (при сроке беременности до 18 недель (двойня), в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"3000,00"},{firstCell:"A04.30.001",secondCell:"600.26",thirdCell:"Ультразвуковое исследование плода (при сроке беременности до 18 недель (тройня), в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"3300,00"},{firstCell:"A04.12.024",secondCell:"600.27",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности до 18 недель, цветное картирование)",fourthСell:"1000,00"},{firstCell:"A04.12.024.001",secondCell:"600.28",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности до 18 недель (двойня), цветное картирование)",fourthСell:"1050,00"},{firstCell:"A04.12.024.002",secondCell:"600.29",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности до 18 недель (тройня), цветное картирование)",fourthСell:"1100,00"},{firstCell:"",secondCell:"",thirdCell:"Исследования при сроке беременности  18-30 недель",fourthСell:"",title:!0},{firstCell:"A04.30.001",secondCell:"600.30",thirdCell:"Ультразвуковое исследование плода (при сроке беременности 18-30 недель, демонстрация родственникам и фотография в подарок) ",fourthСell:"1500,00"},{firstCell:"A04.30.001",secondCell:"600.31",thirdCell:"Ультразвуковое исследование плода (при сроке беременности 18-30 недель (двойня), демонстрация родственникам и фотография в подарок)",fourthСell:"1600,00"},{firstCell:"A04.30.001",secondCell:"600.32",thirdCell:"Ультразвуковое исследование плода (при сроке беременности 18-30 недель (тройня), демонстрация родственникам и фотография в подарок)",fourthСell:"1700,00"},{firstCell:"A04.30.001",secondCell:"600.33",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  18-30 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса)",fourthСell:"1700,00"},{firstCell:"A04.30.001",secondCell:"600.34",thirdCell:"Ультразвуковое исследование плода ( при сроке беременности  18-30 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса, многоплодная беременность (двойня)",fourthСell:"1900,00"},{firstCell:"A04.30.001",secondCell:"600.35",thirdCell:"Ультразвуковое исследование плода (при сроке беременности 18-30 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса, многоплодная беременность (тройня)",fourthСell:"2000,00"},{firstCell:"A04.30.001",secondCell:"600.39",thirdCell:"Ультразвуковое исследование плода  (при сроке беременности 18-30 недель, в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"2400,00"},{firstCell:"A04.30.001",secondCell:"600.40",thirdCell:"Ультразвуковое исследование плода (при сроке беременности 18-30 недель (двойня), в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"3000,00"},{firstCell:"A04.30.001",secondCell:"600.41",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  18-30  недель (тройня), в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"3500,00"},{firstCell:"A04.12.024",secondCell:"600.42",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности 18-30 недель, цветное картирование)",fourthСell:"1000,00"},{firstCell:"A04.12.024",secondCell:"600.43",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности 18-30 недель (двойня), цветное картирование)",fourthСell:"1100,00"},{firstCell:"A04.12.024",secondCell:"600.44",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности 18-30 недель (тройня), цветное картирование)",fourthСell:"1200,00"},{firstCell:"",secondCell:"",thirdCell:"Исследования при сроке беременности более 30 недель",fourthСell:"",title:!0},{firstCell:"A04.30.001",secondCell:"600.45",thirdCell:"Ультразвуковое исследование плода (при сроке беременности более 30 недель, демонстрация родственникам и фотография в подарок)",fourthСell:"1300,00"},{firstCell:"A04.30.001",secondCell:"600.46",thirdCell:"Ультразвуковое исследование плода (при сроке беременности более 30 недель (двойня), демонстрация родственникам и фотография в подарок)",fourthСell:"1700,00"},{firstCell:"A04.30.001",secondCell:"600.47",thirdCell:"Ультразвуковое исследование плода (при сроке беременности более 30 недель (тройня), демонстрация родственникам и фотография в подарок)",fourthСell:"2600,00"},{firstCell:"A04.30.001",secondCell:"600.48",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  более 30 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса)",fourthСell:"1600,00"},{firstCell:"A04.30.001",secondCell:"600.49",thirdCell:"Ультразвуковое исследование плода ( при сроке беременности  более 30 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса, многоплодная беременность (двойня)",fourthСell:"2000,00"},{firstCell:"A04.30.001",secondCell:"600.50",thirdCell:"Ультразвуковое исследование плода (при сроке беременности более 30 недель с допплерографией и цветным картированием маточно-плацентарно-плодового комплекса, многоплодная беременность (тройня)",fourthСell:"2100,00"},{firstCell:"A04.30.001",secondCell:"600.54",thirdCell:"Ультразвуковое исследование плода  (при сроке беременности более 30 недель, в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"2400,00"},{firstCell:"A04.30.001",secondCell:"600.55",thirdCell:"Ультразвуковое исследование плода (при сроке беременности более 30 недель (двойня), в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"3000,00"},{firstCell:"A04.30.001",secondCell:"600.56",thirdCell:"Ультразвуковое исследование плода (при сроке беременности  более 30  недель (тройня), в режиме 3D/4D, демонстрация родственникам, запись на DVD)",fourthСell:"3500,00"},{firstCell:"A04.12.024",secondCell:"600.57",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности более 30 недель, цветное картирование)",fourthСell:"1000,00"},{firstCell:"A04.12.024",secondCell:"600.58",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности более 30 недель (двойня), цветное картирование)",fourthСell:"1100,00"},{firstCell:"A04.12.024",secondCell:"600.59",thirdCell:"Ультразвуковая допплерография маточно-плацентарного кровотока  (при сроке беременности более 30 недель (тройня), цветное картирование)",fourthСell:"1200,00"},{firstCell:"1.3.2",secondCell:"",thirdCell:"УЗИ органов малого таза, брюшной полости, забрюшинного пространства и мочеполовой системы",fourthСell:"",subSubChapter:!0},{firstCell:"B03.052.001",secondCell:"600.60",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (брюшная полость: печень, желчный пузырь, поджелудочная железа, селезенка)",fourthСell:"1000,00"},{firstCell:"B03.052.001",secondCell:"600.61",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (органы брюшной полости и почки)",fourthСell:"1400,00"},{firstCell:"B03.052.001",secondCell:"600.62",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (почки, надпочечники и забрюшинное пространство)",fourthСell:"700,00"},{firstCell:"A04.28.002.001",secondCell:"600.63",thirdCell:"Ультразвуковое исследование почек  (допплерография почек с цветным картированием)",fourthСell:"900,00"},{firstCell:"A04.28.002.003",secondCell:"600.64",thirdCell:"Ультразвуковое исследование мочевого пузыря",fourthСell:"700,00"},{firstCell:"A04.09.001",secondCell:"600.65",thirdCell:"Ультразвуковое исследование плевральной полости",fourthСell:"700,00"},{firstCell:"A04.18.001",secondCell:"600.66",thirdCell:"Ультразвуковое исследование толстой кишки",fourthСell:"700,00"},{firstCell:"A04.19.001.001",secondCell:"600.67",thirdCell:"Ультразвуковое исследование прямой кишки трансректальное (с допплерографией и цветным картированием)",fourthСell:"800,00"},{firstCell:"A04.21.001",secondCell:"600.68",thirdCell:"Ультразвуковое исследование предстательной железы",fourthСell:"800,00"},{firstCell:"A04.21.001.001",secondCell:"600.69",thirdCell:"Ультразвуковое исследование предстательной железы трансректальное",fourthСell:"800,00"},{firstCell:"A04.21.001",secondCell:"600.70",thirdCell:"Ультразвуковое исследование предстательной железы  (Комплекс: предстательная железа и мочевой пузырь, определение остаточной мочи (трансабдоминально)",fourthСell:"1300,00"},{firstCell:"A04.21.001.001",secondCell:"600.71",thirdCell:"Ультразвуковое исследование предстательной железы трансректальное ( с допплерографией и цветным картированием)",fourthСell:"900,00"},{firstCell:"A04.28.003",secondCell:"600.74",thirdCell:"Ультразвуковое исследование органов мошонки (с допплерографией)",fourthСell:"900,00"},{firstCell:"B03.052.001",secondCell:"Б600.91",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (трансвагинальное: тазовое дно и уретра)",fourthСell:"1400,00"},{firstCell:"1.3.3",secondCell:"",thirdCell:"Поверхностные структуры",fourthСell:"",subSubChapter:!0},{firstCell:"A04.22.001",secondCell:"600.80",thirdCell:"Ультразвуковое исследование щитовидной железы и паращитовидных желез  (с регионарными лимфатическими узлами и допплерографией щитовидной железы с цветным картированием)",fourthСell:"900,00"},{firstCell:"A04.20.002",secondCell:"600.82",thirdCell:"Ультразвуковое исследование молочных желез (с регионарными лимфоузлами)",fourthСell:"900,00"},{firstCell:"A04.07.002",secondCell:"600.83",thirdCell:"Ультразвуковое исследование слюнных желез ",fourthСell:"800,00"},{firstCell:"A04.06.002",secondCell:"600.84",thirdCell:"Ультразвуковое исследование лимфатических узлов (одна анатомическая зона) при системных заболеваниях",fourthСell:"800,00"},{firstCell:"A04.06.002",secondCell:"600.84.1",thirdCell:"Ультразвуковое исследование лимфатических узлов (все группы лимфатических узлов при системных заболеваниях)",fourthСell:"1400,00"},{firstCell:"A04.01.001",secondCell:"600.85",thirdCell:"Ультразвуковое исследование мягких тканей (одна анатомическая зона)",fourthСell:"700,00"},{firstCell:"1.3.4",secondCell:"",thirdCell:"Сердечно-сосудистая система",fourthСell:"",subSubChapter:!0},{firstCell:"A04.10.002",secondCell:"600.86.1",thirdCell:"Эхокардиография плода (УЗИ сердца с допплеровским анализом, одноплодная беременность)",fourthСell:"1100,00"},{firstCell:"A04.10.002",secondCell:"600.86.2",thirdCell:"Эхокардиография плода (УЗИ сердца с допплеровским анализом, многоплодная беременность)",fourthСell:"1300,00"},{firstCell:"A04.12.",secondCell:"600.87",thirdCell:"Цветное допплеровское картирование и допплерометрия сосудов матки",fourthСell:"1000,00"},{firstCell:"1.3.5",secondCell:"",thirdCell:"Ультразвуковая диагностика (дети)",fourthСell:"",subSubChapter:!0},{firstCell:"A04.20.002",secondCell:"600.82.1",thirdCell:"Ультразвуковое исследование молочных желез (с регионарными лимфоузлами у детей)",fourthСell:"750,00"},{firstCell:"B03.052.001",secondCell:"600.98",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (брюшная полость, почки, забрюшинное пространство)",fourthСell:"1200,00"},{firstCell:"B03.052.001",secondCell:"600.99",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (брюшная полость, почки)",fourthСell:"1000,00"},{firstCell:"B03.052.001",secondCell:"600.60.1",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (брюшная полость: печень, желчный пузырь, поджелудочная железа, селезенка)",fourthСell:"870,00"},{firstCell:"A04.07.002",secondCell:"600.83",thirdCell:"Ультразвуковое исследование слюнных желез",fourthСell:"700,00"},{firstCell:"A04.28.002.001",secondCell:"600.63.1",thirdCell:"Ультразвуковое исследование почек (с допплерографией сосудов)",fourthСell:"800,00"},{firstCell:"A04.28.002.001 A04.28.002.005",secondCell:"600.64.1",thirdCell:"Ультразвуковое исследование почек и мочевого пузыря (с определением остаточной мочи)",fourthСell:"1150,00"},{firstCell:"A04.28.002.005",secondCell:"600.100",thirdCell:"Ультразвуковое исследование мочевого пузыря с определением остаточной мочи",fourthСell:"650,00"},{firstCell:"B03.052.001",secondCell:"600.101",thirdCell:"Комплексное ультразвуковое исследование внутренних органов (почки и надпочечники)",fourthСell:"700,00"},{firstCell:"A04.21.001",secondCell:"600.68.1",thirdCell:"Ультразвуковое исследование предстательной железы",fourthСell:"700,00"},{firstCell:"A04.22.001",secondCell:"600.80.1",thirdCell:"Ультразвуковое исследование щитовидной железы и паращитовидных желез  (ЦДК и регионарными лимфатическими узлами)",fourthСell:"750,00"},{firstCell:"A04.28.003",secondCell:"600.104",thirdCell:"Ультразвуковое исследование органов мошонки (с допплерографией и пробой Вальсальвы)",fourthСell:"700,00"},{firstCell:"A04.01.001",secondCell:"600.105",thirdCell:"Ультразвуковое исследование мягких тканей",fourthСell:"600,00"},{firstCell:"A04.30.010",secondCell:"600.106",thirdCell:"Ультразвуковое исследование органов малого таза (комплексное), трансобдоминально",fourthСell:"700,00"},{firstCell:"1.4",secondCell:"",thirdCell:"Функциональная диагностика",fourthСell:"",subChapter:!0},{firstCell:"A05.10.006",secondCell:"Б1002.1",thirdCell:"Регистрация электрокардиограммы (ЭКГ с расшифровкой)",fourthСell:"450,00"},{firstCell:"A05.10.006",secondCell:"Б1002.2",thirdCell:"Регистрация электрокардиограммы (ЭКГ с описанием и интерпретацией данных)",fourthСell:"650,00"},{firstCell:"A05.10.006",secondCell:"Б1002.2",thirdCell:"Регистрация электрокардиограммы (ЭКГ с описанием и интерпретацией данных)",fourthСell:"650,00"},{firstCell:"A05.10.006",secondCell:"100.36",thirdCell:"Регистрация электрокардиограммы (ЭКГ без описания)",fourthСell:"330,00"},{firstCell:"A05.30.001",secondCell:"200.50",thirdCell:"Кардиотокография плода",fourthСell:"1000,00"},{firstCell:"Раздел 2",secondCell:"400",thirdCell:"Лаборатория ВРТ (вспомогательные репродуктивные технологии)",fourthСell:"",chapter:!0},{firstCell:"B01.001.002",secondCell:"400.11.01",thirdCell:"Прием врача-акушера-гинеколога повторный  (Выбор тактики лечения, овариальная гиперстимуляция без стоимости препаратов,коррекция стимуляции суперовуляции, УЗИ мониторинг созревания фолликулов)",fourthСell:"21500,00"},{firstCell:"B01.001.002",secondCell:"400.12.01",thirdCell:"Прием врача-акушера-гинеколога повторный (Выбор тактики лечения, овариальная гиперстимуляция без стоимости препаратов, коррекция стимуляции суперовуляции, УЗИ мониторинг созревания фолликулов. Для пациентов, проходящих повторный цикл ЭКО)",fourthСell:"18500,00"},{firstCell:"B01.001.002",secondCell:"400.13.01",thirdCell:"Прием врача-акушера-гинеколога повторный (ультразвуковой мониторинг созревания фолликулов)",fourthСell:"5000,00"},{firstCell:"",secondCell:"",thirdCell:"Донорский биоматериал / донор",fourthСell:"",title:!0},{firstCell:"",secondCell:"400.31",thirdCell:"Предоставление законсервированной спермы (2 соломины для процедуры ЭКО) (г.Казань)",fourthСell:"26000,00"},{firstCell:"",secondCell:"400.31.1",thirdCell:"Предоставление законсервированной спермы (1 доза), г. Москва",fourthСell:"60000,00"},{firstCell:"",secondCell:"400.31.2",thirdCell:"Предоставление законсервированной спермы (3 соломины для процедуры ВМИ) г. Казань",fourthСell:"29000,00"},{firstCell:"",secondCell:"400.32",thirdCell:"Предоставление донорских ооцитов (6 шт.)",fourthСell:"180000,00"},{firstCell:"",secondCell:"400.33",thirdCell:"Предоставление донорских ооцитов (7 шт.)",fourthСell:"195000,00"},{firstCell:"",secondCell:"400.34",thirdCell:"Предоставление донорских ооцитов (8 шт.)",fourthСell:"210000,00"},{firstCell:"",secondCell:"400.32-5",thirdCell:"Предоставление донорских ооцитов (9 шт.)",fourthСell:"225000,00"},{firstCell:"",secondCell:"400.32-6",thirdCell:"Предоставление донорских ооцитов (10 шт.)",fourthСell:"240000,00"},{firstCell:"",secondCell:"",thirdCell:"Исследование эякулята",fourthСell:"",title:!0},{firstCell:"B03.053.002",secondCell:"400.22",thirdCell:"Спермограмма (для цикла ЭКО по критериям Крюгера: спермограмма по ВОЗ, MAR - тест, исследование морфологии)",fourthСell:"3000,00"},{firstCell:"B03.053.002",secondCell:"400.22В",thirdCell:"Спермограмма (для цикла ЭКО по критериям Крюгера)",fourthСell:"2450,00"},{firstCell:"A11.21.010",secondCell:"400.22.1",thirdCell:"Обработка спермы для проведения процедуры экстракорпорального оплодотворения (осуществляется дополнительно к спермограмме для цикла ЭКО по критериям Крюгера)",fourthСell:"3000,00"},{firstCell:"B03.053.002",secondCell:"400.23",thirdCell:"Спермограмма",fourthСell:"1000,00"},{firstCell:"A12.21.001",secondCell:"400.24",thirdCell:"Микроскопическое исследование спермы  (MAR тест с использованием IgG)",fourthСell:"1800,00"},{firstCell:"A12.21.001",secondCell:"400.25",thirdCell:"Микроскопическое исследование спермы (исследование морфологии эякулята по критериям Крюгера)",fourthСell:"1500,00"},{firstCell:"A12.21.001",secondCell:"400.26",thirdCell:"Микроскопическое исследование спермы (тест на криотолерантность сперматозоидов, комплексное исследование)",fourthСell:"4500,00"},{firstCell:"A12.21.001",secondCell:"400.27",thirdCell:"Микроскопическое исследование спермы (анализ на среду)",fourthСell:"2300,00"},{firstCell:"A12.21.001",secondCell:"400.29",thirdCell:"Микроскопическое исследование спермы (проба Шуварского, посткоитальный тест)",fourthСell:"800,00"},{firstCell:"A12.21.001",secondCell:"400.37",thirdCell:"Микроскопическое исследование спермы (НВА тест на связывание сперматозоидов с гиалуроновой кислотой)",fourthСell:"6900,00"},{firstCell:"A12.21.001",secondCell:"400.46",thirdCell:"Микроскопическое исследование спермы (Тест-LeucoScreen определение пероксидаза-положительных лейкоцитов в сперме)",fourthСell:"1500,00"},{firstCell:"A12.21.001",secondCell:"400.43",thirdCell:"Микроскопическое исследование спермы (Тест на фрагментацию ДНК сперматозоидов TUNEL",fourthСell:"7200,00"},{firstCell:"",secondCell:"",thirdCell:"Биопсия эмбрионов, ПГД",fourthСell:"",title:!0},{firstCell:"A11.30.010",secondCell:"400.38",thirdCell:"Биопсия эмбриона  (биопсия трофэктодермы бластоцисты (1 эмбриона на 5-6 день развития)",fourthСell:"12000,00"},{firstCell:"A11.30.010.001",secondCell:"400.39",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (2 эмбрионов на 5-6 день развития)",fourthСell:"13000,00"},{firstCell:"A11.30.010.002",secondCell:"400.40",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (3 эмбрионов на 5-6 день развития)",fourthСell:"17500,00"},{firstCell:"A11.30.010.004",secondCell:"400.41.1",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (4 эмбрионов на 5-6 день развития)",fourthСell:"19000,00"},{firstCell:"A11.30.010.005",secondCell:"400.41.2",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (5 эмбрионов на 5-6 день развития)",fourthСell:"24500,00"},{firstCell:"A11.30.010.006",secondCell:"400.41.3",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (6 эмбрионов на 5-6 день развития)",fourthСell:"27000,00"},{firstCell:"A11.30.010.007",secondCell:"400.41.4",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (7 эмбрионов на 5-6 день развития)",fourthСell:"33000,00"},{firstCell:"A11.30.010.008",secondCell:"400.41.5",thirdCell:"Биопсия эмбриона (биопсия трофэктодермы бластоцисты (8 эмбрионов на 5-6 день развития)",fourthСell:"35500,00"},{firstCell:"А10.20.001.001",secondCell:"400.42",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А)  (исследование 1 эмбриона методом NGS)",fourthСell:"35000,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.1",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А) (исследование 2 эмбрионов методом NGS",fourthСell:"60000,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.2",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А)  (исследование 3 эмбрионов методом NGS)",fourthСell:"80000,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.3",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А)  (исследование 4 эмбрионов методом NGS)",fourthСell:"95000,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.8",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А)  (исследование 5 эмбрионов методом NGS)",fourthСell:"115000,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.4",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А)  (исследование 6 эмбрионов методом NGS)",fourthСell:"135000,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.5",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А) (исследование 7 эмбрионов методом NGS)",fourthСell:"157500,00"},{firstCell:"А10.20.001.001",secondCell:"400.42.6",thirdCell:"Преимплантационное генетическое исследование на анеуплоидии (ПГТ-А)  (исследование 8 эмбрионов методом NGS)",fourthСell:"180000,00"},{firstCell:"А10.20.001.002",secondCell:"400.42.9",thirdCell:"Преимплантационное генетическое исследование на моногенные заболевания (ПГТ-М)",fourthСell:"170000,00"},{firstCell:"Раздел 3",secondCell:"700",thirdCell:"Лабораторные исследования",fourthСell:"",chapter:!0},{firstCell:"",secondCell:"",thirdCell:"Генетические исследования",fourthСell:"",title:!0},{firstCell:"B03.045.031",secondCell:"700.1",thirdCell:"Тест на родство «Универсальный»",fourthСell:"18000,00"},{firstCell:"B03.045.031",secondCell:"700.1.1",thirdCell:"Тест на родство «Универсальный» (досудебная, судебная экспертиза)",fourthСell:"20000,00"},{firstCell:"B03.045.031",secondCell:"700.2",thirdCell:"Тест на отцовство/материнство (дуэт) 20 маркеров",fourthСell:"13000,00"},{firstCell:"B03.045.031",secondCell:"700.2.1",thirdCell:"Дополнительный участник исследования, 20 маркеров",fourthСell:"6000,00"},{firstCell:"B03.045.031",secondCell:"700.2.1.1",thirdCell:"Тест на отцовство/материнство (дуэт, трио) 20 маркеров (судебная/досудебная экспертиза)",fourthСell:"17000,00"},{firstCell:"B03.045.031",secondCell:"700.5",thirdCell:"Тест на отцовство/материнство ТРИО, 20 маркеров (3 участника: 1 предполагаемый родитель, 1 безусловный родитель, 1 ребенок)",fourthСell:"14000,00"},{firstCell:"B03.045.031",secondCell:"700.7",thirdCell:"ТЕСТ НА РОДСТВО, 20 маркеров (исследуются аутосомные маркеры, 2 участника: дедушка/бабушка - внук/внучка, дядя/тетя - племянник/племянница (авункулярный тест), родные/сводные братья/сестры (полно- и полусиблинговый, близнецовый тест",fourthСell:"13500,00"},{firstCell:"B03.045.031",secondCell:"700.8",thirdCell:"ТЕСТ НА РОДСТВО, 24 маркера (исследуются аутосомные маркеры, 2 участника: дедушка/бабушка - внук/внучка, дядя/тетя - племянник/племянница (авункулярный тест), родные/сводные братья/сестры (полно- и полусиблинговый, близнецовый тест",fourthСell:"17000,00"},{firstCell:"B03.045.031",secondCell:"700.10",thirdCell:"ТЕСТ на родство, тестирование Х-хромосом (2 участника: бабушка по линии отца, внучка)",fourthСell:"16000,00"},{firstCell:"B03.045.031",secondCell:"700.11",thirdCell:"ТЕСТ на родство, тестирование Х-хромосом (2 участника: бабушка по линии отца, внучка), досудебная/судебная экспертиза",fourthСell:"22000,00"},{firstCell:"B03.045.031",secondCell:"700.13",thirdCell:"ТЕСТ НА РОДСТВО, тестирование Y-хромосомы (2 участника: дедушка по линии отца - внук, дядя - племянник, родные/сводные по отцу братья)",fourthСell:"16000,00"},{firstCell:"B03.045.031",secondCell:"700.26",thirdCell:"ТЕСТ на отцовство/материнство (дуэт, трио) 20 маркеров (досудебная экспертиза)",fourthСell:"15000,00"},{firstCell:"B03.045.031",secondCell:"700.44",thirdCell:"ВЫДЕЛЕНИЕ ДНК ИЗ НЕСТАНДАРТНОГО ОБРАЗЦА 1 ТИПА (волосы с корешками; ногти; окурок; жевательная резинка; зубная щетка; ушная сера; детская соска-пустыш",fourthСell:"5000,00"},{firstCell:"B03.045.031",secondCell:"ВКР 700.1",thirdCell:"Неинвазивный тест по дородовому установлению отцовствства",fourthСell:"90000,00"},{firstCell:"B03.006",secondCell:"НИПТ31",thirdCell:"Неинвазивный пренатальный тест (расширенная панель, 31 синдром)+определение пола плода",fourthСell:"35000,00"},{firstCell:"B03.006",secondCell:"НИПТ7",thirdCell:"Неинвазивный пренатальный тест (стандартная панель 7 синдромов)+определение пола плода",fourthСell:"30000,00"},{firstCell:"B03.006",secondCell:"НИПС1",thirdCell:"Неинвазивный пренатальный ДНК скрининг на синдром Дауна + определение пола плода",fourthСell:"23000,00"},{firstCell:"",secondCell:"700.9era",thirdCell:"Определение уровня рецептивности эндометрия - тест ERA",fourthСell:"60000,00"}],geneticResearch:[{firstCell:"01110",secondCell:"8",thirdCell:"НИПС Т21 - Неинвазивный пренатальный ДНК скрининг на синдром Дауна",fourthСell:"23000,00"},{firstCell:"1438",secondCell:"8",thirdCell:"НИПС 5 - Неинвазивный пренатальный ДНК скрининг на 5 синдромов",fourthСell:"30000,00"},{firstCell:"866",secondCell:"8",thirdCell:"НИПС 12 - Неинвазивный пренатальный ДНК скрининг на 12 синдромов",fourthСell:"35000,00"},{firstCell:"16",secondCell:"14",thirdCell:"НИПТ Panorama (Natera, США), базовая панель - неинвазивный пренатальный ДНК тест на 8 синдромов",fourthСell:"30000,00"},{firstCell:"498",secondCell:"14",thirdCell:"НИПТ Panorama (Natera, США), расширенная панель - неинвазивный пренатальный ДНК тест на 13 синдромов",fourthСell:"44500,00"},{firstCell:"1416",secondCell:"21",thirdCell:"Vistara - скрининг на 25 моногенных синдромов",fourthСell:"69000,00"},{firstCell:"1724",secondCell:"8",thirdCell:"НИПС Расширенный - Неинвазивный пренатальный ДНК скрининг на 31 синдром",fourthСell:"34000,00"},{firstCell:"589",secondCell:"7",thirdCell:"Хромосомный микроматричный анализ пренатальный",fourthСell:"15000,00"},{firstCell:"797",secondCell:"14",thirdCell:"Пренатальная ДНК-диагностика мышечной дистрофии Дюшенна/Беккера",fourthСell:"11700,00"},{firstCell:"26",secondCell:"7",thirdCell:"Неинвазивное определение Резус-фактора плода",fourthСell:"7300,00"},{firstCell:"834",secondCell:"7",thirdCell:"Неинвазивное определение пола плода. Скрининговый тест",fourthСell:"6500,00"},{firstCell:"672",secondCell:"14",thirdCell:"Пренатальная диагностика спинальной амиотрофии, типов I, II, III и IV",fourthСell:"10500,00"},{firstCell:"818",secondCell:"14",thirdCell:"Муковисцидоз: пренатальная ДНК диагностика",fourthСell:"12700,00"},{firstCell:"836",secondCell:"14",thirdCell:"Неинвазивное определение пола плода. Экспертный тест",fourthСell:"35000,00"},{firstCell:"871",secondCell:"14",thirdCell:"Поиск мутаций в гене GJB2 (Пренатальная диагностика)",fourthСell:"10000,00"},{firstCell:"1109",secondCell:"14",thirdCell:"Болезнь Норри: пренатальная ДНК-диагностика",fourthСell:"10500,00"},{firstCell:"1112",secondCell:"14",thirdCell:"Болезнь Шарко-Мари-Тута тип II: пренатальная диагностика",fourthСell:"12100,00"},{firstCell:"1179",secondCell:"14",thirdCell:"Врожденная гиперплазия коры надпочечников (адреногенитальный синдром). Пренатальная ДНК- диагностика",fourthСell:"11700,00"},{firstCell:"1357",secondCell:"14",thirdCell:"Пренатальная диагностика хореи Гентингтона",fourthСell:"11700,00"},{firstCell:"1569",secondCell:"14",thirdCell:"Гемофилия. Пренатальная диагностика",fourthСell:"12100,00"},{firstCell:"1749",secondCell:"21",thirdCell:"Пренатальная диагностика моногенного аутосомно-доминантного заболевания (генотип пробанда и родителей известен)",fourthСell:"5000,00"},{firstCell:"1750",secondCell:"21",thirdCell:"Пренатальная диагностика моногенного аутосомно-доминантного заболевания (генотип пробанда и родителей неизвестен)",fourthСell:"12000,00"},{firstCell:"1751",secondCell:"21",thirdCell:"Пренатальная диагностика моногенного аутосомно-рецессивного заболевания (пробанд - гомозигота, генотип пробанда и родителей известен)",fourthСell:"5000,00"},{firstCell:"1752",secondCell:"21",thirdCell:"Пренатальная диагностика моногенного аутосомно-рецессивного заболевания (пробанд - компаунд гетерозигота, генотип пробанда и родителей известен)",fourthСell:"10000,00"},{firstCell:"1753",secondCell:"21",thirdCell:"Пренатальная диагностика моногенного аутосомно-рецессивного заболевания (пробанд - гомозигота, генотип пробанда и родителей неизвестен)",fourthСell:"12000,00"},{firstCell:"1754",secondCell:"21",thirdCell:"Пренатальная диагностика моногенного аутосомно-рецессивного заболевания (пробанд - компаунд гетерозигота, генотип пробанда и родителей неизвестен)",fourthСell:"35000,00"},{firstCell:"1755",secondCell:"21",thirdCell:"Пренатальная диагностика моногенного X-сцепленного заболевания (генотип пробанда известен)",fourthСell:"7000,00"},{firstCell:"1756",secondCell:"21",thirdCell:"Пренатальная диагностика моногенного X-сцепленного заболевания (генотип пробанда неизвестен)",fourthСell:"12000,00"},{firstCell:"856",secondCell:"90",thirdCell:"Полное секвенирование генома GenomeUNI",fourthСell:"99000,00"},{firstCell:"1351",secondCell:"90",thirdCell:"Полное секвенирование генома GenomeUNI при отрицательном результате анализа неврологических панелей генов",fourthСell:"64000,00"},{firstCell:"1341",secondCell:"90",thirdCell:"Полное секвенирование генома пробанда и родителей (3 человека) - GenomeUNI трио",fourthСell:"199000,00"},{firstCell:"1350",secondCell:"90",thirdCell:"Полное секвенирование генома родителей, при ранее сделанном полногеномном секвенировании пробанда",fourthСell:"117000,00"},{firstCell:"554",secondCell:"90",thirdCell:"Полное секвенирование экзома",fourthСell:"43000,00"},{firstCell:"841",secondCell:"90",thirdCell:"Полное секвенирование экзома (трио)",fourthСell:"129000,00"},{firstCell:"224",secondCell:"90",thirdCell:"Клиническое секвенирование экзома",fourthСell:"40000,00"},{firstCell:"586",secondCell:"90",thirdCell:"Секвенирование митохондриального генома",fourthСell:"35000,00"},{firstCell:"508",secondCell:"30",thirdCell:"Панель «Заболевания соединительной ткани»",fourthСell:"22750,00"},{firstCell:"786",secondCell:"30",thirdCell:"Панель «Факоматозы и наследственный рак»",fourthСell:"25000,00"},{firstCell:"671",secondCell:"90",thirdCell:"Панель «Наследственные эпилепсии»",fourthСell:"35000,00"},{firstCell:"523",secondCell:"30",thirdCell:"Панель «Наследственная тугоухость»",fourthСell:"22750,00"},{firstCell:"825",secondCell:"90",thirdCell:"Панель «Нейродегенеративные заболевания»",fourthСell:"35000,00"},{firstCell:"530",secondCell:"30",thirdCell:"Панель «Первичный иммунодефицит и наследственные анемии»",fourthСell:"22750,00"},{firstCell:"823",secondCell:"90",thirdCell:"Панель «Умственная отсталость и расстройства аутистического спектра»",fourthСell:"35000,00"},{firstCell:"824",secondCell:"90",thirdCell:"Панель «Наследственные нарушения обмена веществ»",fourthСell:"35000,00"},{firstCell:"826",secondCell:"90",thirdCell:"Панель «Нервно-мышечные заболевания»",fourthСell:"35000,00"},{firstCell:"837",secondCell:"30",thirdCell:"Панель «Наследственные заболевания глаз»",fourthСell:"22750,00"},{firstCell:"838",secondCell:"30",thirdCell:"Панель «Наследственные заболевания почек»",fourthСell:"22750,00"},{firstCell:"839",secondCell:"30",thirdCell:"Панель «Наследственные заболевания сердца»",fourthСell:"22750,00"},{firstCell:"840",secondCell:"30",thirdCell:"Панель «Наследственные нарушения репродуктивной системы»",fourthСell:"22750,00"},{firstCell:"857",secondCell:"30",thirdCell:"Панель «Наследственные заболевания желудочно-кишечного тракта»",fourthСell:"22750,00"},{firstCell:"1466",secondCell:"90",thirdCell:"Большая неврологическая панель",fourthСell:"35000,00"},{firstCell:"1358",secondCell:"10",thirdCell:"Рак легких, базовая панель (гены EGFR, KRAS, NRAS, BRAF)",fourthСell:"12500,00"},{firstCell:"1460",secondCell:"14",thirdCell:"Рак легких, жидкостная биопсия, базовая панель (гены EGFR, KRAS, NRAS, BRAF)",fourthСell:"26000,00"},{firstCell:"262",secondCell:"30",thirdCell:"Панель «Наследственный рак толстой кишки»",fourthСell:"25000,00"},{firstCell:"811",secondCell:"10",thirdCell:"Определение мутаций в генах BRAF, NRAS и KIT",fourthСell:"14000,00"},{firstCell:"1096",secondCell:"10",thirdCell:"Определение мутаций в генах BRAF, KRAS и NRAS",fourthСell:"11000,00"},{firstCell:"8",secondCell:"10",thirdCell:"Определение мутаций в гене KRAS",fourthСell:"8000,00"},{firstCell:"639",secondCell:"10",thirdCell:"Определение мутаций в гене NRAS",fourthСell:"8000,00"},{firstCell:"9",secondCell:"10",thirdCell:"Определение мутаций V600 в гене BRAF",fourthСell:"7000,00"},{firstCell:"1173",secondCell:"10",thirdCell:"Определение мутаций в генах KIT и PDGFRA",fourthСell:"13000,00"},{firstCell:"1183",secondCell:"14",thirdCell:"Определение мутаций в гене EGFR в плазме крови (жидкостная биопсия)",fourthСell:"20000,00"},{firstCell:"7",secondCell:"10",thirdCell:"Определение мутаций в гене EGFR",fourthСell:"8000,00"},{firstCell:"788",secondCell:"30",thirdCell:"Панель «Наследственный рак молочной железы»",fourthСell:"25000,00"},{firstCell:"787",secondCell:"30",thirdCell:"Панель «Женские наследственные опухоли»",fourthСell:"25000,00"},{firstCell:"829",secondCell:"30",thirdCell:"Панель «Наследственные опухолевые синдромы»",fourthСell:"25000,00"},{firstCell:"5",secondCell:"5",thirdCell:"Определение 8 частых мутаций в генах BRCA1 и BRCA2",fourthСell:"3700,00"},{firstCell:"1182",secondCell:"10",thirdCell:"Определение мутаций в гене PIK3CA",fourthСell:"7000,00"},{firstCell:"355",secondCell:"21",thirdCell:"Тест ОнкоКарта",fourthСell:"29000,00"},{firstCell:"354",secondCell:"30",thirdCell:"Тест Онкоскан",fourthСell:"49000,00"},{firstCell:"848",secondCell:"15",thirdCell:"Тест Mammaprint",fourthСell:"210000,00"},{firstCell:"1169",secondCell:"21",thirdCell:"Рак легких, расширенная панель",fourthСell:"35000,00"},{firstCell:"1108",secondCell:"30",thirdCell:"Жидкостная биопсия на 57 генов",fourthСell:"49000,00"},{firstCell:"1039",secondCell:"30",thirdCell:"Жидкостная биопсия для рака легкого, расширенная панель",fourthСell:"110000,00"},{firstCell:"1093",secondCell:"10",thirdCell:"Определение экспрессии гена PCA3",fourthСell:"5000,00"},{firstCell:"1093",secondCell:"10",thirdCell:"Определение экспрессии гена PCA3",fourthСell:"5000,00"},{firstCell:"981",secondCell:"10",thirdCell:"Определение транслокации BCR-ABL t(9;22) (p230) (качественное)",fourthСell:"4900,00"},{firstCell:"810",secondCell:"10",thirdCell:"Определение микросателлитной нестабильности (MSI)",fourthСell:"6000,00"},{firstCell:"651",secondCell:"10",thirdCell:"Определение транслокаций гена ALK",fourthСell:"15000,00"},{firstCell:"852",secondCell:"10",thirdCell:"Определение транслокаций гена ROS1",fourthСell:"15000,00"},{firstCell:"853",secondCell:"14",thirdCell:"Определение транслокаций гена RET",fourthСell:"15000,00"},{firstCell:"1184",secondCell:"14",thirdCell:"Определение амплификаций гена MET",fourthСell:"12000,00"},{firstCell:"850",secondCell:"14",thirdCell:"Определение числа копий гена MYCN",fourthСell:"15000,00"},{firstCell:"982",secondCell:"14",thirdCell:"Определение транслокации BCR-ABL t(9;22) (p230) (количественное)",fourthСell:"6500,00"},{firstCell:"600",secondCell:"10",thirdCell:"Определение амплификаций гена ERBB2 (Her2/Neu)",fourthСell:"15000,00"},{firstCell:"849",secondCell:"14",thirdCell:"Определение числа копий гена KMT2A (MLL)",fourthСell:"15000,00"},{firstCell:"980",secondCell:"10",thirdCell:"Определение транслокации BCR-ABL t(9;22) (р190) (количественное)",fourthСell:"3500,00"},{firstCell:"978",secondCell:"10",thirdCell:"Определение транслокации BCR-ABL t(9;22) (р210) (количественное)",fourthСell:"3600,00"},{firstCell:"1057",secondCell:"14",thirdCell:"Определение мутации W515 в гене MPL",fourthСell:"5500,00"},{firstCell:"851",secondCell:"14",thirdCell:"Определение числа копий локуса 1p36",fourthСell:"15000,00"},{firstCell:"10",secondCell:"7",thirdCell:"Определение мутации V617F в гене JAK2 (качественное)",fourthСell:"2500,00"},{firstCell:"983",secondCell:"10",thirdCell:"Определение мутации D816V в гене KIT",fourthСell:"3000,00"},{firstCell:"1058",secondCell:"10",thirdCell:"Определение мутаций 9 экзона гена CALR",fourthСell:"5350,00"},{firstCell:"1049",secondCell:"10",thirdCell:"Определение транслокации PML-RARA t(15;17) (количественное), bcr1-2",fourthСell:"4000,00"},{firstCell:"854",secondCell:"14",thirdCell:"Определение транслокаций гена SS18 (SYT)",fourthСell:"15000,00"},{firstCell:"855",secondCell:"14",thirdCell:"Определение транслокаций гена EWSR1",fourthСell:"15000,00"},{firstCell:"1050",secondCell:"10",thirdCell:"Определение транслокации AML1-ETO t(8;21)",fourthСell:"3500,00"},{firstCell:"559",secondCell:"30",thirdCell:"Экзомное секвенирование генов BRCA1 и BRCA2",fourthСell:"22750,00"},{firstCell:"975",secondCell:"10",thirdCell:"Поиск мутации 1100delC в гене CHEK2",fourthСell:"3000,00"},{firstCell:"976",secondCell:"10",thirdCell:"Поиск мутации ivs2+1G>A в гене CHEK2",fourthСell:"3000,00"},{firstCell:"977",secondCell:"10",thirdCell:"Определение транслокации BCR-ABL t(9;22) (р210) (качественное)",fourthСell:"3000,00"},{firstCell:"979",secondCell:"10",thirdCell:"Определение транслокации BCR-ABL t(9;22) (р190) (качественное)",fourthСell:"3000,00"},{firstCell:"1168",secondCell:"7",thirdCell:"Определение мутации V617F в гене JAK2 (количественное)",fourthСell:"3000,00"},{firstCell:"1176",secondCell:"10",thirdCell:"Определение транслокации PML-RARA t(15;17), bcr 1-2 (качественное)",fourthСell:"3000,00"},{firstCell:"1177",secondCell:"10",thirdCell:"Определение транслокации PML-RARA t(15;17), bcr 3 (качественное)",fourthСell:"2900,00"},{firstCell:"1186",secondCell:"14",thirdCell:"Определение делеций в 12 экзоне гена JAK2",fourthСell:"5000,00"},{firstCell:"1333",secondCell:"14",thirdCell:"Определение метилирования промотора гена MGMT",fourthСell:"6900,00"},{firstCell:"1334",secondCell:"14",thirdCell:"Определение коделеции локусов 1p/19q",fourthСell:"6900,00"},{firstCell:"1410",secondCell:"15",thirdCell:"Определение мутации в генах H3F3A, HIST1H3B и HIST1H3С",fourthСell:"15500,00"},{firstCell:"1461",secondCell:"21",thirdCell:"Онкокарта, 60 генов (+BRCA1, BRCA2, PALB2)",fourthСell:"39000,00"},{firstCell:"1462",secondCell:"21",thirdCell:"Жидкостная биопсия на 60 генов (+BRCA1, BRCA2, PALB2)",fourthСell:"62000,00"},{firstCell:"1463",secondCell:"21",thirdCell:"Определение мутаций в генах BRCA1, BRCA2, PALB2 в ткани опухоли",fourthСell:"20000,00"},{firstCell:"1465",secondCell:"21",thirdCell:"Жидкостная биопсия для рака толстой кишки и меланомы",fourthСell:"26000,00"},{firstCell:"1477",secondCell:"14",thirdCell:"Определение мутации в гене IDH2",fourthСell:"6000,00"},{firstCell:"1780",secondCell:"14",thirdCell:"Анализ химерного гена CBFbMYH11-inv.16, t(16;16) (качественно)",fourthСell:"5000,00"},{firstCell:"1510",secondCell:"7",thirdCell:"Определение делеций в 12 экзоне гена JAK2 (количественное)",fourthСell:"4500,00"},{firstCell:"1476",secondCell:"14",thirdCell:"Определение мутации в гене IDH1",fourthСell:"6000,00"},{firstCell:"1505",secondCell:"12",thirdCell:"Определение мутаций вызывающих резистентность к ингибиторам тирозинкиназной активности при ХМЛ",fourthСell:"10000,00"},{firstCell:"1570",secondCell:"10",thirdCell:"Определение мутаций в гене KIT",fourthСell:"7000,00"},{firstCell:"1571",secondCell:"14",thirdCell:"Определение мутаций в гене KIT в плазме крови (жидкостная биопсия)",fourthСell:"11000,00"},{firstCell:"1572",secondCell:"14",thirdCell:"Определение мутаций в гене PIK3CA в плазме крови (жидкостная биопсия)",fourthСell:"11000,00"},{firstCell:"1630",secondCell:"21",thirdCell:"Мониторинг минимальной остаточной болезни. Signatera 2 (анализ плазмы крови)",fourthСell:"75000,00"},{firstCell:"1631",secondCell:"21",thirdCell:"Мониторинг минимальной остаточной болезни. Signatera 1 (изготовление тест-системы АКЦИЯ)",fourthСell:"120000,00"},{firstCell:"1679",secondCell:"15",thirdCell:"Цитогенетическое исследование крови/костного мозга при гемобластозах",fourthСell:"8000,00"},{firstCell:"1686",secondCell:"21",thirdCell:"Определение мутаций в гене TP53",fourthСell:"29000,00"},{firstCell:"1729",secondCell:"10",thirdCell:"Определение транслокации PML-RARA t(15;17) (количественное), bcr3",fourthСell:"4500,00"},{firstCell:"1732",secondCell:"21",thirdCell:"Определение опухолевой мутационной нагрузки (TMB)",fourthСell:"45000,00"},{firstCell:"1740",secondCell:"14",thirdCell:"Определение транслокаций генов NTRK1, NTRK2, NTRK3",fourthСell:"25000,00"},{firstCell:"1744",secondCell:"14",thirdCell:"Определение мутаций с пропуском 14 экзона гена MET",fourthСell:"7000,00"},{firstCell:"1767",secondCell:"14-50",thirdCell:"FoundationOne CDx",fourthСell:"395000,00"},{firstCell:"1768",secondCell:"14-50",thirdCell:"FoundationOne Heme",fourthСell:"395000,00"},{firstCell:"1769",secondCell:"14-50",thirdCell:"FoundationOne Liquid",fourthСell:"395000,00"},{firstCell:"1779",secondCell:"14",thirdCell:"Определение транслокации RUNX1RUNX1T1-t(8;21)(качественно)",fourthСell:"5000,00"},{firstCell:"1781",secondCell:"7",thirdCell:"FISH исследование транслокаций для гемобластозов (1 зонд)",fourthСell:"6700,00"},{firstCell:"1784",secondCell:"22",thirdCell:"Определение мутаций в гене EZH2",fourthСell:"7000,00"},{firstCell:"1785",secondCell:"22",thirdCell:"Определение мутаций в гене ASXL1",fourthСell:"7000,00"},{firstCell:"1787",secondCell:"10",thirdCell:"Молекулярно-генетическое исследование В -клеточной клональности",fourthСell:"9500,00"},{firstCell:"1788",secondCell:"10",thirdCell:"Молекулярно-генетическое исследование Т-клеточной клональности",fourthСell:"9500,00"},{firstCell:"1789",secondCell:"10",thirdCell:"Определение делеций в гене TP53",fourthСell:"8000,00"},{firstCell:"1791",secondCell:"10",thirdCell:"Определение делеций в гене ATM",fourthСell:"6500,00"},{firstCell:"1793",secondCell:"12",thirdCell:"ПАНЕЛЬ «Множественная миелома»",fourthСell:"25000,00"},{firstCell:"1797",secondCell:"14",thirdCell:"Определение p.L625P в гене MYD88",fourthСell:"5000,00"},{firstCell:"1799",secondCell:"10",thirdCell:"Определение транслокации t(9;22) на операционном (биопсийном материале)",fourthСell:"12000,00"},{firstCell:"1800",secondCell:"14",thirdCell:"Определение мутации T790M в гене EGFR в плазме крови (жидкостная биопсия)",fourthСell:"13000,00"},{firstCell:"1801",secondCell:"21",thirdCell:"Определение делеций в гене BRCA2 методом MLPA",fourthСell:"6500,00"},{firstCell:"1805",secondCell:"14",thirdCell:"FISH исследование хромосомных аберраций на материале парафинового блока(1 зонд)",fourthСell:"15000,00"},{firstCell:"1807",secondCell:"10",thirdCell:"Панель «Рак щитовидной железы»: мутации KRAS, NRAS, HRAS, TERT, BRAF, транслокация RET/PTC, транслокация PAX8/PPARG",fourthСell:"15000,00"},{firstCell:"1808",secondCell:"14",thirdCell:"Определение мутаций в гене ESR1",fourthСell:"7000,00"},{firstCell:"682",secondCell:"10",thirdCell:"Молекулярное кариотипирование абортивного материала «ОПТИМА»",fourthСell:"12500,00"},{firstCell:"1487",secondCell:"90",thirdCell:"Полное секвенирование генома абортивного материала «ФЕРТУС»",fourthСell:"80000,00"},{firstCell:"1353",secondCell:"90",thirdCell:"Геном «ФЕРТИ» - диагностика генетических причин бесплодия у мужчин и женщин",fourthСell:"75000,00"},{firstCell:"1",secondCell:"10",thirdCell:"Анализ генетических полиморфизмов, ассоциированных с риском тромбообразования с расчетом интегративного риска",fourthСell:"6900,00"},{firstCell:"2",secondCell:"5",thirdCell:"Анализ полиморфизмов в генах фолатного цикла",fourthСell:"4900,00"},{firstCell:"23",secondCell:"5",thirdCell:"Типирование по трем генам HLA II класса (DRB1, DQA1, DQB1)",fourthСell:"9900,00"},{firstCell:"490",secondCell:"14",thirdCell:"Исследование инактивации Х хромосомы",fourthСell:"6900,00"},{firstCell:"793",secondCell:"7",thirdCell:"Расширенный поиск микроделеций AZF локуса Y-хромосомы",fourthСell:"8100,00"},{firstCell:"578",secondCell:"14",thirdCell:"FISH-диагностика (хромосомы X и Y)",fourthСell:"14000,00"},{firstCell:"358",secondCell:"14",thirdCell:"Определение генотипа по резус-фактору, включая гетерозиготное носительство",fourthСell:"8000,00"},{firstCell:"35",secondCell:"7",thirdCell:"Анализ полиморфизмов в генах ACE и AGTсвязанных с риском артериальной гипертензии, гипертензивных осложнений беременности и преэклампсии",fourthСell:"3000,00"},{firstCell:"844",secondCell:"21",thirdCell:"Инверсия пола 46XY: анализ наличия SRY гена",fourthСell:"5000,00"},{firstCell:"944",secondCell:"14",thirdCell:"Анализ числа CAG-повторов в гене андрогенового рецептора (AR)",fourthСell:"4900,00"},{firstCell:"648",secondCell:"14",thirdCell:"Поиск частых мутаций в экзоне 10 гена MEFV (Периодическая болезнь)",fourthСell:"7800,00"},{firstCell:"11",secondCell:"14",thirdCell:"Синдром ломкой Х хромосомы: анализ метилирования (синдром Мартина-Белл)",fourthСell:"6900,00"},{firstCell:"582",secondCell:"90",thirdCell:"Врожденная гиперкальциемия (секвенирование гена CYP24A1)",fourthСell:"30000,00"},{firstCell:"31",secondCell:"21",thirdCell:"Врожденная гиперплазия коры надпочечников (адреногенитальный синдром). Поиск 9-ти наиболее частых мутаций в гене CYP21A2 у родительской пары при недоступности материала больного ребенка",fourthСell:"12100,00"},{firstCell:"12",secondCell:"21",thirdCell:"Синдром ломкой Х хромосомы: определение числа CGG повторов",fourthСell:"10000,00"},{firstCell:"514",secondCell:"90",thirdCell:"Муковисцидоз. Секвенирование гена CFTR",fourthСell:"30000,00"},{firstCell:"29",secondCell:"90",thirdCell:"Синдром Драве. Секвенирование гена SCN1A",fourthСell:"30000,00"},{firstCell:"30",secondCell:"21",thirdCell:"Врожденная гиперплазия коры надпочечников (адреногенитальный синдром). Поиск 9-ти наиболее частых мутаций в гене CYP21A2",fourthСell:"9500,00"},{firstCell:"218",secondCell:"30",thirdCell:"Тандемная масс-спектрометрия (спектр ацилкарнитинов, аминокислот)",fourthСell:"4800,00"},{firstCell:"492",secondCell:"21",thirdCell:"Газовая хроматография образцов мочи (органические ацидурии)",fourthСell:"6500,00"},{firstCell:"38",secondCell:"21",thirdCell:"Альбинизм глазокожный: поиск мутаций в гене TYR",fourthСell:"11500,00"},{firstCell:"4",secondCell:"7",thirdCell:"Анализ полиморфизмов, ассоциированных с функциями интерлейкина 28В",fourthСell:"1000,00"},{firstCell:"39",secondCell:"90",thirdCell:"Альбинизм глазокожный: поиск мутаций в гене OCA2",fourthСell:"30000,00"},{firstCell:"3",secondCell:"7",thirdCell:"Анализ полиморфизма c.-13910C>T, ассоциированного с метаболизмом лактозы",fourthСell:"1300,00"},{firstCell:"46",secondCell:"21",thirdCell:"Анемия Даймонда-Блекфена: поиск мутаций в гене RPS19",fourthСell:"12100,00"},{firstCell:"57",secondCell:"14",thirdCell:"Атрофия зрительного нерва Лебера: поиск трех частых мутаций митохондриальной ДНК",fourthСell:"5800,00"},{firstCell:"58",secondCell:"21",thirdCell:"Атрофия зрительного нерва Лебера: поиск 12-ти частых мутаций митохондриальной ДНК",fourthСell:"9200,00"},{firstCell:"59",secondCell:"90",thirdCell:"Ахондроплазия: секвенирование гена FGFR3",fourthСell:"30000,00"},{firstCell:"64",secondCell:"14",thirdCell:"Болезнь Вильсона-Коновалова: поиск 12 наиболее частых мутаций в гене ATP7B",fourthСell:"8100,00"},{firstCell:"66",secondCell:"21",thirdCell:"Болезнь Гиршпрунга: поиск мутаций в гене EDNRB",fourthСell:"15000,00"},{firstCell:"67",secondCell:"21",thirdCell:"Болезнь Гиршпрунга: поиск мутаций в экзонах 10, 11, 13, 14, 15 гена RET",fourthСell:"10500,00"},{firstCell:"68",secondCell:"30",thirdCell:"Болезнь Гиршпрунга: поиск мутаций в гене NTRK1",fourthСell:"22000,00"},{firstCell:"69",secondCell:"30",thirdCell:"Болезнь Гиршпрунга: поиск мутаций в гене ZEB2",fourthСell:"27000,00"},{firstCell:"85",secondCell:"30",thirdCell:"Гипертрофическая кардиомиопатия: поиск мутаций в гене TNNT2",fourthСell:"22000,00"},{firstCell:"102",secondCell:"21",thirdCell:"Ихтиоз вульгарный: поиск частых мутаций в гене FLG",fourthСell:"8100,00"},{firstCell:"103",secondCell:"21",thirdCell:"Ихтиоз ламеллярный: поиск мутаций в гене TGM1",fourthСell:"18000,00"},{firstCell:"104",secondCell:"21",thirdCell:"Липодистрофия: поиск мутаций в «горячих» участках гена LMNA",fourthСell:"6300,00"},{firstCell:"105",secondCell:"21",thirdCell:"Липодистрофия: поиск мутаций в гене LMNA",fourthСell:"18000,00"},{firstCell:"107",secondCell:"14",thirdCell:"Миотония Томсена/Беккера: поиск частых мутаций в гене CLCN1",fourthСell:"8100,00"},{firstCell:"113",secondCell:"21",thirdCell:"Муковисцидоз: поиск крупных делеций/дупликаций в гене CFTR",fourthСell:"10400,00"},{firstCell:"114",secondCell:"30",thirdCell:"Синдром Ретта: поиск мутаций в гене MECP2",fourthСell:"15000,00"},{firstCell:"117",secondCell:"21",thirdCell:"Мышечная дистрофия Дюшенна/Беккера: поиск делеций и дупликаций в гене дистрофина у мальчиков",fourthСell:"12700,00"},{firstCell:"122",secondCell:"21",thirdCell:"Мышечная дистрофия Эмери-Дрейфуса: поиск мутаций в гене EMD",fourthСell:"8900,00"},{firstCell:"123",secondCell:"21",thirdCell:"Мышечная дистрофия Эмери-Дрейфуса: поиск мутаций в гене LMNA",fourthСell:"18000,00"},{firstCell:"305",secondCell:"90",thirdCell:"Глициновая энцефалопатия (секвенирование генов GLDC, GCSH, AMT)",fourthСell:"35000,00"},{firstCell:"124",secondCell:"21",thirdCell:"Мышечная дистрофия Эмери-Дрейфуса: поиск мутаций в гене FHL1",fourthСell:"15000,00"},{firstCell:"125",secondCell:"14",thirdCell:"Наследственная моторно-сенсорная нейропатия (болезнь Шарко-Мари-Тута) тип I: поиск дупликаций на хромосоме 17 в области гена PMP22",fourthСell:"5800,00"},{firstCell:"126",secondCell:"21",thirdCell:"Наследственная моторно-сенсорная нейропатия (болезнь Шарко-Мари-Тута) тип I: поиск мутаций в гене GJB1 (Cx32)",fourthСell:"7500,00"},{firstCell:"129",secondCell:"21",thirdCell:"Наследственная моторно-сенсорная нейропатия (болезнь Шарко-Мари-Тута) тип I: поиск мутаций в гене EGR2",fourthСell:"10400,00"},{firstCell:"132",secondCell:"14",thirdCell:"Наследственная моторно-сенсорная нейропатия (болезнь Шарко-Мари-Тута) тип I: поиск частых рецессивных мутаций в генах FGD4, SH3TC2, FIG4, GDAP1",fourthСell:"8100,00"},{firstCell:"133",secondCell:"14",thirdCell:"Наследственная моторно-сенсорная нейропатия (болезнь Шарко-Мари-Тута) тип I: поиск частых мутаций в генах NDRG1 и SH3TC2",fourthСell:"4600,00"},{firstCell:"136",secondCell:"21",thirdCell:"Наследственная моторно-сенсорная нейропатия (болезнь Шарко-Мари-Тута) тип II: поиск мутаций в гене GDAP1",fourthСell:"13800,00"},{firstCell:"137",secondCell:"21",thirdCell:"Наследственная моторно-сенсорная нейропатия (болезнь Шарко-Мари-Тута) тип II: поиск мутаций в гене NEFL",fourthСell:"12000,00"},{firstCell:"140",secondCell:"90",thirdCell:"Наследственная моторно-сенсорная нейропатия (болезнь Шарко-Мари-Тута) тип II: поиск мутаций в гене DNM2",fourthСell:"30000,00"},{firstCell:"142",secondCell:"90",thirdCell:"Наследственная моторно-сенсорная нейропатия (болезнь Шарко-Мари-Тута) тип II: поиск мутаций в гене FIG4",fourthСell:"30000,00"},{firstCell:"143",secondCell:"14",thirdCell:"Нейросенсорная несиндромальная тугоухость: поиск частых мутаций в гене GJB2",fourthСell:"2500,00"},{firstCell:"152",secondCell:"21",thirdCell:"Прогерия Хатчинсона-Гилфорда: поиск мутаций в гене LMNA",fourthСell:"21000,00"},{firstCell:"157",secondCell:"90",thirdCell:"Спастическая параплегия Штрюмпеля: поиск мутаций в гене ATL1",fourthСell:"30000,00"},{firstCell:"161",secondCell:"14",thirdCell:"Синдром Прадера-Вилли/Ангельмана",fourthСell:"6900,00"},{firstCell:"163",secondCell:"21",thirdCell:"Псевдоксантома эластическая: поиск частых мутаций в гене ABCC6",fourthСell:"6300,00"},{firstCell:"164",secondCell:"30",thirdCell:"Псевдоксантома эластическая: поиск мутаций в гене ABCC6",fourthСell:"47000,00"},{firstCell:"169",secondCell:"30",thirdCell:"Синдром Аарскога-Скотта: секвенирование гена FGD1",fourthСell:"25000,00"},{firstCell:"170",secondCell:"21",thirdCell:"Синдром Ваарденбурга: поиск мутаций в гене PAX3",fourthСell:"15000,00"},{firstCell:"171",secondCell:"21",thirdCell:"Синдром Вильямса: поиск делеций в регионе 7q11",fourthСell:"10400,00"},{firstCell:"173",secondCell:"90",thirdCell:"Синдром Коккейна: поиск мутаций в гене ERCC6",fourthСell:"30000,00"},{firstCell:"175",secondCell:"90",thirdCell:"Синдром Коффина-Лоури: поиск мутаций в гене RPS6KA3",fourthСell:"30000,00"},{firstCell:"178",secondCell:"21",thirdCell:"Поиск мутаций в гене BCS1L",fourthСell:"10400,00"},{firstCell:"179",secondCell:"90",thirdCell:"Синдром Марфана: поиск мутаций в гене FBN1",fourthСell:"30000,00"},{firstCell:"180",secondCell:"90",thirdCell:"Синдром множественной эндокринной неоплазии второго типа (МЭН2): секвенирование гена RET",fourthСell:"30000,00"},{firstCell:"184",secondCell:"30",thirdCell:"Синдром Мовата-Вильсона: поиск мутаций в гене ZEB2",fourthСell:"25500,00"},{firstCell:"188",secondCell:"14",thirdCell:"Синдром Смит-Магенис: поиск делеций в регионе 17p11.2",fourthСell:"15000,00"},{firstCell:"190",secondCell:"90",thirdCell:"Синдром Уокера-Варбург: поиск мутаций в генах POMT1 и FKRP",fourthСell:"30000,00"},{firstCell:"192",secondCell:"21",thirdCell:"Синдром фон Хиппеля-Линдау: секвенирование гена VHL",fourthСell:"8000,00"},{firstCell:"197",secondCell:"14",thirdCell:"Спинальная амиотрофия типы I, II, III, IV: поиск делеций в гене SMN1",fourthСell:"6700,00"},{firstCell:"204",secondCell:"90",thirdCell:"Туберозный склероз: поиск мутаций в гене TSC1 и TSC2",fourthСell:"30000,00"},{firstCell:"210",secondCell:"14",thirdCell:"Хорея Гентингтона: поиск наиболее частых мутаций в гене HTT",fourthСell:"5500,00"},{firstCell:"211",secondCell:"21",thirdCell:"Тяжелый комбинированный иммунодефицит, Х-сцепленный: поиск мутаций в гене IL2RG",fourthСell:"10400,00"},{firstCell:"212",secondCell:"21",thirdCell:"Ихтиоз ламеллярный: поиск мутаций в гене ALOX12B",fourthСell:"17000,00"},{firstCell:"213",secondCell:"90",thirdCell:"Экзостозы множественные: поиск мутаций в гене EXT1 и EXT2",fourthСell:"30000,00"},{firstCell:"225",secondCell:"14",thirdCell:"Синдром Беквита-Видемана",fourthСell:"6900,00"},{firstCell:"228",secondCell:"90",thirdCell:"Уолкотта-Раллисона синдром: секвенирование гена EIF2AK3",fourthСell:"30000,00"},{firstCell:"229",secondCell:"90",thirdCell:"IPEX синдром: поиск мутаций в гене FOXP3",fourthСell:"30000,00"},{firstCell:"230",secondCell:"90",thirdCell:"Вольфрама синдром (поиск мутаций в генах WFS1 и CISD2)",fourthСell:"30000,00"},{firstCell:"231",secondCell:"90",thirdCell:"Синдром диабета и кист почек: секвенирование гена HNF1B",fourthСell:"30000,00"},{firstCell:"233",secondCell:"90",thirdCell:"Альстрема синдром (секвенирование гена ALMS1)",fourthСell:"30000,00"},{firstCell:"235",secondCell:"90",thirdCell:"Анемия Фанкони",fourthСell:"30000,00"},{firstCell:"237",secondCell:"90",thirdCell:"Х-сцепленная сидеробластная анемия (cеквенирование гена ALAS2)",fourthСell:"30000,00"},{firstCell:"238",secondCell:"90",thirdCell:"Врожденная амегакариоцитарная тромбоцитопения (cеквенирование гена MPL)",fourthСell:"30000,00"},{firstCell:"245",secondCell:"20",thirdCell:"Галактоземия (секвенирование гена GALT)",fourthСell:"18000,00"},{firstCell:"247",secondCell:"90",thirdCell:"Врожденный гипотиреоз (cеквенирование генов TSHR, TSHB, NKX2-5)",fourthСell:"30000,00"},{firstCell:"249",secondCell:"90",thirdCell:"Цитруллинемия (секвенирование генов ASS1, SLC25A13)",fourthСell:"30000,00"},{firstCell:"261",secondCell:"90",thirdCell:"Тюрко синдром (секвенирование генов APC, MLH1, MSH2, MSH6)",fourthСell:"30000,00"},{firstCell:"267",secondCell:"90",thirdCell:"Рефсума синдром (секвенирование гена PHYH)",fourthСell:"30000,00"},{firstCell:"267",secondCell:"90",thirdCell:"Рефсума синдром (секвенирование гена PHYH)",fourthСell:"30000,00"},{firstCell:"268",secondCell:"90",thirdCell:"Арта синдром (секвенирование гена PRPS1)",fourthСell:"30000,00"},{firstCell:"269",secondCell:"90",thirdCell:"Андерманна синдром (cеквенирование гена SLC12A6)",fourthСell:"30000,00"},{firstCell:"273",secondCell:"14",thirdCell:"Синдром Блума (поиск частых мутаций в гене RECQL3 (BLM)",fourthСell:"5800,00"},{firstCell:"274",secondCell:"90",thirdCell:"Паллистера-Холла синдром (секвенирование гена GLI3)",fourthСell:"30000,00"},{firstCell:"279",secondCell:"90",thirdCell:"Недостаточность длинноцепочечной ацил-КоА дегидрогеназы (секвенирование гена ACADVL)",fourthСell:"30000,00"},{firstCell:"280",secondCell:"90",thirdCell:"Недостаточность короткоцепочечной ацил-КоА дегидрогеназы (секвенирование гена ACADS)",fourthСell:"30000,00"},{firstCell:"281",secondCell:"90",thirdCell:"Недостаточность 3-гидроксиацил-КоА дегидрогеназы (cеквенирование генов HADHA и HADНВ)",fourthСell:"30000,00"},{firstCell:"284",secondCell:"90",thirdCell:"Аспартилглюкозаминурия (секвенирование гена AGA)",fourthСell:"30000,00"},{firstCell:"287",secondCell:"90",thirdCell:"Гомоцистинурия (секвенирование генов CBS, MTHFR, MTR, MTRR, MMADHC)",fourthСell:"30000,00"},{firstCell:"306",secondCell:"90",thirdCell:"Гиперпролинемия 1 и 2 типа (секвенирование генов ALDH4A1, PRODH)",fourthСell:"30000,00"},{firstCell:"319",secondCell:"90",thirdCell:"Стиклера синдром, тип 1 (секвенирование гена COL2A1)",fourthСell:"30000,00"},{firstCell:"314",secondCell:"90",thirdCell:"Ганглиозидоз G1, G2, AB вариант (секвенирование генов GLB1, GM2A)",fourthСell:"30000,00"},{firstCell:"332",secondCell:"90",thirdCell:"Унферрихта-Лундберга болезнь (секвенирование гена CSTB)",fourthСell:"30000,00"},{firstCell:"289",secondCell:"90",thirdCell:"Изовалериановая ацидемия (cеквенирование гена IVD)",fourthСell:"30000,00"},{firstCell:"291",secondCell:"90",thirdCell:"Глутаровая ацидемия IIA, B, C (секвенирование генов ETFA, ETFB, ETFDH)",fourthСell:"30000,00"},{firstCell:"292",secondCell:"90",thirdCell:"Болезнь Фабри (секвенирование гена GLA)",fourthСell:"30000,00"},{firstCell:"293",secondCell:"90",thirdCell:"Краббе болезнь (секвенирование гена GALC)",fourthСell:"30000,00"},{firstCell:"294",secondCell:"90",thirdCell:"Ниманна-Пика болезнь (секвенирование генов NPC1, NPC2, SMPD1)",fourthСell:"30000,00"},{firstCell:"296",secondCell:"90",thirdCell:"Мукополисахаридоз 1 типа (cеквенирование гена IDUA)",fourthСell:"30000,00"},{firstCell:"297",secondCell:"90",thirdCell:"Мукополисахаридоз 2 типа (секвенирование гена IDS)",fourthСell:"30000,00"},{firstCell:"300",secondCell:"90",thirdCell:"Пропионовая ацидемия (cеквенирование генов PCCA, PCCB)",fourthСell:"30000,00"},{firstCell:"309",secondCell:"90",thirdCell:"Метилмалоновая ацидемия (секвенирование генов MUT, MMAA, MMAB, MCEE, MMADHC)",fourthСell:"30000,00"},{firstCell:"313",secondCell:"90",thirdCell:"Недостаточность карнитин пальмитоилтрансферазы (секвенирование генов СРТ1A, CPT1B, CPT2)",fourthСell:"30000,00"},{firstCell:"317",secondCell:"90",thirdCell:"Гистидинемия (секвенирование гена HAL)",fourthСell:"30000,00"},{firstCell:"322",secondCell:"90",thirdCell:"Псевдоахондроплазия (секвенирование гена COMP)",fourthСell:"30000,00"},{firstCell:"323",secondCell:"90",thirdCell:"Джексона-Вейсса синдром (секвенирование генов FGFR2 и FGFR1)",fourthСell:"30000,00"},{firstCell:"324",secondCell:"90",thirdCell:"Апера синдром (секвенирование гена FGFR2)",fourthСell:"30000,00"},{firstCell:"326",secondCell:"90",thirdCell:"Множественная эпифизарная дисплазия (секвенирование генов COMP и SLC26A2)",fourthСell:"30000,00"},{firstCell:"334",secondCell:"90",thirdCell:"Синдром хондродисплазии с улиткоподобной формой таза (Schneckenbecken dysplasia). Секвенирование гена SLC35D1",fourthСell:"30000,00"},{firstCell:"335",secondCell:"90",thirdCell:"Миотоническая дистрофия тип 1 и 2 (секвенирование генов DMPK и ZNF9)",fourthСell:"30000,00"},{firstCell:"340",secondCell:"90",thirdCell:"Цистиноз (секвенирование гена CTNS)",fourthСell:"30000,00"},{firstCell:"341",secondCell:"90",thirdCell:"Синдром Бартера (секвенирование генов SLC12A1, KCNJ1, CLCNKB, CASR)",fourthСell:"30000,00"},{firstCell:"342",secondCell:"90",thirdCell:"Аутосомно-рецессивный злокачественный остеопетроз (секвенирование генов OSTM1, TCIRG1, CLCN7)",fourthСell:"30000,00"},{firstCell:"346",secondCell:"90",thirdCell:"Гиперкератоз ладонно-подошвенный (секвенирование генов KRT1 и KRT9)",fourthСell:"30000,00"},{firstCell:"349",secondCell:"90",thirdCell:"Синдром Пейтца-Егерса (секвенирование гена STK11)",fourthСell:"30000,00"},{firstCell:"350",secondCell:"90",thirdCell:"Аденоматозный полипоз (секвенирование гена АРС)",fourthСell:"30000,00"},{firstCell:"351",secondCell:"14",thirdCell:"Синдром Жильбера",fourthСell:"3700,00"},{firstCell:"352",secondCell:"90",thirdCell:"Синдром Алажилля (секвенирование гена JAG1)",fourthСell:"30000,00"},{firstCell:"353",secondCell:"90",thirdCell:"Синдром удлиненного интервала QT",fourthСell:"30000,00"},{firstCell:"361",secondCell:"90",thirdCell:"Гипофосфатемический витамин-D-резистентный рахит (секвенирование гена PHEX)",fourthСell:"30000,00"},{firstCell:"491",secondCell:"90",thirdCell:"Опухоль Вильмса (секвенирование гена WT1)",fourthСell:"30000,00"},{firstCell:"503",secondCell:"90",thirdCell:"Тирозинемия тип 1 (секвенирование гена FAH)",fourthСell:"30000,00"},{firstCell:"542",secondCell:"90",thirdCell:"Синдром Цельвегера",fourthСell:"30000,00"},{firstCell:"544",secondCell:"90",thirdCell:"Синдром Чедиака-Хигаши (секвенирование гена LYST)",fourthСell:"30000,00"},{firstCell:"546",secondCell:"90",thirdCell:"Голопрозэнцефалия (секвенирование генов FGF8, GLI2, GLI3, PTCH1, SHH, SIX3, TGIF1, ZIC2",fourthСell:"30000,00"},{firstCell:"548",secondCell:"90",thirdCell:"Врожденная дизэритропоэтическая анемия (секвенирование генов CDAN1, SEC23B)",fourthСell:"30000,00"},{firstCell:"550",secondCell:"90",thirdCell:"Дистрофия роговицы (секвенирование генов TGFBI, SLC4A11)",fourthСell:"30000,00"},{firstCell:"561",secondCell:"90",thirdCell:"Айкарди-Гутьерес синдром (секвенирование генов TREX1, RNASEH2B, ADAR)",fourthСell:"30000,00"},{firstCell:"520",secondCell:"90",thirdCell:"Талассемия",fourthСell:"30000,00"},{firstCell:"545",secondCell:"90",thirdCell:"Наследственная моторно-сенсорная демиелинизрующая нейропатия",fourthСell:"30000,00"},{firstCell:"579",secondCell:"90",thirdCell:"Секвенирование гена AR",fourthСell:"30000,00"},{firstCell:"605",secondCell:"30",thirdCell:"Подтверждение мутации, выявленной при NGS секвенированием по Сэнгеру",fourthСell:"5000,00"},{firstCell:"612",secondCell:"21",thirdCell:"Синдром Аксенфельда-Ригера: поиск мутаций в гене FOXC1",fourthСell:"9200,00"},{firstCell:"613",secondCell:"21",thirdCell:"Синдром Андерсена: поиск мутаций в гене KCNJ2",fourthСell:"9000,00"},{firstCell:"614",secondCell:"21",thirdCell:"Синдром Антли-Бикслера: поиск мутаций в экзоне 9 гена FGFR2",fourthСell:"6900,00"},{firstCell:"616",secondCell:"21",thirdCell:"Аутоиммунный лимфопролиферативный синдром: поиск мутаций в «горячих» участках гена TNFRSF6 (FAS)",fourthСell:"6000,00"},{firstCell:"617",secondCell:"21",thirdCell:"Аутоиммунный лимфопролиферативный синдром: поиск мутаций в гене TNFRSF6 (FAS)",fourthСell:"14000,00"},{firstCell:"618",secondCell:"21",thirdCell:"Первичная прогрессирующая афазия: поиск мутаций в гене GRN",fourthСell:"11000,00"},{firstCell:"621",secondCell:"21",thirdCell:"Синдром Баннаян-Райли-Рувалькаба",fourthСell:"15500,00"},{firstCell:"623",secondCell:"21",thirdCell:"Синдром Бёрта-Хога-Дьюба: поиск мутаций в гене FLCN",fourthСell:"20000,00"},{firstCell:"626",secondCell:"21",thirdCell:"Синдром Боуэна-Конради: поиск мутаций в гене EMG1",fourthСell:"10400,00"},{firstCell:"627",secondCell:"21",thirdCell:"Брахидактилия: поиск мутаций в гене HOXD13",fourthСell:"10400,00"},{firstCell:"628",secondCell:"21",thirdCell:"Брахидактилия: поиск мутаций в экзонах 8 и 9 гена ROR2",fourthСell:"9200,00"},{firstCell:"629",secondCell:"21",thirdCell:"Брахидактилия: поиск мутаций в гене NOG",fourthСell:"5800,00"},{firstCell:"630",secondCell:"21",thirdCell:"Синдром Ван дер Вуда: поиск мутаций в гене IRF6",fourthСell:"15500,00"},{firstCell:"632",secondCell:"14",thirdCell:"Синдром врожденной центральной гиповентиляции: поиск частых мутаций в гене PHOX2B",fourthСell:"5800,00"},{firstCell:"633",secondCell:"21",thirdCell:"Синдром Галлервордена-Шпатца: поиск наиболее частых мутаций в гене PANK2",fourthСell:"6300,00"},{firstCell:"637",secondCell:"21",thirdCell:"Синдром Германски-Пудлака: поиск частых мутаций в гене HPS1",fourthСell:"7500,00"},{firstCell:"657",secondCell:"14",thirdCell:"Фенилкетонурия: расширенный поиск мутаций в гене PAH (25 шт.)",fourthСell:"9900,00"},{firstCell:"658",secondCell:"21",thirdCell:"Фенилкетонурия: поиск мутаций в гене PAH",fourthСell:"20000,00"},{firstCell:"659",secondCell:"21",thirdCell:"Торсионная дистония: поиск мутаций в гене TOR1A",fourthСell:"11400,00"},{firstCell:"785",secondCell:"14",thirdCell:"Муковисцидоз: Расширенный поиск частых мутаций в гене CFTR (30 шт.)",fourthСell:"10400,00"},{firstCell:"791",secondCell:"21",thirdCell:"Поиск наиболее частых мутаций в гене AR",fourthСell:"5800,00"},{firstCell:"828",secondCell:"14",thirdCell:"Поиск делеций мтДНК методом лонг-ПЦР",fourthСell:"5500,00"},{firstCell:"833",secondCell:"14",thirdCell:"Синдром Сильвера-Рассела",fourthСell:"6900,00"},{firstCell:"859",secondCell:"21",thirdCell:"Анализ числа (CAG)-повторов в гене андрогенового рецептора (AR), частые делеции в AZF локусе, частые мутации в гене CFTR (22 шт.+IVS8TT)",fourthСell:"9000,00"},{firstCell:"864",secondCell:"30",thirdCell:"Подтверждение мутации, выявленной при NGS секвенированием по Сэнгеру у трио",fourthСell:"13000,00"},{firstCell:"865",secondCell:"21",thirdCell:"Поиск делеций в гене NF1 методом MLPA",fourthСell:"6900,00"},{firstCell:"962",secondCell:"14",thirdCell:"Поиск наиболее частых мутаций в генах ATXN1, ATXN2, ATXN3",fourthСell:"7600,00"},{firstCell:"987",secondCell:"21",thirdCell:"Наследственная нейропатия с подверженностью параличу от сдавления (поиск мутаций в гене PMP22)",fourthСell:"10400,00"},{firstCell:"988",secondCell:"90",thirdCell:"Клиническое секвенирование экзома трио",fourthСell:"140000,00"},{firstCell:"1005",secondCell:"21",thirdCell:"Частичный анализ гена NOTCH3 (CADASIL синдром)",fourthСell:"8000,00"},{firstCell:"1056",secondCell:"40",thirdCell:"Лицелопаточно-плечевая мышечная дистрофия тип 1",fourthСell:"45000,00"},{firstCell:"1060",secondCell:"14",thirdCell:"Определение числа копий генов SMN1, SMN2",fourthСell:"8500,00"},{firstCell:"1098",secondCell:"14",thirdCell:"Поиск наиболее частых мутаций в гене ATXN7",fourthСell:"5300,00"},{firstCell:"1111",secondCell:"21",thirdCell:"Поиск мутаций в гене MEFV",fourthСell:"17000,00"},{firstCell:"1118",secondCell:"15",thirdCell:"Частичный анализ гена PLP методом MLPA -дупликации гена (Пелициуса-Мельцбахера)",fourthСell:"5500,00"},{firstCell:"1131",secondCell:"21",thirdCell:"Дефицит карнитина системный первичный (поиск мутаций в гене SLC22A5)",fourthСell:"17000,00"},{firstCell:"1143",secondCell:"14",thirdCell:"Синдром Ниймеген: Поиск наиболее частых мутаций в гене NBN",fourthСell:"4600,00"},{firstCell:"1147",secondCell:"21",thirdCell:"Поиск делеций в гене NF2 методом MLPA",fourthСell:"6900,00"},{firstCell:"1187",secondCell:"90",thirdCell:"Синдром Нунан",fourthСell:"35000,00"},{firstCell:"1210",secondCell:"21",thirdCell:"Поиск наиболее частых мутаций в экзонах 10, 11 гена RET при МЭН2А",fourthСell:"7300,00"},{firstCell:"1217",secondCell:"21",thirdCell:"Поиск частых мутаций в гене GALT",fourthСell:"4500,00"},{firstCell:"1290",secondCell:"14",thirdCell:"Окулофарингеальная мышечная дистрофия: поиск наиболее частых мутаций в гене PABPN1",fourthСell:"5300,00"},{firstCell:"1292",secondCell:"14",thirdCell:"Поиск частых мутаций в гене POLG методом MLPA",fourthСell:"5500,00"},{firstCell:"1293",secondCell:"21",thirdCell:"Поиск мутаций в «горячих» участках гена ACVR1",fourthСell:"10000,00"},{firstCell:"1437",secondCell:"21",thirdCell:"Поиск мутаций в гене GJB2 (Cx26)",fourthСell:"4200,00"},{firstCell:"706",secondCell:"3",thirdCell:"Тест на отцовство/материнство 20 маркеров (3 участника: отец+ребенок+мать, один из родителей безусловный)",fourthСell:"11900,00"},{firstCell:"705",secondCell:"3",thirdCell:"Тест на отцовство/материнство, 25 маркеров (2 участника: отец+ребенок или мать+ребенок)",fourthСell:"8800,00"},{firstCell:"688",secondCell:"7",thirdCell:"Тест на отцовство/материнство для суда, 20 маркеров (2 участника: отец+ребенок или мать+ребенок)",fourthСell:"13900,00"},{firstCell:"712",secondCell:"7",thirdCell:"Тест на отцовство/материнство для суда 20 маркеров (3 участника: отец+ребенок+мать, один из родителей безусловный)",fourthСell:"14900,00"},{firstCell:"725",secondCell:"",thirdCell:"Дополнительный участник к анализу 20/26 маркеров",fourthСell:"6450,00"},{firstCell:"753",secondCell:"7",thirdCell:"Тестирование Y-хромосомы - тест на родство по мужской линии (2 участника: дедушка по отцу - внук, дядя (брат отца) - племянник, родные/сводные по отцу братья)",fourthСell:"13800,00"},{firstCell:"697",secondCell:"7",thirdCell:"Тест на родство, 24 маркера (2 участника: дедушка/бабушка - внук/внучка, дядя/тетя - племянник/племянница , родные/сводные братья/сестры)",fourthСell:"14800,00"},{firstCell:"693",secondCell:"7",thirdCell:"Тестирование Х-хромосомы (2 участника: бабушка по отцу - внучка, сводные сестры по отцу)",fourthСell:"16800,00"},{firstCell:"756",secondCell:"7",thirdCell:"ДНК -профилирование (25 маркеров, Х или Y-хромосома) (1 человек) для суда",fourthСell:"9450,00"},{firstCell:"760",secondCell:"",thirdCell:"Выделение ДНК из нестандартного образца (высохшие пятна крови, обрезки ногтей, волосы) (1 человек) + 1рд",fourthСell:"3000,00"},{firstCell:"691",secondCell:"8 рабочих часов",thirdCell:"ЭКСПРЕСС- установление отцовства/материнства, информативный за 8 рабочих часов",fourthСell:"28500,00"},{firstCell:"690",secondCell:"8 рабочих часов",thirdCell:"ЭКСПРЕСС-установление родства для трех участников (отец/мать/ребенок), информативный за 8 рабочих часов",fourthСell:"35000,00"},{firstCell:"755",secondCell:"7",thirdCell:"ДНК -профилирование (25 маркеров, Х или У-хромосома) (1 человек) Информативный",fourthСell:"6450,00"},{firstCell:"726",secondCell:"",thirdCell:"ДОПОЛНИТЕЛЬНЫЙ участник по Х - хромосоме или по Y - хромосоме",fourthСell:"4500,00"},{firstCell:"761",secondCell:"+1 рд",thirdCell:"Выделение ДНК из нестандартного образца (жевательная резинка, сигаретный фильтр, ушная сера,сперма) (1 человек)",fourthСell:"3500,00"},{firstCell:"762",secondCell:"1",thirdCell:"Выделение ДНК из нестандартного образца ( парафиновые блоки) (1 человек) +1рд",fourthСell:"4000,00"},{firstCell:"763",secondCell:"+1 рд",thirdCell:"Выделение ДНК из нестандартного образца (коктельная трубочка, лезвие станка, зубная щетка, детская пустышка) (1 человек) +1рд",fourthСell:"4500,00"},{firstCell:"770",secondCell:"0",thirdCell:"Второй экземпляр информативного теста",fourthСell:"500,00"},{firstCell:"1404",secondCell:"7",thirdCell:"Тестирование Y-хромосомы - тест на родство по мужской линии (2 участника: дедушка по отцу - внук, дядя (брат отца) - племянник, родные/сводные по отцу братья) по суду",fourthСell:"18900,00"},{firstCell:"699",secondCell:"",thirdCell:"Определение генетического профиля по 19 аутосомным STR-маркерам",fourthСell:"по запросу"},{firstCell:"552",secondCell:"30",thirdCell:"Хромосомный микроматричный анализ «Стандартный»",fourthСell:"19500,00"},{firstCell:"13",secondCell:"21",thirdCell:"Кариотип, анализ экспертного уровня",fourthСell:"5400,00"},{firstCell:"504",secondCell:"15",thirdCell:"Хромосомный микроматричный анализ тканей из архивного материала",fourthСell:"45000,00"},{firstCell:"1304",secondCell:"30",thirdCell:"Хромосомный микроматричный анализ экзонного уровня",fourthСell:"33500,00"},{firstCell:"646",secondCell:"30",thirdCell:"Биоинформатический и клинический анализ данных секвенирования генома (данные предоставляются заказчиком)",fourthСell:"25000,00"},{firstCell:"645",secondCell:"30",thirdCell:"Биоинформатический и клинический анализ данных секвенирования экзома (данные предоставляются заказчиком)",fourthСell:"7000,00"},{firstCell:"946",secondCell:"2",thirdCell:"Интерпретация 2-5 полиморфизмов",fourthСell:"700,00"},{firstCell:"885",secondCell:"14",thirdCell:"Панель «Фолатный цикл и риск гипергомоцистеинемии» - 10 маркеров",fourthСell:"8500,00"},{firstCell:"894",secondCell:"14",thirdCell:"Предрасположенность к гиперхолистеринемии, сердечно-сосудистым заболеваниям и болезни Альцгеймера (ген APOE)",fourthСell:"4200,00"},{firstCell:"901",secondCell:"21",thirdCell:"Панель «Медиаторные нарушения» - 8 маркеров",fourthСell:"8500,00"},{firstCell:"892",secondCell:"21",thirdCell:"Панель «Липидный обмен»",fourthСell:"8500,00"},{firstCell:"893",secondCell:"21",thirdCell:"Панель «Риск Сахарного диабета 2 типа»",fourthСell:"8500,00"},{firstCell:"881",secondCell:"7",thirdCell:"Панель «Гемохроматоз 1 типа» (HFE: H63D, С282Y, S65C)",fourthСell:"3500,00"},{firstCell:"883",secondCell:"14",thirdCell:"Предрасположенность к нарушению системы гемостаза и риску тромбообразования (13 маркеров).",fourthСell:"8500,00"},{firstCell:"882",secondCell:"30",thirdCell:"Панель «Нарушения системы гемостаза» 30 маркеров",fourthСell:"11000,00"},{firstCell:"897",secondCell:"40",thirdCell:"Панель «Нутригенетика max»",fourthСell:"33000,00"},{firstCell:"898",secondCell:"14",thirdCell:"Панель «Нутригенетика: Оптимальный вариант диеты для снижения веса»",fourthСell:"9000,00"},{firstCell:"929",secondCell:"14",thirdCell:"Панель «Нутригенетика: негативные последствия кофе»",fourthСell:"8500,00"},{firstCell:"1311",secondCell:"14",thirdCell:"Панель «Нутригенетика: Реакция организма на некоторые компоненты пищи»",fourthСell:"8000,00"},{firstCell:"899",secondCell:"21",thirdCell:"Панель «Нутригенетика - витамины»",fourthСell:"9800,00"},{firstCell:"1309",secondCell:"14",thirdCell:"Панель «Нутригенетика и спорт: Оптимальный вариант диеты и физических нагрузок для снижения веса»",fourthСell:"8500,00"},{firstCell:"1154",secondCell:"14",thirdCell:"Панель Нутригенетика: Витамин А",fourthСell:"8500,00"},{firstCell:"1155",secondCell:"14",thirdCell:"Панель Нутригенетика Витамин C",fourthСell:"8500,00"},{firstCell:"1156",secondCell:"14",thirdCell:"Панель Нутригенетика Витамин E",fourthСell:"8500,00"},{firstCell:"1157",secondCell:"14",thirdCell:"Метаболизм витамина D",fourthСell:"8500,00"},{firstCell:"1158",secondCell:"14",thirdCell:"Панель Нутригенетика Витамин B9",fourthСell:"8500,00"},{firstCell:"1159",secondCell:"14",thirdCell:"Панель Нутригенетика Витамин B12",fourthСell:"5500,00"},{firstCell:"1160",secondCell:"14",thirdCell:"Панель Нутригенетика Витамин B2",fourthСell:"4500,00"},{firstCell:"1161",secondCell:"14",thirdCell:"Панель Нутригенетика Витамин B6",fourthСell:"4500,00"},{firstCell:"895",secondCell:"21",thirdCell:"Панель «Костный метаболизм. Остеопороз»",fourthСell:"8500,00"},{firstCell:"896",secondCell:"14",thirdCell:"Панель «Метаболизм глютена»",fourthСell:"8500,00"},{firstCell:"900",secondCell:"14",thirdCell:"Болезнь Бехтерева. Ревматоидный артрит. HLAB27",fourthСell:"2000,00"},{firstCell:"905",secondCell:"40",thirdCell:"Комплексный генетический тест",fourthСell:"35000,00"},{firstCell:"918",secondCell:"10",thirdCell:"Панель «Безопасность гормональной терапии»",fourthСell:"8500,00"},{firstCell:"1192",secondCell:"10",thirdCell:"Устойчивость к стрессу и склонность к зависимостям (анализ полиморфизмов гена COMT - 4 маркера)",fourthСell:"8500,00"},{firstCell:"927",secondCell:"14",thirdCell:"Панель «Антидепрессанты. Нейролептики»",fourthСell:"8500,00"},{firstCell:"1152",secondCell:"40",thirdCell:"ВСЕ обо МНЕ",fourthСell:"19500,00"},{firstCell:"1051",secondCell:"10",thirdCell:"Заказ 1 дополнительного полиморфизма к готовой панели (без интерпретации)",fourthСell:"600,00"},{firstCell:"1115",secondCell:"21",thirdCell:"Панель «Метаболический синдром и ожирение»",fourthСell:"8500,00"},{firstCell:"1162",secondCell:"14",thirdCell:"Панель «Антиоксидантная защита»",fourthСell:"8500,00"},{firstCell:"1196",secondCell:"60",thirdCell:"Микробиом - носоглотка (без интерпретации)",fourthСell:"12000,00"},{firstCell:"1197",secondCell:"60",thirdCell:"Микробиом - мочеполовая система (без интерпретации)",fourthСell:"12000,00"},{firstCell:"1198",secondCell:"60",thirdCell:"Микробиом кишечника",fourthСell:"12000,00"},{firstCell:"1300",secondCell:"14",thirdCell:"Панель «Подготовка к ЭКО»",fourthСell:"8500,00"},{firstCell:"1308",secondCell:"21",thirdCell:"Панель «Нейрогенетические особенности пищевого поведения»",fourthСell:"6000,00"},{firstCell:"1315",secondCell:"40",thirdCell:"Панель «Женское здоровье (комплекс)»",fourthСell:"35000,00"},{firstCell:"1317",secondCell:"40",thirdCell:"Панель «Мужское здоровье (комплекс)»",fourthСell:"35000,00"},{firstCell:"1320",secondCell:"21",thirdCell:"Панель «Риск нарушений работы опорно-связочного аппарата»",fourthСell:"9900,00"},{firstCell:"1321",secondCell:"21",thirdCell:"Панель «Воспалительный ответ»",fourthСell:"9900,00"},{firstCell:"1325",secondCell:"21",thirdCell:"Панель «Косметология и Anti age»",fourthСell:"9900,00"},{firstCell:"1406",secondCell:"30",thirdCell:"Панель «ДНК - Генеалогия» по материнской линии",fourthСell:"10900,00"},{firstCell:"1407",secondCell:"30",thirdCell:"Панель «ДНК - Генеалогия» по отцовской линии",fourthСell:"10900,00"},{firstCell:"1418",secondCell:"30",thirdCell:"Панель «ДНК Генеалогия» национальность",fourthСell:"11700,00"},{firstCell:"1421",secondCell:"30",thirdCell:"Панель «ДНК Генеалогия» Происхождение по материнской и отцовской линии + национальность",fourthСell:"29900,00"},{firstCell:"1422",secondCell:"30",thirdCell:"Панель «ДНК Генеалогия» Происхождение по материнской линии + национальность",fourthСell:"20900,00"},{firstCell:"1423",secondCell:"30",thirdCell:"Панель «ДНК Генеалогия» Происхождение по отцовской линии + национальность",fourthСell:"20900,00"},{firstCell:"1681",secondCell:"10",thirdCell:"Скрининг на носительство наследственных заболеваний «Базовый»",fourthСell:"7000,00"},{firstCell:"575",secondCell:"45",thirdCell:"Скрининг на наследственные заболевания «Экспертный»",fourthСell:"30000,00"},{firstCell:"118",secondCell:"21",thirdCell:"Мышечная дистрофия Дюшенна/Беккера: поиск делеций и дупликаций у родственниц больного по женской линии",fourthСell:"14400,00"},{firstCell:"198",secondCell:"14",thirdCell:"Спинальная амиотрофия: анализ носительства делеций в гене SMN1",fourthСell:"9000,00"},{firstCell:"701",secondCell:"14",thirdCell:"Поиск частых мутаций в генах CFTR, PAH, SMN1, GJB2",fourthСell:"11500,00"},{firstCell:"704",secondCell:"14",thirdCell:"Анализ носительства спинальной амиотрофии для супружеской пары (кровь с ЭДТА)",fourthСell:"9500,00"},{firstCell:"36",secondCell:"10",thirdCell:"Установление отцовства дородовое, неинвазивное",fourthСell:"70000,00"},{firstCell:"1090",secondCell:"8",thirdCell:"Определение экспрессии белка PD-L1",fourthСell:"14000,00"},{firstCell:"831",secondCell:"3",thirdCell:"Изготовление стекла из парафинового блока",fourthСell:"1000,00"},{firstCell:"1511",secondCell:"4",thirdCell:"Гистологическое исследование эндоскопического материала из различных локусов: пищевод, гортань, желудок, трахея, тонкая и толстая кишка, бронхи. (Не более 3 фрагментов ткани).",fourthСell:"3500,00"},{firstCell:"1512",secondCell:"4",thirdCell:"Гистологическое исследование материала, полученного при эдоскопической полипэктомии (полип не более 2 см.).",fourthСell:"4000,00"},{firstCell:"1513",secondCell:"4",thirdCell:"Гистологическое исследование эндоскопического материала из различных локусов: пищевод, гортань, желудок, трахея, тонкая и толстая кишка, бронхи. (Более 3 фрагментов ткани).",fourthСell:"5500,00"},{firstCell:"1514",secondCell:"4",thirdCell:"Верификация Helicobacter pylori в одном образце биологического материала",fourthСell:"2500,00"},{firstCell:"1515",secondCell:"4",thirdCell:"Гистологическое исследование биопсийного материала с применением стандартной гистологической окраски гематоксилином и эозином (локусы - полость рта, носоглотки, слюнная железа).",fourthСell:"3500,00"},{firstCell:"1575",secondCell:"3",thirdCell:"Гистологическое исследование биопсийного материала с применением стандартной гистологической окраски гематоксилином и эозином (локус - органы мочевыделительной системы).",fourthСell:"3500,00"},{firstCell:"1576",secondCell:"3",thirdCell:"Гистологическое исследование биопсийного материала с применением стандартной гистологической окраски (локусы - мягкие ткани подмышечной области).",fourthСell:"3500,00"},{firstCell:"1577",secondCell:"4",thirdCell:"Гистологическое исследование биопсийного материала с применением стандартной гистологической окраски гематоксилином и эозином (пайпель-биопсия эндометрия).",fourthСell:"3500,00"},{firstCell:"1578",secondCell:"4",thirdCell:"Гистологическое исследование биопсийного материала с применением стандартной гистологической окраски гематоксилином и эозином (локус - ткань яичка).",fourthСell:"3500,00"},{firstCell:"1579",secondCell:"4",thirdCell:"Гистологическое исследование биопсийного материала с применением стандартной гистологической окраски гематоксилином и эозином (локус - шейка матки, влагалище).",fourthСell:"3500,00"},{firstCell:"1580",secondCell:"4",thirdCell:"Гистологическое исследование биопсийного материала с применением стандартной гистологической окраски гематоксилином и эозином (локус - забрюшинное пространство).",fourthСell:"3500,00"},{firstCell:"1581",secondCell:"4",thirdCell:"Гистологическое исследование биопсийного материала с применением стандартной гистологической окраски гематоксилином и эозином (локус -сустав).",fourthСell:"3500,00"},{firstCell:"1582",secondCell:"5",thirdCell:"Гистологическое исследование биопсийного материала с применением стандартной гистологической окраски гематоксилином и эозином (локус - кости и хрящевая ткань).",fourthСell:"5000,00"},{firstCell:"1583",secondCell:"4",thirdCell:"Гистологическое исследование биопсийного материала с применением стандартной гистологической окраски гематоксилином и эозином (локус -лимфатические узлы, в том числе сторожевые).",fourthСell:"5000,00"},{firstCell:"1584",secondCell:"3",thirdCell:"Гистологическое исследование биопсийного материала с применением стандартной гистологической окраски гематоксилином и эозином (костный мозг).",fourthСell:"7000,00"},{firstCell:"1585",secondCell:"4",thirdCell:"Гистологическое исследование пункционной биопсии с применением стандартной гистологической окраски гематоксилином и эозином (локусы - печень, почки, молочная железа и др).",fourthСell:"3500,00"},{firstCell:"1586",secondCell:"4",thirdCell:"Гистологическое исследование пункционной биопсии с применением стандартной гистологической окраски гематоксилином и эозином не более 12 фрагментов ткани (локус - предстательная железа).",fourthСell:"6500,00"},{firstCell:"1587",secondCell:"4",thirdCell:"Гистологическое исследование операционного материала фрагментов кожи и подкожно-жировой клетчатки с применением стандартной гистологической окраски гематоксилином и эозином. (Размер биологического образца не более 14 мм).",fourthСell:"3700,00"},{firstCell:"1588",secondCell:"4",thirdCell:"Гистологическое исследование операционного материала грыжевого мешка, червеобразного отростка, желчного пузыря, свищевого хода, с применением стандартной",fourthСell:"3700,00"},{firstCell:"1589",secondCell:"5",thirdCell:"Гистологическое исследование операционного материала миндалин, кист яичника, геморроидальных узлов, миокарда, опухоли средостения с применением стандартной гистологической окраски гематоксилином и эозином.",fourthСell:"3500,00"},{firstCell:"1590",secondCell:"5",thirdCell:"Гистологическое исследование операционного материала придатков матки, кожи и подкожно -жировой клетчатки (размер биологического образца более 14 мм), лимфатических узлов и молочной железы при секторальной резекции с применением стандартной гистологической окраски гематоксилином и эозином.",fourthСell:"4000,00"},{firstCell:"1591",secondCell:"5",thirdCell:"Комплексное гистологическое исследование операционного материала легких, кишечника, желудка, предстательной железы, почек, молочной железы, и других органов без лимфатических узлов с применением стандартной гистологической окраски гематоксилином и эозином.",fourthСell:"7000,00"},{firstCell:"1592",secondCell:"5",thirdCell:"Комплексное гистологическое исследование операционного материала органокомплекса и целого органа с исследованием сторожевых лимфатических узлов с применением стандартной гистологической окраски гематоксилином и эозином.",fourthСell:"11500,00"},{firstCell:"1593",secondCell:"5",thirdCell:"Гистологическое исследование операционного материала предстательной железы (исследование целого органа после простатэктомии) с применением стандартной гистологической окраски гематоксилином и эозином.",fourthСell:"17000,00"},{firstCell:"1594",secondCell:"5",thirdCell:"Гистологическое исследование операционного материала матки с придатками (исследование целого органа после гистерэктомии, в связи со злокачетсвенным новообразованием) с применением стандартной гистологической окраски гематоксилином и эозином.",fourthСell:"7000,00"},{firstCell:"1595",secondCell:"5",thirdCell:"Гистологическое исследование операционного материала матки с придатками (исследование целого органа после гистерэктомии, в связи с гиперплазией и интраэпителиальной неоплазии) с применением стандартной гистологической окраски гематоксилином и эозином.",fourthСell:"10000,00"},{firstCell:"1596",secondCell:"5",thirdCell:"Гистологическое исследование операционного материала матки с придатками (исследование целого органа после гистерэктомии,патология не связана со злокачественной опухолью) с применением стандартной гистологической окраски гематоксилином и эозином.",fourthСell:"4000,00"},{firstCell:"1597",secondCell:"5",thirdCell:"Гистологическое исследование операционного материала цервикального канала и соскобов полости матки с применением стандартной гистологической окраски гематоксилином и эозином.",fourthСell:"3500,00"},{firstCell:"1598",secondCell:"5",thirdCell:"Гистологическое исследование операционного материала по поводу замершей или неразвивающейся беременности, а также выскабливания полости матки с применением стандартной гистологической окраски гематоксилином и эозином.",fourthСell:"5000,00"},{firstCell:"1599",secondCell:"5",thirdCell:"Гистологическое исследование последа (плацента, плодные оболочки и пуповина) с применением стандартной гистологической окраски гематоксилином и эозином.",fourthСell:"6000,00"},{firstCell:"1600",secondCell:"7",thirdCell:"Иммуногистохимическое исследование (PD-L1, клон Dako)",fourthСell:"20000,00"},{firstCell:"1601",secondCell:"3",thirdCell:"Иммуногистохимическое исследование (HER2)",fourthСell:"4500,00"},{firstCell:"1602",secondCell:"3",thirdCell:"Иммуногистохимическое исследование (1 ИГХ реакция)",fourthСell:"4500,00"},{firstCell:"1603",secondCell:"3",thirdCell:"Иммуногистохимическое исследование (определение индекса пролиферативной активности Ki-67)",fourthСell:"4500,00"},{firstCell:"1604",secondCell:"3",thirdCell:"Иммуногистохимическое исследование (не более 4 ИГХ антител)",fourthСell:"9000,00"},{firstCell:"1605",secondCell:"3",thirdCell:"Иммуногистохимическое исследование (от 5 до 10 ИГХ антител)",fourthСell:"13000,00"},{firstCell:"1606",secondCell:"3",thirdCell:"Иммуногистохимическое исследование (более 10 ИГХ антител)",fourthСell:"24000,00"},{firstCell:"1607",secondCell:"3",thirdCell:"Определение рецептивности эндометрия (окно имплантации) с помощью иммуногистохимического исследования.",fourthСell:"13000,00"},{firstCell:"1608",secondCell:"2",thirdCell:"Комплексная диагностика хронического эндометрита с помощью иммуногистохимического исследования.",fourthСell:"11000,00"},{firstCell:"1609",secondCell:"3",thirdCell:"Дифференциальная диагностика хронического эндометрита с помощью иммуногистохимического исследования.",fourthСell:"11000,00"},{firstCell:"1610",secondCell:"5",thirdCell:"Диагностика хронического эндометрита с помощью иммуногистохимического исследования.",fourthСell:"3600,00"},{firstCell:"1611",secondCell:"5",thirdCell:"Комплексное гистологическое исследование сторожевых лимфатических узловпри меланоме с применением стандартной гистологической окраски гематоксилином и эозином.",fourthСell:"21000,00"},{firstCell:"1669",secondCell:"5",thirdCell:"Определение экспрессии NTRK (ИГХ)",fourthСell:"9000,00"},{firstCell:"1717",secondCell:"5",thirdCell:"Определение экспрессии INI-1 (ИГХ)",fourthСell:"9000,00"},{firstCell:"1722",secondCell:"14",thirdCell:"Определение экспрессии ROS1 (ИГХ)",fourthСell:"8000,00"},{firstCell:"1723",secondCell:"14",thirdCell:"Определение экспрессии ALK (ИГХ)",fourthСell:"7000,00"},{firstCell:"6",secondCell:"7",thirdCell:"Фармакогенетика варфарина",fourthСell:"1500,00"},{firstCell:"909",secondCell:"40",thirdCell:"Панель «Фармакогенетика - max»",fourthСell:"16000,00"},{firstCell:"941",secondCell:"14",thirdCell:"Фармакогенетика: Цитохром CYP2D6",fourthСell:"2000,00"},{firstCell:"943",secondCell:"14",thirdCell:"Панель: «Фармакогенетика: Цитохром CYP1A2»",fourthСell:"2000,00"},{firstCell:"660",secondCell:"5",thirdCell:"Фармакогенетика ингибиторов протонного насоса",fourthСell:"2000,00"},{firstCell:"661",secondCell:"5",thirdCell:"Фармакогенетика клопидогрела",fourthСell:"2500,00"},{firstCell:"1117",secondCell:"14",thirdCell:"Панель: «Фармакогенетика:Цитохром CYP2C9»",fourthСell:"2000,00"},{firstCell:"1339",secondCell:"10",thirdCell:"Панель «Фармакогенетика: DPYD»",fourthСell:"1500,00"}]}},z6=(e=_6,t)=>e,L6={pageTopPart:{pageName:"reviews",srcDesktop:P1,srcMobile:$1,title:"Отзывы"}},M6=(e=L6,t)=>e,R6={calendar:{mapper:{gordeeva_1:{doctor:"Гордеева И. В.",description:"Главный врач, акушер-гинеколог, репродуктолог"},gordeeva_2:{doctor:"Гордеева И. В.",description:"Выдача заключений по выпискам на ЭКО по ОМС"},volkova:{doctor:"Волкова Т.Е.",description:"Акушер-гинеколог, репродуктолог"},ladyagina:{doctor:"Ладягина Е.В.",description:"Акушер-гинеколог, репродуктолог"},sabirova:{doctor:"Сабирова Г.З.",description:"Акушер-гинеколог"},serebryakova:{doctor:"Серебрякова Т.А.",description:"Акушер-гинеколог"},shabarshina:{doctor:"Шабаршина М.С.",description:"Врач УЗИ"},simanskaya:{doctor:"Симанская С.Ю.",description:"Терапевт"},lavrenuk:{doctor:"Лавренюк С.А.",description:"Уролог"},klemendeev:{doctor:"Клемендеев А.П",description:"Травматолог"},salmina:{doctor:"Салмина Н.В",description:"гистероскопия/гистерорезектоскопия"},kogevnikova:{doctor:"Кожевникова И.В.",description:"гистероскопия/гистерорезектоскопия"},manipulation:{doctor:"Манипуляционная",description:"спермограммы"},procedure:{doctor:"Процедурный",description:"забор материала"}},days:[["17.03.2025","18.03.2025","19.03.2025","20.03.2025","21.03.2025","22.03.2025","23.03.2025"],["24.03.2025","25.03.2025","26.03.2025","27.03.2025","28.03.2025","29.03.2025","30.03.2025"],["31.03.2025","01.04.2025","02.04.2025","03.04.2025","04.04.2025","05.04.2025","06.04.2025"],["07.04.2025","08.04.2025","09.04.2025","10.04.2025","11.04.2025","12.04.2025","13.04.2025"],["14.04.2025","15.04.2025","16.04.2025","17.04.2025","18.04.2025","19.04.2025","20.04.2025"]],surova:[{id:"gordeeva_1",Monday:"прием на Бебеля,1А",Tuesday:"08:40 - 11:20",Wednesday:"",Thursday:"08:40 - 11:20",Friday:"прием на Бебеля,1А",Saturday:"",Sunday:""},{id:"gordeeva_2",Monday:"",Tuesday:"14:40 - 16:00",Wednesday:"",Thursday:"",Friday:"",Saturday:"",Sunday:""},{id:"volkova",Monday:"08:00 - 19:00",Tuesday:"08:00 - 19:00",Wednesday:"",Thursday:"",Friday:"08:00 - 19:00",Saturday:"08:00 - 17:00",Sunday:""},{id:"ladyagina",Monday:"прием на Бебеля,1А",Tuesday:"08:40 - 11:20",Wednesday:"",Thursday:"08:40 - 11:20",Friday:"прием на Бебеля,1А",Saturday:"",Sunday:""},{id:"kogevnikova",Monday:"15:00 - 18:00",Tuesday:"Отпуск",colspan:6}]}},N6=(e=R6,t)=>e,O6=k6({homePage:p3,header:E6,footer:$6,sidebar:j6,pricesPage:z6,reviewsPage:M6,timeTablePage:N6}),I1=b6(O6);window.store=I1;Yh(document.getElementById("root")).render(d.jsx(oy,{children:d.jsx(g6,{store:I1})}));export{ae as C,Tt as I,fS as P,B6 as S,S as d,d as j,U as l,zr as n,$ as r};
