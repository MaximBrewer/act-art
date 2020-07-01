(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/components/HomeExperts.js":
/*!************************************************!*\
  !*** ./resources/js/components/HomeExperts.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeAnnounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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



function HomeAnnounce() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    slideIndex: 0,
    slidesTotal: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var refPicture = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var setting = {
    arrows: false,
    infinite: true,
    dots: false,
    speed: 300,
    auto: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    onInit: function onInit() {
      setState({
        slideIndex: 0,
        slidesTotal: 20
      });
    },
    beforeChange: function beforeChange(current, next) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          slideIndex: next
        });
      });
    }
  };

  var createSlides = function createSlides() {
    var slides = [];

    for (var i = 0; i < 20; i++) {
      slides.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slide-wrapper",
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slide-inner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image mb-4",
        style: {
          backgroundImage: 'url("/storage/images/400.jpg")'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fio"
      }, "\u042E\u0440\u0438\u0439", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u041B\u044C\u0432\u043E\u0432\u0438\u0447"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "description"
      }, "\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0442\u043E\u0440, \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A, \u043F\u0440\u0435\u0434\u0441\u0435\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0432\u0435\u0442\u0430 \u0434\u0435\u043B\u0430\u044E\u0449\u0435\u0433\u043E \u0434\u0435\u043B\u0430"))));
    }

    return slides;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, setting, {
    ref: refPicture
  }), createSlides())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col col-md-40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sub_h2"
  }, "\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0410\u043A\u0442-\u0410\u0440\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0442\u0440\u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0438\u043C\u0438 \u0438 \u0432\u044B\u0441\u0442\u0430\u0432\u043E\u0447\u043D\u044B\u043C\u0438 \u0433\u0430\u043B\u0435\u0440\u0435\u044F\u043C\u0438. \u0412\u0441\u0435 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u044B \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0446\u0435\u043D\u0442\u0440\u0435 \u041C\u043E\u0441\u043A\u0432\u044B \u0438 \u0434\u0430\u043B\u0435\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043A\u0441\u0442. \u0412\u0441\u0435 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u044B \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0446\u0435\u043D\u0442\u0440\u0435 \u041C\u043E\u0441\u043A\u0432\u044B \u0438 \u0434\u0430\u043B\u0435\u0435 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u0442\u0435\u043A\u0441\u0442. \u0412\u0441\u0435 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u044B \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0446\u0435\u043D\u0442\u0440\u0435 \u041C\u043E\u0441\u043A\u0432\u044B."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col col-md-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-arrows"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-default btn-control d-flex",
    onClick: function onClick() {
      refPicture.current.slickPrev();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "39",
    height: "36",
    viewBox: "0 0 39 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.5946 3L6 18L20.5946 33",
    stroke: "#1B292B",
    strokeWidth: "8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M7.62164 17.5946H38.4325",
    stroke: "#1E2B32",
    strokeWidth: "8"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-default btn-control d-flex",
    onClick: function onClick() {
      refPicture.current.slickNext();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "39",
    height: "36",
    viewBox: "0 0 39 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M18.4054 33L33 18L18.4054 3",
    stroke: "#1B292B",
    strokeWidth: "8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M31.3784 18.4054L0.567543 18.4054",
    stroke: "#1E2B32",
    strokeWidth: "8"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "btn btn-lg btn-default"
  }, "\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0410\u0423\u041A\u0426\u0418\u041E\u041D\u042B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "btn btn-lg btn-primary"
  }, "\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u044E")));
}

/***/ })

}]);