module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart/Cart.jsx":
/*!**********************************!*\
  !*** ./components/Cart/Cart.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var cart_localstorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cart-localstorage */ "cart-localstorage");
/* harmony import */ var cart_localstorage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cart_localstorage__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _FreeShippingBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FreeShippingBar */ "./components/Cart/FreeShippingBar.jsx");
/* harmony import */ var _CartItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CartItems */ "./components/Cart/CartItems.jsx");














var Cart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Cart, _Component);

  function Cart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Cart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Cart).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleClick", function () {
      _this.props.toggleCart();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubTotal", function (price) {
      var montante = Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_10__["total"])() + price;

      _this.setState({
        subtotal: montante
      });

      console.log(_this.state.subtotal);
    });

    _this.state = {
      list: Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_10__["list"])(),
      subtotal: Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_10__["total"])()
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Cart, [{
    key: "deleteItem",
    value: function deleteItem() {
      var item = this.item.id;
      Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_10__["remove"])(item); // console.log(this.item.price * this.item.quantity)

      return Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_10__["total"])(this.subtotal, this.item.price);
    }
  }, {
    key: "decrementItem",
    value: function decrementItem() {
      var item = this.item.id;
      Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_10__["update"])(item, 'quantity', Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_10__["get"])(item).quantity - 1);
    }
  }, {
    key: "incrementItem",
    value: function incrementItem() {
      var item = this.item.id;
      Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_10__["update"])(item, 'quantity', Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_10__["get"])(item).quantity + 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var cartItems = this.state.list;
      var subtotal = Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_10__["total"])();
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "modal",
        className: "jsx-1807986633"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "cart",
        className: "jsx-1807986633"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        onClick: cart_localstorage__WEBPACK_IMPORTED_MODULE_10__["destroy"],
        className: "jsx-1807986633"
      }, "destroy"), "\xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        onClick: this.handleClick,
        className: "jsx-1807986633"
      }, "close"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_FreeShippingBar__WEBPACK_IMPORTED_MODULE_11__["default"], this.state), cartItems.length ? cartItems.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_CartItems__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this2.state, {
          item: item,
          key: item.id,
          deleteItem: _this2.deleteItem,
          decrementItem: _this2.decrementItem,
          incrementItem: _this2.incrementItem,
          handleSubTotal: _this2.handleSubTotal
        }));
      }) : '', react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        className: "jsx-1807986633"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        className: "jsx-1807986633"
      }), "Subtotal: $", subtotal, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        className: "jsx-1807986633"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        className: "jsx-1807986633"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        className: "jsx-1807986633"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        className: "jsx-1807986633"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1807986633"
      }, "#modal.jsx-1807986633{height:100%;width:100%;position:fixed;z-index:1;top:0;left:0;overflow:auto;background-color:rgb(244,245,243);border:15px solid #e5d9c9;}#cart.jsx-1807986633{background-color:rgb(244,245,243);text-align:center;height:100%;width:100%;padding-top:5%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvQ2FydC9DYXJ0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRW9CLEFBR3lCLEFBV3dCLFlBVnpCLFdBQ0ksV0FVRyxJQVRSLFVBQ0osSUFTTSxFQVJMLE9BQ08sR0FRSCxXQVB5QixBQVFyQixlQUNqQixtQkFSNEIsMEJBQzVCIiwiZmlsZSI6Ii9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvQ2FydC9DYXJ0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsaXN0LCB0b3RhbCwgcmVtb3ZlLCBkZXN0cm95LCB1cGRhdGUsIGdldCB9IGZyb20gJ2NhcnQtbG9jYWxzdG9yYWdlJztcbmltcG9ydCBGcmVlU2hpcHBpbmdCYXIgZnJvbSAnLi9GcmVlU2hpcHBpbmdCYXInO1xuaW1wb3J0IENhcnRJdGVtcyBmcm9tICcuL0NhcnRJdGVtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdDogbGlzdCgpLFxuICAgICAgc3VidG90YWw6IHRvdGFsKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnRvZ2dsZUNhcnQoKTtcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0oKSB7XG4gICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW0uaWQ7XG4gICAgcmVtb3ZlKGl0ZW0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXRlbS5wcmljZSAqIHRoaXMuaXRlbS5xdWFudGl0eSlcbiAgICByZXR1cm4gdG90YWwodGhpcy5zdWJ0b3RhbCwgdGhpcy5pdGVtLnByaWNlKTtcbiAgfVxuXG4gIGRlY3JlbWVudEl0ZW0oKSB7XG4gICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW0uaWQ7XG4gICAgdXBkYXRlKGl0ZW0sICdxdWFudGl0eScsIGdldChpdGVtKS5xdWFudGl0eSAtIDEpO1xuICB9XG5cbiAgaW5jcmVtZW50SXRlbSgpIHtcbiAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbS5pZDtcbiAgICB1cGRhdGUoaXRlbSwgJ3F1YW50aXR5JywgZ2V0KGl0ZW0pLnF1YW50aXR5ICsgMSk7XG4gIH1cbiAgaGFuZGxlU3ViVG90YWwgPSAocHJpY2UpID0+IHtcbiAgICBsZXQgbW9udGFudGUgPSB0b3RhbCgpICsgcHJpY2U7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJ0b3RhbDogbW9udGFudGVcbiAgICB9KSBcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnN1YnRvdGFsKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2FydEl0ZW1zID0gdGhpcy5zdGF0ZS5saXN0O1xuICAgIGxldCBzdWJ0b3RhbCA9IHRvdGFsKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJtb2RhbFwiPlxuICAgICAgICA8ZGl2IGlkPVwiY2FydFwiPlxuICAgICAgICAgIHsvKiBETyBOT1QgREVMRVRFIFRIRSBORVhUIFRXTyBMSU5FUyEgRm9yIGRldiBwdXJwb3NlcyBvbmx5LiAqL31cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Rlc3Ryb3l9PmRlc3Ryb3k8L2J1dHRvbj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PmNsb3NlPC9idXR0b24+XG4gICAgICAgICAgPEZyZWVTaGlwcGluZ0JhclxuICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA/IChcbiAgICAgICAgICAgIGNhcnRJdGVtcy5tYXAoXG4gICAgICAgICAgICAgIGl0ZW0gPT5cbiAgICAgICAgICAgICAgPENhcnRJdGVtc1xuICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxuICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW09e3RoaXMuZGVsZXRlSXRlbX1cbiAgICAgICAgICAgICAgICBkZWNyZW1lbnRJdGVtPXt0aGlzLmRlY3JlbWVudEl0ZW19XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50SXRlbT17dGhpcy5pbmNyZW1lbnRJdGVtfVxuICAgICAgICAgICAgICAgIGhhbmRsZVN1YlRvdGFsPXt0aGlzLmhhbmRsZVN1YlRvdGFsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiAnJ31cbiAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgU3VidG90YWw6ICR7c3VidG90YWx9XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjbW9kYWwge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQ1LCAyNDMpO1xuICAgICAgICAgICAgYm9yZGVyOiAxNXB4IHNvbGlkICNlNWQ5Yzk7XG4gICAgICAgICAgfVxuICAgICAgICAgICNjYXJ0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDI0NSwgMjQzKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/components/Cart/Cart.jsx */"));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ }),

/***/ "./components/Cart/CartItems.jsx":
/*!***************************************!*\
  !*** ./components/Cart/CartItems.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartItems; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var cart_localstorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cart-localstorage */ "cart-localstorage");
/* harmony import */ var cart_localstorage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cart_localstorage__WEBPACK_IMPORTED_MODULE_9__);











var CartItems =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CartItems, _Component);

  function CartItems(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CartItems);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CartItems).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDelete", function () {
      _this.props.deleteItem();

      _this.setState(function (prevState) {
        return {
          deleted: !prevState.deleted
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDecrement", function () {
      var quantity = _this.props.item.quantity;

      if (quantity - 1 === 0) {
        Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_9__["remove"])(_this.props.item.id);

        _this.setState(function (prevState) {
          return {
            deleted: !prevState.deleted
          };
        });
      } else {
        _this.props.decrementItem();

        _this.setState({
          list: Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_9__["list"])(),
          subtotal: Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_9__["total"])() - _this.props.item.price
        });

        _this.props.item.quantity-- - 1;
      }

      _this.props.handleSubTotal(_this.props.item.price); // this.props.item.price

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleIncrement", function () {
      _this.props.incrementItem();

      _this.setState({
        list: Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_9__["list"])(),
        subtotal: Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_9__["total"])() + _this.props.item.price
      });
      _this.props.item.quantity++ + 1; // this.handleSubTotal(this.props.item.price)

      _this.props.handleSubTotal(_this.props.item.price);
    });

    _this.state = {
      deleted: false,
      decrement: _this.props.item.price * _this.props.item.quantity
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CartItems, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      var style = {
        display: this.state.deleted ? 'none' : 'flex'
      };
      var quantity = item.quantity;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: style,
        className: "jsx-2128679242" + " " + "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2128679242" + " " + "imgComp"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        onClick: this.handleDelete,
        className: "jsx-2128679242" + " " + "far fa-times-circle"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: item.image,
        className: "jsx-2128679242" + " " + "img"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2128679242" + " " + "descComp"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2128679242" + " " + "name"
      }, " ", item.name, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2128679242" + " " + "short"
      }, " ", item.short_description, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2128679242" + " " + "price"
      }, " $", item.price, " ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2128679242" + " " + "qtyComp"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleDecrement,
        className: "jsx-2128679242"
      }, "-"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "input",
        type: "text",
        min: "1",
        placeholder: quantity,
        className: "jsx-2128679242"
      }, quantity), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleIncrement,
        className: "jsx-2128679242"
      }, "+")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2128679242"
      }, ".item.jsx-2128679242{background-color:rgb(244,245,243);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:168px;}.name.jsx-2128679242{font-family:Arial;font-size:14px;font-weight:bold;font-style:italic;}.short.jsx-2128679242,.price.jsx-2128679242{font-family:Arial;font-size:12px;font-style:italic;}#input.jsx-2128679242{color:black;width:25px;height:19px;border:#BAB9B3 2px solid;text-align:center;margin-top:-35px;}input.jsx-2128679242:focus{outline:none;}.jsx-2128679242::-webkit-input-placeholder{color:#000;}.jsx-2128679242::-moz-placeholder{color:#000;}.jsx-2128679242:-ms-input-placeholder{color:#000;}.jsx-2128679242::placeholder{color:#000;}button.jsx-2128679242{margin-top:-35px;width:25px;height:19px;background-color:#BAB9B3;color:white;border:#BAB9B3 2px solid;font-size:13px;}button.jsx-2128679242:focus{outline:none;}.far.jsx-2128679242{margin-left:-47px;margin-top:-15px;font-size:15px;color:#BAB9B3;}.imgComp.jsx-2128679242{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:30%;}.img.jsx-2128679242{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;max-height:60px;max-width:60px;width:100%;width:100%;border-radius:50%;}.descComp.jsx-2128679242{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:left;width:40%;}.qtyComp.jsx-2128679242{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:30% height:70%;top:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvQ2FydC9DYXJ0SXRlbXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGb0IsQUFHaUQsQUFLbEIsQUFNQSxBQUtOLEFBUUMsQUFHRixBQUdNLEFBU0osQUFHSyxBQU1MLEFBT0EsQUFTQSxBQU9BLFdBM0NmLENBWGEsQ0FRYixBQWVBLElBVGEsQ0F6QkksQUFNQSxBQStCRSxLQXpCTCxLQWNBLEtBekJLLEFBTUMsQ0FaTCxDQWtCWSxBQXlCVixLQVhVLFVBekJQLEFBcUNKLENBL0JoQixTQU1vQixJQTBCcEIsQ0FaYyxHQXpCZCxNQXdDd0IsQUFPQyxBQVNELEFBT0gsR0FyQ00sQ0FkUixpQkFDbkIsT0FjaUIsTUFsQ0YsU0FtQ2YsSUFsQ0EsK0JBK0N5QixBQWdCQSxlQVFaLE1BakJLLGVBa0JQLENBakJNLFFBa0JqQixPQWpCYSxXQUNBLFdBQ08sa0JBQ3BCLE9BWHFCLEFBZ0JILGdCQUVuQixVQUFDLG1FQWhCRCxVQUFDIiwiZmlsZSI6Ii9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvQ2FydC9DYXJ0SXRlbXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGxpc3QsIHJlbW92ZSwgdG90YWwgfSBmcm9tICdjYXJ0LWxvY2Fsc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkZWxldGVkOiBmYWxzZSxcbiAgICAgIGRlY3JlbWVudDogdGhpcy5wcm9wcy5pdGVtLnByaWNlICogdGhpcy5wcm9wcy5pdGVtLnF1YW50aXR5XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGVsZXRlSXRlbSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24ocHJldlN0YXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWxldGVkOiAhcHJldlN0YXRlLmRlbGV0ZWQsXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBcbiAgaGFuZGxlRGVjcmVtZW50ID0gKCkgPT4ge1xuICAgIGxldCBxdWFudGl0eSA9IHRoaXMucHJvcHMuaXRlbS5xdWFudGl0eTtcbiAgICBpZiAoKHF1YW50aXR5IC0gMSkgPT09IDAgKSB7XG4gICAgICByZW1vdmUodGhpcy5wcm9wcy5pdGVtLmlkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24ocHJldlN0YXRlKSB7XG4gICAgICAgIHJldHVybiB7IGRlbGV0ZWQ6ICFwcmV2U3RhdGUuZGVsZXRlZH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmRlY3JlbWVudEl0ZW0oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgICAgbGlzdDogbGlzdCgpLFxuICAgICAgICBzdWJ0b3RhbDogdG90YWwoKSAtIHRoaXMucHJvcHMuaXRlbS5wcmljZVxuICAgICAgfSlcbiAgICAgIHRoaXMucHJvcHMuaXRlbS5xdWFudGl0eS0tIC0gMTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJUb3RhbCh0aGlzLnByb3BzLml0ZW0ucHJpY2UpXG4gICAgLy8gdGhpcy5wcm9wcy5pdGVtLnByaWNlXG4gIH1cbiAgXG4gIGhhbmRsZUluY3JlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmluY3JlbWVudEl0ZW0oKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxpc3Q6IGxpc3QoKSxcbiAgICAgIHN1YnRvdGFsOiB0b3RhbCgpICsgdGhpcy5wcm9wcy5pdGVtLnByaWNlXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLml0ZW0ucXVhbnRpdHkrKyArIDE7XG4gICAgLy8gdGhpcy5oYW5kbGVTdWJUb3RhbCh0aGlzLnByb3BzLml0ZW0ucHJpY2UpXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJUb3RhbCh0aGlzLnByb3BzLml0ZW0ucHJpY2UpXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBpdGVtIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlID0ge2Rpc3BsYXk6IHRoaXMuc3RhdGUuZGVsZXRlZCA/ICdub25lJyA6ICdmbGV4JyB9O1xuICAgIGxldCBxdWFudGl0eSA9IGl0ZW0ucXVhbnRpdHk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nQ29tcFwiPlxuICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFyIGZhLXRpbWVzLWNpcmNsZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVsZXRlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdcIiBzcmM9e2l0ZW0uaW1hZ2V9PjwvaW1nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY0NvbXBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj4ge2l0ZW0ubmFtZX0gPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2hvcnRcIj4ge2l0ZW0uc2hvcnRfZGVzY3JpcHRpb259IDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+ICR7aXRlbS5wcmljZX0gPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXR5Q29tcFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZURlY3JlbWVudH0+LTwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBpZD1cImlucHV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3F1YW50aXR5fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cXVhbnRpdHl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVJbmNyZW1lbnR9Pis8L2J1dHRvbj4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNDUsIDI0Myk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNjhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zaG9ydCwgLnByaWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICB9XG4gICAgICAgICAgI2lucHV0IHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAjQkFCOUIzIDJweCBzb2xpZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dDpmb2N1c3tcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JBQjlCMztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogI0JBQjlCMyAycHggc29saWQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmFyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNDdweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNCQUI5QjM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWdDb21wIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDMwJVxuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVzY0NvbXAge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogNDAlXG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdHlDb21wIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDMwJVxuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/components/Cart/CartItems.jsx */"));
    }
  }]);

  return CartItems;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./components/Cart/FreeShippingBar.jsx":
/*!*********************************************!*\
  !*** ./components/Cart/FreeShippingBar.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FreeShippingBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cart_localstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cart-localstorage */ "cart-localstorage");
/* harmony import */ var cart_localstorage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cart_localstorage__WEBPACK_IMPORTED_MODULE_7__);









var FreeShippingBar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FreeShippingBar, _Component);

  function FreeShippingBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FreeShippingBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FreeShippingBar).call(this, props));
    _this.state = {
      qualifies: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FreeShippingBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('did mount: ' + Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_7__["total"])());

      if (Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_7__["total"])() >= 75) {
        this.setState(function (prevState) {
          return {
            qualifies: !prevState.qualifies
          };
        });
      } else {
        return Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_7__["total"])();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_7__["total"])() < 75) {
        this.setState(function (prevState) {
          return {
            qualifies: !prevState.qualifies
          };
        });
      }
    }
  }, {
    key: "handleTotal",
    value: function handleTotal() {
      return Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_7__["total"])();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "container",
        className: "jsx-1815833290"
      }, this.state.qualifies ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-1815833290"
      }, "You've unlocked free shipping!") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-1815833290"
      }, "You're on your way to free shipping!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "bar",
        className: "jsx-1815833290"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        className: "jsx-1815833290"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        id: "spend",
        className: "jsx-1815833290"
      }, this.state.qualifies ? '$75' : '$' + this.handleTotal()), " of $75", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        className: "jsx-1815833290"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        className: "jsx-1815833290"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1815833290"
      }, "#container.jsx-1815833290{padding-top:5%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvQ2FydC9GcmVlU2hpcHBpbmdCYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDb0IsQUFHNEIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2dpc2VsbGFkZW1vcmFpcy9jb2RlL2ZyZWNrLXRlc3QvY29tcG9uZW50cy9DYXJ0L0ZyZWVTaGlwcGluZ0Jhci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG90YWwgfSBmcm9tICdjYXJ0LWxvY2Fsc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyZWVTaGlwcGluZ0JhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHF1YWxpZmllczogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZygnZGlkIG1vdW50OiAnKyB0b3RhbCgpKTtcbiAgICBpZiAodG90YWwoKSA+PSA3NSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbihwcmV2U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtxdWFsaWZpZXM6ICFwcmV2U3RhdGUucXVhbGlmaWVzfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRvdGFsKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0b3RhbCgpIDwgNzUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24ocHJldlN0YXRlKSB7XG4gICAgICAgIHJldHVybiB7cXVhbGlmaWVzOiAhcHJldlN0YXRlLnF1YWxpZmllc31cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIFxuICBoYW5kbGVUb3RhbCgpIHtcbiAgICByZXR1cm4gdG90YWwoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICB7dGhpcy5zdGF0ZS5xdWFsaWZpZXMgPyA8cD5Zb3UndmUgdW5sb2NrZWQgZnJlZSBzaGlwcGluZyE8L3A+IDogPHA+WW91J3JlIG9uIHlvdXIgd2F5IHRvIGZyZWUgc2hpcHBpbmchPC9wPn1cbiAgICAgICAgPGRpdiBpZD1cImJhclwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPHNwYW4gaWQ9XCJzcGVuZFwiPlxuICAgICAgICB7dGhpcy5zdGF0ZS5xdWFsaWZpZXMgPyAnJDc1JyA6ICckJyArIHRoaXMuaGFuZGxlVG90YWwoKX1cbiAgICAgICAgPC9zcGFuPiBvZiAkNzVcbiAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19 */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/components/Cart/FreeShippingBar.jsx */"));
    }
  }]);

  return FreeShippingBar;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./components/Footer/MobileFooter.jsx":
/*!********************************************!*\
  !*** ./components/Footer/MobileFooter.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileFooter; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function MobileFooter() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mobile-footer",
    className: "jsx-1863714120"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1863714120"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1863714120"
  }, "SHOP FRECK"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1863714120"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/about",
    className: "jsx-1863714120"
  }, "ABOUT")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1863714120"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/blog",
    className: "jsx-1863714120"
  }, "BLOG")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1863714120"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/my-account",
    className: "jsx-1863714120"
  }, "ACCOUNT")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1863714120"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/stores",
    className: "jsx-1863714120"
  }, "STORES")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1863714120"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/faq",
    className: "jsx-1863714120"
  }, "FAQ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1863714120"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/contact",
    className: "jsx-1863714120"
  }, "CONTACT")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://freckbeauty.com/wp-content/uploads/2019/07/Freck-Logos-All_F-Rust-150x150.png",
    alt: "Freck dot logo",
    className: "jsx-1863714120"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1863714120"
  }, "#mobile-footer.jsx-1863714120{padding:40px 0;color:#000;text-align:center;background-color:#f6f8f6;}a.jsx-1863714120{-webkit-text-decoration:none;text-decoration:none;color:#000;}img.jsx-1863714120{padding-top:30px;width:31px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvRm9vdGVyL01vYmlsZUZvb3Rlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJrQixBQUcwQixBQU1NLEFBSUosZUFUTixFQVVBLFNBVE8sRUFVcEIsZ0JBVDJCLE1BSWQsV0FDYixRQUpBIiwiZmlsZSI6Ii9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvRm9vdGVyL01vYmlsZUZvb3Rlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2JpbGVGb290ZXIoKSB7XG4gIHJldHVybihcbiAgICA8ZGl2IGlkPVwibW9iaWxlLWZvb3RlclwiPlxuICAgICAgPHA+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+U0hPUCBGUkVDSzwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS9hYm91dFwiPkFCT1VUPC9hPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS9ibG9nXCI+QkxPRzwvYT5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vbXktYWNjb3VudFwiPkFDQ09VTlQ8L2E+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3N0b3Jlc1wiPlNUT1JFUzwvYT5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vZmFxXCI+RkFRPC9hPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS9jb250YWN0XCI+Q09OVEFDVDwvYT5cbiAgICAgIDwvcD5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDcvRnJlY2stTG9nb3MtQWxsX0YtUnVzdC0xNTB4MTUwLnBuZ1wiIGFsdD1cIkZyZWNrIGRvdCBsb2dvXCIgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgI21vYmlsZS1mb290ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmNjtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICB3aWR0aDogMzFweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTsiXX0= */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/components/Footer/MobileFooter.jsx */"));
}
;

/***/ }),

/***/ "./components/Header/CartIcon.jsx":
/*!****************************************!*\
  !*** ./components/Header/CartIcon.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartIcon; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function CartIcon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/cart",
    className: "jsx-712087065"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Bag.png",
    alt: "cart",
    className: "jsx-712087065" + " " + "cart"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "712087065"
  }, ".cart.jsx-712087065{width:20px;margin-bottom:-2px;}a.jsx-712087065:hover{opacity:0.6;color:#b86756;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvSGVhZGVyL0NhcnRJY29uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNa0IsQUFHc0IsQUFJQyxXQUhPLENBSUwsY0FDaEIsSUFKQSIsImZpbGUiOiIvVXNlcnMvZ2lzZWxsYWRlbW9yYWlzL2NvZGUvZnJlY2stdGVzdC9jb21wb25lbnRzL0hlYWRlci9DYXJ0SWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0SWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vY2FydFwiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJ0XCIgc3JjPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDcvZnJlY2stbW9iaWxlX0JhZy5wbmdcIiBhbHQ9XCJjYXJ0XCIvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2FydCB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgY29sb3I6ICNiODY3NTY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2E+XG4gICk7XG59Il19 */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/components/Header/CartIcon.jsx */"));
}

/***/ }),

/***/ "./components/Header/Favicon.jsx":
/*!***************************************!*\
  !*** ./components/Header/Favicon.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Favicon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Favicon() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2018/11/fav.png"
  }));
}

/***/ }),

/***/ "./components/Header/MainHeader.jsx":
/*!******************************************!*\
  !*** ./components/Header/MainHeader.jsx ***!
  \******************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Favicon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Favicon */ "./components/Header/Favicon.jsx");
/* harmony import */ var _MobileHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MobileHeader */ "./components/Header/MobileHeader.jsx");
/* harmony import */ var _CartIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CartIcon */ "./components/Header/CartIcon.jsx");
/* harmony import */ var _Submenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Submenu */ "./components/Header/Submenu.jsx");
















var MainHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MainHeader, _Component);

  function MainHeader(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainHeader);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainHeader).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggle", function () {
      _this.setState(function (prevState) {
        return {
          transform: !prevState.transform
        };
      });
    });

    _this.state = {
      transform: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainHeader, [{
    key: "render",
    value: function render() {
      var fixedHamburger = {
        position: this.state.transform ? 'fixed' : null,
        left: this.state.transform ? '94%' : null
      };
      var bar1 = {
        transform: this.state.transform ? 'rotate(-45deg) translate(-9px, 6px)' : null
      };
      var bar2 = {
        opacity: this.state.transform ? '0' : null
      };
      var bar3 = {
        transform: this.state.transform ? 'rotate(45deg) translate(-8px, -8px)' : null
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2906320418"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        className: "jsx-2906320418"
      }, "Freck | The Original Faux Freckles"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "description",
        content: "change me: description for indexing bots",
        className: "jsx-2906320418"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("script", {
        src: "https://kit.fontawesome.com/ab17e105a7.js",
        className: "jsx-2906320418"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Favicon__WEBPACK_IMPORTED_MODULE_11__["default"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_MobileHeader__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "main-header",
        className: "jsx-2906320418"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com",
        className: "jsx-2906320418"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png",
        alt: "Freck logo",
        className: "jsx-2906320418" + " " + "logo"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2906320418"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2906320418" + " " + "nav"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com",
        className: "jsx-2906320418"
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-2906320418"
      }, "Shop Freck")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/blog",
        className: "jsx-2906320418"
      }, "Blog"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/about",
        className: "jsx-2906320418"
      }, "About"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/contact",
        className: "jsx-2906320418"
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/my-account",
        className: "jsx-2906320418"
      }, "Log In"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_CartIcon__WEBPACK_IMPORTED_MODULE_13__["default"], null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: fixedHamburger,
        onClick: this.toggle,
        className: "jsx-2906320418" + " " + "hamburger"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: bar1,
        className: "jsx-2906320418" + " " + "bar1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: bar2,
        className: "jsx-2906320418" + " " + "bar2"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: bar3,
        className: "jsx-2906320418" + " " + "bar3"
      })), this.state.transform ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Submenu__WEBPACK_IMPORTED_MODULE_14__["default"], null) : null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2652282021"
      }, "*{box-sizing:border-box;margin:0;padding:0;}html,body{overflow-x:hidden;font-family:Helvetica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvSGVhZGVyL01haW5IZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGMkIsQUFHbUMsQUFLSixrQkFDSSxJQUxiLFNBQ0MsU0FLWixDQUpBIiwiZmlsZSI6Ii9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvSGVhZGVyL01haW5IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBGYXZpY29uIGZyb20gJy4vRmF2aWNvbic7XG5pbXBvcnQgTW9iaWxlSGVhZGVyIGZyb20gJy4vTW9iaWxlSGVhZGVyJztcbmltcG9ydCBDYXJ0SWNvbiBmcm9tICcuL0NhcnRJY29uJztcbmltcG9ydCBTdWJtZW51IGZyb20gJy4vU3VibWVudSc7XG5cbmNsYXNzIE1haW5IZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJhbnNmb3JtOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbihwcmV2U3RhdGUpIHtcbiAgICAgIHJldHVybiB7dHJhbnNmb3JtOiAhcHJldlN0YXRlLnRyYW5zZm9ybX1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmaXhlZEhhbWJ1cmdlciA9IHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdmaXhlZCcgOiBudWxsLFxuICAgICAgbGVmdDogdGhpcy5zdGF0ZS50cmFuc2Zvcm0gPyAnOTQlJyA6IG51bGwsXG4gICAgfVxuICAgIGNvbnN0IGJhcjEgPSB7XG4gICAgICB0cmFuc2Zvcm06IHRoaXMuc3RhdGUudHJhbnNmb3JtID8gJ3JvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpJyA6IG51bGxcbiAgICB9XG4gICAgY29uc3QgYmFyMiA9IHtcbiAgICAgIG9wYWNpdHk6IHRoaXMuc3RhdGUudHJhbnNmb3JtID8gJzAnIDogbnVsbFxuICAgIH1cbiAgICBjb25zdCBiYXIzID0ge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdyb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KScgOiBudWxsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RnJlY2sgfCBUaGUgT3JpZ2luYWwgRmF1eCBGcmVja2xlczwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImNoYW5nZSBtZTogZGVzY3JpcHRpb24gZm9yIGluZGV4aW5nIGJvdHNcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2FiMTdlMTA1YTcuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8RmF2aWNvbiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxNb2JpbGVIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBpZD1cIm1haW4taGVhZGVyXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9GcmVjay1sb2dvLnBuZ1wiIGFsdD1cIkZyZWNrIGxvZ29cIi8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb21cIj5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIFNob3AgRnJlY2tcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL2Jsb2dcIj5cbiAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vY29udGFjdFwiPlxuICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vbXktYWNjb3VudFwiPlxuICAgICAgICAgICAgICAgIExvZyBJblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxDYXJ0SWNvbiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJcIiBzdHlsZSA9e2ZpeGVkSGFtYnVyZ2VyfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjFcIiBzdHlsZT17YmFyMX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjJcIiBzdHlsZT17YmFyMn0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjNcIiBzdHlsZT17YmFyM30+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUudHJhbnNmb3JtID8gPFN1Ym1lbnUgLz4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHsgXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNtYWluLWhlYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RDlDOTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogI0E3M0UyNDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgY29sb3I6ICNiODY3NTY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMi41cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0LjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAycHgpIHtcbiAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIuNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAobWluLXdpZHRoOiAxMDAzcHgpIHtcbiAgICAgICAgICAgIC5oYW1idXJnZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTczZTI0O1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgfVxuICAgICAgICAgICNtYWluLWhlYWRlciA+IC5uYXYgPiBhIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcnQge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4OyAgXG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIxcHgpIHtcbiAgICAgICAgICAgICNtYWluLWhlYWRlciwgLmhhbWJ1cmdlciwgLmxvZ28ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDNweCkge1xuICAgICAgICAgICAgLmhhbWJ1cmdlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/components/Header/MainHeader.jsx */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3446794158"
      }, "#main-header.jsx-2906320418{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:70px;width:100%;background-color:#E5D9C9;}a.jsx-2906320418{-webkit-text-decoration:none;text-decoration:none;color:#A73E24;font-style:italic;text-transform:uppercase;padding:0 10px;}a.jsx-2906320418:hover{opacity:0.6;color:#b86756;}a.jsx-2906320418{font-family:'Helvetica';padding:10px;}.logo.jsx-2906320418{margin-left:-32.5px;margin-top:4.5px;height:100px;}.nav.jsx-2906320418{padding-right:40px;font-size:18px;}@media only screen and (max-width:1002px){.nav.jsx-2906320418{display:none;}}.hamburger.jsx-2906320418{cursor:pointer;padding-right:2.5%;}@media only screen (min-width:1003px){.hamburger.jsx-2906320418{display:none;}}.bar1.jsx-2906320418,.bar2.jsx-2906320418,.bar3.jsx-2906320418{width:35px;height:5px;background-color:#a73e24;margin:6px 0;-webkit-transition:0.4s;transition:0.4s;}#main-header.jsx-2906320418>.nav.jsx-2906320418>a.jsx-2906320418{padding-left:25px;}.cart.jsx-2906320418{width:20px;margin-bottom:-2px;}@media only screen and (max-width:421px){#main-header.jsx-2906320418,.hamburger.jsx-2906320418,.logo.jsx-2906320418{display:none;}}@media only screen and (min-width:1003px){.hamburger.jsx-2906320418{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvSGVhZGVyL01haW5IZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGb0IsQUFHMEIsQUFRUSxBQU9ULEFBSVksQUFJSixBQUtELEFBS0osQUFJQSxBQUtBLEFBSUosQUFPTyxBQUdQLEFBS0ksQUFLQSxXQW5CSixBQVVRLENBekNMLENBa0JkLEFBU0EsQUFtQkEsQUFLQSxFQTdCbUIsR0FnQnJCLENBekJpQixDQUxFLEVBd0JRLEVBNUJaLEVBSGYsSUF5Q0EsSUE1QkEsQUFTQSxHQWxCQSxBQUllLFVBd0JBLEdBeENDLEFBaUJoQixVQXdCa0IsSUF4Q0UsVUFUWSxRQVVMLGtCQXdDM0IsT0F2Q2lCLGVBQ2pCLG1FQVhxQiw2RkFDUCxZQUNELFdBQ2MseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvSGVhZGVyL01haW5IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBGYXZpY29uIGZyb20gJy4vRmF2aWNvbic7XG5pbXBvcnQgTW9iaWxlSGVhZGVyIGZyb20gJy4vTW9iaWxlSGVhZGVyJztcbmltcG9ydCBDYXJ0SWNvbiBmcm9tICcuL0NhcnRJY29uJztcbmltcG9ydCBTdWJtZW51IGZyb20gJy4vU3VibWVudSc7XG5cbmNsYXNzIE1haW5IZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJhbnNmb3JtOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbihwcmV2U3RhdGUpIHtcbiAgICAgIHJldHVybiB7dHJhbnNmb3JtOiAhcHJldlN0YXRlLnRyYW5zZm9ybX1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmaXhlZEhhbWJ1cmdlciA9IHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdmaXhlZCcgOiBudWxsLFxuICAgICAgbGVmdDogdGhpcy5zdGF0ZS50cmFuc2Zvcm0gPyAnOTQlJyA6IG51bGwsXG4gICAgfVxuICAgIGNvbnN0IGJhcjEgPSB7XG4gICAgICB0cmFuc2Zvcm06IHRoaXMuc3RhdGUudHJhbnNmb3JtID8gJ3JvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpJyA6IG51bGxcbiAgICB9XG4gICAgY29uc3QgYmFyMiA9IHtcbiAgICAgIG9wYWNpdHk6IHRoaXMuc3RhdGUudHJhbnNmb3JtID8gJzAnIDogbnVsbFxuICAgIH1cbiAgICBjb25zdCBiYXIzID0ge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLnN0YXRlLnRyYW5zZm9ybSA/ICdyb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KScgOiBudWxsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RnJlY2sgfCBUaGUgT3JpZ2luYWwgRmF1eCBGcmVja2xlczwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImNoYW5nZSBtZTogZGVzY3JpcHRpb24gZm9yIGluZGV4aW5nIGJvdHNcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2FiMTdlMTA1YTcuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8RmF2aWNvbiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxNb2JpbGVIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBpZD1cIm1haW4taGVhZGVyXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9GcmVjay1sb2dvLnBuZ1wiIGFsdD1cIkZyZWNrIGxvZ29cIi8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb21cIj5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIFNob3AgRnJlY2tcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL2Jsb2dcIj5cbiAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vY29udGFjdFwiPlxuICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vbXktYWNjb3VudFwiPlxuICAgICAgICAgICAgICAgIExvZyBJblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxDYXJ0SWNvbiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJcIiBzdHlsZSA9e2ZpeGVkSGFtYnVyZ2VyfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjFcIiBzdHlsZT17YmFyMX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjJcIiBzdHlsZT17YmFyMn0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjNcIiBzdHlsZT17YmFyM30+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUudHJhbnNmb3JtID8gPFN1Ym1lbnUgLz4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHsgXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNtYWluLWhlYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RDlDOTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogI0E3M0UyNDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgY29sb3I6ICNiODY3NTY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMi41cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0LjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAycHgpIHtcbiAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIuNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAobWluLXdpZHRoOiAxMDAzcHgpIHtcbiAgICAgICAgICAgIC5oYW1idXJnZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTczZTI0O1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgfVxuICAgICAgICAgICNtYWluLWhlYWRlciA+IC5uYXYgPiBhIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcnQge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4OyAgXG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIxcHgpIHtcbiAgICAgICAgICAgICNtYWluLWhlYWRlciwgLmhhbWJ1cmdlciwgLmxvZ28ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDNweCkge1xuICAgICAgICAgICAgLmhhbWJ1cmdlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/components/Header/MainHeader.jsx */"));
    }
  }]);

  return MainHeader;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (MainHeader);

/***/ }),

/***/ "./components/Header/MobileHeader.jsx":
/*!********************************************!*\
  !*** ./components/Header/MobileHeader.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileHeader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MobileSubmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MobileSubmenu */ "./components/Header/MobileSubmenu.jsx");












var MobileHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MobileHeader, _Component);

  function MobileHeader(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MobileHeader);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MobileHeader).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleClass", function () {
      _this.setState(function (prevState) {
        return {
          transform: !prevState.transform
        };
      });
    });

    _this.state = {
      transform: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MobileHeader, [{
    key: "render",
    value: function render() {
      var toggle = {
        display: this.state.transform ? 'block' : 'none'
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.state.transform ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_MobileSubmenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: toggle
      }) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-752314089" + " " + "mobile-nav"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-752314089" + " " + "nav-div"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        onClick: this.toggleClass,
        className: "jsx-752314089"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/07/Freck-dots_dots.png",
        alt: "open-submenu-icon",
        className: "jsx-752314089" + " " + "mobile-icon-1 twenty-three"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-752314089"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Search.png",
        height: "23",
        width: "23",
        alt: "search-icon",
        className: "jsx-752314089" + " " + "mobile-icon-2 twenty-three"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com",
        className: "jsx-752314089"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png",
        width: "150",
        sizes: "(max-width: 479px) 41vw, 150px",
        alt: "freck-logo",
        className: "jsx-752314089" + " " + "mobile-header-logo"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/my-account",
        className: "jsx-752314089"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Account.png",
        width: "25",
        height: "25",
        alt: "my-account-icon",
        className: "jsx-752314089" + " " + "mobile-icon-3 twenty-five"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/cart",
        className: "jsx-752314089"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Bag.png",
        width: "25",
        height: "25",
        alt: "cart-icon",
        className: "jsx-752314089" + " " + "mobile-icon-4 twenty-five"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-752314089" + " " + "mobile-second-nav"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/",
        className: "jsx-752314089"
      }, "SHOP"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/about/",
        className: "jsx-752314089"
      }, "ABOUT"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/blog",
        className: "jsx-752314089"
      }, "BLOG"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/contact",
        className: "jsx-752314089"
      }, "CONTACT"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/my-account",
        className: "jsx-752314089"
      }, "ACCOUNT")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "752314089"
      }, ".mobile-nav.jsx-752314089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;background-color:#fff;}.mobile-icon-1.jsx-752314089{margin-right:15px;}.mobile-icon-2.jsx-752314089{margin:0 0 0 10px;}.twenty-three.jsx-752314089{height:23px;width:23px;}.mobile-header-logo.jsx-752314089{margin:0 -5px -14px -5px;}.mobile-icon-3.jsx-752314089{margin:0 10px 0 0;}.mobile-icon-4.jsx-752314089{margin-left:15px;}.twenty-five.jsx-752314089{height:25px;width:25px;}.mobile-second-nav.jsx-752314089{padding:10px 0 0 0;margin-bottom:10px;overflow:auto;}.mobile-second-nav.jsx-752314089>a.jsx-752314089{padding:0 10px;-webkit-text-decoration:none;text-decoration:none;color:#000;}@media only screen and (min-width:421px){.mobile-nav.jsx-752314089{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvSGVhZGVyL01vYmlsZUhlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RzQixBQUc0QixBQU9oQixBQUVxQixBQUdOLEFBSWEsQUFHUCxBQUdELEFBR0wsQUFJTyxBQUtKLEFBTUEsWUEzQkosQUFhQSxDQWVYLEVBTnFCLEVBWnZCLENBaEJBLEFBR0EsQUFVQSxDQVVxQixJQWhCckIsQUFhQSxFQVZBLGFBY2dCLGNBQ2hCLGFBSWEsU0FuQ1ksRUFvQ3pCLGlHQW5DaUIseURBQ08sc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvSGVhZGVyL01vYmlsZUhlYWRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTW9iaWxlU3VibWVudSBmcm9tICcuL01vYmlsZVN1Ym1lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2JpbGVIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJhbnNmb3JtOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICB0b2dnbGVDbGFzcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uKHByZXZTdGF0ZSkge1xuICAgICAgcmV0dXJuIHt0cmFuc2Zvcm06ICFwcmV2U3RhdGUudHJhbnNmb3JtfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUudHJhbnNmb3JtID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICA8PlxuICAgICAgICB7dGhpcy5zdGF0ZS50cmFuc2Zvcm0gPyA8TW9iaWxlU3VibWVudSBzdHlsZT17dG9nZ2xlfSAvPiA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW5hdlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWRpdlwiPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy50b2dnbGVDbGFzc30+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9iaWxlLWljb24tMSB0d2VudHktdGhyZWVcIiBzcmM9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9GcmVjay1kb3RzX2RvdHMucG5nXCIgYWx0PVwib3Blbi1zdWJtZW51LWljb25cIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9iaWxlLWljb24tMiB0d2VudHktdGhyZWVcIiBzcmM9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9mcmVjay1tb2JpbGVfU2VhcmNoLnBuZ1wiIGhlaWdodD1cIjIzXCIgd2lkdGg9XCIyM1wiIGFsdD1cInNlYXJjaC1pY29uXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbVwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vYmlsZS1oZWFkZXItbG9nb1wiIHNyYz1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA1L0ZyZWNrLWxvZ28ucG5nXCIgd2lkdGg9XCIxNTBcIiBzaXplcz1cIihtYXgtd2lkdGg6IDQ3OXB4KSA0MXZ3LCAxNTBweFwiIGFsdD1cImZyZWNrLWxvZ29cIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL215LWFjY291bnRcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtb2JpbGUtaWNvbi0zIHR3ZW50eS1maXZlXCIgc3JjPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDcvZnJlY2stbW9iaWxlX0FjY291bnQucG5nXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgYWx0PVwibXktYWNjb3VudC1pY29uXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS9jYXJ0XCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9iaWxlLWljb24tNCB0d2VudHktZml2ZVwiIHNyYz1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3L2ZyZWNrLW1vYmlsZV9CYWcucG5nXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgYWx0PVwiY2FydC1pY29uXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1zZWNvbmQtbmF2XCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+U0hPUDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL2Fib3V0L1wiPkFCT1VUPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vYmxvZ1wiPkJMT0c8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS9jb250YWN0XCI+Q09OVEFDVDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL215LWFjY291bnRcIj5BQ0NPVU5UPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5tb2JpbGUtbmF2IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2JpbGUtaWNvbi0xIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLWljb24tMiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50d2VudHktdGhyZWUge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS1oZWFkZXItbG9nbyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4IC0xNHB4IC01cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLWljb24tMyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2JpbGUtaWNvbi00IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHdlbnR5LWZpdmUge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS1zZWNvbmQtbmF2IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLXNlY29uZC1uYXYgPiBhIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjFweCkge1xuICAgICAgICAgICAgICAubW9iaWxlLW5hdiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59Il19 */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/components/Header/MobileHeader.jsx */")));
    }
  }]);

  return MobileHeader;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./components/Header/MobileSubmenu.jsx":
/*!*********************************************!*\
  !*** ./components/Header/MobileSubmenu.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileSubmenu; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);











var MobileSubmenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MobileSubmenu, _Component);

  function MobileSubmenu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MobileSubmenu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MobileSubmenu).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleClass", function () {
      _this.setState(function (prevState) {
        return {
          transform: !prevState.transform
        };
      });
    });

    _this.state = {
      transform: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MobileSubmenu, [{
    key: "render",
    value: function render() {
      var toggle = {
        display: this.state.transform ? 'block' : 'none'
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.state.transform ? null : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795" + " " + "submenu"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.toggleClass,
        className: "jsx-3422212795" + " " + "close-icon"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795" + " " + "bar1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795" + " " + "bar2"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795" + " " + "bar3"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795" + " " + "submenu-icons"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/my-account",
        className: "jsx-3422212795"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://uploads-ssl.webflow.com/5cdc55a95b0a2bf4bf7ea924/5cdca51f95678d23e8f296d3_freck-mobile_Account.png",
        className: "jsx-3422212795" + " " + "account icon"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/cart",
        className: "jsx-3422212795"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://uploads-ssl.webflow.com/5cdc55a95b0a2bf4bf7ea924/5cdca51edd56264e977a632b_freck-mobile_Bag.png",
        className: "jsx-3422212795" + " " + "cart icon"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795" + " " + "submenu-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-3422212795"
      }, "SHOP BEAUTY")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795" + " " + "submenu-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("details", {
        className: "jsx-3422212795"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("summary", {
        className: "jsx-3422212795"
      }, "BEST SELLERS"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-3422212795"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/product/freck-og",
        className: "jsx-3422212795"
      }, "FRECK OG")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-3422212795"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/product/so-jelly",
        className: "jsx-3422212795"
      }, "SO JELLY")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-3422212795"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/product/rich-bitch",
        className: "jsx-3422212795"
      }, "RICH BITCH"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795" + " " + "submenu-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/about",
        className: "jsx-3422212795"
      }, "ABOUT")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795" + " " + "submenu-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/blog",
        className: "jsx-3422212795"
      }, "OOZE")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795" + " " + "submenu-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/contact",
        className: "jsx-3422212795"
      }, "CONTACT")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795" + " " + "submenu-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/my-account",
        className: "jsx-3422212795"
      }, "ACCOUNT")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3422212795" + " " + "submenu-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://freckbeauty.com/wp-content/uploads/2019/07/Freck-Logos-All_F-Rust-150x150.png",
        alt: "Freck dot logo",
        className: "jsx-3422212795" + " " + "logo"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3422212795"
      }, ".submenu.jsx-3422212795{width:100%;height:100%;}.close-icon.jsx-3422212795{cursor:pointer;padding-right:2.5%;padding-top:20px;padding-left:20px;}.bar1.jsx-3422212795,.bar3.jsx-3422212795{width:35px;height:5px;background-color:#a73e24;margin:6px 0;}.bar2.jsx-3422212795{width:35px;height:5px;background-color:transparent;margin:6px 0;}.bar1.jsx-3422212795{-webkit-transform:rotate(-45deg) translate(-9px,6px);-ms-transform:rotate(-45deg) translate(-9px,6px);transform:rotate(-45deg) translate(-9px,6px);}.bar3.jsx-3422212795{-webkit-transform:rotate(45deg) translate(-8px,-8px);-ms-transform:rotate(45deg) translate(-8px,-8px);transform:rotate(45deg) translate(-8px,-8px);}.submenu.jsx-3422212795{background-color:#f6f8f6;width:100%;height:100vh;top:0px;}.submenu-icons.jsx-3422212795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-right:21%;padding:20px 0;}.icon.jsx-3422212795{width:30px;margin:0 10px;}a.jsx-3422212795{-webkit-text-decoration:none;text-decoration:none;color:#000;}.submenu-item.jsx-3422212795{text-align:right;padding-top:10px;padding-right:25%;padding-bottom:10px;}p.jsx-3422212795{padding:10px 0;}.logo.jsx-3422212795{width:50px;padding-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvSGVhZGVyL01vYmlsZVN1Ym1lbnUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHc0IsQUFHMEIsQUFJSSxBQU1KLEFBTUEsQUFNbUMsQUFHQSxBQUdyQixBQU1aLEFBTUYsQUFJVSxBQUlKLEFBTUYsQUFHSixXQXhEQyxBQVVELEFBTUEsQUF3QkcsQUFpQkcsSUFyREUsQUFrRHJCLEVBTm1CLEtBckNRLEFBTUksQ0FoQi9CLEVBMkJhLEFBYWIsR0FpQkEsTUFyRG1CLEFBNENDLEVBcEJMLFdBakJBLEVBa0JMLENBY0csQ0F0Q08sQUFZTCxDQWdDTyxLQW5CdEIsR0FsQkEsQ0FnQ0EsR0ExQkEsS0FaQSxHQTRDQSxFQWpCMkIseUVBWjNCLEFBR0Esd0JBVW1CLGlCQUNGLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvSGVhZGVyL01vYmlsZVN1Ym1lbnUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuICBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZVN1Ym1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHJhbnNmb3JtOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICB0b2dnbGVDbGFzcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uKHByZXZTdGF0ZSkge1xuICAgICAgcmV0dXJuIHt0cmFuc2Zvcm06ICFwcmV2U3RhdGUudHJhbnNmb3JtfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUudHJhbnNmb3JtID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIHt0aGlzLnN0YXRlLnRyYW5zZm9ybSA/IG51bGwgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLWljb25cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNsYXNzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyMVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIyXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjNcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaWNvbnNcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS9teS1hY2NvdW50XCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhY2NvdW50IGljb25cIiBzcmM9XCJodHRwczovL3VwbG9hZHMtc3NsLndlYmZsb3cuY29tLzVjZGM1NWE5NWIwYTJiZjRiZjdlYTkyNC81Y2RjYTUxZjk1Njc4ZDIzZThmMjk2ZDNfZnJlY2stbW9iaWxlX0FjY291bnQucG5nXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vY2FydFwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcnQgaWNvblwiIHNyYz1cImh0dHBzOi8vdXBsb2Fkcy1zc2wud2ViZmxvdy5jb20vNWNkYzU1YTk1YjBhMmJmNGJmN2VhOTI0LzVjZGNhNTFlZGQ1NjI2NGU5NzdhNjMyYl9mcmVjay1tb2JpbGVfQmFnLnBuZ1wiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWVudS1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT5TSE9QIEJFQVVUWTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWVudS1pdGVtXCI+XG4gICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgPHN1bW1hcnk+XG4gICAgICAgICAgICAgICAgQkVTVCBTRUxMRVJTXG4gICAgICAgICAgICAgIDwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3Byb2R1Y3QvZnJlY2stb2dcIj5cbiAgICAgICAgICAgICAgICAgIEZSRUNLIE9HXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS9wcm9kdWN0L3NvLWplbGx5XCI+XG4gICAgICAgICAgICAgICAgICBTTyBKRUxMWVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vcHJvZHVjdC9yaWNoLWJpdGNoXCI+XG4gICAgICAgICAgICAgICAgICBSSUNIIEJJVENIXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL2Fib3V0XCI+XG4gICAgICAgICAgICBBQk9VVFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWVudS1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vYmxvZ1wiPlxuICAgICAgICAgICAgICBPT1pFXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS9jb250YWN0XCI+XG4gICAgICAgICAgICAgIENPTlRBQ1RcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL215LWFjY291bnRcIj5cbiAgICAgICAgICAgICAgQUNDT1VOVFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWVudS1pdGVtXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9GcmVjay1Mb2dvcy1BbGxfRi1SdXN0LTE1MHgxNTAucG5nXCIgYWx0PVwiRnJlY2sgZG90IGxvZ29cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5zdWJtZW51IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jbG9zZS1pY29uIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyLjUlO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhcjEsIC5iYXIzIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTczZTI0O1xuICAgICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhcjIge1xuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhcjEge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhcjMge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1Ym1lbnUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGY2O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3VibWVudS1pY29ucyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjElO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1Ym1lbnUtaXRlbSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59Il19 */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/components/Header/MobileSubmenu.jsx */")));
    }
  }]);

  return MobileSubmenu;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./components/Header/Submenu.jsx":
/*!***************************************!*\
  !*** ./components/Header/Submenu.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Submenu; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function Submenu() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441" + " " + "submenu"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441" + " " + "submenu-icons"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/my-account",
    className: "jsx-4244586441"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://uploads-ssl.webflow.com/5cdc55a95b0a2bf4bf7ea924/5cdca51f95678d23e8f296d3_freck-mobile_Account.png",
    className: "jsx-4244586441" + " " + "account icon"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/cart",
    className: "jsx-4244586441"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://uploads-ssl.webflow.com/5cdc55a95b0a2bf4bf7ea924/5cdca51edd56264e977a632b_freck-mobile_Bag.png",
    className: "jsx-4244586441" + " " + "cart icon"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441" + " " + "submenu-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-4244586441"
  }, "SHOP BEAUTY")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441" + " " + "submenu-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-4244586441"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-4244586441"
  }, "BEST SELLERS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4244586441"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/product/freck-og",
    className: "jsx-4244586441"
  }, "FRECK OG")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4244586441"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/product/so-jelly",
    className: "jsx-4244586441"
  }, "SO JELLY")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4244586441"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/product/rich-bitch",
    className: "jsx-4244586441"
  }, "RICH BITCH"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441" + " " + "submenu-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/about",
    className: "jsx-4244586441"
  }, "ABOUT")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441" + " " + "submenu-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/blog",
    className: "jsx-4244586441"
  }, "OOZE")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441" + " " + "submenu-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/contact",
    className: "jsx-4244586441"
  }, "CONTACT")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441" + " " + "submenu-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://freckbeauty.com/my-account",
    className: "jsx-4244586441"
  }, "ACCOUNT")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4244586441" + " " + "submenu-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://freckbeauty.com/wp-content/uploads/2019/07/Freck-Logos-All_F-Rust-150x150.png",
    alt: "Freck dot logo",
    className: "jsx-4244586441" + " " + "logo"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4244586441"
  }, ".submenu.jsx-4244586441{background-color:#f6f8f6;position:fixed;width:40%;height:100vh;top:0px;left:52.5%;z-index:1000;}.submenu-icons.jsx-4244586441{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-right:21%;padding:20px 0;}.icon.jsx-4244586441{width:30px;margin:0 10px;}a.jsx-4244586441{-webkit-text-decoration:none;text-decoration:none;color:#000;}.submenu-item.jsx-4244586441{text-align:right;padding-top:10px;padding-right:25%;padding-bottom:10px;}p.jsx-4244586441{padding:10px 0;}.logo.jsx-4244586441{width:50px;padding-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvSGVhZGVyL1N1Ym1lbnUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFa0IsQUFHb0MsQUFTWixBQU1GLEFBSVUsQUFJSixBQU1GLEFBR0osV0FoQkcsQUFpQkcsSUFIbkIsRUFObUIsUUF2QkYsQUFnQmpCLEdBaUJBLE1BVG9CLE1BdkJSLFVBQ0csQUFpQkYsRUFNUyxTQUx0QixFQWpCVSxRQUNHLENBc0JiLEVBakIyQixRQUpaLGFBQ2YsNEVBSW1CLGlCQUNGLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvSGVhZGVyL1N1Ym1lbnUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbiAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJtZW51KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWVudVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtZW51LWljb25zXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL215LWFjY291bnRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYWNjb3VudCBpY29uXCIgc3JjPVwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81Y2RjNTVhOTViMGEyYmY0YmY3ZWE5MjQvNWNkY2E1MWY5NTY3OGQyM2U4ZjI5NmQzX2ZyZWNrLW1vYmlsZV9BY2NvdW50LnBuZ1wiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vY2FydFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FydCBpY29uXCIgc3JjPVwiaHR0cHM6Ly91cGxvYWRzLXNzbC53ZWJmbG93LmNvbS81Y2RjNTVhOTViMGEyYmY0YmY3ZWE5MjQvNWNkY2E1MWVkZDU2MjY0ZTk3N2E2MzJiX2ZyZWNrLW1vYmlsZV9CYWcucG5nXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaXRlbVwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPlNIT1AgQkVBVVRZPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWVudS1pdGVtXCI+XG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5PlxuICAgICAgICAgICAgQkVTVCBTRUxMRVJTXG4gICAgICAgICAgPC9zdW1tYXJ5PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3Byb2R1Y3QvZnJlY2stb2dcIj5cbiAgICAgICAgICAgICAgRlJFQ0sgT0dcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vcHJvZHVjdC9zby1qZWxseVwiPlxuICAgICAgICAgICAgICBTTyBKRUxMWVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS9wcm9kdWN0L3JpY2gtYml0Y2hcIj5cbiAgICAgICAgICAgICAgUklDSCBCSVRDSFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaXRlbVwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vYWJvdXRcIj5cbiAgICAgICAgQUJPVVRcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaXRlbVwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vYmxvZ1wiPlxuICAgICAgICAgIE9PWkVcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaXRlbVwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vY29udGFjdFwiPlxuICAgICAgICAgIENPTlRBQ1RcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaXRlbVwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vbXktYWNjb3VudFwiPlxuICAgICAgICAgIEFDQ09VTlRcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1lbnUtaXRlbVwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCJodHRwczovL2ZyZWNrYmVhdXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9GcmVjay1Mb2dvcy1BbGxfRi1SdXN0LTE1MHgxNTAucG5nXCIgYWx0PVwiRnJlY2sgZG90IGxvZ29cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zdWJtZW51IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGY2O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgbGVmdDogNTIuNSU7XG4gICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgfVxuICAgICAgICAuc3VibWVudS1pY29ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjElO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJtZW51LWl0ZW0ge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59Il19 */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/components/Header/Submenu.jsx */"));
}

/***/ }),

/***/ "./components/Shop/MobileHero.jsx":
/*!****************************************!*\
  !*** ./components/Shop/MobileHero.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileHero; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function MobileHero() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-995123374"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "995123374"
  }, "div.jsx-995123374{background:url('https://freckbeauty.com/wp-content/uploads/2019/07/Marklew-2018-10-20_3222.jpg');background-size:cover;height:500px;width:100%;}@media only screen and (min-width:821px){div.jsx-995123374{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvU2hvcC9Nb2JpbGVIZXJvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0IsQUFHNEcsQUFPbEYsYUFDZixvRkFQc0Isc0JBQ1QsYUFDRixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvU2hvcC9Nb2JpbGVIZXJvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vYmlsZUhlcm8oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3L01hcmtsZXctMjAxOC0xMC0yMF8zMjIyLmpwZycpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgyMXB4KSB7XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59Il19 */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/components/Shop/MobileHero.jsx */"));
}

/***/ }),

/***/ "./components/Shop/ProductList.jsx":
/*!*****************************************!*\
  !*** ./components/Shop/ProductList.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var cart_localstorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cart-localstorage */ "cart-localstorage");
/* harmony import */ var cart_localstorage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cart_localstorage__WEBPACK_IMPORTED_MODULE_9__);











var ProductList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProductList, _Component);

  function ProductList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductList).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleHover", function () {
      _this.setState(function (prevState) {
        return {
          hover: !prevState.hover
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function () {
      _this.props.handleAddToCart();

      _this.props.toggleCart();
    });

    _this.state = {
      hover: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductList, [{
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
        opacity: product.stock_status === 'outofstock' ? '1' : '0'
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1715334222", [product.images[1].src]]]) + " " + "product-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1715334222", [product.images[1].src]]]) + " " + "product-image"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: outOfStock,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1715334222", [product.images[1].src]]]) + " " + "out-of-stock"
      }, "OUT OF STOCK"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/product/".concat(product.slug),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1715334222", [product.images[1].src]]])
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: product.images[0].src,
        alt: "Product image",
        style: toggleImg,
        onMouseEnter: this.toggleHover,
        onMouseLeave: this.toggleHover,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1715334222", [product.images[1].src]]])
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1715334222", [product.images[1].src]]]) + " " + "product-heading"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://freckbeauty.com/product/".concat(product.slug),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1715334222", [product.images[1].src]]])
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1715334222", [product.images[1].src]]])
      }, product.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1715334222", [product.images[1].src]]]) + " " + "product-description"
      }, productDescription)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleClick,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1715334222", [product.images[1].src]]])
      }, "$", product.price, " \u2014 ADD")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1715334222",
        dynamic: [product.images[1].src]
      }, ".product-container.__jsx-style-dynamic-selector{margin:0 20px;}img.__jsx-style-dynamic-selector,.product-image.__jsx-style-dynamic-selector{max-width:450px;max-height:450px;}.product-image.__jsx-style-dynamic-selector{position:relative;background:url('".concat(product.images[1].src, "');background-size:cover;font-weight:bold;}.out-of-stock.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:-35px;background-color:rgba(255,255,255,0.88);height:14%;width:100%;opacity:0;top:50%;}.product-heading.__jsx-style-dynamic-selector{width:100%;text-align:center;text-transform:uppercase;}.product-description.__jsx-style-dynamic-selector{line-height:20px;}a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:#000;}button.__jsx-style-dynamic-selector{background-color:#A73E24;color:#fff;width:100%;padding:9px 15px;border:none;margin-bottom:10px;}button.__jsx-style-dynamic-selector:focus{outline:0;}button.__jsx-style-dynamic-selector:hover{cursor:pointer;}@media only screen and (max-width:420px){.product-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;max-width:125px;}img.__jsx-style-dynamic-selector,.product-image.__jsx-style-dynamic-selector{max-width:125px;max-height:125px;}.out-of-stock.__jsx-style-dynamic-selector{margin-top:-10px;}}@media only screen and (min-width:421px) and (max-width:820px){.product-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:250px;margin:0 20px;}img.__jsx-style-dynamic-selector,.product-image.__jsx-style-dynamic-selector{max-width:250px;max-height:250px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L2NvbXBvbmVudHMvU2hvcC9Qcm9kdWN0TGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RnQixBQUdxQixBQUdFLEFBSUUsQUFNQSxBQVlQLEFBS00sQUFHSSxBQUlJLEFBUWYsQUFHSyxBQUlELEFBTUcsQUFJQyxBQUtKLEFBT0csVUE1QmxCLENBcEJtQixHQXpCbkIsQ0FnREEsQ0E3Q2tCLEFBdURDLEFBZ0JBLENBNUNuQixBQWdDQyxDQXZEK0MsQUFNbEMsT0F3QkYsSUFYYyxJQXRCMUIsQUF1REMsQUFnQkEsR0FyQ1csV0FDTSxHQU5OLElBTlosT0FPQSxHQU1hLENBaENVLFNBNENOLEFBZUEsRUExQkcsV0FoQ0YsS0FLTSxHQTRCeEIsU0FoQ0EsMkJBMkN5QixBQWVBLDREQXJETCx1Q0F1Q0YsQUFlSixZQUNFLElBZmYsVUFnQkEsNEJBdkRpQixpQkFDMEIsd0NBQ2hDLFdBQ0EsV0FDRCxVQUNGLFFBQ1QiLCJmaWxlIjoiL1VzZXJzL2dpc2VsbGFkZW1vcmFpcy9jb2RlL2ZyZWNrLXRlc3QvY29tcG9uZW50cy9TaG9wL1Byb2R1Y3RMaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b3RhbCB9IGZyb20gJ2NhcnQtbG9jYWxzdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aG92ZXI6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlSG92ZXIgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZShmdW5jdGlvbihwcmV2U3RhdGUpIHtcblx0XHRcdHJldHVybiB7aG92ZXI6ICFwcmV2U3RhdGUuaG92ZXJ9XG5cdFx0fSlcblx0fVxuXG5cdGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuXHRcdHRoaXMucHJvcHMuaGFuZGxlQWRkVG9DYXJ0KCk7XG5cdFx0dGhpcy5wcm9wcy50b2dnbGVDYXJ0KCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBwcm9kdWN0IH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHJhd0pzb24gPSBwcm9kdWN0LnNob3J0X2Rlc2NyaXB0aW9uO1xuXHRcdGNvbnN0IHByb2R1Y3REZXNjcmlwdGlvbiA9IHJhd0pzb24ucmVwbGFjZSgvKDwoW14+XSspPikvaWcsXCJcIik7XG5cdFx0Y29uc3QgdG9nZ2xlSW1nID0ge1xuXHRcdFx0b3BhY2l0eTogdGhpcy5zdGF0ZS5ob3ZlciA/ICcwJyA6ICcxJyxcblx0XHRcdGN1cnNvcjogdGhpcy5zdGF0ZS5ob3ZlciA/ICdwb2ludGVyJyA6ICcnLFxuXHRcdFx0dHJhbnNpdGlvbjogdGhpcy5zdGF0ZS5ob3ZlciA/ICdmaWx0ZXIgLjZzLCBvcGFjaXR5IC42cywgdHJhbnNmb3JtIC42cywgLXdlYmtpdC1maWx0ZXIgLjZzLCAtd2Via2l0LXRyYW5zZm9ybSAuNnMnIDogJydcblx0XHR9XG5cdFx0Y29uc3Qgb3V0T2ZTdG9jayA9IHtcblx0XHRcdG9wYWNpdHk6IHByb2R1Y3Quc3RvY2tfc3RhdHVzID09PSAnb3V0b2ZzdG9jaycgPyAnMScgOiAnMCdcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdXQtb2Ytc3RvY2tcIiBzdHlsZT17b3V0T2ZTdG9ja30+XG5cdFx0XHRcdFx0XHRPVVQgT0YgU1RPQ0tcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8YSBocmVmPXtgaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vcHJvZHVjdC8ke3Byb2R1Y3Quc2x1Z31gfT5cblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPXtwcm9kdWN0LmltYWdlc1swXS5zcmN9XG5cdFx0XHRcdFx0XHRcdGFsdD1cIlByb2R1Y3QgaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRzdHlsZT17dG9nZ2xlSW1nfVxuXHRcdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9e3RoaXMudG9nZ2xlSG92ZXJ9XG5cdFx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17dGhpcy50b2dnbGVIb3Zlcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWhlYWRpbmdcIj5cblx0XHRcdFx0XHQ8YSBocmVmPXtgaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vcHJvZHVjdC8ke3Byb2R1Y3Quc2x1Z31gfT5cblx0XHRcdFx0XHRcdFx0PGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cblx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDU+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdHsvKiA8YSBocmVmPXtgaHR0cHM6Ly9mcmVja2JlYXV0eS5jb20vY2FydC8/YWRkLXRvLWNhcnQ9JHtldnR9JnF1YW50aXR5PTFgfT4gKi99XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdCR7cHJvZHVjdC5wcmljZX0g4oCUIEFERFxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0ey8qIDwvYT4gKi99XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LnByb2R1Y3QtY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpbWcsIC5wcm9kdWN0LWltYWdlIHtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogNDUwcHg7XG5cdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiA0NTBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnByb2R1Y3QtaW1hZ2Uge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKCcke3Byb2R1Y3QuaW1hZ2VzWzFdLnNyY30nKTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm91dC1vZi1zdG9jayB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTM1cHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODgpO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxNCU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnByb2R1Y3QtaGVhZGluZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRidXR0b24ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0E3M0UyNDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA5cHggMTVweDtcblx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJ1dHRvbjpmb2N1cyB7XG5cdFx0XHRcdFx0XHRvdXRsaW5lOiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRidXR0b246aG92ZXIge1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG5cdFx0XHRcdFx0XHQucHJvZHVjdC1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEyNXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aW1nLCAucHJvZHVjdC1pbWFnZSB7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMTI1cHg7XG5cdFx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6IDEyNXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lm91dC1vZi1zdG9jayB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0xMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyMXB4KSBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcblx0XHRcdFx0XHRcdC5wcm9kdWN0LWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAyNTBweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIDIwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpbWcsIC5wcm9kdWN0LWltYWdlIHtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAyNTBweDtcblx0XHRcdFx0XHRcdFx0bWF4LWhlaWdodDogMjUwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59Il19 */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/components/Shop/ProductList.jsx */")));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var cart_localstorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! cart-localstorage */ "cart-localstorage");
/* harmony import */ var cart_localstorage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(cart_localstorage__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Header_MainHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Header/MainHeader */ "./components/Header/MainHeader.jsx");
/* harmony import */ var _components_Footer_MobileFooter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Footer/MobileFooter */ "./components/Footer/MobileFooter.jsx");
/* harmony import */ var _components_Shop_MobileHero__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Shop/MobileHero */ "./components/Shop/MobileHero.jsx");
/* harmony import */ var _components_Shop_ProductList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Shop/ProductList */ "./components/Shop/ProductList.jsx");
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Cart/Cart */ "./components/Cart/Cart.jsx");



















var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "toggleCart", function () {
      _this.setState(function (prevState) {
        return {
          show: !prevState.show
        };
      });
    });

    _this.state = {
      show: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "handleAddToCart",
    value: function handleAddToCart() {
      Object(cart_localstorage__WEBPACK_IMPORTED_MODULE_12__["add"])({
        id: this.product.id,
        name: this.product.name,
        short_description: this.product.short_description,
        price: this.product.price,
        image: this.product.images[0].src
      });
    }
  }, {
    key: "render",
    value: function render(props) {
      var _this2 = this;

      var products = this.props.products;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-806009810"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Header_MainHeader__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-806009810" + " " + "hero-container"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "left-hero",
        className: "jsx-806009810"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2018/10/f-dot.svg",
        alt: "F Dot Logo",
        className: "jsx-806009810"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "carousel",
        className: "jsx-806009810"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Shop_MobileHero__WEBPACK_IMPORTED_MODULE_15__["default"], null), this.state.show ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_17__["default"], {
        deleteItem: this.deleteItem,
        toggleCart: this.toggleCart
      }) : null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-806009810" + " " + "product-container"
      }, products.length ? products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Shop_ProductList__WEBPACK_IMPORTED_MODULE_16__["default"], {
          product: product,
          key: product.id,
          handleAddToCart: _this2.handleAddToCart,
          toggleCart: _this2.toggleCart
        });
      }) : ''), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "products-hero",
        className: "jsx-806009810"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Footer_MobileFooter__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "806009810"
      }, ".hero-container.jsx-806009810{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:-5.5px;}#left-hero.jsx-806009810{background:url('https://freckbeauty.com/wp-content/uploads/2018/11/shop-header-left.jpg');background-repeat:no-repeat;background-position:0% 50%;background-size:cover;width:50%;height:720px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#carousel.jsx-806009810{background:url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Sml-Open_Flatlay-Shadow_R__676x676.jpg');background-repeat:no-repeat;background-position:0% 50%;background-size:cover;width:50%;height:720px;}img.jsx-806009810{width:21%;margin-left:30px;}.product-container.jsx-806009810{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:10%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-right:5%;margin-left:5%;}#products-hero.jsx-806009810{background:url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Group-Collection_Flatlay-Shadow_R_1351x901_ImgOptm.jpg');background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:contain;min-height:900px;width:100%;margin-top:10%;}@media only screen and (max-width:820px){.hero-container.jsx-806009810{display:none;}#products-hero.jsx-806009810{background-position:0% 0%;min-height:300px;width:100%;margin-top:0;margin-bottom:-55px;}}@media only screen and (min-width:520px) and (max-width:820px){#products-hero.jsx-806009810{min-height:600px;margin-top:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGb0IsQUFHMEIsQUFLNkUsQUFVMkMsQUFRM0gsQUFJRyxBQVF3SSxBQVd0SSxBQUdhLEFBU1QsVUFsQ0YsR0F1QmpCLElBWWtCLFNBVEMsQ0F6QnJCLE1BbUNFLFVBVGEsV0FDRSxhQUNPLE9BcERQLEFBMkJBLGFBMEJmLEdBaEQ0Qiw0QkFDRCxhQUxOLEFBMkJOLEVBYmEsWUFSTixDQXNCQyxHQU1LLEdBakM5QixTQWM2QixNQVJqQixVQUNHLEFBMkJjLFdBbkJMLEVBUFQsY0EyQmdCLE1BbkJuQixVQUNHLGFBQ2YsQUFrQjBCLFlBUlIsWUFTQyxJQVJGLEdBcEJJLFVBNkJSLEVBUmIsU0FTaUIsZUFDakIseURBOUJBIiwiZmlsZSI6Ii9Vc2Vycy9naXNlbGxhZGVtb3JhaXMvY29kZS9mcmVjay10ZXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnY2FydC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IE1haW5IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvTWFpbkhlYWRlcic7XG5pbXBvcnQgTW9iaWxlRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL01vYmlsZUZvb3Rlcic7XG5pbXBvcnQgTW9iaWxlSGVybyBmcm9tICcuLi9jb21wb25lbnRzL1Nob3AvTW9iaWxlSGVybyc7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9TaG9wL1Byb2R1Y3RMaXN0JztcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydC9DYXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvdzogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vZnJlY2tiZWF1dHkvZHVtbXktZGF0YS9wcm9kdWN0c2AsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICdjYWNoZS1jb250cm9sJzogJ25vLWNhY2hlJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogJ0Jhc2ljIFkydGZNV0UwT0RGa1lUTXpOVGt4TVdaa1kyRTNNV016TWpNNFlUUTROakpoWkdaaVpqZ3lOREUyWVRwamMxODNNMlF3TWpobU16QXdaREl6TW1VNVlqUXpNemhtT1RjM1ltTTVabVUzWW1GbU5qTmpNemt4J1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9kdWN0czogZGF0YVxuICAgIH1cbiAgfVxuICBcbiAgaGFuZGxlQWRkVG9DYXJ0KCkge1xuICAgIGFkZCh7XG5cdFx0XHRpZDogdGhpcy5wcm9kdWN0LmlkLFxuICAgICAgbmFtZTogdGhpcy5wcm9kdWN0Lm5hbWUsXG4gICAgICBzaG9ydF9kZXNjcmlwdGlvbjogdGhpcy5wcm9kdWN0LnNob3J0X2Rlc2NyaXB0aW9uLFxuICAgICAgcHJpY2U6IHRoaXMucHJvZHVjdC5wcmljZSxcbiAgICAgIGltYWdlOiB0aGlzLnByb2R1Y3QuaW1hZ2VzWzBdLnNyY1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlQ2FydCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uKHByZXZTdGF0ZSkge1xuICAgICAgcmV0dXJuIHtzaG93OiAhcHJldlN0YXRlLnNob3d9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIocHJvcHMpIHtcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TWFpbkhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImxlZnQtaGVyb1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21rMGZyZWNrYmVhdXR5Zndqa3U1LmtpbnN0YWNkbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvZi1kb3Quc3ZnXCIgYWx0PVwiRiBEb3QgTG9nb1wiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwiY2Fyb3VzZWxcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2JpbGVIZXJvIC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3cgP1xuICAgICAgICAgIDxDYXJ0XG4gICAgICAgICAgICBkZWxldGVJdGVtPXt0aGlzLmRlbGV0ZUl0ZW19XG4gICAgICAgICAgICB0b2dnbGVDYXJ0PXt0aGlzLnRvZ2dsZUNhcnR9XG4gICAgICAgICAgLz4gXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGFpbmVyXCI+XG4gICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIHByb2R1Y3RzLm1hcChcbiAgICAgICAgICAgICAgcHJvZHVjdCA9PlxuICAgICAgICAgICAgICA8UHJvZHVjdExpc3RcbiAgICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgICAgICBoYW5kbGVBZGRUb0NhcnQ9e3RoaXMuaGFuZGxlQWRkVG9DYXJ0fVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNhcnQ9e3RoaXMudG9nZ2xlQ2FydH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApIDogJyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdHMtaGVyb1wiPjwvZGl2PlxuICAgICAgICA8TW9iaWxlRm9vdGVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGVyby1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC01LjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2xlZnQtaGVybyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZnJlY2tiZWF1dHkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL3Nob3AtaGVhZGVyLWxlZnQuanBnJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDcyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICNjYXJvdXNlbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vbWswZnJlY2tiZWF1dHlmd2prdTUua2luc3RhY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9GcmVja19TbWwtT3Blbl9GbGF0bGF5LVNoYWRvd19SX182NzZ4Njc2LmpwZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMSU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNwcm9kdWN0cy1oZXJvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9tazBmcmVja2JlYXV0eWZ3amt1NS5raW5zdGFjZG4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA0L0ZyZWNrX0dyb3VwLUNvbGxlY3Rpb25fRmxhdGxheS1TaGFkb3dfUl8xMzUxeDkwMV9JbWdPcHRtLmpwZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgbWluLWhlaWdodDogOTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xuICAgICAgICAgICAgLmhlcm8tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNwcm9kdWN0cy1oZXJvIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTU1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTIwcHgpIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xuICAgICAgICAgICAgI3Byb2R1Y3RzLWhlcm8ge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59Il19 */\n/*@ sourceURL=/Users/gisellademorais/code/freck-test/pages/index.js */"));
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
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("https://my-json-server.typicode.com/freckbeauty/dummy-data/products", {
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
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gisellademorais/code/freck-test/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "cart-localstorage":
/*!************************************!*\
  !*** external "cart-localstorage" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cart-localstorage");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map