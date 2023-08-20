"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/mine"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/mine/mine.tsx":
/*!******************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/mine/mine.tsx ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Mine; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/userInfo */ "./src/store/userInfo.ts");
/* harmony import */ var _static_mine_chat_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/mine/chat.png */ "./src/static/mine/chat.png");
/* harmony import */ var _static_mine_profile_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/mine/profile.png */ "./src/static/mine/profile.png");
/* harmony import */ var _static_mine_logout_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/mine/logout.png */ "./src/static/mine/logout.png");
/* harmony import */ var _static_mine_login_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/mine/login.png */ "./src/static/mine/login.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);











function Mine() {
  var userInfo = (0,_store_userInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(function (state) {
    return state;
  });
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useLoad)(function () {
    if (!userInfo.isLogin) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
        url: '/pages/login/login'
      });
    }
  });
  var postInfo = {
    postNum: 0,
    collectedNum: 0,
    recentView: 0
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
    className: "mine-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "mine-topBackground"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "mine-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "mine-userInfo",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "mine-basicInfo",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Image, {
            src: "#",
            className: "mine-avatar",
            onClick: userInfo.toLoginPage
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
            className: "mine-nickname",
            children: userInfo.isLogin ? userInfo.nick_name : '请登录'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
            className: "mine-schoolID",
            children: userInfo.student_id
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "mine-moreInfo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "mine-moreInfo-item",
              children: ["Lv.", userInfo.user_level]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "mine-moreInfo-item",
              children: userInfo.grade
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "mine-moreInfo-item",
              children: userInfo.college
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "mine-postInfo",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "mine-postInfo-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
              className: "mine-postInfo-item-num",
              children: postInfo.postNum
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
              className: "mine-postInfo-item-text",
              children: "\u53D1\u5E16"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "mine-postInfo-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
              className: "mine-postInfo-item-num",
              children: postInfo.collectedNum
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
              className: "mine-postInfo-item-text",
              children: "\u6536\u85CF"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "mine-postInfo-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
              className: "mine-postInfo-item-num",
              children: postInfo.recentView
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
              className: "mine-postInfo-item-text",
              children: "\u6700\u8FD1\u6D4F\u89C8"
            })]
          })]
        })]
      }), userInfo.isLogin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "mine-functions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "mine-function mine-contactUs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Image, {
            src: _static_mine_chat_png__WEBPACK_IMPORTED_MODULE_2__
          }), "\u8054\u7CFB\u6211\u4EEC"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "mine-function mine-contactUs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Image, {
            src: _static_mine_profile_png__WEBPACK_IMPORTED_MODULE_3__
          }), "\u8EAB\u4EFD\u8BA4\u8BC1"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "mine-function mine-contactUs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Image, {
            src: _static_mine_logout_png__WEBPACK_IMPORTED_MODULE_4__
          }), "\u9000\u51FA\u767B\u5F55"]
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "mine-functions",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "mine-function mine-login",
          onClick: userInfo.toLoginPage,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Image, {
            src: _static_mine_login_png__WEBPACK_IMPORTED_MODULE_5__
          }), "\u767B\u5F55"]
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/mine/mine.tsx":
/*!*********************************!*\
  !*** ./src/pages/mine/mine.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_mine_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./mine.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/mine/mine.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_mine_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/mine/mine', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_mine_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/static/mine/chat.png":
/*!**********************************!*\
  !*** ./src/static/mine/chat.png ***!
  \**********************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIfSURBVHgB3VXtbdswEH2kiiBAI1cblJkgst0C/akN4m7QTtBuEHmCohO4niDuBE4GaK1MYHaCGk4LFAVE9o5kZcnf0b/kAQJF3vHe6fh4Ah47xD6jStIEpRyQ2yWETXkpmApYoWmc6Ptv41YEKukPYOyIXhPAagp4Q94/nNHiwhMKRTO25YeImsE7vU/0WBV3p+oszXb6kU11unPnS3twDMjxKmzIcSTY9ygSFffePTT4BkmcDurrYs1pzgXWy9k5WoBLCiFSSHOuF8WC1yRq2fNAB/sebWHtECwKpzwPWTNfslr0r+IGLRH2alLYFgLhNH5X36Cev04bc7oX6jRVjbXTN6pJY28p2MUmAcC6LqqNXLKonNE4CsGpfHKOEzlzF5DXOt0vOPnLMv24CuMuoNpG0IQwydrKImRYS1a88KP5iUNgBf3PtlpbLweXKGS/0yfuXXs1ejxbZUP9RSCrO+s/hW7Mg/T2+VAMKrWtzrJeoq+cwL7WcAjq7FXGA8n1epMgMhNwnYW4QltIM3JSvy/GGwTu8y24YyZoAe5h8NnnDc7KgQ9PgHv/rTtM/7kPCZ7TM6xn3yBAGWVutHRJWO/STIko3RuYklBxfxqCf9bL7/m6z0pFptSIhA4/kjGMmehlUfgM+x+ofBnZ7kISL+k9o02KJgtI+5ZKPNmWREWgf7tgO7poKejwFRH7HiMM/8XI3wwR0W9zi3yfDv4BenXNfoKcGggAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/static/mine/login.png":
/*!***********************************!*\
  !*** ./src/static/mine/login.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/mine/login.png";

/***/ }),

/***/ "./src/static/mine/logout.png":
/*!************************************!*\
  !*** ./src/static/mine/logout.png ***!
  \************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADtSURBVHgB7ZTNEYIwEIU30ZviYAcpIWID0IEdKJ3RgXZgB5gOpARGxyOJm4wip/ypMxz4DgwMm/eyL5kFmBg1LMkObJVd2YJziIRa/0op8JnCjJ5jTYirwAijgfnoZNE8hIAAqKvACFK5AVCt6SThewjAaWBMWtEAVYUxIbQKMXFGNISlnIEkGBdJm1u99lnj1cGbvhMlS/g3uhuWbI9syXNbXVAHQ3GQeLOI2sEcr/EvDXpxfAUFJcZ2stVHHPJA/F5XrjXeBjHiGq+IPuIqDRHXBIwKhaNCBY8Kq8Fr55dYcY09og7yb8QnxsETYudlyg5cF8YAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/static/mine/profile.png":
/*!*************************************!*\
  !*** ./src/static/mine/profile.png ***!
  \*************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHiSURBVHgB3VW9TsMwED6nCJCgYCYEk9+AUDGwUZ6AvkE7MvYN2k6MlCdo+wTwBi0zAqUjUz2WiYiChPoT89lNpf45aWBAcJKd2PfdnXP3nUP014WtAhLpTAHQPDGVNRuKtTDXZe+xEWfrxDrfydRwjBpRoJeV8cA7U3UErtFPBM5LGGr8BfM6t2h0O5kyfUcEd0Xo4JrsByhjvALLbRh7ikYpd4wI7Hl2gjpmTiM6Sx6A1ORU0o4hP3SzlzyACqR5Dsm1YoZr7gw2qZj8po+bdv1xHaMT5SMVpeTr+y/EnCLfOOCc7T/7w65JiS4qXz+8AlcvSami3++2bT5iGy2kYcksdIMxUxuBhTavyLenapT9ap0MylLgFODzKLRqg0FV6Xs+/bbEp2jzVNDaUBALxIxCORIp8+XHg5c4gNg+ySLXJQxNQ07R4iN1dzQIKvLTk7EBzL1jLjeF/LIbcNyjAS2eMoXADorNnCywF8AKYAuy50XfsGBNB0Fuo+6XpXboF207v7+sk4VmSWKGMHZvbGMDKNXCnDd1WFFCbD60nY27ADacZ02TU/xc0Ehls7/lupRyclNQDhbthn85YJWkvjqfL7SVpiLt5nRxJwa6LkBPBVB6HwxiHorbkO9ei/6lfAGoA6tfyFjwkQAAAABJRU5ErkJggg==";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/mine/mine.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=mine.js.map