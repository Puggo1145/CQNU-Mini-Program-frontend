"use strict";
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_react-dom_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_react-router-dom_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-3ISTQUJZ_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-http_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-UHFSOJOK_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-react_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_taro_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_zustand_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-LNJCN3VW_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-html_dist_runtime_js.js");
require("./prebundle/remoteEntry.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_jsx-runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_js.js");

require("./common");
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.ts":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/store */ "./src/store/store.ts");
/* harmony import */ var _store_userInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/userInfo */ "./src/store/userInfo.ts");
/* harmony import */ var _store_postData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/postData */ "./src/store/postData.ts");
/* harmony import */ var _store_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/request */ "./src/store/request.ts");
/* harmony import */ var _common_launchUtilities_getOssParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/launchUtilities/getOssParams */ "./src/common/launchUtilities/getOssParams.ts");
/* harmony import */ var _common_launchUtilities_initialLoginValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/launchUtilities/initialLoginValidation */ "./src/common/launchUtilities/initialLoginValidation.ts");












function App(_ref) {
  var children = _ref.children;
  // 数据 store ————————————————————————————————————————————————————————————
  var _useStore = (0,_store_store__WEBPACK_IMPORTED_MODULE_1__["default"])(function (state) {
      return [state.statusBarHeight, state.setStatusBarHeight];
    }),
    _useStore2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useStore, 2),
    statusBarHeight = _useStore2[0],
    setStatusBarHeight = _useStore2[1];
  var _usePostData = (0,_store_postData__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state) {
      return [state, state.setPostData];
    }),
    _usePostData2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_usePostData, 2),
    postData = _usePostData2[0],
    setPostData = _usePostData2[1];
  var _useRequest = (0,_store_request__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state) {
      return [state.requestUrl, state.setRequestUrl];
    }),
    _useRequest2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useRequest, 2),
    requestUrl = _useRequest2[0],
    setRequestUrl = _useRequest2[1];
  var _useUser = (0,_store_userInfo__WEBPACK_IMPORTED_MODULE_2__["default"])(function (state) {
      return [state, state.setUserInfo];
    }),
    _useUser2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useUser, 2),
    userInfo = _useUser2[0],
    setUserInfo = _useUser2[1];
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useLaunch)( /*#__PURE__*/(0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee() {
    return (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // 获取全局 statusBarHeight        
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSystemInfo({
            success: function success(res) {
              if (res.statusBarHeight) {
                setStatusBarHeight(res.statusBarHeight - 10);
              }
            }
          });
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#1e1e1e'
          });

          // 请求初始数据————————————————————————————————————————————————————————————

          // 验证登录状态    
          (0,_common_launchUtilities_initialLoginValidation__WEBPACK_IMPORTED_MODULE_6__["default"])(requestUrl, userInfo); // 验证登录状态，数据存入缓存

          // 获取 OSS 的 parameters
          (0,_common_launchUtilities_getOssParams__WEBPACK_IMPORTED_MODULE_5__["default"])(requestUrl);
        // 获取 OSS Params，数据存入缓存

        // 获取所有Tags 
        // Taro.request({
        //   method: 'GET',
        //   url: requestUrl + '/posts/gettags',
        //   success(res) {
        //     setPostData({ tags: res.data.data.tags })
        //   }
        // })
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));

  // children 是将要会渲染的页面
  return children;
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "webpack/container/remote/@tarojs/plugin-platform-weapp/dist/runtime");
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-html/dist/runtime */ "webpack/container/remote/@tarojs/plugin-html/dist/runtime");
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "webpack/container/remote/@tarojs/plugin-framework-react/dist/runtime");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_plugin_http_dist_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/plugin-http/dist/runtime */ "webpack/container/remote/@tarojs/plugin-http/dist/runtime");
/* harmony import */ var _tarojs_plugin_http_dist_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_http_dist_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./app.ts */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "webpack/container/remote/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);













var config = {"pages":["pages/index/index","pages/study/study","pages/classtable/classtable","pages/mine/mine","pages/service/service","pages/service/classroomNav/classroomNav","pages/posts/createpost/createpost","pages/posts/postpage/postpage","pages/search/search","pages/search/searchResult/searchResult","pages/login/login","pages/register/register"],"window":{"backgroundTextStyle":"light","navigationBarTextStyle":"black","navigationStyle":"custom"},"tabBar":{"color":"#1e1e1e","selectedColor":"#3236d7","backgroundColor":"#fff","borderStyle":"white","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"./static/tabBar/home-icon.png","selectedIconPath":"./static/tabBar/home-selectedIcon.png"},{"pagePath":"pages/study/study","text":"学习","iconPath":"./static/tabBar/study-icon.png","selectedIconPath":"./static/tabBar/study-selectedIcon.png"},{"pagePath":"pages/service/service","text":"服务","iconPath":"./static/tabBar/service-icon.png","selectedIconPath":"./static/tabBar/service-selectedIcon.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"./static/tabBar/mine-icon.png","selectedIconPath":"./static/tabBar/mine-selectedIcon.png"}]}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__.createReactApp)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_ts__WEBPACK_IMPORTED_MODULE_6__["default"], react__WEBPACK_IMPORTED_MODULE_7__, (react_dom__WEBPACK_IMPORTED_MODULE_8___default()), config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.initPxTransform)({
  designWidth: 750,
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905},
  baseFontSize: 20,
  unitPrecision: undefined,
  targetUnit: undefined
})


/***/ }),

/***/ "./src/common/launchUtilities/getOssParams.ts":
/*!****************************************************!*\
  !*** ./src/common/launchUtilities/getOssParams.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);



var token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token');
var getOssParams = /*#__PURE__*/function () {
  var _ref = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee(requestUrl) {
    var ossParamsRes;
    return (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
            method: 'GET',
            url: "".concat(requestUrl, "/v1/users/getOssParams"),
            header: {
              Authorization: token
            }
          });
        case 2:
          ossParamsRes = _context.sent;
          // 将 OSS params 存入缓存
          Object.keys(ossParamsRes.data.data.params).forEach(function (key) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync(key, ossParamsRes.data.data.params[key]);
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getOssParams(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (getOssParams);

/***/ }),

/***/ "./src/common/launchUtilities/initialLoginValidation.ts":
/*!**************************************************************!*\
  !*** ./src/common/launchUtilities/initialLoginValidation.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);




var initialLoginValidation = /*#__PURE__*/function () {
  var _ref = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee(requestUrl, userInfo) {
    var token, loginValidateRes, userInfoArray;
    return (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token');
          _context.next = 3;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
            method: 'POST',
            url: requestUrl + '/v1/users/checkLoginStatus',
            header: {
              Authorization: token
            },
            data: {
              action: 'initialLoginValidation'
            }
          });
        case 3:
          loginValidateRes = _context.sent;
          console.log(loginValidateRes);

          // 验证成功， 从本地缓存中读取信息 / 失败则不会读取， isLogin 为 false
          if (loginValidateRes.statusCode.toString().startsWith('2')) {
            // 创建 userInfo 的浅拷贝，防止方法被覆写
            userInfoArray = Object.keys(userInfo).filter(function (key) {
              return typeof userInfo[key] !== 'function';
            }); // 防止方法被覆写
            userInfoArray.forEach(function (key) {
              userInfo.setUserInfo((0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])({}, key, _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync(key)));
            });
          }
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function initialLoginValidation(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (initialLoginValidation);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/app.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map