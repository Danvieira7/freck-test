webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer/Footer.jsx":
/*!**************************************!*\
  !*** ./components/Footer/Footer.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FooterOptIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FooterOptIn */ "./components/Footer/FooterOptIn.jsx");
/* harmony import */ var _FooterNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FooterNav */ "./components/Footer/FooterNav.jsx");
/* harmony import */ var _RecentNews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RecentNews */ "./components/Footer/RecentNews.jsx");







function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "container",
    className: "jsx-1051957091"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1051957091"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FooterOptIn__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1051957091"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FooterNav__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1051957091"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RecentNews__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1051957091"
  }, "#container.jsx-1051957091{display:grid;grid-template-rows:25% 50% 25%;grid-template-columns:25% 50% 25%;background-color:#1c150f;color:#fff;padding:20px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmdCLEFBR3NCLGFBQ2tCLCtCQUNHLGtDQUNULHlCQUNkLFdBQ08sa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEZvb3Rlck9wdEluIGZyb20gJy4vRm9vdGVyT3B0SW4nO1xuaW1wb3J0IEZvb3Rlck5hdiBmcm9tICcuL0Zvb3Rlck5hdic7XG5pbXBvcnQgUmVjZW50TmV3cyBmcm9tICcuL1JlY2VudE5ld3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvb3Rlck9wdEluIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxGb290ZXJOYXYgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFJlY2VudE5ld3MgLz5cbiAgICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICNjb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1JSA1MCUgMjUlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA1MCUgMjUlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxNTBmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICk7XG59OyJdfQ== */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Footer/Footer.jsx */"));
}
;

/***/ })

})
//# sourceMappingURL=index.js.84c5fb98797ee9e0c815.hot-update.js.map