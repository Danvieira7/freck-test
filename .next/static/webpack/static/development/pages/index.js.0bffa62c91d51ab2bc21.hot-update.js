webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Cart/Cart.jsx":
/*!**********************************!*\
  !*** ./components/Cart/Cart.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var cart_localstorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cart-localstorage */ "./node_modules/cart-localstorage/index.js");
/* harmony import */ var _CartItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CartItems */ "./components/Cart/CartItems.jsx");












var Cart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Cart, _Component);

  function Cart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cart).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function () {
      _this.props.toggleCart();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cart, [{
    key: "render",
    value: function render() {
      var cartTotal = Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_9__["total"])();
      var cartItems = Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_9__["list"])();
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "modal",
        className: "jsx-1465398706"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "cart",
        className: "jsx-1465398706"
      }, cartItems.length ? cartItems.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_CartItems__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: item,
          key: item.id
        });
      }) : '', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-1465398706"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-1465398706"
      }), "Total: $", cartTotal, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-1465398706"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-1465398706"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-1465398706"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-1465398706"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: cart_localstorage__WEBPACK_IMPORTED_MODULE_9__["destroy"],
        className: "jsx-1465398706"
      }, "CLEAR CART"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleClick,
        className: "jsx-1465398706"
      }, "CLOSE CART")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1465398706"
      }, "#modal.jsx-1465398706{height:100vh;width:100vw;position:fixed;z-index:1;top:0;left:0;}#cart.jsx-1465398706{background-color:white;text-align:center;height:100%;width:100%;padding-top:10%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmVja2Rldi9GcmVjay9kZXBsb3ktdGVzdC9mcmVjay10ZXN0L2NvbXBvbmVudHMvQ2FydC9DYXJ0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ29CLEFBRzBCLEFBUVUsYUFQWCxVQVFNLEVBUEgsZUFDTCxDQU9FLFNBTk4sR0FPSyxHQU5KLE9BQ1QsQ0FNa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9mcmVja2Rldi9GcmVjay9kZXBsb3ktdGVzdC9mcmVjay10ZXN0L2NvbXBvbmVudHMvQ2FydC9DYXJ0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsaXN0LCB0b3RhbCwgZGVzdHJveSB9IGZyb20gJ2NhcnQtbG9jYWxzdG9yYWdlJ1xuaW1wb3J0IENhcnRJdGVtcyBmcm9tICcuL0NhcnRJdGVtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMudG9nZ2xlQ2FydCgpO1xuXHR9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNhcnRUb3RhbCA9IHRvdGFsKCk7XG4gICAgbGV0IGNhcnRJdGVtcyA9IGxpc3QoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIm1vZGFsXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJjYXJ0XCI+XG4gICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPyAoXG4gICAgICAgICAgICBjYXJ0SXRlbXMubWFwKFxuICAgICAgICAgICAgICBpdGVtID0+XG4gICAgICAgICAgICAgIDxDYXJ0SXRlbXNcbiAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApIDogJyd9XG4gICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgIFRvdGFsOiAke2NhcnRUb3RhbH1cbiAgICAgICAgICA8YnIvPjxici8+PGJyLz48YnIvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVzdHJveX0+Q0xFQVIgQ0FSVDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+Q0xPU0UgQ0FSVDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNtb2RhbCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICNjYXJ0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/freckdev/Freck/deploy-test/freck-test/components/Cart/Cart.jsx */"));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.0bffa62c91d51ab2bc21.hot-update.js.map