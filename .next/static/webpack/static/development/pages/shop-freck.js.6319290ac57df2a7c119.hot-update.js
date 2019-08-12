webpackHotUpdate("static/development/pages/shop-freck.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Header_MainHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header/MainHeader */ "./components/Header/MainHeader.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Shop_MobileHero__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Shop/MobileHero */ "./components/Shop/MobileHero.jsx");
/* harmony import */ var _components_Shop_ProductList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Shop/ProductList */ "./components/Shop/ProductList.jsx");














 // import { server } from '../config/server';

var ShopFreck =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ShopFreck, _Component);

  function ShopFreck(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ShopFreck);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ShopFreck).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ShopFreck, [{
    key: "render",
    value: function render() {
      var products = this.props.products;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-806009810"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Header_MainHeader__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-806009810" + " " + "hero-container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "left-hero",
        className: "jsx-806009810"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2018/10/f-dot.svg",
        alt: "F Dot Logo",
        className: "jsx-806009810"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "carousel",
        className: "jsx-806009810"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Shop_MobileHero__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-806009810" + " " + "product-container"
      }, products.length ? products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Shop_ProductList__WEBPACK_IMPORTED_MODULE_14__["default"], {
          product: product,
          key: product.id
        });
      }) : ''), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "products-hero",
        className: "jsx-806009810"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "806009810"
      }, ".hero-container.jsx-806009810{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:-5.5px;}#left-hero.jsx-806009810{background:url('https://freckbeauty.com/wp-content/uploads/2018/11/shop-header-left.jpg');background-repeat:no-repeat;background-position:0% 50%;background-size:cover;width:50%;height:720px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#carousel.jsx-806009810{background:url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Sml-Open_Flatlay-Shadow_R__676x676.jpg');background-repeat:no-repeat;background-position:0% 50%;background-size:cover;width:50%;height:720px;}img.jsx-806009810{width:21%;margin-left:30px;}.product-container.jsx-806009810{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:10%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-right:5%;margin-left:5%;}#products-hero.jsx-806009810{background:url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Group-Collection_Flatlay-Shadow_R_1351x901_ImgOptm.jpg');background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:contain;min-height:900px;width:100%;margin-top:10%;}@media only screen and (max-width:820px){.hero-container.jsx-806009810{display:none;}#products-hero.jsx-806009810{background-position:0% 0%;min-height:300px;width:100%;margin-top:0;margin-bottom:-55px;}}@media only screen and (min-width:520px) and (max-width:820px){#products-hero.jsx-806009810{min-height:600px;margin-top:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvcGFnZXMvc2hvcC1mcmVjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RG9CLEFBRzBCLEFBSzZFLEFBVTJDLEFBUTNILEFBSUcsQUFRd0ksQUFXdEksQUFHYSxBQVNULFVBbENGLEdBdUJqQixJQVlrQixTQVRDLENBekJyQixNQW1DRSxVQVRhLFdBQ0UsYUFDTyxPQXBEUCxBQTJCQSxhQTBCZixHQWhENEIsNEJBQ0QsYUFMTixBQTJCTixFQWJhLFlBUk4sQ0FzQkMsR0FNSyxHQWpDOUIsU0FjNkIsTUFSakIsVUFDRyxBQTJCYyxXQW5CTCxFQVBULGNBMkJnQixNQW5CbkIsVUFDRyxhQUNmLEFBa0IwQixZQVJSLFlBU0MsSUFSRixHQXBCSSxVQTZCUixFQVJiLFNBU2lCLGVBQ2pCLHlEQTlCQSIsImZpbGUiOiIvVXNlcnMvbWlsY2FoY2VudGVuby9mcmVjay9mcmVjay1uZXh0L3BhZ2VzL3Nob3AtZnJlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL01haW5IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTW9iaWxlSGVybyBmcm9tICcuLi9jb21wb25lbnRzL1Nob3AvTW9iaWxlSGVybyc7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9TaG9wL1Byb2R1Y3RMaXN0Jztcbi8vIGltcG9ydCB7IHNlcnZlciB9IGZyb20gJy4uL2NvbmZpZy9zZXJ2ZXInO1xuXG5jbGFzcyBTaG9wRnJlY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1qc29uL3djL3YzL3Byb2R1Y3RzYCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgJ2NhY2hlLWNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCYXNpYyBZMnRmTVdFME9ERmtZVE16TlRreE1XWmtZMkUzTVdNek1qTTRZVFE0TmpKaFpHWmlaamd5TkRFMllUcGpjMTgzTTJRd01qaG1NekF3WkRJek1tVTVZalF6TXpobU9UYzNZbU01Wm1VM1ltRm1Oak5qTXpreCdcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvZHVjdHM6IGRhdGFcbiAgICB9XG4gIH1cbiAgICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxNYWluSGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwibGVmdC1oZXJvXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWswZnJlY2tiZWF1dHlmd2prdTUua2luc3RhY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9mLWRvdC5zdmdcIiBhbHQ9XCJGIERvdCBMb2dvXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vYmlsZUhlcm8gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtwcm9kdWN0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICBwcm9kdWN0cy5tYXAoXG4gICAgICAgICAgICAgIHByb2R1Y3QgPT5cbiAgICAgICAgICAgICAgPFByb2R1Y3RMaXN0XG4gICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInByb2R1Y3RzLWhlcm9cIj48L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhlcm8tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNS41cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNsZWZ0LWhlcm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMS9zaG9wLWhlYWRlci1sZWZ0LmpwZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjY2Fyb3VzZWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL21rMGZyZWNrYmVhdXR5Zndqa3U1LmtpbnN0YWNkbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDQvRnJlY2tfU21sLU9wZW5fRmxhdGxheS1TaGFkb3dfUl9fNjc2eDY3Ni5qcGcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjElO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcHJvZHVjdHMtaGVybyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vbWswZnJlY2tiZWF1dHlmd2prdTUua2luc3RhY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9GcmVja19Hcm91cC1Db2xsZWN0aW9uX0ZsYXRsYXktU2hhZG93X1JfMTM1MXg5MDFfSW1nT3B0bS5qcGcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcbiAgICAgICAgICAgIC5oZXJvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjcHJvZHVjdHMtaGVybyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC01NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUyMHB4KSBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcbiAgICAgICAgICAgICNwcm9kdWN0cy1oZXJvIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgU2hvcEZyZWNrOyJdfQ== */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/pages/shop-freck.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _headers;

        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("https://freckbeauty.com/wp-json/wc/v3/products", {
                  mode: 'cors',
                  'cache-control': 'no-cache',
                  headers: (_headers = {
                    'Content-Type': 'application/json'
                  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_headers, "Content-Type", 'application/x-www-form-urlencoded'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_headers, "Authorization", 'Basic Y2tfMWE0ODFkYTMzNTkxMWZkY2E3MWMzMjM4YTQ4NjJhZGZiZjgyNDE2YTpjc183M2QwMjhmMzAwZDIzMmU5YjQzMzhmOTc3YmM5ZmU3YmFmNjNjMzkx'), _headers)
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

  return ShopFreck;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ShopFreck);

/***/ })

})
//# sourceMappingURL=shop-freck.js.6319290ac57df2a7c119.hot-update.js.map