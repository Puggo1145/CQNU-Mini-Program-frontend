"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "webpack/container/remote/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ "./src/store/store.ts");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/Header */ "./src/pages/index/Header/Header.tsx");
/* harmony import */ var _Content_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content/Content */ "./src/pages/index/Content/Content.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








function Index() {
  var statusBarHeight = (0,_store_store__WEBPACK_IMPORTED_MODULE_1__["default"])(function (state) {
    return state.statusBarHeight;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "index-wrapper",
      style: {
        paddingTop: statusBarHeight + 'px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Content_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
    })
  });
}

/***/ }),

/***/ "./src/pages/index/Content/Content.tsx":
/*!*********************************************!*\
  !*** ./src/pages/index/Content/Content.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Content; }
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "webpack/container/remote/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _TagContent_TagContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagContent/TagContent */ "./src/pages/index/Content/TagContent/TagContent.tsx");
/* harmony import */ var _Hot_Hot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hot/Hot */ "./src/pages/index/Content/Hot/Hot.tsx");
/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message/Message */ "./src/pages/index/Content/Message/Message.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function Content() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "index-content",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Routes, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
        path: "/pages/index/index",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TagContent_TagContent__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
        path: "/pages/index/hot",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Hot_Hot__WEBPACK_IMPORTED_MODULE_2__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
        path: "/pages/index/message",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Message_Message__WEBPACK_IMPORTED_MODULE_3__["default"], {})
      })]
    })
  });
}

/***/ }),

/***/ "./src/pages/index/Content/Hot/Hot.tsx":
/*!*********************************************!*\
  !*** ./src/pages/index/Content/Hot/Hot.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Hot; }
/* harmony export */ });
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utilities_requester__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/utilities/requester */ "./src/common/utilities/requester.ts");
/* harmony import */ var _store_userInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/userInfo */ "./src/store/userInfo.ts");
/* harmony import */ var _store_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/request */ "./src/store/request.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);












function Hot() {
  var _useUser = (0,_store_userInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state) {
      return [state.isLogin, state.toLoginPage];
    }),
    _useUser2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useUser, 2),
    isLogin = _useUser2[0],
    toLoginPage = _useUser2[1];
  var _useRequest = (0,_store_request__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state) {
      return [state.requestUrl, state.setRequestUrl];
    }),
    _useRequest2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useRequest, 2),
    requestUrl = _useRequest2[0],
    setRequestUrl = _useRequest2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    hotTags = _useState2[0],
    setHotTags = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['#ee5551', '#fc8623', '#e7ac67', '#ec9b3a']),
    _useState4 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    hotTagColor = _useState4[0],
    setHotTagColor = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // 获取热榜
    fetchData();
  }, []);
  var fetchData = /*#__PURE__*/function () {
    var _ref = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee() {
      var res, hotTags;
      return (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_common_utilities_requester__WEBPACK_IMPORTED_MODULE_2__.makeRequest)({
              method: 'GET',
              url: requestUrl,
              path: '/api/v1/posts/getHotList'
            });
          case 2:
            res = _context.sent;
            console.log(res);
            hotTags = res.data.data.posts.map(function (post) {
              return {
                post_id: post._id,
                title: post.title,
                hot_index: Math.round(post.heat)
              };
            });
            setHotTags(hotTags);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "hot-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "hot-banner",
      children: "Banner"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.ScrollView, {
      className: "hot-tags",
      scrollY: true,
      enablePassive: "true",
      enhanced: true,
      showScrollbar: false,
      children: hotTags.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "hot-tag",
          onClick: function onClick() {
            if (!isLogin) {
              toLoginPage();
              return;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
              url: '/pages/posts/postpage/postpage?' + "post_id=".concat(item.post_id)
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "hot-tag-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "hot-tag-rank",
              style: index < 3 ? {
                backgroundColor: hotTagColor[index]
              } : {
                color: hotTagColor[3]
              },
              children: index + 1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "hot-tag-title",
              children: item.title
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "hot-tag-index",
            children: [item.hot_index, " \u70ED\u5EA6"]
          })]
        }, item.post_id);
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/index/Content/Message/Message.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/index/Content/Message/Message.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Message; }
/* harmony export */ });
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);






function Message() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      receivedLikes: '28',
      reply: '23',
      officialMessages: '34'
    }),
    _useState2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    messageNumber = _useState2[0],
    setMessageNumber = _useState2[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "message-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "messages",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "message",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "message-name",
          children: "\u6536\u5230\u7684\u8D5E"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "message-number",
          children: messageNumber.receivedLikes
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "message",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "message-name",
          children: "\u8BC4\u8BBA\u56DE\u590D"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "message-number",
          children: messageNumber.reply
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "message",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "message-name",
          children: "\u5B98\u65B9\u6D88\u606F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "message-number",
          children: messageNumber.officialMessages
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/pages/index/Content/TagContent/TagContent.tsx":
/*!***********************************************************!*\
  !*** ./src/pages/index/Content/TagContent/TagContent.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TagContent; }
/* harmony export */ });
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pubsub-js */ "webpack/container/remote/pubsub-js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_userInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/userInfo */ "./src/store/userInfo.ts");
/* harmony import */ var _store_postData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/postData */ "./src/store/postData.ts");
/* harmony import */ var _store_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/request */ "./src/store/request.ts");
/* harmony import */ var _common_utilities_requester__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/utilities/requester */ "./src/common/utilities/requester.ts");
/* harmony import */ var _static_post_post_like_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../static/post/post-like-icon.png */ "./src/static/post/post-like-icon.png");
/* harmony import */ var _static_post_post_comment_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../static/post/post-comment-icon.png */ "./src/static/post/post-comment-icon.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);









// stores





// types






function TagContent() {
  var _tags$find2;
  // store数据 ————————————————————————————————————————————————————————————————————————————————————————————————
  var _useUser = (0,_store_userInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state) {
      return [state.id, state.isLogin, state.toLoginPage];
    }),
    _useUser2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useUser, 3),
    user_id = _useUser2[0],
    isLogin = _useUser2[1],
    toLoginPage = _useUser2[2];
  var _useRequest = (0,_store_request__WEBPACK_IMPORTED_MODULE_5__["default"])(function (state) {
      return [state.requestUrl, state.setRequestUrl];
    }),
    _useRequest2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useRequest, 2),
    requestUrl = _useRequest2[0],
    setRequestUrl = _useRequest2[1];
  var postData = (0,_store_postData__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state) {
    return state;
  }); // 获取Tags
  var token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'); // JWT token

  // 一些基本state ——————————————————————————————————————————————————————————————————————————————————————
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState, 2),
    posts = _useState2[0],
    setPosts = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState4 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState3, 2),
    tags = _useState4[0],
    setTags = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('reply'),
    _useState6 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState5, 2),
    order = _useState6[0],
    setOrder = _useState6[1]; // 阅读顺序

  // 刷新相关state ——————————————————————————————————————————————————————————————————————————————————————

  // 分块传输内容，每次刷新5条，该 page 用于计算要跳过的内容的数量，以定位到正确的位置返回数据
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
    _useState8 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState7, 2),
    page = _useState8[0],
    setPage = _useState8[1]; // page：接下来要请求的页数，用于下拉刷新时跳过已获取的数据，请求新数据
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState10 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState9, 2),
    isRefresh = _useState10[0],
    setIsRefresh = _useState10[1]; // 刷新锁，防止上一次刷新未完成就重复刷新
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState12 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState11, 2),
    contentLoaded = _useState12[0],
    setContentLoaded = _useState12[1]; // 所有 posts 是否已经加载完毕，加载完毕则不再触发请求
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState14 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState13, 2),
    shouldRefresh = _useState14[0],
    setShouldRefresh = _useState14[1]; // 在重置数据并刷新的方法中，检查以上state是否已经完成更新，完成更新后再刷新

  // 核心方法：
  // 1. 请求 posts
  var getPosts = /*#__PURE__*/function () {
    var _ref = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().mark(function _callee() {
      var _tags$find, currentTag, res, prevPosts, updatedPosts;
      return (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(isRefresh || contentLoaded)) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            // 防止重复刷新

            setIsRefresh(true); // 禁止下一次刷新

            // 获取当前选中的 tag 并请求
            currentTag = (_tags$find = tags.find(function (tag) {
              return tag.isCurrent;
            })) === null || _tags$find === void 0 ? void 0 : _tags$find.tagName;
            _context.next = 7;
            return (0,_common_utilities_requester__WEBPACK_IMPORTED_MODULE_6__.makeRequest)({
              method: 'GET',
              url: requestUrl,
              path: "/api/v1/posts/".concat(encodeURIComponent(currentTag), "?sort=").concat(order, "&page=").concat(page),
              timeout: 5000 // 超时时间
            });
          case 7:
            res = _context.sent;
            if (!(res.statusCode === 200)) {
              _context.next = 17;
              break;
            }
            console.log(res.data);
            prevPosts = posts;
            updatedPosts = prevPosts.concat(res.data.data.posts);
            setPosts(updatedPosts); // 更新posts
            setPage(res.data.page + 1); // 更新page

            setIsRefresh(false); // 允许下一次刷新
            _context.next = 18;
            break;
          case 17:
            throw new Error("Request failed with status code: ".concat(res.statusCode));
          case 18:
            // posts 被全部请求完后
            if (res.data.data.posts.length === 0) {
              setContentLoaded(true);
            }
            ;
            _context.next = 27;
            break;
          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            setIsRefresh(false);
            setContentLoaded(true);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: '数据加载失败',
              icon: 'error'
            });
          case 27:
            ;
          case 28:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 22]]);
    }));
    return function getPosts() {
      return _ref.apply(this, arguments);
    };
  }();

  // 2. 重置 state 并刷新（切换 tag, order 或下拉刷新时调用）
  // 切换 tag，order 或 下拉刷新的本质都是在新参数下请求新的数据或请求最新的数据，而不是在当前的参数下继续请求
  // 因此，此处清空 posts，重置 page，解开 contentLoaded 锁，然后再请求数据，获取到的数据就是全新的数据
  var resetAndRefresh = /*#__PURE__*/function () {
    var _ref2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().mark(function _callee2() {
      return (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setPosts([]);
            setPage(1);
            setContentLoaded(false);
            setShouldRefresh(true);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function resetAndRefresh() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (shouldRefresh) {
      getPosts();
      setShouldRefresh(false);
    }
  }, [shouldRefresh]);
  // 由于，state 更新是异步的，直接调用可能会出现值未更新就 getPosts 的情况，所以用 shouldRefresh 来确保 state 已经更新

  // 页面数据初始化：将社区的基本数据渲染到页面上———————————————————————————————————————————————————————————————————————————
  // 1. 加载Tags
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var newTags = postData.tags.map(function (tag, index) {
      return {
        tagName: tag,
        isCurrent: index === 0 ? true : false // 第一个tag默认选中
      };
    });

    setTags(newTags);
  }, [postData]);

  // 2. 确保 tags 加载完毕后再请求 posts，
  // 该方法同时承担了切换 tag 或 order 时的刷新功能
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (tags.length === 0) return;
    resetAndRefresh();
  }, [tags, order]);

  // 2. 注册页面事件（用于从某些页面返回后需要更新数据，例如创建完帖子后，需要刷新）
  // A. 从页面返回后刷新
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var refreshPageToken = pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().subscribe('refreshPage', function () {
      resetAndRefresh();
    });
    return function () {
      pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().unsubscribe(refreshPageToken);
    };
  }, []);
  // B. 更新点赞数和评论数
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var updateLikeNum = pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().subscribe('updatePostData', /*#__PURE__*/function () {
      var _ref3 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])( /*#__PURE__*/(0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().mark(function _callee3(msg, data) {
        var newposts;
        return (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              newposts = posts.map(function (post) {
                if (post._id === data.post_id) {
                  return (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__["default"])((0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__["default"])({}, post), {}, {
                    likeNum: data.likeNum,
                    commentNum: data.commentNum
                  });
                } else {
                  return post;
                }
              });
              setPosts(newposts);
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    return function () {
      pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().unsubscribe(updateLikeNum);
    };
  }, [posts]);

  // 页面功能——————————————————————————————————————————————————————————————————————————————————————————————

  // A. 切换Tag
  function handleTagClick(tagName) {
    // 切换Tag显示
    var newtags = tags.map(function (tag) {
      return (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__["default"])((0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__["default"])({}, tag), {}, {
        isCurrent: tag.tagName === tagName
      });
    });
    setTags(newtags);
  }
  ;

  // B. 切换查看顺序
  function handleOrderSwitch(order) {
    setOrder(order);
  }
  ;

  // 跳转到帖子
  function enterPost(post_id) {
    if (!isLogin) {
      toLoginPage();
      return;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: '/pages/posts/postpage/postpage?' + "post_id=".concat(post_id)
    });
  }
  ;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: "index-content-tags-createPost",
      onClick: function onClick() {
        if (!isLogin) {
          toLoginPage();
        }
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
          url: '/pages/posts/createpost/createpost'
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: "index-content-tags",
      children: tags.map(function (tag) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "index-content-tag",
          style: tag.isCurrent ? {
            backgroundColor: '#4e6aff',
            color: '#fff'
          } : {},
          onClick: function onClick() {
            return handleTagClick(tag.tagName);
          },
          children: tag.tagName
        });
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: "index-tagContent",
      children: [((_tags$find2 = tags.find(function (tag) {
        return tag.isCurrent;
      })) === null || _tags$find2 === void 0 ? void 0 : _tags$find2.tagName) !== '热门' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "index-tagContent-order",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
          children: "\u67E5\u770B\u987A\u5E8F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "index-content-orderSwitch",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "index-content-orderSwitch-item ".concat(order === 'reply' && 'order-isCurrent'),
            onClick: function onClick() {
              return handleOrderSwitch('reply');
            },
            children: "\u56DE\u590D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "index-content-orderSwitch-item ".concat(order === 'publish' && 'order-isCurrent'),
            onClick: function onClick() {
              return handleOrderSwitch('publish');
            },
            children: "\u53D1\u5E03"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.ScrollView, {
        className: "index-content-posts",
        scrollY: true,
        enablePassive: "true",
        lowerThreshold: 50,
        onScrollToLower: function onScrollToLower() {
          return getPosts();
        },
        enableBackToTop: true,
        refresherEnabled: true // 开启下拉刷新
        ,
        refresherThreshold: 45,
        refresherTriggered: isRefresh,
        onRefresherRefresh: resetAndRefresh,
        children: [posts.sort(function (a, b) {
          if (a.isTopped && !b.isTopped) return -1;
          if (!a.isTopped && b.isTopped) return 1;
          return 0;
        }).map(function (post) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "index-content-post",
            onClick: function onClick() {
              return enterPost(post._id);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "post-texts",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: "post-title",
                children: post.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: "post-description",
                children: post.content
              })]
            }), post.pictures.length !== 0 && post.pictures.map(function (picture) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                src: picture,
                className: "post-picture",
                mode: "aspectFill"
              });
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "post-info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "post-info-user",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                  src: post.user.avatar,
                  className: "post-user-avatar"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  children: post.user.nick_name
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "post-info-data",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "post-like",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                    src: _static_post_post_like_icon_png__WEBPACK_IMPORTED_MODULE_7__
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                    children: post.likeNum
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "post-comment",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                    src: _static_post_post_comment_icon_png__WEBPACK_IMPORTED_MODULE_8__
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                    children: post.commentNum
                  })]
                })]
              })]
            })]
          }, post._id);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "spacer",
          children: contentLoaded ? '你到达了世界的尽头' : '加载中...'
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/index/Header/Header.tsx":
/*!*******************************************!*\
  !*** ./src/pages/index/Header/Header.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ header; }
/* harmony export */ });
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/container/remote/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _store_userInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/userInfo */ "./src/store/userInfo.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);









function header() {
  var _useUser = (0,_store_userInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state) {
      return [state.isLogin, state.toLoginPage];
    }),
    _useUser2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useUser, 2),
    isLogin = _useUser2[0],
    toLoginPage = _useUser2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      name: '话题',
      isCurrent: true,
      id: 'index'
    }, {
      name: '热榜',
      isCurrent: false,
      id: 'hot'
    }, {
      name: '消息',
      isCurrent: false,
      id: 'message'
    }]),
    _useState2 = (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    headerItems = _useState2[0],
    setHeaderItems = _useState2[1];
  function handleHeaderItemClick(id) {
    if (!isLogin && id === 'message') {
      toLoginPage();
      return;
    }
    var newHeaderItems = headerItems.map(function (item) {
      return (0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_Users_admin_Desktop_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, item), {}, {
        isCurrent: item.id === id
      });
    });
    setHeaderItems(newHeaderItems);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
    className: "index-header",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "index-header-items",
      children: headerItems.map(function (item) {
        if (item.id === 'message' && !isLogin) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "index-header-item ".concat(item.isCurrent && 'index-header-isCurrent'),
            onClick: function onClick() {
              return handleHeaderItemClick(item.id);
            },
            children: item.name
          }, item.id);
        } else {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "pages/index/".concat(item.id),
            className: "index-header-item ".concat(item.isCurrent && 'index-header-isCurrent'),
            onClick: function onClick() {
              return handleHeaderItemClick(item.id);
            },
            children: item.name
          }, item.id);
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "index-header-search",
      onClick: function onClick() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
          url: '/pages/search/search'
        });
      }
    })]
  });
}

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页","navigationStyle":"custom"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map