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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1107173358", [product.images[1].src]]]) + " " + "product-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1107173358", [product.images[1].src]]]) + " " + "product-image"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: outOfStock,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1107173358", [product.images[1].src]]]) + " " + "out-of-stock"
      }, "OUT OF STOCK"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/product",
        as: "/product/".concat(product.slug)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: product.images[0].src,
        alt: "Product image",
        style: toggleImg,
        onMouseEnter: this.toggleHover,
        onMouseLeave: this.toggleHover,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1107173358", [product.images[1].src]]])
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1107173358", [product.images[1].src]]]) + " " + "product-heading"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https:freckbeauty.com/cart/?add-to-cart=".concat(product.id, "&quantity=1"),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1107173358", [product.images[1].src]]])
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1107173358", [product.images[1].src]]])
      }, product.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1107173358", [product.images[1].src]]]) + " " + "product-description"
      }, productDescription), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1107173358", [product.images[1].src]]])
      }, "$", product.price, " \u2014 ADD"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1107173358",
        dynamic: [product.images[1].src]
      }, ".product-container.__jsx-style-dynamic-selector{margin:0 10px;}img.__jsx-style-dynamic-selector,.product-image.__jsx-style-dynamic-selector{max-width:450px;max-height:450px;}.product-image.__jsx-style-dynamic-selector{position:relative;background:url('".concat(product.images[1].src, "');background-size:cover;font-weight:bold;}.out-of-stock.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:-35px;background-color:rgba(255,255,255,0.88);height:14%;width:100%;opacity:0;top:50%;}.product-heading.__jsx-style-dynamic-selector{width:100%;text-align:center;text-transform:uppercase;}.product-description.__jsx-style-dynamic-selector{line-height:20px;}a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:#000;}button.__jsx-style-dynamic-selector{background-color:#A73E24;color:#fff;width:100%;padding:9px 15px;border:none;margin-bottom:10px;}button.__jsx-style-dynamic-selector:focus{outline:0;}button.__jsx-style-dynamic-selector:hover{cursor:pointer;}@media only screen and (max-width:420px){.product-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;max-width:100px;}img.__jsx-style-dynamic-selector,.product-image.__jsx-style-dynamic-selector{max-width:100px;max-height:100px;}.out-of-stock.__jsx-style-dynamic-selector{margin-top:-10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURnQixBQUdxQixBQUdFLEFBSUUsQUFNQSxBQVlQLEFBS00sQUFHSSxBQUlJLEFBUWYsQUFHSyxBQUlELEFBT0csQUFJQyxVQWpCbkIsQ0FwQm1CLEdBekJuQixDQWdEQSxDQTdDa0IsQUF3REMsQ0E3Qm5CLEFBaUNDLENBeEQrQyxBQU1sQyxPQXdCRixJQVhjLElBdEIxQixBQXdEQyxHQXRCVyxXQUNNLEdBTk4sSUFOWixPQU9BLEdBTWEsQ0FoQ1UsU0E0Q04sRUFYRyxXQWhDRixLQUtNLEdBNEJ4QixTQWhDQSwyQkEyQ3lCLDREQXRDTCx1Q0F3Q0YsZ0JBQ2pCLHNDQXhDaUIsaUJBQzBCLHdDQUNoQyxXQUNBLFdBQ0QsVUFDRixRQUNUIiwiZmlsZSI6Ii9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aG92ZXI6IGZhbHNlLFxuXHRcdH1cblx0XHR0aGlzLnRvZ2dsZUhvdmVyID0gdGhpcy50b2dnbGVIb3Zlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0dG9nZ2xlSG92ZXIoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7aG92ZXI6ICF0aGlzLnN0YXRlLmhvdmVyfSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb2R1Y3R9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCByYXdKc29uID0gcHJvZHVjdC5zaG9ydF9kZXNjcmlwdGlvbjtcblx0XHRjb25zdCBwcm9kdWN0RGVzY3JpcHRpb24gPSByYXdKc29uLnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLFwiXCIpO1xuXHRcdGNvbnN0IHRvZ2dsZUltZyA9IHtcblx0XHRcdG9wYWNpdHk6IHRoaXMuc3RhdGUuaG92ZXIgPyAnMCcgOiAnMScsXG5cdFx0XHRjdXJzb3I6IHRoaXMuc3RhdGUuaG92ZXIgPyAncG9pbnRlcicgOiAnJyxcblx0XHRcdHRyYW5zaXRpb246IHRoaXMuc3RhdGUuaG92ZXIgPyAnZmlsdGVyIC42cywgb3BhY2l0eSAuNnMsIHRyYW5zZm9ybSAuNnMsIC13ZWJraXQtZmlsdGVyIC42cywgLXdlYmtpdC10cmFuc2Zvcm0gLjZzJyA6ICcnXG5cdFx0fVxuXHRcdGNvbnN0IG91dE9mU3RvY2sgPSB7XG5cdFx0XHRvcGFjaXR5OiBwcm9kdWN0LmluX3N0b2NrID8gJzAnIDogJzEnXG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3V0LW9mLXN0b2NrXCIgc3R5bGU9e291dE9mU3RvY2t9PlxuXHRcdFx0XHRcdFx0T1VUIE9GIFNUT0NLXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdGhyZWY9e2AvcHJvZHVjdGB9XG5cdFx0XHRcdFx0XHRhcz17YC9wcm9kdWN0LyR7cHJvZHVjdC5zbHVnfWB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdLnNyY31cblx0XHRcdFx0XHRcdFx0YWx0PVwiUHJvZHVjdCBpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt0b2dnbGVJbWd9XG5cdFx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17dGhpcy50b2dnbGVIb3Zlcn1cblx0XHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXt0aGlzLnRvZ2dsZUhvdmVyfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaGVhZGluZ1wiPlxuXHRcdFx0XHRcdDxhIGhyZWY9e2BodHRwczpmcmVja2JlYXV0eS5jb20vY2FydC8/YWRkLXRvLWNhcnQ9JHtwcm9kdWN0LmlkfSZxdWFudGl0eT0xYH0+XG5cdFx0XHRcdFx0XHQ8aDM+e3Byb2R1Y3QubmFtZX08L2gzPlxuXHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDU+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQke3Byb2R1Y3QucHJpY2V9IOKAlCBBRERcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQucHJvZHVjdC1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDEwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGltZywgLnByb2R1Y3QtaW1hZ2Uge1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA0NTBweDtcblx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6IDQ1MHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucHJvZHVjdC1pbWFnZSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoJyR7cHJvZHVjdC5pbWFnZXNbMV0uc3JjfScpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQub3V0LW9mLXN0b2NrIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMzVweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OCk7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE0JTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucHJvZHVjdC1oZWFkaW5nIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjQTczRTI0O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDlweCAxNXB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnV0dG9uOmZvY3VzIHtcblx0XHRcdFx0XHRcdG91dGxpbmU6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJ1dHRvbjpob3ZlciB7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcblx0XHRcdFx0XHRcdC5wcm9kdWN0LWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdC8vIHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMTAwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpbWcsIC5wcm9kdWN0LWltYWdlIHtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDBweDtcblx0XHRcdFx0XHRcdFx0bWF4LWhlaWdodDogMTAwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQub3V0LW9mLXN0b2NrIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcblx0XHRcdFx0XHQvLyBcdC5wcm9kdWN0LWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0Ly8gXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0Ly8gXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHQvLyBcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0Ly8gXHRcdHdpZHRoOiAyNTBweDtcblx0XHRcdFx0XHQvLyBcdFx0bWFyZ2luOiAwIDIwcHg7XG5cdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0Ly8gXHRpbWcsIC5wcm9kdWN0LWltYWdlIHtcblx0XHRcdFx0XHQvLyBcdFx0bWF4LXdpZHRoOiAyNTBweDtcblx0XHRcdFx0XHQvLyBcdFx0bWF4LWhlaWdodDogMjUwcHg7XG5cdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0OyJdfQ== */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/ProductList.jsx */")));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ })

})
//# sourceMappingURL=shop-freck.js.c89e3f95254094d21010.hot-update.js.map