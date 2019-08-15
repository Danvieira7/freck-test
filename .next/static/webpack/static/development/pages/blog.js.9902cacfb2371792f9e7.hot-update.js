webpackHotUpdate("static/development/pages/blog.js",{

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentWillUn", void 0);

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

      this_.isMounted = true;
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
      }, "#recent-news.jsx-310923613{padding-left:5px;}a.jsx-310923613{color:#fff;-webkit-text-decoration:none;text-decoration:none;}#news-container.jsx-310923613{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-bottom:20px;}#img-container.jsx-310923613{min-width:75px;max-width:75px;height:75px;overflow:hidden;}#title-container.jsx-310923613{padding-left:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-310923613{height:75px;}.see-all.jsx-310923613{color:#9a8470;font-size:0.8rem;text-transform:uppercase;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmVja2Rldi9GcmVjay9mcmVjay1uZXh0L2NvbXBvbmVudHMvRm9vdGVyL1JlY2VudE5ld3MuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEa0IsQUFHNEIsQUFHTixBQUlFLEFBSUUsQUFNRyxBQUtOLEFBR0UsV0FyQk8sQ0FtQnZCLEVBR21CLENBZEYsRUFYakIsQ0FpQmUsWUFMRCxDQWNhLFdBYlQsY0FjRyxFQWJyQixHQVZBLGFBR3NCLGtCQVdELEVBVnJCLHVEQW9CQSxvQ0FUQSIsImZpbGUiOiIvVXNlcnMvZnJlY2tkZXYvRnJlY2svZnJlY2stbmV4dC9jb21wb25lbnRzL0Zvb3Rlci9SZWNlbnROZXdzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuY2xhc3MgUmVjZW50TmV3cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIF9pc01vdW50ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9zdHM6IFtdXG4gICAgfTtcbiAgICB0aGlzLmNyZWF0ZU1hcmt1cCA9IHRoaXMuY3JlYXRlTWFya3VwLmJpbmQoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXNfLmlzTW91bnRlZCA9IHRydWU7XG5cbiAgICBheGlvcy5nZXQoXCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzP19lbWJlZFwiKVxuICAgICAgLnRoZW4ocG9zdHMgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwb3N0czogcG9zdHMuZGF0YS5zbGljZSgwLCA0KVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVuXG5cbiAgY3JlYXRlTWFya3VwKGh0bWwpIHtcbiAgICByZXR1cm4geyBfX2h0bWw6IGh0bWwgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJyZWNlbnQtbmV3c1wiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyLW5hdi10aXRsZVwiPlJFQ0VOVCBORVdTPC9wPlxuICAgICAge3RoaXMuc3RhdGUucG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Bvc3Quc2x1Z30ga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibmV3cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW1nLWNvbnRhaW5lclwiIHJvbGU9XCJpbWdcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWycwJ10uc291cmNlX3VybH0gYWx0PVwiZmVhdHVyZWQgcG9zdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInRpdGxlLWNvbnRhaW5lclwiIHJvbGU9XCJsaW5rXCI+XG4gICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZS5yZW5kZXJlZC5yZXBsYWNlKGAmIzgyMTc7YCwgYCdgKS5yZXBsYWNlKGAmIzAzODtgLCAnJicpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2VlLWFsbFwiPlNFRSBBTEw8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjcmVjZW50LW5ld3Mge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAjbmV3cy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgI2ltZy1jb250YWluZXIge1xuICAgICAgICAgIG1pbi13aWR0aDogNzVweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XG4gICAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgI3RpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfSBcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlZS1hbGwge1xuICAgICAgICAgIGNvbG9yOiAjOWE4NDcwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2VudE5ld3M7Il19 */\n/*@ sourceURL=/Users/freckdev/Freck/freck-next/components/Footer/RecentNews.jsx */"));
    }
  }]);

  return RecentNews;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RecentNews);

/***/ })

})
//# sourceMappingURL=blog.js.9902cacfb2371792f9e7.hot-update.js.map