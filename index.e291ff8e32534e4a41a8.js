/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/company.css":
/*!*****************************!*\
  !*** ./src/css/company.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/decision.css":
/*!******************************!*\
  !*** ./src/css/decision.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/faq.css":
/*!*************************!*\
  !*** ./src/css/faq.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/feature.css":
/*!*****************************!*\
  !*** ./src/css/feature.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/flow.css":
/*!**************************!*\
  !*** ./src/css/flow.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/kv.css":
/*!************************!*\
  !*** ./src/css/kv.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/price.css":
/*!***************************!*\
  !*** ./src/css/price.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/top.css":
/*!*************************!*\
  !*** ./src/css/top.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/video.css":
/*!***************************!*\
  !*** ./src/css/video.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/voice.css":
/*!***************************!*\
  !*** ./src/css/voice.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_top_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/top.css */ "./src/css/top.css");
/* harmony import */ var _css_kv_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/kv.css */ "./src/css/kv.css");
/* harmony import */ var _css_feature_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/feature.css */ "./src/css/feature.css");
/* harmony import */ var _css_decision_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/decision.css */ "./src/css/decision.css");
/* harmony import */ var _css_flow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/flow.css */ "./src/css/flow.css");
/* harmony import */ var _css_price_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/price.css */ "./src/css/price.css");
/* harmony import */ var _css_video_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/video.css */ "./src/css/video.css");
/* harmony import */ var _css_voice_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/voice.css */ "./src/css/voice.css");
/* harmony import */ var _css_faq_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/faq.css */ "./src/css/faq.css");
/* harmony import */ var _css_company_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css/company.css */ "./src/css/company.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gsap/CSSRulePlugin */ "./node_modules/gsap/CSSRulePlugin.js");














gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12__.ScrollTrigger);

gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.registerPlugin(gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__.CSSRulePlugin);


$(function() {
    //よくある質問クリックイベント
    $('.faq_item').click(function() {
        $(this).find('.faq_mark').toggleClass('open');
        $(this).find('.faq_answer').slideToggle();
    });


    /* 利用者の声アコーディオン */
    $('.voice_head_wrapper').click(function() {
        $(this).find('.voice_btn').toggleClass('open');
        $(this).css('margin-bottom', 0);
        $('.voice_flex').slideToggle();
        $(this).find('.voice_btn').toggleClass('active');
    });

    /* ハンバーガーメニュークリックイベント */
    $(".hamburger_btn").click(function () {
        $(this).toggleClass('active');
        $(".hamburger_menu").toggleClass('panelactive');
        // $('.hamburger_menu').slideToggle();
    });

    $(".hamburger_link").click(function () {
        $(".hamburger_btn").removeClass("active");
        $(".hamburger_menu").toggleClass('panelactive');
        // $('.hamburger_menu').slideToggle();
    });

    $('.top_back_btn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });
});

document.querySelectorAll('.CTA a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

/*  出現アニメーション */
document.addEventListener("DOMContentLoaded", function() {
    // レスポンシブ対応
    let mm = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.matchMedia();
    /* sp */
    mm.add("(max-width: 767px)", () => {
        /* featureセクション */
        let speech = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".feature_headline",
                start: "-=300px",
                scrub: false,
            },
        });
        speech
        .from(".feature_head .speech", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"});

        /* flowセクション */
        let flow_upper_title = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".flow_headline",
                start: "-=260px",
                scrub: false,
            },
        });
        flow_upper_title
        .from(".flow_upper_title", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let  flowSupport = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".flow_support",
                start: "-=400px",
                scrub: false,
            },
        });

        flowSupport
        .from(".kirakira_01", { scale: 0, opacity: 0, duration: 0.2, ease: "bounce.out"})
        .from(".kirakira_02", { scale: 0, opacity: 0, duration: 0.2, ease: "bounce.out"}, "-=0.2");

        /* supportセクション */
        let support_content1 = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".support_content_img01",
                start: "-=500px",
                scrub: false,
            },
        });
        support_content1
        .from(".support_content_img01", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let support_content2 = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".support_content_img02",
                start: "-=500px",
                scrub: false,
            },
        });
        support_content2
        .from(".support_content_img02", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let support_content3 = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".support_content_img03",
                start: "-=500px",
                scrub: false,
            },
        });
        support_content3
        .from(".support_content_img03", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let support_content4 = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".support_content_img04",
                start: "-=500px",
                scrub: false,
            },
        });
        support_content4
        .from(".support_content_img04", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        // let  flowSupport = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".flow_support",
        //         start: "-=400px",
        //         scrub: false,
        //     },
        // });

        /* priceセクション */
        let price_upper_arraow = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".price_upper_arraow",
                start: "-=480px",
                scrub: false,
            },
        });
        price_upper_arraow
        .from(".price_upper_arraow", { y: -10, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let  subscCourse = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".subsc_course",
                start: "-=440px",
                scrub: false,
            },
        });
        subscCourse
        .to(".subsc_course_hukidashi", { scale: 1, opacity: 1, duration: 0.5, ease: "Power4.easeOut"});

        let  course_decoration_text = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".course_decoration_text",
                start: "-=480px",
                scrub: false,
            },
        });
        course_decoration_text
        .from(".course_decoration_text", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"})

        gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.to(".bg_orange", {
            scrollTrigger: {
                trigger: ".bg_orange",
                start: "-=560px",
                toggleClass: {
                targets: ".bg_orange",
                className: "active",
                },
                once: true,
            },
        });

        let underline01 = gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__.CSSRulePlugin.getRule(".underline_anime_01::after");

        gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.to(underline01, {
            scrollTrigger: {
                trigger: ".single_course",
                start: "-=400px",
                toggleClass: {
                targets: ".underline_anime_01",
                className: "active",
                },
                once: true,
            },
        });

        let underline02 = gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__.CSSRulePlugin.getRule(".underline_anime_02::after");

        gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.to(underline02, {
            scrollTrigger: {
                trigger: ".subsc_course",
                start: "-=400px",
                toggleClass: {
                targets: ".underline_anime_02",
                className: "active",
                },
                once: true,
            },
        });
    });

    /* pc */
    mm.add("(min-width: 768px)", () => {
        /* featureセクション */
        let speech = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".feature_headline",
                start: "-=400px",
                scrub: false,
            },
        });
        speech
        .from(".feature_head .speech", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"});

        /* flowセクション */
        let flow_upper_title = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".flow_headline",
                start: "-=400px",
                scrub: false,
            },
        });
        flow_upper_title
        .from(".flow_upper_title", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let  flowSupport = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".flow_support",
                start: "-=460px",
                scrub: false,
            },
        });

        flowSupport
        .from(".kirakira_01", { scale: 0, opacity: 0, duration: 0.2, ease: "bounce.out"})
        .from(".kirakira_02", { scale: 0, opacity: 0, duration: 0.2, ease: "bounce.out"}, "-=0.2");

        /* priceセクション */
        let price_upper_arraow = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".price_upper_arraow",
                start: "-=580px",
                scrub: false,
            },
        });
        price_upper_arraow
        .from(".price_upper_arraow", { y: -10, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let  subscCourse = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".subsc_course",
                start: "-=540px",
                scrub: false,
            },
        });
        subscCourse
        .to(".subsc_course_hukidashi", { scale: 1, opacity: 1, duration: 0.5, ease: "Power4.easeOut"});

        let  course_decoration_text = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".course_decoration_text",
                start: "-=580px",
                scrub: false,
            },
        });
        course_decoration_text
        .from(".course_decoration_text", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"})

        gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.to(".bg_orange", {
            scrollTrigger: {
                trigger: ".bg_orange",
                start: "-=660px",
                toggleClass: {
                targets: ".bg_orange",
                className: "active",
                },
                once: true,
            },
        });

        let underline01 = gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__.CSSRulePlugin.getRule(".underline_anime_01::after");

        gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.to(underline01, {
            scrollTrigger: {
                trigger: ".single_course",
                start: "-=500px",
                toggleClass: {
                targets: ".underline_anime_01",
                className: "active",
                },
                once: true,
            },
        });

        let underline02 = gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__.CSSRulePlugin.getRule(".underline_anime_02::after");

        gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.to(underline02, {
            scrollTrigger: {
                trigger: ".subsc_course",
                start: "-=500px",
                toggleClass: {
                targets: ".underline_anime_02",
                className: "active",
                },
                once: true,
            },
        });
    });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"src_css_reset_css-src_css_top_css": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpstage"] = self["webpackChunkpstage"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_CSSRulePlugin_js-node_modules_gsap_ScrollTrigger_js-node_modules_gs-7662f8","src_css_reset_css-src_css_top_css"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTI5MWZmOGUzMjUzNGU0YTQxYTguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXdCO0FBQ0Y7QUFDRDtBQUNLO0FBQ0M7QUFDSjtBQUNDO0FBQ0E7QUFDQTtBQUNEO0FBQ0k7O0FBRUM7QUFDdUI7QUFDbkQsdUNBQUksZ0JBQWdCLDhEQUFhO0FBQ2tCO0FBQ25ELHVDQUFJLGdCQUFnQiw4REFBYTs7O0FBR2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1Q0FBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUNBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EseUNBQXlDLDREQUE0RDs7QUFFckc7QUFDQSwrQkFBK0IsdUNBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EscUNBQXFDLDREQUE0RDs7QUFFakcsMkJBQTJCLHVDQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQSxnQ0FBZ0Msd0RBQXdEO0FBQ3hGLGdDQUFnQyx3REFBd0Q7O0FBRXhGO0FBQ0EsaUNBQWlDLHVDQUFJO0FB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QUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2Nzcy9jb21wYW55LmNzcz8zYTExIiwid2VicGFjazovL3BzdGFnZS8uL3NyYy9jc3MvZGVjaXNpb24uY3NzP2Y5ODciLCJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2Nzcy9mYXEuY3NzPzNkZDAiLCJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2Nzcy9mZWF0dXJlLmNzcz9lOWUxIiwid2VicGFjazovL3BzdGFnZS8uL3NyYy9jc3MvZmxvdy5jc3M/ODAzMSIsIndlYnBhY2s6Ly9wc3RhZ2UvLi9zcmMvY3NzL2t2LmNzcz9iY2FhIiwid2VicGFjazovL3BzdGFnZS8uL3NyYy9jc3MvcHJpY2UuY3NzPzUxZTEiLCJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2Nzcy9yZXNldC5jc3M/NTkzNiIsIndlYnBhY2s6Ly9wc3RhZ2UvLi9zcmMvY3NzL3RvcC5jc3M/ZWU4OCIsIndlYnBhY2s6Ly9wc3RhZ2UvLi9zcmMvY3NzL3ZpZGVvLmNzcz9kNjRiIiwid2VicGFjazovL3BzdGFnZS8uL3NyYy9jc3Mvdm9pY2UuY3NzPzJhNGQiLCJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wc3RhZ2Uvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wc3RhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wc3RhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wc3RhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9jc3MvcmVzZXQuY3NzXCJcbmltcG9ydCBcIi4vY3NzL3RvcC5jc3NcIlxuaW1wb3J0IFwiLi9jc3Mva3YuY3NzXCJcbmltcG9ydCBcIi4vY3NzL2ZlYXR1cmUuY3NzXCJcbmltcG9ydCBcIi4vY3NzL2RlY2lzaW9uLmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy9mbG93LmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy9wcmljZS5jc3NcIlxuaW1wb3J0IFwiLi9jc3MvdmlkZW8uY3NzXCJcbmltcG9ydCBcIi4vY3NzL3ZvaWNlLmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy9mYXEuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9jb21wYW55LmNzc1wiO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuaW1wb3J0IHsgQ1NTUnVsZVBsdWdpbiB9IGZyb20gXCJnc2FwL0NTU1J1bGVQbHVnaW5cIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUnVsZVBsdWdpbik7XG5cblxuJChmdW5jdGlvbigpIHtcbiAgICAvL+OCiOOBj+OBguOCi+izquWVj+OCr+ODquODg+OCr+OCpOODmeODs+ODiFxuICAgICQoJy5mYXFfaXRlbScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5mYXFfbWFyaycpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLmZhcV9hbnN3ZXInKS5zbGlkZVRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLnRvcF9iYWNrX2J0bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9KTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ1RBIGEnKS5mb3JFYWNoKGFuY2hvciA9PiB7XG4gICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpLnN1YnN0cmluZygxKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTtcblxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB0YXJnZXRFbGVtZW50Lm9mZnNldFRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG4vKiDCoOWHuuePvuOCouODi+ODoeODvOOCt+ODp+ODsyAqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8g44Os44K544Od44Oz44K344OW5a++5b+cXG4gICAgbGV0IG1tID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG4gICAgLyogc3AgKi9cbiAgICBtbS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICAgICAgICAvKiBmZWF0dXJl44K744Kv44K344On44OzICovXG4gICAgICAgIGxldCBzcGVlY2ggPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5mZWF0dXJlX2hlYWRsaW5lXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiLT0zMDBweFwiLFxuICAgICAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBzcGVlY2hcbiAgICAgICAgLmZyb20oXCIuZmVhdHVyZV9oZWFkIC5zcGVlY2hcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSk7XG5cbiAgICAgICAgLyogZmxvd+OCu+OCr+OCt+ODp+ODsyAqL1xuICAgICAgICBsZXQgZmxvd191cHBlcl90aXRsZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLmZsb3dfaGVhZGxpbmVcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCItPTI2MHB4XCIsXG4gICAgICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGZsb3dfdXBwZXJfdGl0bGVcbiAgICAgICAgLmZyb20oXCIuZmxvd191cHBlcl90aXRsZVwiLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9LCBcIis9MC40XCIpO1xuXG4gICAgICAgIGxldCAgZmxvd1N1cHBvcnQgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5mbG93X3N1cHBvcnRcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCItPTQwMHB4XCIsXG4gICAgICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZmxvd1N1cHBvcnRcbiAgICAgICAgLmZyb20oXCIua2lyYWtpcmFfMDFcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMiwgZWFzZTogXCJib3VuY2Uub3V0XCJ9KVxuICAgICAgICAuZnJvbShcIi5raXJha2lyYV8wMlwiLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yLCBlYXNlOiBcImJvdW5jZS5vdXRcIn0sIFwiLT0wLjJcIik7XG5cbiAgICAgICAgLyogcHJpY2Xjgrvjgq/jgrfjg6fjg7MgKi9cbiAgICAgICAgbGV0IHByaWNlX3VwcGVyX2FycmFvdyA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLnByaWNlX3VwcGVyX2FycmFvd1wiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NDgwcHhcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcHJpY2VfdXBwZXJfYXJyYW93XG4gICAgICAgIC5mcm9tKFwiLnByaWNlX3VwcGVyX2FycmFvd1wiLCB7IHk6IC0xMCwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSwgXCIrPTAuNFwiKTtcblxuICAgICAgICBsZXQgIHN1YnNjQ291cnNlID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuc3Vic2NfY291cnNlXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiLT00NDBweFwiLFxuICAgICAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBzdWJzY0NvdXJzZVxuICAgICAgICAudG8oXCIuc3Vic2NfY291cnNlX2h1a2lkYXNoaVwiLCB7IHNjYWxlOiAxLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMC41LCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9KTtcblxuICAgICAgICBsZXQgIGNvdXJzZV9kZWNvcmF0aW9uX3RleHQgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5jb3Vyc2VfZGVjb3JhdGlvbl90ZXh0XCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiLT00ODBweFwiLFxuICAgICAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb3Vyc2VfZGVjb3JhdGlvbl90ZXh0XG4gICAgICAgIC5mcm9tKFwiLmNvdXJzZV9kZWNvcmF0aW9uX3RleHRcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSlcblxuICAgICAgICBnc2FwLnRvKFwiLmJnX29yYW5nZVwiLCB7XG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuYmdfb3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiLT01NjBweFwiLFxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogXCIuYmdfb3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB1bmRlcmxpbmUwMSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi51bmRlcmxpbmVfYW5pbWVfMDE6OmFmdGVyXCIpO1xuXG4gICAgICAgIGdzYXAudG8odW5kZXJsaW5lMDEsIHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5zaW5nbGVfY291cnNlXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiLT00MDBweFwiLFxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogXCIudW5kZXJsaW5lX2FuaW1lXzAxXCIsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB1bmRlcmxpbmUwMiA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi51bmRlcmxpbmVfYW5pbWVfMDI6OmFmdGVyXCIpO1xuXG4gICAgICAgIGdzYXAudG8odW5kZXJsaW5lMDIsIHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5zdWJzY19jb3Vyc2VcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCItPTQwMHB4XCIsXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBcIi51bmRlcmxpbmVfYW5pbWVfMDJcIixcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvKiBwYyAqL1xuICAgIG1tLmFkZChcIihtaW4td2lkdGg6IDc2OHB4KVwiLCAoKSA9PiB7XG4gICAgICAgIC8qIGZlYXR1cmXjgrvjgq/jgrfjg6fjg7MgKi9cbiAgICAgICAgbGV0IHNwZWVjaCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLmZlYXR1cmVfaGVhZGxpbmVcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCItPTQwMHB4XCIsXG4gICAgICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHNwZWVjaFxuICAgICAgICAuZnJvbShcIi5mZWF0dXJlX2hlYWQgLnNwZWVjaFwiLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9KTtcblxuICAgICAgICAvKiBmbG9344K744Kv44K344On44OzICovXG4gICAgICAgIGxldCBmbG93X3VwcGVyX3RpdGxlID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuZmxvd19oZWFkbGluZVwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NDAwcHhcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgZmxvd191cHBlcl90aXRsZVxuICAgICAgICAuZnJvbShcIi5mbG93X3VwcGVyX3RpdGxlXCIsIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0sIFwiKz0wLjRcIik7XG5cbiAgICAgICAgbGV0ICBmbG93U3VwcG9ydCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLmZsb3dfc3VwcG9ydFwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NDYwcHhcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBmbG93U3VwcG9ydFxuICAgICAgICAuZnJvbShcIi5raXJha2lyYV8wMVwiLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yLCBlYXNlOiBcImJvdW5jZS5vdXRcIn0pXG4gICAgICAgIC5mcm9tKFwiLmtpcmFraXJhXzAyXCIsIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjIsIGVhc2U6IFwiYm91bmNlLm91dFwifSwgXCItPTAuMlwiKTtcblxuICAgICAgICAvKiBwcmljZeOCu+OCr+OCt+ODp+ODsyAqL1xuICAgICAgICBsZXQgcHJpY2VfdXBwZXJfYXJyYW93ID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIucHJpY2VfdXBwZXJfYXJyYW93XCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiLT01ODBweFwiLFxuICAgICAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBwcmljZV91cHBlcl9hcnJhb3dcbiAgICAgICAgLmZyb20oXCIucHJpY2VfdXBwZXJfYXJyYW93XCIsIHsgeTogLTEwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9LCBcIis9MC40XCIpO1xuXG4gICAgICAgIGxldCAgc3Vic2NDb3Vyc2UgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5zdWJzY19jb3Vyc2VcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCItPTU0MHB4XCIsXG4gICAgICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHN1YnNjQ291cnNlXG4gICAgICAgIC50byhcIi5zdWJzY19jb3Vyc2VfaHVraWRhc2hpXCIsIHsgc2NhbGU6IDEsIG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0pO1xuXG4gICAgICAgIGxldCAgY291cnNlX2RlY29yYXRpb25fdGV4dCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLmNvdXJzZV9kZWNvcmF0aW9uX3RleHRcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCItPTU4MHB4XCIsXG4gICAgICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvdXJzZV9kZWNvcmF0aW9uX3RleHRcbiAgICAgICAgLmZyb20oXCIuY291cnNlX2RlY29yYXRpb25fdGV4dFwiLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9KVxuXG4gICAgICAgIGdzYXAudG8oXCIuYmdfb3JhbmdlXCIsIHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5iZ19vcmFuZ2VcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCItPTY2MHB4XCIsXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBcIi5iZ19vcmFuZ2VcIixcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHVuZGVybGluZTAxID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLnVuZGVybGluZV9hbmltZV8wMTo6YWZ0ZXJcIik7XG5cbiAgICAgICAgZ3NhcC50byh1bmRlcmxpbmUwMSwge1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLnNpbmdsZV9jb3Vyc2VcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCItPTUwMHB4XCIsXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBcIi51bmRlcmxpbmVfYW5pbWVfMDFcIixcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHVuZGVybGluZTAyID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLnVuZGVybGluZV9hbmltZV8wMjo6YWZ0ZXJcIik7XG5cbiAgICAgICAgZ3NhcC50byh1bmRlcmxpbmUwMiwge1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLnN1YnNjX2NvdXJzZVwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzczoge1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IFwiLnVuZGVybGluZV9hbmltZV8wMlwiLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJhY3RpdmVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3JjX2Nzc19yZXNldF9jc3Mtc3JjX2Nzc190b3BfY3NzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BzdGFnZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwc3RhZ2VcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2dzYXBfQ1NTUnVsZVBsdWdpbl9qcy1ub2RlX21vZHVsZXNfZ3NhcF9TY3JvbGxUcmlnZ2VyX2pzLW5vZGVfbW9kdWxlc19ncy03NjYyZjhcIixcInNyY19jc3NfcmVzZXRfY3NzLXNyY19jc3NfdG9wX2Nzc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9