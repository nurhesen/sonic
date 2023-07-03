/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/AngryPig/Idle (36x30).png":
/*!*******************************************!*\
  !*** ./src/img/AngryPig/Idle (36x30).png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0a598b0468ef76d3a6b0314df3110ab3.png");

/***/ }),

/***/ "./src/img/AngryPig/Pig.png":
/*!**********************************!*\
  !*** ./src/img/AngryPig/Pig.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5489ba82bd8e18b253bcba225bf45c01.png");

/***/ }),

/***/ "./src/img/AngryPig/Walk (36x30).png":
/*!*******************************************!*\
  !*** ./src/img/AngryPig/Walk (36x30).png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c8ff8db6608625613bdbf23c915f17c3.png");

/***/ }),

/***/ "./src/img/Bat/Bat.png":
/*!*****************************!*\
  !*** ./src/img/Bat/Bat.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "109da1a7cfc5de16a029d2757ff2578d.png");

/***/ }),

/***/ "./src/img/Bat/Flying (46x30).png":
/*!****************************************!*\
  !*** ./src/img/Bat/Flying (46x30).png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2abf01f7403a5a2485c8be53ef083199.png");

/***/ }),

/***/ "./src/img/BlueBird/BlueBird.png":
/*!***************************************!*\
  !*** ./src/img/BlueBird/BlueBird.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "99c90314c98cdd278075c899fa57bc9d.png");

/***/ }),

/***/ "./src/img/BlueBird/Flying (32x32).png":
/*!*********************************************!*\
  !*** ./src/img/BlueBird/Flying (32x32).png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "786df61f7c186264bfd9c2a45ba5cf13.png");

/***/ }),

/***/ "./src/img/Doraemon/doreMoving1.png":
/*!******************************************!*\
  !*** ./src/img/Doraemon/doreMoving1.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9c1a26eed594ea536144e63f49bb46a7.png");

/***/ }),

/***/ "./src/img/Doraemon/doreMoving3.png":
/*!******************************************!*\
  !*** ./src/img/Doraemon/doreMoving3.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9ecb009bae19be1f887b55e4bd235742.png");

/***/ }),

/***/ "./src/img/Lavabird/Lavabird.png":
/*!***************************************!*\
  !*** ./src/img/Lavabird/Lavabird.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11752c97f22d618d778b1c7f9d25b920.png");

/***/ }),

/***/ "./src/img/Mario/getRun.png":
/*!**********************************!*\
  !*** ./src/img/Mario/getRun.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "db6b5fb19aef1c013842897881d277c2.png");

/***/ }),

/***/ "./src/img/Mario/jump.png":
/*!********************************!*\
  !*** ./src/img/Mario/jump.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fd93be364c6c21117b75a32c9ab49684.png");

/***/ }),

/***/ "./src/img/Mario/run.png":
/*!*******************************!*\
  !*** ./src/img/Mario/run.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3364245acad2ad82ccf626cfe3f05886.png");

/***/ }),

/***/ "./src/img/MichaelJackson/walking.png":
/*!********************************************!*\
  !*** ./src/img/MichaelJackson/walking.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e945557bfbbf2a52e90e62e800e9b628.png");

/***/ }),

/***/ "./src/img/Rino/Idle (52x34).png":
/*!***************************************!*\
  !*** ./src/img/Rino/Idle (52x34).png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "eaea3c3947270c65700552d0a56d535c.png");

/***/ }),

/***/ "./src/img/Rino/Rhino.png":
/*!********************************!*\
  !*** ./src/img/Rino/Rhino.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8a6010d85ecdcea7469528fba99577e2.png");

/***/ }),

/***/ "./src/img/Rino/Run (52x34).png":
/*!**************************************!*\
  !*** ./src/img/Rino/Run (52x34).png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "370bc27e7f341020ece10518ad2f5c77.png");

/***/ }),

/***/ "./src/img/Snail/Idle (38x24).png":
/*!****************************************!*\
  !*** ./src/img/Snail/Idle (38x24).png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e154cc008de5ca5c21be9d62e874d07a.png");

/***/ }),

/***/ "./src/img/Snail/Walk (38x24).png":
/*!****************************************!*\
  !*** ./src/img/Snail/Walk (38x24).png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9b70fabfcaefe4a0213faa645c7aa019.png");

/***/ }),

/***/ "./src/img/Sonic/sonic_jumping.png":
/*!*****************************************!*\
  !*** ./src/img/Sonic/sonic_jumping.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5b4d4bc04c7fa5dec210c27569b2e6c8.png");

/***/ }),

/***/ "./src/img/Sonic/sonic_running.png":
/*!*****************************************!*\
  !*** ./src/img/Sonic/sonic_running.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3256b11238d7404bd203040fe426c120.png");

/***/ }),

/***/ "./src/img/Sonic/sonic_standing.png":
/*!******************************************!*\
  !*** ./src/img/Sonic/sonic_standing.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7be6506f9d43b4e9629be82f7a44a725.png");

/***/ }),

/***/ "./src/img/background2.jpg":
/*!*********************************!*\
  !*** ./src/img/background2.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "05131a5810f73c47be74e7cd1c3174f4.jpg");

/***/ }),

/***/ "./src/img/bunny/Fall.png":
/*!********************************!*\
  !*** ./src/img/bunny/Fall.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2b5fe6f1bdd8b7b5af2df5727c2635cb.png");

/***/ }),

/***/ "./src/img/bunny/Idle (34x44).png":
/*!****************************************!*\
  !*** ./src/img/bunny/Idle (34x44).png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b91681d208fcea05a99b8846df88e0e1.png");

/***/ }),

/***/ "./src/img/bunny/Jump.png":
/*!********************************!*\
  !*** ./src/img/bunny/Jump.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6abef0e20e4fde1c945958cd749c4586.png");

/***/ }),

/***/ "./src/img/bunny/Run (34x44).png":
/*!***************************************!*\
  !*** ./src/img/bunny/Run (34x44).png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "270290a9c79eb11a50880d05e246cee6.png");

/***/ }),

/***/ "./src/img/hills-01.png":
/*!******************************!*\
  !*** ./src/img/hills-01.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "63cc55ba30ae293ce42fcc905a6f1ce8.png");

/***/ }),

/***/ "./src/img/platform-2.png":
/*!********************************!*\
  !*** ./src/img/platform-2.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "525c425bcb447f1e4ba83a83b880318c.png");

/***/ }),

/***/ "./src/img/platformSmallTall-02.png":
/*!******************************************!*\
  !*** ./src/img/platformSmallTall-02.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1c9ee8da6e08380406cafc6de40a85b6.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas_core */ "./src/js/canvas_core.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform */ "./src/js/platform.js");
/* harmony import */ var _generic_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic_object */ "./src/js/generic_object.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _img_platform_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/platform-2.png */ "./src/img/platform-2.png");
/* harmony import */ var _img_platformSmallTall_02_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/platformSmallTall-02.png */ "./src/img/platformSmallTall-02.png");
/* harmony import */ var _img_background2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/background2.jpg */ "./src/img/background2.jpg");
/* harmony import */ var _img_hills_01_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/hills-01.png */ "./src/img/hills-01.png");
/* harmony import */ var _platform_assets_platform_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./platform-assets/platform_generator */ "./src/js/platform-assets/platform_generator.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
/* harmony import */ var _characters_bunny__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./characters/bunny */ "./src/js/characters/bunny.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enemy */ "./src/js/enemy.js");
/* harmony import */ var _characters_bat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./characters/bat */ "./src/js/characters/bat.js");
/* harmony import */ var _enemy_generator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./enemy_generator */ "./src/js/enemy_generator.js");















var platform_items = new _platform_assets_platform_generator__WEBPACK_IMPORTED_MODULE_9__["default"]();
var generate_enemies = new _enemy_generator__WEBPACK_IMPORTED_MODULE_14__["default"]();
var player = null;
var pig = null;
var rhino = null;
var bunny = null;
var genericObjects = [];
var backPoints = [];
var enemies = [];
var scrollOffSet = 0;

function init() {
  Object(_menu__WEBPACK_IMPORTED_MODULE_10__["default"])().clear();
  enemies = [];
  player = new _player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
  pig = new _enemy__WEBPACK_IMPORTED_MODULE_12__["Enemy"]("bat", 2200);
  rhino = new _enemy__WEBPACK_IMPORTED_MODULE_12__["Enemy"]("rhino", 3200);
  bunny = new _enemy__WEBPACK_IMPORTED_MODULE_12__["Enemy"]("bunny", 1200);
  enemies.push(pig);
  enemies.push(rhino);
  enemies.push(bunny);

  function createImage(imageSrc) {
    var image2 = new Image();
    image2.src = imageSrc;
    return image2;
  }

  platform_items.platforms = platform_items.platformGenerator();
  675;
  genericObjects = [new _generic_object__WEBPACK_IMPORTED_MODULE_3__["default"]({
    x: -1127,
    y: -1,
    image: createImage(_img_background2_jpg__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new _generic_object__WEBPACK_IMPORTED_MODULE_3__["default"]({
    x: -1,
    y: -1,
    image: createImage(_img_background2_jpg__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new _generic_object__WEBPACK_IMPORTED_MODULE_3__["default"]({
    x: 1127,
    y: -1,
    image: createImage(_img_background2_jpg__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new _generic_object__WEBPACK_IMPORTED_MODULE_3__["default"]({
    x: -1,
    y: -1,
    image: createImage(_img_hills_01_png__WEBPACK_IMPORTED_MODULE_8__["default"])
  })];
  platform_items.scrollPoints = [];
  generate_enemies.scrollPoints = [];
  backPoints = [];
  scrollOffSet = 0;
}

var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  space: {
    pressed: false
  }
};
init();

function animate() {
  requestAnimationFrame(animate);
  _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].fillStyle = "white";
  _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].fillRect(0, 0, _canvas_core__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _canvas_core__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platform_items.platforms.forEach(function (platform) {
    platform.draw();
  });
  _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].font = "30px Arial";
  _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].fillText(Math.round(scrollOffSet / 100), 10, 50);

  if (keys.right.pressed && player.position.x <= 400) {
    player.velocity.x = player.currentCharacter.speed; // keys.space.pressed && (player.velocity.x += 5);
  } else if (keys.left.pressed && player.position.x >= 100) {
    player.velocity.x = -player.currentCharacter.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffSet += player.currentCharacter.speed;
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.currentCharacter.speed * 0.66;
      });
      enemies.forEach(function (enemy) {
        enemy.startPoint < scrollOffSet && (enemy.isActive = true);

        if (enemy.isActive) {
          enemy.position.x -= player.currentCharacter.speed;
        }
      });
      platform_items.platforms.forEach(function (platform) {
        platform.position.x -= player.currentCharacter.speed; // keys.space.pressed && (platform.position.x -= incrementSpace);
      });
    } else if (keys.left.pressed) {
      enemies.forEach(function (enemy) {
        if (enemy.isActive) {
          enemy.position.x += player.currentCharacter.speed;
        }
      });
      scrollOffSet -= player.currentCharacter.speed;
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.currentCharacter.speed * 0.66;
      });
      platform_items.platforms.forEach(function (platform) {
        platform.position.x += player.currentCharacter.speed;
      });
    }
  }

  var pointBack = scrollOffSet - scrollOffSet % (_canvas_core__WEBPACK_IMPORTED_MODULE_0__["canvas"].width - 349);

  if (!backPoints.includes(pointBack)) {
    console.log("pointBack", pointBack);
    backPoints.push(pointBack);
    genericObjects.unshift(new _generic_object__WEBPACK_IMPORTED_MODULE_3__["default"]({
      x: pointBack,
      y: -1,
      image: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_background2_jpg__WEBPACK_IMPORTED_MODULE_7__["default"])
    }));
  }

  var point = scrollOffSet - scrollOffSet % (_canvas_core__WEBPACK_IMPORTED_MODULE_0__["canvas"].width - 349);

  if (!platform_items.scrollPoints.includes(point) && scrollOffSet > 0) {
    platform_items.generateTerrain(player.position.x, point);
  } // if (!generate_enemies.scrollPoints.includes(point) && scrollOffSet > 0) {
  //   generate_enemies.generate(player.position.x, point,scrollOffSet,enemies);
  //   enemies.concat(generate_enemies.enemies);
  //   enemies = [...enemies, ...generate_enemies.enemies];
  //   console.log(enemies);
  // }


  generate_enemies.generate(player.position.x, point, scrollOffSet, enemies);

  if (scrollOffSet >= 2000) {
    console.log("You win!");
  }

  if (player.position.y > _canvas_core__WEBPACK_IMPORTED_MODULE_0__["canvas"].height) {
    console.log("You lose!");
    init();
  }

  platform_items.platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
      player.isJumping = false;

      if (player.isRunning) {
        player.currentSprite = player.sprites.run.right;
      } else {
        player.currentSprite = player.sprites.stand.right;
      }
    }

    enemies.forEach(function (enemy) {
      if (enemy.isActive) {
        if (enemy.position.y + enemy.height <= platform.position.y && enemy.position.y + enemy.height + enemy.velocity.y >= platform.position.y && enemy.position.x + enemy.width >= platform.position.x && enemy.position.x <= platform.position.x + platform.width) {
          enemy.velocity.y = 0;
          enemy.isJumping = false;

          if (enemy.isRunning) {
            enemy.currentSprite = enemy.sprites.run.right;
          } else {
            enemy.currentSprite = enemy.sprites.stand.right;
          }
        }
      }
    });
  });

  if (player.position.y < 0) {
    player.position.y = 0;
    player.velocity.y = 0;
  }

  enemies.forEach(function (enemy) {
    if (enemy.isActive) {
      if (Math.abs(player.position.x - enemy.position.x) < enemy.width / 2 + player.width / 2 && Math.abs(player.position.y - enemy.position.y) < enemy.height / 2 + player.height / 2) {
        if (player.position.y < enemy.position.y && Math.abs(player.position.x - enemy.position.x) < enemy.width / 2) {
          player.velocity.y = -player.currentCharacter.jumpHeight;
          player.isJumping = true;
          player.currentSprite = player.sprites.jump.right; // enemy.update = () => {};
          // enemy.position.y = -100;

          !player.playerList.includes(enemy.currentCharacter) && player.playerList.push(enemy.currentCharacter);
          var index = enemies.indexOf(enemy);
          console.log(enemy.currentCharacter.name);
          Object(_menu__WEBPACK_IMPORTED_MODULE_10__["default"])().add(enemy.currentCharacter.name);

          if (index > -1) {
            // only splice array when item is found
            enemies.splice(index, 1); // 2nd parameter means remove one item only
          }
        } else {
          init();
        }
      }

      enemy.update();
      enemy.attackPlayer(player);
    }
  });
  player.update();

  if (player.jump && (!player.isJumping || player.currentCharacter.canFly)) {
    player.velocity.y = -player.currentCharacter.jumpHeight;
    player.isJumping = true;
    player.currentSprite = player.sprites.jump.right;
  }
}

animate();
addEventListener("keydown", function (_ref) {
  var keyCode = _ref.keyCode;

  switch (keyCode) {
    case 87:
      // Up
      player.jump = true;
      break;

    case 65:
      // Left
      keys.left.pressed = true;
      player.isRunning = true;
      player.isStanding = false;
      player.facingDirection = "left";
      player.currentSprite = player.sprites.run.left;
      break;

    case 68:
      // Right
      keys.right.pressed = true;
      player.isRunning = true;
      player.isStanding = false;
      player.facingDirection = "right";
      player.currentSprite = player.sprites.run.right;
      break;

    case 83:
      // Down
      break;

    case 32:
      keys.space.pressed = !keys.space.pressed;
      player.changePlayer();
      player.jump = true;
      setTimeout(function () {
        player.jump = false;
      }, 400);
      break;
  }
});
addEventListener("keyup", function (_ref2) {
  var keyCode = _ref2.keyCode;

  switch (keyCode) {
    case 87:
      // Up
      player.jump = false;
      break;

    case 65:
      // Left
      keys.left.pressed = false;
      player.isRunning = false;
      player.isStanding = true;
      player.currentSprite = player.sprites.stand.left;
      break;

    case 68:
      // Right
      keys.right.pressed = false;
      player.isRunning = false;
      player.isStanding = true;
      player.currentSprite = player.sprites.stand.right;
      break;

    case 83:
      // Down
      break;

    case 32:
      // keys.space.pressed = false;
      break;
  }
});

/***/ }),

/***/ "./src/js/canvas_core.js":
/*!*******************************!*\
  !*** ./src/js/canvas_core.js ***!
  \*******************************/
/*! exports provided: canvas, c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return c; });
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;


/***/ }),

/***/ "./src/js/characters/bat.js":
/*!**********************************!*\
  !*** ./src/js/characters/bat.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_Bat_Flying_46x30_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/Bat/Flying (46x30).png */ "./src/img/Bat/Flying (46x30).png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");




var batConfig = {
  image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Bat_Flying_46x30_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  sprites: {
    stand: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Bat_Flying_46x30_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 6,
        direction: "right",
        isStanding: true,
        isRunning: false,
        frameRate: 0
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Bat_Flying_46x30_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 6,
        direction: "left",
        isStanding: true,
        isRunning: false,
        frameRate: 0
      }
    },
    run: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Bat_Flying_46x30_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 6,
        direction: "right",
        isStanding: false,
        isRunning: true,
        frameRate: 0
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Bat_Flying_46x30_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 6,
        direction: "left",
        isStanding: false,
        isRunning: true,
        frameRate: 0,
        speed: 5
      }
    },
    jump: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Bat_Flying_46x30_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 6,
        direction: "right",
        isStanding: false,
        isRunning: false,
        frameRate: 0
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Bat_Flying_46x30_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 6,
        direction: "left",
        isStanding: false,
        isRunning: false,
        frameRate: 0
      }
    }
  },
  imageWidth: 46,
  imageHeight: 30,
  width: 107,
  height: 70,
  canFly: true,
  speed: 5,
  jumpHeight: 2,
  name: "bat"
};
/* harmony default export */ __webpack_exports__["default"] = (batConfig);

/***/ }),

/***/ "./src/js/characters/bluebird.js":
/*!***************************************!*\
  !*** ./src/js/characters/bluebird.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_BlueBird_Flying_32x32_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/BlueBird/Flying (32x32).png */ "./src/img/BlueBird/Flying (32x32).png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");




var blueBirdConfig = {
  image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_BlueBird_Flying_32x32_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  sprites: {
    stand: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_BlueBird_Flying_32x32_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "right",
        isStanding: true,
        isRunning: false,
        frameRate: 0
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_BlueBird_Flying_32x32_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "left",
        isStanding: true,
        isRunning: false,
        frameRate: 0
      }
    },
    run: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_BlueBird_Flying_32x32_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "right",
        isStanding: false,
        isRunning: true,
        frameRate: 0
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_BlueBird_Flying_32x32_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "left",
        isStanding: false,
        isRunning: true,
        frameRate: 0,
        speed: 5
      }
    },
    jump: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_BlueBird_Flying_32x32_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "right",
        isStanding: false,
        isRunning: false,
        frameRate: 0
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_BlueBird_Flying_32x32_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "left",
        isStanding: false,
        isRunning: false,
        frameRate: 0
      }
    }
  },
  imageWidth: 32,
  imageHeight: 32,
  width: 70,
  height: 70,
  canFly: true,
  speed: 3,
  jumpHeight: 3,
  name: "bluebird"
};
/* harmony default export */ __webpack_exports__["default"] = (blueBirdConfig);

/***/ }),

/***/ "./src/js/characters/bunny.js":
/*!************************************!*\
  !*** ./src/js/characters/bunny.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_bunny_Idle_34x44_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/bunny/Idle (34x44).png */ "./src/img/bunny/Idle (34x44).png");
/* harmony import */ var _img_bunny_Run_34x44_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/bunny/Run (34x44).png */ "./src/img/bunny/Run (34x44).png");
/* harmony import */ var _img_bunny_Jump_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/bunny/Jump.png */ "./src/img/bunny/Jump.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");




var bunnyConfig = {
  image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_bunny_Idle_34x44_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  sprites: {
    stand: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_bunny_Idle_34x44_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 7,
        direction: "right",
        isStanding: true,
        isRunning: false,
        frameRate: 5
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_bunny_Idle_34x44_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 7,
        direction: "left",
        isStanding: true,
        isRunning: false,
        frameRate: 5
      }
    },
    run: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_bunny_Run_34x44_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 11,
        direction: "right",
        isStanding: false,
        isRunning: true,
        frameRate: 0
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_bunny_Run_34x44_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 11,
        direction: "left",
        isStanding: false,
        isRunning: true,
        frameRate: 0
      }
    },
    jump: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_bunny_Jump_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        frameCount: 0,
        direction: "right",
        isStanding: false,
        isRunning: false,
        frameRate: 0
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_bunny_Jump_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        frameCount: 0,
        direction: "left",
        isStanding: false,
        isRunning: false,
        frameRate: 0
      }
    }
  },
  imageWidth: 34,
  imageHeight: 44,
  width: 116,
  height: 150,
  canFly: false,
  speed: 15,
  jumpHeight: 14,
  name: "bunny"
};
/* harmony default export */ __webpack_exports__["default"] = (bunnyConfig);

/***/ }),

/***/ "./src/js/characters/doraemon.js":
/*!***************************************!*\
  !*** ./src/js/characters/doraemon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_Doraemon_doreMoving1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/Doraemon/doreMoving1.png */ "./src/img/Doraemon/doreMoving1.png");
/* harmony import */ var _img_Doraemon_doreMoving3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/Doraemon/doreMoving3.png */ "./src/img/Doraemon/doreMoving3.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");




var doraemonConfig = {
  image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Doraemon_doreMoving1_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  sprites: {
    stand: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Doraemon_doreMoving1_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 5,
        direction: "right",
        isStanding: true,
        isRunning: false,
        frameRate: 3
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Doraemon_doreMoving1_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 5,
        direction: "left",
        isStanding: true,
        isRunning: false,
        frameRate: 3
      }
    },
    run: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Doraemon_doreMoving1_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 5,
        direction: "right",
        isStanding: false,
        isRunning: true,
        frameRate: 3
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Doraemon_doreMoving1_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 5,
        direction: "left",
        isStanding: false,
        isRunning: true,
        frameRate: 3
      }
    },
    jump: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Doraemon_doreMoving3_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 2,
        direction: "right",
        isStanding: false,
        isRunning: false,
        frameRate: 3
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Doraemon_doreMoving3_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 2,
        direction: "left",
        isStanding: false,
        isRunning: false,
        frameRate: 3
      }
    }
  },
  imageWidth: 34,
  imageHeight: 34,
  width: 80,
  height: 80,
  canFly: false,
  speed: 9,
  jumpHeight: 14,
  name: "doraemon"
};
/* harmony default export */ __webpack_exports__["default"] = (doraemonConfig);

/***/ }),

/***/ "./src/js/characters/lavabird.js":
/*!***************************************!*\
  !*** ./src/js/characters/lavabird.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_Lavabird_Lavabird_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/Lavabird/Lavabird.png */ "./src/img/Lavabird/Lavabird.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");




var lavaBirdConfig = {
  image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Lavabird_Lavabird_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  sprites: {
    stand: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Lavabird_Lavabird_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "right",
        isStanding: true,
        isRunning: false,
        frameRate: 1
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Lavabird_Lavabird_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "left",
        isStanding: true,
        isRunning: false,
        frameRate: 1
      }
    },
    run: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Lavabird_Lavabird_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "right",
        isStanding: false,
        isRunning: true,
        frameRate: 1
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Lavabird_Lavabird_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "left",
        isStanding: false,
        isRunning: true,
        frameRate: 1,
        speed: 5
      }
    },
    jump: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Lavabird_Lavabird_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "right",
        isStanding: false,
        isRunning: false,
        frameRate: 1
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_Lavabird_Lavabird_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "left",
        isStanding: false,
        isRunning: false,
        frameRate: 1
      }
    }
  },
  imageWidth: 60,
  imageHeight: 60,
  width: 107,
  height: 107,
  canFly: true,
  speed: 9,
  jumpHeight: 0.3,
  name: "lavabird"
};
/* harmony default export */ __webpack_exports__["default"] = (lavaBirdConfig);

/***/ }),

/***/ "./src/js/characters/mario.js":
/*!************************************!*\
  !*** ./src/js/characters/mario.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_Mario_getRun_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/Mario/getRun.png */ "./src/img/Mario/getRun.png");
/* harmony import */ var _img_Mario_run_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/Mario/run.png */ "./src/img/Mario/run.png");
/* harmony import */ var _img_Mario_jump_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/Mario/jump.png */ "./src/img/Mario/jump.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");




var marioConfig = {
  image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Mario_getRun_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  sprites: {
    stand: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Mario_getRun_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 0,
        direction: "right",
        isStanding: true,
        isRunning: false,
        frameRate: 12
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Mario_getRun_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 0,
        direction: "left",
        isStanding: true,
        isRunning: false,
        frameRate: 12
      }
    },
    run: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Mario_run_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 2,
        direction: "right",
        isStanding: false,
        isRunning: true,
        frameRate: 3
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Mario_run_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 2,
        direction: "left",
        isStanding: false,
        isRunning: true,
        frameRate: 3
      }
    },
    jump: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Mario_jump_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        frameCount: 0,
        direction: "right",
        isStanding: false,
        isRunning: false,
        frameRate: 12
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Mario_jump_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        frameCount: 0,
        direction: "left",
        isStanding: false,
        isRunning: false,
        frameRate: 12
      }
    }
  },
  imageWidth: 18,
  imageHeight: 23,
  width: 55,
  height: 70,
  canFly: false,
  speed: 7,
  jumpHeight: 12,
  name: "mario"
};
/* harmony default export */ __webpack_exports__["default"] = (marioConfig);

/***/ }),

/***/ "./src/js/characters/michaeljackson.js":
/*!*********************************************!*\
  !*** ./src/js/characters/michaeljackson.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_MichaelJackson_walking_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/MichaelJackson/walking.png */ "./src/img/MichaelJackson/walking.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");




var michaelJacksonConfig = {
  image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_MichaelJackson_walking_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  sprites: {
    stand: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_MichaelJackson_walking_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 0,
        direction: "right",
        isStanding: true,
        isRunning: false,
        frameRate: 5
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_MichaelJackson_walking_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 0,
        direction: "left",
        isStanding: true,
        isRunning: false,
        frameRate: 5
      }
    },
    run: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_MichaelJackson_walking_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 27,
        direction: "right",
        isStanding: false,
        isRunning: true,
        frameRate: 5
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_MichaelJackson_walking_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 27,
        direction: "left",
        isStanding: false,
        isRunning: true,
        frameRate: 5
      }
    },
    jump: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_MichaelJackson_walking_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 6,
        direction: "right",
        isStanding: false,
        isRunning: false,
        frameRate: 5
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_MichaelJackson_walking_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 6,
        direction: "left",
        isStanding: false,
        isRunning: false,
        frameRate: 5
      }
    }
  },
  imageWidth: 140,
  imageHeight: 197,
  width: 109,
  height: 154,
  canFly: false,
  speed: 10,
  jumpHeight: 16,
  name: "michaeljackson"
};
/* harmony default export */ __webpack_exports__["default"] = (michaelJacksonConfig);

/***/ }),

/***/ "./src/js/characters/pig.js":
/*!**********************************!*\
  !*** ./src/js/characters/pig.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_AngryPig_Idle_36x30_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/AngryPig/Idle (36x30).png */ "./src/img/AngryPig/Idle (36x30).png");
/* harmony import */ var _img_AngryPig_Walk_36x30_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/AngryPig/Walk (36x30).png */ "./src/img/AngryPig/Walk (36x30).png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");




var pigConfig = {
  image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_AngryPig_Idle_36x30_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  sprites: {
    stand: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_AngryPig_Idle_36x30_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "right",
        isStanding: true,
        isRunning: false,
        frameRate: 5
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_AngryPig_Idle_36x30_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 8,
        direction: "left",
        isStanding: true,
        isRunning: false,
        frameRate: 5
      }
    },
    run: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_AngryPig_Walk_36x30_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 15,
        direction: "right",
        isStanding: false,
        isRunning: true,
        frameRate: 2
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_AngryPig_Walk_36x30_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 15,
        direction: "left",
        isStanding: false,
        isRunning: true,
        frameRate: 2
      }
    },
    jump: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_AngryPig_Walk_36x30_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 15,
        direction: "right",
        isStanding: false,
        isRunning: false,
        frameRate: 2
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_AngryPig_Walk_36x30_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 15,
        direction: "left",
        isStanding: false,
        isRunning: false,
        frameRate: 2
      }
    }
  },
  imageWidth: 36,
  imageHeight: 30,
  width: 116,
  height: 96,
  canFly: false,
  speed: 7,
  jumpHeight: 16,
  name: "pig"
};
/* harmony default export */ __webpack_exports__["default"] = (pigConfig);

/***/ }),

/***/ "./src/js/characters/rhino.js":
/*!************************************!*\
  !*** ./src/js/characters/rhino.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_Rino_Idle_52x34_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/Rino/Idle (52x34).png */ "./src/img/Rino/Idle (52x34).png");
/* harmony import */ var _img_Rino_Run_52x34_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/Rino/Run (52x34).png */ "./src/img/Rino/Run (52x34).png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");




var rhinoConfig = {
  image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Rino_Idle_52x34_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  sprites: {
    stand: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Rino_Idle_52x34_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 10,
        direction: "right",
        isStanding: true,
        isRunning: false,
        frameRate: 3
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Rino_Idle_52x34_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 10,
        direction: "left",
        isStanding: true,
        isRunning: false,
        frameRate: 3
      }
    },
    run: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Rino_Run_52x34_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 5,
        direction: "right",
        isStanding: false,
        isRunning: true,
        frameRate: 0
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Rino_Run_52x34_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 5,
        direction: "left",
        isStanding: false,
        isRunning: true,
        frameRate: 0
      }
    },
    jump: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Rino_Run_52x34_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 5,
        direction: "right",
        isStanding: false,
        isRunning: false,
        frameRate: 0
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Rino_Run_52x34_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 5,
        direction: "left",
        isStanding: false,
        isRunning: false,
        frameRate: 0
      }
    }
  },
  imageWidth: 52,
  imageHeight: 34,
  width: 138,
  height: 90,
  canFly: false,
  speed: 20,
  jumpHeight: 10,
  name: "rhino"
};
/* harmony default export */ __webpack_exports__["default"] = (rhinoConfig);

/***/ }),

/***/ "./src/js/characters/snail.js":
/*!************************************!*\
  !*** ./src/js/characters/snail.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_Snail_Idle_38x24_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/Snail/Idle (38x24).png */ "./src/img/Snail/Idle (38x24).png");
/* harmony import */ var _img_Snail_Walk_38x24_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/Snail/Walk (38x24).png */ "./src/img/Snail/Walk (38x24).png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");




var snailConfig = {
  image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Snail_Idle_38x24_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  sprites: {
    stand: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Snail_Idle_38x24_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 14,
        direction: "right",
        isStanding: true,
        isRunning: false,
        frameRate: 3
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Snail_Idle_38x24_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 14,
        direction: "left",
        isStanding: true,
        isRunning: false,
        frameRate: 3
      }
    },
    run: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Snail_Walk_38x24_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 9,
        direction: "right",
        isStanding: false,
        isRunning: true,
        frameRate: 3
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Snail_Walk_38x24_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 9,
        direction: "left",
        isStanding: false,
        isRunning: true,
        frameRate: 3
      }
    },
    jump: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Snail_Walk_38x24_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 9,
        direction: "right",
        isStanding: false,
        isRunning: false,
        frameRate: 3
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createImage"])(_img_Snail_Walk_38x24_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 9,
        direction: "left",
        isStanding: false,
        isRunning: false,
        frameRate: 3
      }
    }
  },
  imageWidth: 38,
  imageHeight: 24,
  width: 110,
  height: 70,
  canFly: false,
  speed: 2,
  jumpHeight: 5,
  name: "snail"
};
/* harmony default export */ __webpack_exports__["default"] = (snailConfig);

/***/ }),

/***/ "./src/js/characters/sonic.js":
/*!************************************!*\
  !*** ./src/js/characters/sonic.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_Sonic_sonic_standing_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/Sonic/sonic_standing.png */ "./src/img/Sonic/sonic_standing.png");
/* harmony import */ var _img_Sonic_sonic_running_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/Sonic/sonic_running.png */ "./src/img/Sonic/sonic_running.png");
/* harmony import */ var _img_Sonic_sonic_jumping_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/Sonic/sonic_jumping.png */ "./src/img/Sonic/sonic_jumping.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");




var sonicConfig = {
  image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Sonic_sonic_standing_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  sprites: {
    stand: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Sonic_sonic_standing_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 5,
        direction: "right",
        isStanding: true,
        isRunning: false,
        frameRate: 12
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Sonic_sonic_standing_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        frameCount: 5,
        direction: "left",
        isStanding: true,
        isRunning: false,
        frameRate: 12
      }
    },
    run: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Sonic_sonic_running_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 2,
        direction: "right",
        isStanding: false,
        isRunning: true,
        frameRate: 1
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Sonic_sonic_running_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        frameCount: 2,
        direction: "left",
        isStanding: false,
        isRunning: true,
        frameRate: 1
      }
    },
    jump: {
      right: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Sonic_sonic_jumping_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        frameCount: 0,
        direction: "right",
        isStanding: false,
        isRunning: false,
        frameRate: 5
      },
      left: {
        image: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_Sonic_sonic_jumping_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        frameCount: 0,
        direction: "left",
        isStanding: false,
        isRunning: false,
        frameRate: 5
      }
    }
  },
  imageWidth: 40,
  imageHeight: 40,
  width: 90,
  height: 90,
  canFly: false,
  speed: 10,
  jumpHeight: 16,
  name: "sonic"
};
/* harmony default export */ __webpack_exports__["default"] = (sonicConfig);

/***/ }),

/***/ "./src/js/enemy.js":
/*!*************************!*\
  !*** ./src/js/enemy.js ***!
  \*************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony import */ var _canvas_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas_core */ "./src/js/canvas_core.js");
/* harmony import */ var _img_bunny_Idle_34x44_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bunny/Idle (34x44).png */ "./src/img/bunny/Idle (34x44).png");
/* harmony import */ var _img_bunny_Run_34x44_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/bunny/Run (34x44).png */ "./src/img/bunny/Run (34x44).png");
/* harmony import */ var _img_bunny_Jump_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/bunny/Jump.png */ "./src/img/bunny/Jump.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _characters_bunny__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/bunny */ "./src/js/characters/bunny.js");
/* harmony import */ var _characters_pig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/pig */ "./src/js/characters/pig.js");
/* harmony import */ var _characters_bat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/bat */ "./src/js/characters/bat.js");
/* harmony import */ var _characters_rhino__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./characters/rhino */ "./src/js/characters/rhino.js");
/* harmony import */ var _characters_bluebird__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./characters/bluebird */ "./src/js/characters/bluebird.js");
/* harmony import */ var _characters_snail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./characters/snail */ "./src/js/characters/snail.js");
/* harmony import */ var _characters_doraemon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./characters/doraemon */ "./src/js/characters/doraemon.js");
/* harmony import */ var _characters_lavabird__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./characters/lavabird */ "./src/js/characters/lavabird.js");
/* harmony import */ var _characters_mario__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./characters/mario */ "./src/js/characters/mario.js");
/* harmony import */ var _characters_michaeljackson__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./characters/michaeljackson */ "./src/js/characters/michaeljackson.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
















var enemyList = {
  bunny: _characters_bunny__WEBPACK_IMPORTED_MODULE_5__["default"],
  pig: _characters_pig__WEBPACK_IMPORTED_MODULE_6__["default"],
  bat: _characters_bat__WEBPACK_IMPORTED_MODULE_7__["default"],
  rhino: _characters_rhino__WEBPACK_IMPORTED_MODULE_8__["default"],
  bluebird: _characters_bluebird__WEBPACK_IMPORTED_MODULE_9__["default"],
  snail: _characters_snail__WEBPACK_IMPORTED_MODULE_10__["default"],
  doraemon: _characters_doraemon__WEBPACK_IMPORTED_MODULE_11__["default"],
  lavabird: _characters_lavabird__WEBPACK_IMPORTED_MODULE_12__["default"],
  mario: _characters_mario__WEBPACK_IMPORTED_MODULE_13__["default"],
  michaeljackson: _characters_michaeljackson__WEBPACK_IMPORTED_MODULE_14__["default"]
};
var Enemy = /*#__PURE__*/function () {
  function Enemy(enemyName, startPoint) {
    _classCallCheck(this, Enemy);

    this.currentCharacter = enemyList[enemyName];
    this.isActive = false;
    this.startPoint = startPoint;
    this.position = {
      x: startPoint,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = this.currentCharacter.width;
    this.height = this.currentCharacter.height;
    this.originalSpeed = 5;
    this.nitroSpeed = 15;
    this.speed = this.originalSpeed;
    this.isJumping = false;
    this.isRunning = false;
    this.isStanding = true;
    this.facingDirection = "right";
    this.jump = false;
    this.jumpHeight = 14;
    this.frames = 0;
    this.image = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_bunny_Idle_34x44_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
    this.startFrame = 0;
    this.sprites = this.currentCharacter.sprites;
    this.currentSprite = this.sprites.stand.right;
    this.currentPlayer = 0;
  }

  _createClass(Enemy, [{
    key: "mirrorImage",
    value: function mirrorImage() {
      var horizontal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var vertical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].save(); // save the current canvas state

      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].setTransform(horizontal ? -1 : 1, 0, // set the direction of x axis
      0, vertical ? -1 : 1, // set the direction of y axis
      this.position.x + (horizontal ? this.width : 0), // set the x origin
      this.position.y + (vertical ? this.height : 0) // set the y origin
      );
      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].drawImage(this.currentSprite.image, this.currentCharacter.imageWidth * this.frames, 0, this.currentCharacter.imageWidth, this.currentCharacter.imageHeight, 0, 0, this.width, this.height);
      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].restore();
    }
  }, {
    key: "drawLeft",
    value: function drawLeft() {
      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].drawImage(this.currentSprite.image, this.currentCharacter.imageWidth * this.frames, 0, this.currentCharacter.imageWidth, this.currentCharacter.imageHeight, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "attackPlayer",
    value: function attackPlayer(player) {
      if (this.currentCharacter.canFly) {
        if (player.position.x > this.position.x) {
          this.position.x += Math.round(this.currentCharacter.speed / 3);
          this.facingDirection = "right";
        } else {
          this.position.x -= Math.round(this.currentCharacter.speed / 3);
          this.facingDirection = "left";
        }

        if (player.position.y > this.position.y) {
          this.position.y++;
        } else {
          this.position.y = this.position.y - 2;
        }
      } else {
        if (player.position.x > this.position.x) {
          this.position.x += Math.round(this.currentCharacter.speed / 3);
          this.facingDirection = "right";
          this.isRunning = true;
          this.isStanding = false;
          this.currentSprite = this.sprites.run.right;
        } else {
          this.position.x -= Math.round(this.currentCharacter.speed / 3);
          this.facingDirection = "left";
          this.isRunning = true;
          this.isStanding = false;
          this.currentSprite = this.sprites.run.left;
        }

        if (player.position.y > this.position.y) {//jump
        } else {}
      }
    }
  }, {
    key: "drawRight",
    value: function drawRight() {
      this.mirrorImage(true, false);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.facingDirection == "right" ? this.drawRight() : this.drawLeft();
    }
  }, {
    key: "update",
    value: function update() {
      // if (this.speed === this.nitroSpeed) {
      //   this.currentCharacter = bunnyConfig;
      //   this.sprites = this.currentCharacter.sprites;
      //   this.width = this.currentCharacter.width;
      //   this.height = this.currentCharacter.height;
      // } else {
      //   this.currentCharacter = pigConfig;
      //   this.sprites = this.currentCharacter.sprites;
      //   this.width = this.currentCharacter.width;
      //   this.height = this.currentCharacter.height;
      // }
      this.startFrame == 0 && this.frames++;
      this.startFrame++;
      this.startFrame > this.currentSprite.frameRate && (this.startFrame = !this.startFrame);
      this.frames > this.currentSprite.frameCount && (this.frames = 0);
      this.draw();

      if (this.currentCharacter.canFly) {
        this.velocity.y > 0 ? this.position.y += 1 : this.position.y += this.velocity.y;
      } else {
        this.position.y += this.velocity.y;
      }

      this.position.x += this.velocity.x;

      if (this.height + this.position.y + this.velocity.y <= _canvas_core__WEBPACK_IMPORTED_MODULE_0__["canvas"].height) {
        this.velocity.y += _utils__WEBPACK_IMPORTED_MODULE_4__["gravity"] * 16;
      }
    }
  }]);

  return Enemy;
}();

/***/ }),

/***/ "./src/js/enemy_generator.js":
/*!***********************************!*\
  !*** ./src/js/enemy_generator.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./src/js/enemy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var enemyList = ["bat", "rabbit", "rhino", "pig", "bluebird", "snail", "doraemon", "lavabird", "mario", "michaeljackson"];
var testlist = ["mario", "mario", "mario", "mario", "mario", "mario", "mario", "mario", "mario", "mario"]; // enemyList = testlist;

var EnemyGenerator = /*#__PURE__*/function () {
  function EnemyGenerator() {
    _classCallCheck(this, EnemyGenerator);

    this.enemies = [];
    this.scrollPoints = [];
  }

  _createClass(EnemyGenerator, [{
    key: "generate",
    value: function generate(playerPos, s_point, scrollOffSet, enemies) {
      if (scrollOffSet > 3500 && !this.scrollPoints.includes(s_point) && scrollOffSet > 0) {
        if (Math.round(Math.random() * 10) <= 3) {
          enemies.unshift(new _enemy__WEBPACK_IMPORTED_MODULE_0__["Enemy"](enemyList[Math.round(Math.random() * enemyList.length - 1)], playerPos + 500));
        }
      }

      this.scrollPoints.push(s_point);
    }
  }]);

  return EnemyGenerator;
}();

/* harmony default export */ __webpack_exports__["default"] = (EnemyGenerator);

/***/ }),

/***/ "./src/js/generic_object.js":
/*!**********************************!*\
  !*** ./src/js/generic_object.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericObject; });
/* harmony import */ var _canvas_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas_core */ "./src/js/canvas_core.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();



/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_AngryPig_Pig_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/AngryPig/Pig.png */ "./src/img/AngryPig/Pig.png");
/* harmony import */ var _img_bunny_Fall_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bunny/Fall.png */ "./src/img/bunny/Fall.png");
/* harmony import */ var _img_Rino_Rhino_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/Rino/Rhino.png */ "./src/img/Rino/Rhino.png");
/* harmony import */ var _img_Bat_Bat_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/Bat/Bat.png */ "./src/img/Bat/Bat.png");
/* harmony import */ var _img_BlueBird_BlueBird_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/BlueBird/BlueBird.png */ "./src/img/BlueBird/BlueBird.png");






function Menu() {
  function add(character) {
    var images = {
      pig: {
        image: function () {
          var img = document.createElement("img");
          img.src = _img_AngryPig_Pig_png__WEBPACK_IMPORTED_MODULE_0__["default"];
          return img;
        }()
      },
      bunny: {
        image: function () {
          var img = document.createElement("img");
          img.src = _img_bunny_Fall_png__WEBPACK_IMPORTED_MODULE_1__["default"];
          return img;
        }()
      },
      rhino: {
        image: function () {
          var img = document.createElement("img");
          img.src = _img_Rino_Rhino_png__WEBPACK_IMPORTED_MODULE_2__["default"];
          return img;
        }()
      },
      bat: {
        image: function () {
          var img = document.createElement("img");
          img.src = _img_Bat_Bat_png__WEBPACK_IMPORTED_MODULE_3__["default"];
          return img;
        }()
      },
      bluebird: {
        image: function () {
          var img = document.createElement("img");
          img.src = _img_BlueBird_BlueBird_png__WEBPACK_IMPORTED_MODULE_4__["default"];
          return img;
        }()
      }
    };
    var src = document.getElementById("character-list");

    try {
      src.appendChild(images[character].image);
    } catch (_unused) {}
  }

  function clear() {
    var src = document.getElementById("character-list");
    src.innerHTML = "";
  }

  return {
    add: add,
    clear: clear
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/js/platform-assets/platform.js":
/*!********************************************!*\
  !*** ./src/js/platform-assets/platform.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Platform; });
/* harmony import */ var _canvas_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas_core */ "./src/js/canvas_core.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();



/***/ }),

/***/ "./src/js/platform-assets/platform_generator.js":
/*!******************************************************!*\
  !*** ./src/js/platform-assets/platform_generator.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ "./src/js/platform-assets/platform.js");
/* harmony import */ var _img_platform_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/platform-2.png */ "./src/img/platform-2.png");
/* harmony import */ var _img_platformSmallTall_02_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/platformSmallTall-02.png */ "./src/img/platformSmallTall-02.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var platformImage = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_platform_2_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var platformSmallTallImage = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_img_platformSmallTall_02_png__WEBPACK_IMPORTED_MODULE_2__["default"]);

var PlatformItems = /*#__PURE__*/function () {
  function PlatformItems() {
    _classCallCheck(this, PlatformItems);

    this.platforms = [];
    this.scrollPoints = [];
  }

  _createClass(PlatformItems, [{
    key: "generateTerrain",
    value: function generateTerrain(playerPos, s_point) {
      this.scrollPoints.push(s_point);
      var randomLocation = Math.round(Math.random() * 1500) + playerPos + 100;

      if (Math.round(Math.random() * 10) <= 3) {
        this.platforms.unshift(new _platform__WEBPACK_IMPORTED_MODULE_0__["default"]({
          x: randomLocation + platformSmallTallImage.width + 1200,
          y: Math.round(Math.random() * 300),
          image: platformSmallTallImage
        }));
      }

      if (Math.round(Math.random() * 10) <= 5) {
        this.platforms.unshift(new _platform__WEBPACK_IMPORTED_MODULE_0__["default"]({
          x: randomLocation - platformSmallTallImage.width * 2 + 1200,
          y: Math.round(Math.random() * 500) + 300,
          image: platformSmallTallImage
        }));
      }

      if (Math.round(Math.random() * 10) <= 5) {
        this.platforms.unshift(new _platform__WEBPACK_IMPORTED_MODULE_0__["default"]({
          x: randomLocation - platformSmallTallImage.width * 2 + 1200,
          y: Math.round(Math.random() * 300) + 200,
          image: platformSmallTallImage
        }));
        this.platforms.unshift(new _platform__WEBPACK_IMPORTED_MODULE_0__["default"]({
          x: randomLocation - platformSmallTallImage.width + 1200,
          y: 250,
          image: platformSmallTallImage
        }));
      }

      this.platforms.push(new _platform__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: randomLocation + 1200,
        y: 470,
        image: platformImage
      }));
    }
  }, {
    key: "platformGenerator",
    value: function platformGenerator() {
      return [new _platform__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: platformImage.width * 4 + 300 - platformSmallTallImage.width * 2,
        y: 300,
        image: platformSmallTallImage
      }), new _platform__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: platformImage.width * 4 + 300 - platformSmallTallImage.width,
        y: 250,
        image: platformSmallTallImage
      }), new _platform__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: -1,
        y: 470,
        image: platformImage
      }), new _platform__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: platformImage.width - 3,
        y: 470,
        image: platformImage
      }), new _platform__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: platformImage.width * 2 + 100,
        y: 470,
        image: platformImage
      }), new _platform__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: platformImage.width * 3 + 300,
        y: 470,
        image: platformImage
      }), new _platform__WEBPACK_IMPORTED_MODULE_0__["default"]({
        x: platformImage.width * 4 + 650,
        y: 470,
        image: platformImage
      })];
    }
  }]);

  return PlatformItems;
}();

/* harmony default export */ __webpack_exports__["default"] = (PlatformItems);

/***/ }),

/***/ "./src/js/platform.js":
/*!****************************!*\
  !*** ./src/js/platform.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Platform; });
/* harmony import */ var _canvas_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas_core */ "./src/js/canvas_core.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();



/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _canvas_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas_core */ "./src/js/canvas_core.js");
/* harmony import */ var _img_bunny_Idle_34x44_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bunny/Idle (34x44).png */ "./src/img/bunny/Idle (34x44).png");
/* harmony import */ var _img_bunny_Run_34x44_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/bunny/Run (34x44).png */ "./src/img/bunny/Run (34x44).png");
/* harmony import */ var _img_bunny_Jump_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/bunny/Jump.png */ "./src/img/bunny/Jump.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _characters_bunny__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/bunny */ "./src/js/characters/bunny.js");
/* harmony import */ var _characters_pig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/pig */ "./src/js/characters/pig.js");
/* harmony import */ var _characters_bat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/bat */ "./src/js/characters/bat.js");
/* harmony import */ var _characters_sonic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./characters/sonic */ "./src/js/characters/sonic.js");
/* harmony import */ var _characters_mario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./characters/mario */ "./src/js/characters/mario.js");
/* harmony import */ var _characters_michaeljackson__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./characters/michaeljackson */ "./src/js/characters/michaeljackson.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.playerList = [_characters_sonic__WEBPACK_IMPORTED_MODULE_8__["default"]];
    this.currentCharacter = _characters_sonic__WEBPACK_IMPORTED_MODULE_8__["default"];
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = this.currentCharacter.width;
    this.height = this.currentCharacter.height;
    this.originalSpeed = 5;
    this.nitroSpeed = 15;
    this.speed = this.originalSpeed;
    this.isJumping = false;
    this.isRunning = false;
    this.isStanding = true;
    this.facingDirection = "right";
    this.jump = false;
    this.jumpHeight = 14;
    this.frames = 0;
    this.image = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_bunny_Idle_34x44_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
    this.startFrame = 0;
    this.sprites = this.currentCharacter.sprites;
    this.currentSprite = this.sprites.stand.right;
    this.currentPlayer = 0;
  }

  _createClass(Player, [{
    key: "mirrorImage",
    value: function mirrorImage() {
      var horizontal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var vertical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].save(); // save the current canvas state

      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].setTransform(horizontal ? -1 : 1, 0, // set the direction of x axis
      0, vertical ? -1 : 1, // set the direction of y axis
      this.position.x + (horizontal ? this.width : 0), // set the x origin
      this.position.y + (vertical ? this.height : 0) // set the y origin
      );
      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].drawImage(this.currentSprite.image, this.currentCharacter.imageWidth * this.frames, 0, this.currentCharacter.imageWidth, this.currentCharacter.imageHeight, 0, 0, this.width, this.height);
      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].restore();
    }
  }, {
    key: "drawLeft",
    value: function drawLeft() {
      _canvas_core__WEBPACK_IMPORTED_MODULE_0__["c"].drawImage(this.currentSprite.image, this.currentCharacter.imageWidth * this.frames, 0, this.currentCharacter.imageWidth, this.currentCharacter.imageHeight, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "drawRight",
    value: function drawRight() {
      this.mirrorImage(true, false);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.facingDirection == "right" ? this.drawRight() : this.drawLeft();
    }
  }, {
    key: "changePlayer",
    value: function changePlayer() {
      if (this.currentPlayer < this.playerList.length - 1) {
        this.currentPlayer++;
      } else {
        this.currentPlayer = 0;
      }

      this.currentCharacter = this.playerList[this.currentPlayer];
      this.sprites = this.currentCharacter.sprites;
      this.width = this.currentCharacter.width;
      this.height = this.currentCharacter.height;
      this.frames = 0;
      this.startFrame = 0;
    }
  }, {
    key: "update",
    value: function update() {
      // if (this.speed === this.nitroSpeed) {
      //   this.currentCharacter = bunnyConfig;
      //   this.sprites = this.currentCharacter.sprites;
      //   this.width = this.currentCharacter.width;
      //   this.height = this.currentCharacter.height;
      // } else {
      //   this.currentCharacter = pigConfig;
      //   this.sprites = this.currentCharacter.sprites;
      //   this.width = this.currentCharacter.width;
      //   this.height = this.currentCharacter.height;
      // }
      this.startFrame == 0 && this.frames++;
      this.startFrame++;
      this.startFrame > this.currentSprite.frameRate && (this.startFrame = !this.startFrame);
      this.frames > this.currentSprite.frameCount && (this.frames = 0);
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.height + this.position.y + this.velocity.y <= _canvas_core__WEBPACK_IMPORTED_MODULE_0__["canvas"].height) {
        this.velocity.y += _utils__WEBPACK_IMPORTED_MODULE_4__["gravity"];
      }
    }
  }]);

  return Player;
}();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: createImage, gravity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return createImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gravity", function() { return gravity; });
function createImage(imageSrc) {
  var image2 = new Image();
  image2.src = imageSrc;
  return image2;
}

var gravity = 0.5;


/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map