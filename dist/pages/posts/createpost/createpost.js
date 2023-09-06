"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/posts/createpost/createpost"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/posts/createpost/createpost.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/posts/createpost/createpost.tsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createpost; }
/* harmony export */ });
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pubsub-js */ "webpack/container/remote/pubsub-js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/store */ "./src/store/store.ts");
/* harmony import */ var _store_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/request */ "./src/store/request.ts");
/* harmony import */ var _store_appInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/appInfo */ "./src/store/appInfo.ts");
/* harmony import */ var _store_userInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/userInfo */ "./src/store/userInfo.ts");
/* harmony import */ var _common_utilities_uploadImageToOss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/common/utilities/uploadImageToOss */ "./src/common/utilities/uploadImageToOss.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









// stores





// utilities




function createpost() {
  var statusBarHeight = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state) {
    return state.statusBarHeight;
  });
  var _useRequest = (0,_store_request__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state) {
      return [state.requestUrl, state.OSSUrl];
    }),
    _useRequest2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useRequest, 2),
    requestUrl = _useRequest2[0],
    ossUrl = _useRequest2[1];
  var userId = (0,_store_userInfo__WEBPACK_IMPORTED_MODULE_6__["default"])(function (state) {
    return state.id;
  });
  var ossAccessKeyId = (0,_store_appInfo__WEBPACK_IMPORTED_MODULE_5__["default"])(function (state) {
    return state.accessKey_id;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["校园日常", "新生", "求助", "交友", "考研", "实习兼职"]),
    _useState2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState, 2),
    tags = _useState2[0],
    setTags = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState3, 2),
    selectedTag = _useState4[0],
    setSelectedTag = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState5, 2),
    selectedImages = _useState6[0],
    setSelectedImages = _useState6[1];
  var titleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // 处理话题选择逻辑
  function handleTagSelect(tag) {
    setSelectedTag(tag);
    // if (selectedTags.includes(tag)) {
    //   setSelectedTags(selectedTags.filter(t => t !== tag))
    // } else if (selectedTags.length < 2) {
    //   setSelectedTags([...selectedTags, tag])
    // } else {
    //   Taro.showToast({
    //     title: '最多选择两项',
    //     icon: 'none'
    //   })
    // }
  }

  // 处理图片选择，将图片存入 selectedImages
  function handleImageSelect() {
    return _handleImageSelect.apply(this, arguments);
  }
  function _handleImageSelect() {
    _handleImageSelect = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/(0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee() {
      var res;
      return (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
              count: 9 - selectedImages.length,
              // 最多可以选择9张图片
              sourceType: ['album', 'camera'],
              sizeType: ['compressed']
            });
          case 2:
            res = _context.sent;
            if (!(res.tempFilePaths.length === 0)) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return");
          case 5:
            setSelectedImages([].concat((0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(selectedImages), (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(res.tempFilePaths)));
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _handleImageSelect.apply(this, arguments);
  }
  ;

  // 处理图片删除
  function handleDeleteClick(index) {
    var newImages = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(selectedImages);
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  }

  // 发布帖子
  function handleSubmit() {
    return _handleSubmit.apply(this, arguments);
  }
  function _handleSubmit() {
    _handleSubmit = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/(0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee2() {
      var title, content, tag, imagePaths, uploadOssRes, uploadedImagePaths;
      return (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!(titleRef.current && contentRef.current)) {
              _context2.next = 31;
              break;
            }
            if (!(titleRef.current.value.length > 25)) {
              _context2.next = 7;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '标题超出长度',
              icon: 'error'
            });
            return _context2.abrupt("return");
          case 7:
            if (!(contentRef.current.value.length > 1000)) {
              _context2.next = 12;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '内容超出长度',
              icon: 'error'
            });
            return _context2.abrupt("return");
          case 12:
            if (!(titleRef.current.value.length < 1 || contentRef.current.value.length < 1)) {
              _context2.next = 17;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: titleRef.current.value.length < 1 ? '请填写标题' : '请填写内容',
              icon: 'error'
            });
            return _context2.abrupt("return");
          case 17:
            if (!(selectedTag === '' || selectedTag === undefined)) {
              _context2.next = 20;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请选择话题',
              icon: 'error'
            });
            return _context2.abrupt("return");
          case 20:
            // 待上传的数据
            title = titleRef.current.value;
            content = contentRef.current.value;
            tag = selectedTag; // 处理图片上传 ///////////////////////////////
            imagePaths = selectedImages; // 1. 上传图片到阿里 OSS
            _context2.next = 26;
            return (0,_common_utilities_uploadImageToOss__WEBPACK_IMPORTED_MODULE_7__.uploadImageToOss)(ossAccessKeyId, userId, ossUrl, imagePaths);
          case 26:
            uploadOssRes = _context2.sent;
            // uploadRes from oss

            // 2. 检查上传结果，图片上传失败抛出错误，终止上传
            uploadOssRes.ossRes.forEach(function (res, index) {
              if (res.statusCode !== 204) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                  title: "\u4E0A\u4F20\u5931\u8D25: ".concat(index + 1),
                  icon: 'error'
                });
                throw new Error("image upload failed");
              }
              ;
            });

            // 3. 获取图片链接
            uploadedImagePaths = uploadOssRes.filenames.map(function (filename) {
              return "".concat(ossUrl, "/").concat(filename);
            });
            console.log(uploadedImagePaths);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
              url: requestUrl + '/v1/posts/',
              method: 'POST',
              data: {
                title: title,
                content: content,
                pictures: uploadedImagePaths,
                tag: tag
              },
              header: {
                authorization: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('token')
              },
              success: function success(res) {
                if (res.statusCode === 201) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                    title: '发布成功',
                    icon: 'success'
                  });
                  // 1.5秒后返回，刷新首页
                  setTimeout(function () {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
                    pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish('refreshPage');
                  }, 1500);
                } else {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                    title: '发布失败',
                    icon: 'none'
                  });
                }
                ;
              }
            });
          case 31:
            _context2.next = 36;
            break;
          case 33:
            _context2.prev = 33;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);
          case 36:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 33]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }
  ;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
    className: "createpost-wrapper",
    style: {
      paddingTop: statusBarHeight + 'px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "createpost-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "createpost-header-back",
        onClick: function onClick() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
        className: "createpost-header-title",
        children: "\u53D1\u5E03"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
      className: "createpost-form",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Input, {
        ref: titleRef,
        className: "createpost-title",
        type: "text",
        name: "title",
        placeholder: "\u586B\u5199\u6807\u9898\u4F1A\u66F4\u53D7\u6B22\u8FCE\u54E6\uFF01\uFF08\u5C0F\u4E8E25\u5B57\uFF09"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("textarea", {
        ref: contentRef,
        className: "createpost-content",
        name: "content",
        placeholder: "\u6DFB\u52A0\u6B63\u6587\uFF08\u5C0F\u4E8E1000\u5B57\uFF09"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "createpost-uploadPic-area",
        children: [selectedImages.map(function (image, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "createpost-selectedImage-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              className: "createpost-selectedImage",
              src: image,
              alt: "Selected-".concat(index)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "createpost-delete-btn",
              onClick: function onClick() {
                return handleDeleteClick(index);
              },
              children: "\xD7"
            })]
          }, index);
        }), selectedImages.length < 9 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "createpost-uploadPic-btn",
          onClick: handleImageSelect
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "createpost-postTags",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
          children: "\u9009\u62E9\u8BDD\u9898*"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
          children: "\u8BDD\u9898\u51B3\u5B9A\u4E86\u4F60\u53D1\u5E03\u7684\u5185\u5BB9\u662F\u5426\u4F1A\u4F60\u6240\u671F\u671B\u7684\u540C\u5B66\u770B\u5230"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "createpost-tags",
          children: tags.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "createpost-tag",
              onClick: function onClick() {
                return handleTagSelect(item);
              },
              style: {
                backgroundColor: selectedTag === item ? '#4E6AFF' : '#efefef',
                color: selectedTag === item ? '#fff' : '#8b8b8b'
              },
              children: item
            }, index);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Button, {
        className: "createpost-submit",
        formType: "submit",
        onClick: handleSubmit,
        children: "\u53D1\u5E03"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/common/utilities/uploadImageToOss.ts":
/*!**************************************************!*\
  !*** ./src/common/utilities/uploadImageToOss.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uploadImageToOss": function() { return /* binding */ uploadImageToOss; }
/* harmony export */ });
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _launchUtilities_compressImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../launchUtilities/compressImage */ "./src/common/launchUtilities/compressImage.ts");




var uploadImageToOss = /*#__PURE__*/function () {
  var _ref = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee2(accessKeyId, userId, ossUrl, imagePaths) {
    var policy, signature, ossAccessKeyId, filenames, uploadTask, uploadossRes;
    return (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          // 获取 OSS 通行证, OSS 通行证在 APP 加载时 / 用户登录注册成功后便已请求
          policy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('policy'); // OSS policy
          signature = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('signature'); // OSS 签名
          ossAccessKeyId = accessKeyId; // 阿里云 RAM 用户 accessKeyId
          filenames = []; // 所有上传文件的文件名
          // 1. 创建多个 promise 上传任务
          uploadTask = imagePaths.map( /*#__PURE__*/function () {
            var _ref2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee(imagePath) {
              var key, imagePromise;
              return (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    key = "postImage-".concat(userId, "-").concat(Date.now()); // 上传的文件名
                    filenames.push(key);
                    _context.t0 = (_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default());
                    _context.t1 = ossUrl;
                    _context.next = 6;
                    return (0,_launchUtilities_compressImage__WEBPACK_IMPORTED_MODULE_1__["default"])(imagePath);
                  case 6:
                    _context.t2 = _context.sent;
                    _context.t3 = {
                      key: key,
                      policy: policy,
                      OSSAccessKeyId: ossAccessKeyId,
                      signature: signature
                    };
                    _context.t4 = {
                      url: _context.t1,
                      filePath: _context.t2,
                      name: 'file',
                      formData: _context.t3
                    };
                    imagePromise = _context.t0.uploadFile.call(_context.t0, _context.t4);
                    return _context.abrupt("return", imagePromise);
                  case 11:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x5) {
              return _ref2.apply(this, arguments);
            };
          }()); // 2. 等待所有上传任务完成
          _context2.next = 7;
          return Promise.all(uploadTask);
        case 7:
          uploadossRes = _context2.sent;
          return _context2.abrupt("return", {
            ossRes: uploadossRes,
            filenames: filenames
          });
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function uploadImageToOss(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/pages/posts/createpost/createpost.tsx":
/*!***************************************************!*\
  !*** ./src/pages/posts/createpost/createpost.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_createpost_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./createpost.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/posts/createpost/createpost.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_createpost_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/posts/createpost/createpost', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_createpost_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/posts/createpost/createpost.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=createpost.js.map