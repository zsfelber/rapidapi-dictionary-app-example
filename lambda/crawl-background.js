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
let cacheInitializerCommon;
let cacheIsInitialized = false;
let parallelCacheInitRequests = 0;
let totalWordsLastDay = 0;
let cacheInitIsError = false;

async function remoteCallInit() {
  if (!cacheIsInitialized) {
    parallelCacheInitRequests++;

    if (!cacheInitializerCommon) {
      let curtime = new Date(); // 86400000 milliseconds (24 hours)

      cacheInitializerCommon = finder.findFiles("cache/words", curtime - 86400000);
      totalWordsLastDay = await cacheInitializerCommon;
      cacheIsInitialized = true;
      console.log("remoteCallInit  totalWordsLastDay : " + totalWordsLastDay + " errors:" + finder.errors + " parallelCacheInitRequests:" + parallelCacheInitRequests);
    } else {
      await cacheInitializerCommon;
    }
  }

  if (totalWordsLastDay >= API_DAILY_LIMIT) {
    if (!cacheInitIsError) {
      console.error("Could not proxy more request to API file/single  totalWordsLastDay >= API_DAILY_LIMIT :  " + totalWordsLastDay + " >= " + API_DAILY_LIMIT + "\n");
    }

    cacheInitIsError = true;
    return false;
  } else {
    totalWordsLastDay++;
    return true;
  }
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
    word: data.word,
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

  let success = await remoteCallInit();

  if (!success) {
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
      word,
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
async function loadCommonWord(result, word, noWords) {
  const entry = await loadSingleWord(word, true);

  if (entry) {
    result.noWords++;
    console.log(result.noWords + "/" + noWords);

    for (let key in entry.results) {
      const val = entry.results[key];
      const synonyms = val.synonyms ? [word].concat(val.synonyms) : [word];
      synonyms.sort();
      const similar = val.similarTo ? [].concat(val.similarTo) : [];
      similar.sort();
      const definition = {
        partOfSpeech: val.partOfSpeech,
        definition: val.definition,
        synonyms,
        similar
      };
      result.noDefinitions++;
      result.results.push(definition);
    }
  }
}
async function loadCommonWords(asobject) {
  const cw = __webpack_require__(17); // create new array to push data to


  let results = [];
  let result = {
    noWords: 0,
    noDefinitions: 0,
    results
  };
  let promises = [];
  let noWords = Object.keys(cw.TheMostCommon3000).length;

  for (let commonWord in cw.TheMostCommon3000) {
    promises.push(loadCommonWord(result, commonWord, noWords));
  }

  await Promise.all(promises);
  let cjson;

  if (asobject) {
    return result;
  } else {
    if (!cjson) {
      cjson = JSON.stringify(result);
    }

    return cjson;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZm9sbG93LXJlZGlyZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9pbmNsdWRlL2NvbW1vbi13b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9pbmNsdWRlL2NyYXdsZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9odHRwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmVhbVwiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9ub2RlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9zXCIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYXMtZmxhZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6bGliXCIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL2luY2x1ZGUvZmluZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbm9kZS1maW5kLWZpbGVzL2Rpc3Qvbm9kZS1maW5kLWZpbGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXN5bmMvbGliL2FzeW5jLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vLi9jcmF3bC1iYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIlRoZU1vc3RDb21tb24zMDAwIiwiYSIsImFiYW5kb24iLCJhYmlsaXR5IiwiYWJsZSIsImFib3J0aW9uIiwiYWJvdXQiLCJhYm92ZSIsImFicm9hZCIsImFic2VuY2UiLCJhYnNvbHV0ZSIsImFic29sdXRlbHkiLCJhYnNvcmIiLCJhYnVzZSIsImFjYWRlbWljIiwiYWNjZXB0IiwiYWNjZXNzIiwiYWNjaWRlbnQiLCJhY2NvbXBhbnkiLCJhY2NvbXBsaXNoIiwiYWNjb3JkaW5nIiwiYWNjb3VudCIsImFjY3VyYXRlIiwiYWNjdXNlIiwiYWNoaWV2ZSIsImFjaGlldmVtZW50IiwiYWNpZCIsImFja25vd2xlZGdlIiwiYWNxdWlyZSIsImFjcm9zcyIsImFjdCIsImFjdGlvbiIsImFjdGl2ZSIsImFjdGl2aXN0IiwiYWN0aXZpdHkiLCJhY3RvciIsImFjdHJlc3MiLCJhY3R1YWwiLCJhY3R1YWxseSIsImFkIiwiYWRhcHQiLCJhZGQiLCJhZGRpdGlvbiIsImFkZGl0aW9uYWwiLCJhZGRyZXNzIiwiYWRlcXVhdGUiLCJhZGp1c3QiLCJhZGp1c3RtZW50IiwiYWRtaW5pc3RyYXRpb24iLCJhZG1pbmlzdHJhdG9yIiwiYWRtaXJlIiwiYWRtaXNzaW9uIiwiYWRtaXQiLCJhZG9sZXNjZW50IiwiYWRvcHQiLCJhZHVsdCIsImFkdmFuY2UiLCJhZHZhbmNlZCIsImFkdmFudGFnZSIsImFkdmVudHVyZSIsImFkdmVydGlzaW5nIiwiYWR2aWNlIiwiYWR2aXNlIiwiYWR2aXNlciIsImFkdm9jYXRlIiwiYWZmYWlyIiwiYWZmZWN0IiwiYWZmb3JkIiwiYWZyYWlkIiwiQWZyaWNhbiIsImFmdGVyIiwiYWZ0ZXJub29uIiwiYWdhaW4iLCJhZ2FpbnN0IiwiYWdlIiwiYWdlbmN5IiwiYWdlbmRhIiwiYWdlbnQiLCJhZ2dyZXNzaXZlIiwiYWdvIiwiYWdyZWUiLCJhZ3JlZW1lbnQiLCJhZ3JpY3VsdHVyYWwiLCJhaCIsImFoZWFkIiwiYWlkIiwiYWlkZSIsIkFJRFMiLCJhaW0iLCJhaXIiLCJhaXJjcmFmdCIsImFpcmxpbmUiLCJhaXJwb3J0IiwiYWxidW0iLCJhbGNvaG9sIiwiYWxpdmUiLCJhbGwiLCJhbGxpYW5jZSIsImFsbG93IiwiYWxseSIsImFsbW9zdCIsImFsb25lIiwiYWxvbmciLCJhbHJlYWR5IiwiYWxzbyIsImFsdGVyIiwiYWx0ZXJuYXRpdmUiLCJhbHRob3VnaCIsImFsd2F5cyIsIkFNIiwiYW1hemluZyIsIkFtZXJpY2FuIiwiYW1vbmciLCJhbW91bnQiLCJhbmFseXNpcyIsImFuYWx5c3QiLCJhbmFseXplIiwiYW5jaWVudCIsImFuZCIsImFuZ2VyIiwiYW5nbGUiLCJhbmdyeSIsImFuaW1hbCIsImFubml2ZXJzYXJ5IiwiYW5ub3VuY2UiLCJhbm51YWwiLCJhbm90aGVyIiwiYW5zd2VyIiwiYW50aWNpcGF0ZSIsImFueGlldHkiLCJhbnkiLCJhbnlib2R5IiwiYW55bW9yZSIsImFueW9uZSIsImFueXRoaW5nIiwiYW55d2F5IiwiYW55d2hlcmUiLCJhcGFydCIsImFwYXJ0bWVudCIsImFwcGFyZW50IiwiYXBwYXJlbnRseSIsImFwcGVhbCIsImFwcGVhciIsImFwcGVhcmFuY2UiLCJhcHBsZSIsImFwcGxpY2F0aW9uIiwiYXBwbHkiLCJhcHBvaW50IiwiYXBwb2ludG1lbnQiLCJhcHByZWNpYXRlIiwiYXBwcm9hY2giLCJhcHByb3ByaWF0ZSIsImFwcHJvdmFsIiwiYXBwcm92ZSIsImFwcHJveGltYXRlbHkiLCJBcmFiIiwiYXJjaGl0ZWN0IiwiYXJlYSIsImFyZ3VlIiwiYXJndW1lbnQiLCJhcmlzZSIsImFybSIsImFybWVkIiwiYXJteSIsImFyb3VuZCIsImFycmFuZ2UiLCJhcnJhbmdlbWVudCIsImFycmVzdCIsImFycml2YWwiLCJhcnJpdmUiLCJhcnQiLCJhcnRpY2xlIiwiYXJ0aXN0IiwiYXJ0aXN0aWMiLCJhcyIsIkFzaWFuIiwiYXNpZGUiLCJhc2siLCJhc2xlZXAiLCJhc3BlY3QiLCJhc3NhdWx0IiwiYXNzZXJ0IiwiYXNzZXNzIiwiYXNzZXNzbWVudCIsImFzc2V0IiwiYXNzaWduIiwiYXNzaWdubWVudCIsImFzc2lzdCIsImFzc2lzdGFuY2UiLCJhc3Npc3RhbnQiLCJhc3NvY2lhdGUiLCJhc3NvY2lhdGlvbiIsImFzc3VtZSIsImFzc3VtcHRpb24iLCJhc3N1cmUiLCJhdCIsImF0aGxldGUiLCJhdGhsZXRpYyIsImF0bW9zcGhlcmUiLCJhdHRhY2giLCJhdHRhY2siLCJhdHRlbXB0IiwiYXR0ZW5kIiwiYXR0ZW50aW9uIiwiYXR0aXR1ZGUiLCJhdHRvcm5leSIsImF0dHJhY3QiLCJhdHRyYWN0aXZlIiwiYXR0cmlidXRlIiwiYXVkaWVuY2UiLCJhdXRob3IiLCJhdXRob3JpdHkiLCJhdXRvIiwiYXZhaWxhYmxlIiwiYXZlcmFnZSIsImF2b2lkIiwiYXdhcmQiLCJhd2FyZSIsImF3YXJlbmVzcyIsImF3YXkiLCJhd2Z1bCIsImJhYnkiLCJiYWNrIiwiYmFja2dyb3VuZCIsImJhZCIsImJhZGx5IiwiYmFnIiwiYmFrZSIsImJhbGFuY2UiLCJiYWxsIiwiYmFuIiwiYmFuZCIsImJhbmsiLCJiYXIiLCJiYXJlbHkiLCJiYXJyZWwiLCJiYXJyaWVyIiwiYmFzZSIsImJhc2ViYWxsIiwiYmFzaWMiLCJiYXNpY2FsbHkiLCJiYXNpcyIsImJhc2tldCIsImJhc2tldGJhbGwiLCJiYXRocm9vbSIsImJhdHRlcnkiLCJiYXR0bGUiLCJiZSIsImJlYWNoIiwiYmVhbiIsImJlYXIiLCJiZWF0IiwiYmVhdXRpZnVsIiwiYmVhdXR5IiwiYmVjYXVzZSIsImJlY29tZSIsImJlZCIsImJlZHJvb20iLCJiZWVyIiwiYmVmb3JlIiwiYmVnaW4iLCJiZWdpbm5pbmciLCJiZWhhdmlvciIsImJlaGluZCIsImJlaW5nIiwiYmVsaWVmIiwiYmVsaWV2ZSIsImJlbGwiLCJiZWxvbmciLCJiZWxvdyIsImJlbHQiLCJiZW5jaCIsImJlbmQiLCJiZW5lYXRoIiwiYmVuZWZpdCIsImJlc2lkZSIsImJlc2lkZXMiLCJiZXN0IiwiYmV0IiwiYmV0dGVyIiwiYmV0d2VlbiIsImJleW9uZCIsIkJpYmxlIiwiYmlnIiwiYmlrZSIsImJpbGwiLCJiaWxsaW9uIiwiYmluZCIsImJpb2xvZ2ljYWwiLCJiaXJkIiwiYmlydGgiLCJiaXJ0aGRheSIsImJpdCIsImJpdGUiLCJibGFjayIsImJsYWRlIiwiYmxhbWUiLCJibGFua2V0IiwiYmxpbmQiLCJibG9jayIsImJsb29kIiwiYmxvdyIsImJsdWUiLCJib2FyZCIsImJvYXQiLCJib2R5IiwiYm9tYiIsImJvbWJpbmciLCJib25kIiwiYm9uZSIsImJvb2siLCJib29tIiwiYm9vdCIsImJvcmRlciIsImJvcm4iLCJib3Jyb3ciLCJib3NzIiwiYm90aCIsImJvdGhlciIsImJvdHRsZSIsImJvdHRvbSIsImJvdW5kYXJ5IiwiYm93bCIsImJveCIsImJveSIsImJveWZyaWVuZCIsImJyYWluIiwiYnJhbmNoIiwiYnJhbmQiLCJicmVhZCIsImJyZWFrIiwiYnJlYWtmYXN0IiwiYnJlYXN0IiwiYnJlYXRoIiwiYnJlYXRoZSIsImJyaWNrIiwiYnJpZGdlIiwiYnJpZWYiLCJicmllZmx5IiwiYnJpZ2h0IiwiYnJpbGxpYW50IiwiYnJpbmciLCJCcml0aXNoIiwiYnJvYWQiLCJicm9rZW4iLCJicm90aGVyIiwiYnJvd24iLCJicnVzaCIsImJ1Y2siLCJidWRnZXQiLCJidWlsZCIsImJ1aWxkaW5nIiwiYnVsbGV0IiwiYnVuY2giLCJidXJkZW4iLCJidXJuIiwiYnVyeSIsImJ1cyIsImJ1c2luZXNzIiwiYnVzeSIsImJ1dCIsImJ1dHRlciIsImJ1dHRvbiIsImJ1eSIsImJ1eWVyIiwiYnkiLCJjYWJpbiIsImNhYmluZXQiLCJjYWJsZSIsImNha2UiLCJjYWxjdWxhdGUiLCJjYWxsIiwiY2FtZXJhIiwiY2FtcCIsImNhbXBhaWduIiwiY2FtcHVzIiwiY2FuIiwiQ2FuYWRpYW4iLCJjYW5jZXIiLCJjYW5kaWRhdGUiLCJjYXAiLCJjYXBhYmlsaXR5IiwiY2FwYWJsZSIsImNhcGFjaXR5IiwiY2FwaXRhbCIsImNhcHRhaW4iLCJjYXB0dXJlIiwiY2FyIiwiY2FyYm9uIiwiY2FyZCIsImNhcmUiLCJjYXJlZXIiLCJjYXJlZnVsIiwiY2FyZWZ1bGx5IiwiY2FycmllciIsImNhcnJ5IiwiY2FzZSIsImNhc2giLCJjYXN0IiwiY2F0IiwiY2F0Y2giLCJjYXRlZ29yeSIsIkNhdGhvbGljIiwiY2F1c2UiLCJjZWlsaW5nIiwiY2VsZWJyYXRlIiwiY2VsZWJyYXRpb24iLCJjZWxlYnJpdHkiLCJjZWxsIiwiY2VudGVyIiwiY2VudHJhbCIsImNlbnR1cnkiLCJDRU8iLCJjZXJlbW9ueSIsImNlcnRhaW4iLCJjZXJ0YWlubHkiLCJjaGFpbiIsImNoYWlyIiwiY2hhaXJtYW4iLCJjaGFsbGVuZ2UiLCJjaGFtYmVyIiwiY2hhbXBpb24iLCJjaGFtcGlvbnNoaXAiLCJjaGFuY2UiLCJjaGFuZ2UiLCJjaGFuZ2luZyIsImNoYW5uZWwiLCJjaGFwdGVyIiwiY2hhcmFjdGVyIiwiY2hhcmFjdGVyaXN0aWMiLCJjaGFyYWN0ZXJpemUiLCJjaGFyZ2UiLCJjaGFyaXR5IiwiY2hhcnQiLCJjaGFzZSIsImNoZWFwIiwiY2hlY2siLCJjaGVlayIsImNoZWVzZSIsImNoZWYiLCJjaGVtaWNhbCIsImNoZXN0IiwiY2hpY2tlbiIsImNoaWVmIiwiY2hpbGQiLCJjaGlsZGhvb2QiLCJDaGluZXNlIiwiY2hpcCIsImNob2NvbGF0ZSIsImNob2ljZSIsImNob2xlc3Rlcm9sIiwiY2hvb3NlIiwiQ2hyaXN0aWFuIiwiQ2hyaXN0bWFzIiwiY2h1cmNoIiwiY2lnYXJldHRlIiwiY2lyY2xlIiwiY2lyY3Vtc3RhbmNlIiwiY2l0ZSIsImNpdGl6ZW4iLCJjaXR5IiwiY2l2aWwiLCJjaXZpbGlhbiIsImNsYWltIiwiY2xhc3MiLCJjbGFzc2ljIiwiY2xhc3Nyb29tIiwiY2xlYW4iLCJjbGVhciIsImNsZWFybHkiLCJjbGllbnQiLCJjbGltYXRlIiwiY2xpbWIiLCJjbGluaWMiLCJjbGluaWNhbCIsImNsb2NrIiwiY2xvc2UiLCJjbG9zZWx5IiwiY2xvc2VyIiwiY2xvdGhlcyIsImNsb3RoaW5nIiwiY2xvdWQiLCJjbHViIiwiY2x1ZSIsImNsdXN0ZXIiLCJjb2FjaCIsImNvYWwiLCJjb2FsaXRpb24iLCJjb2FzdCIsImNvYXQiLCJjb2RlIiwiY29mZmVlIiwiY29nbml0aXZlIiwiY29sZCIsImNvbGxhcHNlIiwiY29sbGVhZ3VlIiwiY29sbGVjdCIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aXZlIiwiY29sbGVnZSIsImNvbG9uaWFsIiwiY29sb3IiLCJjb2x1bW4iLCJjb21iaW5hdGlvbiIsImNvbWJpbmUiLCJjb21lIiwiY29tZWR5IiwiY29tZm9ydCIsImNvbWZvcnRhYmxlIiwiY29tbWFuZCIsImNvbW1hbmRlciIsImNvbW1lbnQiLCJjb21tZXJjaWFsIiwiY29tbWlzc2lvbiIsImNvbW1pdCIsImNvbW1pdG1lbnQiLCJjb21taXR0ZWUiLCJjb21tb24iLCJjb21tdW5pY2F0ZSIsImNvbW11bmljYXRpb24iLCJjb21tdW5pdHkiLCJjb21wYW55IiwiY29tcGFyZSIsImNvbXBhcmlzb24iLCJjb21wZXRlIiwiY29tcGV0aXRpb24iLCJjb21wZXRpdGl2ZSIsImNvbXBldGl0b3IiLCJjb21wbGFpbiIsImNvbXBsYWludCIsImNvbXBsZXRlIiwiY29tcGxldGVseSIsImNvbXBsZXgiLCJjb21wbGljYXRlZCIsImNvbXBvbmVudCIsImNvbXBvc2UiLCJjb21wb3NpdGlvbiIsImNvbXByZWhlbnNpdmUiLCJjb21wdXRlciIsImNvbmNlbnRyYXRlIiwiY29uY2VudHJhdGlvbiIsImNvbmNlcHQiLCJjb25jZXJuIiwiY29uY2VybmVkIiwiY29uY2VydCIsImNvbmNsdWRlIiwiY29uY2x1c2lvbiIsImNvbmNyZXRlIiwiY29uZGl0aW9uIiwiY29uZHVjdCIsImNvbmZlcmVuY2UiLCJjb25maWRlbmNlIiwiY29uZmlkZW50IiwiY29uZmlybSIsImNvbmZsaWN0IiwiY29uZnJvbnQiLCJjb25mdXNpb24iLCJDb25ncmVzcyIsImNvbmdyZXNzaW9uYWwiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsImNvbnNjaW91c25lc3MiLCJjb25zZW5zdXMiLCJjb25zZXF1ZW5jZSIsImNvbnNlcnZhdGl2ZSIsImNvbnNpZGVyIiwiY29uc2lkZXJhYmxlIiwiY29uc2lkZXJhdGlvbiIsImNvbnNpc3QiLCJjb25zaXN0ZW50IiwiY29uc3RhbnQiLCJjb25zdGFudGx5IiwiY29uc3RpdHV0ZSIsImNvbnN0aXR1dGlvbmFsIiwiY29uc3RydWN0IiwiY29uc3RydWN0aW9uIiwiY29uc3VsdGFudCIsImNvbnN1bWUiLCJjb25zdW1lciIsImNvbnN1bXB0aW9uIiwiY29udGFjdCIsImNvbnRhaW4iLCJjb250YWluZXIiLCJjb250ZW1wb3JhcnkiLCJjb250ZW50IiwiY29udGVzdCIsImNvbnRleHQiLCJjb250aW51ZSIsImNvbnRpbnVlZCIsImNvbnRyYWN0IiwiY29udHJhc3QiLCJjb250cmlidXRlIiwiY29udHJpYnV0aW9uIiwiY29udHJvbCIsImNvbnRyb3ZlcnNpYWwiLCJjb250cm92ZXJzeSIsImNvbnZlbnRpb24iLCJjb252ZW50aW9uYWwiLCJjb252ZXJzYXRpb24iLCJjb252ZXJ0IiwiY29udmljdGlvbiIsImNvbnZpbmNlIiwiY29vayIsImNvb2tpZSIsImNvb2tpbmciLCJjb29sIiwiY29vcGVyYXRpb24iLCJjb3AiLCJjb3BlIiwiY29weSIsImNvcmUiLCJjb3JuIiwiY29ybmVyIiwiY29ycG9yYXRlIiwiY29ycG9yYXRpb24iLCJjb3JyZWN0IiwiY29ycmVzcG9uZGVudCIsImNvc3QiLCJjb3R0b24iLCJjb3VjaCIsImNvdWxkIiwiY291bmNpbCIsImNvdW5zZWxvciIsImNvdW50IiwiY291bnRlciIsImNvdW50cnkiLCJjb3VudHkiLCJjb3VwbGUiLCJjb3VyYWdlIiwiY291cnNlIiwiY291cnQiLCJjb3VzaW4iLCJjb3ZlciIsImNvdmVyYWdlIiwiY293IiwiY3JhY2siLCJjcmFmdCIsImNyYXNoIiwiY3JhenkiLCJjcmVhbSIsImNyZWF0ZSIsImNyZWF0aW9uIiwiY3JlYXRpdmUiLCJjcmVhdHVyZSIsImNyZWRpdCIsImNyZXciLCJjcmltZSIsImNyaW1pbmFsIiwiY3Jpc2lzIiwiY3JpdGVyaWEiLCJjcml0aWMiLCJjcml0aWNhbCIsImNyaXRpY2lzbSIsImNyaXRpY2l6ZSIsImNyb3AiLCJjcm9zcyIsImNyb3dkIiwiY3J1Y2lhbCIsImNyeSIsImN1bHR1cmFsIiwiY3VsdHVyZSIsImN1cCIsImN1cmlvdXMiLCJjdXJyZW50IiwiY3VycmVudGx5IiwiY3VycmljdWx1bSIsImN1c3RvbSIsImN1c3RvbWVyIiwiY3V0IiwiY3ljbGUiLCJkYWQiLCJkYWlseSIsImRhbWFnZSIsImRhbmNlIiwiZGFuZ2VyIiwiZGFuZ2Vyb3VzIiwiZGFyZSIsImRhcmsiLCJkYXJrbmVzcyIsImRhdGEiLCJkYXRlIiwiZGF1Z2h0ZXIiLCJkYXkiLCJkZWFkIiwiZGVhbCIsImRlYWxlciIsImRlYXIiLCJkZWF0aCIsImRlYmF0ZSIsImRlYnQiLCJkZWNhZGUiLCJkZWNpZGUiLCJkZWNpc2lvbiIsImRlY2siLCJkZWNsYXJlIiwiZGVjbGluZSIsImRlY3JlYXNlIiwiZGVlcCIsImRlZXBseSIsImRlZXIiLCJkZWZlYXQiLCJkZWZlbmQiLCJkZWZlbmRhbnQiLCJkZWZlbnNlIiwiZGVmZW5zaXZlIiwiZGVmaWNpdCIsImRlZmluZSIsImRlZmluaXRlbHkiLCJkZWZpbml0aW9uIiwiZGVncmVlIiwiZGVsYXkiLCJkZWxpdmVyIiwiZGVsaXZlcnkiLCJkZW1hbmQiLCJkZW1vY3JhY3kiLCJEZW1vY3JhdCIsImRlbW9jcmF0aWMiLCJkZW1vbnN0cmF0ZSIsImRlbW9uc3RyYXRpb24iLCJkZW55IiwiZGVwYXJ0bWVudCIsImRlcGVuZCIsImRlcGVuZGVudCIsImRlcGVuZGluZyIsImRlcGljdCIsImRlcHJlc3Npb24iLCJkZXB0aCIsImRlcHV0eSIsImRlcml2ZSIsImRlc2NyaWJlIiwiZGVzY3JpcHRpb24iLCJkZXNlcnQiLCJkZXNlcnZlIiwiZGVzaWduIiwiZGVzaWduZXIiLCJkZXNpcmUiLCJkZXNrIiwiZGVzcGVyYXRlIiwiZGVzcGl0ZSIsImRlc3Ryb3kiLCJkZXN0cnVjdGlvbiIsImRldGFpbCIsImRldGFpbGVkIiwiZGV0ZWN0IiwiZGV0ZXJtaW5lIiwiZGV2ZWxvcCIsImRldmVsb3BpbmciLCJkZXZlbG9wbWVudCIsImRldmljZSIsImRldm90ZSIsImRpYWxvZ3VlIiwiZGllIiwiZGlldCIsImRpZmZlciIsImRpZmZlcmVuY2UiLCJkaWZmZXJlbnQiLCJkaWZmZXJlbnRseSIsImRpZmZpY3VsdCIsImRpZmZpY3VsdHkiLCJkaWciLCJkaWdpdGFsIiwiZGltZW5zaW9uIiwiZGluaW5nIiwiZGlubmVyIiwiZGlyZWN0IiwiZGlyZWN0aW9uIiwiZGlyZWN0bHkiLCJkaXJlY3RvciIsImRpcnQiLCJkaXJ0eSIsImRpc2FiaWxpdHkiLCJkaXNhZ3JlZSIsImRpc2FwcGVhciIsImRpc2FzdGVyIiwiZGlzY2lwbGluZSIsImRpc2NvdXJzZSIsImRpc2NvdmVyIiwiZGlzY292ZXJ5IiwiZGlzY3JpbWluYXRpb24iLCJkaXNjdXNzIiwiZGlzY3Vzc2lvbiIsImRpc2Vhc2UiLCJkaXNoIiwiZGlzbWlzcyIsImRpc29yZGVyIiwiZGlzcGxheSIsImRpc3B1dGUiLCJkaXN0YW5jZSIsImRpc3RhbnQiLCJkaXN0aW5jdCIsImRpc3RpbmN0aW9uIiwiZGlzdGluZ3Vpc2giLCJkaXN0cmlidXRlIiwiZGlzdHJpYnV0aW9uIiwiZGlzdHJpY3QiLCJkaXZlcnNlIiwiZGl2ZXJzaXR5IiwiZGl2aWRlIiwiZGl2aXNpb24iLCJkaXZvcmNlIiwiRE5BIiwiZG8iLCJkb2N0b3IiLCJkb2N1bWVudCIsImRvZyIsImRvbWVzdGljIiwiZG9taW5hbnQiLCJkb21pbmF0ZSIsImRvb3IiLCJkb3VibGUiLCJkb3VidCIsImRvd24iLCJkb3dudG93biIsImRvemVuIiwiZHJhZnQiLCJkcmFnIiwiZHJhbWEiLCJkcmFtYXRpYyIsImRyYW1hdGljYWxseSIsImRyYXciLCJkcmF3aW5nIiwiZHJlYW0iLCJkcmVzcyIsImRyaW5rIiwiZHJpdmUiLCJkcml2ZXIiLCJkcm9wIiwiZHJ1ZyIsImRyeSIsImR1ZSIsImR1cmluZyIsImR1c3QiLCJkdXR5IiwiZWFjaCIsImVhZ2VyIiwiZWFyIiwiZWFybHkiLCJlYXJuIiwiZWFybmluZ3MiLCJlYXJ0aCIsImVhc2UiLCJlYXNpbHkiLCJlYXN0IiwiZWFzdGVybiIsImVhc3kiLCJlYXQiLCJlY29ub21pYyIsImVjb25vbWljcyIsImVjb25vbWlzdCIsImVjb25vbXkiLCJlZGdlIiwiZWRpdGlvbiIsImVkaXRvciIsImVkdWNhdGUiLCJlZHVjYXRpb24iLCJlZHVjYXRpb25hbCIsImVkdWNhdG9yIiwiZWZmZWN0IiwiZWZmZWN0aXZlIiwiZWZmZWN0aXZlbHkiLCJlZmZpY2llbmN5IiwiZWZmaWNpZW50IiwiZWZmb3J0IiwiZWdnIiwiZWlnaHQiLCJlaXRoZXIiLCJlbGRlcmx5IiwiZWxlY3QiLCJlbGVjdGlvbiIsImVsZWN0cmljIiwiZWxlY3RyaWNpdHkiLCJlbGVjdHJvbmljIiwiZWxlbWVudCIsImVsZW1lbnRhcnkiLCJlbGltaW5hdGUiLCJlbGl0ZSIsImVsc2UiLCJlbHNld2hlcmUiLCJlbWJyYWNlIiwiZW1lcmdlIiwiZW1lcmdlbmN5IiwiZW1pc3Npb24iLCJlbW90aW9uIiwiZW1vdGlvbmFsIiwiZW1waGFzaXMiLCJlbXBoYXNpemUiLCJlbXBsb3kiLCJlbXBsb3llZSIsImVtcGxveWVyIiwiZW1wbG95bWVudCIsImVtcHR5IiwiZW5hYmxlIiwiZW5jb3VudGVyIiwiZW5jb3VyYWdlIiwiZW5kIiwiZW5lbXkiLCJlbmVyZ3kiLCJlbmZvcmNlbWVudCIsImVuZ2FnZSIsImVuZ2luZSIsImVuZ2luZWVyIiwiZW5naW5lZXJpbmciLCJFbmdsaXNoIiwiZW5oYW5jZSIsImVuam95IiwiZW5vcm1vdXMiLCJlbm91Z2giLCJlbnN1cmUiLCJlbnRlciIsImVudGVycHJpc2UiLCJlbnRlcnRhaW5tZW50IiwiZW50aXJlIiwiZW50aXJlbHkiLCJlbnRyYW5jZSIsImVudHJ5IiwiZW52aXJvbm1lbnQiLCJlbnZpcm9ubWVudGFsIiwiZXBpc29kZSIsImVxdWFsIiwiZXF1YWxseSIsImVxdWlwbWVudCIsImVyYSIsImVycm9yIiwiZXNjYXBlIiwiZXNwZWNpYWxseSIsImVzc2F5IiwiZXNzZW50aWFsIiwiZXNzZW50aWFsbHkiLCJlc3RhYmxpc2giLCJlc3RhYmxpc2htZW50IiwiZXN0YXRlIiwiZXN0aW1hdGUiLCJldGMiLCJldGhpY3MiLCJldGhuaWMiLCJFdXJvcGVhbiIsImV2YWx1YXRlIiwiZXZhbHVhdGlvbiIsImV2ZW4iLCJldmVuaW5nIiwiZXZlbnQiLCJldmVudHVhbGx5IiwiZXZlciIsImV2ZXJ5IiwiZXZlcnlib2R5IiwiZXZlcnlkYXkiLCJldmVyeW9uZSIsImV2ZXJ5dGhpbmciLCJldmVyeXdoZXJlIiwiZXZpZGVuY2UiLCJldm9sdXRpb24iLCJldm9sdmUiLCJleGFjdCIsImV4YWN0bHkiLCJleGFtaW5hdGlvbiIsImV4YW1pbmUiLCJleGFtcGxlIiwiZXhjZWVkIiwiZXhjZWxsZW50IiwiZXhjZXB0IiwiZXhjZXB0aW9uIiwiZXhjaGFuZ2UiLCJleGNpdGluZyIsImV4ZWN1dGl2ZSIsImV4ZXJjaXNlIiwiZXhoaWJpdCIsImV4aGliaXRpb24iLCJleGlzdCIsImV4aXN0ZW5jZSIsImV4aXN0aW5nIiwiZXhwYW5kIiwiZXhwYW5zaW9uIiwiZXhwZWN0IiwiZXhwZWN0YXRpb24iLCJleHBlbnNlIiwiZXhwZW5zaXZlIiwiZXhwZXJpZW5jZSIsImV4cGVyaW1lbnQiLCJleHBlcnQiLCJleHBsYWluIiwiZXhwbGFuYXRpb24iLCJleHBsb2RlIiwiZXhwbG9yZSIsImV4cGxvc2lvbiIsImV4cG9zZSIsImV4cG9zdXJlIiwiZXhwcmVzcyIsImV4cHJlc3Npb24iLCJleHRlbmQiLCJleHRlbnNpb24iLCJleHRlbnNpdmUiLCJleHRlbnQiLCJleHRlcm5hbCIsImV4dHJhIiwiZXh0cmFvcmRpbmFyeSIsImV4dHJlbWUiLCJleHRyZW1lbHkiLCJleWUiLCJmYWJyaWMiLCJmYWNlIiwiZmFjaWxpdHkiLCJmYWN0IiwiZmFjdG9yIiwiZmFjdG9yeSIsImZhY3VsdHkiLCJmYWRlIiwiZmFpbCIsImZhaWx1cmUiLCJmYWlyIiwiZmFpcmx5IiwiZmFpdGgiLCJmYWxsIiwiZmFsc2UiLCJmYW1pbGlhciIsImZhbWlseSIsImZhbW91cyIsImZhbiIsImZhbnRhc3kiLCJmYXIiLCJmYXJtIiwiZmFybWVyIiwiZmFzaGlvbiIsImZhc3QiLCJmYXQiLCJmYXRlIiwiZmF0aGVyIiwiZmF1bHQiLCJmYXZvciIsImZhdm9yaXRlIiwiZmVhciIsImZlYXR1cmUiLCJmZWRlcmFsIiwiZmVlIiwiZmVlZCIsImZlZWwiLCJmZWVsaW5nIiwiZmVsbG93IiwiZmVtYWxlIiwiZmVuY2UiLCJmZXciLCJmZXdlciIsImZpYmVyIiwiZmljdGlvbiIsImZpZWxkIiwiZmlmdGVlbiIsImZpZnRoIiwiZmlmdHkiLCJmaWdodCIsImZpZ2h0ZXIiLCJmaWdodGluZyIsImZpZ3VyZSIsImZpbGUiLCJmaWxsIiwiZmlsbSIsImZpbmFsIiwiZmluYWxseSIsImZpbmFuY2UiLCJmaW5hbmNpYWwiLCJmaW5kIiwiZmluZGluZyIsImZpbmUiLCJmaW5nZXIiLCJmaW5pc2giLCJmaXJlIiwiZmlybSIsImZpcnN0IiwiZmlzaCIsImZpc2hpbmciLCJmaXQiLCJmaXRuZXNzIiwiZml2ZSIsImZpeCIsImZsYWciLCJmbGFtZSIsImZsYXQiLCJmbGF2b3IiLCJmbGVlIiwiZmxlc2giLCJmbGlnaHQiLCJmbG9hdCIsImZsb29yIiwiZmxvdyIsImZsb3dlciIsImZseSIsImZvY3VzIiwiZm9sayIsImZvbGxvdyIsImZvbGxvd2luZyIsImZvb2QiLCJmb290IiwiZm9vdGJhbGwiLCJmb3IiLCJmb3JjZSIsImZvcmVpZ24iLCJmb3Jlc3QiLCJmb3JldmVyIiwiZm9yZ2V0IiwiZm9ybSIsImZvcm1hbCIsImZvcm1hdGlvbiIsImZvcm1lciIsImZvcm11bGEiLCJmb3J0aCIsImZvcnR1bmUiLCJmb3J3YXJkIiwiZm91bmQiLCJmb3VuZGF0aW9uIiwiZm91bmRlciIsImZvdXIiLCJmb3VydGgiLCJmcmFtZSIsImZyYW1ld29yayIsImZyZWUiLCJmcmVlZG9tIiwiZnJlZXplIiwiRnJlbmNoIiwiZnJlcXVlbmN5IiwiZnJlcXVlbnQiLCJmcmVxdWVudGx5IiwiZnJlc2giLCJmcmllbmQiLCJmcmllbmRseSIsImZyaWVuZHNoaXAiLCJmcm9tIiwiZnJvbnQiLCJmcnVpdCIsImZydXN0cmF0aW9uIiwiZnVlbCIsImZ1bGwiLCJmdWxseSIsImZ1biIsImZ1bmN0aW9uIiwiZnVuZCIsImZ1bmRhbWVudGFsIiwiZnVuZGluZyIsImZ1bmVyYWwiLCJmdW5ueSIsImZ1cm5pdHVyZSIsImZ1cnRoZXJtb3JlIiwiZnV0dXJlIiwiZ2FpbiIsImdhbGF4eSIsImdhbGxlcnkiLCJnYW1lIiwiZ2FuZyIsImdhcCIsImdhcmFnZSIsImdhcmRlbiIsImdhcmxpYyIsImdhcyIsImdhdGUiLCJnYXRoZXIiLCJnYXkiLCJnYXplIiwiZ2VhciIsImdlbmRlciIsImdlbmUiLCJnZW5lcmFsIiwiZ2VuZXJhbGx5IiwiZ2VuZXJhdGUiLCJnZW5lcmF0aW9uIiwiZ2VuZXRpYyIsImdlbnRsZW1hbiIsImdlbnRseSIsIkdlcm1hbiIsImdlc3R1cmUiLCJnZXQiLCJnaG9zdCIsImdpYW50IiwiZ2lmdCIsImdpZnRlZCIsImdpcmwiLCJnaXJsZnJpZW5kIiwiZ2l2ZSIsImdpdmVuIiwiZ2xhZCIsImdsYW5jZSIsImdsYXNzIiwiZ2xvYmFsIiwiZ2xvdmUiLCJnbyIsImdvYWwiLCJHb2QiLCJnb2xkIiwiZ29sZGVuIiwiZ29sZiIsImdvb2QiLCJnb3Zlcm5tZW50IiwiZ292ZXJub3IiLCJncmFiIiwiZ3JhZGUiLCJncmFkdWFsbHkiLCJncmFkdWF0ZSIsImdyYWluIiwiZ3JhbmQiLCJncmFuZGZhdGhlciIsImdyYW5kbW90aGVyIiwiZ3JhbnQiLCJncmFzcyIsImdyYXZlIiwiZ3JheSIsImdyZWF0IiwiZ3JlYXRlc3QiLCJncmVlbiIsImdyb2NlcnkiLCJncm91bmQiLCJncm91cCIsImdyb3ciLCJncm93aW5nIiwiZ3Jvd3RoIiwiZ3VhcmFudGVlIiwiZ3VhcmQiLCJndWVzcyIsImd1ZXN0IiwiZ3VpZGUiLCJndWlkZWxpbmUiLCJndWlsdHkiLCJndW4iLCJndXkiLCJoYWJpdCIsImhhYml0YXQiLCJoYWlyIiwiaGFsZiIsImhhbGwiLCJoYW5kIiwiaGFuZGZ1bCIsImhhbmRsZSIsImhhbmciLCJoYXBwZW4iLCJoYXBweSIsImhhcmQiLCJoYXJkbHkiLCJoYXQiLCJoYXRlIiwiaGF2ZSIsImhlIiwiaGVhZCIsImhlYWRsaW5lIiwiaGVhZHF1YXJ0ZXJzIiwiaGVhbHRoIiwiaGVhbHRoeSIsImhlYXIiLCJoZWFyaW5nIiwiaGVhcnQiLCJoZWF0IiwiaGVhdmVuIiwiaGVhdmlseSIsImhlYXZ5IiwiaGVlbCIsImhlaWdodCIsImhlbGljb3B0ZXIiLCJoZWxsIiwiaGVsbG8iLCJoZWxwIiwiaGVscGZ1bCIsImhlciIsImhlcmUiLCJoZXJpdGFnZSIsImhlcm8iLCJoZXJzZWxmIiwiaGV5IiwiaGkiLCJoaWRlIiwiaGlnaCIsImhpZ2hsaWdodCIsImhpZ2hseSIsImhpZ2h3YXkiLCJoaWxsIiwiaGltIiwiaGltc2VsZiIsImhpcCIsImhpcmUiLCJoaXMiLCJoaXN0b3JpYW4iLCJoaXN0b3JpYyIsImhpc3RvcmljYWwiLCJoaXN0b3J5IiwiaGl0IiwiaG9sZCIsImhvbGUiLCJob2xpZGF5IiwiaG9seSIsImhvbWUiLCJob21lbGVzcyIsImhvbmVzdCIsImhvbmV5IiwiaG9ub3IiLCJob3BlIiwiaG9yaXpvbiIsImhvcnJvciIsImhvcnNlIiwiaG9zcGl0YWwiLCJob3N0IiwiaG90IiwiaG90ZWwiLCJob3VyIiwiaG91c2UiLCJob3VzZWhvbGQiLCJob3VzaW5nIiwiaG93IiwiaG93ZXZlciIsImh1Z2UiLCJodW1hbiIsImh1bW9yIiwiaHVuZHJlZCIsImh1bmdyeSIsImh1bnRlciIsImh1bnRpbmciLCJodXJ0IiwiaHVzYmFuZCIsImh5cG90aGVzaXMiLCJJIiwiaWNlIiwiaWRlYSIsImlkZWFsIiwiaWRlbnRpZmljYXRpb24iLCJpZGVudGlmeSIsImlkZW50aXR5IiwiaWUiLCJpZiIsImlnbm9yZSIsImlsbCIsImlsbGVnYWwiLCJpbGxuZXNzIiwiaWxsdXN0cmF0ZSIsImltYWdlIiwiaW1hZ2luYXRpb24iLCJpbWFnaW5lIiwiaW1tZWRpYXRlIiwiaW1tZWRpYXRlbHkiLCJpbW1pZ3JhbnQiLCJpbW1pZ3JhdGlvbiIsImltcGFjdCIsImltcGxlbWVudCIsImltcGxpY2F0aW9uIiwiaW1wbHkiLCJpbXBvcnRhbmNlIiwiaW1wb3J0YW50IiwiaW1wb3NlIiwiaW1wb3NzaWJsZSIsImltcHJlc3MiLCJpbXByZXNzaW9uIiwiaW1wcmVzc2l2ZSIsImltcHJvdmUiLCJpbXByb3ZlbWVudCIsImluIiwiaW5jZW50aXZlIiwiaW5jaWRlbnQiLCJpbmNsdWRlIiwiaW5jbHVkaW5nIiwiaW5jb21lIiwiaW5jb3Jwb3JhdGUiLCJpbmNyZWFzZSIsImluY3JlYXNlZCIsImluY3JlYXNpbmciLCJpbmNyZWFzaW5nbHkiLCJpbmNyZWRpYmxlIiwiaW5kZWVkIiwiaW5kZXBlbmRlbmNlIiwiaW5kZXBlbmRlbnQiLCJpbmRleCIsIkluZGlhbiIsImluZGljYXRlIiwiaW5kaWNhdGlvbiIsImluZGl2aWR1YWwiLCJpbmR1c3RyaWFsIiwiaW5kdXN0cnkiLCJpbmZhbnQiLCJpbmZlY3Rpb24iLCJpbmZsYXRpb24iLCJpbmZsdWVuY2UiLCJpbmZvcm0iLCJpbmZvcm1hdGlvbiIsImluZ3JlZGllbnQiLCJpbml0aWFsIiwiaW5pdGlhbGx5IiwiaW5pdGlhdGl2ZSIsImluanVyeSIsImlubmVyIiwiaW5ub2NlbnQiLCJpbnF1aXJ5IiwiaW5zaWRlIiwiaW5zaWdodCIsImluc2lzdCIsImluc3BpcmUiLCJpbnN0YWxsIiwiaW5zdGFuY2UiLCJpbnN0ZWFkIiwiaW5zdGl0dXRpb24iLCJpbnN0aXR1dGlvbmFsIiwiaW5zdHJ1Y3Rpb24iLCJpbnN0cnVjdG9yIiwiaW5zdHJ1bWVudCIsImluc3VyYW5jZSIsImludGVsbGVjdHVhbCIsImludGVsbGlnZW5jZSIsImludGVuZCIsImludGVuc2UiLCJpbnRlbnNpdHkiLCJpbnRlbnRpb24iLCJpbnRlcmFjdGlvbiIsImludGVyZXN0IiwiaW50ZXJlc3RlZCIsImludGVyZXN0aW5nIiwiaW50ZXJuYWwiLCJpbnRlcm5hdGlvbmFsIiwiSW50ZXJuZXQiLCJpbnRlcnByZXQiLCJpbnRlcnByZXRhdGlvbiIsImludGVydmVudGlvbiIsImludGVydmlldyIsImludG8iLCJpbnRyb2R1Y2UiLCJpbnRyb2R1Y3Rpb24iLCJpbnZhc2lvbiIsImludmVzdCIsImludmVzdGlnYXRlIiwiaW52ZXN0aWdhdGlvbiIsImludmVzdGlnYXRvciIsImludmVzdG1lbnQiLCJpbnZlc3RvciIsImludml0ZSIsImludm9sdmUiLCJpbnZvbHZlZCIsImludm9sdmVtZW50IiwiSXJhcWkiLCJJcmlzaCIsImlyb24iLCJJc2xhbWljIiwiaXNsYW5kIiwiSXNyYWVsaSIsImlzc3VlIiwiaXQiLCJJdGFsaWFuIiwiaXRlbSIsIml0cyIsIml0c2VsZiIsImphY2tldCIsImphaWwiLCJKYXBhbmVzZSIsImpldCIsIkpldyIsIkpld2lzaCIsImpvYiIsImpvaW4iLCJqb2ludCIsImpva2UiLCJqb3VybmFsIiwiam91cm5hbGlzdCIsImpvdXJuZXkiLCJqb3kiLCJqdWRnZSIsImp1ZGdtZW50IiwianVpY2UiLCJqdW1wIiwianVuaW9yIiwianVyeSIsImp1c3QiLCJqdXN0aWNlIiwianVzdGlmeSIsImtlZXAiLCJrZXkiLCJraWNrIiwia2lkIiwia2lsbCIsImtpbGxlciIsImtpbGxpbmciLCJraW5kIiwia2luZyIsImtpc3MiLCJraXRjaGVuIiwia25lZSIsImtuaWZlIiwia25vY2siLCJrbm93Iiwia25vd2xlZGdlIiwibGFiIiwibGFiZWwiLCJsYWJvciIsImxhYm9yYXRvcnkiLCJsYWNrIiwibGFkeSIsImxha2UiLCJsYW5kIiwibGFuZHNjYXBlIiwibGFuZ3VhZ2UiLCJsYXAiLCJsYXJnZSIsImxhcmdlbHkiLCJsYXN0IiwibGF0ZSIsImxhdGVyIiwiTGF0aW4iLCJsYXR0ZXIiLCJsYXVnaCIsImxhdW5jaCIsImxhdyIsImxhd24iLCJsYXdzdWl0IiwibGF3eWVyIiwibGF5IiwibGF5ZXIiLCJsZWFkIiwibGVhZGVyIiwibGVhZGVyc2hpcCIsImxlYWRpbmciLCJsZWFmIiwibGVhZ3VlIiwibGVhbiIsImxlYXJuIiwibGVhcm5pbmciLCJsZWFzdCIsImxlYXRoZXIiLCJsZWF2ZSIsImxlZnQiLCJsZWciLCJsZWdhY3kiLCJsZWdhbCIsImxlZ2VuZCIsImxlZ2lzbGF0aW9uIiwibGVnaXRpbWF0ZSIsImxlbW9uIiwibGVuZ3RoIiwibGVzcyIsImxlc3NvbiIsImxldCIsImxldHRlciIsImxldmVsIiwibGliZXJhbCIsImxpYnJhcnkiLCJsaWNlbnNlIiwibGllIiwibGlmZSIsImxpZmVzdHlsZSIsImxpZmV0aW1lIiwibGlmdCIsImxpZ2h0IiwibGlrZSIsImxpa2VseSIsImxpbWl0IiwibGltaXRhdGlvbiIsImxpbWl0ZWQiLCJsaW5lIiwibGluayIsImxpcCIsImxpc3QiLCJsaXN0ZW4iLCJsaXRlcmFsbHkiLCJsaXRlcmFyeSIsImxpdGVyYXR1cmUiLCJsaXR0bGUiLCJsaXZlIiwibGl2aW5nIiwibG9hZCIsImxvYW4iLCJsb2NhbCIsImxvY2F0ZSIsImxvY2F0aW9uIiwibG9jayIsImxvbmciLCJsb29rIiwibG9vc2UiLCJsb3NlIiwibG9zcyIsImxvc3QiLCJsb3QiLCJsb3RzIiwibG91ZCIsImxvdmUiLCJsb3ZlbHkiLCJsb3ZlciIsImxvdyIsImxvd2VyIiwibHVjayIsImx1Y2t5IiwibHVuY2giLCJsdW5nIiwibWFjaGluZSIsIm1hZCIsIm1hZ2F6aW5lIiwibWFpbCIsIm1haW4iLCJtYWlubHkiLCJtYWludGFpbiIsIm1haW50ZW5hbmNlIiwibWFqb3IiLCJtYWpvcml0eSIsIm1ha2UiLCJtYWtlciIsIm1ha2V1cCIsIm1hbGUiLCJtYWxsIiwibWFuIiwibWFuYWdlIiwibWFuYWdlbWVudCIsIm1hbmFnZXIiLCJtYW5uZXIiLCJtYW51ZmFjdHVyZXIiLCJtYW51ZmFjdHVyaW5nIiwibWFueSIsIm1hcCIsIm1hcmdpbiIsIm1hcmsiLCJtYXJrZXQiLCJtYXJrZXRpbmciLCJtYXJyaWFnZSIsIm1hcnJpZWQiLCJtYXJyeSIsIm1hc2siLCJtYXNzIiwibWFzc2l2ZSIsIm1hc3RlciIsIm1hdGNoIiwibWF0ZXJpYWwiLCJtYXRoIiwibWF0dGVyIiwibWF5IiwibWF5YmUiLCJtYXlvciIsIm1lIiwibWVhbCIsIm1lYW4iLCJtZWFuaW5nIiwibWVhbndoaWxlIiwibWVhc3VyZSIsIm1lYXN1cmVtZW50IiwibWVhdCIsIm1lY2hhbmlzbSIsIm1lZGlhIiwibWVkaWNhbCIsIm1lZGljYXRpb24iLCJtZWRpY2luZSIsIm1lZGl1bSIsIm1lZXQiLCJtZWV0aW5nIiwibWVtYmVyIiwibWVtYmVyc2hpcCIsIm1lbW9yeSIsIm1lbnRhbCIsIm1lbnRpb24iLCJtZW51IiwibWVyZSIsIm1lcmVseSIsIm1lc3MiLCJtZXNzYWdlIiwibWV0YWwiLCJtZXRlciIsIm1ldGhvZCIsIk1leGljYW4iLCJtaWRkbGUiLCJtaWdodCIsIm1pbGl0YXJ5IiwibWlsayIsIm1pbGxpb24iLCJtaW5kIiwibWluZSIsIm1pbmlzdGVyIiwibWlub3IiLCJtaW5vcml0eSIsIm1pbnV0ZSIsIm1pcmFjbGUiLCJtaXJyb3IiLCJtaXNzIiwibWlzc2lsZSIsIm1pc3Npb24iLCJtaXN0YWtlIiwibWl4IiwibWl4dHVyZSIsIm1vZGUiLCJtb2RlbCIsIm1vZGVyYXRlIiwibW9kZXJuIiwibW9kZXN0IiwibW9tIiwibW9tZW50IiwibW9uZXkiLCJtb25pdG9yIiwibW9udGgiLCJtb29kIiwibW9vbiIsIm1vcmFsIiwibW9yZSIsIm1vcmVvdmVyIiwibW9ybmluZyIsIm1vcnRnYWdlIiwibW9zdCIsIm1vc3RseSIsIm1vdGhlciIsIm1vdGlvbiIsIm1vdGl2YXRpb24iLCJtb3RvciIsIm1vdW50IiwibW91bnRhaW4iLCJtb3VzZSIsIm1vdXRoIiwibW92ZSIsIm1vdmVtZW50IiwibW92aWUiLCJNciIsIk1ycyIsIk1zIiwibXVjaCIsIm11bHRpcGxlIiwibXVyZGVyIiwibXVzY2xlIiwibXVzZXVtIiwibXVzaWMiLCJtdXNpY2FsIiwibXVzaWNpYW4iLCJNdXNsaW0iLCJtdXN0IiwibXV0dWFsIiwibXkiLCJteXNlbGYiLCJteXN0ZXJ5IiwibXl0aCIsIm5ha2VkIiwibmFtZSIsIm5hcnJhdGl2ZSIsIm5hcnJvdyIsIm5hdGlvbiIsIm5hdGlvbmFsIiwibmF0aXZlIiwibmF0dXJhbCIsIm5hdHVyYWxseSIsIm5hdHVyZSIsIm5lYXIiLCJuZWFyYnkiLCJuZWFybHkiLCJuZWNlc3NhcmlseSIsIm5lY2Vzc2FyeSIsIm5lY2siLCJuZWVkIiwibmVnYXRpdmUiLCJuZWdvdGlhdGUiLCJuZWdvdGlhdGlvbiIsIm5laWdoYm9yIiwibmVpZ2hib3Job29kIiwibmVpdGhlciIsIm5lcnZlIiwibmVydm91cyIsIm5ldCIsIm5ldHdvcmsiLCJuZXZlciIsIm5ldmVydGhlbGVzcyIsIm5ldyIsIm5ld2x5IiwibmV3cyIsIm5ld3NwYXBlciIsIm5leHQiLCJuaWNlIiwibmlnaHQiLCJuaW5lIiwibm8iLCJub2JvZHkiLCJub2QiLCJub2lzZSIsIm5vbWluYXRpb24iLCJub25lIiwibm9uZXRoZWxlc3MiLCJub3IiLCJub3JtYWwiLCJub3JtYWxseSIsIm5vcnRoIiwibm9ydGhlcm4iLCJub3NlIiwibm90Iiwibm90ZSIsIm5vdGhpbmciLCJub3RpY2UiLCJub3Rpb24iLCJub3ZlbCIsIm5vdyIsIm5vd2hlcmUiLCJudWNsZWFyIiwibnVtYmVyIiwibnVtZXJvdXMiLCJudXJzZSIsIm51dCIsIm9iamVjdCIsIm9iamVjdGl2ZSIsIm9ibGlnYXRpb24iLCJvYnNlcnZhdGlvbiIsIm9ic2VydmUiLCJvYnNlcnZlciIsIm9idGFpbiIsIm9idmlvdXMiLCJvYnZpb3VzbHkiLCJvY2Nhc2lvbiIsIm9jY2FzaW9uYWxseSIsIm9jY3VwYXRpb24iLCJvY2N1cHkiLCJvY2N1ciIsIm9jZWFuIiwib2RkIiwib2RkcyIsIm9mIiwib2ZmIiwib2ZmZW5zZSIsIm9mZmVuc2l2ZSIsIm9mZmVyIiwib2ZmaWNlIiwib2ZmaWNlciIsIm9mZmljaWFsIiwib2Z0ZW4iLCJvaCIsIm9pbCIsIm9rIiwib2theSIsIm9sZCIsIk9seW1waWMiLCJvbiIsIm9uY2UiLCJvbmUiLCJvbmdvaW5nIiwib25pb24iLCJvbmxpbmUiLCJvbmx5Iiwib250byIsIm9wZW4iLCJvcGVuaW5nIiwib3BlcmF0ZSIsIm9wZXJhdGluZyIsIm9wZXJhdGlvbiIsIm9wZXJhdG9yIiwib3BpbmlvbiIsIm9wcG9uZW50Iiwib3Bwb3J0dW5pdHkiLCJvcHBvc2UiLCJvcHBvc2l0ZSIsIm9wcG9zaXRpb24iLCJvcHRpb24iLCJvciIsIm9yYW5nZSIsIm9yZGVyIiwib3JkaW5hcnkiLCJvcmdhbmljIiwib3JnYW5pemF0aW9uIiwib3JnYW5pemUiLCJvcmllbnRhdGlvbiIsIm9yaWdpbiIsIm9yaWdpbmFsIiwib3JpZ2luYWxseSIsIm90aGVyIiwib3RoZXJzIiwib3RoZXJ3aXNlIiwib3VnaHQiLCJvdXIiLCJvdXJzZWx2ZXMiLCJvdXQiLCJvdXRjb21lIiwib3V0c2lkZSIsIm92ZW4iLCJvdmVyIiwib3ZlcmFsbCIsIm92ZXJjb21lIiwib3Zlcmxvb2siLCJvd2UiLCJvd24iLCJvd25lciIsInBhY2UiLCJwYWNrIiwicGFja2FnZSIsInBhZ2UiLCJwYWluIiwicGFpbmZ1bCIsInBhaW50IiwicGFpbnRlciIsInBhaW50aW5nIiwicGFpciIsInBhbGUiLCJQYWxlc3RpbmlhbiIsInBhbG0iLCJwYW4iLCJwYW5lbCIsInBhbnQiLCJwYXBlciIsInBhcmVudCIsInBhcmsiLCJwYXJraW5nIiwicGFydCIsInBhcnRpY2lwYW50IiwicGFydGljaXBhdGUiLCJwYXJ0aWNpcGF0aW9uIiwicGFydGljdWxhciIsInBhcnRpY3VsYXJseSIsInBhcnRseSIsInBhcnRuZXIiLCJwYXJ0bmVyc2hpcCIsInBhcnR5IiwicGFzcyIsInBhc3NhZ2UiLCJwYXNzZW5nZXIiLCJwYXNzaW9uIiwicGFzdCIsInBhdGNoIiwicGF0aCIsInBhdGllbnQiLCJwYXR0ZXJuIiwicGF1c2UiLCJwYXkiLCJwYXltZW50IiwiUEMiLCJwZWFjZSIsInBlYWsiLCJwZWVyIiwicGVuYWx0eSIsInBlb3BsZSIsInBlcHBlciIsInBlciIsInBlcmNlaXZlIiwicGVyY2VudGFnZSIsInBlcmNlcHRpb24iLCJwZXJmZWN0IiwicGVyZmVjdGx5IiwicGVyZm9ybSIsInBlcmZvcm1hbmNlIiwicGVyaGFwcyIsInBlcmlvZCIsInBlcm1hbmVudCIsInBlcm1pc3Npb24iLCJwZXJtaXQiLCJwZXJzb24iLCJwZXJzb25hbCIsInBlcnNvbmFsaXR5IiwicGVyc29uYWxseSIsInBlcnNvbm5lbCIsInBlcnNwZWN0aXZlIiwicGVyc3VhZGUiLCJwZXQiLCJwaGFzZSIsInBoZW5vbWVub24iLCJwaGlsb3NvcGh5IiwicGhvbmUiLCJwaG90byIsInBob3RvZ3JhcGgiLCJwaG90b2dyYXBoZXIiLCJwaHJhc2UiLCJwaHlzaWNhbCIsInBoeXNpY2FsbHkiLCJwaHlzaWNpYW4iLCJwaWFubyIsInBpY2siLCJwaWN0dXJlIiwicGllIiwicGllY2UiLCJwaWxlIiwicGlsb3QiLCJwaW5lIiwicGluayIsInBpcGUiLCJwaXRjaCIsInBsYWNlIiwicGxhbiIsInBsYW5lIiwicGxhbmV0IiwicGxhbm5pbmciLCJwbGFudCIsInBsYXN0aWMiLCJwbGF0ZSIsInBsYXRmb3JtIiwicGxheSIsInBsYXllciIsInBsZWFzZSIsInBsZWFzdXJlIiwicGxlbnR5IiwicGxvdCIsInBsdXMiLCJQTSIsInBvY2tldCIsInBvZW0iLCJwb2V0IiwicG9ldHJ5IiwicG9pbnQiLCJwb2xlIiwicG9saWNlIiwicG9saWN5IiwicG9saXRpY2FsIiwicG9saXRpY2FsbHkiLCJwb2xpdGljaWFuIiwicG9saXRpY3MiLCJwb2xsIiwicG9sbHV0aW9uIiwicG9vbCIsInBvb3IiLCJwb3AiLCJwb3B1bGFyIiwicG9wdWxhdGlvbiIsInBvcmNoIiwicG9ydCIsInBvcnRpb24iLCJwb3J0cmFpdCIsInBvcnRyYXkiLCJwb3NlIiwicG9zaXRpb24iLCJwb3NpdGl2ZSIsInBvc3Nlc3MiLCJwb3NzaWJpbGl0eSIsInBvc3NpYmxlIiwicG9zc2libHkiLCJwb3N0IiwicG90IiwicG90YXRvIiwicG90ZW50aWFsIiwicG90ZW50aWFsbHkiLCJwb3VuZCIsInBvdXIiLCJwb3ZlcnR5IiwicG93ZGVyIiwicG93ZXIiLCJwb3dlcmZ1bCIsInByYWN0aWNhbCIsInByYWN0aWNlIiwicHJheSIsInByYXllciIsInByZWNpc2VseSIsInByZWRpY3QiLCJwcmVmZXIiLCJwcmVmZXJlbmNlIiwicHJlZ25hbmN5IiwicHJlZ25hbnQiLCJwcmVwYXJhdGlvbiIsInByZXBhcmUiLCJwcmVzY3JpcHRpb24iLCJwcmVzZW5jZSIsInByZXNlbnQiLCJwcmVzZW50YXRpb24iLCJwcmVzZXJ2ZSIsInByZXNpZGVudCIsInByZXNpZGVudGlhbCIsInByZXNzIiwicHJlc3N1cmUiLCJwcmV0ZW5kIiwicHJldHR5IiwicHJldmVudCIsInByZXZpb3VzIiwicHJldmlvdXNseSIsInByaWNlIiwicHJpZGUiLCJwcmllc3QiLCJwcmltYXJpbHkiLCJwcmltYXJ5IiwicHJpbWUiLCJwcmluY2lwYWwiLCJwcmluY2lwbGUiLCJwcmludCIsInByaW9yIiwicHJpb3JpdHkiLCJwcmlzb24iLCJwcmlzb25lciIsInByaXZhY3kiLCJwcml2YXRlIiwicHJvYmFibHkiLCJwcm9ibGVtIiwicHJvY2VkdXJlIiwicHJvY2VlZCIsInByb2Nlc3MiLCJwcm9kdWNlIiwicHJvZHVjZXIiLCJwcm9kdWN0IiwicHJvZHVjdGlvbiIsInByb2Zlc3Npb24iLCJwcm9mZXNzaW9uYWwiLCJwcm9mZXNzb3IiLCJwcm9maWxlIiwicHJvZml0IiwicHJvZ3JhbSIsInByb2dyZXNzIiwicHJvamVjdCIsInByb21pbmVudCIsInByb21pc2UiLCJwcm9tb3RlIiwicHJvbXB0IiwicHJvb2YiLCJwcm9wZXIiLCJwcm9wZXJseSIsInByb3BlcnR5IiwicHJvcG9ydGlvbiIsInByb3Bvc2FsIiwicHJvcG9zZSIsInByb3Bvc2VkIiwicHJvc2VjdXRvciIsInByb3NwZWN0IiwicHJvdGVjdCIsInByb3RlY3Rpb24iLCJwcm90ZWluIiwicHJvdGVzdCIsInByb3VkIiwicHJvdmUiLCJwcm92aWRlIiwicHJvdmlkZXIiLCJwcm92aW5jZSIsInByb3Zpc2lvbiIsInBzeWNob2xvZ2ljYWwiLCJwc3ljaG9sb2dpc3QiLCJwc3ljaG9sb2d5IiwicHVibGljIiwicHVibGljYXRpb24iLCJwdWJsaWNseSIsInB1Ymxpc2giLCJwdWJsaXNoZXIiLCJwdWxsIiwicHVuaXNobWVudCIsInB1cmNoYXNlIiwicHVyZSIsInB1cnBvc2UiLCJwdXJzdWUiLCJwdXNoIiwicHV0IiwicXVhbGlmeSIsInF1YWxpdHkiLCJxdWFydGVyIiwicXVhcnRlcmJhY2siLCJxdWVzdGlvbiIsInF1aWNrIiwicXVpY2tseSIsInF1aWV0IiwicXVpZXRseSIsInF1aXQiLCJxdWl0ZSIsInF1b3RlIiwicmFjZSIsInJhY2lhbCIsInJhZGljYWwiLCJyYWRpbyIsInJhaWwiLCJyYWluIiwicmFpc2UiLCJyYW5nZSIsInJhbmsiLCJyYXBpZCIsInJhcGlkbHkiLCJyYXJlIiwicmFyZWx5IiwicmF0ZSIsInJhdGhlciIsInJhdGluZyIsInJhdGlvIiwicmF3IiwicmVhY2giLCJyZWFjdCIsInJlYWN0aW9uIiwicmVhZCIsInJlYWRlciIsInJlYWRpbmciLCJyZWFkeSIsInJlYWwiLCJyZWFsaXR5IiwicmVhbGl6ZSIsInJlYWxseSIsInJlYXNvbiIsInJlYXNvbmFibGUiLCJyZWNhbGwiLCJyZWNlaXZlIiwicmVjZW50IiwicmVjZW50bHkiLCJyZWNpcGUiLCJyZWNvZ25pdGlvbiIsInJlY29nbml6ZSIsInJlY29tbWVuZCIsInJlY29tbWVuZGF0aW9uIiwicmVjb3JkIiwicmVjb3JkaW5nIiwicmVjb3ZlciIsInJlY292ZXJ5IiwicmVjcnVpdCIsInJlZCIsInJlZHVjZSIsInJlZHVjdGlvbiIsInJlZmVyIiwicmVmZXJlbmNlIiwicmVmbGVjdCIsInJlZmxlY3Rpb24iLCJyZWZvcm0iLCJyZWZ1Z2VlIiwicmVmdXNlIiwicmVnYXJkIiwicmVnYXJkaW5nIiwicmVnYXJkbGVzcyIsInJlZ2ltZSIsInJlZ2lvbiIsInJlZ2lvbmFsIiwicmVnaXN0ZXIiLCJyZWd1bGFyIiwicmVndWxhcmx5IiwicmVndWxhdGUiLCJyZWd1bGF0aW9uIiwicmVpbmZvcmNlIiwicmVqZWN0IiwicmVsYXRlIiwicmVsYXRpb24iLCJyZWxhdGlvbnNoaXAiLCJyZWxhdGl2ZSIsInJlbGF0aXZlbHkiLCJyZWxheCIsInJlbGVhc2UiLCJyZWxldmFudCIsInJlbGllZiIsInJlbGlnaW9uIiwicmVsaWdpb3VzIiwicmVseSIsInJlbWFpbiIsInJlbWFpbmluZyIsInJlbWFya2FibGUiLCJyZW1lbWJlciIsInJlbWluZCIsInJlbW90ZSIsInJlbW92ZSIsInJlcGVhdCIsInJlcGVhdGVkbHkiLCJyZXBsYWNlIiwicmVwbHkiLCJyZXBvcnQiLCJyZXBvcnRlciIsInJlcHJlc2VudCIsInJlcHJlc2VudGF0aW9uIiwicmVwcmVzZW50YXRpdmUiLCJSZXB1YmxpY2FuIiwicmVwdXRhdGlvbiIsInJlcXVlc3QiLCJyZXF1aXJlIiwicmVxdWlyZW1lbnQiLCJyZXNlYXJjaCIsInJlc2VhcmNoZXIiLCJyZXNlbWJsZSIsInJlc2VydmF0aW9uIiwicmVzaWRlbnQiLCJyZXNpc3QiLCJyZXNpc3RhbmNlIiwicmVzb2x1dGlvbiIsInJlc29sdmUiLCJyZXNvcnQiLCJyZXNvdXJjZSIsInJlc3BlY3QiLCJyZXNwb25kIiwicmVzcG9uZGVudCIsInJlc3BvbnNlIiwicmVzcG9uc2liaWxpdHkiLCJyZXNwb25zaWJsZSIsInJlc3QiLCJyZXN0YXVyYW50IiwicmVzdG9yZSIsInJlc3RyaWN0aW9uIiwicmVzdWx0IiwicmV0YWluIiwicmV0aXJlIiwicmV0aXJlbWVudCIsInJldHVybiIsInJldmVhbCIsInJldmVudWUiLCJyZXZpZXciLCJyZXZvbHV0aW9uIiwicmh5dGhtIiwicmljZSIsInJpY2giLCJyaWQiLCJyaWRlIiwicmlmbGUiLCJyaWdodCIsInJpbmciLCJyaXNlIiwicmlzayIsInJpdmVyIiwicm9hZCIsInJvY2siLCJyb2xlIiwicm9sbCIsInJvbWFudGljIiwicm9vZiIsInJvb20iLCJyb290Iiwicm9wZSIsInJvc2UiLCJyb3VnaCIsInJvdWdobHkiLCJyb3VuZCIsInJvdXRlIiwicm91dGluZSIsInJvdyIsInJ1YiIsInJ1bGUiLCJydW4iLCJydW5uaW5nIiwicnVyYWwiLCJydXNoIiwiUnVzc2lhbiIsInNhY3JlZCIsInNhZCIsInNhZmUiLCJzYWZldHkiLCJzYWtlIiwic2FsYWQiLCJzYWxhcnkiLCJzYWxlIiwic2FsZXMiLCJzYWx0Iiwic2FtZSIsInNhbXBsZSIsInNhbmN0aW9uIiwic2FuZCIsInNhdGVsbGl0ZSIsInNhdGlzZmFjdGlvbiIsInNhdGlzZnkiLCJzYXVjZSIsInNhdmUiLCJzYXZpbmciLCJzYXkiLCJzY2FsZSIsInNjYW5kYWwiLCJzY2FyZWQiLCJzY2VuYXJpbyIsInNjZW5lIiwic2NoZWR1bGUiLCJzY2hlbWUiLCJzY2hvbGFyIiwic2Nob2xhcnNoaXAiLCJzY2hvb2wiLCJzY2llbmNlIiwic2NpZW50aWZpYyIsInNjaWVudGlzdCIsInNjb3BlIiwic2NvcmUiLCJzY3JlYW0iLCJzY3JlZW4iLCJzY3JpcHQiLCJzZWEiLCJzZWFyY2giLCJzZWFzb24iLCJzZWF0Iiwic2Vjb25kIiwic2VjcmV0Iiwic2VjcmV0YXJ5Iiwic2VjdGlvbiIsInNlY3RvciIsInNlY3VyZSIsInNlY3VyaXR5Iiwic2VlIiwic2VlZCIsInNlZWsiLCJzZWVtIiwic2VnbWVudCIsInNlaXplIiwic2VsZWN0Iiwic2VsZWN0aW9uIiwic2VsZiIsInNlbGwiLCJTZW5hdGUiLCJzZW5hdG9yIiwic2VuZCIsInNlbmlvciIsInNlbnNlIiwic2Vuc2l0aXZlIiwic2VudGVuY2UiLCJzZXBhcmF0ZSIsInNlcXVlbmNlIiwic2VyaWVzIiwic2VyaW91cyIsInNlcmlvdXNseSIsInNlcnZlIiwic2VydmljZSIsInNlc3Npb24iLCJzZXQiLCJzZXR0aW5nIiwic2V0dGxlIiwic2V0dGxlbWVudCIsInNldmVuIiwic2V2ZXJhbCIsInNldmVyZSIsInNleCIsInNleHVhbCIsInNoYWRlIiwic2hhZG93Iiwic2hha2UiLCJzaGFsbCIsInNoYXBlIiwic2hhcmUiLCJzaGFycCIsInNoZSIsInNoZWV0Iiwic2hlbGYiLCJzaGVsbCIsInNoZWx0ZXIiLCJzaGlmdCIsInNoaW5lIiwic2hpcCIsInNoaXJ0Iiwic2hpdCIsInNob2NrIiwic2hvZSIsInNob290Iiwic2hvb3RpbmciLCJzaG9wIiwic2hvcHBpbmciLCJzaG9yZSIsInNob3J0Iiwic2hvcnRseSIsInNob3QiLCJzaG91bGQiLCJzaG91bGRlciIsInNob3V0Iiwic2hvdyIsInNob3dlciIsInNocnVnIiwic2h1dCIsInNpY2siLCJzaWRlIiwic2lnaCIsInNpZ2h0Iiwic2lnbiIsInNpZ25hbCIsInNpZ25pZmljYW5jZSIsInNpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRseSIsInNpbGVuY2UiLCJzaWxlbnQiLCJzaWx2ZXIiLCJzaW1pbGFyIiwic2ltaWxhcmx5Iiwic2ltcGxlIiwic2ltcGx5Iiwic2luIiwic2luY2UiLCJzaW5nIiwic2luZ2VyIiwic2luZ2xlIiwic2luayIsInNpciIsInNpc3RlciIsInNpdCIsInNpdGUiLCJzaXR1YXRpb24iLCJzaXgiLCJzaXplIiwic2tpIiwic2tpbGwiLCJza2luIiwic2t5Iiwic2xhdmUiLCJzbGVlcCIsInNsaWNlIiwic2xpZGUiLCJzbGlnaHQiLCJzbGlnaHRseSIsInNsaXAiLCJzbG93Iiwic2xvd2x5Iiwic21hbGwiLCJzbWFydCIsInNtZWxsIiwic21pbGUiLCJzbW9rZSIsInNtb290aCIsInNuYXAiLCJzbm93Iiwic28iLCJzb2NjZXIiLCJzb2NpYWwiLCJzb2NpZXR5Iiwic29mdCIsInNvZnR3YXJlIiwic29pbCIsInNvbGFyIiwic29sZGllciIsInNvbGlkIiwic29sdXRpb24iLCJzb2x2ZSIsInNvbWUiLCJzb21lYm9keSIsInNvbWVob3ciLCJzb21lb25lIiwic29tZXRoaW5nIiwic29tZXRpbWVzIiwic29tZXdoYXQiLCJzb21ld2hlcmUiLCJzb24iLCJzb25nIiwic29vbiIsInNvcGhpc3RpY2F0ZWQiLCJzb3JyeSIsInNvcnQiLCJzb3VsIiwic291bmQiLCJzb3VwIiwic291cmNlIiwic291dGgiLCJzb3V0aGVybiIsIlNvdmlldCIsInNwYWNlIiwiU3BhbmlzaCIsInNwZWFrIiwic3BlYWtlciIsInNwZWNpYWwiLCJzcGVjaWFsaXN0Iiwic3BlY2llcyIsInNwZWNpZmljIiwic3BlY2lmaWNhbGx5Iiwic3BlZWNoIiwic3BlZWQiLCJzcGVuZCIsInNwZW5kaW5nIiwic3BpbiIsInNwaXJpdCIsInNwaXJpdHVhbCIsInNwbGl0Iiwic3Bva2VzbWFuIiwic3BvcnQiLCJzcG90Iiwic3ByZWFkIiwic3ByaW5nIiwic3F1YXJlIiwic3F1ZWV6ZSIsInN0YWJpbGl0eSIsInN0YWJsZSIsInN0YWZmIiwic3RhZ2UiLCJzdGFpciIsInN0YWtlIiwic3RhbmQiLCJzdGFuZGFyZCIsInN0YW5kaW5nIiwic3RhciIsInN0YXJlIiwic3RhcnQiLCJzdGF0ZSIsInN0YXRlbWVudCIsInN0YXRpb24iLCJzdGF0aXN0aWNzIiwic3RhdHVzIiwic3RheSIsInN0ZWFkeSIsInN0ZWFsIiwic3RlZWwiLCJzdGVwIiwic3RpY2siLCJzdGlsbCIsInN0aXIiLCJzdG9jayIsInN0b21hY2giLCJzdG9uZSIsInN0b3AiLCJzdG9yYWdlIiwic3RvcmUiLCJzdG9ybSIsInN0b3J5Iiwic3RyYWlnaHQiLCJzdHJhbmdlIiwic3RyYW5nZXIiLCJzdHJhdGVnaWMiLCJzdHJhdGVneSIsInN0cmVhbSIsInN0cmVldCIsInN0cmVuZ3RoIiwic3RyZW5ndGhlbiIsInN0cmVzcyIsInN0cmV0Y2giLCJzdHJpa2UiLCJzdHJpbmciLCJzdHJpcCIsInN0cm9rZSIsInN0cm9uZyIsInN0cm9uZ2x5Iiwic3RydWN0dXJlIiwic3RydWdnbGUiLCJzdHVkZW50Iiwic3R1ZGlvIiwic3R1ZHkiLCJzdHVmZiIsInN0dXBpZCIsInN0eWxlIiwic3ViamVjdCIsInN1Ym1pdCIsInN1YnNlcXVlbnQiLCJzdWJzdGFuY2UiLCJzdWJzdGFudGlhbCIsInN1Y2NlZWQiLCJzdWNjZXNzIiwic3VjY2Vzc2Z1bCIsInN1Y2Nlc3NmdWxseSIsInN1Y2giLCJzdWRkZW4iLCJzdWRkZW5seSIsInN1ZSIsInN1ZmZlciIsInN1ZmZpY2llbnQiLCJzdWdhciIsInN1Z2dlc3QiLCJzdWdnZXN0aW9uIiwic3VpY2lkZSIsInN1aXQiLCJzdW1tZXIiLCJzdW1taXQiLCJzdW4iLCJzdXBlciIsInN1cHBseSIsInN1cHBvcnQiLCJzdXBwb3J0ZXIiLCJzdXBwb3NlIiwic3VwcG9zZWQiLCJTdXByZW1lIiwic3VyZSIsInN1cmVseSIsInN1cmZhY2UiLCJzdXJnZXJ5Iiwic3VycHJpc2UiLCJzdXJwcmlzZWQiLCJzdXJwcmlzaW5nIiwic3VycHJpc2luZ2x5Iiwic3Vycm91bmQiLCJzdXJ2ZXkiLCJzdXJ2aXZhbCIsInN1cnZpdmUiLCJzdXJ2aXZvciIsInN1c3BlY3QiLCJzdXN0YWluIiwic3dlYXIiLCJzd2VlcCIsInN3ZWV0Iiwic3dpbSIsInN3aW5nIiwic3dpdGNoIiwic3ltYm9sIiwic3ltcHRvbSIsInN5c3RlbSIsInRhYmxlIiwidGFibGVzcG9vbiIsInRhY3RpYyIsInRhaWwiLCJ0YWtlIiwidGFsZSIsInRhbGVudCIsInRhbGsiLCJ0YWxsIiwidGFuayIsInRhcCIsInRhcGUiLCJ0YXJnZXQiLCJ0YXNrIiwidGFzdGUiLCJ0YXgiLCJ0YXhwYXllciIsInRlYSIsInRlYWNoIiwidGVhY2hlciIsInRlYWNoaW5nIiwidGVhbSIsInRlYXIiLCJ0ZWFzcG9vbiIsInRlY2huaWNhbCIsInRlY2huaXF1ZSIsInRlY2hub2xvZ3kiLCJ0ZWVuIiwidGVlbmFnZXIiLCJ0ZWxlcGhvbmUiLCJ0ZWxlc2NvcGUiLCJ0ZWxldmlzaW9uIiwidGVsbCIsInRlbXBlcmF0dXJlIiwidGVtcG9yYXJ5IiwidGVuIiwidGVuZCIsInRlbmRlbmN5IiwidGVubmlzIiwidGVuc2lvbiIsInRlbnQiLCJ0ZXJtIiwidGVybXMiLCJ0ZXJyaWJsZSIsInRlcnJpdG9yeSIsInRlcnJvciIsInRlcnJvcmlzbSIsInRlcnJvcmlzdCIsInRlc3QiLCJ0ZXN0aWZ5IiwidGVzdGltb255IiwidGVzdGluZyIsInRleHQiLCJ0aGFuIiwidGhhbmsiLCJ0aGFua3MiLCJ0aGF0IiwidGhlIiwidGhlYXRlciIsInRoZWlyIiwidGhlbSIsInRoZW1lIiwidGhlbXNlbHZlcyIsInRoZW4iLCJ0aGVvcnkiLCJ0aGVyYXB5IiwidGhlcmUiLCJ0aGVyZWZvcmUiLCJ0aGVzZSIsInRoZXkiLCJ0aGljayIsInRoaW4iLCJ0aGluZyIsInRoaW5rIiwidGhpbmtpbmciLCJ0aGlyZCIsInRoaXJ0eSIsInRoaXMiLCJ0aG9zZSIsInRob3VnaCIsInRob3VnaHQiLCJ0aG91c2FuZCIsInRocmVhdCIsInRocmVhdGVuIiwidGhyZWUiLCJ0aHJvYXQiLCJ0aHJvdWdoIiwidGhyb3VnaG91dCIsInRocm93IiwidGh1cyIsInRpY2tldCIsInRpZSIsInRpZ2h0IiwidGltZSIsInRpbnkiLCJ0aXAiLCJ0aXJlIiwidGlyZWQiLCJ0aXNzdWUiLCJ0aXRsZSIsInRvIiwidG9iYWNjbyIsInRvZGF5IiwidG9lIiwidG9nZXRoZXIiLCJ0b21hdG8iLCJ0b21vcnJvdyIsInRvbmUiLCJ0b25ndWUiLCJ0b25pZ2h0IiwidG9vIiwidG9vbCIsInRvb3RoIiwidG9wIiwidG9waWMiLCJ0b3NzIiwidG90YWwiLCJ0b3RhbGx5IiwidG91Y2giLCJ0b3VnaCIsInRvdXIiLCJ0b3VyaXN0IiwidG91cm5hbWVudCIsInRvd2FyZCIsInRvd2FyZHMiLCJ0b3dlciIsInRvd24iLCJ0b3kiLCJ0cmFjZSIsInRyYWNrIiwidHJhZGUiLCJ0cmFkaXRpb24iLCJ0cmFkaXRpb25hbCIsInRyYWZmaWMiLCJ0cmFnZWR5IiwidHJhaWwiLCJ0cmFpbiIsInRyYWluaW5nIiwidHJhbnNmZXIiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1hdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2xhdGUiLCJ0cmFuc3BvcnRhdGlvbiIsInRyYXZlbCIsInRyZWF0IiwidHJlYXRtZW50IiwidHJlYXR5IiwidHJlZSIsInRyZW1lbmRvdXMiLCJ0cmVuZCIsInRyaWFsIiwidHJpYmUiLCJ0cmljayIsInRyaXAiLCJ0cm9vcCIsInRyb3VibGUiLCJ0cnVjayIsInRydWUiLCJ0cnVseSIsInRydXN0IiwidHJ1dGgiLCJ0cnkiLCJ0dWJlIiwidHVubmVsIiwidHVybiIsIlRWIiwidHdlbHZlIiwidHdlbnR5IiwidHdpY2UiLCJ0d2luIiwidHdvIiwidHlwZSIsInR5cGljYWwiLCJ0eXBpY2FsbHkiLCJ1Z2x5IiwidWx0aW1hdGUiLCJ1bHRpbWF0ZWx5IiwidW5hYmxlIiwidW5jbGUiLCJ1bmRlciIsInVuZGVyZ28iLCJ1bmRlcnN0YW5kIiwidW5kZXJzdGFuZGluZyIsInVuZm9ydHVuYXRlbHkiLCJ1bmlmb3JtIiwidW5pb24iLCJ1bmlxdWUiLCJ1bml0IiwiVW5pdGVkIiwidW5pdmVyc2FsIiwidW5pdmVyc2UiLCJ1bml2ZXJzaXR5IiwidW5rbm93biIsInVubGVzcyIsInVubGlrZSIsInVubGlrZWx5IiwidW50aWwiLCJ1bnVzdWFsIiwidXAiLCJ1cG9uIiwidXBwZXIiLCJ1cmJhbiIsInVyZ2UiLCJ1cyIsInVzZSIsInVzZWQiLCJ1c2VmdWwiLCJ1c2VyIiwidXN1YWwiLCJ1c3VhbGx5IiwidXRpbGl0eSIsInZhY2F0aW9uIiwidmFsbGV5IiwidmFsdWFibGUiLCJ2YWx1ZSIsInZhcmlhYmxlIiwidmFyaWF0aW9uIiwidmFyaWV0eSIsInZhcmlvdXMiLCJ2YXJ5IiwidmFzdCIsInZlZ2V0YWJsZSIsInZlaGljbGUiLCJ2ZW50dXJlIiwidmVyc2lvbiIsInZlcnN1cyIsInZlcnkiLCJ2ZXNzZWwiLCJ2ZXRlcmFuIiwidmlhIiwidmljdGltIiwidmljdG9yeSIsInZpZGVvIiwidmlldyIsInZpZXdlciIsInZpbGxhZ2UiLCJ2aW9sYXRlIiwidmlvbGF0aW9uIiwidmlvbGVuY2UiLCJ2aW9sZW50IiwidmlydHVhbGx5IiwidmlydHVlIiwidmlydXMiLCJ2aXNpYmxlIiwidmlzaW9uIiwidmlzaXQiLCJ2aXNpdG9yIiwidmlzdWFsIiwidml0YWwiLCJ2b2ljZSIsInZvbHVtZSIsInZvbHVudGVlciIsInZvdGUiLCJ2b3RlciIsInZzIiwidnVsbmVyYWJsZSIsIndhZ2UiLCJ3YWl0Iiwid2FrZSIsIndhbGsiLCJ3YWxsIiwid2FuZGVyIiwid2FudCIsIndhciIsIndhcm0iLCJ3YXJuIiwid2FybmluZyIsIndhc2giLCJ3YXN0ZSIsIndhdGNoIiwid2F0ZXIiLCJ3YXZlIiwid2F5Iiwid2UiLCJ3ZWFrIiwid2VhbHRoIiwid2VhbHRoeSIsIndlYXBvbiIsIndlYXIiLCJ3ZWF0aGVyIiwid2VkZGluZyIsIndlZWsiLCJ3ZWVrZW5kIiwid2Vla2x5Iiwid2VpZ2giLCJ3ZWlnaHQiLCJ3ZWxjb21lIiwid2VsZmFyZSIsIndlbGwiLCJ3ZXN0Iiwid2VzdGVybiIsIndldCIsIndoYXQiLCJ3aGF0ZXZlciIsIndoZWVsIiwid2hlbiIsIndoZW5ldmVyIiwid2hlcmUiLCJ3aGVyZWFzIiwid2hldGhlciIsIndoaWNoIiwid2hpbGUiLCJ3aGlzcGVyIiwid2hpdGUiLCJ3aG8iLCJ3aG9sZSIsIndob20iLCJ3aG9zZSIsIndoeSIsIndpZGUiLCJ3aWRlbHkiLCJ3aWRlc3ByZWFkIiwid2lmZSIsIndpbGQiLCJ3aWxsIiwid2lsbGluZyIsIndpbiIsIndpbmQiLCJ3aW5kb3ciLCJ3aW5lIiwid2luZyIsIndpbm5lciIsIndpbnRlciIsIndpcGUiLCJ3aXJlIiwid2lzZG9tIiwid2lzZSIsIndpc2giLCJ3aXRoIiwid2l0aGRyYXciLCJ3aXRoaW4iLCJ3aXRob3V0Iiwid2l0bmVzcyIsIndvbWFuIiwid29uZGVyIiwid29uZGVyZnVsIiwid29vZCIsIndvb2RlbiIsIndvcmQiLCJ3b3JrIiwid29ya2VyIiwid29ya2luZyIsIndvcmtzIiwid29ya3Nob3AiLCJ3b3JsZCIsIndvcnJpZWQiLCJ3b3JyeSIsIndvcnRoIiwid291bGQiLCJ3b3VuZCIsIndyYXAiLCJ3cml0ZSIsIndyaXRlciIsIndyaXRpbmciLCJ3cm9uZyIsInlhcmQiLCJ5ZWFoIiwieWVhciIsInllbGwiLCJ5ZWxsb3ciLCJ5ZXMiLCJ5ZXN0ZXJkYXkiLCJ5ZXQiLCJ5aWVsZCIsInlvdSIsInlvdW5nIiwieW91ciIsInlvdXJzIiwieW91cnNlbGYiLCJ5b3V0aCIsInpvbmUiLCJheGlvcyIsImZzIiwiZmluZGVyIiwiQVBJX0RBSUxZX0xJTUlUIiwiTUFYX1dPUkRTIiwiQ0FDSEVfQ0xVU1RFUlMiLCJNQVhfTk9ERV9GUkVRVUVOQ1kiLCJUUkFWRVJTRV9TSU1JTEFSIiwiY2FjaGVJbml0aWFsaXplckNvbW1vbiIsImNhY2hlSXNJbml0aWFsaXplZCIsInBhcmFsbGVsQ2FjaGVJbml0UmVxdWVzdHMiLCJ0b3RhbFdvcmRzTGFzdERheSIsImNhY2hlSW5pdElzRXJyb3IiLCJyZW1vdGVDYWxsSW5pdCIsImN1cnRpbWUiLCJEYXRlIiwiZmluZEZpbGVzIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImluaXRDcmF3bGVyIiwiX01BWF9XT1JEUyIsIl9DQUNIRV9DTFVTVEVSUyIsIl9NQVhfTk9ERV9GUkVRVUVOQ1kiLCJfVFJBVkVSU0VfU0lNSUxBUiIsImV4aXN0c1N5bmMiLCJta2RpclN5bmMiLCJyZWN1cnNpdmUiLCJzaW5nbGVXb3JkVG9EaXNwbGF5IiwicmVzdWx0cyIsInByb251bmNpYXRpb24iLCJkZWYiLCJkZWZpbml0aW9uQXJyYXkiLCJwYXJ0T2ZTcGVlY2giLCJwcm9wZXJ0aWVzIiwia2V5cyIsIk9iamVjdCIsInJlZ2V4IiwidG9Mb3dlckNhc2UiLCJuZXdPYmoiLCJpc1N0cmluZyIsImxvYWRTaW5nbGVXb3JkIiwiYXNvYmplY3QiLCJ3ZnBhdGgiLCJpanNvbiIsInJlYWRGaWxlU3luYyIsInRvU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwib2pzb24iLCJzdHJpbmdpZnkiLCJlIiwidW5saW5rU3luYyIsImVudiIsIlJBUElEQVBJX0tFWSIsImRqc29uIiwid3JpdGVGaWxlIiwiZXJyIiwiVHJhdmVyc2VOb2RlIiwiY29uc3RydWN0b3IiLCJieV9kZWYiLCJ2YWwiLCJzeW5vbnltcyIsIndvcmRzIiwic2ltaWxhclRvIiwiY29tcHJlc3MiLCJsb2FkRGljdGlvbmFyeUFuZENoaWxkcmVuIiwidHJlc3VsdCIsInRyYXZlcnNpb24iLCJub2RlIiwid29yZHNicmVhZHRoZmlyc3QiLCJ0cmF2ZXJzZUNsdXN0ZXIiLCJub1dvcmRzIiwicHJldmlvdXNsZXZlbGNoaWxkd29yZHMiLCJjb25jYXQiLCJwcm9taXNlcyIsInciLCJieV93Iiwibm9kZXByb21pc2UiLCJQcm9taXNlIiwibG9hZENsdXN0ZXIiLCJjZnBhdGgiLCJieV9rZXkiLCJ2YWx1ZXMiLCJjbXAiLCJmaXJzdEVsIiwic2Vjb25kRWwiLCJsb2NhbGVDb21wYXJlIiwiZGVmb2JqIiwibm9DbHVzdGVyRW50cmllcyIsImNqc29uIiwibG9hZENvbW1vbldvcmQiLCJub0RlZmluaXRpb25zIiwibG9hZENvbW1vbldvcmRzIiwiY3ciLCJjb21tb25Xb3JkIiwiRmluZEZpbGVzIiwiY250Iiwicm9vdEZvbGRlciIsImZpbGVNb2RpZmllZERhdGUiLCJvbkZpbGUiLCJzdHJQYXRoIiwic3RhdCIsIl9yZXNvbHZlIiwiX3JlamVjdCIsInN0YXJ0U2VhcmNoIiwiY3Jhd2xlciIsImhhbmRsZXIiLCJzdGF0dXNDb2RlIiwianNvbiIsImhlYWRlcnMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEOzs7Ozs7O0FDalVBLGdDOzs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxFQUFJOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1EQUFtRDtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7QUN0UkEsbUM7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLEVBQWM7QUFDekMsQ0FBQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLEVBQVc7QUFDdEM7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixtQkFBTyxDQUFDLEVBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNB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Q0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LFNBQU8sQ0FBQ3RGLFdBQVIsQ0FDRWhCLFNBREYsRUFFRUMsY0FGRixFQUdFQyxrQkFIRixFQUlFQyxnQkFKRjs7QUFPQSxNQUFJO0FBRUZVLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG9FQUFaO0FBRUEsUUFBSXlELFFBQVEsR0FBRyxFQUFmOztBQUNBLFNBQUssSUFBSW9CLFVBQVQsSUFBdUJELEVBQUUsQ0FBQ2poRyxpQkFBMUIsRUFBNkM7QUFDM0M4L0YsY0FBUSxDQUFDbjhCLElBQVQsQ0FBY2srQixPQUFPLENBQUMxQixXQUFSLENBQW9CZSxVQUFwQixFQUFnQyxLQUFoQyxDQUFkO0FBQ0Q7O0FBQ0QsVUFBTWhCLE9BQU8sQ0FBQ2w2RixHQUFSLENBQVk4NUYsUUFBWixDQUFOO0FBRUEsV0FBTztBQUNMaUMsZ0JBQVUsRUFBRSxHQURQO0FBRUw5dUYsVUFBSSxFQUFFK3VGLElBRkQ7QUFHTEMsYUFBTyxFQUFFO0FBQ1AsdUNBQStCO0FBRHhCO0FBSEosS0FBUDtBQVFELEdBbEJELENBa0JFLE9BQU9yRCxHQUFQLEVBQVk7QUFDWnhDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZdUMsR0FBWjtBQUNBLFdBQU87QUFBRW1ELGdCQUFVLEVBQUUsR0FBZDtBQUFtQjl1RixVQUFJLEVBQUUyckYsR0FBRyxDQUFDWCxRQUFKO0FBQXpCLEtBQVA7QUFDRDtBQUNGLEMiLCJmaWxlIjoiY3Jhd2wtYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1Myk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7IiwidmFyIHVybCA9IHJlcXVpcmUoXCJ1cmxcIik7XG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xudmFyIGh0dHBzID0gcmVxdWlyZShcImh0dHBzXCIpO1xudmFyIGFzc2VydCA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG52YXIgV3JpdGFibGUgPSByZXF1aXJlKFwic3RyZWFtXCIpLldyaXRhYmxlO1xudmFyIGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZm9sbG93LXJlZGlyZWN0c1wiKTtcblxuLy8gUkZDNzIzMcKnNC4yLjE6IE9mIHRoZSByZXF1ZXN0IG1ldGhvZHMgZGVmaW5lZCBieSB0aGlzIHNwZWNpZmljYXRpb24sXG4vLyB0aGUgR0VULCBIRUFELCBPUFRJT05TLCBhbmQgVFJBQ0UgbWV0aG9kcyBhcmUgZGVmaW5lZCB0byBiZSBzYWZlLlxudmFyIFNBRkVfTUVUSE9EUyA9IHsgR0VUOiB0cnVlLCBIRUFEOiB0cnVlLCBPUFRJT05TOiB0cnVlLCBUUkFDRTogdHJ1ZSB9O1xuXG4vLyBDcmVhdGUgaGFuZGxlcnMgdGhhdCBwYXNzIGV2ZW50cyBmcm9tIG5hdGl2ZSByZXF1ZXN0c1xudmFyIGV2ZW50SGFuZGxlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuW1wiYWJvcnRcIiwgXCJhYm9ydGVkXCIsIFwiZXJyb3JcIiwgXCJzb2NrZXRcIiwgXCJ0aW1lb3V0XCJdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50SGFuZGxlcnNbZXZlbnRdID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHRoaXMuX3JlZGlyZWN0YWJsZS5lbWl0KGV2ZW50LCBhcmcpO1xuICB9O1xufSk7XG5cbi8vIEFuIEhUVFAoUykgcmVxdWVzdCB0aGF0IGNhbiBiZSByZWRpcmVjdGVkXG5mdW5jdGlvbiBSZWRpcmVjdGFibGVSZXF1ZXN0KG9wdGlvbnMsIHJlc3BvbnNlQ2FsbGJhY2spIHtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgcmVxdWVzdFxuICBXcml0YWJsZS5jYWxsKHRoaXMpO1xuICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLl9yZWRpcmVjdENvdW50ID0gMDtcbiAgdGhpcy5fcmVkaXJlY3RzID0gW107XG4gIHRoaXMuX3JlcXVlc3RCb2R5TGVuZ3RoID0gMDtcbiAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzID0gW107XG5cbiAgLy8gU2luY2UgaHR0cC5yZXF1ZXN0IHRyZWF0cyBob3N0IGFzIGFuIGFsaWFzIG9mIGhvc3RuYW1lLFxuICAvLyBidXQgdGhlIHVybCBtb2R1bGUgaW50ZXJwcmV0cyBob3N0IGFzIGhvc3RuYW1lIHBsdXMgcG9ydCxcbiAgLy8gZWxpbWluYXRlIHRoZSBob3N0IHByb3BlcnR5IHRvIGF2b2lkIGNvbmZ1c2lvbi5cbiAgaWYgKG9wdGlvbnMuaG9zdCkge1xuICAgIC8vIFVzZSBob3N0bmFtZSBpZiBzZXQsIGJlY2F1c2UgaXQgaGFzIHByZWNlZGVuY2VcbiAgICBpZiAoIW9wdGlvbnMuaG9zdG5hbWUpIHtcbiAgICAgIG9wdGlvbnMuaG9zdG5hbWUgPSBvcHRpb25zLmhvc3Q7XG4gICAgfVxuICAgIGRlbGV0ZSBvcHRpb25zLmhvc3Q7XG4gIH1cblxuICAvLyBBdHRhY2ggYSBjYWxsYmFjayBpZiBwYXNzZWRcbiAgaWYgKHJlc3BvbnNlQ2FsbGJhY2spIHtcbiAgICB0aGlzLm9uKFwicmVzcG9uc2VcIiwgcmVzcG9uc2VDYWxsYmFjayk7XG4gIH1cblxuICAvLyBSZWFjdCB0byByZXNwb25zZXMgb2YgbmF0aXZlIHJlcXVlc3RzXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fb25OYXRpdmVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIHNlbGYuX3Byb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XG4gIH07XG5cbiAgLy8gQ29tcGxldGUgdGhlIFVSTCBvYmplY3Qgd2hlbiBuZWNlc3NhcnlcbiAgaWYgKCFvcHRpb25zLnBhdGhuYW1lICYmIG9wdGlvbnMucGF0aCkge1xuICAgIHZhciBzZWFyY2hQb3MgPSBvcHRpb25zLnBhdGguaW5kZXhPZihcIj9cIik7XG4gICAgaWYgKHNlYXJjaFBvcyA8IDApIHtcbiAgICAgIG9wdGlvbnMucGF0aG5hbWUgPSBvcHRpb25zLnBhdGg7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3B0aW9ucy5wYXRobmFtZSA9IG9wdGlvbnMucGF0aC5zdWJzdHJpbmcoMCwgc2VhcmNoUG9zKTtcbiAgICAgIG9wdGlvbnMuc2VhcmNoID0gb3B0aW9ucy5wYXRoLnN1YnN0cmluZyhzZWFyY2hQb3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBlcmZvcm0gdGhlIGZpcnN0IHJlcXVlc3RcbiAgdGhpcy5fcGVyZm9ybVJlcXVlc3QoKTtcbn1cblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShXcml0YWJsZS5wcm90b3R5cGUpO1xuXG4vLyBXcml0ZXMgYnVmZmVyZWQgZGF0YSB0byB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIC8vIFZhbGlkYXRlIGlucHV0IGFuZCBzaGlmdCBwYXJhbWV0ZXJzIGlmIG5lY2Vzc2FyeVxuICBpZiAoISh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAoXCJsZW5ndGhcIiBpbiBkYXRhKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYXRhIHNob3VsZCBiZSBhIHN0cmluZywgQnVmZmVyIG9yIFVpbnQ4QXJyYXlcIik7XG4gIH1cbiAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2FsbGJhY2sgPSBlbmNvZGluZztcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH1cblxuICAvLyBJZ25vcmUgZW1wdHkgYnVmZmVycywgc2luY2Ugd3JpdGluZyB0aGVtIGRvZXNuJ3QgaW52b2tlIHRoZSBjYWxsYmFja1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzIyMDY2XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIE9ubHkgd3JpdGUgd2hlbiB3ZSBkb24ndCBleGNlZWQgdGhlIG1heGltdW0gYm9keSBsZW5ndGhcbiAgaWYgKHRoaXMuX3JlcXVlc3RCb2R5TGVuZ3RoICsgZGF0YS5sZW5ndGggPD0gdGhpcy5fb3B0aW9ucy5tYXhCb2R5TGVuZ3RoKSB7XG4gICAgdGhpcy5fcmVxdWVzdEJvZHlMZW5ndGggKz0gZGF0YS5sZW5ndGg7XG4gICAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzLnB1c2goeyBkYXRhOiBkYXRhLCBlbmNvZGluZzogZW5jb2RpbmcgfSk7XG4gICAgdGhpcy5fY3VycmVudFJlcXVlc3Qud3JpdGUoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcbiAgfVxuICAvLyBFcnJvciB3aGVuIHdlIGV4Y2VlZCB0aGUgbWF4aW11bSBib2R5IGxlbmd0aFxuICBlbHNlIHtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJSZXF1ZXN0IGJvZHkgbGFyZ2VyIHRoYW4gbWF4Qm9keUxlbmd0aCBsaW1pdFwiKSk7XG4gICAgdGhpcy5hYm9ydCgpO1xuICB9XG59O1xuXG4vLyBFbmRzIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIC8vIFNoaWZ0IHBhcmFtZXRlcnMgaWYgbmVjZXNzYXJ5XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2FsbGJhY2sgPSBkYXRhO1xuICAgIGRhdGEgPSBlbmNvZGluZyA9IG51bGw7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGVuY29kaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIC8vIFdyaXRlIGRhdGEgYW5kIGVuZFxuICB2YXIgY3VycmVudFJlcXVlc3QgPSB0aGlzLl9jdXJyZW50UmVxdWVzdDtcbiAgdGhpcy53cml0ZShkYXRhIHx8IFwiXCIsIGVuY29kaW5nLCBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudFJlcXVlc3QuZW5kKG51bGwsIG51bGwsIGNhbGxiYWNrKTtcbiAgfSk7XG59O1xuXG4vLyBTZXRzIGEgaGVhZGVyIHZhbHVlIG9uIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5zZXRIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5fb3B0aW9ucy5oZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LnNldEhlYWRlcihuYW1lLCB2YWx1ZSk7XG59O1xuXG4vLyBDbGVhcnMgYSBoZWFkZXIgdmFsdWUgb24gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLnJlbW92ZUhlYWRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9vcHRpb25zLmhlYWRlcnNbbmFtZV07XG4gIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LnJlbW92ZUhlYWRlcihuYW1lKTtcbn07XG5cbi8vIFByb3h5IGFsbCBvdGhlciBwdWJsaWMgQ2xpZW50UmVxdWVzdCBtZXRob2RzXG5bXG4gIFwiYWJvcnRcIiwgXCJmbHVzaEhlYWRlcnNcIiwgXCJnZXRIZWFkZXJcIixcbiAgXCJzZXROb0RlbGF5XCIsIFwic2V0U29ja2V0S2VlcEFsaXZlXCIsIFwic2V0VGltZW91dFwiLFxuXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRSZXF1ZXN0W21ldGhvZF0oYSwgYik7XG4gIH07XG59KTtcblxuLy8gUHJveHkgYWxsIHB1YmxpYyBDbGllbnRSZXF1ZXN0IHByb3BlcnRpZXNcbltcImFib3J0ZWRcIiwgXCJjb25uZWN0aW9uXCIsIFwic29ja2V0XCJdLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZSwgcHJvcGVydHksIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2N1cnJlbnRSZXF1ZXN0W3Byb3BlcnR5XTsgfSxcbiAgfSk7XG59KTtcblxuLy8gRXhlY3V0ZXMgdGhlIG5leHQgbmF0aXZlIHJlcXVlc3QgKGluaXRpYWwgb3IgcmVkaXJlY3QpXG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5fcGVyZm9ybVJlcXVlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIExvYWQgdGhlIG5hdGl2ZSBwcm90b2NvbFxuICB2YXIgcHJvdG9jb2wgPSB0aGlzLl9vcHRpb25zLnByb3RvY29sO1xuICB2YXIgbmF0aXZlUHJvdG9jb2wgPSB0aGlzLl9vcHRpb25zLm5hdGl2ZVByb3RvY29sc1twcm90b2NvbF07XG4gIGlmICghbmF0aXZlUHJvdG9jb2wpIHtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBwcm90b2NvbCBcIiArIHByb3RvY29sKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSWYgc3BlY2lmaWVkLCB1c2UgdGhlIGFnZW50IGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3RvY29sXG4gIC8vIChIVFRQIGFuZCBIVFRQUyB1c2UgZGlmZmVyZW50IHR5cGVzIG9mIGFnZW50cylcbiAgaWYgKHRoaXMuX29wdGlvbnMuYWdlbnRzKSB7XG4gICAgdmFyIHNjaGVtZSA9IHByb3RvY29sLnN1YnN0cigwLCBwcm90b2NvbC5sZW5ndGggLSAxKTtcbiAgICB0aGlzLl9vcHRpb25zLmFnZW50ID0gdGhpcy5fb3B0aW9ucy5hZ2VudHNbc2NoZW1lXTtcbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgbmF0aXZlIHJlcXVlc3RcbiAgdmFyIHJlcXVlc3QgPSB0aGlzLl9jdXJyZW50UmVxdWVzdCA9XG4gICAgICAgIG5hdGl2ZVByb3RvY29sLnJlcXVlc3QodGhpcy5fb3B0aW9ucywgdGhpcy5fb25OYXRpdmVSZXNwb25zZSk7XG4gIHRoaXMuX2N1cnJlbnRVcmwgPSB1cmwuZm9ybWF0KHRoaXMuX29wdGlvbnMpO1xuXG4gIC8vIFNldCB1cCBldmVudCBoYW5kbGVyc1xuICByZXF1ZXN0Ll9yZWRpcmVjdGFibGUgPSB0aGlzO1xuICBmb3IgKHZhciBldmVudCBpbiBldmVudEhhbmRsZXJzKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHJlcXVlc3Qub24oZXZlbnQsIGV2ZW50SGFuZGxlcnNbZXZlbnRdKTtcbiAgICB9XG4gIH1cblxuICAvLyBFbmQgYSByZWRpcmVjdGVkIHJlcXVlc3RcbiAgLy8gKFRoZSBmaXJzdCByZXF1ZXN0IG11c3QgYmUgZW5kZWQgZXhwbGljaXRseSB3aXRoIFJlZGlyZWN0YWJsZVJlcXVlc3QjZW5kKVxuICBpZiAodGhpcy5faXNSZWRpcmVjdCkge1xuICAgIC8vIFdyaXRlIHRoZSByZXF1ZXN0IGVudGl0eSBhbmQgZW5kLlxuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYnVmZmVycyA9IHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycztcbiAgICAoZnVuY3Rpb24gd3JpdGVOZXh0KCkge1xuICAgICAgaWYgKGkgPCBidWZmZXJzLmxlbmd0aCkge1xuICAgICAgICB2YXIgYnVmZmVyID0gYnVmZmVyc1tpKytdO1xuICAgICAgICByZXF1ZXN0LndyaXRlKGJ1ZmZlci5kYXRhLCBidWZmZXIuZW5jb2RpbmcsIHdyaXRlTmV4dCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVxdWVzdC5lbmQoKTtcbiAgICAgIH1cbiAgICB9KCkpO1xuICB9XG59O1xuXG4vLyBQcm9jZXNzZXMgYSByZXNwb25zZSBmcm9tIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5fcHJvY2Vzc1Jlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIC8vIFN0b3JlIHRoZSByZWRpcmVjdGVkIHJlc3BvbnNlXG4gIGlmICh0aGlzLl9vcHRpb25zLnRyYWNrUmVkaXJlY3RzKSB7XG4gICAgdGhpcy5fcmVkaXJlY3RzLnB1c2goe1xuICAgICAgdXJsOiB0aGlzLl9jdXJyZW50VXJsLFxuICAgICAgaGVhZGVyczogcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1c0NvZGUsXG4gICAgfSk7XG4gIH1cblxuICAvLyBSRkM3MjMxwqc2LjQ6IFRoZSAzeHggKFJlZGlyZWN0aW9uKSBjbGFzcyBvZiBzdGF0dXMgY29kZSBpbmRpY2F0ZXNcbiAgLy8gdGhhdCBmdXJ0aGVyIGFjdGlvbiBuZWVkcyB0byBiZSB0YWtlbiBieSB0aGUgdXNlciBhZ2VudCBpbiBvcmRlciB0b1xuICAvLyBmdWxmaWxsIHRoZSByZXF1ZXN0LiBJZiBhIExvY2F0aW9uIGhlYWRlciBmaWVsZCBpcyBwcm92aWRlZCxcbiAgLy8gdGhlIHVzZXIgYWdlbnQgTUFZIGF1dG9tYXRpY2FsbHkgcmVkaXJlY3QgaXRzIHJlcXVlc3QgdG8gdGhlIFVSSVxuICAvLyByZWZlcmVuY2VkIGJ5IHRoZSBMb2NhdGlvbiBmaWVsZCB2YWx1ZSxcbiAgLy8gZXZlbiBpZiB0aGUgc3BlY2lmaWMgc3RhdHVzIGNvZGUgaXMgbm90IHVuZGVyc3Rvb2QuXG4gIHZhciBsb2NhdGlvbiA9IHJlc3BvbnNlLmhlYWRlcnMubG9jYXRpb247XG4gIGlmIChsb2NhdGlvbiAmJiB0aGlzLl9vcHRpb25zLmZvbGxvd1JlZGlyZWN0cyAhPT0gZmFsc2UgJiZcbiAgICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gMzAwICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPCA0MDApIHtcbiAgICAvLyBSRkM3MjMxwqc2LjQ6IEEgY2xpZW50IFNIT1VMRCBkZXRlY3QgYW5kIGludGVydmVuZVxuICAgIC8vIGluIGN5Y2xpY2FsIHJlZGlyZWN0aW9ucyAoaS5lLiwgXCJpbmZpbml0ZVwiIHJlZGlyZWN0aW9uIGxvb3BzKS5cbiAgICBpZiAoKyt0aGlzLl9yZWRpcmVjdENvdW50ID4gdGhpcy5fb3B0aW9ucy5tYXhSZWRpcmVjdHMpIHtcbiAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIk1heCByZWRpcmVjdHMgZXhjZWVkZWQuXCIpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSRkM3MjMxwqc2LjQ6IEF1dG9tYXRpYyByZWRpcmVjdGlvbiBuZWVkcyB0byBkb25lIHdpdGhcbiAgICAvLyBjYXJlIGZvciBtZXRob2RzIG5vdCBrbm93biB0byBiZSBzYWZlIFvigKZdLFxuICAgIC8vIHNpbmNlIHRoZSB1c2VyIG1pZ2h0IG5vdCB3aXNoIHRvIHJlZGlyZWN0IGFuIHVuc2FmZSByZXF1ZXN0LlxuICAgIC8vIFJGQzcyMzHCpzYuNC43OiBUaGUgMzA3IChUZW1wb3JhcnkgUmVkaXJlY3QpIHN0YXR1cyBjb2RlIGluZGljYXRlc1xuICAgIC8vIHRoYXQgdGhlIHRhcmdldCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSVxuICAgIC8vIGFuZCB0aGUgdXNlciBhZ2VudCBNVVNUIE5PVCBjaGFuZ2UgdGhlIHJlcXVlc3QgbWV0aG9kXG4gICAgLy8gaWYgaXQgcGVyZm9ybXMgYW4gYXV0b21hdGljIHJlZGlyZWN0aW9uIHRvIHRoYXQgVVJJLlxuICAgIHZhciBoZWFkZXI7XG4gICAgdmFyIGhlYWRlcnMgPSB0aGlzLl9vcHRpb25zLmhlYWRlcnM7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDMwNyAmJiAhKHRoaXMuX29wdGlvbnMubWV0aG9kIGluIFNBRkVfTUVUSE9EUykpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMubWV0aG9kID0gXCJHRVRcIjtcbiAgICAgIC8vIERyb3AgYSBwb3NzaWJsZSBlbnRpdHkgYW5kIGhlYWRlcnMgcmVsYXRlZCB0byBpdFxuICAgICAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzID0gW107XG4gICAgICBmb3IgKGhlYWRlciBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmICgvXmNvbnRlbnQtL2kudGVzdChoZWFkZXIpKSB7XG4gICAgICAgICAgZGVsZXRlIGhlYWRlcnNbaGVhZGVyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERyb3AgdGhlIEhvc3QgaGVhZGVyLCBhcyB0aGUgcmVkaXJlY3QgbWlnaHQgbGVhZCB0byBhIGRpZmZlcmVudCBob3N0XG4gICAgaWYgKCF0aGlzLl9pc1JlZGlyZWN0KSB7XG4gICAgICBmb3IgKGhlYWRlciBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmICgvXmhvc3QkL2kudGVzdChoZWFkZXIpKSB7XG4gICAgICAgICAgZGVsZXRlIGhlYWRlcnNbaGVhZGVyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gdGhlIHJlZGlyZWN0ZWQgcmVxdWVzdFxuICAgIHZhciByZWRpcmVjdFVybCA9IHVybC5yZXNvbHZlKHRoaXMuX2N1cnJlbnRVcmwsIGxvY2F0aW9uKTtcbiAgICBkZWJ1ZyhcInJlZGlyZWN0aW5nIHRvXCIsIHJlZGlyZWN0VXJsKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIHVybC5wYXJzZShyZWRpcmVjdFVybCkpO1xuICAgIHRoaXMuX2lzUmVkaXJlY3QgPSB0cnVlO1xuICAgIHRoaXMuX3BlcmZvcm1SZXF1ZXN0KCk7XG5cbiAgICAvLyBEaXNjYXJkIHRoZSByZW1haW5kZXIgb2YgdGhlIHJlc3BvbnNlIHRvIGF2b2lkIHdhaXRpbmcgZm9yIGRhdGFcbiAgICByZXNwb25zZS5kZXN0cm95KCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gVGhlIHJlc3BvbnNlIGlzIG5vdCBhIHJlZGlyZWN0OyByZXR1cm4gaXQgYXMtaXNcbiAgICByZXNwb25zZS5yZXNwb25zZVVybCA9IHRoaXMuX2N1cnJlbnRVcmw7XG4gICAgcmVzcG9uc2UucmVkaXJlY3RzID0gdGhpcy5fcmVkaXJlY3RzO1xuICAgIHRoaXMuZW1pdChcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcblxuICAgIC8vIENsZWFuIHVwXG4gICAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzID0gW107XG4gIH1cbn07XG5cbi8vIFdyYXBzIHRoZSBrZXkvdmFsdWUgb2JqZWN0IG9mIHByb3RvY29scyB3aXRoIHJlZGlyZWN0IGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIHdyYXAocHJvdG9jb2xzKSB7XG4gIC8vIERlZmF1bHQgc2V0dGluZ3NcbiAgdmFyIGV4cG9ydHMgPSB7XG4gICAgbWF4UmVkaXJlY3RzOiAyMSxcbiAgICBtYXhCb2R5TGVuZ3RoOiAxMCAqIDEwMjQgKiAxMDI0LFxuICB9O1xuXG4gIC8vIFdyYXAgZWFjaCBwcm90b2NvbFxuICB2YXIgbmF0aXZlUHJvdG9jb2xzID0ge307XG4gIE9iamVjdC5rZXlzKHByb3RvY29scykuZm9yRWFjaChmdW5jdGlvbiAoc2NoZW1lKSB7XG4gICAgdmFyIHByb3RvY29sID0gc2NoZW1lICsgXCI6XCI7XG4gICAgdmFyIG5hdGl2ZVByb3RvY29sID0gbmF0aXZlUHJvdG9jb2xzW3Byb3RvY29sXSA9IHByb3RvY29sc1tzY2hlbWVdO1xuICAgIHZhciB3cmFwcGVkUHJvdG9jb2wgPSBleHBvcnRzW3NjaGVtZV0gPSBPYmplY3QuY3JlYXRlKG5hdGl2ZVByb3RvY29sKTtcblxuICAgIC8vIEV4ZWN1dGVzIGEgcmVxdWVzdCwgZm9sbG93aW5nIHJlZGlyZWN0c1xuICAgIHdyYXBwZWRQcm90b2NvbC5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgb3B0aW9ucyA9IHVybC5wYXJzZShvcHRpb25zKTtcbiAgICAgICAgb3B0aW9ucy5tYXhSZWRpcmVjdHMgPSBleHBvcnRzLm1heFJlZGlyZWN0cztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgcHJvdG9jb2w6IHByb3RvY29sLFxuICAgICAgICAgIG1heFJlZGlyZWN0czogZXhwb3J0cy5tYXhSZWRpcmVjdHMsXG4gICAgICAgICAgbWF4Qm9keUxlbmd0aDogZXhwb3J0cy5tYXhCb2R5TGVuZ3RoLFxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMubmF0aXZlUHJvdG9jb2xzID0gbmF0aXZlUHJvdG9jb2xzO1xuICAgICAgYXNzZXJ0LmVxdWFsKG9wdGlvbnMucHJvdG9jb2wsIHByb3RvY29sLCBcInByb3RvY29sIG1pc21hdGNoXCIpO1xuICAgICAgZGVidWcoXCJvcHRpb25zXCIsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIG5ldyBSZWRpcmVjdGFibGVSZXF1ZXN0KG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgLy8gRXhlY3V0ZXMgYSBHRVQgcmVxdWVzdCwgZm9sbG93aW5nIHJlZGlyZWN0c1xuICAgIHdyYXBwZWRQcm90b2NvbC5nZXQgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gd3JhcHBlZFByb3RvY29sLnJlcXVlc3Qob3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgcmVxdWVzdC5lbmQoKTtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gZXhwb3J0cztcbn1cblxuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB3cmFwKHsgaHR0cDogaHR0cCwgaHR0cHM6IGh0dHBzIH0pO1xubW9kdWxlLmV4cG9ydHMud3JhcCA9IHdyYXA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICovXG5leHBvcnRzLmluc3RhbmNlcyA9IFtdO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICB2YXIgcHJldlRpbWU7XG5cbiAgZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgLy8gZGlzYWJsZWQ/XG4gICAgaWYgKCFkZWJ1Zy5lbmFibGVkKSByZXR1cm47XG5cbiAgICB2YXIgc2VsZiA9IGRlYnVnO1xuXG4gICAgLy8gc2V0IGBkaWZmYCB0aW1lc3RhbXBcbiAgICB2YXIgY3VyciA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG4gICAgc2VsZi5kaWZmID0gbXM7XG4gICAgc2VsZi5wcmV2ID0gcHJldlRpbWU7XG4gICAgc2VsZi5jdXJyID0gY3VycjtcbiAgICBwcmV2VGltZSA9IGN1cnI7XG5cbiAgICAvLyB0dXJuIHRoZSBgYXJndW1lbnRzYCBpbnRvIGEgcHJvcGVyIEFycmF5XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSBleHBvcnRzLmNvZXJjZShhcmdzWzBdKTtcblxuICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICBhcmdzLnVuc2hpZnQoJyVPJyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCBmdW5jdGlvbihtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAvLyBpZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICBpZiAobWF0Y2ggPT09ICclJScpIHJldHVybiBtYXRjaDtcbiAgICAgIGluZGV4Kys7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gZXhwb3J0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZvcm1hdHRlcikge1xuICAgICAgICB2YXIgdmFsID0gYXJnc1tpbmRleF07XG4gICAgICAgIG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuICAgICAgICAvLyBub3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG4gICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcblxuICAgIC8vIGFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG4gICAgZXhwb3J0cy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cbiAgICB2YXIgbG9nRm4gPSBkZWJ1Zy5sb2cgfHwgZXhwb3J0cy5sb2cgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbiAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgfVxuXG4gIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgZGVidWcuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChuYW1lc3BhY2UpO1xuICBkZWJ1Zy51c2VDb2xvcnMgPSBleHBvcnRzLnVzZUNvbG9ycygpO1xuICBkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG4gIGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIGV4cG9ydHMuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHZhciBpbmRleCA9IGV4cG9ydHMuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBleHBvcnRzLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgZXhwb3J0cy5zYXZlKG5hbWVzcGFjZXMpO1xuXG4gIGV4cG9ydHMubmFtZXMgPSBbXTtcbiAgZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4gIHZhciBpO1xuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghc3BsaXRbaV0pIGNvbnRpbnVlOyAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgIGV4cG9ydHMuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhwb3J0cy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBleHBvcnRzLmluc3RhbmNlc1tpXTtcbiAgICBpbnN0YW5jZS5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gIGV4cG9ydHMuZW5hYmxlKCcnKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICBpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDb2VyY2UgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICByZXR1cm4gdmFsO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbXG4gICAgJ2Jhc2VVUkwnLCAndXJsJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLFxuICAgICdtYXhDb250ZW50TGVuZ3RoJywgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLFxuICAgICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnXG4gIF07XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICh1dGlscy5pc09iamVjdChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcbiAgICAuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKVxuICAgIC5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpO1xuXG4gIHZhciBvdGhlcktleXMgPSBPYmplY3RcbiAgICAua2V5cyhjb25maWcyKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBmdW5jdGlvbiBvdGhlcktleXNEZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIlxyXG4vLyBodHRwczovL3d3dy5lZi5jb20vd3dlbi9lbmdsaXNoLXJlc291cmNlcy9lbmdsaXNoLXZvY2FidWxhcnkvdG9wLTMwMDAtd29yZHMvXHJcblxyXG5leHBvcnQgY29uc3QgVGhlTW9zdENvbW1vbjMwMDAgPSB7XHJcbiAgICBhIDogMSxcclxuICAgIGFiYW5kb24gOiAxLFxyXG4gICAgYWJpbGl0eSA6IDEsXHJcbiAgICBhYmxlIDogMSxcclxuICAgIGFib3J0aW9uIDogMSxcclxuICAgIGFib3V0IDogMSxcclxuICAgIGFib3ZlIDogMSxcclxuICAgIGFicm9hZCA6IDEsXHJcbiAgICBhYnNlbmNlIDogMSxcclxuICAgIGFic29sdXRlIDogMSxcclxuICAgIGFic29sdXRlbHkgOiAxLFxyXG4gICAgYWJzb3JiIDogMSxcclxuICAgIGFidXNlIDogMSxcclxuICAgIGFjYWRlbWljIDogMSxcclxuICAgIGFjY2VwdCA6IDEsXHJcbiAgICBhY2Nlc3MgOiAxLFxyXG4gICAgYWNjaWRlbnQgOiAxLFxyXG4gICAgYWNjb21wYW55IDogMSxcclxuICAgIGFjY29tcGxpc2ggOiAxLFxyXG4gICAgYWNjb3JkaW5nIDogMSxcclxuICAgIGFjY291bnQgOiAxLFxyXG4gICAgYWNjdXJhdGUgOiAxLFxyXG4gICAgYWNjdXNlIDogMSxcclxuICAgIGFjaGlldmUgOiAxLFxyXG4gICAgYWNoaWV2ZW1lbnQgOiAxLFxyXG4gICAgYWNpZCA6IDEsXHJcbiAgICBhY2tub3dsZWRnZSA6IDEsXHJcbiAgICBhY3F1aXJlIDogMSxcclxuICAgIGFjcm9zcyA6IDEsXHJcbiAgICBhY3QgOiAxLFxyXG4gICAgYWN0aW9uIDogMSxcclxuICAgIGFjdGl2ZSA6IDEsXHJcbiAgICBhY3RpdmlzdCA6IDEsXHJcbiAgICBhY3Rpdml0eSA6IDEsXHJcbiAgICBhY3RvciA6IDEsXHJcbiAgICBhY3RyZXNzIDogMSxcclxuICAgIGFjdHVhbCA6IDEsXHJcbiAgICBhY3R1YWxseSA6IDEsXHJcbiAgICBhZCA6IDEsXHJcbiAgICBhZGFwdCA6IDEsXHJcbiAgICBhZGQgOiAxLFxyXG4gICAgYWRkaXRpb24gOiAxLFxyXG4gICAgYWRkaXRpb25hbCA6IDEsXHJcbiAgICBhZGRyZXNzIDogMSxcclxuICAgIGFkZXF1YXRlIDogMSxcclxuICAgIGFkanVzdCA6IDEsXHJcbiAgICBhZGp1c3RtZW50IDogMSxcclxuICAgIGFkbWluaXN0cmF0aW9uIDogMSxcclxuICAgIGFkbWluaXN0cmF0b3IgOiAxLFxyXG4gICAgYWRtaXJlIDogMSxcclxuICAgIGFkbWlzc2lvbiA6IDEsXHJcbiAgICBhZG1pdCA6IDEsXHJcbiAgICBhZG9sZXNjZW50IDogMSxcclxuICAgIGFkb3B0IDogMSxcclxuICAgIGFkdWx0IDogMSxcclxuICAgIGFkdmFuY2UgOiAxLFxyXG4gICAgYWR2YW5jZWQgOiAxLFxyXG4gICAgYWR2YW50YWdlIDogMSxcclxuICAgIGFkdmVudHVyZSA6IDEsXHJcbiAgICBhZHZlcnRpc2luZyA6IDEsXHJcbiAgICBhZHZpY2UgOiAxLFxyXG4gICAgYWR2aXNlIDogMSxcclxuICAgIGFkdmlzZXIgOiAxLFxyXG4gICAgYWR2b2NhdGUgOiAxLFxyXG4gICAgYWZmYWlyIDogMSxcclxuICAgIGFmZmVjdCA6IDEsXHJcbiAgICBhZmZvcmQgOiAxLFxyXG4gICAgYWZyYWlkIDogMSxcclxuICAgIEFmcmljYW4gOiAxLFxyXG4gICAgXCJBZnJpY2FuLUFtZXJpY2FuXCIgOiAxLFxyXG4gICAgYWZ0ZXIgOiAxLFxyXG4gICAgYWZ0ZXJub29uIDogMSxcclxuICAgIGFnYWluIDogMSxcclxuICAgIGFnYWluc3QgOiAxLFxyXG4gICAgYWdlIDogMSxcclxuICAgIGFnZW5jeSA6IDEsXHJcbiAgICBhZ2VuZGEgOiAxLFxyXG4gICAgYWdlbnQgOiAxLFxyXG4gICAgYWdncmVzc2l2ZSA6IDEsXHJcbiAgICBhZ28gOiAxLFxyXG4gICAgYWdyZWUgOiAxLFxyXG4gICAgYWdyZWVtZW50IDogMSxcclxuICAgIGFncmljdWx0dXJhbCA6IDEsXHJcbiAgICBhaCA6IDEsXHJcbiAgICBhaGVhZCA6IDEsXHJcbiAgICBhaWQgOiAxLFxyXG4gICAgYWlkZSA6IDEsXHJcbiAgICBBSURTIDogMSxcclxuICAgIGFpbSA6IDEsXHJcbiAgICBhaXIgOiAxLFxyXG4gICAgYWlyY3JhZnQgOiAxLFxyXG4gICAgYWlybGluZSA6IDEsXHJcbiAgICBhaXJwb3J0IDogMSxcclxuICAgIGFsYnVtIDogMSxcclxuICAgIGFsY29ob2wgOiAxLFxyXG4gICAgYWxpdmUgOiAxLFxyXG4gICAgYWxsIDogMSxcclxuICAgIGFsbGlhbmNlIDogMSxcclxuICAgIGFsbG93IDogMSxcclxuICAgIGFsbHkgOiAxLFxyXG4gICAgYWxtb3N0IDogMSxcclxuICAgIGFsb25lIDogMSxcclxuICAgIGFsb25nIDogMSxcclxuICAgIGFscmVhZHkgOiAxLFxyXG4gICAgYWxzbyA6IDEsXHJcbiAgICBhbHRlciA6IDEsXHJcbiAgICBhbHRlcm5hdGl2ZSA6IDEsXHJcbiAgICBhbHRob3VnaCA6IDEsXHJcbiAgICBhbHdheXMgOiAxLFxyXG4gICAgQU0gOiAxLFxyXG4gICAgYW1hemluZyA6IDEsXHJcbiAgICBBbWVyaWNhbiA6IDEsXHJcbiAgICBhbW9uZyA6IDEsXHJcbiAgICBhbW91bnQgOiAxLFxyXG4gICAgYW5hbHlzaXMgOiAxLFxyXG4gICAgYW5hbHlzdCA6IDEsXHJcbiAgICBhbmFseXplIDogMSxcclxuICAgIGFuY2llbnQgOiAxLFxyXG4gICAgYW5kIDogMSxcclxuICAgIGFuZ2VyIDogMSxcclxuICAgIGFuZ2xlIDogMSxcclxuICAgIGFuZ3J5IDogMSxcclxuICAgIGFuaW1hbCA6IDEsXHJcbiAgICBhbm5pdmVyc2FyeSA6IDEsXHJcbiAgICBhbm5vdW5jZSA6IDEsXHJcbiAgICBhbm51YWwgOiAxLFxyXG4gICAgYW5vdGhlciA6IDEsXHJcbiAgICBhbnN3ZXIgOiAxLFxyXG4gICAgYW50aWNpcGF0ZSA6IDEsXHJcbiAgICBhbnhpZXR5IDogMSxcclxuICAgIGFueSA6IDEsXHJcbiAgICBhbnlib2R5IDogMSxcclxuICAgIGFueW1vcmUgOiAxLFxyXG4gICAgYW55b25lIDogMSxcclxuICAgIGFueXRoaW5nIDogMSxcclxuICAgIGFueXdheSA6IDEsXHJcbiAgICBhbnl3aGVyZSA6IDEsXHJcbiAgICBhcGFydCA6IDEsXHJcbiAgICBhcGFydG1lbnQgOiAxLFxyXG4gICAgYXBwYXJlbnQgOiAxLFxyXG4gICAgYXBwYXJlbnRseSA6IDEsXHJcbiAgICBhcHBlYWwgOiAxLFxyXG4gICAgYXBwZWFyIDogMSxcclxuICAgIGFwcGVhcmFuY2UgOiAxLFxyXG4gICAgYXBwbGUgOiAxLFxyXG4gICAgYXBwbGljYXRpb24gOiAxLFxyXG4gICAgYXBwbHkgOiAxLFxyXG4gICAgYXBwb2ludCA6IDEsXHJcbiAgICBhcHBvaW50bWVudCA6IDEsXHJcbiAgICBhcHByZWNpYXRlIDogMSxcclxuICAgIGFwcHJvYWNoIDogMSxcclxuICAgIGFwcHJvcHJpYXRlIDogMSxcclxuICAgIGFwcHJvdmFsIDogMSxcclxuICAgIGFwcHJvdmUgOiAxLFxyXG4gICAgYXBwcm94aW1hdGVseSA6IDEsXHJcbiAgICBBcmFiIDogMSxcclxuICAgIGFyY2hpdGVjdCA6IDEsXHJcbiAgICBhcmVhIDogMSxcclxuICAgIGFyZ3VlIDogMSxcclxuICAgIGFyZ3VtZW50IDogMSxcclxuICAgIGFyaXNlIDogMSxcclxuICAgIGFybSA6IDEsXHJcbiAgICBhcm1lZCA6IDEsXHJcbiAgICBhcm15IDogMSxcclxuICAgIGFyb3VuZCA6IDEsXHJcbiAgICBhcnJhbmdlIDogMSxcclxuICAgIGFycmFuZ2VtZW50IDogMSxcclxuICAgIGFycmVzdCA6IDEsXHJcbiAgICBhcnJpdmFsIDogMSxcclxuICAgIGFycml2ZSA6IDEsXHJcbiAgICBhcnQgOiAxLFxyXG4gICAgYXJ0aWNsZSA6IDEsXHJcbiAgICBhcnRpc3QgOiAxLFxyXG4gICAgYXJ0aXN0aWMgOiAxLFxyXG4gICAgYXMgOiAxLFxyXG4gICAgQXNpYW4gOiAxLFxyXG4gICAgYXNpZGUgOiAxLFxyXG4gICAgYXNrIDogMSxcclxuICAgIGFzbGVlcCA6IDEsXHJcbiAgICBhc3BlY3QgOiAxLFxyXG4gICAgYXNzYXVsdCA6IDEsXHJcbiAgICBhc3NlcnQgOiAxLFxyXG4gICAgYXNzZXNzIDogMSxcclxuICAgIGFzc2Vzc21lbnQgOiAxLFxyXG4gICAgYXNzZXQgOiAxLFxyXG4gICAgYXNzaWduIDogMSxcclxuICAgIGFzc2lnbm1lbnQgOiAxLFxyXG4gICAgYXNzaXN0IDogMSxcclxuICAgIGFzc2lzdGFuY2UgOiAxLFxyXG4gICAgYXNzaXN0YW50IDogMSxcclxuICAgIGFzc29jaWF0ZSA6IDEsXHJcbiAgICBhc3NvY2lhdGlvbiA6IDEsXHJcbiAgICBhc3N1bWUgOiAxLFxyXG4gICAgYXNzdW1wdGlvbiA6IDEsXHJcbiAgICBhc3N1cmUgOiAxLFxyXG4gICAgYXQgOiAxLFxyXG4gICAgYXRobGV0ZSA6IDEsXHJcbiAgICBhdGhsZXRpYyA6IDEsXHJcbiAgICBhdG1vc3BoZXJlIDogMSxcclxuICAgIGF0dGFjaCA6IDEsXHJcbiAgICBhdHRhY2sgOiAxLFxyXG4gICAgYXR0ZW1wdCA6IDEsXHJcbiAgICBhdHRlbmQgOiAxLFxyXG4gICAgYXR0ZW50aW9uIDogMSxcclxuICAgIGF0dGl0dWRlIDogMSxcclxuICAgIGF0dG9ybmV5IDogMSxcclxuICAgIGF0dHJhY3QgOiAxLFxyXG4gICAgYXR0cmFjdGl2ZSA6IDEsXHJcbiAgICBhdHRyaWJ1dGUgOiAxLFxyXG4gICAgYXVkaWVuY2UgOiAxLFxyXG4gICAgYXV0aG9yIDogMSxcclxuICAgIGF1dGhvcml0eSA6IDEsXHJcbiAgICBhdXRvIDogMSxcclxuICAgIGF2YWlsYWJsZSA6IDEsXHJcbiAgICBhdmVyYWdlIDogMSxcclxuICAgIGF2b2lkIDogMSxcclxuICAgIGF3YXJkIDogMSxcclxuICAgIGF3YXJlIDogMSxcclxuICAgIGF3YXJlbmVzcyA6IDEsXHJcbiAgICBhd2F5IDogMSxcclxuICAgIGF3ZnVsIDogMSxcclxuICAgIGJhYnkgOiAxLFxyXG4gICAgYmFjayA6IDEsXHJcbiAgICBiYWNrZ3JvdW5kIDogMSxcclxuICAgIGJhZCA6IDEsXHJcbiAgICBiYWRseSA6IDEsXHJcbiAgICBiYWcgOiAxLFxyXG4gICAgYmFrZSA6IDEsXHJcbiAgICBiYWxhbmNlIDogMSxcclxuICAgIGJhbGwgOiAxLFxyXG4gICAgYmFuIDogMSxcclxuICAgIGJhbmQgOiAxLFxyXG4gICAgYmFuayA6IDEsXHJcbiAgICBiYXIgOiAxLFxyXG4gICAgYmFyZWx5IDogMSxcclxuICAgIGJhcnJlbCA6IDEsXHJcbiAgICBiYXJyaWVyIDogMSxcclxuICAgIGJhc2UgOiAxLFxyXG4gICAgYmFzZWJhbGwgOiAxLFxyXG4gICAgYmFzaWMgOiAxLFxyXG4gICAgYmFzaWNhbGx5IDogMSxcclxuICAgIGJhc2lzIDogMSxcclxuICAgIGJhc2tldCA6IDEsXHJcbiAgICBiYXNrZXRiYWxsIDogMSxcclxuICAgIGJhdGhyb29tIDogMSxcclxuICAgIGJhdHRlcnkgOiAxLFxyXG4gICAgYmF0dGxlIDogMSxcclxuICAgIGJlIDogMSxcclxuICAgIGJlYWNoIDogMSxcclxuICAgIGJlYW4gOiAxLFxyXG4gICAgYmVhciA6IDEsXHJcbiAgICBiZWF0IDogMSxcclxuICAgIGJlYXV0aWZ1bCA6IDEsXHJcbiAgICBiZWF1dHkgOiAxLFxyXG4gICAgYmVjYXVzZSA6IDEsXHJcbiAgICBiZWNvbWUgOiAxLFxyXG4gICAgYmVkIDogMSxcclxuICAgIGJlZHJvb20gOiAxLFxyXG4gICAgYmVlciA6IDEsXHJcbiAgICBiZWZvcmUgOiAxLFxyXG4gICAgYmVnaW4gOiAxLFxyXG4gICAgYmVnaW5uaW5nIDogMSxcclxuICAgIGJlaGF2aW9yIDogMSxcclxuICAgIGJlaGluZCA6IDEsXHJcbiAgICBiZWluZyA6IDEsXHJcbiAgICBiZWxpZWYgOiAxLFxyXG4gICAgYmVsaWV2ZSA6IDEsXHJcbiAgICBiZWxsIDogMSxcclxuICAgIGJlbG9uZyA6IDEsXHJcbiAgICBiZWxvdyA6IDEsXHJcbiAgICBiZWx0IDogMSxcclxuICAgIGJlbmNoIDogMSxcclxuICAgIGJlbmQgOiAxLFxyXG4gICAgYmVuZWF0aCA6IDEsXHJcbiAgICBiZW5lZml0IDogMSxcclxuICAgIGJlc2lkZSA6IDEsXHJcbiAgICBiZXNpZGVzIDogMSxcclxuICAgIGJlc3QgOiAxLFxyXG4gICAgYmV0IDogMSxcclxuICAgIGJldHRlciA6IDEsXHJcbiAgICBiZXR3ZWVuIDogMSxcclxuICAgIGJleW9uZCA6IDEsXHJcbiAgICBCaWJsZSA6IDEsXHJcbiAgICBiaWcgOiAxLFxyXG4gICAgYmlrZSA6IDEsXHJcbiAgICBiaWxsIDogMSxcclxuICAgIGJpbGxpb24gOiAxLFxyXG4gICAgYmluZCA6IDEsXHJcbiAgICBiaW9sb2dpY2FsIDogMSxcclxuICAgIGJpcmQgOiAxLFxyXG4gICAgYmlydGggOiAxLFxyXG4gICAgYmlydGhkYXkgOiAxLFxyXG4gICAgYml0IDogMSxcclxuICAgIGJpdGUgOiAxLFxyXG4gICAgYmxhY2sgOiAxLFxyXG4gICAgYmxhZGUgOiAxLFxyXG4gICAgYmxhbWUgOiAxLFxyXG4gICAgYmxhbmtldCA6IDEsXHJcbiAgICBibGluZCA6IDEsXHJcbiAgICBibG9jayA6IDEsXHJcbiAgICBibG9vZCA6IDEsXHJcbiAgICBibG93IDogMSxcclxuICAgIGJsdWUgOiAxLFxyXG4gICAgYm9hcmQgOiAxLFxyXG4gICAgYm9hdCA6IDEsXHJcbiAgICBib2R5IDogMSxcclxuICAgIGJvbWIgOiAxLFxyXG4gICAgYm9tYmluZyA6IDEsXHJcbiAgICBib25kIDogMSxcclxuICAgIGJvbmUgOiAxLFxyXG4gICAgYm9vayA6IDEsXHJcbiAgICBib29tIDogMSxcclxuICAgIGJvb3QgOiAxLFxyXG4gICAgYm9yZGVyIDogMSxcclxuICAgIGJvcm4gOiAxLFxyXG4gICAgYm9ycm93IDogMSxcclxuICAgIGJvc3MgOiAxLFxyXG4gICAgYm90aCA6IDEsXHJcbiAgICBib3RoZXIgOiAxLFxyXG4gICAgYm90dGxlIDogMSxcclxuICAgIGJvdHRvbSA6IDEsXHJcbiAgICBib3VuZGFyeSA6IDEsXHJcbiAgICBib3dsIDogMSxcclxuICAgIGJveCA6IDEsXHJcbiAgICBib3kgOiAxLFxyXG4gICAgYm95ZnJpZW5kIDogMSxcclxuICAgIGJyYWluIDogMSxcclxuICAgIGJyYW5jaCA6IDEsXHJcbiAgICBicmFuZCA6IDEsXHJcbiAgICBicmVhZCA6IDEsXHJcbiAgICBicmVhayA6IDEsXHJcbiAgICBicmVha2Zhc3QgOiAxLFxyXG4gICAgYnJlYXN0IDogMSxcclxuICAgIGJyZWF0aCA6IDEsXHJcbiAgICBicmVhdGhlIDogMSxcclxuICAgIGJyaWNrIDogMSxcclxuICAgIGJyaWRnZSA6IDEsXHJcbiAgICBicmllZiA6IDEsXHJcbiAgICBicmllZmx5IDogMSxcclxuICAgIGJyaWdodCA6IDEsXHJcbiAgICBicmlsbGlhbnQgOiAxLFxyXG4gICAgYnJpbmcgOiAxLFxyXG4gICAgQnJpdGlzaCA6IDEsXHJcbiAgICBicm9hZCA6IDEsXHJcbiAgICBicm9rZW4gOiAxLFxyXG4gICAgYnJvdGhlciA6IDEsXHJcbiAgICBicm93biA6IDEsXHJcbiAgICBicnVzaCA6IDEsXHJcbiAgICBidWNrIDogMSxcclxuICAgIGJ1ZGdldCA6IDEsXHJcbiAgICBidWlsZCA6IDEsXHJcbiAgICBidWlsZGluZyA6IDEsXHJcbiAgICBidWxsZXQgOiAxLFxyXG4gICAgYnVuY2ggOiAxLFxyXG4gICAgYnVyZGVuIDogMSxcclxuICAgIGJ1cm4gOiAxLFxyXG4gICAgYnVyeSA6IDEsXHJcbiAgICBidXMgOiAxLFxyXG4gICAgYnVzaW5lc3MgOiAxLFxyXG4gICAgYnVzeSA6IDEsXHJcbiAgICBidXQgOiAxLFxyXG4gICAgYnV0dGVyIDogMSxcclxuICAgIGJ1dHRvbiA6IDEsXHJcbiAgICBidXkgOiAxLFxyXG4gICAgYnV5ZXIgOiAxLFxyXG4gICAgYnkgOiAxLFxyXG4gICAgY2FiaW4gOiAxLFxyXG4gICAgY2FiaW5ldCA6IDEsXHJcbiAgICBjYWJsZSA6IDEsXHJcbiAgICBjYWtlIDogMSxcclxuICAgIGNhbGN1bGF0ZSA6IDEsXHJcbiAgICBjYWxsIDogMSxcclxuICAgIGNhbWVyYSA6IDEsXHJcbiAgICBjYW1wIDogMSxcclxuICAgIGNhbXBhaWduIDogMSxcclxuICAgIGNhbXB1cyA6IDEsXHJcbiAgICBjYW4gOiAxLFxyXG4gICAgQ2FuYWRpYW4gOiAxLFxyXG4gICAgY2FuY2VyIDogMSxcclxuICAgIGNhbmRpZGF0ZSA6IDEsXHJcbiAgICBjYXAgOiAxLFxyXG4gICAgY2FwYWJpbGl0eSA6IDEsXHJcbiAgICBjYXBhYmxlIDogMSxcclxuICAgIGNhcGFjaXR5IDogMSxcclxuICAgIGNhcGl0YWwgOiAxLFxyXG4gICAgY2FwdGFpbiA6IDEsXHJcbiAgICBjYXB0dXJlIDogMSxcclxuICAgIGNhciA6IDEsXHJcbiAgICBjYXJib24gOiAxLFxyXG4gICAgY2FyZCA6IDEsXHJcbiAgICBjYXJlIDogMSxcclxuICAgIGNhcmVlciA6IDEsXHJcbiAgICBjYXJlZnVsIDogMSxcclxuICAgIGNhcmVmdWxseSA6IDEsXHJcbiAgICBjYXJyaWVyIDogMSxcclxuICAgIGNhcnJ5IDogMSxcclxuICAgIGNhc2UgOiAxLFxyXG4gICAgY2FzaCA6IDEsXHJcbiAgICBjYXN0IDogMSxcclxuICAgIGNhdCA6IDEsXHJcbiAgICBjYXRjaCA6IDEsXHJcbiAgICBjYXRlZ29yeSA6IDEsXHJcbiAgICBDYXRob2xpYyA6IDEsXHJcbiAgICBjYXVzZSA6IDEsXHJcbiAgICBjZWlsaW5nIDogMSxcclxuICAgIGNlbGVicmF0ZSA6IDEsXHJcbiAgICBjZWxlYnJhdGlvbiA6IDEsXHJcbiAgICBjZWxlYnJpdHkgOiAxLFxyXG4gICAgY2VsbCA6IDEsXHJcbiAgICBjZW50ZXIgOiAxLFxyXG4gICAgY2VudHJhbCA6IDEsXHJcbiAgICBjZW50dXJ5IDogMSxcclxuICAgIENFTyA6IDEsXHJcbiAgICBjZXJlbW9ueSA6IDEsXHJcbiAgICBjZXJ0YWluIDogMSxcclxuICAgIGNlcnRhaW5seSA6IDEsXHJcbiAgICBjaGFpbiA6IDEsXHJcbiAgICBjaGFpciA6IDEsXHJcbiAgICBjaGFpcm1hbiA6IDEsXHJcbiAgICBjaGFsbGVuZ2UgOiAxLFxyXG4gICAgY2hhbWJlciA6IDEsXHJcbiAgICBjaGFtcGlvbiA6IDEsXHJcbiAgICBjaGFtcGlvbnNoaXAgOiAxLFxyXG4gICAgY2hhbmNlIDogMSxcclxuICAgIGNoYW5nZSA6IDEsXHJcbiAgICBjaGFuZ2luZyA6IDEsXHJcbiAgICBjaGFubmVsIDogMSxcclxuICAgIGNoYXB0ZXIgOiAxLFxyXG4gICAgY2hhcmFjdGVyIDogMSxcclxuICAgIGNoYXJhY3RlcmlzdGljIDogMSxcclxuICAgIGNoYXJhY3Rlcml6ZSA6IDEsXHJcbiAgICBjaGFyZ2UgOiAxLFxyXG4gICAgY2hhcml0eSA6IDEsXHJcbiAgICBjaGFydCA6IDEsXHJcbiAgICBjaGFzZSA6IDEsXHJcbiAgICBjaGVhcCA6IDEsXHJcbiAgICBjaGVjayA6IDEsXHJcbiAgICBjaGVlayA6IDEsXHJcbiAgICBjaGVlc2UgOiAxLFxyXG4gICAgY2hlZiA6IDEsXHJcbiAgICBjaGVtaWNhbCA6IDEsXHJcbiAgICBjaGVzdCA6IDEsXHJcbiAgICBjaGlja2VuIDogMSxcclxuICAgIGNoaWVmIDogMSxcclxuICAgIGNoaWxkIDogMSxcclxuICAgIGNoaWxkaG9vZCA6IDEsXHJcbiAgICBDaGluZXNlIDogMSxcclxuICAgIGNoaXAgOiAxLFxyXG4gICAgY2hvY29sYXRlIDogMSxcclxuICAgIGNob2ljZSA6IDEsXHJcbiAgICBjaG9sZXN0ZXJvbCA6IDEsXHJcbiAgICBjaG9vc2UgOiAxLFxyXG4gICAgQ2hyaXN0aWFuIDogMSxcclxuICAgIENocmlzdG1hcyA6IDEsXHJcbiAgICBjaHVyY2ggOiAxLFxyXG4gICAgY2lnYXJldHRlIDogMSxcclxuICAgIGNpcmNsZSA6IDEsXHJcbiAgICBjaXJjdW1zdGFuY2UgOiAxLFxyXG4gICAgY2l0ZSA6IDEsXHJcbiAgICBjaXRpemVuIDogMSxcclxuICAgIGNpdHkgOiAxLFxyXG4gICAgY2l2aWwgOiAxLFxyXG4gICAgY2l2aWxpYW4gOiAxLFxyXG4gICAgY2xhaW0gOiAxLFxyXG4gICAgY2xhc3MgOiAxLFxyXG4gICAgY2xhc3NpYyA6IDEsXHJcbiAgICBjbGFzc3Jvb20gOiAxLFxyXG4gICAgY2xlYW4gOiAxLFxyXG4gICAgY2xlYXIgOiAxLFxyXG4gICAgY2xlYXJseSA6IDEsXHJcbiAgICBjbGllbnQgOiAxLFxyXG4gICAgY2xpbWF0ZSA6IDEsXHJcbiAgICBjbGltYiA6IDEsXHJcbiAgICBjbGluaWMgOiAxLFxyXG4gICAgY2xpbmljYWwgOiAxLFxyXG4gICAgY2xvY2sgOiAxLFxyXG4gICAgY2xvc2UgOiAxLFxyXG4gICAgY2xvc2VseSA6IDEsXHJcbiAgICBjbG9zZXIgOiAxLFxyXG4gICAgY2xvdGhlcyA6IDEsXHJcbiAgICBjbG90aGluZyA6IDEsXHJcbiAgICBjbG91ZCA6IDEsXHJcbiAgICBjbHViIDogMSxcclxuICAgIGNsdWUgOiAxLFxyXG4gICAgY2x1c3RlciA6IDEsXHJcbiAgICBjb2FjaCA6IDEsXHJcbiAgICBjb2FsIDogMSxcclxuICAgIGNvYWxpdGlvbiA6IDEsXHJcbiAgICBjb2FzdCA6IDEsXHJcbiAgICBjb2F0IDogMSxcclxuICAgIGNvZGUgOiAxLFxyXG4gICAgY29mZmVlIDogMSxcclxuICAgIGNvZ25pdGl2ZSA6IDEsXHJcbiAgICBjb2xkIDogMSxcclxuICAgIGNvbGxhcHNlIDogMSxcclxuICAgIGNvbGxlYWd1ZSA6IDEsXHJcbiAgICBjb2xsZWN0IDogMSxcclxuICAgIGNvbGxlY3Rpb24gOiAxLFxyXG4gICAgY29sbGVjdGl2ZSA6IDEsXHJcbiAgICBjb2xsZWdlIDogMSxcclxuICAgIGNvbG9uaWFsIDogMSxcclxuICAgIGNvbG9yIDogMSxcclxuICAgIGNvbHVtbiA6IDEsXHJcbiAgICBjb21iaW5hdGlvbiA6IDEsXHJcbiAgICBjb21iaW5lIDogMSxcclxuICAgIGNvbWUgOiAxLFxyXG4gICAgY29tZWR5IDogMSxcclxuICAgIGNvbWZvcnQgOiAxLFxyXG4gICAgY29tZm9ydGFibGUgOiAxLFxyXG4gICAgY29tbWFuZCA6IDEsXHJcbiAgICBjb21tYW5kZXIgOiAxLFxyXG4gICAgY29tbWVudCA6IDEsXHJcbiAgICBjb21tZXJjaWFsIDogMSxcclxuICAgIGNvbW1pc3Npb24gOiAxLFxyXG4gICAgY29tbWl0IDogMSxcclxuICAgIGNvbW1pdG1lbnQgOiAxLFxyXG4gICAgY29tbWl0dGVlIDogMSxcclxuICAgIGNvbW1vbiA6IDEsXHJcbiAgICBjb21tdW5pY2F0ZSA6IDEsXHJcbiAgICBjb21tdW5pY2F0aW9uIDogMSxcclxuICAgIGNvbW11bml0eSA6IDEsXHJcbiAgICBjb21wYW55IDogMSxcclxuICAgIGNvbXBhcmUgOiAxLFxyXG4gICAgY29tcGFyaXNvbiA6IDEsXHJcbiAgICBjb21wZXRlIDogMSxcclxuICAgIGNvbXBldGl0aW9uIDogMSxcclxuICAgIGNvbXBldGl0aXZlIDogMSxcclxuICAgIGNvbXBldGl0b3IgOiAxLFxyXG4gICAgY29tcGxhaW4gOiAxLFxyXG4gICAgY29tcGxhaW50IDogMSxcclxuICAgIGNvbXBsZXRlIDogMSxcclxuICAgIGNvbXBsZXRlbHkgOiAxLFxyXG4gICAgY29tcGxleCA6IDEsXHJcbiAgICBjb21wbGljYXRlZCA6IDEsXHJcbiAgICBjb21wb25lbnQgOiAxLFxyXG4gICAgY29tcG9zZSA6IDEsXHJcbiAgICBjb21wb3NpdGlvbiA6IDEsXHJcbiAgICBjb21wcmVoZW5zaXZlIDogMSxcclxuICAgIGNvbXB1dGVyIDogMSxcclxuICAgIGNvbmNlbnRyYXRlIDogMSxcclxuICAgIGNvbmNlbnRyYXRpb24gOiAxLFxyXG4gICAgY29uY2VwdCA6IDEsXHJcbiAgICBjb25jZXJuIDogMSxcclxuICAgIGNvbmNlcm5lZCA6IDEsXHJcbiAgICBjb25jZXJ0IDogMSxcclxuICAgIGNvbmNsdWRlIDogMSxcclxuICAgIGNvbmNsdXNpb24gOiAxLFxyXG4gICAgY29uY3JldGUgOiAxLFxyXG4gICAgY29uZGl0aW9uIDogMSxcclxuICAgIGNvbmR1Y3QgOiAxLFxyXG4gICAgY29uZmVyZW5jZSA6IDEsXHJcbiAgICBjb25maWRlbmNlIDogMSxcclxuICAgIGNvbmZpZGVudCA6IDEsXHJcbiAgICBjb25maXJtIDogMSxcclxuICAgIGNvbmZsaWN0IDogMSxcclxuICAgIGNvbmZyb250IDogMSxcclxuICAgIGNvbmZ1c2lvbiA6IDEsXHJcbiAgICBDb25ncmVzcyA6IDEsXHJcbiAgICBjb25ncmVzc2lvbmFsIDogMSxcclxuICAgIGNvbm5lY3QgOiAxLFxyXG4gICAgY29ubmVjdGlvbiA6IDEsXHJcbiAgICBjb25zY2lvdXNuZXNzIDogMSxcclxuICAgIGNvbnNlbnN1cyA6IDEsXHJcbiAgICBjb25zZXF1ZW5jZSA6IDEsXHJcbiAgICBjb25zZXJ2YXRpdmUgOiAxLFxyXG4gICAgY29uc2lkZXIgOiAxLFxyXG4gICAgY29uc2lkZXJhYmxlIDogMSxcclxuICAgIGNvbnNpZGVyYXRpb24gOiAxLFxyXG4gICAgY29uc2lzdCA6IDEsXHJcbiAgICBjb25zaXN0ZW50IDogMSxcclxuICAgIGNvbnN0YW50IDogMSxcclxuICAgIGNvbnN0YW50bHkgOiAxLFxyXG4gICAgY29uc3RpdHV0ZSA6IDEsXHJcbiAgICBjb25zdGl0dXRpb25hbCA6IDEsXHJcbiAgICBjb25zdHJ1Y3QgOiAxLFxyXG4gICAgY29uc3RydWN0aW9uIDogMSxcclxuICAgIGNvbnN1bHRhbnQgOiAxLFxyXG4gICAgY29uc3VtZSA6IDEsXHJcbiAgICBjb25zdW1lciA6IDEsXHJcbiAgICBjb25zdW1wdGlvbiA6IDEsXHJcbiAgICBjb250YWN0IDogMSxcclxuICAgIGNvbnRhaW4gOiAxLFxyXG4gICAgY29udGFpbmVyIDogMSxcclxuICAgIGNvbnRlbXBvcmFyeSA6IDEsXHJcbiAgICBjb250ZW50IDogMSxcclxuICAgIGNvbnRlc3QgOiAxLFxyXG4gICAgY29udGV4dCA6IDEsXHJcbiAgICBjb250aW51ZSA6IDEsXHJcbiAgICBjb250aW51ZWQgOiAxLFxyXG4gICAgY29udHJhY3QgOiAxLFxyXG4gICAgY29udHJhc3QgOiAxLFxyXG4gICAgY29udHJpYnV0ZSA6IDEsXHJcbiAgICBjb250cmlidXRpb24gOiAxLFxyXG4gICAgY29udHJvbCA6IDEsXHJcbiAgICBjb250cm92ZXJzaWFsIDogMSxcclxuICAgIGNvbnRyb3ZlcnN5IDogMSxcclxuICAgIGNvbnZlbnRpb24gOiAxLFxyXG4gICAgY29udmVudGlvbmFsIDogMSxcclxuICAgIGNvbnZlcnNhdGlvbiA6IDEsXHJcbiAgICBjb252ZXJ0IDogMSxcclxuICAgIGNvbnZpY3Rpb24gOiAxLFxyXG4gICAgY29udmluY2UgOiAxLFxyXG4gICAgY29vayA6IDEsXHJcbiAgICBjb29raWUgOiAxLFxyXG4gICAgY29va2luZyA6IDEsXHJcbiAgICBjb29sIDogMSxcclxuICAgIGNvb3BlcmF0aW9uIDogMSxcclxuICAgIGNvcCA6IDEsXHJcbiAgICBjb3BlIDogMSxcclxuICAgIGNvcHkgOiAxLFxyXG4gICAgY29yZSA6IDEsXHJcbiAgICBjb3JuIDogMSxcclxuICAgIGNvcm5lciA6IDEsXHJcbiAgICBjb3Jwb3JhdGUgOiAxLFxyXG4gICAgY29ycG9yYXRpb24gOiAxLFxyXG4gICAgY29ycmVjdCA6IDEsXHJcbiAgICBjb3JyZXNwb25kZW50IDogMSxcclxuICAgIGNvc3QgOiAxLFxyXG4gICAgY290dG9uIDogMSxcclxuICAgIGNvdWNoIDogMSxcclxuICAgIGNvdWxkIDogMSxcclxuICAgIGNvdW5jaWwgOiAxLFxyXG4gICAgY291bnNlbG9yIDogMSxcclxuICAgIGNvdW50IDogMSxcclxuICAgIGNvdW50ZXIgOiAxLFxyXG4gICAgY291bnRyeSA6IDEsXHJcbiAgICBjb3VudHkgOiAxLFxyXG4gICAgY291cGxlIDogMSxcclxuICAgIGNvdXJhZ2UgOiAxLFxyXG4gICAgY291cnNlIDogMSxcclxuICAgIGNvdXJ0IDogMSxcclxuICAgIGNvdXNpbiA6IDEsXHJcbiAgICBjb3ZlciA6IDEsXHJcbiAgICBjb3ZlcmFnZSA6IDEsXHJcbiAgICBjb3cgOiAxLFxyXG4gICAgY3JhY2sgOiAxLFxyXG4gICAgY3JhZnQgOiAxLFxyXG4gICAgY3Jhc2ggOiAxLFxyXG4gICAgY3JhenkgOiAxLFxyXG4gICAgY3JlYW0gOiAxLFxyXG4gICAgY3JlYXRlIDogMSxcclxuICAgIGNyZWF0aW9uIDogMSxcclxuICAgIGNyZWF0aXZlIDogMSxcclxuICAgIGNyZWF0dXJlIDogMSxcclxuICAgIGNyZWRpdCA6IDEsXHJcbiAgICBjcmV3IDogMSxcclxuICAgIGNyaW1lIDogMSxcclxuICAgIGNyaW1pbmFsIDogMSxcclxuICAgIGNyaXNpcyA6IDEsXHJcbiAgICBjcml0ZXJpYSA6IDEsXHJcbiAgICBjcml0aWMgOiAxLFxyXG4gICAgY3JpdGljYWwgOiAxLFxyXG4gICAgY3JpdGljaXNtIDogMSxcclxuICAgIGNyaXRpY2l6ZSA6IDEsXHJcbiAgICBjcm9wIDogMSxcclxuICAgIGNyb3NzIDogMSxcclxuICAgIGNyb3dkIDogMSxcclxuICAgIGNydWNpYWwgOiAxLFxyXG4gICAgY3J5IDogMSxcclxuICAgIGN1bHR1cmFsIDogMSxcclxuICAgIGN1bHR1cmUgOiAxLFxyXG4gICAgY3VwIDogMSxcclxuICAgIGN1cmlvdXMgOiAxLFxyXG4gICAgY3VycmVudCA6IDEsXHJcbiAgICBjdXJyZW50bHkgOiAxLFxyXG4gICAgY3VycmljdWx1bSA6IDEsXHJcbiAgICBjdXN0b20gOiAxLFxyXG4gICAgY3VzdG9tZXIgOiAxLFxyXG4gICAgY3V0IDogMSxcclxuICAgIGN5Y2xlIDogMSxcclxuICAgIGRhZCA6IDEsXHJcbiAgICBkYWlseSA6IDEsXHJcbiAgICBkYW1hZ2UgOiAxLFxyXG4gICAgZGFuY2UgOiAxLFxyXG4gICAgZGFuZ2VyIDogMSxcclxuICAgIGRhbmdlcm91cyA6IDEsXHJcbiAgICBkYXJlIDogMSxcclxuICAgIGRhcmsgOiAxLFxyXG4gICAgZGFya25lc3MgOiAxLFxyXG4gICAgZGF0YSA6IDEsXHJcbiAgICBkYXRlIDogMSxcclxuICAgIGRhdWdodGVyIDogMSxcclxuICAgIGRheSA6IDEsXHJcbiAgICBkZWFkIDogMSxcclxuICAgIGRlYWwgOiAxLFxyXG4gICAgZGVhbGVyIDogMSxcclxuICAgIGRlYXIgOiAxLFxyXG4gICAgZGVhdGggOiAxLFxyXG4gICAgZGViYXRlIDogMSxcclxuICAgIGRlYnQgOiAxLFxyXG4gICAgZGVjYWRlIDogMSxcclxuICAgIGRlY2lkZSA6IDEsXHJcbiAgICBkZWNpc2lvbiA6IDEsXHJcbiAgICBkZWNrIDogMSxcclxuICAgIGRlY2xhcmUgOiAxLFxyXG4gICAgZGVjbGluZSA6IDEsXHJcbiAgICBkZWNyZWFzZSA6IDEsXHJcbiAgICBkZWVwIDogMSxcclxuICAgIGRlZXBseSA6IDEsXHJcbiAgICBkZWVyIDogMSxcclxuICAgIGRlZmVhdCA6IDEsXHJcbiAgICBkZWZlbmQgOiAxLFxyXG4gICAgZGVmZW5kYW50IDogMSxcclxuICAgIGRlZmVuc2UgOiAxLFxyXG4gICAgZGVmZW5zaXZlIDogMSxcclxuICAgIGRlZmljaXQgOiAxLFxyXG4gICAgZGVmaW5lIDogMSxcclxuICAgIGRlZmluaXRlbHkgOiAxLFxyXG4gICAgZGVmaW5pdGlvbiA6IDEsXHJcbiAgICBkZWdyZWUgOiAxLFxyXG4gICAgZGVsYXkgOiAxLFxyXG4gICAgZGVsaXZlciA6IDEsXHJcbiAgICBkZWxpdmVyeSA6IDEsXHJcbiAgICBkZW1hbmQgOiAxLFxyXG4gICAgZGVtb2NyYWN5IDogMSxcclxuICAgIERlbW9jcmF0IDogMSxcclxuICAgIGRlbW9jcmF0aWMgOiAxLFxyXG4gICAgZGVtb25zdHJhdGUgOiAxLFxyXG4gICAgZGVtb25zdHJhdGlvbiA6IDEsXHJcbiAgICBkZW55IDogMSxcclxuICAgIGRlcGFydG1lbnQgOiAxLFxyXG4gICAgZGVwZW5kIDogMSxcclxuICAgIGRlcGVuZGVudCA6IDEsXHJcbiAgICBkZXBlbmRpbmcgOiAxLFxyXG4gICAgZGVwaWN0IDogMSxcclxuICAgIGRlcHJlc3Npb24gOiAxLFxyXG4gICAgZGVwdGggOiAxLFxyXG4gICAgZGVwdXR5IDogMSxcclxuICAgIGRlcml2ZSA6IDEsXHJcbiAgICBkZXNjcmliZSA6IDEsXHJcbiAgICBkZXNjcmlwdGlvbiA6IDEsXHJcbiAgICBkZXNlcnQgOiAxLFxyXG4gICAgZGVzZXJ2ZSA6IDEsXHJcbiAgICBkZXNpZ24gOiAxLFxyXG4gICAgZGVzaWduZXIgOiAxLFxyXG4gICAgZGVzaXJlIDogMSxcclxuICAgIGRlc2sgOiAxLFxyXG4gICAgZGVzcGVyYXRlIDogMSxcclxuICAgIGRlc3BpdGUgOiAxLFxyXG4gICAgZGVzdHJveSA6IDEsXHJcbiAgICBkZXN0cnVjdGlvbiA6IDEsXHJcbiAgICBkZXRhaWwgOiAxLFxyXG4gICAgZGV0YWlsZWQgOiAxLFxyXG4gICAgZGV0ZWN0IDogMSxcclxuICAgIGRldGVybWluZSA6IDEsXHJcbiAgICBkZXZlbG9wIDogMSxcclxuICAgIGRldmVsb3BpbmcgOiAxLFxyXG4gICAgZGV2ZWxvcG1lbnQgOiAxLFxyXG4gICAgZGV2aWNlIDogMSxcclxuICAgIGRldm90ZSA6IDEsXHJcbiAgICBkaWFsb2d1ZSA6IDEsXHJcbiAgICBkaWUgOiAxLFxyXG4gICAgZGlldCA6IDEsXHJcbiAgICBkaWZmZXIgOiAxLFxyXG4gICAgZGlmZmVyZW5jZSA6IDEsXHJcbiAgICBkaWZmZXJlbnQgOiAxLFxyXG4gICAgZGlmZmVyZW50bHkgOiAxLFxyXG4gICAgZGlmZmljdWx0IDogMSxcclxuICAgIGRpZmZpY3VsdHkgOiAxLFxyXG4gICAgZGlnIDogMSxcclxuICAgIGRpZ2l0YWwgOiAxLFxyXG4gICAgZGltZW5zaW9uIDogMSxcclxuICAgIGRpbmluZyA6IDEsXHJcbiAgICBkaW5uZXIgOiAxLFxyXG4gICAgZGlyZWN0IDogMSxcclxuICAgIGRpcmVjdGlvbiA6IDEsXHJcbiAgICBkaXJlY3RseSA6IDEsXHJcbiAgICBkaXJlY3RvciA6IDEsXHJcbiAgICBkaXJ0IDogMSxcclxuICAgIGRpcnR5IDogMSxcclxuICAgIGRpc2FiaWxpdHkgOiAxLFxyXG4gICAgZGlzYWdyZWUgOiAxLFxyXG4gICAgZGlzYXBwZWFyIDogMSxcclxuICAgIGRpc2FzdGVyIDogMSxcclxuICAgIGRpc2NpcGxpbmUgOiAxLFxyXG4gICAgZGlzY291cnNlIDogMSxcclxuICAgIGRpc2NvdmVyIDogMSxcclxuICAgIGRpc2NvdmVyeSA6IDEsXHJcbiAgICBkaXNjcmltaW5hdGlvbiA6IDEsXHJcbiAgICBkaXNjdXNzIDogMSxcclxuICAgIGRpc2N1c3Npb24gOiAxLFxyXG4gICAgZGlzZWFzZSA6IDEsXHJcbiAgICBkaXNoIDogMSxcclxuICAgIGRpc21pc3MgOiAxLFxyXG4gICAgZGlzb3JkZXIgOiAxLFxyXG4gICAgZGlzcGxheSA6IDEsXHJcbiAgICBkaXNwdXRlIDogMSxcclxuICAgIGRpc3RhbmNlIDogMSxcclxuICAgIGRpc3RhbnQgOiAxLFxyXG4gICAgZGlzdGluY3QgOiAxLFxyXG4gICAgZGlzdGluY3Rpb24gOiAxLFxyXG4gICAgZGlzdGluZ3Vpc2ggOiAxLFxyXG4gICAgZGlzdHJpYnV0ZSA6IDEsXHJcbiAgICBkaXN0cmlidXRpb24gOiAxLFxyXG4gICAgZGlzdHJpY3QgOiAxLFxyXG4gICAgZGl2ZXJzZSA6IDEsXHJcbiAgICBkaXZlcnNpdHkgOiAxLFxyXG4gICAgZGl2aWRlIDogMSxcclxuICAgIGRpdmlzaW9uIDogMSxcclxuICAgIGRpdm9yY2UgOiAxLFxyXG4gICAgRE5BIDogMSxcclxuICAgIGRvIDogMSxcclxuICAgIGRvY3RvciA6IDEsXHJcbiAgICBkb2N1bWVudCA6IDEsXHJcbiAgICBkb2cgOiAxLFxyXG4gICAgZG9tZXN0aWMgOiAxLFxyXG4gICAgZG9taW5hbnQgOiAxLFxyXG4gICAgZG9taW5hdGUgOiAxLFxyXG4gICAgZG9vciA6IDEsXHJcbiAgICBkb3VibGUgOiAxLFxyXG4gICAgZG91YnQgOiAxLFxyXG4gICAgZG93biA6IDEsXHJcbiAgICBkb3dudG93biA6IDEsXHJcbiAgICBkb3plbiA6IDEsXHJcbiAgICBkcmFmdCA6IDEsXHJcbiAgICBkcmFnIDogMSxcclxuICAgIGRyYW1hIDogMSxcclxuICAgIGRyYW1hdGljIDogMSxcclxuICAgIGRyYW1hdGljYWxseSA6IDEsXHJcbiAgICBkcmF3IDogMSxcclxuICAgIGRyYXdpbmcgOiAxLFxyXG4gICAgZHJlYW0gOiAxLFxyXG4gICAgZHJlc3MgOiAxLFxyXG4gICAgZHJpbmsgOiAxLFxyXG4gICAgZHJpdmUgOiAxLFxyXG4gICAgZHJpdmVyIDogMSxcclxuICAgIGRyb3AgOiAxLFxyXG4gICAgZHJ1ZyA6IDEsXHJcbiAgICBkcnkgOiAxLFxyXG4gICAgZHVlIDogMSxcclxuICAgIGR1cmluZyA6IDEsXHJcbiAgICBkdXN0IDogMSxcclxuICAgIGR1dHkgOiAxLFxyXG4gICAgZWFjaCA6IDEsXHJcbiAgICBlYWdlciA6IDEsXHJcbiAgICBlYXIgOiAxLFxyXG4gICAgZWFybHkgOiAxLFxyXG4gICAgZWFybiA6IDEsXHJcbiAgICBlYXJuaW5ncyA6IDEsXHJcbiAgICBlYXJ0aCA6IDEsXHJcbiAgICBlYXNlIDogMSxcclxuICAgIGVhc2lseSA6IDEsXHJcbiAgICBlYXN0IDogMSxcclxuICAgIGVhc3Rlcm4gOiAxLFxyXG4gICAgZWFzeSA6IDEsXHJcbiAgICBlYXQgOiAxLFxyXG4gICAgZWNvbm9taWMgOiAxLFxyXG4gICAgZWNvbm9taWNzIDogMSxcclxuICAgIGVjb25vbWlzdCA6IDEsXHJcbiAgICBlY29ub215IDogMSxcclxuICAgIGVkZ2UgOiAxLFxyXG4gICAgZWRpdGlvbiA6IDEsXHJcbiAgICBlZGl0b3IgOiAxLFxyXG4gICAgZWR1Y2F0ZSA6IDEsXHJcbiAgICBlZHVjYXRpb24gOiAxLFxyXG4gICAgZWR1Y2F0aW9uYWwgOiAxLFxyXG4gICAgZWR1Y2F0b3IgOiAxLFxyXG4gICAgZWZmZWN0IDogMSxcclxuICAgIGVmZmVjdGl2ZSA6IDEsXHJcbiAgICBlZmZlY3RpdmVseSA6IDEsXHJcbiAgICBlZmZpY2llbmN5IDogMSxcclxuICAgIGVmZmljaWVudCA6IDEsXHJcbiAgICBlZmZvcnQgOiAxLFxyXG4gICAgZWdnIDogMSxcclxuICAgIGVpZ2h0IDogMSxcclxuICAgIGVpdGhlciA6IDEsXHJcbiAgICBlbGRlcmx5IDogMSxcclxuICAgIGVsZWN0IDogMSxcclxuICAgIGVsZWN0aW9uIDogMSxcclxuICAgIGVsZWN0cmljIDogMSxcclxuICAgIGVsZWN0cmljaXR5IDogMSxcclxuICAgIGVsZWN0cm9uaWMgOiAxLFxyXG4gICAgZWxlbWVudCA6IDEsXHJcbiAgICBlbGVtZW50YXJ5IDogMSxcclxuICAgIGVsaW1pbmF0ZSA6IDEsXHJcbiAgICBlbGl0ZSA6IDEsXHJcbiAgICBlbHNlIDogMSxcclxuICAgIGVsc2V3aGVyZSA6IDEsXHJcbiAgICBcImUtbWFpbFwiIDogMSxcclxuICAgIGVtYnJhY2UgOiAxLFxyXG4gICAgZW1lcmdlIDogMSxcclxuICAgIGVtZXJnZW5jeSA6IDEsXHJcbiAgICBlbWlzc2lvbiA6IDEsXHJcbiAgICBlbW90aW9uIDogMSxcclxuICAgIGVtb3Rpb25hbCA6IDEsXHJcbiAgICBlbXBoYXNpcyA6IDEsXHJcbiAgICBlbXBoYXNpemUgOiAxLFxyXG4gICAgZW1wbG95IDogMSxcclxuICAgIGVtcGxveWVlIDogMSxcclxuICAgIGVtcGxveWVyIDogMSxcclxuICAgIGVtcGxveW1lbnQgOiAxLFxyXG4gICAgZW1wdHkgOiAxLFxyXG4gICAgZW5hYmxlIDogMSxcclxuICAgIGVuY291bnRlciA6IDEsXHJcbiAgICBlbmNvdXJhZ2UgOiAxLFxyXG4gICAgZW5kIDogMSxcclxuICAgIGVuZW15IDogMSxcclxuICAgIGVuZXJneSA6IDEsXHJcbiAgICBlbmZvcmNlbWVudCA6IDEsXHJcbiAgICBlbmdhZ2UgOiAxLFxyXG4gICAgZW5naW5lIDogMSxcclxuICAgIGVuZ2luZWVyIDogMSxcclxuICAgIGVuZ2luZWVyaW5nIDogMSxcclxuICAgIEVuZ2xpc2ggOiAxLFxyXG4gICAgZW5oYW5jZSA6IDEsXHJcbiAgICBlbmpveSA6IDEsXHJcbiAgICBlbm9ybW91cyA6IDEsXHJcbiAgICBlbm91Z2ggOiAxLFxyXG4gICAgZW5zdXJlIDogMSxcclxuICAgIGVudGVyIDogMSxcclxuICAgIGVudGVycHJpc2UgOiAxLFxyXG4gICAgZW50ZXJ0YWlubWVudCA6IDEsXHJcbiAgICBlbnRpcmUgOiAxLFxyXG4gICAgZW50aXJlbHkgOiAxLFxyXG4gICAgZW50cmFuY2UgOiAxLFxyXG4gICAgZW50cnkgOiAxLFxyXG4gICAgZW52aXJvbm1lbnQgOiAxLFxyXG4gICAgZW52aXJvbm1lbnRhbCA6IDEsXHJcbiAgICBlcGlzb2RlIDogMSxcclxuICAgIGVxdWFsIDogMSxcclxuICAgIGVxdWFsbHkgOiAxLFxyXG4gICAgZXF1aXBtZW50IDogMSxcclxuICAgIGVyYSA6IDEsXHJcbiAgICBlcnJvciA6IDEsXHJcbiAgICBlc2NhcGUgOiAxLFxyXG4gICAgZXNwZWNpYWxseSA6IDEsXHJcbiAgICBlc3NheSA6IDEsXHJcbiAgICBlc3NlbnRpYWwgOiAxLFxyXG4gICAgZXNzZW50aWFsbHkgOiAxLFxyXG4gICAgZXN0YWJsaXNoIDogMSxcclxuICAgIGVzdGFibGlzaG1lbnQgOiAxLFxyXG4gICAgZXN0YXRlIDogMSxcclxuICAgIGVzdGltYXRlIDogMSxcclxuICAgIGV0YyA6IDEsXHJcbiAgICBldGhpY3MgOiAxLFxyXG4gICAgZXRobmljIDogMSxcclxuICAgIEV1cm9wZWFuIDogMSxcclxuICAgIGV2YWx1YXRlIDogMSxcclxuICAgIGV2YWx1YXRpb24gOiAxLFxyXG4gICAgZXZlbiA6IDEsXHJcbiAgICBldmVuaW5nIDogMSxcclxuICAgIGV2ZW50IDogMSxcclxuICAgIGV2ZW50dWFsbHkgOiAxLFxyXG4gICAgZXZlciA6IDEsXHJcbiAgICBldmVyeSA6IDEsXHJcbiAgICBldmVyeWJvZHkgOiAxLFxyXG4gICAgZXZlcnlkYXkgOiAxLFxyXG4gICAgZXZlcnlvbmUgOiAxLFxyXG4gICAgZXZlcnl0aGluZyA6IDEsXHJcbiAgICBldmVyeXdoZXJlIDogMSxcclxuICAgIGV2aWRlbmNlIDogMSxcclxuICAgIGV2b2x1dGlvbiA6IDEsXHJcbiAgICBldm9sdmUgOiAxLFxyXG4gICAgZXhhY3QgOiAxLFxyXG4gICAgZXhhY3RseSA6IDEsXHJcbiAgICBleGFtaW5hdGlvbiA6IDEsXHJcbiAgICBleGFtaW5lIDogMSxcclxuICAgIGV4YW1wbGUgOiAxLFxyXG4gICAgZXhjZWVkIDogMSxcclxuICAgIGV4Y2VsbGVudCA6IDEsXHJcbiAgICBleGNlcHQgOiAxLFxyXG4gICAgZXhjZXB0aW9uIDogMSxcclxuICAgIGV4Y2hhbmdlIDogMSxcclxuICAgIGV4Y2l0aW5nIDogMSxcclxuICAgIGV4ZWN1dGl2ZSA6IDEsXHJcbiAgICBleGVyY2lzZSA6IDEsXHJcbiAgICBleGhpYml0IDogMSxcclxuICAgIGV4aGliaXRpb24gOiAxLFxyXG4gICAgZXhpc3QgOiAxLFxyXG4gICAgZXhpc3RlbmNlIDogMSxcclxuICAgIGV4aXN0aW5nIDogMSxcclxuICAgIGV4cGFuZCA6IDEsXHJcbiAgICBleHBhbnNpb24gOiAxLFxyXG4gICAgZXhwZWN0IDogMSxcclxuICAgIGV4cGVjdGF0aW9uIDogMSxcclxuICAgIGV4cGVuc2UgOiAxLFxyXG4gICAgZXhwZW5zaXZlIDogMSxcclxuICAgIGV4cGVyaWVuY2UgOiAxLFxyXG4gICAgZXhwZXJpbWVudCA6IDEsXHJcbiAgICBleHBlcnQgOiAxLFxyXG4gICAgZXhwbGFpbiA6IDEsXHJcbiAgICBleHBsYW5hdGlvbiA6IDEsXHJcbiAgICBleHBsb2RlIDogMSxcclxuICAgIGV4cGxvcmUgOiAxLFxyXG4gICAgZXhwbG9zaW9uIDogMSxcclxuICAgIGV4cG9zZSA6IDEsXHJcbiAgICBleHBvc3VyZSA6IDEsXHJcbiAgICBleHByZXNzIDogMSxcclxuICAgIGV4cHJlc3Npb24gOiAxLFxyXG4gICAgZXh0ZW5kIDogMSxcclxuICAgIGV4dGVuc2lvbiA6IDEsXHJcbiAgICBleHRlbnNpdmUgOiAxLFxyXG4gICAgZXh0ZW50IDogMSxcclxuICAgIGV4dGVybmFsIDogMSxcclxuICAgIGV4dHJhIDogMSxcclxuICAgIGV4dHJhb3JkaW5hcnkgOiAxLFxyXG4gICAgZXh0cmVtZSA6IDEsXHJcbiAgICBleHRyZW1lbHkgOiAxLFxyXG4gICAgZXllIDogMSxcclxuICAgIGZhYnJpYyA6IDEsXHJcbiAgICBmYWNlIDogMSxcclxuICAgIGZhY2lsaXR5IDogMSxcclxuICAgIGZhY3QgOiAxLFxyXG4gICAgZmFjdG9yIDogMSxcclxuICAgIGZhY3RvcnkgOiAxLFxyXG4gICAgZmFjdWx0eSA6IDEsXHJcbiAgICBmYWRlIDogMSxcclxuICAgIGZhaWwgOiAxLFxyXG4gICAgZmFpbHVyZSA6IDEsXHJcbiAgICBmYWlyIDogMSxcclxuICAgIGZhaXJseSA6IDEsXHJcbiAgICBmYWl0aCA6IDEsXHJcbiAgICBmYWxsIDogMSxcclxuICAgIGZhbHNlIDogMSxcclxuICAgIGZhbWlsaWFyIDogMSxcclxuICAgIGZhbWlseSA6IDEsXHJcbiAgICBmYW1vdXMgOiAxLFxyXG4gICAgZmFuIDogMSxcclxuICAgIGZhbnRhc3kgOiAxLFxyXG4gICAgZmFyIDogMSxcclxuICAgIGZhcm0gOiAxLFxyXG4gICAgZmFybWVyIDogMSxcclxuICAgIGZhc2hpb24gOiAxLFxyXG4gICAgZmFzdCA6IDEsXHJcbiAgICBmYXQgOiAxLFxyXG4gICAgZmF0ZSA6IDEsXHJcbiAgICBmYXRoZXIgOiAxLFxyXG4gICAgZmF1bHQgOiAxLFxyXG4gICAgZmF2b3IgOiAxLFxyXG4gICAgZmF2b3JpdGUgOiAxLFxyXG4gICAgZmVhciA6IDEsXHJcbiAgICBmZWF0dXJlIDogMSxcclxuICAgIGZlZGVyYWwgOiAxLFxyXG4gICAgZmVlIDogMSxcclxuICAgIGZlZWQgOiAxLFxyXG4gICAgZmVlbCA6IDEsXHJcbiAgICBmZWVsaW5nIDogMSxcclxuICAgIGZlbGxvdyA6IDEsXHJcbiAgICBmZW1hbGUgOiAxLFxyXG4gICAgZmVuY2UgOiAxLFxyXG4gICAgZmV3IDogMSxcclxuICAgIGZld2VyIDogMSxcclxuICAgIGZpYmVyIDogMSxcclxuICAgIGZpY3Rpb24gOiAxLFxyXG4gICAgZmllbGQgOiAxLFxyXG4gICAgZmlmdGVlbiA6IDEsXHJcbiAgICBmaWZ0aCA6IDEsXHJcbiAgICBmaWZ0eSA6IDEsXHJcbiAgICBmaWdodCA6IDEsXHJcbiAgICBmaWdodGVyIDogMSxcclxuICAgIGZpZ2h0aW5nIDogMSxcclxuICAgIGZpZ3VyZSA6IDEsXHJcbiAgICBmaWxlIDogMSxcclxuICAgIGZpbGwgOiAxLFxyXG4gICAgZmlsbSA6IDEsXHJcbiAgICBmaW5hbCA6IDEsXHJcbiAgICBmaW5hbGx5IDogMSxcclxuICAgIGZpbmFuY2UgOiAxLFxyXG4gICAgZmluYW5jaWFsIDogMSxcclxuICAgIGZpbmQgOiAxLFxyXG4gICAgZmluZGluZyA6IDEsXHJcbiAgICBmaW5lIDogMSxcclxuICAgIGZpbmdlciA6IDEsXHJcbiAgICBmaW5pc2ggOiAxLFxyXG4gICAgZmlyZSA6IDEsXHJcbiAgICBmaXJtIDogMSxcclxuICAgIGZpcnN0IDogMSxcclxuICAgIGZpc2ggOiAxLFxyXG4gICAgZmlzaGluZyA6IDEsXHJcbiAgICBmaXQgOiAxLFxyXG4gICAgZml0bmVzcyA6IDEsXHJcbiAgICBmaXZlIDogMSxcclxuICAgIGZpeCA6IDEsXHJcbiAgICBmbGFnIDogMSxcclxuICAgIGZsYW1lIDogMSxcclxuICAgIGZsYXQgOiAxLFxyXG4gICAgZmxhdm9yIDogMSxcclxuICAgIGZsZWUgOiAxLFxyXG4gICAgZmxlc2ggOiAxLFxyXG4gICAgZmxpZ2h0IDogMSxcclxuICAgIGZsb2F0IDogMSxcclxuICAgIGZsb29yIDogMSxcclxuICAgIGZsb3cgOiAxLFxyXG4gICAgZmxvd2VyIDogMSxcclxuICAgIGZseSA6IDEsXHJcbiAgICBmb2N1cyA6IDEsXHJcbiAgICBmb2xrIDogMSxcclxuICAgIGZvbGxvdyA6IDEsXHJcbiAgICBmb2xsb3dpbmcgOiAxLFxyXG4gICAgZm9vZCA6IDEsXHJcbiAgICBmb290IDogMSxcclxuICAgIGZvb3RiYWxsIDogMSxcclxuICAgIGZvciA6IDEsXHJcbiAgICBmb3JjZSA6IDEsXHJcbiAgICBmb3JlaWduIDogMSxcclxuICAgIGZvcmVzdCA6IDEsXHJcbiAgICBmb3JldmVyIDogMSxcclxuICAgIGZvcmdldCA6IDEsXHJcbiAgICBmb3JtIDogMSxcclxuICAgIGZvcm1hbCA6IDEsXHJcbiAgICBmb3JtYXRpb24gOiAxLFxyXG4gICAgZm9ybWVyIDogMSxcclxuICAgIGZvcm11bGEgOiAxLFxyXG4gICAgZm9ydGggOiAxLFxyXG4gICAgZm9ydHVuZSA6IDEsXHJcbiAgICBmb3J3YXJkIDogMSxcclxuICAgIGZvdW5kIDogMSxcclxuICAgIGZvdW5kYXRpb24gOiAxLFxyXG4gICAgZm91bmRlciA6IDEsXHJcbiAgICBmb3VyIDogMSxcclxuICAgIGZvdXJ0aCA6IDEsXHJcbiAgICBmcmFtZSA6IDEsXHJcbiAgICBmcmFtZXdvcmsgOiAxLFxyXG4gICAgZnJlZSA6IDEsXHJcbiAgICBmcmVlZG9tIDogMSxcclxuICAgIGZyZWV6ZSA6IDEsXHJcbiAgICBGcmVuY2ggOiAxLFxyXG4gICAgZnJlcXVlbmN5IDogMSxcclxuICAgIGZyZXF1ZW50IDogMSxcclxuICAgIGZyZXF1ZW50bHkgOiAxLFxyXG4gICAgZnJlc2ggOiAxLFxyXG4gICAgZnJpZW5kIDogMSxcclxuICAgIGZyaWVuZGx5IDogMSxcclxuICAgIGZyaWVuZHNoaXAgOiAxLFxyXG4gICAgZnJvbSA6IDEsXHJcbiAgICBmcm9udCA6IDEsXHJcbiAgICBmcnVpdCA6IDEsXHJcbiAgICBmcnVzdHJhdGlvbiA6IDEsXHJcbiAgICBmdWVsIDogMSxcclxuICAgIGZ1bGwgOiAxLFxyXG4gICAgZnVsbHkgOiAxLFxyXG4gICAgZnVuIDogMSxcclxuICAgIGZ1bmN0aW9uIDogMSxcclxuICAgIGZ1bmQgOiAxLFxyXG4gICAgZnVuZGFtZW50YWwgOiAxLFxyXG4gICAgZnVuZGluZyA6IDEsXHJcbiAgICBmdW5lcmFsIDogMSxcclxuICAgIGZ1bm55IDogMSxcclxuICAgIGZ1cm5pdHVyZSA6IDEsXHJcbiAgICBmdXJ0aGVybW9yZSA6IDEsXHJcbiAgICBmdXR1cmUgOiAxLFxyXG4gICAgZ2FpbiA6IDEsXHJcbiAgICBnYWxheHkgOiAxLFxyXG4gICAgZ2FsbGVyeSA6IDEsXHJcbiAgICBnYW1lIDogMSxcclxuICAgIGdhbmcgOiAxLFxyXG4gICAgZ2FwIDogMSxcclxuICAgIGdhcmFnZSA6IDEsXHJcbiAgICBnYXJkZW4gOiAxLFxyXG4gICAgZ2FybGljIDogMSxcclxuICAgIGdhcyA6IDEsXHJcbiAgICBnYXRlIDogMSxcclxuICAgIGdhdGhlciA6IDEsXHJcbiAgICBnYXkgOiAxLFxyXG4gICAgZ2F6ZSA6IDEsXHJcbiAgICBnZWFyIDogMSxcclxuICAgIGdlbmRlciA6IDEsXHJcbiAgICBnZW5lIDogMSxcclxuICAgIGdlbmVyYWwgOiAxLFxyXG4gICAgZ2VuZXJhbGx5IDogMSxcclxuICAgIGdlbmVyYXRlIDogMSxcclxuICAgIGdlbmVyYXRpb24gOiAxLFxyXG4gICAgZ2VuZXRpYyA6IDEsXHJcbiAgICBnZW50bGVtYW4gOiAxLFxyXG4gICAgZ2VudGx5IDogMSxcclxuICAgIEdlcm1hbiA6IDEsXHJcbiAgICBnZXN0dXJlIDogMSxcclxuICAgIGdldCA6IDEsXHJcbiAgICBnaG9zdCA6IDEsXHJcbiAgICBnaWFudCA6IDEsXHJcbiAgICBnaWZ0IDogMSxcclxuICAgIGdpZnRlZCA6IDEsXHJcbiAgICBnaXJsIDogMSxcclxuICAgIGdpcmxmcmllbmQgOiAxLFxyXG4gICAgZ2l2ZSA6IDEsXHJcbiAgICBnaXZlbiA6IDEsXHJcbiAgICBnbGFkIDogMSxcclxuICAgIGdsYW5jZSA6IDEsXHJcbiAgICBnbGFzcyA6IDEsXHJcbiAgICBnbG9iYWwgOiAxLFxyXG4gICAgZ2xvdmUgOiAxLFxyXG4gICAgZ28gOiAxLFxyXG4gICAgZ29hbCA6IDEsXHJcbiAgICBHb2QgOiAxLFxyXG4gICAgZ29sZCA6IDEsXHJcbiAgICBnb2xkZW4gOiAxLFxyXG4gICAgZ29sZiA6IDEsXHJcbiAgICBnb29kIDogMSxcclxuICAgIGdvdmVybm1lbnQgOiAxLFxyXG4gICAgZ292ZXJub3IgOiAxLFxyXG4gICAgZ3JhYiA6IDEsXHJcbiAgICBncmFkZSA6IDEsXHJcbiAgICBncmFkdWFsbHkgOiAxLFxyXG4gICAgZ3JhZHVhdGUgOiAxLFxyXG4gICAgZ3JhaW4gOiAxLFxyXG4gICAgZ3JhbmQgOiAxLFxyXG4gICAgZ3JhbmRmYXRoZXIgOiAxLFxyXG4gICAgZ3JhbmRtb3RoZXIgOiAxLFxyXG4gICAgZ3JhbnQgOiAxLFxyXG4gICAgZ3Jhc3MgOiAxLFxyXG4gICAgZ3JhdmUgOiAxLFxyXG4gICAgZ3JheSA6IDEsXHJcbiAgICBncmVhdCA6IDEsXHJcbiAgICBncmVhdGVzdCA6IDEsXHJcbiAgICBncmVlbiA6IDEsXHJcbiAgICBncm9jZXJ5IDogMSxcclxuICAgIGdyb3VuZCA6IDEsXHJcbiAgICBncm91cCA6IDEsXHJcbiAgICBncm93IDogMSxcclxuICAgIGdyb3dpbmcgOiAxLFxyXG4gICAgZ3Jvd3RoIDogMSxcclxuICAgIGd1YXJhbnRlZSA6IDEsXHJcbiAgICBndWFyZCA6IDEsXHJcbiAgICBndWVzcyA6IDEsXHJcbiAgICBndWVzdCA6IDEsXHJcbiAgICBndWlkZSA6IDEsXHJcbiAgICBndWlkZWxpbmUgOiAxLFxyXG4gICAgZ3VpbHR5IDogMSxcclxuICAgIGd1biA6IDEsXHJcbiAgICBndXkgOiAxLFxyXG4gICAgaGFiaXQgOiAxLFxyXG4gICAgaGFiaXRhdCA6IDEsXHJcbiAgICBoYWlyIDogMSxcclxuICAgIGhhbGYgOiAxLFxyXG4gICAgaGFsbCA6IDEsXHJcbiAgICBoYW5kIDogMSxcclxuICAgIGhhbmRmdWwgOiAxLFxyXG4gICAgaGFuZGxlIDogMSxcclxuICAgIGhhbmcgOiAxLFxyXG4gICAgaGFwcGVuIDogMSxcclxuICAgIGhhcHB5IDogMSxcclxuICAgIGhhcmQgOiAxLFxyXG4gICAgaGFyZGx5IDogMSxcclxuICAgIGhhdCA6IDEsXHJcbiAgICBoYXRlIDogMSxcclxuICAgIGhhdmUgOiAxLFxyXG4gICAgaGUgOiAxLFxyXG4gICAgaGVhZCA6IDEsXHJcbiAgICBoZWFkbGluZSA6IDEsXHJcbiAgICBoZWFkcXVhcnRlcnMgOiAxLFxyXG4gICAgaGVhbHRoIDogMSxcclxuICAgIGhlYWx0aHkgOiAxLFxyXG4gICAgaGVhciA6IDEsXHJcbiAgICBoZWFyaW5nIDogMSxcclxuICAgIGhlYXJ0IDogMSxcclxuICAgIGhlYXQgOiAxLFxyXG4gICAgaGVhdmVuIDogMSxcclxuICAgIGhlYXZpbHkgOiAxLFxyXG4gICAgaGVhdnkgOiAxLFxyXG4gICAgaGVlbCA6IDEsXHJcbiAgICBoZWlnaHQgOiAxLFxyXG4gICAgaGVsaWNvcHRlciA6IDEsXHJcbiAgICBoZWxsIDogMSxcclxuICAgIGhlbGxvIDogMSxcclxuICAgIGhlbHAgOiAxLFxyXG4gICAgaGVscGZ1bCA6IDEsXHJcbiAgICBoZXIgOiAxLFxyXG4gICAgaGVyZSA6IDEsXHJcbiAgICBoZXJpdGFnZSA6IDEsXHJcbiAgICBoZXJvIDogMSxcclxuICAgIGhlcnNlbGYgOiAxLFxyXG4gICAgaGV5IDogMSxcclxuICAgIGhpIDogMSxcclxuICAgIGhpZGUgOiAxLFxyXG4gICAgaGlnaCA6IDEsXHJcbiAgICBoaWdobGlnaHQgOiAxLFxyXG4gICAgaGlnaGx5IDogMSxcclxuICAgIGhpZ2h3YXkgOiAxLFxyXG4gICAgaGlsbCA6IDEsXHJcbiAgICBoaW0gOiAxLFxyXG4gICAgaGltc2VsZiA6IDEsXHJcbiAgICBoaXAgOiAxLFxyXG4gICAgaGlyZSA6IDEsXHJcbiAgICBoaXMgOiAxLFxyXG4gICAgaGlzdG9yaWFuIDogMSxcclxuICAgIGhpc3RvcmljIDogMSxcclxuICAgIGhpc3RvcmljYWwgOiAxLFxyXG4gICAgaGlzdG9yeSA6IDEsXHJcbiAgICBoaXQgOiAxLFxyXG4gICAgaG9sZCA6IDEsXHJcbiAgICBob2xlIDogMSxcclxuICAgIGhvbGlkYXkgOiAxLFxyXG4gICAgaG9seSA6IDEsXHJcbiAgICBob21lIDogMSxcclxuICAgIGhvbWVsZXNzIDogMSxcclxuICAgIGhvbmVzdCA6IDEsXHJcbiAgICBob25leSA6IDEsXHJcbiAgICBob25vciA6IDEsXHJcbiAgICBob3BlIDogMSxcclxuICAgIGhvcml6b24gOiAxLFxyXG4gICAgaG9ycm9yIDogMSxcclxuICAgIGhvcnNlIDogMSxcclxuICAgIGhvc3BpdGFsIDogMSxcclxuICAgIGhvc3QgOiAxLFxyXG4gICAgaG90IDogMSxcclxuICAgIGhvdGVsIDogMSxcclxuICAgIGhvdXIgOiAxLFxyXG4gICAgaG91c2UgOiAxLFxyXG4gICAgaG91c2Vob2xkIDogMSxcclxuICAgIGhvdXNpbmcgOiAxLFxyXG4gICAgaG93IDogMSxcclxuICAgIGhvd2V2ZXIgOiAxLFxyXG4gICAgaHVnZSA6IDEsXHJcbiAgICBodW1hbiA6IDEsXHJcbiAgICBodW1vciA6IDEsXHJcbiAgICBodW5kcmVkIDogMSxcclxuICAgIGh1bmdyeSA6IDEsXHJcbiAgICBodW50ZXIgOiAxLFxyXG4gICAgaHVudGluZyA6IDEsXHJcbiAgICBodXJ0IDogMSxcclxuICAgIGh1c2JhbmQgOiAxLFxyXG4gICAgaHlwb3RoZXNpcyA6IDEsXHJcbiAgICBJIDogMSxcclxuICAgIGljZSA6IDEsXHJcbiAgICBpZGVhIDogMSxcclxuICAgIGlkZWFsIDogMSxcclxuICAgIGlkZW50aWZpY2F0aW9uIDogMSxcclxuICAgIGlkZW50aWZ5IDogMSxcclxuICAgIGlkZW50aXR5IDogMSxcclxuICAgIGllIDogMSxcclxuICAgIGlmIDogMSxcclxuICAgIGlnbm9yZSA6IDEsXHJcbiAgICBpbGwgOiAxLFxyXG4gICAgaWxsZWdhbCA6IDEsXHJcbiAgICBpbGxuZXNzIDogMSxcclxuICAgIGlsbHVzdHJhdGUgOiAxLFxyXG4gICAgaW1hZ2UgOiAxLFxyXG4gICAgaW1hZ2luYXRpb24gOiAxLFxyXG4gICAgaW1hZ2luZSA6IDEsXHJcbiAgICBpbW1lZGlhdGUgOiAxLFxyXG4gICAgaW1tZWRpYXRlbHkgOiAxLFxyXG4gICAgaW1taWdyYW50IDogMSxcclxuICAgIGltbWlncmF0aW9uIDogMSxcclxuICAgIGltcGFjdCA6IDEsXHJcbiAgICBpbXBsZW1lbnQgOiAxLFxyXG4gICAgaW1wbGljYXRpb24gOiAxLFxyXG4gICAgaW1wbHkgOiAxLFxyXG4gICAgaW1wb3J0YW5jZSA6IDEsXHJcbiAgICBpbXBvcnRhbnQgOiAxLFxyXG4gICAgaW1wb3NlIDogMSxcclxuICAgIGltcG9zc2libGUgOiAxLFxyXG4gICAgaW1wcmVzcyA6IDEsXHJcbiAgICBpbXByZXNzaW9uIDogMSxcclxuICAgIGltcHJlc3NpdmUgOiAxLFxyXG4gICAgaW1wcm92ZSA6IDEsXHJcbiAgICBpbXByb3ZlbWVudCA6IDEsXHJcbiAgICBpbiA6IDEsXHJcbiAgICBpbmNlbnRpdmUgOiAxLFxyXG4gICAgaW5jaWRlbnQgOiAxLFxyXG4gICAgaW5jbHVkZSA6IDEsXHJcbiAgICBpbmNsdWRpbmcgOiAxLFxyXG4gICAgaW5jb21lIDogMSxcclxuICAgIGluY29ycG9yYXRlIDogMSxcclxuICAgIGluY3JlYXNlIDogMSxcclxuICAgIGluY3JlYXNlZCA6IDEsXHJcbiAgICBpbmNyZWFzaW5nIDogMSxcclxuICAgIGluY3JlYXNpbmdseSA6IDEsXHJcbiAgICBpbmNyZWRpYmxlIDogMSxcclxuICAgIGluZGVlZCA6IDEsXHJcbiAgICBpbmRlcGVuZGVuY2UgOiAxLFxyXG4gICAgaW5kZXBlbmRlbnQgOiAxLFxyXG4gICAgaW5kZXggOiAxLFxyXG4gICAgSW5kaWFuIDogMSxcclxuICAgIGluZGljYXRlIDogMSxcclxuICAgIGluZGljYXRpb24gOiAxLFxyXG4gICAgaW5kaXZpZHVhbCA6IDEsXHJcbiAgICBpbmR1c3RyaWFsIDogMSxcclxuICAgIGluZHVzdHJ5IDogMSxcclxuICAgIGluZmFudCA6IDEsXHJcbiAgICBpbmZlY3Rpb24gOiAxLFxyXG4gICAgaW5mbGF0aW9uIDogMSxcclxuICAgIGluZmx1ZW5jZSA6IDEsXHJcbiAgICBpbmZvcm0gOiAxLFxyXG4gICAgaW5mb3JtYXRpb24gOiAxLFxyXG4gICAgaW5ncmVkaWVudCA6IDEsXHJcbiAgICBpbml0aWFsIDogMSxcclxuICAgIGluaXRpYWxseSA6IDEsXHJcbiAgICBpbml0aWF0aXZlIDogMSxcclxuICAgIGluanVyeSA6IDEsXHJcbiAgICBpbm5lciA6IDEsXHJcbiAgICBpbm5vY2VudCA6IDEsXHJcbiAgICBpbnF1aXJ5IDogMSxcclxuICAgIGluc2lkZSA6IDEsXHJcbiAgICBpbnNpZ2h0IDogMSxcclxuICAgIGluc2lzdCA6IDEsXHJcbiAgICBpbnNwaXJlIDogMSxcclxuICAgIGluc3RhbGwgOiAxLFxyXG4gICAgaW5zdGFuY2UgOiAxLFxyXG4gICAgaW5zdGVhZCA6IDEsXHJcbiAgICBpbnN0aXR1dGlvbiA6IDEsXHJcbiAgICBpbnN0aXR1dGlvbmFsIDogMSxcclxuICAgIGluc3RydWN0aW9uIDogMSxcclxuICAgIGluc3RydWN0b3IgOiAxLFxyXG4gICAgaW5zdHJ1bWVudCA6IDEsXHJcbiAgICBpbnN1cmFuY2UgOiAxLFxyXG4gICAgaW50ZWxsZWN0dWFsIDogMSxcclxuICAgIGludGVsbGlnZW5jZSA6IDEsXHJcbiAgICBpbnRlbmQgOiAxLFxyXG4gICAgaW50ZW5zZSA6IDEsXHJcbiAgICBpbnRlbnNpdHkgOiAxLFxyXG4gICAgaW50ZW50aW9uIDogMSxcclxuICAgIGludGVyYWN0aW9uIDogMSxcclxuICAgIGludGVyZXN0IDogMSxcclxuICAgIGludGVyZXN0ZWQgOiAxLFxyXG4gICAgaW50ZXJlc3RpbmcgOiAxLFxyXG4gICAgaW50ZXJuYWwgOiAxLFxyXG4gICAgaW50ZXJuYXRpb25hbCA6IDEsXHJcbiAgICBJbnRlcm5ldCA6IDEsXHJcbiAgICBpbnRlcnByZXQgOiAxLFxyXG4gICAgaW50ZXJwcmV0YXRpb24gOiAxLFxyXG4gICAgaW50ZXJ2ZW50aW9uIDogMSxcclxuICAgIGludGVydmlldyA6IDEsXHJcbiAgICBpbnRvIDogMSxcclxuICAgIGludHJvZHVjZSA6IDEsXHJcbiAgICBpbnRyb2R1Y3Rpb24gOiAxLFxyXG4gICAgaW52YXNpb24gOiAxLFxyXG4gICAgaW52ZXN0IDogMSxcclxuICAgIGludmVzdGlnYXRlIDogMSxcclxuICAgIGludmVzdGlnYXRpb24gOiAxLFxyXG4gICAgaW52ZXN0aWdhdG9yIDogMSxcclxuICAgIGludmVzdG1lbnQgOiAxLFxyXG4gICAgaW52ZXN0b3IgOiAxLFxyXG4gICAgaW52aXRlIDogMSxcclxuICAgIGludm9sdmUgOiAxLFxyXG4gICAgaW52b2x2ZWQgOiAxLFxyXG4gICAgaW52b2x2ZW1lbnQgOiAxLFxyXG4gICAgSXJhcWkgOiAxLFxyXG4gICAgSXJpc2ggOiAxLFxyXG4gICAgaXJvbiA6IDEsXHJcbiAgICBJc2xhbWljIDogMSxcclxuICAgIGlzbGFuZCA6IDEsXHJcbiAgICBJc3JhZWxpIDogMSxcclxuICAgIGlzc3VlIDogMSxcclxuICAgIGl0IDogMSxcclxuICAgIEl0YWxpYW4gOiAxLFxyXG4gICAgaXRlbSA6IDEsXHJcbiAgICBpdHMgOiAxLFxyXG4gICAgaXRzZWxmIDogMSxcclxuICAgIGphY2tldCA6IDEsXHJcbiAgICBqYWlsIDogMSxcclxuICAgIEphcGFuZXNlIDogMSxcclxuICAgIGpldCA6IDEsXHJcbiAgICBKZXcgOiAxLFxyXG4gICAgSmV3aXNoIDogMSxcclxuICAgIGpvYiA6IDEsXHJcbiAgICBqb2luIDogMSxcclxuICAgIGpvaW50IDogMSxcclxuICAgIGpva2UgOiAxLFxyXG4gICAgam91cm5hbCA6IDEsXHJcbiAgICBqb3VybmFsaXN0IDogMSxcclxuICAgIGpvdXJuZXkgOiAxLFxyXG4gICAgam95IDogMSxcclxuICAgIGp1ZGdlIDogMSxcclxuICAgIGp1ZGdtZW50IDogMSxcclxuICAgIGp1aWNlIDogMSxcclxuICAgIGp1bXAgOiAxLFxyXG4gICAganVuaW9yIDogMSxcclxuICAgIGp1cnkgOiAxLFxyXG4gICAganVzdCA6IDEsXHJcbiAgICBqdXN0aWNlIDogMSxcclxuICAgIGp1c3RpZnkgOiAxLFxyXG4gICAga2VlcCA6IDEsXHJcbiAgICBrZXkgOiAxLFxyXG4gICAga2ljayA6IDEsXHJcbiAgICBraWQgOiAxLFxyXG4gICAga2lsbCA6IDEsXHJcbiAgICBraWxsZXIgOiAxLFxyXG4gICAga2lsbGluZyA6IDEsXHJcbiAgICBraW5kIDogMSxcclxuICAgIGtpbmcgOiAxLFxyXG4gICAga2lzcyA6IDEsXHJcbiAgICBraXRjaGVuIDogMSxcclxuICAgIGtuZWUgOiAxLFxyXG4gICAga25pZmUgOiAxLFxyXG4gICAga25vY2sgOiAxLFxyXG4gICAga25vdyA6IDEsXHJcbiAgICBrbm93bGVkZ2UgOiAxLFxyXG4gICAgbGFiIDogMSxcclxuICAgIGxhYmVsIDogMSxcclxuICAgIGxhYm9yIDogMSxcclxuICAgIGxhYm9yYXRvcnkgOiAxLFxyXG4gICAgbGFjayA6IDEsXHJcbiAgICBsYWR5IDogMSxcclxuICAgIGxha2UgOiAxLFxyXG4gICAgbGFuZCA6IDEsXHJcbiAgICBsYW5kc2NhcGUgOiAxLFxyXG4gICAgbGFuZ3VhZ2UgOiAxLFxyXG4gICAgbGFwIDogMSxcclxuICAgIGxhcmdlIDogMSxcclxuICAgIGxhcmdlbHkgOiAxLFxyXG4gICAgbGFzdCA6IDEsXHJcbiAgICBsYXRlIDogMSxcclxuICAgIGxhdGVyIDogMSxcclxuICAgIExhdGluIDogMSxcclxuICAgIGxhdHRlciA6IDEsXHJcbiAgICBsYXVnaCA6IDEsXHJcbiAgICBsYXVuY2ggOiAxLFxyXG4gICAgbGF3IDogMSxcclxuICAgIGxhd24gOiAxLFxyXG4gICAgbGF3c3VpdCA6IDEsXHJcbiAgICBsYXd5ZXIgOiAxLFxyXG4gICAgbGF5IDogMSxcclxuICAgIGxheWVyIDogMSxcclxuICAgIGxlYWQgOiAxLFxyXG4gICAgbGVhZGVyIDogMSxcclxuICAgIGxlYWRlcnNoaXAgOiAxLFxyXG4gICAgbGVhZGluZyA6IDEsXHJcbiAgICBsZWFmIDogMSxcclxuICAgIGxlYWd1ZSA6IDEsXHJcbiAgICBsZWFuIDogMSxcclxuICAgIGxlYXJuIDogMSxcclxuICAgIGxlYXJuaW5nIDogMSxcclxuICAgIGxlYXN0IDogMSxcclxuICAgIGxlYXRoZXIgOiAxLFxyXG4gICAgbGVhdmUgOiAxLFxyXG4gICAgbGVmdCA6IDEsXHJcbiAgICBsZWcgOiAxLFxyXG4gICAgbGVnYWN5IDogMSxcclxuICAgIGxlZ2FsIDogMSxcclxuICAgIGxlZ2VuZCA6IDEsXHJcbiAgICBsZWdpc2xhdGlvbiA6IDEsXHJcbiAgICBsZWdpdGltYXRlIDogMSxcclxuICAgIGxlbW9uIDogMSxcclxuICAgIGxlbmd0aCA6IDEsXHJcbiAgICBsZXNzIDogMSxcclxuICAgIGxlc3NvbiA6IDEsXHJcbiAgICBsZXQgOiAxLFxyXG4gICAgbGV0dGVyIDogMSxcclxuICAgIGxldmVsIDogMSxcclxuICAgIGxpYmVyYWwgOiAxLFxyXG4gICAgbGlicmFyeSA6IDEsXHJcbiAgICBsaWNlbnNlIDogMSxcclxuICAgIGxpZSA6IDEsXHJcbiAgICBsaWZlIDogMSxcclxuICAgIGxpZmVzdHlsZSA6IDEsXHJcbiAgICBsaWZldGltZSA6IDEsXHJcbiAgICBsaWZ0IDogMSxcclxuICAgIGxpZ2h0IDogMSxcclxuICAgIGxpa2UgOiAxLFxyXG4gICAgbGlrZWx5IDogMSxcclxuICAgIGxpbWl0IDogMSxcclxuICAgIGxpbWl0YXRpb24gOiAxLFxyXG4gICAgbGltaXRlZCA6IDEsXHJcbiAgICBsaW5lIDogMSxcclxuICAgIGxpbmsgOiAxLFxyXG4gICAgbGlwIDogMSxcclxuICAgIGxpc3QgOiAxLFxyXG4gICAgbGlzdGVuIDogMSxcclxuICAgIGxpdGVyYWxseSA6IDEsXHJcbiAgICBsaXRlcmFyeSA6IDEsXHJcbiAgICBsaXRlcmF0dXJlIDogMSxcclxuICAgIGxpdHRsZSA6IDEsXHJcbiAgICBsaXZlIDogMSxcclxuICAgIGxpdmluZyA6IDEsXHJcbiAgICBsb2FkIDogMSxcclxuICAgIGxvYW4gOiAxLFxyXG4gICAgbG9jYWwgOiAxLFxyXG4gICAgbG9jYXRlIDogMSxcclxuICAgIGxvY2F0aW9uIDogMSxcclxuICAgIGxvY2sgOiAxLFxyXG4gICAgbG9uZyA6IDEsXHJcbiAgICBcImxvbmctdGVybVwiIDogMSxcclxuICAgIGxvb2sgOiAxLFxyXG4gICAgbG9vc2UgOiAxLFxyXG4gICAgbG9zZSA6IDEsXHJcbiAgICBsb3NzIDogMSxcclxuICAgIGxvc3QgOiAxLFxyXG4gICAgbG90IDogMSxcclxuICAgIGxvdHMgOiAxLFxyXG4gICAgbG91ZCA6IDEsXHJcbiAgICBsb3ZlIDogMSxcclxuICAgIGxvdmVseSA6IDEsXHJcbiAgICBsb3ZlciA6IDEsXHJcbiAgICBsb3cgOiAxLFxyXG4gICAgbG93ZXIgOiAxLFxyXG4gICAgbHVjayA6IDEsXHJcbiAgICBsdWNreSA6IDEsXHJcbiAgICBsdW5jaCA6IDEsXHJcbiAgICBsdW5nIDogMSxcclxuICAgIG1hY2hpbmUgOiAxLFxyXG4gICAgbWFkIDogMSxcclxuICAgIG1hZ2F6aW5lIDogMSxcclxuICAgIG1haWwgOiAxLFxyXG4gICAgbWFpbiA6IDEsXHJcbiAgICBtYWlubHkgOiAxLFxyXG4gICAgbWFpbnRhaW4gOiAxLFxyXG4gICAgbWFpbnRlbmFuY2UgOiAxLFxyXG4gICAgbWFqb3IgOiAxLFxyXG4gICAgbWFqb3JpdHkgOiAxLFxyXG4gICAgbWFrZSA6IDEsXHJcbiAgICBtYWtlciA6IDEsXHJcbiAgICBtYWtldXAgOiAxLFxyXG4gICAgbWFsZSA6IDEsXHJcbiAgICBtYWxsIDogMSxcclxuICAgIG1hbiA6IDEsXHJcbiAgICBtYW5hZ2UgOiAxLFxyXG4gICAgbWFuYWdlbWVudCA6IDEsXHJcbiAgICBtYW5hZ2VyIDogMSxcclxuICAgIG1hbm5lciA6IDEsXHJcbiAgICBtYW51ZmFjdHVyZXIgOiAxLFxyXG4gICAgbWFudWZhY3R1cmluZyA6IDEsXHJcbiAgICBtYW55IDogMSxcclxuICAgIG1hcCA6IDEsXHJcbiAgICBtYXJnaW4gOiAxLFxyXG4gICAgbWFyayA6IDEsXHJcbiAgICBtYXJrZXQgOiAxLFxyXG4gICAgbWFya2V0aW5nIDogMSxcclxuICAgIG1hcnJpYWdlIDogMSxcclxuICAgIG1hcnJpZWQgOiAxLFxyXG4gICAgbWFycnkgOiAxLFxyXG4gICAgbWFzayA6IDEsXHJcbiAgICBtYXNzIDogMSxcclxuICAgIG1hc3NpdmUgOiAxLFxyXG4gICAgbWFzdGVyIDogMSxcclxuICAgIG1hdGNoIDogMSxcclxuICAgIG1hdGVyaWFsIDogMSxcclxuICAgIG1hdGggOiAxLFxyXG4gICAgbWF0dGVyIDogMSxcclxuICAgIG1heSA6IDEsXHJcbiAgICBtYXliZSA6IDEsXHJcbiAgICBtYXlvciA6IDEsXHJcbiAgICBtZSA6IDEsXHJcbiAgICBtZWFsIDogMSxcclxuICAgIG1lYW4gOiAxLFxyXG4gICAgbWVhbmluZyA6IDEsXHJcbiAgICBtZWFud2hpbGUgOiAxLFxyXG4gICAgbWVhc3VyZSA6IDEsXHJcbiAgICBtZWFzdXJlbWVudCA6IDEsXHJcbiAgICBtZWF0IDogMSxcclxuICAgIG1lY2hhbmlzbSA6IDEsXHJcbiAgICBtZWRpYSA6IDEsXHJcbiAgICBtZWRpY2FsIDogMSxcclxuICAgIG1lZGljYXRpb24gOiAxLFxyXG4gICAgbWVkaWNpbmUgOiAxLFxyXG4gICAgbWVkaXVtIDogMSxcclxuICAgIG1lZXQgOiAxLFxyXG4gICAgbWVldGluZyA6IDEsXHJcbiAgICBtZW1iZXIgOiAxLFxyXG4gICAgbWVtYmVyc2hpcCA6IDEsXHJcbiAgICBtZW1vcnkgOiAxLFxyXG4gICAgbWVudGFsIDogMSxcclxuICAgIG1lbnRpb24gOiAxLFxyXG4gICAgbWVudSA6IDEsXHJcbiAgICBtZXJlIDogMSxcclxuICAgIG1lcmVseSA6IDEsXHJcbiAgICBtZXNzIDogMSxcclxuICAgIG1lc3NhZ2UgOiAxLFxyXG4gICAgbWV0YWwgOiAxLFxyXG4gICAgbWV0ZXIgOiAxLFxyXG4gICAgbWV0aG9kIDogMSxcclxuICAgIE1leGljYW4gOiAxLFxyXG4gICAgbWlkZGxlIDogMSxcclxuICAgIG1pZ2h0IDogMSxcclxuICAgIG1pbGl0YXJ5IDogMSxcclxuICAgIG1pbGsgOiAxLFxyXG4gICAgbWlsbGlvbiA6IDEsXHJcbiAgICBtaW5kIDogMSxcclxuICAgIG1pbmUgOiAxLFxyXG4gICAgbWluaXN0ZXIgOiAxLFxyXG4gICAgbWlub3IgOiAxLFxyXG4gICAgbWlub3JpdHkgOiAxLFxyXG4gICAgbWludXRlIDogMSxcclxuICAgIG1pcmFjbGUgOiAxLFxyXG4gICAgbWlycm9yIDogMSxcclxuICAgIG1pc3MgOiAxLFxyXG4gICAgbWlzc2lsZSA6IDEsXHJcbiAgICBtaXNzaW9uIDogMSxcclxuICAgIG1pc3Rha2UgOiAxLFxyXG4gICAgbWl4IDogMSxcclxuICAgIG1peHR1cmUgOiAxLFxyXG4gICAgXCJtbS1obW1cIiA6IDEsXHJcbiAgICBtb2RlIDogMSxcclxuICAgIG1vZGVsIDogMSxcclxuICAgIG1vZGVyYXRlIDogMSxcclxuICAgIG1vZGVybiA6IDEsXHJcbiAgICBtb2Rlc3QgOiAxLFxyXG4gICAgbW9tIDogMSxcclxuICAgIG1vbWVudCA6IDEsXHJcbiAgICBtb25leSA6IDEsXHJcbiAgICBtb25pdG9yIDogMSxcclxuICAgIG1vbnRoIDogMSxcclxuICAgIG1vb2QgOiAxLFxyXG4gICAgbW9vbiA6IDEsXHJcbiAgICBtb3JhbCA6IDEsXHJcbiAgICBtb3JlIDogMSxcclxuICAgIG1vcmVvdmVyIDogMSxcclxuICAgIG1vcm5pbmcgOiAxLFxyXG4gICAgbW9ydGdhZ2UgOiAxLFxyXG4gICAgbW9zdCA6IDEsXHJcbiAgICBtb3N0bHkgOiAxLFxyXG4gICAgbW90aGVyIDogMSxcclxuICAgIG1vdGlvbiA6IDEsXHJcbiAgICBtb3RpdmF0aW9uIDogMSxcclxuICAgIG1vdG9yIDogMSxcclxuICAgIG1vdW50IDogMSxcclxuICAgIG1vdW50YWluIDogMSxcclxuICAgIG1vdXNlIDogMSxcclxuICAgIG1vdXRoIDogMSxcclxuICAgIG1vdmUgOiAxLFxyXG4gICAgbW92ZW1lbnQgOiAxLFxyXG4gICAgbW92aWUgOiAxLFxyXG4gICAgTXIgOiAxLFxyXG4gICAgTXJzIDogMSxcclxuICAgIE1zIDogMSxcclxuICAgIG11Y2ggOiAxLFxyXG4gICAgbXVsdGlwbGUgOiAxLFxyXG4gICAgbXVyZGVyIDogMSxcclxuICAgIG11c2NsZSA6IDEsXHJcbiAgICBtdXNldW0gOiAxLFxyXG4gICAgbXVzaWMgOiAxLFxyXG4gICAgbXVzaWNhbCA6IDEsXHJcbiAgICBtdXNpY2lhbiA6IDEsXHJcbiAgICBNdXNsaW0gOiAxLFxyXG4gICAgbXVzdCA6IDEsXHJcbiAgICBtdXR1YWwgOiAxLFxyXG4gICAgbXkgOiAxLFxyXG4gICAgbXlzZWxmIDogMSxcclxuICAgIG15c3RlcnkgOiAxLFxyXG4gICAgbXl0aCA6IDEsXHJcbiAgICBuYWtlZCA6IDEsXHJcbiAgICBuYW1lIDogMSxcclxuICAgIG5hcnJhdGl2ZSA6IDEsXHJcbiAgICBuYXJyb3cgOiAxLFxyXG4gICAgbmF0aW9uIDogMSxcclxuICAgIG5hdGlvbmFsIDogMSxcclxuICAgIG5hdGl2ZSA6IDEsXHJcbiAgICBuYXR1cmFsIDogMSxcclxuICAgIG5hdHVyYWxseSA6IDEsXHJcbiAgICBuYXR1cmUgOiAxLFxyXG4gICAgbmVhciA6IDEsXHJcbiAgICBuZWFyYnkgOiAxLFxyXG4gICAgbmVhcmx5IDogMSxcclxuICAgIG5lY2Vzc2FyaWx5IDogMSxcclxuICAgIG5lY2Vzc2FyeSA6IDEsXHJcbiAgICBuZWNrIDogMSxcclxuICAgIG5lZWQgOiAxLFxyXG4gICAgbmVnYXRpdmUgOiAxLFxyXG4gICAgbmVnb3RpYXRlIDogMSxcclxuICAgIG5lZ290aWF0aW9uIDogMSxcclxuICAgIG5laWdoYm9yIDogMSxcclxuICAgIG5laWdoYm9yaG9vZCA6IDEsXHJcbiAgICBuZWl0aGVyIDogMSxcclxuICAgIG5lcnZlIDogMSxcclxuICAgIG5lcnZvdXMgOiAxLFxyXG4gICAgbmV0IDogMSxcclxuICAgIG5ldHdvcmsgOiAxLFxyXG4gICAgbmV2ZXIgOiAxLFxyXG4gICAgbmV2ZXJ0aGVsZXNzIDogMSxcclxuICAgIG5ldyA6IDEsXHJcbiAgICBuZXdseSA6IDEsXHJcbiAgICBuZXdzIDogMSxcclxuICAgIG5ld3NwYXBlciA6IDEsXHJcbiAgICBuZXh0IDogMSxcclxuICAgIG5pY2UgOiAxLFxyXG4gICAgbmlnaHQgOiAxLFxyXG4gICAgbmluZSA6IDEsXHJcbiAgICBubyA6IDEsXHJcbiAgICBub2JvZHkgOiAxLFxyXG4gICAgbm9kIDogMSxcclxuICAgIG5vaXNlIDogMSxcclxuICAgIG5vbWluYXRpb24gOiAxLFxyXG4gICAgbm9uZSA6IDEsXHJcbiAgICBub25ldGhlbGVzcyA6IDEsXHJcbiAgICBub3IgOiAxLFxyXG4gICAgbm9ybWFsIDogMSxcclxuICAgIG5vcm1hbGx5IDogMSxcclxuICAgIG5vcnRoIDogMSxcclxuICAgIG5vcnRoZXJuIDogMSxcclxuICAgIG5vc2UgOiAxLFxyXG4gICAgbm90IDogMSxcclxuICAgIG5vdGUgOiAxLFxyXG4gICAgbm90aGluZyA6IDEsXHJcbiAgICBub3RpY2UgOiAxLFxyXG4gICAgbm90aW9uIDogMSxcclxuICAgIG5vdmVsIDogMSxcclxuICAgIG5vdyA6IDEsXHJcbiAgICBub3doZXJlIDogMSxcclxuICAgIFwibid0XCIgOiAxLFxyXG4gICAgbnVjbGVhciA6IDEsXHJcbiAgICBudW1iZXIgOiAxLFxyXG4gICAgbnVtZXJvdXMgOiAxLFxyXG4gICAgbnVyc2UgOiAxLFxyXG4gICAgbnV0IDogMSxcclxuICAgIG9iamVjdCA6IDEsXHJcbiAgICBvYmplY3RpdmUgOiAxLFxyXG4gICAgb2JsaWdhdGlvbiA6IDEsXHJcbiAgICBvYnNlcnZhdGlvbiA6IDEsXHJcbiAgICBvYnNlcnZlIDogMSxcclxuICAgIG9ic2VydmVyIDogMSxcclxuICAgIG9idGFpbiA6IDEsXHJcbiAgICBvYnZpb3VzIDogMSxcclxuICAgIG9idmlvdXNseSA6IDEsXHJcbiAgICBvY2Nhc2lvbiA6IDEsXHJcbiAgICBvY2Nhc2lvbmFsbHkgOiAxLFxyXG4gICAgb2NjdXBhdGlvbiA6IDEsXHJcbiAgICBvY2N1cHkgOiAxLFxyXG4gICAgb2NjdXIgOiAxLFxyXG4gICAgb2NlYW4gOiAxLFxyXG4gICAgb2RkIDogMSxcclxuICAgIG9kZHMgOiAxLFxyXG4gICAgb2YgOiAxLFxyXG4gICAgb2ZmIDogMSxcclxuICAgIG9mZmVuc2UgOiAxLFxyXG4gICAgb2ZmZW5zaXZlIDogMSxcclxuICAgIG9mZmVyIDogMSxcclxuICAgIG9mZmljZSA6IDEsXHJcbiAgICBvZmZpY2VyIDogMSxcclxuICAgIG9mZmljaWFsIDogMSxcclxuICAgIG9mdGVuIDogMSxcclxuICAgIG9oIDogMSxcclxuICAgIG9pbCA6IDEsXHJcbiAgICBvayA6IDEsXHJcbiAgICBva2F5IDogMSxcclxuICAgIG9sZCA6IDEsXHJcbiAgICBPbHltcGljIDogMSxcclxuICAgIG9uIDogMSxcclxuICAgIG9uY2UgOiAxLFxyXG4gICAgb25lIDogMSxcclxuICAgIG9uZ29pbmcgOiAxLFxyXG4gICAgb25pb24gOiAxLFxyXG4gICAgb25saW5lIDogMSxcclxuICAgIG9ubHkgOiAxLFxyXG4gICAgb250byA6IDEsXHJcbiAgICBvcGVuIDogMSxcclxuICAgIG9wZW5pbmcgOiAxLFxyXG4gICAgb3BlcmF0ZSA6IDEsXHJcbiAgICBvcGVyYXRpbmcgOiAxLFxyXG4gICAgb3BlcmF0aW9uIDogMSxcclxuICAgIG9wZXJhdG9yIDogMSxcclxuICAgIG9waW5pb24gOiAxLFxyXG4gICAgb3Bwb25lbnQgOiAxLFxyXG4gICAgb3Bwb3J0dW5pdHkgOiAxLFxyXG4gICAgb3Bwb3NlIDogMSxcclxuICAgIG9wcG9zaXRlIDogMSxcclxuICAgIG9wcG9zaXRpb24gOiAxLFxyXG4gICAgb3B0aW9uIDogMSxcclxuICAgIG9yIDogMSxcclxuICAgIG9yYW5nZSA6IDEsXHJcbiAgICBvcmRlciA6IDEsXHJcbiAgICBvcmRpbmFyeSA6IDEsXHJcbiAgICBvcmdhbmljIDogMSxcclxuICAgIG9yZ2FuaXphdGlvbiA6IDEsXHJcbiAgICBvcmdhbml6ZSA6IDEsXHJcbiAgICBvcmllbnRhdGlvbiA6IDEsXHJcbiAgICBvcmlnaW4gOiAxLFxyXG4gICAgb3JpZ2luYWwgOiAxLFxyXG4gICAgb3JpZ2luYWxseSA6IDEsXHJcbiAgICBvdGhlciA6IDEsXHJcbiAgICBvdGhlcnMgOiAxLFxyXG4gICAgb3RoZXJ3aXNlIDogMSxcclxuICAgIG91Z2h0IDogMSxcclxuICAgIG91ciA6IDEsXHJcbiAgICBvdXJzZWx2ZXMgOiAxLFxyXG4gICAgb3V0IDogMSxcclxuICAgIG91dGNvbWUgOiAxLFxyXG4gICAgb3V0c2lkZSA6IDEsXHJcbiAgICBvdmVuIDogMSxcclxuICAgIG92ZXIgOiAxLFxyXG4gICAgb3ZlcmFsbCA6IDEsXHJcbiAgICBvdmVyY29tZSA6IDEsXHJcbiAgICBvdmVybG9vayA6IDEsXHJcbiAgICBvd2UgOiAxLFxyXG4gICAgb3duIDogMSxcclxuICAgIG93bmVyIDogMSxcclxuICAgIHBhY2UgOiAxLFxyXG4gICAgcGFjayA6IDEsXHJcbiAgICBwYWNrYWdlIDogMSxcclxuICAgIHBhZ2UgOiAxLFxyXG4gICAgcGFpbiA6IDEsXHJcbiAgICBwYWluZnVsIDogMSxcclxuICAgIHBhaW50IDogMSxcclxuICAgIHBhaW50ZXIgOiAxLFxyXG4gICAgcGFpbnRpbmcgOiAxLFxyXG4gICAgcGFpciA6IDEsXHJcbiAgICBwYWxlIDogMSxcclxuICAgIFBhbGVzdGluaWFuIDogMSxcclxuICAgIHBhbG0gOiAxLFxyXG4gICAgcGFuIDogMSxcclxuICAgIHBhbmVsIDogMSxcclxuICAgIHBhbnQgOiAxLFxyXG4gICAgcGFwZXIgOiAxLFxyXG4gICAgcGFyZW50IDogMSxcclxuICAgIHBhcmsgOiAxLFxyXG4gICAgcGFya2luZyA6IDEsXHJcbiAgICBwYXJ0IDogMSxcclxuICAgIHBhcnRpY2lwYW50IDogMSxcclxuICAgIHBhcnRpY2lwYXRlIDogMSxcclxuICAgIHBhcnRpY2lwYXRpb24gOiAxLFxyXG4gICAgcGFydGljdWxhciA6IDEsXHJcbiAgICBwYXJ0aWN1bGFybHkgOiAxLFxyXG4gICAgcGFydGx5IDogMSxcclxuICAgIHBhcnRuZXIgOiAxLFxyXG4gICAgcGFydG5lcnNoaXAgOiAxLFxyXG4gICAgcGFydHkgOiAxLFxyXG4gICAgcGFzcyA6IDEsXHJcbiAgICBwYXNzYWdlIDogMSxcclxuICAgIHBhc3NlbmdlciA6IDEsXHJcbiAgICBwYXNzaW9uIDogMSxcclxuICAgIHBhc3QgOiAxLFxyXG4gICAgcGF0Y2ggOiAxLFxyXG4gICAgcGF0aCA6IDEsXHJcbiAgICBwYXRpZW50IDogMSxcclxuICAgIHBhdHRlcm4gOiAxLFxyXG4gICAgcGF1c2UgOiAxLFxyXG4gICAgcGF5IDogMSxcclxuICAgIHBheW1lbnQgOiAxLFxyXG4gICAgUEMgOiAxLFxyXG4gICAgcGVhY2UgOiAxLFxyXG4gICAgcGVhayA6IDEsXHJcbiAgICBwZWVyIDogMSxcclxuICAgIHBlbmFsdHkgOiAxLFxyXG4gICAgcGVvcGxlIDogMSxcclxuICAgIHBlcHBlciA6IDEsXHJcbiAgICBwZXIgOiAxLFxyXG4gICAgcGVyY2VpdmUgOiAxLFxyXG4gICAgcGVyY2VudGFnZSA6IDEsXHJcbiAgICBwZXJjZXB0aW9uIDogMSxcclxuICAgIHBlcmZlY3QgOiAxLFxyXG4gICAgcGVyZmVjdGx5IDogMSxcclxuICAgIHBlcmZvcm0gOiAxLFxyXG4gICAgcGVyZm9ybWFuY2UgOiAxLFxyXG4gICAgcGVyaGFwcyA6IDEsXHJcbiAgICBwZXJpb2QgOiAxLFxyXG4gICAgcGVybWFuZW50IDogMSxcclxuICAgIHBlcm1pc3Npb24gOiAxLFxyXG4gICAgcGVybWl0IDogMSxcclxuICAgIHBlcnNvbiA6IDEsXHJcbiAgICBwZXJzb25hbCA6IDEsXHJcbiAgICBwZXJzb25hbGl0eSA6IDEsXHJcbiAgICBwZXJzb25hbGx5IDogMSxcclxuICAgIHBlcnNvbm5lbCA6IDEsXHJcbiAgICBwZXJzcGVjdGl2ZSA6IDEsXHJcbiAgICBwZXJzdWFkZSA6IDEsXHJcbiAgICBwZXQgOiAxLFxyXG4gICAgcGhhc2UgOiAxLFxyXG4gICAgcGhlbm9tZW5vbiA6IDEsXHJcbiAgICBwaGlsb3NvcGh5IDogMSxcclxuICAgIHBob25lIDogMSxcclxuICAgIHBob3RvIDogMSxcclxuICAgIHBob3RvZ3JhcGggOiAxLFxyXG4gICAgcGhvdG9ncmFwaGVyIDogMSxcclxuICAgIHBocmFzZSA6IDEsXHJcbiAgICBwaHlzaWNhbCA6IDEsXHJcbiAgICBwaHlzaWNhbGx5IDogMSxcclxuICAgIHBoeXNpY2lhbiA6IDEsXHJcbiAgICBwaWFubyA6IDEsXHJcbiAgICBwaWNrIDogMSxcclxuICAgIHBpY3R1cmUgOiAxLFxyXG4gICAgcGllIDogMSxcclxuICAgIHBpZWNlIDogMSxcclxuICAgIHBpbGUgOiAxLFxyXG4gICAgcGlsb3QgOiAxLFxyXG4gICAgcGluZSA6IDEsXHJcbiAgICBwaW5rIDogMSxcclxuICAgIHBpcGUgOiAxLFxyXG4gICAgcGl0Y2ggOiAxLFxyXG4gICAgcGxhY2UgOiAxLFxyXG4gICAgcGxhbiA6IDEsXHJcbiAgICBwbGFuZSA6IDEsXHJcbiAgICBwbGFuZXQgOiAxLFxyXG4gICAgcGxhbm5pbmcgOiAxLFxyXG4gICAgcGxhbnQgOiAxLFxyXG4gICAgcGxhc3RpYyA6IDEsXHJcbiAgICBwbGF0ZSA6IDEsXHJcbiAgICBwbGF0Zm9ybSA6IDEsXHJcbiAgICBwbGF5IDogMSxcclxuICAgIHBsYXllciA6IDEsXHJcbiAgICBwbGVhc2UgOiAxLFxyXG4gICAgcGxlYXN1cmUgOiAxLFxyXG4gICAgcGxlbnR5IDogMSxcclxuICAgIHBsb3QgOiAxLFxyXG4gICAgcGx1cyA6IDEsXHJcbiAgICBQTSA6IDEsXHJcbiAgICBwb2NrZXQgOiAxLFxyXG4gICAgcG9lbSA6IDEsXHJcbiAgICBwb2V0IDogMSxcclxuICAgIHBvZXRyeSA6IDEsXHJcbiAgICBwb2ludCA6IDEsXHJcbiAgICBwb2xlIDogMSxcclxuICAgIHBvbGljZSA6IDEsXHJcbiAgICBwb2xpY3kgOiAxLFxyXG4gICAgcG9saXRpY2FsIDogMSxcclxuICAgIHBvbGl0aWNhbGx5IDogMSxcclxuICAgIHBvbGl0aWNpYW4gOiAxLFxyXG4gICAgcG9saXRpY3MgOiAxLFxyXG4gICAgcG9sbCA6IDEsXHJcbiAgICBwb2xsdXRpb24gOiAxLFxyXG4gICAgcG9vbCA6IDEsXHJcbiAgICBwb29yIDogMSxcclxuICAgIHBvcCA6IDEsXHJcbiAgICBwb3B1bGFyIDogMSxcclxuICAgIHBvcHVsYXRpb24gOiAxLFxyXG4gICAgcG9yY2ggOiAxLFxyXG4gICAgcG9ydCA6IDEsXHJcbiAgICBwb3J0aW9uIDogMSxcclxuICAgIHBvcnRyYWl0IDogMSxcclxuICAgIHBvcnRyYXkgOiAxLFxyXG4gICAgcG9zZSA6IDEsXHJcbiAgICBwb3NpdGlvbiA6IDEsXHJcbiAgICBwb3NpdGl2ZSA6IDEsXHJcbiAgICBwb3NzZXNzIDogMSxcclxuICAgIHBvc3NpYmlsaXR5IDogMSxcclxuICAgIHBvc3NpYmxlIDogMSxcclxuICAgIHBvc3NpYmx5IDogMSxcclxuICAgIHBvc3QgOiAxLFxyXG4gICAgcG90IDogMSxcclxuICAgIHBvdGF0byA6IDEsXHJcbiAgICBwb3RlbnRpYWwgOiAxLFxyXG4gICAgcG90ZW50aWFsbHkgOiAxLFxyXG4gICAgcG91bmQgOiAxLFxyXG4gICAgcG91ciA6IDEsXHJcbiAgICBwb3ZlcnR5IDogMSxcclxuICAgIHBvd2RlciA6IDEsXHJcbiAgICBwb3dlciA6IDEsXHJcbiAgICBwb3dlcmZ1bCA6IDEsXHJcbiAgICBwcmFjdGljYWwgOiAxLFxyXG4gICAgcHJhY3RpY2UgOiAxLFxyXG4gICAgcHJheSA6IDEsXHJcbiAgICBwcmF5ZXIgOiAxLFxyXG4gICAgcHJlY2lzZWx5IDogMSxcclxuICAgIHByZWRpY3QgOiAxLFxyXG4gICAgcHJlZmVyIDogMSxcclxuICAgIHByZWZlcmVuY2UgOiAxLFxyXG4gICAgcHJlZ25hbmN5IDogMSxcclxuICAgIHByZWduYW50IDogMSxcclxuICAgIHByZXBhcmF0aW9uIDogMSxcclxuICAgIHByZXBhcmUgOiAxLFxyXG4gICAgcHJlc2NyaXB0aW9uIDogMSxcclxuICAgIHByZXNlbmNlIDogMSxcclxuICAgIHByZXNlbnQgOiAxLFxyXG4gICAgcHJlc2VudGF0aW9uIDogMSxcclxuICAgIHByZXNlcnZlIDogMSxcclxuICAgIHByZXNpZGVudCA6IDEsXHJcbiAgICBwcmVzaWRlbnRpYWwgOiAxLFxyXG4gICAgcHJlc3MgOiAxLFxyXG4gICAgcHJlc3N1cmUgOiAxLFxyXG4gICAgcHJldGVuZCA6IDEsXHJcbiAgICBwcmV0dHkgOiAxLFxyXG4gICAgcHJldmVudCA6IDEsXHJcbiAgICBwcmV2aW91cyA6IDEsXHJcbiAgICBwcmV2aW91c2x5IDogMSxcclxuICAgIHByaWNlIDogMSxcclxuICAgIHByaWRlIDogMSxcclxuICAgIHByaWVzdCA6IDEsXHJcbiAgICBwcmltYXJpbHkgOiAxLFxyXG4gICAgcHJpbWFyeSA6IDEsXHJcbiAgICBwcmltZSA6IDEsXHJcbiAgICBwcmluY2lwYWwgOiAxLFxyXG4gICAgcHJpbmNpcGxlIDogMSxcclxuICAgIHByaW50IDogMSxcclxuICAgIHByaW9yIDogMSxcclxuICAgIHByaW9yaXR5IDogMSxcclxuICAgIHByaXNvbiA6IDEsXHJcbiAgICBwcmlzb25lciA6IDEsXHJcbiAgICBwcml2YWN5IDogMSxcclxuICAgIHByaXZhdGUgOiAxLFxyXG4gICAgcHJvYmFibHkgOiAxLFxyXG4gICAgcHJvYmxlbSA6IDEsXHJcbiAgICBwcm9jZWR1cmUgOiAxLFxyXG4gICAgcHJvY2VlZCA6IDEsXHJcbiAgICBwcm9jZXNzIDogMSxcclxuICAgIHByb2R1Y2UgOiAxLFxyXG4gICAgcHJvZHVjZXIgOiAxLFxyXG4gICAgcHJvZHVjdCA6IDEsXHJcbiAgICBwcm9kdWN0aW9uIDogMSxcclxuICAgIHByb2Zlc3Npb24gOiAxLFxyXG4gICAgcHJvZmVzc2lvbmFsIDogMSxcclxuICAgIHByb2Zlc3NvciA6IDEsXHJcbiAgICBwcm9maWxlIDogMSxcclxuICAgIHByb2ZpdCA6IDEsXHJcbiAgICBwcm9ncmFtIDogMSxcclxuICAgIHByb2dyZXNzIDogMSxcclxuICAgIHByb2plY3QgOiAxLFxyXG4gICAgcHJvbWluZW50IDogMSxcclxuICAgIHByb21pc2UgOiAxLFxyXG4gICAgcHJvbW90ZSA6IDEsXHJcbiAgICBwcm9tcHQgOiAxLFxyXG4gICAgcHJvb2YgOiAxLFxyXG4gICAgcHJvcGVyIDogMSxcclxuICAgIHByb3Blcmx5IDogMSxcclxuICAgIHByb3BlcnR5IDogMSxcclxuICAgIHByb3BvcnRpb24gOiAxLFxyXG4gICAgcHJvcG9zYWwgOiAxLFxyXG4gICAgcHJvcG9zZSA6IDEsXHJcbiAgICBwcm9wb3NlZCA6IDEsXHJcbiAgICBwcm9zZWN1dG9yIDogMSxcclxuICAgIHByb3NwZWN0IDogMSxcclxuICAgIHByb3RlY3QgOiAxLFxyXG4gICAgcHJvdGVjdGlvbiA6IDEsXHJcbiAgICBwcm90ZWluIDogMSxcclxuICAgIHByb3Rlc3QgOiAxLFxyXG4gICAgcHJvdWQgOiAxLFxyXG4gICAgcHJvdmUgOiAxLFxyXG4gICAgcHJvdmlkZSA6IDEsXHJcbiAgICBwcm92aWRlciA6IDEsXHJcbiAgICBwcm92aW5jZSA6IDEsXHJcbiAgICBwcm92aXNpb24gOiAxLFxyXG4gICAgcHN5Y2hvbG9naWNhbCA6IDEsXHJcbiAgICBwc3ljaG9sb2dpc3QgOiAxLFxyXG4gICAgcHN5Y2hvbG9neSA6IDEsXHJcbiAgICBwdWJsaWMgOiAxLFxyXG4gICAgcHVibGljYXRpb24gOiAxLFxyXG4gICAgcHVibGljbHkgOiAxLFxyXG4gICAgcHVibGlzaCA6IDEsXHJcbiAgICBwdWJsaXNoZXIgOiAxLFxyXG4gICAgcHVsbCA6IDEsXHJcbiAgICBwdW5pc2htZW50IDogMSxcclxuICAgIHB1cmNoYXNlIDogMSxcclxuICAgIHB1cmUgOiAxLFxyXG4gICAgcHVycG9zZSA6IDEsXHJcbiAgICBwdXJzdWUgOiAxLFxyXG4gICAgcHVzaCA6IDEsXHJcbiAgICBwdXQgOiAxLFxyXG4gICAgcXVhbGlmeSA6IDEsXHJcbiAgICBxdWFsaXR5IDogMSxcclxuICAgIHF1YXJ0ZXIgOiAxLFxyXG4gICAgcXVhcnRlcmJhY2sgOiAxLFxyXG4gICAgcXVlc3Rpb24gOiAxLFxyXG4gICAgcXVpY2sgOiAxLFxyXG4gICAgcXVpY2tseSA6IDEsXHJcbiAgICBxdWlldCA6IDEsXHJcbiAgICBxdWlldGx5IDogMSxcclxuICAgIHF1aXQgOiAxLFxyXG4gICAgcXVpdGUgOiAxLFxyXG4gICAgcXVvdGUgOiAxLFxyXG4gICAgcmFjZSA6IDEsXHJcbiAgICByYWNpYWwgOiAxLFxyXG4gICAgcmFkaWNhbCA6IDEsXHJcbiAgICByYWRpbyA6IDEsXHJcbiAgICByYWlsIDogMSxcclxuICAgIHJhaW4gOiAxLFxyXG4gICAgcmFpc2UgOiAxLFxyXG4gICAgcmFuZ2UgOiAxLFxyXG4gICAgcmFuayA6IDEsXHJcbiAgICByYXBpZCA6IDEsXHJcbiAgICByYXBpZGx5IDogMSxcclxuICAgIHJhcmUgOiAxLFxyXG4gICAgcmFyZWx5IDogMSxcclxuICAgIHJhdGUgOiAxLFxyXG4gICAgcmF0aGVyIDogMSxcclxuICAgIHJhdGluZyA6IDEsXHJcbiAgICByYXRpbyA6IDEsXHJcbiAgICByYXcgOiAxLFxyXG4gICAgcmVhY2ggOiAxLFxyXG4gICAgcmVhY3QgOiAxLFxyXG4gICAgcmVhY3Rpb24gOiAxLFxyXG4gICAgcmVhZCA6IDEsXHJcbiAgICByZWFkZXIgOiAxLFxyXG4gICAgcmVhZGluZyA6IDEsXHJcbiAgICByZWFkeSA6IDEsXHJcbiAgICByZWFsIDogMSxcclxuICAgIHJlYWxpdHkgOiAxLFxyXG4gICAgcmVhbGl6ZSA6IDEsXHJcbiAgICByZWFsbHkgOiAxLFxyXG4gICAgcmVhc29uIDogMSxcclxuICAgIHJlYXNvbmFibGUgOiAxLFxyXG4gICAgcmVjYWxsIDogMSxcclxuICAgIHJlY2VpdmUgOiAxLFxyXG4gICAgcmVjZW50IDogMSxcclxuICAgIHJlY2VudGx5IDogMSxcclxuICAgIHJlY2lwZSA6IDEsXHJcbiAgICByZWNvZ25pdGlvbiA6IDEsXHJcbiAgICByZWNvZ25pemUgOiAxLFxyXG4gICAgcmVjb21tZW5kIDogMSxcclxuICAgIHJlY29tbWVuZGF0aW9uIDogMSxcclxuICAgIHJlY29yZCA6IDEsXHJcbiAgICByZWNvcmRpbmcgOiAxLFxyXG4gICAgcmVjb3ZlciA6IDEsXHJcbiAgICByZWNvdmVyeSA6IDEsXHJcbiAgICByZWNydWl0IDogMSxcclxuICAgIHJlZCA6IDEsXHJcbiAgICByZWR1Y2UgOiAxLFxyXG4gICAgcmVkdWN0aW9uIDogMSxcclxuICAgIHJlZmVyIDogMSxcclxuICAgIHJlZmVyZW5jZSA6IDEsXHJcbiAgICByZWZsZWN0IDogMSxcclxuICAgIHJlZmxlY3Rpb24gOiAxLFxyXG4gICAgcmVmb3JtIDogMSxcclxuICAgIHJlZnVnZWUgOiAxLFxyXG4gICAgcmVmdXNlIDogMSxcclxuICAgIHJlZ2FyZCA6IDEsXHJcbiAgICByZWdhcmRpbmcgOiAxLFxyXG4gICAgcmVnYXJkbGVzcyA6IDEsXHJcbiAgICByZWdpbWUgOiAxLFxyXG4gICAgcmVnaW9uIDogMSxcclxuICAgIHJlZ2lvbmFsIDogMSxcclxuICAgIHJlZ2lzdGVyIDogMSxcclxuICAgIHJlZ3VsYXIgOiAxLFxyXG4gICAgcmVndWxhcmx5IDogMSxcclxuICAgIHJlZ3VsYXRlIDogMSxcclxuICAgIHJlZ3VsYXRpb24gOiAxLFxyXG4gICAgcmVpbmZvcmNlIDogMSxcclxuICAgIHJlamVjdCA6IDEsXHJcbiAgICByZWxhdGUgOiAxLFxyXG4gICAgcmVsYXRpb24gOiAxLFxyXG4gICAgcmVsYXRpb25zaGlwIDogMSxcclxuICAgIHJlbGF0aXZlIDogMSxcclxuICAgIHJlbGF0aXZlbHkgOiAxLFxyXG4gICAgcmVsYXggOiAxLFxyXG4gICAgcmVsZWFzZSA6IDEsXHJcbiAgICByZWxldmFudCA6IDEsXHJcbiAgICByZWxpZWYgOiAxLFxyXG4gICAgcmVsaWdpb24gOiAxLFxyXG4gICAgcmVsaWdpb3VzIDogMSxcclxuICAgIHJlbHkgOiAxLFxyXG4gICAgcmVtYWluIDogMSxcclxuICAgIHJlbWFpbmluZyA6IDEsXHJcbiAgICByZW1hcmthYmxlIDogMSxcclxuICAgIHJlbWVtYmVyIDogMSxcclxuICAgIHJlbWluZCA6IDEsXHJcbiAgICByZW1vdGUgOiAxLFxyXG4gICAgcmVtb3ZlIDogMSxcclxuICAgIHJlcGVhdCA6IDEsXHJcbiAgICByZXBlYXRlZGx5IDogMSxcclxuICAgIHJlcGxhY2UgOiAxLFxyXG4gICAgcmVwbHkgOiAxLFxyXG4gICAgcmVwb3J0IDogMSxcclxuICAgIHJlcG9ydGVyIDogMSxcclxuICAgIHJlcHJlc2VudCA6IDEsXHJcbiAgICByZXByZXNlbnRhdGlvbiA6IDEsXHJcbiAgICByZXByZXNlbnRhdGl2ZSA6IDEsXHJcbiAgICBSZXB1YmxpY2FuIDogMSxcclxuICAgIHJlcHV0YXRpb24gOiAxLFxyXG4gICAgcmVxdWVzdCA6IDEsXHJcbiAgICByZXF1aXJlIDogMSxcclxuICAgIHJlcXVpcmVtZW50IDogMSxcclxuICAgIHJlc2VhcmNoIDogMSxcclxuICAgIHJlc2VhcmNoZXIgOiAxLFxyXG4gICAgcmVzZW1ibGUgOiAxLFxyXG4gICAgcmVzZXJ2YXRpb24gOiAxLFxyXG4gICAgcmVzaWRlbnQgOiAxLFxyXG4gICAgcmVzaXN0IDogMSxcclxuICAgIHJlc2lzdGFuY2UgOiAxLFxyXG4gICAgcmVzb2x1dGlvbiA6IDEsXHJcbiAgICByZXNvbHZlIDogMSxcclxuICAgIHJlc29ydCA6IDEsXHJcbiAgICByZXNvdXJjZSA6IDEsXHJcbiAgICByZXNwZWN0IDogMSxcclxuICAgIHJlc3BvbmQgOiAxLFxyXG4gICAgcmVzcG9uZGVudCA6IDEsXHJcbiAgICByZXNwb25zZSA6IDEsXHJcbiAgICByZXNwb25zaWJpbGl0eSA6IDEsXHJcbiAgICByZXNwb25zaWJsZSA6IDEsXHJcbiAgICByZXN0IDogMSxcclxuICAgIHJlc3RhdXJhbnQgOiAxLFxyXG4gICAgcmVzdG9yZSA6IDEsXHJcbiAgICByZXN0cmljdGlvbiA6IDEsXHJcbiAgICByZXN1bHQgOiAxLFxyXG4gICAgcmV0YWluIDogMSxcclxuICAgIHJldGlyZSA6IDEsXHJcbiAgICByZXRpcmVtZW50IDogMSxcclxuICAgIHJldHVybiA6IDEsXHJcbiAgICByZXZlYWwgOiAxLFxyXG4gICAgcmV2ZW51ZSA6IDEsXHJcbiAgICByZXZpZXcgOiAxLFxyXG4gICAgcmV2b2x1dGlvbiA6IDEsXHJcbiAgICByaHl0aG0gOiAxLFxyXG4gICAgcmljZSA6IDEsXHJcbiAgICByaWNoIDogMSxcclxuICAgIHJpZCA6IDEsXHJcbiAgICByaWRlIDogMSxcclxuICAgIHJpZmxlIDogMSxcclxuICAgIHJpZ2h0IDogMSxcclxuICAgIHJpbmcgOiAxLFxyXG4gICAgcmlzZSA6IDEsXHJcbiAgICByaXNrIDogMSxcclxuICAgIHJpdmVyIDogMSxcclxuICAgIHJvYWQgOiAxLFxyXG4gICAgcm9jayA6IDEsXHJcbiAgICByb2xlIDogMSxcclxuICAgIHJvbGwgOiAxLFxyXG4gICAgcm9tYW50aWMgOiAxLFxyXG4gICAgcm9vZiA6IDEsXHJcbiAgICByb29tIDogMSxcclxuICAgIHJvb3QgOiAxLFxyXG4gICAgcm9wZSA6IDEsXHJcbiAgICByb3NlIDogMSxcclxuICAgIHJvdWdoIDogMSxcclxuICAgIHJvdWdobHkgOiAxLFxyXG4gICAgcm91bmQgOiAxLFxyXG4gICAgcm91dGUgOiAxLFxyXG4gICAgcm91dGluZSA6IDEsXHJcbiAgICByb3cgOiAxLFxyXG4gICAgcnViIDogMSxcclxuICAgIHJ1bGUgOiAxLFxyXG4gICAgcnVuIDogMSxcclxuICAgIHJ1bm5pbmcgOiAxLFxyXG4gICAgcnVyYWwgOiAxLFxyXG4gICAgcnVzaCA6IDEsXHJcbiAgICBSdXNzaWFuIDogMSxcclxuICAgIHNhY3JlZCA6IDEsXHJcbiAgICBzYWQgOiAxLFxyXG4gICAgc2FmZSA6IDEsXHJcbiAgICBzYWZldHkgOiAxLFxyXG4gICAgc2FrZSA6IDEsXHJcbiAgICBzYWxhZCA6IDEsXHJcbiAgICBzYWxhcnkgOiAxLFxyXG4gICAgc2FsZSA6IDEsXHJcbiAgICBzYWxlcyA6IDEsXHJcbiAgICBzYWx0IDogMSxcclxuICAgIHNhbWUgOiAxLFxyXG4gICAgc2FtcGxlIDogMSxcclxuICAgIHNhbmN0aW9uIDogMSxcclxuICAgIHNhbmQgOiAxLFxyXG4gICAgc2F0ZWxsaXRlIDogMSxcclxuICAgIHNhdGlzZmFjdGlvbiA6IDEsXHJcbiAgICBzYXRpc2Z5IDogMSxcclxuICAgIHNhdWNlIDogMSxcclxuICAgIHNhdmUgOiAxLFxyXG4gICAgc2F2aW5nIDogMSxcclxuICAgIHNheSA6IDEsXHJcbiAgICBzY2FsZSA6IDEsXHJcbiAgICBzY2FuZGFsIDogMSxcclxuICAgIHNjYXJlZCA6IDEsXHJcbiAgICBzY2VuYXJpbyA6IDEsXHJcbiAgICBzY2VuZSA6IDEsXHJcbiAgICBzY2hlZHVsZSA6IDEsXHJcbiAgICBzY2hlbWUgOiAxLFxyXG4gICAgc2Nob2xhciA6IDEsXHJcbiAgICBzY2hvbGFyc2hpcCA6IDEsXHJcbiAgICBzY2hvb2wgOiAxLFxyXG4gICAgc2NpZW5jZSA6IDEsXHJcbiAgICBzY2llbnRpZmljIDogMSxcclxuICAgIHNjaWVudGlzdCA6IDEsXHJcbiAgICBzY29wZSA6IDEsXHJcbiAgICBzY29yZSA6IDEsXHJcbiAgICBzY3JlYW0gOiAxLFxyXG4gICAgc2NyZWVuIDogMSxcclxuICAgIHNjcmlwdCA6IDEsXHJcbiAgICBzZWEgOiAxLFxyXG4gICAgc2VhcmNoIDogMSxcclxuICAgIHNlYXNvbiA6IDEsXHJcbiAgICBzZWF0IDogMSxcclxuICAgIHNlY29uZCA6IDEsXHJcbiAgICBzZWNyZXQgOiAxLFxyXG4gICAgc2VjcmV0YXJ5IDogMSxcclxuICAgIHNlY3Rpb24gOiAxLFxyXG4gICAgc2VjdG9yIDogMSxcclxuICAgIHNlY3VyZSA6IDEsXHJcbiAgICBzZWN1cml0eSA6IDEsXHJcbiAgICBzZWUgOiAxLFxyXG4gICAgc2VlZCA6IDEsXHJcbiAgICBzZWVrIDogMSxcclxuICAgIHNlZW0gOiAxLFxyXG4gICAgc2VnbWVudCA6IDEsXHJcbiAgICBzZWl6ZSA6IDEsXHJcbiAgICBzZWxlY3QgOiAxLFxyXG4gICAgc2VsZWN0aW9uIDogMSxcclxuICAgIHNlbGYgOiAxLFxyXG4gICAgc2VsbCA6IDEsXHJcbiAgICBTZW5hdGUgOiAxLFxyXG4gICAgc2VuYXRvciA6IDEsXHJcbiAgICBzZW5kIDogMSxcclxuICAgIHNlbmlvciA6IDEsXHJcbiAgICBzZW5zZSA6IDEsXHJcbiAgICBzZW5zaXRpdmUgOiAxLFxyXG4gICAgc2VudGVuY2UgOiAxLFxyXG4gICAgc2VwYXJhdGUgOiAxLFxyXG4gICAgc2VxdWVuY2UgOiAxLFxyXG4gICAgc2VyaWVzIDogMSxcclxuICAgIHNlcmlvdXMgOiAxLFxyXG4gICAgc2VyaW91c2x5IDogMSxcclxuICAgIHNlcnZlIDogMSxcclxuICAgIHNlcnZpY2UgOiAxLFxyXG4gICAgc2Vzc2lvbiA6IDEsXHJcbiAgICBzZXQgOiAxLFxyXG4gICAgc2V0dGluZyA6IDEsXHJcbiAgICBzZXR0bGUgOiAxLFxyXG4gICAgc2V0dGxlbWVudCA6IDEsXHJcbiAgICBzZXZlbiA6IDEsXHJcbiAgICBzZXZlcmFsIDogMSxcclxuICAgIHNldmVyZSA6IDEsXHJcbiAgICBzZXggOiAxLFxyXG4gICAgc2V4dWFsIDogMSxcclxuICAgIHNoYWRlIDogMSxcclxuICAgIHNoYWRvdyA6IDEsXHJcbiAgICBzaGFrZSA6IDEsXHJcbiAgICBzaGFsbCA6IDEsXHJcbiAgICBzaGFwZSA6IDEsXHJcbiAgICBzaGFyZSA6IDEsXHJcbiAgICBzaGFycCA6IDEsXHJcbiAgICBzaGUgOiAxLFxyXG4gICAgc2hlZXQgOiAxLFxyXG4gICAgc2hlbGYgOiAxLFxyXG4gICAgc2hlbGwgOiAxLFxyXG4gICAgc2hlbHRlciA6IDEsXHJcbiAgICBzaGlmdCA6IDEsXHJcbiAgICBzaGluZSA6IDEsXHJcbiAgICBzaGlwIDogMSxcclxuICAgIHNoaXJ0IDogMSxcclxuICAgIHNoaXQgOiAxLFxyXG4gICAgc2hvY2sgOiAxLFxyXG4gICAgc2hvZSA6IDEsXHJcbiAgICBzaG9vdCA6IDEsXHJcbiAgICBzaG9vdGluZyA6IDEsXHJcbiAgICBzaG9wIDogMSxcclxuICAgIHNob3BwaW5nIDogMSxcclxuICAgIHNob3JlIDogMSxcclxuICAgIHNob3J0IDogMSxcclxuICAgIHNob3J0bHkgOiAxLFxyXG4gICAgc2hvdCA6IDEsXHJcbiAgICBzaG91bGQgOiAxLFxyXG4gICAgc2hvdWxkZXIgOiAxLFxyXG4gICAgc2hvdXQgOiAxLFxyXG4gICAgc2hvdyA6IDEsXHJcbiAgICBzaG93ZXIgOiAxLFxyXG4gICAgc2hydWcgOiAxLFxyXG4gICAgc2h1dCA6IDEsXHJcbiAgICBzaWNrIDogMSxcclxuICAgIHNpZGUgOiAxLFxyXG4gICAgc2lnaCA6IDEsXHJcbiAgICBzaWdodCA6IDEsXHJcbiAgICBzaWduIDogMSxcclxuICAgIHNpZ25hbCA6IDEsXHJcbiAgICBzaWduaWZpY2FuY2UgOiAxLFxyXG4gICAgc2lnbmlmaWNhbnQgOiAxLFxyXG4gICAgc2lnbmlmaWNhbnRseSA6IDEsXHJcbiAgICBzaWxlbmNlIDogMSxcclxuICAgIHNpbGVudCA6IDEsXHJcbiAgICBzaWx2ZXIgOiAxLFxyXG4gICAgc2ltaWxhciA6IDEsXHJcbiAgICBzaW1pbGFybHkgOiAxLFxyXG4gICAgc2ltcGxlIDogMSxcclxuICAgIHNpbXBseSA6IDEsXHJcbiAgICBzaW4gOiAxLFxyXG4gICAgc2luY2UgOiAxLFxyXG4gICAgc2luZyA6IDEsXHJcbiAgICBzaW5nZXIgOiAxLFxyXG4gICAgc2luZ2xlIDogMSxcclxuICAgIHNpbmsgOiAxLFxyXG4gICAgc2lyIDogMSxcclxuICAgIHNpc3RlciA6IDEsXHJcbiAgICBzaXQgOiAxLFxyXG4gICAgc2l0ZSA6IDEsXHJcbiAgICBzaXR1YXRpb24gOiAxLFxyXG4gICAgc2l4IDogMSxcclxuICAgIHNpemUgOiAxLFxyXG4gICAgc2tpIDogMSxcclxuICAgIHNraWxsIDogMSxcclxuICAgIHNraW4gOiAxLFxyXG4gICAgc2t5IDogMSxcclxuICAgIHNsYXZlIDogMSxcclxuICAgIHNsZWVwIDogMSxcclxuICAgIHNsaWNlIDogMSxcclxuICAgIHNsaWRlIDogMSxcclxuICAgIHNsaWdodCA6IDEsXHJcbiAgICBzbGlnaHRseSA6IDEsXHJcbiAgICBzbGlwIDogMSxcclxuICAgIHNsb3cgOiAxLFxyXG4gICAgc2xvd2x5IDogMSxcclxuICAgIHNtYWxsIDogMSxcclxuICAgIHNtYXJ0IDogMSxcclxuICAgIHNtZWxsIDogMSxcclxuICAgIHNtaWxlIDogMSxcclxuICAgIHNtb2tlIDogMSxcclxuICAgIHNtb290aCA6IDEsXHJcbiAgICBzbmFwIDogMSxcclxuICAgIHNub3cgOiAxLFxyXG4gICAgc28gOiAxLFxyXG4gICAgXCJzby1jYWxsZWRcIiA6IDEsXHJcbiAgICBzb2NjZXIgOiAxLFxyXG4gICAgc29jaWFsIDogMSxcclxuICAgIHNvY2lldHkgOiAxLFxyXG4gICAgc29mdCA6IDEsXHJcbiAgICBzb2Z0d2FyZSA6IDEsXHJcbiAgICBzb2lsIDogMSxcclxuICAgIHNvbGFyIDogMSxcclxuICAgIHNvbGRpZXIgOiAxLFxyXG4gICAgc29saWQgOiAxLFxyXG4gICAgc29sdXRpb24gOiAxLFxyXG4gICAgc29sdmUgOiAxLFxyXG4gICAgc29tZSA6IDEsXHJcbiAgICBzb21lYm9keSA6IDEsXHJcbiAgICBzb21laG93IDogMSxcclxuICAgIHNvbWVvbmUgOiAxLFxyXG4gICAgc29tZXRoaW5nIDogMSxcclxuICAgIHNvbWV0aW1lcyA6IDEsXHJcbiAgICBzb21ld2hhdCA6IDEsXHJcbiAgICBzb21ld2hlcmUgOiAxLFxyXG4gICAgc29uIDogMSxcclxuICAgIHNvbmcgOiAxLFxyXG4gICAgc29vbiA6IDEsXHJcbiAgICBzb3BoaXN0aWNhdGVkIDogMSxcclxuICAgIHNvcnJ5IDogMSxcclxuICAgIHNvcnQgOiAxLFxyXG4gICAgc291bCA6IDEsXHJcbiAgICBzb3VuZCA6IDEsXHJcbiAgICBzb3VwIDogMSxcclxuICAgIHNvdXJjZSA6IDEsXHJcbiAgICBzb3V0aCA6IDEsXHJcbiAgICBzb3V0aGVybiA6IDEsXHJcbiAgICBTb3ZpZXQgOiAxLFxyXG4gICAgc3BhY2UgOiAxLFxyXG4gICAgU3BhbmlzaCA6IDEsXHJcbiAgICBzcGVhayA6IDEsXHJcbiAgICBzcGVha2VyIDogMSxcclxuICAgIHNwZWNpYWwgOiAxLFxyXG4gICAgc3BlY2lhbGlzdCA6IDEsXHJcbiAgICBzcGVjaWVzIDogMSxcclxuICAgIHNwZWNpZmljIDogMSxcclxuICAgIHNwZWNpZmljYWxseSA6IDEsXHJcbiAgICBzcGVlY2ggOiAxLFxyXG4gICAgc3BlZWQgOiAxLFxyXG4gICAgc3BlbmQgOiAxLFxyXG4gICAgc3BlbmRpbmcgOiAxLFxyXG4gICAgc3BpbiA6IDEsXHJcbiAgICBzcGlyaXQgOiAxLFxyXG4gICAgc3Bpcml0dWFsIDogMSxcclxuICAgIHNwbGl0IDogMSxcclxuICAgIHNwb2tlc21hbiA6IDEsXHJcbiAgICBzcG9ydCA6IDEsXHJcbiAgICBzcG90IDogMSxcclxuICAgIHNwcmVhZCA6IDEsXHJcbiAgICBzcHJpbmcgOiAxLFxyXG4gICAgc3F1YXJlIDogMSxcclxuICAgIHNxdWVlemUgOiAxLFxyXG4gICAgc3RhYmlsaXR5IDogMSxcclxuICAgIHN0YWJsZSA6IDEsXHJcbiAgICBzdGFmZiA6IDEsXHJcbiAgICBzdGFnZSA6IDEsXHJcbiAgICBzdGFpciA6IDEsXHJcbiAgICBzdGFrZSA6IDEsXHJcbiAgICBzdGFuZCA6IDEsXHJcbiAgICBzdGFuZGFyZCA6IDEsXHJcbiAgICBzdGFuZGluZyA6IDEsXHJcbiAgICBzdGFyIDogMSxcclxuICAgIHN0YXJlIDogMSxcclxuICAgIHN0YXJ0IDogMSxcclxuICAgIHN0YXRlIDogMSxcclxuICAgIHN0YXRlbWVudCA6IDEsXHJcbiAgICBzdGF0aW9uIDogMSxcclxuICAgIHN0YXRpc3RpY3MgOiAxLFxyXG4gICAgc3RhdHVzIDogMSxcclxuICAgIHN0YXkgOiAxLFxyXG4gICAgc3RlYWR5IDogMSxcclxuICAgIHN0ZWFsIDogMSxcclxuICAgIHN0ZWVsIDogMSxcclxuICAgIHN0ZXAgOiAxLFxyXG4gICAgc3RpY2sgOiAxLFxyXG4gICAgc3RpbGwgOiAxLFxyXG4gICAgc3RpciA6IDEsXHJcbiAgICBzdG9jayA6IDEsXHJcbiAgICBzdG9tYWNoIDogMSxcclxuICAgIHN0b25lIDogMSxcclxuICAgIHN0b3AgOiAxLFxyXG4gICAgc3RvcmFnZSA6IDEsXHJcbiAgICBzdG9yZSA6IDEsXHJcbiAgICBzdG9ybSA6IDEsXHJcbiAgICBzdG9yeSA6IDEsXHJcbiAgICBzdHJhaWdodCA6IDEsXHJcbiAgICBzdHJhbmdlIDogMSxcclxuICAgIHN0cmFuZ2VyIDogMSxcclxuICAgIHN0cmF0ZWdpYyA6IDEsXHJcbiAgICBzdHJhdGVneSA6IDEsXHJcbiAgICBzdHJlYW0gOiAxLFxyXG4gICAgc3RyZWV0IDogMSxcclxuICAgIHN0cmVuZ3RoIDogMSxcclxuICAgIHN0cmVuZ3RoZW4gOiAxLFxyXG4gICAgc3RyZXNzIDogMSxcclxuICAgIHN0cmV0Y2ggOiAxLFxyXG4gICAgc3RyaWtlIDogMSxcclxuICAgIHN0cmluZyA6IDEsXHJcbiAgICBzdHJpcCA6IDEsXHJcbiAgICBzdHJva2UgOiAxLFxyXG4gICAgc3Ryb25nIDogMSxcclxuICAgIHN0cm9uZ2x5IDogMSxcclxuICAgIHN0cnVjdHVyZSA6IDEsXHJcbiAgICBzdHJ1Z2dsZSA6IDEsXHJcbiAgICBzdHVkZW50IDogMSxcclxuICAgIHN0dWRpbyA6IDEsXHJcbiAgICBzdHVkeSA6IDEsXHJcbiAgICBzdHVmZiA6IDEsXHJcbiAgICBzdHVwaWQgOiAxLFxyXG4gICAgc3R5bGUgOiAxLFxyXG4gICAgc3ViamVjdCA6IDEsXHJcbiAgICBzdWJtaXQgOiAxLFxyXG4gICAgc3Vic2VxdWVudCA6IDEsXHJcbiAgICBzdWJzdGFuY2UgOiAxLFxyXG4gICAgc3Vic3RhbnRpYWwgOiAxLFxyXG4gICAgc3VjY2VlZCA6IDEsXHJcbiAgICBzdWNjZXNzIDogMSxcclxuICAgIHN1Y2Nlc3NmdWwgOiAxLFxyXG4gICAgc3VjY2Vzc2Z1bGx5IDogMSxcclxuICAgIHN1Y2ggOiAxLFxyXG4gICAgc3VkZGVuIDogMSxcclxuICAgIHN1ZGRlbmx5IDogMSxcclxuICAgIHN1ZSA6IDEsXHJcbiAgICBzdWZmZXIgOiAxLFxyXG4gICAgc3VmZmljaWVudCA6IDEsXHJcbiAgICBzdWdhciA6IDEsXHJcbiAgICBzdWdnZXN0IDogMSxcclxuICAgIHN1Z2dlc3Rpb24gOiAxLFxyXG4gICAgc3VpY2lkZSA6IDEsXHJcbiAgICBzdWl0IDogMSxcclxuICAgIHN1bW1lciA6IDEsXHJcbiAgICBzdW1taXQgOiAxLFxyXG4gICAgc3VuIDogMSxcclxuICAgIHN1cGVyIDogMSxcclxuICAgIHN1cHBseSA6IDEsXHJcbiAgICBzdXBwb3J0IDogMSxcclxuICAgIHN1cHBvcnRlciA6IDEsXHJcbiAgICBzdXBwb3NlIDogMSxcclxuICAgIHN1cHBvc2VkIDogMSxcclxuICAgIFN1cHJlbWUgOiAxLFxyXG4gICAgc3VyZSA6IDEsXHJcbiAgICBzdXJlbHkgOiAxLFxyXG4gICAgc3VyZmFjZSA6IDEsXHJcbiAgICBzdXJnZXJ5IDogMSxcclxuICAgIHN1cnByaXNlIDogMSxcclxuICAgIHN1cnByaXNlZCA6IDEsXHJcbiAgICBzdXJwcmlzaW5nIDogMSxcclxuICAgIHN1cnByaXNpbmdseSA6IDEsXHJcbiAgICBzdXJyb3VuZCA6IDEsXHJcbiAgICBzdXJ2ZXkgOiAxLFxyXG4gICAgc3Vydml2YWwgOiAxLFxyXG4gICAgc3Vydml2ZSA6IDEsXHJcbiAgICBzdXJ2aXZvciA6IDEsXHJcbiAgICBzdXNwZWN0IDogMSxcclxuICAgIHN1c3RhaW4gOiAxLFxyXG4gICAgc3dlYXIgOiAxLFxyXG4gICAgc3dlZXAgOiAxLFxyXG4gICAgc3dlZXQgOiAxLFxyXG4gICAgc3dpbSA6IDEsXHJcbiAgICBzd2luZyA6IDEsXHJcbiAgICBzd2l0Y2ggOiAxLFxyXG4gICAgc3ltYm9sIDogMSxcclxuICAgIHN5bXB0b20gOiAxLFxyXG4gICAgc3lzdGVtIDogMSxcclxuICAgIHRhYmxlIDogMSxcclxuICAgIHRhYmxlc3Bvb24gOiAxLFxyXG4gICAgdGFjdGljIDogMSxcclxuICAgIHRhaWwgOiAxLFxyXG4gICAgdGFrZSA6IDEsXHJcbiAgICB0YWxlIDogMSxcclxuICAgIHRhbGVudCA6IDEsXHJcbiAgICB0YWxrIDogMSxcclxuICAgIHRhbGwgOiAxLFxyXG4gICAgdGFuayA6IDEsXHJcbiAgICB0YXAgOiAxLFxyXG4gICAgdGFwZSA6IDEsXHJcbiAgICB0YXJnZXQgOiAxLFxyXG4gICAgdGFzayA6IDEsXHJcbiAgICB0YXN0ZSA6IDEsXHJcbiAgICB0YXggOiAxLFxyXG4gICAgdGF4cGF5ZXIgOiAxLFxyXG4gICAgdGVhIDogMSxcclxuICAgIHRlYWNoIDogMSxcclxuICAgIHRlYWNoZXIgOiAxLFxyXG4gICAgdGVhY2hpbmcgOiAxLFxyXG4gICAgdGVhbSA6IDEsXHJcbiAgICB0ZWFyIDogMSxcclxuICAgIHRlYXNwb29uIDogMSxcclxuICAgIHRlY2huaWNhbCA6IDEsXHJcbiAgICB0ZWNobmlxdWUgOiAxLFxyXG4gICAgdGVjaG5vbG9neSA6IDEsXHJcbiAgICB0ZWVuIDogMSxcclxuICAgIHRlZW5hZ2VyIDogMSxcclxuICAgIHRlbGVwaG9uZSA6IDEsXHJcbiAgICB0ZWxlc2NvcGUgOiAxLFxyXG4gICAgdGVsZXZpc2lvbiA6IDEsXHJcbiAgICB0ZWxsIDogMSxcclxuICAgIHRlbXBlcmF0dXJlIDogMSxcclxuICAgIHRlbXBvcmFyeSA6IDEsXHJcbiAgICB0ZW4gOiAxLFxyXG4gICAgdGVuZCA6IDEsXHJcbiAgICB0ZW5kZW5jeSA6IDEsXHJcbiAgICB0ZW5uaXMgOiAxLFxyXG4gICAgdGVuc2lvbiA6IDEsXHJcbiAgICB0ZW50IDogMSxcclxuICAgIHRlcm0gOiAxLFxyXG4gICAgdGVybXMgOiAxLFxyXG4gICAgdGVycmlibGUgOiAxLFxyXG4gICAgdGVycml0b3J5IDogMSxcclxuICAgIHRlcnJvciA6IDEsXHJcbiAgICB0ZXJyb3Jpc20gOiAxLFxyXG4gICAgdGVycm9yaXN0IDogMSxcclxuICAgIHRlc3QgOiAxLFxyXG4gICAgdGVzdGlmeSA6IDEsXHJcbiAgICB0ZXN0aW1vbnkgOiAxLFxyXG4gICAgdGVzdGluZyA6IDEsXHJcbiAgICB0ZXh0IDogMSxcclxuICAgIHRoYW4gOiAxLFxyXG4gICAgdGhhbmsgOiAxLFxyXG4gICAgdGhhbmtzIDogMSxcclxuICAgIHRoYXQgOiAxLFxyXG4gICAgdGhlIDogMSxcclxuICAgIHRoZWF0ZXIgOiAxLFxyXG4gICAgdGhlaXIgOiAxLFxyXG4gICAgdGhlbSA6IDEsXHJcbiAgICB0aGVtZSA6IDEsXHJcbiAgICB0aGVtc2VsdmVzIDogMSxcclxuICAgIHRoZW4gOiAxLFxyXG4gICAgdGhlb3J5IDogMSxcclxuICAgIHRoZXJhcHkgOiAxLFxyXG4gICAgdGhlcmUgOiAxLFxyXG4gICAgdGhlcmVmb3JlIDogMSxcclxuICAgIHRoZXNlIDogMSxcclxuICAgIHRoZXkgOiAxLFxyXG4gICAgdGhpY2sgOiAxLFxyXG4gICAgdGhpbiA6IDEsXHJcbiAgICB0aGluZyA6IDEsXHJcbiAgICB0aGluayA6IDEsXHJcbiAgICB0aGlua2luZyA6IDEsXHJcbiAgICB0aGlyZCA6IDEsXHJcbiAgICB0aGlydHkgOiAxLFxyXG4gICAgdGhpcyA6IDEsXHJcbiAgICB0aG9zZSA6IDEsXHJcbiAgICB0aG91Z2ggOiAxLFxyXG4gICAgdGhvdWdodCA6IDEsXHJcbiAgICB0aG91c2FuZCA6IDEsXHJcbiAgICB0aHJlYXQgOiAxLFxyXG4gICAgdGhyZWF0ZW4gOiAxLFxyXG4gICAgdGhyZWUgOiAxLFxyXG4gICAgdGhyb2F0IDogMSxcclxuICAgIHRocm91Z2ggOiAxLFxyXG4gICAgdGhyb3VnaG91dCA6IDEsXHJcbiAgICB0aHJvdyA6IDEsXHJcbiAgICB0aHVzIDogMSxcclxuICAgIHRpY2tldCA6IDEsXHJcbiAgICB0aWUgOiAxLFxyXG4gICAgdGlnaHQgOiAxLFxyXG4gICAgdGltZSA6IDEsXHJcbiAgICB0aW55IDogMSxcclxuICAgIHRpcCA6IDEsXHJcbiAgICB0aXJlIDogMSxcclxuICAgIHRpcmVkIDogMSxcclxuICAgIHRpc3N1ZSA6IDEsXHJcbiAgICB0aXRsZSA6IDEsXHJcbiAgICB0byA6IDEsXHJcbiAgICB0b2JhY2NvIDogMSxcclxuICAgIHRvZGF5IDogMSxcclxuICAgIHRvZSA6IDEsXHJcbiAgICB0b2dldGhlciA6IDEsXHJcbiAgICB0b21hdG8gOiAxLFxyXG4gICAgdG9tb3Jyb3cgOiAxLFxyXG4gICAgdG9uZSA6IDEsXHJcbiAgICB0b25ndWUgOiAxLFxyXG4gICAgdG9uaWdodCA6IDEsXHJcbiAgICB0b28gOiAxLFxyXG4gICAgdG9vbCA6IDEsXHJcbiAgICB0b290aCA6IDEsXHJcbiAgICB0b3AgOiAxLFxyXG4gICAgdG9waWMgOiAxLFxyXG4gICAgdG9zcyA6IDEsXHJcbiAgICB0b3RhbCA6IDEsXHJcbiAgICB0b3RhbGx5IDogMSxcclxuICAgIHRvdWNoIDogMSxcclxuICAgIHRvdWdoIDogMSxcclxuICAgIHRvdXIgOiAxLFxyXG4gICAgdG91cmlzdCA6IDEsXHJcbiAgICB0b3VybmFtZW50IDogMSxcclxuICAgIHRvd2FyZCA6IDEsXHJcbiAgICB0b3dhcmRzIDogMSxcclxuICAgIHRvd2VyIDogMSxcclxuICAgIHRvd24gOiAxLFxyXG4gICAgdG95IDogMSxcclxuICAgIHRyYWNlIDogMSxcclxuICAgIHRyYWNrIDogMSxcclxuICAgIHRyYWRlIDogMSxcclxuICAgIHRyYWRpdGlvbiA6IDEsXHJcbiAgICB0cmFkaXRpb25hbCA6IDEsXHJcbiAgICB0cmFmZmljIDogMSxcclxuICAgIHRyYWdlZHkgOiAxLFxyXG4gICAgdHJhaWwgOiAxLFxyXG4gICAgdHJhaW4gOiAxLFxyXG4gICAgdHJhaW5pbmcgOiAxLFxyXG4gICAgdHJhbnNmZXIgOiAxLFxyXG4gICAgdHJhbnNmb3JtIDogMSxcclxuICAgIHRyYW5zZm9ybWF0aW9uIDogMSxcclxuICAgIHRyYW5zaXRpb24gOiAxLFxyXG4gICAgdHJhbnNsYXRlIDogMSxcclxuICAgIHRyYW5zcG9ydGF0aW9uIDogMSxcclxuICAgIHRyYXZlbCA6IDEsXHJcbiAgICB0cmVhdCA6IDEsXHJcbiAgICB0cmVhdG1lbnQgOiAxLFxyXG4gICAgdHJlYXR5IDogMSxcclxuICAgIHRyZWUgOiAxLFxyXG4gICAgdHJlbWVuZG91cyA6IDEsXHJcbiAgICB0cmVuZCA6IDEsXHJcbiAgICB0cmlhbCA6IDEsXHJcbiAgICB0cmliZSA6IDEsXHJcbiAgICB0cmljayA6IDEsXHJcbiAgICB0cmlwIDogMSxcclxuICAgIHRyb29wIDogMSxcclxuICAgIHRyb3VibGUgOiAxLFxyXG4gICAgdHJ1Y2sgOiAxLFxyXG4gICAgdHJ1ZSA6IDEsXHJcbiAgICB0cnVseSA6IDEsXHJcbiAgICB0cnVzdCA6IDEsXHJcbiAgICB0cnV0aCA6IDEsXHJcbiAgICB0cnkgOiAxLFxyXG4gICAgdHViZSA6IDEsXHJcbiAgICB0dW5uZWwgOiAxLFxyXG4gICAgdHVybiA6IDEsXHJcbiAgICBUViA6IDEsXHJcbiAgICB0d2VsdmUgOiAxLFxyXG4gICAgdHdlbnR5IDogMSxcclxuICAgIHR3aWNlIDogMSxcclxuICAgIHR3aW4gOiAxLFxyXG4gICAgdHdvIDogMSxcclxuICAgIHR5cGUgOiAxLFxyXG4gICAgdHlwaWNhbCA6IDEsXHJcbiAgICB0eXBpY2FsbHkgOiAxLFxyXG4gICAgdWdseSA6IDEsXHJcbiAgICB1bHRpbWF0ZSA6IDEsXHJcbiAgICB1bHRpbWF0ZWx5IDogMSxcclxuICAgIHVuYWJsZSA6IDEsXHJcbiAgICB1bmNsZSA6IDEsXHJcbiAgICB1bmRlciA6IDEsXHJcbiAgICB1bmRlcmdvIDogMSxcclxuICAgIHVuZGVyc3RhbmQgOiAxLFxyXG4gICAgdW5kZXJzdGFuZGluZyA6IDEsXHJcbiAgICB1bmZvcnR1bmF0ZWx5IDogMSxcclxuICAgIHVuaWZvcm0gOiAxLFxyXG4gICAgdW5pb24gOiAxLFxyXG4gICAgdW5pcXVlIDogMSxcclxuICAgIHVuaXQgOiAxLFxyXG4gICAgVW5pdGVkIDogMSxcclxuICAgIHVuaXZlcnNhbCA6IDEsXHJcbiAgICB1bml2ZXJzZSA6IDEsXHJcbiAgICB1bml2ZXJzaXR5IDogMSxcclxuICAgIHVua25vd24gOiAxLFxyXG4gICAgdW5sZXNzIDogMSxcclxuICAgIHVubGlrZSA6IDEsXHJcbiAgICB1bmxpa2VseSA6IDEsXHJcbiAgICB1bnRpbCA6IDEsXHJcbiAgICB1bnVzdWFsIDogMSxcclxuICAgIHVwIDogMSxcclxuICAgIHVwb24gOiAxLFxyXG4gICAgdXBwZXIgOiAxLFxyXG4gICAgdXJiYW4gOiAxLFxyXG4gICAgdXJnZSA6IDEsXHJcbiAgICB1cyA6IDEsXHJcbiAgICB1c2UgOiAxLFxyXG4gICAgdXNlZCA6IDEsXHJcbiAgICB1c2VmdWwgOiAxLFxyXG4gICAgdXNlciA6IDEsXHJcbiAgICB1c3VhbCA6IDEsXHJcbiAgICB1c3VhbGx5IDogMSxcclxuICAgIHV0aWxpdHkgOiAxLFxyXG4gICAgdmFjYXRpb24gOiAxLFxyXG4gICAgdmFsbGV5IDogMSxcclxuICAgIHZhbHVhYmxlIDogMSxcclxuICAgIHZhbHVlIDogMSxcclxuICAgIHZhcmlhYmxlIDogMSxcclxuICAgIHZhcmlhdGlvbiA6IDEsXHJcbiAgICB2YXJpZXR5IDogMSxcclxuICAgIHZhcmlvdXMgOiAxLFxyXG4gICAgdmFyeSA6IDEsXHJcbiAgICB2YXN0IDogMSxcclxuICAgIHZlZ2V0YWJsZSA6IDEsXHJcbiAgICB2ZWhpY2xlIDogMSxcclxuICAgIHZlbnR1cmUgOiAxLFxyXG4gICAgdmVyc2lvbiA6IDEsXHJcbiAgICB2ZXJzdXMgOiAxLFxyXG4gICAgdmVyeSA6IDEsXHJcbiAgICB2ZXNzZWwgOiAxLFxyXG4gICAgdmV0ZXJhbiA6IDEsXHJcbiAgICB2aWEgOiAxLFxyXG4gICAgdmljdGltIDogMSxcclxuICAgIHZpY3RvcnkgOiAxLFxyXG4gICAgdmlkZW8gOiAxLFxyXG4gICAgdmlldyA6IDEsXHJcbiAgICB2aWV3ZXIgOiAxLFxyXG4gICAgdmlsbGFnZSA6IDEsXHJcbiAgICB2aW9sYXRlIDogMSxcclxuICAgIHZpb2xhdGlvbiA6IDEsXHJcbiAgICB2aW9sZW5jZSA6IDEsXHJcbiAgICB2aW9sZW50IDogMSxcclxuICAgIHZpcnR1YWxseSA6IDEsXHJcbiAgICB2aXJ0dWUgOiAxLFxyXG4gICAgdmlydXMgOiAxLFxyXG4gICAgdmlzaWJsZSA6IDEsXHJcbiAgICB2aXNpb24gOiAxLFxyXG4gICAgdmlzaXQgOiAxLFxyXG4gICAgdmlzaXRvciA6IDEsXHJcbiAgICB2aXN1YWwgOiAxLFxyXG4gICAgdml0YWwgOiAxLFxyXG4gICAgdm9pY2UgOiAxLFxyXG4gICAgdm9sdW1lIDogMSxcclxuICAgIHZvbHVudGVlciA6IDEsXHJcbiAgICB2b3RlIDogMSxcclxuICAgIHZvdGVyIDogMSxcclxuICAgIHZzIDogMSxcclxuICAgIHZ1bG5lcmFibGUgOiAxLFxyXG4gICAgd2FnZSA6IDEsXHJcbiAgICB3YWl0IDogMSxcclxuICAgIHdha2UgOiAxLFxyXG4gICAgd2FsayA6IDEsXHJcbiAgICB3YWxsIDogMSxcclxuICAgIHdhbmRlciA6IDEsXHJcbiAgICB3YW50IDogMSxcclxuICAgIHdhciA6IDEsXHJcbiAgICB3YXJtIDogMSxcclxuICAgIHdhcm4gOiAxLFxyXG4gICAgd2FybmluZyA6IDEsXHJcbiAgICB3YXNoIDogMSxcclxuICAgIHdhc3RlIDogMSxcclxuICAgIHdhdGNoIDogMSxcclxuICAgIHdhdGVyIDogMSxcclxuICAgIHdhdmUgOiAxLFxyXG4gICAgd2F5IDogMSxcclxuICAgIHdlIDogMSxcclxuICAgIHdlYWsgOiAxLFxyXG4gICAgd2VhbHRoIDogMSxcclxuICAgIHdlYWx0aHkgOiAxLFxyXG4gICAgd2VhcG9uIDogMSxcclxuICAgIHdlYXIgOiAxLFxyXG4gICAgd2VhdGhlciA6IDEsXHJcbiAgICB3ZWRkaW5nIDogMSxcclxuICAgIHdlZWsgOiAxLFxyXG4gICAgd2Vla2VuZCA6IDEsXHJcbiAgICB3ZWVrbHkgOiAxLFxyXG4gICAgd2VpZ2ggOiAxLFxyXG4gICAgd2VpZ2h0IDogMSxcclxuICAgIHdlbGNvbWUgOiAxLFxyXG4gICAgd2VsZmFyZSA6IDEsXHJcbiAgICB3ZWxsIDogMSxcclxuICAgIHdlc3QgOiAxLFxyXG4gICAgd2VzdGVybiA6IDEsXHJcbiAgICB3ZXQgOiAxLFxyXG4gICAgd2hhdCA6IDEsXHJcbiAgICB3aGF0ZXZlciA6IDEsXHJcbiAgICB3aGVlbCA6IDEsXHJcbiAgICB3aGVuIDogMSxcclxuICAgIHdoZW5ldmVyIDogMSxcclxuICAgIHdoZXJlIDogMSxcclxuICAgIHdoZXJlYXMgOiAxLFxyXG4gICAgd2hldGhlciA6IDEsXHJcbiAgICB3aGljaCA6IDEsXHJcbiAgICB3aGlsZSA6IDEsXHJcbiAgICB3aGlzcGVyIDogMSxcclxuICAgIHdoaXRlIDogMSxcclxuICAgIHdobyA6IDEsXHJcbiAgICB3aG9sZSA6IDEsXHJcbiAgICB3aG9tIDogMSxcclxuICAgIHdob3NlIDogMSxcclxuICAgIHdoeSA6IDEsXHJcbiAgICB3aWRlIDogMSxcclxuICAgIHdpZGVseSA6IDEsXHJcbiAgICB3aWRlc3ByZWFkIDogMSxcclxuICAgIHdpZmUgOiAxLFxyXG4gICAgd2lsZCA6IDEsXHJcbiAgICB3aWxsIDogMSxcclxuICAgIHdpbGxpbmcgOiAxLFxyXG4gICAgd2luIDogMSxcclxuICAgIHdpbmQgOiAxLFxyXG4gICAgd2luZG93IDogMSxcclxuICAgIHdpbmUgOiAxLFxyXG4gICAgd2luZyA6IDEsXHJcbiAgICB3aW5uZXIgOiAxLFxyXG4gICAgd2ludGVyIDogMSxcclxuICAgIHdpcGUgOiAxLFxyXG4gICAgd2lyZSA6IDEsXHJcbiAgICB3aXNkb20gOiAxLFxyXG4gICAgd2lzZSA6IDEsXHJcbiAgICB3aXNoIDogMSxcclxuICAgIHdpdGggOiAxLFxyXG4gICAgd2l0aGRyYXcgOiAxLFxyXG4gICAgd2l0aGluIDogMSxcclxuICAgIHdpdGhvdXQgOiAxLFxyXG4gICAgd2l0bmVzcyA6IDEsXHJcbiAgICB3b21hbiA6IDEsXHJcbiAgICB3b25kZXIgOiAxLFxyXG4gICAgd29uZGVyZnVsIDogMSxcclxuICAgIHdvb2QgOiAxLFxyXG4gICAgd29vZGVuIDogMSxcclxuICAgIHdvcmQgOiAxLFxyXG4gICAgd29yayA6IDEsXHJcbiAgICB3b3JrZXIgOiAxLFxyXG4gICAgd29ya2luZyA6IDEsXHJcbiAgICB3b3JrcyA6IDEsXHJcbiAgICB3b3Jrc2hvcCA6IDEsXHJcbiAgICB3b3JsZCA6IDEsXHJcbiAgICB3b3JyaWVkIDogMSxcclxuICAgIHdvcnJ5IDogMSxcclxuICAgIHdvcnRoIDogMSxcclxuICAgIHdvdWxkIDogMSxcclxuICAgIHdvdW5kIDogMSxcclxuICAgIHdyYXAgOiAxLFxyXG4gICAgd3JpdGUgOiAxLFxyXG4gICAgd3JpdGVyIDogMSxcclxuICAgIHdyaXRpbmcgOiAxLFxyXG4gICAgd3JvbmcgOiAxLFxyXG4gICAgeWFyZCA6IDEsXHJcbiAgICB5ZWFoIDogMSxcclxuICAgIHllYXIgOiAxLFxyXG4gICAgeWVsbCA6IDEsXHJcbiAgICB5ZWxsb3cgOiAxLFxyXG4gICAgeWVzIDogMSxcclxuICAgIHllc3RlcmRheSA6IDEsXHJcbiAgICB5ZXQgOiAxLFxyXG4gICAgeWllbGQgOiAxLFxyXG4gICAgeW91IDogMSxcclxuICAgIHlvdW5nIDogMSxcclxuICAgIHlvdXIgOiAxLFxyXG4gICAgeW91cnMgOiAxLFxyXG4gICAgeW91cnNlbGYgOiAxLFxyXG4gICAgeW91dGggOiAxLFxyXG4gICAgem9uZSA6IDEsXHJcbiAgfTsiLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgZmluZGVyID0gcmVxdWlyZSgnLi9maW5kZXIuanMnKTtcclxuXHJcbmNvbnN0IEFQSV9EQUlMWV9MSU1JVCA9IDI1MDAwO1xyXG5sZXQgTUFYX1dPUkRTO1xyXG5sZXQgQ0FDSEVfQ0xVU1RFUlM7XHJcbmxldCBNQVhfTk9ERV9GUkVRVUVOQ1k7XHJcbmxldCBUUkFWRVJTRV9TSU1JTEFSO1xyXG5cclxubGV0IGNhY2hlSW5pdGlhbGl6ZXJDb21tb247XHJcbmxldCBjYWNoZUlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxubGV0IHBhcmFsbGVsQ2FjaGVJbml0UmVxdWVzdHMgPSAwO1xyXG5sZXQgdG90YWxXb3Jkc0xhc3REYXkgPSAwO1xyXG5sZXQgY2FjaGVJbml0SXNFcnJvciA9IGZhbHNlO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVtb3RlQ2FsbEluaXQoKSB7XHJcblxyXG4gIGlmICghY2FjaGVJc0luaXRpYWxpemVkKSB7XHJcbiAgICBwYXJhbGxlbENhY2hlSW5pdFJlcXVlc3RzKys7XHJcbiAgICBpZiAoIWNhY2hlSW5pdGlhbGl6ZXJDb21tb24pIHtcclxuICAgICAgbGV0IGN1cnRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgLy8gODY0MDAwMDAgbWlsbGlzZWNvbmRzICgyNCBob3VycylcclxuICAgICAgY2FjaGVJbml0aWFsaXplckNvbW1vbiA9IGZpbmRlci5maW5kRmlsZXMoXCJjYWNoZS93b3Jkc1wiLCBjdXJ0aW1lIC0gODY0MDAwMDApO1xyXG4gICAgICB0b3RhbFdvcmRzTGFzdERheSA9IGF3YWl0IGNhY2hlSW5pdGlhbGl6ZXJDb21tb247XHJcbiAgICAgIGNhY2hlSXNJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVtb3RlQ2FsbEluaXQgIHRvdGFsV29yZHNMYXN0RGF5IDogXCIrdG90YWxXb3Jkc0xhc3REYXkrXCIgZXJyb3JzOlwiK2ZpbmRlci5lcnJvcnMrXCIgcGFyYWxsZWxDYWNoZUluaXRSZXF1ZXN0czpcIitwYXJhbGxlbENhY2hlSW5pdFJlcXVlc3RzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IGNhY2hlSW5pdGlhbGl6ZXJDb21tb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodG90YWxXb3Jkc0xhc3REYXkgPj0gQVBJX0RBSUxZX0xJTUlUKSB7XHJcbiAgICBpZiAoIWNhY2hlSW5pdElzRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBwcm94eSBtb3JlIHJlcXVlc3QgdG8gQVBJIGZpbGUvc2luZ2xlICB0b3RhbFdvcmRzTGFzdERheSA+PSBBUElfREFJTFlfTElNSVQgOiAgXCIrdG90YWxXb3Jkc0xhc3REYXkrXCIgPj0gXCIrQVBJX0RBSUxZX0xJTUlUK1wiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgY2FjaGVJbml0SXNFcnJvciA9IHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvdGFsV29yZHNMYXN0RGF5Kys7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0Q3Jhd2xlcihcclxuICBfTUFYX1dPUkRTLFxyXG4gIF9DQUNIRV9DTFVTVEVSUyxcclxuICBfTUFYX05PREVfRlJFUVVFTkNZLFxyXG4gIF9UUkFWRVJTRV9TSU1JTEFSXHJcbiAgKSB7XHJcblxyXG4gIE1BWF9XT1JEUyA9IF9NQVhfV09SRFM7XHJcbiAgQ0FDSEVfQ0xVU1RFUlMgPSBfQ0FDSEVfQ0xVU1RFUlM7XHJcbiAgTUFYX05PREVfRlJFUVVFTkNZID0gX01BWF9OT0RFX0ZSRVFVRU5DWTtcclxuICBUUkFWRVJTRV9TSU1JTEFSID0gX1RSQVZFUlNFX1NJTUlMQVI7XHJcblxyXG5cclxuICBpZiAoIWZzLmV4aXN0c1N5bmMoXCJjYWNoZS93b3Jkc1wiKSl7XHJcbiAgICBmcy5ta2RpclN5bmMoXCJjYWNoZS93b3Jkc1wiLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcclxuICB9XHJcbiAgaWYgKCFmcy5leGlzdHNTeW5jKFwiY2FjaGUvY2x1c3RlcnNcIikpe1xyXG4gICAgZnMubWtkaXJTeW5jKFwiY2FjaGUvY2x1c3RlcnNcIik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZVdvcmRUb0Rpc3BsYXkoZGF0YSkge1xyXG5cclxuICAvLyBjcmVhdGUgbmV3IGFycmF5IHRvIHB1c2ggZGF0YSB0b1xyXG4gIGxldCByZXN1bHRzID0gW107XHJcbiAgbGV0IHJlc3VsdCA9IHtcclxuICAgIHdvcmQ6ZGF0YS53b3JkLFxyXG4gICAgZnJlcXVlbmN5OmRhdGEuZnJlcXVlbmN5LFxyXG4gICAgcHJvbnVuY2lhdGlvbjpkYXRhLnByb251bmNpYXRpb24sXHJcbiAgICByZXN1bHRzLCBldGM6XCJcIlxyXG4gIH07XHJcblxyXG4gIGlmIChkYXRhLnJlc3VsdHMpIGRhdGEucmVzdWx0cy5tYXAoZGVmID0+IHtcclxuICAgIGxldCBkZWZpbml0aW9uQXJyYXkgPSBbXTtcclxuICAgIGxldCBkZWZpbml0aW9uID0ge1xyXG4gICAgICBwYXJ0T2ZTcGVlY2g6ZGVmLnBhcnRPZlNwZWVjaCxcclxuICAgICAgcHJvcGVydGllczpkZWZpbml0aW9uQXJyYXlcclxuICAgIH07XHJcblxyXG4gICAgLy8gY3JlYXRlcyBhcnJheSBvZiBrZXlzIGluIG9iamVjdFxyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRlZik7XHJcbiAgICBrZXlzLm1hcChrZXkgPT4ge1xyXG5cclxuICAgICAgLy8gYnVpbGRzIHJlZ2V4IHRoYXQgbG9va3MgZm9yIGNhcGl0YWwgbGV0dGVyc1xyXG4gICAgICAvLyBUaGUgcmVzcG9uc2UgcGFyYW1ldGVycyBhcmUgaW4gY2FtZWxDYXNlLCBzbyB3ZSBuZWVkIHRvIElEXHJcbiAgICAgIC8vIHRoZSBjYXBpdGFsIGxldHRlcnMgYW5kIGFkZCBzcGFjZXMgaW5zdGVhZCBzbyB0aGUgXHJcbiAgICAgIC8vIGZyb250IGVuZCBjYW4gZWFzaWx5IGRpc3BsYXkgdGhlIHBhcmFtZXRlciBsYWJlbHNcclxuICAgICAgY29uc3QgcmVnZXggPSAvKD89W0EtWl0pLztcclxuXHJcbiAgICAgIC8vIGNyZWF0ZXMgcHJlc2VudGFibGUgbGFiZWxcclxuICAgICAgY29uc3QgbGFiZWwgPSBrZXkuc3BsaXQocmVnZXgpLmpvaW4oJyAnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgLy8gZ3JhYnMgdGhlIHZhbHVlIGZvciB0aGUgcGFyYW1ldGVyIGZyb20gdGhlXHJcbiAgICAgIC8vIGRlZmluaXRpb24gb2JqZWN0IGluIHJlc3BvbnNlXHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZGVmW2tleV07XHJcblxyXG4gICAgICAvLyBjb25zdHJ1Y3RzIG5ldyBvYmplY3QgdG8gc2VuZCB0byBmcm9udGVuZFxyXG4gICAgICBsZXQgbmV3T2JqID0ge1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGlzU3RyaW5nOiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBkZWZpbml0aW9uQXJyYXkucHVzaChuZXdPYmopO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXN1bHRzLnB1c2goZGVmaW5pdGlvbik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkU2luZ2xlV29yZCh3b3JkLCBhc29iamVjdCkge1xyXG5cclxuICBjb25zdCB3ZnBhdGggPSBgY2FjaGUvd29yZHMvJHt3b3JkfWA7XHJcblxyXG4gIGlmIChmcy5leGlzdHNTeW5jKHdmcGF0aCkpIHtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiRnJvbSBjYWNoZSBmaWxlL3NpbmdsZSBcIit3ZnBhdGgrXCIgIGFzb2JqZWN0OlwiK2Fzb2JqZWN0K1wiLi4uXFxuXCIpO1xyXG4gICAgbGV0IGlqc29uID0gZnMucmVhZEZpbGVTeW5jKHdmcGF0aCkudG9TdHJpbmcoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShpanNvbik7XHJcblxyXG4gICAgICBpZiAoYXNvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc2luZ2xlV29yZFRvRGlzcGxheShkYXRhKTtcclxuICAgICAgICBjb25zdCBvanNvbiA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7ICAgICAgICAgLy8gbW9kaWZpZWRcclxuICAgICAgICByZXR1cm4gb2pzb247XHJcbiAgICAgIH1cclxuICBcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiRGVsZXRlIGludmFsaWQgZmlsZSA6IFwiK3dmcGF0aCwgZSk7XHJcbiAgICAgIGZzLnVubGlua1N5bmMod2ZwYXRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBzdWNjZXNzID0gYXdhaXQgcmVtb3RlQ2FsbEluaXQoKTtcclxuICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gc2VuZCByZXF1ZXN0IHRvIHRoZSBXb3Jkc0FQSVxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgXCJtZXRob2RcIjpcIkdFVFwiLFxyXG4gICAgXCJ1cmxcIjpgaHR0cHM6Ly93b3Jkc2FwaXYxLnAucmFwaWRhcGkuY29tL3dvcmRzLyR7d29yZH1gLFxyXG4gICAgXCJoZWFkZXJzXCI6e1xyXG4gICAgXCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxyXG4gICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjpcIndvcmRzYXBpdjEucC5yYXBpZGFwaS5jb21cIixcclxuICAgIFwieC1yYXBpZGFwaS1rZXlcIjpwcm9jZXNzLmVudi5SQVBJREFQSV9LRVlcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGpzb24gPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKTsgIC8vIG9yaWdpbmFsXHJcbiAgZnMud3JpdGVGaWxlKHdmcGF0aCwgZGpzb24sIChlcnIpID0+IHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkNhY2hlIGZpbGUvc2luZ2xlIFwiK3dmcGF0aCtcIiAgYXNvYmplY3Q6XCIrYXNvYmplY3QrXCIgd3JpdGUgZmFpbHVyZSA6IFwiK2VycitcIlxcblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FjaGUgZmlsZS9zaW5nbGUgXCIrd2ZwYXRoK1wiICBhc29iamVjdDpcIithc29iamVjdCtcIiB3cml0dGVuIHN1Y2Nlc3NmdWxseVxcblwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKGFzb2JqZWN0KSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IHJlc3VsdCA9IHNpbmdsZVdvcmRUb0Rpc3BsYXkocmVzcG9uc2UuZGF0YSk7XHJcbiAgICBjb25zdCBvanNvbiA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7ICAgICAgICAgLy8gbW9kaWZpZWRcclxuICAgIHJldHVybiBvanNvbjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhdmVyc2VOb2RlIHtcclxuXHJcbiAgZW50cnk7dmFsO2xldmVsO3BhcnRPZlNwZWVjaDtcclxuICBkZWZpbml0aW9uO3N5bm9ueW1zO3NpbWlsYXI7d29yZHM7XHJcbiAga2V5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihieV9kZWYsIGVudHJ5LCB2YWwsIGxldmVsKSB7XHJcbiAgICB0aGlzLmVudHJ5PWVudHJ5O3RoaXMudmFsPXZhbDt0aGlzLmxldmVsPWxldmVsO1xyXG5cclxuICAgIHRoaXMuZGVmaW5pdGlvbiA9IHZhbC5kZWZpbml0aW9uOyBcclxuICAgIHRoaXMuc3lub255bXMgPSBbXTtcclxuICAgIHRoaXMuc2ltaWxhciA9IFtdO1xyXG4gICAgdGhpcy53b3JkcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkKGJ5X2RlZik7XHJcbiAgfVxyXG5cclxuICBhZGQoYnlfZGVmKSB7XHJcbiAgXHJcbiAgICB0aGlzLnBhcnRPZlNwZWVjaCA9IHRoaXMudmFsLnBhcnRPZlNwZWVjaDtcclxuICAgIHRoaXMuc3lub255bXMucHVzaC5hcHBseSh0aGlzLnN5bm9ueW1zLCB0aGlzLnZhbC5zeW5vbnltcyk7XHJcbiAgICB0aGlzLnN5bm9ueW1zLnB1c2godGhpcy5lbnRyeS53b3JkKTtcclxuICAgIHRoaXMuc3lub255bXMuc29ydCgpO1xyXG4gIFxyXG4gICAgdGhpcy5zaW1pbGFyLnB1c2guYXBwbHkodGhpcy5zaW1pbGFyLCB0aGlzLnZhbC5zaW1pbGFyVG8pO1xyXG4gICAgdGhpcy5zaW1pbGFyLnNvcnQoKTtcclxuICBcclxuICAgIHRoaXMud29yZHMucHVzaC5hcHBseSh0aGlzLndvcmRzLCB0aGlzLnN5bm9ueW1zKTtcclxuICAgIHRoaXMud29yZHMucHVzaC5hcHBseSh0aGlzLndvcmRzLCB0aGlzLnNpbWlsYXIpO1xyXG4gIFxyXG4gICAgdGhpcy5rZXkgPSB0aGlzLmxldmVsK1wiOjo6Ojo6OlwiK3RoaXMuc3lub255bXMubGVuZ3RoK1wiOjo6Ojo6XCIrdGhpcy5zeW5vbnltcy5qb2luKFwiLCBcIik7XHJcblxyXG4gICAgaWYgKCFieV9kZWZbdGhpcy52YWwuZGVmaW5pdGlvbl0pIHtcclxuXHJcbiAgICAgIGJ5X2RlZlt0aGlzLnZhbC5kZWZpbml0aW9uXSA9IHRoaXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wcmVzcygpIHtcclxuICAgIGRlbGV0ZSB0aGlzLnZhbDtcclxuICAgIGRlbGV0ZSB0aGlzLmtleTtcclxuICAgIGRlbGV0ZSB0aGlzLndvcmRzO1xyXG4gIH1cclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRGljdGlvbmFyeUFuZENoaWxkcmVuKHRyZXN1bHQsIHdvcmQsIHRyYXZlcnNpb24pIHtcclxuXHJcbiAgY29uc3QgYnlfZGVmID0gdHJlc3VsdC5ieV9kZWY7XHJcbiAgY29uc3QgZW50cnkgPSBhd2FpdCBsb2FkU2luZ2xlV29yZCh3b3JkLCB0cnVlKTtcclxuXHJcbiAgaWYgKCFlbnRyeSB8fFxyXG4gICAgICAodHJhdmVyc2lvbi5sZXZlbCA+IDEgJiYgXHJcbiAgICAgIGVudHJ5LmZyZXF1ZW5jeSAmJiBlbnRyeS5mcmVxdWVuY3k+PU1BWF9OT0RFX0ZSRVFVRU5DWSkpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBlbnRyeS5yZXN1bHRzKSB7XHJcbiAgICBjb25zdCB2YWwgPSBlbnRyeS5yZXN1bHRzW2tleV07IFxyXG5cclxuICAgIGxldCBub2RlID0gbmV3IFRyYXZlcnNlTm9kZShieV9kZWYsIGVudHJ5LCB2YWwsIHRyYXZlcnNpb24ubGV2ZWwpO1xyXG4gICAgaWYgKFRSQVZFUlNFX1NJTUlMQVIpIHtcclxuICAgICAgdHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdC5wdXNoLmFwcGx5KHRyYXZlcnNpb24ud29yZHNicmVhZHRoZmlyc3QsIG5vZGUud29yZHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdC5wdXNoLmFwcGx5KHRyYXZlcnNpb24ud29yZHNicmVhZHRoZmlyc3QsIG5vZGUuc3lub255bXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmF2ZXJzZUNsdXN0ZXIodHJlc3VsdCwgd29yZCkge1xyXG5cclxuICBsZXQgdHJhdmVyc2lvbiA9IHtcclxuICAgIGxldmVsIDogMSxcclxuICAgIHdvcmRzYnJlYWR0aGZpcnN0IDogW3dvcmRdXHJcbiAgfTtcclxuICB0cmVzdWx0Lm5vV29yZHMgPSAwO1xyXG4gIHRyZXN1bHQubWFzdGVyID0gYXdhaXQgbG9hZFNpbmdsZVdvcmQod29yZCwgdHJ1ZSk7XHJcblxyXG4gIGRvIHtcclxuICAgIHZhciBwcmV2aW91c2xldmVsY2hpbGR3b3JkcyA9IHRyYXZlcnNpb24ud29yZHNicmVhZHRoZmlyc3QuY29uY2F0KFtdKTtcclxuICAgIHRyYXZlcnNpb24ud29yZHNicmVhZHRoZmlyc3QgPSBbXTtcclxuXHJcbiAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICAgIGZvciAobGV0IHcgb2YgcHJldmlvdXNsZXZlbGNoaWxkd29yZHMpIHtcclxuICAgICAgaWYgKHRyZXN1bHQuYnlfd1t3XSkge1xyXG4gICAgICB9IGVsc2UgaWYgKHRyZXN1bHQubm9Xb3JkcyA+PSBNQVhfV09SRFMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxldmVsIFwiK3RyYXZlcnNpb24ubGV2ZWwrXCIgZmluaXNoZWQuIENvbXBsZXRlZC5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyZXN1bHQubm9Xb3JkcysrO1xyXG4gICAgICAgIHRyZXN1bHQuYnlfd1t3XSA9IDE7XHJcbiAgICAgICAgY29uc29sZS5sb2codHJlc3VsdC5ub1dvcmRzICsgXCIvXCIgKyBNQVhfV09SRFMpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IG5vZGVwcm9taXNlID0gbG9hZERpY3Rpb25hcnlBbmRDaGlsZHJlbih0cmVzdWx0LCB3LCB0cmF2ZXJzaW9uKTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKG5vZGVwcm9taXNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgY29uc29sZS5sb2coXCJMZXZlbCBcIit0cmF2ZXJzaW9uLmxldmVsK1wiIGZpbmlzaGVkLlwiKTtcclxuXHJcbiAgICB0cmF2ZXJzaW9uLmxldmVsKys7XHJcbiAgfSB3aGlsZSAodHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdC5sZW5ndGgpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRDbHVzdGVyKHdvcmQsIGFzb2JqZWN0KSB7XHJcblxyXG4gIGNvbnN0IGNmcGF0aCA9IGBjYWNoZS9jbHVzdGVycy8ke3dvcmR9YDtcclxuICBpZiAoQ0FDSEVfQ0xVU1RFUlMgJiYgZnMuZXhpc3RzU3luYyhjZnBhdGgpKSB7XHJcbiAgICBsZXQgaWpzb24gPSBmcy5yZWFkRmlsZVN5bmMoY2ZwYXRoKS50b1N0cmluZygpO1xyXG4gICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoaWpzb24pO1xyXG4gICAgY29uc29sZS5sb2coXCJGcm9tIGNhY2hlIGZpbGUvY2x1c3RlciBcIitjZnBhdGgrXCIgIGFzb2JqZWN0OlwiK2Fzb2JqZWN0K1wiLi4uXFxuXCIpO1xyXG5cclxuICAgIGlmIChhc29iamVjdCkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGlqc29uO1xyXG4gICAgfVxyXG5cclxuICB9IGVsc2Uge1xyXG5cclxuICAgIGNvbnN0IGJ5X2RlZiA9IHt9O1xyXG4gICAgY29uc3QgYnlfdyA9IHt9O1xyXG4gICAgY29uc3QgYnlfa2V5ID0gW107XHJcbiAgICBsZXQgdHJlc3VsdCA9IHtcclxuICAgICAgYnlfZGVmLFxyXG4gICAgICBieV93ICAgIH07XHJcbiAgICBjb25zdCBlbnRyeSA9IGF3YWl0IHRyYXZlcnNlQ2x1c3Rlcih0cmVzdWx0LCB3b3JkKTtcclxuICAgIGJ5X2tleS5wdXNoLmFwcGx5KGJ5X2tleSwgT2JqZWN0LnZhbHVlcyhieV9kZWYpKTtcclxuICAgIGNvbnN0IGNtcCA9IChmaXJzdEVsLCBzZWNvbmRFbCkgPT4ge1xyXG4gICAgICByZXR1cm4gZmlyc3RFbC5rZXkubG9jYWxlQ29tcGFyZShzZWNvbmRFbC5rZXkpO1xyXG4gICAgfTtcclxuICAgIGJ5X2tleS5zb3J0KGNtcCk7XHJcbiAgICBmb3IgKGxldCBkZWZvYmogb2YgYnlfa2V5KSB7XHJcbiAgICAgIGRlZm9iai5jb21wcmVzcygpO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgd29yZCxcclxuICAgICAgbm9DbHVzdGVyRW50cmllczpieV9rZXkubGVuZ3RoLFxyXG4gICAgICByZXN1bHRzOmJ5X2tleVxyXG4gICAgfTtcclxuICAgIGlmICh0cmVzdWx0Lm1hc3Rlcikge1xyXG4gICAgICByZXN1bHQuZnJlcXVlbmN5ID0gdHJlc3VsdC5tYXN0ZXIuZnJlcXVlbmN5O1xyXG4gICAgICByZXN1bHQucHJvbnVuY2lhdGlvbiA9IHRyZXN1bHQubWFzdGVyLnByb251bmNpYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNqc29uO1xyXG4gICAgaWYgKENBQ0hFX0NMVVNURVJTKSB7XHJcbiAgICAgIGNqc29uID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgZnMud3JpdGVGaWxlKGNmcGF0aCwgY2pzb24sIChlcnIpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2x1c3RlciBmaWxlL2NsdXN0ZXIgXCIrY2ZwYXRoK1wiICB3cml0ZSBmYWlsdXJlIDogXCIrZXJyK1wiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsdXN0ZXIgZmlsZS9jbHVzdGVyIFwiK2NmcGF0aCtcIiAgd3JpdHRlbiBzdWNjZXNzZnVsbHlcXG5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXNvYmplY3QpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghY2pzb24pIHtcclxuICAgICAgICBjanNvbiA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNqc29uO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRDb21tb25Xb3JkKHJlc3VsdCwgd29yZCwgbm9Xb3Jkcykge1xyXG5cclxuICBjb25zdCBlbnRyeSA9IGF3YWl0IGxvYWRTaW5nbGVXb3JkKHdvcmQsIHRydWUpO1xyXG5cclxuICBpZiAoZW50cnkpIHtcclxuXHJcbiAgICByZXN1bHQubm9Xb3JkcysrO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0Lm5vV29yZHMgKyBcIi9cIiArIG5vV29yZHMpO1xyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiBlbnRyeS5yZXN1bHRzKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGVudHJ5LnJlc3VsdHNba2V5XTsgXHJcbiAgICAgIGNvbnN0IHN5bm9ueW1zID0gdmFsLnN5bm9ueW1zID8gW3dvcmRdLmNvbmNhdCh2YWwuc3lub255bXMpIDogW3dvcmRdO1xyXG4gICAgICBzeW5vbnltcy5zb3J0KCk7XHJcbiAgICAgIGNvbnN0IHNpbWlsYXIgPSB2YWwuc2ltaWxhclRvID8gW10uY29uY2F0KHZhbC5zaW1pbGFyVG8pIDogW107XHJcbiAgICAgIHNpbWlsYXIuc29ydCgpO1xyXG5cclxuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHtcclxuICAgICAgICBwYXJ0T2ZTcGVlY2g6IHZhbC5wYXJ0T2ZTcGVlY2gsXHJcbiAgICAgICAgZGVmaW5pdGlvbjogdmFsLmRlZmluaXRpb24sXHJcbiAgICAgICAgc3lub255bXMsIHNpbWlsYXJcclxuICAgICAgfTtcclxuICAgICAgcmVzdWx0Lm5vRGVmaW5pdGlvbnMrKztcclxuICAgICAgcmVzdWx0LnJlc3VsdHMucHVzaChkZWZpbml0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQ29tbW9uV29yZHMoYXNvYmplY3QpIHtcclxuICBjb25zdCBjdyA9IHJlcXVpcmUoJy4vY29tbW9uLXdvcmRzLmpzJyk7XHJcblxyXG4gIC8vIGNyZWF0ZSBuZXcgYXJyYXkgdG8gcHVzaCBkYXRhIHRvXHJcbiAgbGV0IHJlc3VsdHMgPSBbXTtcclxuICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgbm9Xb3JkczowLFxyXG4gICAgbm9EZWZpbml0aW9uczowLFxyXG4gICAgcmVzdWx0c1xyXG4gIH07XHJcblxyXG4gIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gIGxldCBub1dvcmRzID0gT2JqZWN0LmtleXMoY3cuVGhlTW9zdENvbW1vbjMwMDApLmxlbmd0aDtcclxuICBmb3IgKGxldCBjb21tb25Xb3JkIGluIGN3LlRoZU1vc3RDb21tb24zMDAwKSB7XHJcbiAgICBwcm9taXNlcy5wdXNoKGxvYWRDb21tb25Xb3JkKHJlc3VsdCwgY29tbW9uV29yZCwgbm9Xb3JkcykpO1xyXG4gIH1cclxuICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gIGxldCBjanNvbjtcclxuICBpZiAoYXNvYmplY3QpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghY2pzb24pIHtcclxuICAgICAgY2pzb24gPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNqc29uO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xudmFyIGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbnZhciBodHRwRm9sbG93ID0gcmVxdWlyZSgnZm9sbG93LXJlZGlyZWN0cycpLmh0dHA7XG52YXIgaHR0cHNGb2xsb3cgPSByZXF1aXJlKCdmb2xsb3ctcmVkaXJlY3RzJykuaHR0cHM7XG52YXIgdXJsID0gcmVxdWlyZSgndXJsJyk7XG52YXIgemxpYiA9IHJlcXVpcmUoJ3psaWInKTtcbnZhciBwa2cgPSByZXF1aXJlKCcuLy4uLy4uL3BhY2thZ2UuanNvbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvZW5oYW5jZUVycm9yJyk7XG5cbnZhciBpc0h0dHBzID0gL2h0dHBzOj8vO1xuXG4vKmVzbGludCBjb25zaXN0ZW50LXJldHVybjowKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaHR0cEFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaEh0dHBSZXF1ZXN0KHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKSB7XG4gICAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKHZhbHVlKSB7XG4gICAgICByZXNvbHZlUHJvbWlzZSh2YWx1ZSk7XG4gICAgfTtcbiAgICB2YXIgcmVqZWN0ID0gZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7XG4gICAgICByZWplY3RQcm9taXNlKHZhbHVlKTtcbiAgICB9O1xuICAgIHZhciBkYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIGhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIC8vIFNldCBVc2VyLUFnZW50IChyZXF1aXJlZCBieSBzb21lIHNlcnZlcnMpXG4gICAgLy8gT25seSBzZXQgaGVhZGVyIGlmIGl0IGhhc24ndCBiZWVuIHNldCBpbiBjb25maWdcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy82OVxuICAgIGlmICghaGVhZGVyc1snVXNlci1BZ2VudCddICYmICFoZWFkZXJzWyd1c2VyLWFnZW50J10pIHtcbiAgICAgIGhlYWRlcnNbJ1VzZXItQWdlbnQnXSA9ICdheGlvcy8nICsgcGtnLnZlcnNpb247XG4gICAgfVxuXG4gICAgaWYgKGRhdGEgJiYgIXV0aWxzLmlzU3RyZWFtKGRhdGEpKSB7XG4gICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSB7XG4gICAgICAgIC8vIE5vdGhpbmcgdG8gZG8uLi5cbiAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSkge1xuICAgICAgICBkYXRhID0gQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xuICAgICAgfSBlbHNlIGlmICh1dGlscy5pc1N0cmluZyhkYXRhKSkge1xuICAgICAgICBkYXRhID0gQnVmZmVyLmZyb20oZGF0YSwgJ3V0Zi04Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgICAgICdEYXRhIGFmdGVyIHRyYW5zZm9ybWF0aW9uIG11c3QgYmUgYSBzdHJpbmcsIGFuIEFycmF5QnVmZmVyLCBhIEJ1ZmZlciwgb3IgYSBTdHJlYW0nLFxuICAgICAgICAgIGNvbmZpZ1xuICAgICAgICApKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIENvbnRlbnQtTGVuZ3RoIGhlYWRlciBpZiBkYXRhIGV4aXN0c1xuICAgICAgaGVhZGVyc1snQ29udGVudC1MZW5ndGgnXSA9IGRhdGEubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICB2YXIgYXV0aCA9IHVuZGVmaW5lZDtcbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICBhdXRoID0gdXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZDtcbiAgICB9XG5cbiAgICAvLyBQYXJzZSB1cmxcbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICB2YXIgcGFyc2VkID0gdXJsLnBhcnNlKGZ1bGxQYXRoKTtcbiAgICB2YXIgcHJvdG9jb2wgPSBwYXJzZWQucHJvdG9jb2wgfHwgJ2h0dHA6JztcblxuICAgIGlmICghYXV0aCAmJiBwYXJzZWQuYXV0aCkge1xuICAgICAgdmFyIHVybEF1dGggPSBwYXJzZWQuYXV0aC5zcGxpdCgnOicpO1xuICAgICAgdmFyIHVybFVzZXJuYW1lID0gdXJsQXV0aFswXSB8fCAnJztcbiAgICAgIHZhciB1cmxQYXNzd29yZCA9IHVybEF1dGhbMV0gfHwgJyc7XG4gICAgICBhdXRoID0gdXJsVXNlcm5hbWUgKyAnOicgKyB1cmxQYXNzd29yZDtcbiAgICB9XG5cbiAgICBpZiAoYXV0aCkge1xuICAgICAgZGVsZXRlIGhlYWRlcnMuQXV0aG9yaXphdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgaXNIdHRwc1JlcXVlc3QgPSBpc0h0dHBzLnRlc3QocHJvdG9jb2wpO1xuICAgIHZhciBhZ2VudCA9IGlzSHR0cHNSZXF1ZXN0ID8gY29uZmlnLmh0dHBzQWdlbnQgOiBjb25maWcuaHR0cEFnZW50O1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBwYXRoOiBidWlsZFVSTChwYXJzZWQucGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyksXG4gICAgICBtZXRob2Q6IGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICBhZ2VudDogYWdlbnQsXG4gICAgICBhZ2VudHM6IHsgaHR0cDogY29uZmlnLmh0dHBBZ2VudCwgaHR0cHM6IGNvbmZpZy5odHRwc0FnZW50IH0sXG4gICAgICBhdXRoOiBhdXRoXG4gICAgfTtcblxuICAgIGlmIChjb25maWcuc29ja2V0UGF0aCkge1xuICAgICAgb3B0aW9ucy5zb2NrZXRQYXRoID0gY29uZmlnLnNvY2tldFBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMuaG9zdG5hbWUgPSBwYXJzZWQuaG9zdG5hbWU7XG4gICAgICBvcHRpb25zLnBvcnQgPSBwYXJzZWQucG9ydDtcbiAgICB9XG5cbiAgICB2YXIgcHJveHkgPSBjb25maWcucHJveHk7XG4gICAgaWYgKCFwcm94eSAmJiBwcm94eSAhPT0gZmFsc2UpIHtcbiAgICAgIHZhciBwcm94eUVudiA9IHByb3RvY29sLnNsaWNlKDAsIC0xKSArICdfcHJveHknO1xuICAgICAgdmFyIHByb3h5VXJsID0gcHJvY2Vzcy5lbnZbcHJveHlFbnZdIHx8IHByb2Nlc3MuZW52W3Byb3h5RW52LnRvVXBwZXJDYXNlKCldO1xuICAgICAgaWYgKHByb3h5VXJsKSB7XG4gICAgICAgIHZhciBwYXJzZWRQcm94eVVybCA9IHVybC5wYXJzZShwcm94eVVybCk7XG4gICAgICAgIHZhciBub1Byb3h5RW52ID0gcHJvY2Vzcy5lbnYubm9fcHJveHkgfHwgcHJvY2Vzcy5lbnYuTk9fUFJPWFk7XG4gICAgICAgIHZhciBzaG91bGRQcm94eSA9IHRydWU7XG5cbiAgICAgICAgaWYgKG5vUHJveHlFbnYpIHtcbiAgICAgICAgICB2YXIgbm9Qcm94eSA9IG5vUHJveHlFbnYuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gdHJpbShzKSB7XG4gICAgICAgICAgICByZXR1cm4gcy50cmltKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzaG91bGRQcm94eSA9ICFub1Byb3h5LnNvbWUoZnVuY3Rpb24gcHJveHlNYXRjaChwcm94eUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghcHJveHlFbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm94eUVsZW1lbnQgPT09ICcqJykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm94eUVsZW1lbnRbMF0gPT09ICcuJyAmJlxuICAgICAgICAgICAgICAgIHBhcnNlZC5ob3N0bmFtZS5zdWJzdHIocGFyc2VkLmhvc3RuYW1lLmxlbmd0aCAtIHByb3h5RWxlbWVudC5sZW5ndGgpID09PSBwcm94eUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQuaG9zdG5hbWUgPT09IHByb3h5RWxlbWVudDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHNob3VsZFByb3h5KSB7XG4gICAgICAgICAgcHJveHkgPSB7XG4gICAgICAgICAgICBob3N0OiBwYXJzZWRQcm94eVVybC5ob3N0bmFtZSxcbiAgICAgICAgICAgIHBvcnQ6IHBhcnNlZFByb3h5VXJsLnBvcnRcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHBhcnNlZFByb3h5VXJsLmF1dGgpIHtcbiAgICAgICAgICAgIHZhciBwcm94eVVybEF1dGggPSBwYXJzZWRQcm94eVVybC5hdXRoLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICBwcm94eS5hdXRoID0ge1xuICAgICAgICAgICAgICB1c2VybmFtZTogcHJveHlVcmxBdXRoWzBdLFxuICAgICAgICAgICAgICBwYXNzd29yZDogcHJveHlVcmxBdXRoWzFdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm94eSkge1xuICAgICAgb3B0aW9ucy5ob3N0bmFtZSA9IHByb3h5Lmhvc3Q7XG4gICAgICBvcHRpb25zLmhvc3QgPSBwcm94eS5ob3N0O1xuICAgICAgb3B0aW9ucy5oZWFkZXJzLmhvc3QgPSBwYXJzZWQuaG9zdG5hbWUgKyAocGFyc2VkLnBvcnQgPyAnOicgKyBwYXJzZWQucG9ydCA6ICcnKTtcbiAgICAgIG9wdGlvbnMucG9ydCA9IHByb3h5LnBvcnQ7XG4gICAgICBvcHRpb25zLnBhdGggPSBwcm90b2NvbCArICcvLycgKyBwYXJzZWQuaG9zdG5hbWUgKyAocGFyc2VkLnBvcnQgPyAnOicgKyBwYXJzZWQucG9ydCA6ICcnKSArIG9wdGlvbnMucGF0aDtcblxuICAgICAgLy8gQmFzaWMgcHJveHkgYXV0aG9yaXphdGlvblxuICAgICAgaWYgKHByb3h5LmF1dGgpIHtcbiAgICAgICAgdmFyIGJhc2U2NCA9IEJ1ZmZlci5mcm9tKHByb3h5LmF1dGgudXNlcm5hbWUgKyAnOicgKyBwcm94eS5hdXRoLnBhc3N3b3JkLCAndXRmOCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydQcm94eS1BdXRob3JpemF0aW9uJ10gPSAnQmFzaWMgJyArIGJhc2U2NDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdHJhbnNwb3J0O1xuICAgIHZhciBpc0h0dHBzUHJveHkgPSBpc0h0dHBzUmVxdWVzdCAmJiAocHJveHkgPyBpc0h0dHBzLnRlc3QocHJveHkucHJvdG9jb2wpIDogdHJ1ZSk7XG4gICAgaWYgKGNvbmZpZy50cmFuc3BvcnQpIHtcbiAgICAgIHRyYW5zcG9ydCA9IGNvbmZpZy50cmFuc3BvcnQ7XG4gICAgfSBlbHNlIGlmIChjb25maWcubWF4UmVkaXJlY3RzID09PSAwKSB7XG4gICAgICB0cmFuc3BvcnQgPSBpc0h0dHBzUHJveHkgPyBodHRwcyA6IGh0dHA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb25maWcubWF4UmVkaXJlY3RzKSB7XG4gICAgICAgIG9wdGlvbnMubWF4UmVkaXJlY3RzID0gY29uZmlnLm1heFJlZGlyZWN0cztcbiAgICAgIH1cbiAgICAgIHRyYW5zcG9ydCA9IGlzSHR0cHNQcm94eSA/IGh0dHBzRm9sbG93IDogaHR0cEZvbGxvdztcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm1heENvbnRlbnRMZW5ndGggJiYgY29uZmlnLm1heENvbnRlbnRMZW5ndGggPiAtMSkge1xuICAgICAgb3B0aW9ucy5tYXhCb2R5TGVuZ3RoID0gY29uZmlnLm1heENvbnRlbnRMZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSByZXF1ZXN0XG4gICAgdmFyIHJlcSA9IHRyYW5zcG9ydC5yZXF1ZXN0KG9wdGlvbnMsIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlcykge1xuICAgICAgaWYgKHJlcS5hYm9ydGVkKSByZXR1cm47XG5cbiAgICAgIC8vIHVuY29tcHJlc3MgdGhlIHJlc3BvbnNlIGJvZHkgdHJhbnNwYXJlbnRseSBpZiByZXF1aXJlZFxuICAgICAgdmFyIHN0cmVhbSA9IHJlcztcbiAgICAgIHN3aXRjaCAocmVzLmhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXSkge1xuICAgICAgLyplc2xpbnQgZGVmYXVsdC1jYXNlOjAqL1xuICAgICAgY2FzZSAnZ3ppcCc6XG4gICAgICBjYXNlICdjb21wcmVzcyc6XG4gICAgICBjYXNlICdkZWZsYXRlJzpcbiAgICAgICAgLy8gYWRkIHRoZSB1bnppcHBlciB0byB0aGUgYm9keSBzdHJlYW0gcHJvY2Vzc2luZyBwaXBlbGluZVxuICAgICAgICBzdHJlYW0gPSAocmVzLnN0YXR1c0NvZGUgPT09IDIwNCkgPyBzdHJlYW0gOiBzdHJlYW0ucGlwZSh6bGliLmNyZWF0ZVVuemlwKCkpO1xuXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgY29udGVudC1lbmNvZGluZyBpbiBvcmRlciB0byBub3QgY29uZnVzZSBkb3duc3RyZWFtIG9wZXJhdGlvbnNcbiAgICAgICAgZGVsZXRlIHJlcy5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyByZXR1cm4gdGhlIGxhc3QgcmVxdWVzdCBpbiBjYXNlIG9mIHJlZGlyZWN0c1xuICAgICAgdmFyIGxhc3RSZXF1ZXN0ID0gcmVzLnJlcSB8fCByZXE7XG5cbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c01lc3NhZ2UsXG4gICAgICAgIGhlYWRlcnM6IHJlcy5oZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogbGFzdFJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlID09PSAnc3RyZWFtJykge1xuICAgICAgICByZXNwb25zZS5kYXRhID0gc3RyZWFtO1xuICAgICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzcG9uc2VCdWZmZXIgPSBbXTtcbiAgICAgICAgc3RyZWFtLm9uKCdkYXRhJywgZnVuY3Rpb24gaGFuZGxlU3RyZWFtRGF0YShjaHVuaykge1xuICAgICAgICAgIHJlc3BvbnNlQnVmZmVyLnB1c2goY2h1bmspO1xuXG4gICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBjb250ZW50IGxlbmd0aCBpcyBub3Qgb3ZlciB0aGUgbWF4Q29udGVudExlbmd0aCBpZiBzcGVjaWZpZWRcbiAgICAgICAgICBpZiAoY29uZmlnLm1heENvbnRlbnRMZW5ndGggPiAtMSAmJiBCdWZmZXIuY29uY2F0KHJlc3BvbnNlQnVmZmVyKS5sZW5ndGggPiBjb25maWcubWF4Q29udGVudExlbmd0aCkge1xuICAgICAgICAgICAgc3RyZWFtLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHJlamVjdChjcmVhdGVFcnJvcignbWF4Q29udGVudExlbmd0aCBzaXplIG9mICcgKyBjb25maWcubWF4Q29udGVudExlbmd0aCArICcgZXhjZWVkZWQnLFxuICAgICAgICAgICAgICBjb25maWcsIG51bGwsIGxhc3RSZXF1ZXN0KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzdHJlYW0ub24oJ2Vycm9yJywgZnVuY3Rpb24gaGFuZGxlU3RyZWFtRXJyb3IoZXJyKSB7XG4gICAgICAgICAgaWYgKHJlcS5hYm9ydGVkKSByZXR1cm47XG4gICAgICAgICAgcmVqZWN0KGVuaGFuY2VFcnJvcihlcnIsIGNvbmZpZywgbnVsbCwgbGFzdFJlcXVlc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RyZWFtLm9uKCdlbmQnLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1FbmQoKSB7XG4gICAgICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9IEJ1ZmZlci5jb25jYXQocmVzcG9uc2VCdWZmZXIpO1xuICAgICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnYXJyYXlidWZmZXInKSB7XG4gICAgICAgICAgICByZXNwb25zZURhdGEgPSByZXNwb25zZURhdGEudG9TdHJpbmcoY29uZmlnLnJlc3BvbnNlRW5jb2RpbmcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSByZXNwb25zZURhdGE7XG4gICAgICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSBlcnJvcnNcbiAgICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdEVycm9yKGVycikge1xuICAgICAgaWYgKHJlcS5hYm9ydGVkKSByZXR1cm47XG4gICAgICByZWplY3QoZW5oYW5jZUVycm9yKGVyciwgY29uZmlnLCBudWxsLCByZXEpKTtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSByZXF1ZXN0IHRpbWVvdXRcbiAgICBpZiAoY29uZmlnLnRpbWVvdXQpIHtcbiAgICAgIC8vIFNvbWV0aW1lLCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSB2ZXJ5IHNsb3csIGFuZCBkb2VzIG5vdCByZXNwb25kLCB0aGUgY29ubmVjdCBldmVudCB3aWxsIGJlIGJsb2NrIGJ5IGV2ZW50IGxvb3Agc3lzdGVtLlxuICAgICAgLy8gQW5kIHRpbWVyIGNhbGxiYWNrIHdpbGwgYmUgZmlyZWQsIGFuZCBhYm9ydCgpIHdpbGwgYmUgaW52b2tlZCBiZWZvcmUgY29ubmVjdGlvbiwgdGhlbiBnZXQgXCJzb2NrZXQgaGFuZyB1cFwiIGFuZCBjb2RlIEVDT05OUkVTRVQuXG4gICAgICAvLyBBdCB0aGlzIHRpbWUsIGlmIHdlIGhhdmUgYSBsYXJnZSBudW1iZXIgb2YgcmVxdWVzdCwgbm9kZWpzIHdpbGwgaGFuZyB1cCBzb21lIHNvY2tldCBvbiBiYWNrZ3JvdW5kLiBhbmQgdGhlIG51bWJlciB3aWxsIHVwIGFuZCB1cC5cbiAgICAgIC8vIEFuZCB0aGVuIHRoZXNlIHNvY2tldCB3aGljaCBiZSBoYW5nIHVwIHdpbGwgZGV2b3JpbmcgQ1BVIGxpdHRsZSBieSBsaXR0bGUuXG4gICAgICAvLyBDbGllbnRSZXF1ZXN0LnNldFRpbWVvdXQgd2lsbCBiZSBmaXJlZCBvbiB0aGUgc3BlY2lmeSBtaWxsaXNlY29uZHMsIGFuZCBjYW4gbWFrZSBzdXJlIHRoYXQgYWJvcnQoKSB3aWxsIGJlIGZpcmVkIGFmdGVyIGNvbm5lY3QuXG4gICAgICByZXEuc2V0VGltZW91dChjb25maWcudGltZW91dCwgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdFRpbWVvdXQoKSB7XG4gICAgICAgIHJlcS5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmIChyZXEuYWJvcnRlZCkgcmV0dXJuO1xuXG4gICAgICAgIHJlcS5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICBpZiAodXRpbHMuaXNTdHJlYW0oZGF0YSkpIHtcbiAgICAgIGRhdGEub24oJ2Vycm9yJywgZnVuY3Rpb24gaGFuZGxlU3RyZWFtRXJyb3IoZXJyKSB7XG4gICAgICAgIHJlamVjdChlbmhhbmNlRXJyb3IoZXJyLCBjb25maWcsIG51bGwsIHJlcSkpO1xuICAgICAgfSkucGlwZShyZXEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXEuZW5kKGRhdGEpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNzZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmVhbVwiKTsiLCIvKipcbiAqIERldGVjdCBFbGVjdHJvbiByZW5kZXJlciBwcm9jZXNzLCB3aGljaCBpcyBub2RlLCBidXQgd2Ugc2hvdWxkXG4gKiB0cmVhdCBhcyBhIGJyb3dzZXIuXG4gKi9cblxuaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Jyb3dzZXIuanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLmpzJyk7XG59XG4iLCIvKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWVcbiAgICAgICAgICAgICAgICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgOiBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG4gICcjMDAwMENDJywgJyMwMDAwRkYnLCAnIzAwMzNDQycsICcjMDAzM0ZGJywgJyMwMDY2Q0MnLCAnIzAwNjZGRicsICcjMDA5OUNDJyxcbiAgJyMwMDk5RkYnLCAnIzAwQ0MwMCcsICcjMDBDQzMzJywgJyMwMENDNjYnLCAnIzAwQ0M5OScsICcjMDBDQ0NDJywgJyMwMENDRkYnLFxuICAnIzMzMDBDQycsICcjMzMwMEZGJywgJyMzMzMzQ0MnLCAnIzMzMzNGRicsICcjMzM2NkNDJywgJyMzMzY2RkYnLCAnIzMzOTlDQycsXG4gICcjMzM5OUZGJywgJyMzM0NDMDAnLCAnIzMzQ0MzMycsICcjMzNDQzY2JywgJyMzM0NDOTknLCAnIzMzQ0NDQycsICcjMzNDQ0ZGJyxcbiAgJyM2NjAwQ0MnLCAnIzY2MDBGRicsICcjNjYzM0NDJywgJyM2NjMzRkYnLCAnIzY2Q0MwMCcsICcjNjZDQzMzJywgJyM5OTAwQ0MnLFxuICAnIzk5MDBGRicsICcjOTkzM0NDJywgJyM5OTMzRkYnLCAnIzk5Q0MwMCcsICcjOTlDQzMzJywgJyNDQzAwMDAnLCAnI0NDMDAzMycsXG4gICcjQ0MwMDY2JywgJyNDQzAwOTknLCAnI0NDMDBDQycsICcjQ0MwMEZGJywgJyNDQzMzMDAnLCAnI0NDMzMzMycsICcjQ0MzMzY2JyxcbiAgJyNDQzMzOTknLCAnI0NDMzNDQycsICcjQ0MzM0ZGJywgJyNDQzY2MDAnLCAnI0NDNjYzMycsICcjQ0M5OTAwJywgJyNDQzk5MzMnLFxuICAnI0NDQ0MwMCcsICcjQ0NDQzMzJywgJyNGRjAwMDAnLCAnI0ZGMDAzMycsICcjRkYwMDY2JywgJyNGRjAwOTknLCAnI0ZGMDBDQycsXG4gICcjRkYwMEZGJywgJyNGRjMzMDAnLCAnI0ZGMzMzMycsICcjRkYzMzY2JywgJyNGRjMzOTknLCAnI0ZGMzNDQycsICcjRkYzM0ZGJyxcbiAgJyNGRjY2MDAnLCAnI0ZGNjYzMycsICcjRkY5OTAwJywgJyNGRjk5MzMnLCAnI0ZGQ0MwMCcsICcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBpcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcbiAgICAvLyBpcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcbiAgICAvLyBkb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbih2KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyLm1lc3NhZ2U7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGFyZ3NbMF0gPSAodXNlQ29sb3JzID8gJyVjJyA6ICcnKVxuICAgICsgdGhpcy5uYW1lc3BhY2VcbiAgICArICh1c2VDb2xvcnMgPyAnICVjJyA6ICcgJylcbiAgICArIGFyZ3NbMF1cbiAgICArICh1c2VDb2xvcnMgPyAnJWMgJyA6ICcgJylcbiAgICArICcrJyArIGV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICBpZiAoIXVzZUNvbG9ycykgcmV0dXJuO1xuXG4gIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgYXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0JylcblxuICAvLyB0aGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuICAvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEMgPSAwO1xuICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBpZiAoJyUlJyA9PT0gbWF0Y2gpIHJldHVybjtcbiAgICBpbmRleCsrO1xuICAgIGlmICgnJWMnID09PSBtYXRjaCkge1xuICAgICAgLy8gd2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vIHRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIGNvbnNvbGVcbiAgICAmJiBjb25zb2xlLmxvZ1xuICAgICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge31cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcbiAgdHJ5IHtcbiAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICB9IGNhdGNoKGUpIHt9XG5cbiAgLy8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuICBpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcbiAgICByID0gcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH1cblxuICByZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYGxvY2FsU3RvcmFnZS5kZWJ1Z2AgaW5pdGlhbGx5LlxuICovXG5cbmV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlKSB7fVxufVxuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgaWYgKG1zID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtcyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHJldHVybiBwbHVyYWwobXMsIGQsICdkYXknKSB8fFxuICAgIHBsdXJhbChtcywgaCwgJ2hvdXInKSB8fFxuICAgIHBsdXJhbChtcywgbSwgJ21pbnV0ZScpIHx8XG4gICAgcGx1cmFsKG1zLCBzLCAnc2Vjb25kJykgfHxcbiAgICBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbiwgbmFtZSkge1xuICBpZiAobXMgPCBuKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtcyA8IG4gKiAxLjUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtcyAvIG4pICsgJyAnICsgbmFtZTtcbiAgfVxuICByZXR1cm4gTWF0aC5jZWlsKG1zIC8gbikgKyAnICcgKyBuYW1lICsgJ3MnO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB0dHkgPSByZXF1aXJlKCd0dHknKTtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIE5vZGUuanMgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmluaXQgPSBpbml0O1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbIDYsIDIsIDMsIDQsIDUsIDEgXTtcblxudHJ5IHtcbiAgdmFyIHN1cHBvcnRzQ29sb3IgPSByZXF1aXJlKCdzdXBwb3J0cy1jb2xvcicpO1xuICBpZiAoc3VwcG9ydHNDb2xvciAmJiBzdXBwb3J0c0NvbG9yLmxldmVsID49IDIpIHtcbiAgICBleHBvcnRzLmNvbG9ycyA9IFtcbiAgICAgIDIwLCAyMSwgMjYsIDI3LCAzMiwgMzMsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0LCA0NSwgNTYsIDU3LCA2MiwgNjMsIDY4LFxuICAgICAgNjksIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLCA4MSwgOTIsIDkzLCA5OCwgOTksIDExMiwgMTEzLCAxMjgsIDEyOSwgMTM0LFxuICAgICAgMTM1LCAxNDgsIDE0OSwgMTYwLCAxNjEsIDE2MiwgMTYzLCAxNjQsIDE2NSwgMTY2LCAxNjcsIDE2OCwgMTY5LCAxNzAsIDE3MSxcbiAgICAgIDE3MiwgMTczLCAxNzgsIDE3OSwgMTg0LCAxODUsIDE5NiwgMTk3LCAxOTgsIDE5OSwgMjAwLCAyMDEsIDIwMiwgMjAzLCAyMDQsXG4gICAgICAyMDUsIDIwNiwgMjA3LCAyMDgsIDIwOSwgMjE0LCAyMTUsIDIyMCwgMjIxXG4gICAgXTtcbiAgfVxufSBjYXRjaCAoZXJyKSB7XG4gIC8vIHN3YWxsb3cgLSB3ZSBvbmx5IGNhcmUgaWYgYHN1cHBvcnRzLWNvbG9yYCBpcyBhdmFpbGFibGU7IGl0IGRvZXNuJ3QgaGF2ZSB0byBiZS5cbn1cblxuLyoqXG4gKiBCdWlsZCB1cCB0aGUgZGVmYXVsdCBgaW5zcGVjdE9wdHNgIG9iamVjdCBmcm9tIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gKlxuICogICAkIERFQlVHX0NPTE9SUz1ubyBERUJVR19ERVBUSD0xMCBERUJVR19TSE9XX0hJRERFTj1lbmFibGVkIG5vZGUgc2NyaXB0LmpzXG4gKi9cblxuZXhwb3J0cy5pbnNwZWN0T3B0cyA9IE9iamVjdC5rZXlzKHByb2Nlc3MuZW52KS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gL15kZWJ1Z18vaS50ZXN0KGtleSk7XG59KS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gIC8vIGNhbWVsLWNhc2VcbiAgdmFyIHByb3AgPSBrZXlcbiAgICAuc3Vic3RyaW5nKDYpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvXyhbYS16XSkvZywgZnVuY3Rpb24gKF8sIGspIHsgcmV0dXJuIGsudG9VcHBlckNhc2UoKSB9KTtcblxuICAvLyBjb2VyY2Ugc3RyaW5nIHZhbHVlIGludG8gSlMgdmFsdWVcbiAgdmFyIHZhbCA9IHByb2Nlc3MuZW52W2tleV07XG4gIGlmICgvXih5ZXN8b258dHJ1ZXxlbmFibGVkKSQvaS50ZXN0KHZhbCkpIHZhbCA9IHRydWU7XG4gIGVsc2UgaWYgKC9eKG5vfG9mZnxmYWxzZXxkaXNhYmxlZCkkL2kudGVzdCh2YWwpKSB2YWwgPSBmYWxzZTtcbiAgZWxzZSBpZiAodmFsID09PSAnbnVsbCcpIHZhbCA9IG51bGw7XG4gIGVsc2UgdmFsID0gTnVtYmVyKHZhbCk7XG5cbiAgb2JqW3Byb3BdID0gdmFsO1xuICByZXR1cm4gb2JqO1xufSwge30pO1xuXG4vKipcbiAqIElzIHN0ZG91dCBhIFRUWT8gQ29sb3JlZCBvdXRwdXQgaXMgZW5hYmxlZCB3aGVuIGB0cnVlYC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIHJldHVybiAnY29sb3JzJyBpbiBleHBvcnRzLmluc3BlY3RPcHRzXG4gICAgPyBCb29sZWFuKGV4cG9ydHMuaW5zcGVjdE9wdHMuY29sb3JzKVxuICAgIDogdHR5LmlzYXR0eShwcm9jZXNzLnN0ZGVyci5mZCk7XG59XG5cbi8qKlxuICogTWFwICVvIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbCBvbiBhIHNpbmdsZSBsaW5lLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5vID0gZnVuY3Rpb24odikge1xuICB0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuICByZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpXG4gICAgLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLnRyaW0oKVxuICAgIH0pLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogTWFwICVvIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbG93aW5nIG11bHRpcGxlIGxpbmVzIGlmIG5lZWRlZC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuTyA9IGZ1bmN0aW9uKHYpIHtcbiAgdGhpcy5pbnNwZWN0T3B0cy5jb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcbiAgcmV0dXJuIHV0aWwuaW5zcGVjdCh2LCB0aGlzLmluc3BlY3RPcHRzKTtcbn07XG5cbi8qKlxuICogQWRkcyBBTlNJIGNvbG9yIGVzY2FwZSBjb2RlcyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciBuYW1lID0gdGhpcy5uYW1lc3BhY2U7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBpZiAodXNlQ29sb3JzKSB7XG4gICAgdmFyIGMgPSB0aGlzLmNvbG9yO1xuICAgIHZhciBjb2xvckNvZGUgPSAnXFx1MDAxYlszJyArIChjIDwgOCA/IGMgOiAnODs1OycgKyBjKTtcbiAgICB2YXIgcHJlZml4ID0gJyAgJyArIGNvbG9yQ29kZSArICc7MW0nICsgbmFtZSArICcgJyArICdcXHUwMDFiWzBtJztcblxuICAgIGFyZ3NbMF0gPSBwcmVmaXggKyBhcmdzWzBdLnNwbGl0KCdcXG4nKS5qb2luKCdcXG4nICsgcHJlZml4KTtcbiAgICBhcmdzLnB1c2goY29sb3JDb2RlICsgJ20rJyArIGV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKSArICdcXHUwMDFiWzBtJyk7XG4gIH0gZWxzZSB7XG4gICAgYXJnc1swXSA9IGdldERhdGUoKSArIG5hbWUgKyAnICcgKyBhcmdzWzBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG4gIGlmIChleHBvcnRzLmluc3BlY3RPcHRzLmhpZGVEYXRlKSB7XG4gICAgcmV0dXJuICcnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgKyAnICc7XG4gIH1cbn1cblxuLyoqXG4gKiBJbnZva2VzIGB1dGlsLmZvcm1hdCgpYCB3aXRoIHRoZSBzcGVjaWZpZWQgYXJndW1lbnRzIGFuZCB3cml0ZXMgdG8gc3RkZXJyLlxuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgcmV0dXJuIHByb2Nlc3Muc3RkZXJyLndyaXRlKHV0aWwuZm9ybWF0LmFwcGx5KHV0aWwsIGFyZ3VtZW50cykgKyAnXFxuJyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgLy8gSWYgeW91IHNldCBhIHByb2Nlc3MuZW52IGZpZWxkIHRvIG51bGwgb3IgdW5kZWZpbmVkLCBpdCBnZXRzIGNhc3QgdG8gdGhlXG4gICAgLy8gc3RyaW5nICdudWxsJyBvciAndW5kZWZpbmVkJy4gSnVzdCBkZWxldGUgaW5zdGVhZC5cbiAgICBkZWxldGUgcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuREVCVUcgPSBuYW1lc3BhY2VzO1xuICB9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LkRFQlVHO1xufVxuXG4vKipcbiAqIEluaXQgbG9naWMgZm9yIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICpcbiAqIENyZWF0ZSBhIG5ldyBgaW5zcGVjdE9wdHNgIG9iamVjdCBpbiBjYXNlIGB1c2VDb2xvcnNgIGlzIHNldFxuICogZGlmZmVyZW50bHkgZm9yIGEgcGFydGljdWxhciBgZGVidWdgIGluc3RhbmNlLlxuICovXG5cbmZ1bmN0aW9uIGluaXQgKGRlYnVnKSB7XG4gIGRlYnVnLmluc3BlY3RPcHRzID0ge307XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmluc3BlY3RPcHRzKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVidWcuaW5zcGVjdE9wdHNba2V5c1tpXV0gPSBleHBvcnRzLmluc3BlY3RPcHRzW2tleXNbaV1dO1xuICB9XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBwcm9jZXNzLmVudi5ERUJVR2AgaW5pdGlhbGx5LlxuICovXG5cbmV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0dHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTsiLCIndXNlIHN0cmljdCc7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCBoYXNGbGFnID0gcmVxdWlyZSgnaGFzLWZsYWcnKTtcblxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnY7XG5cbmxldCBmb3JjZUNvbG9yO1xuaWYgKGhhc0ZsYWcoJ25vLWNvbG9yJykgfHxcblx0aGFzRmxhZygnbm8tY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9ZmFsc2UnKSkge1xuXHRmb3JjZUNvbG9yID0gZmFsc2U7XG59IGVsc2UgaWYgKGhhc0ZsYWcoJ2NvbG9yJykgfHxcblx0aGFzRmxhZygnY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9dHJ1ZScpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPWFsd2F5cycpKSB7XG5cdGZvcmNlQ29sb3IgPSB0cnVlO1xufVxuaWYgKCdGT1JDRV9DT0xPUicgaW4gZW52KSB7XG5cdGZvcmNlQ29sb3IgPSBlbnYuRk9SQ0VfQ09MT1IubGVuZ3RoID09PSAwIHx8IHBhcnNlSW50KGVudi5GT1JDRV9DT0xPUiwgMTApICE9PSAwO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVMZXZlbChsZXZlbCkge1xuXHRpZiAobGV2ZWwgPT09IDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGxldmVsLFxuXHRcdGhhc0Jhc2ljOiB0cnVlLFxuXHRcdGhhczI1NjogbGV2ZWwgPj0gMixcblx0XHRoYXMxNm06IGxldmVsID49IDNcblx0fTtcbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNDb2xvcihzdHJlYW0pIHtcblx0aWYgKGZvcmNlQ29sb3IgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MTZtJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj1mdWxsJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj10cnVlY29sb3InKSkge1xuXHRcdHJldHVybiAzO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTI1NicpKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoc3RyZWFtICYmICFzdHJlYW0uaXNUVFkgJiYgZm9yY2VDb2xvciAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgbWluID0gZm9yY2VDb2xvciA/IDEgOiAwO1xuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG5cdFx0Ly8gTm9kZS5qcyA3LjUuMCBpcyB0aGUgZmlyc3QgdmVyc2lvbiBvZiBOb2RlLmpzIHRvIGluY2x1ZGUgYSBwYXRjaCB0b1xuXHRcdC8vIGxpYnV2IHRoYXQgZW5hYmxlcyAyNTYgY29sb3Igb3V0cHV0IG9uIFdpbmRvd3MuIEFueXRoaW5nIGVhcmxpZXIgYW5kIGl0XG5cdFx0Ly8gd29uJ3Qgd29yay4gSG93ZXZlciwgaGVyZSB3ZSB0YXJnZXQgTm9kZS5qcyA4IGF0IG1pbmltdW0gYXMgaXQgaXMgYW4gTFRTXG5cdFx0Ly8gcmVsZWFzZSwgYW5kIE5vZGUuanMgNyBpcyBub3QuIFdpbmRvd3MgMTAgYnVpbGQgMTA1ODYgaXMgdGhlIGZpcnN0IFdpbmRvd3Ncblx0XHQvLyByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMjU2IGNvbG9ycy4gV2luZG93cyAxMCBidWlsZCAxNDkzMSBpcyB0aGUgZmlyc3QgcmVsZWFzZVxuXHRcdC8vIHRoYXQgc3VwcG9ydHMgMTZtL1RydWVDb2xvci5cblx0XHRjb25zdCBvc1JlbGVhc2UgPSBvcy5yZWxlYXNlKCkuc3BsaXQoJy4nKTtcblx0XHRpZiAoXG5cdFx0XHROdW1iZXIocHJvY2Vzcy52ZXJzaW9ucy5ub2RlLnNwbGl0KCcuJylbMF0pID49IDggJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMF0pID49IDEwICYmXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxMDU4NlxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIE51bWJlcihvc1JlbGVhc2VbMl0pID49IDE0OTMxID8gMyA6IDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NJJyBpbiBlbnYpIHtcblx0XHRpZiAoWydUUkFWSVMnLCAnQ0lSQ0xFQ0knLCAnQVBQVkVZT1InLCAnR0lUTEFCX0NJJ10uc29tZShzaWduID0+IHNpZ24gaW4gZW52KSB8fCBlbnYuQ0lfTkFNRSA9PT0gJ2NvZGVzaGlwJykge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdGlmICgnVEVBTUNJVFlfVkVSU0lPTicgaW4gZW52KSB7XG5cdFx0cmV0dXJuIC9eKDlcXC4oMCpbMS05XVxcZCopXFwufFxcZHsyLH1cXC4pLy50ZXN0KGVudi5URUFNQ0lUWV9WRVJTSU9OKSA/IDEgOiAwO1xuXHR9XG5cblx0aWYgKGVudi5DT0xPUlRFUk0gPT09ICd0cnVlY29sb3InKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoJ1RFUk1fUFJPR1JBTScgaW4gZW52KSB7XG5cdFx0Y29uc3QgdmVyc2lvbiA9IHBhcnNlSW50KChlbnYuVEVSTV9QUk9HUkFNX1ZFUlNJT04gfHwgJycpLnNwbGl0KCcuJylbMF0sIDEwKTtcblxuXHRcdHN3aXRjaCAoZW52LlRFUk1fUFJPR1JBTSkge1xuXHRcdFx0Y2FzZSAnaVRlcm0uYXBwJzpcblx0XHRcdFx0cmV0dXJuIHZlcnNpb24gPj0gMyA/IDMgOiAyO1xuXHRcdFx0Y2FzZSAnQXBwbGVfVGVybWluYWwnOlxuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdC8vIE5vIGRlZmF1bHRcblx0XHR9XG5cdH1cblxuXHRpZiAoLy0yNTYoY29sb3IpPyQvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKC9ec2NyZWVufF54dGVybXxednQxMDB8XnZ0MjIwfF5yeHZ0fGNvbG9yfGFuc2l8Y3lnd2lufGxpbnV4L2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ09MT1JURVJNJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmIChlbnYuVEVSTSA9PT0gJ2R1bWInKSB7XG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdHJldHVybiBtaW47XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnRMZXZlbChzdHJlYW0pIHtcblx0Y29uc3QgbGV2ZWwgPSBzdXBwb3J0c0NvbG9yKHN0cmVhbSk7XG5cdHJldHVybiB0cmFuc2xhdGVMZXZlbChsZXZlbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdXBwb3J0c0NvbG9yOiBnZXRTdXBwb3J0TGV2ZWwsXG5cdHN0ZG91dDogZ2V0U3VwcG9ydExldmVsKHByb2Nlc3Muc3Rkb3V0KSxcblx0c3RkZXJyOiBnZXRTdXBwb3J0TGV2ZWwocHJvY2Vzcy5zdGRlcnIpXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7IiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSAoZmxhZywgYXJndikgPT4ge1xuXHRhcmd2ID0gYXJndiB8fCBwcm9jZXNzLmFyZ3Y7XG5cdGNvbnN0IHByZWZpeCA9IGZsYWcuc3RhcnRzV2l0aCgnLScpID8gJycgOiAoZmxhZy5sZW5ndGggPT09IDEgPyAnLScgOiAnLS0nKTtcblx0Y29uc3QgcG9zID0gYXJndi5pbmRleE9mKHByZWZpeCArIGZsYWcpO1xuXHRjb25zdCB0ZXJtaW5hdG9yUG9zID0gYXJndi5pbmRleE9mKCctLScpO1xuXHRyZXR1cm4gcG9zICE9PSAtMSAmJiAodGVybWluYXRvclBvcyA9PT0gLTEgPyB0cnVlIDogcG9zIDwgdGVybWluYXRvclBvcyk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiemxpYlwiKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiY29uc3QgRmluZEZpbGVzID0gcmVxdWlyZShcIm5vZGUtZmluZC1maWxlc1wiKTtcclxuXHJcbmV4cG9ydCBsZXQgY250PTAsZXJyb3JzPTA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpbGVzKHJvb3RGb2xkZXIsIGZpbGVNb2RpZmllZERhdGUsIG9uRmlsZSkge1xyXG4gICAgdmFyIGZpbmRlciA9IG5ldyBGaW5kRmlsZXMoe1xyXG4gICAgICAgIHJvb3RGb2xkZXIsXHJcbiAgICAgICAgZmlsZU1vZGlmaWVkRGF0ZVxyXG4gICAgfSk7XHJcbiAgICB2YXIgcmVzdWx0LHJlc29sdmUscmVqZWN0O1xyXG4gICAgY250PTA7IGVycm9ycz0wO1xyXG5cclxuICAgIGZpbmRlci5vbihcIm1hdGNoXCIsIGZ1bmN0aW9uKHN0clBhdGgsIHN0YXQpIHtcclxuICAgICAgICBpZiAob25GaWxlKSBvbkZpbGUoc3RyUGF0aCwgc3RhdCk7XHJcbiAgICAgICAgY250Kys7XHJcbiAgICB9KTtcclxuICAgIGZpbmRlci5vbihcImNvbXBsZXRlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJlc29sdmUoY250KTtcclxuICAgIH0pO1xyXG4gICAgZmluZGVyLm9uKFwicGF0aGVycm9yXCIsIGZ1bmN0aW9uKGVyciwgc3RyUGF0aCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZm9yIFBhdGggXCIgKyBzdHJQYXRoICsgXCIgXCIgKyBlcnIpOyAgLy8gTm90ZSB0aGF0IGFuIGVycm9yIGluIGFjY2Vzc2luZyBhIHBhcnRpY3VsYXIgZmlsZSBkb2VzIG5vdCBzdG9wIHRoZSB3aG9sZSBzaG93XHJcbiAgICAgICAgZXJyb3JzKys7XHJcbiAgICB9KTtcclxuICAgIGZpbmRlci5vbihcImVycm9yXCIsIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFsIEVycm9yIFwiICsgZXJyKTtcclxuICAgICAgICBlcnJvcnMrKztcclxuICAgIH0pO1xyXG5cclxuICAgIHJlc3VsdCA9IG5ldyBQcm9taXNlKChfcmVzb2x2ZSxfcmVqZWN0KT0+e1xyXG4gICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcclxuICAgICAgICByZWplY3QgPSBfcmVqZWN0O1xyXG4gICAgICAgIGZpbmRlci5zdGFydFNlYXJjaCgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuY29uc3QgZnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZnNcIikpO1xuY29uc3QgYXN5bmNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYXN5bmNcIikpO1xuY29uc3QgcGF0aF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJwYXRoXCIpKTtcbmNvbnN0IGV2ZW50c18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJldmVudHNcIikpO1xudmFyIEV2ZW50RW1pdHRlciA9IGV2ZW50c18xLmRlZmF1bHQuRXZlbnRFbWl0dGVyO1xuLyoqKlxuICogVGhpcyBjbGFzcyByZWN1cnNpdmVseSBmaW5kcyBmaWxlcyB0aGF0IG1hdGNoIHRoZSBmaWx0ZXIgZnVuY3Rpb24gcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvclxuICogQW4gYWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgdGFrZXMgYSBmaWxlTW9kaWZpZWREYXRlIGFuZCByZXR1cm5zIGFsbCBmaWxlcyB0aGF0IGhhdmUgYmVlbiBtb2RpZmllZCBzaW5jZSB0aGF0IGRhdGVcbiAqIHRoaXMgY2xhc3MgZW1pdHMgYSBudW1iZXIgb2YgZXZlbnRzXG4gKiBvbiBcIm1hdGNoXCIgaXMgZW1pdHRlZCBmb3IgZXZlcnkgcGF0aCB0aGF0IG1hdGNoZXNcbiAqL1xuY2xhc3MgZmluZGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChvcHRpb25zLmZpbGVNb2RpZmllZERhdGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyRnVuY3Rpb24gPSAoc3RyUGF0aCwgZnNTdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChmc1N0YXQubXRpbWUgPiBvcHRpb25zLmZpbGVNb2RpZmllZERhdGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuZmlsdGVyRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyRnVuY3Rpb24gPSAoKSA9PiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIHN0YXJ0U2VhcmNoKCkge1xuICAgICAgICB0aGlzLnJlY3Vyc2VGb2xkZXIodGhpcy5vcHRpb25zLnJvb3RGb2xkZXIsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJUaGlzIFNob3VsZCBDYWxsIHdoZW4gZXZlcnl0aGluZyBpcyBmaW5pc2hlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImNvbXBsZXRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVjdXJzZUZvbGRlcihzdHJGb2xkZXJOYW1lLCBmb2xkZXJDb21wbGV0ZUNhbGxiYWNrKSB7XG4gICAgICAgIGZzXzEuZGVmYXVsdC5yZWFkZGlyKHN0ckZvbGRlck5hbWUsIChlcnIsIGZpbGVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhdGhFcnJvcihlcnIsIHN0ckZvbGRlck5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmb2xkZXJDb21wbGV0ZUNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWZpbGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGRlckNvbXBsZXRlQ2FsbGJhY2sobnVsbCk7IC8vIFRoaXMgaXMganVzdCBhbiBlbXB0eSBmb2xkZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzeW5jXzEuZGVmYXVsdC5lYWNoKGZpbGVzLCAoZmlsZSwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyUGF0aCA9IHBhdGhfMS5kZWZhdWx0LmpvaW4oc3RyRm9sZGVyTmFtZSwgZmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25QYXRoRXJyb3IoZSwgc3RyUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTsgLy8gRG9uJ3QgcmV0dXJuIGVycm9yIHRvIGNhbGxiYWNrIG9yIHdlIHdpbGwgbWlzcyBvdGhlciBmaWxlcyBpbiBkaXJlY3RvcnlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vbkZpbGVGb3VuZChzdHJQYXRoLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGVyciwgc3RyRm9sZGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICBpZihzdHJGb2xkZXJOYW1lLmxlbmd0aCA8IDIwKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hlZCBcIiArIHN0ckZvbGRlck5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmb2xkZXJDb21wbGV0ZUNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uRmlsZUZvdW5kKHN0clBhdGgsIGNhbGxiYWNrKSB7XG4gICAgICAgIGZzXzEuZGVmYXVsdC5sc3RhdChzdHJQYXRoLCAoZXJyLCBzdGF0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhdGhFcnJvcihlcnIsIHN0clBhdGgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTsgLy8gRG9uJ3QgcmV0dXJuIGVycm9yIHRvIGNhbGxiYWNrIG9yIHdlIHdpbGwgbWlzcyBvdGhlciBmaWxlcyBpbiBkaXJlY3RvcnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25QYXRoRXJyb3IobmV3IEVycm9yKFwiQ291bGQgbm90IGdldCBzdGF0IGZvciBmaWxlIFwiICsgc3RyUGF0aCksIHN0clBhdGgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTsgLy8gRG9uJ3QgcmV0dXJuIGVycm9yIHRvIGNhbGxiYWNrIG9yIHdlIHdpbGwgbWlzcyBvdGhlciBmaWxlcyBpbiBkaXJlY3RvcnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTWF0Y2goc3RyUGF0aCwgc3RhdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN1cnNlRm9sZGVyKHN0clBhdGgsIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBhdGhFcnJvcihlcnIsIHN0clBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tNYXRjaChzdHJQYXRoLCBzdGF0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGVja01hdGNoKHN0clBhdGgsIHN0YXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZmlsdGVyRnVuY3Rpb24oc3RyUGF0aCwgc3RhdCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJtYXRjaFwiLCBzdHJQYXRoLCBzdGF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy5vblBhdGhFcnJvcihlLCBzdHJQYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblBhdGhFcnJvcihlcnIsIHN0clBhdGgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInBhdGhlcnJvclwiLCBlcnIsIHN0clBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvL0FscmVhZHkgZW1pdHRlZCBhIHBhdGggZXJyb3IgYW5kIHRoZSBoYW5kbGVyIGZhaWxlZCBtdXN0IG5vdCB0aHJvdyBlcnJvciBvciBvdGhlciBmaWxlcyB3aWxsIGZhaWwgdG8gcHJvY2VzcyB0b29cbiAgICAgICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIkVycm9yIGluIHBhdGggRXJyb3IgSGFuZGxlclwiICsgZSkpO1xuICAgICAgICB9XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBmaW5kZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlLWZpbmQtZmlsZXMuanMubWFwIiwiLypnbG9iYWwgc2V0SW1tZWRpYXRlOiBmYWxzZSwgc2V0VGltZW91dDogZmFsc2UsIGNvbnNvbGU6IGZhbHNlICovXG4oZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGFzeW5jID0ge307XG5cbiAgICAvLyBnbG9iYWwgb24gdGhlIHNlcnZlciwgd2luZG93IGluIHRoZSBicm93c2VyXG4gICAgdmFyIHJvb3QsIHByZXZpb3VzX2FzeW5jO1xuXG4gICAgcm9vdCA9IHRoaXM7XG4gICAgaWYgKHJvb3QgIT0gbnVsbCkge1xuICAgICAgcHJldmlvdXNfYXN5bmMgPSByb290LmFzeW5jO1xuICAgIH1cblxuICAgIGFzeW5jLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvb3QuYXN5bmMgPSBwcmV2aW91c19hc3luYztcbiAgICAgICAgcmV0dXJuIGFzeW5jO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBvbmx5X29uY2UoZm4pIHtcbiAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGVkKSB0aHJvdyBuZXcgRXJyb3IoXCJDYWxsYmFjayB3YXMgYWxyZWFkeSBjYWxsZWQuXCIpO1xuICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZuLmFwcGx5KHJvb3QsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy8vIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJsaXR5IGZ1bmN0aW9ucyAvLy8vXG5cbiAgICB2YXIgX2VhY2ggPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvcikge1xuICAgICAgICBpZiAoYXJyLmZvckVhY2gpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIuZm9yRWFjaChpdGVyYXRvcik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGFycltpXSwgaSwgYXJyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgX21hcCA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yKSB7XG4gICAgICAgIGlmIChhcnIubWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyLm1hcChpdGVyYXRvcik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgX2VhY2goYXJyLCBmdW5jdGlvbiAoeCwgaSwgYSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZXJhdG9yKHgsIGksIGEpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG5cbiAgICB2YXIgX3JlZHVjZSA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBtZW1vKSB7XG4gICAgICAgIGlmIChhcnIucmVkdWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyLnJlZHVjZShpdGVyYXRvciwgbWVtbyk7XG4gICAgICAgIH1cbiAgICAgICAgX2VhY2goYXJyLCBmdW5jdGlvbiAoeCwgaSwgYSkge1xuICAgICAgICAgICAgbWVtbyA9IGl0ZXJhdG9yKG1lbW8sIHgsIGksIGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcblxuICAgIHZhciBfa2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9O1xuXG4gICAgLy8vLyBleHBvcnRlZCBhc3luYyBtb2R1bGUgZnVuY3Rpb25zIC8vLy9cblxuICAgIC8vLy8gbmV4dFRpY2sgaW1wbGVtZW50YXRpb24gd2l0aCBicm93c2VyLWNvbXBhdGlibGUgZmFsbGJhY2sgLy8vL1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgIShwcm9jZXNzLm5leHRUaWNrKSkge1xuICAgICAgICBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXN5bmMubmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBzZXRJbW1lZGlhdGUoZm4pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhc3luYy5uZXh0VGljayA9IHByb2Nlc3MubmV4dFRpY2s7XG4gICAgfVxuXG4gICAgYXN5bmMuZWFjaCA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb21wbGV0ZWQgPSAwO1xuICAgICAgICBfZWFjaChhcnIsIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBvbmx5X29uY2UoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFzeW5jLmZvckVhY2ggPSBhc3luYy5lYWNoO1xuXG4gICAgYXN5bmMuZWFjaFNlcmllcyA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb21wbGV0ZWQgPSAwO1xuICAgICAgICB2YXIgaXRlcmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGFycltjb21wbGV0ZWRdLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQgPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGl0ZXJhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIGl0ZXJhdGUoKTtcbiAgICB9O1xuICAgIGFzeW5jLmZvckVhY2hTZXJpZXMgPSBhc3luYy5lYWNoU2VyaWVzO1xuXG4gICAgYXN5bmMuZWFjaExpbWl0ID0gZnVuY3Rpb24gKGFyciwgbGltaXQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZm4gPSBfZWFjaExpbWl0KGxpbWl0KTtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgW2FyciwgaXRlcmF0b3IsIGNhbGxiYWNrXSk7XG4gICAgfTtcbiAgICBhc3luYy5mb3JFYWNoTGltaXQgPSBhc3luYy5lYWNoTGltaXQ7XG5cbiAgICB2YXIgX2VhY2hMaW1pdCA9IGZ1bmN0aW9uIChsaW1pdCkge1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICBpZiAoIWFyci5sZW5ndGggfHwgbGltaXQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgICAgICB2YXIgc3RhcnRlZCA9IDA7XG4gICAgICAgICAgICB2YXIgcnVubmluZyA9IDA7XG5cbiAgICAgICAgICAgIChmdW5jdGlvbiByZXBsZW5pc2ggKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQgPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAocnVubmluZyA8IGxpbWl0ICYmIHN0YXJ0ZWQgPCBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvcihhcnJbc3RhcnRlZCAtIDFdLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQgPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGVuaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9O1xuICAgIH07XG5cblxuICAgIHZhciBkb1BhcmFsbGVsID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgW2FzeW5jLmVhY2hdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgZG9QYXJhbGxlbExpbWl0ID0gZnVuY3Rpb24obGltaXQsIGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgW19lYWNoTGltaXQobGltaXQpXS5jb25jYXQoYXJncykpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIGRvU2VyaWVzID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgW2FzeW5jLmVhY2hTZXJpZXNdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuXG4gICAgdmFyIF9hc3luY01hcCA9IGZ1bmN0aW9uIChlYWNoZm4sIGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGFyciA9IF9tYXAoYXJyLCBmdW5jdGlvbiAoeCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHtpbmRleDogaSwgdmFsdWU6IHh9O1xuICAgICAgICB9KTtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LnZhbHVlLCBmdW5jdGlvbiAoZXJyLCB2KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1t4LmluZGV4XSA9IHY7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFzeW5jLm1hcCA9IGRvUGFyYWxsZWwoX2FzeW5jTWFwKTtcbiAgICBhc3luYy5tYXBTZXJpZXMgPSBkb1NlcmllcyhfYXN5bmNNYXApO1xuICAgIGFzeW5jLm1hcExpbWl0ID0gZnVuY3Rpb24gKGFyciwgbGltaXQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gX21hcExpbWl0KGxpbWl0KShhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIHZhciBfbWFwTGltaXQgPSBmdW5jdGlvbihsaW1pdCkge1xuICAgICAgICByZXR1cm4gZG9QYXJhbGxlbExpbWl0KGxpbWl0LCBfYXN5bmNNYXApO1xuICAgIH07XG5cbiAgICAvLyByZWR1Y2Ugb25seSBoYXMgYSBzZXJpZXMgdmVyc2lvbiwgYXMgZG9pbmcgcmVkdWNlIGluIHBhcmFsbGVsIHdvbid0XG4gICAgLy8gd29yayBpbiBtYW55IHNpdHVhdGlvbnMuXG4gICAgYXN5bmMucmVkdWNlID0gZnVuY3Rpb24gKGFyciwgbWVtbywgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGFzeW5jLmVhY2hTZXJpZXMoYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKG1lbW8sIHgsIGZ1bmN0aW9uIChlcnIsIHYpIHtcbiAgICAgICAgICAgICAgICBtZW1vID0gdjtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgbWVtbyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaW5qZWN0IGFsaWFzXG4gICAgYXN5bmMuaW5qZWN0ID0gYXN5bmMucmVkdWNlO1xuICAgIC8vIGZvbGRsIGFsaWFzXG4gICAgYXN5bmMuZm9sZGwgPSBhc3luYy5yZWR1Y2U7XG5cbiAgICBhc3luYy5yZWR1Y2VSaWdodCA9IGZ1bmN0aW9uIChhcnIsIG1lbW8sIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmV2ZXJzZWQgPSBfbWFwKGFyciwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9KS5yZXZlcnNlKCk7XG4gICAgICAgIGFzeW5jLnJlZHVjZShyZXZlcnNlZCwgbWVtbywgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIC8vIGZvbGRyIGFsaWFzXG4gICAgYXN5bmMuZm9sZHIgPSBhc3luYy5yZWR1Y2VSaWdodDtcblxuICAgIHZhciBfZmlsdGVyID0gZnVuY3Rpb24gKGVhY2hmbiwgYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgYXJyID0gX21hcChhcnIsIGZ1bmN0aW9uICh4LCBpKSB7XG4gICAgICAgICAgICByZXR1cm4ge2luZGV4OiBpLCB2YWx1ZTogeH07XG4gICAgICAgIH0pO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgudmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKF9tYXAocmVzdWx0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xuICAgICAgICAgICAgfSksIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYXN5bmMuZmlsdGVyID0gZG9QYXJhbGxlbChfZmlsdGVyKTtcbiAgICBhc3luYy5maWx0ZXJTZXJpZXMgPSBkb1NlcmllcyhfZmlsdGVyKTtcbiAgICAvLyBzZWxlY3QgYWxpYXNcbiAgICBhc3luYy5zZWxlY3QgPSBhc3luYy5maWx0ZXI7XG4gICAgYXN5bmMuc2VsZWN0U2VyaWVzID0gYXN5bmMuZmlsdGVyU2VyaWVzO1xuXG4gICAgdmFyIF9yZWplY3QgPSBmdW5jdGlvbiAoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBhcnIgPSBfbWFwKGFyciwgZnVuY3Rpb24gKHgsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiB7aW5kZXg6IGksIHZhbHVlOiB4fTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeC52YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKF9tYXAocmVzdWx0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xuICAgICAgICAgICAgfSksIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYXN5bmMucmVqZWN0ID0gZG9QYXJhbGxlbChfcmVqZWN0KTtcbiAgICBhc3luYy5yZWplY3RTZXJpZXMgPSBkb1NlcmllcyhfcmVqZWN0KTtcblxuICAgIHZhciBfZGV0ZWN0ID0gZnVuY3Rpb24gKGVhY2hmbiwgYXJyLCBpdGVyYXRvciwgbWFpbl9jYWxsYmFjaykge1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5fY2FsbGJhY2soeCk7XG4gICAgICAgICAgICAgICAgICAgIG1haW5fY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIG1haW5fY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBhc3luYy5kZXRlY3QgPSBkb1BhcmFsbGVsKF9kZXRlY3QpO1xuICAgIGFzeW5jLmRldGVjdFNlcmllcyA9IGRvU2VyaWVzKF9kZXRlY3QpO1xuXG4gICAgYXN5bmMuc29tZSA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBtYWluX2NhbGxiYWNrKSB7XG4gICAgICAgIGFzeW5jLmVhY2goYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIG1haW5fY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGFueSBhbGlhc1xuICAgIGFzeW5jLmFueSA9IGFzeW5jLnNvbWU7XG5cbiAgICBhc3luYy5ldmVyeSA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBtYWluX2NhbGxiYWNrKSB7XG4gICAgICAgIGFzeW5jLmVhY2goYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2KSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5fY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgbWFpbl9jYWxsYmFjayh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBhbGwgYWxpYXNcbiAgICBhc3luYy5hbGwgPSBhc3luYy5ldmVyeTtcblxuICAgIGFzeW5jLnNvcnRCeSA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBhc3luYy5tYXAoYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgsIGZ1bmN0aW9uIChlcnIsIGNyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwge3ZhbHVlOiB4LCBjcml0ZXJpYTogY3JpdGVyaWF9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGZuID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYSwgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBfbWFwKHJlc3VsdHMuc29ydChmbiksIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGFzeW5jLmF1dG8gPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIHZhciBrZXlzID0gX2tleXModGFza3MpO1xuICAgICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0cyA9IHt9O1xuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdmFyIGFkZExpc3RlbmVyID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMudW5zaGlmdChmbik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciByZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldID09PSBmbikge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgdGFza0NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX2VhY2gobGlzdGVuZXJzLnNsaWNlKDApLCBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF9rZXlzKHJlc3VsdHMpLmxlbmd0aCA9PT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHRzKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfZWFjaChrZXlzLCBmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSAodGFza3Nba10gaW5zdGFuY2VvZiBGdW5jdGlvbikgPyBbdGFza3Nba11dOiB0YXNrc1trXTtcbiAgICAgICAgICAgIHZhciB0YXNrQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzYWZlUmVzdWx0cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBfZWFjaChfa2V5cyhyZXN1bHRzKSwgZnVuY3Rpb24ocmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FmZVJlc3VsdHNbcmtleV0gPSByZXN1bHRzW3JrZXldO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2FmZVJlc3VsdHNba10gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIHNhZmVSZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcCBzdWJzZXF1ZW50IGVycm9ycyBoaXR0aW5nIGNhbGxiYWNrIG11bHRpcGxlIHRpbWVzXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzW2tdID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2sodGFza0NvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHJlcXVpcmVzID0gdGFzay5zbGljZSgwLCBNYXRoLmFicyh0YXNrLmxlbmd0aCAtIDEpKSB8fCBbXTtcbiAgICAgICAgICAgIHZhciByZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZHVjZShyZXF1aXJlcywgZnVuY3Rpb24gKGEsIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhICYmIHJlc3VsdHMuaGFzT3duUHJvcGVydHkoeCkpO1xuICAgICAgICAgICAgICAgIH0sIHRydWUpICYmICFyZXN1bHRzLmhhc093blByb3BlcnR5KGspO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChyZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgdGFza1t0YXNrLmxlbmd0aCAtIDFdKHRhc2tDYWxsYmFjaywgcmVzdWx0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrW3Rhc2subGVuZ3RoIC0gMV0odGFza0NhbGxiYWNrLCByZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMud2F0ZXJmYWxsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBpZiAoIXRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdyYXBJdGVyYXRvciA9IGZ1bmN0aW9uIChpdGVyYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHdyYXBJdGVyYXRvcihuZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB3cmFwSXRlcmF0b3IoYXN5bmMuaXRlcmF0b3IodGFza3MpKSgpO1xuICAgIH07XG5cbiAgICB2YXIgX3BhcmFsbGVsID0gZnVuY3Rpb24oZWFjaGZuLCB0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgaWYgKHRhc2tzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgZWFjaGZuLm1hcCh0YXNrcywgZnVuY3Rpb24gKGZuLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICAgICAgICBmbihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChudWxsLCBlcnIsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0cyA9IHt9O1xuICAgICAgICAgICAgZWFjaGZuLmVhY2goX2tleXModGFza3MpLCBmdW5jdGlvbiAoaywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0YXNrc1trXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNba10gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYy5wYXJhbGxlbCA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgX3BhcmFsbGVsKHsgbWFwOiBhc3luYy5tYXAsIGVhY2g6IGFzeW5jLmVhY2ggfSwgdGFza3MsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMucGFyYWxsZWxMaW1pdCA9IGZ1bmN0aW9uKHRhc2tzLCBsaW1pdCwgY2FsbGJhY2spIHtcbiAgICAgICAgX3BhcmFsbGVsKHsgbWFwOiBfbWFwTGltaXQobGltaXQpLCBlYWNoOiBfZWFjaExpbWl0KGxpbWl0KSB9LCB0YXNrcywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5zZXJpZXMgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIGlmICh0YXNrcy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIGFzeW5jLm1hcFNlcmllcyh0YXNrcywgZnVuY3Rpb24gKGZuLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICAgICAgICBmbihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChudWxsLCBlcnIsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0cyA9IHt9O1xuICAgICAgICAgICAgYXN5bmMuZWFjaFNlcmllcyhfa2V5cyh0YXNrcyksIGZ1bmN0aW9uIChrLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRhc2tzW2tdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLml0ZXJhdG9yID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gICAgICAgIHZhciBtYWtlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzW2luZGV4XS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZm4ubmV4dCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZuLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChpbmRleCA8IHRhc2tzLmxlbmd0aCAtIDEpID8gbWFrZUNhbGxiYWNrKGluZGV4ICsgMSk6IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbWFrZUNhbGxiYWNrKDApO1xuICAgIH07XG5cbiAgICBhc3luYy5hcHBseSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoXG4gICAgICAgICAgICAgICAgbnVsbCwgYXJncy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBfY29uY2F0ID0gZnVuY3Rpb24gKGVhY2hmbiwgYXJyLCBmbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHIgPSBbXTtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGNiKSB7XG4gICAgICAgICAgICBmbih4LCBmdW5jdGlvbiAoZXJyLCB5KSB7XG4gICAgICAgICAgICAgICAgciA9IHIuY29uY2F0KHkgfHwgW10pO1xuICAgICAgICAgICAgICAgIGNiKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBhc3luYy5jb25jYXQgPSBkb1BhcmFsbGVsKF9jb25jYXQpO1xuICAgIGFzeW5jLmNvbmNhdFNlcmllcyA9IGRvU2VyaWVzKF9jb25jYXQpO1xuXG4gICAgYXN5bmMud2hpbHN0ID0gZnVuY3Rpb24gKHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodGVzdCgpKSB7XG4gICAgICAgICAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgICAgICAgICBpdGVyYXRvcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMud2hpbHN0KHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMud2hpbHN0KHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLmRvV2hpbHN0ID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgICAgIGl0ZXJhdG9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ZXN0KCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYy5kb1doaWxzdChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLmRvV2hpbHN0KGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgYXN5bmMudW50aWwgPSBmdW5jdGlvbiAodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGVzdCgpKSB7XG4gICAgICAgICAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgICAgICAgICBpdGVyYXRvcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMudW50aWwodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy51bnRpbCh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYy5kb1VudGlsID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgICAgIGl0ZXJhdG9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGVzdCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMuZG9VbnRpbChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLmRvVW50aWwoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBhc3luYy5xdWV1ZSA9IGZ1bmN0aW9uICh3b3JrZXIsIGNvbmN1cnJlbmN5KSB7XG4gICAgICAgIGlmIChjb25jdXJyZW5jeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25jdXJyZW5jeSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2luc2VydChxLCBkYXRhLCBwb3MsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgaWYoZGF0YS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX2VhY2goZGF0YSwgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICB2YXIgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHRhc2ssXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBudWxsXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgaWYgKHBvcykge1xuICAgICAgICAgICAgICAgIHEudGFza3MudW5zaGlmdChpdGVtKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxLnRhc2tzLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAocS5zYXR1cmF0ZWQgJiYgcS50YXNrcy5sZW5ndGggPT09IGNvbmN1cnJlbmN5KSB7XG4gICAgICAgICAgICAgICAgICBxLnNhdHVyYXRlZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKHEucHJvY2Vzcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgd29ya2VycyA9IDA7XG4gICAgICAgIHZhciBxID0ge1xuICAgICAgICAgICAgdGFza3M6IFtdLFxuICAgICAgICAgICAgY29uY3VycmVuY3k6IGNvbmN1cnJlbmN5LFxuICAgICAgICAgICAgc2F0dXJhdGVkOiBudWxsLFxuICAgICAgICAgICAgZW1wdHk6IG51bGwsXG4gICAgICAgICAgICBkcmFpbjogbnVsbCxcbiAgICAgICAgICAgIHB1c2g6IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICBfaW5zZXJ0KHEsIGRhdGEsIGZhbHNlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5zaGlmdDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIF9pbnNlcnQocSwgZGF0YSwgdHJ1ZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAod29ya2VycyA8IHEuY29uY3VycmVuY3kgJiYgcS50YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSBxLnRhc2tzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChxLmVtcHR5ICYmIHEudGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd29ya2VycyArPSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VycyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmNhbGxiYWNrLmFwcGx5KHRhc2ssIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocS5kcmFpbiAmJiBxLnRhc2tzLmxlbmd0aCArIHdvcmtlcnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLmRyYWluKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBxLnByb2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNiID0gb25seV9vbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYkFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmFwcGx5KG51bGwsIGNiQXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlcih0YXNrLmRhdGEsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcS50YXNrcy5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnVubmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3b3JrZXJzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcTtcbiAgICB9O1xuXG4gICAgYXN5bmMuY2FyZ28gPSBmdW5jdGlvbiAod29ya2VyLCBwYXlsb2FkKSB7XG4gICAgICAgIHZhciB3b3JraW5nICAgICA9IGZhbHNlLFxuICAgICAgICAgICAgdGFza3MgICAgICAgPSBbXTtcblxuICAgICAgICB2YXIgY2FyZ28gPSB7XG4gICAgICAgICAgICB0YXNrczogdGFza3MsXG4gICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICAgICAgc2F0dXJhdGVkOiBudWxsLFxuICAgICAgICAgICAgZW1wdHk6IG51bGwsXG4gICAgICAgICAgICBkcmFpbjogbnVsbCxcbiAgICAgICAgICAgIHB1c2g6IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmKGRhdGEuY29uc3RydWN0b3IgIT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9lYWNoKGRhdGEsIGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0YXNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmdvLnNhdHVyYXRlZCAmJiB0YXNrcy5sZW5ndGggPT09IHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmdvLnNhdHVyYXRlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soY2FyZ28ucHJvY2Vzcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gcHJvY2VzcygpIHtcbiAgICAgICAgICAgICAgICBpZiAod29ya2luZykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FyZ28uZHJhaW4pIGNhcmdvLmRyYWluKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgdHMgPSB0eXBlb2YgcGF5bG9hZCA9PT0gJ251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhc2tzLnNwbGljZSgwLCBwYXlsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGFza3Muc3BsaWNlKDApO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRzID0gX21hcCh0cywgZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suZGF0YTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmKGNhcmdvLmVtcHR5KSBjYXJnby5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIHdvcmtpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHdvcmtlcihkcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB3b3JraW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgICAgIF9lYWNoKHRzLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBydW5uaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjYXJnbztcbiAgICB9O1xuXG4gICAgdmFyIF9jb25zb2xlX2ZuID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoW2Z1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjb25zb2xlW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZWFjaChhcmdzLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGVbbmFtZV0oeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBhc3luYy5sb2cgPSBfY29uc29sZV9mbignbG9nJyk7XG4gICAgYXN5bmMuZGlyID0gX2NvbnNvbGVfZm4oJ2RpcicpO1xuICAgIC8qYXN5bmMuaW5mbyA9IF9jb25zb2xlX2ZuKCdpbmZvJyk7XG4gICAgYXN5bmMud2FybiA9IF9jb25zb2xlX2ZuKCd3YXJuJyk7XG4gICAgYXN5bmMuZXJyb3IgPSBfY29uc29sZV9mbignZXJyb3InKTsqL1xuXG4gICAgYXN5bmMubWVtb2l6ZSA9IGZ1bmN0aW9uIChmbiwgaGFzaGVyKSB7XG4gICAgICAgIHZhciBtZW1vID0ge307XG4gICAgICAgIHZhciBxdWV1ZXMgPSB7fTtcbiAgICAgICAgaGFzaGVyID0gaGFzaGVyIHx8IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBoYXNoZXIuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICBpZiAoa2V5IGluIG1lbW8pIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBtZW1vW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5IGluIHF1ZXVlcykge1xuICAgICAgICAgICAgICAgIHF1ZXVlc1trZXldLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVldWVzW2tleV0gPSBbY2FsbGJhY2tdO1xuICAgICAgICAgICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KFtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbW9ba2V5XSA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHEgPSBxdWV1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHF1ZXVlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcVtpXS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbWVtb2l6ZWQubWVtbyA9IG1lbW87XG4gICAgICAgIG1lbW9pemVkLnVubWVtb2l6ZWQgPSBmbjtcbiAgICAgICAgcmV0dXJuIG1lbW9pemVkO1xuICAgIH07XG5cbiAgICBhc3luYy51bm1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoZm4udW5tZW1vaXplZCB8fCBmbikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGFzeW5jLnRpbWVzID0gZnVuY3Rpb24gKGNvdW50LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb3VudGVyLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzeW5jLm1hcChjb3VudGVyLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy50aW1lc1NlcmllcyA9IGZ1bmN0aW9uIChjb3VudCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjb3VudGVyID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY291bnRlci5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhc3luYy5tYXBTZXJpZXMoY291bnRlciwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuY29tcG9zZSA9IGZ1bmN0aW9uICgvKiBmdW5jdGlvbnMuLi4gKi8pIHtcbiAgICAgICAgdmFyIGZucyA9IEFycmF5LnByb3RvdHlwZS5yZXZlcnNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICBhc3luYy5yZWR1Y2UoZm5zLCBhcmdzLCBmdW5jdGlvbiAobmV3YXJncywgZm4sIGNiKSB7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgbmV3YXJncy5jb25jYXQoW2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY2IoZXJyLCBuZXh0YXJncyk7XG4gICAgICAgICAgICAgICAgfV0pKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGF0LCBbZXJyXS5jb25jYXQocmVzdWx0cykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGFzeW5jLmFwcGx5RWFjaCA9IGZ1bmN0aW9uIChmbnMgLyphcmdzLi4uKi8pIHtcbiAgICAgICAgdmFyIGdvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIHJldHVybiBhc3luYy5lYWNoKGZucywgZnVuY3Rpb24gKGZuLCBjYikge1xuICAgICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MuY29uY2F0KFtjYl0pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgcmV0dXJuIGdvLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdvO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEFNRCAvIFJlcXVpcmVKU1xuICAgIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gTm9kZS5qc1xuICAgIGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gYXN5bmM7XG4gICAgfVxuICAgIC8vIGluY2x1ZGVkIGRpcmVjdGx5IHZpYSA8c2NyaXB0PiB0YWdcbiAgICBlbHNlIHtcbiAgICAgICAgcm9vdC5hc3luYyA9IGFzeW5jO1xuICAgIH1cblxufSgpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpOyIsIlxyXG5jb25zdCBjcmF3bGVyID0gcmVxdWlyZSgnLi9pbmNsdWRlL2NyYXdsZXInKTtcclxuY29uc3QgY3cgPSByZXF1aXJlKCcuL2luY2x1ZGUvY29tbW9uLXdvcmRzLmpzJyk7XHJcblxyXG5jb25zdCBNQVhfV09SRFMgPSAxMDAwMDAwMDtcclxuY29uc3QgQ0FDSEVfQ0xVU1RFUlMgPSBmYWxzZTtcclxuY29uc3QgTUFYX05PREVfRlJFUVVFTkNZID0gMTAwMDtcclxuY29uc3QgVFJBVkVSU0VfU0lNSUxBUiA9IHRydWU7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQsIGNvbnRleHQpIHtcclxuICBjcmF3bGVyLmluaXRDcmF3bGVyKFxyXG4gICAgTUFYX1dPUkRTLFxyXG4gICAgQ0FDSEVfQ0xVU1RFUlMsXHJcbiAgICBNQVhfTk9ERV9GUkVRVUVOQ1ksXHJcbiAgICBUUkFWRVJTRV9TSU1JTEFSXHJcbiAgICApO1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiY3Jhd2xpbmcgaW4gdGhlIGJhY2tncm91bmQgc3RhcnRpbmcgZnJvbSB0b3AgMzAwMCBFbmdsaXNoIHdvcmRzLi4uXCIpO1xyXG5cclxuICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgY29tbW9uV29yZCBpbiBjdy5UaGVNb3N0Q29tbW9uMzAwMCkge1xyXG4gICAgICBwcm9taXNlcy5wdXNoKGNyYXdsZXIubG9hZENsdXN0ZXIoY29tbW9uV29yZCwgZmFsc2UpKTtcclxuICAgIH1cclxuICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXHJcbiAgICAgIGJvZHk6IGpzb24sXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlOiA1MDAsIGJvZHk6IGVyci50b1N0cmluZygpIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==