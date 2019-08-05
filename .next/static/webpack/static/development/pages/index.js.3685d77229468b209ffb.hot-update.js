webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/HomeHeader.jsx":
/*!****************************************!*\
  !*** ./components/Home/HomeHeader.jsx ***!
  \****************************************/
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
      var bar1 = {
        transform: this.state.transform ? 'rotate(-45deg) translate(-9px, 6px)' : ''
      };
      var bar2 = {
        opacity: this.state.transform ? '0' : ''
      };
      var bar3 = {
        transform: this.state.transform ? 'rotate(45deg) translate(-8px, -8px)' : ''
      };
      var toggle = {
        display: this.state.transform ? 'block' : 'none'
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        className: "jsx-3713942626"
      }, "Freck | The Original Faux Freckles"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "description",
        content: "change me: description for indexing bots",
        className: "jsx-3713942626"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Favicon__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Header_MobileHeader__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "home-header",
        className: "jsx-3713942626"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3713942626"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png",
        alt: "Freck logo",
        className: "jsx-3713942626" + " " + "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626" + " " + "nav"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3713942626"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "shop-freck"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3713942626"
      }, "Shop Freck")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "blog"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3713942626"
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "about"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3713942626"
      }, "About")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "contact"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3713942626"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "my-account"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3713942626"
      }, "Log In")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "cart"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3713942626"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Bag.png",
        alt: "cart",
        className: "jsx-3713942626" + " " + "cart"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.toggleClass,
        className: "jsx-3713942626" + " " + "hamburger"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: bar1,
        className: "jsx-3713942626" + " " + "bar1"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: bar2,
        className: "jsx-3713942626" + " " + "bar2"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: bar3,
        className: "jsx-3713942626" + " " + "bar3"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: toggle,
        className: "jsx-3713942626" + " " + "submenu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626" + " " + "submenu-icons"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626"
      }, "My Account Icon"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626"
      }, "Cart Icon")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626" + " " + "submenu-item"
      }, "SHOP BEAUTY", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626" + " " + "submenu-item"
      }, "BEST SELLERS", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626" + " " + "submenu-item"
      }, "ABOUT"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626" + " " + "submenu-item"
      }, "OOZE"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626" + " " + "submenu-item"
      }, "CONTACT"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626" + " " + "submenu-item"
      }, "ACCOUNT"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3713942626" + " " + "submenu-item"
      }, "Freck Logo")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2652282021"
      }, "*{box-sizing:border-box;margin:0;padding:0;}html,body{overflow-x:hidden;font-family:Helvetica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Ib21lL0hvbWVIZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHMkIsQUFHbUMsQUFLSixrQkFDSSxJQUxiLFNBQ0MsU0FLWixDQUpBIiwiZmlsZSI6Ii9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Ib21lL0hvbWVIZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZhdmljb24gZnJvbSAnLi4vRmF2aWNvbic7XG5pbXBvcnQgTW9iaWxlSGVhZGVyIGZyb20gJy4uL0hlYWRlci9Nb2JpbGVIZWFkZXInO1xuY2xhc3MgSG9tZUhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0cmFuc2Zvcm06IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzID0gdGhpcy50b2dnbGVDbGFzcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlQ2xhc3MoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dHJhbnNmb3JtOiAhdGhpcy5zdGF0ZS50cmFuc2Zvcm19KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBiYXIxID0ge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdyb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KScgOiAnJ1xuICAgIH1cbiAgICBjb25zdCBiYXIyID0ge1xuICAgICAgb3BhY2l0eTogdGhpcy5zdGF0ZS50cmFuc2Zvcm0gPyAnMCcgOiAnJ1xuICAgIH1cbiAgICBjb25zdCBiYXIzID0ge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdyb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KScgOiAnJ1xuICAgIH1cbiAgICBjb25zdCB0b2dnbGUgPSB7XG4gICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdibG9jaycgOiAnbm9uZSdcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5GcmVjayB8IFRoZSBPcmlnaW5hbCBGYXV4IEZyZWNrbGVzPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiY2hhbmdlIG1lOiBkZXNjcmlwdGlvbiBmb3IgaW5kZXhpbmcgYm90c1wiIC8+XG4gICAgICAgICAgPEZhdmljb24gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TW9iaWxlSGVhZGVyIC8+XG4gICAgICAgIDxkaXYgaWQ9XCJob21lLWhlYWRlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDUvRnJlY2stbG9nby5wbmdcIiBhbHQ9XCJGcmVjayBsb2dvXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJzaG9wLWZyZWNrXCI+XG4gICAgICAgICAgICAgIDxhPlNob3AgRnJlY2s8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiYmxvZ1wiPlxuICAgICAgICAgICAgICA8YT5CbG9nPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJteS1hY2NvdW50XCI+XG4gICAgICAgICAgICAgIDxhPkxvZyBJbjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJjYXJ0XCI+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FydFwiIHNyYz1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3L2ZyZWNrLW1vYmlsZV9CYWcucG5nXCIgYWx0PVwiY2FydFwiLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNsYXNzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjFcIiBzdHlsZT17YmFyMX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIyXCIgc3R5bGU9e2JhcjJ9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyM1wiIHN0eWxlPXtiYXIzfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWVudVwiIHN0eWxlPXt0b2dnbGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWVudS1pY29uc1wiPlxuICAgICAgICAgICAgPGRpdj5NeSBBY2NvdW50IEljb248L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+Q2FydCBJY29uPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIFNIT1AgQkVBVVRZXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgQkVTVCBTRUxMRVJTXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaXRlbVwiPkFCT1VUPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51LWl0ZW1cIj5PT1pFPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51LWl0ZW1cIj5DT05UQUNUPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51LWl0ZW1cIj5BQ0NPVU5UPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51LWl0ZW1cIj5GcmVjayBMb2dvPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICogeyBcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2hvbWUtaGVhZGVyIHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICNBNzNFMjQ7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIGNvbG9yOiAjYjg2NzU2O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzIuNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNC41cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMnB4KSB7XG4gICAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmhhbWJ1cmdlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gKG1pbi13aWR0aDogMTAwM3B4KSB7XG4gICAgICAgICAgICAuaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E3M2UyNDtcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjaG9tZS1oZWFkZXIgPiAubmF2ID4gYSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJ0IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Ym1lbnUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmNjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1Mi41JTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJtZW51LWljb25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Ym1lbnUtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIxcHgpIHtcbiAgICAgICAgICAgICNob21lLWhlYWRlciwgLmhhbWJ1cmdlciwgLmxvZ28ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDNweCkge1xuICAgICAgICAgICAgLmhhbWJ1cmdlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Home/HomeHeader.jsx */"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2486216174"
      }, "#home-header.jsx-3713942626{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:70px;width:100%;}a.jsx-3713942626{-webkit-text-decoration:none;text-decoration:none;color:#A73E24;font-style:italic;text-transform:uppercase;padding:0 10px;}a.jsx-3713942626:hover{opacity:0.6;color:#b86756;}a.jsx-3713942626{font-family:'Helvetica';padding:10px;}.logo.jsx-3713942626{margin-left:-32.5px;margin-top:4.5px;height:100px;}.nav.jsx-3713942626{padding-right:40px;font-size:18px;}@media only screen and (max-width:1002px){.nav.jsx-3713942626{display:none;}}.hamburger.jsx-3713942626{display:inline-block;cursor:pointer;padding-right:1.5%;}@media only screen (min-width:1003px){.hamburger.jsx-3713942626{display:none;}}.bar1.jsx-3713942626,.bar2.jsx-3713942626,.bar3.jsx-3713942626{width:35px;height:5px;background-color:#a73e24;margin:6px 0;-webkit-transition:0.4s;transition:0.4s;}#home-header.jsx-3713942626>.nav.jsx-3713942626>a.jsx-3713942626{padding-left:25px;}.cart.jsx-3713942626{width:20px;margin-bottom:-2px;}.submenu.jsx-3713942626{background-color:#f6f8f6;position:fixed;width:40%;height:100vh;top:0px;left:52.5%;z-index:1000;}.submenu-icons.jsx-3713942626{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.submenu-item.jsx-3713942626{padding-left:20px;}@media only screen and (max-width:421px){#home-header.jsx-3713942626,.hamburger.jsx-3713942626,.logo.jsx-3713942626{display:none;}}@media only screen and (min-width:1003px){.hamburger.jsx-3713942626{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Ib21lL0hvbWVIZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZHb0IsQUFJMkMsQUFNVCxBQU9ULEFBSVksQUFJSixBQUtELEFBS0osQUFJTSxBQU1OLEFBSUosQUFPTyxBQUdQLEFBSWMsQUFTWixBQUlLLEFBSUgsQUFLQSxXQW5DSixBQVVRLENBMUNMLENBa0JkLEFBVUEsQUFtQ0EsQUFLQSxLQTdCRixBQW9CQSxDQTlDaUIsQ0FMRSxDQWNGLENBV1UsRUE3QlosQ0EwQ0UsQ0E3Q2pCLElBMENBLElBN0JBLEVBU3FCLENBbEJyQixBQUllLEdBc0NILE9BYkcsR0F6Q0MsQUFpQmhCLEFBc0NlLEtBeEJmLEtBV2tCLEdBY1IsQ0F2RFUsT0F3RFAsR0FLa0IsUUE1REosQUF3RFosYUFDZixLQWhCQSxPQXhDaUIsUUFUSSxPQVVyQiwyRUEyREEsV0FwRWMsWUFDRCxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Ib21lL0hvbWVIZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZhdmljb24gZnJvbSAnLi4vRmF2aWNvbic7XG5pbXBvcnQgTW9iaWxlSGVhZGVyIGZyb20gJy4uL0hlYWRlci9Nb2JpbGVIZWFkZXInO1xuY2xhc3MgSG9tZUhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0cmFuc2Zvcm06IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzID0gdGhpcy50b2dnbGVDbGFzcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlQ2xhc3MoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dHJhbnNmb3JtOiAhdGhpcy5zdGF0ZS50cmFuc2Zvcm19KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBiYXIxID0ge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdyb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KScgOiAnJ1xuICAgIH1cbiAgICBjb25zdCBiYXIyID0ge1xuICAgICAgb3BhY2l0eTogdGhpcy5zdGF0ZS50cmFuc2Zvcm0gPyAnMCcgOiAnJ1xuICAgIH1cbiAgICBjb25zdCBiYXIzID0ge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdyb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KScgOiAnJ1xuICAgIH1cbiAgICBjb25zdCB0b2dnbGUgPSB7XG4gICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdibG9jaycgOiAnbm9uZSdcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5GcmVjayB8IFRoZSBPcmlnaW5hbCBGYXV4IEZyZWNrbGVzPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiY2hhbmdlIG1lOiBkZXNjcmlwdGlvbiBmb3IgaW5kZXhpbmcgYm90c1wiIC8+XG4gICAgICAgICAgPEZhdmljb24gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TW9iaWxlSGVhZGVyIC8+XG4gICAgICAgIDxkaXYgaWQ9XCJob21lLWhlYWRlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDUvRnJlY2stbG9nby5wbmdcIiBhbHQ9XCJGcmVjayBsb2dvXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJzaG9wLWZyZWNrXCI+XG4gICAgICAgICAgICAgIDxhPlNob3AgRnJlY2s8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiYmxvZ1wiPlxuICAgICAgICAgICAgICA8YT5CbG9nPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJteS1hY2NvdW50XCI+XG4gICAgICAgICAgICAgIDxhPkxvZyBJbjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJjYXJ0XCI+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FydFwiIHNyYz1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3L2ZyZWNrLW1vYmlsZV9CYWcucG5nXCIgYWx0PVwiY2FydFwiLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNsYXNzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjFcIiBzdHlsZT17YmFyMX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIyXCIgc3R5bGU9e2JhcjJ9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyM1wiIHN0eWxlPXtiYXIzfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWVudVwiIHN0eWxlPXt0b2dnbGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWVudS1pY29uc1wiPlxuICAgICAgICAgICAgPGRpdj5NeSBBY2NvdW50IEljb248L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+Q2FydCBJY29uPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIFNIT1AgQkVBVVRZXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgQkVTVCBTRUxMRVJTXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaXRlbVwiPkFCT1VUPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51LWl0ZW1cIj5PT1pFPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51LWl0ZW1cIj5DT05UQUNUPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51LWl0ZW1cIj5BQ0NPVU5UPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51LWl0ZW1cIj5GcmVjayBMb2dvPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICogeyBcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2hvbWUtaGVhZGVyIHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICNBNzNFMjQ7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIGNvbG9yOiAjYjg2NzU2O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzIuNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNC41cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMnB4KSB7XG4gICAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmhhbWJ1cmdlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gKG1pbi13aWR0aDogMTAwM3B4KSB7XG4gICAgICAgICAgICAuaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E3M2UyNDtcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjaG9tZS1oZWFkZXIgPiAubmF2ID4gYSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJ0IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Ym1lbnUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmNjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1Mi41JTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJtZW51LWljb25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Ym1lbnUtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIxcHgpIHtcbiAgICAgICAgICAgICNob21lLWhlYWRlciwgLmhhbWJ1cmdlciwgLmxvZ28ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDNweCkge1xuICAgICAgICAgICAgLmhhbWJ1cmdlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Home/HomeHeader.jsx */"));
    }
  }]);

  return HomeHeader;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (HomeHeader);

/***/ })

})
//# sourceMappingURL=index.js.3685d77229468b209ffb.hot-update.js.map