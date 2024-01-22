"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Lemon-Regular.ttf */ "./src/fonts/Lemon-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/background.jpg */ "./src/imgs/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
@font-face {

    font-family: 'restaurant';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});

}

body

{
    display: flex;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: 33.35%;
    justify-content: center;
    margin: 0; 
    height: 100vh;
    width: auto;
    
    
}


.nav-bar
{
background-color: bisque;
width: 40em;
height: 8em;
display: flex;
align-items: center;
justify-content:space-evenly;
border-bottom: 1px solid black;
}

.btn
{
    font-family: restaurant, 'Times New Roman', Times, serif;
    text-shadow: 4px 4px grey ;
    font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 7em;
    height: 80%;
}
.btn:hover
{
    cursor: pointer;
    text-decoration: underline;
}

.btn:active
{
    position: relative;
    top: 2px;
    text-shadow: 2px 2px grey;
}

.menu
{
    background-color: bisque;
    width: 40em;
    min-height: calc(100vh - 10em - 1px); ;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;
}

.title
{
    font-size: 4em;
    font-family: restaurant, 'Times New Roman', Times, serif;

}

.index-desc
{
    padding: 2em;
    font-size: 2em;
    font-weight: 100;
    font-family:'Times New Roman', Times, serif;
    text-align: justify;

}

.product-container{
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
}

.product-desc
{
    padding: 10px;
    font-size: 2em;
}

.product-price
{
    font-family: restaurant, 'Times New Roman', Times, serif;
    font-size: 2em;
}

.product-img
{
    height: 13em;
    width: 25em;
}


.sched-container
{
    padding: 1em;
    display: grid;
    width: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.3fr 1fr;
    justify-items: center;
    border: double 30px rgb(80, 32, 0);
    align-items: center;
    justify-content: center;
    
}

.sched-container > .title{
    font-size: 3em;
    grid-area: 1/1/2/3;
}

.sched-open
{
    font-size: 2em;
    grid-column: 1/3;
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.home-desc
{
    margin-bottom: 1em;
    font-size: 2em;
    padding: 2em;
    text-align: justify;
    border-bottom: 1px solid black;
}


.contact-container
{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: double 20px rgb(80, 32, 0);
    padding: 0.5em;
  
}

.contact-desc
{
    font-size: 2em;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;;IAEI,yBAAyB;IACzB,4CAAmC;;AAEvC;;AAEA;;;IAGI,aAAa;IACb,mDAAsC;IACtC,uBAAuB;IACvB,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,WAAW;;;AAGf;;;AAGA;;AAEA,wBAAwB;AACxB,WAAW;AACX,WAAW;AACX,aAAa;AACb,mBAAmB;AACnB,4BAA4B;AAC5B,8BAA8B;AAC9B;;AAEA;;IAEI,wDAAwD;IACxD,0BAA0B;IAC1B,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,UAAU;IACV,WAAW;AACf;AACA;;IAEI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;;IAEI,kBAAkB;IAClB,QAAQ;IACR,yBAAyB;AAC7B;;AAEA;;IAEI,wBAAwB;IACxB,WAAW;IACX,oCAAoC;IACpC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;IAEI,cAAc;IACd,wDAAwD;;AAE5D;;AAEA;;IAEI,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,2CAA2C;IAC3C,mBAAmB;;AAEvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;;IAEI,aAAa;IACb,cAAc;AAClB;;AAEA;;IAEI,wDAAwD;IACxD,cAAc;AAClB;;AAEA;;IAEI,YAAY;IACZ,WAAW;AACf;;;AAGA;;IAEI,YAAY;IACZ,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,6BAA6B;IAC7B,qBAAqB;IACrB,kCAAkC;IAClC,mBAAmB;IACnB,uBAAuB;;AAE3B;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;;IAEI,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;;IAEI,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;AAClC;;;AAGA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,kCAAkC;IAClC,cAAc;;AAElB;;AAEA;;IAEI,cAAc;AAClB","sourcesContent":["\n@font-face {\n\n    font-family: 'restaurant';\n    src: url('fonts/Lemon-Regular.ttf');\n\n}\n\nbody\n\n{\n    display: flex;\n    background: url(./imgs/background.jpg);\n    background-size: 33.35%;\n    justify-content: center;\n    margin: 0; \n    height: 100vh;\n    width: auto;\n    \n    \n}\n\n\n.nav-bar\n{\nbackground-color: bisque;\nwidth: 40em;\nheight: 8em;\ndisplay: flex;\nalign-items: center;\njustify-content:space-evenly;\nborder-bottom: 1px solid black;\n}\n\n.btn\n{\n    font-family: restaurant, 'Times New Roman', Times, serif;\n    text-shadow: 4px 4px grey ;\n    font-size: 2em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    width: 7em;\n    height: 80%;\n}\n.btn:hover\n{\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n.btn:active\n{\n    position: relative;\n    top: 2px;\n    text-shadow: 2px 2px grey;\n}\n\n.menu\n{\n    background-color: bisque;\n    width: 40em;\n    min-height: calc(100vh - 10em - 1px); ;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 2em;\n}\n\n.title\n{\n    font-size: 4em;\n    font-family: restaurant, 'Times New Roman', Times, serif;\n\n}\n\n.index-desc\n{\n    padding: 2em;\n    font-size: 2em;\n    font-weight: 100;\n    font-family:'Times New Roman', Times, serif;\n    text-align: justify;\n\n}\n\n.product-container{\n    padding: 1em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: justify;\n}\n\n.product-desc\n{\n    padding: 10px;\n    font-size: 2em;\n}\n\n.product-price\n{\n    font-family: restaurant, 'Times New Roman', Times, serif;\n    font-size: 2em;\n}\n\n.product-img\n{\n    height: 13em;\n    width: 25em;\n}\n\n\n.sched-container\n{\n    padding: 1em;\n    display: grid;\n    width: auto;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.3fr 1fr;\n    justify-items: center;\n    border: double 30px rgb(80, 32, 0);\n    align-items: center;\n    justify-content: center;\n    \n}\n\n.sched-container > .title{\n    font-size: 3em;\n    grid-area: 1/1/2/3;\n}\n\n.sched-open\n{\n    font-size: 2em;\n    grid-column: 1/3;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.home-desc\n{\n    margin-bottom: 1em;\n    font-size: 2em;\n    padding: 2em;\n    text-align: justify;\n    border-bottom: 1px solid black;\n}\n\n\n.contact-container\n{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    border: double 20px rgb(80, 32, 0);\n    padding: 0.5em;\n  \n}\n\n.contact-desc\n{\n    font-size: 2em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function createContact()
{
    
    const contact = document.createElement('div')
    const main = document.querySelector('#container');
    contact.classList.add('menu')
    main.removeChild(main.lastChild);
    main.appendChild(contact);

    displayContact(contact);
    return contact;

}

function displayContact(contact)
{
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    const contactTitle = document.createElement('div');
    contactTitle.classList.add('title');
    contactTitle.textContent = 'Contacts';
    contact.appendChild(contactTitle);
    contact.appendChild(contactContainer);

    const contactDesc = document.createElement('div');
    contactDesc.classList.add('contact-desc');
    const contactsObj = contacts();
    for (const key in contactsObj.contacts) {
        const contactList = document.createElement('div');
        contactList.textContent =key +': '+ contactsObj.contacts[key];
        contactDesc.appendChild(contactList);
    }
    contactContainer.appendChild(contactDesc);

}



function contacts()
{
    const contacts = {
        emailOne: 'EmailOne@email.com',
        emailTwo: 'EmailTwo@email.com',
        telOne: '1234-1234',
        telTwo: '6789-6789',
        adress: '43 Fulton Rd.Lakeville, MN 55044',
    }
    return {contacts};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome()
{
    
    const home = document.createElement('div')
    const main = document.querySelector('#container');
    home.classList.add('menu')
    main.removeChild(main.lastChild);

    main.appendChild(home);
    displayDescription(home);
    displaySchedules(home);

    return home;

}

function displayDescription(home)
{
    const description = document.createElement('div');
    const title = document.createElement('div');
    title.textContent = 'Our Restaurant';
    title.classList.add('title');
    description.textContent ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et sodales metus. Nam vel justo scelerisque dolor commodo scelerisque. Donec sagittis orci in posuere porta. Ut lacinia condimentum turpis sed vehicula. Praesent rhoncus massa non felis vestibulum, ut malesuada mi vulputate. Aliquam in diam dignissim, euismod ligula et, malesuada risus. Donec varius enim non felis scelerisque posuere. In vitae orci ante. Integer in nisi tortor. Duis felis urna, varius vitae leo quis, cursus venenatis sem. Praesent ultricies facilisis arcu vitae varius. Nulla facilisi.'
    description.classList.add('home-desc');
    home.appendChild(title);
    home.appendChild(description);
}



function displaySchedules(home)
{
    const schedules = schedulesRest();
    const schedulesContainer = document.createElement('div')
    schedulesContainer.classList.add('sched-container');
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Schedules'
    schedulesContainer.appendChild(title);
    const schedOpen = document.createElement('div');
    schedOpen.classList.add('sched-open');
    schedulesContainer.appendChild(schedOpen);

        for(let key in schedules.open)
        {
            const schedDom = document.createElement('div');
            
            schedDom.textContent = schedules.sched[key] +':'+ schedules.open[key] +' - '+ schedules.closed[key];
            schedOpen.appendChild(schedDom);
        }
        home.appendChild(schedulesContainer);

}

function schedulesRest()
{
    const open = [
        '18:00',
        '18:00',
        '18:00',
        '18:00',
        '18:00',
        '20:00',
        'CLOSED',
    ]

    const closed = [
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '02:00',
        '04:00',
        'CLOSED',
    ]
    const sched = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'saturday',
        'Sunday',
    ]


    return{closed,open,sched}
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





createMainDom();

function createMainDom() {
    const main = document.querySelector('#container');
    navBar(main);
    indexContainer(main);

}



function navBar(main) {


    const navBar = document.createElement('div');
        navBar.classList.add('nav-bar');
    const firstButton = document.createElement('div');
        firstButton.classList.add('btn');
        firstButton.textContent = 'Home';
        navBar.appendChild(firstButton);
    const secondButton = document.createElement('div');
        secondButton.classList.add('btn');
        secondButton.textContent = 'Menu';
        navBar.appendChild(secondButton);
    const thirdButton = document.createElement('div');
        thirdButton.classList.add('btn');
        thirdButton.textContent = 'Contact';
        navBar.appendChild(thirdButton);
        main.appendChild(navBar);



    firstButton.addEventListener('click', function () { (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])() });
    secondButton.addEventListener('click', function () { (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])() });
    thirdButton.addEventListener('click', function () { (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])() });

}

function indexContainer(main) {

    const mainMenu = document.createElement('div');
        mainMenu.classList.add('menu');
        main.appendChild(mainMenu);
    const indexTitle = document.createElement('div');
        indexTitle.classList.add('title');
        indexTitle.textContent = 'Welcome';
    const indexDesc = document.createElement('div');
        indexDesc.classList.add('index-desc');
        indexDesc.textContent = 'Here you can see our informations on Home tab on the Navigation bar Above, the Menu of the Odin Restaurant in Menu Tab, Contact us in the Contact Tab'
        mainMenu.appendChild(indexTitle);
        mainMenu.appendChild(indexDesc);




}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_lasagna_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/lasagna.png */ "./src/imgs/lasagna.png");
/* harmony import */ var _imgs_pizza_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/pizza.png */ "./src/imgs/pizza.png");
/* harmony import */ var _imgs_hamburguer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/hamburguer.png */ "./src/imgs/hamburguer.png");
/* harmony import */ var _imgs_ramen_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/ramen.png */ "./src/imgs/ramen.png");





function createMenu()
{
    
    const menu = document.createElement('div')
    const main = document.querySelector('#container');
    menu.classList.add('menu')
    main.removeChild(main.lastChild);
    main.appendChild(menu);

    displayProducts(menu);

  
    return menu;

}

function displayProducts(menu)
{
    const product = productStock();

    for(let keys in product.meals)
    {
        const prodContainer = document.createElement('div');
            prodContainer.classList.add('product-container')
                menu.appendChild(prodContainer);
        const prodItem = document.createElement('div');
            prodItem.classList.add('title');
            prodItem.textContent = product.meals[keys];
                prodContainer.appendChild(prodItem);
        const prodImg = document.createElement('img');
            prodImg.src = product.prodImg[keys];
            prodImg.classList.add('product-img');
                prodContainer.appendChild(prodImg);        
        const prodDesc = document.createElement('div');
            prodDesc.textContent = product.description[keys];
            prodDesc.classList.add('product-desc');
                prodContainer.appendChild(prodDesc);     
        const prodPrice = document.createElement('div');
            prodPrice.classList.add('product-price');
            prodPrice.textContent = product.prices[keys];
                prodContainer.appendChild(prodPrice);
    
            
            
    }

}


function productStock()
{
    const meals = [
        'Lasagna',
        'Pizza',
        'Hamburguer',
        'Ramen',
    ];
    const prodImg = [
        _imgs_lasagna_png__WEBPACK_IMPORTED_MODULE_0__,
        _imgs_pizza_png__WEBPACK_IMPORTED_MODULE_1__,
        _imgs_hamburguer_png__WEBPACK_IMPORTED_MODULE_2__,
        _imgs_ramen_png__WEBPACK_IMPORTED_MODULE_3__
        ];
    const description = [
        'A rich and creamy whole-wheat pasta dish filled layer by layer with refreshingly fresh onions and garlic, lathered in a succulent sauce and topped with imported, premium quality mozzarella.',
        'The classic flavours of Italy – Our home made tomato sauce, Grana Padano, Mozzarella and fresh basil all dressed with your choice of the finest extra virgin olive oils.',
        'A huge single hamburguer with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!',
        'Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg',
    ];

    const prices = [
        '$10',
        '$20',
        '$5',
        '$2',
    ];
    return {meals,prices,description,prodImg}
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./src/fonts/Lemon-Regular.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Lemon-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77a52dd3e6aebcb8858b.ttf";

/***/ }),

/***/ "./src/imgs/background.jpg":
/*!*********************************!*\
  !*** ./src/imgs/background.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc7776722800bb791c53.jpg";

/***/ }),

/***/ "./src/imgs/hamburguer.png":
/*!*********************************!*\
  !*** ./src/imgs/hamburguer.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d640759139f313b4ff20.png";

/***/ }),

/***/ "./src/imgs/lasagna.png":
/*!******************************!*\
  !*** ./src/imgs/lasagna.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9145d10a13c4d6f61832.png";

/***/ }),

/***/ "./src/imgs/pizza.png":
/*!****************************!*\
  !*** ./src/imgs/pizza.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c54a844d2ec32690019.png";

/***/ }),

/***/ "./src/imgs/ramen.png":
/*!****************************!*\
  !*** ./src/imgs/ramen.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d3cd4440c6f92716dc4.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL0xlbW9uLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5AZm9udC1mYWNlIHtcblxuICAgIGZvbnQtZmFtaWx5OiAncmVzdGF1cmFudCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG5cbn1cblxuYm9keVxuXG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMy4zNSU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwOyBcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIFxuICAgIFxufVxuXG5cbi5uYXYtYmFyXG57XG5iYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG53aWR0aDogNDBlbTtcbmhlaWdodDogOGVtO1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYnRuXG57XG4gICAgZm9udC1mYW1pbHk6IHJlc3RhdXJhbnQsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggZ3JleSA7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgd2lkdGg6IDdlbTtcbiAgICBoZWlnaHQ6IDgwJTtcbn1cbi5idG46aG92ZXJcbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5idG46YWN0aXZlXG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnB4O1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IGdyZXk7XG59XG5cbi5tZW51XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xuICAgIHdpZHRoOiA0MGVtO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMGVtIC0gMXB4KTsgO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xufVxuXG4udGl0bGVcbntcbiAgICBmb250LXNpemU6IDRlbTtcbiAgICBmb250LWZhbWlseTogcmVzdGF1cmFudCwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcblxufVxuXG4uaW5kZXgtZGVzY1xue1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcblxufVxuXG4ucHJvZHVjdC1jb250YWluZXJ7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5wcm9kdWN0LWRlc2NcbntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4ucHJvZHVjdC1wcmljZVxue1xuICAgIGZvbnQtZmFtaWx5OiByZXN0YXVyYW50LCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4ucHJvZHVjdC1pbWdcbntcbiAgICBoZWlnaHQ6IDEzZW07XG4gICAgd2lkdGg6IDI1ZW07XG59XG5cblxuLnNjaGVkLWNvbnRhaW5lclxue1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBkb3VibGUgMzBweCByZ2IoODAsIDMyLCAwKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxufVxuXG4uc2NoZWQtY29udGFpbmVyID4gLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMztcbn1cblxuLnNjaGVkLW9wZW5cbntcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob21lLWRlc2NcbntcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcGFkZGluZzogMmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5cbi5jb250YWN0LWNvbnRhaW5lclxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IGRvdWJsZSAyMHB4IHJnYig4MCwgMzIsIDApO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICBcbn1cblxuLmNvbnRhY3QtZGVzY1xue1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLDRDQUFtQzs7QUFFdkM7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixtREFBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7OztBQUdmOzs7QUFHQTs7QUFFQSx3QkFBd0I7QUFDeEIsV0FBVztBQUNYLFdBQVc7QUFDWCxhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFDOUI7O0FBRUE7O0lBRUksd0RBQXdEO0lBQ3hELDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLHdEQUF3RDs7QUFFNUQ7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSx3REFBd0Q7SUFDeEQsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFHQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7OztBQUdBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsY0FBYzs7QUFFbEI7O0FBRUE7O0lBRUksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AZm9udC1mYWNlIHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdyZXN0YXVyYW50JztcXG4gICAgc3JjOiB1cmwoJ2ZvbnRzL0xlbW9uLVJlZ3VsYXIudHRmJyk7XFxuXFxufVxcblxcbmJvZHlcXG5cXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltZ3MvYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMzLjM1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDsgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBcXG4gICAgXFxufVxcblxcblxcbi5uYXYtYmFyXFxue1xcbmJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG53aWR0aDogNDBlbTtcXG5oZWlnaHQ6IDhlbTtcXG5kaXNwbGF5OiBmbGV4O1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuanVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5idG5cXG57XFxuICAgIGZvbnQtZmFtaWx5OiByZXN0YXVyYW50LCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCBncmV5IDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICB3aWR0aDogN2VtO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG59XFxuLmJ0bjpob3ZlclxcbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmJ0bjphY3RpdmVcXG57XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAycHg7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IGdyZXk7XFxufVxcblxcbi5tZW51XFxue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIHdpZHRoOiA0MGVtO1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTBlbSAtIDFweCk7IDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xcbn1cXG5cXG4udGl0bGVcXG57XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgICBmb250LWZhbWlseTogcmVzdGF1cmFudCwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG5cXG59XFxuXFxuLmluZGV4LWRlc2NcXG57XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuXFxufVxcblxcbi5wcm9kdWN0LWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLnByb2R1Y3QtZGVzY1xcbntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5wcm9kdWN0LXByaWNlXFxue1xcbiAgICBmb250LWZhbWlseTogcmVzdGF1cmFudCwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5wcm9kdWN0LWltZ1xcbntcXG4gICAgaGVpZ2h0OiAxM2VtO1xcbiAgICB3aWR0aDogMjVlbTtcXG59XFxuXFxuXFxuLnNjaGVkLWNvbnRhaW5lclxcbntcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IGRvdWJsZSAzMHB4IHJnYig4MCwgMzIsIDApO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5zY2hlZC1jb250YWluZXIgPiAudGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzM7XFxufVxcblxcbi5zY2hlZC1vcGVuXFxue1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtZGVzY1xcbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgcGFkZGluZzogMmVtO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5jb250YWN0LWNvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IGRvdWJsZSAyMHB4IHJnYig4MCwgMzIsIDApO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gIFxcbn1cXG5cXG4uY29udGFjdC1kZXNjXFxue1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KClcbntcbiAgICBcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbWVudScpXG4gICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIGRpc3BsYXlDb250YWN0KGNvbnRhY3QpO1xuICAgIHJldHVybiBjb250YWN0O1xuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDb250YWN0KGNvbnRhY3QpXG57XG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jb250YWluZXInKTtcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdHMnO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuXG4gICAgY29uc3QgY29udGFjdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0RGVzYy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRlc2MnKTtcbiAgICBjb25zdCBjb250YWN0c09iaiA9IGNvbnRhY3RzKCk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29udGFjdHNPYmouY29udGFjdHMpIHtcbiAgICAgICAgY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdExpc3QudGV4dENvbnRlbnQgPWtleSArJzogJysgY29udGFjdHNPYmouY29udGFjdHNba2V5XTtcbiAgICAgICAgY29udGFjdERlc2MuYXBwZW5kQ2hpbGQoY29udGFjdExpc3QpO1xuICAgIH1cbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3REZXNjKTtcblxufVxuXG5cblxuZnVuY3Rpb24gY29udGFjdHMoKVxue1xuICAgIGNvbnN0IGNvbnRhY3RzID0ge1xuICAgICAgICBlbWFpbE9uZTogJ0VtYWlsT25lQGVtYWlsLmNvbScsXG4gICAgICAgIGVtYWlsVHdvOiAnRW1haWxUd29AZW1haWwuY29tJyxcbiAgICAgICAgdGVsT25lOiAnMTIzNC0xMjM0JyxcbiAgICAgICAgdGVsVHdvOiAnNjc4OS02Nzg5JyxcbiAgICAgICAgYWRyZXNzOiAnNDMgRnVsdG9uIFJkLkxha2V2aWxsZSwgTU4gNTUwNDQnLFxuICAgIH1cbiAgICByZXR1cm4ge2NvbnRhY3RzfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDsiLCJmdW5jdGlvbiBjcmVhdGVIb21lKClcbntcbiAgICBcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnbWVudScpXG4gICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZCk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIGRpc3BsYXlEZXNjcmlwdGlvbihob21lKTtcbiAgICBkaXNwbGF5U2NoZWR1bGVzKGhvbWUpO1xuXG4gICAgcmV0dXJuIGhvbWU7XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheURlc2NyaXB0aW9uKGhvbWUpXG57XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ091ciBSZXN0YXVyYW50JztcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVml2YW11cyBldCBzb2RhbGVzIG1ldHVzLiBOYW0gdmVsIGp1c3RvIHNjZWxlcmlzcXVlIGRvbG9yIGNvbW1vZG8gc2NlbGVyaXNxdWUuIERvbmVjIHNhZ2l0dGlzIG9yY2kgaW4gcG9zdWVyZSBwb3J0YS4gVXQgbGFjaW5pYSBjb25kaW1lbnR1bSB0dXJwaXMgc2VkIHZlaGljdWxhLiBQcmFlc2VudCByaG9uY3VzIG1hc3NhIG5vbiBmZWxpcyB2ZXN0aWJ1bHVtLCB1dCBtYWxlc3VhZGEgbWkgdnVscHV0YXRlLiBBbGlxdWFtIGluIGRpYW0gZGlnbmlzc2ltLCBldWlzbW9kIGxpZ3VsYSBldCwgbWFsZXN1YWRhIHJpc3VzLiBEb25lYyB2YXJpdXMgZW5pbSBub24gZmVsaXMgc2NlbGVyaXNxdWUgcG9zdWVyZS4gSW4gdml0YWUgb3JjaSBhbnRlLiBJbnRlZ2VyIGluIG5pc2kgdG9ydG9yLiBEdWlzIGZlbGlzIHVybmEsIHZhcml1cyB2aXRhZSBsZW8gcXVpcywgY3Vyc3VzIHZlbmVuYXRpcyBzZW0uIFByYWVzZW50IHVsdHJpY2llcyBmYWNpbGlzaXMgYXJjdSB2aXRhZSB2YXJpdXMuIE51bGxhIGZhY2lsaXNpLidcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdob21lLWRlc2MnKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbn1cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlTY2hlZHVsZXMoaG9tZSlcbntcbiAgICBjb25zdCBzY2hlZHVsZXMgPSBzY2hlZHVsZXNSZXN0KCk7XG4gICAgY29uc3Qgc2NoZWR1bGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzY2hlZHVsZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2NoZWQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1NjaGVkdWxlcydcbiAgICBzY2hlZHVsZXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnN0IHNjaGVkT3BlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjaGVkT3Blbi5jbGFzc0xpc3QuYWRkKCdzY2hlZC1vcGVuJyk7XG4gICAgc2NoZWR1bGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjaGVkT3Blbik7XG5cbiAgICAgICAgZm9yKGxldCBrZXkgaW4gc2NoZWR1bGVzLm9wZW4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVkRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNjaGVkRG9tLnRleHRDb250ZW50ID0gc2NoZWR1bGVzLnNjaGVkW2tleV0gKyc6Jysgc2NoZWR1bGVzLm9wZW5ba2V5XSArJyAtICcrIHNjaGVkdWxlcy5jbG9zZWRba2V5XTtcbiAgICAgICAgICAgIHNjaGVkT3Blbi5hcHBlbmRDaGlsZChzY2hlZERvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaG9tZS5hcHBlbmRDaGlsZChzY2hlZHVsZXNDb250YWluZXIpO1xuXG59XG5cbmZ1bmN0aW9uIHNjaGVkdWxlc1Jlc3QoKVxue1xuICAgIGNvbnN0IG9wZW4gPSBbXG4gICAgICAgICcxODowMCcsXG4gICAgICAgICcxODowMCcsXG4gICAgICAgICcxODowMCcsXG4gICAgICAgICcxODowMCcsXG4gICAgICAgICcxODowMCcsXG4gICAgICAgICcyMDowMCcsXG4gICAgICAgICdDTE9TRUQnLFxuICAgIF1cblxuICAgIGNvbnN0IGNsb3NlZCA9IFtcbiAgICAgICAgJzIzOjU5JyxcbiAgICAgICAgJzIzOjU5JyxcbiAgICAgICAgJzIzOjU5JyxcbiAgICAgICAgJzIzOjU5JyxcbiAgICAgICAgJzAyOjAwJyxcbiAgICAgICAgJzA0OjAwJyxcbiAgICAgICAgJ0NMT1NFRCcsXG4gICAgXVxuICAgIGNvbnN0IHNjaGVkID0gW1xuICAgICAgICAnTW9uZGF5JyxcbiAgICAgICAgJ1R1ZXNkYXknLFxuICAgICAgICAnV2VkbmVzZGF5JyxcbiAgICAgICAgJ1RodXJzZGF5JyxcbiAgICAgICAgJ0ZyaWRheScsXG4gICAgICAgICdzYXR1cmRheScsXG4gICAgICAgICdTdW5kYXknLFxuICAgIF1cblxuXG4gICAgcmV0dXJue2Nsb3NlZCxvcGVuLHNjaGVkfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTsiLCJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY3JlYXRlTWFpbkRvbSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluRG9tKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgbmF2QmFyKG1haW4pO1xuICAgIGluZGV4Q29udGFpbmVyKG1haW4pO1xuXG59XG5cblxuXG5mdW5jdGlvbiBuYXZCYXIobWFpbikge1xuXG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdi1iYXInKTtcbiAgICBjb25zdCBmaXJzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaXJzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgZmlyc3RCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChmaXJzdEJ1dHRvbik7XG4gICAgY29uc3Qgc2Vjb25kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNlY29uZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgc2Vjb25kQnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoc2Vjb25kQnV0dG9uKTtcbiAgICBjb25zdCB0aGlyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgdGhpcmRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZCh0aGlyZEJ1dHRvbik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuXG5cbiAgICBmaXJzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgY3JlYXRlSG9tZSgpIH0pO1xuICAgIHNlY29uZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgY3JlYXRlTWVudSgpIH0pO1xuICAgIHRoaXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyBjcmVhdGVDb250YWN0KCkgfSk7XG5cbn1cblxuZnVuY3Rpb24gaW5kZXhDb250YWluZXIobWFpbikge1xuXG4gICAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG1haW5NZW51KTtcbiAgICBjb25zdCBpbmRleFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGluZGV4VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgaW5kZXhUaXRsZS50ZXh0Q29udGVudCA9ICdXZWxjb21lJztcbiAgICBjb25zdCBpbmRleERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5kZXhEZXNjLmNsYXNzTGlzdC5hZGQoJ2luZGV4LWRlc2MnKTtcbiAgICAgICAgaW5kZXhEZXNjLnRleHRDb250ZW50ID0gJ0hlcmUgeW91IGNhbiBzZWUgb3VyIGluZm9ybWF0aW9ucyBvbiBIb21lIHRhYiBvbiB0aGUgTmF2aWdhdGlvbiBiYXIgQWJvdmUsIHRoZSBNZW51IG9mIHRoZSBPZGluIFJlc3RhdXJhbnQgaW4gTWVudSBUYWIsIENvbnRhY3QgdXMgaW4gdGhlIENvbnRhY3QgVGFiJ1xuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChpbmRleFRpdGxlKTtcbiAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoaW5kZXhEZXNjKTtcblxuXG5cblxufVxuIiwiaW1wb3J0IGxhc2FnbmEgZnJvbSAnLi9pbWdzL2xhc2FnbmEucG5nJztcbmltcG9ydCBwaXp6YSBmcm9tICcuL2ltZ3MvcGl6emEucG5nJztcbmltcG9ydCBoYW1idXJndWVyIGZyb20gJy4vaW1ncy9oYW1idXJndWVyLnBuZyc7XG5pbXBvcnQgcmFtZW4gZnJvbSAnLi9pbWdzL3JhbWVuLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKVxue1xuICAgIFxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51JylcbiAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgZGlzcGxheVByb2R1Y3RzKG1lbnUpO1xuXG4gIFxuICAgIHJldHVybiBtZW51O1xuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9kdWN0cyhtZW51KVxue1xuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0U3RvY2soKTtcblxuICAgIGZvcihsZXQga2V5cyBpbiBwcm9kdWN0Lm1lYWxzKVxuICAgIHtcbiAgICAgICAgY29uc3QgcHJvZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChwcm9kQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgcHJvZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2RJdGVtLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgICAgICBwcm9kSXRlbS50ZXh0Q29udGVudCA9IHByb2R1Y3QubWVhbHNba2V5c107XG4gICAgICAgICAgICAgICAgcHJvZENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kSXRlbSk7XG4gICAgICAgIGNvbnN0IHByb2RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHByb2RJbWcuc3JjID0gcHJvZHVjdC5wcm9kSW1nW2tleXNdO1xuICAgICAgICAgICAgcHJvZEltZy5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWltZycpO1xuICAgICAgICAgICAgICAgIHByb2RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZEltZyk7ICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2REZXNjLnRleHRDb250ZW50ID0gcHJvZHVjdC5kZXNjcmlwdGlvbltrZXlzXTtcbiAgICAgICAgICAgIHByb2REZXNjLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtZGVzYycpO1xuICAgICAgICAgICAgICAgIHByb2RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZERlc2MpOyAgICAgXG4gICAgICAgIGNvbnN0IHByb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvZFByaWNlLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtcHJpY2UnKTtcbiAgICAgICAgICAgIHByb2RQcmljZS50ZXh0Q29udGVudCA9IHByb2R1Y3QucHJpY2VzW2tleXNdO1xuICAgICAgICAgICAgICAgIHByb2RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZFByaWNlKTtcbiAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgfVxuXG59XG5cblxuZnVuY3Rpb24gcHJvZHVjdFN0b2NrKClcbntcbiAgICBjb25zdCBtZWFscyA9IFtcbiAgICAgICAgJ0xhc2FnbmEnLFxuICAgICAgICAnUGl6emEnLFxuICAgICAgICAnSGFtYnVyZ3VlcicsXG4gICAgICAgICdSYW1lbicsXG4gICAgXTtcbiAgICBjb25zdCBwcm9kSW1nID0gW1xuICAgICAgICBsYXNhZ25hLFxuICAgICAgICBwaXp6YSxcbiAgICAgICAgaGFtYnVyZ3VlcixcbiAgICAgICAgcmFtZW5cbiAgICAgICAgXTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IFtcbiAgICAgICAgJ0EgcmljaCBhbmQgY3JlYW15IHdob2xlLXdoZWF0IHBhc3RhIGRpc2ggZmlsbGVkIGxheWVyIGJ5IGxheWVyIHdpdGggcmVmcmVzaGluZ2x5IGZyZXNoIG9uaW9ucyBhbmQgZ2FybGljLCBsYXRoZXJlZCBpbiBhIHN1Y2N1bGVudCBzYXVjZSBhbmQgdG9wcGVkIHdpdGggaW1wb3J0ZWQsIHByZW1pdW0gcXVhbGl0eSBtb3p6YXJlbGxhLicsXG4gICAgICAgICdUaGUgY2xhc3NpYyBmbGF2b3VycyBvZiBJdGFseSDigJMgT3VyIGhvbWUgbWFkZSB0b21hdG8gc2F1Y2UsIEdyYW5hIFBhZGFubywgTW96emFyZWxsYSBhbmQgZnJlc2ggYmFzaWwgYWxsIGRyZXNzZWQgd2l0aCB5b3VyIGNob2ljZSBvZiB0aGUgZmluZXN0IGV4dHJhIHZpcmdpbiBvbGl2ZSBvaWxzLicsXG4gICAgICAgICdBIGh1Z2Ugc2luZ2xlIGhhbWJ1cmd1ZXIgd2l0aCBhbGwgdGhlIGZpeGluZ3MsIGNoZWVzZSwgbGV0dHVjZSwgdG9tYXRvLCBvbmlvbnMgYW5kIHNwZWNpYWwgc2F1Y2Ugb3IgbWF5b25uYWlzZSEnLFxuICAgICAgICAnSmFwYW5lc2Ugbm9vZGxlIHNvdXAsIHdpdGggYSBjb21iaW5hdGlvbiBvZiBhIHJpY2ggZmxhdm91cmVkIGJyb3RoLCBvbmUgb2YgYSB2YXJpZXR5IG9mIHR5cGVzIG9mIG5vb2RsZSBhbmQgYSBzZWxlY3Rpb24gb2YgbWVhdHMgb3IgdmVnZXRhYmxlcywgb2Z0ZW4gdG9wcGVkIHdpdGggYSBib2lsZWQgZWdnJyxcbiAgICBdO1xuXG4gICAgY29uc3QgcHJpY2VzID0gW1xuICAgICAgICAnJDEwJyxcbiAgICAgICAgJyQyMCcsXG4gICAgICAgICckNScsXG4gICAgICAgICckMicsXG4gICAgXTtcbiAgICByZXR1cm4ge21lYWxzLHByaWNlcyxkZXNjcmlwdGlvbixwcm9kSW1nfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=