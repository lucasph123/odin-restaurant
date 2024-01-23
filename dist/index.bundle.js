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

.active{
    font-family: restaurant, 'Times New Roman', Times, serif;
    text-shadow: 4px 4px grey ;
    font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5em;
    height: 40%;
    text-decoration: underline;
    background-color: brown;
    border-radius: 10em;
    pointer-events: none;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;;IAEI,yBAAyB;IACzB,4CAAmC;;AAEvC;;AAEA;;;IAGI,aAAa;IACb,mDAAsC;IACtC,uBAAuB;IACvB,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,WAAW;;;AAGf;;;AAGA;;AAEA,wBAAwB;AACxB,WAAW;AACX,WAAW;AACX,aAAa;AACb,mBAAmB;AACnB,4BAA4B;AAC5B,8BAA8B;AAC9B;;AAEA;;IAEI,wDAAwD;IACxD,0BAA0B;IAC1B,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,UAAU;IACV,WAAW;AACf;AACA;;IAEI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;;;;IAII,kBAAkB;IAClB,QAAQ;IACR,yBAAyB;AAC7B;;AAEA;IACI,wDAAwD;IACxD,0BAA0B;IAC1B,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;IACV,WAAW;IACX,0BAA0B;IAC1B,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;;IAEI,wBAAwB;IACxB,WAAW;IACX,oCAAoC;IACpC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;IAEI,cAAc;IACd,wDAAwD;;AAE5D;;AAEA;;IAEI,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,2CAA2C;IAC3C,mBAAmB;;AAEvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;;IAEI,aAAa;IACb,cAAc;AAClB;;AAEA;;IAEI,wDAAwD;IACxD,cAAc;AAClB;;AAEA;;IAEI,YAAY;IACZ,WAAW;AACf;;;AAGA;;IAEI,YAAY;IACZ,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,6BAA6B;IAC7B,qBAAqB;IACrB,kCAAkC;IAClC,mBAAmB;IACnB,uBAAuB;;AAE3B;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;;IAEI,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;;IAEI,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;AAClC;;;AAGA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,kCAAkC;IAClC,cAAc;;AAElB;;AAEA;;IAEI,cAAc;AAClB","sourcesContent":["\n@font-face {\n\n    font-family: 'restaurant';\n    src: url('fonts/Lemon-Regular.ttf');\n\n}\n\nbody\n\n{\n    display: flex;\n    background: url(./imgs/background.jpg);\n    background-size: 33.35%;\n    justify-content: center;\n    margin: 0; \n    height: 100vh;\n    width: auto;\n    \n    \n}\n\n\n.nav-bar\n{\nbackground-color: bisque;\nwidth: 40em;\nheight: 8em;\ndisplay: flex;\nalign-items: center;\njustify-content:space-evenly;\nborder-bottom: 1px solid black;\n}\n\n.btn\n{\n    font-family: restaurant, 'Times New Roman', Times, serif;\n    text-shadow: 4px 4px grey ;\n    font-size: 2em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    width: 7em;\n    height: 80%;\n}\n.btn:hover\n{\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n.btn:active\n{\n   \n\n    position: relative;\n    top: 2px;\n    text-shadow: 2px 2px grey;\n}\n\n.active{\n    font-family: restaurant, 'Times New Roman', Times, serif;\n    text-shadow: 4px 4px grey ;\n    font-size: 2em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 5em;\n    height: 40%;\n    text-decoration: underline;\n    background-color: brown;\n    border-radius: 10em;\n    pointer-events: none;\n    text-shadow: 2px 2px grey;\n}\n\n.menu\n{\n    background-color: bisque;\n    width: 40em;\n    min-height: calc(100vh - 10em - 1px); ;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 2em;\n}\n\n.title\n{\n    font-size: 4em;\n    font-family: restaurant, 'Times New Roman', Times, serif;\n\n}\n\n.index-desc\n{\n    padding: 2em;\n    font-size: 2em;\n    font-weight: 100;\n    font-family:'Times New Roman', Times, serif;\n    text-align: justify;\n\n}\n\n.product-container{\n    padding: 1em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: justify;\n}\n\n.product-desc\n{\n    padding: 10px;\n    font-size: 2em;\n}\n\n.product-price\n{\n    font-family: restaurant, 'Times New Roman', Times, serif;\n    font-size: 2em;\n}\n\n.product-img\n{\n    height: 13em;\n    width: 25em;\n}\n\n\n.sched-container\n{\n    padding: 1em;\n    display: grid;\n    width: auto;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.3fr 1fr;\n    justify-items: center;\n    border: double 30px rgb(80, 32, 0);\n    align-items: center;\n    justify-content: center;\n    \n}\n\n.sched-container > .title{\n    font-size: 3em;\n    grid-area: 1/1/2/3;\n}\n\n.sched-open\n{\n    font-size: 2em;\n    grid-column: 1/3;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.home-desc\n{\n    margin-bottom: 1em;\n    font-size: 2em;\n    padding: 2em;\n    text-align: justify;\n    border-bottom: 1px solid black;\n}\n\n\n.contact-container\n{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    border: double 20px rgb(80, 32, 0);\n    padding: 0.5em;\n  \n}\n\n.contact-desc\n{\n    font-size: 2em;\n}"],"sourceRoot":""}]);
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



function createContact(first,second,third)
{
    buttonFix(first,second,third);
    const contact = document.createElement('div');
    const main = document.querySelector('#container');
    contact.classList.add('menu')
    main.removeChild(main.lastChild);
    main.appendChild(contact);

    displayContact(contact);
    return contact;

}

function buttonFix(first,second,third)
{
    first.className = 'btn';
    second.className = 'btn';
    third.className = 'active';
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
function createHome(first,second,third)
{
    buttonFix(first,second,third);
    const home = document.createElement('div');
    const main = document.querySelector('#container');
    home.classList.add('menu')
    main.removeChild(main.lastChild);

    main.appendChild(home);
    displayDescription(home);
    displaySchedules(home);

    return home;

}

function buttonFix(first,second,third)
{

    first.className = 'active';
    second.className = 'btn';
    third.className = 'btn';
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


    firstButton.addEventListener('click', function () { (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])(firstButton,secondButton,thirdButton) });
    secondButton.addEventListener('click', function () { (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(firstButton,secondButton,thirdButton) });
    thirdButton.addEventListener('click', function () { (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])(firstButton,secondButton,thirdButton) });
    

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





function createMenu(first,second,third)
{
    
    buttonFix(first,second,third);
    const menu = document.createElement('div');
    const main = document.querySelector('#container');
    menu.classList.add('menu')
    main.removeChild(main.lastChild);
    main.appendChild(menu);

    displayProducts(menu);

  
    return menu;

}


function buttonFix(first,second,third)
{
    first.className = 'btn';
    second.className = 'active';
    third.className = 'btn';
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2SEFBMEM7QUFDdEYsNENBQTRDLHVIQUF3QztBQUNwRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG1DQUFtQzs7QUFFbEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRFQUE0RSxNQUFNLFlBQVksY0FBYyxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLFlBQVksT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxRQUFRLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksT0FBTyxNQUFNLFVBQVUsd0NBQXdDLGtDQUFrQywwQ0FBMEMsS0FBSyxhQUFhLG9C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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBTztBQUNmLFFBQVEsNENBQUs7QUFDYixRQUFRLGlEQUFVO0FBQ2xCLFFBQVEsNENBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7Ozs7QUFJQSxpRUFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9MZW1vbi1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1ncy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuQGZvbnQtZmFjZSB7XG5cbiAgICBmb250LWZhbWlseTogJ3Jlc3RhdXJhbnQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuXG59XG5cbmJvZHlcblxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzMuMzUlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMDsgXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBcbiAgICBcbn1cblxuXG4ubmF2LWJhclxue1xuYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xud2lkdGg6IDQwZW07XG5oZWlnaHQ6IDhlbTtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJ0blxue1xuICAgIGZvbnQtZmFtaWx5OiByZXN0YXVyYW50LCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIHRleHQtc2hhZG93OiA0cHggNHB4IGdyZXkgO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIHdpZHRoOiA3ZW07XG4gICAgaGVpZ2h0OiA4MCU7XG59XG4uYnRuOmhvdmVyXG57XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYnRuOmFjdGl2ZVxue1xuICAgXG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggZ3JleTtcbn1cblxuLmFjdGl2ZXtcbiAgICBmb250LWZhbWlseTogcmVzdGF1cmFudCwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCBncmV5IDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDVlbTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbiAgICBib3JkZXItcmFkaXVzOiAxMGVtO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IGdyZXk7XG59XG5cbi5tZW51XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xuICAgIHdpZHRoOiA0MGVtO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMGVtIC0gMXB4KTsgO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xufVxuXG4udGl0bGVcbntcbiAgICBmb250LXNpemU6IDRlbTtcbiAgICBmb250LWZhbWlseTogcmVzdGF1cmFudCwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcblxufVxuXG4uaW5kZXgtZGVzY1xue1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcblxufVxuXG4ucHJvZHVjdC1jb250YWluZXJ7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5wcm9kdWN0LWRlc2NcbntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4ucHJvZHVjdC1wcmljZVxue1xuICAgIGZvbnQtZmFtaWx5OiByZXN0YXVyYW50LCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4ucHJvZHVjdC1pbWdcbntcbiAgICBoZWlnaHQ6IDEzZW07XG4gICAgd2lkdGg6IDI1ZW07XG59XG5cblxuLnNjaGVkLWNvbnRhaW5lclxue1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBkb3VibGUgMzBweCByZ2IoODAsIDMyLCAwKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxufVxuXG4uc2NoZWQtY29udGFpbmVyID4gLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMztcbn1cblxuLnNjaGVkLW9wZW5cbntcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob21lLWRlc2NcbntcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcGFkZGluZzogMmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5cbi5jb250YWN0LWNvbnRhaW5lclxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IGRvdWJsZSAyMHB4IHJnYig4MCwgMzIsIDApO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICBcbn1cblxuLmNvbnRhY3QtZGVzY1xue1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLDRDQUFtQzs7QUFFdkM7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixtREFBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7OztBQUdmOzs7QUFHQTs7QUFFQSx3QkFBd0I7QUFDeEIsV0FBVztBQUNYLFdBQVc7QUFDWCxhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFDOUI7O0FBRUE7O0lBRUksd0RBQXdEO0lBQ3hELDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBOzs7O0lBSUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3REFBd0Q7SUFDeEQsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsV0FBVztJQUNYLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2Qsd0RBQXdEOztBQUU1RDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0MsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHdEQUF3RDtJQUN4RCxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7OztBQUdBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxjQUFjOztBQUVsQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBmb250LWZhY2Uge1xcblxcbiAgICBmb250LWZhbWlseTogJ3Jlc3RhdXJhbnQnO1xcbiAgICBzcmM6IHVybCgnZm9udHMvTGVtb24tUmVndWxhci50dGYnKTtcXG5cXG59XFxuXFxuYm9keVxcblxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1ncy9iYWNrZ3JvdW5kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzMuMzUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwOyBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIFxcbiAgICBcXG59XFxuXFxuXFxuLm5hdi1iYXJcXG57XFxuYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbndpZHRoOiA0MGVtO1xcbmhlaWdodDogOGVtO1xcbmRpc3BsYXk6IGZsZXg7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJ0blxcbntcXG4gICAgZm9udC1mYW1pbHk6IHJlc3RhdXJhbnQsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIHRleHQtc2hhZG93OiA0cHggNHB4IGdyZXkgO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiA3ZW07XFxuICAgIGhlaWdodDogODAlO1xcbn1cXG4uYnRuOmhvdmVyXFxue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uYnRuOmFjdGl2ZVxcbntcXG4gICBcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDJweDtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggZ3JleTtcXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgZm9udC1mYW1pbHk6IHJlc3RhdXJhbnQsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIHRleHQtc2hhZG93OiA0cHggNHB4IGdyZXkgO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwZW07XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBncmV5O1xcbn1cXG5cXG4ubWVudVxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICB3aWR0aDogNDBlbTtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwZW0gLSAxcHgpOyA7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDJlbTtcXG59XFxuXFxuLnRpdGxlXFxue1xcbiAgICBmb250LXNpemU6IDRlbTtcXG4gICAgZm9udC1mYW1pbHk6IHJlc3RhdXJhbnQsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuXFxufVxcblxcbi5pbmRleC1kZXNjXFxue1xcbiAgICBwYWRkaW5nOiAyZW07XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcblxcbn1cXG5cXG4ucHJvZHVjdC1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5wcm9kdWN0LWRlc2NcXG57XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ucHJvZHVjdC1wcmljZVxcbntcXG4gICAgZm9udC1mYW1pbHk6IHJlc3RhdXJhbnQsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ucHJvZHVjdC1pbWdcXG57XFxuICAgIGhlaWdodDogMTNlbTtcXG4gICAgd2lkdGg6IDI1ZW07XFxufVxcblxcblxcbi5zY2hlZC1jb250YWluZXJcXG57XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBkb3VibGUgMzBweCByZ2IoODAsIDMyLCAwKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uc2NoZWQtY29udGFpbmVyID4gLnRpdGxle1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbn1cXG5cXG4uc2NoZWQtb3BlblxcbntcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWRlc2NcXG57XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4uY29udGFjdC1jb250YWluZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBkb3VibGUgMjBweCByZ2IoODAsIDMyLCAwKTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICBcXG59XFxuXFxuLmNvbnRhY3QtZGVzY1xcbntcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdChmaXJzdCxzZWNvbmQsdGhpcmQpXG57XG4gICAgYnV0dG9uRml4KGZpcnN0LHNlY29uZCx0aGlyZCk7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdtZW51JylcbiAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gICAgZGlzcGxheUNvbnRhY3QoY29udGFjdCk7XG4gICAgcmV0dXJuIGNvbnRhY3Q7XG5cbn1cblxuZnVuY3Rpb24gYnV0dG9uRml4KGZpcnN0LHNlY29uZCx0aGlyZClcbntcbiAgICBmaXJzdC5jbGFzc05hbWUgPSAnYnRuJztcbiAgICBzZWNvbmQuY2xhc3NOYW1lID0gJ2J0bic7XG4gICAgdGhpcmQuY2xhc3NOYW1lID0gJ2FjdGl2ZSc7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDb250YWN0KGNvbnRhY3QpXG57XG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jb250YWluZXInKTtcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdHMnO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuXG4gICAgY29uc3QgY29udGFjdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0RGVzYy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRlc2MnKTtcbiAgICBjb25zdCBjb250YWN0c09iaiA9IGNvbnRhY3RzKCk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29udGFjdHNPYmouY29udGFjdHMpIHtcbiAgICAgICAgY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdExpc3QudGV4dENvbnRlbnQgPWtleSArJzogJysgY29udGFjdHNPYmouY29udGFjdHNba2V5XTtcbiAgICAgICAgY29udGFjdERlc2MuYXBwZW5kQ2hpbGQoY29udGFjdExpc3QpO1xuICAgIH1cbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3REZXNjKTtcblxufVxuXG5cblxuZnVuY3Rpb24gY29udGFjdHMoKVxue1xuICAgIGNvbnN0IGNvbnRhY3RzID0ge1xuICAgICAgICBlbWFpbE9uZTogJ0VtYWlsT25lQGVtYWlsLmNvbScsXG4gICAgICAgIGVtYWlsVHdvOiAnRW1haWxUd29AZW1haWwuY29tJyxcbiAgICAgICAgdGVsT25lOiAnMTIzNC0xMjM0JyxcbiAgICAgICAgdGVsVHdvOiAnNjc4OS02Nzg5JyxcbiAgICAgICAgYWRyZXNzOiAnNDMgRnVsdG9uIFJkLkxha2V2aWxsZSwgTU4gNTUwNDQnLFxuICAgIH1cbiAgICByZXR1cm4ge2NvbnRhY3RzfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDsiLCJmdW5jdGlvbiBjcmVhdGVIb21lKGZpcnN0LHNlY29uZCx0aGlyZClcbntcbiAgICBidXR0b25GaXgoZmlyc3Qsc2Vjb25kLHRoaXJkKTtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ21lbnUnKVxuICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChob21lKTtcbiAgICBkaXNwbGF5RGVzY3JpcHRpb24oaG9tZSk7XG4gICAgZGlzcGxheVNjaGVkdWxlcyhob21lKTtcblxuICAgIHJldHVybiBob21lO1xuXG59XG5cbmZ1bmN0aW9uIGJ1dHRvbkZpeChmaXJzdCxzZWNvbmQsdGhpcmQpXG57XG5cbiAgICBmaXJzdC5jbGFzc05hbWUgPSAnYWN0aXZlJztcbiAgICBzZWNvbmQuY2xhc3NOYW1lID0gJ2J0bic7XG4gICAgdGhpcmQuY2xhc3NOYW1lID0gJ2J0bic7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEZXNjcmlwdGlvbihob21lKVxue1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdPdXIgUmVzdGF1cmFudCc7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZpdmFtdXMgZXQgc29kYWxlcyBtZXR1cy4gTmFtIHZlbCBqdXN0byBzY2VsZXJpc3F1ZSBkb2xvciBjb21tb2RvIHNjZWxlcmlzcXVlLiBEb25lYyBzYWdpdHRpcyBvcmNpIGluIHBvc3VlcmUgcG9ydGEuIFV0IGxhY2luaWEgY29uZGltZW50dW0gdHVycGlzIHNlZCB2ZWhpY3VsYS4gUHJhZXNlbnQgcmhvbmN1cyBtYXNzYSBub24gZmVsaXMgdmVzdGlidWx1bSwgdXQgbWFsZXN1YWRhIG1pIHZ1bHB1dGF0ZS4gQWxpcXVhbSBpbiBkaWFtIGRpZ25pc3NpbSwgZXVpc21vZCBsaWd1bGEgZXQsIG1hbGVzdWFkYSByaXN1cy4gRG9uZWMgdmFyaXVzIGVuaW0gbm9uIGZlbGlzIHNjZWxlcmlzcXVlIHBvc3VlcmUuIEluIHZpdGFlIG9yY2kgYW50ZS4gSW50ZWdlciBpbiBuaXNpIHRvcnRvci4gRHVpcyBmZWxpcyB1cm5hLCB2YXJpdXMgdml0YWUgbGVvIHF1aXMsIGN1cnN1cyB2ZW5lbmF0aXMgc2VtLiBQcmFlc2VudCB1bHRyaWNpZXMgZmFjaWxpc2lzIGFyY3Ugdml0YWUgdmFyaXVzLiBOdWxsYSBmYWNpbGlzaS4nXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaG9tZS1kZXNjJyk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG59XG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5U2NoZWR1bGVzKGhvbWUpXG57XG4gICAgY29uc3Qgc2NoZWR1bGVzID0gc2NoZWR1bGVzUmVzdCgpO1xuICAgIGNvbnN0IHNjaGVkdWxlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2NoZWR1bGVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NjaGVkLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdTY2hlZHVsZXMnXG4gICAgc2NoZWR1bGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb25zdCBzY2hlZE9wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY2hlZE9wZW4uY2xhc3NMaXN0LmFkZCgnc2NoZWQtb3BlbicpO1xuICAgIHNjaGVkdWxlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzY2hlZE9wZW4pO1xuXG4gICAgICAgIGZvcihsZXQga2V5IGluIHNjaGVkdWxlcy5vcGVuKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBzY2hlZERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzY2hlZERvbS50ZXh0Q29udGVudCA9IHNjaGVkdWxlcy5zY2hlZFtrZXldICsnOicrIHNjaGVkdWxlcy5vcGVuW2tleV0gKycgLSAnKyBzY2hlZHVsZXMuY2xvc2VkW2tleV07XG4gICAgICAgICAgICBzY2hlZE9wZW4uYXBwZW5kQ2hpbGQoc2NoZWREb20pO1xuICAgICAgICB9XG4gICAgICAgIGhvbWUuYXBwZW5kQ2hpbGQoc2NoZWR1bGVzQ29udGFpbmVyKTtcblxufVxuXG5mdW5jdGlvbiBzY2hlZHVsZXNSZXN0KClcbntcbiAgICBjb25zdCBvcGVuID0gW1xuICAgICAgICAnMTg6MDAnLFxuICAgICAgICAnMTg6MDAnLFxuICAgICAgICAnMTg6MDAnLFxuICAgICAgICAnMTg6MDAnLFxuICAgICAgICAnMTg6MDAnLFxuICAgICAgICAnMjA6MDAnLFxuICAgICAgICAnQ0xPU0VEJyxcbiAgICBdXG5cbiAgICBjb25zdCBjbG9zZWQgPSBbXG4gICAgICAgICcyMzo1OScsXG4gICAgICAgICcyMzo1OScsXG4gICAgICAgICcyMzo1OScsXG4gICAgICAgICcyMzo1OScsXG4gICAgICAgICcwMjowMCcsXG4gICAgICAgICcwNDowMCcsXG4gICAgICAgICdDTE9TRUQnLFxuICAgIF1cbiAgICBjb25zdCBzY2hlZCA9IFtcbiAgICAgICAgJ01vbmRheScsXG4gICAgICAgICdUdWVzZGF5JyxcbiAgICAgICAgJ1dlZG5lc2RheScsXG4gICAgICAgICdUaHVyc2RheScsXG4gICAgICAgICdGcmlkYXknLFxuICAgICAgICAnc2F0dXJkYXknLFxuICAgICAgICAnU3VuZGF5JyxcbiAgICBdXG5cblxuICAgIHJldHVybntjbG9zZWQsb3BlbixzY2hlZH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7IiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNyZWF0ZU1haW5Eb20oKTtcblxuZnVuY3Rpb24gY3JlYXRlTWFpbkRvbSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIG5hdkJhcihtYWluKTtcbiAgICBpbmRleENvbnRhaW5lcihtYWluKTtcblxufVxuXG5cblxuZnVuY3Rpb24gbmF2QmFyKG1haW4pIHtcblxuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJyk7XG4gICAgY29uc3QgZmlyc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmlyc3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgIGZpcnN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoZmlyc3RCdXR0b24pO1xuICAgIGNvbnN0IHNlY29uZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZWNvbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgIHNlY29uZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKHNlY29uZEJ1dHRvbik7XG4gICAgY29uc3QgdGhpcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgIHRoaXJkQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQodGhpcmRCdXR0b24pO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG5hdkJhcik7XG5cblxuICAgIGZpcnN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyBjcmVhdGVIb21lKGZpcnN0QnV0dG9uLHNlY29uZEJ1dHRvbix0aGlyZEJ1dHRvbikgfSk7XG4gICAgc2Vjb25kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyBjcmVhdGVNZW51KGZpcnN0QnV0dG9uLHNlY29uZEJ1dHRvbix0aGlyZEJ1dHRvbikgfSk7XG4gICAgdGhpcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7IGNyZWF0ZUNvbnRhY3QoZmlyc3RCdXR0b24sc2Vjb25kQnV0dG9uLHRoaXJkQnV0dG9uKSB9KTtcbiAgICBcblxufVxuXG5mdW5jdGlvbiBpbmRleENvbnRhaW5lcihtYWluKSB7XG5cbiAgICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbk1lbnUpO1xuICAgIGNvbnN0IGluZGV4VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5kZXhUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICBpbmRleFRpdGxlLnRleHRDb250ZW50ID0gJ1dlbGNvbWUnO1xuICAgIGNvbnN0IGluZGV4RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbmRleERlc2MuY2xhc3NMaXN0LmFkZCgnaW5kZXgtZGVzYycpO1xuICAgICAgICBpbmRleERlc2MudGV4dENvbnRlbnQgPSAnSGVyZSB5b3UgY2FuIHNlZSBvdXIgaW5mb3JtYXRpb25zIG9uIEhvbWUgdGFiIG9uIHRoZSBOYXZpZ2F0aW9uIGJhciBBYm92ZSwgdGhlIE1lbnUgb2YgdGhlIE9kaW4gUmVzdGF1cmFudCBpbiBNZW51IFRhYiwgQ29udGFjdCB1cyBpbiB0aGUgQ29udGFjdCBUYWInXG4gICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGluZGV4VGl0bGUpO1xuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChpbmRleERlc2MpO1xuXG5cblxuXG59XG4iLCJpbXBvcnQgbGFzYWduYSBmcm9tICcuL2ltZ3MvbGFzYWduYS5wbmcnO1xuaW1wb3J0IHBpenphIGZyb20gJy4vaW1ncy9waXp6YS5wbmcnO1xuaW1wb3J0IGhhbWJ1cmd1ZXIgZnJvbSAnLi9pbWdzL2hhbWJ1cmd1ZXIucG5nJztcbmltcG9ydCByYW1lbiBmcm9tICcuL2ltZ3MvcmFtZW4ucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudShmaXJzdCxzZWNvbmQsdGhpcmQpXG57XG4gICAgXG4gICAgYnV0dG9uRml4KGZpcnN0LHNlY29uZCx0aGlyZCk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51JylcbiAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgZGlzcGxheVByb2R1Y3RzKG1lbnUpO1xuXG4gIFxuICAgIHJldHVybiBtZW51O1xuXG59XG5cblxuZnVuY3Rpb24gYnV0dG9uRml4KGZpcnN0LHNlY29uZCx0aGlyZClcbntcbiAgICBmaXJzdC5jbGFzc05hbWUgPSAnYnRuJztcbiAgICBzZWNvbmQuY2xhc3NOYW1lID0gJ2FjdGl2ZSc7XG4gICAgdGhpcmQuY2xhc3NOYW1lID0gJ2J0bic7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9kdWN0cyhtZW51KVxue1xuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0U3RvY2soKTtcblxuICAgIGZvcihsZXQga2V5cyBpbiBwcm9kdWN0Lm1lYWxzKVxuICAgIHtcbiAgICAgICAgY29uc3QgcHJvZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChwcm9kQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgcHJvZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2RJdGVtLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgICAgICBwcm9kSXRlbS50ZXh0Q29udGVudCA9IHByb2R1Y3QubWVhbHNba2V5c107XG4gICAgICAgICAgICAgICAgcHJvZENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kSXRlbSk7XG4gICAgICAgIGNvbnN0IHByb2RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHByb2RJbWcuc3JjID0gcHJvZHVjdC5wcm9kSW1nW2tleXNdO1xuICAgICAgICAgICAgcHJvZEltZy5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWltZycpO1xuICAgICAgICAgICAgICAgIHByb2RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZEltZyk7ICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2REZXNjLnRleHRDb250ZW50ID0gcHJvZHVjdC5kZXNjcmlwdGlvbltrZXlzXTtcbiAgICAgICAgICAgIHByb2REZXNjLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtZGVzYycpO1xuICAgICAgICAgICAgICAgIHByb2RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZERlc2MpOyAgICAgXG4gICAgICAgIGNvbnN0IHByb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvZFByaWNlLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtcHJpY2UnKTtcbiAgICAgICAgICAgIHByb2RQcmljZS50ZXh0Q29udGVudCA9IHByb2R1Y3QucHJpY2VzW2tleXNdO1xuICAgICAgICAgICAgICAgIHByb2RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZFByaWNlKTtcbiAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgfVxuXG59XG5cblxuZnVuY3Rpb24gcHJvZHVjdFN0b2NrKClcbntcbiAgICBjb25zdCBtZWFscyA9IFtcbiAgICAgICAgJ0xhc2FnbmEnLFxuICAgICAgICAnUGl6emEnLFxuICAgICAgICAnSGFtYnVyZ3VlcicsXG4gICAgICAgICdSYW1lbicsXG4gICAgXTtcbiAgICBjb25zdCBwcm9kSW1nID0gW1xuICAgICAgICBsYXNhZ25hLFxuICAgICAgICBwaXp6YSxcbiAgICAgICAgaGFtYnVyZ3VlcixcbiAgICAgICAgcmFtZW5cbiAgICAgICAgXTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IFtcbiAgICAgICAgJ0EgcmljaCBhbmQgY3JlYW15IHdob2xlLXdoZWF0IHBhc3RhIGRpc2ggZmlsbGVkIGxheWVyIGJ5IGxheWVyIHdpdGggcmVmcmVzaGluZ2x5IGZyZXNoIG9uaW9ucyBhbmQgZ2FybGljLCBsYXRoZXJlZCBpbiBhIHN1Y2N1bGVudCBzYXVjZSBhbmQgdG9wcGVkIHdpdGggaW1wb3J0ZWQsIHByZW1pdW0gcXVhbGl0eSBtb3p6YXJlbGxhLicsXG4gICAgICAgICdUaGUgY2xhc3NpYyBmbGF2b3VycyBvZiBJdGFseSDigJMgT3VyIGhvbWUgbWFkZSB0b21hdG8gc2F1Y2UsIEdyYW5hIFBhZGFubywgTW96emFyZWxsYSBhbmQgZnJlc2ggYmFzaWwgYWxsIGRyZXNzZWQgd2l0aCB5b3VyIGNob2ljZSBvZiB0aGUgZmluZXN0IGV4dHJhIHZpcmdpbiBvbGl2ZSBvaWxzLicsXG4gICAgICAgICdBIGh1Z2Ugc2luZ2xlIGhhbWJ1cmd1ZXIgd2l0aCBhbGwgdGhlIGZpeGluZ3MsIGNoZWVzZSwgbGV0dHVjZSwgdG9tYXRvLCBvbmlvbnMgYW5kIHNwZWNpYWwgc2F1Y2Ugb3IgbWF5b25uYWlzZSEnLFxuICAgICAgICAnSmFwYW5lc2Ugbm9vZGxlIHNvdXAsIHdpdGggYSBjb21iaW5hdGlvbiBvZiBhIHJpY2ggZmxhdm91cmVkIGJyb3RoLCBvbmUgb2YgYSB2YXJpZXR5IG9mIHR5cGVzIG9mIG5vb2RsZSBhbmQgYSBzZWxlY3Rpb24gb2YgbWVhdHMgb3IgdmVnZXRhYmxlcywgb2Z0ZW4gdG9wcGVkIHdpdGggYSBib2lsZWQgZWdnJyxcbiAgICBdO1xuXG4gICAgY29uc3QgcHJpY2VzID0gW1xuICAgICAgICAnJDEwJyxcbiAgICAgICAgJyQyMCcsXG4gICAgICAgICckNScsXG4gICAgICAgICckMicsXG4gICAgXTtcbiAgICByZXR1cm4ge21lYWxzLHByaWNlcyxkZXNjcmlwdGlvbixwcm9kSW1nfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=