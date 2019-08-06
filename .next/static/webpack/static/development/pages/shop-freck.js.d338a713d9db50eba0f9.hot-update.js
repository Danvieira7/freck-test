webpackHotUpdate("static/development/pages/shop-freck.js",{

/***/ "./components/ProductList.jsx":
false,

/***/ "./components/Shop/ProductList.jsx":
/*!*****************************************!*\
  !*** ./components/Shop/ProductList.jsx ***!
  \*****************************************/
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









var ProductList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProductList, _Component);

  function ProductList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductList).call(this, props));
    _this.state = {
      hover: false
    };
    _this.toggleHover = _this.toggleHover.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductList, [{
    key: "toggleHover",
    value: function toggleHover() {
      this.setState({
        hover: !this.state.hover
      });
    }
  }, {
    key: "render",
    value: function render() {
      var product = this.props.product;
      var rawJson = product.short_description;
      var productDescription = rawJson.replace(/(<([^>]+)>)/ig, "");
      var toggleImg = {
        opacity: this.state.hover ? '0' : '1',
        cursor: this.state.hover ? 'pointer' : '',
        transition: this.state.hover ? 'filter .6s, opacity .6s, transform .6s, -webkit-filter .6s, -webkit-transform .6s' : ''
      };
      var outOfStock = {
        opacity: product.in_stock ? '0' : '1'
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1715334222", [product.images[1].src]]]) + " " + "product-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1715334222", [product.images[1].src]]]) + " " + "product-image"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: outOfStock,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1715334222", [product.images[1].src]]]) + " " + "out-of-stock"
      }, "OUT OF STOCK"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://freckbeauty.com/product/".concat(product.slug),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1715334222", [product.images[1].src]]])
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: product.images[0].src,
        alt: "Product image",
        style: toggleImg,
        onMouseEnter: this.toggleHover,
        onMouseLeave: this.toggleHover,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1715334222", [product.images[1].src]]])
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1715334222", [product.images[1].src]]]) + " " + "product-heading"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://freckbeauty.com/product/".concat(product.slug),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1715334222", [product.images[1].src]]])
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1715334222", [product.images[1].src]]])
      }, product.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1715334222", [product.images[1].src]]]) + " " + "product-description"
      }, productDescription)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https:freckbeauty.com/cart/?add-to-cart=".concat(product.id, "&quantity=1"),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1715334222", [product.images[1].src]]])
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1715334222", [product.images[1].src]]])
      }, "$", product.price, " \u2014 ADD"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1715334222",
        dynamic: [product.images[1].src]
      }, ".product-container.__jsx-style-dynamic-selector{margin:0 20px;}img.__jsx-style-dynamic-selector,.product-image.__jsx-style-dynamic-selector{max-width:450px;max-height:450px;}.product-image.__jsx-style-dynamic-selector{position:relative;background:url('".concat(product.images[1].src, "');background-size:cover;font-weight:bold;}.out-of-stock.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:-35px;background-color:rgba(255,255,255,0.88);height:14%;width:100%;opacity:0;top:50%;}.product-heading.__jsx-style-dynamic-selector{width:100%;text-align:center;text-transform:uppercase;}.product-description.__jsx-style-dynamic-selector{line-height:20px;}a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:#000;}button.__jsx-style-dynamic-selector{background-color:#A73E24;color:#fff;width:100%;padding:9px 15px;border:none;margin-bottom:10px;}button.__jsx-style-dynamic-selector:focus{outline:0;}button.__jsx-style-dynamic-selector:hover{cursor:pointer;}@media only screen and (max-width:420px){.product-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;max-width:125px;}img.__jsx-style-dynamic-selector,.product-image.__jsx-style-dynamic-selector{max-width:125px;max-height:125px;}.out-of-stock.__jsx-style-dynamic-selector{margin-top:-10px;}}@media only screen and (min-width:421px) and (max-width:820px){.product-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:250px;margin:0 20px;}img.__jsx-style-dynamic-selector,.product-image.__jsx-style-dynamic-selector{max-width:250px;max-height:250px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9TaG9wL1Byb2R1Y3RMaXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRGdCLEFBR3FCLEFBR0UsQUFJRSxBQU1BLEFBWVAsQUFLTSxBQUdJLEFBSUksQUFRZixBQUdLLEFBSUQsQUFNRyxBQUlDLEFBS0osQUFPRyxVQTVCbEIsQ0FwQm1CLEdBekJuQixDQWdEQSxDQTdDa0IsQUF1REMsQUFnQkEsQ0E1Q25CLEFBZ0NDLENBdkQrQyxBQU1sQyxPQXdCRixJQVhjLElBdEIxQixBQXVEQyxBQWdCQSxHQXJDVyxXQUNNLEdBTk4sSUFOWixPQU9BLEdBTWEsQ0FoQ1UsU0E0Q04sQUFlQSxFQTFCRyxXQWhDRixLQUtNLEdBNEJ4QixTQWhDQSwyQkEyQ3lCLEFBZUEsNERBckRMLHVDQXVDRixBQWVKLFlBQ0UsSUFmZixVQWdCQSw0QkF2RGlCLGlCQUMwQix3Q0FDaEMsV0FDQSxXQUNELFVBQ0YsUUFDVCIsImZpbGUiOiIvVXNlcnMvbWlsY2FoY2VudGVuby9mcmVjay9mcmVjay1uZXh0L2NvbXBvbmVudHMvU2hvcC9Qcm9kdWN0TGlzdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBQcm9kdWN0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRob3ZlcjogZmFsc2UsXG5cdFx0fVxuXHRcdHRoaXMudG9nZ2xlSG92ZXIgPSB0aGlzLnRvZ2dsZUhvdmVyLmJpbmQodGhpcyk7XG5cdH1cblxuXHR0b2dnbGVIb3ZlcigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtob3ZlcjogIXRoaXMuc3RhdGUuaG92ZXJ9KVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7cHJvZHVjdH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHJhd0pzb24gPSBwcm9kdWN0LnNob3J0X2Rlc2NyaXB0aW9uO1xuXHRcdGNvbnN0IHByb2R1Y3REZXNjcmlwdGlvbiA9IHJhd0pzb24ucmVwbGFjZSgvKDwoW14+XSspPikvaWcsXCJcIik7XG5cdFx0Y29uc3QgdG9nZ2xlSW1nID0ge1xuXHRcdFx0b3BhY2l0eTogdGhpcy5zdGF0ZS5ob3ZlciA/ICcwJyA6ICcxJyxcblx0XHRcdGN1cnNvcjogdGhpcy5zdGF0ZS5ob3ZlciA/ICdwb2ludGVyJyA6ICcnLFxuXHRcdFx0dHJhbnNpdGlvbjogdGhpcy5zdGF0ZS5ob3ZlciA/ICdmaWx0ZXIgLjZzLCBvcGFjaXR5IC42cywgdHJhbnNmb3JtIC42cywgLXdlYmtpdC1maWx0ZXIgLjZzLCAtd2Via2l0LXRyYW5zZm9ybSAuNnMnIDogJydcblx0XHR9XG5cdFx0Y29uc3Qgb3V0T2ZTdG9jayA9IHtcblx0XHRcdG9wYWNpdHk6IHByb2R1Y3QuaW5fc3RvY2sgPyAnMCcgOiAnMSdcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdXQtb2Ytc3RvY2tcIiBzdHlsZT17b3V0T2ZTdG9ja30+XG5cdFx0XHRcdFx0XHRPVVQgT0YgU1RPQ0tcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8YSBocmVmPXtgaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vcHJvZHVjdC8ke3Byb2R1Y3Quc2x1Z31gfT5cblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPXtwcm9kdWN0LmltYWdlc1swXS5zcmN9XG5cdFx0XHRcdFx0XHRcdGFsdD1cIlByb2R1Y3QgaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRzdHlsZT17dG9nZ2xlSW1nfVxuXHRcdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9e3RoaXMudG9nZ2xlSG92ZXJ9XG5cdFx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17dGhpcy50b2dnbGVIb3Zlcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWhlYWRpbmdcIj5cblx0XHRcdFx0XHQ8YSBocmVmPXtgaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vcHJvZHVjdC8ke3Byb2R1Y3Quc2x1Z31gfT5cblx0XHRcdFx0XHRcdFx0PGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cblx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDU+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDxhIGhyZWY9e2BodHRwczpmcmVja2JlYXV0eS5jb20vY2FydC8/YWRkLXRvLWNhcnQ9JHtwcm9kdWN0LmlkfSZxdWFudGl0eT0xYH0+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQke3Byb2R1Y3QucHJpY2V9IOKAlCBBRERcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQucHJvZHVjdC1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGltZywgLnByb2R1Y3QtaW1hZ2Uge1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA0NTBweDtcblx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6IDQ1MHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucHJvZHVjdC1pbWFnZSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoJyR7cHJvZHVjdC5pbWFnZXNbMV0uc3JjfScpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQub3V0LW9mLXN0b2NrIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMzVweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OCk7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE0JTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucHJvZHVjdC1oZWFkaW5nIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjQTczRTI0O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDlweCAxNXB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnV0dG9uOmZvY3VzIHtcblx0XHRcdFx0XHRcdG91dGxpbmU6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJ1dHRvbjpob3ZlciB7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcblx0XHRcdFx0XHRcdC5wcm9kdWN0LWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMTI1cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpbWcsIC5wcm9kdWN0LWltYWdlIHtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMjVweDtcblx0XHRcdFx0XHRcdFx0bWF4LWhlaWdodDogMTI1cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQub3V0LW9mLXN0b2NrIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDIxcHgpIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xuXHRcdFx0XHRcdFx0LnByb2R1Y3QtY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDI1MHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgMjBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGltZywgLnByb2R1Y3QtaW1hZ2Uge1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDI1MHB4O1xuXHRcdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAyNTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7Il19 */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Shop/ProductList.jsx */")));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./pages/shop-freck.js":
/*!*****************************!*\
  !*** ./pages/shop-freck.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Header_MainHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header/MainHeader */ "./components/Header/MainHeader.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Shop_MobileHero__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Shop/MobileHero */ "./components/Shop/MobileHero.jsx");
/* harmony import */ var _components_Shop_ProductList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Shop/ProductList */ "./components/Shop/ProductList.jsx");
/* harmony import */ var _config_server__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config/server */ "./config/server.js");
















var ShopFreck =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ShopFreck, _Component);

  function ShopFreck(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ShopFreck);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ShopFreck).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ShopFreck, [{
    key: "render",
    value: function render() {
      var products = this.props.products;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-806009810"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Header_MainHeader__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-806009810" + " " + "hero-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "left-hero",
        className: "jsx-806009810"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2018/10/f-dot.svg",
        alt: "F Dot Logo",
        className: "jsx-806009810"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "carousel",
        className: "jsx-806009810"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Shop_MobileHero__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-806009810" + " " + "product-container"
      }, products.length ? products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Shop_ProductList__WEBPACK_IMPORTED_MODULE_13__["default"], {
          product: product,
          key: product.id
        });
      }) : ''), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "products-hero",
        className: "jsx-806009810"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "806009810"
      }, ".hero-container.jsx-806009810{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:-5.5px;}#left-hero.jsx-806009810{background:url('https://freckbeauty.com/wp-content/uploads/2018/11/shop-header-left.jpg');background-repeat:no-repeat;background-position:0% 50%;background-size:cover;width:50%;height:720px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#carousel.jsx-806009810{background:url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Sml-Open_Flatlay-Shadow_R__676x676.jpg');background-repeat:no-repeat;background-position:0% 50%;background-size:cover;width:50%;height:720px;}img.jsx-806009810{width:21%;margin-left:30px;}.product-container.jsx-806009810{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:10%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-right:5%;margin-left:5%;}#products-hero.jsx-806009810{background:url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Group-Collection_Flatlay-Shadow_R_1351x901_ImgOptm.jpg');background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:contain;min-height:900px;width:100%;margin-top:10%;}@media only screen and (max-width:820px){.hero-container.jsx-806009810{display:none;}#products-hero.jsx-806009810{background-position:0% 0%;min-height:300px;width:100%;margin-top:0;margin-bottom:-55px;}}@media only screen and (min-width:520px) and (max-width:820px){#products-hero.jsx-806009810{min-height:600px;margin-top:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvcGFnZXMvc2hvcC1mcmVjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRG9CLEFBRzBCLEFBSzZFLEFBVTJDLEFBUTNILEFBSUcsQUFRd0ksQUFXdEksQUFHYSxBQVNULFVBbENGLEdBdUJqQixJQVlrQixTQVRDLENBekJyQixNQW1DRSxVQVRhLFdBQ0UsYUFDTyxPQXBEUCxBQTJCQSxhQTBCZixHQWhENEIsNEJBQ0QsYUFMTixBQTJCTixFQWJhLFlBUk4sQ0FzQkMsR0FNSyxHQWpDOUIsU0FjNkIsTUFSakIsVUFDRyxBQTJCYyxXQW5CTCxFQVBULGNBMkJnQixNQW5CbkIsVUFDRyxhQUNmLEFBa0IwQixZQVJSLFlBU0MsSUFSRixHQXBCSSxVQTZCUixFQVJiLFNBU2lCLGVBQ2pCLHlEQTlCQSIsImZpbGUiOiIvVXNlcnMvbWlsY2FoY2VudGVuby9mcmVjay9mcmVjay1uZXh0L3BhZ2VzL3Nob3AtZnJlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL01haW5IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTW9iaWxlSGVybyBmcm9tICcuLi9jb21wb25lbnRzL1Nob3AvTW9iaWxlSGVybyc7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9TaG9wL1Byb2R1Y3RMaXN0JztcbmltcG9ydCB7IHNlcnZlciB9IGZyb20gJy4uL2NvbmZpZy9zZXJ2ZXInO1xuXG5jbGFzcyBTaG9wRnJlY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3NlcnZlcn0vYXBpL3Byb2R1Y3RzYCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2R1Y3RzOiBkYXRhXG4gICAgfVxuICB9XG4gICAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TWFpbkhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImxlZnQtaGVyb1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21rMGZyZWNrYmVhdXR5Zndqa3U1LmtpbnN0YWNkbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZi1kb3Quc3ZnXCIgYWx0PVwiRiBEb3QgTG9nb1wiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwiY2Fyb3VzZWxcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2JpbGVIZXJvIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250YWluZXJcIj5cbiAgICAgICAgICB7cHJvZHVjdHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgcHJvZHVjdHMubWFwKFxuICAgICAgICAgICAgICBwcm9kdWN0ID0+XG4gICAgICAgICAgICAgIDxQcm9kdWN0TGlzdFxuICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiAnJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0cy1oZXJvXCI+PC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZXJvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTUuNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbGVmdC1oZXJvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvc2hvcC1oZWFkZXItbGVmdC5qcGcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2Nhcm91c2VsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9tazBmcmVja2JlYXV0eWZ3amt1NS5raW5zdGFjZG4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA0L0ZyZWNrX1NtbC1PcGVuX0ZsYXRsYXktU2hhZG93X1JfXzY3Nng2NzYuanBnJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDcyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIxJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3Byb2R1Y3RzLWhlcm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL21rMGZyZWNrYmVhdXR5Zndqa3U1LmtpbnN0YWNkbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDQvRnJlY2tfR3JvdXAtQ29sbGVjdGlvbl9GbGF0bGF5LVNoYWRvd19SXzEzNTF4OTAxX0ltZ09wdG0uanBnJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA5MDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gICAgICAgICAgICAuaGVyby1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI3Byb2R1Y3RzLWhlcm8ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MjBweCkgYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gICAgICAgICAgICAjcHJvZHVjdHMtaGVybyB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IFNob3BGcmVjazsiXX0= */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/pages/shop-freck.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("".concat(_config_server__WEBPACK_IMPORTED_MODULE_14__["server"], "/api/products"));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                return _context.abrupt("return", {
                  products: data
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ShopFreck;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ShopFreck);

/***/ })

})
//# sourceMappingURL=shop-freck.js.d338a713d9db50eba0f9.hot-update.js.map