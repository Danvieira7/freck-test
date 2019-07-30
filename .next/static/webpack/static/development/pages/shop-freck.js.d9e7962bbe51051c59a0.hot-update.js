webpackHotUpdate("static/development/pages/shop-freck.js",{

/***/ "./components/ProductList.jsx":
/*!************************************!*\
  !*** ./components/ProductList.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var ProductList = function ProductList(props) {
  var product = props.product;
  var rawJson = product.short_description;
  var productDescription = rawJson.replace(/(<([^>]+)>)/ig, "");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1951067726"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/product",
    as: "/product/".concat(product.slug)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: product.images[0].src,
    alt: "Product image",
    className: "jsx-1951067726"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1951067726" + " " + "product-headings"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1951067726"
  }, product.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "jsx-1951067726"
  }, "$", product.price), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "jsx-1951067726" + " " + "product-description"
  }, productDescription)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1951067726"
  }, "img.jsx-1951067726{max-width:450px;}.product-headings.jsx-1951067726{text-align:center;}.product-headings.jsx-1951067726{text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JlLEFBR3NCLEFBR0UsQUFHTyxnQkFMMUIsRUFHQSxPQUdBIiwiZmlsZSI6Ii9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBQcm9kdWN0TGlzdCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7cHJvZHVjdH0gPSBwcm9wcztcblx0Y29uc3QgcmF3SnNvbiA9IHByb2R1Y3Quc2hvcnRfZGVzY3JpcHRpb247XG5cdGNvbnN0IHByb2R1Y3REZXNjcmlwdGlvbiA9IHJhd0pzb24ucmVwbGFjZSgvKDwoW14+XSspPikvaWcsXCJcIik7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxMaW5rXG5cdFx0XHRcdGhyZWY9e2AvcHJvZHVjdGB9XG5cdFx0XHRcdGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LnNsdWd9YH1cblx0XHRcdD5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdHNyYz17cHJvZHVjdC5pbWFnZXNbMF0uc3JjfVxuXHRcdFx0XHRcdGFsdD1cIlByb2R1Y3QgaW1hZ2VcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWhlYWRpbmdzXCI+XG5cdFx0XHRcdDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XG5cdFx0XHRcdDxoNT4ke3Byb2R1Y3QucHJpY2V9PC9oNT5cblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDQ1MHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5wcm9kdWN0LWhlYWRpbmdzIHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnByb2R1Y3QtaGVhZGluZ3Mge1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7Il19 */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/ProductList.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/is-what/dist/index.esm.js":
false,

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
false,

/***/ "./node_modules/merge-anything/dist/index.esm.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
false,

/***/ "./node_modules/stylis-rule-sheet/index.js":
false,

/***/ "./node_modules/stylis/stylis.min.js":
false

})
//# sourceMappingURL=shop-freck.js.d9e7962bbe51051c59a0.hot-update.js.map