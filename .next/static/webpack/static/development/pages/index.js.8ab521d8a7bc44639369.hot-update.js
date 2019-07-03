webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _FooterOptIn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FooterOptIn */ "./components/Footer/FooterOptIn.js");
/* harmony import */ var _FooterNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FooterNav */ "./components/Footer/FooterNav.js");
/* harmony import */ var _RecentNews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RecentNews */ "./components/Footer/RecentNews.js");





var _jsxFileName = "/Users/milcahcenteno/freck/freck-next/components/Footer/Footer.js";








var Footer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _Component);

  function Footer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).call(this, props));
    _this.state = {
      posts: []
    };
    _this.createMarkup = _this.createMarkup.bind();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://freckbeauty.com/wp-json/wp/v2/posts").then(function (posts) {
        _this2.setState({
          posts: posts.data.slice(0, 4)
        });
      });
    }
  }, {
    key: "createMarkup",
    value: function createMarkup(html) {
      return {
        __html: html
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "container",
        className: "jsx-995412737",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-995412737",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_FooterOptIn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-995412737",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_FooterNav__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-995412737",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_RecentNews__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "995412737",
        __self: this
      }, "#container.jsx-995412737{display:grid;grid-template-rows:22.5% 50% 25%;grid-template-columns:22.5% 50% 25%;background-color:#1c150f;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDa0IsQUFHd0IsYUFDb0IsaUNBQ0csb0NBQ1gseUJBQ2QsV0FDYiIsImZpbGUiOiIvVXNlcnMvbWlsY2FoY2VudGVuby9mcmVjay9mcmVjay1uZXh0L2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgRm9vdGVyT3B0SW4gZnJvbSAnLi9Gb290ZXJPcHRJbic7XG5pbXBvcnQgRm9vdGVyTmF2IGZyb20gJy4vRm9vdGVyTmF2JztcbmltcG9ydCBSZWNlbnROZXdzIGZyb20gJy4vUmVjZW50TmV3cyc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb3N0czogW11cbiAgICB9O1xuICAgIHRoaXMuY3JlYXRlTWFya3VwID0gdGhpcy5jcmVhdGVNYXJrdXAuYmluZCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtanNvbi93cC92Mi9wb3N0c1wiKS50aGVuKHBvc3RzID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb3N0czogcG9zdHMuZGF0YS5zbGljZSgwLCA0KVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVNYXJrdXAoaHRtbCkge1xuICAgIHJldHVybiB7IF9faHRtbDogaHRtbCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvb3Rlck9wdEluIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxGb290ZXJOYXYgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFJlY2VudE5ld3MgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjIuNSUgNTAlIDI1JTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyLjUlIDUwJSAyNSU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMTUwZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXX0= */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Footer/Footer.js */"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.8ab521d8a7bc44639369.hot-update.js.map