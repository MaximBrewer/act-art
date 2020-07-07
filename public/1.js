(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/components/HomeCarousel.js":
/*!*************************************************!*\
  !*** ./resources/js/components/HomeCarousel.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeGalleries; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
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





var declOfNum = function declOfNum(number, titles) {
  var cases = [2, 0, 1, 1, 1, 2];
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

function HomeGalleries() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    slideIndex: 0,
    slidesTotal: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var refPicture = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var refAnnounce = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var setting = {
    arrows: false,
    infinite: true,
    dots: false,
    speed: 300,
    auto: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    onInit: function onInit() {
      setState({
        slideIndex: 0,
        slidesTotal: 3
      });
    }
  };

  var settingsPicture = _objectSpread(_objectSpread({}, setting), {}, {
    beforeChange: function beforeChange(current, next) {
      var cnt = refPicture.current.props.children.length;
      setState({
        slideIndex: next,
        slidesTotal: cnt
      });
      if (next > current && (next == 1 || current != 0) || current == cnt - 1 && next == 0) refAnnounce.current.slickNext(false);else refAnnounce.current.slickPrev(false);
    }
  });

  var settingsAnnounce = _objectSpread(_objectSpread({}, setting), {}, {
    beforeChange: function beforeChange(current, next) {
      var cnt = refPicture.current.props.children.length;
      setState({
        slideIndex: next,
        slidesTotal: cnt
      });
      if (next > current && (next == 1 || current != 0) || current == cnt - 1 && next == 0) refPicture.current.slickNext(false);else refPicture.current.slickPrev(false);
    }
  }); // Random component


  var Completionist = function Completionist() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "banner-counter d-flex"
    }, "You are good to go!");
  }; // Renderer callback with condition


  var renderer = function renderer(_ref) {
    var days = _ref.days,
        hours = _ref.hours,
        minutes = _ref.minutes,
        seconds = _ref.seconds,
        completed = _ref.completed;

    if (completed) {
      // Render a completed state
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Completionist, null);
    } else {
      // Render a countdown
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "banner-counter d-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "days"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "number h5"
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(days)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, declOfNum(days, ["день", "дня", "дней"]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "separator h5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ours"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "number h5"
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(hours)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, declOfNum(hours, ["час", "часа", "часов"]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "separator h5"
      }, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "minutes"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "number h5"
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(minutes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, declOfNum(minutes, ["мин.", "мин.", "мин."]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "separator h5"
      }, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "seconds"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "number h5"
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(seconds)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, declOfNum(seconds, ["сек.", "сек.", "сек."]))));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col col-xl-40 col-xxl-38"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settingsPicture, {
    ref: refPicture
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner-image",
    style: {
      backgroundImage: 'url("/storage/template/img/banner.jpg")'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h1"
  }, "\u0421\u041A\u041E\u0420\u041E \u041D\u041E\u0412\u042B\u0419 \u0410\u0423\u041A\u0426\u0418\u041E\u041D:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u043F\u043E\u0440\u0430 \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C\u0441\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h2"
  }, "26 \u0438\u044E\u043B\u044F / 15:00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner-image",
    style: {
      backgroundImage: 'url("/storage/template/img/banner.jpg")'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h1"
  }, "\u0421\u041A\u041E\u0420\u041E \u041D\u041E\u0412\u042B\u0419 \u0410\u0423\u041A\u0426\u0418\u041E\u041D:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u043F\u043E\u0440\u0430 \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C\u0441\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h2"
  }, "26 \u0438\u044E\u043B\u044F / 15:00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner-image",
    style: {
      backgroundImage: 'url("/storage/template/img/banner.jpg")'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h1"
  }, "\u0421\u041A\u041E\u0420\u041E \u041D\u041E\u0412\u042B\u0419 \u0410\u0423\u041A\u0426\u0418\u041E\u041D:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u043F\u043E\u0440\u0430 \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C\u0441\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h2"
  }, "26 \u0438\u044E\u043B\u044F / 15:00"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col col-xl-20 col-xxl-22"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settingsAnnounce, {
    ref: refAnnounce
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner-announce"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h3"
  }, "\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u0442\u043E\u0433\u043E \u0448\u0440\u0438\u0444\u0442\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner-counter-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0414\u041E \u041D\u0410\u0427\u0410\u041B\u0410 \u0410\u0423\u041A\u0426\u0418\u041E\u041D\u0410:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: Date.now() + 100000000,
    renderer: renderer
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary btn-lg"
  }, "\u041F\u0420\u0418\u041D\u042F\u0422\u042C \u0423\u0427\u0410\u0421\u0422\u0418\u0415"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "h5_underline"
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043B\u043E\u0442\u044B \u2192")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner-announce"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h3"
  }, "\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u0442\u043E\u0433\u043E \u0448\u0440\u0438\u0444\u0442\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner-counter-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0414\u041E \u041D\u0410\u0427\u0410\u041B\u0410 \u0410\u0423\u041A\u0426\u0418\u041E\u041D\u0410:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: Date.now() + 100000000,
    renderer: renderer
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary btn-lg"
  }, "\u041F\u0420\u0418\u041D\u042F\u0422\u042C \u0423\u0427\u0410\u0421\u0422\u0418\u0415"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "h5_underline"
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043B\u043E\u0442\u044B \u2192")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner-announce"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h3"
  }, "\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u0442\u043E\u0433\u043E \u0448\u0440\u0438\u0444\u0442\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner-counter-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0414\u041E \u041D\u0410\u0427\u0410\u041B\u0410 \u0410\u0423\u041A\u0426\u0418\u041E\u041D\u0410:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: Date.now() + 100000000,
    renderer: renderer
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary btn-lg"
  }, "\u041F\u0420\u0418\u041D\u042F\u0422\u042C \u0423\u0427\u0410\u0421\u0422\u0418\u0415"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "h5_underline"
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043B\u043E\u0442\u044B \u2192")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "btn btn-lg btn-default"
  }, "\u0412\u0421\u0415 \u0410\u0423\u041A\u0426\u0418\u041E\u041D\u042B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-counter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "current"
  }, state.slideIndex + 1), "/", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "total"
  }, state.slidesTotal)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-arrows"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-default btn-control d-flex",
    onClick: function onClick() {
      refAnnounce.current.slickPrev();
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
      refAnnounce.current.slickNext();
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
  })))));
}

/***/ })

}]);