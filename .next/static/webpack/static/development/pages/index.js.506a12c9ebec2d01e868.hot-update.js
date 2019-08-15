webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);










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
        className: "jsx-310923613"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-310923613" + " " + "footer-nav-title"
      }, "RECENT NEWS"), this.state.posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: post.id,
          className: "jsx-310923613" + " " + "card"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: post.slug,
          key: post.id
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "jsx-310923613"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "news-container",
          className: "jsx-310923613"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "img-container",
          role: "img",
          className: "jsx-310923613"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: post._embedded['wp:featuredmedia']['0'].source_url,
          alt: "featured post",
          className: "jsx-310923613"
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "title-container",
          role: "link",
          className: "jsx-310923613"
        }, post.title.rendered.replace("&#8217;", "'").replace("&#038;", '&'))))));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-310923613"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-310923613" + " " + "see-all"
      }, "SEE ALL"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "310923613"
      }, "#recent-news.jsx-310923613{padding-left:5px;}a.jsx-310923613{color:#fff;-webkit-text-decoration:none;text-decoration:none;}#news-container.jsx-310923613{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-bottom:20px;}#img-container.jsx-310923613{min-width:75px;max-width:75px;height:75px;overflow:hidden;}#title-container.jsx-310923613{padding-left:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-310923613{height:75px;}.see-all.jsx-310923613{color:#9a8470;font-size:0.8rem;text-transform:uppercase;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmVja2Rldi9GcmVjay9mcmVjay1uZXh0L2NvbXBvbmVudHMvRm9vdGVyL1JlY2VudE5ld3MuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEa0IsQUFHNEIsQUFHTixBQUlFLEFBSUUsQUFNRyxBQUtOLEFBR0UsV0FyQk8sQ0FtQnZCLEVBR21CLENBZEYsRUFYakIsQ0FpQmUsWUFMRCxDQWNhLFdBYlQsY0FjRyxFQWJyQixHQVZBLGFBR3NCLGtCQVdELEVBVnJCLHVEQW9CQSxvQ0FUQSIsImZpbGUiOiIvVXNlcnMvZnJlY2tkZXYvRnJlY2svZnJlY2stbmV4dC9jb21wb25lbnRzL0Zvb3Rlci9SZWNlbnROZXdzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuY2xhc3MgUmVjZW50TmV3cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb3N0czogW11cbiAgICB9O1xuICAgIHRoaXMuY3JlYXRlTWFya3VwID0gdGhpcy5jcmVhdGVNYXJrdXAuYmluZCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtanNvbi93cC92Mi9wb3N0cz9fZW1iZWRcIilcbiAgICAgIC50aGVuKHBvc3RzID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcG9zdHM6IHBvc3RzLmRhdGEuc2xpY2UoMCwgNClcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU1hcmt1cChodG1sKSB7XG4gICAgcmV0dXJuIHsgX19odG1sOiBodG1sIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwicmVjZW50LW5ld3NcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlci1uYXYtdGl0bGVcIj5SRUNFTlQgTkVXUzwvcD5cbiAgICAgIHt0aGlzLnN0YXRlLnBvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICA8TGluayBocmVmPXtwb3N0LnNsdWd9IGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm5ld3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImltZy1jb250YWluZXJcIiByb2xlPVwiaW1nXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXVsnMCddLnNvdXJjZV91cmx9IGFsdD1cImZlYXR1cmVkIHBvc3RcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXRsZS1jb250YWluZXJcIiByb2xlPVwibGlua1wiPlxuICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGUucmVuZGVyZWQucmVwbGFjZShgJiM4MjE3O2AsIGAnYCkucmVwbGFjZShgJiMwMzg7YCwgJyYnKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNlZS1hbGxcIj5TRUUgQUxMPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI3JlY2VudC1uZXdzIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgI25ld3MtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgICNpbWctY29udGFpbmVyIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDc1cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA3NXB4O1xuICAgICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgICN0aXRsZS1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH0gXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZWUtYWxsIHtcbiAgICAgICAgICBjb2xvcjogIzlhODQ3MDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNlbnROZXdzOyJdfQ== */\n/*@ sourceURL=/Users/freckdev/Freck/freck-next/components/Footer/RecentNews.jsx */"));
    }
  }]);

  return RecentNews;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RecentNews);

/***/ })

})
//# sourceMappingURL=index.js.506a12c9ebec2d01e868.hot-update.js.map