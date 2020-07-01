(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/components/HomeGalleries.js":
/*!**************************************************!*\
  !*** ./resources/js/components/HomeGalleries.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeGalleries; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomeGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeGallery */ "./resources/js/components/HomeGallery.js");
function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}




var randomInteger = function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

var getRandomColor = function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

var rows = 3;
var cols = 10;
var size = 250;
var position = 0;
var step = 3;
var wait = 0;
function HomeGalleries() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      galleries = _useState2[0],
      setGalleries = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var moveLeft = function moveLeft() {
    position -= step;
    var w = 0;

    var _iterator = _createForOfIteratorHelper(document.getElementsByClassName("gallery-body")),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var r = _step.value;
        w++;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (!wait && document.getElementById("galleryHolder").offsetWidth > w * size * cols + position - 300) {
      wait = 1;
      setTimeout(function () {
        addGallery();
      }, 100);
    }

    var style = "translate3d(" + position + "px, 0px, 0px)";
    ref.current.style.transform = style;
  };

  var animateGallery = function animateGallery() {
    requestAnimationFrame(function i() {
      moveLeft();
      requestAnimationFrame(i);
    });
  };

  var addGallery = function addGallery() {
    axios.get("/api/get_gallery_items").then(function (res) {
      var array = [];
      var grid = [];

      for (var i = 0; i < rows; i++) {
        grid[i] = [];

        for (var j = 0; j < cols; j++) {
          grid[i][j] = 0;
        }
      }

      loop1: for (var _i2 in res.data.gallery) {
        var p = {
          h: randomInteger(1, 2),
          w: randomInteger(1, 2),
          tag: res.data.gallery[_i2].tag,
          title: res.data.gallery[_i2].title,
          path: res.data.gallery[_i2].url,
          l: 0,
          t: 0,
          bg: getRandomColor(),
          href: res.data.gallery[_i2].article
        };
        var set = false;

        loop2: for (var _j in grid) {
          _j = _j / 1;

          for (var k in grid[_j]) {
            k = k / 1;
            if (grid[_j][k]) continue;
            p.s = 1;
            p.l = k;
            p.t = _j;
            if (_j == grid.length - 1) p.h = 1;
            if (k == grid[_j].length - 1) p.w = 1;else if (grid[_j][k + 1]) p.w = 1;
            grid[_j][k] = _i2 + 1;

            if (p.h > 1) {
              grid[_j + 1][k] = _i2 + 1;
            }

            if (p.w > 1) {
              grid[_j][k] = _i2 + 1;
              grid[_j][k + 1] = _i2 + 1;

              if (p.h > 1) {
                grid[_j + 1][k + 1] = _i2 + 1;
              }
            }

            set = true;
            break loop2;
          }
        }

        if (!set) break loop1;
        array.push(p);
      }

      wait = 0;
      setGalleries(function (prevState) {
        // if (prevState.length < 1) addGallery();
        // console.log(prevState)
        return prevState.concat({
          items: array
        });
      });
    })["catch"](function (err) {});
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    addGallery();
    setTimeout(function () {
      animateGallery();
    }, 200);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "g-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "h5"
  }, "\u0410\u0443\u043A\u0446\u0438\u043E\u043D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h1"
  }, "\u0417\u0451\u0440\u043D\u0430 \u0410\u0440\u0442\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sub_h2"
  }, "\u041B\u0443\u0447\u0448\u0435\u0435 \u0438\u0437 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u0412\u0441\u0435\u043A\u043E\u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A 2020 \u0433."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "h5_underline",
    href: "#"
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043B\u043E\u0442\u044B \u2192"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gallery-inner",
    ref: ref
  }, galleries.map(function (gallery, ind) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeGallery__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: ind,
      items: gallery.items,
      cols: cols,
      rows: rows,
      size: size
    });
  })));
}

/***/ }),

/***/ "./resources/js/components/HomeGallery.js":
/*!************************************************!*\
  !*** ./resources/js/components/HomeGallery.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Galleries; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Galleries(props) {
  var items = props.items,
      addGallery = props.addGallery,
      cols = props.cols,
      rows = props.rows,
      size = props.size;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gallery-body",
    style: {
      width: cols * size + "px",
      height: rows * size + "px"
    }
  }, props.items.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "picture",
      key: index,
      style: {
        width: item.w * size + "px",
        height: item.h * size + "px",
        left: item.l * size + "px",
        top: item.t * size + "px",
        backgroundColor: item.bg,
        backgroundImage: "url(" + item.path + ")"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "picture-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: item.bg,
      target: "_self",
      className: "lookFullSize"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "ico-holder"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "ia icon-logo-eye"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pic-description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tag"
    }, item.tag), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title"
    }, item.title))));
  }));
}

/***/ })

}]);