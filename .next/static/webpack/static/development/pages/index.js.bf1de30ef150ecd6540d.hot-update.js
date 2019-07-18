webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer/FooterOptIn.jsx":
/*!*******************************************!*\
  !*** ./components/Footer/FooterOptIn.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
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
/* harmony import */ var _config_public__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../config/public */ "./config/public.js");














var FooterOptIn =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(FooterOptIn, _Component);

  function FooterOptIn(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, FooterOptIn);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(FooterOptIn).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
        var email;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
                return Object(_config_public__WEBPACK_IMPORTED_MODULE_12__["subscribeToNewsletter"])({
                  email: email
                });

              case 7:
                if (_this.state) {
                  _this.state.value = '';
                }

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](4);
                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 10]]);
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
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(FooterOptIn, [{
    key: "handleThanks",
    value: function handleThanks() {
      this.setState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        subscribed: true
      });

      if (this.state.subscribed == true) {}
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1680652296"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        id: "opt-in",
        className: "jsx-1680652296"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
        className: "jsx-1680652296"
      }, "Enter the Freck Fam"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("br", {
        className: "jsx-1680652296"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        className: "jsx-1680652296"
      }, "We send email updates on stuff you'll probably want to know about: new products, promos, international shipping, parties, travel guides, & playlists. Welcome to the Freck Fam."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-1680652296"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        id: !this.state.subscribe && hide,
        className: "jsx-1680652296"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        htmlFor: "email",
        className: "jsx-1680652296" + " " + "form-label"
      }, "Email *"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("br", {
        className: "jsx-1680652296"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        value: this.state.value,
        type: "email",
        required: true,
        id: "email",
        onChange: this.handleChange,
        className: "jsx-1680652296" + " " + "form-input"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
        type: "submit",
        className: "jsx-1680652296"
      }, "JOIN"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1680652296"
      }, "Thank you for joining the Freck Fam!"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "1680652296"
      }, "#hide.jsx-1680652296{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxjYWhjZW50ZW5vL2ZyZWNrL2ZyZWNrLW5leHQvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyT3B0SW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGb0IsQUFHd0IsYUFDZiIsImZpbGUiOiIvVXNlcnMvbWlsY2FoY2VudGVuby9mcmVjay9mcmVjay1uZXh0L2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlck9wdEluLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdWJzY3JpYmVUb05ld3NsZXR0ZXIgfSBmcm9tICcuLi8uLi9jb25maWcvcHVibGljJztcblxuY2xhc3MgRm9vdGVyT3B0SW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgc3Vic2NyaWJlZDogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVUaGFua3MoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZT0oe1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIHN1YnNjcmliZWQ6IHRydWVcbiAgICB9KVxuICAgIGlmICh0aGlzLnN0YXRlLnN1YnNjcmliZWQgPT0gdHJ1ZSkge1xuXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW1haWwgPSAodGhpcy5zdGF0ZSAmJiB0aGlzLnN0YXRlLnZhbHVlKSB8fCBudWxsO1xuICAgIGlmICh0aGlzLnN0YXRlICYmICFlbWFpbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzdWJzY3JpYmVUb05ld3NsZXR0ZXIoeyBlbWFpbCB9KTtcbiAgICAgIGlmICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBpZD1cIm9wdC1pblwiPlxuICAgICAgICAgIDxoMz5FbnRlciB0aGUgRnJlY2sgRmFtPC9oMz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxwPldlIHNlbmQgZW1haWwgdXBkYXRlcyBvbiBzdHVmZiB5b3UnbGwgcHJvYmFibHkgd2FudCB0byBrbm93IGFib3V0OiBuZXcgcHJvZHVjdHMsIHByb21vcywgaW50ZXJuYXRpb25hbCBzaGlwcGluZywgcGFydGllcywgdHJhdmVsIGd1aWRlcywgJiBwbGF5bGlzdHMuIFdlbGNvbWUgdG8gdGhlIEZyZWNrIEZhbS48L3A+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgaWQ9eyF0aGlzLnN0YXRlLnN1YnNjcmliZSAmJiBoaWRlfT5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFbWFpbCAqXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIEpPSU5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgIFRoYW5rIHlvdSBmb3Igam9pbmluZyB0aGUgRnJlY2sgRmFtIVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjaGlkZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3Rlck9wdEluOyJdfQ== */\n/*@ sourceURL=/Users/milcahcenteno/freck/freck-next/components/Footer/FooterOptIn.jsx */"));
    }
  }]);

  return FooterOptIn;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FooterOptIn);

/***/ })

})
//# sourceMappingURL=index.js.bf1de30ef150ecd6540d.hot-update.js.map