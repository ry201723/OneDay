"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.jsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.jsx ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nutui_nutui_react_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nutui/nutui-react-taro */ "webpack/container/remote/@nutui/nutui-react-taro");
/* harmony import */ var _nutui_nutui_react_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nutui_nutui_react_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);












function Index() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState2 = (0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    navDatas = _useState2[0],
    setNavDatas = _useState2[1]; // 声明存储导航栏数据的变量
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState4 = (0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
    clickNum = _useState4[0],
    setClickNum = _useState4[1]; // 声明记录当前点击的变量
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState6 = (0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
    tags = _useState6[0],
    setTags = _useState6[1]; // 声明存储标签的数组
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("最近更新"),
    _useState8 = (0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
    new_hot = _useState8[0],
    setNew_hot = _useState8[1]; // 记录当前点击的模块
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState10 = (0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState9, 2),
    hot_show = _useState10[0],
    setHot_show = _useState10[1]; // 声明是否显示更多选项的按钮
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState12 = (0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState11, 2),
    bannerData = _useState12[0],
    setBannerData = _useState12[1]; // 声明存储内容数据 的数组
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState14 = (0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      x: 0,
      y: 0
    }),
    _useState16 = (0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState15, 2),
    position = _useState16[0],
    setPosition = _useState16[1];
  var draggableRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  // 请求导航栏和内容数据
  function getData() {
    return _getData.apply(this, arguments);
  } // 页面加载完成时的回调
  function _getData() {
    _getData = (0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/(0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().mark(function _callee2() {
      return (0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            // const { data } = await axios.get("http://127.0.0.1:9527/init");
            // const { data: newDatas } = await axios.get(
            //   "http://127.0.0.1:9527/timeline"
            // )
            setNavDatas([{
              id: "wechat_moments",
              name: "朋友圈",
              count_all: 100,
              count_last_week: 100,
              tags: ["4⽉推荐", "⼤促成交", "评价反馈"]
            }, {
              id: "group_send",
              count_all: 100,
              count_last_week: 100,
              name: "群发",
              tags: ["4⽉推荐", "⼤促成交", "评价反馈"]
            }, {
              id: "soft_advertising",
              name: "软⽂",
              count_all: 100,
              count_last_week: 100,
              tags: ["4⽉推荐", "⼤促成交", "评价反馈"]
            }, {
              id: "poster",
              name: "海报",
              count_all: 100,
              count_last_week: 100,
              tags: ["4⽉推荐", "⼤促成交", "评价反馈"]
            }, {
              id: "commodity",
              name: "商品",
              count_all: 100,
              count_last_week: 100,
              tags: ["4⽉推荐", "⼤促成交", "评价反馈"]
            }, {
              id: "live_broadcast",
              name: "直播",
              count_all: 100,
              count_last_week: 100,
              tags: ["4⽉推荐", "⼤促成交", "评价反馈"]
            }]);
            setBannerData([{
              id: "1",
              content: "\u5982\u679C\u4E0D\u656C\u4E1A,\u65E9\u4E0D\u53D1\u5708\u4E86;\n\u5982\u679C\u662F\u9A97\u2F26,\u65E9\u5C31\u6D88\u5931\u4E86;\n\u2ED3\u671F\u575A\u6301\u7684,\u90FD\u662F\u9760\u8C31\u7684;\n\u5982\u679C\u4E0D\u656C\u4E1A,\u65E9\u4E0D\u53D1\u5708\u4E86;\n\u5982\u679C\u662F\u9A97\u2F26,\u65E9\u5C31\u6D88\u5931\u4E86",
              tags: ["⼤促成交"],
              star_count: 1000
            }, {
              id: "2",
              content: "有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为",
              tags: ["⼤促成交"],
              star_count: 1000
            }, {
              id: "3",
              content: "⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要",
              tags: ["⼤促成交"],
              star_count: 1000
            }, {
              id: "4",
              content: "开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以",
              tags: ["⼤促成交"],
              star_count: 1000
            }, {
              id: "5",
              content: "懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰",
              tags: ["⼤促成交"],
              star_count: 1000
            }, {
              id: "6",
              content: "好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，",
              tags: ["⼤促成交"],
              star_count: 1000
            }]);
            setTags(["4⽉推荐", "⼤促成交", "评价反馈"]);
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _getData.apply(this, arguments);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getData();
  }, []);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useReachBottom)( /*#__PURE__*/(0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/(0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().mark(function _callee() {
    return (0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          setLoading(true);
          // const { data: newDatas } = await axios.get(
          //   "http://127.0.0.1:9527/timeline"
          // );
          console.log(11);
          setBannerData([].concat((0,D_Test_Item_Test_Demo_MyApp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(bannerData), [{
            id: "1",
            content: "如果不敬业,早不发圈了;\n如果是骗⼦,早就消失了;\n⻓期坚持的,都是靠谱的;\n如果不敬业,早不发圈了;\n如果是骗⼦,早就消失了",
            tags: ["⼤促成交"],
            star_count: 1000
          }, {
            id: "2",
            content: "有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为有客⼾问我：什么时候买xxx最便宜？我说：中午。客⼾问我为什么？因为",
            tags: ["⼤促成交"],
            star_count: 1000
          }, {
            id: "3",
            content: "⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要⼼情要好，⽣活要嗨，开⼼就笑，累了就睡觉，⽣活不⼀定很酷，但⼀定要",
            tags: ["⼤促成交"],
            star_count: 1000
          }, {
            id: "4",
            content: "开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以开始咨询猛如⻁，预定就打退堂⿎；别⼈晒单⼩幸福，你在外⾯光吃苦；以",
            tags: ["⼤促成交"],
            star_count: 1000
          }, {
            id: "5",
            content: "懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰懒可以毁掉⼀个⼈，勤可以激发⼀个⼈，不要等⼣阳西下的时候，才对⾃⼰",
            tags: ["⼤促成交"],
            star_count: 1000
          }, {
            id: "6",
            content: "好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，好累啊：⾃从下载了抖⾳，每天过着秦始皇的⽣活！有⼈献歌，有⼈献舞，",
            tags: ["⼤促成交"],
            star_count: 1000
          }]));
          setLoading(false);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  var handleDragStart = function handleDragStart(e) {
    var _e$touches$ = e.touches[0],
      clientX = _e$touches$.clientX,
      clientY = _e$touches$.clientY;
    var rect = draggableRef.current.getBoundingClientRect();
    var offsetX = clientX - rect.left;
    var offsetY = clientY - rect.top;
    setPosition({
      x: offsetX,
      y: offsetY
    });
    // draggableRef.current.style.transition = "none";
  };

  var handleDragging = function handleDragging(e) {
    var _e$touches$2 = e.touches[0],
      clientX = _e$touches$2.clientX,
      clientY = _e$touches$2.clientY;
    var rect = draggableRef.current.getBoundingClientRect();
    var left = clientX - position.x;
    var top = clientY - position.y;
    setPosition({
      x: position.x,
      y: position.y
    });
    draggableRef.current.style.left = "".concat(left, "px");
    draggableRef.current.style.top = "".concat(top, "px");
  };
  var handleDragEnd = function handleDragEnd() {
    // draggableRef.current.style.transition = "";
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "index",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "fixed_box",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "head_fixed",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "index_nav",
          children: navDatas.map(function (data, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
                className: clickNum === i ? "on" : "no_on",
                onClick: function onClick() {
                  setClickNum(i);
                  setTags(data.tags);
                },
                children: [data.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "under_line"
                })]
              })
            }, data.id);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "tags",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "new_hot",
            onClick: function onClick() {
              setHot_show(!hot_show);
            },
            children: new_hot
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "img_box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
              className: "img_bg",
              src: __webpack_require__(/*! ../../image/Ellipse.png */ "./src/image/Ellipse.png")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
              className: hot_show ? "choose_img show_choose" : "no_choose show_choose",
              src: __webpack_require__(/*! ../../image/Vector.png */ "./src/image/Vector.png")
            })]
          }), hot_show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "choose",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              onClick: function onClick() {
                setNew_hot("最近更新");
                setHot_show(false);
              },
              className: new_hot === "最近更新" ? "active" : "",
              children: "\u6700\u8FD1\u66F4\u65B0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: new_hot === "热门下载" ? "active" : "",
              onClick: function onClick() {
                setNew_hot("热门下载");
                setHot_show(false);
              },
              children: "\u70ED\u95E8\u4E0B\u8F7D"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "tags_info",
            children: tags.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "tags_item",
                children: item
              }, item);
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "index_banner",
      children: [clickNum === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "banner_info",
        children: bannerData && bannerData.map(function (data, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "banner_item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
              className: "banner_content",
              children: data.content
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "banner_tags",
              children: data.tags.map(function (item) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  children: ["#", item, ">"]
                }, item);
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "small_icon",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                className: "icon_img",
                src: __webpack_require__(/*! ../../image/note-2.png */ "./src/image/note-2.png"),
                alt: "",
                onClick: function onClick() {
                  console.log(1);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                className: "icon_img",
                src: __webpack_require__(/*! ../../image/heart.png */ "./src/image/heart.png"),
                alt: "",
                onClick: function onClick() {
                  console.log(2);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "setting",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                  className: "icon_img",
                  src: __webpack_require__(/*! ../../image/edit-2.png */ "./src/image/edit-2.png"),
                  alt: "",
                  onClick: function onClick() {
                    console.log(3);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "small_ai",
                  children: "AI"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
                className: "icon_img",
                src: __webpack_require__(/*! ../../image/export.png */ "./src/image/export.png"),
                alt: "",
                onClick: function onClick() {
                  console.log(4);
                }
              })]
            })]
          }, i);
        })
      }), clickNum === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: "\u7FA4\u53D1"
      }), clickNum === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: "\u8F6F\u6587"
      }), clickNum === 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: "\u6D77\u62A5"
      }), clickNum === 4 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: "\u5546\u54C1"
      }), clickNum === 5 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: "\u76F4\u64AD"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      ref: draggableRef,
      className: "ball",
      onMouseDown: function onMouseDown(e) {
        handleDragStart(e);
      },
      onMouseMove: function onMouseMove(e) {
        handleDragging(e);
      },
      onMouseUp: function onMouseUp(e) {
        handleDragEnd(e);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
        className: "ball_img",
        src: __webpack_require__(/*! ../../image/edit-1.png */ "./src/image/edit-1.png"),
        alt: ""
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        children: "AI"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        children: "AI\u667A\u6539"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.jsx");


var config = {"navigationBarTitleText":"营销文案辞库","enablePullDownRefresh":false,"backgroundTextStyle":"dark","onReachBottomDistance":50};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/image/Ellipse.png":
/*!*******************************!*\
  !*** ./src/image/Ellipse.png ***!
  \*******************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACuSURBVHgBhZAxDoJAEEX/LCjGSAUxQYmx9B7E1gsbEhsvYWkQCqBxUVzZZWUT7dR9xRTzXzHzCW/KXehDIhIdTRlpZ+SCC+HVcXqpTU5mnLfhwiVE+ILUKFb7KqcsWQbMEWv84XrDiXmeCGBhNkHEOgnfJoINd/ealN3TDkOv7zaxV+CseaCAFVGzzbHizxb5L8Vkccpr+iyyxB++94aq4DuQslNuO1aUzw9lY/IXivNAah1C/AIAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/image/Vector.png":
/*!******************************!*\
  !*** ./src/image/Vector.png ***!
  \******************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAADCAYAAACwAX77AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABWSURBVHgBAUsAtP8B5UYWfwAAAAEbuuqAAAAAAOVGFoAAAAAAAd9AEBAHBQWvAAEA0P8AARH///8f+/v7UQAAAAAAAAAAAOZGFY/lRRWfAAAAAAAAAAAEAxOxbIw2vAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/image/edit-1.png":
/*!******************************!*\
  !*** ./src/image/edit-1.png ***!
  \******************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKgSURBVHgB7ZrtbeMwDIaZww3QEbTB3U2QbHDZoOkE7QbJBu0GaSdoN3A7QbqB0wnSDVgRZv5QlCxZlq0AeQDBsK0PvpZEiYIBrtTNAmYGEW/sxXD6tulzsVh8w6VhhaxsalCHnq/gUrDGPmEce5sM1AoNr0Cv+GirFMViDgGjX3veG6gJNlgzdCnyGX5eryhryLNi4CFkoH33qJRpYG5QdwAtdu66r6wmagVzYRvfYebQQdeJzNNLHjGIifMAuzkl6e3dUQmIGTRk0PV+S1/eXzAyJMZetoEs/yGdo7ifpoesmI3SIyfl3iTW28b20GgExPxVDIqe2Eq9JygNG62x9hhF7CLq1RbZPZSExZwUg29FviZFFHZbpVYpY6AU/AU1MfeevJqBrTQS/fu+LZQiYOB2QBmisemW82hiXqEUQ8RElA1BAsu46hwxoo49xlG3GFHfEsMBX4ulnAD6J2q2G0U9vLhYMbtJxXCjWrR5gEzmEqOt8tkT1ZZ/UOpN3ucNabhVvmCuGO++D0qC3WGgxEAGtvwadcqK4ca3otEsJ4CR+74c+gI8I+4/YSDcAxQ2yOG6sWfZLzAF6C56gwIrHHlBHgy6a0/yOK9GDBsjx3uSd6tNzI0wIin0rUoMGyTD6uidAfqjzUeYC3TXoKiDDfQHaGXPApjfgXdG3B+1TDyvyFn84SsdjMi59mZd8x1MQEiQXHNohT8/M9AZT6nPUVCZScT0gvqqnkKDU59Dh0D/vqsP+hD3UCPo7uc048kJ7EkETnFMGyDqPwXsdth0yH7eKdC8OEL3T8EXXLkSjTrk2DOtoV7Ov9Ac5QtHEM8X2ubU4251SNQ/KUoL8Ch6rF0MQTY6ka4m6AMuByeC9s2hjb3Mup5E8D5Z6H5lRH4AVWzvrPUHca0AAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/image/edit-2.png":
/*!******************************!*\
  !*** ./src/image/edit-2.png ***!
  \******************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgBtZLRUcJAEIZ3727gUTqQDsQKxAocXs0lkA6kAqADOjgCQR7RCkgHUkJKwEfk7tZLxgQFJMM4/k87d/v99ye7AH8UVjWoxaIpNCkCarv21GgThqGfFPesCuaaVhYoCXwPidETF2yp1KxdaVDAQJR0fW+UnXU97xXBdpjgg7MGSqkG03bpyjUhtI47bFnhSVjUVq58yV6OZvEEEclwlqfIUhHaYVfK6GQCJupjRFiXsX3ZA4sbru1bDgNNCvjIIJo9u9eIAumF38+N2Y4IIM3hL+NCoiim03nPNdw4+PYwFRd1BWSTIJCjwzuxzw53HGh82JClAqRN4Ms+nFBpgIRNS5j+hOdj95evXKoO/KJ9AqCGMRbdFJogRIsjeyCCltHbezij0kATRW7L3PhqKWTzJ1hb/dF3e7uB/1S+SNkEAHFwCcgQhlI+RuUmxnF8fQEPu93uPfu8T/qUoggYQOLGAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/image/export.png":
/*!******************************!*\
  !*** ./src/image/export.png ***!
  \******************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFySURBVHgBjZLdUcJAEMd3cyc8SgkpwRKwAvCRCYipAKwAqUCogDEIPEoHpAQ6MFRgHjHe7boXBSMEZWdu5vb2fnf78Uc4YZPJxAfQfhh24txfLHzYGn8Xd+f6AKh5utJHgJ64qay1rBzWRF3QWCdGHxH8KJrXcQ/Ky8rwCpiW1n4MwzBMj7KZza4U4UvuMNzpIsjAo+5te1xaxjdoPb7RhI8sZ54LeIb6wBx3O8G/YBgEa/A4tvZ9k/+MgA1xrs8CxTpBMMw/dUFJN5UakyPQlXMAFk1LF2sEmJb9Ctst2ErlCJxO5ytj+F4boxOlyC9jy7L5Mq7tt9F09uZmDGeYK+Upmr26fd5t9GCkLqqDc2BlaYDAyz1ssmzMxM0oeu7/Bbo4E9RFRPlIfxQmWvZUZSVZxFZ5w7DVSgoxJ9sHUVWDbHa96wX+qkceUKrak9E1JSITwFQu+K5BoqgRmWxclC2eStHNv4p4SURJu93elN35BH6nyFmyWK/aAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/image/heart.png":
/*!*****************************!*\
  !*** ./src/image/heart.png ***!
  \*****************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFvSURBVHgBrVPdbcIwEL6zo9JHNmhGYAQ6QeGRIn4yQUdImKBiApMYl0dGIJ2gdIJmg/JKlNg9IzkC6kql5ZMcOZ/vvjvfnQGuADwnlFKdstRtuA2KaDAoHC+ECAGC0O6jaJR7RaSUXQNcGDA7RksbDBFhi6DnADwmvoNgthqwjbTqqo6c2EFErFYhr/QbGOyNx4+vjbBSsdGQGIBkMhrOTgOydV3pfpOVlC+bdLmcgAeCruflpeyl5NcQmVQG/gDy+6RatZkQqxAMFPBfOMVLfKy9uwGzH6r2ltrXuUQkCAIqrskbkcpUKQt4DBeBP1H0xQmVZurDVvw37lmmptbe/TO30Rz6zLDnn1rqcDhHjHVd3n8TiYZDmkaYcQ0bIWTXJ2CHzJ4b1AmNa+F49EViNayRQV5zNrPv5zALwU1Co/BgM7YBj33QmzI9Ns5vYjqdGsCcjELqxEJX5Zwy2J3be0WOxVqt1t1+v3/3OV8VX9bUr/eBu8OyAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/image/note-2.png":
/*!******************************!*\
  !*** ./src/image/note-2.png ***!
  \******************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAICSURBVHgBtVLRcdpAEN3dk/0blUAHUSoAKjD5RCApqgB3AKkgdgUCZOFfOohUQaCCUAK/gHSbvRPHMMGTyYe9MxrpdLtv3759AO8Q+K/LPM97zJQwYgdZb4hog8jb0Wi0+S+QRV7MgCFRhDMi2DUNB8wQMEAPEYEQZuNxuLgBybLMV+p+IDkPWgp0c+ynabr7u8Fqteqeap4j8HMcj5/IXSyXL4/Ku//NyAkLtqCXbwGYCMOwItQpIE7NmRx1mTtp6uOXJBr3BcAXknPLriiCLM8H2etr5xooiqLSsafzTBNdH7+6zgwcNM1ha7O19hVQomr9S5qZZ3qF5UvN3ssy6cB67wDMRjTAzlyac9p2LC9aMPuOIWuwW/LSdLhb5oVvaLWF9BmZW6oygjrpKRGWJ4VVOBxWjoKnoSvb2lw0ERnl4AV2FBZPILYshsNdA02lNffUqZlca2JWzQrWFvD8a60UJYa2mGnPZ8oWKI7n8prDTWCgj61ulkldHxdCZ2BGEiUrQLrZxnW0TmZwOloQo4UbyawOieeq5p/inR9ZlveuAUwjBpUB8ezCyX0siuIBND4mUdg/J3eUupuIf3qS1GHbxBSwsf5TEo2+34BYoPxFrIyfmlo/i1q+Yuya0cQ3Ruj1ncLycDhs3frfBLEMlstvHpKx/l46bpCxjOOwgo+OP6BUBq06RJ/eAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _regeneratorRuntime; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map