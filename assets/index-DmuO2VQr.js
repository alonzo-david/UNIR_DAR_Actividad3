var Rv=Object.defineProperty;var Ov=(t,r,o)=>r in t?Rv(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;var Pi=(t,r,o)=>Ov(t,typeof r!="symbol"?r+"":r,o);function Tv(t,r){for(var o=0;o<r.length;o++){const i=r[o];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in t)){const l=Object.getOwnPropertyDescriptor(i,s);l&&Object.defineProperty(t,s,l.get?l:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();function Km(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zu={exports:{}},Ei={},ec={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function _v(){if(mh)return xe;mh=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function k(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,b={};function C(O,q,pe){this.props=O,this.context=q,this.refs=b,this.updater=pe||T}C.prototype.isReactComponent={},C.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},C.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function $(){}$.prototype=C.prototype;function U(O,q,pe){this.props=O,this.context=q,this.refs=b,this.updater=pe||T}var D=U.prototype=new $;D.constructor=U,S(D,C.prototype),D.isPureReactComponent=!0;var A=Array.isArray,E=Object.prototype.hasOwnProperty,M={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function ee(O,q,pe){var de,Se={},ke=null,Te=null;if(q!=null)for(de in q.ref!==void 0&&(Te=q.ref),q.key!==void 0&&(ke=""+q.key),q)E.call(q,de)&&!F.hasOwnProperty(de)&&(Se[de]=q[de]);var Ce=arguments.length-2;if(Ce===1)Se.children=pe;else if(1<Ce){for(var ze=Array(Ce),ut=0;ut<Ce;ut++)ze[ut]=arguments[ut+2];Se.children=ze}if(O&&O.defaultProps)for(de in Ce=O.defaultProps,Ce)Se[de]===void 0&&(Se[de]=Ce[de]);return{$$typeof:t,type:O,key:ke,ref:Te,props:Se,_owner:M.current}}function se(O,q){return{$$typeof:t,type:O.type,key:q,ref:O.ref,props:O.props,_owner:O._owner}}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===t}function Q(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(pe){return q[pe]})}var te=/\/+/g;function le(O,q){return typeof O=="object"&&O!==null&&O.key!=null?Q(""+O.key):q.toString(36)}function ie(O,q,pe,de,Se){var ke=typeof O;(ke==="undefined"||ke==="boolean")&&(O=null);var Te=!1;if(O===null)Te=!0;else switch(ke){case"string":case"number":Te=!0;break;case"object":switch(O.$$typeof){case t:case r:Te=!0}}if(Te)return Te=O,Se=Se(Te),O=de===""?"."+le(Te,0):de,A(Se)?(pe="",O!=null&&(pe=O.replace(te,"$&/")+"/"),ie(Se,q,pe,"",function(ut){return ut})):Se!=null&&(x(Se)&&(Se=se(Se,pe+(!Se.key||Te&&Te.key===Se.key?"":(""+Se.key).replace(te,"$&/")+"/")+O)),q.push(Se)),1;if(Te=0,de=de===""?".":de+":",A(O))for(var Ce=0;Ce<O.length;Ce++){ke=O[Ce];var ze=de+le(ke,Ce);Te+=ie(ke,q,pe,ze,Se)}else if(ze=k(O),typeof ze=="function")for(O=ze.call(O),Ce=0;!(ke=O.next()).done;)ke=ke.value,ze=de+le(ke,Ce++),Te+=ie(ke,q,pe,ze,Se);else if(ke==="object")throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Te}function ge(O,q,pe){if(O==null)return O;var de=[],Se=0;return ie(O,de,"","",function(ke){return q.call(pe,ke,Se++)}),de}function be(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(pe){(O._status===0||O._status===-1)&&(O._status=1,O._result=pe)},function(pe){(O._status===0||O._status===-1)&&(O._status=2,O._result=pe)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var we={current:null},G={transition:null},re={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:G,ReactCurrentOwner:M};function X(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:ge,forEach:function(O,q,pe){ge(O,function(){q.apply(this,arguments)},pe)},count:function(O){var q=0;return ge(O,function(){q++}),q},toArray:function(O){return ge(O,function(q){return q})||[]},only:function(O){if(!x(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xe.Component=C,xe.Fragment=o,xe.Profiler=s,xe.PureComponent=U,xe.StrictMode=i,xe.Suspense=h,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,xe.act=X,xe.cloneElement=function(O,q,pe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var de=S({},O.props),Se=O.key,ke=O.ref,Te=O._owner;if(q!=null){if(q.ref!==void 0&&(ke=q.ref,Te=M.current),q.key!==void 0&&(Se=""+q.key),O.type&&O.type.defaultProps)var Ce=O.type.defaultProps;for(ze in q)E.call(q,ze)&&!F.hasOwnProperty(ze)&&(de[ze]=q[ze]===void 0&&Ce!==void 0?Ce[ze]:q[ze])}var ze=arguments.length-2;if(ze===1)de.children=pe;else if(1<ze){Ce=Array(ze);for(var ut=0;ut<ze;ut++)Ce[ut]=arguments[ut+2];de.children=Ce}return{$$typeof:t,type:O.type,key:Se,ref:ke,props:de,_owner:Te}},xe.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},xe.createElement=ee,xe.createFactory=function(O){var q=ee.bind(null,O);return q.type=O,q},xe.createRef=function(){return{current:null}},xe.forwardRef=function(O){return{$$typeof:d,render:O}},xe.isValidElement=x,xe.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:be}},xe.memo=function(O,q){return{$$typeof:m,type:O,compare:q===void 0?null:q}},xe.startTransition=function(O){var q=G.transition;G.transition={};try{O()}finally{G.transition=q}},xe.unstable_act=X,xe.useCallback=function(O,q){return we.current.useCallback(O,q)},xe.useContext=function(O){return we.current.useContext(O)},xe.useDebugValue=function(){},xe.useDeferredValue=function(O){return we.current.useDeferredValue(O)},xe.useEffect=function(O,q){return we.current.useEffect(O,q)},xe.useId=function(){return we.current.useId()},xe.useImperativeHandle=function(O,q,pe){return we.current.useImperativeHandle(O,q,pe)},xe.useInsertionEffect=function(O,q){return we.current.useInsertionEffect(O,q)},xe.useLayoutEffect=function(O,q){return we.current.useLayoutEffect(O,q)},xe.useMemo=function(O,q){return we.current.useMemo(O,q)},xe.useReducer=function(O,q,pe){return we.current.useReducer(O,q,pe)},xe.useRef=function(O){return we.current.useRef(O)},xe.useState=function(O){return we.current.useState(O)},xe.useSyncExternalStore=function(O,q,pe){return we.current.useSyncExternalStore(O,q,pe)},xe.useTransition=function(){return we.current.useTransition()},xe.version="18.3.1",xe}var gh;function tf(){return gh||(gh=1,ec.exports=_v()),ec.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh;function Av(){if(yh)return Ei;yh=1;var t=tf(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var y,v={},k=null,T=null;m!==void 0&&(k=""+m),h.key!==void 0&&(k=""+h.key),h.ref!==void 0&&(T=h.ref);for(y in h)i.call(h,y)&&!l.hasOwnProperty(y)&&(v[y]=h[y]);if(d&&d.defaultProps)for(y in h=d.defaultProps,h)v[y]===void 0&&(v[y]=h[y]);return{$$typeof:r,type:d,key:k,ref:T,props:v,_owner:s.current}}return Ei.Fragment=o,Ei.jsx=c,Ei.jsxs=c,Ei}var vh;function zv(){return vh||(vh=1,Zu.exports=Av()),Zu.exports}var Y=zv(),fs={},tc={exports:{}},Mt={},nc={exports:{}},rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function Nv(){return bh||(bh=1,function(t){function r(G,re){var X=G.length;G.push(re);e:for(;0<X;){var O=X-1>>>1,q=G[O];if(0<s(q,re))G[O]=re,G[X]=q,X=O;else break e}}function o(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var re=G[0],X=G.pop();if(X!==re){G[0]=X;e:for(var O=0,q=G.length,pe=q>>>1;O<pe;){var de=2*(O+1)-1,Se=G[de],ke=de+1,Te=G[ke];if(0>s(Se,X))ke<q&&0>s(Te,Se)?(G[O]=Te,G[ke]=X,O=ke):(G[O]=Se,G[de]=X,O=de);else if(ke<q&&0>s(Te,X))G[O]=Te,G[ke]=X,O=ke;else break e}}return re}function s(G,re){var X=G.sortIndex-re.sortIndex;return X!==0?X:G.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var h=[],m=[],y=1,v=null,k=3,T=!1,S=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(G){for(var re=o(m);re!==null;){if(re.callback===null)i(m);else if(re.startTime<=G)i(m),re.sortIndex=re.expirationTime,r(h,re);else break;re=o(m)}}function A(G){if(b=!1,D(G),!S)if(o(h)!==null)S=!0,be(E);else{var re=o(m);re!==null&&we(A,re.startTime-G)}}function E(G,re){S=!1,b&&(b=!1,$(ee),ee=-1),T=!0;var X=k;try{for(D(re),v=o(h);v!==null&&(!(v.expirationTime>re)||G&&!Q());){var O=v.callback;if(typeof O=="function"){v.callback=null,k=v.priorityLevel;var q=O(v.expirationTime<=re);re=t.unstable_now(),typeof q=="function"?v.callback=q:v===o(h)&&i(h),D(re)}else i(h);v=o(h)}if(v!==null)var pe=!0;else{var de=o(m);de!==null&&we(A,de.startTime-re),pe=!1}return pe}finally{v=null,k=X,T=!1}}var M=!1,F=null,ee=-1,se=5,x=-1;function Q(){return!(t.unstable_now()-x<se)}function te(){if(F!==null){var G=t.unstable_now();x=G;var re=!0;try{re=F(!0,G)}finally{re?le():(M=!1,F=null)}}else M=!1}var le;if(typeof U=="function")le=function(){U(te)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ge=ie.port2;ie.port1.onmessage=te,le=function(){ge.postMessage(null)}}else le=function(){C(te,0)};function be(G){F=G,M||(M=!0,le())}function we(G,re){ee=C(function(){G(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){S||T||(S=!0,be(E))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return k},t.unstable_getFirstCallbackNode=function(){return o(h)},t.unstable_next=function(G){switch(k){case 1:case 2:case 3:var re=3;break;default:re=k}var X=k;k=re;try{return G()}finally{k=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,re){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var X=k;k=G;try{return re()}finally{k=X}},t.unstable_scheduleCallback=function(G,re,X){var O=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?O+X:O):X=O,G){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=X+q,G={id:y++,callback:re,priorityLevel:G,startTime:X,expirationTime:q,sortIndex:-1},X>O?(G.sortIndex=X,r(m,G),o(h)===null&&G===o(m)&&(b?($(ee),ee=-1):b=!0,we(A,X-O))):(G.sortIndex=q,r(h,G),S||T||(S=!0,be(E))),G},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(G){var re=k;return function(){var X=k;k=re;try{return G.apply(this,arguments)}finally{k=X}}}}(rc)),rc}var xh;function Mv(){return xh||(xh=1,nc.exports=Nv()),nc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh;function $v(){if(Sh)return Mt;Sh=1;var t=tf(),r=Mv();function o(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function l(e,n){c(e,n),c(e+"Capture",n)}function c(e,n){for(s[e]=n,e=0;e<n.length;e++)i.add(n[e])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function k(e){return h.call(v,e)?!0:h.call(y,e)?!1:m.test(e)?v[e]=!0:(y[e]=!0,!1)}function T(e,n,a,u){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function S(e,n,a,u){if(n===null||typeof n>"u"||T(e,n,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function b(e,n,a,u,f,p,g){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=e,this.type=n,this.sanitizeURL=p,this.removeEmptyString=g}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){C[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];C[n]=new b(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){C[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){C[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){C[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){C[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){C[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){C[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){C[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($,U);C[n]=new b(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($,U);C[n]=new b(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($,U);C[n]=new b(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){C[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),C.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){C[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function D(e,n,a,u){var f=C.hasOwnProperty(n)?C[n]:null;(f!==null?f.type!==0:u||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(S(n,a,f,u)&&(a=null),u||f===null?k(n)&&(a===null?e.removeAttribute(n):e.setAttribute(n,""+a)):f.mustUseProperty?e[f.propertyName]=a===null?f.type===3?!1:"":a:(n=f.attributeName,u=f.attributeNamespace,a===null?e.removeAttribute(n):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,u?e.setAttributeNS(u,n,a):e.setAttribute(n,a))))}var A=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=Symbol.for("react.element"),M=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),Q=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),G=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,O;function q(e){if(O===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);O=n&&n[1]||""}return`
`+O+e}var pe=!1;function de(e,n){if(!e||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(N){var u=N}Reflect.construct(e,[],n)}else{try{n.call()}catch(N){u=N}e.call(n.prototype)}else{try{throw Error()}catch(N){u=N}e()}}catch(N){if(N&&u&&typeof N.stack=="string"){for(var f=N.stack.split(`
`),p=u.stack.split(`
`),g=f.length-1,w=p.length-1;1<=g&&0<=w&&f[g]!==p[w];)w--;for(;1<=g&&0<=w;g--,w--)if(f[g]!==p[w]){if(g!==1||w!==1)do if(g--,w--,0>w||f[g]!==p[w]){var P=`
`+f[g].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=g&&0<=w);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?q(e):""}function Se(e){switch(e.tag){case 5:return q(e.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case M:return"Portal";case se:return"Profiler";case ee:return"StrictMode";case le:return"Suspense";case ie:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Q:return(e.displayName||"Context")+".Consumer";case x:return(e._context.displayName||"Context")+".Provider";case te:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return n=e.displayName||null,n!==null?n:ke(e.type)||"Memo";case be:n=e._payload,e=e._init;try{return ke(e(n))}catch{}}return null}function Te(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(n);case 8:return n===ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ze(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ut(e){var n=ze(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),u=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return f.call(this)},set:function(g){u=""+g,p.call(this,g)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function On(e){e._valueTracker||(e._valueTracker=ut(e))}function Kr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),u="";return e&&(u=ze(e)?e.checked?"true":"false":e.value),e=u,e!==a?(n.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _n(e,n){var a=n.checked;return X({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function ct(e,n){var a=n.defaultValue==null?"":n.defaultValue,u=n.checked!=null?n.checked:n.defaultChecked;a=Ce(n.value!=null?n.value:a),e._wrapperState={initialChecked:u,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function wr(e,n){n=n.checked,n!=null&&D(e,"checked",n,!1)}function kr(e,n){wr(e,n);var a=Ce(n.value),u=n.type;if(a!=null)u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(u==="submit"||u==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?kt(e,n.type,a):n.hasOwnProperty("defaultValue")&&kt(e,n.type,Ce(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function tt(e,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var u=n.type;if(!(u!=="submit"&&u!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,a||n===e.value||(e.value=n),e.defaultValue=n}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function kt(e,n,a){(n!=="number"||Tn(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var An=Array.isArray;function Kt(e,n,a,u){if(e=e.options,n){n={};for(var f=0;f<a.length;f++)n["$"+a[f]]=!0;for(a=0;a<e.length;a++)f=n.hasOwnProperty("$"+e[a].value),e[a].selected!==f&&(e[a].selected=f),f&&u&&(e[a].defaultSelected=!0)}else{for(a=""+Ce(a),n=null,f=0;f<e.length;f++){if(e[f].value===a){e[f].selected=!0,u&&(e[f].defaultSelected=!0);return}n!==null||e[f].disabled||(n=e[f])}n!==null&&(n.selected=!0)}}function Vn(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(o(91));return X({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function he(e,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(o(92));if(An(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),a=n}e._wrapperState={initialValue:Ce(a)}}function Wn(e,n){var a=Ce(n.value),u=Ce(n.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),n.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),u!=null&&(e.defaultValue=""+u)}function Cr(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Gn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Gn(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Le,Ve=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,u,f){MSApp.execUnsafeLocalFunction(function(){return e(n,a,u,f)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Le=Le||document.createElement("div"),Le.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Le.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function mn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uo=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){Uo.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Kn[n]=Kn[e]})});function ra(e,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+n).trim():n+"px"}function Af(e,n){e=e.style;for(var a in n)if(n.hasOwnProperty(a)){var u=a.indexOf("--")===0,f=ra(a,n[a],u);a==="float"&&(a="cssFloat"),u?e.setProperty(a,f):e[a]=f}}var z0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fl(e,n){if(n){if(z0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(o(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(n.style!=null&&typeof n.style!="object")throw Error(o(62))}}function dl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pl=null;function hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,Yr=null,Qr=null;function zf(e){if(e=ci(e)){if(typeof ml!="function")throw Error(o(280));var n=e.stateNode;n&&(n=Ea(n),ml(e.stateNode,e.type,n))}}function Nf(e){Yr?Qr?Qr.push(e):Qr=[e]:Yr=e}function Mf(){if(Yr){var e=Yr,n=Qr;if(Qr=Yr=null,zf(e),n)for(e=0;e<n.length;e++)zf(n[e])}}function $f(e,n){return e(n)}function Df(){}var gl=!1;function jf(e,n,a){if(gl)return e(n,a);gl=!0;try{return $f(e,n,a)}finally{gl=!1,(Yr!==null||Qr!==null)&&(Df(),Mf())}}function qo(e,n){var a=e.stateNode;if(a===null)return null;var u=Ea(a);if(u===null)return null;a=u[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,n,typeof a));return a}var yl=!1;if(d)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){yl=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{yl=!1}function N0(e,n,a,u,f,p,g,w,P){var N=Array.prototype.slice.call(arguments,3);try{n.apply(a,N)}catch(V){this.onError(V)}}var Vo=!1,oa=null,ia=!1,vl=null,M0={onError:function(e){Vo=!0,oa=e}};function $0(e,n,a,u,f,p,g,w,P){Vo=!1,oa=null,N0.apply(M0,arguments)}function D0(e,n,a,u,f,p,g,w,P){if($0.apply(this,arguments),Vo){if(Vo){var N=oa;Vo=!1,oa=null}else throw Error(o(198));ia||(ia=!0,vl=N)}}function Er(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function Lf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function If(e){if(Er(e)!==e)throw Error(o(188))}function j0(e){var n=e.alternate;if(!n){if(n=Er(e),n===null)throw Error(o(188));return n!==e?null:e}for(var a=e,u=n;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return If(f),e;if(p===u)return If(f),n;p=p.sibling}throw Error(o(188))}if(a.return!==u.return)a=f,u=p;else{for(var g=!1,w=f.child;w;){if(w===a){g=!0,a=f,u=p;break}if(w===u){g=!0,u=f,a=p;break}w=w.sibling}if(!g){for(w=p.child;w;){if(w===a){g=!0,a=p,u=f;break}if(w===u){g=!0,u=p,a=f;break}w=w.sibling}if(!g)throw Error(o(189))}}if(a.alternate!==u)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:n}function Bf(e){return e=j0(e),e!==null?Ff(e):null}function Ff(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ff(e);if(n!==null)return n;e=e.sibling}return null}var Uf=r.unstable_scheduleCallback,qf=r.unstable_cancelCallback,L0=r.unstable_shouldYield,I0=r.unstable_requestPaint,Je=r.unstable_now,B0=r.unstable_getCurrentPriorityLevel,bl=r.unstable_ImmediatePriority,Hf=r.unstable_UserBlockingPriority,aa=r.unstable_NormalPriority,F0=r.unstable_LowPriority,Vf=r.unstable_IdlePriority,sa=null,gn=null;function U0(e){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(sa,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:V0,q0=Math.log,H0=Math.LN2;function V0(e){return e>>>=0,e===0?32:31-(q0(e)/H0|0)|0}var la=64,ua=4194304;function Wo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ca(e,n){var a=e.pendingLanes;if(a===0)return 0;var u=0,f=e.suspendedLanes,p=e.pingedLanes,g=a&268435455;if(g!==0){var w=g&~f;w!==0?u=Wo(w):(p&=g,p!==0&&(u=Wo(p)))}else g=a&~f,g!==0?u=Wo(g):p!==0&&(u=Wo(p));if(u===0)return 0;if(n!==0&&n!==u&&!(n&f)&&(f=u&-u,p=n&-n,f>=p||f===16&&(p&4194240)!==0))return n;if(u&4&&(u|=a&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=u;0<n;)a=31-on(n),f=1<<a,u|=e[a],n&=~f;return u}function W0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G0(e,n){for(var a=e.suspendedLanes,u=e.pingedLanes,f=e.expirationTimes,p=e.pendingLanes;0<p;){var g=31-on(p),w=1<<g,P=f[g];P===-1?(!(w&a)||w&u)&&(f[g]=W0(w,n)):P<=n&&(e.expiredLanes|=w),p&=~w}}function xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wf(){var e=la;return la<<=1,!(la&4194240)&&(la=64),e}function Sl(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Go(e,n,a){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-on(n),e[n]=a}function K0(e,n){var a=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var u=e.eventTimes;for(e=e.expirationTimes;0<a;){var f=31-on(a),p=1<<f;n[f]=0,u[f]=-1,e[f]=-1,a&=~p}}function wl(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var u=31-on(a),f=1<<u;f&n|e[u]&n&&(e[u]|=n),a&=~f}}var Ne=0;function Gf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kf,kl,Yf,Qf,Xf,Cl=!1,fa=[],Yn=null,Qn=null,Xn=null,Ko=new Map,Yo=new Map,Jn=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(e,n){switch(e){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":Ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(n.pointerId)}}function Qo(e,n,a,u,f,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},n!==null&&(n=ci(n),n!==null&&kl(n)),e):(e.eventSystemFlags|=u,n=e.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),e)}function Q0(e,n,a,u,f){switch(n){case"focusin":return Yn=Qo(Yn,e,n,a,u,f),!0;case"dragenter":return Qn=Qo(Qn,e,n,a,u,f),!0;case"mouseover":return Xn=Qo(Xn,e,n,a,u,f),!0;case"pointerover":var p=f.pointerId;return Ko.set(p,Qo(Ko.get(p)||null,e,n,a,u,f)),!0;case"gotpointercapture":return p=f.pointerId,Yo.set(p,Qo(Yo.get(p)||null,e,n,a,u,f)),!0}return!1}function Zf(e){var n=Rr(e.target);if(n!==null){var a=Er(n);if(a!==null){if(n=a.tag,n===13){if(n=Lf(a),n!==null){e.blockedOn=n,Xf(e.priority,function(){Yf(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function da(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=El(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var u=new a.constructor(a.type,a);pl=u,a.target.dispatchEvent(u),pl=null}else return n=ci(a),n!==null&&kl(n),e.blockedOn=a,!1;n.shift()}return!0}function ed(e,n,a){da(e)&&a.delete(n)}function X0(){Cl=!1,Yn!==null&&da(Yn)&&(Yn=null),Qn!==null&&da(Qn)&&(Qn=null),Xn!==null&&da(Xn)&&(Xn=null),Ko.forEach(ed),Yo.forEach(ed)}function Xo(e,n){e.blockedOn===n&&(e.blockedOn=null,Cl||(Cl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,X0)))}function Jo(e){function n(f){return Xo(f,e)}if(0<fa.length){Xo(fa[0],e);for(var a=1;a<fa.length;a++){var u=fa[a];u.blockedOn===e&&(u.blockedOn=null)}}for(Yn!==null&&Xo(Yn,e),Qn!==null&&Xo(Qn,e),Xn!==null&&Xo(Xn,e),Ko.forEach(n),Yo.forEach(n),a=0;a<Jn.length;a++)u=Jn[a],u.blockedOn===e&&(u.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)Zf(a),a.blockedOn===null&&Jn.shift()}var Xr=A.ReactCurrentBatchConfig,pa=!0;function J0(e,n,a,u){var f=Ne,p=Xr.transition;Xr.transition=null;try{Ne=1,Pl(e,n,a,u)}finally{Ne=f,Xr.transition=p}}function Z0(e,n,a,u){var f=Ne,p=Xr.transition;Xr.transition=null;try{Ne=4,Pl(e,n,a,u)}finally{Ne=f,Xr.transition=p}}function Pl(e,n,a,u){if(pa){var f=El(e,n,a,u);if(f===null)ql(e,n,u,ha,a),Jf(e,u);else if(Q0(f,e,n,a,u))u.stopPropagation();else if(Jf(e,u),n&4&&-1<Y0.indexOf(e)){for(;f!==null;){var p=ci(f);if(p!==null&&Kf(p),p=El(e,n,a,u),p===null&&ql(e,n,u,ha,a),p===f)break;f=p}f!==null&&u.stopPropagation()}else ql(e,n,u,null,a)}}var ha=null;function El(e,n,a,u){if(ha=null,e=hl(u),e=Rr(e),e!==null)if(n=Er(e),n===null)e=null;else if(a=n.tag,a===13){if(e=Lf(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ha=e,null}function td(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B0()){case bl:return 1;case Hf:return 4;case aa:case F0:return 16;case Vf:return 536870912;default:return 16}default:return 16}}var Zn=null,Rl=null,ma=null;function nd(){if(ma)return ma;var e,n=Rl,a=n.length,u,f="value"in Zn?Zn.value:Zn.textContent,p=f.length;for(e=0;e<a&&n[e]===f[e];e++);var g=a-e;for(u=1;u<=g&&n[a-u]===f[p-u];u++);return ma=f.slice(e,1<u?1-u:void 0)}function ga(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ya(){return!0}function rd(){return!1}function It(e){function n(a,u,f,p,g){this._reactName=a,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=g,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ya:rd,this.isPropagationStopped=rd,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),n}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=It(Jr),Zo=X({},Jr,{view:0,detail:0}),ey=It(Zo),Tl,_l,ei,va=X({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(Tl=e.screenX-ei.screenX,_l=e.screenY-ei.screenY):_l=Tl=0,ei=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),od=It(va),ty=X({},va,{dataTransfer:0}),ny=It(ty),ry=X({},Zo,{relatedTarget:0}),Al=It(ry),oy=X({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),iy=It(oy),ay=X({},Jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sy=It(ay),ly=X({},Jr,{data:0}),id=It(ly),uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=fy[e])?!!n[e]:!1}function zl(){return dy}var py=X({},Zo,{key:function(e){if(e.key){var n=uy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(e){return e.type==="keypress"?ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hy=It(py),my=X({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=It(my),gy=X({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),yy=It(gy),vy=X({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),by=It(vy),xy=X({},va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=It(xy),wy=[9,13,27,32],Nl=d&&"CompositionEvent"in window,ti=null;d&&"documentMode"in document&&(ti=document.documentMode);var ky=d&&"TextEvent"in window&&!ti,sd=d&&(!Nl||ti&&8<ti&&11>=ti),ld=" ",ud=!1;function cd(e,n){switch(e){case"keyup":return wy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zr=!1;function Cy(e,n){switch(e){case"compositionend":return fd(n);case"keypress":return n.which!==32?null:(ud=!0,ld);case"textInput":return e=n.data,e===ld&&ud?null:e;default:return null}}function Py(e,n){if(Zr)return e==="compositionend"||!Nl&&cd(e,n)?(e=nd(),ma=Rl=Zn=null,Zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sd&&n.locale!=="ko"?null:n.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ey[e.type]:n==="textarea"}function pd(e,n,a,u){Nf(u),n=ka(n,"onChange"),0<n.length&&(a=new Ol("onChange","change",null,a,u),e.push({event:a,listeners:n}))}var ni=null,ri=null;function Ry(e){Ad(e,0)}function ba(e){var n=oo(e);if(Kr(n))return e}function Oy(e,n){if(e==="change")return n}var hd=!1;if(d){var Ml;if(d){var $l="oninput"in document;if(!$l){var md=document.createElement("div");md.setAttribute("oninput","return;"),$l=typeof md.oninput=="function"}Ml=$l}else Ml=!1;hd=Ml&&(!document.documentMode||9<document.documentMode)}function gd(){ni&&(ni.detachEvent("onpropertychange",yd),ri=ni=null)}function yd(e){if(e.propertyName==="value"&&ba(ri)){var n=[];pd(n,ri,e,hl(e)),jf(Ry,n)}}function Ty(e,n,a){e==="focusin"?(gd(),ni=n,ri=a,ni.attachEvent("onpropertychange",yd)):e==="focusout"&&gd()}function _y(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ba(ri)}function Ay(e,n){if(e==="click")return ba(n)}function zy(e,n){if(e==="input"||e==="change")return ba(n)}function Ny(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var an=typeof Object.is=="function"?Object.is:Ny;function oi(e,n){if(an(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),u=Object.keys(n);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!h.call(n,f)||!an(e[f],n[f]))return!1}return!0}function vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bd(e,n){var a=vd(e);e=0;for(var u;a;){if(a.nodeType===3){if(u=e+a.textContent.length,e<=n&&u>=n)return{node:a,offset:n-e};e=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vd(a)}}function xd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Sd(){for(var e=window,n=Tn();n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Tn(e.document)}return n}function Dl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function My(e){var n=Sd(),a=e.focusedElem,u=e.selectionRange;if(n!==a&&a&&a.ownerDocument&&xd(a.ownerDocument.documentElement,a)){if(u!==null&&Dl(a)){if(n=u.start,e=u.end,e===void 0&&(e=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(e,a.value.length);else if(e=(n=a.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var f=a.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!e.extend&&p>u&&(f=u,u=p,p=f),f=bd(a,p);var g=bd(a,u);f&&g&&(e.rangeCount!==1||e.anchorNode!==f.node||e.anchorOffset!==f.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(n=n.createRange(),n.setStart(f.node,f.offset),e.removeAllRanges(),p>u?(e.addRange(n),e.extend(g.node,g.offset)):(n.setEnd(g.node,g.offset),e.addRange(n)))}}for(n=[],e=a;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)e=n[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $y=d&&"documentMode"in document&&11>=document.documentMode,eo=null,jl=null,ii=null,Ll=!1;function wd(e,n,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ll||eo==null||eo!==Tn(u)||(u=eo,"selectionStart"in u&&Dl(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ii&&oi(ii,u)||(ii=u,u=ka(jl,"onSelect"),0<u.length&&(n=new Ol("onSelect","select",null,n,a),e.push({event:n,listeners:u}),n.target=eo)))}function xa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var to={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Il={},kd={};d&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Sa(e){if(Il[e])return Il[e];if(!to[e])return e;var n=to[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in kd)return Il[e]=n[a];return e}var Cd=Sa("animationend"),Pd=Sa("animationiteration"),Ed=Sa("animationstart"),Rd=Sa("transitionend"),Od=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,n){Od.set(e,n),l(n,[e])}for(var Bl=0;Bl<Td.length;Bl++){var Fl=Td[Bl],Dy=Fl.toLowerCase(),jy=Fl[0].toUpperCase()+Fl.slice(1);er(Dy,"on"+jy)}er(Cd,"onAnimationEnd"),er(Pd,"onAnimationIteration"),er(Ed,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Rd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));function _d(e,n,a){var u=e.type||"unknown-event";e.currentTarget=a,D0(u,n,void 0,e),e.currentTarget=null}function Ad(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var u=e[a],f=u.event;u=u.listeners;e:{var p=void 0;if(n)for(var g=u.length-1;0<=g;g--){var w=u[g],P=w.instance,N=w.currentTarget;if(w=w.listener,P!==p&&f.isPropagationStopped())break e;_d(f,w,N),p=P}else for(g=0;g<u.length;g++){if(w=u[g],P=w.instance,N=w.currentTarget,w=w.listener,P!==p&&f.isPropagationStopped())break e;_d(f,w,N),p=P}}}if(ia)throw e=vl,ia=!1,vl=null,e}function Ie(e,n){var a=n[Yl];a===void 0&&(a=n[Yl]=new Set);var u=e+"__bubble";a.has(u)||(zd(n,e,2,!1),a.add(u))}function Ul(e,n,a){var u=0;n&&(u|=4),zd(a,e,u,n)}var wa="_reactListening"+Math.random().toString(36).slice(2);function si(e){if(!e[wa]){e[wa]=!0,i.forEach(function(a){a!=="selectionchange"&&(Ly.has(a)||Ul(a,!1,e),Ul(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wa]||(n[wa]=!0,Ul("selectionchange",!1,n))}}function zd(e,n,a,u){switch(td(n)){case 1:var f=J0;break;case 4:f=Z0;break;default:f=Pl}a=f.bind(null,n,a,e),f=void 0,!yl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),u?f!==void 0?e.addEventListener(n,a,{capture:!0,passive:f}):e.addEventListener(n,a,!0):f!==void 0?e.addEventListener(n,a,{passive:f}):e.addEventListener(n,a,!1)}function ql(e,n,a,u,f){var p=u;if(!(n&1)&&!(n&2)&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var w=u.stateNode.containerInfo;if(w===f||w.nodeType===8&&w.parentNode===f)break;if(g===4)for(g=u.return;g!==null;){var P=g.tag;if((P===3||P===4)&&(P=g.stateNode.containerInfo,P===f||P.nodeType===8&&P.parentNode===f))return;g=g.return}for(;w!==null;){if(g=Rr(w),g===null)return;if(P=g.tag,P===5||P===6){u=p=g;continue e}w=w.parentNode}}u=u.return}jf(function(){var N=p,V=hl(a),W=[];e:{var H=Od.get(e);if(H!==void 0){var J=Ol,ne=e;switch(e){case"keypress":if(ga(a)===0)break e;case"keydown":case"keyup":J=hy;break;case"focusin":ne="focus",J=Al;break;case"focusout":ne="blur",J=Al;break;case"beforeblur":case"afterblur":J=Al;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=yy;break;case Cd:case Pd:case Ed:J=iy;break;case Rd:J=by;break;case"scroll":J=ey;break;case"wheel":J=Sy;break;case"copy":case"cut":case"paste":J=sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=ad}var oe=(n&4)!==0,Ze=!oe&&e==="scroll",_=oe?H!==null?H+"Capture":null:H;oe=[];for(var R=N,z;R!==null;){z=R;var K=z.stateNode;if(z.tag===5&&K!==null&&(z=K,_!==null&&(K=qo(R,_),K!=null&&oe.push(li(R,K,z)))),Ze)break;R=R.return}0<oe.length&&(H=new J(H,ne,null,a,V),W.push({event:H,listeners:oe}))}}if(!(n&7)){e:{if(H=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",H&&a!==pl&&(ne=a.relatedTarget||a.fromElement)&&(Rr(ne)||ne[zn]))break e;if((J||H)&&(H=V.window===V?V:(H=V.ownerDocument)?H.defaultView||H.parentWindow:window,J?(ne=a.relatedTarget||a.toElement,J=N,ne=ne?Rr(ne):null,ne!==null&&(Ze=Er(ne),ne!==Ze||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(J=null,ne=N),J!==ne)){if(oe=od,K="onMouseLeave",_="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(oe=ad,K="onPointerLeave",_="onPointerEnter",R="pointer"),Ze=J==null?H:oo(J),z=ne==null?H:oo(ne),H=new oe(K,R+"leave",J,a,V),H.target=Ze,H.relatedTarget=z,K=null,Rr(V)===N&&(oe=new oe(_,R+"enter",ne,a,V),oe.target=z,oe.relatedTarget=Ze,K=oe),Ze=K,J&&ne)t:{for(oe=J,_=ne,R=0,z=oe;z;z=no(z))R++;for(z=0,K=_;K;K=no(K))z++;for(;0<R-z;)oe=no(oe),R--;for(;0<z-R;)_=no(_),z--;for(;R--;){if(oe===_||_!==null&&oe===_.alternate)break t;oe=no(oe),_=no(_)}oe=null}else oe=null;J!==null&&Nd(W,H,J,oe,!1),ne!==null&&Ze!==null&&Nd(W,Ze,ne,oe,!0)}}e:{if(H=N?oo(N):window,J=H.nodeName&&H.nodeName.toLowerCase(),J==="select"||J==="input"&&H.type==="file")var ae=Oy;else if(dd(H))if(hd)ae=zy;else{ae=_y;var ce=Ty}else(J=H.nodeName)&&J.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ae=Ay);if(ae&&(ae=ae(e,N))){pd(W,ae,a,V);break e}ce&&ce(e,H,N),e==="focusout"&&(ce=H._wrapperState)&&ce.controlled&&H.type==="number"&&kt(H,"number",H.value)}switch(ce=N?oo(N):window,e){case"focusin":(dd(ce)||ce.contentEditable==="true")&&(eo=ce,jl=N,ii=null);break;case"focusout":ii=jl=eo=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,wd(W,a,V);break;case"selectionchange":if($y)break;case"keydown":case"keyup":wd(W,a,V)}var fe;if(Nl)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Zr?cd(e,a)&&(me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(sd&&a.locale!=="ko"&&(Zr||me!=="onCompositionStart"?me==="onCompositionEnd"&&Zr&&(fe=nd()):(Zn=V,Rl="value"in Zn?Zn.value:Zn.textContent,Zr=!0)),ce=ka(N,me),0<ce.length&&(me=new id(me,e,null,a,V),W.push({event:me,listeners:ce}),fe?me.data=fe:(fe=fd(a),fe!==null&&(me.data=fe)))),(fe=ky?Cy(e,a):Py(e,a))&&(N=ka(N,"onBeforeInput"),0<N.length&&(V=new id("onBeforeInput","beforeinput",null,a,V),W.push({event:V,listeners:N}),V.data=fe))}Ad(W,n)})}function li(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ka(e,n){for(var a=n+"Capture",u=[];e!==null;){var f=e,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=qo(e,a),p!=null&&u.unshift(li(e,p,f)),p=qo(e,n),p!=null&&u.push(li(e,p,f))),e=e.return}return u}function no(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nd(e,n,a,u,f){for(var p=n._reactName,g=[];a!==null&&a!==u;){var w=a,P=w.alternate,N=w.stateNode;if(P!==null&&P===u)break;w.tag===5&&N!==null&&(w=N,f?(P=qo(a,p),P!=null&&g.unshift(li(a,P,w))):f||(P=qo(a,p),P!=null&&g.push(li(a,P,w)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Iy=/\r\n?/g,By=/\u0000|\uFFFD/g;function Md(e){return(typeof e=="string"?e:""+e).replace(Iy,`
`).replace(By,"")}function Ca(e,n,a){if(n=Md(n),Md(e)!==n&&a)throw Error(o(425))}function Pa(){}var Hl=null,Vl=null;function Wl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gl=typeof setTimeout=="function"?setTimeout:void 0,Fy=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,Uy=typeof queueMicrotask=="function"?queueMicrotask:typeof $d<"u"?function(e){return $d.resolve(null).then(e).catch(qy)}:Gl;function qy(e){setTimeout(function(){throw e})}function Kl(e,n){var a=n,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(u===0){e.removeChild(f),Jo(n);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=f}while(a);Jo(n)}function tr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Dd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}var ro=Math.random().toString(36).slice(2),yn="__reactFiber$"+ro,ui="__reactProps$"+ro,zn="__reactContainer$"+ro,Yl="__reactEvents$"+ro,Hy="__reactListeners$"+ro,Vy="__reactHandles$"+ro;function Rr(e){var n=e[yn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zn]||a[yn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Dd(e);e!==null;){if(a=e[yn])return a;e=Dd(e)}return n}e=a,a=e.parentNode}return null}function ci(e){return e=e[yn]||e[zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function oo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Ea(e){return e[ui]||null}var Ql=[],io=-1;function nr(e){return{current:e}}function Be(e){0>io||(e.current=Ql[io],Ql[io]=null,io--)}function je(e,n){io++,Ql[io]=e.current,e.current=n}var rr={},yt=nr(rr),Tt=nr(!1),Or=rr;function ao(e,n){var a=e.type.contextTypes;if(!a)return rr;var u=e.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===n)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=n[p];return u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=f),f}function _t(e){return e=e.childContextTypes,e!=null}function Ra(){Be(Tt),Be(yt)}function jd(e,n,a){if(yt.current!==rr)throw Error(o(168));je(yt,n),je(Tt,a)}function Ld(e,n,a){var u=e.stateNode;if(n=n.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var f in u)if(!(f in n))throw Error(o(108,Te(e)||"Unknown",f));return X({},a,u)}function Oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rr,Or=yt.current,je(yt,e),je(Tt,Tt.current),!0}function Id(e,n,a){var u=e.stateNode;if(!u)throw Error(o(169));a?(e=Ld(e,n,Or),u.__reactInternalMemoizedMergedChildContext=e,Be(Tt),Be(yt),je(yt,e)):Be(Tt),je(Tt,a)}var Nn=null,Ta=!1,Xl=!1;function Bd(e){Nn===null?Nn=[e]:Nn.push(e)}function Wy(e){Ta=!0,Bd(e)}function or(){if(!Xl&&Nn!==null){Xl=!0;var e=0,n=Ne;try{var a=Nn;for(Ne=1;e<a.length;e++){var u=a[e];do u=u(!0);while(u!==null)}Nn=null,Ta=!1}catch(f){throw Nn!==null&&(Nn=Nn.slice(e+1)),Uf(bl,or),f}finally{Ne=n,Xl=!1}}return null}var so=[],lo=0,_a=null,Aa=0,Yt=[],Qt=0,Tr=null,Mn=1,$n="";function _r(e,n){so[lo++]=Aa,so[lo++]=_a,_a=e,Aa=n}function Fd(e,n,a){Yt[Qt++]=Mn,Yt[Qt++]=$n,Yt[Qt++]=Tr,Tr=e;var u=Mn;e=$n;var f=32-on(u)-1;u&=~(1<<f),a+=1;var p=32-on(n)+f;if(30<p){var g=f-f%5;p=(u&(1<<g)-1).toString(32),u>>=g,f-=g,Mn=1<<32-on(n)+f|a<<f|u,$n=p+e}else Mn=1<<p|a<<f|u,$n=e}function Jl(e){e.return!==null&&(_r(e,1),Fd(e,1,0))}function Zl(e){for(;e===_a;)_a=so[--lo],so[lo]=null,Aa=so[--lo],so[lo]=null;for(;e===Tr;)Tr=Yt[--Qt],Yt[Qt]=null,$n=Yt[--Qt],Yt[Qt]=null,Mn=Yt[--Qt],Yt[Qt]=null}var Bt=null,Ft=null,Fe=!1,sn=null;function Ud(e,n){var a=en(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=e,n=e.deletions,n===null?(e.deletions=[a],e.flags|=16):n.push(a)}function qd(e,n){switch(e.tag){case 5:var a=e.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Bt=e,Ft=tr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Bt=e,Ft=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=Tr!==null?{id:Mn,overflow:$n}:null,e.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=en(18,null,null,0),a.stateNode=n,a.return=e,e.child=a,Bt=e,Ft=null,!0):!1;default:return!1}}function eu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tu(e){if(Fe){var n=Ft;if(n){var a=n;if(!qd(e,n)){if(eu(e))throw Error(o(418));n=tr(a.nextSibling);var u=Bt;n&&qd(e,n)?Ud(u,a):(e.flags=e.flags&-4097|2,Fe=!1,Bt=e)}}else{if(eu(e))throw Error(o(418));e.flags=e.flags&-4097|2,Fe=!1,Bt=e}}}function Hd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Bt=e}function za(e){if(e!==Bt)return!1;if(!Fe)return Hd(e),Fe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Wl(e.type,e.memoizedProps)),n&&(n=Ft)){if(eu(e))throw Vd(),Error(o(418));for(;n;)Ud(e,n),n=tr(n.nextSibling)}if(Hd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(n===0){Ft=tr(e.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}e=e.nextSibling}Ft=null}}else Ft=Bt?tr(e.stateNode.nextSibling):null;return!0}function Vd(){for(var e=Ft;e;)e=tr(e.nextSibling)}function uo(){Ft=Bt=null,Fe=!1}function nu(e){sn===null?sn=[e]:sn.push(e)}var Gy=A.ReactCurrentBatchConfig;function fi(e,n,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(o(309));var u=a.stateNode}if(!u)throw Error(o(147,e));var f=u,p=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(g){var w=f.refs;g===null?delete w[p]:w[p]=g},n._stringRef=p,n)}if(typeof e!="string")throw Error(o(284));if(!a._owner)throw Error(o(290,e))}return e}function Na(e,n){throw e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Wd(e){var n=e._init;return n(e._payload)}function Gd(e){function n(_,R){if(e){var z=_.deletions;z===null?(_.deletions=[R],_.flags|=16):z.push(R)}}function a(_,R){if(!e)return null;for(;R!==null;)n(_,R),R=R.sibling;return null}function u(_,R){for(_=new Map;R!==null;)R.key!==null?_.set(R.key,R):_.set(R.index,R),R=R.sibling;return _}function f(_,R){return _=dr(_,R),_.index=0,_.sibling=null,_}function p(_,R,z){return _.index=z,e?(z=_.alternate,z!==null?(z=z.index,z<R?(_.flags|=2,R):z):(_.flags|=2,R)):(_.flags|=1048576,R)}function g(_){return e&&_.alternate===null&&(_.flags|=2),_}function w(_,R,z,K){return R===null||R.tag!==6?(R=Gu(z,_.mode,K),R.return=_,R):(R=f(R,z),R.return=_,R)}function P(_,R,z,K){var ae=z.type;return ae===F?V(_,R,z.props.children,K,z.key):R!==null&&(R.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===be&&Wd(ae)===R.type)?(K=f(R,z.props),K.ref=fi(_,R,z),K.return=_,K):(K=rs(z.type,z.key,z.props,null,_.mode,K),K.ref=fi(_,R,z),K.return=_,K)}function N(_,R,z,K){return R===null||R.tag!==4||R.stateNode.containerInfo!==z.containerInfo||R.stateNode.implementation!==z.implementation?(R=Ku(z,_.mode,K),R.return=_,R):(R=f(R,z.children||[]),R.return=_,R)}function V(_,R,z,K,ae){return R===null||R.tag!==7?(R=Lr(z,_.mode,K,ae),R.return=_,R):(R=f(R,z),R.return=_,R)}function W(_,R,z){if(typeof R=="string"&&R!==""||typeof R=="number")return R=Gu(""+R,_.mode,z),R.return=_,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case E:return z=rs(R.type,R.key,R.props,null,_.mode,z),z.ref=fi(_,null,R),z.return=_,z;case M:return R=Ku(R,_.mode,z),R.return=_,R;case be:var K=R._init;return W(_,K(R._payload),z)}if(An(R)||re(R))return R=Lr(R,_.mode,z,null),R.return=_,R;Na(_,R)}return null}function H(_,R,z,K){var ae=R!==null?R.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return ae!==null?null:w(_,R,""+z,K);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case E:return z.key===ae?P(_,R,z,K):null;case M:return z.key===ae?N(_,R,z,K):null;case be:return ae=z._init,H(_,R,ae(z._payload),K)}if(An(z)||re(z))return ae!==null?null:V(_,R,z,K,null);Na(_,z)}return null}function J(_,R,z,K,ae){if(typeof K=="string"&&K!==""||typeof K=="number")return _=_.get(z)||null,w(R,_,""+K,ae);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return _=_.get(K.key===null?z:K.key)||null,P(R,_,K,ae);case M:return _=_.get(K.key===null?z:K.key)||null,N(R,_,K,ae);case be:var ce=K._init;return J(_,R,z,ce(K._payload),ae)}if(An(K)||re(K))return _=_.get(z)||null,V(R,_,K,ae,null);Na(R,K)}return null}function ne(_,R,z,K){for(var ae=null,ce=null,fe=R,me=R=0,pt=null;fe!==null&&me<z.length;me++){fe.index>me?(pt=fe,fe=null):pt=fe.sibling;var Ee=H(_,fe,z[me],K);if(Ee===null){fe===null&&(fe=pt);break}e&&fe&&Ee.alternate===null&&n(_,fe),R=p(Ee,R,me),ce===null?ae=Ee:ce.sibling=Ee,ce=Ee,fe=pt}if(me===z.length)return a(_,fe),Fe&&_r(_,me),ae;if(fe===null){for(;me<z.length;me++)fe=W(_,z[me],K),fe!==null&&(R=p(fe,R,me),ce===null?ae=fe:ce.sibling=fe,ce=fe);return Fe&&_r(_,me),ae}for(fe=u(_,fe);me<z.length;me++)pt=J(fe,_,me,z[me],K),pt!==null&&(e&&pt.alternate!==null&&fe.delete(pt.key===null?me:pt.key),R=p(pt,R,me),ce===null?ae=pt:ce.sibling=pt,ce=pt);return e&&fe.forEach(function(pr){return n(_,pr)}),Fe&&_r(_,me),ae}function oe(_,R,z,K){var ae=re(z);if(typeof ae!="function")throw Error(o(150));if(z=ae.call(z),z==null)throw Error(o(151));for(var ce=ae=null,fe=R,me=R=0,pt=null,Ee=z.next();fe!==null&&!Ee.done;me++,Ee=z.next()){fe.index>me?(pt=fe,fe=null):pt=fe.sibling;var pr=H(_,fe,Ee.value,K);if(pr===null){fe===null&&(fe=pt);break}e&&fe&&pr.alternate===null&&n(_,fe),R=p(pr,R,me),ce===null?ae=pr:ce.sibling=pr,ce=pr,fe=pt}if(Ee.done)return a(_,fe),Fe&&_r(_,me),ae;if(fe===null){for(;!Ee.done;me++,Ee=z.next())Ee=W(_,Ee.value,K),Ee!==null&&(R=p(Ee,R,me),ce===null?ae=Ee:ce.sibling=Ee,ce=Ee);return Fe&&_r(_,me),ae}for(fe=u(_,fe);!Ee.done;me++,Ee=z.next())Ee=J(fe,_,me,Ee.value,K),Ee!==null&&(e&&Ee.alternate!==null&&fe.delete(Ee.key===null?me:Ee.key),R=p(Ee,R,me),ce===null?ae=Ee:ce.sibling=Ee,ce=Ee);return e&&fe.forEach(function(Ev){return n(_,Ev)}),Fe&&_r(_,me),ae}function Ze(_,R,z,K){if(typeof z=="object"&&z!==null&&z.type===F&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case E:e:{for(var ae=z.key,ce=R;ce!==null;){if(ce.key===ae){if(ae=z.type,ae===F){if(ce.tag===7){a(_,ce.sibling),R=f(ce,z.props.children),R.return=_,_=R;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===be&&Wd(ae)===ce.type){a(_,ce.sibling),R=f(ce,z.props),R.ref=fi(_,ce,z),R.return=_,_=R;break e}a(_,ce);break}else n(_,ce);ce=ce.sibling}z.type===F?(R=Lr(z.props.children,_.mode,K,z.key),R.return=_,_=R):(K=rs(z.type,z.key,z.props,null,_.mode,K),K.ref=fi(_,R,z),K.return=_,_=K)}return g(_);case M:e:{for(ce=z.key;R!==null;){if(R.key===ce)if(R.tag===4&&R.stateNode.containerInfo===z.containerInfo&&R.stateNode.implementation===z.implementation){a(_,R.sibling),R=f(R,z.children||[]),R.return=_,_=R;break e}else{a(_,R);break}else n(_,R);R=R.sibling}R=Ku(z,_.mode,K),R.return=_,_=R}return g(_);case be:return ce=z._init,Ze(_,R,ce(z._payload),K)}if(An(z))return ne(_,R,z,K);if(re(z))return oe(_,R,z,K);Na(_,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,R!==null&&R.tag===6?(a(_,R.sibling),R=f(R,z),R.return=_,_=R):(a(_,R),R=Gu(z,_.mode,K),R.return=_,_=R),g(_)):a(_,R)}return Ze}var co=Gd(!0),Kd=Gd(!1),Ma=nr(null),$a=null,fo=null,ru=null;function ou(){ru=fo=$a=null}function iu(e){var n=Ma.current;Be(Ma),e._currentValue=n}function au(e,n,a){for(;e!==null;){var u=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,u!==null&&(u.childLanes|=n)):u!==null&&(u.childLanes&n)!==n&&(u.childLanes|=n),e===a)break;e=e.return}}function po(e,n){$a=e,ru=fo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(At=!0),e.firstContext=null)}function Xt(e){var n=e._currentValue;if(ru!==e)if(e={context:e,memoizedValue:n,next:null},fo===null){if($a===null)throw Error(o(308));fo=e,$a.dependencies={lanes:0,firstContext:e}}else fo=fo.next=e;return n}var Ar=null;function su(e){Ar===null?Ar=[e]:Ar.push(e)}function Yd(e,n,a,u){var f=n.interleaved;return f===null?(a.next=a,su(n)):(a.next=f.next,f.next=a),n.interleaved=a,Dn(e,u)}function Dn(e,n){e.lanes|=n;var a=e.alternate;for(a!==null&&(a.lanes|=n),a=e,e=e.return;e!==null;)e.childLanes|=n,a=e.alternate,a!==null&&(a.childLanes|=n),a=e,e=e.return;return a.tag===3?a.stateNode:null}var ir=!1;function lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ar(e,n,a){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,Pe&2){var f=u.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),u.pending=n,Dn(e,a)}return f=u.interleaved,f===null?(n.next=n,su(u)):(n.next=f.next,f.next=n),u.interleaved=n,Dn(e,a)}function Da(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var u=n.lanes;u&=e.pendingLanes,a|=u,n.lanes=a,wl(e,a)}}function Xd(e,n){var a=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=g:p=p.next=g,a=a.next}while(a!==null);p===null?f=p=n:p=p.next=n}else f=p=n;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}function ja(e,n,a,u){var f=e.updateQueue;ir=!1;var p=f.firstBaseUpdate,g=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var P=w,N=P.next;P.next=null,g===null?p=N:g.next=N,g=P;var V=e.alternate;V!==null&&(V=V.updateQueue,w=V.lastBaseUpdate,w!==g&&(w===null?V.firstBaseUpdate=N:w.next=N,V.lastBaseUpdate=P))}if(p!==null){var W=f.baseState;g=0,V=N=P=null,w=p;do{var H=w.lane,J=w.eventTime;if((u&H)===H){V!==null&&(V=V.next={eventTime:J,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var ne=e,oe=w;switch(H=n,J=a,oe.tag){case 1:if(ne=oe.payload,typeof ne=="function"){W=ne.call(J,W,H);break e}W=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=oe.payload,H=typeof ne=="function"?ne.call(J,W,H):ne,H==null)break e;W=X({},W,H);break e;case 2:ir=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,H=f.effects,H===null?f.effects=[w]:H.push(w))}else J={eventTime:J,lane:H,tag:w.tag,payload:w.payload,callback:w.callback,next:null},V===null?(N=V=J,P=W):V=V.next=J,g|=H;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;H=w,w=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);if(V===null&&(P=W),f.baseState=P,f.firstBaseUpdate=N,f.lastBaseUpdate=V,n=f.shared.interleaved,n!==null){f=n;do g|=f.lane,f=f.next;while(f!==n)}else p===null&&(f.shared.lanes=0);Mr|=g,e.lanes=g,e.memoizedState=W}}function Jd(e,n,a){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var u=e[n],f=u.callback;if(f!==null){if(u.callback=null,u=a,typeof f!="function")throw Error(o(191,f));f.call(u)}}}var di={},vn=nr(di),pi=nr(di),hi=nr(di);function zr(e){if(e===di)throw Error(o(174));return e}function uu(e,n){switch(je(hi,n),je(pi,e),je(vn,di),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Pr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Pr(n,e)}Be(vn),je(vn,n)}function ho(){Be(vn),Be(pi),Be(hi)}function Zd(e){zr(hi.current);var n=zr(vn.current),a=Pr(n,e.type);n!==a&&(je(pi,e),je(vn,a))}function cu(e){pi.current===e&&(Be(vn),Be(pi))}var We=nr(0);function La(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fu=[];function du(){for(var e=0;e<fu.length;e++)fu[e]._workInProgressVersionPrimary=null;fu.length=0}var Ia=A.ReactCurrentDispatcher,pu=A.ReactCurrentBatchConfig,Nr=0,Ge=null,it=null,ft=null,Ba=!1,mi=!1,gi=0,Ky=0;function vt(){throw Error(o(321))}function hu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!an(e[a],n[a]))return!1;return!0}function mu(e,n,a,u,f,p){if(Nr=p,Ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ia.current=e===null||e.memoizedState===null?Jy:Zy,e=a(u,f),mi){p=0;do{if(mi=!1,gi=0,25<=p)throw Error(o(301));p+=1,ft=it=null,n.updateQueue=null,Ia.current=ev,e=a(u,f)}while(mi)}if(Ia.current=qa,n=it!==null&&it.next!==null,Nr=0,ft=it=Ge=null,Ba=!1,n)throw Error(o(300));return e}function gu(){var e=gi!==0;return gi=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Ge.memoizedState=ft=e:ft=ft.next=e,ft}function Jt(){if(it===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=it.next;var n=ft===null?Ge.memoizedState:ft.next;if(n!==null)ft=n,it=e;else{if(e===null)throw Error(o(310));it=e,e={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ft===null?Ge.memoizedState=ft=e:ft=ft.next=e}return ft}function yi(e,n){return typeof n=="function"?n(e):n}function yu(e){var n=Jt(),a=n.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var u=it,f=u.baseQueue,p=a.pending;if(p!==null){if(f!==null){var g=f.next;f.next=p.next,p.next=g}u.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,u=u.baseState;var w=g=null,P=null,N=p;do{var V=N.lane;if((Nr&V)===V)P!==null&&(P=P.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),u=N.hasEagerState?N.eagerState:e(u,N.action);else{var W={lane:V,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};P===null?(w=P=W,g=u):P=P.next=W,Ge.lanes|=V,Mr|=V}N=N.next}while(N!==null&&N!==p);P===null?g=u:P.next=w,an(u,n.memoizedState)||(At=!0),n.memoizedState=u,n.baseState=g,n.baseQueue=P,a.lastRenderedState=u}if(e=a.interleaved,e!==null){f=e;do p=f.lane,Ge.lanes|=p,Mr|=p,f=f.next;while(f!==e)}else f===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function vu(e){var n=Jt(),a=n.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var u=a.dispatch,f=a.pending,p=n.memoizedState;if(f!==null){a.pending=null;var g=f=f.next;do p=e(p,g.action),g=g.next;while(g!==f);an(p,n.memoizedState)||(At=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),a.lastRenderedState=p}return[p,u]}function ep(){}function tp(e,n){var a=Ge,u=Jt(),f=n(),p=!an(u.memoizedState,f);if(p&&(u.memoizedState=f,At=!0),u=u.queue,bu(op.bind(null,a,u,e),[e]),u.getSnapshot!==n||p||ft!==null&&ft.memoizedState.tag&1){if(a.flags|=2048,vi(9,rp.bind(null,a,u,f,n),void 0,null),dt===null)throw Error(o(349));Nr&30||np(a,n,f)}return f}function np(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ge.updateQueue,n===null?(n={lastEffect:null,stores:null},Ge.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function rp(e,n,a,u){n.value=a,n.getSnapshot=u,ip(n)&&ap(e)}function op(e,n,a){return a(function(){ip(n)&&ap(e)})}function ip(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!an(e,a)}catch{return!0}}function ap(e){var n=Dn(e,1);n!==null&&fn(n,e,1,-1)}function sp(e){var n=bn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e},n.queue=e,e=e.dispatch=Xy.bind(null,Ge,e),[n.memoizedState,e]}function vi(e,n,a,u){return e={tag:e,create:n,destroy:a,deps:u,next:null},n=Ge.updateQueue,n===null?(n={lastEffect:null,stores:null},Ge.updateQueue=n,n.lastEffect=e.next=e):(a=n.lastEffect,a===null?n.lastEffect=e.next=e:(u=a.next,a.next=e,e.next=u,n.lastEffect=e)),e}function lp(){return Jt().memoizedState}function Fa(e,n,a,u){var f=bn();Ge.flags|=e,f.memoizedState=vi(1|n,a,void 0,u===void 0?null:u)}function Ua(e,n,a,u){var f=Jt();u=u===void 0?null:u;var p=void 0;if(it!==null){var g=it.memoizedState;if(p=g.destroy,u!==null&&hu(u,g.deps)){f.memoizedState=vi(n,a,p,u);return}}Ge.flags|=e,f.memoizedState=vi(1|n,a,p,u)}function up(e,n){return Fa(8390656,8,e,n)}function bu(e,n){return Ua(2048,8,e,n)}function cp(e,n){return Ua(4,2,e,n)}function fp(e,n){return Ua(4,4,e,n)}function dp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function pp(e,n,a){return a=a!=null?a.concat([e]):null,Ua(4,4,dp.bind(null,n,e),a)}function xu(){}function hp(e,n){var a=Jt();n=n===void 0?null:n;var u=a.memoizedState;return u!==null&&n!==null&&hu(n,u[1])?u[0]:(a.memoizedState=[e,n],e)}function mp(e,n){var a=Jt();n=n===void 0?null:n;var u=a.memoizedState;return u!==null&&n!==null&&hu(n,u[1])?u[0]:(e=e(),a.memoizedState=[e,n],e)}function gp(e,n,a){return Nr&21?(an(a,n)||(a=Wf(),Ge.lanes|=a,Mr|=a,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=a)}function Yy(e,n){var a=Ne;Ne=a!==0&&4>a?a:4,e(!0);var u=pu.transition;pu.transition={};try{e(!1),n()}finally{Ne=a,pu.transition=u}}function yp(){return Jt().memoizedState}function Qy(e,n,a){var u=cr(e);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},vp(e))bp(n,a);else if(a=Yd(e,n,a,u),a!==null){var f=Pt();fn(a,e,u,f),xp(a,n,u)}}function Xy(e,n,a){var u=cr(e),f={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(vp(e))bp(n,f);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var g=n.lastRenderedState,w=p(g,a);if(f.hasEagerState=!0,f.eagerState=w,an(w,g)){var P=n.interleaved;P===null?(f.next=f,su(n)):(f.next=P.next,P.next=f),n.interleaved=f;return}}catch{}finally{}a=Yd(e,n,f,u),a!==null&&(f=Pt(),fn(a,e,u,f),xp(a,n,u))}}function vp(e){var n=e.alternate;return e===Ge||n!==null&&n===Ge}function bp(e,n){mi=Ba=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function xp(e,n,a){if(a&4194240){var u=n.lanes;u&=e.pendingLanes,a|=u,n.lanes=a,wl(e,a)}}var qa={readContext:Xt,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},Jy={readContext:Xt,useCallback:function(e,n){return bn().memoizedState=[e,n===void 0?null:n],e},useContext:Xt,useEffect:up,useImperativeHandle:function(e,n,a){return a=a!=null?a.concat([e]):null,Fa(4194308,4,dp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Fa(4194308,4,e,n)},useInsertionEffect:function(e,n){return Fa(4,2,e,n)},useMemo:function(e,n){var a=bn();return n=n===void 0?null:n,e=e(),a.memoizedState=[e,n],e},useReducer:function(e,n,a){var u=bn();return n=a!==void 0?a(n):n,u.memoizedState=u.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},u.queue=e,e=e.dispatch=Qy.bind(null,Ge,e),[u.memoizedState,e]},useRef:function(e){var n=bn();return e={current:e},n.memoizedState=e},useState:sp,useDebugValue:xu,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=sp(!1),n=e[0];return e=Yy.bind(null,e[1]),bn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,a){var u=Ge,f=bn();if(Fe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=n(),dt===null)throw Error(o(349));Nr&30||np(u,n,a)}f.memoizedState=a;var p={value:a,getSnapshot:n};return f.queue=p,up(op.bind(null,u,p,e),[e]),u.flags|=2048,vi(9,rp.bind(null,u,p,a,n),void 0,null),a},useId:function(){var e=bn(),n=dt.identifierPrefix;if(Fe){var a=$n,u=Mn;a=(u&~(1<<32-on(u)-1)).toString(32)+a,n=":"+n+"R"+a,a=gi++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Ky++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Zy={readContext:Xt,useCallback:hp,useContext:Xt,useEffect:bu,useImperativeHandle:pp,useInsertionEffect:cp,useLayoutEffect:fp,useMemo:mp,useReducer:yu,useRef:lp,useState:function(){return yu(yi)},useDebugValue:xu,useDeferredValue:function(e){var n=Jt();return gp(n,it.memoizedState,e)},useTransition:function(){var e=yu(yi)[0],n=Jt().memoizedState;return[e,n]},useMutableSource:ep,useSyncExternalStore:tp,useId:yp,unstable_isNewReconciler:!1},ev={readContext:Xt,useCallback:hp,useContext:Xt,useEffect:bu,useImperativeHandle:pp,useInsertionEffect:cp,useLayoutEffect:fp,useMemo:mp,useReducer:vu,useRef:lp,useState:function(){return vu(yi)},useDebugValue:xu,useDeferredValue:function(e){var n=Jt();return it===null?n.memoizedState=e:gp(n,it.memoizedState,e)},useTransition:function(){var e=vu(yi)[0],n=Jt().memoizedState;return[e,n]},useMutableSource:ep,useSyncExternalStore:tp,useId:yp,unstable_isNewReconciler:!1};function ln(e,n){if(e&&e.defaultProps){n=X({},n),e=e.defaultProps;for(var a in e)n[a]===void 0&&(n[a]=e[a]);return n}return n}function Su(e,n,a,u){n=e.memoizedState,a=a(u,n),a=a==null?n:X({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ha={isMounted:function(e){return(e=e._reactInternals)?Er(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var u=Pt(),f=cr(e),p=jn(u,f);p.payload=n,a!=null&&(p.callback=a),n=ar(e,p,f),n!==null&&(fn(n,e,f,u),Da(n,e,f))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var u=Pt(),f=cr(e),p=jn(u,f);p.tag=1,p.payload=n,a!=null&&(p.callback=a),n=ar(e,p,f),n!==null&&(fn(n,e,f,u),Da(n,e,f))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Pt(),u=cr(e),f=jn(a,u);f.tag=2,n!=null&&(f.callback=n),n=ar(e,f,u),n!==null&&(fn(n,e,u,a),Da(n,e,u))}};function Sp(e,n,a,u,f,p,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,p,g):n.prototype&&n.prototype.isPureReactComponent?!oi(a,u)||!oi(f,p):!0}function wp(e,n,a){var u=!1,f=rr,p=n.contextType;return typeof p=="object"&&p!==null?p=Xt(p):(f=_t(n)?Or:yt.current,u=n.contextTypes,p=(u=u!=null)?ao(e,f):rr),n=new n(a,p),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ha,e.stateNode=n,n._reactInternals=e,u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=f,e.__reactInternalMemoizedMaskedChildContext=p),n}function kp(e,n,a,u){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,u),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,u),n.state!==e&&Ha.enqueueReplaceState(n,n.state,null)}function wu(e,n,a,u){var f=e.stateNode;f.props=a,f.state=e.memoizedState,f.refs={},lu(e);var p=n.contextType;typeof p=="object"&&p!==null?f.context=Xt(p):(p=_t(n)?Or:yt.current,f.context=ao(e,p)),f.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Su(e,n,p,a),f.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(n=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),n!==f.state&&Ha.enqueueReplaceState(f,f.state,null),ja(e,a,f,u),f.state=e.memoizedState),typeof f.componentDidMount=="function"&&(e.flags|=4194308)}function mo(e,n){try{var a="",u=n;do a+=Se(u),u=u.return;while(u);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:n,stack:f,digest:null}}function ku(e,n,a){return{value:e,source:null,stack:a??null,digest:n??null}}function Cu(e,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var tv=typeof WeakMap=="function"?WeakMap:Map;function Cp(e,n,a){a=jn(-1,a),a.tag=3,a.payload={element:null};var u=n.value;return a.callback=function(){Xa||(Xa=!0,Iu=u),Cu(e,n)},a}function Pp(e,n,a){a=jn(-1,a),a.tag=3;var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var f=n.value;a.payload=function(){return u(f)},a.callback=function(){Cu(e,n)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Cu(e,n),typeof u!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})}),a}function Ep(e,n,a){var u=e.pingCache;if(u===null){u=e.pingCache=new tv;var f=new Set;u.set(n,f)}else f=u.get(n),f===void 0&&(f=new Set,u.set(n,f));f.has(a)||(f.add(a),e=mv.bind(null,e,n,a),n.then(e,e))}function Rp(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Op(e,n,a,u,f){return e.mode&1?(e.flags|=65536,e.lanes=f,e):(e===n?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=jn(-1,1),n.tag=2,ar(a,n,1))),a.lanes|=1),e)}var nv=A.ReactCurrentOwner,At=!1;function Ct(e,n,a,u){n.child=e===null?Kd(n,null,a,u):co(n,e.child,a,u)}function Tp(e,n,a,u,f){a=a.render;var p=n.ref;return po(n,f),u=mu(e,n,a,u,p,f),a=gu(),e!==null&&!At?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~f,Ln(e,n,f)):(Fe&&a&&Jl(n),n.flags|=1,Ct(e,n,u,f),n.child)}function _p(e,n,a,u,f){if(e===null){var p=a.type;return typeof p=="function"&&!Wu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=p,Ap(e,n,p,u,f)):(e=rs(a.type,null,u,n,n.mode,f),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,!(e.lanes&f)){var g=p.memoizedProps;if(a=a.compare,a=a!==null?a:oi,a(g,u)&&e.ref===n.ref)return Ln(e,n,f)}return n.flags|=1,e=dr(p,u),e.ref=n.ref,e.return=n,n.child=e}function Ap(e,n,a,u,f){if(e!==null){var p=e.memoizedProps;if(oi(p,u)&&e.ref===n.ref)if(At=!1,n.pendingProps=u=p,(e.lanes&f)!==0)e.flags&131072&&(At=!0);else return n.lanes=e.lanes,Ln(e,n,f)}return Pu(e,n,a,u,f)}function zp(e,n,a){var u=n.pendingProps,f=u.children,p=e!==null?e.memoizedState:null;if(u.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(yo,Ut),Ut|=a;else{if(!(a&1073741824))return e=p!==null?p.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,je(yo,Ut),Ut|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,je(yo,Ut),Ut|=u}else p!==null?(u=p.baseLanes|a,n.memoizedState=null):u=a,je(yo,Ut),Ut|=u;return Ct(e,n,f,a),n.child}function Np(e,n){var a=n.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function Pu(e,n,a,u,f){var p=_t(a)?Or:yt.current;return p=ao(n,p),po(n,f),a=mu(e,n,a,u,p,f),u=gu(),e!==null&&!At?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~f,Ln(e,n,f)):(Fe&&u&&Jl(n),n.flags|=1,Ct(e,n,a,f),n.child)}function Mp(e,n,a,u,f){if(_t(a)){var p=!0;Oa(n)}else p=!1;if(po(n,f),n.stateNode===null)Wa(e,n),wp(n,a,u),wu(n,a,u,f),u=!0;else if(e===null){var g=n.stateNode,w=n.memoizedProps;g.props=w;var P=g.context,N=a.contextType;typeof N=="object"&&N!==null?N=Xt(N):(N=_t(a)?Or:yt.current,N=ao(n,N));var V=a.getDerivedStateFromProps,W=typeof V=="function"||typeof g.getSnapshotBeforeUpdate=="function";W||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==u||P!==N)&&kp(n,g,u,N),ir=!1;var H=n.memoizedState;g.state=H,ja(n,u,g,f),P=n.memoizedState,w!==u||H!==P||Tt.current||ir?(typeof V=="function"&&(Su(n,a,V,u),P=n.memoizedState),(w=ir||Sp(n,a,w,u,H,P,N))?(W||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=u,n.memoizedState=P),g.props=u,g.state=P,g.context=N,u=w):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),u=!1)}else{g=n.stateNode,Qd(e,n),w=n.memoizedProps,N=n.type===n.elementType?w:ln(n.type,w),g.props=N,W=n.pendingProps,H=g.context,P=a.contextType,typeof P=="object"&&P!==null?P=Xt(P):(P=_t(a)?Or:yt.current,P=ao(n,P));var J=a.getDerivedStateFromProps;(V=typeof J=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==W||H!==P)&&kp(n,g,u,P),ir=!1,H=n.memoizedState,g.state=H,ja(n,u,g,f);var ne=n.memoizedState;w!==W||H!==ne||Tt.current||ir?(typeof J=="function"&&(Su(n,a,J,u),ne=n.memoizedState),(N=ir||Sp(n,a,N,u,H,ne,P)||!1)?(V||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,ne,P),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,ne,P)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===e.memoizedProps&&H===e.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&H===e.memoizedState||(n.flags|=1024),n.memoizedProps=u,n.memoizedState=ne),g.props=u,g.state=ne,g.context=P,u=N):(typeof g.componentDidUpdate!="function"||w===e.memoizedProps&&H===e.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&H===e.memoizedState||(n.flags|=1024),u=!1)}return Eu(e,n,a,u,p,f)}function Eu(e,n,a,u,f,p){Np(e,n);var g=(n.flags&128)!==0;if(!u&&!g)return f&&Id(n,a,!1),Ln(e,n,p);u=n.stateNode,nv.current=n;var w=g&&typeof a.getDerivedStateFromError!="function"?null:u.render();return n.flags|=1,e!==null&&g?(n.child=co(n,e.child,null,p),n.child=co(n,null,w,p)):Ct(e,n,w,p),n.memoizedState=u.state,f&&Id(n,a,!0),n.child}function $p(e){var n=e.stateNode;n.pendingContext?jd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&jd(e,n.context,!1),uu(e,n.containerInfo)}function Dp(e,n,a,u,f){return uo(),nu(f),n.flags|=256,Ct(e,n,a,u),n.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Ou(e){return{baseLanes:e,cachePool:null,transitions:null}}function jp(e,n,a){var u=n.pendingProps,f=We.current,p=!1,g=(n.flags&128)!==0,w;if((w=g)||(w=e!==null&&e.memoizedState===null?!1:(f&2)!==0),w?(p=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(f|=1),je(We,f&1),e===null)return tu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(g=u.children,e=u.fallback,p?(u=n.mode,p=n.child,g={mode:"hidden",children:g},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=g):p=os(g,u,0,null),e=Lr(e,u,a,null),p.return=n,e.return=n,p.sibling=e,n.child=p,n.child.memoizedState=Ou(a),n.memoizedState=Ru,e):Tu(n,g));if(f=e.memoizedState,f!==null&&(w=f.dehydrated,w!==null))return rv(e,n,g,u,w,f,a);if(p){p=u.fallback,g=n.mode,f=e.child,w=f.sibling;var P={mode:"hidden",children:u.children};return!(g&1)&&n.child!==f?(u=n.child,u.childLanes=0,u.pendingProps=P,n.deletions=null):(u=dr(f,P),u.subtreeFlags=f.subtreeFlags&14680064),w!==null?p=dr(w,p):(p=Lr(p,g,a,null),p.flags|=2),p.return=n,u.return=n,u.sibling=p,n.child=u,u=p,p=n.child,g=e.child.memoizedState,g=g===null?Ou(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},p.memoizedState=g,p.childLanes=e.childLanes&~a,n.memoizedState=Ru,u}return p=e.child,e=p.sibling,u=dr(p,{mode:"visible",children:u.children}),!(n.mode&1)&&(u.lanes=a),u.return=n,u.sibling=null,e!==null&&(a=n.deletions,a===null?(n.deletions=[e],n.flags|=16):a.push(e)),n.child=u,n.memoizedState=null,u}function Tu(e,n){return n=os({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Va(e,n,a,u){return u!==null&&nu(u),co(n,e.child,null,a),e=Tu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rv(e,n,a,u,f,p,g){if(a)return n.flags&256?(n.flags&=-257,u=ku(Error(o(422))),Va(e,n,g,u)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(p=u.fallback,f=n.mode,u=os({mode:"visible",children:u.children},f,0,null),p=Lr(p,f,g,null),p.flags|=2,u.return=n,p.return=n,u.sibling=p,n.child=u,n.mode&1&&co(n,e.child,null,g),n.child.memoizedState=Ou(g),n.memoizedState=Ru,p);if(!(n.mode&1))return Va(e,n,g,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var w=u.dgst;return u=w,p=Error(o(419)),u=ku(p,u,void 0),Va(e,n,g,u)}if(w=(g&e.childLanes)!==0,At||w){if(u=dt,u!==null){switch(g&-g){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(u.suspendedLanes|g)?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Dn(e,f),fn(u,e,f,-1))}return Vu(),u=ku(Error(o(421))),Va(e,n,g,u)}return f.data==="$?"?(n.flags|=128,n.child=e.child,n=gv.bind(null,e),f._reactRetry=n,null):(e=p.treeContext,Ft=tr(f.nextSibling),Bt=n,Fe=!0,sn=null,e!==null&&(Yt[Qt++]=Mn,Yt[Qt++]=$n,Yt[Qt++]=Tr,Mn=e.id,$n=e.overflow,Tr=n),n=Tu(n,u.children),n.flags|=4096,n)}function Lp(e,n,a){e.lanes|=n;var u=e.alternate;u!==null&&(u.lanes|=n),au(e.return,n,a)}function _u(e,n,a,u,f){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=f)}function Ip(e,n,a){var u=n.pendingProps,f=u.revealOrder,p=u.tail;if(Ct(e,n,u.children,a),u=We.current,u&2)u=u&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lp(e,a,n);else if(e.tag===19)Lp(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}if(je(We,u),!(n.mode&1))n.memoizedState=null;else switch(f){case"forwards":for(a=n.child,f=null;a!==null;)e=a.alternate,e!==null&&La(e)===null&&(f=a),a=a.sibling;a=f,a===null?(f=n.child,n.child=null):(f=a.sibling,a.sibling=null),_u(n,!1,f,a,p);break;case"backwards":for(a=null,f=n.child,n.child=null;f!==null;){if(e=f.alternate,e!==null&&La(e)===null){n.child=f;break}e=f.sibling,f.sibling=a,a=f,f=e}_u(n,!0,a,null,p);break;case"together":_u(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wa(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ln(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Mr|=n.lanes,!(a&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,a=dr(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=dr(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ov(e,n,a){switch(n.tag){case 3:$p(n),uo();break;case 5:Zd(n);break;case 1:_t(n.type)&&Oa(n);break;case 4:uu(n,n.stateNode.containerInfo);break;case 10:var u=n.type._context,f=n.memoizedProps.value;je(Ma,u._currentValue),u._currentValue=f;break;case 13:if(u=n.memoizedState,u!==null)return u.dehydrated!==null?(je(We,We.current&1),n.flags|=128,null):a&n.child.childLanes?jp(e,n,a):(je(We,We.current&1),e=Ln(e,n,a),e!==null?e.sibling:null);je(We,We.current&1);break;case 19:if(u=(a&n.childLanes)!==0,e.flags&128){if(u)return Ip(e,n,a);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),je(We,We.current),u)break;return null;case 22:case 23:return n.lanes=0,zp(e,n,a)}return Ln(e,n,a)}var Bp,Au,Fp,Up;Bp=function(e,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Au=function(){},Fp=function(e,n,a,u){var f=e.memoizedProps;if(f!==u){e=n.stateNode,zr(vn.current);var p=null;switch(a){case"input":f=_n(e,f),u=_n(e,u),p=[];break;case"select":f=X({},f,{value:void 0}),u=X({},u,{value:void 0}),p=[];break;case"textarea":f=Vn(e,f),u=Vn(e,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(e.onclick=Pa)}fl(a,u);var g;a=null;for(N in f)if(!u.hasOwnProperty(N)&&f.hasOwnProperty(N)&&f[N]!=null)if(N==="style"){var w=f[N];for(g in w)w.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(s.hasOwnProperty(N)?p||(p=[]):(p=p||[]).push(N,null));for(N in u){var P=u[N];if(w=f!=null?f[N]:void 0,u.hasOwnProperty(N)&&P!==w&&(P!=null||w!=null))if(N==="style")if(w){for(g in w)!w.hasOwnProperty(g)||P&&P.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in P)P.hasOwnProperty(g)&&w[g]!==P[g]&&(a||(a={}),a[g]=P[g])}else a||(p||(p=[]),p.push(N,a)),a=P;else N==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,w=w?w.__html:void 0,P!=null&&w!==P&&(p=p||[]).push(N,P)):N==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(N,""+P):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(s.hasOwnProperty(N)?(P!=null&&N==="onScroll"&&Ie("scroll",e),p||w===P||(p=[])):(p=p||[]).push(N,P))}a&&(p=p||[]).push("style",a);var N=p;(n.updateQueue=N)&&(n.flags|=4)}},Up=function(e,n,a,u){a!==u&&(n.flags|=4)};function bi(e,n){if(!Fe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function bt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,u=0;if(n)for(var f=e.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=u,e.childLanes=a,n}function iv(e,n,a){var u=n.pendingProps;switch(Zl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(n),null;case 1:return _t(n.type)&&Ra(),bt(n),null;case 3:return u=n.stateNode,ho(),Be(Tt),Be(yt),du(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(e===null||e.child===null)&&(za(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,sn!==null&&(Uu(sn),sn=null))),Au(e,n),bt(n),null;case 5:cu(n);var f=zr(hi.current);if(a=n.type,e!==null&&n.stateNode!=null)Fp(e,n,a,u,f),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!u){if(n.stateNode===null)throw Error(o(166));return bt(n),null}if(e=zr(vn.current),za(n)){u=n.stateNode,a=n.type;var p=n.memoizedProps;switch(u[yn]=n,u[ui]=p,e=(n.mode&1)!==0,a){case"dialog":Ie("cancel",u),Ie("close",u);break;case"iframe":case"object":case"embed":Ie("load",u);break;case"video":case"audio":for(f=0;f<ai.length;f++)Ie(ai[f],u);break;case"source":Ie("error",u);break;case"img":case"image":case"link":Ie("error",u),Ie("load",u);break;case"details":Ie("toggle",u);break;case"input":ct(u,p),Ie("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Ie("invalid",u);break;case"textarea":he(u,p),Ie("invalid",u)}fl(a,p),f=null;for(var g in p)if(p.hasOwnProperty(g)){var w=p[g];g==="children"?typeof w=="string"?u.textContent!==w&&(p.suppressHydrationWarning!==!0&&Ca(u.textContent,w,e),f=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&Ca(u.textContent,w,e),f=["children",""+w]):s.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&Ie("scroll",u)}switch(a){case"input":On(u),tt(u,p,!0);break;case"textarea":On(u),Cr(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Pa)}u=f,n.updateQueue=u,u!==null&&(n.flags|=4)}else{g=f.nodeType===9?f:f.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gn(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof u.is=="string"?e=g.createElement(a,{is:u.is}):(e=g.createElement(a),a==="select"&&(g=e,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):e=g.createElementNS(e,a),e[yn]=n,e[ui]=u,Bp(e,n,!1,!1),n.stateNode=e;e:{switch(g=dl(a,u),a){case"dialog":Ie("cancel",e),Ie("close",e),f=u;break;case"iframe":case"object":case"embed":Ie("load",e),f=u;break;case"video":case"audio":for(f=0;f<ai.length;f++)Ie(ai[f],e);f=u;break;case"source":Ie("error",e),f=u;break;case"img":case"image":case"link":Ie("error",e),Ie("load",e),f=u;break;case"details":Ie("toggle",e),f=u;break;case"input":ct(e,u),f=_n(e,u),Ie("invalid",e);break;case"option":f=u;break;case"select":e._wrapperState={wasMultiple:!!u.multiple},f=X({},u,{value:void 0}),Ie("invalid",e);break;case"textarea":he(e,u),f=Vn(e,u),Ie("invalid",e);break;default:f=u}fl(a,f),w=f;for(p in w)if(w.hasOwnProperty(p)){var P=w[p];p==="style"?Af(e,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Ve(e,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&mn(e,P):typeof P=="number"&&mn(e,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(s.hasOwnProperty(p)?P!=null&&p==="onScroll"&&Ie("scroll",e):P!=null&&D(e,p,P,g))}switch(a){case"input":On(e),tt(e,u,!1);break;case"textarea":On(e),Cr(e);break;case"option":u.value!=null&&e.setAttribute("value",""+Ce(u.value));break;case"select":e.multiple=!!u.multiple,p=u.value,p!=null?Kt(e,!!u.multiple,p,!1):u.defaultValue!=null&&Kt(e,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(e.onclick=Pa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return bt(n),null;case 6:if(e&&n.stateNode!=null)Up(e,n,e.memoizedProps,u);else{if(typeof u!="string"&&n.stateNode===null)throw Error(o(166));if(a=zr(hi.current),zr(vn.current),za(n)){if(u=n.stateNode,a=n.memoizedProps,u[yn]=n,(p=u.nodeValue!==a)&&(e=Bt,e!==null))switch(e.tag){case 3:Ca(u.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ca(u.nodeValue,a,(e.mode&1)!==0)}p&&(n.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[yn]=n,n.stateNode=u}return bt(n),null;case 13:if(Be(We),u=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&Ft!==null&&n.mode&1&&!(n.flags&128))Vd(),uo(),n.flags|=98560,p=!1;else if(p=za(n),u!==null&&u.dehydrated!==null){if(e===null){if(!p)throw Error(o(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(o(317));p[yn]=n}else uo(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;bt(n),p=!1}else sn!==null&&(Uu(sn),sn=null),p=!0;if(!p)return n.flags&65536?n:null}return n.flags&128?(n.lanes=a,n):(u=u!==null,u!==(e!==null&&e.memoizedState!==null)&&u&&(n.child.flags|=8192,n.mode&1&&(e===null||We.current&1?at===0&&(at=3):Vu())),n.updateQueue!==null&&(n.flags|=4),bt(n),null);case 4:return ho(),Au(e,n),e===null&&si(n.stateNode.containerInfo),bt(n),null;case 10:return iu(n.type._context),bt(n),null;case 17:return _t(n.type)&&Ra(),bt(n),null;case 19:if(Be(We),p=n.memoizedState,p===null)return bt(n),null;if(u=(n.flags&128)!==0,g=p.rendering,g===null)if(u)bi(p,!1);else{if(at!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(g=La(e),g!==null){for(n.flags|=128,bi(p,!1),u=g.updateQueue,u!==null&&(n.updateQueue=u,n.flags|=4),n.subtreeFlags=0,u=a,a=n.child;a!==null;)p=a,e=u,p.flags&=14680066,g=p.alternate,g===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=g.childLanes,p.lanes=g.lanes,p.child=g.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=g.memoizedProps,p.memoizedState=g.memoizedState,p.updateQueue=g.updateQueue,p.type=g.type,e=g.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return je(We,We.current&1|2),n.child}e=e.sibling}p.tail!==null&&Je()>vo&&(n.flags|=128,u=!0,bi(p,!1),n.lanes=4194304)}else{if(!u)if(e=La(g),e!==null){if(n.flags|=128,u=!0,a=e.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),bi(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Fe)return bt(n),null}else 2*Je()-p.renderingStartTime>vo&&a!==1073741824&&(n.flags|=128,u=!0,bi(p,!1),n.lanes=4194304);p.isBackwards?(g.sibling=n.child,n.child=g):(a=p.last,a!==null?a.sibling=g:n.child=g,p.last=g)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=Je(),n.sibling=null,a=We.current,je(We,u?a&1|2:a&1),n):(bt(n),null);case 22:case 23:return Hu(),u=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==u&&(n.flags|=8192),u&&n.mode&1?Ut&1073741824&&(bt(n),n.subtreeFlags&6&&(n.flags|=8192)):bt(n),null;case 24:return null;case 25:return null}throw Error(o(156,n.tag))}function av(e,n){switch(Zl(n),n.tag){case 1:return _t(n.type)&&Ra(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ho(),Be(Tt),Be(yt),du(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return cu(n),null;case 13:if(Be(We),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));uo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Be(We),null;case 4:return ho(),null;case 10:return iu(n.type._context),null;case 22:case 23:return Hu(),null;case 24:return null;default:return null}}var Ga=!1,xt=!1,sv=typeof WeakSet=="function"?WeakSet:Set,Z=null;function go(e,n){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Ye(e,n,u)}else a.current=null}function zu(e,n,a){try{a()}catch(u){Ye(e,n,u)}}var qp=!1;function lv(e,n){if(Hl=pa,e=Sd(),Dl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var g=0,w=-1,P=-1,N=0,V=0,W=e,H=null;t:for(;;){for(var J;W!==a||f!==0&&W.nodeType!==3||(w=g+f),W!==p||u!==0&&W.nodeType!==3||(P=g+u),W.nodeType===3&&(g+=W.nodeValue.length),(J=W.firstChild)!==null;)H=W,W=J;for(;;){if(W===e)break t;if(H===a&&++N===f&&(w=g),H===p&&++V===u&&(P=g),(J=W.nextSibling)!==null)break;W=H,H=W.parentNode}W=J}a=w===-1||P===-1?null:{start:w,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vl={focusedElem:e,selectionRange:a},pa=!1,Z=n;Z!==null;)if(n=Z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Z=e;else for(;Z!==null;){n=Z;try{var ne=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var oe=ne.memoizedProps,Ze=ne.memoizedState,_=n.stateNode,R=_.getSnapshotBeforeUpdate(n.elementType===n.type?oe:ln(n.type,oe),Ze);_.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var z=n.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(K){Ye(n,n.return,K)}if(e=n.sibling,e!==null){e.return=n.return,Z=e;break}Z=n.return}return ne=qp,qp=!1,ne}function xi(e,n,a){var u=n.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&e)===e){var p=f.destroy;f.destroy=void 0,p!==void 0&&zu(n,a,p)}f=f.next}while(f!==u)}}function Ka(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var u=a.create;a.destroy=u()}a=a.next}while(a!==n)}}function Nu(e){var n=e.ref;if(n!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof n=="function"?n(e):n.current=e}}function Hp(e){var n=e.alternate;n!==null&&(e.alternate=null,Hp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[yn],delete n[ui],delete n[Yl],delete n[Hy],delete n[Vy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vp(e){return e.tag===5||e.tag===3||e.tag===4}function Wp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mu(e,n,a){var u=e.tag;if(u===5||u===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pa));else if(u!==4&&(e=e.child,e!==null))for(Mu(e,n,a),e=e.sibling;e!==null;)Mu(e,n,a),e=e.sibling}function $u(e,n,a){var u=e.tag;if(u===5||u===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(u!==4&&(e=e.child,e!==null))for($u(e,n,a),e=e.sibling;e!==null;)$u(e,n,a),e=e.sibling}var ht=null,un=!1;function sr(e,n,a){for(a=a.child;a!==null;)Gp(e,n,a),a=a.sibling}function Gp(e,n,a){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(sa,a)}catch{}switch(a.tag){case 5:xt||go(a,n);case 6:var u=ht,f=un;ht=null,sr(e,n,a),ht=u,un=f,ht!==null&&(un?(e=ht,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):ht.removeChild(a.stateNode));break;case 18:ht!==null&&(un?(e=ht,a=a.stateNode,e.nodeType===8?Kl(e.parentNode,a):e.nodeType===1&&Kl(e,a),Jo(e)):Kl(ht,a.stateNode));break;case 4:u=ht,f=un,ht=a.stateNode.containerInfo,un=!0,sr(e,n,a),ht=u,un=f;break;case 0:case 11:case 14:case 15:if(!xt&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,g=p.destroy;p=p.tag,g!==void 0&&(p&2||p&4)&&zu(a,n,g),f=f.next}while(f!==u)}sr(e,n,a);break;case 1:if(!xt&&(go(a,n),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(w){Ye(a,n,w)}sr(e,n,a);break;case 21:sr(e,n,a);break;case 22:a.mode&1?(xt=(u=xt)||a.memoizedState!==null,sr(e,n,a),xt=u):sr(e,n,a);break;default:sr(e,n,a)}}function Kp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new sv),n.forEach(function(u){var f=yv.bind(null,e,u);a.has(u)||(a.add(u),u.then(f,f))})}}function cn(e,n){var a=n.deletions;if(a!==null)for(var u=0;u<a.length;u++){var f=a[u];try{var p=e,g=n,w=g;e:for(;w!==null;){switch(w.tag){case 5:ht=w.stateNode,un=!1;break e;case 3:ht=w.stateNode.containerInfo,un=!0;break e;case 4:ht=w.stateNode.containerInfo,un=!0;break e}w=w.return}if(ht===null)throw Error(o(160));Gp(p,g,f),ht=null,un=!1;var P=f.alternate;P!==null&&(P.return=null),f.return=null}catch(N){Ye(f,n,N)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Yp(n,e),n=n.sibling}function Yp(e,n){var a=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(n,e),xn(e),u&4){try{xi(3,e,e.return),Ka(3,e)}catch(oe){Ye(e,e.return,oe)}try{xi(5,e,e.return)}catch(oe){Ye(e,e.return,oe)}}break;case 1:cn(n,e),xn(e),u&512&&a!==null&&go(a,a.return);break;case 5:if(cn(n,e),xn(e),u&512&&a!==null&&go(a,a.return),e.flags&32){var f=e.stateNode;try{mn(f,"")}catch(oe){Ye(e,e.return,oe)}}if(u&4&&(f=e.stateNode,f!=null)){var p=e.memoizedProps,g=a!==null?a.memoizedProps:p,w=e.type,P=e.updateQueue;if(e.updateQueue=null,P!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&wr(f,p),dl(w,g);var N=dl(w,p);for(g=0;g<P.length;g+=2){var V=P[g],W=P[g+1];V==="style"?Af(f,W):V==="dangerouslySetInnerHTML"?Ve(f,W):V==="children"?mn(f,W):D(f,V,W,N)}switch(w){case"input":kr(f,p);break;case"textarea":Wn(f,p);break;case"select":var H=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var J=p.value;J!=null?Kt(f,!!p.multiple,J,!1):H!==!!p.multiple&&(p.defaultValue!=null?Kt(f,!!p.multiple,p.defaultValue,!0):Kt(f,!!p.multiple,p.multiple?[]:"",!1))}f[ui]=p}catch(oe){Ye(e,e.return,oe)}}break;case 6:if(cn(n,e),xn(e),u&4){if(e.stateNode===null)throw Error(o(162));f=e.stateNode,p=e.memoizedProps;try{f.nodeValue=p}catch(oe){Ye(e,e.return,oe)}}break;case 3:if(cn(n,e),xn(e),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Jo(n.containerInfo)}catch(oe){Ye(e,e.return,oe)}break;case 4:cn(n,e),xn(e);break;case 13:cn(n,e),xn(e),f=e.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Lu=Je())),u&4&&Kp(e);break;case 22:if(V=a!==null&&a.memoizedState!==null,e.mode&1?(xt=(N=xt)||V,cn(n,e),xt=N):cn(n,e),xn(e),u&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!V&&e.mode&1)for(Z=e,V=e.child;V!==null;){for(W=Z=V;Z!==null;){switch(H=Z,J=H.child,H.tag){case 0:case 11:case 14:case 15:xi(4,H,H.return);break;case 1:go(H,H.return);var ne=H.stateNode;if(typeof ne.componentWillUnmount=="function"){u=H,a=H.return;try{n=u,ne.props=n.memoizedProps,ne.state=n.memoizedState,ne.componentWillUnmount()}catch(oe){Ye(u,a,oe)}}break;case 5:go(H,H.return);break;case 22:if(H.memoizedState!==null){Jp(W);continue}}J!==null?(J.return=H,Z=J):Jp(W)}V=V.sibling}e:for(V=null,W=e;;){if(W.tag===5){if(V===null){V=W;try{f=W.stateNode,N?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=W.stateNode,P=W.memoizedProps.style,g=P!=null&&P.hasOwnProperty("display")?P.display:null,w.style.display=ra("display",g))}catch(oe){Ye(e,e.return,oe)}}}else if(W.tag===6){if(V===null)try{W.stateNode.nodeValue=N?"":W.memoizedProps}catch(oe){Ye(e,e.return,oe)}}else if((W.tag!==22&&W.tag!==23||W.memoizedState===null||W===e)&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===e)break e;for(;W.sibling===null;){if(W.return===null||W.return===e)break e;V===W&&(V=null),W=W.return}V===W&&(V=null),W.sibling.return=W.return,W=W.sibling}}break;case 19:cn(n,e),xn(e),u&4&&Kp(e);break;case 21:break;default:cn(n,e),xn(e)}}function xn(e){var n=e.flags;if(n&2){try{e:{for(var a=e.return;a!==null;){if(Vp(a)){var u=a;break e}a=a.return}throw Error(o(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(mn(f,""),u.flags&=-33);var p=Wp(e);$u(e,p,f);break;case 3:case 4:var g=u.stateNode.containerInfo,w=Wp(e);Mu(e,w,g);break;default:throw Error(o(161))}}catch(P){Ye(e,e.return,P)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function uv(e,n,a){Z=e,Qp(e)}function Qp(e,n,a){for(var u=(e.mode&1)!==0;Z!==null;){var f=Z,p=f.child;if(f.tag===22&&u){var g=f.memoizedState!==null||Ga;if(!g){var w=f.alternate,P=w!==null&&w.memoizedState!==null||xt;w=Ga;var N=xt;if(Ga=g,(xt=P)&&!N)for(Z=f;Z!==null;)g=Z,P=g.child,g.tag===22&&g.memoizedState!==null?Zp(f):P!==null?(P.return=g,Z=P):Zp(f);for(;p!==null;)Z=p,Qp(p),p=p.sibling;Z=f,Ga=w,xt=N}Xp(e)}else f.subtreeFlags&8772&&p!==null?(p.return=f,Z=p):Xp(e)}}function Xp(e){for(;Z!==null;){var n=Z;if(n.flags&8772){var a=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:xt||Ka(5,n);break;case 1:var u=n.stateNode;if(n.flags&4&&!xt)if(a===null)u.componentDidMount();else{var f=n.elementType===n.type?a.memoizedProps:ln(n.type,a.memoizedProps);u.componentDidUpdate(f,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&Jd(n,p,u);break;case 3:var g=n.updateQueue;if(g!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}Jd(n,g,a)}break;case 5:var w=n.stateNode;if(a===null&&n.flags&4){a=w;var P=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var N=n.alternate;if(N!==null){var V=N.memoizedState;if(V!==null){var W=V.dehydrated;W!==null&&Jo(W)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}xt||n.flags&512&&Nu(n)}catch(H){Ye(n,n.return,H)}}if(n===e){Z=null;break}if(a=n.sibling,a!==null){a.return=n.return,Z=a;break}Z=n.return}}function Jp(e){for(;Z!==null;){var n=Z;if(n===e){Z=null;break}var a=n.sibling;if(a!==null){a.return=n.return,Z=a;break}Z=n.return}}function Zp(e){for(;Z!==null;){var n=Z;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{Ka(4,n)}catch(P){Ye(n,a,P)}break;case 1:var u=n.stateNode;if(typeof u.componentDidMount=="function"){var f=n.return;try{u.componentDidMount()}catch(P){Ye(n,f,P)}}var p=n.return;try{Nu(n)}catch(P){Ye(n,p,P)}break;case 5:var g=n.return;try{Nu(n)}catch(P){Ye(n,g,P)}}}catch(P){Ye(n,n.return,P)}if(n===e){Z=null;break}var w=n.sibling;if(w!==null){w.return=n.return,Z=w;break}Z=n.return}}var cv=Math.ceil,Ya=A.ReactCurrentDispatcher,Du=A.ReactCurrentOwner,Zt=A.ReactCurrentBatchConfig,Pe=0,dt=null,nt=null,mt=0,Ut=0,yo=nr(0),at=0,Si=null,Mr=0,Qa=0,ju=0,wi=null,zt=null,Lu=0,vo=1/0,In=null,Xa=!1,Iu=null,lr=null,Ja=!1,ur=null,Za=0,ki=0,Bu=null,es=-1,ts=0;function Pt(){return Pe&6?Je():es!==-1?es:es=Je()}function cr(e){return e.mode&1?Pe&2&&mt!==0?mt&-mt:Gy.transition!==null?(ts===0&&(ts=Wf()),ts):(e=Ne,e!==0||(e=window.event,e=e===void 0?16:td(e.type)),e):1}function fn(e,n,a,u){if(50<ki)throw ki=0,Bu=null,Error(o(185));Go(e,a,u),(!(Pe&2)||e!==dt)&&(e===dt&&(!(Pe&2)&&(Qa|=a),at===4&&fr(e,mt)),Nt(e,u),a===1&&Pe===0&&!(n.mode&1)&&(vo=Je()+500,Ta&&or()))}function Nt(e,n){var a=e.callbackNode;G0(e,n);var u=ca(e,e===dt?mt:0);if(u===0)a!==null&&qf(a),e.callbackNode=null,e.callbackPriority=0;else if(n=u&-u,e.callbackPriority!==n){if(a!=null&&qf(a),n===1)e.tag===0?Wy(th.bind(null,e)):Bd(th.bind(null,e)),Uy(function(){!(Pe&6)&&or()}),a=null;else{switch(Gf(u)){case 1:a=bl;break;case 4:a=Hf;break;case 16:a=aa;break;case 536870912:a=Vf;break;default:a=aa}a=uh(a,eh.bind(null,e))}e.callbackPriority=n,e.callbackNode=a}}function eh(e,n){if(es=-1,ts=0,Pe&6)throw Error(o(327));var a=e.callbackNode;if(bo()&&e.callbackNode!==a)return null;var u=ca(e,e===dt?mt:0);if(u===0)return null;if(u&30||u&e.expiredLanes||n)n=ns(e,u);else{n=u;var f=Pe;Pe|=2;var p=rh();(dt!==e||mt!==n)&&(In=null,vo=Je()+500,Dr(e,n));do try{pv();break}catch(w){nh(e,w)}while(!0);ou(),Ya.current=p,Pe=f,nt!==null?n=0:(dt=null,mt=0,n=at)}if(n!==0){if(n===2&&(f=xl(e),f!==0&&(u=f,n=Fu(e,f))),n===1)throw a=Si,Dr(e,0),fr(e,u),Nt(e,Je()),a;if(n===6)fr(e,u);else{if(f=e.current.alternate,!(u&30)&&!fv(f)&&(n=ns(e,u),n===2&&(p=xl(e),p!==0&&(u=p,n=Fu(e,p))),n===1))throw a=Si,Dr(e,0),fr(e,u),Nt(e,Je()),a;switch(e.finishedWork=f,e.finishedLanes=u,n){case 0:case 1:throw Error(o(345));case 2:jr(e,zt,In);break;case 3:if(fr(e,u),(u&130023424)===u&&(n=Lu+500-Je(),10<n)){if(ca(e,0)!==0)break;if(f=e.suspendedLanes,(f&u)!==u){Pt(),e.pingedLanes|=e.suspendedLanes&f;break}e.timeoutHandle=Gl(jr.bind(null,e,zt,In),n);break}jr(e,zt,In);break;case 4:if(fr(e,u),(u&4194240)===u)break;for(n=e.eventTimes,f=-1;0<u;){var g=31-on(u);p=1<<g,g=n[g],g>f&&(f=g),u&=~p}if(u=f,u=Je()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*cv(u/1960))-u,10<u){e.timeoutHandle=Gl(jr.bind(null,e,zt,In),u);break}jr(e,zt,In);break;case 5:jr(e,zt,In);break;default:throw Error(o(329))}}}return Nt(e,Je()),e.callbackNode===a?eh.bind(null,e):null}function Fu(e,n){var a=wi;return e.current.memoizedState.isDehydrated&&(Dr(e,n).flags|=256),e=ns(e,n),e!==2&&(n=zt,zt=a,n!==null&&Uu(n)),e}function Uu(e){zt===null?zt=e:zt.push.apply(zt,e)}function fv(e){for(var n=e;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var f=a[u],p=f.getSnapshot;f=f.value;try{if(!an(p(),f))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fr(e,n){for(n&=~ju,n&=~Qa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var a=31-on(n),u=1<<a;e[a]=-1,n&=~u}}function th(e){if(Pe&6)throw Error(o(327));bo();var n=ca(e,0);if(!(n&1))return Nt(e,Je()),null;var a=ns(e,n);if(e.tag!==0&&a===2){var u=xl(e);u!==0&&(n=u,a=Fu(e,u))}if(a===1)throw a=Si,Dr(e,0),fr(e,n),Nt(e,Je()),a;if(a===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,jr(e,zt,In),Nt(e,Je()),null}function qu(e,n){var a=Pe;Pe|=1;try{return e(n)}finally{Pe=a,Pe===0&&(vo=Je()+500,Ta&&or())}}function $r(e){ur!==null&&ur.tag===0&&!(Pe&6)&&bo();var n=Pe;Pe|=1;var a=Zt.transition,u=Ne;try{if(Zt.transition=null,Ne=1,e)return e()}finally{Ne=u,Zt.transition=a,Pe=n,!(Pe&6)&&or()}}function Hu(){Ut=yo.current,Be(yo)}function Dr(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,Fy(a)),nt!==null)for(a=nt.return;a!==null;){var u=a;switch(Zl(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ra();break;case 3:ho(),Be(Tt),Be(yt),du();break;case 5:cu(u);break;case 4:ho();break;case 13:Be(We);break;case 19:Be(We);break;case 10:iu(u.type._context);break;case 22:case 23:Hu()}a=a.return}if(dt=e,nt=e=dr(e.current,null),mt=Ut=n,at=0,Si=null,ju=Qa=Mr=0,zt=wi=null,Ar!==null){for(n=0;n<Ar.length;n++)if(a=Ar[n],u=a.interleaved,u!==null){a.interleaved=null;var f=u.next,p=a.pending;if(p!==null){var g=p.next;p.next=f,u.next=g}a.pending=u}Ar=null}return e}function nh(e,n){do{var a=nt;try{if(ou(),Ia.current=qa,Ba){for(var u=Ge.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Ba=!1}if(Nr=0,ft=it=Ge=null,mi=!1,gi=0,Du.current=null,a===null||a.return===null){at=1,Si=n,nt=null;break}e:{var p=e,g=a.return,w=a,P=n;if(n=mt,w.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var N=P,V=w,W=V.tag;if(!(V.mode&1)&&(W===0||W===11||W===15)){var H=V.alternate;H?(V.updateQueue=H.updateQueue,V.memoizedState=H.memoizedState,V.lanes=H.lanes):(V.updateQueue=null,V.memoizedState=null)}var J=Rp(g);if(J!==null){J.flags&=-257,Op(J,g,w,p,n),J.mode&1&&Ep(p,N,n),n=J,P=N;var ne=n.updateQueue;if(ne===null){var oe=new Set;oe.add(P),n.updateQueue=oe}else ne.add(P);break e}else{if(!(n&1)){Ep(p,N,n),Vu();break e}P=Error(o(426))}}else if(Fe&&w.mode&1){var Ze=Rp(g);if(Ze!==null){!(Ze.flags&65536)&&(Ze.flags|=256),Op(Ze,g,w,p,n),nu(mo(P,w));break e}}p=P=mo(P,w),at!==4&&(at=2),wi===null?wi=[p]:wi.push(p),p=g;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var _=Cp(p,P,n);Xd(p,_);break e;case 1:w=P;var R=p.type,z=p.stateNode;if(!(p.flags&128)&&(typeof R.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(lr===null||!lr.has(z)))){p.flags|=65536,n&=-n,p.lanes|=n;var K=Pp(p,w,n);Xd(p,K);break e}}p=p.return}while(p!==null)}ih(a)}catch(ae){n=ae,nt===a&&a!==null&&(nt=a=a.return);continue}break}while(!0)}function rh(){var e=Ya.current;return Ya.current=qa,e===null?qa:e}function Vu(){(at===0||at===3||at===2)&&(at=4),dt===null||!(Mr&268435455)&&!(Qa&268435455)||fr(dt,mt)}function ns(e,n){var a=Pe;Pe|=2;var u=rh();(dt!==e||mt!==n)&&(In=null,Dr(e,n));do try{dv();break}catch(f){nh(e,f)}while(!0);if(ou(),Pe=a,Ya.current=u,nt!==null)throw Error(o(261));return dt=null,mt=0,at}function dv(){for(;nt!==null;)oh(nt)}function pv(){for(;nt!==null&&!L0();)oh(nt)}function oh(e){var n=lh(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,n===null?ih(e):nt=n,Du.current=null}function ih(e){var n=e;do{var a=n.alternate;if(e=n.return,n.flags&32768){if(a=av(a,n),a!==null){a.flags&=32767,nt=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,nt=null;return}}else if(a=iv(a,n,Ut),a!==null){nt=a;return}if(n=n.sibling,n!==null){nt=n;return}nt=n=e}while(n!==null);at===0&&(at=5)}function jr(e,n,a){var u=Ne,f=Zt.transition;try{Zt.transition=null,Ne=1,hv(e,n,a,u)}finally{Zt.transition=f,Ne=u}return null}function hv(e,n,a,u){do bo();while(ur!==null);if(Pe&6)throw Error(o(327));a=e.finishedWork;var f=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var p=a.lanes|a.childLanes;if(K0(e,p),e===dt&&(nt=dt=null,mt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Ja||(Ja=!0,uh(aa,function(){return bo(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=Zt.transition,Zt.transition=null;var g=Ne;Ne=1;var w=Pe;Pe|=4,Du.current=null,lv(e,a),Yp(a,e),My(Vl),pa=!!Hl,Vl=Hl=null,e.current=a,uv(a),I0(),Pe=w,Ne=g,Zt.transition=p}else e.current=a;if(Ja&&(Ja=!1,ur=e,Za=f),p=e.pendingLanes,p===0&&(lr=null),U0(a.stateNode),Nt(e,Je()),n!==null)for(u=e.onRecoverableError,a=0;a<n.length;a++)f=n[a],u(f.value,{componentStack:f.stack,digest:f.digest});if(Xa)throw Xa=!1,e=Iu,Iu=null,e;return Za&1&&e.tag!==0&&bo(),p=e.pendingLanes,p&1?e===Bu?ki++:(ki=0,Bu=e):ki=0,or(),null}function bo(){if(ur!==null){var e=Gf(Za),n=Zt.transition,a=Ne;try{if(Zt.transition=null,Ne=16>e?16:e,ur===null)var u=!1;else{if(e=ur,ur=null,Za=0,Pe&6)throw Error(o(331));var f=Pe;for(Pe|=4,Z=e.current;Z!==null;){var p=Z,g=p.child;if(Z.flags&16){var w=p.deletions;if(w!==null){for(var P=0;P<w.length;P++){var N=w[P];for(Z=N;Z!==null;){var V=Z;switch(V.tag){case 0:case 11:case 15:xi(8,V,p)}var W=V.child;if(W!==null)W.return=V,Z=W;else for(;Z!==null;){V=Z;var H=V.sibling,J=V.return;if(Hp(V),V===N){Z=null;break}if(H!==null){H.return=J,Z=H;break}Z=J}}}var ne=p.alternate;if(ne!==null){var oe=ne.child;if(oe!==null){ne.child=null;do{var Ze=oe.sibling;oe.sibling=null,oe=Ze}while(oe!==null)}}Z=p}}if(p.subtreeFlags&2064&&g!==null)g.return=p,Z=g;else e:for(;Z!==null;){if(p=Z,p.flags&2048)switch(p.tag){case 0:case 11:case 15:xi(9,p,p.return)}var _=p.sibling;if(_!==null){_.return=p.return,Z=_;break e}Z=p.return}}var R=e.current;for(Z=R;Z!==null;){g=Z;var z=g.child;if(g.subtreeFlags&2064&&z!==null)z.return=g,Z=z;else e:for(g=R;Z!==null;){if(w=Z,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:Ka(9,w)}}catch(ae){Ye(w,w.return,ae)}if(w===g){Z=null;break e}var K=w.sibling;if(K!==null){K.return=w.return,Z=K;break e}Z=w.return}}if(Pe=f,or(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(sa,e)}catch{}u=!0}return u}finally{Ne=a,Zt.transition=n}}return!1}function ah(e,n,a){n=mo(a,n),n=Cp(e,n,1),e=ar(e,n,1),n=Pt(),e!==null&&(Go(e,1,n),Nt(e,n))}function Ye(e,n,a){if(e.tag===3)ah(e,e,a);else for(;n!==null;){if(n.tag===3){ah(n,e,a);break}else if(n.tag===1){var u=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(lr===null||!lr.has(u))){e=mo(a,e),e=Pp(n,e,1),n=ar(n,e,1),e=Pt(),n!==null&&(Go(n,1,e),Nt(n,e));break}}n=n.return}}function mv(e,n,a){var u=e.pingCache;u!==null&&u.delete(n),n=Pt(),e.pingedLanes|=e.suspendedLanes&a,dt===e&&(mt&a)===a&&(at===4||at===3&&(mt&130023424)===mt&&500>Je()-Lu?Dr(e,0):ju|=a),Nt(e,n)}function sh(e,n){n===0&&(e.mode&1?(n=ua,ua<<=1,!(ua&130023424)&&(ua=4194304)):n=1);var a=Pt();e=Dn(e,n),e!==null&&(Go(e,n,a),Nt(e,a))}function gv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),sh(e,a)}function yv(e,n){var a=0;switch(e.tag){case 13:var u=e.stateNode,f=e.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=e.stateNode;break;default:throw Error(o(314))}u!==null&&u.delete(n),sh(e,a)}var lh;lh=function(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps||Tt.current)At=!0;else{if(!(e.lanes&a)&&!(n.flags&128))return At=!1,ov(e,n,a);At=!!(e.flags&131072)}else At=!1,Fe&&n.flags&1048576&&Fd(n,Aa,n.index);switch(n.lanes=0,n.tag){case 2:var u=n.type;Wa(e,n),e=n.pendingProps;var f=ao(n,yt.current);po(n,a),f=mu(null,n,u,e,f,a);var p=gu();return n.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,_t(u)?(p=!0,Oa(n)):p=!1,n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,lu(n),f.updater=Ha,n.stateNode=f,f._reactInternals=n,wu(n,u,e,a),n=Eu(null,n,u,!0,p,a)):(n.tag=0,Fe&&p&&Jl(n),Ct(null,n,f,a),n=n.child),n;case 16:u=n.elementType;e:{switch(Wa(e,n),e=n.pendingProps,f=u._init,u=f(u._payload),n.type=u,f=n.tag=bv(u),e=ln(u,e),f){case 0:n=Pu(null,n,u,e,a);break e;case 1:n=Mp(null,n,u,e,a);break e;case 11:n=Tp(null,n,u,e,a);break e;case 14:n=_p(null,n,u,ln(u.type,e),a);break e}throw Error(o(306,u,""))}return n;case 0:return u=n.type,f=n.pendingProps,f=n.elementType===u?f:ln(u,f),Pu(e,n,u,f,a);case 1:return u=n.type,f=n.pendingProps,f=n.elementType===u?f:ln(u,f),Mp(e,n,u,f,a);case 3:e:{if($p(n),e===null)throw Error(o(387));u=n.pendingProps,p=n.memoizedState,f=p.element,Qd(e,n),ja(n,u,null,a);var g=n.memoizedState;if(u=g.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){f=mo(Error(o(423)),n),n=Dp(e,n,u,a,f);break e}else if(u!==f){f=mo(Error(o(424)),n),n=Dp(e,n,u,a,f);break e}else for(Ft=tr(n.stateNode.containerInfo.firstChild),Bt=n,Fe=!0,sn=null,a=Kd(n,null,u,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(uo(),u===f){n=Ln(e,n,a);break e}Ct(e,n,u,a)}n=n.child}return n;case 5:return Zd(n),e===null&&tu(n),u=n.type,f=n.pendingProps,p=e!==null?e.memoizedProps:null,g=f.children,Wl(u,f)?g=null:p!==null&&Wl(u,p)&&(n.flags|=32),Np(e,n),Ct(e,n,g,a),n.child;case 6:return e===null&&tu(n),null;case 13:return jp(e,n,a);case 4:return uu(n,n.stateNode.containerInfo),u=n.pendingProps,e===null?n.child=co(n,null,u,a):Ct(e,n,u,a),n.child;case 11:return u=n.type,f=n.pendingProps,f=n.elementType===u?f:ln(u,f),Tp(e,n,u,f,a);case 7:return Ct(e,n,n.pendingProps,a),n.child;case 8:return Ct(e,n,n.pendingProps.children,a),n.child;case 12:return Ct(e,n,n.pendingProps.children,a),n.child;case 10:e:{if(u=n.type._context,f=n.pendingProps,p=n.memoizedProps,g=f.value,je(Ma,u._currentValue),u._currentValue=g,p!==null)if(an(p.value,g)){if(p.children===f.children&&!Tt.current){n=Ln(e,n,a);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var w=p.dependencies;if(w!==null){g=p.child;for(var P=w.firstContext;P!==null;){if(P.context===u){if(p.tag===1){P=jn(-1,a&-a),P.tag=2;var N=p.updateQueue;if(N!==null){N=N.shared;var V=N.pending;V===null?P.next=P:(P.next=V.next,V.next=P),N.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),au(p.return,a,n),w.lanes|=a;break}P=P.next}}else if(p.tag===10)g=p.type===n.type?null:p.child;else if(p.tag===18){if(g=p.return,g===null)throw Error(o(341));g.lanes|=a,w=g.alternate,w!==null&&(w.lanes|=a),au(g,a,n),g=p.sibling}else g=p.child;if(g!==null)g.return=p;else for(g=p;g!==null;){if(g===n){g=null;break}if(p=g.sibling,p!==null){p.return=g.return,g=p;break}g=g.return}p=g}Ct(e,n,f.children,a),n=n.child}return n;case 9:return f=n.type,u=n.pendingProps.children,po(n,a),f=Xt(f),u=u(f),n.flags|=1,Ct(e,n,u,a),n.child;case 14:return u=n.type,f=ln(u,n.pendingProps),f=ln(u.type,f),_p(e,n,u,f,a);case 15:return Ap(e,n,n.type,n.pendingProps,a);case 17:return u=n.type,f=n.pendingProps,f=n.elementType===u?f:ln(u,f),Wa(e,n),n.tag=1,_t(u)?(e=!0,Oa(n)):e=!1,po(n,a),wp(n,u,f),wu(n,u,f,a),Eu(null,n,u,!0,e,a);case 19:return Ip(e,n,a);case 22:return zp(e,n,a)}throw Error(o(156,n.tag))};function uh(e,n){return Uf(e,n)}function vv(e,n,a,u){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,n,a,u){return new vv(e,n,a,u)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bv(e){if(typeof e=="function")return Wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===te)return 11;if(e===ge)return 14}return 2}function dr(e,n){var a=e.alternate;return a===null?(a=en(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function rs(e,n,a,u,f,p){var g=2;if(u=e,typeof e=="function")Wu(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case F:return Lr(a.children,f,p,n);case ee:g=8,f|=8;break;case se:return e=en(12,a,n,f|2),e.elementType=se,e.lanes=p,e;case le:return e=en(13,a,n,f),e.elementType=le,e.lanes=p,e;case ie:return e=en(19,a,n,f),e.elementType=ie,e.lanes=p,e;case we:return os(a,f,p,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:g=10;break e;case Q:g=9;break e;case te:g=11;break e;case ge:g=14;break e;case be:g=16,u=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return n=en(g,a,n,f),n.elementType=e,n.type=u,n.lanes=p,n}function Lr(e,n,a,u){return e=en(7,e,u,n),e.lanes=a,e}function os(e,n,a,u){return e=en(22,e,u,n),e.elementType=we,e.lanes=a,e.stateNode={isHidden:!1},e}function Gu(e,n,a){return e=en(6,e,null,n),e.lanes=a,e}function Ku(e,n,a){return n=en(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function xv(e,n,a,u,f){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Yu(e,n,a,u,f,p,g,w,P){return e=new xv(e,n,a,w,P),n===1?(n=1,p===!0&&(n|=8)):n=0,p=en(3,null,null,n),e.current=p,p.stateNode=e,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lu(p),e}function Sv(e,n,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:u==null?null:""+u,children:e,containerInfo:n,implementation:a}}function ch(e){if(!e)return rr;e=e._reactInternals;e:{if(Er(e)!==e||e.tag!==1)throw Error(o(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(_t(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(o(171))}if(e.tag===1){var a=e.type;if(_t(a))return Ld(e,a,n)}return n}function fh(e,n,a,u,f,p,g,w,P){return e=Yu(a,u,!0,e,f,p,g,w,P),e.context=ch(null),a=e.current,u=Pt(),f=cr(a),p=jn(u,f),p.callback=n??null,ar(a,p,f),e.current.lanes=f,Go(e,f,u),Nt(e,u),e}function is(e,n,a,u){var f=n.current,p=Pt(),g=cr(f);return a=ch(a),n.context===null?n.context=a:n.pendingContext=a,n=jn(p,g),n.payload={element:e},u=u===void 0?null:u,u!==null&&(n.callback=u),e=ar(f,n,g),e!==null&&(fn(e,f,g,p),Da(e,f,g)),g}function as(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Qu(e,n){dh(e,n),(e=e.alternate)&&dh(e,n)}function wv(){return null}var ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xu(e){this._internalRoot=e}ss.prototype.render=Xu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));is(e,n,null,null)},ss.prototype.unmount=Xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$r(function(){is(null,e,null,null)}),n[zn]=null}};function ss(e){this._internalRoot=e}ss.prototype.unstable_scheduleHydration=function(e){if(e){var n=Qf();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Jn.length&&n!==0&&n<Jn[a].priority;a++);Jn.splice(a,0,e),a===0&&Zf(e)}};function Ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hh(){}function kv(e,n,a,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var N=as(g);p.call(N)}}var g=fh(n,u,e,0,null,!1,!1,"",hh);return e._reactRootContainer=g,e[zn]=g.current,si(e.nodeType===8?e.parentNode:e),$r(),g}for(;f=e.lastChild;)e.removeChild(f);if(typeof u=="function"){var w=u;u=function(){var N=as(P);w.call(N)}}var P=Yu(e,0,!1,null,null,!1,!1,"",hh);return e._reactRootContainer=P,e[zn]=P.current,si(e.nodeType===8?e.parentNode:e),$r(function(){is(n,P,a,u)}),P}function us(e,n,a,u,f){var p=a._reactRootContainer;if(p){var g=p;if(typeof f=="function"){var w=f;f=function(){var P=as(g);w.call(P)}}is(n,g,e,f)}else g=kv(a,n,e,f,u);return as(g)}Kf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var a=Wo(n.pendingLanes);a!==0&&(wl(n,a|1),Nt(n,Je()),!(Pe&6)&&(vo=Je()+500,or()))}break;case 13:$r(function(){var u=Dn(e,1);if(u!==null){var f=Pt();fn(u,e,1,f)}}),Qu(e,1)}},kl=function(e){if(e.tag===13){var n=Dn(e,134217728);if(n!==null){var a=Pt();fn(n,e,134217728,a)}Qu(e,134217728)}},Yf=function(e){if(e.tag===13){var n=cr(e),a=Dn(e,n);if(a!==null){var u=Pt();fn(a,e,n,u)}Qu(e,n)}},Qf=function(){return Ne},Xf=function(e,n){var a=Ne;try{return Ne=e,n()}finally{Ne=a}},ml=function(e,n,a){switch(n){case"input":if(kr(e,a),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var u=a[n];if(u!==e&&u.form===e.form){var f=Ea(u);if(!f)throw Error(o(90));Kr(u),kr(u,f)}}}break;case"textarea":Wn(e,a);break;case"select":n=a.value,n!=null&&Kt(e,!!a.multiple,n,!1)}},$f=qu,Df=$r;var Cv={usingClientEntryPoint:!1,Events:[ci,oo,Ea,Nf,Mf,qu]},Ci={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pv={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bf(e),e===null?null:e.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{sa=cs.inject(Pv),gn=cs}catch{}}return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv,Mt.createPortal=function(e,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ju(n))throw Error(o(200));return Sv(e,n,null,a)},Mt.createRoot=function(e,n){if(!Ju(e))throw Error(o(299));var a=!1,u="",f=ph;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(f=n.onRecoverableError)),n=Yu(e,1,!1,null,null,a,!1,u,f),e[zn]=n.current,si(e.nodeType===8?e.parentNode:e),new Xu(n)},Mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Bf(n),e=e===null?null:e.stateNode,e},Mt.flushSync=function(e){return $r(e)},Mt.hydrate=function(e,n,a){if(!ls(n))throw Error(o(200));return us(null,e,n,!0,a)},Mt.hydrateRoot=function(e,n,a){if(!Ju(e))throw Error(o(405));var u=a!=null&&a.hydratedSources||null,f=!1,p="",g=ph;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),n=fh(n,null,e,1,a??null,f,!1,p,g),e[zn]=n.current,si(e),u)for(e=0;e<u.length;e++)a=u[e],f=a._getVersion,f=f(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,f]:n.mutableSourceEagerHydrationData.push(a,f);return new ss(n)},Mt.render=function(e,n,a){if(!ls(n))throw Error(o(200));return us(null,e,n,!1,a)},Mt.unmountComponentAtNode=function(e){if(!ls(e))throw Error(o(40));return e._reactRootContainer?($r(function(){us(null,null,e,!1,function(){e._reactRootContainer=null,e[zn]=null})}),!0):!1},Mt.unstable_batchedUpdates=qu,Mt.unstable_renderSubtreeIntoContainer=function(e,n,a,u){if(!ls(a))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return us(e,n,a,!1,u)},Mt.version="18.3.1-next-f1338f8080-20240426",Mt}var wh;function Ym(){if(wh)return tc.exports;wh=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),tc.exports=$v(),tc.exports}var kh;function Dv(){if(kh)return fs;kh=1;var t=Ym();return fs.createRoot=t.createRoot,fs.hydrateRoot=t.hydrateRoot,fs}var jv=Dv(),L=tf();const qe=Km(L),Ch=Tv({__proto__:null,default:qe},[L]);function Qm(t){var r,o,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(r=0;r<s;r++)t[r]&&(o=Qm(t[r]))&&(i&&(i+=" "),i+=o)}else for(o in t)t[o]&&(i&&(i+=" "),i+=o);return i}function Me(){for(var t,r,o=0,i="",s=arguments.length;o<s;o++)(t=arguments[o])&&(r=Qm(t))&&(i&&(i+=" "),i+=r);return i}function jt(t,r,o=void 0){const i={};for(const s in t){const l=t[s];let c="",d=!0;for(let h=0;h<l.length;h+=1){const m=l[h];m&&(c+=(d===!0?"":" ")+r(m),d=!1,o&&o[m]&&(c+=" "+o[m]))}i[s]=c}return i}function Wr(t,...r){const o=new URL(`https://mui.com/production-error/?code=${t}`);return r.forEach(i=>o.searchParams.append("args[]",i)),`Minified MUI error #${t}; visit ${o} for the full message.`}function Ae(t){if(typeof t!="string")throw new Error(Wr(7));return t.charAt(0).toUpperCase()+t.slice(1)}function Pn(t){if(typeof t!="object"||t===null)return!1;const r=Object.getPrototypeOf(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function Xm(t){if(L.isValidElement(t)||!Pn(t))return t;const r={};return Object.keys(t).forEach(o=>{r[o]=Xm(t[o])}),r}function Et(t,r,o={clone:!0}){const i=o.clone?{...t}:t;return Pn(t)&&Pn(r)&&Object.keys(r).forEach(s=>{L.isValidElement(r[s])?i[s]=r[s]:Pn(r[s])&&Object.prototype.hasOwnProperty.call(t,s)&&Pn(t[s])?i[s]=Et(t[s],r[s],o):o.clone?i[s]=Pn(r[s])?Xm(r[s]):r[s]:i[s]=r[s]}),i}function ji(t,r){return r?Et(t,r,{clone:!1}):t}function Lv(t,r){if(!t.containerQueries)return r;const o=Object.keys(r).filter(i=>i.startsWith("@container")).sort((i,s)=>{var c,d;const l=/min-width:\s*([0-9.]+)/;return+(((c=i.match(l))==null?void 0:c[1])||0)-+(((d=s.match(l))==null?void 0:d[1])||0)});return o.length?o.reduce((i,s)=>{const l=r[s];return delete i[s],i[s]=l,i},{...r}):r}function Iv(t,r){return r==="@"||r.startsWith("@")&&(t.some(o=>r.startsWith(`@${o}`))||!!r.match(/^@\d/))}function Bv(t,r){const o=r.match(/^@([^/]+)?\/?(.+)?$/);if(!o)return null;const[,i,s]=o,l=Number.isNaN(+i)?i||0:+i;return t.containerQueries(s).up(l)}function Fv(t){const r=(l,c)=>l.replace("@media",c?`@container ${c}`:"@container");function o(l,c){l.up=(...d)=>r(t.breakpoints.up(...d),c),l.down=(...d)=>r(t.breakpoints.down(...d),c),l.between=(...d)=>r(t.breakpoints.between(...d),c),l.only=(...d)=>r(t.breakpoints.only(...d),c),l.not=(...d)=>{const h=r(t.breakpoints.not(...d),c);return h.includes("not all and")?h.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):h}}const i={},s=l=>(o(i,l),i);return o(s),{...t,containerQueries:s}}const Is={xs:0,sm:600,md:900,lg:1200,xl:1536},Ph={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Is[t]}px)`},Uv={containerQueries:t=>({up:r=>{let o=typeof r=="number"?r:Is[r]||r;return typeof o=="number"&&(o=`${o}px`),t?`@container ${t} (min-width:${o})`:`@container (min-width:${o})`}})};function qn(t,r,o){const i=t.theme||{};if(Array.isArray(r)){const l=i.breakpoints||Ph;return r.reduce((c,d,h)=>(c[l.up(l.keys[h])]=o(r[h]),c),{})}if(typeof r=="object"){const l=i.breakpoints||Ph;return Object.keys(r).reduce((c,d)=>{if(Iv(l.keys,d)){const h=Bv(i.containerQueries?i:Uv,d);h&&(c[h]=o(r[d],d))}else if(Object.keys(l.values||Is).includes(d)){const h=l.up(d);c[h]=o(r[d],d)}else{const h=d;c[h]=r[h]}return c},{})}return o(r)}function qv(t={}){var o;return((o=t.keys)==null?void 0:o.reduce((i,s)=>{const l=t.up(s);return i[l]={},i},{}))||{}}function Hv(t,r){return t.reduce((o,i)=>{const s=o[i];return(!s||Object.keys(s).length===0)&&delete o[i],o},r)}function Bs(t,r,o=!0){if(!r||typeof r!="string")return null;if(t&&t.vars&&o){const i=`vars.${r}`.split(".").reduce((s,l)=>s&&s[l]?s[l]:null,t);if(i!=null)return i}return r.split(".").reduce((i,s)=>i&&i[s]!=null?i[s]:null,t)}function Os(t,r,o,i=o){let s;return typeof t=="function"?s=t(o):Array.isArray(t)?s=t[o]||i:s=Bs(t,o)||i,r&&(s=r(s,i,t)),s}function et(t){const{prop:r,cssProperty:o=t.prop,themeKey:i,transform:s}=t,l=c=>{if(c[r]==null)return null;const d=c[r],h=c.theme,m=Bs(h,i)||{};return qn(c,d,v=>{let k=Os(m,s,v);return v===k&&typeof v=="string"&&(k=Os(m,s,`${r}${v==="default"?"":Ae(v)}`,v)),o===!1?k:{[o]:k}})};return l.propTypes={},l.filterProps=[r],l}function Vv(t){const r={};return o=>(r[o]===void 0&&(r[o]=t(o)),r[o])}const Wv={m:"margin",p:"padding"},Gv={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Eh={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Kv=Vv(t=>{if(t.length>2)if(Eh[t])t=Eh[t];else return[t];const[r,o]=t.split(""),i=Wv[r],s=Gv[o]||"";return Array.isArray(s)?s.map(l=>i+l):[i+s]}),nf=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],rf=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...nf,...rf];function Yi(t,r,o,i){const s=Bs(t,r,!0)??o;return typeof s=="number"||typeof s=="string"?l=>typeof l=="string"?l:typeof s=="string"?`calc(${l} * ${s})`:s*l:Array.isArray(s)?l=>{if(typeof l=="string")return l;const c=Math.abs(l),d=s[c];return l>=0?d:typeof d=="number"?-d:`-${d}`}:typeof s=="function"?s:()=>{}}function of(t){return Yi(t,"spacing",8)}function Qi(t,r){return typeof r=="string"||r==null?r:t(r)}function Yv(t,r){return o=>t.reduce((i,s)=>(i[s]=Qi(r,o),i),{})}function Qv(t,r,o,i){if(!r.includes(o))return null;const s=Kv(o),l=Yv(s,i),c=t[o];return qn(t,c,l)}function Jm(t,r){const o=of(t.theme);return Object.keys(t).map(i=>Qv(t,r,i,o)).reduce(ji,{})}function Qe(t){return Jm(t,nf)}Qe.propTypes={};Qe.filterProps=nf;function Xe(t){return Jm(t,rf)}Xe.propTypes={};Xe.filterProps=rf;function Fs(...t){const r=t.reduce((i,s)=>(s.filterProps.forEach(l=>{i[l]=s}),i),{}),o=i=>Object.keys(i).reduce((s,l)=>r[l]?ji(s,r[l](i)):s,{});return o.propTypes={},o.filterProps=t.reduce((i,s)=>i.concat(s.filterProps),[]),o}function nn(t){return typeof t!="number"?t:`${t}px solid`}function rn(t,r){return et({prop:t,themeKey:"borders",transform:r})}const Xv=rn("border",nn),Jv=rn("borderTop",nn),Zv=rn("borderRight",nn),e1=rn("borderBottom",nn),t1=rn("borderLeft",nn),n1=rn("borderColor"),r1=rn("borderTopColor"),o1=rn("borderRightColor"),i1=rn("borderBottomColor"),a1=rn("borderLeftColor"),s1=rn("outline",nn),l1=rn("outlineColor"),Us=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const r=Yi(t.theme,"shape.borderRadius",4),o=i=>({borderRadius:Qi(r,i)});return qn(t,t.borderRadius,o)}return null};Us.propTypes={};Us.filterProps=["borderRadius"];Fs(Xv,Jv,Zv,e1,t1,n1,r1,o1,i1,a1,Us,s1,l1);const qs=t=>{if(t.gap!==void 0&&t.gap!==null){const r=Yi(t.theme,"spacing",8),o=i=>({gap:Qi(r,i)});return qn(t,t.gap,o)}return null};qs.propTypes={};qs.filterProps=["gap"];const Hs=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const r=Yi(t.theme,"spacing",8),o=i=>({columnGap:Qi(r,i)});return qn(t,t.columnGap,o)}return null};Hs.propTypes={};Hs.filterProps=["columnGap"];const Vs=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const r=Yi(t.theme,"spacing",8),o=i=>({rowGap:Qi(r,i)});return qn(t,t.rowGap,o)}return null};Vs.propTypes={};Vs.filterProps=["rowGap"];const u1=et({prop:"gridColumn"}),c1=et({prop:"gridRow"}),f1=et({prop:"gridAutoFlow"}),d1=et({prop:"gridAutoColumns"}),p1=et({prop:"gridAutoRows"}),h1=et({prop:"gridTemplateColumns"}),m1=et({prop:"gridTemplateRows"}),g1=et({prop:"gridTemplateAreas"}),y1=et({prop:"gridArea"});Fs(qs,Hs,Vs,u1,c1,f1,d1,p1,h1,m1,g1,y1);function zo(t,r){return r==="grey"?r:t}const v1=et({prop:"color",themeKey:"palette",transform:zo}),b1=et({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:zo}),x1=et({prop:"backgroundColor",themeKey:"palette",transform:zo});Fs(v1,b1,x1);function Vt(t){return t<=1&&t!==0?`${t*100}%`:t}const S1=et({prop:"width",transform:Vt}),af=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const r=o=>{var s,l,c,d,h;const i=((c=(l=(s=t.theme)==null?void 0:s.breakpoints)==null?void 0:l.values)==null?void 0:c[o])||Is[o];return i?((h=(d=t.theme)==null?void 0:d.breakpoints)==null?void 0:h.unit)!=="px"?{maxWidth:`${i}${t.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:Vt(o)}};return qn(t,t.maxWidth,r)}return null};af.filterProps=["maxWidth"];const w1=et({prop:"minWidth",transform:Vt}),k1=et({prop:"height",transform:Vt}),C1=et({prop:"maxHeight",transform:Vt}),P1=et({prop:"minHeight",transform:Vt});et({prop:"size",cssProperty:"width",transform:Vt});et({prop:"size",cssProperty:"height",transform:Vt});const E1=et({prop:"boxSizing"});Fs(S1,af,w1,k1,C1,P1,E1);const Xi={border:{themeKey:"borders",transform:nn},borderTop:{themeKey:"borders",transform:nn},borderRight:{themeKey:"borders",transform:nn},borderBottom:{themeKey:"borders",transform:nn},borderLeft:{themeKey:"borders",transform:nn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:nn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Us},color:{themeKey:"palette",transform:zo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:zo},backgroundColor:{themeKey:"palette",transform:zo},p:{style:Xe},pt:{style:Xe},pr:{style:Xe},pb:{style:Xe},pl:{style:Xe},px:{style:Xe},py:{style:Xe},padding:{style:Xe},paddingTop:{style:Xe},paddingRight:{style:Xe},paddingBottom:{style:Xe},paddingLeft:{style:Xe},paddingX:{style:Xe},paddingY:{style:Xe},paddingInline:{style:Xe},paddingInlineStart:{style:Xe},paddingInlineEnd:{style:Xe},paddingBlock:{style:Xe},paddingBlockStart:{style:Xe},paddingBlockEnd:{style:Xe},m:{style:Qe},mt:{style:Qe},mr:{style:Qe},mb:{style:Qe},ml:{style:Qe},mx:{style:Qe},my:{style:Qe},margin:{style:Qe},marginTop:{style:Qe},marginRight:{style:Qe},marginBottom:{style:Qe},marginLeft:{style:Qe},marginX:{style:Qe},marginY:{style:Qe},marginInline:{style:Qe},marginInlineStart:{style:Qe},marginInlineEnd:{style:Qe},marginBlock:{style:Qe},marginBlockStart:{style:Qe},marginBlockEnd:{style:Qe},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:qs},rowGap:{style:Vs},columnGap:{style:Hs},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Vt},maxWidth:{style:af},minWidth:{transform:Vt},height:{transform:Vt},maxHeight:{transform:Vt},minHeight:{transform:Vt},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function R1(...t){const r=t.reduce((i,s)=>i.concat(Object.keys(s)),[]),o=new Set(r);return t.every(i=>o.size===Object.keys(i).length)}function O1(t,r){return typeof t=="function"?t(r):t}function T1(){function t(o,i,s,l){const c={[o]:i,theme:s},d=l[o];if(!d)return{[o]:i};const{cssProperty:h=o,themeKey:m,transform:y,style:v}=d;if(i==null)return null;if(m==="typography"&&i==="inherit")return{[o]:i};const k=Bs(s,m)||{};return v?v(c):qn(c,i,S=>{let b=Os(k,y,S);return S===b&&typeof S=="string"&&(b=Os(k,y,`${o}${S==="default"?"":Ae(S)}`,S)),h===!1?b:{[h]:b}})}function r(o){const{sx:i,theme:s={}}=o||{};if(!i)return null;const l=s.unstable_sxConfig??Xi;function c(d){let h=d;if(typeof d=="function")h=d(s);else if(typeof d!="object")return d;if(!h)return null;const m=qv(s.breakpoints),y=Object.keys(m);let v=m;return Object.keys(h).forEach(k=>{const T=O1(h[k],s);if(T!=null)if(typeof T=="object")if(l[k])v=ji(v,t(k,T,s,l));else{const S=qn({theme:s},T,b=>({[k]:b}));R1(S,T)?v[k]=r({sx:T,theme:s}):v=ji(v,S)}else v=ji(v,t(k,T,s,l))}),Lv(s,Hv(y,v))}return Array.isArray(i)?i.map(c):c(i)}return r}const vr=T1();vr.filterProps=["sx"];const _1=t=>{var i;const r={systemProps:{},otherProps:{}},o=((i=t==null?void 0:t.theme)==null?void 0:i.unstable_sxConfig)??Xi;return Object.keys(t).forEach(s=>{o[s]?r.systemProps[s]=t[s]:r.otherProps[s]=t[s]}),r};function sf(t){const{sx:r,...o}=t,{systemProps:i,otherProps:s}=_1(o);let l;return Array.isArray(r)?l=[i,...r]:typeof r=="function"?l=(...c)=>{const d=r(...c);return Pn(d)?{...i,...d}:i}:l={...i,...r},{...s,sx:l}}function Ke(){return Ke=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var i in o)({}).hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},Ke.apply(null,arguments)}function Zm(t){var r=Object.create(null);return function(o){return r[o]===void 0&&(r[o]=t(o)),r[o]}}var A1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,z1=Zm(function(t){return A1.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),N1=!1;function M1(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function $1(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var D1=function(){function t(o){var i=this;this._insertTag=function(s){var l;i.tags.length===0?i.insertionPoint?l=i.insertionPoint.nextSibling:i.prepend?l=i.container.firstChild:l=i.before:l=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,l),i.tags.push(s)},this.isSpeedy=o.speedy===void 0?!N1:o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(i){i.forEach(this._insertTag)},r.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($1(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var l=M1(s);try{l.insertRule(i,l.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},r.flush=function(){this.tags.forEach(function(i){var s;return(s=i.parentNode)==null?void 0:s.removeChild(i)}),this.tags=[],this.ctr=0},t}(),St="-ms-",Ts="-moz-",Re="-webkit-",eg="comm",lf="rule",uf="decl",j1="@import",tg="@keyframes",L1="@layer",I1=Math.abs,Ws=String.fromCharCode,B1=Object.assign;function F1(t,r){return gt(t,0)^45?(((r<<2^gt(t,0))<<2^gt(t,1))<<2^gt(t,2))<<2^gt(t,3):0}function ng(t){return t.trim()}function U1(t,r){return(t=r.exec(t))?t[0]:t}function Oe(t,r,o){return t.replace(r,o)}function Rc(t,r){return t.indexOf(r)}function gt(t,r){return t.charCodeAt(r)|0}function Fi(t,r,o){return t.slice(r,o)}function kn(t){return t.length}function cf(t){return t.length}function ds(t,r){return r.push(t),t}function q1(t,r){return t.map(r).join("")}var Gs=1,Do=1,rg=0,Dt=0,rt=0,jo="";function Ks(t,r,o,i,s,l,c){return{value:t,root:r,parent:o,type:i,props:s,children:l,line:Gs,column:Do,length:c,return:""}}function Ri(t,r){return B1(Ks("",null,null,"",null,null,0),t,{length:-t.length},r)}function H1(){return rt}function V1(){return rt=Dt>0?gt(jo,--Dt):0,Do--,rt===10&&(Do=1,Gs--),rt}function Wt(){return rt=Dt<rg?gt(jo,Dt++):0,Do++,rt===10&&(Do=1,Gs++),rt}function Rn(){return gt(jo,Dt)}function Ss(){return Dt}function Ji(t,r){return Fi(jo,t,r)}function Ui(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function og(t){return Gs=Do=1,rg=kn(jo=t),Dt=0,[]}function ig(t){return jo="",t}function ws(t){return ng(Ji(Dt-1,Oc(t===91?t+2:t===40?t+1:t)))}function W1(t){for(;(rt=Rn())&&rt<33;)Wt();return Ui(t)>2||Ui(rt)>3?"":" "}function G1(t,r){for(;--r&&Wt()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return Ji(t,Ss()+(r<6&&Rn()==32&&Wt()==32))}function Oc(t){for(;Wt();)switch(rt){case t:return Dt;case 34:case 39:t!==34&&t!==39&&Oc(rt);break;case 40:t===41&&Oc(t);break;case 92:Wt();break}return Dt}function K1(t,r){for(;Wt()&&t+rt!==57;)if(t+rt===84&&Rn()===47)break;return"/*"+Ji(r,Dt-1)+"*"+Ws(t===47?t:Wt())}function Y1(t){for(;!Ui(Rn());)Wt();return Ji(t,Dt)}function Q1(t){return ig(ks("",null,null,null,[""],t=og(t),0,[0],t))}function ks(t,r,o,i,s,l,c,d,h){for(var m=0,y=0,v=c,k=0,T=0,S=0,b=1,C=1,$=1,U=0,D="",A=s,E=l,M=i,F=D;C;)switch(S=U,U=Wt()){case 40:if(S!=108&&gt(F,v-1)==58){Rc(F+=Oe(ws(U),"&","&\f"),"&\f")!=-1&&($=-1);break}case 34:case 39:case 91:F+=ws(U);break;case 9:case 10:case 13:case 32:F+=W1(S);break;case 92:F+=G1(Ss()-1,7);continue;case 47:switch(Rn()){case 42:case 47:ds(X1(K1(Wt(),Ss()),r,o),h);break;default:F+="/"}break;case 123*b:d[m++]=kn(F)*$;case 125*b:case 59:case 0:switch(U){case 0:case 125:C=0;case 59+y:$==-1&&(F=Oe(F,/\f/g,"")),T>0&&kn(F)-v&&ds(T>32?Oh(F+";",i,o,v-1):Oh(Oe(F," ","")+";",i,o,v-2),h);break;case 59:F+=";";default:if(ds(M=Rh(F,r,o,m,y,s,d,D,A=[],E=[],v),l),U===123)if(y===0)ks(F,r,M,M,A,l,v,d,E);else switch(k===99&&gt(F,3)===110?100:k){case 100:case 108:case 109:case 115:ks(t,M,M,i&&ds(Rh(t,M,M,0,0,s,d,D,s,A=[],v),E),s,E,v,d,i?A:E);break;default:ks(F,M,M,M,[""],E,0,d,E)}}m=y=T=0,b=$=1,D=F="",v=c;break;case 58:v=1+kn(F),T=S;default:if(b<1){if(U==123)--b;else if(U==125&&b++==0&&V1()==125)continue}switch(F+=Ws(U),U*b){case 38:$=y>0?1:(F+="\f",-1);break;case 44:d[m++]=(kn(F)-1)*$,$=1;break;case 64:Rn()===45&&(F+=ws(Wt())),k=Rn(),y=v=kn(D=F+=Y1(Ss())),U++;break;case 45:S===45&&kn(F)==2&&(b=0)}}return l}function Rh(t,r,o,i,s,l,c,d,h,m,y){for(var v=s-1,k=s===0?l:[""],T=cf(k),S=0,b=0,C=0;S<i;++S)for(var $=0,U=Fi(t,v+1,v=I1(b=c[S])),D=t;$<T;++$)(D=ng(b>0?k[$]+" "+U:Oe(U,/&\f/g,k[$])))&&(h[C++]=D);return Ks(t,r,o,s===0?lf:d,h,m,y)}function X1(t,r,o){return Ks(t,r,o,eg,Ws(H1()),Fi(t,2,-2),0)}function Oh(t,r,o,i){return Ks(t,r,o,uf,Fi(t,0,i),Fi(t,i+1,-1),i)}function No(t,r){for(var o="",i=cf(t),s=0;s<i;s++)o+=r(t[s],s,t,r)||"";return o}function J1(t,r,o,i){switch(t.type){case L1:if(t.children.length)break;case j1:case uf:return t.return=t.return||t.value;case eg:return"";case tg:return t.return=t.value+"{"+No(t.children,i)+"}";case lf:t.value=t.props.join(",")}return kn(o=No(t.children,i))?t.return=t.value+"{"+o+"}":""}function Z1(t){var r=cf(t);return function(o,i,s,l){for(var c="",d=0;d<r;d++)c+=t[d](o,i,s,l)||"";return c}}function eb(t){return function(r){r.root||(r=r.return)&&t(r)}}var tb=function(r,o,i){for(var s=0,l=0;s=l,l=Rn(),s===38&&l===12&&(o[i]=1),!Ui(l);)Wt();return Ji(r,Dt)},nb=function(r,o){var i=-1,s=44;do switch(Ui(s)){case 0:s===38&&Rn()===12&&(o[i]=1),r[i]+=tb(Dt-1,o,i);break;case 2:r[i]+=ws(s);break;case 4:if(s===44){r[++i]=Rn()===58?"&\f":"",o[i]=r[i].length;break}default:r[i]+=Ws(s)}while(s=Wt());return r},rb=function(r,o){return ig(nb(og(r),o))},Th=new WeakMap,ob=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var o=r.value,i=r.parent,s=r.column===i.column&&r.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(r.props.length===1&&o.charCodeAt(0)!==58&&!Th.get(i))&&!s){Th.set(r,!0);for(var l=[],c=rb(o,l),d=i.props,h=0,m=0;h<c.length;h++)for(var y=0;y<d.length;y++,m++)r.props[m]=l[h]?c[h].replace(/&\f/g,d[y]):d[y]+" "+c[h]}}},ib=function(r){if(r.type==="decl"){var o=r.value;o.charCodeAt(0)===108&&o.charCodeAt(2)===98&&(r.return="",r.value="")}};function ag(t,r){switch(F1(t,r)){case 5103:return Re+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+t+Ts+t+St+t+t;case 6828:case 4268:return Re+t+St+t+t;case 6165:return Re+t+St+"flex-"+t+t;case 5187:return Re+t+Oe(t,/(\w+).+(:[^]+)/,Re+"box-$1$2"+St+"flex-$1$2")+t;case 5443:return Re+t+St+"flex-item-"+Oe(t,/flex-|-self/,"")+t;case 4675:return Re+t+St+"flex-line-pack"+Oe(t,/align-content|flex-|-self/,"")+t;case 5548:return Re+t+St+Oe(t,"shrink","negative")+t;case 5292:return Re+t+St+Oe(t,"basis","preferred-size")+t;case 6060:return Re+"box-"+Oe(t,"-grow","")+Re+t+St+Oe(t,"grow","positive")+t;case 4554:return Re+Oe(t,/([^-])(transform)/g,"$1"+Re+"$2")+t;case 6187:return Oe(Oe(Oe(t,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),t,"")+t;case 5495:case 3959:return Oe(t,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return Oe(Oe(t,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+St+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+t+t;case 4095:case 3583:case 4068:case 2532:return Oe(t,/(.+)-inline(.+)/,Re+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kn(t)-1-r>6)switch(gt(t,r+1)){case 109:if(gt(t,r+4)!==45)break;case 102:return Oe(t,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+Ts+(gt(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~Rc(t,"stretch")?ag(Oe(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(gt(t,r+1)!==115)break;case 6444:switch(gt(t,kn(t)-3-(~Rc(t,"!important")&&10))){case 107:return Oe(t,":",":"+Re)+t;case 101:return Oe(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Re+(gt(t,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+St+"$2box$3")+t}break;case 5936:switch(gt(t,r+11)){case 114:return Re+t+St+Oe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Re+t+St+Oe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Re+t+St+Oe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Re+t+St+t+t}return t}var ab=function(r,o,i,s){if(r.length>-1&&!r.return)switch(r.type){case uf:r.return=ag(r.value,r.length);break;case tg:return No([Ri(r,{value:Oe(r.value,"@","@"+Re)})],s);case lf:if(r.length)return q1(r.props,function(l){switch(U1(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return No([Ri(r,{props:[Oe(l,/:(read-\w+)/,":"+Ts+"$1")]})],s);case"::placeholder":return No([Ri(r,{props:[Oe(l,/:(plac\w+)/,":"+Re+"input-$1")]}),Ri(r,{props:[Oe(l,/:(plac\w+)/,":"+Ts+"$1")]}),Ri(r,{props:[Oe(l,/:(plac\w+)/,St+"input-$1")]})],s)}return""})}},sb=[ab],lb=function(r){var o=r.key;if(o==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(b){var C=b.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var s=r.stylisPlugins||sb,l={},c,d=[];c=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(b){for(var C=b.getAttribute("data-emotion").split(" "),$=1;$<C.length;$++)l[C[$]]=!0;d.push(b)});var h,m=[ob,ib];{var y,v=[J1,eb(function(b){y.insert(b)})],k=Z1(m.concat(s,v)),T=function(C){return No(Q1(C),k)};h=function(C,$,U,D){y=U,T(C?C+"{"+$.styles+"}":$.styles),D&&(S.inserted[$.name]=!0)}}var S={key:o,sheet:new D1({key:o,container:c,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:l,registered:{},insert:h};return S.sheet.hydrate(d),S},oc={exports:{}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h;function ub(){if(_h)return _e;_h=1;var t=typeof Symbol=="function"&&Symbol.for,r=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,c=t?Symbol.for("react.provider"):60109,d=t?Symbol.for("react.context"):60110,h=t?Symbol.for("react.async_mode"):60111,m=t?Symbol.for("react.concurrent_mode"):60111,y=t?Symbol.for("react.forward_ref"):60112,v=t?Symbol.for("react.suspense"):60113,k=t?Symbol.for("react.suspense_list"):60120,T=t?Symbol.for("react.memo"):60115,S=t?Symbol.for("react.lazy"):60116,b=t?Symbol.for("react.block"):60121,C=t?Symbol.for("react.fundamental"):60117,$=t?Symbol.for("react.responder"):60118,U=t?Symbol.for("react.scope"):60119;function D(E){if(typeof E=="object"&&E!==null){var M=E.$$typeof;switch(M){case r:switch(E=E.type,E){case h:case m:case i:case l:case s:case v:return E;default:switch(E=E&&E.$$typeof,E){case d:case y:case S:case T:case c:return E;default:return M}}case o:return M}}}function A(E){return D(E)===m}return _e.AsyncMode=h,_e.ConcurrentMode=m,_e.ContextConsumer=d,_e.ContextProvider=c,_e.Element=r,_e.ForwardRef=y,_e.Fragment=i,_e.Lazy=S,_e.Memo=T,_e.Portal=o,_e.Profiler=l,_e.StrictMode=s,_e.Suspense=v,_e.isAsyncMode=function(E){return A(E)||D(E)===h},_e.isConcurrentMode=A,_e.isContextConsumer=function(E){return D(E)===d},_e.isContextProvider=function(E){return D(E)===c},_e.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===r},_e.isForwardRef=function(E){return D(E)===y},_e.isFragment=function(E){return D(E)===i},_e.isLazy=function(E){return D(E)===S},_e.isMemo=function(E){return D(E)===T},_e.isPortal=function(E){return D(E)===o},_e.isProfiler=function(E){return D(E)===l},_e.isStrictMode=function(E){return D(E)===s},_e.isSuspense=function(E){return D(E)===v},_e.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===i||E===m||E===l||E===s||E===v||E===k||typeof E=="object"&&E!==null&&(E.$$typeof===S||E.$$typeof===T||E.$$typeof===c||E.$$typeof===d||E.$$typeof===y||E.$$typeof===C||E.$$typeof===$||E.$$typeof===U||E.$$typeof===b)},_e.typeOf=D,_e}var Ah;function cb(){return Ah||(Ah=1,oc.exports=ub()),oc.exports}var ic,zh;function fb(){if(zh)return ic;zh=1;var t=cb(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[t.ForwardRef]=i,l[t.Memo]=s;function c(S){return t.isMemo(S)?s:l[S.$$typeof]||r}var d=Object.defineProperty,h=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,k=Object.prototype;function T(S,b,C){if(typeof b!="string"){if(k){var $=v(b);$&&$!==k&&T(S,$,C)}var U=h(b);m&&(U=U.concat(m(b)));for(var D=c(S),A=c(b),E=0;E<U.length;++E){var M=U[E];if(!o[M]&&!(C&&C[M])&&!(A&&A[M])&&!(D&&D[M])){var F=y(b,M);try{d(S,M,F)}catch{}}}}return S}return ic=T,ic}fb();var db=!0;function pb(t,r,o){var i="";return o.split(" ").forEach(function(s){t[s]!==void 0?r.push(t[s]+";"):s&&(i+=s+" ")}),i}var sg=function(r,o,i){var s=r.key+"-"+o.name;(i===!1||db===!1)&&r.registered[s]===void 0&&(r.registered[s]=o.styles)},lg=function(r,o,i){sg(r,o,i);var s=r.key+"-"+o.name;if(r.inserted[o.name]===void 0){var l=o;do r.insert(o===l?"."+s:"",l,r.sheet,!0),l=l.next;while(l!==void 0)}};function hb(t){for(var r=0,o,i=0,s=t.length;s>=4;++i,s-=4)o=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,r=(o&65535)*1540483477+((o>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(s){case 3:r^=(t.charCodeAt(i+2)&255)<<16;case 2:r^=(t.charCodeAt(i+1)&255)<<8;case 1:r^=t.charCodeAt(i)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var mb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},gb=!1,yb=/[A-Z]|^ms/g,vb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ug=function(r){return r.charCodeAt(1)===45},Nh=function(r){return r!=null&&typeof r!="boolean"},ac=Zm(function(t){return ug(t)?t:t.replace(yb,"-$&").toLowerCase()}),Mh=function(r,o){switch(r){case"animation":case"animationName":if(typeof o=="string")return o.replace(vb,function(i,s,l){return Cn={name:s,styles:l,next:Cn},s})}return mb[r]!==1&&!ug(r)&&typeof o=="number"&&o!==0?o+"px":o},bb="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function qi(t,r,o){if(o==null)return"";var i=o;if(i.__emotion_styles!==void 0)return i;switch(typeof o){case"boolean":return"";case"object":{var s=o;if(s.anim===1)return Cn={name:s.name,styles:s.styles,next:Cn},s.name;var l=o;if(l.styles!==void 0){var c=l.next;if(c!==void 0)for(;c!==void 0;)Cn={name:c.name,styles:c.styles,next:Cn},c=c.next;var d=l.styles+";";return d}return xb(t,r,o)}case"function":{if(t!==void 0){var h=Cn,m=o(t);return Cn=h,qi(t,r,m)}break}}var y=o;if(r==null)return y;var v=r[y];return v!==void 0?v:y}function xb(t,r,o){var i="";if(Array.isArray(o))for(var s=0;s<o.length;s++)i+=qi(t,r,o[s])+";";else for(var l in o){var c=o[l];if(typeof c!="object"){var d=c;r!=null&&r[d]!==void 0?i+=l+"{"+r[d]+"}":Nh(d)&&(i+=ac(l)+":"+Mh(l,d)+";")}else{if(l==="NO_COMPONENT_SELECTOR"&&gb)throw new Error(bb);if(Array.isArray(c)&&typeof c[0]=="string"&&(r==null||r[c[0]]===void 0))for(var h=0;h<c.length;h++)Nh(c[h])&&(i+=ac(l)+":"+Mh(l,c[h])+";");else{var m=qi(t,r,c);switch(l){case"animation":case"animationName":{i+=ac(l)+":"+m+";";break}default:i+=l+"{"+m+"}"}}}}return i}var $h=/label:\s*([^\s;{]+)\s*(;|$)/g,Cn;function Ys(t,r,o){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";Cn=void 0;var l=t[0];if(l==null||l.raw===void 0)i=!1,s+=qi(o,r,l);else{var c=l;s+=c[0]}for(var d=1;d<t.length;d++)if(s+=qi(o,r,t[d]),i){var h=l;s+=h[d]}$h.lastIndex=0;for(var m="",y;(y=$h.exec(s))!==null;)m+="-"+y[1];var v=hb(s)+m;return{name:v,styles:s,next:Cn}}var Sb=function(r){return r()},cg=Ch.useInsertionEffect?Ch.useInsertionEffect:!1,wb=cg||Sb,Dh=cg||L.useLayoutEffect,fg=L.createContext(typeof HTMLElement<"u"?lb({key:"css"}):null);fg.Provider;var dg=function(r){return L.forwardRef(function(o,i){var s=L.useContext(fg);return r(o,s,i)})},Qs=L.createContext({}),kb=dg(function(t,r){var o=t.styles,i=Ys([o],void 0,L.useContext(Qs)),s=L.useRef();return Dh(function(){var l=r.key+"-global",c=new r.sheet.constructor({key:l,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),d=!1,h=document.querySelector('style[data-emotion="'+l+" "+i.name+'"]');return r.sheet.tags.length&&(c.before=r.sheet.tags[0]),h!==null&&(d=!0,h.setAttribute("data-emotion",l),c.hydrate([h])),s.current=[c,d],function(){c.flush()}},[r]),Dh(function(){var l=s.current,c=l[0],d=l[1];if(d){l[1]=!1;return}if(i.next!==void 0&&lg(r,i.next,!0),c.tags.length){var h=c.tags[c.tags.length-1].nextElementSibling;c.before=h,c.flush()}r.insert("",i,c,!1)},[r,i.name]),null});function Cb(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return Ys(r)}var ff=function(){var r=Cb.apply(void 0,arguments),o="animation-"+r.name;return{name:o,styles:"@keyframes "+o+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Pb=z1,Eb=function(r){return r!=="theme"},jh=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Pb:Eb},Lh=function(r,o,i){var s;if(o){var l=o.shouldForwardProp;s=r.__emotion_forwardProp&&l?function(c){return r.__emotion_forwardProp(c)&&l(c)}:l}return typeof s!="function"&&i&&(s=r.__emotion_forwardProp),s},Rb=!1,Ob=function(r){var o=r.cache,i=r.serialized,s=r.isStringTag;return sg(o,i,s),wb(function(){return lg(o,i,s)}),null},Tb=function t(r,o){var i=r.__emotion_real===r,s=i&&r.__emotion_base||r,l,c;o!==void 0&&(l=o.label,c=o.target);var d=Lh(r,o,i),h=d||jh(s),m=!h("as");return function(){var y=arguments,v=i&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(l!==void 0&&v.push("label:"+l+";"),y[0]==null||y[0].raw===void 0)v.push.apply(v,y);else{v.push(y[0][0]);for(var k=y.length,T=1;T<k;T++)v.push(y[T],y[0][T])}var S=dg(function(b,C,$){var U=m&&b.as||s,D="",A=[],E=b;if(b.theme==null){E={};for(var M in b)E[M]=b[M];E.theme=L.useContext(Qs)}typeof b.className=="string"?D=pb(C.registered,A,b.className):b.className!=null&&(D=b.className+" ");var F=Ys(v.concat(A),C.registered,E);D+=C.key+"-"+F.name,c!==void 0&&(D+=" "+c);var ee=m&&d===void 0?jh(U):h,se={};for(var x in b)m&&x==="as"||ee(x)&&(se[x]=b[x]);return se.className=D,$&&(se.ref=$),L.createElement(L.Fragment,null,L.createElement(Ob,{cache:C,serialized:F,isStringTag:typeof U=="string"}),L.createElement(U,se))});return S.displayName=l!==void 0?l:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",S.defaultProps=r.defaultProps,S.__emotion_real=S,S.__emotion_base=s,S.__emotion_styles=v,S.__emotion_forwardProp=d,Object.defineProperty(S,"toString",{value:function(){return c===void 0&&Rb?"NO_COMPONENT_SELECTOR":"."+c}}),S.withComponent=function(b,C){return t(b,Ke({},o,C,{shouldForwardProp:Lh(S,C,!0)})).apply(void 0,v)},S}},_b=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Tc=Tb.bind();_b.forEach(function(t){Tc[t]=Tc(t)});function Ab(t){return t==null||Object.keys(t).length===0}function zb(t){const{styles:r,defaultTheme:o={}}=t,i=typeof r=="function"?s=>r(Ab(s)?o:s):r;return Y.jsx(kb,{styles:i})}/**
 * @mui/styled-engine v6.1.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function pg(t,r){return Tc(t,r)}function Nb(t,r){Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=r(t.__emotion_styles))}const Ih=[];function Bh(t){return Ih[0]=t,Ys(Ih)}const Mb=t=>{const r=Object.keys(t).map(o=>({key:o,val:t[o]}))||[];return r.sort((o,i)=>o.val-i.val),r.reduce((o,i)=>({...o,[i.key]:i.val}),{})};function $b(t){const{values:r={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:o="px",step:i=5,...s}=t,l=Mb(r),c=Object.keys(l);function d(k){return`@media (min-width:${typeof r[k]=="number"?r[k]:k}${o})`}function h(k){return`@media (max-width:${(typeof r[k]=="number"?r[k]:k)-i/100}${o})`}function m(k,T){const S=c.indexOf(T);return`@media (min-width:${typeof r[k]=="number"?r[k]:k}${o}) and (max-width:${(S!==-1&&typeof r[c[S]]=="number"?r[c[S]]:T)-i/100}${o})`}function y(k){return c.indexOf(k)+1<c.length?m(k,c[c.indexOf(k)+1]):d(k)}function v(k){const T=c.indexOf(k);return T===0?d(c[1]):T===c.length-1?h(c[T]):m(k,c[c.indexOf(k)+1]).replace("@media","@media not all and")}return{keys:c,values:l,up:d,down:h,between:m,only:y,not:v,unit:o,...s}}const Db={borderRadius:4};function hg(t=8,r=of({spacing:t})){if(t.mui)return t;const o=(...i)=>(i.length===0?[1]:i).map(l=>{const c=r(l);return typeof c=="number"?`${c}px`:c}).join(" ");return o.mui=!0,o}function jb(t,r){var i;const o=this;if(o.vars){if(!((i=o.colorSchemes)!=null&&i[t])||typeof o.getColorSchemeSelector!="function")return{};let s=o.getColorSchemeSelector(t);return s==="&"?r:((s.includes("data-")||s.includes("."))&&(s=`*:where(${s.replace(/\s*&$/,"")}) &`),{[s]:r})}return o.palette.mode===t?r:{}}function Zi(t={},...r){const{breakpoints:o={},palette:i={},spacing:s,shape:l={},...c}=t,d=$b(o),h=hg(s);let m=Et({breakpoints:d,direction:"ltr",components:{},palette:{mode:"light",...i},spacing:h,shape:{...Db,...l}},c);return m=Fv(m),m.applyStyles=jb,m=r.reduce((y,v)=>Et(y,v),m),m.unstable_sxConfig={...Xi,...c==null?void 0:c.unstable_sxConfig},m.unstable_sx=function(v){return vr({sx:v,theme:this})},m}function Lb(t){return Object.keys(t).length===0}function mg(t=null){const r=L.useContext(Qs);return!r||Lb(r)?t:r}const Ib=Zi();function Xs(t=Ib){return mg(t)}const Fh=t=>t,Bb=()=>{let t=Fh;return{configure(r){t=r},generate(r){return t(r)},reset(){t=Fh}}},gg=Bb();function Fb(t={}){const{themeId:r,defaultTheme:o,defaultClassName:i="MuiBox-root",generateClassName:s}=t,l=pg("div",{shouldForwardProp:d=>d!=="theme"&&d!=="sx"&&d!=="as"})(vr);return L.forwardRef(function(h,m){const y=Xs(o),{className:v,component:k="div",...T}=sf(h);return Y.jsx(l,{as:k,ref:m,className:Me(v,s?s(i):i),theme:r&&y[r]||y,...T})})}const Ub={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Rt(t,r,o="Mui"){const i=Ub[r];return i?`${o}-${i}`:`${gg.generate(t)}-${r}`}function Lt(t,r,o="Mui"){const i={};return r.forEach(s=>{i[s]=Rt(t,s,o)}),i}function yg(t){const{variants:r,...o}=t,i={variants:r,style:Bh(o),isProcessed:!0};return i.style===o||r&&r.forEach(s=>{typeof s.style!="function"&&(s.style=Bh(s.style))}),i}const qb=Zi();function sc(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}function Hb(t){return t?(r,o)=>o[t]:null}function Vb(t,r,o){t.theme=Gb(t.theme)?o:t.theme[r]||t.theme}function Cs(t,r){const o=typeof r=="function"?r(t):r;if(Array.isArray(o))return o.flatMap(i=>Cs(t,i));if(Array.isArray(o==null?void 0:o.variants)){let i;if(o.isProcessed)i=o.style;else{const{variants:s,...l}=o;i=l}return vg(t,o.variants,[i])}return o!=null&&o.isProcessed?o.style:o}function vg(t,r,o=[]){var s;let i;e:for(let l=0;l<r.length;l+=1){const c=r[l];if(typeof c.props=="function"){if(i??(i={...t,...t.ownerState,ownerState:t.ownerState}),!c.props(i))continue}else for(const d in c.props)if(t[d]!==c.props[d]&&((s=t.ownerState)==null?void 0:s[d])!==c.props[d])continue e;typeof c.style=="function"?(i??(i={...t,...t.ownerState,ownerState:t.ownerState}),o.push(c.style(i))):o.push(c.style)}return o}function bg(t={}){const{themeId:r,defaultTheme:o=qb,rootShouldForwardProp:i=sc,slotShouldForwardProp:s=sc}=t;function l(d){Vb(d,r,o)}return(d,h={})=>{Nb(d,E=>E.filter(M=>M!==vr));const{name:m,slot:y,skipVariantsResolver:v,skipSx:k,overridesResolver:T=Hb(Yb(y)),...S}=h,b=v!==void 0?v:y&&y!=="Root"&&y!=="root"||!1,C=k||!1;let $=sc;y==="Root"||y==="root"?$=i:y?$=s:Kb(d)&&($=void 0);const U=pg(d,{shouldForwardProp:$,label:Wb(),...S}),D=E=>{if(typeof E=="function"&&E.__emotion_real!==E)return function(F){return Cs(F,E)};if(Pn(E)){const M=yg(E);return M.variants?function(ee){return Cs(ee,M)}:M.style}return E},A=(...E)=>{const M=[],F=E.map(D),ee=[];if(M.push(l),m&&T&&ee.push(function(te){var be,we;const ie=(we=(be=te.theme.components)==null?void 0:be[m])==null?void 0:we.styleOverrides;if(!ie)return null;const ge={};for(const G in ie)ge[G]=Cs(te,ie[G]);return T(te,ge)}),m&&!b&&ee.push(function(te){var ge,be;const le=te.theme,ie=(be=(ge=le==null?void 0:le.components)==null?void 0:ge[m])==null?void 0:be.variants;return ie?vg(te,ie):null}),C||ee.push(vr),Array.isArray(F[0])){const Q=F.shift(),te=new Array(M.length).fill(""),le=new Array(ee.length).fill("");let ie;ie=[...te,...Q,...le],ie.raw=[...te,...Q.raw,...le],M.unshift(ie)}const se=[...M,...F,...ee],x=U(...se);return d.muiName&&(x.muiName=d.muiName),x};return U.withConfig&&(A.withConfig=U.withConfig),A}}function Wb(t,r){return void 0}function Gb(t){for(const r in t)return!1;return!0}function Kb(t){return typeof t=="string"&&t.charCodeAt(0)>96}function Yb(t){return t&&t.charAt(0).toLowerCase()+t.slice(1)}const xg=bg();function Hi(t,r){const o={...r};for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)){const s=i;if(s==="components"||s==="slots")o[s]={...t[s],...o[s]};else if(s==="componentsProps"||s==="slotProps"){const l=t[s],c=r[s];if(!c)o[s]=l||{};else if(!l)o[s]=c;else{o[s]={...c};for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d)){const h=d;o[s][h]=Hi(l[h],c[h])}}}else o[s]===void 0&&(o[s]=t[s])}return o}function Qb(t){const{theme:r,name:o,props:i}=t;return!r||!r.components||!r.components[o]||!r.components[o].defaultProps?i:Hi(r.components[o].defaultProps,i)}function Sg({props:t,name:r,defaultTheme:o,themeId:i}){let s=Xs(o);return i&&(s=s[i]||s),Qb({theme:s,name:r,props:t})}const Xb=typeof window<"u"?L.useLayoutEffect:L.useEffect;function Jb(t,r=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER){return Math.max(r,Math.min(t,o))}function df(t,r=0,o=1){return Jb(t,r,o)}function Zb(t){t=t.slice(1);const r=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let o=t.match(r);return o&&o[0].length===1&&(o=o.map(i=>i+i)),o?`rgb${o.length===4?"a":""}(${o.map((i,s)=>s<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function br(t){if(t.type)return t;if(t.charAt(0)==="#")return br(Zb(t));const r=t.indexOf("("),o=t.substring(0,r);if(!["rgb","rgba","hsl","hsla","color"].includes(o))throw new Error(Wr(9,t));let i=t.substring(r+1,t.length-1),s;if(o==="color"){if(i=i.split(" "),s=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(s))throw new Error(Wr(10,s))}else i=i.split(",");return i=i.map(l=>parseFloat(l)),{type:o,values:i,colorSpace:s}}const ex=t=>{const r=br(t);return r.values.slice(0,3).map((o,i)=>r.type.includes("hsl")&&i!==0?`${o}%`:o).join(" ")},Ai=(t,r)=>{try{return ex(t)}catch{return t}};function Js(t){const{type:r,colorSpace:o}=t;let{values:i}=t;return r.includes("rgb")?i=i.map((s,l)=>l<3?parseInt(s,10):s):r.includes("hsl")&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),r.includes("color")?i=`${o} ${i.join(" ")}`:i=`${i.join(", ")}`,`${r}(${i})`}function wg(t){t=br(t);const{values:r}=t,o=r[0],i=r[1]/100,s=r[2]/100,l=i*Math.min(s,1-s),c=(m,y=(m+o/30)%12)=>s-l*Math.max(Math.min(y-3,9-y,1),-1);let d="rgb";const h=[Math.round(c(0)*255),Math.round(c(8)*255),Math.round(c(4)*255)];return t.type==="hsla"&&(d+="a",h.push(r[3])),Js({type:d,values:h})}function _c(t){t=br(t);let r=t.type==="hsl"||t.type==="hsla"?br(wg(t)).values:t.values;return r=r.map(o=>(t.type!=="color"&&(o/=255),o<=.03928?o/12.92:((o+.055)/1.055)**2.4)),Number((.2126*r[0]+.7152*r[1]+.0722*r[2]).toFixed(3))}function tx(t,r){const o=_c(t),i=_c(r);return(Math.max(o,i)+.05)/(Math.min(o,i)+.05)}function gr(t,r){return t=br(t),r=df(r),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${r}`:t.values[3]=r,Js(t)}function ps(t,r,o){try{return gr(t,r)}catch{return t}}function pf(t,r){if(t=br(t),r=df(r),t.type.includes("hsl"))t.values[2]*=1-r;else if(t.type.includes("rgb")||t.type.includes("color"))for(let o=0;o<3;o+=1)t.values[o]*=1-r;return Js(t)}function $e(t,r,o){try{return pf(t,r)}catch{return t}}function hf(t,r){if(t=br(t),r=df(r),t.type.includes("hsl"))t.values[2]+=(100-t.values[2])*r;else if(t.type.includes("rgb"))for(let o=0;o<3;o+=1)t.values[o]+=(255-t.values[o])*r;else if(t.type.includes("color"))for(let o=0;o<3;o+=1)t.values[o]+=(1-t.values[o])*r;return Js(t)}function De(t,r,o){try{return hf(t,r)}catch{return t}}function nx(t,r=.15){return _c(t)>.5?pf(t,r):hf(t,r)}function hs(t,r,o){try{return nx(t,r)}catch{return t}}function rx(t,r){var o,i,s;return L.isValidElement(t)&&r.indexOf(t.type.muiName??((s=(i=(o=t.type)==null?void 0:o._payload)==null?void 0:i.value)==null?void 0:s.muiName))!==-1}function ox(t,r){typeof t=="function"?t(r):t&&(t.current=r)}function ms(t){const r=L.useRef(t);return Xb(()=>{r.current=t}),L.useRef((...o)=>(0,r.current)(...o)).current}function _s(...t){return L.useMemo(()=>t.every(r=>r==null)?null:r=>{t.forEach(o=>{ox(o,r)})},t)}const Uh={};function kg(t,r){const o=L.useRef(Uh);return o.current===Uh&&(o.current=t(r)),o}const ix=[];function ax(t){L.useEffect(t,ix)}class mf{constructor(){Pi(this,"currentId",null);Pi(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});Pi(this,"disposeEffect",()=>this.clear)}static create(){return new mf}start(r,o){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,o()},r)}}function sx(){const t=kg(mf.create).current;return ax(t.disposeEffect),t}function qh(t){try{return t.matches(":focus-visible")}catch{}return!1}function lx(t){return typeof t=="string"}function ux(t,r,o){return t===void 0||lx(t)?r:{...r,ownerState:{...r.ownerState,...o}}}function cx(t,r=[]){if(t===void 0)return{};const o={};return Object.keys(t).filter(i=>i.match(/^on[A-Z]/)&&typeof t[i]=="function"&&!r.includes(i)).forEach(i=>{o[i]=t[i]}),o}function Hh(t){if(t===void 0)return{};const r={};return Object.keys(t).filter(o=>!(o.match(/^on[A-Z]/)&&typeof t[o]=="function")).forEach(o=>{r[o]=t[o]}),r}function fx(t){const{getSlotProps:r,additionalProps:o,externalSlotProps:i,externalForwardedProps:s,className:l}=t;if(!r){const T=Me(o==null?void 0:o.className,l,s==null?void 0:s.className,i==null?void 0:i.className),S={...o==null?void 0:o.style,...s==null?void 0:s.style,...i==null?void 0:i.style},b={...o,...s,...i};return T.length>0&&(b.className=T),Object.keys(S).length>0&&(b.style=S),{props:b,internalRef:void 0}}const c=cx({...s,...i}),d=Hh(i),h=Hh(s),m=r(c),y=Me(m==null?void 0:m.className,o==null?void 0:o.className,l,s==null?void 0:s.className,i==null?void 0:i.className),v={...m==null?void 0:m.style,...o==null?void 0:o.style,...s==null?void 0:s.style,...i==null?void 0:i.style},k={...m,...o,...h,...d};return y.length>0&&(k.className=y),Object.keys(v).length>0&&(k.style=v),{props:k,internalRef:m.ref}}function dx(t,r,o){return typeof t=="function"?t(r,o):t}function px(t){var r;return parseInt(L.version,10)>=19?((r=t==null?void 0:t.props)==null?void 0:r.ref)||null:(t==null?void 0:t.ref)||null}const Cg=L.createContext(null);function Zs(){return L.useContext(Cg)}const hx=typeof Symbol=="function"&&Symbol.for,Pg=hx?Symbol.for("mui.nested"):"__THEME_NESTED__";function mx(t,r){return typeof r=="function"?r(t):{...t,...r}}function gx(t){const{children:r,theme:o}=t,i=Zs(),s=L.useMemo(()=>{const l=i===null?{...o}:mx(i,o);return l!=null&&(l[Pg]=i!==null),l},[o,i]);return Y.jsx(Cg.Provider,{value:s,children:r})}const yx=L.createContext();function vx({value:t,...r}){return Y.jsx(yx.Provider,{value:t??!0,...r})}const Eg=L.createContext(void 0);function bx({value:t,children:r}){return Y.jsx(Eg.Provider,{value:t,children:r})}function xx(t){const{theme:r,name:o,props:i}=t;if(!r||!r.components||!r.components[o])return i;const s=r.components[o];return s.defaultProps?Hi(s.defaultProps,i):!s.styleOverrides&&!s.variants?Hi(s,i):i}function Sx({props:t,name:r}){const o=L.useContext(Eg);return xx({props:t,name:r,theme:{components:o}})}const Vh={};function Wh(t,r,o,i=!1){return L.useMemo(()=>{const s=t&&r[t]||r;if(typeof o=="function"){const l=o(s),c=t?{...r,[t]:l}:l;return i?()=>c:c}return t?{...r,[t]:o}:{...r,...o}},[t,r,o,i])}function Rg(t){const{children:r,theme:o,themeId:i}=t,s=mg(Vh),l=Zs()||Vh,c=Wh(i,s,o),d=Wh(i,l,o,!0),h=(i?c[i]:c).direction==="rtl";return Y.jsx(gx,{theme:d,children:Y.jsx(Qs.Provider,{value:c,children:Y.jsx(vx,{value:h,children:Y.jsx(bx,{value:i?c[i].components:c.components,children:r})})})})}const Gh={theme:void 0};function wx(t){let r,o;return function(s){let l=r;return(l===void 0||s.theme!==o)&&(Gh.theme=s.theme,l=yg(t(Gh)),r=l,o=s.theme),l}}const gf="mode",yf="color-scheme",kx="data-color-scheme";function Cx(t){const{defaultMode:r="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:i="dark",modeStorageKey:s=gf,colorSchemeStorageKey:l=yf,attribute:c=kx,colorSchemeNode:d="document.documentElement",nonce:h}=t||{};let m="",y=c;if(c==="class"&&(y=".%s"),c==="data"&&(y="[data-%s]"),y.startsWith(".")){const k=y.substring(1);m+=`${d}.classList.remove('${k}'.replace('%s', light), '${k}'.replace('%s', dark));
      ${d}.classList.add('${k}'.replace('%s', colorScheme));`}const v=y.match(/\[([^\]]+)\]/);if(v){const[k,T]=v[1].split("=");T||(m+=`${d}.removeAttribute('${k}'.replace('%s', light));
      ${d}.removeAttribute('${k}'.replace('%s', dark));`),m+=`
      ${d}.setAttribute('${k}'.replace('%s', colorScheme), ${T?`${T}.replace('%s', colorScheme)`:'""'});`}else m+=`${d}.setAttribute('${y}', colorScheme);`;return Y.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?h:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${r}';
  const dark = localStorage.getItem('${l}-dark') || '${i}';
  const light = localStorage.getItem('${l}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${m}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function Kh(t){if(typeof window<"u"&&typeof window.matchMedia=="function"&&t==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Og(t,r){if(t.mode==="light"||t.mode==="system"&&t.systemMode==="light")return r("light");if(t.mode==="dark"||t.mode==="system"&&t.systemMode==="dark")return r("dark")}function Px(t){return Og(t,r=>{if(r==="light")return t.lightColorScheme;if(r==="dark")return t.darkColorScheme})}function lc(t,r){if(typeof window>"u")return;let o;try{o=localStorage.getItem(t)||void 0,o||localStorage.setItem(t,r)}catch{}return o||r}function Ex(t){const{defaultMode:r="light",defaultLightColorScheme:o,defaultDarkColorScheme:i,supportedColorSchemes:s=[],modeStorageKey:l=gf,colorSchemeStorageKey:c=yf,storageWindow:d=typeof window>"u"?void 0:window,noSsr:h=!1}=t,m=s.join(","),y=s.length>1,[v,k]=L.useState(()=>{const A=lc(l,r),E=lc(`${c}-light`,o),M=lc(`${c}-dark`,i);return{mode:A,systemMode:Kh(A),lightColorScheme:E,darkColorScheme:M}}),[T,S]=L.useState(h||!y);L.useEffect(()=>{S(!0)},[]);const b=Px(v),C=L.useCallback(A=>{k(E=>{if(A===E.mode)return E;const M=A??r;try{localStorage.setItem(l,M)}catch{}return{...E,mode:M,systemMode:Kh(M)}})},[l,r]),$=L.useCallback(A=>{A?typeof A=="string"?A&&!m.includes(A)?console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`):k(E=>{const M={...E};return Og(E,F=>{try{localStorage.setItem(`${c}-${F}`,A)}catch{}F==="light"&&(M.lightColorScheme=A),F==="dark"&&(M.darkColorScheme=A)}),M}):k(E=>{const M={...E},F=A.light===null?o:A.light,ee=A.dark===null?i:A.dark;if(F)if(!m.includes(F))console.error(`\`${F}\` does not exist in \`theme.colorSchemes\`.`);else{M.lightColorScheme=F;try{localStorage.setItem(`${c}-light`,F)}catch{}}if(ee)if(!m.includes(ee))console.error(`\`${ee}\` does not exist in \`theme.colorSchemes\`.`);else{M.darkColorScheme=ee;try{localStorage.setItem(`${c}-dark`,ee)}catch{}}return M}):k(E=>{try{localStorage.setItem(`${c}-light`,o),localStorage.setItem(`${c}-dark`,i)}catch{}return{...E,lightColorScheme:o,darkColorScheme:i}})},[m,c,o,i]),U=L.useCallback(A=>{v.mode==="system"&&k(E=>{const M=A!=null&&A.matches?"dark":"light";return E.systemMode===M?E:{...E,systemMode:M}})},[v.mode]),D=L.useRef(U);return D.current=U,L.useEffect(()=>{if(typeof window.matchMedia!="function"||!y)return;const A=(...M)=>D.current(...M),E=window.matchMedia("(prefers-color-scheme: dark)");return E.addListener(A),A(E),()=>{E.removeListener(A)}},[y]),L.useEffect(()=>{if(d&&y){const A=E=>{const M=E.newValue;typeof E.key=="string"&&E.key.startsWith(c)&&(!M||m.match(M))&&(E.key.endsWith("light")&&$({light:M}),E.key.endsWith("dark")&&$({dark:M})),E.key===l&&(!M||["light","dark","system"].includes(M))&&C(M||r)};return d.addEventListener("storage",A),()=>{d.removeEventListener("storage",A)}}},[$,C,l,c,m,r,d,y]),{...v,mode:T?v.mode:void 0,systemMode:T?v.systemMode:void 0,colorScheme:T?b:void 0,setMode:C,setColorScheme:$}}const Rx="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Ox(t){const{themeId:r,theme:o={},modeStorageKey:i=gf,colorSchemeStorageKey:s=yf,disableTransitionOnChange:l=!1,defaultColorScheme:c,resolveTheme:d}=t,h={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},m=L.createContext(void 0),y=()=>L.useContext(m)||h;function v(b){var he,Wn,Cr,Gn,Pr;const{children:C,theme:$,modeStorageKey:U=i,colorSchemeStorageKey:D=s,disableTransitionOnChange:A=l,storageWindow:E=typeof window>"u"?void 0:window,documentNode:M=typeof document>"u"?void 0:document,colorSchemeNode:F=typeof document>"u"?void 0:document.documentElement,disableNestedContext:ee=!1,disableStyleSheetGeneration:se=!1,defaultMode:x="system",noSsr:Q}=b,te=L.useRef(!1),le=Zs(),ie=L.useContext(m),ge=!!ie&&!ee,be=L.useMemo(()=>$||(typeof o=="function"?o():o),[$]),we=be[r],{colorSchemes:G={},components:re={},cssVarPrefix:X,...O}=we||be,q=Object.keys(G).filter(Le=>!!G[Le]).join(","),pe=L.useMemo(()=>q.split(","),[q]),de=typeof c=="string"?c:c.light,Se=typeof c=="string"?c:c.dark,ke=G[de]&&G[Se]?x:((Wn=(he=G[O.defaultColorScheme])==null?void 0:he.palette)==null?void 0:Wn.mode)||((Cr=O.palette)==null?void 0:Cr.mode),{mode:Te,setMode:Ce,systemMode:ze,lightColorScheme:ut,darkColorScheme:On,colorScheme:Kr,setColorScheme:Tn}=Ex({supportedColorSchemes:pe,defaultLightColorScheme:de,defaultDarkColorScheme:Se,modeStorageKey:U,colorSchemeStorageKey:D,defaultMode:ke,storageWindow:E,noSsr:Q});let _n=Te,ct=Kr;ge&&(_n=ie.mode,ct=ie.colorScheme);const wr=ct||O.defaultColorScheme,kr=((Gn=O.generateThemeVars)==null?void 0:Gn.call(O))||O.vars,tt={...O,components:re,colorSchemes:G,cssVarPrefix:X,vars:kr};if(typeof tt.generateSpacing=="function"&&(tt.spacing=tt.generateSpacing()),wr){const Le=G[wr];Le&&typeof Le=="object"&&Object.keys(Le).forEach(Ve=>{Le[Ve]&&typeof Le[Ve]=="object"?tt[Ve]={...tt[Ve],...Le[Ve]}:tt[Ve]=Le[Ve]})}const kt=O.colorSchemeSelector;L.useEffect(()=>{if(ct&&F&&kt&&kt!=="media"){const Le=kt;let Ve=kt;if(Le==="class"&&(Ve=".%s"),Le==="data"&&(Ve="[data-%s]"),Le!=null&&Le.startsWith("data-")&&!Le.includes("%s")&&(Ve=`[${Le}="%s"]`),Ve.startsWith("."))F.classList.remove(...pe.map(mn=>Ve.substring(1).replace("%s",mn))),F.classList.add(Ve.substring(1).replace("%s",ct));else{const mn=Ve.replace("%s",ct).match(/\[([^\]]+)\]/);if(mn){const[Kn,Uo]=mn[1].split("=");Uo||pe.forEach(ra=>{F.removeAttribute(Kn.replace(ct,ra))}),F.setAttribute(Kn,Uo?Uo.replace(/"|'/g,""):"")}else F.setAttribute(Ve,ct)}}},[ct,kt,F,pe]),L.useEffect(()=>{let Le;if(A&&te.current&&M){const Ve=M.createElement("style");Ve.appendChild(M.createTextNode(Rx)),M.head.appendChild(Ve),window.getComputedStyle(M.body),Le=setTimeout(()=>{M.head.removeChild(Ve)},1)}return()=>{clearTimeout(Le)}},[ct,A,M]),L.useEffect(()=>(te.current=!0,()=>{te.current=!1}),[]);const An=L.useMemo(()=>({allColorSchemes:pe,colorScheme:ct,darkColorScheme:On,lightColorScheme:ut,mode:_n,setColorScheme:Tn,setMode:Ce,systemMode:ze}),[pe,ct,On,ut,_n,Tn,Ce,ze,tt.colorSchemeSelector]);let Kt=!0;(se||O.cssVariables===!1||ge&&(le==null?void 0:le.cssVarPrefix)===X)&&(Kt=!1);const Vn=Y.jsxs(L.Fragment,{children:[Y.jsx(Rg,{themeId:we?r:void 0,theme:d?d(tt):tt,children:C}),Kt&&Y.jsx(zb,{styles:((Pr=tt.generateStyleSheets)==null?void 0:Pr.call(tt))||[]})]});return ge?Vn:Y.jsx(m.Provider,{value:An,children:Vn})}const k=typeof c=="string"?c:c.light,T=typeof c=="string"?c:c.dark;return{CssVarsProvider:v,useColorScheme:y,getInitColorSchemeScript:b=>Cx({colorSchemeStorageKey:s,defaultLightColorScheme:k,defaultDarkColorScheme:T,modeStorageKey:i,...b})}}function Tx(t=""){function r(...i){if(!i.length)return"";const s=i[0];return typeof s=="string"&&!s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${t?`${t}-`:""}${s}${r(...i.slice(1))})`:`, ${s}`}return(i,...s)=>`var(--${t?`${t}-`:""}${i}${r(...s)})`}const Yh=(t,r,o,i=[])=>{let s=t;r.forEach((l,c)=>{c===r.length-1?Array.isArray(s)?s[Number(l)]=o:s&&typeof s=="object"&&(s[l]=o):s&&typeof s=="object"&&(s[l]||(s[l]=i.includes(l)?[]:{}),s=s[l])})},_x=(t,r,o)=>{function i(s,l=[],c=[]){Object.entries(s).forEach(([d,h])=>{(!o||o&&!o([...l,d]))&&h!=null&&(typeof h=="object"&&Object.keys(h).length>0?i(h,[...l,d],Array.isArray(h)?[...c,d]:c):r([...l,d],h,c))})}i(t)},Ax=(t,r)=>typeof r=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(i=>t.includes(i))||t[t.length-1].toLowerCase().includes("opacity")?r:`${r}px`:r;function uc(t,r){const{prefix:o,shouldSkipGeneratingVar:i}=r||{},s={},l={},c={};return _x(t,(d,h,m)=>{if((typeof h=="string"||typeof h=="number")&&(!i||!i(d,h))){const y=`--${o?`${o}-`:""}${d.join("-")}`,v=Ax(d,h);Object.assign(s,{[y]:v}),Yh(l,d,`var(${y})`,m),Yh(c,d,`var(${y}, ${v})`,m)}},d=>d[0]==="vars"),{css:s,vars:l,varsWithDefaults:c}}function zx(t,r={}){const{getSelector:o=C,disableCssColorScheme:i,colorSchemeSelector:s}=r,{colorSchemes:l={},components:c,defaultColorScheme:d="light",...h}=t,{vars:m,css:y,varsWithDefaults:v}=uc(h,r);let k=v;const T={},{[d]:S,...b}=l;if(Object.entries(b||{}).forEach(([D,A])=>{const{vars:E,css:M,varsWithDefaults:F}=uc(A,r);k=Et(k,F),T[D]={css:M,vars:E}}),S){const{css:D,vars:A,varsWithDefaults:E}=uc(S,r);k=Et(k,E),T[d]={css:D,vars:A}}function C(D,A){var M,F;let E=s;if(s==="class"&&(E=".%s"),s==="data"&&(E="[data-%s]"),s!=null&&s.startsWith("data-")&&!s.includes("%s")&&(E=`[${s}="%s"]`),D){if(E==="media")return t.defaultColorScheme===D?":root":{[`@media (prefers-color-scheme: ${((F=(M=l[D])==null?void 0:M.palette)==null?void 0:F.mode)||D})`]:{":root":A}};if(E)return t.defaultColorScheme===D?`:root, ${E.replace("%s",String(D))}`:E.replace("%s",String(D))}return":root"}return{vars:k,generateThemeVars:()=>{let D={...m};return Object.entries(T).forEach(([,{vars:A}])=>{D=Et(D,A)}),D},generateStyleSheets:()=>{var ee,se;const D=[],A=t.defaultColorScheme||"light";function E(x,Q){Object.keys(Q).length&&D.push(typeof x=="string"?{[x]:{...Q}}:x)}E(o(void 0,{...y}),y);const{[A]:M,...F}=T;if(M){const{css:x}=M,Q=(se=(ee=l[A])==null?void 0:ee.palette)==null?void 0:se.mode,te=!i&&Q?{colorScheme:Q,...x}:{...x};E(o(A,{...te}),te)}return Object.entries(F).forEach(([x,{css:Q}])=>{var ie,ge;const te=(ge=(ie=l[x])==null?void 0:ie.palette)==null?void 0:ge.mode,le=!i&&te?{colorScheme:te,...Q}:{...Q};E(o(x,{...le}),le)}),D}}}function Nx(t){return function(o){return t==="media"?`@media (prefers-color-scheme: ${o})`:t?t.startsWith("data-")&&!t.includes("%s")?`[${t}="${o}"] &`:t==="class"?`.${o} &`:t==="data"?`[data-${o}] &`:`${t.replace("%s",o)} &`:"&"}}const Mx=Zi(),$x=xg("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,r[`maxWidth${Ae(String(o.maxWidth))}`],o.fixed&&r.fixed,o.disableGutters&&r.disableGutters]}}),Dx=t=>Sg({props:t,name:"MuiContainer",defaultTheme:Mx}),jx=(t,r)=>{const o=h=>Rt(r,h),{classes:i,fixed:s,disableGutters:l,maxWidth:c}=t,d={root:["root",c&&`maxWidth${Ae(String(c))}`,s&&"fixed",l&&"disableGutters"]};return jt(d,o,i)};function Lx(t={}){const{createStyledComponent:r=$x,useThemeProps:o=Dx,componentName:i="MuiContainer"}=t,s=r(({theme:c,ownerState:d})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!d.disableGutters&&{paddingLeft:c.spacing(2),paddingRight:c.spacing(2),[c.breakpoints.up("sm")]:{paddingLeft:c.spacing(3),paddingRight:c.spacing(3)}}}),({theme:c,ownerState:d})=>d.fixed&&Object.keys(c.breakpoints.values).reduce((h,m)=>{const y=m,v=c.breakpoints.values[y];return v!==0&&(h[c.breakpoints.up(y)]={maxWidth:`${v}${c.breakpoints.unit}`}),h},{}),({theme:c,ownerState:d})=>({...d.maxWidth==="xs"&&{[c.breakpoints.up("xs")]:{maxWidth:Math.max(c.breakpoints.values.xs,444)}},...d.maxWidth&&d.maxWidth!=="xs"&&{[c.breakpoints.up(d.maxWidth)]:{maxWidth:`${c.breakpoints.values[d.maxWidth]}${c.breakpoints.unit}`}}}));return L.forwardRef(function(d,h){const m=o(d),{className:y,component:v="div",disableGutters:k=!1,fixed:T=!1,maxWidth:S="lg",classes:b,...C}=m,$={...m,component:v,disableGutters:k,fixed:T,maxWidth:S},U=jx($,i);return Y.jsx(s,{as:v,ownerState:$,className:Me(U.root,y),ref:h,...C})})}const Ix=(t,r)=>t.filter(o=>r.includes(o)),Lo=(t,r,o)=>{const i=t.keys[0];Array.isArray(r)?r.forEach((s,l)=>{o((c,d)=>{l<=t.keys.length-1&&(l===0?Object.assign(c,d):c[t.up(t.keys[l])]=d)},s)}):r&&typeof r=="object"?(Object.keys(r).length>t.keys.length?t.keys:Ix(t.keys,Object.keys(r))).forEach(l=>{if(t.keys.includes(l)){const c=r[l];c!==void 0&&o((d,h)=>{i===l?Object.assign(d,h):d[t.up(l)]=h},c)}}):(typeof r=="number"||typeof r=="string")&&o((s,l)=>{Object.assign(s,l)},r)};function As(t){return`--Grid-${t}Spacing`}function el(t){return`--Grid-parent-${t}Spacing`}const Qh="--Grid-columns",Mo="--Grid-parent-columns",Bx=({theme:t,ownerState:r})=>{const o={};return Lo(t.breakpoints,r.size,(i,s)=>{let l={};s==="grow"&&(l={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(l={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / var(${Mo}) - (var(${Mo}) - ${s}) * (var(${el("column")}) / var(${Mo})))`}),i(o,l)}),o},Fx=({theme:t,ownerState:r})=>{const o={};return Lo(t.breakpoints,r.offset,(i,s)=>{let l={};s==="auto"&&(l={marginLeft:"auto"}),typeof s=="number"&&(l={marginLeft:s===0?"0px":`calc(100% * ${s} / var(${Mo}) + var(${el("column")}) * ${s} / var(${Mo}))`}),i(o,l)}),o},Ux=({theme:t,ownerState:r})=>{if(!r.container)return{};const o={[Qh]:12};return Lo(t.breakpoints,r.columns,(i,s)=>{const l=s??12;i(o,{[Qh]:l,"> *":{[Mo]:l}})}),o},qx=({theme:t,ownerState:r})=>{if(!r.container)return{};const o={};return Lo(t.breakpoints,r.rowSpacing,(i,s)=>{var c;const l=typeof s=="string"?s:(c=t.spacing)==null?void 0:c.call(t,s);i(o,{[As("row")]:l,"> *":{[el("row")]:l}})}),o},Hx=({theme:t,ownerState:r})=>{if(!r.container)return{};const o={};return Lo(t.breakpoints,r.columnSpacing,(i,s)=>{var c;const l=typeof s=="string"?s:(c=t.spacing)==null?void 0:c.call(t,s);i(o,{[As("column")]:l,"> *":{[el("column")]:l}})}),o},Vx=({theme:t,ownerState:r})=>{if(!r.container)return{};const o={};return Lo(t.breakpoints,r.direction,(i,s)=>{i(o,{flexDirection:s})}),o},Wx=({ownerState:t})=>({minWidth:0,boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",...t.wrap&&t.wrap!=="wrap"&&{flexWrap:t.wrap},gap:`var(${As("row")}) var(${As("column")})`}}),Gx=t=>{const r=[];return Object.entries(t).forEach(([o,i])=>{i!==!1&&i!==void 0&&r.push(`grid-${o}-${String(i)}`)}),r},Kx=(t,r="xs")=>{function o(i){return i===void 0?!1:typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"&&i>0}if(o(t))return[`spacing-${r}-${String(t)}`];if(typeof t=="object"&&!Array.isArray(t)){const i=[];return Object.entries(t).forEach(([s,l])=>{o(l)&&i.push(`spacing-${s}-${String(l)}`)}),i}return[]},Yx=t=>t===void 0?[]:typeof t=="object"?Object.entries(t).map(([r,o])=>`direction-${r}-${o}`):[`direction-xs-${String(t)}`],Qx=Zi(),Xx=xg("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,r)=>r.root});function Jx(t){return Sg({props:t,name:"MuiGrid",defaultTheme:Qx})}function Zx(t={}){const{createStyledComponent:r=Xx,useThemeProps:o=Jx,componentName:i="MuiGrid"}=t,s=(h,m)=>{const{container:y,direction:v,spacing:k,wrap:T,size:S}=h,b={root:["root",y&&"container",T!=="wrap"&&`wrap-xs-${String(T)}`,...Yx(v),...Gx(S),...y?Kx(k,m.breakpoints.keys[0]):[]]};return jt(b,C=>Rt(i,C),{})};function l(h,m,y=()=>!0){const v={};return h===null||(Array.isArray(h)?h.forEach((k,T)=>{k!==null&&y(k)&&m.keys[T]&&(v[m.keys[T]]=k)}):typeof h=="object"?Object.keys(h).forEach(k=>{const T=h[k];T!=null&&y(T)&&(v[k]=T)}):v[m.keys[0]]=h),v}const c=r(Ux,Hx,qx,Bx,Vx,Wx,Fx),d=L.forwardRef(function(m,y){const v=Xs(),k=o(m),T=sf(k),{className:S,children:b,columns:C=12,container:$=!1,component:U="div",direction:D="row",wrap:A="wrap",size:E={},offset:M={},spacing:F=0,rowSpacing:ee=F,columnSpacing:se=F,unstable_level:x=0,...Q}=T,te=l(E,v.breakpoints,X=>X!==!1),le=l(M,v.breakpoints),ie=m.columns??(x?void 0:C),ge=m.spacing??(x?void 0:F),be=m.rowSpacing??m.spacing??(x?void 0:ee),we=m.columnSpacing??m.spacing??(x?void 0:se),G={...T,level:x,columns:ie,container:$,direction:D,wrap:A,spacing:ge,rowSpacing:be,columnSpacing:we,size:te,offset:le},re=s(G,v);return Y.jsx(c,{ref:y,as:U,ownerState:G,className:Me(re.root,S),...Q,children:L.Children.map(b,X=>{var O;return L.isValidElement(X)&&rx(X,["Grid"])&&$&&X.props.container?L.cloneElement(X,{unstable_level:((O=X.props)==null?void 0:O.unstable_level)??x+1}):X})})});return d.muiName="Grid",d}const Vi={black:"#000",white:"#fff"},eS={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},xo={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},So={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Oi={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},wo={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},ko={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Co={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function Tg(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Vi.white,default:Vi.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const tS=Tg();function _g(){return{text:{primary:Vi.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Vi.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Xh=_g();function Jh(t,r,o,i){const s=i.light||i,l=i.dark||i*1.5;t[r]||(t.hasOwnProperty(o)?t[r]=t[o]:r==="light"?t.light=hf(t.main,s):r==="dark"&&(t.dark=pf(t.main,l)))}function nS(t="light"){return t==="dark"?{main:wo[200],light:wo[50],dark:wo[400]}:{main:wo[700],light:wo[400],dark:wo[800]}}function rS(t="light"){return t==="dark"?{main:xo[200],light:xo[50],dark:xo[400]}:{main:xo[500],light:xo[300],dark:xo[700]}}function oS(t="light"){return t==="dark"?{main:So[500],light:So[300],dark:So[700]}:{main:So[700],light:So[400],dark:So[800]}}function iS(t="light"){return t==="dark"?{main:ko[400],light:ko[300],dark:ko[700]}:{main:ko[700],light:ko[500],dark:ko[900]}}function aS(t="light"){return t==="dark"?{main:Co[400],light:Co[300],dark:Co[700]}:{main:Co[800],light:Co[500],dark:Co[900]}}function sS(t="light"){return t==="dark"?{main:Oi[400],light:Oi[300],dark:Oi[700]}:{main:"#ed6c02",light:Oi[500],dark:Oi[900]}}function vf(t){const{mode:r="light",contrastThreshold:o=3,tonalOffset:i=.2,...s}=t,l=t.primary||nS(r),c=t.secondary||rS(r),d=t.error||oS(r),h=t.info||iS(r),m=t.success||aS(r),y=t.warning||sS(r);function v(b){return tx(b,Xh.text.primary)>=o?Xh.text.primary:tS.text.primary}const k=({color:b,name:C,mainShade:$=500,lightShade:U=300,darkShade:D=700})=>{if(b={...b},!b.main&&b[$]&&(b.main=b[$]),!b.hasOwnProperty("main"))throw new Error(Wr(11,C?` (${C})`:"",$));if(typeof b.main!="string")throw new Error(Wr(12,C?` (${C})`:"",JSON.stringify(b.main)));return Jh(b,"light",U,i),Jh(b,"dark",D,i),b.contrastText||(b.contrastText=v(b.main)),b};let T;return r==="light"?T=Tg():r==="dark"&&(T=_g()),Et({common:{...Vi},mode:r,primary:k({color:l,name:"primary"}),secondary:k({color:c,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:k({color:d,name:"error"}),warning:k({color:y,name:"warning"}),info:k({color:h,name:"info"}),success:k({color:m,name:"success"}),grey:eS,contrastThreshold:o,getContrastText:v,augmentColor:k,tonalOffset:i,...T},s)}function lS(t){const r={};return Object.entries(t).forEach(i=>{const[s,l]=i;typeof l=="object"&&(r[s]=`${l.fontStyle?`${l.fontStyle} `:""}${l.fontVariant?`${l.fontVariant} `:""}${l.fontWeight?`${l.fontWeight} `:""}${l.fontStretch?`${l.fontStretch} `:""}${l.fontSize||""}${l.lineHeight?`/${l.lineHeight} `:""}${l.fontFamily||""}`)}),r}function uS(t,r){return{toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}},...r}}function cS(t){return Math.round(t*1e5)/1e5}const Zh={textTransform:"uppercase"},em='"Roboto", "Helvetica", "Arial", sans-serif';function Ag(t,r){const{fontFamily:o=em,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:l=400,fontWeightMedium:c=500,fontWeightBold:d=700,htmlFontSize:h=16,allVariants:m,pxToRem:y,...v}=typeof r=="function"?r(t):r,k=i/14,T=y||(C=>`${C/h*k}rem`),S=(C,$,U,D,A)=>({fontFamily:o,fontWeight:C,fontSize:T($),lineHeight:U,...o===em?{letterSpacing:`${cS(D/$)}em`}:{},...A,...m}),b={h1:S(s,96,1.167,-1.5),h2:S(s,60,1.2,-.5),h3:S(l,48,1.167,0),h4:S(l,34,1.235,.25),h5:S(l,24,1.334,0),h6:S(c,20,1.6,.15),subtitle1:S(l,16,1.75,.15),subtitle2:S(c,14,1.57,.1),body1:S(l,16,1.5,.15),body2:S(l,14,1.43,.15),button:S(c,14,1.75,.4,Zh),caption:S(l,12,1.66,.4),overline:S(l,12,2.66,1,Zh),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Et({htmlFontSize:h,pxToRem:T,fontFamily:o,fontSize:i,fontWeightLight:s,fontWeightRegular:l,fontWeightMedium:c,fontWeightBold:d,...b},v,{clone:!1})}const fS=.2,dS=.14,pS=.12;function Ue(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${fS})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${dS})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${pS})`].join(",")}const hS=["none",Ue(0,2,1,-1,0,1,1,0,0,1,3,0),Ue(0,3,1,-2,0,2,2,0,0,1,5,0),Ue(0,3,3,-2,0,3,4,0,0,1,8,0),Ue(0,2,4,-1,0,4,5,0,0,1,10,0),Ue(0,3,5,-1,0,5,8,0,0,1,14,0),Ue(0,3,5,-1,0,6,10,0,0,1,18,0),Ue(0,4,5,-2,0,7,10,1,0,2,16,1),Ue(0,5,5,-3,0,8,10,1,0,3,14,2),Ue(0,5,6,-3,0,9,12,1,0,3,16,2),Ue(0,6,6,-3,0,10,14,1,0,4,18,3),Ue(0,6,7,-4,0,11,15,1,0,4,20,3),Ue(0,7,8,-4,0,12,17,2,0,5,22,4),Ue(0,7,8,-4,0,13,19,2,0,5,24,4),Ue(0,7,9,-4,0,14,21,2,0,5,26,4),Ue(0,8,9,-5,0,15,22,2,0,6,28,5),Ue(0,8,10,-5,0,16,24,2,0,6,30,5),Ue(0,8,11,-5,0,17,26,2,0,6,32,5),Ue(0,9,11,-5,0,18,28,2,0,7,34,6),Ue(0,9,12,-6,0,19,29,2,0,7,36,6),Ue(0,10,13,-6,0,20,31,3,0,8,38,7),Ue(0,10,13,-6,0,21,33,3,0,8,40,7),Ue(0,10,14,-6,0,22,35,3,0,8,42,7),Ue(0,11,14,-7,0,23,36,3,0,9,44,8),Ue(0,11,15,-7,0,24,38,3,0,9,46,8)],mS={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},gS={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function tm(t){return`${Math.round(t)}ms`}function yS(t){if(!t)return 0;const r=t/36;return Math.min(Math.round((4+15*r**.25+r/5)*10),3e3)}function vS(t){const r={...mS,...t.easing},o={...gS,...t.duration};return{getAutoHeightDuration:yS,create:(s=["all"],l={})=>{const{duration:c=o.standard,easing:d=r.easeInOut,delay:h=0,...m}=l;return(Array.isArray(s)?s:[s]).map(y=>`${y} ${typeof c=="string"?c:tm(c)} ${d} ${typeof h=="string"?h:tm(h)}`).join(",")},...t,easing:r,duration:o}}const bS={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function xS(t){return Pn(t)||typeof t>"u"||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)}function zg(t={}){const r={...t};function o(i){const s=Object.entries(i);for(let l=0;l<s.length;l++){const[c,d]=s[l];!xS(d)||c.startsWith("unstable_")?delete i[c]:Pn(d)&&(i[c]={...d},o(i[c]))}}return o(r),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function Ac(t={},...r){const{breakpoints:o,mixins:i={},spacing:s,palette:l={},transitions:c={},typography:d={},shape:h,...m}=t;if(t.vars)throw new Error(Wr(20));const y=vf(l),v=Zi(t);let k=Et(v,{mixins:uS(v.breakpoints,i),palette:y,shadows:hS.slice(),typography:Ag(y,d),transitions:vS(c),zIndex:{...bS}});return k=Et(k,m),k=r.reduce((T,S)=>Et(T,S),k),k.unstable_sxConfig={...Xi,...m==null?void 0:m.unstable_sxConfig},k.unstable_sx=function(S){return vr({sx:S,theme:this})},k.toRuntimeSource=zg,k}function zc(t){let r;return t<1?r=5.11916*t**2:r=4.5*Math.log(t+1)+2,Math.round(r*10)/1e3}const SS=[...Array(25)].map((t,r)=>{if(r===0)return"none";const o=zc(r);return`linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`});function Ng(t){return{inputPlaceholder:t==="dark"?.5:.42,inputUnderline:t==="dark"?.7:.42,switchTrackDisabled:t==="dark"?.2:.12,switchTrack:t==="dark"?.3:.38}}function Mg(t){return t==="dark"?SS:[]}function wS(t){const{palette:r={mode:"light"},opacity:o,overlays:i,...s}=t,l=vf(r);return{palette:l,opacity:{...Ng(l.mode),...o},overlays:i||Mg(l.mode),...s}}function kS(t){var r;return!!t[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!t[0].match(/sxConfig$/)||t[0]==="palette"&&!!((r=t[1])!=null&&r.match(/(mode|contrastThreshold|tonalOffset)/))}const CS=t=>[...[...Array(25)].map((r,o)=>`--${t?`${t}-`:""}overlays-${o}`),`--${t?`${t}-`:""}palette-AppBar-darkBg`,`--${t?`${t}-`:""}palette-AppBar-darkColor`],PS=t=>(r,o)=>{const i=t.rootSelector||":root",s=t.colorSchemeSelector;let l=s;if(s==="class"&&(l=".%s"),s==="data"&&(l="[data-%s]"),s!=null&&s.startsWith("data-")&&!s.includes("%s")&&(l=`[${s}="%s"]`),t.defaultColorScheme===r){if(r==="dark"){const c={};return CS(t.cssVarPrefix).forEach(d=>{c[d]=o[d],delete o[d]}),l==="media"?{[i]:o,"@media (prefers-color-scheme: dark)":{[i]:c}}:l?{[l.replace("%s",r)]:c,[`${i}, ${l.replace("%s",r)}`]:o}:{[i]:{...o,...c}}}if(l&&l!=="media")return`${i}, ${l.replace("%s",String(r))}`}else if(r){if(l==="media")return{[`@media (prefers-color-scheme: ${String(r)})`]:{[i]:o}};if(l)return l.replace("%s",String(r))}return i};function ES(t,r){r.forEach(o=>{t[o]||(t[o]={})})}function I(t,r,o){!t[r]&&o&&(t[r]=o)}function zi(t){return!t||!t.startsWith("hsl")?t:wg(t)}function Bn(t,r){`${r}Channel`in t||(t[`${r}Channel`]=Ai(zi(t[r]),`MUI: Can't create \`palette.${r}Channel\` because \`palette.${r}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${r}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function RS(t){return typeof t=="number"?`${t}px`:typeof t=="string"||typeof t=="function"||Array.isArray(t)?t:"8px"}const Sn=t=>{try{return t()}catch{}},OS=(t="mui")=>Tx(t);function cc(t,r,o,i){if(!r)return;r=r===!0?{}:r;const s=i==="dark"?"dark":"light";if(!o){t[i]=wS({...r,palette:{mode:s,...r==null?void 0:r.palette}});return}const{palette:l,...c}=Ac({...o,palette:{mode:s,...r==null?void 0:r.palette}});return t[i]={...r,palette:l,opacity:{...Ng(s),...r==null?void 0:r.opacity},overlays:(r==null?void 0:r.overlays)||Mg(s)},c}function TS(t={},...r){const{colorSchemes:o={light:!0},defaultColorScheme:i,disableCssColorScheme:s=!1,cssVarPrefix:l="mui",shouldSkipGeneratingVar:c=kS,colorSchemeSelector:d=o.light&&o.dark?"media":void 0,rootSelector:h=":root",...m}=t,y=Object.keys(o)[0],v=i||(o.light&&y!=="light"?"light":y),k=OS(l),{[v]:T,light:S,dark:b,...C}=o,$={...C};let U=T;if((v==="dark"&&!("dark"in o)||v==="light"&&!("light"in o))&&(U=!0),!U)throw new Error(Wr(21,v));const D=cc($,U,m,v);S&&!$.light&&cc($,S,void 0,"light"),b&&!$.dark&&cc($,b,void 0,"dark");let A={defaultColorScheme:v,...D,cssVarPrefix:l,colorSchemeSelector:d,rootSelector:h,getCssVar:k,colorSchemes:$,font:{...lS(D.typography),...D.font},spacing:RS(m.spacing)};Object.keys(A.colorSchemes).forEach(se=>{const x=A.colorSchemes[se].palette,Q=te=>{const le=te.split("-"),ie=le[1],ge=le[2];return k(te,x[ie][ge])};if(x.mode==="light"&&(I(x.common,"background","#fff"),I(x.common,"onBackground","#000")),x.mode==="dark"&&(I(x.common,"background","#000"),I(x.common,"onBackground","#fff")),ES(x,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),x.mode==="light"){I(x.Alert,"errorColor",$e(x.error.light,.6)),I(x.Alert,"infoColor",$e(x.info.light,.6)),I(x.Alert,"successColor",$e(x.success.light,.6)),I(x.Alert,"warningColor",$e(x.warning.light,.6)),I(x.Alert,"errorFilledBg",Q("palette-error-main")),I(x.Alert,"infoFilledBg",Q("palette-info-main")),I(x.Alert,"successFilledBg",Q("palette-success-main")),I(x.Alert,"warningFilledBg",Q("palette-warning-main")),I(x.Alert,"errorFilledColor",Sn(()=>x.getContrastText(x.error.main))),I(x.Alert,"infoFilledColor",Sn(()=>x.getContrastText(x.info.main))),I(x.Alert,"successFilledColor",Sn(()=>x.getContrastText(x.success.main))),I(x.Alert,"warningFilledColor",Sn(()=>x.getContrastText(x.warning.main))),I(x.Alert,"errorStandardBg",De(x.error.light,.9)),I(x.Alert,"infoStandardBg",De(x.info.light,.9)),I(x.Alert,"successStandardBg",De(x.success.light,.9)),I(x.Alert,"warningStandardBg",De(x.warning.light,.9)),I(x.Alert,"errorIconColor",Q("palette-error-main")),I(x.Alert,"infoIconColor",Q("palette-info-main")),I(x.Alert,"successIconColor",Q("palette-success-main")),I(x.Alert,"warningIconColor",Q("palette-warning-main")),I(x.AppBar,"defaultBg",Q("palette-grey-100")),I(x.Avatar,"defaultBg",Q("palette-grey-400")),I(x.Button,"inheritContainedBg",Q("palette-grey-300")),I(x.Button,"inheritContainedHoverBg",Q("palette-grey-A100")),I(x.Chip,"defaultBorder",Q("palette-grey-400")),I(x.Chip,"defaultAvatarColor",Q("palette-grey-700")),I(x.Chip,"defaultIconColor",Q("palette-grey-700")),I(x.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),I(x.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),I(x.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),I(x.LinearProgress,"primaryBg",De(x.primary.main,.62)),I(x.LinearProgress,"secondaryBg",De(x.secondary.main,.62)),I(x.LinearProgress,"errorBg",De(x.error.main,.62)),I(x.LinearProgress,"infoBg",De(x.info.main,.62)),I(x.LinearProgress,"successBg",De(x.success.main,.62)),I(x.LinearProgress,"warningBg",De(x.warning.main,.62)),I(x.Skeleton,"bg",`rgba(${Q("palette-text-primaryChannel")} / 0.11)`),I(x.Slider,"primaryTrack",De(x.primary.main,.62)),I(x.Slider,"secondaryTrack",De(x.secondary.main,.62)),I(x.Slider,"errorTrack",De(x.error.main,.62)),I(x.Slider,"infoTrack",De(x.info.main,.62)),I(x.Slider,"successTrack",De(x.success.main,.62)),I(x.Slider,"warningTrack",De(x.warning.main,.62));const te=hs(x.background.default,.8);I(x.SnackbarContent,"bg",te),I(x.SnackbarContent,"color",Sn(()=>x.getContrastText(te))),I(x.SpeedDialAction,"fabHoverBg",hs(x.background.paper,.15)),I(x.StepConnector,"border",Q("palette-grey-400")),I(x.StepContent,"border",Q("palette-grey-400")),I(x.Switch,"defaultColor",Q("palette-common-white")),I(x.Switch,"defaultDisabledColor",Q("palette-grey-100")),I(x.Switch,"primaryDisabledColor",De(x.primary.main,.62)),I(x.Switch,"secondaryDisabledColor",De(x.secondary.main,.62)),I(x.Switch,"errorDisabledColor",De(x.error.main,.62)),I(x.Switch,"infoDisabledColor",De(x.info.main,.62)),I(x.Switch,"successDisabledColor",De(x.success.main,.62)),I(x.Switch,"warningDisabledColor",De(x.warning.main,.62)),I(x.TableCell,"border",De(ps(x.divider,1),.88)),I(x.Tooltip,"bg",ps(x.grey[700],.92))}if(x.mode==="dark"){I(x.Alert,"errorColor",De(x.error.light,.6)),I(x.Alert,"infoColor",De(x.info.light,.6)),I(x.Alert,"successColor",De(x.success.light,.6)),I(x.Alert,"warningColor",De(x.warning.light,.6)),I(x.Alert,"errorFilledBg",Q("palette-error-dark")),I(x.Alert,"infoFilledBg",Q("palette-info-dark")),I(x.Alert,"successFilledBg",Q("palette-success-dark")),I(x.Alert,"warningFilledBg",Q("palette-warning-dark")),I(x.Alert,"errorFilledColor",Sn(()=>x.getContrastText(x.error.dark))),I(x.Alert,"infoFilledColor",Sn(()=>x.getContrastText(x.info.dark))),I(x.Alert,"successFilledColor",Sn(()=>x.getContrastText(x.success.dark))),I(x.Alert,"warningFilledColor",Sn(()=>x.getContrastText(x.warning.dark))),I(x.Alert,"errorStandardBg",$e(x.error.light,.9)),I(x.Alert,"infoStandardBg",$e(x.info.light,.9)),I(x.Alert,"successStandardBg",$e(x.success.light,.9)),I(x.Alert,"warningStandardBg",$e(x.warning.light,.9)),I(x.Alert,"errorIconColor",Q("palette-error-main")),I(x.Alert,"infoIconColor",Q("palette-info-main")),I(x.Alert,"successIconColor",Q("palette-success-main")),I(x.Alert,"warningIconColor",Q("palette-warning-main")),I(x.AppBar,"defaultBg",Q("palette-grey-900")),I(x.AppBar,"darkBg",Q("palette-background-paper")),I(x.AppBar,"darkColor",Q("palette-text-primary")),I(x.Avatar,"defaultBg",Q("palette-grey-600")),I(x.Button,"inheritContainedBg",Q("palette-grey-800")),I(x.Button,"inheritContainedHoverBg",Q("palette-grey-700")),I(x.Chip,"defaultBorder",Q("palette-grey-700")),I(x.Chip,"defaultAvatarColor",Q("palette-grey-300")),I(x.Chip,"defaultIconColor",Q("palette-grey-300")),I(x.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),I(x.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),I(x.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),I(x.LinearProgress,"primaryBg",$e(x.primary.main,.5)),I(x.LinearProgress,"secondaryBg",$e(x.secondary.main,.5)),I(x.LinearProgress,"errorBg",$e(x.error.main,.5)),I(x.LinearProgress,"infoBg",$e(x.info.main,.5)),I(x.LinearProgress,"successBg",$e(x.success.main,.5)),I(x.LinearProgress,"warningBg",$e(x.warning.main,.5)),I(x.Skeleton,"bg",`rgba(${Q("palette-text-primaryChannel")} / 0.13)`),I(x.Slider,"primaryTrack",$e(x.primary.main,.5)),I(x.Slider,"secondaryTrack",$e(x.secondary.main,.5)),I(x.Slider,"errorTrack",$e(x.error.main,.5)),I(x.Slider,"infoTrack",$e(x.info.main,.5)),I(x.Slider,"successTrack",$e(x.success.main,.5)),I(x.Slider,"warningTrack",$e(x.warning.main,.5));const te=hs(x.background.default,.98);I(x.SnackbarContent,"bg",te),I(x.SnackbarContent,"color",Sn(()=>x.getContrastText(te))),I(x.SpeedDialAction,"fabHoverBg",hs(x.background.paper,.15)),I(x.StepConnector,"border",Q("palette-grey-600")),I(x.StepContent,"border",Q("palette-grey-600")),I(x.Switch,"defaultColor",Q("palette-grey-300")),I(x.Switch,"defaultDisabledColor",Q("palette-grey-600")),I(x.Switch,"primaryDisabledColor",$e(x.primary.main,.55)),I(x.Switch,"secondaryDisabledColor",$e(x.secondary.main,.55)),I(x.Switch,"errorDisabledColor",$e(x.error.main,.55)),I(x.Switch,"infoDisabledColor",$e(x.info.main,.55)),I(x.Switch,"successDisabledColor",$e(x.success.main,.55)),I(x.Switch,"warningDisabledColor",$e(x.warning.main,.55)),I(x.TableCell,"border",$e(ps(x.divider,1),.68)),I(x.Tooltip,"bg",ps(x.grey[700],.92))}Bn(x.background,"default"),Bn(x.background,"paper"),Bn(x.common,"background"),Bn(x.common,"onBackground"),Bn(x,"divider"),Object.keys(x).forEach(te=>{const le=x[te];le&&typeof le=="object"&&(le.main&&I(x[te],"mainChannel",Ai(zi(le.main))),le.light&&I(x[te],"lightChannel",Ai(zi(le.light))),le.dark&&I(x[te],"darkChannel",Ai(zi(le.dark))),le.contrastText&&I(x[te],"contrastTextChannel",Ai(zi(le.contrastText))),te==="text"&&(Bn(x[te],"primary"),Bn(x[te],"secondary")),te==="action"&&(le.active&&Bn(x[te],"active"),le.selected&&Bn(x[te],"selected")))})}),A=r.reduce((se,x)=>Et(se,x),A);const E={prefix:l,disableCssColorScheme:s,shouldSkipGeneratingVar:c,getSelector:PS(A)},{vars:M,generateThemeVars:F,generateStyleSheets:ee}=zx(A,E);return A.vars=M,Object.entries(A.colorSchemes[A.defaultColorScheme]).forEach(([se,x])=>{A[se]=x}),A.generateThemeVars=F,A.generateStyleSheets=ee,A.generateSpacing=function(){return hg(m.spacing,of(this))},A.getColorSchemeSelector=Nx(d),A.spacing=A.generateSpacing(),A.shouldSkipGeneratingVar=c,A.unstable_sxConfig={...Xi,...m==null?void 0:m.unstable_sxConfig},A.unstable_sx=function(x){return vr({sx:x,theme:this})},A.toRuntimeSource=zg,A}function nm(t,r,o){t.colorSchemes&&o&&(t.colorSchemes[r]={...o!==!0&&o,palette:vf({...o===!0?{}:o.palette,mode:r})})}function tl(t={},...r){const{palette:o,cssVariables:i=!1,colorSchemes:s=o?void 0:{light:!0},defaultColorScheme:l=o==null?void 0:o.mode,...c}=t,d=l||"light",h=s==null?void 0:s[d],m={...s,...o?{[d]:{...typeof h!="boolean"&&h,palette:o}}:void 0};if(i===!1){if(!("colorSchemes"in t))return Ac(t,...r);let y=o;"palette"in t||m[d]&&(m[d]!==!0?y=m[d].palette:d==="dark"&&(y={mode:"dark"}));const v=Ac({...t,palette:y},...r);return v.defaultColorScheme=d,v.colorSchemes=m,v.palette.mode==="light"&&(v.colorSchemes.light={...m.light!==!0&&m.light,palette:v.palette},nm(v,"dark",m.dark)),v.palette.mode==="dark"&&(v.colorSchemes.dark={...m.dark!==!0&&m.dark,palette:v.palette},nm(v,"light",m.light)),v}return!o&&!("light"in m)&&d==="light"&&(m.light=!0),TS({...c,colorSchemes:m,defaultColorScheme:d,...typeof i!="boolean"&&i},...r)}const $g=tl(),Un="$$material";function Dg(){const t=Xs($g);return t[Un]||t}function _S(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const jg=t=>_S(t)&&t!=="classes",st=bg({themeId:Un,defaultTheme:$g,rootShouldForwardProp:jg});function AS(){return sf}const Sr=wx;function Ot(t){return Sx(t)}function zS(t){return typeof t.main=="string"}function NS(t,r=[]){if(!zS(t))return!1;for(const o of r)if(!t.hasOwnProperty(o)||typeof t[o]!="string")return!1;return!0}function bf(t=[]){return([,r])=>r&&NS(r,t)}function MS(t){return Rt("MuiPaper",t)}Lt("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const $S=t=>{const{square:r,elevation:o,variant:i,classes:s}=t,l={root:["root",i,!r&&"rounded",i==="elevation"&&`elevation${o}`]};return jt(l,MS,s)},DS=st("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,r[o.variant],!o.square&&r.rounded,o.variant==="elevation"&&r[`elevation${o.elevation}`]]}})(Sr(({theme:t})=>({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow"),variants:[{props:({ownerState:r})=>!r.square,style:{borderRadius:t.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(t.vars||t).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),Lg=L.forwardRef(function(r,o){var T;const i=Ot({props:r,name:"MuiPaper"}),s=Dg(),{className:l,component:c="div",elevation:d=1,square:h=!1,variant:m="elevation",...y}=i,v={...i,component:c,elevation:d,square:h,variant:m},k=$S(v);return Y.jsx(DS,{as:c,ownerState:v,className:Me(k.root,l),ref:o,...y,style:{...m==="elevation"&&{"--Paper-shadow":(s.vars||s).shadows[d],...s.vars&&{"--Paper-overlay":(T=s.vars.overlays)==null?void 0:T[d]},...!s.vars&&s.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${gr("#fff",zc(d))}, ${gr("#fff",zc(d))})`}},...y.style}})});function jS(t){return Rt("MuiAppBar",t)}Lt("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const LS=t=>{const{color:r,position:o,classes:i}=t,s={root:["root",`color${Ae(r)}`,`position${Ae(o)}`]};return jt(s,jS,i)},rm=(t,r)=>t?`${t==null?void 0:t.replace(")","")}, ${r})`:r,IS=st(Lg,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,r[`position${Ae(o.position)}`],r[`color${Ae(o.color)}`]]}})(Sr(({theme:t})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[100],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[100]),...t.applyStyles("dark",{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[900],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[900])})}},...Object.entries(t.palette).filter(bf(["contrastText"])).map(([r])=>({props:{color:r},style:{"--AppBar-background":(t.vars??t).palette[r].main,"--AppBar-color":(t.vars??t).palette[r].contrastText}})),{props:r=>r.enableColorOnDark===!0&&!["inherit","transparent"].includes(r.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:r=>r.enableColorOnDark===!1&&!["inherit","transparent"].includes(r.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundColor:t.vars?rm(t.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:t.vars?rm(t.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundImage:"none"})}}]}))),BS=L.forwardRef(function(r,o){const i=Ot({props:r,name:"MuiAppBar"}),{className:s,color:l="primary",enableColorOnDark:c=!1,position:d="fixed",...h}=i,m={...i,color:l,position:d,enableColorOnDark:c},y=LS(m);return Y.jsx(IS,{square:!0,component:"header",ownerState:m,elevation:4,className:Me(y.root,s,d==="fixed"&&"mui-fixed"),ref:o,...h})});function FS(t){return Rt("MuiToolbar",t)}Lt("MuiToolbar",["root","gutters","regular","dense"]);const US=t=>{const{classes:r,disableGutters:o,variant:i}=t;return jt({root:["root",!o&&"gutters",i]},FS,r)},qS=st("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,!o.disableGutters&&r.gutters,r[o.variant]]}})(Sr(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:r})=>!r.disableGutters,style:{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:t.mixins.toolbar}]}))),HS=L.forwardRef(function(r,o){const i=Ot({props:r,name:"MuiToolbar"}),{className:s,component:l="div",disableGutters:c=!1,variant:d="regular",...h}=i,m={...i,component:l,disableGutters:c,variant:d},y=US(m);return Y.jsx(qS,{as:l,className:Me(y.root,s),ref:o,ownerState:m,...h})});function VS(t){return Rt("MuiTypography",t)}Lt("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const WS={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},GS=AS(),KS=t=>{const{align:r,gutterBottom:o,noWrap:i,paragraph:s,variant:l,classes:c}=t,d={root:["root",l,t.align!=="inherit"&&`align${Ae(r)}`,o&&"gutterBottom",i&&"noWrap",s&&"paragraph"]};return jt(d,VS,c)},YS=st("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,o.variant&&r[o.variant],o.align!=="inherit"&&r[`align${Ae(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})(Sr(({theme:t})=>{var r;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([o,i])=>o!=="inherit"&&i&&typeof i=="object").map(([o,i])=>({props:{variant:o},style:i})),...Object.entries(t.palette).filter(bf()).map(([o])=>({props:{color:o},style:{color:(t.vars||t).palette[o].main}})),...Object.entries(((r=t.palette)==null?void 0:r.text)||{}).filter(([,o])=>typeof o=="string").map(([o])=>({props:{color:`text${Ae(o)}`},style:{color:(t.vars||t).palette.text[o]}})),{props:({ownerState:o})=>o.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:o})=>o.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:o})=>o.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:o})=>o.paragraph,style:{marginBottom:16}}]}})),om={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Ht=L.forwardRef(function(r,o){const{color:i,...s}=Ot({props:r,name:"MuiTypography"}),l=!WS[i],c=GS({...s,...l&&{color:i}}),{align:d="inherit",className:h,component:m,gutterBottom:y=!1,noWrap:v=!1,paragraph:k=!1,variant:T="body1",variantMapping:S=om,...b}=c,C={...c,align:d,color:i,className:h,component:m,gutterBottom:y,noWrap:v,paragraph:k,variant:T,variantMapping:S},$=m||(k?"p":S[T]||om[T])||"span",U=KS(C);return Y.jsx(YS,{as:$,ref:o,className:Me(U.root,h),...b,ownerState:C,style:{...d!=="inherit"&&{"--Typography-textAlign":d},...b.style}})}),Ig=Lx({createStyledComponent:st("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,r[`maxWidth${Ae(String(o.maxWidth))}`],o.fixed&&r.fixed,o.disableGutters&&r.disableGutters]}}),useThemeProps:t=>Ot({props:t,name:"MuiContainer"})});function QS(t){return Rt("MuiSvgIcon",t)}Lt("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const XS=t=>{const{color:r,fontSize:o,classes:i}=t,s={root:["root",r!=="inherit"&&`color${Ae(r)}`,`fontSize${Ae(o)}`]};return jt(s,QS,i)},JS=st("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,o.color!=="inherit"&&r[`color${Ae(o.color)}`],r[`fontSize${Ae(o.fontSize)}`]]}})(Sr(({theme:t})=>{var r,o,i,s,l,c,d,h,m,y,v,k,T,S;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(s=(r=t.transitions)==null?void 0:r.create)==null?void 0:s.call(r,"fill",{duration:(i=(o=(t.vars??t).transitions)==null?void 0:o.duration)==null?void 0:i.shorter}),variants:[{props:b=>!b.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((c=(l=t.typography)==null?void 0:l.pxToRem)==null?void 0:c.call(l,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((h=(d=t.typography)==null?void 0:d.pxToRem)==null?void 0:h.call(d,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((y=(m=t.typography)==null?void 0:m.pxToRem)==null?void 0:y.call(m,35))||"2.1875rem"}},...Object.entries((t.vars??t).palette).filter(([,b])=>b&&b.main).map(([b])=>{var C,$;return{props:{color:b},style:{color:($=(C=(t.vars??t).palette)==null?void 0:C[b])==null?void 0:$.main}}}),{props:{color:"action"},style:{color:(k=(v=(t.vars??t).palette)==null?void 0:v.action)==null?void 0:k.active}},{props:{color:"disabled"},style:{color:(S=(T=(t.vars??t).palette)==null?void 0:T.action)==null?void 0:S.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),zs=L.forwardRef(function(r,o){const i=Ot({props:r,name:"MuiSvgIcon"}),{children:s,className:l,color:c="inherit",component:d="svg",fontSize:h="medium",htmlColor:m,inheritViewBox:y=!1,titleAccess:v,viewBox:k="0 0 24 24",...T}=i,S=L.isValidElement(s)&&s.type==="svg",b={...i,color:c,component:d,fontSize:h,instanceFontSize:r.fontSize,inheritViewBox:y,viewBox:k,hasSvgAsChild:S},C={};y||(C.viewBox=k);const $=XS(b);return Y.jsxs(JS,{as:d,className:Me($.root,l),focusable:"false",color:m,"aria-hidden":v?void 0:!0,role:v?"img":void 0,ref:o,...C,...T,...S&&s.props,ownerState:b,children:[S?s.props.children:s,v?Y.jsx("title",{children:v}):null]})});zs&&(zs.muiName="SvgIcon");function ZS(t,r){function o(i,s){return Y.jsx(zs,{"data-testid":`${r}Icon`,ref:s,...i,children:t})}return o.muiName=zs.muiName,L.memo(L.forwardRef(o))}const ew=ZS(Y.jsx("path",{d:"M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63M9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"}),"Adb");function tw(){return Y.jsx(BS,{position:"static",children:Y.jsx(Ig,{maxWidth:"xl",children:Y.jsxs(HS,{disableGutters:!0,children:[Y.jsx(ew,{sx:{display:{xs:"none",md:"flex"},mr:1}}),Y.jsx(Ht,{variant:"h6",noWrap:!0,component:"a",href:"#app-bar-with-responsive-menu",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"UNIR México"})]})})})}function im({theme:t,...r}){const o=Un in t?t[Un]:void 0;return Y.jsx(Rg,{...r,themeId:o?Un:void 0,theme:o||t})}const gs={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:nw,useColorScheme:yP,getInitColorSchemeScript:vP}=Ox({themeId:Un,theme:()=>tl({cssVariables:!0}),colorSchemeStorageKey:gs.colorSchemeStorageKey,modeStorageKey:gs.modeStorageKey,defaultColorScheme:{light:gs.defaultLightColorScheme,dark:gs.defaultDarkColorScheme},resolveTheme:t=>{const r={...t,typography:Ag(t.palette,t.typography)};return r.unstable_sx=function(i){return vr({sx:i,theme:this})},r}}),rw=nw;function ow({theme:t,...r}){return typeof t=="function"?Y.jsx(im,{theme:t,...r}):"colorSchemes"in(Un in t?t[Un]:t)?Y.jsx(rw,{theme:t,...r}):Y.jsx(im,{theme:t,...r})}function xf(t,r){if(t==null)return{};var o={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(r.includes(i))continue;o[i]=t[i]}return o}function Nc(t,r){return Nc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},Nc(t,r)}function nl(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,Nc(t,r)}var iw=Ym();const ys=Km(iw),am={disabled:!1},Ns=qe.createContext(null);var aw=function(r){return r.scrollTop},Ni="unmounted",Ir="exited",Br="entering",_o="entered",Mc="exiting",Hn=function(t){nl(r,t);function r(i,s){var l;l=t.call(this,i,s)||this;var c=s,d=c&&!c.isMounting?i.enter:i.appear,h;return l.appearStatus=null,i.in?d?(h=Ir,l.appearStatus=Br):h=_o:i.unmountOnExit||i.mountOnEnter?h=Ni:h=Ir,l.state={status:h},l.nextCallback=null,l}r.getDerivedStateFromProps=function(s,l){var c=s.in;return c&&l.status===Ni?{status:Ir}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(s){var l=null;if(s!==this.props){var c=this.state.status;this.props.in?c!==Br&&c!==_o&&(l=Br):(c===Br||c===_o)&&(l=Mc)}this.updateStatus(!1,l)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var s=this.props.timeout,l,c,d;return l=c=d=s,s!=null&&typeof s!="number"&&(l=s.exit,c=s.enter,d=s.appear!==void 0?s.appear:c),{exit:l,enter:c,appear:d}},o.updateStatus=function(s,l){if(s===void 0&&(s=!1),l!==null)if(this.cancelNextCallback(),l===Br){if(this.props.unmountOnExit||this.props.mountOnEnter){var c=this.props.nodeRef?this.props.nodeRef.current:ys.findDOMNode(this);c&&aw(c)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ir&&this.setState({status:Ni})},o.performEnter=function(s){var l=this,c=this.props.enter,d=this.context?this.context.isMounting:s,h=this.props.nodeRef?[d]:[ys.findDOMNode(this),d],m=h[0],y=h[1],v=this.getTimeouts(),k=d?v.appear:v.enter;if(!s&&!c||am.disabled){this.safeSetState({status:_o},function(){l.props.onEntered(m)});return}this.props.onEnter(m,y),this.safeSetState({status:Br},function(){l.props.onEntering(m,y),l.onTransitionEnd(k,function(){l.safeSetState({status:_o},function(){l.props.onEntered(m,y)})})})},o.performExit=function(){var s=this,l=this.props.exit,c=this.getTimeouts(),d=this.props.nodeRef?void 0:ys.findDOMNode(this);if(!l||am.disabled){this.safeSetState({status:Ir},function(){s.props.onExited(d)});return}this.props.onExit(d),this.safeSetState({status:Mc},function(){s.props.onExiting(d),s.onTransitionEnd(c.exit,function(){s.safeSetState({status:Ir},function(){s.props.onExited(d)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(s,l){l=this.setNextCallback(l),this.setState(s,l)},o.setNextCallback=function(s){var l=this,c=!0;return this.nextCallback=function(d){c&&(c=!1,l.nextCallback=null,s(d))},this.nextCallback.cancel=function(){c=!1},this.nextCallback},o.onTransitionEnd=function(s,l){this.setNextCallback(l);var c=this.props.nodeRef?this.props.nodeRef.current:ys.findDOMNode(this),d=s==null&&!this.props.addEndListener;if(!c||d){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[c,this.nextCallback],m=h[0],y=h[1];this.props.addEndListener(m,y)}s!=null&&setTimeout(this.nextCallback,s)},o.render=function(){var s=this.state.status;if(s===Ni)return null;var l=this.props,c=l.children;l.in,l.mountOnEnter,l.unmountOnExit,l.appear,l.enter,l.exit,l.timeout,l.addEndListener,l.onEnter,l.onEntering,l.onEntered,l.onExit,l.onExiting,l.onExited,l.nodeRef;var d=xf(l,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return qe.createElement(Ns.Provider,{value:null},typeof c=="function"?c(s,d):qe.cloneElement(qe.Children.only(c),d))},r}(qe.Component);Hn.contextType=Ns;Hn.propTypes={};function Po(){}Hn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Po,onEntering:Po,onEntered:Po,onExit:Po,onExiting:Po,onExited:Po};Hn.UNMOUNTED=Ni;Hn.EXITED=Ir;Hn.ENTERING=Br;Hn.ENTERED=_o;Hn.EXITING=Mc;function $c(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Sf(t,r){var o=function(l){return r&&L.isValidElement(l)?r(l):l},i=Object.create(null);return t&&L.Children.map(t,function(s){return s}).forEach(function(s){i[s.key]=o(s)}),i}function sw(t,r){t=t||{},r=r||{};function o(y){return y in r?r[y]:t[y]}var i=Object.create(null),s=[];for(var l in t)l in r?s.length&&(i[l]=s,s=[]):s.push(l);var c,d={};for(var h in r){if(i[h])for(c=0;c<i[h].length;c++){var m=i[h][c];d[i[h][c]]=o(m)}d[h]=o(h)}for(c=0;c<s.length;c++)d[s[c]]=o(s[c]);return d}function Ur(t,r,o){return o[r]!=null?o[r]:t.props[r]}function lw(t,r){return Sf(t.children,function(o){return L.cloneElement(o,{onExited:r.bind(null,o),in:!0,appear:Ur(o,"appear",t),enter:Ur(o,"enter",t),exit:Ur(o,"exit",t)})})}function uw(t,r,o){var i=Sf(t.children),s=sw(r,i);return Object.keys(s).forEach(function(l){var c=s[l];if(L.isValidElement(c)){var d=l in r,h=l in i,m=r[l],y=L.isValidElement(m)&&!m.props.in;h&&(!d||y)?s[l]=L.cloneElement(c,{onExited:o.bind(null,c),in:!0,exit:Ur(c,"exit",t),enter:Ur(c,"enter",t)}):!h&&d&&!y?s[l]=L.cloneElement(c,{in:!1}):h&&d&&L.isValidElement(m)&&(s[l]=L.cloneElement(c,{onExited:o.bind(null,c),in:m.props.in,exit:Ur(c,"exit",t),enter:Ur(c,"enter",t)}))}}),s}var cw=Object.values||function(t){return Object.keys(t).map(function(r){return t[r]})},fw={component:"div",childFactory:function(r){return r}},wf=function(t){nl(r,t);function r(i,s){var l;l=t.call(this,i,s)||this;var c=l.handleExited.bind($c(l));return l.state={contextValue:{isMounting:!0},handleExited:c,firstRender:!0},l}var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(s,l){var c=l.children,d=l.handleExited,h=l.firstRender;return{children:h?lw(s,d):uw(s,c,d),firstRender:!1}},o.handleExited=function(s,l){var c=Sf(this.props.children);s.key in c||(s.props.onExited&&s.props.onExited(l),this.mounted&&this.setState(function(d){var h=Ke({},d.children);return delete h[s.key],{children:h}}))},o.render=function(){var s=this.props,l=s.component,c=s.childFactory,d=xf(s,["component","childFactory"]),h=this.state.contextValue,m=cw(this.state.children).map(c);return delete d.appear,delete d.enter,delete d.exit,l===null?qe.createElement(Ns.Provider,{value:h},m):qe.createElement(Ns.Provider,{value:h},qe.createElement(l,d,m))},r}(qe.Component);wf.propTypes={};wf.defaultProps=fw;const dw=t=>t.scrollTop;function sm(t,r){const{timeout:o,easing:i,style:s={}}=t;return{duration:s.transitionDuration??(typeof o=="number"?o:o[r.mode]||0),easing:s.transitionTimingFunction??(typeof i=="object"?i[r.mode]:i),delay:s.transitionDelay}}function lm(t,r){const{className:o,elementType:i,ownerState:s,externalForwardedProps:l,getSlotOwnerState:c,internalForwardedProps:d,...h}=r,{component:m,slots:y={[t]:void 0},slotProps:v={[t]:void 0},...k}=l,T=y[t]||i,S=dx(v[t],s),{props:{component:b,...C},internalRef:$}=fx({className:o,...h,externalForwardedProps:t==="root"?k:void 0,externalSlotProps:S}),U=_s($,S==null?void 0:S.ref,r.ref),D=c?c(C):{},A={...s,...D},E=t==="root"?b||m:b,M=ux(T,{...t==="root"&&!m&&!y[t]&&d,...t!=="root"&&!y[t]&&d,...C,...E&&{as:E},ref:U},A);return Object.keys(D).forEach(F=>{delete M[F]}),[T,M]}class Ms{constructor(){Pi(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new Ms}static use(){const r=kg(Ms.create).current,[o,i]=L.useState(!1);return r.shouldMount=o,r.setShouldMount=i,L.useEffect(r.mountEffect,[o]),r}mount(){return this.mounted||(this.mounted=hw(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...r){this.mount().then(()=>{var o;return(o=this.ref.current)==null?void 0:o.start(...r)})}stop(...r){this.mount().then(()=>{var o;return(o=this.ref.current)==null?void 0:o.stop(...r)})}pulsate(...r){this.mount().then(()=>{var o;return(o=this.ref.current)==null?void 0:o.pulsate(...r)})}}function pw(){return Ms.use()}function hw(){let t,r;const o=new Promise((i,s)=>{t=i,r=s});return o.resolve=t,o.reject=r,o}function mw(t){const{className:r,classes:o,pulsate:i=!1,rippleX:s,rippleY:l,rippleSize:c,in:d,onExited:h,timeout:m}=t,[y,v]=L.useState(!1),k=Me(r,o.ripple,o.rippleVisible,i&&o.ripplePulsate),T={width:c,height:c,top:-(c/2)+l,left:-(c/2)+s},S=Me(o.child,y&&o.childLeaving,i&&o.childPulsate);return!d&&!y&&v(!0),L.useEffect(()=>{if(!d&&h!=null){const b=setTimeout(h,m);return()=>{clearTimeout(b)}}},[h,d,m]),Y.jsx("span",{className:k,style:T,children:Y.jsx("span",{className:S})})}const tn=Lt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Dc=550,gw=80,yw=ff`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,vw=ff`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,bw=ff`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,xw=st("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Sw=st(mw,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${tn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${yw};
    animation-duration: ${Dc}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${tn.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${tn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${tn.childLeaving} {
    opacity: 0;
    animation-name: ${vw};
    animation-duration: ${Dc}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${tn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${bw};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ww=L.forwardRef(function(r,o){const i=Ot({props:r,name:"MuiTouchRipple"}),{center:s=!1,classes:l={},className:c,...d}=i,[h,m]=L.useState([]),y=L.useRef(0),v=L.useRef(null);L.useEffect(()=>{v.current&&(v.current(),v.current=null)},[h]);const k=L.useRef(!1),T=sx(),S=L.useRef(null),b=L.useRef(null),C=L.useCallback(A=>{const{pulsate:E,rippleX:M,rippleY:F,rippleSize:ee,cb:se}=A;m(x=>[...x,Y.jsx(Sw,{classes:{ripple:Me(l.ripple,tn.ripple),rippleVisible:Me(l.rippleVisible,tn.rippleVisible),ripplePulsate:Me(l.ripplePulsate,tn.ripplePulsate),child:Me(l.child,tn.child),childLeaving:Me(l.childLeaving,tn.childLeaving),childPulsate:Me(l.childPulsate,tn.childPulsate)},timeout:Dc,pulsate:E,rippleX:M,rippleY:F,rippleSize:ee},y.current)]),y.current+=1,v.current=se},[l]),$=L.useCallback((A={},E={},M=()=>{})=>{const{pulsate:F=!1,center:ee=s||E.pulsate,fakeElement:se=!1}=E;if((A==null?void 0:A.type)==="mousedown"&&k.current){k.current=!1;return}(A==null?void 0:A.type)==="touchstart"&&(k.current=!0);const x=se?null:b.current,Q=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let te,le,ie;if(ee||A===void 0||A.clientX===0&&A.clientY===0||!A.clientX&&!A.touches)te=Math.round(Q.width/2),le=Math.round(Q.height/2);else{const{clientX:ge,clientY:be}=A.touches&&A.touches.length>0?A.touches[0]:A;te=Math.round(ge-Q.left),le=Math.round(be-Q.top)}if(ee)ie=Math.sqrt((2*Q.width**2+Q.height**2)/3),ie%2===0&&(ie+=1);else{const ge=Math.max(Math.abs((x?x.clientWidth:0)-te),te)*2+2,be=Math.max(Math.abs((x?x.clientHeight:0)-le),le)*2+2;ie=Math.sqrt(ge**2+be**2)}A!=null&&A.touches?S.current===null&&(S.current=()=>{C({pulsate:F,rippleX:te,rippleY:le,rippleSize:ie,cb:M})},T.start(gw,()=>{S.current&&(S.current(),S.current=null)})):C({pulsate:F,rippleX:te,rippleY:le,rippleSize:ie,cb:M})},[s,C,T]),U=L.useCallback(()=>{$({},{pulsate:!0})},[$]),D=L.useCallback((A,E)=>{if(T.clear(),(A==null?void 0:A.type)==="touchend"&&S.current){S.current(),S.current=null,T.start(0,()=>{D(A,E)});return}S.current=null,m(M=>M.length>0?M.slice(1):M),v.current=E},[T]);return L.useImperativeHandle(o,()=>({pulsate:U,start:$,stop:D}),[U,$,D]),Y.jsx(xw,{className:Me(tn.root,l.root,c),ref:b,...d,children:Y.jsx(wf,{component:null,exit:!0,children:h})})});function kw(t){return Rt("MuiButtonBase",t)}const Cw=Lt("MuiButtonBase",["root","disabled","focusVisible"]),Pw=t=>{const{disabled:r,focusVisible:o,focusVisibleClassName:i,classes:s}=t,c=jt({root:["root",r&&"disabled",o&&"focusVisible"]},kw,s);return o&&i&&(c.root+=` ${i}`),c},Ew=st("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Cw.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Bg=L.forwardRef(function(r,o){const i=Ot({props:r,name:"MuiButtonBase"}),{action:s,centerRipple:l=!1,children:c,className:d,component:h="button",disabled:m=!1,disableRipple:y=!1,disableTouchRipple:v=!1,focusRipple:k=!1,focusVisibleClassName:T,LinkComponent:S="a",onBlur:b,onClick:C,onContextMenu:$,onDragLeave:U,onFocus:D,onFocusVisible:A,onKeyDown:E,onKeyUp:M,onMouseDown:F,onMouseLeave:ee,onMouseUp:se,onTouchEnd:x,onTouchMove:Q,onTouchStart:te,tabIndex:le=0,TouchRippleProps:ie,touchRippleRef:ge,type:be,...we}=i,G=L.useRef(null),re=pw(),X=_s(re.ref,ge),[O,q]=L.useState(!1);m&&O&&q(!1),L.useImperativeHandle(s,()=>({focusVisible:()=>{q(!0),G.current.focus()}}),[]);const pe=re.shouldMount&&!y&&!m;L.useEffect(()=>{O&&k&&!y&&re.pulsate()},[y,k,O,re]);function de(he,Wn,Cr=v){return ms(Gn=>(Wn&&Wn(Gn),Cr||re[he](Gn),!0))}const Se=de("start",F),ke=de("stop",$),Te=de("stop",U),Ce=de("stop",se),ze=de("stop",he=>{O&&he.preventDefault(),ee&&ee(he)}),ut=de("start",te),On=de("stop",x),Kr=de("stop",Q),Tn=de("stop",he=>{qh(he.target)||q(!1),b&&b(he)},!1),_n=ms(he=>{G.current||(G.current=he.currentTarget),qh(he.target)&&(q(!0),A&&A(he)),D&&D(he)}),ct=()=>{const he=G.current;return h&&h!=="button"&&!(he.tagName==="A"&&he.href)},wr=ms(he=>{k&&!he.repeat&&O&&he.key===" "&&re.stop(he,()=>{re.start(he)}),he.target===he.currentTarget&&ct()&&he.key===" "&&he.preventDefault(),E&&E(he),he.target===he.currentTarget&&ct()&&he.key==="Enter"&&!m&&(he.preventDefault(),C&&C(he))}),kr=ms(he=>{k&&he.key===" "&&O&&!he.defaultPrevented&&re.stop(he,()=>{re.pulsate(he)}),M&&M(he),C&&he.target===he.currentTarget&&ct()&&he.key===" "&&!he.defaultPrevented&&C(he)});let tt=h;tt==="button"&&(we.href||we.to)&&(tt=S);const kt={};tt==="button"?(kt.type=be===void 0?"button":be,kt.disabled=m):(!we.href&&!we.to&&(kt.role="button"),m&&(kt["aria-disabled"]=m));const An=_s(o,G),Kt={...i,centerRipple:l,component:h,disabled:m,disableRipple:y,disableTouchRipple:v,focusRipple:k,tabIndex:le,focusVisible:O},Vn=Pw(Kt);return Y.jsxs(Ew,{as:tt,className:Me(Vn.root,d),ownerState:Kt,onBlur:Tn,onClick:C,onContextMenu:ke,onFocus:_n,onKeyDown:wr,onKeyUp:kr,onMouseDown:Se,onMouseLeave:ze,onMouseUp:Ce,onDragLeave:Te,onTouchEnd:On,onTouchMove:Kr,onTouchStart:ut,ref:An,tabIndex:m?-1:le,type:be,...kt,...we,children:[c,pe?Y.jsx(ww,{ref:X,center:l,...ie}):null]})}),Rw={entering:{opacity:1},entered:{opacity:1}},Ow=L.forwardRef(function(r,o){const i=Dg(),s={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{addEndListener:l,appear:c=!0,children:d,easing:h,in:m,onEnter:y,onEntered:v,onEntering:k,onExit:T,onExited:S,onExiting:b,style:C,timeout:$=s,TransitionComponent:U=Hn,...D}=r,A=L.useRef(null),E=_s(A,px(d),o),M=ie=>ge=>{if(ie){const be=A.current;ge===void 0?ie(be):ie(be,ge)}},F=M(k),ee=M((ie,ge)=>{dw(ie);const be=sm({style:C,timeout:$,easing:h},{mode:"enter"});ie.style.webkitTransition=i.transitions.create("opacity",be),ie.style.transition=i.transitions.create("opacity",be),y&&y(ie,ge)}),se=M(v),x=M(b),Q=M(ie=>{const ge=sm({style:C,timeout:$,easing:h},{mode:"exit"});ie.style.webkitTransition=i.transitions.create("opacity",ge),ie.style.transition=i.transitions.create("opacity",ge),T&&T(ie)}),te=M(S),le=ie=>{l&&l(A.current,ie)};return Y.jsx(U,{appear:c,in:m,nodeRef:A,onEnter:ee,onEntered:se,onEntering:F,onExit:Q,onExited:te,onExiting:x,addEndListener:le,timeout:$,...D,children:(ie,ge)=>L.cloneElement(d,{style:{opacity:0,visibility:ie==="exited"&&!m?"hidden":void 0,...Rw[ie],...C,...d.props.style},ref:E,...ge})})});function Tw(t){return Rt("MuiBackdrop",t)}Lt("MuiBackdrop",["root","invisible"]);const _w=t=>{const{ownerState:r,...o}=t;return o},Aw=t=>{const{classes:r,invisible:o}=t;return jt({root:["root",o&&"invisible"]},Tw,r)},zw=st("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,o.invisible&&r.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),Nw=L.forwardRef(function(r,o){const i=Ot({props:r,name:"MuiBackdrop"}),{children:s,className:l,component:c="div",invisible:d=!1,open:h,components:m={},componentsProps:y={},slotProps:v={},slots:k={},TransitionComponent:T,transitionDuration:S,...b}=i,C={...i,component:c,invisible:d},$=Aw(C),U={transition:T,root:m.Root,...k},D={...y,...v},A={slots:U,slotProps:D},[E,M]=lm("root",{elementType:zw,externalForwardedProps:A,className:Me($.root,l),ownerState:C}),[F,ee]=lm("transition",{elementType:Ow,externalForwardedProps:A,ownerState:C}),se=_w(ee);return Y.jsx(F,{in:h,timeout:S,...b,...se,children:Y.jsx(E,{"aria-hidden":!0,...M,classes:$,ref:o,children:s})})}),Mw=Lt("MuiBox",["root"]),$w=tl(),um=Fb({themeId:Un,defaultTheme:$w,defaultClassName:Mw.root,generateClassName:gg.generate});function Dw(t){return Rt("MuiButton",t)}const Eo=Lt("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),jw=L.createContext({}),Lw=L.createContext(void 0),Iw=t=>{const{color:r,disableElevation:o,fullWidth:i,size:s,variant:l,classes:c}=t,d={root:["root",l,`${l}${Ae(r)}`,`size${Ae(s)}`,`${l}Size${Ae(s)}`,`color${Ae(r)}`,o&&"disableElevation",i&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${Ae(s)}`],endIcon:["icon","endIcon",`iconSize${Ae(s)}`]},h=jt(d,Dw,c);return{...c,...h}},Fg=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],Bw=st(Bg,{shouldForwardProp:t=>jg(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,r[o.variant],r[`${o.variant}${Ae(o.color)}`],r[`size${Ae(o.size)}`],r[`${o.variant}Size${Ae(o.size)}`],o.color==="inherit"&&r.colorInherit,o.disableElevation&&r.disableElevation,o.fullWidth&&r.fullWidth]}})(Sr(({theme:t})=>{const r=t.palette.mode==="light"?t.palette.grey[300]:t.palette.grey[800],o=t.palette.mode==="light"?t.palette.grey.A100:t.palette.grey[700];return{...t.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${Eo.disabled}`]:{color:(t.vars||t).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(t.vars||t).shadows[2],"&:hover":{boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2]}},"&:active":{boxShadow:(t.vars||t).shadows[8]},[`&.${Eo.focusVisible}`]:{boxShadow:(t.vars||t).shadows[6]},[`&.${Eo.disabled}`]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${Eo.disabled}`]:{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(t.palette).filter(bf()).map(([i])=>({props:{color:i},style:{"--variant-textColor":(t.vars||t).palette[i].main,"--variant-outlinedColor":(t.vars||t).palette[i].main,"--variant-outlinedBorder":t.vars?`rgba(${t.vars.palette[i].mainChannel} / 0.5)`:gr(t.palette[i].main,.5),"--variant-containedColor":(t.vars||t).palette[i].contrastText,"--variant-containedBg":(t.vars||t).palette[i].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(t.vars||t).palette[i].dark,"--variant-textBg":t.vars?`rgba(${t.vars.palette[i].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:gr(t.palette[i].main,t.palette.action.hoverOpacity),"--variant-outlinedBorder":(t.vars||t).palette[i].main,"--variant-outlinedBg":t.vars?`rgba(${t.vars.palette[i].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:gr(t.palette[i].main,t.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":t.vars?t.vars.palette.Button.inheritContainedBg:r,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":t.vars?t.vars.palette.Button.inheritContainedHoverBg:o,"--variant-textBg":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:gr(t.palette.text.primary,t.palette.action.hoverOpacity),"--variant-outlinedBg":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:gr(t.palette.text.primary,t.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:t.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:t.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:t.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Eo.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Eo.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),Fw=st("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.startIcon,r[`iconSize${Ae(o.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...Fg]}),Uw=st("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.endIcon,r[`iconSize${Ae(o.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...Fg]}),qw=L.forwardRef(function(r,o){const i=L.useContext(jw),s=L.useContext(Lw),l=Hi(i,r),c=Ot({props:l,name:"MuiButton"}),{children:d,color:h="primary",component:m="button",className:y,disabled:v=!1,disableElevation:k=!1,disableFocusRipple:T=!1,endIcon:S,focusVisibleClassName:b,fullWidth:C=!1,size:$="medium",startIcon:U,type:D,variant:A="text",...E}=c,M={...c,color:h,component:m,disabled:v,disableElevation:k,disableFocusRipple:T,fullWidth:C,size:$,type:D,variant:A},F=Iw(M),ee=U&&Y.jsx(Fw,{className:F.startIcon,ownerState:M,children:U}),se=S&&Y.jsx(Uw,{className:F.endIcon,ownerState:M,children:S}),x=s||"";return Y.jsxs(Bw,{ownerState:M,className:Me(i.className,F.root,y,x),component:m,disabled:v,focusRipple:!T,focusVisibleClassName:Me(F.focusVisible,b),ref:o,type:D,...E,classes:F,children:[ee,d,se]})});function Hw(t){return Rt("MuiCard",t)}Lt("MuiCard",["root"]);const Vw=t=>{const{classes:r}=t;return jt({root:["root"]},Hw,r)},Ww=st(Lg,{name:"MuiCard",slot:"Root",overridesResolver:(t,r)=>r.root})({overflow:"hidden"}),Gw=L.forwardRef(function(r,o){const i=Ot({props:r,name:"MuiCard"}),{className:s,raised:l=!1,...c}=i,d={...i,raised:l},h=Vw(d);return Y.jsx(Ww,{className:Me(h.root,s),elevation:l?8:void 0,ref:o,ownerState:d,...c})});function Kw(t){return Rt("MuiCardActionArea",t)}const fc=Lt("MuiCardActionArea",["root","focusVisible","focusHighlight"]),Yw=t=>{const{classes:r}=t;return jt({root:["root"],focusHighlight:["focusHighlight"]},Kw,r)},Qw=st(Bg,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(t,r)=>r.root})(Sr(({theme:t})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${fc.focusHighlight}`]:{opacity:(t.vars||t).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${fc.focusVisible} .${fc.focusHighlight}`]:{opacity:(t.vars||t).palette.action.focusOpacity}}))),Xw=st("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(t,r)=>r.focusHighlight})(Sr(({theme:t})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}))),Jw=L.forwardRef(function(r,o){const i=Ot({props:r,name:"MuiCardActionArea"}),{children:s,className:l,focusVisibleClassName:c,...d}=i,h=i,m=Yw(h);return Y.jsxs(Qw,{className:Me(m.root,l),focusVisibleClassName:Me(c,m.focusVisible),ref:o,ownerState:h,...d,children:[s,Y.jsx(Xw,{className:m.focusHighlight,ownerState:h})]})});function Zw(t){return Rt("MuiCardActions",t)}Lt("MuiCardActions",["root","spacing"]);const ek=t=>{const{classes:r,disableSpacing:o}=t;return jt({root:["root",!o&&"spacing"]},Zw,r)},tk=st("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,!o.disableSpacing&&r.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),nk=L.forwardRef(function(r,o){const i=Ot({props:r,name:"MuiCardActions"}),{disableSpacing:s=!1,className:l,...c}=i,d={...i,disableSpacing:s},h=ek(d);return Y.jsx(tk,{className:Me(h.root,l),ownerState:d,ref:o,...c})});function rk(t){return Rt("MuiCardContent",t)}Lt("MuiCardContent",["root"]);const ok=t=>{const{classes:r}=t;return jt({root:["root"]},rk,r)},ik=st("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,r)=>r.root})({padding:16,"&:last-child":{paddingBottom:24}}),ak=L.forwardRef(function(r,o){const i=Ot({props:r,name:"MuiCardContent"}),{className:s,component:l="div",...c}=i,d={...i,component:l},h=ok(d);return Y.jsx(ik,{as:l,className:Me(h.root,s),ownerState:d,ref:o,...c})}),cm=Zx({createStyledComponent:st("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(t,r)=>r.root}),componentName:"MuiGrid2",useThemeProps:t=>Ot({props:t,name:"MuiGrid2"})}),sk=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];function lk(t={}){const{disableGlobal:r=!1,productionPrefix:o="jss",seed:i=""}=t,s=i===""?"":`${i}-`;let l=0;const c=()=>(l+=1,l);return(d,h)=>{const m=h.options.name;if(m&&m.startsWith("Mui")&&!h.options.link&&!r){if(sk.includes(d.key))return`Mui-${d.key}`;const y=`${s}${m}-${d.key}`;return!h.options.theme[Pg]||i!==""?y:`${y}-${c()}`}return`${s}${o}${c()}`}}var fm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ea=(typeof window>"u"?"undefined":fm(window))==="object"&&(typeof document>"u"?"undefined":fm(document))==="object"&&document.nodeType===9;function Wi(t){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Wi(t)}function uk(t,r){if(Wi(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var i=o.call(t,r);if(Wi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function ck(t){var r=uk(t,"string");return Wi(r)=="symbol"?r:r+""}function fk(t,r){for(var o=0;o<r.length;o++){var i=r[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,ck(i.key),i)}}function Ug(t,r,o){return r&&fk(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var dk={}.constructor;function jc(t){if(t==null||typeof t!="object")return t;if(Array.isArray(t))return t.map(jc);if(t.constructor!==dk)return t;var r={};for(var o in t)r[o]=jc(t[o]);return r}function kf(t,r,o){t===void 0&&(t="unnamed");var i=o.jss,s=jc(r),l=i.plugins.onCreateRule(t,s,o);return l||(t[0],null)}var dm=function(r,o){for(var i="",s=0;s<r.length&&r[s]!=="!important";s++)i&&(i+=o),i+=r[s];return i},Hr=function(r){if(!Array.isArray(r))return r;var o="";if(Array.isArray(r[0]))for(var i=0;i<r.length&&r[i]!=="!important";i++)o&&(o+=", "),o+=dm(r[i]," ");else o=dm(r,", ");return r[r.length-1]==="!important"&&(o+=" !important"),o};function Io(t){return t&&t.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function Ti(t,r){for(var o="",i=0;i<r;i++)o+="  ";return o+t}function Gi(t,r,o){o===void 0&&(o={});var i="";if(!r)return i;var s=o,l=s.indent,c=l===void 0?0:l,d=r.fallbacks;o.format===!1&&(c=-1/0);var h=Io(o),m=h.linebreak,y=h.space;if(t&&c++,d)if(Array.isArray(d))for(var v=0;v<d.length;v++){var k=d[v];for(var T in k){var S=k[T];S!=null&&(i&&(i+=m),i+=Ti(T+":"+y+Hr(S)+";",c))}}else for(var b in d){var C=d[b];C!=null&&(i&&(i+=m),i+=Ti(b+":"+y+Hr(C)+";",c))}for(var $ in r){var U=r[$];U!=null&&$!=="fallbacks"&&(i&&(i+=m),i+=Ti($+":"+y+Hr(U)+";",c))}return!i&&!o.allowEmpty||!t?i:(c--,i&&(i=""+m+i+m),Ti(""+t+y+"{"+i,c)+Ti("}",c))}var pk=/([[\].#*$><+~=|^:(),"'`\s])/g,pm=typeof CSS<"u"&&CSS.escape,Cf=function(t){return pm?pm(t):t.replace(pk,"\\$1")},qg=function(){function t(o,i,s){this.type="style",this.isProcessed=!1;var l=s.sheet,c=s.Renderer;this.key=o,this.options=s,this.style=i,l?this.renderer=l.renderer:c&&(this.renderer=new c)}var r=t.prototype;return r.prop=function(i,s,l){if(s===void 0)return this.style[i];var c=l?l.force:!1;if(!c&&this.style[i]===s)return this;var d=s;(!l||l.process!==!1)&&(d=this.options.jss.plugins.onChangeValue(s,i,this));var h=d==null||d===!1,m=i in this.style;if(h&&!m&&!c)return this;var y=h&&m;if(y?delete this.style[i]:this.style[i]=d,this.renderable&&this.renderer)return y?this.renderer.removeProperty(this.renderable,i):this.renderer.setProperty(this.renderable,i,d),this;var v=this.options.sheet;return v&&v.attached,this},t}(),Lc=function(t){nl(r,t);function r(i,s,l){var c;c=t.call(this,i,s,l)||this;var d=l.selector,h=l.scoped,m=l.sheet,y=l.generateId;return d?c.selectorText=d:h!==!1&&(c.id=y($c($c(c)),m),c.selectorText="."+Cf(c.id)),c}var o=r.prototype;return o.applyTo=function(s){var l=this.renderer;if(l){var c=this.toJSON();for(var d in c)l.setProperty(s,d,c[d])}return this},o.toJSON=function(){var s={};for(var l in this.style){var c=this.style[l];typeof c!="object"?s[l]=c:Array.isArray(c)&&(s[l]=Hr(c))}return s},o.toString=function(s){var l=this.options.sheet,c=l?l.options.link:!1,d=c?Ke({},s,{allowEmpty:!0}):s;return Gi(this.selectorText,this.style,d)},Ug(r,[{key:"selector",set:function(s){if(s!==this.selectorText){this.selectorText=s;var l=this.renderer,c=this.renderable;if(!(!c||!l)){var d=l.setSelector(c,s);d||l.replaceRule(c,this)}}},get:function(){return this.selectorText}}]),r}(qg),hk={onCreateRule:function(r,o,i){return r[0]==="@"||i.parent&&i.parent.type==="keyframes"?null:new Lc(r,o,i)}},dc={indent:1,children:!0},mk=/@([\w-]+)/,gk=function(){function t(o,i,s){this.type="conditional",this.isProcessed=!1,this.key=o;var l=o.match(mk);this.at=l?l[1]:"unknown",this.query=s.name||"@"+this.at,this.options=s,this.rules=new rl(Ke({},s,{parent:this}));for(var c in i)this.rules.add(c,i[c]);this.rules.process()}var r=t.prototype;return r.getRule=function(i){return this.rules.get(i)},r.indexOf=function(i){return this.rules.indexOf(i)},r.addRule=function(i,s,l){var c=this.rules.add(i,s,l);return c?(this.options.jss.plugins.onProcessRule(c),c):null},r.replaceRule=function(i,s,l){var c=this.rules.replace(i,s,l);return c&&this.options.jss.plugins.onProcessRule(c),c},r.toString=function(i){i===void 0&&(i=dc);var s=Io(i),l=s.linebreak;if(i.indent==null&&(i.indent=dc.indent),i.children==null&&(i.children=dc.children),i.children===!1)return this.query+" {}";var c=this.rules.toString(i);return c?this.query+" {"+l+c+l+"}":""},t}(),yk=/@container|@media|@supports\s+/,vk={onCreateRule:function(r,o,i){return yk.test(r)?new gk(r,o,i):null}},pc={indent:1,children:!0},bk=/@keyframes\s+([\w-]+)/,Ic=function(){function t(o,i,s){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var l=o.match(bk);l&&l[1]?this.name=l[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=s;var c=s.scoped,d=s.sheet,h=s.generateId;this.id=c===!1?this.name:Cf(h(this,d)),this.rules=new rl(Ke({},s,{parent:this}));for(var m in i)this.rules.add(m,i[m],Ke({},s,{parent:this}));this.rules.process()}var r=t.prototype;return r.toString=function(i){i===void 0&&(i=pc);var s=Io(i),l=s.linebreak;if(i.indent==null&&(i.indent=pc.indent),i.children==null&&(i.children=pc.children),i.children===!1)return this.at+" "+this.id+" {}";var c=this.rules.toString(i);return c&&(c=""+l+c+l),this.at+" "+this.id+" {"+c+"}"},t}(),xk=/@keyframes\s+/,Sk=/\$([\w-]+)/g,Bc=function(r,o){return typeof r=="string"?r.replace(Sk,function(i,s){return s in o?o[s]:i}):r},hm=function(r,o,i){var s=r[o],l=Bc(s,i);l!==s&&(r[o]=l)},wk={onCreateRule:function(r,o,i){return typeof r=="string"&&xk.test(r)?new Ic(r,o,i):null},onProcessStyle:function(r,o,i){return o.type!=="style"||!i||("animation-name"in r&&hm(r,"animation-name",i.keyframes),"animation"in r&&hm(r,"animation",i.keyframes)),r},onChangeValue:function(r,o,i){var s=i.options.sheet;if(!s)return r;switch(o){case"animation":return Bc(r,s.keyframes);case"animation-name":return Bc(r,s.keyframes);default:return r}}},kk=function(t){nl(r,t);function r(){return t.apply(this,arguments)||this}var o=r.prototype;return o.toString=function(s){var l=this.options.sheet,c=l?l.options.link:!1,d=c?Ke({},s,{allowEmpty:!0}):s;return Gi(this.key,this.style,d)},r}(qg),Ck={onCreateRule:function(r,o,i){return i.parent&&i.parent.type==="keyframes"?new kk(r,o,i):null}},Pk=function(){function t(o,i,s){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=o,this.style=i,this.options=s}var r=t.prototype;return r.toString=function(i){var s=Io(i),l=s.linebreak;if(Array.isArray(this.style)){for(var c="",d=0;d<this.style.length;d++)c+=Gi(this.at,this.style[d]),this.style[d+1]&&(c+=l);return c}return Gi(this.at,this.style,i)},t}(),Ek=/@font-face/,Rk={onCreateRule:function(r,o,i){return Ek.test(r)?new Pk(r,o,i):null}},Ok=function(){function t(o,i,s){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=o,this.style=i,this.options=s}var r=t.prototype;return r.toString=function(i){return Gi(this.key,this.style,i)},t}(),Tk={onCreateRule:function(r,o,i){return r==="@viewport"||r==="@-ms-viewport"?new Ok(r,o,i):null}},_k=function(){function t(o,i,s){this.type="simple",this.isProcessed=!1,this.key=o,this.value=i,this.options=s}var r=t.prototype;return r.toString=function(i){if(Array.isArray(this.value)){for(var s="",l=0;l<this.value.length;l++)s+=this.key+" "+this.value[l]+";",this.value[l+1]&&(s+=`
`);return s}return this.key+" "+this.value+";"},t}(),Ak={"@charset":!0,"@import":!0,"@namespace":!0},zk={onCreateRule:function(r,o,i){return r in Ak?new _k(r,o,i):null}},mm=[hk,vk,wk,Ck,Rk,Tk,zk],Nk={process:!0},gm={force:!0,process:!0},rl=function(){function t(o){this.map={},this.raw={},this.index=[],this.counter=0,this.options=o,this.classes=o.classes,this.keyframes=o.keyframes}var r=t.prototype;return r.add=function(i,s,l){var c=this.options,d=c.parent,h=c.sheet,m=c.jss,y=c.Renderer,v=c.generateId,k=c.scoped,T=Ke({classes:this.classes,parent:d,sheet:h,jss:m,Renderer:y,generateId:v,scoped:k,name:i,keyframes:this.keyframes,selector:void 0},l),S=i;i in this.raw&&(S=i+"-d"+this.counter++),this.raw[S]=s,S in this.classes&&(T.selector="."+Cf(this.classes[S]));var b=kf(S,s,T);if(!b)return null;this.register(b);var C=T.index===void 0?this.index.length:T.index;return this.index.splice(C,0,b),b},r.replace=function(i,s,l){var c=this.get(i),d=this.index.indexOf(c);c&&this.remove(c);var h=l;return d!==-1&&(h=Ke({},l,{index:d})),this.add(i,s,h)},r.get=function(i){return this.map[i]},r.remove=function(i){this.unregister(i),delete this.raw[i.key],this.index.splice(this.index.indexOf(i),1)},r.indexOf=function(i){return this.index.indexOf(i)},r.process=function(){var i=this.options.jss.plugins;this.index.slice(0).forEach(i.onProcessRule,i)},r.register=function(i){this.map[i.key]=i,i instanceof Lc?(this.map[i.selector]=i,i.id&&(this.classes[i.key]=i.id)):i instanceof Ic&&this.keyframes&&(this.keyframes[i.name]=i.id)},r.unregister=function(i){delete this.map[i.key],i instanceof Lc?(delete this.map[i.selector],delete this.classes[i.key]):i instanceof Ic&&delete this.keyframes[i.name]},r.update=function(){var i,s,l;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(i=arguments.length<=0?void 0:arguments[0],s=arguments.length<=1?void 0:arguments[1],l=arguments.length<=2?void 0:arguments[2]):(s=arguments.length<=0?void 0:arguments[0],l=arguments.length<=1?void 0:arguments[1],i=null),i)this.updateOne(this.get(i),s,l);else for(var c=0;c<this.index.length;c++)this.updateOne(this.index[c],s,l)},r.updateOne=function(i,s,l){l===void 0&&(l=Nk);var c=this.options,d=c.jss.plugins,h=c.sheet;if(i.rules instanceof t){i.rules.update(s,l);return}var m=i.style;if(d.onUpdate(s,i,h,l),l.process&&m&&m!==i.style){d.onProcessStyle(i.style,i,h);for(var y in i.style){var v=i.style[y],k=m[y];v!==k&&i.prop(y,v,gm)}for(var T in m){var S=i.style[T],b=m[T];S==null&&S!==b&&i.prop(T,null,gm)}}},r.toString=function(i){for(var s="",l=this.options.sheet,c=l?l.options.link:!1,d=Io(i),h=d.linebreak,m=0;m<this.index.length;m++){var y=this.index[m],v=y.toString(i);!v&&!c||(s&&(s+=h),s+=v)}return s},t}(),Hg=function(){function t(o,i){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=Ke({},i,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),i.Renderer&&(this.renderer=new i.Renderer(this)),this.rules=new rl(this.options);for(var s in o)this.rules.add(s,o[s]);this.rules.process()}var r=t.prototype;return r.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},r.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},r.addRule=function(i,s,l){var c=this.queue;this.attached&&!c&&(this.queue=[]);var d=this.rules.add(i,s,l);return d?(this.options.jss.plugins.onProcessRule(d),this.attached?(this.deployed&&(c?c.push(d):(this.insertRule(d),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),d):(this.deployed=!1,d)):null},r.replaceRule=function(i,s,l){var c=this.rules.get(i);if(!c)return this.addRule(i,s,l);var d=this.rules.replace(i,s,l);return d&&this.options.jss.plugins.onProcessRule(d),this.attached?(this.deployed&&this.renderer&&(d?c.renderable&&this.renderer.replaceRule(c.renderable,d):this.renderer.deleteRule(c)),d):(this.deployed=!1,d)},r.insertRule=function(i){this.renderer&&this.renderer.insertRule(i)},r.addRules=function(i,s){var l=[];for(var c in i){var d=this.addRule(c,i[c],s);d&&l.push(d)}return l},r.getRule=function(i){return this.rules.get(i)},r.deleteRule=function(i){var s=typeof i=="object"?i:this.rules.get(i);return!s||this.attached&&!s.renderable?!1:(this.rules.remove(s),this.attached&&s.renderable&&this.renderer?this.renderer.deleteRule(s.renderable):!0)},r.indexOf=function(i){return this.rules.indexOf(i)},r.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},r.update=function(){var i;return(i=this.rules).update.apply(i,arguments),this},r.updateOne=function(i,s,l){return this.rules.updateOne(i,s,l),this},r.toString=function(i){return this.rules.toString(i)},t}(),Mk=function(){function t(){this.plugins={internal:[],external:[]},this.registry={}}var r=t.prototype;return r.onCreateRule=function(i,s,l){for(var c=0;c<this.registry.onCreateRule.length;c++){var d=this.registry.onCreateRule[c](i,s,l);if(d)return d}return null},r.onProcessRule=function(i){if(!i.isProcessed){for(var s=i.options.sheet,l=0;l<this.registry.onProcessRule.length;l++)this.registry.onProcessRule[l](i,s);i.style&&this.onProcessStyle(i.style,i,s),i.isProcessed=!0}},r.onProcessStyle=function(i,s,l){for(var c=0;c<this.registry.onProcessStyle.length;c++)s.style=this.registry.onProcessStyle[c](s.style,s,l)},r.onProcessSheet=function(i){for(var s=0;s<this.registry.onProcessSheet.length;s++)this.registry.onProcessSheet[s](i)},r.onUpdate=function(i,s,l,c){for(var d=0;d<this.registry.onUpdate.length;d++)this.registry.onUpdate[d](i,s,l,c)},r.onChangeValue=function(i,s,l){for(var c=i,d=0;d<this.registry.onChangeValue.length;d++)c=this.registry.onChangeValue[d](c,s,l);return c},r.use=function(i,s){s===void 0&&(s={queue:"external"});var l=this.plugins[s.queue];l.indexOf(i)===-1&&(l.push(i),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(c,d){for(var h in d)h in c&&c[h].push(d[h]);return c},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},t}(),$k=function(){function t(){this.registry=[]}var r=t.prototype;return r.add=function(i){var s=this.registry,l=i.options.index;if(s.indexOf(i)===-1){if(s.length===0||l>=this.index){s.push(i);return}for(var c=0;c<s.length;c++)if(s[c].options.index>l){s.splice(c,0,i);return}}},r.reset=function(){this.registry=[]},r.remove=function(i){var s=this.registry.indexOf(i);this.registry.splice(s,1)},r.toString=function(i){for(var s=i===void 0?{}:i,l=s.attached,c=xf(s,["attached"]),d=Io(c),h=d.linebreak,m="",y=0;y<this.registry.length;y++){var v=this.registry[y];l!=null&&v.attached!==l||(m&&(m+=h),m+=v.toString(c))}return m},Ug(t,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),t}(),Li=new $k,Fc=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),Uc="2f1acc6c3a606b082e5eef5e54414ffb";Fc[Uc]==null&&(Fc[Uc]=0);var ym=Fc[Uc]++,vm=function(r){r===void 0&&(r={});var o=0,i=function(l,c){o+=1;var d="",h="";return c&&(c.options.classNamePrefix&&(h=c.options.classNamePrefix),c.options.jss.id!=null&&(d=String(c.options.jss.id))),r.minify?""+(h||"c")+ym+d+o:h+l.key+"-"+ym+(d?"-"+d:"")+"-"+o};return i},Vg=function(r){var o;return function(){return o||(o=r()),o}},Dk=function(r,o){try{return r.attributeStyleMap?r.attributeStyleMap.get(o):r.style.getPropertyValue(o)}catch{return""}},jk=function(r,o,i){try{var s=i;if(Array.isArray(i)&&(s=Hr(i)),r.attributeStyleMap)r.attributeStyleMap.set(o,s);else{var l=s?s.indexOf("!important"):-1,c=l>-1?s.substr(0,l-1):s;r.style.setProperty(o,c,l>-1?"important":"")}}catch{return!1}return!0},Lk=function(r,o){try{r.attributeStyleMap?r.attributeStyleMap.delete(o):r.style.removeProperty(o)}catch{}},Ik=function(r,o){return r.selectorText=o,r.selectorText===o},Wg=Vg(function(){return document.querySelector("head")});function Bk(t,r){for(var o=0;o<t.length;o++){var i=t[o];if(i.attached&&i.options.index>r.index&&i.options.insertionPoint===r.insertionPoint)return i}return null}function Fk(t,r){for(var o=t.length-1;o>=0;o--){var i=t[o];if(i.attached&&i.options.insertionPoint===r.insertionPoint)return i}return null}function Uk(t){for(var r=Wg(),o=0;o<r.childNodes.length;o++){var i=r.childNodes[o];if(i.nodeType===8&&i.nodeValue.trim()===t)return i}return null}function qk(t){var r=Li.registry;if(r.length>0){var o=Bk(r,t);if(o&&o.renderer)return{parent:o.renderer.element.parentNode,node:o.renderer.element};if(o=Fk(r,t),o&&o.renderer)return{parent:o.renderer.element.parentNode,node:o.renderer.element.nextSibling}}var i=t.insertionPoint;if(i&&typeof i=="string"){var s=Uk(i);if(s)return{parent:s.parentNode,node:s.nextSibling}}return!1}function Hk(t,r){var o=r.insertionPoint,i=qk(r);if(i!==!1&&i.parent){i.parent.insertBefore(t,i.node);return}if(o&&typeof o.nodeType=="number"){var s=o,l=s.parentNode;l&&l.insertBefore(t,s.nextSibling);return}Wg().appendChild(t)}var Vk=Vg(function(){var t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}),bm=function(r,o,i){try{"insertRule"in r?r.insertRule(o,i):"appendRule"in r&&r.appendRule(o)}catch{return!1}return r.cssRules[i]},xm=function(r,o){var i=r.cssRules.length;return o===void 0||o>i?i:o},Wk=function(){var r=document.createElement("style");return r.textContent=`
`,r},Gk=function(){function t(o){this.getPropertyValue=Dk,this.setProperty=jk,this.removeProperty=Lk,this.setSelector=Ik,this.hasInsertedRules=!1,this.cssRules=[],o&&Li.add(o),this.sheet=o;var i=this.sheet?this.sheet.options:{},s=i.media,l=i.meta,c=i.element;this.element=c||Wk(),this.element.setAttribute("data-jss",""),s&&this.element.setAttribute("media",s),l&&this.element.setAttribute("data-meta",l);var d=Vk();d&&this.element.setAttribute("nonce",d)}var r=t.prototype;return r.attach=function(){if(!(this.element.parentNode||!this.sheet)){Hk(this.element,this.sheet.options);var i=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&i&&(this.hasInsertedRules=!1,this.deploy())}},r.detach=function(){if(this.sheet){var i=this.element.parentNode;i&&i.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},r.deploy=function(){var i=this.sheet;if(i){if(i.options.link){this.insertRules(i.rules);return}this.element.textContent=`
`+i.toString()+`
`}},r.insertRules=function(i,s){for(var l=0;l<i.index.length;l++)this.insertRule(i.index[l],l,s)},r.insertRule=function(i,s,l){if(l===void 0&&(l=this.element.sheet),i.rules){var c=i,d=l;if(i.type==="conditional"||i.type==="keyframes"){var h=xm(l,s);if(d=bm(l,c.toString({children:!1}),h),d===!1)return!1;this.refCssRule(i,h,d)}return this.insertRules(c.rules,d),d}var m=i.toString();if(!m)return!1;var y=xm(l,s),v=bm(l,m,y);return v===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(i,y,v),v)},r.refCssRule=function(i,s,l){i.renderable=l,i.options.parent instanceof Hg&&this.cssRules.splice(s,0,l)},r.deleteRule=function(i){var s=this.element.sheet,l=this.indexOf(i);return l===-1?!1:(s.deleteRule(l),this.cssRules.splice(l,1),!0)},r.indexOf=function(i){return this.cssRules.indexOf(i)},r.replaceRule=function(i,s){var l=this.indexOf(i);return l===-1?!1:(this.element.sheet.deleteRule(l),this.cssRules.splice(l,1),this.insertRule(s,l))},r.getRules=function(){return this.element.sheet.cssRules},t}(),Kk=0,Yk=function(){function t(o){this.id=Kk++,this.version="10.10.0",this.plugins=new Mk,this.options={id:{minify:!1},createGenerateId:vm,Renderer:ea?Gk:null,plugins:[]},this.generateId=vm({minify:!1});for(var i=0;i<mm.length;i++)this.plugins.use(mm[i],{queue:"internal"});this.setup(o)}var r=t.prototype;return r.setup=function(i){return i===void 0&&(i={}),i.createGenerateId&&(this.options.createGenerateId=i.createGenerateId),i.id&&(this.options.id=Ke({},this.options.id,i.id)),(i.createGenerateId||i.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),i.insertionPoint!=null&&(this.options.insertionPoint=i.insertionPoint),"Renderer"in i&&(this.options.Renderer=i.Renderer),i.plugins&&this.use.apply(this,i.plugins),this},r.createStyleSheet=function(i,s){s===void 0&&(s={});var l=s,c=l.index;typeof c!="number"&&(c=Li.index===0?0:Li.index+1);var d=new Hg(i,Ke({},s,{jss:this,generateId:s.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:c}));return this.plugins.onProcessSheet(d),d},r.removeStyleSheet=function(i){return i.detach(),Li.remove(i),this},r.createRule=function(i,s,l){if(s===void 0&&(s={}),l===void 0&&(l={}),typeof i=="object")return this.createRule(void 0,i,s);var c=Ke({},l,{name:i,jss:this,Renderer:this.options.Renderer});c.generateId||(c.generateId=this.generateId),c.classes||(c.classes={}),c.keyframes||(c.keyframes={});var d=kf(i,s,c);return d&&this.plugins.onProcessRule(d),d},r.use=function(){for(var i=this,s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return l.forEach(function(d){i.plugins.use(d)}),this},t}(),Gg=function(r){return new Yk(r)},Pf=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function Kg(t){var r=null;for(var o in t){var i=t[o],s=typeof i;if(s==="function")r||(r={}),r[o]=i;else if(s==="object"&&i!==null&&!Array.isArray(i)){var l=Kg(i);l&&(r||(r={}),r[o]=l)}}return r}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */Gg();var Yg=Date.now(),hc="fnValues"+Yg,mc="fnStyle"+ ++Yg,Qk=function(){return{onCreateRule:function(o,i,s){if(typeof i!="function")return null;var l=kf(o,{},s);return l[mc]=i,l},onProcessStyle:function(o,i){if(hc in i||mc in i)return o;var s={};for(var l in o){var c=o[l];typeof c=="function"&&(delete o[l],s[l]=c)}return i[hc]=s,o},onUpdate:function(o,i,s,l){var c=i,d=c[mc];d&&(c.style=d(o)||{});var h=c[hc];if(h)for(var m in h)c.prop(m,h[m](o),l)}}},yr="@global",qc="@global ",Xk=function(){function t(o,i,s){this.type="global",this.at=yr,this.isProcessed=!1,this.key=o,this.options=s,this.rules=new rl(Ke({},s,{parent:this}));for(var l in i)this.rules.add(l,i[l]);this.rules.process()}var r=t.prototype;return r.getRule=function(i){return this.rules.get(i)},r.addRule=function(i,s,l){var c=this.rules.add(i,s,l);return c&&this.options.jss.plugins.onProcessRule(c),c},r.replaceRule=function(i,s,l){var c=this.rules.replace(i,s,l);return c&&this.options.jss.plugins.onProcessRule(c),c},r.indexOf=function(i){return this.rules.indexOf(i)},r.toString=function(i){return this.rules.toString(i)},t}(),Jk=function(){function t(o,i,s){this.type="global",this.at=yr,this.isProcessed=!1,this.key=o,this.options=s;var l=o.substr(qc.length);this.rule=s.jss.createRule(l,i,Ke({},s,{parent:this}))}var r=t.prototype;return r.toString=function(i){return this.rule?this.rule.toString(i):""},t}(),Zk=/\s*,\s*/g;function Qg(t,r){for(var o=t.split(Zk),i="",s=0;s<o.length;s++)i+=r+" "+o[s].trim(),o[s+1]&&(i+=", ");return i}function e5(t,r){var o=t.options,i=t.style,s=i?i[yr]:null;if(s){for(var l in s)r.addRule(l,s[l],Ke({},o,{selector:Qg(l,t.selector)}));delete i[yr]}}function t5(t,r){var o=t.options,i=t.style;for(var s in i)if(!(s[0]!=="@"||s.substr(0,yr.length)!==yr)){var l=Qg(s.substr(yr.length),t.selector);r.addRule(l,i[s],Ke({},o,{selector:l})),delete i[s]}}function n5(){function t(o,i,s){if(!o)return null;if(o===yr)return new Xk(o,i,s);if(o[0]==="@"&&o.substr(0,qc.length)===qc)return new Jk(o,i,s);var l=s.parent;return l&&(l.type==="global"||l.options.parent&&l.options.parent.type==="global")&&(s.scoped=!1),!s.selector&&s.scoped===!1&&(s.selector=o),null}function r(o,i){o.type!=="style"||!i||(e5(o,i),t5(o,i))}return{onCreateRule:t,onProcessRule:r}}var Sm=/\s*,\s*/g,r5=/&/g,o5=/\$([\w-]+)/g;function i5(){function t(s,l){return function(c,d){var h=s.getRule(d)||l&&l.getRule(d);return h?h.selector:d}}function r(s,l){for(var c=l.split(Sm),d=s.split(Sm),h="",m=0;m<c.length;m++)for(var y=c[m],v=0;v<d.length;v++){var k=d[v];h&&(h+=", "),h+=k.indexOf("&")!==-1?k.replace(r5,y):y+" "+k}return h}function o(s,l,c){if(c)return Ke({},c,{index:c.index+1});var d=s.options.nestingLevel;d=d===void 0?1:d+1;var h=Ke({},s.options,{nestingLevel:d,index:l.indexOf(s)+1});return delete h.name,h}function i(s,l,c){if(l.type!=="style")return s;var d=l,h=d.options.parent,m,y;for(var v in s){var k=v.indexOf("&")!==-1,T=v[0]==="@";if(!(!k&&!T)){if(m=o(d,h,m),k){var S=r(v,d.selector);y||(y=t(h,c)),S=S.replace(o5,y);var b=d.key+"-"+v;"replaceRule"in h?h.replaceRule(b,s[v],Ke({},m,{selector:S})):h.addRule(b,s[v],Ke({},m,{selector:S}))}else T&&h.addRule(v,{},m).addRule(d.key,s[v],{selector:d.selector});delete s[v]}}return s}return{onProcessStyle:i}}var a5=/[A-Z]/g,s5=/^ms-/,gc={};function l5(t){return"-"+t.toLowerCase()}function Xg(t){if(gc.hasOwnProperty(t))return gc[t];var r=t.replace(a5,l5);return gc[t]=s5.test(r)?"-"+r:r}function $s(t){var r={};for(var o in t){var i=o.indexOf("--")===0?o:Xg(o);r[i]=t[o]}return t.fallbacks&&(Array.isArray(t.fallbacks)?r.fallbacks=t.fallbacks.map($s):r.fallbacks=$s(t.fallbacks)),r}function u5(){function t(o){if(Array.isArray(o)){for(var i=0;i<o.length;i++)o[i]=$s(o[i]);return o}return $s(o)}function r(o,i,s){if(i.indexOf("--")===0)return o;var l=Xg(i);return i===l?o:(s.prop(l,o),null)}return{onProcessStyle:t,onChangeValue:r}}var B=Pf&&CSS?CSS.px:"px",vs=Pf&&CSS?CSS.ms:"ms",Ro=Pf&&CSS?CSS.percent:"%",c5={"animation-delay":vs,"animation-duration":vs,"background-position":B,"background-position-x":B,"background-position-y":B,"background-size":B,border:B,"border-bottom":B,"border-bottom-left-radius":B,"border-bottom-right-radius":B,"border-bottom-width":B,"border-left":B,"border-left-width":B,"border-radius":B,"border-right":B,"border-right-width":B,"border-top":B,"border-top-left-radius":B,"border-top-right-radius":B,"border-top-width":B,"border-width":B,"border-block":B,"border-block-end":B,"border-block-end-width":B,"border-block-start":B,"border-block-start-width":B,"border-block-width":B,"border-inline":B,"border-inline-end":B,"border-inline-end-width":B,"border-inline-start":B,"border-inline-start-width":B,"border-inline-width":B,"border-start-start-radius":B,"border-start-end-radius":B,"border-end-start-radius":B,"border-end-end-radius":B,margin:B,"margin-bottom":B,"margin-left":B,"margin-right":B,"margin-top":B,"margin-block":B,"margin-block-end":B,"margin-block-start":B,"margin-inline":B,"margin-inline-end":B,"margin-inline-start":B,padding:B,"padding-bottom":B,"padding-left":B,"padding-right":B,"padding-top":B,"padding-block":B,"padding-block-end":B,"padding-block-start":B,"padding-inline":B,"padding-inline-end":B,"padding-inline-start":B,"mask-position-x":B,"mask-position-y":B,"mask-size":B,height:B,width:B,"min-height":B,"max-height":B,"min-width":B,"max-width":B,bottom:B,left:B,top:B,right:B,inset:B,"inset-block":B,"inset-block-end":B,"inset-block-start":B,"inset-inline":B,"inset-inline-end":B,"inset-inline-start":B,"box-shadow":B,"text-shadow":B,"column-gap":B,"column-rule":B,"column-rule-width":B,"column-width":B,"font-size":B,"font-size-delta":B,"letter-spacing":B,"text-decoration-thickness":B,"text-indent":B,"text-stroke":B,"text-stroke-width":B,"word-spacing":B,motion:B,"motion-offset":B,outline:B,"outline-offset":B,"outline-width":B,perspective:B,"perspective-origin-x":Ro,"perspective-origin-y":Ro,"transform-origin":Ro,"transform-origin-x":Ro,"transform-origin-y":Ro,"transform-origin-z":Ro,"transition-delay":vs,"transition-duration":vs,"vertical-align":B,"flex-basis":B,"shape-margin":B,size:B,gap:B,grid:B,"grid-gap":B,"row-gap":B,"grid-row-gap":B,"grid-column-gap":B,"grid-template-rows":B,"grid-template-columns":B,"grid-auto-rows":B,"grid-auto-columns":B,"box-shadow-x":B,"box-shadow-y":B,"box-shadow-blur":B,"box-shadow-spread":B,"font-line-height":B,"text-shadow-x":B,"text-shadow-y":B,"text-shadow-blur":B};function Jg(t){var r=/(-[a-z])/g,o=function(c){return c[1].toUpperCase()},i={};for(var s in t)i[s]=t[s],i[s.replace(r,o)]=t[s];return i}var f5=Jg(c5);function Ii(t,r,o){if(r==null)return r;if(Array.isArray(r))for(var i=0;i<r.length;i++)r[i]=Ii(t,r[i],o);else if(typeof r=="object")if(t==="fallbacks")for(var s in r)r[s]=Ii(s,r[s],o);else for(var l in r)r[l]=Ii(t+"-"+l,r[l],o);else if(typeof r=="number"&&isNaN(r)===!1){var c=o[t]||f5[t];return c&&!(r===0&&c===B)?typeof c=="function"?c(r).toString():""+r+c:r.toString()}return r}function d5(t){t===void 0&&(t={});var r=Jg(t);function o(s,l){if(l.type!=="style")return s;for(var c in s)s[c]=Ii(c,s[c],r);return s}function i(s,l){return Ii(l,s,r)}return{onProcessStyle:o,onChangeValue:i}}function Hc(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,i=Array(r);o<r;o++)i[o]=t[o];return i}function p5(t){if(Array.isArray(t))return Hc(t)}function h5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function m5(t,r){if(t){if(typeof t=="string")return Hc(t,r);var o={}.toString.call(t).slice(8,-1);return o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set"?Array.from(t):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Hc(t,r):void 0}}function g5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y5(t){return p5(t)||h5(t)||m5(t)||g5()}var Mi="",Vc="",Zg="",e0="",v5=ea&&"ontouchstart"in document.documentElement;if(ea){var yc={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},b5=document.createElement("p"),vc=b5.style,x5="Transform";for(var bc in yc)if(bc+x5 in vc){Mi=bc,Vc=yc[bc];break}Mi==="Webkit"&&"msHyphens"in vc&&(Mi="ms",Vc=yc.ms,e0="edge"),Mi==="Webkit"&&"-apple-trailing-word"in vc&&(Zg="apple")}var ve={js:Mi,css:Vc,vendor:Zg,browser:e0,isTouch:v5};function S5(t){return t[1]==="-"||ve.js==="ms"?t:"@"+ve.css+"keyframes"+t.substr(10)}var w5={noPrefill:["appearance"],supportedProperty:function(r){return r!=="appearance"?!1:ve.js==="ms"?"-webkit-"+r:ve.css+r}},k5={noPrefill:["color-adjust"],supportedProperty:function(r){return r!=="color-adjust"?!1:ve.js==="Webkit"?ve.css+"print-"+r:r}},C5=/[-\s]+(.)?/g;function P5(t,r){return r?r.toUpperCase():""}function Ef(t){return t.replace(C5,P5)}function xr(t){return Ef("-"+t)}var E5={noPrefill:["mask"],supportedProperty:function(r,o){if(!/^mask/.test(r))return!1;if(ve.js==="Webkit"){var i="mask-image";if(Ef(i)in o)return r;if(ve.js+xr(i)in o)return ve.css+r}return r}},R5={noPrefill:["text-orientation"],supportedProperty:function(r){return r!=="text-orientation"?!1:ve.vendor==="apple"&&!ve.isTouch?ve.css+r:r}},O5={noPrefill:["transform"],supportedProperty:function(r,o,i){return r!=="transform"?!1:i.transform?r:ve.css+r}},T5={noPrefill:["transition"],supportedProperty:function(r,o,i){return r!=="transition"?!1:i.transition?r:ve.css+r}},_5={noPrefill:["writing-mode"],supportedProperty:function(r){return r!=="writing-mode"?!1:ve.js==="Webkit"||ve.js==="ms"&&ve.browser!=="edge"?ve.css+r:r}},A5={noPrefill:["user-select"],supportedProperty:function(r){return r!=="user-select"?!1:ve.js==="Moz"||ve.js==="ms"||ve.vendor==="apple"?ve.css+r:r}},z5={supportedProperty:function(r,o){if(!/^break-/.test(r))return!1;if(ve.js==="Webkit"){var i="WebkitColumn"+xr(r);return i in o?ve.css+"column-"+r:!1}if(ve.js==="Moz"){var s="page"+xr(r);return s in o?"page-"+r:!1}return!1}},N5={supportedProperty:function(r,o){if(!/^(border|margin|padding)-inline/.test(r))return!1;if(ve.js==="Moz")return r;var i=r.replace("-inline","");return ve.js+xr(i)in o?ve.css+i:!1}},M5={supportedProperty:function(r,o){return Ef(r)in o?r:!1}},$5={supportedProperty:function(r,o){var i=xr(r);return r[0]==="-"||r[0]==="-"&&r[1]==="-"?r:ve.js+i in o?ve.css+r:ve.js!=="Webkit"&&"Webkit"+i in o?"-webkit-"+r:!1}},D5={supportedProperty:function(r){return r.substring(0,11)!=="scroll-snap"?!1:ve.js==="ms"?""+ve.css+r:r}},j5={supportedProperty:function(r){return r!=="overscroll-behavior"?!1:ve.js==="ms"?ve.css+"scroll-chaining":r}},L5={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},I5={supportedProperty:function(r,o){var i=L5[r];return i&&ve.js+xr(i)in o?ve.css+i:!1}},t0={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},B5=Object.keys(t0),F5=function(r){return ve.css+r},U5={supportedProperty:function(r,o,i){var s=i.multiple;if(B5.indexOf(r)>-1){var l=t0[r];if(!Array.isArray(l))return ve.js+xr(l)in o?ve.css+l:!1;if(!s)return!1;for(var c=0;c<l.length;c++)if(!(ve.js+xr(l[0])in o))return!1;return l.map(F5)}return!1}},n0=[w5,k5,E5,R5,O5,T5,_5,A5,z5,N5,M5,$5,D5,j5,I5,U5],wm=n0.filter(function(t){return t.supportedProperty}).map(function(t){return t.supportedProperty}),q5=n0.filter(function(t){return t.noPrefill}).reduce(function(t,r){return t.push.apply(t,y5(r.noPrefill)),t},[]),$i,Fr={};if(ea){$i=document.createElement("p");var xc=window.getComputedStyle(document.documentElement,"");for(var Sc in xc)isNaN(Sc)||(Fr[xc[Sc]]=xc[Sc]);q5.forEach(function(t){return delete Fr[t]})}function Wc(t,r){if(r===void 0&&(r={}),!$i)return t;if(Fr[t]!=null)return Fr[t];(t==="transition"||t==="transform")&&(r[t]=t in $i.style);for(var o=0;o<wm.length&&(Fr[t]=wm[o](t,$i.style,r),!Fr[t]);o++);try{$i.style[t]=""}catch{return!1}return Fr[t]}var Oo={},H5={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},V5=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,mr;function W5(t,r,o){if(r==="var")return"var";if(r==="all")return"all";if(o==="all")return", all";var i=r?Wc(r):", "+Wc(o);return i||r||o}ea&&(mr=document.createElement("p"));function km(t,r){var o=r;if(!mr||t==="content")return r;if(typeof o!="string"||!isNaN(parseInt(o,10)))return o;var i=t+o;if(Oo[i]!=null)return Oo[i];try{mr.style[t]=o}catch{return Oo[i]=!1,!1}if(H5[t])o=o.replace(V5,W5);else if(mr.style[t]===""&&(o=ve.css+o,o==="-ms-flex"&&(mr.style[t]="-ms-flexbox"),mr.style[t]=o,mr.style[t]===""))return Oo[i]=!1,!1;return mr.style[t]="",Oo[i]=o,Oo[i]}function G5(){function t(s){if(s.type==="keyframes"){var l=s;l.at=S5(l.at)}}function r(s){for(var l in s){var c=s[l];if(l==="fallbacks"&&Array.isArray(c)){s[l]=c.map(r);continue}var d=!1,h=Wc(l);h&&h!==l&&(d=!0);var m=!1,y=km(h,Hr(c));y&&y!==c&&(m=!0),(d||m)&&(d&&delete s[l],s[h||l]=y||c)}return s}function o(s,l){return l.type!=="style"?s:r(s)}function i(s,l){return km(l,Hr(s))||s}return{onProcessRule:t,onProcessStyle:o,onChangeValue:i}}function K5(){var t=function(o,i){return o.length===i.length?o>i?1:-1:o.length-i.length};return{onProcessStyle:function(o,i){if(i.type!=="style")return o;for(var s={},l=Object.keys(o).sort(t),c=0;c<l.length;c++)s[l[c]]=o[l[c]];return s}}}function Y5(){return{plugins:[Qk(),n5(),i5(),u5(),d5(),typeof window>"u"?null:G5(),K5()]}}function r0(t={}){const{baseClasses:r,newClasses:o,Component:i}=t;if(!o)return r;const s={...r};return Object.keys(o).forEach(l=>{o[l]&&(s[l]=`${r[l]} ${o[l]}`)}),s}const Ao={set:(t,r,o,i)=>{let s=t.get(r);s||(s=new Map,t.set(r,s)),s.set(o,i)},get:(t,r,o)=>{const i=t.get(r);return i?i.get(o):void 0},delete:(t,r,o)=>{t.get(r).delete(o)}};function Q5(){const t=Zs();return(t==null?void 0:t.$$material)??t}const X5=Gg(Y5()),J5=lk(),Z5=new Map,e2={disableGeneration:!1,generateClassName:J5,jss:X5,sheetsCache:null,sheetsManager:Z5,sheetsRegistry:null},t2=L.createContext(e2);let Cm=-1e9;function n2(){return Cm+=1,Cm}function Pm(t){return t.length===0}function r2(t){const{variant:r,...o}=t;let i=r||"";return Object.keys(o).sort().forEach(s=>{s==="color"?i+=Pm(i)?t[s]:Ae(t[s]):i+=`${Pm(i)?s:Ae(s)}${Ae(t[s].toString())}`}),i}const o2={};function i2(t){const r=typeof t=="function";return{create:(o,i)=>{let s;try{s=r?t(o):t}catch(h){throw h}if(!i||!o.components||!o.components[i]||!o.components[i].styleOverrides&&!o.components[i].variants)return s;const l=o.components[i].styleOverrides||{},c=o.components[i].variants||[],d={...s};return Object.keys(l).forEach(h=>{d[h]=Et(d[h]||{},l[h])}),c.forEach(h=>{const m=r2(h.props);d[m]=Et(d[m]||{},h.style)}),d},options:{}}}function a2({state:t,stylesOptions:r},o,i){if(r.disableGeneration)return o||{};t.cacheClasses||(t.cacheClasses={value:null,lastProp:null,lastJSS:{}});let s=!1;return t.classes!==t.cacheClasses.lastJSS&&(t.cacheClasses.lastJSS=t.classes,s=!0),o!==t.cacheClasses.lastProp&&(t.cacheClasses.lastProp=o,s=!0),s&&(t.cacheClasses.value=r0({baseClasses:t.cacheClasses.lastJSS,newClasses:o,Component:i})),t.cacheClasses.value}function s2({state:t,theme:r,stylesOptions:o,stylesCreator:i,name:s},l){if(o.disableGeneration)return;let c=Ao.get(o.sheetsManager,i,r);c||(c={refs:0,staticSheet:null,dynamicStyles:null},Ao.set(o.sheetsManager,i,r,c));const d={...i.options,...o,theme:r,flip:typeof o.flip=="boolean"?o.flip:r.direction==="rtl"};d.generateId=d.serverGenerateClassName||d.generateClassName;const h=o.sheetsRegistry;if(c.refs===0){let m;o.sheetsCache&&(m=Ao.get(o.sheetsCache,i,r));const y=i.create(r,s);m||(m=o.jss.createStyleSheet(y,{link:!1,...d}),m.attach(),o.sheetsCache&&Ao.set(o.sheetsCache,i,r,m)),h&&h.add(m),c.staticSheet=m,c.dynamicStyles=Kg(y)}if(c.dynamicStyles){const m=o.jss.createStyleSheet(c.dynamicStyles,{link:!0,...d});m.update(l),m.attach(),t.dynamicSheet=m,t.classes=r0({baseClasses:c.staticSheet.classes,newClasses:m.classes}),h&&h.add(m)}else t.classes=c.staticSheet.classes;c.refs+=1}function l2({state:t},r){t.dynamicSheet&&t.dynamicSheet.update(r)}function u2({state:t,theme:r,stylesOptions:o,stylesCreator:i}){if(o.disableGeneration)return;const s=Ao.get(o.sheetsManager,i,r);s.refs-=1;const l=o.sheetsRegistry;s.refs===0&&(Ao.delete(o.sheetsManager,i,r),o.jss.removeStyleSheet(s.staticSheet),l&&l.remove(s.staticSheet)),t.dynamicSheet&&(o.jss.removeStyleSheet(t.dynamicSheet),l&&l.remove(t.dynamicSheet))}function c2(t,r){const o=L.useRef([]);let i;const s=L.useMemo(()=>({}),r);o.current!==s&&(o.current=s,i=t()),L.useEffect(()=>()=>{i&&i()},[s])}function o0(t,r={}){const{name:o,classNamePrefix:i,Component:s,defaultTheme:l=o2,...c}=r,d=i2(t),h=o||i||"makeStyles";return d.options={index:n2(),name:o,meta:h,classNamePrefix:h},(y={})=>{const v=Q5()||l,k={...L.useContext(t2),...c},T=L.useRef(),S=L.useRef();return c2(()=>{const C={name:o,state:{},stylesCreator:d,stylesOptions:k,theme:v};return s2(C,y),S.current=!1,T.current=C,()=>{u2(C)}},[v,d]),L.useEffect(()=>{S.current&&l2(T.current,y),S.current=!0}),a2(T.current,y.classes,s)}}const f2=o0({hero:{backgroundImage:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://xpertlab.com/wp-content/uploads/2021/04/cover-1200x480.png')",height:"500px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff",fontSize:"4rem"}});function d2(){const t=f2();return Y.jsx(Y.Fragment,{children:Y.jsx(um,{className:t.hero,children:Y.jsxs(um,{textAlign:"center",children:[Y.jsx(Ht,{variant:"h2",children:"David J. Alonzo Monzón"}),Y.jsx(Ht,{variant:"h5",children:"Desarrollo de Aplicaciones en Red"}),Y.jsx(Ht,{variant:"h5",children:"Actividad 3 - Consumo de API"}),Y.jsx(Ht,{variant:"h6",children:"Universidad Internacional de la Rioja en México"})]})})})}function i0(t,r){return function(){return t.apply(r,arguments)}}const{toString:p2}=Object.prototype,{getPrototypeOf:Rf}=Object,ol=(t=>r=>{const o=p2.call(r);return t[o]||(t[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),hn=t=>(t=t.toLowerCase(),r=>ol(r)===t),il=t=>r=>typeof r===t,{isArray:Bo}=Array,Ki=il("undefined");function h2(t){return t!==null&&!Ki(t)&&t.constructor!==null&&!Ki(t.constructor)&&Gt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const a0=hn("ArrayBuffer");function m2(t){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(t):r=t&&t.buffer&&a0(t.buffer),r}const g2=il("string"),Gt=il("function"),s0=il("number"),al=t=>t!==null&&typeof t=="object",y2=t=>t===!0||t===!1,Ps=t=>{if(ol(t)!=="object")return!1;const r=Rf(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},v2=hn("Date"),b2=hn("File"),x2=hn("Blob"),S2=hn("FileList"),w2=t=>al(t)&&Gt(t.pipe),k2=t=>{let r;return t&&(typeof FormData=="function"&&t instanceof FormData||Gt(t.append)&&((r=ol(t))==="formdata"||r==="object"&&Gt(t.toString)&&t.toString()==="[object FormData]"))},C2=hn("URLSearchParams"),[P2,E2,R2,O2]=["ReadableStream","Request","Response","Headers"].map(hn),T2=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ta(t,r,{allOwnKeys:o=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Bo(t))for(i=0,s=t.length;i<s;i++)r.call(null,t[i],i,t);else{const l=o?Object.getOwnPropertyNames(t):Object.keys(t),c=l.length;let d;for(i=0;i<c;i++)d=l[i],r.call(null,t[d],d,t)}}function l0(t,r){r=r.toLowerCase();const o=Object.keys(t);let i=o.length,s;for(;i-- >0;)if(s=o[i],r===s.toLowerCase())return s;return null}const qr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,u0=t=>!Ki(t)&&t!==qr;function Gc(){const{caseless:t}=u0(this)&&this||{},r={},o=(i,s)=>{const l=t&&l0(r,s)||s;Ps(r[l])&&Ps(i)?r[l]=Gc(r[l],i):Ps(i)?r[l]=Gc({},i):Bo(i)?r[l]=i.slice():r[l]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&ta(arguments[i],o);return r}const _2=(t,r,o,{allOwnKeys:i}={})=>(ta(r,(s,l)=>{o&&Gt(s)?t[l]=i0(s,o):t[l]=s},{allOwnKeys:i}),t),A2=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),z2=(t,r,o,i)=>{t.prototype=Object.create(r.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:r.prototype}),o&&Object.assign(t.prototype,o)},N2=(t,r,o,i)=>{let s,l,c;const d={};if(r=r||{},t==null)return r;do{for(s=Object.getOwnPropertyNames(t),l=s.length;l-- >0;)c=s[l],(!i||i(c,t,r))&&!d[c]&&(r[c]=t[c],d[c]=!0);t=o!==!1&&Rf(t)}while(t&&(!o||o(t,r))&&t!==Object.prototype);return r},M2=(t,r,o)=>{t=String(t),(o===void 0||o>t.length)&&(o=t.length),o-=r.length;const i=t.indexOf(r,o);return i!==-1&&i===o},$2=t=>{if(!t)return null;if(Bo(t))return t;let r=t.length;if(!s0(r))return null;const o=new Array(r);for(;r-- >0;)o[r]=t[r];return o},D2=(t=>r=>t&&r instanceof t)(typeof Uint8Array<"u"&&Rf(Uint8Array)),j2=(t,r)=>{const i=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=i.next())&&!s.done;){const l=s.value;r.call(t,l[0],l[1])}},L2=(t,r)=>{let o;const i=[];for(;(o=t.exec(r))!==null;)i.push(o);return i},I2=hn("HTMLFormElement"),B2=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,i,s){return i.toUpperCase()+s}),Em=(({hasOwnProperty:t})=>(r,o)=>t.call(r,o))(Object.prototype),F2=hn("RegExp"),c0=(t,r)=>{const o=Object.getOwnPropertyDescriptors(t),i={};ta(o,(s,l)=>{let c;(c=r(s,l,t))!==!1&&(i[l]=c||s)}),Object.defineProperties(t,i)},U2=t=>{c0(t,(r,o)=>{if(Gt(t)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const i=t[o];if(Gt(i)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},q2=(t,r)=>{const o={},i=s=>{s.forEach(l=>{o[l]=!0})};return Bo(t)?i(t):i(String(t).split(r)),o},H2=()=>{},V2=(t,r)=>t!=null&&Number.isFinite(t=+t)?t:r,wc="abcdefghijklmnopqrstuvwxyz",Rm="0123456789",f0={DIGIT:Rm,ALPHA:wc,ALPHA_DIGIT:wc+wc.toUpperCase()+Rm},W2=(t=16,r=f0.ALPHA_DIGIT)=>{let o="";const{length:i}=r;for(;t--;)o+=r[Math.random()*i|0];return o};function G2(t){return!!(t&&Gt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const K2=t=>{const r=new Array(10),o=(i,s)=>{if(al(i)){if(r.indexOf(i)>=0)return;if(!("toJSON"in i)){r[s]=i;const l=Bo(i)?[]:{};return ta(i,(c,d)=>{const h=o(c,s+1);!Ki(h)&&(l[d]=h)}),r[s]=void 0,l}}return i};return o(t,0)},Y2=hn("AsyncFunction"),Q2=t=>t&&(al(t)||Gt(t))&&Gt(t.then)&&Gt(t.catch),d0=((t,r)=>t?setImmediate:r?((o,i)=>(qr.addEventListener("message",({source:s,data:l})=>{s===qr&&l===o&&i.length&&i.shift()()},!1),s=>{i.push(s),qr.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",Gt(qr.postMessage)),X2=typeof queueMicrotask<"u"?queueMicrotask.bind(qr):typeof process<"u"&&process.nextTick||d0,j={isArray:Bo,isArrayBuffer:a0,isBuffer:h2,isFormData:k2,isArrayBufferView:m2,isString:g2,isNumber:s0,isBoolean:y2,isObject:al,isPlainObject:Ps,isReadableStream:P2,isRequest:E2,isResponse:R2,isHeaders:O2,isUndefined:Ki,isDate:v2,isFile:b2,isBlob:x2,isRegExp:F2,isFunction:Gt,isStream:w2,isURLSearchParams:C2,isTypedArray:D2,isFileList:S2,forEach:ta,merge:Gc,extend:_2,trim:T2,stripBOM:A2,inherits:z2,toFlatObject:N2,kindOf:ol,kindOfTest:hn,endsWith:M2,toArray:$2,forEachEntry:j2,matchAll:L2,isHTMLForm:I2,hasOwnProperty:Em,hasOwnProp:Em,reduceDescriptors:c0,freezeMethods:U2,toObjectSet:q2,toCamelCase:B2,noop:H2,toFiniteNumber:V2,findKey:l0,global:qr,isContextDefined:u0,ALPHABET:f0,generateString:W2,isSpecCompliantForm:G2,toJSONObject:K2,isAsyncFn:Y2,isThenable:Q2,setImmediate:d0,asap:X2};function ye(t,r,o,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",r&&(this.code=r),o&&(this.config=o),i&&(this.request=i),s&&(this.response=s,this.status=s.status?s.status:null)}j.inherits(ye,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.status}}});const p0=ye.prototype,h0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{h0[t]={value:t}});Object.defineProperties(ye,h0);Object.defineProperty(p0,"isAxiosError",{value:!0});ye.from=(t,r,o,i,s,l)=>{const c=Object.create(p0);return j.toFlatObject(t,c,function(h){return h!==Error.prototype},d=>d!=="isAxiosError"),ye.call(c,t.message,r,o,i,s),c.cause=t,c.name=t.name,l&&Object.assign(c,l),c};const J2=null;function Kc(t){return j.isPlainObject(t)||j.isArray(t)}function m0(t){return j.endsWith(t,"[]")?t.slice(0,-2):t}function Om(t,r,o){return t?t.concat(r).map(function(s,l){return s=m0(s),!o&&l?"["+s+"]":s}).join(o?".":""):r}function Z2(t){return j.isArray(t)&&!t.some(Kc)}const eC=j.toFlatObject(j,{},null,function(r){return/^is[A-Z]/.test(r)});function sl(t,r,o){if(!j.isObject(t))throw new TypeError("target must be an object");r=r||new FormData,o=j.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,C){return!j.isUndefined(C[b])});const i=o.metaTokens,s=o.visitor||y,l=o.dots,c=o.indexes,h=(o.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(r);if(!j.isFunction(s))throw new TypeError("visitor must be a function");function m(S){if(S===null)return"";if(j.isDate(S))return S.toISOString();if(!h&&j.isBlob(S))throw new ye("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(S)||j.isTypedArray(S)?h&&typeof Blob=="function"?new Blob([S]):Buffer.from(S):S}function y(S,b,C){let $=S;if(S&&!C&&typeof S=="object"){if(j.endsWith(b,"{}"))b=i?b:b.slice(0,-2),S=JSON.stringify(S);else if(j.isArray(S)&&Z2(S)||(j.isFileList(S)||j.endsWith(b,"[]"))&&($=j.toArray(S)))return b=m0(b),$.forEach(function(D,A){!(j.isUndefined(D)||D===null)&&r.append(c===!0?Om([b],A,l):c===null?b:b+"[]",m(D))}),!1}return Kc(S)?!0:(r.append(Om(C,b,l),m(S)),!1)}const v=[],k=Object.assign(eC,{defaultVisitor:y,convertValue:m,isVisitable:Kc});function T(S,b){if(!j.isUndefined(S)){if(v.indexOf(S)!==-1)throw Error("Circular reference detected in "+b.join("."));v.push(S),j.forEach(S,function($,U){(!(j.isUndefined($)||$===null)&&s.call(r,$,j.isString(U)?U.trim():U,b,k))===!0&&T($,b?b.concat(U):[U])}),v.pop()}}if(!j.isObject(t))throw new TypeError("data must be an object");return T(t),r}function Tm(t){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return r[i]})}function Of(t,r){this._pairs=[],t&&sl(t,this,r)}const g0=Of.prototype;g0.append=function(r,o){this._pairs.push([r,o])};g0.toString=function(r){const o=r?function(i){return r.call(this,i,Tm)}:Tm;return this._pairs.map(function(s){return o(s[0])+"="+o(s[1])},"").join("&")};function tC(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function y0(t,r,o){if(!r)return t;const i=o&&o.encode||tC;j.isFunction(o)&&(o={serialize:o});const s=o&&o.serialize;let l;if(s?l=s(r,o):l=j.isURLSearchParams(r)?r.toString():new Of(r,o).toString(i),l){const c=t.indexOf("#");c!==-1&&(t=t.slice(0,c)),t+=(t.indexOf("?")===-1?"?":"&")+l}return t}class _m{constructor(){this.handlers=[]}use(r,o,i){return this.handlers.push({fulfilled:r,rejected:o,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){j.forEach(this.handlers,function(i){i!==null&&r(i)})}}const v0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nC=typeof URLSearchParams<"u"?URLSearchParams:Of,rC=typeof FormData<"u"?FormData:null,oC=typeof Blob<"u"?Blob:null,iC={isBrowser:!0,classes:{URLSearchParams:nC,FormData:rC,Blob:oC},protocols:["http","https","file","blob","url","data"]},Tf=typeof window<"u"&&typeof document<"u",Yc=typeof navigator=="object"&&navigator||void 0,aC=Tf&&(!Yc||["ReactNative","NativeScript","NS"].indexOf(Yc.product)<0),sC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",lC=Tf&&window.location.href||"http://localhost",uC=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Tf,hasStandardBrowserEnv:aC,hasStandardBrowserWebWorkerEnv:sC,navigator:Yc,origin:lC},Symbol.toStringTag,{value:"Module"})),wt={...uC,...iC};function cC(t,r){return sl(t,new wt.classes.URLSearchParams,Object.assign({visitor:function(o,i,s,l){return wt.isNode&&j.isBuffer(o)?(this.append(i,o.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},r))}function fC(t){return j.matchAll(/\w+|\[(\w*)]/g,t).map(r=>r[0]==="[]"?"":r[1]||r[0])}function dC(t){const r={},o=Object.keys(t);let i;const s=o.length;let l;for(i=0;i<s;i++)l=o[i],r[l]=t[l];return r}function b0(t){function r(o,i,s,l){let c=o[l++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),h=l>=o.length;return c=!c&&j.isArray(s)?s.length:c,h?(j.hasOwnProp(s,c)?s[c]=[s[c],i]:s[c]=i,!d):((!s[c]||!j.isObject(s[c]))&&(s[c]=[]),r(o,i,s[c],l)&&j.isArray(s[c])&&(s[c]=dC(s[c])),!d)}if(j.isFormData(t)&&j.isFunction(t.entries)){const o={};return j.forEachEntry(t,(i,s)=>{r(fC(i),s,o,0)}),o}return null}function pC(t,r,o){if(j.isString(t))try{return(r||JSON.parse)(t),j.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(0,JSON.stringify)(t)}const na={transitional:v0,adapter:["xhr","http","fetch"],transformRequest:[function(r,o){const i=o.getContentType()||"",s=i.indexOf("application/json")>-1,l=j.isObject(r);if(l&&j.isHTMLForm(r)&&(r=new FormData(r)),j.isFormData(r))return s?JSON.stringify(b0(r)):r;if(j.isArrayBuffer(r)||j.isBuffer(r)||j.isStream(r)||j.isFile(r)||j.isBlob(r)||j.isReadableStream(r))return r;if(j.isArrayBufferView(r))return r.buffer;if(j.isURLSearchParams(r))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let d;if(l){if(i.indexOf("application/x-www-form-urlencoded")>-1)return cC(r,this.formSerializer).toString();if((d=j.isFileList(r))||i.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return sl(d?{"files[]":r}:r,h&&new h,this.formSerializer)}}return l||s?(o.setContentType("application/json",!1),pC(r)):r}],transformResponse:[function(r){const o=this.transitional||na.transitional,i=o&&o.forcedJSONParsing,s=this.responseType==="json";if(j.isResponse(r)||j.isReadableStream(r))return r;if(r&&j.isString(r)&&(i&&!this.responseType||s)){const c=!(o&&o.silentJSONParsing)&&s;try{return JSON.parse(r)}catch(d){if(c)throw d.name==="SyntaxError"?ye.from(d,ye.ERR_BAD_RESPONSE,this,null,this.response):d}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:wt.classes.FormData,Blob:wt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],t=>{na.headers[t]={}});const hC=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mC=t=>{const r={};let o,i,s;return t&&t.split(`
`).forEach(function(c){s=c.indexOf(":"),o=c.substring(0,s).trim().toLowerCase(),i=c.substring(s+1).trim(),!(!o||r[o]&&hC[o])&&(o==="set-cookie"?r[o]?r[o].push(i):r[o]=[i]:r[o]=r[o]?r[o]+", "+i:i)}),r},Am=Symbol("internals");function _i(t){return t&&String(t).trim().toLowerCase()}function Es(t){return t===!1||t==null?t:j.isArray(t)?t.map(Es):String(t)}function gC(t){const r=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=o.exec(t);)r[i[1]]=i[2];return r}const yC=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function kc(t,r,o,i,s){if(j.isFunction(i))return i.call(this,r,o);if(s&&(r=o),!!j.isString(r)){if(j.isString(i))return r.indexOf(i)!==-1;if(j.isRegExp(i))return i.test(r)}}function vC(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,o,i)=>o.toUpperCase()+i)}function bC(t,r){const o=j.toCamelCase(" "+r);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+o,{value:function(s,l,c){return this[i].call(this,r,s,l,c)},configurable:!0})})}class $t{constructor(r){r&&this.set(r)}set(r,o,i){const s=this;function l(d,h,m){const y=_i(h);if(!y)throw new Error("header name must be a non-empty string");const v=j.findKey(s,y);(!v||s[v]===void 0||m===!0||m===void 0&&s[v]!==!1)&&(s[v||h]=Es(d))}const c=(d,h)=>j.forEach(d,(m,y)=>l(m,y,h));if(j.isPlainObject(r)||r instanceof this.constructor)c(r,o);else if(j.isString(r)&&(r=r.trim())&&!yC(r))c(mC(r),o);else if(j.isHeaders(r))for(const[d,h]of r.entries())l(h,d,i);else r!=null&&l(o,r,i);return this}get(r,o){if(r=_i(r),r){const i=j.findKey(this,r);if(i){const s=this[i];if(!o)return s;if(o===!0)return gC(s);if(j.isFunction(o))return o.call(this,s,i);if(j.isRegExp(o))return o.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,o){if(r=_i(r),r){const i=j.findKey(this,r);return!!(i&&this[i]!==void 0&&(!o||kc(this,this[i],i,o)))}return!1}delete(r,o){const i=this;let s=!1;function l(c){if(c=_i(c),c){const d=j.findKey(i,c);d&&(!o||kc(i,i[d],d,o))&&(delete i[d],s=!0)}}return j.isArray(r)?r.forEach(l):l(r),s}clear(r){const o=Object.keys(this);let i=o.length,s=!1;for(;i--;){const l=o[i];(!r||kc(this,this[l],l,r,!0))&&(delete this[l],s=!0)}return s}normalize(r){const o=this,i={};return j.forEach(this,(s,l)=>{const c=j.findKey(i,l);if(c){o[c]=Es(s),delete o[l];return}const d=r?vC(l):String(l).trim();d!==l&&delete o[l],o[d]=Es(s),i[d]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const o=Object.create(null);return j.forEach(this,(i,s)=>{i!=null&&i!==!1&&(o[s]=r&&j.isArray(i)?i.join(", "):i)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,o])=>r+": "+o).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...o){const i=new this(r);return o.forEach(s=>i.set(s)),i}static accessor(r){const i=(this[Am]=this[Am]={accessors:{}}).accessors,s=this.prototype;function l(c){const d=_i(c);i[d]||(bC(s,c),i[d]=!0)}return j.isArray(r)?r.forEach(l):l(r),this}}$t.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors($t.prototype,({value:t},r)=>{let o=r[0].toUpperCase()+r.slice(1);return{get:()=>t,set(i){this[o]=i}}});j.freezeMethods($t);function Cc(t,r){const o=this||na,i=r||o,s=$t.from(i.headers);let l=i.data;return j.forEach(t,function(d){l=d.call(o,l,s.normalize(),r?r.status:void 0)}),s.normalize(),l}function x0(t){return!!(t&&t.__CANCEL__)}function Fo(t,r,o){ye.call(this,t??"canceled",ye.ERR_CANCELED,r,o),this.name="CanceledError"}j.inherits(Fo,ye,{__CANCEL__:!0});function S0(t,r,o){const i=o.config.validateStatus;!o.status||!i||i(o.status)?t(o):r(new ye("Request failed with status code "+o.status,[ye.ERR_BAD_REQUEST,ye.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function xC(t){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return r&&r[1]||""}function SC(t,r){t=t||10;const o=new Array(t),i=new Array(t);let s=0,l=0,c;return r=r!==void 0?r:1e3,function(h){const m=Date.now(),y=i[l];c||(c=m),o[s]=h,i[s]=m;let v=l,k=0;for(;v!==s;)k+=o[v++],v=v%t;if(s=(s+1)%t,s===l&&(l=(l+1)%t),m-c<r)return;const T=y&&m-y;return T?Math.round(k*1e3/T):void 0}}function wC(t,r){let o=0,i=1e3/r,s,l;const c=(m,y=Date.now())=>{o=y,s=null,l&&(clearTimeout(l),l=null),t.apply(null,m)};return[(...m)=>{const y=Date.now(),v=y-o;v>=i?c(m,y):(s=m,l||(l=setTimeout(()=>{l=null,c(s)},i-v)))},()=>s&&c(s)]}const Ds=(t,r,o=3)=>{let i=0;const s=SC(50,250);return wC(l=>{const c=l.loaded,d=l.lengthComputable?l.total:void 0,h=c-i,m=s(h),y=c<=d;i=c;const v={loaded:c,total:d,progress:d?c/d:void 0,bytes:h,rate:m||void 0,estimated:m&&d&&y?(d-c)/m:void 0,event:l,lengthComputable:d!=null,[r?"download":"upload"]:!0};t(v)},o)},zm=(t,r)=>{const o=t!=null;return[i=>r[0]({lengthComputable:o,total:t,loaded:i}),r[1]]},Nm=t=>(...r)=>j.asap(()=>t(...r)),kC=wt.hasStandardBrowserEnv?((t,r)=>o=>(o=new URL(o,wt.origin),t.protocol===o.protocol&&t.host===o.host&&(r||t.port===o.port)))(new URL(wt.origin),wt.navigator&&/(msie|trident)/i.test(wt.navigator.userAgent)):()=>!0,CC=wt.hasStandardBrowserEnv?{write(t,r,o,i,s,l){const c=[t+"="+encodeURIComponent(r)];j.isNumber(o)&&c.push("expires="+new Date(o).toGMTString()),j.isString(i)&&c.push("path="+i),j.isString(s)&&c.push("domain="+s),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read(t){const r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function PC(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function EC(t,r){return r?t.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):t}function w0(t,r){return t&&!PC(r)?EC(t,r):r}const Mm=t=>t instanceof $t?{...t}:t;function Gr(t,r){r=r||{};const o={};function i(m,y,v,k){return j.isPlainObject(m)&&j.isPlainObject(y)?j.merge.call({caseless:k},m,y):j.isPlainObject(y)?j.merge({},y):j.isArray(y)?y.slice():y}function s(m,y,v,k){if(j.isUndefined(y)){if(!j.isUndefined(m))return i(void 0,m,v,k)}else return i(m,y,v,k)}function l(m,y){if(!j.isUndefined(y))return i(void 0,y)}function c(m,y){if(j.isUndefined(y)){if(!j.isUndefined(m))return i(void 0,m)}else return i(void 0,y)}function d(m,y,v){if(v in r)return i(m,y);if(v in t)return i(void 0,m)}const h={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:d,headers:(m,y,v)=>s(Mm(m),Mm(y),v,!0)};return j.forEach(Object.keys(Object.assign({},t,r)),function(y){const v=h[y]||s,k=v(t[y],r[y],y);j.isUndefined(k)&&v!==d||(o[y]=k)}),o}const k0=t=>{const r=Gr({},t);let{data:o,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:l,headers:c,auth:d}=r;r.headers=c=$t.from(c),r.url=y0(w0(r.baseURL,r.url),t.params,t.paramsSerializer),d&&c.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let h;if(j.isFormData(o)){if(wt.hasStandardBrowserEnv||wt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if((h=c.getContentType())!==!1){const[m,...y]=h?h.split(";").map(v=>v.trim()).filter(Boolean):[];c.setContentType([m||"multipart/form-data",...y].join("; "))}}if(wt.hasStandardBrowserEnv&&(i&&j.isFunction(i)&&(i=i(r)),i||i!==!1&&kC(r.url))){const m=s&&l&&CC.read(l);m&&c.set(s,m)}return r},RC=typeof XMLHttpRequest<"u",OC=RC&&function(t){return new Promise(function(o,i){const s=k0(t);let l=s.data;const c=$t.from(s.headers).normalize();let{responseType:d,onUploadProgress:h,onDownloadProgress:m}=s,y,v,k,T,S;function b(){T&&T(),S&&S(),s.cancelToken&&s.cancelToken.unsubscribe(y),s.signal&&s.signal.removeEventListener("abort",y)}let C=new XMLHttpRequest;C.open(s.method.toUpperCase(),s.url,!0),C.timeout=s.timeout;function $(){if(!C)return;const D=$t.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),E={data:!d||d==="text"||d==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:D,config:t,request:C};S0(function(F){o(F),b()},function(F){i(F),b()},E),C=null}"onloadend"in C?C.onloadend=$:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout($)},C.onabort=function(){C&&(i(new ye("Request aborted",ye.ECONNABORTED,t,C)),C=null)},C.onerror=function(){i(new ye("Network Error",ye.ERR_NETWORK,t,C)),C=null},C.ontimeout=function(){let A=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const E=s.transitional||v0;s.timeoutErrorMessage&&(A=s.timeoutErrorMessage),i(new ye(A,E.clarifyTimeoutError?ye.ETIMEDOUT:ye.ECONNABORTED,t,C)),C=null},l===void 0&&c.setContentType(null),"setRequestHeader"in C&&j.forEach(c.toJSON(),function(A,E){C.setRequestHeader(E,A)}),j.isUndefined(s.withCredentials)||(C.withCredentials=!!s.withCredentials),d&&d!=="json"&&(C.responseType=s.responseType),m&&([k,S]=Ds(m,!0),C.addEventListener("progress",k)),h&&C.upload&&([v,T]=Ds(h),C.upload.addEventListener("progress",v),C.upload.addEventListener("loadend",T)),(s.cancelToken||s.signal)&&(y=D=>{C&&(i(!D||D.type?new Fo(null,t,C):D),C.abort(),C=null)},s.cancelToken&&s.cancelToken.subscribe(y),s.signal&&(s.signal.aborted?y():s.signal.addEventListener("abort",y)));const U=xC(s.url);if(U&&wt.protocols.indexOf(U)===-1){i(new ye("Unsupported protocol "+U+":",ye.ERR_BAD_REQUEST,t));return}C.send(l||null)})},TC=(t,r)=>{const{length:o}=t=t?t.filter(Boolean):[];if(r||o){let i=new AbortController,s;const l=function(m){if(!s){s=!0,d();const y=m instanceof Error?m:this.reason;i.abort(y instanceof ye?y:new Fo(y instanceof Error?y.message:y))}};let c=r&&setTimeout(()=>{c=null,l(new ye(`timeout ${r} of ms exceeded`,ye.ETIMEDOUT))},r);const d=()=>{t&&(c&&clearTimeout(c),c=null,t.forEach(m=>{m.unsubscribe?m.unsubscribe(l):m.removeEventListener("abort",l)}),t=null)};t.forEach(m=>m.addEventListener("abort",l));const{signal:h}=i;return h.unsubscribe=()=>j.asap(d),h}},_C=function*(t,r){let o=t.byteLength;if(o<r){yield t;return}let i=0,s;for(;i<o;)s=i+r,yield t.slice(i,s),i=s},AC=async function*(t,r){for await(const o of zC(t))yield*_C(o,r)},zC=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const r=t.getReader();try{for(;;){const{done:o,value:i}=await r.read();if(o)break;yield i}}finally{await r.cancel()}},$m=(t,r,o,i)=>{const s=AC(t,r);let l=0,c,d=h=>{c||(c=!0,i&&i(h))};return new ReadableStream({async pull(h){try{const{done:m,value:y}=await s.next();if(m){d(),h.close();return}let v=y.byteLength;if(o){let k=l+=v;o(k)}h.enqueue(new Uint8Array(y))}catch(m){throw d(m),m}},cancel(h){return d(h),s.return()}},{highWaterMark:2})},ll=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",C0=ll&&typeof ReadableStream=="function",NC=ll&&(typeof TextEncoder=="function"?(t=>r=>t.encode(r))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),P0=(t,...r)=>{try{return!!t(...r)}catch{return!1}},MC=C0&&P0(()=>{let t=!1;const r=new Request(wt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!r}),Dm=64*1024,Qc=C0&&P0(()=>j.isReadableStream(new Response("").body)),js={stream:Qc&&(t=>t.body)};ll&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!js[r]&&(js[r]=j.isFunction(t[r])?o=>o[r]():(o,i)=>{throw new ye(`Response type '${r}' is not supported`,ye.ERR_NOT_SUPPORT,i)})})})(new Response);const $C=async t=>{if(t==null)return 0;if(j.isBlob(t))return t.size;if(j.isSpecCompliantForm(t))return(await new Request(wt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(j.isArrayBufferView(t)||j.isArrayBuffer(t))return t.byteLength;if(j.isURLSearchParams(t)&&(t=t+""),j.isString(t))return(await NC(t)).byteLength},DC=async(t,r)=>{const o=j.toFiniteNumber(t.getContentLength());return o??$C(r)},jC=ll&&(async t=>{let{url:r,method:o,data:i,signal:s,cancelToken:l,timeout:c,onDownloadProgress:d,onUploadProgress:h,responseType:m,headers:y,withCredentials:v="same-origin",fetchOptions:k}=k0(t);m=m?(m+"").toLowerCase():"text";let T=TC([s,l&&l.toAbortSignal()],c),S;const b=T&&T.unsubscribe&&(()=>{T.unsubscribe()});let C;try{if(h&&MC&&o!=="get"&&o!=="head"&&(C=await DC(y,i))!==0){let E=new Request(r,{method:"POST",body:i,duplex:"half"}),M;if(j.isFormData(i)&&(M=E.headers.get("content-type"))&&y.setContentType(M),E.body){const[F,ee]=zm(C,Ds(Nm(h)));i=$m(E.body,Dm,F,ee)}}j.isString(v)||(v=v?"include":"omit");const $="credentials"in Request.prototype;S=new Request(r,{...k,signal:T,method:o.toUpperCase(),headers:y.normalize().toJSON(),body:i,duplex:"half",credentials:$?v:void 0});let U=await fetch(S);const D=Qc&&(m==="stream"||m==="response");if(Qc&&(d||D&&b)){const E={};["status","statusText","headers"].forEach(se=>{E[se]=U[se]});const M=j.toFiniteNumber(U.headers.get("content-length")),[F,ee]=d&&zm(M,Ds(Nm(d),!0))||[];U=new Response($m(U.body,Dm,F,()=>{ee&&ee(),b&&b()}),E)}m=m||"text";let A=await js[j.findKey(js,m)||"text"](U,t);return!D&&b&&b(),await new Promise((E,M)=>{S0(E,M,{data:A,headers:$t.from(U.headers),status:U.status,statusText:U.statusText,config:t,request:S})})}catch($){throw b&&b(),$&&$.name==="TypeError"&&/fetch/i.test($.message)?Object.assign(new ye("Network Error",ye.ERR_NETWORK,t,S),{cause:$.cause||$}):ye.from($,$&&$.code,t,S)}}),Xc={http:J2,xhr:OC,fetch:jC};j.forEach(Xc,(t,r)=>{if(t){try{Object.defineProperty(t,"name",{value:r})}catch{}Object.defineProperty(t,"adapterName",{value:r})}});const jm=t=>`- ${t}`,LC=t=>j.isFunction(t)||t===null||t===!1,E0={getAdapter:t=>{t=j.isArray(t)?t:[t];const{length:r}=t;let o,i;const s={};for(let l=0;l<r;l++){o=t[l];let c;if(i=o,!LC(o)&&(i=Xc[(c=String(o)).toLowerCase()],i===void 0))throw new ye(`Unknown adapter '${c}'`);if(i)break;s[c||"#"+l]=i}if(!i){const l=Object.entries(s).map(([d,h])=>`adapter ${d} `+(h===!1?"is not supported by the environment":"is not available in the build"));let c=r?l.length>1?`since :
`+l.map(jm).join(`
`):" "+jm(l[0]):"as no adapter specified";throw new ye("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return i},adapters:Xc};function Pc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Fo(null,t)}function Lm(t){return Pc(t),t.headers=$t.from(t.headers),t.data=Cc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),E0.getAdapter(t.adapter||na.adapter)(t).then(function(i){return Pc(t),i.data=Cc.call(t,t.transformResponse,i),i.headers=$t.from(i.headers),i},function(i){return x0(i)||(Pc(t),i&&i.response&&(i.response.data=Cc.call(t,t.transformResponse,i.response),i.response.headers=$t.from(i.response.headers))),Promise.reject(i)})}const R0="1.7.8",ul={};["object","boolean","number","function","string","symbol"].forEach((t,r)=>{ul[t]=function(i){return typeof i===t||"a"+(r<1?"n ":" ")+t}});const Im={};ul.transitional=function(r,o,i){function s(l,c){return"[Axios v"+R0+"] Transitional option '"+l+"'"+c+(i?". "+i:"")}return(l,c,d)=>{if(r===!1)throw new ye(s(c," has been removed"+(o?" in "+o:"")),ye.ERR_DEPRECATED);return o&&!Im[c]&&(Im[c]=!0,console.warn(s(c," has been deprecated since v"+o+" and will be removed in the near future"))),r?r(l,c,d):!0}};ul.spelling=function(r){return(o,i)=>(console.warn(`${i} is likely a misspelling of ${r}`),!0)};function IC(t,r,o){if(typeof t!="object")throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const l=i[s],c=r[l];if(c){const d=t[l],h=d===void 0||c(d,l,t);if(h!==!0)throw new ye("option "+l+" must be "+h,ye.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new ye("Unknown option "+l,ye.ERR_BAD_OPTION)}}const Rs={assertOptions:IC,validators:ul},wn=Rs.validators;class Vr{constructor(r){this.defaults=r,this.interceptors={request:new _m,response:new _m}}async request(r,o){try{return await this._request(r,o)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const l=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?l&&!String(i.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+l):i.stack=l}catch{}}throw i}}_request(r,o){typeof r=="string"?(o=o||{},o.url=r):o=r||{},o=Gr(this.defaults,o);const{transitional:i,paramsSerializer:s,headers:l}=o;i!==void 0&&Rs.assertOptions(i,{silentJSONParsing:wn.transitional(wn.boolean),forcedJSONParsing:wn.transitional(wn.boolean),clarifyTimeoutError:wn.transitional(wn.boolean)},!1),s!=null&&(j.isFunction(s)?o.paramsSerializer={serialize:s}:Rs.assertOptions(s,{encode:wn.function,serialize:wn.function},!0)),Rs.assertOptions(o,{baseUrl:wn.spelling("baseURL"),withXsrfToken:wn.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let c=l&&j.merge(l.common,l[o.method]);l&&j.forEach(["delete","get","head","post","put","patch","common"],S=>{delete l[S]}),o.headers=$t.concat(c,l);const d=[];let h=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(o)===!1||(h=h&&b.synchronous,d.unshift(b.fulfilled,b.rejected))});const m=[];this.interceptors.response.forEach(function(b){m.push(b.fulfilled,b.rejected)});let y,v=0,k;if(!h){const S=[Lm.bind(this),void 0];for(S.unshift.apply(S,d),S.push.apply(S,m),k=S.length,y=Promise.resolve(o);v<k;)y=y.then(S[v++],S[v++]);return y}k=d.length;let T=o;for(v=0;v<k;){const S=d[v++],b=d[v++];try{T=S(T)}catch(C){b.call(this,C);break}}try{y=Lm.call(this,T)}catch(S){return Promise.reject(S)}for(v=0,k=m.length;v<k;)y=y.then(m[v++],m[v++]);return y}getUri(r){r=Gr(this.defaults,r);const o=w0(r.baseURL,r.url);return y0(o,r.params,r.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(r){Vr.prototype[r]=function(o,i){return this.request(Gr(i||{},{method:r,url:o,data:(i||{}).data}))}});j.forEach(["post","put","patch"],function(r){function o(i){return function(l,c,d){return this.request(Gr(d||{},{method:r,headers:i?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}Vr.prototype[r]=o(),Vr.prototype[r+"Form"]=o(!0)});class _f{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(l){o=l});const i=this;this.promise.then(s=>{if(!i._listeners)return;let l=i._listeners.length;for(;l-- >0;)i._listeners[l](s);i._listeners=null}),this.promise.then=s=>{let l;const c=new Promise(d=>{i.subscribe(d),l=d}).then(s);return c.cancel=function(){i.unsubscribe(l)},c},r(function(l,c,d){i.reason||(i.reason=new Fo(l,c,d),o(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const o=this._listeners.indexOf(r);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const r=new AbortController,o=i=>{r.abort(i)};return this.subscribe(o),r.signal.unsubscribe=()=>this.unsubscribe(o),r.signal}static source(){let r;return{token:new _f(function(s){r=s}),cancel:r}}}function BC(t){return function(o){return t.apply(null,o)}}function FC(t){return j.isObject(t)&&t.isAxiosError===!0}const Jc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Jc).forEach(([t,r])=>{Jc[r]=t});function O0(t){const r=new Vr(t),o=i0(Vr.prototype.request,r);return j.extend(o,Vr.prototype,r,{allOwnKeys:!0}),j.extend(o,r,null,{allOwnKeys:!0}),o.create=function(s){return O0(Gr(t,s))},o}const ot=O0(na);ot.Axios=Vr;ot.CanceledError=Fo;ot.CancelToken=_f;ot.isCancel=x0;ot.VERSION=R0;ot.toFormData=sl;ot.AxiosError=ye;ot.Cancel=ot.CanceledError;ot.all=function(r){return Promise.all(r)};ot.spread=BC;ot.isAxiosError=FC;ot.mergeConfig=Gr;ot.AxiosHeaders=$t;ot.formToJSON=t=>b0(j.isHTMLForm(t)?new FormData(t):t);ot.getAdapter=E0.getAdapter;ot.HttpStatusCode=Jc;ot.default=ot;function lt(t,r){r===void 0&&(r={});var o=r.insertAt;if(t&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",o==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}lt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var En=function(){return En=Object.assign||function(t){for(var r,o=1,i=arguments.length;o<i;o++)for(var s in r=arguments[o])Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);return t},En.apply(this,arguments)};function Ls(t){return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ls(t)}var UC=/^\s+/,qC=/\s+$/;function ue(t,r){if(r=r||{},(t=t||"")instanceof ue)return t;if(!(this instanceof ue))return new ue(t,r);var o=function(i){var s={r:0,g:0,b:0},l=1,c=null,d=null,h=null,m=!1,y=!1;typeof i=="string"&&(i=function(S){S=S.replace(UC,"").replace(qC,"").toLowerCase();var b,C=!1;if(Zc[S])S=Zc[S],C=!0;else if(S=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(b=dn.rgb.exec(S))?{r:b[1],g:b[2],b:b[3]}:(b=dn.rgba.exec(S))?{r:b[1],g:b[2],b:b[3],a:b[4]}:(b=dn.hsl.exec(S))?{h:b[1],s:b[2],l:b[3]}:(b=dn.hsla.exec(S))?{h:b[1],s:b[2],l:b[3],a:b[4]}:(b=dn.hsv.exec(S))?{h:b[1],s:b[2],v:b[3]}:(b=dn.hsva.exec(S))?{h:b[1],s:b[2],v:b[3],a:b[4]}:(b=dn.hex8.exec(S))?{r:qt(b[1]),g:qt(b[2]),b:qt(b[3]),a:Vm(b[4]),format:C?"name":"hex8"}:(b=dn.hex6.exec(S))?{r:qt(b[1]),g:qt(b[2]),b:qt(b[3]),format:C?"name":"hex"}:(b=dn.hex4.exec(S))?{r:qt(b[1]+""+b[1]),g:qt(b[2]+""+b[2]),b:qt(b[3]+""+b[3]),a:Vm(b[4]+""+b[4]),format:C?"name":"hex8"}:(b=dn.hex3.exec(S))?{r:qt(b[1]+""+b[1]),g:qt(b[2]+""+b[2]),b:qt(b[3]+""+b[3]),format:C?"name":"hex"}:!1}(i)),Ls(i)=="object"&&(Fn(i.r)&&Fn(i.g)&&Fn(i.b)?(v=i.r,k=i.g,T=i.b,s={r:255*He(v,255),g:255*He(k,255),b:255*He(T,255)},m=!0,y=String(i.r).substr(-1)==="%"?"prgb":"rgb"):Fn(i.h)&&Fn(i.s)&&Fn(i.v)?(c=Di(i.s),d=Di(i.v),s=function(S,b,C){S=6*He(S,360),b=He(b,100),C=He(C,100);var $=Math.floor(S),U=S-$,D=C*(1-b),A=C*(1-U*b),E=C*(1-(1-U)*b),M=$%6,F=[C,A,D,D,E,C][M],ee=[E,C,C,A,D,D][M],se=[D,D,E,C,C,A][M];return{r:255*F,g:255*ee,b:255*se}}(i.h,c,d),m=!0,y="hsv"):Fn(i.h)&&Fn(i.s)&&Fn(i.l)&&(c=Di(i.s),h=Di(i.l),s=function(S,b,C){var $,U,D;function A(F,ee,se){return se<0&&(se+=1),se>1&&(se-=1),se<1/6?F+6*(ee-F)*se:se<.5?ee:se<2/3?F+(ee-F)*(2/3-se)*6:F}if(S=He(S,360),b=He(b,100),C=He(C,100),b===0)$=U=D=C;else{var E=C<.5?C*(1+b):C+b-C*b,M=2*C-E;$=A(M,E,S+1/3),U=A(M,E,S),D=A(M,E,S-1/3)}return{r:255*$,g:255*U,b:255*D}}(i.h,c,h),m=!0,y="hsl"),i.hasOwnProperty("a")&&(l=i.a));var v,k,T;return l=T0(l),{ok:m,format:i.format||y,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:l}}(t);this._originalInput=t,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||o.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function Bm(t,r,o){t=He(t,255),r=He(r,255),o=He(o,255);var i,s,l=Math.max(t,r,o),c=Math.min(t,r,o),d=(l+c)/2;if(l==c)i=s=0;else{var h=l-c;switch(s=d>.5?h/(2-l-c):h/(l+c),l){case t:i=(r-o)/h+(r<o?6:0);break;case r:i=(o-t)/h+2;break;case o:i=(t-r)/h+4}i/=6}return{h:i,s,l:d}}function Fm(t,r,o){t=He(t,255),r=He(r,255),o=He(o,255);var i,s,l=Math.max(t,r,o),c=Math.min(t,r,o),d=l,h=l-c;if(s=l===0?0:h/l,l==c)i=0;else{switch(l){case t:i=(r-o)/h+(r<o?6:0);break;case r:i=(o-t)/h+2;break;case o:i=(t-r)/h+4}i/=6}return{h:i,s,v:d}}function Um(t,r,o,i){var s=[pn(Math.round(t).toString(16)),pn(Math.round(r).toString(16)),pn(Math.round(o).toString(16))];return i&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function qm(t,r,o,i){return[pn(_0(i)),pn(Math.round(t).toString(16)),pn(Math.round(r).toString(16)),pn(Math.round(o).toString(16))].join("")}function HC(t,r){r=r===0?0:r||10;var o=ue(t).toHsl();return o.s-=r/100,o.s=cl(o.s),ue(o)}function VC(t,r){r=r===0?0:r||10;var o=ue(t).toHsl();return o.s+=r/100,o.s=cl(o.s),ue(o)}function WC(t){return ue(t).desaturate(100)}function GC(t,r){r=r===0?0:r||10;var o=ue(t).toHsl();return o.l+=r/100,o.l=cl(o.l),ue(o)}function KC(t,r){r=r===0?0:r||10;var o=ue(t).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-r/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-r/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-r/100*255))),ue(o)}function YC(t,r){r=r===0?0:r||10;var o=ue(t).toHsl();return o.l-=r/100,o.l=cl(o.l),ue(o)}function QC(t,r){var o=ue(t).toHsl(),i=(o.h+r)%360;return o.h=i<0?360+i:i,ue(o)}function XC(t){var r=ue(t).toHsl();return r.h=(r.h+180)%360,ue(r)}function Hm(t,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var o=ue(t).toHsl(),i=[ue(t)],s=360/r,l=1;l<r;l++)i.push(ue({h:(o.h+l*s)%360,s:o.s,l:o.l}));return i}function JC(t){var r=ue(t).toHsl(),o=r.h;return[ue(t),ue({h:(o+72)%360,s:r.s,l:r.l}),ue({h:(o+216)%360,s:r.s,l:r.l})]}function ZC(t,r,o){r=r||6,o=o||30;var i=ue(t).toHsl(),s=360/o,l=[ue(t)];for(i.h=(i.h-(s*r>>1)+720)%360;--r;)i.h=(i.h+s)%360,l.push(ue(i));return l}function eP(t,r){r=r||6;for(var o=ue(t).toHsv(),i=o.h,s=o.s,l=o.v,c=[],d=1/r;r--;)c.push(ue({h:i,s,v:l})),l=(l+d)%1;return c}ue.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,r,o,i=this.toRgb();return t=i.r/255,r=i.g/255,o=i.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(t){return this._a=T0(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=Fm(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=Fm(this._r,this._g,this._b),r=Math.round(360*t.h),o=Math.round(100*t.s),i=Math.round(100*t.v);return this._a==1?"hsv("+r+", "+o+"%, "+i+"%)":"hsva("+r+", "+o+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var t=Bm(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=Bm(this._r,this._g,this._b),r=Math.round(360*t.h),o=Math.round(100*t.s),i=Math.round(100*t.l);return this._a==1?"hsl("+r+", "+o+"%, "+i+"%)":"hsla("+r+", "+o+"%, "+i+"%, "+this._roundA+")"},toHex:function(t){return Um(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(r,o,i,s,l){var c=[pn(Math.round(r).toString(16)),pn(Math.round(o).toString(16)),pn(Math.round(i).toString(16)),pn(_0(s))];return l&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)&&c[3].charAt(0)==c[3].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0)+c[3].charAt(0):c.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*He(this._r,255))+"%",g:Math.round(100*He(this._g,255))+"%",b:Math.round(100*He(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*He(this._r,255))+"%, "+Math.round(100*He(this._g,255))+"%, "+Math.round(100*He(this._b,255))+"%)":"rgba("+Math.round(100*He(this._r,255))+"%, "+Math.round(100*He(this._g,255))+"%, "+Math.round(100*He(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(tP[Um(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var r="#"+qm(this._r,this._g,this._b,this._a),o=r,i=this._gradientType?"GradientType = 1, ":"";if(t){var s=ue(t);o="#"+qm(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+r+",endColorstr="+o+")"},toString:function(t){var r=!!t;t=t||this._format;var o=!1,i=this._a<1&&this._a>=0;return r||!i||t!=="hex"&&t!=="hex6"&&t!=="hex3"&&t!=="hex4"&&t!=="hex8"&&t!=="name"?(t==="rgb"&&(o=this.toRgbString()),t==="prgb"&&(o=this.toPercentageRgbString()),t!=="hex"&&t!=="hex6"||(o=this.toHexString()),t==="hex3"&&(o=this.toHexString(!0)),t==="hex4"&&(o=this.toHex8String(!0)),t==="hex8"&&(o=this.toHex8String()),t==="name"&&(o=this.toName()),t==="hsl"&&(o=this.toHslString()),t==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):t==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ue(this.toString())},_applyModification:function(t,r){var o=t.apply(null,[this].concat([].slice.call(r)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(GC,arguments)},brighten:function(){return this._applyModification(KC,arguments)},darken:function(){return this._applyModification(YC,arguments)},desaturate:function(){return this._applyModification(HC,arguments)},saturate:function(){return this._applyModification(VC,arguments)},greyscale:function(){return this._applyModification(WC,arguments)},spin:function(){return this._applyModification(QC,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(ZC,arguments)},complement:function(){return this._applyCombination(XC,arguments)},monochromatic:function(){return this._applyCombination(eP,arguments)},splitcomplement:function(){return this._applyCombination(JC,arguments)},triad:function(){return this._applyCombination(Hm,[3])},tetrad:function(){return this._applyCombination(Hm,[4])}},ue.fromRatio=function(t,r){if(Ls(t)=="object"){var o={};for(var i in t)t.hasOwnProperty(i)&&(o[i]=i==="a"?t[i]:Di(t[i]));t=o}return ue(t,r)},ue.equals=function(t,r){return!(!t||!r)&&ue(t).toRgbString()==ue(r).toRgbString()},ue.random=function(){return ue.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ue.mix=function(t,r,o){o=o===0?0:o||50;var i=ue(t).toRgb(),s=ue(r).toRgb(),l=o/100;return ue({r:(s.r-i.r)*l+i.r,g:(s.g-i.g)*l+i.g,b:(s.b-i.b)*l+i.b,a:(s.a-i.a)*l+i.a})},ue.readability=function(t,r){var o=ue(t),i=ue(r);return(Math.max(o.getLuminance(),i.getLuminance())+.05)/(Math.min(o.getLuminance(),i.getLuminance())+.05)},ue.isReadable=function(t,r,o){var i,s,l=ue.readability(t,r);switch(s=!1,(i=function(c){var d,h;return d=((c=c||{level:"AA",size:"small"}).level||"AA").toUpperCase(),h=(c.size||"small").toLowerCase(),d!=="AA"&&d!=="AAA"&&(d="AA"),h!=="small"&&h!=="large"&&(h="small"),{level:d,size:h}}(o)).level+i.size){case"AAsmall":case"AAAlarge":s=l>=4.5;break;case"AAlarge":s=l>=3;break;case"AAAsmall":s=l>=7}return s},ue.mostReadable=function(t,r,o){var i,s,l,c,d=null,h=0;s=(o=o||{}).includeFallbackColors,l=o.level,c=o.size;for(var m=0;m<r.length;m++)(i=ue.readability(t,r[m]))>h&&(h=i,d=ue(r[m]));return ue.isReadable(t,d,{level:l,size:c})||!s?d:(o.includeFallbackColors=!1,ue.mostReadable(t,["#fff","#000"],o))};var Zc=ue.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},tP=ue.hexNames=function(t){var r={};for(var o in t)t.hasOwnProperty(o)&&(r[t[o]]=o);return r}(Zc);function T0(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function He(t,r){(function(i){return typeof i=="string"&&i.indexOf(".")!=-1&&parseFloat(i)===1})(t)&&(t="100%");var o=function(i){return typeof i=="string"&&i.indexOf("%")!=-1}(t);return t=Math.min(r,Math.max(0,parseFloat(t))),o&&(t=parseInt(t*r,10)/100),Math.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function cl(t){return Math.min(1,Math.max(0,t))}function qt(t){return parseInt(t,16)}function pn(t){return t.length==1?"0"+t:""+t}function Di(t){return t<=1&&(t=100*t+"%"),t}function _0(t){return Math.round(255*parseFloat(t)).toString(16)}function Vm(t){return qt(t)/255}var hr,bs,xs,dn=(bs="[\\s|\\(]+("+(hr="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+hr+")[,|\\s]+("+hr+")\\s*\\)?",xs="[\\s|\\(]+("+hr+")[,|\\s]+("+hr+")[,|\\s]+("+hr+")[,|\\s]+("+hr+")\\s*\\)?",{CSS_UNIT:new RegExp(hr),rgb:new RegExp("rgb"+bs),rgba:new RegExp("rgba"+xs),hsl:new RegExp("hsl"+bs),hsla:new RegExp("hsla"+xs),hsv:new RegExp("hsv"+bs),hsva:new RegExp("hsva"+xs),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Fn(t){return!!dn.CSS_UNIT.exec(t)}var nP=function(t,r){var o=(typeof t=="string"?parseInt(t):t)||0;if(o>=-5&&o<=5){var i=o,s=parseFloat(r),l=s+i*(s/5)*-1;return(l==0||l<=Number.EPSILON)&&(l=.1),{animationPeriod:l+"s"}}return{animationPeriod:r}},rP=function(t,r){var o=t||{},i="";switch(r){case"small":i="12px";break;case"medium":i="16px";break;case"large":i="20px";break;default:i=void 0}var s={};if(o.fontSize){var l=o.fontSize;s=function(c,d){var h={};for(var m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.indexOf(m)<0&&(h[m]=c[m]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(m=Object.getOwnPropertySymbols(c);y<m.length;y++)d.indexOf(m[y])<0&&Object.prototype.propertyIsEnumerable.call(c,m[y])&&(h[m[y]]=c[m[y]])}return h}(o,["fontSize"]),i=l}return{fontSize:i,styles:s}},oP={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},iP=function(t){var r=t.className,o=t.text,i=t.textColor,s=t.staticText,l=t.style;return o?qe.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(r||"").trim(),style:En(En(En({},s&&oP),i&&{color:i,mixBlendMode:"unset"}),l&&l)},typeof o=="string"&&o.length?o:"loading"):null},A0="rgb(50, 205, 50)";function aP(t,r){r===void 0&&(r=0);var o=[];return function i(s,l){return l===void 0&&(l=0),o.push.apply(o,s),o.length<l&&i(o,l),o.slice(0,l)}(t,r)}lt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ue(A0).toRgb();Array.from({length:4},function(t,r){return"--atom-phase".concat(r+1,"-rgb")});lt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);var To=Array.from({length:4},function(t,r){return"--commet-phase".concat(r+1,"-color")}),sP=function(t){var r,o=rP(t==null?void 0:t.style,t==null?void 0:t.size),i=o.styles,s=o.fontSize,l=t==null?void 0:t.easing,c=nP(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,d=function(h){var m={};if(h instanceof Array){for(var y=aP(h,To.length),v=0;v<y.length&&!(v>=4);v++)m[To[v]]=y[v];return m}try{if(typeof h!="string")throw new Error("Color String expected");for(var k=0;k<To.length;k++)m[To[k]]=h}catch(T){for(T instanceof Error?console.warn("[".concat(T.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h)," received in <Commet /> indicator cannot be processed. Using default instead!")),k=0;k<To.length;k++)m[To[k]]=A0}return m}((r=t==null?void 0:t.color)!==null&&r!==void 0?r:"");return qe.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:En(En(En(En(En({},s&&{fontSize:s}),c&&{"--rli-animation-duration":c}),l&&{"--rli-animation-function":l}),d),i),role:"status","aria-live":"polite","aria-label":"Loading"},qe.createElement("span",{className:"rli-d-i-b commet-indicator"},qe.createElement("span",{className:"rli-d-i-b commet-box"},qe.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),qe.createElement("span",{className:"rli-d-i-b  commetball-box"})),qe.createElement("span",{className:"rli-d-i-b commet-box"},qe.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),qe.createElement("span",{className:"rli-d-i-b commetball-box"})),qe.createElement(iP,{className:"commet-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))};lt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--OP-annulus-phase".concat(r+1,"-color")});function Ec(t){return t&&t.Math===Math&&t}lt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Ec(typeof window=="object"&&window)||Ec(typeof self=="object"&&self)||Ec(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(t,r){return"--OP-dotted-phase".concat(r+1,"-color")});lt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--OP-spokes-phase".concat(r+1,"-color")});lt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(t,r){return"--OP-annulus-dual-sectors-phase".concat(r+1,"-color")});lt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return["--OP-annulus-track-phase".concat(r+1,"-color"),"--OP-annulus-sector-phase".concat(r+1,"-color")]});lt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--four-square-phase".concat(r+1,"-color")});lt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--mosaic-phase".concat(r+1,"-color")});lt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--riple-phase".concat(r+1,"-color")});lt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--TD-pulsate-phase".concat(r+1,"-color")});lt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--TD-brick-stack-phase".concat(r+1,"-color")});lt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--TD-bob-phase".concat(r+1,"-color")});lt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--TD-bounce-phase".concat(r+1,"-color")});lt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--shape-phase".concat(r+1,"-color")});lt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--trophySpin-phase".concat(r+1,"-color")});lt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--slab-phase".concat(r+1,"-color")});lt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--life-line-phase".concat(r+1,"-color")});/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var ef=function(t,r){return ef=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var s in i)i.hasOwnProperty(s)&&(o[s]=i[s])},ef(t,r)};function lP(t,r){ef(t,r);function o(){this.constructor=t}t.prototype=r===null?Object.create(r):(o.prototype=r.prototype,new o)}var Bi=function(){return Bi=Object.assign||function(r){for(var o,i=1,s=arguments.length;i<s;i++){o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},Bi.apply(this,arguments)};function uP(t,r,o,i){var s,l=!1,c=0;function d(){s&&clearTimeout(s)}function h(){d(),l=!0}typeof r!="boolean"&&(i=o,o=r,r=void 0);function m(){var y=this,v=Date.now()-c,k=arguments;if(l)return;function T(){c=Date.now(),o.apply(y,k)}function S(){s=void 0}i&&!s&&T(),d(),i===void 0&&v>t?T():r!==!0&&(s=setTimeout(i?S:T,i===void 0?t-v:t))}return m.cancel=h,m}var $o={Pixel:"Pixel",Percent:"Percent"},Wm={unit:$o.Percent,value:.8};function Gm(t){return typeof t=="number"?{unit:$o.Percent,value:t*100}:typeof t=="string"?t.match(/^(\d*(\.\d+)?)px$/)?{unit:$o.Pixel,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:$o.Percent,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),Wm):(console.warn("scrollThreshold should be string or number"),Wm)}var cP=function(t){lP(r,t);function r(o){var i=t.call(this,o)||this;return i.lastScrollTop=0,i.actionTriggered=!1,i.startY=0,i.currentY=0,i.dragging=!1,i.maxPullDownDistance=0,i.getScrollableTarget=function(){return i.props.scrollableTarget instanceof HTMLElement?i.props.scrollableTarget:typeof i.props.scrollableTarget=="string"?document.getElementById(i.props.scrollableTarget):(i.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},i.onStart=function(s){i.lastScrollTop||(i.dragging=!0,s instanceof MouseEvent?i.startY=s.pageY:s instanceof TouchEvent&&(i.startY=s.touches[0].pageY),i.currentY=i.startY,i._infScroll&&(i._infScroll.style.willChange="transform",i._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},i.onMove=function(s){i.dragging&&(s instanceof MouseEvent?i.currentY=s.pageY:s instanceof TouchEvent&&(i.currentY=s.touches[0].pageY),!(i.currentY<i.startY)&&(i.currentY-i.startY>=Number(i.props.pullDownToRefreshThreshold)&&i.setState({pullToRefreshThresholdBreached:!0}),!(i.currentY-i.startY>i.maxPullDownDistance*1.5)&&i._infScroll&&(i._infScroll.style.overflow="visible",i._infScroll.style.transform="translate3d(0px, "+(i.currentY-i.startY)+"px, 0px)")))},i.onEnd=function(){i.startY=0,i.currentY=0,i.dragging=!1,i.state.pullToRefreshThresholdBreached&&(i.props.refreshFunction&&i.props.refreshFunction(),i.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){i._infScroll&&(i._infScroll.style.overflow="auto",i._infScroll.style.transform="none",i._infScroll.style.willChange="unset")})},i.onScrollListener=function(s){typeof i.props.onScroll=="function"&&setTimeout(function(){return i.props.onScroll&&i.props.onScroll(s)},0);var l=i.props.height||i._scrollableNode?s.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!i.actionTriggered){var c=i.props.inverse?i.isElementAtTop(l,i.props.scrollThreshold):i.isElementAtBottom(l,i.props.scrollThreshold);c&&i.props.hasMore&&(i.actionTriggered=!0,i.setState({showLoader:!0}),i.props.next&&i.props.next()),i.lastScrollTop=l.scrollTop}},i.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:o.dataLength},i.throttledOnScrollListener=uP(150,i.onScrollListener).bind(i),i.onStart=i.onStart.bind(i),i.onMove=i.onMove.bind(i),i.onEnd=i.onEnd.bind(i),i}return r.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},r.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},r.prototype.componentDidUpdate=function(o){this.props.dataLength!==o.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},r.getDerivedStateFromProps=function(o,i){var s=o.dataLength!==i.prevDataLength;return s?Bi(Bi({},i),{prevDataLength:o.dataLength}):null},r.prototype.isElementAtTop=function(o,i){i===void 0&&(i=.8);var s=o===document.body||o===document.documentElement?window.screen.availHeight:o.clientHeight,l=Gm(i);return l.unit===$o.Pixel?o.scrollTop<=l.value+s-o.scrollHeight+1:o.scrollTop<=l.value/100+s-o.scrollHeight+1},r.prototype.isElementAtBottom=function(o,i){i===void 0&&(i=.8);var s=o===document.body||o===document.documentElement?window.screen.availHeight:o.clientHeight,l=Gm(i);return l.unit===$o.Pixel?o.scrollTop+s>=o.scrollHeight-l.value:o.scrollTop+s>=l.value/100*o.scrollHeight},r.prototype.render=function(){var o=this,i=Bi({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),s=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),l=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return qe.createElement("div",{style:l,className:"infinite-scroll-component__outerdiv"},qe.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(c){return o._infScroll=c},style:i},this.props.pullDownToRefresh&&qe.createElement("div",{style:{position:"relative"},ref:function(c){return o._pullDown=c}},qe.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!s&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},r}(L.Component);const fP=o0({blogContainer:{paddingTop:"1rem",minHeight:400},blogTitle:{fontWeight:800,paddingBotton:"1rem"},card:{maxWidth:"100%"},media:{height:240},cardActions:{display:"flex",margin:"0 10px",justifyContent:"space-between"},author:{display:"flex"}}),dP="https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/";function pP(){const t=fP(),[r,o]=L.useState(),[i,s]=L.useState(!1),[l]=L.useState(50),[c,d]=L.useState([]),[h,m]=L.useState(1),[y,v]=L.useState(!0),[k,T]=L.useState(1);L.useEffect(()=>{S()},[]);const S=async()=>{if(r&&h==k+1){v(!1);return}let b=r,C=0,$=l,U=1;s(!0),console.log("LOADING: ",i),r||(console.log("INFO: ",r),b=(await ot.get(dP)).data,U=(b==null?void 0:b.ListaEESSPrecio.length)/l,o(b),console.log("DATA: ",b),console.log("GASOLINERAS: ",b==null?void 0:b.ListaEESSPrecio.length)),h>1&&(console.log("else info"),C=h*l,$=C+l),console.log("currentItems: ",C),console.log("newItems: ",$),d(D=>[...D,...b==null?void 0:b.ListaEESSPrecio.slice(C,$)]),console.log("Characters: ",c),m(D=>D+1),T(U),s(!1)};return Y.jsxs(Ig,{maxWidth:"lg",className:t.blogContainer,children:[Y.jsx(Ht,{variant:"h4",className:t.blogTitle,children:"Estaciones Terrestres"}),Y.jsxs(Ht,{variant:"h5",className:t.blogTitle,children:["Fecha de consulta: ",r==null?void 0:r.Fecha]}),Y.jsx(cP,{dataLength:c.length,next:S,hasMore:y,loader:Y.jsx(Nw,{sx:b=>({color:"#fff",zIndex:b.zIndex.drawer+1}),open:i,children:Y.jsx(sP,{color:"#32CD32",size:"large",text:"Cargando",textColor:""})}),endMessage:Y.jsx("p",{children:Y.jsx("b",{children:"Yay! You have seen it all"})}),children:Y.jsx(cm,{container:!0,spacing:3,children:c&&c.map((b,C)=>Y.jsx(cm,{size:{xs:12,sm:6,md:4},children:Y.jsx(Gw,{className:t.card,children:Y.jsxs(Jw,{children:[Y.jsxs(ak,{children:[Y.jsxs(Ht,{gutterBottom:!0,variant:"h5",component:"div",children:["C.P: ",b["C.P."]]}),Y.jsxs(Ht,{variant:"body2",sx:{color:"text.secondary"},children:["Dirección: ",b.Dirección]}),Y.jsxs(Ht,{variant:"body2",sx:{color:"text.secondary"},children:["Horario: ",b.Horario]}),Y.jsxs(Ht,{variant:"body2",sx:{color:"text.secondary"},children:["Localidad: ",b.Localidad]}),Y.jsxs(Ht,{variant:"body2",sx:{color:"text.secondary"},children:["Municipio: ",b.Municipio]}),Y.jsxs(Ht,{variant:"body2",sx:{color:"text.secondary"},children:["Provincia: ",b.Provincia]})]}),Y.jsx(nk,{children:Y.jsx(qw,{size:"small",onClick:()=>{},children:"Leer más"})})]})})},C))})})]})}function hP(){return Y.jsxs(Y.Fragment,{children:[Y.jsx(tw,{}),Y.jsx(d2,{}),Y.jsx(pP,{})]})}const mP=tl({palette:{primary:{main:"#0098CD"},background:{default:"#fff"}}});jv.createRoot(document.getElementById("root")).render(Y.jsx(ow,{theme:mP,children:Y.jsx(hP,{})}));
