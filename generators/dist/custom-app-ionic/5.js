(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../../node_modules/@ionic/core/dist/esm/es5/build/chunk-47b88144.js":
/*!****************************************************************************************************************************!*\
  !*** /home/travis/build/rucken/cli/test/fixtures/generators/node_modules/@ionic/core/dist/esm/es5/build/chunk-47b88144.js ***!
  \****************************************************************************************************************************/
/*! exports provided: startInputShims */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startInputShims", function() { return startInputShims; });
/* harmony import */ var _chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-6d7d2f8c.js */ "../../node_modules/@ionic/core/dist/esm/es5/build/chunk-6d7d2f8c.js");
var cloneMap=new WeakMap;function relocateInput(e,t,n,o){void 0===o&&(o=0),cloneMap.has(e)!==n&&(n?addClone(e,t,o):removeClone(e,t))}function isFocused(e){return e===e.getRootNode().activeElement}function addClone(e,t,n){var o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),cloneMap.set(e,r);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d("+a+"px,"+n+"px,0) scale(0)"}function removeClone(e,t){var n=cloneMap.get(e);n&&(cloneMap.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""}function enableHideCaretOnScroll(e,t,n){if(!n||!t)return function(){};var o=function(n){isFocused(t)&&relocateInput(e,t,n)},r=function(){return relocateInput(e,t,!1)},a=function(){return o(!0)},i=function(){return o(!1)};return n.addEventListener("ionScrollStart",a),n.addEventListener("ionScrollEnd",i),t.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",a),n.removeEventListener("ionScrollEnd",i),t.addEventListener("ionBlur",r)}}var SKIP_SELECTOR="input, textarea, [no-blur]";function enableInputBlurring(e){var t=!0,n=!1;function o(){n=!0}function r(){t=!0}function a(o){if(n)n=!1;else{var r=e.activeElement;if(r&&!r.matches(SKIP_SELECTOR)){var a=o.target;a!==r&&(a.matches(SKIP_SELECTOR)||a.closest(SKIP_SELECTOR)||(t=!1,setTimeout(function(){t||r.blur()},50)))}}}return e.addEventListener("ionScrollStart",o),e.addEventListener("focusin",r,!0),e.addEventListener("touchend",a,!1),function(){e.removeEventListener("ionScrollStart",o,!0),e.removeEventListener("focusin",r,!0),e.removeEventListener("touchend",a,!1)}}var SCROLL_ASSIST_SPEED=.3;function getScrollData(e,t,n){return calcScrollData((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)}function calcScrollData(e,t,n,o){var r=e.top,a=e.bottom,i=t.top+15,l=.5*Math.min(t.bottom,o-n)-a,c=i-r,u=Math.round(l<0?-l:c>0?-c:0),s=Math.abs(u);return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,s/SCROLL_ASSIST_SPEED)),scrollPadding:n,inputSafeY:4-(r-i)}}function enableScrollAssist(e,t,n,o){var r,a=function(e){r=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["k"])(e)},i=function(a){if(r){var i=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["k"])(a);hasPointerMoved(6,r,i)||isFocused(t)||(a.preventDefault(),a.stopPropagation(),jsSetFocus(e,t,n,o))}};return e.addEventListener("touchstart",a,!0),e.addEventListener("touchend",i,!0),function(){e.removeEventListener("touchstart",a,!0),e.removeEventListener("touchend",i,!0)}}function jsSetFocus(e,t,n,o){var r=getScrollData(e,n,o);Math.abs(r.scrollAmount)<4?t.focus():(relocateInput(e,t,!0,r.inputSafeY),t.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then(function(){relocateInput(e,t,!1,r.inputSafeY),t.focus()}))}function hasPointerMoved(e,t,n){if(t&&n){var o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1}var PADDING_TIMER_KEY="$ionPaddingTimer";function enableScrollPadding(e,t){function n(e){setScrollPadding(e.target,t)}function o(e){setScrollPadding(e.target,0)}return e.addEventListener("focusin",n),e.addEventListener("focusout",o),function(){e.removeEventListener("focusin",n),e.removeEventListener("focusout",o)}}function setScrollPadding(e,t){if("INPUT"===e.tagName&&(!e.parentElement||"ION-INPUT"!==e.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var o=n[PADDING_TIMER_KEY];o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n[PADDING_TIMER_KEY]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}}var INPUT_BLURRING=!0,SCROLL_PADDING=!0;function startInputShims(e,t){var n=t.getNumber("keyboardHeight",290),o=t.getBoolean("scrollAssist",!0),r=t.getBoolean("hideCaretOnScroll",!0),a=t.getBoolean("inputBlurring",!0),i=t.getBoolean("scrollPadding",!0),l=new WeakMap,c=new WeakMap;function u(e){var t=(e.shadowRoot||e).querySelector("input"),a=e.closest("ion-content");if(t){if(a&&r&&!l.has(e)){var i=enableHideCaretOnScroll(e,t,a);l.set(e,i)}a&&o&&!c.has(e)&&(i=enableScrollAssist(e,t,a,n),c.set(e,i))}}a&&INPUT_BLURRING&&enableInputBlurring(e),i&&SCROLL_PADDING&&enableScrollPadding(e,n);for(var s=0,d=Array.from(e.querySelectorAll("ion-input"));s<d.length;s++)u(d[s]);e.body.addEventListener("ionInputDidLoad",function(e){u(e.target)}),e.body.addEventListener("ionInputDidUnload",function(e){var t,n;t=e.target,r&&((n=l.get(t))&&n(),l.delete(t)),o&&((n=c.get(t))&&n(),c.delete(t))})}

/***/ })

}]);
//# sourceMappingURL=5.js.map