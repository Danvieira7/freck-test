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
      console.log("Transform is ".concat(this.state.transform));
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3291796884"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        className: "jsx-3291796884"
      }, "Freck | The Original Faux Freckles"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "description",
        content: "change me: description for indexing bots",
        className: "jsx-3291796884"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Favicon__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3291796884"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png",
        alt: "Freck logo",
        className: "jsx-3291796884" + " " + "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3291796884" + " " + "nav"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3291796884"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "shop-freck"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3291796884"
      }, "Shop Freck")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "blog"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3291796884"
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "about"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3291796884"
      }, "About")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "contact"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3291796884"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "my-account"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3291796884"
      }, "Log In")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "cart"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3291796884"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Bag.png",
        alt: "cart",
        className: "jsx-3291796884" + " " + "cart"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.toggleClass,
        className: "jsx-3291796884" + " " + "hamburger"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: bar1,
        className: "jsx-3291796884" + " " + "bar1"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: bar2,
        className: "jsx-3291796884" + " " + "bar2"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: bar3,
        className: "jsx-3291796884" + " " + "bar3"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Submenu, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "300576690"
      }, "*{box-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Ib21lL0hvbWVIZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFMkIsQUFHbUMsc0JBQ2IsU0FDQyxVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Ib21lL0hvbWVIZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZhdmljb24gZnJvbSAnLi4vRmF2aWNvbic7XG5cbmNsYXNzIEhvbWVIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJhbnNmb3JtOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy50b2dnbGVDbGFzcyA9IHRoaXMudG9nZ2xlQ2xhc3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZUNsYXNzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RyYW5zZm9ybTogIXRoaXMuc3RhdGUudHJhbnNmb3JtfSk7XG4gICAgY29uc29sZS5sb2coYFRyYW5zZm9ybSBpcyAke3RoaXMuc3RhdGUudHJhbnNmb3JtfWApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGJhcjEgPSB7XG4gICAgICB0cmFuc2Zvcm06IHRoaXMuc3RhdGUudHJhbnNmb3JtID8gJ3JvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpJyA6ICcnXG4gICAgfVxuICAgIGNvbnN0IGJhcjIgPSB7XG4gICAgICBvcGFjaXR5OiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICcwJyA6ICcnXG4gICAgfVxuICAgIGNvbnN0IGJhcjMgPSB7XG4gICAgICB0cmFuc2Zvcm06IHRoaXMuc3RhdGUudHJhbnNmb3JtID8gJ3JvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpJyA6ICcnXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RnJlY2sgfCBUaGUgT3JpZ2luYWwgRmF1eCBGcmVja2xlczwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImNoYW5nZSBtZTogZGVzY3JpcHRpb24gZm9yIGluZGV4aW5nIGJvdHNcIiAvPlxuICAgICAgICAgIDxGYXZpY29uIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA1L0ZyZWNrLWxvZ28ucG5nXCIgYWx0PVwiRnJlY2sgbG9nb1wiLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNob3AtZnJlY2tcIj5cbiAgICAgICAgICAgIDxhPlNob3AgRnJlY2s8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJibG9nXCI+XG4gICAgICAgICAgICA8YT5CbG9nPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIm15LWFjY291bnRcIj5cbiAgICAgICAgICAgIDxhPkxvZyBJbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImNhcnRcIj5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcnRcIiBzcmM9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9mcmVjay1tb2JpbGVfQmFnLnBuZ1wiIGFsdD1cImNhcnRcIi8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNsYXNzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjFcIiBzdHlsZT17YmFyMX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIyXCIgc3R5bGU9e2JhcjJ9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyM1wiIHN0eWxlPXtiYXIzfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTdWJtZW51Lz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHsgXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICNBNzNFMjQ7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIGNvbG9yOiAjYjg2NzU2O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzIuNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNC41cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDJweCkge1xuICAgICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oYW1idXJnZXIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAzcHgpIHtcbiAgICAgICAgICAgIC5oYW1idXJnZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTczZTI0O1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiA+IC5uYXYgPiBhIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcnQge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Home/HomeHeader.jsx */"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2433610223"
      }, "div.jsx-3291796884{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:70px;}a.jsx-3291796884{-webkit-text-decoration:none;text-decoration:none;color:#A73E24;font-style:italic;text-transform:uppercase;padding:0 10px;}a.jsx-3291796884:hover{opacity:0.6;color:#b86756;}a.jsx-3291796884{font-family:'Helvetica';padding:10px;}.logo.jsx-3291796884{margin-left:-32.5px;margin-top:4.5px;height:100px;}.nav.jsx-3291796884{padding-right:40px;font-size:18px;}@media screen and (max-width:1002px){.nav.jsx-3291796884{display:none;}}.hamburger.jsx-3291796884{display:inline-block;cursor:pointer;padding-top:14px;padding-right:20px;}@media screen and (min-width:1003px){.hamburger.jsx-3291796884{display:none;}}.bar1.jsx-3291796884,.bar2.jsx-3291796884,.bar3.jsx-3291796884{width:35px;height:5px;background-color:#a73e24;margin:6px 0;-webkit-transition:0.4s;transition:0.4s;}div.jsx-3291796884>.nav.jsx-3291796884>a.jsx-3291796884{padding-left:25px;}.cart.jsx-3291796884{width:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Ib21lL0hvbWVIZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGb0IsQUFHMEIsQUFNUSxBQU9ULEFBSVksQUFJSixBQUtELEFBS0osQUFJTSxBQU9OLEFBSUosQUFPTyxBQUdQLFdBVEEsQUFVYixDQTNDZ0IsQ0FrQmQsQUFXQSxLQVdGLENBM0JpQixDQUxFLENBY0YsQ0FZVSxFQTlCWixFQUhmLFFBYUEsRUFTbUIsQ0FsQm5CLEFBSWUsVUEwQkEsR0ExQ0MsQUFpQmhCLEdBY3FCLE9BWUgsSUExQ0UsUUErQnBCLEVBdENnQyxRQVFMLGtCQTBDM0IsT0F6Q2lCLGVBQ2pCLG1FQVRxQiw2RkFDUCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Ib21lL0hvbWVIZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZhdmljb24gZnJvbSAnLi4vRmF2aWNvbic7XG5cbmNsYXNzIEhvbWVIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJhbnNmb3JtOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy50b2dnbGVDbGFzcyA9IHRoaXMudG9nZ2xlQ2xhc3MuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZUNsYXNzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RyYW5zZm9ybTogIXRoaXMuc3RhdGUudHJhbnNmb3JtfSk7XG4gICAgY29uc29sZS5sb2coYFRyYW5zZm9ybSBpcyAke3RoaXMuc3RhdGUudHJhbnNmb3JtfWApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGJhcjEgPSB7XG4gICAgICB0cmFuc2Zvcm06IHRoaXMuc3RhdGUudHJhbnNmb3JtID8gJ3JvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpJyA6ICcnXG4gICAgfVxuICAgIGNvbnN0IGJhcjIgPSB7XG4gICAgICBvcGFjaXR5OiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICcwJyA6ICcnXG4gICAgfVxuICAgIGNvbnN0IGJhcjMgPSB7XG4gICAgICB0cmFuc2Zvcm06IHRoaXMuc3RhdGUudHJhbnNmb3JtID8gJ3JvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpJyA6ICcnXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RnJlY2sgfCBUaGUgT3JpZ2luYWwgRmF1eCBGcmVja2xlczwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImNoYW5nZSBtZTogZGVzY3JpcHRpb24gZm9yIGluZGV4aW5nIGJvdHNcIiAvPlxuICAgICAgICAgIDxGYXZpY29uIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA1L0ZyZWNrLWxvZ28ucG5nXCIgYWx0PVwiRnJlY2sgbG9nb1wiLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNob3AtZnJlY2tcIj5cbiAgICAgICAgICAgIDxhPlNob3AgRnJlY2s8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJibG9nXCI+XG4gICAgICAgICAgICA8YT5CbG9nPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIm15LWFjY291bnRcIj5cbiAgICAgICAgICAgIDxhPkxvZyBJbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImNhcnRcIj5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcnRcIiBzcmM9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9mcmVjay1tb2JpbGVfQmFnLnBuZ1wiIGFsdD1cImNhcnRcIi8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNsYXNzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjFcIiBzdHlsZT17YmFyMX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIyXCIgc3R5bGU9e2JhcjJ9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyM1wiIHN0eWxlPXtiYXIzfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTdWJtZW51Lz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHsgXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICNBNzNFMjQ7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIGNvbG9yOiAjYjg2NzU2O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzIuNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNC41cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDJweCkge1xuICAgICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oYW1idXJnZXIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAzcHgpIHtcbiAgICAgICAgICAgIC5oYW1idXJnZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTczZTI0O1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiA+IC5uYXYgPiBhIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcnQge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Home/HomeHeader.jsx */"));
    }
  }]);

  return HomeHeader;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (HomeHeader);

/***/ })

})
//# sourceMappingURL=index.js.3148c65b85ca8ff515f7.hot-update.js.map