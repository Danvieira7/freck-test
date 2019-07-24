webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/PostList.jsx":
/*!*********************************!*\
  !*** ./components/PostList.jsx ***!
  \*********************************/
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










var PostList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PostList, _Component);

  function PostList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostList).call(this, props));
    _this.state = {
      posts: []
    };
    _this.createMarkup = _this.createMarkup.bind();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://freckbeauty.com/wp-json/wp/v2/posts?_embed").then(function (posts) {
        _this2.setState({
          posts: posts.data
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
        className: "jsx-2213209452"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "posts-container",
        className: "jsx-2213209452"
      }, this.state.posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: post.id,
          className: "jsx-2213209452" + " " + "card"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: post.slug,
          key: post.id
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "jsx-2213209452"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "single-post-container",
          className: "jsx-2213209452"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "img-container",
          role: "img",
          className: "jsx-2213209452"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: post._embedded['wp:featuredmedia']['0'].source_url,
          alt: "featured post",
          className: "jsx-2213209452"
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "title-container",
          role: "link",
          className: "jsx-2213209452"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-2213209452"
        }, post.title.rendered.replace("&#8217;", "'").replace("&#038;", '&')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-2213209452" + " " + "category"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "jsx-2213209452"
        }, post._embedded['wp:term']['0']['0'].name)))))));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2213209452"
      }, "#container.jsx-2213209452{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#posts-container.jsx-2213209452{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:50%;}#single-post-container.jsx-2213209452{min-height:370px;}#img-container.jsx-2213209452{max-width:300px;max-height:300px;margin:20px;overflow:hidden;object-fit:scale-down;}img.jsx-2213209452{width:150%;}#title-container.jsx-2213209452{max-width:300px;text-align:center;}a.jsx-2213209452{color:#fff;-webkit-text-decoration:none;text-decoration:none;}i.jsx-2213209452{text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Qb3N0TGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RvQixBQUcwQixBQUlBLEFBS0ksQUFHRCxBQU9MLEFBR0ssQUFJTCxBQUljLFdBVjNCLEFBT3VCLEtBZEosQUFVQyxDQWJwQixRQXFCQSxRQWpCYyxDQVVkLFdBVGtCLGdCQUNNLEFBWXhCLGFBM0J5QixBQUlSLFNBWWpCLGdEQVhZLFVBQ1osZ0NBTEEiLCJmaWxlIjoiL1VzZXJzL21pbGNhaGNlbnRlbm8vZnJlY2svZnJlY2stbmV4dC9jb21wb25lbnRzL1Bvc3RMaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgUG9zdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9zdHM6IFtdXG4gICAgfTtcbiAgICB0aGlzLmNyZWF0ZU1hcmt1cCA9IHRoaXMuY3JlYXRlTWFya3VwLmJpbmQoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF4aW9zLmdldChcImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWpzb24vd3AvdjIvcG9zdHM/X2VtYmVkXCIpXG4gICAgICAudGhlbihwb3N0cyA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHBvc3RzOiBwb3N0cy5kYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBjcmVhdGVNYXJrdXAoaHRtbCkge1xuICAgIHJldHVybiB7IF9faHRtbDogaHRtbCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJwb3N0cy1jb250YWluZXJcIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwb3N0LnNsdWd9IGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2luZ2xlLXBvc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWctY29udGFpbmVyXCIgcm9sZT1cImltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWycwJ10uc291cmNlX3VybH0gYWx0PVwiZmVhdHVyZWQgcG9zdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGl0bGUtY29udGFpbmVyXCIgcm9sZT1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57cG9zdC50aXRsZS5yZW5kZXJlZC5yZXBsYWNlKGAmIzgyMTc7YCwgYCdgKS5yZXBsYWNlKGAmIzAzODtgLCAnJicpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPjxpPntwb3N0Ll9lbWJlZGRlZFsnd3A6dGVybSddWycwJ11bJzAnXS5uYW1lfTwvaT48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3Bvc3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NpbmdsZS1wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2ltZy1jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3RpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0OyJdfQ== */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/PostList.jsx */"));
    }
  }]);

  return PostList;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ })

})
//# sourceMappingURL=blog.js.9433f7fd6e6e8464b58c.hot-update.js.map