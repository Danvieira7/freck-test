webpackHotUpdate("static/development/pages/shop-freck.js",{

/***/ "./components/ProductList.jsx":
/*!************************************!*\
  !*** ./components/ProductList.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t\t:hover {\n\t\t\tbackground: url('", "');\n\t\t}\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ProductList = function ProductList(props) {
  var product = props.product;
  var rawJson = product.short_description;
  var productDescription = rawJson.replace(/(<([^>]+)>)/ig, "");
  var HoverPhoto = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject(), product.images[1].src);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1951067726"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/product",
    as: "/product/".concat(product.slug)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HoverPhoto, {
    className: "jsx-1951067726"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: product.images[0].src,
    alt: "Product image",
    className: "jsx-1951067726"
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1951067726" + " " + "product-headings"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-1951067726"
  }, product.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "jsx-1951067726"
  }, "$", product.price), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "jsx-1951067726" + " " + "product-description"
  }, productDescription)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1951067726"
  }, "img.jsx-1951067726{max-width:450px;}.product-headings.jsx-1951067726{text-align:center;}.product-headings.jsx-1951067726{text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJlLEFBR3NCLEFBR0UsQUFHTyxnQkFMMUIsRUFHQSxPQUdBIiwiZmlsZSI6Ii9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFByb2R1Y3RMaXN0ID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtwcm9kdWN0fSA9IHByb3BzO1xuXHRjb25zdCByYXdKc29uID0gcHJvZHVjdC5zaG9ydF9kZXNjcmlwdGlvbjtcblx0Y29uc3QgcHJvZHVjdERlc2NyaXB0aW9uID0gcmF3SnNvbi5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZyxcIlwiKTtcblx0Y29uc3QgSG92ZXJQaG90byA9IHN0eWxlZC5pbWdgXG5cdFx0OmhvdmVyIHtcblx0XHRcdGJhY2tncm91bmQ6IHVybCgnJHtwcm9kdWN0LmltYWdlc1sxXS5zcmN9Jyk7XG5cdFx0fVxuXHRgXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxMaW5rXG5cdFx0XHRcdGhyZWY9e2AvcHJvZHVjdGB9XG5cdFx0XHRcdGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LnNsdWd9YH1cblx0XHRcdD5cblx0XHRcdFx0PEhvdmVyUGhvdG8+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXtwcm9kdWN0LmltYWdlc1swXS5zcmN9XG5cdFx0XHRcdFx0XHRhbHQ9XCJQcm9kdWN0IGltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hvdmVyUGhvdG8+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaGVhZGluZ3NcIj5cblx0XHRcdFx0PGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cblx0XHRcdFx0PGg1PiR7cHJvZHVjdC5wcmljZX08L2g1PlxuXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPntwcm9kdWN0RGVzY3JpcHRpb259PC9oNT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdG1heC13aWR0aDogNDUwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnByb2R1Y3QtaGVhZGluZ3Mge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHQucHJvZHVjdC1oZWFkaW5ncyB7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiXX0= */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/ProductList.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ })

})
//# sourceMappingURL=shop-freck.js.10139598a8c8993feec4.hot-update.js.map