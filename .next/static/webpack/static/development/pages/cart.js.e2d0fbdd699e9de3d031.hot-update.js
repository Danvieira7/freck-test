webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./components/Footer/FooterOptIn.jsx":
/*!*******************************************!*\
  !*** ./components/Footer/FooterOptIn.jsx ***!
  \*******************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_public__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config/public */ "./config/public.js");













var FooterOptIn =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(FooterOptIn, _Component);

  function FooterOptIn(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FooterOptIn);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FooterOptIn).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var email;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                email = _this.state && _this.state.value || null;

                if (!(_this.state && !email)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.prev = 4;
                _context.next = 7;
                return Object(_config_public__WEBPACK_IMPORTED_MODULE_11__["subscribeToNewsletter"])({
                  email: email
                });

              case 7:
                _this.setState({
                  subscribed: !_this.state.subscribed
                });

                if (_this.state) {
                  _this.state.value = '';
                }

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](4);
                console.log(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      email: '',
      value: '',
      subscribed: false
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FooterOptIn, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var hide = {
        display: this.state.subscribed ? 'none' : 'block'
      };
      var show = {
        display: this.state.subscribed ? 'block' : 'none'
      };
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "opt-in",
        className: "jsx-3783179490"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3783179490"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-3783179490"
      }, "Enter the Freck Fam"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "jsx-3783179490"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-3783179490"
      }, "We send email updates on stuff you'll probably want to know about: new products, promos, international shipping, parties, travel guides, & playlists. Welcome to the Freck Fam."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-3783179490"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "form-container",
        style: hide,
        className: "jsx-3783179490"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "email",
        className: "jsx-3783179490" + " " + "form-label"
      }, "Email *"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "jsx-3783179490"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        value: this.state.value,
        type: "email",
        required: true,
        id: "email",
        onChange: this.handleChange,
        className: "jsx-3783179490" + " " + "form-input"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        className: "jsx-3783179490"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "submit",
        className: "jsx-3783179490"
      }, "JOIN")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: show,
        className: "jsx-3783179490"
      }, "Thank you for joining the Freck Fam!"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3783179490"
      }, "p.jsx-3783179490{padding-bottom:20px;}button.jsx-3783179490{margin-top:15px;font-size:16px;}h3.jsx-3783179490{font-family:'Eksell Display Medium';src:url('../.next/static/fonts/Eksell-Display-Medium.otf');font-size:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyT3B0SW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFb0IsQUFHaUMsQUFHSixBQUlvQixnQkFIckIsSUFIakIsV0FJQSxLQUc2RCwyREFDNUMsZUFDakIiLCJmaWxlIjoiL1VzZXJzL21pbGNhaGNlbnRlbm8vZnJlY2svZnJlY2stbmV4dC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJPcHRJbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9OZXdzbGV0dGVyIH0gZnJvbSAnLi4vLi4vY29uZmlnL3B1YmxpYyc7XG5cbmNsYXNzIEZvb3Rlck9wdEluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHN1YnNjcmliZWQ6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW1haWwgPSAodGhpcy5zdGF0ZSAmJiB0aGlzLnN0YXRlLnZhbHVlKSB8fCBudWxsO1xuICAgIGlmICh0aGlzLnN0YXRlICYmICFlbWFpbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzdWJzY3JpYmVUb05ld3NsZXR0ZXIoeyBlbWFpbCB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3N1YnNjcmliZWQ6ICF0aGlzLnN0YXRlLnN1YnNjcmliZWR9KTtcbiAgICAgIGlmICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBoaWRlID0ge1xuICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS5zdWJzY3JpYmVkID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgIH07XG4gICAgY29uc3Qgc2hvdyA9IHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUuc3Vic2NyaWJlZCA/ICdibG9jaycgOiAnbm9uZSdcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJvcHQtaW5cIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+RW50ZXIgdGhlIEZyZWNrIEZhbTwvaDM+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8cD5XZSBzZW5kIGVtYWlsIHVwZGF0ZXMgb24gc3R1ZmYgeW91J2xsIHByb2JhYmx5IHdhbnQgdG8ga25vdyBhYm91dDogbmV3IHByb2R1Y3RzLCBwcm9tb3MsIGludGVybmF0aW9uYWwgc2hpcHBpbmcsIHBhcnRpZXMsIHRyYXZlbCBndWlkZXMsICYgcGxheWxpc3RzLiBXZWxjb21lIHRvIHRoZSBGcmVjayBGYW0uPC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLWNvbnRhaW5lclwiIHN0eWxlPXtoaWRlfT5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFbWFpbCAqXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgSk9JTlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3Nob3d9PlRoYW5rIHlvdSBmb3Igam9pbmluZyB0aGUgRnJlY2sgRmFtITwvcD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRWtzZWxsIERpc3BsYXkgTWVkaXVtJztcbiAgICAgICAgICAgIHNyYzogdXJsKCcuLi8ubmV4dC9zdGF0aWMvZm9udHMvRWtzZWxsLURpc3BsYXktTWVkaXVtLm90ZicpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJPcHRJbjsiXX0= */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Footer/FooterOptIn.jsx */"));
    }
  }]);

  return FooterOptIn;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FooterOptIn);

/***/ })

})
//# sourceMappingURL=cart.js.e2d0fbdd699e9de3d031.hot-update.js.map