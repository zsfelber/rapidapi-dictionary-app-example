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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(3);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(7);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(25);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(26);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(32);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(2);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(27);
var combineURLs = __webpack_require__(28);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var url = __webpack_require__(12);
var http = __webpack_require__(9);
var https = __webpack_require__(10);
var assert = __webpack_require__(33);
var Writable = __webpack_require__(34).Writable;
var debug = __webpack_require__(35)("follow-redirects");

// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
["abort", "aborted", "error", "socket", "timeout"].forEach(function (event) {
  eventHandlers[event] = function (arg) {
    this._redirectable.emit(event, arg);
  };
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  options.headers = options.headers || {};
  this._options = options;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new Error("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new Error("Request body larger than maxBodyLength limit"));
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data and end
  var currentRequest = this._currentRequest;
  this.write(data || "", encoding, function () {
    currentRequest.end(null, null, callback);
  });
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Proxy all other public ClientRequest methods
[
  "abort", "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive", "setTimeout",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new Error("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var event in eventHandlers) {
    /* istanbul ignore else */
    if (event) {
      request.on(event, eventHandlers[event]);
    }
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var buffers = this._requestBodyBuffers;
    (function writeNext() {
      if (i < buffers.length) {
        var buffer = buffers[i++];
        request.write(buffer.data, buffer.encoding, writeNext);
      }
      else {
        request.end();
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: response.statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      response.statusCode >= 300 && response.statusCode < 400) {
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new Error("Max redirects exceeded."));
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe […],
    // since the user might not wish to redirect an unsafe request.
    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
    // that the target resource resides temporarily under a different URI
    // and the user agent MUST NOT change the request method
    // if it performs an automatic redirection to that URI.
    var header;
    var headers = this._options.headers;
    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      for (header in headers) {
        if (/^content-/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Drop the Host header, as the redirect might lead to a different host
    if (!this._isRedirect) {
      for (header in headers) {
        if (/^host$/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Perform the redirected request
    var redirectUrl = url.resolve(this._currentUrl, location);
    debug("redirecting to", redirectUrl);
    Object.assign(this._options, url.parse(redirectUrl));
    this._isRedirect = true;
    this._performRequest();

    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    wrappedProtocol.request = function (options, callback) {
      if (typeof options === "string") {
        options = url.parse(options);
        options.maxRedirects = exports.maxRedirects;
      }
      else {
        options = Object.assign({
          protocol: protocol,
          maxRedirects: exports.maxRedirects,
          maxBodyLength: exports.maxBodyLength,
        }, options);
      }
      options.nativeProtocols = nativeProtocols;
      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    };

    // Executes a GET request, following redirects
    wrappedProtocol.get = function (options, callback) {
      var request = wrappedProtocol.request(options, callback);
      request.end();
      return request;
    };
  });
  return exports;
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(37);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheMostCommon3000", function() { return TheMostCommon3000; });
// https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/
const TheMostCommon3000 = {
  a: 1,
  abandon: 1,
  ability: 1,
  able: 1,
  abortion: 1,
  about: 1,
  above: 1,
  abroad: 1,
  absence: 1,
  absolute: 1,
  absolutely: 1,
  absorb: 1,
  abuse: 1,
  academic: 1,
  accept: 1,
  access: 1,
  accident: 1,
  accompany: 1,
  accomplish: 1,
  according: 1,
  account: 1,
  accurate: 1,
  accuse: 1,
  achieve: 1,
  achievement: 1,
  acid: 1,
  acknowledge: 1,
  acquire: 1,
  across: 1,
  act: 1,
  action: 1,
  active: 1,
  activist: 1,
  activity: 1,
  actor: 1,
  actress: 1,
  actual: 1,
  actually: 1,
  ad: 1,
  adapt: 1,
  add: 1,
  addition: 1,
  additional: 1,
  address: 1,
  adequate: 1,
  adjust: 1,
  adjustment: 1,
  administration: 1,
  administrator: 1,
  admire: 1,
  admission: 1,
  admit: 1,
  adolescent: 1,
  adopt: 1,
  adult: 1,
  advance: 1,
  advanced: 1,
  advantage: 1,
  adventure: 1,
  advertising: 1,
  advice: 1,
  advise: 1,
  adviser: 1,
  advocate: 1,
  affair: 1,
  affect: 1,
  afford: 1,
  afraid: 1,
  African: 1,
  "African-American": 1,
  after: 1,
  afternoon: 1,
  again: 1,
  against: 1,
  age: 1,
  agency: 1,
  agenda: 1,
  agent: 1,
  aggressive: 1,
  ago: 1,
  agree: 1,
  agreement: 1,
  agricultural: 1,
  ah: 1,
  ahead: 1,
  aid: 1,
  aide: 1,
  AIDS: 1,
  aim: 1,
  air: 1,
  aircraft: 1,
  airline: 1,
  airport: 1,
  album: 1,
  alcohol: 1,
  alive: 1,
  all: 1,
  alliance: 1,
  allow: 1,
  ally: 1,
  almost: 1,
  alone: 1,
  along: 1,
  already: 1,
  also: 1,
  alter: 1,
  alternative: 1,
  although: 1,
  always: 1,
  AM: 1,
  amazing: 1,
  American: 1,
  among: 1,
  amount: 1,
  analysis: 1,
  analyst: 1,
  analyze: 1,
  ancient: 1,
  and: 1,
  anger: 1,
  angle: 1,
  angry: 1,
  animal: 1,
  anniversary: 1,
  announce: 1,
  annual: 1,
  another: 1,
  answer: 1,
  anticipate: 1,
  anxiety: 1,
  any: 1,
  anybody: 1,
  anymore: 1,
  anyone: 1,
  anything: 1,
  anyway: 1,
  anywhere: 1,
  apart: 1,
  apartment: 1,
  apparent: 1,
  apparently: 1,
  appeal: 1,
  appear: 1,
  appearance: 1,
  apple: 1,
  application: 1,
  apply: 1,
  appoint: 1,
  appointment: 1,
  appreciate: 1,
  approach: 1,
  appropriate: 1,
  approval: 1,
  approve: 1,
  approximately: 1,
  Arab: 1,
  architect: 1,
  area: 1,
  argue: 1,
  argument: 1,
  arise: 1,
  arm: 1,
  armed: 1,
  army: 1,
  around: 1,
  arrange: 1,
  arrangement: 1,
  arrest: 1,
  arrival: 1,
  arrive: 1,
  art: 1,
  article: 1,
  artist: 1,
  artistic: 1,
  as: 1,
  Asian: 1,
  aside: 1,
  ask: 1,
  asleep: 1,
  aspect: 1,
  assault: 1,
  assert: 1,
  assess: 1,
  assessment: 1,
  asset: 1,
  assign: 1,
  assignment: 1,
  assist: 1,
  assistance: 1,
  assistant: 1,
  associate: 1,
  association: 1,
  assume: 1,
  assumption: 1,
  assure: 1,
  at: 1,
  athlete: 1,
  athletic: 1,
  atmosphere: 1,
  attach: 1,
  attack: 1,
  attempt: 1,
  attend: 1,
  attention: 1,
  attitude: 1,
  attorney: 1,
  attract: 1,
  attractive: 1,
  attribute: 1,
  audience: 1,
  author: 1,
  authority: 1,
  auto: 1,
  available: 1,
  average: 1,
  avoid: 1,
  award: 1,
  aware: 1,
  awareness: 1,
  away: 1,
  awful: 1,
  baby: 1,
  back: 1,
  background: 1,
  bad: 1,
  badly: 1,
  bag: 1,
  bake: 1,
  balance: 1,
  ball: 1,
  ban: 1,
  band: 1,
  bank: 1,
  bar: 1,
  barely: 1,
  barrel: 1,
  barrier: 1,
  base: 1,
  baseball: 1,
  basic: 1,
  basically: 1,
  basis: 1,
  basket: 1,
  basketball: 1,
  bathroom: 1,
  battery: 1,
  battle: 1,
  be: 1,
  beach: 1,
  bean: 1,
  bear: 1,
  beat: 1,
  beautiful: 1,
  beauty: 1,
  because: 1,
  become: 1,
  bed: 1,
  bedroom: 1,
  beer: 1,
  before: 1,
  begin: 1,
  beginning: 1,
  behavior: 1,
  behind: 1,
  being: 1,
  belief: 1,
  believe: 1,
  bell: 1,
  belong: 1,
  below: 1,
  belt: 1,
  bench: 1,
  bend: 1,
  beneath: 1,
  benefit: 1,
  beside: 1,
  besides: 1,
  best: 1,
  bet: 1,
  better: 1,
  between: 1,
  beyond: 1,
  Bible: 1,
  big: 1,
  bike: 1,
  bill: 1,
  billion: 1,
  bind: 1,
  biological: 1,
  bird: 1,
  birth: 1,
  birthday: 1,
  bit: 1,
  bite: 1,
  black: 1,
  blade: 1,
  blame: 1,
  blanket: 1,
  blind: 1,
  block: 1,
  blood: 1,
  blow: 1,
  blue: 1,
  board: 1,
  boat: 1,
  body: 1,
  bomb: 1,
  bombing: 1,
  bond: 1,
  bone: 1,
  book: 1,
  boom: 1,
  boot: 1,
  border: 1,
  born: 1,
  borrow: 1,
  boss: 1,
  both: 1,
  bother: 1,
  bottle: 1,
  bottom: 1,
  boundary: 1,
  bowl: 1,
  box: 1,
  boy: 1,
  boyfriend: 1,
  brain: 1,
  branch: 1,
  brand: 1,
  bread: 1,
  break: 1,
  breakfast: 1,
  breast: 1,
  breath: 1,
  breathe: 1,
  brick: 1,
  bridge: 1,
  brief: 1,
  briefly: 1,
  bright: 1,
  brilliant: 1,
  bring: 1,
  British: 1,
  broad: 1,
  broken: 1,
  brother: 1,
  brown: 1,
  brush: 1,
  buck: 1,
  budget: 1,
  build: 1,
  building: 1,
  bullet: 1,
  bunch: 1,
  burden: 1,
  burn: 1,
  bury: 1,
  bus: 1,
  business: 1,
  busy: 1,
  but: 1,
  butter: 1,
  button: 1,
  buy: 1,
  buyer: 1,
  by: 1,
  cabin: 1,
  cabinet: 1,
  cable: 1,
  cake: 1,
  calculate: 1,
  call: 1,
  camera: 1,
  camp: 1,
  campaign: 1,
  campus: 1,
  can: 1,
  Canadian: 1,
  cancer: 1,
  candidate: 1,
  cap: 1,
  capability: 1,
  capable: 1,
  capacity: 1,
  capital: 1,
  captain: 1,
  capture: 1,
  car: 1,
  carbon: 1,
  card: 1,
  care: 1,
  career: 1,
  careful: 1,
  carefully: 1,
  carrier: 1,
  carry: 1,
  case: 1,
  cash: 1,
  cast: 1,
  cat: 1,
  catch: 1,
  category: 1,
  Catholic: 1,
  cause: 1,
  ceiling: 1,
  celebrate: 1,
  celebration: 1,
  celebrity: 1,
  cell: 1,
  center: 1,
  central: 1,
  century: 1,
  CEO: 1,
  ceremony: 1,
  certain: 1,
  certainly: 1,
  chain: 1,
  chair: 1,
  chairman: 1,
  challenge: 1,
  chamber: 1,
  champion: 1,
  championship: 1,
  chance: 1,
  change: 1,
  changing: 1,
  channel: 1,
  chapter: 1,
  character: 1,
  characteristic: 1,
  characterize: 1,
  charge: 1,
  charity: 1,
  chart: 1,
  chase: 1,
  cheap: 1,
  check: 1,
  cheek: 1,
  cheese: 1,
  chef: 1,
  chemical: 1,
  chest: 1,
  chicken: 1,
  chief: 1,
  child: 1,
  childhood: 1,
  Chinese: 1,
  chip: 1,
  chocolate: 1,
  choice: 1,
  cholesterol: 1,
  choose: 1,
  Christian: 1,
  Christmas: 1,
  church: 1,
  cigarette: 1,
  circle: 1,
  circumstance: 1,
  cite: 1,
  citizen: 1,
  city: 1,
  civil: 1,
  civilian: 1,
  claim: 1,
  class: 1,
  classic: 1,
  classroom: 1,
  clean: 1,
  clear: 1,
  clearly: 1,
  client: 1,
  climate: 1,
  climb: 1,
  clinic: 1,
  clinical: 1,
  clock: 1,
  close: 1,
  closely: 1,
  closer: 1,
  clothes: 1,
  clothing: 1,
  cloud: 1,
  club: 1,
  clue: 1,
  cluster: 1,
  coach: 1,
  coal: 1,
  coalition: 1,
  coast: 1,
  coat: 1,
  code: 1,
  coffee: 1,
  cognitive: 1,
  cold: 1,
  collapse: 1,
  colleague: 1,
  collect: 1,
  collection: 1,
  collective: 1,
  college: 1,
  colonial: 1,
  color: 1,
  column: 1,
  combination: 1,
  combine: 1,
  come: 1,
  comedy: 1,
  comfort: 1,
  comfortable: 1,
  command: 1,
  commander: 1,
  comment: 1,
  commercial: 1,
  commission: 1,
  commit: 1,
  commitment: 1,
  committee: 1,
  common: 1,
  communicate: 1,
  communication: 1,
  community: 1,
  company: 1,
  compare: 1,
  comparison: 1,
  compete: 1,
  competition: 1,
  competitive: 1,
  competitor: 1,
  complain: 1,
  complaint: 1,
  complete: 1,
  completely: 1,
  complex: 1,
  complicated: 1,
  component: 1,
  compose: 1,
  composition: 1,
  comprehensive: 1,
  computer: 1,
  concentrate: 1,
  concentration: 1,
  concept: 1,
  concern: 1,
  concerned: 1,
  concert: 1,
  conclude: 1,
  conclusion: 1,
  concrete: 1,
  condition: 1,
  conduct: 1,
  conference: 1,
  confidence: 1,
  confident: 1,
  confirm: 1,
  conflict: 1,
  confront: 1,
  confusion: 1,
  Congress: 1,
  congressional: 1,
  connect: 1,
  connection: 1,
  consciousness: 1,
  consensus: 1,
  consequence: 1,
  conservative: 1,
  consider: 1,
  considerable: 1,
  consideration: 1,
  consist: 1,
  consistent: 1,
  constant: 1,
  constantly: 1,
  constitute: 1,
  constitutional: 1,
  construct: 1,
  construction: 1,
  consultant: 1,
  consume: 1,
  consumer: 1,
  consumption: 1,
  contact: 1,
  contain: 1,
  container: 1,
  contemporary: 1,
  content: 1,
  contest: 1,
  context: 1,
  continue: 1,
  continued: 1,
  contract: 1,
  contrast: 1,
  contribute: 1,
  contribution: 1,
  control: 1,
  controversial: 1,
  controversy: 1,
  convention: 1,
  conventional: 1,
  conversation: 1,
  convert: 1,
  conviction: 1,
  convince: 1,
  cook: 1,
  cookie: 1,
  cooking: 1,
  cool: 1,
  cooperation: 1,
  cop: 1,
  cope: 1,
  copy: 1,
  core: 1,
  corn: 1,
  corner: 1,
  corporate: 1,
  corporation: 1,
  correct: 1,
  correspondent: 1,
  cost: 1,
  cotton: 1,
  couch: 1,
  could: 1,
  council: 1,
  counselor: 1,
  count: 1,
  counter: 1,
  country: 1,
  county: 1,
  couple: 1,
  courage: 1,
  course: 1,
  court: 1,
  cousin: 1,
  cover: 1,
  coverage: 1,
  cow: 1,
  crack: 1,
  craft: 1,
  crash: 1,
  crazy: 1,
  cream: 1,
  create: 1,
  creation: 1,
  creative: 1,
  creature: 1,
  credit: 1,
  crew: 1,
  crime: 1,
  criminal: 1,
  crisis: 1,
  criteria: 1,
  critic: 1,
  critical: 1,
  criticism: 1,
  criticize: 1,
  crop: 1,
  cross: 1,
  crowd: 1,
  crucial: 1,
  cry: 1,
  cultural: 1,
  culture: 1,
  cup: 1,
  curious: 1,
  current: 1,
  currently: 1,
  curriculum: 1,
  custom: 1,
  customer: 1,
  cut: 1,
  cycle: 1,
  dad: 1,
  daily: 1,
  damage: 1,
  dance: 1,
  danger: 1,
  dangerous: 1,
  dare: 1,
  dark: 1,
  darkness: 1,
  data: 1,
  date: 1,
  daughter: 1,
  day: 1,
  dead: 1,
  deal: 1,
  dealer: 1,
  dear: 1,
  death: 1,
  debate: 1,
  debt: 1,
  decade: 1,
  decide: 1,
  decision: 1,
  deck: 1,
  declare: 1,
  decline: 1,
  decrease: 1,
  deep: 1,
  deeply: 1,
  deer: 1,
  defeat: 1,
  defend: 1,
  defendant: 1,
  defense: 1,
  defensive: 1,
  deficit: 1,
  define: 1,
  definitely: 1,
  definition: 1,
  degree: 1,
  delay: 1,
  deliver: 1,
  delivery: 1,
  demand: 1,
  democracy: 1,
  Democrat: 1,
  democratic: 1,
  demonstrate: 1,
  demonstration: 1,
  deny: 1,
  department: 1,
  depend: 1,
  dependent: 1,
  depending: 1,
  depict: 1,
  depression: 1,
  depth: 1,
  deputy: 1,
  derive: 1,
  describe: 1,
  description: 1,
  desert: 1,
  deserve: 1,
  design: 1,
  designer: 1,
  desire: 1,
  desk: 1,
  desperate: 1,
  despite: 1,
  destroy: 1,
  destruction: 1,
  detail: 1,
  detailed: 1,
  detect: 1,
  determine: 1,
  develop: 1,
  developing: 1,
  development: 1,
  device: 1,
  devote: 1,
  dialogue: 1,
  die: 1,
  diet: 1,
  differ: 1,
  difference: 1,
  different: 1,
  differently: 1,
  difficult: 1,
  difficulty: 1,
  dig: 1,
  digital: 1,
  dimension: 1,
  dining: 1,
  dinner: 1,
  direct: 1,
  direction: 1,
  directly: 1,
  director: 1,
  dirt: 1,
  dirty: 1,
  disability: 1,
  disagree: 1,
  disappear: 1,
  disaster: 1,
  discipline: 1,
  discourse: 1,
  discover: 1,
  discovery: 1,
  discrimination: 1,
  discuss: 1,
  discussion: 1,
  disease: 1,
  dish: 1,
  dismiss: 1,
  disorder: 1,
  display: 1,
  dispute: 1,
  distance: 1,
  distant: 1,
  distinct: 1,
  distinction: 1,
  distinguish: 1,
  distribute: 1,
  distribution: 1,
  district: 1,
  diverse: 1,
  diversity: 1,
  divide: 1,
  division: 1,
  divorce: 1,
  DNA: 1,
  do: 1,
  doctor: 1,
  document: 1,
  dog: 1,
  domestic: 1,
  dominant: 1,
  dominate: 1,
  door: 1,
  double: 1,
  doubt: 1,
  down: 1,
  downtown: 1,
  dozen: 1,
  draft: 1,
  drag: 1,
  drama: 1,
  dramatic: 1,
  dramatically: 1,
  draw: 1,
  drawing: 1,
  dream: 1,
  dress: 1,
  drink: 1,
  drive: 1,
  driver: 1,
  drop: 1,
  drug: 1,
  dry: 1,
  due: 1,
  during: 1,
  dust: 1,
  duty: 1,
  each: 1,
  eager: 1,
  ear: 1,
  early: 1,
  earn: 1,
  earnings: 1,
  earth: 1,
  ease: 1,
  easily: 1,
  east: 1,
  eastern: 1,
  easy: 1,
  eat: 1,
  economic: 1,
  economics: 1,
  economist: 1,
  economy: 1,
  edge: 1,
  edition: 1,
  editor: 1,
  educate: 1,
  education: 1,
  educational: 1,
  educator: 1,
  effect: 1,
  effective: 1,
  effectively: 1,
  efficiency: 1,
  efficient: 1,
  effort: 1,
  egg: 1,
  eight: 1,
  either: 1,
  elderly: 1,
  elect: 1,
  election: 1,
  electric: 1,
  electricity: 1,
  electronic: 1,
  element: 1,
  elementary: 1,
  eliminate: 1,
  elite: 1,
  else: 1,
  elsewhere: 1,
  "e-mail": 1,
  embrace: 1,
  emerge: 1,
  emergency: 1,
  emission: 1,
  emotion: 1,
  emotional: 1,
  emphasis: 1,
  emphasize: 1,
  employ: 1,
  employee: 1,
  employer: 1,
  employment: 1,
  empty: 1,
  enable: 1,
  encounter: 1,
  encourage: 1,
  end: 1,
  enemy: 1,
  energy: 1,
  enforcement: 1,
  engage: 1,
  engine: 1,
  engineer: 1,
  engineering: 1,
  English: 1,
  enhance: 1,
  enjoy: 1,
  enormous: 1,
  enough: 1,
  ensure: 1,
  enter: 1,
  enterprise: 1,
  entertainment: 1,
  entire: 1,
  entirely: 1,
  entrance: 1,
  entry: 1,
  environment: 1,
  environmental: 1,
  episode: 1,
  equal: 1,
  equally: 1,
  equipment: 1,
  era: 1,
  error: 1,
  escape: 1,
  especially: 1,
  essay: 1,
  essential: 1,
  essentially: 1,
  establish: 1,
  establishment: 1,
  estate: 1,
  estimate: 1,
  etc: 1,
  ethics: 1,
  ethnic: 1,
  European: 1,
  evaluate: 1,
  evaluation: 1,
  even: 1,
  evening: 1,
  event: 1,
  eventually: 1,
  ever: 1,
  every: 1,
  everybody: 1,
  everyday: 1,
  everyone: 1,
  everything: 1,
  everywhere: 1,
  evidence: 1,
  evolution: 1,
  evolve: 1,
  exact: 1,
  exactly: 1,
  examination: 1,
  examine: 1,
  example: 1,
  exceed: 1,
  excellent: 1,
  except: 1,
  exception: 1,
  exchange: 1,
  exciting: 1,
  executive: 1,
  exercise: 1,
  exhibit: 1,
  exhibition: 1,
  exist: 1,
  existence: 1,
  existing: 1,
  expand: 1,
  expansion: 1,
  expect: 1,
  expectation: 1,
  expense: 1,
  expensive: 1,
  experience: 1,
  experiment: 1,
  expert: 1,
  explain: 1,
  explanation: 1,
  explode: 1,
  explore: 1,
  explosion: 1,
  expose: 1,
  exposure: 1,
  express: 1,
  expression: 1,
  extend: 1,
  extension: 1,
  extensive: 1,
  extent: 1,
  external: 1,
  extra: 1,
  extraordinary: 1,
  extreme: 1,
  extremely: 1,
  eye: 1,
  fabric: 1,
  face: 1,
  facility: 1,
  fact: 1,
  factor: 1,
  factory: 1,
  faculty: 1,
  fade: 1,
  fail: 1,
  failure: 1,
  fair: 1,
  fairly: 1,
  faith: 1,
  fall: 1,
  false: 1,
  familiar: 1,
  family: 1,
  famous: 1,
  fan: 1,
  fantasy: 1,
  far: 1,
  farm: 1,
  farmer: 1,
  fashion: 1,
  fast: 1,
  fat: 1,
  fate: 1,
  father: 1,
  fault: 1,
  favor: 1,
  favorite: 1,
  fear: 1,
  feature: 1,
  federal: 1,
  fee: 1,
  feed: 1,
  feel: 1,
  feeling: 1,
  fellow: 1,
  female: 1,
  fence: 1,
  few: 1,
  fewer: 1,
  fiber: 1,
  fiction: 1,
  field: 1,
  fifteen: 1,
  fifth: 1,
  fifty: 1,
  fight: 1,
  fighter: 1,
  fighting: 1,
  figure: 1,
  file: 1,
  fill: 1,
  film: 1,
  final: 1,
  finally: 1,
  finance: 1,
  financial: 1,
  find: 1,
  finding: 1,
  fine: 1,
  finger: 1,
  finish: 1,
  fire: 1,
  firm: 1,
  first: 1,
  fish: 1,
  fishing: 1,
  fit: 1,
  fitness: 1,
  five: 1,
  fix: 1,
  flag: 1,
  flame: 1,
  flat: 1,
  flavor: 1,
  flee: 1,
  flesh: 1,
  flight: 1,
  float: 1,
  floor: 1,
  flow: 1,
  flower: 1,
  fly: 1,
  focus: 1,
  folk: 1,
  follow: 1,
  following: 1,
  food: 1,
  foot: 1,
  football: 1,
  for: 1,
  force: 1,
  foreign: 1,
  forest: 1,
  forever: 1,
  forget: 1,
  form: 1,
  formal: 1,
  formation: 1,
  former: 1,
  formula: 1,
  forth: 1,
  fortune: 1,
  forward: 1,
  found: 1,
  foundation: 1,
  founder: 1,
  four: 1,
  fourth: 1,
  frame: 1,
  framework: 1,
  free: 1,
  freedom: 1,
  freeze: 1,
  French: 1,
  frequency: 1,
  frequent: 1,
  frequently: 1,
  fresh: 1,
  friend: 1,
  friendly: 1,
  friendship: 1,
  from: 1,
  front: 1,
  fruit: 1,
  frustration: 1,
  fuel: 1,
  full: 1,
  fully: 1,
  fun: 1,
  function: 1,
  fund: 1,
  fundamental: 1,
  funding: 1,
  funeral: 1,
  funny: 1,
  furniture: 1,
  furthermore: 1,
  future: 1,
  gain: 1,
  galaxy: 1,
  gallery: 1,
  game: 1,
  gang: 1,
  gap: 1,
  garage: 1,
  garden: 1,
  garlic: 1,
  gas: 1,
  gate: 1,
  gather: 1,
  gay: 1,
  gaze: 1,
  gear: 1,
  gender: 1,
  gene: 1,
  general: 1,
  generally: 1,
  generate: 1,
  generation: 1,
  genetic: 1,
  gentleman: 1,
  gently: 1,
  German: 1,
  gesture: 1,
  get: 1,
  ghost: 1,
  giant: 1,
  gift: 1,
  gifted: 1,
  girl: 1,
  girlfriend: 1,
  give: 1,
  given: 1,
  glad: 1,
  glance: 1,
  glass: 1,
  global: 1,
  glove: 1,
  go: 1,
  goal: 1,
  God: 1,
  gold: 1,
  golden: 1,
  golf: 1,
  good: 1,
  government: 1,
  governor: 1,
  grab: 1,
  grade: 1,
  gradually: 1,
  graduate: 1,
  grain: 1,
  grand: 1,
  grandfather: 1,
  grandmother: 1,
  grant: 1,
  grass: 1,
  grave: 1,
  gray: 1,
  great: 1,
  greatest: 1,
  green: 1,
  grocery: 1,
  ground: 1,
  group: 1,
  grow: 1,
  growing: 1,
  growth: 1,
  guarantee: 1,
  guard: 1,
  guess: 1,
  guest: 1,
  guide: 1,
  guideline: 1,
  guilty: 1,
  gun: 1,
  guy: 1,
  habit: 1,
  habitat: 1,
  hair: 1,
  half: 1,
  hall: 1,
  hand: 1,
  handful: 1,
  handle: 1,
  hang: 1,
  happen: 1,
  happy: 1,
  hard: 1,
  hardly: 1,
  hat: 1,
  hate: 1,
  have: 1,
  he: 1,
  head: 1,
  headline: 1,
  headquarters: 1,
  health: 1,
  healthy: 1,
  hear: 1,
  hearing: 1,
  heart: 1,
  heat: 1,
  heaven: 1,
  heavily: 1,
  heavy: 1,
  heel: 1,
  height: 1,
  helicopter: 1,
  hell: 1,
  hello: 1,
  help: 1,
  helpful: 1,
  her: 1,
  here: 1,
  heritage: 1,
  hero: 1,
  herself: 1,
  hey: 1,
  hi: 1,
  hide: 1,
  high: 1,
  highlight: 1,
  highly: 1,
  highway: 1,
  hill: 1,
  him: 1,
  himself: 1,
  hip: 1,
  hire: 1,
  his: 1,
  historian: 1,
  historic: 1,
  historical: 1,
  history: 1,
  hit: 1,
  hold: 1,
  hole: 1,
  holiday: 1,
  holy: 1,
  home: 1,
  homeless: 1,
  honest: 1,
  honey: 1,
  honor: 1,
  hope: 1,
  horizon: 1,
  horror: 1,
  horse: 1,
  hospital: 1,
  host: 1,
  hot: 1,
  hotel: 1,
  hour: 1,
  house: 1,
  household: 1,
  housing: 1,
  how: 1,
  however: 1,
  huge: 1,
  human: 1,
  humor: 1,
  hundred: 1,
  hungry: 1,
  hunter: 1,
  hunting: 1,
  hurt: 1,
  husband: 1,
  hypothesis: 1,
  I: 1,
  ice: 1,
  idea: 1,
  ideal: 1,
  identification: 1,
  identify: 1,
  identity: 1,
  ie: 1,
  if: 1,
  ignore: 1,
  ill: 1,
  illegal: 1,
  illness: 1,
  illustrate: 1,
  image: 1,
  imagination: 1,
  imagine: 1,
  immediate: 1,
  immediately: 1,
  immigrant: 1,
  immigration: 1,
  impact: 1,
  implement: 1,
  implication: 1,
  imply: 1,
  importance: 1,
  important: 1,
  impose: 1,
  impossible: 1,
  impress: 1,
  impression: 1,
  impressive: 1,
  improve: 1,
  improvement: 1,
  in: 1,
  incentive: 1,
  incident: 1,
  include: 1,
  including: 1,
  income: 1,
  incorporate: 1,
  increase: 1,
  increased: 1,
  increasing: 1,
  increasingly: 1,
  incredible: 1,
  indeed: 1,
  independence: 1,
  independent: 1,
  index: 1,
  Indian: 1,
  indicate: 1,
  indication: 1,
  individual: 1,
  industrial: 1,
  industry: 1,
  infant: 1,
  infection: 1,
  inflation: 1,
  influence: 1,
  inform: 1,
  information: 1,
  ingredient: 1,
  initial: 1,
  initially: 1,
  initiative: 1,
  injury: 1,
  inner: 1,
  innocent: 1,
  inquiry: 1,
  inside: 1,
  insight: 1,
  insist: 1,
  inspire: 1,
  install: 1,
  instance: 1,
  instead: 1,
  institution: 1,
  institutional: 1,
  instruction: 1,
  instructor: 1,
  instrument: 1,
  insurance: 1,
  intellectual: 1,
  intelligence: 1,
  intend: 1,
  intense: 1,
  intensity: 1,
  intention: 1,
  interaction: 1,
  interest: 1,
  interested: 1,
  interesting: 1,
  internal: 1,
  international: 1,
  Internet: 1,
  interpret: 1,
  interpretation: 1,
  intervention: 1,
  interview: 1,
  into: 1,
  introduce: 1,
  introduction: 1,
  invasion: 1,
  invest: 1,
  investigate: 1,
  investigation: 1,
  investigator: 1,
  investment: 1,
  investor: 1,
  invite: 1,
  involve: 1,
  involved: 1,
  involvement: 1,
  Iraqi: 1,
  Irish: 1,
  iron: 1,
  Islamic: 1,
  island: 1,
  Israeli: 1,
  issue: 1,
  it: 1,
  Italian: 1,
  item: 1,
  its: 1,
  itself: 1,
  jacket: 1,
  jail: 1,
  Japanese: 1,
  jet: 1,
  Jew: 1,
  Jewish: 1,
  job: 1,
  join: 1,
  joint: 1,
  joke: 1,
  journal: 1,
  journalist: 1,
  journey: 1,
  joy: 1,
  judge: 1,
  judgment: 1,
  juice: 1,
  jump: 1,
  junior: 1,
  jury: 1,
  just: 1,
  justice: 1,
  justify: 1,
  keep: 1,
  key: 1,
  kick: 1,
  kid: 1,
  kill: 1,
  killer: 1,
  killing: 1,
  kind: 1,
  king: 1,
  kiss: 1,
  kitchen: 1,
  knee: 1,
  knife: 1,
  knock: 1,
  know: 1,
  knowledge: 1,
  lab: 1,
  label: 1,
  labor: 1,
  laboratory: 1,
  lack: 1,
  lady: 1,
  lake: 1,
  land: 1,
  landscape: 1,
  language: 1,
  lap: 1,
  large: 1,
  largely: 1,
  last: 1,
  late: 1,
  later: 1,
  Latin: 1,
  latter: 1,
  laugh: 1,
  launch: 1,
  law: 1,
  lawn: 1,
  lawsuit: 1,
  lawyer: 1,
  lay: 1,
  layer: 1,
  lead: 1,
  leader: 1,
  leadership: 1,
  leading: 1,
  leaf: 1,
  league: 1,
  lean: 1,
  learn: 1,
  learning: 1,
  least: 1,
  leather: 1,
  leave: 1,
  left: 1,
  leg: 1,
  legacy: 1,
  legal: 1,
  legend: 1,
  legislation: 1,
  legitimate: 1,
  lemon: 1,
  length: 1,
  less: 1,
  lesson: 1,
  let: 1,
  letter: 1,
  level: 1,
  liberal: 1,
  library: 1,
  license: 1,
  lie: 1,
  life: 1,
  lifestyle: 1,
  lifetime: 1,
  lift: 1,
  light: 1,
  like: 1,
  likely: 1,
  limit: 1,
  limitation: 1,
  limited: 1,
  line: 1,
  link: 1,
  lip: 1,
  list: 1,
  listen: 1,
  literally: 1,
  literary: 1,
  literature: 1,
  little: 1,
  live: 1,
  living: 1,
  load: 1,
  loan: 1,
  local: 1,
  locate: 1,
  location: 1,
  lock: 1,
  long: 1,
  "long-term": 1,
  look: 1,
  loose: 1,
  lose: 1,
  loss: 1,
  lost: 1,
  lot: 1,
  lots: 1,
  loud: 1,
  love: 1,
  lovely: 1,
  lover: 1,
  low: 1,
  lower: 1,
  luck: 1,
  lucky: 1,
  lunch: 1,
  lung: 1,
  machine: 1,
  mad: 1,
  magazine: 1,
  mail: 1,
  main: 1,
  mainly: 1,
  maintain: 1,
  maintenance: 1,
  major: 1,
  majority: 1,
  make: 1,
  maker: 1,
  makeup: 1,
  male: 1,
  mall: 1,
  man: 1,
  manage: 1,
  management: 1,
  manager: 1,
  manner: 1,
  manufacturer: 1,
  manufacturing: 1,
  many: 1,
  map: 1,
  margin: 1,
  mark: 1,
  market: 1,
  marketing: 1,
  marriage: 1,
  married: 1,
  marry: 1,
  mask: 1,
  mass: 1,
  massive: 1,
  master: 1,
  match: 1,
  material: 1,
  math: 1,
  matter: 1,
  may: 1,
  maybe: 1,
  mayor: 1,
  me: 1,
  meal: 1,
  mean: 1,
  meaning: 1,
  meanwhile: 1,
  measure: 1,
  measurement: 1,
  meat: 1,
  mechanism: 1,
  media: 1,
  medical: 1,
  medication: 1,
  medicine: 1,
  medium: 1,
  meet: 1,
  meeting: 1,
  member: 1,
  membership: 1,
  memory: 1,
  mental: 1,
  mention: 1,
  menu: 1,
  mere: 1,
  merely: 1,
  mess: 1,
  message: 1,
  metal: 1,
  meter: 1,
  method: 1,
  Mexican: 1,
  middle: 1,
  might: 1,
  military: 1,
  milk: 1,
  million: 1,
  mind: 1,
  mine: 1,
  minister: 1,
  minor: 1,
  minority: 1,
  minute: 1,
  miracle: 1,
  mirror: 1,
  miss: 1,
  missile: 1,
  mission: 1,
  mistake: 1,
  mix: 1,
  mixture: 1,
  "mm-hmm": 1,
  mode: 1,
  model: 1,
  moderate: 1,
  modern: 1,
  modest: 1,
  mom: 1,
  moment: 1,
  money: 1,
  monitor: 1,
  month: 1,
  mood: 1,
  moon: 1,
  moral: 1,
  more: 1,
  moreover: 1,
  morning: 1,
  mortgage: 1,
  most: 1,
  mostly: 1,
  mother: 1,
  motion: 1,
  motivation: 1,
  motor: 1,
  mount: 1,
  mountain: 1,
  mouse: 1,
  mouth: 1,
  move: 1,
  movement: 1,
  movie: 1,
  Mr: 1,
  Mrs: 1,
  Ms: 1,
  much: 1,
  multiple: 1,
  murder: 1,
  muscle: 1,
  museum: 1,
  music: 1,
  musical: 1,
  musician: 1,
  Muslim: 1,
  must: 1,
  mutual: 1,
  my: 1,
  myself: 1,
  mystery: 1,
  myth: 1,
  naked: 1,
  name: 1,
  narrative: 1,
  narrow: 1,
  nation: 1,
  national: 1,
  native: 1,
  natural: 1,
  naturally: 1,
  nature: 1,
  near: 1,
  nearby: 1,
  nearly: 1,
  necessarily: 1,
  necessary: 1,
  neck: 1,
  need: 1,
  negative: 1,
  negotiate: 1,
  negotiation: 1,
  neighbor: 1,
  neighborhood: 1,
  neither: 1,
  nerve: 1,
  nervous: 1,
  net: 1,
  network: 1,
  never: 1,
  nevertheless: 1,
  new: 1,
  newly: 1,
  news: 1,
  newspaper: 1,
  next: 1,
  nice: 1,
  night: 1,
  nine: 1,
  no: 1,
  nobody: 1,
  nod: 1,
  noise: 1,
  nomination: 1,
  none: 1,
  nonetheless: 1,
  nor: 1,
  normal: 1,
  normally: 1,
  north: 1,
  northern: 1,
  nose: 1,
  not: 1,
  note: 1,
  nothing: 1,
  notice: 1,
  notion: 1,
  novel: 1,
  now: 1,
  nowhere: 1,
  "n't": 1,
  nuclear: 1,
  number: 1,
  numerous: 1,
  nurse: 1,
  nut: 1,
  object: 1,
  objective: 1,
  obligation: 1,
  observation: 1,
  observe: 1,
  observer: 1,
  obtain: 1,
  obvious: 1,
  obviously: 1,
  occasion: 1,
  occasionally: 1,
  occupation: 1,
  occupy: 1,
  occur: 1,
  ocean: 1,
  odd: 1,
  odds: 1,
  of: 1,
  off: 1,
  offense: 1,
  offensive: 1,
  offer: 1,
  office: 1,
  officer: 1,
  official: 1,
  often: 1,
  oh: 1,
  oil: 1,
  ok: 1,
  okay: 1,
  old: 1,
  Olympic: 1,
  on: 1,
  once: 1,
  one: 1,
  ongoing: 1,
  onion: 1,
  online: 1,
  only: 1,
  onto: 1,
  open: 1,
  opening: 1,
  operate: 1,
  operating: 1,
  operation: 1,
  operator: 1,
  opinion: 1,
  opponent: 1,
  opportunity: 1,
  oppose: 1,
  opposite: 1,
  opposition: 1,
  option: 1,
  or: 1,
  orange: 1,
  order: 1,
  ordinary: 1,
  organic: 1,
  organization: 1,
  organize: 1,
  orientation: 1,
  origin: 1,
  original: 1,
  originally: 1,
  other: 1,
  others: 1,
  otherwise: 1,
  ought: 1,
  our: 1,
  ourselves: 1,
  out: 1,
  outcome: 1,
  outside: 1,
  oven: 1,
  over: 1,
  overall: 1,
  overcome: 1,
  overlook: 1,
  owe: 1,
  own: 1,
  owner: 1,
  pace: 1,
  pack: 1,
  package: 1,
  page: 1,
  pain: 1,
  painful: 1,
  paint: 1,
  painter: 1,
  painting: 1,
  pair: 1,
  pale: 1,
  Palestinian: 1,
  palm: 1,
  pan: 1,
  panel: 1,
  pant: 1,
  paper: 1,
  parent: 1,
  park: 1,
  parking: 1,
  part: 1,
  participant: 1,
  participate: 1,
  participation: 1,
  particular: 1,
  particularly: 1,
  partly: 1,
  partner: 1,
  partnership: 1,
  party: 1,
  pass: 1,
  passage: 1,
  passenger: 1,
  passion: 1,
  past: 1,
  patch: 1,
  path: 1,
  patient: 1,
  pattern: 1,
  pause: 1,
  pay: 1,
  payment: 1,
  PC: 1,
  peace: 1,
  peak: 1,
  peer: 1,
  penalty: 1,
  people: 1,
  pepper: 1,
  per: 1,
  perceive: 1,
  percentage: 1,
  perception: 1,
  perfect: 1,
  perfectly: 1,
  perform: 1,
  performance: 1,
  perhaps: 1,
  period: 1,
  permanent: 1,
  permission: 1,
  permit: 1,
  person: 1,
  personal: 1,
  personality: 1,
  personally: 1,
  personnel: 1,
  perspective: 1,
  persuade: 1,
  pet: 1,
  phase: 1,
  phenomenon: 1,
  philosophy: 1,
  phone: 1,
  photo: 1,
  photograph: 1,
  photographer: 1,
  phrase: 1,
  physical: 1,
  physically: 1,
  physician: 1,
  piano: 1,
  pick: 1,
  picture: 1,
  pie: 1,
  piece: 1,
  pile: 1,
  pilot: 1,
  pine: 1,
  pink: 1,
  pipe: 1,
  pitch: 1,
  place: 1,
  plan: 1,
  plane: 1,
  planet: 1,
  planning: 1,
  plant: 1,
  plastic: 1,
  plate: 1,
  platform: 1,
  play: 1,
  player: 1,
  please: 1,
  pleasure: 1,
  plenty: 1,
  plot: 1,
  plus: 1,
  PM: 1,
  pocket: 1,
  poem: 1,
  poet: 1,
  poetry: 1,
  point: 1,
  pole: 1,
  police: 1,
  policy: 1,
  political: 1,
  politically: 1,
  politician: 1,
  politics: 1,
  poll: 1,
  pollution: 1,
  pool: 1,
  poor: 1,
  pop: 1,
  popular: 1,
  population: 1,
  porch: 1,
  port: 1,
  portion: 1,
  portrait: 1,
  portray: 1,
  pose: 1,
  position: 1,
  positive: 1,
  possess: 1,
  possibility: 1,
  possible: 1,
  possibly: 1,
  post: 1,
  pot: 1,
  potato: 1,
  potential: 1,
  potentially: 1,
  pound: 1,
  pour: 1,
  poverty: 1,
  powder: 1,
  power: 1,
  powerful: 1,
  practical: 1,
  practice: 1,
  pray: 1,
  prayer: 1,
  precisely: 1,
  predict: 1,
  prefer: 1,
  preference: 1,
  pregnancy: 1,
  pregnant: 1,
  preparation: 1,
  prepare: 1,
  prescription: 1,
  presence: 1,
  present: 1,
  presentation: 1,
  preserve: 1,
  president: 1,
  presidential: 1,
  press: 1,
  pressure: 1,
  pretend: 1,
  pretty: 1,
  prevent: 1,
  previous: 1,
  previously: 1,
  price: 1,
  pride: 1,
  priest: 1,
  primarily: 1,
  primary: 1,
  prime: 1,
  principal: 1,
  principle: 1,
  print: 1,
  prior: 1,
  priority: 1,
  prison: 1,
  prisoner: 1,
  privacy: 1,
  private: 1,
  probably: 1,
  problem: 1,
  procedure: 1,
  proceed: 1,
  process: 1,
  produce: 1,
  producer: 1,
  product: 1,
  production: 1,
  profession: 1,
  professional: 1,
  professor: 1,
  profile: 1,
  profit: 1,
  program: 1,
  progress: 1,
  project: 1,
  prominent: 1,
  promise: 1,
  promote: 1,
  prompt: 1,
  proof: 1,
  proper: 1,
  properly: 1,
  property: 1,
  proportion: 1,
  proposal: 1,
  propose: 1,
  proposed: 1,
  prosecutor: 1,
  prospect: 1,
  protect: 1,
  protection: 1,
  protein: 1,
  protest: 1,
  proud: 1,
  prove: 1,
  provide: 1,
  provider: 1,
  province: 1,
  provision: 1,
  psychological: 1,
  psychologist: 1,
  psychology: 1,
  public: 1,
  publication: 1,
  publicly: 1,
  publish: 1,
  publisher: 1,
  pull: 1,
  punishment: 1,
  purchase: 1,
  pure: 1,
  purpose: 1,
  pursue: 1,
  push: 1,
  put: 1,
  qualify: 1,
  quality: 1,
  quarter: 1,
  quarterback: 1,
  question: 1,
  quick: 1,
  quickly: 1,
  quiet: 1,
  quietly: 1,
  quit: 1,
  quite: 1,
  quote: 1,
  race: 1,
  racial: 1,
  radical: 1,
  radio: 1,
  rail: 1,
  rain: 1,
  raise: 1,
  range: 1,
  rank: 1,
  rapid: 1,
  rapidly: 1,
  rare: 1,
  rarely: 1,
  rate: 1,
  rather: 1,
  rating: 1,
  ratio: 1,
  raw: 1,
  reach: 1,
  react: 1,
  reaction: 1,
  read: 1,
  reader: 1,
  reading: 1,
  ready: 1,
  real: 1,
  reality: 1,
  realize: 1,
  really: 1,
  reason: 1,
  reasonable: 1,
  recall: 1,
  receive: 1,
  recent: 1,
  recently: 1,
  recipe: 1,
  recognition: 1,
  recognize: 1,
  recommend: 1,
  recommendation: 1,
  record: 1,
  recording: 1,
  recover: 1,
  recovery: 1,
  recruit: 1,
  red: 1,
  reduce: 1,
  reduction: 1,
  refer: 1,
  reference: 1,
  reflect: 1,
  reflection: 1,
  reform: 1,
  refugee: 1,
  refuse: 1,
  regard: 1,
  regarding: 1,
  regardless: 1,
  regime: 1,
  region: 1,
  regional: 1,
  register: 1,
  regular: 1,
  regularly: 1,
  regulate: 1,
  regulation: 1,
  reinforce: 1,
  reject: 1,
  relate: 1,
  relation: 1,
  relationship: 1,
  relative: 1,
  relatively: 1,
  relax: 1,
  release: 1,
  relevant: 1,
  relief: 1,
  religion: 1,
  religious: 1,
  rely: 1,
  remain: 1,
  remaining: 1,
  remarkable: 1,
  remember: 1,
  remind: 1,
  remote: 1,
  remove: 1,
  repeat: 1,
  repeatedly: 1,
  replace: 1,
  reply: 1,
  report: 1,
  reporter: 1,
  represent: 1,
  representation: 1,
  representative: 1,
  Republican: 1,
  reputation: 1,
  request: 1,
  require: 1,
  requirement: 1,
  research: 1,
  researcher: 1,
  resemble: 1,
  reservation: 1,
  resident: 1,
  resist: 1,
  resistance: 1,
  resolution: 1,
  resolve: 1,
  resort: 1,
  resource: 1,
  respect: 1,
  respond: 1,
  respondent: 1,
  response: 1,
  responsibility: 1,
  responsible: 1,
  rest: 1,
  restaurant: 1,
  restore: 1,
  restriction: 1,
  result: 1,
  retain: 1,
  retire: 1,
  retirement: 1,
  return: 1,
  reveal: 1,
  revenue: 1,
  review: 1,
  revolution: 1,
  rhythm: 1,
  rice: 1,
  rich: 1,
  rid: 1,
  ride: 1,
  rifle: 1,
  right: 1,
  ring: 1,
  rise: 1,
  risk: 1,
  river: 1,
  road: 1,
  rock: 1,
  role: 1,
  roll: 1,
  romantic: 1,
  roof: 1,
  room: 1,
  root: 1,
  rope: 1,
  rose: 1,
  rough: 1,
  roughly: 1,
  round: 1,
  route: 1,
  routine: 1,
  row: 1,
  rub: 1,
  rule: 1,
  run: 1,
  running: 1,
  rural: 1,
  rush: 1,
  Russian: 1,
  sacred: 1,
  sad: 1,
  safe: 1,
  safety: 1,
  sake: 1,
  salad: 1,
  salary: 1,
  sale: 1,
  sales: 1,
  salt: 1,
  same: 1,
  sample: 1,
  sanction: 1,
  sand: 1,
  satellite: 1,
  satisfaction: 1,
  satisfy: 1,
  sauce: 1,
  save: 1,
  saving: 1,
  say: 1,
  scale: 1,
  scandal: 1,
  scared: 1,
  scenario: 1,
  scene: 1,
  schedule: 1,
  scheme: 1,
  scholar: 1,
  scholarship: 1,
  school: 1,
  science: 1,
  scientific: 1,
  scientist: 1,
  scope: 1,
  score: 1,
  scream: 1,
  screen: 1,
  script: 1,
  sea: 1,
  search: 1,
  season: 1,
  seat: 1,
  second: 1,
  secret: 1,
  secretary: 1,
  section: 1,
  sector: 1,
  secure: 1,
  security: 1,
  see: 1,
  seed: 1,
  seek: 1,
  seem: 1,
  segment: 1,
  seize: 1,
  select: 1,
  selection: 1,
  self: 1,
  sell: 1,
  Senate: 1,
  senator: 1,
  send: 1,
  senior: 1,
  sense: 1,
  sensitive: 1,
  sentence: 1,
  separate: 1,
  sequence: 1,
  series: 1,
  serious: 1,
  seriously: 1,
  serve: 1,
  service: 1,
  session: 1,
  set: 1,
  setting: 1,
  settle: 1,
  settlement: 1,
  seven: 1,
  several: 1,
  severe: 1,
  sex: 1,
  sexual: 1,
  shade: 1,
  shadow: 1,
  shake: 1,
  shall: 1,
  shape: 1,
  share: 1,
  sharp: 1,
  she: 1,
  sheet: 1,
  shelf: 1,
  shell: 1,
  shelter: 1,
  shift: 1,
  shine: 1,
  ship: 1,
  shirt: 1,
  shit: 1,
  shock: 1,
  shoe: 1,
  shoot: 1,
  shooting: 1,
  shop: 1,
  shopping: 1,
  shore: 1,
  short: 1,
  shortly: 1,
  shot: 1,
  should: 1,
  shoulder: 1,
  shout: 1,
  show: 1,
  shower: 1,
  shrug: 1,
  shut: 1,
  sick: 1,
  side: 1,
  sigh: 1,
  sight: 1,
  sign: 1,
  signal: 1,
  significance: 1,
  significant: 1,
  significantly: 1,
  silence: 1,
  silent: 1,
  silver: 1,
  similar: 1,
  similarly: 1,
  simple: 1,
  simply: 1,
  sin: 1,
  since: 1,
  sing: 1,
  singer: 1,
  single: 1,
  sink: 1,
  sir: 1,
  sister: 1,
  sit: 1,
  site: 1,
  situation: 1,
  six: 1,
  size: 1,
  ski: 1,
  skill: 1,
  skin: 1,
  sky: 1,
  slave: 1,
  sleep: 1,
  slice: 1,
  slide: 1,
  slight: 1,
  slightly: 1,
  slip: 1,
  slow: 1,
  slowly: 1,
  small: 1,
  smart: 1,
  smell: 1,
  smile: 1,
  smoke: 1,
  smooth: 1,
  snap: 1,
  snow: 1,
  so: 1,
  "so-called": 1,
  soccer: 1,
  social: 1,
  society: 1,
  soft: 1,
  software: 1,
  soil: 1,
  solar: 1,
  soldier: 1,
  solid: 1,
  solution: 1,
  solve: 1,
  some: 1,
  somebody: 1,
  somehow: 1,
  someone: 1,
  something: 1,
  sometimes: 1,
  somewhat: 1,
  somewhere: 1,
  son: 1,
  song: 1,
  soon: 1,
  sophisticated: 1,
  sorry: 1,
  sort: 1,
  soul: 1,
  sound: 1,
  soup: 1,
  source: 1,
  south: 1,
  southern: 1,
  Soviet: 1,
  space: 1,
  Spanish: 1,
  speak: 1,
  speaker: 1,
  special: 1,
  specialist: 1,
  species: 1,
  specific: 1,
  specifically: 1,
  speech: 1,
  speed: 1,
  spend: 1,
  spending: 1,
  spin: 1,
  spirit: 1,
  spiritual: 1,
  split: 1,
  spokesman: 1,
  sport: 1,
  spot: 1,
  spread: 1,
  spring: 1,
  square: 1,
  squeeze: 1,
  stability: 1,
  stable: 1,
  staff: 1,
  stage: 1,
  stair: 1,
  stake: 1,
  stand: 1,
  standard: 1,
  standing: 1,
  star: 1,
  stare: 1,
  start: 1,
  state: 1,
  statement: 1,
  station: 1,
  statistics: 1,
  status: 1,
  stay: 1,
  steady: 1,
  steal: 1,
  steel: 1,
  step: 1,
  stick: 1,
  still: 1,
  stir: 1,
  stock: 1,
  stomach: 1,
  stone: 1,
  stop: 1,
  storage: 1,
  store: 1,
  storm: 1,
  story: 1,
  straight: 1,
  strange: 1,
  stranger: 1,
  strategic: 1,
  strategy: 1,
  stream: 1,
  street: 1,
  strength: 1,
  strengthen: 1,
  stress: 1,
  stretch: 1,
  strike: 1,
  string: 1,
  strip: 1,
  stroke: 1,
  strong: 1,
  strongly: 1,
  structure: 1,
  struggle: 1,
  student: 1,
  studio: 1,
  study: 1,
  stuff: 1,
  stupid: 1,
  style: 1,
  subject: 1,
  submit: 1,
  subsequent: 1,
  substance: 1,
  substantial: 1,
  succeed: 1,
  success: 1,
  successful: 1,
  successfully: 1,
  such: 1,
  sudden: 1,
  suddenly: 1,
  sue: 1,
  suffer: 1,
  sufficient: 1,
  sugar: 1,
  suggest: 1,
  suggestion: 1,
  suicide: 1,
  suit: 1,
  summer: 1,
  summit: 1,
  sun: 1,
  super: 1,
  supply: 1,
  support: 1,
  supporter: 1,
  suppose: 1,
  supposed: 1,
  Supreme: 1,
  sure: 1,
  surely: 1,
  surface: 1,
  surgery: 1,
  surprise: 1,
  surprised: 1,
  surprising: 1,
  surprisingly: 1,
  surround: 1,
  survey: 1,
  survival: 1,
  survive: 1,
  survivor: 1,
  suspect: 1,
  sustain: 1,
  swear: 1,
  sweep: 1,
  sweet: 1,
  swim: 1,
  swing: 1,
  switch: 1,
  symbol: 1,
  symptom: 1,
  system: 1,
  table: 1,
  tablespoon: 1,
  tactic: 1,
  tail: 1,
  take: 1,
  tale: 1,
  talent: 1,
  talk: 1,
  tall: 1,
  tank: 1,
  tap: 1,
  tape: 1,
  target: 1,
  task: 1,
  taste: 1,
  tax: 1,
  taxpayer: 1,
  tea: 1,
  teach: 1,
  teacher: 1,
  teaching: 1,
  team: 1,
  tear: 1,
  teaspoon: 1,
  technical: 1,
  technique: 1,
  technology: 1,
  teen: 1,
  teenager: 1,
  telephone: 1,
  telescope: 1,
  television: 1,
  tell: 1,
  temperature: 1,
  temporary: 1,
  ten: 1,
  tend: 1,
  tendency: 1,
  tennis: 1,
  tension: 1,
  tent: 1,
  term: 1,
  terms: 1,
  terrible: 1,
  territory: 1,
  terror: 1,
  terrorism: 1,
  terrorist: 1,
  test: 1,
  testify: 1,
  testimony: 1,
  testing: 1,
  text: 1,
  than: 1,
  thank: 1,
  thanks: 1,
  that: 1,
  the: 1,
  theater: 1,
  their: 1,
  them: 1,
  theme: 1,
  themselves: 1,
  then: 1,
  theory: 1,
  therapy: 1,
  there: 1,
  therefore: 1,
  these: 1,
  they: 1,
  thick: 1,
  thin: 1,
  thing: 1,
  think: 1,
  thinking: 1,
  third: 1,
  thirty: 1,
  this: 1,
  those: 1,
  though: 1,
  thought: 1,
  thousand: 1,
  threat: 1,
  threaten: 1,
  three: 1,
  throat: 1,
  through: 1,
  throughout: 1,
  throw: 1,
  thus: 1,
  ticket: 1,
  tie: 1,
  tight: 1,
  time: 1,
  tiny: 1,
  tip: 1,
  tire: 1,
  tired: 1,
  tissue: 1,
  title: 1,
  to: 1,
  tobacco: 1,
  today: 1,
  toe: 1,
  together: 1,
  tomato: 1,
  tomorrow: 1,
  tone: 1,
  tongue: 1,
  tonight: 1,
  too: 1,
  tool: 1,
  tooth: 1,
  top: 1,
  topic: 1,
  toss: 1,
  total: 1,
  totally: 1,
  touch: 1,
  tough: 1,
  tour: 1,
  tourist: 1,
  tournament: 1,
  toward: 1,
  towards: 1,
  tower: 1,
  town: 1,
  toy: 1,
  trace: 1,
  track: 1,
  trade: 1,
  tradition: 1,
  traditional: 1,
  traffic: 1,
  tragedy: 1,
  trail: 1,
  train: 1,
  training: 1,
  transfer: 1,
  transform: 1,
  transformation: 1,
  transition: 1,
  translate: 1,
  transportation: 1,
  travel: 1,
  treat: 1,
  treatment: 1,
  treaty: 1,
  tree: 1,
  tremendous: 1,
  trend: 1,
  trial: 1,
  tribe: 1,
  trick: 1,
  trip: 1,
  troop: 1,
  trouble: 1,
  truck: 1,
  true: 1,
  truly: 1,
  trust: 1,
  truth: 1,
  try: 1,
  tube: 1,
  tunnel: 1,
  turn: 1,
  TV: 1,
  twelve: 1,
  twenty: 1,
  twice: 1,
  twin: 1,
  two: 1,
  type: 1,
  typical: 1,
  typically: 1,
  ugly: 1,
  ultimate: 1,
  ultimately: 1,
  unable: 1,
  uncle: 1,
  under: 1,
  undergo: 1,
  understand: 1,
  understanding: 1,
  unfortunately: 1,
  uniform: 1,
  union: 1,
  unique: 1,
  unit: 1,
  United: 1,
  universal: 1,
  universe: 1,
  university: 1,
  unknown: 1,
  unless: 1,
  unlike: 1,
  unlikely: 1,
  until: 1,
  unusual: 1,
  up: 1,
  upon: 1,
  upper: 1,
  urban: 1,
  urge: 1,
  us: 1,
  use: 1,
  used: 1,
  useful: 1,
  user: 1,
  usual: 1,
  usually: 1,
  utility: 1,
  vacation: 1,
  valley: 1,
  valuable: 1,
  value: 1,
  variable: 1,
  variation: 1,
  variety: 1,
  various: 1,
  vary: 1,
  vast: 1,
  vegetable: 1,
  vehicle: 1,
  venture: 1,
  version: 1,
  versus: 1,
  very: 1,
  vessel: 1,
  veteran: 1,
  via: 1,
  victim: 1,
  victory: 1,
  video: 1,
  view: 1,
  viewer: 1,
  village: 1,
  violate: 1,
  violation: 1,
  violence: 1,
  violent: 1,
  virtually: 1,
  virtue: 1,
  virus: 1,
  visible: 1,
  vision: 1,
  visit: 1,
  visitor: 1,
  visual: 1,
  vital: 1,
  voice: 1,
  volume: 1,
  volunteer: 1,
  vote: 1,
  voter: 1,
  vs: 1,
  vulnerable: 1,
  wage: 1,
  wait: 1,
  wake: 1,
  walk: 1,
  wall: 1,
  wander: 1,
  want: 1,
  war: 1,
  warm: 1,
  warn: 1,
  warning: 1,
  wash: 1,
  waste: 1,
  watch: 1,
  water: 1,
  wave: 1,
  way: 1,
  we: 1,
  weak: 1,
  wealth: 1,
  wealthy: 1,
  weapon: 1,
  wear: 1,
  weather: 1,
  wedding: 1,
  week: 1,
  weekend: 1,
  weekly: 1,
  weigh: 1,
  weight: 1,
  welcome: 1,
  welfare: 1,
  well: 1,
  west: 1,
  western: 1,
  wet: 1,
  what: 1,
  whatever: 1,
  wheel: 1,
  when: 1,
  whenever: 1,
  where: 1,
  whereas: 1,
  whether: 1,
  which: 1,
  while: 1,
  whisper: 1,
  white: 1,
  who: 1,
  whole: 1,
  whom: 1,
  whose: 1,
  why: 1,
  wide: 1,
  widely: 1,
  widespread: 1,
  wife: 1,
  wild: 1,
  will: 1,
  willing: 1,
  win: 1,
  wind: 1,
  window: 1,
  wine: 1,
  wing: 1,
  winner: 1,
  winter: 1,
  wipe: 1,
  wire: 1,
  wisdom: 1,
  wise: 1,
  wish: 1,
  with: 1,
  withdraw: 1,
  within: 1,
  without: 1,
  witness: 1,
  woman: 1,
  wonder: 1,
  wonderful: 1,
  wood: 1,
  wooden: 1,
  word: 1,
  work: 1,
  worker: 1,
  working: 1,
  works: 1,
  workshop: 1,
  world: 1,
  worried: 1,
  worry: 1,
  worth: 1,
  would: 1,
  wound: 1,
  wrap: 1,
  write: 1,
  writer: 1,
  writing: 1,
  wrong: 1,
  yard: 1,
  yeah: 1,
  year: 1,
  yell: 1,
  yellow: 1,
  yes: 1,
  yesterday: 1,
  yet: 1,
  yield: 1,
  you: 1,
  young: 1,
  your: 1,
  yours: 1,
  yourself: 1,
  youth: 1,
  zone: 1
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyInitCache", function() { return lazyInitCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCrawler", function() { return initCrawler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleWordToDisplay", function() { return singleWordToDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSingleWord", function() { return loadSingleWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraverseNode", function() { return TraverseNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDictionaryAndChildren", function() { return loadDictionaryAndChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseCluster", function() { return traverseCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCluster", function() { return loadCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommonWord", function() { return loadCommonWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommonWords", function() { return loadCommonWords; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const axios = __webpack_require__(19);

const fs = __webpack_require__(16);

const finder = __webpack_require__(48);

const API_DAILY_LIMIT = 25000;
let MAX_WORDS;
let CACHE_CLUSTERS;
let MAX_NODE_FREQUENCY;
let TRAVERSE_SIMILAR;
let cacheIsInitialized = false;
let totalWordsLastDay;
async function lazyInitCache() {
  if (!cacheIsInitialized) {
    let curtime = new Date(); // 86400000 milliseconds (24 hours)

    totalWordsLastDay = await finder.findFiles("cache/words", curtime - 86400000);
    cacheIsInitialized = true;
    console.log("lazyInitCache  totalWordsLastDay : " + totalWordsLastDay + " errors:" + finder.errors);
    return totalWordsLastDay;
  }

  return totalWordsLastDay;
}
async function initCrawler(_MAX_WORDS, _CACHE_CLUSTERS, _MAX_NODE_FREQUENCY, _TRAVERSE_SIMILAR) {
  MAX_WORDS = _MAX_WORDS;
  CACHE_CLUSTERS = _CACHE_CLUSTERS;
  MAX_NODE_FREQUENCY = _MAX_NODE_FREQUENCY;
  TRAVERSE_SIMILAR = _TRAVERSE_SIMILAR;

  if (!fs.existsSync("cache/words")) {
    fs.mkdirSync("cache/words", {
      recursive: true
    });
  }

  if (!fs.existsSync("cache/clusters")) {
    fs.mkdirSync("cache/clusters");
  }
}
function singleWordToDisplay(data) {
  // create new array to push data to
  let results = [];
  let result = {
    frequency: data.frequency,
    pronunciation: data.pronunciation,
    results,
    etc: ""
  };
  if (data.results) data.results.map(def => {
    let definitionArray = [];
    let definition = {
      partOfSpeech: def.partOfSpeech,
      properties: definitionArray
    }; // creates array of keys in object

    const keys = Object.keys(def);
    keys.map(key => {
      // builds regex that looks for capital letters
      // The response parameters are in camelCase, so we need to ID
      // the capital letters and add spaces instead so the 
      // front end can easily display the parameter labels
      const regex = /(?=[A-Z])/; // creates presentable label

      const label = key.split(regex).join(' ').toLowerCase(); // grabs the value for the parameter from the
      // definition object in response

      const value = def[key]; // constructs new object to send to frontend

      let newObj = {
        label,
        value,
        isString: typeof value === 'string' ? true : false
      };
      definitionArray.push(newObj);
    });
    results.push(definition);
  });
  return result;
}
async function loadSingleWord(word, asobject) {
  const wfpath = `cache/words/${word}`;

  if (fs.existsSync(wfpath)) {
    //console.log("From cache file/single "+wfpath+"  asobject:"+asobject+"...\n");
    let ijson = fs.readFileSync(wfpath).toString();

    try {
      let data = JSON.parse(ijson);

      if (asobject) {
        return data;
      } else {
        let result = singleWordToDisplay(data);
        const ojson = JSON.stringify(result); // modified

        return ojson;
      }
    } catch (e) {
      console.warn("Delete invalid file : " + wfpath, e);
      fs.unlinkSync(wfpath);
    }
  }

  await lazyInitCache();

  if (totalWordsLastDay >= API_DAILY_LIMIT) {
    console.error("Could not make request to file/single " + wfpath + "  totalWordsLastDay >= API_DAILY_LIMIT :  " + totalWordsLastDay + " >= " + API_DAILY_LIMIT + "\n");
    return null;
  } // send request to the WordsAPI


  const response = await axios({
    "method": "GET",
    "url": `https://wordsapiv1.p.rapidapi.com/words/${word}`,
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPI_KEY
    }
  });
  const djson = JSON.stringify(response.data); // original

  fs.writeFile(wfpath, djson, err => {
    if (err) {
      console.error("Cache file/single " + wfpath + "  asobject:" + asobject + " write failure : " + err + "\n");
    } else {
      console.log("Cache file/single " + wfpath + "  asobject:" + asobject + " written successfully\n");
    }
  });

  if (asobject) {
    return response.data;
  } else {
    let result = singleWordToDisplay(response.data);
    const ojson = JSON.stringify(result); // modified

    return ojson;
  }
}
class TraverseNode {
  constructor(by_def, entry, val, level) {
    _defineProperty(this, "entry", void 0);

    _defineProperty(this, "val", void 0);

    _defineProperty(this, "level", void 0);

    _defineProperty(this, "partOfSpeech", void 0);

    _defineProperty(this, "definition", void 0);

    _defineProperty(this, "synonyms", void 0);

    _defineProperty(this, "similar", void 0);

    _defineProperty(this, "words", void 0);

    _defineProperty(this, "key", void 0);

    this.entry = entry;
    this.val = val;
    this.level = level;
    this.definition = val.definition;
    this.synonyms = [];
    this.similar = [];
    this.words = [];
    this.add(by_def);
  }

  add(by_def) {
    this.partOfSpeech = this.val.partOfSpeech;
    this.synonyms.push.apply(this.synonyms, this.val.synonyms);
    this.synonyms.push(this.entry.word);
    this.synonyms.sort();
    this.similar.push.apply(this.similar, this.val.similarTo);
    this.similar.sort();
    this.words.push.apply(this.words, this.synonyms);
    this.words.push.apply(this.words, this.similar);
    this.key = this.level + ":::::::" + this.synonyms.length + "::::::" + this.synonyms.join(", ");

    if (!by_def[this.val.definition]) {
      by_def[this.val.definition] = this;
    }
  }

  compress() {
    delete this.val;
    delete this.key;
    delete this.words;
  }

}
;
async function loadDictionaryAndChildren(tresult, word, traversion) {
  const by_def = tresult.by_def;
  const entry = await loadSingleWord(word, true);

  if (!entry || traversion.level > 1 && entry.frequency && entry.frequency >= MAX_NODE_FREQUENCY) {
    return true;
  }

  for (let key in entry.results) {
    const val = entry.results[key];
    let node = new TraverseNode(by_def, entry, val, traversion.level);

    if (TRAVERSE_SIMILAR) {
      traversion.wordsbreadthfirst.push.apply(traversion.wordsbreadthfirst, node.words);
    } else {
      traversion.wordsbreadthfirst.push.apply(traversion.wordsbreadthfirst, node.synonyms);
    }
  }

  return true;
}
async function traverseCluster(tresult, word) {
  let traversion = {
    level: 1,
    wordsbreadthfirst: [word]
  };
  tresult.noWords = 0;
  tresult.master = await loadSingleWord(word, true);

  do {
    var previouslevelchildwords = traversion.wordsbreadthfirst.concat([]);
    traversion.wordsbreadthfirst = [];
    let promises = [];

    for (let w of previouslevelchildwords) {
      if (tresult.by_w[w]) {} else if (tresult.noWords >= MAX_WORDS) {
        console.log("Level " + traversion.level + " finished. Completed.");
        return;
      } else {
        tresult.noWords++;
        tresult.by_w[w] = 1;
        console.log(tresult.noWords + "/" + MAX_WORDS);
        let nodepromise = loadDictionaryAndChildren(tresult, w, traversion);
        promises.push(nodepromise);
      }
    }

    await Promise.all(promises);
    console.log("Level " + traversion.level + " finished.");
    traversion.level++;
  } while (traversion.wordsbreadthfirst.length);
}
async function loadCluster(word, asobject) {
  const cfpath = `cache/clusters/${word}`;

  if (CACHE_CLUSTERS && fs.existsSync(cfpath)) {
    let ijson = fs.readFileSync(cfpath).toString();
    let result = JSON.parse(ijson);
    console.log("From cache file/cluster " + cfpath + "  asobject:" + asobject + "...\n");

    if (asobject) {
      return result;
    } else {
      return ijson;
    }
  } else {
    const by_def = {};
    const by_w = {};
    const by_key = [];
    let tresult = {
      by_def,
      by_w
    };
    const entry = await traverseCluster(tresult, word);
    by_key.push.apply(by_key, Object.values(by_def));

    const cmp = (firstEl, secondEl) => {
      return firstEl.key.localeCompare(secondEl.key);
    };

    by_key.sort(cmp);

    for (let defobj of by_key) {
      defobj.compress();
    }

    let result = {
      noClusterEntries: by_key.length,
      results: by_key
    };

    if (tresult.master) {
      result.frequency = tresult.master.frequency;
      result.pronunciation = tresult.master.pronunciation;
    }

    let cjson;

    if (CACHE_CLUSTERS) {
      cjson = JSON.stringify(result);
      fs.writeFile(cfpath, cjson, err => {
        if (err) {
          console.error("Cluster file/cluster " + cfpath + "  write failure : " + err + "\n");
        } else {
          console.log("Cluster file/cluster " + cfpath + "  written successfully\n");
        }
      });
    }

    if (asobject) {
      return result;
    } else {
      if (!cjson) {
        cjson = JSON.stringify(result);
      }

      return cjson;
    }
  }
}
async function loadCommonWord(result, word) {
  const entry = await loadSingleWord(word, true);

  for (let key in entry.results) {
    const val = entry.results[key];
    const synonyms = [].concat(val.synonyms);
    synonyms.sort();
    const definition = {
      partOfSpeech: val.partOfSpeech,
      definition: val.definition,
      synonyms
    };
    result.noDefinitions++;
    result.results.push(definition);
  }
}
async function loadCommonWords() {
  const cw = __webpack_require__(17); // create new array to push data to


  let results = [];
  let result = {
    noWords: Object.keys(cw.TheMostCommon3000).length,
    noDefinitions: 0,
    results
  };
  let promises = [];

  for (let commonWord in cw.TheMostCommon3000) {
    promises.push(loadCommonWord(result, commonWord));
  }

  await Promise.all(promises);
  return result;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(3);
var Axios = __webpack_require__(21);
var mergeConfig = __webpack_require__(14);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(15);
axios.CancelToken = __webpack_require__(46);
axios.isCancel = __webpack_require__(4);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(47);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var buildURL = __webpack_require__(1);
var InterceptorManager = __webpack_require__(22);
var dispatchRequest = __webpack_require__(23);
var mergeConfig = __webpack_require__(14);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(24);
var isCancel = __webpack_require__(4);
var defaults = __webpack_require__(5);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(6);
var buildURL = __webpack_require__(1);
var buildFullPath = __webpack_require__(8);
var parseHeaders = __webpack_require__(29);
var isURLSameOrigin = __webpack_require__(30);
var createError = __webpack_require__(2);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(31);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(6);
var buildFullPath = __webpack_require__(8);
var buildURL = __webpack_require__(1);
var http = __webpack_require__(9);
var https = __webpack_require__(10);
var httpFollow = __webpack_require__(11).http;
var httpsFollow = __webpack_require__(11).https;
var url = __webpack_require__(12);
var zlib = __webpack_require__(44);
var pkg = __webpack_require__(45);
var createError = __webpack_require__(2);
var enhanceError = __webpack_require__(7);

var isHttps = /https:?/;

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve(value) {
      resolvePromise(value);
    };
    var reject = function reject(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }


        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxContentLength && config.maxContentLength > -1) {
      options.maxBodyLength = config.maxContentLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;
      switch (res.headers['content-encoding']) {
      /*eslint default-case:0*/
      case 'gzip':
      case 'compress':
      case 'deflate':
        // add the unzipper to the body stream processing pipeline
        stream = (res.statusCode === 204) ? stream : stream.pipe(zlib.createUnzip());

        // remove the content-encoding in order to not confuse downstream operations
        delete res.headers['content-encoding'];
        break;
      }

      // return the last request in case of redirects
      var lastRequest = res.req || req;

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted) return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(config.timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      });
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer') {
  module.exports = __webpack_require__(36);
} else {
  module.exports = __webpack_require__(38);
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(13);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(39);
var util = __webpack_require__(40);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(13);
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [ 6, 2, 3, 4, 5, 1 ];

try {
  var supportsColor = __webpack_require__(41);
  if (supportsColor && supportsColor.level >= 2) {
    exports.colors = [
      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,
      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,
      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,
      205, 206, 207, 208, 209, 214, 215, 220, 221
    ];
  }
} catch (err) {
  // swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(process.stderr.fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}

function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  } else {
    return new Date().toISOString() + ' ';
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const os = __webpack_require__(42);
const hasFlag = __webpack_require__(43);

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 45 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"axios\",\"version\":\"0.19.2\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test && bundlesize\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://github.com/axios/axios\",\"devDependencies\":{\"bundlesize\":\"^0.17.0\",\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.0.2\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^20.1.0\",\"grunt-karma\":\"^2.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^1.0.18\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^1.3.0\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-coverage\":\"^1.1.1\",\"karma-firefox-launcher\":\"^1.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-opera-launcher\":\"^1.0.0\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^1.2.0\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.7\",\"karma-webpack\":\"^1.7.0\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^5.2.0\",\"sinon\":\"^4.5.0\",\"typescript\":\"^2.8.1\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^1.13.1\",\"webpack-dev-server\":\"^1.14.1\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"1.5.10\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}]}");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(15);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cnt", function() { return cnt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFiles", function() { return findFiles; });
const FindFiles = __webpack_require__(49);

let cnt = 0,
    errors = 0;
function findFiles(rootFolder, fileModifiedDate, onFile) {
  var finder = new FindFiles({
    rootFolder,
    fileModifiedDate
  });
  var result, resolve, reject;
  cnt = 0;
  errors = 0;
  finder.on("match", function (strPath, stat) {
    if (onFile) onFile(strPath, stat);
    cnt++;
  });
  finder.on("complete", function () {
    resolve(cnt);
  });
  finder.on("patherror", function (err, strPath) {
    console.log("Error for Path " + strPath + " " + err); // Note that an error in accessing a particular file does not stop the whole show

    errors++;
  });
  finder.on("error", function (err) {
    console.log("Global Error " + err);
    errors++;
  });
  result = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
    finder.startSearch();
  });
  return result;
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(__webpack_require__(16));
const async_1 = __importDefault(__webpack_require__(50));
const path_1 = __importDefault(__webpack_require__(51));
const events_1 = __importDefault(__webpack_require__(52));
var EventEmitter = events_1.default.EventEmitter;
/***
 * This class recursively finds files that match the filter function passed to the constructor
 * An alternative constructor takes a fileModifiedDate and returns all files that have been modified since that date
 * this class emits a number of events
 * on "match" is emitted for every path that matches
 */
class finder extends EventEmitter {
    constructor(options) {
        super();
        if (options.fileModifiedDate) {
            options.filterFunction = (strPath, fsStat) => {
                return (fsStat.mtime > options.fileModifiedDate);
            };
        }
        if (!options.filterFunction) {
            options.filterFunction = () => true;
        }
        this.options = options;
    }
    startSearch() {
        this.recurseFolder(this.options.rootFolder, (err) => {
            if (err) {
                this.emit("error", err);
                return;
            }
            //console.log("This Should Call when everything is finished");
            this.emit("complete");
        });
    }
    recurseFolder(strFolderName, folderCompleteCallback) {
        fs_1.default.readdir(strFolderName, (err, files) => {
            if (err) {
                this.onPathError(err, strFolderName);
                return folderCompleteCallback(err);
            }
            if (!files) {
                return folderCompleteCallback(null); // This is just an empty folder
            }
            async_1.default.each(files, (file, callback) => {
                try {
                    var strPath = path_1.default.join(strFolderName, file);
                }
                catch (e) {
                    this.onPathError(e, strPath);
                    return callback(null); // Don't return error to callback or we will miss other files in directory
                }
                this.onFileFound(strPath, callback);
            }, (err) => {
                if (err) {
                    this.onPathError(err, strFolderName);
                }
                //                    if(strFolderName.length < 20)
                //                        console.log("finished " + strFolderName);
                return folderCompleteCallback(err);
            });
        });
    }
    onFileFound(strPath, callback) {
        fs_1.default.lstat(strPath, (err, stat) => {
            if (err) {
                this.onPathError(err, strPath);
                return callback(null); // Don't return error to callback or we will miss other files in directory
            }
            if (!stat) {
                this.onPathError(new Error("Could not get stat for file " + strPath), strPath);
                return callback(null); // Don't return error to callback or we will miss other files in directory
            }
            if (stat.isDirectory()) {
                this.checkMatch(strPath, stat);
                this.recurseFolder(strPath, (err) => {
                    if (err) {
                        this.onPathError(err, strPath);
                    }
                    return callback(null);
                });
            }
            else {
                this.checkMatch(strPath, stat);
                return callback(null);
            }
        });
    }
    checkMatch(strPath, stat) {
        try {
            if (this.options.filterFunction(strPath, stat)) {
                this.emit("match", strPath, stat);
            }
        }
        catch (e) {
            this.onPathError(e, strPath);
        }
    }
    onPathError(err, strPath) {
        try {
            this.emit("patherror", err, strPath);
        }
        catch (e) {
            //Already emitted a path error and the handler failed must not throw error or other files will fail to process too
            this.emit("error", new Error("Error in path Error Handler" + e));
        }
    }
}
module.exports = finder;
//# sourceMappingURL=node-find-files.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*global setImmediate: false, setTimeout: false, console: false */
(function () {

    var async = {};

    // global on the server, window in the browser
    var root, previous_async;

    root = this;
    if (root != null) {
      previous_async = root.async;
    }

    async.noConflict = function () {
        root.async = previous_async;
        return async;
    };

    function only_once(fn) {
        var called = false;
        return function() {
            if (called) throw new Error("Callback was already called.");
            called = true;
            fn.apply(root, arguments);
        }
    }

    //// cross-browser compatiblity functions ////

    var _each = function (arr, iterator) {
        if (arr.forEach) {
            return arr.forEach(iterator);
        }
        for (var i = 0; i < arr.length; i += 1) {
            iterator(arr[i], i, arr);
        }
    };

    var _map = function (arr, iterator) {
        if (arr.map) {
            return arr.map(iterator);
        }
        var results = [];
        _each(arr, function (x, i, a) {
            results.push(iterator(x, i, a));
        });
        return results;
    };

    var _reduce = function (arr, iterator, memo) {
        if (arr.reduce) {
            return arr.reduce(iterator, memo);
        }
        _each(arr, function (x, i, a) {
            memo = iterator(memo, x, i, a);
        });
        return memo;
    };

    var _keys = function (obj) {
        if (Object.keys) {
            return Object.keys(obj);
        }
        var keys = [];
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        return keys;
    };

    //// exported async module functions ////

    //// nextTick implementation with browser-compatible fallback ////
    if (typeof process === 'undefined' || !(process.nextTick)) {
        if (typeof setImmediate === 'function') {
            async.nextTick = function (fn) {
                setImmediate(fn);
            };
        }
        else {
            async.nextTick = function (fn) {
                setTimeout(fn, 0);
            };
        }
    }
    else {
        async.nextTick = process.nextTick;
    }

    async.each = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        _each(arr, function (x) {
            iterator(x, only_once(function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed >= arr.length) {
                        callback(null);
                    }
                }
            }));
        });
    };
    async.forEach = async.each;

    async.eachSeries = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        var iterate = function () {
            var sync = true;
            iterator(arr[completed], function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed >= arr.length) {
                        callback(null);
                    }
                    else {
                        if (sync) {
                            async.nextTick(iterate);
                        }
                        else {
                            iterate();
                        }
                    }
                }
            });
            sync = false;
        };
        iterate();
    };
    async.forEachSeries = async.eachSeries;

    async.eachLimit = function (arr, limit, iterator, callback) {
        var fn = _eachLimit(limit);
        fn.apply(null, [arr, iterator, callback]);
    };
    async.forEachLimit = async.eachLimit;

    var _eachLimit = function (limit) {

        return function (arr, iterator, callback) {
            callback = callback || function () {};
            if (!arr.length || limit <= 0) {
                return callback();
            }
            var completed = 0;
            var started = 0;
            var running = 0;

            (function replenish () {
                if (completed >= arr.length) {
                    return callback();
                }

                while (running < limit && started < arr.length) {
                    started += 1;
                    running += 1;
                    iterator(arr[started - 1], function (err) {
                        if (err) {
                            callback(err);
                            callback = function () {};
                        }
                        else {
                            completed += 1;
                            running -= 1;
                            if (completed >= arr.length) {
                                callback();
                            }
                            else {
                                replenish();
                            }
                        }
                    });
                }
            })();
        };
    };


    var doParallel = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.each].concat(args));
        };
    };
    var doParallelLimit = function(limit, fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [_eachLimit(limit)].concat(args));
        };
    };
    var doSeries = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.eachSeries].concat(args));
        };
    };


    var _asyncMap = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (err, v) {
                results[x.index] = v;
                callback(err);
            });
        }, function (err) {
            callback(err, results);
        });
    };
    async.map = doParallel(_asyncMap);
    async.mapSeries = doSeries(_asyncMap);
    async.mapLimit = function (arr, limit, iterator, callback) {
        return _mapLimit(limit)(arr, iterator, callback);
    };

    var _mapLimit = function(limit) {
        return doParallelLimit(limit, _asyncMap);
    };

    // reduce only has a series version, as doing reduce in parallel won't
    // work in many situations.
    async.reduce = function (arr, memo, iterator, callback) {
        async.eachSeries(arr, function (x, callback) {
            iterator(memo, x, function (err, v) {
                memo = v;
                callback(err);
            });
        }, function (err) {
            callback(err, memo);
        });
    };
    // inject alias
    async.inject = async.reduce;
    // foldl alias
    async.foldl = async.reduce;

    async.reduceRight = function (arr, memo, iterator, callback) {
        var reversed = _map(arr, function (x) {
            return x;
        }).reverse();
        async.reduce(reversed, memo, iterator, callback);
    };
    // foldr alias
    async.foldr = async.reduceRight;

    var _filter = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.filter = doParallel(_filter);
    async.filterSeries = doSeries(_filter);
    // select alias
    async.select = async.filter;
    async.selectSeries = async.filterSeries;

    var _reject = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (!v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.reject = doParallel(_reject);
    async.rejectSeries = doSeries(_reject);

    var _detect = function (eachfn, arr, iterator, main_callback) {
        eachfn(arr, function (x, callback) {
            iterator(x, function (result) {
                if (result) {
                    main_callback(x);
                    main_callback = function () {};
                }
                else {
                    callback();
                }
            });
        }, function (err) {
            main_callback();
        });
    };
    async.detect = doParallel(_detect);
    async.detectSeries = doSeries(_detect);

    async.some = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (v) {
                    main_callback(true);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(false);
        });
    };
    // any alias
    async.any = async.some;

    async.every = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (!v) {
                    main_callback(false);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(true);
        });
    };
    // all alias
    async.all = async.every;

    async.sortBy = function (arr, iterator, callback) {
        async.map(arr, function (x, callback) {
            iterator(x, function (err, criteria) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, {value: x, criteria: criteria});
                }
            });
        }, function (err, results) {
            if (err) {
                return callback(err);
            }
            else {
                var fn = function (left, right) {
                    var a = left.criteria, b = right.criteria;
                    return a < b ? -1 : a > b ? 1 : 0;
                };
                callback(null, _map(results.sort(fn), function (x) {
                    return x.value;
                }));
            }
        });
    };

    async.auto = function (tasks, callback) {
        callback = callback || function () {};
        var keys = _keys(tasks);
        if (!keys.length) {
            return callback(null);
        }

        var results = {};

        var listeners = [];
        var addListener = function (fn) {
            listeners.unshift(fn);
        };
        var removeListener = function (fn) {
            for (var i = 0; i < listeners.length; i += 1) {
                if (listeners[i] === fn) {
                    listeners.splice(i, 1);
                    return;
                }
            }
        };
        var taskComplete = function () {
            _each(listeners.slice(0), function (fn) {
                fn();
            });
        };

        addListener(function () {
            if (_keys(results).length === keys.length) {
                callback(null, results);
                callback = function () {};
            }
        });

        _each(keys, function (k) {
            var task = (tasks[k] instanceof Function) ? [tasks[k]]: tasks[k];
            var taskCallback = function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (args.length <= 1) {
                    args = args[0];
                }
                if (err) {
                    var safeResults = {};
                    _each(_keys(results), function(rkey) {
                        safeResults[rkey] = results[rkey];
                    });
                    safeResults[k] = args;
                    callback(err, safeResults);
                    // stop subsequent errors hitting callback multiple times
                    callback = function () {};
                }
                else {
                    results[k] = args;
                    async.nextTick(taskComplete);
                }
            };
            var requires = task.slice(0, Math.abs(task.length - 1)) || [];
            var ready = function () {
                return _reduce(requires, function (a, x) {
                    return (a && results.hasOwnProperty(x));
                }, true) && !results.hasOwnProperty(k);
            };
            if (ready()) {
                task[task.length - 1](taskCallback, results);
            }
            else {
                var listener = function () {
                    if (ready()) {
                        removeListener(listener);
                        task[task.length - 1](taskCallback, results);
                    }
                };
                addListener(listener);
            }
        });
    };

    async.waterfall = function (tasks, callback) {
        callback = callback || function () {};
        if (!tasks.length) {
            return callback();
        }
        var wrapIterator = function (iterator) {
            return function (err) {
                if (err) {
                    callback.apply(null, arguments);
                    callback = function () {};
                }
                else {
                    var args = Array.prototype.slice.call(arguments, 1);
                    var next = iterator.next();
                    if (next) {
                        args.push(wrapIterator(next));
                    }
                    else {
                        args.push(callback);
                    }
                    async.nextTick(function () {
                        iterator.apply(null, args);
                    });
                }
            };
        };
        wrapIterator(async.iterator(tasks))();
    };

    var _parallel = function(eachfn, tasks, callback) {
        callback = callback || function () {};
        if (tasks.constructor === Array) {
            eachfn.map(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            eachfn.each(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.parallel = function (tasks, callback) {
        _parallel({ map: async.map, each: async.each }, tasks, callback);
    };

    async.parallelLimit = function(tasks, limit, callback) {
        _parallel({ map: _mapLimit(limit), each: _eachLimit(limit) }, tasks, callback);
    };

    async.series = function (tasks, callback) {
        callback = callback || function () {};
        if (tasks.constructor === Array) {
            async.mapSeries(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            async.eachSeries(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.iterator = function (tasks) {
        var makeCallback = function (index) {
            var fn = function () {
                if (tasks.length) {
                    tasks[index].apply(null, arguments);
                }
                return fn.next();
            };
            fn.next = function () {
                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
            };
            return fn;
        };
        return makeCallback(0);
    };

    async.apply = function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fn.apply(
                null, args.concat(Array.prototype.slice.call(arguments))
            );
        };
    };

    var _concat = function (eachfn, arr, fn, callback) {
        var r = [];
        eachfn(arr, function (x, cb) {
            fn(x, function (err, y) {
                r = r.concat(y || []);
                cb(err);
            });
        }, function (err) {
            callback(err, r);
        });
    };
    async.concat = doParallel(_concat);
    async.concatSeries = doSeries(_concat);

    async.whilst = function (test, iterator, callback) {
        if (test()) {
            var sync = true;
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                if (sync) {
                    async.nextTick(function () {
                        async.whilst(test, iterator, callback);
                    });
                }
                else {
                    async.whilst(test, iterator, callback);
                }
            });
            sync = false;
        }
        else {
            callback();
        }
    };

    async.doWhilst = function (iterator, test, callback) {
        var sync = true;
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            if (test()) {
                if (sync) {
                    async.nextTick(function () {
                        async.doWhilst(iterator, test, callback);
                    });
                }
                else {
                    async.doWhilst(iterator, test, callback);
                }
            }
            else {
                callback();
            }
        });
        sync = false;
    };

    async.until = function (test, iterator, callback) {
        if (!test()) {
            var sync = true;
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                if (sync) {
                    async.nextTick(function () {
                        async.until(test, iterator, callback);
                    });
                }
                else {
                    async.until(test, iterator, callback);
                }
            });
            sync = false;
        }
        else {
            callback();
        }
    };

    async.doUntil = function (iterator, test, callback) {
        var sync = true;
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            if (!test()) {
                if (sync) {
                    async.nextTick(function () {
                        async.doUntil(iterator, test, callback);
                    });
                }
                else {
                    async.doUntil(iterator, test, callback);
                }
            }
            else {
                callback();
            }
        });
        sync = false;
    };

    async.queue = function (worker, concurrency) {
        if (concurrency === undefined) {
            concurrency = 1;
        }
        function _insert(q, data, pos, callback) {
          if(data.constructor !== Array) {
              data = [data];
          }
          _each(data, function(task) {
              var item = {
                  data: task,
                  callback: typeof callback === 'function' ? callback : null
              };

              if (pos) {
                q.tasks.unshift(item);
              } else {
                q.tasks.push(item);
              }

              if (q.saturated && q.tasks.length === concurrency) {
                  q.saturated();
              }
              async.nextTick(q.process);
          });
        }

        var workers = 0;
        var q = {
            tasks: [],
            concurrency: concurrency,
            saturated: null,
            empty: null,
            drain: null,
            push: function (data, callback) {
              _insert(q, data, false, callback);
            },
            unshift: function (data, callback) {
              _insert(q, data, true, callback);
            },
            process: function () {
                if (workers < q.concurrency && q.tasks.length) {
                    var task = q.tasks.shift();
                    if (q.empty && q.tasks.length === 0) {
                        q.empty();
                    }
                    workers += 1;
                    var sync = true;
                    var next = function () {
                        workers -= 1;
                        if (task.callback) {
                            task.callback.apply(task, arguments);
                        }
                        if (q.drain && q.tasks.length + workers === 0) {
                            q.drain();
                        }
                        q.process();
                    };
                    var cb = only_once(function () {
                        var cbArgs = arguments;

                        if (sync) {
                            async.nextTick(function () {
                                next.apply(null, cbArgs);
                            });
                        } else {
                            next.apply(null, arguments);
                        }
                    });
                    worker(task.data, cb);
                    sync = false;
                }
            },
            length: function () {
                return q.tasks.length;
            },
            running: function () {
                return workers;
            }
        };
        return q;
    };

    async.cargo = function (worker, payload) {
        var working     = false,
            tasks       = [];

        var cargo = {
            tasks: tasks,
            payload: payload,
            saturated: null,
            empty: null,
            drain: null,
            push: function (data, callback) {
                if(data.constructor !== Array) {
                    data = [data];
                }
                _each(data, function(task) {
                    tasks.push({
                        data: task,
                        callback: typeof callback === 'function' ? callback : null
                    });
                    if (cargo.saturated && tasks.length === payload) {
                        cargo.saturated();
                    }
                });
                async.nextTick(cargo.process);
            },
            process: function process() {
                if (working) return;
                if (tasks.length === 0) {
                    if(cargo.drain) cargo.drain();
                    return;
                }

                var ts = typeof payload === 'number'
                            ? tasks.splice(0, payload)
                            : tasks.splice(0);

                var ds = _map(ts, function (task) {
                    return task.data;
                });

                if(cargo.empty) cargo.empty();
                working = true;
                worker(ds, function () {
                    working = false;

                    var args = arguments;
                    _each(ts, function (data) {
                        if (data.callback) {
                            data.callback.apply(null, args);
                        }
                    });

                    process();
                });
            },
            length: function () {
                return tasks.length;
            },
            running: function () {
                return working;
            }
        };
        return cargo;
    };

    var _console_fn = function (name) {
        return function (fn) {
            var args = Array.prototype.slice.call(arguments, 1);
            fn.apply(null, args.concat([function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (typeof console !== 'undefined') {
                    if (err) {
                        if (console.error) {
                            console.error(err);
                        }
                    }
                    else if (console[name]) {
                        _each(args, function (x) {
                            console[name](x);
                        });
                    }
                }
            }]));
        };
    };
    async.log = _console_fn('log');
    async.dir = _console_fn('dir');
    /*async.info = _console_fn('info');
    async.warn = _console_fn('warn');
    async.error = _console_fn('error');*/

    async.memoize = function (fn, hasher) {
        var memo = {};
        var queues = {};
        hasher = hasher || function (x) {
            return x;
        };
        var memoized = function () {
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            var key = hasher.apply(null, args);
            if (key in memo) {
                callback.apply(null, memo[key]);
            }
            else if (key in queues) {
                queues[key].push(callback);
            }
            else {
                queues[key] = [callback];
                fn.apply(null, args.concat([function () {
                    memo[key] = arguments;
                    var q = queues[key];
                    delete queues[key];
                    for (var i = 0, l = q.length; i < l; i++) {
                      q[i].apply(null, arguments);
                    }
                }]));
            }
        };
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
    };

    async.unmemoize = function (fn) {
      return function () {
        return (fn.unmemoized || fn).apply(null, arguments);
      };
    };

    async.times = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.map(counter, iterator, callback);
    };

    async.timesSeries = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.mapSeries(counter, iterator, callback);
    };

    async.compose = function (/* functions... */) {
        var fns = Array.prototype.reverse.call(arguments);
        return function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            async.reduce(fns, args, function (newargs, fn, cb) {
                fn.apply(that, newargs.concat([function () {
                    var err = arguments[0];
                    var nextargs = Array.prototype.slice.call(arguments, 1);
                    cb(err, nextargs);
                }]))
            },
            function (err, results) {
                callback.apply(that, [err].concat(results));
            });
        };
    };

    async.applyEach = function (fns /*args...*/) {
        var go = function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            return async.each(fns, function (fn, cb) {
                fn.apply(that, args.concat([cb]));
            },
            callback);
        };
        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            return go.apply(this, args);
        }
        else {
            return go;
        }
    };

    // AMD / RequireJS
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return async;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // Node.js
    else {}

}());


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
const crawler = __webpack_require__(18);

const cw = __webpack_require__(17);

const MAX_WORDS = 10000000;
const CACHE_CLUSTERS = false;
const MAX_NODE_FREQUENCY = 1000;
const TRAVERSE_SIMILAR = true;
async function handler(event, context) {
  crawler.initCrawler(MAX_WORDS, CACHE_CLUSTERS, MAX_NODE_FREQUENCY, TRAVERSE_SIMILAR);

  try {
    console.log("crawling in the background starting from top 3000 English words...");
    let promises = [];

    for (let commonWord in cw.TheMostCommon3000) {
      promises.push(crawler.loadCluster(commonWord, false));
    }

    await Promise.all(promises);
    return {
      statusCode: 200,
      body: json,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
}

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZm9sbG93LXJlZGlyZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9pbmNsdWRlL2NvbW1vbi13b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9pbmNsdWRlL2NyYXdsZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9odHRwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmVhbVwiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9ub2RlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9zXCIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYXMtZmxhZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6bGliXCIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL2luY2x1ZGUvZmluZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbm9kZS1maW5kLWZpbGVzL2Rpc3Qvbm9kZS1maW5kLWZpbGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXN5bmMvbGliL2FzeW5jLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vLi9jcmF3bC1iYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIlRoZU1vc3RDb21tb24zMDAwIiwiYSIsImFiYW5kb24iLCJhYmlsaXR5IiwiYWJsZSIsImFib3J0aW9uIiwiYWJvdXQiLCJhYm92ZSIsImFicm9hZCIsImFic2VuY2UiLCJhYnNvbHV0ZSIsImFic29sdXRlbHkiLCJhYnNvcmIiLCJhYnVzZSIsImFjYWRlbWljIiwiYWNjZXB0IiwiYWNjZXNzIiwiYWNjaWRlbnQiLCJhY2NvbXBhbnkiLCJhY2NvbXBsaXNoIiwiYWNjb3JkaW5nIiwiYWNjb3VudCIsImFjY3VyYXRlIiwiYWNjdXNlIiwiYWNoaWV2ZSIsImFjaGlldmVtZW50IiwiYWNpZCIsImFja25vd2xlZGdlIiwiYWNxdWlyZSIsImFjcm9zcyIsImFjdCIsImFjdGlvbiIsImFjdGl2ZSIsImFjdGl2aXN0IiwiYWN0aXZpdHkiLCJhY3RvciIsImFjdHJlc3MiLCJhY3R1YWwiLCJhY3R1YWxseSIsImFkIiwiYWRhcHQiLCJhZGQiLCJhZGRpdGlvbiIsImFkZGl0aW9uYWwiLCJhZGRyZXNzIiwiYWRlcXVhdGUiLCJhZGp1c3QiLCJhZGp1c3RtZW50IiwiYWRtaW5pc3RyYXRpb24iLCJhZG1pbmlzdHJhdG9yIiwiYWRtaXJlIiwiYWRtaXNzaW9uIiwiYWRtaXQiLCJhZG9sZXNjZW50IiwiYWRvcHQiLCJhZHVsdCIsImFkdmFuY2UiLCJhZHZhbmNlZCIsImFkdmFudGFnZSIsImFkdmVudHVyZSIsImFkdmVydGlzaW5nIiwiYWR2aWNlIiwiYWR2aXNlIiwiYWR2aXNlciIsImFkdm9jYXRlIiwiYWZmYWlyIiwiYWZmZWN0IiwiYWZmb3JkIiwiYWZyYWlkIiwiQWZyaWNhbiIsImFmdGVyIiwiYWZ0ZXJub29uIiwiYWdhaW4iLCJhZ2FpbnN0IiwiYWdlIiwiYWdlbmN5IiwiYWdlbmRhIiwiYWdlbnQiLCJhZ2dyZXNzaXZlIiwiYWdvIiwiYWdyZWUiLCJhZ3JlZW1lbnQiLCJhZ3JpY3VsdHVyYWwiLCJhaCIsImFoZWFkIiwiYWlkIiwiYWlkZSIsIkFJRFMiLCJhaW0iLCJhaXIiLCJhaXJjcmFmdCIsImFpcmxpbmUiLCJhaXJwb3J0IiwiYWxidW0iLCJhbGNvaG9sIiwiYWxpdmUiLCJhbGwiLCJhbGxpYW5jZSIsImFsbG93IiwiYWxseSIsImFsbW9zdCIsImFsb25lIiwiYWxvbmciLCJhbHJlYWR5IiwiYWxzbyIsImFsdGVyIiwiYWx0ZXJuYXRpdmUiLCJhbHRob3VnaCIsImFsd2F5cyIsIkFNIiwiYW1hemluZyIsIkFtZXJpY2FuIiwiYW1vbmciLCJhbW91bnQiLCJhbmFseXNpcyIsImFuYWx5c3QiLCJhbmFseXplIiwiYW5jaWVudCIsImFuZCIsImFuZ2VyIiwiYW5nbGUiLCJhbmdyeSIsImFuaW1hbCIsImFubml2ZXJzYXJ5IiwiYW5ub3VuY2UiLCJhbm51YWwiLCJhbm90aGVyIiwiYW5zd2VyIiwiYW50aWNpcGF0ZSIsImFueGlldHkiLCJhbnkiLCJhbnlib2R5IiwiYW55bW9yZSIsImFueW9uZSIsImFueXRoaW5nIiwiYW55d2F5IiwiYW55d2hlcmUiLCJhcGFydCIsImFwYXJ0bWVudCIsImFwcGFyZW50IiwiYXBwYXJlbnRseSIsImFwcGVhbCIsImFwcGVhciIsImFwcGVhcmFuY2UiLCJhcHBsZSIsImFwcGxpY2F0aW9uIiwiYXBwbHkiLCJhcHBvaW50IiwiYXBwb2ludG1lbnQiLCJhcHByZWNpYXRlIiwiYXBwcm9hY2giLCJhcHByb3ByaWF0ZSIsImFwcHJvdmFsIiwiYXBwcm92ZSIsImFwcHJveGltYXRlbHkiLCJBcmFiIiwiYXJjaGl0ZWN0IiwiYXJlYSIsImFyZ3VlIiwiYXJndW1lbnQiLCJhcmlzZSIsImFybSIsImFybWVkIiwiYXJteSIsImFyb3VuZCIsImFycmFuZ2UiLCJhcnJhbmdlbWVudCIsImFycmVzdCIsImFycml2YWwiLCJhcnJpdmUiLCJhcnQiLCJhcnRpY2xlIiwiYXJ0aXN0IiwiYXJ0aXN0aWMiLCJhcyIsIkFzaWFuIiwiYXNpZGUiLCJhc2siLCJhc2xlZXAiLCJhc3BlY3QiLCJhc3NhdWx0IiwiYXNzZXJ0IiwiYXNzZXNzIiwiYXNzZXNzbWVudCIsImFzc2V0IiwiYXNzaWduIiwiYXNzaWdubWVudCIsImFzc2lzdCIsImFzc2lzdGFuY2UiLCJhc3Npc3RhbnQiLCJhc3NvY2lhdGUiLCJhc3NvY2lhdGlvbiIsImFzc3VtZSIsImFzc3VtcHRpb24iLCJhc3N1cmUiLCJhdCIsImF0aGxldGUiLCJhdGhsZXRpYyIsImF0bW9zcGhlcmUiLCJhdHRhY2giLCJhdHRhY2siLCJhdHRlbXB0IiwiYXR0ZW5kIiwiYXR0ZW50aW9uIiwiYXR0aXR1ZGUiLCJhdHRvcm5leSIsImF0dHJhY3QiLCJhdHRyYWN0aXZlIiwiYXR0cmlidXRlIiwiYXVkaWVuY2UiLCJhdXRob3IiLCJhdXRob3JpdHkiLCJhdXRvIiwiYXZhaWxhYmxlIiwiYXZlcmFnZSIsImF2b2lkIiwiYXdhcmQiLCJhd2FyZSIsImF3YXJlbmVzcyIsImF3YXkiLCJhd2Z1bCIsImJhYnkiLCJiYWNrIiwiYmFja2dyb3VuZCIsImJhZCIsImJhZGx5IiwiYmFnIiwiYmFrZSIsImJhbGFuY2UiLCJiYWxsIiwiYmFuIiwiYmFuZCIsImJhbmsiLCJiYXIiLCJiYXJlbHkiLCJiYXJyZWwiLCJiYXJyaWVyIiwiYmFzZSIsImJhc2ViYWxsIiwiYmFzaWMiLCJiYXNpY2FsbHkiLCJiYXNpcyIsImJhc2tldCIsImJhc2tldGJhbGwiLCJiYXRocm9vbSIsImJhdHRlcnkiLCJiYXR0bGUiLCJiZSIsImJlYWNoIiwiYmVhbiIsImJlYXIiLCJiZWF0IiwiYmVhdXRpZnVsIiwiYmVhdXR5IiwiYmVjYXVzZSIsImJlY29tZSIsImJlZCIsImJlZHJvb20iLCJiZWVyIiwiYmVmb3JlIiwiYmVnaW4iLCJiZWdpbm5pbmciLCJiZWhhdmlvciIsImJlaGluZCIsImJlaW5nIiwiYmVsaWVmIiwiYmVsaWV2ZSIsImJlbGwiLCJiZWxvbmciLCJiZWxvdyIsImJlbHQiLCJiZW5jaCIsImJlbmQiLCJiZW5lYXRoIiwiYmVuZWZpdCIsImJlc2lkZSIsImJlc2lkZXMiLCJiZXN0IiwiYmV0IiwiYmV0dGVyIiwiYmV0d2VlbiIsImJleW9uZCIsIkJpYmxlIiwiYmlnIiwiYmlrZSIsImJpbGwiLCJiaWxsaW9uIiwiYmluZCIsImJpb2xvZ2ljYWwiLCJiaXJkIiwiYmlydGgiLCJiaXJ0aGRheSIsImJpdCIsImJpdGUiLCJibGFjayIsImJsYWRlIiwiYmxhbWUiLCJibGFua2V0IiwiYmxpbmQiLCJibG9jayIsImJsb29kIiwiYmxvdyIsImJsdWUiLCJib2FyZCIsImJvYXQiLCJib2R5IiwiYm9tYiIsImJvbWJpbmciLCJib25kIiwiYm9uZSIsImJvb2siLCJib29tIiwiYm9vdCIsImJvcmRlciIsImJvcm4iLCJib3Jyb3ciLCJib3NzIiwiYm90aCIsImJvdGhlciIsImJvdHRsZSIsImJvdHRvbSIsImJvdW5kYXJ5IiwiYm93bCIsImJveCIsImJveSIsImJveWZyaWVuZCIsImJyYWluIiwiYnJhbmNoIiwiYnJhbmQiLCJicmVhZCIsImJyZWFrIiwiYnJlYWtmYXN0IiwiYnJlYXN0IiwiYnJlYXRoIiwiYnJlYXRoZSIsImJyaWNrIiwiYnJpZGdlIiwiYnJpZWYiLCJicmllZmx5IiwiYnJpZ2h0IiwiYnJpbGxpYW50IiwiYnJpbmciLCJCcml0aXNoIiwiYnJvYWQiLCJicm9rZW4iLCJicm90aGVyIiwiYnJvd24iLCJicnVzaCIsImJ1Y2siLCJidWRnZXQiLCJidWlsZCIsImJ1aWxkaW5nIiwiYnVsbGV0IiwiYnVuY2giLCJidXJkZW4iLCJidXJuIiwiYnVyeSIsImJ1cyIsImJ1c2luZXNzIiwiYnVzeSIsImJ1dCIsImJ1dHRlciIsImJ1dHRvbiIsImJ1eSIsImJ1eWVyIiwiYnkiLCJjYWJpbiIsImNhYmluZXQiLCJjYWJsZSIsImNha2UiLCJjYWxjdWxhdGUiLCJjYWxsIiwiY2FtZXJhIiwiY2FtcCIsImNhbXBhaWduIiwiY2FtcHVzIiwiY2FuIiwiQ2FuYWRpYW4iLCJjYW5jZXIiLCJjYW5kaWRhdGUiLCJjYXAiLCJjYXBhYmlsaXR5IiwiY2FwYWJsZSIsImNhcGFjaXR5IiwiY2FwaXRhbCIsImNhcHRhaW4iLCJjYXB0dXJlIiwiY2FyIiwiY2FyYm9uIiwiY2FyZCIsImNhcmUiLCJjYXJlZXIiLCJjYXJlZnVsIiwiY2FyZWZ1bGx5IiwiY2FycmllciIsImNhcnJ5IiwiY2FzZSIsImNhc2giLCJjYXN0IiwiY2F0IiwiY2F0Y2giLCJjYXRlZ29yeSIsIkNhdGhvbGljIiwiY2F1c2UiLCJjZWlsaW5nIiwiY2VsZWJyYXRlIiwiY2VsZWJyYXRpb24iLCJjZWxlYnJpdHkiLCJjZWxsIiwiY2VudGVyIiwiY2VudHJhbCIsImNlbnR1cnkiLCJDRU8iLCJjZXJlbW9ueSIsImNlcnRhaW4iLCJjZXJ0YWlubHkiLCJjaGFpbiIsImNoYWlyIiwiY2hhaXJtYW4iLCJjaGFsbGVuZ2UiLCJjaGFtYmVyIiwiY2hhbXBpb24iLCJjaGFtcGlvbnNoaXAiLCJjaGFuY2UiLCJjaGFuZ2UiLCJjaGFuZ2luZyIsImNoYW5uZWwiLCJjaGFwdGVyIiwiY2hhcmFjdGVyIiwiY2hhcmFjdGVyaXN0aWMiLCJjaGFyYWN0ZXJpemUiLCJjaGFyZ2UiLCJjaGFyaXR5IiwiY2hhcnQiLCJjaGFzZSIsImNoZWFwIiwiY2hlY2siLCJjaGVlayIsImNoZWVzZSIsImNoZWYiLCJjaGVtaWNhbCIsImNoZXN0IiwiY2hpY2tlbiIsImNoaWVmIiwiY2hpbGQiLCJjaGlsZGhvb2QiLCJDaGluZXNlIiwiY2hpcCIsImNob2NvbGF0ZSIsImNob2ljZSIsImNob2xlc3Rlcm9sIiwiY2hvb3NlIiwiQ2hyaXN0aWFuIiwiQ2hyaXN0bWFzIiwiY2h1cmNoIiwiY2lnYXJldHRlIiwiY2lyY2xlIiwiY2lyY3Vtc3RhbmNlIiwiY2l0ZSIsImNpdGl6ZW4iLCJjaXR5IiwiY2l2aWwiLCJjaXZpbGlhbiIsImNsYWltIiwiY2xhc3MiLCJjbGFzc2ljIiwiY2xhc3Nyb29tIiwiY2xlYW4iLCJjbGVhciIsImNsZWFybHkiLCJjbGllbnQiLCJjbGltYXRlIiwiY2xpbWIiLCJjbGluaWMiLCJjbGluaWNhbCIsImNsb2NrIiwiY2xvc2UiLCJjbG9zZWx5IiwiY2xvc2VyIiwiY2xvdGhlcyIsImNsb3RoaW5nIiwiY2xvdWQiLCJjbHViIiwiY2x1ZSIsImNsdXN0ZXIiLCJjb2FjaCIsImNvYWwiLCJjb2FsaXRpb24iLCJjb2FzdCIsImNvYXQiLCJjb2RlIiwiY29mZmVlIiwiY29nbml0aXZlIiwiY29sZCIsImNvbGxhcHNlIiwiY29sbGVhZ3VlIiwiY29sbGVjdCIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aXZlIiwiY29sbGVnZSIsImNvbG9uaWFsIiwiY29sb3IiLCJjb2x1bW4iLCJjb21iaW5hdGlvbiIsImNvbWJpbmUiLCJjb21lIiwiY29tZWR5IiwiY29tZm9ydCIsImNvbWZvcnRhYmxlIiwiY29tbWFuZCIsImNvbW1hbmRlciIsImNvbW1lbnQiLCJjb21tZXJjaWFsIiwiY29tbWlzc2lvbiIsImNvbW1pdCIsImNvbW1pdG1lbnQiLCJjb21taXR0ZWUiLCJjb21tb24iLCJjb21tdW5pY2F0ZSIsImNvbW11bmljYXRpb24iLCJjb21tdW5pdHkiLCJjb21wYW55IiwiY29tcGFyZSIsImNvbXBhcmlzb24iLCJjb21wZXRlIiwiY29tcGV0aXRpb24iLCJjb21wZXRpdGl2ZSIsImNvbXBldGl0b3IiLCJjb21wbGFpbiIsImNvbXBsYWludCIsImNvbXBsZXRlIiwiY29tcGxldGVseSIsImNvbXBsZXgiLCJjb21wbGljYXRlZCIsImNvbXBvbmVudCIsImNvbXBvc2UiLCJjb21wb3NpdGlvbiIsImNvbXByZWhlbnNpdmUiLCJjb21wdXRlciIsImNvbmNlbnRyYXRlIiwiY29uY2VudHJhdGlvbiIsImNvbmNlcHQiLCJjb25jZXJuIiwiY29uY2VybmVkIiwiY29uY2VydCIsImNvbmNsdWRlIiwiY29uY2x1c2lvbiIsImNvbmNyZXRlIiwiY29uZGl0aW9uIiwiY29uZHVjdCIsImNvbmZlcmVuY2UiLCJjb25maWRlbmNlIiwiY29uZmlkZW50IiwiY29uZmlybSIsImNvbmZsaWN0IiwiY29uZnJvbnQiLCJjb25mdXNpb24iLCJDb25ncmVzcyIsImNvbmdyZXNzaW9uYWwiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsImNvbnNjaW91c25lc3MiLCJjb25zZW5zdXMiLCJjb25zZXF1ZW5jZSIsImNvbnNlcnZhdGl2ZSIsImNvbnNpZGVyIiwiY29uc2lkZXJhYmxlIiwiY29uc2lkZXJhdGlvbiIsImNvbnNpc3QiLCJjb25zaXN0ZW50IiwiY29uc3RhbnQiLCJjb25zdGFudGx5IiwiY29uc3RpdHV0ZSIsImNvbnN0aXR1dGlvbmFsIiwiY29uc3RydWN0IiwiY29uc3RydWN0aW9uIiwiY29uc3VsdGFudCIsImNvbnN1bWUiLCJjb25zdW1lciIsImNvbnN1bXB0aW9uIiwiY29udGFjdCIsImNvbnRhaW4iLCJjb250YWluZXIiLCJjb250ZW1wb3JhcnkiLCJjb250ZW50IiwiY29udGVzdCIsImNvbnRleHQiLCJjb250aW51ZSIsImNvbnRpbnVlZCIsImNvbnRyYWN0IiwiY29udHJhc3QiLCJjb250cmlidXRlIiwiY29udHJpYnV0aW9uIiwiY29udHJvbCIsImNvbnRyb3ZlcnNpYWwiLCJjb250cm92ZXJzeSIsImNvbnZlbnRpb24iLCJjb252ZW50aW9uYWwiLCJjb252ZXJzYXRpb24iLCJjb252ZXJ0IiwiY29udmljdGlvbiIsImNvbnZpbmNlIiwiY29vayIsImNvb2tpZSIsImNvb2tpbmciLCJjb29sIiwiY29vcGVyYXRpb24iLCJjb3AiLCJjb3BlIiwiY29weSIsImNvcmUiLCJjb3JuIiwiY29ybmVyIiwiY29ycG9yYXRlIiwiY29ycG9yYXRpb24iLCJjb3JyZWN0IiwiY29ycmVzcG9uZGVudCIsImNvc3QiLCJjb3R0b24iLCJjb3VjaCIsImNvdWxkIiwiY291bmNpbCIsImNvdW5zZWxvciIsImNvdW50IiwiY291bnRlciIsImNvdW50cnkiLCJjb3VudHkiLCJjb3VwbGUiLCJjb3VyYWdlIiwiY291cnNlIiwiY291cnQiLCJjb3VzaW4iLCJjb3ZlciIsImNvdmVyYWdlIiwiY293IiwiY3JhY2siLCJjcmFmdCIsImNyYXNoIiwiY3JhenkiLCJjcmVhbSIsImNyZWF0ZSIsImNyZWF0aW9uIiwiY3JlYXRpdmUiLCJjcmVhdHVyZSIsImNyZWRpdCIsImNyZXciLCJjcmltZSIsImNyaW1pbmFsIiwiY3Jpc2lzIiwiY3JpdGVyaWEiLCJjcml0aWMiLCJjcml0aWNhbCIsImNyaXRpY2lzbSIsImNyaXRpY2l6ZSIsImNyb3AiLCJjcm9zcyIsImNyb3dkIiwiY3J1Y2lhbCIsImNyeSIsImN1bHR1cmFsIiwiY3VsdHVyZSIsImN1cCIsImN1cmlvdXMiLCJjdXJyZW50IiwiY3VycmVudGx5IiwiY3VycmljdWx1bSIsImN1c3RvbSIsImN1c3RvbWVyIiwiY3V0IiwiY3ljbGUiLCJkYWQiLCJkYWlseSIsImRhbWFnZSIsImRhbmNlIiwiZGFuZ2VyIiwiZGFuZ2Vyb3VzIiwiZGFyZSIsImRhcmsiLCJkYXJrbmVzcyIsImRhdGEiLCJkYXRlIiwiZGF1Z2h0ZXIiLCJkYXkiLCJkZWFkIiwiZGVhbCIsImRlYWxlciIsImRlYXIiLCJkZWF0aCIsImRlYmF0ZSIsImRlYnQiLCJkZWNhZGUiLCJkZWNpZGUiLCJkZWNpc2lvbiIsImRlY2siLCJkZWNsYXJlIiwiZGVjbGluZSIsImRlY3JlYXNlIiwiZGVlcCIsImRlZXBseSIsImRlZXIiLCJkZWZlYXQiLCJkZWZlbmQiLCJkZWZlbmRhbnQiLCJkZWZlbnNlIiwiZGVmZW5zaXZlIiwiZGVmaWNpdCIsImRlZmluZSIsImRlZmluaXRlbHkiLCJkZWZpbml0aW9uIiwiZGVncmVlIiwiZGVsYXkiLCJkZWxpdmVyIiwiZGVsaXZlcnkiLCJkZW1hbmQiLCJkZW1vY3JhY3kiLCJEZW1vY3JhdCIsImRlbW9jcmF0aWMiLCJkZW1vbnN0cmF0ZSIsImRlbW9uc3RyYXRpb24iLCJkZW55IiwiZGVwYXJ0bWVudCIsImRlcGVuZCIsImRlcGVuZGVudCIsImRlcGVuZGluZyIsImRlcGljdCIsImRlcHJlc3Npb24iLCJkZXB0aCIsImRlcHV0eSIsImRlcml2ZSIsImRlc2NyaWJlIiwiZGVzY3JpcHRpb24iLCJkZXNlcnQiLCJkZXNlcnZlIiwiZGVzaWduIiwiZGVzaWduZXIiLCJkZXNpcmUiLCJkZXNrIiwiZGVzcGVyYXRlIiwiZGVzcGl0ZSIsImRlc3Ryb3kiLCJkZXN0cnVjdGlvbiIsImRldGFpbCIsImRldGFpbGVkIiwiZGV0ZWN0IiwiZGV0ZXJtaW5lIiwiZGV2ZWxvcCIsImRldmVsb3BpbmciLCJkZXZlbG9wbWVudCIsImRldmljZSIsImRldm90ZSIsImRpYWxvZ3VlIiwiZGllIiwiZGlldCIsImRpZmZlciIsImRpZmZlcmVuY2UiLCJkaWZmZXJlbnQiLCJkaWZmZXJlbnRseSIsImRpZmZpY3VsdCIsImRpZmZpY3VsdHkiLCJkaWciLCJkaWdpdGFsIiwiZGltZW5zaW9uIiwiZGluaW5nIiwiZGlubmVyIiwiZGlyZWN0IiwiZGlyZWN0aW9uIiwiZGlyZWN0bHkiLCJkaXJlY3RvciIsImRpcnQiLCJkaXJ0eSIsImRpc2FiaWxpdHkiLCJkaXNhZ3JlZSIsImRpc2FwcGVhciIsImRpc2FzdGVyIiwiZGlzY2lwbGluZSIsImRpc2NvdXJzZSIsImRpc2NvdmVyIiwiZGlzY292ZXJ5IiwiZGlzY3JpbWluYXRpb24iLCJkaXNjdXNzIiwiZGlzY3Vzc2lvbiIsImRpc2Vhc2UiLCJkaXNoIiwiZGlzbWlzcyIsImRpc29yZGVyIiwiZGlzcGxheSIsImRpc3B1dGUiLCJkaXN0YW5jZSIsImRpc3RhbnQiLCJkaXN0aW5jdCIsImRpc3RpbmN0aW9uIiwiZGlzdGluZ3Vpc2giLCJkaXN0cmlidXRlIiwiZGlzdHJpYnV0aW9uIiwiZGlzdHJpY3QiLCJkaXZlcnNlIiwiZGl2ZXJzaXR5IiwiZGl2aWRlIiwiZGl2aXNpb24iLCJkaXZvcmNlIiwiRE5BIiwiZG8iLCJkb2N0b3IiLCJkb2N1bWVudCIsImRvZyIsImRvbWVzdGljIiwiZG9taW5hbnQiLCJkb21pbmF0ZSIsImRvb3IiLCJkb3VibGUiLCJkb3VidCIsImRvd24iLCJkb3dudG93biIsImRvemVuIiwiZHJhZnQiLCJkcmFnIiwiZHJhbWEiLCJkcmFtYXRpYyIsImRyYW1hdGljYWxseSIsImRyYXciLCJkcmF3aW5nIiwiZHJlYW0iLCJkcmVzcyIsImRyaW5rIiwiZHJpdmUiLCJkcml2ZXIiLCJkcm9wIiwiZHJ1ZyIsImRyeSIsImR1ZSIsImR1cmluZyIsImR1c3QiLCJkdXR5IiwiZWFjaCIsImVhZ2VyIiwiZWFyIiwiZWFybHkiLCJlYXJuIiwiZWFybmluZ3MiLCJlYXJ0aCIsImVhc2UiLCJlYXNpbHkiLCJlYXN0IiwiZWFzdGVybiIsImVhc3kiLCJlYXQiLCJlY29ub21pYyIsImVjb25vbWljcyIsImVjb25vbWlzdCIsImVjb25vbXkiLCJlZGdlIiwiZWRpdGlvbiIsImVkaXRvciIsImVkdWNhdGUiLCJlZHVjYXRpb24iLCJlZHVjYXRpb25hbCIsImVkdWNhdG9yIiwiZWZmZWN0IiwiZWZmZWN0aXZlIiwiZWZmZWN0aXZlbHkiLCJlZmZpY2llbmN5IiwiZWZmaWNpZW50IiwiZWZmb3J0IiwiZWdnIiwiZWlnaHQiLCJlaXRoZXIiLCJlbGRlcmx5IiwiZWxlY3QiLCJlbGVjdGlvbiIsImVsZWN0cmljIiwiZWxlY3RyaWNpdHkiLCJlbGVjdHJvbmljIiwiZWxlbWVudCIsImVsZW1lbnRhcnkiLCJlbGltaW5hdGUiLCJlbGl0ZSIsImVsc2UiLCJlbHNld2hlcmUiLCJlbWJyYWNlIiwiZW1lcmdlIiwiZW1lcmdlbmN5IiwiZW1pc3Npb24iLCJlbW90aW9uIiwiZW1vdGlvbmFsIiwiZW1waGFzaXMiLCJlbXBoYXNpemUiLCJlbXBsb3kiLCJlbXBsb3llZSIsImVtcGxveWVyIiwiZW1wbG95bWVudCIsImVtcHR5IiwiZW5hYmxlIiwiZW5jb3VudGVyIiwiZW5jb3VyYWdlIiwiZW5kIiwiZW5lbXkiLCJlbmVyZ3kiLCJlbmZvcmNlbWVudCIsImVuZ2FnZSIsImVuZ2luZSIsImVuZ2luZWVyIiwiZW5naW5lZXJpbmciLCJFbmdsaXNoIiwiZW5oYW5jZSIsImVuam95IiwiZW5vcm1vdXMiLCJlbm91Z2giLCJlbnN1cmUiLCJlbnRlciIsImVudGVycHJpc2UiLCJlbnRlcnRhaW5tZW50IiwiZW50aXJlIiwiZW50aXJlbHkiLCJlbnRyYW5jZSIsImVudHJ5IiwiZW52aXJvbm1lbnQiLCJlbnZpcm9ubWVudGFsIiwiZXBpc29kZSIsImVxdWFsIiwiZXF1YWxseSIsImVxdWlwbWVudCIsImVyYSIsImVycm9yIiwiZXNjYXBlIiwiZXNwZWNpYWxseSIsImVzc2F5IiwiZXNzZW50aWFsIiwiZXNzZW50aWFsbHkiLCJlc3RhYmxpc2giLCJlc3RhYmxpc2htZW50IiwiZXN0YXRlIiwiZXN0aW1hdGUiLCJldGMiLCJldGhpY3MiLCJldGhuaWMiLCJFdXJvcGVhbiIsImV2YWx1YXRlIiwiZXZhbHVhdGlvbiIsImV2ZW4iLCJldmVuaW5nIiwiZXZlbnQiLCJldmVudHVhbGx5IiwiZXZlciIsImV2ZXJ5IiwiZXZlcnlib2R5IiwiZXZlcnlkYXkiLCJldmVyeW9uZSIsImV2ZXJ5dGhpbmciLCJldmVyeXdoZXJlIiwiZXZpZGVuY2UiLCJldm9sdXRpb24iLCJldm9sdmUiLCJleGFjdCIsImV4YWN0bHkiLCJleGFtaW5hdGlvbiIsImV4YW1pbmUiLCJleGFtcGxlIiwiZXhjZWVkIiwiZXhjZWxsZW50IiwiZXhjZXB0IiwiZXhjZXB0aW9uIiwiZXhjaGFuZ2UiLCJleGNpdGluZyIsImV4ZWN1dGl2ZSIsImV4ZXJjaXNlIiwiZXhoaWJpdCIsImV4aGliaXRpb24iLCJleGlzdCIsImV4aXN0ZW5jZSIsImV4aXN0aW5nIiwiZXhwYW5kIiwiZXhwYW5zaW9uIiwiZXhwZWN0IiwiZXhwZWN0YXRpb24iLCJleHBlbnNlIiwiZXhwZW5zaXZlIiwiZXhwZXJpZW5jZSIsImV4cGVyaW1lbnQiLCJleHBlcnQiLCJleHBsYWluIiwiZXhwbGFuYXRpb24iLCJleHBsb2RlIiwiZXhwbG9yZSIsImV4cGxvc2lvbiIsImV4cG9zZSIsImV4cG9zdXJlIiwiZXhwcmVzcyIsImV4cHJlc3Npb24iLCJleHRlbmQiLCJleHRlbnNpb24iLCJleHRlbnNpdmUiLCJleHRlbnQiLCJleHRlcm5hbCIsImV4dHJhIiwiZXh0cmFvcmRpbmFyeSIsImV4dHJlbWUiLCJleHRyZW1lbHkiLCJleWUiLCJmYWJyaWMiLCJmYWNlIiwiZmFjaWxpdHkiLCJmYWN0IiwiZmFjdG9yIiwiZmFjdG9yeSIsImZhY3VsdHkiLCJmYWRlIiwiZmFpbCIsImZhaWx1cmUiLCJmYWlyIiwiZmFpcmx5IiwiZmFpdGgiLCJmYWxsIiwiZmFsc2UiLCJmYW1pbGlhciIsImZhbWlseSIsImZhbW91cyIsImZhbiIsImZhbnRhc3kiLCJmYXIiLCJmYXJtIiwiZmFybWVyIiwiZmFzaGlvbiIsImZhc3QiLCJmYXQiLCJmYXRlIiwiZmF0aGVyIiwiZmF1bHQiLCJmYXZvciIsImZhdm9yaXRlIiwiZmVhciIsImZlYXR1cmUiLCJmZWRlcmFsIiwiZmVlIiwiZmVlZCIsImZlZWwiLCJmZWVsaW5nIiwiZmVsbG93IiwiZmVtYWxlIiwiZmVuY2UiLCJmZXciLCJmZXdlciIsImZpYmVyIiwiZmljdGlvbiIsImZpZWxkIiwiZmlmdGVlbiIsImZpZnRoIiwiZmlmdHkiLCJmaWdodCIsImZpZ2h0ZXIiLCJmaWdodGluZyIsImZpZ3VyZSIsImZpbGUiLCJmaWxsIiwiZmlsbSIsImZpbmFsIiwiZmluYWxseSIsImZpbmFuY2UiLCJmaW5hbmNpYWwiLCJmaW5kIiwiZmluZGluZyIsImZpbmUiLCJmaW5nZXIiLCJmaW5pc2giLCJmaXJlIiwiZmlybSIsImZpcnN0IiwiZmlzaCIsImZpc2hpbmciLCJmaXQiLCJmaXRuZXNzIiwiZml2ZSIsImZpeCIsImZsYWciLCJmbGFtZSIsImZsYXQiLCJmbGF2b3IiLCJmbGVlIiwiZmxlc2giLCJmbGlnaHQiLCJmbG9hdCIsImZsb29yIiwiZmxvdyIsImZsb3dlciIsImZseSIsImZvY3VzIiwiZm9sayIsImZvbGxvdyIsImZvbGxvd2luZyIsImZvb2QiLCJmb290IiwiZm9vdGJhbGwiLCJmb3IiLCJmb3JjZSIsImZvcmVpZ24iLCJmb3Jlc3QiLCJmb3JldmVyIiwiZm9yZ2V0IiwiZm9ybSIsImZvcm1hbCIsImZvcm1hdGlvbiIsImZvcm1lciIsImZvcm11bGEiLCJmb3J0aCIsImZvcnR1bmUiLCJmb3J3YXJkIiwiZm91bmQiLCJmb3VuZGF0aW9uIiwiZm91bmRlciIsImZvdXIiLCJmb3VydGgiLCJmcmFtZSIsImZyYW1ld29yayIsImZyZWUiLCJmcmVlZG9tIiwiZnJlZXplIiwiRnJlbmNoIiwiZnJlcXVlbmN5IiwiZnJlcXVlbnQiLCJmcmVxdWVudGx5IiwiZnJlc2giLCJmcmllbmQiLCJmcmllbmRseSIsImZyaWVuZHNoaXAiLCJmcm9tIiwiZnJvbnQiLCJmcnVpdCIsImZydXN0cmF0aW9uIiwiZnVlbCIsImZ1bGwiLCJmdWxseSIsImZ1biIsImZ1bmN0aW9uIiwiZnVuZCIsImZ1bmRhbWVudGFsIiwiZnVuZGluZyIsImZ1bmVyYWwiLCJmdW5ueSIsImZ1cm5pdHVyZSIsImZ1cnRoZXJtb3JlIiwiZnV0dXJlIiwiZ2FpbiIsImdhbGF4eSIsImdhbGxlcnkiLCJnYW1lIiwiZ2FuZyIsImdhcCIsImdhcmFnZSIsImdhcmRlbiIsImdhcmxpYyIsImdhcyIsImdhdGUiLCJnYXRoZXIiLCJnYXkiLCJnYXplIiwiZ2VhciIsImdlbmRlciIsImdlbmUiLCJnZW5lcmFsIiwiZ2VuZXJhbGx5IiwiZ2VuZXJhdGUiLCJnZW5lcmF0aW9uIiwiZ2VuZXRpYyIsImdlbnRsZW1hbiIsImdlbnRseSIsIkdlcm1hbiIsImdlc3R1cmUiLCJnZXQiLCJnaG9zdCIsImdpYW50IiwiZ2lmdCIsImdpZnRlZCIsImdpcmwiLCJnaXJsZnJpZW5kIiwiZ2l2ZSIsImdpdmVuIiwiZ2xhZCIsImdsYW5jZSIsImdsYXNzIiwiZ2xvYmFsIiwiZ2xvdmUiLCJnbyIsImdvYWwiLCJHb2QiLCJnb2xkIiwiZ29sZGVuIiwiZ29sZiIsImdvb2QiLCJnb3Zlcm5tZW50IiwiZ292ZXJub3IiLCJncmFiIiwiZ3JhZGUiLCJncmFkdWFsbHkiLCJncmFkdWF0ZSIsImdyYWluIiwiZ3JhbmQiLCJncmFuZGZhdGhlciIsImdyYW5kbW90aGVyIiwiZ3JhbnQiLCJncmFzcyIsImdyYXZlIiwiZ3JheSIsImdyZWF0IiwiZ3JlYXRlc3QiLCJncmVlbiIsImdyb2NlcnkiLCJncm91bmQiLCJncm91cCIsImdyb3ciLCJncm93aW5nIiwiZ3Jvd3RoIiwiZ3VhcmFudGVlIiwiZ3VhcmQiLCJndWVzcyIsImd1ZXN0IiwiZ3VpZGUiLCJndWlkZWxpbmUiLCJndWlsdHkiLCJndW4iLCJndXkiLCJoYWJpdCIsImhhYml0YXQiLCJoYWlyIiwiaGFsZiIsImhhbGwiLCJoYW5kIiwiaGFuZGZ1bCIsImhhbmRsZSIsImhhbmciLCJoYXBwZW4iLCJoYXBweSIsImhhcmQiLCJoYXJkbHkiLCJoYXQiLCJoYXRlIiwiaGF2ZSIsImhlIiwiaGVhZCIsImhlYWRsaW5lIiwiaGVhZHF1YXJ0ZXJzIiwiaGVhbHRoIiwiaGVhbHRoeSIsImhlYXIiLCJoZWFyaW5nIiwiaGVhcnQiLCJoZWF0IiwiaGVhdmVuIiwiaGVhdmlseSIsImhlYXZ5IiwiaGVlbCIsImhlaWdodCIsImhlbGljb3B0ZXIiLCJoZWxsIiwiaGVsbG8iLCJoZWxwIiwiaGVscGZ1bCIsImhlciIsImhlcmUiLCJoZXJpdGFnZSIsImhlcm8iLCJoZXJzZWxmIiwiaGV5IiwiaGkiLCJoaWRlIiwiaGlnaCIsImhpZ2hsaWdodCIsImhpZ2hseSIsImhpZ2h3YXkiLCJoaWxsIiwiaGltIiwiaGltc2VsZiIsImhpcCIsImhpcmUiLCJoaXMiLCJoaXN0b3JpYW4iLCJoaXN0b3JpYyIsImhpc3RvcmljYWwiLCJoaXN0b3J5IiwiaGl0IiwiaG9sZCIsImhvbGUiLCJob2xpZGF5IiwiaG9seSIsImhvbWUiLCJob21lbGVzcyIsImhvbmVzdCIsImhvbmV5IiwiaG9ub3IiLCJob3BlIiwiaG9yaXpvbiIsImhvcnJvciIsImhvcnNlIiwiaG9zcGl0YWwiLCJob3N0IiwiaG90IiwiaG90ZWwiLCJob3VyIiwiaG91c2UiLCJob3VzZWhvbGQiLCJob3VzaW5nIiwiaG93IiwiaG93ZXZlciIsImh1Z2UiLCJodW1hbiIsImh1bW9yIiwiaHVuZHJlZCIsImh1bmdyeSIsImh1bnRlciIsImh1bnRpbmciLCJodXJ0IiwiaHVzYmFuZCIsImh5cG90aGVzaXMiLCJJIiwiaWNlIiwiaWRlYSIsImlkZWFsIiwiaWRlbnRpZmljYXRpb24iLCJpZGVudGlmeSIsImlkZW50aXR5IiwiaWUiLCJpZiIsImlnbm9yZSIsImlsbCIsImlsbGVnYWwiLCJpbGxuZXNzIiwiaWxsdXN0cmF0ZSIsImltYWdlIiwiaW1hZ2luYXRpb24iLCJpbWFnaW5lIiwiaW1tZWRpYXRlIiwiaW1tZWRpYXRlbHkiLCJpbW1pZ3JhbnQiLCJpbW1pZ3JhdGlvbiIsImltcGFjdCIsImltcGxlbWVudCIsImltcGxpY2F0aW9uIiwiaW1wbHkiLCJpbXBvcnRhbmNlIiwiaW1wb3J0YW50IiwiaW1wb3NlIiwiaW1wb3NzaWJsZSIsImltcHJlc3MiLCJpbXByZXNzaW9uIiwiaW1wcmVzc2l2ZSIsImltcHJvdmUiLCJpbXByb3ZlbWVudCIsImluIiwiaW5jZW50aXZlIiwiaW5jaWRlbnQiLCJpbmNsdWRlIiwiaW5jbHVkaW5nIiwiaW5jb21lIiwiaW5jb3Jwb3JhdGUiLCJpbmNyZWFzZSIsImluY3JlYXNlZCIsImluY3JlYXNpbmciLCJpbmNyZWFzaW5nbHkiLCJpbmNyZWRpYmxlIiwiaW5kZWVkIiwiaW5kZXBlbmRlbmNlIiwiaW5kZXBlbmRlbnQiLCJpbmRleCIsIkluZGlhbiIsImluZGljYXRlIiwiaW5kaWNhdGlvbiIsImluZGl2aWR1YWwiLCJpbmR1c3RyaWFsIiwiaW5kdXN0cnkiLCJpbmZhbnQiLCJpbmZlY3Rpb24iLCJpbmZsYXRpb24iLCJpbmZsdWVuY2UiLCJpbmZvcm0iLCJpbmZvcm1hdGlvbiIsImluZ3JlZGllbnQiLCJpbml0aWFsIiwiaW5pdGlhbGx5IiwiaW5pdGlhdGl2ZSIsImluanVyeSIsImlubmVyIiwiaW5ub2NlbnQiLCJpbnF1aXJ5IiwiaW5zaWRlIiwiaW5zaWdodCIsImluc2lzdCIsImluc3BpcmUiLCJpbnN0YWxsIiwiaW5zdGFuY2UiLCJpbnN0ZWFkIiwiaW5zdGl0dXRpb24iLCJpbnN0aXR1dGlvbmFsIiwiaW5zdHJ1Y3Rpb24iLCJpbnN0cnVjdG9yIiwiaW5zdHJ1bWVudCIsImluc3VyYW5jZSIsImludGVsbGVjdHVhbCIsImludGVsbGlnZW5jZSIsImludGVuZCIsImludGVuc2UiLCJpbnRlbnNpdHkiLCJpbnRlbnRpb24iLCJpbnRlcmFjdGlvbiIsImludGVyZXN0IiwiaW50ZXJlc3RlZCIsImludGVyZXN0aW5nIiwiaW50ZXJuYWwiLCJpbnRlcm5hdGlvbmFsIiwiSW50ZXJuZXQiLCJpbnRlcnByZXQiLCJpbnRlcnByZXRhdGlvbiIsImludGVydmVudGlvbiIsImludGVydmlldyIsImludG8iLCJpbnRyb2R1Y2UiLCJpbnRyb2R1Y3Rpb24iLCJpbnZhc2lvbiIsImludmVzdCIsImludmVzdGlnYXRlIiwiaW52ZXN0aWdhdGlvbiIsImludmVzdGlnYXRvciIsImludmVzdG1lbnQiLCJpbnZlc3RvciIsImludml0ZSIsImludm9sdmUiLCJpbnZvbHZlZCIsImludm9sdmVtZW50IiwiSXJhcWkiLCJJcmlzaCIsImlyb24iLCJJc2xhbWljIiwiaXNsYW5kIiwiSXNyYWVsaSIsImlzc3VlIiwiaXQiLCJJdGFsaWFuIiwiaXRlbSIsIml0cyIsIml0c2VsZiIsImphY2tldCIsImphaWwiLCJKYXBhbmVzZSIsImpldCIsIkpldyIsIkpld2lzaCIsImpvYiIsImpvaW4iLCJqb2ludCIsImpva2UiLCJqb3VybmFsIiwiam91cm5hbGlzdCIsImpvdXJuZXkiLCJqb3kiLCJqdWRnZSIsImp1ZGdtZW50IiwianVpY2UiLCJqdW1wIiwianVuaW9yIiwianVyeSIsImp1c3QiLCJqdXN0aWNlIiwianVzdGlmeSIsImtlZXAiLCJrZXkiLCJraWNrIiwia2lkIiwia2lsbCIsImtpbGxlciIsImtpbGxpbmciLCJraW5kIiwia2luZyIsImtpc3MiLCJraXRjaGVuIiwia25lZSIsImtuaWZlIiwia25vY2siLCJrbm93Iiwia25vd2xlZGdlIiwibGFiIiwibGFiZWwiLCJsYWJvciIsImxhYm9yYXRvcnkiLCJsYWNrIiwibGFkeSIsImxha2UiLCJsYW5kIiwibGFuZHNjYXBlIiwibGFuZ3VhZ2UiLCJsYXAiLCJsYXJnZSIsImxhcmdlbHkiLCJsYXN0IiwibGF0ZSIsImxhdGVyIiwiTGF0aW4iLCJsYXR0ZXIiLCJsYXVnaCIsImxhdW5jaCIsImxhdyIsImxhd24iLCJsYXdzdWl0IiwibGF3eWVyIiwibGF5IiwibGF5ZXIiLCJsZWFkIiwibGVhZGVyIiwibGVhZGVyc2hpcCIsImxlYWRpbmciLCJsZWFmIiwibGVhZ3VlIiwibGVhbiIsImxlYXJuIiwibGVhcm5pbmciLCJsZWFzdCIsImxlYXRoZXIiLCJsZWF2ZSIsImxlZnQiLCJsZWciLCJsZWdhY3kiLCJsZWdhbCIsImxlZ2VuZCIsImxlZ2lzbGF0aW9uIiwibGVnaXRpbWF0ZSIsImxlbW9uIiwibGVuZ3RoIiwibGVzcyIsImxlc3NvbiIsImxldCIsImxldHRlciIsImxldmVsIiwibGliZXJhbCIsImxpYnJhcnkiLCJsaWNlbnNlIiwibGllIiwibGlmZSIsImxpZmVzdHlsZSIsImxpZmV0aW1lIiwibGlmdCIsImxpZ2h0IiwibGlrZSIsImxpa2VseSIsImxpbWl0IiwibGltaXRhdGlvbiIsImxpbWl0ZWQiLCJsaW5lIiwibGluayIsImxpcCIsImxpc3QiLCJsaXN0ZW4iLCJsaXRlcmFsbHkiLCJsaXRlcmFyeSIsImxpdGVyYXR1cmUiLCJsaXR0bGUiLCJsaXZlIiwibGl2aW5nIiwibG9hZCIsImxvYW4iLCJsb2NhbCIsImxvY2F0ZSIsImxvY2F0aW9uIiwibG9jayIsImxvbmciLCJsb29rIiwibG9vc2UiLCJsb3NlIiwibG9zcyIsImxvc3QiLCJsb3QiLCJsb3RzIiwibG91ZCIsImxvdmUiLCJsb3ZlbHkiLCJsb3ZlciIsImxvdyIsImxvd2VyIiwibHVjayIsImx1Y2t5IiwibHVuY2giLCJsdW5nIiwibWFjaGluZSIsIm1hZCIsIm1hZ2F6aW5lIiwibWFpbCIsIm1haW4iLCJtYWlubHkiLCJtYWludGFpbiIsIm1haW50ZW5hbmNlIiwibWFqb3IiLCJtYWpvcml0eSIsIm1ha2UiLCJtYWtlciIsIm1ha2V1cCIsIm1hbGUiLCJtYWxsIiwibWFuIiwibWFuYWdlIiwibWFuYWdlbWVudCIsIm1hbmFnZXIiLCJtYW5uZXIiLCJtYW51ZmFjdHVyZXIiLCJtYW51ZmFjdHVyaW5nIiwibWFueSIsIm1hcCIsIm1hcmdpbiIsIm1hcmsiLCJtYXJrZXQiLCJtYXJrZXRpbmciLCJtYXJyaWFnZSIsIm1hcnJpZWQiLCJtYXJyeSIsIm1hc2siLCJtYXNzIiwibWFzc2l2ZSIsIm1hc3RlciIsIm1hdGNoIiwibWF0ZXJpYWwiLCJtYXRoIiwibWF0dGVyIiwibWF5IiwibWF5YmUiLCJtYXlvciIsIm1lIiwibWVhbCIsIm1lYW4iLCJtZWFuaW5nIiwibWVhbndoaWxlIiwibWVhc3VyZSIsIm1lYXN1cmVtZW50IiwibWVhdCIsIm1lY2hhbmlzbSIsIm1lZGlhIiwibWVkaWNhbCIsIm1lZGljYXRpb24iLCJtZWRpY2luZSIsIm1lZGl1bSIsIm1lZXQiLCJtZWV0aW5nIiwibWVtYmVyIiwibWVtYmVyc2hpcCIsIm1lbW9yeSIsIm1lbnRhbCIsIm1lbnRpb24iLCJtZW51IiwibWVyZSIsIm1lcmVseSIsIm1lc3MiLCJtZXNzYWdlIiwibWV0YWwiLCJtZXRlciIsIm1ldGhvZCIsIk1leGljYW4iLCJtaWRkbGUiLCJtaWdodCIsIm1pbGl0YXJ5IiwibWlsayIsIm1pbGxpb24iLCJtaW5kIiwibWluZSIsIm1pbmlzdGVyIiwibWlub3IiLCJtaW5vcml0eSIsIm1pbnV0ZSIsIm1pcmFjbGUiLCJtaXJyb3IiLCJtaXNzIiwibWlzc2lsZSIsIm1pc3Npb24iLCJtaXN0YWtlIiwibWl4IiwibWl4dHVyZSIsIm1vZGUiLCJtb2RlbCIsIm1vZGVyYXRlIiwibW9kZXJuIiwibW9kZXN0IiwibW9tIiwibW9tZW50IiwibW9uZXkiLCJtb25pdG9yIiwibW9udGgiLCJtb29kIiwibW9vbiIsIm1vcmFsIiwibW9yZSIsIm1vcmVvdmVyIiwibW9ybmluZyIsIm1vcnRnYWdlIiwibW9zdCIsIm1vc3RseSIsIm1vdGhlciIsIm1vdGlvbiIsIm1vdGl2YXRpb24iLCJtb3RvciIsIm1vdW50IiwibW91bnRhaW4iLCJtb3VzZSIsIm1vdXRoIiwibW92ZSIsIm1vdmVtZW50IiwibW92aWUiLCJNciIsIk1ycyIsIk1zIiwibXVjaCIsIm11bHRpcGxlIiwibXVyZGVyIiwibXVzY2xlIiwibXVzZXVtIiwibXVzaWMiLCJtdXNpY2FsIiwibXVzaWNpYW4iLCJNdXNsaW0iLCJtdXN0IiwibXV0dWFsIiwibXkiLCJteXNlbGYiLCJteXN0ZXJ5IiwibXl0aCIsIm5ha2VkIiwibmFtZSIsIm5hcnJhdGl2ZSIsIm5hcnJvdyIsIm5hdGlvbiIsIm5hdGlvbmFsIiwibmF0aXZlIiwibmF0dXJhbCIsIm5hdHVyYWxseSIsIm5hdHVyZSIsIm5lYXIiLCJuZWFyYnkiLCJuZWFybHkiLCJuZWNlc3NhcmlseSIsIm5lY2Vzc2FyeSIsIm5lY2siLCJuZWVkIiwibmVnYXRpdmUiLCJuZWdvdGlhdGUiLCJuZWdvdGlhdGlvbiIsIm5laWdoYm9yIiwibmVpZ2hib3Job29kIiwibmVpdGhlciIsIm5lcnZlIiwibmVydm91cyIsIm5ldCIsIm5ldHdvcmsiLCJuZXZlciIsIm5ldmVydGhlbGVzcyIsIm5ldyIsIm5ld2x5IiwibmV3cyIsIm5ld3NwYXBlciIsIm5leHQiLCJuaWNlIiwibmlnaHQiLCJuaW5lIiwibm8iLCJub2JvZHkiLCJub2QiLCJub2lzZSIsIm5vbWluYXRpb24iLCJub25lIiwibm9uZXRoZWxlc3MiLCJub3IiLCJub3JtYWwiLCJub3JtYWxseSIsIm5vcnRoIiwibm9ydGhlcm4iLCJub3NlIiwibm90Iiwibm90ZSIsIm5vdGhpbmciLCJub3RpY2UiLCJub3Rpb24iLCJub3ZlbCIsIm5vdyIsIm5vd2hlcmUiLCJudWNsZWFyIiwibnVtYmVyIiwibnVtZXJvdXMiLCJudXJzZSIsIm51dCIsIm9iamVjdCIsIm9iamVjdGl2ZSIsIm9ibGlnYXRpb24iLCJvYnNlcnZhdGlvbiIsIm9ic2VydmUiLCJvYnNlcnZlciIsIm9idGFpbiIsIm9idmlvdXMiLCJvYnZpb3VzbHkiLCJvY2Nhc2lvbiIsIm9jY2FzaW9uYWxseSIsIm9jY3VwYXRpb24iLCJvY2N1cHkiLCJvY2N1ciIsIm9jZWFuIiwib2RkIiwib2RkcyIsIm9mIiwib2ZmIiwib2ZmZW5zZSIsIm9mZmVuc2l2ZSIsIm9mZmVyIiwib2ZmaWNlIiwib2ZmaWNlciIsIm9mZmljaWFsIiwib2Z0ZW4iLCJvaCIsIm9pbCIsIm9rIiwib2theSIsIm9sZCIsIk9seW1waWMiLCJvbiIsIm9uY2UiLCJvbmUiLCJvbmdvaW5nIiwib25pb24iLCJvbmxpbmUiLCJvbmx5Iiwib250byIsIm9wZW4iLCJvcGVuaW5nIiwib3BlcmF0ZSIsIm9wZXJhdGluZyIsIm9wZXJhdGlvbiIsIm9wZXJhdG9yIiwib3BpbmlvbiIsIm9wcG9uZW50Iiwib3Bwb3J0dW5pdHkiLCJvcHBvc2UiLCJvcHBvc2l0ZSIsIm9wcG9zaXRpb24iLCJvcHRpb24iLCJvciIsIm9yYW5nZSIsIm9yZGVyIiwib3JkaW5hcnkiLCJvcmdhbmljIiwib3JnYW5pemF0aW9uIiwib3JnYW5pemUiLCJvcmllbnRhdGlvbiIsIm9yaWdpbiIsIm9yaWdpbmFsIiwib3JpZ2luYWxseSIsIm90aGVyIiwib3RoZXJzIiwib3RoZXJ3aXNlIiwib3VnaHQiLCJvdXIiLCJvdXJzZWx2ZXMiLCJvdXQiLCJvdXRjb21lIiwib3V0c2lkZSIsIm92ZW4iLCJvdmVyIiwib3ZlcmFsbCIsIm92ZXJjb21lIiwib3Zlcmxvb2siLCJvd2UiLCJvd24iLCJvd25lciIsInBhY2UiLCJwYWNrIiwicGFja2FnZSIsInBhZ2UiLCJwYWluIiwicGFpbmZ1bCIsInBhaW50IiwicGFpbnRlciIsInBhaW50aW5nIiwicGFpciIsInBhbGUiLCJQYWxlc3RpbmlhbiIsInBhbG0iLCJwYW4iLCJwYW5lbCIsInBhbnQiLCJwYXBlciIsInBhcmVudCIsInBhcmsiLCJwYXJraW5nIiwicGFydCIsInBhcnRpY2lwYW50IiwicGFydGljaXBhdGUiLCJwYXJ0aWNpcGF0aW9uIiwicGFydGljdWxhciIsInBhcnRpY3VsYXJseSIsInBhcnRseSIsInBhcnRuZXIiLCJwYXJ0bmVyc2hpcCIsInBhcnR5IiwicGFzcyIsInBhc3NhZ2UiLCJwYXNzZW5nZXIiLCJwYXNzaW9uIiwicGFzdCIsInBhdGNoIiwicGF0aCIsInBhdGllbnQiLCJwYXR0ZXJuIiwicGF1c2UiLCJwYXkiLCJwYXltZW50IiwiUEMiLCJwZWFjZSIsInBlYWsiLCJwZWVyIiwicGVuYWx0eSIsInBlb3BsZSIsInBlcHBlciIsInBlciIsInBlcmNlaXZlIiwicGVyY2VudGFnZSIsInBlcmNlcHRpb24iLCJwZXJmZWN0IiwicGVyZmVjdGx5IiwicGVyZm9ybSIsInBlcmZvcm1hbmNlIiwicGVyaGFwcyIsInBlcmlvZCIsInBlcm1hbmVudCIsInBlcm1pc3Npb24iLCJwZXJtaXQiLCJwZXJzb24iLCJwZXJzb25hbCIsInBlcnNvbmFsaXR5IiwicGVyc29uYWxseSIsInBlcnNvbm5lbCIsInBlcnNwZWN0aXZlIiwicGVyc3VhZGUiLCJwZXQiLCJwaGFzZSIsInBoZW5vbWVub24iLCJwaGlsb3NvcGh5IiwicGhvbmUiLCJwaG90byIsInBob3RvZ3JhcGgiLCJwaG90b2dyYXBoZXIiLCJwaHJhc2UiLCJwaHlzaWNhbCIsInBoeXNpY2FsbHkiLCJwaHlzaWNpYW4iLCJwaWFubyIsInBpY2siLCJwaWN0dXJlIiwicGllIiwicGllY2UiLCJwaWxlIiwicGlsb3QiLCJwaW5lIiwicGluayIsInBpcGUiLCJwaXRjaCIsInBsYWNlIiwicGxhbiIsInBsYW5lIiwicGxhbmV0IiwicGxhbm5pbmciLCJwbGFudCIsInBsYXN0aWMiLCJwbGF0ZSIsInBsYXRmb3JtIiwicGxheSIsInBsYXllciIsInBsZWFzZSIsInBsZWFzdXJlIiwicGxlbnR5IiwicGxvdCIsInBsdXMiLCJQTSIsInBvY2tldCIsInBvZW0iLCJwb2V0IiwicG9ldHJ5IiwicG9pbnQiLCJwb2xlIiwicG9saWNlIiwicG9saWN5IiwicG9saXRpY2FsIiwicG9saXRpY2FsbHkiLCJwb2xpdGljaWFuIiwicG9saXRpY3MiLCJwb2xsIiwicG9sbHV0aW9uIiwicG9vbCIsInBvb3IiLCJwb3AiLCJwb3B1bGFyIiwicG9wdWxhdGlvbiIsInBvcmNoIiwicG9ydCIsInBvcnRpb24iLCJwb3J0cmFpdCIsInBvcnRyYXkiLCJwb3NlIiwicG9zaXRpb24iLCJwb3NpdGl2ZSIsInBvc3Nlc3MiLCJwb3NzaWJpbGl0eSIsInBvc3NpYmxlIiwicG9zc2libHkiLCJwb3N0IiwicG90IiwicG90YXRvIiwicG90ZW50aWFsIiwicG90ZW50aWFsbHkiLCJwb3VuZCIsInBvdXIiLCJwb3ZlcnR5IiwicG93ZGVyIiwicG93ZXIiLCJwb3dlcmZ1bCIsInByYWN0aWNhbCIsInByYWN0aWNlIiwicHJheSIsInByYXllciIsInByZWNpc2VseSIsInByZWRpY3QiLCJwcmVmZXIiLCJwcmVmZXJlbmNlIiwicHJlZ25hbmN5IiwicHJlZ25hbnQiLCJwcmVwYXJhdGlvbiIsInByZXBhcmUiLCJwcmVzY3JpcHRpb24iLCJwcmVzZW5jZSIsInByZXNlbnQiLCJwcmVzZW50YXRpb24iLCJwcmVzZXJ2ZSIsInByZXNpZGVudCIsInByZXNpZGVudGlhbCIsInByZXNzIiwicHJlc3N1cmUiLCJwcmV0ZW5kIiwicHJldHR5IiwicHJldmVudCIsInByZXZpb3VzIiwicHJldmlvdXNseSIsInByaWNlIiwicHJpZGUiLCJwcmllc3QiLCJwcmltYXJpbHkiLCJwcmltYXJ5IiwicHJpbWUiLCJwcmluY2lwYWwiLCJwcmluY2lwbGUiLCJwcmludCIsInByaW9yIiwicHJpb3JpdHkiLCJwcmlzb24iLCJwcmlzb25lciIsInByaXZhY3kiLCJwcml2YXRlIiwicHJvYmFibHkiLCJwcm9ibGVtIiwicHJvY2VkdXJlIiwicHJvY2VlZCIsInByb2Nlc3MiLCJwcm9kdWNlIiwicHJvZHVjZXIiLCJwcm9kdWN0IiwicHJvZHVjdGlvbiIsInByb2Zlc3Npb24iLCJwcm9mZXNzaW9uYWwiLCJwcm9mZXNzb3IiLCJwcm9maWxlIiwicHJvZml0IiwicHJvZ3JhbSIsInByb2dyZXNzIiwicHJvamVjdCIsInByb21pbmVudCIsInByb21pc2UiLCJwcm9tb3RlIiwicHJvbXB0IiwicHJvb2YiLCJwcm9wZXIiLCJwcm9wZXJseSIsInByb3BlcnR5IiwicHJvcG9ydGlvbiIsInByb3Bvc2FsIiwicHJvcG9zZSIsInByb3Bvc2VkIiwicHJvc2VjdXRvciIsInByb3NwZWN0IiwicHJvdGVjdCIsInByb3RlY3Rpb24iLCJwcm90ZWluIiwicHJvdGVzdCIsInByb3VkIiwicHJvdmUiLCJwcm92aWRlIiwicHJvdmlkZXIiLCJwcm92aW5jZSIsInByb3Zpc2lvbiIsInBzeWNob2xvZ2ljYWwiLCJwc3ljaG9sb2dpc3QiLCJwc3ljaG9sb2d5IiwicHVibGljIiwicHVibGljYXRpb24iLCJwdWJsaWNseSIsInB1Ymxpc2giLCJwdWJsaXNoZXIiLCJwdWxsIiwicHVuaXNobWVudCIsInB1cmNoYXNlIiwicHVyZSIsInB1cnBvc2UiLCJwdXJzdWUiLCJwdXNoIiwicHV0IiwicXVhbGlmeSIsInF1YWxpdHkiLCJxdWFydGVyIiwicXVhcnRlcmJhY2siLCJxdWVzdGlvbiIsInF1aWNrIiwicXVpY2tseSIsInF1aWV0IiwicXVpZXRseSIsInF1aXQiLCJxdWl0ZSIsInF1b3RlIiwicmFjZSIsInJhY2lhbCIsInJhZGljYWwiLCJyYWRpbyIsInJhaWwiLCJyYWluIiwicmFpc2UiLCJyYW5nZSIsInJhbmsiLCJyYXBpZCIsInJhcGlkbHkiLCJyYXJlIiwicmFyZWx5IiwicmF0ZSIsInJhdGhlciIsInJhdGluZyIsInJhdGlvIiwicmF3IiwicmVhY2giLCJyZWFjdCIsInJlYWN0aW9uIiwicmVhZCIsInJlYWRlciIsInJlYWRpbmciLCJyZWFkeSIsInJlYWwiLCJyZWFsaXR5IiwicmVhbGl6ZSIsInJlYWxseSIsInJlYXNvbiIsInJlYXNvbmFibGUiLCJyZWNhbGwiLCJyZWNlaXZlIiwicmVjZW50IiwicmVjZW50bHkiLCJyZWNpcGUiLCJyZWNvZ25pdGlvbiIsInJlY29nbml6ZSIsInJlY29tbWVuZCIsInJlY29tbWVuZGF0aW9uIiwicmVjb3JkIiwicmVjb3JkaW5nIiwicmVjb3ZlciIsInJlY292ZXJ5IiwicmVjcnVpdCIsInJlZCIsInJlZHVjZSIsInJlZHVjdGlvbiIsInJlZmVyIiwicmVmZXJlbmNlIiwicmVmbGVjdCIsInJlZmxlY3Rpb24iLCJyZWZvcm0iLCJyZWZ1Z2VlIiwicmVmdXNlIiwicmVnYXJkIiwicmVnYXJkaW5nIiwicmVnYXJkbGVzcyIsInJlZ2ltZSIsInJlZ2lvbiIsInJlZ2lvbmFsIiwicmVnaXN0ZXIiLCJyZWd1bGFyIiwicmVndWxhcmx5IiwicmVndWxhdGUiLCJyZWd1bGF0aW9uIiwicmVpbmZvcmNlIiwicmVqZWN0IiwicmVsYXRlIiwicmVsYXRpb24iLCJyZWxhdGlvbnNoaXAiLCJyZWxhdGl2ZSIsInJlbGF0aXZlbHkiLCJyZWxheCIsInJlbGVhc2UiLCJyZWxldmFudCIsInJlbGllZiIsInJlbGlnaW9uIiwicmVsaWdpb3VzIiwicmVseSIsInJlbWFpbiIsInJlbWFpbmluZyIsInJlbWFya2FibGUiLCJyZW1lbWJlciIsInJlbWluZCIsInJlbW90ZSIsInJlbW92ZSIsInJlcGVhdCIsInJlcGVhdGVkbHkiLCJyZXBsYWNlIiwicmVwbHkiLCJyZXBvcnQiLCJyZXBvcnRlciIsInJlcHJlc2VudCIsInJlcHJlc2VudGF0aW9uIiwicmVwcmVzZW50YXRpdmUiLCJSZXB1YmxpY2FuIiwicmVwdXRhdGlvbiIsInJlcXVlc3QiLCJyZXF1aXJlIiwicmVxdWlyZW1lbnQiLCJyZXNlYXJjaCIsInJlc2VhcmNoZXIiLCJyZXNlbWJsZSIsInJlc2VydmF0aW9uIiwicmVzaWRlbnQiLCJyZXNpc3QiLCJyZXNpc3RhbmNlIiwicmVzb2x1dGlvbiIsInJlc29sdmUiLCJyZXNvcnQiLCJyZXNvdXJjZSIsInJlc3BlY3QiLCJyZXNwb25kIiwicmVzcG9uZGVudCIsInJlc3BvbnNlIiwicmVzcG9uc2liaWxpdHkiLCJyZXNwb25zaWJsZSIsInJlc3QiLCJyZXN0YXVyYW50IiwicmVzdG9yZSIsInJlc3RyaWN0aW9uIiwicmVzdWx0IiwicmV0YWluIiwicmV0aXJlIiwicmV0aXJlbWVudCIsInJldHVybiIsInJldmVhbCIsInJldmVudWUiLCJyZXZpZXciLCJyZXZvbHV0aW9uIiwicmh5dGhtIiwicmljZSIsInJpY2giLCJyaWQiLCJyaWRlIiwicmlmbGUiLCJyaWdodCIsInJpbmciLCJyaXNlIiwicmlzayIsInJpdmVyIiwicm9hZCIsInJvY2siLCJyb2xlIiwicm9sbCIsInJvbWFudGljIiwicm9vZiIsInJvb20iLCJyb290Iiwicm9wZSIsInJvc2UiLCJyb3VnaCIsInJvdWdobHkiLCJyb3VuZCIsInJvdXRlIiwicm91dGluZSIsInJvdyIsInJ1YiIsInJ1bGUiLCJydW4iLCJydW5uaW5nIiwicnVyYWwiLCJydXNoIiwiUnVzc2lhbiIsInNhY3JlZCIsInNhZCIsInNhZmUiLCJzYWZldHkiLCJzYWtlIiwic2FsYWQiLCJzYWxhcnkiLCJzYWxlIiwic2FsZXMiLCJzYWx0Iiwic2FtZSIsInNhbXBsZSIsInNhbmN0aW9uIiwic2FuZCIsInNhdGVsbGl0ZSIsInNhdGlzZmFjdGlvbiIsInNhdGlzZnkiLCJzYXVjZSIsInNhdmUiLCJzYXZpbmciLCJzYXkiLCJzY2FsZSIsInNjYW5kYWwiLCJzY2FyZWQiLCJzY2VuYXJpbyIsInNjZW5lIiwic2NoZWR1bGUiLCJzY2hlbWUiLCJzY2hvbGFyIiwic2Nob2xhcnNoaXAiLCJzY2hvb2wiLCJzY2llbmNlIiwic2NpZW50aWZpYyIsInNjaWVudGlzdCIsInNjb3BlIiwic2NvcmUiLCJzY3JlYW0iLCJzY3JlZW4iLCJzY3JpcHQiLCJzZWEiLCJzZWFyY2giLCJzZWFzb24iLCJzZWF0Iiwic2Vjb25kIiwic2VjcmV0Iiwic2VjcmV0YXJ5Iiwic2VjdGlvbiIsInNlY3RvciIsInNlY3VyZSIsInNlY3VyaXR5Iiwic2VlIiwic2VlZCIsInNlZWsiLCJzZWVtIiwic2VnbWVudCIsInNlaXplIiwic2VsZWN0Iiwic2VsZWN0aW9uIiwic2VsZiIsInNlbGwiLCJTZW5hdGUiLCJzZW5hdG9yIiwic2VuZCIsInNlbmlvciIsInNlbnNlIiwic2Vuc2l0aXZlIiwic2VudGVuY2UiLCJzZXBhcmF0ZSIsInNlcXVlbmNlIiwic2VyaWVzIiwic2VyaW91cyIsInNlcmlvdXNseSIsInNlcnZlIiwic2VydmljZSIsInNlc3Npb24iLCJzZXQiLCJzZXR0aW5nIiwic2V0dGxlIiwic2V0dGxlbWVudCIsInNldmVuIiwic2V2ZXJhbCIsInNldmVyZSIsInNleCIsInNleHVhbCIsInNoYWRlIiwic2hhZG93Iiwic2hha2UiLCJzaGFsbCIsInNoYXBlIiwic2hhcmUiLCJzaGFycCIsInNoZSIsInNoZWV0Iiwic2hlbGYiLCJzaGVsbCIsInNoZWx0ZXIiLCJzaGlmdCIsInNoaW5lIiwic2hpcCIsInNoaXJ0Iiwic2hpdCIsInNob2NrIiwic2hvZSIsInNob290Iiwic2hvb3RpbmciLCJzaG9wIiwic2hvcHBpbmciLCJzaG9yZSIsInNob3J0Iiwic2hvcnRseSIsInNob3QiLCJzaG91bGQiLCJzaG91bGRlciIsInNob3V0Iiwic2hvdyIsInNob3dlciIsInNocnVnIiwic2h1dCIsInNpY2siLCJzaWRlIiwic2lnaCIsInNpZ2h0Iiwic2lnbiIsInNpZ25hbCIsInNpZ25pZmljYW5jZSIsInNpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRseSIsInNpbGVuY2UiLCJzaWxlbnQiLCJzaWx2ZXIiLCJzaW1pbGFyIiwic2ltaWxhcmx5Iiwic2ltcGxlIiwic2ltcGx5Iiwic2luIiwic2luY2UiLCJzaW5nIiwic2luZ2VyIiwic2luZ2xlIiwic2luayIsInNpciIsInNpc3RlciIsInNpdCIsInNpdGUiLCJzaXR1YXRpb24iLCJzaXgiLCJzaXplIiwic2tpIiwic2tpbGwiLCJza2luIiwic2t5Iiwic2xhdmUiLCJzbGVlcCIsInNsaWNlIiwic2xpZGUiLCJzbGlnaHQiLCJzbGlnaHRseSIsInNsaXAiLCJzbG93Iiwic2xvd2x5Iiwic21hbGwiLCJzbWFydCIsInNtZWxsIiwic21pbGUiLCJzbW9rZSIsInNtb290aCIsInNuYXAiLCJzbm93Iiwic28iLCJzb2NjZXIiLCJzb2NpYWwiLCJzb2NpZXR5Iiwic29mdCIsInNvZnR3YXJlIiwic29pbCIsInNvbGFyIiwic29sZGllciIsInNvbGlkIiwic29sdXRpb24iLCJzb2x2ZSIsInNvbWUiLCJzb21lYm9keSIsInNvbWVob3ciLCJzb21lb25lIiwic29tZXRoaW5nIiwic29tZXRpbWVzIiwic29tZXdoYXQiLCJzb21ld2hlcmUiLCJzb24iLCJzb25nIiwic29vbiIsInNvcGhpc3RpY2F0ZWQiLCJzb3JyeSIsInNvcnQiLCJzb3VsIiwic291bmQiLCJzb3VwIiwic291cmNlIiwic291dGgiLCJzb3V0aGVybiIsIlNvdmlldCIsInNwYWNlIiwiU3BhbmlzaCIsInNwZWFrIiwic3BlYWtlciIsInNwZWNpYWwiLCJzcGVjaWFsaXN0Iiwic3BlY2llcyIsInNwZWNpZmljIiwic3BlY2lmaWNhbGx5Iiwic3BlZWNoIiwic3BlZWQiLCJzcGVuZCIsInNwZW5kaW5nIiwic3BpbiIsInNwaXJpdCIsInNwaXJpdHVhbCIsInNwbGl0Iiwic3Bva2VzbWFuIiwic3BvcnQiLCJzcG90Iiwic3ByZWFkIiwic3ByaW5nIiwic3F1YXJlIiwic3F1ZWV6ZSIsInN0YWJpbGl0eSIsInN0YWJsZSIsInN0YWZmIiwic3RhZ2UiLCJzdGFpciIsInN0YWtlIiwic3RhbmQiLCJzdGFuZGFyZCIsInN0YW5kaW5nIiwic3RhciIsInN0YXJlIiwic3RhcnQiLCJzdGF0ZSIsInN0YXRlbWVudCIsInN0YXRpb24iLCJzdGF0aXN0aWNzIiwic3RhdHVzIiwic3RheSIsInN0ZWFkeSIsInN0ZWFsIiwic3RlZWwiLCJzdGVwIiwic3RpY2siLCJzdGlsbCIsInN0aXIiLCJzdG9jayIsInN0b21hY2giLCJzdG9uZSIsInN0b3AiLCJzdG9yYWdlIiwic3RvcmUiLCJzdG9ybSIsInN0b3J5Iiwic3RyYWlnaHQiLCJzdHJhbmdlIiwic3RyYW5nZXIiLCJzdHJhdGVnaWMiLCJzdHJhdGVneSIsInN0cmVhbSIsInN0cmVldCIsInN0cmVuZ3RoIiwic3RyZW5ndGhlbiIsInN0cmVzcyIsInN0cmV0Y2giLCJzdHJpa2UiLCJzdHJpbmciLCJzdHJpcCIsInN0cm9rZSIsInN0cm9uZyIsInN0cm9uZ2x5Iiwic3RydWN0dXJlIiwic3RydWdnbGUiLCJzdHVkZW50Iiwic3R1ZGlvIiwic3R1ZHkiLCJzdHVmZiIsInN0dXBpZCIsInN0eWxlIiwic3ViamVjdCIsInN1Ym1pdCIsInN1YnNlcXVlbnQiLCJzdWJzdGFuY2UiLCJzdWJzdGFudGlhbCIsInN1Y2NlZWQiLCJzdWNjZXNzIiwic3VjY2Vzc2Z1bCIsInN1Y2Nlc3NmdWxseSIsInN1Y2giLCJzdWRkZW4iLCJzdWRkZW5seSIsInN1ZSIsInN1ZmZlciIsInN1ZmZpY2llbnQiLCJzdWdhciIsInN1Z2dlc3QiLCJzdWdnZXN0aW9uIiwic3VpY2lkZSIsInN1aXQiLCJzdW1tZXIiLCJzdW1taXQiLCJzdW4iLCJzdXBlciIsInN1cHBseSIsInN1cHBvcnQiLCJzdXBwb3J0ZXIiLCJzdXBwb3NlIiwic3VwcG9zZWQiLCJTdXByZW1lIiwic3VyZSIsInN1cmVseSIsInN1cmZhY2UiLCJzdXJnZXJ5Iiwic3VycHJpc2UiLCJzdXJwcmlzZWQiLCJzdXJwcmlzaW5nIiwic3VycHJpc2luZ2x5Iiwic3Vycm91bmQiLCJzdXJ2ZXkiLCJzdXJ2aXZhbCIsInN1cnZpdmUiLCJzdXJ2aXZvciIsInN1c3BlY3QiLCJzdXN0YWluIiwic3dlYXIiLCJzd2VlcCIsInN3ZWV0Iiwic3dpbSIsInN3aW5nIiwic3dpdGNoIiwic3ltYm9sIiwic3ltcHRvbSIsInN5c3RlbSIsInRhYmxlIiwidGFibGVzcG9vbiIsInRhY3RpYyIsInRhaWwiLCJ0YWtlIiwidGFsZSIsInRhbGVudCIsInRhbGsiLCJ0YWxsIiwidGFuayIsInRhcCIsInRhcGUiLCJ0YXJnZXQiLCJ0YXNrIiwidGFzdGUiLCJ0YXgiLCJ0YXhwYXllciIsInRlYSIsInRlYWNoIiwidGVhY2hlciIsInRlYWNoaW5nIiwidGVhbSIsInRlYXIiLCJ0ZWFzcG9vbiIsInRlY2huaWNhbCIsInRlY2huaXF1ZSIsInRlY2hub2xvZ3kiLCJ0ZWVuIiwidGVlbmFnZXIiLCJ0ZWxlcGhvbmUiLCJ0ZWxlc2NvcGUiLCJ0ZWxldmlzaW9uIiwidGVsbCIsInRlbXBlcmF0dXJlIiwidGVtcG9yYXJ5IiwidGVuIiwidGVuZCIsInRlbmRlbmN5IiwidGVubmlzIiwidGVuc2lvbiIsInRlbnQiLCJ0ZXJtIiwidGVybXMiLCJ0ZXJyaWJsZSIsInRlcnJpdG9yeSIsInRlcnJvciIsInRlcnJvcmlzbSIsInRlcnJvcmlzdCIsInRlc3QiLCJ0ZXN0aWZ5IiwidGVzdGltb255IiwidGVzdGluZyIsInRleHQiLCJ0aGFuIiwidGhhbmsiLCJ0aGFua3MiLCJ0aGF0IiwidGhlIiwidGhlYXRlciIsInRoZWlyIiwidGhlbSIsInRoZW1lIiwidGhlbXNlbHZlcyIsInRoZW4iLCJ0aGVvcnkiLCJ0aGVyYXB5IiwidGhlcmUiLCJ0aGVyZWZvcmUiLCJ0aGVzZSIsInRoZXkiLCJ0aGljayIsInRoaW4iLCJ0aGluZyIsInRoaW5rIiwidGhpbmtpbmciLCJ0aGlyZCIsInRoaXJ0eSIsInRoaXMiLCJ0aG9zZSIsInRob3VnaCIsInRob3VnaHQiLCJ0aG91c2FuZCIsInRocmVhdCIsInRocmVhdGVuIiwidGhyZWUiLCJ0aHJvYXQiLCJ0aHJvdWdoIiwidGhyb3VnaG91dCIsInRocm93IiwidGh1cyIsInRpY2tldCIsInRpZSIsInRpZ2h0IiwidGltZSIsInRpbnkiLCJ0aXAiLCJ0aXJlIiwidGlyZWQiLCJ0aXNzdWUiLCJ0aXRsZSIsInRvIiwidG9iYWNjbyIsInRvZGF5IiwidG9lIiwidG9nZXRoZXIiLCJ0b21hdG8iLCJ0b21vcnJvdyIsInRvbmUiLCJ0b25ndWUiLCJ0b25pZ2h0IiwidG9vIiwidG9vbCIsInRvb3RoIiwidG9wIiwidG9waWMiLCJ0b3NzIiwidG90YWwiLCJ0b3RhbGx5IiwidG91Y2giLCJ0b3VnaCIsInRvdXIiLCJ0b3VyaXN0IiwidG91cm5hbWVudCIsInRvd2FyZCIsInRvd2FyZHMiLCJ0b3dlciIsInRvd24iLCJ0b3kiLCJ0cmFjZSIsInRyYWNrIiwidHJhZGUiLCJ0cmFkaXRpb24iLCJ0cmFkaXRpb25hbCIsInRyYWZmaWMiLCJ0cmFnZWR5IiwidHJhaWwiLCJ0cmFpbiIsInRyYWluaW5nIiwidHJhbnNmZXIiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1hdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2xhdGUiLCJ0cmFuc3BvcnRhdGlvbiIsInRyYXZlbCIsInRyZWF0IiwidHJlYXRtZW50IiwidHJlYXR5IiwidHJlZSIsInRyZW1lbmRvdXMiLCJ0cmVuZCIsInRyaWFsIiwidHJpYmUiLCJ0cmljayIsInRyaXAiLCJ0cm9vcCIsInRyb3VibGUiLCJ0cnVjayIsInRydWUiLCJ0cnVseSIsInRydXN0IiwidHJ1dGgiLCJ0cnkiLCJ0dWJlIiwidHVubmVsIiwidHVybiIsIlRWIiwidHdlbHZlIiwidHdlbnR5IiwidHdpY2UiLCJ0d2luIiwidHdvIiwidHlwZSIsInR5cGljYWwiLCJ0eXBpY2FsbHkiLCJ1Z2x5IiwidWx0aW1hdGUiLCJ1bHRpbWF0ZWx5IiwidW5hYmxlIiwidW5jbGUiLCJ1bmRlciIsInVuZGVyZ28iLCJ1bmRlcnN0YW5kIiwidW5kZXJzdGFuZGluZyIsInVuZm9ydHVuYXRlbHkiLCJ1bmlmb3JtIiwidW5pb24iLCJ1bmlxdWUiLCJ1bml0IiwiVW5pdGVkIiwidW5pdmVyc2FsIiwidW5pdmVyc2UiLCJ1bml2ZXJzaXR5IiwidW5rbm93biIsInVubGVzcyIsInVubGlrZSIsInVubGlrZWx5IiwidW50aWwiLCJ1bnVzdWFsIiwidXAiLCJ1cG9uIiwidXBwZXIiLCJ1cmJhbiIsInVyZ2UiLCJ1cyIsInVzZSIsInVzZWQiLCJ1c2VmdWwiLCJ1c2VyIiwidXN1YWwiLCJ1c3VhbGx5IiwidXRpbGl0eSIsInZhY2F0aW9uIiwidmFsbGV5IiwidmFsdWFibGUiLCJ2YWx1ZSIsInZhcmlhYmxlIiwidmFyaWF0aW9uIiwidmFyaWV0eSIsInZhcmlvdXMiLCJ2YXJ5IiwidmFzdCIsInZlZ2V0YWJsZSIsInZlaGljbGUiLCJ2ZW50dXJlIiwidmVyc2lvbiIsInZlcnN1cyIsInZlcnkiLCJ2ZXNzZWwiLCJ2ZXRlcmFuIiwidmlhIiwidmljdGltIiwidmljdG9yeSIsInZpZGVvIiwidmlldyIsInZpZXdlciIsInZpbGxhZ2UiLCJ2aW9sYXRlIiwidmlvbGF0aW9uIiwidmlvbGVuY2UiLCJ2aW9sZW50IiwidmlydHVhbGx5IiwidmlydHVlIiwidmlydXMiLCJ2aXNpYmxlIiwidmlzaW9uIiwidmlzaXQiLCJ2aXNpdG9yIiwidmlzdWFsIiwidml0YWwiLCJ2b2ljZSIsInZvbHVtZSIsInZvbHVudGVlciIsInZvdGUiLCJ2b3RlciIsInZzIiwidnVsbmVyYWJsZSIsIndhZ2UiLCJ3YWl0Iiwid2FrZSIsIndhbGsiLCJ3YWxsIiwid2FuZGVyIiwid2FudCIsIndhciIsIndhcm0iLCJ3YXJuIiwid2FybmluZyIsIndhc2giLCJ3YXN0ZSIsIndhdGNoIiwid2F0ZXIiLCJ3YXZlIiwid2F5Iiwid2UiLCJ3ZWFrIiwid2VhbHRoIiwid2VhbHRoeSIsIndlYXBvbiIsIndlYXIiLCJ3ZWF0aGVyIiwid2VkZGluZyIsIndlZWsiLCJ3ZWVrZW5kIiwid2Vla2x5Iiwid2VpZ2giLCJ3ZWlnaHQiLCJ3ZWxjb21lIiwid2VsZmFyZSIsIndlbGwiLCJ3ZXN0Iiwid2VzdGVybiIsIndldCIsIndoYXQiLCJ3aGF0ZXZlciIsIndoZWVsIiwid2hlbiIsIndoZW5ldmVyIiwid2hlcmUiLCJ3aGVyZWFzIiwid2hldGhlciIsIndoaWNoIiwid2hpbGUiLCJ3aGlzcGVyIiwid2hpdGUiLCJ3aG8iLCJ3aG9sZSIsIndob20iLCJ3aG9zZSIsIndoeSIsIndpZGUiLCJ3aWRlbHkiLCJ3aWRlc3ByZWFkIiwid2lmZSIsIndpbGQiLCJ3aWxsIiwid2lsbGluZyIsIndpbiIsIndpbmQiLCJ3aW5kb3ciLCJ3aW5lIiwid2luZyIsIndpbm5lciIsIndpbnRlciIsIndpcGUiLCJ3aXJlIiwid2lzZG9tIiwid2lzZSIsIndpc2giLCJ3aXRoIiwid2l0aGRyYXciLCJ3aXRoaW4iLCJ3aXRob3V0Iiwid2l0bmVzcyIsIndvbWFuIiwid29uZGVyIiwid29uZGVyZnVsIiwid29vZCIsIndvb2RlbiIsIndvcmQiLCJ3b3JrIiwid29ya2VyIiwid29ya2luZyIsIndvcmtzIiwid29ya3Nob3AiLCJ3b3JsZCIsIndvcnJpZWQiLCJ3b3JyeSIsIndvcnRoIiwid291bGQiLCJ3b3VuZCIsIndyYXAiLCJ3cml0ZSIsIndyaXRlciIsIndyaXRpbmciLCJ3cm9uZyIsInlhcmQiLCJ5ZWFoIiwieWVhciIsInllbGwiLCJ5ZWxsb3ciLCJ5ZXMiLCJ5ZXN0ZXJkYXkiLCJ5ZXQiLCJ5aWVsZCIsInlvdSIsInlvdW5nIiwieW91ciIsInlvdXJzIiwieW91cnNlbGYiLCJ5b3V0aCIsInpvbmUiLCJheGlvcyIsImZzIiwiZmluZGVyIiwiQVBJX0RBSUxZX0xJTUlUIiwiTUFYX1dPUkRTIiwiQ0FDSEVfQ0xVU1RFUlMiLCJNQVhfTk9ERV9GUkVRVUVOQ1kiLCJUUkFWRVJTRV9TSU1JTEFSIiwiY2FjaGVJc0luaXRpYWxpemVkIiwidG90YWxXb3Jkc0xhc3REYXkiLCJsYXp5SW5pdENhY2hlIiwiY3VydGltZSIsIkRhdGUiLCJmaW5kRmlsZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwiaW5pdENyYXdsZXIiLCJfTUFYX1dPUkRTIiwiX0NBQ0hFX0NMVVNURVJTIiwiX01BWF9OT0RFX0ZSRVFVRU5DWSIsIl9UUkFWRVJTRV9TSU1JTEFSIiwiZXhpc3RzU3luYyIsIm1rZGlyU3luYyIsInJlY3Vyc2l2ZSIsInNpbmdsZVdvcmRUb0Rpc3BsYXkiLCJyZXN1bHRzIiwicHJvbnVuY2lhdGlvbiIsImRlZiIsImRlZmluaXRpb25BcnJheSIsInBhcnRPZlNwZWVjaCIsInByb3BlcnRpZXMiLCJrZXlzIiwiT2JqZWN0IiwicmVnZXgiLCJ0b0xvd2VyQ2FzZSIsIm5ld09iaiIsImlzU3RyaW5nIiwibG9hZFNpbmdsZVdvcmQiLCJhc29iamVjdCIsIndmcGF0aCIsImlqc29uIiwicmVhZEZpbGVTeW5jIiwidG9TdHJpbmciLCJKU09OIiwicGFyc2UiLCJvanNvbiIsInN0cmluZ2lmeSIsImUiLCJ1bmxpbmtTeW5jIiwiZW52IiwiUkFQSURBUElfS0VZIiwiZGpzb24iLCJ3cml0ZUZpbGUiLCJlcnIiLCJUcmF2ZXJzZU5vZGUiLCJjb25zdHJ1Y3RvciIsImJ5X2RlZiIsInZhbCIsInN5bm9ueW1zIiwid29yZHMiLCJzaW1pbGFyVG8iLCJjb21wcmVzcyIsImxvYWREaWN0aW9uYXJ5QW5kQ2hpbGRyZW4iLCJ0cmVzdWx0IiwidHJhdmVyc2lvbiIsIm5vZGUiLCJ3b3Jkc2JyZWFkdGhmaXJzdCIsInRyYXZlcnNlQ2x1c3RlciIsIm5vV29yZHMiLCJwcmV2aW91c2xldmVsY2hpbGR3b3JkcyIsImNvbmNhdCIsInByb21pc2VzIiwidyIsImJ5X3ciLCJub2RlcHJvbWlzZSIsIlByb21pc2UiLCJsb2FkQ2x1c3RlciIsImNmcGF0aCIsImJ5X2tleSIsInZhbHVlcyIsImNtcCIsImZpcnN0RWwiLCJzZWNvbmRFbCIsImxvY2FsZUNvbXBhcmUiLCJkZWZvYmoiLCJub0NsdXN0ZXJFbnRyaWVzIiwiY2pzb24iLCJsb2FkQ29tbW9uV29yZCIsIm5vRGVmaW5pdGlvbnMiLCJsb2FkQ29tbW9uV29yZHMiLCJjdyIsImNvbW1vbldvcmQiLCJGaW5kRmlsZXMiLCJjbnQiLCJyb290Rm9sZGVyIiwiZmlsZU1vZGlmaWVkRGF0ZSIsIm9uRmlsZSIsInN0clBhdGgiLCJzdGF0IiwiX3Jlc29sdmUiLCJfcmVqZWN0Iiwic3RhcnRTZWFyY2giLCJjcmF3bGVyIiwiaGFuZGxlciIsInN0YXR1c0NvZGUiLCJqc29uIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFD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WUFBWSxtQkFBTyxDQUFDLEVBQU87O0FBRTNCO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUNBQWlDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QyxFQUFFO0FBQy9ELEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7Ozs7Ozs7QUNqVUEsZ0M7Ozs7Ozs7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLEVBQUk7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZ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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztBQ3RSQSxtQzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsRUFBYztBQUN6QyxDQUFDO0FBQ0QsbUJBQW1CLG1CQUFPLENBQUMsRUFBVztBQUN0Qzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLG1CQUFPLENBQUMsRUFBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7QUNsTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksTUFBTTtBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLG1CQUFPLENBQUMsRUFBSztBQUN2QixXQUFXLG1CQUFPLENBQUMsRUFBTTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsbUJBQU8sQ0FBQyxFQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyxFQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsNkRBQTZEO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx5QkFBeUI7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxJQUFJOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELEVBQUU7QUFDbkQsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDekxBLGdDOzs7Ozs7QUNBQSxpQzs7Ozs7OztBQ0FhO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLEVBQUk7QUFDdkIsZ0JBQWdCLG1CQUFPLENBQUMsRUFBVTs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLEdBQUc7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbElBLCtCOzs7Ozs7O0FDQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBLGlDOzs7Ozs7Ozs7Ozs7O0FDQWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLEVBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN4RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTTYwQixTQUFTLEdBQUdwMkIsbUJBQU8sQ0FBQyxFQUFELENBQXpCOztBQUVPLElBQUlxMkIsR0FBRyxHQUFDLENBQVI7QUFBQSxJQUFVOUUsTUFBTSxHQUFDLENBQWpCO0FBRUEsU0FBU0gsU0FBVCxDQUFtQmtGLFVBQW5CLEVBQStCQyxnQkFBL0IsRUFBaURDLE1BQWpELEVBQXlEO0FBQzVELE1BQUkvRixNQUFNLEdBQUcsSUFBSTJGLFNBQUosQ0FBYztBQUN2QkUsY0FEdUI7QUFFdkJDO0FBRnVCLEdBQWQsQ0FBYjtBQUlBLE1BQUloMUIsTUFBSixFQUFXYixPQUFYLEVBQW1CMUMsTUFBbkI7QUFDQXE0QixLQUFHLEdBQUMsQ0FBSjtBQUFPOUUsUUFBTSxHQUFDLENBQVA7QUFFUGQsUUFBTSxDQUFDbHFDLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVNrd0MsT0FBVCxFQUFrQkMsSUFBbEIsRUFBd0I7QUFDdkMsUUFBSUYsTUFBSixFQUFZQSxNQUFNLENBQUNDLE9BQUQsRUFBVUMsSUFBVixDQUFOO0FBQ1pMLE9BQUc7QUFDTixHQUhEO0FBSUE1RixRQUFNLENBQUNscUMsRUFBUCxDQUFVLFVBQVYsRUFBc0IsWUFBVztBQUM3Qm1hLFdBQU8sQ0FBQzIxQixHQUFELENBQVA7QUFDSCxHQUZEO0FBR0E1RixRQUFNLENBQUNscUMsRUFBUCxDQUFVLFdBQVYsRUFBdUIsVUFBU3N0QyxHQUFULEVBQWM0QyxPQUFkLEVBQXVCO0FBQzFDcEYsV0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQW9CbUYsT0FBcEIsR0FBOEIsR0FBOUIsR0FBb0M1QyxHQUFoRCxFQUQwQyxDQUNhOztBQUN2RHRDLFVBQU07QUFDVCxHQUhEO0FBSUFkLFFBQU0sQ0FBQ2xxQyxFQUFQLENBQVUsT0FBVixFQUFtQixVQUFTc3RDLEdBQVQsRUFBYztBQUM3QnhDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFrQnVDLEdBQTlCO0FBQ0F0QyxVQUFNO0FBQ1QsR0FIRDtBQUtBaHdCLFFBQU0sR0FBRyxJQUFJNHpCLE9BQUosQ0FBWSxDQUFDd0IsUUFBRCxFQUFVQyxPQUFWLEtBQW9CO0FBQ3JDbDJCLFdBQU8sR0FBR2kyQixRQUFWO0FBQ0EzNEIsVUFBTSxHQUFHNDRCLE9BQVQ7QUFDQW5HLFVBQU0sQ0FBQ29HLFdBQVA7QUFDSCxHQUpRLENBQVQ7QUFLQSxTQUFPdDFCLE1BQVA7QUFDSCxDOzs7Ozs7O0FDbENZO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw2QkFBNkIsbUJBQU8sQ0FBQyxFQUFJO0FBQ3pDLGdDQUFnQyxtQkFBTyxDQUFDLEVBQU87QUFDL0MsK0JBQStCLG1CQUFPLENBQUMsRUFBTTtBQUM3QyxpQ0FBaUMsbUJBQU8sQ0FBQyxFQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDOzs7Ozs7QUNoSEE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Es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QUl5RCxRQUFRLEdBQUcsRUFBZjs7QUFDQSxTQUFLLElBQUlvQixVQUFULElBQXVCRCxFQUFFLENBQUM5Z0csaUJBQTFCLEVBQTZDO0FBQzNDMi9GLGNBQVEsQ0FBQ2g4QixJQUFULENBQWMrOUIsT0FBTyxDQUFDMUIsV0FBUixDQUFvQmUsVUFBcEIsRUFBZ0MsS0FBaEMsQ0FBZDtBQUNEOztBQUNELFVBQU1oQixPQUFPLENBQUMvNUYsR0FBUixDQUFZMjVGLFFBQVosQ0FBTjtBQUVBLFdBQU87QUFDTGlDLGdCQUFVLEVBQUUsR0FEUDtBQUVMM3VGLFVBQUksRUFBRTR1RixJQUZEO0FBR0xDLGFBQU8sRUFBRTtBQUNQLHVDQUErQjtBQUR4QjtBQUhKLEtBQVA7QUFRRCxHQWxCRCxDQWtCRSxPQUFPckQsR0FBUCxFQUFZO0FBQ1p4QyxXQUFPLENBQUNDLEdBQVIsQ0FBWXVDLEdBQVo7QUFDQSxXQUFPO0FBQUVtRCxnQkFBVSxFQUFFLEdBQWQ7QUFBbUIzdUYsVUFBSSxFQUFFd3JGLEdBQUcsQ0FBQ1gsUUFBSjtBQUF6QixLQUFQO0FBQ0Q7QUFDRixDIiwiZmlsZSI6ImNyYXdsLWJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTMpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gZXF1YWwgdG8gbWVyZ2Ugd2l0aCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0IG5vIHJlZmVyZW5jZVxuICogdG8gb3JpZ2luYWwgb2JqZWN0cyBpcyBrZXB0LlxuICpcbiAqIEBzZWUgbWVyZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGRlZXBNZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBzXCIpOyIsInZhciB1cmwgPSByZXF1aXJlKFwidXJsXCIpO1xudmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbnZhciBodHRwcyA9IHJlcXVpcmUoXCJodHRwc1wiKTtcbnZhciBhc3NlcnQgPSByZXF1aXJlKFwiYXNzZXJ0XCIpO1xudmFyIFdyaXRhYmxlID0gcmVxdWlyZShcInN0cmVhbVwiKS5Xcml0YWJsZTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImZvbGxvdy1yZWRpcmVjdHNcIik7XG5cbi8vIFJGQzcyMzHCpzQuMi4xOiBPZiB0aGUgcmVxdWVzdCBtZXRob2RzIGRlZmluZWQgYnkgdGhpcyBzcGVjaWZpY2F0aW9uLFxuLy8gdGhlIEdFVCwgSEVBRCwgT1BUSU9OUywgYW5kIFRSQUNFIG1ldGhvZHMgYXJlIGRlZmluZWQgdG8gYmUgc2FmZS5cbnZhciBTQUZFX01FVEhPRFMgPSB7IEdFVDogdHJ1ZSwgSEVBRDogdHJ1ZSwgT1BUSU9OUzogdHJ1ZSwgVFJBQ0U6IHRydWUgfTtcblxuLy8gQ3JlYXRlIGhhbmRsZXJzIHRoYXQgcGFzcyBldmVudHMgZnJvbSBuYXRpdmUgcmVxdWVzdHNcbnZhciBldmVudEhhbmRsZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbltcImFib3J0XCIsIFwiYWJvcnRlZFwiLCBcImVycm9yXCIsIFwic29ja2V0XCIsIFwidGltZW91dFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudEhhbmRsZXJzW2V2ZW50XSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICB0aGlzLl9yZWRpcmVjdGFibGUuZW1pdChldmVudCwgYXJnKTtcbiAgfTtcbn0pO1xuXG4vLyBBbiBIVFRQKFMpIHJlcXVlc3QgdGhhdCBjYW4gYmUgcmVkaXJlY3RlZFxuZnVuY3Rpb24gUmVkaXJlY3RhYmxlUmVxdWVzdChvcHRpb25zLCByZXNwb25zZUNhbGxiYWNrKSB7XG4gIC8vIEluaXRpYWxpemUgdGhlIHJlcXVlc3RcbiAgV3JpdGFibGUuY2FsbCh0aGlzKTtcbiAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5fcmVkaXJlY3RDb3VudCA9IDA7XG4gIHRoaXMuX3JlZGlyZWN0cyA9IFtdO1xuICB0aGlzLl9yZXF1ZXN0Qm9keUxlbmd0aCA9IDA7XG4gIHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycyA9IFtdO1xuXG4gIC8vIFNpbmNlIGh0dHAucmVxdWVzdCB0cmVhdHMgaG9zdCBhcyBhbiBhbGlhcyBvZiBob3N0bmFtZSxcbiAgLy8gYnV0IHRoZSB1cmwgbW9kdWxlIGludGVycHJldHMgaG9zdCBhcyBob3N0bmFtZSBwbHVzIHBvcnQsXG4gIC8vIGVsaW1pbmF0ZSB0aGUgaG9zdCBwcm9wZXJ0eSB0byBhdm9pZCBjb25mdXNpb24uXG4gIGlmIChvcHRpb25zLmhvc3QpIHtcbiAgICAvLyBVc2UgaG9zdG5hbWUgaWYgc2V0LCBiZWNhdXNlIGl0IGhhcyBwcmVjZWRlbmNlXG4gICAgaWYgKCFvcHRpb25zLmhvc3RuYW1lKSB7XG4gICAgICBvcHRpb25zLmhvc3RuYW1lID0gb3B0aW9ucy5ob3N0O1xuICAgIH1cbiAgICBkZWxldGUgb3B0aW9ucy5ob3N0O1xuICB9XG5cbiAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgaWYgcGFzc2VkXG4gIGlmIChyZXNwb25zZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5vbihcInJlc3BvbnNlXCIsIHJlc3BvbnNlQ2FsbGJhY2spO1xuICB9XG5cbiAgLy8gUmVhY3QgdG8gcmVzcG9uc2VzIG9mIG5hdGl2ZSByZXF1ZXN0c1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX29uTmF0aXZlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBzZWxmLl9wcm9jZXNzUmVzcG9uc2UocmVzcG9uc2UpO1xuICB9O1xuXG4gIC8vIENvbXBsZXRlIHRoZSBVUkwgb2JqZWN0IHdoZW4gbmVjZXNzYXJ5XG4gIGlmICghb3B0aW9ucy5wYXRobmFtZSAmJiBvcHRpb25zLnBhdGgpIHtcbiAgICB2YXIgc2VhcmNoUG9zID0gb3B0aW9ucy5wYXRoLmluZGV4T2YoXCI/XCIpO1xuICAgIGlmIChzZWFyY2hQb3MgPCAwKSB7XG4gICAgICBvcHRpb25zLnBhdGhuYW1lID0gb3B0aW9ucy5wYXRoO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG9wdGlvbnMucGF0aG5hbWUgPSBvcHRpb25zLnBhdGguc3Vic3RyaW5nKDAsIHNlYXJjaFBvcyk7XG4gICAgICBvcHRpb25zLnNlYXJjaCA9IG9wdGlvbnMucGF0aC5zdWJzdHJpbmcoc2VhcmNoUG9zKTtcbiAgICB9XG4gIH1cblxuICAvLyBQZXJmb3JtIHRoZSBmaXJzdCByZXF1ZXN0XG4gIHRoaXMuX3BlcmZvcm1SZXF1ZXN0KCk7XG59XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoV3JpdGFibGUucHJvdG90eXBlKTtcblxuLy8gV3JpdGVzIGJ1ZmZlcmVkIGRhdGEgdG8gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICAvLyBWYWxpZGF0ZSBpbnB1dCBhbmQgc2hpZnQgcGFyYW1ldGVycyBpZiBuZWNlc3NhcnlcbiAgaWYgKCEodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgKFwibGVuZ3RoXCIgaW4gZGF0YSkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZGF0YSBzaG91bGQgYmUgYSBzdHJpbmcsIEJ1ZmZlciBvciBVaW50OEFycmF5XCIpO1xuICB9XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNhbGxiYWNrID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgLy8gSWdub3JlIGVtcHR5IGJ1ZmZlcnMsIHNpbmNlIHdyaXRpbmcgdGhlbSBkb2Vzbid0IGludm9rZSB0aGUgY2FsbGJhY2tcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy8yMjA2NlxuICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICAvLyBPbmx5IHdyaXRlIHdoZW4gd2UgZG9uJ3QgZXhjZWVkIHRoZSBtYXhpbXVtIGJvZHkgbGVuZ3RoXG4gIGlmICh0aGlzLl9yZXF1ZXN0Qm9keUxlbmd0aCArIGRhdGEubGVuZ3RoIDw9IHRoaXMuX29wdGlvbnMubWF4Qm9keUxlbmd0aCkge1xuICAgIHRoaXMuX3JlcXVlc3RCb2R5TGVuZ3RoICs9IGRhdGEubGVuZ3RoO1xuICAgIHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycy5wdXNoKHsgZGF0YTogZGF0YSwgZW5jb2Rpbmc6IGVuY29kaW5nIH0pO1xuICAgIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LndyaXRlKGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjayk7XG4gIH1cbiAgLy8gRXJyb3Igd2hlbiB3ZSBleGNlZWQgdGhlIG1heGltdW0gYm9keSBsZW5ndGhcbiAgZWxzZSB7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwiUmVxdWVzdCBib2R5IGxhcmdlciB0aGFuIG1heEJvZHlMZW5ndGggbGltaXRcIikpO1xuICAgIHRoaXMuYWJvcnQoKTtcbiAgfVxufTtcblxuLy8gRW5kcyB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICAvLyBTaGlmdCBwYXJhbWV0ZXJzIGlmIG5lY2Vzc2FyeVxuICBpZiAodHlwZW9mIGRhdGEgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNhbGxiYWNrID0gZGF0YTtcbiAgICBkYXRhID0gZW5jb2RpbmcgPSBudWxsO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2FsbGJhY2sgPSBlbmNvZGluZztcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH1cblxuICAvLyBXcml0ZSBkYXRhIGFuZCBlbmRcbiAgdmFyIGN1cnJlbnRSZXF1ZXN0ID0gdGhpcy5fY3VycmVudFJlcXVlc3Q7XG4gIHRoaXMud3JpdGUoZGF0YSB8fCBcIlwiLCBlbmNvZGluZywgZnVuY3Rpb24gKCkge1xuICAgIGN1cnJlbnRSZXF1ZXN0LmVuZChudWxsLCBudWxsLCBjYWxsYmFjayk7XG4gIH0pO1xufTtcblxuLy8gU2V0cyBhIGhlYWRlciB2YWx1ZSBvbiB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuc2V0SGVhZGVyID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMuX29wdGlvbnMuaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB0aGlzLl9jdXJyZW50UmVxdWVzdC5zZXRIZWFkZXIobmFtZSwgdmFsdWUpO1xufTtcblxuLy8gQ2xlYXJzIGEgaGVhZGVyIHZhbHVlIG9uIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5yZW1vdmVIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWxldGUgdGhpcy5fb3B0aW9ucy5oZWFkZXJzW25hbWVdO1xuICB0aGlzLl9jdXJyZW50UmVxdWVzdC5yZW1vdmVIZWFkZXIobmFtZSk7XG59O1xuXG4vLyBQcm94eSBhbGwgb3RoZXIgcHVibGljIENsaWVudFJlcXVlc3QgbWV0aG9kc1xuW1xuICBcImFib3J0XCIsIFwiZmx1c2hIZWFkZXJzXCIsIFwiZ2V0SGVhZGVyXCIsXG4gIFwic2V0Tm9EZWxheVwiLCBcInNldFNvY2tldEtlZXBBbGl2ZVwiLCBcInNldFRpbWVvdXRcIixcbl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIFJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UmVxdWVzdFttZXRob2RdKGEsIGIpO1xuICB9O1xufSk7XG5cbi8vIFByb3h5IGFsbCBwdWJsaWMgQ2xpZW50UmVxdWVzdCBwcm9wZXJ0aWVzXG5bXCJhYm9ydGVkXCIsIFwiY29ubmVjdGlvblwiLCBcInNvY2tldFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUsIHByb3BlcnR5LCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jdXJyZW50UmVxdWVzdFtwcm9wZXJ0eV07IH0sXG4gIH0pO1xufSk7XG5cbi8vIEV4ZWN1dGVzIHRoZSBuZXh0IG5hdGl2ZSByZXF1ZXN0IChpbml0aWFsIG9yIHJlZGlyZWN0KVxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuX3BlcmZvcm1SZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBMb2FkIHRoZSBuYXRpdmUgcHJvdG9jb2xcbiAgdmFyIHByb3RvY29sID0gdGhpcy5fb3B0aW9ucy5wcm90b2NvbDtcbiAgdmFyIG5hdGl2ZVByb3RvY29sID0gdGhpcy5fb3B0aW9ucy5uYXRpdmVQcm90b2NvbHNbcHJvdG9jb2xdO1xuICBpZiAoIW5hdGl2ZVByb3RvY29sKSB7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgcHJvdG9jb2wgXCIgKyBwcm90b2NvbCkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIElmIHNwZWNpZmllZCwgdXNlIHRoZSBhZ2VudCBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm90b2NvbFxuICAvLyAoSFRUUCBhbmQgSFRUUFMgdXNlIGRpZmZlcmVudCB0eXBlcyBvZiBhZ2VudHMpXG4gIGlmICh0aGlzLl9vcHRpb25zLmFnZW50cykge1xuICAgIHZhciBzY2hlbWUgPSBwcm90b2NvbC5zdWJzdHIoMCwgcHJvdG9jb2wubGVuZ3RoIC0gMSk7XG4gICAgdGhpcy5fb3B0aW9ucy5hZ2VudCA9IHRoaXMuX29wdGlvbnMuYWdlbnRzW3NjaGVtZV07XG4gIH1cblxuICAvLyBDcmVhdGUgdGhlIG5hdGl2ZSByZXF1ZXN0XG4gIHZhciByZXF1ZXN0ID0gdGhpcy5fY3VycmVudFJlcXVlc3QgPVxuICAgICAgICBuYXRpdmVQcm90b2NvbC5yZXF1ZXN0KHRoaXMuX29wdGlvbnMsIHRoaXMuX29uTmF0aXZlUmVzcG9uc2UpO1xuICB0aGlzLl9jdXJyZW50VXJsID0gdXJsLmZvcm1hdCh0aGlzLl9vcHRpb25zKTtcblxuICAvLyBTZXQgdXAgZXZlbnQgaGFuZGxlcnNcbiAgcmVxdWVzdC5fcmVkaXJlY3RhYmxlID0gdGhpcztcbiAgZm9yICh2YXIgZXZlbnQgaW4gZXZlbnRIYW5kbGVycykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICByZXF1ZXN0Lm9uKGV2ZW50LCBldmVudEhhbmRsZXJzW2V2ZW50XSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRW5kIGEgcmVkaXJlY3RlZCByZXF1ZXN0XG4gIC8vIChUaGUgZmlyc3QgcmVxdWVzdCBtdXN0IGJlIGVuZGVkIGV4cGxpY2l0bHkgd2l0aCBSZWRpcmVjdGFibGVSZXF1ZXN0I2VuZClcbiAgaWYgKHRoaXMuX2lzUmVkaXJlY3QpIHtcbiAgICAvLyBXcml0ZSB0aGUgcmVxdWVzdCBlbnRpdHkgYW5kIGVuZC5cbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGJ1ZmZlcnMgPSB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnM7XG4gICAgKGZ1bmN0aW9uIHdyaXRlTmV4dCgpIHtcbiAgICAgIGlmIChpIDwgYnVmZmVycy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IGJ1ZmZlcnNbaSsrXTtcbiAgICAgICAgcmVxdWVzdC53cml0ZShidWZmZXIuZGF0YSwgYnVmZmVyLmVuY29kaW5nLCB3cml0ZU5leHQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlcXVlc3QuZW5kKCk7XG4gICAgICB9XG4gICAgfSgpKTtcbiAgfVxufTtcblxuLy8gUHJvY2Vzc2VzIGEgcmVzcG9uc2UgZnJvbSB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuX3Byb2Nlc3NSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAvLyBTdG9yZSB0aGUgcmVkaXJlY3RlZCByZXNwb25zZVxuICBpZiAodGhpcy5fb3B0aW9ucy50cmFja1JlZGlyZWN0cykge1xuICAgIHRoaXMuX3JlZGlyZWN0cy5wdXNoKHtcbiAgICAgIHVybDogdGhpcy5fY3VycmVudFVybCxcbiAgICAgIGhlYWRlcnM6IHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBzdGF0dXNDb2RlOiByZXNwb25zZS5zdGF0dXNDb2RlLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gUkZDNzIzMcKnNi40OiBUaGUgM3h4IChSZWRpcmVjdGlvbikgY2xhc3Mgb2Ygc3RhdHVzIGNvZGUgaW5kaWNhdGVzXG4gIC8vIHRoYXQgZnVydGhlciBhY3Rpb24gbmVlZHMgdG8gYmUgdGFrZW4gYnkgdGhlIHVzZXIgYWdlbnQgaW4gb3JkZXIgdG9cbiAgLy8gZnVsZmlsbCB0aGUgcmVxdWVzdC4gSWYgYSBMb2NhdGlvbiBoZWFkZXIgZmllbGQgaXMgcHJvdmlkZWQsXG4gIC8vIHRoZSB1c2VyIGFnZW50IE1BWSBhdXRvbWF0aWNhbGx5IHJlZGlyZWN0IGl0cyByZXF1ZXN0IHRvIHRoZSBVUklcbiAgLy8gcmVmZXJlbmNlZCBieSB0aGUgTG9jYXRpb24gZmllbGQgdmFsdWUsXG4gIC8vIGV2ZW4gaWYgdGhlIHNwZWNpZmljIHN0YXR1cyBjb2RlIGlzIG5vdCB1bmRlcnN0b29kLlxuICB2YXIgbG9jYXRpb24gPSByZXNwb25zZS5oZWFkZXJzLmxvY2F0aW9uO1xuICBpZiAobG9jYXRpb24gJiYgdGhpcy5fb3B0aW9ucy5mb2xsb3dSZWRpcmVjdHMgIT09IGZhbHNlICYmXG4gICAgICByZXNwb25zZS5zdGF0dXNDb2RlID49IDMwMCAmJiByZXNwb25zZS5zdGF0dXNDb2RlIDwgNDAwKSB7XG4gICAgLy8gUkZDNzIzMcKnNi40OiBBIGNsaWVudCBTSE9VTEQgZGV0ZWN0IGFuZCBpbnRlcnZlbmVcbiAgICAvLyBpbiBjeWNsaWNhbCByZWRpcmVjdGlvbnMgKGkuZS4sIFwiaW5maW5pdGVcIiByZWRpcmVjdGlvbiBsb29wcykuXG4gICAgaWYgKCsrdGhpcy5fcmVkaXJlY3RDb3VudCA+IHRoaXMuX29wdGlvbnMubWF4UmVkaXJlY3RzKSB7XG4gICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJNYXggcmVkaXJlY3RzIGV4Y2VlZGVkLlwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUkZDNzIzMcKnNi40OiBBdXRvbWF0aWMgcmVkaXJlY3Rpb24gbmVlZHMgdG8gZG9uZSB3aXRoXG4gICAgLy8gY2FyZSBmb3IgbWV0aG9kcyBub3Qga25vd24gdG8gYmUgc2FmZSBb4oCmXSxcbiAgICAvLyBzaW5jZSB0aGUgdXNlciBtaWdodCBub3Qgd2lzaCB0byByZWRpcmVjdCBhbiB1bnNhZmUgcmVxdWVzdC5cbiAgICAvLyBSRkM3MjMxwqc2LjQuNzogVGhlIDMwNyAoVGVtcG9yYXJ5IFJlZGlyZWN0KSBzdGF0dXMgY29kZSBpbmRpY2F0ZXNcbiAgICAvLyB0aGF0IHRoZSB0YXJnZXQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUklcbiAgICAvLyBhbmQgdGhlIHVzZXIgYWdlbnQgTVVTVCBOT1QgY2hhbmdlIHRoZSByZXF1ZXN0IG1ldGhvZFxuICAgIC8vIGlmIGl0IHBlcmZvcm1zIGFuIGF1dG9tYXRpYyByZWRpcmVjdGlvbiB0byB0aGF0IFVSSS5cbiAgICB2YXIgaGVhZGVyO1xuICAgIHZhciBoZWFkZXJzID0gdGhpcy5fb3B0aW9ucy5oZWFkZXJzO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAzMDcgJiYgISh0aGlzLl9vcHRpb25zLm1ldGhvZCBpbiBTQUZFX01FVEhPRFMpKSB7XG4gICAgICB0aGlzLl9vcHRpb25zLm1ldGhvZCA9IFwiR0VUXCI7XG4gICAgICAvLyBEcm9wIGEgcG9zc2libGUgZW50aXR5IGFuZCBoZWFkZXJzIHJlbGF0ZWQgdG8gaXRcbiAgICAgIHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycyA9IFtdO1xuICAgICAgZm9yIChoZWFkZXIgaW4gaGVhZGVycykge1xuICAgICAgICBpZiAoL15jb250ZW50LS9pLnRlc3QoaGVhZGVyKSkge1xuICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzW2hlYWRlcl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEcm9wIHRoZSBIb3N0IGhlYWRlciwgYXMgdGhlIHJlZGlyZWN0IG1pZ2h0IGxlYWQgdG8gYSBkaWZmZXJlbnQgaG9zdFxuICAgIGlmICghdGhpcy5faXNSZWRpcmVjdCkge1xuICAgICAgZm9yIChoZWFkZXIgaW4gaGVhZGVycykge1xuICAgICAgICBpZiAoL15ob3N0JC9pLnRlc3QoaGVhZGVyKSkge1xuICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzW2hlYWRlcl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIHRoZSByZWRpcmVjdGVkIHJlcXVlc3RcbiAgICB2YXIgcmVkaXJlY3RVcmwgPSB1cmwucmVzb2x2ZSh0aGlzLl9jdXJyZW50VXJsLCBsb2NhdGlvbik7XG4gICAgZGVidWcoXCJyZWRpcmVjdGluZyB0b1wiLCByZWRpcmVjdFVybCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vcHRpb25zLCB1cmwucGFyc2UocmVkaXJlY3RVcmwpKTtcbiAgICB0aGlzLl9pc1JlZGlyZWN0ID0gdHJ1ZTtcbiAgICB0aGlzLl9wZXJmb3JtUmVxdWVzdCgpO1xuXG4gICAgLy8gRGlzY2FyZCB0aGUgcmVtYWluZGVyIG9mIHRoZSByZXNwb25zZSB0byBhdm9pZCB3YWl0aW5nIGZvciBkYXRhXG4gICAgcmVzcG9uc2UuZGVzdHJveSgpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRoZSByZXNwb25zZSBpcyBub3QgYSByZWRpcmVjdDsgcmV0dXJuIGl0IGFzLWlzXG4gICAgcmVzcG9uc2UucmVzcG9uc2VVcmwgPSB0aGlzLl9jdXJyZW50VXJsO1xuICAgIHJlc3BvbnNlLnJlZGlyZWN0cyA9IHRoaXMuX3JlZGlyZWN0cztcbiAgICB0aGlzLmVtaXQoXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG5cbiAgICAvLyBDbGVhbiB1cFxuICAgIHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycyA9IFtdO1xuICB9XG59O1xuXG4vLyBXcmFwcyB0aGUga2V5L3ZhbHVlIG9iamVjdCBvZiBwcm90b2NvbHMgd2l0aCByZWRpcmVjdCBmdW5jdGlvbmFsaXR5XG5mdW5jdGlvbiB3cmFwKHByb3RvY29scykge1xuICAvLyBEZWZhdWx0IHNldHRpbmdzXG4gIHZhciBleHBvcnRzID0ge1xuICAgIG1heFJlZGlyZWN0czogMjEsXG4gICAgbWF4Qm9keUxlbmd0aDogMTAgKiAxMDI0ICogMTAyNCxcbiAgfTtcblxuICAvLyBXcmFwIGVhY2ggcHJvdG9jb2xcbiAgdmFyIG5hdGl2ZVByb3RvY29scyA9IHt9O1xuICBPYmplY3Qua2V5cyhwcm90b2NvbHMpLmZvckVhY2goZnVuY3Rpb24gKHNjaGVtZSkge1xuICAgIHZhciBwcm90b2NvbCA9IHNjaGVtZSArIFwiOlwiO1xuICAgIHZhciBuYXRpdmVQcm90b2NvbCA9IG5hdGl2ZVByb3RvY29sc1twcm90b2NvbF0gPSBwcm90b2NvbHNbc2NoZW1lXTtcbiAgICB2YXIgd3JhcHBlZFByb3RvY29sID0gZXhwb3J0c1tzY2hlbWVdID0gT2JqZWN0LmNyZWF0ZShuYXRpdmVQcm90b2NvbCk7XG5cbiAgICAvLyBFeGVjdXRlcyBhIHJlcXVlc3QsIGZvbGxvd2luZyByZWRpcmVjdHNcbiAgICB3cmFwcGVkUHJvdG9jb2wucmVxdWVzdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG9wdGlvbnMgPSB1cmwucGFyc2Uob3B0aW9ucyk7XG4gICAgICAgIG9wdGlvbnMubWF4UmVkaXJlY3RzID0gZXhwb3J0cy5tYXhSZWRpcmVjdHM7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIHByb3RvY29sOiBwcm90b2NvbCxcbiAgICAgICAgICBtYXhSZWRpcmVjdHM6IGV4cG9ydHMubWF4UmVkaXJlY3RzLFxuICAgICAgICAgIG1heEJvZHlMZW5ndGg6IGV4cG9ydHMubWF4Qm9keUxlbmd0aCxcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBvcHRpb25zLm5hdGl2ZVByb3RvY29scyA9IG5hdGl2ZVByb3RvY29scztcbiAgICAgIGFzc2VydC5lcXVhbChvcHRpb25zLnByb3RvY29sLCBwcm90b2NvbCwgXCJwcm90b2NvbCBtaXNtYXRjaFwiKTtcbiAgICAgIGRlYnVnKFwib3B0aW9uc1wiLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBuZXcgUmVkaXJlY3RhYmxlUmVxdWVzdChvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIC8vIEV4ZWN1dGVzIGEgR0VUIHJlcXVlc3QsIGZvbGxvd2luZyByZWRpcmVjdHNcbiAgICB3cmFwcGVkUHJvdG9jb2wuZ2V0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IHdyYXBwZWRQcm90b2NvbC5yZXF1ZXN0KG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgIHJlcXVlc3QuZW5kKCk7XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIGV4cG9ydHM7XG59XG5cbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gd3JhcCh7IGh0dHA6IGh0dHAsIGh0dHBzOiBodHRwcyB9KTtcbm1vZHVsZS5leHBvcnRzLndyYXAgPSB3cmFwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0cy5pbnN0YW5jZXMgPSBbXTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuLyoqXG4gKiBTZWxlY3QgYSBjb2xvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICB2YXIgaGFzaCA9IDAsIGk7XG5cbiAgZm9yIChpIGluIG5hbWVzcGFjZSkge1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgdmFyIHByZXZUaW1lO1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuICBkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICBleHBvcnRzLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuICByZXR1cm4gZGVidWc7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB2YXIgaW5kZXggPSBleHBvcnRzLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgZXhwb3J0cy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgaTtcbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4cG9ydHMuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGluc3RhbmNlID0gZXhwb3J0cy5pbnN0YW5jZXNbaV07XG4gICAgaW5zdGFuY2UuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgaWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3VybCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJ1xuICBdO1xuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMilcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgZnVuY3Rpb24gb3RoZXJLZXlzRGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJcclxuLy8gaHR0cHM6Ly93d3cuZWYuY29tL3d3ZW4vZW5nbGlzaC1yZXNvdXJjZXMvZW5nbGlzaC12b2NhYnVsYXJ5L3RvcC0zMDAwLXdvcmRzL1xyXG5cclxuZXhwb3J0IGNvbnN0IFRoZU1vc3RDb21tb24zMDAwID0ge1xyXG4gICAgYSA6IDEsXHJcbiAgICBhYmFuZG9uIDogMSxcclxuICAgIGFiaWxpdHkgOiAxLFxyXG4gICAgYWJsZSA6IDEsXHJcbiAgICBhYm9ydGlvbiA6IDEsXHJcbiAgICBhYm91dCA6IDEsXHJcbiAgICBhYm92ZSA6IDEsXHJcbiAgICBhYnJvYWQgOiAxLFxyXG4gICAgYWJzZW5jZSA6IDEsXHJcbiAgICBhYnNvbHV0ZSA6IDEsXHJcbiAgICBhYnNvbHV0ZWx5IDogMSxcclxuICAgIGFic29yYiA6IDEsXHJcbiAgICBhYnVzZSA6IDEsXHJcbiAgICBhY2FkZW1pYyA6IDEsXHJcbiAgICBhY2NlcHQgOiAxLFxyXG4gICAgYWNjZXNzIDogMSxcclxuICAgIGFjY2lkZW50IDogMSxcclxuICAgIGFjY29tcGFueSA6IDEsXHJcbiAgICBhY2NvbXBsaXNoIDogMSxcclxuICAgIGFjY29yZGluZyA6IDEsXHJcbiAgICBhY2NvdW50IDogMSxcclxuICAgIGFjY3VyYXRlIDogMSxcclxuICAgIGFjY3VzZSA6IDEsXHJcbiAgICBhY2hpZXZlIDogMSxcclxuICAgIGFjaGlldmVtZW50IDogMSxcclxuICAgIGFjaWQgOiAxLFxyXG4gICAgYWNrbm93bGVkZ2UgOiAxLFxyXG4gICAgYWNxdWlyZSA6IDEsXHJcbiAgICBhY3Jvc3MgOiAxLFxyXG4gICAgYWN0IDogMSxcclxuICAgIGFjdGlvbiA6IDEsXHJcbiAgICBhY3RpdmUgOiAxLFxyXG4gICAgYWN0aXZpc3QgOiAxLFxyXG4gICAgYWN0aXZpdHkgOiAxLFxyXG4gICAgYWN0b3IgOiAxLFxyXG4gICAgYWN0cmVzcyA6IDEsXHJcbiAgICBhY3R1YWwgOiAxLFxyXG4gICAgYWN0dWFsbHkgOiAxLFxyXG4gICAgYWQgOiAxLFxyXG4gICAgYWRhcHQgOiAxLFxyXG4gICAgYWRkIDogMSxcclxuICAgIGFkZGl0aW9uIDogMSxcclxuICAgIGFkZGl0aW9uYWwgOiAxLFxyXG4gICAgYWRkcmVzcyA6IDEsXHJcbiAgICBhZGVxdWF0ZSA6IDEsXHJcbiAgICBhZGp1c3QgOiAxLFxyXG4gICAgYWRqdXN0bWVudCA6IDEsXHJcbiAgICBhZG1pbmlzdHJhdGlvbiA6IDEsXHJcbiAgICBhZG1pbmlzdHJhdG9yIDogMSxcclxuICAgIGFkbWlyZSA6IDEsXHJcbiAgICBhZG1pc3Npb24gOiAxLFxyXG4gICAgYWRtaXQgOiAxLFxyXG4gICAgYWRvbGVzY2VudCA6IDEsXHJcbiAgICBhZG9wdCA6IDEsXHJcbiAgICBhZHVsdCA6IDEsXHJcbiAgICBhZHZhbmNlIDogMSxcclxuICAgIGFkdmFuY2VkIDogMSxcclxuICAgIGFkdmFudGFnZSA6IDEsXHJcbiAgICBhZHZlbnR1cmUgOiAxLFxyXG4gICAgYWR2ZXJ0aXNpbmcgOiAxLFxyXG4gICAgYWR2aWNlIDogMSxcclxuICAgIGFkdmlzZSA6IDEsXHJcbiAgICBhZHZpc2VyIDogMSxcclxuICAgIGFkdm9jYXRlIDogMSxcclxuICAgIGFmZmFpciA6IDEsXHJcbiAgICBhZmZlY3QgOiAxLFxyXG4gICAgYWZmb3JkIDogMSxcclxuICAgIGFmcmFpZCA6IDEsXHJcbiAgICBBZnJpY2FuIDogMSxcclxuICAgIFwiQWZyaWNhbi1BbWVyaWNhblwiIDogMSxcclxuICAgIGFmdGVyIDogMSxcclxuICAgIGFmdGVybm9vbiA6IDEsXHJcbiAgICBhZ2FpbiA6IDEsXHJcbiAgICBhZ2FpbnN0IDogMSxcclxuICAgIGFnZSA6IDEsXHJcbiAgICBhZ2VuY3kgOiAxLFxyXG4gICAgYWdlbmRhIDogMSxcclxuICAgIGFnZW50IDogMSxcclxuICAgIGFnZ3Jlc3NpdmUgOiAxLFxyXG4gICAgYWdvIDogMSxcclxuICAgIGFncmVlIDogMSxcclxuICAgIGFncmVlbWVudCA6IDEsXHJcbiAgICBhZ3JpY3VsdHVyYWwgOiAxLFxyXG4gICAgYWggOiAxLFxyXG4gICAgYWhlYWQgOiAxLFxyXG4gICAgYWlkIDogMSxcclxuICAgIGFpZGUgOiAxLFxyXG4gICAgQUlEUyA6IDEsXHJcbiAgICBhaW0gOiAxLFxyXG4gICAgYWlyIDogMSxcclxuICAgIGFpcmNyYWZ0IDogMSxcclxuICAgIGFpcmxpbmUgOiAxLFxyXG4gICAgYWlycG9ydCA6IDEsXHJcbiAgICBhbGJ1bSA6IDEsXHJcbiAgICBhbGNvaG9sIDogMSxcclxuICAgIGFsaXZlIDogMSxcclxuICAgIGFsbCA6IDEsXHJcbiAgICBhbGxpYW5jZSA6IDEsXHJcbiAgICBhbGxvdyA6IDEsXHJcbiAgICBhbGx5IDogMSxcclxuICAgIGFsbW9zdCA6IDEsXHJcbiAgICBhbG9uZSA6IDEsXHJcbiAgICBhbG9uZyA6IDEsXHJcbiAgICBhbHJlYWR5IDogMSxcclxuICAgIGFsc28gOiAxLFxyXG4gICAgYWx0ZXIgOiAxLFxyXG4gICAgYWx0ZXJuYXRpdmUgOiAxLFxyXG4gICAgYWx0aG91Z2ggOiAxLFxyXG4gICAgYWx3YXlzIDogMSxcclxuICAgIEFNIDogMSxcclxuICAgIGFtYXppbmcgOiAxLFxyXG4gICAgQW1lcmljYW4gOiAxLFxyXG4gICAgYW1vbmcgOiAxLFxyXG4gICAgYW1vdW50IDogMSxcclxuICAgIGFuYWx5c2lzIDogMSxcclxuICAgIGFuYWx5c3QgOiAxLFxyXG4gICAgYW5hbHl6ZSA6IDEsXHJcbiAgICBhbmNpZW50IDogMSxcclxuICAgIGFuZCA6IDEsXHJcbiAgICBhbmdlciA6IDEsXHJcbiAgICBhbmdsZSA6IDEsXHJcbiAgICBhbmdyeSA6IDEsXHJcbiAgICBhbmltYWwgOiAxLFxyXG4gICAgYW5uaXZlcnNhcnkgOiAxLFxyXG4gICAgYW5ub3VuY2UgOiAxLFxyXG4gICAgYW5udWFsIDogMSxcclxuICAgIGFub3RoZXIgOiAxLFxyXG4gICAgYW5zd2VyIDogMSxcclxuICAgIGFudGljaXBhdGUgOiAxLFxyXG4gICAgYW54aWV0eSA6IDEsXHJcbiAgICBhbnkgOiAxLFxyXG4gICAgYW55Ym9keSA6IDEsXHJcbiAgICBhbnltb3JlIDogMSxcclxuICAgIGFueW9uZSA6IDEsXHJcbiAgICBhbnl0aGluZyA6IDEsXHJcbiAgICBhbnl3YXkgOiAxLFxyXG4gICAgYW55d2hlcmUgOiAxLFxyXG4gICAgYXBhcnQgOiAxLFxyXG4gICAgYXBhcnRtZW50IDogMSxcclxuICAgIGFwcGFyZW50IDogMSxcclxuICAgIGFwcGFyZW50bHkgOiAxLFxyXG4gICAgYXBwZWFsIDogMSxcclxuICAgIGFwcGVhciA6IDEsXHJcbiAgICBhcHBlYXJhbmNlIDogMSxcclxuICAgIGFwcGxlIDogMSxcclxuICAgIGFwcGxpY2F0aW9uIDogMSxcclxuICAgIGFwcGx5IDogMSxcclxuICAgIGFwcG9pbnQgOiAxLFxyXG4gICAgYXBwb2ludG1lbnQgOiAxLFxyXG4gICAgYXBwcmVjaWF0ZSA6IDEsXHJcbiAgICBhcHByb2FjaCA6IDEsXHJcbiAgICBhcHByb3ByaWF0ZSA6IDEsXHJcbiAgICBhcHByb3ZhbCA6IDEsXHJcbiAgICBhcHByb3ZlIDogMSxcclxuICAgIGFwcHJveGltYXRlbHkgOiAxLFxyXG4gICAgQXJhYiA6IDEsXHJcbiAgICBhcmNoaXRlY3QgOiAxLFxyXG4gICAgYXJlYSA6IDEsXHJcbiAgICBhcmd1ZSA6IDEsXHJcbiAgICBhcmd1bWVudCA6IDEsXHJcbiAgICBhcmlzZSA6IDEsXHJcbiAgICBhcm0gOiAxLFxyXG4gICAgYXJtZWQgOiAxLFxyXG4gICAgYXJteSA6IDEsXHJcbiAgICBhcm91bmQgOiAxLFxyXG4gICAgYXJyYW5nZSA6IDEsXHJcbiAgICBhcnJhbmdlbWVudCA6IDEsXHJcbiAgICBhcnJlc3QgOiAxLFxyXG4gICAgYXJyaXZhbCA6IDEsXHJcbiAgICBhcnJpdmUgOiAxLFxyXG4gICAgYXJ0IDogMSxcclxuICAgIGFydGljbGUgOiAxLFxyXG4gICAgYXJ0aXN0IDogMSxcclxuICAgIGFydGlzdGljIDogMSxcclxuICAgIGFzIDogMSxcclxuICAgIEFzaWFuIDogMSxcclxuICAgIGFzaWRlIDogMSxcclxuICAgIGFzayA6IDEsXHJcbiAgICBhc2xlZXAgOiAxLFxyXG4gICAgYXNwZWN0IDogMSxcclxuICAgIGFzc2F1bHQgOiAxLFxyXG4gICAgYXNzZXJ0IDogMSxcclxuICAgIGFzc2VzcyA6IDEsXHJcbiAgICBhc3Nlc3NtZW50IDogMSxcclxuICAgIGFzc2V0IDogMSxcclxuICAgIGFzc2lnbiA6IDEsXHJcbiAgICBhc3NpZ25tZW50IDogMSxcclxuICAgIGFzc2lzdCA6IDEsXHJcbiAgICBhc3Npc3RhbmNlIDogMSxcclxuICAgIGFzc2lzdGFudCA6IDEsXHJcbiAgICBhc3NvY2lhdGUgOiAxLFxyXG4gICAgYXNzb2NpYXRpb24gOiAxLFxyXG4gICAgYXNzdW1lIDogMSxcclxuICAgIGFzc3VtcHRpb24gOiAxLFxyXG4gICAgYXNzdXJlIDogMSxcclxuICAgIGF0IDogMSxcclxuICAgIGF0aGxldGUgOiAxLFxyXG4gICAgYXRobGV0aWMgOiAxLFxyXG4gICAgYXRtb3NwaGVyZSA6IDEsXHJcbiAgICBhdHRhY2ggOiAxLFxyXG4gICAgYXR0YWNrIDogMSxcclxuICAgIGF0dGVtcHQgOiAxLFxyXG4gICAgYXR0ZW5kIDogMSxcclxuICAgIGF0dGVudGlvbiA6IDEsXHJcbiAgICBhdHRpdHVkZSA6IDEsXHJcbiAgICBhdHRvcm5leSA6IDEsXHJcbiAgICBhdHRyYWN0IDogMSxcclxuICAgIGF0dHJhY3RpdmUgOiAxLFxyXG4gICAgYXR0cmlidXRlIDogMSxcclxuICAgIGF1ZGllbmNlIDogMSxcclxuICAgIGF1dGhvciA6IDEsXHJcbiAgICBhdXRob3JpdHkgOiAxLFxyXG4gICAgYXV0byA6IDEsXHJcbiAgICBhdmFpbGFibGUgOiAxLFxyXG4gICAgYXZlcmFnZSA6IDEsXHJcbiAgICBhdm9pZCA6IDEsXHJcbiAgICBhd2FyZCA6IDEsXHJcbiAgICBhd2FyZSA6IDEsXHJcbiAgICBhd2FyZW5lc3MgOiAxLFxyXG4gICAgYXdheSA6IDEsXHJcbiAgICBhd2Z1bCA6IDEsXHJcbiAgICBiYWJ5IDogMSxcclxuICAgIGJhY2sgOiAxLFxyXG4gICAgYmFja2dyb3VuZCA6IDEsXHJcbiAgICBiYWQgOiAxLFxyXG4gICAgYmFkbHkgOiAxLFxyXG4gICAgYmFnIDogMSxcclxuICAgIGJha2UgOiAxLFxyXG4gICAgYmFsYW5jZSA6IDEsXHJcbiAgICBiYWxsIDogMSxcclxuICAgIGJhbiA6IDEsXHJcbiAgICBiYW5kIDogMSxcclxuICAgIGJhbmsgOiAxLFxyXG4gICAgYmFyIDogMSxcclxuICAgIGJhcmVseSA6IDEsXHJcbiAgICBiYXJyZWwgOiAxLFxyXG4gICAgYmFycmllciA6IDEsXHJcbiAgICBiYXNlIDogMSxcclxuICAgIGJhc2ViYWxsIDogMSxcclxuICAgIGJhc2ljIDogMSxcclxuICAgIGJhc2ljYWxseSA6IDEsXHJcbiAgICBiYXNpcyA6IDEsXHJcbiAgICBiYXNrZXQgOiAxLFxyXG4gICAgYmFza2V0YmFsbCA6IDEsXHJcbiAgICBiYXRocm9vbSA6IDEsXHJcbiAgICBiYXR0ZXJ5IDogMSxcclxuICAgIGJhdHRsZSA6IDEsXHJcbiAgICBiZSA6IDEsXHJcbiAgICBiZWFjaCA6IDEsXHJcbiAgICBiZWFuIDogMSxcclxuICAgIGJlYXIgOiAxLFxyXG4gICAgYmVhdCA6IDEsXHJcbiAgICBiZWF1dGlmdWwgOiAxLFxyXG4gICAgYmVhdXR5IDogMSxcclxuICAgIGJlY2F1c2UgOiAxLFxyXG4gICAgYmVjb21lIDogMSxcclxuICAgIGJlZCA6IDEsXHJcbiAgICBiZWRyb29tIDogMSxcclxuICAgIGJlZXIgOiAxLFxyXG4gICAgYmVmb3JlIDogMSxcclxuICAgIGJlZ2luIDogMSxcclxuICAgIGJlZ2lubmluZyA6IDEsXHJcbiAgICBiZWhhdmlvciA6IDEsXHJcbiAgICBiZWhpbmQgOiAxLFxyXG4gICAgYmVpbmcgOiAxLFxyXG4gICAgYmVsaWVmIDogMSxcclxuICAgIGJlbGlldmUgOiAxLFxyXG4gICAgYmVsbCA6IDEsXHJcbiAgICBiZWxvbmcgOiAxLFxyXG4gICAgYmVsb3cgOiAxLFxyXG4gICAgYmVsdCA6IDEsXHJcbiAgICBiZW5jaCA6IDEsXHJcbiAgICBiZW5kIDogMSxcclxuICAgIGJlbmVhdGggOiAxLFxyXG4gICAgYmVuZWZpdCA6IDEsXHJcbiAgICBiZXNpZGUgOiAxLFxyXG4gICAgYmVzaWRlcyA6IDEsXHJcbiAgICBiZXN0IDogMSxcclxuICAgIGJldCA6IDEsXHJcbiAgICBiZXR0ZXIgOiAxLFxyXG4gICAgYmV0d2VlbiA6IDEsXHJcbiAgICBiZXlvbmQgOiAxLFxyXG4gICAgQmlibGUgOiAxLFxyXG4gICAgYmlnIDogMSxcclxuICAgIGJpa2UgOiAxLFxyXG4gICAgYmlsbCA6IDEsXHJcbiAgICBiaWxsaW9uIDogMSxcclxuICAgIGJpbmQgOiAxLFxyXG4gICAgYmlvbG9naWNhbCA6IDEsXHJcbiAgICBiaXJkIDogMSxcclxuICAgIGJpcnRoIDogMSxcclxuICAgIGJpcnRoZGF5IDogMSxcclxuICAgIGJpdCA6IDEsXHJcbiAgICBiaXRlIDogMSxcclxuICAgIGJsYWNrIDogMSxcclxuICAgIGJsYWRlIDogMSxcclxuICAgIGJsYW1lIDogMSxcclxuICAgIGJsYW5rZXQgOiAxLFxyXG4gICAgYmxpbmQgOiAxLFxyXG4gICAgYmxvY2sgOiAxLFxyXG4gICAgYmxvb2QgOiAxLFxyXG4gICAgYmxvdyA6IDEsXHJcbiAgICBibHVlIDogMSxcclxuICAgIGJvYXJkIDogMSxcclxuICAgIGJvYXQgOiAxLFxyXG4gICAgYm9keSA6IDEsXHJcbiAgICBib21iIDogMSxcclxuICAgIGJvbWJpbmcgOiAxLFxyXG4gICAgYm9uZCA6IDEsXHJcbiAgICBib25lIDogMSxcclxuICAgIGJvb2sgOiAxLFxyXG4gICAgYm9vbSA6IDEsXHJcbiAgICBib290IDogMSxcclxuICAgIGJvcmRlciA6IDEsXHJcbiAgICBib3JuIDogMSxcclxuICAgIGJvcnJvdyA6IDEsXHJcbiAgICBib3NzIDogMSxcclxuICAgIGJvdGggOiAxLFxyXG4gICAgYm90aGVyIDogMSxcclxuICAgIGJvdHRsZSA6IDEsXHJcbiAgICBib3R0b20gOiAxLFxyXG4gICAgYm91bmRhcnkgOiAxLFxyXG4gICAgYm93bCA6IDEsXHJcbiAgICBib3ggOiAxLFxyXG4gICAgYm95IDogMSxcclxuICAgIGJveWZyaWVuZCA6IDEsXHJcbiAgICBicmFpbiA6IDEsXHJcbiAgICBicmFuY2ggOiAxLFxyXG4gICAgYnJhbmQgOiAxLFxyXG4gICAgYnJlYWQgOiAxLFxyXG4gICAgYnJlYWsgOiAxLFxyXG4gICAgYnJlYWtmYXN0IDogMSxcclxuICAgIGJyZWFzdCA6IDEsXHJcbiAgICBicmVhdGggOiAxLFxyXG4gICAgYnJlYXRoZSA6IDEsXHJcbiAgICBicmljayA6IDEsXHJcbiAgICBicmlkZ2UgOiAxLFxyXG4gICAgYnJpZWYgOiAxLFxyXG4gICAgYnJpZWZseSA6IDEsXHJcbiAgICBicmlnaHQgOiAxLFxyXG4gICAgYnJpbGxpYW50IDogMSxcclxuICAgIGJyaW5nIDogMSxcclxuICAgIEJyaXRpc2ggOiAxLFxyXG4gICAgYnJvYWQgOiAxLFxyXG4gICAgYnJva2VuIDogMSxcclxuICAgIGJyb3RoZXIgOiAxLFxyXG4gICAgYnJvd24gOiAxLFxyXG4gICAgYnJ1c2ggOiAxLFxyXG4gICAgYnVjayA6IDEsXHJcbiAgICBidWRnZXQgOiAxLFxyXG4gICAgYnVpbGQgOiAxLFxyXG4gICAgYnVpbGRpbmcgOiAxLFxyXG4gICAgYnVsbGV0IDogMSxcclxuICAgIGJ1bmNoIDogMSxcclxuICAgIGJ1cmRlbiA6IDEsXHJcbiAgICBidXJuIDogMSxcclxuICAgIGJ1cnkgOiAxLFxyXG4gICAgYnVzIDogMSxcclxuICAgIGJ1c2luZXNzIDogMSxcclxuICAgIGJ1c3kgOiAxLFxyXG4gICAgYnV0IDogMSxcclxuICAgIGJ1dHRlciA6IDEsXHJcbiAgICBidXR0b24gOiAxLFxyXG4gICAgYnV5IDogMSxcclxuICAgIGJ1eWVyIDogMSxcclxuICAgIGJ5IDogMSxcclxuICAgIGNhYmluIDogMSxcclxuICAgIGNhYmluZXQgOiAxLFxyXG4gICAgY2FibGUgOiAxLFxyXG4gICAgY2FrZSA6IDEsXHJcbiAgICBjYWxjdWxhdGUgOiAxLFxyXG4gICAgY2FsbCA6IDEsXHJcbiAgICBjYW1lcmEgOiAxLFxyXG4gICAgY2FtcCA6IDEsXHJcbiAgICBjYW1wYWlnbiA6IDEsXHJcbiAgICBjYW1wdXMgOiAxLFxyXG4gICAgY2FuIDogMSxcclxuICAgIENhbmFkaWFuIDogMSxcclxuICAgIGNhbmNlciA6IDEsXHJcbiAgICBjYW5kaWRhdGUgOiAxLFxyXG4gICAgY2FwIDogMSxcclxuICAgIGNhcGFiaWxpdHkgOiAxLFxyXG4gICAgY2FwYWJsZSA6IDEsXHJcbiAgICBjYXBhY2l0eSA6IDEsXHJcbiAgICBjYXBpdGFsIDogMSxcclxuICAgIGNhcHRhaW4gOiAxLFxyXG4gICAgY2FwdHVyZSA6IDEsXHJcbiAgICBjYXIgOiAxLFxyXG4gICAgY2FyYm9uIDogMSxcclxuICAgIGNhcmQgOiAxLFxyXG4gICAgY2FyZSA6IDEsXHJcbiAgICBjYXJlZXIgOiAxLFxyXG4gICAgY2FyZWZ1bCA6IDEsXHJcbiAgICBjYXJlZnVsbHkgOiAxLFxyXG4gICAgY2FycmllciA6IDEsXHJcbiAgICBjYXJyeSA6IDEsXHJcbiAgICBjYXNlIDogMSxcclxuICAgIGNhc2ggOiAxLFxyXG4gICAgY2FzdCA6IDEsXHJcbiAgICBjYXQgOiAxLFxyXG4gICAgY2F0Y2ggOiAxLFxyXG4gICAgY2F0ZWdvcnkgOiAxLFxyXG4gICAgQ2F0aG9saWMgOiAxLFxyXG4gICAgY2F1c2UgOiAxLFxyXG4gICAgY2VpbGluZyA6IDEsXHJcbiAgICBjZWxlYnJhdGUgOiAxLFxyXG4gICAgY2VsZWJyYXRpb24gOiAxLFxyXG4gICAgY2VsZWJyaXR5IDogMSxcclxuICAgIGNlbGwgOiAxLFxyXG4gICAgY2VudGVyIDogMSxcclxuICAgIGNlbnRyYWwgOiAxLFxyXG4gICAgY2VudHVyeSA6IDEsXHJcbiAgICBDRU8gOiAxLFxyXG4gICAgY2VyZW1vbnkgOiAxLFxyXG4gICAgY2VydGFpbiA6IDEsXHJcbiAgICBjZXJ0YWlubHkgOiAxLFxyXG4gICAgY2hhaW4gOiAxLFxyXG4gICAgY2hhaXIgOiAxLFxyXG4gICAgY2hhaXJtYW4gOiAxLFxyXG4gICAgY2hhbGxlbmdlIDogMSxcclxuICAgIGNoYW1iZXIgOiAxLFxyXG4gICAgY2hhbXBpb24gOiAxLFxyXG4gICAgY2hhbXBpb25zaGlwIDogMSxcclxuICAgIGNoYW5jZSA6IDEsXHJcbiAgICBjaGFuZ2UgOiAxLFxyXG4gICAgY2hhbmdpbmcgOiAxLFxyXG4gICAgY2hhbm5lbCA6IDEsXHJcbiAgICBjaGFwdGVyIDogMSxcclxuICAgIGNoYXJhY3RlciA6IDEsXHJcbiAgICBjaGFyYWN0ZXJpc3RpYyA6IDEsXHJcbiAgICBjaGFyYWN0ZXJpemUgOiAxLFxyXG4gICAgY2hhcmdlIDogMSxcclxuICAgIGNoYXJpdHkgOiAxLFxyXG4gICAgY2hhcnQgOiAxLFxyXG4gICAgY2hhc2UgOiAxLFxyXG4gICAgY2hlYXAgOiAxLFxyXG4gICAgY2hlY2sgOiAxLFxyXG4gICAgY2hlZWsgOiAxLFxyXG4gICAgY2hlZXNlIDogMSxcclxuICAgIGNoZWYgOiAxLFxyXG4gICAgY2hlbWljYWwgOiAxLFxyXG4gICAgY2hlc3QgOiAxLFxyXG4gICAgY2hpY2tlbiA6IDEsXHJcbiAgICBjaGllZiA6IDEsXHJcbiAgICBjaGlsZCA6IDEsXHJcbiAgICBjaGlsZGhvb2QgOiAxLFxyXG4gICAgQ2hpbmVzZSA6IDEsXHJcbiAgICBjaGlwIDogMSxcclxuICAgIGNob2NvbGF0ZSA6IDEsXHJcbiAgICBjaG9pY2UgOiAxLFxyXG4gICAgY2hvbGVzdGVyb2wgOiAxLFxyXG4gICAgY2hvb3NlIDogMSxcclxuICAgIENocmlzdGlhbiA6IDEsXHJcbiAgICBDaHJpc3RtYXMgOiAxLFxyXG4gICAgY2h1cmNoIDogMSxcclxuICAgIGNpZ2FyZXR0ZSA6IDEsXHJcbiAgICBjaXJjbGUgOiAxLFxyXG4gICAgY2lyY3Vtc3RhbmNlIDogMSxcclxuICAgIGNpdGUgOiAxLFxyXG4gICAgY2l0aXplbiA6IDEsXHJcbiAgICBjaXR5IDogMSxcclxuICAgIGNpdmlsIDogMSxcclxuICAgIGNpdmlsaWFuIDogMSxcclxuICAgIGNsYWltIDogMSxcclxuICAgIGNsYXNzIDogMSxcclxuICAgIGNsYXNzaWMgOiAxLFxyXG4gICAgY2xhc3Nyb29tIDogMSxcclxuICAgIGNsZWFuIDogMSxcclxuICAgIGNsZWFyIDogMSxcclxuICAgIGNsZWFybHkgOiAxLFxyXG4gICAgY2xpZW50IDogMSxcclxuICAgIGNsaW1hdGUgOiAxLFxyXG4gICAgY2xpbWIgOiAxLFxyXG4gICAgY2xpbmljIDogMSxcclxuICAgIGNsaW5pY2FsIDogMSxcclxuICAgIGNsb2NrIDogMSxcclxuICAgIGNsb3NlIDogMSxcclxuICAgIGNsb3NlbHkgOiAxLFxyXG4gICAgY2xvc2VyIDogMSxcclxuICAgIGNsb3RoZXMgOiAxLFxyXG4gICAgY2xvdGhpbmcgOiAxLFxyXG4gICAgY2xvdWQgOiAxLFxyXG4gICAgY2x1YiA6IDEsXHJcbiAgICBjbHVlIDogMSxcclxuICAgIGNsdXN0ZXIgOiAxLFxyXG4gICAgY29hY2ggOiAxLFxyXG4gICAgY29hbCA6IDEsXHJcbiAgICBjb2FsaXRpb24gOiAxLFxyXG4gICAgY29hc3QgOiAxLFxyXG4gICAgY29hdCA6IDEsXHJcbiAgICBjb2RlIDogMSxcclxuICAgIGNvZmZlZSA6IDEsXHJcbiAgICBjb2duaXRpdmUgOiAxLFxyXG4gICAgY29sZCA6IDEsXHJcbiAgICBjb2xsYXBzZSA6IDEsXHJcbiAgICBjb2xsZWFndWUgOiAxLFxyXG4gICAgY29sbGVjdCA6IDEsXHJcbiAgICBjb2xsZWN0aW9uIDogMSxcclxuICAgIGNvbGxlY3RpdmUgOiAxLFxyXG4gICAgY29sbGVnZSA6IDEsXHJcbiAgICBjb2xvbmlhbCA6IDEsXHJcbiAgICBjb2xvciA6IDEsXHJcbiAgICBjb2x1bW4gOiAxLFxyXG4gICAgY29tYmluYXRpb24gOiAxLFxyXG4gICAgY29tYmluZSA6IDEsXHJcbiAgICBjb21lIDogMSxcclxuICAgIGNvbWVkeSA6IDEsXHJcbiAgICBjb21mb3J0IDogMSxcclxuICAgIGNvbWZvcnRhYmxlIDogMSxcclxuICAgIGNvbW1hbmQgOiAxLFxyXG4gICAgY29tbWFuZGVyIDogMSxcclxuICAgIGNvbW1lbnQgOiAxLFxyXG4gICAgY29tbWVyY2lhbCA6IDEsXHJcbiAgICBjb21taXNzaW9uIDogMSxcclxuICAgIGNvbW1pdCA6IDEsXHJcbiAgICBjb21taXRtZW50IDogMSxcclxuICAgIGNvbW1pdHRlZSA6IDEsXHJcbiAgICBjb21tb24gOiAxLFxyXG4gICAgY29tbXVuaWNhdGUgOiAxLFxyXG4gICAgY29tbXVuaWNhdGlvbiA6IDEsXHJcbiAgICBjb21tdW5pdHkgOiAxLFxyXG4gICAgY29tcGFueSA6IDEsXHJcbiAgICBjb21wYXJlIDogMSxcclxuICAgIGNvbXBhcmlzb24gOiAxLFxyXG4gICAgY29tcGV0ZSA6IDEsXHJcbiAgICBjb21wZXRpdGlvbiA6IDEsXHJcbiAgICBjb21wZXRpdGl2ZSA6IDEsXHJcbiAgICBjb21wZXRpdG9yIDogMSxcclxuICAgIGNvbXBsYWluIDogMSxcclxuICAgIGNvbXBsYWludCA6IDEsXHJcbiAgICBjb21wbGV0ZSA6IDEsXHJcbiAgICBjb21wbGV0ZWx5IDogMSxcclxuICAgIGNvbXBsZXggOiAxLFxyXG4gICAgY29tcGxpY2F0ZWQgOiAxLFxyXG4gICAgY29tcG9uZW50IDogMSxcclxuICAgIGNvbXBvc2UgOiAxLFxyXG4gICAgY29tcG9zaXRpb24gOiAxLFxyXG4gICAgY29tcHJlaGVuc2l2ZSA6IDEsXHJcbiAgICBjb21wdXRlciA6IDEsXHJcbiAgICBjb25jZW50cmF0ZSA6IDEsXHJcbiAgICBjb25jZW50cmF0aW9uIDogMSxcclxuICAgIGNvbmNlcHQgOiAxLFxyXG4gICAgY29uY2VybiA6IDEsXHJcbiAgICBjb25jZXJuZWQgOiAxLFxyXG4gICAgY29uY2VydCA6IDEsXHJcbiAgICBjb25jbHVkZSA6IDEsXHJcbiAgICBjb25jbHVzaW9uIDogMSxcclxuICAgIGNvbmNyZXRlIDogMSxcclxuICAgIGNvbmRpdGlvbiA6IDEsXHJcbiAgICBjb25kdWN0IDogMSxcclxuICAgIGNvbmZlcmVuY2UgOiAxLFxyXG4gICAgY29uZmlkZW5jZSA6IDEsXHJcbiAgICBjb25maWRlbnQgOiAxLFxyXG4gICAgY29uZmlybSA6IDEsXHJcbiAgICBjb25mbGljdCA6IDEsXHJcbiAgICBjb25mcm9udCA6IDEsXHJcbiAgICBjb25mdXNpb24gOiAxLFxyXG4gICAgQ29uZ3Jlc3MgOiAxLFxyXG4gICAgY29uZ3Jlc3Npb25hbCA6IDEsXHJcbiAgICBjb25uZWN0IDogMSxcclxuICAgIGNvbm5lY3Rpb24gOiAxLFxyXG4gICAgY29uc2Npb3VzbmVzcyA6IDEsXHJcbiAgICBjb25zZW5zdXMgOiAxLFxyXG4gICAgY29uc2VxdWVuY2UgOiAxLFxyXG4gICAgY29uc2VydmF0aXZlIDogMSxcclxuICAgIGNvbnNpZGVyIDogMSxcclxuICAgIGNvbnNpZGVyYWJsZSA6IDEsXHJcbiAgICBjb25zaWRlcmF0aW9uIDogMSxcclxuICAgIGNvbnNpc3QgOiAxLFxyXG4gICAgY29uc2lzdGVudCA6IDEsXHJcbiAgICBjb25zdGFudCA6IDEsXHJcbiAgICBjb25zdGFudGx5IDogMSxcclxuICAgIGNvbnN0aXR1dGUgOiAxLFxyXG4gICAgY29uc3RpdHV0aW9uYWwgOiAxLFxyXG4gICAgY29uc3RydWN0IDogMSxcclxuICAgIGNvbnN0cnVjdGlvbiA6IDEsXHJcbiAgICBjb25zdWx0YW50IDogMSxcclxuICAgIGNvbnN1bWUgOiAxLFxyXG4gICAgY29uc3VtZXIgOiAxLFxyXG4gICAgY29uc3VtcHRpb24gOiAxLFxyXG4gICAgY29udGFjdCA6IDEsXHJcbiAgICBjb250YWluIDogMSxcclxuICAgIGNvbnRhaW5lciA6IDEsXHJcbiAgICBjb250ZW1wb3JhcnkgOiAxLFxyXG4gICAgY29udGVudCA6IDEsXHJcbiAgICBjb250ZXN0IDogMSxcclxuICAgIGNvbnRleHQgOiAxLFxyXG4gICAgY29udGludWUgOiAxLFxyXG4gICAgY29udGludWVkIDogMSxcclxuICAgIGNvbnRyYWN0IDogMSxcclxuICAgIGNvbnRyYXN0IDogMSxcclxuICAgIGNvbnRyaWJ1dGUgOiAxLFxyXG4gICAgY29udHJpYnV0aW9uIDogMSxcclxuICAgIGNvbnRyb2wgOiAxLFxyXG4gICAgY29udHJvdmVyc2lhbCA6IDEsXHJcbiAgICBjb250cm92ZXJzeSA6IDEsXHJcbiAgICBjb252ZW50aW9uIDogMSxcclxuICAgIGNvbnZlbnRpb25hbCA6IDEsXHJcbiAgICBjb252ZXJzYXRpb24gOiAxLFxyXG4gICAgY29udmVydCA6IDEsXHJcbiAgICBjb252aWN0aW9uIDogMSxcclxuICAgIGNvbnZpbmNlIDogMSxcclxuICAgIGNvb2sgOiAxLFxyXG4gICAgY29va2llIDogMSxcclxuICAgIGNvb2tpbmcgOiAxLFxyXG4gICAgY29vbCA6IDEsXHJcbiAgICBjb29wZXJhdGlvbiA6IDEsXHJcbiAgICBjb3AgOiAxLFxyXG4gICAgY29wZSA6IDEsXHJcbiAgICBjb3B5IDogMSxcclxuICAgIGNvcmUgOiAxLFxyXG4gICAgY29ybiA6IDEsXHJcbiAgICBjb3JuZXIgOiAxLFxyXG4gICAgY29ycG9yYXRlIDogMSxcclxuICAgIGNvcnBvcmF0aW9uIDogMSxcclxuICAgIGNvcnJlY3QgOiAxLFxyXG4gICAgY29ycmVzcG9uZGVudCA6IDEsXHJcbiAgICBjb3N0IDogMSxcclxuICAgIGNvdHRvbiA6IDEsXHJcbiAgICBjb3VjaCA6IDEsXHJcbiAgICBjb3VsZCA6IDEsXHJcbiAgICBjb3VuY2lsIDogMSxcclxuICAgIGNvdW5zZWxvciA6IDEsXHJcbiAgICBjb3VudCA6IDEsXHJcbiAgICBjb3VudGVyIDogMSxcclxuICAgIGNvdW50cnkgOiAxLFxyXG4gICAgY291bnR5IDogMSxcclxuICAgIGNvdXBsZSA6IDEsXHJcbiAgICBjb3VyYWdlIDogMSxcclxuICAgIGNvdXJzZSA6IDEsXHJcbiAgICBjb3VydCA6IDEsXHJcbiAgICBjb3VzaW4gOiAxLFxyXG4gICAgY292ZXIgOiAxLFxyXG4gICAgY292ZXJhZ2UgOiAxLFxyXG4gICAgY293IDogMSxcclxuICAgIGNyYWNrIDogMSxcclxuICAgIGNyYWZ0IDogMSxcclxuICAgIGNyYXNoIDogMSxcclxuICAgIGNyYXp5IDogMSxcclxuICAgIGNyZWFtIDogMSxcclxuICAgIGNyZWF0ZSA6IDEsXHJcbiAgICBjcmVhdGlvbiA6IDEsXHJcbiAgICBjcmVhdGl2ZSA6IDEsXHJcbiAgICBjcmVhdHVyZSA6IDEsXHJcbiAgICBjcmVkaXQgOiAxLFxyXG4gICAgY3JldyA6IDEsXHJcbiAgICBjcmltZSA6IDEsXHJcbiAgICBjcmltaW5hbCA6IDEsXHJcbiAgICBjcmlzaXMgOiAxLFxyXG4gICAgY3JpdGVyaWEgOiAxLFxyXG4gICAgY3JpdGljIDogMSxcclxuICAgIGNyaXRpY2FsIDogMSxcclxuICAgIGNyaXRpY2lzbSA6IDEsXHJcbiAgICBjcml0aWNpemUgOiAxLFxyXG4gICAgY3JvcCA6IDEsXHJcbiAgICBjcm9zcyA6IDEsXHJcbiAgICBjcm93ZCA6IDEsXHJcbiAgICBjcnVjaWFsIDogMSxcclxuICAgIGNyeSA6IDEsXHJcbiAgICBjdWx0dXJhbCA6IDEsXHJcbiAgICBjdWx0dXJlIDogMSxcclxuICAgIGN1cCA6IDEsXHJcbiAgICBjdXJpb3VzIDogMSxcclxuICAgIGN1cnJlbnQgOiAxLFxyXG4gICAgY3VycmVudGx5IDogMSxcclxuICAgIGN1cnJpY3VsdW0gOiAxLFxyXG4gICAgY3VzdG9tIDogMSxcclxuICAgIGN1c3RvbWVyIDogMSxcclxuICAgIGN1dCA6IDEsXHJcbiAgICBjeWNsZSA6IDEsXHJcbiAgICBkYWQgOiAxLFxyXG4gICAgZGFpbHkgOiAxLFxyXG4gICAgZGFtYWdlIDogMSxcclxuICAgIGRhbmNlIDogMSxcclxuICAgIGRhbmdlciA6IDEsXHJcbiAgICBkYW5nZXJvdXMgOiAxLFxyXG4gICAgZGFyZSA6IDEsXHJcbiAgICBkYXJrIDogMSxcclxuICAgIGRhcmtuZXNzIDogMSxcclxuICAgIGRhdGEgOiAxLFxyXG4gICAgZGF0ZSA6IDEsXHJcbiAgICBkYXVnaHRlciA6IDEsXHJcbiAgICBkYXkgOiAxLFxyXG4gICAgZGVhZCA6IDEsXHJcbiAgICBkZWFsIDogMSxcclxuICAgIGRlYWxlciA6IDEsXHJcbiAgICBkZWFyIDogMSxcclxuICAgIGRlYXRoIDogMSxcclxuICAgIGRlYmF0ZSA6IDEsXHJcbiAgICBkZWJ0IDogMSxcclxuICAgIGRlY2FkZSA6IDEsXHJcbiAgICBkZWNpZGUgOiAxLFxyXG4gICAgZGVjaXNpb24gOiAxLFxyXG4gICAgZGVjayA6IDEsXHJcbiAgICBkZWNsYXJlIDogMSxcclxuICAgIGRlY2xpbmUgOiAxLFxyXG4gICAgZGVjcmVhc2UgOiAxLFxyXG4gICAgZGVlcCA6IDEsXHJcbiAgICBkZWVwbHkgOiAxLFxyXG4gICAgZGVlciA6IDEsXHJcbiAgICBkZWZlYXQgOiAxLFxyXG4gICAgZGVmZW5kIDogMSxcclxuICAgIGRlZmVuZGFudCA6IDEsXHJcbiAgICBkZWZlbnNlIDogMSxcclxuICAgIGRlZmVuc2l2ZSA6IDEsXHJcbiAgICBkZWZpY2l0IDogMSxcclxuICAgIGRlZmluZSA6IDEsXHJcbiAgICBkZWZpbml0ZWx5IDogMSxcclxuICAgIGRlZmluaXRpb24gOiAxLFxyXG4gICAgZGVncmVlIDogMSxcclxuICAgIGRlbGF5IDogMSxcclxuICAgIGRlbGl2ZXIgOiAxLFxyXG4gICAgZGVsaXZlcnkgOiAxLFxyXG4gICAgZGVtYW5kIDogMSxcclxuICAgIGRlbW9jcmFjeSA6IDEsXHJcbiAgICBEZW1vY3JhdCA6IDEsXHJcbiAgICBkZW1vY3JhdGljIDogMSxcclxuICAgIGRlbW9uc3RyYXRlIDogMSxcclxuICAgIGRlbW9uc3RyYXRpb24gOiAxLFxyXG4gICAgZGVueSA6IDEsXHJcbiAgICBkZXBhcnRtZW50IDogMSxcclxuICAgIGRlcGVuZCA6IDEsXHJcbiAgICBkZXBlbmRlbnQgOiAxLFxyXG4gICAgZGVwZW5kaW5nIDogMSxcclxuICAgIGRlcGljdCA6IDEsXHJcbiAgICBkZXByZXNzaW9uIDogMSxcclxuICAgIGRlcHRoIDogMSxcclxuICAgIGRlcHV0eSA6IDEsXHJcbiAgICBkZXJpdmUgOiAxLFxyXG4gICAgZGVzY3JpYmUgOiAxLFxyXG4gICAgZGVzY3JpcHRpb24gOiAxLFxyXG4gICAgZGVzZXJ0IDogMSxcclxuICAgIGRlc2VydmUgOiAxLFxyXG4gICAgZGVzaWduIDogMSxcclxuICAgIGRlc2lnbmVyIDogMSxcclxuICAgIGRlc2lyZSA6IDEsXHJcbiAgICBkZXNrIDogMSxcclxuICAgIGRlc3BlcmF0ZSA6IDEsXHJcbiAgICBkZXNwaXRlIDogMSxcclxuICAgIGRlc3Ryb3kgOiAxLFxyXG4gICAgZGVzdHJ1Y3Rpb24gOiAxLFxyXG4gICAgZGV0YWlsIDogMSxcclxuICAgIGRldGFpbGVkIDogMSxcclxuICAgIGRldGVjdCA6IDEsXHJcbiAgICBkZXRlcm1pbmUgOiAxLFxyXG4gICAgZGV2ZWxvcCA6IDEsXHJcbiAgICBkZXZlbG9waW5nIDogMSxcclxuICAgIGRldmVsb3BtZW50IDogMSxcclxuICAgIGRldmljZSA6IDEsXHJcbiAgICBkZXZvdGUgOiAxLFxyXG4gICAgZGlhbG9ndWUgOiAxLFxyXG4gICAgZGllIDogMSxcclxuICAgIGRpZXQgOiAxLFxyXG4gICAgZGlmZmVyIDogMSxcclxuICAgIGRpZmZlcmVuY2UgOiAxLFxyXG4gICAgZGlmZmVyZW50IDogMSxcclxuICAgIGRpZmZlcmVudGx5IDogMSxcclxuICAgIGRpZmZpY3VsdCA6IDEsXHJcbiAgICBkaWZmaWN1bHR5IDogMSxcclxuICAgIGRpZyA6IDEsXHJcbiAgICBkaWdpdGFsIDogMSxcclxuICAgIGRpbWVuc2lvbiA6IDEsXHJcbiAgICBkaW5pbmcgOiAxLFxyXG4gICAgZGlubmVyIDogMSxcclxuICAgIGRpcmVjdCA6IDEsXHJcbiAgICBkaXJlY3Rpb24gOiAxLFxyXG4gICAgZGlyZWN0bHkgOiAxLFxyXG4gICAgZGlyZWN0b3IgOiAxLFxyXG4gICAgZGlydCA6IDEsXHJcbiAgICBkaXJ0eSA6IDEsXHJcbiAgICBkaXNhYmlsaXR5IDogMSxcclxuICAgIGRpc2FncmVlIDogMSxcclxuICAgIGRpc2FwcGVhciA6IDEsXHJcbiAgICBkaXNhc3RlciA6IDEsXHJcbiAgICBkaXNjaXBsaW5lIDogMSxcclxuICAgIGRpc2NvdXJzZSA6IDEsXHJcbiAgICBkaXNjb3ZlciA6IDEsXHJcbiAgICBkaXNjb3ZlcnkgOiAxLFxyXG4gICAgZGlzY3JpbWluYXRpb24gOiAxLFxyXG4gICAgZGlzY3VzcyA6IDEsXHJcbiAgICBkaXNjdXNzaW9uIDogMSxcclxuICAgIGRpc2Vhc2UgOiAxLFxyXG4gICAgZGlzaCA6IDEsXHJcbiAgICBkaXNtaXNzIDogMSxcclxuICAgIGRpc29yZGVyIDogMSxcclxuICAgIGRpc3BsYXkgOiAxLFxyXG4gICAgZGlzcHV0ZSA6IDEsXHJcbiAgICBkaXN0YW5jZSA6IDEsXHJcbiAgICBkaXN0YW50IDogMSxcclxuICAgIGRpc3RpbmN0IDogMSxcclxuICAgIGRpc3RpbmN0aW9uIDogMSxcclxuICAgIGRpc3Rpbmd1aXNoIDogMSxcclxuICAgIGRpc3RyaWJ1dGUgOiAxLFxyXG4gICAgZGlzdHJpYnV0aW9uIDogMSxcclxuICAgIGRpc3RyaWN0IDogMSxcclxuICAgIGRpdmVyc2UgOiAxLFxyXG4gICAgZGl2ZXJzaXR5IDogMSxcclxuICAgIGRpdmlkZSA6IDEsXHJcbiAgICBkaXZpc2lvbiA6IDEsXHJcbiAgICBkaXZvcmNlIDogMSxcclxuICAgIEROQSA6IDEsXHJcbiAgICBkbyA6IDEsXHJcbiAgICBkb2N0b3IgOiAxLFxyXG4gICAgZG9jdW1lbnQgOiAxLFxyXG4gICAgZG9nIDogMSxcclxuICAgIGRvbWVzdGljIDogMSxcclxuICAgIGRvbWluYW50IDogMSxcclxuICAgIGRvbWluYXRlIDogMSxcclxuICAgIGRvb3IgOiAxLFxyXG4gICAgZG91YmxlIDogMSxcclxuICAgIGRvdWJ0IDogMSxcclxuICAgIGRvd24gOiAxLFxyXG4gICAgZG93bnRvd24gOiAxLFxyXG4gICAgZG96ZW4gOiAxLFxyXG4gICAgZHJhZnQgOiAxLFxyXG4gICAgZHJhZyA6IDEsXHJcbiAgICBkcmFtYSA6IDEsXHJcbiAgICBkcmFtYXRpYyA6IDEsXHJcbiAgICBkcmFtYXRpY2FsbHkgOiAxLFxyXG4gICAgZHJhdyA6IDEsXHJcbiAgICBkcmF3aW5nIDogMSxcclxuICAgIGRyZWFtIDogMSxcclxuICAgIGRyZXNzIDogMSxcclxuICAgIGRyaW5rIDogMSxcclxuICAgIGRyaXZlIDogMSxcclxuICAgIGRyaXZlciA6IDEsXHJcbiAgICBkcm9wIDogMSxcclxuICAgIGRydWcgOiAxLFxyXG4gICAgZHJ5IDogMSxcclxuICAgIGR1ZSA6IDEsXHJcbiAgICBkdXJpbmcgOiAxLFxyXG4gICAgZHVzdCA6IDEsXHJcbiAgICBkdXR5IDogMSxcclxuICAgIGVhY2ggOiAxLFxyXG4gICAgZWFnZXIgOiAxLFxyXG4gICAgZWFyIDogMSxcclxuICAgIGVhcmx5IDogMSxcclxuICAgIGVhcm4gOiAxLFxyXG4gICAgZWFybmluZ3MgOiAxLFxyXG4gICAgZWFydGggOiAxLFxyXG4gICAgZWFzZSA6IDEsXHJcbiAgICBlYXNpbHkgOiAxLFxyXG4gICAgZWFzdCA6IDEsXHJcbiAgICBlYXN0ZXJuIDogMSxcclxuICAgIGVhc3kgOiAxLFxyXG4gICAgZWF0IDogMSxcclxuICAgIGVjb25vbWljIDogMSxcclxuICAgIGVjb25vbWljcyA6IDEsXHJcbiAgICBlY29ub21pc3QgOiAxLFxyXG4gICAgZWNvbm9teSA6IDEsXHJcbiAgICBlZGdlIDogMSxcclxuICAgIGVkaXRpb24gOiAxLFxyXG4gICAgZWRpdG9yIDogMSxcclxuICAgIGVkdWNhdGUgOiAxLFxyXG4gICAgZWR1Y2F0aW9uIDogMSxcclxuICAgIGVkdWNhdGlvbmFsIDogMSxcclxuICAgIGVkdWNhdG9yIDogMSxcclxuICAgIGVmZmVjdCA6IDEsXHJcbiAgICBlZmZlY3RpdmUgOiAxLFxyXG4gICAgZWZmZWN0aXZlbHkgOiAxLFxyXG4gICAgZWZmaWNpZW5jeSA6IDEsXHJcbiAgICBlZmZpY2llbnQgOiAxLFxyXG4gICAgZWZmb3J0IDogMSxcclxuICAgIGVnZyA6IDEsXHJcbiAgICBlaWdodCA6IDEsXHJcbiAgICBlaXRoZXIgOiAxLFxyXG4gICAgZWxkZXJseSA6IDEsXHJcbiAgICBlbGVjdCA6IDEsXHJcbiAgICBlbGVjdGlvbiA6IDEsXHJcbiAgICBlbGVjdHJpYyA6IDEsXHJcbiAgICBlbGVjdHJpY2l0eSA6IDEsXHJcbiAgICBlbGVjdHJvbmljIDogMSxcclxuICAgIGVsZW1lbnQgOiAxLFxyXG4gICAgZWxlbWVudGFyeSA6IDEsXHJcbiAgICBlbGltaW5hdGUgOiAxLFxyXG4gICAgZWxpdGUgOiAxLFxyXG4gICAgZWxzZSA6IDEsXHJcbiAgICBlbHNld2hlcmUgOiAxLFxyXG4gICAgXCJlLW1haWxcIiA6IDEsXHJcbiAgICBlbWJyYWNlIDogMSxcclxuICAgIGVtZXJnZSA6IDEsXHJcbiAgICBlbWVyZ2VuY3kgOiAxLFxyXG4gICAgZW1pc3Npb24gOiAxLFxyXG4gICAgZW1vdGlvbiA6IDEsXHJcbiAgICBlbW90aW9uYWwgOiAxLFxyXG4gICAgZW1waGFzaXMgOiAxLFxyXG4gICAgZW1waGFzaXplIDogMSxcclxuICAgIGVtcGxveSA6IDEsXHJcbiAgICBlbXBsb3llZSA6IDEsXHJcbiAgICBlbXBsb3llciA6IDEsXHJcbiAgICBlbXBsb3ltZW50IDogMSxcclxuICAgIGVtcHR5IDogMSxcclxuICAgIGVuYWJsZSA6IDEsXHJcbiAgICBlbmNvdW50ZXIgOiAxLFxyXG4gICAgZW5jb3VyYWdlIDogMSxcclxuICAgIGVuZCA6IDEsXHJcbiAgICBlbmVteSA6IDEsXHJcbiAgICBlbmVyZ3kgOiAxLFxyXG4gICAgZW5mb3JjZW1lbnQgOiAxLFxyXG4gICAgZW5nYWdlIDogMSxcclxuICAgIGVuZ2luZSA6IDEsXHJcbiAgICBlbmdpbmVlciA6IDEsXHJcbiAgICBlbmdpbmVlcmluZyA6IDEsXHJcbiAgICBFbmdsaXNoIDogMSxcclxuICAgIGVuaGFuY2UgOiAxLFxyXG4gICAgZW5qb3kgOiAxLFxyXG4gICAgZW5vcm1vdXMgOiAxLFxyXG4gICAgZW5vdWdoIDogMSxcclxuICAgIGVuc3VyZSA6IDEsXHJcbiAgICBlbnRlciA6IDEsXHJcbiAgICBlbnRlcnByaXNlIDogMSxcclxuICAgIGVudGVydGFpbm1lbnQgOiAxLFxyXG4gICAgZW50aXJlIDogMSxcclxuICAgIGVudGlyZWx5IDogMSxcclxuICAgIGVudHJhbmNlIDogMSxcclxuICAgIGVudHJ5IDogMSxcclxuICAgIGVudmlyb25tZW50IDogMSxcclxuICAgIGVudmlyb25tZW50YWwgOiAxLFxyXG4gICAgZXBpc29kZSA6IDEsXHJcbiAgICBlcXVhbCA6IDEsXHJcbiAgICBlcXVhbGx5IDogMSxcclxuICAgIGVxdWlwbWVudCA6IDEsXHJcbiAgICBlcmEgOiAxLFxyXG4gICAgZXJyb3IgOiAxLFxyXG4gICAgZXNjYXBlIDogMSxcclxuICAgIGVzcGVjaWFsbHkgOiAxLFxyXG4gICAgZXNzYXkgOiAxLFxyXG4gICAgZXNzZW50aWFsIDogMSxcclxuICAgIGVzc2VudGlhbGx5IDogMSxcclxuICAgIGVzdGFibGlzaCA6IDEsXHJcbiAgICBlc3RhYmxpc2htZW50IDogMSxcclxuICAgIGVzdGF0ZSA6IDEsXHJcbiAgICBlc3RpbWF0ZSA6IDEsXHJcbiAgICBldGMgOiAxLFxyXG4gICAgZXRoaWNzIDogMSxcclxuICAgIGV0aG5pYyA6IDEsXHJcbiAgICBFdXJvcGVhbiA6IDEsXHJcbiAgICBldmFsdWF0ZSA6IDEsXHJcbiAgICBldmFsdWF0aW9uIDogMSxcclxuICAgIGV2ZW4gOiAxLFxyXG4gICAgZXZlbmluZyA6IDEsXHJcbiAgICBldmVudCA6IDEsXHJcbiAgICBldmVudHVhbGx5IDogMSxcclxuICAgIGV2ZXIgOiAxLFxyXG4gICAgZXZlcnkgOiAxLFxyXG4gICAgZXZlcnlib2R5IDogMSxcclxuICAgIGV2ZXJ5ZGF5IDogMSxcclxuICAgIGV2ZXJ5b25lIDogMSxcclxuICAgIGV2ZXJ5dGhpbmcgOiAxLFxyXG4gICAgZXZlcnl3aGVyZSA6IDEsXHJcbiAgICBldmlkZW5jZSA6IDEsXHJcbiAgICBldm9sdXRpb24gOiAxLFxyXG4gICAgZXZvbHZlIDogMSxcclxuICAgIGV4YWN0IDogMSxcclxuICAgIGV4YWN0bHkgOiAxLFxyXG4gICAgZXhhbWluYXRpb24gOiAxLFxyXG4gICAgZXhhbWluZSA6IDEsXHJcbiAgICBleGFtcGxlIDogMSxcclxuICAgIGV4Y2VlZCA6IDEsXHJcbiAgICBleGNlbGxlbnQgOiAxLFxyXG4gICAgZXhjZXB0IDogMSxcclxuICAgIGV4Y2VwdGlvbiA6IDEsXHJcbiAgICBleGNoYW5nZSA6IDEsXHJcbiAgICBleGNpdGluZyA6IDEsXHJcbiAgICBleGVjdXRpdmUgOiAxLFxyXG4gICAgZXhlcmNpc2UgOiAxLFxyXG4gICAgZXhoaWJpdCA6IDEsXHJcbiAgICBleGhpYml0aW9uIDogMSxcclxuICAgIGV4aXN0IDogMSxcclxuICAgIGV4aXN0ZW5jZSA6IDEsXHJcbiAgICBleGlzdGluZyA6IDEsXHJcbiAgICBleHBhbmQgOiAxLFxyXG4gICAgZXhwYW5zaW9uIDogMSxcclxuICAgIGV4cGVjdCA6IDEsXHJcbiAgICBleHBlY3RhdGlvbiA6IDEsXHJcbiAgICBleHBlbnNlIDogMSxcclxuICAgIGV4cGVuc2l2ZSA6IDEsXHJcbiAgICBleHBlcmllbmNlIDogMSxcclxuICAgIGV4cGVyaW1lbnQgOiAxLFxyXG4gICAgZXhwZXJ0IDogMSxcclxuICAgIGV4cGxhaW4gOiAxLFxyXG4gICAgZXhwbGFuYXRpb24gOiAxLFxyXG4gICAgZXhwbG9kZSA6IDEsXHJcbiAgICBleHBsb3JlIDogMSxcclxuICAgIGV4cGxvc2lvbiA6IDEsXHJcbiAgICBleHBvc2UgOiAxLFxyXG4gICAgZXhwb3N1cmUgOiAxLFxyXG4gICAgZXhwcmVzcyA6IDEsXHJcbiAgICBleHByZXNzaW9uIDogMSxcclxuICAgIGV4dGVuZCA6IDEsXHJcbiAgICBleHRlbnNpb24gOiAxLFxyXG4gICAgZXh0ZW5zaXZlIDogMSxcclxuICAgIGV4dGVudCA6IDEsXHJcbiAgICBleHRlcm5hbCA6IDEsXHJcbiAgICBleHRyYSA6IDEsXHJcbiAgICBleHRyYW9yZGluYXJ5IDogMSxcclxuICAgIGV4dHJlbWUgOiAxLFxyXG4gICAgZXh0cmVtZWx5IDogMSxcclxuICAgIGV5ZSA6IDEsXHJcbiAgICBmYWJyaWMgOiAxLFxyXG4gICAgZmFjZSA6IDEsXHJcbiAgICBmYWNpbGl0eSA6IDEsXHJcbiAgICBmYWN0IDogMSxcclxuICAgIGZhY3RvciA6IDEsXHJcbiAgICBmYWN0b3J5IDogMSxcclxuICAgIGZhY3VsdHkgOiAxLFxyXG4gICAgZmFkZSA6IDEsXHJcbiAgICBmYWlsIDogMSxcclxuICAgIGZhaWx1cmUgOiAxLFxyXG4gICAgZmFpciA6IDEsXHJcbiAgICBmYWlybHkgOiAxLFxyXG4gICAgZmFpdGggOiAxLFxyXG4gICAgZmFsbCA6IDEsXHJcbiAgICBmYWxzZSA6IDEsXHJcbiAgICBmYW1pbGlhciA6IDEsXHJcbiAgICBmYW1pbHkgOiAxLFxyXG4gICAgZmFtb3VzIDogMSxcclxuICAgIGZhbiA6IDEsXHJcbiAgICBmYW50YXN5IDogMSxcclxuICAgIGZhciA6IDEsXHJcbiAgICBmYXJtIDogMSxcclxuICAgIGZhcm1lciA6IDEsXHJcbiAgICBmYXNoaW9uIDogMSxcclxuICAgIGZhc3QgOiAxLFxyXG4gICAgZmF0IDogMSxcclxuICAgIGZhdGUgOiAxLFxyXG4gICAgZmF0aGVyIDogMSxcclxuICAgIGZhdWx0IDogMSxcclxuICAgIGZhdm9yIDogMSxcclxuICAgIGZhdm9yaXRlIDogMSxcclxuICAgIGZlYXIgOiAxLFxyXG4gICAgZmVhdHVyZSA6IDEsXHJcbiAgICBmZWRlcmFsIDogMSxcclxuICAgIGZlZSA6IDEsXHJcbiAgICBmZWVkIDogMSxcclxuICAgIGZlZWwgOiAxLFxyXG4gICAgZmVlbGluZyA6IDEsXHJcbiAgICBmZWxsb3cgOiAxLFxyXG4gICAgZmVtYWxlIDogMSxcclxuICAgIGZlbmNlIDogMSxcclxuICAgIGZldyA6IDEsXHJcbiAgICBmZXdlciA6IDEsXHJcbiAgICBmaWJlciA6IDEsXHJcbiAgICBmaWN0aW9uIDogMSxcclxuICAgIGZpZWxkIDogMSxcclxuICAgIGZpZnRlZW4gOiAxLFxyXG4gICAgZmlmdGggOiAxLFxyXG4gICAgZmlmdHkgOiAxLFxyXG4gICAgZmlnaHQgOiAxLFxyXG4gICAgZmlnaHRlciA6IDEsXHJcbiAgICBmaWdodGluZyA6IDEsXHJcbiAgICBmaWd1cmUgOiAxLFxyXG4gICAgZmlsZSA6IDEsXHJcbiAgICBmaWxsIDogMSxcclxuICAgIGZpbG0gOiAxLFxyXG4gICAgZmluYWwgOiAxLFxyXG4gICAgZmluYWxseSA6IDEsXHJcbiAgICBmaW5hbmNlIDogMSxcclxuICAgIGZpbmFuY2lhbCA6IDEsXHJcbiAgICBmaW5kIDogMSxcclxuICAgIGZpbmRpbmcgOiAxLFxyXG4gICAgZmluZSA6IDEsXHJcbiAgICBmaW5nZXIgOiAxLFxyXG4gICAgZmluaXNoIDogMSxcclxuICAgIGZpcmUgOiAxLFxyXG4gICAgZmlybSA6IDEsXHJcbiAgICBmaXJzdCA6IDEsXHJcbiAgICBmaXNoIDogMSxcclxuICAgIGZpc2hpbmcgOiAxLFxyXG4gICAgZml0IDogMSxcclxuICAgIGZpdG5lc3MgOiAxLFxyXG4gICAgZml2ZSA6IDEsXHJcbiAgICBmaXggOiAxLFxyXG4gICAgZmxhZyA6IDEsXHJcbiAgICBmbGFtZSA6IDEsXHJcbiAgICBmbGF0IDogMSxcclxuICAgIGZsYXZvciA6IDEsXHJcbiAgICBmbGVlIDogMSxcclxuICAgIGZsZXNoIDogMSxcclxuICAgIGZsaWdodCA6IDEsXHJcbiAgICBmbG9hdCA6IDEsXHJcbiAgICBmbG9vciA6IDEsXHJcbiAgICBmbG93IDogMSxcclxuICAgIGZsb3dlciA6IDEsXHJcbiAgICBmbHkgOiAxLFxyXG4gICAgZm9jdXMgOiAxLFxyXG4gICAgZm9sayA6IDEsXHJcbiAgICBmb2xsb3cgOiAxLFxyXG4gICAgZm9sbG93aW5nIDogMSxcclxuICAgIGZvb2QgOiAxLFxyXG4gICAgZm9vdCA6IDEsXHJcbiAgICBmb290YmFsbCA6IDEsXHJcbiAgICBmb3IgOiAxLFxyXG4gICAgZm9yY2UgOiAxLFxyXG4gICAgZm9yZWlnbiA6IDEsXHJcbiAgICBmb3Jlc3QgOiAxLFxyXG4gICAgZm9yZXZlciA6IDEsXHJcbiAgICBmb3JnZXQgOiAxLFxyXG4gICAgZm9ybSA6IDEsXHJcbiAgICBmb3JtYWwgOiAxLFxyXG4gICAgZm9ybWF0aW9uIDogMSxcclxuICAgIGZvcm1lciA6IDEsXHJcbiAgICBmb3JtdWxhIDogMSxcclxuICAgIGZvcnRoIDogMSxcclxuICAgIGZvcnR1bmUgOiAxLFxyXG4gICAgZm9yd2FyZCA6IDEsXHJcbiAgICBmb3VuZCA6IDEsXHJcbiAgICBmb3VuZGF0aW9uIDogMSxcclxuICAgIGZvdW5kZXIgOiAxLFxyXG4gICAgZm91ciA6IDEsXHJcbiAgICBmb3VydGggOiAxLFxyXG4gICAgZnJhbWUgOiAxLFxyXG4gICAgZnJhbWV3b3JrIDogMSxcclxuICAgIGZyZWUgOiAxLFxyXG4gICAgZnJlZWRvbSA6IDEsXHJcbiAgICBmcmVlemUgOiAxLFxyXG4gICAgRnJlbmNoIDogMSxcclxuICAgIGZyZXF1ZW5jeSA6IDEsXHJcbiAgICBmcmVxdWVudCA6IDEsXHJcbiAgICBmcmVxdWVudGx5IDogMSxcclxuICAgIGZyZXNoIDogMSxcclxuICAgIGZyaWVuZCA6IDEsXHJcbiAgICBmcmllbmRseSA6IDEsXHJcbiAgICBmcmllbmRzaGlwIDogMSxcclxuICAgIGZyb20gOiAxLFxyXG4gICAgZnJvbnQgOiAxLFxyXG4gICAgZnJ1aXQgOiAxLFxyXG4gICAgZnJ1c3RyYXRpb24gOiAxLFxyXG4gICAgZnVlbCA6IDEsXHJcbiAgICBmdWxsIDogMSxcclxuICAgIGZ1bGx5IDogMSxcclxuICAgIGZ1biA6IDEsXHJcbiAgICBmdW5jdGlvbiA6IDEsXHJcbiAgICBmdW5kIDogMSxcclxuICAgIGZ1bmRhbWVudGFsIDogMSxcclxuICAgIGZ1bmRpbmcgOiAxLFxyXG4gICAgZnVuZXJhbCA6IDEsXHJcbiAgICBmdW5ueSA6IDEsXHJcbiAgICBmdXJuaXR1cmUgOiAxLFxyXG4gICAgZnVydGhlcm1vcmUgOiAxLFxyXG4gICAgZnV0dXJlIDogMSxcclxuICAgIGdhaW4gOiAxLFxyXG4gICAgZ2FsYXh5IDogMSxcclxuICAgIGdhbGxlcnkgOiAxLFxyXG4gICAgZ2FtZSA6IDEsXHJcbiAgICBnYW5nIDogMSxcclxuICAgIGdhcCA6IDEsXHJcbiAgICBnYXJhZ2UgOiAxLFxyXG4gICAgZ2FyZGVuIDogMSxcclxuICAgIGdhcmxpYyA6IDEsXHJcbiAgICBnYXMgOiAxLFxyXG4gICAgZ2F0ZSA6IDEsXHJcbiAgICBnYXRoZXIgOiAxLFxyXG4gICAgZ2F5IDogMSxcclxuICAgIGdhemUgOiAxLFxyXG4gICAgZ2VhciA6IDEsXHJcbiAgICBnZW5kZXIgOiAxLFxyXG4gICAgZ2VuZSA6IDEsXHJcbiAgICBnZW5lcmFsIDogMSxcclxuICAgIGdlbmVyYWxseSA6IDEsXHJcbiAgICBnZW5lcmF0ZSA6IDEsXHJcbiAgICBnZW5lcmF0aW9uIDogMSxcclxuICAgIGdlbmV0aWMgOiAxLFxyXG4gICAgZ2VudGxlbWFuIDogMSxcclxuICAgIGdlbnRseSA6IDEsXHJcbiAgICBHZXJtYW4gOiAxLFxyXG4gICAgZ2VzdHVyZSA6IDEsXHJcbiAgICBnZXQgOiAxLFxyXG4gICAgZ2hvc3QgOiAxLFxyXG4gICAgZ2lhbnQgOiAxLFxyXG4gICAgZ2lmdCA6IDEsXHJcbiAgICBnaWZ0ZWQgOiAxLFxyXG4gICAgZ2lybCA6IDEsXHJcbiAgICBnaXJsZnJpZW5kIDogMSxcclxuICAgIGdpdmUgOiAxLFxyXG4gICAgZ2l2ZW4gOiAxLFxyXG4gICAgZ2xhZCA6IDEsXHJcbiAgICBnbGFuY2UgOiAxLFxyXG4gICAgZ2xhc3MgOiAxLFxyXG4gICAgZ2xvYmFsIDogMSxcclxuICAgIGdsb3ZlIDogMSxcclxuICAgIGdvIDogMSxcclxuICAgIGdvYWwgOiAxLFxyXG4gICAgR29kIDogMSxcclxuICAgIGdvbGQgOiAxLFxyXG4gICAgZ29sZGVuIDogMSxcclxuICAgIGdvbGYgOiAxLFxyXG4gICAgZ29vZCA6IDEsXHJcbiAgICBnb3Zlcm5tZW50IDogMSxcclxuICAgIGdvdmVybm9yIDogMSxcclxuICAgIGdyYWIgOiAxLFxyXG4gICAgZ3JhZGUgOiAxLFxyXG4gICAgZ3JhZHVhbGx5IDogMSxcclxuICAgIGdyYWR1YXRlIDogMSxcclxuICAgIGdyYWluIDogMSxcclxuICAgIGdyYW5kIDogMSxcclxuICAgIGdyYW5kZmF0aGVyIDogMSxcclxuICAgIGdyYW5kbW90aGVyIDogMSxcclxuICAgIGdyYW50IDogMSxcclxuICAgIGdyYXNzIDogMSxcclxuICAgIGdyYXZlIDogMSxcclxuICAgIGdyYXkgOiAxLFxyXG4gICAgZ3JlYXQgOiAxLFxyXG4gICAgZ3JlYXRlc3QgOiAxLFxyXG4gICAgZ3JlZW4gOiAxLFxyXG4gICAgZ3JvY2VyeSA6IDEsXHJcbiAgICBncm91bmQgOiAxLFxyXG4gICAgZ3JvdXAgOiAxLFxyXG4gICAgZ3JvdyA6IDEsXHJcbiAgICBncm93aW5nIDogMSxcclxuICAgIGdyb3d0aCA6IDEsXHJcbiAgICBndWFyYW50ZWUgOiAxLFxyXG4gICAgZ3VhcmQgOiAxLFxyXG4gICAgZ3Vlc3MgOiAxLFxyXG4gICAgZ3Vlc3QgOiAxLFxyXG4gICAgZ3VpZGUgOiAxLFxyXG4gICAgZ3VpZGVsaW5lIDogMSxcclxuICAgIGd1aWx0eSA6IDEsXHJcbiAgICBndW4gOiAxLFxyXG4gICAgZ3V5IDogMSxcclxuICAgIGhhYml0IDogMSxcclxuICAgIGhhYml0YXQgOiAxLFxyXG4gICAgaGFpciA6IDEsXHJcbiAgICBoYWxmIDogMSxcclxuICAgIGhhbGwgOiAxLFxyXG4gICAgaGFuZCA6IDEsXHJcbiAgICBoYW5kZnVsIDogMSxcclxuICAgIGhhbmRsZSA6IDEsXHJcbiAgICBoYW5nIDogMSxcclxuICAgIGhhcHBlbiA6IDEsXHJcbiAgICBoYXBweSA6IDEsXHJcbiAgICBoYXJkIDogMSxcclxuICAgIGhhcmRseSA6IDEsXHJcbiAgICBoYXQgOiAxLFxyXG4gICAgaGF0ZSA6IDEsXHJcbiAgICBoYXZlIDogMSxcclxuICAgIGhlIDogMSxcclxuICAgIGhlYWQgOiAxLFxyXG4gICAgaGVhZGxpbmUgOiAxLFxyXG4gICAgaGVhZHF1YXJ0ZXJzIDogMSxcclxuICAgIGhlYWx0aCA6IDEsXHJcbiAgICBoZWFsdGh5IDogMSxcclxuICAgIGhlYXIgOiAxLFxyXG4gICAgaGVhcmluZyA6IDEsXHJcbiAgICBoZWFydCA6IDEsXHJcbiAgICBoZWF0IDogMSxcclxuICAgIGhlYXZlbiA6IDEsXHJcbiAgICBoZWF2aWx5IDogMSxcclxuICAgIGhlYXZ5IDogMSxcclxuICAgIGhlZWwgOiAxLFxyXG4gICAgaGVpZ2h0IDogMSxcclxuICAgIGhlbGljb3B0ZXIgOiAxLFxyXG4gICAgaGVsbCA6IDEsXHJcbiAgICBoZWxsbyA6IDEsXHJcbiAgICBoZWxwIDogMSxcclxuICAgIGhlbHBmdWwgOiAxLFxyXG4gICAgaGVyIDogMSxcclxuICAgIGhlcmUgOiAxLFxyXG4gICAgaGVyaXRhZ2UgOiAxLFxyXG4gICAgaGVybyA6IDEsXHJcbiAgICBoZXJzZWxmIDogMSxcclxuICAgIGhleSA6IDEsXHJcbiAgICBoaSA6IDEsXHJcbiAgICBoaWRlIDogMSxcclxuICAgIGhpZ2ggOiAxLFxyXG4gICAgaGlnaGxpZ2h0IDogMSxcclxuICAgIGhpZ2hseSA6IDEsXHJcbiAgICBoaWdod2F5IDogMSxcclxuICAgIGhpbGwgOiAxLFxyXG4gICAgaGltIDogMSxcclxuICAgIGhpbXNlbGYgOiAxLFxyXG4gICAgaGlwIDogMSxcclxuICAgIGhpcmUgOiAxLFxyXG4gICAgaGlzIDogMSxcclxuICAgIGhpc3RvcmlhbiA6IDEsXHJcbiAgICBoaXN0b3JpYyA6IDEsXHJcbiAgICBoaXN0b3JpY2FsIDogMSxcclxuICAgIGhpc3RvcnkgOiAxLFxyXG4gICAgaGl0IDogMSxcclxuICAgIGhvbGQgOiAxLFxyXG4gICAgaG9sZSA6IDEsXHJcbiAgICBob2xpZGF5IDogMSxcclxuICAgIGhvbHkgOiAxLFxyXG4gICAgaG9tZSA6IDEsXHJcbiAgICBob21lbGVzcyA6IDEsXHJcbiAgICBob25lc3QgOiAxLFxyXG4gICAgaG9uZXkgOiAxLFxyXG4gICAgaG9ub3IgOiAxLFxyXG4gICAgaG9wZSA6IDEsXHJcbiAgICBob3Jpem9uIDogMSxcclxuICAgIGhvcnJvciA6IDEsXHJcbiAgICBob3JzZSA6IDEsXHJcbiAgICBob3NwaXRhbCA6IDEsXHJcbiAgICBob3N0IDogMSxcclxuICAgIGhvdCA6IDEsXHJcbiAgICBob3RlbCA6IDEsXHJcbiAgICBob3VyIDogMSxcclxuICAgIGhvdXNlIDogMSxcclxuICAgIGhvdXNlaG9sZCA6IDEsXHJcbiAgICBob3VzaW5nIDogMSxcclxuICAgIGhvdyA6IDEsXHJcbiAgICBob3dldmVyIDogMSxcclxuICAgIGh1Z2UgOiAxLFxyXG4gICAgaHVtYW4gOiAxLFxyXG4gICAgaHVtb3IgOiAxLFxyXG4gICAgaHVuZHJlZCA6IDEsXHJcbiAgICBodW5ncnkgOiAxLFxyXG4gICAgaHVudGVyIDogMSxcclxuICAgIGh1bnRpbmcgOiAxLFxyXG4gICAgaHVydCA6IDEsXHJcbiAgICBodXNiYW5kIDogMSxcclxuICAgIGh5cG90aGVzaXMgOiAxLFxyXG4gICAgSSA6IDEsXHJcbiAgICBpY2UgOiAxLFxyXG4gICAgaWRlYSA6IDEsXHJcbiAgICBpZGVhbCA6IDEsXHJcbiAgICBpZGVudGlmaWNhdGlvbiA6IDEsXHJcbiAgICBpZGVudGlmeSA6IDEsXHJcbiAgICBpZGVudGl0eSA6IDEsXHJcbiAgICBpZSA6IDEsXHJcbiAgICBpZiA6IDEsXHJcbiAgICBpZ25vcmUgOiAxLFxyXG4gICAgaWxsIDogMSxcclxuICAgIGlsbGVnYWwgOiAxLFxyXG4gICAgaWxsbmVzcyA6IDEsXHJcbiAgICBpbGx1c3RyYXRlIDogMSxcclxuICAgIGltYWdlIDogMSxcclxuICAgIGltYWdpbmF0aW9uIDogMSxcclxuICAgIGltYWdpbmUgOiAxLFxyXG4gICAgaW1tZWRpYXRlIDogMSxcclxuICAgIGltbWVkaWF0ZWx5IDogMSxcclxuICAgIGltbWlncmFudCA6IDEsXHJcbiAgICBpbW1pZ3JhdGlvbiA6IDEsXHJcbiAgICBpbXBhY3QgOiAxLFxyXG4gICAgaW1wbGVtZW50IDogMSxcclxuICAgIGltcGxpY2F0aW9uIDogMSxcclxuICAgIGltcGx5IDogMSxcclxuICAgIGltcG9ydGFuY2UgOiAxLFxyXG4gICAgaW1wb3J0YW50IDogMSxcclxuICAgIGltcG9zZSA6IDEsXHJcbiAgICBpbXBvc3NpYmxlIDogMSxcclxuICAgIGltcHJlc3MgOiAxLFxyXG4gICAgaW1wcmVzc2lvbiA6IDEsXHJcbiAgICBpbXByZXNzaXZlIDogMSxcclxuICAgIGltcHJvdmUgOiAxLFxyXG4gICAgaW1wcm92ZW1lbnQgOiAxLFxyXG4gICAgaW4gOiAxLFxyXG4gICAgaW5jZW50aXZlIDogMSxcclxuICAgIGluY2lkZW50IDogMSxcclxuICAgIGluY2x1ZGUgOiAxLFxyXG4gICAgaW5jbHVkaW5nIDogMSxcclxuICAgIGluY29tZSA6IDEsXHJcbiAgICBpbmNvcnBvcmF0ZSA6IDEsXHJcbiAgICBpbmNyZWFzZSA6IDEsXHJcbiAgICBpbmNyZWFzZWQgOiAxLFxyXG4gICAgaW5jcmVhc2luZyA6IDEsXHJcbiAgICBpbmNyZWFzaW5nbHkgOiAxLFxyXG4gICAgaW5jcmVkaWJsZSA6IDEsXHJcbiAgICBpbmRlZWQgOiAxLFxyXG4gICAgaW5kZXBlbmRlbmNlIDogMSxcclxuICAgIGluZGVwZW5kZW50IDogMSxcclxuICAgIGluZGV4IDogMSxcclxuICAgIEluZGlhbiA6IDEsXHJcbiAgICBpbmRpY2F0ZSA6IDEsXHJcbiAgICBpbmRpY2F0aW9uIDogMSxcclxuICAgIGluZGl2aWR1YWwgOiAxLFxyXG4gICAgaW5kdXN0cmlhbCA6IDEsXHJcbiAgICBpbmR1c3RyeSA6IDEsXHJcbiAgICBpbmZhbnQgOiAxLFxyXG4gICAgaW5mZWN0aW9uIDogMSxcclxuICAgIGluZmxhdGlvbiA6IDEsXHJcbiAgICBpbmZsdWVuY2UgOiAxLFxyXG4gICAgaW5mb3JtIDogMSxcclxuICAgIGluZm9ybWF0aW9uIDogMSxcclxuICAgIGluZ3JlZGllbnQgOiAxLFxyXG4gICAgaW5pdGlhbCA6IDEsXHJcbiAgICBpbml0aWFsbHkgOiAxLFxyXG4gICAgaW5pdGlhdGl2ZSA6IDEsXHJcbiAgICBpbmp1cnkgOiAxLFxyXG4gICAgaW5uZXIgOiAxLFxyXG4gICAgaW5ub2NlbnQgOiAxLFxyXG4gICAgaW5xdWlyeSA6IDEsXHJcbiAgICBpbnNpZGUgOiAxLFxyXG4gICAgaW5zaWdodCA6IDEsXHJcbiAgICBpbnNpc3QgOiAxLFxyXG4gICAgaW5zcGlyZSA6IDEsXHJcbiAgICBpbnN0YWxsIDogMSxcclxuICAgIGluc3RhbmNlIDogMSxcclxuICAgIGluc3RlYWQgOiAxLFxyXG4gICAgaW5zdGl0dXRpb24gOiAxLFxyXG4gICAgaW5zdGl0dXRpb25hbCA6IDEsXHJcbiAgICBpbnN0cnVjdGlvbiA6IDEsXHJcbiAgICBpbnN0cnVjdG9yIDogMSxcclxuICAgIGluc3RydW1lbnQgOiAxLFxyXG4gICAgaW5zdXJhbmNlIDogMSxcclxuICAgIGludGVsbGVjdHVhbCA6IDEsXHJcbiAgICBpbnRlbGxpZ2VuY2UgOiAxLFxyXG4gICAgaW50ZW5kIDogMSxcclxuICAgIGludGVuc2UgOiAxLFxyXG4gICAgaW50ZW5zaXR5IDogMSxcclxuICAgIGludGVudGlvbiA6IDEsXHJcbiAgICBpbnRlcmFjdGlvbiA6IDEsXHJcbiAgICBpbnRlcmVzdCA6IDEsXHJcbiAgICBpbnRlcmVzdGVkIDogMSxcclxuICAgIGludGVyZXN0aW5nIDogMSxcclxuICAgIGludGVybmFsIDogMSxcclxuICAgIGludGVybmF0aW9uYWwgOiAxLFxyXG4gICAgSW50ZXJuZXQgOiAxLFxyXG4gICAgaW50ZXJwcmV0IDogMSxcclxuICAgIGludGVycHJldGF0aW9uIDogMSxcclxuICAgIGludGVydmVudGlvbiA6IDEsXHJcbiAgICBpbnRlcnZpZXcgOiAxLFxyXG4gICAgaW50byA6IDEsXHJcbiAgICBpbnRyb2R1Y2UgOiAxLFxyXG4gICAgaW50cm9kdWN0aW9uIDogMSxcclxuICAgIGludmFzaW9uIDogMSxcclxuICAgIGludmVzdCA6IDEsXHJcbiAgICBpbnZlc3RpZ2F0ZSA6IDEsXHJcbiAgICBpbnZlc3RpZ2F0aW9uIDogMSxcclxuICAgIGludmVzdGlnYXRvciA6IDEsXHJcbiAgICBpbnZlc3RtZW50IDogMSxcclxuICAgIGludmVzdG9yIDogMSxcclxuICAgIGludml0ZSA6IDEsXHJcbiAgICBpbnZvbHZlIDogMSxcclxuICAgIGludm9sdmVkIDogMSxcclxuICAgIGludm9sdmVtZW50IDogMSxcclxuICAgIElyYXFpIDogMSxcclxuICAgIElyaXNoIDogMSxcclxuICAgIGlyb24gOiAxLFxyXG4gICAgSXNsYW1pYyA6IDEsXHJcbiAgICBpc2xhbmQgOiAxLFxyXG4gICAgSXNyYWVsaSA6IDEsXHJcbiAgICBpc3N1ZSA6IDEsXHJcbiAgICBpdCA6IDEsXHJcbiAgICBJdGFsaWFuIDogMSxcclxuICAgIGl0ZW0gOiAxLFxyXG4gICAgaXRzIDogMSxcclxuICAgIGl0c2VsZiA6IDEsXHJcbiAgICBqYWNrZXQgOiAxLFxyXG4gICAgamFpbCA6IDEsXHJcbiAgICBKYXBhbmVzZSA6IDEsXHJcbiAgICBqZXQgOiAxLFxyXG4gICAgSmV3IDogMSxcclxuICAgIEpld2lzaCA6IDEsXHJcbiAgICBqb2IgOiAxLFxyXG4gICAgam9pbiA6IDEsXHJcbiAgICBqb2ludCA6IDEsXHJcbiAgICBqb2tlIDogMSxcclxuICAgIGpvdXJuYWwgOiAxLFxyXG4gICAgam91cm5hbGlzdCA6IDEsXHJcbiAgICBqb3VybmV5IDogMSxcclxuICAgIGpveSA6IDEsXHJcbiAgICBqdWRnZSA6IDEsXHJcbiAgICBqdWRnbWVudCA6IDEsXHJcbiAgICBqdWljZSA6IDEsXHJcbiAgICBqdW1wIDogMSxcclxuICAgIGp1bmlvciA6IDEsXHJcbiAgICBqdXJ5IDogMSxcclxuICAgIGp1c3QgOiAxLFxyXG4gICAganVzdGljZSA6IDEsXHJcbiAgICBqdXN0aWZ5IDogMSxcclxuICAgIGtlZXAgOiAxLFxyXG4gICAga2V5IDogMSxcclxuICAgIGtpY2sgOiAxLFxyXG4gICAga2lkIDogMSxcclxuICAgIGtpbGwgOiAxLFxyXG4gICAga2lsbGVyIDogMSxcclxuICAgIGtpbGxpbmcgOiAxLFxyXG4gICAga2luZCA6IDEsXHJcbiAgICBraW5nIDogMSxcclxuICAgIGtpc3MgOiAxLFxyXG4gICAga2l0Y2hlbiA6IDEsXHJcbiAgICBrbmVlIDogMSxcclxuICAgIGtuaWZlIDogMSxcclxuICAgIGtub2NrIDogMSxcclxuICAgIGtub3cgOiAxLFxyXG4gICAga25vd2xlZGdlIDogMSxcclxuICAgIGxhYiA6IDEsXHJcbiAgICBsYWJlbCA6IDEsXHJcbiAgICBsYWJvciA6IDEsXHJcbiAgICBsYWJvcmF0b3J5IDogMSxcclxuICAgIGxhY2sgOiAxLFxyXG4gICAgbGFkeSA6IDEsXHJcbiAgICBsYWtlIDogMSxcclxuICAgIGxhbmQgOiAxLFxyXG4gICAgbGFuZHNjYXBlIDogMSxcclxuICAgIGxhbmd1YWdlIDogMSxcclxuICAgIGxhcCA6IDEsXHJcbiAgICBsYXJnZSA6IDEsXHJcbiAgICBsYXJnZWx5IDogMSxcclxuICAgIGxhc3QgOiAxLFxyXG4gICAgbGF0ZSA6IDEsXHJcbiAgICBsYXRlciA6IDEsXHJcbiAgICBMYXRpbiA6IDEsXHJcbiAgICBsYXR0ZXIgOiAxLFxyXG4gICAgbGF1Z2ggOiAxLFxyXG4gICAgbGF1bmNoIDogMSxcclxuICAgIGxhdyA6IDEsXHJcbiAgICBsYXduIDogMSxcclxuICAgIGxhd3N1aXQgOiAxLFxyXG4gICAgbGF3eWVyIDogMSxcclxuICAgIGxheSA6IDEsXHJcbiAgICBsYXllciA6IDEsXHJcbiAgICBsZWFkIDogMSxcclxuICAgIGxlYWRlciA6IDEsXHJcbiAgICBsZWFkZXJzaGlwIDogMSxcclxuICAgIGxlYWRpbmcgOiAxLFxyXG4gICAgbGVhZiA6IDEsXHJcbiAgICBsZWFndWUgOiAxLFxyXG4gICAgbGVhbiA6IDEsXHJcbiAgICBsZWFybiA6IDEsXHJcbiAgICBsZWFybmluZyA6IDEsXHJcbiAgICBsZWFzdCA6IDEsXHJcbiAgICBsZWF0aGVyIDogMSxcclxuICAgIGxlYXZlIDogMSxcclxuICAgIGxlZnQgOiAxLFxyXG4gICAgbGVnIDogMSxcclxuICAgIGxlZ2FjeSA6IDEsXHJcbiAgICBsZWdhbCA6IDEsXHJcbiAgICBsZWdlbmQgOiAxLFxyXG4gICAgbGVnaXNsYXRpb24gOiAxLFxyXG4gICAgbGVnaXRpbWF0ZSA6IDEsXHJcbiAgICBsZW1vbiA6IDEsXHJcbiAgICBsZW5ndGggOiAxLFxyXG4gICAgbGVzcyA6IDEsXHJcbiAgICBsZXNzb24gOiAxLFxyXG4gICAgbGV0IDogMSxcclxuICAgIGxldHRlciA6IDEsXHJcbiAgICBsZXZlbCA6IDEsXHJcbiAgICBsaWJlcmFsIDogMSxcclxuICAgIGxpYnJhcnkgOiAxLFxyXG4gICAgbGljZW5zZSA6IDEsXHJcbiAgICBsaWUgOiAxLFxyXG4gICAgbGlmZSA6IDEsXHJcbiAgICBsaWZlc3R5bGUgOiAxLFxyXG4gICAgbGlmZXRpbWUgOiAxLFxyXG4gICAgbGlmdCA6IDEsXHJcbiAgICBsaWdodCA6IDEsXHJcbiAgICBsaWtlIDogMSxcclxuICAgIGxpa2VseSA6IDEsXHJcbiAgICBsaW1pdCA6IDEsXHJcbiAgICBsaW1pdGF0aW9uIDogMSxcclxuICAgIGxpbWl0ZWQgOiAxLFxyXG4gICAgbGluZSA6IDEsXHJcbiAgICBsaW5rIDogMSxcclxuICAgIGxpcCA6IDEsXHJcbiAgICBsaXN0IDogMSxcclxuICAgIGxpc3RlbiA6IDEsXHJcbiAgICBsaXRlcmFsbHkgOiAxLFxyXG4gICAgbGl0ZXJhcnkgOiAxLFxyXG4gICAgbGl0ZXJhdHVyZSA6IDEsXHJcbiAgICBsaXR0bGUgOiAxLFxyXG4gICAgbGl2ZSA6IDEsXHJcbiAgICBsaXZpbmcgOiAxLFxyXG4gICAgbG9hZCA6IDEsXHJcbiAgICBsb2FuIDogMSxcclxuICAgIGxvY2FsIDogMSxcclxuICAgIGxvY2F0ZSA6IDEsXHJcbiAgICBsb2NhdGlvbiA6IDEsXHJcbiAgICBsb2NrIDogMSxcclxuICAgIGxvbmcgOiAxLFxyXG4gICAgXCJsb25nLXRlcm1cIiA6IDEsXHJcbiAgICBsb29rIDogMSxcclxuICAgIGxvb3NlIDogMSxcclxuICAgIGxvc2UgOiAxLFxyXG4gICAgbG9zcyA6IDEsXHJcbiAgICBsb3N0IDogMSxcclxuICAgIGxvdCA6IDEsXHJcbiAgICBsb3RzIDogMSxcclxuICAgIGxvdWQgOiAxLFxyXG4gICAgbG92ZSA6IDEsXHJcbiAgICBsb3ZlbHkgOiAxLFxyXG4gICAgbG92ZXIgOiAxLFxyXG4gICAgbG93IDogMSxcclxuICAgIGxvd2VyIDogMSxcclxuICAgIGx1Y2sgOiAxLFxyXG4gICAgbHVja3kgOiAxLFxyXG4gICAgbHVuY2ggOiAxLFxyXG4gICAgbHVuZyA6IDEsXHJcbiAgICBtYWNoaW5lIDogMSxcclxuICAgIG1hZCA6IDEsXHJcbiAgICBtYWdhemluZSA6IDEsXHJcbiAgICBtYWlsIDogMSxcclxuICAgIG1haW4gOiAxLFxyXG4gICAgbWFpbmx5IDogMSxcclxuICAgIG1haW50YWluIDogMSxcclxuICAgIG1haW50ZW5hbmNlIDogMSxcclxuICAgIG1ham9yIDogMSxcclxuICAgIG1ham9yaXR5IDogMSxcclxuICAgIG1ha2UgOiAxLFxyXG4gICAgbWFrZXIgOiAxLFxyXG4gICAgbWFrZXVwIDogMSxcclxuICAgIG1hbGUgOiAxLFxyXG4gICAgbWFsbCA6IDEsXHJcbiAgICBtYW4gOiAxLFxyXG4gICAgbWFuYWdlIDogMSxcclxuICAgIG1hbmFnZW1lbnQgOiAxLFxyXG4gICAgbWFuYWdlciA6IDEsXHJcbiAgICBtYW5uZXIgOiAxLFxyXG4gICAgbWFudWZhY3R1cmVyIDogMSxcclxuICAgIG1hbnVmYWN0dXJpbmcgOiAxLFxyXG4gICAgbWFueSA6IDEsXHJcbiAgICBtYXAgOiAxLFxyXG4gICAgbWFyZ2luIDogMSxcclxuICAgIG1hcmsgOiAxLFxyXG4gICAgbWFya2V0IDogMSxcclxuICAgIG1hcmtldGluZyA6IDEsXHJcbiAgICBtYXJyaWFnZSA6IDEsXHJcbiAgICBtYXJyaWVkIDogMSxcclxuICAgIG1hcnJ5IDogMSxcclxuICAgIG1hc2sgOiAxLFxyXG4gICAgbWFzcyA6IDEsXHJcbiAgICBtYXNzaXZlIDogMSxcclxuICAgIG1hc3RlciA6IDEsXHJcbiAgICBtYXRjaCA6IDEsXHJcbiAgICBtYXRlcmlhbCA6IDEsXHJcbiAgICBtYXRoIDogMSxcclxuICAgIG1hdHRlciA6IDEsXHJcbiAgICBtYXkgOiAxLFxyXG4gICAgbWF5YmUgOiAxLFxyXG4gICAgbWF5b3IgOiAxLFxyXG4gICAgbWUgOiAxLFxyXG4gICAgbWVhbCA6IDEsXHJcbiAgICBtZWFuIDogMSxcclxuICAgIG1lYW5pbmcgOiAxLFxyXG4gICAgbWVhbndoaWxlIDogMSxcclxuICAgIG1lYXN1cmUgOiAxLFxyXG4gICAgbWVhc3VyZW1lbnQgOiAxLFxyXG4gICAgbWVhdCA6IDEsXHJcbiAgICBtZWNoYW5pc20gOiAxLFxyXG4gICAgbWVkaWEgOiAxLFxyXG4gICAgbWVkaWNhbCA6IDEsXHJcbiAgICBtZWRpY2F0aW9uIDogMSxcclxuICAgIG1lZGljaW5lIDogMSxcclxuICAgIG1lZGl1bSA6IDEsXHJcbiAgICBtZWV0IDogMSxcclxuICAgIG1lZXRpbmcgOiAxLFxyXG4gICAgbWVtYmVyIDogMSxcclxuICAgIG1lbWJlcnNoaXAgOiAxLFxyXG4gICAgbWVtb3J5IDogMSxcclxuICAgIG1lbnRhbCA6IDEsXHJcbiAgICBtZW50aW9uIDogMSxcclxuICAgIG1lbnUgOiAxLFxyXG4gICAgbWVyZSA6IDEsXHJcbiAgICBtZXJlbHkgOiAxLFxyXG4gICAgbWVzcyA6IDEsXHJcbiAgICBtZXNzYWdlIDogMSxcclxuICAgIG1ldGFsIDogMSxcclxuICAgIG1ldGVyIDogMSxcclxuICAgIG1ldGhvZCA6IDEsXHJcbiAgICBNZXhpY2FuIDogMSxcclxuICAgIG1pZGRsZSA6IDEsXHJcbiAgICBtaWdodCA6IDEsXHJcbiAgICBtaWxpdGFyeSA6IDEsXHJcbiAgICBtaWxrIDogMSxcclxuICAgIG1pbGxpb24gOiAxLFxyXG4gICAgbWluZCA6IDEsXHJcbiAgICBtaW5lIDogMSxcclxuICAgIG1pbmlzdGVyIDogMSxcclxuICAgIG1pbm9yIDogMSxcclxuICAgIG1pbm9yaXR5IDogMSxcclxuICAgIG1pbnV0ZSA6IDEsXHJcbiAgICBtaXJhY2xlIDogMSxcclxuICAgIG1pcnJvciA6IDEsXHJcbiAgICBtaXNzIDogMSxcclxuICAgIG1pc3NpbGUgOiAxLFxyXG4gICAgbWlzc2lvbiA6IDEsXHJcbiAgICBtaXN0YWtlIDogMSxcclxuICAgIG1peCA6IDEsXHJcbiAgICBtaXh0dXJlIDogMSxcclxuICAgIFwibW0taG1tXCIgOiAxLFxyXG4gICAgbW9kZSA6IDEsXHJcbiAgICBtb2RlbCA6IDEsXHJcbiAgICBtb2RlcmF0ZSA6IDEsXHJcbiAgICBtb2Rlcm4gOiAxLFxyXG4gICAgbW9kZXN0IDogMSxcclxuICAgIG1vbSA6IDEsXHJcbiAgICBtb21lbnQgOiAxLFxyXG4gICAgbW9uZXkgOiAxLFxyXG4gICAgbW9uaXRvciA6IDEsXHJcbiAgICBtb250aCA6IDEsXHJcbiAgICBtb29kIDogMSxcclxuICAgIG1vb24gOiAxLFxyXG4gICAgbW9yYWwgOiAxLFxyXG4gICAgbW9yZSA6IDEsXHJcbiAgICBtb3Jlb3ZlciA6IDEsXHJcbiAgICBtb3JuaW5nIDogMSxcclxuICAgIG1vcnRnYWdlIDogMSxcclxuICAgIG1vc3QgOiAxLFxyXG4gICAgbW9zdGx5IDogMSxcclxuICAgIG1vdGhlciA6IDEsXHJcbiAgICBtb3Rpb24gOiAxLFxyXG4gICAgbW90aXZhdGlvbiA6IDEsXHJcbiAgICBtb3RvciA6IDEsXHJcbiAgICBtb3VudCA6IDEsXHJcbiAgICBtb3VudGFpbiA6IDEsXHJcbiAgICBtb3VzZSA6IDEsXHJcbiAgICBtb3V0aCA6IDEsXHJcbiAgICBtb3ZlIDogMSxcclxuICAgIG1vdmVtZW50IDogMSxcclxuICAgIG1vdmllIDogMSxcclxuICAgIE1yIDogMSxcclxuICAgIE1ycyA6IDEsXHJcbiAgICBNcyA6IDEsXHJcbiAgICBtdWNoIDogMSxcclxuICAgIG11bHRpcGxlIDogMSxcclxuICAgIG11cmRlciA6IDEsXHJcbiAgICBtdXNjbGUgOiAxLFxyXG4gICAgbXVzZXVtIDogMSxcclxuICAgIG11c2ljIDogMSxcclxuICAgIG11c2ljYWwgOiAxLFxyXG4gICAgbXVzaWNpYW4gOiAxLFxyXG4gICAgTXVzbGltIDogMSxcclxuICAgIG11c3QgOiAxLFxyXG4gICAgbXV0dWFsIDogMSxcclxuICAgIG15IDogMSxcclxuICAgIG15c2VsZiA6IDEsXHJcbiAgICBteXN0ZXJ5IDogMSxcclxuICAgIG15dGggOiAxLFxyXG4gICAgbmFrZWQgOiAxLFxyXG4gICAgbmFtZSA6IDEsXHJcbiAgICBuYXJyYXRpdmUgOiAxLFxyXG4gICAgbmFycm93IDogMSxcclxuICAgIG5hdGlvbiA6IDEsXHJcbiAgICBuYXRpb25hbCA6IDEsXHJcbiAgICBuYXRpdmUgOiAxLFxyXG4gICAgbmF0dXJhbCA6IDEsXHJcbiAgICBuYXR1cmFsbHkgOiAxLFxyXG4gICAgbmF0dXJlIDogMSxcclxuICAgIG5lYXIgOiAxLFxyXG4gICAgbmVhcmJ5IDogMSxcclxuICAgIG5lYXJseSA6IDEsXHJcbiAgICBuZWNlc3NhcmlseSA6IDEsXHJcbiAgICBuZWNlc3NhcnkgOiAxLFxyXG4gICAgbmVjayA6IDEsXHJcbiAgICBuZWVkIDogMSxcclxuICAgIG5lZ2F0aXZlIDogMSxcclxuICAgIG5lZ290aWF0ZSA6IDEsXHJcbiAgICBuZWdvdGlhdGlvbiA6IDEsXHJcbiAgICBuZWlnaGJvciA6IDEsXHJcbiAgICBuZWlnaGJvcmhvb2QgOiAxLFxyXG4gICAgbmVpdGhlciA6IDEsXHJcbiAgICBuZXJ2ZSA6IDEsXHJcbiAgICBuZXJ2b3VzIDogMSxcclxuICAgIG5ldCA6IDEsXHJcbiAgICBuZXR3b3JrIDogMSxcclxuICAgIG5ldmVyIDogMSxcclxuICAgIG5ldmVydGhlbGVzcyA6IDEsXHJcbiAgICBuZXcgOiAxLFxyXG4gICAgbmV3bHkgOiAxLFxyXG4gICAgbmV3cyA6IDEsXHJcbiAgICBuZXdzcGFwZXIgOiAxLFxyXG4gICAgbmV4dCA6IDEsXHJcbiAgICBuaWNlIDogMSxcclxuICAgIG5pZ2h0IDogMSxcclxuICAgIG5pbmUgOiAxLFxyXG4gICAgbm8gOiAxLFxyXG4gICAgbm9ib2R5IDogMSxcclxuICAgIG5vZCA6IDEsXHJcbiAgICBub2lzZSA6IDEsXHJcbiAgICBub21pbmF0aW9uIDogMSxcclxuICAgIG5vbmUgOiAxLFxyXG4gICAgbm9uZXRoZWxlc3MgOiAxLFxyXG4gICAgbm9yIDogMSxcclxuICAgIG5vcm1hbCA6IDEsXHJcbiAgICBub3JtYWxseSA6IDEsXHJcbiAgICBub3J0aCA6IDEsXHJcbiAgICBub3J0aGVybiA6IDEsXHJcbiAgICBub3NlIDogMSxcclxuICAgIG5vdCA6IDEsXHJcbiAgICBub3RlIDogMSxcclxuICAgIG5vdGhpbmcgOiAxLFxyXG4gICAgbm90aWNlIDogMSxcclxuICAgIG5vdGlvbiA6IDEsXHJcbiAgICBub3ZlbCA6IDEsXHJcbiAgICBub3cgOiAxLFxyXG4gICAgbm93aGVyZSA6IDEsXHJcbiAgICBcIm4ndFwiIDogMSxcclxuICAgIG51Y2xlYXIgOiAxLFxyXG4gICAgbnVtYmVyIDogMSxcclxuICAgIG51bWVyb3VzIDogMSxcclxuICAgIG51cnNlIDogMSxcclxuICAgIG51dCA6IDEsXHJcbiAgICBvYmplY3QgOiAxLFxyXG4gICAgb2JqZWN0aXZlIDogMSxcclxuICAgIG9ibGlnYXRpb24gOiAxLFxyXG4gICAgb2JzZXJ2YXRpb24gOiAxLFxyXG4gICAgb2JzZXJ2ZSA6IDEsXHJcbiAgICBvYnNlcnZlciA6IDEsXHJcbiAgICBvYnRhaW4gOiAxLFxyXG4gICAgb2J2aW91cyA6IDEsXHJcbiAgICBvYnZpb3VzbHkgOiAxLFxyXG4gICAgb2NjYXNpb24gOiAxLFxyXG4gICAgb2NjYXNpb25hbGx5IDogMSxcclxuICAgIG9jY3VwYXRpb24gOiAxLFxyXG4gICAgb2NjdXB5IDogMSxcclxuICAgIG9jY3VyIDogMSxcclxuICAgIG9jZWFuIDogMSxcclxuICAgIG9kZCA6IDEsXHJcbiAgICBvZGRzIDogMSxcclxuICAgIG9mIDogMSxcclxuICAgIG9mZiA6IDEsXHJcbiAgICBvZmZlbnNlIDogMSxcclxuICAgIG9mZmVuc2l2ZSA6IDEsXHJcbiAgICBvZmZlciA6IDEsXHJcbiAgICBvZmZpY2UgOiAxLFxyXG4gICAgb2ZmaWNlciA6IDEsXHJcbiAgICBvZmZpY2lhbCA6IDEsXHJcbiAgICBvZnRlbiA6IDEsXHJcbiAgICBvaCA6IDEsXHJcbiAgICBvaWwgOiAxLFxyXG4gICAgb2sgOiAxLFxyXG4gICAgb2theSA6IDEsXHJcbiAgICBvbGQgOiAxLFxyXG4gICAgT2x5bXBpYyA6IDEsXHJcbiAgICBvbiA6IDEsXHJcbiAgICBvbmNlIDogMSxcclxuICAgIG9uZSA6IDEsXHJcbiAgICBvbmdvaW5nIDogMSxcclxuICAgIG9uaW9uIDogMSxcclxuICAgIG9ubGluZSA6IDEsXHJcbiAgICBvbmx5IDogMSxcclxuICAgIG9udG8gOiAxLFxyXG4gICAgb3BlbiA6IDEsXHJcbiAgICBvcGVuaW5nIDogMSxcclxuICAgIG9wZXJhdGUgOiAxLFxyXG4gICAgb3BlcmF0aW5nIDogMSxcclxuICAgIG9wZXJhdGlvbiA6IDEsXHJcbiAgICBvcGVyYXRvciA6IDEsXHJcbiAgICBvcGluaW9uIDogMSxcclxuICAgIG9wcG9uZW50IDogMSxcclxuICAgIG9wcG9ydHVuaXR5IDogMSxcclxuICAgIG9wcG9zZSA6IDEsXHJcbiAgICBvcHBvc2l0ZSA6IDEsXHJcbiAgICBvcHBvc2l0aW9uIDogMSxcclxuICAgIG9wdGlvbiA6IDEsXHJcbiAgICBvciA6IDEsXHJcbiAgICBvcmFuZ2UgOiAxLFxyXG4gICAgb3JkZXIgOiAxLFxyXG4gICAgb3JkaW5hcnkgOiAxLFxyXG4gICAgb3JnYW5pYyA6IDEsXHJcbiAgICBvcmdhbml6YXRpb24gOiAxLFxyXG4gICAgb3JnYW5pemUgOiAxLFxyXG4gICAgb3JpZW50YXRpb24gOiAxLFxyXG4gICAgb3JpZ2luIDogMSxcclxuICAgIG9yaWdpbmFsIDogMSxcclxuICAgIG9yaWdpbmFsbHkgOiAxLFxyXG4gICAgb3RoZXIgOiAxLFxyXG4gICAgb3RoZXJzIDogMSxcclxuICAgIG90aGVyd2lzZSA6IDEsXHJcbiAgICBvdWdodCA6IDEsXHJcbiAgICBvdXIgOiAxLFxyXG4gICAgb3Vyc2VsdmVzIDogMSxcclxuICAgIG91dCA6IDEsXHJcbiAgICBvdXRjb21lIDogMSxcclxuICAgIG91dHNpZGUgOiAxLFxyXG4gICAgb3ZlbiA6IDEsXHJcbiAgICBvdmVyIDogMSxcclxuICAgIG92ZXJhbGwgOiAxLFxyXG4gICAgb3ZlcmNvbWUgOiAxLFxyXG4gICAgb3Zlcmxvb2sgOiAxLFxyXG4gICAgb3dlIDogMSxcclxuICAgIG93biA6IDEsXHJcbiAgICBvd25lciA6IDEsXHJcbiAgICBwYWNlIDogMSxcclxuICAgIHBhY2sgOiAxLFxyXG4gICAgcGFja2FnZSA6IDEsXHJcbiAgICBwYWdlIDogMSxcclxuICAgIHBhaW4gOiAxLFxyXG4gICAgcGFpbmZ1bCA6IDEsXHJcbiAgICBwYWludCA6IDEsXHJcbiAgICBwYWludGVyIDogMSxcclxuICAgIHBhaW50aW5nIDogMSxcclxuICAgIHBhaXIgOiAxLFxyXG4gICAgcGFsZSA6IDEsXHJcbiAgICBQYWxlc3RpbmlhbiA6IDEsXHJcbiAgICBwYWxtIDogMSxcclxuICAgIHBhbiA6IDEsXHJcbiAgICBwYW5lbCA6IDEsXHJcbiAgICBwYW50IDogMSxcclxuICAgIHBhcGVyIDogMSxcclxuICAgIHBhcmVudCA6IDEsXHJcbiAgICBwYXJrIDogMSxcclxuICAgIHBhcmtpbmcgOiAxLFxyXG4gICAgcGFydCA6IDEsXHJcbiAgICBwYXJ0aWNpcGFudCA6IDEsXHJcbiAgICBwYXJ0aWNpcGF0ZSA6IDEsXHJcbiAgICBwYXJ0aWNpcGF0aW9uIDogMSxcclxuICAgIHBhcnRpY3VsYXIgOiAxLFxyXG4gICAgcGFydGljdWxhcmx5IDogMSxcclxuICAgIHBhcnRseSA6IDEsXHJcbiAgICBwYXJ0bmVyIDogMSxcclxuICAgIHBhcnRuZXJzaGlwIDogMSxcclxuICAgIHBhcnR5IDogMSxcclxuICAgIHBhc3MgOiAxLFxyXG4gICAgcGFzc2FnZSA6IDEsXHJcbiAgICBwYXNzZW5nZXIgOiAxLFxyXG4gICAgcGFzc2lvbiA6IDEsXHJcbiAgICBwYXN0IDogMSxcclxuICAgIHBhdGNoIDogMSxcclxuICAgIHBhdGggOiAxLFxyXG4gICAgcGF0aWVudCA6IDEsXHJcbiAgICBwYXR0ZXJuIDogMSxcclxuICAgIHBhdXNlIDogMSxcclxuICAgIHBheSA6IDEsXHJcbiAgICBwYXltZW50IDogMSxcclxuICAgIFBDIDogMSxcclxuICAgIHBlYWNlIDogMSxcclxuICAgIHBlYWsgOiAxLFxyXG4gICAgcGVlciA6IDEsXHJcbiAgICBwZW5hbHR5IDogMSxcclxuICAgIHBlb3BsZSA6IDEsXHJcbiAgICBwZXBwZXIgOiAxLFxyXG4gICAgcGVyIDogMSxcclxuICAgIHBlcmNlaXZlIDogMSxcclxuICAgIHBlcmNlbnRhZ2UgOiAxLFxyXG4gICAgcGVyY2VwdGlvbiA6IDEsXHJcbiAgICBwZXJmZWN0IDogMSxcclxuICAgIHBlcmZlY3RseSA6IDEsXHJcbiAgICBwZXJmb3JtIDogMSxcclxuICAgIHBlcmZvcm1hbmNlIDogMSxcclxuICAgIHBlcmhhcHMgOiAxLFxyXG4gICAgcGVyaW9kIDogMSxcclxuICAgIHBlcm1hbmVudCA6IDEsXHJcbiAgICBwZXJtaXNzaW9uIDogMSxcclxuICAgIHBlcm1pdCA6IDEsXHJcbiAgICBwZXJzb24gOiAxLFxyXG4gICAgcGVyc29uYWwgOiAxLFxyXG4gICAgcGVyc29uYWxpdHkgOiAxLFxyXG4gICAgcGVyc29uYWxseSA6IDEsXHJcbiAgICBwZXJzb25uZWwgOiAxLFxyXG4gICAgcGVyc3BlY3RpdmUgOiAxLFxyXG4gICAgcGVyc3VhZGUgOiAxLFxyXG4gICAgcGV0IDogMSxcclxuICAgIHBoYXNlIDogMSxcclxuICAgIHBoZW5vbWVub24gOiAxLFxyXG4gICAgcGhpbG9zb3BoeSA6IDEsXHJcbiAgICBwaG9uZSA6IDEsXHJcbiAgICBwaG90byA6IDEsXHJcbiAgICBwaG90b2dyYXBoIDogMSxcclxuICAgIHBob3RvZ3JhcGhlciA6IDEsXHJcbiAgICBwaHJhc2UgOiAxLFxyXG4gICAgcGh5c2ljYWwgOiAxLFxyXG4gICAgcGh5c2ljYWxseSA6IDEsXHJcbiAgICBwaHlzaWNpYW4gOiAxLFxyXG4gICAgcGlhbm8gOiAxLFxyXG4gICAgcGljayA6IDEsXHJcbiAgICBwaWN0dXJlIDogMSxcclxuICAgIHBpZSA6IDEsXHJcbiAgICBwaWVjZSA6IDEsXHJcbiAgICBwaWxlIDogMSxcclxuICAgIHBpbG90IDogMSxcclxuICAgIHBpbmUgOiAxLFxyXG4gICAgcGluayA6IDEsXHJcbiAgICBwaXBlIDogMSxcclxuICAgIHBpdGNoIDogMSxcclxuICAgIHBsYWNlIDogMSxcclxuICAgIHBsYW4gOiAxLFxyXG4gICAgcGxhbmUgOiAxLFxyXG4gICAgcGxhbmV0IDogMSxcclxuICAgIHBsYW5uaW5nIDogMSxcclxuICAgIHBsYW50IDogMSxcclxuICAgIHBsYXN0aWMgOiAxLFxyXG4gICAgcGxhdGUgOiAxLFxyXG4gICAgcGxhdGZvcm0gOiAxLFxyXG4gICAgcGxheSA6IDEsXHJcbiAgICBwbGF5ZXIgOiAxLFxyXG4gICAgcGxlYXNlIDogMSxcclxuICAgIHBsZWFzdXJlIDogMSxcclxuICAgIHBsZW50eSA6IDEsXHJcbiAgICBwbG90IDogMSxcclxuICAgIHBsdXMgOiAxLFxyXG4gICAgUE0gOiAxLFxyXG4gICAgcG9ja2V0IDogMSxcclxuICAgIHBvZW0gOiAxLFxyXG4gICAgcG9ldCA6IDEsXHJcbiAgICBwb2V0cnkgOiAxLFxyXG4gICAgcG9pbnQgOiAxLFxyXG4gICAgcG9sZSA6IDEsXHJcbiAgICBwb2xpY2UgOiAxLFxyXG4gICAgcG9saWN5IDogMSxcclxuICAgIHBvbGl0aWNhbCA6IDEsXHJcbiAgICBwb2xpdGljYWxseSA6IDEsXHJcbiAgICBwb2xpdGljaWFuIDogMSxcclxuICAgIHBvbGl0aWNzIDogMSxcclxuICAgIHBvbGwgOiAxLFxyXG4gICAgcG9sbHV0aW9uIDogMSxcclxuICAgIHBvb2wgOiAxLFxyXG4gICAgcG9vciA6IDEsXHJcbiAgICBwb3AgOiAxLFxyXG4gICAgcG9wdWxhciA6IDEsXHJcbiAgICBwb3B1bGF0aW9uIDogMSxcclxuICAgIHBvcmNoIDogMSxcclxuICAgIHBvcnQgOiAxLFxyXG4gICAgcG9ydGlvbiA6IDEsXHJcbiAgICBwb3J0cmFpdCA6IDEsXHJcbiAgICBwb3J0cmF5IDogMSxcclxuICAgIHBvc2UgOiAxLFxyXG4gICAgcG9zaXRpb24gOiAxLFxyXG4gICAgcG9zaXRpdmUgOiAxLFxyXG4gICAgcG9zc2VzcyA6IDEsXHJcbiAgICBwb3NzaWJpbGl0eSA6IDEsXHJcbiAgICBwb3NzaWJsZSA6IDEsXHJcbiAgICBwb3NzaWJseSA6IDEsXHJcbiAgICBwb3N0IDogMSxcclxuICAgIHBvdCA6IDEsXHJcbiAgICBwb3RhdG8gOiAxLFxyXG4gICAgcG90ZW50aWFsIDogMSxcclxuICAgIHBvdGVudGlhbGx5IDogMSxcclxuICAgIHBvdW5kIDogMSxcclxuICAgIHBvdXIgOiAxLFxyXG4gICAgcG92ZXJ0eSA6IDEsXHJcbiAgICBwb3dkZXIgOiAxLFxyXG4gICAgcG93ZXIgOiAxLFxyXG4gICAgcG93ZXJmdWwgOiAxLFxyXG4gICAgcHJhY3RpY2FsIDogMSxcclxuICAgIHByYWN0aWNlIDogMSxcclxuICAgIHByYXkgOiAxLFxyXG4gICAgcHJheWVyIDogMSxcclxuICAgIHByZWNpc2VseSA6IDEsXHJcbiAgICBwcmVkaWN0IDogMSxcclxuICAgIHByZWZlciA6IDEsXHJcbiAgICBwcmVmZXJlbmNlIDogMSxcclxuICAgIHByZWduYW5jeSA6IDEsXHJcbiAgICBwcmVnbmFudCA6IDEsXHJcbiAgICBwcmVwYXJhdGlvbiA6IDEsXHJcbiAgICBwcmVwYXJlIDogMSxcclxuICAgIHByZXNjcmlwdGlvbiA6IDEsXHJcbiAgICBwcmVzZW5jZSA6IDEsXHJcbiAgICBwcmVzZW50IDogMSxcclxuICAgIHByZXNlbnRhdGlvbiA6IDEsXHJcbiAgICBwcmVzZXJ2ZSA6IDEsXHJcbiAgICBwcmVzaWRlbnQgOiAxLFxyXG4gICAgcHJlc2lkZW50aWFsIDogMSxcclxuICAgIHByZXNzIDogMSxcclxuICAgIHByZXNzdXJlIDogMSxcclxuICAgIHByZXRlbmQgOiAxLFxyXG4gICAgcHJldHR5IDogMSxcclxuICAgIHByZXZlbnQgOiAxLFxyXG4gICAgcHJldmlvdXMgOiAxLFxyXG4gICAgcHJldmlvdXNseSA6IDEsXHJcbiAgICBwcmljZSA6IDEsXHJcbiAgICBwcmlkZSA6IDEsXHJcbiAgICBwcmllc3QgOiAxLFxyXG4gICAgcHJpbWFyaWx5IDogMSxcclxuICAgIHByaW1hcnkgOiAxLFxyXG4gICAgcHJpbWUgOiAxLFxyXG4gICAgcHJpbmNpcGFsIDogMSxcclxuICAgIHByaW5jaXBsZSA6IDEsXHJcbiAgICBwcmludCA6IDEsXHJcbiAgICBwcmlvciA6IDEsXHJcbiAgICBwcmlvcml0eSA6IDEsXHJcbiAgICBwcmlzb24gOiAxLFxyXG4gICAgcHJpc29uZXIgOiAxLFxyXG4gICAgcHJpdmFjeSA6IDEsXHJcbiAgICBwcml2YXRlIDogMSxcclxuICAgIHByb2JhYmx5IDogMSxcclxuICAgIHByb2JsZW0gOiAxLFxyXG4gICAgcHJvY2VkdXJlIDogMSxcclxuICAgIHByb2NlZWQgOiAxLFxyXG4gICAgcHJvY2VzcyA6IDEsXHJcbiAgICBwcm9kdWNlIDogMSxcclxuICAgIHByb2R1Y2VyIDogMSxcclxuICAgIHByb2R1Y3QgOiAxLFxyXG4gICAgcHJvZHVjdGlvbiA6IDEsXHJcbiAgICBwcm9mZXNzaW9uIDogMSxcclxuICAgIHByb2Zlc3Npb25hbCA6IDEsXHJcbiAgICBwcm9mZXNzb3IgOiAxLFxyXG4gICAgcHJvZmlsZSA6IDEsXHJcbiAgICBwcm9maXQgOiAxLFxyXG4gICAgcHJvZ3JhbSA6IDEsXHJcbiAgICBwcm9ncmVzcyA6IDEsXHJcbiAgICBwcm9qZWN0IDogMSxcclxuICAgIHByb21pbmVudCA6IDEsXHJcbiAgICBwcm9taXNlIDogMSxcclxuICAgIHByb21vdGUgOiAxLFxyXG4gICAgcHJvbXB0IDogMSxcclxuICAgIHByb29mIDogMSxcclxuICAgIHByb3BlciA6IDEsXHJcbiAgICBwcm9wZXJseSA6IDEsXHJcbiAgICBwcm9wZXJ0eSA6IDEsXHJcbiAgICBwcm9wb3J0aW9uIDogMSxcclxuICAgIHByb3Bvc2FsIDogMSxcclxuICAgIHByb3Bvc2UgOiAxLFxyXG4gICAgcHJvcG9zZWQgOiAxLFxyXG4gICAgcHJvc2VjdXRvciA6IDEsXHJcbiAgICBwcm9zcGVjdCA6IDEsXHJcbiAgICBwcm90ZWN0IDogMSxcclxuICAgIHByb3RlY3Rpb24gOiAxLFxyXG4gICAgcHJvdGVpbiA6IDEsXHJcbiAgICBwcm90ZXN0IDogMSxcclxuICAgIHByb3VkIDogMSxcclxuICAgIHByb3ZlIDogMSxcclxuICAgIHByb3ZpZGUgOiAxLFxyXG4gICAgcHJvdmlkZXIgOiAxLFxyXG4gICAgcHJvdmluY2UgOiAxLFxyXG4gICAgcHJvdmlzaW9uIDogMSxcclxuICAgIHBzeWNob2xvZ2ljYWwgOiAxLFxyXG4gICAgcHN5Y2hvbG9naXN0IDogMSxcclxuICAgIHBzeWNob2xvZ3kgOiAxLFxyXG4gICAgcHVibGljIDogMSxcclxuICAgIHB1YmxpY2F0aW9uIDogMSxcclxuICAgIHB1YmxpY2x5IDogMSxcclxuICAgIHB1Ymxpc2ggOiAxLFxyXG4gICAgcHVibGlzaGVyIDogMSxcclxuICAgIHB1bGwgOiAxLFxyXG4gICAgcHVuaXNobWVudCA6IDEsXHJcbiAgICBwdXJjaGFzZSA6IDEsXHJcbiAgICBwdXJlIDogMSxcclxuICAgIHB1cnBvc2UgOiAxLFxyXG4gICAgcHVyc3VlIDogMSxcclxuICAgIHB1c2ggOiAxLFxyXG4gICAgcHV0IDogMSxcclxuICAgIHF1YWxpZnkgOiAxLFxyXG4gICAgcXVhbGl0eSA6IDEsXHJcbiAgICBxdWFydGVyIDogMSxcclxuICAgIHF1YXJ0ZXJiYWNrIDogMSxcclxuICAgIHF1ZXN0aW9uIDogMSxcclxuICAgIHF1aWNrIDogMSxcclxuICAgIHF1aWNrbHkgOiAxLFxyXG4gICAgcXVpZXQgOiAxLFxyXG4gICAgcXVpZXRseSA6IDEsXHJcbiAgICBxdWl0IDogMSxcclxuICAgIHF1aXRlIDogMSxcclxuICAgIHF1b3RlIDogMSxcclxuICAgIHJhY2UgOiAxLFxyXG4gICAgcmFjaWFsIDogMSxcclxuICAgIHJhZGljYWwgOiAxLFxyXG4gICAgcmFkaW8gOiAxLFxyXG4gICAgcmFpbCA6IDEsXHJcbiAgICByYWluIDogMSxcclxuICAgIHJhaXNlIDogMSxcclxuICAgIHJhbmdlIDogMSxcclxuICAgIHJhbmsgOiAxLFxyXG4gICAgcmFwaWQgOiAxLFxyXG4gICAgcmFwaWRseSA6IDEsXHJcbiAgICByYXJlIDogMSxcclxuICAgIHJhcmVseSA6IDEsXHJcbiAgICByYXRlIDogMSxcclxuICAgIHJhdGhlciA6IDEsXHJcbiAgICByYXRpbmcgOiAxLFxyXG4gICAgcmF0aW8gOiAxLFxyXG4gICAgcmF3IDogMSxcclxuICAgIHJlYWNoIDogMSxcclxuICAgIHJlYWN0IDogMSxcclxuICAgIHJlYWN0aW9uIDogMSxcclxuICAgIHJlYWQgOiAxLFxyXG4gICAgcmVhZGVyIDogMSxcclxuICAgIHJlYWRpbmcgOiAxLFxyXG4gICAgcmVhZHkgOiAxLFxyXG4gICAgcmVhbCA6IDEsXHJcbiAgICByZWFsaXR5IDogMSxcclxuICAgIHJlYWxpemUgOiAxLFxyXG4gICAgcmVhbGx5IDogMSxcclxuICAgIHJlYXNvbiA6IDEsXHJcbiAgICByZWFzb25hYmxlIDogMSxcclxuICAgIHJlY2FsbCA6IDEsXHJcbiAgICByZWNlaXZlIDogMSxcclxuICAgIHJlY2VudCA6IDEsXHJcbiAgICByZWNlbnRseSA6IDEsXHJcbiAgICByZWNpcGUgOiAxLFxyXG4gICAgcmVjb2duaXRpb24gOiAxLFxyXG4gICAgcmVjb2duaXplIDogMSxcclxuICAgIHJlY29tbWVuZCA6IDEsXHJcbiAgICByZWNvbW1lbmRhdGlvbiA6IDEsXHJcbiAgICByZWNvcmQgOiAxLFxyXG4gICAgcmVjb3JkaW5nIDogMSxcclxuICAgIHJlY292ZXIgOiAxLFxyXG4gICAgcmVjb3ZlcnkgOiAxLFxyXG4gICAgcmVjcnVpdCA6IDEsXHJcbiAgICByZWQgOiAxLFxyXG4gICAgcmVkdWNlIDogMSxcclxuICAgIHJlZHVjdGlvbiA6IDEsXHJcbiAgICByZWZlciA6IDEsXHJcbiAgICByZWZlcmVuY2UgOiAxLFxyXG4gICAgcmVmbGVjdCA6IDEsXHJcbiAgICByZWZsZWN0aW9uIDogMSxcclxuICAgIHJlZm9ybSA6IDEsXHJcbiAgICByZWZ1Z2VlIDogMSxcclxuICAgIHJlZnVzZSA6IDEsXHJcbiAgICByZWdhcmQgOiAxLFxyXG4gICAgcmVnYXJkaW5nIDogMSxcclxuICAgIHJlZ2FyZGxlc3MgOiAxLFxyXG4gICAgcmVnaW1lIDogMSxcclxuICAgIHJlZ2lvbiA6IDEsXHJcbiAgICByZWdpb25hbCA6IDEsXHJcbiAgICByZWdpc3RlciA6IDEsXHJcbiAgICByZWd1bGFyIDogMSxcclxuICAgIHJlZ3VsYXJseSA6IDEsXHJcbiAgICByZWd1bGF0ZSA6IDEsXHJcbiAgICByZWd1bGF0aW9uIDogMSxcclxuICAgIHJlaW5mb3JjZSA6IDEsXHJcbiAgICByZWplY3QgOiAxLFxyXG4gICAgcmVsYXRlIDogMSxcclxuICAgIHJlbGF0aW9uIDogMSxcclxuICAgIHJlbGF0aW9uc2hpcCA6IDEsXHJcbiAgICByZWxhdGl2ZSA6IDEsXHJcbiAgICByZWxhdGl2ZWx5IDogMSxcclxuICAgIHJlbGF4IDogMSxcclxuICAgIHJlbGVhc2UgOiAxLFxyXG4gICAgcmVsZXZhbnQgOiAxLFxyXG4gICAgcmVsaWVmIDogMSxcclxuICAgIHJlbGlnaW9uIDogMSxcclxuICAgIHJlbGlnaW91cyA6IDEsXHJcbiAgICByZWx5IDogMSxcclxuICAgIHJlbWFpbiA6IDEsXHJcbiAgICByZW1haW5pbmcgOiAxLFxyXG4gICAgcmVtYXJrYWJsZSA6IDEsXHJcbiAgICByZW1lbWJlciA6IDEsXHJcbiAgICByZW1pbmQgOiAxLFxyXG4gICAgcmVtb3RlIDogMSxcclxuICAgIHJlbW92ZSA6IDEsXHJcbiAgICByZXBlYXQgOiAxLFxyXG4gICAgcmVwZWF0ZWRseSA6IDEsXHJcbiAgICByZXBsYWNlIDogMSxcclxuICAgIHJlcGx5IDogMSxcclxuICAgIHJlcG9ydCA6IDEsXHJcbiAgICByZXBvcnRlciA6IDEsXHJcbiAgICByZXByZXNlbnQgOiAxLFxyXG4gICAgcmVwcmVzZW50YXRpb24gOiAxLFxyXG4gICAgcmVwcmVzZW50YXRpdmUgOiAxLFxyXG4gICAgUmVwdWJsaWNhbiA6IDEsXHJcbiAgICByZXB1dGF0aW9uIDogMSxcclxuICAgIHJlcXVlc3QgOiAxLFxyXG4gICAgcmVxdWlyZSA6IDEsXHJcbiAgICByZXF1aXJlbWVudCA6IDEsXHJcbiAgICByZXNlYXJjaCA6IDEsXHJcbiAgICByZXNlYXJjaGVyIDogMSxcclxuICAgIHJlc2VtYmxlIDogMSxcclxuICAgIHJlc2VydmF0aW9uIDogMSxcclxuICAgIHJlc2lkZW50IDogMSxcclxuICAgIHJlc2lzdCA6IDEsXHJcbiAgICByZXNpc3RhbmNlIDogMSxcclxuICAgIHJlc29sdXRpb24gOiAxLFxyXG4gICAgcmVzb2x2ZSA6IDEsXHJcbiAgICByZXNvcnQgOiAxLFxyXG4gICAgcmVzb3VyY2UgOiAxLFxyXG4gICAgcmVzcGVjdCA6IDEsXHJcbiAgICByZXNwb25kIDogMSxcclxuICAgIHJlc3BvbmRlbnQgOiAxLFxyXG4gICAgcmVzcG9uc2UgOiAxLFxyXG4gICAgcmVzcG9uc2liaWxpdHkgOiAxLFxyXG4gICAgcmVzcG9uc2libGUgOiAxLFxyXG4gICAgcmVzdCA6IDEsXHJcbiAgICByZXN0YXVyYW50IDogMSxcclxuICAgIHJlc3RvcmUgOiAxLFxyXG4gICAgcmVzdHJpY3Rpb24gOiAxLFxyXG4gICAgcmVzdWx0IDogMSxcclxuICAgIHJldGFpbiA6IDEsXHJcbiAgICByZXRpcmUgOiAxLFxyXG4gICAgcmV0aXJlbWVudCA6IDEsXHJcbiAgICByZXR1cm4gOiAxLFxyXG4gICAgcmV2ZWFsIDogMSxcclxuICAgIHJldmVudWUgOiAxLFxyXG4gICAgcmV2aWV3IDogMSxcclxuICAgIHJldm9sdXRpb24gOiAxLFxyXG4gICAgcmh5dGhtIDogMSxcclxuICAgIHJpY2UgOiAxLFxyXG4gICAgcmljaCA6IDEsXHJcbiAgICByaWQgOiAxLFxyXG4gICAgcmlkZSA6IDEsXHJcbiAgICByaWZsZSA6IDEsXHJcbiAgICByaWdodCA6IDEsXHJcbiAgICByaW5nIDogMSxcclxuICAgIHJpc2UgOiAxLFxyXG4gICAgcmlzayA6IDEsXHJcbiAgICByaXZlciA6IDEsXHJcbiAgICByb2FkIDogMSxcclxuICAgIHJvY2sgOiAxLFxyXG4gICAgcm9sZSA6IDEsXHJcbiAgICByb2xsIDogMSxcclxuICAgIHJvbWFudGljIDogMSxcclxuICAgIHJvb2YgOiAxLFxyXG4gICAgcm9vbSA6IDEsXHJcbiAgICByb290IDogMSxcclxuICAgIHJvcGUgOiAxLFxyXG4gICAgcm9zZSA6IDEsXHJcbiAgICByb3VnaCA6IDEsXHJcbiAgICByb3VnaGx5IDogMSxcclxuICAgIHJvdW5kIDogMSxcclxuICAgIHJvdXRlIDogMSxcclxuICAgIHJvdXRpbmUgOiAxLFxyXG4gICAgcm93IDogMSxcclxuICAgIHJ1YiA6IDEsXHJcbiAgICBydWxlIDogMSxcclxuICAgIHJ1biA6IDEsXHJcbiAgICBydW5uaW5nIDogMSxcclxuICAgIHJ1cmFsIDogMSxcclxuICAgIHJ1c2ggOiAxLFxyXG4gICAgUnVzc2lhbiA6IDEsXHJcbiAgICBzYWNyZWQgOiAxLFxyXG4gICAgc2FkIDogMSxcclxuICAgIHNhZmUgOiAxLFxyXG4gICAgc2FmZXR5IDogMSxcclxuICAgIHNha2UgOiAxLFxyXG4gICAgc2FsYWQgOiAxLFxyXG4gICAgc2FsYXJ5IDogMSxcclxuICAgIHNhbGUgOiAxLFxyXG4gICAgc2FsZXMgOiAxLFxyXG4gICAgc2FsdCA6IDEsXHJcbiAgICBzYW1lIDogMSxcclxuICAgIHNhbXBsZSA6IDEsXHJcbiAgICBzYW5jdGlvbiA6IDEsXHJcbiAgICBzYW5kIDogMSxcclxuICAgIHNhdGVsbGl0ZSA6IDEsXHJcbiAgICBzYXRpc2ZhY3Rpb24gOiAxLFxyXG4gICAgc2F0aXNmeSA6IDEsXHJcbiAgICBzYXVjZSA6IDEsXHJcbiAgICBzYXZlIDogMSxcclxuICAgIHNhdmluZyA6IDEsXHJcbiAgICBzYXkgOiAxLFxyXG4gICAgc2NhbGUgOiAxLFxyXG4gICAgc2NhbmRhbCA6IDEsXHJcbiAgICBzY2FyZWQgOiAxLFxyXG4gICAgc2NlbmFyaW8gOiAxLFxyXG4gICAgc2NlbmUgOiAxLFxyXG4gICAgc2NoZWR1bGUgOiAxLFxyXG4gICAgc2NoZW1lIDogMSxcclxuICAgIHNjaG9sYXIgOiAxLFxyXG4gICAgc2Nob2xhcnNoaXAgOiAxLFxyXG4gICAgc2Nob29sIDogMSxcclxuICAgIHNjaWVuY2UgOiAxLFxyXG4gICAgc2NpZW50aWZpYyA6IDEsXHJcbiAgICBzY2llbnRpc3QgOiAxLFxyXG4gICAgc2NvcGUgOiAxLFxyXG4gICAgc2NvcmUgOiAxLFxyXG4gICAgc2NyZWFtIDogMSxcclxuICAgIHNjcmVlbiA6IDEsXHJcbiAgICBzY3JpcHQgOiAxLFxyXG4gICAgc2VhIDogMSxcclxuICAgIHNlYXJjaCA6IDEsXHJcbiAgICBzZWFzb24gOiAxLFxyXG4gICAgc2VhdCA6IDEsXHJcbiAgICBzZWNvbmQgOiAxLFxyXG4gICAgc2VjcmV0IDogMSxcclxuICAgIHNlY3JldGFyeSA6IDEsXHJcbiAgICBzZWN0aW9uIDogMSxcclxuICAgIHNlY3RvciA6IDEsXHJcbiAgICBzZWN1cmUgOiAxLFxyXG4gICAgc2VjdXJpdHkgOiAxLFxyXG4gICAgc2VlIDogMSxcclxuICAgIHNlZWQgOiAxLFxyXG4gICAgc2VlayA6IDEsXHJcbiAgICBzZWVtIDogMSxcclxuICAgIHNlZ21lbnQgOiAxLFxyXG4gICAgc2VpemUgOiAxLFxyXG4gICAgc2VsZWN0IDogMSxcclxuICAgIHNlbGVjdGlvbiA6IDEsXHJcbiAgICBzZWxmIDogMSxcclxuICAgIHNlbGwgOiAxLFxyXG4gICAgU2VuYXRlIDogMSxcclxuICAgIHNlbmF0b3IgOiAxLFxyXG4gICAgc2VuZCA6IDEsXHJcbiAgICBzZW5pb3IgOiAxLFxyXG4gICAgc2Vuc2UgOiAxLFxyXG4gICAgc2Vuc2l0aXZlIDogMSxcclxuICAgIHNlbnRlbmNlIDogMSxcclxuICAgIHNlcGFyYXRlIDogMSxcclxuICAgIHNlcXVlbmNlIDogMSxcclxuICAgIHNlcmllcyA6IDEsXHJcbiAgICBzZXJpb3VzIDogMSxcclxuICAgIHNlcmlvdXNseSA6IDEsXHJcbiAgICBzZXJ2ZSA6IDEsXHJcbiAgICBzZXJ2aWNlIDogMSxcclxuICAgIHNlc3Npb24gOiAxLFxyXG4gICAgc2V0IDogMSxcclxuICAgIHNldHRpbmcgOiAxLFxyXG4gICAgc2V0dGxlIDogMSxcclxuICAgIHNldHRsZW1lbnQgOiAxLFxyXG4gICAgc2V2ZW4gOiAxLFxyXG4gICAgc2V2ZXJhbCA6IDEsXHJcbiAgICBzZXZlcmUgOiAxLFxyXG4gICAgc2V4IDogMSxcclxuICAgIHNleHVhbCA6IDEsXHJcbiAgICBzaGFkZSA6IDEsXHJcbiAgICBzaGFkb3cgOiAxLFxyXG4gICAgc2hha2UgOiAxLFxyXG4gICAgc2hhbGwgOiAxLFxyXG4gICAgc2hhcGUgOiAxLFxyXG4gICAgc2hhcmUgOiAxLFxyXG4gICAgc2hhcnAgOiAxLFxyXG4gICAgc2hlIDogMSxcclxuICAgIHNoZWV0IDogMSxcclxuICAgIHNoZWxmIDogMSxcclxuICAgIHNoZWxsIDogMSxcclxuICAgIHNoZWx0ZXIgOiAxLFxyXG4gICAgc2hpZnQgOiAxLFxyXG4gICAgc2hpbmUgOiAxLFxyXG4gICAgc2hpcCA6IDEsXHJcbiAgICBzaGlydCA6IDEsXHJcbiAgICBzaGl0IDogMSxcclxuICAgIHNob2NrIDogMSxcclxuICAgIHNob2UgOiAxLFxyXG4gICAgc2hvb3QgOiAxLFxyXG4gICAgc2hvb3RpbmcgOiAxLFxyXG4gICAgc2hvcCA6IDEsXHJcbiAgICBzaG9wcGluZyA6IDEsXHJcbiAgICBzaG9yZSA6IDEsXHJcbiAgICBzaG9ydCA6IDEsXHJcbiAgICBzaG9ydGx5IDogMSxcclxuICAgIHNob3QgOiAxLFxyXG4gICAgc2hvdWxkIDogMSxcclxuICAgIHNob3VsZGVyIDogMSxcclxuICAgIHNob3V0IDogMSxcclxuICAgIHNob3cgOiAxLFxyXG4gICAgc2hvd2VyIDogMSxcclxuICAgIHNocnVnIDogMSxcclxuICAgIHNodXQgOiAxLFxyXG4gICAgc2ljayA6IDEsXHJcbiAgICBzaWRlIDogMSxcclxuICAgIHNpZ2ggOiAxLFxyXG4gICAgc2lnaHQgOiAxLFxyXG4gICAgc2lnbiA6IDEsXHJcbiAgICBzaWduYWwgOiAxLFxyXG4gICAgc2lnbmlmaWNhbmNlIDogMSxcclxuICAgIHNpZ25pZmljYW50IDogMSxcclxuICAgIHNpZ25pZmljYW50bHkgOiAxLFxyXG4gICAgc2lsZW5jZSA6IDEsXHJcbiAgICBzaWxlbnQgOiAxLFxyXG4gICAgc2lsdmVyIDogMSxcclxuICAgIHNpbWlsYXIgOiAxLFxyXG4gICAgc2ltaWxhcmx5IDogMSxcclxuICAgIHNpbXBsZSA6IDEsXHJcbiAgICBzaW1wbHkgOiAxLFxyXG4gICAgc2luIDogMSxcclxuICAgIHNpbmNlIDogMSxcclxuICAgIHNpbmcgOiAxLFxyXG4gICAgc2luZ2VyIDogMSxcclxuICAgIHNpbmdsZSA6IDEsXHJcbiAgICBzaW5rIDogMSxcclxuICAgIHNpciA6IDEsXHJcbiAgICBzaXN0ZXIgOiAxLFxyXG4gICAgc2l0IDogMSxcclxuICAgIHNpdGUgOiAxLFxyXG4gICAgc2l0dWF0aW9uIDogMSxcclxuICAgIHNpeCA6IDEsXHJcbiAgICBzaXplIDogMSxcclxuICAgIHNraSA6IDEsXHJcbiAgICBza2lsbCA6IDEsXHJcbiAgICBza2luIDogMSxcclxuICAgIHNreSA6IDEsXHJcbiAgICBzbGF2ZSA6IDEsXHJcbiAgICBzbGVlcCA6IDEsXHJcbiAgICBzbGljZSA6IDEsXHJcbiAgICBzbGlkZSA6IDEsXHJcbiAgICBzbGlnaHQgOiAxLFxyXG4gICAgc2xpZ2h0bHkgOiAxLFxyXG4gICAgc2xpcCA6IDEsXHJcbiAgICBzbG93IDogMSxcclxuICAgIHNsb3dseSA6IDEsXHJcbiAgICBzbWFsbCA6IDEsXHJcbiAgICBzbWFydCA6IDEsXHJcbiAgICBzbWVsbCA6IDEsXHJcbiAgICBzbWlsZSA6IDEsXHJcbiAgICBzbW9rZSA6IDEsXHJcbiAgICBzbW9vdGggOiAxLFxyXG4gICAgc25hcCA6IDEsXHJcbiAgICBzbm93IDogMSxcclxuICAgIHNvIDogMSxcclxuICAgIFwic28tY2FsbGVkXCIgOiAxLFxyXG4gICAgc29jY2VyIDogMSxcclxuICAgIHNvY2lhbCA6IDEsXHJcbiAgICBzb2NpZXR5IDogMSxcclxuICAgIHNvZnQgOiAxLFxyXG4gICAgc29mdHdhcmUgOiAxLFxyXG4gICAgc29pbCA6IDEsXHJcbiAgICBzb2xhciA6IDEsXHJcbiAgICBzb2xkaWVyIDogMSxcclxuICAgIHNvbGlkIDogMSxcclxuICAgIHNvbHV0aW9uIDogMSxcclxuICAgIHNvbHZlIDogMSxcclxuICAgIHNvbWUgOiAxLFxyXG4gICAgc29tZWJvZHkgOiAxLFxyXG4gICAgc29tZWhvdyA6IDEsXHJcbiAgICBzb21lb25lIDogMSxcclxuICAgIHNvbWV0aGluZyA6IDEsXHJcbiAgICBzb21ldGltZXMgOiAxLFxyXG4gICAgc29tZXdoYXQgOiAxLFxyXG4gICAgc29tZXdoZXJlIDogMSxcclxuICAgIHNvbiA6IDEsXHJcbiAgICBzb25nIDogMSxcclxuICAgIHNvb24gOiAxLFxyXG4gICAgc29waGlzdGljYXRlZCA6IDEsXHJcbiAgICBzb3JyeSA6IDEsXHJcbiAgICBzb3J0IDogMSxcclxuICAgIHNvdWwgOiAxLFxyXG4gICAgc291bmQgOiAxLFxyXG4gICAgc291cCA6IDEsXHJcbiAgICBzb3VyY2UgOiAxLFxyXG4gICAgc291dGggOiAxLFxyXG4gICAgc291dGhlcm4gOiAxLFxyXG4gICAgU292aWV0IDogMSxcclxuICAgIHNwYWNlIDogMSxcclxuICAgIFNwYW5pc2ggOiAxLFxyXG4gICAgc3BlYWsgOiAxLFxyXG4gICAgc3BlYWtlciA6IDEsXHJcbiAgICBzcGVjaWFsIDogMSxcclxuICAgIHNwZWNpYWxpc3QgOiAxLFxyXG4gICAgc3BlY2llcyA6IDEsXHJcbiAgICBzcGVjaWZpYyA6IDEsXHJcbiAgICBzcGVjaWZpY2FsbHkgOiAxLFxyXG4gICAgc3BlZWNoIDogMSxcclxuICAgIHNwZWVkIDogMSxcclxuICAgIHNwZW5kIDogMSxcclxuICAgIHNwZW5kaW5nIDogMSxcclxuICAgIHNwaW4gOiAxLFxyXG4gICAgc3Bpcml0IDogMSxcclxuICAgIHNwaXJpdHVhbCA6IDEsXHJcbiAgICBzcGxpdCA6IDEsXHJcbiAgICBzcG9rZXNtYW4gOiAxLFxyXG4gICAgc3BvcnQgOiAxLFxyXG4gICAgc3BvdCA6IDEsXHJcbiAgICBzcHJlYWQgOiAxLFxyXG4gICAgc3ByaW5nIDogMSxcclxuICAgIHNxdWFyZSA6IDEsXHJcbiAgICBzcXVlZXplIDogMSxcclxuICAgIHN0YWJpbGl0eSA6IDEsXHJcbiAgICBzdGFibGUgOiAxLFxyXG4gICAgc3RhZmYgOiAxLFxyXG4gICAgc3RhZ2UgOiAxLFxyXG4gICAgc3RhaXIgOiAxLFxyXG4gICAgc3Rha2UgOiAxLFxyXG4gICAgc3RhbmQgOiAxLFxyXG4gICAgc3RhbmRhcmQgOiAxLFxyXG4gICAgc3RhbmRpbmcgOiAxLFxyXG4gICAgc3RhciA6IDEsXHJcbiAgICBzdGFyZSA6IDEsXHJcbiAgICBzdGFydCA6IDEsXHJcbiAgICBzdGF0ZSA6IDEsXHJcbiAgICBzdGF0ZW1lbnQgOiAxLFxyXG4gICAgc3RhdGlvbiA6IDEsXHJcbiAgICBzdGF0aXN0aWNzIDogMSxcclxuICAgIHN0YXR1cyA6IDEsXHJcbiAgICBzdGF5IDogMSxcclxuICAgIHN0ZWFkeSA6IDEsXHJcbiAgICBzdGVhbCA6IDEsXHJcbiAgICBzdGVlbCA6IDEsXHJcbiAgICBzdGVwIDogMSxcclxuICAgIHN0aWNrIDogMSxcclxuICAgIHN0aWxsIDogMSxcclxuICAgIHN0aXIgOiAxLFxyXG4gICAgc3RvY2sgOiAxLFxyXG4gICAgc3RvbWFjaCA6IDEsXHJcbiAgICBzdG9uZSA6IDEsXHJcbiAgICBzdG9wIDogMSxcclxuICAgIHN0b3JhZ2UgOiAxLFxyXG4gICAgc3RvcmUgOiAxLFxyXG4gICAgc3Rvcm0gOiAxLFxyXG4gICAgc3RvcnkgOiAxLFxyXG4gICAgc3RyYWlnaHQgOiAxLFxyXG4gICAgc3RyYW5nZSA6IDEsXHJcbiAgICBzdHJhbmdlciA6IDEsXHJcbiAgICBzdHJhdGVnaWMgOiAxLFxyXG4gICAgc3RyYXRlZ3kgOiAxLFxyXG4gICAgc3RyZWFtIDogMSxcclxuICAgIHN0cmVldCA6IDEsXHJcbiAgICBzdHJlbmd0aCA6IDEsXHJcbiAgICBzdHJlbmd0aGVuIDogMSxcclxuICAgIHN0cmVzcyA6IDEsXHJcbiAgICBzdHJldGNoIDogMSxcclxuICAgIHN0cmlrZSA6IDEsXHJcbiAgICBzdHJpbmcgOiAxLFxyXG4gICAgc3RyaXAgOiAxLFxyXG4gICAgc3Ryb2tlIDogMSxcclxuICAgIHN0cm9uZyA6IDEsXHJcbiAgICBzdHJvbmdseSA6IDEsXHJcbiAgICBzdHJ1Y3R1cmUgOiAxLFxyXG4gICAgc3RydWdnbGUgOiAxLFxyXG4gICAgc3R1ZGVudCA6IDEsXHJcbiAgICBzdHVkaW8gOiAxLFxyXG4gICAgc3R1ZHkgOiAxLFxyXG4gICAgc3R1ZmYgOiAxLFxyXG4gICAgc3R1cGlkIDogMSxcclxuICAgIHN0eWxlIDogMSxcclxuICAgIHN1YmplY3QgOiAxLFxyXG4gICAgc3VibWl0IDogMSxcclxuICAgIHN1YnNlcXVlbnQgOiAxLFxyXG4gICAgc3Vic3RhbmNlIDogMSxcclxuICAgIHN1YnN0YW50aWFsIDogMSxcclxuICAgIHN1Y2NlZWQgOiAxLFxyXG4gICAgc3VjY2VzcyA6IDEsXHJcbiAgICBzdWNjZXNzZnVsIDogMSxcclxuICAgIHN1Y2Nlc3NmdWxseSA6IDEsXHJcbiAgICBzdWNoIDogMSxcclxuICAgIHN1ZGRlbiA6IDEsXHJcbiAgICBzdWRkZW5seSA6IDEsXHJcbiAgICBzdWUgOiAxLFxyXG4gICAgc3VmZmVyIDogMSxcclxuICAgIHN1ZmZpY2llbnQgOiAxLFxyXG4gICAgc3VnYXIgOiAxLFxyXG4gICAgc3VnZ2VzdCA6IDEsXHJcbiAgICBzdWdnZXN0aW9uIDogMSxcclxuICAgIHN1aWNpZGUgOiAxLFxyXG4gICAgc3VpdCA6IDEsXHJcbiAgICBzdW1tZXIgOiAxLFxyXG4gICAgc3VtbWl0IDogMSxcclxuICAgIHN1biA6IDEsXHJcbiAgICBzdXBlciA6IDEsXHJcbiAgICBzdXBwbHkgOiAxLFxyXG4gICAgc3VwcG9ydCA6IDEsXHJcbiAgICBzdXBwb3J0ZXIgOiAxLFxyXG4gICAgc3VwcG9zZSA6IDEsXHJcbiAgICBzdXBwb3NlZCA6IDEsXHJcbiAgICBTdXByZW1lIDogMSxcclxuICAgIHN1cmUgOiAxLFxyXG4gICAgc3VyZWx5IDogMSxcclxuICAgIHN1cmZhY2UgOiAxLFxyXG4gICAgc3VyZ2VyeSA6IDEsXHJcbiAgICBzdXJwcmlzZSA6IDEsXHJcbiAgICBzdXJwcmlzZWQgOiAxLFxyXG4gICAgc3VycHJpc2luZyA6IDEsXHJcbiAgICBzdXJwcmlzaW5nbHkgOiAxLFxyXG4gICAgc3Vycm91bmQgOiAxLFxyXG4gICAgc3VydmV5IDogMSxcclxuICAgIHN1cnZpdmFsIDogMSxcclxuICAgIHN1cnZpdmUgOiAxLFxyXG4gICAgc3Vydml2b3IgOiAxLFxyXG4gICAgc3VzcGVjdCA6IDEsXHJcbiAgICBzdXN0YWluIDogMSxcclxuICAgIHN3ZWFyIDogMSxcclxuICAgIHN3ZWVwIDogMSxcclxuICAgIHN3ZWV0IDogMSxcclxuICAgIHN3aW0gOiAxLFxyXG4gICAgc3dpbmcgOiAxLFxyXG4gICAgc3dpdGNoIDogMSxcclxuICAgIHN5bWJvbCA6IDEsXHJcbiAgICBzeW1wdG9tIDogMSxcclxuICAgIHN5c3RlbSA6IDEsXHJcbiAgICB0YWJsZSA6IDEsXHJcbiAgICB0YWJsZXNwb29uIDogMSxcclxuICAgIHRhY3RpYyA6IDEsXHJcbiAgICB0YWlsIDogMSxcclxuICAgIHRha2UgOiAxLFxyXG4gICAgdGFsZSA6IDEsXHJcbiAgICB0YWxlbnQgOiAxLFxyXG4gICAgdGFsayA6IDEsXHJcbiAgICB0YWxsIDogMSxcclxuICAgIHRhbmsgOiAxLFxyXG4gICAgdGFwIDogMSxcclxuICAgIHRhcGUgOiAxLFxyXG4gICAgdGFyZ2V0IDogMSxcclxuICAgIHRhc2sgOiAxLFxyXG4gICAgdGFzdGUgOiAxLFxyXG4gICAgdGF4IDogMSxcclxuICAgIHRheHBheWVyIDogMSxcclxuICAgIHRlYSA6IDEsXHJcbiAgICB0ZWFjaCA6IDEsXHJcbiAgICB0ZWFjaGVyIDogMSxcclxuICAgIHRlYWNoaW5nIDogMSxcclxuICAgIHRlYW0gOiAxLFxyXG4gICAgdGVhciA6IDEsXHJcbiAgICB0ZWFzcG9vbiA6IDEsXHJcbiAgICB0ZWNobmljYWwgOiAxLFxyXG4gICAgdGVjaG5pcXVlIDogMSxcclxuICAgIHRlY2hub2xvZ3kgOiAxLFxyXG4gICAgdGVlbiA6IDEsXHJcbiAgICB0ZWVuYWdlciA6IDEsXHJcbiAgICB0ZWxlcGhvbmUgOiAxLFxyXG4gICAgdGVsZXNjb3BlIDogMSxcclxuICAgIHRlbGV2aXNpb24gOiAxLFxyXG4gICAgdGVsbCA6IDEsXHJcbiAgICB0ZW1wZXJhdHVyZSA6IDEsXHJcbiAgICB0ZW1wb3JhcnkgOiAxLFxyXG4gICAgdGVuIDogMSxcclxuICAgIHRlbmQgOiAxLFxyXG4gICAgdGVuZGVuY3kgOiAxLFxyXG4gICAgdGVubmlzIDogMSxcclxuICAgIHRlbnNpb24gOiAxLFxyXG4gICAgdGVudCA6IDEsXHJcbiAgICB0ZXJtIDogMSxcclxuICAgIHRlcm1zIDogMSxcclxuICAgIHRlcnJpYmxlIDogMSxcclxuICAgIHRlcnJpdG9yeSA6IDEsXHJcbiAgICB0ZXJyb3IgOiAxLFxyXG4gICAgdGVycm9yaXNtIDogMSxcclxuICAgIHRlcnJvcmlzdCA6IDEsXHJcbiAgICB0ZXN0IDogMSxcclxuICAgIHRlc3RpZnkgOiAxLFxyXG4gICAgdGVzdGltb255IDogMSxcclxuICAgIHRlc3RpbmcgOiAxLFxyXG4gICAgdGV4dCA6IDEsXHJcbiAgICB0aGFuIDogMSxcclxuICAgIHRoYW5rIDogMSxcclxuICAgIHRoYW5rcyA6IDEsXHJcbiAgICB0aGF0IDogMSxcclxuICAgIHRoZSA6IDEsXHJcbiAgICB0aGVhdGVyIDogMSxcclxuICAgIHRoZWlyIDogMSxcclxuICAgIHRoZW0gOiAxLFxyXG4gICAgdGhlbWUgOiAxLFxyXG4gICAgdGhlbXNlbHZlcyA6IDEsXHJcbiAgICB0aGVuIDogMSxcclxuICAgIHRoZW9yeSA6IDEsXHJcbiAgICB0aGVyYXB5IDogMSxcclxuICAgIHRoZXJlIDogMSxcclxuICAgIHRoZXJlZm9yZSA6IDEsXHJcbiAgICB0aGVzZSA6IDEsXHJcbiAgICB0aGV5IDogMSxcclxuICAgIHRoaWNrIDogMSxcclxuICAgIHRoaW4gOiAxLFxyXG4gICAgdGhpbmcgOiAxLFxyXG4gICAgdGhpbmsgOiAxLFxyXG4gICAgdGhpbmtpbmcgOiAxLFxyXG4gICAgdGhpcmQgOiAxLFxyXG4gICAgdGhpcnR5IDogMSxcclxuICAgIHRoaXMgOiAxLFxyXG4gICAgdGhvc2UgOiAxLFxyXG4gICAgdGhvdWdoIDogMSxcclxuICAgIHRob3VnaHQgOiAxLFxyXG4gICAgdGhvdXNhbmQgOiAxLFxyXG4gICAgdGhyZWF0IDogMSxcclxuICAgIHRocmVhdGVuIDogMSxcclxuICAgIHRocmVlIDogMSxcclxuICAgIHRocm9hdCA6IDEsXHJcbiAgICB0aHJvdWdoIDogMSxcclxuICAgIHRocm91Z2hvdXQgOiAxLFxyXG4gICAgdGhyb3cgOiAxLFxyXG4gICAgdGh1cyA6IDEsXHJcbiAgICB0aWNrZXQgOiAxLFxyXG4gICAgdGllIDogMSxcclxuICAgIHRpZ2h0IDogMSxcclxuICAgIHRpbWUgOiAxLFxyXG4gICAgdGlueSA6IDEsXHJcbiAgICB0aXAgOiAxLFxyXG4gICAgdGlyZSA6IDEsXHJcbiAgICB0aXJlZCA6IDEsXHJcbiAgICB0aXNzdWUgOiAxLFxyXG4gICAgdGl0bGUgOiAxLFxyXG4gICAgdG8gOiAxLFxyXG4gICAgdG9iYWNjbyA6IDEsXHJcbiAgICB0b2RheSA6IDEsXHJcbiAgICB0b2UgOiAxLFxyXG4gICAgdG9nZXRoZXIgOiAxLFxyXG4gICAgdG9tYXRvIDogMSxcclxuICAgIHRvbW9ycm93IDogMSxcclxuICAgIHRvbmUgOiAxLFxyXG4gICAgdG9uZ3VlIDogMSxcclxuICAgIHRvbmlnaHQgOiAxLFxyXG4gICAgdG9vIDogMSxcclxuICAgIHRvb2wgOiAxLFxyXG4gICAgdG9vdGggOiAxLFxyXG4gICAgdG9wIDogMSxcclxuICAgIHRvcGljIDogMSxcclxuICAgIHRvc3MgOiAxLFxyXG4gICAgdG90YWwgOiAxLFxyXG4gICAgdG90YWxseSA6IDEsXHJcbiAgICB0b3VjaCA6IDEsXHJcbiAgICB0b3VnaCA6IDEsXHJcbiAgICB0b3VyIDogMSxcclxuICAgIHRvdXJpc3QgOiAxLFxyXG4gICAgdG91cm5hbWVudCA6IDEsXHJcbiAgICB0b3dhcmQgOiAxLFxyXG4gICAgdG93YXJkcyA6IDEsXHJcbiAgICB0b3dlciA6IDEsXHJcbiAgICB0b3duIDogMSxcclxuICAgIHRveSA6IDEsXHJcbiAgICB0cmFjZSA6IDEsXHJcbiAgICB0cmFjayA6IDEsXHJcbiAgICB0cmFkZSA6IDEsXHJcbiAgICB0cmFkaXRpb24gOiAxLFxyXG4gICAgdHJhZGl0aW9uYWwgOiAxLFxyXG4gICAgdHJhZmZpYyA6IDEsXHJcbiAgICB0cmFnZWR5IDogMSxcclxuICAgIHRyYWlsIDogMSxcclxuICAgIHRyYWluIDogMSxcclxuICAgIHRyYWluaW5nIDogMSxcclxuICAgIHRyYW5zZmVyIDogMSxcclxuICAgIHRyYW5zZm9ybSA6IDEsXHJcbiAgICB0cmFuc2Zvcm1hdGlvbiA6IDEsXHJcbiAgICB0cmFuc2l0aW9uIDogMSxcclxuICAgIHRyYW5zbGF0ZSA6IDEsXHJcbiAgICB0cmFuc3BvcnRhdGlvbiA6IDEsXHJcbiAgICB0cmF2ZWwgOiAxLFxyXG4gICAgdHJlYXQgOiAxLFxyXG4gICAgdHJlYXRtZW50IDogMSxcclxuICAgIHRyZWF0eSA6IDEsXHJcbiAgICB0cmVlIDogMSxcclxuICAgIHRyZW1lbmRvdXMgOiAxLFxyXG4gICAgdHJlbmQgOiAxLFxyXG4gICAgdHJpYWwgOiAxLFxyXG4gICAgdHJpYmUgOiAxLFxyXG4gICAgdHJpY2sgOiAxLFxyXG4gICAgdHJpcCA6IDEsXHJcbiAgICB0cm9vcCA6IDEsXHJcbiAgICB0cm91YmxlIDogMSxcclxuICAgIHRydWNrIDogMSxcclxuICAgIHRydWUgOiAxLFxyXG4gICAgdHJ1bHkgOiAxLFxyXG4gICAgdHJ1c3QgOiAxLFxyXG4gICAgdHJ1dGggOiAxLFxyXG4gICAgdHJ5IDogMSxcclxuICAgIHR1YmUgOiAxLFxyXG4gICAgdHVubmVsIDogMSxcclxuICAgIHR1cm4gOiAxLFxyXG4gICAgVFYgOiAxLFxyXG4gICAgdHdlbHZlIDogMSxcclxuICAgIHR3ZW50eSA6IDEsXHJcbiAgICB0d2ljZSA6IDEsXHJcbiAgICB0d2luIDogMSxcclxuICAgIHR3byA6IDEsXHJcbiAgICB0eXBlIDogMSxcclxuICAgIHR5cGljYWwgOiAxLFxyXG4gICAgdHlwaWNhbGx5IDogMSxcclxuICAgIHVnbHkgOiAxLFxyXG4gICAgdWx0aW1hdGUgOiAxLFxyXG4gICAgdWx0aW1hdGVseSA6IDEsXHJcbiAgICB1bmFibGUgOiAxLFxyXG4gICAgdW5jbGUgOiAxLFxyXG4gICAgdW5kZXIgOiAxLFxyXG4gICAgdW5kZXJnbyA6IDEsXHJcbiAgICB1bmRlcnN0YW5kIDogMSxcclxuICAgIHVuZGVyc3RhbmRpbmcgOiAxLFxyXG4gICAgdW5mb3J0dW5hdGVseSA6IDEsXHJcbiAgICB1bmlmb3JtIDogMSxcclxuICAgIHVuaW9uIDogMSxcclxuICAgIHVuaXF1ZSA6IDEsXHJcbiAgICB1bml0IDogMSxcclxuICAgIFVuaXRlZCA6IDEsXHJcbiAgICB1bml2ZXJzYWwgOiAxLFxyXG4gICAgdW5pdmVyc2UgOiAxLFxyXG4gICAgdW5pdmVyc2l0eSA6IDEsXHJcbiAgICB1bmtub3duIDogMSxcclxuICAgIHVubGVzcyA6IDEsXHJcbiAgICB1bmxpa2UgOiAxLFxyXG4gICAgdW5saWtlbHkgOiAxLFxyXG4gICAgdW50aWwgOiAxLFxyXG4gICAgdW51c3VhbCA6IDEsXHJcbiAgICB1cCA6IDEsXHJcbiAgICB1cG9uIDogMSxcclxuICAgIHVwcGVyIDogMSxcclxuICAgIHVyYmFuIDogMSxcclxuICAgIHVyZ2UgOiAxLFxyXG4gICAgdXMgOiAxLFxyXG4gICAgdXNlIDogMSxcclxuICAgIHVzZWQgOiAxLFxyXG4gICAgdXNlZnVsIDogMSxcclxuICAgIHVzZXIgOiAxLFxyXG4gICAgdXN1YWwgOiAxLFxyXG4gICAgdXN1YWxseSA6IDEsXHJcbiAgICB1dGlsaXR5IDogMSxcclxuICAgIHZhY2F0aW9uIDogMSxcclxuICAgIHZhbGxleSA6IDEsXHJcbiAgICB2YWx1YWJsZSA6IDEsXHJcbiAgICB2YWx1ZSA6IDEsXHJcbiAgICB2YXJpYWJsZSA6IDEsXHJcbiAgICB2YXJpYXRpb24gOiAxLFxyXG4gICAgdmFyaWV0eSA6IDEsXHJcbiAgICB2YXJpb3VzIDogMSxcclxuICAgIHZhcnkgOiAxLFxyXG4gICAgdmFzdCA6IDEsXHJcbiAgICB2ZWdldGFibGUgOiAxLFxyXG4gICAgdmVoaWNsZSA6IDEsXHJcbiAgICB2ZW50dXJlIDogMSxcclxuICAgIHZlcnNpb24gOiAxLFxyXG4gICAgdmVyc3VzIDogMSxcclxuICAgIHZlcnkgOiAxLFxyXG4gICAgdmVzc2VsIDogMSxcclxuICAgIHZldGVyYW4gOiAxLFxyXG4gICAgdmlhIDogMSxcclxuICAgIHZpY3RpbSA6IDEsXHJcbiAgICB2aWN0b3J5IDogMSxcclxuICAgIHZpZGVvIDogMSxcclxuICAgIHZpZXcgOiAxLFxyXG4gICAgdmlld2VyIDogMSxcclxuICAgIHZpbGxhZ2UgOiAxLFxyXG4gICAgdmlvbGF0ZSA6IDEsXHJcbiAgICB2aW9sYXRpb24gOiAxLFxyXG4gICAgdmlvbGVuY2UgOiAxLFxyXG4gICAgdmlvbGVudCA6IDEsXHJcbiAgICB2aXJ0dWFsbHkgOiAxLFxyXG4gICAgdmlydHVlIDogMSxcclxuICAgIHZpcnVzIDogMSxcclxuICAgIHZpc2libGUgOiAxLFxyXG4gICAgdmlzaW9uIDogMSxcclxuICAgIHZpc2l0IDogMSxcclxuICAgIHZpc2l0b3IgOiAxLFxyXG4gICAgdmlzdWFsIDogMSxcclxuICAgIHZpdGFsIDogMSxcclxuICAgIHZvaWNlIDogMSxcclxuICAgIHZvbHVtZSA6IDEsXHJcbiAgICB2b2x1bnRlZXIgOiAxLFxyXG4gICAgdm90ZSA6IDEsXHJcbiAgICB2b3RlciA6IDEsXHJcbiAgICB2cyA6IDEsXHJcbiAgICB2dWxuZXJhYmxlIDogMSxcclxuICAgIHdhZ2UgOiAxLFxyXG4gICAgd2FpdCA6IDEsXHJcbiAgICB3YWtlIDogMSxcclxuICAgIHdhbGsgOiAxLFxyXG4gICAgd2FsbCA6IDEsXHJcbiAgICB3YW5kZXIgOiAxLFxyXG4gICAgd2FudCA6IDEsXHJcbiAgICB3YXIgOiAxLFxyXG4gICAgd2FybSA6IDEsXHJcbiAgICB3YXJuIDogMSxcclxuICAgIHdhcm5pbmcgOiAxLFxyXG4gICAgd2FzaCA6IDEsXHJcbiAgICB3YXN0ZSA6IDEsXHJcbiAgICB3YXRjaCA6IDEsXHJcbiAgICB3YXRlciA6IDEsXHJcbiAgICB3YXZlIDogMSxcclxuICAgIHdheSA6IDEsXHJcbiAgICB3ZSA6IDEsXHJcbiAgICB3ZWFrIDogMSxcclxuICAgIHdlYWx0aCA6IDEsXHJcbiAgICB3ZWFsdGh5IDogMSxcclxuICAgIHdlYXBvbiA6IDEsXHJcbiAgICB3ZWFyIDogMSxcclxuICAgIHdlYXRoZXIgOiAxLFxyXG4gICAgd2VkZGluZyA6IDEsXHJcbiAgICB3ZWVrIDogMSxcclxuICAgIHdlZWtlbmQgOiAxLFxyXG4gICAgd2Vla2x5IDogMSxcclxuICAgIHdlaWdoIDogMSxcclxuICAgIHdlaWdodCA6IDEsXHJcbiAgICB3ZWxjb21lIDogMSxcclxuICAgIHdlbGZhcmUgOiAxLFxyXG4gICAgd2VsbCA6IDEsXHJcbiAgICB3ZXN0IDogMSxcclxuICAgIHdlc3Rlcm4gOiAxLFxyXG4gICAgd2V0IDogMSxcclxuICAgIHdoYXQgOiAxLFxyXG4gICAgd2hhdGV2ZXIgOiAxLFxyXG4gICAgd2hlZWwgOiAxLFxyXG4gICAgd2hlbiA6IDEsXHJcbiAgICB3aGVuZXZlciA6IDEsXHJcbiAgICB3aGVyZSA6IDEsXHJcbiAgICB3aGVyZWFzIDogMSxcclxuICAgIHdoZXRoZXIgOiAxLFxyXG4gICAgd2hpY2ggOiAxLFxyXG4gICAgd2hpbGUgOiAxLFxyXG4gICAgd2hpc3BlciA6IDEsXHJcbiAgICB3aGl0ZSA6IDEsXHJcbiAgICB3aG8gOiAxLFxyXG4gICAgd2hvbGUgOiAxLFxyXG4gICAgd2hvbSA6IDEsXHJcbiAgICB3aG9zZSA6IDEsXHJcbiAgICB3aHkgOiAxLFxyXG4gICAgd2lkZSA6IDEsXHJcbiAgICB3aWRlbHkgOiAxLFxyXG4gICAgd2lkZXNwcmVhZCA6IDEsXHJcbiAgICB3aWZlIDogMSxcclxuICAgIHdpbGQgOiAxLFxyXG4gICAgd2lsbCA6IDEsXHJcbiAgICB3aWxsaW5nIDogMSxcclxuICAgIHdpbiA6IDEsXHJcbiAgICB3aW5kIDogMSxcclxuICAgIHdpbmRvdyA6IDEsXHJcbiAgICB3aW5lIDogMSxcclxuICAgIHdpbmcgOiAxLFxyXG4gICAgd2lubmVyIDogMSxcclxuICAgIHdpbnRlciA6IDEsXHJcbiAgICB3aXBlIDogMSxcclxuICAgIHdpcmUgOiAxLFxyXG4gICAgd2lzZG9tIDogMSxcclxuICAgIHdpc2UgOiAxLFxyXG4gICAgd2lzaCA6IDEsXHJcbiAgICB3aXRoIDogMSxcclxuICAgIHdpdGhkcmF3IDogMSxcclxuICAgIHdpdGhpbiA6IDEsXHJcbiAgICB3aXRob3V0IDogMSxcclxuICAgIHdpdG5lc3MgOiAxLFxyXG4gICAgd29tYW4gOiAxLFxyXG4gICAgd29uZGVyIDogMSxcclxuICAgIHdvbmRlcmZ1bCA6IDEsXHJcbiAgICB3b29kIDogMSxcclxuICAgIHdvb2RlbiA6IDEsXHJcbiAgICB3b3JkIDogMSxcclxuICAgIHdvcmsgOiAxLFxyXG4gICAgd29ya2VyIDogMSxcclxuICAgIHdvcmtpbmcgOiAxLFxyXG4gICAgd29ya3MgOiAxLFxyXG4gICAgd29ya3Nob3AgOiAxLFxyXG4gICAgd29ybGQgOiAxLFxyXG4gICAgd29ycmllZCA6IDEsXHJcbiAgICB3b3JyeSA6IDEsXHJcbiAgICB3b3J0aCA6IDEsXHJcbiAgICB3b3VsZCA6IDEsXHJcbiAgICB3b3VuZCA6IDEsXHJcbiAgICB3cmFwIDogMSxcclxuICAgIHdyaXRlIDogMSxcclxuICAgIHdyaXRlciA6IDEsXHJcbiAgICB3cml0aW5nIDogMSxcclxuICAgIHdyb25nIDogMSxcclxuICAgIHlhcmQgOiAxLFxyXG4gICAgeWVhaCA6IDEsXHJcbiAgICB5ZWFyIDogMSxcclxuICAgIHllbGwgOiAxLFxyXG4gICAgeWVsbG93IDogMSxcclxuICAgIHllcyA6IDEsXHJcbiAgICB5ZXN0ZXJkYXkgOiAxLFxyXG4gICAgeWV0IDogMSxcclxuICAgIHlpZWxkIDogMSxcclxuICAgIHlvdSA6IDEsXHJcbiAgICB5b3VuZyA6IDEsXHJcbiAgICB5b3VyIDogMSxcclxuICAgIHlvdXJzIDogMSxcclxuICAgIHlvdXJzZWxmIDogMSxcclxuICAgIHlvdXRoIDogMSxcclxuICAgIHpvbmUgOiAxLFxyXG4gIH07IiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IGZpbmRlciA9IHJlcXVpcmUoJy4vZmluZGVyLmpzJyk7XHJcblxyXG5jb25zdCBBUElfREFJTFlfTElNSVQgPSAyNTAwMDtcclxubGV0IE1BWF9XT1JEUztcclxubGV0IENBQ0hFX0NMVVNURVJTO1xyXG5sZXQgTUFYX05PREVfRlJFUVVFTkNZO1xyXG5sZXQgVFJBVkVSU0VfU0lNSUxBUjtcclxuXHJcbmxldCBjYWNoZUlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxubGV0IHRvdGFsV29yZHNMYXN0RGF5O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxhenlJbml0Q2FjaGUoKSB7XHJcblxyXG4gIGlmICghY2FjaGVJc0luaXRpYWxpemVkKSB7XHJcbiAgICBsZXQgY3VydGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgLy8gODY0MDAwMDAgbWlsbGlzZWNvbmRzICgyNCBob3VycylcclxuICAgIHRvdGFsV29yZHNMYXN0RGF5ID0gYXdhaXQgZmluZGVyLmZpbmRGaWxlcyhcImNhY2hlL3dvcmRzXCIsIGN1cnRpbWUgLSA4NjQwMDAwMCk7XHJcbiAgXHJcbiAgICBjYWNoZUlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwibGF6eUluaXRDYWNoZSAgdG90YWxXb3Jkc0xhc3REYXkgOiBcIit0b3RhbFdvcmRzTGFzdERheStcIiBlcnJvcnM6XCIrZmluZGVyLmVycm9ycyk7XHJcbiAgICByZXR1cm4gdG90YWxXb3Jkc0xhc3REYXk7XHJcbiAgfVxyXG4gIHJldHVybiB0b3RhbFdvcmRzTGFzdERheTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRDcmF3bGVyKFxyXG4gIF9NQVhfV09SRFMsXHJcbiAgX0NBQ0hFX0NMVVNURVJTLFxyXG4gIF9NQVhfTk9ERV9GUkVRVUVOQ1ksXHJcbiAgX1RSQVZFUlNFX1NJTUlMQVJcclxuICApIHtcclxuXHJcbiAgTUFYX1dPUkRTID0gX01BWF9XT1JEUztcclxuICBDQUNIRV9DTFVTVEVSUyA9IF9DQUNIRV9DTFVTVEVSUztcclxuICBNQVhfTk9ERV9GUkVRVUVOQ1kgPSBfTUFYX05PREVfRlJFUVVFTkNZO1xyXG4gIFRSQVZFUlNFX1NJTUlMQVIgPSBfVFJBVkVSU0VfU0lNSUxBUjtcclxuXHJcblxyXG4gIGlmICghZnMuZXhpc3RzU3luYyhcImNhY2hlL3dvcmRzXCIpKXtcclxuICAgIGZzLm1rZGlyU3luYyhcImNhY2hlL3dvcmRzXCIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG4gIH1cclxuICBpZiAoIWZzLmV4aXN0c1N5bmMoXCJjYWNoZS9jbHVzdGVyc1wiKSl7XHJcbiAgICBmcy5ta2RpclN5bmMoXCJjYWNoZS9jbHVzdGVyc1wiKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlV29yZFRvRGlzcGxheShkYXRhKSB7XHJcblxyXG4gIC8vIGNyZWF0ZSBuZXcgYXJyYXkgdG8gcHVzaCBkYXRhIHRvXHJcbiAgbGV0IHJlc3VsdHMgPSBbXTtcclxuICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgZnJlcXVlbmN5OmRhdGEuZnJlcXVlbmN5LFxyXG4gICAgcHJvbnVuY2lhdGlvbjpkYXRhLnByb251bmNpYXRpb24sXHJcbiAgICByZXN1bHRzLCBldGM6XCJcIlxyXG4gIH07XHJcblxyXG4gIGlmIChkYXRhLnJlc3VsdHMpIGRhdGEucmVzdWx0cy5tYXAoZGVmID0+IHtcclxuICAgIGxldCBkZWZpbml0aW9uQXJyYXkgPSBbXTtcclxuICAgIGxldCBkZWZpbml0aW9uID0ge1xyXG4gICAgICBwYXJ0T2ZTcGVlY2g6ZGVmLnBhcnRPZlNwZWVjaCxcclxuICAgICAgcHJvcGVydGllczpkZWZpbml0aW9uQXJyYXlcclxuICAgIH07XHJcblxyXG4gICAgLy8gY3JlYXRlcyBhcnJheSBvZiBrZXlzIGluIG9iamVjdFxyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRlZik7XHJcbiAgICBrZXlzLm1hcChrZXkgPT4ge1xyXG5cclxuICAgICAgLy8gYnVpbGRzIHJlZ2V4IHRoYXQgbG9va3MgZm9yIGNhcGl0YWwgbGV0dGVyc1xyXG4gICAgICAvLyBUaGUgcmVzcG9uc2UgcGFyYW1ldGVycyBhcmUgaW4gY2FtZWxDYXNlLCBzbyB3ZSBuZWVkIHRvIElEXHJcbiAgICAgIC8vIHRoZSBjYXBpdGFsIGxldHRlcnMgYW5kIGFkZCBzcGFjZXMgaW5zdGVhZCBzbyB0aGUgXHJcbiAgICAgIC8vIGZyb250IGVuZCBjYW4gZWFzaWx5IGRpc3BsYXkgdGhlIHBhcmFtZXRlciBsYWJlbHNcclxuICAgICAgY29uc3QgcmVnZXggPSAvKD89W0EtWl0pLztcclxuXHJcbiAgICAgIC8vIGNyZWF0ZXMgcHJlc2VudGFibGUgbGFiZWxcclxuICAgICAgY29uc3QgbGFiZWwgPSBrZXkuc3BsaXQocmVnZXgpLmpvaW4oJyAnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgLy8gZ3JhYnMgdGhlIHZhbHVlIGZvciB0aGUgcGFyYW1ldGVyIGZyb20gdGhlXHJcbiAgICAgIC8vIGRlZmluaXRpb24gb2JqZWN0IGluIHJlc3BvbnNlXHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZGVmW2tleV07XHJcblxyXG4gICAgICAvLyBjb25zdHJ1Y3RzIG5ldyBvYmplY3QgdG8gc2VuZCB0byBmcm9udGVuZFxyXG4gICAgICBsZXQgbmV3T2JqID0ge1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGlzU3RyaW5nOiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBkZWZpbml0aW9uQXJyYXkucHVzaChuZXdPYmopO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXN1bHRzLnB1c2goZGVmaW5pdGlvbik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkU2luZ2xlV29yZCh3b3JkLCBhc29iamVjdCkge1xyXG5cclxuICBjb25zdCB3ZnBhdGggPSBgY2FjaGUvd29yZHMvJHt3b3JkfWA7XHJcblxyXG4gIGlmIChmcy5leGlzdHNTeW5jKHdmcGF0aCkpIHtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiRnJvbSBjYWNoZSBmaWxlL3NpbmdsZSBcIit3ZnBhdGgrXCIgIGFzb2JqZWN0OlwiK2Fzb2JqZWN0K1wiLi4uXFxuXCIpO1xyXG4gICAgbGV0IGlqc29uID0gZnMucmVhZEZpbGVTeW5jKHdmcGF0aCkudG9TdHJpbmcoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShpanNvbik7XHJcblxyXG4gICAgICBpZiAoYXNvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc2luZ2xlV29yZFRvRGlzcGxheShkYXRhKTtcclxuICAgICAgICBjb25zdCBvanNvbiA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7ICAgICAgICAgLy8gbW9kaWZpZWRcclxuICAgICAgICByZXR1cm4gb2pzb247XHJcbiAgICAgIH1cclxuICBcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiRGVsZXRlIGludmFsaWQgZmlsZSA6IFwiK3dmcGF0aCwgZSk7XHJcbiAgICAgIGZzLnVubGlua1N5bmMod2ZwYXRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF3YWl0IGxhenlJbml0Q2FjaGUoKTtcclxuXHJcbiAgaWYgKHRvdGFsV29yZHNMYXN0RGF5ID49IEFQSV9EQUlMWV9MSU1JVCkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBtYWtlIHJlcXVlc3QgdG8gZmlsZS9zaW5nbGUgXCIrd2ZwYXRoK1wiICB0b3RhbFdvcmRzTGFzdERheSA+PSBBUElfREFJTFlfTElNSVQgOiAgXCIrdG90YWxXb3Jkc0xhc3REYXkrXCIgPj0gXCIrQVBJX0RBSUxZX0xJTUlUK1wiXFxuXCIpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBzZW5kIHJlcXVlc3QgdG8gdGhlIFdvcmRzQVBJXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICBcIm1ldGhvZFwiOlwiR0VUXCIsXHJcbiAgICBcInVybFwiOmBodHRwczovL3dvcmRzYXBpdjEucC5yYXBpZGFwaS5jb20vd29yZHMvJHt3b3JkfWAsXHJcbiAgICBcImhlYWRlcnNcIjp7XHJcbiAgICBcImNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXHJcbiAgICBcIngtcmFwaWRhcGktaG9zdFwiOlwid29yZHNhcGl2MS5wLnJhcGlkYXBpLmNvbVwiLFxyXG4gICAgXCJ4LXJhcGlkYXBpLWtleVwiOnByb2Nlc3MuZW52LlJBUElEQVBJX0tFWVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkanNvbiA9IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpOyAgLy8gb3JpZ2luYWxcclxuICBmcy53cml0ZUZpbGUod2ZwYXRoLCBkanNvbiwgKGVycikgPT4ge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQ2FjaGUgZmlsZS9zaW5nbGUgXCIrd2ZwYXRoK1wiICBhc29iamVjdDpcIithc29iamVjdCtcIiB3cml0ZSBmYWlsdXJlIDogXCIrZXJyK1wiXFxuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYWNoZSBmaWxlL3NpbmdsZSBcIit3ZnBhdGgrXCIgIGFzb2JqZWN0OlwiK2Fzb2JqZWN0K1wiIHdyaXR0ZW4gc3VjY2Vzc2Z1bGx5XFxuXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoYXNvYmplY3QpIHtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2luZ2xlV29yZFRvRGlzcGxheShyZXNwb25zZS5kYXRhKTtcclxuICAgIGNvbnN0IG9qc29uID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTsgICAgICAgICAvLyBtb2RpZmllZFxyXG4gICAgcmV0dXJuIG9qc29uO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmF2ZXJzZU5vZGUge1xyXG5cclxuICBlbnRyeTt2YWw7bGV2ZWw7cGFydE9mU3BlZWNoO1xyXG4gIGRlZmluaXRpb247c3lub255bXM7c2ltaWxhcjt3b3JkcztcclxuICBrZXk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGJ5X2RlZiwgZW50cnksIHZhbCwgbGV2ZWwpIHtcclxuICAgIHRoaXMuZW50cnk9ZW50cnk7dGhpcy52YWw9dmFsO3RoaXMubGV2ZWw9bGV2ZWw7XHJcblxyXG4gICAgdGhpcy5kZWZpbml0aW9uID0gdmFsLmRlZmluaXRpb247IFxyXG4gICAgdGhpcy5zeW5vbnltcyA9IFtdO1xyXG4gICAgdGhpcy5zaW1pbGFyID0gW107XHJcbiAgICB0aGlzLndvcmRzID0gW107XHJcblxyXG4gICAgdGhpcy5hZGQoYnlfZGVmKTtcclxuICB9XHJcblxyXG4gIGFkZChieV9kZWYpIHtcclxuICBcclxuICAgIHRoaXMucGFydE9mU3BlZWNoID0gdGhpcy52YWwucGFydE9mU3BlZWNoO1xyXG4gICAgdGhpcy5zeW5vbnltcy5wdXNoLmFwcGx5KHRoaXMuc3lub255bXMsIHRoaXMudmFsLnN5bm9ueW1zKTtcclxuICAgIHRoaXMuc3lub255bXMucHVzaCh0aGlzLmVudHJ5LndvcmQpO1xyXG4gICAgdGhpcy5zeW5vbnltcy5zb3J0KCk7XHJcbiAgXHJcbiAgICB0aGlzLnNpbWlsYXIucHVzaC5hcHBseSh0aGlzLnNpbWlsYXIsIHRoaXMudmFsLnNpbWlsYXJUbyk7XHJcbiAgICB0aGlzLnNpbWlsYXIuc29ydCgpO1xyXG4gIFxyXG4gICAgdGhpcy53b3Jkcy5wdXNoLmFwcGx5KHRoaXMud29yZHMsIHRoaXMuc3lub255bXMpO1xyXG4gICAgdGhpcy53b3Jkcy5wdXNoLmFwcGx5KHRoaXMud29yZHMsIHRoaXMuc2ltaWxhcik7XHJcbiAgXHJcbiAgICB0aGlzLmtleSA9IHRoaXMubGV2ZWwrXCI6Ojo6Ojo6XCIrdGhpcy5zeW5vbnltcy5sZW5ndGgrXCI6Ojo6OjpcIit0aGlzLnN5bm9ueW1zLmpvaW4oXCIsIFwiKTtcclxuXHJcbiAgICBpZiAoIWJ5X2RlZlt0aGlzLnZhbC5kZWZpbml0aW9uXSkge1xyXG5cclxuICAgICAgYnlfZGVmW3RoaXMudmFsLmRlZmluaXRpb25dID0gdGhpcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXByZXNzKCkge1xyXG4gICAgZGVsZXRlIHRoaXMudmFsO1xyXG4gICAgZGVsZXRlIHRoaXMua2V5O1xyXG4gICAgZGVsZXRlIHRoaXMud29yZHM7XHJcbiAgfVxyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWREaWN0aW9uYXJ5QW5kQ2hpbGRyZW4odHJlc3VsdCwgd29yZCwgdHJhdmVyc2lvbikge1xyXG5cclxuICBjb25zdCBieV9kZWYgPSB0cmVzdWx0LmJ5X2RlZjtcclxuICBjb25zdCBlbnRyeSA9IGF3YWl0IGxvYWRTaW5nbGVXb3JkKHdvcmQsIHRydWUpO1xyXG5cclxuICBpZiAoIWVudHJ5IHx8XHJcbiAgICAgICh0cmF2ZXJzaW9uLmxldmVsID4gMSAmJiBcclxuICAgICAgZW50cnkuZnJlcXVlbmN5ICYmIGVudHJ5LmZyZXF1ZW5jeT49TUFYX05PREVfRlJFUVVFTkNZKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgZm9yIChsZXQga2V5IGluIGVudHJ5LnJlc3VsdHMpIHtcclxuICAgIGNvbnN0IHZhbCA9IGVudHJ5LnJlc3VsdHNba2V5XTsgXHJcblxyXG4gICAgbGV0IG5vZGUgPSBuZXcgVHJhdmVyc2VOb2RlKGJ5X2RlZiwgZW50cnksIHZhbCwgdHJhdmVyc2lvbi5sZXZlbCk7XHJcbiAgICBpZiAoVFJBVkVSU0VfU0lNSUxBUikge1xyXG4gICAgICB0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0LnB1c2guYXBwbHkodHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdCwgbm9kZS53b3Jkcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0LnB1c2guYXBwbHkodHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdCwgbm9kZS5zeW5vbnltcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYXZlcnNlQ2x1c3Rlcih0cmVzdWx0LCB3b3JkKSB7XHJcblxyXG4gIGxldCB0cmF2ZXJzaW9uID0ge1xyXG4gICAgbGV2ZWwgOiAxLFxyXG4gICAgd29yZHNicmVhZHRoZmlyc3QgOiBbd29yZF1cclxuICB9O1xyXG4gIHRyZXN1bHQubm9Xb3JkcyA9IDA7XHJcbiAgdHJlc3VsdC5tYXN0ZXIgPSBhd2FpdCBsb2FkU2luZ2xlV29yZCh3b3JkLCB0cnVlKTtcclxuXHJcbiAgZG8ge1xyXG4gICAgdmFyIHByZXZpb3VzbGV2ZWxjaGlsZHdvcmRzID0gdHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdC5jb25jYXQoW10pO1xyXG4gICAgdHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdCA9IFtdO1xyXG5cclxuICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgdyBvZiBwcmV2aW91c2xldmVsY2hpbGR3b3Jkcykge1xyXG4gICAgICBpZiAodHJlc3VsdC5ieV93W3ddKSB7XHJcbiAgICAgIH0gZWxzZSBpZiAodHJlc3VsdC5ub1dvcmRzID49IE1BWF9XT1JEUykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGV2ZWwgXCIrdHJhdmVyc2lvbi5sZXZlbCtcIiBmaW5pc2hlZC4gQ29tcGxldGVkLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJlc3VsdC5ub1dvcmRzKys7XHJcbiAgICAgICAgdHJlc3VsdC5ieV93W3ddID0gMTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0cmVzdWx0Lm5vV29yZHMgKyBcIi9cIiArIE1BWF9XT1JEUyk7XHJcbiAgICBcclxuICAgICAgICBsZXQgbm9kZXByb21pc2UgPSBsb2FkRGljdGlvbmFyeUFuZENoaWxkcmVuKHRyZXN1bHQsIHcsIHRyYXZlcnNpb24pO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2gobm9kZXByb21pc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxldmVsIFwiK3RyYXZlcnNpb24ubGV2ZWwrXCIgZmluaXNoZWQuXCIpO1xyXG5cclxuICAgIHRyYXZlcnNpb24ubGV2ZWwrKztcclxuICB9IHdoaWxlICh0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0Lmxlbmd0aCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENsdXN0ZXIod29yZCwgYXNvYmplY3QpIHtcclxuXHJcbiAgY29uc3QgY2ZwYXRoID0gYGNhY2hlL2NsdXN0ZXJzLyR7d29yZH1gO1xyXG4gIGlmIChDQUNIRV9DTFVTVEVSUyAmJiBmcy5leGlzdHNTeW5jKGNmcGF0aCkpIHtcclxuICAgIGxldCBpanNvbiA9IGZzLnJlYWRGaWxlU3luYyhjZnBhdGgpLnRvU3RyaW5nKCk7XHJcbiAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShpanNvbik7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZyb20gY2FjaGUgZmlsZS9jbHVzdGVyIFwiK2NmcGF0aCtcIiAgYXNvYmplY3Q6XCIrYXNvYmplY3QrXCIuLi5cXG5cIik7XHJcblxyXG4gICAgaWYgKGFzb2JqZWN0KSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaWpzb247XHJcbiAgICB9XHJcblxyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgY29uc3QgYnlfZGVmID0ge307XHJcbiAgICBjb25zdCBieV93ID0ge307XHJcbiAgICBjb25zdCBieV9rZXkgPSBbXTtcclxuICAgIGxldCB0cmVzdWx0ID0ge1xyXG4gICAgICBieV9kZWYsXHJcbiAgICAgIGJ5X3cgICAgfTtcclxuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdHJhdmVyc2VDbHVzdGVyKHRyZXN1bHQsIHdvcmQpO1xyXG4gICAgYnlfa2V5LnB1c2guYXBwbHkoYnlfa2V5LCBPYmplY3QudmFsdWVzKGJ5X2RlZikpO1xyXG4gICAgY29uc3QgY21wID0gKGZpcnN0RWwsIHNlY29uZEVsKSA9PiB7XHJcbiAgICAgIHJldHVybiBmaXJzdEVsLmtleS5sb2NhbGVDb21wYXJlKHNlY29uZEVsLmtleSk7XHJcbiAgICB9O1xyXG4gICAgYnlfa2V5LnNvcnQoY21wKTtcclxuICAgIGZvciAobGV0IGRlZm9iaiBvZiBieV9rZXkpIHtcclxuICAgICAgZGVmb2JqLmNvbXByZXNzKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICBub0NsdXN0ZXJFbnRyaWVzOmJ5X2tleS5sZW5ndGgsXHJcbiAgICAgIHJlc3VsdHM6Ynlfa2V5XHJcbiAgICB9O1xyXG4gICAgaWYgKHRyZXN1bHQubWFzdGVyKSB7XHJcbiAgICAgIHJlc3VsdC5mcmVxdWVuY3kgPSB0cmVzdWx0Lm1hc3Rlci5mcmVxdWVuY3k7XHJcbiAgICAgIHJlc3VsdC5wcm9udW5jaWF0aW9uID0gdHJlc3VsdC5tYXN0ZXIucHJvbnVuY2lhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2pzb247XHJcbiAgICBpZiAoQ0FDSEVfQ0xVU1RFUlMpIHtcclxuICAgICAgY2pzb24gPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICBmcy53cml0ZUZpbGUoY2ZwYXRoLCBjanNvbiwgKGVycikgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDbHVzdGVyIGZpbGUvY2x1c3RlciBcIitjZnBhdGgrXCIgIHdyaXRlIGZhaWx1cmUgOiBcIitlcnIrXCJcXG5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2x1c3RlciBmaWxlL2NsdXN0ZXIgXCIrY2ZwYXRoK1wiICB3cml0dGVuIHN1Y2Nlc3NmdWxseVxcblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhc29iamVjdCkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFjanNvbikge1xyXG4gICAgICAgIGNqc29uID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2pzb247XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENvbW1vbldvcmQocmVzdWx0LCB3b3JkKSB7XHJcbiAgY29uc3QgZW50cnkgPSBhd2FpdCBsb2FkU2luZ2xlV29yZCh3b3JkLCB0cnVlKTtcclxuXHJcbiAgZm9yIChsZXQga2V5IGluIGVudHJ5LnJlc3VsdHMpIHtcclxuICAgIGNvbnN0IHZhbCA9IGVudHJ5LnJlc3VsdHNba2V5XTsgXHJcbiAgICBjb25zdCBzeW5vbnltcyA9IFtdLmNvbmNhdCh2YWwuc3lub255bXMpO1xyXG4gICAgc3lub255bXMuc29ydCgpO1xyXG5cclxuICAgIGNvbnN0IGRlZmluaXRpb24gPSB7XHJcbiAgICAgIHBhcnRPZlNwZWVjaDogdmFsLnBhcnRPZlNwZWVjaCxcclxuICAgICAgZGVmaW5pdGlvbjogdmFsLmRlZmluaXRpb24sXHJcbiAgICAgIHN5bm9ueW1zXHJcbiAgICB9O1xyXG4gICAgcmVzdWx0Lm5vRGVmaW5pdGlvbnMrKztcclxuICAgIHJlc3VsdC5yZXN1bHRzLnB1c2goZGVmaW5pdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENvbW1vbldvcmRzKCkge1xyXG4gIGNvbnN0IGN3ID0gcmVxdWlyZSgnLi9jb21tb24td29yZHMuanMnKTtcclxuXHJcbiAgLy8gY3JlYXRlIG5ldyBhcnJheSB0byBwdXNoIGRhdGEgdG9cclxuICBsZXQgcmVzdWx0cyA9IFtdO1xyXG4gIGxldCByZXN1bHQgPSB7XHJcbiAgICBub1dvcmRzOk9iamVjdC5rZXlzKGN3LlRoZU1vc3RDb21tb24zMDAwKS5sZW5ndGgsXHJcbiAgICBub0RlZmluaXRpb25zOjAsXHJcbiAgICByZXN1bHRzXHJcbiAgfTtcclxuXHJcbiAgbGV0IHByb21pc2VzID0gW107XHJcbiAgZm9yIChsZXQgY29tbW9uV29yZCBpbiBjdy5UaGVNb3N0Q29tbW9uMzAwMCkge1xyXG4gICAgcHJvbWlzZXMucHVzaChsb2FkQ29tbW9uV29yZChyZXN1bHQsIGNvbW1vbldvcmQpKTtcclxuICB9XHJcbiAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG52YXIgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xudmFyIGh0dHBGb2xsb3cgPSByZXF1aXJlKCdmb2xsb3ctcmVkaXJlY3RzJykuaHR0cDtcbnZhciBodHRwc0ZvbGxvdyA9IHJlcXVpcmUoJ2ZvbGxvdy1yZWRpcmVjdHMnKS5odHRwcztcbnZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbnZhciB6bGliID0gcmVxdWlyZSgnemxpYicpO1xudmFyIHBrZyA9IHJlcXVpcmUoJy4vLi4vLi4vcGFja2FnZS5qc29uJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9lbmhhbmNlRXJyb3InKTtcblxudmFyIGlzSHR0cHMgPSAvaHR0cHM6Py87XG5cbi8qZXNsaW50IGNvbnNpc3RlbnQtcmV0dXJuOjAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBodHRwQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoSHR0cFJlcXVlc3QocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpIHtcbiAgICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlKHZhbHVlKTtcbiAgICB9O1xuICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiByZWplY3QodmFsdWUpIHtcbiAgICAgIHJlamVjdFByb21pc2UodmFsdWUpO1xuICAgIH07XG4gICAgdmFyIGRhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgLy8gU2V0IFVzZXItQWdlbnQgKHJlcXVpcmVkIGJ5IHNvbWUgc2VydmVycylcbiAgICAvLyBPbmx5IHNldCBoZWFkZXIgaWYgaXQgaGFzbid0IGJlZW4gc2V0IGluIGNvbmZpZ1xuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzY5XG4gICAgaWYgKCFoZWFkZXJzWydVc2VyLUFnZW50J10gJiYgIWhlYWRlcnNbJ3VzZXItYWdlbnQnXSkge1xuICAgICAgaGVhZGVyc1snVXNlci1BZ2VudCddID0gJ2F4aW9zLycgKyBwa2cudmVyc2lvbjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSAmJiAhdXRpbHMuaXNTdHJlYW0oZGF0YSkpIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcbiAgICAgICAgLy8gTm90aGluZyB0byBkby4uLlxuICAgICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShuZXcgVWludDhBcnJheShkYXRhKSk7XG4gICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhLCAndXRmLTgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAgICAgJ0RhdGEgYWZ0ZXIgdHJhbnNmb3JtYXRpb24gbXVzdCBiZSBhIHN0cmluZywgYW4gQXJyYXlCdWZmZXIsIGEgQnVmZmVyLCBvciBhIFN0cmVhbScsXG4gICAgICAgICAgY29uZmlnXG4gICAgICAgICkpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgQ29udGVudC1MZW5ndGggaGVhZGVyIGlmIGRhdGEgZXhpc3RzXG4gICAgICBoZWFkZXJzWydDb250ZW50LUxlbmd0aCddID0gZGF0YS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIHZhciBhdXRoID0gdW5kZWZpbmVkO1xuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIGF1dGggPSB1c2VybmFtZSArICc6JyArIHBhc3N3b3JkO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIHVybFxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHZhciBwYXJzZWQgPSB1cmwucGFyc2UoZnVsbFBhdGgpO1xuICAgIHZhciBwcm90b2NvbCA9IHBhcnNlZC5wcm90b2NvbCB8fCAnaHR0cDonO1xuXG4gICAgaWYgKCFhdXRoICYmIHBhcnNlZC5hdXRoKSB7XG4gICAgICB2YXIgdXJsQXV0aCA9IHBhcnNlZC5hdXRoLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgdXJsVXNlcm5hbWUgPSB1cmxBdXRoWzBdIHx8ICcnO1xuICAgICAgdmFyIHVybFBhc3N3b3JkID0gdXJsQXV0aFsxXSB8fCAnJztcbiAgICAgIGF1dGggPSB1cmxVc2VybmFtZSArICc6JyArIHVybFBhc3N3b3JkO1xuICAgIH1cblxuICAgIGlmIChhdXRoKSB7XG4gICAgICBkZWxldGUgaGVhZGVycy5BdXRob3JpemF0aW9uO1xuICAgIH1cblxuICAgIHZhciBpc0h0dHBzUmVxdWVzdCA9IGlzSHR0cHMudGVzdChwcm90b2NvbCk7XG4gICAgdmFyIGFnZW50ID0gaXNIdHRwc1JlcXVlc3QgPyBjb25maWcuaHR0cHNBZ2VudCA6IGNvbmZpZy5odHRwQWdlbnQ7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHBhdGg6IGJ1aWxkVVJMKHBhcnNlZC5wYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKSxcbiAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIGFnZW50OiBhZ2VudCxcbiAgICAgIGFnZW50czogeyBodHRwOiBjb25maWcuaHR0cEFnZW50LCBodHRwczogY29uZmlnLmh0dHBzQWdlbnQgfSxcbiAgICAgIGF1dGg6IGF1dGhcbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZy5zb2NrZXRQYXRoKSB7XG4gICAgICBvcHRpb25zLnNvY2tldFBhdGggPSBjb25maWcuc29ja2V0UGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5ob3N0bmFtZSA9IHBhcnNlZC5ob3N0bmFtZTtcbiAgICAgIG9wdGlvbnMucG9ydCA9IHBhcnNlZC5wb3J0O1xuICAgIH1cblxuICAgIHZhciBwcm94eSA9IGNvbmZpZy5wcm94eTtcbiAgICBpZiAoIXByb3h5ICYmIHByb3h5ICE9PSBmYWxzZSkge1xuICAgICAgdmFyIHByb3h5RW52ID0gcHJvdG9jb2wuc2xpY2UoMCwgLTEpICsgJ19wcm94eSc7XG4gICAgICB2YXIgcHJveHlVcmwgPSBwcm9jZXNzLmVudltwcm94eUVudl0gfHwgcHJvY2Vzcy5lbnZbcHJveHlFbnYudG9VcHBlckNhc2UoKV07XG4gICAgICBpZiAocHJveHlVcmwpIHtcbiAgICAgICAgdmFyIHBhcnNlZFByb3h5VXJsID0gdXJsLnBhcnNlKHByb3h5VXJsKTtcbiAgICAgICAgdmFyIG5vUHJveHlFbnYgPSBwcm9jZXNzLmVudi5ub19wcm94eSB8fCBwcm9jZXNzLmVudi5OT19QUk9YWTtcbiAgICAgICAgdmFyIHNob3VsZFByb3h5ID0gdHJ1ZTtcblxuICAgICAgICBpZiAobm9Qcm94eUVudikge1xuICAgICAgICAgIHZhciBub1Byb3h5ID0gbm9Qcm94eUVudi5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiB0cmltKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnRyaW0oKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNob3VsZFByb3h5ID0gIW5vUHJveHkuc29tZShmdW5jdGlvbiBwcm94eU1hdGNoKHByb3h5RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFwcm94eUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3h5RWxlbWVudCA9PT0gJyonKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3h5RWxlbWVudFswXSA9PT0gJy4nICYmXG4gICAgICAgICAgICAgICAgcGFyc2VkLmhvc3RuYW1lLnN1YnN0cihwYXJzZWQuaG9zdG5hbWUubGVuZ3RoIC0gcHJveHlFbGVtZW50Lmxlbmd0aCkgPT09IHByb3h5RWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5ob3N0bmFtZSA9PT0gcHJveHlFbGVtZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoc2hvdWxkUHJveHkpIHtcbiAgICAgICAgICBwcm94eSA9IHtcbiAgICAgICAgICAgIGhvc3Q6IHBhcnNlZFByb3h5VXJsLmhvc3RuYW1lLFxuICAgICAgICAgICAgcG9ydDogcGFyc2VkUHJveHlVcmwucG9ydFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocGFyc2VkUHJveHlVcmwuYXV0aCkge1xuICAgICAgICAgICAgdmFyIHByb3h5VXJsQXV0aCA9IHBhcnNlZFByb3h5VXJsLmF1dGguc3BsaXQoJzonKTtcbiAgICAgICAgICAgIHByb3h5LmF1dGggPSB7XG4gICAgICAgICAgICAgIHVzZXJuYW1lOiBwcm94eVVybEF1dGhbMF0sXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiBwcm94eVVybEF1dGhbMV1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3h5KSB7XG4gICAgICBvcHRpb25zLmhvc3RuYW1lID0gcHJveHkuaG9zdDtcbiAgICAgIG9wdGlvbnMuaG9zdCA9IHByb3h5Lmhvc3Q7XG4gICAgICBvcHRpb25zLmhlYWRlcnMuaG9zdCA9IHBhcnNlZC5ob3N0bmFtZSArIChwYXJzZWQucG9ydCA/ICc6JyArIHBhcnNlZC5wb3J0IDogJycpO1xuICAgICAgb3B0aW9ucy5wb3J0ID0gcHJveHkucG9ydDtcbiAgICAgIG9wdGlvbnMucGF0aCA9IHByb3RvY29sICsgJy8vJyArIHBhcnNlZC5ob3N0bmFtZSArIChwYXJzZWQucG9ydCA/ICc6JyArIHBhcnNlZC5wb3J0IDogJycpICsgb3B0aW9ucy5wYXRoO1xuXG4gICAgICAvLyBCYXNpYyBwcm94eSBhdXRob3JpemF0aW9uXG4gICAgICBpZiAocHJveHkuYXV0aCkge1xuICAgICAgICB2YXIgYmFzZTY0ID0gQnVmZmVyLmZyb20ocHJveHkuYXV0aC51c2VybmFtZSArICc6JyArIHByb3h5LmF1dGgucGFzc3dvcmQsICd1dGY4JykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ1Byb3h5LUF1dGhvcml6YXRpb24nXSA9ICdCYXNpYyAnICsgYmFzZTY0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0cmFuc3BvcnQ7XG4gICAgdmFyIGlzSHR0cHNQcm94eSA9IGlzSHR0cHNSZXF1ZXN0ICYmIChwcm94eSA/IGlzSHR0cHMudGVzdChwcm94eS5wcm90b2NvbCkgOiB0cnVlKTtcbiAgICBpZiAoY29uZmlnLnRyYW5zcG9ydCkge1xuICAgICAgdHJhbnNwb3J0ID0gY29uZmlnLnRyYW5zcG9ydDtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5tYXhSZWRpcmVjdHMgPT09IDApIHtcbiAgICAgIHRyYW5zcG9ydCA9IGlzSHR0cHNQcm94eSA/IGh0dHBzIDogaHR0cDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbmZpZy5tYXhSZWRpcmVjdHMpIHtcbiAgICAgICAgb3B0aW9ucy5tYXhSZWRpcmVjdHMgPSBjb25maWcubWF4UmVkaXJlY3RzO1xuICAgICAgfVxuICAgICAgdHJhbnNwb3J0ID0gaXNIdHRwc1Byb3h5ID8gaHR0cHNGb2xsb3cgOiBodHRwRm9sbG93O1xuICAgIH1cblxuICAgIGlmIChjb25maWcubWF4Q29udGVudExlbmd0aCAmJiBjb25maWcubWF4Q29udGVudExlbmd0aCA+IC0xKSB7XG4gICAgICBvcHRpb25zLm1heEJvZHlMZW5ndGggPSBjb25maWcubWF4Q29udGVudExlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdGhlIHJlcXVlc3RcbiAgICB2YXIgcmVxID0gdHJhbnNwb3J0LnJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzKSB7XG4gICAgICBpZiAocmVxLmFib3J0ZWQpIHJldHVybjtcblxuICAgICAgLy8gdW5jb21wcmVzcyB0aGUgcmVzcG9uc2UgYm9keSB0cmFuc3BhcmVudGx5IGlmIHJlcXVpcmVkXG4gICAgICB2YXIgc3RyZWFtID0gcmVzO1xuICAgICAgc3dpdGNoIChyZXMuaGVhZGVyc1snY29udGVudC1lbmNvZGluZyddKSB7XG4gICAgICAvKmVzbGludCBkZWZhdWx0LWNhc2U6MCovXG4gICAgICBjYXNlICdnemlwJzpcbiAgICAgIGNhc2UgJ2NvbXByZXNzJzpcbiAgICAgIGNhc2UgJ2RlZmxhdGUnOlxuICAgICAgICAvLyBhZGQgdGhlIHVuemlwcGVyIHRvIHRoZSBib2R5IHN0cmVhbSBwcm9jZXNzaW5nIHBpcGVsaW5lXG4gICAgICAgIHN0cmVhbSA9IChyZXMuc3RhdHVzQ29kZSA9PT0gMjA0KSA/IHN0cmVhbSA6IHN0cmVhbS5waXBlKHpsaWIuY3JlYXRlVW56aXAoKSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBjb250ZW50LWVuY29kaW5nIGluIG9yZGVyIHRvIG5vdCBjb25mdXNlIGRvd25zdHJlYW0gb3BlcmF0aW9uc1xuICAgICAgICBkZWxldGUgcmVzLmhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIHJldHVybiB0aGUgbGFzdCByZXF1ZXN0IGluIGNhc2Ugb2YgcmVkaXJlY3RzXG4gICAgICB2YXIgbGFzdFJlcXVlc3QgPSByZXMucmVxIHx8IHJlcTtcblxuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzTWVzc2FnZSxcbiAgICAgICAgaGVhZGVyczogcmVzLmhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiBsYXN0UmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICdzdHJlYW0nKSB7XG4gICAgICAgIHJlc3BvbnNlLmRhdGEgPSBzdHJlYW07XG4gICAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXNwb25zZUJ1ZmZlciA9IFtdO1xuICAgICAgICBzdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1EYXRhKGNodW5rKSB7XG4gICAgICAgICAgcmVzcG9uc2VCdWZmZXIucHVzaChjaHVuayk7XG5cbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGNvbnRlbnQgbGVuZ3RoIGlzIG5vdCBvdmVyIHRoZSBtYXhDb250ZW50TGVuZ3RoIGlmIHNwZWNpZmllZFxuICAgICAgICAgIGlmIChjb25maWcubWF4Q29udGVudExlbmd0aCA+IC0xICYmIEJ1ZmZlci5jb25jYXQocmVzcG9uc2VCdWZmZXIpLmxlbmd0aCA+IGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICBzdHJlYW0uZGVzdHJveSgpO1xuICAgICAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdtYXhDb250ZW50TGVuZ3RoIHNpemUgb2YgJyArIGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoICsgJyBleGNlZWRlZCcsXG4gICAgICAgICAgICAgIGNvbmZpZywgbnVsbCwgbGFzdFJlcXVlc3QpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0cmVhbS5vbignZXJyb3InLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1FcnJvcihlcnIpIHtcbiAgICAgICAgICBpZiAocmVxLmFib3J0ZWQpIHJldHVybjtcbiAgICAgICAgICByZWplY3QoZW5oYW5jZUVycm9yKGVyciwgY29uZmlnLCBudWxsLCBsYXN0UmVxdWVzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uIGhhbmRsZVN0cmVhbUVuZCgpIHtcbiAgICAgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gQnVmZmVyLmNvbmNhdChyZXNwb25zZUJ1ZmZlcik7XG4gICAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdhcnJheWJ1ZmZlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlRGF0YS50b1N0cmluZyhjb25maWcucmVzcG9uc2VFbmNvZGluZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHJlc3BvbnNlRGF0YTtcbiAgICAgICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIGVycm9yc1xuICAgIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0RXJyb3IoZXJyKSB7XG4gICAgICBpZiAocmVxLmFib3J0ZWQpIHJldHVybjtcbiAgICAgIHJlamVjdChlbmhhbmNlRXJyb3IoZXJyLCBjb25maWcsIG51bGwsIHJlcSkpO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHJlcXVlc3QgdGltZW91dFxuICAgIGlmIChjb25maWcudGltZW91dCkge1xuICAgICAgLy8gU29tZXRpbWUsIHRoZSByZXNwb25zZSB3aWxsIGJlIHZlcnkgc2xvdywgYW5kIGRvZXMgbm90IHJlc3BvbmQsIHRoZSBjb25uZWN0IGV2ZW50IHdpbGwgYmUgYmxvY2sgYnkgZXZlbnQgbG9vcCBzeXN0ZW0uXG4gICAgICAvLyBBbmQgdGltZXIgY2FsbGJhY2sgd2lsbCBiZSBmaXJlZCwgYW5kIGFib3J0KCkgd2lsbCBiZSBpbnZva2VkIGJlZm9yZSBjb25uZWN0aW9uLCB0aGVuIGdldCBcInNvY2tldCBoYW5nIHVwXCIgYW5kIGNvZGUgRUNPTk5SRVNFVC5cbiAgICAgIC8vIEF0IHRoaXMgdGltZSwgaWYgd2UgaGF2ZSBhIGxhcmdlIG51bWJlciBvZiByZXF1ZXN0LCBub2RlanMgd2lsbCBoYW5nIHVwIHNvbWUgc29ja2V0IG9uIGJhY2tncm91bmQuIGFuZCB0aGUgbnVtYmVyIHdpbGwgdXAgYW5kIHVwLlxuICAgICAgLy8gQW5kIHRoZW4gdGhlc2Ugc29ja2V0IHdoaWNoIGJlIGhhbmcgdXAgd2lsbCBkZXZvcmluZyBDUFUgbGl0dGxlIGJ5IGxpdHRsZS5cbiAgICAgIC8vIENsaWVudFJlcXVlc3Quc2V0VGltZW91dCB3aWxsIGJlIGZpcmVkIG9uIHRoZSBzcGVjaWZ5IG1pbGxpc2Vjb25kcywgYW5kIGNhbiBtYWtlIHN1cmUgdGhhdCBhYm9ydCgpIHdpbGwgYmUgZmlyZWQgYWZ0ZXIgY29ubmVjdC5cbiAgICAgIHJlcS5zZXRUaW1lb3V0KGNvbmZpZy50aW1lb3V0LCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0VGltZW91dCgpIHtcbiAgICAgICAgcmVxLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXEpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKHJlcS5hYm9ydGVkKSByZXR1cm47XG5cbiAgICAgICAgcmVxLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIGlmICh1dGlscy5pc1N0cmVhbShkYXRhKSkge1xuICAgICAgZGF0YS5vbignZXJyb3InLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1FcnJvcihlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVuaGFuY2VFcnJvcihlcnIsIGNvbmZpZywgbnVsbCwgcmVxKSk7XG4gICAgICB9KS5waXBlKHJlcSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcS5lbmQoZGF0YSk7XG4gICAgfVxuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpOyIsIi8qKlxuICogRGV0ZWN0IEVsZWN0cm9uIHJlbmRlcmVyIHByb2Nlc3MsIHdoaWNoIGlzIG5vZGUsIGJ1dCB3ZSBzaG91bGRcbiAqIHRyZWF0IGFzIGEgYnJvd3Nlci5cbiAqL1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYnJvd3Nlci5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL25vZGUuanMnKTtcbn1cbiIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJyMwMDAwQ0MnLCAnIzAwMDBGRicsICcjMDAzM0NDJywgJyMwMDMzRkYnLCAnIzAwNjZDQycsICcjMDA2NkZGJywgJyMwMDk5Q0MnLFxuICAnIzAwOTlGRicsICcjMDBDQzAwJywgJyMwMENDMzMnLCAnIzAwQ0M2NicsICcjMDBDQzk5JywgJyMwMENDQ0MnLCAnIzAwQ0NGRicsXG4gICcjMzMwMENDJywgJyMzMzAwRkYnLCAnIzMzMzNDQycsICcjMzMzM0ZGJywgJyMzMzY2Q0MnLCAnIzMzNjZGRicsICcjMzM5OUNDJyxcbiAgJyMzMzk5RkYnLCAnIzMzQ0MwMCcsICcjMzNDQzMzJywgJyMzM0NDNjYnLCAnIzMzQ0M5OScsICcjMzNDQ0NDJywgJyMzM0NDRkYnLFxuICAnIzY2MDBDQycsICcjNjYwMEZGJywgJyM2NjMzQ0MnLCAnIzY2MzNGRicsICcjNjZDQzAwJywgJyM2NkNDMzMnLCAnIzk5MDBDQycsXG4gICcjOTkwMEZGJywgJyM5OTMzQ0MnLCAnIzk5MzNGRicsICcjOTlDQzAwJywgJyM5OUNDMzMnLCAnI0NDMDAwMCcsICcjQ0MwMDMzJyxcbiAgJyNDQzAwNjYnLCAnI0NDMDA5OScsICcjQ0MwMENDJywgJyNDQzAwRkYnLCAnI0NDMzMwMCcsICcjQ0MzMzMzJywgJyNDQzMzNjYnLFxuICAnI0NDMzM5OScsICcjQ0MzM0NDJywgJyNDQzMzRkYnLCAnI0NDNjYwMCcsICcjQ0M2NjMzJywgJyNDQzk5MDAnLCAnI0NDOTkzMycsXG4gICcjQ0NDQzAwJywgJyNDQ0NDMzMnLCAnI0ZGMDAwMCcsICcjRkYwMDMzJywgJyNGRjAwNjYnLCAnI0ZGMDA5OScsICcjRkYwMENDJyxcbiAgJyNGRjAwRkYnLCAnI0ZGMzMwMCcsICcjRkYzMzMzJywgJyNGRjMzNjYnLCAnI0ZGMzM5OScsICcjRkYzM0NDJywgJyNGRjMzRkYnLFxuICAnI0ZGNjYwMCcsICcjRkY2NjMzJywgJyNGRjk5MDAnLCAnI0ZGOTkzMycsICcjRkZDQzAwJywgJyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgTm9kZS5qcyBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFsgNiwgMiwgMywgNCwgNSwgMSBdO1xuXG50cnkge1xuICB2YXIgc3VwcG9ydHNDb2xvciA9IHJlcXVpcmUoJ3N1cHBvcnRzLWNvbG9yJyk7XG4gIGlmIChzdXBwb3J0c0NvbG9yICYmIHN1cHBvcnRzQ29sb3IubGV2ZWwgPj0gMikge1xuICAgIGV4cG9ydHMuY29sb3JzID0gW1xuICAgICAgMjAsIDIxLCAyNiwgMjcsIDMyLCAzMywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1LCA1NiwgNTcsIDYyLCA2MywgNjgsXG4gICAgICA2OSwgNzQsIDc1LCA3NiwgNzcsIDc4LCA3OSwgODAsIDgxLCA5MiwgOTMsIDk4LCA5OSwgMTEyLCAxMTMsIDEyOCwgMTI5LCAxMzQsXG4gICAgICAxMzUsIDE0OCwgMTQ5LCAxNjAsIDE2MSwgMTYyLCAxNjMsIDE2NCwgMTY1LCAxNjYsIDE2NywgMTY4LCAxNjksIDE3MCwgMTcxLFxuICAgICAgMTcyLCAxNzMsIDE3OCwgMTc5LCAxODQsIDE4NSwgMTk2LCAxOTcsIDE5OCwgMTk5LCAyMDAsIDIwMSwgMjAyLCAyMDMsIDIwNCxcbiAgICAgIDIwNSwgMjA2LCAyMDcsIDIwOCwgMjA5LCAyMTQsIDIxNSwgMjIwLCAyMjFcbiAgICBdO1xuICB9XG59IGNhdGNoIChlcnIpIHtcbiAgLy8gc3dhbGxvdyAtIHdlIG9ubHkgY2FyZSBpZiBgc3VwcG9ydHMtY29sb3JgIGlzIGF2YWlsYWJsZTsgaXQgZG9lc24ndCBoYXZlIHRvIGJlLlxufVxuXG4vKipcbiAqIEJ1aWxkIHVwIHRoZSBkZWZhdWx0IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGZyb20gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiAgICQgREVCVUdfQ09MT1JTPW5vIERFQlVHX0RFUFRIPTEwIERFQlVHX1NIT1dfSElEREVOPWVuYWJsZWQgbm9kZSBzY3JpcHQuanNcbiAqL1xuXG5leHBvcnRzLmluc3BlY3RPcHRzID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAvXmRlYnVnXy9pLnRlc3Qoa2V5KTtcbn0pLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgLy8gY2FtZWwtY2FzZVxuICB2YXIgcHJvcCA9IGtleVxuICAgIC5zdWJzdHJpbmcoNilcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9fKFthLXpdKS9nLCBmdW5jdGlvbiAoXywgaykgeyByZXR1cm4gay50b1VwcGVyQ2FzZSgpIH0pO1xuXG4gIC8vIGNvZXJjZSBzdHJpbmcgdmFsdWUgaW50byBKUyB2YWx1ZVxuICB2YXIgdmFsID0gcHJvY2Vzcy5lbnZba2V5XTtcbiAgaWYgKC9eKHllc3xvbnx0cnVlfGVuYWJsZWQpJC9pLnRlc3QodmFsKSkgdmFsID0gdHJ1ZTtcbiAgZWxzZSBpZiAoL14obm98b2ZmfGZhbHNlfGRpc2FibGVkKSQvaS50ZXN0KHZhbCkpIHZhbCA9IGZhbHNlO1xuICBlbHNlIGlmICh2YWwgPT09ICdudWxsJykgdmFsID0gbnVsbDtcbiAgZWxzZSB2YWwgPSBOdW1iZXIodmFsKTtcblxuICBvYmpbcHJvcF0gPSB2YWw7XG4gIHJldHVybiBvYmo7XG59LCB7fSk7XG5cbi8qKlxuICogSXMgc3Rkb3V0IGEgVFRZPyBDb2xvcmVkIG91dHB1dCBpcyBlbmFibGVkIHdoZW4gYHRydWVgLlxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgcmV0dXJuICdjb2xvcnMnIGluIGV4cG9ydHMuaW5zcGVjdE9wdHNcbiAgICA/IEJvb2xlYW4oZXhwb3J0cy5pbnNwZWN0T3B0cy5jb2xvcnMpXG4gICAgOiB0dHkuaXNhdHR5KHByb2Nlc3Muc3RkZXJyLmZkKTtcbn1cblxuLyoqXG4gKiBNYXAgJW8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsIG9uIGEgc2luZ2xlIGxpbmUuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLm8gPSBmdW5jdGlvbih2KSB7XG4gIHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG4gIHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cylcbiAgICAuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBzdHIudHJpbSgpXG4gICAgfSkuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBNYXAgJW8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsb3dpbmcgbXVsdGlwbGUgbGluZXMgaWYgbmVlZGVkLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5PID0gZnVuY3Rpb24odikge1xuICB0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuICByZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcblxuLyoqXG4gKiBBZGRzIEFOU0kgY29sb3IgZXNjYXBlIGNvZGVzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVzcGFjZTtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGlmICh1c2VDb2xvcnMpIHtcbiAgICB2YXIgYyA9IHRoaXMuY29sb3I7XG4gICAgdmFyIGNvbG9yQ29kZSA9ICdcXHUwMDFiWzMnICsgKGMgPCA4ID8gYyA6ICc4OzU7JyArIGMpO1xuICAgIHZhciBwcmVmaXggPSAnICAnICsgY29sb3JDb2RlICsgJzsxbScgKyBuYW1lICsgJyAnICsgJ1xcdTAwMWJbMG0nO1xuXG4gICAgYXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuICAgIGFyZ3MucHVzaChjb2xvckNvZGUgKyAnbSsnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpICsgJ1xcdTAwMWJbMG0nKTtcbiAgfSBlbHNlIHtcbiAgICBhcmdzWzBdID0gZ2V0RGF0ZSgpICsgbmFtZSArICcgJyArIGFyZ3NbMF07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgaWYgKGV4cG9ydHMuaW5zcGVjdE9wdHMuaGlkZURhdGUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSArICcgJztcbiAgfVxufVxuXG4vKipcbiAqIEludm9rZXMgYHV0aWwuZm9ybWF0KClgIHdpdGggdGhlIHNwZWNpZmllZCBhcmd1bWVudHMgYW5kIHdyaXRlcyB0byBzdGRlcnIuXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICByZXR1cm4gcHJvY2Vzcy5zdGRlcnIud3JpdGUodXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgYXJndW1lbnRzKSArICdcXG4nKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAvLyBJZiB5b3Ugc2V0IGEgcHJvY2Vzcy5lbnYgZmllbGQgdG8gbnVsbCBvciB1bmRlZmluZWQsIGl0IGdldHMgY2FzdCB0byB0aGVcbiAgICAvLyBzdHJpbmcgJ251bGwnIG9yICd1bmRlZmluZWQnLiBKdXN0IGRlbGV0ZSBpbnN0ZWFkLlxuICAgIGRlbGV0ZSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzLmVudi5ERUJVRyA9IG5hbWVzcGFjZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuREVCVUc7XG59XG5cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gaW5pdCAoZGVidWcpIHtcbiAgZGVidWcuaW5zcGVjdE9wdHMgPSB7fTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuaW5zcGVjdE9wdHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBkZWJ1Zy5pbnNwZWN0T3B0c1trZXlzW2ldXSA9IGV4cG9ydHMuaW5zcGVjdE9wdHNba2V5c1tpXV07XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYHByb2Nlc3MuZW52LkRFQlVHYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOyIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IGhhc0ZsYWcgPSByZXF1aXJlKCdoYXMtZmxhZycpO1xuXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudjtcblxubGV0IGZvcmNlQ29sb3I7XG5pZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fFxuXHRoYXNGbGFnKCduby1jb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1mYWxzZScpKSB7XG5cdGZvcmNlQ29sb3IgPSBmYWxzZTtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fFxuXHRoYXNGbGFnKCdjb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj10cnVlJykgfHxcblx0aGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcblx0Zm9yY2VDb2xvciA9IHRydWU7XG59XG5pZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcblx0Zm9yY2VDb2xvciA9IGVudi5GT1JDRV9DT0xPUi5sZW5ndGggPT09IDAgfHwgcGFyc2VJbnQoZW52LkZPUkNFX0NPTE9SLCAxMCkgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxldmVsKGxldmVsKSB7XG5cdGlmIChsZXZlbCA9PT0gMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bGV2ZWwsXG5cdFx0aGFzQmFzaWM6IHRydWUsXG5cdFx0aGFzMjU2OiBsZXZlbCA+PSAyLFxuXHRcdGhhczE2bTogbGV2ZWwgPj0gM1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0NvbG9yKHN0cmVhbSkge1xuXHRpZiAoZm9yY2VDb2xvciA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0xNm0nKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPWZ1bGwnKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPXRydWVjb2xvcicpKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmIChzdHJlYW0gJiYgIXN0cmVhbS5pc1RUWSAmJiBmb3JjZUNvbG9yICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBtaW4gPSBmb3JjZUNvbG9yID8gMSA6IDA7XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcblx0XHQvLyBOb2RlLmpzIDcuNS4wIGlzIHRoZSBmaXJzdCB2ZXJzaW9uIG9mIE5vZGUuanMgdG8gaW5jbHVkZSBhIHBhdGNoIHRvXG5cdFx0Ly8gbGlidXYgdGhhdCBlbmFibGVzIDI1NiBjb2xvciBvdXRwdXQgb24gV2luZG93cy4gQW55dGhpbmcgZWFybGllciBhbmQgaXRcblx0XHQvLyB3b24ndCB3b3JrLiBIb3dldmVyLCBoZXJlIHdlIHRhcmdldCBOb2RlLmpzIDggYXQgbWluaW11bSBhcyBpdCBpcyBhbiBMVFNcblx0XHQvLyByZWxlYXNlLCBhbmQgTm9kZS5qcyA3IGlzIG5vdC4gV2luZG93cyAxMCBidWlsZCAxMDU4NiBpcyB0aGUgZmlyc3QgV2luZG93c1xuXHRcdC8vIHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAyNTYgY29sb3JzLiBXaW5kb3dzIDEwIGJ1aWxkIDE0OTMxIGlzIHRoZSBmaXJzdCByZWxlYXNlXG5cdFx0Ly8gdGhhdCBzdXBwb3J0cyAxNm0vVHJ1ZUNvbG9yLlxuXHRcdGNvbnN0IG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xuXHRcdGlmIChcblx0XHRcdE51bWJlcihwcm9jZXNzLnZlcnNpb25zLm5vZGUuc3BsaXQoJy4nKVswXSkgPj0gOCAmJlxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMl0pID49IDEwNTg2XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTQ5MzEgPyAzIDogMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ0knIGluIGVudikge1xuXHRcdGlmIChbJ1RSQVZJUycsICdDSVJDTEVDSScsICdBUFBWRVlPUicsICdHSVRMQUJfQ0knXS5zb21lKHNpZ24gPT4gc2lnbiBpbiBlbnYpIHx8IGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKCdURUFNQ0lUWV9WRVJTSU9OJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gL14oOVxcLigwKlsxLTldXFxkKilcXC58XFxkezIsfVxcLikvLnRlc3QoZW52LlRFQU1DSVRZX1ZFUlNJT04pID8gMSA6IDA7XG5cdH1cblxuXHRpZiAoZW52LkNPTE9SVEVSTSA9PT0gJ3RydWVjb2xvcicpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmICgnVEVSTV9QUk9HUkFNJyBpbiBlbnYpIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gcGFyc2VJbnQoKGVudi5URVJNX1BST0dSQU1fVkVSU0lPTiB8fCAnJykuc3BsaXQoJy4nKVswXSwgMTApO1xuXG5cdFx0c3dpdGNoIChlbnYuVEVSTV9QUk9HUkFNKSB7XG5cdFx0XHRjYXNlICdpVGVybS5hcHAnOlxuXHRcdFx0XHRyZXR1cm4gdmVyc2lvbiA+PSAzID8gMyA6IDI7XG5cdFx0XHRjYXNlICdBcHBsZV9UZXJtaW5hbCc6XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdH1cblx0fVxuXG5cdGlmICgvLTI1Nihjb2xvcik/JC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoL15zY3JlZW58Xnh0ZXJtfF52dDEwMHxednQyMjB8XnJ4dnR8Y29sb3J8YW5zaXxjeWd3aW58bGludXgvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDT0xPUlRFUk0nIGluIGVudikge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKGVudi5URVJNID09PSAnZHVtYicpIHtcblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0cmV0dXJuIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydExldmVsKHN0cmVhbSkge1xuXHRjb25zdCBsZXZlbCA9IHN1cHBvcnRzQ29sb3Ioc3RyZWFtKTtcblx0cmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN1cHBvcnRzQ29sb3I6IGdldFN1cHBvcnRMZXZlbCxcblx0c3Rkb3V0OiBnZXRTdXBwb3J0TGV2ZWwocHJvY2Vzcy5zdGRvdXQpLFxuXHRzdGRlcnI6IGdldFN1cHBvcnRMZXZlbChwcm9jZXNzLnN0ZGVycilcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTsiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IChmbGFnLCBhcmd2KSA9PiB7XG5cdGFyZ3YgPSBhcmd2IHx8IHByb2Nlc3MuYXJndjtcblx0Y29uc3QgcHJlZml4ID0gZmxhZy5zdGFydHNXaXRoKCctJykgPyAnJyA6IChmbGFnLmxlbmd0aCA9PT0gMSA/ICctJyA6ICctLScpO1xuXHRjb25zdCBwb3MgPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cdGNvbnN0IHRlcm1pbmF0b3JQb3MgPSBhcmd2LmluZGV4T2YoJy0tJyk7XG5cdHJldHVybiBwb3MgIT09IC0xICYmICh0ZXJtaW5hdG9yUG9zID09PSAtMSA/IHRydWUgOiBwb3MgPCB0ZXJtaW5hdG9yUG9zKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6bGliXCIpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCJjb25zdCBGaW5kRmlsZXMgPSByZXF1aXJlKFwibm9kZS1maW5kLWZpbGVzXCIpO1xyXG5cclxuZXhwb3J0IGxldCBjbnQ9MCxlcnJvcnM9MDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlsZXMocm9vdEZvbGRlciwgZmlsZU1vZGlmaWVkRGF0ZSwgb25GaWxlKSB7XHJcbiAgICB2YXIgZmluZGVyID0gbmV3IEZpbmRGaWxlcyh7XHJcbiAgICAgICAgcm9vdEZvbGRlcixcclxuICAgICAgICBmaWxlTW9kaWZpZWREYXRlXHJcbiAgICB9KTtcclxuICAgIHZhciByZXN1bHQscmVzb2x2ZSxyZWplY3Q7XHJcbiAgICBjbnQ9MDsgZXJyb3JzPTA7XHJcblxyXG4gICAgZmluZGVyLm9uKFwibWF0Y2hcIiwgZnVuY3Rpb24oc3RyUGF0aCwgc3RhdCkge1xyXG4gICAgICAgIGlmIChvbkZpbGUpIG9uRmlsZShzdHJQYXRoLCBzdGF0KTtcclxuICAgICAgICBjbnQrKztcclxuICAgIH0pO1xyXG4gICAgZmluZGVyLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmVzb2x2ZShjbnQpO1xyXG4gICAgfSk7XHJcbiAgICBmaW5kZXIub24oXCJwYXRoZXJyb3JcIiwgZnVuY3Rpb24oZXJyLCBzdHJQYXRoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmb3IgUGF0aCBcIiArIHN0clBhdGggKyBcIiBcIiArIGVycik7ICAvLyBOb3RlIHRoYXQgYW4gZXJyb3IgaW4gYWNjZXNzaW5nIGEgcGFydGljdWxhciBmaWxlIGRvZXMgbm90IHN0b3AgdGhlIHdob2xlIHNob3dcclxuICAgICAgICBlcnJvcnMrKztcclxuICAgIH0pO1xyXG4gICAgZmluZGVyLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWwgRXJyb3IgXCIgKyBlcnIpO1xyXG4gICAgICAgIGVycm9ycysrO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzdWx0ID0gbmV3IFByb21pc2UoKF9yZXNvbHZlLF9yZWplY3QpPT57XHJcbiAgICAgICAgcmVzb2x2ZSA9IF9yZXNvbHZlO1xyXG4gICAgICAgIHJlamVjdCA9IF9yZWplY3Q7XHJcbiAgICAgICAgZmluZGVyLnN0YXJ0U2VhcmNoKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5jb25zdCBmc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJmc1wiKSk7XG5jb25zdCBhc3luY18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJhc3luY1wiKSk7XG5jb25zdCBwYXRoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInBhdGhcIikpO1xuY29uc3QgZXZlbnRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImV2ZW50c1wiKSk7XG52YXIgRXZlbnRFbWl0dGVyID0gZXZlbnRzXzEuZGVmYXVsdC5FdmVudEVtaXR0ZXI7XG4vKioqXG4gKiBUaGlzIGNsYXNzIHJlY3Vyc2l2ZWx5IGZpbmRzIGZpbGVzIHRoYXQgbWF0Y2ggdGhlIGZpbHRlciBmdW5jdGlvbiBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yXG4gKiBBbiBhbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciB0YWtlcyBhIGZpbGVNb2RpZmllZERhdGUgYW5kIHJldHVybnMgYWxsIGZpbGVzIHRoYXQgaGF2ZSBiZWVuIG1vZGlmaWVkIHNpbmNlIHRoYXQgZGF0ZVxuICogdGhpcyBjbGFzcyBlbWl0cyBhIG51bWJlciBvZiBldmVudHNcbiAqIG9uIFwibWF0Y2hcIiBpcyBlbWl0dGVkIGZvciBldmVyeSBwYXRoIHRoYXQgbWF0Y2hlc1xuICovXG5jbGFzcyBmaW5kZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZmlsZU1vZGlmaWVkRGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXJGdW5jdGlvbiA9IChzdHJQYXRoLCBmc1N0YXQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGZzU3RhdC5tdGltZSA+IG9wdGlvbnMuZmlsZU1vZGlmaWVkRGF0ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5maWx0ZXJGdW5jdGlvbikge1xuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXJGdW5jdGlvbiA9ICgpID0+IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgc3RhcnRTZWFyY2goKSB7XG4gICAgICAgIHRoaXMucmVjdXJzZUZvbGRlcih0aGlzLm9wdGlvbnMucm9vdEZvbGRlciwgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRoaXMgU2hvdWxkIENhbGwgd2hlbiBldmVyeXRoaW5nIGlzIGZpbmlzaGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWN1cnNlRm9sZGVyKHN0ckZvbGRlck5hbWUsIGZvbGRlckNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgZnNfMS5kZWZhdWx0LnJlYWRkaXIoc3RyRm9sZGVyTmFtZSwgKGVyciwgZmlsZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGVyciwgc3RyRm9sZGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGRlckNvbXBsZXRlQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZmlsZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sZGVyQ29tcGxldGVDYWxsYmFjayhudWxsKTsgLy8gVGhpcyBpcyBqdXN0IGFuIGVtcHR5IGZvbGRlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXN5bmNfMS5kZWZhdWx0LmVhY2goZmlsZXMsIChmaWxlLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJQYXRoID0gcGF0aF8xLmRlZmF1bHQuam9pbihzdHJGb2xkZXJOYW1lLCBmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBhdGhFcnJvcihlLCBzdHJQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpOyAvLyBEb24ndCByZXR1cm4gZXJyb3IgdG8gY2FsbGJhY2sgb3Igd2Ugd2lsbCBtaXNzIG90aGVyIGZpbGVzIGluIGRpcmVjdG9yeVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm9uRmlsZUZvdW5kKHN0clBhdGgsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25QYXRoRXJyb3IoZXJyLCBzdHJGb2xkZXJOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIGlmKHN0ckZvbGRlck5hbWUubGVuZ3RoIDwgMjApXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkIFwiICsgc3RyRm9sZGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGRlckNvbXBsZXRlQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25GaWxlRm91bmQoc3RyUGF0aCwgY2FsbGJhY2spIHtcbiAgICAgICAgZnNfMS5kZWZhdWx0LmxzdGF0KHN0clBhdGgsIChlcnIsIHN0YXQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGVyciwgc3RyUGF0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpOyAvLyBEb24ndCByZXR1cm4gZXJyb3IgdG8gY2FsbGJhY2sgb3Igd2Ugd2lsbCBtaXNzIG90aGVyIGZpbGVzIGluIGRpcmVjdG9yeVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhdGhFcnJvcihuZXcgRXJyb3IoXCJDb3VsZCBub3QgZ2V0IHN0YXQgZm9yIGZpbGUgXCIgKyBzdHJQYXRoKSwgc3RyUGF0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpOyAvLyBEb24ndCByZXR1cm4gZXJyb3IgdG8gY2FsbGJhY2sgb3Igd2Ugd2lsbCBtaXNzIG90aGVyIGZpbGVzIGluIGRpcmVjdG9yeVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tNYXRjaChzdHJQYXRoLCBzdGF0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3Vyc2VGb2xkZXIoc3RyUGF0aCwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGVyciwgc3RyUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja01hdGNoKHN0clBhdGgsIHN0YXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoZWNrTWF0Y2goc3RyUGF0aCwgc3RhdCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWx0ZXJGdW5jdGlvbihzdHJQYXRoLCBzdGF0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcIm1hdGNoXCIsIHN0clBhdGgsIHN0YXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGUsIHN0clBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uUGF0aEVycm9yKGVyciwgc3RyUGF0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwicGF0aGVycm9yXCIsIGVyciwgc3RyUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vQWxyZWFkeSBlbWl0dGVkIGEgcGF0aCBlcnJvciBhbmQgdGhlIGhhbmRsZXIgZmFpbGVkIG11c3Qgbm90IHRocm93IGVycm9yIG9yIG90aGVyIGZpbGVzIHdpbGwgZmFpbCB0byBwcm9jZXNzIHRvb1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwiRXJyb3IgaW4gcGF0aCBFcnJvciBIYW5kbGVyXCIgKyBlKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUtZmluZC1maWxlcy5qcy5tYXAiLCIvKmdsb2JhbCBzZXRJbW1lZGlhdGU6IGZhbHNlLCBzZXRUaW1lb3V0OiBmYWxzZSwgY29uc29sZTogZmFsc2UgKi9cbihmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgYXN5bmMgPSB7fTtcblxuICAgIC8vIGdsb2JhbCBvbiB0aGUgc2VydmVyLCB3aW5kb3cgaW4gdGhlIGJyb3dzZXJcbiAgICB2YXIgcm9vdCwgcHJldmlvdXNfYXN5bmM7XG5cbiAgICByb290ID0gdGhpcztcbiAgICBpZiAocm9vdCAhPSBudWxsKSB7XG4gICAgICBwcmV2aW91c19hc3luYyA9IHJvb3QuYXN5bmM7XG4gICAgfVxuXG4gICAgYXN5bmMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5hc3luYyA9IHByZXZpb3VzX2FzeW5jO1xuICAgICAgICByZXR1cm4gYXN5bmM7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9ubHlfb25jZShmbikge1xuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjYWxsZWQpIHRocm93IG5ldyBFcnJvcihcIkNhbGxiYWNrIHdhcyBhbHJlYWR5IGNhbGxlZC5cIik7XG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm4uYXBwbHkocm9vdCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLy8gY3Jvc3MtYnJvd3NlciBjb21wYXRpYmxpdHkgZnVuY3Rpb25zIC8vLy9cblxuICAgIHZhciBfZWFjaCA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yKSB7XG4gICAgICAgIGlmIChhcnIuZm9yRWFjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyci5mb3JFYWNoKGl0ZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaXRlcmF0b3IoYXJyW2ldLCBpLCBhcnIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBfbWFwID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IpIHtcbiAgICAgICAgaWYgKGFyci5tYXApIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIubWFwKGl0ZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBfZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBpLCBhKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goaXRlcmF0b3IoeCwgaSwgYSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcblxuICAgIHZhciBfcmVkdWNlID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIG1lbW8pIHtcbiAgICAgICAgaWYgKGFyci5yZWR1Y2UpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIucmVkdWNlKGl0ZXJhdG9yLCBtZW1vKTtcbiAgICAgICAgfVxuICAgICAgICBfZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBpLCBhKSB7XG4gICAgICAgICAgICBtZW1vID0gaXRlcmF0b3IobWVtbywgeCwgaSwgYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuXG4gICAgdmFyIF9rZXlzID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG5cbiAgICAvLy8vIGV4cG9ydGVkIGFzeW5jIG1vZHVsZSBmdW5jdGlvbnMgLy8vL1xuXG4gICAgLy8vLyBuZXh0VGljayBpbXBsZW1lbnRhdGlvbiB3aXRoIGJyb3dzZXItY29tcGF0aWJsZSBmYWxsYmFjayAvLy8vXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCAhKHByb2Nlc3MubmV4dFRpY2spKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhc3luYy5uZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIHNldEltbWVkaWF0ZShmbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXN5bmMubmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFzeW5jLm5leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcbiAgICB9XG5cbiAgICBhc3luYy5lYWNoID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIF9lYWNoKGFyciwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgsIG9ubHlfb25jZShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQgPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYXN5bmMuZm9yRWFjaCA9IGFzeW5jLmVhY2g7XG5cbiAgICBhc3luYy5lYWNoU2VyaWVzID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIHZhciBpdGVyYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgaXRlcmF0b3IoYXJyW2NvbXBsZXRlZF0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soaXRlcmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgaXRlcmF0ZSgpO1xuICAgIH07XG4gICAgYXN5bmMuZm9yRWFjaFNlcmllcyA9IGFzeW5jLmVhY2hTZXJpZXM7XG5cbiAgICBhc3luYy5lYWNoTGltaXQgPSBmdW5jdGlvbiAoYXJyLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBmbiA9IF9lYWNoTGltaXQobGltaXQpO1xuICAgICAgICBmbi5hcHBseShudWxsLCBbYXJyLCBpdGVyYXRvciwgY2FsbGJhY2tdKTtcbiAgICB9O1xuICAgIGFzeW5jLmZvckVhY2hMaW1pdCA9IGFzeW5jLmVhY2hMaW1pdDtcblxuICAgIHZhciBfZWFjaExpbWl0ID0gZnVuY3Rpb24gKGxpbWl0KSB7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgIGlmICghYXJyLmxlbmd0aCB8fCBsaW1pdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29tcGxldGVkID0gMDtcbiAgICAgICAgICAgIHZhciBzdGFydGVkID0gMDtcbiAgICAgICAgICAgIHZhciBydW5uaW5nID0gMDtcblxuICAgICAgICAgICAgKGZ1bmN0aW9uIHJlcGxlbmlzaCAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdoaWxlIChydW5uaW5nIDwgbGltaXQgJiYgc3RhcnRlZCA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRlZCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yKGFycltzdGFydGVkIC0gMV0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsZW5pc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuXG4gICAgdmFyIGRvUGFyYWxsZWwgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBbYXN5bmMuZWFjaF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBkb1BhcmFsbGVsTGltaXQgPSBmdW5jdGlvbihsaW1pdCwgZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBbX2VhY2hMaW1pdChsaW1pdCldLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgZG9TZXJpZXMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBbYXN5bmMuZWFjaFNlcmllc10uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG5cbiAgICB2YXIgX2FzeW5jTWFwID0gZnVuY3Rpb24gKGVhY2hmbiwgYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgYXJyID0gX21hcChhcnIsIGZ1bmN0aW9uICh4LCBpKSB7XG4gICAgICAgICAgICByZXR1cm4ge2luZGV4OiBpLCB2YWx1ZTogeH07XG4gICAgICAgIH0pO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgudmFsdWUsIGZ1bmN0aW9uIChlcnIsIHYpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzW3guaW5kZXhdID0gdjtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYXN5bmMubWFwID0gZG9QYXJhbGxlbChfYXN5bmNNYXApO1xuICAgIGFzeW5jLm1hcFNlcmllcyA9IGRvU2VyaWVzKF9hc3luY01hcCk7XG4gICAgYXN5bmMubWFwTGltaXQgPSBmdW5jdGlvbiAoYXJyLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBfbWFwTGltaXQobGltaXQpKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgdmFyIF9tYXBMaW1pdCA9IGZ1bmN0aW9uKGxpbWl0KSB7XG4gICAgICAgIHJldHVybiBkb1BhcmFsbGVsTGltaXQobGltaXQsIF9hc3luY01hcCk7XG4gICAgfTtcblxuICAgIC8vIHJlZHVjZSBvbmx5IGhhcyBhIHNlcmllcyB2ZXJzaW9uLCBhcyBkb2luZyByZWR1Y2UgaW4gcGFyYWxsZWwgd29uJ3RcbiAgICAvLyB3b3JrIGluIG1hbnkgc2l0dWF0aW9ucy5cbiAgICBhc3luYy5yZWR1Y2UgPSBmdW5jdGlvbiAoYXJyLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMuZWFjaFNlcmllcyhhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IobWVtbywgeCwgZnVuY3Rpb24gKGVyciwgdikge1xuICAgICAgICAgICAgICAgIG1lbW8gPSB2O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCBtZW1vKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBpbmplY3QgYWxpYXNcbiAgICBhc3luYy5pbmplY3QgPSBhc3luYy5yZWR1Y2U7XG4gICAgLy8gZm9sZGwgYWxpYXNcbiAgICBhc3luYy5mb2xkbCA9IGFzeW5jLnJlZHVjZTtcblxuICAgIGFzeW5jLnJlZHVjZVJpZ2h0ID0gZnVuY3Rpb24gKGFyciwgbWVtbywgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXZlcnNlZCA9IF9tYXAoYXJyLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0pLnJldmVyc2UoKTtcbiAgICAgICAgYXN5bmMucmVkdWNlKHJldmVyc2VkLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgLy8gZm9sZHIgYWxpYXNcbiAgICBhc3luYy5mb2xkciA9IGFzeW5jLnJlZHVjZVJpZ2h0O1xuXG4gICAgdmFyIF9maWx0ZXIgPSBmdW5jdGlvbiAoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBhcnIgPSBfbWFwKGFyciwgZnVuY3Rpb24gKHgsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiB7aW5kZXg6IGksIHZhbHVlOiB4fTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeC52YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soX21hcChyZXN1bHRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgICAgICB9KSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBhc3luYy5maWx0ZXIgPSBkb1BhcmFsbGVsKF9maWx0ZXIpO1xuICAgIGFzeW5jLmZpbHRlclNlcmllcyA9IGRvU2VyaWVzKF9maWx0ZXIpO1xuICAgIC8vIHNlbGVjdCBhbGlhc1xuICAgIGFzeW5jLnNlbGVjdCA9IGFzeW5jLmZpbHRlcjtcbiAgICBhc3luYy5zZWxlY3RTZXJpZXMgPSBhc3luYy5maWx0ZXJTZXJpZXM7XG5cbiAgICB2YXIgX3JlamVjdCA9IGZ1bmN0aW9uIChlYWNoZm4sIGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGFyciA9IF9tYXAoYXJyLCBmdW5jdGlvbiAoeCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHtpbmRleDogaSwgdmFsdWU6IHh9O1xuICAgICAgICB9KTtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LnZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICghdikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soX21hcChyZXN1bHRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgICAgICB9KSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBhc3luYy5yZWplY3QgPSBkb1BhcmFsbGVsKF9yZWplY3QpO1xuICAgIGFzeW5jLnJlamVjdFNlcmllcyA9IGRvU2VyaWVzKF9yZWplY3QpO1xuXG4gICAgdmFyIF9kZXRlY3QgPSBmdW5jdGlvbiAoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBtYWluX2NhbGxiYWNrKSB7XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayh4KTtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgbWFpbl9jYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFzeW5jLmRldGVjdCA9IGRvUGFyYWxsZWwoX2RldGVjdCk7XG4gICAgYXN5bmMuZGV0ZWN0U2VyaWVzID0gZG9TZXJpZXMoX2RldGVjdCk7XG5cbiAgICBhc3luYy5zb21lID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIG1haW5fY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMuZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgbWFpbl9jYWxsYmFjayhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gYW55IGFsaWFzXG4gICAgYXN5bmMuYW55ID0gYXN5bmMuc29tZTtcblxuICAgIGFzeW5jLmV2ZXJ5ID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIG1haW5fY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMuZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXYpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG1haW5fY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBtYWluX2NhbGxiYWNrKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGFsbCBhbGlhc1xuICAgIGFzeW5jLmFsbCA9IGFzeW5jLmV2ZXJ5O1xuXG4gICAgYXN5bmMuc29ydEJ5ID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGFzeW5jLm1hcChhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKGVyciwgY3JpdGVyaWEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCB7dmFsdWU6IHgsIGNyaXRlcmlhOiBjcml0ZXJpYX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyLCByZXN1bHRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhLCBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIF9tYXAocmVzdWx0cy5zb3J0KGZuKSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWU7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMuYXV0byA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgdmFyIGtleXMgPSBfa2V5cyh0YXNrcyk7XG4gICAgICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHRzID0ge307XG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICB2YXIgYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy51bnNoaWZ0KGZuKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0gPT09IGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciB0YXNrQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfZWFjaChsaXN0ZW5lcnMuc2xpY2UoMCksIGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBhZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX2tleXMocmVzdWx0cykubGVuZ3RoID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9lYWNoKGtleXMsIGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9ICh0YXNrc1trXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSA/IFt0YXNrc1trXV06IHRhc2tzW2tdO1xuICAgICAgICAgICAgdmFyIHRhc2tDYWxsYmFjayA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNhZmVSZXN1bHRzID0ge307XG4gICAgICAgICAgICAgICAgICAgIF9lYWNoKF9rZXlzKHJlc3VsdHMpLCBmdW5jdGlvbihya2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYWZlUmVzdWx0c1tya2V5XSA9IHJlc3VsdHNbcmtleV07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzYWZlUmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgc2FmZVJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBzdG9wIHN1YnNlcXVlbnQgZXJyb3JzIGhpdHRpbmcgY2FsbGJhY2sgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNba10gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayh0YXNrQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcmVxdWlyZXMgPSB0YXNrLnNsaWNlKDAsIE1hdGguYWJzKHRhc2subGVuZ3RoIC0gMSkpIHx8IFtdO1xuICAgICAgICAgICAgdmFyIHJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVkdWNlKHJlcXVpcmVzLCBmdW5jdGlvbiAoYSwgeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGEgJiYgcmVzdWx0cy5oYXNPd25Qcm9wZXJ0eSh4KSk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSkgJiYgIXJlc3VsdHMuaGFzT3duUHJvcGVydHkoayk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHJlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICB0YXNrW3Rhc2subGVuZ3RoIC0gMV0odGFza0NhbGxiYWNrLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tbdGFzay5sZW5ndGggLSAxXSh0YXNrQ2FsbGJhY2ssIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYy53YXRlcmZhbGwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd3JhcEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2god3JhcEl0ZXJhdG9yKG5leHQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3IuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHdyYXBJdGVyYXRvcihhc3luYy5pdGVyYXRvcih0YXNrcykpKCk7XG4gICAgfTtcblxuICAgIHZhciBfcGFyYWxsZWwgPSBmdW5jdGlvbihlYWNoZm4sIHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBpZiAodGFza3MuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICBlYWNoZm4ubWFwKHRhc2tzLCBmdW5jdGlvbiAoZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIGVyciwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXN1bHRzID0ge307XG4gICAgICAgICAgICBlYWNoZm4uZWFjaChfa2V5cyh0YXNrcyksIGZ1bmN0aW9uIChrLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRhc2tzW2tdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLnBhcmFsbGVsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBfcGFyYWxsZWwoeyBtYXA6IGFzeW5jLm1hcCwgZWFjaDogYXN5bmMuZWFjaCB9LCB0YXNrcywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5wYXJhbGxlbExpbWl0ID0gZnVuY3Rpb24odGFza3MsIGxpbWl0LCBjYWxsYmFjaykge1xuICAgICAgICBfcGFyYWxsZWwoeyBtYXA6IF9tYXBMaW1pdChsaW1pdCksIGVhY2g6IF9lYWNoTGltaXQobGltaXQpIH0sIHRhc2tzLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnNlcmllcyA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgaWYgKHRhc2tzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgYXN5bmMubWFwU2VyaWVzKHRhc2tzLCBmdW5jdGlvbiAoZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIGVyciwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXN1bHRzID0ge307XG4gICAgICAgICAgICBhc3luYy5lYWNoU2VyaWVzKF9rZXlzKHRhc2tzKSwgZnVuY3Rpb24gKGssIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGFza3Nba10oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzW2tdID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgICAgICAgdmFyIG1ha2VDYWxsYmFjayA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIGZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3NbaW5kZXhdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmbi5uZXh0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm4ubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGluZGV4IDwgdGFza3MubGVuZ3RoIC0gMSkgPyBtYWtlQ2FsbGJhY2soaW5kZXggKyAxKTogbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBtYWtlQ2FsbGJhY2soMCk7XG4gICAgfTtcblxuICAgIGFzeW5jLmFwcGx5ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShcbiAgICAgICAgICAgICAgICBudWxsLCBhcmdzLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIF9jb25jYXQgPSBmdW5jdGlvbiAoZWFjaGZuLCBhcnIsIGZuLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgY2IpIHtcbiAgICAgICAgICAgIGZuKHgsIGZ1bmN0aW9uIChlcnIsIHkpIHtcbiAgICAgICAgICAgICAgICByID0gci5jb25jYXQoeSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFzeW5jLmNvbmNhdCA9IGRvUGFyYWxsZWwoX2NvbmNhdCk7XG4gICAgYXN5bmMuY29uY2F0U2VyaWVzID0gZG9TZXJpZXMoX2NvbmNhdCk7XG5cbiAgICBhc3luYy53aGlsc3QgPSBmdW5jdGlvbiAodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0ZXN0KCkpIHtcbiAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYy53aGlsc3QodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy53aGlsc3QodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuZG9XaGlsc3QgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgaXRlcmF0b3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRlc3QoKSkge1xuICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jLmRvV2hpbHN0KGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMuZG9XaGlsc3QoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBhc3luYy51bnRpbCA9IGZ1bmN0aW9uICh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0ZXN0KCkpIHtcbiAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYy51bnRpbCh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLnVudGlsKHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLmRvVW50aWwgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgaXRlcmF0b3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0ZXN0KCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYy5kb1VudGlsKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMuZG9VbnRpbChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGFzeW5jLnF1ZXVlID0gZnVuY3Rpb24gKHdvcmtlciwgY29uY3VycmVuY3kpIHtcbiAgICAgICAgaWYgKGNvbmN1cnJlbmN5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbmN1cnJlbmN5ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfaW5zZXJ0KHEsIGRhdGEsIHBvcywgY2FsbGJhY2spIHtcbiAgICAgICAgICBpZihkYXRhLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xuICAgICAgICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfZWFjaChkYXRhLCBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgZGF0YTogdGFzayxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IG51bGxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgICAgICAgcS50YXNrcy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHEudGFza3MucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChxLnNhdHVyYXRlZCAmJiBxLnRhc2tzLmxlbmd0aCA9PT0gY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgICAgICAgIHEuc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2socS5wcm9jZXNzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3b3JrZXJzID0gMDtcbiAgICAgICAgdmFyIHEgPSB7XG4gICAgICAgICAgICB0YXNrczogW10sXG4gICAgICAgICAgICBjb25jdXJyZW5jeTogY29uY3VycmVuY3ksXG4gICAgICAgICAgICBzYXR1cmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICBlbXB0eTogbnVsbCxcbiAgICAgICAgICAgIGRyYWluOiBudWxsLFxuICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIF9pbnNlcnQocSwgZGF0YSwgZmFsc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bnNoaWZ0OiBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgX2luc2VydChxLCBkYXRhLCB0cnVlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JrZXJzIDwgcS5jb25jdXJyZW5jeSAmJiBxLnRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHEudGFza3Muc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHEuZW1wdHkgJiYgcS50YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHEuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3b3JrZXJzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXJzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkodGFzaywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxLmRyYWluICYmIHEudGFza3MubGVuZ3RoICsgd29ya2VycyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHEucHJvY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2IgPSBvbmx5X29uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNiQXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuYXBwbHkobnVsbCwgY2JBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyKHRhc2suZGF0YSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxLnRhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBydW5uaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlcnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBxO1xuICAgIH07XG5cbiAgICBhc3luYy5jYXJnbyA9IGZ1bmN0aW9uICh3b3JrZXIsIHBheWxvYWQpIHtcbiAgICAgICAgdmFyIHdvcmtpbmcgICAgID0gZmFsc2UsXG4gICAgICAgICAgICB0YXNrcyAgICAgICA9IFtdO1xuXG4gICAgICAgIHZhciBjYXJnbyA9IHtcbiAgICAgICAgICAgIHRhc2tzOiB0YXNrcyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgICAgICBzYXR1cmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICBlbXB0eTogbnVsbCxcbiAgICAgICAgICAgIGRyYWluOiBudWxsLFxuICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2VhY2goZGF0YSwgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZ28uc2F0dXJhdGVkICYmIHRhc2tzLmxlbmd0aCA9PT0gcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZ28uc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhjYXJnby5wcm9jZXNzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JraW5nKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZihjYXJnby5kcmFpbikgY2FyZ28uZHJhaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciB0cyA9IHR5cGVvZiBwYXlsb2FkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGFza3Muc3BsaWNlKDAsIHBheWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0YXNrcy5zcGxpY2UoMCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZHMgPSBfbWFwKHRzLCBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5kYXRhO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoY2FyZ28uZW1wdHkpIGNhcmdvLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgd29ya2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgd29ya2VyKGRzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgICAgICAgX2VhY2godHMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFza3MubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJ1bm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNhcmdvO1xuICAgIH07XG5cbiAgICB2YXIgX2NvbnNvbGVfZm4gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChbZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnNvbGVbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lYWNoKGFyZ3MsIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZVtuYW1lXSh4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGFzeW5jLmxvZyA9IF9jb25zb2xlX2ZuKCdsb2cnKTtcbiAgICBhc3luYy5kaXIgPSBfY29uc29sZV9mbignZGlyJyk7XG4gICAgLyphc3luYy5pbmZvID0gX2NvbnNvbGVfZm4oJ2luZm8nKTtcbiAgICBhc3luYy53YXJuID0gX2NvbnNvbGVfZm4oJ3dhcm4nKTtcbiAgICBhc3luYy5lcnJvciA9IF9jb25zb2xlX2ZuKCdlcnJvcicpOyovXG5cbiAgICBhc3luYy5tZW1vaXplID0gZnVuY3Rpb24gKGZuLCBoYXNoZXIpIHtcbiAgICAgICAgdmFyIG1lbW8gPSB7fTtcbiAgICAgICAgdmFyIHF1ZXVlcyA9IHt9O1xuICAgICAgICBoYXNoZXIgPSBoYXNoZXIgfHwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgdmFyIGtleSA9IGhhc2hlci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gbWVtbykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIG1lbW9ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgaW4gcXVldWVzKSB7XG4gICAgICAgICAgICAgICAgcXVldWVzW2tleV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWV1ZXNba2V5XSA9IFtjYWxsYmFja107XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoW2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVtb1trZXldID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcSA9IHF1ZXVlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcXVldWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBxW2ldLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBtZW1vaXplZC5tZW1vID0gbWVtbztcbiAgICAgICAgbWVtb2l6ZWQudW5tZW1vaXplZCA9IGZuO1xuICAgICAgICByZXR1cm4gbWVtb2l6ZWQ7XG4gICAgfTtcblxuICAgIGFzeW5jLnVubWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChmbi51bm1lbW9pemVkIHx8IGZuKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgYXN5bmMudGltZXMgPSBmdW5jdGlvbiAoY291bnQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgY291bnRlciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvdW50ZXIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXN5bmMubWFwKGNvdW50ZXIsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnRpbWVzU2VyaWVzID0gZnVuY3Rpb24gKGNvdW50LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb3VudGVyLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzeW5jLm1hcFNlcmllcyhjb3VudGVyLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5jb21wb3NlID0gZnVuY3Rpb24gKC8qIGZ1bmN0aW9ucy4uLiAqLykge1xuICAgICAgICB2YXIgZm5zID0gQXJyYXkucHJvdG90eXBlLnJldmVyc2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIGFzeW5jLnJlZHVjZShmbnMsIGFyZ3MsIGZ1bmN0aW9uIChuZXdhcmdzLCBmbiwgY2IpIHtcbiAgICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBuZXdhcmdzLmNvbmNhdChbZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjYihlcnIsIG5leHRhcmdzKTtcbiAgICAgICAgICAgICAgICB9XSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoYXQsIFtlcnJdLmNvbmNhdChyZXN1bHRzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgYXN5bmMuYXBwbHlFYWNoID0gZnVuY3Rpb24gKGZucyAvKmFyZ3MuLi4qLykge1xuICAgICAgICB2YXIgZ28gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jLmVhY2goZm5zLCBmdW5jdGlvbiAoZm4sIGNiKSB7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncy5jb25jYXQoW2NiXSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICByZXR1cm4gZ28uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ287XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQU1EIC8gUmVxdWlyZUpTXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXN5bmM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBOb2RlLmpzXG4gICAgZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBhc3luYztcbiAgICB9XG4gICAgLy8gaW5jbHVkZWQgZGlyZWN0bHkgdmlhIDxzY3JpcHQ+IHRhZ1xuICAgIGVsc2Uge1xuICAgICAgICByb290LmFzeW5jID0gYXN5bmM7XG4gICAgfVxuXG59KCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7IiwiXHJcbmNvbnN0IGNyYXdsZXIgPSByZXF1aXJlKCcuL2luY2x1ZGUvY3Jhd2xlcicpO1xyXG5jb25zdCBjdyA9IHJlcXVpcmUoJy4vaW5jbHVkZS9jb21tb24td29yZHMuanMnKTtcclxuXHJcbmNvbnN0IE1BWF9XT1JEUyA9IDEwMDAwMDAwO1xyXG5jb25zdCBDQUNIRV9DTFVTVEVSUyA9IGZhbHNlO1xyXG5jb25zdCBNQVhfTk9ERV9GUkVRVUVOQ1kgPSAxMDAwO1xyXG5jb25zdCBUUkFWRVJTRV9TSU1JTEFSID0gdHJ1ZTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihldmVudCwgY29udGV4dCkge1xyXG4gIGNyYXdsZXIuaW5pdENyYXdsZXIoXHJcbiAgICBNQVhfV09SRFMsXHJcbiAgICBDQUNIRV9DTFVTVEVSUyxcclxuICAgIE1BWF9OT0RFX0ZSRVFVRU5DWSxcclxuICAgIFRSQVZFUlNFX1NJTUlMQVJcclxuICAgICk7XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjcmF3bGluZyBpbiB0aGUgYmFja2dyb3VuZCBzdGFydGluZyBmcm9tIHRvcCAzMDAwIEVuZ2xpc2ggd29yZHMuLi5cIik7XHJcblxyXG4gICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICBmb3IgKGxldCBjb21tb25Xb3JkIGluIGN3LlRoZU1vc3RDb21tb24zMDAwKSB7XHJcbiAgICAgIHByb21pc2VzLnB1c2goY3Jhd2xlci5sb2FkQ2x1c3Rlcihjb21tb25Xb3JkLCBmYWxzZSkpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1c0NvZGU6IDIwMCxcclxuICAgICAgYm9keToganNvbixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIHJldHVybiB7IHN0YXR1c0NvZGU6IDUwMCwgYm9keTogZXJyLnRvU3RyaW5nKCkgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9