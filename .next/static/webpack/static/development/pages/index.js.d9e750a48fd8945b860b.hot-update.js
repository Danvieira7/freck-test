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
    className: "jsx-2150619948"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2150619948"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FooterOptIn__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2150619948"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FooterNav__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2150619948"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RecentNews__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2150619948"
  }, "#container.jsx-2150619948{display:grid;grid-template-rows:25% 50% 25%;grid-template-columns:25% 50% 25%;background-color:#1c150f;color:#fff;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmdCLEFBR3NCLGFBQ2tCLCtCQUNHLGtDQUNULHlCQUNkLFdBQ0UsYUFDZiIsImZpbGUiOiIvVXNlcnMvbWlsY2FoY2VudGVuby9mcmVjay9mcmVjay1uZXh0L2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBGb290ZXJPcHRJbiBmcm9tICcuL0Zvb3Rlck9wdEluJztcbmltcG9ydCBGb290ZXJOYXYgZnJvbSAnLi9Gb290ZXJOYXYnO1xuaW1wb3J0IFJlY2VudE5ld3MgZnJvbSAnLi9SZWNlbnROZXdzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxGb290ZXJPcHRJbiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9vdGVyTmF2IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxSZWNlbnROZXdzIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNSUgNTAlIDI1JTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNTAlIDI1JTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMTUwZjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbiAgKTtcbn07Il19 */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Footer/Footer.jsx */"));
}
;

/***/ })

})
//# sourceMappingURL=index.js.d9e750a48fd8945b860b.hot-update.js.map