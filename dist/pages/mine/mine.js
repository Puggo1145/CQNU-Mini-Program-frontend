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
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/userInfo */ "./src/store/userInfo.ts");
/* harmony import */ var _store_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/request */ "./src/store/request.ts");
/* harmony import */ var _store_appInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/appInfo */ "./src/store/appInfo.ts");
/* harmony import */ var _common_launchUtilities_compressImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/launchUtilities/compressImage */ "./src/common/launchUtilities/compressImage.ts");
/* harmony import */ var _common_utilities_requester__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/utilities/requester */ "./src/common/utilities/requester.ts");
/* harmony import */ var _static_mine_chat_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/mine/chat.png */ "./src/static/mine/chat.png");
/* harmony import */ var _static_mine_profile_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/mine/profile.png */ "./src/static/mine/profile.png");
/* harmony import */ var _static_mine_logout_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/mine/logout.png */ "./src/static/mine/logout.png");
/* harmony import */ var _static_mine_login_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../static/mine/login.png */ "./src/static/mine/login.png");
/* harmony import */ var _static_mine_defaultAvatar_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/mine/defaultAvatar.png */ "./src/static/mine/defaultAvatar.png");
/* harmony import */ var _store_postData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/store/postData */ "./src/store/postData.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);








 // 取 accessKeyId












function Mine() {
  var _useUser = (0,_store_userInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(function (state) {
      return [state, state.setUserInfo];
    }),
    _useUser2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_useUser, 2),
    userInfo = _useUser2[0],
    setUserInfo = _useUser2[1];
  var requestUrl = (0,_store_request__WEBPACK_IMPORTED_MODULE_2__["default"])(function (state) {
    return state.requestUrl;
  });
  var accessKeyId = (0,_store_appInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state) {
    return state.accessKey_id;
  });
  var _usePostData = (0,_store_postData__WEBPACK_IMPORTED_MODULE_11__["default"])(function (state) {
      return [state, state.setPostData];
    }),
    _usePostData2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_usePostData, 2),
    postData = _usePostData2[0],
    setPostData = _usePostData2[1];
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useLoad)( /*#__PURE__*/(0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__["default"])( /*#__PURE__*/(0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_15__["default"])().mark(function _callee() {
    var token, res;
    return (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_15__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (userInfo.isLogin) {
            _context.next = 3;
            break;
          }
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
            url: '/pages/login/login'
          });
          return _context.abrupt("return");
        case 3:
          // 获取用户社区信息
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token');
          _context.next = 6;
          return (0,_common_utilities_requester__WEBPACK_IMPORTED_MODULE_5__.makeRequest)({
            method: 'GET',
            url: requestUrl,
            path: '/api/v1/users/communityInfo',
            header: {
              Authorization: token
            }
          });
        case 6:
          res = _context.sent;
          if (res.statusCode === 200) {
            console.log(res.data);
            setPostData({
              myPosts: res.data.data.posts,
              likesNum: res.data.data.likes
            });
          } else {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: '信息获取失败',
              icon: 'error',
              duration: 2000
            });
          }
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));

  // 修改头像
  var handleAvatarChange = /*#__PURE__*/function () {
    var _ref2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__["default"])( /*#__PURE__*/(0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_15__["default"])().mark(function _callee2() {
      var res, selectedImagePath, token, key, policy, ossAccessKeyId, signature, uploadRes, avatarUrl, updateAvatarRes;
      return (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_15__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().chooseImage({
              count: 1,
              sourceType: ['album', 'camera'],
              sizeType: ['compressed']
            });
          case 3:
            res = _context2.sent;
            if (!(res.tempFilePaths && res.tempFilePaths[0])) {
              _context2.next = 33;
              break;
            }
            selectedImagePath = res.tempFilePaths[0]; // 图片路径
            token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'); // JWT token
            // 获取 OSS 相关信息
            key = "avatar-".concat(userInfo.id, "-").concat(Date.now()); // 上传头像的文件名
            policy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('policy'); // OSS policy
            ossAccessKeyId = accessKeyId; // 阿里云 RAM 用户 accessKeyId
            signature = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('signature'); // OSS 签名
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showLoading({
              title: '上传中',
              mask: true
            });
            // 上传图片到阿里 OSS
            _context2.t0 = (_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default());
            _context2.next = 15;
            return (0,_common_launchUtilities_compressImage__WEBPACK_IMPORTED_MODULE_4__["default"])(selectedImagePath);
          case 15:
            _context2.t1 = _context2.sent;
            _context2.t2 = {
              key: key,
              policy: policy,
              OSSAccessKeyId: ossAccessKeyId,
              signature: signature
            };
            _context2.t3 = {
              url: 'https://cqnu-user-avatars.oss-cn-chengdu.aliyuncs.com',
              filePath: _context2.t1,
              name: 'file',
              formData: _context2.t2
            };
            _context2.next = 20;
            return _context2.t0.uploadFile.call(_context2.t0, _context2.t3);
          case 20:
            uploadRes = _context2.sent;
            console.log(uploadRes);

            // 上传成功，将图片URL存入数据库
            if (!(uploadRes.statusCode === 204)) {
              _context2.next = 31;
              break;
            }
            avatarUrl = "https://cqnu-user-avatars.oss-cn-chengdu.aliyuncs.com/".concat(key);
            _context2.next = 26;
            return (0,_common_utilities_requester__WEBPACK_IMPORTED_MODULE_5__.makeRequest)({
              method: 'PATCH',
              url: requestUrl,
              path: '/api/v1/users//updateAvatar',
              header: {
                Authorization: token
              },
              data: {
                avatar: avatarUrl
              }
            });
          case 26:
            updateAvatarRes = _context2.sent;
            if (updateAvatarRes.statusCode === 200) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('avatar', avatarUrl); // 持久化 avatar
              setUserInfo({
                avatar: avatarUrl
              }); // 同步到 userInfo

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
                title: '上传成功',
                icon: 'success',
                duration: 2000
              });
            }
            ;
            _context2.next = 32;
            break;
          case 31:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: '上传失败',
              icon: 'error',
              duration: 2000
            });
          case 32:
            ;
          case 33:
            ;
            _context2.next = 39;
            break;
          case 36:
            _context2.prev = 36;
            _context2.t4 = _context2["catch"](0);
            console.log(_context2.t4);
          case 39:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 36]]);
    }));
    return function handleAvatarChange() {
      return _ref2.apply(this, arguments);
    };
  }();

  // 登出
  var handleLogOut = function handleLogOut() {
    console.log(userInfo);
    setUserInfo({
      id: '',
      openid: '',
      student_id: '',
      nick_name: '',
      avatar: 'none',
      user_level: 1,
      user_exp: 0,
      faculty: '',
      major: '',
      grade: ''
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('token');
  };

  // 跳转功能页
  var handleLinkToFns = function handleLinkToFns(fnName) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: "/pages/mine/".concat(fnName, "/").concat(fnName)
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
    className: "mine-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
      className: "mine-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
        className: "mine-userInfo",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          className: "mine-basicInfo",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
            src: userInfo.isLogin ? userInfo.avatar : _static_mine_defaultAvatar_png__WEBPACK_IMPORTED_MODULE_10__,
            className: "mine-avatar",
            onClick: handleAvatarChange
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
            className: "mine-nickname",
            children: userInfo.isLogin ? userInfo.nick_name : '请登录'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
            className: "mine-schoolID",
            children: userInfo.student_id
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: "mine-moreInfo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "mine-moreInfo-item",
              children: ["Lv.", userInfo.user_level]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "mine-moreInfo-item",
              children: userInfo.grade
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "mine-moreInfo-item",
              children: userInfo.faculty
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          className: "mine-postInfo",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: "mine-postInfo-item",
            onClick: function onClick() {
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
                url: '/pages/mine/myPosts/myposts'
              });
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
              className: "mine-postInfo-item-num",
              children: postData.myPosts
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
              className: "mine-postInfo-item-text",
              children: "\u53D1\u5E16"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: "mine-postInfo-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
              className: "mine-postInfo-item-num",
              children: postData.likesNum
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
              className: "mine-postInfo-item-text",
              children: "\u6536\u5230\u7684\u8D5E"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: "mine-postInfo-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
              className: "mine-postInfo-item-num",
              children: "\u672A\u5F00\u901A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
              className: "mine-postInfo-item-text",
              children: "\u6700\u8FD1\u6D4F\u89C8"
            })]
          })]
        })]
      }), userInfo.isLogin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
        className: "mine-functions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          className: "mine-function mine-linkOfficial",
          onClick: function onClick() {
            return handleLinkToFns('linkOfficial');
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
            src: _static_mine_profile_png__WEBPACK_IMPORTED_MODULE_7__
          }), "\u7ED1\u5B9A\u6821\u56ED\u95E8\u6237"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          className: "mine-function mine-contactUs",
          onClick: function onClick() {
            return handleLinkToFns('contactUs');
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
            src: _static_mine_chat_png__WEBPACK_IMPORTED_MODULE_6__
          }), "\u8054\u7CFB\u6211\u4EEC"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          className: "mine-function mine-logout",
          onClick: handleLogOut,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
            src: _static_mine_logout_png__WEBPACK_IMPORTED_MODULE_8__
          }), "\u9000\u51FA\u767B\u5F55"]
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
        className: "mine-functions",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          className: "mine-function mine-login",
          onClick: userInfo.toLoginPage,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
            src: _static_mine_login_png__WEBPACK_IMPORTED_MODULE_9__
          }), "\u767B\u5F55"]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
      className: "mine-topBackground"
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

/***/ "./src/static/mine/defaultAvatar.png":
/*!*******************************************!*\
  !*** ./src/static/mine/defaultAvatar.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/mine/defaultAvatar.png";

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