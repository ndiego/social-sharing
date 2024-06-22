/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/external.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/external.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const external = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (external);
//# sourceMappingURL=external.js.map

/***/ }),

/***/ "./src/social-sharing-link/edit.js":
/*!*****************************************!*\
  !*** ./src/social-sharing-link/edit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/social-sharing-link/editor.scss");
/* harmony import */ var _social_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./social-services */ "./src/social-sharing-link/social-services.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Import editor-only block styles.
 */


/**
 * Internal dependencies
 */

const SocialSharingLinkEdit = ({
  attributes,
  context,
  setAttributes
}) => {
  const {
    service,
    label
  } = attributes;
  const {
    showLabels,
    iconColor,
    iconColorValue,
    iconBackgroundColor,
    iconBackgroundColorValue
  } = context;
  const activeVariation = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    return select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.store).getActiveBlockVariation('outermost/social-sharing-link', attributes);
  }, [attributes]);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('outermost-social-sharing-link', 'outermost-social-sharing-link-' + service, {
    [`has-${iconColor}-color`]: iconColor,
    [`has-${iconBackgroundColor}-background-color`]: iconBackgroundColor
  });
  const {
    icon,
    label: socialLinkLabel
  } = (0,_social_services__WEBPACK_IMPORTED_MODULE_8__.getSocialService)(service, activeVariation);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: classes,
    style: {
      color: iconColorValue,
      backgroundColor: iconBackgroundColorValue
    }
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Settings', 'social-sharing-block'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Share label', 'social-sharing-block'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Briefly describe the share link to help screen reader users.', 'social-sharing-block'),
    value: label,
    onChange: value => setAttributes({
      label: value
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "wp-block-outermost-social-sharing-link-anchor"
  }, icon, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-outermost-social-sharing-link-label', {
      'screen-reader-text': !showLabels
    })
  }, label || socialLinkLabel))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialSharingLinkEdit);

/***/ }),

/***/ "./src/social-sharing-link/icons/facebook.js":
/*!***************************************************!*\
  !*** ./src/social-sharing-link/icons/facebook.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   facebook: () => (/* binding */ facebook)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const facebook = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/flipboard.js":
/*!****************************************************!*\
  !*** ./src/social-sharing-link/icons/flipboard.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   flipboard: () => (/* binding */ flipboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const flipboard = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Polygon, {
  points: "9.333 20 4 20 4 4 20 4 20 9.333 14.667 9.333 14.667 14.667 9.333 14.667"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/index.js":
/*!************************************************!*\
  !*** ./src/social-sharing-link/icons/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   facebook: () => (/* reexport safe */ _facebook__WEBPACK_IMPORTED_MODULE_0__.facebook),
/* harmony export */   flipboard: () => (/* reexport safe */ _flipboard__WEBPACK_IMPORTED_MODULE_1__.flipboard),
/* harmony export */   line: () => (/* reexport safe */ _line__WEBPACK_IMPORTED_MODULE_2__.line),
/* harmony export */   linkedin: () => (/* reexport safe */ _linkedin__WEBPACK_IMPORTED_MODULE_3__.linkedin),
/* harmony export */   mail: () => (/* reexport safe */ _mail__WEBPACK_IMPORTED_MODULE_4__.mail),
/* harmony export */   pinterest: () => (/* reexport safe */ _pinterest__WEBPACK_IMPORTED_MODULE_5__.pinterest),
/* harmony export */   pocket: () => (/* reexport safe */ _pocket__WEBPACK_IMPORTED_MODULE_6__.pocket),
/* harmony export */   print: () => (/* reexport safe */ _print__WEBPACK_IMPORTED_MODULE_7__.print),
/* harmony export */   reddit: () => (/* reexport safe */ _reddit__WEBPACK_IMPORTED_MODULE_8__.reddit),
/* harmony export */   skype: () => (/* reexport safe */ _skype__WEBPACK_IMPORTED_MODULE_9__.skype),
/* harmony export */   sms: () => (/* reexport safe */ _sms__WEBPACK_IMPORTED_MODULE_10__.sms),
/* harmony export */   telegram: () => (/* reexport safe */ _telegram__WEBPACK_IMPORTED_MODULE_11__.telegram),
/* harmony export */   threads: () => (/* reexport safe */ _threads__WEBPACK_IMPORTED_MODULE_12__.threads),
/* harmony export */   tumblr: () => (/* reexport safe */ _tumblr__WEBPACK_IMPORTED_MODULE_13__.tumblr),
/* harmony export */   viber: () => (/* reexport safe */ _viber__WEBPACK_IMPORTED_MODULE_14__.viber),
/* harmony export */   webshare: () => (/* reexport safe */ _webshare__WEBPACK_IMPORTED_MODULE_17__.webshare),
/* harmony export */   whatsapp: () => (/* reexport safe */ _whatsapp__WEBPACK_IMPORTED_MODULE_15__.whatsapp),
/* harmony export */   x: () => (/* reexport safe */ _x__WEBPACK_IMPORTED_MODULE_16__.x)
/* harmony export */ });
/* harmony import */ var _facebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facebook */ "./src/social-sharing-link/icons/facebook.js");
/* harmony import */ var _flipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flipboard */ "./src/social-sharing-link/icons/flipboard.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line */ "./src/social-sharing-link/icons/line.js");
/* harmony import */ var _linkedin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkedin */ "./src/social-sharing-link/icons/linkedin.js");
/* harmony import */ var _mail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail */ "./src/social-sharing-link/icons/mail.js");
/* harmony import */ var _pinterest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pinterest */ "./src/social-sharing-link/icons/pinterest.js");
/* harmony import */ var _pocket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pocket */ "./src/social-sharing-link/icons/pocket.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print */ "./src/social-sharing-link/icons/print.js");
/* harmony import */ var _reddit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reddit */ "./src/social-sharing-link/icons/reddit.js");
/* harmony import */ var _skype__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skype */ "./src/social-sharing-link/icons/skype.js");
/* harmony import */ var _sms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sms */ "./src/social-sharing-link/icons/sms.js");
/* harmony import */ var _telegram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./telegram */ "./src/social-sharing-link/icons/telegram.js");
/* harmony import */ var _threads__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./threads */ "./src/social-sharing-link/icons/threads.js");
/* harmony import */ var _tumblr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tumblr */ "./src/social-sharing-link/icons/tumblr.js");
/* harmony import */ var _viber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./viber */ "./src/social-sharing-link/icons/viber.js");
/* harmony import */ var _whatsapp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./whatsapp */ "./src/social-sharing-link/icons/whatsapp.js");
/* harmony import */ var _x__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./x */ "./src/social-sharing-link/icons/x.js");
/* harmony import */ var _webshare__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./webshare */ "./src/social-sharing-link/icons/webshare.js");



















/***/ }),

/***/ "./src/social-sharing-link/icons/line.js":
/*!***********************************************!*\
  !*** ./src/social-sharing-link/icons/line.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   line: () => (/* binding */ line)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const line = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4.7619 2.5C3.5133 2.5 2.5 3.5133 2.5 4.7619v14.4762C2.5 20.4867 3.5133 21.5 4.7619 21.5h14.4762c1.2486 0 2.2619-1.0133 2.2619-2.2619V4.7619C21.5 3.5133 20.4867 2.5 19.2381 2.5H4.7619ZM12 5.6667c3.7412 0 6.7857 2.4244 6.7857 5.4056 0 1.1897-.4708 2.2671-1.457 3.3257-.7102.8052-1.8632 1.6916-2.9263 2.4245-1.0631.7238-2.0405 1.2935-2.4024 1.4428-.1448.0588-.2533.0857-.3393.0857-.2986 0-.2718-.3159-.2491-.447.018-.0996.0998-.5709.0998-.5709.0226-.1673.0449-.4334-.023-.6008-.0769-.1854-.38-.2808-.6017-.326-3.2571-.4252-5.6724-2.665-5.6724-5.334 0-2.9812 3.0445-5.4056 6.7857-5.4056Zm-.456 3.6181c-.2278.0043-.4488.1782-.4488.4533v2.7143c0 .2497.2027.4524.4524.4524A.4525.4525 0 0 0 12 12.4524V11.15l.9887 1.5648c.256.3583.8208.1777.8208-.2624V9.738a.4525.4525 0 0 0-.4524-.4524.4525.4525 0 0 0-.4523.4524v1.3571l-.9887-1.6195c-.096-.1344-.2353-.1934-.372-.1909Zm-4.0678.001a.4525.4525 0 0 0-.4524.4523v2.7143c0 .2497.2027.4524.4524.4524h1.3571a.4525.4525 0 0 0 .4524-.4524A.4525.4525 0 0 0 8.8333 12h-.9047V9.7381a.4525.4525 0 0 0-.4524-.4524Zm2.7143 0a.4525.4525 0 0 0-.4524.4523v2.7143c0 .2497.2027.4524.4524.4524a.4525.4525 0 0 0 .4524-.4524V9.738a.4525.4525 0 0 0-.4524-.4524Zm4.5238 0a.4525.4525 0 0 0-.4524.4523v2.7143c0 .2497.2027.4524.4524.4524h1.3571a.4525.4525 0 0 0 .4524-.4524.4525.4525 0 0 0-.4524-.4524h-.9047v-.4524h.9047a.4523.4523 0 0 0 .4524-.4524.4523.4523 0 0 0-.4524-.4523h-.9047v-.4524h.9047a.4525.4525 0 0 0 .4524-.4524.4525.4525 0 0 0-.4524-.4524h-1.3571Z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/linkedin.js":
/*!***************************************************!*\
  !*** ./src/social-sharing-link/icons/linkedin.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkedin: () => (/* binding */ linkedin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const linkedin = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/mail.js":
/*!***********************************************!*\
  !*** ./src/social-sharing-link/icons/mail.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mail: () => (/* binding */ mail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const mail = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/pinterest.js":
/*!****************************************************!*\
  !*** ./src/social-sharing-link/icons/pinterest.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pinterest: () => (/* binding */ pinterest)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const pinterest = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.289,2C6.617,2,3.606,5.648,3.606,9.622c0,1.846,1.025,4.146,2.666,4.878c0.25,0.111,0.381,0.063,0.439-0.169 c0.044-0.175,0.267-1.029,0.365-1.428c0.032-0.128,0.017-0.237-0.091-0.362C6.445,11.911,6.01,10.75,6.01,9.668 c0-2.777,2.194-5.464,5.933-5.464c3.23,0,5.49,2.108,5.49,5.122c0,3.407-1.794,5.768-4.13,5.768c-1.291,0-2.257-1.021-1.948-2.277 c0.372-1.495,1.089-3.112,1.089-4.191c0-0.967-0.542-1.775-1.663-1.775c-1.319,0-2.379,1.309-2.379,3.059 c0,1.115,0.394,1.869,0.394,1.869s-1.302,5.279-1.54,6.261c-0.405,1.666,0.053,4.368,0.094,4.604 c0.021,0.126,0.167,0.169,0.25,0.063c0.129-0.165,1.699-2.419,2.142-4.051c0.158-0.59,0.817-2.995,0.817-2.995 c0.43,0.784,1.681,1.446,3.013,1.446c3.963,0,6.822-3.494,6.822-7.833C20.394,5.112,16.849,2,12.289,2"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/pocket.js":
/*!*************************************************!*\
  !*** ./src/social-sharing-link/icons/pocket.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pocket: () => (/* binding */ pocket)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const pocket = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M21.927,4.194C21.667,3.48,20.982,3,20.222,3h-0.01h-1.721H3.839C3.092,3,2.411,3.47,2.145,4.17 C2.066,4.378,2.026,4.594,2.026,4.814v6.035l0.069,1.2c0.29,2.73,1.707,5.115,3.899,6.778c0.039,0.03,0.079,0.059,0.119,0.089 l0.025,0.018c1.175,0.859,2.491,1.441,3.91,1.727c0.655,0.132,1.325,0.2,1.991,0.2c0.615,0,1.232-0.057,1.839-0.17 c0.073-0.014,0.145-0.028,0.219-0.044c0.02-0.004,0.042-0.012,0.064-0.023c1.359-0.297,2.621-0.864,3.753-1.691l0.025-0.018 c0.04-0.029,0.08-0.058,0.119-0.089c2.192-1.664,3.609-4.049,3.898-6.778l0.069-1.2V4.814C22.026,4.605,22,4.398,21.927,4.194z M17.692,10.481l-4.704,4.512c-0.266,0.254-0.608,0.382-0.949,0.382c-0.342,0-0.684-0.128-0.949-0.382l-4.705-4.512 C5.838,9.957,5.82,9.089,6.344,8.542c0.524-0.547,1.392-0.565,1.939-0.04l3.756,3.601l3.755-3.601 c0.547-0.524,1.415-0.506,1.939,0.04C18.256,9.089,18.238,9.956,17.692,10.481z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/print.js":
/*!************************************************!*\
  !*** ./src/social-sharing-link/icons/print.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   print: () => (/* binding */ print)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const print = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m14.639 3 4.222 4.235v3.177h.528c1.113 0 2.025.864 2.105 1.96l.006.157v5.295h-2.639v2.117c0 .585-.472 1.059-1.055 1.059H6.194a1.057 1.057 0 0 1-1.055-1.059v-2.117H2.5v-5.295c0-1.17.945-2.117 2.111-2.117h.528V4.059C5.139 3.474 5.61 3 6.194 3h8.445Zm2.639 13.235H6.722v3.177h10.556v-3.177Zm2.11-4.5a.793.793 0 0 0-.79.794.793.793 0 1 0 .79-.794Zm-5.277-7.147H6.722v6.883h10.556V7.765h-2.111a1.057 1.057 0 0 1-1.056-1.06V4.589Z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/reddit.js":
/*!*************************************************!*\
  !*** ./src/social-sharing-link/icons/reddit.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reddit: () => (/* binding */ reddit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const reddit = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M22 12.068a2.184 2.184 0 0 0-2.186-2.186c-.592 0-1.13.233-1.524.609-1.505-1.075-3.566-1.774-5.86-1.864l1.004-4.695 3.261.699A1.56 1.56 0 1 0 18.255 3c-.61-.001-1.147.357-1.398.877l-3.638-.77a.382.382 0 0 0-.287.053.348.348 0 0 0-.161.251l-1.112 5.233c-2.33.072-4.426.77-5.95 1.864a2.201 2.201 0 0 0-1.523-.61 2.184 2.184 0 0 0-.896 4.176c-.036.215-.053.43-.053.663 0 3.37 3.924 6.111 8.763 6.111s8.763-2.724 8.763-6.11c0-.216-.017-.449-.053-.664A2.207 2.207 0 0 0 22 12.068Zm-15.018 1.56a1.56 1.56 0 0 1 3.118 0c0 .86-.699 1.558-1.559 1.558-.86.018-1.559-.699-1.559-1.559Zm8.728 4.139c-1.076 1.075-3.119 1.147-3.71 1.147-.61 0-2.652-.09-3.71-1.147a.4.4 0 0 1 0-.573.4.4 0 0 1 .574 0c.68.68 2.114.914 3.136.914 1.022 0 2.473-.233 3.136-.914a.4.4 0 0 1 .574 0 .436.436 0 0 1 0 .573Zm-.287-2.563a1.56 1.56 0 0 1 0-3.118c.86 0 1.56.699 1.56 1.56 0 .841-.7 1.558-1.56 1.558Z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/skype.js":
/*!************************************************!*\
  !*** ./src/social-sharing-link/icons/skype.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skype: () => (/* binding */ skype)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const skype = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.113,2.699c0.033-0.006,0.067-0.013,0.1-0.02c0.033,0.017,0.066,0.033,0.098,0.051L10.113,2.699z M2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223z M21.275,13.771 c0.007-0.035,0.011-0.071,0.018-0.106c-0.018-0.031-0.033-0.064-0.052-0.095L21.275,13.771z M13.563,21.199 c0.032,0.019,0.065,0.035,0.096,0.053c0.036-0.006,0.071-0.011,0.105-0.017L13.563,21.199z M22,16.386 c0,1.494-0.581,2.898-1.637,3.953c-1.056,1.057-2.459,1.637-3.953,1.637c-0.967,0-1.914-0.251-2.75-0.725 c0.036-0.006,0.071-0.011,0.105-0.017l-0.202-0.035c0.032,0.019,0.065,0.035,0.096,0.053c-0.543,0.096-1.099,0.147-1.654,0.147 c-1.275,0-2.512-0.25-3.676-0.743c-1.125-0.474-2.135-1.156-3.002-2.023c-0.867-0.867-1.548-1.877-2.023-3.002 c-0.493-1.164-0.743-2.401-0.743-3.676c0-0.546,0.049-1.093,0.142-1.628c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103C2.244,9.5,2,8.566,2,7.615c0-1.493,0.582-2.898,1.637-3.953 c1.056-1.056,2.46-1.638,3.953-1.638c0.915,0,1.818,0.228,2.622,0.655c-0.033,0.007-0.067,0.013-0.1,0.02l0.199,0.031 c-0.032-0.018-0.066-0.034-0.098-0.051c0.002,0,0.003-0.001,0.004-0.001c0.586-0.112,1.187-0.169,1.788-0.169 c1.275,0,2.512,0.249,3.676,0.742c1.124,0.476,2.135,1.156,3.002,2.024c0.868,0.867,1.548,1.877,2.024,3.002 c0.493,1.164,0.743,2.401,0.743,3.676c0,0.575-0.054,1.15-0.157,1.712c-0.018-0.031-0.033-0.064-0.052-0.095l0.034,0.201 c0.007-0.035,0.011-0.071,0.018-0.106C21.754,14.494,22,15.432,22,16.386z M16.817,14.138c0-1.331-0.613-2.743-3.033-3.282 l-2.209-0.49c-0.84-0.192-1.807-0.444-1.807-1.237c0-0.794,0.679-1.348,1.903-1.348c2.468,0,2.243,1.696,3.468,1.696 c0.645,0,1.209-0.379,1.209-1.031c0-1.521-2.435-2.663-4.5-2.663c-2.242,0-4.63,0.952-4.63,3.488c0,1.221,0.436,2.521,2.839,3.123 l2.984,0.745c0.903,0.223,1.129,0.731,1.129,1.189c0,0.762-0.758,1.507-2.129,1.507c-2.679,0-2.307-2.062-3.743-2.062 c-0.645,0-1.113,0.444-1.113,1.078c0,1.236,1.501,2.886,4.856,2.886C15.236,17.737,16.817,16.199,16.817,14.138z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/sms.js":
/*!**********************************************!*\
  !*** ./src/social-sharing-link/icons/sms.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sms: () => (/* binding */ sms)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const sms = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.696 4C20.069 4 22 5.973 22 8.398v4.357c0 2.04-1.368 3.783-3.261 4.266v4.427l-5.234-4.295h-7.2C3.93 17.153 2 15.18 2 12.755V8.398C2 5.973 3.931 4 6.304 4h11.392ZM7.028 8.515c-.98 0-1.66.562-1.66 1.349-.009.497.322.91.985 1.178l.39.142c.242.097.305.171.305.297 0 .162-.131.251-.442.251s-.76-.135-1.004-.284l-.112.046-.215.868c.359.258.832.364 1.33.364 1.104 0 1.764-.523 1.764-1.333-.008-.574-.305-.956-.954-1.216l-.393-.146c-.266-.108-.341-.181-.341-.287 0-.152.131-.243.387-.243.274 0 .587.093.808.214l.109-.047.214-.837c-.315-.224-.741-.316-1.171-.316Zm10.302 0c-.98 0-1.66.562-1.66 1.349-.008.497.322.91.985 1.178l.39.142c.243.097.305.171.305.297 0 .162-.13.251-.442.251-.311 0-.76-.135-1.004-.284l-.112.046-.215.868c.359.258.832.364 1.33.364 1.104 0 1.764-.523 1.764-1.333-.008-.574-.305-.956-.954-1.216l-.393-.146c-.266-.108-.341-.181-.341-.287 0-.152.131-.243.387-.243.274 0 .587.093.808.214l.109-.047.214-.837c-.316-.224-.741-.316-1.171-.316Zm-3.733 0c-.297 0-.55.066-.78.202l-.144.098a1.823 1.823 0 0 0-.264.247l-.078.095-.027-.077c-.15-.34-.55-.565-1.033-.565l-.169.007a1.363 1.363 0 0 0-.896.42l-.08.09-.038-.363-.075-.067H8.994l-.075.079.024.634c.005.2.008.397.008.604v2.652l.075.075h1.178l.075-.075v-2.269c0-.113.012-.202.042-.274.083-.23.262-.392.496-.392.314 0 .483.267.483.753v2.182l.075.075h1.179l.075-.075v-2.277c0-.097.016-.213.043-.285.077-.224.26-.373.486-.373.33 0 .5.272.5.817v2.118l.074.075h1.179l.075-.075v-2.293c0-1.131-.537-1.763-1.39-1.763Z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/telegram.js":
/*!***************************************************!*\
  !*** ./src/social-sharing-link/icons/telegram.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   telegram: () => (/* binding */ telegram)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const telegram = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 128 128",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M28.97 63.324c18.657-8.128 31.098-13.487 37.323-16.076 17.774-7.393 21.467-8.677 23.874-8.72.53-.009 1.713.122 2.48.745.648.525.826 1.235.911 1.733.085.498.191 1.633.107 2.52-.963 10.12-5.13 34.677-7.25 46.012-.898 4.796-2.664 6.404-4.375 6.561-3.716.342-6.538-2.456-10.138-4.815-5.633-3.693-8.815-5.991-14.283-9.594-6.319-4.164-2.222-6.453 1.379-10.193.942-.98 17.318-15.874 17.634-17.225.04-.169.077-.799-.297-1.131-.375-.333-.927-.22-1.325-.129-.565.128-9.564 6.076-26.996 17.843-2.554 1.754-4.868 2.609-6.94 2.564-2.286-.05-6.681-1.292-9.95-2.354-4.007-1.303-7.193-1.992-6.915-4.205.144-1.152 1.731-2.33 4.761-3.536Z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/threads.js":
/*!**************************************************!*\
  !*** ./src/social-sharing-link/icons/threads.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   threads: () => (/* binding */ threads)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const threads = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.3 11.3c-.1 0-.2-.1-.2-.1-.1-2.6-1.5-4-3.9-4-1.4 0-2.6.6-3.3 1.7l1.3.9c.5-.8 1.4-1 2-1 .8 0 1.4.2 1.7.7.3.3.5.8.5 1.3-.7-.1-1.4-.2-2.2-.1-2.2.1-3.7 1.4-3.6 3.2 0 .9.5 1.7 1.3 2.2.7.4 1.5.6 2.4.6 1.2-.1 2.1-.5 2.7-1.3.5-.6.8-1.4.9-2.4.6.3 1 .8 1.2 1.3.4.9.4 2.4-.8 3.6-1.1 1.1-2.3 1.5-4.3 1.5-2.1 0-3.8-.7-4.8-2S5.7 14.3 5.7 12c0-2.3.5-4.1 1.5-5.4 1.1-1.3 2.7-2 4.8-2 2.2 0 3.8.7 4.9 2 .5.7.9 1.5 1.2 2.5l1.5-.4c-.3-1.2-.8-2.2-1.5-3.1-1.3-1.7-3.3-2.6-6-2.6-2.6 0-4.7.9-6 2.6C4.9 7.2 4.3 9.3 4.3 12s.6 4.8 1.9 6.4c1.4 1.7 3.4 2.6 6 2.6 2.3 0 4-.6 5.3-2 1.8-1.8 1.7-4 1.1-5.4-.4-.9-1.2-1.7-2.3-2.3zm-4 3.8c-1 .1-2-.4-2-1.3 0-.7.5-1.5 2.1-1.6h.5c.6 0 1.1.1 1.6.2-.2 2.3-1.3 2.7-2.2 2.7z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/tumblr.js":
/*!*************************************************!*\
  !*** ./src/social-sharing-link/icons/tumblr.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tumblr: () => (/* binding */ tumblr)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const tumblr = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.04 21.28h-3.28c-2.84 0-4.94-1.37-4.94-5.02v-5.67H6.08V7.5c2.93-.73 4.11-3.3 4.3-5.48h3.01v4.93h3.47v3.65H13.4v4.93c0 1.47.73 2.01 1.92 2.01h1.73v3.75z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/viber.js":
/*!************************************************!*\
  !*** ./src/social-sharing-link/icons/viber.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viber: () => (/* binding */ viber)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const viber = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.71203.0005c.38638.0028.61172.01625.61172.01625 5.38513.0315 7.77852 1.79504 8.37687 2.3304 1.984 1.70057 3.05472 5.5111 2.29891 11.55756-.72431 5.82602-5.1017 6.39288-5.889 6.64481-.3464.12597-3.30666.85029-7.14868.53537-.4094.50387-.97625 1.1337-1.38564 1.5746-.75581.7873-1.1967 1.5431-1.984 1.29117-.5511-.16534-.59589-.93344-.59847-1.12289l.00012-2.4672C1.06143 18.95524.51721 14.31903.50042 11.09332l.00032-.38762c.00202-.31662.0079-.61658.01352-.89494.06298-3.11771.66133-5.60558 2.39339-7.33764C5.2951.28057 9.62367.0103 11.46139.0003Zm-.10405 1.6677-.2646.00072c-1.65181.01656-5.1351.27353-7.08158 2.0324-1.44863 1.44862-1.921 3.55859-1.984 6.17242-.00363.3016-.01061.63464-.01283.98989l-.00032.3623c.01372 2.70618.42982 6.44087 4.45353 7.56004 0 0-.0315 3.71606-.0315 4.03098 0 .22044.0315.3779.15747.4094.09447 0 .22044-.0315.3464-.15747.31493-.31492.89186-.97247 1.47081-1.64816l.28844-.33786c.7632-.89696 1.45294-1.73003 1.45294-1.73003 3.27517.18895 5.85751-.44089 6.14094-.53537.66133-.18895 4.21992-.50387 4.81827-5.38513.59835-5.00722-.25193-8.43985-1.88952-9.88848-.50387-.47238-2.67682-1.82653-7.21166-1.85803 0 0-.24378-.01568-.65279-.01762Zm-3.3152 3.6392s.10411.12726.24294.29996l.14782.18482c.15424.1939.32006.406.42803.55446.22044.31492.53536.81879.72431 1.10222.28343.50387.09448 1.03923-.15746 1.25968l-.56685.44088c-.28343.22045-.25194.66134-.25194.66134l.00756.02794c.08711.31137.95295 3.13525 3.89745 3.90855 0 0 .44089.0315.66133-.25193l.44089-.56686c.22044-.28342.72431-.47238 1.25968-.18895.28343.15746.7873.47238 1.10222.72432.14846.10797.36055.27378.55446.42803l.18482.14782c.1727.13882.29995.24294.29995.24294.34642.28343.4094.69282.18896 1.13371-.22045.4094-.53537.7873-.94476 1.13371-.31492.28343-.62984.4094-.94476.47238h-.12597c-.12597 0-.28343-.0315-.4094-.06298-.47238-.12597-1.25968-.47238-2.61383-1.1967-.85029-.47238-1.5746-.97625-2.17295-1.44863-.31492-.25194-.66133-.53536-.97625-.88178l-.12597-.12596c-.34641-.34642-.62984-.66133-.88177-.97625-.47238-.59835-.97626-1.32267-1.44864-2.17295-.72431-1.32267-1.07072-2.10996-1.1967-2.61384-.03148-.12596-.06298-.25193-.06298-.4094v-.12596c.0315-.31492.18896-.62984.47238-.94476.34642-.3779.72432-.69282 1.13372-.94476.44088-.22044.85028-.15746 1.1337.18895Zm3.40113-.99625c1.76853 0 3.26497.59027 4.46293 1.75495 1.20774 1.1742 1.82397 2.77306 1.82397 4.7524 0 .16758-.13584.30343-.30342.30343-.16758 0-.30343-.13585-.30343-.30343 0-1.82183-.55528-3.26256-1.64014-4.3173-1.0831-1.053-2.42726-1.5832-4.0399-1.5832-.16759 0-.30343-.13584-.30343-.30342 0-.16758.13584-.30343.30342-.30343Zm.5868 1.5433.03543.00075c1.28041.10109 2.29241.54805 3.03447 1.35758.72375.79268 1.0888 1.81829 1.05548 2.98455-.00478.1675-.14446.29942-.31197.29463-.1675-.00478-.29942-.14446-.29463-.31197.0289-1.0118-.2815-1.88388-.89662-2.5576-.63187-.6893-1.4998-1.07264-2.6345-1.16222-.16705-.01319-.29178-.1593-.2786-.32636.01225-.15513.13912-.27376.29093-.27936Zm.43732 1.63784c1.31837.07126 2.04193.82301 2.11317 2.17655.0088.16735-.11972.31015-.28706.31895-.16735.00881-.31015-.1197-.31896-.28705-.05518-1.0485-.53616-1.54823-1.5399-1.60249-.16733-.00904-.29565-.15203-.2866-.31936.00904-.16733.15202-.29565.31935-.2866Z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/webshare.js":
/*!***************************************************!*\
  !*** ./src/social-sharing-link/icons/webshare.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   webshare: () => (/* binding */ webshare)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const webshare = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.5 12c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3c0-.24.03-.46.09-.69l-4.38-2.3c-.55.61-1.33.99-2.21.99-1.66 0-3-1.34-3-3s1.34-3 3-3c.88 0 1.66.39 2.21.99l4.38-2.3c-.06-.23-.09-.45-.09-.69 0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-.88 0-1.66-.39-2.21-.99l-4.38 2.3c.06.23.09.45.09.69s-.03.46-.09.69l4.38 2.3c.55-.61 1.33-.99 2.21-.99z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/whatsapp.js":
/*!***************************************************!*\
  !*** ./src/social-sharing-link/icons/whatsapp.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   whatsapp: () => (/* binding */ whatsapp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const whatsapp = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"
}));

/***/ }),

/***/ "./src/social-sharing-link/icons/x.js":
/*!********************************************!*\
  !*** ./src/social-sharing-link/icons/x.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const x = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21h5.245l-7.131-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787Z"
}));

/***/ }),

/***/ "./src/social-sharing-link/social-services.js":
/*!****************************************************!*\
  !*** ./src/social-sharing-link/social-services.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSocialService: () => (/* binding */ getSocialService)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/social-sharing-link/icons/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Retrieves the social service's icon component and label.
 *
 * @param {string} name            The key for a social service (lowercase slug)
 * @param {Object} activeVariation The object of the active social service variation
 *
 * @return {Object} An opject containing the Icon component for social service and label.
 */
const getSocialService = (name, activeVariation) => {
  // Transition Twitter to X
  if ('twitter' === name) {
    return {
      icon: _icons__WEBPACK_IMPORTED_MODULE_1__.x,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Share on X', 'social-sharing-block')
    };
  }
  if (activeVariation?.name) {
    var _activeVariation$icon;
    return {
      icon: (_activeVariation$icon = activeVariation?.icon) !== null && _activeVariation$icon !== void 0 ? _activeVariation$icon : _icons__WEBPACK_IMPORTED_MODULE_1__.mail,
      label: getSocialServiceLabel(activeVariation)
    };
  }

  // Default to Mail if no active variation is found.
  return {
    icon: _icons__WEBPACK_IMPORTED_MODULE_1__.mail,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email this Page', 'social-sharing-block')
  };
};

/**
 * Retrieves the display label for the social service.
 *
 * @param {Object} activeVariation The object of the active social service variation
 *
 * @return {string} Display label for social service
 */
const getSocialServiceLabel = activeVariation => {
  var _activeVariation$titl, _activeVariation$labe;
  let title = (_activeVariation$titl = activeVariation?.title) !== null && _activeVariation$titl !== void 0 ? _activeVariation$titl : activeVariation.name;

  // Transition Twitter to X
  if ('twitter' === activeVariation?.name) {
    title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('X', 'social-sharing-block');
  }
  const label = (_activeVariation$labe = activeVariation?.label) !== null && _activeVariation$labe !== void 0 ? _activeVariation$labe : /* translators: %s: title of the social service. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Share on %s', 'social-sharing-block'), title);
  return label;
};

/***/ }),

/***/ "./src/social-sharing-link/variations.js":
/*!***********************************************!*\
  !*** ./src/social-sharing-link/variations.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/social-sharing-link/icons/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const variations = [{
  name: 'facebook',
  attributes: {
    service: 'facebook'
  },
  title: 'Facebook',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.facebook
}, {
  name: 'flipboard',
  attributes: {
    service: 'flipboard'
  },
  title: 'Flipboard',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.flipboard
}, {
  name: 'line',
  attributes: {
    service: 'line'
  },
  title: 'LINE',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.line
}, {
  name: 'linkedin',
  attributes: {
    service: 'linkedin'
  },
  title: 'LinkedIn',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.linkedin
}, {
  name: 'mail',
  attributes: {
    service: 'mail'
  },
  title: 'Mail',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email this Page', 'social-sharing-block'),
  keywords: ['email', 'e-mail'],
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.mail
}, {
  name: 'pinterest',
  attributes: {
    service: 'pinterest'
  },
  title: 'Pinterest',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.pinterest
}, {
  name: 'pocket',
  attributes: {
    service: 'pocket'
  },
  title: 'Pocket',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.pocket
}, {
  name: 'print',
  attributes: {
    service: 'print'
  },
  title: 'Print',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Print this Page', 'social-sharing-block'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.print
}, {
  name: 'reddit',
  attributes: {
    service: 'reddit'
  },
  title: 'Reddit',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.reddit
}, {
  name: 'skype',
  attributes: {
    service: 'skype'
  },
  title: 'Skype',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.skype
}, {
  name: 'sms',
  attributes: {
    service: 'sms'
  },
  title: 'SMS',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.sms
}, {
  name: 'telegram',
  attributes: {
    service: 'telegram'
  },
  title: 'Telegram',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.telegram
}, {
  name: 'threads',
  attributes: {
    service: 'threads'
  },
  title: 'Threads',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.threads
}, {
  name: 'tumblr',
  attributes: {
    service: 'tumblr'
  },
  title: 'Tumblr',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.tumblr
}, {
  name: 'viber',
  attributes: {
    service: 'viber'
  },
  title: 'Viber',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.viber
}, {
  name: 'whatsapp',
  attributes: {
    service: 'whatsapp'
  },
  title: 'WhatsApp',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.whatsapp
}, {
  isDefault: true,
  name: 'x',
  attributes: {
    service: 'x'
  },
  title: 'X',
  keywords: ['twitter'],
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.x
}, {
  name: 'webshare',
  attributes: {
    service: 'webshare'
  },
  title: 'Web share',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Share this page', 'social-sharing-block'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.webshare
},
// Deprecated now that Twitter is X.
{
  name: 'twitter',
  attributes: {
    service: 'twitter'
  },
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('X (formerly Twitter)'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.x,
  scope: [] // Removes the variation from the block inserter.
}];

/**
 * Add `isActive` function to all `social link` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 * Block by providing its attributes.
 */
variations.forEach(variation => {
  if (variation.isActive) {
    return;
  }
  variation.isActive = (blockAttributes, variationAttributes) => blockAttributes.service === variationAttributes.service;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variations);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/social-sharing-link/editor.scss":
/*!*********************************************!*\
  !*** ./src/social-sharing-link/editor.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./src/social-sharing-link/block.json":
/*!********************************************!*\
  !*** ./src/social-sharing-link/block.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"outermost/social-sharing-link","title":"Social Sharing Link","category":"widgets","description":"Display an icon that shares the current page when clicked.","parent":["outermost/social-sharing"],"textdomain":"social-sharing-block","attributes":{"service":{"type":"string"},"label":{"type":"string"}},"usesContext":["iconBackgroundColor","iconBackgroundColorValue","iconColor","iconColorValue","showLabels","shareCustomLink","linkTitle","url"],"supports":{"reusable":false,"html":false,"spacing":{"margin":true,"padding":true,"units":["px","em","rem","vh","vw"]},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":false,"radius":false,"style":false,"width":false}}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************!*\
  !*** ./src/social-sharing-link/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/social-sharing-link/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/social-sharing-link/block.json");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variations */ "./src/social-sharing-link/variations.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const settings = {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  variations: _variations__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/**
 * Register the Social Sharing Link block.
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)({
  name,
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__
}, settings);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map