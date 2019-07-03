webpackHotUpdate("static/development/pages/blog.js",{

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
        className: "jsx-1921900285",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "RECENT NEWS", this.state.posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: post.id,
          className: "jsx-1921900285" + " " + "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-1921900285" + " " + "news-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: post.slug,
          key: post.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "jsx-1921900285",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "img-container",
          className: "jsx-1921900285",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: post._embedded['wp:featuredmedia']['0'].source_url,
          className: "jsx-1921900285",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-1921900285",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
          className: "jsx-1921900285",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, post.title.rendered))))));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1921900285",
        __self: this
      }, "#recent-news.jsx-1921900285{height:100%;}a.jsx-1921900285{color:#fff;}#news-container.jsx-1921900285{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}#img-container.jsx-1921900285{width:75px;height:75px;overflow:hidden;}img.jsx-1921900285{height:75px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Gb290ZXIvUmVjZW50TmV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2tCLEFBR3VCLEFBSWYsQUFFZ0IsQUFJRixBQUtDLFdBWGQsQUFPYyxDQVZkLEFBZUEsV0FKa0IsZ0JBQ2xCLG1DQU5xQixxRUFDckIiLCJmaWxlIjoiL1VzZXJzL21pbGNhaGNlbnRlbm8vZnJlY2svZnJlY2stbmV4dC9jb21wb25lbnRzL0Zvb3Rlci9SZWNlbnROZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmNsYXNzIFJlY2VudE5ld3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9zdHM6IFtdXG4gICAgfTtcbiAgICB0aGlzLmNyZWF0ZU1hcmt1cCA9IHRoaXMuY3JlYXRlTWFya3VwLmJpbmQoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF4aW9zLmdldChcImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWpzb24vd3AvdjIvcG9zdHM/X2VtYmVkXCIpLnRoZW4ocG9zdHMgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBvc3RzOiBwb3N0cy5kYXRhLnNsaWNlKDAsIDQpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU1hcmt1cChodG1sKSB7XG4gICAgcmV0dXJuIHsgX19odG1sOiBodG1sIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwicmVjZW50LW5ld3NcIj5cbiAgICAgIFJFQ0VOVCBORVdTXG4gICAgICB7dGhpcy5zdGF0ZS5wb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Bvc3Quc2x1Z30ga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWycwJ10uc291cmNlX3VybH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNyZWNlbnQtbmV3cyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmXG4gICAgICAgIH1cbiAgICAgICAgI25ld3MtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgIH1cbiAgICAgICAgI2ltZy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjZW50TmV3czsiXX0= */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Footer/RecentNews.js */"));
    }
  }]);

  return RecentNews;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RecentNews);

/***/ })

})
//# sourceMappingURL=blog.js.91e419957d936b70f713.hot-update.js.map