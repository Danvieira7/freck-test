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
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ProductList */ "./components/ProductList.jsx");
/* harmony import */ var _config_server__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/server */ "./config/server.js");















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
        className: "jsx-3519924417"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_MainHeader__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3519924417" + " " + "hero-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3519924417"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2018/11/shop-header-left.jpg",
        className: "jsx-3519924417"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3519924417"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3519924417" + " " + "product-container"
      }, products.length ? products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_ProductList__WEBPACK_IMPORTED_MODULE_12__["default"], {
          product: product,
          key: product.id
        });
      }) : ''), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "products-hero",
        className: "jsx-3519924417"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3519924417"
      }, ".hero-container.jsx-3519924417{margin:0;margin-bottom:-5.5px;}img.jsx-3519924417{max-width:55%;}.product-container.jsx-3519924417{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1000px;margin:0 auto;}#products-hero.jsx-3519924417{background:url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Group-Collection_Flatlay-Shadow_R_1351x901_ImgOptm.jpg');background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:contain;min-height:900px;width:100%;padding-top:10%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvcGFnZXMvc2hvcC1mcmVjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRG9CLEFBR3NCLEFBSUssQUFHRCxBQU13SSxTQVpoSSxLQUl2QixnQkFIQSw0Q0FNaUIseURBQ0UsaUJBQ0gsQ0FJYyxhQUg5QixlQUk2QiwyQkFDRSw2QkFDTCx3QkFDUCxpQkFDTixXQUNLLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvbWlsY2FoY2VudGVuby9mcmVjay9mcmVjay1uZXh0L3BhZ2VzL3Nob3AtZnJlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkhlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0JztcbmltcG9ydCB7IHNlcnZlciB9IGZyb20gJy4uL2NvbmZpZy9zZXJ2ZXInO1xuXG5jbGFzcyBTaG9wRnJlY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3NlcnZlcn0vYXBpL3Byb2R1Y3RzYCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2R1Y3RzOiBkYXRhXG4gICAgfVxuICB9XG4gICAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TWFpbkhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvc2hvcC1oZWFkZXItbGVmdC5qcGdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGFpbmVyXCI+XG4gICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIHByb2R1Y3RzLm1hcChcbiAgICAgICAgICAgICAgcHJvZHVjdCA9PlxuICAgICAgICAgICAgICA8UHJvZHVjdExpc3RcbiAgICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApIDogJyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdHMtaGVyb1wiPjwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGVyby1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTUuNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1NSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgI3Byb2R1Y3RzLWhlcm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL21rMGZyZWNrYmVhdXR5Zndqa3U1LmtpbnN0YWNkbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDQvRnJlY2tfR3JvdXAtQ29sbGVjdGlvbl9GbGF0bGF5LVNoYWRvd19SXzEzNTF4OTAxX0ltZ09wdG0uanBnJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA5MDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBTaG9wRnJlY2s7Il19 */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/pages/shop-freck.js */"));
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
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("".concat(_config_server__WEBPACK_IMPORTED_MODULE_13__["server"], "/api/products"));

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
//# sourceMappingURL=shop-freck.js.41ce0f51ec4022dd536f.hot-update.js.map