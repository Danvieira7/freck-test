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
      var apostrophe = this.props.text.split(':').map(function (t) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "textItem"
        }, t);
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "ooze-container",
        className: "jsx-820694277"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-820694277"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-820694277"
      }, "Ooze"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "blog"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-820694277"
      }, "Read the blog"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "post-container",
        className: "jsx-820694277"
      }, this.state.posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: post.id,
          className: "jsx-820694277" + " " + "card"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: post.slug,
          key: post.id
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "jsx-820694277"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "news-container",
          className: "jsx-820694277"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "img-container",
          role: "img",
          className: "jsx-820694277"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: post._embedded['wp:featuredmedia']['0'].source_url,
          alt: "featured post",
          className: "jsx-820694277"
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "title-container",
          role: "link",
          className: "jsx-820694277"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-820694277"
        }, post.title.rendered), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-820694277" + " " + "category"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "jsx-820694277"
        }, post._embedded['wp:term']['0']['0'].name)))))));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "820694277"
      }, "#ooze-container.jsx-820694277{color:#e4d8c7;background-color:#af492f;height:425px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}#post-container.jsx-820694277{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}a.jsx-820694277{color:#fff;-webkit-text-decoration:none;text-decoration:none;}#img-container.jsx-820694277{max-width:300px;max-height:300px;margin:10px;overflow:hidden;object-fit:scale-down;}img.jsx-820694277{width:150%;}#title-container.jsx-820694277{width:300px;margin-left:10px;text-align:center;}i.jsx-820694277{text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Ib21lL09vemVTZWN0aW9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRG9CLEFBRzJCLEFBT0QsQUFLRixBQUlLLEFBT0wsQUFHQyxBQUthLFdBbEJKLEFBV3ZCLENBR21CLEVBMUJRLEVBZ0JSLFNBZW5CLElBSm9CLElBVk4sTUFoQkMsTUFpQkcsRUFVbEIsS0ExQmUsU0FXZixBQU13QixhQVpQLFNBYWpCLDJDQWpCZ0MsS0FLTCxpR0FDM0IsYUFMQSIsImZpbGUiOiIvVXNlcnMvbWlsY2FoY2VudGVuby9mcmVjay9mcmVjay1uZXh0L2NvbXBvbmVudHMvSG9tZS9Pb3plU2VjdGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBPb3plIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvc3RzOiBbXVxuICAgIH07XG4gICAgdGhpcy5jcmVhdGVNYXJrdXAgPSB0aGlzLmNyZWF0ZU1hcmt1cC5iaW5kKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBheGlvcy5nZXQoXCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzP19lbWJlZFwiKVxuICAgICAgLnRoZW4ocG9zdHMgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwb3N0czogcG9zdHMuZGF0YS5zbGljZSgwLCAzKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTWFya3VwKGh0bWwpIHtcbiAgICByZXR1cm4geyBfX2h0bWw6IGh0bWwgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhcG9zdHJvcGhlID0gdGhpcy5wcm9wcy50ZXh0LnNwbGl0KCc6JykubWFwKHQgPT4ge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSd0ZXh0SXRlbSc+e3R9PC9kaXY+O1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwib296ZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBPb3plXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8TGluayBocmVmPVwiYmxvZ1wiPlxuICAgICAgICAgICAgPGJ1dHRvbj5SZWFkIHRoZSBibG9nPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInBvc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUucG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cG9zdC5zbHVnfSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5ld3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWctY29udGFpbmVyXCIgcm9sZT1cImltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWycwJ10uc291cmNlX3VybH0gYWx0PVwiZmVhdHVyZWQgcG9zdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGl0bGUtY29udGFpbmVyXCIgcm9sZT1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57cG9zdC50aXRsZS5yZW5kZXJlZH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj48aT57cG9zdC5fZW1iZWRkZWRbJ3dwOnRlcm0nXVsnMCddWycwJ10ubmFtZX08L2k+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI29vemUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZTRkOGM3O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FmNDkyZjtcbiAgICAgICAgICAgIGhlaWdodDogNDI1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcG9zdC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNpbWctY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDE1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgICN0aXRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9vemU7Il19 */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Home/OozeSection.jsx */"));
    }
  }]);

  return Ooze;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Ooze);

/***/ })

})
//# sourceMappingURL=index.js.b41f033d8223d6e21f24.hot-update.js.map