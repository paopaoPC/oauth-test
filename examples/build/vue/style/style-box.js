// { "framework": "Vue" }

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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	
	  module.exports = {
	    components: {
	      panel: __webpack_require__(371),
	      tip: __webpack_require__(373),
	      styleItem: __webpack_require__(398)
	    }
	  }

	module.exports.style = {
	  "box": {
	    "backgroundColor": "#f5f5f5",
	    "width": 260,
	    "height": 260,
	    "paddingLeft": 40,
	    "paddingTop": 40,
	    "paddingRight": 40,
	    "paddingBottom": 40,
	    "marginLeft": 40,
	    "marginTop": 40,
	    "marginRight": 40,
	    "marginBottom": 40,
	    "borderWidth": 40,
	    "borderColor": "#333333",
	    "borderStyle": "solid"
	  }
	}
	module.exports.render = function() {with(this){return _h('div',[_h('panel',{attrs:{"title":"Box Model","padding-body":"0","type":"primary"}},[_m(0)]),_h('panel',{attrs:{"title":"border","type":"primary"}},[_h('panel',{attrs:{"title":"border-width","type":""}},[_h('div',{staticStyle:{flexDirection:"row"}},[_h('style-item',{staticStyle:{borderStyle:"solid",borderWidth:"2px",borderColor:"#333"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderStyle:"solid",borderWidth:"10px",borderColor:"#333"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderStyle:"solid",borderLeftWidth:"4px",borderColor:"#333"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderStyle:"solid",borderBottomWidth:"4px",borderColor:"#333"},attrs:{"value":""}})])]),_h('panel',{attrs:{"title":"border-color","type":""}},[_h('div',{staticStyle:{flexDirection:"row"}},[_h('style-item',{staticStyle:{borderStyle:"solid",borderWidth:"4px",borderColor:"#333"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderStyle:"solid",borderWidth:"4px",borderColor:"#ddd"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderStyle:"solid",borderWidth:"4px",borderColor:"red"},attrs:{"value":""}})])]),_h('panel',{attrs:{"title":"border-style","type":""}},[_h('tip',{staticStyle:{marginBottom:"10px"},attrs:{"type":"warning","value":"just support four edges"}}),_h('div',{staticStyle:{flexDirection:"row"}},[_h('style-item',{staticStyle:{borderStyle:"solid",borderWidth:"4px",borderColor:"#333"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderStyle:"dashed",borderWidth:"4px",borderColor:"#333"},attrs:{"value":"","type":""}}),_h('style-item',{staticStyle:{borderStyle:"dotted",borderWidth:"4px",borderColor:"#333"},attrs:{"value":""}})])]),_h('panel',{attrs:{"title":"border-radius","type":""}},[_h('div',{staticStyle:{flexDirection:"row"}},[_h('style-item',{staticStyle:{width:"75px",borderRadius:"38px"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderRadius:"20px"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderTopLeftRadius:"20px",borderTopRightRadius:"20px"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px"},attrs:{"value":""}})])])])])}}
	module.exports.staticRenderFns = [function(){with(this){return _h('text',{staticClass:["box"]},["Box"])}}]
	module.exports.el = "body"
	new Vue(module.exports)


/***/ },

/***/ 371:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      type: { default: 'default' },
	      title: { default: '' },
	      paddingBody: { default: 20 },
	      paddingHead: { default: 20 },
	      dataClass: { default: '' }, // FIXME transfer class
	      border:{ default: 0 }
	    }
	  }

	module.exports.style = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	}
	module.exports.render = function() {with(this){return _h('div',{class:['panel', 'panel-' + type],style:{ borderWidth: border }},[_h('text',{class:['panel-header', 'panel-header-' + type],style:{
	        paddingTop: paddingHead,
	        paddingBottom: paddingHead,
	        paddingLeft: paddingHead*1.5,
	        paddingRight: paddingHead*1.5
	      }},[_s(title)]),_h('div',{class:['panel-body', 'panel-body-' + type],style:{
	        paddingTop: paddingBody,
	        paddingBottom: paddingBody,
	        paddingLeft: paddingBody*1.5,
	        paddingRight: paddingBody*1.5
	      }},[_t("default")])])}}
	delete module.exports.el


/***/ },

/***/ 373:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      type: { default: 'success' },
	      value: { default: '' }
	    }
	  }

	module.exports.style = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{class:['tip', 'tip-' + type]},[_h('text',{class:['tip-txt', 'tip-txt-' + type]},[_s(value)])])}}
	delete module.exports.el


/***/ },

/***/ 398:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      value: { default: '' },
	      type: { default: '0' } // 0, 1
	    },
	    computed: {
	      bgColor: function () {
	        return this.type == '1' ? '#7BA3A8' : '#BEAD92';
	      }
	    }
	  }

	module.exports.style = {
	  "item": {
	    "marginRight": 10,
	    "width": 160,
	    "height": 75,
	    "paddingLeft": 8,
	    "paddingRight": 8,
	    "paddingTop": 8,
	    "paddingBottom": 8
	  },
	  "txt": {
	    "color": "#eeeeee"
	  }
	}
	module.exports.render = function() {with(this){return _h('text',{staticClass:["item","txt"],style:{ backgroundColor: bgColor },attrs:{"value":value}})}}
	delete module.exports.el


/***/ }

/******/ });