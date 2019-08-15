webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/Footer/RecentNews.jsx":
/*!******************************************!*\
  !*** ./components/Footer/RecentNews.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);












var RecentNews =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RecentNews, _Component);

  function RecentNews(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RecentNews);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RecentNews).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_isMounted", false);

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

      this_.isMounted;
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://freckbeauty.com/wp-json/wp/v2/posts?_embed").then(function (posts) {
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "recent-news",
        className: "jsx-310923613"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-310923613" + " " + "footer-nav-title"
      }, "RECENT NEWS"), this.state.posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: post.id,
          className: "jsx-310923613" + " " + "card"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: post.slug,
          key: post.id
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "jsx-310923613"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          id: "news-container",
          className: "jsx-310923613"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          id: "img-container",
          role: "img",
          className: "jsx-310923613"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: post._embedded['wp:featuredmedia']['0'].source_url,
          alt: "featured post",
          className: "jsx-310923613"
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          id: "title-container",
          role: "link",
          className: "jsx-310923613"
        }, post.title.rendered.replace("&#8217;", "'").replace("&#038;", '&'))))));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-310923613"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-310923613" + " " + "see-all"
      }, "SEE ALL"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "310923613"
      }, "#recent-news.jsx-310923613{padding-left:5px;}a.jsx-310923613{color:#fff;-webkit-text-decoration:none;text-decoration:none;}#news-container.jsx-310923613{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-bottom:20px;}#img-container.jsx-310923613{min-width:75px;max-width:75px;height:75px;overflow:hidden;}#title-container.jsx-310923613{padding-left:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-310923613{height:75px;}.see-all.jsx-310923613{color:#9a8470;font-size:0.8rem;text-transform:uppercase;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmVja2Rldi9GcmVjay9mcmVjay1uZXh0L2NvbXBvbmVudHMvRm9vdGVyL1JlY2VudE5ld3MuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEa0IsQUFHNEIsQUFHTixBQUlFLEFBSUUsQUFNRyxBQUtOLEFBR0UsV0FyQk8sQ0FtQnZCLEVBR21CLENBZEYsRUFYakIsQ0FpQmUsWUFMRCxDQWNhLFdBYlQsY0FjRyxFQWJyQixHQVZBLGFBR3NCLGtCQVdELEVBVnJCLHVEQW9CQSxvQ0FUQSIsImZpbGUiOiIvVXNlcnMvZnJlY2tkZXYvRnJlY2svZnJlY2stbmV4dC9jb21wb25lbnRzL0Zvb3Rlci9SZWNlbnROZXdzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuY2xhc3MgUmVjZW50TmV3cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIF9pc01vdW50ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9zdHM6IFtdXG4gICAgfTtcbiAgICB0aGlzLmNyZWF0ZU1hcmt1cCA9IHRoaXMuY3JlYXRlTWFya3VwLmJpbmQoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXNfLmlzTW91bnRlZFxuICAgIGF4aW9zLmdldChcImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWpzb24vd3AvdjIvcG9zdHM/X2VtYmVkXCIpXG4gICAgICAudGhlbihwb3N0cyA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHBvc3RzOiBwb3N0cy5kYXRhLnNsaWNlKDAsIDQpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBjcmVhdGVNYXJrdXAoaHRtbCkge1xuICAgIHJldHVybiB7IF9faHRtbDogaHRtbCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBpZD1cInJlY2VudC1uZXdzXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXItbmF2LXRpdGxlXCI+UkVDRU5UIE5FV1M8L3A+XG4gICAgICB7dGhpcy5zdGF0ZS5wb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgPExpbmsgaHJlZj17cG9zdC5zbHVnfSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJuZXdzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWctY29udGFpbmVyXCIgcm9sZT1cImltZ1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11bJzAnXS5zb3VyY2VfdXJsfSBhbHQ9XCJmZWF0dXJlZCBwb3N0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGl0bGUtY29udGFpbmVyXCIgcm9sZT1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlLnJlbmRlcmVkLnJlcGxhY2UoYCYjODIxNztgLCBgJ2ApLnJlcGxhY2UoYCYjMDM4O2AsICcmJyl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZWUtYWxsXCI+U0VFIEFMTDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNyZWNlbnQtbmV3cyB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgICNuZXdzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAjaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLXdpZHRoOiA3NXB4O1xuICAgICAgICAgIG1heC13aWR0aDogNzVweDtcbiAgICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAjdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9IFxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VlLWFsbCB7XG4gICAgICAgICAgY29sb3I6ICM5YTg0NzA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjZW50TmV3czsiXX0= */\n/*@ sourceURL=/Users/freckdev/Freck/freck-next/components/Footer/RecentNews.jsx */"));
    }
  }]);

  return RecentNews;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RecentNews);

/***/ })

})
//# sourceMappingURL=contact.js.573348119d2b304722a8.hot-update.js.map