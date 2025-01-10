(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Ch={exports:{}},ca={},Ph={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function Bv(){if(cm)return Ie;cm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.iterator;function L(V){return V===null||typeof V!="object"?null:(V=C&&V[C]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Y={};function q(V,j,oe){this.props=V,this.context=j,this.refs=Y,this.updater=oe||z}q.prototype.isReactComponent={},q.prototype.setState=function(V,j){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,j,"setState")},q.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ve(){}ve.prototype=q.prototype;function _e(V,j,oe){this.props=V,this.context=j,this.refs=Y,this.updater=oe||z}var ye=_e.prototype=new ve;ye.constructor=_e,Q(ye,q.prototype),ye.isPureReactComponent=!0;var we=Array.isArray,He=Object.prototype.hasOwnProperty,Se={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(V,j,oe){var Ee,Te={},ke=null,xe=null;if(j!=null)for(Ee in j.ref!==void 0&&(xe=j.ref),j.key!==void 0&&(ke=""+j.key),j)He.call(j,Ee)&&!N.hasOwnProperty(Ee)&&(Te[Ee]=j[Ee]);var Le=arguments.length-2;if(Le===1)Te.children=oe;else if(1<Le){for(var ze=Array(Le),pt=0;pt<Le;pt++)ze[pt]=arguments[pt+2];Te.children=ze}if(V&&V.defaultProps)for(Ee in Le=V.defaultProps,Le)Te[Ee]===void 0&&(Te[Ee]=Le[Ee]);return{$$typeof:i,type:V,key:ke,ref:xe,props:Te,_owner:Se.current}}function A(V,j){return{$$typeof:i,type:V.type,key:j,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function D(V){var j={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(oe){return j[oe]})}var O=/\/+/g;function S(V,j){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):j.toString(36)}function Ze(V,j,oe,Ee,Te){var ke=typeof V;(ke==="undefined"||ke==="boolean")&&(V=null);var xe=!1;if(V===null)xe=!0;else switch(ke){case"string":case"number":xe=!0;break;case"object":switch(V.$$typeof){case i:case e:xe=!0}}if(xe)return xe=V,Te=Te(xe),V=Ee===""?"."+S(xe,0):Ee,we(Te)?(oe="",V!=null&&(oe=V.replace(O,"$&/")+"/"),Ze(Te,j,oe,"",function(pt){return pt})):Te!=null&&(P(Te)&&(Te=A(Te,oe+(!Te.key||xe&&xe.key===Te.key?"":(""+Te.key).replace(O,"$&/")+"/")+V)),j.push(Te)),1;if(xe=0,Ee=Ee===""?".":Ee+":",we(V))for(var Le=0;Le<V.length;Le++){ke=V[Le];var ze=Ee+S(ke,Le);xe+=Ze(ke,j,oe,ze,Te)}else if(ze=L(V),typeof ze=="function")for(V=ze.call(V),Le=0;!(ke=V.next()).done;)ke=ke.value,ze=Ee+S(ke,Le++),xe+=Ze(ke,j,oe,ze,Te);else if(ke==="object")throw j=String(V),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return xe}function Pt(V,j,oe){if(V==null)return V;var Ee=[],Te=0;return Ze(V,Ee,"","",function(ke){return j.call(oe,ke,Te++)}),Ee}function kt(V){if(V._status===-1){var j=V._result;j=j(),j.then(function(oe){(V._status===0||V._status===-1)&&(V._status=1,V._result=oe)},function(oe){(V._status===0||V._status===-1)&&(V._status=2,V._result=oe)}),V._status===-1&&(V._status=0,V._result=j)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},J={transition:null},le={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:J,ReactCurrentOwner:Se};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:Pt,forEach:function(V,j,oe){Pt(V,function(){j.apply(this,arguments)},oe)},count:function(V){var j=0;return Pt(V,function(){j++}),j},toArray:function(V){return Pt(V,function(j){return j})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ie.Component=q,Ie.Fragment=t,Ie.Profiler=o,Ie.PureComponent=_e,Ie.StrictMode=s,Ie.Suspense=y,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Ie.act=ee,Ie.cloneElement=function(V,j,oe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ee=Q({},V.props),Te=V.key,ke=V.ref,xe=V._owner;if(j!=null){if(j.ref!==void 0&&(ke=j.ref,xe=Se.current),j.key!==void 0&&(Te=""+j.key),V.type&&V.type.defaultProps)var Le=V.type.defaultProps;for(ze in j)He.call(j,ze)&&!N.hasOwnProperty(ze)&&(Ee[ze]=j[ze]===void 0&&Le!==void 0?Le[ze]:j[ze])}var ze=arguments.length-2;if(ze===1)Ee.children=oe;else if(1<ze){Le=Array(ze);for(var pt=0;pt<ze;pt++)Le[pt]=arguments[pt+2];Ee.children=Le}return{$$typeof:i,type:V.type,key:Te,ref:ke,props:Ee,_owner:xe}},Ie.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Ie.createElement=I,Ie.createFactory=function(V){var j=I.bind(null,V);return j.type=V,j},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(V){return{$$typeof:m,render:V}},Ie.isValidElement=P,Ie.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:kt}},Ie.memo=function(V,j){return{$$typeof:v,type:V,compare:j===void 0?null:j}},Ie.startTransition=function(V){var j=J.transition;J.transition={};try{V()}finally{J.transition=j}},Ie.unstable_act=ee,Ie.useCallback=function(V,j){return Ue.current.useCallback(V,j)},Ie.useContext=function(V){return Ue.current.useContext(V)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},Ie.useEffect=function(V,j){return Ue.current.useEffect(V,j)},Ie.useId=function(){return Ue.current.useId()},Ie.useImperativeHandle=function(V,j,oe){return Ue.current.useImperativeHandle(V,j,oe)},Ie.useInsertionEffect=function(V,j){return Ue.current.useInsertionEffect(V,j)},Ie.useLayoutEffect=function(V,j){return Ue.current.useLayoutEffect(V,j)},Ie.useMemo=function(V,j){return Ue.current.useMemo(V,j)},Ie.useReducer=function(V,j,oe){return Ue.current.useReducer(V,j,oe)},Ie.useRef=function(V){return Ue.current.useRef(V)},Ie.useState=function(V){return Ue.current.useState(V)},Ie.useSyncExternalStore=function(V,j,oe){return Ue.current.useSyncExternalStore(V,j,oe)},Ie.useTransition=function(){return Ue.current.useTransition()},Ie.version="18.3.1",Ie}var hm;function pd(){return hm||(hm=1,Ph.exports=Bv()),Ph.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function jv(){if(dm)return ca;dm=1;var i=pd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,C={},L=null,z=null;v!==void 0&&(L=""+v),y.key!==void 0&&(L=""+y.key),y.ref!==void 0&&(z=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(C[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)C[w]===void 0&&(C[w]=y[w]);return{$$typeof:e,type:m,key:L,ref:z,props:C,_owner:o.current}}return ca.Fragment=t,ca.jsx=h,ca.jsxs=h,ca}var fm;function $v(){return fm||(fm=1,Ch.exports=jv()),Ch.exports}var St=$v(),ou=pd(),Jl={},kh={exports:{}},Qt={},Nh={exports:{}},Dh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function qv(){return pm||(pm=1,function(i){function e(J,le){var ee=J.length;J.push(le);e:for(;0<ee;){var V=ee-1>>>1,j=J[V];if(0<o(j,le))J[V]=le,J[ee]=j,ee=V;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var le=J[0],ee=J.pop();if(ee!==le){J[0]=ee;e:for(var V=0,j=J.length,oe=j>>>1;V<oe;){var Ee=2*(V+1)-1,Te=J[Ee],ke=Ee+1,xe=J[ke];if(0>o(Te,ee))ke<j&&0>o(xe,Te)?(J[V]=xe,J[ke]=ee,V=ke):(J[V]=Te,J[Ee]=ee,V=Ee);else if(ke<j&&0>o(xe,ee))J[V]=xe,J[ke]=ee,V=ke;else break e}}return le}function o(J,le){var ee=J.sortIndex-le.sortIndex;return ee!==0?ee:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,C=null,L=3,z=!1,Q=!1,Y=!1,q=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(J){for(var le=t(v);le!==null;){if(le.callback===null)s(v);else if(le.startTime<=J)s(v),le.sortIndex=le.expirationTime,e(y,le);else break;le=t(v)}}function we(J){if(Y=!1,ye(J),!Q)if(t(y)!==null)Q=!0,kt(He);else{var le=t(v);le!==null&&Ue(we,le.startTime-J)}}function He(J,le){Q=!1,Y&&(Y=!1,ve(I),I=-1),z=!0;var ee=L;try{for(ye(le),C=t(y);C!==null&&(!(C.expirationTime>le)||J&&!D());){var V=C.callback;if(typeof V=="function"){C.callback=null,L=C.priorityLevel;var j=V(C.expirationTime<=le);le=i.unstable_now(),typeof j=="function"?C.callback=j:C===t(y)&&s(y),ye(le)}else s(y);C=t(y)}if(C!==null)var oe=!0;else{var Ee=t(v);Ee!==null&&Ue(we,Ee.startTime-le),oe=!1}return oe}finally{C=null,L=ee,z=!1}}var Se=!1,N=null,I=-1,A=5,P=-1;function D(){return!(i.unstable_now()-P<A)}function O(){if(N!==null){var J=i.unstable_now();P=J;var le=!0;try{le=N(!0,J)}finally{le?S():(Se=!1,N=null)}}else Se=!1}var S;if(typeof _e=="function")S=function(){_e(O)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Pt=Ze.port2;Ze.port1.onmessage=O,S=function(){Pt.postMessage(null)}}else S=function(){q(O,0)};function kt(J){N=J,Se||(Se=!0,S())}function Ue(J,le){I=q(function(){J(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){Q||z||(Q=!0,kt(He))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return L},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(J){switch(L){case 1:case 2:case 3:var le=3;break;default:le=L}var ee=L;L=le;try{return J()}finally{L=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=L;L=J;try{return le()}finally{L=ee}},i.unstable_scheduleCallback=function(J,le,ee){var V=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?V+ee:V):ee=V,J){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ee+j,J={id:w++,callback:le,priorityLevel:J,startTime:ee,expirationTime:j,sortIndex:-1},ee>V?(J.sortIndex=ee,e(v,J),t(y)===null&&J===t(v)&&(Y?(ve(I),I=-1):Y=!0,Ue(we,ee-V))):(J.sortIndex=j,e(y,J),Q||z||(Q=!0,kt(He))),J},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(J){var le=L;return function(){var ee=L;L=le;try{return J.apply(this,arguments)}finally{L=ee}}}}(Dh)),Dh}var mm;function Hv(){return mm||(mm=1,Nh.exports=qv()),Nh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function Wv(){if(gm)return Qt;gm=1;var i=pd(),e=Hv();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},C={};function L(n){return y.call(C,n)?!0:y.call(w,n)?!1:v.test(n)?C[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];q[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var ve=/[\-:]([a-z])/g;function _e(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ve,_e);q[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ve,_e);q[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ve,_e);q[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,a,c){var d=q.hasOwnProperty(r)?q[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,a,d,c)&&(a=null),c||d===null?L(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,He=Symbol.for("react.element"),Se=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),J=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,V;function j(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var oe=!1;function Ee(n,r){if(!n||oe)return"";oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?j(n):""}function Te(n){switch(n.tag){case 5:return j(n.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Se:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case Ze:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pt:return r=n.displayName||null,r!==null?r:ke(n.type)||"Memo";case kt:r=n._payload,n=n._init;try{return ke(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Jn(n){n._valueTracker||(n._valueTracker=pt(n))}function Zi(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Ar(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function mi(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function es(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Le(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function go(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function yo(n,r){go(n,r);var a=Le(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ts(n,r.type,a):r.hasOwnProperty("defaultValue")&&ts(n,r.type,Le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Fa(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ts(n,r,a){(r!=="number"||Ar(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Zn=Array.isArray;function er(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function _o(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ns(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(Zn(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Le(a)}}function rs(n,r){var a=Le(r.value),c=Le(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function vo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function at(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?at(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var tr,Eo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=tr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Rr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yi=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(n){yi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),gi[r]=gi[n]})});function wo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||gi.hasOwnProperty(n)&&gi[n]?(""+r).trim():r+"px"}function To(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=wo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Io=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function So(n,r){if(r){if(Io[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ao(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _i=null;function is(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ss=null,ln=null,Ln=null;function os(n){if(n=Qo(n)){if(typeof ss!="function")throw Error(t(280));var r=n.stateNode;r&&(r=fl(r),ss(n.stateNode,n.type,r))}}function Mn(n){ln?Ln?Ln.push(n):Ln=[n]:ln=n}function Ro(){if(ln){var n=ln,r=Ln;if(Ln=ln=null,os(n),r)for(n=0;n<r.length;n++)os(r[n])}}function vi(n,r){return n(r)}function Co(){}var nr=!1;function Po(n,r,a){if(nr)return n(r,a);nr=!0;try{return vi(n,r,a)}finally{nr=!1,(ln!==null||Ln!==null)&&(Co(),Ro())}}function et(n,r){var a=n.stateNode;if(a===null)return null;var c=fl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var as=!1;if(m)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){as=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{as=!1}function Ei(n,r,a,c,d,p,_,T,R){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(H){this.onError(H)}}var wi=!1,ls=null,En=!1,ko=null,tc={onError:function(n){wi=!0,ls=n}};function us(n,r,a,c,d,p,_,T,R){wi=!1,ls=null,Ei.apply(tc,arguments)}function Ua(n,r,a,c,d,p,_,T,R){if(us.apply(this,arguments),wi){if(wi){var U=ls;wi=!1,ls=null}else throw Error(t(198));En||(En=!0,ko=U)}}function wn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ti(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Tn(n){if(wn(n)!==n)throw Error(t(188))}function ba(n){var r=n.alternate;if(!r){if(r=wn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Tn(d),n;if(p===c)return Tn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function No(n){return n=ba(n),n!==null?cs(n):null}function cs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=cs(n);if(r!==null)return r;n=n.sibling}return null}var hs=e.unstable_scheduleCallback,Do=e.unstable_cancelCallback,za=e.unstable_shouldYield,nc=e.unstable_requestPaint,Be=e.unstable_now,Ba=e.unstable_getCurrentPriorityLevel,Ii=e.unstable_ImmediatePriority,Cr=e.unstable_UserBlockingPriority,un=e.unstable_NormalPriority,Vo=e.unstable_LowPriority,ja=e.unstable_IdlePriority,Si=null,Zt=null;function $a(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Si,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Ha,Oo=Math.log,qa=Math.LN2;function Ha(n){return n>>>=0,n===0?32:31-(Oo(n)/qa|0)|0}var ds=64,fs=4194304;function Pr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ai(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Pr(T):(p&=_,p!==0&&(c=Pr(p)))}else _=a&~d,_!==0?c=Pr(_):p!==0&&(c=Pr(p));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ut(r),d=1<<a,c|=n[a],r&=~d;return c}function rc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ut(p),T=1<<_,R=d[_];R===-1?(!(T&a)||T&c)&&(d[_]=rc(T,r)):R<=r&&(n.expiredLanes|=T),p&=~T}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ri(){var n=ds;return ds<<=1,!(ds&4194240)&&(ds=64),n}function kr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Nr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=a}function be(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Dr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ut(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ce=0;function Vr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Wa,ps,Ka,Ga,Qa,xo=!1,Fn=[],Et=null,In=null,Sn=null,Or=new Map,cn=new Map,Un=[],ic="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xa(n,r){switch(n){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Or.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(r.pointerId)}}function jt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Qo(r),r!==null&&ps(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function sc(n,r,a,c,d){switch(r){case"focusin":return Et=jt(Et,n,r,a,c,d),!0;case"dragenter":return In=jt(In,n,r,a,c,d),!0;case"mouseover":return Sn=jt(Sn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Or.set(p,jt(Or.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,cn.set(p,jt(cn.get(p)||null,n,r,a,c,d)),!0}return!1}function Ya(n){var r=Di(n.target);if(r!==null){var a=wn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ti(a),r!==null){n.blockedOn=r,Qa(n.priority,function(){Ka(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ir(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ms(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);_i=c,a.target.dispatchEvent(c),_i=null}else return r=Qo(a),r!==null&&ps(r),n.blockedOn=a,!1;r.shift()}return!0}function Ci(n,r,a){ir(n)&&a.delete(r)}function Ja(){xo=!1,Et!==null&&ir(Et)&&(Et=null),In!==null&&ir(In)&&(In=null),Sn!==null&&ir(Sn)&&(Sn=null),Or.forEach(Ci),cn.forEach(Ci)}function An(n,r){n.blockedOn===r&&(n.blockedOn=null,xo||(xo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ja)))}function Rn(n){function r(d){return An(d,n)}if(0<Fn.length){An(Fn[0],n);for(var a=1;a<Fn.length;a++){var c=Fn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Et!==null&&An(Et,n),In!==null&&An(In,n),Sn!==null&&An(Sn,n),Or.forEach(r),cn.forEach(r),a=0;a<Un.length;a++)c=Un[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Un.length&&(a=Un[0],a.blockedOn===null);)Ya(a),a.blockedOn===null&&Un.shift()}var sr=we.ReactCurrentBatchConfig,xr=!0;function We(n,r,a,c){var d=Ce,p=sr.transition;sr.transition=null;try{Ce=1,Lo(n,r,a,c)}finally{Ce=d,sr.transition=p}}function oc(n,r,a,c){var d=Ce,p=sr.transition;sr.transition=null;try{Ce=4,Lo(n,r,a,c)}finally{Ce=d,sr.transition=p}}function Lo(n,r,a,c){if(xr){var d=ms(n,r,a,c);if(d===null)yc(n,r,c,Pi,a),Xa(n,c);else if(sc(d,n,r,a,c))c.stopPropagation();else if(Xa(n,c),r&4&&-1<ic.indexOf(n)){for(;d!==null;){var p=Qo(d);if(p!==null&&Wa(p),p=ms(n,r,a,c),p===null&&yc(n,r,c,Pi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else yc(n,r,c,null,a)}}var Pi=null;function ms(n,r,a,c){if(Pi=null,n=is(c),n=Di(n),n!==null)if(r=wn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ti(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Pi=n,null}function Mo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ba()){case Ii:return 1;case Cr:return 4;case un:case Vo:return 16;case ja:return 536870912;default:return 16}default:return 16}}var tn=null,gs=null,$t=null;function Fo(){if($t)return $t;var n,r=gs,a=r.length,c,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return $t=d.slice(n,1<c?1-c:void 0)}function ys(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function bn(){return!0}function Uo(){return!1}function wt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?bn:Uo,this.isPropagationStopped=Uo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),r}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=wt(Cn),zn=ee({},Cn,{view:0,detail:0}),ac=wt(zn),vs,or,Lr,ki=ee({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lr&&(Lr&&n.type==="mousemove"?(vs=n.screenX-Lr.screenX,or=n.screenY-Lr.screenY):or=vs=0,Lr=n),vs)},movementY:function(n){return"movementY"in n?n.movementY:or}}),Es=wt(ki),bo=ee({},ki,{dataTransfer:0}),Za=wt(bo),ws=ee({},zn,{relatedTarget:0}),Ts=wt(ws),el=ee({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),ar=wt(el),tl=ee({},Cn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),nl=wt(tl),rl=ee({},Cn,{data:0}),zo=wt(rl),Is={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},il={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=il[n])?!!r[n]:!1}function Bn(){return sl}var l=ee({},zn,{key:function(n){if(n.key){var r=Is[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ys(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(n){return n.type==="keypress"?ys(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ys(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=wt(l),g=ee({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=wt(g),x=ee({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn}),b=wt(x),X=ee({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=wt(X),ut=ee({},ki,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=wt(ut),mt=[9,13,27,32],rt=m&&"CompositionEvent"in window,hn=null;m&&"documentMode"in document&&(hn=document.documentMode);var nn=m&&"TextEvent"in window&&!hn,Ni=m&&(!rt||hn&&8<hn&&11>=hn),Ss=" ",rf=!1;function sf(n,r){switch(n){case"keyup":return mt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function of(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function b_(n,r){switch(n){case"compositionend":return of(r);case"keypress":return r.which!==32?null:(rf=!0,Ss);case"textInput":return n=r.data,n===Ss&&rf?null:n;default:return null}}function z_(n,r){if(As)return n==="compositionend"||!rt&&sf(n,r)?(n=Fo(),$t=gs=tn=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ni&&r.locale!=="ko"?null:r.data;default:return null}}var B_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function af(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!B_[n.type]:r==="textarea"}function lf(n,r,a,c){Mn(c),r=cl(r,"onChange"),0<r.length&&(a=new _s("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Bo=null,jo=null;function j_(n){Rf(n,0)}function ol(n){var r=Ns(n);if(Zi(r))return n}function $_(n,r){if(n==="change")return r}var uf=!1;if(m){var lc;if(m){var uc="oninput"in document;if(!uc){var cf=document.createElement("div");cf.setAttribute("oninput","return;"),uc=typeof cf.oninput=="function"}lc=uc}else lc=!1;uf=lc&&(!document.documentMode||9<document.documentMode)}function hf(){Bo&&(Bo.detachEvent("onpropertychange",df),jo=Bo=null)}function df(n){if(n.propertyName==="value"&&ol(jo)){var r=[];lf(r,jo,n,is(n)),Po(j_,r)}}function q_(n,r,a){n==="focusin"?(hf(),Bo=r,jo=a,Bo.attachEvent("onpropertychange",df)):n==="focusout"&&hf()}function H_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ol(jo)}function W_(n,r){if(n==="click")return ol(r)}function K_(n,r){if(n==="input"||n==="change")return ol(r)}function G_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Pn=typeof Object.is=="function"?Object.is:G_;function $o(n,r){if(Pn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Pn(n[d],r[d]))return!1}return!0}function ff(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pf(n,r){var a=ff(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ff(a)}}function mf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?mf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function gf(){for(var n=window,r=Ar();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Ar(n.document)}return r}function cc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Q_(n){var r=gf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&mf(a.ownerDocument.documentElement,a)){if(c!==null&&cc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=pf(a,p);var _=pf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var X_=m&&"documentMode"in document&&11>=document.documentMode,Rs=null,hc=null,qo=null,dc=!1;function yf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;dc||Rs==null||Rs!==Ar(c)||(c=Rs,"selectionStart"in c&&cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),qo&&$o(qo,c)||(qo=c,c=cl(hc,"onSelect"),0<c.length&&(r=new _s("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Rs)))}function al(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Cs={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},fc={},_f={};m&&(_f=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function ll(n){if(fc[n])return fc[n];if(!Cs[n])return n;var r=Cs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in _f)return fc[n]=r[a];return n}var vf=ll("animationend"),Ef=ll("animationiteration"),wf=ll("animationstart"),Tf=ll("transitionend"),If=new Map,Sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(n,r){If.set(n,r),u(r,[n])}for(var pc=0;pc<Sf.length;pc++){var mc=Sf[pc],Y_=mc.toLowerCase(),J_=mc[0].toUpperCase()+mc.slice(1);Mr(Y_,"on"+J_)}Mr(vf,"onAnimationEnd"),Mr(Ef,"onAnimationIteration"),Mr(wf,"onAnimationStart"),Mr("dblclick","onDoubleClick"),Mr("focusin","onFocus"),Mr("focusout","onBlur"),Mr(Tf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function Af(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Ua(c,r,void 0,n),n.currentTarget=null}function Rf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,U=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;Af(d,T,U),p=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,U=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;Af(d,T,U),p=R}}}if(En)throw n=ko,En=!1,ko=null,n}function $e(n,r){var a=r[Ic];a===void 0&&(a=r[Ic]=new Set);var c=n+"__bubble";a.has(c)||(Cf(r,n,2,!1),a.add(c))}function gc(n,r,a){var c=0;r&&(c|=4),Cf(a,n,c,r)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Wo(n){if(!n[ul]){n[ul]=!0,s.forEach(function(a){a!=="selectionchange"&&(Z_.has(a)||gc(a,!1,n),gc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ul]||(r[ul]=!0,gc("selectionchange",!1,r))}}function Cf(n,r,a,c){switch(Mo(r)){case 1:var d=We;break;case 4:d=oc;break;default:d=Lo}a=d.bind(null,r,a,n),d=void 0,!as||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function yc(n,r,a,c,d){var p=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Di(T),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Po(function(){var U=p,H=is(a),K=[];e:{var $=If.get(n);if($!==void 0){var Z=_s,re=n;switch(n){case"keypress":if(ys(a)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":re="focus",Z=Ts;break;case"focusout":re="blur",Z=Ts;break;case"beforeblur":case"afterblur":Z=Ts;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Za;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=b;break;case vf:case Ef:case wf:Z=ar;break;case Tf:Z=Fe;break;case"scroll":Z=ac;break;case"wheel":Z=Ne;break;case"copy":case"cut":case"paste":Z=nl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var ie=(r&4)!==0,tt=!ie&&n==="scroll",M=ie?$!==null?$+"Capture":null:$;ie=[];for(var k=U,F;k!==null;){F=k;var G=F.stateNode;if(F.tag===5&&G!==null&&(F=G,M!==null&&(G=et(k,M),G!=null&&ie.push(Ko(k,G,F)))),tt)break;k=k.return}0<ie.length&&($=new Z($,re,null,a,H),K.push({event:$,listeners:ie}))}}if(!(r&7)){e:{if($=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",$&&a!==_i&&(re=a.relatedTarget||a.fromElement)&&(Di(re)||re[lr]))break e;if((Z||$)&&($=H.window===H?H:($=H.ownerDocument)?$.defaultView||$.parentWindow:window,Z?(re=a.relatedTarget||a.toElement,Z=U,re=re?Di(re):null,re!==null&&(tt=wn(re),re!==tt||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=U),Z!==re)){if(ie=Es,G="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(ie=E,G="onPointerLeave",M="onPointerEnter",k="pointer"),tt=Z==null?$:Ns(Z),F=re==null?$:Ns(re),$=new ie(G,k+"leave",Z,a,H),$.target=tt,$.relatedTarget=F,G=null,Di(H)===U&&(ie=new ie(M,k+"enter",re,a,H),ie.target=F,ie.relatedTarget=tt,G=ie),tt=G,Z&&re)t:{for(ie=Z,M=re,k=0,F=ie;F;F=Ps(F))k++;for(F=0,G=M;G;G=Ps(G))F++;for(;0<k-F;)ie=Ps(ie),k--;for(;0<F-k;)M=Ps(M),F--;for(;k--;){if(ie===M||M!==null&&ie===M.alternate)break t;ie=Ps(ie),M=Ps(M)}ie=null}else ie=null;Z!==null&&Pf(K,$,Z,ie,!1),re!==null&&tt!==null&&Pf(K,tt,re,ie,!0)}}e:{if($=U?Ns(U):window,Z=$.nodeName&&$.nodeName.toLowerCase(),Z==="select"||Z==="input"&&$.type==="file")var se=$_;else if(af($))if(uf)se=K_;else{se=H_;var ue=q_}else(Z=$.nodeName)&&Z.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(se=W_);if(se&&(se=se(n,U))){lf(K,se,a,H);break e}ue&&ue(n,$,U),n==="focusout"&&(ue=$._wrapperState)&&ue.controlled&&$.type==="number"&&ts($,"number",$.value)}switch(ue=U?Ns(U):window,n){case"focusin":(af(ue)||ue.contentEditable==="true")&&(Rs=ue,hc=U,qo=null);break;case"focusout":qo=hc=Rs=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,yf(K,a,H);break;case"selectionchange":if(X_)break;case"keydown":case"keyup":yf(K,a,H)}var ce;if(rt)e:{switch(n){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else As?sf(n,a)&&(de="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Ni&&a.locale!=="ko"&&(As||de!=="onCompositionStart"?de==="onCompositionEnd"&&As&&(ce=Fo()):(tn=H,gs="value"in tn?tn.value:tn.textContent,As=!0)),ue=cl(U,de),0<ue.length&&(de=new zo(de,n,null,a,H),K.push({event:de,listeners:ue}),ce?de.data=ce:(ce=of(a),ce!==null&&(de.data=ce)))),(ce=nn?b_(n,a):z_(n,a))&&(U=cl(U,"onBeforeInput"),0<U.length&&(H=new zo("onBeforeInput","beforeinput",null,a,H),K.push({event:H,listeners:U}),H.data=ce))}Rf(K,r)})}function Ko(n,r,a){return{instance:n,listener:r,currentTarget:a}}function cl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=et(n,a),p!=null&&c.unshift(Ko(n,p,d)),p=et(n,r),p!=null&&c.push(Ko(n,p,d))),n=n.return}return c}function Ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Pf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,R=T.alternate,U=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&U!==null&&(T=U,d?(R=et(a,p),R!=null&&_.unshift(Ko(a,R,T))):d||(R=et(a,p),R!=null&&_.push(Ko(a,R,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var ev=/\r\n?/g,tv=/\u0000|\uFFFD/g;function kf(n){return(typeof n=="string"?n:""+n).replace(ev,`
`).replace(tv,"")}function hl(n,r,a){if(r=kf(r),kf(n)!==r&&a)throw Error(t(425))}function dl(){}var _c=null,vc=null;function Ec(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,nv=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,rv=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(n){return Nf.resolve(null).then(n).catch(iv)}:wc;function iv(n){setTimeout(function(){throw n})}function Tc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Rn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Rn(r)}function Fr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Df(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var ks=Math.random().toString(36).slice(2),jn="__reactFiber$"+ks,Go="__reactProps$"+ks,lr="__reactContainer$"+ks,Ic="__reactEvents$"+ks,sv="__reactListeners$"+ks,ov="__reactHandles$"+ks;function Di(n){var r=n[jn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[lr]||a[jn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Df(n);n!==null;){if(a=n[jn])return a;n=Df(n)}return r}n=a,a=n.parentNode}return null}function Qo(n){return n=n[jn]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ns(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function fl(n){return n[Go]||null}var Sc=[],Ds=-1;function Ur(n){return{current:n}}function qe(n){0>Ds||(n.current=Sc[Ds],Sc[Ds]=null,Ds--)}function je(n,r){Ds++,Sc[Ds]=n.current,n.current=r}var br={},Nt=Ur(br),qt=Ur(!1),Vi=br;function Vs(n,r){var a=n.type.contextTypes;if(!a)return br;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function pl(){qe(qt),qe(Nt)}function Vf(n,r,a){if(Nt.current!==br)throw Error(t(168));je(Nt,r),je(qt,a)}function Of(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,xe(n)||"Unknown",d));return ee({},a,c)}function ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||br,Vi=Nt.current,je(Nt,n),je(qt,qt.current),!0}function xf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Of(n,r,Vi),c.__reactInternalMemoizedMergedChildContext=n,qe(qt),qe(Nt),je(Nt,n)):qe(qt),je(qt,a)}var ur=null,gl=!1,Ac=!1;function Lf(n){ur===null?ur=[n]:ur.push(n)}function av(n){gl=!0,Lf(n)}function zr(){if(!Ac&&ur!==null){Ac=!0;var n=0,r=Ce;try{var a=ur;for(Ce=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ur=null,gl=!1}catch(d){throw ur!==null&&(ur=ur.slice(n+1)),hs(Ii,zr),d}finally{Ce=r,Ac=!1}}return null}var Os=[],xs=0,yl=null,_l=0,dn=[],fn=0,Oi=null,cr=1,hr="";function xi(n,r){Os[xs++]=_l,Os[xs++]=yl,yl=n,_l=r}function Mf(n,r,a){dn[fn++]=cr,dn[fn++]=hr,dn[fn++]=Oi,Oi=n;var c=cr;n=hr;var d=32-Ut(c)-1;c&=~(1<<d),a+=1;var p=32-Ut(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,cr=1<<32-Ut(r)+d|a<<d|c,hr=p+n}else cr=1<<p|a<<d|c,hr=n}function Rc(n){n.return!==null&&(xi(n,1),Mf(n,1,0))}function Cc(n){for(;n===yl;)yl=Os[--xs],Os[xs]=null,_l=Os[--xs],Os[xs]=null;for(;n===Oi;)Oi=dn[--fn],dn[fn]=null,hr=dn[--fn],dn[fn]=null,cr=dn[--fn],dn[fn]=null}var rn=null,sn=null,Ke=!1,kn=null;function Ff(n,r){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Uf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=Fr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Oi!==null?{id:cr,overflow:hr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Pc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kc(n){if(Ke){var r=sn;if(r){var a=r;if(!Uf(n,r)){if(Pc(n))throw Error(t(418));r=Fr(a.nextSibling);var c=rn;r&&Uf(n,r)?Ff(c,a):(n.flags=n.flags&-4097|2,Ke=!1,rn=n)}}else{if(Pc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ke=!1,rn=n}}}function bf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function vl(n){if(n!==rn)return!1;if(!Ke)return bf(n),Ke=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Ec(n.type,n.memoizedProps)),r&&(r=sn)){if(Pc(n))throw zf(),Error(t(418));for(;r;)Ff(n,r),r=Fr(r.nextSibling)}if(bf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=Fr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?Fr(n.stateNode.nextSibling):null;return!0}function zf(){for(var n=sn;n;)n=Fr(n.nextSibling)}function Ls(){sn=rn=null,Ke=!1}function Nc(n){kn===null?kn=[n]:kn.push(n)}var lv=we.ReactCurrentBatchConfig;function Xo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function El(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Bf(n){var r=n._init;return r(n._payload)}function jf(n){function r(M,k){if(n){var F=M.deletions;F===null?(M.deletions=[k],M.flags|=16):F.push(k)}}function a(M,k){if(!n)return null;for(;k!==null;)r(M,k),k=k.sibling;return null}function c(M,k){for(M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function d(M,k){return M=Gr(M,k),M.index=0,M.sibling=null,M}function p(M,k,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<k?(M.flags|=2,k):F):(M.flags|=2,k)):(M.flags|=1048576,k)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,k,F,G){return k===null||k.tag!==6?(k=wh(F,M.mode,G),k.return=M,k):(k=d(k,F),k.return=M,k)}function R(M,k,F,G){var se=F.type;return se===N?H(M,k,F.props.children,G,F.key):k!==null&&(k.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===kt&&Bf(se)===k.type)?(G=d(k,F.props),G.ref=Xo(M,k,F),G.return=M,G):(G=ql(F.type,F.key,F.props,null,M.mode,G),G.ref=Xo(M,k,F),G.return=M,G)}function U(M,k,F,G){return k===null||k.tag!==4||k.stateNode.containerInfo!==F.containerInfo||k.stateNode.implementation!==F.implementation?(k=Th(F,M.mode,G),k.return=M,k):(k=d(k,F.children||[]),k.return=M,k)}function H(M,k,F,G,se){return k===null||k.tag!==7?(k=ji(F,M.mode,G,se),k.return=M,k):(k=d(k,F),k.return=M,k)}function K(M,k,F){if(typeof k=="string"&&k!==""||typeof k=="number")return k=wh(""+k,M.mode,F),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case He:return F=ql(k.type,k.key,k.props,null,M.mode,F),F.ref=Xo(M,null,k),F.return=M,F;case Se:return k=Th(k,M.mode,F),k.return=M,k;case kt:var G=k._init;return K(M,G(k._payload),F)}if(Zn(k)||le(k))return k=ji(k,M.mode,F,null),k.return=M,k;El(M,k)}return null}function $(M,k,F,G){var se=k!==null?k.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return se!==null?null:T(M,k,""+F,G);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case He:return F.key===se?R(M,k,F,G):null;case Se:return F.key===se?U(M,k,F,G):null;case kt:return se=F._init,$(M,k,se(F._payload),G)}if(Zn(F)||le(F))return se!==null?null:H(M,k,F,G,null);El(M,F)}return null}function Z(M,k,F,G,se){if(typeof G=="string"&&G!==""||typeof G=="number")return M=M.get(F)||null,T(k,M,""+G,se);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case He:return M=M.get(G.key===null?F:G.key)||null,R(k,M,G,se);case Se:return M=M.get(G.key===null?F:G.key)||null,U(k,M,G,se);case kt:var ue=G._init;return Z(M,k,F,ue(G._payload),se)}if(Zn(G)||le(G))return M=M.get(F)||null,H(k,M,G,se,null);El(k,G)}return null}function re(M,k,F,G){for(var se=null,ue=null,ce=k,de=k=0,_t=null;ce!==null&&de<F.length;de++){ce.index>de?(_t=ce,ce=null):_t=ce.sibling;var Oe=$(M,ce,F[de],G);if(Oe===null){ce===null&&(ce=_t);break}n&&ce&&Oe.alternate===null&&r(M,ce),k=p(Oe,k,de),ue===null?se=Oe:ue.sibling=Oe,ue=Oe,ce=_t}if(de===F.length)return a(M,ce),Ke&&xi(M,de),se;if(ce===null){for(;de<F.length;de++)ce=K(M,F[de],G),ce!==null&&(k=p(ce,k,de),ue===null?se=ce:ue.sibling=ce,ue=ce);return Ke&&xi(M,de),se}for(ce=c(M,ce);de<F.length;de++)_t=Z(ce,M,de,F[de],G),_t!==null&&(n&&_t.alternate!==null&&ce.delete(_t.key===null?de:_t.key),k=p(_t,k,de),ue===null?se=_t:ue.sibling=_t,ue=_t);return n&&ce.forEach(function(Qr){return r(M,Qr)}),Ke&&xi(M,de),se}function ie(M,k,F,G){var se=le(F);if(typeof se!="function")throw Error(t(150));if(F=se.call(F),F==null)throw Error(t(151));for(var ue=se=null,ce=k,de=k=0,_t=null,Oe=F.next();ce!==null&&!Oe.done;de++,Oe=F.next()){ce.index>de?(_t=ce,ce=null):_t=ce.sibling;var Qr=$(M,ce,Oe.value,G);if(Qr===null){ce===null&&(ce=_t);break}n&&ce&&Qr.alternate===null&&r(M,ce),k=p(Qr,k,de),ue===null?se=Qr:ue.sibling=Qr,ue=Qr,ce=_t}if(Oe.done)return a(M,ce),Ke&&xi(M,de),se;if(ce===null){for(;!Oe.done;de++,Oe=F.next())Oe=K(M,Oe.value,G),Oe!==null&&(k=p(Oe,k,de),ue===null?se=Oe:ue.sibling=Oe,ue=Oe);return Ke&&xi(M,de),se}for(ce=c(M,ce);!Oe.done;de++,Oe=F.next())Oe=Z(ce,M,de,Oe.value,G),Oe!==null&&(n&&Oe.alternate!==null&&ce.delete(Oe.key===null?de:Oe.key),k=p(Oe,k,de),ue===null?se=Oe:ue.sibling=Oe,ue=Oe);return n&&ce.forEach(function(zv){return r(M,zv)}),Ke&&xi(M,de),se}function tt(M,k,F,G){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case He:e:{for(var se=F.key,ue=k;ue!==null;){if(ue.key===se){if(se=F.type,se===N){if(ue.tag===7){a(M,ue.sibling),k=d(ue,F.props.children),k.return=M,M=k;break e}}else if(ue.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===kt&&Bf(se)===ue.type){a(M,ue.sibling),k=d(ue,F.props),k.ref=Xo(M,ue,F),k.return=M,M=k;break e}a(M,ue);break}else r(M,ue);ue=ue.sibling}F.type===N?(k=ji(F.props.children,M.mode,G,F.key),k.return=M,M=k):(G=ql(F.type,F.key,F.props,null,M.mode,G),G.ref=Xo(M,k,F),G.return=M,M=G)}return _(M);case Se:e:{for(ue=F.key;k!==null;){if(k.key===ue)if(k.tag===4&&k.stateNode.containerInfo===F.containerInfo&&k.stateNode.implementation===F.implementation){a(M,k.sibling),k=d(k,F.children||[]),k.return=M,M=k;break e}else{a(M,k);break}else r(M,k);k=k.sibling}k=Th(F,M.mode,G),k.return=M,M=k}return _(M);case kt:return ue=F._init,tt(M,k,ue(F._payload),G)}if(Zn(F))return re(M,k,F,G);if(le(F))return ie(M,k,F,G);El(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,k!==null&&k.tag===6?(a(M,k.sibling),k=d(k,F),k.return=M,M=k):(a(M,k),k=wh(F,M.mode,G),k.return=M,M=k),_(M)):a(M,k)}return tt}var Ms=jf(!0),$f=jf(!1),wl=Ur(null),Tl=null,Fs=null,Dc=null;function Vc(){Dc=Fs=Tl=null}function Oc(n){var r=wl.current;qe(wl),n._currentValue=r}function xc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Us(n,r){Tl=n,Dc=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Wt=!0),n.firstContext=null)}function pn(n){var r=n._currentValue;if(Dc!==n)if(n={context:n,memoizedValue:r,next:null},Fs===null){if(Tl===null)throw Error(t(308));Fs=n,Tl.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return r}var Li=null;function Lc(n){Li===null?Li=[n]:Li.push(n)}function qf(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Lc(r)):(a.next=d.next,d.next=a),r.interleaved=a,dr(n,c)}function dr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Br=!1;function Mc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function jr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,dr(n,a)}return d=c.interleaved,d===null?(r.next=r,Lc(c)):(r.next=d.next,d.next=r),c.interleaved=r,dr(n,a)}function Il(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Dr(n,a)}}function Wf(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Sl(n,r,a,c){var d=n.updateQueue;Br=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,U=R.next;R.next=null,_===null?p=U:_.next=U,_=R;var H=n.alternate;H!==null&&(H=H.updateQueue,T=H.lastBaseUpdate,T!==_&&(T===null?H.firstBaseUpdate=U:T.next=U,H.lastBaseUpdate=R))}if(p!==null){var K=d.baseState;_=0,H=U=R=null,T=p;do{var $=T.lane,Z=T.eventTime;if((c&$)===$){H!==null&&(H=H.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var re=n,ie=T;switch($=r,Z=a,ie.tag){case 1:if(re=ie.payload,typeof re=="function"){K=re.call(Z,K,$);break e}K=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ie.payload,$=typeof re=="function"?re.call(Z,K,$):re,$==null)break e;K=ee({},K,$);break e;case 2:Br=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,$=d.effects,$===null?d.effects=[T]:$.push(T))}else Z={eventTime:Z,lane:$,tag:T.tag,payload:T.payload,callback:T.callback,next:null},H===null?(U=H=Z,R=K):H=H.next=Z,_|=$;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;$=T,T=$.next,$.next=null,d.lastBaseUpdate=$,d.shared.pending=null}}while(!0);if(H===null&&(R=K),d.baseState=R,d.firstBaseUpdate=U,d.lastBaseUpdate=H,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Ui|=_,n.lanes=_,n.memoizedState=K}}function Kf(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Yo={},$n=Ur(Yo),Jo=Ur(Yo),Zo=Ur(Yo);function Mi(n){if(n===Yo)throw Error(t(174));return n}function Fc(n,r){switch(je(Zo,r),je(Jo,n),je($n,Yo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:lt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=lt(r,n)}qe($n),je($n,r)}function bs(){qe($n),qe(Jo),qe(Zo)}function Gf(n){Mi(Zo.current);var r=Mi($n.current),a=lt(r,n.type);r!==a&&(je(Jo,n),je($n,a))}function Uc(n){Jo.current===n&&(qe($n),qe(Jo))}var Qe=Ur(0);function Al(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var bc=[];function zc(){for(var n=0;n<bc.length;n++)bc[n]._workInProgressVersionPrimary=null;bc.length=0}var Rl=we.ReactCurrentDispatcher,Bc=we.ReactCurrentBatchConfig,Fi=0,Xe=null,ct=null,gt=null,Cl=!1,ea=!1,ta=0,uv=0;function Dt(){throw Error(t(321))}function jc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Pn(n[a],r[a]))return!1;return!0}function $c(n,r,a,c,d,p){if(Fi=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Rl.current=n===null||n.memoizedState===null?fv:pv,n=a(c,d),ea){p=0;do{if(ea=!1,ta=0,25<=p)throw Error(t(301));p+=1,gt=ct=null,r.updateQueue=null,Rl.current=mv,n=a(c,d)}while(ea)}if(Rl.current=Nl,r=ct!==null&&ct.next!==null,Fi=0,gt=ct=Xe=null,Cl=!1,r)throw Error(t(300));return n}function qc(){var n=ta!==0;return ta=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Xe.memoizedState=gt=n:gt=gt.next=n,gt}function mn(){if(ct===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var r=gt===null?Xe.memoizedState:gt.next;if(r!==null)gt=r,ct=n;else{if(n===null)throw Error(t(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},gt===null?Xe.memoizedState=gt=n:gt=gt.next=n}return gt}function na(n,r){return typeof r=="function"?r(n):r}function Hc(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ct,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,R=null,U=p;do{var H=U.lane;if((Fi&H)===H)R!==null&&(R=R.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var K={lane:H,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};R===null?(T=R=K,_=c):R=R.next=K,Xe.lanes|=H,Ui|=H}U=U.next}while(U!==null&&U!==p);R===null?_=c:R.next=T,Pn(c,r.memoizedState)||(Wt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,Ui|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Wc(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Pn(p,r.memoizedState)||(Wt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function Qf(){}function Xf(n,r){var a=Xe,c=mn(),d=r(),p=!Pn(c.memoizedState,d);if(p&&(c.memoizedState=d,Wt=!0),c=c.queue,Kc(Zf.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||gt!==null&&gt.memoizedState.tag&1){if(a.flags|=2048,ra(9,Jf.bind(null,a,c,d,r),void 0,null),yt===null)throw Error(t(349));Fi&30||Yf(a,r,d)}return d}function Yf(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Jf(n,r,a,c){r.value=a,r.getSnapshot=c,ep(r)&&tp(n)}function Zf(n,r,a){return a(function(){ep(r)&&tp(n)})}function ep(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Pn(n,a)}catch{return!0}}function tp(n){var r=dr(n,1);r!==null&&On(r,n,1,-1)}function np(n){var r=qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},r.queue=n,n=n.dispatch=dv.bind(null,Xe,n),[r.memoizedState,n]}function ra(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function rp(){return mn().memoizedState}function Pl(n,r,a,c){var d=qn();Xe.flags|=n,d.memoizedState=ra(1|r,a,void 0,c===void 0?null:c)}function kl(n,r,a,c){var d=mn();c=c===void 0?null:c;var p=void 0;if(ct!==null){var _=ct.memoizedState;if(p=_.destroy,c!==null&&jc(c,_.deps)){d.memoizedState=ra(r,a,p,c);return}}Xe.flags|=n,d.memoizedState=ra(1|r,a,p,c)}function ip(n,r){return Pl(8390656,8,n,r)}function Kc(n,r){return kl(2048,8,n,r)}function sp(n,r){return kl(4,2,n,r)}function op(n,r){return kl(4,4,n,r)}function ap(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function lp(n,r,a){return a=a!=null?a.concat([n]):null,kl(4,4,ap.bind(null,r,n),a)}function Gc(){}function up(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&jc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function cp(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&jc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function hp(n,r,a){return Fi&21?(Pn(a,r)||(a=Ri(),Xe.lanes|=a,Ui|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=a)}function cv(n,r){var a=Ce;Ce=a!==0&&4>a?a:4,n(!0);var c=Bc.transition;Bc.transition={};try{n(!1),r()}finally{Ce=a,Bc.transition=c}}function dp(){return mn().memoizedState}function hv(n,r,a){var c=Wr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fp(n))pp(r,a);else if(a=qf(n,r,a,c),a!==null){var d=Bt();On(a,n,c,d),mp(a,r,c)}}function dv(n,r,a){var c=Wr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fp(n))pp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Pn(T,_)){var R=r.interleaved;R===null?(d.next=d,Lc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=qf(n,r,d,c),a!==null&&(d=Bt(),On(a,n,c,d),mp(a,r,c))}}function fp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function pp(n,r){ea=Cl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function mp(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Dr(n,a)}}var Nl={readContext:pn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},fv={readContext:pn,useCallback:function(n,r){return qn().memoizedState=[n,r===void 0?null:r],n},useContext:pn,useEffect:ip,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Pl(4194308,4,ap.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Pl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Pl(4,2,n,r)},useMemo:function(n,r){var a=qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=hv.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=qn();return n={current:n},r.memoizedState=n},useState:np,useDebugValue:Gc,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=np(!1),r=n[0];return n=cv.bind(null,n[1]),qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=qn();if(Ke){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),yt===null)throw Error(t(349));Fi&30||Yf(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,ip(Zf.bind(null,c,p,n),[n]),c.flags|=2048,ra(9,Jf.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=qn(),r=yt.identifierPrefix;if(Ke){var a=hr,c=cr;a=(c&~(1<<32-Ut(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ta++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=uv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},pv={readContext:pn,useCallback:up,useContext:pn,useEffect:Kc,useImperativeHandle:lp,useInsertionEffect:sp,useLayoutEffect:op,useMemo:cp,useReducer:Hc,useRef:rp,useState:function(){return Hc(na)},useDebugValue:Gc,useDeferredValue:function(n){var r=mn();return hp(r,ct.memoizedState,n)},useTransition:function(){var n=Hc(na)[0],r=mn().memoizedState;return[n,r]},useMutableSource:Qf,useSyncExternalStore:Xf,useId:dp,unstable_isNewReconciler:!1},mv={readContext:pn,useCallback:up,useContext:pn,useEffect:Kc,useImperativeHandle:lp,useInsertionEffect:sp,useLayoutEffect:op,useMemo:cp,useReducer:Wc,useRef:rp,useState:function(){return Wc(na)},useDebugValue:Gc,useDeferredValue:function(n){var r=mn();return ct===null?r.memoizedState=n:hp(r,ct.memoizedState,n)},useTransition:function(){var n=Wc(na)[0],r=mn().memoizedState;return[n,r]},useMutableSource:Qf,useSyncExternalStore:Xf,useId:dp,unstable_isNewReconciler:!1};function Nn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Qc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Dl={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Wr(n),p=fr(c,d);p.payload=r,a!=null&&(p.callback=a),r=jr(n,p,d),r!==null&&(On(r,n,d,c),Il(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Wr(n),p=fr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=jr(n,p,d),r!==null&&(On(r,n,d,c),Il(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=Wr(n),d=fr(a,c);d.tag=2,r!=null&&(d.callback=r),r=jr(n,d,c),r!==null&&(On(r,n,c,a),Il(r,n,c))}};function gp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!$o(a,c)||!$o(d,p):!0}function yp(n,r,a){var c=!1,d=br,p=r.contextType;return typeof p=="object"&&p!==null?p=pn(p):(d=Ht(r)?Vi:Nt.current,c=r.contextTypes,p=(c=c!=null)?Vs(n,d):br),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Dl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function _p(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Dl.enqueueReplaceState(r,r.state,null)}function Xc(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Mc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=pn(p):(p=Ht(r)?Vi:Nt.current,d.context=Vs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Qc(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Dl.enqueueReplaceState(d,d.state,null),Sl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,r){try{var a="",c=r;do a+=Te(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function Yc(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Jc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var gv=typeof WeakMap=="function"?WeakMap:Map;function vp(n,r,a){a=fr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Ul||(Ul=!0,fh=c),Jc(n,r)},a}function Ep(n,r,a){a=fr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){Jc(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Jc(n,r),typeof c!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function wp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new gv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=Nv.bind(null,n,r,a),r.then(n,n))}function Tp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Ip(n,r,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=fr(-1,1),r.tag=2,jr(a,r,1))),a.lanes|=1),n)}var yv=we.ReactCurrentOwner,Wt=!1;function zt(n,r,a,c){r.child=n===null?$f(r,null,a,c):Ms(r,n.child,a,c)}function Sp(n,r,a,c,d){a=a.render;var p=r.ref;return Us(r,d),c=$c(n,r,a,c,p,d),a=qc(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,pr(n,r,d)):(Ke&&a&&Rc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Ap(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Eh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Rp(n,r,p,c,d)):(n=ql(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&d)){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(_,c)&&n.ref===r.ref)return pr(n,r,d)}return r.flags|=1,n=Gr(p,c),n.ref=r.ref,n.return=r,r.child=n}function Rp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if($o(p,c)&&n.ref===r.ref)if(Wt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)n.flags&131072&&(Wt=!0);else return r.lanes=n.lanes,pr(n,r,d)}return Zc(n,r,a,c,d)}function Cp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(js,on),on|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,je(js,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,je(js,on),on|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,je(js,on),on|=c;return zt(n,r,d,a),r.child}function Pp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Zc(n,r,a,c,d){var p=Ht(a)?Vi:Nt.current;return p=Vs(r,p),Us(r,d),a=$c(n,r,a,c,p,d),c=qc(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,pr(n,r,d)):(Ke&&c&&Rc(r),r.flags|=1,zt(n,r,a,d),r.child)}function kp(n,r,a,c,d){if(Ht(a)){var p=!0;ml(r)}else p=!1;if(Us(r,d),r.stateNode===null)Ol(n,r),yp(r,a,c),Xc(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,U=a.contextType;typeof U=="object"&&U!==null?U=pn(U):(U=Ht(a)?Vi:Nt.current,U=Vs(r,U));var H=a.getDerivedStateFromProps,K=typeof H=="function"||typeof _.getSnapshotBeforeUpdate=="function";K||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==U)&&_p(r,_,c,U),Br=!1;var $=r.memoizedState;_.state=$,Sl(r,c,_,d),R=r.memoizedState,T!==c||$!==R||qt.current||Br?(typeof H=="function"&&(Qc(r,a,H,c),R=r.memoizedState),(T=Br||gp(r,a,T,c,$,R,U))?(K||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=U,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,Hf(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:Nn(r.type,T),_.props=U,K=r.pendingProps,$=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=pn(R):(R=Ht(a)?Vi:Nt.current,R=Vs(r,R));var Z=a.getDerivedStateFromProps;(H=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==K||$!==R)&&_p(r,_,c,R),Br=!1,$=r.memoizedState,_.state=$,Sl(r,c,_,d);var re=r.memoizedState;T!==K||$!==re||qt.current||Br?(typeof Z=="function"&&(Qc(r,a,Z,c),re=r.memoizedState),(U=Br||gp(r,a,U,c,$,re,R)||!1)?(H||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,re,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,re,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),_.props=c,_.state=re,_.context=R,c=U):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=1024),c=!1)}return eh(n,r,a,c,p,d)}function eh(n,r,a,c,d,p){Pp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&xf(r,a,!1),pr(n,r,p);c=r.stateNode,yv.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Ms(r,n.child,null,p),r.child=Ms(r,null,T,p)):zt(n,r,T,p),r.memoizedState=c.state,d&&xf(r,a,!0),r.child}function Np(n){var r=n.stateNode;r.pendingContext?Vf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Vf(n,r.context,!1),Fc(n,r.containerInfo)}function Dp(n,r,a,c,d){return Ls(),Nc(d),r.flags|=256,zt(n,r,a,c),r.child}var th={dehydrated:null,treeContext:null,retryLane:0};function nh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Vp(n,r,a){var c=r.pendingProps,d=Qe.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),je(Qe,d&1),n===null)return kc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Hl(_,c,0,null),n=ji(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=nh(a),r.memoizedState=th,n):rh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return _v(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return!(_&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=Gr(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Gr(T,p):(p=ji(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?nh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=th,c}return p=n.child,n=p.sibling,c=Gr(p,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function rh(n,r){return r=Hl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Vl(n,r,a,c){return c!==null&&Nc(c),Ms(r,n.child,null,a),n=rh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function _v(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=Yc(Error(t(422))),Vl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Hl({mode:"visible",children:c.children},d,0,null),p=ji(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,r.mode&1&&Ms(r,n.child,null,_),r.child.memoizedState=nh(_),r.memoizedState=th,p);if(!(r.mode&1))return Vl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Yc(p,c,void 0),Vl(n,r,_,c)}if(T=(_&n.childLanes)!==0,Wt||T){if(c=yt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|_)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,dr(n,d),On(c,n,d,-1))}return vh(),c=Yc(Error(t(421))),Vl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=Dv.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,sn=Fr(d.nextSibling),rn=r,Ke=!0,kn=null,n!==null&&(dn[fn++]=cr,dn[fn++]=hr,dn[fn++]=Oi,cr=n.id,hr=n.overflow,Oi=r),r=rh(r,c.children),r.flags|=4096,r)}function Op(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),xc(n.return,r,a)}function ih(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function xp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,a),c=Qe.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Op(n,a,r);else if(n.tag===19)Op(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(je(Qe,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Al(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),ih(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Al(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}ih(r,!0,a,null,p);break;case"together":ih(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ol(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function pr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ui|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Gr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Gr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function vv(n,r,a){switch(r.tag){case 3:Np(r),Ls();break;case 5:Gf(r);break;case 1:Ht(r.type)&&ml(r);break;case 4:Fc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;je(wl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(je(Qe,Qe.current&1),r.flags|=128,null):a&r.child.childLanes?Vp(n,r,a):(je(Qe,Qe.current&1),n=pr(n,r,a),n!==null?n.sibling:null);je(Qe,Qe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return xp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),je(Qe,Qe.current),c)break;return null;case 22:case 23:return r.lanes=0,Cp(n,r,a)}return pr(n,r,a)}var Lp,sh,Mp,Fp;Lp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},sh=function(){},Mp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Mi($n.current);var p=null;switch(a){case"input":d=mi(n,d),c=mi(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=_o(n,d),c=_o(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=dl)}So(a,c);var _;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var R=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&R!==T&&(R!=null||T!=null))if(U==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(U,a)),a=R;else U==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(U,R)):U==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(U,""+R):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(R!=null&&U==="onScroll"&&$e("scroll",n),p||T===R||(p=[])):(p=p||[]).push(U,R))}a&&(p=p||[]).push("style",a);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},Fp=function(n,r,a,c){a!==c&&(r.flags|=4)};function ia(n,r){if(!Ke)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Ev(n,r,a){var c=r.pendingProps;switch(Cc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Ht(r.type)&&pl(),Vt(r),null;case 3:return c=r.stateNode,bs(),qe(qt),qe(Nt),zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,kn!==null&&(gh(kn),kn=null))),sh(n,r),Vt(r),null;case 5:Uc(r);var d=Mi(Zo.current);if(a=r.type,n!==null&&r.stateNode!=null)Mp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=Mi($n.current),vl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[jn]=r,c[Go]=p,n=(r.mode&1)!==0,a){case"dialog":$e("cancel",c),$e("close",c);break;case"iframe":case"object":case"embed":$e("load",c);break;case"video":case"audio":for(d=0;d<Ho.length;d++)$e(Ho[d],c);break;case"source":$e("error",c);break;case"img":case"image":case"link":$e("error",c),$e("load",c);break;case"details":$e("toggle",c);break;case"input":es(c,p),$e("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},$e("invalid",c);break;case"textarea":ns(c,p),$e("invalid",c)}So(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&hl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&hl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&$e("scroll",c)}switch(a){case"input":Jn(c),Fa(c,p,!0);break;case"textarea":Jn(c),vo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=dl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=at(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[jn]=r,n[Go]=c,Lp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Ao(a,c),a){case"dialog":$e("cancel",n),$e("close",n),d=c;break;case"iframe":case"object":case"embed":$e("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ho.length;d++)$e(Ho[d],n);d=c;break;case"source":$e("error",n),d=c;break;case"img":case"image":case"link":$e("error",n),$e("load",n),d=c;break;case"details":$e("toggle",n),d=c;break;case"input":es(n,c),d=mi(n,c),$e("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),$e("invalid",n);break;case"textarea":ns(n,c),d=_o(n,c),$e("invalid",n);break;default:d=c}So(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?To(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Eo(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Rr(n,R):typeof R=="number"&&Rr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&$e("scroll",n):R!=null&&ye(n,p,R,_))}switch(a){case"input":Jn(n),Fa(n,c,!1);break;case"textarea":Jn(n),vo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?er(n,!!c.multiple,p,!1):c.defaultValue!=null&&er(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=dl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)Fp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Mi(Zo.current),Mi($n.current),vl(r)){if(c=r.stateNode,a=r.memoizedProps,c[jn]=r,(p=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:hl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&hl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[jn]=r,r.stateNode=c}return Vt(r),null;case 13:if(qe(Qe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ke&&sn!==null&&r.mode&1&&!(r.flags&128))zf(),Ls(),r.flags|=98560,p=!1;else if(p=vl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[jn]=r}else Ls(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Vt(r),p=!1}else kn!==null&&(gh(kn),kn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Qe.current&1?ht===0&&(ht=3):vh())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return bs(),sh(n,r),n===null&&Wo(r.stateNode.containerInfo),Vt(r),null;case 10:return Oc(r.type._context),Vt(r),null;case 17:return Ht(r.type)&&pl(),Vt(r),null;case 19:if(qe(Qe),p=r.memoizedState,p===null)return Vt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)ia(p,!1);else{if(ht!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(_=Al(n),_!==null){for(r.flags|=128,ia(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return je(Qe,Qe.current&1|2),r.child}n=n.sibling}p.tail!==null&&Be()>$s&&(r.flags|=128,c=!0,ia(p,!1),r.lanes=4194304)}else{if(!c)if(n=Al(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ia(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ke)return Vt(r),null}else 2*Be()-p.renderingStartTime>$s&&a!==1073741824&&(r.flags|=128,c=!0,ia(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Be(),r.sibling=null,a=Qe.current,je(Qe,c?a&1|2:a&1),r):(Vt(r),null);case 22:case 23:return _h(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?on&1073741824&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function wv(n,r){switch(Cc(r),r.tag){case 1:return Ht(r.type)&&pl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return bs(),qe(qt),qe(Nt),zc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Uc(r),null;case 13:if(qe(Qe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ls()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qe(Qe),null;case 4:return bs(),null;case 10:return Oc(r.type._context),null;case 22:case 23:return _h(),null;case 24:return null;default:return null}}var xl=!1,Ot=!1,Tv=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Bs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Je(n,r,c)}else a.current=null}function oh(n,r,a){try{a()}catch(c){Je(n,r,c)}}var Up=!1;function Iv(n,r){if(_c=xr,n=gf(),cc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,R=-1,U=0,H=0,K=n,$=null;t:for(;;){for(var Z;K!==a||d!==0&&K.nodeType!==3||(T=_+d),K!==p||c!==0&&K.nodeType!==3||(R=_+c),K.nodeType===3&&(_+=K.nodeValue.length),(Z=K.firstChild)!==null;)$=K,K=Z;for(;;){if(K===n)break t;if($===a&&++U===d&&(T=_),$===p&&++H===c&&(R=_),(Z=K.nextSibling)!==null)break;K=$,$=K.parentNode}K=Z}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(vc={focusedElem:n,selectionRange:a},xr=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ie=re.memoizedProps,tt=re.memoizedState,M=r.stateNode,k=M.getSnapshotBeforeUpdate(r.elementType===r.type?ie:Nn(r.type,ie),tt);M.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(G){Je(r,r.return,G)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=Up,Up=!1,re}function sa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&oh(r,a,p)}d=d.next}while(d!==c)}}function Ll(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function ah(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function bp(n){var r=n.alternate;r!==null&&(n.alternate=null,bp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[jn],delete r[Go],delete r[Ic],delete r[sv],delete r[ov])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zp(n){return n.tag===5||n.tag===3||n.tag===4}function Bp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function lh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=dl));else if(c!==4&&(n=n.child,n!==null))for(lh(n,r,a),n=n.sibling;n!==null;)lh(n,r,a),n=n.sibling}function uh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(uh(n,r,a),n=n.sibling;n!==null;)uh(n,r,a),n=n.sibling}var Tt=null,Dn=!1;function $r(n,r,a){for(a=a.child;a!==null;)jp(n,r,a),a=a.sibling}function jp(n,r,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Si,a)}catch{}switch(a.tag){case 5:Ot||Bs(a,r);case 6:var c=Tt,d=Dn;Tt=null,$r(n,r,a),Tt=c,Dn=d,Tt!==null&&(Dn?(n=Tt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Tt.removeChild(a.stateNode));break;case 18:Tt!==null&&(Dn?(n=Tt,a=a.stateNode,n.nodeType===8?Tc(n.parentNode,a):n.nodeType===1&&Tc(n,a),Rn(n)):Tc(Tt,a.stateNode));break;case 4:c=Tt,d=Dn,Tt=a.stateNode.containerInfo,Dn=!0,$r(n,r,a),Tt=c,Dn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&(p&2||p&4)&&oh(a,r,_),d=d.next}while(d!==c)}$r(n,r,a);break;case 1:if(!Ot&&(Bs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Je(a,r,T)}$r(n,r,a);break;case 21:$r(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,$r(n,r,a),Ot=c):$r(n,r,a);break;default:$r(n,r,a)}}function $p(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Tv),r.forEach(function(c){var d=Vv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:Tt=T.stateNode,Dn=!1;break e;case 3:Tt=T.stateNode.containerInfo,Dn=!0;break e;case 4:Tt=T.stateNode.containerInfo,Dn=!0;break e}T=T.return}if(Tt===null)throw Error(t(160));jp(p,_,d),Tt=null,Dn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(U){Je(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)qp(r,n),r=r.sibling}function qp(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(r,n),Hn(n),c&4){try{sa(3,n,n.return),Ll(3,n)}catch(ie){Je(n,n.return,ie)}try{sa(5,n,n.return)}catch(ie){Je(n,n.return,ie)}}break;case 1:Vn(r,n),Hn(n),c&512&&a!==null&&Bs(a,a.return);break;case 5:if(Vn(r,n),Hn(n),c&512&&a!==null&&Bs(a,a.return),n.flags&32){var d=n.stateNode;try{Rr(d,"")}catch(ie){Je(n,n.return,ie)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&go(d,p),Ao(T,_);var U=Ao(T,p);for(_=0;_<R.length;_+=2){var H=R[_],K=R[_+1];H==="style"?To(d,K):H==="dangerouslySetInnerHTML"?Eo(d,K):H==="children"?Rr(d,K):ye(d,H,K,U)}switch(T){case"input":yo(d,p);break;case"textarea":rs(d,p);break;case"select":var $=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?er(d,!!p.multiple,Z,!1):$!==!!p.multiple&&(p.defaultValue!=null?er(d,!!p.multiple,p.defaultValue,!0):er(d,!!p.multiple,p.multiple?[]:"",!1))}d[Go]=p}catch(ie){Je(n,n.return,ie)}}break;case 6:if(Vn(r,n),Hn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ie){Je(n,n.return,ie)}}break;case 3:if(Vn(r,n),Hn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Rn(r.containerInfo)}catch(ie){Je(n,n.return,ie)}break;case 4:Vn(r,n),Hn(n);break;case 13:Vn(r,n),Hn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(dh=Be())),c&4&&$p(n);break;case 22:if(H=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(U=Ot)||H,Vn(r,n),Ot=U):Vn(r,n),Hn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!H&&n.mode&1)for(ne=n,H=n.child;H!==null;){for(K=ne=H;ne!==null;){switch($=ne,Z=$.child,$.tag){case 0:case 11:case 14:case 15:sa(4,$,$.return);break;case 1:Bs($,$.return);var re=$.stateNode;if(typeof re.componentWillUnmount=="function"){c=$,a=$.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(ie){Je(c,a,ie)}}break;case 5:Bs($,$.return);break;case 22:if($.memoizedState!==null){Kp(K);continue}}Z!==null?(Z.return=$,ne=Z):Kp(K)}H=H.sibling}e:for(H=null,K=n;;){if(K.tag===5){if(H===null){H=K;try{d=K.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=K.stateNode,R=K.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=wo("display",_))}catch(ie){Je(n,n.return,ie)}}}else if(K.tag===6){if(H===null)try{K.stateNode.nodeValue=U?"":K.memoizedProps}catch(ie){Je(n,n.return,ie)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;H===K&&(H=null),K=K.return}H===K&&(H=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Vn(r,n),Hn(n),c&4&&$p(n);break;case 21:break;default:Vn(r,n),Hn(n)}}function Hn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(zp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Rr(d,""),c.flags&=-33);var p=Bp(n);uh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=Bp(n);lh(n,T,_);break;default:throw Error(t(161))}}catch(R){Je(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Sv(n,r,a){ne=n,Hp(n)}function Hp(n,r,a){for(var c=(n.mode&1)!==0;ne!==null;){var d=ne,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||xl;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Ot;T=xl;var U=Ot;if(xl=_,(Ot=R)&&!U)for(ne=d;ne!==null;)_=ne,R=_.child,_.tag===22&&_.memoizedState!==null?Gp(d):R!==null?(R.return=_,ne=R):Gp(d);for(;p!==null;)ne=p,Hp(p),p=p.sibling;ne=d,xl=T,Ot=U}Wp(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,ne=p):Wp(n)}}function Wp(n){for(;ne!==null;){var r=ne;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ot||Ll(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Nn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Kf(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Kf(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var H=U.memoizedState;if(H!==null){var K=H.dehydrated;K!==null&&Rn(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&ah(r)}catch($){Je(r,r.return,$)}}if(r===n){ne=null;break}if(a=r.sibling,a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Kp(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Gp(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Ll(4,r)}catch(R){Je(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){Je(r,d,R)}}var p=r.return;try{ah(r)}catch(R){Je(r,p,R)}break;case 5:var _=r.return;try{ah(r)}catch(R){Je(r,_,R)}}}catch(R){Je(r,r.return,R)}if(r===n){ne=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ne=T;break}ne=r.return}}var Av=Math.ceil,Ml=we.ReactCurrentDispatcher,ch=we.ReactCurrentOwner,gn=we.ReactCurrentBatchConfig,Ve=0,yt=null,it=null,It=0,on=0,js=Ur(0),ht=0,oa=null,Ui=0,Fl=0,hh=0,aa=null,Kt=null,dh=0,$s=1/0,mr=null,Ul=!1,fh=null,qr=null,bl=!1,Hr=null,zl=0,la=0,ph=null,Bl=-1,jl=0;function Bt(){return Ve&6?Be():Bl!==-1?Bl:Bl=Be()}function Wr(n){return n.mode&1?Ve&2&&It!==0?It&-It:lv.transition!==null?(jl===0&&(jl=Ri()),jl):(n=Ce,n!==0||(n=window.event,n=n===void 0?16:Mo(n.type)),n):1}function On(n,r,a,c){if(50<la)throw la=0,ph=null,Error(t(185));Nr(n,a,c),(!(Ve&2)||n!==yt)&&(n===yt&&(!(Ve&2)&&(Fl|=a),ht===4&&Kr(n,It)),Gt(n,c),a===1&&Ve===0&&!(r.mode&1)&&($s=Be()+500,gl&&zr()))}function Gt(n,r){var a=n.callbackNode;rr(n,r);var c=Ai(n,n===yt?It:0);if(c===0)a!==null&&Do(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Do(a),r===1)n.tag===0?av(Xp.bind(null,n)):Lf(Xp.bind(null,n)),rv(function(){!(Ve&6)&&zr()}),a=null;else{switch(Vr(c)){case 1:a=Ii;break;case 4:a=Cr;break;case 16:a=un;break;case 536870912:a=ja;break;default:a=un}a=im(a,Qp.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Qp(n,r){if(Bl=-1,jl=0,Ve&6)throw Error(t(327));var a=n.callbackNode;if(qs()&&n.callbackNode!==a)return null;var c=Ai(n,n===yt?It:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=$l(n,c);else{r=c;var d=Ve;Ve|=2;var p=Jp();(yt!==n||It!==r)&&(mr=null,$s=Be()+500,zi(n,r));do try{Pv();break}catch(T){Yp(n,T)}while(!0);Vc(),Ml.current=p,Ve=d,it!==null?r=0:(yt=null,It=0,r=ht)}if(r!==0){if(r===2&&(d=en(n),d!==0&&(c=d,r=mh(n,d))),r===1)throw a=oa,zi(n,0),Kr(n,c),Gt(n,Be()),a;if(r===6)Kr(n,c);else{if(d=n.current.alternate,!(c&30)&&!Rv(d)&&(r=$l(n,c),r===2&&(p=en(n),p!==0&&(c=p,r=mh(n,p))),r===1))throw a=oa,zi(n,0),Kr(n,c),Gt(n,Be()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Bi(n,Kt,mr);break;case 3:if(Kr(n,c),(c&130023424)===c&&(r=dh+500-Be(),10<r)){if(Ai(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=wc(Bi.bind(null,n,Kt,mr),r);break}Bi(n,Kt,mr);break;case 4:if(Kr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ut(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=Be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Av(c/1960))-c,10<c){n.timeoutHandle=wc(Bi.bind(null,n,Kt,mr),c);break}Bi(n,Kt,mr);break;case 5:Bi(n,Kt,mr);break;default:throw Error(t(329))}}}return Gt(n,Be()),n.callbackNode===a?Qp.bind(null,n):null}function mh(n,r){var a=aa;return n.current.memoizedState.isDehydrated&&(zi(n,r).flags|=256),n=$l(n,r),n!==2&&(r=Kt,Kt=a,r!==null&&gh(r)),n}function gh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function Rv(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Pn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Kr(n,r){for(r&=~hh,r&=~Fl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ut(r),c=1<<a;n[a]=-1,r&=~c}}function Xp(n){if(Ve&6)throw Error(t(327));qs();var r=Ai(n,0);if(!(r&1))return Gt(n,Be()),null;var a=$l(n,r);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(r=c,a=mh(n,c))}if(a===1)throw a=oa,zi(n,0),Kr(n,r),Gt(n,Be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Bi(n,Kt,mr),Gt(n,Be()),null}function yh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&($s=Be()+500,gl&&zr())}}function bi(n){Hr!==null&&Hr.tag===0&&!(Ve&6)&&qs();var r=Ve;Ve|=1;var a=gn.transition,c=Ce;try{if(gn.transition=null,Ce=1,n)return n()}finally{Ce=c,gn.transition=a,Ve=r,!(Ve&6)&&zr()}}function _h(){on=js.current,qe(js)}function zi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,nv(a)),it!==null)for(a=it.return;a!==null;){var c=a;switch(Cc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&pl();break;case 3:bs(),qe(qt),qe(Nt),zc();break;case 5:Uc(c);break;case 4:bs();break;case 13:qe(Qe);break;case 19:qe(Qe);break;case 10:Oc(c.type._context);break;case 22:case 23:_h()}a=a.return}if(yt=n,it=n=Gr(n.current,null),It=on=r,ht=0,oa=null,hh=Fl=Ui=0,Kt=aa=null,Li!==null){for(r=0;r<Li.length;r++)if(a=Li[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Li=null}return n}function Yp(n,r){do{var a=it;try{if(Vc(),Rl.current=Nl,Cl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Cl=!1}if(Fi=0,gt=ct=Xe=null,ea=!1,ta=0,ch.current=null,a===null||a.return===null){ht=1,oa=r,it=null;break}e:{var p=n,_=a.return,T=a,R=r;if(r=It,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var U=R,H=T,K=H.tag;if(!(H.mode&1)&&(K===0||K===11||K===15)){var $=H.alternate;$?(H.updateQueue=$.updateQueue,H.memoizedState=$.memoizedState,H.lanes=$.lanes):(H.updateQueue=null,H.memoizedState=null)}var Z=Tp(_);if(Z!==null){Z.flags&=-257,Ip(Z,_,T,p,r),Z.mode&1&&wp(p,U,r),r=Z,R=U;var re=r.updateQueue;if(re===null){var ie=new Set;ie.add(R),r.updateQueue=ie}else re.add(R);break e}else{if(!(r&1)){wp(p,U,r),vh();break e}R=Error(t(426))}}else if(Ke&&T.mode&1){var tt=Tp(_);if(tt!==null){!(tt.flags&65536)&&(tt.flags|=256),Ip(tt,_,T,p,r),Nc(zs(R,T));break e}}p=R=zs(R,T),ht!==4&&(ht=2),aa===null?aa=[p]:aa.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=vp(p,R,r);Wf(p,M);break e;case 1:T=R;var k=p.type,F=p.stateNode;if(!(p.flags&128)&&(typeof k.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(qr===null||!qr.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var G=Ep(p,T,r);Wf(p,G);break e}}p=p.return}while(p!==null)}em(a)}catch(se){r=se,it===a&&a!==null&&(it=a=a.return);continue}break}while(!0)}function Jp(){var n=Ml.current;return Ml.current=Nl,n===null?Nl:n}function vh(){(ht===0||ht===3||ht===2)&&(ht=4),yt===null||!(Ui&268435455)&&!(Fl&268435455)||Kr(yt,It)}function $l(n,r){var a=Ve;Ve|=2;var c=Jp();(yt!==n||It!==r)&&(mr=null,zi(n,r));do try{Cv();break}catch(d){Yp(n,d)}while(!0);if(Vc(),Ve=a,Ml.current=c,it!==null)throw Error(t(261));return yt=null,It=0,ht}function Cv(){for(;it!==null;)Zp(it)}function Pv(){for(;it!==null&&!za();)Zp(it)}function Zp(n){var r=rm(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?em(n):it=r,ch.current=null}function em(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=wv(a,r),a!==null){a.flags&=32767,it=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ht=6,it=null;return}}else if(a=Ev(a,r,on),a!==null){it=a;return}if(r=r.sibling,r!==null){it=r;return}it=r=n}while(r!==null);ht===0&&(ht=5)}function Bi(n,r,a){var c=Ce,d=gn.transition;try{gn.transition=null,Ce=1,kv(n,r,a,c)}finally{gn.transition=d,Ce=c}return null}function kv(n,r,a,c){do qs();while(Hr!==null);if(Ve&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(be(n,p),n===yt&&(it=yt=null,It=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||bl||(bl=!0,im(un,function(){return qs(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=gn.transition,gn.transition=null;var _=Ce;Ce=1;var T=Ve;Ve|=4,ch.current=null,Iv(n,a),qp(a,n),Q_(vc),xr=!!_c,vc=_c=null,n.current=a,Sv(a),nc(),Ve=T,Ce=_,gn.transition=p}else n.current=a;if(bl&&(bl=!1,Hr=n,zl=d),p=n.pendingLanes,p===0&&(qr=null),$a(a.stateNode),Gt(n,Be()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Ul)throw Ul=!1,n=fh,fh=null,n;return zl&1&&n.tag!==0&&qs(),p=n.pendingLanes,p&1?n===ph?la++:(la=0,ph=n):la=0,zr(),null}function qs(){if(Hr!==null){var n=Vr(zl),r=gn.transition,a=Ce;try{if(gn.transition=null,Ce=16>n?16:n,Hr===null)var c=!1;else{if(n=Hr,Hr=null,zl=0,Ve&6)throw Error(t(331));var d=Ve;for(Ve|=4,ne=n.current;ne!==null;){var p=ne,_=p.child;if(ne.flags&16){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var U=T[R];for(ne=U;ne!==null;){var H=ne;switch(H.tag){case 0:case 11:case 15:sa(8,H,p)}var K=H.child;if(K!==null)K.return=H,ne=K;else for(;ne!==null;){H=ne;var $=H.sibling,Z=H.return;if(bp(H),H===U){ne=null;break}if($!==null){$.return=Z,ne=$;break}ne=Z}}}var re=p.alternate;if(re!==null){var ie=re.child;if(ie!==null){re.child=null;do{var tt=ie.sibling;ie.sibling=null,ie=tt}while(ie!==null)}}ne=p}}if(p.subtreeFlags&2064&&_!==null)_.return=p,ne=_;else e:for(;ne!==null;){if(p=ne,p.flags&2048)switch(p.tag){case 0:case 11:case 15:sa(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ne=M;break e}ne=p.return}}var k=n.current;for(ne=k;ne!==null;){_=ne;var F=_.child;if(_.subtreeFlags&2064&&F!==null)F.return=_,ne=F;else e:for(_=k;ne!==null;){if(T=ne,T.flags&2048)try{switch(T.tag){case 0:case 11:case 15:Ll(9,T)}}catch(se){Je(T,T.return,se)}if(T===_){ne=null;break e}var G=T.sibling;if(G!==null){G.return=T.return,ne=G;break e}ne=T.return}}if(Ve=d,zr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Si,n)}catch{}c=!0}return c}finally{Ce=a,gn.transition=r}}return!1}function tm(n,r,a){r=zs(a,r),r=vp(n,r,1),n=jr(n,r,1),r=Bt(),n!==null&&(Nr(n,1,r),Gt(n,r))}function Je(n,r,a){if(n.tag===3)tm(n,n,a);else for(;r!==null;){if(r.tag===3){tm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(qr===null||!qr.has(c))){n=zs(a,n),n=Ep(r,n,1),r=jr(r,n,1),n=Bt(),r!==null&&(Nr(r,1,n),Gt(r,n));break}}r=r.return}}function Nv(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,yt===n&&(It&a)===a&&(ht===4||ht===3&&(It&130023424)===It&&500>Be()-dh?zi(n,0):hh|=a),Gt(n,r)}function nm(n,r){r===0&&(n.mode&1?(r=fs,fs<<=1,!(fs&130023424)&&(fs=4194304)):r=1);var a=Bt();n=dr(n,r),n!==null&&(Nr(n,r,a),Gt(n,a))}function Dv(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),nm(n,a)}function Vv(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),nm(n,a)}var rm;rm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Wt=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Wt=!1,vv(n,r,a);Wt=!!(n.flags&131072)}else Wt=!1,Ke&&r.flags&1048576&&Mf(r,_l,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ol(n,r),n=r.pendingProps;var d=Vs(r,Nt.current);Us(r,a),d=$c(null,r,c,n,d,a);var p=qc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(p=!0,ml(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Mc(r),d.updater=Dl,r.stateNode=d,d._reactInternals=r,Xc(r,c,n,a),r=eh(null,r,c,!0,p,a)):(r.tag=0,Ke&&p&&Rc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Ol(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=xv(c),n=Nn(c,n),d){case 0:r=Zc(null,r,c,n,a);break e;case 1:r=kp(null,r,c,n,a);break e;case 11:r=Sp(null,r,c,n,a);break e;case 14:r=Ap(null,r,c,Nn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Zc(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),kp(n,r,c,d,a);case 3:e:{if(Np(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,Hf(n,r),Sl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=zs(Error(t(423)),r),r=Dp(n,r,c,a,d);break e}else if(c!==d){d=zs(Error(t(424)),r),r=Dp(n,r,c,a,d);break e}else for(sn=Fr(r.stateNode.containerInfo.firstChild),rn=r,Ke=!0,kn=null,a=$f(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ls(),c===d){r=pr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return Gf(r),n===null&&kc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Ec(c,d)?_=null:p!==null&&Ec(c,p)&&(r.flags|=32),Pp(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&kc(r),null;case 13:return Vp(n,r,a);case 4:return Fc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ms(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Sp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,je(wl,c._currentValue),c._currentValue=_,p!==null)if(Pn(p.value,_)){if(p.children===d.children&&!qt.current){r=pr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=fr(-1,a&-a),R.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var H=U.pending;H===null?R.next=R:(R.next=H.next,H.next=R),U.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),xc(p.return,a,r),T.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),xc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Us(r,a),d=pn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=Nn(c,r.pendingProps),d=Nn(c.type,d),Ap(n,r,c,d,a);case 15:return Rp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Ol(n,r),r.tag=1,Ht(c)?(n=!0,ml(r)):n=!1,Us(r,a),yp(r,c,d),Xc(r,c,d,a),eh(null,r,c,!0,n,a);case 19:return xp(n,r,a);case 22:return Cp(n,r,a)}throw Error(t(156,r.tag))};function im(n,r){return hs(n,r)}function Ov(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,r,a,c){return new Ov(n,r,a,c)}function Eh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xv(n){if(typeof n=="function")return Eh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Pt)return 14}return 2}function Gr(n,r){var a=n.alternate;return a===null?(a=yn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ql(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Eh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return ji(a.children,d,p,r);case I:_=8,d|=8;break;case A:return n=yn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=yn(13,a,r,d),n.elementType=S,n.lanes=p,n;case Ze:return n=yn(19,a,r,d),n.elementType=Ze,n.lanes=p,n;case Ue:return Hl(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:_=10;break e;case D:_=9;break e;case O:_=11;break e;case Pt:_=14;break e;case kt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=yn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function ji(n,r,a,c){return n=yn(7,n,c,r),n.lanes=a,n}function Hl(n,r,a,c){return n=yn(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function wh(n,r,a){return n=yn(6,n,null,r),n.lanes=a,n}function Th(n,r,a){return r=yn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Lv(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kr(0),this.expirationTimes=kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ih(n,r,a,c,d,p,_,T,R){return n=new Lv(n,r,a,T,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=yn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mc(p),n}function Mv(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function sm(n){if(!n)return br;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return Of(n,a,r)}return r}function om(n,r,a,c,d,p,_,T,R){return n=Ih(a,c,!0,n,d,p,_,T,R),n.context=sm(null),a=n.current,c=Bt(),d=Wr(a),p=fr(c,d),p.callback=r??null,jr(a,p,d),n.current.lanes=d,Nr(n,d,c),Gt(n,c),n}function Wl(n,r,a,c){var d=r.current,p=Bt(),_=Wr(d);return a=sm(a),r.context===null?r.context=a:r.pendingContext=a,r=fr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=jr(d,r,_),n!==null&&(On(n,d,_,p),Il(n,d,_)),_}function Kl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Sh(n,r){am(n,r),(n=n.alternate)&&am(n,r)}var lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ah(n){this._internalRoot=n}Gl.prototype.render=Ah.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Wl(n,r,null,null)},Gl.prototype.unmount=Ah.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;bi(function(){Wl(null,n,null,null)}),r[lr]=null}};function Gl(n){this._internalRoot=n}Gl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ga();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Un.length&&r!==0&&r<Un[a].priority;a++);Un.splice(a,0,n),a===0&&Ya(n)}};function Rh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ql(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function um(){}function Fv(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=Kl(_);p.call(U)}}var _=om(r,c,n,0,null,!1,!1,"",um);return n._reactRootContainer=_,n[lr]=_.current,Wo(n.nodeType===8?n.parentNode:n),bi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=Kl(R);T.call(U)}}var R=Ih(n,0,!1,null,null,!1,!1,"",um);return n._reactRootContainer=R,n[lr]=R.current,Wo(n.nodeType===8?n.parentNode:n),bi(function(){Wl(r,R,a,c)}),R}function Xl(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var R=Kl(_);T.call(R)}}Wl(r,_,n,d)}else _=Fv(a,r,n,d,c);return Kl(_)}Wa=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Pr(r.pendingLanes);a!==0&&(Dr(r,a|1),Gt(r,Be()),!(Ve&6)&&($s=Be()+500,zr()))}break;case 13:bi(function(){var c=dr(n,1);if(c!==null){var d=Bt();On(c,n,1,d)}}),Sh(n,1)}},ps=function(n){if(n.tag===13){var r=dr(n,134217728);if(r!==null){var a=Bt();On(r,n,134217728,a)}Sh(n,134217728)}},Ka=function(n){if(n.tag===13){var r=Wr(n),a=dr(n,r);if(a!==null){var c=Bt();On(a,n,r,c)}Sh(n,r)}},Ga=function(){return Ce},Qa=function(n,r){var a=Ce;try{return Ce=n,r()}finally{Ce=a}},ss=function(n,r,a){switch(r){case"input":if(yo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=fl(c);if(!d)throw Error(t(90));Zi(c),yo(c,d)}}}break;case"textarea":rs(n,a);break;case"select":r=a.value,r!=null&&er(n,!!a.multiple,r,!1)}},vi=yh,Co=bi;var Uv={usingClientEntryPoint:!1,Events:[Qo,Ns,fl,Mn,Ro,yh]},ua={findFiberByHostInstance:Di,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bv={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=No(n),n===null?null:n.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Si=Yl.inject(bv),Zt=Yl}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv,Qt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rh(r))throw Error(t(200));return Mv(n,r,null,a)},Qt.createRoot=function(n,r){if(!Rh(n))throw Error(t(299));var a=!1,c="",d=lm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Ih(n,1,!1,null,null,a,!1,c,d),n[lr]=r.current,Wo(n.nodeType===8?n.parentNode:n),new Ah(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=No(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return bi(n)},Qt.hydrate=function(n,r,a){if(!Ql(r))throw Error(t(200));return Xl(null,n,r,!0,a)},Qt.hydrateRoot=function(n,r,a){if(!Rh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=lm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=om(r,null,n,1,a??null,d,!1,p,_),n[lr]=r.current,Wo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Gl(r)},Qt.render=function(n,r,a){if(!Ql(r))throw Error(t(200));return Xl(null,n,r,!1,a)},Qt.unmountComponentAtNode=function(n){if(!Ql(n))throw Error(t(40));return n._reactRootContainer?(bi(function(){Xl(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1},Qt.unstable_batchedUpdates=yh,Qt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Ql(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Xl(n,r,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var ym;function Kv(){if(ym)return kh.exports;ym=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),kh.exports=Wv(),kh.exports}var _m;function Gv(){if(_m)return Jl;_m=1;var i=Kv();return Jl.createRoot=i.createRoot,Jl.hydrateRoot=i.hydrateRoot,Jl}var Qv=Gv(),vm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Xv=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Vg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,w=u>>2,C=(u&3)<<4|m>>4;let L=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(L=64)),s.push(t[w],t[C],t[L],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Dg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Xv(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const C=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||C==null)throw new Yv;const L=u<<2|m>>4;if(s.push(L),v!==64){const z=m<<4&240|v>>2;if(s.push(z),C!==64){const Q=v<<6&192|C;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Yv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jv=function(i){const e=Dg(i);return Vg.encodeByteArray(e,!0)},yu=function(i){return Jv(i).replace(/\./g,"")},Og=function(i){try{return Vg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=()=>Zv().__FIREBASE_DEFAULTS__,tE=()=>{if(typeof process>"u"||typeof vm>"u")return;const i=vm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},nE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Og(i[1]);return e&&JSON.parse(e)},Lu=()=>{try{return eE()||tE()||nE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},xg=i=>{var e,t;return(t=(e=Lu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},rE=i=>{const e=xg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Lg=()=>{var i;return(i=Lu())===null||i===void 0?void 0:i.config},Mg=i=>{var e;return(e=Lu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[yu(JSON.stringify(t)),yu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function aE(){var i;const e=(i=Lu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function cE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hE(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function dE(){return!aE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fE(){try{return typeof indexedDB=="object"}catch{return!1}}function pE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="FirebaseError";class Sr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=mE,Object.setPrototypeOf(this,Sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ca.prototype.create)}}class Ca{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?gE(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Sr(o,m,s)}}function gE(i,e){return i.replace(yE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const yE=/\{\$([^}]+)}/g;function _E(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function _u(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Em(u)&&Em(h)){if(!_u(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Em(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function vE(i,e){const t=new EE(i,e);return t.subscribe.bind(t)}class EE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");wE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Vh),o.error===void 0&&(o.error=Vh),o.complete===void 0&&(o.complete=Vh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Vh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(i){return i&&i._delegate?i._delegate:i}class Ki{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new iE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SE(e))try{this.getOrInitializeService({instanceIdentifier:$i})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=$i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$i){return this.instances.has(e)}getOptions(e=$i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:IE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$i){return this.component?this.component.multipleInstances?e:$i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IE(i){return i===$i?void 0:i}function SE(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new TE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ae||(Ae={}));const RE={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},CE=Ae.INFO,PE={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},kE=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=PE[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class md{constructor(e){this.name=e,this._logLevel=CE,this._logHandler=kE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const NE=(i,e)=>e.some(t=>i instanceof t);let wm,Tm;function DE(){return wm||(wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VE(){return Tm||(Tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fg=new WeakMap,qh=new WeakMap,Ug=new WeakMap,Oh=new WeakMap,gd=new WeakMap;function OE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ri(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Fg.set(t,i)}).catch(()=>{}),gd.set(e,i),e}function xE(i){if(qh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});qh.set(i,e)}let Hh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return qh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Ug.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ri(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function LE(i){Hh=i(Hh)}function ME(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(xh(this),e,...t);return Ug.set(s,e.sort?e.sort():[e]),ri(s)}:VE().includes(i)?function(...e){return i.apply(xh(this),e),ri(Fg.get(this))}:function(...e){return ri(i.apply(xh(this),e))}}function FE(i){return typeof i=="function"?ME(i):(i instanceof IDBTransaction&&xE(i),NE(i,DE())?new Proxy(i,Hh):i)}function ri(i){if(i instanceof IDBRequest)return OE(i);if(Oh.has(i))return Oh.get(i);const e=FE(i);return e!==i&&(Oh.set(i,e),gd.set(e,i)),e}const xh=i=>gd.get(i);function UE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=ri(h);return s&&h.addEventListener("upgradeneeded",y=>{s(ri(h.result),y.oldVersion,y.newVersion,ri(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const bE=["get","getKey","getAll","getAllKeys","count"],zE=["put","add","delete","clear"],Lh=new Map;function Im(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Lh.get(e))return Lh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=zE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||bE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return Lh.set(e,u),u}LE(i=>({...i,get:(e,t,s)=>Im(e,t)||i.get(e,t,s),has:(e,t)=>!!Im(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function jE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",Sm="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new md("@firebase/app"),$E="@firebase/app-compat",qE="@firebase/analytics-compat",HE="@firebase/analytics",WE="@firebase/app-check-compat",KE="@firebase/app-check",GE="@firebase/auth",QE="@firebase/auth-compat",XE="@firebase/database",YE="@firebase/data-connect",JE="@firebase/database-compat",ZE="@firebase/functions",ew="@firebase/functions-compat",tw="@firebase/installations",nw="@firebase/installations-compat",rw="@firebase/messaging",iw="@firebase/messaging-compat",sw="@firebase/performance",ow="@firebase/performance-compat",aw="@firebase/remote-config",lw="@firebase/remote-config-compat",uw="@firebase/storage",cw="@firebase/storage-compat",hw="@firebase/firestore",dw="@firebase/vertexai",fw="@firebase/firestore-compat",pw="firebase",mw="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="[DEFAULT]",gw={[Wh]:"fire-core",[$E]:"fire-core-compat",[HE]:"fire-analytics",[qE]:"fire-analytics-compat",[KE]:"fire-app-check",[WE]:"fire-app-check-compat",[GE]:"fire-auth",[QE]:"fire-auth-compat",[XE]:"fire-rtdb",[YE]:"fire-data-connect",[JE]:"fire-rtdb-compat",[ZE]:"fire-fn",[ew]:"fire-fn-compat",[tw]:"fire-iid",[nw]:"fire-iid-compat",[rw]:"fire-fcm",[iw]:"fire-fcm-compat",[sw]:"fire-perf",[ow]:"fire-perf-compat",[aw]:"fire-rc",[lw]:"fire-rc-compat",[uw]:"fire-gcs",[cw]:"fire-gcs-compat",[hw]:"fire-fst",[fw]:"fire-fst-compat",[dw]:"fire-vertex","fire-js":"fire-js",[pw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Map,yw=new Map,Gh=new Map;function Am(i,e){try{i.container.addComponent(e)}catch(t){vr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function eo(i){const e=i.name;if(Gh.has(e))return vr.debug(`There were multiple attempts to register component ${e}.`),!1;Gh.set(e,i);for(const t of vu.values())Am(t,i);for(const t of yw.values())Am(t,i);return!0}function yd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function ti(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ii=new Ca("app","Firebase",_w);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=mw;function bg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Kh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ii.create("bad-app-name",{appName:String(o)});if(t||(t=Lg()),!t)throw ii.create("no-options");const u=vu.get(o);if(u){if(_u(t,u.options)&&_u(s,u.config))return u;throw ii.create("duplicate-app",{appName:o})}const h=new AE(o);for(const y of Gh.values())h.addComponent(y);const m=new vw(t,s,h);return vu.set(o,m),m}function zg(i=Kh){const e=vu.get(i);if(!e&&i===Kh&&Lg())return bg();if(!e)throw ii.create("no-app",{appName:i});return e}function si(i,e,t){var s;let o=(s=gw[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vr.warn(m.join(" "));return}eo(new Ki(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="firebase-heartbeat-database",ww=1,va="firebase-heartbeat-store";let Mh=null;function Bg(){return Mh||(Mh=UE(Ew,ww,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(va)}catch(t){console.warn(t)}}}}).catch(i=>{throw ii.create("idb-open",{originalErrorMessage:i.message})})),Mh}async function Tw(i){try{const t=(await Bg()).transaction(va),s=await t.objectStore(va).get(jg(i));return await t.done,s}catch(e){if(e instanceof Sr)vr.warn(e.message);else{const t=ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vr.warn(t.message)}}}async function Rm(i,e){try{const s=(await Bg()).transaction(va,"readwrite");await s.objectStore(va).put(e,jg(i)),await s.done}catch(t){if(t instanceof Sr)vr.warn(t.message);else{const s=ii.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});vr.warn(s.message)}}}function jg(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=1024,Sw=30*24*60*60*1e3;class Aw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Cm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=Sw}),this._storage.overwrite(this._heartbeatsCache))}catch(s){vr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cm(),{heartbeatsToSend:s,unsentEntries:o}=Rw(this._heartbeatsCache.heartbeats),u=yu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return vr.warn(t),""}}}function Cm(){return new Date().toISOString().substring(0,10)}function Rw(i,e=Iw){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Pm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Pm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Cw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fE()?pE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Tw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Rm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Rm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Pm(i){return yu(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(i){eo(new Ki("platform-logger",e=>new BE(e),"PRIVATE")),eo(new Ki("heartbeat",e=>new Aw(e),"PRIVATE")),si(Wh,Sm,i),si(Wh,Sm,"esm2017"),si("fire-js","")}Pw("");var km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hi,$g;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(P,D,O){for(var S=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)S[Ze-2]=arguments[Ze];return I.prototype[D].apply(P,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var P=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)P[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)P[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],D=N.g[2];var O=N.g[3],S=I+(O^A&(D^O))+P[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+P[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+P[2]+606105819&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+P[3]+3250441966&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+P[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+P[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+P[6]+2821735955&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+P[7]+4249261313&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+P[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+P[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+P[10]+4294925233&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+P[11]+2304563134&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+P[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+P[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+P[14]+2792965006&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+P[15]+1236535329&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(D^O&(A^D))+P[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+P[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+P[11]+643717713&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+P[0]+3921069994&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+P[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+P[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+P[15]+3634488961&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+P[4]+3889429448&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+P[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+P[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+P[3]+4107603335&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+P[8]+1163531501&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+P[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+P[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+P[7]+1735328473&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+P[12]+2368359562&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(A^D^O)+P[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+P[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+P[11]+1839030562&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+P[14]+4259657740&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+P[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+P[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+P[7]+4139469664&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+P[10]+3200236656&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+P[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+P[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+P[3]+3572445317&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+P[6]+76029189&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+P[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+P[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+P[15]+530742520&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+P[2]+3299628645&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(D^(A|~O))+P[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+P[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+P[14]+2878612391&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+P[5]+4237533241&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+P[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+P[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+P[10]+4293915773&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+P[1]+2240044497&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+P[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+P[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+P[6]+2734768916&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+P[13]+1309151649&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+P[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+P[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+P[2]+718787259&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+O&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,P=this.B,D=this.h,O=0;O<I;){if(D==0)for(;O<=A;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<I;)if(P[D++]=N.charCodeAt(O++),D==this.blockSize){o(this,P),D=0;break}}else for(;O<I;)if(P[D++]=N[O++],D==this.blockSize){o(this,P),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var P=0;32>P;P+=8)N[A++]=this.g[I]>>>P&255;return N};function u(N,I){var A=m;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],P=!0,D=N.length-1;0<=D;D--){var O=N[D]|0;P&&O==I||(A[D]=O,P=!1)}this.g=A}var m={};function y(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return C;if(0>N)return q(v(-N));for(var I=[],A=1,P=0;N>=A;P++)I[P]=N/A|0,A*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return q(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),P=C,D=0;D<N.length;D+=8){var O=Math.min(8,N.length-D),S=parseInt(N.substring(D,D+O),I);8>O?(O=v(Math.pow(I,O)),P=P.j(O).add(v(S))):(P=P.j(A),P=P.add(v(S)))}return P}var C=y(0),L=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(Y(this))return-q(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var P=this.i(A);N+=(0<=P?P:4294967296+P)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(Q(this))return"0";if(Y(this))return"-"+q(this).toString(N);for(var I=v(Math.pow(N,6)),A=this,P="";;){var D=we(A,I).g;A=ve(A,D.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=D,Q(A))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function Q(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function Y(N){return N.h==-1}i.l=function(N){return N=ve(this,N),Y(N)?-1:Q(N)?0:1};function q(N){for(var I=N.g.length,A=[],P=0;P<I;P++)A[P]=~N.g[P];return new h(A,~N.h).add(L)}i.abs=function(){return Y(this)?q(this):this},i.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],P=0,D=0;D<=I;D++){var O=P+(this.i(D)&65535)+(N.i(D)&65535),S=(O>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);P=S>>>16,O&=65535,S&=65535,A[D]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function ve(N,I){return N.add(q(I))}i.j=function(N){if(Q(this)||Q(N))return C;if(Y(this))return Y(N)?q(this).j(q(N)):q(q(this).j(N));if(Y(N))return q(this.j(q(N)));if(0>this.l(z)&&0>N.l(z))return v(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],P=0;P<2*I;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<N.g.length;D++){var O=this.i(P)>>>16,S=this.i(P)&65535,Ze=N.i(D)>>>16,Pt=N.i(D)&65535;A[2*P+2*D]+=S*Pt,_e(A,2*P+2*D),A[2*P+2*D+1]+=O*Pt,_e(A,2*P+2*D+1),A[2*P+2*D+1]+=S*Ze,_e(A,2*P+2*D+1),A[2*P+2*D+2]+=O*Ze,_e(A,2*P+2*D+2)}for(P=0;P<I;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=I;P<2*I;P++)A[P]=0;return new h(A,0)};function _e(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function ye(N,I){this.g=N,this.h=I}function we(N,I){if(Q(I))throw Error("division by zero");if(Q(N))return new ye(C,C);if(Y(N))return I=we(q(N),I),new ye(q(I.g),q(I.h));if(Y(I))return I=we(N,q(I)),new ye(q(I.g),I.h);if(30<N.g.length){if(Y(N)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var A=L,P=I;0>=P.l(N);)A=He(A),P=He(P);var D=Se(A,1),O=Se(P,1);for(P=Se(P,2),A=Se(A,2);!Q(P);){var S=O.add(P);0>=S.l(N)&&(D=D.add(A),O=S),P=Se(P,1),A=Se(A,1)}return I=ve(N,D.j(I)),new ye(D,I)}for(D=C;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=v(A),S=O.j(I);Y(S)||0<S.l(N);)A-=P,O=v(A),S=O.j(I);Q(O)&&(O=L),D=D.add(O),N=ve(N,S)}return new ye(D,N)}i.A=function(N){return we(this,N).h},i.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)&N.i(P);return new h(A,this.h&N.h)},i.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)|N.i(P);return new h(A,this.h|N.h)},i.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)^N.i(P);return new h(A,this.h^N.h)};function He(N){for(var I=N.g.length+1,A=[],P=0;P<I;P++)A[P]=N.i(P)<<1|N.i(P-1)>>>31;return new h(A,N.h)}function Se(N,I){var A=I>>5;I%=32;for(var P=N.g.length-A,D=[],O=0;O<P;O++)D[O]=0<I?N.i(O+A)>>>I|N.i(O+A+1)<<32-I:N.i(O+A);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,$g=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,Hi=h}).apply(typeof km<"u"?km:typeof self<"u"?self:typeof window<"u"?window:{});var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qg,ha,Hg,au,Qh,Wg,Kg,Gg;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zl=="object"&&Zl];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var x=l[E];if(!(x in g))break e;g=g[x]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,x={next:function(){if(!E&&g<l.length){var b=g++;return{value:f(b,l[b]),done:!1}}return E=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,g){return l.call.apply(l.bind,arguments)}function C(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,E),l.apply(f,x)}}return function(){return l.apply(f,arguments)}}function L(l,f,g){return L=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:C,L.apply(null,arguments)}function z(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function Q(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,x,b){for(var X=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)X[Fe-2]=arguments[Fe];return f.prototype[x].apply(E,X)}}function Y(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function q(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const x=l.length||0,b=E.length||0;l.length=x+b;for(let X=0;X<b;X++)l[x+X]=E[X]}else l.push(E)}}class ve{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function _e(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function we(l){return we[" "](l),l}we[" "]=function(){};var He=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Se(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function N(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function I(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let g,E;for(let x=1;x<arguments.length;x++){E=arguments[x];for(g in E)l[g]=E[g];for(let b=0;b<A.length;b++)g=A[b],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function D(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ze{constructor(){this.h=this.g=null}add(f,g){const E=Pt.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Pt=new ve(()=>new kt,l=>l.reset());class kt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,J=!1,le=new Ze,ee=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(V)}};var V=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){O(g)}var f=Pt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function Te(l,f){if(oe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(He){e:{try{we(f.nodeName);var x=!0;break e}catch{}x=!1}x||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ke[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Te.aa.h.call(this)}}Q(Te,oe);var ke={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),Le=0;function ze(l,f,g,E,x){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=x,this.key=++Le,this.da=this.fa=!1}function pt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Jn(l){this.src=l,this.g={},this.h=0}Jn.prototype.add=function(l,f,g,E,x){var b=l.toString();l=this.g[b],l||(l=this.g[b]=[],this.h++);var X=Ar(l,f,E,x);return-1<X?(f=l[X],g||(f.fa=!1)):(f=new ze(f,this.src,b,!!E,x),f.fa=g,l.push(f)),f};function Zi(l,f){var g=f.type;if(g in l.g){var E=l.g[g],x=Array.prototype.indexOf.call(E,f,void 0),b;(b=0<=x)&&Array.prototype.splice.call(E,x,1),b&&(pt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Ar(l,f,g,E){for(var x=0;x<l.length;++x){var b=l[x];if(!b.da&&b.listener==f&&b.capture==!!g&&b.ha==E)return x}return-1}var mi="closure_lm_"+(1e6*Math.random()|0),es={};function go(l,f,g,E,x){if(Array.isArray(f)){for(var b=0;b<f.length;b++)go(l,f[b],g,E,x);return null}return g=vo(g),l&&l[xe]?l.K(f,g,v(E)?!!E.capture:!1,x):yo(l,f,g,!1,E,x)}function yo(l,f,g,E,x,b){if(!f)throw Error("Invalid event type");var X=v(x)?!!x.capture:!!x,Fe=ns(l);if(Fe||(l[mi]=Fe=new Jn(l)),g=Fe.add(f,g,E,X,b),g.proxy)return g;if(E=Fa(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Ee||(x=X),x===void 0&&(x=!1),l.addEventListener(f.toString(),E,x);else if(l.attachEvent)l.attachEvent(er(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Fa(){function l(g){return f.call(l.src,l.listener,g)}const f=_o;return l}function ts(l,f,g,E,x){if(Array.isArray(f))for(var b=0;b<f.length;b++)ts(l,f[b],g,E,x);else E=v(E)?!!E.capture:!!E,g=vo(g),l&&l[xe]?(l=l.i,f=String(f).toString(),f in l.g&&(b=l.g[f],g=Ar(b,g,E,x),-1<g&&(pt(b[g]),Array.prototype.splice.call(b,g,1),b.length==0&&(delete l.g[f],l.h--)))):l&&(l=ns(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Ar(f,g,E,x)),(g=-1<l?f[l]:null)&&Zn(g))}function Zn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[xe])Zi(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(er(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=ns(f))?(Zi(g,l),g.h==0&&(g.src=null,f[mi]=null)):pt(l)}}}function er(l){return l in es?es[l]:es[l]="on"+l}function _o(l,f){if(l.da)l=!0;else{f=new Te(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&Zn(l),l=g.call(E,f)}return l}function ns(l){return l=l[mi],l instanceof Jn?l:null}var rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function vo(l){return typeof l=="function"?l:(l[rs]||(l[rs]=function(f){return l.handleEvent(f)}),l[rs])}function at(){j.call(this),this.i=new Jn(this),this.M=this,this.F=null}Q(at,j),at.prototype[xe]=!0,at.prototype.removeEventListener=function(l,f,g,E){ts(this,l,f,g,E)};function lt(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new oe(f,l);else if(f instanceof oe)f.target=f.target||l;else{var x=f;f=new oe(E,l),P(f,x)}if(x=!0,g)for(var b=g.length-1;0<=b;b--){var X=f.g=g[b];x=tr(X,E,!0,f)&&x}if(X=f.g=l,x=tr(X,E,!0,f)&&x,x=tr(X,E,!1,f)&&x,g)for(b=0;b<g.length;b++)X=f.g=g[b],x=tr(X,E,!1,f)&&x}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)pt(g[E]);delete l.g[f],l.h--}}this.F=null},at.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},at.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function tr(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var x=!0,b=0;b<f.length;++b){var X=f[b];if(X&&!X.da&&X.capture==g){var Fe=X.listener,ut=X.ha||X.src;X.fa&&Zi(l.i,X),x=Fe.call(ut,E)!==!1&&x}}return x&&!E.defaultPrevented}function Eo(l,f,g){if(typeof l=="function")g&&(l=L(l,g));else if(l&&typeof l.handleEvent=="function")l=L(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Rr(l){l.g=Eo(()=>{l.g=null,l.i&&(l.i=!1,Rr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class gi extends j{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Rr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yi(l){j.call(this),this.h=l,this.g={}}Q(yi,j);var wo=[];function To(l){Se(l.g,function(f,g){this.g.hasOwnProperty(g)&&Zn(f)},l),l.g={}}yi.prototype.N=function(){yi.aa.N.call(this),To(this)},yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Io=m.JSON.stringify,So=m.JSON.parse,Ao=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function _i(){}_i.prototype.h=null;function is(l){return l.h||(l.h=l.i())}function ss(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ln(){oe.call(this,"d")}Q(Ln,oe);function os(){oe.call(this,"c")}Q(os,oe);var Mn={},Ro=null;function vi(){return Ro=Ro||new at}Mn.La="serverreachability";function Co(l){oe.call(this,Mn.La,l)}Q(Co,oe);function nr(l){const f=vi();lt(f,new Co(f))}Mn.STAT_EVENT="statevent";function Po(l,f){oe.call(this,Mn.STAT_EVENT,l),this.stat=f}Q(Po,oe);function et(l){const f=vi();lt(f,new Po(f,l))}Mn.Ma="timingevent";function as(l,f){oe.call(this,Mn.Ma,l),this.size=f}Q(as,oe);function vn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ei(){this.g=!0}Ei.prototype.xa=function(){this.g=!1};function wi(l,f,g,E,x,b){l.info(function(){if(l.g)if(b)for(var X="",Fe=b.split("&"),ut=0;ut<Fe.length;ut++){var Ne=Fe[ut].split("=");if(1<Ne.length){var mt=Ne[0];Ne=Ne[1];var rt=mt.split("_");X=2<=rt.length&&rt[1]=="type"?X+(mt+"="+Ne+"&"):X+(mt+"=redacted&")}}else X=null;else X=b;return"XMLHTTP REQ ("+E+") [attempt "+x+"]: "+f+`
`+g+`
`+X})}function ls(l,f,g,E,x,b,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+x+"]: "+f+`
`+g+`
`+b+" "+X})}function En(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+tc(l,g)+(E?" "+E:"")})}function ko(l,f){l.info(function(){return"TIMEOUT: "+f})}Ei.prototype.info=function(){};function tc(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var x=E[1];if(Array.isArray(x)&&!(1>x.length)){var b=x[0];if(b!="noop"&&b!="stop"&&b!="close")for(var X=1;X<x.length;X++)x[X]=""}}}}return Io(g)}catch{return f}}var us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ua={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wn;function Ti(){}Q(Ti,_i),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},wn=new Ti;function Tn(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new yi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ba}function ba(){this.i=null,this.g="",this.h=!1}var No={},cs={};function hs(l,f,g){l.L=1,l.v=Dr(en(f)),l.m=g,l.P=!0,Do(l,null)}function Do(l,f){l.F=Date.now(),Be(l),l.A=en(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Or(g.i,"t",E),l.C=0,g=l.j.J,l.h=new ba,l.g=rl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new gi(L(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var x="readystatechange";Array.isArray(x)||(x&&(wo[0]=x.toString()),x=wo);for(var b=0;b<x.length;b++){var X=go(g,x[b],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),nr(),wi(l.i,l.u,l.A,l.l,l.R,l.m)}Tn.prototype.ca=function(l){l=l.target;const f=this.M;f&&$t(l)==3?f.j():this.Y(l)},Tn.prototype.Y=function(l){try{if(l==this.g)e:{const rt=$t(this.g);var f=this.g.Ba();const hn=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Fo(this.g)))){this.J||rt!=4||f==7||(f==8||0>=hn?nr(3):nr(2)),Ii(this);var g=this.g.Z();this.X=g;t:if(za(this)){var E=Fo(this.g);l="";var x=E.length,b=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Cr(this);var X="";break t}this.h.i=new m.TextDecoder}for(f=0;f<x;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(b&&f==x-1)});E.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,ls(this.i,this.u,this.A,this.l,this.R,rt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ut=this.g;if((Fe=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_e(Fe)){var Ne=Fe;break t}}Ne=null}if(g=Ne)En(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vo(this,g);else{this.o=!1,this.s=3,et(12),un(this),Cr(this);break e}}if(this.P){g=!0;let nn;for(;!this.J&&this.C<X.length;)if(nn=nc(this,X),nn==cs){rt==4&&(this.s=4,et(14),g=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==No){this.s=4,et(15),En(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else En(this.i,this.l,nn,null),Vo(this,nn);if(za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||X.length!=0||this.h.h||(this.s=1,et(16),g=!1),this.o=this.o&&g,!g)En(this.i,this.l,X,"[Invalid Chunked Response]"),un(this),Cr(this);else if(0<X.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),bo(mt),mt.M=!0,et(11))}}else En(this.i,this.l,X,null),Vo(this,X);rt==4&&un(this),this.o&&!this.J&&(rt==4?Ts(this.j,this):(this.o=!1,Be(this)))}else ys(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),un(this),Cr(this)}}}catch{}finally{}};function za(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function nc(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?cs:(g=Number(f.substring(g,E)),isNaN(g)?No:(E+=1,E+g>f.length?cs:(f=f.slice(E,E+g),l.C=E+g,f)))}Tn.prototype.cancel=function(){this.J=!0,un(this)};function Be(l){l.S=Date.now()+l.I,Ba(l,l.I)}function Ba(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=vn(L(l.ba,l),f)}function Ii(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Tn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ko(this.i,this.A),this.L!=2&&(nr(),et(17)),un(this),this.s=2,Cr(this)):Ba(this,this.S-l)};function Cr(l){l.j.G==0||l.J||Ts(l.j,l)}function un(l){Ii(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,To(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Vo(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Ut(g.h,l))){if(!l.K&&Ut(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var x=E;if(x[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)ws(g),Cn(g);else break e;Es(g),et(18)}}else g.za=x[1],0<g.za-g.T&&37500>x[2]&&g.F&&g.v==0&&!g.C&&(g.C=vn(L(g.Za,g),6e3));if(1>=$a(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else ar(g,11)}else if((l.K||g.g==l)&&ws(g),!_e(f))for(x=g.Da.g.parse(f),f=0;f<x.length;f++){let Ne=x[f];if(g.T=Ne[0],Ne=Ne[1],g.G==2)if(Ne[0]=="c"){g.K=Ne[1],g.ia=Ne[2];const mt=Ne[3];mt!=null&&(g.la=mt,g.j.info("VER="+g.la));const rt=Ne[4];rt!=null&&(g.Aa=rt,g.j.info("SVER="+g.Aa));const hn=Ne[5];hn!=null&&typeof hn=="number"&&0<hn&&(E=1.5*hn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const nn=l.g;if(nn){const Ni=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var b=E.h;b.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Oo(b,b.h),b.h=null))}if(E.D){const Ss=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ss&&(E.ya=Ss,be(E.I,E.D,Ss))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var X=l;if(E.qa=nl(E,E.J?E.ia:null,E.W),X.K){qa(E.h,X);var Fe=X,ut=E.L;ut&&(Fe.I=ut),Fe.B&&(Ii(Fe),Be(Fe)),E.g=X}else ki(E);0<g.i.length&&zn(g)}else Ne[0]!="stop"&&Ne[0]!="close"||ar(g,7);else g.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?ar(g,7):wt(g):Ne[0]!="noop"&&g.l&&g.l.ta(Ne),g.v=0)}}nr(4)}catch{}}var ja=class{constructor(l,f){this.g=l,this.map=f}};function Si(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function $a(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Oo(l,f){l.g?l.g.add(f):l.h=f}function qa(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Si.prototype.cancel=function(){if(this.i=Ha(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ha(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return Y(l.i)}function ds(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function fs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Pr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=fs(l),E=ds(l),x=E.length,b=0;b<x;b++)f.call(void 0,E[b],g&&g[b],l)}var Ai=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rc(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),x=null;if(0<=E){var b=l[g].substring(0,E);x=l[g].substring(E+1)}else b=l[g];f(b,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function rr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof rr){this.h=l.h,Ri(this,l.j),this.o=l.o,this.g=l.g,kr(this,l.s),this.l=l.l;var f=l.i,g=new Fn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Nr(this,g),this.m=l.m}else l&&(f=String(l).match(Ai))?(this.h=!1,Ri(this,f[1]||"",!0),this.o=Ce(f[2]||""),this.g=Ce(f[3]||"",!0),kr(this,f[4]),this.l=Ce(f[5]||"",!0),Nr(this,f[6]||"",!0),this.m=Ce(f[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}rr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Vr(f,ps,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Vr(f,ps,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Vr(g,g.charAt(0)=="/"?Ga:Ka,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Vr(g,xo)),l.join("")};function en(l){return new rr(l)}function Ri(l,f,g){l.j=g?Ce(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function kr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Nr(l,f,g){f instanceof Fn?(l.i=f,Un(l.i,l.h)):(g||(f=Vr(f,Qa)),l.i=new Fn(f,l.h))}function be(l,f,g){l.i.set(f,g)}function Dr(l){return be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ce(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Vr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,Wa),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Wa(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ps=/[#\/\?@]/g,Ka=/[#\?:]/g,Ga=/[#\?]/g,Qa=/[#\?@]/g,xo=/#/g;function Fn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Et(l){l.g||(l.g=new Map,l.h=0,l.i&&rc(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=Fn.prototype,i.add=function(l,f){Et(this),this.i=null,l=cn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function In(l,f){Et(l),f=cn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Sn(l,f){return Et(l),f=cn(l,f),l.g.has(f)}i.forEach=function(l,f){Et(this),this.g.forEach(function(g,E){g.forEach(function(x){l.call(f,x,E,this)},this)},this)},i.na=function(){Et(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const x=l[E];for(let b=0;b<x.length;b++)g.push(f[E])}return g},i.V=function(l){Et(this);let f=[];if(typeof l=="string")Sn(this,l)&&(f=f.concat(this.g.get(cn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return Et(this),this.i=null,l=cn(this,l),Sn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Or(l,f,g){In(l,f),0<g.length&&(l.i=null,l.g.set(cn(l,f),Y(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const b=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var x=b;X[E]!==""&&(x+="="+encodeURIComponent(String(X[E]))),l.push(x)}}return this.i=l.join("&")};function cn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Un(l,f){f&&!l.j&&(Et(l),l.i=null,l.g.forEach(function(g,E){var x=E.toLowerCase();E!=x&&(In(this,E),Or(this,x,g))},l)),l.j=f}function ic(l,f){const g=new Ei;if(m.Image){const E=new Image;E.onload=z(jt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=z(jt,g,"TestLoadImage: error",!1,f,E),E.onabort=z(jt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=z(jt,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function Xa(l,f){const g=new Ei,E=new AbortController,x=setTimeout(()=>{E.abort(),jt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(b=>{clearTimeout(x),b.ok?jt(g,"TestPingServer: ok",!0,f):jt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(x),jt(g,"TestPingServer: error",!1,f)})}function jt(l,f,g,E,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),E(g)}catch{}}function sc(){this.g=new Ao}function Ya(l,f,g){const E=g||"";try{Pr(l,function(x,b){let X=x;v(x)&&(X=Io(x)),f.push(E+b+"="+encodeURIComponent(X))})}catch(x){throw f.push(E+"type="+encodeURIComponent("_badmap")),x}}function ir(l){this.l=l.Ub||null,this.j=l.eb||!1}Q(ir,_i),ir.prototype.g=function(){return new Ci(this.l,this.j)},ir.prototype.i=function(l){return function(){return l}}({});function Ci(l,f){at.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(Ci,at),i=Ci.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Rn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ja(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ja(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?An(this):Rn(this),this.readyState==3&&Ja(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,An(this))},i.Qa=function(l){this.g&&(this.response=l,An(this))},i.ga=function(){this.g&&An(this)};function An(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Rn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Rn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function sr(l){let f="";return Se(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function xr(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=sr(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):be(l,f,g))}function We(l){at.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(We,at);var oc=/^https?$/i,Lo=["POST","PUT"];i=We.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wn.g(),this.v=this.o?is(this.o):is(wn),this.g.onreadystatechange=L(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(b){Pi(this,b);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var x in E)g.set(x,E[x]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const b of E.keys())g.set(b,E.get(b));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(b=>b.toLowerCase()=="content-type"),x=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Lo,f,void 0))||E||x||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,X]of g)this.g.setRequestHeader(b,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gs(this),this.u=!0,this.g.send(l),this.u=!1}catch(b){Pi(this,b)}};function Pi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ms(l),tn(l)}function ms(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),tn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),We.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Mo(this):this.bb())},i.bb=function(){Mo(this)};function Mo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||$t(l)!=4||l.Z()!=2)){if(l.u&&$t(l)==4)Eo(l.Ea,0,l);else if(lt(l,"readystatechange"),$t(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=X===0){var x=String(l.D).match(Ai)[1]||null;!x&&m.self&&m.self.location&&(x=m.self.location.protocol.slice(0,-1)),E=!oc.test(x?x.toLowerCase():"")}g=E}if(g)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var b=2<$t(l)?l.g.statusText:""}catch{b=""}l.l=b+" ["+l.Z()+"]",ms(l)}}finally{tn(l)}}}}function tn(l,f){if(l.g){gs(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||lt(l,"ready");try{g.onreadystatechange=E}catch{}}}function gs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function $t(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),So(f)}};function Fo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ys(l){const f={};l=(l.g&&2<=$t(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(_e(l[E]))continue;var g=D(l[E]);const x=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const b=f[x]||[];f[x]=b,b.push(g)}N(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Uo(l){this.Aa=0,this.i=[],this.j=new Ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bn("baseRetryDelayMs",5e3,l),this.cb=bn("retryDelaySeedMs",1e4,l),this.Wa=bn("forwardChannelMaxRetries",2,l),this.wa=bn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Si(l&&l.concurrentRequestLimit),this.Da=new sc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Uo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){et(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=nl(this,null,this.W),zn(this)};function wt(l){if(_s(l),l.G==3){var f=l.U++,g=en(l.I);if(be(g,"SID",l.K),be(g,"RID",f),be(g,"TYPE","terminate"),or(l,g),f=new Tn(l,l.j,f),f.L=2,f.v=Dr(en(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=rl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Be(f)}tl(l)}function Cn(l){l.g&&(bo(l),l.g.cancel(),l.g=null)}function _s(l){Cn(l),l.u&&(m.clearTimeout(l.u),l.u=null),ws(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function zn(l){if(!Zt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||ee(),J||(Ue(),J=!0),le.add(f,l),l.B=0}}function ac(l,f){return $a(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=vn(L(l.Ga,l,f),el(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const x=new Tn(this,this.j,l);let b=this.o;if(this.S&&(b?(b=I(b),P(b,this.S)):b=this.S),this.m!==null||this.O||(x.H=b,b=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Lr(this,x,f),g=en(this.I),be(g,"RID",l),be(g,"CVER",22),this.D&&be(g,"X-HTTP-Session-Id",this.D),or(this,g),b&&(this.O?f="headers="+encodeURIComponent(String(sr(b)))+"&"+f:this.m&&xr(g,this.m,b)),Oo(this.h,x),this.Ua&&be(g,"TYPE","init"),this.P?(be(g,"$req",f),be(g,"SID","null"),x.T=!0,hs(x,g,null)):hs(x,g,f),this.G=2}}else this.G==3&&(l?vs(this,l):this.i.length==0||Zt(this.h)||vs(this))};function vs(l,f){var g;f?g=f.l:g=l.U++;const E=en(l.I);be(E,"SID",l.K),be(E,"RID",g),be(E,"AID",l.T),or(l,E),l.m&&l.o&&xr(E,l.m,l.o),g=new Tn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Lr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Oo(l.h,g),hs(g,E,f)}function or(l,f){l.H&&Se(l.H,function(g,E){be(f,E,g)}),l.l&&Pr({},function(g,E){be(f,E,g)})}function Lr(l,f,g){g=Math.min(l.i.length,g);var E=l.l?L(l.l.Na,l.l,l):null;e:{var x=l.i;let b=-1;for(;;){const X=["count="+g];b==-1?0<g?(b=x[0].g,X.push("ofs="+b)):b=0:X.push("ofs="+b);let Fe=!0;for(let ut=0;ut<g;ut++){let Ne=x[ut].g;const mt=x[ut].map;if(Ne-=b,0>Ne)b=Math.max(0,x[ut].g-100),Fe=!1;else try{Ya(mt,X,"req"+Ne+"_")}catch{E&&E(mt)}}if(Fe){E=X.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function ki(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||ee(),J||(Ue(),J=!0),le.add(f,l),l.v=0}}function Es(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=vn(L(l.Fa,l),el(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Za(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=vn(L(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),Cn(this),Za(this))};function bo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Za(l){l.g=new Tn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=en(l.qa);be(f,"RID","rpc"),be(f,"SID",l.K),be(f,"AID",l.T),be(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&be(f,"TO",l.ja),be(f,"TYPE","xmlhttp"),or(l,f),l.m&&l.o&&xr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Dr(en(f)),g.m=null,g.P=!0,Do(g,l)}i.Za=function(){this.C!=null&&(this.C=null,Cn(this),Es(this),et(19))};function ws(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ts(l,f){var g=null;if(l.g==f){ws(l),bo(l),l.g=null;var E=2}else if(Ut(l.h,f))g=f.D,qa(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var x=l.B;E=vi(),lt(E,new as(E,g)),zn(l)}else ki(l);else if(x=f.s,x==3||x==0&&0<f.X||!(E==1&&ac(l,f)||E==2&&Es(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),x){case 1:ar(l,5);break;case 4:ar(l,10);break;case 3:ar(l,6);break;default:ar(l,2)}}}function el(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function ar(l,f){if(l.j.info("Error code "+f),f==2){var g=L(l.fb,l),E=l.Xa;const x=!E;E=new rr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ri(E,"https"),Dr(E),x?ic(E.toString(),g):Xa(E.toString(),g)}else et(2);l.G=0,l.l&&l.l.sa(f),tl(l),_s(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function tl(l){if(l.G=0,l.ka=[],l.l){const f=Ha(l.h);(f.length!=0||l.i.length!=0)&&(q(l.ka,f),q(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function nl(l,f,g){var E=g instanceof rr?en(g):new rr(g);if(E.g!="")f&&(E.g=f+"."+E.g),kr(E,E.s);else{var x=m.location;E=x.protocol,f=f?f+"."+x.hostname:x.hostname,x=+x.port;var b=new rr(null);E&&Ri(b,E),f&&(b.g=f),x&&kr(b,x),g&&(b.l=g),E=b}return g=l.D,f=l.ya,g&&f&&be(E,g,f),be(E,"VER",l.la),or(l,E),E}function rl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new We(new ir({eb:g})):new We(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function zo(){}i=zo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Is(){}Is.prototype.g=function(l,f){return new bt(l,f)};function bt(l,f){at.call(this),this.g=new Uo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!_e(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!_e(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Bn(this)}Q(bt,at),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){wt(this.g)},bt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Io(l),l=g);f.i.push(new ja(f.Ya++,l)),f.G==3&&zn(f)},bt.prototype.N=function(){this.g.l=null,delete this.j,wt(this.g),delete this.g,bt.aa.N.call(this)};function il(l){Ln.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Q(il,Ln);function sl(){os.call(this),this.status=1}Q(sl,os);function Bn(l){this.g=l}Q(Bn,zo),Bn.prototype.ua=function(){lt(this.g,"a")},Bn.prototype.ta=function(l){lt(this.g,new il(l))},Bn.prototype.sa=function(l){lt(this.g,new sl)},Bn.prototype.ra=function(){lt(this.g,"b")},Is.prototype.createWebChannel=Is.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,Gg=function(){return new Is},Kg=function(){return vi()},Wg=Mn,Qh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},us.NO_ERROR=0,us.TIMEOUT=8,us.HTTP_ERROR=6,au=us,Ua.COMPLETE="complete",Hg=Ua,ss.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",at.prototype.listen=at.prototype.K,ha=ss,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,qg=We}).apply(typeof Zl<"u"?Zl:typeof self<"u"?self:typeof window<"u"?window:{});const Nm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new md("@firebase/firestore");function Hs(){return Gi.logLevel}function te(i,...e){if(Gi.logLevel<=Ae.DEBUG){const t=e.map(_d);Gi.debug(`Firestore (${co}): ${i}`,...t)}}function Er(i,...e){if(Gi.logLevel<=Ae.ERROR){const t=e.map(_d);Gi.error(`Firestore (${co}): ${i}`,...t)}}function to(i,...e){if(Gi.logLevel<=Ae.WARN){const t=e.map(_d);Gi.warn(`Firestore (${co}): ${i}`,...t)}}function _d(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(i="Unexpected state"){const e=`FIRESTORE (${co}) INTERNAL ASSERTION FAILED: `+i;throw Er(e),new Error(e)}function Me(i,e){i||fe()}function ge(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Sr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Lt.UNAUTHENTICATED))}shutdown(){}}class Nw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Dw{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Me(this.o===void 0);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new oi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new oi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},m=y=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new oi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string"),new Qg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Lt(e)}}class Vw{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ow{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new Vw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Me(this.o===void 0);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Me(typeof t.token=="string"),this.R=t.token,new xw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=Mw(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Pe(i,e){return i<e?-1:i>e?1:0}function no(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ot(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new ot(0,0))}static max(){return new me(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,s){t===void 0?t=0:t>e.length&&fe(),s===void 0?s=e.length-t:s>e.length-t&&fe(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ea.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ea?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ge extends Ea{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const Fw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Ea{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return Fw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ae(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ae(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ae(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Ge.fromString(e))}static fromName(e){return new he(Ge.fromString(e).popFirst(5))}static empty(){return new he(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Ge(e.slice()))}}function Uw(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=me.fromTimestamp(s===1e9?new ot(t+1,0):new ot(t,s));return new li(o,he.empty(),e)}function bw(i){return new li(i.readTime,i.key,-1)}class li{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new li(me.min(),he.empty(),-1)}static max(){return new li(me.max(),he.empty(),-1)}}function zw(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(i.documentKey,e.documentKey),t!==0?t:Pe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(i){if(i.code!==W.FAILED_PRECONDITION||i.message!==Bw)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,s)=>{t(e)})}static reject(e){return new B((t,s)=>{s(e)})}static waitFor(e){return new B((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},y=>s(y))}),h=!0,u===o&&t()})}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next(o=>o?B.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new B((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new B((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function $w(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mu.oe=-1;function Fu(i){return i==null}function Eu(i){return i===0&&1/i==-1/0}function qw(i){return typeof i=="number"&&Number.isInteger(i)&&!Eu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Dm(e)),e=Ww(i.get(t),e);return Dm(e)}function Ww(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function Dm(i){return i+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function fi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Yg(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new Ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eu(this.root,e,this.comparator,!0)}}class eu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=o??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new At(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return At.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,t,s,o,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Om(this.data.getIterator())}getIteratorFrom(e){return new Om(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ft(this.comparator);return t.data=e,t}}class Om{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new an([])}unionWith(e){let t=new ft(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new an(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Jg("Invalid base64 string: "+u):u}}(e);return new Ct(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const Kw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ui(i){if(Me(!!i),typeof i=="string"){let e=0;const t=Kw.exec(i);if(Me(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:nt(i.seconds),nanos:nt(i.nanos)}}function nt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ci(i){return typeof i=="string"?Ct.fromBase64String(i):Ct.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Uu(i){const e=i.mapValue.fields.__previous_value__;return vd(e)?Uu(e):e}function wa(i){const e=ui(i.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t,s,o,u,h,m,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v}}class Ta{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ta("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ta&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?vd(i)?4:Xw(i)?9007199254740991:Qw(i)?10:11:fe()}function Xn(i,e){if(i===e)return!0;const t=hi(i);if(t!==hi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return wa(i).isEqual(wa(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=ui(o.timestampValue),m=ui(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return ci(o.bytesValue).isEqual(ci(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return nt(o.geoPointValue.latitude)===nt(u.geoPointValue.latitude)&&nt(o.geoPointValue.longitude)===nt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return nt(o.integerValue)===nt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=nt(o.doubleValue),m=nt(u.doubleValue);return h===m?Eu(h)===Eu(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return no(i.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Vm(h)!==Vm(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!Xn(h[y],m[y])))return!1;return!0}(i,e);default:return fe()}}function Ia(i,e){return(i.values||[]).find(t=>Xn(t,e))!==void 0}function ro(i,e){if(i===e)return 0;const t=hi(i),s=hi(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=nt(u.integerValue||u.doubleValue),y=nt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return xm(i.timestampValue,e.timestampValue);case 4:return xm(wa(i),wa(e));case 5:return Pe(i.stringValue,e.stringValue);case 6:return function(u,h){const m=ci(u),y=ci(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Pe(m[v],y[v]);if(w!==0)return w}return Pe(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Pe(nt(u.latitude),nt(h.latitude));return m!==0?m:Pe(nt(u.longitude),nt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Lm(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,y,v,w;const C=u.fields||{},L=h.fields||{},z=(m=C.value)===null||m===void 0?void 0:m.arrayValue,Q=(y=L.value)===null||y===void 0?void 0:y.arrayValue,Y=Pe(((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0,((w=Q==null?void 0:Q.values)===null||w===void 0?void 0:w.length)||0);return Y!==0?Y:Lm(z,Q)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===tu.mapValue&&h===tu.mapValue)return 0;if(u===tu.mapValue)return 1;if(h===tu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let C=0;C<y.length&&C<w.length;++C){const L=Pe(y[C],w[C]);if(L!==0)return L;const z=ro(m[y[C]],v[w[C]]);if(z!==0)return z}return Pe(y.length,w.length)}(i.mapValue,e.mapValue);default:throw fe()}}function xm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Pe(i,e);const t=ui(i),s=ui(e),o=Pe(t.seconds,s.seconds);return o!==0?o:Pe(t.nanos,s.nanos)}function Lm(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=ro(t[o],s[o]);if(u)return u}return Pe(t.length,s.length)}function io(i){return Xh(i)}function Xh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=ui(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return ci(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return he.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Xh(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Xh(t.fields[h])}`;return o+"}"}(i.mapValue):fe()}function lu(i){switch(hi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Uu(i);return e?16+lu(e):16;case 5:return 2*i.stringValue.length;case 6:return ci(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+lu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return fi(s.fields,(u,h)=>{o+=u.length+lu(h)}),o}(i.mapValue);default:throw fe()}}function Yh(i){return!!i&&"integerValue"in i}function Ed(i){return!!i&&"arrayValue"in i}function Mm(i){return!!i&&"nullValue"in i}function Fm(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function uu(i){return!!i&&"mapValue"in i}function Qw(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function pa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return fi(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=pa(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function Xw(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!uu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pa(t)}setAll(e){let t=Rt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=pa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());uu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];uu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){fi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Yt(pa(this.value))}}function Zg(i){const e=[];return fi(i.fields,(t,s)=>{const o=new Rt([t]);if(uu(s)){const u=Zg(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,me.min(),me.min(),me.min(),Yt.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,me.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,me.min(),me.min(),Yt.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,me.min(),me.min(),Yt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){this.position=e,this.inclusive=t}}function Um(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=ro(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function bm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Xn(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yw(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{}class dt extends ey{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Zw(e,t,s):t==="array-contains"?new nT(e,s):t==="in"?new rT(e,s):t==="not-in"?new iT(e,s):t==="array-contains-any"?new sT(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new eT(e,s):new tT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ro(t,this.value)):t!==null&&hi(this.value)===hi(t)&&this.matchesComparison(ro(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends ey{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Yn(e,t)}matches(e){return ty(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ty(i){return i.op==="and"}function ny(i){return Jw(i)&&ty(i)}function Jw(i){for(const e of i.filters)if(e instanceof Yn)return!1;return!0}function Jh(i){if(i instanceof dt)return i.field.canonicalString()+i.op.toString()+io(i.value);if(ny(i))return i.filters.map(e=>Jh(e)).join(",");{const e=i.filters.map(t=>Jh(t)).join(",");return`${i.op}(${e})`}}function ry(i,e){return i instanceof dt?function(s,o){return o instanceof dt&&s.op===o.op&&s.field.isEqual(o.field)&&Xn(s.value,o.value)}(i,e):i instanceof Yn?function(s,o){return o instanceof Yn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&ry(h,o.filters[m]),!0):!1}(i,e):void fe()}function iy(i){return i instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${io(t.value)}`}(i):i instanceof Yn?function(t){return t.op.toString()+" {"+t.getFilters().map(iy).join(" ,")+"}"}(i):"Filter"}class Zw extends dt{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class eT extends dt{constructor(e,t){super(e,"in",t),this.keys=sy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tT extends dt{constructor(e,t){super(e,"not-in",t),this.keys=sy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>he.fromName(s.referenceValue))}class nT extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ed(t)&&Ia(t.arrayValue,this.value)}}class rT extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ia(this.value.arrayValue,t)}}class iT extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ia(this.value.arrayValue,t)}}class sT extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ed(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ia(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function zm(i,e=null,t=[],s=[],o=null,u=null,h=null){return new oT(i,e,t,s,o,u,h)}function wd(i){const e=ge(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Jh(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Fu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>io(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>io(s)).join(",")),e.ue=t}return e.ue}function Td(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!Yw(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!ry(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!bm(i.startAt,e.startAt)&&bm(i.endAt,e.endAt)}function Zh(i){return he.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function aT(i,e,t,s,o,u,h,m){return new bu(i,e,t,s,o,u,h,m)}function oy(i){return new bu(i)}function Bm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function lT(i){return i.collectionGroup!==null}function ma(i){const e=ge(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new ft(Rt.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Tu(u,s))}),t.has(Rt.keyField().canonicalString())||e.ce.push(new Tu(Rt.keyField(),s))}return e.ce}function Wn(i){const e=ge(i);return e.le||(e.le=uT(e,ma(i))),e.le}function uT(i,e){if(i.limitType==="F")return zm(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Tu(o.field,u)});const t=i.endAt?new wu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new wu(i.startAt.position,i.startAt.inclusive):null;return zm(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function ed(i,e,t){return new bu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function zu(i,e){return Td(Wn(i),Wn(e))&&i.limitType===e.limitType}function ay(i){return`${wd(Wn(i))}|lt:${i.limitType}`}function Ws(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>iy(o)).join(", ")}]`),Fu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>io(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>io(o)).join(",")),`Target(${s})`}(Wn(i))}; limitType=${i.limitType})`}function Bu(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):he.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of ma(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,y){const v=Um(h,m,y);return h.inclusive?v<=0:v<0}(s.startAt,ma(s),o)||s.endAt&&!function(h,m,y){const v=Um(h,m,y);return h.inclusive?v>=0:v>0}(s.endAt,ma(s),o))}(i,e)}function cT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function ly(i){return(e,t)=>{let s=!1;for(const o of ma(i)){const u=hT(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function hT(i,e,t){const s=i.field.isKeyField()?he.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?ro(y,v):fe()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return fe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){fi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Yg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=new Ye(he.comparator);function wr(){return dT}const uy=new Ye(he.comparator);function da(...i){let e=uy;for(const t of i)e=e.insert(t.key,t);return e}function cy(i){let e=uy;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function qi(){return ga()}function hy(){return ga()}function ga(){return new Yi(i=>i.toString(),(i,e)=>i.isEqual(e))}const fT=new Ye(he.comparator),pT=new ft(he.comparator);function Re(...i){let e=pT;for(const t of i)e=e.add(t);return e}const mT=new ft(Pe);function gT(){return mT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eu(e)?"-0":e}}function dy(i){return{integerValue:""+i}}function yT(i,e){return qw(e)?dy(e):Id(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this._=void 0}}function _T(i,e,t){return i instanceof Iu?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&vd(u)&&(u=Uu(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof Sa?py(i,e):i instanceof Aa?my(i,e):function(o,u){const h=fy(o,u),m=jm(h)+jm(o.Pe);return Yh(h)&&Yh(o.Pe)?dy(m):Id(o.serializer,m)}(i,e)}function vT(i,e,t){return i instanceof Sa?py(i,e):i instanceof Aa?my(i,e):t}function fy(i,e){return i instanceof Su?function(s){return Yh(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Iu extends ju{}class Sa extends ju{constructor(e){super(),this.elements=e}}function py(i,e){const t=gy(e);for(const s of i.elements)t.some(o=>Xn(o,s))||t.push(s);return{arrayValue:{values:t}}}class Aa extends ju{constructor(e){super(),this.elements=e}}function my(i,e){let t=gy(e);for(const s of i.elements)t=t.filter(o=>!Xn(o,s));return{arrayValue:{values:t}}}class Su extends ju{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function jm(i){return nt(i.integerValue||i.doubleValue)}function gy(i){return Ed(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function ET(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Sa&&o instanceof Sa||s instanceof Aa&&o instanceof Aa?no(s.elements,o.elements,Xn):s instanceof Su&&o instanceof Su?Xn(s.Pe,o.Pe):s instanceof Iu&&o instanceof Iu}(i.transform,e.transform)}class wT{constructor(e,t){this.version=e,this.transformResults=t}}class xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class $u{}function yy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Sd(i.key,xn.none()):new ka(i.key,i.data,xn.none());{const t=i.data,s=Yt.empty();let o=new ft(Rt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new pi(i.key,s,new an(o.toArray()),xn.none())}}function TT(i,e,t){i instanceof ka?function(o,u,h){const m=o.value.clone(),y=qm(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof pi?function(o,u,h){if(!cu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=qm(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(_y(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function ya(i,e,t,s){return i instanceof ka?function(u,h,m,y){if(!cu(u.precondition,h))return m;const v=u.value.clone(),w=Hm(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof pi?function(u,h,m,y){if(!cu(u.precondition,h))return m;const v=Hm(u.fieldTransforms,y,h),w=h.data;return w.setAll(_y(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(C=>C.field))}(i,e,t,s):function(u,h,m){return cu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function IT(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=fy(s.transform,o||null);u!=null&&(t===null&&(t=Yt.empty()),t.set(s.field,u))}return t||null}function $m(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&no(s,o,(u,h)=>ET(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ka extends $u{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class pi extends $u{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function _y(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function qm(i,e,t){const s=new Map;Me(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,vT(h,m,t[o]))}return s}function Hm(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,_T(u,h,e))}return s}class Sd extends $u{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ST extends $u{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&TT(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ya(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ya(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=hy();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=yy(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(me.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Re())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(t,s)=>$m(t,s))&&no(this.baseMutations,e.baseMutations,(t,s)=>$m(t,s))}}class Ad{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Me(e.mutations.length===s.length);let o=function(){return fT}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Ad(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,De;function PT(i){switch(i){default:return fe();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function vy(i){if(i===void 0)return Er("GRPC error has no .code"),W.UNKNOWN;switch(i){case st.OK:return W.OK;case st.CANCELLED:return W.CANCELLED;case st.UNKNOWN:return W.UNKNOWN;case st.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case st.INTERNAL:return W.INTERNAL;case st.UNAVAILABLE:return W.UNAVAILABLE;case st.UNAUTHENTICATED:return W.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case st.NOT_FOUND:return W.NOT_FOUND;case st.ALREADY_EXISTS:return W.ALREADY_EXISTS;case st.PERMISSION_DENIED:return W.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case st.ABORTED:return W.ABORTED;case st.OUT_OF_RANGE:return W.OUT_OF_RANGE;case st.UNIMPLEMENTED:return W.UNIMPLEMENTED;case st.DATA_LOSS:return W.DATA_LOSS;default:return fe()}}(De=st||(st={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new Hi([4294967295,4294967295],0);function Wm(i){const e=kT().encode(i),t=new $g;return t.update(e),new Uint8Array(t.digest())}function Km(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Hi([t,s],0),new Hi([o,u],0)]}class Rd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new fa(`Invalid padding: ${t}`);if(s<0)throw new fa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new fa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new fa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Hi.fromNumber(this.Te)}Ee(e,t,s){let o=e.add(t.multiply(Hi.fromNumber(s)));return o.compare(NT)===1&&(o=new Hi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Wm(e),[s,o]=Km(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Rd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Te===0)return;const t=Wm(e),[s,o]=Km(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class fa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new qu(me.min(),o,new Ye(Pe),wr(),Re())}}class Na{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Na(s,t,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class Ey{constructor(e,t){this.targetId=e,this.me=t}}class wy{constructor(e,t,s=Ct.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Gm{constructor(){this.fe=0,this.ge=Qm(),this.pe=Ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Re(),t=Re(),s=Re();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:fe()}}),new Na(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=Qm()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class DT{constructor(e){this.Le=e,this.Be=new Map,this.ke=wr(),this.qe=nu(),this.Qe=nu(),this.Ke=new Ye(Pe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:fe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const u=o.target;if(Zh(u))if(s===0){const h=new he(u.path);this.We(t,h,Mt.newNoDocument(h,me.min()))}else Me(s===1);else{const h=this.Ze(t);if(h!==s){const m=this.Xe(e),y=m?this.et(m,e,h):1;if(y!==0){this.He(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=ci(s).toUint8Array()}catch(y){if(y instanceof Jg)return to("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Rd(h,o,u)}catch(y){return to(y instanceof fa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.Te===0?null:m}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Le.nt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.We(t,u,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((u,h)=>{const m=this.Ye(h);if(m){if(u.current&&Zh(m.target)){const y=new he(m.target.path);this.st(y).has(h)||this.ot(h,y)||this.We(h,y,Mt.newNoDocument(y,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Re();this.Qe.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const v=this.Ye(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new qu(e,t,this.Ke,this.ke,s);return this.ke=wr(),this.qe=nu(),this.Qe=nu(),this.Ke=new Ye(Pe),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Gm,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new ft(Pe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ft(Pe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Gm),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function nu(){return new Ye(he.comparator)}function Qm(){return new Ye(he.comparator)}const VT={asc:"ASCENDING",desc:"DESCENDING"},OT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xT={and:"AND",or:"OR"};class LT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function td(i,e){return i.useProto3Json||Fu(e)?e:{value:e}}function Au(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ty(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function MT(i,e){return Au(i,e.toTimestamp())}function Kn(i){return Me(!!i),me.fromTimestamp(function(t){const s=ui(t);return new ot(s.seconds,s.nanos)}(i))}function Cd(i,e){return nd(i,e).canonicalString()}function nd(i,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function Iy(i){const e=Ge.fromString(i);return Me(Py(e)),e}function rd(i,e){return Cd(i.databaseId,e.path)}function Fh(i,e){const t=Iy(e);if(t.get(1)!==i.databaseId.projectId)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new he(Ay(t))}function Sy(i,e){return Cd(i.databaseId,e)}function FT(i){const e=Iy(i);return e.length===4?Ge.emptyPath():Ay(e)}function id(i){return new Ge(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Ay(i){return Me(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Xm(i,e,t){return{name:rd(i,e),fields:t.value.mapValue.fields}}function UT(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(Me(w===void 0||typeof w=="string"),Ct.fromBase64String(w||"")):(Me(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Ct.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?W.UNKNOWN:vy(v.code);return new ae(w,v.message||"")}(h);t=new wy(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Fh(i,s.document.name),u=Kn(s.document.updateTime),h=s.document.createTime?Kn(s.document.createTime):me.min(),m=new Yt({mapValue:{fields:s.document.fields}}),y=Mt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new hu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Fh(i,s.document),u=s.readTime?Kn(s.readTime):me.min(),h=Mt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new hu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Fh(i,s.document),u=s.removedTargetIds||[];t=new hu([],u,o,null)}else{if(!("filter"in e))return fe();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new CT(o,u),m=s.targetId;t=new Ey(m,h)}}return t}function bT(i,e){let t;if(e instanceof ka)t={update:Xm(i,e.key,e.value)};else if(e instanceof Sd)t={delete:rd(i,e.key)};else if(e instanceof pi)t={update:Xm(i,e.key,e.data),updateMask:GT(e.fieldMask)};else{if(!(e instanceof ST))return fe();t={verify:rd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Iu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Sa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Aa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Su)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw fe()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:MT(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:fe()}(i,e.precondition)),t}function zT(i,e){return i&&i.length>0?(Me(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Kn(o.updateTime):Kn(u);return h.isEqual(me.min())&&(h=Kn(u)),new wT(h,o.transformResults||[])}(t,e))):[]}function BT(i,e){return{documents:[Sy(i,e.path)]}}function jT(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Sy(i,o);const u=function(v){if(v.length!==0)return Cy(Yn.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(L){return{field:Ks(L.field),direction:HT(L.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=td(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ct:t,parent:o}}function $T(i){let e=FT(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Me(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(C){const L=Ry(C);return L instanceof Yn&&ny(L)?L.getFilters():[L]}(t.where));let h=[];t.orderBy&&(h=function(C){return C.map(L=>function(Q){return new Tu(Gs(Q.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Q.direction))}(L))}(t.orderBy));let m=null;t.limit&&(m=function(C){let L;return L=typeof C=="object"?C.value:C,Fu(L)?null:L}(t.limit));let y=null;t.startAt&&(y=function(C){const L=!!C.before,z=C.values||[];return new wu(z,L)}(t.startAt));let v=null;return t.endAt&&(v=function(C){const L=!C.before,z=C.values||[];return new wu(z,L)}(t.endAt)),aT(e,o,h,u,m,"F",y,v)}function qT(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ry(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Gs(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Gs(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Gs(t.unaryFilter.field);return dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Gs(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(i):i.fieldFilter!==void 0?function(t){return dt.create(Gs(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Yn.create(t.compositeFilter.filters.map(s=>Ry(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return fe()}}(t.compositeFilter.op))}(i):fe()}function HT(i){return VT[i]}function WT(i){return OT[i]}function KT(i){return xT[i]}function Ks(i){return{fieldPath:i.canonicalString()}}function Gs(i){return Rt.fromServerFormat(i.fieldPath)}function Cy(i){return i instanceof dt?function(t){if(t.op==="=="){if(Fm(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NAN"}};if(Mm(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fm(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NOT_NAN"}};if(Mm(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(t.field),op:WT(t.op),value:t.value}}}(i):i instanceof Yn?function(t){const s=t.getFilters().map(o=>Cy(o));return s.length===1?s[0]:{compositeFilter:{op:KT(t.op),filters:s}}}(i):fe()}function GT(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Py(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,s,o,u=me.min(),h=me.min(),m=Ct.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.ht=e}}function XT(i){const e=$T({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?ed(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.ln=new JT}addToCollectionParentIndex(e,t){return this.ln.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(li.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(li.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class JT{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new ft(Ge.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new ft(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new so(0)}static Qn(){return new so(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm([i,e],[t,s]){const o=Pe(i,t);return o===0?Pe(e,s):o}class ZT{constructor(e){this.Gn=e,this.buffer=new ft(Jm),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Jm(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class eI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fo(t)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ho(t)}await this.Yn(3e5)})}}class tI{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return B.resolve(Mu.oe);const s=new ZT(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Ym)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ym):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,h=Date.now(),this.nthSequenceNumber(e,o))).next(C=>(s=C,m=Date.now(),this.removeTargets(e,s,t))).next(C=>(u=C,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(C=>(v=Date.now(),Hs()<=Ae.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${C} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:C})))}}function nI(i,e){return new tI(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.changes=new Yi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&ya(s.mutation,o,an.empty(),ot.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Re()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Re()){const o=qi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=da();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=qi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Re()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=wr();const h=ga(),m=function(){return ga()}();return t.forEach((y,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof pi)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),ya(w.mutation,v,w.mutation.getFieldMask(),ot.now())):h.set(v.key,an.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var C;return m.set(v,new iI(w,(C=h.get(v))!==null&&C!==void 0?C:null))}),m))}recalculateAndSaveOverlays(e,t){const s=ga();let o=new Ye((h,m)=>h-m),u=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||an.empty();w=m.applyToLocalView(v,w),s.set(y,w);const C=(o.get(m.batchId)||Re()).add(y);o=o.insert(m.batchId,C)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,C=hy();w.forEach(L=>{if(!u.has(L)){const z=yy(t.get(L),s.get(L));z!==null&&C.set(L,z),u=u.add(L)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,C))}return B.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return he.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):lT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve(qi());let m=-1,y=u;return h.next(v=>B.forEach(v,(w,C)=>(m<C.largestBatchId&&(m=C.largestBatchId),u.get(w)?B.resolve():this.remoteDocumentCache.getEntry(e,w).next(L=>{y=y.insert(w,L)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,y,v,Re())).next(w=>({batchId:m,changes:cy(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(s=>{let o=da();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=da();return this.indexManager.getCollectionParents(e,u).next(m=>B.forEach(m,y=>{const v=function(C,L){return new bu(L,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((C,L)=>{h=h.insert(C,L)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Mt.newInvalidDocument(w)))});let m=da();return h.forEach((y,v)=>{const w=u.get(y);w!==void 0&&ya(w.mutation,v,an.empty(),ot.now()),Bu(t,v)&&(m=m.insert(y,v))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return B.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Kn(o.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:XT(o.bundledQuery),readTime:Kn(o.readTime)}}(t)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.overlays=new Ye(he.comparator),this.Er=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=qi();return B.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Er.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=qi(),u=t.length+1,h=new he(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Ye((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=qi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=qi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return B.resolve(m)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new RT(t,s));let u=this.Er.get(t);u===void 0&&(u=Re(),this.Er.set(t,u)),this.Er.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.dr=new ft(vt.Ar),this.Rr=new ft(vt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new vt(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new vt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new he(new Ge([])),s=new vt(t,e),o=new vt(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new he(new Ge([])),s=new vt(t,e),o=new vt(t,e+1);let u=Re();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new vt(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class vt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return he.comparator(e.key,t.key)||Pe(e.br,t.br)}static Vr(e,t){return Pe(e.br,t.br)||he.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new ft(vt.Ar)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new AT(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.vr=this.vr.add(new vt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new vt(t,0),o=new vt(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const m=this.Cr(h.br);u.push(m)}),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ft(Pe);return t.forEach(o=>{const u=new vt(o,0),h=new vt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],m=>{s=s.add(m.br)})}),B.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;he.isDocumentKey(u)||(u=u.child(""));const h=new vt(new he(u),0);let m=new ft(Pe);return this.vr.forEachWhile(y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.br)),!0)},h),B.resolve(this.Mr(m))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Me(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return B.forEach(t.mutations,o=>{const u=new vt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new vt(t,0),o=this.vr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.Nr=e,this.docs=function(){return new Ye(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=wr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Mt.newInvalidDocument(o))}),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=wr();const h=t.path,m=new he(h.child("")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||zw(bw(w),s)<=0||(o.has(w.key)||Bu(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){fe()}Lr(e,t){return B.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new hI(this)}getSize(e){return B.resolve(this.size)}}class hI extends rI{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),B.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.persistence=e,this.Br=new Yi(t=>wd(t),Td),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.kr=0,this.qr=new Pd,this.targetCount=0,this.Qr=so.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),B.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new so(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.Un(t),B.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Br.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Br.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),B.waitFor(u).next(()=>o)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Mu(0),this.Ur=!1,this.Ur=!0,this.Wr=new lI,this.referenceDelegate=e(this),this.Gr=new dI(this),this.indexManager=new YT,this.remoteDocumentCache=function(o){return new cI(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new QT(t),this.jr=new oI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new uI(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new fI(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return B.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class fI extends jw{constructor(e){super(),this.currentSequenceNumber=e}}class kd{constructor(e){this.persistence=e,this.Zr=new Pd,this.Xr=null}static ei(e){return new kd(e)}get ti(){if(this.Xr)return this.Xr;throw fe()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),B.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ti,s=>{const o=he.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,me.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return B.or([()=>B.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Ru{constructor(e,t){this.persistence=e,this.ri=new Yi(s=>Hw(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=nI(this,t)}static ei(e,t){return new Ru(e,t)}Hr(){}Jr(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return B.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?B.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(m=>{m||(s++,u.removeEntry(h,me.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),B.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=lu(e.data.value)),t}ir(e,t,s){return B.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Re(),o=Re();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Nd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return dE()?8:$w(Ft())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new pI;return this.ts(e,t,h).next(m=>{if(u.result=m,this.Hi)return this.ns(e,t,h,m.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(Hs()<=Ae.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Ws(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),B.resolve()):(Hs()<=Ae.DEBUG&&te("QueryEngine","Query:",Ws(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(Hs()<=Ae.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Ws(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wn(t))):B.resolve())}Xi(e,t){if(Bm(t))return B.resolve(null);let s=Wn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=ed(t,null,"F"),s=Wn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Re(...u);return this.Zi.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const v=this.rs(t,m);return this.ss(t,v,h,y.readTime)?this.Xi(e,ed(t,null,"F")):this.os(e,v,t,y)}))})))}es(e,t,s,o){return Bm(t)||o.isEqual(me.min())?B.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?B.resolve(null):(Hs()<=Ae.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ws(t)),this.os(e,h,t,Uw(o,-1)).next(m=>m))})}rs(e,t){let s=new ft(ly(e));return t.forEach((o,u)=>{Bu(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return Hs()<=Ae.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Ws(t)),this.Zi.getDocumentsMatchingQuery(e,t,li.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Ye(Pe),this.cs=new Yi(u=>wd(u),Td),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sI(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function yI(i,e,t,s){return new gI(i,e,t,s)}async function Ny(i,e){const t=ge(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=Re();for(const v of o){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next(v=>({Ts:v,removedBatchIds:h,addedBatchIds:m}))})})}function _I(i,e){const t=ge(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(m,y,v,w){const C=v.batch,L=C.keys();let z=B.resolve();return L.forEach(Q=>{z=z.next(()=>w.getEntry(y,Q)).next(Y=>{const q=v.docVersions.get(Q);Me(q!==null),Y.version.compareTo(q)<0&&(C.applyToRemoteDocument(Y,v),Y.isValidDocument()&&(Y.setReadTime(v.commitVersion),w.addEntry(Y)))})}),z.next(()=>m.mutationQueue.removeMutationBatch(y,C))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let y=Re();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Dy(i){const e=ge(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function vI(i,e){const t=ge(i),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const m=[];e.targetChanges.forEach((w,C)=>{const L=o.get(C);if(!L)return;m.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,C).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,C)));let z=L.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(C)!==null?z=z.withResumeToken(Ct.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(C,z),function(Y,q,ve){return Y.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=3e8?!0:ve.addedDocuments.size+ve.modifiedDocuments.size+ve.removedDocuments.size>0}(L,z,w)&&m.push(t.Gr.updateTargetData(u,z))});let y=wr(),v=Re();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(EI(u,h,e.documentUpdates).next(w=>{y=w.Is,v=w.Es})),!s.isEqual(me.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(C=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return B.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,v)).next(()=>y)}).then(u=>(t.us=o,u))}function EI(i,e,t){let s=Re(),o=Re();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=wr();return t.forEach((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(me.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):te("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)}),{Is:h,Es:o}})}function wI(i,e){const t=ge(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function TI(i,e){const t=ge(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(u=>u?(o=u,B.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new ni(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function sd(i,e,t){const s=ge(i),o=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!fo(h))throw h;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function Zm(i,e,t){const s=ge(i);let o=me.min(),u=Re();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,v,w){const C=ge(y),L=C.cs.get(w);return L!==void 0?B.resolve(C.us.get(L)):C.Gr.getTargetData(v,w)}(s,h,Wn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:me.min(),t?u:Re())).next(m=>(II(s,cT(e),m),{documents:m,ds:u})))}function II(i,e,t){let s=i.ls.get(e)||me.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class eg{constructor(){this.activeTargetIds=gT()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SI{constructor(){this._o=new eg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new eg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru=null;function Uh(){return ru===null?ru=function(){return 268435456+Math.round(2147483648*Math.random())}():ru++,"0x"+ru.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class PI extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const m=Uh(),y=this.No(t,s.toUriEncodedString());te("RestConnection",`Sending RPC '${t}' ${m}:`,y,o);const v={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(v,u,h),this.Bo(t,y,v,o).then(w=>(te("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw to("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",y,"request:",o),w})}ko(t,s,o,u,h,m){return this.Oo(t,s,o,u,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+co}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=RI[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const u=Uh();return new Promise((h,m)=>{const y=new qg;y.setWithCredentials(!0),y.listenOnce(Hg.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case au.NO_ERROR:const w=y.getResponseJson();te(xt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case au.TIMEOUT:te(xt,`RPC '${e}' ${u} timed out`),m(new ae(W.DEADLINE_EXCEEDED,"Request time out"));break;case au.HTTP_ERROR:const C=y.getStatus();if(te(xt,`RPC '${e}' ${u} failed with status:`,C,"response text:",y.getResponseText()),C>0){let L=y.getResponseJson();Array.isArray(L)&&(L=L[0]);const z=L==null?void 0:L.error;if(z&&z.status&&z.message){const Q=function(q){const ve=q.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ve)>=0?ve:W.UNKNOWN}(z.status);m(new ae(Q,z.message))}else m(new ae(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new ae(W.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{te(xt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);te(xt,`RPC '${e}' ${u} sending request:`,o),y.send(t,"POST",v,s,15)})}qo(e,t,s){const o=Uh(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Gg(),m=Kg(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Lo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");te(xt,`Creating RPC '${e}' stream ${o}: ${w}`,y);const C=h.createWebChannel(w,y);let L=!1,z=!1;const Q=new CI({Eo:q=>{z?te(xt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(L||(te(xt,`Opening RPC '${e}' stream ${o} transport.`),C.open(),L=!0),te(xt,`RPC '${e}' stream ${o} sending:`,q),C.send(q))},Ao:()=>C.close()}),Y=(q,ve,_e)=>{q.listen(ve,ye=>{try{_e(ye)}catch(we){setTimeout(()=>{throw we},0)}})};return Y(C,ha.EventType.OPEN,()=>{z||(te(xt,`RPC '${e}' stream ${o} transport opened.`),Q.So())}),Y(C,ha.EventType.CLOSE,()=>{z||(z=!0,te(xt,`RPC '${e}' stream ${o} transport closed`),Q.Do())}),Y(C,ha.EventType.ERROR,q=>{z||(z=!0,to(xt,`RPC '${e}' stream ${o} transport errored:`,q),Q.Do(new ae(W.UNAVAILABLE,"The operation could not be completed")))}),Y(C,ha.EventType.MESSAGE,q=>{var ve;if(!z){const _e=q.data[0];Me(!!_e);const ye=_e,we=(ye==null?void 0:ye.error)||((ve=ye[0])===null||ve===void 0?void 0:ve.error);if(we){te(xt,`RPC '${e}' stream ${o} received error:`,we);const He=we.status;let Se=function(A){const P=st[A];if(P!==void 0)return vy(P)}(He),N=we.message;Se===void 0&&(Se=W.INTERNAL,N="Unknown error status: "+He+" with message "+we.message),z=!0,Q.Do(new ae(Se,N)),C.close()}else te(xt,`RPC '${e}' stream ${o} received:`,_e),Q.vo(_e)}}),Y(m,Wg.STAT_EVENT,q=>{q.stat===Qh.PROXY?te(xt,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===Qh.NOPROXY&&te(xt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{Q.bo()},0),Q}}function bh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(i){return new LT(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t,s,o,u,h,m,y){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Vy(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Er(t.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ae(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kI extends Oy{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=UT(this.serializer,e),s=function(u){if(!("targetChange"in u))return me.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?me.min():h.readTime?Kn(h.readTime):me.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=id(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=Zh(y)?{documents:BT(u,y)}:{query:jT(u,y).ct},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Ty(u,h.resumeToken);const v=td(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(me.min())>0){m.readTime=Au(u,h.snapshotVersion.toTimestamp());const v=td(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=qT(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=id(this.serializer),t.removeTarget=e,this.c_(t)}}class NI extends Oy{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=zT(e.writeResults,e.commitTime),s=Kn(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=id(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>bT(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,nd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae(W.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.ko(e,nd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(W.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class VI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Er(t),this.C_=!1):te("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{Ji(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(y){const v=ge(y);v.k_.add(4),await Da(v),v.K_.set("Unknown"),v.k_.delete(4),await Wu(v)}(this))})}),this.K_=new VI(s,o)}}async function Wu(i){if(Ji(i))for(const e of i.q_)await e(!0)}async function Da(i){for(const e of i.q_)await e(!1)}function xy(i,e){const t=ge(i);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),xd(t)?Od(t):po(t).s_()&&Vd(t,e))}function Dd(i,e){const t=ge(i),s=po(t);t.B_.delete(e),s.s_()&&Ly(t,e),t.B_.size===0&&(s.s_()?s.a_():Ji(t)&&t.K_.set("Unknown"))}function Vd(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}po(i).V_(e)}function Ly(i,e){i.U_.xe(e),po(i).m_(e)}function Od(i){i.U_=new DT({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.B_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),po(i).start(),i.K_.F_()}function xd(i){return Ji(i)&&!po(i).i_()&&i.B_.size>0}function Ji(i){return ge(i).k_.size===0}function My(i){i.U_=void 0}async function xI(i){i.K_.set("Online")}async function LI(i){i.B_.forEach((e,t)=>{Vd(i,e)})}async function MI(i,e){My(i),xd(i)?(i.K_.O_(e),Od(i)):i.K_.set("Unknown")}async function FI(i,e,t){if(i.K_.set("Online"),e instanceof wy&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.B_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.B_.delete(m),o.U_.removeTarget(m))}(i,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Cu(i,s)}else if(e instanceof hu?i.U_.$e(e):e instanceof Ey?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(me.min()))try{const s=await Dy(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.U_.it(h);return m.targetChanges.forEach((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.B_.get(v);w&&u.B_.set(v,w.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,v)=>{const w=u.B_.get(y);if(!w)return;u.B_.set(y,w.withResumeToken(Ct.EMPTY_BYTE_STRING,w.snapshotVersion)),Ly(u,y);const C=new ni(w.target,y,v,w.sequenceNumber);Vd(u,C)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await Cu(i,s)}}async function Cu(i,e,t){if(!fo(e))throw e;i.k_.add(1),await Da(i),i.K_.set("Offline"),t||(t=()=>Dy(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await Wu(i)})}function Fy(i,e){return e().catch(t=>Cu(i,t,e))}async function Ku(i){const e=ge(i),t=di(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;UI(e);)try{const o=await wI(e.localStore,s);if(o===null){e.L_.length===0&&t.a_();break}s=o.batchId,bI(e,o)}catch(o){await Cu(e,o)}Uy(e)&&by(e)}function UI(i){return Ji(i)&&i.L_.length<10}function bI(i,e){i.L_.push(e);const t=di(i);t.s_()&&t.f_&&t.g_(e.mutations)}function Uy(i){return Ji(i)&&!di(i).i_()&&i.L_.length>0}function by(i){di(i).start()}async function zI(i){di(i).w_()}async function BI(i){const e=di(i);for(const t of i.L_)e.g_(t.mutations)}async function jI(i,e,t){const s=i.L_.shift(),o=Ad.from(s,e,t);await Fy(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await Ku(i)}async function $I(i,e){e&&di(i).f_&&await async function(s,o){if(function(h){return PT(h)&&h!==W.ABORTED}(o.code)){const u=s.L_.shift();di(s).__(),await Fy(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Ku(s)}}(i,e),Uy(i)&&by(i)}async function ng(i,e){const t=ge(i);t.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=Ji(t);t.k_.add(3),await Da(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Wu(t)}async function qI(i,e){const t=ge(i);e?(t.k_.delete(2),await Wu(t)):e||(t.k_.add(2),await Da(t),t.K_.set("Unknown"))}function po(i){return i.W_||(i.W_=function(t,s,o){const u=ge(t);return u.b_(),new kI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:xI.bind(null,i),mo:LI.bind(null,i),po:MI.bind(null,i),R_:FI.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),xd(i)?Od(i):i.K_.set("Unknown")):(await i.W_.stop(),My(i))})),i.W_}function di(i){return i.G_||(i.G_=function(t,s,o){const u=ge(t);return u.b_(),new NI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:zI.bind(null,i),po:$I.bind(null,i),p_:BI.bind(null,i),y_:jI.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await Ku(i)):(await i.G_.stop(),i.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${i.L_.length} pending writes`),i.L_=[]))})),i.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Ld(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Md(i,e){if(Er("AsyncQueue",`${e}: ${i}`),fo(i))return new ae(W.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{static emptySet(e){return new Xs(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=da(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Xs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.z_=new Ye(he.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):fe():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class oo{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new oo(e,t,Xs.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class WI{constructor(){this.queries=ig(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=ge(t),u=o.queries;o.queries=ig(),u.forEach((h,m)=>{for(const y of m.J_)y.onError(s)})})(this,new ae(W.ABORTED,"Firestore shutting down"))}}function ig(){return new Yi(i=>ay(i),zu)}async function KI(i,e){const t=ge(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new HI,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(o,!0);break;case 1:u.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Md(h,`Initialization of query '${Ws(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&Fd(t)}async function GI(i,e){const t=ge(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function QI(i,e){const t=ge(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.J_)m.ta(o)&&(s=!0);h.H_=o}}s&&Fd(t)}function XI(i,e,t){const s=ge(i),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(t);s.queries.delete(e)}function Fd(i){i.X_.forEach(e=>{e.next()})}var od,sg;(sg=od||(od={})).na="default",sg.Cache="cache";class YI{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new oo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==od.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.key=e}}class By{constructor(e){this.key=e}}class JI{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Re(),this.mutatedKeys=Re(),this.Va=ly(e),this.ma=new Xs(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new rg,o=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,C)=>{const L=o.get(w),z=Bu(this.query,C)?C:null,Q=!!L&&this.mutatedKeys.has(L.key),Y=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let q=!1;L&&z?L.data.isEqual(z.data)?Q!==Y&&(s.track({type:3,doc:z}),q=!0):this.ya(L,z)||(s.track({type:2,doc:z}),q=!0,(y&&this.Va(z,y)>0||v&&this.Va(z,v)<0)&&(m=!0)):!L&&z?(s.track({type:0,doc:z}),q=!0):L&&!z&&(s.track({type:1,doc:L}),q=!0,(y||v)&&(m=!0)),q&&(z?(h=h.add(z),u=Y?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:m,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,C)=>function(z,Q){const Y=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return Y(z)-Y(Q)}(w.type,C.type)||this.Va(w.doc,C.doc)),this.wa(s),o=o!=null&&o;const m=t&&!o?this.Sa():[],y=this.Ra.size===0&&this.current&&!o?1:0,v=y!==this.Aa;return this.Aa=y,h.length!==0||v?{snapshot:new oo(this.query,e.ma,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new rg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Re(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new By(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new zy(s))}),t}va(e){this.da=e.ds,this.Ra=Re();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return oo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class ZI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class eS{constructor(e){this.key=e,this.Fa=!1}}class tS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Yi(m=>ay(m),zu),this.Oa=new Map,this.Na=new Set,this.La=new Ye(he.comparator),this.Ba=new Map,this.ka=new Pd,this.qa={},this.Qa=new Map,this.Ka=so.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function nS(i,e,t=!0){const s=Ky(i);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await jy(s,e,t,!0),o}async function rS(i,e){const t=Ky(i);await jy(t,e,!0,!1)}async function jy(i,e,t,s){const o=await TI(i.localStore,Wn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await iS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&xy(i.remoteStore,o),m}async function iS(i,e,t,s,o){i.Ua=(C,L,z)=>async function(Y,q,ve,_e){let ye=q.view.ga(ve);ye.ss&&(ye=await Zm(Y.localStore,q.query,!1).then(({documents:N})=>q.view.ga(N,ye)));const we=_e&&_e.targetChanges.get(q.targetId),He=_e&&_e.targetMismatches.get(q.targetId)!=null,Se=q.view.applyChanges(ye,Y.isPrimaryClient,we,He);return ag(Y,q.targetId,Se.ba),Se.snapshot}(i,C,L,z);const u=await Zm(i.localStore,e,!0),h=new JI(e,u.ds),m=h.ga(u.documents),y=Na.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);ag(i,t,v.ba);const w=new ZI(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),v.snapshot}async function sS(i,e,t){const s=ge(i),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(h=>!zu(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await sd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Dd(s.remoteStore,o.targetId),ad(s,o.targetId)}).catch(ho)):(ad(s,o.targetId),await sd(s.localStore,o.targetId,!0))}async function oS(i,e){const t=ge(i),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Dd(t.remoteStore,s.targetId))}async function aS(i,e,t){const s=pS(i);try{const o=await function(h,m){const y=ge(h),v=ot.now(),w=m.reduce((z,Q)=>z.add(Q.key),Re());let C,L;return y.persistence.runTransaction("Locally write mutations","readwrite",z=>{let Q=wr(),Y=Re();return y.hs.getEntries(z,w).next(q=>{Q=q,Q.forEach((ve,_e)=>{_e.isValidDocument()||(Y=Y.add(ve))})}).next(()=>y.localDocuments.getOverlayedDocuments(z,Q)).next(q=>{C=q;const ve=[];for(const _e of m){const ye=IT(_e,C.get(_e.key).overlayedDocument);ye!=null&&ve.push(new pi(_e.key,ye,Zg(ye.value.mapValue),xn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,ve,m)}).next(q=>{L=q;const ve=q.applyToLocalDocumentSet(C,Y);return y.documentOverlayCache.saveOverlays(z,q.batchId,ve)})}).then(()=>({batchId:L.batchId,changes:cy(C)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,y){let v=h.qa[h.currentUser.toKey()];v||(v=new Ye(Pe)),v=v.insert(m,y),h.qa[h.currentUser.toKey()]=v}(s,o.batchId,t),await Va(s,o.changes),await Ku(s.remoteStore)}catch(o){const u=Md(o,"Failed to persist write");t.reject(u)}}async function $y(i,e){const t=ge(i);try{const s=await vI(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ba.get(u);h&&(Me(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Me(h.Fa):o.removedDocuments.size>0&&(Me(h.Fa),h.Fa=!1))}),await Va(t,s,e)}catch(s){await ho(s)}}function og(i,e,t){const s=ge(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const m=h.view.ea(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const y=ge(h);y.onlineState=m;let v=!1;y.queries.forEach((w,C)=>{for(const L of C.J_)L.ea(m)&&(v=!0)}),v&&Fd(y)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function lS(i,e,t){const s=ge(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ba.get(e),u=o&&o.key;if(u){let h=new Ye(he.comparator);h=h.insert(u,Mt.newNoDocument(u,me.min()));const m=Re().add(u),y=new qu(me.min(),new Map,new Ye(Pe),h,m);await $y(s,y),s.La=s.La.remove(u),s.Ba.delete(e),Ud(s)}else await sd(s.localStore,e,!1).then(()=>ad(s,e,t)).catch(ho)}async function uS(i,e){const t=ge(i),s=e.batch.batchId;try{const o=await _I(t.localStore,e);Hy(t,s,null),qy(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Va(t,o)}catch(o){await ho(o)}}async function cS(i,e,t){const s=ge(i);try{const o=await function(h,m){const y=ge(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next(C=>(Me(C!==null),w=C.keys(),y.mutationQueue.removeMutationBatch(v,C))).next(()=>y.mutationQueue.performConsistencyCheck(v)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>y.localDocuments.getDocuments(v,w))})}(s.localStore,e);Hy(s,e,t),qy(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Va(s,o)}catch(o){await ho(o)}}function qy(i,e){(i.Qa.get(e)||[]).forEach(t=>{t.resolve()}),i.Qa.delete(e)}function Hy(i,e,t){const s=ge(i);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function ad(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||Wy(i,s)})}function Wy(i,e){i.Na.delete(e.path.canonicalString());const t=i.La.get(e);t!==null&&(Dd(i.remoteStore,t),i.La=i.La.remove(e),i.Ba.delete(t),Ud(i))}function ag(i,e,t){for(const s of t)s instanceof zy?(i.ka.addReference(s.key,e),hS(i,s)):s instanceof By?(te("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||Wy(i,s.key)):fe()}function hS(i,e){const t=e.key,s=t.path.canonicalString();i.La.get(t)||i.Na.has(s)||(te("SyncEngine","New document in limbo: "+t),i.Na.add(s),Ud(i))}function Ud(i){for(;i.Na.size>0&&i.La.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new he(Ge.fromString(e)),s=i.Ka.next();i.Ba.set(s,new eS(t)),i.La=i.La.insert(t,s),xy(i.remoteStore,new ni(Wn(oy(t.path)),s,"TargetPurposeLimboResolution",Mu.oe))}}async function Va(i,e,t){const s=ge(i),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((m,y)=>{h.push(s.Ua(y,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const C=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,C?"current":"not-current")}if(v){o.push(v);const C=Nd.zi(y.targetId,v);u.push(C)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(y,v){const w=ge(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>B.forEach(v,L=>B.forEach(L.Wi,z=>w.persistence.referenceDelegate.addReference(C,L.targetId,z)).next(()=>B.forEach(L.Gi,z=>w.persistence.referenceDelegate.removeReference(C,L.targetId,z)))))}catch(C){if(!fo(C))throw C;te("LocalStore","Failed to update sequence numbers: "+C)}for(const C of v){const L=C.targetId;if(!C.fromCache){const z=w.us.get(L),Q=z.snapshotVersion,Y=z.withLastLimboFreeSnapshotVersion(Q);w.us=w.us.insert(L,Y)}}}(s.localStore,u))}async function dS(i,e){const t=ge(i);if(!t.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await Ny(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(m=>{m.forEach(y=>{y.reject(new ae(W.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Va(t,s.Ts)}}function fS(i,e){const t=ge(i),s=t.Ba.get(e);if(s&&s.Fa)return Re().add(s.key);{let o=Re();const u=t.Oa.get(e);if(!u)return o;for(const h of u){const m=t.xa.get(h);o=o.unionWith(m.view.fa)}return o}}function Ky(i){const e=ge(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=$y.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lS.bind(null,e),e.Ma.R_=QI.bind(null,e.eventManager),e.Ma.Wa=XI.bind(null,e.eventManager),e}function pS(i){const e=ge(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cS.bind(null,e),e}class Pu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hu(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return yI(this.persistence,new mI,e.initialUser,this.serializer)}ja(e){return new ky(kd.ei,this.serializer)}za(e){return new SI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pu.provider={build:()=>new Pu};class mS extends Pu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Me(this.persistence.referenceDelegate instanceof Ru);const s=this.persistence.referenceDelegate.garbageCollector;return new eI(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new ky(s=>Ru.ei(s,t),this.serializer)}}class ld{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>og(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dS.bind(null,this.syncEngine),await qI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WI}()}createDatastore(e){const t=Hu(e.databaseInfo.databaseId),s=function(u){return new PI(u)}(e.databaseInfo);return function(u,h,m,y){return new DI(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new OI(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>og(this.syncEngine,t,0),function(){return tg.p()?new tg:new AI}())}createSyncEngine(e,t){return function(o,u,h,m,y,v,w){const C=new tS(o,u,h,m,y,v);return w&&(C.$a=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=ge(o);te("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Da(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ld.provider={build:()=>new ld};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=Xg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{te("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(te("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Md(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function zh(i,e){i.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Ny(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function lg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await _S(i);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>ng(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>ng(e.remoteStore,o)),i._onlineComponents=e}async function _S(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await zh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;to("Error using user provided cache. Falling back to memory cache: "+t),await zh(i,new Pu)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await zh(i,new mS(void 0));return i._offlineComponents}async function Gy(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await lg(i,i._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await lg(i,new ld))),i._onlineComponents}function vS(i){return Gy(i).then(e=>e.syncEngine)}async function ES(i){const e=await Gy(i),t=e.eventManager;return t.onListen=nS.bind(null,e.syncEngine),t.onUnlisten=sS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oS.bind(null,e.syncEngine),t}function wS(i,e,t={}){const s=new oi;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,v){const w=new gS({next:L=>{w.eu(),h.enqueueAndForget(()=>GI(u,C)),L.fromCache&&y.source==="server"?v.reject(new ae(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(L)},error:L=>v.reject(L)}),C=new YI(m,w,{includeMetadataChanges:!0,ua:!0});return KI(u,C)}(await ES(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(i,e,t){if(!t)throw new ae(W.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function TS(i,e,t,s){if(e===!0&&s===!0)throw new ae(W.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function cg(i){if(!he.isDocumentKey(i))throw new ae(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function hg(i){if(he.isDocumentKey(i))throw new ae(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function bd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":fe()}function Qi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ae(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bd(i);throw new ae(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gu{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new kw;switch(s.type){case"firstParty":return new Ow(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=ug.get(t);s&&(te("ComponentProvider","Removing Datastore"),ug.delete(t),s.terminate())}(this),Promise.resolve()}}function IS(i,e,t,s={}){var o;const u=(i=Qi(i,Gu))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&to("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,y;if(typeof s.mockUserToken=="string")m=s.mockUserToken,y=Lt.MOCK_USER;else{m=sE(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ae(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Lt(v)}i._authCredentials=new Nw(new Qg(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qu(this.firestore,e,this._query)}}class _n{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _n(this.firestore,e,this._key)}}class ai extends Qu{constructor(e,t,s){super(e,t,oy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _n(this.firestore,null,new he(e))}withConverter(e){return new ai(this.firestore,e,this._path)}}function SS(i,e,...t){if(i=Jt(i),Xy("collection","path",e),i instanceof Gu){const s=Ge.fromString(e,...t);return hg(s),new ai(i,null,s)}{if(!(i instanceof _n||i instanceof ai))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return hg(s),new ai(i.firestore,null,s)}}function ud(i,e,...t){if(i=Jt(i),arguments.length===1&&(e=Xg.newId()),Xy("doc","path",e),i instanceof Gu){const s=Ge.fromString(e,...t);return cg(s),new _n(i,null,new he(s))}{if(!(i instanceof _n||i instanceof ai))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return cg(s),new _n(i.firestore,i instanceof ai?i.converter:null,new he(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Vy(this,"async_queue_retry"),this.fu=()=>{const s=bh();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=bh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=bh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new oi;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!fo(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Er("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Ld.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.du.push(o),o}pu(){this.Au&&fe()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Oa extends Gu{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new fg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fg(e),this._firestoreClient=void 0,await e}}}function AS(i,e){const t=typeof i=="object"?i:zg(),s=typeof i=="string"?i:"(default)",o=yd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=rE("firestore");u&&IS(o,...u)}return o}function Yy(i){if(i._terminated)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||RS(i),i._firestoreClient}function RS(i){var e,t,s;const o=i._freezeSettings(),u=function(m,y,v,w){return new Gw(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Qy(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new yS(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ao(Ct.fromBase64String(e))}catch(t){throw new ae(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ao(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=/^__.*__$/;class PS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new pi(e,this.data,this.fieldMask,t,this.fieldTransforms):new ka(e,this.data,t,this.fieldTransforms)}}class Jy{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new pi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zy(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class $d{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new $d(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ku(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Zy(this.Mu)&&CS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class kS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Hu(e)}$u(e,t,s,o=!1){return new $d({Mu:e,methodName:t,Ku:s,path:Rt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function e_(i){const e=i._freezeSettings(),t=Hu(i._databaseId);return new kS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function NS(i,e,t,s,o,u={}){const h=i.$u(u.merge||u.mergeFields?2:0,e,t,o);qd("Data must be an object, but it was:",h,s);const m=t_(s,h);let y,v;if(u.merge)y=new an(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const C of u.mergeFields){const L=cd(e,C,t);if(!h.contains(L))throw new ae(W.INVALID_ARGUMENT,`Field '${L}' is specified in your field mask but missing from your input data.`);r_(w,L)||w.push(L)}y=new an(w),v=h.fieldTransforms.filter(C=>y.covers(C.field))}else y=null,v=h.fieldTransforms;return new PS(new Yt(m),y,v)}class Yu extends zd{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yu}}function DS(i,e,t,s){const o=i.$u(1,e,t);qd("Data must be an object, but it was:",o,s);const u=[],h=Yt.empty();fi(s,(y,v)=>{const w=Hd(e,y,t);v=Jt(v);const C=o.Bu(w);if(v instanceof Yu)u.push(w);else{const L=Ju(v,C);L!=null&&(u.push(w),h.set(w,L))}});const m=new an(u);return new Jy(h,m,o.fieldTransforms)}function VS(i,e,t,s,o,u){const h=i.$u(1,e,t),m=[cd(e,s,t)],y=[o];if(u.length%2!=0)throw new ae(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let L=0;L<u.length;L+=2)m.push(cd(e,u[L])),y.push(u[L+1]);const v=[],w=Yt.empty();for(let L=m.length-1;L>=0;--L)if(!r_(v,m[L])){const z=m[L];let Q=y[L];Q=Jt(Q);const Y=h.Bu(z);if(Q instanceof Yu)v.push(z);else{const q=Ju(Q,Y);q!=null&&(v.push(z),w.set(z,q))}}const C=new an(v);return new Jy(w,C,h.fieldTransforms)}function Ju(i,e){if(n_(i=Jt(i)))return qd("Unsupported field value:",e,i),t_(i,e);if(i instanceof zd)return function(s,o){if(!Zy(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let y=Ju(m,o.ku(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Jt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return yT(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ot.fromDate(s);return{timestampValue:Au(o.serializer,u)}}if(s instanceof ot){const u=new ot(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Au(o.serializer,u)}}if(s instanceof Bd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ao)return{bytesValue:Ty(o.serializer,s._byteString)};if(s instanceof _n){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Cd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof jd)return function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw m.qu("VectorValues must only contain numeric values.");return Id(m.serializer,y)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${bd(s)}`)}(i,e)}function t_(i,e){const t={};return Yg(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fi(i,(s,o)=>{const u=Ju(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function n_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ot||i instanceof Bd||i instanceof ao||i instanceof _n||i instanceof zd||i instanceof jd)}function qd(i,e,t){if(!n_(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=bd(t);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}function cd(i,e,t){if((e=Jt(e))instanceof Xu)return e._internalPath;if(typeof e=="string")return Hd(i,e);throw ku("Field path arguments must be of type string or ",i,!1,void 0,t)}const OS=new RegExp("[~\\*/\\[\\]]");function Hd(i,e,t){if(e.search(OS)>=0)throw ku(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Xu(...e.split("."))._internalPath}catch{throw ku(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function ku(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ae(W.INVALID_ARGUMENT,m+i+y)}function r_(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(s_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xS extends i_{data(){return super.data()}}function s_(i,e){return typeof e=="string"?Hd(i,e):e instanceof Xu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ae(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class MS{convertValue(e,t="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw fe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return fi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>nt(h.doubleValue));return new jd(u)}convertGeoPoint(e){return new Bd(nt(e.latitude),nt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Uu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(wa(e));default:return null}}convertTimestamp(e){const t=ui(e);return new ot(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Me(Py(s));const o=new Ta(s.get(1),s.get(3)),u=new he(s.popFirst(5));return o.isEqual(t)||Er(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class US extends i_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(s_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class du extends US{data(e={}){return super.data(e)}}class bS{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new iu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new du(this._firestore,this._userDataWriter,s.key,s,new iu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const y=new du(o._firestore,o._userDataWriter,m.doc.key,m.doc,new iu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new du(o._firestore,o._userDataWriter,m.doc.key,m.doc,new iu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:zS(m.type),doc:y,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function zS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}class BS extends MS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ao(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _n(this.firestore,null,t)}}function jS(i){i=Qi(i,Qu);const e=Qi(i.firestore,Oa),t=Yy(e),s=new BS(e);return LS(i._query),wS(t,i._query).then(o=>new bS(e,s,i,o))}function $S(i,e,t,...s){i=Qi(i,_n);const o=Qi(i.firestore,Oa),u=e_(o);let h;return h=typeof(e=Jt(e))=="string"||e instanceof Xu?VS(u,"updateDoc",i._key,e,t,s):DS(u,"updateDoc",i._key,e),Wd(o,[h.toMutation(i._key,xn.exists(!0))])}function qS(i){return Wd(Qi(i.firestore,Oa),[new Sd(i._key,xn.none())])}function HS(i,e){const t=Qi(i.firestore,Oa),s=ud(i),o=FS(i.converter,e);return Wd(t,[NS(e_(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,xn.exists(!1))]).then(()=>s)}function Wd(i,e){return function(s,o){const u=new oi;return s.asyncQueue.enqueueAndForget(async()=>aS(await vS(s),o,u)),u.promise}(Yy(i),e)}(function(e,t=!0){(function(o){co=o})(uo),eo(new Ki("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Oa(new Dw(s.getProvider("auth-internal")),new Lw(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ae(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ta(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),si(Nm,"4.7.5",e),si(Nm,"4.7.5","esm2017")})();var WS="firebase",KS="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */si(WS,KS,"app");function Kd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function o_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GS=o_,a_=new Ca("auth","Firebase",o_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new md("@firebase/auth");function QS(i,...e){Nu.logLevel<=Ae.WARN&&Nu.warn(`Auth (${uo}): ${i}`,...e)}function fu(i,...e){Nu.logLevel<=Ae.ERROR&&Nu.error(`Auth (${uo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(i,...e){throw Gd(i,...e)}function Gn(i,...e){return Gd(i,...e)}function l_(i,e,t){const s=Object.assign(Object.assign({},GS()),{[e]:t});return new Ca("auth","Firebase",s).create(e,{appName:i.name})}function Wi(i){return l_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return a_.create(i,...e)}function pe(i,e,...t){if(!i)throw Gd(e,...t)}function gr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw fu(e),new Error(e)}function Ir(i,e){i||gr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function XS(){return pg()==="http:"||pg()==="https:"}function pg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XS()||uE()||"connection"in navigator)?navigator.onLine:!0}function JS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ir(t>e,"Short delay should be less than long delay!"),this.isMobile=oE()||cE()}get(){return YS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(i,e){Ir(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=new xa(3e4,6e4);function Xd(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function mo(i,e,t,s,o={}){return c_(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Pa(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:y},u);return lE()||(v.referrerPolicy="no-referrer"),u_.fetch()(h_(i,i.config.apiHost,t,m),v)})}async function c_(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},ZS),e);try{const o=new n0(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw su(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw su(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw su(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw su(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw l_(i,w,v);Tr(i,w)}}catch(o){if(o instanceof Sr)throw o;Tr(i,"network-request-failed",{message:String(o)})}}async function t0(i,e,t,s,o={}){const u=await mo(i,e,t,s,o);return"mfaPendingCredential"in u&&Tr(i,"multi-factor-auth-required",{_serverResponse:u}),u}function h_(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?Qd(i.config,o):`${i.config.apiScheme}://${o}`}class n0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Gn(this.auth,"network-request-failed")),e0.get())})}}function su(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Gn(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(i,e){return mo(i,"POST","/v1/accounts:delete",e)}async function d_(i,e){return mo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i0(i,e=!1){const t=Jt(i),s=await t.getIdToken(e),o=Yd(s);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:_a(Bh(o.auth_time)),issuedAtTime:_a(Bh(o.iat)),expirationTime:_a(Bh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Bh(i){return Number(i)*1e3}function Yd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return fu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Og(t);return o?JSON.parse(o):(fu("Failed to decode base64 JWT payload"),null)}catch(o){return fu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function mg(i){const e=Yd(i);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Sr&&s0(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function s0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_a(this.lastLoginAt),this.creationTime=_a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Du(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Ra(i,d_(t,{idToken:s}));pe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?f_(u.providerUserInfo):[],m=l0(i.providerData,h),y=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=y?v:!1,C={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new dd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,C)}async function a0(i){const e=Jt(i);await Du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l0(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function f_(i){return i.map(e=>{var{providerId:t}=e,s=Kd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(i,e){const t=await c_(i,{},async()=>{const s=Pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=h_(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",u_.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function c0(i,e){return mo(i,"POST","/v2/accounts:revokeToken",Xd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=mg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await u0(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Ys;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return gr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(i,e){pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new o0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new dd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ra(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return i0(this,e)}reload(){return a0(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Du(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ti(this.auth.app))return Promise.reject(Wi(this.auth));const e=await this.getIdToken();return await Ra(this,r0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,v,w;const C=(s=t.displayName)!==null&&s!==void 0?s:void 0,L=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,q=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,ve=(v=t.createdAt)!==null&&v!==void 0?v:void 0,_e=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ye,emailVerified:we,isAnonymous:He,providerData:Se,stsTokenManager:N}=t;pe(ye&&N,e,"internal-error");const I=Ys.fromJSON(this.name,N);pe(typeof ye=="string",e,"internal-error"),Xr(C,e.name),Xr(L,e.name),pe(typeof we=="boolean",e,"internal-error"),pe(typeof He=="boolean",e,"internal-error"),Xr(z,e.name),Xr(Q,e.name),Xr(Y,e.name),Xr(q,e.name),Xr(ve,e.name),Xr(_e,e.name);const A=new yr({uid:ye,auth:e,email:L,emailVerified:we,displayName:C,isAnonymous:He,photoURL:Q,phoneNumber:z,tenantId:Y,stsTokenManager:I,createdAt:ve,lastLoginAt:_e});return Se&&Array.isArray(Se)&&(A.providerData=Se.map(P=>Object.assign({},P))),q&&(A._redirectEventId=q),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new Ys;o.updateFromServerResponse(t);const u=new yr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Du(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?f_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Ys;m.updateFromIdToken(s);const y=new yr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new dd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new Map;function _r(i){Ir(i instanceof Function,"Expected a class definition");let e=gg.get(i);return e?(Ir(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,gg.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}p_.type="NONE";const yg=p_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(i,e,t){return`firebase:${i}:${e}:${t}`}class Js{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=pu(this.userKey,o.apiKey,u),this.fullPersistenceKey=pu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Js(_r(yg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||_r(yg);const h=pu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const C=yr._fromJSON(e,w);v!==u&&(m=C),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Js(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new Js(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(__(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E_(e))return"Blackberry";if(w_(e))return"Webos";if(g_(e))return"Safari";if((e.includes("chrome/")||y_(e))&&!e.includes("edge/"))return"Chrome";if(v_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function m_(i=Ft()){return/firefox\//i.test(i)}function g_(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y_(i=Ft()){return/crios\//i.test(i)}function __(i=Ft()){return/iemobile/i.test(i)}function v_(i=Ft()){return/android/i.test(i)}function E_(i=Ft()){return/blackberry/i.test(i)}function w_(i=Ft()){return/webos/i.test(i)}function Jd(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function h0(i=Ft()){var e;return Jd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function d0(){return hE()&&document.documentMode===10}function T_(i=Ft()){return Jd(i)||v_(i)||w_(i)||E_(i)||/windows phone/i.test(i)||__(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(i,e=[]){let t;switch(i){case"Browser":t=_g(Ft());break;case"Worker":t=`${_g(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${uo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(i,e={}){return mo(i,"GET","/v2/passwordPolicy",Xd(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=6;class g0{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:m0,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vg(this),this.idTokenSubscription=new vg(this),this.beforeStateQueue=new f0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_r(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await d_(this,{idToken:e}),s=await yr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ti(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Du(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ti(this.app))return Promise.reject(Wi(this));const t=e?Jt(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ti(this.app)?Promise.reject(Wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ti(this.app)?Promise.reject(Wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await p0(this),t=new g0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ca("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await c0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_r(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[_r(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&QS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zd(i){return Jt(i)}class vg{constructor(e){this.auth=e,this.observer=null,this.addObserver=vE(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _0(i){ef=i}function v0(i){return ef.loadJS(i)}function E0(){return ef.gapiScript}function w0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(i,e){const t=yd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(_u(u,e??{}))return o;Tr(o,"already-initialized")}return t.initialize({options:e})}function I0(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(_r);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function S0(i,e,t){const s=Zd(i);pe(s._canInitEmulator,s,"emulator-config-failed"),pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=S_(e),{host:h,port:m}=A0(e),y=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${y}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),R0()}function S_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function A0(i){const e=S_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Eg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Eg(h)}}}function Eg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function R0(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gr("not implemented")}_getIdTokenResponse(e){return gr("not implemented")}_linkToIdToken(e,t){return gr("not implemented")}_getReauthenticationResolver(e){return gr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(i,e){return t0(i,"POST","/v1/accounts:signInWithIdp",Xd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="http://localhost";class Xi extends A_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Kd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Xi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Zs(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Zs(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zs(e,t)}buildRequest(){const e={requestUri:C0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends R_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends La{constructor(){super("facebook.com")}static credential(e){return Xi._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends La{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xi._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Jr.credential(t,s)}catch{return null}}}Jr.GOOGLE_SIGN_IN_METHOD="google.com";Jr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends La{constructor(){super("github.com")}static credential(e){return Xi._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.GITHUB_SIGN_IN_METHOD="github.com";Zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends La{constructor(){super("twitter.com")}static credential(e,t){return Xi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ei.credential(t,s)}catch{return null}}}ei.TWITTER_SIGN_IN_METHOD="twitter.com";ei.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await yr._fromIdTokenResponse(e,s,o),h=wg(s);return new lo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=wg(s);return new lo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function wg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends Sr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Vu(e,t,s,o)}}function C_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(i,u,e,s):u})}async function P0(i,e,t=!1){const s=await Ra(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return lo._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(i,e,t=!1){const{auth:s}=i;if(ti(s.app))return Promise.reject(Wi(s));const o="reauthenticate";try{const u=await Ra(i,C_(s,o,e,i),t);pe(u.idToken,s,"internal-error");const h=Yd(u.idToken);pe(h,s,"internal-error");const{sub:m}=h;return pe(i.uid===m,s,"user-mismatch"),lo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Tr(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N0(i,e,t=!1){if(ti(i.app))return Promise.reject(Wi(i));const s="signIn",o=await C_(i,s,e),u=await lo._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function D0(i,e,t,s){return Jt(i).onIdTokenChanged(e,t,s)}function V0(i,e,t){return Jt(i).beforeAuthStateChanged(e,t)}const Ou="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ou,"1"),this.storage.removeItem(Ou),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=1e3,x0=10;class k_ extends P_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=T_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);d0()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,x0):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},O0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}k_.type="LOCAL";const L0=k_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_ extends P_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}N_.type="SESSION";const D_=N_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Zu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await M0(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=tf("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(C){const L=C;if(L.data.eventId===v)switch(L.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(L.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return window}function U0(i){Qn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function b0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function z0(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function B0(){return V_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="firebaseLocalStorageDb",j0=1,xu="firebaseLocalStorage",x_="fbase_key";class Ma{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ec(i,e){return i.transaction([xu],e?"readwrite":"readonly").objectStore(xu)}function $0(){const i=indexedDB.deleteDatabase(O_);return new Ma(i).toPromise()}function fd(){const i=indexedDB.open(O_,j0);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(xu,{keyPath:x_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(xu)?e(s):(s.close(),await $0(),e(await fd()))})})}async function Tg(i,e,t){const s=ec(i,!0).put({[x_]:e,value:t});return new Ma(s).toPromise()}async function q0(i,e){const t=ec(i,!1).get(e),s=await new Ma(t).toPromise();return s===void 0?null:s.value}function Ig(i,e){const t=ec(i,!0).delete(e);return new Ma(t).toPromise()}const H0=800,W0=3;class L_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>W0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return V_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zu._getInstance(B0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await b0(),!this.activeServiceWorker)return;this.sender=new F0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||z0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fd();return await Tg(e,Ou,"1"),await Ig(e,Ou),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>q0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ig(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=ec(o,!1).getAll();return new Ma(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),H0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}L_.type="LOCAL";const K0=L_;new xa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(i,e){return e?_r(e):(pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends A_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Q0(i){return N0(i.auth,new nf(i),i.bypassAuthState)}function X0(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),k0(t,new nf(i),i.bypassAuthState)}async function Y0(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),P0(t,new nf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q0;case"linkViaPopup":case"linkViaRedirect":return Y0;case"reauthViaPopup":case"reauthViaRedirect":return X0;default:Tr(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=new xa(2e3,1e4);class Qs extends M_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Qs.currentPopupAction&&Qs.currentPopupAction.cancel(),Qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,J0.get())};e()}}Qs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="pendingRedirect",mu=new Map;class eA extends M_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=mu.get(this.auth._key());if(!e){try{const s=await tA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}mu.set(this.auth._key(),e)}return this.bypassAuthState||mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tA(i,e){const t=iA(e),s=rA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function nA(i,e){mu.set(i._key(),e)}function rA(i){return _r(i._redirectPersistence)}function iA(i){return pu(Z0,i.config.apiKey,i.name)}async function sA(i,e,t=!1){if(ti(i.app))return Promise.reject(Wi(i));const s=Zd(i),o=G0(s,e),h=await new eA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=10*60*1e3;class aA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!F_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Gn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sg(e))}saveEventToCache(e){this.cachedEventUids.add(Sg(e)),this.lastProcessedEventTime=Date.now()}}function Sg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function F_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lA(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(i,e={}){return mo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hA=/^https?/;async function dA(i){if(i.config.emulator)return;const{authorizedDomains:e}=await uA(i);for(const t of e)try{if(fA(t))return}catch{}Tr(i,"unauthorized-domain")}function fA(i){const e=hd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!hA.test(t))return!1;if(cA.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=new xa(3e4,6e4);function Ag(){const i=Qn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function mA(i){return new Promise((e,t)=>{var s,o,u;function h(){Ag(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ag(),t(Gn(i,"network-request-failed"))},timeout:pA.get()})}if(!((o=(s=Qn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Qn().gapi)===null||u===void 0)&&u.load)h();else{const m=w0("iframefcb");return Qn()[m]=()=>{gapi.load?h():t(Gn(i,"network-request-failed"))},v0(`${E0()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw gu=null,e})}let gu=null;function gA(i){return gu=gu||mA(i),gu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=new xa(5e3,15e3),_A="__/auth/iframe",vA="emulator/auth/iframe",EA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TA(i){const e=i.config;pe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Qd(e,vA):`https://${i.config.authDomain}/${_A}`,s={apiKey:e.apiKey,appName:i.name,v:uo},o=wA.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Pa(s).slice(1)}`}async function IA(i){const e=await gA(i),t=Qn().gapi;return pe(t,i,"internal-error"),e.open({where:document.body,url:TA(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EA,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Gn(i,"network-request-failed"),m=Qn().setTimeout(()=>{u(h)},yA.get());function y(){Qn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AA=500,RA=600,CA="_blank",PA="http://localhost";class Rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kA(i,e,t,s=AA,o=RA){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},SA),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=y_(v)?CA:t),m_(v)&&(e=e||PA,y.scrollbars="yes");const w=Object.entries(y).reduce((L,[z,Q])=>`${L}${z}=${Q},`,"");if(h0(v)&&m!=="_self")return NA(e||"",m),new Rg(null);const C=window.open(e||"",m,w);pe(C,i,"popup-blocked");try{C.focus()}catch{}return new Rg(C)}function NA(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="__/auth/handler",VA="emulator/auth/handler",OA=encodeURIComponent("fac");async function Cg(i,e,t,s,o,u){pe(i.config.authDomain,i,"auth-domain-config-required"),pe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:uo,eventId:o};if(e instanceof R_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",_E(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,C]of Object.entries({}))h[w]=C}if(e instanceof La){const w=e.getScopes().filter(C=>C!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${OA}=${encodeURIComponent(y)}`:"";return`${xA(i)}?${Pa(m).slice(1)}${v}`}function xA({config:i}){return i.emulator?Qd(i,VA):`https://${i.authDomain}/${DA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="webStorageSupport";class LA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D_,this._completeRedirectFn=sA,this._overrideRedirectResult=nA}async _openPopup(e,t,s,o){var u;Ir((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Cg(e,t,s,hd(),o);return kA(e,h,tf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Cg(e,t,s,hd(),o);return U0(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ir(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await IA(e),s=new aA(e);return t.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(jh,{type:jh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[jh];h!==void 0&&t(!!h),Tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return T_()||g_()||Jd()}}const MA=LA;var Pg="@firebase/auth",kg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bA(i){eo(new Ki("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I_(i)},v=new y0(s,o,u,y);return I0(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),eo(new Ki("auth-internal",e=>{const t=Zd(e.getProvider("auth").getImmediate());return(s=>new FA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),si(Pg,kg,UA(i)),si(Pg,kg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=5*60,BA=Mg("authIdTokenMaxAge")||zA;let Ng=null;const jA=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>BA)return;const o=t==null?void 0:t.token;Ng!==o&&(Ng=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $A(i=zg()){const e=yd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=T0(i,{popupRedirectResolver:MA,persistence:[K0,L0,D_]}),s=Mg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=jA(u.toString());V0(t,h,()=>h(t.currentUser)),D0(t,m=>h(m))}}const o=xg("auth");return o&&S0(t,`http://${o}`),t}function qA(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}_0({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Gn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",qA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bA("Browser");const HA={apiKey:void 0,authDomain:"kmu-staff-firebase.firebaseapp.com",projectId:"kmu-staff-firebase",storageBucket:"kmu-staff-firebase.firebasestorage.app",messagingSenderId:"736263282586",appId:"1:736263282586:web:48ebf315df5a45b74e2423"},U_=bg(HA),$h=AS(U_);$A(U_);const WA=()=>{const[i,e]=ou.useState([]),[t,s]=ou.useState({title:"",content:"",input_user:""}),o=SS($h,"posts"),u=async()=>{const w=(await jS(o)).docs.map(C=>{const L=C.data();return{id:C.id,title:L.title,content:L.content,input_timestamp:L.input_timestamp.toDate().toLocaleString(),input_user:L.input_user}});e(w)},h=async()=>{!t.title||!t.content||!t.input_user||(await HS(o,{title:t.title,content:t.content,input_timestamp:ot.now(),input_user:t.input_user}),s({title:"",content:"",input_user:""}),u())},m=async(v,w)=>{const C=ud($h,"posts",v);await $S(C,{content:w}),u()},y=async v=>{const w=ud($h,"posts",v);await qS(w),u()};return ou.useEffect(()=>{u()},[]),St.jsxs("div",{children:[St.jsx("ul",{children:i.map(v=>St.jsxs("li",{children:[St.jsx("h2",{children:v.title}),St.jsx("textarea",{value:v.content,onChange:w=>m(v.id,w.target.value)}),St.jsxs("p",{children:["Created By: ",v.input_user]}),St.jsxs("p",{children:["Created At: ",v.input_timestamp]}),St.jsx("button",{onClick:()=>y(v.id),children:"Delete"})]},v.id))}),St.jsxs("div",{children:[St.jsx("input",{type:"text",placeholder:"Title",value:t.title,onChange:v=>s({...t,title:v.target.value})}),St.jsx("textarea",{placeholder:"Content",value:t.content,onChange:v=>s({...t,content:v.target.value})}),St.jsx("input",{type:"text",placeholder:"User",value:t.input_user,onChange:v=>s({...t,input_user:v.target.value})}),St.jsx("button",{onClick:h,children:"Add Post"})]})]})};function KA(){return St.jsx("div",{children:St.jsx(WA,{})})}Qv.createRoot(document.getElementById("root")).render(St.jsx(ou.StrictMode,{children:St.jsx(KA,{})}));
