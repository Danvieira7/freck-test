webpackHotUpdate("static/development/pages/shop-freck.js",{

/***/ "./components/ProductList.jsx":
/*!************************************!*\
  !*** ./components/ProductList.jsx ***!
  \************************************/
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1779423732", [product.images[1].src]]]) + " " + "product-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1779423732", [product.images[1].src]]]) + " " + "product-image"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: outOfStock,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1779423732", [product.images[1].src]]]) + " " + "out-of-stock"
      }, "OUT OF STOCK"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/product",
        as: "/product/".concat(product.slug)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: product.images[0].src,
        alt: "Product image",
        style: toggleImg,
        onMouseEnter: this.toggleHover,
        onMouseLeave: this.toggleHover,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1779423732", [product.images[1].src]]])
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1779423732", [product.images[1].src]]]) + " " + "product-heading"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https:freckbeauty.com/".concat(product.slug),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1779423732", [product.images[1].src]]])
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1779423732", [product.images[1].src]]])
      }, product.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1779423732", [product.images[1].src]]]) + " " + "product-description"
      }, productDescription), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return console.log("".concat(product.id, " added to cart!"));
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1779423732", [product.images[1].src]]])
      }, "$", product.price, " \u2014 ADD"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1779423732",
        dynamic: [product.images[1].src]
      }, "img.__jsx-style-dynamic-selector{max-width:450px;max-height:450px;}.product-image.__jsx-style-dynamic-selector{position:relative;background:url('".concat(product.images[1].src, "');background-size:cover;font-weight:bold;}.out-of-stock.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:-35px;background-color:rgba(255,255,255,0.88);height:14%;width:100%;opacity:0;top:50%;}.product-heading.__jsx-style-dynamic-selector{text-align:center;text-transform:uppercase;}.product-description.__jsx-style-dynamic-selector{line-height:20px;}a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:#000;}button.__jsx-style-dynamic-selector{background-color:#A73E24;color:#fff;width:100%;min-width:250px;max-width:350px;padding:9px 15px;border:none;margin-bottom:10px;}button.__jsx-style-dynamic-selector:focus{outline:0;}button.__jsx-style-dynamic-selector:hover{cursor:pointer;}@media only screen and (max-width:420px){.product-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:10px;max-width:100px;}img.__jsx-style-dynamic-selector{max-width:100px;max-height:100px;}.out-of-stock.__jsx-style-dynamic-selector{margin-top:-10px;}}@media only screen and (max-width:820px){.product-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:250px;margin:0 20px;}img.__jsx-style-dynamic-selector,.product-image.__jsx-style-dynamic-selector{max-width:250px;max-height:250px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURnQixBQUd1QixBQUlFLEFBTUEsQUFZQSxBQUlELEFBR0ksQUFJSSxBQVVmLEFBR0ssQUFJRCxBQU9HLEFBSUMsQUFLSixBQU9HLFVBN0JsQixLQUdBLENBOUNrQixBQXlEQyxBQWdCQSxDQS9DbkIsQUFtQ0MsQ0F6RCtDLEFBTWxDLEFBWVksT0FXZCxRQWhDWixBQXlEQyxBQWdCQSxHQXhDVyxPQVhaLElBWWlCLEdBTkwsV0FDWixFQU1pQixFQS9CTSxTQTZDTixBQWdCQSxLQTdCQyxRQS9CQSxLQUtNLElBMkJYLFFBL0JiLElBZ0NvQixtQkFDcEIsSUFXeUIsQUFnQkEsNERBdkRMLHVDQXdDTCxBQWdCRCxZQUNFLENBaEJFLGFBaUJqQixHQWhCQSx5QkF6Q2lCLGlCQUMwQix3Q0FDaEMsV0FDQSxXQUNELFVBQ0YsUUFDVCIsImZpbGUiOiIvVXNlcnMvbWlsY2FoY2VudGVuby9mcmVjay9mcmVjay1uZXh0L2NvbXBvbmVudHMvUHJvZHVjdExpc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIFByb2R1Y3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhvdmVyOiBmYWxzZSxcblx0XHR9XG5cdFx0dGhpcy50b2dnbGVIb3ZlciA9IHRoaXMudG9nZ2xlSG92ZXIuYmluZCh0aGlzKTtcblx0fVxuXG5cdHRvZ2dsZUhvdmVyKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe2hvdmVyOiAhdGhpcy5zdGF0ZS5ob3Zlcn0pXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtwcm9kdWN0fSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgcmF3SnNvbiA9IHByb2R1Y3Quc2hvcnRfZGVzY3JpcHRpb247XG5cdFx0Y29uc3QgcHJvZHVjdERlc2NyaXB0aW9uID0gcmF3SnNvbi5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZyxcIlwiKTtcblx0XHRjb25zdCB0b2dnbGVJbWcgPSB7XG5cdFx0XHRvcGFjaXR5OiB0aGlzLnN0YXRlLmhvdmVyID8gJzAnIDogJzEnLFxuXHRcdFx0Y3Vyc29yOiB0aGlzLnN0YXRlLmhvdmVyID8gJ3BvaW50ZXInIDogJycsXG5cdFx0XHR0cmFuc2l0aW9uOiB0aGlzLnN0YXRlLmhvdmVyID8gJ2ZpbHRlciAuNnMsIG9wYWNpdHkgLjZzLCB0cmFuc2Zvcm0gLjZzLCAtd2Via2l0LWZpbHRlciAuNnMsIC13ZWJraXQtdHJhbnNmb3JtIC42cycgOiAnJ1xuXHRcdH1cblx0XHRjb25zdCBvdXRPZlN0b2NrID0ge1xuXHRcdFx0b3BhY2l0eTogcHJvZHVjdC5pbl9zdG9jayA/ICcwJyA6ICcxJ1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm91dC1vZi1zdG9ja1wiIHN0eWxlPXtvdXRPZlN0b2NrfT5cblx0XHRcdFx0XHRcdE9VVCBPRiBTVE9DS1xuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRocmVmPXtgL3Byb2R1Y3RgfVxuXHRcdFx0XHRcdFx0YXM9e2AvcHJvZHVjdC8ke3Byb2R1Y3Quc2x1Z31gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPXtwcm9kdWN0LmltYWdlc1swXS5zcmN9XG5cdFx0XHRcdFx0XHRcdGFsdD1cIlByb2R1Y3QgaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRzdHlsZT17dG9nZ2xlSW1nfVxuXHRcdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9e3RoaXMudG9nZ2xlSG92ZXJ9XG5cdFx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17dGhpcy50b2dnbGVIb3Zlcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWhlYWRpbmdcIj5cblx0XHRcdFx0XHQ8YSBocmVmPXtgaHR0cHM6ZnJlY2tiZWF1dHkuY29tLyR7cHJvZHVjdC5zbHVnfWB9PlxuXHRcdFx0XHRcdFx0PGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cblx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+e3Byb2R1Y3REZXNjcmlwdGlvbn08L2g1PlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhgJHtwcm9kdWN0LmlkfSBhZGRlZCB0byBjYXJ0IWApfT5cblx0XHRcdFx0XHRcdFx0XHQke3Byb2R1Y3QucHJpY2V9IOKAlCBBRERcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA0NTBweDtcblx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6IDQ1MHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucHJvZHVjdC1pbWFnZSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoJyR7cHJvZHVjdC5pbWFnZXNbMV0uc3JjfScpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQub3V0LW9mLXN0b2NrIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMzVweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OCk7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE0JTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucHJvZHVjdC1oZWFkaW5nIHtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRidXR0b24ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0E3M0UyNDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRtaW4td2lkdGg6IDI1MHB4O1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzNTBweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDlweCAxNXB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnV0dG9uOmZvY3VzIHtcblx0XHRcdFx0XHRcdG91dGxpbmU6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJ1dHRvbjpob3ZlciB7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcblx0XHRcdFx0XHRcdC5wcm9kdWN0LWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMTAwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMHB4O1xuXHRcdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAxMDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5vdXQtb2Ytc3RvY2sge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xuXHRcdFx0XHRcdFx0LnByb2R1Y3QtY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDI1MHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgMjBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGltZywgLnByb2R1Y3QtaW1hZ2Uge1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDI1MHB4O1xuXHRcdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAyNTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7Il19 */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/ProductList.jsx */")));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ })

})
//# sourceMappingURL=shop-freck.js.a08da6c352479edf2de8.hot-update.js.map