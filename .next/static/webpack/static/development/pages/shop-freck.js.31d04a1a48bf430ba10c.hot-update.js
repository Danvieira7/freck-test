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
/* harmony import */ var _components_MainHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MainHeader */ "./components/MainHeader.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Shop_MobileHero__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Shop/MobileHero */ "./components/Shop/MobileHero.jsx");
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ProductList */ "./components/ProductList.jsx");
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
        className: "jsx-373338605"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_MainHeader__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-373338605" + " " + "hero-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "left-hero",
        className: "jsx-373338605"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2018/10/f-dot.svg",
        alt: "F Dot Logo",
        className: "jsx-373338605"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "carousel",
        className: "jsx-373338605"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Shop_MobileHero__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-373338605" + " " + "product-container"
      }, products.length ? products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_ProductList__WEBPACK_IMPORTED_MODULE_13__["default"], {
          product: product,
          key: product.id
        });
      }) : ''), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "products-hero",
        className: "jsx-373338605"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "373338605"
      }, ".hero-container.jsx-373338605{margin-bottom:-5.5px;}#left-hero.jsx-373338605{background:url('https://freckbeauty.com/wp-content/uploads/2018/11/shop-header-left.jpg');background-repeat:no-repeat;background-position:0% 50%;background-size:cover;width:50%;height:720px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#carousel.jsx-373338605{background:url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Sml-Open_Flatlay-Shadow_R__676x676.jpg');}img.jsx-373338605{width:21%;margin-left:30px;}.product-container.jsx-373338605{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:10%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-right:5%;margin-left:5%;}#products-hero.jsx-373338605{background:url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Group-Collection_Flatlay-Shadow_R_1351x901_ImgOptm.jpg');background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:contain;min-height:900px;width:100%;margin-top:10%;}@media only screen and (max-width:820px){.hero-container.jsx-373338605{display:none;}#products-hero.jsx-373338605{background-position:0% 0%;min-height:300px;width:100%;margin-top:0;margin-bottom:-55px;}}@media only screen and (min-width:520px) and (max-width:820px){#products-hero.jsx-373338605{min-height:600px;margin-top:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvcGFnZXMvc2hvcC1mcmVjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRG9CLEFBR2tDLEFBR3FFLEFBVTJDLEFBSTNILEFBSUcsQUFRd0ksQUFXdEksQUFHYSxBQVNULFVBbENGLEdBdUJqQixJQVlrQixJQXBEcEIsS0EyQ3FCLENBekJyQixNQW1DRSxVQVRhLFdBQ0UsYUFDTyxPQXpCUCxhQTBCZixHQTVDNEIsNEJBQ0QsYUFrQlosRUFSakIsWUFUd0IsQ0FrQkMsR0FNSyxrQkF2QmxCLFVBQ0csQUF1QmMsYUF0QmQsY0F1QmdCLDZCQUNMLFlBUlIsWUFTQyxJQVJGLEdBaEJJLFVBeUJSLEVBUmIsU0FTaUIsZUFDakIseURBMUJBIiwiZmlsZSI6Ii9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvcGFnZXMvc2hvcC1mcmVjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IE1vYmlsZUhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9TaG9wL01vYmlsZUhlcm8nO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QnO1xuaW1wb3J0IHsgc2VydmVyIH0gZnJvbSAnLi4vY29uZmlnL3NlcnZlcic7XG5cbmNsYXNzIFNob3BGcmVjayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyfS9hcGkvcHJvZHVjdHNgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvZHVjdHM6IGRhdGFcbiAgICB9XG4gIH1cbiAgICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxNYWluSGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwibGVmdC1oZXJvXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWswZnJlY2tiZWF1dHlmd2prdTUua2luc3RhY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9mLWRvdC5zdmdcIiBhbHQ9XCJGIERvdCBMb2dvXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vYmlsZUhlcm8gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtwcm9kdWN0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICBwcm9kdWN0cy5tYXAoXG4gICAgICAgICAgICAgIHByb2R1Y3QgPT5cbiAgICAgICAgICAgICAgPFByb2R1Y3RMaXN0XG4gICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInByb2R1Y3RzLWhlcm9cIj48L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhlcm8tY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC01LjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2xlZnQtaGVybyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL3Nob3AtaGVhZGVyLWxlZnQuanBnJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDcyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICNjYXJvdXNlbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vbWswZnJlY2tiZWF1dHlmd2prdTUua2luc3RhY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9GcmVja19TbWwtT3Blbl9GbGF0bGF5LVNoYWRvd19SX182NzZ4Njc2LmpwZycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjElO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcHJvZHVjdHMtaGVybyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vbWswZnJlY2tiZWF1dHlmd2prdTUua2luc3RhY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9GcmVja19Hcm91cC1Db2xsZWN0aW9uX0ZsYXRsYXktU2hhZG93X1JfMTM1MXg5MDFfSW1nT3B0bS5qcGcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcbiAgICAgICAgICAgIC5oZXJvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjcHJvZHVjdHMtaGVybyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC01NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUyMHB4KSBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcbiAgICAgICAgICAgICNwcm9kdWN0cy1oZXJvIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgU2hvcEZyZWNrOyJdfQ== */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/pages/shop-freck.js */"));
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
//# sourceMappingURL=shop-freck.js.31d04a1a48bf430ba10c.hot-update.js.map