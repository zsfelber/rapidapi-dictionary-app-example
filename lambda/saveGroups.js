(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

const API_DAILY_LIMIT = {
  wordsapi: 25000,
  google: 100000000
};
const MAX_WORDS = 50;
const MAX_NODE_FREQUENCY = 100000;
const TRAVERSE_ALL = false;
const MAX_LEVEL_MINCL = 2;

const service = __webpack_require__(5);

exports.handler = async function (event, context) {
  //   extract the word query parameter from the HTTP request
  const groups64 = event.queryStringParameters.groups || "";
  const groups = groups64 ? atob(groups64) : "";
  const groupsdata = groups ? JSON.parse(groups) : null;

  if (groupsdata) {
    return service.respond(async () => {
      return data;
    }, context);
  }
};

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

exports.respond = async function (guts, context) {
  try {
    const data = await guts();

    if (context.electron) {
      return data;
    } else {
      let json = JSON.stringify(data);

      if (!json) {
        json = "{}";
      }

      return {
        statusCode: 200,
        body: json,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };
    }
  } catch (err) {
    console.log(err);

    if (context.electron) {
      throw err;
    } else {
      return {
        statusCode: 500,
        body: err.toString()
      };
    }
  }
};

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2F2ZUdyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9pbmNsdWRlL3NlcnZpY2UuanMiXSwibmFtZXMiOlsiQVBJX0RBSUxZX0xJTUlUIiwid29yZHNhcGkiLCJnb29nbGUiLCJNQVhfV09SRFMiLCJNQVhfTk9ERV9GUkVRVUVOQ1kiLCJUUkFWRVJTRV9BTEwiLCJNQVhfTEVWRUxfTUlOQ0wiLCJzZXJ2aWNlIiwicmVxdWlyZSIsImV4cG9ydHMiLCJoYW5kbGVyIiwiZXZlbnQiLCJjb250ZXh0IiwiZ3JvdXBzNjQiLCJxdWVyeVN0cmluZ1BhcmFtZXRlcnMiLCJncm91cHMiLCJhdG9iIiwiZ3JvdXBzZGF0YSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbmQiLCJkYXRhIiwiZ3V0cyIsImVsZWN0cm9uIiwianNvbiIsInN0cmluZ2lmeSIsInN0YXR1c0NvZGUiLCJib2R5IiwiaGVhZGVycyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7QUNqRkEsTUFBTUEsZUFBZSxHQUFHO0FBQUVDLFVBQVEsRUFBRSxLQUFaO0FBQW1CQyxRQUFNLEVBQUU7QUFBM0IsQ0FBeEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsRUFBbEI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxNQUEzQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxLQUFyQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxDQUF4Qjs7QUFFQSxNQUFNQyxPQUFPLEdBQUdDLG1CQUFPLENBQUMsQ0FBRCxDQUF2Qjs7QUFHQUMsT0FBTyxDQUFDQyxPQUFSLEdBQWtCLGdCQUFlQyxLQUFmLEVBQXNCQyxPQUF0QixFQUErQjtBQUUvQztBQUNBLFFBQU1DLFFBQVEsR0FBR0YsS0FBSyxDQUFDRyxxQkFBTixDQUE0QkMsTUFBNUIsSUFBc0MsRUFBdkQ7QUFDQSxRQUFNQSxNQUFNLEdBQUdGLFFBQVEsR0FBR0csSUFBSSxDQUFDSCxRQUFELENBQVAsR0FBb0IsRUFBM0M7QUFDQSxRQUFNSSxVQUFVLEdBQUdGLE1BQU0sR0FBR0csSUFBSSxDQUFDQyxLQUFMLENBQVdKLE1BQVgsQ0FBSCxHQUF3QixJQUFqRDs7QUFFQSxNQUFJRSxVQUFKLEVBQWdCO0FBRWQsV0FBT1YsT0FBTyxDQUFDYSxPQUFSLENBQWdCLFlBQVk7QUFFL0IsYUFBT0MsSUFBUDtBQUNILEtBSE0sRUFHSlQsT0FISSxDQUFQO0FBSUQ7QUFFRixDQWZELEM7Ozs7Ozs7QUNSQUgsT0FBTyxDQUFDVyxPQUFSLEdBQWtCLGdCQUFlRSxJQUFmLEVBQXFCVixPQUFyQixFQUE4QjtBQUM1QyxNQUFJO0FBRUEsVUFBTVMsSUFBSSxHQUFHLE1BQU1DLElBQUksRUFBdkI7O0FBRUEsUUFBSVYsT0FBTyxDQUFDVyxRQUFaLEVBQXNCO0FBQ2xCLGFBQU9GLElBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxVQUFJRyxJQUFJLEdBQUdOLElBQUksQ0FBQ08sU0FBTCxDQUFlSixJQUFmLENBQVg7O0FBRUEsVUFBSSxDQUFDRyxJQUFMLEVBQVc7QUFDUEEsWUFBSSxHQUFHLElBQVA7QUFDSDs7QUFFRCxhQUFPO0FBQ0hFLGtCQUFVLEVBQUUsR0FEVDtBQUVIQyxZQUFJLEVBQUVILElBRkg7QUFHSEksZUFBTyxFQUFFO0FBQ1QseUNBQStCO0FBRHRCO0FBSE4sT0FBUDtBQU9IO0FBQ0osR0FyQkQsQ0FxQkUsT0FBT0MsR0FBUCxFQUFZO0FBQ1ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaOztBQUNBLFFBQUlqQixPQUFPLENBQUNXLFFBQVosRUFBc0I7QUFDbEIsWUFBTU0sR0FBTjtBQUNILEtBRkQsTUFFTztBQUNILGFBQU87QUFBRUgsa0JBQVUsRUFBRSxHQUFkO0FBQW1CQyxZQUFJLEVBQUVFLEdBQUcsQ0FBQ0csUUFBSjtBQUF6QixPQUFQO0FBQ0g7QUFDSjtBQUNKLENBOUJELEMiLCJmaWxlIjoic2F2ZUdyb3Vwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0NCk7XG4iLCJcbmNvbnN0IEFQSV9EQUlMWV9MSU1JVCA9IHsgd29yZHNhcGk6IDI1MDAwLCBnb29nbGU6IDEwMDAwMDAwMCB9O1xuY29uc3QgTUFYX1dPUkRTID0gNTA7XG5jb25zdCBNQVhfTk9ERV9GUkVRVUVOQ1kgPSAxMDAwMDA7XG5jb25zdCBUUkFWRVJTRV9BTEwgPSBmYWxzZTtcbmNvbnN0IE1BWF9MRVZFTF9NSU5DTCA9IDI7XG5cbmNvbnN0IHNlcnZpY2UgPSByZXF1aXJlKFwiLi9pbmNsdWRlL3NlcnZpY2VcIik7XG5cblxuZXhwb3J0cy5oYW5kbGVyID0gYXN5bmMgZnVuY3Rpb24oZXZlbnQsIGNvbnRleHQpIHtcblxuICAvLyAgIGV4dHJhY3QgdGhlIHdvcmQgcXVlcnkgcGFyYW1ldGVyIGZyb20gdGhlIEhUVFAgcmVxdWVzdFxuICBjb25zdCBncm91cHM2NCA9IGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycy5ncm91cHMgfHwgXCJcIjtcbiAgY29uc3QgZ3JvdXBzID0gZ3JvdXBzNjQgPyBhdG9iKGdyb3VwczY0KSA6IFwiXCI7XG4gIGNvbnN0IGdyb3Vwc2RhdGEgPSBncm91cHMgPyBKU09OLnBhcnNlKGdyb3VwcykgOiBudWxsO1xuXG4gIGlmIChncm91cHNkYXRhKSB7XG5cbiAgICByZXR1cm4gc2VydmljZS5yZXNwb25kKGFzeW5jICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbn07IiwiXG5cbmV4cG9ydHMucmVzcG9uZCA9IGFzeW5jIGZ1bmN0aW9uKGd1dHMsIGNvbnRleHQpIHtcbiAgICB0cnkge1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBndXRzKCk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuZWxlY3Ryb24pIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgICAgICAgICAgaWYgKCFqc29uKSB7XG4gICAgICAgICAgICAgICAganNvbiA9IFwie31cIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgICAgICAgICAgYm9keToganNvbixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGlmIChjb250ZXh0LmVsZWN0cm9uKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXNDb2RlOiA1MDAsIGJvZHk6IGVyci50b1N0cmluZygpIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=