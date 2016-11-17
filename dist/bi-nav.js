(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["biNav"] = factory(require("jQuery"));
	else
		root["biNav"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (data) {
	  var userOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var option = (0, _objectAssign2.default)({}, defaultOptions, userOption);
	  var $this = (0, _jquery2.default)(this);
	  var element = (0, _dom2.default)(data);

	  // console.log(element);

	  $this.append(element);

	  (0, _jquery2.default)('.' + _style2.default.sup_li).hover(function enter() {
	    var $this1 = (0, _jquery2.default)(this);
	    $this1.addClass(getClassName($this1, option.width));
	  }, function leave() {
	    var $this1 = (0, _jquery2.default)(this);
	    $this1.removeClass(getClassName($this1, option.width));
	  });

	  (0, _jquery2.default)('.' + _style2.default.sub_li).click(function (e) {
	    var $this = (0, _jquery2.default)(this);
	    $this.siblings().find('ul').slideUp();
	    if ($this.find('ul').css('display') == 'block') {
	      removeArrowClassName($this.next('.' + _style2.default.arrow).length, $this);
	      $this.find('ul').slideUp();
	    } else {
	      addArrowClassName($this.next('.' + _style2.default.arrow).length, $this);
	      $this.find('ul').slideDown();
	    }
	    //$(this).find('ul').slideToggle();
	  });
	};

	var _objectAssign = __webpack_require__(1);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _dom = __webpack_require__(3);

	var _dom2 = _interopRequireDefault(_dom);

	var _style = __webpack_require__(4);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by yeyangmei on 16/11/11.
	 */
	var defaultOptions = {
	  width: 220
	};

	function getClassName(ctx, width) {
	  return ctx.width() === width ? _style2.default.sup_li_hover : _style2.default.sup_li_small_hover;
	}

	function addArrowClassName(opt, $this) {
	  return opt > 0 ? $this.next('.' + _style2.default.arrow).addClass(_style2.default.arrow_blue) : $this.find('.' + _style2.default.arrow).addClass(_style2.default.arrow_blue);
	}

	function removeArrowClassName(opt, $this) {
	  return opt > 0 ? $this.next('.' + _style2.default.arrow).removeClass(_style2.default.arrow_blue) : $this.find('.' + _style2.default.arrow).removeClass(_style2.default.arrow_blue);
	}

	;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (data) {
	  return (0, _nav2.default)((0, _objectAssign2.default)({
	    styles: _style2.default
	  }, data));
	};

	var _style = __webpack_require__(4);

	var _style2 = _interopRequireDefault(_style);

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _objectAssign = __webpack_require__(1);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _nav = __webpack_require__(11);

	var _nav2 = _interopRequireDefault(_nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "._2YqHBlc_uzJn86Nc4VbrFR {\n    width: 220px;\n    transition: all 0.1s ease;\n}\n\n._3DLhPv3PYGzmlnGXRB-sUf {\n    width:60px;\n\n}\n._3DLhPv3PYGzmlnGXRB-sUf ._2ahdBrU2tJGYwatiR1aVhU span {\n    opacity:0;\n}\n\nli {\n    list-style: none;\n    color: #fff;\n    line-height: 55px;\n    background-color: #2b2f3e;\n    position: relative;\n    white-space: nowrap;\n}\n._2ahdBrU2tJGYwatiR1aVhU:before {\n    content:'';\n    background-color:#428bca;\n    height:55px;\n    width: 3px;\n    vertical-align: middle;\n    position:absolute;\n    left:0;\n    top:0;\n    opacity:0;\n    transition: all 0.8s ease;\n}\n._3swOg7kKumbKN4fFLufukU:before, sup_li_small_hover:before {\n    background-color:#428bca;\n    opacity:1;\n}\n._3swOg7kKumbKN4fFLufukU, ._2xVG6r-n52iInBcyj9EW9P {\n    background-color:#1f2332;\n}\n\n._2ahdBrU2tJGYwatiR1aVhU:after {\n    content:'';\n    width:15px;\n    height:15px;\n    background:url(" + __webpack_require__(7) + ") no-repeat scroll 0 0 transparent;\n    position: absolute;\n    right: 10px;\n    top: 20px;\n    opacity: 0;\n    transition: all 0.8s ease;\n}\n._3swOg7kKumbKN4fFLufukU:after {\n    opacity:1;\n}\nem {\n    margin: 0 20px;\n    display:inline-block;\n}\nem img {\n    vertical-align: middle;\n}\n\nspan {\n    font-size:18px;\n}\n._3TloGq86zRMpXhLy5TcW5M {\n    position: absolute;\n    left:220px;\n    top:0;\n    display: none;\n    z-index: 1;\n}\n._1zbEhx_JW3HqDHetFNg7nC {\n    width:185px;\n    padding-left:35px;\n    background-color:#1f2332;\n}\n._1zbEhx_JW3HqDHetFNg7nC a {\n    color:#fff;\n    text-decoration:none;\n    display:block;\n}\n._1zbEhx_JW3HqDHetFNg7nC:hover, ._1zbEhx_JW3HqDHetFNg7nC a:hover {\n    color:#428bca;\n}\n._1zbEhx_JW3HqDHetFNg7nC:hover ._2FEoa1oxpCtxtLhc41WaHK {\n    background-image:url(" + __webpack_require__(8) + ");\n}\n._2FEoa1oxpCtxtLhc41WaHK {\n    background: url(" + __webpack_require__(9) + ") no-repeat scroll 0 0 transparent;\n    position: absolute;\n    right: 20px;\n    display: inline-block;\n    width:12px;\n    height: 12px;\n    top:22px;\n    transition: all 0.3s ease;\n}\n\n._3swOg7kKumbKN4fFLufukU ._3TloGq86zRMpXhLy5TcW5M, ._2xVG6r-n52iInBcyj9EW9P ._3TloGq86zRMpXhLy5TcW5M {\n    display:block;\n}\n._2xVG6r-n52iInBcyj9EW9P ._3TloGq86zRMpXhLy5TcW5M {\n    left:60px;\n}\na:hover {\n    color:#428bca;\n    text-decoration:none;\n}\n\n\n._1WuRjGJzt_uV0bNXXfuiR9 {\n    padding: 0;\n    height: 40px;\n    font-size: 16px;\n    padding-left: 20px;\n    width: 165px;\n    background-color:#1f2332;\n}\n._1WuRjGJzt_uV0bNXXfuiR9 a {\n    color:#fff;\n    text-decoration: none;\n    display: block;\n}\n._1WuRjGJzt_uV0bNXXfuiR9:before {\n    content: '';\n    width: 12px;\n    height: 39px;\n    border-left: 1px solid #428bca;\n    border-bottom: 1px solid #428bca;\n    display: inline-block;\n    position: absolute;\n    left: 0px;\n    top: -12px;\n}\n._30c0khK6DSziIwkRthIP2T:before {\n    border-left:0\n}\n._1gezMFZ2dRLuYNB5Fc9jDW {\n    display:none;\n}\n._1WuRjGJzt_uV0bNXXfuiR9:first-child::before {\n    border-left:0;\n}\n.nfF_YMszPEVyRY-FGcxLm {\n    transform:rotate(225deg);\n    -ms-transform:rotate(225deg);\n    -moz-transform:rotate(225deg);\n    -webkit-transform:rotate(225deg);\n    -o-transform:rotate(225deg);\n    transition: all 0.3s ease;\n\n}", ""]);

	// exports
	exports.locals = {
		"sup": "_2YqHBlc_uzJn86Nc4VbrFR",
		"sup_small": "_3DLhPv3PYGzmlnGXRB-sUf",
		"sup_li": "_2ahdBrU2tJGYwatiR1aVhU",
		"sup_li_hover": "_3swOg7kKumbKN4fFLufukU",
		"sup_li_small_hover": "_2xVG6r-n52iInBcyj9EW9P",
		"sub": "_3TloGq86zRMpXhLy5TcW5M",
		"sub_li": "_1zbEhx_JW3HqDHetFNg7nC",
		"arrow": "_2FEoa1oxpCtxtLhc41WaHK",
		"three_li": "_1WuRjGJzt_uV0bNXXfuiR9",
		"three_li_first": "_30c0khK6DSziIwkRthIP2T",
		"three_sub": "_1gezMFZ2dRLuYNB5Fc9jDW",
		"arrow_blue": "nfF_YMszPEVyRY-FGcxLm"
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAOCAYAAADjXQYbAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAbElEQVQY03XOIRJAYBRFYUWzFsUSZEUTrUBUJFkQRIIZRbUYSRA1SziCm/5579Xv3JkXARewR9YBA//VXrAoyLzgVJBYGAtvb50q2LygUNB7wQtgwaFlHsIsKEOYBFUInaAJYRS01gMPsFpff00IjmTkTQLEAAAAAElFTkSuQmCC"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAKElEQVQoz2NgwAKcuk/9d+o+9R+bHBMDiWAQamDE5Tmq2YAVDPdgBQBaiA0C9m8HDwAAAABJRU5ErkJggg=="

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAIklEQVQoz2NgwAL+QwE2OSYGEsEg1MCIy3NUswErGO7BCgDOMBQAdBF/9wAAAABJRU5ErkJggg=="

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(12);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (menu, styles) {pug_html = pug_html + "\u003C!--Created by yeyangmei on 16\u002F11\u002F15.\n--\u003E\u003Cul" + (pug.attr("class", pug.classes([styles.sup], [true]), false, true)) + "\u003E";
	// iterate menu
	;(function(){
	  var $$obj = menu;
	  if ('number' == typeof $$obj.length) {
	      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	        var firstLevel = $$obj[index];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.sup_li], [true]), false, true)) + "\u003E\u003Cem\u003E\u003Cimg" + (pug.attr("src", firstLevel.img_small, true, true)) + "\u003E\u003C\u002Fem\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = index) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cul" + (pug.attr("class", pug.classes([styles.sub], [true]), false, true)) + "\u003E";
	// iterate firstLevel.branch
	;(function(){
	  var $$obj = firstLevel.branch;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
	        var subLevel = $$obj[pug_index1];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.sub_li], [true]), false, true)) + "\u003E";
	if (subLevel.branch) {
	pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = subLevel.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (pug.attr("class", pug.classes([styles.arrow], [true]), false, true)) + "\u003E\u003C\u002Fspan\u003E\u003Cul" + (pug.attr("class", pug.classes([styles.three_sub], [true]), false, true)) + "\u003E";
	// iterate subLevel.branch
	;(function(){
	  var $$obj = subLevel.branch;
	  if ('number' == typeof $$obj.length) {
	      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	        var threeLevel = $$obj[index];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.three_li], [true]), false, true)) + "\u003E\u003Ca" + (pug.attr("href", threeLevel.name, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = threeLevel.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;
	      var threeLevel = $$obj[index];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.three_li], [true]), false, true)) + "\u003E\u003Ca" + (pug.attr("href", threeLevel.name, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = threeLevel.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);

	pug_html = pug_html + "\u003C\u002Ful\u003E";
	}
	else {
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", subLevel.name, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = subLevel.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index1 in $$obj) {
	      $$l++;
	      var subLevel = $$obj[pug_index1];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.sub_li], [true]), false, true)) + "\u003E";
	if (subLevel.branch) {
	pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = subLevel.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (pug.attr("class", pug.classes([styles.arrow], [true]), false, true)) + "\u003E\u003C\u002Fspan\u003E\u003Cul" + (pug.attr("class", pug.classes([styles.three_sub], [true]), false, true)) + "\u003E";
	// iterate subLevel.branch
	;(function(){
	  var $$obj = subLevel.branch;
	  if ('number' == typeof $$obj.length) {
	      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	        var threeLevel = $$obj[index];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.three_li], [true]), false, true)) + "\u003E\u003Ca" + (pug.attr("href", threeLevel.name, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = threeLevel.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;
	      var threeLevel = $$obj[index];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.three_li], [true]), false, true)) + "\u003E\u003Ca" + (pug.attr("href", threeLevel.name, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = threeLevel.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);

	pug_html = pug_html + "\u003C\u002Ful\u003E";
	}
	else {
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", subLevel.name, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = subLevel.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);

	pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;
	      var firstLevel = $$obj[index];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.sup_li], [true]), false, true)) + "\u003E\u003Cem\u003E\u003Cimg" + (pug.attr("src", firstLevel.img_small, true, true)) + "\u003E\u003C\u002Fem\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = index) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cul" + (pug.attr("class", pug.classes([styles.sub], [true]), false, true)) + "\u003E";
	// iterate firstLevel.branch
	;(function(){
	  var $$obj = firstLevel.branch;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
	        var subLevel = $$obj[pug_index4];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.sub_li], [true]), false, true)) + "\u003E";
	if (subLevel.branch) {
	pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = subLevel.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (pug.attr("class", pug.classes([styles.arrow], [true]), false, true)) + "\u003E\u003C\u002Fspan\u003E\u003Cul" + (pug.attr("class", pug.classes([styles.three_sub], [true]), false, true)) + "\u003E";
	// iterate subLevel.branch
	;(function(){
	  var $$obj = subLevel.branch;
	  if ('number' == typeof $$obj.length) {
	      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	        var threeLevel = $$obj[index];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.three_li], [true]), false, true)) + "\u003E\u003Ca" + (pug.attr("href", threeLevel.name, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = threeLevel.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;
	      var threeLevel = $$obj[index];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.three_li], [true]), false, true)) + "\u003E\u003Ca" + (pug.attr("href", threeLevel.name, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = threeLevel.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);

	pug_html = pug_html + "\u003C\u002Ful\u003E";
	}
	else {
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", subLevel.name, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = subLevel.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index4 in $$obj) {
	      $$l++;
	      var subLevel = $$obj[pug_index4];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.sub_li], [true]), false, true)) + "\u003E";
	if (subLevel.branch) {
	pug_html = pug_html + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = subLevel.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (pug.attr("class", pug.classes([styles.arrow], [true]), false, true)) + "\u003E\u003C\u002Fspan\u003E\u003Cul" + (pug.attr("class", pug.classes([styles.three_sub], [true]), false, true)) + "\u003E";
	// iterate subLevel.branch
	;(function(){
	  var $$obj = subLevel.branch;
	  if ('number' == typeof $$obj.length) {
	      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	        var threeLevel = $$obj[index];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.three_li], [true]), false, true)) + "\u003E\u003Ca" + (pug.attr("href", threeLevel.name, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = threeLevel.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;
	      var threeLevel = $$obj[index];
	pug_html = pug_html + "\u003Cli" + (pug.attr("class", pug.classes([styles.three_li], [true]), false, true)) + "\u003E\u003Ca" + (pug.attr("href", threeLevel.name, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = threeLevel.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);

	pug_html = pug_html + "\u003C\u002Ful\u003E";
	}
	else {
	pug_html = pug_html + "\u003Ca" + (pug.attr("href", subLevel.name, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = subLevel.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);

	pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);

	pug_html = pug_html + "\u003C\u002Ful\u003E";}.call(this,"menu" in locals_for_with?locals_for_with.menu:typeof menu!=="undefined"?menu:undefined,"styles" in locals_for_with?locals_for_with.styles:typeof styles!=="undefined"?styles:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var pug_has_own_property = Object.prototype.hasOwnProperty;

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = pug_merge;
	function pug_merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = pug_merge(attrs, a[i]);
	    }
	    return attrs;
	  }

	  for (var key in b) {
	    if (key === 'class') {
	      var valA = a[key] || [];
	      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
	    } else if (key === 'style') {
	      var valA = pug_style(a[key]);
	      var valB = pug_style(b[key]);
	      a[key] = valA + (valA && valB && ';') + valB;
	    } else {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Process array, object, or string as a string of classes delimited by a space.
	 *
	 * If `val` is an array, all members of it and its subarrays are counted as
	 * classes. If `escaping` is an array, then whether or not the item in `val` is
	 * escaped depends on the corresponding item in `escaping`. If `escaping` is
	 * not an array, no escaping is done.
	 *
	 * If `val` is an object, all the keys whose value is truthy are counted as
	 * classes. No escaping is done.
	 *
	 * If `val` is a string, it is counted as a class. No escaping is done.
	 *
	 * @param {(Array.<string>|Object.<string, boolean>|string)} val
	 * @param {?Array.<string>} escaping
	 * @return {String}
	 */
	exports.classes = pug_classes;
	function pug_classes_array(val, escaping) {
	  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
	  for (var i = 0; i < val.length; i++) {
	    className = pug_classes(val[i]);
	    if (!className) continue;
	    escapeEnabled && escaping[i] && (className = pug_escape(className));
	    classString = classString + padding + className;
	    padding = ' ';
	  }
	  return classString;
	}
	function pug_classes_object(val) {
	  var classString = '', padding = '';
	  for (var key in val) {
	    if (key && val[key] && pug_has_own_property.call(val, key)) {
	      classString = classString + padding + key;
	      padding = ' ';
	    }
	  }
	  return classString;
	}
	function pug_classes(val, escaping) {
	  if (Array.isArray(val)) {
	    return pug_classes_array(val, escaping);
	  } else if (val && typeof val === 'object') {
	    return pug_classes_object(val);
	  } else {
	    return val || '';
	  }
	}

	/**
	 * Convert object or string to a string of CSS styles delimited by a semicolon.
	 *
	 * @param {(Object.<string, string>|string)} val
	 * @return {String}
	 */

	exports.style = pug_style;
	function pug_style(val) {
	  if (!val) return '';
	  if (typeof val === 'object') {
	    var out = '', delim = '';
	    for (var style in val) {
	      /* istanbul ignore else */
	      if (pug_has_own_property.call(val, style)) {
	        out = out + delim + style + ':' + val[style];
	        delim = ';';
	      }
	    }
	    return out;
	  } else {
	    val = '' + val;
	    if (val[val.length - 1] === ';') return val.slice(0, -1);
	    return val;
	  }
	};

	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = pug_attr;
	function pug_attr(key, val, escaped, terse) {
	  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
	    return '';
	  }
	  if (val === true) {
	    return ' ' + (terse ? key : key + '="' + key + '"');
	  }
	  if (typeof val.toJSON === 'function') {
	    val = val.toJSON();
	  }
	  if (typeof val !== 'string') {
	    val = JSON.stringify(val);
	    if (!escaped && val.indexOf('"') !== -1) {
	      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
	    }
	  }
	  if (escaped) val = pug_escape(val);
	  return ' ' + key + '="' + val + '"';
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} terse whether to use HTML5 terse boolean attributes
	 * @return {String}
	 */
	exports.attrs = pug_attrs;
	function pug_attrs(obj, terse){
	  var attrs = '';

	  for (var key in obj) {
	    if (pug_has_own_property.call(obj, key)) {
	      var val = obj[key];

	      if ('class' === key) {
	        val = pug_classes(val);
	        attrs = pug_attr(key, val, false, terse) + attrs;
	        continue;
	      }
	      if ('style' === key) {
	        val = pug_style(val);
	      }
	      attrs += pug_attr(key, val, false, terse);
	    }
	  }

	  return attrs;
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var pug_match_html = /["&<>]/;
	exports.escape = pug_escape;
	function pug_escape(_html){
	  var html = '' + _html;
	  var regexResult = pug_match_html.exec(html);
	  if (!regexResult) return _html;

	  var result = '';
	  var i, lastIndex, escape;
	  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
	    switch (html.charCodeAt(i)) {
	      case 34: escape = '&quot;'; break;
	      case 38: escape = '&amp;'; break;
	      case 60: escape = '&lt;'; break;
	      case 62: escape = '&gt;'; break;
	      default: continue;
	    }
	    if (lastIndex !== i) result += html.substring(lastIndex, i);
	    lastIndex = i + 1;
	    result += escape;
	  }
	  if (lastIndex !== i) return result + html.substring(lastIndex, i);
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the pug in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @param {String} str original source
	 * @api private
	 */

	exports.rethrow = pug_rethrow;
	function pug_rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(13).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    pug_rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Pug') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ }
/******/ ])
});
;