var Kv=Object.defineProperty;var Yv=(e,n,o)=>n in e?Kv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var Ti=(e,n,o)=>Yv(e,typeof n!="symbol"?n+"":n,o);function Xv(e,n){for(var o=0;o<n.length;o++){const i=n[o];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(i,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();function fg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ac={exports:{}},Oi={},sc={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h;function Qv(){if(_h)return Pe;_h=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(T){return T===null||typeof T!="object"?null:(T=v&&T[v]||T["@@iterator"],typeof T=="function"?T:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function P(T,q,pe){this.props=T,this.context=q,this.refs=x,this.updater=pe||R}P.prototype.isReactComponent={},P.prototype.setState=function(T,q){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,q,"setState")},P.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function $(){}$.prototype=P.prototype;function U(T,q,pe){this.props=T,this.context=q,this.refs=x,this.updater=pe||R}var j=U.prototype=new $;j.constructor=U,S(j,P.prototype),j.isPureReactComponent=!0;var _=Array.isArray,C=Object.prototype.hasOwnProperty,z={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function J(T,q,pe){var ce,be={},ke=null,Oe=null;if(q!=null)for(ce in q.ref!==void 0&&(Oe=q.ref),q.key!==void 0&&(ke=""+q.key),q)C.call(q,ce)&&!L.hasOwnProperty(ce)&&(be[ce]=q[ce]);var Re=arguments.length-2;if(Re===1)be.children=pe;else if(1<Re){for(var Ae=Array(Re),et=0;et<Re;et++)Ae[et]=arguments[et+2];be.children=Ae}if(T&&T.defaultProps)for(ce in Re=T.defaultProps,Re)be[ce]===void 0&&(be[ce]=Re[ce]);return{$$typeof:e,type:T,key:ke,ref:Oe,props:be,_owner:z.current}}function Z(T,q){return{$$typeof:e,type:T.type,key:q,ref:T.ref,props:T.props,_owner:T._owner}}function b(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function X(T){var q={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(pe){return q[pe]})}var ee=/\/+/g;function re(T,q){return typeof T=="object"&&T!==null&&T.key!=null?X(""+T.key):q.toString(36)}function oe(T,q,pe,ce,be){var ke=typeof T;(ke==="undefined"||ke==="boolean")&&(T=null);var Oe=!1;if(T===null)Oe=!0;else switch(ke){case"string":case"number":Oe=!0;break;case"object":switch(T.$$typeof){case e:case n:Oe=!0}}if(Oe)return Oe=T,be=be(Oe),T=ce===""?"."+re(Oe,0):ce,_(be)?(pe="",T!=null&&(pe=T.replace(ee,"$&/")+"/"),oe(be,q,pe,"",function(et){return et})):be!=null&&(b(be)&&(be=Z(be,pe+(!be.key||Oe&&Oe.key===be.key?"":(""+be.key).replace(ee,"$&/")+"/")+T)),q.push(be)),1;if(Oe=0,ce=ce===""?".":ce+":",_(T))for(var Re=0;Re<T.length;Re++){ke=T[Re];var Ae=ce+re(ke,Re);Oe+=oe(ke,q,pe,Ae,be)}else if(Ae=w(T),typeof Ae=="function")for(T=Ae.call(T),Re=0;!(ke=T.next()).done;)ke=ke.value,Ae=ce+re(ke,Re++),Oe+=oe(ke,q,pe,Ae,be);else if(ke==="object")throw q=String(T),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Oe}function ie(T,q,pe){if(T==null)return T;var ce=[],be=0;return oe(T,ce,"","",function(ke){return q.call(pe,ke,be++)}),ce}function le(T){if(T._status===-1){var q=T._result;q=q(),q.then(function(pe){(T._status===0||T._status===-1)&&(T._status=1,T._result=pe)},function(pe){(T._status===0||T._status===-1)&&(T._status=2,T._result=pe)}),T._status===-1&&(T._status=0,T._result=q)}if(T._status===1)return T._result.default;throw T._result}var ge={current:null},G={transition:null},te={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:G,ReactCurrentOwner:z};function Q(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:ie,forEach:function(T,q,pe){ie(T,function(){q.apply(this,arguments)},pe)},count:function(T){var q=0;return ie(T,function(){q++}),q},toArray:function(T){return ie(T,function(q){return q})||[]},only:function(T){if(!b(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Pe.Component=P,Pe.Fragment=o,Pe.Profiler=s,Pe.PureComponent=U,Pe.StrictMode=i,Pe.Suspense=h,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Pe.act=Q,Pe.cloneElement=function(T,q,pe){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var ce=S({},T.props),be=T.key,ke=T.ref,Oe=T._owner;if(q!=null){if(q.ref!==void 0&&(ke=q.ref,Oe=z.current),q.key!==void 0&&(be=""+q.key),T.type&&T.type.defaultProps)var Re=T.type.defaultProps;for(Ae in q)C.call(q,Ae)&&!L.hasOwnProperty(Ae)&&(ce[Ae]=q[Ae]===void 0&&Re!==void 0?Re[Ae]:q[Ae])}var Ae=arguments.length-2;if(Ae===1)ce.children=pe;else if(1<Ae){Re=Array(Ae);for(var et=0;et<Ae;et++)Re[et]=arguments[et+2];ce.children=Re}return{$$typeof:e,type:T.type,key:be,ref:ke,props:ce,_owner:Oe}},Pe.createContext=function(T){return T={$$typeof:c,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:l,_context:T},T.Consumer=T},Pe.createElement=J,Pe.createFactory=function(T){var q=J.bind(null,T);return q.type=T,q},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(T){return{$$typeof:f,render:T}},Pe.isValidElement=b,Pe.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:le}},Pe.memo=function(T,q){return{$$typeof:m,type:T,compare:q===void 0?null:q}},Pe.startTransition=function(T){var q=G.transition;G.transition={};try{T()}finally{G.transition=q}},Pe.unstable_act=Q,Pe.useCallback=function(T,q){return ge.current.useCallback(T,q)},Pe.useContext=function(T){return ge.current.useContext(T)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(T){return ge.current.useDeferredValue(T)},Pe.useEffect=function(T,q){return ge.current.useEffect(T,q)},Pe.useId=function(){return ge.current.useId()},Pe.useImperativeHandle=function(T,q,pe){return ge.current.useImperativeHandle(T,q,pe)},Pe.useInsertionEffect=function(T,q){return ge.current.useInsertionEffect(T,q)},Pe.useLayoutEffect=function(T,q){return ge.current.useLayoutEffect(T,q)},Pe.useMemo=function(T,q){return ge.current.useMemo(T,q)},Pe.useReducer=function(T,q,pe){return ge.current.useReducer(T,q,pe)},Pe.useRef=function(T){return ge.current.useRef(T)},Pe.useState=function(T){return ge.current.useState(T)},Pe.useSyncExternalStore=function(T,q,pe){return ge.current.useSyncExternalStore(T,q,pe)},Pe.useTransition=function(){return ge.current.useTransition()},Pe.version="18.3.1",Pe}var Ah;function pd(){return Ah||(Ah=1,sc.exports=Qv()),sc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh;function Jv(){if(Mh)return Oi;Mh=1;var e=pd(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,m){var y,v={},w=null,R=null;m!==void 0&&(w=""+m),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(R=h.ref);for(y in h)i.call(h,y)&&!l.hasOwnProperty(y)&&(v[y]=h[y]);if(f&&f.defaultProps)for(y in h=f.defaultProps,h)v[y]===void 0&&(v[y]=h[y]);return{$$typeof:n,type:f,key:w,ref:R,props:v,_owner:s.current}}return Oi.Fragment=o,Oi.jsx=c,Oi.jsxs=c,Oi}var Nh;function Zv(){return Nh||(Nh=1,ac.exports=Jv()),ac.exports}var M=Zv(),gs={},lc={exports:{}},Lt={},uc={exports:{}},cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function e1(){return zh||(zh=1,function(e){function n(G,te){var Q=G.length;G.push(te);e:for(;0<Q;){var T=Q-1>>>1,q=G[T];if(0<s(q,te))G[T]=te,G[Q]=q,Q=T;else break e}}function o(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var te=G[0],Q=G.pop();if(Q!==te){G[0]=Q;e:for(var T=0,q=G.length,pe=q>>>1;T<pe;){var ce=2*(T+1)-1,be=G[ce],ke=ce+1,Oe=G[ke];if(0>s(be,Q))ke<q&&0>s(Oe,be)?(G[T]=Oe,G[ke]=Q,T=ke):(G[T]=be,G[ce]=Q,T=ce);else if(ke<q&&0>s(Oe,Q))G[T]=Oe,G[ke]=Q,T=ke;else break e}}return te}function s(G,te){var Q=G.sortIndex-te.sortIndex;return Q!==0?Q:G.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();e.unstable_now=function(){return c.now()-f}}var h=[],m=[],y=1,v=null,w=3,R=!1,S=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(G){for(var te=o(m);te!==null;){if(te.callback===null)i(m);else if(te.startTime<=G)i(m),te.sortIndex=te.expirationTime,n(h,te);else break;te=o(m)}}function _(G){if(x=!1,j(G),!S)if(o(h)!==null)S=!0,le(C);else{var te=o(m);te!==null&&ge(_,te.startTime-G)}}function C(G,te){S=!1,x&&(x=!1,$(J),J=-1),R=!0;var Q=w;try{for(j(te),v=o(h);v!==null&&(!(v.expirationTime>te)||G&&!X());){var T=v.callback;if(typeof T=="function"){v.callback=null,w=v.priorityLevel;var q=T(v.expirationTime<=te);te=e.unstable_now(),typeof q=="function"?v.callback=q:v===o(h)&&i(h),j(te)}else i(h);v=o(h)}if(v!==null)var pe=!0;else{var ce=o(m);ce!==null&&ge(_,ce.startTime-te),pe=!1}return pe}finally{v=null,w=Q,R=!1}}var z=!1,L=null,J=-1,Z=5,b=-1;function X(){return!(e.unstable_now()-b<Z)}function ee(){if(L!==null){var G=e.unstable_now();b=G;var te=!0;try{te=L(!0,G)}finally{te?re():(z=!1,L=null)}}else z=!1}var re;if(typeof U=="function")re=function(){U(ee)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ie=oe.port2;oe.port1.onmessage=ee,re=function(){ie.postMessage(null)}}else re=function(){P(ee,0)};function le(G){L=G,z||(z=!0,re())}function ge(G,te){J=P(function(){G(e.unstable_now())},te)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(G){G.callback=null},e.unstable_continueExecution=function(){S||R||(S=!0,le(C))},e.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<G?Math.floor(1e3/G):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return o(h)},e.unstable_next=function(G){switch(w){case 1:case 2:case 3:var te=3;break;default:te=w}var Q=w;w=te;try{return G()}finally{w=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(G,te){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Q=w;w=G;try{return te()}finally{w=Q}},e.unstable_scheduleCallback=function(G,te,Q){var T=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?T+Q:T):Q=T,G){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=Q+q,G={id:y++,callback:te,priorityLevel:G,startTime:Q,expirationTime:q,sortIndex:-1},Q>T?(G.sortIndex=Q,n(m,G),o(h)===null&&G===o(m)&&(x?($(J),J=-1):x=!0,ge(_,Q-T))):(G.sortIndex=q,n(h,G),S||R||(S=!0,le(C))),G},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(G){var te=w;return function(){var Q=w;w=te;try{return G.apply(this,arguments)}finally{w=Q}}}}(cc)),cc}var jh;function t1(){return jh||(jh=1,uc.exports=e1()),uc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function n1(){if(Dh)return Lt;Dh=1;var e=pd(),n=t1();function o(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function l(t,r){c(t,r),c(t+"Capture",r)}function c(t,r){for(s[t]=r,t=0;t<r.length;t++)i.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function w(t){return h.call(v,t)?!0:h.call(y,t)?!1:m.test(t)?v[t]=!0:(y[t]=!0,!1)}function R(t,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S(t,r,a,u){if(r===null||typeof r>"u"||R(t,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function x(t,r,a,u,d,p,g){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=p,this.removeEmptyString=g}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){P[t]=new x(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];P[r]=new x(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){P[t]=new x(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){P[t]=new x(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){P[t]=new x(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){P[t]=new x(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){P[t]=new x(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){P[t]=new x(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){P[t]=new x(t,5,!1,t.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace($,U);P[r]=new x(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace($,U);P[r]=new x(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace($,U);P[r]=new x(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){P[t]=new x(t,1,!1,t.toLowerCase(),null,!1,!1)}),P.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){P[t]=new x(t,1,!1,t.toLowerCase(),null,!0,!0)});function j(t,r,a,u){var d=P.hasOwnProperty(r)?P[r]:null;(d!==null?d.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(S(r,a,d,u)&&(a=null),u||d===null?w(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,u=d.attributeNamespace,a===null?t.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?t.setAttributeNS(u,r,a):t.setAttribute(r,a))))}var _=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),z=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),X=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),G=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Object.assign,T;function q(t){if(T===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);T=r&&r[1]||""}return`
`+T+t}var pe=!1;function ce(t,r){if(!t||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(I){var u=I}Reflect.construct(t,[],r)}else{try{r.call()}catch(I){u=I}t.call(r.prototype)}else{try{throw Error()}catch(I){u=I}t()}}catch(I){if(I&&u&&typeof I.stack=="string"){for(var d=I.stack.split(`
`),p=u.stack.split(`
`),g=d.length-1,k=p.length-1;1<=g&&0<=k&&d[g]!==p[k];)k--;for(;1<=g&&0<=k;g--,k--)if(d[g]!==p[k]){if(g!==1||k!==1)do if(g--,k--,0>k||d[g]!==p[k]){var E=`
`+d[g].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=g&&0<=k);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?q(t):""}function be(t){switch(t.tag){case 5:return q(t.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return t=ce(t.type,!1),t;case 11:return t=ce(t.type.render,!1),t;case 1:return t=ce(t.type,!0),t;default:return""}}function ke(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case z:return"Portal";case Z:return"Profiler";case J:return"StrictMode";case re:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X:return(t.displayName||"Context")+".Consumer";case b:return(t._context.displayName||"Context")+".Provider";case ee:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ie:return r=t.displayName||null,r!==null?r:ke(t.type)||"Memo";case le:r=t._payload,t=t._init;try{return ke(t(r))}catch{}}return null}function Oe(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Re(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ae(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function et(t){var r=Ae(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),u=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,p.call(this,g)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function ln(t){t._valueTracker||(t._valueTracker=et(t))}function Mt(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return t&&(u=Ae(t)?t.checked?"true":"false":t.value),t=u,t!==a?(r.setValue(t),!0):!1}function Nt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nn(t,r){var a=r.checked;return Q({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function mt(t,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=Re(r.value!=null?r.value:a),t._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Cr(t,r){r=r.checked,r!=null&&j(t,"checked",r,!1)}function Pr(t,r){Cr(t,r);var a=Re(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Tt(t,r.type,a):r.hasOwnProperty("defaultValue")&&Tt(t,r.type,Re(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function at(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Tt(t,r,a){(r!=="number"||Nt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var zn=Array.isArray;function Qt(t,r,a,u){if(t=t.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=r.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&u&&(t[a].defaultSelected=!0)}else{for(a=""+Re(a),r=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}r!==null||t[d].disabled||(r=t[d])}r!==null&&(r.selected=!0)}}function Kn(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(o(91));return Q({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ye(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(o(92));if(zn(a)){if(1<a.length)throw Error(o(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:Re(a)}}function Yn(t,r){var a=Re(r.value),u=Re(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),u!=null&&(t.defaultValue=""+u)}function Er(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Xn(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rr(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Xn(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Be,Ge=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,d){MSApp.execUnsafeLocalFunction(function(){return t(r,a,u,d)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Be=Be||document.createElement("div"),Be.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Be.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function bn(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ho=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(t){Ho.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Qn[r]=Qn[t]})});function la(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Qn.hasOwnProperty(t)&&Qn[t]?(""+r).trim():r+"px"}function Hd(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=la(a,r[a],u);a==="float"&&(a="cssFloat"),u?t.setProperty(a,d):t[a]=d}}var Z0=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(t,r){if(r){if(Z0[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(o(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(o(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(o(61))}if(r.style!=null&&typeof r.style!="object")throw Error(o(62))}}function bl(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function Sl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wl=null,Qr=null,Jr=null;function Vd(t){if(t=pi(t)){if(typeof wl!="function")throw Error(o(280));var r=t.stateNode;r&&(r=Aa(r),wl(t.stateNode,t.type,r))}}function Gd(t){Qr?Jr?Jr.push(t):Jr=[t]:Qr=t}function Kd(){if(Qr){var t=Qr,r=Jr;if(Jr=Qr=null,Vd(t),r)for(t=0;t<r.length;t++)Vd(r[t])}}function Yd(t,r){return t(r)}function Xd(){}var kl=!1;function Qd(t,r,a){if(kl)return t(r,a);kl=!0;try{return Yd(t,r,a)}finally{kl=!1,(Qr!==null||Jr!==null)&&(Xd(),Kd())}}function Vo(t,r){var a=t.stateNode;if(a===null)return null;var u=Aa(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,r,typeof a));return a}var Cl=!1;if(f)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Cl=!1}function ey(t,r,a,u,d,p,g,k,E){var I=Array.prototype.slice.call(arguments,3);try{r.apply(a,I)}catch(V){this.onError(V)}}var Ko=!1,ua=null,ca=!1,Pl=null,ty={onError:function(t){Ko=!0,ua=t}};function ny(t,r,a,u,d,p,g,k,E){Ko=!1,ua=null,ey.apply(ty,arguments)}function ry(t,r,a,u,d,p,g,k,E){if(ny.apply(this,arguments),Ko){if(Ko){var I=ua;Ko=!1,ua=null}else throw Error(o(198));ca||(ca=!0,Pl=I)}}function Tr(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function Jd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Zd(t){if(Tr(t)!==t)throw Error(o(188))}function oy(t){var r=t.alternate;if(!r){if(r=Tr(t),r===null)throw Error(o(188));return r!==t?null:t}for(var a=t,u=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Zd(d),t;if(p===u)return Zd(d),r;p=p.sibling}throw Error(o(188))}if(a.return!==u.return)a=d,u=p;else{for(var g=!1,k=d.child;k;){if(k===a){g=!0,a=d,u=p;break}if(k===u){g=!0,u=d,a=p;break}k=k.sibling}if(!g){for(k=p.child;k;){if(k===a){g=!0,a=p,u=d;break}if(k===u){g=!0,u=p,a=d;break}k=k.sibling}if(!g)throw Error(o(189))}}if(a.alternate!==u)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:r}function ef(t){return t=oy(t),t!==null?tf(t):null}function tf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=tf(t);if(r!==null)return r;t=t.sibling}return null}var nf=n.unstable_scheduleCallback,rf=n.unstable_cancelCallback,iy=n.unstable_shouldYield,ay=n.unstable_requestPaint,tt=n.unstable_now,sy=n.unstable_getCurrentPriorityLevel,El=n.unstable_ImmediatePriority,of=n.unstable_UserBlockingPriority,da=n.unstable_NormalPriority,ly=n.unstable_LowPriority,af=n.unstable_IdlePriority,fa=null,xn=null;function uy(t){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(fa,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:fy,cy=Math.log,dy=Math.LN2;function fy(t){return t>>>=0,t===0?32:31-(cy(t)/dy|0)|0}var pa=64,ha=4194304;function Yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ma(t,r){var a=t.pendingLanes;if(a===0)return 0;var u=0,d=t.suspendedLanes,p=t.pingedLanes,g=a&268435455;if(g!==0){var k=g&~d;k!==0?u=Yo(k):(p&=g,p!==0&&(u=Yo(p)))}else g=a&~d,g!==0?u=Yo(g):p!==0&&(u=Yo(p));if(u===0)return 0;if(r!==0&&r!==u&&!(r&d)&&(d=u&-u,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if(u&4&&(u|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)a=31-un(r),d=1<<a,u|=t[a],r&=~d;return u}function py(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hy(t,r){for(var a=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var g=31-un(p),k=1<<g,E=d[g];E===-1?(!(k&a)||k&u)&&(d[g]=py(k,r)):E<=r&&(t.expiredLanes|=k),p&=~k}}function Rl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sf(){var t=pa;return pa<<=1,!(pa&4194240)&&(pa=64),t}function Tl(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Xo(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-un(r),t[r]=a}function my(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-un(a),p=1<<d;r[d]=0,u[d]=-1,t[d]=-1,a&=~p}}function Ol(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var u=31-un(a),d=1<<u;d&r|t[u]&r&&(t[u]|=r),a&=~d}}var De=0;function lf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uf,_l,cf,df,ff,Al=!1,ga=[],Jn=null,Zn=null,er=null,Qo=new Map,Jo=new Map,tr=[],gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pf(t,r){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Qo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(r.pointerId)}}function Zo(t,r,a,u,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},r!==null&&(r=pi(r),r!==null&&_l(r)),t):(t.eventSystemFlags|=u,r=t.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),t)}function yy(t,r,a,u,d){switch(r){case"focusin":return Jn=Zo(Jn,t,r,a,u,d),!0;case"dragenter":return Zn=Zo(Zn,t,r,a,u,d),!0;case"mouseover":return er=Zo(er,t,r,a,u,d),!0;case"pointerover":var p=d.pointerId;return Qo.set(p,Zo(Qo.get(p)||null,t,r,a,u,d)),!0;case"gotpointercapture":return p=d.pointerId,Jo.set(p,Zo(Jo.get(p)||null,t,r,a,u,d)),!0}return!1}function hf(t){var r=Or(t.target);if(r!==null){var a=Tr(r);if(a!==null){if(r=a.tag,r===13){if(r=Jd(a),r!==null){t.blockedOn=r,ff(t.priority,function(){cf(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ya(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Nl(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var u=new a.constructor(a.type,a);xl=u,a.target.dispatchEvent(u),xl=null}else return r=pi(a),r!==null&&_l(r),t.blockedOn=a,!1;r.shift()}return!0}function mf(t,r,a){ya(t)&&a.delete(r)}function vy(){Al=!1,Jn!==null&&ya(Jn)&&(Jn=null),Zn!==null&&ya(Zn)&&(Zn=null),er!==null&&ya(er)&&(er=null),Qo.forEach(mf),Jo.forEach(mf)}function ei(t,r){t.blockedOn===r&&(t.blockedOn=null,Al||(Al=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,vy)))}function ti(t){function r(d){return ei(d,t)}if(0<ga.length){ei(ga[0],t);for(var a=1;a<ga.length;a++){var u=ga[a];u.blockedOn===t&&(u.blockedOn=null)}}for(Jn!==null&&ei(Jn,t),Zn!==null&&ei(Zn,t),er!==null&&ei(er,t),Qo.forEach(r),Jo.forEach(r),a=0;a<tr.length;a++)u=tr[a],u.blockedOn===t&&(u.blockedOn=null);for(;0<tr.length&&(a=tr[0],a.blockedOn===null);)hf(a),a.blockedOn===null&&tr.shift()}var Zr=_.ReactCurrentBatchConfig,va=!0;function by(t,r,a,u){var d=De,p=Zr.transition;Zr.transition=null;try{De=1,Ml(t,r,a,u)}finally{De=d,Zr.transition=p}}function xy(t,r,a,u){var d=De,p=Zr.transition;Zr.transition=null;try{De=4,Ml(t,r,a,u)}finally{De=d,Zr.transition=p}}function Ml(t,r,a,u){if(va){var d=Nl(t,r,a,u);if(d===null)Xl(t,r,u,ba,a),pf(t,u);else if(yy(d,t,r,a,u))u.stopPropagation();else if(pf(t,u),r&4&&-1<gy.indexOf(t)){for(;d!==null;){var p=pi(d);if(p!==null&&uf(p),p=Nl(t,r,a,u),p===null&&Xl(t,r,u,ba,a),p===d)break;d=p}d!==null&&u.stopPropagation()}else Xl(t,r,u,null,a)}}var ba=null;function Nl(t,r,a,u){if(ba=null,t=Sl(u),t=Or(t),t!==null)if(r=Tr(t),r===null)t=null;else if(a=r.tag,a===13){if(t=Jd(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ba=t,null}function gf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sy()){case El:return 1;case of:return 4;case da:case ly:return 16;case af:return 536870912;default:return 16}default:return 16}}var nr=null,zl=null,xa=null;function yf(){if(xa)return xa;var t,r=zl,a=r.length,u,d="value"in nr?nr.value:nr.textContent,p=d.length;for(t=0;t<a&&r[t]===d[t];t++);var g=a-t;for(u=1;u<=g&&r[a-u]===d[p-u];u++);return xa=d.slice(t,1<u?1-u:void 0)}function Sa(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function vf(){return!1}function Ut(t){function r(a,u,d,p,g){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=g,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(a=t[k],this[k]=a?a(p):p[k]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?wa:vf,this.isPropagationStopped=vf,this}return Q(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),r}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Ut(eo),ni=Q({},eo,{view:0,detail:0}),Sy=Ut(ni),Dl,$l,ri,ka=Q({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ll,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ri&&(ri&&t.type==="mousemove"?(Dl=t.screenX-ri.screenX,$l=t.screenY-ri.screenY):$l=Dl=0,ri=t),Dl)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),bf=Ut(ka),wy=Q({},ka,{dataTransfer:0}),ky=Ut(wy),Cy=Q({},ni,{relatedTarget:0}),Il=Ut(Cy),Py=Q({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ey=Ut(Py),Ry=Q({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ty=Ut(Ry),Oy=Q({},eo,{data:0}),xf=Ut(Oy),_y={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},My={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ny(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=My[t])?!!r[t]:!1}function Ll(){return Ny}var zy=Q({},ni,{key:function(t){if(t.key){var r=_y[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ll,charCode:function(t){return t.type==="keypress"?Sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jy=Ut(zy),Dy=Q({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sf=Ut(Dy),$y=Q({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ll}),Iy=Ut($y),Ly=Q({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),By=Ut(Ly),Fy=Q({},ka,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=Ut(Fy),Wy=[9,13,27,32],Bl=f&&"CompositionEvent"in window,oi=null;f&&"documentMode"in document&&(oi=document.documentMode);var qy=f&&"TextEvent"in window&&!oi,wf=f&&(!Bl||oi&&8<oi&&11>=oi),kf=" ",Cf=!1;function Pf(t,r){switch(t){case"keyup":return Wy.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var to=!1;function Hy(t,r){switch(t){case"compositionend":return Ef(r);case"keypress":return r.which!==32?null:(Cf=!0,kf);case"textInput":return t=r.data,t===kf&&Cf?null:t;default:return null}}function Vy(t,r){if(to)return t==="compositionend"||!Bl&&Pf(t,r)?(t=yf(),xa=zl=nr=null,to=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return wf&&r.locale!=="ko"?null:r.data;default:return null}}var Gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Gy[t.type]:r==="textarea"}function Tf(t,r,a,u){Gd(u),r=Ta(r,"onChange"),0<r.length&&(a=new jl("onChange","change",null,a,u),t.push({event:a,listeners:r}))}var ii=null,ai=null;function Ky(t){Vf(t,0)}function Ca(t){var r=ao(t);if(Mt(r))return t}function Yy(t,r){if(t==="change")return r}var Of=!1;if(f){var Fl;if(f){var Ul="oninput"in document;if(!Ul){var _f=document.createElement("div");_f.setAttribute("oninput","return;"),Ul=typeof _f.oninput=="function"}Fl=Ul}else Fl=!1;Of=Fl&&(!document.documentMode||9<document.documentMode)}function Af(){ii&&(ii.detachEvent("onpropertychange",Mf),ai=ii=null)}function Mf(t){if(t.propertyName==="value"&&Ca(ai)){var r=[];Tf(r,ai,t,Sl(t)),Qd(Ky,r)}}function Xy(t,r,a){t==="focusin"?(Af(),ii=r,ai=a,ii.attachEvent("onpropertychange",Mf)):t==="focusout"&&Af()}function Qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ca(ai)}function Jy(t,r){if(t==="click")return Ca(r)}function Zy(t,r){if(t==="input"||t==="change")return Ca(r)}function ev(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var cn=typeof Object.is=="function"?Object.is:ev;function si(t,r){if(cn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(r,d)||!cn(t[d],r[d]))return!1}return!0}function Nf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zf(t,r){var a=Nf(t);t=0;for(var u;a;){if(a.nodeType===3){if(u=t+a.textContent.length,t<=r&&u>=r)return{node:a,offset:r-t};t=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nf(a)}}function jf(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?jf(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Df(){for(var t=window,r=Nt();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Nt(t.document)}return r}function Wl(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function tv(t){var r=Df(),a=t.focusedElem,u=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&jf(a.ownerDocument.documentElement,a)){if(u!==null&&Wl(a)){if(r=u.start,t=u.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!t.extend&&p>u&&(d=u,u=p,p=d),d=zf(a,p);var g=zf(a,u);d&&g&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),t.removeAllRanges(),p>u?(t.addRange(r),t.extend(g.node,g.offset)):(r.setEnd(g.node,g.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nv=f&&"documentMode"in document&&11>=document.documentMode,no=null,ql=null,li=null,Hl=!1;function $f(t,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hl||no==null||no!==Nt(u)||(u=no,"selectionStart"in u&&Wl(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),li&&si(li,u)||(li=u,u=Ta(ql,"onSelect"),0<u.length&&(r=new jl("onSelect","select",null,r,a),t.push({event:r,listeners:u}),r.target=no)))}function Pa(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var ro={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},Vl={},If={};f&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function Ea(t){if(Vl[t])return Vl[t];if(!ro[t])return t;var r=ro[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in If)return Vl[t]=r[a];return t}var Lf=Ea("animationend"),Bf=Ea("animationiteration"),Ff=Ea("animationstart"),Uf=Ea("transitionend"),Wf=new Map,qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,r){Wf.set(t,r),l(r,[t])}for(var Gl=0;Gl<qf.length;Gl++){var Kl=qf[Gl],rv=Kl.toLowerCase(),ov=Kl[0].toUpperCase()+Kl.slice(1);rr(rv,"on"+ov)}rr(Lf,"onAnimationEnd"),rr(Bf,"onAnimationIteration"),rr(Ff,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(Uf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function Hf(t,r,a){var u=t.type||"unknown-event";t.currentTarget=a,ry(u,r,void 0,t),t.currentTarget=null}function Vf(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var u=t[a],d=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var g=u.length-1;0<=g;g--){var k=u[g],E=k.instance,I=k.currentTarget;if(k=k.listener,E!==p&&d.isPropagationStopped())break e;Hf(d,k,I),p=E}else for(g=0;g<u.length;g++){if(k=u[g],E=k.instance,I=k.currentTarget,k=k.listener,E!==p&&d.isPropagationStopped())break e;Hf(d,k,I),p=E}}}if(ca)throw t=Pl,ca=!1,Pl=null,t}function Fe(t,r){var a=r[nu];a===void 0&&(a=r[nu]=new Set);var u=t+"__bubble";a.has(u)||(Gf(r,t,2,!1),a.add(u))}function Yl(t,r,a){var u=0;r&&(u|=4),Gf(a,t,u,r)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function ci(t){if(!t[Ra]){t[Ra]=!0,i.forEach(function(a){a!=="selectionchange"&&(iv.has(a)||Yl(a,!1,t),Yl(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Ra]||(r[Ra]=!0,Yl("selectionchange",!1,r))}}function Gf(t,r,a,u){switch(gf(r)){case 1:var d=by;break;case 4:d=xy;break;default:d=Ml}a=d.bind(null,r,a,t),d=void 0,!Cl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(r,a,{capture:!0,passive:d}):t.addEventListener(r,a,!0):d!==void 0?t.addEventListener(r,a,{passive:d}):t.addEventListener(r,a,!1)}function Xl(t,r,a,u,d){var p=u;if(!(r&1)&&!(r&2)&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var k=u.stateNode.containerInfo;if(k===d||k.nodeType===8&&k.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var E=g.tag;if((E===3||E===4)&&(E=g.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;g=g.return}for(;k!==null;){if(g=Or(k),g===null)return;if(E=g.tag,E===5||E===6){u=p=g;continue e}k=k.parentNode}}u=u.return}Qd(function(){var I=p,V=Sl(a),K=[];e:{var H=Wf.get(t);if(H!==void 0){var ne=jl,se=t;switch(t){case"keypress":if(Sa(a)===0)break e;case"keydown":case"keyup":ne=jy;break;case"focusin":se="focus",ne=Il;break;case"focusout":se="blur",ne=Il;break;case"beforeblur":case"afterblur":ne=Il;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Iy;break;case Lf:case Bf:case Ff:ne=Ey;break;case Uf:ne=By;break;case"scroll":ne=Sy;break;case"wheel":ne=Uy;break;case"copy":case"cut":case"paste":ne=Ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=Sf}var ue=(r&4)!==0,nt=!ue&&t==="scroll",N=ue?H!==null?H+"Capture":null:H;ue=[];for(var O=I,D;O!==null;){D=O;var Y=D.stateNode;if(D.tag===5&&Y!==null&&(D=Y,N!==null&&(Y=Vo(O,N),Y!=null&&ue.push(di(O,Y,D)))),nt)break;O=O.return}0<ue.length&&(H=new ne(H,se,null,a,V),K.push({event:H,listeners:ue}))}}if(!(r&7)){e:{if(H=t==="mouseover"||t==="pointerover",ne=t==="mouseout"||t==="pointerout",H&&a!==xl&&(se=a.relatedTarget||a.fromElement)&&(Or(se)||se[jn]))break e;if((ne||H)&&(H=V.window===V?V:(H=V.ownerDocument)?H.defaultView||H.parentWindow:window,ne?(se=a.relatedTarget||a.toElement,ne=I,se=se?Or(se):null,se!==null&&(nt=Tr(se),se!==nt||se.tag!==5&&se.tag!==6)&&(se=null)):(ne=null,se=I),ne!==se)){if(ue=bf,Y="onMouseLeave",N="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(ue=Sf,Y="onPointerLeave",N="onPointerEnter",O="pointer"),nt=ne==null?H:ao(ne),D=se==null?H:ao(se),H=new ue(Y,O+"leave",ne,a,V),H.target=nt,H.relatedTarget=D,Y=null,Or(V)===I&&(ue=new ue(N,O+"enter",se,a,V),ue.target=D,ue.relatedTarget=nt,Y=ue),nt=Y,ne&&se)t:{for(ue=ne,N=se,O=0,D=ue;D;D=oo(D))O++;for(D=0,Y=N;Y;Y=oo(Y))D++;for(;0<O-D;)ue=oo(ue),O--;for(;0<D-O;)N=oo(N),D--;for(;O--;){if(ue===N||N!==null&&ue===N.alternate)break t;ue=oo(ue),N=oo(N)}ue=null}else ue=null;ne!==null&&Kf(K,H,ne,ue,!1),se!==null&&nt!==null&&Kf(K,nt,se,ue,!0)}}e:{if(H=I?ao(I):window,ne=H.nodeName&&H.nodeName.toLowerCase(),ne==="select"||ne==="input"&&H.type==="file")var de=Yy;else if(Rf(H))if(Of)de=Zy;else{de=Qy;var he=Xy}else(ne=H.nodeName)&&ne.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(de=Jy);if(de&&(de=de(t,I))){Tf(K,de,a,V);break e}he&&he(t,H,I),t==="focusout"&&(he=H._wrapperState)&&he.controlled&&H.type==="number"&&Tt(H,"number",H.value)}switch(he=I?ao(I):window,t){case"focusin":(Rf(he)||he.contentEditable==="true")&&(no=he,ql=I,li=null);break;case"focusout":li=ql=no=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,$f(K,a,V);break;case"selectionchange":if(nv)break;case"keydown":case"keyup":$f(K,a,V)}var me;if(Bl)e:{switch(t){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else to?Pf(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(wf&&a.locale!=="ko"&&(to||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&to&&(me=yf()):(nr=V,zl="value"in nr?nr.value:nr.textContent,to=!0)),he=Ta(I,ve),0<he.length&&(ve=new xf(ve,t,null,a,V),K.push({event:ve,listeners:he}),me?ve.data=me:(me=Ef(a),me!==null&&(ve.data=me)))),(me=qy?Hy(t,a):Vy(t,a))&&(I=Ta(I,"onBeforeInput"),0<I.length&&(V=new xf("onBeforeInput","beforeinput",null,a,V),K.push({event:V,listeners:I}),V.data=me))}Vf(K,r)})}function di(t,r,a){return{instance:t,listener:r,currentTarget:a}}function Ta(t,r){for(var a=r+"Capture",u=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Vo(t,a),p!=null&&u.unshift(di(t,p,d)),p=Vo(t,r),p!=null&&u.push(di(t,p,d))),t=t.return}return u}function oo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kf(t,r,a,u,d){for(var p=r._reactName,g=[];a!==null&&a!==u;){var k=a,E=k.alternate,I=k.stateNode;if(E!==null&&E===u)break;k.tag===5&&I!==null&&(k=I,d?(E=Vo(a,p),E!=null&&g.unshift(di(a,E,k))):d||(E=Vo(a,p),E!=null&&g.push(di(a,E,k)))),a=a.return}g.length!==0&&t.push({event:r,listeners:g})}var av=/\r\n?/g,sv=/\u0000|\uFFFD/g;function Yf(t){return(typeof t=="string"?t:""+t).replace(av,`
`).replace(sv,"")}function Oa(t,r,a){if(r=Yf(r),Yf(t)!==r&&a)throw Error(o(425))}function _a(){}var Ql=null,Jl=null;function Zl(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,lv=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,uv=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(t){return Xf.resolve(null).then(t).catch(cv)}:eu;function cv(t){setTimeout(function(){throw t})}function tu(t,r){var a=r,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){t.removeChild(d),ti(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);ti(r)}function or(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Qf(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var io=Math.random().toString(36).slice(2),Sn="__reactFiber$"+io,fi="__reactProps$"+io,jn="__reactContainer$"+io,nu="__reactEvents$"+io,dv="__reactListeners$"+io,fv="__reactHandles$"+io;function Or(t){var r=t[Sn];if(r)return r;for(var a=t.parentNode;a;){if(r=a[jn]||a[Sn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Qf(t);t!==null;){if(a=t[Sn])return a;t=Qf(t)}return r}t=a,a=t.parentNode}return null}function pi(t){return t=t[Sn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(o(33))}function Aa(t){return t[fi]||null}var ru=[],so=-1;function ir(t){return{current:t}}function Ue(t){0>so||(t.current=ru[so],ru[so]=null,so--)}function Le(t,r){so++,ru[so]=t.current,t.current=r}var ar={},wt=ir(ar),zt=ir(!1),_r=ar;function lo(t,r){var a=t.type.contextTypes;if(!a)return ar;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=d),d}function jt(t){return t=t.childContextTypes,t!=null}function Ma(){Ue(zt),Ue(wt)}function Jf(t,r,a){if(wt.current!==ar)throw Error(o(168));Le(wt,r),Le(zt,a)}function Zf(t,r,a){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in r))throw Error(o(108,Oe(t)||"Unknown",d));return Q({},a,u)}function Na(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,_r=wt.current,Le(wt,t),Le(zt,zt.current),!0}function ep(t,r,a){var u=t.stateNode;if(!u)throw Error(o(169));a?(t=Zf(t,r,_r),u.__reactInternalMemoizedMergedChildContext=t,Ue(zt),Ue(wt),Le(wt,t)):Ue(zt),Le(zt,a)}var Dn=null,za=!1,ou=!1;function tp(t){Dn===null?Dn=[t]:Dn.push(t)}function pv(t){za=!0,tp(t)}function sr(){if(!ou&&Dn!==null){ou=!0;var t=0,r=De;try{var a=Dn;for(De=1;t<a.length;t++){var u=a[t];do u=u(!0);while(u!==null)}Dn=null,za=!1}catch(d){throw Dn!==null&&(Dn=Dn.slice(t+1)),nf(El,sr),d}finally{De=r,ou=!1}}return null}var uo=[],co=0,ja=null,Da=0,Jt=[],Zt=0,Ar=null,$n=1,In="";function Mr(t,r){uo[co++]=Da,uo[co++]=ja,ja=t,Da=r}function np(t,r,a){Jt[Zt++]=$n,Jt[Zt++]=In,Jt[Zt++]=Ar,Ar=t;var u=$n;t=In;var d=32-un(u)-1;u&=~(1<<d),a+=1;var p=32-un(r)+d;if(30<p){var g=d-d%5;p=(u&(1<<g)-1).toString(32),u>>=g,d-=g,$n=1<<32-un(r)+d|a<<d|u,In=p+t}else $n=1<<p|a<<d|u,In=t}function iu(t){t.return!==null&&(Mr(t,1),np(t,1,0))}function au(t){for(;t===ja;)ja=uo[--co],uo[co]=null,Da=uo[--co],uo[co]=null;for(;t===Ar;)Ar=Jt[--Zt],Jt[Zt]=null,In=Jt[--Zt],Jt[Zt]=null,$n=Jt[--Zt],Jt[Zt]=null}var Wt=null,qt=null,We=!1,dn=null;function rp(t,r){var a=rn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function op(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Wt=t,qt=or(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Wt=t,qt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Ar!==null?{id:$n,overflow:In}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=rn(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,Wt=t,qt=null,!0):!1;default:return!1}}function su(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lu(t){if(We){var r=qt;if(r){var a=r;if(!op(t,r)){if(su(t))throw Error(o(418));r=or(a.nextSibling);var u=Wt;r&&op(t,r)?rp(u,a):(t.flags=t.flags&-4097|2,We=!1,Wt=t)}}else{if(su(t))throw Error(o(418));t.flags=t.flags&-4097|2,We=!1,Wt=t}}}function ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function $a(t){if(t!==Wt)return!1;if(!We)return ip(t),We=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Zl(t.type,t.memoizedProps)),r&&(r=qt)){if(su(t))throw ap(),Error(o(418));for(;r;)rp(t,r),r=or(r.nextSibling)}if(ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){qt=or(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}qt=null}}else qt=Wt?or(t.stateNode.nextSibling):null;return!0}function ap(){for(var t=qt;t;)t=or(t.nextSibling)}function fo(){qt=Wt=null,We=!1}function uu(t){dn===null?dn=[t]:dn.push(t)}var hv=_.ReactCurrentBatchConfig;function hi(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(o(309));var u=a.stateNode}if(!u)throw Error(o(147,t));var d=u,p=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(g){var k=d.refs;g===null?delete k[p]:k[p]=g},r._stringRef=p,r)}if(typeof t!="string")throw Error(o(284));if(!a._owner)throw Error(o(290,t))}return t}function Ia(t,r){throw t=Object.prototype.toString.call(r),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function sp(t){var r=t._init;return r(t._payload)}function lp(t){function r(N,O){if(t){var D=N.deletions;D===null?(N.deletions=[O],N.flags|=16):D.push(O)}}function a(N,O){if(!t)return null;for(;O!==null;)r(N,O),O=O.sibling;return null}function u(N,O){for(N=new Map;O!==null;)O.key!==null?N.set(O.key,O):N.set(O.index,O),O=O.sibling;return N}function d(N,O){return N=mr(N,O),N.index=0,N.sibling=null,N}function p(N,O,D){return N.index=D,t?(D=N.alternate,D!==null?(D=D.index,D<O?(N.flags|=2,O):D):(N.flags|=2,O)):(N.flags|=1048576,O)}function g(N){return t&&N.alternate===null&&(N.flags|=2),N}function k(N,O,D,Y){return O===null||O.tag!==6?(O=ec(D,N.mode,Y),O.return=N,O):(O=d(O,D),O.return=N,O)}function E(N,O,D,Y){var de=D.type;return de===L?V(N,O,D.props.children,Y,D.key):O!==null&&(O.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===le&&sp(de)===O.type)?(Y=d(O,D.props),Y.ref=hi(N,O,D),Y.return=N,Y):(Y=ls(D.type,D.key,D.props,null,N.mode,Y),Y.ref=hi(N,O,D),Y.return=N,Y)}function I(N,O,D,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==D.containerInfo||O.stateNode.implementation!==D.implementation?(O=tc(D,N.mode,Y),O.return=N,O):(O=d(O,D.children||[]),O.return=N,O)}function V(N,O,D,Y,de){return O===null||O.tag!==7?(O=Br(D,N.mode,Y,de),O.return=N,O):(O=d(O,D),O.return=N,O)}function K(N,O,D){if(typeof O=="string"&&O!==""||typeof O=="number")return O=ec(""+O,N.mode,D),O.return=N,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return D=ls(O.type,O.key,O.props,null,N.mode,D),D.ref=hi(N,null,O),D.return=N,D;case z:return O=tc(O,N.mode,D),O.return=N,O;case le:var Y=O._init;return K(N,Y(O._payload),D)}if(zn(O)||te(O))return O=Br(O,N.mode,D,null),O.return=N,O;Ia(N,O)}return null}function H(N,O,D,Y){var de=O!==null?O.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return de!==null?null:k(N,O,""+D,Y);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case C:return D.key===de?E(N,O,D,Y):null;case z:return D.key===de?I(N,O,D,Y):null;case le:return de=D._init,H(N,O,de(D._payload),Y)}if(zn(D)||te(D))return de!==null?null:V(N,O,D,Y,null);Ia(N,D)}return null}function ne(N,O,D,Y,de){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return N=N.get(D)||null,k(O,N,""+Y,de);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case C:return N=N.get(Y.key===null?D:Y.key)||null,E(O,N,Y,de);case z:return N=N.get(Y.key===null?D:Y.key)||null,I(O,N,Y,de);case le:var he=Y._init;return ne(N,O,D,he(Y._payload),de)}if(zn(Y)||te(Y))return N=N.get(D)||null,V(O,N,Y,de,null);Ia(O,Y)}return null}function se(N,O,D,Y){for(var de=null,he=null,me=O,ve=O=0,vt=null;me!==null&&ve<D.length;ve++){me.index>ve?(vt=me,me=null):vt=me.sibling;var _e=H(N,me,D[ve],Y);if(_e===null){me===null&&(me=vt);break}t&&me&&_e.alternate===null&&r(N,me),O=p(_e,O,ve),he===null?de=_e:he.sibling=_e,he=_e,me=vt}if(ve===D.length)return a(N,me),We&&Mr(N,ve),de;if(me===null){for(;ve<D.length;ve++)me=K(N,D[ve],Y),me!==null&&(O=p(me,O,ve),he===null?de=me:he.sibling=me,he=me);return We&&Mr(N,ve),de}for(me=u(N,me);ve<D.length;ve++)vt=ne(me,N,ve,D[ve],Y),vt!==null&&(t&&vt.alternate!==null&&me.delete(vt.key===null?ve:vt.key),O=p(vt,O,ve),he===null?de=vt:he.sibling=vt,he=vt);return t&&me.forEach(function(gr){return r(N,gr)}),We&&Mr(N,ve),de}function ue(N,O,D,Y){var de=te(D);if(typeof de!="function")throw Error(o(150));if(D=de.call(D),D==null)throw Error(o(151));for(var he=de=null,me=O,ve=O=0,vt=null,_e=D.next();me!==null&&!_e.done;ve++,_e=D.next()){me.index>ve?(vt=me,me=null):vt=me.sibling;var gr=H(N,me,_e.value,Y);if(gr===null){me===null&&(me=vt);break}t&&me&&gr.alternate===null&&r(N,me),O=p(gr,O,ve),he===null?de=gr:he.sibling=gr,he=gr,me=vt}if(_e.done)return a(N,me),We&&Mr(N,ve),de;if(me===null){for(;!_e.done;ve++,_e=D.next())_e=K(N,_e.value,Y),_e!==null&&(O=p(_e,O,ve),he===null?de=_e:he.sibling=_e,he=_e);return We&&Mr(N,ve),de}for(me=u(N,me);!_e.done;ve++,_e=D.next())_e=ne(me,N,ve,_e.value,Y),_e!==null&&(t&&_e.alternate!==null&&me.delete(_e.key===null?ve:_e.key),O=p(_e,O,ve),he===null?de=_e:he.sibling=_e,he=_e);return t&&me.forEach(function(Gv){return r(N,Gv)}),We&&Mr(N,ve),de}function nt(N,O,D,Y){if(typeof D=="object"&&D!==null&&D.type===L&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case C:e:{for(var de=D.key,he=O;he!==null;){if(he.key===de){if(de=D.type,de===L){if(he.tag===7){a(N,he.sibling),O=d(he,D.props.children),O.return=N,N=O;break e}}else if(he.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===le&&sp(de)===he.type){a(N,he.sibling),O=d(he,D.props),O.ref=hi(N,he,D),O.return=N,N=O;break e}a(N,he);break}else r(N,he);he=he.sibling}D.type===L?(O=Br(D.props.children,N.mode,Y,D.key),O.return=N,N=O):(Y=ls(D.type,D.key,D.props,null,N.mode,Y),Y.ref=hi(N,O,D),Y.return=N,N=Y)}return g(N);case z:e:{for(he=D.key;O!==null;){if(O.key===he)if(O.tag===4&&O.stateNode.containerInfo===D.containerInfo&&O.stateNode.implementation===D.implementation){a(N,O.sibling),O=d(O,D.children||[]),O.return=N,N=O;break e}else{a(N,O);break}else r(N,O);O=O.sibling}O=tc(D,N.mode,Y),O.return=N,N=O}return g(N);case le:return he=D._init,nt(N,O,he(D._payload),Y)}if(zn(D))return se(N,O,D,Y);if(te(D))return ue(N,O,D,Y);Ia(N,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,O!==null&&O.tag===6?(a(N,O.sibling),O=d(O,D),O.return=N,N=O):(a(N,O),O=ec(D,N.mode,Y),O.return=N,N=O),g(N)):a(N,O)}return nt}var po=lp(!0),up=lp(!1),La=ir(null),Ba=null,ho=null,cu=null;function du(){cu=ho=Ba=null}function fu(t){var r=La.current;Ue(La),t._currentValue=r}function pu(t,r,a){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===a)break;t=t.return}}function mo(t,r){Ba=t,cu=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(Dt=!0),t.firstContext=null)}function en(t){var r=t._currentValue;if(cu!==t)if(t={context:t,memoizedValue:r,next:null},ho===null){if(Ba===null)throw Error(o(308));ho=t,Ba.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return r}var Nr=null;function hu(t){Nr===null?Nr=[t]:Nr.push(t)}function cp(t,r,a,u){var d=r.interleaved;return d===null?(a.next=a,hu(r)):(a.next=d.next,d.next=a),r.interleaved=a,Ln(t,u)}function Ln(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var lr=!1;function mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ur(t,r,a){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,Te&2){var d=u.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),u.pending=r,Ln(t,a)}return d=u.interleaved,d===null?(r.next=r,hu(u)):(r.next=d.next,d.next=r),u.interleaved=r,Ln(t,a)}function Fa(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,a|=u,r.lanes=a,Ol(t,a)}}function fp(t,r){var a=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=g:p=p.next=g,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function Ua(t,r,a,u){var d=t.updateQueue;lr=!1;var p=d.firstBaseUpdate,g=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var E=k,I=E.next;E.next=null,g===null?p=I:g.next=I,g=E;var V=t.alternate;V!==null&&(V=V.updateQueue,k=V.lastBaseUpdate,k!==g&&(k===null?V.firstBaseUpdate=I:k.next=I,V.lastBaseUpdate=E))}if(p!==null){var K=d.baseState;g=0,V=I=E=null,k=p;do{var H=k.lane,ne=k.eventTime;if((u&H)===H){V!==null&&(V=V.next={eventTime:ne,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var se=t,ue=k;switch(H=r,ne=a,ue.tag){case 1:if(se=ue.payload,typeof se=="function"){K=se.call(ne,K,H);break e}K=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ue.payload,H=typeof se=="function"?se.call(ne,K,H):se,H==null)break e;K=Q({},K,H);break e;case 2:lr=!0}}k.callback!==null&&k.lane!==0&&(t.flags|=64,H=d.effects,H===null?d.effects=[k]:H.push(k))}else ne={eventTime:ne,lane:H,tag:k.tag,payload:k.payload,callback:k.callback,next:null},V===null?(I=V=ne,E=K):V=V.next=ne,g|=H;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;H=k,k=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(V===null&&(E=K),d.baseState=E,d.firstBaseUpdate=I,d.lastBaseUpdate=V,r=d.shared.interleaved,r!==null){d=r;do g|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Dr|=g,t.lanes=g,t.memoizedState=K}}function pp(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(o(191,d));d.call(u)}}}var mi={},wn=ir(mi),gi=ir(mi),yi=ir(mi);function zr(t){if(t===mi)throw Error(o(174));return t}function gu(t,r){switch(Le(yi,r),Le(gi,t),Le(wn,mi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Rr(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Rr(r,t)}Ue(wn),Le(wn,r)}function go(){Ue(wn),Ue(gi),Ue(yi)}function hp(t){zr(yi.current);var r=zr(wn.current),a=Rr(r,t.type);r!==a&&(Le(gi,t),Le(wn,a))}function yu(t){gi.current===t&&(Ue(wn),Ue(gi))}var Ke=ir(0);function Wa(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var vu=[];function bu(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var qa=_.ReactCurrentDispatcher,xu=_.ReactCurrentBatchConfig,jr=0,Ye=null,ft=null,gt=null,Ha=!1,vi=!1,bi=0,mv=0;function kt(){throw Error(o(321))}function Su(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!cn(t[a],r[a]))return!1;return!0}function wu(t,r,a,u,d,p){if(jr=p,Ye=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,qa.current=t===null||t.memoizedState===null?bv:xv,t=a(u,d),vi){p=0;do{if(vi=!1,bi=0,25<=p)throw Error(o(301));p+=1,gt=ft=null,r.updateQueue=null,qa.current=Sv,t=a(u,d)}while(vi)}if(qa.current=Ka,r=ft!==null&&ft.next!==null,jr=0,gt=ft=Ye=null,Ha=!1,r)throw Error(o(300));return t}function ku(){var t=bi!==0;return bi=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ye.memoizedState=gt=t:gt=gt.next=t,gt}function tn(){if(ft===null){var t=Ye.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var r=gt===null?Ye.memoizedState:gt.next;if(r!==null)gt=r,ft=t;else{if(t===null)throw Error(o(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},gt===null?Ye.memoizedState=gt=t:gt=gt.next=t}return gt}function xi(t,r){return typeof r=="function"?r(t):r}function Cu(t){var r=tn(),a=r.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var u=ft,d=u.baseQueue,p=a.pending;if(p!==null){if(d!==null){var g=d.next;d.next=p.next,p.next=g}u.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,u=u.baseState;var k=g=null,E=null,I=p;do{var V=I.lane;if((jr&V)===V)E!==null&&(E=E.next={lane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),u=I.hasEagerState?I.eagerState:t(u,I.action);else{var K={lane:V,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null};E===null?(k=E=K,g=u):E=E.next=K,Ye.lanes|=V,Dr|=V}I=I.next}while(I!==null&&I!==p);E===null?g=u:E.next=k,cn(u,r.memoizedState)||(Dt=!0),r.memoizedState=u,r.baseState=g,r.baseQueue=E,a.lastRenderedState=u}if(t=a.interleaved,t!==null){d=t;do p=d.lane,Ye.lanes|=p,Dr|=p,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Pu(t){var r=tn(),a=r.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var u=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var g=d=d.next;do p=t(p,g.action),g=g.next;while(g!==d);cn(p,r.memoizedState)||(Dt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,u]}function mp(){}function gp(t,r){var a=Ye,u=tn(),d=r(),p=!cn(u.memoizedState,d);if(p&&(u.memoizedState=d,Dt=!0),u=u.queue,Eu(bp.bind(null,a,u,t),[t]),u.getSnapshot!==r||p||gt!==null&&gt.memoizedState.tag&1){if(a.flags|=2048,Si(9,vp.bind(null,a,u,d,r),void 0,null),yt===null)throw Error(o(349));jr&30||yp(a,r,d)}return d}function yp(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function vp(t,r,a,u){r.value=a,r.getSnapshot=u,xp(r)&&Sp(t)}function bp(t,r,a){return a(function(){xp(r)&&Sp(t)})}function xp(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!cn(t,a)}catch{return!0}}function Sp(t){var r=Ln(t,1);r!==null&&mn(r,t,1,-1)}function wp(t){var r=kn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:t},r.queue=t,t=t.dispatch=vv.bind(null,Ye,t),[r.memoizedState,t]}function Si(t,r,a,u){return t={tag:t,create:r,destroy:a,deps:u,next:null},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(u=a.next,a.next=t,t.next=u,r.lastEffect=t)),t}function kp(){return tn().memoizedState}function Va(t,r,a,u){var d=kn();Ye.flags|=t,d.memoizedState=Si(1|r,a,void 0,u===void 0?null:u)}function Ga(t,r,a,u){var d=tn();u=u===void 0?null:u;var p=void 0;if(ft!==null){var g=ft.memoizedState;if(p=g.destroy,u!==null&&Su(u,g.deps)){d.memoizedState=Si(r,a,p,u);return}}Ye.flags|=t,d.memoizedState=Si(1|r,a,p,u)}function Cp(t,r){return Va(8390656,8,t,r)}function Eu(t,r){return Ga(2048,8,t,r)}function Pp(t,r){return Ga(4,2,t,r)}function Ep(t,r){return Ga(4,4,t,r)}function Rp(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Tp(t,r,a){return a=a!=null?a.concat([t]):null,Ga(4,4,Rp.bind(null,r,t),a)}function Ru(){}function Op(t,r){var a=tn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Su(r,u[1])?u[0]:(a.memoizedState=[t,r],t)}function _p(t,r){var a=tn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Su(r,u[1])?u[0]:(t=t(),a.memoizedState=[t,r],t)}function Ap(t,r,a){return jr&21?(cn(a,r)||(a=sf(),Ye.lanes|=a,Dr|=a,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=a)}function gv(t,r){var a=De;De=a!==0&&4>a?a:4,t(!0);var u=xu.transition;xu.transition={};try{t(!1),r()}finally{De=a,xu.transition=u}}function Mp(){return tn().memoizedState}function yv(t,r,a){var u=pr(t);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Np(t))zp(r,a);else if(a=cp(t,r,a,u),a!==null){var d=_t();mn(a,t,u,d),jp(a,r,u)}}function vv(t,r,a){var u=pr(t),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Np(t))zp(r,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var g=r.lastRenderedState,k=p(g,a);if(d.hasEagerState=!0,d.eagerState=k,cn(k,g)){var E=r.interleaved;E===null?(d.next=d,hu(r)):(d.next=E.next,E.next=d),r.interleaved=d;return}}catch{}finally{}a=cp(t,r,d,u),a!==null&&(d=_t(),mn(a,t,u,d),jp(a,r,u))}}function Np(t){var r=t.alternate;return t===Ye||r!==null&&r===Ye}function zp(t,r){vi=Ha=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function jp(t,r,a){if(a&4194240){var u=r.lanes;u&=t.pendingLanes,a|=u,r.lanes=a,Ol(t,a)}}var Ka={readContext:en,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},bv={readContext:en,useCallback:function(t,r){return kn().memoizedState=[t,r===void 0?null:r],t},useContext:en,useEffect:Cp,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Va(4194308,4,Rp.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Va(4194308,4,t,r)},useInsertionEffect:function(t,r){return Va(4,2,t,r)},useMemo:function(t,r){var a=kn();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var u=kn();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=yv.bind(null,Ye,t),[u.memoizedState,t]},useRef:function(t){var r=kn();return t={current:t},r.memoizedState=t},useState:wp,useDebugValue:Ru,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=wp(!1),r=t[0];return t=gv.bind(null,t[1]),kn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var u=Ye,d=kn();if(We){if(a===void 0)throw Error(o(407));a=a()}else{if(a=r(),yt===null)throw Error(o(349));jr&30||yp(u,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Cp(bp.bind(null,u,p,t),[t]),u.flags|=2048,Si(9,vp.bind(null,u,p,a,r),void 0,null),a},useId:function(){var t=kn(),r=yt.identifierPrefix;if(We){var a=In,u=$n;a=(u&~(1<<32-un(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=bi++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=mv++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},xv={readContext:en,useCallback:Op,useContext:en,useEffect:Eu,useImperativeHandle:Tp,useInsertionEffect:Pp,useLayoutEffect:Ep,useMemo:_p,useReducer:Cu,useRef:kp,useState:function(){return Cu(xi)},useDebugValue:Ru,useDeferredValue:function(t){var r=tn();return Ap(r,ft.memoizedState,t)},useTransition:function(){var t=Cu(xi)[0],r=tn().memoizedState;return[t,r]},useMutableSource:mp,useSyncExternalStore:gp,useId:Mp,unstable_isNewReconciler:!1},Sv={readContext:en,useCallback:Op,useContext:en,useEffect:Eu,useImperativeHandle:Tp,useInsertionEffect:Pp,useLayoutEffect:Ep,useMemo:_p,useReducer:Pu,useRef:kp,useState:function(){return Pu(xi)},useDebugValue:Ru,useDeferredValue:function(t){var r=tn();return ft===null?r.memoizedState=t:Ap(r,ft.memoizedState,t)},useTransition:function(){var t=Pu(xi)[0],r=tn().memoizedState;return[t,r]},useMutableSource:mp,useSyncExternalStore:gp,useId:Mp,unstable_isNewReconciler:!1};function fn(t,r){if(t&&t.defaultProps){r=Q({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function Tu(t,r,a,u){r=t.memoizedState,a=a(u,r),a=a==null?r:Q({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ya={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var u=_t(),d=pr(t),p=Bn(u,d);p.payload=r,a!=null&&(p.callback=a),r=ur(t,p,d),r!==null&&(mn(r,t,d,u),Fa(r,t,d))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var u=_t(),d=pr(t),p=Bn(u,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=ur(t,p,d),r!==null&&(mn(r,t,d,u),Fa(r,t,d))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=_t(),u=pr(t),d=Bn(a,u);d.tag=2,r!=null&&(d.callback=r),r=ur(t,d,u),r!==null&&(mn(r,t,u,a),Fa(r,t,u))}};function Dp(t,r,a,u,d,p,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,g):r.prototype&&r.prototype.isPureReactComponent?!si(a,u)||!si(d,p):!0}function $p(t,r,a){var u=!1,d=ar,p=r.contextType;return typeof p=="object"&&p!==null?p=en(p):(d=jt(r)?_r:wt.current,u=r.contextTypes,p=(u=u!=null)?lo(t,d):ar),r=new r(a,p),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ya,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),r}function Ip(t,r,a,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==t&&Ya.enqueueReplaceState(r,r.state,null)}function Ou(t,r,a,u){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},mu(t);var p=r.contextType;typeof p=="object"&&p!==null?d.context=en(p):(p=jt(r)?_r:wt.current,d.context=lo(t,p)),d.state=t.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Tu(t,r,p,a),d.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Ya.enqueueReplaceState(d,d.state,null),Ua(t,a,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,r){try{var a="",u=r;do a+=be(u),u=u.return;while(u);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:r,stack:d,digest:null}}function _u(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function Au(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var wv=typeof WeakMap=="function"?WeakMap:Map;function Lp(t,r,a){a=Bn(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){ns||(ns=!0,Vu=u),Au(t,r)},a}function Bp(t,r,a){a=Bn(-1,a),a.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=r.value;a.payload=function(){return u(d)},a.callback=function(){Au(t,r)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Au(t,r),typeof u!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})}),a}function Fp(t,r,a){var u=t.pingCache;if(u===null){u=t.pingCache=new wv;var d=new Set;u.set(r,d)}else d=u.get(r),d===void 0&&(d=new Set,u.set(r,d));d.has(a)||(d.add(a),t=Dv.bind(null,t,r,a),r.then(t,t))}function Up(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Wp(t,r,a,u,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Bn(-1,1),r.tag=2,ur(a,r,1))),a.lanes|=1),t)}var kv=_.ReactCurrentOwner,Dt=!1;function Ot(t,r,a,u){r.child=t===null?up(r,null,a,u):po(r,t.child,a,u)}function qp(t,r,a,u,d){a=a.render;var p=r.ref;return mo(r,d),u=wu(t,r,a,u,p,d),a=ku(),t!==null&&!Dt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~d,Fn(t,r,d)):(We&&a&&iu(r),r.flags|=1,Ot(t,r,u,d),r.child)}function Hp(t,r,a,u,d){if(t===null){var p=a.type;return typeof p=="function"&&!Zu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Vp(t,r,p,u,d)):(t=ls(a.type,null,u,r,r.mode,d),t.ref=r.ref,t.return=r,r.child=t)}if(p=t.child,!(t.lanes&d)){var g=p.memoizedProps;if(a=a.compare,a=a!==null?a:si,a(g,u)&&t.ref===r.ref)return Fn(t,r,d)}return r.flags|=1,t=mr(p,u),t.ref=r.ref,t.return=r,r.child=t}function Vp(t,r,a,u,d){if(t!==null){var p=t.memoizedProps;if(si(p,u)&&t.ref===r.ref)if(Dt=!1,r.pendingProps=u=p,(t.lanes&d)!==0)t.flags&131072&&(Dt=!0);else return r.lanes=t.lanes,Fn(t,r,d)}return Mu(t,r,a,u,d)}function Gp(t,r,a){var u=r.pendingProps,d=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(bo,Ht),Ht|=a;else{if(!(a&1073741824))return t=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Le(bo,Ht),Ht|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,Le(bo,Ht),Ht|=u}else p!==null?(u=p.baseLanes|a,r.memoizedState=null):u=a,Le(bo,Ht),Ht|=u;return Ot(t,r,d,a),r.child}function Kp(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Mu(t,r,a,u,d){var p=jt(a)?_r:wt.current;return p=lo(r,p),mo(r,d),a=wu(t,r,a,u,p,d),u=ku(),t!==null&&!Dt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~d,Fn(t,r,d)):(We&&u&&iu(r),r.flags|=1,Ot(t,r,a,d),r.child)}function Yp(t,r,a,u,d){if(jt(a)){var p=!0;Na(r)}else p=!1;if(mo(r,d),r.stateNode===null)Qa(t,r),$p(r,a,u),Ou(r,a,u,d),u=!0;else if(t===null){var g=r.stateNode,k=r.memoizedProps;g.props=k;var E=g.context,I=a.contextType;typeof I=="object"&&I!==null?I=en(I):(I=jt(a)?_r:wt.current,I=lo(r,I));var V=a.getDerivedStateFromProps,K=typeof V=="function"||typeof g.getSnapshotBeforeUpdate=="function";K||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(k!==u||E!==I)&&Ip(r,g,u,I),lr=!1;var H=r.memoizedState;g.state=H,Ua(r,u,g,d),E=r.memoizedState,k!==u||H!==E||zt.current||lr?(typeof V=="function"&&(Tu(r,a,V,u),E=r.memoizedState),(k=lr||Dp(r,a,k,u,H,E,I))?(K||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=E),g.props=u,g.state=E,g.context=I,u=k):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{g=r.stateNode,dp(t,r),k=r.memoizedProps,I=r.type===r.elementType?k:fn(r.type,k),g.props=I,K=r.pendingProps,H=g.context,E=a.contextType,typeof E=="object"&&E!==null?E=en(E):(E=jt(a)?_r:wt.current,E=lo(r,E));var ne=a.getDerivedStateFromProps;(V=typeof ne=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(k!==K||H!==E)&&Ip(r,g,u,E),lr=!1,H=r.memoizedState,g.state=H,Ua(r,u,g,d);var se=r.memoizedState;k!==K||H!==se||zt.current||lr?(typeof ne=="function"&&(Tu(r,a,ne,u),se=r.memoizedState),(I=lr||Dp(r,a,I,u,H,se,E)||!1)?(V||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,se,E),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,se,E)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||k===t.memoizedProps&&H===t.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&H===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=se),g.props=u,g.state=se,g.context=E,u=I):(typeof g.componentDidUpdate!="function"||k===t.memoizedProps&&H===t.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&H===t.memoizedState||(r.flags|=1024),u=!1)}return Nu(t,r,a,u,p,d)}function Nu(t,r,a,u,d,p){Kp(t,r);var g=(r.flags&128)!==0;if(!u&&!g)return d&&ep(r,a,!1),Fn(t,r,p);u=r.stateNode,kv.current=r;var k=g&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&g?(r.child=po(r,t.child,null,p),r.child=po(r,null,k,p)):Ot(t,r,k,p),r.memoizedState=u.state,d&&ep(r,a,!0),r.child}function Xp(t){var r=t.stateNode;r.pendingContext?Jf(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Jf(t,r.context,!1),gu(t,r.containerInfo)}function Qp(t,r,a,u,d){return fo(),uu(d),r.flags|=256,Ot(t,r,a,u),r.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jp(t,r,a){var u=r.pendingProps,d=Ke.current,p=!1,g=(r.flags&128)!==0,k;if((k=g)||(k=t!==null&&t.memoizedState===null?!1:(d&2)!==0),k?(p=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Le(Ke,d&1),t===null)return lu(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(g=u.children,t=u.fallback,p?(u=r.mode,p=r.child,g={mode:"hidden",children:g},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=g):p=us(g,u,0,null),t=Br(t,u,a,null),p.return=r,t.return=r,p.sibling=t,r.child=p,r.child.memoizedState=ju(a),r.memoizedState=zu,t):Du(r,g));if(d=t.memoizedState,d!==null&&(k=d.dehydrated,k!==null))return Cv(t,r,g,u,k,d,a);if(p){p=u.fallback,g=r.mode,d=t.child,k=d.sibling;var E={mode:"hidden",children:u.children};return!(g&1)&&r.child!==d?(u=r.child,u.childLanes=0,u.pendingProps=E,r.deletions=null):(u=mr(d,E),u.subtreeFlags=d.subtreeFlags&14680064),k!==null?p=mr(k,p):(p=Br(p,g,a,null),p.flags|=2),p.return=r,u.return=r,u.sibling=p,r.child=u,u=p,p=r.child,g=t.child.memoizedState,g=g===null?ju(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},p.memoizedState=g,p.childLanes=t.childLanes&~a,r.memoizedState=zu,u}return p=t.child,t=p.sibling,u=mr(p,{mode:"visible",children:u.children}),!(r.mode&1)&&(u.lanes=a),u.return=r,u.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=u,r.memoizedState=null,u}function Du(t,r){return r=us({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Xa(t,r,a,u){return u!==null&&uu(u),po(r,t.child,null,a),t=Du(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Cv(t,r,a,u,d,p,g){if(a)return r.flags&256?(r.flags&=-257,u=_u(Error(o(422))),Xa(t,r,g,u)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(p=u.fallback,d=r.mode,u=us({mode:"visible",children:u.children},d,0,null),p=Br(p,d,g,null),p.flags|=2,u.return=r,p.return=r,u.sibling=p,r.child=u,r.mode&1&&po(r,t.child,null,g),r.child.memoizedState=ju(g),r.memoizedState=zu,p);if(!(r.mode&1))return Xa(t,r,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var k=u.dgst;return u=k,p=Error(o(419)),u=_u(p,u,void 0),Xa(t,r,g,u)}if(k=(g&t.childLanes)!==0,Dt||k){if(u=yt,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|g)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ln(t,d),mn(u,t,d,-1))}return Ju(),u=_u(Error(o(421))),Xa(t,r,g,u)}return d.data==="$?"?(r.flags|=128,r.child=t.child,r=$v.bind(null,t),d._reactRetry=r,null):(t=p.treeContext,qt=or(d.nextSibling),Wt=r,We=!0,dn=null,t!==null&&(Jt[Zt++]=$n,Jt[Zt++]=In,Jt[Zt++]=Ar,$n=t.id,In=t.overflow,Ar=r),r=Du(r,u.children),r.flags|=4096,r)}function Zp(t,r,a){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),pu(t.return,r,a)}function $u(t,r,a,u,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=d)}function eh(t,r,a){var u=r.pendingProps,d=u.revealOrder,p=u.tail;if(Ot(t,r,u.children,a),u=Ke.current,u&2)u=u&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zp(t,a,r);else if(t.tag===19)Zp(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Le(Ke,u),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)t=a.alternate,t!==null&&Wa(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),$u(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(t=d.alternate,t!==null&&Wa(t)===null){r.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}$u(r,!0,a,null,p);break;case"together":$u(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Qa(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Fn(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),Dr|=r.lanes,!(a&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(o(153));if(r.child!==null){for(t=r.child,a=mr(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=mr(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Pv(t,r,a){switch(r.tag){case 3:Xp(r),fo();break;case 5:hp(r);break;case 1:jt(r.type)&&Na(r);break;case 4:gu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,d=r.memoizedProps.value;Le(La,u._currentValue),u._currentValue=d;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Le(Ke,Ke.current&1),r.flags|=128,null):a&r.child.childLanes?Jp(t,r,a):(Le(Ke,Ke.current&1),t=Fn(t,r,a),t!==null?t.sibling:null);Le(Ke,Ke.current&1);break;case 19:if(u=(a&r.childLanes)!==0,t.flags&128){if(u)return eh(t,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Le(Ke,Ke.current),u)break;return null;case 22:case 23:return r.lanes=0,Gp(t,r,a)}return Fn(t,r,a)}var th,Iu,nh,rh;th=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Iu=function(){},nh=function(t,r,a,u){var d=t.memoizedProps;if(d!==u){t=r.stateNode,zr(wn.current);var p=null;switch(a){case"input":d=Nn(t,d),u=Nn(t,u),p=[];break;case"select":d=Q({},d,{value:void 0}),u=Q({},u,{value:void 0}),p=[];break;case"textarea":d=Kn(t,d),u=Kn(t,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=_a)}vl(a,u);var g;a=null;for(I in d)if(!u.hasOwnProperty(I)&&d.hasOwnProperty(I)&&d[I]!=null)if(I==="style"){var k=d[I];for(g in k)k.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(s.hasOwnProperty(I)?p||(p=[]):(p=p||[]).push(I,null));for(I in u){var E=u[I];if(k=d!=null?d[I]:void 0,u.hasOwnProperty(I)&&E!==k&&(E!=null||k!=null))if(I==="style")if(k){for(g in k)!k.hasOwnProperty(g)||E&&E.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in E)E.hasOwnProperty(g)&&k[g]!==E[g]&&(a||(a={}),a[g]=E[g])}else a||(p||(p=[]),p.push(I,a)),a=E;else I==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,k=k?k.__html:void 0,E!=null&&k!==E&&(p=p||[]).push(I,E)):I==="children"?typeof E!="string"&&typeof E!="number"||(p=p||[]).push(I,""+E):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(s.hasOwnProperty(I)?(E!=null&&I==="onScroll"&&Fe("scroll",t),p||k===E||(p=[])):(p=p||[]).push(I,E))}a&&(p=p||[]).push("style",a);var I=p;(r.updateQueue=I)&&(r.flags|=4)}},rh=function(t,r,a,u){a!==u&&(r.flags|=4)};function wi(t,r){if(!We)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Ct(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,u=0;if(r)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=a,r}function Ev(t,r,a){var u=r.pendingProps;switch(au(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(r),null;case 1:return jt(r.type)&&Ma(),Ct(r),null;case 3:return u=r.stateNode,go(),Ue(zt),Ue(wt),bu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&($a(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,dn!==null&&(Yu(dn),dn=null))),Iu(t,r),Ct(r),null;case 5:yu(r);var d=zr(yi.current);if(a=r.type,t!==null&&r.stateNode!=null)nh(t,r,a,u,d),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(o(166));return Ct(r),null}if(t=zr(wn.current),$a(r)){u=r.stateNode,a=r.type;var p=r.memoizedProps;switch(u[Sn]=r,u[fi]=p,t=(r.mode&1)!==0,a){case"dialog":Fe("cancel",u),Fe("close",u);break;case"iframe":case"object":case"embed":Fe("load",u);break;case"video":case"audio":for(d=0;d<ui.length;d++)Fe(ui[d],u);break;case"source":Fe("error",u);break;case"img":case"image":case"link":Fe("error",u),Fe("load",u);break;case"details":Fe("toggle",u);break;case"input":mt(u,p),Fe("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Fe("invalid",u);break;case"textarea":ye(u,p),Fe("invalid",u)}vl(a,p),d=null;for(var g in p)if(p.hasOwnProperty(g)){var k=p[g];g==="children"?typeof k=="string"?u.textContent!==k&&(p.suppressHydrationWarning!==!0&&Oa(u.textContent,k,t),d=["children",k]):typeof k=="number"&&u.textContent!==""+k&&(p.suppressHydrationWarning!==!0&&Oa(u.textContent,k,t),d=["children",""+k]):s.hasOwnProperty(g)&&k!=null&&g==="onScroll"&&Fe("scroll",u)}switch(a){case"input":ln(u),at(u,p,!0);break;case"textarea":ln(u),Er(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=_a)}u=d,r.updateQueue=u,u!==null&&(r.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xn(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=g.createElement(a,{is:u.is}):(t=g.createElement(a),a==="select"&&(g=t,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):t=g.createElementNS(t,a),t[Sn]=r,t[fi]=u,th(t,r,!1,!1),r.stateNode=t;e:{switch(g=bl(a,u),a){case"dialog":Fe("cancel",t),Fe("close",t),d=u;break;case"iframe":case"object":case"embed":Fe("load",t),d=u;break;case"video":case"audio":for(d=0;d<ui.length;d++)Fe(ui[d],t);d=u;break;case"source":Fe("error",t),d=u;break;case"img":case"image":case"link":Fe("error",t),Fe("load",t),d=u;break;case"details":Fe("toggle",t),d=u;break;case"input":mt(t,u),d=Nn(t,u),Fe("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=Q({},u,{value:void 0}),Fe("invalid",t);break;case"textarea":ye(t,u),d=Kn(t,u),Fe("invalid",t);break;default:d=u}vl(a,d),k=d;for(p in k)if(k.hasOwnProperty(p)){var E=k[p];p==="style"?Hd(t,E):p==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&Ge(t,E)):p==="children"?typeof E=="string"?(a!=="textarea"||E!=="")&&bn(t,E):typeof E=="number"&&bn(t,""+E):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(s.hasOwnProperty(p)?E!=null&&p==="onScroll"&&Fe("scroll",t):E!=null&&j(t,p,E,g))}switch(a){case"input":ln(t),at(t,u,!1);break;case"textarea":ln(t),Er(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Re(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?Qt(t,!!u.multiple,p,!1):u.defaultValue!=null&&Qt(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=_a)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ct(r),null;case 6:if(t&&r.stateNode!=null)rh(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(o(166));if(a=zr(yi.current),zr(wn.current),$a(r)){if(u=r.stateNode,a=r.memoizedProps,u[Sn]=r,(p=u.nodeValue!==a)&&(t=Wt,t!==null))switch(t.tag){case 3:Oa(u.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oa(u.nodeValue,a,(t.mode&1)!==0)}p&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Sn]=r,r.stateNode=u}return Ct(r),null;case 13:if(Ue(Ke),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&qt!==null&&r.mode&1&&!(r.flags&128))ap(),fo(),r.flags|=98560,p=!1;else if(p=$a(r),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(o(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(o(317));p[Sn]=r}else fo(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Ct(r),p=!1}else dn!==null&&(Yu(dn),dn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,r.mode&1&&(t===null||Ke.current&1?pt===0&&(pt=3):Ju())),r.updateQueue!==null&&(r.flags|=4),Ct(r),null);case 4:return go(),Iu(t,r),t===null&&ci(r.stateNode.containerInfo),Ct(r),null;case 10:return fu(r.type._context),Ct(r),null;case 17:return jt(r.type)&&Ma(),Ct(r),null;case 19:if(Ue(Ke),p=r.memoizedState,p===null)return Ct(r),null;if(u=(r.flags&128)!==0,g=p.rendering,g===null)if(u)wi(p,!1);else{if(pt!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(g=Wa(t),g!==null){for(r.flags|=128,wi(p,!1),u=g.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)p=a,t=u,p.flags&=14680066,g=p.alternate,g===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=g.childLanes,p.lanes=g.lanes,p.child=g.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=g.memoizedProps,p.memoizedState=g.memoizedState,p.updateQueue=g.updateQueue,p.type=g.type,t=g.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Le(Ke,Ke.current&1|2),r.child}t=t.sibling}p.tail!==null&&tt()>xo&&(r.flags|=128,u=!0,wi(p,!1),r.lanes=4194304)}else{if(!u)if(t=Wa(g),t!==null){if(r.flags|=128,u=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),wi(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!We)return Ct(r),null}else 2*tt()-p.renderingStartTime>xo&&a!==1073741824&&(r.flags|=128,u=!0,wi(p,!1),r.lanes=4194304);p.isBackwards?(g.sibling=r.child,r.child=g):(a=p.last,a!==null?a.sibling=g:r.child=g,p.last=g)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=tt(),r.sibling=null,a=Ke.current,Le(Ke,u?a&1|2:a&1),r):(Ct(r),null);case 22:case 23:return Qu(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&r.mode&1?Ht&1073741824&&(Ct(r),r.subtreeFlags&6&&(r.flags|=8192)):Ct(r),null;case 24:return null;case 25:return null}throw Error(o(156,r.tag))}function Rv(t,r){switch(au(r),r.tag){case 1:return jt(r.type)&&Ma(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return go(),Ue(zt),Ue(wt),bu(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return yu(r),null;case 13:if(Ue(Ke),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(o(340));fo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Ue(Ke),null;case 4:return go(),null;case 10:return fu(r.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var Ja=!1,Pt=!1,Tv=typeof WeakSet=="function"?WeakSet:Set,ae=null;function vo(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Qe(t,r,u)}else a.current=null}function Lu(t,r,a){try{a()}catch(u){Qe(t,r,u)}}var oh=!1;function Ov(t,r){if(Ql=va,t=Df(),Wl(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var g=0,k=-1,E=-1,I=0,V=0,K=t,H=null;t:for(;;){for(var ne;K!==a||d!==0&&K.nodeType!==3||(k=g+d),K!==p||u!==0&&K.nodeType!==3||(E=g+u),K.nodeType===3&&(g+=K.nodeValue.length),(ne=K.firstChild)!==null;)H=K,K=ne;for(;;){if(K===t)break t;if(H===a&&++I===d&&(k=g),H===p&&++V===u&&(E=g),(ne=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=ne}a=k===-1||E===-1?null:{start:k,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jl={focusedElem:t,selectionRange:a},va=!1,ae=r;ae!==null;)if(r=ae,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ae=t;else for(;ae!==null;){r=ae;try{var se=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var ue=se.memoizedProps,nt=se.memoizedState,N=r.stateNode,O=N.getSnapshotBeforeUpdate(r.elementType===r.type?ue:fn(r.type,ue),nt);N.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var D=r.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(Y){Qe(r,r.return,Y)}if(t=r.sibling,t!==null){t.return=r.return,ae=t;break}ae=r.return}return se=oh,oh=!1,se}function ki(t,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&Lu(r,a,p)}d=d.next}while(d!==u)}}function Za(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function Bu(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function ih(t){var r=t.alternate;r!==null&&(t.alternate=null,ih(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Sn],delete r[fi],delete r[nu],delete r[dv],delete r[fv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ah(t){return t.tag===5||t.tag===3||t.tag===4}function sh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ah(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fu(t,r,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=_a));else if(u!==4&&(t=t.child,t!==null))for(Fu(t,r,a),t=t.sibling;t!==null;)Fu(t,r,a),t=t.sibling}function Uu(t,r,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Uu(t,r,a),t=t.sibling;t!==null;)Uu(t,r,a),t=t.sibling}var bt=null,pn=!1;function cr(t,r,a){for(a=a.child;a!==null;)lh(t,r,a),a=a.sibling}function lh(t,r,a){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(fa,a)}catch{}switch(a.tag){case 5:Pt||vo(a,r);case 6:var u=bt,d=pn;bt=null,cr(t,r,a),bt=u,pn=d,bt!==null&&(pn?(t=bt,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):bt.removeChild(a.stateNode));break;case 18:bt!==null&&(pn?(t=bt,a=a.stateNode,t.nodeType===8?tu(t.parentNode,a):t.nodeType===1&&tu(t,a),ti(t)):tu(bt,a.stateNode));break;case 4:u=bt,d=pn,bt=a.stateNode.containerInfo,pn=!0,cr(t,r,a),bt=u,pn=d;break;case 0:case 11:case 14:case 15:if(!Pt&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,g=p.destroy;p=p.tag,g!==void 0&&(p&2||p&4)&&Lu(a,r,g),d=d.next}while(d!==u)}cr(t,r,a);break;case 1:if(!Pt&&(vo(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(k){Qe(a,r,k)}cr(t,r,a);break;case 21:cr(t,r,a);break;case 22:a.mode&1?(Pt=(u=Pt)||a.memoizedState!==null,cr(t,r,a),Pt=u):cr(t,r,a);break;default:cr(t,r,a)}}function uh(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Tv),r.forEach(function(u){var d=Iv.bind(null,t,u);a.has(u)||(a.add(u),u.then(d,d))})}}function hn(t,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var p=t,g=r,k=g;e:for(;k!==null;){switch(k.tag){case 5:bt=k.stateNode,pn=!1;break e;case 3:bt=k.stateNode.containerInfo,pn=!0;break e;case 4:bt=k.stateNode.containerInfo,pn=!0;break e}k=k.return}if(bt===null)throw Error(o(160));lh(p,g,d),bt=null,pn=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(I){Qe(d,r,I)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)ch(r,t),r=r.sibling}function ch(t,r){var a=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hn(r,t),Cn(t),u&4){try{ki(3,t,t.return),Za(3,t)}catch(ue){Qe(t,t.return,ue)}try{ki(5,t,t.return)}catch(ue){Qe(t,t.return,ue)}}break;case 1:hn(r,t),Cn(t),u&512&&a!==null&&vo(a,a.return);break;case 5:if(hn(r,t),Cn(t),u&512&&a!==null&&vo(a,a.return),t.flags&32){var d=t.stateNode;try{bn(d,"")}catch(ue){Qe(t,t.return,ue)}}if(u&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,g=a!==null?a.memoizedProps:p,k=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{k==="input"&&p.type==="radio"&&p.name!=null&&Cr(d,p),bl(k,g);var I=bl(k,p);for(g=0;g<E.length;g+=2){var V=E[g],K=E[g+1];V==="style"?Hd(d,K):V==="dangerouslySetInnerHTML"?Ge(d,K):V==="children"?bn(d,K):j(d,V,K,I)}switch(k){case"input":Pr(d,p);break;case"textarea":Yn(d,p);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ne=p.value;ne!=null?Qt(d,!!p.multiple,ne,!1):H!==!!p.multiple&&(p.defaultValue!=null?Qt(d,!!p.multiple,p.defaultValue,!0):Qt(d,!!p.multiple,p.multiple?[]:"",!1))}d[fi]=p}catch(ue){Qe(t,t.return,ue)}}break;case 6:if(hn(r,t),Cn(t),u&4){if(t.stateNode===null)throw Error(o(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(ue){Qe(t,t.return,ue)}}break;case 3:if(hn(r,t),Cn(t),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ti(r.containerInfo)}catch(ue){Qe(t,t.return,ue)}break;case 4:hn(r,t),Cn(t);break;case 13:hn(r,t),Cn(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Hu=tt())),u&4&&uh(t);break;case 22:if(V=a!==null&&a.memoizedState!==null,t.mode&1?(Pt=(I=Pt)||V,hn(r,t),Pt=I):hn(r,t),Cn(t),u&8192){if(I=t.memoizedState!==null,(t.stateNode.isHidden=I)&&!V&&t.mode&1)for(ae=t,V=t.child;V!==null;){for(K=ae=V;ae!==null;){switch(H=ae,ne=H.child,H.tag){case 0:case 11:case 14:case 15:ki(4,H,H.return);break;case 1:vo(H,H.return);var se=H.stateNode;if(typeof se.componentWillUnmount=="function"){u=H,a=H.return;try{r=u,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(ue){Qe(u,a,ue)}}break;case 5:vo(H,H.return);break;case 22:if(H.memoizedState!==null){ph(K);continue}}ne!==null?(ne.return=H,ae=ne):ph(K)}V=V.sibling}e:for(V=null,K=t;;){if(K.tag===5){if(V===null){V=K;try{d=K.stateNode,I?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(k=K.stateNode,E=K.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null,k.style.display=la("display",g))}catch(ue){Qe(t,t.return,ue)}}}else if(K.tag===6){if(V===null)try{K.stateNode.nodeValue=I?"":K.memoizedProps}catch(ue){Qe(t,t.return,ue)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===t)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===t)break e;for(;K.sibling===null;){if(K.return===null||K.return===t)break e;V===K&&(V=null),K=K.return}V===K&&(V=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:hn(r,t),Cn(t),u&4&&uh(t);break;case 21:break;default:hn(r,t),Cn(t)}}function Cn(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(ah(a)){var u=a;break e}a=a.return}throw Error(o(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(bn(d,""),u.flags&=-33);var p=sh(t);Uu(t,p,d);break;case 3:case 4:var g=u.stateNode.containerInfo,k=sh(t);Fu(t,k,g);break;default:throw Error(o(161))}}catch(E){Qe(t,t.return,E)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function _v(t,r,a){ae=t,dh(t)}function dh(t,r,a){for(var u=(t.mode&1)!==0;ae!==null;){var d=ae,p=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||Ja;if(!g){var k=d.alternate,E=k!==null&&k.memoizedState!==null||Pt;k=Ja;var I=Pt;if(Ja=g,(Pt=E)&&!I)for(ae=d;ae!==null;)g=ae,E=g.child,g.tag===22&&g.memoizedState!==null?hh(d):E!==null?(E.return=g,ae=E):hh(d);for(;p!==null;)ae=p,dh(p),p=p.sibling;ae=d,Ja=k,Pt=I}fh(t)}else d.subtreeFlags&8772&&p!==null?(p.return=d,ae=p):fh(t)}}function fh(t){for(;ae!==null;){var r=ae;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Pt||Za(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Pt)if(a===null)u.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:fn(r.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&pp(r,p,u);break;case 3:var g=r.updateQueue;if(g!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}pp(r,g,a)}break;case 5:var k=r.stateNode;if(a===null&&r.flags&4){a=k;var E=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&a.focus();break;case"img":E.src&&(a.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var I=r.alternate;if(I!==null){var V=I.memoizedState;if(V!==null){var K=V.dehydrated;K!==null&&ti(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Pt||r.flags&512&&Bu(r)}catch(H){Qe(r,r.return,H)}}if(r===t){ae=null;break}if(a=r.sibling,a!==null){a.return=r.return,ae=a;break}ae=r.return}}function ph(t){for(;ae!==null;){var r=ae;if(r===t){ae=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ae=a;break}ae=r.return}}function hh(t){for(;ae!==null;){var r=ae;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Za(4,r)}catch(E){Qe(r,a,E)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var d=r.return;try{u.componentDidMount()}catch(E){Qe(r,d,E)}}var p=r.return;try{Bu(r)}catch(E){Qe(r,p,E)}break;case 5:var g=r.return;try{Bu(r)}catch(E){Qe(r,g,E)}}}catch(E){Qe(r,r.return,E)}if(r===t){ae=null;break}var k=r.sibling;if(k!==null){k.return=r.return,ae=k;break}ae=r.return}}var Av=Math.ceil,es=_.ReactCurrentDispatcher,Wu=_.ReactCurrentOwner,nn=_.ReactCurrentBatchConfig,Te=0,yt=null,st=null,xt=0,Ht=0,bo=ir(0),pt=0,Ci=null,Dr=0,ts=0,qu=0,Pi=null,$t=null,Hu=0,xo=1/0,Un=null,ns=!1,Vu=null,dr=null,rs=!1,fr=null,os=0,Ei=0,Gu=null,is=-1,as=0;function _t(){return Te&6?tt():is!==-1?is:is=tt()}function pr(t){return t.mode&1?Te&2&&xt!==0?xt&-xt:hv.transition!==null?(as===0&&(as=sf()),as):(t=De,t!==0||(t=window.event,t=t===void 0?16:gf(t.type)),t):1}function mn(t,r,a,u){if(50<Ei)throw Ei=0,Gu=null,Error(o(185));Xo(t,a,u),(!(Te&2)||t!==yt)&&(t===yt&&(!(Te&2)&&(ts|=a),pt===4&&hr(t,xt)),It(t,u),a===1&&Te===0&&!(r.mode&1)&&(xo=tt()+500,za&&sr()))}function It(t,r){var a=t.callbackNode;hy(t,r);var u=ma(t,t===yt?xt:0);if(u===0)a!==null&&rf(a),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(a!=null&&rf(a),r===1)t.tag===0?pv(gh.bind(null,t)):tp(gh.bind(null,t)),uv(function(){!(Te&6)&&sr()}),a=null;else{switch(lf(u)){case 1:a=El;break;case 4:a=of;break;case 16:a=da;break;case 536870912:a=af;break;default:a=da}a=Ch(a,mh.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function mh(t,r){if(is=-1,as=0,Te&6)throw Error(o(327));var a=t.callbackNode;if(So()&&t.callbackNode!==a)return null;var u=ma(t,t===yt?xt:0);if(u===0)return null;if(u&30||u&t.expiredLanes||r)r=ss(t,u);else{r=u;var d=Te;Te|=2;var p=vh();(yt!==t||xt!==r)&&(Un=null,xo=tt()+500,Ir(t,r));do try{zv();break}catch(k){yh(t,k)}while(!0);du(),es.current=p,Te=d,st!==null?r=0:(yt=null,xt=0,r=pt)}if(r!==0){if(r===2&&(d=Rl(t),d!==0&&(u=d,r=Ku(t,d))),r===1)throw a=Ci,Ir(t,0),hr(t,u),It(t,tt()),a;if(r===6)hr(t,u);else{if(d=t.current.alternate,!(u&30)&&!Mv(d)&&(r=ss(t,u),r===2&&(p=Rl(t),p!==0&&(u=p,r=Ku(t,p))),r===1))throw a=Ci,Ir(t,0),hr(t,u),It(t,tt()),a;switch(t.finishedWork=d,t.finishedLanes=u,r){case 0:case 1:throw Error(o(345));case 2:Lr(t,$t,Un);break;case 3:if(hr(t,u),(u&130023424)===u&&(r=Hu+500-tt(),10<r)){if(ma(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){_t(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=eu(Lr.bind(null,t,$t,Un),r);break}Lr(t,$t,Un);break;case 4:if(hr(t,u),(u&4194240)===u)break;for(r=t.eventTimes,d=-1;0<u;){var g=31-un(u);p=1<<g,g=r[g],g>d&&(d=g),u&=~p}if(u=d,u=tt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Av(u/1960))-u,10<u){t.timeoutHandle=eu(Lr.bind(null,t,$t,Un),u);break}Lr(t,$t,Un);break;case 5:Lr(t,$t,Un);break;default:throw Error(o(329))}}}return It(t,tt()),t.callbackNode===a?mh.bind(null,t):null}function Ku(t,r){var a=Pi;return t.current.memoizedState.isDehydrated&&(Ir(t,r).flags|=256),t=ss(t,r),t!==2&&(r=$t,$t=a,r!==null&&Yu(r)),t}function Yu(t){$t===null?$t=t:$t.push.apply($t,t)}function Mv(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],p=d.getSnapshot;d=d.value;try{if(!cn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function hr(t,r){for(r&=~qu,r&=~ts,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-un(r),u=1<<a;t[a]=-1,r&=~u}}function gh(t){if(Te&6)throw Error(o(327));So();var r=ma(t,0);if(!(r&1))return It(t,tt()),null;var a=ss(t,r);if(t.tag!==0&&a===2){var u=Rl(t);u!==0&&(r=u,a=Ku(t,u))}if(a===1)throw a=Ci,Ir(t,0),hr(t,r),It(t,tt()),a;if(a===6)throw Error(o(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Lr(t,$t,Un),It(t,tt()),null}function Xu(t,r){var a=Te;Te|=1;try{return t(r)}finally{Te=a,Te===0&&(xo=tt()+500,za&&sr())}}function $r(t){fr!==null&&fr.tag===0&&!(Te&6)&&So();var r=Te;Te|=1;var a=nn.transition,u=De;try{if(nn.transition=null,De=1,t)return t()}finally{De=u,nn.transition=a,Te=r,!(Te&6)&&sr()}}function Qu(){Ht=bo.current,Ue(bo)}function Ir(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,lv(a)),st!==null)for(a=st.return;a!==null;){var u=a;switch(au(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ma();break;case 3:go(),Ue(zt),Ue(wt),bu();break;case 5:yu(u);break;case 4:go();break;case 13:Ue(Ke);break;case 19:Ue(Ke);break;case 10:fu(u.type._context);break;case 22:case 23:Qu()}a=a.return}if(yt=t,st=t=mr(t.current,null),xt=Ht=r,pt=0,Ci=null,qu=ts=Dr=0,$t=Pi=null,Nr!==null){for(r=0;r<Nr.length;r++)if(a=Nr[r],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,p=a.pending;if(p!==null){var g=p.next;p.next=d,u.next=g}a.pending=u}Nr=null}return t}function yh(t,r){do{var a=st;try{if(du(),qa.current=Ka,Ha){for(var u=Ye.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ha=!1}if(jr=0,gt=ft=Ye=null,vi=!1,bi=0,Wu.current=null,a===null||a.return===null){pt=1,Ci=r,st=null;break}e:{var p=t,g=a.return,k=a,E=r;if(r=xt,k.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var I=E,V=k,K=V.tag;if(!(V.mode&1)&&(K===0||K===11||K===15)){var H=V.alternate;H?(V.updateQueue=H.updateQueue,V.memoizedState=H.memoizedState,V.lanes=H.lanes):(V.updateQueue=null,V.memoizedState=null)}var ne=Up(g);if(ne!==null){ne.flags&=-257,Wp(ne,g,k,p,r),ne.mode&1&&Fp(p,I,r),r=ne,E=I;var se=r.updateQueue;if(se===null){var ue=new Set;ue.add(E),r.updateQueue=ue}else se.add(E);break e}else{if(!(r&1)){Fp(p,I,r),Ju();break e}E=Error(o(426))}}else if(We&&k.mode&1){var nt=Up(g);if(nt!==null){!(nt.flags&65536)&&(nt.flags|=256),Wp(nt,g,k,p,r),uu(yo(E,k));break e}}p=E=yo(E,k),pt!==4&&(pt=2),Pi===null?Pi=[p]:Pi.push(p),p=g;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var N=Lp(p,E,r);fp(p,N);break e;case 1:k=E;var O=p.type,D=p.stateNode;if(!(p.flags&128)&&(typeof O.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(dr===null||!dr.has(D)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=Bp(p,k,r);fp(p,Y);break e}}p=p.return}while(p!==null)}xh(a)}catch(de){r=de,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function vh(){var t=es.current;return es.current=Ka,t===null?Ka:t}function Ju(){(pt===0||pt===3||pt===2)&&(pt=4),yt===null||!(Dr&268435455)&&!(ts&268435455)||hr(yt,xt)}function ss(t,r){var a=Te;Te|=2;var u=vh();(yt!==t||xt!==r)&&(Un=null,Ir(t,r));do try{Nv();break}catch(d){yh(t,d)}while(!0);if(du(),Te=a,es.current=u,st!==null)throw Error(o(261));return yt=null,xt=0,pt}function Nv(){for(;st!==null;)bh(st)}function zv(){for(;st!==null&&!iy();)bh(st)}function bh(t){var r=kh(t.alternate,t,Ht);t.memoizedProps=t.pendingProps,r===null?xh(t):st=r,Wu.current=null}function xh(t){var r=t;do{var a=r.alternate;if(t=r.return,r.flags&32768){if(a=Rv(a,r),a!==null){a.flags&=32767,st=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pt=6,st=null;return}}else if(a=Ev(a,r,Ht),a!==null){st=a;return}if(r=r.sibling,r!==null){st=r;return}st=r=t}while(r!==null);pt===0&&(pt=5)}function Lr(t,r,a){var u=De,d=nn.transition;try{nn.transition=null,De=1,jv(t,r,a,u)}finally{nn.transition=d,De=u}return null}function jv(t,r,a,u){do So();while(fr!==null);if(Te&6)throw Error(o(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(my(t,p),t===yt&&(st=yt=null,xt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||rs||(rs=!0,Ch(da,function(){return So(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=nn.transition,nn.transition=null;var g=De;De=1;var k=Te;Te|=4,Wu.current=null,Ov(t,a),ch(a,t),tv(Jl),va=!!Ql,Jl=Ql=null,t.current=a,_v(a),ay(),Te=k,De=g,nn.transition=p}else t.current=a;if(rs&&(rs=!1,fr=t,os=d),p=t.pendingLanes,p===0&&(dr=null),uy(a.stateNode),It(t,tt()),r!==null)for(u=t.onRecoverableError,a=0;a<r.length;a++)d=r[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(ns)throw ns=!1,t=Vu,Vu=null,t;return os&1&&t.tag!==0&&So(),p=t.pendingLanes,p&1?t===Gu?Ei++:(Ei=0,Gu=t):Ei=0,sr(),null}function So(){if(fr!==null){var t=lf(os),r=nn.transition,a=De;try{if(nn.transition=null,De=16>t?16:t,fr===null)var u=!1;else{if(t=fr,fr=null,os=0,Te&6)throw Error(o(331));var d=Te;for(Te|=4,ae=t.current;ae!==null;){var p=ae,g=p.child;if(ae.flags&16){var k=p.deletions;if(k!==null){for(var E=0;E<k.length;E++){var I=k[E];for(ae=I;ae!==null;){var V=ae;switch(V.tag){case 0:case 11:case 15:ki(8,V,p)}var K=V.child;if(K!==null)K.return=V,ae=K;else for(;ae!==null;){V=ae;var H=V.sibling,ne=V.return;if(ih(V),V===I){ae=null;break}if(H!==null){H.return=ne,ae=H;break}ae=ne}}}var se=p.alternate;if(se!==null){var ue=se.child;if(ue!==null){se.child=null;do{var nt=ue.sibling;ue.sibling=null,ue=nt}while(ue!==null)}}ae=p}}if(p.subtreeFlags&2064&&g!==null)g.return=p,ae=g;else e:for(;ae!==null;){if(p=ae,p.flags&2048)switch(p.tag){case 0:case 11:case 15:ki(9,p,p.return)}var N=p.sibling;if(N!==null){N.return=p.return,ae=N;break e}ae=p.return}}var O=t.current;for(ae=O;ae!==null;){g=ae;var D=g.child;if(g.subtreeFlags&2064&&D!==null)D.return=g,ae=D;else e:for(g=O;ae!==null;){if(k=ae,k.flags&2048)try{switch(k.tag){case 0:case 11:case 15:Za(9,k)}}catch(de){Qe(k,k.return,de)}if(k===g){ae=null;break e}var Y=k.sibling;if(Y!==null){Y.return=k.return,ae=Y;break e}ae=k.return}}if(Te=d,sr(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(fa,t)}catch{}u=!0}return u}finally{De=a,nn.transition=r}}return!1}function Sh(t,r,a){r=yo(a,r),r=Lp(t,r,1),t=ur(t,r,1),r=_t(),t!==null&&(Xo(t,1,r),It(t,r))}function Qe(t,r,a){if(t.tag===3)Sh(t,t,a);else for(;r!==null;){if(r.tag===3){Sh(r,t,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(dr===null||!dr.has(u))){t=yo(a,t),t=Bp(r,t,1),r=ur(r,t,1),t=_t(),r!==null&&(Xo(r,1,t),It(r,t));break}}r=r.return}}function Dv(t,r,a){var u=t.pingCache;u!==null&&u.delete(r),r=_t(),t.pingedLanes|=t.suspendedLanes&a,yt===t&&(xt&a)===a&&(pt===4||pt===3&&(xt&130023424)===xt&&500>tt()-Hu?Ir(t,0):qu|=a),It(t,r)}function wh(t,r){r===0&&(t.mode&1?(r=ha,ha<<=1,!(ha&130023424)&&(ha=4194304)):r=1);var a=_t();t=Ln(t,r),t!==null&&(Xo(t,r,a),It(t,a))}function $v(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),wh(t,a)}function Iv(t,r){var a=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(o(314))}u!==null&&u.delete(r),wh(t,a)}var kh;kh=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||zt.current)Dt=!0;else{if(!(t.lanes&a)&&!(r.flags&128))return Dt=!1,Pv(t,r,a);Dt=!!(t.flags&131072)}else Dt=!1,We&&r.flags&1048576&&np(r,Da,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Qa(t,r),t=r.pendingProps;var d=lo(r,wt.current);mo(r,a),d=wu(null,r,u,t,d,a);var p=ku();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,jt(u)?(p=!0,Na(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,mu(r),d.updater=Ya,r.stateNode=d,d._reactInternals=r,Ou(r,u,t,a),r=Nu(null,r,u,!0,p,a)):(r.tag=0,We&&p&&iu(r),Ot(null,r,d,a),r=r.child),r;case 16:u=r.elementType;e:{switch(Qa(t,r),t=r.pendingProps,d=u._init,u=d(u._payload),r.type=u,d=r.tag=Bv(u),t=fn(u,t),d){case 0:r=Mu(null,r,u,t,a);break e;case 1:r=Yp(null,r,u,t,a);break e;case 11:r=qp(null,r,u,t,a);break e;case 14:r=Hp(null,r,u,fn(u.type,t),a);break e}throw Error(o(306,u,""))}return r;case 0:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:fn(u,d),Mu(t,r,u,d,a);case 1:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:fn(u,d),Yp(t,r,u,d,a);case 3:e:{if(Xp(r),t===null)throw Error(o(387));u=r.pendingProps,p=r.memoizedState,d=p.element,dp(t,r),Ua(r,u,null,a);var g=r.memoizedState;if(u=g.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=yo(Error(o(423)),r),r=Qp(t,r,u,a,d);break e}else if(u!==d){d=yo(Error(o(424)),r),r=Qp(t,r,u,a,d);break e}else for(qt=or(r.stateNode.containerInfo.firstChild),Wt=r,We=!0,dn=null,a=up(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fo(),u===d){r=Fn(t,r,a);break e}Ot(t,r,u,a)}r=r.child}return r;case 5:return hp(r),t===null&&lu(r),u=r.type,d=r.pendingProps,p=t!==null?t.memoizedProps:null,g=d.children,Zl(u,d)?g=null:p!==null&&Zl(u,p)&&(r.flags|=32),Kp(t,r),Ot(t,r,g,a),r.child;case 6:return t===null&&lu(r),null;case 13:return Jp(t,r,a);case 4:return gu(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=po(r,null,u,a):Ot(t,r,u,a),r.child;case 11:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:fn(u,d),qp(t,r,u,d,a);case 7:return Ot(t,r,r.pendingProps,a),r.child;case 8:return Ot(t,r,r.pendingProps.children,a),r.child;case 12:return Ot(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,d=r.pendingProps,p=r.memoizedProps,g=d.value,Le(La,u._currentValue),u._currentValue=g,p!==null)if(cn(p.value,g)){if(p.children===d.children&&!zt.current){r=Fn(t,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var k=p.dependencies;if(k!==null){g=p.child;for(var E=k.firstContext;E!==null;){if(E.context===u){if(p.tag===1){E=Bn(-1,a&-a),E.tag=2;var I=p.updateQueue;if(I!==null){I=I.shared;var V=I.pending;V===null?E.next=E:(E.next=V.next,V.next=E),I.pending=E}}p.lanes|=a,E=p.alternate,E!==null&&(E.lanes|=a),pu(p.return,a,r),k.lanes|=a;break}E=E.next}}else if(p.tag===10)g=p.type===r.type?null:p.child;else if(p.tag===18){if(g=p.return,g===null)throw Error(o(341));g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),pu(g,a,r),g=p.sibling}else g=p.child;if(g!==null)g.return=p;else for(g=p;g!==null;){if(g===r){g=null;break}if(p=g.sibling,p!==null){p.return=g.return,g=p;break}g=g.return}p=g}Ot(t,r,d.children,a),r=r.child}return r;case 9:return d=r.type,u=r.pendingProps.children,mo(r,a),d=en(d),u=u(d),r.flags|=1,Ot(t,r,u,a),r.child;case 14:return u=r.type,d=fn(u,r.pendingProps),d=fn(u.type,d),Hp(t,r,u,d,a);case 15:return Vp(t,r,r.type,r.pendingProps,a);case 17:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:fn(u,d),Qa(t,r),r.tag=1,jt(u)?(t=!0,Na(r)):t=!1,mo(r,a),$p(r,u,d),Ou(r,u,d,a),Nu(null,r,u,!0,t,a);case 19:return eh(t,r,a);case 22:return Gp(t,r,a)}throw Error(o(156,r.tag))};function Ch(t,r){return nf(t,r)}function Lv(t,r,a,u){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,r,a,u){return new Lv(t,r,a,u)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bv(t){if(typeof t=="function")return Zu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ee)return 11;if(t===ie)return 14}return 2}function mr(t,r){var a=t.alternate;return a===null?(a=rn(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function ls(t,r,a,u,d,p){var g=2;if(u=t,typeof t=="function")Zu(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case L:return Br(a.children,d,p,r);case J:g=8,d|=8;break;case Z:return t=rn(12,a,r,d|2),t.elementType=Z,t.lanes=p,t;case re:return t=rn(13,a,r,d),t.elementType=re,t.lanes=p,t;case oe:return t=rn(19,a,r,d),t.elementType=oe,t.lanes=p,t;case ge:return us(a,d,p,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b:g=10;break e;case X:g=9;break e;case ee:g=11;break e;case ie:g=14;break e;case le:g=16,u=null;break e}throw Error(o(130,t==null?t:typeof t,""))}return r=rn(g,a,r,d),r.elementType=t,r.type=u,r.lanes=p,r}function Br(t,r,a,u){return t=rn(7,t,u,r),t.lanes=a,t}function us(t,r,a,u){return t=rn(22,t,u,r),t.elementType=ge,t.lanes=a,t.stateNode={isHidden:!1},t}function ec(t,r,a){return t=rn(6,t,null,r),t.lanes=a,t}function tc(t,r,a){return r=rn(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Fv(t,r,a,u,d){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function nc(t,r,a,u,d,p,g,k,E){return t=new Fv(t,r,a,k,E),r===1?(r=1,p===!0&&(r|=8)):r=0,p=rn(3,null,null,r),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(p),t}function Uv(t,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:u==null?null:""+u,children:t,containerInfo:r,implementation:a}}function Ph(t){if(!t)return ar;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(o(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(jt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(o(171))}if(t.tag===1){var a=t.type;if(jt(a))return Zf(t,a,r)}return r}function Eh(t,r,a,u,d,p,g,k,E){return t=nc(a,u,!0,t,d,p,g,k,E),t.context=Ph(null),a=t.current,u=_t(),d=pr(a),p=Bn(u,d),p.callback=r??null,ur(a,p,d),t.current.lanes=d,Xo(t,d,u),It(t,u),t}function cs(t,r,a,u){var d=r.current,p=_t(),g=pr(d);return a=Ph(a),r.context===null?r.context=a:r.pendingContext=a,r=Bn(p,g),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),t=ur(d,r,g),t!==null&&(mn(t,d,g,p),Fa(t,d,g)),g}function ds(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rh(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function rc(t,r){Rh(t,r),(t=t.alternate)&&Rh(t,r)}function Wv(){return null}var Th=typeof reportError=="function"?reportError:function(t){console.error(t)};function oc(t){this._internalRoot=t}fs.prototype.render=oc.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(o(409));cs(t,r,null,null)},fs.prototype.unmount=oc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;$r(function(){cs(null,t,null,null)}),r[jn]=null}};function fs(t){this._internalRoot=t}fs.prototype.unstable_scheduleHydration=function(t){if(t){var r=df();t={blockedOn:null,target:t,priority:r};for(var a=0;a<tr.length&&r!==0&&r<tr[a].priority;a++);tr.splice(a,0,t),a===0&&hf(t)}};function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ps(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Oh(){}function qv(t,r,a,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var I=ds(g);p.call(I)}}var g=Eh(r,u,t,0,null,!1,!1,"",Oh);return t._reactRootContainer=g,t[jn]=g.current,ci(t.nodeType===8?t.parentNode:t),$r(),g}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var k=u;u=function(){var I=ds(E);k.call(I)}}var E=nc(t,0,!1,null,null,!1,!1,"",Oh);return t._reactRootContainer=E,t[jn]=E.current,ci(t.nodeType===8?t.parentNode:t),$r(function(){cs(r,E,a,u)}),E}function hs(t,r,a,u,d){var p=a._reactRootContainer;if(p){var g=p;if(typeof d=="function"){var k=d;d=function(){var E=ds(g);k.call(E)}}cs(r,g,t,d)}else g=qv(a,r,t,d,u);return ds(g)}uf=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Yo(r.pendingLanes);a!==0&&(Ol(r,a|1),It(r,tt()),!(Te&6)&&(xo=tt()+500,sr()))}break;case 13:$r(function(){var u=Ln(t,1);if(u!==null){var d=_t();mn(u,t,1,d)}}),rc(t,1)}},_l=function(t){if(t.tag===13){var r=Ln(t,134217728);if(r!==null){var a=_t();mn(r,t,134217728,a)}rc(t,134217728)}},cf=function(t){if(t.tag===13){var r=pr(t),a=Ln(t,r);if(a!==null){var u=_t();mn(a,t,r,u)}rc(t,r)}},df=function(){return De},ff=function(t,r){var a=De;try{return De=t,r()}finally{De=a}},wl=function(t,r,a){switch(r){case"input":if(Pr(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==t&&u.form===t.form){var d=Aa(u);if(!d)throw Error(o(90));Mt(u),Pr(u,d)}}}break;case"textarea":Yn(t,a);break;case"select":r=a.value,r!=null&&Qt(t,!!a.multiple,r,!1)}},Yd=Xu,Xd=$r;var Hv={usingClientEntryPoint:!1,Events:[pi,ao,Aa,Gd,Kd,Xu]},Ri={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vv={bundleType:Ri.bundleType,version:Ri.version,rendererPackageName:Ri.rendererPackageName,rendererConfig:Ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ef(t),t===null?null:t.stateNode},findFiberByHostInstance:Ri.findFiberByHostInstance||Wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{fa=ms.inject(Vv),xn=ms}catch{}}return Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv,Lt.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ic(r))throw Error(o(200));return Uv(t,r,null,a)},Lt.createRoot=function(t,r){if(!ic(t))throw Error(o(299));var a=!1,u="",d=Th;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=nc(t,1,!1,null,null,a,!1,u,d),t[jn]=r.current,ci(t.nodeType===8?t.parentNode:t),new oc(r)},Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=ef(r),t=t===null?null:t.stateNode,t},Lt.flushSync=function(t){return $r(t)},Lt.hydrate=function(t,r,a){if(!ps(r))throw Error(o(200));return hs(null,t,r,!0,a)},Lt.hydrateRoot=function(t,r,a){if(!ic(t))throw Error(o(405));var u=a!=null&&a.hydratedSources||null,d=!1,p="",g=Th;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),r=Eh(r,null,t,1,a??null,d,!1,p,g),t[jn]=r.current,ci(t),u)for(t=0;t<u.length;t++)a=u[t],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new fs(r)},Lt.render=function(t,r,a){if(!ps(r))throw Error(o(200));return hs(null,t,r,!1,a)},Lt.unmountComponentAtNode=function(t){if(!ps(t))throw Error(o(40));return t._reactRootContainer?($r(function(){hs(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1},Lt.unstable_batchedUpdates=Xu,Lt.unstable_renderSubtreeIntoContainer=function(t,r,a,u){if(!ps(a))throw Error(o(200));if(t==null||t._reactInternals===void 0)throw Error(o(38));return hs(t,r,a,!1,u)},Lt.version="18.3.1-next-f1338f8080-20240426",Lt}var $h;function pg(){if($h)return lc.exports;$h=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),lc.exports=n1(),lc.exports}var Ih;function r1(){if(Ih)return gs;Ih=1;var e=pg();return gs.createRoot=e.createRoot,gs.hydrateRoot=e.hydrateRoot,gs}var o1=r1(),A=pd();const He=fg(A),Dc=Xv({__proto__:null,default:He},[A]);function hg(e){var n,o,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(n=0;n<s;n++)e[n]&&(o=hg(e[n]))&&(i&&(i+=" "),i+=o)}else for(o in e)e[o]&&(i&&(i+=" "),i+=o);return i}function Ee(){for(var e,n,o=0,i="",s=arguments.length;o<s;o++)(e=arguments[o])&&(n=hg(e))&&(i&&(i+=" "),i+=n);return i}function ct(e,n,o=void 0){const i={};for(const s in e){const l=e[s];let c="",f=!0;for(let h=0;h<l.length;h+=1){const m=l[h];m&&(c+=(f===!0?"":" ")+n(m),f=!1,o&&o[m]&&(c+=" "+o[m]))}i[s]=c}return i}function Kr(e,...n){const o=new URL(`https://mui.com/production-error/?code=${e}`);return n.forEach(i=>o.searchParams.append("args[]",i)),`Minified MUI error #${e}; visit ${o} for the full message.`}function Se(e){if(typeof e!="string")throw new Error(Kr(7));return e.charAt(0).toUpperCase()+e.slice(1)}function On(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function mg(e){if(A.isValidElement(e)||!On(e))return e;const n={};return Object.keys(e).forEach(o=>{n[o]=mg(e[o])}),n}function At(e,n,o={clone:!0}){const i=o.clone?{...e}:e;return On(e)&&On(n)&&Object.keys(n).forEach(s=>{A.isValidElement(n[s])?i[s]=n[s]:On(n[s])&&Object.prototype.hasOwnProperty.call(e,s)&&On(e[s])?i[s]=At(e[s],n[s],o):o.clone?i[s]=On(n[s])?mg(n[s]):n[s]:i[s]=n[s]}),i}function Bi(e,n){return n?At(e,n,{clone:!1}):e}function i1(e,n){if(!e.containerQueries)return n;const o=Object.keys(n).filter(i=>i.startsWith("@container")).sort((i,s)=>{var c,f;const l=/min-width:\s*([0-9.]+)/;return+(((c=i.match(l))==null?void 0:c[1])||0)-+(((f=s.match(l))==null?void 0:f[1])||0)});return o.length?o.reduce((i,s)=>{const l=n[s];return delete i[s],i[s]=l,i},{...n}):n}function a1(e,n){return n==="@"||n.startsWith("@")&&(e.some(o=>n.startsWith(`@${o}`))||!!n.match(/^@\d/))}function s1(e,n){const o=n.match(/^@([^/]+)?\/?(.+)?$/);if(!o)return null;const[,i,s]=o,l=Number.isNaN(+i)?i||0:+i;return e.containerQueries(s).up(l)}function l1(e){const n=(l,c)=>l.replace("@media",c?`@container ${c}`:"@container");function o(l,c){l.up=(...f)=>n(e.breakpoints.up(...f),c),l.down=(...f)=>n(e.breakpoints.down(...f),c),l.between=(...f)=>n(e.breakpoints.between(...f),c),l.only=(...f)=>n(e.breakpoints.only(...f),c),l.not=(...f)=>{const h=n(e.breakpoints.not(...f),c);return h.includes("not all and")?h.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):h}}const i={},s=l=>(o(i,l),i);return o(s),{...e,containerQueries:s}}const Hs={xs:0,sm:600,md:900,lg:1200,xl:1536},Lh={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Hs[e]}px)`},u1={containerQueries:e=>({up:n=>{let o=typeof n=="number"?n:Hs[n]||n;return typeof o=="number"&&(o=`${o}px`),e?`@container ${e} (min-width:${o})`:`@container (min-width:${o})`}})};function Vn(e,n,o){const i=e.theme||{};if(Array.isArray(n)){const l=i.breakpoints||Lh;return n.reduce((c,f,h)=>(c[l.up(l.keys[h])]=o(n[h]),c),{})}if(typeof n=="object"){const l=i.breakpoints||Lh;return Object.keys(n).reduce((c,f)=>{if(a1(l.keys,f)){const h=s1(i.containerQueries?i:u1,f);h&&(c[h]=o(n[f],f))}else if(Object.keys(l.values||Hs).includes(f)){const h=l.up(f);c[h]=o(n[f],f)}else{const h=f;c[h]=n[h]}return c},{})}return o(n)}function c1(e={}){var o;return((o=e.keys)==null?void 0:o.reduce((i,s)=>{const l=e.up(s);return i[l]={},i},{}))||{}}function d1(e,n){return e.reduce((o,i)=>{const s=o[i];return(!s||Object.keys(s).length===0)&&delete o[i],o},n)}function Vs(e,n,o=!0){if(!n||typeof n!="string")return null;if(e&&e.vars&&o){const i=`vars.${n}`.split(".").reduce((s,l)=>s&&s[l]?s[l]:null,e);if(i!=null)return i}return n.split(".").reduce((i,s)=>i&&i[s]!=null?i[s]:null,e)}function Ns(e,n,o,i=o){let s;return typeof e=="function"?s=e(o):Array.isArray(e)?s=e[o]||i:s=Vs(e,o)||i,n&&(s=n(s,i,e)),s}function rt(e){const{prop:n,cssProperty:o=e.prop,themeKey:i,transform:s}=e,l=c=>{if(c[n]==null)return null;const f=c[n],h=c.theme,m=Vs(h,i)||{};return Vn(c,f,v=>{let w=Ns(m,s,v);return v===w&&typeof v=="string"&&(w=Ns(m,s,`${n}${v==="default"?"":Se(v)}`,v)),o===!1?w:{[o]:w}})};return l.propTypes={},l.filterProps=[n],l}function f1(e){const n={};return o=>(n[o]===void 0&&(n[o]=e(o)),n[o])}const p1={m:"margin",p:"padding"},h1={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Bh={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},m1=f1(e=>{if(e.length>2)if(Bh[e])e=Bh[e];else return[e];const[n,o]=e.split(""),i=p1[n],s=h1[o]||"";return Array.isArray(s)?s.map(l=>i+l):[i+s]}),hd=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],md=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...hd,...md];function ea(e,n,o,i){const s=Vs(e,n,!0)??o;return typeof s=="number"||typeof s=="string"?l=>typeof l=="string"?l:typeof s=="string"?`calc(${l} * ${s})`:s*l:Array.isArray(s)?l=>{if(typeof l=="string")return l;const c=Math.abs(l),f=s[c];return l>=0?f:typeof f=="number"?-f:`-${f}`}:typeof s=="function"?s:()=>{}}function gd(e){return ea(e,"spacing",8)}function ta(e,n){return typeof n=="string"||n==null?n:e(n)}function g1(e,n){return o=>e.reduce((i,s)=>(i[s]=ta(n,o),i),{})}function y1(e,n,o,i){if(!n.includes(o))return null;const s=m1(o),l=g1(s,i),c=e[o];return Vn(e,c,l)}function gg(e,n){const o=gd(e.theme);return Object.keys(e).map(i=>y1(e,n,i,o)).reduce(Bi,{})}function Je(e){return gg(e,hd)}Je.propTypes={};Je.filterProps=hd;function Ze(e){return gg(e,md)}Ze.propTypes={};Ze.filterProps=md;function Gs(...e){const n=e.reduce((i,s)=>(s.filterProps.forEach(l=>{i[l]=s}),i),{}),o=i=>Object.keys(i).reduce((s,l)=>n[l]?Bi(s,n[l](i)):s,{});return o.propTypes={},o.filterProps=e.reduce((i,s)=>i.concat(s.filterProps),[]),o}function an(e){return typeof e!="number"?e:`${e}px solid`}function sn(e,n){return rt({prop:e,themeKey:"borders",transform:n})}const v1=sn("border",an),b1=sn("borderTop",an),x1=sn("borderRight",an),S1=sn("borderBottom",an),w1=sn("borderLeft",an),k1=sn("borderColor"),C1=sn("borderTopColor"),P1=sn("borderRightColor"),E1=sn("borderBottomColor"),R1=sn("borderLeftColor"),T1=sn("outline",an),O1=sn("outlineColor"),Ks=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const n=ea(e.theme,"shape.borderRadius",4),o=i=>({borderRadius:ta(n,i)});return Vn(e,e.borderRadius,o)}return null};Ks.propTypes={};Ks.filterProps=["borderRadius"];Gs(v1,b1,x1,S1,w1,k1,C1,P1,E1,R1,Ks,T1,O1);const Ys=e=>{if(e.gap!==void 0&&e.gap!==null){const n=ea(e.theme,"spacing",8),o=i=>({gap:ta(n,i)});return Vn(e,e.gap,o)}return null};Ys.propTypes={};Ys.filterProps=["gap"];const Xs=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const n=ea(e.theme,"spacing",8),o=i=>({columnGap:ta(n,i)});return Vn(e,e.columnGap,o)}return null};Xs.propTypes={};Xs.filterProps=["columnGap"];const Qs=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const n=ea(e.theme,"spacing",8),o=i=>({rowGap:ta(n,i)});return Vn(e,e.rowGap,o)}return null};Qs.propTypes={};Qs.filterProps=["rowGap"];const _1=rt({prop:"gridColumn"}),A1=rt({prop:"gridRow"}),M1=rt({prop:"gridAutoFlow"}),N1=rt({prop:"gridAutoColumns"}),z1=rt({prop:"gridAutoRows"}),j1=rt({prop:"gridTemplateColumns"}),D1=rt({prop:"gridTemplateRows"}),$1=rt({prop:"gridTemplateAreas"}),I1=rt({prop:"gridArea"});Gs(Ys,Xs,Qs,_1,A1,M1,N1,z1,j1,D1,$1,I1);function jo(e,n){return n==="grey"?n:e}const L1=rt({prop:"color",themeKey:"palette",transform:jo}),B1=rt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:jo}),F1=rt({prop:"backgroundColor",themeKey:"palette",transform:jo});Gs(L1,B1,F1);function Gt(e){return e<=1&&e!==0?`${e*100}%`:e}const U1=rt({prop:"width",transform:Gt}),yd=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const n=o=>{var s,l,c,f,h;const i=((c=(l=(s=e.theme)==null?void 0:s.breakpoints)==null?void 0:l.values)==null?void 0:c[o])||Hs[o];return i?((h=(f=e.theme)==null?void 0:f.breakpoints)==null?void 0:h.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:Gt(o)}};return Vn(e,e.maxWidth,n)}return null};yd.filterProps=["maxWidth"];const W1=rt({prop:"minWidth",transform:Gt}),q1=rt({prop:"height",transform:Gt}),H1=rt({prop:"maxHeight",transform:Gt}),V1=rt({prop:"minHeight",transform:Gt});rt({prop:"size",cssProperty:"width",transform:Gt});rt({prop:"size",cssProperty:"height",transform:Gt});const G1=rt({prop:"boxSizing"});Gs(U1,yd,W1,q1,H1,V1,G1);const na={border:{themeKey:"borders",transform:an},borderTop:{themeKey:"borders",transform:an},borderRight:{themeKey:"borders",transform:an},borderBottom:{themeKey:"borders",transform:an},borderLeft:{themeKey:"borders",transform:an},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:an},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ks},color:{themeKey:"palette",transform:jo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:jo},backgroundColor:{themeKey:"palette",transform:jo},p:{style:Ze},pt:{style:Ze},pr:{style:Ze},pb:{style:Ze},pl:{style:Ze},px:{style:Ze},py:{style:Ze},padding:{style:Ze},paddingTop:{style:Ze},paddingRight:{style:Ze},paddingBottom:{style:Ze},paddingLeft:{style:Ze},paddingX:{style:Ze},paddingY:{style:Ze},paddingInline:{style:Ze},paddingInlineStart:{style:Ze},paddingInlineEnd:{style:Ze},paddingBlock:{style:Ze},paddingBlockStart:{style:Ze},paddingBlockEnd:{style:Ze},m:{style:Je},mt:{style:Je},mr:{style:Je},mb:{style:Je},ml:{style:Je},mx:{style:Je},my:{style:Je},margin:{style:Je},marginTop:{style:Je},marginRight:{style:Je},marginBottom:{style:Je},marginLeft:{style:Je},marginX:{style:Je},marginY:{style:Je},marginInline:{style:Je},marginInlineStart:{style:Je},marginInlineEnd:{style:Je},marginBlock:{style:Je},marginBlockStart:{style:Je},marginBlockEnd:{style:Je},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ys},rowGap:{style:Qs},columnGap:{style:Xs},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Gt},maxWidth:{style:yd},minWidth:{transform:Gt},height:{transform:Gt},maxHeight:{transform:Gt},minHeight:{transform:Gt},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function K1(...e){const n=e.reduce((i,s)=>i.concat(Object.keys(s)),[]),o=new Set(n);return e.every(i=>o.size===Object.keys(i).length)}function Y1(e,n){return typeof e=="function"?e(n):e}function X1(){function e(o,i,s,l){const c={[o]:i,theme:s},f=l[o];if(!f)return{[o]:i};const{cssProperty:h=o,themeKey:m,transform:y,style:v}=f;if(i==null)return null;if(m==="typography"&&i==="inherit")return{[o]:i};const w=Vs(s,m)||{};return v?v(c):Vn(c,i,S=>{let x=Ns(w,y,S);return S===x&&typeof S=="string"&&(x=Ns(w,y,`${o}${S==="default"?"":Se(S)}`,S)),h===!1?x:{[h]:x}})}function n(o){const{sx:i,theme:s={}}=o||{};if(!i)return null;const l=s.unstable_sxConfig??na;function c(f){let h=f;if(typeof f=="function")h=f(s);else if(typeof f!="object")return f;if(!h)return null;const m=c1(s.breakpoints),y=Object.keys(m);let v=m;return Object.keys(h).forEach(w=>{const R=Y1(h[w],s);if(R!=null)if(typeof R=="object")if(l[w])v=Bi(v,e(w,R,s,l));else{const S=Vn({theme:s},R,x=>({[w]:x}));K1(S,R)?v[w]=n({sx:R,theme:s}):v=Bi(v,S)}else v=Bi(v,e(w,R,s,l))}),i1(s,d1(y,v))}return Array.isArray(i)?i.map(c):c(i)}return n}const xr=X1();xr.filterProps=["sx"];const Q1=e=>{var i;const n={systemProps:{},otherProps:{}},o=((i=e==null?void 0:e.theme)==null?void 0:i.unstable_sxConfig)??na;return Object.keys(e).forEach(s=>{o[s]?n.systemProps[s]=e[s]:n.otherProps[s]=e[s]}),n};function vd(e){const{sx:n,...o}=e,{systemProps:i,otherProps:s}=Q1(o);let l;return Array.isArray(n)?l=[i,...n]:typeof n=="function"?l=(...c)=>{const f=n(...c);return On(f)?{...i,...f}:i}:l={...i,...n},{...s,sx:l}}function Xe(){return Xe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)({}).hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},Xe.apply(null,arguments)}function yg(e){var n=Object.create(null);return function(o){return n[o]===void 0&&(n[o]=e(o)),n[o]}}var J1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Z1=yg(function(e){return J1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),eb=!1;function tb(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function nb(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var rb=function(){function e(o){var i=this;this._insertTag=function(s){var l;i.tags.length===0?i.insertionPoint?l=i.insertionPoint.nextSibling:i.prepend?l=i.container.firstChild:l=i.before:l=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,l),i.tags.push(s)},this.isSpeedy=o.speedy===void 0?!eb:o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(i){i.forEach(this._insertTag)},n.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(nb(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var l=tb(s);try{l.insertRule(i,l.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},n.flush=function(){this.tags.forEach(function(i){var s;return(s=i.parentNode)==null?void 0:s.removeChild(i)}),this.tags=[],this.ctr=0},e}(),Et="-ms-",zs="-moz-",Me="-webkit-",vg="comm",bd="rule",xd="decl",ob="@import",bg="@keyframes",ib="@layer",ab=Math.abs,Js=String.fromCharCode,sb=Object.assign;function lb(e,n){return St(e,0)^45?(((n<<2^St(e,0))<<2^St(e,1))<<2^St(e,2))<<2^St(e,3):0}function xg(e){return e.trim()}function ub(e,n){return(e=n.exec(e))?e[0]:e}function Ne(e,n,o){return e.replace(n,o)}function $c(e,n){return e.indexOf(n)}function St(e,n){return e.charCodeAt(n)|0}function Hi(e,n,o){return e.slice(n,o)}function Rn(e){return e.length}function Sd(e){return e.length}function ys(e,n){return n.push(e),e}function cb(e,n){return e.map(n).join("")}var Zs=1,Lo=1,Sg=0,Ft=0,lt=0,Bo="";function el(e,n,o,i,s,l,c){return{value:e,root:n,parent:o,type:i,props:s,children:l,line:Zs,column:Lo,length:c,return:""}}function _i(e,n){return sb(el("",null,null,"",null,null,0),e,{length:-e.length},n)}function db(){return lt}function fb(){return lt=Ft>0?St(Bo,--Ft):0,Lo--,lt===10&&(Lo=1,Zs--),lt}function Kt(){return lt=Ft<Sg?St(Bo,Ft++):0,Lo++,lt===10&&(Lo=1,Zs++),lt}function Mn(){return St(Bo,Ft)}function Es(){return Ft}function ra(e,n){return Hi(Bo,e,n)}function Vi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wg(e){return Zs=Lo=1,Sg=Rn(Bo=e),Ft=0,[]}function kg(e){return Bo="",e}function Rs(e){return xg(ra(Ft-1,Ic(e===91?e+2:e===40?e+1:e)))}function pb(e){for(;(lt=Mn())&&lt<33;)Kt();return Vi(e)>2||Vi(lt)>3?"":" "}function hb(e,n){for(;--n&&Kt()&&!(lt<48||lt>102||lt>57&&lt<65||lt>70&&lt<97););return ra(e,Es()+(n<6&&Mn()==32&&Kt()==32))}function Ic(e){for(;Kt();)switch(lt){case e:return Ft;case 34:case 39:e!==34&&e!==39&&Ic(lt);break;case 40:e===41&&Ic(e);break;case 92:Kt();break}return Ft}function mb(e,n){for(;Kt()&&e+lt!==57;)if(e+lt===84&&Mn()===47)break;return"/*"+ra(n,Ft-1)+"*"+Js(e===47?e:Kt())}function gb(e){for(;!Vi(Mn());)Kt();return ra(e,Ft)}function yb(e){return kg(Ts("",null,null,null,[""],e=wg(e),0,[0],e))}function Ts(e,n,o,i,s,l,c,f,h){for(var m=0,y=0,v=c,w=0,R=0,S=0,x=1,P=1,$=1,U=0,j="",_=s,C=l,z=i,L=j;P;)switch(S=U,U=Kt()){case 40:if(S!=108&&St(L,v-1)==58){$c(L+=Ne(Rs(U),"&","&\f"),"&\f")!=-1&&($=-1);break}case 34:case 39:case 91:L+=Rs(U);break;case 9:case 10:case 13:case 32:L+=pb(S);break;case 92:L+=hb(Es()-1,7);continue;case 47:switch(Mn()){case 42:case 47:ys(vb(mb(Kt(),Es()),n,o),h);break;default:L+="/"}break;case 123*x:f[m++]=Rn(L)*$;case 125*x:case 59:case 0:switch(U){case 0:case 125:P=0;case 59+y:$==-1&&(L=Ne(L,/\f/g,"")),R>0&&Rn(L)-v&&ys(R>32?Uh(L+";",i,o,v-1):Uh(Ne(L," ","")+";",i,o,v-2),h);break;case 59:L+=";";default:if(ys(z=Fh(L,n,o,m,y,s,f,j,_=[],C=[],v),l),U===123)if(y===0)Ts(L,n,z,z,_,l,v,f,C);else switch(w===99&&St(L,3)===110?100:w){case 100:case 108:case 109:case 115:Ts(e,z,z,i&&ys(Fh(e,z,z,0,0,s,f,j,s,_=[],v),C),s,C,v,f,i?_:C);break;default:Ts(L,z,z,z,[""],C,0,f,C)}}m=y=R=0,x=$=1,j=L="",v=c;break;case 58:v=1+Rn(L),R=S;default:if(x<1){if(U==123)--x;else if(U==125&&x++==0&&fb()==125)continue}switch(L+=Js(U),U*x){case 38:$=y>0?1:(L+="\f",-1);break;case 44:f[m++]=(Rn(L)-1)*$,$=1;break;case 64:Mn()===45&&(L+=Rs(Kt())),w=Mn(),y=v=Rn(j=L+=gb(Es())),U++;break;case 45:S===45&&Rn(L)==2&&(x=0)}}return l}function Fh(e,n,o,i,s,l,c,f,h,m,y){for(var v=s-1,w=s===0?l:[""],R=Sd(w),S=0,x=0,P=0;S<i;++S)for(var $=0,U=Hi(e,v+1,v=ab(x=c[S])),j=e;$<R;++$)(j=xg(x>0?w[$]+" "+U:Ne(U,/&\f/g,w[$])))&&(h[P++]=j);return el(e,n,o,s===0?bd:f,h,m,y)}function vb(e,n,o){return el(e,n,o,vg,Js(db()),Hi(e,2,-2),0)}function Uh(e,n,o,i){return el(e,n,o,xd,Hi(e,0,i),Hi(e,i+1,-1),i)}function Do(e,n){for(var o="",i=Sd(e),s=0;s<i;s++)o+=n(e[s],s,e,n)||"";return o}function bb(e,n,o,i){switch(e.type){case ib:if(e.children.length)break;case ob:case xd:return e.return=e.return||e.value;case vg:return"";case bg:return e.return=e.value+"{"+Do(e.children,i)+"}";case bd:e.value=e.props.join(",")}return Rn(o=Do(e.children,i))?e.return=e.value+"{"+o+"}":""}function xb(e){var n=Sd(e);return function(o,i,s,l){for(var c="",f=0;f<n;f++)c+=e[f](o,i,s,l)||"";return c}}function Sb(e){return function(n){n.root||(n=n.return)&&e(n)}}var wb=function(n,o,i){for(var s=0,l=0;s=l,l=Mn(),s===38&&l===12&&(o[i]=1),!Vi(l);)Kt();return ra(n,Ft)},kb=function(n,o){var i=-1,s=44;do switch(Vi(s)){case 0:s===38&&Mn()===12&&(o[i]=1),n[i]+=wb(Ft-1,o,i);break;case 2:n[i]+=Rs(s);break;case 4:if(s===44){n[++i]=Mn()===58?"&\f":"",o[i]=n[i].length;break}default:n[i]+=Js(s)}while(s=Kt());return n},Cb=function(n,o){return kg(kb(wg(n),o))},Wh=new WeakMap,Pb=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var o=n.value,i=n.parent,s=n.column===i.column&&n.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(n.props.length===1&&o.charCodeAt(0)!==58&&!Wh.get(i))&&!s){Wh.set(n,!0);for(var l=[],c=Cb(o,l),f=i.props,h=0,m=0;h<c.length;h++)for(var y=0;y<f.length;y++,m++)n.props[m]=l[h]?c[h].replace(/&\f/g,f[y]):f[y]+" "+c[h]}}},Eb=function(n){if(n.type==="decl"){var o=n.value;o.charCodeAt(0)===108&&o.charCodeAt(2)===98&&(n.return="",n.value="")}};function Cg(e,n){switch(lb(e,n)){case 5103:return Me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+e+zs+e+Et+e+e;case 6828:case 4268:return Me+e+Et+e+e;case 6165:return Me+e+Et+"flex-"+e+e;case 5187:return Me+e+Ne(e,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Et+"flex-$1$2")+e;case 5443:return Me+e+Et+"flex-item-"+Ne(e,/flex-|-self/,"")+e;case 4675:return Me+e+Et+"flex-line-pack"+Ne(e,/align-content|flex-|-self/,"")+e;case 5548:return Me+e+Et+Ne(e,"shrink","negative")+e;case 5292:return Me+e+Et+Ne(e,"basis","preferred-size")+e;case 6060:return Me+"box-"+Ne(e,"-grow","")+Me+e+Et+Ne(e,"grow","positive")+e;case 4554:return Me+Ne(e,/([^-])(transform)/g,"$1"+Me+"$2")+e;case 6187:return Ne(Ne(Ne(e,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),e,"")+e;case 5495:case 3959:return Ne(e,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return Ne(Ne(e,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Et+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+e+e;case 4095:case 3583:case 4068:case 2532:return Ne(e,/(.+)-inline(.+)/,Me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rn(e)-1-n>6)switch(St(e,n+1)){case 109:if(St(e,n+4)!==45)break;case 102:return Ne(e,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+zs+(St(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~$c(e,"stretch")?Cg(Ne(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(St(e,n+1)!==115)break;case 6444:switch(St(e,Rn(e)-3-(~$c(e,"!important")&&10))){case 107:return Ne(e,":",":"+Me)+e;case 101:return Ne(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Me+(St(e,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Et+"$2box$3")+e}break;case 5936:switch(St(e,n+11)){case 114:return Me+e+Et+Ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Me+e+Et+Ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Me+e+Et+Ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Me+e+Et+e+e}return e}var Rb=function(n,o,i,s){if(n.length>-1&&!n.return)switch(n.type){case xd:n.return=Cg(n.value,n.length);break;case bg:return Do([_i(n,{value:Ne(n.value,"@","@"+Me)})],s);case bd:if(n.length)return cb(n.props,function(l){switch(ub(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Do([_i(n,{props:[Ne(l,/:(read-\w+)/,":"+zs+"$1")]})],s);case"::placeholder":return Do([_i(n,{props:[Ne(l,/:(plac\w+)/,":"+Me+"input-$1")]}),_i(n,{props:[Ne(l,/:(plac\w+)/,":"+zs+"$1")]}),_i(n,{props:[Ne(l,/:(plac\w+)/,Et+"input-$1")]})],s)}return""})}},Tb=[Rb],Ob=function(n){var o=n.key;if(o==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(x){var P=x.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var s=n.stylisPlugins||Tb,l={},c,f=[];c=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(x){for(var P=x.getAttribute("data-emotion").split(" "),$=1;$<P.length;$++)l[P[$]]=!0;f.push(x)});var h,m=[Pb,Eb];{var y,v=[bb,Sb(function(x){y.insert(x)})],w=xb(m.concat(s,v)),R=function(P){return Do(yb(P),w)};h=function(P,$,U,j){y=U,R(P?P+"{"+$.styles+"}":$.styles),j&&(S.inserted[$.name]=!0)}}var S={key:o,sheet:new rb({key:o,container:c,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:l,registered:{},insert:h};return S.sheet.hydrate(f),S},dc={exports:{}},ze={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function _b(){if(qh)return ze;qh=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,o=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,h=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,y=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,w=e?Symbol.for("react.suspense_list"):60120,R=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,x=e?Symbol.for("react.block"):60121,P=e?Symbol.for("react.fundamental"):60117,$=e?Symbol.for("react.responder"):60118,U=e?Symbol.for("react.scope"):60119;function j(C){if(typeof C=="object"&&C!==null){var z=C.$$typeof;switch(z){case n:switch(C=C.type,C){case h:case m:case i:case l:case s:case v:return C;default:switch(C=C&&C.$$typeof,C){case f:case y:case S:case R:case c:return C;default:return z}}case o:return z}}}function _(C){return j(C)===m}return ze.AsyncMode=h,ze.ConcurrentMode=m,ze.ContextConsumer=f,ze.ContextProvider=c,ze.Element=n,ze.ForwardRef=y,ze.Fragment=i,ze.Lazy=S,ze.Memo=R,ze.Portal=o,ze.Profiler=l,ze.StrictMode=s,ze.Suspense=v,ze.isAsyncMode=function(C){return _(C)||j(C)===h},ze.isConcurrentMode=_,ze.isContextConsumer=function(C){return j(C)===f},ze.isContextProvider=function(C){return j(C)===c},ze.isElement=function(C){return typeof C=="object"&&C!==null&&C.$$typeof===n},ze.isForwardRef=function(C){return j(C)===y},ze.isFragment=function(C){return j(C)===i},ze.isLazy=function(C){return j(C)===S},ze.isMemo=function(C){return j(C)===R},ze.isPortal=function(C){return j(C)===o},ze.isProfiler=function(C){return j(C)===l},ze.isStrictMode=function(C){return j(C)===s},ze.isSuspense=function(C){return j(C)===v},ze.isValidElementType=function(C){return typeof C=="string"||typeof C=="function"||C===i||C===m||C===l||C===s||C===v||C===w||typeof C=="object"&&C!==null&&(C.$$typeof===S||C.$$typeof===R||C.$$typeof===c||C.$$typeof===f||C.$$typeof===y||C.$$typeof===P||C.$$typeof===$||C.$$typeof===U||C.$$typeof===x)},ze.typeOf=j,ze}var Hh;function Ab(){return Hh||(Hh=1,dc.exports=_b()),dc.exports}var fc,Vh;function Mb(){if(Vh)return fc;Vh=1;var e=Ab(),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=i,l[e.Memo]=s;function c(S){return e.isMemo(S)?s:l[S.$$typeof]||n}var f=Object.defineProperty,h=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,w=Object.prototype;function R(S,x,P){if(typeof x!="string"){if(w){var $=v(x);$&&$!==w&&R(S,$,P)}var U=h(x);m&&(U=U.concat(m(x)));for(var j=c(S),_=c(x),C=0;C<U.length;++C){var z=U[C];if(!o[z]&&!(P&&P[z])&&!(_&&_[z])&&!(j&&j[z])){var L=y(x,z);try{f(S,z,L)}catch{}}}}return S}return fc=R,fc}Mb();var Nb=!0;function zb(e,n,o){var i="";return o.split(" ").forEach(function(s){e[s]!==void 0?n.push(e[s]+";"):s&&(i+=s+" ")}),i}var Pg=function(n,o,i){var s=n.key+"-"+o.name;(i===!1||Nb===!1)&&n.registered[s]===void 0&&(n.registered[s]=o.styles)},Eg=function(n,o,i){Pg(n,o,i);var s=n.key+"-"+o.name;if(n.inserted[o.name]===void 0){var l=o;do n.insert(o===l?"."+s:"",l,n.sheet,!0),l=l.next;while(l!==void 0)}};function jb(e){for(var n=0,o,i=0,s=e.length;s>=4;++i,s-=4)o=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,n=(o&65535)*1540483477+((o>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(s){case 3:n^=(e.charCodeAt(i+2)&255)<<16;case 2:n^=(e.charCodeAt(i+1)&255)<<8;case 1:n^=e.charCodeAt(i)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var Db={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$b=!1,Ib=/[A-Z]|^ms/g,Lb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Rg=function(n){return n.charCodeAt(1)===45},Gh=function(n){return n!=null&&typeof n!="boolean"},pc=yg(function(e){return Rg(e)?e:e.replace(Ib,"-$&").toLowerCase()}),Kh=function(n,o){switch(n){case"animation":case"animationName":if(typeof o=="string")return o.replace(Lb,function(i,s,l){return Tn={name:s,styles:l,next:Tn},s})}return Db[n]!==1&&!Rg(n)&&typeof o=="number"&&o!==0?o+"px":o},Bb="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Gi(e,n,o){if(o==null)return"";var i=o;if(i.__emotion_styles!==void 0)return i;switch(typeof o){case"boolean":return"";case"object":{var s=o;if(s.anim===1)return Tn={name:s.name,styles:s.styles,next:Tn},s.name;var l=o;if(l.styles!==void 0){var c=l.next;if(c!==void 0)for(;c!==void 0;)Tn={name:c.name,styles:c.styles,next:Tn},c=c.next;var f=l.styles+";";return f}return Fb(e,n,o)}case"function":{if(e!==void 0){var h=Tn,m=o(e);return Tn=h,Gi(e,n,m)}break}}var y=o;if(n==null)return y;var v=n[y];return v!==void 0?v:y}function Fb(e,n,o){var i="";if(Array.isArray(o))for(var s=0;s<o.length;s++)i+=Gi(e,n,o[s])+";";else for(var l in o){var c=o[l];if(typeof c!="object"){var f=c;n!=null&&n[f]!==void 0?i+=l+"{"+n[f]+"}":Gh(f)&&(i+=pc(l)+":"+Kh(l,f)+";")}else{if(l==="NO_COMPONENT_SELECTOR"&&$b)throw new Error(Bb);if(Array.isArray(c)&&typeof c[0]=="string"&&(n==null||n[c[0]]===void 0))for(var h=0;h<c.length;h++)Gh(c[h])&&(i+=pc(l)+":"+Kh(l,c[h])+";");else{var m=Gi(e,n,c);switch(l){case"animation":case"animationName":{i+=pc(l)+":"+m+";";break}default:i+=l+"{"+m+"}"}}}}return i}var Yh=/label:\s*([^\s;{]+)\s*(;|$)/g,Tn;function tl(e,n,o){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";Tn=void 0;var l=e[0];if(l==null||l.raw===void 0)i=!1,s+=Gi(o,n,l);else{var c=l;s+=c[0]}for(var f=1;f<e.length;f++)if(s+=Gi(o,n,e[f]),i){var h=l;s+=h[f]}Yh.lastIndex=0;for(var m="",y;(y=Yh.exec(s))!==null;)m+="-"+y[1];var v=jb(s)+m;return{name:v,styles:s,next:Tn}}var Ub=function(n){return n()},Tg=Dc.useInsertionEffect?Dc.useInsertionEffect:!1,Wb=Tg||Ub,Xh=Tg||A.useLayoutEffect,Og=A.createContext(typeof HTMLElement<"u"?Ob({key:"css"}):null);Og.Provider;var _g=function(n){return A.forwardRef(function(o,i){var s=A.useContext(Og);return n(o,s,i)})},nl=A.createContext({}),qb=_g(function(e,n){var o=e.styles,i=tl([o],void 0,A.useContext(nl)),s=A.useRef();return Xh(function(){var l=n.key+"-global",c=new n.sheet.constructor({key:l,nonce:n.sheet.nonce,container:n.sheet.container,speedy:n.sheet.isSpeedy}),f=!1,h=document.querySelector('style[data-emotion="'+l+" "+i.name+'"]');return n.sheet.tags.length&&(c.before=n.sheet.tags[0]),h!==null&&(f=!0,h.setAttribute("data-emotion",l),c.hydrate([h])),s.current=[c,f],function(){c.flush()}},[n]),Xh(function(){var l=s.current,c=l[0],f=l[1];if(f){l[1]=!1;return}if(i.next!==void 0&&Eg(n,i.next,!0),c.tags.length){var h=c.tags[c.tags.length-1].nextElementSibling;c.before=h,c.flush()}n.insert("",i,c,!1)},[n,i.name]),null});function Hb(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return tl(n)}var wd=function(){var n=Hb.apply(void 0,arguments),o="animation-"+n.name;return{name:o,styles:"@keyframes "+o+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Vb=Z1,Gb=function(n){return n!=="theme"},Qh=function(n){return typeof n=="string"&&n.charCodeAt(0)>96?Vb:Gb},Jh=function(n,o,i){var s;if(o){var l=o.shouldForwardProp;s=n.__emotion_forwardProp&&l?function(c){return n.__emotion_forwardProp(c)&&l(c)}:l}return typeof s!="function"&&i&&(s=n.__emotion_forwardProp),s},Kb=!1,Yb=function(n){var o=n.cache,i=n.serialized,s=n.isStringTag;return Pg(o,i,s),Wb(function(){return Eg(o,i,s)}),null},Xb=function e(n,o){var i=n.__emotion_real===n,s=i&&n.__emotion_base||n,l,c;o!==void 0&&(l=o.label,c=o.target);var f=Jh(n,o,i),h=f||Qh(s),m=!h("as");return function(){var y=arguments,v=i&&n.__emotion_styles!==void 0?n.__emotion_styles.slice(0):[];if(l!==void 0&&v.push("label:"+l+";"),y[0]==null||y[0].raw===void 0)v.push.apply(v,y);else{v.push(y[0][0]);for(var w=y.length,R=1;R<w;R++)v.push(y[R],y[0][R])}var S=_g(function(x,P,$){var U=m&&x.as||s,j="",_=[],C=x;if(x.theme==null){C={};for(var z in x)C[z]=x[z];C.theme=A.useContext(nl)}typeof x.className=="string"?j=zb(P.registered,_,x.className):x.className!=null&&(j=x.className+" ");var L=tl(v.concat(_),P.registered,C);j+=P.key+"-"+L.name,c!==void 0&&(j+=" "+c);var J=m&&f===void 0?Qh(U):h,Z={};for(var b in x)m&&b==="as"||J(b)&&(Z[b]=x[b]);return Z.className=j,$&&(Z.ref=$),A.createElement(A.Fragment,null,A.createElement(Yb,{cache:P,serialized:L,isStringTag:typeof U=="string"}),A.createElement(U,Z))});return S.displayName=l!==void 0?l:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",S.defaultProps=n.defaultProps,S.__emotion_real=S,S.__emotion_base=s,S.__emotion_styles=v,S.__emotion_forwardProp=f,Object.defineProperty(S,"toString",{value:function(){return c===void 0&&Kb?"NO_COMPONENT_SELECTOR":"."+c}}),S.withComponent=function(x,P){return e(x,Xe({},o,P,{shouldForwardProp:Jh(S,P,!0)})).apply(void 0,v)},S}},Qb=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Lc=Xb.bind();Qb.forEach(function(e){Lc[e]=Lc(e)});function Jb(e){return e==null||Object.keys(e).length===0}function Zb(e){const{styles:n,defaultTheme:o={}}=e,i=typeof n=="function"?s=>n(Jb(s)?o:s):n;return M.jsx(qb,{styles:i})}/**
 * @mui/styled-engine v6.1.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Ag(e,n){return Lc(e,n)}function ex(e,n){Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=n(e.__emotion_styles))}const Zh=[];function em(e){return Zh[0]=e,tl(Zh)}const tx=e=>{const n=Object.keys(e).map(o=>({key:o,val:e[o]}))||[];return n.sort((o,i)=>o.val-i.val),n.reduce((o,i)=>({...o,[i.key]:i.val}),{})};function nx(e){const{values:n={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:o="px",step:i=5,...s}=e,l=tx(n),c=Object.keys(l);function f(w){return`@media (min-width:${typeof n[w]=="number"?n[w]:w}${o})`}function h(w){return`@media (max-width:${(typeof n[w]=="number"?n[w]:w)-i/100}${o})`}function m(w,R){const S=c.indexOf(R);return`@media (min-width:${typeof n[w]=="number"?n[w]:w}${o}) and (max-width:${(S!==-1&&typeof n[c[S]]=="number"?n[c[S]]:R)-i/100}${o})`}function y(w){return c.indexOf(w)+1<c.length?m(w,c[c.indexOf(w)+1]):f(w)}function v(w){const R=c.indexOf(w);return R===0?f(c[1]):R===c.length-1?h(c[R]):m(w,c[c.indexOf(w)+1]).replace("@media","@media not all and")}return{keys:c,values:l,up:f,down:h,between:m,only:y,not:v,unit:o,...s}}const rx={borderRadius:4};function Mg(e=8,n=gd({spacing:e})){if(e.mui)return e;const o=(...i)=>(i.length===0?[1]:i).map(l=>{const c=n(l);return typeof c=="number"?`${c}px`:c}).join(" ");return o.mui=!0,o}function ox(e,n){var i;const o=this;if(o.vars){if(!((i=o.colorSchemes)!=null&&i[e])||typeof o.getColorSchemeSelector!="function")return{};let s=o.getColorSchemeSelector(e);return s==="&"?n:((s.includes("data-")||s.includes("."))&&(s=`*:where(${s.replace(/\s*&$/,"")}) &`),{[s]:n})}return o.palette.mode===e?n:{}}function oa(e={},...n){const{breakpoints:o={},palette:i={},spacing:s,shape:l={},...c}=e,f=nx(o),h=Mg(s);let m=At({breakpoints:f,direction:"ltr",components:{},palette:{mode:"light",...i},spacing:h,shape:{...rx,...l}},c);return m=l1(m),m.applyStyles=ox,m=n.reduce((y,v)=>At(y,v),m),m.unstable_sxConfig={...na,...c==null?void 0:c.unstable_sxConfig},m.unstable_sx=function(v){return xr({sx:v,theme:this})},m}function ix(e){return Object.keys(e).length===0}function Ng(e=null){const n=A.useContext(nl);return!n||ix(n)?e:n}const ax=oa();function rl(e=ax){return Ng(e)}const tm=e=>e,sx=()=>{let e=tm;return{configure(n){e=n},generate(n){return e(n)},reset(){e=tm}}},zg=sx();function lx(e={}){const{themeId:n,defaultTheme:o,defaultClassName:i="MuiBox-root",generateClassName:s}=e,l=Ag("div",{shouldForwardProp:f=>f!=="theme"&&f!=="sx"&&f!=="as"})(xr);return A.forwardRef(function(h,m){const y=rl(o),{className:v,component:w="div",...R}=vd(h);return M.jsx(l,{as:w,ref:m,className:Ee(v,s?s(i):i),theme:n&&y[n]||y,...R})})}const ux={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function ot(e,n,o="Mui"){const i=ux[n];return i?`${o}-${i}`:`${zg.generate(e)}-${n}`}function dt(e,n,o="Mui"){const i={};return n.forEach(s=>{i[s]=ot(e,s,o)}),i}function jg(e){const{variants:n,...o}=e,i={variants:n,style:em(o),isProcessed:!0};return i.style===o||n&&n.forEach(s=>{typeof s.style!="function"&&(s.style=em(s.style))}),i}const cx=oa();function hc(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}function dx(e){return e?(n,o)=>o[e]:null}function fx(e,n,o){e.theme=hx(e.theme)?o:e.theme[n]||e.theme}function Os(e,n){const o=typeof n=="function"?n(e):n;if(Array.isArray(o))return o.flatMap(i=>Os(e,i));if(Array.isArray(o==null?void 0:o.variants)){let i;if(o.isProcessed)i=o.style;else{const{variants:s,...l}=o;i=l}return Dg(e,o.variants,[i])}return o!=null&&o.isProcessed?o.style:o}function Dg(e,n,o=[]){var s;let i;e:for(let l=0;l<n.length;l+=1){const c=n[l];if(typeof c.props=="function"){if(i??(i={...e,...e.ownerState,ownerState:e.ownerState}),!c.props(i))continue}else for(const f in c.props)if(e[f]!==c.props[f]&&((s=e.ownerState)==null?void 0:s[f])!==c.props[f])continue e;typeof c.style=="function"?(i??(i={...e,...e.ownerState,ownerState:e.ownerState}),o.push(c.style(i))):o.push(c.style)}return o}function $g(e={}){const{themeId:n,defaultTheme:o=cx,rootShouldForwardProp:i=hc,slotShouldForwardProp:s=hc}=e;function l(f){fx(f,n,o)}return(f,h={})=>{ex(f,C=>C.filter(z=>z!==xr));const{name:m,slot:y,skipVariantsResolver:v,skipSx:w,overridesResolver:R=dx(gx(y)),...S}=h,x=v!==void 0?v:y&&y!=="Root"&&y!=="root"||!1,P=w||!1;let $=hc;y==="Root"||y==="root"?$=i:y?$=s:mx(f)&&($=void 0);const U=Ag(f,{shouldForwardProp:$,label:px(),...S}),j=C=>{if(typeof C=="function"&&C.__emotion_real!==C)return function(L){return Os(L,C)};if(On(C)){const z=jg(C);return z.variants?function(J){return Os(J,z)}:z.style}return C},_=(...C)=>{const z=[],L=C.map(j),J=[];if(z.push(l),m&&R&&J.push(function(ee){var le,ge;const oe=(ge=(le=ee.theme.components)==null?void 0:le[m])==null?void 0:ge.styleOverrides;if(!oe)return null;const ie={};for(const G in oe)ie[G]=Os(ee,oe[G]);return R(ee,ie)}),m&&!x&&J.push(function(ee){var ie,le;const re=ee.theme,oe=(le=(ie=re==null?void 0:re.components)==null?void 0:ie[m])==null?void 0:le.variants;return oe?Dg(ee,oe):null}),P||J.push(xr),Array.isArray(L[0])){const X=L.shift(),ee=new Array(z.length).fill(""),re=new Array(J.length).fill("");let oe;oe=[...ee,...X,...re],oe.raw=[...ee,...X.raw,...re],z.unshift(oe)}const Z=[...z,...L,...J],b=U(...Z);return f.muiName&&(b.muiName=f.muiName),b};return U.withConfig&&(_.withConfig=U.withConfig),_}}function px(e,n){return void 0}function hx(e){for(const n in e)return!1;return!0}function mx(e){return typeof e=="string"&&e.charCodeAt(0)>96}function gx(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}const Ig=$g();function Ki(e,n){const o={...n};for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)){const s=i;if(s==="components"||s==="slots")o[s]={...e[s],...o[s]};else if(s==="componentsProps"||s==="slotProps"){const l=e[s],c=n[s];if(!c)o[s]=l||{};else if(!l)o[s]=c;else{o[s]={...c};for(const f in l)if(Object.prototype.hasOwnProperty.call(l,f)){const h=f;o[s][h]=Ki(l[h],c[h])}}}else o[s]===void 0&&(o[s]=e[s])}return o}function yx(e){const{theme:n,name:o,props:i}=e;return!n||!n.components||!n.components[o]||!n.components[o].defaultProps?i:Ki(n.components[o].defaultProps,i)}function Lg({props:e,name:n,defaultTheme:o,themeId:i}){let s=rl(o);return i&&(s=s[i]||s),yx({theme:s,name:n,props:e})}const Bc=typeof window<"u"?A.useLayoutEffect:A.useEffect;function vx(e,n=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER){return Math.max(n,Math.min(e,o))}function kd(e,n=0,o=1){return vx(e,n,o)}function bx(e){e=e.slice(1);const n=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let o=e.match(n);return o&&o[0].length===1&&(o=o.map(i=>i+i)),o?`rgb${o.length===4?"a":""}(${o.map((i,s)=>s<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function Sr(e){if(e.type)return e;if(e.charAt(0)==="#")return Sr(bx(e));const n=e.indexOf("("),o=e.substring(0,n);if(!["rgb","rgba","hsl","hsla","color"].includes(o))throw new Error(Kr(9,e));let i=e.substring(n+1,e.length-1),s;if(o==="color"){if(i=i.split(" "),s=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(s))throw new Error(Kr(10,s))}else i=i.split(",");return i=i.map(l=>parseFloat(l)),{type:o,values:i,colorSpace:s}}const xx=e=>{const n=Sr(e);return n.values.slice(0,3).map((o,i)=>n.type.includes("hsl")&&i!==0?`${o}%`:o).join(" ")},zi=(e,n)=>{try{return xx(e)}catch{return e}};function ol(e){const{type:n,colorSpace:o}=e;let{values:i}=e;return n.includes("rgb")?i=i.map((s,l)=>l<3?parseInt(s,10):s):n.includes("hsl")&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),n.includes("color")?i=`${o} ${i.join(" ")}`:i=`${i.join(", ")}`,`${n}(${i})`}function Bg(e){e=Sr(e);const{values:n}=e,o=n[0],i=n[1]/100,s=n[2]/100,l=i*Math.min(s,1-s),c=(m,y=(m+o/30)%12)=>s-l*Math.max(Math.min(y-3,9-y,1),-1);let f="rgb";const h=[Math.round(c(0)*255),Math.round(c(8)*255),Math.round(c(4)*255)];return e.type==="hsla"&&(f+="a",h.push(n[3])),ol({type:f,values:h})}function Fc(e){e=Sr(e);let n=e.type==="hsl"||e.type==="hsla"?Sr(Bg(e)).values:e.values;return n=n.map(o=>(e.type!=="color"&&(o/=255),o<=.03928?o/12.92:((o+.055)/1.055)**2.4)),Number((.2126*n[0]+.7152*n[1]+.0722*n[2]).toFixed(3))}function Sx(e,n){const o=Fc(e),i=Fc(n);return(Math.max(o,i)+.05)/(Math.min(o,i)+.05)}function _n(e,n){return e=Sr(e),n=kd(n),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${n}`:e.values[3]=n,ol(e)}function vs(e,n,o){try{return _n(e,n)}catch{return e}}function Cd(e,n){if(e=Sr(e),n=kd(n),e.type.includes("hsl"))e.values[2]*=1-n;else if(e.type.includes("rgb")||e.type.includes("color"))for(let o=0;o<3;o+=1)e.values[o]*=1-n;return ol(e)}function $e(e,n,o){try{return Cd(e,n)}catch{return e}}function Pd(e,n){if(e=Sr(e),n=kd(n),e.type.includes("hsl"))e.values[2]+=(100-e.values[2])*n;else if(e.type.includes("rgb"))for(let o=0;o<3;o+=1)e.values[o]+=(255-e.values[o])*n;else if(e.type.includes("color"))for(let o=0;o<3;o+=1)e.values[o]+=(1-e.values[o])*n;return ol(e)}function Ie(e,n,o){try{return Pd(e,n)}catch{return e}}function wx(e,n=.15){return Fc(e)>.5?Cd(e,n):Pd(e,n)}function bs(e,n,o){try{return wx(e,n)}catch{return e}}function nm(...e){return e.reduce((n,o)=>o==null?n:function(...s){n.apply(this,s),o.apply(this,s)},()=>{})}function kx(e,n){var o,i,s;return A.isValidElement(e)&&n.indexOf(e.type.muiName??((s=(i=(o=e.type)==null?void 0:o._payload)==null?void 0:i.value)==null?void 0:s.muiName))!==-1}function Yr(e){return e&&e.ownerDocument||document}function js(e){return Yr(e).defaultView||window}function Uc(e,n){typeof e=="function"?e(n):e&&(e.current=n)}let rm=0;function Cx(e){const[n,o]=A.useState(e),i=e||n;return A.useEffect(()=>{n==null&&(rm+=1,o(`mui-${rm}`))},[n]),i}const Px={...Dc},om=Px.useId;function Ex(e){if(om!==void 0){const n=om();return e??n}return Cx(e)}function No(e){const n=A.useRef(e);return Bc(()=>{n.current=e}),A.useRef((...o)=>(0,n.current)(...o)).current}function wr(...e){return A.useMemo(()=>e.every(n=>n==null)?null:n=>{e.forEach(o=>{Uc(o,n)})},e)}const im={};function Fg(e,n){const o=A.useRef(im);return o.current===im&&(o.current=e(n)),o}const Rx=[];function Tx(e){A.useEffect(e,Rx)}class Ed{constructor(){Ti(this,"currentId",null);Ti(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});Ti(this,"disposeEffect",()=>this.clear)}static create(){return new Ed}start(n,o){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,o()},n)}}function Ox(){const e=Fg(Ed.create).current;return Tx(e.disposeEffect),e}function am(e){try{return e.matches(":focus-visible")}catch{}return!1}function _x(e=window){const n=e.document.documentElement.clientWidth;return e.innerWidth-n}function Ax(e){return typeof e=="string"}function Mx(e,n,o){return e===void 0||Ax(e)?n:{...n,ownerState:{...n.ownerState,...o}}}function Ug(e,n=[]){if(e===void 0)return{};const o={};return Object.keys(e).filter(i=>i.match(/^on[A-Z]/)&&typeof e[i]=="function"&&!n.includes(i)).forEach(i=>{o[i]=e[i]}),o}function sm(e){if(e===void 0)return{};const n={};return Object.keys(e).filter(o=>!(o.match(/^on[A-Z]/)&&typeof e[o]=="function")).forEach(o=>{n[o]=e[o]}),n}function Nx(e){const{getSlotProps:n,additionalProps:o,externalSlotProps:i,externalForwardedProps:s,className:l}=e;if(!n){const R=Ee(o==null?void 0:o.className,l,s==null?void 0:s.className,i==null?void 0:i.className),S={...o==null?void 0:o.style,...s==null?void 0:s.style,...i==null?void 0:i.style},x={...o,...s,...i};return R.length>0&&(x.className=R),Object.keys(S).length>0&&(x.style=S),{props:x,internalRef:void 0}}const c=Ug({...s,...i}),f=sm(i),h=sm(s),m=n(c),y=Ee(m==null?void 0:m.className,o==null?void 0:o.className,l,s==null?void 0:s.className,i==null?void 0:i.className),v={...m==null?void 0:m.style,...o==null?void 0:o.style,...s==null?void 0:s.style,...i==null?void 0:i.style},w={...m,...o,...h,...f};return y.length>0&&(w.className=y),Object.keys(v).length>0&&(w.style=v),{props:w,internalRef:m.ref}}function zx(e,n,o){return typeof e=="function"?e(n,o):e}function Rd(e){var n;return parseInt(A.version,10)>=19?((n=e==null?void 0:e.props)==null?void 0:n.ref)||null:(e==null?void 0:e.ref)||null}const Wg=A.createContext(null);function il(){return A.useContext(Wg)}const jx=typeof Symbol=="function"&&Symbol.for,qg=jx?Symbol.for("mui.nested"):"__THEME_NESTED__";function Dx(e,n){return typeof n=="function"?n(e):{...e,...n}}function $x(e){const{children:n,theme:o}=e,i=il(),s=A.useMemo(()=>{const l=i===null?{...o}:Dx(i,o);return l!=null&&(l[qg]=i!==null),l},[o,i]);return M.jsx(Wg.Provider,{value:s,children:n})}const Ix=A.createContext();function Lx({value:e,...n}){return M.jsx(Ix.Provider,{value:e??!0,...n})}const Hg=A.createContext(void 0);function Bx({value:e,children:n}){return M.jsx(Hg.Provider,{value:e,children:n})}function Fx(e){const{theme:n,name:o,props:i}=e;if(!n||!n.components||!n.components[o])return i;const s=n.components[o];return s.defaultProps?Ki(s.defaultProps,i):!s.styleOverrides&&!s.variants?Ki(s,i):i}function Ux({props:e,name:n}){const o=A.useContext(Hg);return Fx({props:e,name:n,theme:{components:o}})}const lm={};function um(e,n,o,i=!1){return A.useMemo(()=>{const s=e&&n[e]||n;if(typeof o=="function"){const l=o(s),c=e?{...n,[e]:l}:l;return i?()=>c:c}return e?{...n,[e]:o}:{...n,...o}},[e,n,o,i])}function Vg(e){const{children:n,theme:o,themeId:i}=e,s=Ng(lm),l=il()||lm,c=um(i,s,o),f=um(i,l,o,!0),h=(i?c[i]:c).direction==="rtl";return M.jsx($x,{theme:f,children:M.jsx(nl.Provider,{value:c,children:M.jsx(Lx,{value:h,children:M.jsx(Bx,{value:i?c[i].components:c.components,children:n})})})})}const cm={theme:void 0};function Wx(e){let n,o;return function(s){let l=n;return(l===void 0||s.theme!==o)&&(cm.theme=s.theme,l=jg(e(cm)),n=l,o=s.theme),l}}const Td="mode",Od="color-scheme",qx="data-color-scheme";function Hx(e){const{defaultMode:n="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:i="dark",modeStorageKey:s=Td,colorSchemeStorageKey:l=Od,attribute:c=qx,colorSchemeNode:f="document.documentElement",nonce:h}=e||{};let m="",y=c;if(c==="class"&&(y=".%s"),c==="data"&&(y="[data-%s]"),y.startsWith(".")){const w=y.substring(1);m+=`${f}.classList.remove('${w}'.replace('%s', light), '${w}'.replace('%s', dark));
      ${f}.classList.add('${w}'.replace('%s', colorScheme));`}const v=y.match(/\[([^\]]+)\]/);if(v){const[w,R]=v[1].split("=");R||(m+=`${f}.removeAttribute('${w}'.replace('%s', light));
      ${f}.removeAttribute('${w}'.replace('%s', dark));`),m+=`
      ${f}.setAttribute('${w}'.replace('%s', colorScheme), ${R?`${R}.replace('%s', colorScheme)`:'""'});`}else m+=`${f}.setAttribute('${y}', colorScheme);`;return M.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?h:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${n}';
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
} catch(e){}})();`}},"mui-color-scheme-init")}function dm(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Gg(e,n){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return n("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return n("dark")}function Vx(e){return Gg(e,n=>{if(n==="light")return e.lightColorScheme;if(n==="dark")return e.darkColorScheme})}function mc(e,n){if(typeof window>"u")return;let o;try{o=localStorage.getItem(e)||void 0,o||localStorage.setItem(e,n)}catch{}return o||n}function Gx(e){const{defaultMode:n="light",defaultLightColorScheme:o,defaultDarkColorScheme:i,supportedColorSchemes:s=[],modeStorageKey:l=Td,colorSchemeStorageKey:c=Od,storageWindow:f=typeof window>"u"?void 0:window,noSsr:h=!1}=e,m=s.join(","),y=s.length>1,[v,w]=A.useState(()=>{const _=mc(l,n),C=mc(`${c}-light`,o),z=mc(`${c}-dark`,i);return{mode:_,systemMode:dm(_),lightColorScheme:C,darkColorScheme:z}}),[R,S]=A.useState(h||!y);A.useEffect(()=>{S(!0)},[]);const x=Vx(v),P=A.useCallback(_=>{w(C=>{if(_===C.mode)return C;const z=_??n;try{localStorage.setItem(l,z)}catch{}return{...C,mode:z,systemMode:dm(z)}})},[l,n]),$=A.useCallback(_=>{_?typeof _=="string"?_&&!m.includes(_)?console.error(`\`${_}\` does not exist in \`theme.colorSchemes\`.`):w(C=>{const z={...C};return Gg(C,L=>{try{localStorage.setItem(`${c}-${L}`,_)}catch{}L==="light"&&(z.lightColorScheme=_),L==="dark"&&(z.darkColorScheme=_)}),z}):w(C=>{const z={...C},L=_.light===null?o:_.light,J=_.dark===null?i:_.dark;if(L)if(!m.includes(L))console.error(`\`${L}\` does not exist in \`theme.colorSchemes\`.`);else{z.lightColorScheme=L;try{localStorage.setItem(`${c}-light`,L)}catch{}}if(J)if(!m.includes(J))console.error(`\`${J}\` does not exist in \`theme.colorSchemes\`.`);else{z.darkColorScheme=J;try{localStorage.setItem(`${c}-dark`,J)}catch{}}return z}):w(C=>{try{localStorage.setItem(`${c}-light`,o),localStorage.setItem(`${c}-dark`,i)}catch{}return{...C,lightColorScheme:o,darkColorScheme:i}})},[m,c,o,i]),U=A.useCallback(_=>{v.mode==="system"&&w(C=>{const z=_!=null&&_.matches?"dark":"light";return C.systemMode===z?C:{...C,systemMode:z}})},[v.mode]),j=A.useRef(U);return j.current=U,A.useEffect(()=>{if(typeof window.matchMedia!="function"||!y)return;const _=(...z)=>j.current(...z),C=window.matchMedia("(prefers-color-scheme: dark)");return C.addListener(_),_(C),()=>{C.removeListener(_)}},[y]),A.useEffect(()=>{if(f&&y){const _=C=>{const z=C.newValue;typeof C.key=="string"&&C.key.startsWith(c)&&(!z||m.match(z))&&(C.key.endsWith("light")&&$({light:z}),C.key.endsWith("dark")&&$({dark:z})),C.key===l&&(!z||["light","dark","system"].includes(z))&&P(z||n)};return f.addEventListener("storage",_),()=>{f.removeEventListener("storage",_)}}},[$,P,l,c,m,n,f,y]),{...v,mode:R?v.mode:void 0,systemMode:R?v.systemMode:void 0,colorScheme:R?x:void 0,setMode:P,setColorScheme:$}}const Kx="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Yx(e){const{themeId:n,theme:o={},modeStorageKey:i=Td,colorSchemeStorageKey:s=Od,disableTransitionOnChange:l=!1,defaultColorScheme:c,resolveTheme:f}=e,h={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},m=A.createContext(void 0),y=()=>A.useContext(m)||h;function v(x){var ye,Yn,Er,Xn,Rr;const{children:P,theme:$,modeStorageKey:U=i,colorSchemeStorageKey:j=s,disableTransitionOnChange:_=l,storageWindow:C=typeof window>"u"?void 0:window,documentNode:z=typeof document>"u"?void 0:document,colorSchemeNode:L=typeof document>"u"?void 0:document.documentElement,disableNestedContext:J=!1,disableStyleSheetGeneration:Z=!1,defaultMode:b="system",noSsr:X}=x,ee=A.useRef(!1),re=il(),oe=A.useContext(m),ie=!!oe&&!J,le=A.useMemo(()=>$||(typeof o=="function"?o():o),[$]),ge=le[n],{colorSchemes:G={},components:te={},cssVarPrefix:Q,...T}=ge||le,q=Object.keys(G).filter(Be=>!!G[Be]).join(","),pe=A.useMemo(()=>q.split(","),[q]),ce=typeof c=="string"?c:c.light,be=typeof c=="string"?c:c.dark,ke=G[ce]&&G[be]?b:((Yn=(ye=G[T.defaultColorScheme])==null?void 0:ye.palette)==null?void 0:Yn.mode)||((Er=T.palette)==null?void 0:Er.mode),{mode:Oe,setMode:Re,systemMode:Ae,lightColorScheme:et,darkColorScheme:ln,colorScheme:Mt,setColorScheme:Nt}=Gx({supportedColorSchemes:pe,defaultLightColorScheme:ce,defaultDarkColorScheme:be,modeStorageKey:U,colorSchemeStorageKey:j,defaultMode:ke,storageWindow:C,noSsr:X});let Nn=Oe,mt=Mt;ie&&(Nn=oe.mode,mt=oe.colorScheme);const Cr=mt||T.defaultColorScheme,Pr=((Xn=T.generateThemeVars)==null?void 0:Xn.call(T))||T.vars,at={...T,components:te,colorSchemes:G,cssVarPrefix:Q,vars:Pr};if(typeof at.generateSpacing=="function"&&(at.spacing=at.generateSpacing()),Cr){const Be=G[Cr];Be&&typeof Be=="object"&&Object.keys(Be).forEach(Ge=>{Be[Ge]&&typeof Be[Ge]=="object"?at[Ge]={...at[Ge],...Be[Ge]}:at[Ge]=Be[Ge]})}const Tt=T.colorSchemeSelector;A.useEffect(()=>{if(mt&&L&&Tt&&Tt!=="media"){const Be=Tt;let Ge=Tt;if(Be==="class"&&(Ge=".%s"),Be==="data"&&(Ge="[data-%s]"),Be!=null&&Be.startsWith("data-")&&!Be.includes("%s")&&(Ge=`[${Be}="%s"]`),Ge.startsWith("."))L.classList.remove(...pe.map(bn=>Ge.substring(1).replace("%s",bn))),L.classList.add(Ge.substring(1).replace("%s",mt));else{const bn=Ge.replace("%s",mt).match(/\[([^\]]+)\]/);if(bn){const[Qn,Ho]=bn[1].split("=");Ho||pe.forEach(la=>{L.removeAttribute(Qn.replace(mt,la))}),L.setAttribute(Qn,Ho?Ho.replace(/"|'/g,""):"")}else L.setAttribute(Ge,mt)}}},[mt,Tt,L,pe]),A.useEffect(()=>{let Be;if(_&&ee.current&&z){const Ge=z.createElement("style");Ge.appendChild(z.createTextNode(Kx)),z.head.appendChild(Ge),window.getComputedStyle(z.body),Be=setTimeout(()=>{z.head.removeChild(Ge)},1)}return()=>{clearTimeout(Be)}},[mt,_,z]),A.useEffect(()=>(ee.current=!0,()=>{ee.current=!1}),[]);const zn=A.useMemo(()=>({allColorSchemes:pe,colorScheme:mt,darkColorScheme:ln,lightColorScheme:et,mode:Nn,setColorScheme:Nt,setMode:Re,systemMode:Ae}),[pe,mt,ln,et,Nn,Nt,Re,Ae,at.colorSchemeSelector]);let Qt=!0;(Z||T.cssVariables===!1||ie&&(re==null?void 0:re.cssVarPrefix)===Q)&&(Qt=!1);const Kn=M.jsxs(A.Fragment,{children:[M.jsx(Vg,{themeId:ge?n:void 0,theme:f?f(at):at,children:P}),Qt&&M.jsx(Zb,{styles:((Rr=at.generateStyleSheets)==null?void 0:Rr.call(at))||[]})]});return ie?Kn:M.jsx(m.Provider,{value:zn,children:Kn})}const w=typeof c=="string"?c:c.light,R=typeof c=="string"?c:c.dark;return{CssVarsProvider:v,useColorScheme:y,getInitColorSchemeScript:x=>Hx({colorSchemeStorageKey:s,defaultLightColorScheme:w,defaultDarkColorScheme:R,modeStorageKey:i,...x})}}function Xx(e=""){function n(...i){if(!i.length)return"";const s=i[0];return typeof s=="string"&&!s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${e?`${e}-`:""}${s}${n(...i.slice(1))})`:`, ${s}`}return(i,...s)=>`var(--${e?`${e}-`:""}${i}${n(...s)})`}const fm=(e,n,o,i=[])=>{let s=e;n.forEach((l,c)=>{c===n.length-1?Array.isArray(s)?s[Number(l)]=o:s&&typeof s=="object"&&(s[l]=o):s&&typeof s=="object"&&(s[l]||(s[l]=i.includes(l)?[]:{}),s=s[l])})},Qx=(e,n,o)=>{function i(s,l=[],c=[]){Object.entries(s).forEach(([f,h])=>{(!o||o&&!o([...l,f]))&&h!=null&&(typeof h=="object"&&Object.keys(h).length>0?i(h,[...l,f],Array.isArray(h)?[...c,f]:c):n([...l,f],h,c))})}i(e)},Jx=(e,n)=>typeof n=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(i=>e.includes(i))||e[e.length-1].toLowerCase().includes("opacity")?n:`${n}px`:n;function gc(e,n){const{prefix:o,shouldSkipGeneratingVar:i}=n||{},s={},l={},c={};return Qx(e,(f,h,m)=>{if((typeof h=="string"||typeof h=="number")&&(!i||!i(f,h))){const y=`--${o?`${o}-`:""}${f.join("-")}`,v=Jx(f,h);Object.assign(s,{[y]:v}),fm(l,f,`var(${y})`,m),fm(c,f,`var(${y}, ${v})`,m)}},f=>f[0]==="vars"),{css:s,vars:l,varsWithDefaults:c}}function Zx(e,n={}){const{getSelector:o=P,disableCssColorScheme:i,colorSchemeSelector:s}=n,{colorSchemes:l={},components:c,defaultColorScheme:f="light",...h}=e,{vars:m,css:y,varsWithDefaults:v}=gc(h,n);let w=v;const R={},{[f]:S,...x}=l;if(Object.entries(x||{}).forEach(([j,_])=>{const{vars:C,css:z,varsWithDefaults:L}=gc(_,n);w=At(w,L),R[j]={css:z,vars:C}}),S){const{css:j,vars:_,varsWithDefaults:C}=gc(S,n);w=At(w,C),R[f]={css:j,vars:_}}function P(j,_){var z,L;let C=s;if(s==="class"&&(C=".%s"),s==="data"&&(C="[data-%s]"),s!=null&&s.startsWith("data-")&&!s.includes("%s")&&(C=`[${s}="%s"]`),j){if(C==="media")return e.defaultColorScheme===j?":root":{[`@media (prefers-color-scheme: ${((L=(z=l[j])==null?void 0:z.palette)==null?void 0:L.mode)||j})`]:{":root":_}};if(C)return e.defaultColorScheme===j?`:root, ${C.replace("%s",String(j))}`:C.replace("%s",String(j))}return":root"}return{vars:w,generateThemeVars:()=>{let j={...m};return Object.entries(R).forEach(([,{vars:_}])=>{j=At(j,_)}),j},generateStyleSheets:()=>{var J,Z;const j=[],_=e.defaultColorScheme||"light";function C(b,X){Object.keys(X).length&&j.push(typeof b=="string"?{[b]:{...X}}:b)}C(o(void 0,{...y}),y);const{[_]:z,...L}=R;if(z){const{css:b}=z,X=(Z=(J=l[_])==null?void 0:J.palette)==null?void 0:Z.mode,ee=!i&&X?{colorScheme:X,...b}:{...b};C(o(_,{...ee}),ee)}return Object.entries(L).forEach(([b,{css:X}])=>{var oe,ie;const ee=(ie=(oe=l[b])==null?void 0:oe.palette)==null?void 0:ie.mode,re=!i&&ee?{colorScheme:ee,...X}:{...X};C(o(b,{...re}),re)}),j}}}function eS(e){return function(o){return e==="media"?`@media (prefers-color-scheme: ${o})`:e?e.startsWith("data-")&&!e.includes("%s")?`[${e}="${o}"] &`:e==="class"?`.${o} &`:e==="data"?`[data-${o}] &`:`${e.replace("%s",o)} &`:"&"}}const tS=oa(),nS=Ig("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`maxWidth${Se(String(o.maxWidth))}`],o.fixed&&n.fixed,o.disableGutters&&n.disableGutters]}}),rS=e=>Lg({props:e,name:"MuiContainer",defaultTheme:tS}),oS=(e,n)=>{const o=h=>ot(n,h),{classes:i,fixed:s,disableGutters:l,maxWidth:c}=e,f={root:["root",c&&`maxWidth${Se(String(c))}`,s&&"fixed",l&&"disableGutters"]};return ct(f,o,i)};function iS(e={}){const{createStyledComponent:n=nS,useThemeProps:o=rS,componentName:i="MuiContainer"}=e,s=n(({theme:c,ownerState:f})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!f.disableGutters&&{paddingLeft:c.spacing(2),paddingRight:c.spacing(2),[c.breakpoints.up("sm")]:{paddingLeft:c.spacing(3),paddingRight:c.spacing(3)}}}),({theme:c,ownerState:f})=>f.fixed&&Object.keys(c.breakpoints.values).reduce((h,m)=>{const y=m,v=c.breakpoints.values[y];return v!==0&&(h[c.breakpoints.up(y)]={maxWidth:`${v}${c.breakpoints.unit}`}),h},{}),({theme:c,ownerState:f})=>({...f.maxWidth==="xs"&&{[c.breakpoints.up("xs")]:{maxWidth:Math.max(c.breakpoints.values.xs,444)}},...f.maxWidth&&f.maxWidth!=="xs"&&{[c.breakpoints.up(f.maxWidth)]:{maxWidth:`${c.breakpoints.values[f.maxWidth]}${c.breakpoints.unit}`}}}));return A.forwardRef(function(f,h){const m=o(f),{className:y,component:v="div",disableGutters:w=!1,fixed:R=!1,maxWidth:S="lg",classes:x,...P}=m,$={...m,component:v,disableGutters:w,fixed:R,maxWidth:S},U=oS($,i);return M.jsx(s,{as:v,ownerState:$,className:Ee(U.root,y),ref:h,...P})})}const aS=(e,n)=>e.filter(o=>n.includes(o)),Fo=(e,n,o)=>{const i=e.keys[0];Array.isArray(n)?n.forEach((s,l)=>{o((c,f)=>{l<=e.keys.length-1&&(l===0?Object.assign(c,f):c[e.up(e.keys[l])]=f)},s)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:aS(e.keys,Object.keys(n))).forEach(l=>{if(e.keys.includes(l)){const c=n[l];c!==void 0&&o((f,h)=>{i===l?Object.assign(f,h):f[e.up(l)]=h},c)}}):(typeof n=="number"||typeof n=="string")&&o((s,l)=>{Object.assign(s,l)},n)};function Ds(e){return`--Grid-${e}Spacing`}function al(e){return`--Grid-parent-${e}Spacing`}const pm="--Grid-columns",$o="--Grid-parent-columns",sS=({theme:e,ownerState:n})=>{const o={};return Fo(e.breakpoints,n.size,(i,s)=>{let l={};s==="grow"&&(l={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(l={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / var(${$o}) - (var(${$o}) - ${s}) * (var(${al("column")}) / var(${$o})))`}),i(o,l)}),o},lS=({theme:e,ownerState:n})=>{const o={};return Fo(e.breakpoints,n.offset,(i,s)=>{let l={};s==="auto"&&(l={marginLeft:"auto"}),typeof s=="number"&&(l={marginLeft:s===0?"0px":`calc(100% * ${s} / var(${$o}) + var(${al("column")}) * ${s} / var(${$o}))`}),i(o,l)}),o},uS=({theme:e,ownerState:n})=>{if(!n.container)return{};const o={[pm]:12};return Fo(e.breakpoints,n.columns,(i,s)=>{const l=s??12;i(o,{[pm]:l,"> *":{[$o]:l}})}),o},cS=({theme:e,ownerState:n})=>{if(!n.container)return{};const o={};return Fo(e.breakpoints,n.rowSpacing,(i,s)=>{var c;const l=typeof s=="string"?s:(c=e.spacing)==null?void 0:c.call(e,s);i(o,{[Ds("row")]:l,"> *":{[al("row")]:l}})}),o},dS=({theme:e,ownerState:n})=>{if(!n.container)return{};const o={};return Fo(e.breakpoints,n.columnSpacing,(i,s)=>{var c;const l=typeof s=="string"?s:(c=e.spacing)==null?void 0:c.call(e,s);i(o,{[Ds("column")]:l,"> *":{[al("column")]:l}})}),o},fS=({theme:e,ownerState:n})=>{if(!n.container)return{};const o={};return Fo(e.breakpoints,n.direction,(i,s)=>{i(o,{flexDirection:s})}),o},pS=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:`var(${Ds("row")}) var(${Ds("column")})`}}),hS=e=>{const n=[];return Object.entries(e).forEach(([o,i])=>{i!==!1&&i!==void 0&&n.push(`grid-${o}-${String(i)}`)}),n},mS=(e,n="xs")=>{function o(i){return i===void 0?!1:typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"&&i>0}if(o(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const i=[];return Object.entries(e).forEach(([s,l])=>{o(l)&&i.push(`spacing-${s}-${String(l)}`)}),i}return[]},gS=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,o])=>`direction-${n}-${o}`):[`direction-xs-${String(e)}`],yS=oa(),vS=Ig("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function bS(e){return Lg({props:e,name:"MuiGrid",defaultTheme:yS})}function xS(e={}){const{createStyledComponent:n=vS,useThemeProps:o=bS,componentName:i="MuiGrid"}=e,s=(h,m)=>{const{container:y,direction:v,spacing:w,wrap:R,size:S}=h,x={root:["root",y&&"container",R!=="wrap"&&`wrap-xs-${String(R)}`,...gS(v),...hS(S),...y?mS(w,m.breakpoints.keys[0]):[]]};return ct(x,P=>ot(i,P),{})};function l(h,m,y=()=>!0){const v={};return h===null||(Array.isArray(h)?h.forEach((w,R)=>{w!==null&&y(w)&&m.keys[R]&&(v[m.keys[R]]=w)}):typeof h=="object"?Object.keys(h).forEach(w=>{const R=h[w];R!=null&&y(R)&&(v[w]=R)}):v[m.keys[0]]=h),v}const c=n(uS,dS,cS,sS,fS,pS,lS),f=A.forwardRef(function(m,y){const v=rl(),w=o(m),R=vd(w),{className:S,children:x,columns:P=12,container:$=!1,component:U="div",direction:j="row",wrap:_="wrap",size:C={},offset:z={},spacing:L=0,rowSpacing:J=L,columnSpacing:Z=L,unstable_level:b=0,...X}=R,ee=l(C,v.breakpoints,Q=>Q!==!1),re=l(z,v.breakpoints),oe=m.columns??(b?void 0:P),ie=m.spacing??(b?void 0:L),le=m.rowSpacing??m.spacing??(b?void 0:J),ge=m.columnSpacing??m.spacing??(b?void 0:Z),G={...R,level:b,columns:oe,container:$,direction:j,wrap:_,spacing:ie,rowSpacing:le,columnSpacing:ge,size:ee,offset:re},te=s(G,v);return M.jsx(c,{ref:y,as:U,ownerState:G,className:Ee(te.root,S),...X,children:A.Children.map(x,Q=>{var T;return A.isValidElement(Q)&&kx(Q,["Grid"])&&$&&Q.props.container?A.cloneElement(Q,{unstable_level:((T=Q.props)==null?void 0:T.unstable_level)??b+1}):Q})})});return f.muiName="Grid",f}const Yi={black:"#000",white:"#fff"},SS={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},wo={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},ko={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ai={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Co={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Po={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Eo={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function Kg(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Yi.white,default:Yi.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const wS=Kg();function Yg(){return{text:{primary:Yi.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Yi.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const hm=Yg();function mm(e,n,o,i){const s=i.light||i,l=i.dark||i*1.5;e[n]||(e.hasOwnProperty(o)?e[n]=e[o]:n==="light"?e.light=Pd(e.main,s):n==="dark"&&(e.dark=Cd(e.main,l)))}function kS(e="light"){return e==="dark"?{main:Co[200],light:Co[50],dark:Co[400]}:{main:Co[700],light:Co[400],dark:Co[800]}}function CS(e="light"){return e==="dark"?{main:wo[200],light:wo[50],dark:wo[400]}:{main:wo[500],light:wo[300],dark:wo[700]}}function PS(e="light"){return e==="dark"?{main:ko[500],light:ko[300],dark:ko[700]}:{main:ko[700],light:ko[400],dark:ko[800]}}function ES(e="light"){return e==="dark"?{main:Po[400],light:Po[300],dark:Po[700]}:{main:Po[700],light:Po[500],dark:Po[900]}}function RS(e="light"){return e==="dark"?{main:Eo[400],light:Eo[300],dark:Eo[700]}:{main:Eo[800],light:Eo[500],dark:Eo[900]}}function TS(e="light"){return e==="dark"?{main:Ai[400],light:Ai[300],dark:Ai[700]}:{main:"#ed6c02",light:Ai[500],dark:Ai[900]}}function _d(e){const{mode:n="light",contrastThreshold:o=3,tonalOffset:i=.2,...s}=e,l=e.primary||kS(n),c=e.secondary||CS(n),f=e.error||PS(n),h=e.info||ES(n),m=e.success||RS(n),y=e.warning||TS(n);function v(x){return Sx(x,hm.text.primary)>=o?hm.text.primary:wS.text.primary}const w=({color:x,name:P,mainShade:$=500,lightShade:U=300,darkShade:j=700})=>{if(x={...x},!x.main&&x[$]&&(x.main=x[$]),!x.hasOwnProperty("main"))throw new Error(Kr(11,P?` (${P})`:"",$));if(typeof x.main!="string")throw new Error(Kr(12,P?` (${P})`:"",JSON.stringify(x.main)));return mm(x,"light",U,i),mm(x,"dark",j,i),x.contrastText||(x.contrastText=v(x.main)),x};let R;return n==="light"?R=Kg():n==="dark"&&(R=Yg()),At({common:{...Yi},mode:n,primary:w({color:l,name:"primary"}),secondary:w({color:c,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:w({color:f,name:"error"}),warning:w({color:y,name:"warning"}),info:w({color:h,name:"info"}),success:w({color:m,name:"success"}),grey:SS,contrastThreshold:o,getContrastText:v,augmentColor:w,tonalOffset:i,...R},s)}function OS(e){const n={};return Object.entries(e).forEach(i=>{const[s,l]=i;typeof l=="object"&&(n[s]=`${l.fontStyle?`${l.fontStyle} `:""}${l.fontVariant?`${l.fontVariant} `:""}${l.fontWeight?`${l.fontWeight} `:""}${l.fontStretch?`${l.fontStretch} `:""}${l.fontSize||""}${l.lineHeight?`/${l.lineHeight} `:""}${l.fontFamily||""}`)}),n}function _S(e,n){return{toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}},...n}}function AS(e){return Math.round(e*1e5)/1e5}const gm={textTransform:"uppercase"},ym='"Roboto", "Helvetica", "Arial", sans-serif';function Xg(e,n){const{fontFamily:o=ym,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:l=400,fontWeightMedium:c=500,fontWeightBold:f=700,htmlFontSize:h=16,allVariants:m,pxToRem:y,...v}=typeof n=="function"?n(e):n,w=i/14,R=y||(P=>`${P/h*w}rem`),S=(P,$,U,j,_)=>({fontFamily:o,fontWeight:P,fontSize:R($),lineHeight:U,...o===ym?{letterSpacing:`${AS(j/$)}em`}:{},..._,...m}),x={h1:S(s,96,1.167,-1.5),h2:S(s,60,1.2,-.5),h3:S(l,48,1.167,0),h4:S(l,34,1.235,.25),h5:S(l,24,1.334,0),h6:S(c,20,1.6,.15),subtitle1:S(l,16,1.75,.15),subtitle2:S(c,14,1.57,.1),body1:S(l,16,1.5,.15),body2:S(l,14,1.43,.15),button:S(c,14,1.75,.4,gm),caption:S(l,12,1.66,.4),overline:S(l,12,2.66,1,gm),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return At({htmlFontSize:h,pxToRem:R,fontFamily:o,fontSize:i,fontWeightLight:s,fontWeightRegular:l,fontWeightMedium:c,fontWeightBold:f,...x},v,{clone:!1})}const MS=.2,NS=.14,zS=.12;function qe(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${MS})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${NS})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${zS})`].join(",")}const jS=["none",qe(0,2,1,-1,0,1,1,0,0,1,3,0),qe(0,3,1,-2,0,2,2,0,0,1,5,0),qe(0,3,3,-2,0,3,4,0,0,1,8,0),qe(0,2,4,-1,0,4,5,0,0,1,10,0),qe(0,3,5,-1,0,5,8,0,0,1,14,0),qe(0,3,5,-1,0,6,10,0,0,1,18,0),qe(0,4,5,-2,0,7,10,1,0,2,16,1),qe(0,5,5,-3,0,8,10,1,0,3,14,2),qe(0,5,6,-3,0,9,12,1,0,3,16,2),qe(0,6,6,-3,0,10,14,1,0,4,18,3),qe(0,6,7,-4,0,11,15,1,0,4,20,3),qe(0,7,8,-4,0,12,17,2,0,5,22,4),qe(0,7,8,-4,0,13,19,2,0,5,24,4),qe(0,7,9,-4,0,14,21,2,0,5,26,4),qe(0,8,9,-5,0,15,22,2,0,6,28,5),qe(0,8,10,-5,0,16,24,2,0,6,30,5),qe(0,8,11,-5,0,17,26,2,0,6,32,5),qe(0,9,11,-5,0,18,28,2,0,7,34,6),qe(0,9,12,-6,0,19,29,2,0,7,36,6),qe(0,10,13,-6,0,20,31,3,0,8,38,7),qe(0,10,13,-6,0,21,33,3,0,8,40,7),qe(0,10,14,-6,0,22,35,3,0,8,42,7),qe(0,11,14,-7,0,23,36,3,0,9,44,8),qe(0,11,15,-7,0,24,38,3,0,9,46,8)],DS={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},$S={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function vm(e){return`${Math.round(e)}ms`}function IS(e){if(!e)return 0;const n=e/36;return Math.min(Math.round((4+15*n**.25+n/5)*10),3e3)}function LS(e){const n={...DS,...e.easing},o={...$S,...e.duration};return{getAutoHeightDuration:IS,create:(s=["all"],l={})=>{const{duration:c=o.standard,easing:f=n.easeInOut,delay:h=0,...m}=l;return(Array.isArray(s)?s:[s]).map(y=>`${y} ${typeof c=="string"?c:vm(c)} ${f} ${typeof h=="string"?h:vm(h)}`).join(",")},...e,easing:n,duration:o}}const BS={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function FS(e){return On(e)||typeof e>"u"||typeof e=="string"||typeof e=="boolean"||typeof e=="number"||Array.isArray(e)}function Qg(e={}){const n={...e};function o(i){const s=Object.entries(i);for(let l=0;l<s.length;l++){const[c,f]=s[l];!FS(f)||c.startsWith("unstable_")?delete i[c]:On(f)&&(i[c]={...f},o(i[c]))}}return o(n),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(n,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function Wc(e={},...n){const{breakpoints:o,mixins:i={},spacing:s,palette:l={},transitions:c={},typography:f={},shape:h,...m}=e;if(e.vars)throw new Error(Kr(20));const y=_d(l),v=oa(e);let w=At(v,{mixins:_S(v.breakpoints,i),palette:y,shadows:jS.slice(),typography:Xg(y,f),transitions:LS(c),zIndex:{...BS}});return w=At(w,m),w=n.reduce((R,S)=>At(R,S),w),w.unstable_sxConfig={...na,...m==null?void 0:m.unstable_sxConfig},w.unstable_sx=function(S){return xr({sx:S,theme:this})},w.toRuntimeSource=Qg,w}function qc(e){let n;return e<1?n=5.11916*e**2:n=4.5*Math.log(e+1)+2,Math.round(n*10)/1e3}const US=[...Array(25)].map((e,n)=>{if(n===0)return"none";const o=qc(n);return`linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`});function Jg(e){return{inputPlaceholder:e==="dark"?.5:.42,inputUnderline:e==="dark"?.7:.42,switchTrackDisabled:e==="dark"?.2:.12,switchTrack:e==="dark"?.3:.38}}function Zg(e){return e==="dark"?US:[]}function WS(e){const{palette:n={mode:"light"},opacity:o,overlays:i,...s}=e,l=_d(n);return{palette:l,opacity:{...Jg(l.mode),...o},overlays:i||Zg(l.mode),...s}}function qS(e){var n;return!!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!e[0].match(/sxConfig$/)||e[0]==="palette"&&!!((n=e[1])!=null&&n.match(/(mode|contrastThreshold|tonalOffset)/))}const HS=e=>[...[...Array(25)].map((n,o)=>`--${e?`${e}-`:""}overlays-${o}`),`--${e?`${e}-`:""}palette-AppBar-darkBg`,`--${e?`${e}-`:""}palette-AppBar-darkColor`],VS=e=>(n,o)=>{const i=e.rootSelector||":root",s=e.colorSchemeSelector;let l=s;if(s==="class"&&(l=".%s"),s==="data"&&(l="[data-%s]"),s!=null&&s.startsWith("data-")&&!s.includes("%s")&&(l=`[${s}="%s"]`),e.defaultColorScheme===n){if(n==="dark"){const c={};return HS(e.cssVarPrefix).forEach(f=>{c[f]=o[f],delete o[f]}),l==="media"?{[i]:o,"@media (prefers-color-scheme: dark)":{[i]:c}}:l?{[l.replace("%s",n)]:c,[`${i}, ${l.replace("%s",n)}`]:o}:{[i]:{...o,...c}}}if(l&&l!=="media")return`${i}, ${l.replace("%s",String(n))}`}else if(n){if(l==="media")return{[`@media (prefers-color-scheme: ${String(n)})`]:{[i]:o}};if(l)return l.replace("%s",String(n))}return i};function GS(e,n){n.forEach(o=>{e[o]||(e[o]={})})}function F(e,n,o){!e[n]&&o&&(e[n]=o)}function ji(e){return!e||!e.startsWith("hsl")?e:Bg(e)}function Wn(e,n){`${n}Channel`in e||(e[`${n}Channel`]=zi(ji(e[n]),`MUI: Can't create \`palette.${n}Channel\` because \`palette.${n}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${n}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function KS(e){return typeof e=="number"?`${e}px`:typeof e=="string"||typeof e=="function"||Array.isArray(e)?e:"8px"}const Pn=e=>{try{return e()}catch{}},YS=(e="mui")=>Xx(e);function yc(e,n,o,i){if(!n)return;n=n===!0?{}:n;const s=i==="dark"?"dark":"light";if(!o){e[i]=WS({...n,palette:{mode:s,...n==null?void 0:n.palette}});return}const{palette:l,...c}=Wc({...o,palette:{mode:s,...n==null?void 0:n.palette}});return e[i]={...n,palette:l,opacity:{...Jg(s),...n==null?void 0:n.opacity},overlays:(n==null?void 0:n.overlays)||Zg(s)},c}function XS(e={},...n){const{colorSchemes:o={light:!0},defaultColorScheme:i,disableCssColorScheme:s=!1,cssVarPrefix:l="mui",shouldSkipGeneratingVar:c=qS,colorSchemeSelector:f=o.light&&o.dark?"media":void 0,rootSelector:h=":root",...m}=e,y=Object.keys(o)[0],v=i||(o.light&&y!=="light"?"light":y),w=YS(l),{[v]:R,light:S,dark:x,...P}=o,$={...P};let U=R;if((v==="dark"&&!("dark"in o)||v==="light"&&!("light"in o))&&(U=!0),!U)throw new Error(Kr(21,v));const j=yc($,U,m,v);S&&!$.light&&yc($,S,void 0,"light"),x&&!$.dark&&yc($,x,void 0,"dark");let _={defaultColorScheme:v,...j,cssVarPrefix:l,colorSchemeSelector:f,rootSelector:h,getCssVar:w,colorSchemes:$,font:{...OS(j.typography),...j.font},spacing:KS(m.spacing)};Object.keys(_.colorSchemes).forEach(Z=>{const b=_.colorSchemes[Z].palette,X=ee=>{const re=ee.split("-"),oe=re[1],ie=re[2];return w(ee,b[oe][ie])};if(b.mode==="light"&&(F(b.common,"background","#fff"),F(b.common,"onBackground","#000")),b.mode==="dark"&&(F(b.common,"background","#000"),F(b.common,"onBackground","#fff")),GS(b,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),b.mode==="light"){F(b.Alert,"errorColor",$e(b.error.light,.6)),F(b.Alert,"infoColor",$e(b.info.light,.6)),F(b.Alert,"successColor",$e(b.success.light,.6)),F(b.Alert,"warningColor",$e(b.warning.light,.6)),F(b.Alert,"errorFilledBg",X("palette-error-main")),F(b.Alert,"infoFilledBg",X("palette-info-main")),F(b.Alert,"successFilledBg",X("palette-success-main")),F(b.Alert,"warningFilledBg",X("palette-warning-main")),F(b.Alert,"errorFilledColor",Pn(()=>b.getContrastText(b.error.main))),F(b.Alert,"infoFilledColor",Pn(()=>b.getContrastText(b.info.main))),F(b.Alert,"successFilledColor",Pn(()=>b.getContrastText(b.success.main))),F(b.Alert,"warningFilledColor",Pn(()=>b.getContrastText(b.warning.main))),F(b.Alert,"errorStandardBg",Ie(b.error.light,.9)),F(b.Alert,"infoStandardBg",Ie(b.info.light,.9)),F(b.Alert,"successStandardBg",Ie(b.success.light,.9)),F(b.Alert,"warningStandardBg",Ie(b.warning.light,.9)),F(b.Alert,"errorIconColor",X("palette-error-main")),F(b.Alert,"infoIconColor",X("palette-info-main")),F(b.Alert,"successIconColor",X("palette-success-main")),F(b.Alert,"warningIconColor",X("palette-warning-main")),F(b.AppBar,"defaultBg",X("palette-grey-100")),F(b.Avatar,"defaultBg",X("palette-grey-400")),F(b.Button,"inheritContainedBg",X("palette-grey-300")),F(b.Button,"inheritContainedHoverBg",X("palette-grey-A100")),F(b.Chip,"defaultBorder",X("palette-grey-400")),F(b.Chip,"defaultAvatarColor",X("palette-grey-700")),F(b.Chip,"defaultIconColor",X("palette-grey-700")),F(b.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),F(b.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),F(b.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),F(b.LinearProgress,"primaryBg",Ie(b.primary.main,.62)),F(b.LinearProgress,"secondaryBg",Ie(b.secondary.main,.62)),F(b.LinearProgress,"errorBg",Ie(b.error.main,.62)),F(b.LinearProgress,"infoBg",Ie(b.info.main,.62)),F(b.LinearProgress,"successBg",Ie(b.success.main,.62)),F(b.LinearProgress,"warningBg",Ie(b.warning.main,.62)),F(b.Skeleton,"bg",`rgba(${X("palette-text-primaryChannel")} / 0.11)`),F(b.Slider,"primaryTrack",Ie(b.primary.main,.62)),F(b.Slider,"secondaryTrack",Ie(b.secondary.main,.62)),F(b.Slider,"errorTrack",Ie(b.error.main,.62)),F(b.Slider,"infoTrack",Ie(b.info.main,.62)),F(b.Slider,"successTrack",Ie(b.success.main,.62)),F(b.Slider,"warningTrack",Ie(b.warning.main,.62));const ee=bs(b.background.default,.8);F(b.SnackbarContent,"bg",ee),F(b.SnackbarContent,"color",Pn(()=>b.getContrastText(ee))),F(b.SpeedDialAction,"fabHoverBg",bs(b.background.paper,.15)),F(b.StepConnector,"border",X("palette-grey-400")),F(b.StepContent,"border",X("palette-grey-400")),F(b.Switch,"defaultColor",X("palette-common-white")),F(b.Switch,"defaultDisabledColor",X("palette-grey-100")),F(b.Switch,"primaryDisabledColor",Ie(b.primary.main,.62)),F(b.Switch,"secondaryDisabledColor",Ie(b.secondary.main,.62)),F(b.Switch,"errorDisabledColor",Ie(b.error.main,.62)),F(b.Switch,"infoDisabledColor",Ie(b.info.main,.62)),F(b.Switch,"successDisabledColor",Ie(b.success.main,.62)),F(b.Switch,"warningDisabledColor",Ie(b.warning.main,.62)),F(b.TableCell,"border",Ie(vs(b.divider,1),.88)),F(b.Tooltip,"bg",vs(b.grey[700],.92))}if(b.mode==="dark"){F(b.Alert,"errorColor",Ie(b.error.light,.6)),F(b.Alert,"infoColor",Ie(b.info.light,.6)),F(b.Alert,"successColor",Ie(b.success.light,.6)),F(b.Alert,"warningColor",Ie(b.warning.light,.6)),F(b.Alert,"errorFilledBg",X("palette-error-dark")),F(b.Alert,"infoFilledBg",X("palette-info-dark")),F(b.Alert,"successFilledBg",X("palette-success-dark")),F(b.Alert,"warningFilledBg",X("palette-warning-dark")),F(b.Alert,"errorFilledColor",Pn(()=>b.getContrastText(b.error.dark))),F(b.Alert,"infoFilledColor",Pn(()=>b.getContrastText(b.info.dark))),F(b.Alert,"successFilledColor",Pn(()=>b.getContrastText(b.success.dark))),F(b.Alert,"warningFilledColor",Pn(()=>b.getContrastText(b.warning.dark))),F(b.Alert,"errorStandardBg",$e(b.error.light,.9)),F(b.Alert,"infoStandardBg",$e(b.info.light,.9)),F(b.Alert,"successStandardBg",$e(b.success.light,.9)),F(b.Alert,"warningStandardBg",$e(b.warning.light,.9)),F(b.Alert,"errorIconColor",X("palette-error-main")),F(b.Alert,"infoIconColor",X("palette-info-main")),F(b.Alert,"successIconColor",X("palette-success-main")),F(b.Alert,"warningIconColor",X("palette-warning-main")),F(b.AppBar,"defaultBg",X("palette-grey-900")),F(b.AppBar,"darkBg",X("palette-background-paper")),F(b.AppBar,"darkColor",X("palette-text-primary")),F(b.Avatar,"defaultBg",X("palette-grey-600")),F(b.Button,"inheritContainedBg",X("palette-grey-800")),F(b.Button,"inheritContainedHoverBg",X("palette-grey-700")),F(b.Chip,"defaultBorder",X("palette-grey-700")),F(b.Chip,"defaultAvatarColor",X("palette-grey-300")),F(b.Chip,"defaultIconColor",X("palette-grey-300")),F(b.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),F(b.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),F(b.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),F(b.LinearProgress,"primaryBg",$e(b.primary.main,.5)),F(b.LinearProgress,"secondaryBg",$e(b.secondary.main,.5)),F(b.LinearProgress,"errorBg",$e(b.error.main,.5)),F(b.LinearProgress,"infoBg",$e(b.info.main,.5)),F(b.LinearProgress,"successBg",$e(b.success.main,.5)),F(b.LinearProgress,"warningBg",$e(b.warning.main,.5)),F(b.Skeleton,"bg",`rgba(${X("palette-text-primaryChannel")} / 0.13)`),F(b.Slider,"primaryTrack",$e(b.primary.main,.5)),F(b.Slider,"secondaryTrack",$e(b.secondary.main,.5)),F(b.Slider,"errorTrack",$e(b.error.main,.5)),F(b.Slider,"infoTrack",$e(b.info.main,.5)),F(b.Slider,"successTrack",$e(b.success.main,.5)),F(b.Slider,"warningTrack",$e(b.warning.main,.5));const ee=bs(b.background.default,.98);F(b.SnackbarContent,"bg",ee),F(b.SnackbarContent,"color",Pn(()=>b.getContrastText(ee))),F(b.SpeedDialAction,"fabHoverBg",bs(b.background.paper,.15)),F(b.StepConnector,"border",X("palette-grey-600")),F(b.StepContent,"border",X("palette-grey-600")),F(b.Switch,"defaultColor",X("palette-grey-300")),F(b.Switch,"defaultDisabledColor",X("palette-grey-600")),F(b.Switch,"primaryDisabledColor",$e(b.primary.main,.55)),F(b.Switch,"secondaryDisabledColor",$e(b.secondary.main,.55)),F(b.Switch,"errorDisabledColor",$e(b.error.main,.55)),F(b.Switch,"infoDisabledColor",$e(b.info.main,.55)),F(b.Switch,"successDisabledColor",$e(b.success.main,.55)),F(b.Switch,"warningDisabledColor",$e(b.warning.main,.55)),F(b.TableCell,"border",$e(vs(b.divider,1),.68)),F(b.Tooltip,"bg",vs(b.grey[700],.92))}Wn(b.background,"default"),Wn(b.background,"paper"),Wn(b.common,"background"),Wn(b.common,"onBackground"),Wn(b,"divider"),Object.keys(b).forEach(ee=>{const re=b[ee];re&&typeof re=="object"&&(re.main&&F(b[ee],"mainChannel",zi(ji(re.main))),re.light&&F(b[ee],"lightChannel",zi(ji(re.light))),re.dark&&F(b[ee],"darkChannel",zi(ji(re.dark))),re.contrastText&&F(b[ee],"contrastTextChannel",zi(ji(re.contrastText))),ee==="text"&&(Wn(b[ee],"primary"),Wn(b[ee],"secondary")),ee==="action"&&(re.active&&Wn(b[ee],"active"),re.selected&&Wn(b[ee],"selected")))})}),_=n.reduce((Z,b)=>At(Z,b),_);const C={prefix:l,disableCssColorScheme:s,shouldSkipGeneratingVar:c,getSelector:VS(_)},{vars:z,generateThemeVars:L,generateStyleSheets:J}=Zx(_,C);return _.vars=z,Object.entries(_.colorSchemes[_.defaultColorScheme]).forEach(([Z,b])=>{_[Z]=b}),_.generateThemeVars=L,_.generateStyleSheets=J,_.generateSpacing=function(){return Mg(m.spacing,gd(this))},_.getColorSchemeSelector=eS(f),_.spacing=_.generateSpacing(),_.shouldSkipGeneratingVar=c,_.unstable_sxConfig={...na,...m==null?void 0:m.unstable_sxConfig},_.unstable_sx=function(b){return xr({sx:b,theme:this})},_.toRuntimeSource=Qg,_}function bm(e,n,o){e.colorSchemes&&o&&(e.colorSchemes[n]={...o!==!0&&o,palette:_d({...o===!0?{}:o.palette,mode:n})})}function sl(e={},...n){const{palette:o,cssVariables:i=!1,colorSchemes:s=o?void 0:{light:!0},defaultColorScheme:l=o==null?void 0:o.mode,...c}=e,f=l||"light",h=s==null?void 0:s[f],m={...s,...o?{[f]:{...typeof h!="boolean"&&h,palette:o}}:void 0};if(i===!1){if(!("colorSchemes"in e))return Wc(e,...n);let y=o;"palette"in e||m[f]&&(m[f]!==!0?y=m[f].palette:f==="dark"&&(y={mode:"dark"}));const v=Wc({...e,palette:y},...n);return v.defaultColorScheme=f,v.colorSchemes=m,v.palette.mode==="light"&&(v.colorSchemes.light={...m.light!==!0&&m.light,palette:v.palette},bm(v,"dark",m.dark)),v.palette.mode==="dark"&&(v.colorSchemes.dark={...m.dark!==!0&&m.dark,palette:v.palette},bm(v,"light",m.light)),v}return!o&&!("light"in m)&&f==="light"&&(m.light=!0),XS({...c,colorSchemes:m,defaultColorScheme:f,...typeof i!="boolean"&&i},...n)}const e0=sl(),Hn="$$material";function Ad(){const e=rl(e0);return e[Hn]||e}function QS(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const t0=e=>QS(e)&&e!=="classes",je=$g({themeId:Hn,defaultTheme:e0,rootShouldForwardProp:t0});function JS(){return vd}const Xt=Wx;function it(e){return Ux(e)}function ZS(e){return typeof e.main=="string"}function ew(e,n=[]){if(!ZS(e))return!1;for(const o of n)if(!e.hasOwnProperty(o)||typeof e[o]!="string")return!1;return!0}function Xi(e=[]){return([,n])=>n&&ew(n,e)}function tw(e){return ot("MuiPaper",e)}dt("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const nw=e=>{const{square:n,elevation:o,variant:i,classes:s}=e,l={root:["root",i,!n&&"rounded",i==="elevation"&&`elevation${o}`]};return ct(l,tw,s)},rw=je("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[o.variant],!o.square&&n.rounded,o.variant==="elevation"&&n[`elevation${o.elevation}`]]}})(Xt(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:n})=>!n.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),ll=A.forwardRef(function(n,o){var R;const i=it({props:n,name:"MuiPaper"}),s=Ad(),{className:l,component:c="div",elevation:f=1,square:h=!1,variant:m="elevation",...y}=i,v={...i,component:c,elevation:f,square:h,variant:m},w=nw(v);return M.jsx(rw,{as:c,ownerState:v,className:Ee(w.root,l),ref:o,...y,style:{...m==="elevation"&&{"--Paper-shadow":(s.vars||s).shadows[f],...s.vars&&{"--Paper-overlay":(R=s.vars.overlays)==null?void 0:R[f]},...!s.vars&&s.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${_n("#fff",qc(f))}, ${_n("#fff",qc(f))})`}},...y.style}})});function ow(e){return ot("MuiAppBar",e)}dt("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const iw=e=>{const{color:n,position:o,classes:i}=e,s={root:["root",`color${Se(n)}`,`position${Se(o)}`]};return ct(s,ow,i)},xm=(e,n)=>e?`${e==null?void 0:e.replace(")","")}, ${n})`:n,aw=je(ll,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`position${Se(o.position)}`],n[`color${Se(o.color)}`]]}})(Xt(({theme:e})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":e.vars?e.vars.palette.AppBar.defaultBg:e.palette.grey[100],"--AppBar-color":e.vars?e.vars.palette.text.primary:e.palette.getContrastText(e.palette.grey[100]),...e.applyStyles("dark",{"--AppBar-background":e.vars?e.vars.palette.AppBar.defaultBg:e.palette.grey[900],"--AppBar-color":e.vars?e.vars.palette.text.primary:e.palette.getContrastText(e.palette.grey[900])})}},...Object.entries(e.palette).filter(Xi(["contrastText"])).map(([n])=>({props:{color:n},style:{"--AppBar-background":(e.vars??e).palette[n].main,"--AppBar-color":(e.vars??e).palette[n].contrastText}})),{props:n=>n.enableColorOnDark===!0&&!["inherit","transparent"].includes(n.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:n=>n.enableColorOnDark===!1&&!["inherit","transparent"].includes(n.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...e.applyStyles("dark",{backgroundColor:e.vars?xm(e.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:e.vars?xm(e.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...e.applyStyles("dark",{backgroundImage:"none"})}}]}))),sw=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiAppBar"}),{className:s,color:l="primary",enableColorOnDark:c=!1,position:f="fixed",...h}=i,m={...i,color:l,position:f,enableColorOnDark:c},y=iw(m);return M.jsx(aw,{square:!0,component:"header",ownerState:m,elevation:4,className:Ee(y.root,s,f==="fixed"&&"mui-fixed"),ref:o,...h})});function lw(e){return ot("MuiToolbar",e)}dt("MuiToolbar",["root","gutters","regular","dense"]);const uw=e=>{const{classes:n,disableGutters:o,variant:i}=e;return ct({root:["root",!o&&"gutters",i]},lw,n)},cw=je("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,!o.disableGutters&&n.gutters,n[o.variant]]}})(Xt(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:n})=>!n.disableGutters,style:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:e.mixins.toolbar}]}))),dw=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiToolbar"}),{className:s,component:l="div",disableGutters:c=!1,variant:f="regular",...h}=i,m={...i,component:l,disableGutters:c,variant:f},y=uw(m);return M.jsx(cw,{as:l,className:Ee(y.root,s),ref:o,ownerState:m,...h})});function fw(e){return ot("MuiTypography",e)}dt("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const pw={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},hw=JS(),mw=e=>{const{align:n,gutterBottom:o,noWrap:i,paragraph:s,variant:l,classes:c}=e,f={root:["root",l,e.align!=="inherit"&&`align${Se(n)}`,o&&"gutterBottom",i&&"noWrap",s&&"paragraph"]};return ct(f,fw,c)},gw=je("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,o.variant&&n[o.variant],o.align!=="inherit"&&n[`align${Se(o.align)}`],o.noWrap&&n.noWrap,o.gutterBottom&&n.gutterBottom,o.paragraph&&n.paragraph]}})(Xt(({theme:e})=>{var n;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter(([o,i])=>o!=="inherit"&&i&&typeof i=="object").map(([o,i])=>({props:{variant:o},style:i})),...Object.entries(e.palette).filter(Xi()).map(([o])=>({props:{color:o},style:{color:(e.vars||e).palette[o].main}})),...Object.entries(((n=e.palette)==null?void 0:n.text)||{}).filter(([,o])=>typeof o=="string").map(([o])=>({props:{color:`text${Se(o)}`},style:{color:(e.vars||e).palette.text[o]}})),{props:({ownerState:o})=>o.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:o})=>o.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:o})=>o.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:o})=>o.paragraph,style:{marginBottom:16}}]}})),Sm={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Ce=A.forwardRef(function(n,o){const{color:i,...s}=it({props:n,name:"MuiTypography"}),l=!pw[i],c=hw({...s,...l&&{color:i}}),{align:f="inherit",className:h,component:m,gutterBottom:y=!1,noWrap:v=!1,paragraph:w=!1,variant:R="body1",variantMapping:S=Sm,...x}=c,P={...c,align:f,color:i,className:h,component:m,gutterBottom:y,noWrap:v,paragraph:w,variant:R,variantMapping:S},$=m||(w?"p":S[R]||Sm[R])||"span",U=mw(P);return M.jsx(gw,{as:$,ref:o,className:Ee(U.root,h),...x,ownerState:P,style:{...f!=="inherit"&&{"--Typography-textAlign":f},...x.style}})}),n0=iS({createStyledComponent:je("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`maxWidth${Se(String(o.maxWidth))}`],o.fixed&&n.fixed,o.disableGutters&&n.disableGutters]}}),useThemeProps:e=>it({props:e,name:"MuiContainer"})});function yw(e){return ot("MuiSvgIcon",e)}dt("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const vw=e=>{const{color:n,fontSize:o,classes:i}=e,s={root:["root",n!=="inherit"&&`color${Se(n)}`,`fontSize${Se(o)}`]};return ct(s,yw,i)},bw=je("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,o.color!=="inherit"&&n[`color${Se(o.color)}`],n[`fontSize${Se(o.fontSize)}`]]}})(Xt(({theme:e})=>{var n,o,i,s,l,c,f,h,m,y,v,w,R,S;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(s=(n=e.transitions)==null?void 0:n.create)==null?void 0:s.call(n,"fill",{duration:(i=(o=(e.vars??e).transitions)==null?void 0:o.duration)==null?void 0:i.shorter}),variants:[{props:x=>!x.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((c=(l=e.typography)==null?void 0:l.pxToRem)==null?void 0:c.call(l,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((h=(f=e.typography)==null?void 0:f.pxToRem)==null?void 0:h.call(f,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((y=(m=e.typography)==null?void 0:m.pxToRem)==null?void 0:y.call(m,35))||"2.1875rem"}},...Object.entries((e.vars??e).palette).filter(([,x])=>x&&x.main).map(([x])=>{var P,$;return{props:{color:x},style:{color:($=(P=(e.vars??e).palette)==null?void 0:P[x])==null?void 0:$.main}}}),{props:{color:"action"},style:{color:(w=(v=(e.vars??e).palette)==null?void 0:v.action)==null?void 0:w.active}},{props:{color:"disabled"},style:{color:(S=(R=(e.vars??e).palette)==null?void 0:R.action)==null?void 0:S.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),$s=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiSvgIcon"}),{children:s,className:l,color:c="inherit",component:f="svg",fontSize:h="medium",htmlColor:m,inheritViewBox:y=!1,titleAccess:v,viewBox:w="0 0 24 24",...R}=i,S=A.isValidElement(s)&&s.type==="svg",x={...i,color:c,component:f,fontSize:h,instanceFontSize:n.fontSize,inheritViewBox:y,viewBox:w,hasSvgAsChild:S},P={};y||(P.viewBox=w);const $=vw(x);return M.jsxs(bw,{as:f,className:Ee($.root,l),focusable:"false",color:m,"aria-hidden":v?void 0:!0,role:v?"img":void 0,ref:o,...P,...R,...S&&s.props,ownerState:x,children:[S?s.props.children:s,v?M.jsx("title",{children:v}):null]})});$s&&($s.muiName="SvgIcon");function r0(e,n){function o(i,s){return M.jsx($s,{"data-testid":`${n}Icon`,ref:s,...i,children:e})}return o.muiName=$s.muiName,A.memo(A.forwardRef(o))}const xw=r0(M.jsx("path",{d:"M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63M9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"}),"Adb");function Sw(){return M.jsx(sw,{position:"static",children:M.jsx(n0,{maxWidth:"xl",children:M.jsxs(dw,{disableGutters:!0,children:[M.jsx(xw,{sx:{display:{xs:"none",md:"flex"},mr:1}}),M.jsx(Ce,{variant:"h6",noWrap:!0,component:"a",href:"#app-bar-with-responsive-menu",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"UNIR México"})]})})})}function wm({theme:e,...n}){const o=Hn in e?e[Hn]:void 0;return M.jsx(Vg,{...n,themeId:o?Hn:void 0,theme:o||e})}const xs={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:ww,useColorScheme:OE,getInitColorSchemeScript:_E}=Yx({themeId:Hn,theme:()=>sl({cssVariables:!0}),colorSchemeStorageKey:xs.colorSchemeStorageKey,modeStorageKey:xs.modeStorageKey,defaultColorScheme:{light:xs.defaultLightColorScheme,dark:xs.defaultDarkColorScheme},resolveTheme:e=>{const n={...e,typography:Xg(e.palette,e.typography)};return n.unstable_sx=function(i){return xr({sx:i,theme:this})},n}}),kw=ww;function Cw({theme:e,...n}){return typeof e=="function"?M.jsx(wm,{theme:e,...n}):"colorSchemes"in(Hn in e?e[Hn]:e)?M.jsx(kw,{theme:e,...n}):M.jsx(wm,{theme:e,...n})}function Md(e,n){if(e==null)return{};var o={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(n.includes(i))continue;o[i]=e[i]}return o}function Hc(e,n){return Hc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},Hc(e,n)}function ul(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,Hc(e,n)}var o0=pg();const Ss=fg(o0),km={disabled:!1},Is=He.createContext(null);var Pw=function(n){return n.scrollTop},Di="unmounted",Fr="exited",Ur="entering",Mo="entered",Vc="exiting",Gn=function(e){ul(n,e);function n(i,s){var l;l=e.call(this,i,s)||this;var c=s,f=c&&!c.isMounting?i.enter:i.appear,h;return l.appearStatus=null,i.in?f?(h=Fr,l.appearStatus=Ur):h=Mo:i.unmountOnExit||i.mountOnEnter?h=Di:h=Fr,l.state={status:h},l.nextCallback=null,l}n.getDerivedStateFromProps=function(s,l){var c=s.in;return c&&l.status===Di?{status:Fr}:null};var o=n.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(s){var l=null;if(s!==this.props){var c=this.state.status;this.props.in?c!==Ur&&c!==Mo&&(l=Ur):(c===Ur||c===Mo)&&(l=Vc)}this.updateStatus(!1,l)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var s=this.props.timeout,l,c,f;return l=c=f=s,s!=null&&typeof s!="number"&&(l=s.exit,c=s.enter,f=s.appear!==void 0?s.appear:c),{exit:l,enter:c,appear:f}},o.updateStatus=function(s,l){if(s===void 0&&(s=!1),l!==null)if(this.cancelNextCallback(),l===Ur){if(this.props.unmountOnExit||this.props.mountOnEnter){var c=this.props.nodeRef?this.props.nodeRef.current:Ss.findDOMNode(this);c&&Pw(c)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Fr&&this.setState({status:Di})},o.performEnter=function(s){var l=this,c=this.props.enter,f=this.context?this.context.isMounting:s,h=this.props.nodeRef?[f]:[Ss.findDOMNode(this),f],m=h[0],y=h[1],v=this.getTimeouts(),w=f?v.appear:v.enter;if(!s&&!c||km.disabled){this.safeSetState({status:Mo},function(){l.props.onEntered(m)});return}this.props.onEnter(m,y),this.safeSetState({status:Ur},function(){l.props.onEntering(m,y),l.onTransitionEnd(w,function(){l.safeSetState({status:Mo},function(){l.props.onEntered(m,y)})})})},o.performExit=function(){var s=this,l=this.props.exit,c=this.getTimeouts(),f=this.props.nodeRef?void 0:Ss.findDOMNode(this);if(!l||km.disabled){this.safeSetState({status:Fr},function(){s.props.onExited(f)});return}this.props.onExit(f),this.safeSetState({status:Vc},function(){s.props.onExiting(f),s.onTransitionEnd(c.exit,function(){s.safeSetState({status:Fr},function(){s.props.onExited(f)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(s,l){l=this.setNextCallback(l),this.setState(s,l)},o.setNextCallback=function(s){var l=this,c=!0;return this.nextCallback=function(f){c&&(c=!1,l.nextCallback=null,s(f))},this.nextCallback.cancel=function(){c=!1},this.nextCallback},o.onTransitionEnd=function(s,l){this.setNextCallback(l);var c=this.props.nodeRef?this.props.nodeRef.current:Ss.findDOMNode(this),f=s==null&&!this.props.addEndListener;if(!c||f){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[c,this.nextCallback],m=h[0],y=h[1];this.props.addEndListener(m,y)}s!=null&&setTimeout(this.nextCallback,s)},o.render=function(){var s=this.state.status;if(s===Di)return null;var l=this.props,c=l.children;l.in,l.mountOnEnter,l.unmountOnExit,l.appear,l.enter,l.exit,l.timeout,l.addEndListener,l.onEnter,l.onEntering,l.onEntered,l.onExit,l.onExiting,l.onExited,l.nodeRef;var f=Md(l,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return He.createElement(Is.Provider,{value:null},typeof c=="function"?c(s,f):He.cloneElement(He.Children.only(c),f))},n}(He.Component);Gn.contextType=Is;Gn.propTypes={};function Ro(){}Gn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ro,onEntering:Ro,onEntered:Ro,onExit:Ro,onExiting:Ro,onExited:Ro};Gn.UNMOUNTED=Di;Gn.EXITED=Fr;Gn.ENTERING=Ur;Gn.ENTERED=Mo;Gn.EXITING=Vc;function Gc(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Nd(e,n){var o=function(l){return n&&A.isValidElement(l)?n(l):l},i=Object.create(null);return e&&A.Children.map(e,function(s){return s}).forEach(function(s){i[s.key]=o(s)}),i}function Ew(e,n){e=e||{},n=n||{};function o(y){return y in n?n[y]:e[y]}var i=Object.create(null),s=[];for(var l in e)l in n?s.length&&(i[l]=s,s=[]):s.push(l);var c,f={};for(var h in n){if(i[h])for(c=0;c<i[h].length;c++){var m=i[h][c];f[i[h][c]]=o(m)}f[h]=o(h)}for(c=0;c<s.length;c++)f[s[c]]=o(s[c]);return f}function qr(e,n,o){return o[n]!=null?o[n]:e.props[n]}function Rw(e,n){return Nd(e.children,function(o){return A.cloneElement(o,{onExited:n.bind(null,o),in:!0,appear:qr(o,"appear",e),enter:qr(o,"enter",e),exit:qr(o,"exit",e)})})}function Tw(e,n,o){var i=Nd(e.children),s=Ew(n,i);return Object.keys(s).forEach(function(l){var c=s[l];if(A.isValidElement(c)){var f=l in n,h=l in i,m=n[l],y=A.isValidElement(m)&&!m.props.in;h&&(!f||y)?s[l]=A.cloneElement(c,{onExited:o.bind(null,c),in:!0,exit:qr(c,"exit",e),enter:qr(c,"enter",e)}):!h&&f&&!y?s[l]=A.cloneElement(c,{in:!1}):h&&f&&A.isValidElement(m)&&(s[l]=A.cloneElement(c,{onExited:o.bind(null,c),in:m.props.in,exit:qr(c,"exit",e),enter:qr(c,"enter",e)}))}}),s}var Ow=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},_w={component:"div",childFactory:function(n){return n}},zd=function(e){ul(n,e);function n(i,s){var l;l=e.call(this,i,s)||this;var c=l.handleExited.bind(Gc(l));return l.state={contextValue:{isMounting:!0},handleExited:c,firstRender:!0},l}var o=n.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(s,l){var c=l.children,f=l.handleExited,h=l.firstRender;return{children:h?Rw(s,f):Tw(s,c,f),firstRender:!1}},o.handleExited=function(s,l){var c=Nd(this.props.children);s.key in c||(s.props.onExited&&s.props.onExited(l),this.mounted&&this.setState(function(f){var h=Xe({},f.children);return delete h[s.key],{children:h}}))},o.render=function(){var s=this.props,l=s.component,c=s.childFactory,f=Md(s,["component","childFactory"]),h=this.state.contextValue,m=Ow(this.state.children).map(c);return delete f.appear,delete f.enter,delete f.exit,l===null?He.createElement(Is.Provider,{value:h},m):He.createElement(Is.Provider,{value:h},He.createElement(l,f,m))},n}(He.Component);zd.propTypes={};zd.defaultProps=_w;const Aw=e=>e.scrollTop;function Cm(e,n){const{timeout:o,easing:i,style:s={}}=e;return{duration:s.transitionDuration??(typeof o=="number"?o:o[n.mode]||0),easing:s.transitionTimingFunction??(typeof i=="object"?i[n.mode]:i),delay:s.transitionDelay}}function Ls(e,n){const{className:o,elementType:i,ownerState:s,externalForwardedProps:l,getSlotOwnerState:c,internalForwardedProps:f,...h}=n,{component:m,slots:y={[e]:void 0},slotProps:v={[e]:void 0},...w}=l,R=y[e]||i,S=zx(v[e],s),{props:{component:x,...P},internalRef:$}=Nx({className:o,...h,externalForwardedProps:e==="root"?w:void 0,externalSlotProps:S}),U=wr($,S==null?void 0:S.ref,n.ref),j=c?c(P):{},_={...s,...j},C=e==="root"?x||m:x,z=Mx(R,{...e==="root"&&!m&&!y[e]&&f,...e!=="root"&&!y[e]&&f,...P,...C&&{as:C},ref:U},_);return Object.keys(j).forEach(L=>{delete z[L]}),[R,z]}class Bs{constructor(){Ti(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new Bs}static use(){const n=Fg(Bs.create).current,[o,i]=A.useState(!1);return n.shouldMount=o,n.setShouldMount=i,A.useEffect(n.mountEffect,[o]),n}mount(){return this.mounted||(this.mounted=Nw(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...n){this.mount().then(()=>{var o;return(o=this.ref.current)==null?void 0:o.start(...n)})}stop(...n){this.mount().then(()=>{var o;return(o=this.ref.current)==null?void 0:o.stop(...n)})}pulsate(...n){this.mount().then(()=>{var o;return(o=this.ref.current)==null?void 0:o.pulsate(...n)})}}function Mw(){return Bs.use()}function Nw(){let e,n;const o=new Promise((i,s)=>{e=i,n=s});return o.resolve=e,o.reject=n,o}function zw(e){const{className:n,classes:o,pulsate:i=!1,rippleX:s,rippleY:l,rippleSize:c,in:f,onExited:h,timeout:m}=e,[y,v]=A.useState(!1),w=Ee(n,o.ripple,o.rippleVisible,i&&o.ripplePulsate),R={width:c,height:c,top:-(c/2)+l,left:-(c/2)+s},S=Ee(o.child,y&&o.childLeaving,i&&o.childPulsate);return!f&&!y&&v(!0),A.useEffect(()=>{if(!f&&h!=null){const x=setTimeout(h,m);return()=>{clearTimeout(x)}}},[h,f,m]),M.jsx("span",{className:w,style:R,children:M.jsx("span",{className:S})})}const on=dt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Kc=550,jw=80,Dw=wd`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,$w=wd`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Iw=wd`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Lw=je("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Bw=je(zw,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${on.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Dw};
    animation-duration: ${Kc}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${on.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${on.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${on.childLeaving} {
    opacity: 0;
    animation-name: ${$w};
    animation-duration: ${Kc}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${on.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Iw};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Fw=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiTouchRipple"}),{center:s=!1,classes:l={},className:c,...f}=i,[h,m]=A.useState([]),y=A.useRef(0),v=A.useRef(null);A.useEffect(()=>{v.current&&(v.current(),v.current=null)},[h]);const w=A.useRef(!1),R=Ox(),S=A.useRef(null),x=A.useRef(null),P=A.useCallback(_=>{const{pulsate:C,rippleX:z,rippleY:L,rippleSize:J,cb:Z}=_;m(b=>[...b,M.jsx(Bw,{classes:{ripple:Ee(l.ripple,on.ripple),rippleVisible:Ee(l.rippleVisible,on.rippleVisible),ripplePulsate:Ee(l.ripplePulsate,on.ripplePulsate),child:Ee(l.child,on.child),childLeaving:Ee(l.childLeaving,on.childLeaving),childPulsate:Ee(l.childPulsate,on.childPulsate)},timeout:Kc,pulsate:C,rippleX:z,rippleY:L,rippleSize:J},y.current)]),y.current+=1,v.current=Z},[l]),$=A.useCallback((_={},C={},z=()=>{})=>{const{pulsate:L=!1,center:J=s||C.pulsate,fakeElement:Z=!1}=C;if((_==null?void 0:_.type)==="mousedown"&&w.current){w.current=!1;return}(_==null?void 0:_.type)==="touchstart"&&(w.current=!0);const b=Z?null:x.current,X=b?b.getBoundingClientRect():{width:0,height:0,left:0,top:0};let ee,re,oe;if(J||_===void 0||_.clientX===0&&_.clientY===0||!_.clientX&&!_.touches)ee=Math.round(X.width/2),re=Math.round(X.height/2);else{const{clientX:ie,clientY:le}=_.touches&&_.touches.length>0?_.touches[0]:_;ee=Math.round(ie-X.left),re=Math.round(le-X.top)}if(J)oe=Math.sqrt((2*X.width**2+X.height**2)/3),oe%2===0&&(oe+=1);else{const ie=Math.max(Math.abs((b?b.clientWidth:0)-ee),ee)*2+2,le=Math.max(Math.abs((b?b.clientHeight:0)-re),re)*2+2;oe=Math.sqrt(ie**2+le**2)}_!=null&&_.touches?S.current===null&&(S.current=()=>{P({pulsate:L,rippleX:ee,rippleY:re,rippleSize:oe,cb:z})},R.start(jw,()=>{S.current&&(S.current(),S.current=null)})):P({pulsate:L,rippleX:ee,rippleY:re,rippleSize:oe,cb:z})},[s,P,R]),U=A.useCallback(()=>{$({},{pulsate:!0})},[$]),j=A.useCallback((_,C)=>{if(R.clear(),(_==null?void 0:_.type)==="touchend"&&S.current){S.current(),S.current=null,R.start(0,()=>{j(_,C)});return}S.current=null,m(z=>z.length>0?z.slice(1):z),v.current=C},[R]);return A.useImperativeHandle(o,()=>({pulsate:U,start:$,stop:j}),[U,$,j]),M.jsx(Lw,{className:Ee(on.root,l.root,c),ref:x,...f,children:M.jsx(zd,{component:null,exit:!0,children:h})})});function Uw(e){return ot("MuiButtonBase",e)}const Ww=dt("MuiButtonBase",["root","disabled","focusVisible"]),qw=e=>{const{disabled:n,focusVisible:o,focusVisibleClassName:i,classes:s}=e,c=ct({root:["root",n&&"disabled",o&&"focusVisible"]},Uw,s);return o&&i&&(c.root+=` ${i}`),c},Hw=je("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ww.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),jd=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiButtonBase"}),{action:s,centerRipple:l=!1,children:c,className:f,component:h="button",disabled:m=!1,disableRipple:y=!1,disableTouchRipple:v=!1,focusRipple:w=!1,focusVisibleClassName:R,LinkComponent:S="a",onBlur:x,onClick:P,onContextMenu:$,onDragLeave:U,onFocus:j,onFocusVisible:_,onKeyDown:C,onKeyUp:z,onMouseDown:L,onMouseLeave:J,onMouseUp:Z,onTouchEnd:b,onTouchMove:X,onTouchStart:ee,tabIndex:re=0,TouchRippleProps:oe,touchRippleRef:ie,type:le,...ge}=i,G=A.useRef(null),te=Mw(),Q=wr(te.ref,ie),[T,q]=A.useState(!1);m&&T&&q(!1),A.useImperativeHandle(s,()=>({focusVisible:()=>{q(!0),G.current.focus()}}),[]);const pe=te.shouldMount&&!y&&!m;A.useEffect(()=>{T&&w&&!y&&te.pulsate()},[y,w,T,te]);function ce(ye,Yn,Er=v){return No(Xn=>(Yn&&Yn(Xn),Er||te[ye](Xn),!0))}const be=ce("start",L),ke=ce("stop",$),Oe=ce("stop",U),Re=ce("stop",Z),Ae=ce("stop",ye=>{T&&ye.preventDefault(),J&&J(ye)}),et=ce("start",ee),ln=ce("stop",b),Mt=ce("stop",X),Nt=ce("stop",ye=>{am(ye.target)||q(!1),x&&x(ye)},!1),Nn=No(ye=>{G.current||(G.current=ye.currentTarget),am(ye.target)&&(q(!0),_&&_(ye)),j&&j(ye)}),mt=()=>{const ye=G.current;return h&&h!=="button"&&!(ye.tagName==="A"&&ye.href)},Cr=No(ye=>{w&&!ye.repeat&&T&&ye.key===" "&&te.stop(ye,()=>{te.start(ye)}),ye.target===ye.currentTarget&&mt()&&ye.key===" "&&ye.preventDefault(),C&&C(ye),ye.target===ye.currentTarget&&mt()&&ye.key==="Enter"&&!m&&(ye.preventDefault(),P&&P(ye))}),Pr=No(ye=>{w&&ye.key===" "&&T&&!ye.defaultPrevented&&te.stop(ye,()=>{te.pulsate(ye)}),z&&z(ye),P&&ye.target===ye.currentTarget&&mt()&&ye.key===" "&&!ye.defaultPrevented&&P(ye)});let at=h;at==="button"&&(ge.href||ge.to)&&(at=S);const Tt={};at==="button"?(Tt.type=le===void 0?"button":le,Tt.disabled=m):(!ge.href&&!ge.to&&(Tt.role="button"),m&&(Tt["aria-disabled"]=m));const zn=wr(o,G),Qt={...i,centerRipple:l,component:h,disabled:m,disableRipple:y,disableTouchRipple:v,focusRipple:w,tabIndex:re,focusVisible:T},Kn=qw(Qt);return M.jsxs(Hw,{as:at,className:Ee(Kn.root,f),ownerState:Qt,onBlur:Nt,onClick:P,onContextMenu:ke,onFocus:Nn,onKeyDown:Cr,onKeyUp:Pr,onMouseDown:be,onMouseLeave:Ae,onMouseUp:Re,onDragLeave:Oe,onTouchEnd:ln,onTouchMove:Mt,onTouchStart:et,ref:zn,tabIndex:m?-1:re,type:le,...Tt,...ge,children:[c,pe?M.jsx(Fw,{ref:Q,center:l,...oe}):null]})});function Vw(e){return ot("MuiIconButton",e)}const Gw=dt("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Kw=e=>{const{classes:n,disabled:o,color:i,edge:s,size:l}=e,c={root:["root",o&&"disabled",i!=="default"&&`color${Se(i)}`,s&&`edge${Se(s)}`,`size${Se(l)}`]};return ct(c,Vw,n)},Yw=je(jd,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,o.color!=="default"&&n[`color${Se(o.color)}`],o.edge&&n[`edge${Se(o.edge)}`],n[`size${Se(o.size)}`]]}})(Xt(({theme:e})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),variants:[{props:n=>!n.disableRipple,style:{"--IconButton-hoverBg":e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:_n(e.palette.action.active,e.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),Xt(({theme:e})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(e.palette).filter(Xi()).map(([n])=>({props:{color:n},style:{color:(e.vars||e).palette[n].main}})),...Object.entries(e.palette).filter(Xi()).map(([n])=>({props:{color:n},style:{"--IconButton-hoverBg":e.vars?`rgba(${(e.vars||e).palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:_n((e.vars||e).palette[n].main,e.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${Gw.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}}))),Xw=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiIconButton"}),{edge:s=!1,children:l,className:c,color:f="default",disabled:h=!1,disableFocusRipple:m=!1,size:y="medium",...v}=i,w={...i,edge:s,color:f,disabled:h,disableFocusRipple:m,size:y},R=Kw(w);return M.jsx(Yw,{className:Ee(R.root,c),centerRipple:!0,focusRipple:!m,disabled:h,ref:o,...v,ownerState:w,children:l})});function Qw(e){return typeof e=="function"?e():e}const Jw=A.forwardRef(function(n,o){const{children:i,container:s,disablePortal:l=!1}=n,[c,f]=A.useState(null),h=wr(A.isValidElement(i)?Rd(i):null,o);if(Bc(()=>{l||f(Qw(s)||document.body)},[s,l]),Bc(()=>{if(c&&!l)return Uc(o,c),()=>{Uc(o,null)}},[o,c,l]),l){if(A.isValidElement(i)){const m={ref:h};return A.cloneElement(i,m)}return M.jsx(A.Fragment,{children:i})}return M.jsx(A.Fragment,{children:c&&o0.createPortal(i,c)})}),Zw={entering:{opacity:1},entered:{opacity:1}},i0=A.forwardRef(function(n,o){const i=Ad(),s={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{addEndListener:l,appear:c=!0,children:f,easing:h,in:m,onEnter:y,onEntered:v,onEntering:w,onExit:R,onExited:S,onExiting:x,style:P,timeout:$=s,TransitionComponent:U=Gn,...j}=n,_=A.useRef(null),C=wr(_,Rd(f),o),z=oe=>ie=>{if(oe){const le=_.current;ie===void 0?oe(le):oe(le,ie)}},L=z(w),J=z((oe,ie)=>{Aw(oe);const le=Cm({style:P,timeout:$,easing:h},{mode:"enter"});oe.style.webkitTransition=i.transitions.create("opacity",le),oe.style.transition=i.transitions.create("opacity",le),y&&y(oe,ie)}),Z=z(v),b=z(x),X=z(oe=>{const ie=Cm({style:P,timeout:$,easing:h},{mode:"exit"});oe.style.webkitTransition=i.transitions.create("opacity",ie),oe.style.transition=i.transitions.create("opacity",ie),R&&R(oe)}),ee=z(S),re=oe=>{l&&l(_.current,oe)};return M.jsx(U,{appear:c,in:m,nodeRef:_,onEnter:J,onEntered:Z,onEntering:L,onExit:X,onExited:ee,onExiting:b,addEndListener:re,timeout:$,...j,children:(oe,ie)=>A.cloneElement(f,{style:{opacity:0,visibility:oe==="exited"&&!m?"hidden":void 0,...Zw[oe],...P,...f.props.style},ref:C,...ie})})});function ek(e){return ot("MuiBackdrop",e)}dt("MuiBackdrop",["root","invisible"]);const tk=e=>{const{ownerState:n,...o}=e;return o},nk=e=>{const{classes:n,invisible:o}=e;return ct({root:["root",o&&"invisible"]},ek,n)},rk=je("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,o.invisible&&n.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),Dd=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiBackdrop"}),{children:s,className:l,component:c="div",invisible:f=!1,open:h,components:m={},componentsProps:y={},slotProps:v={},slots:w={},TransitionComponent:R,transitionDuration:S,...x}=i,P={...i,component:c,invisible:f},$=nk(P),U={transition:R,root:m.Root,...w},j={...y,...v},_={slots:U,slotProps:j},[C,z]=Ls("root",{elementType:rk,externalForwardedProps:_,className:Ee($.root,l),ownerState:P}),[L,J]=Ls("transition",{elementType:i0,externalForwardedProps:_,ownerState:P}),Z=tk(J);return M.jsx(L,{in:h,timeout:S,...x,...Z,children:M.jsx(C,{"aria-hidden":!0,...z,classes:$,ref:o,children:s})})}),ok=dt("MuiBox",["root"]),ik=sl(),Pm=lx({themeId:Hn,defaultTheme:ik,defaultClassName:ok.root,generateClassName:zg.generate});function ak(e){return ot("MuiButton",e)}const To=dt("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),sk=A.createContext({}),lk=A.createContext(void 0),uk=e=>{const{color:n,disableElevation:o,fullWidth:i,size:s,variant:l,classes:c}=e,f={root:["root",l,`${l}${Se(n)}`,`size${Se(s)}`,`${l}Size${Se(s)}`,`color${Se(n)}`,o&&"disableElevation",i&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${Se(s)}`],endIcon:["icon","endIcon",`iconSize${Se(s)}`]},h=ct(f,ak,c);return{...c,...h}},a0=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],ck=je(jd,{shouldForwardProp:e=>t0(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[o.variant],n[`${o.variant}${Se(o.color)}`],n[`size${Se(o.size)}`],n[`${o.variant}Size${Se(o.size)}`],o.color==="inherit"&&n.colorInherit,o.disableElevation&&n.disableElevation,o.fullWidth&&n.fullWidth]}})(Xt(({theme:e})=>{const n=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],o=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return{...e.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${To.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(e.vars||e).shadows[2],"&:hover":{boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2]}},"&:active":{boxShadow:(e.vars||e).shadows[8]},[`&.${To.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]},[`&.${To.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${To.disabled}`]:{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(e.palette).filter(Xi()).map(([i])=>({props:{color:i},style:{"--variant-textColor":(e.vars||e).palette[i].main,"--variant-outlinedColor":(e.vars||e).palette[i].main,"--variant-outlinedBorder":e.vars?`rgba(${e.vars.palette[i].mainChannel} / 0.5)`:_n(e.palette[i].main,.5),"--variant-containedColor":(e.vars||e).palette[i].contrastText,"--variant-containedBg":(e.vars||e).palette[i].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(e.vars||e).palette[i].dark,"--variant-textBg":e.vars?`rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:_n(e.palette[i].main,e.palette.action.hoverOpacity),"--variant-outlinedBorder":(e.vars||e).palette[i].main,"--variant-outlinedBg":e.vars?`rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:_n(e.palette[i].main,e.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedBg:n,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedHoverBg:o,"--variant-textBg":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:_n(e.palette.text.primary,e.palette.action.hoverOpacity),"--variant-outlinedBg":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:_n(e.palette.text.primary,e.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${To.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${To.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),dk=je("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.startIcon,n[`iconSize${Se(o.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...a0]}),fk=je("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.endIcon,n[`iconSize${Se(o.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...a0]}),s0=A.forwardRef(function(n,o){const i=A.useContext(sk),s=A.useContext(lk),l=Ki(i,n),c=it({props:l,name:"MuiButton"}),{children:f,color:h="primary",component:m="button",className:y,disabled:v=!1,disableElevation:w=!1,disableFocusRipple:R=!1,endIcon:S,focusVisibleClassName:x,fullWidth:P=!1,size:$="medium",startIcon:U,type:j,variant:_="text",...C}=c,z={...c,color:h,component:m,disabled:v,disableElevation:w,disableFocusRipple:R,fullWidth:P,size:$,type:j,variant:_},L=uk(z),J=U&&M.jsx(dk,{className:L.startIcon,ownerState:z,children:U}),Z=S&&M.jsx(fk,{className:L.endIcon,ownerState:z,children:S}),b=s||"";return M.jsxs(ck,{ownerState:z,className:Ee(i.className,L.root,y,b),component:m,disabled:v,focusRipple:!R,focusVisibleClassName:Ee(L.focusVisible,x),ref:o,type:j,...C,classes:L,children:[J,f,Z]})});function pk(e){return ot("MuiCard",e)}dt("MuiCard",["root"]);const hk=e=>{const{classes:n}=e;return ct({root:["root"]},pk,n)},mk=je(ll,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})({overflow:"hidden"}),gk=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiCard"}),{className:s,raised:l=!1,...c}=i,f={...i,raised:l},h=hk(f);return M.jsx(mk,{className:Ee(h.root,s),elevation:l?8:void 0,ref:o,ownerState:f,...c})});function yk(e){return ot("MuiCardActionArea",e)}const vc=dt("MuiCardActionArea",["root","focusVisible","focusHighlight"]),vk=e=>{const{classes:n}=e;return ct({root:["root"],focusHighlight:["focusHighlight"]},yk,n)},bk=je(jd,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,n)=>n.root})(Xt(({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${vc.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${vc.focusVisible} .${vc.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}}))),xk=je("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,n)=>n.focusHighlight})(Xt(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}))),Sk=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiCardActionArea"}),{children:s,className:l,focusVisibleClassName:c,...f}=i,h=i,m=vk(h);return M.jsxs(bk,{className:Ee(m.root,l),focusVisibleClassName:Ee(c,m.focusVisible),ref:o,ownerState:h,...f,children:[s,M.jsx(xk,{className:m.focusHighlight,ownerState:h})]})});function wk(e){return ot("MuiCardActions",e)}dt("MuiCardActions",["root","spacing"]);const kk=e=>{const{classes:n,disableSpacing:o}=e;return ct({root:["root",!o&&"spacing"]},wk,n)},Ck=je("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,!o.disableSpacing&&n.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),Pk=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiCardActions"}),{disableSpacing:s=!1,className:l,...c}=i,f={...i,disableSpacing:s},h=kk(f);return M.jsx(Ck,{className:Ee(h.root,l),ownerState:f,ref:o,...c})});function Ek(e){return ot("MuiCardContent",e)}dt("MuiCardContent",["root"]);const Rk=e=>{const{classes:n}=e;return ct({root:["root"]},Ek,n)},Tk=je("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,n)=>n.root})({padding:16,"&:last-child":{paddingBottom:24}}),Ok=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiCardContent"}),{className:s,component:l="div",...c}=i,f={...i,component:l},h=Rk(f);return M.jsx(Tk,{as:l,className:Ee(h.root,s),ownerState:f,ref:o,...c})});function _k(e){const n=Yr(e);return n.body===e?js(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Fi(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Em(e){return parseInt(js(e).getComputedStyle(e).paddingRight,10)||0}function Ak(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(e.tagName),i=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||i}function Rm(e,n,o,i,s){const l=[n,o,...i];[].forEach.call(e.children,c=>{const f=!l.includes(c),h=!Ak(c);f&&h&&Fi(c,s)})}function bc(e,n){let o=-1;return e.some((i,s)=>n(i)?(o=s,!0):!1),o}function Mk(e,n){const o=[],i=e.container;if(!n.disableScrollLock){if(_k(i)){const c=_x(js(i));o.push({value:i.style.paddingRight,property:"padding-right",el:i}),i.style.paddingRight=`${Em(i)+c}px`;const f=Yr(i).querySelectorAll(".mui-fixed");[].forEach.call(f,h=>{o.push({value:h.style.paddingRight,property:"padding-right",el:h}),h.style.paddingRight=`${Em(h)+c}px`})}let l;if(i.parentNode instanceof DocumentFragment)l=Yr(i).body;else{const c=i.parentElement,f=js(i);l=(c==null?void 0:c.nodeName)==="HTML"&&f.getComputedStyle(c).overflowY==="scroll"?c:i}o.push({value:l.style.overflow,property:"overflow",el:l},{value:l.style.overflowX,property:"overflow-x",el:l},{value:l.style.overflowY,property:"overflow-y",el:l}),l.style.overflow="hidden"}return()=>{o.forEach(({value:l,el:c,property:f})=>{l?c.style.setProperty(f,l):c.style.removeProperty(f)})}}function Nk(e){const n=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&n.push(o)}),n}class zk{constructor(){this.modals=[],this.containers=[]}add(n,o){let i=this.modals.indexOf(n);if(i!==-1)return i;i=this.modals.length,this.modals.push(n),n.modalRef&&Fi(n.modalRef,!1);const s=Nk(o);Rm(o,n.mount,n.modalRef,s,!0);const l=bc(this.containers,c=>c.container===o);return l!==-1?(this.containers[l].modals.push(n),i):(this.containers.push({modals:[n],container:o,restore:null,hiddenSiblings:s}),i)}mount(n,o){const i=bc(this.containers,l=>l.modals.includes(n)),s=this.containers[i];s.restore||(s.restore=Mk(s,o))}remove(n,o=!0){const i=this.modals.indexOf(n);if(i===-1)return i;const s=bc(this.containers,c=>c.modals.includes(n)),l=this.containers[s];if(l.modals.splice(l.modals.indexOf(n),1),this.modals.splice(i,1),l.modals.length===0)l.restore&&l.restore(),n.modalRef&&Fi(n.modalRef,o),Rm(l.container,n.mount,n.modalRef,l.hiddenSiblings,!1),this.containers.splice(s,1);else{const c=l.modals[l.modals.length-1];c.modalRef&&Fi(c.modalRef,!1)}return i}isTopModal(n){return this.modals.length>0&&this.modals[this.modals.length-1]===n}}const jk=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Dk(e){const n=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(n)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:n}function $k(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const n=i=>e.ownerDocument.querySelector(`input[type="radio"]${i}`);let o=n(`[name="${e.name}"]:checked`);return o||(o=n(`[name="${e.name}"]`)),o!==e}function Ik(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||$k(e))}function Lk(e){const n=[],o=[];return Array.from(e.querySelectorAll(jk)).forEach((i,s)=>{const l=Dk(i);l===-1||!Ik(i)||(l===0?n.push(i):o.push({documentOrder:s,tabIndex:l,node:i}))}),o.sort((i,s)=>i.tabIndex===s.tabIndex?i.documentOrder-s.documentOrder:i.tabIndex-s.tabIndex).map(i=>i.node).concat(n)}function Bk(){return!0}function Fk(e){const{children:n,disableAutoFocus:o=!1,disableEnforceFocus:i=!1,disableRestoreFocus:s=!1,getTabbable:l=Lk,isEnabled:c=Bk,open:f}=e,h=A.useRef(!1),m=A.useRef(null),y=A.useRef(null),v=A.useRef(null),w=A.useRef(null),R=A.useRef(!1),S=A.useRef(null),x=wr(Rd(n),S),P=A.useRef(null);A.useEffect(()=>{!f||!S.current||(R.current=!o)},[o,f]),A.useEffect(()=>{if(!f||!S.current)return;const j=Yr(S.current);return S.current.contains(j.activeElement)||(S.current.hasAttribute("tabIndex")||S.current.setAttribute("tabIndex","-1"),R.current&&S.current.focus()),()=>{s||(v.current&&v.current.focus&&(h.current=!0,v.current.focus()),v.current=null)}},[f]),A.useEffect(()=>{if(!f||!S.current)return;const j=Yr(S.current),_=L=>{P.current=L,!(i||!c()||L.key!=="Tab")&&j.activeElement===S.current&&L.shiftKey&&(h.current=!0,y.current&&y.current.focus())},C=()=>{var Z,b;const L=S.current;if(L===null)return;if(!j.hasFocus()||!c()||h.current){h.current=!1;return}if(L.contains(j.activeElement)||i&&j.activeElement!==m.current&&j.activeElement!==y.current)return;if(j.activeElement!==w.current)w.current=null;else if(w.current!==null)return;if(!R.current)return;let J=[];if((j.activeElement===m.current||j.activeElement===y.current)&&(J=l(S.current)),J.length>0){const X=!!((Z=P.current)!=null&&Z.shiftKey&&((b=P.current)==null?void 0:b.key)==="Tab"),ee=J[0],re=J[J.length-1];typeof ee!="string"&&typeof re!="string"&&(X?re.focus():ee.focus())}else L.focus()};j.addEventListener("focusin",C),j.addEventListener("keydown",_,!0);const z=setInterval(()=>{j.activeElement&&j.activeElement.tagName==="BODY"&&C()},50);return()=>{clearInterval(z),j.removeEventListener("focusin",C),j.removeEventListener("keydown",_,!0)}},[o,i,s,c,f,l]);const $=j=>{v.current===null&&(v.current=j.relatedTarget),R.current=!0,w.current=j.target;const _=n.props.onFocus;_&&_(j)},U=j=>{v.current===null&&(v.current=j.relatedTarget),R.current=!0};return M.jsxs(A.Fragment,{children:[M.jsx("div",{tabIndex:f?0:-1,onFocus:U,ref:m,"data-testid":"sentinelStart"}),A.cloneElement(n,{ref:x,onFocus:$}),M.jsx("div",{tabIndex:f?0:-1,onFocus:U,ref:y,"data-testid":"sentinelEnd"})]})}function Uk(e){return typeof e=="function"?e():e}function Wk(e){return e?e.props.hasOwnProperty("in"):!1}const ws=new zk;function qk(e){const{container:n,disableEscapeKeyDown:o=!1,disableScrollLock:i=!1,closeAfterTransition:s=!1,onTransitionEnter:l,onTransitionExited:c,children:f,onClose:h,open:m,rootRef:y}=e,v=A.useRef({}),w=A.useRef(null),R=A.useRef(null),S=wr(R,y),[x,P]=A.useState(!m),$=Wk(f);let U=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(U=!1);const j=()=>Yr(w.current),_=()=>(v.current.modalRef=R.current,v.current.mount=w.current,v.current),C=()=>{ws.mount(_(),{disableScrollLock:i}),R.current&&(R.current.scrollTop=0)},z=No(()=>{const ie=Uk(n)||j().body;ws.add(_(),ie),R.current&&C()}),L=()=>ws.isTopModal(_()),J=No(ie=>{w.current=ie,ie&&(m&&L()?C():R.current&&Fi(R.current,U))}),Z=A.useCallback(()=>{ws.remove(_(),U)},[U]);A.useEffect(()=>()=>{Z()},[Z]),A.useEffect(()=>{m?z():(!$||!s)&&Z()},[m,Z,$,s,z]);const b=ie=>le=>{var ge;(ge=ie.onKeyDown)==null||ge.call(ie,le),!(le.key!=="Escape"||le.which===229||!L())&&(o||(le.stopPropagation(),h&&h(le,"escapeKeyDown")))},X=ie=>le=>{var ge;(ge=ie.onClick)==null||ge.call(ie,le),le.target===le.currentTarget&&h&&h(le,"backdropClick")};return{getRootProps:(ie={})=>{const le=Ug(e);delete le.onTransitionEnter,delete le.onTransitionExited;const ge={...le,...ie};return{role:"presentation",...ge,onKeyDown:b(ge),ref:S}},getBackdropProps:(ie={})=>{const le=ie;return{"aria-hidden":!0,...le,onClick:X(le),open:m}},getTransitionProps:()=>{const ie=()=>{P(!1),l&&l()},le=()=>{P(!0),c&&c(),s&&Z()};return{onEnter:nm(ie,f==null?void 0:f.props.onEnter),onExited:nm(le,f==null?void 0:f.props.onExited)}},rootRef:S,portalRef:J,isTopModal:L,exited:x,hasTransition:$}}function Hk(e){return ot("MuiModal",e)}dt("MuiModal",["root","hidden","backdrop"]);const Vk=e=>{const{open:n,exited:o,classes:i}=e;return ct({root:["root",!n&&o&&"hidden"],backdrop:["backdrop"]},Hk,i)},Gk=je("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,!o.open&&o.exited&&n.hidden]}})(Xt(({theme:e})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:n})=>!n.open&&n.exited,style:{visibility:"hidden"}}]}))),Kk=je(Dd,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,n)=>n.backdrop})({zIndex:-1}),Yk=A.forwardRef(function(n,o){const i=it({name:"MuiModal",props:n}),{BackdropComponent:s=Kk,BackdropProps:l,classes:c,className:f,closeAfterTransition:h=!1,children:m,container:y,component:v,components:w={},componentsProps:R={},disableAutoFocus:S=!1,disableEnforceFocus:x=!1,disableEscapeKeyDown:P=!1,disablePortal:$=!1,disableRestoreFocus:U=!1,disableScrollLock:j=!1,hideBackdrop:_=!1,keepMounted:C=!1,onBackdropClick:z,onClose:L,onTransitionEnter:J,onTransitionExited:Z,open:b,slotProps:X={},slots:ee={},theme:re,...oe}=i,ie={...i,closeAfterTransition:h,disableAutoFocus:S,disableEnforceFocus:x,disableEscapeKeyDown:P,disablePortal:$,disableRestoreFocus:U,disableScrollLock:j,hideBackdrop:_,keepMounted:C},{getRootProps:le,getBackdropProps:ge,getTransitionProps:G,portalRef:te,isTopModal:Q,exited:T,hasTransition:q}=qk({...ie,rootRef:o}),pe={...ie,exited:T},ce=Vk(pe),be={};if(m.props.tabIndex===void 0&&(be.tabIndex="-1"),q){const{onEnter:Mt,onExited:Nt}=G();be.onEnter=Mt,be.onExited=Nt}const ke={...oe,slots:{root:w.Root,backdrop:w.Backdrop,...ee},slotProps:{...R,...X}},[Oe,Re]=Ls("root",{elementType:Gk,externalForwardedProps:ke,getSlotProps:le,additionalProps:{ref:o,as:v},ownerState:pe,className:Ee(f,ce==null?void 0:ce.root,!pe.open&&pe.exited&&(ce==null?void 0:ce.hidden))}),[Ae,et]=Ls("backdrop",{elementType:s,externalForwardedProps:ke,additionalProps:l,getSlotProps:Mt=>ge({...Mt,onClick:Nt=>{z&&z(Nt),Mt!=null&&Mt.onClick&&Mt.onClick(Nt)}}),className:Ee(l==null?void 0:l.className,ce==null?void 0:ce.backdrop),ownerState:pe}),ln=wr(l==null?void 0:l.ref,et.ref);return!C&&!b&&(!q||T)?null:M.jsx(Jw,{ref:te,container:y,disablePortal:$,children:M.jsxs(Oe,{...Re,children:[!_&&s?M.jsx(Ae,{...et,ref:ln}):null,M.jsx(Fk,{disableEnforceFocus:x,disableAutoFocus:S,disableRestoreFocus:U,isEnabled:Q,open:b,children:A.cloneElement(m,be)})]})})});function Xk(e){return ot("MuiDialog",e)}const xc=dt("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),l0=A.createContext({}),Qk=je(Dd,{name:"MuiDialog",slot:"Backdrop",overrides:(e,n)=>n.backdrop})({zIndex:-1}),Jk=e=>{const{classes:n,scroll:o,maxWidth:i,fullWidth:s,fullScreen:l}=e,c={root:["root"],container:["container",`scroll${Se(o)}`],paper:["paper",`paperScroll${Se(o)}`,`paperWidth${Se(String(i))}`,s&&"paperFullWidth",l&&"paperFullScreen"]};return ct(c,Xk,n)},Zk=je(Yk,{name:"MuiDialog",slot:"Root",overridesResolver:(e,n)=>n.root})({"@media print":{position:"absolute !important"}}),e5=je("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.container,n[`scroll${Se(o.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),t5=je(ll,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.paper,n[`scrollPaper${Se(o.scroll)}`],n[`paperWidth${Se(String(o.maxWidth))}`],o.fullWidth&&n.paperFullWidth,o.fullScreen&&n.paperFullScreen]}})(Xt(({theme:e})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:n})=>!n.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${xc.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(e.breakpoints.values).filter(n=>n!=="xs").map(n=>({props:{maxWidth:n},style:{maxWidth:`${e.breakpoints.values[n]}${e.breakpoints.unit}`,[`&.${xc.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[n]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:n})=>n.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:n})=>n.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${xc.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),n5=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiDialog"}),s=Ad(),l={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":c,"aria-labelledby":f,"aria-modal":h=!0,BackdropComponent:m,BackdropProps:y,children:v,className:w,disableEscapeKeyDown:R=!1,fullScreen:S=!1,fullWidth:x=!1,maxWidth:P="sm",onBackdropClick:$,onClick:U,onClose:j,open:_,PaperComponent:C=ll,PaperProps:z={},scroll:L="paper",TransitionComponent:J=i0,transitionDuration:Z=l,TransitionProps:b,...X}=i,ee={...i,disableEscapeKeyDown:R,fullScreen:S,fullWidth:x,maxWidth:P,scroll:L},re=Jk(ee),oe=A.useRef(),ie=te=>{oe.current=te.target===te.currentTarget},le=te=>{U&&U(te),oe.current&&(oe.current=null,$&&$(te),j&&j(te,"backdropClick"))},ge=Ex(f),G=A.useMemo(()=>({titleId:ge}),[ge]);return M.jsx(Zk,{className:Ee(re.root,w),closeAfterTransition:!0,components:{Backdrop:Qk},componentsProps:{backdrop:{transitionDuration:Z,as:m,...y}},disableEscapeKeyDown:R,onClose:j,open:_,ref:o,onClick:le,ownerState:ee,...X,children:M.jsx(J,{appear:!0,in:_,timeout:Z,role:"presentation",...b,children:M.jsx(e5,{className:Ee(re.container),onMouseDown:ie,ownerState:ee,children:M.jsx(t5,{as:C,elevation:24,role:"dialog","aria-describedby":c,"aria-labelledby":ge,"aria-modal":h,...z,className:Ee(re.paper,z.className),ownerState:ee,children:M.jsx(l0.Provider,{value:G,children:v})})})})})});function r5(e){return ot("MuiDialogActions",e)}dt("MuiDialogActions",["root","spacing"]);const o5=e=>{const{classes:n,disableSpacing:o}=e;return ct({root:["root",!o&&"spacing"]},r5,n)},i5=je("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,!o.disableSpacing&&n.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:e})=>!e.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),a5=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiDialogActions"}),{className:s,disableSpacing:l=!1,...c}=i,f={...i,disableSpacing:l},h=o5(f);return M.jsx(i5,{className:Ee(h.root,s),ownerState:f,ref:o,...c})});function s5(e){return ot("MuiDialogContent",e)}dt("MuiDialogContent",["root","dividers"]);function l5(e){return ot("MuiDialogTitle",e)}const u5=dt("MuiDialogTitle",["root"]),c5=e=>{const{classes:n,dividers:o}=e;return ct({root:["root",o&&"dividers"]},s5,n)},d5=je("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,o.dividers&&n.dividers]}})(Xt(({theme:e})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:n})=>n.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:n})=>!n.dividers,style:{[`.${u5.root} + &`]:{paddingTop:0}}}]}))),f5=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiDialogContent"}),{className:s,dividers:l=!1,...c}=i,f={...i,dividers:l},h=c5(f);return M.jsx(d5,{className:Ee(h.root,s),ownerState:f,ref:o,...c})}),p5=e=>{const{classes:n}=e;return ct({root:["root"]},l5,n)},h5=je(Ce,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,n)=>n.root})({padding:"16px 24px",flex:"0 0 auto"}),m5=A.forwardRef(function(n,o){const i=it({props:n,name:"MuiDialogTitle"}),{className:s,id:l,...c}=i,f=i,h=p5(f),{titleId:m=l}=A.useContext(l0);return M.jsx(h5,{component:"h2",className:Ee(h.root,s),ownerState:f,ref:o,variant:"h6",id:l??m,...c})}),Tm=xS({createStyledComponent:je("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>it({props:e,name:"MuiGrid2"})}),g5=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];function y5(e={}){const{disableGlobal:n=!1,productionPrefix:o="jss",seed:i=""}=e,s=i===""?"":`${i}-`;let l=0;const c=()=>(l+=1,l);return(f,h)=>{const m=h.options.name;if(m&&m.startsWith("Mui")&&!h.options.link&&!n){if(g5.includes(f.key))return`Mui-${f.key}`;const y=`${s}${m}-${f.key}`;return!h.options.theme[qg]||i!==""?y:`${y}-${c()}`}return`${s}${o}${c()}`}}var Om=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ia=(typeof window>"u"?"undefined":Om(window))==="object"&&(typeof document>"u"?"undefined":Om(document))==="object"&&document.nodeType===9;function Qi(e){"@babel/helpers - typeof";return Qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Qi(e)}function v5(e,n){if(Qi(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var i=o.call(e,n);if(Qi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function b5(e){var n=v5(e,"string");return Qi(n)=="symbol"?n:n+""}function x5(e,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,b5(i.key),i)}}function u0(e,n,o){return n&&x5(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var S5={}.constructor;function Yc(e){if(e==null||typeof e!="object")return e;if(Array.isArray(e))return e.map(Yc);if(e.constructor!==S5)return e;var n={};for(var o in e)n[o]=Yc(e[o]);return n}function $d(e,n,o){e===void 0&&(e="unnamed");var i=o.jss,s=Yc(n),l=i.plugins.onCreateRule(e,s,o);return l||(e[0],null)}var _m=function(n,o){for(var i="",s=0;s<n.length&&n[s]!=="!important";s++)i&&(i+=o),i+=n[s];return i},Vr=function(n){if(!Array.isArray(n))return n;var o="";if(Array.isArray(n[0]))for(var i=0;i<n.length&&n[i]!=="!important";i++)o&&(o+=", "),o+=_m(n[i]," ");else o=_m(n,", ");return n[n.length-1]==="!important"&&(o+=" !important"),o};function Uo(e){return e&&e.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function Mi(e,n){for(var o="",i=0;i<n;i++)o+="  ";return o+e}function Ji(e,n,o){o===void 0&&(o={});var i="";if(!n)return i;var s=o,l=s.indent,c=l===void 0?0:l,f=n.fallbacks;o.format===!1&&(c=-1/0);var h=Uo(o),m=h.linebreak,y=h.space;if(e&&c++,f)if(Array.isArray(f))for(var v=0;v<f.length;v++){var w=f[v];for(var R in w){var S=w[R];S!=null&&(i&&(i+=m),i+=Mi(R+":"+y+Vr(S)+";",c))}}else for(var x in f){var P=f[x];P!=null&&(i&&(i+=m),i+=Mi(x+":"+y+Vr(P)+";",c))}for(var $ in n){var U=n[$];U!=null&&$!=="fallbacks"&&(i&&(i+=m),i+=Mi($+":"+y+Vr(U)+";",c))}return!i&&!o.allowEmpty||!e?i:(c--,i&&(i=""+m+i+m),Mi(""+e+y+"{"+i,c)+Mi("}",c))}var w5=/([[\].#*$><+~=|^:(),"'`\s])/g,Am=typeof CSS<"u"&&CSS.escape,Id=function(e){return Am?Am(e):e.replace(w5,"\\$1")},c0=function(){function e(o,i,s){this.type="style",this.isProcessed=!1;var l=s.sheet,c=s.Renderer;this.key=o,this.options=s,this.style=i,l?this.renderer=l.renderer:c&&(this.renderer=new c)}var n=e.prototype;return n.prop=function(i,s,l){if(s===void 0)return this.style[i];var c=l?l.force:!1;if(!c&&this.style[i]===s)return this;var f=s;(!l||l.process!==!1)&&(f=this.options.jss.plugins.onChangeValue(s,i,this));var h=f==null||f===!1,m=i in this.style;if(h&&!m&&!c)return this;var y=h&&m;if(y?delete this.style[i]:this.style[i]=f,this.renderable&&this.renderer)return y?this.renderer.removeProperty(this.renderable,i):this.renderer.setProperty(this.renderable,i,f),this;var v=this.options.sheet;return v&&v.attached,this},e}(),Xc=function(e){ul(n,e);function n(i,s,l){var c;c=e.call(this,i,s,l)||this;var f=l.selector,h=l.scoped,m=l.sheet,y=l.generateId;return f?c.selectorText=f:h!==!1&&(c.id=y(Gc(Gc(c)),m),c.selectorText="."+Id(c.id)),c}var o=n.prototype;return o.applyTo=function(s){var l=this.renderer;if(l){var c=this.toJSON();for(var f in c)l.setProperty(s,f,c[f])}return this},o.toJSON=function(){var s={};for(var l in this.style){var c=this.style[l];typeof c!="object"?s[l]=c:Array.isArray(c)&&(s[l]=Vr(c))}return s},o.toString=function(s){var l=this.options.sheet,c=l?l.options.link:!1,f=c?Xe({},s,{allowEmpty:!0}):s;return Ji(this.selectorText,this.style,f)},u0(n,[{key:"selector",set:function(s){if(s!==this.selectorText){this.selectorText=s;var l=this.renderer,c=this.renderable;if(!(!c||!l)){var f=l.setSelector(c,s);f||l.replaceRule(c,this)}}},get:function(){return this.selectorText}}]),n}(c0),k5={onCreateRule:function(n,o,i){return n[0]==="@"||i.parent&&i.parent.type==="keyframes"?null:new Xc(n,o,i)}},Sc={indent:1,children:!0},C5=/@([\w-]+)/,P5=function(){function e(o,i,s){this.type="conditional",this.isProcessed=!1,this.key=o;var l=o.match(C5);this.at=l?l[1]:"unknown",this.query=s.name||"@"+this.at,this.options=s,this.rules=new cl(Xe({},s,{parent:this}));for(var c in i)this.rules.add(c,i[c]);this.rules.process()}var n=e.prototype;return n.getRule=function(i){return this.rules.get(i)},n.indexOf=function(i){return this.rules.indexOf(i)},n.addRule=function(i,s,l){var c=this.rules.add(i,s,l);return c?(this.options.jss.plugins.onProcessRule(c),c):null},n.replaceRule=function(i,s,l){var c=this.rules.replace(i,s,l);return c&&this.options.jss.plugins.onProcessRule(c),c},n.toString=function(i){i===void 0&&(i=Sc);var s=Uo(i),l=s.linebreak;if(i.indent==null&&(i.indent=Sc.indent),i.children==null&&(i.children=Sc.children),i.children===!1)return this.query+" {}";var c=this.rules.toString(i);return c?this.query+" {"+l+c+l+"}":""},e}(),E5=/@container|@media|@supports\s+/,R5={onCreateRule:function(n,o,i){return E5.test(n)?new P5(n,o,i):null}},wc={indent:1,children:!0},T5=/@keyframes\s+([\w-]+)/,Qc=function(){function e(o,i,s){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var l=o.match(T5);l&&l[1]?this.name=l[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=s;var c=s.scoped,f=s.sheet,h=s.generateId;this.id=c===!1?this.name:Id(h(this,f)),this.rules=new cl(Xe({},s,{parent:this}));for(var m in i)this.rules.add(m,i[m],Xe({},s,{parent:this}));this.rules.process()}var n=e.prototype;return n.toString=function(i){i===void 0&&(i=wc);var s=Uo(i),l=s.linebreak;if(i.indent==null&&(i.indent=wc.indent),i.children==null&&(i.children=wc.children),i.children===!1)return this.at+" "+this.id+" {}";var c=this.rules.toString(i);return c&&(c=""+l+c+l),this.at+" "+this.id+" {"+c+"}"},e}(),O5=/@keyframes\s+/,_5=/\$([\w-]+)/g,Jc=function(n,o){return typeof n=="string"?n.replace(_5,function(i,s){return s in o?o[s]:i}):n},Mm=function(n,o,i){var s=n[o],l=Jc(s,i);l!==s&&(n[o]=l)},A5={onCreateRule:function(n,o,i){return typeof n=="string"&&O5.test(n)?new Qc(n,o,i):null},onProcessStyle:function(n,o,i){return o.type!=="style"||!i||("animation-name"in n&&Mm(n,"animation-name",i.keyframes),"animation"in n&&Mm(n,"animation",i.keyframes)),n},onChangeValue:function(n,o,i){var s=i.options.sheet;if(!s)return n;switch(o){case"animation":return Jc(n,s.keyframes);case"animation-name":return Jc(n,s.keyframes);default:return n}}},M5=function(e){ul(n,e);function n(){return e.apply(this,arguments)||this}var o=n.prototype;return o.toString=function(s){var l=this.options.sheet,c=l?l.options.link:!1,f=c?Xe({},s,{allowEmpty:!0}):s;return Ji(this.key,this.style,f)},n}(c0),N5={onCreateRule:function(n,o,i){return i.parent&&i.parent.type==="keyframes"?new M5(n,o,i):null}},z5=function(){function e(o,i,s){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=o,this.style=i,this.options=s}var n=e.prototype;return n.toString=function(i){var s=Uo(i),l=s.linebreak;if(Array.isArray(this.style)){for(var c="",f=0;f<this.style.length;f++)c+=Ji(this.at,this.style[f]),this.style[f+1]&&(c+=l);return c}return Ji(this.at,this.style,i)},e}(),j5=/@font-face/,D5={onCreateRule:function(n,o,i){return j5.test(n)?new z5(n,o,i):null}},$5=function(){function e(o,i,s){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=o,this.style=i,this.options=s}var n=e.prototype;return n.toString=function(i){return Ji(this.key,this.style,i)},e}(),I5={onCreateRule:function(n,o,i){return n==="@viewport"||n==="@-ms-viewport"?new $5(n,o,i):null}},L5=function(){function e(o,i,s){this.type="simple",this.isProcessed=!1,this.key=o,this.value=i,this.options=s}var n=e.prototype;return n.toString=function(i){if(Array.isArray(this.value)){for(var s="",l=0;l<this.value.length;l++)s+=this.key+" "+this.value[l]+";",this.value[l+1]&&(s+=`
`);return s}return this.key+" "+this.value+";"},e}(),B5={"@charset":!0,"@import":!0,"@namespace":!0},F5={onCreateRule:function(n,o,i){return n in B5?new L5(n,o,i):null}},Nm=[k5,R5,A5,N5,D5,I5,F5],U5={process:!0},zm={force:!0,process:!0},cl=function(){function e(o){this.map={},this.raw={},this.index=[],this.counter=0,this.options=o,this.classes=o.classes,this.keyframes=o.keyframes}var n=e.prototype;return n.add=function(i,s,l){var c=this.options,f=c.parent,h=c.sheet,m=c.jss,y=c.Renderer,v=c.generateId,w=c.scoped,R=Xe({classes:this.classes,parent:f,sheet:h,jss:m,Renderer:y,generateId:v,scoped:w,name:i,keyframes:this.keyframes,selector:void 0},l),S=i;i in this.raw&&(S=i+"-d"+this.counter++),this.raw[S]=s,S in this.classes&&(R.selector="."+Id(this.classes[S]));var x=$d(S,s,R);if(!x)return null;this.register(x);var P=R.index===void 0?this.index.length:R.index;return this.index.splice(P,0,x),x},n.replace=function(i,s,l){var c=this.get(i),f=this.index.indexOf(c);c&&this.remove(c);var h=l;return f!==-1&&(h=Xe({},l,{index:f})),this.add(i,s,h)},n.get=function(i){return this.map[i]},n.remove=function(i){this.unregister(i),delete this.raw[i.key],this.index.splice(this.index.indexOf(i),1)},n.indexOf=function(i){return this.index.indexOf(i)},n.process=function(){var i=this.options.jss.plugins;this.index.slice(0).forEach(i.onProcessRule,i)},n.register=function(i){this.map[i.key]=i,i instanceof Xc?(this.map[i.selector]=i,i.id&&(this.classes[i.key]=i.id)):i instanceof Qc&&this.keyframes&&(this.keyframes[i.name]=i.id)},n.unregister=function(i){delete this.map[i.key],i instanceof Xc?(delete this.map[i.selector],delete this.classes[i.key]):i instanceof Qc&&delete this.keyframes[i.name]},n.update=function(){var i,s,l;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(i=arguments.length<=0?void 0:arguments[0],s=arguments.length<=1?void 0:arguments[1],l=arguments.length<=2?void 0:arguments[2]):(s=arguments.length<=0?void 0:arguments[0],l=arguments.length<=1?void 0:arguments[1],i=null),i)this.updateOne(this.get(i),s,l);else for(var c=0;c<this.index.length;c++)this.updateOne(this.index[c],s,l)},n.updateOne=function(i,s,l){l===void 0&&(l=U5);var c=this.options,f=c.jss.plugins,h=c.sheet;if(i.rules instanceof e){i.rules.update(s,l);return}var m=i.style;if(f.onUpdate(s,i,h,l),l.process&&m&&m!==i.style){f.onProcessStyle(i.style,i,h);for(var y in i.style){var v=i.style[y],w=m[y];v!==w&&i.prop(y,v,zm)}for(var R in m){var S=i.style[R],x=m[R];S==null&&S!==x&&i.prop(R,null,zm)}}},n.toString=function(i){for(var s="",l=this.options.sheet,c=l?l.options.link:!1,f=Uo(i),h=f.linebreak,m=0;m<this.index.length;m++){var y=this.index[m],v=y.toString(i);!v&&!c||(s&&(s+=h),s+=v)}return s},e}(),d0=function(){function e(o,i){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=Xe({},i,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),i.Renderer&&(this.renderer=new i.Renderer(this)),this.rules=new cl(this.options);for(var s in o)this.rules.add(s,o[s]);this.rules.process()}var n=e.prototype;return n.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},n.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},n.addRule=function(i,s,l){var c=this.queue;this.attached&&!c&&(this.queue=[]);var f=this.rules.add(i,s,l);return f?(this.options.jss.plugins.onProcessRule(f),this.attached?(this.deployed&&(c?c.push(f):(this.insertRule(f),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),f):(this.deployed=!1,f)):null},n.replaceRule=function(i,s,l){var c=this.rules.get(i);if(!c)return this.addRule(i,s,l);var f=this.rules.replace(i,s,l);return f&&this.options.jss.plugins.onProcessRule(f),this.attached?(this.deployed&&this.renderer&&(f?c.renderable&&this.renderer.replaceRule(c.renderable,f):this.renderer.deleteRule(c)),f):(this.deployed=!1,f)},n.insertRule=function(i){this.renderer&&this.renderer.insertRule(i)},n.addRules=function(i,s){var l=[];for(var c in i){var f=this.addRule(c,i[c],s);f&&l.push(f)}return l},n.getRule=function(i){return this.rules.get(i)},n.deleteRule=function(i){var s=typeof i=="object"?i:this.rules.get(i);return!s||this.attached&&!s.renderable?!1:(this.rules.remove(s),this.attached&&s.renderable&&this.renderer?this.renderer.deleteRule(s.renderable):!0)},n.indexOf=function(i){return this.rules.indexOf(i)},n.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},n.update=function(){var i;return(i=this.rules).update.apply(i,arguments),this},n.updateOne=function(i,s,l){return this.rules.updateOne(i,s,l),this},n.toString=function(i){return this.rules.toString(i)},e}(),W5=function(){function e(){this.plugins={internal:[],external:[]},this.registry={}}var n=e.prototype;return n.onCreateRule=function(i,s,l){for(var c=0;c<this.registry.onCreateRule.length;c++){var f=this.registry.onCreateRule[c](i,s,l);if(f)return f}return null},n.onProcessRule=function(i){if(!i.isProcessed){for(var s=i.options.sheet,l=0;l<this.registry.onProcessRule.length;l++)this.registry.onProcessRule[l](i,s);i.style&&this.onProcessStyle(i.style,i,s),i.isProcessed=!0}},n.onProcessStyle=function(i,s,l){for(var c=0;c<this.registry.onProcessStyle.length;c++)s.style=this.registry.onProcessStyle[c](s.style,s,l)},n.onProcessSheet=function(i){for(var s=0;s<this.registry.onProcessSheet.length;s++)this.registry.onProcessSheet[s](i)},n.onUpdate=function(i,s,l,c){for(var f=0;f<this.registry.onUpdate.length;f++)this.registry.onUpdate[f](i,s,l,c)},n.onChangeValue=function(i,s,l){for(var c=i,f=0;f<this.registry.onChangeValue.length;f++)c=this.registry.onChangeValue[f](c,s,l);return c},n.use=function(i,s){s===void 0&&(s={queue:"external"});var l=this.plugins[s.queue];l.indexOf(i)===-1&&(l.push(i),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(c,f){for(var h in f)h in c&&c[h].push(f[h]);return c},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e}(),q5=function(){function e(){this.registry=[]}var n=e.prototype;return n.add=function(i){var s=this.registry,l=i.options.index;if(s.indexOf(i)===-1){if(s.length===0||l>=this.index){s.push(i);return}for(var c=0;c<s.length;c++)if(s[c].options.index>l){s.splice(c,0,i);return}}},n.reset=function(){this.registry=[]},n.remove=function(i){var s=this.registry.indexOf(i);this.registry.splice(s,1)},n.toString=function(i){for(var s=i===void 0?{}:i,l=s.attached,c=Md(s,["attached"]),f=Uo(c),h=f.linebreak,m="",y=0;y<this.registry.length;y++){var v=this.registry[y];l!=null&&v.attached!==l||(m&&(m+=h),m+=v.toString(c))}return m},u0(e,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),e}(),Ui=new q5,Zc=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),ed="2f1acc6c3a606b082e5eef5e54414ffb";Zc[ed]==null&&(Zc[ed]=0);var jm=Zc[ed]++,Dm=function(n){n===void 0&&(n={});var o=0,i=function(l,c){o+=1;var f="",h="";return c&&(c.options.classNamePrefix&&(h=c.options.classNamePrefix),c.options.jss.id!=null&&(f=String(c.options.jss.id))),n.minify?""+(h||"c")+jm+f+o:h+l.key+"-"+jm+(f?"-"+f:"")+"-"+o};return i},f0=function(n){var o;return function(){return o||(o=n()),o}},H5=function(n,o){try{return n.attributeStyleMap?n.attributeStyleMap.get(o):n.style.getPropertyValue(o)}catch{return""}},V5=function(n,o,i){try{var s=i;if(Array.isArray(i)&&(s=Vr(i)),n.attributeStyleMap)n.attributeStyleMap.set(o,s);else{var l=s?s.indexOf("!important"):-1,c=l>-1?s.substr(0,l-1):s;n.style.setProperty(o,c,l>-1?"important":"")}}catch{return!1}return!0},G5=function(n,o){try{n.attributeStyleMap?n.attributeStyleMap.delete(o):n.style.removeProperty(o)}catch{}},K5=function(n,o){return n.selectorText=o,n.selectorText===o},p0=f0(function(){return document.querySelector("head")});function Y5(e,n){for(var o=0;o<e.length;o++){var i=e[o];if(i.attached&&i.options.index>n.index&&i.options.insertionPoint===n.insertionPoint)return i}return null}function X5(e,n){for(var o=e.length-1;o>=0;o--){var i=e[o];if(i.attached&&i.options.insertionPoint===n.insertionPoint)return i}return null}function Q5(e){for(var n=p0(),o=0;o<n.childNodes.length;o++){var i=n.childNodes[o];if(i.nodeType===8&&i.nodeValue.trim()===e)return i}return null}function J5(e){var n=Ui.registry;if(n.length>0){var o=Y5(n,e);if(o&&o.renderer)return{parent:o.renderer.element.parentNode,node:o.renderer.element};if(o=X5(n,e),o&&o.renderer)return{parent:o.renderer.element.parentNode,node:o.renderer.element.nextSibling}}var i=e.insertionPoint;if(i&&typeof i=="string"){var s=Q5(i);if(s)return{parent:s.parentNode,node:s.nextSibling}}return!1}function Z5(e,n){var o=n.insertionPoint,i=J5(n);if(i!==!1&&i.parent){i.parent.insertBefore(e,i.node);return}if(o&&typeof o.nodeType=="number"){var s=o,l=s.parentNode;l&&l.insertBefore(e,s.nextSibling);return}p0().appendChild(e)}var e2=f0(function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}),$m=function(n,o,i){try{"insertRule"in n?n.insertRule(o,i):"appendRule"in n&&n.appendRule(o)}catch{return!1}return n.cssRules[i]},Im=function(n,o){var i=n.cssRules.length;return o===void 0||o>i?i:o},t2=function(){var n=document.createElement("style");return n.textContent=`
`,n},n2=function(){function e(o){this.getPropertyValue=H5,this.setProperty=V5,this.removeProperty=G5,this.setSelector=K5,this.hasInsertedRules=!1,this.cssRules=[],o&&Ui.add(o),this.sheet=o;var i=this.sheet?this.sheet.options:{},s=i.media,l=i.meta,c=i.element;this.element=c||t2(),this.element.setAttribute("data-jss",""),s&&this.element.setAttribute("media",s),l&&this.element.setAttribute("data-meta",l);var f=e2();f&&this.element.setAttribute("nonce",f)}var n=e.prototype;return n.attach=function(){if(!(this.element.parentNode||!this.sheet)){Z5(this.element,this.sheet.options);var i=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&i&&(this.hasInsertedRules=!1,this.deploy())}},n.detach=function(){if(this.sheet){var i=this.element.parentNode;i&&i.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},n.deploy=function(){var i=this.sheet;if(i){if(i.options.link){this.insertRules(i.rules);return}this.element.textContent=`
`+i.toString()+`
`}},n.insertRules=function(i,s){for(var l=0;l<i.index.length;l++)this.insertRule(i.index[l],l,s)},n.insertRule=function(i,s,l){if(l===void 0&&(l=this.element.sheet),i.rules){var c=i,f=l;if(i.type==="conditional"||i.type==="keyframes"){var h=Im(l,s);if(f=$m(l,c.toString({children:!1}),h),f===!1)return!1;this.refCssRule(i,h,f)}return this.insertRules(c.rules,f),f}var m=i.toString();if(!m)return!1;var y=Im(l,s),v=$m(l,m,y);return v===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(i,y,v),v)},n.refCssRule=function(i,s,l){i.renderable=l,i.options.parent instanceof d0&&this.cssRules.splice(s,0,l)},n.deleteRule=function(i){var s=this.element.sheet,l=this.indexOf(i);return l===-1?!1:(s.deleteRule(l),this.cssRules.splice(l,1),!0)},n.indexOf=function(i){return this.cssRules.indexOf(i)},n.replaceRule=function(i,s){var l=this.indexOf(i);return l===-1?!1:(this.element.sheet.deleteRule(l),this.cssRules.splice(l,1),this.insertRule(s,l))},n.getRules=function(){return this.element.sheet.cssRules},e}(),r2=0,o2=function(){function e(o){this.id=r2++,this.version="10.10.0",this.plugins=new W5,this.options={id:{minify:!1},createGenerateId:Dm,Renderer:ia?n2:null,plugins:[]},this.generateId=Dm({minify:!1});for(var i=0;i<Nm.length;i++)this.plugins.use(Nm[i],{queue:"internal"});this.setup(o)}var n=e.prototype;return n.setup=function(i){return i===void 0&&(i={}),i.createGenerateId&&(this.options.createGenerateId=i.createGenerateId),i.id&&(this.options.id=Xe({},this.options.id,i.id)),(i.createGenerateId||i.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),i.insertionPoint!=null&&(this.options.insertionPoint=i.insertionPoint),"Renderer"in i&&(this.options.Renderer=i.Renderer),i.plugins&&this.use.apply(this,i.plugins),this},n.createStyleSheet=function(i,s){s===void 0&&(s={});var l=s,c=l.index;typeof c!="number"&&(c=Ui.index===0?0:Ui.index+1);var f=new d0(i,Xe({},s,{jss:this,generateId:s.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:c}));return this.plugins.onProcessSheet(f),f},n.removeStyleSheet=function(i){return i.detach(),Ui.remove(i),this},n.createRule=function(i,s,l){if(s===void 0&&(s={}),l===void 0&&(l={}),typeof i=="object")return this.createRule(void 0,i,s);var c=Xe({},l,{name:i,jss:this,Renderer:this.options.Renderer});c.generateId||(c.generateId=this.generateId),c.classes||(c.classes={}),c.keyframes||(c.keyframes={});var f=$d(i,s,c);return f&&this.plugins.onProcessRule(f),f},n.use=function(){for(var i=this,s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return l.forEach(function(f){i.plugins.use(f)}),this},e}(),h0=function(n){return new o2(n)},Ld=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function m0(e){var n=null;for(var o in e){var i=e[o],s=typeof i;if(s==="function")n||(n={}),n[o]=i;else if(s==="object"&&i!==null&&!Array.isArray(i)){var l=m0(i);l&&(n||(n={}),n[o]=l)}}return n}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */h0();var g0=Date.now(),kc="fnValues"+g0,Cc="fnStyle"+ ++g0,i2=function(){return{onCreateRule:function(o,i,s){if(typeof i!="function")return null;var l=$d(o,{},s);return l[Cc]=i,l},onProcessStyle:function(o,i){if(kc in i||Cc in i)return o;var s={};for(var l in o){var c=o[l];typeof c=="function"&&(delete o[l],s[l]=c)}return i[kc]=s,o},onUpdate:function(o,i,s,l){var c=i,f=c[Cc];f&&(c.style=f(o)||{});var h=c[kc];if(h)for(var m in h)c.prop(m,h[m](o),l)}}},br="@global",td="@global ",a2=function(){function e(o,i,s){this.type="global",this.at=br,this.isProcessed=!1,this.key=o,this.options=s,this.rules=new cl(Xe({},s,{parent:this}));for(var l in i)this.rules.add(l,i[l]);this.rules.process()}var n=e.prototype;return n.getRule=function(i){return this.rules.get(i)},n.addRule=function(i,s,l){var c=this.rules.add(i,s,l);return c&&this.options.jss.plugins.onProcessRule(c),c},n.replaceRule=function(i,s,l){var c=this.rules.replace(i,s,l);return c&&this.options.jss.plugins.onProcessRule(c),c},n.indexOf=function(i){return this.rules.indexOf(i)},n.toString=function(i){return this.rules.toString(i)},e}(),s2=function(){function e(o,i,s){this.type="global",this.at=br,this.isProcessed=!1,this.key=o,this.options=s;var l=o.substr(td.length);this.rule=s.jss.createRule(l,i,Xe({},s,{parent:this}))}var n=e.prototype;return n.toString=function(i){return this.rule?this.rule.toString(i):""},e}(),l2=/\s*,\s*/g;function y0(e,n){for(var o=e.split(l2),i="",s=0;s<o.length;s++)i+=n+" "+o[s].trim(),o[s+1]&&(i+=", ");return i}function u2(e,n){var o=e.options,i=e.style,s=i?i[br]:null;if(s){for(var l in s)n.addRule(l,s[l],Xe({},o,{selector:y0(l,e.selector)}));delete i[br]}}function c2(e,n){var o=e.options,i=e.style;for(var s in i)if(!(s[0]!=="@"||s.substr(0,br.length)!==br)){var l=y0(s.substr(br.length),e.selector);n.addRule(l,i[s],Xe({},o,{selector:l})),delete i[s]}}function d2(){function e(o,i,s){if(!o)return null;if(o===br)return new a2(o,i,s);if(o[0]==="@"&&o.substr(0,td.length)===td)return new s2(o,i,s);var l=s.parent;return l&&(l.type==="global"||l.options.parent&&l.options.parent.type==="global")&&(s.scoped=!1),!s.selector&&s.scoped===!1&&(s.selector=o),null}function n(o,i){o.type!=="style"||!i||(u2(o,i),c2(o,i))}return{onCreateRule:e,onProcessRule:n}}var Lm=/\s*,\s*/g,f2=/&/g,p2=/\$([\w-]+)/g;function h2(){function e(s,l){return function(c,f){var h=s.getRule(f)||l&&l.getRule(f);return h?h.selector:f}}function n(s,l){for(var c=l.split(Lm),f=s.split(Lm),h="",m=0;m<c.length;m++)for(var y=c[m],v=0;v<f.length;v++){var w=f[v];h&&(h+=", "),h+=w.indexOf("&")!==-1?w.replace(f2,y):y+" "+w}return h}function o(s,l,c){if(c)return Xe({},c,{index:c.index+1});var f=s.options.nestingLevel;f=f===void 0?1:f+1;var h=Xe({},s.options,{nestingLevel:f,index:l.indexOf(s)+1});return delete h.name,h}function i(s,l,c){if(l.type!=="style")return s;var f=l,h=f.options.parent,m,y;for(var v in s){var w=v.indexOf("&")!==-1,R=v[0]==="@";if(!(!w&&!R)){if(m=o(f,h,m),w){var S=n(v,f.selector);y||(y=e(h,c)),S=S.replace(p2,y);var x=f.key+"-"+v;"replaceRule"in h?h.replaceRule(x,s[v],Xe({},m,{selector:S})):h.addRule(x,s[v],Xe({},m,{selector:S}))}else R&&h.addRule(v,{},m).addRule(f.key,s[v],{selector:f.selector});delete s[v]}}return s}return{onProcessStyle:i}}var m2=/[A-Z]/g,g2=/^ms-/,Pc={};function y2(e){return"-"+e.toLowerCase()}function v0(e){if(Pc.hasOwnProperty(e))return Pc[e];var n=e.replace(m2,y2);return Pc[e]=g2.test(n)?"-"+n:n}function Fs(e){var n={};for(var o in e){var i=o.indexOf("--")===0?o:v0(o);n[i]=e[o]}return e.fallbacks&&(Array.isArray(e.fallbacks)?n.fallbacks=e.fallbacks.map(Fs):n.fallbacks=Fs(e.fallbacks)),n}function v2(){function e(o){if(Array.isArray(o)){for(var i=0;i<o.length;i++)o[i]=Fs(o[i]);return o}return Fs(o)}function n(o,i,s){if(i.indexOf("--")===0)return o;var l=v0(i);return i===l?o:(s.prop(l,o),null)}return{onProcessStyle:e,onChangeValue:n}}var W=Ld&&CSS?CSS.px:"px",ks=Ld&&CSS?CSS.ms:"ms",Oo=Ld&&CSS?CSS.percent:"%",b2={"animation-delay":ks,"animation-duration":ks,"background-position":W,"background-position-x":W,"background-position-y":W,"background-size":W,border:W,"border-bottom":W,"border-bottom-left-radius":W,"border-bottom-right-radius":W,"border-bottom-width":W,"border-left":W,"border-left-width":W,"border-radius":W,"border-right":W,"border-right-width":W,"border-top":W,"border-top-left-radius":W,"border-top-right-radius":W,"border-top-width":W,"border-width":W,"border-block":W,"border-block-end":W,"border-block-end-width":W,"border-block-start":W,"border-block-start-width":W,"border-block-width":W,"border-inline":W,"border-inline-end":W,"border-inline-end-width":W,"border-inline-start":W,"border-inline-start-width":W,"border-inline-width":W,"border-start-start-radius":W,"border-start-end-radius":W,"border-end-start-radius":W,"border-end-end-radius":W,margin:W,"margin-bottom":W,"margin-left":W,"margin-right":W,"margin-top":W,"margin-block":W,"margin-block-end":W,"margin-block-start":W,"margin-inline":W,"margin-inline-end":W,"margin-inline-start":W,padding:W,"padding-bottom":W,"padding-left":W,"padding-right":W,"padding-top":W,"padding-block":W,"padding-block-end":W,"padding-block-start":W,"padding-inline":W,"padding-inline-end":W,"padding-inline-start":W,"mask-position-x":W,"mask-position-y":W,"mask-size":W,height:W,width:W,"min-height":W,"max-height":W,"min-width":W,"max-width":W,bottom:W,left:W,top:W,right:W,inset:W,"inset-block":W,"inset-block-end":W,"inset-block-start":W,"inset-inline":W,"inset-inline-end":W,"inset-inline-start":W,"box-shadow":W,"text-shadow":W,"column-gap":W,"column-rule":W,"column-rule-width":W,"column-width":W,"font-size":W,"font-size-delta":W,"letter-spacing":W,"text-decoration-thickness":W,"text-indent":W,"text-stroke":W,"text-stroke-width":W,"word-spacing":W,motion:W,"motion-offset":W,outline:W,"outline-offset":W,"outline-width":W,perspective:W,"perspective-origin-x":Oo,"perspective-origin-y":Oo,"transform-origin":Oo,"transform-origin-x":Oo,"transform-origin-y":Oo,"transform-origin-z":Oo,"transition-delay":ks,"transition-duration":ks,"vertical-align":W,"flex-basis":W,"shape-margin":W,size:W,gap:W,grid:W,"grid-gap":W,"row-gap":W,"grid-row-gap":W,"grid-column-gap":W,"grid-template-rows":W,"grid-template-columns":W,"grid-auto-rows":W,"grid-auto-columns":W,"box-shadow-x":W,"box-shadow-y":W,"box-shadow-blur":W,"box-shadow-spread":W,"font-line-height":W,"text-shadow-x":W,"text-shadow-y":W,"text-shadow-blur":W};function b0(e){var n=/(-[a-z])/g,o=function(c){return c[1].toUpperCase()},i={};for(var s in e)i[s]=e[s],i[s.replace(n,o)]=e[s];return i}var x2=b0(b2);function Wi(e,n,o){if(n==null)return n;if(Array.isArray(n))for(var i=0;i<n.length;i++)n[i]=Wi(e,n[i],o);else if(typeof n=="object")if(e==="fallbacks")for(var s in n)n[s]=Wi(s,n[s],o);else for(var l in n)n[l]=Wi(e+"-"+l,n[l],o);else if(typeof n=="number"&&isNaN(n)===!1){var c=o[e]||x2[e];return c&&!(n===0&&c===W)?typeof c=="function"?c(n).toString():""+n+c:n.toString()}return n}function S2(e){e===void 0&&(e={});var n=b0(e);function o(s,l){if(l.type!=="style")return s;for(var c in s)s[c]=Wi(c,s[c],n);return s}function i(s,l){return Wi(l,s,n)}return{onProcessStyle:o,onChangeValue:i}}function nd(e,n){(n==null||n>e.length)&&(n=e.length);for(var o=0,i=Array(n);o<n;o++)i[o]=e[o];return i}function w2(e){if(Array.isArray(e))return nd(e)}function k2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function C2(e,n){if(e){if(typeof e=="string")return nd(e,n);var o={}.toString.call(e).slice(8,-1);return o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set"?Array.from(e):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?nd(e,n):void 0}}function P2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E2(e){return w2(e)||k2(e)||C2(e)||P2()}var $i="",rd="",x0="",S0="",R2=ia&&"ontouchstart"in document.documentElement;if(ia){var Ec={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},T2=document.createElement("p"),Rc=T2.style,O2="Transform";for(var Tc in Ec)if(Tc+O2 in Rc){$i=Tc,rd=Ec[Tc];break}$i==="Webkit"&&"msHyphens"in Rc&&($i="ms",rd=Ec.ms,S0="edge"),$i==="Webkit"&&"-apple-trailing-word"in Rc&&(x0="apple")}var we={js:$i,css:rd,vendor:x0,browser:S0,isTouch:R2};function _2(e){return e[1]==="-"||we.js==="ms"?e:"@"+we.css+"keyframes"+e.substr(10)}var A2={noPrefill:["appearance"],supportedProperty:function(n){return n!=="appearance"?!1:we.js==="ms"?"-webkit-"+n:we.css+n}},M2={noPrefill:["color-adjust"],supportedProperty:function(n){return n!=="color-adjust"?!1:we.js==="Webkit"?we.css+"print-"+n:n}},N2=/[-\s]+(.)?/g;function z2(e,n){return n?n.toUpperCase():""}function Bd(e){return e.replace(N2,z2)}function kr(e){return Bd("-"+e)}var j2={noPrefill:["mask"],supportedProperty:function(n,o){if(!/^mask/.test(n))return!1;if(we.js==="Webkit"){var i="mask-image";if(Bd(i)in o)return n;if(we.js+kr(i)in o)return we.css+n}return n}},D2={noPrefill:["text-orientation"],supportedProperty:function(n){return n!=="text-orientation"?!1:we.vendor==="apple"&&!we.isTouch?we.css+n:n}},$2={noPrefill:["transform"],supportedProperty:function(n,o,i){return n!=="transform"?!1:i.transform?n:we.css+n}},I2={noPrefill:["transition"],supportedProperty:function(n,o,i){return n!=="transition"?!1:i.transition?n:we.css+n}},L2={noPrefill:["writing-mode"],supportedProperty:function(n){return n!=="writing-mode"?!1:we.js==="Webkit"||we.js==="ms"&&we.browser!=="edge"?we.css+n:n}},B2={noPrefill:["user-select"],supportedProperty:function(n){return n!=="user-select"?!1:we.js==="Moz"||we.js==="ms"||we.vendor==="apple"?we.css+n:n}},F2={supportedProperty:function(n,o){if(!/^break-/.test(n))return!1;if(we.js==="Webkit"){var i="WebkitColumn"+kr(n);return i in o?we.css+"column-"+n:!1}if(we.js==="Moz"){var s="page"+kr(n);return s in o?"page-"+n:!1}return!1}},U2={supportedProperty:function(n,o){if(!/^(border|margin|padding)-inline/.test(n))return!1;if(we.js==="Moz")return n;var i=n.replace("-inline","");return we.js+kr(i)in o?we.css+i:!1}},W2={supportedProperty:function(n,o){return Bd(n)in o?n:!1}},q2={supportedProperty:function(n,o){var i=kr(n);return n[0]==="-"||n[0]==="-"&&n[1]==="-"?n:we.js+i in o?we.css+n:we.js!=="Webkit"&&"Webkit"+i in o?"-webkit-"+n:!1}},H2={supportedProperty:function(n){return n.substring(0,11)!=="scroll-snap"?!1:we.js==="ms"?""+we.css+n:n}},V2={supportedProperty:function(n){return n!=="overscroll-behavior"?!1:we.js==="ms"?we.css+"scroll-chaining":n}},G2={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},K2={supportedProperty:function(n,o){var i=G2[n];return i&&we.js+kr(i)in o?we.css+i:!1}},w0={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},Y2=Object.keys(w0),X2=function(n){return we.css+n},Q2={supportedProperty:function(n,o,i){var s=i.multiple;if(Y2.indexOf(n)>-1){var l=w0[n];if(!Array.isArray(l))return we.js+kr(l)in o?we.css+l:!1;if(!s)return!1;for(var c=0;c<l.length;c++)if(!(we.js+kr(l[0])in o))return!1;return l.map(X2)}return!1}},k0=[A2,M2,j2,D2,$2,I2,L2,B2,F2,U2,W2,q2,H2,V2,K2,Q2],Bm=k0.filter(function(e){return e.supportedProperty}).map(function(e){return e.supportedProperty}),J2=k0.filter(function(e){return e.noPrefill}).reduce(function(e,n){return e.push.apply(e,E2(n.noPrefill)),e},[]),Ii,Wr={};if(ia){Ii=document.createElement("p");var Oc=window.getComputedStyle(document.documentElement,"");for(var _c in Oc)isNaN(_c)||(Wr[Oc[_c]]=Oc[_c]);J2.forEach(function(e){return delete Wr[e]})}function od(e,n){if(n===void 0&&(n={}),!Ii)return e;if(Wr[e]!=null)return Wr[e];(e==="transition"||e==="transform")&&(n[e]=e in Ii.style);for(var o=0;o<Bm.length&&(Wr[e]=Bm[o](e,Ii.style,n),!Wr[e]);o++);try{Ii.style[e]=""}catch{return!1}return Wr[e]}var _o={},Z2={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},eC=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,vr;function tC(e,n,o){if(n==="var")return"var";if(n==="all")return"all";if(o==="all")return", all";var i=n?od(n):", "+od(o);return i||n||o}ia&&(vr=document.createElement("p"));function Fm(e,n){var o=n;if(!vr||e==="content")return n;if(typeof o!="string"||!isNaN(parseInt(o,10)))return o;var i=e+o;if(_o[i]!=null)return _o[i];try{vr.style[e]=o}catch{return _o[i]=!1,!1}if(Z2[e])o=o.replace(eC,tC);else if(vr.style[e]===""&&(o=we.css+o,o==="-ms-flex"&&(vr.style[e]="-ms-flexbox"),vr.style[e]=o,vr.style[e]===""))return _o[i]=!1,!1;return vr.style[e]="",_o[i]=o,_o[i]}function nC(){function e(s){if(s.type==="keyframes"){var l=s;l.at=_2(l.at)}}function n(s){for(var l in s){var c=s[l];if(l==="fallbacks"&&Array.isArray(c)){s[l]=c.map(n);continue}var f=!1,h=od(l);h&&h!==l&&(f=!0);var m=!1,y=Fm(h,Vr(c));y&&y!==c&&(m=!0),(f||m)&&(f&&delete s[l],s[h||l]=y||c)}return s}function o(s,l){return l.type!=="style"?s:n(s)}function i(s,l){return Fm(l,Vr(s))||s}return{onProcessRule:e,onProcessStyle:o,onChangeValue:i}}function rC(){var e=function(o,i){return o.length===i.length?o>i?1:-1:o.length-i.length};return{onProcessStyle:function(o,i){if(i.type!=="style")return o;for(var s={},l=Object.keys(o).sort(e),c=0;c<l.length;c++)s[l[c]]=o[l[c]];return s}}}function oC(){return{plugins:[i2(),d2(),h2(),v2(),S2(),typeof window>"u"?null:nC(),rC()]}}function C0(e={}){const{baseClasses:n,newClasses:o,Component:i}=e;if(!o)return n;const s={...n};return Object.keys(o).forEach(l=>{o[l]&&(s[l]=`${n[l]} ${o[l]}`)}),s}const zo={set:(e,n,o,i)=>{let s=e.get(n);s||(s=new Map,e.set(n,s)),s.set(o,i)},get:(e,n,o)=>{const i=e.get(n);return i?i.get(o):void 0},delete:(e,n,o)=>{e.get(n).delete(o)}};function iC(){const e=il();return(e==null?void 0:e.$$material)??e}const aC=h0(oC()),sC=y5(),lC=new Map,uC={disableGeneration:!1,generateClassName:sC,jss:aC,sheetsCache:null,sheetsManager:lC,sheetsRegistry:null},cC=A.createContext(uC);let Um=-1e9;function dC(){return Um+=1,Um}function Wm(e){return e.length===0}function fC(e){const{variant:n,...o}=e;let i=n||"";return Object.keys(o).sort().forEach(s=>{s==="color"?i+=Wm(i)?e[s]:Se(e[s]):i+=`${Wm(i)?s:Se(s)}${Se(e[s].toString())}`}),i}const pC={};function hC(e){const n=typeof e=="function";return{create:(o,i)=>{let s;try{s=n?e(o):e}catch(h){throw h}if(!i||!o.components||!o.components[i]||!o.components[i].styleOverrides&&!o.components[i].variants)return s;const l=o.components[i].styleOverrides||{},c=o.components[i].variants||[],f={...s};return Object.keys(l).forEach(h=>{f[h]=At(f[h]||{},l[h])}),c.forEach(h=>{const m=fC(h.props);f[m]=At(f[m]||{},h.style)}),f},options:{}}}function mC({state:e,stylesOptions:n},o,i){if(n.disableGeneration)return o||{};e.cacheClasses||(e.cacheClasses={value:null,lastProp:null,lastJSS:{}});let s=!1;return e.classes!==e.cacheClasses.lastJSS&&(e.cacheClasses.lastJSS=e.classes,s=!0),o!==e.cacheClasses.lastProp&&(e.cacheClasses.lastProp=o,s=!0),s&&(e.cacheClasses.value=C0({baseClasses:e.cacheClasses.lastJSS,newClasses:o,Component:i})),e.cacheClasses.value}function gC({state:e,theme:n,stylesOptions:o,stylesCreator:i,name:s},l){if(o.disableGeneration)return;let c=zo.get(o.sheetsManager,i,n);c||(c={refs:0,staticSheet:null,dynamicStyles:null},zo.set(o.sheetsManager,i,n,c));const f={...i.options,...o,theme:n,flip:typeof o.flip=="boolean"?o.flip:n.direction==="rtl"};f.generateId=f.serverGenerateClassName||f.generateClassName;const h=o.sheetsRegistry;if(c.refs===0){let m;o.sheetsCache&&(m=zo.get(o.sheetsCache,i,n));const y=i.create(n,s);m||(m=o.jss.createStyleSheet(y,{link:!1,...f}),m.attach(),o.sheetsCache&&zo.set(o.sheetsCache,i,n,m)),h&&h.add(m),c.staticSheet=m,c.dynamicStyles=m0(y)}if(c.dynamicStyles){const m=o.jss.createStyleSheet(c.dynamicStyles,{link:!0,...f});m.update(l),m.attach(),e.dynamicSheet=m,e.classes=C0({baseClasses:c.staticSheet.classes,newClasses:m.classes}),h&&h.add(m)}else e.classes=c.staticSheet.classes;c.refs+=1}function yC({state:e},n){e.dynamicSheet&&e.dynamicSheet.update(n)}function vC({state:e,theme:n,stylesOptions:o,stylesCreator:i}){if(o.disableGeneration)return;const s=zo.get(o.sheetsManager,i,n);s.refs-=1;const l=o.sheetsRegistry;s.refs===0&&(zo.delete(o.sheetsManager,i,n),o.jss.removeStyleSheet(s.staticSheet),l&&l.remove(s.staticSheet)),e.dynamicSheet&&(o.jss.removeStyleSheet(e.dynamicSheet),l&&l.remove(e.dynamicSheet))}function bC(e,n){const o=A.useRef([]);let i;const s=A.useMemo(()=>({}),n);o.current!==s&&(o.current=s,i=e()),A.useEffect(()=>()=>{i&&i()},[s])}function P0(e,n={}){const{name:o,classNamePrefix:i,Component:s,defaultTheme:l=pC,...c}=n,f=hC(e),h=o||i||"makeStyles";return f.options={index:dC(),name:o,meta:h,classNamePrefix:h},(y={})=>{const v=iC()||l,w={...A.useContext(cC),...c},R=A.useRef(),S=A.useRef();return bC(()=>{const P={name:o,state:{},stylesCreator:f,stylesOptions:w,theme:v};return gC(P,y),S.current=!1,R.current=P,()=>{vC(P)}},[v,f]),A.useEffect(()=>{S.current&&yC(R.current,y),S.current=!0}),mC(R.current,y.classes,s)}}const xC=P0({hero:{backgroundImage:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://xpertlab.com/wp-content/uploads/2021/04/cover-1200x480.png')",height:"500px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff",fontSize:"4rem"}});function SC(){const e=xC();return M.jsx(M.Fragment,{children:M.jsx(Pm,{className:e.hero,children:M.jsxs(Pm,{textAlign:"center",children:[M.jsx(Ce,{variant:"h2",children:"David J. Alonzo Monzón"}),M.jsx(Ce,{variant:"h5",children:"Desarrollo de Aplicaciones en Red"}),M.jsx(Ce,{variant:"h5",children:"Actividad 3 - Consumo de API"}),M.jsx(Ce,{variant:"h6",children:"Universidad Internacional de la Rioja en México"})]})})})}function E0(e,n){return function(){return e.apply(n,arguments)}}const{toString:wC}=Object.prototype,{getPrototypeOf:Fd}=Object,dl=(e=>n=>{const o=wC.call(n);return e[o]||(e[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),vn=e=>(e=e.toLowerCase(),n=>dl(n)===e),fl=e=>n=>typeof n===e,{isArray:Wo}=Array,Zi=fl("undefined");function kC(e){return e!==null&&!Zi(e)&&e.constructor!==null&&!Zi(e.constructor)&&Yt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const R0=vn("ArrayBuffer");function CC(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&R0(e.buffer),n}const PC=fl("string"),Yt=fl("function"),T0=fl("number"),pl=e=>e!==null&&typeof e=="object",EC=e=>e===!0||e===!1,_s=e=>{if(dl(e)!=="object")return!1;const n=Fd(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},RC=vn("Date"),TC=vn("File"),OC=vn("Blob"),_C=vn("FileList"),AC=e=>pl(e)&&Yt(e.pipe),MC=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||Yt(e.append)&&((n=dl(e))==="formdata"||n==="object"&&Yt(e.toString)&&e.toString()==="[object FormData]"))},NC=vn("URLSearchParams"),[zC,jC,DC,$C]=["ReadableStream","Request","Response","Headers"].map(vn),IC=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function aa(e,n,{allOwnKeys:o=!1}={}){if(e===null||typeof e>"u")return;let i,s;if(typeof e!="object"&&(e=[e]),Wo(e))for(i=0,s=e.length;i<s;i++)n.call(null,e[i],i,e);else{const l=o?Object.getOwnPropertyNames(e):Object.keys(e),c=l.length;let f;for(i=0;i<c;i++)f=l[i],n.call(null,e[f],f,e)}}function O0(e,n){n=n.toLowerCase();const o=Object.keys(e);let i=o.length,s;for(;i-- >0;)if(s=o[i],n===s.toLowerCase())return s;return null}const Hr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_0=e=>!Zi(e)&&e!==Hr;function id(){const{caseless:e}=_0(this)&&this||{},n={},o=(i,s)=>{const l=e&&O0(n,s)||s;_s(n[l])&&_s(i)?n[l]=id(n[l],i):_s(i)?n[l]=id({},i):Wo(i)?n[l]=i.slice():n[l]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&aa(arguments[i],o);return n}const LC=(e,n,o,{allOwnKeys:i}={})=>(aa(n,(s,l)=>{o&&Yt(s)?e[l]=E0(s,o):e[l]=s},{allOwnKeys:i}),e),BC=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),FC=(e,n,o,i)=>{e.prototype=Object.create(n.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),o&&Object.assign(e.prototype,o)},UC=(e,n,o,i)=>{let s,l,c;const f={};if(n=n||{},e==null)return n;do{for(s=Object.getOwnPropertyNames(e),l=s.length;l-- >0;)c=s[l],(!i||i(c,e,n))&&!f[c]&&(n[c]=e[c],f[c]=!0);e=o!==!1&&Fd(e)}while(e&&(!o||o(e,n))&&e!==Object.prototype);return n},WC=(e,n,o)=>{e=String(e),(o===void 0||o>e.length)&&(o=e.length),o-=n.length;const i=e.indexOf(n,o);return i!==-1&&i===o},qC=e=>{if(!e)return null;if(Wo(e))return e;let n=e.length;if(!T0(n))return null;const o=new Array(n);for(;n-- >0;)o[n]=e[n];return o},HC=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Fd(Uint8Array)),VC=(e,n)=>{const i=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=i.next())&&!s.done;){const l=s.value;n.call(e,l[0],l[1])}},GC=(e,n)=>{let o;const i=[];for(;(o=e.exec(n))!==null;)i.push(o);return i},KC=vn("HTMLFormElement"),YC=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,i,s){return i.toUpperCase()+s}),qm=(({hasOwnProperty:e})=>(n,o)=>e.call(n,o))(Object.prototype),XC=vn("RegExp"),A0=(e,n)=>{const o=Object.getOwnPropertyDescriptors(e),i={};aa(o,(s,l)=>{let c;(c=n(s,l,e))!==!1&&(i[l]=c||s)}),Object.defineProperties(e,i)},QC=e=>{A0(e,(n,o)=>{if(Yt(e)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const i=e[o];if(Yt(i)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},JC=(e,n)=>{const o={},i=s=>{s.forEach(l=>{o[l]=!0})};return Wo(e)?i(e):i(String(e).split(n)),o},ZC=()=>{},eP=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n,Ac="abcdefghijklmnopqrstuvwxyz",Hm="0123456789",M0={DIGIT:Hm,ALPHA:Ac,ALPHA_DIGIT:Ac+Ac.toUpperCase()+Hm},tP=(e=16,n=M0.ALPHA_DIGIT)=>{let o="";const{length:i}=n;for(;e--;)o+=n[Math.random()*i|0];return o};function nP(e){return!!(e&&Yt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const rP=e=>{const n=new Array(10),o=(i,s)=>{if(pl(i)){if(n.indexOf(i)>=0)return;if(!("toJSON"in i)){n[s]=i;const l=Wo(i)?[]:{};return aa(i,(c,f)=>{const h=o(c,s+1);!Zi(h)&&(l[f]=h)}),n[s]=void 0,l}}return i};return o(e,0)},oP=vn("AsyncFunction"),iP=e=>e&&(pl(e)||Yt(e))&&Yt(e.then)&&Yt(e.catch),N0=((e,n)=>e?setImmediate:n?((o,i)=>(Hr.addEventListener("message",({source:s,data:l})=>{s===Hr&&l===o&&i.length&&i.shift()()},!1),s=>{i.push(s),Hr.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",Yt(Hr.postMessage)),aP=typeof queueMicrotask<"u"?queueMicrotask.bind(Hr):typeof process<"u"&&process.nextTick||N0,B={isArray:Wo,isArrayBuffer:R0,isBuffer:kC,isFormData:MC,isArrayBufferView:CC,isString:PC,isNumber:T0,isBoolean:EC,isObject:pl,isPlainObject:_s,isReadableStream:zC,isRequest:jC,isResponse:DC,isHeaders:$C,isUndefined:Zi,isDate:RC,isFile:TC,isBlob:OC,isRegExp:XC,isFunction:Yt,isStream:AC,isURLSearchParams:NC,isTypedArray:HC,isFileList:_C,forEach:aa,merge:id,extend:LC,trim:IC,stripBOM:BC,inherits:FC,toFlatObject:UC,kindOf:dl,kindOfTest:vn,endsWith:WC,toArray:qC,forEachEntry:VC,matchAll:GC,isHTMLForm:KC,hasOwnProperty:qm,hasOwnProp:qm,reduceDescriptors:A0,freezeMethods:QC,toObjectSet:JC,toCamelCase:YC,noop:ZC,toFiniteNumber:eP,findKey:O0,global:Hr,isContextDefined:_0,ALPHABET:M0,generateString:tP,isSpecCompliantForm:nP,toJSONObject:rP,isAsyncFn:oP,isThenable:iP,setImmediate:N0,asap:aP};function xe(e,n,o,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),o&&(this.config=o),i&&(this.request=i),s&&(this.response=s,this.status=s.status?s.status:null)}B.inherits(xe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}});const z0=xe.prototype,j0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{j0[e]={value:e}});Object.defineProperties(xe,j0);Object.defineProperty(z0,"isAxiosError",{value:!0});xe.from=(e,n,o,i,s,l)=>{const c=Object.create(z0);return B.toFlatObject(e,c,function(h){return h!==Error.prototype},f=>f!=="isAxiosError"),xe.call(c,e.message,n,o,i,s),c.cause=e,c.name=e.name,l&&Object.assign(c,l),c};const sP=null;function ad(e){return B.isPlainObject(e)||B.isArray(e)}function D0(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function Vm(e,n,o){return e?e.concat(n).map(function(s,l){return s=D0(s),!o&&l?"["+s+"]":s}).join(o?".":""):n}function lP(e){return B.isArray(e)&&!e.some(ad)}const uP=B.toFlatObject(B,{},null,function(n){return/^is[A-Z]/.test(n)});function hl(e,n,o){if(!B.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,o=B.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,P){return!B.isUndefined(P[x])});const i=o.metaTokens,s=o.visitor||y,l=o.dots,c=o.indexes,h=(o.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(n);if(!B.isFunction(s))throw new TypeError("visitor must be a function");function m(S){if(S===null)return"";if(B.isDate(S))return S.toISOString();if(!h&&B.isBlob(S))throw new xe("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(S)||B.isTypedArray(S)?h&&typeof Blob=="function"?new Blob([S]):Buffer.from(S):S}function y(S,x,P){let $=S;if(S&&!P&&typeof S=="object"){if(B.endsWith(x,"{}"))x=i?x:x.slice(0,-2),S=JSON.stringify(S);else if(B.isArray(S)&&lP(S)||(B.isFileList(S)||B.endsWith(x,"[]"))&&($=B.toArray(S)))return x=D0(x),$.forEach(function(j,_){!(B.isUndefined(j)||j===null)&&n.append(c===!0?Vm([x],_,l):c===null?x:x+"[]",m(j))}),!1}return ad(S)?!0:(n.append(Vm(P,x,l),m(S)),!1)}const v=[],w=Object.assign(uP,{defaultVisitor:y,convertValue:m,isVisitable:ad});function R(S,x){if(!B.isUndefined(S)){if(v.indexOf(S)!==-1)throw Error("Circular reference detected in "+x.join("."));v.push(S),B.forEach(S,function($,U){(!(B.isUndefined($)||$===null)&&s.call(n,$,B.isString(U)?U.trim():U,x,w))===!0&&R($,x?x.concat(U):[U])}),v.pop()}}if(!B.isObject(e))throw new TypeError("data must be an object");return R(e),n}function Gm(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return n[i]})}function Ud(e,n){this._pairs=[],e&&hl(e,this,n)}const $0=Ud.prototype;$0.append=function(n,o){this._pairs.push([n,o])};$0.toString=function(n){const o=n?function(i){return n.call(this,i,Gm)}:Gm;return this._pairs.map(function(s){return o(s[0])+"="+o(s[1])},"").join("&")};function cP(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function I0(e,n,o){if(!n)return e;const i=o&&o.encode||cP;B.isFunction(o)&&(o={serialize:o});const s=o&&o.serialize;let l;if(s?l=s(n,o):l=B.isURLSearchParams(n)?n.toString():new Ud(n,o).toString(i),l){const c=e.indexOf("#");c!==-1&&(e=e.slice(0,c)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}class Km{constructor(){this.handlers=[]}use(n,o,i){return this.handlers.push({fulfilled:n,rejected:o,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){B.forEach(this.handlers,function(i){i!==null&&n(i)})}}const L0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},dP=typeof URLSearchParams<"u"?URLSearchParams:Ud,fP=typeof FormData<"u"?FormData:null,pP=typeof Blob<"u"?Blob:null,hP={isBrowser:!0,classes:{URLSearchParams:dP,FormData:fP,Blob:pP},protocols:["http","https","file","blob","url","data"]},Wd=typeof window<"u"&&typeof document<"u",sd=typeof navigator=="object"&&navigator||void 0,mP=Wd&&(!sd||["ReactNative","NativeScript","NS"].indexOf(sd.product)<0),gP=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",yP=Wd&&window.location.href||"http://localhost",vP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Wd,hasStandardBrowserEnv:mP,hasStandardBrowserWebWorkerEnv:gP,navigator:sd,origin:yP},Symbol.toStringTag,{value:"Module"})),Rt={...vP,...hP};function bP(e,n){return hl(e,new Rt.classes.URLSearchParams,Object.assign({visitor:function(o,i,s,l){return Rt.isNode&&B.isBuffer(o)?(this.append(i,o.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},n))}function xP(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function SP(e){const n={},o=Object.keys(e);let i;const s=o.length;let l;for(i=0;i<s;i++)l=o[i],n[l]=e[l];return n}function B0(e){function n(o,i,s,l){let c=o[l++];if(c==="__proto__")return!0;const f=Number.isFinite(+c),h=l>=o.length;return c=!c&&B.isArray(s)?s.length:c,h?(B.hasOwnProp(s,c)?s[c]=[s[c],i]:s[c]=i,!f):((!s[c]||!B.isObject(s[c]))&&(s[c]=[]),n(o,i,s[c],l)&&B.isArray(s[c])&&(s[c]=SP(s[c])),!f)}if(B.isFormData(e)&&B.isFunction(e.entries)){const o={};return B.forEachEntry(e,(i,s)=>{n(xP(i),s,o,0)}),o}return null}function wP(e,n,o){if(B.isString(e))try{return(n||JSON.parse)(e),B.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(0,JSON.stringify)(e)}const sa={transitional:L0,adapter:["xhr","http","fetch"],transformRequest:[function(n,o){const i=o.getContentType()||"",s=i.indexOf("application/json")>-1,l=B.isObject(n);if(l&&B.isHTMLForm(n)&&(n=new FormData(n)),B.isFormData(n))return s?JSON.stringify(B0(n)):n;if(B.isArrayBuffer(n)||B.isBuffer(n)||B.isStream(n)||B.isFile(n)||B.isBlob(n)||B.isReadableStream(n))return n;if(B.isArrayBufferView(n))return n.buffer;if(B.isURLSearchParams(n))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let f;if(l){if(i.indexOf("application/x-www-form-urlencoded")>-1)return bP(n,this.formSerializer).toString();if((f=B.isFileList(n))||i.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return hl(f?{"files[]":n}:n,h&&new h,this.formSerializer)}}return l||s?(o.setContentType("application/json",!1),wP(n)):n}],transformResponse:[function(n){const o=this.transitional||sa.transitional,i=o&&o.forcedJSONParsing,s=this.responseType==="json";if(B.isResponse(n)||B.isReadableStream(n))return n;if(n&&B.isString(n)&&(i&&!this.responseType||s)){const c=!(o&&o.silentJSONParsing)&&s;try{return JSON.parse(n)}catch(f){if(c)throw f.name==="SyntaxError"?xe.from(f,xe.ERR_BAD_RESPONSE,this,null,this.response):f}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Rt.classes.FormData,Blob:Rt.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],e=>{sa.headers[e]={}});const kP=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),CP=e=>{const n={};let o,i,s;return e&&e.split(`
`).forEach(function(c){s=c.indexOf(":"),o=c.substring(0,s).trim().toLowerCase(),i=c.substring(s+1).trim(),!(!o||n[o]&&kP[o])&&(o==="set-cookie"?n[o]?n[o].push(i):n[o]=[i]:n[o]=n[o]?n[o]+", "+i:i)}),n},Ym=Symbol("internals");function Ni(e){return e&&String(e).trim().toLowerCase()}function As(e){return e===!1||e==null?e:B.isArray(e)?e.map(As):String(e)}function PP(e){const n=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=o.exec(e);)n[i[1]]=i[2];return n}const EP=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Mc(e,n,o,i,s){if(B.isFunction(i))return i.call(this,n,o);if(s&&(n=o),!!B.isString(n)){if(B.isString(i))return n.indexOf(i)!==-1;if(B.isRegExp(i))return i.test(n)}}function RP(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,o,i)=>o.toUpperCase()+i)}function TP(e,n){const o=B.toCamelCase(" "+n);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+o,{value:function(s,l,c){return this[i].call(this,n,s,l,c)},configurable:!0})})}class Bt{constructor(n){n&&this.set(n)}set(n,o,i){const s=this;function l(f,h,m){const y=Ni(h);if(!y)throw new Error("header name must be a non-empty string");const v=B.findKey(s,y);(!v||s[v]===void 0||m===!0||m===void 0&&s[v]!==!1)&&(s[v||h]=As(f))}const c=(f,h)=>B.forEach(f,(m,y)=>l(m,y,h));if(B.isPlainObject(n)||n instanceof this.constructor)c(n,o);else if(B.isString(n)&&(n=n.trim())&&!EP(n))c(CP(n),o);else if(B.isHeaders(n))for(const[f,h]of n.entries())l(h,f,i);else n!=null&&l(o,n,i);return this}get(n,o){if(n=Ni(n),n){const i=B.findKey(this,n);if(i){const s=this[i];if(!o)return s;if(o===!0)return PP(s);if(B.isFunction(o))return o.call(this,s,i);if(B.isRegExp(o))return o.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,o){if(n=Ni(n),n){const i=B.findKey(this,n);return!!(i&&this[i]!==void 0&&(!o||Mc(this,this[i],i,o)))}return!1}delete(n,o){const i=this;let s=!1;function l(c){if(c=Ni(c),c){const f=B.findKey(i,c);f&&(!o||Mc(i,i[f],f,o))&&(delete i[f],s=!0)}}return B.isArray(n)?n.forEach(l):l(n),s}clear(n){const o=Object.keys(this);let i=o.length,s=!1;for(;i--;){const l=o[i];(!n||Mc(this,this[l],l,n,!0))&&(delete this[l],s=!0)}return s}normalize(n){const o=this,i={};return B.forEach(this,(s,l)=>{const c=B.findKey(i,l);if(c){o[c]=As(s),delete o[l];return}const f=n?RP(l):String(l).trim();f!==l&&delete o[l],o[f]=As(s),i[f]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const o=Object.create(null);return B.forEach(this,(i,s)=>{i!=null&&i!==!1&&(o[s]=n&&B.isArray(i)?i.join(", "):i)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,o])=>n+": "+o).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...o){const i=new this(n);return o.forEach(s=>i.set(s)),i}static accessor(n){const i=(this[Ym]=this[Ym]={accessors:{}}).accessors,s=this.prototype;function l(c){const f=Ni(c);i[f]||(TP(s,c),i[f]=!0)}return B.isArray(n)?n.forEach(l):l(n),this}}Bt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(Bt.prototype,({value:e},n)=>{let o=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(i){this[o]=i}}});B.freezeMethods(Bt);function Nc(e,n){const o=this||sa,i=n||o,s=Bt.from(i.headers);let l=i.data;return B.forEach(e,function(f){l=f.call(o,l,s.normalize(),n?n.status:void 0)}),s.normalize(),l}function F0(e){return!!(e&&e.__CANCEL__)}function qo(e,n,o){xe.call(this,e??"canceled",xe.ERR_CANCELED,n,o),this.name="CanceledError"}B.inherits(qo,xe,{__CANCEL__:!0});function U0(e,n,o){const i=o.config.validateStatus;!o.status||!i||i(o.status)?e(o):n(new xe("Request failed with status code "+o.status,[xe.ERR_BAD_REQUEST,xe.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function OP(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function _P(e,n){e=e||10;const o=new Array(e),i=new Array(e);let s=0,l=0,c;return n=n!==void 0?n:1e3,function(h){const m=Date.now(),y=i[l];c||(c=m),o[s]=h,i[s]=m;let v=l,w=0;for(;v!==s;)w+=o[v++],v=v%e;if(s=(s+1)%e,s===l&&(l=(l+1)%e),m-c<n)return;const R=y&&m-y;return R?Math.round(w*1e3/R):void 0}}function AP(e,n){let o=0,i=1e3/n,s,l;const c=(m,y=Date.now())=>{o=y,s=null,l&&(clearTimeout(l),l=null),e.apply(null,m)};return[(...m)=>{const y=Date.now(),v=y-o;v>=i?c(m,y):(s=m,l||(l=setTimeout(()=>{l=null,c(s)},i-v)))},()=>s&&c(s)]}const Us=(e,n,o=3)=>{let i=0;const s=_P(50,250);return AP(l=>{const c=l.loaded,f=l.lengthComputable?l.total:void 0,h=c-i,m=s(h),y=c<=f;i=c;const v={loaded:c,total:f,progress:f?c/f:void 0,bytes:h,rate:m||void 0,estimated:m&&f&&y?(f-c)/m:void 0,event:l,lengthComputable:f!=null,[n?"download":"upload"]:!0};e(v)},o)},Xm=(e,n)=>{const o=e!=null;return[i=>n[0]({lengthComputable:o,total:e,loaded:i}),n[1]]},Qm=e=>(...n)=>B.asap(()=>e(...n)),MP=Rt.hasStandardBrowserEnv?((e,n)=>o=>(o=new URL(o,Rt.origin),e.protocol===o.protocol&&e.host===o.host&&(n||e.port===o.port)))(new URL(Rt.origin),Rt.navigator&&/(msie|trident)/i.test(Rt.navigator.userAgent)):()=>!0,NP=Rt.hasStandardBrowserEnv?{write(e,n,o,i,s,l){const c=[e+"="+encodeURIComponent(n)];B.isNumber(o)&&c.push("expires="+new Date(o).toGMTString()),B.isString(i)&&c.push("path="+i),B.isString(s)&&c.push("domain="+s),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function zP(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jP(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function W0(e,n){return e&&!zP(n)?jP(e,n):n}const Jm=e=>e instanceof Bt?{...e}:e;function Xr(e,n){n=n||{};const o={};function i(m,y,v,w){return B.isPlainObject(m)&&B.isPlainObject(y)?B.merge.call({caseless:w},m,y):B.isPlainObject(y)?B.merge({},y):B.isArray(y)?y.slice():y}function s(m,y,v,w){if(B.isUndefined(y)){if(!B.isUndefined(m))return i(void 0,m,v,w)}else return i(m,y,v,w)}function l(m,y){if(!B.isUndefined(y))return i(void 0,y)}function c(m,y){if(B.isUndefined(y)){if(!B.isUndefined(m))return i(void 0,m)}else return i(void 0,y)}function f(m,y,v){if(v in n)return i(m,y);if(v in e)return i(void 0,m)}const h={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:f,headers:(m,y,v)=>s(Jm(m),Jm(y),v,!0)};return B.forEach(Object.keys(Object.assign({},e,n)),function(y){const v=h[y]||s,w=v(e[y],n[y],y);B.isUndefined(w)&&v!==f||(o[y]=w)}),o}const q0=e=>{const n=Xr({},e);let{data:o,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:l,headers:c,auth:f}=n;n.headers=c=Bt.from(c),n.url=I0(W0(n.baseURL,n.url),e.params,e.paramsSerializer),f&&c.set("Authorization","Basic "+btoa((f.username||"")+":"+(f.password?unescape(encodeURIComponent(f.password)):"")));let h;if(B.isFormData(o)){if(Rt.hasStandardBrowserEnv||Rt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if((h=c.getContentType())!==!1){const[m,...y]=h?h.split(";").map(v=>v.trim()).filter(Boolean):[];c.setContentType([m||"multipart/form-data",...y].join("; "))}}if(Rt.hasStandardBrowserEnv&&(i&&B.isFunction(i)&&(i=i(n)),i||i!==!1&&MP(n.url))){const m=s&&l&&NP.read(l);m&&c.set(s,m)}return n},DP=typeof XMLHttpRequest<"u",$P=DP&&function(e){return new Promise(function(o,i){const s=q0(e);let l=s.data;const c=Bt.from(s.headers).normalize();let{responseType:f,onUploadProgress:h,onDownloadProgress:m}=s,y,v,w,R,S;function x(){R&&R(),S&&S(),s.cancelToken&&s.cancelToken.unsubscribe(y),s.signal&&s.signal.removeEventListener("abort",y)}let P=new XMLHttpRequest;P.open(s.method.toUpperCase(),s.url,!0),P.timeout=s.timeout;function $(){if(!P)return;const j=Bt.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),C={data:!f||f==="text"||f==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:j,config:e,request:P};U0(function(L){o(L),x()},function(L){i(L),x()},C),P=null}"onloadend"in P?P.onloadend=$:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout($)},P.onabort=function(){P&&(i(new xe("Request aborted",xe.ECONNABORTED,e,P)),P=null)},P.onerror=function(){i(new xe("Network Error",xe.ERR_NETWORK,e,P)),P=null},P.ontimeout=function(){let _=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const C=s.transitional||L0;s.timeoutErrorMessage&&(_=s.timeoutErrorMessage),i(new xe(_,C.clarifyTimeoutError?xe.ETIMEDOUT:xe.ECONNABORTED,e,P)),P=null},l===void 0&&c.setContentType(null),"setRequestHeader"in P&&B.forEach(c.toJSON(),function(_,C){P.setRequestHeader(C,_)}),B.isUndefined(s.withCredentials)||(P.withCredentials=!!s.withCredentials),f&&f!=="json"&&(P.responseType=s.responseType),m&&([w,S]=Us(m,!0),P.addEventListener("progress",w)),h&&P.upload&&([v,R]=Us(h),P.upload.addEventListener("progress",v),P.upload.addEventListener("loadend",R)),(s.cancelToken||s.signal)&&(y=j=>{P&&(i(!j||j.type?new qo(null,e,P):j),P.abort(),P=null)},s.cancelToken&&s.cancelToken.subscribe(y),s.signal&&(s.signal.aborted?y():s.signal.addEventListener("abort",y)));const U=OP(s.url);if(U&&Rt.protocols.indexOf(U)===-1){i(new xe("Unsupported protocol "+U+":",xe.ERR_BAD_REQUEST,e));return}P.send(l||null)})},IP=(e,n)=>{const{length:o}=e=e?e.filter(Boolean):[];if(n||o){let i=new AbortController,s;const l=function(m){if(!s){s=!0,f();const y=m instanceof Error?m:this.reason;i.abort(y instanceof xe?y:new qo(y instanceof Error?y.message:y))}};let c=n&&setTimeout(()=>{c=null,l(new xe(`timeout ${n} of ms exceeded`,xe.ETIMEDOUT))},n);const f=()=>{e&&(c&&clearTimeout(c),c=null,e.forEach(m=>{m.unsubscribe?m.unsubscribe(l):m.removeEventListener("abort",l)}),e=null)};e.forEach(m=>m.addEventListener("abort",l));const{signal:h}=i;return h.unsubscribe=()=>B.asap(f),h}},LP=function*(e,n){let o=e.byteLength;if(o<n){yield e;return}let i=0,s;for(;i<o;)s=i+n,yield e.slice(i,s),i=s},BP=async function*(e,n){for await(const o of FP(e))yield*LP(o,n)},FP=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:o,value:i}=await n.read();if(o)break;yield i}}finally{await n.cancel()}},Zm=(e,n,o,i)=>{const s=BP(e,n);let l=0,c,f=h=>{c||(c=!0,i&&i(h))};return new ReadableStream({async pull(h){try{const{done:m,value:y}=await s.next();if(m){f(),h.close();return}let v=y.byteLength;if(o){let w=l+=v;o(w)}h.enqueue(new Uint8Array(y))}catch(m){throw f(m),m}},cancel(h){return f(h),s.return()}},{highWaterMark:2})},ml=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",H0=ml&&typeof ReadableStream=="function",UP=ml&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),V0=(e,...n)=>{try{return!!e(...n)}catch{return!1}},WP=H0&&V0(()=>{let e=!1;const n=new Request(Rt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),eg=64*1024,ld=H0&&V0(()=>B.isReadableStream(new Response("").body)),Ws={stream:ld&&(e=>e.body)};ml&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!Ws[n]&&(Ws[n]=B.isFunction(e[n])?o=>o[n]():(o,i)=>{throw new xe(`Response type '${n}' is not supported`,xe.ERR_NOT_SUPPORT,i)})})})(new Response);const qP=async e=>{if(e==null)return 0;if(B.isBlob(e))return e.size;if(B.isSpecCompliantForm(e))return(await new Request(Rt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(B.isArrayBufferView(e)||B.isArrayBuffer(e))return e.byteLength;if(B.isURLSearchParams(e)&&(e=e+""),B.isString(e))return(await UP(e)).byteLength},HP=async(e,n)=>{const o=B.toFiniteNumber(e.getContentLength());return o??qP(n)},VP=ml&&(async e=>{let{url:n,method:o,data:i,signal:s,cancelToken:l,timeout:c,onDownloadProgress:f,onUploadProgress:h,responseType:m,headers:y,withCredentials:v="same-origin",fetchOptions:w}=q0(e);m=m?(m+"").toLowerCase():"text";let R=IP([s,l&&l.toAbortSignal()],c),S;const x=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let P;try{if(h&&WP&&o!=="get"&&o!=="head"&&(P=await HP(y,i))!==0){let C=new Request(n,{method:"POST",body:i,duplex:"half"}),z;if(B.isFormData(i)&&(z=C.headers.get("content-type"))&&y.setContentType(z),C.body){const[L,J]=Xm(P,Us(Qm(h)));i=Zm(C.body,eg,L,J)}}B.isString(v)||(v=v?"include":"omit");const $="credentials"in Request.prototype;S=new Request(n,{...w,signal:R,method:o.toUpperCase(),headers:y.normalize().toJSON(),body:i,duplex:"half",credentials:$?v:void 0});let U=await fetch(S);const j=ld&&(m==="stream"||m==="response");if(ld&&(f||j&&x)){const C={};["status","statusText","headers"].forEach(Z=>{C[Z]=U[Z]});const z=B.toFiniteNumber(U.headers.get("content-length")),[L,J]=f&&Xm(z,Us(Qm(f),!0))||[];U=new Response(Zm(U.body,eg,L,()=>{J&&J(),x&&x()}),C)}m=m||"text";let _=await Ws[B.findKey(Ws,m)||"text"](U,e);return!j&&x&&x(),await new Promise((C,z)=>{U0(C,z,{data:_,headers:Bt.from(U.headers),status:U.status,statusText:U.statusText,config:e,request:S})})}catch($){throw x&&x(),$&&$.name==="TypeError"&&/fetch/i.test($.message)?Object.assign(new xe("Network Error",xe.ERR_NETWORK,e,S),{cause:$.cause||$}):xe.from($,$&&$.code,e,S)}}),ud={http:sP,xhr:$P,fetch:VP};B.forEach(ud,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const tg=e=>`- ${e}`,GP=e=>B.isFunction(e)||e===null||e===!1,G0={getAdapter:e=>{e=B.isArray(e)?e:[e];const{length:n}=e;let o,i;const s={};for(let l=0;l<n;l++){o=e[l];let c;if(i=o,!GP(o)&&(i=ud[(c=String(o)).toLowerCase()],i===void 0))throw new xe(`Unknown adapter '${c}'`);if(i)break;s[c||"#"+l]=i}if(!i){const l=Object.entries(s).map(([f,h])=>`adapter ${f} `+(h===!1?"is not supported by the environment":"is not available in the build"));let c=n?l.length>1?`since :
`+l.map(tg).join(`
`):" "+tg(l[0]):"as no adapter specified";throw new xe("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return i},adapters:ud};function zc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new qo(null,e)}function ng(e){return zc(e),e.headers=Bt.from(e.headers),e.data=Nc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),G0.getAdapter(e.adapter||sa.adapter)(e).then(function(i){return zc(e),i.data=Nc.call(e,e.transformResponse,i),i.headers=Bt.from(i.headers),i},function(i){return F0(i)||(zc(e),i&&i.response&&(i.response.data=Nc.call(e,e.transformResponse,i.response),i.response.headers=Bt.from(i.response.headers))),Promise.reject(i)})}const K0="1.7.8",gl={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{gl[e]=function(i){return typeof i===e||"a"+(n<1?"n ":" ")+e}});const rg={};gl.transitional=function(n,o,i){function s(l,c){return"[Axios v"+K0+"] Transitional option '"+l+"'"+c+(i?". "+i:"")}return(l,c,f)=>{if(n===!1)throw new xe(s(c," has been removed"+(o?" in "+o:"")),xe.ERR_DEPRECATED);return o&&!rg[c]&&(rg[c]=!0,console.warn(s(c," has been deprecated since v"+o+" and will be removed in the near future"))),n?n(l,c,f):!0}};gl.spelling=function(n){return(o,i)=>(console.warn(`${i} is likely a misspelling of ${n}`),!0)};function KP(e,n,o){if(typeof e!="object")throw new xe("options must be an object",xe.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let s=i.length;for(;s-- >0;){const l=i[s],c=n[l];if(c){const f=e[l],h=f===void 0||c(f,l,e);if(h!==!0)throw new xe("option "+l+" must be "+h,xe.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new xe("Unknown option "+l,xe.ERR_BAD_OPTION)}}const Ms={assertOptions:KP,validators:gl},En=Ms.validators;class Gr{constructor(n){this.defaults=n,this.interceptors={request:new Km,response:new Km}}async request(n,o){try{return await this._request(n,o)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const l=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?l&&!String(i.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+l):i.stack=l}catch{}}throw i}}_request(n,o){typeof n=="string"?(o=o||{},o.url=n):o=n||{},o=Xr(this.defaults,o);const{transitional:i,paramsSerializer:s,headers:l}=o;i!==void 0&&Ms.assertOptions(i,{silentJSONParsing:En.transitional(En.boolean),forcedJSONParsing:En.transitional(En.boolean),clarifyTimeoutError:En.transitional(En.boolean)},!1),s!=null&&(B.isFunction(s)?o.paramsSerializer={serialize:s}:Ms.assertOptions(s,{encode:En.function,serialize:En.function},!0)),Ms.assertOptions(o,{baseUrl:En.spelling("baseURL"),withXsrfToken:En.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let c=l&&B.merge(l.common,l[o.method]);l&&B.forEach(["delete","get","head","post","put","patch","common"],S=>{delete l[S]}),o.headers=Bt.concat(c,l);const f=[];let h=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(o)===!1||(h=h&&x.synchronous,f.unshift(x.fulfilled,x.rejected))});const m=[];this.interceptors.response.forEach(function(x){m.push(x.fulfilled,x.rejected)});let y,v=0,w;if(!h){const S=[ng.bind(this),void 0];for(S.unshift.apply(S,f),S.push.apply(S,m),w=S.length,y=Promise.resolve(o);v<w;)y=y.then(S[v++],S[v++]);return y}w=f.length;let R=o;for(v=0;v<w;){const S=f[v++],x=f[v++];try{R=S(R)}catch(P){x.call(this,P);break}}try{y=ng.call(this,R)}catch(S){return Promise.reject(S)}for(v=0,w=m.length;v<w;)y=y.then(m[v++],m[v++]);return y}getUri(n){n=Xr(this.defaults,n);const o=W0(n.baseURL,n.url);return I0(o,n.params,n.paramsSerializer)}}B.forEach(["delete","get","head","options"],function(n){Gr.prototype[n]=function(o,i){return this.request(Xr(i||{},{method:n,url:o,data:(i||{}).data}))}});B.forEach(["post","put","patch"],function(n){function o(i){return function(l,c,f){return this.request(Xr(f||{},{method:n,headers:i?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}Gr.prototype[n]=o(),Gr.prototype[n+"Form"]=o(!0)});class qd{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(l){o=l});const i=this;this.promise.then(s=>{if(!i._listeners)return;let l=i._listeners.length;for(;l-- >0;)i._listeners[l](s);i._listeners=null}),this.promise.then=s=>{let l;const c=new Promise(f=>{i.subscribe(f),l=f}).then(s);return c.cancel=function(){i.unsubscribe(l)},c},n(function(l,c,f){i.reason||(i.reason=new qo(l,c,f),o(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const o=this._listeners.indexOf(n);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const n=new AbortController,o=i=>{n.abort(i)};return this.subscribe(o),n.signal.unsubscribe=()=>this.unsubscribe(o),n.signal}static source(){let n;return{token:new qd(function(s){n=s}),cancel:n}}}function YP(e){return function(o){return e.apply(null,o)}}function XP(e){return B.isObject(e)&&e.isAxiosError===!0}const cd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(cd).forEach(([e,n])=>{cd[n]=e});function Y0(e){const n=new Gr(e),o=E0(Gr.prototype.request,n);return B.extend(o,Gr.prototype,n,{allOwnKeys:!0}),B.extend(o,n,null,{allOwnKeys:!0}),o.create=function(s){return Y0(Xr(e,s))},o}const ut=Y0(sa);ut.Axios=Gr;ut.CanceledError=qo;ut.CancelToken=qd;ut.isCancel=F0;ut.VERSION=K0;ut.toFormData=hl;ut.AxiosError=xe;ut.Cancel=ut.CanceledError;ut.all=function(n){return Promise.all(n)};ut.spread=YP;ut.isAxiosError=XP;ut.mergeConfig=Xr;ut.AxiosHeaders=Bt;ut.formToJSON=e=>B0(B.isHTMLForm(e)?new FormData(e):e);ut.getAdapter=G0.getAdapter;ut.HttpStatusCode=cd;ut.default=ut;function ht(e,n){n===void 0&&(n={});var o=n.insertAt;if(e&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",o==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}ht(`.react-loading-indicator-normalize,
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
}`);var An=function(){return An=Object.assign||function(e){for(var n,o=1,i=arguments.length;o<i;o++)for(var s in n=arguments[o])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e},An.apply(this,arguments)};function qs(e){return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qs(e)}var QP=/^\s+/,JP=/\s+$/;function fe(e,n){if(n=n||{},(e=e||"")instanceof fe)return e;if(!(this instanceof fe))return new fe(e,n);var o=function(i){var s={r:0,g:0,b:0},l=1,c=null,f=null,h=null,m=!1,y=!1;typeof i=="string"&&(i=function(S){S=S.replace(QP,"").replace(JP,"").toLowerCase();var x,P=!1;if(dd[S])S=dd[S],P=!0;else if(S=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(x=gn.rgb.exec(S))?{r:x[1],g:x[2],b:x[3]}:(x=gn.rgba.exec(S))?{r:x[1],g:x[2],b:x[3],a:x[4]}:(x=gn.hsl.exec(S))?{h:x[1],s:x[2],l:x[3]}:(x=gn.hsla.exec(S))?{h:x[1],s:x[2],l:x[3],a:x[4]}:(x=gn.hsv.exec(S))?{h:x[1],s:x[2],v:x[3]}:(x=gn.hsva.exec(S))?{h:x[1],s:x[2],v:x[3],a:x[4]}:(x=gn.hex8.exec(S))?{r:Vt(x[1]),g:Vt(x[2]),b:Vt(x[3]),a:ug(x[4]),format:P?"name":"hex8"}:(x=gn.hex6.exec(S))?{r:Vt(x[1]),g:Vt(x[2]),b:Vt(x[3]),format:P?"name":"hex"}:(x=gn.hex4.exec(S))?{r:Vt(x[1]+""+x[1]),g:Vt(x[2]+""+x[2]),b:Vt(x[3]+""+x[3]),a:ug(x[4]+""+x[4]),format:P?"name":"hex8"}:(x=gn.hex3.exec(S))?{r:Vt(x[1]+""+x[1]),g:Vt(x[2]+""+x[2]),b:Vt(x[3]+""+x[3]),format:P?"name":"hex"}:!1}(i)),qs(i)=="object"&&(qn(i.r)&&qn(i.g)&&qn(i.b)?(v=i.r,w=i.g,R=i.b,s={r:255*Ve(v,255),g:255*Ve(w,255),b:255*Ve(R,255)},m=!0,y=String(i.r).substr(-1)==="%"?"prgb":"rgb"):qn(i.h)&&qn(i.s)&&qn(i.v)?(c=Li(i.s),f=Li(i.v),s=function(S,x,P){S=6*Ve(S,360),x=Ve(x,100),P=Ve(P,100);var $=Math.floor(S),U=S-$,j=P*(1-x),_=P*(1-U*x),C=P*(1-(1-U)*x),z=$%6,L=[P,_,j,j,C,P][z],J=[C,P,P,_,j,j][z],Z=[j,j,C,P,P,_][z];return{r:255*L,g:255*J,b:255*Z}}(i.h,c,f),m=!0,y="hsv"):qn(i.h)&&qn(i.s)&&qn(i.l)&&(c=Li(i.s),h=Li(i.l),s=function(S,x,P){var $,U,j;function _(L,J,Z){return Z<0&&(Z+=1),Z>1&&(Z-=1),Z<1/6?L+6*(J-L)*Z:Z<.5?J:Z<2/3?L+(J-L)*(2/3-Z)*6:L}if(S=Ve(S,360),x=Ve(x,100),P=Ve(P,100),x===0)$=U=j=P;else{var C=P<.5?P*(1+x):P+x-P*x,z=2*P-C;$=_(z,C,S+1/3),U=_(z,C,S),j=_(z,C,S-1/3)}return{r:255*$,g:255*U,b:255*j}}(i.h,c,h),m=!0,y="hsl"),i.hasOwnProperty("a")&&(l=i.a));var v,w,R;return l=X0(l),{ok:m,format:i.format||y,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:l}}(e);this._originalInput=e,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||o.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function og(e,n,o){e=Ve(e,255),n=Ve(n,255),o=Ve(o,255);var i,s,l=Math.max(e,n,o),c=Math.min(e,n,o),f=(l+c)/2;if(l==c)i=s=0;else{var h=l-c;switch(s=f>.5?h/(2-l-c):h/(l+c),l){case e:i=(n-o)/h+(n<o?6:0);break;case n:i=(o-e)/h+2;break;case o:i=(e-n)/h+4}i/=6}return{h:i,s,l:f}}function ig(e,n,o){e=Ve(e,255),n=Ve(n,255),o=Ve(o,255);var i,s,l=Math.max(e,n,o),c=Math.min(e,n,o),f=l,h=l-c;if(s=l===0?0:h/l,l==c)i=0;else{switch(l){case e:i=(n-o)/h+(n<o?6:0);break;case n:i=(o-e)/h+2;break;case o:i=(e-n)/h+4}i/=6}return{h:i,s,v:f}}function ag(e,n,o,i){var s=[yn(Math.round(e).toString(16)),yn(Math.round(n).toString(16)),yn(Math.round(o).toString(16))];return i&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function sg(e,n,o,i){return[yn(Q0(i)),yn(Math.round(e).toString(16)),yn(Math.round(n).toString(16)),yn(Math.round(o).toString(16))].join("")}function ZP(e,n){n=n===0?0:n||10;var o=fe(e).toHsl();return o.s-=n/100,o.s=yl(o.s),fe(o)}function eE(e,n){n=n===0?0:n||10;var o=fe(e).toHsl();return o.s+=n/100,o.s=yl(o.s),fe(o)}function tE(e){return fe(e).desaturate(100)}function nE(e,n){n=n===0?0:n||10;var o=fe(e).toHsl();return o.l+=n/100,o.l=yl(o.l),fe(o)}function rE(e,n){n=n===0?0:n||10;var o=fe(e).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-n/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-n/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-n/100*255))),fe(o)}function oE(e,n){n=n===0?0:n||10;var o=fe(e).toHsl();return o.l-=n/100,o.l=yl(o.l),fe(o)}function iE(e,n){var o=fe(e).toHsl(),i=(o.h+n)%360;return o.h=i<0?360+i:i,fe(o)}function aE(e){var n=fe(e).toHsl();return n.h=(n.h+180)%360,fe(n)}function lg(e,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var o=fe(e).toHsl(),i=[fe(e)],s=360/n,l=1;l<n;l++)i.push(fe({h:(o.h+l*s)%360,s:o.s,l:o.l}));return i}function sE(e){var n=fe(e).toHsl(),o=n.h;return[fe(e),fe({h:(o+72)%360,s:n.s,l:n.l}),fe({h:(o+216)%360,s:n.s,l:n.l})]}function lE(e,n,o){n=n||6,o=o||30;var i=fe(e).toHsl(),s=360/o,l=[fe(e)];for(i.h=(i.h-(s*n>>1)+720)%360;--n;)i.h=(i.h+s)%360,l.push(fe(i));return l}function uE(e,n){n=n||6;for(var o=fe(e).toHsv(),i=o.h,s=o.s,l=o.v,c=[],f=1/n;n--;)c.push(fe({h:i,s,v:l})),l=(l+f)%1;return c}fe.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,n,o,i=this.toRgb();return e=i.r/255,n=i.g/255,o=i.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(e){return this._a=X0(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=ig(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=ig(this._r,this._g,this._b),n=Math.round(360*e.h),o=Math.round(100*e.s),i=Math.round(100*e.v);return this._a==1?"hsv("+n+", "+o+"%, "+i+"%)":"hsva("+n+", "+o+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var e=og(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=og(this._r,this._g,this._b),n=Math.round(360*e.h),o=Math.round(100*e.s),i=Math.round(100*e.l);return this._a==1?"hsl("+n+", "+o+"%, "+i+"%)":"hsla("+n+", "+o+"%, "+i+"%, "+this._roundA+")"},toHex:function(e){return ag(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(n,o,i,s,l){var c=[yn(Math.round(n).toString(16)),yn(Math.round(o).toString(16)),yn(Math.round(i).toString(16)),yn(Q0(s))];return l&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)&&c[3].charAt(0)==c[3].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0)+c[3].charAt(0):c.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ve(this._r,255))+"%",g:Math.round(100*Ve(this._g,255))+"%",b:Math.round(100*Ve(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ve(this._r,255))+"%, "+Math.round(100*Ve(this._g,255))+"%, "+Math.round(100*Ve(this._b,255))+"%)":"rgba("+Math.round(100*Ve(this._r,255))+"%, "+Math.round(100*Ve(this._g,255))+"%, "+Math.round(100*Ve(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(cE[ag(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var n="#"+sg(this._r,this._g,this._b,this._a),o=n,i=this._gradientType?"GradientType = 1, ":"";if(e){var s=fe(e);o="#"+sg(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+n+",endColorstr="+o+")"},toString:function(e){var n=!!e;e=e||this._format;var o=!1,i=this._a<1&&this._a>=0;return n||!i||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(o=this.toRgbString()),e==="prgb"&&(o=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(o=this.toHexString()),e==="hex3"&&(o=this.toHexString(!0)),e==="hex4"&&(o=this.toHex8String(!0)),e==="hex8"&&(o=this.toHex8String()),e==="name"&&(o=this.toName()),e==="hsl"&&(o=this.toHslString()),e==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return fe(this.toString())},_applyModification:function(e,n){var o=e.apply(null,[this].concat([].slice.call(n)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(nE,arguments)},brighten:function(){return this._applyModification(rE,arguments)},darken:function(){return this._applyModification(oE,arguments)},desaturate:function(){return this._applyModification(ZP,arguments)},saturate:function(){return this._applyModification(eE,arguments)},greyscale:function(){return this._applyModification(tE,arguments)},spin:function(){return this._applyModification(iE,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(lE,arguments)},complement:function(){return this._applyCombination(aE,arguments)},monochromatic:function(){return this._applyCombination(uE,arguments)},splitcomplement:function(){return this._applyCombination(sE,arguments)},triad:function(){return this._applyCombination(lg,[3])},tetrad:function(){return this._applyCombination(lg,[4])}},fe.fromRatio=function(e,n){if(qs(e)=="object"){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=i==="a"?e[i]:Li(e[i]));e=o}return fe(e,n)},fe.equals=function(e,n){return!(!e||!n)&&fe(e).toRgbString()==fe(n).toRgbString()},fe.random=function(){return fe.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},fe.mix=function(e,n,o){o=o===0?0:o||50;var i=fe(e).toRgb(),s=fe(n).toRgb(),l=o/100;return fe({r:(s.r-i.r)*l+i.r,g:(s.g-i.g)*l+i.g,b:(s.b-i.b)*l+i.b,a:(s.a-i.a)*l+i.a})},fe.readability=function(e,n){var o=fe(e),i=fe(n);return(Math.max(o.getLuminance(),i.getLuminance())+.05)/(Math.min(o.getLuminance(),i.getLuminance())+.05)},fe.isReadable=function(e,n,o){var i,s,l=fe.readability(e,n);switch(s=!1,(i=function(c){var f,h;return f=((c=c||{level:"AA",size:"small"}).level||"AA").toUpperCase(),h=(c.size||"small").toLowerCase(),f!=="AA"&&f!=="AAA"&&(f="AA"),h!=="small"&&h!=="large"&&(h="small"),{level:f,size:h}}(o)).level+i.size){case"AAsmall":case"AAAlarge":s=l>=4.5;break;case"AAlarge":s=l>=3;break;case"AAAsmall":s=l>=7}return s},fe.mostReadable=function(e,n,o){var i,s,l,c,f=null,h=0;s=(o=o||{}).includeFallbackColors,l=o.level,c=o.size;for(var m=0;m<n.length;m++)(i=fe.readability(e,n[m]))>h&&(h=i,f=fe(n[m]));return fe.isReadable(e,f,{level:l,size:c})||!s?f:(o.includeFallbackColors=!1,fe.mostReadable(e,["#fff","#000"],o))};var dd=fe.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},cE=fe.hexNames=function(e){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[e[o]]=o);return n}(dd);function X0(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Ve(e,n){(function(i){return typeof i=="string"&&i.indexOf(".")!=-1&&parseFloat(i)===1})(e)&&(e="100%");var o=function(i){return typeof i=="string"&&i.indexOf("%")!=-1}(e);return e=Math.min(n,Math.max(0,parseFloat(e))),o&&(e=parseInt(e*n,10)/100),Math.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function yl(e){return Math.min(1,Math.max(0,e))}function Vt(e){return parseInt(e,16)}function yn(e){return e.length==1?"0"+e:""+e}function Li(e){return e<=1&&(e=100*e+"%"),e}function Q0(e){return Math.round(255*parseFloat(e)).toString(16)}function ug(e){return Vt(e)/255}var yr,Cs,Ps,gn=(Cs="[\\s|\\(]+("+(yr="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+yr+")[,|\\s]+("+yr+")\\s*\\)?",Ps="[\\s|\\(]+("+yr+")[,|\\s]+("+yr+")[,|\\s]+("+yr+")[,|\\s]+("+yr+")\\s*\\)?",{CSS_UNIT:new RegExp(yr),rgb:new RegExp("rgb"+Cs),rgba:new RegExp("rgba"+Ps),hsl:new RegExp("hsl"+Cs),hsla:new RegExp("hsla"+Ps),hsv:new RegExp("hsv"+Cs),hsva:new RegExp("hsva"+Ps),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function qn(e){return!!gn.CSS_UNIT.exec(e)}var dE=function(e,n){var o=(typeof e=="string"?parseInt(e):e)||0;if(o>=-5&&o<=5){var i=o,s=parseFloat(n),l=s+i*(s/5)*-1;return(l==0||l<=Number.EPSILON)&&(l=.1),{animationPeriod:l+"s"}}return{animationPeriod:n}},fE=function(e,n){var o=e||{},i="";switch(n){case"small":i="12px";break;case"medium":i="16px";break;case"large":i="20px";break;default:i=void 0}var s={};if(o.fontSize){var l=o.fontSize;s=function(c,f){var h={};for(var m in c)Object.prototype.hasOwnProperty.call(c,m)&&f.indexOf(m)<0&&(h[m]=c[m]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(m=Object.getOwnPropertySymbols(c);y<m.length;y++)f.indexOf(m[y])<0&&Object.prototype.propertyIsEnumerable.call(c,m[y])&&(h[m[y]]=c[m[y]])}return h}(o,["fontSize"]),i=l}return{fontSize:i,styles:s}},pE={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},hE=function(e){var n=e.className,o=e.text,i=e.textColor,s=e.staticText,l=e.style;return o?He.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:An(An(An({},s&&pE),i&&{color:i,mixBlendMode:"unset"}),l&&l)},typeof o=="string"&&o.length?o:"loading"):null},J0="rgb(50, 205, 50)";function mE(e,n){n===void 0&&(n=0);var o=[];return function i(s,l){return l===void 0&&(l=0),o.push.apply(o,s),o.length<l&&i(o,l),o.slice(0,l)}(e,n)}ht(`.atom-rli-bounding-box {
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
}`);fe(J0).toRgb();Array.from({length:4},function(e,n){return"--atom-phase".concat(n+1,"-rgb")});ht(`.commet-rli-bounding-box {
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
}`);var Ao=Array.from({length:4},function(e,n){return"--commet-phase".concat(n+1,"-color")}),gE=function(e){var n,o=fE(e==null?void 0:e.style,e==null?void 0:e.size),i=o.styles,s=o.fontSize,l=e==null?void 0:e.easing,c=dE(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,f=function(h){var m={};if(h instanceof Array){for(var y=mE(h,Ao.length),v=0;v<y.length&&!(v>=4);v++)m[Ao[v]]=y[v];return m}try{if(typeof h!="string")throw new Error("Color String expected");for(var w=0;w<Ao.length;w++)m[Ao[w]]=h}catch(R){for(R instanceof Error?console.warn("[".concat(R.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h)," received in <Commet /> indicator cannot be processed. Using default instead!")),w=0;w<Ao.length;w++)m[Ao[w]]=J0}return m}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:"");return He.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:An(An(An(An(An({},s&&{fontSize:s}),c&&{"--rli-animation-duration":c}),l&&{"--rli-animation-function":l}),f),i),role:"status","aria-live":"polite","aria-label":"Loading"},He.createElement("span",{className:"rli-d-i-b commet-indicator"},He.createElement("span",{className:"rli-d-i-b commet-box"},He.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),He.createElement("span",{className:"rli-d-i-b  commetball-box"})),He.createElement("span",{className:"rli-d-i-b commet-box"},He.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),He.createElement("span",{className:"rli-d-i-b commetball-box"})),He.createElement(hE,{className:"commet-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};ht(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--OP-annulus-phase".concat(n+1,"-color")});function jc(e){return e&&e.Math===Math&&e}ht(`.OP-dotted-rli-bounding-box {
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
}`);jc(typeof window=="object"&&window)||jc(typeof self=="object"&&self)||jc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(e,n){return"--OP-dotted-phase".concat(n+1,"-color")});ht(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--OP-spokes-phase".concat(n+1,"-color")});ht(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")});ht(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]});ht(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--four-square-phase".concat(n+1,"-color")});ht(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--mosaic-phase".concat(n+1,"-color")});ht(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--riple-phase".concat(n+1,"-color")});ht(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--TD-pulsate-phase".concat(n+1,"-color")});ht(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--TD-brick-stack-phase".concat(n+1,"-color")});ht(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--TD-bob-phase".concat(n+1,"-color")});ht(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--TD-bounce-phase".concat(n+1,"-color")});ht(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--shape-phase".concat(n+1,"-color")});ht(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--trophySpin-phase".concat(n+1,"-color")});ht(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--slab-phase".concat(n+1,"-color")});ht(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--life-line-phase".concat(n+1,"-color")});/*! *****************************************************************************
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
***************************************************************************** */var fd=function(e,n){return fd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var s in i)i.hasOwnProperty(s)&&(o[s]=i[s])},fd(e,n)};function yE(e,n){fd(e,n);function o(){this.constructor=e}e.prototype=n===null?Object.create(n):(o.prototype=n.prototype,new o)}var qi=function(){return qi=Object.assign||function(n){for(var o,i=1,s=arguments.length;i<s;i++){o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},qi.apply(this,arguments)};function vE(e,n,o,i){var s,l=!1,c=0;function f(){s&&clearTimeout(s)}function h(){f(),l=!0}typeof n!="boolean"&&(i=o,o=n,n=void 0);function m(){var y=this,v=Date.now()-c,w=arguments;if(l)return;function R(){c=Date.now(),o.apply(y,w)}function S(){s=void 0}i&&!s&&R(),f(),i===void 0&&v>e?R():n!==!0&&(s=setTimeout(i?S:R,i===void 0?e-v:e))}return m.cancel=h,m}var Io={Pixel:"Pixel",Percent:"Percent"},cg={unit:Io.Percent,value:.8};function dg(e){return typeof e=="number"?{unit:Io.Percent,value:e*100}:typeof e=="string"?e.match(/^(\d*(\.\d+)?)px$/)?{unit:Io.Pixel,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:Io.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),cg):(console.warn("scrollThreshold should be string or number"),cg)}var bE=function(e){yE(n,e);function n(o){var i=e.call(this,o)||this;return i.lastScrollTop=0,i.actionTriggered=!1,i.startY=0,i.currentY=0,i.dragging=!1,i.maxPullDownDistance=0,i.getScrollableTarget=function(){return i.props.scrollableTarget instanceof HTMLElement?i.props.scrollableTarget:typeof i.props.scrollableTarget=="string"?document.getElementById(i.props.scrollableTarget):(i.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},i.onStart=function(s){i.lastScrollTop||(i.dragging=!0,s instanceof MouseEvent?i.startY=s.pageY:s instanceof TouchEvent&&(i.startY=s.touches[0].pageY),i.currentY=i.startY,i._infScroll&&(i._infScroll.style.willChange="transform",i._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},i.onMove=function(s){i.dragging&&(s instanceof MouseEvent?i.currentY=s.pageY:s instanceof TouchEvent&&(i.currentY=s.touches[0].pageY),!(i.currentY<i.startY)&&(i.currentY-i.startY>=Number(i.props.pullDownToRefreshThreshold)&&i.setState({pullToRefreshThresholdBreached:!0}),!(i.currentY-i.startY>i.maxPullDownDistance*1.5)&&i._infScroll&&(i._infScroll.style.overflow="visible",i._infScroll.style.transform="translate3d(0px, "+(i.currentY-i.startY)+"px, 0px)")))},i.onEnd=function(){i.startY=0,i.currentY=0,i.dragging=!1,i.state.pullToRefreshThresholdBreached&&(i.props.refreshFunction&&i.props.refreshFunction(),i.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){i._infScroll&&(i._infScroll.style.overflow="auto",i._infScroll.style.transform="none",i._infScroll.style.willChange="unset")})},i.onScrollListener=function(s){typeof i.props.onScroll=="function"&&setTimeout(function(){return i.props.onScroll&&i.props.onScroll(s)},0);var l=i.props.height||i._scrollableNode?s.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!i.actionTriggered){var c=i.props.inverse?i.isElementAtTop(l,i.props.scrollThreshold):i.isElementAtBottom(l,i.props.scrollThreshold);c&&i.props.hasMore&&(i.actionTriggered=!0,i.setState({showLoader:!0}),i.props.next&&i.props.next()),i.lastScrollTop=l.scrollTop}},i.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:o.dataLength},i.throttledOnScrollListener=vE(150,i.onScrollListener).bind(i),i.onStart=i.onStart.bind(i),i.onMove=i.onMove.bind(i),i.onEnd=i.onEnd.bind(i),i}return n.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},n.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},n.prototype.componentDidUpdate=function(o){this.props.dataLength!==o.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},n.getDerivedStateFromProps=function(o,i){var s=o.dataLength!==i.prevDataLength;return s?qi(qi({},i),{prevDataLength:o.dataLength}):null},n.prototype.isElementAtTop=function(o,i){i===void 0&&(i=.8);var s=o===document.body||o===document.documentElement?window.screen.availHeight:o.clientHeight,l=dg(i);return l.unit===Io.Pixel?o.scrollTop<=l.value+s-o.scrollHeight+1:o.scrollTop<=l.value/100+s-o.scrollHeight+1},n.prototype.isElementAtBottom=function(o,i){i===void 0&&(i=.8);var s=o===document.body||o===document.documentElement?window.screen.availHeight:o.clientHeight,l=dg(i);return l.unit===Io.Pixel?o.scrollTop+s>=o.scrollHeight-l.value:o.scrollTop+s>=l.value/100*o.scrollHeight},n.prototype.render=function(){var o=this,i=qi({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),s=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),l=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return He.createElement("div",{style:l,className:"infinite-scroll-component__outerdiv"},He.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(c){return o._infScroll=c},style:i},this.props.pullDownToRefresh&&He.createElement("div",{style:{position:"relative"},ref:function(c){return o._pullDown=c}},He.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!s&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},n}(A.Component);const xE=r0(M.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),SE=je(n5)(({theme:e})=>({"& .MuiDialogContent-root":{padding:e.spacing(2)},"& .MuiDialogActions-root":{padding:e.spacing(1)}})),wE=({isOpen:e,itemGas:n,sendDataToParent:o})=>{const[i,s]=A.useState(e),l=()=>{s(!1),o(!1)};return M.jsx(A.Fragment,{children:M.jsxs(SE,{onClose:l,"aria-labelledby":"customized-dialog-title",open:i,children:[M.jsxs(m5,{sx:{m:0,p:2},id:"customized-dialog-title",children:["C.P: ",n["C.P."]]}),M.jsx(Xw,{"aria-label":"close",onClick:l,sx:c=>({position:"absolute",right:8,top:8,color:c.palette.grey[500]}),children:M.jsx(xE,{})}),M.jsxs(f5,{dividers:!0,children:[M.jsxs(Ce,{children:[M.jsx("b",{children:"Direccion:"})," ",n.Dirección]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Horario:"})," ",n.Horario]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Latitud:"})," ",n.Latitud]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Localidad:"})," ",n.Localidad]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Longitud:"})," ",n.Longitud]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Biodiesel:"})," ",n["Precio Biodiesel"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Bioetanol:"})," ",n["Precio Bioetanol"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Gas Natural Comprimido:"})," ",n["Precio Gas Natural Comprimido"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Gas Natural Licuado:"})," ",n["Precio Gas Natural Licuado"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Gases licuados del petróleo:"})," ",n["Precio Gases licuados del petróleo"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Gasoleo A:"})," ",n["Precio Gasoleo A"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Gasoleo B:"})," ",n["Precio Gasoleo B"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Gasoleo Premium:"})," ",n["Precio Gasoleo Premium"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Gasolina 95 E10:"})," ",n["Precio Gasolina 95 E10"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Gasolina 95 E5:"})," ",n["Precio Gasolina 95 E5"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Gasolina 95 E5 Premium:"})," ",n["Precio Gasolina 95 E5 Premium"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Gasolina 98 E10:"})," ",n["Precio Gasolina 98 E10"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Gasolina 98 E5:"})," ",n["Precio Gasolina 98 E5"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Precio Hidrogeno:"})," ",n["Precio Hidrogeno"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Provincia:"})," ",n.Provincia]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Remisión:"})," ",n.Remisión]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Rótulo:"})," ",n.Rótulo]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"Tipo Venta:"})," ",n["Tipo Venta"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"% BioEtanol:"})," ",n["% BioEtanol"]]}),M.jsxs(Ce,{children:[M.jsx("b",{children:"% Éster metílico:"})," ",n["% Éster metílico"]]})]}),M.jsx(a5,{children:M.jsx(s0,{autoFocus:!0,onClick:l,children:"Cerrar"})})]})})},kE=P0({blogContainer:{paddingTop:"1rem",minHeight:400},blogTitle:{fontWeight:800,paddingBotton:"1rem"},card:{maxWidth:"100%"},media:{height:240},cardActions:{display:"flex",margin:"0 10px",justifyContent:"space-between"},author:{display:"flex"}}),CE="https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/";function PE(){const e=kE(),[n,o]=A.useState(),[i,s]=A.useState(!1),[l]=A.useState(50),[c,f]=A.useState(!1),[h,m]=A.useState(),[y,v]=A.useState([]),[w,R]=A.useState(1),[S,x]=A.useState(!0),[P,$]=A.useState(1);function U(C){f(C)}const j=C=>{f(!0),m(C)};A.useEffect(()=>{_()},[]);const _=async()=>{if(n&&w==P+1){x(!1);return}let C=n,z=0,L=l,J=1;s(!0),n||(C=(await ut.get(CE)).data,J=(C==null?void 0:C.ListaEESSPrecio.length)/l,o(C)),w>1&&(z=w*l,L=z+l),v(Z=>[...Z,...C==null?void 0:C.ListaEESSPrecio.slice(z,L)]),R(Z=>Z+1),$(J),s(!1)};return M.jsxs(n0,{maxWidth:"lg",className:e.blogContainer,children:[M.jsx(Ce,{variant:"h4",className:e.blogTitle,children:"Estaciones Terrestres"}),M.jsxs(Ce,{variant:"h5",className:e.blogTitle,children:["Fecha de consulta: ",n==null?void 0:n.Fecha]}),c&&M.jsx(wE,{isOpen:c,itemGas:h,sendDataToParent:U}),M.jsx(bE,{dataLength:y.length,next:_,hasMore:S,loader:M.jsx(Dd,{sx:C=>({color:"#fff",zIndex:C.zIndex.drawer+1}),open:i,children:M.jsx(gE,{color:"#32CD32",size:"large",text:"Cargando",textColor:""})}),endMessage:M.jsx("p",{children:M.jsx("b",{children:"Yay! You have seen it all"})}),children:M.jsx(Tm,{container:!0,spacing:3,children:y&&y.map((C,z)=>M.jsx(Tm,{size:{xs:12,sm:6,md:4},children:M.jsxs(gk,{className:e.card,children:[M.jsx(Sk,{children:M.jsxs(Ok,{children:[M.jsxs(Ce,{gutterBottom:!0,variant:"h5",component:"div",children:["C.P: ",C["C.P."]]}),M.jsxs(Ce,{variant:"body2",sx:{color:"text.secondary"},children:["Dirección: ",C.Dirección]}),M.jsxs(Ce,{variant:"body2",sx:{color:"text.secondary"},children:["Horario: ",C.Horario]}),M.jsxs(Ce,{variant:"body2",sx:{color:"text.secondary"},children:["Localidad: ",C.Localidad]}),M.jsxs(Ce,{variant:"body2",sx:{color:"text.secondary"},children:["Municipio: ",C.Municipio]}),M.jsxs(Ce,{variant:"body2",sx:{color:"text.secondary"},children:["Provincia: ",C.Provincia]})]})}),M.jsx(Pk,{children:M.jsx(s0,{size:"small",onClick:()=>j(C),children:"Leer más"})})]})},z))})})]})}function EE(){return M.jsxs(M.Fragment,{children:[M.jsx(Sw,{}),M.jsx(SC,{}),M.jsx(PE,{})]})}const RE=sl({palette:{primary:{main:"#0098CD"},background:{default:"#fff"}}});o1.createRoot(document.getElementById("root")).render(M.jsx(Cw,{theme:RE,children:M.jsx(EE,{})}));
