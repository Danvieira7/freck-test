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
/* harmony import */ var _FreeShippingBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FreeShippingBar */ "./components/Cart/FreeShippingBar.jsx");
/* harmony import */ var _CartItems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CartItems */ "./components/Cart/CartItems.jsx");













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
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_CartItems__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
      }, "#modal.jsx-1465398706{height:100vh;width:100vw;position:fixed;z-index:1;top:0;left:0;}#cart.jsx-1465398706{background-color:white;text-align:center;height:100%;width:100%;padding-top:10%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmVja2Rldi9GcmVjay9kZXBsb3ktdGVzdC9mcmVjay10ZXN0L2NvbXBvbmVudHMvQ2FydC9DYXJ0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ29CLEFBRzBCLEFBUVUsYUFQWCxVQVFNLEVBUEgsZUFDTCxDQU9FLFNBTk4sR0FPSyxHQU5KLE9BQ1QsQ0FNa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9mcmVja2Rldi9GcmVjay9kZXBsb3ktdGVzdC9mcmVjay10ZXN0L2NvbXBvbmVudHMvQ2FydC9DYXJ0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsaXN0LCB0b3RhbCwgZGVzdHJveSB9IGZyb20gJ2NhcnQtbG9jYWxzdG9yYWdlJ1xuaW1wb3J0IEZyZWVTaGlwcGluZ0JhciBmcm9tICcuL0ZyZWVTaGlwcGluZ0Jhcic7XG5pbXBvcnQgQ2FydEl0ZW1zIGZyb20gJy4vQ2FydEl0ZW1zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50b2dnbGVDYXJ0KCk7XG5cdH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2FydFRvdGFsID0gdG90YWwoKTtcbiAgICBsZXQgY2FydEl0ZW1zID0gbGlzdCgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibW9kYWxcIj5cbiAgICAgICAgPGRpdiBpZD1cImNhcnRcIj5cbiAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA/IChcbiAgICAgICAgICAgIGNhcnRJdGVtcy5tYXAoXG4gICAgICAgICAgICAgIGl0ZW0gPT5cbiAgICAgICAgICAgICAgPENhcnRJdGVtc1xuICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiAnJ31cbiAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgVG90YWw6ICR7Y2FydFRvdGFsfVxuICAgICAgICAgIDxici8+PGJyLz48YnIvPjxici8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZXN0cm95fT5DTEVBUiBDQVJUPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5DTE9TRSBDQVJUPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI21vZGFsIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2NhcnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19 */\n/*@ sourceURL=/Users/freckdev/Freck/deploy-test/freck-test/components/Cart/Cart.jsx */"));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.9a20a2e9c3b9b19f1541.hot-update.js.map