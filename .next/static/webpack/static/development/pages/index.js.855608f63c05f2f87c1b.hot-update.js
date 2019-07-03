webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer/RecentNews.js":
/*!*****************************************!*\
  !*** ./components/Footer/RecentNews.js ***!
  \*****************************************/
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





var _jsxFileName = "/Users/milcahcenteno/freck/freck-next/components/Footer/RecentNews.js";





var RecentNews =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RecentNews, _Component);

  function RecentNews(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RecentNews);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RecentNews).call(this, props));
    _this.state = {
      posts: []
    };
    _this.createMarkup = _this.createMarkup.bind();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RecentNews, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://freckbeauty.com/wp-json/wp/v2/posts?_embed").then(function (posts) {
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
        id: "recent-news",
        className: "jsx-656307470",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "RECENT NEWS", this.state.posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: post.id,
          className: "jsx-656307470" + " " + "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: post.slug,
          key: post.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "jsx-656307470",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-656307470" + " " + "news-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "img-container",
          className: "jsx-656307470",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: post._embedded['wp:featuredmedia']['0'].source_url,
          className: "jsx-656307470",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "title-container",
          className: "jsx-656307470",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "jsx-656307470",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }), post.title.rendered)))));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "656307470",
        __self: this
      }, "#recent-news.jsx-656307470{height:100%;}a.jsx-656307470{color:#fff;}#news-container.jsx-656307470{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#img-container.jsx-656307470{width:75px;height:75px;overflow:hidden;}img.jsx-656307470{height:75px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Gb290ZXIvUmVjZW50TmV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2tCLEFBR3VCLEFBSWYsQUFFZ0IsQUFHRixBQU9DLFdBWmQsQUFNYyxDQVRkLEFBZ0JBLFdBTmtCLGdCQUNsQixtQ0FMQSIsImZpbGUiOiIvVXNlcnMvbWlsY2FoY2VudGVuby9mcmVjay9mcmVjay1uZXh0L2NvbXBvbmVudHMvRm9vdGVyL1JlY2VudE5ld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuY2xhc3MgUmVjZW50TmV3cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb3N0czogW11cbiAgICB9O1xuICAgIHRoaXMuY3JlYXRlTWFya3VwID0gdGhpcy5jcmVhdGVNYXJrdXAuYmluZCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtanNvbi93cC92Mi9wb3N0cz9fZW1iZWRcIikudGhlbihwb3N0cyA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9zdHM6IHBvc3RzLmRhdGEuc2xpY2UoMCwgNClcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTWFya3VwKGh0bWwpIHtcbiAgICByZXR1cm4geyBfX2h0bWw6IGh0bWwgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJyZWNlbnQtbmV3c1wiPlxuICAgICAgUkVDRU5UIE5FV1NcbiAgICAgIHt0aGlzLnN0YXRlLnBvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICA8TGluayBocmVmPXtwb3N0LnNsdWd9IGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXVsnMCddLnNvdXJjZV91cmx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPntwb3N0LnRpdGxlLnJlbmRlcmVkfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNyZWNlbnQtbmV3cyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmXG4gICAgICAgIH1cbiAgICAgICAgI25ld3MtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgICNpbWctY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAjdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgfSBcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNlbnROZXdzOyJdfQ== */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Footer/RecentNews.js */"));
    }
  }]);

  return RecentNews;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RecentNews);

/***/ })

})
//# sourceMappingURL=index.js.855608f63c05f2f87c1b.hot-update.js.map