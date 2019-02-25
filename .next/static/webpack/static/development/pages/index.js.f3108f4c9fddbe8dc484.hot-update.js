webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/joe/HDDocuments/University/SecondYear/WebsiteDesign/Term2/ReactAssignment/components/Navbar.js";




var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    activeKey: "/home",
    onSelect: function onSelect(selectedKey) {
      return alert("selected ".concat(selectedKey));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Hello there!"))), ";", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "link-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Link")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "link-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);
{
  /* <style jsx>{`
     ul {
        background: green;
     }
  `}</style> */
}
{
  /* <ul>
   <li><Link href="/"><a>Home</a></Link></li>
   <li><Link href="/about"><a>About</a></Link></li>
  </ul> */
}

/***/ }),

/***/ "./node_modules/dom-helpers/activeElement.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/activeElement.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = activeElement;

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js"));

function activeElement(doc) {
  if (doc === void 0) {
    doc = (0, _ownerDocument.default)();
  }

  try {
    return doc.activeElement;
  } catch (e) {
    /* ie throws if no active element */
  }
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/index.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-helpers/class/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _addClass = _interopRequireDefault(__webpack_require__(/*! ./addClass */ "./node_modules/dom-helpers/class/addClass.js"));

exports.addClass = _addClass.default;

var _removeClass = _interopRequireDefault(__webpack_require__(/*! ./removeClass */ "./node_modules/dom-helpers/class/removeClass.js"));

exports.removeClass = _removeClass.default;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

exports.hasClass = _hasClass.default;
var _default = {
  addClass: _addClass.default,
  removeClass: _removeClass.default,
  hasClass: _hasClass.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/dom-helpers/events/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/events/filter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = filterEvents;

var _contains = _interopRequireDefault(__webpack_require__(/*! ../query/contains */ "./node_modules/dom-helpers/query/contains.js"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__(/*! ../query/querySelectorAll */ "./node_modules/dom-helpers/query/querySelectorAll.js"));

function filterEvents(selector, handler) {
  return function filterHandler(e) {
    var top = e.currentTarget,
        target = e.target,
        matches = (0, _querySelectorAll.default)(top, selector);
    if (matches.some(function (match) {
      return (0, _contains.default)(match, target);
    })) handler.call(this, e);
  };
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/events/index.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/events/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _on = _interopRequireDefault(__webpack_require__(/*! ./on */ "./node_modules/dom-helpers/events/on.js"));

exports.on = _on.default;

var _off = _interopRequireDefault(__webpack_require__(/*! ./off */ "./node_modules/dom-helpers/events/off.js"));

exports.off = _off.default;

var _filter = _interopRequireDefault(__webpack_require__(/*! ./filter */ "./node_modules/dom-helpers/events/filter.js"));

exports.filter = _filter.default;

var _listen = _interopRequireDefault(__webpack_require__(/*! ./listen */ "./node_modules/dom-helpers/events/listen.js"));

exports.listen = _listen.default;
var _default = {
  on: _on.default,
  off: _off.default,
  filter: _filter.default,
  listen: _listen.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/dom-helpers/query/isWindow.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/query/isWindow.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getWindow;

function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/getComputedStyle.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-helpers/style/getComputedStyle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = _getComputedStyle;

var _camelizeStyle = _interopRequireDefault(__webpack_require__(/*! ../util/camelizeStyle */ "./node_modules/dom-helpers/util/camelizeStyle.js"));

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;
  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;
      prop = (0, _camelizeStyle.default)(prop);
      if (prop == 'float') prop = 'styleFloat';
      var current = node.currentStyle[prop] || null;
      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left; // Put in the new values to get a computed value out

        if (rsLeft) runStyle.left = node.currentStyle.left;
        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px'; // Revert the changed values

        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/index.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-helpers/style/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = style;

var _camelizeStyle = _interopRequireDefault(__webpack_require__(/*! ../util/camelizeStyle */ "./node_modules/dom-helpers/util/camelizeStyle.js"));

var _hyphenateStyle = _interopRequireDefault(__webpack_require__(/*! ../util/hyphenateStyle */ "./node_modules/dom-helpers/util/hyphenateStyle.js"));

var _getComputedStyle2 = _interopRequireDefault(__webpack_require__(/*! ./getComputedStyle */ "./node_modules/dom-helpers/style/getComputedStyle.js"));

var _removeStyle = _interopRequireDefault(__webpack_require__(/*! ./removeStyle */ "./node_modules/dom-helpers/style/removeStyle.js"));

var _properties = __webpack_require__(/*! ../transition/properties */ "./node_modules/dom-helpers/transition/properties.js");

var _isTransform = _interopRequireDefault(__webpack_require__(/*! ../transition/isTransform */ "./node_modules/dom-helpers/transition/isTransform.js"));

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle.default)(property)] || (0, _getComputedStyle2.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];

    if (!value && value !== 0) {
      (0, _removeStyle.default)(node, (0, _hyphenateStyle.default)(key));
    } else if ((0, _isTransform.default)(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += _properties.transform + ": " + transforms + ";";
  }

  node.style.cssText += ';' + css;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/removeStyle.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/style/removeStyle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = removeStyle;

function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/end.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/transition/end.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _properties = _interopRequireDefault(__webpack_require__(/*! ./properties */ "./node_modules/dom-helpers/transition/properties.js"));

var _style = _interopRequireDefault(__webpack_require__(/*! ../style */ "./node_modules/dom-helpers/style/index.js"));

function onEnd(node, handler, duration) {
  var fakeEvent = {
    target: node,
    currentTarget: node
  },
      backup;
  if (!_properties.default.end) duration = 0;else if (duration == null) duration = parseDuration(node) || 0;

  if (_properties.default.end) {
    node.addEventListener(_properties.default.end, done, false);
    backup = setTimeout(function () {
      return done(fakeEvent);
    }, (duration || 100) * 1.5);
  } else setTimeout(done.bind(null, fakeEvent), 0);

  function done(event) {
    if (event.target !== event.currentTarget) return;
    clearTimeout(backup);
    event.target.removeEventListener(_properties.default.end, done);
    handler.call(this);
  }
}

onEnd._parseDuration = parseDuration;
var _default = onEnd;
exports.default = _default;

function parseDuration(node) {
  var str = (0, _style.default)(node, _properties.default.duration),
      mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/index.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-helpers/transition/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _end = _interopRequireDefault(__webpack_require__(/*! ./end */ "./node_modules/dom-helpers/transition/end.js"));

exports.end = _end.default;

var _properties = _interopRequireDefault(__webpack_require__(/*! ./properties */ "./node_modules/dom-helpers/transition/properties.js"));

exports.properties = _properties.default;
var _default = {
  end: _end.default,
  properties: _properties.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/dom-helpers/transition/isTransform.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-helpers/transition/isTransform.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/properties.js":
/*!***********************************************************!*\
  !*** ./node_modules/dom-helpers/transition/properties.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;

if (_inDOM.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}

var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports.default = _default;

function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelizeStyle.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/util/camelizeStyle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = camelizeStyleName;

var _camelize = _interopRequireDefault(__webpack_require__(/*! ./camelize */ "./node_modules/dom-helpers/util/camelize.js"));

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
 */
var msPattern = /^-ms-/;

function camelizeStyleName(string) {
  return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenate.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/util/hyphenate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hyphenate;
var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenateStyle.js":
/*!*********************************************************!*\
  !*** ./node_modules/dom-helpers/util/hyphenateStyle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = hyphenateStyleName;

var _hyphenate = _interopRequireDefault(__webpack_require__(/*! ./hyphenate */ "./node_modules/dom-helpers/util/hyphenate.js"));

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;

function hyphenateStyleName(string) {
  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/scrollbarSize.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/util/scrollbarSize.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = scrollbarSize;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ./inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var size;

function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM.default) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/componentOrElement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/componentOrElement.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
  }

  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(validate);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/elementType.js":
/*!**********************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/elementType.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`,expected an element type (a string ') + ', component class, or function component).');
  }

  if (!(0, _reactIs.isValidElementType)(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + ', component class, or function component).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-bootstrap/AbstractNav.js":
false,

/***/ "./node_modules/react-bootstrap/AbstractNavItem.js":
false,

/***/ "./node_modules/react-bootstrap/Button.js":
false,

/***/ "./node_modules/react-bootstrap/CardContext.js":
false,

/***/ "./node_modules/react-bootstrap/Dropdown.js":
false,

/***/ "./node_modules/react-bootstrap/DropdownItem.js":
false,

/***/ "./node_modules/react-bootstrap/DropdownMenu.js":
false,

/***/ "./node_modules/react-bootstrap/DropdownToggle.js":
false,

/***/ "./node_modules/react-bootstrap/Nav.js":
false,

/***/ "./node_modules/react-bootstrap/NavContext.js":
false,

/***/ "./node_modules/react-bootstrap/NavItem.js":
false,

/***/ "./node_modules/react-bootstrap/NavLink.js":
false,

/***/ "./node_modules/react-bootstrap/NavbarContext.js":
false,

/***/ "./node_modules/react-bootstrap/SafeAnchor.js":
false,

/***/ "./node_modules/react-bootstrap/SelectableContext.js":
false,

/***/ "./node_modules/react-bootstrap/TabContext.js":
false,

/***/ "./node_modules/react-bootstrap/ThemeProvider.js":
false,

/***/ "./node_modules/react-bootstrap/es/AbstractNav.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/AbstractNav.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/query/querySelectorAll */ "./node_modules/dom-helpers/query/querySelectorAll.js");
/* harmony import */ var dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-context-toolbox/mapContextToProps */ "./node_modules/react-context-toolbox/mapContextToProps.js");
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/es/NavContext.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TabContext */ "./node_modules/react-bootstrap/es/TabContext.js");










var noop = function noop() {};

var AbstractNav =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(AbstractNav, _React$Component);

  function AbstractNav() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleSelect = function (key, event) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          parentOnSelect = _this$props.parentOnSelect;
      if (key == null) return;
      if (onSelect) onSelect(key, event);
      if (parentOnSelect) parentOnSelect(key, event);
    };

    _this.handleKeyDown = function (event) {
      var onKeyDown = _this.props.onKeyDown;
      if (onKeyDown) onKeyDown(event);
      var nextActiveChild;

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          nextActiveChild = _this.getNextActiveChild(-1);
          break;

        case 'ArrowRight':
        case 'ArrowDown':
          nextActiveChild = _this.getNextActiveChild(1);
          break;

        default:
          return;
      }

      if (!nextActiveChild) return;
      event.preventDefault();

      _this.handleSelect(nextActiveChild.dataset.rbEventKey, event);

      _this._needsRefocus = true;
    };

    _this.attachRef = function (ref) {
      _this.listNode = ref;
    };

    _this.state = {
      navContext: null
    };
    return _this;
  }

  AbstractNav.getDerivedStateFromProps = function getDerivedStateFromProps(_ref) {
    var activeKey = _ref.activeKey,
        getControlledId = _ref.getControlledId,
        getControllerId = _ref.getControllerId,
        role = _ref.role;
    return {
      navContext: {
        role: role,
        // used by NavLink to determine it's role
        activeKey: Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["makeEventKey"])(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      }
    };
  };

  var _proto = AbstractNav.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (!this._needsRefocus || !this.listNode) return;
    var activeChild = this.listNode.querySelector('[data-rb-event-key].active');
    if (activeChild) activeChild.focus();
  };

  _proto.getNextActiveChild = function getNextActiveChild(offset) {
    if (!this.listNode) return null;
    var items = dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_4___default()(this.listNode, '[data-rb-event-key]:not(.disabled)');
    var activeChild = this.listNode.querySelector('.active');
    var index = items.indexOf(activeChild);
    if (index === -1) return null;
    var nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.as,
        _ = _this$props2.onSelect,
        _0 = _this$props2.parentOnSelect,
        _1 = _this$props2.getControlledId,
        _2 = _this$props2.getControllerId,
        _3 = _this$props2.activeKey,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["as", "onSelect", "parentOnSelect", "getControlledId", "getControllerId", "activeKey"]);

    if (props.role === 'tablist') {
      props.onKeyDown = this.handleKeyDown;
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: this.handleSelect
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_NavContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
      value: this.state.navContext
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onKeyDown: this.handleKeyDown,
      ref: this.attachRef
    }))));
  };

  return AbstractNav;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

AbstractNav.defaultProps = {
  as: 'ul'
};
/* harmony default export */ __webpack_exports__["default"] = (react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5___default()([_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"], _TabContext__WEBPACK_IMPORTED_MODULE_8__["default"]], function (parentOnSelect, tabContext, _ref2) {
  var role = _ref2.role;
  if (!tabContext) return {
    parentOnSelect: parentOnSelect
  };
  var activeKey = tabContext.activeKey,
      getControllerId = tabContext.getControllerId,
      getControlledId = tabContext.getControlledId;
  return {
    activeKey: activeKey,
    parentOnSelect: parentOnSelect,
    role: role || 'tablist',
    // pass these two through to avoid having to listen to
    // both Tab and Nav contexts in NavLink
    getControllerId: getControllerId,
    getControlledId: getControlledId
  };
}, AbstractNav));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/AbstractNavItem.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/AbstractNavItem.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/es/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");







var defaultProps = {
  disabled: false
};

var AbstractNavItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(AbstractNavItem, _React$Component);

  function AbstractNavItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AbstractNavItem.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        active = _this$props.active,
        className = _this$props.className,
        tabIndex = _this$props.tabIndex,
        eventKey = _this$props.eventKey,
        onSelect = _this$props.onSelect,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["active", "className", "tabIndex", "eventKey", "onSelect", "as"]);

    var navKey = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["makeEventKey"])(eventKey, props.href);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"].Consumer, null, function (parentOnSelect) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_NavContext__WEBPACK_IMPORTED_MODULE_5__["default"].Consumer, null, function (navContext) {
        var isActive = active;

        if (navContext) {
          if (!props.role && navContext.role === 'tablist') props.role = 'tab';
          props['data-rb-event-key'] = navKey;
          props.id = navContext.getControllerId(navKey);
          props['aria-controls'] = navContext.getControlledId(navKey);
          isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
        }

        if (props.role === 'tab') {
          props.tabIndex = isActive ? tabIndex : -1;
          props['aria-selected'] = isActive;
        }

        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, isActive && 'active'),
          onClick: function onClick(e) {
            var onClick = _this.props.onClick;
            if (onClick) onClick(e);
            if (navKey == null) return;
            if (onSelect) onSelect(navKey, e);
            if (parentOnSelect) parentOnSelect(navKey, e);
          }
        }));
      });
    });
  };

  return AbstractNavItem;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

AbstractNavItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AbstractNavItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Alert.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Alert.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/index.js");
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uncontrollable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_divWithClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/divWithClassName */ "./node_modules/react-bootstrap/es/utils/divWithClassName.js");
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/es/Fade.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/es/CloseButton.js");
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");












/**
 * @property {AlertHeading} Heading
 * @property {AlertLink} Link
 */

var Alert =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Alert, _React$Component);

  function Alert() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClose = function (e) {
      _this.props.onClose(false, e);
    };

    return _this;
  }

  var _proto = Alert.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        show = _this$props.show,
        closeLabel = _this$props.closeLabel,
        className = _this$props.className,
        children = _this$props.children,
        variant = _this$props.variant,
        dismissible = _this$props.dismissible,
        Transition = _this$props.transition,
        _ = _this$props.onClose,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "dismissible", "transition", "onClose"]);

    var alert = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      role: "alert"
    }, Transition ? props : undefined, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, variant && bsPrefix + "-" + variant, dismissible && bsPrefix + "-dismissible")
    }), dismissible && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_CloseButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onClick: this.handleClose,
      label: closeLabel
    }), children);
    if (!Transition) return show ? alert : null;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Transition, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      unmountOnExit: true
    }, props, {
      in: show
    }), alert);
  };

  return Alert;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Alert.defaultProps = {
  show: true,
  transition: _Fade__WEBPACK_IMPORTED_MODULE_9__["default"],
  closeLabel: 'Close alert'
};
var DecoratedAlert = uncontrollable__WEBPACK_IMPORTED_MODULE_5___default()(Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__["createBootstrapComponent"])(Alert, 'alert'), {
  show: 'onClose'
});
var DivStyledAsH4 = Object(_utils_divWithClassName__WEBPACK_IMPORTED_MODULE_6__["default"])('h4');
DecoratedAlert.Link = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_7__["default"])('alert-link', {
  Component: _SafeAnchor__WEBPACK_IMPORTED_MODULE_11__["default"]
});
DecoratedAlert.Heading = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_7__["default"])('alert-heading', {
  Component: DivStyledAsH4
});
/* harmony default export */ __webpack_exports__["default"] = (DecoratedAlert);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Badge.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Badge.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var Badge =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Badge, _React$Component);

  function Badge() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        pill = _this$props.pill,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "variant", "pill", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, pill && bsPrefix + "-pill", variant && bsPrefix + "-" + variant)
    }));
  };

  return Badge;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Badge.defaultProps = {
  pill: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Badge, 'badge'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Breadcrumb.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Breadcrumb.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/react-bootstrap/es/BreadcrumbItem.js");








var Breadcrumb =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Breadcrumb, _React$Component);

  function Breadcrumb() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Breadcrumb.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        listProps = _this$props.listProps,
        children = _this$props.children,
        label = _this$props.label,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "listProps", "children", "label", "as"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "aria-label": label,
      className: className
    }, props), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ol", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, listProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsPrefix, listProps.className)
    }), children));
  };

  return Breadcrumb;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Breadcrumb.defaultProps = {
  label: 'breadcrumb',
  listProps: {},
  as: 'nav'
};
var DecoratedBreadcrumb = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Breadcrumb, 'breadcrumb');
DecoratedBreadcrumb.Item = _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = (DecoratedBreadcrumb);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/BreadcrumbItem.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/BreadcrumbItem.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");








var BreadcrumbItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BreadcrumbItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        active = _this$props.active,
        className = _this$props.className,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "active", "className", "as"]);

    var href = props.href,
        title = props.title,
        target = props.target,
        elementProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["href", "title", "target"]);

    var linkProps = {
      href: href,
      title: title,
      target: target
    };
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsPrefix, className, {
        active: active
      }),
      "aria-current": active ? 'page' : undefined
    }, active ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, elementProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        active: active
      })
    })) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, elementProps, linkProps)));
  };

  return BreadcrumbItem;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

BreadcrumbItem.defaultProps = {
  active: false,
  as: 'li'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["createBootstrapComponent"])(BreadcrumbItem, 'breadcrumb-item'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Button.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Button.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");








var Button =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Button, _React$Component);

  function Button() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        size = _this$props.size,
        active = _this$props.active,
        className = _this$props.className,
        block = _this$props.block,
        type = _this$props.type,
        as = _this$props.as,
        innerRef = _this$props.innerRef,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as", "innerRef"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, active && 'active', bsPrefix + "-" + variant, block && bsPrefix + "-block", size && bsPrefix + "-" + size);

    if (props.href) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        as: as,
        innerRef: innerRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes, props.disabled && 'disabled')
      }));
    }

    var Component = as || 'button';
    if (innerRef) props.ref = innerRef;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      type: type,
      className: classes
    }));
  };

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Button.defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Button, {
  prefix: 'btn',
  forwardRefAs: 'innerRef'
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ButtonGroup.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ButtonGroup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var ButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ButtonGroup, _React$Component);

  function ButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        toggle = _this$props.toggle,
        vertical = _this$props.vertical,
        className = _this$props.className,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "size", "toggle", "vertical", "className", "as"]);

    var baseClass = bsPrefix;
    if (vertical) baseClass = bsPrefix + "-vertical";
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, baseClass, size && bsPrefix + "-" + size, toggle && bsPrefix + "-toggle")
    }));
  };

  return ButtonGroup;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ButtonGroup.defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group',
  as: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(ButtonGroup, 'btn-group'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ButtonToolbar.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ButtonToolbar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var ButtonToolbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonToolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }));
  };

  return ButtonToolbar;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ButtonToolbar.defaultProps = {
  role: 'toolbar'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(ButtonToolbar, 'btn-toolbar'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Card.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Card.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _utils_divWithClassName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/divWithClassName */ "./node_modules/react-bootstrap/es/utils/divWithClassName.js");
/* harmony import */ var _CardContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/es/CardContext.js");
/* harmony import */ var _CardImg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/es/CardImg.js");










var CardBody = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__["default"])('card-body');

var Card =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Card, _React$Component);

  function Card() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {};
    return _this;
  }

  Card.getDerivedStateFromProps = function getDerivedStateFromProps(_ref) {
    var bsPrefix = _ref.bsPrefix;
    return {
      cardContext: {
        cardHeaderBsPrefix: bsPrefix + "-header"
      }
    };
  };

  var _proto = Card.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        Component = _this$props.as,
        bg = _this$props.bg,
        text = _this$props.text,
        border = _this$props.border,
        body = _this$props.body,
        children = _this$props.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "as", "bg", "text", "border", "body", "children"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_CardContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
      value: this.state.cardContext
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes
    }, props), body ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CardBody, null, children) : children));
  };

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Card.defaultProps = {
  as: 'div',
  body: false
};
var DivStyledAsH5 = Object(_utils_divWithClassName__WEBPACK_IMPORTED_MODULE_7__["default"])('h5');
var DivStyledAsH6 = Object(_utils_divWithClassName__WEBPACK_IMPORTED_MODULE_7__["default"])('h6');
var DecoratedCard = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Card, 'card');
DecoratedCard.Img = _CardImg__WEBPACK_IMPORTED_MODULE_9__["default"];
DecoratedCard.Title = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__["default"])('card-title', {
  Component: DivStyledAsH5
});
DecoratedCard.Subtitle = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__["default"])('card-subtitle', {
  Component: DivStyledAsH6
});
DecoratedCard.Body = CardBody;
DecoratedCard.Link = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__["default"])('card-link', {
  Component: 'a'
});
DecoratedCard.Text = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__["default"])('card-text', {
  Component: 'p'
});
DecoratedCard.Header = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__["default"])('card-header');
DecoratedCard.Footer = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__["default"])('card-footer');
DecoratedCard.ImgOverlay = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__["default"])('card-img-overlay');
/* harmony default export */ __webpack_exports__["default"] = (DecoratedCard);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CardColumns.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CardColumns.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('card-columns'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CardContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CardContext.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CardDeck.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CardDeck.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('card-deck'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CardGroup.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CardGroup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('card-group'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CardImg.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CardImg.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var CardImg =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CardImg, _React$Component);

  function CardImg() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CardImg.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        variant = _this$props.variant,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "variant", "as"]);

    var baseClass = variant ? bsPrefix + "-" + variant : bsPrefix;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(baseClass, className)
    }, props));
  };

  return CardImg;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

CardImg.defaultProps = {
  as: 'img',
  variant: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(CardImg, 'card-img'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Carousel.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Carousel.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/style */ "./node_modules/dom-helpers/style/index.js");
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dom_helpers_transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/transition */ "./node_modules/dom-helpers/transition/index.js");
/* harmony import */ var dom_helpers_transition__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_transition__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/index.js");
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uncontrollable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CarouselCaption__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CarouselCaption */ "./node_modules/react-bootstrap/es/CarouselCaption.js");
/* harmony import */ var _CarouselItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CarouselItem */ "./node_modules/react-bootstrap/es/CarouselItem.js");
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var _utils_ElementChildren__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/ElementChildren */ "./node_modules/react-bootstrap/es/utils/ElementChildren.js");
/* harmony import */ var _utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/triggerBrowserReflow */ "./node_modules/react-bootstrap/es/utils/triggerBrowserReflow.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");















var countChildren = function countChildren(c) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.Children.toArray(c).filter(react__WEBPACK_IMPORTED_MODULE_6___default.a.isValidElement).length;
}; // TODO: `slide` should be `animate`.


var defaultProps = {
  slide: true,
  fade: false,
  interval: 5000,
  keyboard: true,
  pauseOnHover: true,
  wrap: true,
  indicators: true,
  controls: true,
  activeIndex: 0,
  prevIcon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: 'Previous',
  nextIcon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: 'Next'
};

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Carousel, _React$Component);

  function Carousel(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.handleSlideEnd = function () {
      var pendingIndex = _this._pendingIndex;
      _this._isSliding = false;
      _this._pendingIndex = null;
      if (pendingIndex != null) _this.to(pendingIndex);else _this.cycle();
    };

    _this.handleMouseOut = function () {
      _this.cycle();
    };

    _this.handleMouseOver = function () {
      if (_this.props.pauseOnHover) _this.pause();
    };

    _this.handleKeyDown = function (event) {
      if (/input|textarea/i.test(event.target.tagName)) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();

          _this.handlePrev(event);

          break;

        case 'ArrowRight':
          event.preventDefault();

          _this.handleNext(event);

          break;

        default:
          break;
      }
    };

    _this.handleNextWhenVisible = function () {
      if (!_this.isUnmounted && !document.hidden && dom_helpers_style__WEBPACK_IMPORTED_MODULE_4___default()(_this.carousel.current, 'visibility') !== 'hidden') {
        _this.handleNext();
      }
    };

    _this.handleNext = function (e) {
      if (_this._isSliding) return;
      var _this$props = _this.props,
          wrap = _this$props.wrap,
          activeIndex = _this$props.activeIndex;
      var index = activeIndex + 1;
      var count = countChildren(_this.props.children);

      if (index > count - 1) {
        if (!wrap) return;
        index = 0;
      }

      _this.select(index, e, 'next');
    };

    _this.handlePrev = function (e) {
      if (_this._isSliding) return;
      var _this$props2 = _this.props,
          wrap = _this$props2.wrap,
          activeIndex = _this$props2.activeIndex;
      var index = activeIndex - 1;

      if (index < 0) {
        if (!wrap) return;
        index = countChildren(_this.props.children) - 1;
      }

      _this.select(index, e, 'prev');
    };

    _this.state = {
      prevClasses: '',
      currentClasses: 'active'
    };
    _this.isUnmounted = false;
    _this.carousel = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.cycle();
  };

  Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var previousActiveIndex = _ref.activeIndex;

    if (nextProps.activeIndex !== previousActiveIndex) {
      var lastPossibleIndex = countChildren(nextProps.children) - 1;
      var nextIndex = Math.max(0, Math.min(nextProps.activeIndex, lastPossibleIndex));
      var direction;

      if (nextIndex === 0 && previousActiveIndex >= lastPossibleIndex || previousActiveIndex <= nextIndex) {
        direction = 'next';
      } else {
        direction = 'prev';
      }

      return {
        direction: direction,
        previousActiveIndex: previousActiveIndex,
        activeIndex: nextIndex
      };
    }

    return null;
  };

  _proto.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var _this2 = this;

    var _this$props3 = this.props,
        bsPrefix = _this$props3.bsPrefix,
        slide = _this$props3.slide;
    if (!slide || this.state.activeIndex === prevState.activeIndex || this._isSliding) return;
    var _this$state = this.state,
        activeIndex = _this$state.activeIndex,
        direction = _this$state.direction;
    var orderClassName, directionalClassName;

    if (direction === 'next') {
      orderClassName = bsPrefix + "-item-next";
      directionalClassName = bsPrefix + "-item-left";
    } else if (direction === 'prev') {
      orderClassName = bsPrefix + "-item-prev";
      directionalClassName = bsPrefix + "-item-right";
    }

    this._isSliding = true;
    this.pause(); // eslint-disable-next-line react/no-did-update-set-state

    this.safeSetState({
      prevClasses: 'active',
      currentClasses: orderClassName
    }, function () {
      var items = _this2.carousel.current.children;
      var nextElement = items[activeIndex];
      Object(_utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_12__["default"])(nextElement);

      _this2.safeSetState({
        prevClasses: classnames__WEBPACK_IMPORTED_MODULE_3___default()('active', directionalClassName),
        currentClasses: classnames__WEBPACK_IMPORTED_MODULE_3___default()(orderClassName, directionalClassName)
      }, function () {
        return dom_helpers_transition__WEBPACK_IMPORTED_MODULE_5___default.a.end(nextElement, function () {
          return _this2.safeSetState({
            prevClasses: '',
            currentClasses: 'active'
          }, _this2.handleSlideEnd);
        });
      });
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
    this.isUnmounted = true;
  };

  _proto.safeSetState = function safeSetState(state, cb) {
    var _this3 = this;

    if (this.isUnmounted) return;
    this.setState(state, function () {
      return !_this3.isUnmounted && cb();
    });
  } // This might be a public API.
  ;

  _proto.pause = function pause() {
    this._isPaused = true;
    clearInterval(this._interval);
    this._interval = null;
  };

  _proto.cycle = function cycle() {
    this._isPaused = false;
    clearInterval(this._interval);
    this._interval = null;

    if (this.props.interval && !this._isPaused) {
      this._interval = setInterval(document.visibilityState ? this.handleNextWhenVisible : this.handleNext, this.props.interval);
    }
  };

  _proto.to = function to(index, event) {
    var children = this.props.children;

    if (index < 0 || index > countChildren(children) - 1) {
      return;
    }

    if (this._isSliding) {
      this._pendingIndex = index;
      return;
    }

    this.select(index, event);
  };

  _proto.select = function select(index, event, direction) {
    var _this4 = this;

    clearTimeout(this.selectThrottle);
    if (event && event.persist) event.persist(); // The timeout throttles fast clicks, in order to give any pending state
    // a chance to update and propagate back through props

    this.selectThrottle = setTimeout(function () {
      clearTimeout(_this4.timeout);
      var _this4$props = _this4.props,
          activeIndex = _this4$props.activeIndex,
          onSelect = _this4$props.onSelect;
      if (index === activeIndex || _this4._isSliding || _this4.isUnmounted) return;
      onSelect(index, direction || (index < activeIndex ? 'prev' : 'next'), event);
    }, 50);
  };

  _proto.renderControls = function renderControls(properties) {
    var bsPrefix = this.props.bsPrefix;
    var wrap = properties.wrap,
        children = properties.children,
        activeIndex = properties.activeIndex,
        prevIcon = properties.prevIcon,
        nextIcon = properties.nextIcon,
        prevLabel = properties.prevLabel,
        nextLabel = properties.nextLabel;
    var count = countChildren(children);
    return [(wrap || activeIndex !== 0) && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "prev",
      className: bsPrefix + "-control-prev",
      onClick: this.handlePrev
    }, prevIcon, prevLabel && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "sr-only"
    }, prevLabel)), (wrap || activeIndex !== count - 1) && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "next",
      className: bsPrefix + "-control-next",
      onClick: this.handleNext
    }, nextIcon, nextLabel && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "sr-only"
    }, nextLabel))];
  };

  _proto.renderIndicators = function renderIndicators(children, activeIndex) {
    var _this5 = this;

    var bsPrefix = this.props.bsPrefix;
    var indicators = [];
    Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_11__["forEach"])(children, function (child, index) {
      indicators.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        key: index,
        className: index === activeIndex ? 'active' : null,
        onClick: function onClick(e) {
          return _this5.to(index, e);
        }
      }), // Force whitespace between indicator elements. Bootstrap requires
      // this for correct spacing of elements.
      ' ');
    });
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ol", {
      className: bsPrefix + "-indicators"
    }, indicators);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        bsPrefix = _this$props4.bsPrefix,
        slide = _this$props4.slide,
        fade = _this$props4.fade,
        indicators = _this$props4.indicators,
        controls = _this$props4.controls,
        wrap = _this$props4.wrap,
        prevIcon = _this$props4.prevIcon,
        prevLabel = _this$props4.prevLabel,
        nextIcon = _this$props4.nextIcon,
        nextLabel = _this$props4.nextLabel,
        className = _this$props4.className,
        children = _this$props4.children,
        keyboard = _this$props4.keyboard,
        _5 = _this$props4.activeIndex,
        _4 = _this$props4.pauseOnHover,
        _3 = _this$props4.interval,
        _2 = _this$props4.onSelect,
        _1 = _this$props4.onSlideEnd,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props4, ["bsPrefix", "slide", "fade", "indicators", "controls", "wrap", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children", "keyboard", "activeIndex", "pauseOnHover", "interval", "onSelect", "onSlideEnd"]);

    var _this$state2 = this.state,
        activeIndex = _this$state2.activeIndex,
        previousActiveIndex = _this$state2.previousActiveIndex,
        prevClasses = _this$state2.prevClasses,
        currentClasses = _this$state2.currentClasses;
    return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, slide && 'slide', fade && bsPrefix + "-fade"),
        onKeyDown: keyboard ? this.handleKeyDown : undefined,
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut
      }), indicators && this.renderIndicators(children, activeIndex), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: bsPrefix + "-inner",
        ref: this.carousel
      }, Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_11__["map"])(children, function (child, index) {
        var current = index === activeIndex;
        var previous = index === previousActiveIndex;
        return Object(react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"])(child, {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(child.props.className, bsPrefix + "-item", current && currentClasses, previous && prevClasses)
        });
      })), controls && this.renderControls({
        wrap: wrap,
        children: children,
        activeIndex: activeIndex,
        prevIcon: prevIcon,
        prevLabel: prevLabel,
        nextIcon: nextIcon,
        nextLabel: nextLabel
      }))
    );
  };

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Carousel.defaultProps = defaultProps;
var DecoratedCarousel = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_13__["createBootstrapComponent"])(uncontrollable__WEBPACK_IMPORTED_MODULE_7___default()(Carousel, {
  activeIndex: 'onSelect'
}), 'carousel');
DecoratedCarousel.Caption = _CarouselCaption__WEBPACK_IMPORTED_MODULE_8__["default"];
DecoratedCarousel.Item = _CarouselItem__WEBPACK_IMPORTED_MODULE_9__["default"];
/* harmony default export */ __webpack_exports__["default"] = (DecoratedCarousel);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CarouselCaption.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CarouselCaption.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");






var defaultProps = {
  as: 'div'
};

var CarouselCaption =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CarouselCaption, _React$Component);

  function CarouselCaption() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CarouselCaption.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        bsPrefix = _this$props.bsPrefix,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["as", "className", "bsPrefix"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }));
  };

  return CarouselCaption;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

CarouselCaption.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(CarouselCaption, 'carousel-caption'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CarouselItem.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CarouselItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var CarouselItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CarouselItem, _React$Component);

  function CarouselItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CarouselItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        children = _this$props.children,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "children", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }), children);
  };

  return CarouselItem;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(CarouselItem, 'carousel-item'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CloseButton.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CloseButton.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var defaultProps = {
  label: 'Close'
};

var CloseButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CloseButton, _React$Component);

  function CloseButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CloseButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        label = _this$props.label,
        onClick = _this$props.onClick;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      className: "close",
      onClick: onClick
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "sr-only"
    }, label));
  };

  return CloseButton;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

CloseButton.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Col.js":
/*!************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Col.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");






var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];

var Col =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Col, _React$Component);

  function Col() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Col.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "as"]);

    var spans = [];
    var classes = [];
    DEVICE_SIZES.forEach(function (brkPoint) {
      var propValue = props[brkPoint];
      delete props[brkPoint];
      var span, offset, order;

      if (propValue != null && typeof propValue === 'object') {
        var _propValue$span = propValue.span;
        span = _propValue$span === void 0 ? true : _propValue$span;
        offset = propValue.offset;
        order = propValue.order;
      } else {
        span = propValue;
      }

      var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
      if (span != null) spans.push(span === true ? "" + bsPrefix + infix : "" + bsPrefix + infix + "-" + span);
      if (order != null) classes.push("order" + infix + "-" + order);
      if (offset != null) classes.push("offset" + infix + "-" + offset);
    });

    if (!spans.length) {
      spans.push(bsPrefix); // plain 'col'
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default.a.apply(void 0, [className].concat(spans, classes))
    }));
  };

  return Col;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Col.defaultProps = {
  as: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Col, 'col'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Collapse.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Collapse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/style */ "./node_modules/dom-helpers/style/index.js");
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dom-helpers/transition/end */ "./node_modules/dom-helpers/transition/end.js");
/* harmony import */ var dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/Transition.js");
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/triggerBrowserReflow */ "./node_modules/react-bootstrap/es/utils/triggerBrowserReflow.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/createChainedFunction */ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js");




var _collapseStyles;








var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDimensionValue(dimension, elem) {
  var offset = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
  var value = elem[offset];
  var margins = MARGINS[dimension];
  return value + parseInt(dom_helpers_style__WEBPACK_IMPORTED_MODULE_4___default()(elem, margins[0]), 10) + parseInt(dom_helpers_style__WEBPACK_IMPORTED_MODULE_4___default()(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__["EXITED"]] = 'collapse', _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__["EXITING"]] = 'collapsing', _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__["ENTERING"]] = 'collapsing', _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__["ENTERED"]] = 'collapse show', _collapseStyles);
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  dimension: 'height',
  getDimensionValue: getDimensionValue
};

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Collapse, _React$Component);

  function Collapse() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEnter = function (elem) {
      elem.style[_this.getDimension()] = '0';
    };

    _this.handleEntering = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this._getScrollDimensionValue(elem, dimension);
    };

    _this.handleEntered = function (elem) {
      elem.style[_this.getDimension()] = null;
    };

    _this.handleExit = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this.props.getDimensionValue(dimension, elem) + "px";
      Object(_utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_8__["default"])(elem);
    };

    _this.handleExiting = function (elem) {
      elem.style[_this.getDimension()] = '0';
    };

    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.getDimension = function getDimension() {
    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
  }
  /* -- Expanding -- */
  ;

  // for testing
  _proto._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
    var scroll = "scroll" + dimension[0].toUpperCase() + dimension.slice(1);
    return elem[scroll] + "px";
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children"]);

    delete props.dimension;
    delete props.getDimensionValue;
    var handleEnter = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(this.handleEnter, onEnter);
    var handleEntering = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(this.handleEntering, onEntering);
    var handleEntered = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(this.handleEntered, onEntered);
    var handleExit = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(this.handleExit, onExit);
    var handleExiting = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(this.handleExiting, onExiting);
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      addEndListener: dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_6___default.a
    }, props, {
      "aria-expanded": props.role ? props.in : null,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: handleEntered,
      onExit: handleExit,
      onExiting: handleExiting
    }), function (state, innerProps) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, children.props.className, collapseStyles[state], _this2.getDimension() === 'width' && 'width')
      }));
    });
  };

  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Collapse.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Collapse);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Container.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Container.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var Container =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Container, _React$Component);

  function Container() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Container.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        fluid = _this$props.fluid,
        Component = _this$props.as,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "fluid", "as", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, fluid ? bsPrefix + "-fluid" : bsPrefix)
    }));
  };

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Container.defaultProps = {
  as: 'div',
  fluid: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Container, 'container'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Dropdown.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Dropdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-context-toolbox/mapContextToProps */ "./node_modules/react-context-toolbox/mapContextToProps.js");
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_overlays_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-overlays/Dropdown */ "./node_modules/react-overlays/Dropdown.js");
/* harmony import */ var react_overlays_Dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_overlays_Dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/createChainedFunction */ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DropdownMenu */ "./node_modules/react-bootstrap/es/DropdownMenu.js");
/* harmony import */ var _DropdownToggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DropdownToggle */ "./node_modules/react-bootstrap/es/DropdownToggle.js");
/* harmony import */ var _DropdownItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DropdownItem */ "./node_modules/react-bootstrap/es/DropdownItem.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");














var defaultProps = {
  as: 'div',
  navbar: false
};

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Dropdown, _React$Component);

  function Dropdown() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleSelect = function (key, event) {
      if (_this.props.onSelect) _this.props.onSelect(key, event);

      _this.handleToggle(false, event, 'select');
    };

    _this.handleToggle = function (show, event, source) {
      if (source === void 0) {
        source = event.type;
      }

      if (event.currentTarget === document) source = 'rootClose';

      _this.props.onToggle(show, event, {
        source: source
      });
    };

    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        drop = _this$props.drop,
        show = _this$props.show,
        className = _this$props.className,
        Component = _this$props.as,
        alignRight = _this$props.alignRight,
        _1 = _this$props.onSelect,
        _3 = _this$props.onToggle,
        _4 = _this$props.navbar,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "drop", "show", "className", "as", "alignRight", "onSelect", "onToggle", "navbar"]);

    delete props.onToggle;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_12__["default"].Provider, {
      value: this.handleSelect
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_overlays_Dropdown__WEBPACK_IMPORTED_MODULE_6___default.a.ControlledComponent, {
      drop: drop,
      show: show,
      alignEnd: alignRight,
      onToggle: this.handleToggle,
      itemSelector: "." + bsPrefix + "-item:not(.disabled):not(:disabled)"
    }, function (_ref) {
      var dropdownProps = _ref.props;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, dropdownProps, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, show && 'show', (!drop || drop === 'down') && bsPrefix, drop === 'up' && 'dropup', drop === 'right' && 'dropright', drop === 'left' && 'dropleft')
      }));
    }));
  };

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Dropdown.defaultProps = defaultProps;
var UncontrolledDropdown = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__["createBootstrapComponent"])(react_overlays_Dropdown__WEBPACK_IMPORTED_MODULE_6___default.a.deferControlTo(Dropdown), 'dropdown');
var DecoratedDropdown = react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5___default()(_SelectableContext__WEBPACK_IMPORTED_MODULE_12__["default"], function (onSelect, props) {
  return {
    onSelect: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_7__["default"])(props.onSelect, onSelect)
  };
}, UncontrolledDropdown);
DecoratedDropdown.Toggle = _DropdownToggle__WEBPACK_IMPORTED_MODULE_10__["default"];
DecoratedDropdown.Menu = _DropdownMenu__WEBPACK_IMPORTED_MODULE_9__["default"];
DecoratedDropdown.Item = _DropdownItem__WEBPACK_IMPORTED_MODULE_11__["default"];
DecoratedDropdown.Header = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_13__["default"])('dropdown-header', {
  defaultProps: {
    role: 'heading'
  }
});
DecoratedDropdown.Divider = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_13__["default"])('dropdown-divider', {
  defaultProps: {
    role: 'separator'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (DecoratedDropdown);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/DropdownButton.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/DropdownButton.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/react-bootstrap/es/Dropdown.js");





/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`.
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu related props are passed to the `Dropdown.Menu`
 */
var DropdownButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DropdownButton, _React$Component);

  function DropdownButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        rootCloseEvent = _this$props.rootCloseEvent,
        variant = _this$props.variant,
        size = _this$props.size,
        menuRole = _this$props.menuRole,
        disabled = _this$props.disabled,
        href = _this$props.href,
        id = _this$props.id,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["title", "children", "bsPrefix", "rootCloseEvent", "variant", "size", "menuRole", "disabled", "href", "id"]);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], props, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"].Toggle, {
      id: id,
      href: href,
      size: size,
      variant: variant,
      disabled: disabled,
      childBsPrefix: bsPrefix
    }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"].Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent
    }, children));
  };

  return DropdownButton;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DropdownButton);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/DropdownItem.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/DropdownItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-context-toolbox/mapContextToProps */ "./node_modules/react-context-toolbox/mapContextToProps.js");
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/createChainedFunction */ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/es/NavContext.js");












var DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(DropdownItem, _React$Component);

  function DropdownItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onSelect = _this$props.onSelect,
          onClick = _this$props.onClick,
          eventKey = _this$props.eventKey,
          href = _this$props.href;
      var key = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_8__["makeEventKey"])(eventKey, href); // SafeAnchor handles the disabled case, but be handle it here
      // for other components

      if (disabled) return;
      if (onClick) onClick(event);
      if (onSelect) onSelect(key, event);
      if (key !== null && _this.contextSelect) _this.contextSelect(key, event);
    };

    return _this;
  }

  var _proto = DropdownItem.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        bsPrefix = _this$props2.bsPrefix,
        active = _this$props2.active,
        className = _this$props2.className,
        children = _this$props2.children,
        _ = _this$props2.eventKey,
        _1 = _this$props2.onSelect,
        Component = _this$props2.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["bsPrefix", "active", "className", "children", "eventKey", "onSelect", "as"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, active && 'active', props.disabled && 'disabled'),
      onClick: this.handleClick
    }), children);
  };

  return DropdownItem;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

DropdownItem.defaultProps = {
  as: _SafeAnchor__WEBPACK_IMPORTED_MODULE_7__["default"],
  disabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5___default()([_SelectableContext__WEBPACK_IMPORTED_MODULE_8__["default"], _NavContext__WEBPACK_IMPORTED_MODULE_10__["default"]], function (onSelect, navContext, props) {
  var _ref = navContext || {},
      activeKey = _ref.activeKey;

  var key = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_8__["makeEventKey"])(props.eventKey, props.href);
  return {
    onSelect: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_6__["default"])(props.onSelect, onSelect),
    active: props.active == null && key != null ? Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_8__["makeEventKey"])(activeKey) === key : props.active
  };
}, Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__["createBootstrapComponent"])(DropdownItem, 'dropdown-item')));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/DropdownMenu.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/DropdownMenu.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_overlays_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-overlays/DropdownMenu */ "./node_modules/react-overlays/DropdownMenu.js");
/* harmony import */ var react_overlays_DropdownMenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_overlays_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/es/NavbarContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");










var wrapRef = function wrapRef(props) {
  var ref = props.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(r));
  });

  return props;
};

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(DropdownMenu, _React$Component);

  function DropdownMenu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        alignRight = _this$props.alignRight,
        rootCloseEvent = _this$props.rootCloseEvent,
        flip = _this$props.flip,
        popperConfig = _this$props.popperConfig,
        showProps = _this$props.show,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "alignRight", "rootCloseEvent", "flip", "popperConfig", "show", "as"]);

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NavbarContext__WEBPACK_IMPORTED_MODULE_7__["default"].Consumer, null, function (isNavbar) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_overlays_DropdownMenu__WEBPACK_IMPORTED_MODULE_6___default.a, {
        flip: flip,
        show: showProps,
        alignEnd: alignRight,
        usePopper: !isNavbar,
        popperConfig: popperConfig,
        rootCloseEvent: rootCloseEvent
      }, function (_ref) {
        var placement = _ref.placement,
            show = _ref.show,
            alignEnd = _ref.alignEnd,
            close = _ref.close,
            menuProps = _ref.props;
        wrapRef(menuProps); // For custom components provide additional, non-DOM, props;

        if (typeof Component !== 'string') {
          menuProps.show = show;
          menuProps.close = close;
          menuProps.alignRight = alignEnd;
        }

        var style = props.style;

        if (placement) {
          // we don't need the default popper style,
          // menus are display: none when not shown.
          style = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, menuProps.style);
          props['x-placement'] = placement;
        }

        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, menuProps, {
          style: style,
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, show && 'show', alignEnd && bsPrefix + "-right")
        }));
      });
    });
  };

  return DropdownMenu;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

DropdownMenu.defaultProps = {
  alignRight: false,
  as: 'div',
  flip: true
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__["createBootstrapComponent"])(DropdownMenu, 'dropdown-menu'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/DropdownToggle.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/DropdownToggle.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js");
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_overlays_DropdownToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-overlays/DropdownToggle */ "./node_modules/react-overlays/DropdownToggle.js");
/* harmony import */ var react_overlays_DropdownToggle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_overlays_DropdownToggle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");











var wrapRef = function wrapRef(props) {
  var ref = props.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(r));
  });

  return props;
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(DropdownToggle, _React$Component);

  function DropdownToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        split = _this$props.split,
        className = _this$props.className,
        children = _this$props.children,
        childBsPrefix = _this$props.childBsPrefix,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "split", "className", "children", "childBsPrefix", "as"]); // This intentionally forwards size and variant (if set) to the
    // underlying component, to allow it to render size and style variants.


    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_overlays_DropdownToggle__WEBPACK_IMPORTED_MODULE_6___default.a, null, function (_ref) {
      var toggle = _ref.toggle,
          toggleProps = _ref.props;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        onClick: toggle,
        bsPrefix: childBsPrefix,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, split && bsPrefix + "-split")
      }, wrapRef(toggleProps), props), children);
    });
  };

  return DropdownToggle;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

DropdownToggle.defaultProps = {
  as: _Button__WEBPACK_IMPORTED_MODULE_8__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__["createBootstrapComponent"])(DropdownToggle, 'dropdown-toggle'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Fade.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Fade.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/Transition.js");
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dom-helpers/transition/end */ "./node_modules/dom-helpers/transition/end.js");
/* harmony import */ var dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/triggerBrowserReflow */ "./node_modules/react-bootstrap/es/utils/triggerBrowserReflow.js");




var _fadeStyles;






var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_5__["ENTERING"]] = 'show', _fadeStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_5__["ENTERED"]] = 'show', _fadeStyles);

var Fade =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Fade, _React$Component);

  function Fade() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEnter = function (node) {
      Object(_utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_7__["default"])(node);
      if (_this.props.onEnter) _this.props.onEnter(node);
    };

    return _this;
  }

  var _proto = Fade.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["className", "children"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      addEndListener: dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_6___default.a
    }, props, {
      onEnter: this.handleEnter
    }), function (status, innerProps) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('fade', className, children.props.className, fadeStyles[status])
      }));
    });
  };

  return Fade;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Fade.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Fade);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Feedback.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Feedback.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var Feedback =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Feedback, _React$Component);

  function Feedback() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Feedback.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        type = _this$props.type,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["as", "className", "type"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, type && type + "-feedback")
    }));
  };

  return Feedback;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Feedback.defaultProps = {
  type: 'valid',
  as: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (Feedback);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Figure.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Figure.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _FigureImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FigureImage */ "./node_modules/react-bootstrap/es/FigureImage.js");
/* harmony import */ var _FigureCaption__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FigureCaption */ "./node_modules/react-bootstrap/es/FigureCaption.js");









var Figure =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Figure, _React$Component);

  function Figure() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Figure.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["as", "bsPrefix", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }));
  };

  return Figure;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Figure.defaultProps = {
  as: 'figure'
};
var DecoratedFigure = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Figure, 'figure');
DecoratedFigure.Image = _FigureImage__WEBPACK_IMPORTED_MODULE_6__["default"];
DecoratedFigure.Caption = _FigureCaption__WEBPACK_IMPORTED_MODULE_7__["default"];
/* harmony default export */ __webpack_exports__["default"] = (DecoratedFigure);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FigureCaption.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FigureCaption.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var FigureCaption =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(FigureCaption, _React$Component);

  function FigureCaption() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FigureCaption.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["as", "bsPrefix", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }));
  };

  return FigureCaption;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

FigureCaption.defaultProps = {
  as: 'figcaption'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(FigureCaption, 'figure-caption'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FigureImage.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FigureImage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Image */ "./node_modules/react-bootstrap/es/Image.js");







var FigureImage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(FigureImage, _React$Component);

  function FigureImage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FigureImage.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'figure-img')
    }));
  };

  return FigureImage;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

FigureImage.defaultProps = {
  fluid: true
};
/* harmony default export */ __webpack_exports__["default"] = (FigureImage);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Form.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Form.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormGroup */ "./node_modules/react-bootstrap/es/FormGroup.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormControl */ "./node_modules/react-bootstrap/es/FormControl.js");
/* harmony import */ var _FormCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/es/FormCheck.js");
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormLabel */ "./node_modules/react-bootstrap/es/FormLabel.js");
/* harmony import */ var _FormText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormText */ "./node_modules/react-bootstrap/es/FormText.js");











var defaultProps = {
  inline: false,
  as: 'form'
};

function Form(_ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      innerRef = _ref.innerRef,
      validated = _ref.validated,
      Component = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "inline", "className", "innerRef", "validated", "as"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
}

Form.defaultProps = defaultProps;
var DecoratedForm = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Form, 'form');
DecoratedForm.Row = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('form-row');
DecoratedForm.Group = _FormGroup__WEBPACK_IMPORTED_MODULE_6__["default"];
DecoratedForm.Control = _FormControl__WEBPACK_IMPORTED_MODULE_7__["default"];
DecoratedForm.Check = _FormCheck__WEBPACK_IMPORTED_MODULE_8__["default"];
DecoratedForm.Label = _FormLabel__WEBPACK_IMPORTED_MODULE_9__["default"];
DecoratedForm.Text = _FormText__WEBPACK_IMPORTED_MODULE_10__["default"];
/* harmony default export */ __webpack_exports__["default"] = (DecoratedForm);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormCheck.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormCheck.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/es/FormContext.js");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/es/Feedback.js");
/* harmony import */ var _FormCheckInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormCheckInput */ "./node_modules/react-bootstrap/es/FormCheckInput.js");
/* harmony import */ var _FormCheckLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormCheckLabel */ "./node_modules/react-bootstrap/es/FormCheckLabel.js");











var FormCheck =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(FormCheck, _React$Component);

  function FormCheck() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormCheck.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        bsPrefix = _this$props.bsPrefix,
        inline = _this$props.inline,
        disabled = _this$props.disabled,
        isValid = _this$props.isValid,
        isInvalid = _this$props.isInvalid,
        feedback = _this$props.feedback,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        style = _this$props.style,
        title = _this$props.title,
        type = _this$props.type,
        label = _this$props.label,
        children = _this$props.children,
        custom = _this$props.custom,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["id", "bsPrefix", "inline", "disabled", "isValid", "isInvalid", "feedback", "inputRef", "className", "style", "title", "type", "label", "children", "custom"]);

    var hasLabel = label != null && label !== false && !children;
    var input = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_FormCheckInput__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      type: type,
      ref: inputRef,
      isValid: isValid,
      isInvalid: isInvalid,
      isStatic: !hasLabel,
      disabled: disabled
    }));
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_FormContext__WEBPACK_IMPORTED_MODULE_6__["default"].Transform, {
      mapToValue: function mapToValue(_ref) {
        var controlId = _ref.controlId;
        return {
          controlId: id || controlId,
          custom: custom
        };
      }
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: style,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, !custom && bsPrefix, custom && "custom-control custom-" + type, inline && (custom ? 'custom-control' : bsPrefix) + "-inline")
    }, children || react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, input, hasLabel && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_FormCheckLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: title
    }, label), (isValid || isInvalid) && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Feedback__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: isValid ? 'valid' : 'invalid'
    }, feedback))));
  };

  return FormCheck;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

FormCheck.defaultProps = {
  type: 'checkbox',
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
};
var DecoratedFormCheck = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(FormCheck, {
  forwardRefAs: 'inputRef',
  prefix: 'form-check'
});
DecoratedFormCheck.Input = _FormCheckInput__WEBPACK_IMPORTED_MODULE_8__["default"];
DecoratedFormCheck.Label = _FormCheckLabel__WEBPACK_IMPORTED_MODULE_9__["default"];
/* harmony default export */ __webpack_exports__["default"] = (DecoratedFormCheck);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormCheckInput.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormCheckInput.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/es/FormContext.js");






var defaultProps = {
  type: 'checkbox'
};

function FormCheckInput(_ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      innerRef = _ref.innerRef,
      isStatic = _ref.isStatic,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["id", "bsPrefix", "className", "isValid", "isInvalid", "innerRef", "isStatic"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormContext__WEBPACK_IMPORTED_MODULE_5__["default"].Consumer, null, function (_ref2) {
    var controlId = _ref2.controlId,
        custom = _ref2.custom;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      ref: innerRef,
      id: id || controlId,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, !custom && bsPrefix, custom && 'custom-control-input', isValid && 'is-valid', isInvalid && 'is-invalid', isStatic && 'position-static')
    }));
  });
}

FormCheckInput.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["createBootstrapComponent"])(FormCheckInput, 'form-check-input'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormCheckLabel.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormCheckLabel.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/es/FormContext.js");






var defaultProps = {
  type: 'checkbox'
};

function FormCheckLabel(_ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      innerRef = _ref.innerRef,
      htmlFor = _ref.htmlFor,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "innerRef", "htmlFor"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormContext__WEBPACK_IMPORTED_MODULE_5__["default"].Consumer, null, function (_ref2) {
    var controlId = _ref2.controlId,
        custom = _ref2.custom;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      ref: innerRef,
      htmlFor: htmlFor || controlId,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, !custom && bsPrefix, custom && 'custom-control-label')
    }));
  });
}

FormCheckLabel.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["createBootstrapComponent"])(FormCheckLabel, 'form-check-label'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormContext.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_context_toolbox_transformContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-context-toolbox/transformContext */ "./node_modules/react-context-toolbox/transformContext.js");
/* harmony import */ var react_context_toolbox_transformContext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_transformContext__WEBPACK_IMPORTED_MODULE_1__);


var FormContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  controlId: undefined
});
FormContext.Transform = react_context_toolbox_transformContext__WEBPACK_IMPORTED_MODULE_1___default()(FormContext);
/* harmony default export */ __webpack_exports__["default"] = (FormContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormControl.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormControl.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-context-toolbox/mapContextToProps */ "./node_modules/react-context-toolbox/mapContextToProps.js");
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/es/Feedback.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/es/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");










var defaultProps = {
  as: 'input'
};

var FormControl =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(FormControl, _React$Component);

  function FormControl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControl.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        type = _this$props.type,
        size = _this$props.size,
        id = _this$props.id,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        isValid = _this$props.isValid,
        isInvalid = _this$props.isInvalid,
        plaintext = _this$props.plaintext,
        readOnly = _this$props.readOnly,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "type", "size", "id", "inputRef", "className", "isValid", "isInvalid", "plaintext", "readOnly", "as"]);

    var classes;

    if (plaintext) {
      var _classes;

      classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
    } else if (type === 'file') {
      var _classes2;

      classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
    } else {
      var _classes3;

      classes = (_classes3 = {}, _classes3[bsPrefix] = true, _classes3[bsPrefix + "-" + size] = size, _classes3);
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      type: type,
      id: id,
      ref: inputRef,
      readOnly: readOnly,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, classes, isValid && "is-valid", isInvalid && "is-invalid")
    }));
  };

  return FormControl;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

FormControl.defaultProps = defaultProps;

var mapContext = function mapContext(_ref, _ref2) {
  var controlId = _ref.controlId;
  var id = _ref2.id;
   true ? warning__WEBPACK_IMPORTED_MODULE_5___default()(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : undefined;
  return {
    id: id || controlId
  };
};

var DecoratedFormControl = react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_6___default()(_FormContext__WEBPACK_IMPORTED_MODULE_8__["default"], mapContext, Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__["createBootstrapComponent"])(FormControl, {
  prefix: 'form-control',
  forwardRefAs: 'inputRef'
}));
DecoratedFormControl.Feedback = _Feedback__WEBPACK_IMPORTED_MODULE_7__["default"];
/* harmony default export */ __webpack_exports__["default"] = (DecoratedFormControl);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormGroup.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormGroup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/es/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");






var defaultProps = {
  as: 'div'
};

function FormGroup(_ref) {
  var bsPrefix = _ref.bsPrefix,
      innerRef = _ref.innerRef,
      className = _ref.className,
      children = _ref.children,
      controlId = _ref.controlId,
      Component = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "innerRef", "className", "children", "controlId", "as"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      controlId: controlId
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix)
  }), children));
}

FormGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(FormGroup, 'form-group'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormLabel.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormLabel.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-context-toolbox/mapContextToProps */ "./node_modules/react-context-toolbox/mapContextToProps.js");
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Col */ "./node_modules/react-bootstrap/es/Col.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/es/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");









var defaultProps = {
  column: false,
  srOnly: false
};

function FormLabel(_ref) {
  var bsPrefix = _ref.bsPrefix,
      column = _ref.column,
      srOnly = _ref.srOnly,
      className = _ref.className,
      innerRef = _ref.innerRef,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "column", "srOnly", "className", "innerRef"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, srOnly && 'sr-only', column && 'col-form-label');
  if (column) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes,
    as: "label"
  })); // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: innerRef,
    className: classes
  }));
}

FormLabel.defaultProps = defaultProps;

var mapContext = function mapContext(_ref2, _ref3) {
  var controlId = _ref2.controlId;
  var htmlFor = _ref3.htmlFor;
   true ? warning__WEBPACK_IMPORTED_MODULE_4___default()(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : undefined;
  return {
    htmlFor: htmlFor || controlId
  };
};

/* harmony default export */ __webpack_exports__["default"] = (react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5___default()(_FormContext__WEBPACK_IMPORTED_MODULE_7__["default"], mapContext, Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__["createBootstrapComponent"])(FormLabel, 'form-label')));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormText.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormText.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var defaultProps = {
  as: 'small'
};

function FormText(_ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      innerRef = _ref.innerRef,
      Component = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "innerRef", "as"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix)
  }));
}

FormText.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["createBootstrapComponent"])(FormText, 'form-text'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Image.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Image.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var Image =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Image, _React$Component);

  function Image() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Image.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        fluid = _this$props.fluid,
        rounded = _this$props.rounded,
        roundedCircle = _this$props.roundedCircle,
        thumbnail = _this$props.thumbnail,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, classes)
    }));
  };

  return Image;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Image.defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Image, 'img'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/InputGroup.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/InputGroup.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







/**
 *
 * @property {InputGroupAppend} Append
 * @property {InputGroupPrepend} Prepend
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */

var InputGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(InputGroup, _React$Component);

  function InputGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        className = _this$props.className,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "size", "className", "as"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, size && bsPrefix + "-" + size)
    }));
  };

  return InputGroup;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

InputGroup.defaultProps = {
  as: 'div'
};
var InputGroupAppend = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('input-group-append');
var InputGroupPrepend = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('input-group-prepend');
var InputGroupText = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('input-group-text', {
  Component: 'span'
});

var InputGroupCheckbox = function InputGroupCheckbox(props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InputGroupText, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "checkbox"
  }, props)));
};

var InputGroupRadio = function InputGroupRadio(props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InputGroupText, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "radio"
  }, props)));
};

var DecoratedInputGroup = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["createBootstrapComponent"])(InputGroup, 'input-group');
DecoratedInputGroup.Text = InputGroupText;
DecoratedInputGroup.Radio = InputGroupRadio;
DecoratedInputGroup.Checkbox = InputGroupCheckbox;
DecoratedInputGroup.Append = InputGroupAppend;
DecoratedInputGroup.Prepend = InputGroupPrepend;
/* harmony default export */ __webpack_exports__["default"] = (DecoratedInputGroup);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Jumbotron.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Jumbotron.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");






var defaultProps = {
  as: 'div',
  fluid: false
};

var Jumbotron =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Jumbotron, _React$Component);

  function Jumbotron() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Jumbotron.prototype;

  _proto.render = function render() {
    var _classes;

    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        fluid = _this$props.fluid,
        bsPrefix = _this$props.bsPrefix,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["as", "className", "fluid", "bsPrefix"]);

    var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, classes)
    }));
  };

  return Jumbotron;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Jumbotron.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Jumbotron, 'jumbotron'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ListGroup.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ListGroup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/index.js");
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uncontrollable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _AbstractNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AbstractNav */ "./node_modules/react-bootstrap/es/AbstractNav.js");
/* harmony import */ var _ListGroupItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ListGroupItem */ "./node_modules/react-bootstrap/es/ListGroupItem.js");










var ListGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ListGroup, _React$Component);

  function ListGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["className", "bsPrefix", "variant"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_AbstractNav__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, variant && bsPrefix + "-" + variant)
    }));
  };

  return ListGroup;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ListGroup.defaultProps = {
  as: 'div',
  variant: null
};
var DecoratedListGroup = uncontrollable__WEBPACK_IMPORTED_MODULE_5___default()(Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["createBootstrapComponent"])(ListGroup, 'list-group'), {
  activeKey: 'onSelect'
});
DecoratedListGroup.Item = _ListGroupItem__WEBPACK_IMPORTED_MODULE_8__["default"];
/* harmony default export */ __webpack_exports__["default"] = (DecoratedListGroup);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ListGroupItem.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ListGroupItem.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AbstractNavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AbstractNavItem */ "./node_modules/react-bootstrap/es/AbstractNavItem.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");









var ListGroupItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ListGroupItem, _React$Component);

  function ListGroupItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;

      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (onClick) onClick(event);
    };

    return _this;
  }

  var _proto = ListGroupItem.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        bsPrefix = _this$props2.bsPrefix,
        active = _this$props2.active,
        disabled = _this$props2.disabled,
        className = _this$props2.className,
        variant = _this$props2.variant,
        action = _this$props2.action,
        as = _this$props2.as,
        eventKey = _this$props2.eventKey,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["bsPrefix", "active", "disabled", "className", "variant", "action", "as", "eventKey"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_AbstractNavItem__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      eventKey: Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["makeEventKey"])(eventKey, props.href) // eslint-disable-next-line
      ,
      as: as || (action ? props.href ? 'a' : 'button' : 'div'),
      onClick: this.handleClick,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, active && 'active', disabled && 'disabled', variant && bsPrefix + "-" + variant, action && bsPrefix + "-action")
    }));
  };

  return ListGroupItem;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ListGroupItem.defaultProps = {
  variant: null,
  active: false,
  disabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__["createBootstrapComponent"])(ListGroupItem, 'list-group-item'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Media.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Media.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var defaultProps = {
  as: 'div'
};

var Media =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Media, _React$Component);

  function Media() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Media.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "as"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }));
  };

  return Media;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Media.defaultProps = defaultProps;
var DecoratedMedia = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["createBootstrapComponent"])(Media, 'media');
DecoratedMedia.Body = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('media-body');
/* harmony default export */ __webpack_exports__["default"] = (DecoratedMedia);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Modal.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Modal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/events */ "./node_modules/dom-helpers/events/index.js");
/* harmony import */ var dom_helpers_events__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_events__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js");
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dom_helpers_util_inDOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dom-helpers/util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js");
/* harmony import */ var dom_helpers_util_inDOM__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_util_inDOM__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dom-helpers/util/scrollbarSize */ "./node_modules/dom-helpers/util/scrollbarSize.js");
/* harmony import */ var dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_overlays_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-overlays/Modal */ "./node_modules/react-overlays/Modal.js");
/* harmony import */ var react_overlays_Modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_overlays_Modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/es/Fade.js");
/* harmony import */ var _ModalBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ModalBody */ "./node_modules/react-bootstrap/es/ModalBody.js");
/* harmony import */ var _ModalDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModalDialog */ "./node_modules/react-bootstrap/es/ModalDialog.js");
/* harmony import */ var _ModalFooter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ModalFooter */ "./node_modules/react-bootstrap/es/ModalFooter.js");
/* harmony import */ var _ModalHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ModalHeader */ "./node_modules/react-bootstrap/es/ModalHeader.js");
/* harmony import */ var _ModalTitle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ModalTitle */ "./node_modules/react-bootstrap/es/ModalTitle.js");
/* harmony import */ var _utils_BootstrapModalManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/BootstrapModalManager */ "./node_modules/react-bootstrap/es/utils/BootstrapModalManager.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ModalContext */ "./node_modules/react-bootstrap/es/ModalContext.js");



















var defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: _ModalDialog__WEBPACK_IMPORTED_MODULE_12__["default"],
  manager: new _utils_BootstrapModalManager__WEBPACK_IMPORTED_MODULE_16__["default"]()
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Fade__WEBPACK_IMPORTED_MODULE_10__["default"], props);
}

function BackdropTransition(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Fade__WEBPACK_IMPORTED_MODULE_10__["default"], props);
}
/* eslint-enable no-use-before-define */


var Modal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Modal, _React$Component);

  function Modal(_props, context) {
    var _this;

    _this = _React$Component.call(this, _props, context) || this;

    _this.setModalRef = function (ref) {
      _this._modal = ref;
    };

    _this.handleDialogMouseDown = function () {
      _this._waitingForMouseUp = true;
    };

    _this.handleMouseUp = function (e) {
      if (_this._waitingForMouseUp && e.target === _this._modal.dialog) {
        _this._ignoreBackdropClick = true;
      }

      _this._waitingForMouseUp = false;
    };

    _this.handleClick = function (e) {
      if (_this._ignoreBackdropClick || e.target !== e.currentTarget) {
        _this._ignoreBackdropClick = false;
        return;
      }

      _this.props.onHide();
    };

    _this.handleEnter = function (node) {
      var _this$props;

      if (node) {
        node.style.display = 'block';

        _this.updateDialogStyle(node);
      }

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (_this.props.onEnter) (_this$props = _this.props).onEnter.apply(_this$props, [node].concat(args));
    };

    _this.handleEntering = function (node) {
      var _this$props2;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (_this.props.onEntering) (_this$props2 = _this.props).onEntering.apply(_this$props2, [node].concat(args)); // FIXME: This should work even when animation is disabled.

      dom_helpers_events__WEBPACK_IMPORTED_MODULE_4___default.a.on(window, 'resize', _this.handleWindowResize);
    };

    _this.handleExited = function (node) {
      var _this$props3;

      if (node) node.style.display = ''; // RHL removes it sometimes

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      if (_this.props.onExited) (_this$props3 = _this.props).onExited.apply(_this$props3, args); // FIXME: This should work even when animation is disabled.

      dom_helpers_events__WEBPACK_IMPORTED_MODULE_4___default.a.off(window, 'resize', _this.handleWindowResize);
    };

    _this.handleWindowResize = function () {
      _this.updateDialogStyle(_this._modal.dialog);
    };

    _this.renderBackdrop = function (props) {
      var _this$props4 = _this.props,
          bsPrefix = _this$props4.bsPrefix,
          backdropClassName = _this$props4.backdropClassName;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsPrefix + "-backdrop", backdropClassName)
      }));
    };

    _this.state = {
      style: {}
    };
    _this.modalContext = {
      onHide: function onHide() {
        return _this.props.onHide();
      }
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    dom_helpers_events__WEBPACK_IMPORTED_MODULE_4___default.a.off(window, 'resize', this.handleWindowResize);
  };

  _proto.updateDialogStyle = function updateDialogStyle(node) {
    if (!dom_helpers_util_inDOM__WEBPACK_IMPORTED_MODULE_6___default.a) return;
    var manager = this.props.manager;
    var containerIsOverflowing = manager.isContainerOverflowing(this._modal);
    var modalIsOverflowing = node.scrollHeight > dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_5___default()(node).documentElement.clientHeight;
    this.setState({
      style: {
        paddingRight: containerIsOverflowing && !modalIsOverflowing ? dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_7___default()() : undefined,
        paddingLeft: !containerIsOverflowing && modalIsOverflowing ? dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_7___default()() : undefined
      }
    });
  };

  _proto.render = function render() {
    var _this$props5 = this.props,
        bsPrefix = _this$props5.bsPrefix,
        className = _this$props5.className,
        style = _this$props5.style,
        dialogClassName = _this$props5.dialogClassName,
        children = _this$props5.children,
        Dialog = _this$props5.dialogAs,
        show = _this$props5.show,
        manager = _this$props5.manager,
        animation = _this$props5.animation,
        backdrop = _this$props5.backdrop,
        keyboard = _this$props5.keyboard,
        onEscapeKeyDown = _this$props5.onEscapeKeyDown,
        onShow = _this$props5.onShow,
        onHide = _this$props5.onHide,
        container = _this$props5.container,
        autoFocus = _this$props5.autoFocus,
        enforceFocus = _this$props5.enforceFocus,
        restoreFocus = _this$props5.restoreFocus,
        onEntered = _this$props5.onEntered,
        onExit = _this$props5.onExit,
        onExiting = _this$props5.onExiting,
        _ = _this$props5.onExited,
        _1 = _this$props5.onEntering,
        _6 = _this$props5.onEnter,
        _4 = _this$props5.onEntering,
        _2 = _this$props5.backdropClassName,
        _3 = _this$props5.backdropStyle,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props5, ["bsPrefix", "className", "style", "dialogClassName", "children", "dialogAs", "show", "manager", "animation", "backdrop", "keyboard", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "onEntered", "onExit", "onExiting", "onExited", "onEntering", "onEnter", "onEntering", "backdropClassName", "backdropStyle"]);

    var clickHandler = backdrop === true ? this.handleClick : null;
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ModalContext__WEBPACK_IMPORTED_MODULE_18__["default"].Provider, {
      value: this.modalContext
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_overlays_Modal__WEBPACK_IMPORTED_MODULE_9___default.a, {
      show: show,
      backdrop: backdrop,
      container: container,
      keyboard: keyboard,
      autoFocus: autoFocus,
      enforceFocus: enforceFocus,
      restoreFocus: restoreFocus,
      onEscapeKeyDown: onEscapeKeyDown,
      onShow: onShow,
      onHide: onHide,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      manager: manager,
      ref: this.setModalRef,
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style, this.state.style),
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix),
      containerClassName: bsPrefix + "-open",
      transition: animation ? DialogTransition : undefined,
      backdropTransition: animation ? BackdropTransition : undefined,
      renderBackdrop: this.renderBackdrop,
      onClick: clickHandler,
      onMouseUp: this.handleMouseUp,
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onExited: this.handleExited
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Dialog, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      onMouseDown: this.handleDialogMouseDown,
      className: dialogClassName
    }), children)));
  };

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Modal.defaultProps = defaultProps;
var DecoratedModal = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_17__["createBootstrapComponent"])(Modal, 'modal');
DecoratedModal.Body = _ModalBody__WEBPACK_IMPORTED_MODULE_11__["default"];
DecoratedModal.Header = _ModalHeader__WEBPACK_IMPORTED_MODULE_14__["default"];
DecoratedModal.Title = _ModalTitle__WEBPACK_IMPORTED_MODULE_15__["default"];
DecoratedModal.Footer = _ModalFooter__WEBPACK_IMPORTED_MODULE_13__["default"];
DecoratedModal.Dialog = _ModalDialog__WEBPACK_IMPORTED_MODULE_12__["default"];
DecoratedModal.TRANSITION_DURATION = 300;
DecoratedModal.BACKDROP_TRANSITION_DURATION = 150;
/* harmony default export */ __webpack_exports__["default"] = (DecoratedModal);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalBody.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ModalBody.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var ModalBody =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ModalBody, _React$Component);

  function ModalBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["as", "bsPrefix", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }));
  };

  return ModalBody;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ModalBody.defaultProps = {
  as: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(ModalBody, 'modal-body'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ModalContext.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ModalContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  onHide: function onHide() {}
});
/* harmony default export */ __webpack_exports__["default"] = (ModalContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalDialog.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ModalDialog.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var ModalDialog =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ModalDialog, _React$Component);

  function ModalDialog() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalDialog.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        centered = _this$props.centered,
        size = _this$props.size,
        children = _this$props.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "centered", "size", "children"]);

    var bsClass = bsPrefix + "-dialog";
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsClass, className, size && bsPrefix + "-" + size, centered && bsClass + "-centered")
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsPrefix + "-content")
    }, children));
  };

  return ModalDialog;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(ModalDialog, 'modal'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalFooter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ModalFooter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var ModalFooter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ModalFooter, _React$Component);

  function ModalFooter() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalFooter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["as", "bsPrefix", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }));
  };

  return ModalFooter;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ModalFooter.defaultProps = {
  as: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(ModalFooter, 'modal-footer'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalHeader.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ModalHeader.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/createChainedFunction */ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/es/CloseButton.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModalContext */ "./node_modules/react-bootstrap/es/ModalContext.js");









var defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};

var ModalHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ModalHeader, _React$Component);

  function ModalHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        closeLabel = _this$props.closeLabel,
        closeButton = _this$props.closeButton,
        onHide = _this$props.onHide,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ModalContext__WEBPACK_IMPORTED_MODULE_8__["default"].Consumer, null, function (context) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
      }), children, closeButton && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_CloseButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: closeLabel,
        onClick: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_6__["default"])(context && context.onHide, onHide)
      }));
    });
  };

  return ModalHeader;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ModalHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(ModalHeader, 'modal-header'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalTitle.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ModalTitle.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_divWithClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/divWithClassName */ "./node_modules/react-bootstrap/es/utils/divWithClassName.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var DivStyledAsH4 = Object(_utils_divWithClassName__WEBPACK_IMPORTED_MODULE_5__["default"])('h4');

var ModalTitle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ModalTitle, _React$Component);

  function ModalTitle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalTitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["as", "bsPrefix", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }));
  };

  return ModalTitle;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ModalTitle.defaultProps = {
  as: DivStyledAsH4
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["createBootstrapComponent"])(ModalTitle, 'modal-title'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Nav.js":
/*!************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Nav.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types-extra/lib/all */ "./node_modules/prop-types-extra/lib/all.js");
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-context-toolbox/mapContextToProps */ "./node_modules/react-context-toolbox/mapContextToProps.js");
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/index.js");
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uncontrollable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/es/NavbarContext.js");
/* harmony import */ var _CardContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/es/CardContext.js");
/* harmony import */ var _AbstractNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AbstractNav */ "./node_modules/react-bootstrap/es/AbstractNav.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/es/NavItem.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/es/NavLink.js");















var Nav =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Nav, _React$Component);

  function Nav() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Nav.prototype;

  _proto.render = function render() {
    var _classNames;

    var _this$props = this.props,
        as = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        navbarBsPrefix = _this$props.navbarBsPrefix,
        cardHeaderBsPrefix = _this$props.cardHeaderBsPrefix,
        variant = _this$props.variant,
        fill = _this$props.fill,
        justify = _this$props.justify,
        navbar = _this$props.navbar,
        className = _this$props.className,
        children = _this$props.children,
        activeKey = _this$props.activeKey,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["as", "bsPrefix", "navbarBsPrefix", "cardHeaderBsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "activeKey"]);

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AbstractNav__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: as,
      activeKey: activeKey,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_classNames = {}, _classNames[bsPrefix] = !navbar, _classNames[navbarBsPrefix + "-nav"] = navbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
    }, props), children);
  };

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Nav.defaultProps = {
  justify: false,
  fill: false,
  as: 'div'
};
var UncontrolledNav = uncontrollable__WEBPACK_IMPORTED_MODULE_7___default()(Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__["createBootstrapComponent"])(Nav, 'nav'), {
  activeKey: 'onSelect'
});
var DecoratedNav = react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_6___default()([_NavbarContext__WEBPACK_IMPORTED_MODULE_9__["default"], _CardContext__WEBPACK_IMPORTED_MODULE_10__["default"]], function (navbarContext, cardContext, _ref) {
  var navbar = _ref.navbar;
  if (!navbarContext && !cardContext) return {};
  if (navbarContext) return {
    navbarBsPrefix: navbarContext.bsPrefix,
    navbar: navbar == null ? true : navbar
  };
  return {
    cardHeaderBsPrefix: cardContext.cardHeaderBsPrefix
  };
}, UncontrolledNav);
DecoratedNav.Item = _NavItem__WEBPACK_IMPORTED_MODULE_12__["default"];
DecoratedNav.Link = _NavLink__WEBPACK_IMPORTED_MODULE_13__["default"];
DecoratedNav._Nav = Nav; // for Testing until enzyme is working with context

/* harmony default export */ __webpack_exports__["default"] = (DecoratedNav);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavContext.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavContext.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var NavContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (NavContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavDropdown.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavDropdown.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/react-bootstrap/es/Dropdown.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/es/NavItem.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/es/NavLink.js");








var NavDropdown =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(NavDropdown, _React$Component);

  function NavDropdown() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavDropdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        title = _this$props.title,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        rootCloseEvent = _this$props.rootCloseEvent,
        menuRole = _this$props.menuRole,
        disabled = _this$props.disabled,
        active = _this$props.active,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["id", "title", "children", "bsPrefix", "rootCloseEvent", "menuRole", "disabled", "active"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      as: _NavItem__WEBPACK_IMPORTED_MODULE_5__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Toggle, {
      id: id,
      eventKey: null,
      active: active,
      disabled: disabled,
      childBsPrefix: bsPrefix,
      as: _NavLink__WEBPACK_IMPORTED_MODULE_6__["default"]
    }, title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent
    }, children));
  };

  return NavDropdown;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

NavDropdown.Item = _Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Item;
NavDropdown.Divider = _Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Divider;
NavDropdown.Header = _Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Header;
/* harmony default export */ __webpack_exports__["default"] = (NavDropdown);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavItem.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavItem.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var NavItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(NavItem, _React$Component);

  function NavItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "children", "as"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }), children);
  };

  return NavItem;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

NavItem.defaultProps = {
  as: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(NavItem, 'nav-item'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavLink.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavLink.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var _AbstractNavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AbstractNavItem */ "./node_modules/react-bootstrap/es/AbstractNavItem.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var defaultProps = {
  disabled: false,
  as: _SafeAnchor__WEBPACK_IMPORTED_MODULE_4__["default"]
};

function NavLink(_ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      innerRef = _ref.innerRef,
      as = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "innerRef", "as"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AbstractNavItem__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    href: href,
    ref: innerRef,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, disabled && 'disabled')
  }));
}

NavLink.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["createBootstrapComponent"])(NavLink, 'nav-link'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Navbar.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Navbar.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/index.js");
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uncontrollable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _NavbarBrand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavbarBrand */ "./node_modules/react-bootstrap/es/NavbarBrand.js");
/* harmony import */ var _NavbarCollapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavbarCollapse */ "./node_modules/react-bootstrap/es/NavbarCollapse.js");
/* harmony import */ var _NavbarToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavbarToggle */ "./node_modules/react-bootstrap/es/NavbarToggle.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/es/NavbarContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");













var defaultProps = {
  as: 'nav',
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};

var Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Navbar, _React$Component);

  function Navbar() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleCollapse = function () {
      var _this$props = _this.props,
          onToggle = _this$props.onToggle,
          expanded = _this$props.expanded,
          collapseOnSelect = _this$props.collapseOnSelect,
          onSelect = _this$props.onSelect;
      if (onSelect) onSelect.apply(void 0, arguments);

      if (collapseOnSelect && expanded) {
        onToggle(false);
      }
    };

    _this.handleToggle = function () {
      var _this$props2 = _this.props,
          onToggle = _this$props2.onToggle,
          expanded = _this$props2.expanded;
      onToggle(!expanded);
    };

    _this.state = {
      navbarContext: {
        onToggle: _this.handleToggle
      }
    };
    return _this;
  }

  Navbar.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var bsPrefix = _ref.bsPrefix,
        expanded = _ref.expanded;
    return {
      navbarContext: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState.navbarContext, {
        bsPrefix: bsPrefix,
        expanded: expanded
      })
    };
  };

  var _proto = Navbar.prototype;

  _proto.render = function render() {
    var _this$props3 = this.props,
        bsPrefix = _this$props3.bsPrefix,
        expand = _this$props3.expand,
        variant = _this$props3.variant,
        bg = _this$props3.bg,
        fixed = _this$props3.fixed,
        sticky = _this$props3.sticky,
        className = _this$props3.className,
        children = _this$props3.children,
        Component = _this$props3.as,
        _1 = _this$props3.expanded,
        _2 = _this$props3.onToggle,
        _3 = _this$props3.onSelect,
        _4 = _this$props3.collapseOnSelect,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props3, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"]); // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one


    if (props.role === undefined && Component !== 'nav') {
      props.role = 'navigation';
    }

    var expandClass = bsPrefix + "-expand";
    if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_NavbarContext__WEBPACK_IMPORTED_MODULE_11__["default"].Provider, {
      value: this.state.navbarContext
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_12__["default"].Provider, {
      value: this.handleCollapse
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed)
    }), children)));
  };

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Navbar.defaultProps = defaultProps;
var DecoratedNavbar = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_10__["createBootstrapComponent"])(uncontrollable__WEBPACK_IMPORTED_MODULE_5___default()(Navbar, {
  expanded: 'onToggle'
}), 'navbar');
DecoratedNavbar.Brand = _NavbarBrand__WEBPACK_IMPORTED_MODULE_7__["default"];
DecoratedNavbar.Toggle = _NavbarToggle__WEBPACK_IMPORTED_MODULE_9__["default"];
DecoratedNavbar.Collapse = _NavbarCollapse__WEBPACK_IMPORTED_MODULE_8__["default"];
DecoratedNavbar.Text = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__["default"])('navbar-text', {
  Component: 'span'
});
/* harmony default export */ __webpack_exports__["default"] = (DecoratedNavbar);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavbarBrand.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavbarBrand.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var NavbarBrand =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(NavbarBrand, _React$Component);

  function NavbarBrand() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarBrand.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        as = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "as"]);

    var Component = as || (props.href ? 'a' : 'span');
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }));
  };

  return NavbarBrand;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(NavbarBrand, 'navbar-brand'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavbarCollapse.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavbarCollapse.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Collapse */ "./node_modules/react-bootstrap/es/Collapse.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/es/NavbarContext.js");








var NavbarCollapse =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(NavbarCollapse, _React$Component);

  function NavbarCollapse() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarCollapse.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["children", "bsPrefix"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_NavbarContext__WEBPACK_IMPORTED_MODULE_6__["default"].Consumer, null, function (context) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Collapse__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        in: !!(context && context.expanded)
      }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: bsPrefix
      }, children));
    });
  };

  return NavbarCollapse;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(NavbarCollapse, 'navbar-collapse'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavbarContext.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavbarContext.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavbarToggle.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavbarToggle.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/es/NavbarContext.js");








var NavbarToggle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(NavbarToggle, _React$Component);

  function NavbarToggle() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      var onToggle = _this.navbarContext.onToggle;
      if (onClick) onClick(e);
      if (onToggle) onToggle();
    };

    return _this;
  }

  var _proto = NavbarToggle.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        label = _this$props.label,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "children", "label", "as"]);

    if (Component === 'button') {
      props.type = 'button';
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_NavbarContext__WEBPACK_IMPORTED_MODULE_6__["default"].Consumer, null, function (context) {
      _this2.navbarContext = context || {};
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        onClick: _this2.handleClick,
        "aria-label": label,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, !!(context && context.expanded) && 'collapsed')
      }), children || react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: bsPrefix + "-icon"
      }));
    });
  };

  return NavbarToggle;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

NavbarToggle.defaultProps = {
  label: 'Toggle navigation',
  as: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(NavbarToggle, 'navbar-toggler'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Overlay.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Overlay.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-overlays/Overlay */ "./node_modules/react-overlays/Overlay.js");
/* harmony import */ var react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/es/Fade.js");







var defaultProps = {
  transition: _Fade__WEBPACK_IMPORTED_MODULE_6__["default"],
  rootClose: false,
  show: false,
  placement: 'top'
};

function wrapRefs(props, arrowProps) {
  var ref = props.ref;
  var aRef = arrowProps.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(r));
  });

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = function (r) {
    return aRef(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(r));
  });
}

function Overlay(_ref) {
  var overlay = _ref.children,
      transition = _ref.transition,
      outerProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "transition"]);

  transition = transition === true ? _Fade__WEBPACK_IMPORTED_MODULE_6__["default"] : transition || null;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, outerProps, {
    transition: transition
  }), function (_ref2) {
    var overlayProps = _ref2.props,
        arrowProps = _ref2.arrowProps,
        show = _ref2.show,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["props", "arrowProps", "show"]);

    wrapRefs(overlayProps, arrowProps);
    if (typeof overlay === 'function') return overlay(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, overlayProps, {
      show: show,
      arrowProps: arrowProps
    }));
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(overlay, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, overlayProps, {
      arrowProps: arrowProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(overlay.props.className, !transition && show && 'show'),
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, overlay.props.style, overlayProps.style)
    }));
  });
}

Overlay.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/OverlayTrigger.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/OverlayTrigger.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var dom_helpers_query_contains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/query/contains */ "./node_modules/dom-helpers/query/contains.js");
/* harmony import */ var dom_helpers_query_contains__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_query_contains__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Overlay */ "./node_modules/react-bootstrap/es/Overlay.js");









var RefHolder =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(RefHolder, _React$Component);

  function RefHolder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = RefHolder.prototype;

  _proto.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

var normalizeDelay = function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
};

var defaultProps = {
  defaultOverlayShown: false,
  trigger: ['hover', 'focus']
}; // eslint-disable-next-line react/no-multi-comp

var OverlayTrigger =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(OverlayTrigger, _React$Component2);

  function OverlayTrigger(props, context) {
    var _this;

    _this = _React$Component2.call(this, props, context) || this;

    _this.getTarget = function () {
      return react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(_this.trigger.current);
    };

    _this.handleShow = function () {
      clearTimeout(_this._timeout);
      _this._hoverState = 'show';
      var delay = normalizeDelay(_this.props.delay);

      if (!delay.show) {
        _this.show();

        return;
      }

      _this._timeout = setTimeout(function () {
        if (_this._hoverState === 'show') _this.show();
      }, delay.show);
    };

    _this.handleHide = function () {
      clearTimeout(_this._timeout);
      _this._hoverState = 'hide';
      var delay = normalizeDelay(_this.props.delay);

      if (!delay.hide) {
        _this.hide();

        return;
      }

      _this._timeout = setTimeout(function () {
        if (_this._hoverState === 'hide') _this.hide();
      }, delay.hide);
    };

    _this.handleFocus = function (e) {
      var _this$getChildProps = _this.getChildProps(),
          onFocus = _this$getChildProps.onFocus;

      _this.handleShow(e);

      if (onFocus) onFocus(e);
    };

    _this.handleBlur = function (e) {
      var _this$getChildProps2 = _this.getChildProps(),
          onBlur = _this$getChildProps2.onBlur;

      _this.handleHide(e);

      if (onBlur) onBlur(e);
    };

    _this.handleClick = function (e) {
      var _this$getChildProps3 = _this.getChildProps(),
          onClick = _this$getChildProps3.onClick;

      if (_this.state.show) _this.hide();else _this.show();
      if (onClick) onClick(e);
    };

    _this.handleMouseOver = function (e) {
      _this.handleMouseOverOut(_this.handleShow, e, 'fromElement');
    };

    _this.handleMouseOut = function (e) {
      return _this.handleMouseOverOut(_this.handleHide, e, 'toElement');
    };

    _this.trigger = react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef();
    _this.state = {
      show: !!props.defaultShow
    }; // We add aria-describedby in the case where the overlay is a role="tooltip"
    // for other cases describedby isn't appropriate (e.g. a popover with inputs) so we don't add it.

    _this.ariaModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var popper = data.instance.popper;

        var target = _this.getTarget();

        if (!_this.state.show || !target) return data;
        var role = popper.getAttribute('role') || '';

        if (popper.id && role.toLowerCase() === 'tooltip') {
          target.setAttribute('aria-describedby', popper.id);
        }

        return data;
      }
    };
    return _this;
  }

  var _proto2 = OverlayTrigger.prototype;

  _proto2.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this._timeout);
  };

  _proto2.getChildProps = function getChildProps() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(this.props.children).props;
  };

  // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.
  _proto2.handleMouseOverOut = function handleMouseOverOut(handler, e, relatedNative) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent[relatedNative];

    if ((!related || related !== target) && !dom_helpers_query_contains__WEBPACK_IMPORTED_MODULE_3___default()(target, related)) {
      handler(e);
    }
  };

  _proto2.hide = function hide() {
    this.setState({
      show: false
    });
  };

  _proto2.show = function show() {
    this.setState({
      show: true
    });
  };

  _proto2.render = function render() {
    var _this$props = this.props,
        trigger = _this$props.trigger,
        overlay = _this$props.overlay,
        children = _this$props.children,
        _this$props$popperCon = _this$props.popperConfig,
        popperConfig = _this$props$popperCon === void 0 ? {} : _this$props$popperCon,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["trigger", "overlay", "children", "popperConfig"]);

    delete props.delay;
    delete props.defaultShow;
    var child = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(children);
    var triggerProps = {};
    var triggers = trigger == null ? [] : [].concat(trigger);

    if (triggers.indexOf('click') !== -1) {
      triggerProps.onClick = this.handleClick;
    }

    if (triggers.indexOf('focus') !== -1) {
      triggerProps.onFocus = this.handleShow;
      triggerProps.onBlur = this.handleHide;
    }

    if (triggers.indexOf('hover') !== -1) {
       true ? warning__WEBPACK_IMPORTED_MODULE_6___default()(triggers.length >= 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the ' + 'visibility of the overlay to just mouse users. Consider also ' + 'including the `"focus"` trigger so that touch and keyboard only ' + 'users can see the overlay as well.') : undefined;
      triggerProps.onMouseOver = this.handleMouseOver;
      triggerProps.onMouseOut = this.handleMouseOut;
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RefHolder, {
      ref: this.trigger
    }, Object(react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"])(child, triggerProps)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Overlay__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      popperConfig: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, popperConfig, {
        modifiers: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, popperConfig.modifiers, {
          ariaModifier: this.ariaModifier
        })
      }),
      show: this.state.show,
      onHide: this.handleHide,
      target: this.getTarget
    }), overlay));
  };

  return OverlayTrigger;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

OverlayTrigger.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (OverlayTrigger);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PageItem.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/PageItem.js ***!
  \*****************************************************/
/*! exports provided: default, First, Prev, Ellipsis, Next, Last */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "First", function() { return First; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prev", function() { return Prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ellipsis", function() { return Ellipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Next", function() { return Next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Last", function() { return Last; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");




/* eslint-disable react/no-multi-comp */



var defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
function PageItem(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["active", "disabled", "className", "style", "activeLabel", "children"]);

  var Component = active || disabled ? 'span' : _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__["default"];
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    style: style,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'page-item', {
      active: active,
      disabled: disabled
    })
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: "page-link",
    disabled: disabled
  }, props), children, active && activeLabel && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "sr-only"
  }, activeLabel)));
}
PageItem.defaultProps = defaultProps;

function createButton(name, defaultValue, label) {
  var _class, _temp;

  if (label === void 0) {
    label = name;
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["children"]);

      delete props.active;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(PageItem, props, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        "aria-hidden": "true"
      }, children || defaultValue), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "sr-only"
      }, label));
    };

    return _class;
  }(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component), _class.displayName = name, _temp;
}

var First = createButton('First', "\xAB");
var Prev = createButton('Prev', "\u2039", 'Previous');
var Ellipsis = createButton('Ellipsis', "\u2026", 'More');
var Next = createButton('Next', "\u203A");
var Last = createButton('Last', "\xBB");

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Pagination.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Pagination.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _PageItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PageItem */ "./node_modules/react-bootstrap/es/PageItem.js");







/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Pagination, _React$Component);

  function Pagination() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        size = _this$props.size,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "children", "size"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, size && bsPrefix + "-" + size)
    }), children);
  };

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

var DecoratedPagination = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Pagination, 'pagination');
DecoratedPagination.First = _PageItem__WEBPACK_IMPORTED_MODULE_6__["First"];
DecoratedPagination.Prev = _PageItem__WEBPACK_IMPORTED_MODULE_6__["Prev"];
DecoratedPagination.Ellipsis = _PageItem__WEBPACK_IMPORTED_MODULE_6__["Ellipsis"];
DecoratedPagination.Item = _PageItem__WEBPACK_IMPORTED_MODULE_6__["default"];
DecoratedPagination.Next = _PageItem__WEBPACK_IMPORTED_MODULE_6__["Next"];
DecoratedPagination.Last = _PageItem__WEBPACK_IMPORTED_MODULE_6__["Last"];
/* harmony default export */ __webpack_exports__["default"] = (DecoratedPagination);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Popover.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Popover.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js");
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");






var defaultProps = {
  placement: 'right'
};

function Popover(_ref) {
  var bsPrefix = _ref.bsPrefix,
      innerRef = _ref.innerRef,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.scheduleUpdate,
      _1 = _ref.outOfBoundaries,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "innerRef", "placement", "className", "style", "title", "children", "arrowProps", "scheduleUpdate", "outOfBoundaries"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "tooltip",
    ref: innerRef,
    style: style,
    "x-placement": placement,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, "bs-popover-" + placement)
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "arrow"
  }, arrowProps)), title && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: bsPrefix + "-header h3"
  }, title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: bsPrefix + "-body"
  }, children));
}

Popover.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Popover, 'popover'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ProgressBar.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ProgressBar.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _utils_ElementChildren__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/ElementChildren */ "./node_modules/react-bootstrap/es/utils/ElementChildren.js");







var ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */

function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];

  if (!children) {
    return null;
  }

  var error = null;
  react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.forEach(children, function (child) {
    if (error) {
      return;
    }
    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */


    var element = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DecoratedProgressBar, null);
    if (child.type === element.type) return;
    var childIdentifier = react__WEBPACK_IMPORTED_MODULE_4___default.a.isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar " + ("components. Found " + childIdentifier + "."));
  });
  return error;
}

var defaultProps = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

var ProgressBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ProgressBar, _React$Component);

  function ProgressBar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ProgressBar.prototype;

  _proto.renderProgressBar = function renderProgressBar(_ref) {
    var _classNames;

    var min = _ref.min,
        now = _ref.now,
        max = _ref.max,
        label = _ref.label,
        srOnly = _ref.srOnly,
        striped = _ref.striped,
        animated = _ref.animated,
        className = _ref.className,
        style = _ref.style,
        variant = _ref.variant,
        bsPrefix = _ref.bsPrefix,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      role: "progressbar",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix + "-bar", (_classNames = {}, _classNames["bg-" + variant] = variant, _classNames[bsPrefix + "-bar-animated"] = animated, _classNames[bsPrefix + "-bar-striped"] = animated || striped, _classNames)),
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        width: getPercentage(now, min, max) + "%"
      }, style),
      "aria-valuenow": now,
      "aria-valuemin": min,
      "aria-valuemax": max
    }), srOnly ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "sr-only"
    }, label) : label);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isChild = _this$props.isChild,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["isChild"]);

    if (isChild) {
      return this.renderProgressBar(props);
    }

    var min = props.min,
        now = props.now,
        max = props.max,
        label = props.label,
        srOnly = props.srOnly,
        striped = props.striped,
        animated = props.animated,
        bsPrefix = props.bsPrefix,
        variant = props.variant,
        className = props.className,
        children = props.children,
        wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, wrapperProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }), children ? Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_6__["map"])(children, function (child) {
      return Object(react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"])(child, {
        isChild: true
      });
    }) : this.renderProgressBar({
      min: min,
      now: now,
      max: max,
      label: label,
      srOnly: srOnly,
      striped: striped,
      animated: animated,
      bsPrefix: bsPrefix,
      variant: variant
    }));
  };

  return ProgressBar;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ProgressBar.defaultProps = defaultProps;
var DecoratedProgressBar = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(ProgressBar, 'progress');
/* harmony default export */ __webpack_exports__["default"] = (DecoratedProgressBar);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ResponsiveEmbed.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ResponsiveEmbed.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");






var defaultProps = {
  aspectRatio: '1by1'
};

var ResponsiveEmbed =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ResponsiveEmbed, _React$Component);

  function ResponsiveEmbed() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ResponsiveEmbed.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        aspectRatio = _this$props.aspectRatio,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "children", "aspectRatio"]);

    var child = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(children);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsPrefix, className, aspectRatio && bsPrefix + "-" + aspectRatio)
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(child.props.className, bsPrefix + "-item")
    }));
  };

  return ResponsiveEmbed;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ResponsiveEmbed.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(ResponsiveEmbed, 'embed-responsive'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Row.js":
/*!************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Row.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var Row =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Row, _React$Component);

  function Row() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        noGutters = _this$props.noGutters,
        Component = _this$props.as,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "noGutters", "as", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, noGutters && 'no-gutters')
    }));
  };

  return Row;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Row.defaultProps = {
  as: 'div',
  noGutters: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Row, 'row'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/SafeAnchor.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/SafeAnchor.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createChainedFunction */ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js");






var defaultProps = {
  as: 'a'
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(SafeAnchor, _React$Component);

  function SafeAnchor(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this)));
    return _this;
  }

  var _proto = SafeAnchor.prototype;

  _proto.handleClick = function handleClick(event) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        href = _this$props.href,
        onClick = _this$props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      this.handleClick(event);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.as,
        disabled = _this$props2.disabled,
        onKeyDown = _this$props2.onKeyDown,
        innerRef = _this$props2.innerRef,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["as", "disabled", "onKeyDown", "innerRef"]);

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')

      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (innerRef) props.ref = innerRef;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onClick: this.handleClick,
      onKeyDown: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_5__["default"])(this.handleKeyDown, onKeyDown)
    }));
  };

  return SafeAnchor;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

SafeAnchor.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (SafeAnchor);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/SelectableContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/SelectableContext.js ***!
  \**************************************************************/
/*! exports provided: makeEventKey, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeEventKey", function() { return makeEventKey; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SelectableContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
var makeEventKey = function makeEventKey(eventKey, href) {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ __webpack_exports__["default"] = (SelectableContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/SplitButton.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/SplitButton.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonGroup */ "./node_modules/react-bootstrap/es/ButtonGroup.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/react-bootstrap/es/Dropdown.js");







/**
 * @inherits Button, Dropdown
 */

var SplitButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(SplitButton, _React$Component);

  function SplitButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SplitButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        variant = _this$props.variant,
        title = _this$props.title,
        toggleLabel = _this$props.toggleLabel,
        children = _this$props.children,
        onClick = _this$props.onClick,
        href = _this$props.href,
        target = _this$props.target,
        menuRole = _this$props.menuRole,
        rootCloseEvent = _this$props.rootCloseEvent,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["id", "bsPrefix", "size", "variant", "title", "toggleLabel", "children", "onClick", "href", "target", "menuRole", "rootCloseEvent"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      as: _ButtonGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      size: size,
      variant: variant,
      disabled: props.disabled,
      bsPrefix: bsPrefix,
      href: href,
      target: target,
      onClick: onClick
    }, title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Toggle, {
      split: true,
      id: id,
      size: size,
      variant: variant,
      disabled: props.disabled,
      childBsPrefix: bsPrefix
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "sr-only"
    }, toggleLabel)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent
    }, children));
  };

  return SplitButton;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

SplitButton.defaultProps = {
  toggleLabel: 'Toggle dropdown'
};
/* harmony default export */ __webpack_exports__["default"] = (SplitButton);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Tab.js":
/*!************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Tab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TabContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabContainer */ "./node_modules/react-bootstrap/es/TabContainer.js");
/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabContent */ "./node_modules/react-bootstrap/es/TabContent.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabPane */ "./node_modules/react-bootstrap/es/TabPane.js");





/* eslint-disable react/require-render-return, react/no-unused-prop-types */

var Tab =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Tab, _React$Component);

  function Tab() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
  };

  return Tab;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Tab.Container = _TabContainer__WEBPACK_IMPORTED_MODULE_2__["default"];
Tab.Content = _TabContent__WEBPACK_IMPORTED_MODULE_3__["default"];
Tab.Pane = _TabPane__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/TabContainer.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/TabContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/index.js");
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uncontrollable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabContext */ "./node_modules/react-bootstrap/es/TabContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");







var TabContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(TabContainer, _React$Component);

  function TabContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.getControlledId = function (key) {
      return _this.getKey(key, 'tabpane');
    };

    _this.getControllerId = function (key) {
      return _this.getKey(key, 'tab');
    };

    _this.state = {
      tabContext: {
        onSelect: _this.props.onSelect,
        activeKey: _this.props.activeKey,
        transition: _this.props.transition,
        mountOnEnter: _this.props.mountOnEnter,
        unmountOnExit: _this.props.unmountOnExit,
        getControlledId: _this.getControlledId,
        getControllerId: _this.getControllerId
      }
    };
    return _this;
  }

  TabContainer.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var activeKey = _ref.activeKey,
        mountOnEnter = _ref.mountOnEnter,
        unmountOnExit = _ref.unmountOnExit,
        transition = _ref.transition;
    return {
      tabContext: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.tabContext, {
        activeKey: activeKey,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        transition: transition
      })
    };
  };

  var _proto = TabContainer.prototype;

  _proto.getKey = function getKey(key, type) {
    var _this$props = this.props,
        generateChildId = _this$props.generateChildId,
        id = _this$props.id;
    if (generateChildId) return generateChildId(key, type);
    return id ? id + "-" + type + "-" + key : null;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        onSelect = _this$props2.onSelect;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: this.state.tabContext
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
      value: onSelect
    }, children));
  };

  return TabContainer;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (uncontrollable__WEBPACK_IMPORTED_MODULE_3___default()(TabContainer, {
  activeKey: 'onSelect'
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/TabContent.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/TabContent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var TabContent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TabContent, _React$Component);

  function TabContent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        Component = _this$props.as,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "as", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }));
  };

  return TabContent;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

TabContent.defaultProps = {
  as: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(TabContent, 'tab-content'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/TabContext.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/TabContext.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TabContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (TabContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/TabPane.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/TabPane.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-context-toolbox/mapContextToProps */ "./node_modules/react-context-toolbox/mapContextToProps.js");
/* harmony import */ var react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TabContext */ "./node_modules/react-bootstrap/es/TabContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/es/Fade.js");











var TabPane =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TabPane, _React$Component);

  function TabPane() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabPane.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        active = _this$props.active,
        className = _this$props.className,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        onExited = _this$props.onExited,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit,
        Transition = _this$props.transition,
        _this$props$as = _this$props.as,
        Component = _this$props$as === void 0 ? 'div' : _this$props$as,
        _ = _this$props.eventKey,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "active", "className", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"]);

    if (!active && unmountOnExit) return null;
    var pane = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      role: "tabpanel",
      "aria-hidden": !active,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, {
        active: active
      })
    }));
    if (Transition) pane = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Transition, {
      in: active,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited,
      mountOnEnter: mountOnEnter,
      unmountOnExit: mountOnEnter
    }, pane); // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
    // conflict with the top level one.

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
      value: null
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
      value: null
    }, pane));
  };

  return TabPane;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (react_context_toolbox_mapContextToProps__WEBPACK_IMPORTED_MODULE_5___default()(_TabContext__WEBPACK_IMPORTED_MODULE_7__["default"], function (context, props) {
  if (!context) return null;

  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(context, ["activeKey", "getControlledId", "getControllerId"]);

  var shouldTransition = props.transition !== false && rest.transition !== false;
  var key = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_8__["makeEventKey"])(props.eventKey);
  return {
    active: props.active == null && key != null ? Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_8__["makeEventKey"])(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || _Fade__WEBPACK_IMPORTED_MODULE_9__["default"]),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  };
}, Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["createBootstrapComponent"])(TabPane, 'tab-pane')));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Table.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Table.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var Table =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Table, _React$Component);

  function Table() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Table.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        striped = _this$props.striped,
        bordered = _this$props.bordered,
        hover = _this$props.hover,
        size = _this$props.size,
        variant = _this$props.variant,
        responsive = _this$props.responsive,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "striped", "bordered", "hover", "size", "variant", "responsive"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsPrefix, className, variant && bsPrefix + "-" + variant, size && bsPrefix + "-" + size, striped && bsPrefix + "-striped", bordered && bsPrefix + "-bordered", hover && bsPrefix + "-hover");
    var table = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classes
    }));

    if (responsive) {
      var responsiveClass = bsPrefix + "-responsive";

      if (typeof responsive === 'string') {
        responsiveClass = responsiveClass + "-" + responsive;
      }

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: responsiveClass
      }, table);
    }

    return table;
  };

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Table, 'table'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Tabs.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Tabs.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js");
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/index.js");
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uncontrollable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Nav */ "./node_modules/react-bootstrap/es/Nav.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/es/NavLink.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/es/NavItem.js");
/* harmony import */ var _TabContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TabContainer */ "./node_modules/react-bootstrap/es/TabContainer.js");
/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TabContent */ "./node_modules/react-bootstrap/es/TabContent.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TabPane */ "./node_modules/react-bootstrap/es/TabPane.js");
/* harmony import */ var _utils_ElementChildren__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/ElementChildren */ "./node_modules/react-bootstrap/es/utils/ElementChildren.js");













var TabContainer = _TabContainer__WEBPACK_IMPORTED_MODULE_9__["default"].ControlledComponent;
var defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_12__["forEach"])(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Tabs, _React$Component);

  function Tabs() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tabs.prototype;

  _proto.renderTab = function renderTab(child) {
    var _child$props = child.props,
        title = _child$props.title,
        eventKey = _child$props.eventKey,
        disabled = _child$props.disabled,
        tabClassName = _child$props.tabClassName;

    if (title == null) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_NavItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      as: _NavLink__WEBPACK_IMPORTED_MODULE_7__["default"],
      eventKey: eventKey,
      disabled: disabled,
      className: tabClassName
    }, title);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        onSelect = _this$props.onSelect,
        transition = _this$props.transition,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit,
        children = _this$props.children,
        _this$props$activeKey = _this$props.activeKey,
        activeKey = _this$props$activeKey === void 0 ? getDefaultActiveKey(children) : _this$props$activeKey,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "children", "activeKey"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TabContainer, {
      id: id,
      activeKey: activeKey,
      onSelect: onSelect,
      transition: transition,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      role: "tablist",
      as: "nav"
    }), Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_12__["map"])(children, this.renderTab)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TabContent__WEBPACK_IMPORTED_MODULE_10__["default"], null, Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_12__["map"])(children, function (child) {
      var childProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, child.props);

      delete childProps.title;
      delete childProps.disabled;
      delete childProps.tabClassName;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TabPane__WEBPACK_IMPORTED_MODULE_11__["default"], childProps);
    })));
  };

  return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Tabs.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (uncontrollable__WEBPACK_IMPORTED_MODULE_5___default()(Tabs, {
  activeKey: 'onSelect'
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ThemeProvider.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ThemeProvider.js ***!
  \**********************************************************/
/*! exports provided: createBootstrapComponent, ThemeConsumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBootstrapComponent", function() { return createBootstrapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Consumer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react_context_toolbox_forwardRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-context-toolbox/forwardRef */ "./node_modules/react-context-toolbox/forwardRef.js");
/* harmony import */ var react_context_toolbox_forwardRef__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_context_toolbox_forwardRef__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var _React$createContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext(new Map()),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prefixes = new Map();
    Object.keys(_this.props.prefixes).forEach(function (key) {
      _this.prefixes.set(key, _this.props.prefixes[key]);
    });
    return _this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Provider, {
      value: this.prefixes
    }, this.props.children);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return react_context_toolbox_forwardRef__WEBPACK_IMPORTED_MODULE_2___default()(function (_ref, ref) {
    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

    props[forwardRefAs] = ref;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Consumer, null, function (prefixes) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        bsPrefix: props.bsPrefix || prefixes.get(prefix) || prefix
      }));
    });
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}


/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ToggleButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ToggleButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./node_modules/react-bootstrap/es/Button.js");







var noop = function noop() {};

var ToggleButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ToggleButton, _React$Component);

  function ToggleButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      focused: false
    };

    _this.handleFocus = function (e) {
      if (e.target.tagName === 'INPUT') _this.setState({
        focused: true
      });
    };

    _this.handleBlur = function (e) {
      if (e.target.tagName === 'INPUT') _this.setState({
        focused: false
      });
    };

    return _this;
  }

  var _proto = ToggleButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        name = _this$props.name,
        className = _this$props.className,
        checked = _this$props.checked,
        type = _this$props.type,
        onChange = _this$props.onChange,
        value = _this$props.value,
        disabled = _this$props.disabled,
        inputRef = _this$props.inputRef,
        innerRef = _this$props.innerRef,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["children", "name", "className", "checked", "type", "onChange", "value", "disabled", "inputRef", "innerRef"]);

    var focused = this.state.focused;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, focused && 'focus', disabled && 'disabled'),
      type: null,
      active: !!checked,
      as: "label"
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      name: name,
      type: type,
      value: value,
      ref: inputRef,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onChange: onChange || noop
    }), children);
  };

  return ToggleButton;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ToggleButton, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    innerRef: ref
  }, props));
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ToggleButtonGroup.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ToggleButtonGroup.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/index.js");
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uncontrollable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/createChainedFunction */ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var _utils_ElementChildren__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ElementChildren */ "./node_modules/react-bootstrap/es/utils/ElementChildren.js");
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ButtonGroup */ "./node_modules/react-bootstrap/es/ButtonGroup.js");
/* harmony import */ var _ToggleButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ToggleButton */ "./node_modules/react-bootstrap/es/ToggleButton.js");










var defaultProps = {
  type: 'radio'
};

var ToggleButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ToggleButtonGroup, _React$Component);

  function ToggleButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ToggleButtonGroup.prototype;

  _proto.getValues = function getValues() {
    var value = this.props.value;
    return value == null ? [] : [].concat(value);
  };

  _proto.handleToggle = function handleToggle(value, event) {
    var _this$props = this.props,
        type = _this$props.type,
        onChange = _this$props.onChange;
    var values = this.getValues();
    var isActive = values.indexOf(value) !== -1;

    if (type === 'radio') {
      if (!isActive) onChange(value, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(function (n) {
        return n !== value;
      }), event);
    } else {
      onChange([].concat(values, [value]), event);
    }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        type = _this$props2.type,
        name = _this$props2.name,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["children", "type", "name"]);

    delete props.onChange;
    delete props.value;
    var values = this.getValues();
    !(type !== 'radio' || !!name) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_4___default()(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"') : undefined : void 0;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      toggle: true
    }), Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_7__["map"])(children, function (child) {
      var _child$props = child.props,
          value = _child$props.value,
          onChange = _child$props.onChange;

      var handler = function handler(e) {
        return _this.handleToggle(value, e);
      };

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, {
        type: type,
        name: child.name || name,
        checked: values.indexOf(value) !== -1,
        onChange: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_6__["default"])(onChange, handler)
      });
    }));
  };

  return ToggleButtonGroup;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ToggleButtonGroup.defaultProps = defaultProps;
var UncontrolledToggleButtonGroup = uncontrollable__WEBPACK_IMPORTED_MODULE_5___default()(ToggleButtonGroup, {
  value: 'onChange'
});
UncontrolledToggleButtonGroup.Button = _ToggleButton__WEBPACK_IMPORTED_MODULE_9__["default"];
/* harmony default export */ __webpack_exports__["default"] = (UncontrolledToggleButtonGroup);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Tooltip.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Tooltip.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js");
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");






var defaultProps = {
  placement: 'right'
};

function Tooltip(_ref) {
  var bsPrefix = _ref.bsPrefix,
      innerRef = _ref.innerRef,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.scheduleUpdate,
      _1 = _ref.outOfBoundaries,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "innerRef", "placement", "className", "style", "children", "arrowProps", "scheduleUpdate", "outOfBoundaries"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: innerRef,
    style: style,
    role: "tooltip",
    "x-placement": placement,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, "bs-tooltip-" + placement)
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "arrow"
  }, arrowProps)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: bsPrefix + "-inner"
  }, children));
}

Tooltip.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Tooltip, 'tooltip'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/index.js ***!
  \**************************************************/
/*! exports provided: Alert, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardColumns, CardDeck, CardImg, CardGroup, Carousel, CarouselItem, CloseButton, Col, Collapse, Dropdown, DropdownButton, Fade, Form, FormControl, FormCheck, FormGroup, FormLabel, FormText, Container, Image, Figure, InputGroup, Jumbotron, ListGroup, ListGroupItem, Media, Modal, ModalBody, ModalDialog, ModalFooter, ModalTitle, Nav, Navbar, NavbarBrand, NavDropdown, NavItem, Overlay, OverlayTrigger, PageItem, Pagination, Popover, ProgressBar, ResponsiveEmbed, Row, SafeAnchor, SplitButton, Tab, TabContainer, TabContent, Table, TabPane, Tabs, ThemeProvider, ToggleButton, ToggleButtonGroup, Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./node_modules/react-bootstrap/es/Alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _Alert__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badge */ "./node_modules/react-bootstrap/es/Badge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _Badge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Breadcrumb */ "./node_modules/react-bootstrap/es/Breadcrumb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return _Breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/react-bootstrap/es/BreadcrumbItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbItem", function() { return _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonGroup */ "./node_modules/react-bootstrap/es/ButtonGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return _ButtonGroup__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ButtonToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ButtonToolbar */ "./node_modules/react-bootstrap/es/ButtonToolbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonToolbar", function() { return _ButtonToolbar__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Card */ "./node_modules/react-bootstrap/es/Card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _CardColumns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardColumns */ "./node_modules/react-bootstrap/es/CardColumns.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardColumns", function() { return _CardColumns__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _CardDeck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CardDeck */ "./node_modules/react-bootstrap/es/CardDeck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardDeck", function() { return _CardDeck__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _CardImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/es/CardImg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardImg", function() { return _CardImg__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _CardGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CardGroup */ "./node_modules/react-bootstrap/es/CardGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardGroup", function() { return _CardGroup__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Carousel */ "./node_modules/react-bootstrap/es/Carousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return _Carousel__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _CarouselItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CarouselItem */ "./node_modules/react-bootstrap/es/CarouselItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselItem", function() { return _CarouselItem__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/es/CloseButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseButton", function() { return _CloseButton__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Col */ "./node_modules/react-bootstrap/es/Col.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _Col__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Collapse */ "./node_modules/react-bootstrap/es/Collapse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return _Collapse__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/react-bootstrap/es/Dropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _Dropdown__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _DropdownButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DropdownButton */ "./node_modules/react-bootstrap/es/DropdownButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownButton", function() { return _DropdownButton__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/es/Fade.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fade", function() { return _Fade__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Form */ "./node_modules/react-bootstrap/es/Form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./FormControl */ "./node_modules/react-bootstrap/es/FormControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return _FormControl__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _FormCheck__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/es/FormCheck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormCheck", function() { return _FormCheck__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./FormGroup */ "./node_modules/react-bootstrap/es/FormGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return _FormGroup__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./FormLabel */ "./node_modules/react-bootstrap/es/FormLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return _FormLabel__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _FormText__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./FormText */ "./node_modules/react-bootstrap/es/FormText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormText", function() { return _FormText__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Container */ "./node_modules/react-bootstrap/es/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Image */ "./node_modules/react-bootstrap/es/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Figure */ "./node_modules/react-bootstrap/es/Figure.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Figure", function() { return _Figure__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _InputGroup__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./InputGroup */ "./node_modules/react-bootstrap/es/InputGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return _InputGroup__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _Jumbotron__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Jumbotron */ "./node_modules/react-bootstrap/es/Jumbotron.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return _Jumbotron__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _ListGroup__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ListGroup */ "./node_modules/react-bootstrap/es/ListGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return _ListGroup__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _ListGroupItem__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ListGroupItem */ "./node_modules/react-bootstrap/es/ListGroupItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListGroupItem", function() { return _ListGroupItem__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Media */ "./node_modules/react-bootstrap/es/Media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return _Media__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Modal */ "./node_modules/react-bootstrap/es/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _ModalBody__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ModalBody */ "./node_modules/react-bootstrap/es/ModalBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBody", function() { return _ModalBody__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _ModalDialog__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ModalDialog */ "./node_modules/react-bootstrap/es/ModalDialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialog", function() { return _ModalDialog__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _ModalFooter__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ModalFooter */ "./node_modules/react-bootstrap/es/ModalFooter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return _ModalFooter__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _ModalTitle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ModalTitle */ "./node_modules/react-bootstrap/es/ModalTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return _ModalTitle__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Nav */ "./node_modules/react-bootstrap/es/Nav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _Nav__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Navbar */ "./node_modules/react-bootstrap/es/Navbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _Navbar__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _NavbarBrand__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./NavbarBrand */ "./node_modules/react-bootstrap/es/NavbarBrand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarBrand", function() { return _NavbarBrand__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./NavDropdown */ "./node_modules/react-bootstrap/es/NavDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavDropdown", function() { return _NavDropdown__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/es/NavItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return _NavItem__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Overlay */ "./node_modules/react-bootstrap/es/Overlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return _Overlay__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _OverlayTrigger__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./OverlayTrigger */ "./node_modules/react-bootstrap/es/OverlayTrigger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayTrigger", function() { return _OverlayTrigger__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _PageItem__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./PageItem */ "./node_modules/react-bootstrap/es/PageItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageItem", function() { return _PageItem__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Pagination */ "./node_modules/react-bootstrap/es/Pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Popover */ "./node_modules/react-bootstrap/es/Popover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _Popover__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ProgressBar */ "./node_modules/react-bootstrap/es/ProgressBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _ProgressBar__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _ResponsiveEmbed__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ResponsiveEmbed */ "./node_modules/react-bootstrap/es/ResponsiveEmbed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveEmbed", function() { return _ResponsiveEmbed__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./Row */ "./node_modules/react-bootstrap/es/Row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _Row__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafeAnchor", function() { return _SafeAnchor__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _SplitButton__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./SplitButton */ "./node_modules/react-bootstrap/es/SplitButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplitButton", function() { return _SplitButton__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./Tab */ "./node_modules/react-bootstrap/es/Tab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _Tab__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _TabContainer__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./TabContainer */ "./node_modules/react-bootstrap/es/TabContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabContainer", function() { return _TabContainer__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./TabContent */ "./node_modules/react-bootstrap/es/TabContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return _TabContent__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./Table */ "./node_modules/react-bootstrap/es/Table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./TabPane */ "./node_modules/react-bootstrap/es/TabPane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return _TabPane__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./Tabs */ "./node_modules/react-bootstrap/es/Tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _ToggleButton__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./ToggleButton */ "./node_modules/react-bootstrap/es/ToggleButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return _ToggleButton__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./ToggleButtonGroup */ "./node_modules/react-bootstrap/es/ToggleButtonGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonGroup", function() { return _ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./Tooltip */ "./node_modules/react-bootstrap/es/Tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_63__["default"]; });


































































































































/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/BootstrapModalManager.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/utils/BootstrapModalManager.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BootstrapModalManager; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/query/querySelectorAll */ "./node_modules/dom-helpers/query/querySelectorAll.js");
/* harmony import */ var dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-helpers/style */ "./node_modules/dom-helpers/style/index.js");
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/util/scrollbarSize */ "./node_modules/dom-helpers/util/scrollbarSize.js");
/* harmony import */ var dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_overlays_ModalManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-overlays/ModalManager */ "./node_modules/react-overlays/ModalManager.js");
/* harmony import */ var react_overlays_ModalManager__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_overlays_ModalManager__WEBPACK_IMPORTED_MODULE_4__);





var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

var BootstrapModalManager =
/*#__PURE__*/
function (_ModalManager) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BootstrapModalManager, _ModalManager);

  function BootstrapModalManager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ModalManager.call.apply(_ModalManager, [this].concat(args)) || this;

    _this.adjustAndStore = function (prop, element, adjust) {
      var actual = element.style[prop];
      element.dataset[prop] = actual;
      dom_helpers_style__WEBPACK_IMPORTED_MODULE_2___default()(element, prop, parseFloat(dom_helpers_style__WEBPACK_IMPORTED_MODULE_2___default()(element, prop)) + adjust + "px");
    };

    _this.restore = function (prop, element) {
      var value = element.dataset[prop];

      if (value !== undefined) {
        delete element.dataset[prop];
        dom_helpers_style__WEBPACK_IMPORTED_MODULE_2___default()(element, prop, value);
      }
    };

    return _this;
  }

  var _proto = BootstrapModalManager.prototype;

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var _this2 = this;

    _ModalManager.prototype.setContainerStyle.call(this, containerState, container);

    if (!containerState.overflowing) return;
    var size = dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_3___default()();
    dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default()(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this2.adjustAndStore('paddingRight', el, size);
    });
    dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default()(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this2.adjustAndStore('margingRight', el, -size);
    });
    dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default()(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this2.adjustAndStore('margingRight', el, size);
    });
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var _this3 = this;

    _ModalManager.prototype.removeContainerStyle.call(this, containerState, container);

    dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default()(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this3.restore('paddingRight', el);
    });
    dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default()(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this3.restore('margingRight', el);
    });
    dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default()(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this3.restore('margingRight', el);
    });
  };

  return BootstrapModalManager;
}(react_overlays_ModalManager__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/ElementChildren.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/utils/ElementChildren.js ***!
  \******************************************************************/
/*! exports provided: map, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */

function map(children, func) {
  var index = 0;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(child) ? func(child, index++) : child;
  });
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  var index = 0;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (child) {
    if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(child)) func(child, index++);
  });
}



/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/utils/createChainedFunction.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

/* harmony default export */ __webpack_exports__["default"] = (createChainedFunction);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createWithBsPrefix; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dom_helpers_util_camelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/util/camelize */ "./node_modules/dom-helpers/util/camelize.js");
/* harmony import */ var dom_helpers_util_camelize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_util_camelize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");








var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + dom_helpers_util_camelize__WEBPACK_IMPORTED_MODULE_5___default()(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _class, _temp2;

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  return Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["createBootstrapComponent"])((_temp2 = _class =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          bsPrefix = _this$props.bsPrefix,
          _this$props$as = _this$props.as,
          Tag = _this$props$as === void 0 ? Component : _this$props$as,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["className", "bsPrefix", "as"]);

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
      }));
    };

    return _class;
  }(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component), _class.displayName = displayName, _temp2), prefix);
}

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/divWithClassName.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/utils/divWithClassName.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (className) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (p, ref) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(p.className, className)
    }));
  });
});

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/triggerBrowserReflow.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/utils/triggerBrowserReflow.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return triggerBrowserReflow; });
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/react-bootstrap/utils/createChainedFunction.js":
false,

/***/ "./node_modules/react-bootstrap/utils/createWithBsPrefix.js":
false,

/***/ "./node_modules/react-context-toolbox/transformContext.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-context-toolbox/transformContext.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = transformContext;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _forwardRef = _interopRequireDefault(__webpack_require__(/*! ./forwardRef */ "./node_modules/react-context-toolbox/forwardRef.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformContext(Context) {
  return (0, _forwardRef.default)(function (props) {
    return _react.default.createElement(Context.Consumer, null, function (context) {
      return _react.default.createElement(Context.Provider, {
        value: props.mapToValue(context)
      }, props.children);
    });
  }, {
    displayName: 'ContextTransformer'
  });
}

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-overlays/Modal.js":
/*!**********************************************!*\
  !*** ./node_modules/react-overlays/Modal.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _activeElement = _interopRequireDefault(__webpack_require__(/*! dom-helpers/activeElement */ "./node_modules/dom-helpers/activeElement.js"));

var _contains = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/contains */ "./node_modules/dom-helpers/query/contains.js"));

var _inDOM = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var _listen = _interopRequireDefault(__webpack_require__(/*! dom-helpers/events/listen */ "./node_modules/dom-helpers/events/listen.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _componentOrElement = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/componentOrElement */ "./node_modules/prop-types-extra/lib/componentOrElement.js"));

var _elementType = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/elementType */ "./node_modules/prop-types-extra/lib/elementType.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _ModalManager = _interopRequireDefault(__webpack_require__(/*! ./ModalManager */ "./node_modules/react-overlays/ModalManager.js"));

var _Portal = _interopRequireDefault(__webpack_require__(/*! ./Portal */ "./node_modules/react-overlays/Portal.js"));

var _getContainer = _interopRequireDefault(__webpack_require__(/*! ./utils/getContainer */ "./node_modules/react-overlays/utils/getContainer.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ./utils/ownerDocument */ "./node_modules/react-overlays/utils/ownerDocument.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var modalManager = new _ModalManager.default();

function omitProps(props, propTypes) {
  var keys = Object.keys(props);
  var newProps = {};
  keys.map(function (prop) {
    if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
      newProps[prop] = props[prop];
    }
  });
  return newProps;
}
/**
 * Love them or hate them, `<Modal />` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
 * The Modal component renders its `children` node in front of a backdrop component.
 *
 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
 *
 * - Manages dialog stacking when one-at-a-time just isn't enough.
 * - Creates a backdrop, for disabling interaction below the modal.
 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
 * - It disables scrolling of the page content while open.
 * - Adds the appropriate ARIA roles are automatically.
 * - Easily pluggable animations via a `<Transition/>` component.
 *
 * Note that, in the same way the backdrop element prevents users from clicking or interacting
 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
 * interact with page content while the Modal is open. To do this, we use a common technique of applying
 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
 * React hierarchy (such as the default: document.body).
 */


var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Modal, _React$Component);

  function Modal() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.state = {
      exited: !_this.props.show
    };

    _this.onPortalRendered = function () {
      if (_this.props.onShow) {
        _this.props.onShow();
      } // autofocus after onShow, to not trigger a focus event for previous
      // modals before this one is shown.


      _this.autoFocus();
    };

    _this.onShow = function () {
      var doc = (0, _ownerDocument.default)(_assertThisInitialized(_assertThisInitialized(_this)));
      var container = (0, _getContainer.default)(_this.props.container, doc.body);

      _this.props.manager.add(_assertThisInitialized(_assertThisInitialized(_this)), container, _this.props.containerClassName);

      _this.removeKeydownListener = (0, _listen.default)(doc, 'keydown', _this.handleDocumentKeyDown);
      _this.removeFocusListener = (0, _listen.default)(doc, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      function () {
        return setTimeout(_this.enforceFocus);
      }, true);
    };

    _this.onHide = function () {
      _this.props.manager.remove(_assertThisInitialized(_assertThisInitialized(_this)));

      _this.removeKeydownListener();

      _this.removeFocusListener();

      if (_this.props.restoreFocus) {
        _this.restoreLastFocus();
      }
    };

    _this.setDialogRef = function (ref) {
      _this.dialog = ref;
    };

    _this.setBackdropRef = function (ref) {
      _this.backdrop = ref && _reactDom.default.findDOMNode(ref);
    };

    _this.handleHidden = function () {
      _this.setState({
        exited: true
      });

      _this.onHide();

      if (_this.props.onExited) {
        var _this$props;

        (_this$props = _this.props).onExited.apply(_this$props, arguments);
      }
    };

    _this.handleBackdropClick = function (e) {
      if (e.target !== e.currentTarget) {
        return;
      }

      if (_this.props.onBackdropClick) {
        _this.props.onBackdropClick(e);
      }

      if (_this.props.backdrop === true) {
        _this.props.onHide();
      }
    };

    _this.handleDocumentKeyDown = function (e) {
      if (_this.props.keyboard && e.keyCode === 27 && _this.isTopModal()) {
        if (_this.props.onEscapeKeyDown) {
          _this.props.onEscapeKeyDown(e);
        }

        _this.props.onHide();
      }
    };

    _this.enforceFocus = function () {
      if (!_this.props.enforceFocus || !_this._isMounted || !_this.isTopModal()) {
        return;
      }

      var currentActiveElement = (0, _activeElement.default)((0, _ownerDocument.default)(_assertThisInitialized(_assertThisInitialized(_this))));

      if (_this.dialog && !(0, _contains.default)(_this.dialog, currentActiveElement)) {
        _this.dialog.focus();
      }
    };

    _this.renderBackdrop = function () {
      var _this$props2 = _this.props,
          renderBackdrop = _this$props2.renderBackdrop,
          Transition = _this$props2.backdropTransition;
      var backdrop = renderBackdrop({
        ref: _this.setBackdropRef,
        onClick: _this.handleBackdropClick
      });

      if (Transition) {
        backdrop = _react.default.createElement(Transition, {
          appear: true,
          in: _this.props.show
        }, backdrop);
      }

      return backdrop;
    };

    return _this;
  }

  Modal.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if (nextProps.show) {
      return {
        exited: false
      };
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      return {
        exited: true
      };
    }

    return null;
  };

  var _proto = Modal.prototype;

  _proto.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(prevProps) {
    if (_inDOM.default && !prevProps.show && this.props.show) {
      this.lastFocus = (0, _activeElement.default)();
    }

    return null;
  };

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this.props.show) {
      this.onShow();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var transition = this.props.transition;

    if (prevProps.show && !this.props.show && !transition) {
      // Otherwise handleHidden will call this.
      this.onHide();
    } else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$props3 = this.props,
        show = _this$props3.show,
        transition = _this$props3.transition;
    this._isMounted = false;

    if (show || transition && !this.state.exited) {
      this.onHide();
    }
  };

  _proto.autoFocus = function autoFocus() {
    if (!this.props.autoFocus) return;
    var currentActiveElement = (0, _activeElement.default)((0, _ownerDocument.default)(this));

    if (this.dialog && !(0, _contains.default)(this.dialog, currentActiveElement)) {
      this.lastFocus = currentActiveElement;
      this.dialog.focus();
    }
  };

  _proto.restoreLastFocus = function restoreLastFocus() {
    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
    if (this.lastFocus && this.lastFocus.focus) {
      this.lastFocus.focus();
      this.lastFocus = null;
    }
  };

  _proto.isTopModal = function isTopModal() {
    return this.props.manager.isTopModal(this);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        show = _this$props4.show,
        container = _this$props4.container,
        children = _this$props4.children,
        renderDialog = _this$props4.renderDialog,
        _this$props4$role = _this$props4.role,
        role = _this$props4$role === void 0 ? 'dialog' : _this$props4$role,
        Transition = _this$props4.transition,
        backdrop = _this$props4.backdrop,
        className = _this$props4.className,
        style = _this$props4.style,
        onExit = _this$props4.onExit,
        onExiting = _this$props4.onExiting,
        onEnter = _this$props4.onEnter,
        onEntering = _this$props4.onEntering,
        onEntered = _this$props4.onEntered,
        props = _objectWithoutPropertiesLoose(_this$props4, ["show", "container", "children", "renderDialog", "role", "transition", "backdrop", "className", "style", "onExit", "onExiting", "onEnter", "onEntering", "onEntered"]);

    if (!(show || Transition && !this.state.exited)) {
      return null;
    }

    var dialogProps = _extends({
      role: role,
      ref: this.setDialogRef,
      // apparently only works on the dialog role element
      'aria-modal': role === 'dialog' ? true : undefined
    }, omitProps(props, Modal.propTypes), {
      style: style,
      className: className,
      tabIndex: '-1'
    });

    var dialog = renderDialog ? renderDialog(dialogProps) : _react.default.createElement("div", dialogProps, _react.default.cloneElement(children, {
      role: 'document'
    }));

    if (Transition) {
      dialog = _react.default.createElement(Transition, {
        appear: true,
        unmountOnExit: true,
        in: show,
        onExit: onExit,
        onExiting: onExiting,
        onExited: this.handleHidden,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered
      }, dialog);
    }

    return _react.default.createElement(_Portal.default, {
      container: container,
      onRendered: this.onPortalRendered
    }, _react.default.createElement(_react.default.Fragment, null, backdrop && this.renderBackdrop(), dialog));
  };

  return Modal;
}(_react.default.Component);

Modal.propTypes = {
  /**
   * Set the visibility of the Modal
   */
  show: _propTypes.default.bool,

  /**
   * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: _propTypes.default.func,

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: _propTypes.default.func,

  /**
   * Include a backdrop component.
   */
  backdrop: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['static'])]),

  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js
   *  renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog: _propTypes.default.func,

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: _propTypes.default.func,

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   */
  onEscapeKeyDown: _propTypes.default.func,

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: _propTypes.default.func,

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: _propTypes.default.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: _propTypes.default.bool,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: _elementType.default,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: _elementType.default,

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: _propTypes.default.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: _propTypes.default.bool,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: _propTypes.default.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: _propTypes.default.func,

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: _propTypes.default.object.isRequired
};
Modal.defaultProps = {
  show: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  onHide: function onHide() {},
  manager: modalManager,
  renderBackdrop: function renderBackdrop(props) {
    return _react.default.createElement("div", props);
  }
};
Modal.Manager = _ModalManager.default;
var _default = Modal;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-overlays/ModalManager.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-overlays/ModalManager.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _class = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class */ "./node_modules/dom-helpers/class/index.js"));

var _style = _interopRequireDefault(__webpack_require__(/*! dom-helpers/style */ "./node_modules/dom-helpers/style/index.js"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/scrollbarSize */ "./node_modules/dom-helpers/util/scrollbarSize.js"));

var _isOverflowing = _interopRequireDefault(__webpack_require__(/*! ./utils/isOverflowing */ "./node_modules/react-overlays/utils/isOverflowing.js"));

var _manageAriaHidden = __webpack_require__(/*! ./utils/manageAriaHidden */ "./node_modules/react-overlays/utils/manageAriaHidden.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }
  });
  return idx;
}
/**
 * Proper state managment for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */


var ModalManager =
/*#__PURE__*/
function () {
  function ModalManager(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$hideSiblingNodes = _ref.hideSiblingNodes,
        hideSiblingNodes = _ref$hideSiblingNodes === void 0 ? true : _ref$hideSiblingNodes,
        _ref$handleContainerO = _ref.handleContainerOverflow,
        handleContainerOverflow = _ref$handleContainerO === void 0 ? true : _ref$handleContainerO;

    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.modals = [];
    this.containers = [];
    this.data = [];
    this.scrollbarSize = (0, _scrollbarSize.default)();
  }

  var _proto = ModalManager.prototype;

  _proto.isContainerOverflowing = function isContainerOverflowing(modal) {
    var data = this.data[this.containerIndexFromModal(modal)];
    return data && data.overflowing;
  };

  _proto.containerIndexFromModal = function containerIndexFromModal(modal) {
    return findIndexOf(this.data, function (d) {
      return d.modals.indexOf(modal) !== -1;
    });
  };

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var style = {
      overflow: 'hidden' // we are only interested in the actual `style` here
      // becasue we will override it

    };
    containerState.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight
    };

    if (containerState.overflowing) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style.paddingRight = parseInt((0, _style.default)(container, 'paddingRight') || 0, 10) + this.scrollbarSize + "px";
    }

    (0, _style.default)(container, style);
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var style = containerState.style;
    Object.keys(style).forEach(function (key) {
      container.style[key] = style[key];
    });
  };

  _proto.add = function add(modal, container, className) {
    var modalIdx = this.modals.indexOf(modal);
    var containerIdx = this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);

    if (this.hideSiblingNodes) {
      (0, _manageAriaHidden.hideSiblings)(container, modal);
    }

    if (containerIdx !== -1) {
      this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }

    var data = {
      modals: [modal],
      //right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: (0, _isOverflowing.default)(container)
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(data, container);
    }

    data.classes.forEach(_class.default.addClass.bind(null, container));
    this.containers.push(container);
    this.data.push(data);
    return modalIdx;
  };

  _proto.remove = function remove(modal) {
    var modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    var containerIdx = this.containerIndexFromModal(modal);
    var data = this.data[containerIdx];
    var container = this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);
    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (data.modals.length === 0) {
      data.classes.forEach(_class.default.removeClass.bind(null, container));

      if (this.handleContainerOverflow) {
        this.removeContainerStyle(data, container);
      }

      if (this.hideSiblingNodes) {
        (0, _manageAriaHidden.showSiblings)(container, modal);
      }

      this.containers.splice(containerIdx, 1);
      this.data.splice(containerIdx, 1);
    } else if (this.hideSiblingNodes) {
      //otherwise make sure the next top modal is visible to a SR
      var _data$modals = data.modals[data.modals.length - 1],
          backdrop = _data$modals.backdrop,
          dialog = _data$modals.dialog;
      (0, _manageAriaHidden.ariaHidden)(false, dialog);
      (0, _manageAriaHidden.ariaHidden)(false, backdrop);
    }
  };

  _proto.isTopModal = function isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  };

  return ModalManager;
}();

var _default = ModalManager;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-overlays/Overlay.js":
/*!************************************************!*\
  !*** ./node_modules/react-overlays/Overlay.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _elementType = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/elementType */ "./node_modules/prop-types-extra/lib/elementType.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _Portal = _interopRequireDefault(__webpack_require__(/*! ./Portal */ "./node_modules/react-overlays/Portal.js"));

var _RootCloseWrapper = _interopRequireDefault(__webpack_require__(/*! ./RootCloseWrapper */ "./node_modules/react-overlays/RootCloseWrapper.js"));

var _reactPopper = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/index.js");

var _forwardRef = _interopRequireDefault(__webpack_require__(/*! react-context-toolbox/forwardRef */ "./node_modules/react-context-toolbox/forwardRef.js"));

var _WaitForContainer = _interopRequireDefault(__webpack_require__(/*! ./WaitForContainer */ "./node_modules/react-overlays/WaitForContainer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Built on top of `<Position/>` and `<Portal/>`, the overlay component is
 * great for custom tooltip overlays.
 */
var Overlay =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Overlay, _React$Component);

  function Overlay(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.handleHidden = function () {
      _this.setState({
        exited: true
      });

      if (_this.props.onExited) {
        var _this$props;

        (_this$props = _this.props).onExited.apply(_this$props, arguments);
      }
    };

    _this.state = {
      exited: !props.show
    };
    _this.onHiddenListener = _this.handleHidden.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._lastTarget = null;
    return _this;
  }

  Overlay.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if (nextProps.show) {
      return {
        exited: false
      };
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      return {
        exited: true
      };
    }

    return null;
  };

  var _proto = Overlay.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      target: this.getTarget()
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props === prevProps) return;
    var target = this.getTarget();

    if (target !== this.state.target) {
      this.setState({
        target: target
      });
    }
  };

  _proto.getTarget = function getTarget() {
    var target = this.props.target;
    target = typeof target === 'function' ? target() : target;
    return target && _reactDom.default.findDOMNode(target) || null;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        _0 = _this$props2.target,
        container = _this$props2.container,
        containerPadding = _this$props2.containerPadding,
        placement = _this$props2.placement,
        rootClose = _this$props2.rootClose,
        children = _this$props2.children,
        flip = _this$props2.flip,
        _this$props2$popperCo = _this$props2.popperConfig,
        popperConfig = _this$props2$popperCo === void 0 ? {} : _this$props2$popperCo,
        Transition = _this$props2.transition,
        props = _objectWithoutPropertiesLoose(_this$props2, ["target", "container", "containerPadding", "placement", "rootClose", "children", "flip", "popperConfig", "transition"]);

    var target = this.state.target; // Don't un-render the overlay while it's transitioning out.

    var mountOverlay = props.show || Transition && !this.state.exited;

    if (!mountOverlay) {
      // Don't bother showing anything if we don't have to.
      return null;
    }

    var child = children;
    var _popperConfig$modifie = popperConfig.modifiers,
        modifiers = _popperConfig$modifie === void 0 ? {} : _popperConfig$modifie;

    var popperProps = _extends({}, popperConfig, {
      placement: placement,
      referenceElement: target,
      enableEvents: props.show,
      modifiers: _extends({}, modifiers, {
        preventOverflow: _extends({
          padding: containerPadding || 5
        }, modifiers.preventOverflow),
        flip: _extends({
          enabled: !!flip
        }, modifiers.preventOverflow)
      })
    });

    child = _react.default.createElement(_reactPopper.Popper, popperProps, function (_ref) {
      var arrowProps = _ref.arrowProps,
          style = _ref.style,
          ref = _ref.ref,
          popper = _objectWithoutPropertiesLoose(_ref, ["arrowProps", "style", "ref"]);

      _this2.popper = popper;

      var innerChild = _this2.props.children(_extends({}, popper, {
        // popper doesn't set the initial placement
        placement: popper.placement || placement,
        show: props.show,
        arrowProps: arrowProps,
        props: {
          ref: ref,
          style: style
        }
      }));

      if (Transition) {
        var onExit = props.onExit,
            onExiting = props.onExiting,
            onEnter = props.onEnter,
            onEntering = props.onEntering,
            onEntered = props.onEntered;
        innerChild = _react.default.createElement(Transition, {
          in: props.show,
          appear: true,
          onExit: onExit,
          onExiting: onExiting,
          onExited: _this2.onHiddenListener,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered
        }, innerChild);
      }

      return innerChild;
    });

    if (rootClose) {
      child = _react.default.createElement(_RootCloseWrapper.default, {
        onRootClose: props.onHide,
        event: props.rootCloseEvent,
        disabled: props.rootCloseDisabled
      }, child);
    }

    return _react.default.createElement(_Portal.default, {
      container: container
    }, child);
  };

  return Overlay;
}(_react.default.Component);

Overlay.propTypes = _extends({}, _Portal.default.propTypes, {
  /**
   * Set the visibility of the Overlay
   */
  show: _propTypes.default.bool,

  /** Specify where the overlay element is positioned in relation to the target element */
  placement: _propTypes.default.oneOf(_reactPopper.placements),

  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: _propTypes.default.bool,

  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   outOfBoundaries: ?boolean,
   *   scheduleUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: _propTypes.default.func.isRequired,

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: _propTypes.default.object,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: _propTypes.default.bool,

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: _RootCloseWrapper.default.propTypes.event,

  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: _RootCloseWrapper.default.propTypes.disabled,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    var propType = _propTypes.default.func;

    if (props.rootClose) {
      propType = propType.isRequired;
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return propType.apply(void 0, [props].concat(args));
  },

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  transition: _elementType.default,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _propTypes.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _propTypes.default.func
});

var _default = (0, _forwardRef.default)(function (props, ref) {
  return _react.default.createElement(_WaitForContainer.default, {
    container: props.container
  }, function (container) {
    return _react.default.createElement(Overlay, _extends({}, props, {
      ref: ref,
      container: container
    }));
  });
}, {
  displayName: 'withContainer(Overlay)'
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-overlays/Portal.js":
/*!***********************************************!*\
  !*** ./node_modules/react-overlays/Portal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _componentOrElement = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/componentOrElement */ "./node_modules/prop-types-extra/lib/componentOrElement.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _WaitForContainer = _interopRequireDefault(__webpack_require__(/*! ./WaitForContainer */ "./node_modules/react-overlays/WaitForContainer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.render = function render() {
    var _this = this;

    return this.props.children ? _react.default.createElement(_WaitForContainer.default, {
      container: this.props.container,
      onContainerResolved: this.props.onRendered
    }, function (container) {
      return _reactDom.default.createPortal(_this.props.children, container);
    }) : null;
  };

  return Portal;
}(_react.default.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),
  onRendered: _propTypes.default.func
};
var _default = Portal;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-overlays/WaitForContainer.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-overlays/WaitForContainer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _componentOrElement = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/componentOrElement */ "./node_modules/prop-types-extra/lib/componentOrElement.js"));

var _inDOM = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _getContainer = _interopRequireDefault(__webpack_require__(/*! ./utils/getContainer */ "./node_modules/react-overlays/utils/getContainer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),
  onContainerResolved: _propTypes.default.func
};

var WaitForContainer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(WaitForContainer, _React$Component);

  function WaitForContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    if (!_inDOM.default) return _assertThisInitialized(_this);
    var container = _this.props.container;
    if (typeof container === 'function') container = container();

    if (container && !_reactDom.default.findDOMNode(container)) {
      // The container is a React component that has not yet been rendered.
      // Don't set the container node yet.
      return _assertThisInitialized(_this);
    }

    _this.setContainer(container);

    return _this;
  }

  var _proto = WaitForContainer.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps.container);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    if (!this._container) {
      this.setContainer(this.props.container);
      this.forceUpdate(this.props.onContainerResolved);
    } else if (this.props.onContainerResolved) {
      this.props.onContainerResolved();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._container = null;
  };

  _proto.setContainer = function setContainer(container) {
    this._container = (0, _getContainer.default)(container, (0, _ownerDocument.default)().body);
  };

  _proto.render = function render() {
    return this._container ? this.props.children(this._container) : null;
  };

  return WaitForContainer;
}(_react.default.Component);

WaitForContainer.propTypes = propTypes;
var _default = WaitForContainer;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-overlays/utils/getContainer.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-overlays/utils/getContainer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getContainer;

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainer(container, defaultContainer) {
  if (container == null) return defaultContainer;
  container = typeof container === 'function' ? container() : container;
  return _reactDom.default.findDOMNode(container) || null;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-overlays/utils/isOverflowing.js":
/*!************************************************************!*\
  !*** ./node_modules/react-overlays/utils/isOverflowing.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isOverflowing;

var _isWindow = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/isWindow */ "./node_modules/dom-helpers/query/isWindow.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = (0, _ownerDocument.default)(node);
  var win = (0, _isWindow.default)(doc);
  return doc.body.clientWidth < win.innerWidth;
}

function isOverflowing(container) {
  var win = (0, _isWindow.default)(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-overlays/utils/manageAriaHidden.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-overlays/utils/manageAriaHidden.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;
var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, exclude, cb) {
  exclude = [].concat(exclude);
  [].forEach.call(container.children, function (node) {
    if (exclude.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(show, node) {
  if (!node) return;

  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, _ref2) {
  var root = _ref2.root,
      backdrop = _ref2.backdrop;
  siblings(container, [root, backdrop], function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, _ref3) {
  var root = _ref3.root,
      backdrop = _ref3.backdrop;
  siblings(container, [root, backdrop], function (node) {
    return ariaHidden(false, node);
  });
}

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/Transition.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    var pt =  true ? _PropTypes.timeoutsShape : undefined;;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number
}).isRequired]) : undefined;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : undefined;
exports.classNamesShape = classNamesShape;

/***/ })

})
//# sourceMappingURL=index.js.f3108f4c9fddbe8dc484.hot-update.js.map