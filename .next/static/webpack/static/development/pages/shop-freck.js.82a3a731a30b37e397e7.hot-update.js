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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2811154055", [product.images[1].src]]]) + " " + "product-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2811154055", [product.images[1].src]]]) + " " + "product-image"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: outOfStock,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2811154055", [product.images[1].src]]]) + " " + "out-of-stock"
      }, "OUT OF STOCK"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/product",
        as: "/product/".concat(product.slug)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: product.images[0].src,
        alt: "Product image",
        style: toggleImg,
        onMouseEnter: this.toggleHover,
        onMouseLeave: this.toggleHover,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2811154055", [product.images[1].src]]])
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2811154055", [product.images[1].src]]]) + " " + "product-heading"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2811154055", [product.images[1].src]]])
      }, product.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2811154055", [product.images[1].src]]]) + " " + "product-description"
      }, productDescription), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return console.log("".concat(product.id, " added to cart!"));
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["2811154055", [product.images[1].src]]])
      }, "$", product.price, " \u2014 ADD")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2811154055",
        dynamic: [product.images[1].src]
      }, "img.__jsx-style-dynamic-selector,.product-image.__jsx-style-dynamic-selector{max-width:450px;max-height:450px;}.product-image.__jsx-style-dynamic-selector{position:relative;background:url('".concat(product.images[1].src, "');background-size:cover;font-weight:bold;}.out-of-stock.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:-35px;background-color:rgba(255,255,255,0.88);height:14%;width:100%;opacity:0;top:50%;}.product-heading.__jsx-style-dynamic-selector{text-align:center;text-transform:uppercase;}.product-description.__jsx-style-dynamic-selector{line-height:20px;}button.__jsx-style-dynamic-selector{background-color:#A73E24;color:#fff;width:100%;min-width:250px;max-width:350px;padding:9px 15px;border:none;margin-bottom:10px;}button.__jsx-style-dynamic-selector:focus{outline:0;}@media only screen and (max-width:420px){.product-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:150px;padding:10px;}img.__jsx-style-dynamic-selector,.product-image.__jsx-style-dynamic-selector{max-width:150px;max-height:150px;}.out-of-stock.__jsx-style-dynamic-selector{margin-top:-10px;}}@media only screen and (max-width:820px){.product-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:250px;padding:20px;margin:20px;}img.__jsx-style-dynamic-selector,.product-image.__jsx-style-dynamic-selector{max-width:250px;max-height:250px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURnQixBQUd1QixBQUlFLEFBTUEsQUFZQSxBQUlELEFBR1EsQUFVZixBQUlJLEFBT0csQUFJQyxBQUtKLEFBUUcsVUEzQmxCLE1BdkNrQixBQWtEQyxBQWlCQSxDQXpDbkIsQUE0QkMsQ0FsRCtDLEFBTWxDLEFBWVksT0FPZCxRQTVCWixBQWtEQyxBQWlCQSxHQXRDVyxPQVBaLElBUWlCLGdCQUNBLEVBM0JNLFNBc0NOLEFBZ0JBLEtBMUJDLFFBM0JBLEtBS00sSUF1QlgsUUEzQmIsSUE0Qm9CLG1CQUNwQixJQVF5QixBQWdCQSw0REFoREwsdUNBaUNOLEFBZ0JBLFlBZkMsQUFnQkEsYUFmZCxBQWdCYSxZQUNiLGlCQW5EaUIsaUJBQzBCLHdDQUNoQyxXQUNBLFdBQ0QsVUFDRixRQUNUIiwiZmlsZSI6Ii9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aG92ZXI6IGZhbHNlLFxuXHRcdH1cblx0XHR0aGlzLnRvZ2dsZUhvdmVyID0gdGhpcy50b2dnbGVIb3Zlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0dG9nZ2xlSG92ZXIoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7aG92ZXI6ICF0aGlzLnN0YXRlLmhvdmVyfSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb2R1Y3R9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCByYXdKc29uID0gcHJvZHVjdC5zaG9ydF9kZXNjcmlwdGlvbjtcblx0XHRjb25zdCBwcm9kdWN0RGVzY3JpcHRpb24gPSByYXdKc29uLnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLFwiXCIpO1xuXHRcdGNvbnN0IHRvZ2dsZUltZyA9IHtcblx0XHRcdG9wYWNpdHk6IHRoaXMuc3RhdGUuaG92ZXIgPyAnMCcgOiAnMScsXG5cdFx0XHRjdXJzb3I6IHRoaXMuc3RhdGUuaG92ZXIgPyAncG9pbnRlcicgOiAnJyxcblx0XHRcdHRyYW5zaXRpb246IHRoaXMuc3RhdGUuaG92ZXIgPyAnZmlsdGVyIC42cywgb3BhY2l0eSAuNnMsIHRyYW5zZm9ybSAuNnMsIC13ZWJraXQtZmlsdGVyIC42cywgLXdlYmtpdC10cmFuc2Zvcm0gLjZzJyA6ICcnXG5cdFx0fVxuXHRcdGNvbnN0IG91dE9mU3RvY2sgPSB7XG5cdFx0XHRvcGFjaXR5OiBwcm9kdWN0LmluX3N0b2NrID8gJzAnIDogJzEnXG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3V0LW9mLXN0b2NrXCIgc3R5bGU9e291dE9mU3RvY2t9PlxuXHRcdFx0XHRcdFx0T1VUIE9GIFNUT0NLXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdGhyZWY9e2AvcHJvZHVjdGB9XG5cdFx0XHRcdFx0XHRhcz17YC9wcm9kdWN0LyR7cHJvZHVjdC5zbHVnfWB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdLnNyY31cblx0XHRcdFx0XHRcdFx0YWx0PVwiUHJvZHVjdCBpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt0b2dnbGVJbWd9XG5cdFx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17dGhpcy50b2dnbGVIb3Zlcn1cblx0XHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXt0aGlzLnRvZ2dsZUhvdmVyfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaGVhZGluZ1wiPlxuXHRcdFx0XHRcdDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XG5cdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDU+XG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhgJHtwcm9kdWN0LmlkfSBhZGRlZCB0byBjYXJ0IWApfT4ke3Byb2R1Y3QucHJpY2V9IOKAlCBBREQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRpbWcsIC5wcm9kdWN0LWltYWdlIHtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogNDUwcHg7XG5cdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiA0NTBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnByb2R1Y3QtaW1hZ2Uge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKCcke3Byb2R1Y3QuaW1hZ2VzWzFdLnNyY30nKTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm91dC1vZi1zdG9jayB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTM1cHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODgpO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxNCU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnByb2R1Y3QtaGVhZGluZyB7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnV0dG9uIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNBNzNFMjQ7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAyNTBweDtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMzUwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA5cHggMTVweDtcblx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJ1dHRvbjpmb2N1cyB7XG5cdFx0XHRcdFx0XHRvdXRsaW5lOiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG5cdFx0XHRcdFx0XHQucHJvZHVjdC1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTUwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpbWcsIC5wcm9kdWN0LWltYWdlIHtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxNTBweDtcblx0XHRcdFx0XHRcdFx0bWF4LWhlaWdodDogMTUwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQub3V0LW9mLXN0b2NrIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcblx0XHRcdFx0XHRcdC5wcm9kdWN0LWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAyNTBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAyMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aW1nLCAucHJvZHVjdC1pbWFnZSB7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMjUwcHg7XG5cdFx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6IDI1MHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiXX0= */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/ProductList.jsx */")));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ })

})
//# sourceMappingURL=shop-freck.js.82a3a731a30b37e397e7.hot-update.js.map