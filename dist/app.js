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
require("./prebundle/node_modules_taro_weapp_prebundle_pubsub-js_js.js");
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

/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pubsub-js */ "webpack/container/remote/pubsub-js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./src/store/store.ts");
/* harmony import */ var _store_userInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/userInfo */ "./src/store/userInfo.ts");
/* harmony import */ var _store_postData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/postData */ "./src/store/postData.ts");
/* harmony import */ var _store_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/request */ "./src/store/request.ts");
/* harmony import */ var _common_launchUtilities_launchInitiater__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/launchUtilities/launchInitiater */ "./src/common/launchUtilities/launchInitiater.ts");
/* harmony import */ var _common_utilities_requester__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utilities/requester */ "./src/common/utilities/requester.ts");











// Utilities



// styles

function App(_ref) {
  var children = _ref.children;
  // 数据 store ————————————————————————————————————————————————————————————
  var _useStore = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state) {
      return [state.statusBarHeight, state.setStatusBarHeight];
    }),
    _useStore2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useStore, 2),
    statusBarHeight = _useStore2[0],
    setStatusBarHeight = _useStore2[1];
  var _usePostData = (0,_store_postData__WEBPACK_IMPORTED_MODULE_5__["default"])(function (state) {
      return [state, state.setPostData];
    }),
    _usePostData2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_usePostData, 2),
    postData = _usePostData2[0],
    setPostData = _usePostData2[1];
  var _useRequest = (0,_store_request__WEBPACK_IMPORTED_MODULE_6__["default"])(function (state) {
      return [state.requestUrl, state.setRequestUrl];
    }),
    _useRequest2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useRequest, 2),
    requestUrl = _useRequest2[0],
    setRequestUrl = _useRequest2[1];
  var _useUser = (0,_store_userInfo__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state) {
      return [state, state.setUserInfo];
    }),
    _useUser2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useUser, 2),
    userInfo = _useUser2[0],
    setUserInfo = _useUser2[1];

  // 请求初始数据————————————————————————————————————————————————————————————

  var initer = /*#__PURE__*/function () {
    var _ref2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/(0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee() {
      var systemInfoRes, launchInitiater, getOssParamsToken;
      return (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_common_utilities_requester__WEBPACK_IMPORTED_MODULE_8__.initContainer)({
              resourceEnv: 'prod-9gbm3fviea24ffc8',
              // 云环境
              serviceName: 'cqnu-backend' // 云服务名
            });

          case 2:
            _context.next = 4;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getSystemInfo();
          case 4:
            systemInfoRes = _context.sent;
            if (systemInfoRes.statusBarHeight) {
              setStatusBarHeight(systemInfoRes.statusBarHeight - 10);
            }
            ;

            // launchInitiater
            launchInitiater = new _common_launchUtilities_launchInitiater__WEBPACK_IMPORTED_MODULE_7__["default"](requestUrl, userInfo, postData); // 第一次进入 APP ，全部加载一次
            // 验证登录状态    
            launchInitiater.initialLoginValidation();
            // 获取 OSS 的 parameters
            launchInitiater.getOssParams();
            // 获取所有Tags
            launchInitiater.getAllTags();

            // 新用户注册 或 登录，需要重新加载一次，请在登录或注册成功后，发布此消息！！！
            getOssParamsToken = pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().subscribe('getOssParams', function () {
              launchInitiater = new _common_launchUtilities_launchInitiater__WEBPACK_IMPORTED_MODULE_7__["default"](requestUrl, userInfo, postData); // 传新数据

              launchInitiater.getOssParams();
            });
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function initer() {
      return _ref2.apply(this, arguments);
    };
  }();

  // 数据初始化：App 进入、登录、注册时
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    initer();
  }, []);

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













var config = {"pages":["pages/index/index","pages/study/study","pages/classtable/classtable","pages/mine/mine","pages/mine/myPosts/myposts","pages/mine/contactUs/contactUs","pages/mine/linkOfficial/linkOfficial","pages/service/service","pages/service/classroomNav/classroomNav","pages/posts/createpost/createpost","pages/posts/postpage/postpage","pages/search/search","pages/search/searchResult/searchResult","pages/login/login","pages/register/register"],"window":{"backgroundTextStyle":"light","navigationBarTextStyle":"black","navigationStyle":"custom"},"tabBar":{"color":"#1e1e1e","selectedColor":"#3236d7","backgroundColor":"#fff","borderStyle":"white","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"./static/tabBar/home-icon.png","selectedIconPath":"./static/tabBar/home-selectedIcon.png"},{"pagePath":"pages/study/study","text":"学习","iconPath":"./static/tabBar/study-icon.png","selectedIconPath":"./static/tabBar/study-selectedIcon.png"},{"pagePath":"pages/service/service","text":"服务","iconPath":"./static/tabBar/service-icon.png","selectedIconPath":"./static/tabBar/service-selectedIcon.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"./static/tabBar/mine-icon.png","selectedIconPath":"./static/tabBar/mine-selectedIcon.png"}]}};
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

/***/ "./src/common/launchUtilities/launchInitiater.ts":
/*!*******************************************************!*\
  !*** ./src/common/launchUtilities/launchInitiater.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_requester__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/requester */ "./src/common/utilities/requester.ts");







var LaunchInitiater = /*#__PURE__*/function () {
  function LaunchInitiater(requestUrl, userInfo, postData) {
    (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LaunchInitiater);
    (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "requestUrl", void 0);
    (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "userInfo", void 0);
    (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "postData", void 0);
    // static properties
    (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "token", _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'));
    this.requestUrl = requestUrl;
    this.userInfo = userInfo;
    this.postData = postData;
  }
  (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__["default"])(LaunchInitiater, [{
    key: "initialLoginValidation",
    value: function () {
      var _initialLoginValidation = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/(0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().mark(function _callee() {
        var _this = this;
        var loginValidateRes, userInfoArray;
        return (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_utilities_requester__WEBPACK_IMPORTED_MODULE_1__.makeRequest)({
                method: 'POST',
                url: this.requestUrl,
                path: '/api/v1/users/checkLoginStatus',
                header: {
                  Authorization: this.token
                },
                data: {
                  action: 'initialLoginValidation'
                }
              });
            case 2:
              loginValidateRes = _context.sent;
              console.log(loginValidateRes);

              // 验证成功， 从本地缓存中读取信息 / 失败则不会读取， isLogin 为 false
              if (loginValidateRes.statusCode.toString().startsWith('2')) {
                // 创建 userInfo 的浅拷贝，防止方法被覆写
                userInfoArray = Object.keys(this.userInfo).filter(function (key) {
                  return typeof _this.userInfo[key] !== 'function';
                }); // 防止方法被覆写
                userInfoArray.forEach(function (key) {
                  _this.userInfo.setUserInfo((0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])({}, key, _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync(key)));
                });
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function initialLoginValidation() {
        return _initialLoginValidation.apply(this, arguments);
      }
      return initialLoginValidation;
    }()
  }, {
    key: "getOssParams",
    value: function () {
      var _getOssParams = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/(0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().mark(function _callee2() {
        var ossParamsRes;
        return (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,_utilities_requester__WEBPACK_IMPORTED_MODULE_1__.makeRequest)({
                method: 'GET',
                url: this.requestUrl,
                path: '/api/v1/users/getOssParams',
                header: {
                  Authorization: this.token
                }
              });
            case 2:
              ossParamsRes = _context2.sent;
              // 将 OSS params 存入缓存 (OSSAccessKeyId, policy, signature)
              if (ossParamsRes.statusCode === 200) {
                Object.keys(ossParamsRes.data.data.params).forEach(function (key) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync(key, ossParamsRes.data.data.params[key]);
                });
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getOssParams() {
        return _getOssParams.apply(this, arguments);
      }
      return getOssParams;
    }()
  }, {
    key: "getAllTags",
    value: function () {
      var _getAllTags = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/(0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().mark(function _callee3() {
        var tags, tagsArray;
        return (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return (0,_utilities_requester__WEBPACK_IMPORTED_MODULE_1__.makeRequest)({
                method: 'GET',
                url: this.requestUrl,
                path: '/api/v1/posts/tags',
                timeout: 5000
              });
            case 3:
              tags = _context3.sent;
              tagsArray = tags.data.data.tags.map(function (item) {
                return item.name;
              }); // 将所有的tags存入 store
              this.postData.setPostData({
                tags: tagsArray
              });
              _context3.next = 11;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
                title: '数据加载失败',
                icon: 'error'
              });
            case 11:
              ;
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 8]]);
      }));
      function getAllTags() {
        return _getAllTags.apply(this, arguments);
      }
      return getAllTags;
    }()
  }]);
  return LaunchInitiater;
}();
;
/* harmony default export */ __webpack_exports__["default"] = (LaunchInitiater);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/app.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map