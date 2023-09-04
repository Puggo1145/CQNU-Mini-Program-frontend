"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/study/study"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/study/study.tsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/study/study.tsx ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Study; }
/* harmony export */ });
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ "./src/store/store.ts");
/* harmony import */ var _store_classTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/classTable */ "./src/store/classTable.ts");
/* harmony import */ var _store_userInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/userInfo */ "./src/store/userInfo.ts");
/* harmony import */ var _static_reading_cover_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/reading/cover.png */ "./src/static/reading/cover.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);











function Study() {
  var _useUser = (0,_store_userInfo__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state) {
      return [state, state.setUserInfo];
    }),
    _useUser2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useUser, 2),
    userInfo = _useUser2[0],
    setUserInfo = _useUser2[1]; // 用户信息

  var statusBarHeight = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__["default"])(function (state) {
    return state.statusBarHeight;
  });
  var classTable = (0,_store_classTable__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state) {
    return state.classTable;
  });
  var startDate = (0,_store_classTable__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state) {
    return state.startDate;
  }); // 开学日期

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    currentWeek = _useState2[0],
    setCurrentWeek = _useState2[1]; // 当前周数

  // 课程时间对照表: [hour, minute]
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([[8, 30], [9, 25], [10, 30], [11, 25], [14, 30], [15, 25], [16, 30], [17, 25], [19, 30], [20, 25]]),
    _useState4 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    timeTable = _useState4[0],
    setTimeTable = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      lesson_id: 1001,
      name: '今日无课',
      place: '',
      teacher: '',
      start_time: 1,
      end_time: 2,
      day: 0,
      start_week: 1,
      end_week: 16,
      color: ''
    }, {
      lesson_id: 1002,
      name: '今日无课',
      place: '',
      teacher: '',
      start_time: 3,
      end_time: 4,
      day: 0,
      start_week: 1,
      end_week: 16,
      color: ''
    }]),
    _useState6 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState5, 2),
    followingLessons = _useState6[0],
    setFollowingLessons = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var date = new Date();
    // 计算当前周数
    var week = Math.ceil((date.getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24 * 7));
    setCurrentWeek(week);
    var day = date.getDay(); // 星期几 
    var hours = date.getHours(); // 几点
    var minutes = date.getMinutes(); // 几分

    var classTableToday = classTable.filter(function (item) {
      return item.day === day && item.start_week <= currentWeek;
    }); // 今日课程  

    // 获取今日剩余课程
    if (hours * 60 + minutes < 20 * 60 + 25) {
      var nextStartTime = timeTable.find(function (item) {
        return item[0] * 60 + item[1] > hours * 60 + minutes;
      });
      var nextStartTimeIndex = timeTable.indexOf(nextStartTime) + 1;
      var followingLessonsToday = classTableToday.filter(function (item) {
        return item.start_time >= nextStartTimeIndex;
      });

      // 当只有一节课时
      if (followingLessonsToday.length === 1) {
        setFollowingLessons([followingLessonsToday[0], {
          lesson_id: 1002,
          name: '今日无课',
          place: '',
          teacher: '',
          start_time: 3,
          end_time: 4,
          day: 0,
          start_week: 1,
          end_week: 16,
          color: ''
        }]);
      }
      // 当没有课时
      else if (followingLessonsToday.length === 0) {
        setFollowingLessons([{
          lesson_id: 1001,
          name: '今日无课',
          place: '',
          teacher: '',
          start_time: 1,
          end_time: 2,
          day: 0,
          start_week: 1,
          end_week: 16,
          color: ''
        }, {
          lesson_id: 1002,
          name: '今日无课',
          place: '',
          teacher: '',
          start_time: 3,
          end_time: 4,
          day: 0,
          start_week: 1,
          end_week: 16,
          color: ''
        }]);
      } else {
        setFollowingLessons(followingLessonsToday);
      }
    } else {
      setFollowingLessons([{
        lesson_id: 1001,
        name: '今日无课',
        place: '',
        teacher: '',
        start_time: 1,
        end_time: 2,
        day: 0,
        start_week: 1,
        end_week: 16,
        color: ''
      }, {
        lesson_id: 1002,
        name: '今日无课',
        place: '',
        teacher: '',
        start_time: 3,
        end_time: 4,
        day: 0,
        start_week: 1,
        end_week: 16,
        color: ''
      }]);
    }
  }, [classTable, timeTable, currentWeek]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    className: "study-wrapper",
    style: {
      paddingTop: statusBarHeight + 'px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "study-header",
      children: userInfo.major
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "study-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "study-timetable",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "study-timetable-top",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: "\u6211\u7684\u8BFE\u7A0B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "study-timetable-toTable",
            onClick: function onClick() {
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
                url: '/pages/classtable/classtable'
              });
            },
            children: "\u67E5\u770B\u8BFE\u8868>"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "study-timetable-items",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "study-timetable-current",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "study-timetable-left",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                className: "study-timetable-name",
                children: followingLessons[0].name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                children: followingLessons[0].place
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "study-timetable-line"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "study-timetable-right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                children: timeTable[followingLessons[0].start_time - 1][0] + ':' + timeTable[followingLessons[0].start_time - 1][1]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "study-timetable-following",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "study-timetable-following-wrapper",
              children: followingLessons.map(function (item, index) {
                return index > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
                  className: "study-timetable-item",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                    children: item.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                    children: timeTable[item.start_time - 1][0] + ':' + timeTable[item.start_time - 1][1]
                  })]
                }, index);
              })
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "study-reading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "study-reading-top",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: "\u6211\u7684\u9605\u8BFB"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "study-reading-toBook",
            children: "\u67E5\u770B\u4E66\u67B6>"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "study-reading-bookShelf",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "study-reading-books-xsbd",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: "study-reading-books-title",
              children: "\u65B0\u751F\u5FC5\u8BFB"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "study-reading-books",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
                className: "study-reading-book",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                  src: _static_reading_cover_png__WEBPACK_IMPORTED_MODULE_5__,
                  className: "study0-reading-book-cover",
                  mode: "widthFix"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
                  className: "study-reading-book-right",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                    className: "study-reading-book-title",
                    children: "\u5B66\u751F\u624B\u518C"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                    className: "study-reading-book-description",
                    children: "\u5B66\u751F\u624B\u518C\u662F\u4E00\u79CD\u5B66\u751F\u624B\u518C"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
                    className: "study-reading-book-mark",
                    children: "\u5F3A\u70C8\u63A8\u8350"
                  })]
                })]
              })
            })]
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/study/study.tsx":
/*!***********************************!*\
  !*** ./src/pages/study/study.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_study_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./study.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/study/study.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_study_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/study/study', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_study_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/static/reading/cover.png":
/*!**************************************!*\
  !*** ./src/static/reading/cover.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/reading/cover.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/study/study.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=study.js.map