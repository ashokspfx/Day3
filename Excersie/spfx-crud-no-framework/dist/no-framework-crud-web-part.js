define("571fa621-e184-406e-8175-74815d8e2024_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-webpart-base","@microsoft/sp-lodash-subset","@microsoft/sp-http","NoFrameworkCrudWebPartStrings"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_10__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(1);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: external "@microsoft/sp-webpart-base"
var sp_webpart_base_ = __webpack_require__(2);
var sp_webpart_base__default = /*#__PURE__*/__webpack_require__.n(sp_webpart_base_);

// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(3);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// EXTERNAL MODULE: external "@microsoft/sp-http"
var sp_http_ = __webpack_require__(4);
var sp_http__default = /*#__PURE__*/__webpack_require__.n(sp_http_);

// CONCATENATED MODULE: ./lib/webparts/noFrameworkCrud/NoFrameworkCrudWebPart.module.scss.js
/* tslint:disable */
__webpack_require__(5);
var styles = {
    noFrameworkCrud: 'noFrameworkCrud_c34cf888',
    container: 'container_c34cf888',
    row: 'row_c34cf888',
    column: 'column_c34cf888',
    'ms-Grid': 'ms-Grid_c34cf888',
    title: 'title_c34cf888',
    subTitle: 'subTitle_c34cf888',
    description: 'description_c34cf888',
    button: 'button_c34cf888',
    label: 'label_c34cf888',
};
/* harmony default export */ var NoFrameworkCrudWebPart_module_scss = (styles);
/* tslint:enable */ 


// EXTERNAL MODULE: external "NoFrameworkCrudWebPartStrings"
var external__NoFrameworkCrudWebPartStrings_ = __webpack_require__(10);
var external__NoFrameworkCrudWebPartStrings__default = /*#__PURE__*/__webpack_require__.n(external__NoFrameworkCrudWebPartStrings_);

// CONCATENATED MODULE: ./lib/webparts/noFrameworkCrud/NoFrameworkCrudWebPart.js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var NoFrameworkCrudWebPart_NoFrameworkCrudWebPart = (function (_super) {
    __extends(NoFrameworkCrudWebPart, _super);
    function NoFrameworkCrudWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listItemEntityTypeName = undefined;
        return _this;
    }
    NoFrameworkCrudWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + NoFrameworkCrudWebPart_module_scss.noFrameworkCrud + "\">\n        <div class=\"" + NoFrameworkCrudWebPart_module_scss.container + "\">\n          <div class=\"" + NoFrameworkCrudWebPart_module_scss.row + "\">\n            <div class=\"" + NoFrameworkCrudWebPart_module_scss.column + "\">\n              <span class=\"" + NoFrameworkCrudWebPart_module_scss.title + "\">CRUD operations</span>\n              <p class=\"" + NoFrameworkCrudWebPart_module_scss.subTitle + "\">No Framework</p>\n              <p class=\"" + NoFrameworkCrudWebPart_module_scss.description + "\">Name: " + Object(sp_lodash_subset_["escape"])(this.properties.listName) + "</p>\n\n              <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + NoFrameworkCrudWebPart_module_scss.row + "\">\n                <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n                  <button class=\"" + NoFrameworkCrudWebPart_module_scss.button + " create-Button\">\n                    <span class=\"" + NoFrameworkCrudWebPart_module_scss.label + "\">Create item</span>\n                  </button>\n                  <button class=\"" + NoFrameworkCrudWebPart_module_scss.button + " read-Button\">\n                    <span class=\"" + NoFrameworkCrudWebPart_module_scss.label + "\">Read item</span>\n                  </button>\n                </div>\n              </div>\n\n              <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + NoFrameworkCrudWebPart_module_scss.row + "\">\n                <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n                  <button class=\"" + NoFrameworkCrudWebPart_module_scss.button + " update-Button\">\n                    <span class=\"" + NoFrameworkCrudWebPart_module_scss.label + "\">Update item</span>\n                  </button>\n                  <button class=\"" + NoFrameworkCrudWebPart_module_scss.button + " delete-Button\">\n                    <span class=\"" + NoFrameworkCrudWebPart_module_scss.label + "\">Delete item</span>\n                  </button>\n                </div>\n              </div>\n\n              <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + NoFrameworkCrudWebPart_module_scss.row + "\">\n                <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n                  <div class=\"status\"></div>\n                  <ul class=\"items\"><ul>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>";
        this.setButtonsEventHandlers();
    };
    NoFrameworkCrudWebPart.prototype.setButtonsEventHandlers = function () {
        var webPart = this;
        this.domElement.querySelector('button.create-Button').addEventListener('click', function () { webPart.createItem(); });
        this.domElement.querySelector('button.read-Button').addEventListener('click', function () { webPart.readItem(); });
        this.domElement.querySelector('button.update-Button').addEventListener('click', function () { webPart.updateItem(); });
        this.domElement.querySelector('button.delete-Button').addEventListener('click', function () { webPart.deleteItem(); });
    };
    NoFrameworkCrudWebPart.prototype.createItem = function () {
        var _this = this;
        var body = JSON.stringify({
            'Title': "Item " + new Date()
        });
        this.context.spHttpClient.post(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + this.properties.listName + "')/items", sp_http_["SPHttpClient"].configurations.v1, {
            headers: {
                'Accept': 'application/json;odata=nometadata',
                'Content-type': 'application/json;odata=nometadata',
                'odata-version': ''
            },
            body: body
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (item) {
            _this.updateStatus("Item '" + item.Title + "' (ID: " + item.Id + ") successfully created");
        }, function (error) {
            _this.updateStatus('Error while creating the item: ' + error);
        });
    };
    NoFrameworkCrudWebPart.prototype.updateStatus = function (status, items) {
        if (items === void 0) { items = []; }
        this.domElement.querySelector('.status').innerHTML = status;
        this.updateItemsHtml(items);
    };
    NoFrameworkCrudWebPart.prototype.updateItemsHtml = function (items) {
        this.domElement.querySelector('.items').innerHTML = items.map(function (item) { return "<li>" + item.Title + " (" + item.Id + ")</li>"; }).join("");
    };
    NoFrameworkCrudWebPart.prototype.readItem = function () {
        var _this = this;
        this.getLatestItemId()
            .then(function (itemId) {
            if (itemId === -1) {
                throw new Error('No items found in the list');
            }
            _this.updateStatus("Loading information about item ID: " + itemId + "...");
            return _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + _this.properties.listName + "')/items(" + itemId + ")?$select=Title,Id", sp_http_["SPHttpClient"].configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            });
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (item) {
            _this.updateStatus("Item ID: " + item.Id + ", Title: " + item.Title);
        }, function (error) {
            _this.updateStatus('Loading latest item failed with error: ' + error);
        });
    };
    NoFrameworkCrudWebPart.prototype.updateItem = function () {
        var _this = this;
        var latestItemId = undefined;
        this.updateStatus('Loading latest item...');
        this.getLatestItemId()
            .then(function (itemId) {
            if (itemId === -1) {
                throw new Error('No items found in the list');
            }
            latestItemId = itemId;
            _this.updateStatus("Loading information about item ID: " + itemId + "...");
            return _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + _this.properties.listName + "')/items(" + latestItemId + ")?$select=Title,Id", sp_http_["SPHttpClient"].configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            });
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (item) {
            _this.updateStatus("Item ID1: " + item.Id + ", Title: " + item.Title);
            var body = JSON.stringify({
                'Title': "Updated Item " + new Date()
            });
            _this.context.spHttpClient.post(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + _this.properties.listName + "')/items(" + item.Id + ")", sp_http_["SPHttpClient"].configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'Content-type': 'application/json;odata=nometadata',
                    'odata-version': '',
                    'IF-MATCH': '*',
                    'X-HTTP-Method': 'MERGE'
                },
                body: body
            })
                .then(function (response) {
                _this.updateStatus("Item with ID: " + latestItemId + " successfully updated");
            }, function (error) {
                _this.updateStatus("Error updating item: " + error);
            });
        });
    };
    NoFrameworkCrudWebPart.prototype.deleteItem = function () {
        var _this = this;
        if (!window.confirm('Are you sure you want to delete the latest item?')) {
            return;
        }
        this.updateStatus('Loading latest items...');
        var latestItemId = undefined;
        var etag = undefined;
        this.getLatestItemId()
            .then(function (itemId) {
            if (itemId === -1) {
                throw new Error('No items found in the list');
            }
            latestItemId = itemId;
            _this.updateStatus("Loading information about item ID: " + latestItemId + "...");
            return _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + _this.properties.listName + "')/items(" + latestItemId + ")?$select=Id", sp_http_["SPHttpClient"].configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            });
        })
            .then(function (response) {
            etag = response.headers.get('ETag');
            return response.json();
        })
            .then(function (item) {
            _this.updateStatus("Deleting item with ID: " + latestItemId + "...");
            return _this.context.spHttpClient.post(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + _this.properties.listName + "')/items(" + item.Id + ")", sp_http_["SPHttpClient"].configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'Content-type': 'application/json;odata=verbose',
                    'odata-version': '',
                    'IF-MATCH': etag,
                    'X-HTTP-Method': 'DELETE'
                }
            });
        })
            .then(function (response) {
            _this.updateStatus("Item with ID: " + latestItemId + " successfully deleted");
        }, function (error) {
            _this.updateStatus("Error deleting item: " + error);
        });
    };
    NoFrameworkCrudWebPart.prototype.getLatestItemId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + _this.properties.listName + "')/items?$orderby=Id desc&$top=1&$select=id", sp_http_["SPHttpClient"].configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            })
                .then(function (response) {
                return response.json();
            }, function (error) {
                reject(error);
            })
                .then(function (response) {
                if (response.value.length === 0) {
                    resolve(-1);
                }
                else {
                    resolve(response.value[0].Id);
                }
            });
        });
    };
    Object.defineProperty(NoFrameworkCrudWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    NoFrameworkCrudWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: external__NoFrameworkCrudWebPartStrings_["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: external__NoFrameworkCrudWebPartStrings_["BasicGroupName"],
                            groupFields: [
                                Object(sp_webpart_base_["PropertyPaneTextField"])('listName', {
                                    label: external__NoFrameworkCrudWebPartStrings_["ListNameFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return NoFrameworkCrudWebPart;
}(sp_webpart_base_["BaseClientSideWebPart"]));
/* harmony default export */ var noFrameworkCrud_NoFrameworkCrudWebPart = __webpack_exports__["default"] = (NoFrameworkCrudWebPart_NoFrameworkCrudWebPart);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(6);
var loader = __webpack_require__(8);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".noFrameworkCrud_c34cf888 .container_c34cf888{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.noFrameworkCrud_c34cf888 .row_c34cf888{margin:0 -8px;box-sizing:border-box;color:\"[theme:white, default: #ffffff]\";background-color:\"[theme:themeDark, default: #005a9e]\";padding:20px}.noFrameworkCrud_c34cf888 .row_c34cf888:after,.noFrameworkCrud_c34cf888 .row_c34cf888:before{display:table;content:\"\";line-height:0}.noFrameworkCrud_c34cf888 .row_c34cf888:after{clear:both}.noFrameworkCrud_c34cf888 .column_c34cf888{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .noFrameworkCrud_c34cf888 .column_c34cf888{float:left}[dir=rtl] .noFrameworkCrud_c34cf888 .column_c34cf888{float:right}.noFrameworkCrud_c34cf888 .column_c34cf888 .ms-Grid_c34cf888{padding:0}@media (min-width:640px){.noFrameworkCrud_c34cf888 .column_c34cf888{width:83.33333333333334%}}@media (min-width:1024px){.noFrameworkCrud_c34cf888 .column_c34cf888{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .noFrameworkCrud_c34cf888 .column_c34cf888{left:16.66667%}[dir=rtl] .noFrameworkCrud_c34cf888 .column_c34cf888{right:16.66667%}}@media (min-width:640px){[dir=ltr] .noFrameworkCrud_c34cf888 .column_c34cf888{left:8.33333%}[dir=rtl] .noFrameworkCrud_c34cf888 .column_c34cf888{right:8.33333%}}.noFrameworkCrud_c34cf888 .title_c34cf888{font-size:21px;font-weight:100;color:\"[theme:white, default: #ffffff]\"}.noFrameworkCrud_c34cf888 .description_c34cf888,.noFrameworkCrud_c34cf888 .subTitle_c34cf888{font-size:17px;font-weight:300;color:\"[theme:white, default: #ffffff]\"}.noFrameworkCrud_c34cf888 .button_c34cf888{text-decoration:none;height:32px;min-width:80px;background-color:\"[theme:themePrimary, default: #0078d4]\";border-color:\"[theme:themePrimary, default: #0078d4]\";color:\"[theme:white, default: #ffffff]\";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.noFrameworkCrud_c34cf888 .button_c34cf888 .label_c34cf888{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ })
/******/ ])});;
//# sourceMappingURL=no-framework-crud-web-part.js.map