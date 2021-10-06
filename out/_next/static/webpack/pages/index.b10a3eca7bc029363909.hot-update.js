webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\USER\\nodeex\\nextjs_landing_page\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */









var data = [{
  id: 1,
  title: 'Modern look & trending design',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 4
}, {
  id: 2,
  title: 'Design Quality & performance',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 5
}, {
  id: 3,
  title: 'Layout and organized layers',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 5
}, {
  id: 4,
  title: 'Modern look & trending design',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 4
}];
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1619
    },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1619,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};
var carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 22
    }
  }),
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1
};
function TestimonialCard() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    id: "testimonial",
    sx: {
      variant: "section.testimonial"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    css: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Meet Client Satisfaction",
    slogan: "Testimonial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.carouselWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.reviewCard,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rating: item.review,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h3",
      sx: styles.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 15
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 15
      }
    }, item.description), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "card__footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.avatar,
      alt: item.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 19
      }
    })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "reviewer-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h4",
      sx: styles.heading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 19
      }
    }, item.name), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.designation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, item.designation))));
  }))));
}
_c = TestimonialCard;
var styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: ['100%', null, null, '750px', '1000px', '1180px', null, 'calc(50% + 865px)'],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s'
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: ['30px 20px 35px', '30px 25px 35px', '30px 20px 35px', '35px 30px 40px 40px', '30px 30px 35px', '35px 30px 40px 40px'],
    bg: 'white',
    textAlign: 'left',
    m: ['28px 5px 30px 5px', '28px 20px 30px 20px', '28px 15px 30px 15px', '28px 15px 30px 15px', '30px 20px 40px'],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)'
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex'
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0
        }
      },
      '.star': {
        color: 'primary',
        mr: '1px'
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px'
      }
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover'
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4
  }
};

var _c;

$RefreshReg$(_c, "TestimonialCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZHJhZ2dhYmxlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaXRlbUNsYXNzIiwia2V5Qm9hcmRDb250cm9sIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJtYXAiLCJpdGVtIiwicmV2aWV3Q2FyZCIsImhlYWRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsImJnIiwibSIsIm1iIiwidWwiLCJwbCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmbGV4U2hyaW5rIiwiaW1nIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLCtCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVDLHFFQUxWO0FBTUVDLE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQURXLEVBV1g7QUFDRVAsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLDhCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVLLHFFQUxWO0FBTUVILE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQVhXLEVBcUJYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSw2QkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFTSxxRUFMVjtBQU1FSixNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0FyQlcsRUErQlg7QUFDRVAsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLCtCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVPLHNFQUxWO0FBTUVMLE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQS9CVyxDQUFiO0FBMkNBLElBQU1JLFVBQVUsR0FBRztBQUNq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RCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLE1BQWhCLENBSEM7QUFJTE0sU0FBSyxFQUFFLE1BSkY7QUFLTFEsY0FBVSxFQUFFO0FBTFAsR0FqR007QUF3R2I5RSxhQUFXLEVBQUU7QUFDWDRFLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixDQURDO0FBRVhDLGNBQVUsRUFBRSxRQUZEO0FBR1hQLFNBQUssRUFBRSxNQUhJO0FBSVhRLGNBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsQ0FBYjtBQUpELEdBeEdBO0FBOEdiaEMsU0FBTyxFQUFFO0FBQ1A4QixZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FESDtBQUVQQyxjQUFVLEVBQUUsR0FGTDtBQUdQYixNQUFFLEVBQUUsS0FIRztBQUlQTSxTQUFLLEVBQUUsTUFKQTtBQUtQUSxjQUFVLEVBQUU7QUFMTCxHQTlHSTtBQXFIYjFFLGFBQVcsRUFBRTtBQUNYa0UsU0FBSyxFQUFFLFNBREk7QUFFWE8sY0FBVSxFQUFFLEtBRkQ7QUFHWEQsWUFBUSxFQUFFLENBSEM7QUFJWEUsY0FBVSxFQUFFO0FBSkQ7QUFySEEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMTBhM2VjYTdiYzAyOTM2MzkwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgQm94LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuaW1wb3J0IFJhdGluZyBmcm9tICdjb21wb25lbnRzL3JhdGluZyc7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcblxuaW1wb3J0IEF2YXRhcjEgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjEucG5nJztcbmltcG9ydCBBdmF0YXIyIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIyLnBuZyc7XG5pbXBvcnQgQXZhdGFyMyBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmcnO1xuaW1wb3J0IEF2YXRhcjQgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjQucG5nJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ24nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxuICAgIGF2YXRhcjogQXZhdGFyMSxcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxuICAgIHJldmlldzogNCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnRGVzaWduIFF1YWxpdHkgJiBwZXJmb3JtYW5jZScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLicsXG4gICAgYXZhdGFyOiBBdmF0YXIyLFxuICAgIG5hbWU6ICdEZW5ueSBIaWxndXN0b24nLFxuICAgIGRlc2lnbmF0aW9uOiAnQGRlbm55LmhpbCcsXG4gICAgcmV2aWV3OiA1LFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6ICdMYXlvdXQgYW5kIG9yZ2FuaXplZCBsYXllcnMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxuICAgIGF2YXRhcjogQXZhdGFyMyxcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxuICAgIHJldmlldzogNSxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiAnTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ24nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxuICAgIGF2YXRhcjogQXZhdGFyNCxcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxuICAgIHJldmlldzogNCxcbiAgfSxcbl07XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxNjE5IH0sXG4gICAgaXRlbXM6IDQsXG4gICAgc2xpZGVzVG9TbGlkZTogNCwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbiAgbGFwdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDE2MTksIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiAzLFxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxuICAgIGl0ZW1zOiAyLFxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG59O1xuXG5jb25zdCBjYXJvdXNlbFBhcmFtcyA9IHtcbiAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgYXV0b1BsYXlTcGVlZDogMzAwMCxcbiAgY2VudGVyTW9kZTogZmFsc2UsXG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY29udGFpbmVyQ2xhc3M6IFwiY2Fyb3VzZWwtY29udGFpbmVyXCIsXG4gIGN1c3RvbUJ1dHRvbkdyb3VwOiA8QnV0dG9uR3JvdXAgLz4sXG4gIGRvdExpc3RDbGFzczogXCJcIixcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgaW5maW5pdGU6IHRydWUsXG4gIGl0ZW1DbGFzczogXCJcIixcbiAga2V5Qm9hcmRDb250cm9sOiB0cnVlLFxuICBtaW5pbXVtVG91Y2hEcmFnOiA4MCxcbiAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlOiB0cnVlLFxuICByZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXG4gIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXG4gIHNob3dEb3RzOiBmYWxzZSxcbiAgc2xpZGVyQ2xhc3M6IFwiXCIsXG4gIHNsaWRlc1RvU2xpZGU6IDEsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsXCIgc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLnRlc3RpbW9uaWFsXCIgfX0+XG4gICAgICA8Q29udGFpbmVyIGNzcz17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICA8U2VjdGlvbkhlYWRlciB0aXRsZT1cIk1lZXQgQ2xpZW50IFNhdGlzZmFjdGlvblwiIHNsb2dhbj1cIlRlc3RpbW9uaWFsXCIgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEJveCBzeD17c3R5bGVzLmNhcm91c2VsV3JhcHBlcn0+XG4gICAgICAgIDxDYXJvdXNlbCB7Li4uY2Fyb3VzZWxQYXJhbXN9PlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnJldmlld0NhcmR9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgIDxSYXRpbmcgcmF0aW5nPXtpdGVtLnJldmlld30gLz5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHN4PXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZGVzY3JpcHRpb259ID57aXRlbS5kZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5hdmF0YXJ9IGFsdD17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld2VyLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzeD17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNpZ25hdGlvbn0+e2l0ZW0uZGVzaWduYXRpb259PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9Cb3g+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhcm91c2VsV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICAgIG10OiAnLTMwcHgnLFxuICAgIHB4OiAnMTVweCcsXG4gICAgJy5jYXJvdXNlbC1jb250YWluZXInOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWF4V2lkdGg6IFtcbiAgICAgICAgJzEwMCUnLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICAnNzUwcHgnLFxuICAgICAgICAnMTAwMHB4JyxcbiAgICAgICAgJzExODBweCcsXG4gICAgICAgIG51bGwsXG4gICAgICAgICdjYWxjKDUwJSArIDg2NXB4KScsXG4gICAgICBdLFxuICAgICAgbXI6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICctMjIwcHgnXSxcbiAgICAgIG1sOiAnYXV0bycsXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0nOiB7XG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgfSxcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDRuKSc6IHtcbiAgICAgICAgb3BhY2l0eTogJzAuNScsXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjIwcHgpJzoge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJldmlld0NhcmQ6IHtcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDFweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjM1KScsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxuICAgIHA6IFtcbiAgICAgICczMHB4IDIwcHggMzVweCcsXG4gICAgICAnMzBweCAyNXB4IDM1cHgnLFxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcbiAgICAgICczNXB4IDMwcHggNDBweCA0MHB4JyxcbiAgICAgICczMHB4IDMwcHggMzVweCcsXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXG4gICAgXSxcbiAgICBiZzogJ3doaXRlJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBtOiBbXG4gICAgICAnMjhweCA1cHggMzBweCA1cHgnLFxuICAgICAgJzI4cHggMjBweCAzMHB4IDIwcHgnLFxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxuICAgICAgJzMwcHggMjBweCA0MHB4JyxcbiAgICBdLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiAnMHB4IDZweCAzMHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxuICAgIH0sXG4gICAgJy5yYXRpbmcnOiB7XG4gICAgICBtYjogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgICAgdWw6IHtcbiAgICAgICAgcGw6IDAsXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgICBtYjogMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgfSxcbiAgICAgIHN2Zzoge1xuICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICBtYXJnaW5SaWdodDogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnLnN0YXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgIG1yOiAnMXB4JyxcbiAgICAgIH0sXG4gICAgICAnLnN0YXItbyc6IHtcbiAgICAgICAgY29sb3I6ICcjZGRkJyxcbiAgICAgICAgbXI6ICcxcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcuY2FyZC1mb290ZXInOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1hcmdpblRvcDogWzUsIG51bGwsIG51bGwsICczM3B4J10sXG4gICAgICAnLmltYWdlJzoge1xuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBtcjogWzMsIG51bGwsIG51bGwsIDRdLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGltZzoge1xuICAgICAgICAgIHdpZHRoOiAnNTVweCcsXG4gICAgICAgICAgaGVpZ2h0OiAnNTVweCcsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IFsxLCAyXSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgbWI6IFszLCBudWxsLCBudWxsLCAnMjJweCddLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgbGluZUhlaWdodDogMS42LFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgY29sb3I6ICd0ZXh0JyxcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBtYjogJzNweCcsXG4gICAgY29sb3I6ICd0ZXh0JyxcbiAgICBsaW5lSGVpZ2h0OiAxLjMsXG4gIH0sXG4gIGRlc2lnbmF0aW9uOiB7XG4gICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICBmb250U2l6ZTogMSxcbiAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==