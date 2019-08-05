webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/HomeHeader.jsx":
/*!******************************************!*\
  !*** ./components/Header/HomeHeader.jsx ***!
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Favicon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Favicon */ "./components/Favicon.jsx");
/* harmony import */ var _Header_MobileHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Header/MobileHeader */ "./components/Header/MobileHeader.jsx");
/* harmony import */ var _Header_Submenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Header/Submenu */ "./components/Header/Submenu.jsx");














var HomeHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HomeHeader, _Component);

  function HomeHeader(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeHeader);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomeHeader).call(this, props));
    _this.state = {
      transform: false
    };
    _this.toggleClass = _this.toggleClass.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeHeader, [{
    key: "toggleClass",
    value: function toggleClass() {
      this.setState({
        transform: !this.state.transform
      });
    }
  }, {
    key: "render",
    value: function render() {
      var fixedHamburger = {
        position: this.state.transform ? 'fixed' : null,
        left: this.state.transform ? '94%' : null
      };
      var bar1 = {
        transform: this.state.transform ? 'rotate(-45deg) translate(-9px, 6px)' : null
      };
      var bar2 = {
        opacity: this.state.transform ? '0' : null
      };
      var bar3 = {
        transform: this.state.transform ? 'rotate(45deg) translate(-8px, -8px)' : null
      };
      var toggle = {
        display: this.state.transform ? 'block' : 'none'
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-15999524"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        className: "jsx-15999524"
      }, "Freck | The Original Faux Freckles"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "description",
        content: "change me: description for indexing bots",
        className: "jsx-15999524"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Favicon__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Header_MobileHeader__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "home-header",
        className: "jsx-15999524"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-15999524"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png",
        alt: "Freck logo",
        className: "jsx-15999524" + " " + "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-15999524"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-15999524" + " " + "nav"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-15999524"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "shop-freck"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-15999524"
      }, "Shop Freck")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "blog"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-15999524"
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "about"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-15999524"
      }, "About")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "contact"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-15999524"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "my-account"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-15999524"
      }, "Log In")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "cart"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-15999524"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Bag.png",
        alt: "cart",
        className: "jsx-15999524" + " " + "cart"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: fixedHamburger,
        onClick: this.toggleClass,
        className: "jsx-15999524" + " " + "hamburger"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: bar1,
        className: "jsx-15999524" + " " + "bar1"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: bar2,
        className: "jsx-15999524" + " " + "bar2"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: bar3,
        className: "jsx-15999524" + " " + "bar3"
      })), this.state.transform ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Header_Submenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: toggle
      }) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2652282021"
      }, "*{box-sizing:border-box;margin:0;padding:0;}html,body{overflow-x:hidden;font-family:Helvetica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9IZWFkZXIvSG9tZUhlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0YyQixBQUdtQyxBQUtKLGtCQUNJLElBTGIsU0FDQyxTQUtaLENBSkEiLCJmaWxlIjoiL1VzZXJzL21pbGNhaGNlbnRlbm8vZnJlY2svZnJlY2stbmV4dC9jb21wb25lbnRzL0hlYWRlci9Ib21lSGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBGYXZpY29uIGZyb20gJy4uL0Zhdmljb24nO1xuaW1wb3J0IE1vYmlsZUhlYWRlciBmcm9tICcuLi9IZWFkZXIvTW9iaWxlSGVhZGVyJztcbmltcG9ydCBTdWJtZW51IGZyb20gJy4uL0hlYWRlci9TdWJtZW51JztcbmNsYXNzIEhvbWVIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJhbnNmb3JtOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy50b2dnbGVDbGFzcyA9IHRoaXMudG9nZ2xlQ2xhc3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZUNsYXNzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RyYW5zZm9ybTogIXRoaXMuc3RhdGUudHJhbnNmb3JtfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZml4ZWRIYW1idXJnZXIgPSB7XG4gICAgICBwb3NpdGlvbjogdGhpcy5zdGF0ZS50cmFuc2Zvcm0gPyAnZml4ZWQnIDogbnVsbCxcbiAgICAgIGxlZnQ6IHRoaXMuc3RhdGUudHJhbnNmb3JtID8gJzk0JScgOiBudWxsLFxuICAgIH1cbiAgICBjb25zdCBiYXIxID0ge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdyb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KScgOiBudWxsXG4gICAgfVxuICAgIGNvbnN0IGJhcjIgPSB7XG4gICAgICBvcGFjaXR5OiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICcwJyA6IG51bGxcbiAgICB9XG4gICAgY29uc3QgYmFyMyA9IHtcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5zdGF0ZS50cmFuc2Zvcm0gPyAncm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCknIDogbnVsbFxuICAgIH1cbiAgICBjb25zdCB0b2dnbGUgPSB7XG4gICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdibG9jaycgOiAnbm9uZSdcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5GcmVjayB8IFRoZSBPcmlnaW5hbCBGYXV4IEZyZWNrbGVzPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiY2hhbmdlIG1lOiBkZXNjcmlwdGlvbiBmb3IgaW5kZXhpbmcgYm90c1wiIC8+XG4gICAgICAgICAgPEZhdmljb24gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TW9iaWxlSGVhZGVyIC8+XG4gICAgICAgIDxkaXYgaWQ9XCJob21lLWhlYWRlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDUvRnJlY2stbG9nby5wbmdcIiBhbHQ9XCJGcmVjayBsb2dvXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJzaG9wLWZyZWNrXCI+XG4gICAgICAgICAgICAgICAgPGE+U2hvcCBGcmVjazwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiYmxvZ1wiPlxuICAgICAgICAgICAgICAgIDxhPkJsb2c8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICA8YT5Db250YWN0PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJteS1hY2NvdW50XCI+XG4gICAgICAgICAgICAgICAgPGE+TG9nIEluPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJjYXJ0XCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcnRcIiBzcmM9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9mcmVjay1tb2JpbGVfQmFnLnBuZ1wiIGFsdD1cImNhcnRcIi8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiIHN0eWxlID17Zml4ZWRIYW1idXJnZXJ9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2xhc3N9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIxXCIgc3R5bGU9e2JhcjF9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIyXCIgc3R5bGU9e2JhcjJ9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIzXCIgc3R5bGU9e2JhcjN9PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnRyYW5zZm9ybSA/IDxTdWJtZW51IHN0eWxlPXt0b2dnbGV9IC8+IDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7IFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjaG9tZS1oZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogI0E3M0UyNDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgY29sb3I6ICNiODY3NTY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMi41cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0LjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAycHgpIHtcbiAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIuNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAobWluLXdpZHRoOiAxMDAzcHgpIHtcbiAgICAgICAgICAgIC5oYW1idXJnZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTczZTI0O1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgfVxuICAgICAgICAgICNob21lLWhlYWRlciA+IC5uYXYgPiBhIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcnQge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyAuc3VibWVudSB7XG4gICAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGY2O1xuICAgICAgICAgIC8vICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIC8vICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAvLyAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgLy8gICB0b3A6IDBweDtcbiAgICAgICAgICAvLyAgIGxlZnQ6IDUyLjUlO1xuICAgICAgICAgIC8vICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy8gLnN1Ym1lbnUtaWNvbnMge1xuICAgICAgICAgIC8vICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAvLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyAuc3VibWVudS1pdGVtIHtcbiAgICAgICAgICAvLyAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjFweCkge1xuICAgICAgICAgICAgI2hvbWUtaGVhZGVyLCAuaGFtYnVyZ2VyLCAubG9nbyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwM3B4KSB7XG4gICAgICAgICAgICAuaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Header/HomeHeader.jsx */"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2954807656"
      }, "#home-header.jsx-15999524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:70px;width:100%;}a.jsx-15999524{-webkit-text-decoration:none;text-decoration:none;color:#A73E24;font-style:italic;text-transform:uppercase;padding:0 10px;}a.jsx-15999524:hover{opacity:0.6;color:#b86756;}a.jsx-15999524{font-family:'Helvetica';padding:10px;}.logo.jsx-15999524{margin-left:-32.5px;margin-top:4.5px;height:100px;}.nav.jsx-15999524{padding-right:40px;font-size:18px;}@media only screen and (max-width:1002px){.nav.jsx-15999524{display:none;}}.hamburger.jsx-15999524{cursor:pointer;padding-right:2.5%;}@media only screen (min-width:1003px){.hamburger.jsx-15999524{display:none;}}.bar1.jsx-15999524,.bar2.jsx-15999524,.bar3.jsx-15999524{width:35px;height:5px;background-color:#a73e24;margin:6px 0;-webkit-transition:0.4s;transition:0.4s;}#home-header.jsx-15999524>.nav.jsx-15999524>a.jsx-15999524{padding-left:25px;}.cart.jsx-15999524{width:20px;margin-bottom:-2px;}@media only screen and (max-width:421px){#home-header.jsx-15999524,.hamburger.jsx-15999524,.logo.jsx-15999524{display:none;}}@media only screen and (min-width:1003px){.hamburger.jsx-15999524{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9IZWFkZXIvSG9tZUhlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0dvQixBQUcwQixBQU9RLEFBT1QsQUFJWSxBQUlKLEFBS0QsQUFLSixBQUlBLEFBS0EsQUFJSixBQU9PLEFBR1AsQUFxQkksQUFLQSxXQW5DSixBQVVRLENBekNMLENBa0JkLEFBU0EsQUFtQ0EsQUFLQSxFQTdDbUIsR0FnQnJCLENBekJpQixDQUxFLEVBd0JRLEVBNUJaLEVBSGYsSUF5Q0EsSUE1QkEsQUFTQSxHQWxCQSxBQUllLFVBd0JBLEdBeENDLEFBaUJoQixVQXdCa0IsSUF4Q0UsVUFSWSxRQVNMLGtCQXdDM0IsT0F2Q2lCLGVBQ2pCLG1FQVZxQiw2RkFDUCxZQUNELFdBQ2IiLCJmaWxlIjoiL1VzZXJzL21pbGNhaGNlbnRlbm8vZnJlY2svZnJlY2stbmV4dC9jb21wb25lbnRzL0hlYWRlci9Ib21lSGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBGYXZpY29uIGZyb20gJy4uL0Zhdmljb24nO1xuaW1wb3J0IE1vYmlsZUhlYWRlciBmcm9tICcuLi9IZWFkZXIvTW9iaWxlSGVhZGVyJztcbmltcG9ydCBTdWJtZW51IGZyb20gJy4uL0hlYWRlci9TdWJtZW51JztcbmNsYXNzIEhvbWVIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJhbnNmb3JtOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy50b2dnbGVDbGFzcyA9IHRoaXMudG9nZ2xlQ2xhc3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZUNsYXNzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RyYW5zZm9ybTogIXRoaXMuc3RhdGUudHJhbnNmb3JtfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZml4ZWRIYW1idXJnZXIgPSB7XG4gICAgICBwb3NpdGlvbjogdGhpcy5zdGF0ZS50cmFuc2Zvcm0gPyAnZml4ZWQnIDogbnVsbCxcbiAgICAgIGxlZnQ6IHRoaXMuc3RhdGUudHJhbnNmb3JtID8gJzk0JScgOiBudWxsLFxuICAgIH1cbiAgICBjb25zdCBiYXIxID0ge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdyb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KScgOiBudWxsXG4gICAgfVxuICAgIGNvbnN0IGJhcjIgPSB7XG4gICAgICBvcGFjaXR5OiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICcwJyA6IG51bGxcbiAgICB9XG4gICAgY29uc3QgYmFyMyA9IHtcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5zdGF0ZS50cmFuc2Zvcm0gPyAncm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCknIDogbnVsbFxuICAgIH1cbiAgICBjb25zdCB0b2dnbGUgPSB7XG4gICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdibG9jaycgOiAnbm9uZSdcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5GcmVjayB8IFRoZSBPcmlnaW5hbCBGYXV4IEZyZWNrbGVzPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiY2hhbmdlIG1lOiBkZXNjcmlwdGlvbiBmb3IgaW5kZXhpbmcgYm90c1wiIC8+XG4gICAgICAgICAgPEZhdmljb24gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TW9iaWxlSGVhZGVyIC8+XG4gICAgICAgIDxkaXYgaWQ9XCJob21lLWhlYWRlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDUvRnJlY2stbG9nby5wbmdcIiBhbHQ9XCJGcmVjayBsb2dvXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJzaG9wLWZyZWNrXCI+XG4gICAgICAgICAgICAgICAgPGE+U2hvcCBGcmVjazwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiYmxvZ1wiPlxuICAgICAgICAgICAgICAgIDxhPkJsb2c8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICA8YT5Db250YWN0PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJteS1hY2NvdW50XCI+XG4gICAgICAgICAgICAgICAgPGE+TG9nIEluPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJjYXJ0XCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcnRcIiBzcmM9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9mcmVjay1tb2JpbGVfQmFnLnBuZ1wiIGFsdD1cImNhcnRcIi8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiIHN0eWxlID17Zml4ZWRIYW1idXJnZXJ9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2xhc3N9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIxXCIgc3R5bGU9e2JhcjF9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIyXCIgc3R5bGU9e2JhcjJ9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIzXCIgc3R5bGU9e2JhcjN9PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnRyYW5zZm9ybSA/IDxTdWJtZW51IHN0eWxlPXt0b2dnbGV9IC8+IDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7IFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjaG9tZS1oZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogI0E3M0UyNDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgY29sb3I6ICNiODY3NTY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMi41cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0LjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAycHgpIHtcbiAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIuNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAobWluLXdpZHRoOiAxMDAzcHgpIHtcbiAgICAgICAgICAgIC5oYW1idXJnZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTczZTI0O1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgfVxuICAgICAgICAgICNob21lLWhlYWRlciA+IC5uYXYgPiBhIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcnQge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyAuc3VibWVudSB7XG4gICAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGY2O1xuICAgICAgICAgIC8vICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIC8vICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAvLyAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgLy8gICB0b3A6IDBweDtcbiAgICAgICAgICAvLyAgIGxlZnQ6IDUyLjUlO1xuICAgICAgICAgIC8vICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy8gLnN1Ym1lbnUtaWNvbnMge1xuICAgICAgICAgIC8vICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAvLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyAuc3VibWVudS1pdGVtIHtcbiAgICAgICAgICAvLyAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjFweCkge1xuICAgICAgICAgICAgI2hvbWUtaGVhZGVyLCAuaGFtYnVyZ2VyLCAubG9nbyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwM3B4KSB7XG4gICAgICAgICAgICAuaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Header/HomeHeader.jsx */"));
    }
  }]);

  return HomeHeader;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (HomeHeader);

/***/ }),

/***/ "./components/Home/HomeHeader.jsx":
false,

/***/ "./components/Home/HomeHero.jsx":
/*!**************************************!*\
  !*** ./components/Home/HomeHero.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeHero; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_HomeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/HomeHeader */ "./components/Header/HomeHeader.jsx");



function HomeHero() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3371705350"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header_HomeHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3371705350"
  }, "div.jsx-3371705350{background:url('https://freckbeauty.com/wp-content/uploads/2018/11/hero-home-2.jpg');background-repeat:no-repeat;background-position:center top;background-attachment:scroll;background-size:cover;min-height:620px;width:100%;}@media screen and (max-width:420px){div.jsx-3371705350{background:url('https://freckbeauty.com/wp-content/uploads/2019/07/home-models-p-500.jpeg');background-repeat:no-repeat;background-position:right;background-attachment:scroll;background-size:cover;min-height:500px;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Ib21lL0hvbWVIZXJvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNZ0IsQUFHZ0csQUFVUyxxRkFUbEUsT0FVRSxxQkFUQyxPQVVILHdCQVRDLEVBVUUsMkJBVFQsRUFVRSxvQkFUUCxFQVVFLGVBVFIsRUFVRSxTQVRmLEVBVUUiLCJmaWxlIjoiL1VzZXJzL21pbGNhaGNlbnRlbm8vZnJlY2svZnJlY2stbmV4dC9jb21wb25lbnRzL0hvbWUvSG9tZUhlcm8uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvbWVIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hvbWVIZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lSGVybygpIHtcbiAgcmV0dXJuIChcbiAgPGRpdj5cbiAgICA8SG9tZUhlYWRlciAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL2hlcm8taG9tZS0yLmpwZycpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDYyMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDcvaG9tZS1tb2RlbHMtcC01MDAuanBlZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICApXG59Il19 */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Home/HomeHero.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.3e74677fc4bb3f105a72.hot-update.js.map