webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/OozeSection.jsx":
/*!*****************************************!*\
  !*** ./components/Home/OozeSection.jsx ***!
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










var Ooze =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Ooze, _Component);

  function Ooze(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Ooze);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Ooze).call(this, props));
    _this.state = {
      posts: []
    };
    _this.createMarkup = _this.createMarkup.bind();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Ooze, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://freckbeauty.com/wp-json/wp/v2/posts?_embed").then(function (posts) {
        _this2.setState({
          posts: posts.data.slice(0, 3)
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
        id: "ooze-container",
        className: "jsx-389980434"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "button-container",
        className: "jsx-389980434"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-389980434"
      }, "Ooze"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "blog"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-389980434"
      }, "Read the blog"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "post-container",
        className: "jsx-389980434"
      }, this.state.posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: post.id,
          className: "jsx-389980434" + " " + "card"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: post.slug,
          key: post.id
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "jsx-389980434"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "news-container",
          className: "jsx-389980434"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "img-container",
          role: "img",
          className: "jsx-389980434"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: post._embedded['wp:featuredmedia']['0'].source_url,
          alt: "featured post",
          className: "jsx-389980434"
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "title-container",
          role: "link",
          className: "jsx-389980434"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-389980434"
        }, post.title.rendered.replace("&#8217;", "'").replace("&#038;", '&')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-389980434" + " " + "category"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "jsx-389980434"
        }, post._embedded['wp:term']['0']['0'].name)))))));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "389980434"
      }, "#ooze-container.jsx-389980434{color:#e4d8c7;background-color:#af492f;height:425px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}#button-container.jsx-389980434{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:30%;}button.jsx-389980434{10%;}h2.jsx-389980434{font-size:100px;text-transform:uppercase;}#post-container.jsx-389980434{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:70%;}a.jsx-389980434{color:#fff;-webkit-text-decoration:none;text-decoration:none;}#img-container.jsx-389980434{max-width:300px;max-height:300px;margin:10px;overflow:hidden;object-fit:scale-down;}img.jsx-389980434{width:150%;}#title-container.jsx-389980434{width:300px;margin-left:10px;text-align:center;}i.jsx-389980434{text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Ib21lL09vemVTZWN0aW9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RG9CLEFBRzJCLEFBT0QsQUFPVixBQUdhLEFBSUgsQUFLRixBQUlLLEFBT0wsQUFHQyxBQUthLElBOUIzQixPQVl1QixBQVd2QixDQUdtQixFQXhDUSxFQWlCQSxBQWFSLFNBZW5CLElBSm9CLElBVk4sTUE5QkMsRUFpQmYsSUFja0IsRUFVbEIsS0F4Q2UsU0F5QmYsQUFNd0IsYUExQlAsQUFjVSxTQWEzQiwyQ0EvQmdDLEtBS1gsd0NBY1QsVUFDWiwyQ0FkeUIsaUJBTHpCLGtGQU1ZLFVBQ1oiLCJmaWxlIjoiL1VzZXJzL21pbGNhaGNlbnRlbm8vZnJlY2svZnJlY2stbmV4dC9jb21wb25lbnRzL0hvbWUvT296ZVNlY3Rpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgT296ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb3N0czogW11cbiAgICB9O1xuICAgIHRoaXMuY3JlYXRlTWFya3VwID0gdGhpcy5jcmVhdGVNYXJrdXAuYmluZCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtanNvbi93cC92Mi9wb3N0cz9fZW1iZWRcIilcbiAgICAgIC50aGVuKHBvc3RzID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcG9zdHM6IHBvc3RzLmRhdGEuc2xpY2UoMCwgMylcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU1hcmt1cChodG1sKSB7XG4gICAgcmV0dXJuIHsgX19odG1sOiBodG1sIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJvb3plLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIE9vemVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJibG9nXCI+XG4gICAgICAgICAgICA8YnV0dG9uPlJlYWQgdGhlIGJsb2c8L2J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicG9zdC1jb250YWluZXJcIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwb3N0LnNsdWd9IGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmV3cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImltZy1jb250YWluZXJcIiByb2xlPVwiaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11bJzAnXS5zb3VyY2VfdXJsfSBhbHQ9XCJmZWF0dXJlZCBwb3N0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXRsZS1jb250YWluZXJcIiByb2xlPVwibGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LnRpdGxlLnJlbmRlcmVkLnJlcGxhY2UoYCYjODIxNztgLCBgJ2ApLnJlcGxhY2UoYCYjMDM4O2AsICcmJyl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+PGk+e3Bvc3QuX2VtYmVkZGVkWyd3cDp0ZXJtJ11bJzAnXVsnMCddLm5hbWV9PC9pPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNvb3plLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBjb2xvcjogI2U0ZDhjNztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZjQ5MmY7XG4gICAgICAgICAgICBoZWlnaHQ6IDQyNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2J1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcG9zdC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPb3plOyJdfQ== */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Home/OozeSection.jsx */"));
    }
  }]);

  return Ooze;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Ooze);

/***/ })

})
//# sourceMappingURL=index.js.f7b5a77928f77e128e52.hot-update.js.map