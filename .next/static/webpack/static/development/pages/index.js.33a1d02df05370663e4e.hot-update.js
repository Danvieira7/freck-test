webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var cart_localstorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cart-localstorage */ "./node_modules/cart-localstorage/index.js");
/* harmony import */ var _components_Header_MainHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Header/MainHeader */ "./components/Header/MainHeader.jsx");
/* harmony import */ var _components_Footer_MobileFooter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Footer/MobileFooter */ "./components/Footer/MobileFooter.jsx");
/* harmony import */ var _components_Shop_MobileHero__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Shop/MobileHero */ "./components/Shop/MobileHero.jsx");
/* harmony import */ var _components_Shop_ProductList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Shop/ProductList */ "./components/Shop/ProductList.jsx");
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Cart/Cart */ "./components/Cart/Cart.jsx");




















var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "toggleCart", function () {
      _this.setState({
        show: !_this.state.show
      });
    });

    _this.state = {
      show: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "handleAddToCart",
    value: function handleAddToCart() {
      Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_13__["add"])({
        id: this.product.id,
        name: this.product.name,
        price: this.product.price
      });
      console.log(Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_13__["list"])());
    }
  }, {
    key: "render",
    value: function render(props) {
      var _this2 = this;

      var products = this.props.products;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-806009810"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Header_MainHeader__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-806009810" + " " + "hero-container"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        id: "left-hero",
        className: "jsx-806009810"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        src: "https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2018/10/f-dot.svg",
        alt: "F Dot Logo",
        className: "jsx-806009810"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        id: "carousel",
        className: "jsx-806009810"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Shop_MobileHero__WEBPACK_IMPORTED_MODULE_16__["default"], null), this.state.show ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_18__["default"], {
        toggleCart: this.toggleCart
      }) : null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-806009810" + " " + "product-container"
      }, products.length ? products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Shop_ProductList__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
          product: product,
          key: product.id,
          handleAddToCart: _this2.handleAddToCart,
          toggleCart: _this2.toggleCart
        }));
      }) : ''), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        id: "products-hero",
        className: "jsx-806009810"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Footer_MobileFooter__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "806009810"
      }, ".hero-container.jsx-806009810{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:-5.5px;}#left-hero.jsx-806009810{background:url('https://freckbeauty.com/wp-content/uploads/2018/11/shop-header-left.jpg');background-repeat:no-repeat;background-position:0% 50%;background-size:cover;width:50%;height:720px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#carousel.jsx-806009810{background:url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Sml-Open_Flatlay-Shadow_R__676x676.jpg');background-repeat:no-repeat;background-position:0% 50%;background-size:cover;width:50%;height:720px;}img.jsx-806009810{width:21%;margin-left:30px;}.product-container.jsx-806009810{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:10%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-right:5%;margin-left:5%;}#products-hero.jsx-806009810{background:url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Group-Collection_Flatlay-Shadow_R_1351x901_ImgOptm.jpg');background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:contain;min-height:900px;width:100%;margin-top:10%;}@media only screen and (max-width:820px){.hero-container.jsx-806009810{display:none;}#products-hero.jsx-806009810{background-position:0% 0%;min-height:300px;width:100%;margin-top:0;margin-bottom:-55px;}}@media only screen and (min-width:520px) and (max-width:820px){#products-hero.jsx-806009810{min-height:600px;margin-top:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmVja2Rldi9GcmVjay9kZXBsb3ktdGVzdC9mcmVjay10ZXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFb0IsQUFHMEIsQUFLNkUsQUFVMkMsQUFRM0gsQUFJRyxBQVF3SSxBQVd0SSxBQUdhLEFBU1QsVUFsQ0YsR0F1QmpCLElBWWtCLFNBVEMsQ0F6QnJCLE1BbUNFLFVBVGEsV0FDRSxhQUNPLE9BcERQLEFBMkJBLGFBMEJmLEdBaEQ0Qiw0QkFDRCxhQUxOLEFBMkJOLEVBYmEsWUFSTixDQXNCQyxHQU1LLEdBakM5QixTQWM2QixNQVJqQixVQUNHLEFBMkJjLFdBbkJMLEVBUFQsY0EyQmdCLE1BbkJuQixVQUNHLGFBQ2YsQUFrQjBCLFlBUlIsWUFTQyxJQVJGLEdBcEJJLFVBNkJSLEVBUmIsU0FTaUIsZUFDakIseURBOUJBIiwiZmlsZSI6Ii9Vc2Vycy9mcmVja2Rldi9GcmVjay9kZXBsb3ktdGVzdC9mcmVjay10ZXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgYWRkLCBsaXN0IH0gZnJvbSAnY2FydC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IE1haW5IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvTWFpbkhlYWRlcic7XG5pbXBvcnQgTW9iaWxlRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL01vYmlsZUZvb3Rlcic7XG5pbXBvcnQgTW9iaWxlSGVybyBmcm9tICcuLi9jb21wb25lbnRzL1Nob3AvTW9iaWxlSGVybyc7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9TaG9wL1Byb2R1Y3RMaXN0JztcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydC9DYXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvdzogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vZnJlY2tiZWF1dHkvZHVtbXktZGF0YS9wcm9kdWN0c2AsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICdjYWNoZS1jb250cm9sJzogJ25vLWNhY2hlJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogJ0Jhc2ljIFkydGZNV0UwT0RGa1lUTXpOVGt4TVdaa1kyRTNNV016TWpNNFlUUTROakpoWkdaaVpqZ3lOREUyWVRwamMxODNNMlF3TWpobU16QXdaREl6TW1VNVlqUXpNemhtT1RjM1ltTTVabVUzWW1GbU5qTmpNemt4J1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9kdWN0czogZGF0YVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFkZFRvQ2FydCgpIHtcbiAgICBhZGQoe1xuXHRcdFx0aWQ6IHRoaXMucHJvZHVjdC5pZCxcblx0XHRcdG5hbWU6IHRoaXMucHJvZHVjdC5uYW1lLFxuXHRcdFx0cHJpY2U6IHRoaXMucHJvZHVjdC5wcmljZVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGxpc3QoKSk7XG4gIH1cblxuICB0b2dnbGVDYXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6ICF0aGlzLnN0YXRlLnNob3d9KTtcbiAgfVxuICAgIFxuICByZW5kZXIocHJvcHMpIHtcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TWFpbkhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImxlZnQtaGVyb1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21rMGZyZWNrYmVhdXR5Zndqa3U1LmtpbnN0YWNkbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZi1kb3Quc3ZnXCIgYWx0PVwiRiBEb3QgTG9nb1wiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwiY2Fyb3VzZWxcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2JpbGVIZXJvIC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3cgP1xuICAgICAgICAgIDxDYXJ0XG4gICAgICAgICAgICB0b2dnbGVDYXJ0PXt0aGlzLnRvZ2dsZUNhcnR9XG4gICAgICAgICAgLz4gXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGFpbmVyXCI+XG4gICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIHByb2R1Y3RzLm1hcChcbiAgICAgICAgICAgICAgcHJvZHVjdCA9PlxuICAgICAgICAgICAgICA8UHJvZHVjdExpc3RcbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgaGFuZGxlQWRkVG9DYXJ0PXt0aGlzLmhhbmRsZUFkZFRvQ2FydH1cbiAgICAgICAgICAgICAgICB0b2dnbGVDYXJ0PXt0aGlzLnRvZ2dsZUNhcnR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInByb2R1Y3RzLWhlcm9cIj48L2Rpdj5cbiAgICAgICAgPE1vYmlsZUZvb3RlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhlcm8tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNS41cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNsZWZ0LWhlcm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9zaG9wLWhlYWRlci1sZWZ0LmpwZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjY2Fyb3VzZWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL21rMGZyZWNrYmVhdXR5Zndqa3U1LmtpbnN0YWNkbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDQvRnJlY2tfU21sLU9wZW5fRmxhdGxheS1TaGFkb3dfUl9fNjc2eDY3Ni5qcGcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjElO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcHJvZHVjdHMtaGVybyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vbWswZnJlY2tiZWF1dHlmd2prdTUua2luc3RhY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9GcmVja19Hcm91cC1Db2xsZWN0aW9uX0ZsYXRsYXktU2hhZG93X1JfMTM1MXg5MDFfSW1nT3B0bS5qcGcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcbiAgICAgICAgICAgIC5oZXJvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjcHJvZHVjdHMtaGVybyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC01NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUyMHB4KSBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcbiAgICAgICAgICAgICNwcm9kdWN0cy1oZXJvIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufSJdfQ== */\n/*@ sourceURL=/Users/freckdev/Freck/deploy-test/freck-test/pages/index.js */"));
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
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("https://my-json-server.typicode.com/freckbeauty/dummy-data/products", {
                  mode: 'cors',
                  'cache-control': 'no-cache',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic Y2tfMWE0ODFkYTMzNTkxMWZkY2E3MWMzMjM4YTQ4NjJhZGZiZjgyNDE2YTpjc183M2QwMjhmMzAwZDIzMmU5YjQzMzhmOTc3YmM5ZmU3YmFmNjNjMzkx'
                  }
                });

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

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.33a1d02df05370663e4e.hot-update.js.map