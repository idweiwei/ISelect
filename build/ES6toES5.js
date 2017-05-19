/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ISelect = __webpack_require__(1);

	var _ISelect2 = _interopRequireDefault(_ISelect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//可以通过回调来获取选择项
	new _ISelect2.default('.i-select', function (data) {
	    console.log('您选择的信息是：' + data);
	});

	//可以通过事件监听来获取选择项
	var el = document.querySelector('.i-select');
	el.addEventListener('selected', function (e) {
	    console.log('\n' + e.value);
	}, false);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ISelect = function () {
	    function ISelect(cls, callback) {
	        _classCallCheck(this, ISelect);

	        this.wrap = document.querySelector(cls);
	        this.options = this.wrap.querySelector('ul');
	        this.option = this.wrap.querySelectorAll('li');
	        this.selected = this.wrap.querySelector('.selected');
	        this.callback = callback;
	        this.createEvent();
	        this.bindEvent();
	    }

	    _createClass(ISelect, [{
	        key: 'bindEvent',
	        value: function bindEvent() {
	            this.selected.addEventListener('click', function (e) {
	                e.stopPropagation();
	                this.wrap.className += ' active';
	                this.options.style.display = 'block';
	            }.bind(this), false);
	            this.options.addEventListener('click', function (e) {
	                var el = e.target;
	                //e.stopPropagation();

	                if (el.tagName.toLowerCase() == 'li') {
	                    this.options.style.display = '';
	                    this.wrap.className = this.wrap.className.replace(/\s+active/, '');
	                    var selectedItem = el.innerHTML;
	                    var oldInfo = this.selected.innerHTML;
	                    if (selectedItem != oldInfo) {
	                        this.selected.innerHTML = selectedItem;
	                        //触发事件 给指定元素触发事件，参数为定义好的事件
	                        this.ev.value = selectedItem;
	                        this.wrap.dispatchEvent(this.ev);
	                        //触发回调，并传值
	                        this.callback && this.callback(selectedItem);
	                    }
	                }
	            }.bind(this), false);
	            document.body.addEventListener('click', function () {
	                this.options.style.display = '';
	                this.wrap.className = this.wrap.className.replace(/\s+active/, '');
	            }.bind(this), false);
	        }
	    }, {
	        key: 'createEvent',
	        value: function createEvent() {
	            this.ev = document.createEvent('UIEvent');
	            this.ev.initEvent('selected', true, true);
	        }
	    }]);

	    return ISelect;
	}();

	exports.default = ISelect;

/***/ }
/******/ ]);