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
    cacheIsInitialized = true;
    let curtime = new Date(); // 86400000 milliseconds (24 hours)

    totalWordsLastDay = await finder.findFiles("cache/words", curtime - 86400000);
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
  totalWordsLastDay++;
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
async function loadCommonWord(result, word, noWords) {
  const entry = await loadSingleWord(word, true);
  result.noWords++;
  console.log(result.noWords + "/" + noWords);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZm9sbG93LXJlZGlyZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9pbmNsdWRlL2NvbW1vbi13b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9pbmNsdWRlL2NyYXdsZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9odHRwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmVhbVwiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9ub2RlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9zXCIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYXMtZmxhZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6bGliXCIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL2luY2x1ZGUvZmluZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbm9kZS1maW5kLWZpbGVzL2Rpc3Qvbm9kZS1maW5kLWZpbGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXN5bmMvbGliL2FzeW5jLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vLi9jcmF3bC1iYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIlRoZU1vc3RDb21tb24zMDAwIiwiYSIsImFiYW5kb24iLCJhYmlsaXR5IiwiYWJsZSIsImFib3J0aW9uIiwiYWJvdXQiLCJhYm92ZSIsImFicm9hZCIsImFic2VuY2UiLCJhYnNvbHV0ZSIsImFic29sdXRlbHkiLCJhYnNvcmIiLCJhYnVzZSIsImFjYWRlbWljIiwiYWNjZXB0IiwiYWNjZXNzIiwiYWNjaWRlbnQiLCJhY2NvbXBhbnkiLCJhY2NvbXBsaXNoIiwiYWNjb3JkaW5nIiwiYWNjb3VudCIsImFjY3VyYXRlIiwiYWNjdXNlIiwiYWNoaWV2ZSIsImFjaGlldmVtZW50IiwiYWNpZCIsImFja25vd2xlZGdlIiwiYWNxdWlyZSIsImFjcm9zcyIsImFjdCIsImFjdGlvbiIsImFjdGl2ZSIsImFjdGl2aXN0IiwiYWN0aXZpdHkiLCJhY3RvciIsImFjdHJlc3MiLCJhY3R1YWwiLCJhY3R1YWxseSIsImFkIiwiYWRhcHQiLCJhZGQiLCJhZGRpdGlvbiIsImFkZGl0aW9uYWwiLCJhZGRyZXNzIiwiYWRlcXVhdGUiLCJhZGp1c3QiLCJhZGp1c3RtZW50IiwiYWRtaW5pc3RyYXRpb24iLCJhZG1pbmlzdHJhdG9yIiwiYWRtaXJlIiwiYWRtaXNzaW9uIiwiYWRtaXQiLCJhZG9sZXNjZW50IiwiYWRvcHQiLCJhZHVsdCIsImFkdmFuY2UiLCJhZHZhbmNlZCIsImFkdmFudGFnZSIsImFkdmVudHVyZSIsImFkdmVydGlzaW5nIiwiYWR2aWNlIiwiYWR2aXNlIiwiYWR2aXNlciIsImFkdm9jYXRlIiwiYWZmYWlyIiwiYWZmZWN0IiwiYWZmb3JkIiwiYWZyYWlkIiwiQWZyaWNhbiIsImFmdGVyIiwiYWZ0ZXJub29uIiwiYWdhaW4iLCJhZ2FpbnN0IiwiYWdlIiwiYWdlbmN5IiwiYWdlbmRhIiwiYWdlbnQiLCJhZ2dyZXNzaXZlIiwiYWdvIiwiYWdyZWUiLCJhZ3JlZW1lbnQiLCJhZ3JpY3VsdHVyYWwiLCJhaCIsImFoZWFkIiwiYWlkIiwiYWlkZSIsIkFJRFMiLCJhaW0iLCJhaXIiLCJhaXJjcmFmdCIsImFpcmxpbmUiLCJhaXJwb3J0IiwiYWxidW0iLCJhbGNvaG9sIiwiYWxpdmUiLCJhbGwiLCJhbGxpYW5jZSIsImFsbG93IiwiYWxseSIsImFsbW9zdCIsImFsb25lIiwiYWxvbmciLCJhbHJlYWR5IiwiYWxzbyIsImFsdGVyIiwiYWx0ZXJuYXRpdmUiLCJhbHRob3VnaCIsImFsd2F5cyIsIkFNIiwiYW1hemluZyIsIkFtZXJpY2FuIiwiYW1vbmciLCJhbW91bnQiLCJhbmFseXNpcyIsImFuYWx5c3QiLCJhbmFseXplIiwiYW5jaWVudCIsImFuZCIsImFuZ2VyIiwiYW5nbGUiLCJhbmdyeSIsImFuaW1hbCIsImFubml2ZXJzYXJ5IiwiYW5ub3VuY2UiLCJhbm51YWwiLCJhbm90aGVyIiwiYW5zd2VyIiwiYW50aWNpcGF0ZSIsImFueGlldHkiLCJhbnkiLCJhbnlib2R5IiwiYW55bW9yZSIsImFueW9uZSIsImFueXRoaW5nIiwiYW55d2F5IiwiYW55d2hlcmUiLCJhcGFydCIsImFwYXJ0bWVudCIsImFwcGFyZW50IiwiYXBwYXJlbnRseSIsImFwcGVhbCIsImFwcGVhciIsImFwcGVhcmFuY2UiLCJhcHBsZSIsImFwcGxpY2F0aW9uIiwiYXBwbHkiLCJhcHBvaW50IiwiYXBwb2ludG1lbnQiLCJhcHByZWNpYXRlIiwiYXBwcm9hY2giLCJhcHByb3ByaWF0ZSIsImFwcHJvdmFsIiwiYXBwcm92ZSIsImFwcHJveGltYXRlbHkiLCJBcmFiIiwiYXJjaGl0ZWN0IiwiYXJlYSIsImFyZ3VlIiwiYXJndW1lbnQiLCJhcmlzZSIsImFybSIsImFybWVkIiwiYXJteSIsImFyb3VuZCIsImFycmFuZ2UiLCJhcnJhbmdlbWVudCIsImFycmVzdCIsImFycml2YWwiLCJhcnJpdmUiLCJhcnQiLCJhcnRpY2xlIiwiYXJ0aXN0IiwiYXJ0aXN0aWMiLCJhcyIsIkFzaWFuIiwiYXNpZGUiLCJhc2siLCJhc2xlZXAiLCJhc3BlY3QiLCJhc3NhdWx0IiwiYXNzZXJ0IiwiYXNzZXNzIiwiYXNzZXNzbWVudCIsImFzc2V0IiwiYXNzaWduIiwiYXNzaWdubWVudCIsImFzc2lzdCIsImFzc2lzdGFuY2UiLCJhc3Npc3RhbnQiLCJhc3NvY2lhdGUiLCJhc3NvY2lhdGlvbiIsImFzc3VtZSIsImFzc3VtcHRpb24iLCJhc3N1cmUiLCJhdCIsImF0aGxldGUiLCJhdGhsZXRpYyIsImF0bW9zcGhlcmUiLCJhdHRhY2giLCJhdHRhY2siLCJhdHRlbXB0IiwiYXR0ZW5kIiwiYXR0ZW50aW9uIiwiYXR0aXR1ZGUiLCJhdHRvcm5leSIsImF0dHJhY3QiLCJhdHRyYWN0aXZlIiwiYXR0cmlidXRlIiwiYXVkaWVuY2UiLCJhdXRob3IiLCJhdXRob3JpdHkiLCJhdXRvIiwiYXZhaWxhYmxlIiwiYXZlcmFnZSIsImF2b2lkIiwiYXdhcmQiLCJhd2FyZSIsImF3YXJlbmVzcyIsImF3YXkiLCJhd2Z1bCIsImJhYnkiLCJiYWNrIiwiYmFja2dyb3VuZCIsImJhZCIsImJhZGx5IiwiYmFnIiwiYmFrZSIsImJhbGFuY2UiLCJiYWxsIiwiYmFuIiwiYmFuZCIsImJhbmsiLCJiYXIiLCJiYXJlbHkiLCJiYXJyZWwiLCJiYXJyaWVyIiwiYmFzZSIsImJhc2ViYWxsIiwiYmFzaWMiLCJiYXNpY2FsbHkiLCJiYXNpcyIsImJhc2tldCIsImJhc2tldGJhbGwiLCJiYXRocm9vbSIsImJhdHRlcnkiLCJiYXR0bGUiLCJiZSIsImJlYWNoIiwiYmVhbiIsImJlYXIiLCJiZWF0IiwiYmVhdXRpZnVsIiwiYmVhdXR5IiwiYmVjYXVzZSIsImJlY29tZSIsImJlZCIsImJlZHJvb20iLCJiZWVyIiwiYmVmb3JlIiwiYmVnaW4iLCJiZWdpbm5pbmciLCJiZWhhdmlvciIsImJlaGluZCIsImJlaW5nIiwiYmVsaWVmIiwiYmVsaWV2ZSIsImJlbGwiLCJiZWxvbmciLCJiZWxvdyIsImJlbHQiLCJiZW5jaCIsImJlbmQiLCJiZW5lYXRoIiwiYmVuZWZpdCIsImJlc2lkZSIsImJlc2lkZXMiLCJiZXN0IiwiYmV0IiwiYmV0dGVyIiwiYmV0d2VlbiIsImJleW9uZCIsIkJpYmxlIiwiYmlnIiwiYmlrZSIsImJpbGwiLCJiaWxsaW9uIiwiYmluZCIsImJpb2xvZ2ljYWwiLCJiaXJkIiwiYmlydGgiLCJiaXJ0aGRheSIsImJpdCIsImJpdGUiLCJibGFjayIsImJsYWRlIiwiYmxhbWUiLCJibGFua2V0IiwiYmxpbmQiLCJibG9jayIsImJsb29kIiwiYmxvdyIsImJsdWUiLCJib2FyZCIsImJvYXQiLCJib2R5IiwiYm9tYiIsImJvbWJpbmciLCJib25kIiwiYm9uZSIsImJvb2siLCJib29tIiwiYm9vdCIsImJvcmRlciIsImJvcm4iLCJib3Jyb3ciLCJib3NzIiwiYm90aCIsImJvdGhlciIsImJvdHRsZSIsImJvdHRvbSIsImJvdW5kYXJ5IiwiYm93bCIsImJveCIsImJveSIsImJveWZyaWVuZCIsImJyYWluIiwiYnJhbmNoIiwiYnJhbmQiLCJicmVhZCIsImJyZWFrIiwiYnJlYWtmYXN0IiwiYnJlYXN0IiwiYnJlYXRoIiwiYnJlYXRoZSIsImJyaWNrIiwiYnJpZGdlIiwiYnJpZWYiLCJicmllZmx5IiwiYnJpZ2h0IiwiYnJpbGxpYW50IiwiYnJpbmciLCJCcml0aXNoIiwiYnJvYWQiLCJicm9rZW4iLCJicm90aGVyIiwiYnJvd24iLCJicnVzaCIsImJ1Y2siLCJidWRnZXQiLCJidWlsZCIsImJ1aWxkaW5nIiwiYnVsbGV0IiwiYnVuY2giLCJidXJkZW4iLCJidXJuIiwiYnVyeSIsImJ1cyIsImJ1c2luZXNzIiwiYnVzeSIsImJ1dCIsImJ1dHRlciIsImJ1dHRvbiIsImJ1eSIsImJ1eWVyIiwiYnkiLCJjYWJpbiIsImNhYmluZXQiLCJjYWJsZSIsImNha2UiLCJjYWxjdWxhdGUiLCJjYWxsIiwiY2FtZXJhIiwiY2FtcCIsImNhbXBhaWduIiwiY2FtcHVzIiwiY2FuIiwiQ2FuYWRpYW4iLCJjYW5jZXIiLCJjYW5kaWRhdGUiLCJjYXAiLCJjYXBhYmlsaXR5IiwiY2FwYWJsZSIsImNhcGFjaXR5IiwiY2FwaXRhbCIsImNhcHRhaW4iLCJjYXB0dXJlIiwiY2FyIiwiY2FyYm9uIiwiY2FyZCIsImNhcmUiLCJjYXJlZXIiLCJjYXJlZnVsIiwiY2FyZWZ1bGx5IiwiY2FycmllciIsImNhcnJ5IiwiY2FzZSIsImNhc2giLCJjYXN0IiwiY2F0IiwiY2F0Y2giLCJjYXRlZ29yeSIsIkNhdGhvbGljIiwiY2F1c2UiLCJjZWlsaW5nIiwiY2VsZWJyYXRlIiwiY2VsZWJyYXRpb24iLCJjZWxlYnJpdHkiLCJjZWxsIiwiY2VudGVyIiwiY2VudHJhbCIsImNlbnR1cnkiLCJDRU8iLCJjZXJlbW9ueSIsImNlcnRhaW4iLCJjZXJ0YWlubHkiLCJjaGFpbiIsImNoYWlyIiwiY2hhaXJtYW4iLCJjaGFsbGVuZ2UiLCJjaGFtYmVyIiwiY2hhbXBpb24iLCJjaGFtcGlvbnNoaXAiLCJjaGFuY2UiLCJjaGFuZ2UiLCJjaGFuZ2luZyIsImNoYW5uZWwiLCJjaGFwdGVyIiwiY2hhcmFjdGVyIiwiY2hhcmFjdGVyaXN0aWMiLCJjaGFyYWN0ZXJpemUiLCJjaGFyZ2UiLCJjaGFyaXR5IiwiY2hhcnQiLCJjaGFzZSIsImNoZWFwIiwiY2hlY2siLCJjaGVlayIsImNoZWVzZSIsImNoZWYiLCJjaGVtaWNhbCIsImNoZXN0IiwiY2hpY2tlbiIsImNoaWVmIiwiY2hpbGQiLCJjaGlsZGhvb2QiLCJDaGluZXNlIiwiY2hpcCIsImNob2NvbGF0ZSIsImNob2ljZSIsImNob2xlc3Rlcm9sIiwiY2hvb3NlIiwiQ2hyaXN0aWFuIiwiQ2hyaXN0bWFzIiwiY2h1cmNoIiwiY2lnYXJldHRlIiwiY2lyY2xlIiwiY2lyY3Vtc3RhbmNlIiwiY2l0ZSIsImNpdGl6ZW4iLCJjaXR5IiwiY2l2aWwiLCJjaXZpbGlhbiIsImNsYWltIiwiY2xhc3MiLCJjbGFzc2ljIiwiY2xhc3Nyb29tIiwiY2xlYW4iLCJjbGVhciIsImNsZWFybHkiLCJjbGllbnQiLCJjbGltYXRlIiwiY2xpbWIiLCJjbGluaWMiLCJjbGluaWNhbCIsImNsb2NrIiwiY2xvc2UiLCJjbG9zZWx5IiwiY2xvc2VyIiwiY2xvdGhlcyIsImNsb3RoaW5nIiwiY2xvdWQiLCJjbHViIiwiY2x1ZSIsImNsdXN0ZXIiLCJjb2FjaCIsImNvYWwiLCJjb2FsaXRpb24iLCJjb2FzdCIsImNvYXQiLCJjb2RlIiwiY29mZmVlIiwiY29nbml0aXZlIiwiY29sZCIsImNvbGxhcHNlIiwiY29sbGVhZ3VlIiwiY29sbGVjdCIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aXZlIiwiY29sbGVnZSIsImNvbG9uaWFsIiwiY29sb3IiLCJjb2x1bW4iLCJjb21iaW5hdGlvbiIsImNvbWJpbmUiLCJjb21lIiwiY29tZWR5IiwiY29tZm9ydCIsImNvbWZvcnRhYmxlIiwiY29tbWFuZCIsImNvbW1hbmRlciIsImNvbW1lbnQiLCJjb21tZXJjaWFsIiwiY29tbWlzc2lvbiIsImNvbW1pdCIsImNvbW1pdG1lbnQiLCJjb21taXR0ZWUiLCJjb21tb24iLCJjb21tdW5pY2F0ZSIsImNvbW11bmljYXRpb24iLCJjb21tdW5pdHkiLCJjb21wYW55IiwiY29tcGFyZSIsImNvbXBhcmlzb24iLCJjb21wZXRlIiwiY29tcGV0aXRpb24iLCJjb21wZXRpdGl2ZSIsImNvbXBldGl0b3IiLCJjb21wbGFpbiIsImNvbXBsYWludCIsImNvbXBsZXRlIiwiY29tcGxldGVseSIsImNvbXBsZXgiLCJjb21wbGljYXRlZCIsImNvbXBvbmVudCIsImNvbXBvc2UiLCJjb21wb3NpdGlvbiIsImNvbXByZWhlbnNpdmUiLCJjb21wdXRlciIsImNvbmNlbnRyYXRlIiwiY29uY2VudHJhdGlvbiIsImNvbmNlcHQiLCJjb25jZXJuIiwiY29uY2VybmVkIiwiY29uY2VydCIsImNvbmNsdWRlIiwiY29uY2x1c2lvbiIsImNvbmNyZXRlIiwiY29uZGl0aW9uIiwiY29uZHVjdCIsImNvbmZlcmVuY2UiLCJjb25maWRlbmNlIiwiY29uZmlkZW50IiwiY29uZmlybSIsImNvbmZsaWN0IiwiY29uZnJvbnQiLCJjb25mdXNpb24iLCJDb25ncmVzcyIsImNvbmdyZXNzaW9uYWwiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsImNvbnNjaW91c25lc3MiLCJjb25zZW5zdXMiLCJjb25zZXF1ZW5jZSIsImNvbnNlcnZhdGl2ZSIsImNvbnNpZGVyIiwiY29uc2lkZXJhYmxlIiwiY29uc2lkZXJhdGlvbiIsImNvbnNpc3QiLCJjb25zaXN0ZW50IiwiY29uc3RhbnQiLCJjb25zdGFudGx5IiwiY29uc3RpdHV0ZSIsImNvbnN0aXR1dGlvbmFsIiwiY29uc3RydWN0IiwiY29uc3RydWN0aW9uIiwiY29uc3VsdGFudCIsImNvbnN1bWUiLCJjb25zdW1lciIsImNvbnN1bXB0aW9uIiwiY29udGFjdCIsImNvbnRhaW4iLCJjb250YWluZXIiLCJjb250ZW1wb3JhcnkiLCJjb250ZW50IiwiY29udGVzdCIsImNvbnRleHQiLCJjb250aW51ZSIsImNvbnRpbnVlZCIsImNvbnRyYWN0IiwiY29udHJhc3QiLCJjb250cmlidXRlIiwiY29udHJpYnV0aW9uIiwiY29udHJvbCIsImNvbnRyb3ZlcnNpYWwiLCJjb250cm92ZXJzeSIsImNvbnZlbnRpb24iLCJjb252ZW50aW9uYWwiLCJjb252ZXJzYXRpb24iLCJjb252ZXJ0IiwiY29udmljdGlvbiIsImNvbnZpbmNlIiwiY29vayIsImNvb2tpZSIsImNvb2tpbmciLCJjb29sIiwiY29vcGVyYXRpb24iLCJjb3AiLCJjb3BlIiwiY29weSIsImNvcmUiLCJjb3JuIiwiY29ybmVyIiwiY29ycG9yYXRlIiwiY29ycG9yYXRpb24iLCJjb3JyZWN0IiwiY29ycmVzcG9uZGVudCIsImNvc3QiLCJjb3R0b24iLCJjb3VjaCIsImNvdWxkIiwiY291bmNpbCIsImNvdW5zZWxvciIsImNvdW50IiwiY291bnRlciIsImNvdW50cnkiLCJjb3VudHkiLCJjb3VwbGUiLCJjb3VyYWdlIiwiY291cnNlIiwiY291cnQiLCJjb3VzaW4iLCJjb3ZlciIsImNvdmVyYWdlIiwiY293IiwiY3JhY2siLCJjcmFmdCIsImNyYXNoIiwiY3JhenkiLCJjcmVhbSIsImNyZWF0ZSIsImNyZWF0aW9uIiwiY3JlYXRpdmUiLCJjcmVhdHVyZSIsImNyZWRpdCIsImNyZXciLCJjcmltZSIsImNyaW1pbmFsIiwiY3Jpc2lzIiwiY3JpdGVyaWEiLCJjcml0aWMiLCJjcml0aWNhbCIsImNyaXRpY2lzbSIsImNyaXRpY2l6ZSIsImNyb3AiLCJjcm9zcyIsImNyb3dkIiwiY3J1Y2lhbCIsImNyeSIsImN1bHR1cmFsIiwiY3VsdHVyZSIsImN1cCIsImN1cmlvdXMiLCJjdXJyZW50IiwiY3VycmVudGx5IiwiY3VycmljdWx1bSIsImN1c3RvbSIsImN1c3RvbWVyIiwiY3V0IiwiY3ljbGUiLCJkYWQiLCJkYWlseSIsImRhbWFnZSIsImRhbmNlIiwiZGFuZ2VyIiwiZGFuZ2Vyb3VzIiwiZGFyZSIsImRhcmsiLCJkYXJrbmVzcyIsImRhdGEiLCJkYXRlIiwiZGF1Z2h0ZXIiLCJkYXkiLCJkZWFkIiwiZGVhbCIsImRlYWxlciIsImRlYXIiLCJkZWF0aCIsImRlYmF0ZSIsImRlYnQiLCJkZWNhZGUiLCJkZWNpZGUiLCJkZWNpc2lvbiIsImRlY2siLCJkZWNsYXJlIiwiZGVjbGluZSIsImRlY3JlYXNlIiwiZGVlcCIsImRlZXBseSIsImRlZXIiLCJkZWZlYXQiLCJkZWZlbmQiLCJkZWZlbmRhbnQiLCJkZWZlbnNlIiwiZGVmZW5zaXZlIiwiZGVmaWNpdCIsImRlZmluZSIsImRlZmluaXRlbHkiLCJkZWZpbml0aW9uIiwiZGVncmVlIiwiZGVsYXkiLCJkZWxpdmVyIiwiZGVsaXZlcnkiLCJkZW1hbmQiLCJkZW1vY3JhY3kiLCJEZW1vY3JhdCIsImRlbW9jcmF0aWMiLCJkZW1vbnN0cmF0ZSIsImRlbW9uc3RyYXRpb24iLCJkZW55IiwiZGVwYXJ0bWVudCIsImRlcGVuZCIsImRlcGVuZGVudCIsImRlcGVuZGluZyIsImRlcGljdCIsImRlcHJlc3Npb24iLCJkZXB0aCIsImRlcHV0eSIsImRlcml2ZSIsImRlc2NyaWJlIiwiZGVzY3JpcHRpb24iLCJkZXNlcnQiLCJkZXNlcnZlIiwiZGVzaWduIiwiZGVzaWduZXIiLCJkZXNpcmUiLCJkZXNrIiwiZGVzcGVyYXRlIiwiZGVzcGl0ZSIsImRlc3Ryb3kiLCJkZXN0cnVjdGlvbiIsImRldGFpbCIsImRldGFpbGVkIiwiZGV0ZWN0IiwiZGV0ZXJtaW5lIiwiZGV2ZWxvcCIsImRldmVsb3BpbmciLCJkZXZlbG9wbWVudCIsImRldmljZSIsImRldm90ZSIsImRpYWxvZ3VlIiwiZGllIiwiZGlldCIsImRpZmZlciIsImRpZmZlcmVuY2UiLCJkaWZmZXJlbnQiLCJkaWZmZXJlbnRseSIsImRpZmZpY3VsdCIsImRpZmZpY3VsdHkiLCJkaWciLCJkaWdpdGFsIiwiZGltZW5zaW9uIiwiZGluaW5nIiwiZGlubmVyIiwiZGlyZWN0IiwiZGlyZWN0aW9uIiwiZGlyZWN0bHkiLCJkaXJlY3RvciIsImRpcnQiLCJkaXJ0eSIsImRpc2FiaWxpdHkiLCJkaXNhZ3JlZSIsImRpc2FwcGVhciIsImRpc2FzdGVyIiwiZGlzY2lwbGluZSIsImRpc2NvdXJzZSIsImRpc2NvdmVyIiwiZGlzY292ZXJ5IiwiZGlzY3JpbWluYXRpb24iLCJkaXNjdXNzIiwiZGlzY3Vzc2lvbiIsImRpc2Vhc2UiLCJkaXNoIiwiZGlzbWlzcyIsImRpc29yZGVyIiwiZGlzcGxheSIsImRpc3B1dGUiLCJkaXN0YW5jZSIsImRpc3RhbnQiLCJkaXN0aW5jdCIsImRpc3RpbmN0aW9uIiwiZGlzdGluZ3Vpc2giLCJkaXN0cmlidXRlIiwiZGlzdHJpYnV0aW9uIiwiZGlzdHJpY3QiLCJkaXZlcnNlIiwiZGl2ZXJzaXR5IiwiZGl2aWRlIiwiZGl2aXNpb24iLCJkaXZvcmNlIiwiRE5BIiwiZG8iLCJkb2N0b3IiLCJkb2N1bWVudCIsImRvZyIsImRvbWVzdGljIiwiZG9taW5hbnQiLCJkb21pbmF0ZSIsImRvb3IiLCJkb3VibGUiLCJkb3VidCIsImRvd24iLCJkb3dudG93biIsImRvemVuIiwiZHJhZnQiLCJkcmFnIiwiZHJhbWEiLCJkcmFtYXRpYyIsImRyYW1hdGljYWxseSIsImRyYXciLCJkcmF3aW5nIiwiZHJlYW0iLCJkcmVzcyIsImRyaW5rIiwiZHJpdmUiLCJkcml2ZXIiLCJkcm9wIiwiZHJ1ZyIsImRyeSIsImR1ZSIsImR1cmluZyIsImR1c3QiLCJkdXR5IiwiZWFjaCIsImVhZ2VyIiwiZWFyIiwiZWFybHkiLCJlYXJuIiwiZWFybmluZ3MiLCJlYXJ0aCIsImVhc2UiLCJlYXNpbHkiLCJlYXN0IiwiZWFzdGVybiIsImVhc3kiLCJlYXQiLCJlY29ub21pYyIsImVjb25vbWljcyIsImVjb25vbWlzdCIsImVjb25vbXkiLCJlZGdlIiwiZWRpdGlvbiIsImVkaXRvciIsImVkdWNhdGUiLCJlZHVjYXRpb24iLCJlZHVjYXRpb25hbCIsImVkdWNhdG9yIiwiZWZmZWN0IiwiZWZmZWN0aXZlIiwiZWZmZWN0aXZlbHkiLCJlZmZpY2llbmN5IiwiZWZmaWNpZW50IiwiZWZmb3J0IiwiZWdnIiwiZWlnaHQiLCJlaXRoZXIiLCJlbGRlcmx5IiwiZWxlY3QiLCJlbGVjdGlvbiIsImVsZWN0cmljIiwiZWxlY3RyaWNpdHkiLCJlbGVjdHJvbmljIiwiZWxlbWVudCIsImVsZW1lbnRhcnkiLCJlbGltaW5hdGUiLCJlbGl0ZSIsImVsc2UiLCJlbHNld2hlcmUiLCJlbWJyYWNlIiwiZW1lcmdlIiwiZW1lcmdlbmN5IiwiZW1pc3Npb24iLCJlbW90aW9uIiwiZW1vdGlvbmFsIiwiZW1waGFzaXMiLCJlbXBoYXNpemUiLCJlbXBsb3kiLCJlbXBsb3llZSIsImVtcGxveWVyIiwiZW1wbG95bWVudCIsImVtcHR5IiwiZW5hYmxlIiwiZW5jb3VudGVyIiwiZW5jb3VyYWdlIiwiZW5kIiwiZW5lbXkiLCJlbmVyZ3kiLCJlbmZvcmNlbWVudCIsImVuZ2FnZSIsImVuZ2luZSIsImVuZ2luZWVyIiwiZW5naW5lZXJpbmciLCJFbmdsaXNoIiwiZW5oYW5jZSIsImVuam95IiwiZW5vcm1vdXMiLCJlbm91Z2giLCJlbnN1cmUiLCJlbnRlciIsImVudGVycHJpc2UiLCJlbnRlcnRhaW5tZW50IiwiZW50aXJlIiwiZW50aXJlbHkiLCJlbnRyYW5jZSIsImVudHJ5IiwiZW52aXJvbm1lbnQiLCJlbnZpcm9ubWVudGFsIiwiZXBpc29kZSIsImVxdWFsIiwiZXF1YWxseSIsImVxdWlwbWVudCIsImVyYSIsImVycm9yIiwiZXNjYXBlIiwiZXNwZWNpYWxseSIsImVzc2F5IiwiZXNzZW50aWFsIiwiZXNzZW50aWFsbHkiLCJlc3RhYmxpc2giLCJlc3RhYmxpc2htZW50IiwiZXN0YXRlIiwiZXN0aW1hdGUiLCJldGMiLCJldGhpY3MiLCJldGhuaWMiLCJFdXJvcGVhbiIsImV2YWx1YXRlIiwiZXZhbHVhdGlvbiIsImV2ZW4iLCJldmVuaW5nIiwiZXZlbnQiLCJldmVudHVhbGx5IiwiZXZlciIsImV2ZXJ5IiwiZXZlcnlib2R5IiwiZXZlcnlkYXkiLCJldmVyeW9uZSIsImV2ZXJ5dGhpbmciLCJldmVyeXdoZXJlIiwiZXZpZGVuY2UiLCJldm9sdXRpb24iLCJldm9sdmUiLCJleGFjdCIsImV4YWN0bHkiLCJleGFtaW5hdGlvbiIsImV4YW1pbmUiLCJleGFtcGxlIiwiZXhjZWVkIiwiZXhjZWxsZW50IiwiZXhjZXB0IiwiZXhjZXB0aW9uIiwiZXhjaGFuZ2UiLCJleGNpdGluZyIsImV4ZWN1dGl2ZSIsImV4ZXJjaXNlIiwiZXhoaWJpdCIsImV4aGliaXRpb24iLCJleGlzdCIsImV4aXN0ZW5jZSIsImV4aXN0aW5nIiwiZXhwYW5kIiwiZXhwYW5zaW9uIiwiZXhwZWN0IiwiZXhwZWN0YXRpb24iLCJleHBlbnNlIiwiZXhwZW5zaXZlIiwiZXhwZXJpZW5jZSIsImV4cGVyaW1lbnQiLCJleHBlcnQiLCJleHBsYWluIiwiZXhwbGFuYXRpb24iLCJleHBsb2RlIiwiZXhwbG9yZSIsImV4cGxvc2lvbiIsImV4cG9zZSIsImV4cG9zdXJlIiwiZXhwcmVzcyIsImV4cHJlc3Npb24iLCJleHRlbmQiLCJleHRlbnNpb24iLCJleHRlbnNpdmUiLCJleHRlbnQiLCJleHRlcm5hbCIsImV4dHJhIiwiZXh0cmFvcmRpbmFyeSIsImV4dHJlbWUiLCJleHRyZW1lbHkiLCJleWUiLCJmYWJyaWMiLCJmYWNlIiwiZmFjaWxpdHkiLCJmYWN0IiwiZmFjdG9yIiwiZmFjdG9yeSIsImZhY3VsdHkiLCJmYWRlIiwiZmFpbCIsImZhaWx1cmUiLCJmYWlyIiwiZmFpcmx5IiwiZmFpdGgiLCJmYWxsIiwiZmFsc2UiLCJmYW1pbGlhciIsImZhbWlseSIsImZhbW91cyIsImZhbiIsImZhbnRhc3kiLCJmYXIiLCJmYXJtIiwiZmFybWVyIiwiZmFzaGlvbiIsImZhc3QiLCJmYXQiLCJmYXRlIiwiZmF0aGVyIiwiZmF1bHQiLCJmYXZvciIsImZhdm9yaXRlIiwiZmVhciIsImZlYXR1cmUiLCJmZWRlcmFsIiwiZmVlIiwiZmVlZCIsImZlZWwiLCJmZWVsaW5nIiwiZmVsbG93IiwiZmVtYWxlIiwiZmVuY2UiLCJmZXciLCJmZXdlciIsImZpYmVyIiwiZmljdGlvbiIsImZpZWxkIiwiZmlmdGVlbiIsImZpZnRoIiwiZmlmdHkiLCJmaWdodCIsImZpZ2h0ZXIiLCJmaWdodGluZyIsImZpZ3VyZSIsImZpbGUiLCJmaWxsIiwiZmlsbSIsImZpbmFsIiwiZmluYWxseSIsImZpbmFuY2UiLCJmaW5hbmNpYWwiLCJmaW5kIiwiZmluZGluZyIsImZpbmUiLCJmaW5nZXIiLCJmaW5pc2giLCJmaXJlIiwiZmlybSIsImZpcnN0IiwiZmlzaCIsImZpc2hpbmciLCJmaXQiLCJmaXRuZXNzIiwiZml2ZSIsImZpeCIsImZsYWciLCJmbGFtZSIsImZsYXQiLCJmbGF2b3IiLCJmbGVlIiwiZmxlc2giLCJmbGlnaHQiLCJmbG9hdCIsImZsb29yIiwiZmxvdyIsImZsb3dlciIsImZseSIsImZvY3VzIiwiZm9sayIsImZvbGxvdyIsImZvbGxvd2luZyIsImZvb2QiLCJmb290IiwiZm9vdGJhbGwiLCJmb3IiLCJmb3JjZSIsImZvcmVpZ24iLCJmb3Jlc3QiLCJmb3JldmVyIiwiZm9yZ2V0IiwiZm9ybSIsImZvcm1hbCIsImZvcm1hdGlvbiIsImZvcm1lciIsImZvcm11bGEiLCJmb3J0aCIsImZvcnR1bmUiLCJmb3J3YXJkIiwiZm91bmQiLCJmb3VuZGF0aW9uIiwiZm91bmRlciIsImZvdXIiLCJmb3VydGgiLCJmcmFtZSIsImZyYW1ld29yayIsImZyZWUiLCJmcmVlZG9tIiwiZnJlZXplIiwiRnJlbmNoIiwiZnJlcXVlbmN5IiwiZnJlcXVlbnQiLCJmcmVxdWVudGx5IiwiZnJlc2giLCJmcmllbmQiLCJmcmllbmRseSIsImZyaWVuZHNoaXAiLCJmcm9tIiwiZnJvbnQiLCJmcnVpdCIsImZydXN0cmF0aW9uIiwiZnVlbCIsImZ1bGwiLCJmdWxseSIsImZ1biIsImZ1bmN0aW9uIiwiZnVuZCIsImZ1bmRhbWVudGFsIiwiZnVuZGluZyIsImZ1bmVyYWwiLCJmdW5ueSIsImZ1cm5pdHVyZSIsImZ1cnRoZXJtb3JlIiwiZnV0dXJlIiwiZ2FpbiIsImdhbGF4eSIsImdhbGxlcnkiLCJnYW1lIiwiZ2FuZyIsImdhcCIsImdhcmFnZSIsImdhcmRlbiIsImdhcmxpYyIsImdhcyIsImdhdGUiLCJnYXRoZXIiLCJnYXkiLCJnYXplIiwiZ2VhciIsImdlbmRlciIsImdlbmUiLCJnZW5lcmFsIiwiZ2VuZXJhbGx5IiwiZ2VuZXJhdGUiLCJnZW5lcmF0aW9uIiwiZ2VuZXRpYyIsImdlbnRsZW1hbiIsImdlbnRseSIsIkdlcm1hbiIsImdlc3R1cmUiLCJnZXQiLCJnaG9zdCIsImdpYW50IiwiZ2lmdCIsImdpZnRlZCIsImdpcmwiLCJnaXJsZnJpZW5kIiwiZ2l2ZSIsImdpdmVuIiwiZ2xhZCIsImdsYW5jZSIsImdsYXNzIiwiZ2xvYmFsIiwiZ2xvdmUiLCJnbyIsImdvYWwiLCJHb2QiLCJnb2xkIiwiZ29sZGVuIiwiZ29sZiIsImdvb2QiLCJnb3Zlcm5tZW50IiwiZ292ZXJub3IiLCJncmFiIiwiZ3JhZGUiLCJncmFkdWFsbHkiLCJncmFkdWF0ZSIsImdyYWluIiwiZ3JhbmQiLCJncmFuZGZhdGhlciIsImdyYW5kbW90aGVyIiwiZ3JhbnQiLCJncmFzcyIsImdyYXZlIiwiZ3JheSIsImdyZWF0IiwiZ3JlYXRlc3QiLCJncmVlbiIsImdyb2NlcnkiLCJncm91bmQiLCJncm91cCIsImdyb3ciLCJncm93aW5nIiwiZ3Jvd3RoIiwiZ3VhcmFudGVlIiwiZ3VhcmQiLCJndWVzcyIsImd1ZXN0IiwiZ3VpZGUiLCJndWlkZWxpbmUiLCJndWlsdHkiLCJndW4iLCJndXkiLCJoYWJpdCIsImhhYml0YXQiLCJoYWlyIiwiaGFsZiIsImhhbGwiLCJoYW5kIiwiaGFuZGZ1bCIsImhhbmRsZSIsImhhbmciLCJoYXBwZW4iLCJoYXBweSIsImhhcmQiLCJoYXJkbHkiLCJoYXQiLCJoYXRlIiwiaGF2ZSIsImhlIiwiaGVhZCIsImhlYWRsaW5lIiwiaGVhZHF1YXJ0ZXJzIiwiaGVhbHRoIiwiaGVhbHRoeSIsImhlYXIiLCJoZWFyaW5nIiwiaGVhcnQiLCJoZWF0IiwiaGVhdmVuIiwiaGVhdmlseSIsImhlYXZ5IiwiaGVlbCIsImhlaWdodCIsImhlbGljb3B0ZXIiLCJoZWxsIiwiaGVsbG8iLCJoZWxwIiwiaGVscGZ1bCIsImhlciIsImhlcmUiLCJoZXJpdGFnZSIsImhlcm8iLCJoZXJzZWxmIiwiaGV5IiwiaGkiLCJoaWRlIiwiaGlnaCIsImhpZ2hsaWdodCIsImhpZ2hseSIsImhpZ2h3YXkiLCJoaWxsIiwiaGltIiwiaGltc2VsZiIsImhpcCIsImhpcmUiLCJoaXMiLCJoaXN0b3JpYW4iLCJoaXN0b3JpYyIsImhpc3RvcmljYWwiLCJoaXN0b3J5IiwiaGl0IiwiaG9sZCIsImhvbGUiLCJob2xpZGF5IiwiaG9seSIsImhvbWUiLCJob21lbGVzcyIsImhvbmVzdCIsImhvbmV5IiwiaG9ub3IiLCJob3BlIiwiaG9yaXpvbiIsImhvcnJvciIsImhvcnNlIiwiaG9zcGl0YWwiLCJob3N0IiwiaG90IiwiaG90ZWwiLCJob3VyIiwiaG91c2UiLCJob3VzZWhvbGQiLCJob3VzaW5nIiwiaG93IiwiaG93ZXZlciIsImh1Z2UiLCJodW1hbiIsImh1bW9yIiwiaHVuZHJlZCIsImh1bmdyeSIsImh1bnRlciIsImh1bnRpbmciLCJodXJ0IiwiaHVzYmFuZCIsImh5cG90aGVzaXMiLCJJIiwiaWNlIiwiaWRlYSIsImlkZWFsIiwiaWRlbnRpZmljYXRpb24iLCJpZGVudGlmeSIsImlkZW50aXR5IiwiaWUiLCJpZiIsImlnbm9yZSIsImlsbCIsImlsbGVnYWwiLCJpbGxuZXNzIiwiaWxsdXN0cmF0ZSIsImltYWdlIiwiaW1hZ2luYXRpb24iLCJpbWFnaW5lIiwiaW1tZWRpYXRlIiwiaW1tZWRpYXRlbHkiLCJpbW1pZ3JhbnQiLCJpbW1pZ3JhdGlvbiIsImltcGFjdCIsImltcGxlbWVudCIsImltcGxpY2F0aW9uIiwiaW1wbHkiLCJpbXBvcnRhbmNlIiwiaW1wb3J0YW50IiwiaW1wb3NlIiwiaW1wb3NzaWJsZSIsImltcHJlc3MiLCJpbXByZXNzaW9uIiwiaW1wcmVzc2l2ZSIsImltcHJvdmUiLCJpbXByb3ZlbWVudCIsImluIiwiaW5jZW50aXZlIiwiaW5jaWRlbnQiLCJpbmNsdWRlIiwiaW5jbHVkaW5nIiwiaW5jb21lIiwiaW5jb3Jwb3JhdGUiLCJpbmNyZWFzZSIsImluY3JlYXNlZCIsImluY3JlYXNpbmciLCJpbmNyZWFzaW5nbHkiLCJpbmNyZWRpYmxlIiwiaW5kZWVkIiwiaW5kZXBlbmRlbmNlIiwiaW5kZXBlbmRlbnQiLCJpbmRleCIsIkluZGlhbiIsImluZGljYXRlIiwiaW5kaWNhdGlvbiIsImluZGl2aWR1YWwiLCJpbmR1c3RyaWFsIiwiaW5kdXN0cnkiLCJpbmZhbnQiLCJpbmZlY3Rpb24iLCJpbmZsYXRpb24iLCJpbmZsdWVuY2UiLCJpbmZvcm0iLCJpbmZvcm1hdGlvbiIsImluZ3JlZGllbnQiLCJpbml0aWFsIiwiaW5pdGlhbGx5IiwiaW5pdGlhdGl2ZSIsImluanVyeSIsImlubmVyIiwiaW5ub2NlbnQiLCJpbnF1aXJ5IiwiaW5zaWRlIiwiaW5zaWdodCIsImluc2lzdCIsImluc3BpcmUiLCJpbnN0YWxsIiwiaW5zdGFuY2UiLCJpbnN0ZWFkIiwiaW5zdGl0dXRpb24iLCJpbnN0aXR1dGlvbmFsIiwiaW5zdHJ1Y3Rpb24iLCJpbnN0cnVjdG9yIiwiaW5zdHJ1bWVudCIsImluc3VyYW5jZSIsImludGVsbGVjdHVhbCIsImludGVsbGlnZW5jZSIsImludGVuZCIsImludGVuc2UiLCJpbnRlbnNpdHkiLCJpbnRlbnRpb24iLCJpbnRlcmFjdGlvbiIsImludGVyZXN0IiwiaW50ZXJlc3RlZCIsImludGVyZXN0aW5nIiwiaW50ZXJuYWwiLCJpbnRlcm5hdGlvbmFsIiwiSW50ZXJuZXQiLCJpbnRlcnByZXQiLCJpbnRlcnByZXRhdGlvbiIsImludGVydmVudGlvbiIsImludGVydmlldyIsImludG8iLCJpbnRyb2R1Y2UiLCJpbnRyb2R1Y3Rpb24iLCJpbnZhc2lvbiIsImludmVzdCIsImludmVzdGlnYXRlIiwiaW52ZXN0aWdhdGlvbiIsImludmVzdGlnYXRvciIsImludmVzdG1lbnQiLCJpbnZlc3RvciIsImludml0ZSIsImludm9sdmUiLCJpbnZvbHZlZCIsImludm9sdmVtZW50IiwiSXJhcWkiLCJJcmlzaCIsImlyb24iLCJJc2xhbWljIiwiaXNsYW5kIiwiSXNyYWVsaSIsImlzc3VlIiwiaXQiLCJJdGFsaWFuIiwiaXRlbSIsIml0cyIsIml0c2VsZiIsImphY2tldCIsImphaWwiLCJKYXBhbmVzZSIsImpldCIsIkpldyIsIkpld2lzaCIsImpvYiIsImpvaW4iLCJqb2ludCIsImpva2UiLCJqb3VybmFsIiwiam91cm5hbGlzdCIsImpvdXJuZXkiLCJqb3kiLCJqdWRnZSIsImp1ZGdtZW50IiwianVpY2UiLCJqdW1wIiwianVuaW9yIiwianVyeSIsImp1c3QiLCJqdXN0aWNlIiwianVzdGlmeSIsImtlZXAiLCJrZXkiLCJraWNrIiwia2lkIiwia2lsbCIsImtpbGxlciIsImtpbGxpbmciLCJraW5kIiwia2luZyIsImtpc3MiLCJraXRjaGVuIiwia25lZSIsImtuaWZlIiwia25vY2siLCJrbm93Iiwia25vd2xlZGdlIiwibGFiIiwibGFiZWwiLCJsYWJvciIsImxhYm9yYXRvcnkiLCJsYWNrIiwibGFkeSIsImxha2UiLCJsYW5kIiwibGFuZHNjYXBlIiwibGFuZ3VhZ2UiLCJsYXAiLCJsYXJnZSIsImxhcmdlbHkiLCJsYXN0IiwibGF0ZSIsImxhdGVyIiwiTGF0aW4iLCJsYXR0ZXIiLCJsYXVnaCIsImxhdW5jaCIsImxhdyIsImxhd24iLCJsYXdzdWl0IiwibGF3eWVyIiwibGF5IiwibGF5ZXIiLCJsZWFkIiwibGVhZGVyIiwibGVhZGVyc2hpcCIsImxlYWRpbmciLCJsZWFmIiwibGVhZ3VlIiwibGVhbiIsImxlYXJuIiwibGVhcm5pbmciLCJsZWFzdCIsImxlYXRoZXIiLCJsZWF2ZSIsImxlZnQiLCJsZWciLCJsZWdhY3kiLCJsZWdhbCIsImxlZ2VuZCIsImxlZ2lzbGF0aW9uIiwibGVnaXRpbWF0ZSIsImxlbW9uIiwibGVuZ3RoIiwibGVzcyIsImxlc3NvbiIsImxldCIsImxldHRlciIsImxldmVsIiwibGliZXJhbCIsImxpYnJhcnkiLCJsaWNlbnNlIiwibGllIiwibGlmZSIsImxpZmVzdHlsZSIsImxpZmV0aW1lIiwibGlmdCIsImxpZ2h0IiwibGlrZSIsImxpa2VseSIsImxpbWl0IiwibGltaXRhdGlvbiIsImxpbWl0ZWQiLCJsaW5lIiwibGluayIsImxpcCIsImxpc3QiLCJsaXN0ZW4iLCJsaXRlcmFsbHkiLCJsaXRlcmFyeSIsImxpdGVyYXR1cmUiLCJsaXR0bGUiLCJsaXZlIiwibGl2aW5nIiwibG9hZCIsImxvYW4iLCJsb2NhbCIsImxvY2F0ZSIsImxvY2F0aW9uIiwibG9jayIsImxvbmciLCJsb29rIiwibG9vc2UiLCJsb3NlIiwibG9zcyIsImxvc3QiLCJsb3QiLCJsb3RzIiwibG91ZCIsImxvdmUiLCJsb3ZlbHkiLCJsb3ZlciIsImxvdyIsImxvd2VyIiwibHVjayIsImx1Y2t5IiwibHVuY2giLCJsdW5nIiwibWFjaGluZSIsIm1hZCIsIm1hZ2F6aW5lIiwibWFpbCIsIm1haW4iLCJtYWlubHkiLCJtYWludGFpbiIsIm1haW50ZW5hbmNlIiwibWFqb3IiLCJtYWpvcml0eSIsIm1ha2UiLCJtYWtlciIsIm1ha2V1cCIsIm1hbGUiLCJtYWxsIiwibWFuIiwibWFuYWdlIiwibWFuYWdlbWVudCIsIm1hbmFnZXIiLCJtYW5uZXIiLCJtYW51ZmFjdHVyZXIiLCJtYW51ZmFjdHVyaW5nIiwibWFueSIsIm1hcCIsIm1hcmdpbiIsIm1hcmsiLCJtYXJrZXQiLCJtYXJrZXRpbmciLCJtYXJyaWFnZSIsIm1hcnJpZWQiLCJtYXJyeSIsIm1hc2siLCJtYXNzIiwibWFzc2l2ZSIsIm1hc3RlciIsIm1hdGNoIiwibWF0ZXJpYWwiLCJtYXRoIiwibWF0dGVyIiwibWF5IiwibWF5YmUiLCJtYXlvciIsIm1lIiwibWVhbCIsIm1lYW4iLCJtZWFuaW5nIiwibWVhbndoaWxlIiwibWVhc3VyZSIsIm1lYXN1cmVtZW50IiwibWVhdCIsIm1lY2hhbmlzbSIsIm1lZGlhIiwibWVkaWNhbCIsIm1lZGljYXRpb24iLCJtZWRpY2luZSIsIm1lZGl1bSIsIm1lZXQiLCJtZWV0aW5nIiwibWVtYmVyIiwibWVtYmVyc2hpcCIsIm1lbW9yeSIsIm1lbnRhbCIsIm1lbnRpb24iLCJtZW51IiwibWVyZSIsIm1lcmVseSIsIm1lc3MiLCJtZXNzYWdlIiwibWV0YWwiLCJtZXRlciIsIm1ldGhvZCIsIk1leGljYW4iLCJtaWRkbGUiLCJtaWdodCIsIm1pbGl0YXJ5IiwibWlsayIsIm1pbGxpb24iLCJtaW5kIiwibWluZSIsIm1pbmlzdGVyIiwibWlub3IiLCJtaW5vcml0eSIsIm1pbnV0ZSIsIm1pcmFjbGUiLCJtaXJyb3IiLCJtaXNzIiwibWlzc2lsZSIsIm1pc3Npb24iLCJtaXN0YWtlIiwibWl4IiwibWl4dHVyZSIsIm1vZGUiLCJtb2RlbCIsIm1vZGVyYXRlIiwibW9kZXJuIiwibW9kZXN0IiwibW9tIiwibW9tZW50IiwibW9uZXkiLCJtb25pdG9yIiwibW9udGgiLCJtb29kIiwibW9vbiIsIm1vcmFsIiwibW9yZSIsIm1vcmVvdmVyIiwibW9ybmluZyIsIm1vcnRnYWdlIiwibW9zdCIsIm1vc3RseSIsIm1vdGhlciIsIm1vdGlvbiIsIm1vdGl2YXRpb24iLCJtb3RvciIsIm1vdW50IiwibW91bnRhaW4iLCJtb3VzZSIsIm1vdXRoIiwibW92ZSIsIm1vdmVtZW50IiwibW92aWUiLCJNciIsIk1ycyIsIk1zIiwibXVjaCIsIm11bHRpcGxlIiwibXVyZGVyIiwibXVzY2xlIiwibXVzZXVtIiwibXVzaWMiLCJtdXNpY2FsIiwibXVzaWNpYW4iLCJNdXNsaW0iLCJtdXN0IiwibXV0dWFsIiwibXkiLCJteXNlbGYiLCJteXN0ZXJ5IiwibXl0aCIsIm5ha2VkIiwibmFtZSIsIm5hcnJhdGl2ZSIsIm5hcnJvdyIsIm5hdGlvbiIsIm5hdGlvbmFsIiwibmF0aXZlIiwibmF0dXJhbCIsIm5hdHVyYWxseSIsIm5hdHVyZSIsIm5lYXIiLCJuZWFyYnkiLCJuZWFybHkiLCJuZWNlc3NhcmlseSIsIm5lY2Vzc2FyeSIsIm5lY2siLCJuZWVkIiwibmVnYXRpdmUiLCJuZWdvdGlhdGUiLCJuZWdvdGlhdGlvbiIsIm5laWdoYm9yIiwibmVpZ2hib3Job29kIiwibmVpdGhlciIsIm5lcnZlIiwibmVydm91cyIsIm5ldCIsIm5ldHdvcmsiLCJuZXZlciIsIm5ldmVydGhlbGVzcyIsIm5ldyIsIm5ld2x5IiwibmV3cyIsIm5ld3NwYXBlciIsIm5leHQiLCJuaWNlIiwibmlnaHQiLCJuaW5lIiwibm8iLCJub2JvZHkiLCJub2QiLCJub2lzZSIsIm5vbWluYXRpb24iLCJub25lIiwibm9uZXRoZWxlc3MiLCJub3IiLCJub3JtYWwiLCJub3JtYWxseSIsIm5vcnRoIiwibm9ydGhlcm4iLCJub3NlIiwibm90Iiwibm90ZSIsIm5vdGhpbmciLCJub3RpY2UiLCJub3Rpb24iLCJub3ZlbCIsIm5vdyIsIm5vd2hlcmUiLCJudWNsZWFyIiwibnVtYmVyIiwibnVtZXJvdXMiLCJudXJzZSIsIm51dCIsIm9iamVjdCIsIm9iamVjdGl2ZSIsIm9ibGlnYXRpb24iLCJvYnNlcnZhdGlvbiIsIm9ic2VydmUiLCJvYnNlcnZlciIsIm9idGFpbiIsIm9idmlvdXMiLCJvYnZpb3VzbHkiLCJvY2Nhc2lvbiIsIm9jY2FzaW9uYWxseSIsIm9jY3VwYXRpb24iLCJvY2N1cHkiLCJvY2N1ciIsIm9jZWFuIiwib2RkIiwib2RkcyIsIm9mIiwib2ZmIiwib2ZmZW5zZSIsIm9mZmVuc2l2ZSIsIm9mZmVyIiwib2ZmaWNlIiwib2ZmaWNlciIsIm9mZmljaWFsIiwib2Z0ZW4iLCJvaCIsIm9pbCIsIm9rIiwib2theSIsIm9sZCIsIk9seW1waWMiLCJvbiIsIm9uY2UiLCJvbmUiLCJvbmdvaW5nIiwib25pb24iLCJvbmxpbmUiLCJvbmx5Iiwib250byIsIm9wZW4iLCJvcGVuaW5nIiwib3BlcmF0ZSIsIm9wZXJhdGluZyIsIm9wZXJhdGlvbiIsIm9wZXJhdG9yIiwib3BpbmlvbiIsIm9wcG9uZW50Iiwib3Bwb3J0dW5pdHkiLCJvcHBvc2UiLCJvcHBvc2l0ZSIsIm9wcG9zaXRpb24iLCJvcHRpb24iLCJvciIsIm9yYW5nZSIsIm9yZGVyIiwib3JkaW5hcnkiLCJvcmdhbmljIiwib3JnYW5pemF0aW9uIiwib3JnYW5pemUiLCJvcmllbnRhdGlvbiIsIm9yaWdpbiIsIm9yaWdpbmFsIiwib3JpZ2luYWxseSIsIm90aGVyIiwib3RoZXJzIiwib3RoZXJ3aXNlIiwib3VnaHQiLCJvdXIiLCJvdXJzZWx2ZXMiLCJvdXQiLCJvdXRjb21lIiwib3V0c2lkZSIsIm92ZW4iLCJvdmVyIiwib3ZlcmFsbCIsIm92ZXJjb21lIiwib3Zlcmxvb2siLCJvd2UiLCJvd24iLCJvd25lciIsInBhY2UiLCJwYWNrIiwicGFja2FnZSIsInBhZ2UiLCJwYWluIiwicGFpbmZ1bCIsInBhaW50IiwicGFpbnRlciIsInBhaW50aW5nIiwicGFpciIsInBhbGUiLCJQYWxlc3RpbmlhbiIsInBhbG0iLCJwYW4iLCJwYW5lbCIsInBhbnQiLCJwYXBlciIsInBhcmVudCIsInBhcmsiLCJwYXJraW5nIiwicGFydCIsInBhcnRpY2lwYW50IiwicGFydGljaXBhdGUiLCJwYXJ0aWNpcGF0aW9uIiwicGFydGljdWxhciIsInBhcnRpY3VsYXJseSIsInBhcnRseSIsInBhcnRuZXIiLCJwYXJ0bmVyc2hpcCIsInBhcnR5IiwicGFzcyIsInBhc3NhZ2UiLCJwYXNzZW5nZXIiLCJwYXNzaW9uIiwicGFzdCIsInBhdGNoIiwicGF0aCIsInBhdGllbnQiLCJwYXR0ZXJuIiwicGF1c2UiLCJwYXkiLCJwYXltZW50IiwiUEMiLCJwZWFjZSIsInBlYWsiLCJwZWVyIiwicGVuYWx0eSIsInBlb3BsZSIsInBlcHBlciIsInBlciIsInBlcmNlaXZlIiwicGVyY2VudGFnZSIsInBlcmNlcHRpb24iLCJwZXJmZWN0IiwicGVyZmVjdGx5IiwicGVyZm9ybSIsInBlcmZvcm1hbmNlIiwicGVyaGFwcyIsInBlcmlvZCIsInBlcm1hbmVudCIsInBlcm1pc3Npb24iLCJwZXJtaXQiLCJwZXJzb24iLCJwZXJzb25hbCIsInBlcnNvbmFsaXR5IiwicGVyc29uYWxseSIsInBlcnNvbm5lbCIsInBlcnNwZWN0aXZlIiwicGVyc3VhZGUiLCJwZXQiLCJwaGFzZSIsInBoZW5vbWVub24iLCJwaGlsb3NvcGh5IiwicGhvbmUiLCJwaG90byIsInBob3RvZ3JhcGgiLCJwaG90b2dyYXBoZXIiLCJwaHJhc2UiLCJwaHlzaWNhbCIsInBoeXNpY2FsbHkiLCJwaHlzaWNpYW4iLCJwaWFubyIsInBpY2siLCJwaWN0dXJlIiwicGllIiwicGllY2UiLCJwaWxlIiwicGlsb3QiLCJwaW5lIiwicGluayIsInBpcGUiLCJwaXRjaCIsInBsYWNlIiwicGxhbiIsInBsYW5lIiwicGxhbmV0IiwicGxhbm5pbmciLCJwbGFudCIsInBsYXN0aWMiLCJwbGF0ZSIsInBsYXRmb3JtIiwicGxheSIsInBsYXllciIsInBsZWFzZSIsInBsZWFzdXJlIiwicGxlbnR5IiwicGxvdCIsInBsdXMiLCJQTSIsInBvY2tldCIsInBvZW0iLCJwb2V0IiwicG9ldHJ5IiwicG9pbnQiLCJwb2xlIiwicG9saWNlIiwicG9saWN5IiwicG9saXRpY2FsIiwicG9saXRpY2FsbHkiLCJwb2xpdGljaWFuIiwicG9saXRpY3MiLCJwb2xsIiwicG9sbHV0aW9uIiwicG9vbCIsInBvb3IiLCJwb3AiLCJwb3B1bGFyIiwicG9wdWxhdGlvbiIsInBvcmNoIiwicG9ydCIsInBvcnRpb24iLCJwb3J0cmFpdCIsInBvcnRyYXkiLCJwb3NlIiwicG9zaXRpb24iLCJwb3NpdGl2ZSIsInBvc3Nlc3MiLCJwb3NzaWJpbGl0eSIsInBvc3NpYmxlIiwicG9zc2libHkiLCJwb3N0IiwicG90IiwicG90YXRvIiwicG90ZW50aWFsIiwicG90ZW50aWFsbHkiLCJwb3VuZCIsInBvdXIiLCJwb3ZlcnR5IiwicG93ZGVyIiwicG93ZXIiLCJwb3dlcmZ1bCIsInByYWN0aWNhbCIsInByYWN0aWNlIiwicHJheSIsInByYXllciIsInByZWNpc2VseSIsInByZWRpY3QiLCJwcmVmZXIiLCJwcmVmZXJlbmNlIiwicHJlZ25hbmN5IiwicHJlZ25hbnQiLCJwcmVwYXJhdGlvbiIsInByZXBhcmUiLCJwcmVzY3JpcHRpb24iLCJwcmVzZW5jZSIsInByZXNlbnQiLCJwcmVzZW50YXRpb24iLCJwcmVzZXJ2ZSIsInByZXNpZGVudCIsInByZXNpZGVudGlhbCIsInByZXNzIiwicHJlc3N1cmUiLCJwcmV0ZW5kIiwicHJldHR5IiwicHJldmVudCIsInByZXZpb3VzIiwicHJldmlvdXNseSIsInByaWNlIiwicHJpZGUiLCJwcmllc3QiLCJwcmltYXJpbHkiLCJwcmltYXJ5IiwicHJpbWUiLCJwcmluY2lwYWwiLCJwcmluY2lwbGUiLCJwcmludCIsInByaW9yIiwicHJpb3JpdHkiLCJwcmlzb24iLCJwcmlzb25lciIsInByaXZhY3kiLCJwcml2YXRlIiwicHJvYmFibHkiLCJwcm9ibGVtIiwicHJvY2VkdXJlIiwicHJvY2VlZCIsInByb2Nlc3MiLCJwcm9kdWNlIiwicHJvZHVjZXIiLCJwcm9kdWN0IiwicHJvZHVjdGlvbiIsInByb2Zlc3Npb24iLCJwcm9mZXNzaW9uYWwiLCJwcm9mZXNzb3IiLCJwcm9maWxlIiwicHJvZml0IiwicHJvZ3JhbSIsInByb2dyZXNzIiwicHJvamVjdCIsInByb21pbmVudCIsInByb21pc2UiLCJwcm9tb3RlIiwicHJvbXB0IiwicHJvb2YiLCJwcm9wZXIiLCJwcm9wZXJseSIsInByb3BlcnR5IiwicHJvcG9ydGlvbiIsInByb3Bvc2FsIiwicHJvcG9zZSIsInByb3Bvc2VkIiwicHJvc2VjdXRvciIsInByb3NwZWN0IiwicHJvdGVjdCIsInByb3RlY3Rpb24iLCJwcm90ZWluIiwicHJvdGVzdCIsInByb3VkIiwicHJvdmUiLCJwcm92aWRlIiwicHJvdmlkZXIiLCJwcm92aW5jZSIsInByb3Zpc2lvbiIsInBzeWNob2xvZ2ljYWwiLCJwc3ljaG9sb2dpc3QiLCJwc3ljaG9sb2d5IiwicHVibGljIiwicHVibGljYXRpb24iLCJwdWJsaWNseSIsInB1Ymxpc2giLCJwdWJsaXNoZXIiLCJwdWxsIiwicHVuaXNobWVudCIsInB1cmNoYXNlIiwicHVyZSIsInB1cnBvc2UiLCJwdXJzdWUiLCJwdXNoIiwicHV0IiwicXVhbGlmeSIsInF1YWxpdHkiLCJxdWFydGVyIiwicXVhcnRlcmJhY2siLCJxdWVzdGlvbiIsInF1aWNrIiwicXVpY2tseSIsInF1aWV0IiwicXVpZXRseSIsInF1aXQiLCJxdWl0ZSIsInF1b3RlIiwicmFjZSIsInJhY2lhbCIsInJhZGljYWwiLCJyYWRpbyIsInJhaWwiLCJyYWluIiwicmFpc2UiLCJyYW5nZSIsInJhbmsiLCJyYXBpZCIsInJhcGlkbHkiLCJyYXJlIiwicmFyZWx5IiwicmF0ZSIsInJhdGhlciIsInJhdGluZyIsInJhdGlvIiwicmF3IiwicmVhY2giLCJyZWFjdCIsInJlYWN0aW9uIiwicmVhZCIsInJlYWRlciIsInJlYWRpbmciLCJyZWFkeSIsInJlYWwiLCJyZWFsaXR5IiwicmVhbGl6ZSIsInJlYWxseSIsInJlYXNvbiIsInJlYXNvbmFibGUiLCJyZWNhbGwiLCJyZWNlaXZlIiwicmVjZW50IiwicmVjZW50bHkiLCJyZWNpcGUiLCJyZWNvZ25pdGlvbiIsInJlY29nbml6ZSIsInJlY29tbWVuZCIsInJlY29tbWVuZGF0aW9uIiwicmVjb3JkIiwicmVjb3JkaW5nIiwicmVjb3ZlciIsInJlY292ZXJ5IiwicmVjcnVpdCIsInJlZCIsInJlZHVjZSIsInJlZHVjdGlvbiIsInJlZmVyIiwicmVmZXJlbmNlIiwicmVmbGVjdCIsInJlZmxlY3Rpb24iLCJyZWZvcm0iLCJyZWZ1Z2VlIiwicmVmdXNlIiwicmVnYXJkIiwicmVnYXJkaW5nIiwicmVnYXJkbGVzcyIsInJlZ2ltZSIsInJlZ2lvbiIsInJlZ2lvbmFsIiwicmVnaXN0ZXIiLCJyZWd1bGFyIiwicmVndWxhcmx5IiwicmVndWxhdGUiLCJyZWd1bGF0aW9uIiwicmVpbmZvcmNlIiwicmVqZWN0IiwicmVsYXRlIiwicmVsYXRpb24iLCJyZWxhdGlvbnNoaXAiLCJyZWxhdGl2ZSIsInJlbGF0aXZlbHkiLCJyZWxheCIsInJlbGVhc2UiLCJyZWxldmFudCIsInJlbGllZiIsInJlbGlnaW9uIiwicmVsaWdpb3VzIiwicmVseSIsInJlbWFpbiIsInJlbWFpbmluZyIsInJlbWFya2FibGUiLCJyZW1lbWJlciIsInJlbWluZCIsInJlbW90ZSIsInJlbW92ZSIsInJlcGVhdCIsInJlcGVhdGVkbHkiLCJyZXBsYWNlIiwicmVwbHkiLCJyZXBvcnQiLCJyZXBvcnRlciIsInJlcHJlc2VudCIsInJlcHJlc2VudGF0aW9uIiwicmVwcmVzZW50YXRpdmUiLCJSZXB1YmxpY2FuIiwicmVwdXRhdGlvbiIsInJlcXVlc3QiLCJyZXF1aXJlIiwicmVxdWlyZW1lbnQiLCJyZXNlYXJjaCIsInJlc2VhcmNoZXIiLCJyZXNlbWJsZSIsInJlc2VydmF0aW9uIiwicmVzaWRlbnQiLCJyZXNpc3QiLCJyZXNpc3RhbmNlIiwicmVzb2x1dGlvbiIsInJlc29sdmUiLCJyZXNvcnQiLCJyZXNvdXJjZSIsInJlc3BlY3QiLCJyZXNwb25kIiwicmVzcG9uZGVudCIsInJlc3BvbnNlIiwicmVzcG9uc2liaWxpdHkiLCJyZXNwb25zaWJsZSIsInJlc3QiLCJyZXN0YXVyYW50IiwicmVzdG9yZSIsInJlc3RyaWN0aW9uIiwicmVzdWx0IiwicmV0YWluIiwicmV0aXJlIiwicmV0aXJlbWVudCIsInJldHVybiIsInJldmVhbCIsInJldmVudWUiLCJyZXZpZXciLCJyZXZvbHV0aW9uIiwicmh5dGhtIiwicmljZSIsInJpY2giLCJyaWQiLCJyaWRlIiwicmlmbGUiLCJyaWdodCIsInJpbmciLCJyaXNlIiwicmlzayIsInJpdmVyIiwicm9hZCIsInJvY2siLCJyb2xlIiwicm9sbCIsInJvbWFudGljIiwicm9vZiIsInJvb20iLCJyb290Iiwicm9wZSIsInJvc2UiLCJyb3VnaCIsInJvdWdobHkiLCJyb3VuZCIsInJvdXRlIiwicm91dGluZSIsInJvdyIsInJ1YiIsInJ1bGUiLCJydW4iLCJydW5uaW5nIiwicnVyYWwiLCJydXNoIiwiUnVzc2lhbiIsInNhY3JlZCIsInNhZCIsInNhZmUiLCJzYWZldHkiLCJzYWtlIiwic2FsYWQiLCJzYWxhcnkiLCJzYWxlIiwic2FsZXMiLCJzYWx0Iiwic2FtZSIsInNhbXBsZSIsInNhbmN0aW9uIiwic2FuZCIsInNhdGVsbGl0ZSIsInNhdGlzZmFjdGlvbiIsInNhdGlzZnkiLCJzYXVjZSIsInNhdmUiLCJzYXZpbmciLCJzYXkiLCJzY2FsZSIsInNjYW5kYWwiLCJzY2FyZWQiLCJzY2VuYXJpbyIsInNjZW5lIiwic2NoZWR1bGUiLCJzY2hlbWUiLCJzY2hvbGFyIiwic2Nob2xhcnNoaXAiLCJzY2hvb2wiLCJzY2llbmNlIiwic2NpZW50aWZpYyIsInNjaWVudGlzdCIsInNjb3BlIiwic2NvcmUiLCJzY3JlYW0iLCJzY3JlZW4iLCJzY3JpcHQiLCJzZWEiLCJzZWFyY2giLCJzZWFzb24iLCJzZWF0Iiwic2Vjb25kIiwic2VjcmV0Iiwic2VjcmV0YXJ5Iiwic2VjdGlvbiIsInNlY3RvciIsInNlY3VyZSIsInNlY3VyaXR5Iiwic2VlIiwic2VlZCIsInNlZWsiLCJzZWVtIiwic2VnbWVudCIsInNlaXplIiwic2VsZWN0Iiwic2VsZWN0aW9uIiwic2VsZiIsInNlbGwiLCJTZW5hdGUiLCJzZW5hdG9yIiwic2VuZCIsInNlbmlvciIsInNlbnNlIiwic2Vuc2l0aXZlIiwic2VudGVuY2UiLCJzZXBhcmF0ZSIsInNlcXVlbmNlIiwic2VyaWVzIiwic2VyaW91cyIsInNlcmlvdXNseSIsInNlcnZlIiwic2VydmljZSIsInNlc3Npb24iLCJzZXQiLCJzZXR0aW5nIiwic2V0dGxlIiwic2V0dGxlbWVudCIsInNldmVuIiwic2V2ZXJhbCIsInNldmVyZSIsInNleCIsInNleHVhbCIsInNoYWRlIiwic2hhZG93Iiwic2hha2UiLCJzaGFsbCIsInNoYXBlIiwic2hhcmUiLCJzaGFycCIsInNoZSIsInNoZWV0Iiwic2hlbGYiLCJzaGVsbCIsInNoZWx0ZXIiLCJzaGlmdCIsInNoaW5lIiwic2hpcCIsInNoaXJ0Iiwic2hpdCIsInNob2NrIiwic2hvZSIsInNob290Iiwic2hvb3RpbmciLCJzaG9wIiwic2hvcHBpbmciLCJzaG9yZSIsInNob3J0Iiwic2hvcnRseSIsInNob3QiLCJzaG91bGQiLCJzaG91bGRlciIsInNob3V0Iiwic2hvdyIsInNob3dlciIsInNocnVnIiwic2h1dCIsInNpY2siLCJzaWRlIiwic2lnaCIsInNpZ2h0Iiwic2lnbiIsInNpZ25hbCIsInNpZ25pZmljYW5jZSIsInNpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRseSIsInNpbGVuY2UiLCJzaWxlbnQiLCJzaWx2ZXIiLCJzaW1pbGFyIiwic2ltaWxhcmx5Iiwic2ltcGxlIiwic2ltcGx5Iiwic2luIiwic2luY2UiLCJzaW5nIiwic2luZ2VyIiwic2luZ2xlIiwic2luayIsInNpciIsInNpc3RlciIsInNpdCIsInNpdGUiLCJzaXR1YXRpb24iLCJzaXgiLCJzaXplIiwic2tpIiwic2tpbGwiLCJza2luIiwic2t5Iiwic2xhdmUiLCJzbGVlcCIsInNsaWNlIiwic2xpZGUiLCJzbGlnaHQiLCJzbGlnaHRseSIsInNsaXAiLCJzbG93Iiwic2xvd2x5Iiwic21hbGwiLCJzbWFydCIsInNtZWxsIiwic21pbGUiLCJzbW9rZSIsInNtb290aCIsInNuYXAiLCJzbm93Iiwic28iLCJzb2NjZXIiLCJzb2NpYWwiLCJzb2NpZXR5Iiwic29mdCIsInNvZnR3YXJlIiwic29pbCIsInNvbGFyIiwic29sZGllciIsInNvbGlkIiwic29sdXRpb24iLCJzb2x2ZSIsInNvbWUiLCJzb21lYm9keSIsInNvbWVob3ciLCJzb21lb25lIiwic29tZXRoaW5nIiwic29tZXRpbWVzIiwic29tZXdoYXQiLCJzb21ld2hlcmUiLCJzb24iLCJzb25nIiwic29vbiIsInNvcGhpc3RpY2F0ZWQiLCJzb3JyeSIsInNvcnQiLCJzb3VsIiwic291bmQiLCJzb3VwIiwic291cmNlIiwic291dGgiLCJzb3V0aGVybiIsIlNvdmlldCIsInNwYWNlIiwiU3BhbmlzaCIsInNwZWFrIiwic3BlYWtlciIsInNwZWNpYWwiLCJzcGVjaWFsaXN0Iiwic3BlY2llcyIsInNwZWNpZmljIiwic3BlY2lmaWNhbGx5Iiwic3BlZWNoIiwic3BlZWQiLCJzcGVuZCIsInNwZW5kaW5nIiwic3BpbiIsInNwaXJpdCIsInNwaXJpdHVhbCIsInNwbGl0Iiwic3Bva2VzbWFuIiwic3BvcnQiLCJzcG90Iiwic3ByZWFkIiwic3ByaW5nIiwic3F1YXJlIiwic3F1ZWV6ZSIsInN0YWJpbGl0eSIsInN0YWJsZSIsInN0YWZmIiwic3RhZ2UiLCJzdGFpciIsInN0YWtlIiwic3RhbmQiLCJzdGFuZGFyZCIsInN0YW5kaW5nIiwic3RhciIsInN0YXJlIiwic3RhcnQiLCJzdGF0ZSIsInN0YXRlbWVudCIsInN0YXRpb24iLCJzdGF0aXN0aWNzIiwic3RhdHVzIiwic3RheSIsInN0ZWFkeSIsInN0ZWFsIiwic3RlZWwiLCJzdGVwIiwic3RpY2siLCJzdGlsbCIsInN0aXIiLCJzdG9jayIsInN0b21hY2giLCJzdG9uZSIsInN0b3AiLCJzdG9yYWdlIiwic3RvcmUiLCJzdG9ybSIsInN0b3J5Iiwic3RyYWlnaHQiLCJzdHJhbmdlIiwic3RyYW5nZXIiLCJzdHJhdGVnaWMiLCJzdHJhdGVneSIsInN0cmVhbSIsInN0cmVldCIsInN0cmVuZ3RoIiwic3RyZW5ndGhlbiIsInN0cmVzcyIsInN0cmV0Y2giLCJzdHJpa2UiLCJzdHJpbmciLCJzdHJpcCIsInN0cm9rZSIsInN0cm9uZyIsInN0cm9uZ2x5Iiwic3RydWN0dXJlIiwic3RydWdnbGUiLCJzdHVkZW50Iiwic3R1ZGlvIiwic3R1ZHkiLCJzdHVmZiIsInN0dXBpZCIsInN0eWxlIiwic3ViamVjdCIsInN1Ym1pdCIsInN1YnNlcXVlbnQiLCJzdWJzdGFuY2UiLCJzdWJzdGFudGlhbCIsInN1Y2NlZWQiLCJzdWNjZXNzIiwic3VjY2Vzc2Z1bCIsInN1Y2Nlc3NmdWxseSIsInN1Y2giLCJzdWRkZW4iLCJzdWRkZW5seSIsInN1ZSIsInN1ZmZlciIsInN1ZmZpY2llbnQiLCJzdWdhciIsInN1Z2dlc3QiLCJzdWdnZXN0aW9uIiwic3VpY2lkZSIsInN1aXQiLCJzdW1tZXIiLCJzdW1taXQiLCJzdW4iLCJzdXBlciIsInN1cHBseSIsInN1cHBvcnQiLCJzdXBwb3J0ZXIiLCJzdXBwb3NlIiwic3VwcG9zZWQiLCJTdXByZW1lIiwic3VyZSIsInN1cmVseSIsInN1cmZhY2UiLCJzdXJnZXJ5Iiwic3VycHJpc2UiLCJzdXJwcmlzZWQiLCJzdXJwcmlzaW5nIiwic3VycHJpc2luZ2x5Iiwic3Vycm91bmQiLCJzdXJ2ZXkiLCJzdXJ2aXZhbCIsInN1cnZpdmUiLCJzdXJ2aXZvciIsInN1c3BlY3QiLCJzdXN0YWluIiwic3dlYXIiLCJzd2VlcCIsInN3ZWV0Iiwic3dpbSIsInN3aW5nIiwic3dpdGNoIiwic3ltYm9sIiwic3ltcHRvbSIsInN5c3RlbSIsInRhYmxlIiwidGFibGVzcG9vbiIsInRhY3RpYyIsInRhaWwiLCJ0YWtlIiwidGFsZSIsInRhbGVudCIsInRhbGsiLCJ0YWxsIiwidGFuayIsInRhcCIsInRhcGUiLCJ0YXJnZXQiLCJ0YXNrIiwidGFzdGUiLCJ0YXgiLCJ0YXhwYXllciIsInRlYSIsInRlYWNoIiwidGVhY2hlciIsInRlYWNoaW5nIiwidGVhbSIsInRlYXIiLCJ0ZWFzcG9vbiIsInRlY2huaWNhbCIsInRlY2huaXF1ZSIsInRlY2hub2xvZ3kiLCJ0ZWVuIiwidGVlbmFnZXIiLCJ0ZWxlcGhvbmUiLCJ0ZWxlc2NvcGUiLCJ0ZWxldmlzaW9uIiwidGVsbCIsInRlbXBlcmF0dXJlIiwidGVtcG9yYXJ5IiwidGVuIiwidGVuZCIsInRlbmRlbmN5IiwidGVubmlzIiwidGVuc2lvbiIsInRlbnQiLCJ0ZXJtIiwidGVybXMiLCJ0ZXJyaWJsZSIsInRlcnJpdG9yeSIsInRlcnJvciIsInRlcnJvcmlzbSIsInRlcnJvcmlzdCIsInRlc3QiLCJ0ZXN0aWZ5IiwidGVzdGltb255IiwidGVzdGluZyIsInRleHQiLCJ0aGFuIiwidGhhbmsiLCJ0aGFua3MiLCJ0aGF0IiwidGhlIiwidGhlYXRlciIsInRoZWlyIiwidGhlbSIsInRoZW1lIiwidGhlbXNlbHZlcyIsInRoZW4iLCJ0aGVvcnkiLCJ0aGVyYXB5IiwidGhlcmUiLCJ0aGVyZWZvcmUiLCJ0aGVzZSIsInRoZXkiLCJ0aGljayIsInRoaW4iLCJ0aGluZyIsInRoaW5rIiwidGhpbmtpbmciLCJ0aGlyZCIsInRoaXJ0eSIsInRoaXMiLCJ0aG9zZSIsInRob3VnaCIsInRob3VnaHQiLCJ0aG91c2FuZCIsInRocmVhdCIsInRocmVhdGVuIiwidGhyZWUiLCJ0aHJvYXQiLCJ0aHJvdWdoIiwidGhyb3VnaG91dCIsInRocm93IiwidGh1cyIsInRpY2tldCIsInRpZSIsInRpZ2h0IiwidGltZSIsInRpbnkiLCJ0aXAiLCJ0aXJlIiwidGlyZWQiLCJ0aXNzdWUiLCJ0aXRsZSIsInRvIiwidG9iYWNjbyIsInRvZGF5IiwidG9lIiwidG9nZXRoZXIiLCJ0b21hdG8iLCJ0b21vcnJvdyIsInRvbmUiLCJ0b25ndWUiLCJ0b25pZ2h0IiwidG9vIiwidG9vbCIsInRvb3RoIiwidG9wIiwidG9waWMiLCJ0b3NzIiwidG90YWwiLCJ0b3RhbGx5IiwidG91Y2giLCJ0b3VnaCIsInRvdXIiLCJ0b3VyaXN0IiwidG91cm5hbWVudCIsInRvd2FyZCIsInRvd2FyZHMiLCJ0b3dlciIsInRvd24iLCJ0b3kiLCJ0cmFjZSIsInRyYWNrIiwidHJhZGUiLCJ0cmFkaXRpb24iLCJ0cmFkaXRpb25hbCIsInRyYWZmaWMiLCJ0cmFnZWR5IiwidHJhaWwiLCJ0cmFpbiIsInRyYWluaW5nIiwidHJhbnNmZXIiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1hdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2xhdGUiLCJ0cmFuc3BvcnRhdGlvbiIsInRyYXZlbCIsInRyZWF0IiwidHJlYXRtZW50IiwidHJlYXR5IiwidHJlZSIsInRyZW1lbmRvdXMiLCJ0cmVuZCIsInRyaWFsIiwidHJpYmUiLCJ0cmljayIsInRyaXAiLCJ0cm9vcCIsInRyb3VibGUiLCJ0cnVjayIsInRydWUiLCJ0cnVseSIsInRydXN0IiwidHJ1dGgiLCJ0cnkiLCJ0dWJlIiwidHVubmVsIiwidHVybiIsIlRWIiwidHdlbHZlIiwidHdlbnR5IiwidHdpY2UiLCJ0d2luIiwidHdvIiwidHlwZSIsInR5cGljYWwiLCJ0eXBpY2FsbHkiLCJ1Z2x5IiwidWx0aW1hdGUiLCJ1bHRpbWF0ZWx5IiwidW5hYmxlIiwidW5jbGUiLCJ1bmRlciIsInVuZGVyZ28iLCJ1bmRlcnN0YW5kIiwidW5kZXJzdGFuZGluZyIsInVuZm9ydHVuYXRlbHkiLCJ1bmlmb3JtIiwidW5pb24iLCJ1bmlxdWUiLCJ1bml0IiwiVW5pdGVkIiwidW5pdmVyc2FsIiwidW5pdmVyc2UiLCJ1bml2ZXJzaXR5IiwidW5rbm93biIsInVubGVzcyIsInVubGlrZSIsInVubGlrZWx5IiwidW50aWwiLCJ1bnVzdWFsIiwidXAiLCJ1cG9uIiwidXBwZXIiLCJ1cmJhbiIsInVyZ2UiLCJ1cyIsInVzZSIsInVzZWQiLCJ1c2VmdWwiLCJ1c2VyIiwidXN1YWwiLCJ1c3VhbGx5IiwidXRpbGl0eSIsInZhY2F0aW9uIiwidmFsbGV5IiwidmFsdWFibGUiLCJ2YWx1ZSIsInZhcmlhYmxlIiwidmFyaWF0aW9uIiwidmFyaWV0eSIsInZhcmlvdXMiLCJ2YXJ5IiwidmFzdCIsInZlZ2V0YWJsZSIsInZlaGljbGUiLCJ2ZW50dXJlIiwidmVyc2lvbiIsInZlcnN1cyIsInZlcnkiLCJ2ZXNzZWwiLCJ2ZXRlcmFuIiwidmlhIiwidmljdGltIiwidmljdG9yeSIsInZpZGVvIiwidmlldyIsInZpZXdlciIsInZpbGxhZ2UiLCJ2aW9sYXRlIiwidmlvbGF0aW9uIiwidmlvbGVuY2UiLCJ2aW9sZW50IiwidmlydHVhbGx5IiwidmlydHVlIiwidmlydXMiLCJ2aXNpYmxlIiwidmlzaW9uIiwidmlzaXQiLCJ2aXNpdG9yIiwidmlzdWFsIiwidml0YWwiLCJ2b2ljZSIsInZvbHVtZSIsInZvbHVudGVlciIsInZvdGUiLCJ2b3RlciIsInZzIiwidnVsbmVyYWJsZSIsIndhZ2UiLCJ3YWl0Iiwid2FrZSIsIndhbGsiLCJ3YWxsIiwid2FuZGVyIiwid2FudCIsIndhciIsIndhcm0iLCJ3YXJuIiwid2FybmluZyIsIndhc2giLCJ3YXN0ZSIsIndhdGNoIiwid2F0ZXIiLCJ3YXZlIiwid2F5Iiwid2UiLCJ3ZWFrIiwid2VhbHRoIiwid2VhbHRoeSIsIndlYXBvbiIsIndlYXIiLCJ3ZWF0aGVyIiwid2VkZGluZyIsIndlZWsiLCJ3ZWVrZW5kIiwid2Vla2x5Iiwid2VpZ2giLCJ3ZWlnaHQiLCJ3ZWxjb21lIiwid2VsZmFyZSIsIndlbGwiLCJ3ZXN0Iiwid2VzdGVybiIsIndldCIsIndoYXQiLCJ3aGF0ZXZlciIsIndoZWVsIiwid2hlbiIsIndoZW5ldmVyIiwid2hlcmUiLCJ3aGVyZWFzIiwid2hldGhlciIsIndoaWNoIiwid2hpbGUiLCJ3aGlzcGVyIiwid2hpdGUiLCJ3aG8iLCJ3aG9sZSIsIndob20iLCJ3aG9zZSIsIndoeSIsIndpZGUiLCJ3aWRlbHkiLCJ3aWRlc3ByZWFkIiwid2lmZSIsIndpbGQiLCJ3aWxsIiwid2lsbGluZyIsIndpbiIsIndpbmQiLCJ3aW5kb3ciLCJ3aW5lIiwid2luZyIsIndpbm5lciIsIndpbnRlciIsIndpcGUiLCJ3aXJlIiwid2lzZG9tIiwid2lzZSIsIndpc2giLCJ3aXRoIiwid2l0aGRyYXciLCJ3aXRoaW4iLCJ3aXRob3V0Iiwid2l0bmVzcyIsIndvbWFuIiwid29uZGVyIiwid29uZGVyZnVsIiwid29vZCIsIndvb2RlbiIsIndvcmQiLCJ3b3JrIiwid29ya2VyIiwid29ya2luZyIsIndvcmtzIiwid29ya3Nob3AiLCJ3b3JsZCIsIndvcnJpZWQiLCJ3b3JyeSIsIndvcnRoIiwid291bGQiLCJ3b3VuZCIsIndyYXAiLCJ3cml0ZSIsIndyaXRlciIsIndyaXRpbmciLCJ3cm9uZyIsInlhcmQiLCJ5ZWFoIiwieWVhciIsInllbGwiLCJ5ZWxsb3ciLCJ5ZXMiLCJ5ZXN0ZXJkYXkiLCJ5ZXQiLCJ5aWVsZCIsInlvdSIsInlvdW5nIiwieW91ciIsInlvdXJzIiwieW91cnNlbGYiLCJ5b3V0aCIsInpvbmUiLCJheGlvcyIsImZzIiwiZmluZGVyIiwiQVBJX0RBSUxZX0xJTUlUIiwiTUFYX1dPUkRTIiwiQ0FDSEVfQ0xVU1RFUlMiLCJNQVhfTk9ERV9GUkVRVUVOQ1kiLCJUUkFWRVJTRV9TSU1JTEFSIiwiY2FjaGVJc0luaXRpYWxpemVkIiwidG90YWxXb3Jkc0xhc3REYXkiLCJsYXp5SW5pdENhY2hlIiwiY3VydGltZSIsIkRhdGUiLCJmaW5kRmlsZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwiaW5pdENyYXdsZXIiLCJfTUFYX1dPUkRTIiwiX0NBQ0hFX0NMVVNURVJTIiwiX01BWF9OT0RFX0ZSRVFVRU5DWSIsIl9UUkFWRVJTRV9TSU1JTEFSIiwiZXhpc3RzU3luYyIsIm1rZGlyU3luYyIsInJlY3Vyc2l2ZSIsInNpbmdsZVdvcmRUb0Rpc3BsYXkiLCJyZXN1bHRzIiwicHJvbnVuY2lhdGlvbiIsImRlZiIsImRlZmluaXRpb25BcnJheSIsInBhcnRPZlNwZWVjaCIsInByb3BlcnRpZXMiLCJrZXlzIiwiT2JqZWN0IiwicmVnZXgiLCJ0b0xvd2VyQ2FzZSIsIm5ld09iaiIsImlzU3RyaW5nIiwibG9hZFNpbmdsZVdvcmQiLCJhc29iamVjdCIsIndmcGF0aCIsImlqc29uIiwicmVhZEZpbGVTeW5jIiwidG9TdHJpbmciLCJKU09OIiwicGFyc2UiLCJvanNvbiIsInN0cmluZ2lmeSIsImUiLCJ1bmxpbmtTeW5jIiwiZW52IiwiUkFQSURBUElfS0VZIiwiZGpzb24iLCJ3cml0ZUZpbGUiLCJlcnIiLCJUcmF2ZXJzZU5vZGUiLCJjb25zdHJ1Y3RvciIsImJ5X2RlZiIsInZhbCIsInN5bm9ueW1zIiwid29yZHMiLCJzaW1pbGFyVG8iLCJjb21wcmVzcyIsImxvYWREaWN0aW9uYXJ5QW5kQ2hpbGRyZW4iLCJ0cmVzdWx0IiwidHJhdmVyc2lvbiIsIm5vZGUiLCJ3b3Jkc2JyZWFkdGhmaXJzdCIsInRyYXZlcnNlQ2x1c3RlciIsIm5vV29yZHMiLCJwcmV2aW91c2xldmVsY2hpbGR3b3JkcyIsImNvbmNhdCIsInByb21pc2VzIiwidyIsImJ5X3ciLCJub2RlcHJvbWlzZSIsIlByb21pc2UiLCJsb2FkQ2x1c3RlciIsImNmcGF0aCIsImJ5X2tleSIsInZhbHVlcyIsImNtcCIsImZpcnN0RWwiLCJzZWNvbmRFbCIsImxvY2FsZUNvbXBhcmUiLCJkZWZvYmoiLCJub0NsdXN0ZXJFbnRyaWVzIiwiY2pzb24iLCJsb2FkQ29tbW9uV29yZCIsIm5vRGVmaW5pdGlvbnMiLCJsb2FkQ29tbW9uV29yZHMiLCJjdyIsImNvbW1vbldvcmQiLCJGaW5kRmlsZXMiLCJjbnQiLCJyb290Rm9sZGVyIiwiZmlsZU1vZGlmaWVkRGF0ZSIsIm9uRmlsZSIsInN0clBhdGgiLCJzdGF0IiwiX3Jlc29sdmUiLCJfcmVqZWN0Iiwic3RhcnRTZWFyY2giLCJjcmF3bGVyIiwiaGFuZGxlciIsInN0YXR1c0NvZGUiLCJqc29uIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFD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WUFBWSxtQkFBTyxDQUFDLEVBQU87O0FBRTNCO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUNBQWlDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QyxFQUFFO0FBQy9ELEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7Ozs7Ozs7QUNqVUEsZ0M7Ozs7Ozs7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLEVBQUk7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZ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LG1CQUFPLENBQUMsRUFBMkI7QUFDdEQsc0JBQXNCLG1CQUFPLENBQUMsRUFBOEI7QUFDNUQsa0JBQWtCLG1CQUFPLENBQUMsQ0FBcUI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLEVBQXNCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7QUNuTGE7O0FBRWI7QUFDQTtBQUNB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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1EQUFtRDtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7QUN0UkEsbUM7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLEVBQWM7QUFDekMsQ0FBQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLEVBQVc7QUFDdEM7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixtQkFBTyxDQUFDLEVBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDZCQUE2QjtBQUNqRTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REOztBQUVBO0FBQ0EsbUJBQW1CLGlEQUFpRDtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFlaUcsT0FBZixDQUF1Qi9tRSxLQUF2QixFQUE4QmxXLE9BQTlCLEVBQXVDO0FBQzVDZzlFLFNBQU8sQ0FBQ3RGLFdBQVIsQ0FDRWIsU0FERixFQUVFQyxjQUZGLEVBR0VDLGtCQUhGLEVBSUVDLGdCQUpGOztBQU9BLE1BQUk7QUFFRk8sV0FBTyxDQUFDQyxHQUFSLENBQVksb0VBQVo7QUFFQSxRQUFJeUQsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsU0FBSyxJQUFJb0IsVUFBVCxJQUF1QkQsRUFBRSxDQUFDOWdHLGlCQUExQixFQUE2QztBQUMzQzIvRixjQUFRLENBQUNoOEIsSUFBVCxDQUFjKzlCLE9BQU8sQ0FBQzFCLFdBQVIsQ0FBb0JlLFVBQXBCLEVBQWdDLEtBQWhDLENBQWQ7QUFDRDs7QUFDRCxVQUFNaEIsT0FBTyxDQUFDLzVGLEdBQVIsQ0FBWTI1RixRQUFaLENBQU47QUFFQSxXQUFPO0FBQ0xpQyxnQkFBVSxFQUFFLEdBRFA7QUFFTDN1RixVQUFJLEVBQUU0dUYsSUFGRDtBQUdMQyxhQUFPLEVBQUU7QUFDUCx1Q0FBK0I7QUFEeEI7QUFISixLQUFQO0FBUUQsR0FsQkQsQ0FrQkUsT0FBT3JELEdBQVAsRUFBWTtBQUNaeEMsV0FBTyxDQUFDQyxHQUFSLENBQVl1QyxHQUFaO0FBQ0EsV0FBTztBQUFFbUQsZ0JBQVUsRUFBRSxHQUFkO0FBQW1CM3VGLFVBQUksRUFBRXdyRixHQUFHLENBQUNYLFFBQUo7QUFBekIsS0FBUDtBQUNEO0FBQ0YsQyIsImZpbGUiOiJjcmF3bC1iYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUzKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTsiLCJ2YXIgdXJsID0gcmVxdWlyZShcInVybFwiKTtcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XG52YXIgaHR0cHMgPSByZXF1aXJlKFwiaHR0cHNcIik7XG52YXIgYXNzZXJ0ID0gcmVxdWlyZShcImFzc2VydFwiKTtcbnZhciBXcml0YWJsZSA9IHJlcXVpcmUoXCJzdHJlYW1cIikuV3JpdGFibGU7XG52YXIgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJmb2xsb3ctcmVkaXJlY3RzXCIpO1xuXG4vLyBSRkM3MjMxwqc0LjIuMTogT2YgdGhlIHJlcXVlc3QgbWV0aG9kcyBkZWZpbmVkIGJ5IHRoaXMgc3BlY2lmaWNhdGlvbixcbi8vIHRoZSBHRVQsIEhFQUQsIE9QVElPTlMsIGFuZCBUUkFDRSBtZXRob2RzIGFyZSBkZWZpbmVkIHRvIGJlIHNhZmUuXG52YXIgU0FGRV9NRVRIT0RTID0geyBHRVQ6IHRydWUsIEhFQUQ6IHRydWUsIE9QVElPTlM6IHRydWUsIFRSQUNFOiB0cnVlIH07XG5cbi8vIENyZWF0ZSBoYW5kbGVycyB0aGF0IHBhc3MgZXZlbnRzIGZyb20gbmF0aXZlIHJlcXVlc3RzXG52YXIgZXZlbnRIYW5kbGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5bXCJhYm9ydFwiLCBcImFib3J0ZWRcIiwgXCJlcnJvclwiLCBcInNvY2tldFwiLCBcInRpbWVvdXRcIl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnRIYW5kbGVyc1tldmVudF0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgdGhpcy5fcmVkaXJlY3RhYmxlLmVtaXQoZXZlbnQsIGFyZyk7XG4gIH07XG59KTtcblxuLy8gQW4gSFRUUChTKSByZXF1ZXN0IHRoYXQgY2FuIGJlIHJlZGlyZWN0ZWRcbmZ1bmN0aW9uIFJlZGlyZWN0YWJsZVJlcXVlc3Qob3B0aW9ucywgcmVzcG9uc2VDYWxsYmFjaykge1xuICAvLyBJbml0aWFsaXplIHRoZSByZXF1ZXN0XG4gIFdyaXRhYmxlLmNhbGwodGhpcyk7XG4gIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuX3JlZGlyZWN0Q291bnQgPSAwO1xuICB0aGlzLl9yZWRpcmVjdHMgPSBbXTtcbiAgdGhpcy5fcmVxdWVzdEJvZHlMZW5ndGggPSAwO1xuICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMgPSBbXTtcblxuICAvLyBTaW5jZSBodHRwLnJlcXVlc3QgdHJlYXRzIGhvc3QgYXMgYW4gYWxpYXMgb2YgaG9zdG5hbWUsXG4gIC8vIGJ1dCB0aGUgdXJsIG1vZHVsZSBpbnRlcnByZXRzIGhvc3QgYXMgaG9zdG5hbWUgcGx1cyBwb3J0LFxuICAvLyBlbGltaW5hdGUgdGhlIGhvc3QgcHJvcGVydHkgdG8gYXZvaWQgY29uZnVzaW9uLlxuICBpZiAob3B0aW9ucy5ob3N0KSB7XG4gICAgLy8gVXNlIGhvc3RuYW1lIGlmIHNldCwgYmVjYXVzZSBpdCBoYXMgcHJlY2VkZW5jZVxuICAgIGlmICghb3B0aW9ucy5ob3N0bmFtZSkge1xuICAgICAgb3B0aW9ucy5ob3N0bmFtZSA9IG9wdGlvbnMuaG9zdDtcbiAgICB9XG4gICAgZGVsZXRlIG9wdGlvbnMuaG9zdDtcbiAgfVxuXG4gIC8vIEF0dGFjaCBhIGNhbGxiYWNrIGlmIHBhc3NlZFxuICBpZiAocmVzcG9uc2VDYWxsYmFjaykge1xuICAgIHRoaXMub24oXCJyZXNwb25zZVwiLCByZXNwb25zZUNhbGxiYWNrKTtcbiAgfVxuXG4gIC8vIFJlYWN0IHRvIHJlc3BvbnNlcyBvZiBuYXRpdmUgcmVxdWVzdHNcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9vbk5hdGl2ZVJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgc2VsZi5fcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgfTtcblxuICAvLyBDb21wbGV0ZSB0aGUgVVJMIG9iamVjdCB3aGVuIG5lY2Vzc2FyeVxuICBpZiAoIW9wdGlvbnMucGF0aG5hbWUgJiYgb3B0aW9ucy5wYXRoKSB7XG4gICAgdmFyIHNlYXJjaFBvcyA9IG9wdGlvbnMucGF0aC5pbmRleE9mKFwiP1wiKTtcbiAgICBpZiAoc2VhcmNoUG9zIDwgMCkge1xuICAgICAgb3B0aW9ucy5wYXRobmFtZSA9IG9wdGlvbnMucGF0aDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvcHRpb25zLnBhdGhuYW1lID0gb3B0aW9ucy5wYXRoLnN1YnN0cmluZygwLCBzZWFyY2hQb3MpO1xuICAgICAgb3B0aW9ucy5zZWFyY2ggPSBvcHRpb25zLnBhdGguc3Vic3RyaW5nKHNlYXJjaFBvcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gUGVyZm9ybSB0aGUgZmlyc3QgcmVxdWVzdFxuICB0aGlzLl9wZXJmb3JtUmVxdWVzdCgpO1xufVxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFdyaXRhYmxlLnByb3RvdHlwZSk7XG5cbi8vIFdyaXRlcyBidWZmZXJlZCBkYXRhIHRvIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgLy8gVmFsaWRhdGUgaW5wdXQgYW5kIHNoaWZ0IHBhcmFtZXRlcnMgaWYgbmVjZXNzYXJ5XG4gIGlmICghKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmIChcImxlbmd0aFwiIGluIGRhdGEpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImRhdGEgc2hvdWxkIGJlIGEgc3RyaW5nLCBCdWZmZXIgb3IgVWludDhBcnJheVwiKTtcbiAgfVxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIC8vIElnbm9yZSBlbXB0eSBidWZmZXJzLCBzaW5jZSB3cml0aW5nIHRoZW0gZG9lc24ndCBpbnZva2UgdGhlIGNhbGxiYWNrXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvMjIwNjZcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgLy8gT25seSB3cml0ZSB3aGVuIHdlIGRvbid0IGV4Y2VlZCB0aGUgbWF4aW11bSBib2R5IGxlbmd0aFxuICBpZiAodGhpcy5fcmVxdWVzdEJvZHlMZW5ndGggKyBkYXRhLmxlbmd0aCA8PSB0aGlzLl9vcHRpb25zLm1heEJvZHlMZW5ndGgpIHtcbiAgICB0aGlzLl9yZXF1ZXN0Qm9keUxlbmd0aCArPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMucHVzaCh7IGRhdGE6IGRhdGEsIGVuY29kaW5nOiBlbmNvZGluZyB9KTtcbiAgICB0aGlzLl9jdXJyZW50UmVxdWVzdC53cml0ZShkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spO1xuICB9XG4gIC8vIEVycm9yIHdoZW4gd2UgZXhjZWVkIHRoZSBtYXhpbXVtIGJvZHkgbGVuZ3RoXG4gIGVsc2Uge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIlJlcXVlc3QgYm9keSBsYXJnZXIgdGhhbiBtYXhCb2R5TGVuZ3RoIGxpbWl0XCIpKTtcbiAgICB0aGlzLmFib3J0KCk7XG4gIH1cbn07XG5cbi8vIEVuZHMgdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgLy8gU2hpZnQgcGFyYW1ldGVycyBpZiBuZWNlc3NhcnlcbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGRhdGE7XG4gICAgZGF0YSA9IGVuY29kaW5nID0gbnVsbDtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNhbGxiYWNrID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgLy8gV3JpdGUgZGF0YSBhbmQgZW5kXG4gIHZhciBjdXJyZW50UmVxdWVzdCA9IHRoaXMuX2N1cnJlbnRSZXF1ZXN0O1xuICB0aGlzLndyaXRlKGRhdGEgfHwgXCJcIiwgZW5jb2RpbmcsIGZ1bmN0aW9uICgpIHtcbiAgICBjdXJyZW50UmVxdWVzdC5lbmQobnVsbCwgbnVsbCwgY2FsbGJhY2spO1xuICB9KTtcbn07XG5cbi8vIFNldHMgYSBoZWFkZXIgdmFsdWUgb24gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLnNldEhlYWRlciA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICB0aGlzLl9vcHRpb25zLmhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgdGhpcy5fY3VycmVudFJlcXVlc3Quc2V0SGVhZGVyKG5hbWUsIHZhbHVlKTtcbn07XG5cbi8vIENsZWFycyBhIGhlYWRlciB2YWx1ZSBvbiB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUucmVtb3ZlSGVhZGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX29wdGlvbnMuaGVhZGVyc1tuYW1lXTtcbiAgdGhpcy5fY3VycmVudFJlcXVlc3QucmVtb3ZlSGVhZGVyKG5hbWUpO1xufTtcblxuLy8gUHJveHkgYWxsIG90aGVyIHB1YmxpYyBDbGllbnRSZXF1ZXN0IG1ldGhvZHNcbltcbiAgXCJhYm9ydFwiLCBcImZsdXNoSGVhZGVyc1wiLCBcImdldEhlYWRlclwiLFxuICBcInNldE5vRGVsYXlcIiwgXCJzZXRTb2NrZXRLZWVwQWxpdmVcIiwgXCJzZXRUaW1lb3V0XCIsXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBSZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFJlcXVlc3RbbWV0aG9kXShhLCBiKTtcbiAgfTtcbn0pO1xuXG4vLyBQcm94eSBhbGwgcHVibGljIENsaWVudFJlcXVlc3QgcHJvcGVydGllc1xuW1wiYWJvcnRlZFwiLCBcImNvbm5lY3Rpb25cIiwgXCJzb2NrZXRcIl0uZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLCBwcm9wZXJ0eSwge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY3VycmVudFJlcXVlc3RbcHJvcGVydHldOyB9LFxuICB9KTtcbn0pO1xuXG4vLyBFeGVjdXRlcyB0aGUgbmV4dCBuYXRpdmUgcmVxdWVzdCAoaW5pdGlhbCBvciByZWRpcmVjdClcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLl9wZXJmb3JtUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gTG9hZCB0aGUgbmF0aXZlIHByb3RvY29sXG4gIHZhciBwcm90b2NvbCA9IHRoaXMuX29wdGlvbnMucHJvdG9jb2w7XG4gIHZhciBuYXRpdmVQcm90b2NvbCA9IHRoaXMuX29wdGlvbnMubmF0aXZlUHJvdG9jb2xzW3Byb3RvY29sXTtcbiAgaWYgKCFuYXRpdmVQcm90b2NvbCkge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHByb3RvY29sIFwiICsgcHJvdG9jb2wpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJZiBzcGVjaWZpZWQsIHVzZSB0aGUgYWdlbnQgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvdG9jb2xcbiAgLy8gKEhUVFAgYW5kIEhUVFBTIHVzZSBkaWZmZXJlbnQgdHlwZXMgb2YgYWdlbnRzKVxuICBpZiAodGhpcy5fb3B0aW9ucy5hZ2VudHMpIHtcbiAgICB2YXIgc2NoZW1lID0gcHJvdG9jb2wuc3Vic3RyKDAsIHByb3RvY29sLmxlbmd0aCAtIDEpO1xuICAgIHRoaXMuX29wdGlvbnMuYWdlbnQgPSB0aGlzLl9vcHRpb25zLmFnZW50c1tzY2hlbWVdO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSBuYXRpdmUgcmVxdWVzdFxuICB2YXIgcmVxdWVzdCA9IHRoaXMuX2N1cnJlbnRSZXF1ZXN0ID1cbiAgICAgICAgbmF0aXZlUHJvdG9jb2wucmVxdWVzdCh0aGlzLl9vcHRpb25zLCB0aGlzLl9vbk5hdGl2ZVJlc3BvbnNlKTtcbiAgdGhpcy5fY3VycmVudFVybCA9IHVybC5mb3JtYXQodGhpcy5fb3B0aW9ucyk7XG5cbiAgLy8gU2V0IHVwIGV2ZW50IGhhbmRsZXJzXG4gIHJlcXVlc3QuX3JlZGlyZWN0YWJsZSA9IHRoaXM7XG4gIGZvciAodmFyIGV2ZW50IGluIGV2ZW50SGFuZGxlcnMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChldmVudCkge1xuICAgICAgcmVxdWVzdC5vbihldmVudCwgZXZlbnRIYW5kbGVyc1tldmVudF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEVuZCBhIHJlZGlyZWN0ZWQgcmVxdWVzdFxuICAvLyAoVGhlIGZpcnN0IHJlcXVlc3QgbXVzdCBiZSBlbmRlZCBleHBsaWNpdGx5IHdpdGggUmVkaXJlY3RhYmxlUmVxdWVzdCNlbmQpXG4gIGlmICh0aGlzLl9pc1JlZGlyZWN0KSB7XG4gICAgLy8gV3JpdGUgdGhlIHJlcXVlc3QgZW50aXR5IGFuZCBlbmQuXG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBidWZmZXJzID0gdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzO1xuICAgIChmdW5jdGlvbiB3cml0ZU5leHQoKSB7XG4gICAgICBpZiAoaSA8IGJ1ZmZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBidWZmZXIgPSBidWZmZXJzW2krK107XG4gICAgICAgIHJlcXVlc3Qud3JpdGUoYnVmZmVyLmRhdGEsIGJ1ZmZlci5lbmNvZGluZywgd3JpdGVOZXh0KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXF1ZXN0LmVuZCgpO1xuICAgICAgfVxuICAgIH0oKSk7XG4gIH1cbn07XG5cbi8vIFByb2Nlc3NlcyBhIHJlc3BvbnNlIGZyb20gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLl9wcm9jZXNzUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgLy8gU3RvcmUgdGhlIHJlZGlyZWN0ZWQgcmVzcG9uc2VcbiAgaWYgKHRoaXMuX29wdGlvbnMudHJhY2tSZWRpcmVjdHMpIHtcbiAgICB0aGlzLl9yZWRpcmVjdHMucHVzaCh7XG4gICAgICB1cmw6IHRoaXMuX2N1cnJlbnRVcmwsXG4gICAgICBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgc3RhdHVzQ29kZTogcmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJGQzcyMzHCpzYuNDogVGhlIDN4eCAoUmVkaXJlY3Rpb24pIGNsYXNzIG9mIHN0YXR1cyBjb2RlIGluZGljYXRlc1xuICAvLyB0aGF0IGZ1cnRoZXIgYWN0aW9uIG5lZWRzIHRvIGJlIHRha2VuIGJ5IHRoZSB1c2VyIGFnZW50IGluIG9yZGVyIHRvXG4gIC8vIGZ1bGZpbGwgdGhlIHJlcXVlc3QuIElmIGEgTG9jYXRpb24gaGVhZGVyIGZpZWxkIGlzIHByb3ZpZGVkLFxuICAvLyB0aGUgdXNlciBhZ2VudCBNQVkgYXV0b21hdGljYWxseSByZWRpcmVjdCBpdHMgcmVxdWVzdCB0byB0aGUgVVJJXG4gIC8vIHJlZmVyZW5jZWQgYnkgdGhlIExvY2F0aW9uIGZpZWxkIHZhbHVlLFxuICAvLyBldmVuIGlmIHRoZSBzcGVjaWZpYyBzdGF0dXMgY29kZSBpcyBub3QgdW5kZXJzdG9vZC5cbiAgdmFyIGxvY2F0aW9uID0gcmVzcG9uc2UuaGVhZGVycy5sb2NhdGlvbjtcbiAgaWYgKGxvY2F0aW9uICYmIHRoaXMuX29wdGlvbnMuZm9sbG93UmVkaXJlY3RzICE9PSBmYWxzZSAmJlxuICAgICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA+PSAzMDAgJiYgcmVzcG9uc2Uuc3RhdHVzQ29kZSA8IDQwMCkge1xuICAgIC8vIFJGQzcyMzHCpzYuNDogQSBjbGllbnQgU0hPVUxEIGRldGVjdCBhbmQgaW50ZXJ2ZW5lXG4gICAgLy8gaW4gY3ljbGljYWwgcmVkaXJlY3Rpb25zIChpLmUuLCBcImluZmluaXRlXCIgcmVkaXJlY3Rpb24gbG9vcHMpLlxuICAgIGlmICgrK3RoaXMuX3JlZGlyZWN0Q291bnQgPiB0aGlzLl9vcHRpb25zLm1heFJlZGlyZWN0cykge1xuICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwiTWF4IHJlZGlyZWN0cyBleGNlZWRlZC5cIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJGQzcyMzHCpzYuNDogQXV0b21hdGljIHJlZGlyZWN0aW9uIG5lZWRzIHRvIGRvbmUgd2l0aFxuICAgIC8vIGNhcmUgZm9yIG1ldGhvZHMgbm90IGtub3duIHRvIGJlIHNhZmUgW+KApl0sXG4gICAgLy8gc2luY2UgdGhlIHVzZXIgbWlnaHQgbm90IHdpc2ggdG8gcmVkaXJlY3QgYW4gdW5zYWZlIHJlcXVlc3QuXG4gICAgLy8gUkZDNzIzMcKnNi40Ljc6IFRoZSAzMDcgKFRlbXBvcmFyeSBSZWRpcmVjdCkgc3RhdHVzIGNvZGUgaW5kaWNhdGVzXG4gICAgLy8gdGhhdCB0aGUgdGFyZ2V0IHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJXG4gICAgLy8gYW5kIHRoZSB1c2VyIGFnZW50IE1VU1QgTk9UIGNoYW5nZSB0aGUgcmVxdWVzdCBtZXRob2RcbiAgICAvLyBpZiBpdCBwZXJmb3JtcyBhbiBhdXRvbWF0aWMgcmVkaXJlY3Rpb24gdG8gdGhhdCBVUkkuXG4gICAgdmFyIGhlYWRlcjtcbiAgICB2YXIgaGVhZGVycyA9IHRoaXMuX29wdGlvbnMuaGVhZGVycztcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMzA3ICYmICEodGhpcy5fb3B0aW9ucy5tZXRob2QgaW4gU0FGRV9NRVRIT0RTKSkge1xuICAgICAgdGhpcy5fb3B0aW9ucy5tZXRob2QgPSBcIkdFVFwiO1xuICAgICAgLy8gRHJvcCBhIHBvc3NpYmxlIGVudGl0eSBhbmQgaGVhZGVycyByZWxhdGVkIHRvIGl0XG4gICAgICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMgPSBbXTtcbiAgICAgIGZvciAoaGVhZGVyIGluIGhlYWRlcnMpIHtcbiAgICAgICAgaWYgKC9eY29udGVudC0vaS50ZXN0KGhlYWRlcikpIHtcbiAgICAgICAgICBkZWxldGUgaGVhZGVyc1toZWFkZXJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRHJvcCB0aGUgSG9zdCBoZWFkZXIsIGFzIHRoZSByZWRpcmVjdCBtaWdodCBsZWFkIHRvIGEgZGlmZmVyZW50IGhvc3RcbiAgICBpZiAoIXRoaXMuX2lzUmVkaXJlY3QpIHtcbiAgICAgIGZvciAoaGVhZGVyIGluIGhlYWRlcnMpIHtcbiAgICAgICAgaWYgKC9eaG9zdCQvaS50ZXN0KGhlYWRlcikpIHtcbiAgICAgICAgICBkZWxldGUgaGVhZGVyc1toZWFkZXJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSB0aGUgcmVkaXJlY3RlZCByZXF1ZXN0XG4gICAgdmFyIHJlZGlyZWN0VXJsID0gdXJsLnJlc29sdmUodGhpcy5fY3VycmVudFVybCwgbG9jYXRpb24pO1xuICAgIGRlYnVnKFwicmVkaXJlY3RpbmcgdG9cIiwgcmVkaXJlY3RVcmwpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgdXJsLnBhcnNlKHJlZGlyZWN0VXJsKSk7XG4gICAgdGhpcy5faXNSZWRpcmVjdCA9IHRydWU7XG4gICAgdGhpcy5fcGVyZm9ybVJlcXVlc3QoKTtcblxuICAgIC8vIERpc2NhcmQgdGhlIHJlbWFpbmRlciBvZiB0aGUgcmVzcG9uc2UgdG8gYXZvaWQgd2FpdGluZyBmb3IgZGF0YVxuICAgIHJlc3BvbnNlLmRlc3Ryb3koKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUaGUgcmVzcG9uc2UgaXMgbm90IGEgcmVkaXJlY3Q7IHJldHVybiBpdCBhcy1pc1xuICAgIHJlc3BvbnNlLnJlc3BvbnNlVXJsID0gdGhpcy5fY3VycmVudFVybDtcbiAgICByZXNwb25zZS5yZWRpcmVjdHMgPSB0aGlzLl9yZWRpcmVjdHM7XG4gICAgdGhpcy5lbWl0KFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xuXG4gICAgLy8gQ2xlYW4gdXBcbiAgICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMgPSBbXTtcbiAgfVxufTtcblxuLy8gV3JhcHMgdGhlIGtleS92YWx1ZSBvYmplY3Qgb2YgcHJvdG9jb2xzIHdpdGggcmVkaXJlY3QgZnVuY3Rpb25hbGl0eVxuZnVuY3Rpb24gd3JhcChwcm90b2NvbHMpIHtcbiAgLy8gRGVmYXVsdCBzZXR0aW5nc1xuICB2YXIgZXhwb3J0cyA9IHtcbiAgICBtYXhSZWRpcmVjdHM6IDIxLFxuICAgIG1heEJvZHlMZW5ndGg6IDEwICogMTAyNCAqIDEwMjQsXG4gIH07XG5cbiAgLy8gV3JhcCBlYWNoIHByb3RvY29sXG4gIHZhciBuYXRpdmVQcm90b2NvbHMgPSB7fTtcbiAgT2JqZWN0LmtleXMocHJvdG9jb2xzKS5mb3JFYWNoKGZ1bmN0aW9uIChzY2hlbWUpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSBzY2hlbWUgKyBcIjpcIjtcbiAgICB2YXIgbmF0aXZlUHJvdG9jb2wgPSBuYXRpdmVQcm90b2NvbHNbcHJvdG9jb2xdID0gcHJvdG9jb2xzW3NjaGVtZV07XG4gICAgdmFyIHdyYXBwZWRQcm90b2NvbCA9IGV4cG9ydHNbc2NoZW1lXSA9IE9iamVjdC5jcmVhdGUobmF0aXZlUHJvdG9jb2wpO1xuXG4gICAgLy8gRXhlY3V0ZXMgYSByZXF1ZXN0LCBmb2xsb3dpbmcgcmVkaXJlY3RzXG4gICAgd3JhcHBlZFByb3RvY29sLnJlcXVlc3QgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBvcHRpb25zID0gdXJsLnBhcnNlKG9wdGlvbnMpO1xuICAgICAgICBvcHRpb25zLm1heFJlZGlyZWN0cyA9IGV4cG9ydHMubWF4UmVkaXJlY3RzO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBwcm90b2NvbDogcHJvdG9jb2wsXG4gICAgICAgICAgbWF4UmVkaXJlY3RzOiBleHBvcnRzLm1heFJlZGlyZWN0cyxcbiAgICAgICAgICBtYXhCb2R5TGVuZ3RoOiBleHBvcnRzLm1heEJvZHlMZW5ndGgsXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgb3B0aW9ucy5uYXRpdmVQcm90b2NvbHMgPSBuYXRpdmVQcm90b2NvbHM7XG4gICAgICBhc3NlcnQuZXF1YWwob3B0aW9ucy5wcm90b2NvbCwgcHJvdG9jb2wsIFwicHJvdG9jb2wgbWlzbWF0Y2hcIik7XG4gICAgICBkZWJ1ZyhcIm9wdGlvbnNcIiwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gbmV3IFJlZGlyZWN0YWJsZVJlcXVlc3Qob3B0aW9ucywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICAvLyBFeGVjdXRlcyBhIEdFVCByZXF1ZXN0LCBmb2xsb3dpbmcgcmVkaXJlY3RzXG4gICAgd3JhcHBlZFByb3RvY29sLmdldCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHJlcXVlc3QgPSB3cmFwcGVkUHJvdG9jb2wucmVxdWVzdChvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICByZXF1ZXN0LmVuZCgpO1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBleHBvcnRzO1xufVxuXG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXAoeyBodHRwOiBodHRwLCBodHRwczogaHR0cHMgfSk7XG5tb2R1bGUuZXhwb3J0cy53cmFwID0gd3JhcDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKi9cbmV4cG9ydHMuaW5zdGFuY2VzID0gW107XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIHZhciBwcmV2VGltZTtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcbiAgZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cbiAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmluaXQpIHtcbiAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICB9XG5cbiAgZXhwb3J0cy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cbiAgcmV0dXJuIGRlYnVnO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdmFyIGluZGV4ID0gZXhwb3J0cy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGV4cG9ydHMuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIGk7XG4gIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleHBvcnRzLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbnN0YW5jZSA9IGV4cG9ydHMuaW5zdGFuY2VzW2ldO1xuICAgIGluc3RhbmNlLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdmFyIHZhbHVlRnJvbUNvbmZpZzJLZXlzID0gWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J107XG4gIHZhciBkZWZhdWx0VG9Db25maWcyS2V5cyA9IFtcbiAgICAnYmFzZVVSTCcsICd1cmwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCdcbiAgXTtcblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBheGlvc0tleXMgPSB2YWx1ZUZyb21Db25maWcyS2V5c1xuICAgIC5jb25jYXQobWVyZ2VEZWVwUHJvcGVydGllc0tleXMpXG4gICAgLmNvbmNhdChkZWZhdWx0VG9Db25maWcyS2V5cyk7XG5cbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdFxuICAgIC5rZXlzKGNvbmZpZzIpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIGZ1bmN0aW9uIG90aGVyS2V5c0RlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwiXHJcbi8vIGh0dHBzOi8vd3d3LmVmLmNvbS93d2VuL2VuZ2xpc2gtcmVzb3VyY2VzL2VuZ2xpc2gtdm9jYWJ1bGFyeS90b3AtMzAwMC13b3Jkcy9cclxuXHJcbmV4cG9ydCBjb25zdCBUaGVNb3N0Q29tbW9uMzAwMCA9IHtcclxuICAgIGEgOiAxLFxyXG4gICAgYWJhbmRvbiA6IDEsXHJcbiAgICBhYmlsaXR5IDogMSxcclxuICAgIGFibGUgOiAxLFxyXG4gICAgYWJvcnRpb24gOiAxLFxyXG4gICAgYWJvdXQgOiAxLFxyXG4gICAgYWJvdmUgOiAxLFxyXG4gICAgYWJyb2FkIDogMSxcclxuICAgIGFic2VuY2UgOiAxLFxyXG4gICAgYWJzb2x1dGUgOiAxLFxyXG4gICAgYWJzb2x1dGVseSA6IDEsXHJcbiAgICBhYnNvcmIgOiAxLFxyXG4gICAgYWJ1c2UgOiAxLFxyXG4gICAgYWNhZGVtaWMgOiAxLFxyXG4gICAgYWNjZXB0IDogMSxcclxuICAgIGFjY2VzcyA6IDEsXHJcbiAgICBhY2NpZGVudCA6IDEsXHJcbiAgICBhY2NvbXBhbnkgOiAxLFxyXG4gICAgYWNjb21wbGlzaCA6IDEsXHJcbiAgICBhY2NvcmRpbmcgOiAxLFxyXG4gICAgYWNjb3VudCA6IDEsXHJcbiAgICBhY2N1cmF0ZSA6IDEsXHJcbiAgICBhY2N1c2UgOiAxLFxyXG4gICAgYWNoaWV2ZSA6IDEsXHJcbiAgICBhY2hpZXZlbWVudCA6IDEsXHJcbiAgICBhY2lkIDogMSxcclxuICAgIGFja25vd2xlZGdlIDogMSxcclxuICAgIGFjcXVpcmUgOiAxLFxyXG4gICAgYWNyb3NzIDogMSxcclxuICAgIGFjdCA6IDEsXHJcbiAgICBhY3Rpb24gOiAxLFxyXG4gICAgYWN0aXZlIDogMSxcclxuICAgIGFjdGl2aXN0IDogMSxcclxuICAgIGFjdGl2aXR5IDogMSxcclxuICAgIGFjdG9yIDogMSxcclxuICAgIGFjdHJlc3MgOiAxLFxyXG4gICAgYWN0dWFsIDogMSxcclxuICAgIGFjdHVhbGx5IDogMSxcclxuICAgIGFkIDogMSxcclxuICAgIGFkYXB0IDogMSxcclxuICAgIGFkZCA6IDEsXHJcbiAgICBhZGRpdGlvbiA6IDEsXHJcbiAgICBhZGRpdGlvbmFsIDogMSxcclxuICAgIGFkZHJlc3MgOiAxLFxyXG4gICAgYWRlcXVhdGUgOiAxLFxyXG4gICAgYWRqdXN0IDogMSxcclxuICAgIGFkanVzdG1lbnQgOiAxLFxyXG4gICAgYWRtaW5pc3RyYXRpb24gOiAxLFxyXG4gICAgYWRtaW5pc3RyYXRvciA6IDEsXHJcbiAgICBhZG1pcmUgOiAxLFxyXG4gICAgYWRtaXNzaW9uIDogMSxcclxuICAgIGFkbWl0IDogMSxcclxuICAgIGFkb2xlc2NlbnQgOiAxLFxyXG4gICAgYWRvcHQgOiAxLFxyXG4gICAgYWR1bHQgOiAxLFxyXG4gICAgYWR2YW5jZSA6IDEsXHJcbiAgICBhZHZhbmNlZCA6IDEsXHJcbiAgICBhZHZhbnRhZ2UgOiAxLFxyXG4gICAgYWR2ZW50dXJlIDogMSxcclxuICAgIGFkdmVydGlzaW5nIDogMSxcclxuICAgIGFkdmljZSA6IDEsXHJcbiAgICBhZHZpc2UgOiAxLFxyXG4gICAgYWR2aXNlciA6IDEsXHJcbiAgICBhZHZvY2F0ZSA6IDEsXHJcbiAgICBhZmZhaXIgOiAxLFxyXG4gICAgYWZmZWN0IDogMSxcclxuICAgIGFmZm9yZCA6IDEsXHJcbiAgICBhZnJhaWQgOiAxLFxyXG4gICAgQWZyaWNhbiA6IDEsXHJcbiAgICBcIkFmcmljYW4tQW1lcmljYW5cIiA6IDEsXHJcbiAgICBhZnRlciA6IDEsXHJcbiAgICBhZnRlcm5vb24gOiAxLFxyXG4gICAgYWdhaW4gOiAxLFxyXG4gICAgYWdhaW5zdCA6IDEsXHJcbiAgICBhZ2UgOiAxLFxyXG4gICAgYWdlbmN5IDogMSxcclxuICAgIGFnZW5kYSA6IDEsXHJcbiAgICBhZ2VudCA6IDEsXHJcbiAgICBhZ2dyZXNzaXZlIDogMSxcclxuICAgIGFnbyA6IDEsXHJcbiAgICBhZ3JlZSA6IDEsXHJcbiAgICBhZ3JlZW1lbnQgOiAxLFxyXG4gICAgYWdyaWN1bHR1cmFsIDogMSxcclxuICAgIGFoIDogMSxcclxuICAgIGFoZWFkIDogMSxcclxuICAgIGFpZCA6IDEsXHJcbiAgICBhaWRlIDogMSxcclxuICAgIEFJRFMgOiAxLFxyXG4gICAgYWltIDogMSxcclxuICAgIGFpciA6IDEsXHJcbiAgICBhaXJjcmFmdCA6IDEsXHJcbiAgICBhaXJsaW5lIDogMSxcclxuICAgIGFpcnBvcnQgOiAxLFxyXG4gICAgYWxidW0gOiAxLFxyXG4gICAgYWxjb2hvbCA6IDEsXHJcbiAgICBhbGl2ZSA6IDEsXHJcbiAgICBhbGwgOiAxLFxyXG4gICAgYWxsaWFuY2UgOiAxLFxyXG4gICAgYWxsb3cgOiAxLFxyXG4gICAgYWxseSA6IDEsXHJcbiAgICBhbG1vc3QgOiAxLFxyXG4gICAgYWxvbmUgOiAxLFxyXG4gICAgYWxvbmcgOiAxLFxyXG4gICAgYWxyZWFkeSA6IDEsXHJcbiAgICBhbHNvIDogMSxcclxuICAgIGFsdGVyIDogMSxcclxuICAgIGFsdGVybmF0aXZlIDogMSxcclxuICAgIGFsdGhvdWdoIDogMSxcclxuICAgIGFsd2F5cyA6IDEsXHJcbiAgICBBTSA6IDEsXHJcbiAgICBhbWF6aW5nIDogMSxcclxuICAgIEFtZXJpY2FuIDogMSxcclxuICAgIGFtb25nIDogMSxcclxuICAgIGFtb3VudCA6IDEsXHJcbiAgICBhbmFseXNpcyA6IDEsXHJcbiAgICBhbmFseXN0IDogMSxcclxuICAgIGFuYWx5emUgOiAxLFxyXG4gICAgYW5jaWVudCA6IDEsXHJcbiAgICBhbmQgOiAxLFxyXG4gICAgYW5nZXIgOiAxLFxyXG4gICAgYW5nbGUgOiAxLFxyXG4gICAgYW5ncnkgOiAxLFxyXG4gICAgYW5pbWFsIDogMSxcclxuICAgIGFubml2ZXJzYXJ5IDogMSxcclxuICAgIGFubm91bmNlIDogMSxcclxuICAgIGFubnVhbCA6IDEsXHJcbiAgICBhbm90aGVyIDogMSxcclxuICAgIGFuc3dlciA6IDEsXHJcbiAgICBhbnRpY2lwYXRlIDogMSxcclxuICAgIGFueGlldHkgOiAxLFxyXG4gICAgYW55IDogMSxcclxuICAgIGFueWJvZHkgOiAxLFxyXG4gICAgYW55bW9yZSA6IDEsXHJcbiAgICBhbnlvbmUgOiAxLFxyXG4gICAgYW55dGhpbmcgOiAxLFxyXG4gICAgYW55d2F5IDogMSxcclxuICAgIGFueXdoZXJlIDogMSxcclxuICAgIGFwYXJ0IDogMSxcclxuICAgIGFwYXJ0bWVudCA6IDEsXHJcbiAgICBhcHBhcmVudCA6IDEsXHJcbiAgICBhcHBhcmVudGx5IDogMSxcclxuICAgIGFwcGVhbCA6IDEsXHJcbiAgICBhcHBlYXIgOiAxLFxyXG4gICAgYXBwZWFyYW5jZSA6IDEsXHJcbiAgICBhcHBsZSA6IDEsXHJcbiAgICBhcHBsaWNhdGlvbiA6IDEsXHJcbiAgICBhcHBseSA6IDEsXHJcbiAgICBhcHBvaW50IDogMSxcclxuICAgIGFwcG9pbnRtZW50IDogMSxcclxuICAgIGFwcHJlY2lhdGUgOiAxLFxyXG4gICAgYXBwcm9hY2ggOiAxLFxyXG4gICAgYXBwcm9wcmlhdGUgOiAxLFxyXG4gICAgYXBwcm92YWwgOiAxLFxyXG4gICAgYXBwcm92ZSA6IDEsXHJcbiAgICBhcHByb3hpbWF0ZWx5IDogMSxcclxuICAgIEFyYWIgOiAxLFxyXG4gICAgYXJjaGl0ZWN0IDogMSxcclxuICAgIGFyZWEgOiAxLFxyXG4gICAgYXJndWUgOiAxLFxyXG4gICAgYXJndW1lbnQgOiAxLFxyXG4gICAgYXJpc2UgOiAxLFxyXG4gICAgYXJtIDogMSxcclxuICAgIGFybWVkIDogMSxcclxuICAgIGFybXkgOiAxLFxyXG4gICAgYXJvdW5kIDogMSxcclxuICAgIGFycmFuZ2UgOiAxLFxyXG4gICAgYXJyYW5nZW1lbnQgOiAxLFxyXG4gICAgYXJyZXN0IDogMSxcclxuICAgIGFycml2YWwgOiAxLFxyXG4gICAgYXJyaXZlIDogMSxcclxuICAgIGFydCA6IDEsXHJcbiAgICBhcnRpY2xlIDogMSxcclxuICAgIGFydGlzdCA6IDEsXHJcbiAgICBhcnRpc3RpYyA6IDEsXHJcbiAgICBhcyA6IDEsXHJcbiAgICBBc2lhbiA6IDEsXHJcbiAgICBhc2lkZSA6IDEsXHJcbiAgICBhc2sgOiAxLFxyXG4gICAgYXNsZWVwIDogMSxcclxuICAgIGFzcGVjdCA6IDEsXHJcbiAgICBhc3NhdWx0IDogMSxcclxuICAgIGFzc2VydCA6IDEsXHJcbiAgICBhc3Nlc3MgOiAxLFxyXG4gICAgYXNzZXNzbWVudCA6IDEsXHJcbiAgICBhc3NldCA6IDEsXHJcbiAgICBhc3NpZ24gOiAxLFxyXG4gICAgYXNzaWdubWVudCA6IDEsXHJcbiAgICBhc3Npc3QgOiAxLFxyXG4gICAgYXNzaXN0YW5jZSA6IDEsXHJcbiAgICBhc3Npc3RhbnQgOiAxLFxyXG4gICAgYXNzb2NpYXRlIDogMSxcclxuICAgIGFzc29jaWF0aW9uIDogMSxcclxuICAgIGFzc3VtZSA6IDEsXHJcbiAgICBhc3N1bXB0aW9uIDogMSxcclxuICAgIGFzc3VyZSA6IDEsXHJcbiAgICBhdCA6IDEsXHJcbiAgICBhdGhsZXRlIDogMSxcclxuICAgIGF0aGxldGljIDogMSxcclxuICAgIGF0bW9zcGhlcmUgOiAxLFxyXG4gICAgYXR0YWNoIDogMSxcclxuICAgIGF0dGFjayA6IDEsXHJcbiAgICBhdHRlbXB0IDogMSxcclxuICAgIGF0dGVuZCA6IDEsXHJcbiAgICBhdHRlbnRpb24gOiAxLFxyXG4gICAgYXR0aXR1ZGUgOiAxLFxyXG4gICAgYXR0b3JuZXkgOiAxLFxyXG4gICAgYXR0cmFjdCA6IDEsXHJcbiAgICBhdHRyYWN0aXZlIDogMSxcclxuICAgIGF0dHJpYnV0ZSA6IDEsXHJcbiAgICBhdWRpZW5jZSA6IDEsXHJcbiAgICBhdXRob3IgOiAxLFxyXG4gICAgYXV0aG9yaXR5IDogMSxcclxuICAgIGF1dG8gOiAxLFxyXG4gICAgYXZhaWxhYmxlIDogMSxcclxuICAgIGF2ZXJhZ2UgOiAxLFxyXG4gICAgYXZvaWQgOiAxLFxyXG4gICAgYXdhcmQgOiAxLFxyXG4gICAgYXdhcmUgOiAxLFxyXG4gICAgYXdhcmVuZXNzIDogMSxcclxuICAgIGF3YXkgOiAxLFxyXG4gICAgYXdmdWwgOiAxLFxyXG4gICAgYmFieSA6IDEsXHJcbiAgICBiYWNrIDogMSxcclxuICAgIGJhY2tncm91bmQgOiAxLFxyXG4gICAgYmFkIDogMSxcclxuICAgIGJhZGx5IDogMSxcclxuICAgIGJhZyA6IDEsXHJcbiAgICBiYWtlIDogMSxcclxuICAgIGJhbGFuY2UgOiAxLFxyXG4gICAgYmFsbCA6IDEsXHJcbiAgICBiYW4gOiAxLFxyXG4gICAgYmFuZCA6IDEsXHJcbiAgICBiYW5rIDogMSxcclxuICAgIGJhciA6IDEsXHJcbiAgICBiYXJlbHkgOiAxLFxyXG4gICAgYmFycmVsIDogMSxcclxuICAgIGJhcnJpZXIgOiAxLFxyXG4gICAgYmFzZSA6IDEsXHJcbiAgICBiYXNlYmFsbCA6IDEsXHJcbiAgICBiYXNpYyA6IDEsXHJcbiAgICBiYXNpY2FsbHkgOiAxLFxyXG4gICAgYmFzaXMgOiAxLFxyXG4gICAgYmFza2V0IDogMSxcclxuICAgIGJhc2tldGJhbGwgOiAxLFxyXG4gICAgYmF0aHJvb20gOiAxLFxyXG4gICAgYmF0dGVyeSA6IDEsXHJcbiAgICBiYXR0bGUgOiAxLFxyXG4gICAgYmUgOiAxLFxyXG4gICAgYmVhY2ggOiAxLFxyXG4gICAgYmVhbiA6IDEsXHJcbiAgICBiZWFyIDogMSxcclxuICAgIGJlYXQgOiAxLFxyXG4gICAgYmVhdXRpZnVsIDogMSxcclxuICAgIGJlYXV0eSA6IDEsXHJcbiAgICBiZWNhdXNlIDogMSxcclxuICAgIGJlY29tZSA6IDEsXHJcbiAgICBiZWQgOiAxLFxyXG4gICAgYmVkcm9vbSA6IDEsXHJcbiAgICBiZWVyIDogMSxcclxuICAgIGJlZm9yZSA6IDEsXHJcbiAgICBiZWdpbiA6IDEsXHJcbiAgICBiZWdpbm5pbmcgOiAxLFxyXG4gICAgYmVoYXZpb3IgOiAxLFxyXG4gICAgYmVoaW5kIDogMSxcclxuICAgIGJlaW5nIDogMSxcclxuICAgIGJlbGllZiA6IDEsXHJcbiAgICBiZWxpZXZlIDogMSxcclxuICAgIGJlbGwgOiAxLFxyXG4gICAgYmVsb25nIDogMSxcclxuICAgIGJlbG93IDogMSxcclxuICAgIGJlbHQgOiAxLFxyXG4gICAgYmVuY2ggOiAxLFxyXG4gICAgYmVuZCA6IDEsXHJcbiAgICBiZW5lYXRoIDogMSxcclxuICAgIGJlbmVmaXQgOiAxLFxyXG4gICAgYmVzaWRlIDogMSxcclxuICAgIGJlc2lkZXMgOiAxLFxyXG4gICAgYmVzdCA6IDEsXHJcbiAgICBiZXQgOiAxLFxyXG4gICAgYmV0dGVyIDogMSxcclxuICAgIGJldHdlZW4gOiAxLFxyXG4gICAgYmV5b25kIDogMSxcclxuICAgIEJpYmxlIDogMSxcclxuICAgIGJpZyA6IDEsXHJcbiAgICBiaWtlIDogMSxcclxuICAgIGJpbGwgOiAxLFxyXG4gICAgYmlsbGlvbiA6IDEsXHJcbiAgICBiaW5kIDogMSxcclxuICAgIGJpb2xvZ2ljYWwgOiAxLFxyXG4gICAgYmlyZCA6IDEsXHJcbiAgICBiaXJ0aCA6IDEsXHJcbiAgICBiaXJ0aGRheSA6IDEsXHJcbiAgICBiaXQgOiAxLFxyXG4gICAgYml0ZSA6IDEsXHJcbiAgICBibGFjayA6IDEsXHJcbiAgICBibGFkZSA6IDEsXHJcbiAgICBibGFtZSA6IDEsXHJcbiAgICBibGFua2V0IDogMSxcclxuICAgIGJsaW5kIDogMSxcclxuICAgIGJsb2NrIDogMSxcclxuICAgIGJsb29kIDogMSxcclxuICAgIGJsb3cgOiAxLFxyXG4gICAgYmx1ZSA6IDEsXHJcbiAgICBib2FyZCA6IDEsXHJcbiAgICBib2F0IDogMSxcclxuICAgIGJvZHkgOiAxLFxyXG4gICAgYm9tYiA6IDEsXHJcbiAgICBib21iaW5nIDogMSxcclxuICAgIGJvbmQgOiAxLFxyXG4gICAgYm9uZSA6IDEsXHJcbiAgICBib29rIDogMSxcclxuICAgIGJvb20gOiAxLFxyXG4gICAgYm9vdCA6IDEsXHJcbiAgICBib3JkZXIgOiAxLFxyXG4gICAgYm9ybiA6IDEsXHJcbiAgICBib3Jyb3cgOiAxLFxyXG4gICAgYm9zcyA6IDEsXHJcbiAgICBib3RoIDogMSxcclxuICAgIGJvdGhlciA6IDEsXHJcbiAgICBib3R0bGUgOiAxLFxyXG4gICAgYm90dG9tIDogMSxcclxuICAgIGJvdW5kYXJ5IDogMSxcclxuICAgIGJvd2wgOiAxLFxyXG4gICAgYm94IDogMSxcclxuICAgIGJveSA6IDEsXHJcbiAgICBib3lmcmllbmQgOiAxLFxyXG4gICAgYnJhaW4gOiAxLFxyXG4gICAgYnJhbmNoIDogMSxcclxuICAgIGJyYW5kIDogMSxcclxuICAgIGJyZWFkIDogMSxcclxuICAgIGJyZWFrIDogMSxcclxuICAgIGJyZWFrZmFzdCA6IDEsXHJcbiAgICBicmVhc3QgOiAxLFxyXG4gICAgYnJlYXRoIDogMSxcclxuICAgIGJyZWF0aGUgOiAxLFxyXG4gICAgYnJpY2sgOiAxLFxyXG4gICAgYnJpZGdlIDogMSxcclxuICAgIGJyaWVmIDogMSxcclxuICAgIGJyaWVmbHkgOiAxLFxyXG4gICAgYnJpZ2h0IDogMSxcclxuICAgIGJyaWxsaWFudCA6IDEsXHJcbiAgICBicmluZyA6IDEsXHJcbiAgICBCcml0aXNoIDogMSxcclxuICAgIGJyb2FkIDogMSxcclxuICAgIGJyb2tlbiA6IDEsXHJcbiAgICBicm90aGVyIDogMSxcclxuICAgIGJyb3duIDogMSxcclxuICAgIGJydXNoIDogMSxcclxuICAgIGJ1Y2sgOiAxLFxyXG4gICAgYnVkZ2V0IDogMSxcclxuICAgIGJ1aWxkIDogMSxcclxuICAgIGJ1aWxkaW5nIDogMSxcclxuICAgIGJ1bGxldCA6IDEsXHJcbiAgICBidW5jaCA6IDEsXHJcbiAgICBidXJkZW4gOiAxLFxyXG4gICAgYnVybiA6IDEsXHJcbiAgICBidXJ5IDogMSxcclxuICAgIGJ1cyA6IDEsXHJcbiAgICBidXNpbmVzcyA6IDEsXHJcbiAgICBidXN5IDogMSxcclxuICAgIGJ1dCA6IDEsXHJcbiAgICBidXR0ZXIgOiAxLFxyXG4gICAgYnV0dG9uIDogMSxcclxuICAgIGJ1eSA6IDEsXHJcbiAgICBidXllciA6IDEsXHJcbiAgICBieSA6IDEsXHJcbiAgICBjYWJpbiA6IDEsXHJcbiAgICBjYWJpbmV0IDogMSxcclxuICAgIGNhYmxlIDogMSxcclxuICAgIGNha2UgOiAxLFxyXG4gICAgY2FsY3VsYXRlIDogMSxcclxuICAgIGNhbGwgOiAxLFxyXG4gICAgY2FtZXJhIDogMSxcclxuICAgIGNhbXAgOiAxLFxyXG4gICAgY2FtcGFpZ24gOiAxLFxyXG4gICAgY2FtcHVzIDogMSxcclxuICAgIGNhbiA6IDEsXHJcbiAgICBDYW5hZGlhbiA6IDEsXHJcbiAgICBjYW5jZXIgOiAxLFxyXG4gICAgY2FuZGlkYXRlIDogMSxcclxuICAgIGNhcCA6IDEsXHJcbiAgICBjYXBhYmlsaXR5IDogMSxcclxuICAgIGNhcGFibGUgOiAxLFxyXG4gICAgY2FwYWNpdHkgOiAxLFxyXG4gICAgY2FwaXRhbCA6IDEsXHJcbiAgICBjYXB0YWluIDogMSxcclxuICAgIGNhcHR1cmUgOiAxLFxyXG4gICAgY2FyIDogMSxcclxuICAgIGNhcmJvbiA6IDEsXHJcbiAgICBjYXJkIDogMSxcclxuICAgIGNhcmUgOiAxLFxyXG4gICAgY2FyZWVyIDogMSxcclxuICAgIGNhcmVmdWwgOiAxLFxyXG4gICAgY2FyZWZ1bGx5IDogMSxcclxuICAgIGNhcnJpZXIgOiAxLFxyXG4gICAgY2FycnkgOiAxLFxyXG4gICAgY2FzZSA6IDEsXHJcbiAgICBjYXNoIDogMSxcclxuICAgIGNhc3QgOiAxLFxyXG4gICAgY2F0IDogMSxcclxuICAgIGNhdGNoIDogMSxcclxuICAgIGNhdGVnb3J5IDogMSxcclxuICAgIENhdGhvbGljIDogMSxcclxuICAgIGNhdXNlIDogMSxcclxuICAgIGNlaWxpbmcgOiAxLFxyXG4gICAgY2VsZWJyYXRlIDogMSxcclxuICAgIGNlbGVicmF0aW9uIDogMSxcclxuICAgIGNlbGVicml0eSA6IDEsXHJcbiAgICBjZWxsIDogMSxcclxuICAgIGNlbnRlciA6IDEsXHJcbiAgICBjZW50cmFsIDogMSxcclxuICAgIGNlbnR1cnkgOiAxLFxyXG4gICAgQ0VPIDogMSxcclxuICAgIGNlcmVtb255IDogMSxcclxuICAgIGNlcnRhaW4gOiAxLFxyXG4gICAgY2VydGFpbmx5IDogMSxcclxuICAgIGNoYWluIDogMSxcclxuICAgIGNoYWlyIDogMSxcclxuICAgIGNoYWlybWFuIDogMSxcclxuICAgIGNoYWxsZW5nZSA6IDEsXHJcbiAgICBjaGFtYmVyIDogMSxcclxuICAgIGNoYW1waW9uIDogMSxcclxuICAgIGNoYW1waW9uc2hpcCA6IDEsXHJcbiAgICBjaGFuY2UgOiAxLFxyXG4gICAgY2hhbmdlIDogMSxcclxuICAgIGNoYW5naW5nIDogMSxcclxuICAgIGNoYW5uZWwgOiAxLFxyXG4gICAgY2hhcHRlciA6IDEsXHJcbiAgICBjaGFyYWN0ZXIgOiAxLFxyXG4gICAgY2hhcmFjdGVyaXN0aWMgOiAxLFxyXG4gICAgY2hhcmFjdGVyaXplIDogMSxcclxuICAgIGNoYXJnZSA6IDEsXHJcbiAgICBjaGFyaXR5IDogMSxcclxuICAgIGNoYXJ0IDogMSxcclxuICAgIGNoYXNlIDogMSxcclxuICAgIGNoZWFwIDogMSxcclxuICAgIGNoZWNrIDogMSxcclxuICAgIGNoZWVrIDogMSxcclxuICAgIGNoZWVzZSA6IDEsXHJcbiAgICBjaGVmIDogMSxcclxuICAgIGNoZW1pY2FsIDogMSxcclxuICAgIGNoZXN0IDogMSxcclxuICAgIGNoaWNrZW4gOiAxLFxyXG4gICAgY2hpZWYgOiAxLFxyXG4gICAgY2hpbGQgOiAxLFxyXG4gICAgY2hpbGRob29kIDogMSxcclxuICAgIENoaW5lc2UgOiAxLFxyXG4gICAgY2hpcCA6IDEsXHJcbiAgICBjaG9jb2xhdGUgOiAxLFxyXG4gICAgY2hvaWNlIDogMSxcclxuICAgIGNob2xlc3Rlcm9sIDogMSxcclxuICAgIGNob29zZSA6IDEsXHJcbiAgICBDaHJpc3RpYW4gOiAxLFxyXG4gICAgQ2hyaXN0bWFzIDogMSxcclxuICAgIGNodXJjaCA6IDEsXHJcbiAgICBjaWdhcmV0dGUgOiAxLFxyXG4gICAgY2lyY2xlIDogMSxcclxuICAgIGNpcmN1bXN0YW5jZSA6IDEsXHJcbiAgICBjaXRlIDogMSxcclxuICAgIGNpdGl6ZW4gOiAxLFxyXG4gICAgY2l0eSA6IDEsXHJcbiAgICBjaXZpbCA6IDEsXHJcbiAgICBjaXZpbGlhbiA6IDEsXHJcbiAgICBjbGFpbSA6IDEsXHJcbiAgICBjbGFzcyA6IDEsXHJcbiAgICBjbGFzc2ljIDogMSxcclxuICAgIGNsYXNzcm9vbSA6IDEsXHJcbiAgICBjbGVhbiA6IDEsXHJcbiAgICBjbGVhciA6IDEsXHJcbiAgICBjbGVhcmx5IDogMSxcclxuICAgIGNsaWVudCA6IDEsXHJcbiAgICBjbGltYXRlIDogMSxcclxuICAgIGNsaW1iIDogMSxcclxuICAgIGNsaW5pYyA6IDEsXHJcbiAgICBjbGluaWNhbCA6IDEsXHJcbiAgICBjbG9jayA6IDEsXHJcbiAgICBjbG9zZSA6IDEsXHJcbiAgICBjbG9zZWx5IDogMSxcclxuICAgIGNsb3NlciA6IDEsXHJcbiAgICBjbG90aGVzIDogMSxcclxuICAgIGNsb3RoaW5nIDogMSxcclxuICAgIGNsb3VkIDogMSxcclxuICAgIGNsdWIgOiAxLFxyXG4gICAgY2x1ZSA6IDEsXHJcbiAgICBjbHVzdGVyIDogMSxcclxuICAgIGNvYWNoIDogMSxcclxuICAgIGNvYWwgOiAxLFxyXG4gICAgY29hbGl0aW9uIDogMSxcclxuICAgIGNvYXN0IDogMSxcclxuICAgIGNvYXQgOiAxLFxyXG4gICAgY29kZSA6IDEsXHJcbiAgICBjb2ZmZWUgOiAxLFxyXG4gICAgY29nbml0aXZlIDogMSxcclxuICAgIGNvbGQgOiAxLFxyXG4gICAgY29sbGFwc2UgOiAxLFxyXG4gICAgY29sbGVhZ3VlIDogMSxcclxuICAgIGNvbGxlY3QgOiAxLFxyXG4gICAgY29sbGVjdGlvbiA6IDEsXHJcbiAgICBjb2xsZWN0aXZlIDogMSxcclxuICAgIGNvbGxlZ2UgOiAxLFxyXG4gICAgY29sb25pYWwgOiAxLFxyXG4gICAgY29sb3IgOiAxLFxyXG4gICAgY29sdW1uIDogMSxcclxuICAgIGNvbWJpbmF0aW9uIDogMSxcclxuICAgIGNvbWJpbmUgOiAxLFxyXG4gICAgY29tZSA6IDEsXHJcbiAgICBjb21lZHkgOiAxLFxyXG4gICAgY29tZm9ydCA6IDEsXHJcbiAgICBjb21mb3J0YWJsZSA6IDEsXHJcbiAgICBjb21tYW5kIDogMSxcclxuICAgIGNvbW1hbmRlciA6IDEsXHJcbiAgICBjb21tZW50IDogMSxcclxuICAgIGNvbW1lcmNpYWwgOiAxLFxyXG4gICAgY29tbWlzc2lvbiA6IDEsXHJcbiAgICBjb21taXQgOiAxLFxyXG4gICAgY29tbWl0bWVudCA6IDEsXHJcbiAgICBjb21taXR0ZWUgOiAxLFxyXG4gICAgY29tbW9uIDogMSxcclxuICAgIGNvbW11bmljYXRlIDogMSxcclxuICAgIGNvbW11bmljYXRpb24gOiAxLFxyXG4gICAgY29tbXVuaXR5IDogMSxcclxuICAgIGNvbXBhbnkgOiAxLFxyXG4gICAgY29tcGFyZSA6IDEsXHJcbiAgICBjb21wYXJpc29uIDogMSxcclxuICAgIGNvbXBldGUgOiAxLFxyXG4gICAgY29tcGV0aXRpb24gOiAxLFxyXG4gICAgY29tcGV0aXRpdmUgOiAxLFxyXG4gICAgY29tcGV0aXRvciA6IDEsXHJcbiAgICBjb21wbGFpbiA6IDEsXHJcbiAgICBjb21wbGFpbnQgOiAxLFxyXG4gICAgY29tcGxldGUgOiAxLFxyXG4gICAgY29tcGxldGVseSA6IDEsXHJcbiAgICBjb21wbGV4IDogMSxcclxuICAgIGNvbXBsaWNhdGVkIDogMSxcclxuICAgIGNvbXBvbmVudCA6IDEsXHJcbiAgICBjb21wb3NlIDogMSxcclxuICAgIGNvbXBvc2l0aW9uIDogMSxcclxuICAgIGNvbXByZWhlbnNpdmUgOiAxLFxyXG4gICAgY29tcHV0ZXIgOiAxLFxyXG4gICAgY29uY2VudHJhdGUgOiAxLFxyXG4gICAgY29uY2VudHJhdGlvbiA6IDEsXHJcbiAgICBjb25jZXB0IDogMSxcclxuICAgIGNvbmNlcm4gOiAxLFxyXG4gICAgY29uY2VybmVkIDogMSxcclxuICAgIGNvbmNlcnQgOiAxLFxyXG4gICAgY29uY2x1ZGUgOiAxLFxyXG4gICAgY29uY2x1c2lvbiA6IDEsXHJcbiAgICBjb25jcmV0ZSA6IDEsXHJcbiAgICBjb25kaXRpb24gOiAxLFxyXG4gICAgY29uZHVjdCA6IDEsXHJcbiAgICBjb25mZXJlbmNlIDogMSxcclxuICAgIGNvbmZpZGVuY2UgOiAxLFxyXG4gICAgY29uZmlkZW50IDogMSxcclxuICAgIGNvbmZpcm0gOiAxLFxyXG4gICAgY29uZmxpY3QgOiAxLFxyXG4gICAgY29uZnJvbnQgOiAxLFxyXG4gICAgY29uZnVzaW9uIDogMSxcclxuICAgIENvbmdyZXNzIDogMSxcclxuICAgIGNvbmdyZXNzaW9uYWwgOiAxLFxyXG4gICAgY29ubmVjdCA6IDEsXHJcbiAgICBjb25uZWN0aW9uIDogMSxcclxuICAgIGNvbnNjaW91c25lc3MgOiAxLFxyXG4gICAgY29uc2Vuc3VzIDogMSxcclxuICAgIGNvbnNlcXVlbmNlIDogMSxcclxuICAgIGNvbnNlcnZhdGl2ZSA6IDEsXHJcbiAgICBjb25zaWRlciA6IDEsXHJcbiAgICBjb25zaWRlcmFibGUgOiAxLFxyXG4gICAgY29uc2lkZXJhdGlvbiA6IDEsXHJcbiAgICBjb25zaXN0IDogMSxcclxuICAgIGNvbnNpc3RlbnQgOiAxLFxyXG4gICAgY29uc3RhbnQgOiAxLFxyXG4gICAgY29uc3RhbnRseSA6IDEsXHJcbiAgICBjb25zdGl0dXRlIDogMSxcclxuICAgIGNvbnN0aXR1dGlvbmFsIDogMSxcclxuICAgIGNvbnN0cnVjdCA6IDEsXHJcbiAgICBjb25zdHJ1Y3Rpb24gOiAxLFxyXG4gICAgY29uc3VsdGFudCA6IDEsXHJcbiAgICBjb25zdW1lIDogMSxcclxuICAgIGNvbnN1bWVyIDogMSxcclxuICAgIGNvbnN1bXB0aW9uIDogMSxcclxuICAgIGNvbnRhY3QgOiAxLFxyXG4gICAgY29udGFpbiA6IDEsXHJcbiAgICBjb250YWluZXIgOiAxLFxyXG4gICAgY29udGVtcG9yYXJ5IDogMSxcclxuICAgIGNvbnRlbnQgOiAxLFxyXG4gICAgY29udGVzdCA6IDEsXHJcbiAgICBjb250ZXh0IDogMSxcclxuICAgIGNvbnRpbnVlIDogMSxcclxuICAgIGNvbnRpbnVlZCA6IDEsXHJcbiAgICBjb250cmFjdCA6IDEsXHJcbiAgICBjb250cmFzdCA6IDEsXHJcbiAgICBjb250cmlidXRlIDogMSxcclxuICAgIGNvbnRyaWJ1dGlvbiA6IDEsXHJcbiAgICBjb250cm9sIDogMSxcclxuICAgIGNvbnRyb3ZlcnNpYWwgOiAxLFxyXG4gICAgY29udHJvdmVyc3kgOiAxLFxyXG4gICAgY29udmVudGlvbiA6IDEsXHJcbiAgICBjb252ZW50aW9uYWwgOiAxLFxyXG4gICAgY29udmVyc2F0aW9uIDogMSxcclxuICAgIGNvbnZlcnQgOiAxLFxyXG4gICAgY29udmljdGlvbiA6IDEsXHJcbiAgICBjb252aW5jZSA6IDEsXHJcbiAgICBjb29rIDogMSxcclxuICAgIGNvb2tpZSA6IDEsXHJcbiAgICBjb29raW5nIDogMSxcclxuICAgIGNvb2wgOiAxLFxyXG4gICAgY29vcGVyYXRpb24gOiAxLFxyXG4gICAgY29wIDogMSxcclxuICAgIGNvcGUgOiAxLFxyXG4gICAgY29weSA6IDEsXHJcbiAgICBjb3JlIDogMSxcclxuICAgIGNvcm4gOiAxLFxyXG4gICAgY29ybmVyIDogMSxcclxuICAgIGNvcnBvcmF0ZSA6IDEsXHJcbiAgICBjb3Jwb3JhdGlvbiA6IDEsXHJcbiAgICBjb3JyZWN0IDogMSxcclxuICAgIGNvcnJlc3BvbmRlbnQgOiAxLFxyXG4gICAgY29zdCA6IDEsXHJcbiAgICBjb3R0b24gOiAxLFxyXG4gICAgY291Y2ggOiAxLFxyXG4gICAgY291bGQgOiAxLFxyXG4gICAgY291bmNpbCA6IDEsXHJcbiAgICBjb3Vuc2Vsb3IgOiAxLFxyXG4gICAgY291bnQgOiAxLFxyXG4gICAgY291bnRlciA6IDEsXHJcbiAgICBjb3VudHJ5IDogMSxcclxuICAgIGNvdW50eSA6IDEsXHJcbiAgICBjb3VwbGUgOiAxLFxyXG4gICAgY291cmFnZSA6IDEsXHJcbiAgICBjb3Vyc2UgOiAxLFxyXG4gICAgY291cnQgOiAxLFxyXG4gICAgY291c2luIDogMSxcclxuICAgIGNvdmVyIDogMSxcclxuICAgIGNvdmVyYWdlIDogMSxcclxuICAgIGNvdyA6IDEsXHJcbiAgICBjcmFjayA6IDEsXHJcbiAgICBjcmFmdCA6IDEsXHJcbiAgICBjcmFzaCA6IDEsXHJcbiAgICBjcmF6eSA6IDEsXHJcbiAgICBjcmVhbSA6IDEsXHJcbiAgICBjcmVhdGUgOiAxLFxyXG4gICAgY3JlYXRpb24gOiAxLFxyXG4gICAgY3JlYXRpdmUgOiAxLFxyXG4gICAgY3JlYXR1cmUgOiAxLFxyXG4gICAgY3JlZGl0IDogMSxcclxuICAgIGNyZXcgOiAxLFxyXG4gICAgY3JpbWUgOiAxLFxyXG4gICAgY3JpbWluYWwgOiAxLFxyXG4gICAgY3Jpc2lzIDogMSxcclxuICAgIGNyaXRlcmlhIDogMSxcclxuICAgIGNyaXRpYyA6IDEsXHJcbiAgICBjcml0aWNhbCA6IDEsXHJcbiAgICBjcml0aWNpc20gOiAxLFxyXG4gICAgY3JpdGljaXplIDogMSxcclxuICAgIGNyb3AgOiAxLFxyXG4gICAgY3Jvc3MgOiAxLFxyXG4gICAgY3Jvd2QgOiAxLFxyXG4gICAgY3J1Y2lhbCA6IDEsXHJcbiAgICBjcnkgOiAxLFxyXG4gICAgY3VsdHVyYWwgOiAxLFxyXG4gICAgY3VsdHVyZSA6IDEsXHJcbiAgICBjdXAgOiAxLFxyXG4gICAgY3VyaW91cyA6IDEsXHJcbiAgICBjdXJyZW50IDogMSxcclxuICAgIGN1cnJlbnRseSA6IDEsXHJcbiAgICBjdXJyaWN1bHVtIDogMSxcclxuICAgIGN1c3RvbSA6IDEsXHJcbiAgICBjdXN0b21lciA6IDEsXHJcbiAgICBjdXQgOiAxLFxyXG4gICAgY3ljbGUgOiAxLFxyXG4gICAgZGFkIDogMSxcclxuICAgIGRhaWx5IDogMSxcclxuICAgIGRhbWFnZSA6IDEsXHJcbiAgICBkYW5jZSA6IDEsXHJcbiAgICBkYW5nZXIgOiAxLFxyXG4gICAgZGFuZ2Vyb3VzIDogMSxcclxuICAgIGRhcmUgOiAxLFxyXG4gICAgZGFyayA6IDEsXHJcbiAgICBkYXJrbmVzcyA6IDEsXHJcbiAgICBkYXRhIDogMSxcclxuICAgIGRhdGUgOiAxLFxyXG4gICAgZGF1Z2h0ZXIgOiAxLFxyXG4gICAgZGF5IDogMSxcclxuICAgIGRlYWQgOiAxLFxyXG4gICAgZGVhbCA6IDEsXHJcbiAgICBkZWFsZXIgOiAxLFxyXG4gICAgZGVhciA6IDEsXHJcbiAgICBkZWF0aCA6IDEsXHJcbiAgICBkZWJhdGUgOiAxLFxyXG4gICAgZGVidCA6IDEsXHJcbiAgICBkZWNhZGUgOiAxLFxyXG4gICAgZGVjaWRlIDogMSxcclxuICAgIGRlY2lzaW9uIDogMSxcclxuICAgIGRlY2sgOiAxLFxyXG4gICAgZGVjbGFyZSA6IDEsXHJcbiAgICBkZWNsaW5lIDogMSxcclxuICAgIGRlY3JlYXNlIDogMSxcclxuICAgIGRlZXAgOiAxLFxyXG4gICAgZGVlcGx5IDogMSxcclxuICAgIGRlZXIgOiAxLFxyXG4gICAgZGVmZWF0IDogMSxcclxuICAgIGRlZmVuZCA6IDEsXHJcbiAgICBkZWZlbmRhbnQgOiAxLFxyXG4gICAgZGVmZW5zZSA6IDEsXHJcbiAgICBkZWZlbnNpdmUgOiAxLFxyXG4gICAgZGVmaWNpdCA6IDEsXHJcbiAgICBkZWZpbmUgOiAxLFxyXG4gICAgZGVmaW5pdGVseSA6IDEsXHJcbiAgICBkZWZpbml0aW9uIDogMSxcclxuICAgIGRlZ3JlZSA6IDEsXHJcbiAgICBkZWxheSA6IDEsXHJcbiAgICBkZWxpdmVyIDogMSxcclxuICAgIGRlbGl2ZXJ5IDogMSxcclxuICAgIGRlbWFuZCA6IDEsXHJcbiAgICBkZW1vY3JhY3kgOiAxLFxyXG4gICAgRGVtb2NyYXQgOiAxLFxyXG4gICAgZGVtb2NyYXRpYyA6IDEsXHJcbiAgICBkZW1vbnN0cmF0ZSA6IDEsXHJcbiAgICBkZW1vbnN0cmF0aW9uIDogMSxcclxuICAgIGRlbnkgOiAxLFxyXG4gICAgZGVwYXJ0bWVudCA6IDEsXHJcbiAgICBkZXBlbmQgOiAxLFxyXG4gICAgZGVwZW5kZW50IDogMSxcclxuICAgIGRlcGVuZGluZyA6IDEsXHJcbiAgICBkZXBpY3QgOiAxLFxyXG4gICAgZGVwcmVzc2lvbiA6IDEsXHJcbiAgICBkZXB0aCA6IDEsXHJcbiAgICBkZXB1dHkgOiAxLFxyXG4gICAgZGVyaXZlIDogMSxcclxuICAgIGRlc2NyaWJlIDogMSxcclxuICAgIGRlc2NyaXB0aW9uIDogMSxcclxuICAgIGRlc2VydCA6IDEsXHJcbiAgICBkZXNlcnZlIDogMSxcclxuICAgIGRlc2lnbiA6IDEsXHJcbiAgICBkZXNpZ25lciA6IDEsXHJcbiAgICBkZXNpcmUgOiAxLFxyXG4gICAgZGVzayA6IDEsXHJcbiAgICBkZXNwZXJhdGUgOiAxLFxyXG4gICAgZGVzcGl0ZSA6IDEsXHJcbiAgICBkZXN0cm95IDogMSxcclxuICAgIGRlc3RydWN0aW9uIDogMSxcclxuICAgIGRldGFpbCA6IDEsXHJcbiAgICBkZXRhaWxlZCA6IDEsXHJcbiAgICBkZXRlY3QgOiAxLFxyXG4gICAgZGV0ZXJtaW5lIDogMSxcclxuICAgIGRldmVsb3AgOiAxLFxyXG4gICAgZGV2ZWxvcGluZyA6IDEsXHJcbiAgICBkZXZlbG9wbWVudCA6IDEsXHJcbiAgICBkZXZpY2UgOiAxLFxyXG4gICAgZGV2b3RlIDogMSxcclxuICAgIGRpYWxvZ3VlIDogMSxcclxuICAgIGRpZSA6IDEsXHJcbiAgICBkaWV0IDogMSxcclxuICAgIGRpZmZlciA6IDEsXHJcbiAgICBkaWZmZXJlbmNlIDogMSxcclxuICAgIGRpZmZlcmVudCA6IDEsXHJcbiAgICBkaWZmZXJlbnRseSA6IDEsXHJcbiAgICBkaWZmaWN1bHQgOiAxLFxyXG4gICAgZGlmZmljdWx0eSA6IDEsXHJcbiAgICBkaWcgOiAxLFxyXG4gICAgZGlnaXRhbCA6IDEsXHJcbiAgICBkaW1lbnNpb24gOiAxLFxyXG4gICAgZGluaW5nIDogMSxcclxuICAgIGRpbm5lciA6IDEsXHJcbiAgICBkaXJlY3QgOiAxLFxyXG4gICAgZGlyZWN0aW9uIDogMSxcclxuICAgIGRpcmVjdGx5IDogMSxcclxuICAgIGRpcmVjdG9yIDogMSxcclxuICAgIGRpcnQgOiAxLFxyXG4gICAgZGlydHkgOiAxLFxyXG4gICAgZGlzYWJpbGl0eSA6IDEsXHJcbiAgICBkaXNhZ3JlZSA6IDEsXHJcbiAgICBkaXNhcHBlYXIgOiAxLFxyXG4gICAgZGlzYXN0ZXIgOiAxLFxyXG4gICAgZGlzY2lwbGluZSA6IDEsXHJcbiAgICBkaXNjb3Vyc2UgOiAxLFxyXG4gICAgZGlzY292ZXIgOiAxLFxyXG4gICAgZGlzY292ZXJ5IDogMSxcclxuICAgIGRpc2NyaW1pbmF0aW9uIDogMSxcclxuICAgIGRpc2N1c3MgOiAxLFxyXG4gICAgZGlzY3Vzc2lvbiA6IDEsXHJcbiAgICBkaXNlYXNlIDogMSxcclxuICAgIGRpc2ggOiAxLFxyXG4gICAgZGlzbWlzcyA6IDEsXHJcbiAgICBkaXNvcmRlciA6IDEsXHJcbiAgICBkaXNwbGF5IDogMSxcclxuICAgIGRpc3B1dGUgOiAxLFxyXG4gICAgZGlzdGFuY2UgOiAxLFxyXG4gICAgZGlzdGFudCA6IDEsXHJcbiAgICBkaXN0aW5jdCA6IDEsXHJcbiAgICBkaXN0aW5jdGlvbiA6IDEsXHJcbiAgICBkaXN0aW5ndWlzaCA6IDEsXHJcbiAgICBkaXN0cmlidXRlIDogMSxcclxuICAgIGRpc3RyaWJ1dGlvbiA6IDEsXHJcbiAgICBkaXN0cmljdCA6IDEsXHJcbiAgICBkaXZlcnNlIDogMSxcclxuICAgIGRpdmVyc2l0eSA6IDEsXHJcbiAgICBkaXZpZGUgOiAxLFxyXG4gICAgZGl2aXNpb24gOiAxLFxyXG4gICAgZGl2b3JjZSA6IDEsXHJcbiAgICBETkEgOiAxLFxyXG4gICAgZG8gOiAxLFxyXG4gICAgZG9jdG9yIDogMSxcclxuICAgIGRvY3VtZW50IDogMSxcclxuICAgIGRvZyA6IDEsXHJcbiAgICBkb21lc3RpYyA6IDEsXHJcbiAgICBkb21pbmFudCA6IDEsXHJcbiAgICBkb21pbmF0ZSA6IDEsXHJcbiAgICBkb29yIDogMSxcclxuICAgIGRvdWJsZSA6IDEsXHJcbiAgICBkb3VidCA6IDEsXHJcbiAgICBkb3duIDogMSxcclxuICAgIGRvd250b3duIDogMSxcclxuICAgIGRvemVuIDogMSxcclxuICAgIGRyYWZ0IDogMSxcclxuICAgIGRyYWcgOiAxLFxyXG4gICAgZHJhbWEgOiAxLFxyXG4gICAgZHJhbWF0aWMgOiAxLFxyXG4gICAgZHJhbWF0aWNhbGx5IDogMSxcclxuICAgIGRyYXcgOiAxLFxyXG4gICAgZHJhd2luZyA6IDEsXHJcbiAgICBkcmVhbSA6IDEsXHJcbiAgICBkcmVzcyA6IDEsXHJcbiAgICBkcmluayA6IDEsXHJcbiAgICBkcml2ZSA6IDEsXHJcbiAgICBkcml2ZXIgOiAxLFxyXG4gICAgZHJvcCA6IDEsXHJcbiAgICBkcnVnIDogMSxcclxuICAgIGRyeSA6IDEsXHJcbiAgICBkdWUgOiAxLFxyXG4gICAgZHVyaW5nIDogMSxcclxuICAgIGR1c3QgOiAxLFxyXG4gICAgZHV0eSA6IDEsXHJcbiAgICBlYWNoIDogMSxcclxuICAgIGVhZ2VyIDogMSxcclxuICAgIGVhciA6IDEsXHJcbiAgICBlYXJseSA6IDEsXHJcbiAgICBlYXJuIDogMSxcclxuICAgIGVhcm5pbmdzIDogMSxcclxuICAgIGVhcnRoIDogMSxcclxuICAgIGVhc2UgOiAxLFxyXG4gICAgZWFzaWx5IDogMSxcclxuICAgIGVhc3QgOiAxLFxyXG4gICAgZWFzdGVybiA6IDEsXHJcbiAgICBlYXN5IDogMSxcclxuICAgIGVhdCA6IDEsXHJcbiAgICBlY29ub21pYyA6IDEsXHJcbiAgICBlY29ub21pY3MgOiAxLFxyXG4gICAgZWNvbm9taXN0IDogMSxcclxuICAgIGVjb25vbXkgOiAxLFxyXG4gICAgZWRnZSA6IDEsXHJcbiAgICBlZGl0aW9uIDogMSxcclxuICAgIGVkaXRvciA6IDEsXHJcbiAgICBlZHVjYXRlIDogMSxcclxuICAgIGVkdWNhdGlvbiA6IDEsXHJcbiAgICBlZHVjYXRpb25hbCA6IDEsXHJcbiAgICBlZHVjYXRvciA6IDEsXHJcbiAgICBlZmZlY3QgOiAxLFxyXG4gICAgZWZmZWN0aXZlIDogMSxcclxuICAgIGVmZmVjdGl2ZWx5IDogMSxcclxuICAgIGVmZmljaWVuY3kgOiAxLFxyXG4gICAgZWZmaWNpZW50IDogMSxcclxuICAgIGVmZm9ydCA6IDEsXHJcbiAgICBlZ2cgOiAxLFxyXG4gICAgZWlnaHQgOiAxLFxyXG4gICAgZWl0aGVyIDogMSxcclxuICAgIGVsZGVybHkgOiAxLFxyXG4gICAgZWxlY3QgOiAxLFxyXG4gICAgZWxlY3Rpb24gOiAxLFxyXG4gICAgZWxlY3RyaWMgOiAxLFxyXG4gICAgZWxlY3RyaWNpdHkgOiAxLFxyXG4gICAgZWxlY3Ryb25pYyA6IDEsXHJcbiAgICBlbGVtZW50IDogMSxcclxuICAgIGVsZW1lbnRhcnkgOiAxLFxyXG4gICAgZWxpbWluYXRlIDogMSxcclxuICAgIGVsaXRlIDogMSxcclxuICAgIGVsc2UgOiAxLFxyXG4gICAgZWxzZXdoZXJlIDogMSxcclxuICAgIFwiZS1tYWlsXCIgOiAxLFxyXG4gICAgZW1icmFjZSA6IDEsXHJcbiAgICBlbWVyZ2UgOiAxLFxyXG4gICAgZW1lcmdlbmN5IDogMSxcclxuICAgIGVtaXNzaW9uIDogMSxcclxuICAgIGVtb3Rpb24gOiAxLFxyXG4gICAgZW1vdGlvbmFsIDogMSxcclxuICAgIGVtcGhhc2lzIDogMSxcclxuICAgIGVtcGhhc2l6ZSA6IDEsXHJcbiAgICBlbXBsb3kgOiAxLFxyXG4gICAgZW1wbG95ZWUgOiAxLFxyXG4gICAgZW1wbG95ZXIgOiAxLFxyXG4gICAgZW1wbG95bWVudCA6IDEsXHJcbiAgICBlbXB0eSA6IDEsXHJcbiAgICBlbmFibGUgOiAxLFxyXG4gICAgZW5jb3VudGVyIDogMSxcclxuICAgIGVuY291cmFnZSA6IDEsXHJcbiAgICBlbmQgOiAxLFxyXG4gICAgZW5lbXkgOiAxLFxyXG4gICAgZW5lcmd5IDogMSxcclxuICAgIGVuZm9yY2VtZW50IDogMSxcclxuICAgIGVuZ2FnZSA6IDEsXHJcbiAgICBlbmdpbmUgOiAxLFxyXG4gICAgZW5naW5lZXIgOiAxLFxyXG4gICAgZW5naW5lZXJpbmcgOiAxLFxyXG4gICAgRW5nbGlzaCA6IDEsXHJcbiAgICBlbmhhbmNlIDogMSxcclxuICAgIGVuam95IDogMSxcclxuICAgIGVub3Jtb3VzIDogMSxcclxuICAgIGVub3VnaCA6IDEsXHJcbiAgICBlbnN1cmUgOiAxLFxyXG4gICAgZW50ZXIgOiAxLFxyXG4gICAgZW50ZXJwcmlzZSA6IDEsXHJcbiAgICBlbnRlcnRhaW5tZW50IDogMSxcclxuICAgIGVudGlyZSA6IDEsXHJcbiAgICBlbnRpcmVseSA6IDEsXHJcbiAgICBlbnRyYW5jZSA6IDEsXHJcbiAgICBlbnRyeSA6IDEsXHJcbiAgICBlbnZpcm9ubWVudCA6IDEsXHJcbiAgICBlbnZpcm9ubWVudGFsIDogMSxcclxuICAgIGVwaXNvZGUgOiAxLFxyXG4gICAgZXF1YWwgOiAxLFxyXG4gICAgZXF1YWxseSA6IDEsXHJcbiAgICBlcXVpcG1lbnQgOiAxLFxyXG4gICAgZXJhIDogMSxcclxuICAgIGVycm9yIDogMSxcclxuICAgIGVzY2FwZSA6IDEsXHJcbiAgICBlc3BlY2lhbGx5IDogMSxcclxuICAgIGVzc2F5IDogMSxcclxuICAgIGVzc2VudGlhbCA6IDEsXHJcbiAgICBlc3NlbnRpYWxseSA6IDEsXHJcbiAgICBlc3RhYmxpc2ggOiAxLFxyXG4gICAgZXN0YWJsaXNobWVudCA6IDEsXHJcbiAgICBlc3RhdGUgOiAxLFxyXG4gICAgZXN0aW1hdGUgOiAxLFxyXG4gICAgZXRjIDogMSxcclxuICAgIGV0aGljcyA6IDEsXHJcbiAgICBldGhuaWMgOiAxLFxyXG4gICAgRXVyb3BlYW4gOiAxLFxyXG4gICAgZXZhbHVhdGUgOiAxLFxyXG4gICAgZXZhbHVhdGlvbiA6IDEsXHJcbiAgICBldmVuIDogMSxcclxuICAgIGV2ZW5pbmcgOiAxLFxyXG4gICAgZXZlbnQgOiAxLFxyXG4gICAgZXZlbnR1YWxseSA6IDEsXHJcbiAgICBldmVyIDogMSxcclxuICAgIGV2ZXJ5IDogMSxcclxuICAgIGV2ZXJ5Ym9keSA6IDEsXHJcbiAgICBldmVyeWRheSA6IDEsXHJcbiAgICBldmVyeW9uZSA6IDEsXHJcbiAgICBldmVyeXRoaW5nIDogMSxcclxuICAgIGV2ZXJ5d2hlcmUgOiAxLFxyXG4gICAgZXZpZGVuY2UgOiAxLFxyXG4gICAgZXZvbHV0aW9uIDogMSxcclxuICAgIGV2b2x2ZSA6IDEsXHJcbiAgICBleGFjdCA6IDEsXHJcbiAgICBleGFjdGx5IDogMSxcclxuICAgIGV4YW1pbmF0aW9uIDogMSxcclxuICAgIGV4YW1pbmUgOiAxLFxyXG4gICAgZXhhbXBsZSA6IDEsXHJcbiAgICBleGNlZWQgOiAxLFxyXG4gICAgZXhjZWxsZW50IDogMSxcclxuICAgIGV4Y2VwdCA6IDEsXHJcbiAgICBleGNlcHRpb24gOiAxLFxyXG4gICAgZXhjaGFuZ2UgOiAxLFxyXG4gICAgZXhjaXRpbmcgOiAxLFxyXG4gICAgZXhlY3V0aXZlIDogMSxcclxuICAgIGV4ZXJjaXNlIDogMSxcclxuICAgIGV4aGliaXQgOiAxLFxyXG4gICAgZXhoaWJpdGlvbiA6IDEsXHJcbiAgICBleGlzdCA6IDEsXHJcbiAgICBleGlzdGVuY2UgOiAxLFxyXG4gICAgZXhpc3RpbmcgOiAxLFxyXG4gICAgZXhwYW5kIDogMSxcclxuICAgIGV4cGFuc2lvbiA6IDEsXHJcbiAgICBleHBlY3QgOiAxLFxyXG4gICAgZXhwZWN0YXRpb24gOiAxLFxyXG4gICAgZXhwZW5zZSA6IDEsXHJcbiAgICBleHBlbnNpdmUgOiAxLFxyXG4gICAgZXhwZXJpZW5jZSA6IDEsXHJcbiAgICBleHBlcmltZW50IDogMSxcclxuICAgIGV4cGVydCA6IDEsXHJcbiAgICBleHBsYWluIDogMSxcclxuICAgIGV4cGxhbmF0aW9uIDogMSxcclxuICAgIGV4cGxvZGUgOiAxLFxyXG4gICAgZXhwbG9yZSA6IDEsXHJcbiAgICBleHBsb3Npb24gOiAxLFxyXG4gICAgZXhwb3NlIDogMSxcclxuICAgIGV4cG9zdXJlIDogMSxcclxuICAgIGV4cHJlc3MgOiAxLFxyXG4gICAgZXhwcmVzc2lvbiA6IDEsXHJcbiAgICBleHRlbmQgOiAxLFxyXG4gICAgZXh0ZW5zaW9uIDogMSxcclxuICAgIGV4dGVuc2l2ZSA6IDEsXHJcbiAgICBleHRlbnQgOiAxLFxyXG4gICAgZXh0ZXJuYWwgOiAxLFxyXG4gICAgZXh0cmEgOiAxLFxyXG4gICAgZXh0cmFvcmRpbmFyeSA6IDEsXHJcbiAgICBleHRyZW1lIDogMSxcclxuICAgIGV4dHJlbWVseSA6IDEsXHJcbiAgICBleWUgOiAxLFxyXG4gICAgZmFicmljIDogMSxcclxuICAgIGZhY2UgOiAxLFxyXG4gICAgZmFjaWxpdHkgOiAxLFxyXG4gICAgZmFjdCA6IDEsXHJcbiAgICBmYWN0b3IgOiAxLFxyXG4gICAgZmFjdG9yeSA6IDEsXHJcbiAgICBmYWN1bHR5IDogMSxcclxuICAgIGZhZGUgOiAxLFxyXG4gICAgZmFpbCA6IDEsXHJcbiAgICBmYWlsdXJlIDogMSxcclxuICAgIGZhaXIgOiAxLFxyXG4gICAgZmFpcmx5IDogMSxcclxuICAgIGZhaXRoIDogMSxcclxuICAgIGZhbGwgOiAxLFxyXG4gICAgZmFsc2UgOiAxLFxyXG4gICAgZmFtaWxpYXIgOiAxLFxyXG4gICAgZmFtaWx5IDogMSxcclxuICAgIGZhbW91cyA6IDEsXHJcbiAgICBmYW4gOiAxLFxyXG4gICAgZmFudGFzeSA6IDEsXHJcbiAgICBmYXIgOiAxLFxyXG4gICAgZmFybSA6IDEsXHJcbiAgICBmYXJtZXIgOiAxLFxyXG4gICAgZmFzaGlvbiA6IDEsXHJcbiAgICBmYXN0IDogMSxcclxuICAgIGZhdCA6IDEsXHJcbiAgICBmYXRlIDogMSxcclxuICAgIGZhdGhlciA6IDEsXHJcbiAgICBmYXVsdCA6IDEsXHJcbiAgICBmYXZvciA6IDEsXHJcbiAgICBmYXZvcml0ZSA6IDEsXHJcbiAgICBmZWFyIDogMSxcclxuICAgIGZlYXR1cmUgOiAxLFxyXG4gICAgZmVkZXJhbCA6IDEsXHJcbiAgICBmZWUgOiAxLFxyXG4gICAgZmVlZCA6IDEsXHJcbiAgICBmZWVsIDogMSxcclxuICAgIGZlZWxpbmcgOiAxLFxyXG4gICAgZmVsbG93IDogMSxcclxuICAgIGZlbWFsZSA6IDEsXHJcbiAgICBmZW5jZSA6IDEsXHJcbiAgICBmZXcgOiAxLFxyXG4gICAgZmV3ZXIgOiAxLFxyXG4gICAgZmliZXIgOiAxLFxyXG4gICAgZmljdGlvbiA6IDEsXHJcbiAgICBmaWVsZCA6IDEsXHJcbiAgICBmaWZ0ZWVuIDogMSxcclxuICAgIGZpZnRoIDogMSxcclxuICAgIGZpZnR5IDogMSxcclxuICAgIGZpZ2h0IDogMSxcclxuICAgIGZpZ2h0ZXIgOiAxLFxyXG4gICAgZmlnaHRpbmcgOiAxLFxyXG4gICAgZmlndXJlIDogMSxcclxuICAgIGZpbGUgOiAxLFxyXG4gICAgZmlsbCA6IDEsXHJcbiAgICBmaWxtIDogMSxcclxuICAgIGZpbmFsIDogMSxcclxuICAgIGZpbmFsbHkgOiAxLFxyXG4gICAgZmluYW5jZSA6IDEsXHJcbiAgICBmaW5hbmNpYWwgOiAxLFxyXG4gICAgZmluZCA6IDEsXHJcbiAgICBmaW5kaW5nIDogMSxcclxuICAgIGZpbmUgOiAxLFxyXG4gICAgZmluZ2VyIDogMSxcclxuICAgIGZpbmlzaCA6IDEsXHJcbiAgICBmaXJlIDogMSxcclxuICAgIGZpcm0gOiAxLFxyXG4gICAgZmlyc3QgOiAxLFxyXG4gICAgZmlzaCA6IDEsXHJcbiAgICBmaXNoaW5nIDogMSxcclxuICAgIGZpdCA6IDEsXHJcbiAgICBmaXRuZXNzIDogMSxcclxuICAgIGZpdmUgOiAxLFxyXG4gICAgZml4IDogMSxcclxuICAgIGZsYWcgOiAxLFxyXG4gICAgZmxhbWUgOiAxLFxyXG4gICAgZmxhdCA6IDEsXHJcbiAgICBmbGF2b3IgOiAxLFxyXG4gICAgZmxlZSA6IDEsXHJcbiAgICBmbGVzaCA6IDEsXHJcbiAgICBmbGlnaHQgOiAxLFxyXG4gICAgZmxvYXQgOiAxLFxyXG4gICAgZmxvb3IgOiAxLFxyXG4gICAgZmxvdyA6IDEsXHJcbiAgICBmbG93ZXIgOiAxLFxyXG4gICAgZmx5IDogMSxcclxuICAgIGZvY3VzIDogMSxcclxuICAgIGZvbGsgOiAxLFxyXG4gICAgZm9sbG93IDogMSxcclxuICAgIGZvbGxvd2luZyA6IDEsXHJcbiAgICBmb29kIDogMSxcclxuICAgIGZvb3QgOiAxLFxyXG4gICAgZm9vdGJhbGwgOiAxLFxyXG4gICAgZm9yIDogMSxcclxuICAgIGZvcmNlIDogMSxcclxuICAgIGZvcmVpZ24gOiAxLFxyXG4gICAgZm9yZXN0IDogMSxcclxuICAgIGZvcmV2ZXIgOiAxLFxyXG4gICAgZm9yZ2V0IDogMSxcclxuICAgIGZvcm0gOiAxLFxyXG4gICAgZm9ybWFsIDogMSxcclxuICAgIGZvcm1hdGlvbiA6IDEsXHJcbiAgICBmb3JtZXIgOiAxLFxyXG4gICAgZm9ybXVsYSA6IDEsXHJcbiAgICBmb3J0aCA6IDEsXHJcbiAgICBmb3J0dW5lIDogMSxcclxuICAgIGZvcndhcmQgOiAxLFxyXG4gICAgZm91bmQgOiAxLFxyXG4gICAgZm91bmRhdGlvbiA6IDEsXHJcbiAgICBmb3VuZGVyIDogMSxcclxuICAgIGZvdXIgOiAxLFxyXG4gICAgZm91cnRoIDogMSxcclxuICAgIGZyYW1lIDogMSxcclxuICAgIGZyYW1ld29yayA6IDEsXHJcbiAgICBmcmVlIDogMSxcclxuICAgIGZyZWVkb20gOiAxLFxyXG4gICAgZnJlZXplIDogMSxcclxuICAgIEZyZW5jaCA6IDEsXHJcbiAgICBmcmVxdWVuY3kgOiAxLFxyXG4gICAgZnJlcXVlbnQgOiAxLFxyXG4gICAgZnJlcXVlbnRseSA6IDEsXHJcbiAgICBmcmVzaCA6IDEsXHJcbiAgICBmcmllbmQgOiAxLFxyXG4gICAgZnJpZW5kbHkgOiAxLFxyXG4gICAgZnJpZW5kc2hpcCA6IDEsXHJcbiAgICBmcm9tIDogMSxcclxuICAgIGZyb250IDogMSxcclxuICAgIGZydWl0IDogMSxcclxuICAgIGZydXN0cmF0aW9uIDogMSxcclxuICAgIGZ1ZWwgOiAxLFxyXG4gICAgZnVsbCA6IDEsXHJcbiAgICBmdWxseSA6IDEsXHJcbiAgICBmdW4gOiAxLFxyXG4gICAgZnVuY3Rpb24gOiAxLFxyXG4gICAgZnVuZCA6IDEsXHJcbiAgICBmdW5kYW1lbnRhbCA6IDEsXHJcbiAgICBmdW5kaW5nIDogMSxcclxuICAgIGZ1bmVyYWwgOiAxLFxyXG4gICAgZnVubnkgOiAxLFxyXG4gICAgZnVybml0dXJlIDogMSxcclxuICAgIGZ1cnRoZXJtb3JlIDogMSxcclxuICAgIGZ1dHVyZSA6IDEsXHJcbiAgICBnYWluIDogMSxcclxuICAgIGdhbGF4eSA6IDEsXHJcbiAgICBnYWxsZXJ5IDogMSxcclxuICAgIGdhbWUgOiAxLFxyXG4gICAgZ2FuZyA6IDEsXHJcbiAgICBnYXAgOiAxLFxyXG4gICAgZ2FyYWdlIDogMSxcclxuICAgIGdhcmRlbiA6IDEsXHJcbiAgICBnYXJsaWMgOiAxLFxyXG4gICAgZ2FzIDogMSxcclxuICAgIGdhdGUgOiAxLFxyXG4gICAgZ2F0aGVyIDogMSxcclxuICAgIGdheSA6IDEsXHJcbiAgICBnYXplIDogMSxcclxuICAgIGdlYXIgOiAxLFxyXG4gICAgZ2VuZGVyIDogMSxcclxuICAgIGdlbmUgOiAxLFxyXG4gICAgZ2VuZXJhbCA6IDEsXHJcbiAgICBnZW5lcmFsbHkgOiAxLFxyXG4gICAgZ2VuZXJhdGUgOiAxLFxyXG4gICAgZ2VuZXJhdGlvbiA6IDEsXHJcbiAgICBnZW5ldGljIDogMSxcclxuICAgIGdlbnRsZW1hbiA6IDEsXHJcbiAgICBnZW50bHkgOiAxLFxyXG4gICAgR2VybWFuIDogMSxcclxuICAgIGdlc3R1cmUgOiAxLFxyXG4gICAgZ2V0IDogMSxcclxuICAgIGdob3N0IDogMSxcclxuICAgIGdpYW50IDogMSxcclxuICAgIGdpZnQgOiAxLFxyXG4gICAgZ2lmdGVkIDogMSxcclxuICAgIGdpcmwgOiAxLFxyXG4gICAgZ2lybGZyaWVuZCA6IDEsXHJcbiAgICBnaXZlIDogMSxcclxuICAgIGdpdmVuIDogMSxcclxuICAgIGdsYWQgOiAxLFxyXG4gICAgZ2xhbmNlIDogMSxcclxuICAgIGdsYXNzIDogMSxcclxuICAgIGdsb2JhbCA6IDEsXHJcbiAgICBnbG92ZSA6IDEsXHJcbiAgICBnbyA6IDEsXHJcbiAgICBnb2FsIDogMSxcclxuICAgIEdvZCA6IDEsXHJcbiAgICBnb2xkIDogMSxcclxuICAgIGdvbGRlbiA6IDEsXHJcbiAgICBnb2xmIDogMSxcclxuICAgIGdvb2QgOiAxLFxyXG4gICAgZ292ZXJubWVudCA6IDEsXHJcbiAgICBnb3Zlcm5vciA6IDEsXHJcbiAgICBncmFiIDogMSxcclxuICAgIGdyYWRlIDogMSxcclxuICAgIGdyYWR1YWxseSA6IDEsXHJcbiAgICBncmFkdWF0ZSA6IDEsXHJcbiAgICBncmFpbiA6IDEsXHJcbiAgICBncmFuZCA6IDEsXHJcbiAgICBncmFuZGZhdGhlciA6IDEsXHJcbiAgICBncmFuZG1vdGhlciA6IDEsXHJcbiAgICBncmFudCA6IDEsXHJcbiAgICBncmFzcyA6IDEsXHJcbiAgICBncmF2ZSA6IDEsXHJcbiAgICBncmF5IDogMSxcclxuICAgIGdyZWF0IDogMSxcclxuICAgIGdyZWF0ZXN0IDogMSxcclxuICAgIGdyZWVuIDogMSxcclxuICAgIGdyb2NlcnkgOiAxLFxyXG4gICAgZ3JvdW5kIDogMSxcclxuICAgIGdyb3VwIDogMSxcclxuICAgIGdyb3cgOiAxLFxyXG4gICAgZ3Jvd2luZyA6IDEsXHJcbiAgICBncm93dGggOiAxLFxyXG4gICAgZ3VhcmFudGVlIDogMSxcclxuICAgIGd1YXJkIDogMSxcclxuICAgIGd1ZXNzIDogMSxcclxuICAgIGd1ZXN0IDogMSxcclxuICAgIGd1aWRlIDogMSxcclxuICAgIGd1aWRlbGluZSA6IDEsXHJcbiAgICBndWlsdHkgOiAxLFxyXG4gICAgZ3VuIDogMSxcclxuICAgIGd1eSA6IDEsXHJcbiAgICBoYWJpdCA6IDEsXHJcbiAgICBoYWJpdGF0IDogMSxcclxuICAgIGhhaXIgOiAxLFxyXG4gICAgaGFsZiA6IDEsXHJcbiAgICBoYWxsIDogMSxcclxuICAgIGhhbmQgOiAxLFxyXG4gICAgaGFuZGZ1bCA6IDEsXHJcbiAgICBoYW5kbGUgOiAxLFxyXG4gICAgaGFuZyA6IDEsXHJcbiAgICBoYXBwZW4gOiAxLFxyXG4gICAgaGFwcHkgOiAxLFxyXG4gICAgaGFyZCA6IDEsXHJcbiAgICBoYXJkbHkgOiAxLFxyXG4gICAgaGF0IDogMSxcclxuICAgIGhhdGUgOiAxLFxyXG4gICAgaGF2ZSA6IDEsXHJcbiAgICBoZSA6IDEsXHJcbiAgICBoZWFkIDogMSxcclxuICAgIGhlYWRsaW5lIDogMSxcclxuICAgIGhlYWRxdWFydGVycyA6IDEsXHJcbiAgICBoZWFsdGggOiAxLFxyXG4gICAgaGVhbHRoeSA6IDEsXHJcbiAgICBoZWFyIDogMSxcclxuICAgIGhlYXJpbmcgOiAxLFxyXG4gICAgaGVhcnQgOiAxLFxyXG4gICAgaGVhdCA6IDEsXHJcbiAgICBoZWF2ZW4gOiAxLFxyXG4gICAgaGVhdmlseSA6IDEsXHJcbiAgICBoZWF2eSA6IDEsXHJcbiAgICBoZWVsIDogMSxcclxuICAgIGhlaWdodCA6IDEsXHJcbiAgICBoZWxpY29wdGVyIDogMSxcclxuICAgIGhlbGwgOiAxLFxyXG4gICAgaGVsbG8gOiAxLFxyXG4gICAgaGVscCA6IDEsXHJcbiAgICBoZWxwZnVsIDogMSxcclxuICAgIGhlciA6IDEsXHJcbiAgICBoZXJlIDogMSxcclxuICAgIGhlcml0YWdlIDogMSxcclxuICAgIGhlcm8gOiAxLFxyXG4gICAgaGVyc2VsZiA6IDEsXHJcbiAgICBoZXkgOiAxLFxyXG4gICAgaGkgOiAxLFxyXG4gICAgaGlkZSA6IDEsXHJcbiAgICBoaWdoIDogMSxcclxuICAgIGhpZ2hsaWdodCA6IDEsXHJcbiAgICBoaWdobHkgOiAxLFxyXG4gICAgaGlnaHdheSA6IDEsXHJcbiAgICBoaWxsIDogMSxcclxuICAgIGhpbSA6IDEsXHJcbiAgICBoaW1zZWxmIDogMSxcclxuICAgIGhpcCA6IDEsXHJcbiAgICBoaXJlIDogMSxcclxuICAgIGhpcyA6IDEsXHJcbiAgICBoaXN0b3JpYW4gOiAxLFxyXG4gICAgaGlzdG9yaWMgOiAxLFxyXG4gICAgaGlzdG9yaWNhbCA6IDEsXHJcbiAgICBoaXN0b3J5IDogMSxcclxuICAgIGhpdCA6IDEsXHJcbiAgICBob2xkIDogMSxcclxuICAgIGhvbGUgOiAxLFxyXG4gICAgaG9saWRheSA6IDEsXHJcbiAgICBob2x5IDogMSxcclxuICAgIGhvbWUgOiAxLFxyXG4gICAgaG9tZWxlc3MgOiAxLFxyXG4gICAgaG9uZXN0IDogMSxcclxuICAgIGhvbmV5IDogMSxcclxuICAgIGhvbm9yIDogMSxcclxuICAgIGhvcGUgOiAxLFxyXG4gICAgaG9yaXpvbiA6IDEsXHJcbiAgICBob3Jyb3IgOiAxLFxyXG4gICAgaG9yc2UgOiAxLFxyXG4gICAgaG9zcGl0YWwgOiAxLFxyXG4gICAgaG9zdCA6IDEsXHJcbiAgICBob3QgOiAxLFxyXG4gICAgaG90ZWwgOiAxLFxyXG4gICAgaG91ciA6IDEsXHJcbiAgICBob3VzZSA6IDEsXHJcbiAgICBob3VzZWhvbGQgOiAxLFxyXG4gICAgaG91c2luZyA6IDEsXHJcbiAgICBob3cgOiAxLFxyXG4gICAgaG93ZXZlciA6IDEsXHJcbiAgICBodWdlIDogMSxcclxuICAgIGh1bWFuIDogMSxcclxuICAgIGh1bW9yIDogMSxcclxuICAgIGh1bmRyZWQgOiAxLFxyXG4gICAgaHVuZ3J5IDogMSxcclxuICAgIGh1bnRlciA6IDEsXHJcbiAgICBodW50aW5nIDogMSxcclxuICAgIGh1cnQgOiAxLFxyXG4gICAgaHVzYmFuZCA6IDEsXHJcbiAgICBoeXBvdGhlc2lzIDogMSxcclxuICAgIEkgOiAxLFxyXG4gICAgaWNlIDogMSxcclxuICAgIGlkZWEgOiAxLFxyXG4gICAgaWRlYWwgOiAxLFxyXG4gICAgaWRlbnRpZmljYXRpb24gOiAxLFxyXG4gICAgaWRlbnRpZnkgOiAxLFxyXG4gICAgaWRlbnRpdHkgOiAxLFxyXG4gICAgaWUgOiAxLFxyXG4gICAgaWYgOiAxLFxyXG4gICAgaWdub3JlIDogMSxcclxuICAgIGlsbCA6IDEsXHJcbiAgICBpbGxlZ2FsIDogMSxcclxuICAgIGlsbG5lc3MgOiAxLFxyXG4gICAgaWxsdXN0cmF0ZSA6IDEsXHJcbiAgICBpbWFnZSA6IDEsXHJcbiAgICBpbWFnaW5hdGlvbiA6IDEsXHJcbiAgICBpbWFnaW5lIDogMSxcclxuICAgIGltbWVkaWF0ZSA6IDEsXHJcbiAgICBpbW1lZGlhdGVseSA6IDEsXHJcbiAgICBpbW1pZ3JhbnQgOiAxLFxyXG4gICAgaW1taWdyYXRpb24gOiAxLFxyXG4gICAgaW1wYWN0IDogMSxcclxuICAgIGltcGxlbWVudCA6IDEsXHJcbiAgICBpbXBsaWNhdGlvbiA6IDEsXHJcbiAgICBpbXBseSA6IDEsXHJcbiAgICBpbXBvcnRhbmNlIDogMSxcclxuICAgIGltcG9ydGFudCA6IDEsXHJcbiAgICBpbXBvc2UgOiAxLFxyXG4gICAgaW1wb3NzaWJsZSA6IDEsXHJcbiAgICBpbXByZXNzIDogMSxcclxuICAgIGltcHJlc3Npb24gOiAxLFxyXG4gICAgaW1wcmVzc2l2ZSA6IDEsXHJcbiAgICBpbXByb3ZlIDogMSxcclxuICAgIGltcHJvdmVtZW50IDogMSxcclxuICAgIGluIDogMSxcclxuICAgIGluY2VudGl2ZSA6IDEsXHJcbiAgICBpbmNpZGVudCA6IDEsXHJcbiAgICBpbmNsdWRlIDogMSxcclxuICAgIGluY2x1ZGluZyA6IDEsXHJcbiAgICBpbmNvbWUgOiAxLFxyXG4gICAgaW5jb3Jwb3JhdGUgOiAxLFxyXG4gICAgaW5jcmVhc2UgOiAxLFxyXG4gICAgaW5jcmVhc2VkIDogMSxcclxuICAgIGluY3JlYXNpbmcgOiAxLFxyXG4gICAgaW5jcmVhc2luZ2x5IDogMSxcclxuICAgIGluY3JlZGlibGUgOiAxLFxyXG4gICAgaW5kZWVkIDogMSxcclxuICAgIGluZGVwZW5kZW5jZSA6IDEsXHJcbiAgICBpbmRlcGVuZGVudCA6IDEsXHJcbiAgICBpbmRleCA6IDEsXHJcbiAgICBJbmRpYW4gOiAxLFxyXG4gICAgaW5kaWNhdGUgOiAxLFxyXG4gICAgaW5kaWNhdGlvbiA6IDEsXHJcbiAgICBpbmRpdmlkdWFsIDogMSxcclxuICAgIGluZHVzdHJpYWwgOiAxLFxyXG4gICAgaW5kdXN0cnkgOiAxLFxyXG4gICAgaW5mYW50IDogMSxcclxuICAgIGluZmVjdGlvbiA6IDEsXHJcbiAgICBpbmZsYXRpb24gOiAxLFxyXG4gICAgaW5mbHVlbmNlIDogMSxcclxuICAgIGluZm9ybSA6IDEsXHJcbiAgICBpbmZvcm1hdGlvbiA6IDEsXHJcbiAgICBpbmdyZWRpZW50IDogMSxcclxuICAgIGluaXRpYWwgOiAxLFxyXG4gICAgaW5pdGlhbGx5IDogMSxcclxuICAgIGluaXRpYXRpdmUgOiAxLFxyXG4gICAgaW5qdXJ5IDogMSxcclxuICAgIGlubmVyIDogMSxcclxuICAgIGlubm9jZW50IDogMSxcclxuICAgIGlucXVpcnkgOiAxLFxyXG4gICAgaW5zaWRlIDogMSxcclxuICAgIGluc2lnaHQgOiAxLFxyXG4gICAgaW5zaXN0IDogMSxcclxuICAgIGluc3BpcmUgOiAxLFxyXG4gICAgaW5zdGFsbCA6IDEsXHJcbiAgICBpbnN0YW5jZSA6IDEsXHJcbiAgICBpbnN0ZWFkIDogMSxcclxuICAgIGluc3RpdHV0aW9uIDogMSxcclxuICAgIGluc3RpdHV0aW9uYWwgOiAxLFxyXG4gICAgaW5zdHJ1Y3Rpb24gOiAxLFxyXG4gICAgaW5zdHJ1Y3RvciA6IDEsXHJcbiAgICBpbnN0cnVtZW50IDogMSxcclxuICAgIGluc3VyYW5jZSA6IDEsXHJcbiAgICBpbnRlbGxlY3R1YWwgOiAxLFxyXG4gICAgaW50ZWxsaWdlbmNlIDogMSxcclxuICAgIGludGVuZCA6IDEsXHJcbiAgICBpbnRlbnNlIDogMSxcclxuICAgIGludGVuc2l0eSA6IDEsXHJcbiAgICBpbnRlbnRpb24gOiAxLFxyXG4gICAgaW50ZXJhY3Rpb24gOiAxLFxyXG4gICAgaW50ZXJlc3QgOiAxLFxyXG4gICAgaW50ZXJlc3RlZCA6IDEsXHJcbiAgICBpbnRlcmVzdGluZyA6IDEsXHJcbiAgICBpbnRlcm5hbCA6IDEsXHJcbiAgICBpbnRlcm5hdGlvbmFsIDogMSxcclxuICAgIEludGVybmV0IDogMSxcclxuICAgIGludGVycHJldCA6IDEsXHJcbiAgICBpbnRlcnByZXRhdGlvbiA6IDEsXHJcbiAgICBpbnRlcnZlbnRpb24gOiAxLFxyXG4gICAgaW50ZXJ2aWV3IDogMSxcclxuICAgIGludG8gOiAxLFxyXG4gICAgaW50cm9kdWNlIDogMSxcclxuICAgIGludHJvZHVjdGlvbiA6IDEsXHJcbiAgICBpbnZhc2lvbiA6IDEsXHJcbiAgICBpbnZlc3QgOiAxLFxyXG4gICAgaW52ZXN0aWdhdGUgOiAxLFxyXG4gICAgaW52ZXN0aWdhdGlvbiA6IDEsXHJcbiAgICBpbnZlc3RpZ2F0b3IgOiAxLFxyXG4gICAgaW52ZXN0bWVudCA6IDEsXHJcbiAgICBpbnZlc3RvciA6IDEsXHJcbiAgICBpbnZpdGUgOiAxLFxyXG4gICAgaW52b2x2ZSA6IDEsXHJcbiAgICBpbnZvbHZlZCA6IDEsXHJcbiAgICBpbnZvbHZlbWVudCA6IDEsXHJcbiAgICBJcmFxaSA6IDEsXHJcbiAgICBJcmlzaCA6IDEsXHJcbiAgICBpcm9uIDogMSxcclxuICAgIElzbGFtaWMgOiAxLFxyXG4gICAgaXNsYW5kIDogMSxcclxuICAgIElzcmFlbGkgOiAxLFxyXG4gICAgaXNzdWUgOiAxLFxyXG4gICAgaXQgOiAxLFxyXG4gICAgSXRhbGlhbiA6IDEsXHJcbiAgICBpdGVtIDogMSxcclxuICAgIGl0cyA6IDEsXHJcbiAgICBpdHNlbGYgOiAxLFxyXG4gICAgamFja2V0IDogMSxcclxuICAgIGphaWwgOiAxLFxyXG4gICAgSmFwYW5lc2UgOiAxLFxyXG4gICAgamV0IDogMSxcclxuICAgIEpldyA6IDEsXHJcbiAgICBKZXdpc2ggOiAxLFxyXG4gICAgam9iIDogMSxcclxuICAgIGpvaW4gOiAxLFxyXG4gICAgam9pbnQgOiAxLFxyXG4gICAgam9rZSA6IDEsXHJcbiAgICBqb3VybmFsIDogMSxcclxuICAgIGpvdXJuYWxpc3QgOiAxLFxyXG4gICAgam91cm5leSA6IDEsXHJcbiAgICBqb3kgOiAxLFxyXG4gICAganVkZ2UgOiAxLFxyXG4gICAganVkZ21lbnQgOiAxLFxyXG4gICAganVpY2UgOiAxLFxyXG4gICAganVtcCA6IDEsXHJcbiAgICBqdW5pb3IgOiAxLFxyXG4gICAganVyeSA6IDEsXHJcbiAgICBqdXN0IDogMSxcclxuICAgIGp1c3RpY2UgOiAxLFxyXG4gICAganVzdGlmeSA6IDEsXHJcbiAgICBrZWVwIDogMSxcclxuICAgIGtleSA6IDEsXHJcbiAgICBraWNrIDogMSxcclxuICAgIGtpZCA6IDEsXHJcbiAgICBraWxsIDogMSxcclxuICAgIGtpbGxlciA6IDEsXHJcbiAgICBraWxsaW5nIDogMSxcclxuICAgIGtpbmQgOiAxLFxyXG4gICAga2luZyA6IDEsXHJcbiAgICBraXNzIDogMSxcclxuICAgIGtpdGNoZW4gOiAxLFxyXG4gICAga25lZSA6IDEsXHJcbiAgICBrbmlmZSA6IDEsXHJcbiAgICBrbm9jayA6IDEsXHJcbiAgICBrbm93IDogMSxcclxuICAgIGtub3dsZWRnZSA6IDEsXHJcbiAgICBsYWIgOiAxLFxyXG4gICAgbGFiZWwgOiAxLFxyXG4gICAgbGFib3IgOiAxLFxyXG4gICAgbGFib3JhdG9yeSA6IDEsXHJcbiAgICBsYWNrIDogMSxcclxuICAgIGxhZHkgOiAxLFxyXG4gICAgbGFrZSA6IDEsXHJcbiAgICBsYW5kIDogMSxcclxuICAgIGxhbmRzY2FwZSA6IDEsXHJcbiAgICBsYW5ndWFnZSA6IDEsXHJcbiAgICBsYXAgOiAxLFxyXG4gICAgbGFyZ2UgOiAxLFxyXG4gICAgbGFyZ2VseSA6IDEsXHJcbiAgICBsYXN0IDogMSxcclxuICAgIGxhdGUgOiAxLFxyXG4gICAgbGF0ZXIgOiAxLFxyXG4gICAgTGF0aW4gOiAxLFxyXG4gICAgbGF0dGVyIDogMSxcclxuICAgIGxhdWdoIDogMSxcclxuICAgIGxhdW5jaCA6IDEsXHJcbiAgICBsYXcgOiAxLFxyXG4gICAgbGF3biA6IDEsXHJcbiAgICBsYXdzdWl0IDogMSxcclxuICAgIGxhd3llciA6IDEsXHJcbiAgICBsYXkgOiAxLFxyXG4gICAgbGF5ZXIgOiAxLFxyXG4gICAgbGVhZCA6IDEsXHJcbiAgICBsZWFkZXIgOiAxLFxyXG4gICAgbGVhZGVyc2hpcCA6IDEsXHJcbiAgICBsZWFkaW5nIDogMSxcclxuICAgIGxlYWYgOiAxLFxyXG4gICAgbGVhZ3VlIDogMSxcclxuICAgIGxlYW4gOiAxLFxyXG4gICAgbGVhcm4gOiAxLFxyXG4gICAgbGVhcm5pbmcgOiAxLFxyXG4gICAgbGVhc3QgOiAxLFxyXG4gICAgbGVhdGhlciA6IDEsXHJcbiAgICBsZWF2ZSA6IDEsXHJcbiAgICBsZWZ0IDogMSxcclxuICAgIGxlZyA6IDEsXHJcbiAgICBsZWdhY3kgOiAxLFxyXG4gICAgbGVnYWwgOiAxLFxyXG4gICAgbGVnZW5kIDogMSxcclxuICAgIGxlZ2lzbGF0aW9uIDogMSxcclxuICAgIGxlZ2l0aW1hdGUgOiAxLFxyXG4gICAgbGVtb24gOiAxLFxyXG4gICAgbGVuZ3RoIDogMSxcclxuICAgIGxlc3MgOiAxLFxyXG4gICAgbGVzc29uIDogMSxcclxuICAgIGxldCA6IDEsXHJcbiAgICBsZXR0ZXIgOiAxLFxyXG4gICAgbGV2ZWwgOiAxLFxyXG4gICAgbGliZXJhbCA6IDEsXHJcbiAgICBsaWJyYXJ5IDogMSxcclxuICAgIGxpY2Vuc2UgOiAxLFxyXG4gICAgbGllIDogMSxcclxuICAgIGxpZmUgOiAxLFxyXG4gICAgbGlmZXN0eWxlIDogMSxcclxuICAgIGxpZmV0aW1lIDogMSxcclxuICAgIGxpZnQgOiAxLFxyXG4gICAgbGlnaHQgOiAxLFxyXG4gICAgbGlrZSA6IDEsXHJcbiAgICBsaWtlbHkgOiAxLFxyXG4gICAgbGltaXQgOiAxLFxyXG4gICAgbGltaXRhdGlvbiA6IDEsXHJcbiAgICBsaW1pdGVkIDogMSxcclxuICAgIGxpbmUgOiAxLFxyXG4gICAgbGluayA6IDEsXHJcbiAgICBsaXAgOiAxLFxyXG4gICAgbGlzdCA6IDEsXHJcbiAgICBsaXN0ZW4gOiAxLFxyXG4gICAgbGl0ZXJhbGx5IDogMSxcclxuICAgIGxpdGVyYXJ5IDogMSxcclxuICAgIGxpdGVyYXR1cmUgOiAxLFxyXG4gICAgbGl0dGxlIDogMSxcclxuICAgIGxpdmUgOiAxLFxyXG4gICAgbGl2aW5nIDogMSxcclxuICAgIGxvYWQgOiAxLFxyXG4gICAgbG9hbiA6IDEsXHJcbiAgICBsb2NhbCA6IDEsXHJcbiAgICBsb2NhdGUgOiAxLFxyXG4gICAgbG9jYXRpb24gOiAxLFxyXG4gICAgbG9jayA6IDEsXHJcbiAgICBsb25nIDogMSxcclxuICAgIFwibG9uZy10ZXJtXCIgOiAxLFxyXG4gICAgbG9vayA6IDEsXHJcbiAgICBsb29zZSA6IDEsXHJcbiAgICBsb3NlIDogMSxcclxuICAgIGxvc3MgOiAxLFxyXG4gICAgbG9zdCA6IDEsXHJcbiAgICBsb3QgOiAxLFxyXG4gICAgbG90cyA6IDEsXHJcbiAgICBsb3VkIDogMSxcclxuICAgIGxvdmUgOiAxLFxyXG4gICAgbG92ZWx5IDogMSxcclxuICAgIGxvdmVyIDogMSxcclxuICAgIGxvdyA6IDEsXHJcbiAgICBsb3dlciA6IDEsXHJcbiAgICBsdWNrIDogMSxcclxuICAgIGx1Y2t5IDogMSxcclxuICAgIGx1bmNoIDogMSxcclxuICAgIGx1bmcgOiAxLFxyXG4gICAgbWFjaGluZSA6IDEsXHJcbiAgICBtYWQgOiAxLFxyXG4gICAgbWFnYXppbmUgOiAxLFxyXG4gICAgbWFpbCA6IDEsXHJcbiAgICBtYWluIDogMSxcclxuICAgIG1haW5seSA6IDEsXHJcbiAgICBtYWludGFpbiA6IDEsXHJcbiAgICBtYWludGVuYW5jZSA6IDEsXHJcbiAgICBtYWpvciA6IDEsXHJcbiAgICBtYWpvcml0eSA6IDEsXHJcbiAgICBtYWtlIDogMSxcclxuICAgIG1ha2VyIDogMSxcclxuICAgIG1ha2V1cCA6IDEsXHJcbiAgICBtYWxlIDogMSxcclxuICAgIG1hbGwgOiAxLFxyXG4gICAgbWFuIDogMSxcclxuICAgIG1hbmFnZSA6IDEsXHJcbiAgICBtYW5hZ2VtZW50IDogMSxcclxuICAgIG1hbmFnZXIgOiAxLFxyXG4gICAgbWFubmVyIDogMSxcclxuICAgIG1hbnVmYWN0dXJlciA6IDEsXHJcbiAgICBtYW51ZmFjdHVyaW5nIDogMSxcclxuICAgIG1hbnkgOiAxLFxyXG4gICAgbWFwIDogMSxcclxuICAgIG1hcmdpbiA6IDEsXHJcbiAgICBtYXJrIDogMSxcclxuICAgIG1hcmtldCA6IDEsXHJcbiAgICBtYXJrZXRpbmcgOiAxLFxyXG4gICAgbWFycmlhZ2UgOiAxLFxyXG4gICAgbWFycmllZCA6IDEsXHJcbiAgICBtYXJyeSA6IDEsXHJcbiAgICBtYXNrIDogMSxcclxuICAgIG1hc3MgOiAxLFxyXG4gICAgbWFzc2l2ZSA6IDEsXHJcbiAgICBtYXN0ZXIgOiAxLFxyXG4gICAgbWF0Y2ggOiAxLFxyXG4gICAgbWF0ZXJpYWwgOiAxLFxyXG4gICAgbWF0aCA6IDEsXHJcbiAgICBtYXR0ZXIgOiAxLFxyXG4gICAgbWF5IDogMSxcclxuICAgIG1heWJlIDogMSxcclxuICAgIG1heW9yIDogMSxcclxuICAgIG1lIDogMSxcclxuICAgIG1lYWwgOiAxLFxyXG4gICAgbWVhbiA6IDEsXHJcbiAgICBtZWFuaW5nIDogMSxcclxuICAgIG1lYW53aGlsZSA6IDEsXHJcbiAgICBtZWFzdXJlIDogMSxcclxuICAgIG1lYXN1cmVtZW50IDogMSxcclxuICAgIG1lYXQgOiAxLFxyXG4gICAgbWVjaGFuaXNtIDogMSxcclxuICAgIG1lZGlhIDogMSxcclxuICAgIG1lZGljYWwgOiAxLFxyXG4gICAgbWVkaWNhdGlvbiA6IDEsXHJcbiAgICBtZWRpY2luZSA6IDEsXHJcbiAgICBtZWRpdW0gOiAxLFxyXG4gICAgbWVldCA6IDEsXHJcbiAgICBtZWV0aW5nIDogMSxcclxuICAgIG1lbWJlciA6IDEsXHJcbiAgICBtZW1iZXJzaGlwIDogMSxcclxuICAgIG1lbW9yeSA6IDEsXHJcbiAgICBtZW50YWwgOiAxLFxyXG4gICAgbWVudGlvbiA6IDEsXHJcbiAgICBtZW51IDogMSxcclxuICAgIG1lcmUgOiAxLFxyXG4gICAgbWVyZWx5IDogMSxcclxuICAgIG1lc3MgOiAxLFxyXG4gICAgbWVzc2FnZSA6IDEsXHJcbiAgICBtZXRhbCA6IDEsXHJcbiAgICBtZXRlciA6IDEsXHJcbiAgICBtZXRob2QgOiAxLFxyXG4gICAgTWV4aWNhbiA6IDEsXHJcbiAgICBtaWRkbGUgOiAxLFxyXG4gICAgbWlnaHQgOiAxLFxyXG4gICAgbWlsaXRhcnkgOiAxLFxyXG4gICAgbWlsayA6IDEsXHJcbiAgICBtaWxsaW9uIDogMSxcclxuICAgIG1pbmQgOiAxLFxyXG4gICAgbWluZSA6IDEsXHJcbiAgICBtaW5pc3RlciA6IDEsXHJcbiAgICBtaW5vciA6IDEsXHJcbiAgICBtaW5vcml0eSA6IDEsXHJcbiAgICBtaW51dGUgOiAxLFxyXG4gICAgbWlyYWNsZSA6IDEsXHJcbiAgICBtaXJyb3IgOiAxLFxyXG4gICAgbWlzcyA6IDEsXHJcbiAgICBtaXNzaWxlIDogMSxcclxuICAgIG1pc3Npb24gOiAxLFxyXG4gICAgbWlzdGFrZSA6IDEsXHJcbiAgICBtaXggOiAxLFxyXG4gICAgbWl4dHVyZSA6IDEsXHJcbiAgICBcIm1tLWhtbVwiIDogMSxcclxuICAgIG1vZGUgOiAxLFxyXG4gICAgbW9kZWwgOiAxLFxyXG4gICAgbW9kZXJhdGUgOiAxLFxyXG4gICAgbW9kZXJuIDogMSxcclxuICAgIG1vZGVzdCA6IDEsXHJcbiAgICBtb20gOiAxLFxyXG4gICAgbW9tZW50IDogMSxcclxuICAgIG1vbmV5IDogMSxcclxuICAgIG1vbml0b3IgOiAxLFxyXG4gICAgbW9udGggOiAxLFxyXG4gICAgbW9vZCA6IDEsXHJcbiAgICBtb29uIDogMSxcclxuICAgIG1vcmFsIDogMSxcclxuICAgIG1vcmUgOiAxLFxyXG4gICAgbW9yZW92ZXIgOiAxLFxyXG4gICAgbW9ybmluZyA6IDEsXHJcbiAgICBtb3J0Z2FnZSA6IDEsXHJcbiAgICBtb3N0IDogMSxcclxuICAgIG1vc3RseSA6IDEsXHJcbiAgICBtb3RoZXIgOiAxLFxyXG4gICAgbW90aW9uIDogMSxcclxuICAgIG1vdGl2YXRpb24gOiAxLFxyXG4gICAgbW90b3IgOiAxLFxyXG4gICAgbW91bnQgOiAxLFxyXG4gICAgbW91bnRhaW4gOiAxLFxyXG4gICAgbW91c2UgOiAxLFxyXG4gICAgbW91dGggOiAxLFxyXG4gICAgbW92ZSA6IDEsXHJcbiAgICBtb3ZlbWVudCA6IDEsXHJcbiAgICBtb3ZpZSA6IDEsXHJcbiAgICBNciA6IDEsXHJcbiAgICBNcnMgOiAxLFxyXG4gICAgTXMgOiAxLFxyXG4gICAgbXVjaCA6IDEsXHJcbiAgICBtdWx0aXBsZSA6IDEsXHJcbiAgICBtdXJkZXIgOiAxLFxyXG4gICAgbXVzY2xlIDogMSxcclxuICAgIG11c2V1bSA6IDEsXHJcbiAgICBtdXNpYyA6IDEsXHJcbiAgICBtdXNpY2FsIDogMSxcclxuICAgIG11c2ljaWFuIDogMSxcclxuICAgIE11c2xpbSA6IDEsXHJcbiAgICBtdXN0IDogMSxcclxuICAgIG11dHVhbCA6IDEsXHJcbiAgICBteSA6IDEsXHJcbiAgICBteXNlbGYgOiAxLFxyXG4gICAgbXlzdGVyeSA6IDEsXHJcbiAgICBteXRoIDogMSxcclxuICAgIG5ha2VkIDogMSxcclxuICAgIG5hbWUgOiAxLFxyXG4gICAgbmFycmF0aXZlIDogMSxcclxuICAgIG5hcnJvdyA6IDEsXHJcbiAgICBuYXRpb24gOiAxLFxyXG4gICAgbmF0aW9uYWwgOiAxLFxyXG4gICAgbmF0aXZlIDogMSxcclxuICAgIG5hdHVyYWwgOiAxLFxyXG4gICAgbmF0dXJhbGx5IDogMSxcclxuICAgIG5hdHVyZSA6IDEsXHJcbiAgICBuZWFyIDogMSxcclxuICAgIG5lYXJieSA6IDEsXHJcbiAgICBuZWFybHkgOiAxLFxyXG4gICAgbmVjZXNzYXJpbHkgOiAxLFxyXG4gICAgbmVjZXNzYXJ5IDogMSxcclxuICAgIG5lY2sgOiAxLFxyXG4gICAgbmVlZCA6IDEsXHJcbiAgICBuZWdhdGl2ZSA6IDEsXHJcbiAgICBuZWdvdGlhdGUgOiAxLFxyXG4gICAgbmVnb3RpYXRpb24gOiAxLFxyXG4gICAgbmVpZ2hib3IgOiAxLFxyXG4gICAgbmVpZ2hib3Job29kIDogMSxcclxuICAgIG5laXRoZXIgOiAxLFxyXG4gICAgbmVydmUgOiAxLFxyXG4gICAgbmVydm91cyA6IDEsXHJcbiAgICBuZXQgOiAxLFxyXG4gICAgbmV0d29yayA6IDEsXHJcbiAgICBuZXZlciA6IDEsXHJcbiAgICBuZXZlcnRoZWxlc3MgOiAxLFxyXG4gICAgbmV3IDogMSxcclxuICAgIG5ld2x5IDogMSxcclxuICAgIG5ld3MgOiAxLFxyXG4gICAgbmV3c3BhcGVyIDogMSxcclxuICAgIG5leHQgOiAxLFxyXG4gICAgbmljZSA6IDEsXHJcbiAgICBuaWdodCA6IDEsXHJcbiAgICBuaW5lIDogMSxcclxuICAgIG5vIDogMSxcclxuICAgIG5vYm9keSA6IDEsXHJcbiAgICBub2QgOiAxLFxyXG4gICAgbm9pc2UgOiAxLFxyXG4gICAgbm9taW5hdGlvbiA6IDEsXHJcbiAgICBub25lIDogMSxcclxuICAgIG5vbmV0aGVsZXNzIDogMSxcclxuICAgIG5vciA6IDEsXHJcbiAgICBub3JtYWwgOiAxLFxyXG4gICAgbm9ybWFsbHkgOiAxLFxyXG4gICAgbm9ydGggOiAxLFxyXG4gICAgbm9ydGhlcm4gOiAxLFxyXG4gICAgbm9zZSA6IDEsXHJcbiAgICBub3QgOiAxLFxyXG4gICAgbm90ZSA6IDEsXHJcbiAgICBub3RoaW5nIDogMSxcclxuICAgIG5vdGljZSA6IDEsXHJcbiAgICBub3Rpb24gOiAxLFxyXG4gICAgbm92ZWwgOiAxLFxyXG4gICAgbm93IDogMSxcclxuICAgIG5vd2hlcmUgOiAxLFxyXG4gICAgXCJuJ3RcIiA6IDEsXHJcbiAgICBudWNsZWFyIDogMSxcclxuICAgIG51bWJlciA6IDEsXHJcbiAgICBudW1lcm91cyA6IDEsXHJcbiAgICBudXJzZSA6IDEsXHJcbiAgICBudXQgOiAxLFxyXG4gICAgb2JqZWN0IDogMSxcclxuICAgIG9iamVjdGl2ZSA6IDEsXHJcbiAgICBvYmxpZ2F0aW9uIDogMSxcclxuICAgIG9ic2VydmF0aW9uIDogMSxcclxuICAgIG9ic2VydmUgOiAxLFxyXG4gICAgb2JzZXJ2ZXIgOiAxLFxyXG4gICAgb2J0YWluIDogMSxcclxuICAgIG9idmlvdXMgOiAxLFxyXG4gICAgb2J2aW91c2x5IDogMSxcclxuICAgIG9jY2FzaW9uIDogMSxcclxuICAgIG9jY2FzaW9uYWxseSA6IDEsXHJcbiAgICBvY2N1cGF0aW9uIDogMSxcclxuICAgIG9jY3VweSA6IDEsXHJcbiAgICBvY2N1ciA6IDEsXHJcbiAgICBvY2VhbiA6IDEsXHJcbiAgICBvZGQgOiAxLFxyXG4gICAgb2RkcyA6IDEsXHJcbiAgICBvZiA6IDEsXHJcbiAgICBvZmYgOiAxLFxyXG4gICAgb2ZmZW5zZSA6IDEsXHJcbiAgICBvZmZlbnNpdmUgOiAxLFxyXG4gICAgb2ZmZXIgOiAxLFxyXG4gICAgb2ZmaWNlIDogMSxcclxuICAgIG9mZmljZXIgOiAxLFxyXG4gICAgb2ZmaWNpYWwgOiAxLFxyXG4gICAgb2Z0ZW4gOiAxLFxyXG4gICAgb2ggOiAxLFxyXG4gICAgb2lsIDogMSxcclxuICAgIG9rIDogMSxcclxuICAgIG9rYXkgOiAxLFxyXG4gICAgb2xkIDogMSxcclxuICAgIE9seW1waWMgOiAxLFxyXG4gICAgb24gOiAxLFxyXG4gICAgb25jZSA6IDEsXHJcbiAgICBvbmUgOiAxLFxyXG4gICAgb25nb2luZyA6IDEsXHJcbiAgICBvbmlvbiA6IDEsXHJcbiAgICBvbmxpbmUgOiAxLFxyXG4gICAgb25seSA6IDEsXHJcbiAgICBvbnRvIDogMSxcclxuICAgIG9wZW4gOiAxLFxyXG4gICAgb3BlbmluZyA6IDEsXHJcbiAgICBvcGVyYXRlIDogMSxcclxuICAgIG9wZXJhdGluZyA6IDEsXHJcbiAgICBvcGVyYXRpb24gOiAxLFxyXG4gICAgb3BlcmF0b3IgOiAxLFxyXG4gICAgb3BpbmlvbiA6IDEsXHJcbiAgICBvcHBvbmVudCA6IDEsXHJcbiAgICBvcHBvcnR1bml0eSA6IDEsXHJcbiAgICBvcHBvc2UgOiAxLFxyXG4gICAgb3Bwb3NpdGUgOiAxLFxyXG4gICAgb3Bwb3NpdGlvbiA6IDEsXHJcbiAgICBvcHRpb24gOiAxLFxyXG4gICAgb3IgOiAxLFxyXG4gICAgb3JhbmdlIDogMSxcclxuICAgIG9yZGVyIDogMSxcclxuICAgIG9yZGluYXJ5IDogMSxcclxuICAgIG9yZ2FuaWMgOiAxLFxyXG4gICAgb3JnYW5pemF0aW9uIDogMSxcclxuICAgIG9yZ2FuaXplIDogMSxcclxuICAgIG9yaWVudGF0aW9uIDogMSxcclxuICAgIG9yaWdpbiA6IDEsXHJcbiAgICBvcmlnaW5hbCA6IDEsXHJcbiAgICBvcmlnaW5hbGx5IDogMSxcclxuICAgIG90aGVyIDogMSxcclxuICAgIG90aGVycyA6IDEsXHJcbiAgICBvdGhlcndpc2UgOiAxLFxyXG4gICAgb3VnaHQgOiAxLFxyXG4gICAgb3VyIDogMSxcclxuICAgIG91cnNlbHZlcyA6IDEsXHJcbiAgICBvdXQgOiAxLFxyXG4gICAgb3V0Y29tZSA6IDEsXHJcbiAgICBvdXRzaWRlIDogMSxcclxuICAgIG92ZW4gOiAxLFxyXG4gICAgb3ZlciA6IDEsXHJcbiAgICBvdmVyYWxsIDogMSxcclxuICAgIG92ZXJjb21lIDogMSxcclxuICAgIG92ZXJsb29rIDogMSxcclxuICAgIG93ZSA6IDEsXHJcbiAgICBvd24gOiAxLFxyXG4gICAgb3duZXIgOiAxLFxyXG4gICAgcGFjZSA6IDEsXHJcbiAgICBwYWNrIDogMSxcclxuICAgIHBhY2thZ2UgOiAxLFxyXG4gICAgcGFnZSA6IDEsXHJcbiAgICBwYWluIDogMSxcclxuICAgIHBhaW5mdWwgOiAxLFxyXG4gICAgcGFpbnQgOiAxLFxyXG4gICAgcGFpbnRlciA6IDEsXHJcbiAgICBwYWludGluZyA6IDEsXHJcbiAgICBwYWlyIDogMSxcclxuICAgIHBhbGUgOiAxLFxyXG4gICAgUGFsZXN0aW5pYW4gOiAxLFxyXG4gICAgcGFsbSA6IDEsXHJcbiAgICBwYW4gOiAxLFxyXG4gICAgcGFuZWwgOiAxLFxyXG4gICAgcGFudCA6IDEsXHJcbiAgICBwYXBlciA6IDEsXHJcbiAgICBwYXJlbnQgOiAxLFxyXG4gICAgcGFyayA6IDEsXHJcbiAgICBwYXJraW5nIDogMSxcclxuICAgIHBhcnQgOiAxLFxyXG4gICAgcGFydGljaXBhbnQgOiAxLFxyXG4gICAgcGFydGljaXBhdGUgOiAxLFxyXG4gICAgcGFydGljaXBhdGlvbiA6IDEsXHJcbiAgICBwYXJ0aWN1bGFyIDogMSxcclxuICAgIHBhcnRpY3VsYXJseSA6IDEsXHJcbiAgICBwYXJ0bHkgOiAxLFxyXG4gICAgcGFydG5lciA6IDEsXHJcbiAgICBwYXJ0bmVyc2hpcCA6IDEsXHJcbiAgICBwYXJ0eSA6IDEsXHJcbiAgICBwYXNzIDogMSxcclxuICAgIHBhc3NhZ2UgOiAxLFxyXG4gICAgcGFzc2VuZ2VyIDogMSxcclxuICAgIHBhc3Npb24gOiAxLFxyXG4gICAgcGFzdCA6IDEsXHJcbiAgICBwYXRjaCA6IDEsXHJcbiAgICBwYXRoIDogMSxcclxuICAgIHBhdGllbnQgOiAxLFxyXG4gICAgcGF0dGVybiA6IDEsXHJcbiAgICBwYXVzZSA6IDEsXHJcbiAgICBwYXkgOiAxLFxyXG4gICAgcGF5bWVudCA6IDEsXHJcbiAgICBQQyA6IDEsXHJcbiAgICBwZWFjZSA6IDEsXHJcbiAgICBwZWFrIDogMSxcclxuICAgIHBlZXIgOiAxLFxyXG4gICAgcGVuYWx0eSA6IDEsXHJcbiAgICBwZW9wbGUgOiAxLFxyXG4gICAgcGVwcGVyIDogMSxcclxuICAgIHBlciA6IDEsXHJcbiAgICBwZXJjZWl2ZSA6IDEsXHJcbiAgICBwZXJjZW50YWdlIDogMSxcclxuICAgIHBlcmNlcHRpb24gOiAxLFxyXG4gICAgcGVyZmVjdCA6IDEsXHJcbiAgICBwZXJmZWN0bHkgOiAxLFxyXG4gICAgcGVyZm9ybSA6IDEsXHJcbiAgICBwZXJmb3JtYW5jZSA6IDEsXHJcbiAgICBwZXJoYXBzIDogMSxcclxuICAgIHBlcmlvZCA6IDEsXHJcbiAgICBwZXJtYW5lbnQgOiAxLFxyXG4gICAgcGVybWlzc2lvbiA6IDEsXHJcbiAgICBwZXJtaXQgOiAxLFxyXG4gICAgcGVyc29uIDogMSxcclxuICAgIHBlcnNvbmFsIDogMSxcclxuICAgIHBlcnNvbmFsaXR5IDogMSxcclxuICAgIHBlcnNvbmFsbHkgOiAxLFxyXG4gICAgcGVyc29ubmVsIDogMSxcclxuICAgIHBlcnNwZWN0aXZlIDogMSxcclxuICAgIHBlcnN1YWRlIDogMSxcclxuICAgIHBldCA6IDEsXHJcbiAgICBwaGFzZSA6IDEsXHJcbiAgICBwaGVub21lbm9uIDogMSxcclxuICAgIHBoaWxvc29waHkgOiAxLFxyXG4gICAgcGhvbmUgOiAxLFxyXG4gICAgcGhvdG8gOiAxLFxyXG4gICAgcGhvdG9ncmFwaCA6IDEsXHJcbiAgICBwaG90b2dyYXBoZXIgOiAxLFxyXG4gICAgcGhyYXNlIDogMSxcclxuICAgIHBoeXNpY2FsIDogMSxcclxuICAgIHBoeXNpY2FsbHkgOiAxLFxyXG4gICAgcGh5c2ljaWFuIDogMSxcclxuICAgIHBpYW5vIDogMSxcclxuICAgIHBpY2sgOiAxLFxyXG4gICAgcGljdHVyZSA6IDEsXHJcbiAgICBwaWUgOiAxLFxyXG4gICAgcGllY2UgOiAxLFxyXG4gICAgcGlsZSA6IDEsXHJcbiAgICBwaWxvdCA6IDEsXHJcbiAgICBwaW5lIDogMSxcclxuICAgIHBpbmsgOiAxLFxyXG4gICAgcGlwZSA6IDEsXHJcbiAgICBwaXRjaCA6IDEsXHJcbiAgICBwbGFjZSA6IDEsXHJcbiAgICBwbGFuIDogMSxcclxuICAgIHBsYW5lIDogMSxcclxuICAgIHBsYW5ldCA6IDEsXHJcbiAgICBwbGFubmluZyA6IDEsXHJcbiAgICBwbGFudCA6IDEsXHJcbiAgICBwbGFzdGljIDogMSxcclxuICAgIHBsYXRlIDogMSxcclxuICAgIHBsYXRmb3JtIDogMSxcclxuICAgIHBsYXkgOiAxLFxyXG4gICAgcGxheWVyIDogMSxcclxuICAgIHBsZWFzZSA6IDEsXHJcbiAgICBwbGVhc3VyZSA6IDEsXHJcbiAgICBwbGVudHkgOiAxLFxyXG4gICAgcGxvdCA6IDEsXHJcbiAgICBwbHVzIDogMSxcclxuICAgIFBNIDogMSxcclxuICAgIHBvY2tldCA6IDEsXHJcbiAgICBwb2VtIDogMSxcclxuICAgIHBvZXQgOiAxLFxyXG4gICAgcG9ldHJ5IDogMSxcclxuICAgIHBvaW50IDogMSxcclxuICAgIHBvbGUgOiAxLFxyXG4gICAgcG9saWNlIDogMSxcclxuICAgIHBvbGljeSA6IDEsXHJcbiAgICBwb2xpdGljYWwgOiAxLFxyXG4gICAgcG9saXRpY2FsbHkgOiAxLFxyXG4gICAgcG9saXRpY2lhbiA6IDEsXHJcbiAgICBwb2xpdGljcyA6IDEsXHJcbiAgICBwb2xsIDogMSxcclxuICAgIHBvbGx1dGlvbiA6IDEsXHJcbiAgICBwb29sIDogMSxcclxuICAgIHBvb3IgOiAxLFxyXG4gICAgcG9wIDogMSxcclxuICAgIHBvcHVsYXIgOiAxLFxyXG4gICAgcG9wdWxhdGlvbiA6IDEsXHJcbiAgICBwb3JjaCA6IDEsXHJcbiAgICBwb3J0IDogMSxcclxuICAgIHBvcnRpb24gOiAxLFxyXG4gICAgcG9ydHJhaXQgOiAxLFxyXG4gICAgcG9ydHJheSA6IDEsXHJcbiAgICBwb3NlIDogMSxcclxuICAgIHBvc2l0aW9uIDogMSxcclxuICAgIHBvc2l0aXZlIDogMSxcclxuICAgIHBvc3Nlc3MgOiAxLFxyXG4gICAgcG9zc2liaWxpdHkgOiAxLFxyXG4gICAgcG9zc2libGUgOiAxLFxyXG4gICAgcG9zc2libHkgOiAxLFxyXG4gICAgcG9zdCA6IDEsXHJcbiAgICBwb3QgOiAxLFxyXG4gICAgcG90YXRvIDogMSxcclxuICAgIHBvdGVudGlhbCA6IDEsXHJcbiAgICBwb3RlbnRpYWxseSA6IDEsXHJcbiAgICBwb3VuZCA6IDEsXHJcbiAgICBwb3VyIDogMSxcclxuICAgIHBvdmVydHkgOiAxLFxyXG4gICAgcG93ZGVyIDogMSxcclxuICAgIHBvd2VyIDogMSxcclxuICAgIHBvd2VyZnVsIDogMSxcclxuICAgIHByYWN0aWNhbCA6IDEsXHJcbiAgICBwcmFjdGljZSA6IDEsXHJcbiAgICBwcmF5IDogMSxcclxuICAgIHByYXllciA6IDEsXHJcbiAgICBwcmVjaXNlbHkgOiAxLFxyXG4gICAgcHJlZGljdCA6IDEsXHJcbiAgICBwcmVmZXIgOiAxLFxyXG4gICAgcHJlZmVyZW5jZSA6IDEsXHJcbiAgICBwcmVnbmFuY3kgOiAxLFxyXG4gICAgcHJlZ25hbnQgOiAxLFxyXG4gICAgcHJlcGFyYXRpb24gOiAxLFxyXG4gICAgcHJlcGFyZSA6IDEsXHJcbiAgICBwcmVzY3JpcHRpb24gOiAxLFxyXG4gICAgcHJlc2VuY2UgOiAxLFxyXG4gICAgcHJlc2VudCA6IDEsXHJcbiAgICBwcmVzZW50YXRpb24gOiAxLFxyXG4gICAgcHJlc2VydmUgOiAxLFxyXG4gICAgcHJlc2lkZW50IDogMSxcclxuICAgIHByZXNpZGVudGlhbCA6IDEsXHJcbiAgICBwcmVzcyA6IDEsXHJcbiAgICBwcmVzc3VyZSA6IDEsXHJcbiAgICBwcmV0ZW5kIDogMSxcclxuICAgIHByZXR0eSA6IDEsXHJcbiAgICBwcmV2ZW50IDogMSxcclxuICAgIHByZXZpb3VzIDogMSxcclxuICAgIHByZXZpb3VzbHkgOiAxLFxyXG4gICAgcHJpY2UgOiAxLFxyXG4gICAgcHJpZGUgOiAxLFxyXG4gICAgcHJpZXN0IDogMSxcclxuICAgIHByaW1hcmlseSA6IDEsXHJcbiAgICBwcmltYXJ5IDogMSxcclxuICAgIHByaW1lIDogMSxcclxuICAgIHByaW5jaXBhbCA6IDEsXHJcbiAgICBwcmluY2lwbGUgOiAxLFxyXG4gICAgcHJpbnQgOiAxLFxyXG4gICAgcHJpb3IgOiAxLFxyXG4gICAgcHJpb3JpdHkgOiAxLFxyXG4gICAgcHJpc29uIDogMSxcclxuICAgIHByaXNvbmVyIDogMSxcclxuICAgIHByaXZhY3kgOiAxLFxyXG4gICAgcHJpdmF0ZSA6IDEsXHJcbiAgICBwcm9iYWJseSA6IDEsXHJcbiAgICBwcm9ibGVtIDogMSxcclxuICAgIHByb2NlZHVyZSA6IDEsXHJcbiAgICBwcm9jZWVkIDogMSxcclxuICAgIHByb2Nlc3MgOiAxLFxyXG4gICAgcHJvZHVjZSA6IDEsXHJcbiAgICBwcm9kdWNlciA6IDEsXHJcbiAgICBwcm9kdWN0IDogMSxcclxuICAgIHByb2R1Y3Rpb24gOiAxLFxyXG4gICAgcHJvZmVzc2lvbiA6IDEsXHJcbiAgICBwcm9mZXNzaW9uYWwgOiAxLFxyXG4gICAgcHJvZmVzc29yIDogMSxcclxuICAgIHByb2ZpbGUgOiAxLFxyXG4gICAgcHJvZml0IDogMSxcclxuICAgIHByb2dyYW0gOiAxLFxyXG4gICAgcHJvZ3Jlc3MgOiAxLFxyXG4gICAgcHJvamVjdCA6IDEsXHJcbiAgICBwcm9taW5lbnQgOiAxLFxyXG4gICAgcHJvbWlzZSA6IDEsXHJcbiAgICBwcm9tb3RlIDogMSxcclxuICAgIHByb21wdCA6IDEsXHJcbiAgICBwcm9vZiA6IDEsXHJcbiAgICBwcm9wZXIgOiAxLFxyXG4gICAgcHJvcGVybHkgOiAxLFxyXG4gICAgcHJvcGVydHkgOiAxLFxyXG4gICAgcHJvcG9ydGlvbiA6IDEsXHJcbiAgICBwcm9wb3NhbCA6IDEsXHJcbiAgICBwcm9wb3NlIDogMSxcclxuICAgIHByb3Bvc2VkIDogMSxcclxuICAgIHByb3NlY3V0b3IgOiAxLFxyXG4gICAgcHJvc3BlY3QgOiAxLFxyXG4gICAgcHJvdGVjdCA6IDEsXHJcbiAgICBwcm90ZWN0aW9uIDogMSxcclxuICAgIHByb3RlaW4gOiAxLFxyXG4gICAgcHJvdGVzdCA6IDEsXHJcbiAgICBwcm91ZCA6IDEsXHJcbiAgICBwcm92ZSA6IDEsXHJcbiAgICBwcm92aWRlIDogMSxcclxuICAgIHByb3ZpZGVyIDogMSxcclxuICAgIHByb3ZpbmNlIDogMSxcclxuICAgIHByb3Zpc2lvbiA6IDEsXHJcbiAgICBwc3ljaG9sb2dpY2FsIDogMSxcclxuICAgIHBzeWNob2xvZ2lzdCA6IDEsXHJcbiAgICBwc3ljaG9sb2d5IDogMSxcclxuICAgIHB1YmxpYyA6IDEsXHJcbiAgICBwdWJsaWNhdGlvbiA6IDEsXHJcbiAgICBwdWJsaWNseSA6IDEsXHJcbiAgICBwdWJsaXNoIDogMSxcclxuICAgIHB1Ymxpc2hlciA6IDEsXHJcbiAgICBwdWxsIDogMSxcclxuICAgIHB1bmlzaG1lbnQgOiAxLFxyXG4gICAgcHVyY2hhc2UgOiAxLFxyXG4gICAgcHVyZSA6IDEsXHJcbiAgICBwdXJwb3NlIDogMSxcclxuICAgIHB1cnN1ZSA6IDEsXHJcbiAgICBwdXNoIDogMSxcclxuICAgIHB1dCA6IDEsXHJcbiAgICBxdWFsaWZ5IDogMSxcclxuICAgIHF1YWxpdHkgOiAxLFxyXG4gICAgcXVhcnRlciA6IDEsXHJcbiAgICBxdWFydGVyYmFjayA6IDEsXHJcbiAgICBxdWVzdGlvbiA6IDEsXHJcbiAgICBxdWljayA6IDEsXHJcbiAgICBxdWlja2x5IDogMSxcclxuICAgIHF1aWV0IDogMSxcclxuICAgIHF1aWV0bHkgOiAxLFxyXG4gICAgcXVpdCA6IDEsXHJcbiAgICBxdWl0ZSA6IDEsXHJcbiAgICBxdW90ZSA6IDEsXHJcbiAgICByYWNlIDogMSxcclxuICAgIHJhY2lhbCA6IDEsXHJcbiAgICByYWRpY2FsIDogMSxcclxuICAgIHJhZGlvIDogMSxcclxuICAgIHJhaWwgOiAxLFxyXG4gICAgcmFpbiA6IDEsXHJcbiAgICByYWlzZSA6IDEsXHJcbiAgICByYW5nZSA6IDEsXHJcbiAgICByYW5rIDogMSxcclxuICAgIHJhcGlkIDogMSxcclxuICAgIHJhcGlkbHkgOiAxLFxyXG4gICAgcmFyZSA6IDEsXHJcbiAgICByYXJlbHkgOiAxLFxyXG4gICAgcmF0ZSA6IDEsXHJcbiAgICByYXRoZXIgOiAxLFxyXG4gICAgcmF0aW5nIDogMSxcclxuICAgIHJhdGlvIDogMSxcclxuICAgIHJhdyA6IDEsXHJcbiAgICByZWFjaCA6IDEsXHJcbiAgICByZWFjdCA6IDEsXHJcbiAgICByZWFjdGlvbiA6IDEsXHJcbiAgICByZWFkIDogMSxcclxuICAgIHJlYWRlciA6IDEsXHJcbiAgICByZWFkaW5nIDogMSxcclxuICAgIHJlYWR5IDogMSxcclxuICAgIHJlYWwgOiAxLFxyXG4gICAgcmVhbGl0eSA6IDEsXHJcbiAgICByZWFsaXplIDogMSxcclxuICAgIHJlYWxseSA6IDEsXHJcbiAgICByZWFzb24gOiAxLFxyXG4gICAgcmVhc29uYWJsZSA6IDEsXHJcbiAgICByZWNhbGwgOiAxLFxyXG4gICAgcmVjZWl2ZSA6IDEsXHJcbiAgICByZWNlbnQgOiAxLFxyXG4gICAgcmVjZW50bHkgOiAxLFxyXG4gICAgcmVjaXBlIDogMSxcclxuICAgIHJlY29nbml0aW9uIDogMSxcclxuICAgIHJlY29nbml6ZSA6IDEsXHJcbiAgICByZWNvbW1lbmQgOiAxLFxyXG4gICAgcmVjb21tZW5kYXRpb24gOiAxLFxyXG4gICAgcmVjb3JkIDogMSxcclxuICAgIHJlY29yZGluZyA6IDEsXHJcbiAgICByZWNvdmVyIDogMSxcclxuICAgIHJlY292ZXJ5IDogMSxcclxuICAgIHJlY3J1aXQgOiAxLFxyXG4gICAgcmVkIDogMSxcclxuICAgIHJlZHVjZSA6IDEsXHJcbiAgICByZWR1Y3Rpb24gOiAxLFxyXG4gICAgcmVmZXIgOiAxLFxyXG4gICAgcmVmZXJlbmNlIDogMSxcclxuICAgIHJlZmxlY3QgOiAxLFxyXG4gICAgcmVmbGVjdGlvbiA6IDEsXHJcbiAgICByZWZvcm0gOiAxLFxyXG4gICAgcmVmdWdlZSA6IDEsXHJcbiAgICByZWZ1c2UgOiAxLFxyXG4gICAgcmVnYXJkIDogMSxcclxuICAgIHJlZ2FyZGluZyA6IDEsXHJcbiAgICByZWdhcmRsZXNzIDogMSxcclxuICAgIHJlZ2ltZSA6IDEsXHJcbiAgICByZWdpb24gOiAxLFxyXG4gICAgcmVnaW9uYWwgOiAxLFxyXG4gICAgcmVnaXN0ZXIgOiAxLFxyXG4gICAgcmVndWxhciA6IDEsXHJcbiAgICByZWd1bGFybHkgOiAxLFxyXG4gICAgcmVndWxhdGUgOiAxLFxyXG4gICAgcmVndWxhdGlvbiA6IDEsXHJcbiAgICByZWluZm9yY2UgOiAxLFxyXG4gICAgcmVqZWN0IDogMSxcclxuICAgIHJlbGF0ZSA6IDEsXHJcbiAgICByZWxhdGlvbiA6IDEsXHJcbiAgICByZWxhdGlvbnNoaXAgOiAxLFxyXG4gICAgcmVsYXRpdmUgOiAxLFxyXG4gICAgcmVsYXRpdmVseSA6IDEsXHJcbiAgICByZWxheCA6IDEsXHJcbiAgICByZWxlYXNlIDogMSxcclxuICAgIHJlbGV2YW50IDogMSxcclxuICAgIHJlbGllZiA6IDEsXHJcbiAgICByZWxpZ2lvbiA6IDEsXHJcbiAgICByZWxpZ2lvdXMgOiAxLFxyXG4gICAgcmVseSA6IDEsXHJcbiAgICByZW1haW4gOiAxLFxyXG4gICAgcmVtYWluaW5nIDogMSxcclxuICAgIHJlbWFya2FibGUgOiAxLFxyXG4gICAgcmVtZW1iZXIgOiAxLFxyXG4gICAgcmVtaW5kIDogMSxcclxuICAgIHJlbW90ZSA6IDEsXHJcbiAgICByZW1vdmUgOiAxLFxyXG4gICAgcmVwZWF0IDogMSxcclxuICAgIHJlcGVhdGVkbHkgOiAxLFxyXG4gICAgcmVwbGFjZSA6IDEsXHJcbiAgICByZXBseSA6IDEsXHJcbiAgICByZXBvcnQgOiAxLFxyXG4gICAgcmVwb3J0ZXIgOiAxLFxyXG4gICAgcmVwcmVzZW50IDogMSxcclxuICAgIHJlcHJlc2VudGF0aW9uIDogMSxcclxuICAgIHJlcHJlc2VudGF0aXZlIDogMSxcclxuICAgIFJlcHVibGljYW4gOiAxLFxyXG4gICAgcmVwdXRhdGlvbiA6IDEsXHJcbiAgICByZXF1ZXN0IDogMSxcclxuICAgIHJlcXVpcmUgOiAxLFxyXG4gICAgcmVxdWlyZW1lbnQgOiAxLFxyXG4gICAgcmVzZWFyY2ggOiAxLFxyXG4gICAgcmVzZWFyY2hlciA6IDEsXHJcbiAgICByZXNlbWJsZSA6IDEsXHJcbiAgICByZXNlcnZhdGlvbiA6IDEsXHJcbiAgICByZXNpZGVudCA6IDEsXHJcbiAgICByZXNpc3QgOiAxLFxyXG4gICAgcmVzaXN0YW5jZSA6IDEsXHJcbiAgICByZXNvbHV0aW9uIDogMSxcclxuICAgIHJlc29sdmUgOiAxLFxyXG4gICAgcmVzb3J0IDogMSxcclxuICAgIHJlc291cmNlIDogMSxcclxuICAgIHJlc3BlY3QgOiAxLFxyXG4gICAgcmVzcG9uZCA6IDEsXHJcbiAgICByZXNwb25kZW50IDogMSxcclxuICAgIHJlc3BvbnNlIDogMSxcclxuICAgIHJlc3BvbnNpYmlsaXR5IDogMSxcclxuICAgIHJlc3BvbnNpYmxlIDogMSxcclxuICAgIHJlc3QgOiAxLFxyXG4gICAgcmVzdGF1cmFudCA6IDEsXHJcbiAgICByZXN0b3JlIDogMSxcclxuICAgIHJlc3RyaWN0aW9uIDogMSxcclxuICAgIHJlc3VsdCA6IDEsXHJcbiAgICByZXRhaW4gOiAxLFxyXG4gICAgcmV0aXJlIDogMSxcclxuICAgIHJldGlyZW1lbnQgOiAxLFxyXG4gICAgcmV0dXJuIDogMSxcclxuICAgIHJldmVhbCA6IDEsXHJcbiAgICByZXZlbnVlIDogMSxcclxuICAgIHJldmlldyA6IDEsXHJcbiAgICByZXZvbHV0aW9uIDogMSxcclxuICAgIHJoeXRobSA6IDEsXHJcbiAgICByaWNlIDogMSxcclxuICAgIHJpY2ggOiAxLFxyXG4gICAgcmlkIDogMSxcclxuICAgIHJpZGUgOiAxLFxyXG4gICAgcmlmbGUgOiAxLFxyXG4gICAgcmlnaHQgOiAxLFxyXG4gICAgcmluZyA6IDEsXHJcbiAgICByaXNlIDogMSxcclxuICAgIHJpc2sgOiAxLFxyXG4gICAgcml2ZXIgOiAxLFxyXG4gICAgcm9hZCA6IDEsXHJcbiAgICByb2NrIDogMSxcclxuICAgIHJvbGUgOiAxLFxyXG4gICAgcm9sbCA6IDEsXHJcbiAgICByb21hbnRpYyA6IDEsXHJcbiAgICByb29mIDogMSxcclxuICAgIHJvb20gOiAxLFxyXG4gICAgcm9vdCA6IDEsXHJcbiAgICByb3BlIDogMSxcclxuICAgIHJvc2UgOiAxLFxyXG4gICAgcm91Z2ggOiAxLFxyXG4gICAgcm91Z2hseSA6IDEsXHJcbiAgICByb3VuZCA6IDEsXHJcbiAgICByb3V0ZSA6IDEsXHJcbiAgICByb3V0aW5lIDogMSxcclxuICAgIHJvdyA6IDEsXHJcbiAgICBydWIgOiAxLFxyXG4gICAgcnVsZSA6IDEsXHJcbiAgICBydW4gOiAxLFxyXG4gICAgcnVubmluZyA6IDEsXHJcbiAgICBydXJhbCA6IDEsXHJcbiAgICBydXNoIDogMSxcclxuICAgIFJ1c3NpYW4gOiAxLFxyXG4gICAgc2FjcmVkIDogMSxcclxuICAgIHNhZCA6IDEsXHJcbiAgICBzYWZlIDogMSxcclxuICAgIHNhZmV0eSA6IDEsXHJcbiAgICBzYWtlIDogMSxcclxuICAgIHNhbGFkIDogMSxcclxuICAgIHNhbGFyeSA6IDEsXHJcbiAgICBzYWxlIDogMSxcclxuICAgIHNhbGVzIDogMSxcclxuICAgIHNhbHQgOiAxLFxyXG4gICAgc2FtZSA6IDEsXHJcbiAgICBzYW1wbGUgOiAxLFxyXG4gICAgc2FuY3Rpb24gOiAxLFxyXG4gICAgc2FuZCA6IDEsXHJcbiAgICBzYXRlbGxpdGUgOiAxLFxyXG4gICAgc2F0aXNmYWN0aW9uIDogMSxcclxuICAgIHNhdGlzZnkgOiAxLFxyXG4gICAgc2F1Y2UgOiAxLFxyXG4gICAgc2F2ZSA6IDEsXHJcbiAgICBzYXZpbmcgOiAxLFxyXG4gICAgc2F5IDogMSxcclxuICAgIHNjYWxlIDogMSxcclxuICAgIHNjYW5kYWwgOiAxLFxyXG4gICAgc2NhcmVkIDogMSxcclxuICAgIHNjZW5hcmlvIDogMSxcclxuICAgIHNjZW5lIDogMSxcclxuICAgIHNjaGVkdWxlIDogMSxcclxuICAgIHNjaGVtZSA6IDEsXHJcbiAgICBzY2hvbGFyIDogMSxcclxuICAgIHNjaG9sYXJzaGlwIDogMSxcclxuICAgIHNjaG9vbCA6IDEsXHJcbiAgICBzY2llbmNlIDogMSxcclxuICAgIHNjaWVudGlmaWMgOiAxLFxyXG4gICAgc2NpZW50aXN0IDogMSxcclxuICAgIHNjb3BlIDogMSxcclxuICAgIHNjb3JlIDogMSxcclxuICAgIHNjcmVhbSA6IDEsXHJcbiAgICBzY3JlZW4gOiAxLFxyXG4gICAgc2NyaXB0IDogMSxcclxuICAgIHNlYSA6IDEsXHJcbiAgICBzZWFyY2ggOiAxLFxyXG4gICAgc2Vhc29uIDogMSxcclxuICAgIHNlYXQgOiAxLFxyXG4gICAgc2Vjb25kIDogMSxcclxuICAgIHNlY3JldCA6IDEsXHJcbiAgICBzZWNyZXRhcnkgOiAxLFxyXG4gICAgc2VjdGlvbiA6IDEsXHJcbiAgICBzZWN0b3IgOiAxLFxyXG4gICAgc2VjdXJlIDogMSxcclxuICAgIHNlY3VyaXR5IDogMSxcclxuICAgIHNlZSA6IDEsXHJcbiAgICBzZWVkIDogMSxcclxuICAgIHNlZWsgOiAxLFxyXG4gICAgc2VlbSA6IDEsXHJcbiAgICBzZWdtZW50IDogMSxcclxuICAgIHNlaXplIDogMSxcclxuICAgIHNlbGVjdCA6IDEsXHJcbiAgICBzZWxlY3Rpb24gOiAxLFxyXG4gICAgc2VsZiA6IDEsXHJcbiAgICBzZWxsIDogMSxcclxuICAgIFNlbmF0ZSA6IDEsXHJcbiAgICBzZW5hdG9yIDogMSxcclxuICAgIHNlbmQgOiAxLFxyXG4gICAgc2VuaW9yIDogMSxcclxuICAgIHNlbnNlIDogMSxcclxuICAgIHNlbnNpdGl2ZSA6IDEsXHJcbiAgICBzZW50ZW5jZSA6IDEsXHJcbiAgICBzZXBhcmF0ZSA6IDEsXHJcbiAgICBzZXF1ZW5jZSA6IDEsXHJcbiAgICBzZXJpZXMgOiAxLFxyXG4gICAgc2VyaW91cyA6IDEsXHJcbiAgICBzZXJpb3VzbHkgOiAxLFxyXG4gICAgc2VydmUgOiAxLFxyXG4gICAgc2VydmljZSA6IDEsXHJcbiAgICBzZXNzaW9uIDogMSxcclxuICAgIHNldCA6IDEsXHJcbiAgICBzZXR0aW5nIDogMSxcclxuICAgIHNldHRsZSA6IDEsXHJcbiAgICBzZXR0bGVtZW50IDogMSxcclxuICAgIHNldmVuIDogMSxcclxuICAgIHNldmVyYWwgOiAxLFxyXG4gICAgc2V2ZXJlIDogMSxcclxuICAgIHNleCA6IDEsXHJcbiAgICBzZXh1YWwgOiAxLFxyXG4gICAgc2hhZGUgOiAxLFxyXG4gICAgc2hhZG93IDogMSxcclxuICAgIHNoYWtlIDogMSxcclxuICAgIHNoYWxsIDogMSxcclxuICAgIHNoYXBlIDogMSxcclxuICAgIHNoYXJlIDogMSxcclxuICAgIHNoYXJwIDogMSxcclxuICAgIHNoZSA6IDEsXHJcbiAgICBzaGVldCA6IDEsXHJcbiAgICBzaGVsZiA6IDEsXHJcbiAgICBzaGVsbCA6IDEsXHJcbiAgICBzaGVsdGVyIDogMSxcclxuICAgIHNoaWZ0IDogMSxcclxuICAgIHNoaW5lIDogMSxcclxuICAgIHNoaXAgOiAxLFxyXG4gICAgc2hpcnQgOiAxLFxyXG4gICAgc2hpdCA6IDEsXHJcbiAgICBzaG9jayA6IDEsXHJcbiAgICBzaG9lIDogMSxcclxuICAgIHNob290IDogMSxcclxuICAgIHNob290aW5nIDogMSxcclxuICAgIHNob3AgOiAxLFxyXG4gICAgc2hvcHBpbmcgOiAxLFxyXG4gICAgc2hvcmUgOiAxLFxyXG4gICAgc2hvcnQgOiAxLFxyXG4gICAgc2hvcnRseSA6IDEsXHJcbiAgICBzaG90IDogMSxcclxuICAgIHNob3VsZCA6IDEsXHJcbiAgICBzaG91bGRlciA6IDEsXHJcbiAgICBzaG91dCA6IDEsXHJcbiAgICBzaG93IDogMSxcclxuICAgIHNob3dlciA6IDEsXHJcbiAgICBzaHJ1ZyA6IDEsXHJcbiAgICBzaHV0IDogMSxcclxuICAgIHNpY2sgOiAxLFxyXG4gICAgc2lkZSA6IDEsXHJcbiAgICBzaWdoIDogMSxcclxuICAgIHNpZ2h0IDogMSxcclxuICAgIHNpZ24gOiAxLFxyXG4gICAgc2lnbmFsIDogMSxcclxuICAgIHNpZ25pZmljYW5jZSA6IDEsXHJcbiAgICBzaWduaWZpY2FudCA6IDEsXHJcbiAgICBzaWduaWZpY2FudGx5IDogMSxcclxuICAgIHNpbGVuY2UgOiAxLFxyXG4gICAgc2lsZW50IDogMSxcclxuICAgIHNpbHZlciA6IDEsXHJcbiAgICBzaW1pbGFyIDogMSxcclxuICAgIHNpbWlsYXJseSA6IDEsXHJcbiAgICBzaW1wbGUgOiAxLFxyXG4gICAgc2ltcGx5IDogMSxcclxuICAgIHNpbiA6IDEsXHJcbiAgICBzaW5jZSA6IDEsXHJcbiAgICBzaW5nIDogMSxcclxuICAgIHNpbmdlciA6IDEsXHJcbiAgICBzaW5nbGUgOiAxLFxyXG4gICAgc2luayA6IDEsXHJcbiAgICBzaXIgOiAxLFxyXG4gICAgc2lzdGVyIDogMSxcclxuICAgIHNpdCA6IDEsXHJcbiAgICBzaXRlIDogMSxcclxuICAgIHNpdHVhdGlvbiA6IDEsXHJcbiAgICBzaXggOiAxLFxyXG4gICAgc2l6ZSA6IDEsXHJcbiAgICBza2kgOiAxLFxyXG4gICAgc2tpbGwgOiAxLFxyXG4gICAgc2tpbiA6IDEsXHJcbiAgICBza3kgOiAxLFxyXG4gICAgc2xhdmUgOiAxLFxyXG4gICAgc2xlZXAgOiAxLFxyXG4gICAgc2xpY2UgOiAxLFxyXG4gICAgc2xpZGUgOiAxLFxyXG4gICAgc2xpZ2h0IDogMSxcclxuICAgIHNsaWdodGx5IDogMSxcclxuICAgIHNsaXAgOiAxLFxyXG4gICAgc2xvdyA6IDEsXHJcbiAgICBzbG93bHkgOiAxLFxyXG4gICAgc21hbGwgOiAxLFxyXG4gICAgc21hcnQgOiAxLFxyXG4gICAgc21lbGwgOiAxLFxyXG4gICAgc21pbGUgOiAxLFxyXG4gICAgc21va2UgOiAxLFxyXG4gICAgc21vb3RoIDogMSxcclxuICAgIHNuYXAgOiAxLFxyXG4gICAgc25vdyA6IDEsXHJcbiAgICBzbyA6IDEsXHJcbiAgICBcInNvLWNhbGxlZFwiIDogMSxcclxuICAgIHNvY2NlciA6IDEsXHJcbiAgICBzb2NpYWwgOiAxLFxyXG4gICAgc29jaWV0eSA6IDEsXHJcbiAgICBzb2Z0IDogMSxcclxuICAgIHNvZnR3YXJlIDogMSxcclxuICAgIHNvaWwgOiAxLFxyXG4gICAgc29sYXIgOiAxLFxyXG4gICAgc29sZGllciA6IDEsXHJcbiAgICBzb2xpZCA6IDEsXHJcbiAgICBzb2x1dGlvbiA6IDEsXHJcbiAgICBzb2x2ZSA6IDEsXHJcbiAgICBzb21lIDogMSxcclxuICAgIHNvbWVib2R5IDogMSxcclxuICAgIHNvbWVob3cgOiAxLFxyXG4gICAgc29tZW9uZSA6IDEsXHJcbiAgICBzb21ldGhpbmcgOiAxLFxyXG4gICAgc29tZXRpbWVzIDogMSxcclxuICAgIHNvbWV3aGF0IDogMSxcclxuICAgIHNvbWV3aGVyZSA6IDEsXHJcbiAgICBzb24gOiAxLFxyXG4gICAgc29uZyA6IDEsXHJcbiAgICBzb29uIDogMSxcclxuICAgIHNvcGhpc3RpY2F0ZWQgOiAxLFxyXG4gICAgc29ycnkgOiAxLFxyXG4gICAgc29ydCA6IDEsXHJcbiAgICBzb3VsIDogMSxcclxuICAgIHNvdW5kIDogMSxcclxuICAgIHNvdXAgOiAxLFxyXG4gICAgc291cmNlIDogMSxcclxuICAgIHNvdXRoIDogMSxcclxuICAgIHNvdXRoZXJuIDogMSxcclxuICAgIFNvdmlldCA6IDEsXHJcbiAgICBzcGFjZSA6IDEsXHJcbiAgICBTcGFuaXNoIDogMSxcclxuICAgIHNwZWFrIDogMSxcclxuICAgIHNwZWFrZXIgOiAxLFxyXG4gICAgc3BlY2lhbCA6IDEsXHJcbiAgICBzcGVjaWFsaXN0IDogMSxcclxuICAgIHNwZWNpZXMgOiAxLFxyXG4gICAgc3BlY2lmaWMgOiAxLFxyXG4gICAgc3BlY2lmaWNhbGx5IDogMSxcclxuICAgIHNwZWVjaCA6IDEsXHJcbiAgICBzcGVlZCA6IDEsXHJcbiAgICBzcGVuZCA6IDEsXHJcbiAgICBzcGVuZGluZyA6IDEsXHJcbiAgICBzcGluIDogMSxcclxuICAgIHNwaXJpdCA6IDEsXHJcbiAgICBzcGlyaXR1YWwgOiAxLFxyXG4gICAgc3BsaXQgOiAxLFxyXG4gICAgc3Bva2VzbWFuIDogMSxcclxuICAgIHNwb3J0IDogMSxcclxuICAgIHNwb3QgOiAxLFxyXG4gICAgc3ByZWFkIDogMSxcclxuICAgIHNwcmluZyA6IDEsXHJcbiAgICBzcXVhcmUgOiAxLFxyXG4gICAgc3F1ZWV6ZSA6IDEsXHJcbiAgICBzdGFiaWxpdHkgOiAxLFxyXG4gICAgc3RhYmxlIDogMSxcclxuICAgIHN0YWZmIDogMSxcclxuICAgIHN0YWdlIDogMSxcclxuICAgIHN0YWlyIDogMSxcclxuICAgIHN0YWtlIDogMSxcclxuICAgIHN0YW5kIDogMSxcclxuICAgIHN0YW5kYXJkIDogMSxcclxuICAgIHN0YW5kaW5nIDogMSxcclxuICAgIHN0YXIgOiAxLFxyXG4gICAgc3RhcmUgOiAxLFxyXG4gICAgc3RhcnQgOiAxLFxyXG4gICAgc3RhdGUgOiAxLFxyXG4gICAgc3RhdGVtZW50IDogMSxcclxuICAgIHN0YXRpb24gOiAxLFxyXG4gICAgc3RhdGlzdGljcyA6IDEsXHJcbiAgICBzdGF0dXMgOiAxLFxyXG4gICAgc3RheSA6IDEsXHJcbiAgICBzdGVhZHkgOiAxLFxyXG4gICAgc3RlYWwgOiAxLFxyXG4gICAgc3RlZWwgOiAxLFxyXG4gICAgc3RlcCA6IDEsXHJcbiAgICBzdGljayA6IDEsXHJcbiAgICBzdGlsbCA6IDEsXHJcbiAgICBzdGlyIDogMSxcclxuICAgIHN0b2NrIDogMSxcclxuICAgIHN0b21hY2ggOiAxLFxyXG4gICAgc3RvbmUgOiAxLFxyXG4gICAgc3RvcCA6IDEsXHJcbiAgICBzdG9yYWdlIDogMSxcclxuICAgIHN0b3JlIDogMSxcclxuICAgIHN0b3JtIDogMSxcclxuICAgIHN0b3J5IDogMSxcclxuICAgIHN0cmFpZ2h0IDogMSxcclxuICAgIHN0cmFuZ2UgOiAxLFxyXG4gICAgc3RyYW5nZXIgOiAxLFxyXG4gICAgc3RyYXRlZ2ljIDogMSxcclxuICAgIHN0cmF0ZWd5IDogMSxcclxuICAgIHN0cmVhbSA6IDEsXHJcbiAgICBzdHJlZXQgOiAxLFxyXG4gICAgc3RyZW5ndGggOiAxLFxyXG4gICAgc3RyZW5ndGhlbiA6IDEsXHJcbiAgICBzdHJlc3MgOiAxLFxyXG4gICAgc3RyZXRjaCA6IDEsXHJcbiAgICBzdHJpa2UgOiAxLFxyXG4gICAgc3RyaW5nIDogMSxcclxuICAgIHN0cmlwIDogMSxcclxuICAgIHN0cm9rZSA6IDEsXHJcbiAgICBzdHJvbmcgOiAxLFxyXG4gICAgc3Ryb25nbHkgOiAxLFxyXG4gICAgc3RydWN0dXJlIDogMSxcclxuICAgIHN0cnVnZ2xlIDogMSxcclxuICAgIHN0dWRlbnQgOiAxLFxyXG4gICAgc3R1ZGlvIDogMSxcclxuICAgIHN0dWR5IDogMSxcclxuICAgIHN0dWZmIDogMSxcclxuICAgIHN0dXBpZCA6IDEsXHJcbiAgICBzdHlsZSA6IDEsXHJcbiAgICBzdWJqZWN0IDogMSxcclxuICAgIHN1Ym1pdCA6IDEsXHJcbiAgICBzdWJzZXF1ZW50IDogMSxcclxuICAgIHN1YnN0YW5jZSA6IDEsXHJcbiAgICBzdWJzdGFudGlhbCA6IDEsXHJcbiAgICBzdWNjZWVkIDogMSxcclxuICAgIHN1Y2Nlc3MgOiAxLFxyXG4gICAgc3VjY2Vzc2Z1bCA6IDEsXHJcbiAgICBzdWNjZXNzZnVsbHkgOiAxLFxyXG4gICAgc3VjaCA6IDEsXHJcbiAgICBzdWRkZW4gOiAxLFxyXG4gICAgc3VkZGVubHkgOiAxLFxyXG4gICAgc3VlIDogMSxcclxuICAgIHN1ZmZlciA6IDEsXHJcbiAgICBzdWZmaWNpZW50IDogMSxcclxuICAgIHN1Z2FyIDogMSxcclxuICAgIHN1Z2dlc3QgOiAxLFxyXG4gICAgc3VnZ2VzdGlvbiA6IDEsXHJcbiAgICBzdWljaWRlIDogMSxcclxuICAgIHN1aXQgOiAxLFxyXG4gICAgc3VtbWVyIDogMSxcclxuICAgIHN1bW1pdCA6IDEsXHJcbiAgICBzdW4gOiAxLFxyXG4gICAgc3VwZXIgOiAxLFxyXG4gICAgc3VwcGx5IDogMSxcclxuICAgIHN1cHBvcnQgOiAxLFxyXG4gICAgc3VwcG9ydGVyIDogMSxcclxuICAgIHN1cHBvc2UgOiAxLFxyXG4gICAgc3VwcG9zZWQgOiAxLFxyXG4gICAgU3VwcmVtZSA6IDEsXHJcbiAgICBzdXJlIDogMSxcclxuICAgIHN1cmVseSA6IDEsXHJcbiAgICBzdXJmYWNlIDogMSxcclxuICAgIHN1cmdlcnkgOiAxLFxyXG4gICAgc3VycHJpc2UgOiAxLFxyXG4gICAgc3VycHJpc2VkIDogMSxcclxuICAgIHN1cnByaXNpbmcgOiAxLFxyXG4gICAgc3VycHJpc2luZ2x5IDogMSxcclxuICAgIHN1cnJvdW5kIDogMSxcclxuICAgIHN1cnZleSA6IDEsXHJcbiAgICBzdXJ2aXZhbCA6IDEsXHJcbiAgICBzdXJ2aXZlIDogMSxcclxuICAgIHN1cnZpdm9yIDogMSxcclxuICAgIHN1c3BlY3QgOiAxLFxyXG4gICAgc3VzdGFpbiA6IDEsXHJcbiAgICBzd2VhciA6IDEsXHJcbiAgICBzd2VlcCA6IDEsXHJcbiAgICBzd2VldCA6IDEsXHJcbiAgICBzd2ltIDogMSxcclxuICAgIHN3aW5nIDogMSxcclxuICAgIHN3aXRjaCA6IDEsXHJcbiAgICBzeW1ib2wgOiAxLFxyXG4gICAgc3ltcHRvbSA6IDEsXHJcbiAgICBzeXN0ZW0gOiAxLFxyXG4gICAgdGFibGUgOiAxLFxyXG4gICAgdGFibGVzcG9vbiA6IDEsXHJcbiAgICB0YWN0aWMgOiAxLFxyXG4gICAgdGFpbCA6IDEsXHJcbiAgICB0YWtlIDogMSxcclxuICAgIHRhbGUgOiAxLFxyXG4gICAgdGFsZW50IDogMSxcclxuICAgIHRhbGsgOiAxLFxyXG4gICAgdGFsbCA6IDEsXHJcbiAgICB0YW5rIDogMSxcclxuICAgIHRhcCA6IDEsXHJcbiAgICB0YXBlIDogMSxcclxuICAgIHRhcmdldCA6IDEsXHJcbiAgICB0YXNrIDogMSxcclxuICAgIHRhc3RlIDogMSxcclxuICAgIHRheCA6IDEsXHJcbiAgICB0YXhwYXllciA6IDEsXHJcbiAgICB0ZWEgOiAxLFxyXG4gICAgdGVhY2ggOiAxLFxyXG4gICAgdGVhY2hlciA6IDEsXHJcbiAgICB0ZWFjaGluZyA6IDEsXHJcbiAgICB0ZWFtIDogMSxcclxuICAgIHRlYXIgOiAxLFxyXG4gICAgdGVhc3Bvb24gOiAxLFxyXG4gICAgdGVjaG5pY2FsIDogMSxcclxuICAgIHRlY2huaXF1ZSA6IDEsXHJcbiAgICB0ZWNobm9sb2d5IDogMSxcclxuICAgIHRlZW4gOiAxLFxyXG4gICAgdGVlbmFnZXIgOiAxLFxyXG4gICAgdGVsZXBob25lIDogMSxcclxuICAgIHRlbGVzY29wZSA6IDEsXHJcbiAgICB0ZWxldmlzaW9uIDogMSxcclxuICAgIHRlbGwgOiAxLFxyXG4gICAgdGVtcGVyYXR1cmUgOiAxLFxyXG4gICAgdGVtcG9yYXJ5IDogMSxcclxuICAgIHRlbiA6IDEsXHJcbiAgICB0ZW5kIDogMSxcclxuICAgIHRlbmRlbmN5IDogMSxcclxuICAgIHRlbm5pcyA6IDEsXHJcbiAgICB0ZW5zaW9uIDogMSxcclxuICAgIHRlbnQgOiAxLFxyXG4gICAgdGVybSA6IDEsXHJcbiAgICB0ZXJtcyA6IDEsXHJcbiAgICB0ZXJyaWJsZSA6IDEsXHJcbiAgICB0ZXJyaXRvcnkgOiAxLFxyXG4gICAgdGVycm9yIDogMSxcclxuICAgIHRlcnJvcmlzbSA6IDEsXHJcbiAgICB0ZXJyb3Jpc3QgOiAxLFxyXG4gICAgdGVzdCA6IDEsXHJcbiAgICB0ZXN0aWZ5IDogMSxcclxuICAgIHRlc3RpbW9ueSA6IDEsXHJcbiAgICB0ZXN0aW5nIDogMSxcclxuICAgIHRleHQgOiAxLFxyXG4gICAgdGhhbiA6IDEsXHJcbiAgICB0aGFuayA6IDEsXHJcbiAgICB0aGFua3MgOiAxLFxyXG4gICAgdGhhdCA6IDEsXHJcbiAgICB0aGUgOiAxLFxyXG4gICAgdGhlYXRlciA6IDEsXHJcbiAgICB0aGVpciA6IDEsXHJcbiAgICB0aGVtIDogMSxcclxuICAgIHRoZW1lIDogMSxcclxuICAgIHRoZW1zZWx2ZXMgOiAxLFxyXG4gICAgdGhlbiA6IDEsXHJcbiAgICB0aGVvcnkgOiAxLFxyXG4gICAgdGhlcmFweSA6IDEsXHJcbiAgICB0aGVyZSA6IDEsXHJcbiAgICB0aGVyZWZvcmUgOiAxLFxyXG4gICAgdGhlc2UgOiAxLFxyXG4gICAgdGhleSA6IDEsXHJcbiAgICB0aGljayA6IDEsXHJcbiAgICB0aGluIDogMSxcclxuICAgIHRoaW5nIDogMSxcclxuICAgIHRoaW5rIDogMSxcclxuICAgIHRoaW5raW5nIDogMSxcclxuICAgIHRoaXJkIDogMSxcclxuICAgIHRoaXJ0eSA6IDEsXHJcbiAgICB0aGlzIDogMSxcclxuICAgIHRob3NlIDogMSxcclxuICAgIHRob3VnaCA6IDEsXHJcbiAgICB0aG91Z2h0IDogMSxcclxuICAgIHRob3VzYW5kIDogMSxcclxuICAgIHRocmVhdCA6IDEsXHJcbiAgICB0aHJlYXRlbiA6IDEsXHJcbiAgICB0aHJlZSA6IDEsXHJcbiAgICB0aHJvYXQgOiAxLFxyXG4gICAgdGhyb3VnaCA6IDEsXHJcbiAgICB0aHJvdWdob3V0IDogMSxcclxuICAgIHRocm93IDogMSxcclxuICAgIHRodXMgOiAxLFxyXG4gICAgdGlja2V0IDogMSxcclxuICAgIHRpZSA6IDEsXHJcbiAgICB0aWdodCA6IDEsXHJcbiAgICB0aW1lIDogMSxcclxuICAgIHRpbnkgOiAxLFxyXG4gICAgdGlwIDogMSxcclxuICAgIHRpcmUgOiAxLFxyXG4gICAgdGlyZWQgOiAxLFxyXG4gICAgdGlzc3VlIDogMSxcclxuICAgIHRpdGxlIDogMSxcclxuICAgIHRvIDogMSxcclxuICAgIHRvYmFjY28gOiAxLFxyXG4gICAgdG9kYXkgOiAxLFxyXG4gICAgdG9lIDogMSxcclxuICAgIHRvZ2V0aGVyIDogMSxcclxuICAgIHRvbWF0byA6IDEsXHJcbiAgICB0b21vcnJvdyA6IDEsXHJcbiAgICB0b25lIDogMSxcclxuICAgIHRvbmd1ZSA6IDEsXHJcbiAgICB0b25pZ2h0IDogMSxcclxuICAgIHRvbyA6IDEsXHJcbiAgICB0b29sIDogMSxcclxuICAgIHRvb3RoIDogMSxcclxuICAgIHRvcCA6IDEsXHJcbiAgICB0b3BpYyA6IDEsXHJcbiAgICB0b3NzIDogMSxcclxuICAgIHRvdGFsIDogMSxcclxuICAgIHRvdGFsbHkgOiAxLFxyXG4gICAgdG91Y2ggOiAxLFxyXG4gICAgdG91Z2ggOiAxLFxyXG4gICAgdG91ciA6IDEsXHJcbiAgICB0b3VyaXN0IDogMSxcclxuICAgIHRvdXJuYW1lbnQgOiAxLFxyXG4gICAgdG93YXJkIDogMSxcclxuICAgIHRvd2FyZHMgOiAxLFxyXG4gICAgdG93ZXIgOiAxLFxyXG4gICAgdG93biA6IDEsXHJcbiAgICB0b3kgOiAxLFxyXG4gICAgdHJhY2UgOiAxLFxyXG4gICAgdHJhY2sgOiAxLFxyXG4gICAgdHJhZGUgOiAxLFxyXG4gICAgdHJhZGl0aW9uIDogMSxcclxuICAgIHRyYWRpdGlvbmFsIDogMSxcclxuICAgIHRyYWZmaWMgOiAxLFxyXG4gICAgdHJhZ2VkeSA6IDEsXHJcbiAgICB0cmFpbCA6IDEsXHJcbiAgICB0cmFpbiA6IDEsXHJcbiAgICB0cmFpbmluZyA6IDEsXHJcbiAgICB0cmFuc2ZlciA6IDEsXHJcbiAgICB0cmFuc2Zvcm0gOiAxLFxyXG4gICAgdHJhbnNmb3JtYXRpb24gOiAxLFxyXG4gICAgdHJhbnNpdGlvbiA6IDEsXHJcbiAgICB0cmFuc2xhdGUgOiAxLFxyXG4gICAgdHJhbnNwb3J0YXRpb24gOiAxLFxyXG4gICAgdHJhdmVsIDogMSxcclxuICAgIHRyZWF0IDogMSxcclxuICAgIHRyZWF0bWVudCA6IDEsXHJcbiAgICB0cmVhdHkgOiAxLFxyXG4gICAgdHJlZSA6IDEsXHJcbiAgICB0cmVtZW5kb3VzIDogMSxcclxuICAgIHRyZW5kIDogMSxcclxuICAgIHRyaWFsIDogMSxcclxuICAgIHRyaWJlIDogMSxcclxuICAgIHRyaWNrIDogMSxcclxuICAgIHRyaXAgOiAxLFxyXG4gICAgdHJvb3AgOiAxLFxyXG4gICAgdHJvdWJsZSA6IDEsXHJcbiAgICB0cnVjayA6IDEsXHJcbiAgICB0cnVlIDogMSxcclxuICAgIHRydWx5IDogMSxcclxuICAgIHRydXN0IDogMSxcclxuICAgIHRydXRoIDogMSxcclxuICAgIHRyeSA6IDEsXHJcbiAgICB0dWJlIDogMSxcclxuICAgIHR1bm5lbCA6IDEsXHJcbiAgICB0dXJuIDogMSxcclxuICAgIFRWIDogMSxcclxuICAgIHR3ZWx2ZSA6IDEsXHJcbiAgICB0d2VudHkgOiAxLFxyXG4gICAgdHdpY2UgOiAxLFxyXG4gICAgdHdpbiA6IDEsXHJcbiAgICB0d28gOiAxLFxyXG4gICAgdHlwZSA6IDEsXHJcbiAgICB0eXBpY2FsIDogMSxcclxuICAgIHR5cGljYWxseSA6IDEsXHJcbiAgICB1Z2x5IDogMSxcclxuICAgIHVsdGltYXRlIDogMSxcclxuICAgIHVsdGltYXRlbHkgOiAxLFxyXG4gICAgdW5hYmxlIDogMSxcclxuICAgIHVuY2xlIDogMSxcclxuICAgIHVuZGVyIDogMSxcclxuICAgIHVuZGVyZ28gOiAxLFxyXG4gICAgdW5kZXJzdGFuZCA6IDEsXHJcbiAgICB1bmRlcnN0YW5kaW5nIDogMSxcclxuICAgIHVuZm9ydHVuYXRlbHkgOiAxLFxyXG4gICAgdW5pZm9ybSA6IDEsXHJcbiAgICB1bmlvbiA6IDEsXHJcbiAgICB1bmlxdWUgOiAxLFxyXG4gICAgdW5pdCA6IDEsXHJcbiAgICBVbml0ZWQgOiAxLFxyXG4gICAgdW5pdmVyc2FsIDogMSxcclxuICAgIHVuaXZlcnNlIDogMSxcclxuICAgIHVuaXZlcnNpdHkgOiAxLFxyXG4gICAgdW5rbm93biA6IDEsXHJcbiAgICB1bmxlc3MgOiAxLFxyXG4gICAgdW5saWtlIDogMSxcclxuICAgIHVubGlrZWx5IDogMSxcclxuICAgIHVudGlsIDogMSxcclxuICAgIHVudXN1YWwgOiAxLFxyXG4gICAgdXAgOiAxLFxyXG4gICAgdXBvbiA6IDEsXHJcbiAgICB1cHBlciA6IDEsXHJcbiAgICB1cmJhbiA6IDEsXHJcbiAgICB1cmdlIDogMSxcclxuICAgIHVzIDogMSxcclxuICAgIHVzZSA6IDEsXHJcbiAgICB1c2VkIDogMSxcclxuICAgIHVzZWZ1bCA6IDEsXHJcbiAgICB1c2VyIDogMSxcclxuICAgIHVzdWFsIDogMSxcclxuICAgIHVzdWFsbHkgOiAxLFxyXG4gICAgdXRpbGl0eSA6IDEsXHJcbiAgICB2YWNhdGlvbiA6IDEsXHJcbiAgICB2YWxsZXkgOiAxLFxyXG4gICAgdmFsdWFibGUgOiAxLFxyXG4gICAgdmFsdWUgOiAxLFxyXG4gICAgdmFyaWFibGUgOiAxLFxyXG4gICAgdmFyaWF0aW9uIDogMSxcclxuICAgIHZhcmlldHkgOiAxLFxyXG4gICAgdmFyaW91cyA6IDEsXHJcbiAgICB2YXJ5IDogMSxcclxuICAgIHZhc3QgOiAxLFxyXG4gICAgdmVnZXRhYmxlIDogMSxcclxuICAgIHZlaGljbGUgOiAxLFxyXG4gICAgdmVudHVyZSA6IDEsXHJcbiAgICB2ZXJzaW9uIDogMSxcclxuICAgIHZlcnN1cyA6IDEsXHJcbiAgICB2ZXJ5IDogMSxcclxuICAgIHZlc3NlbCA6IDEsXHJcbiAgICB2ZXRlcmFuIDogMSxcclxuICAgIHZpYSA6IDEsXHJcbiAgICB2aWN0aW0gOiAxLFxyXG4gICAgdmljdG9yeSA6IDEsXHJcbiAgICB2aWRlbyA6IDEsXHJcbiAgICB2aWV3IDogMSxcclxuICAgIHZpZXdlciA6IDEsXHJcbiAgICB2aWxsYWdlIDogMSxcclxuICAgIHZpb2xhdGUgOiAxLFxyXG4gICAgdmlvbGF0aW9uIDogMSxcclxuICAgIHZpb2xlbmNlIDogMSxcclxuICAgIHZpb2xlbnQgOiAxLFxyXG4gICAgdmlydHVhbGx5IDogMSxcclxuICAgIHZpcnR1ZSA6IDEsXHJcbiAgICB2aXJ1cyA6IDEsXHJcbiAgICB2aXNpYmxlIDogMSxcclxuICAgIHZpc2lvbiA6IDEsXHJcbiAgICB2aXNpdCA6IDEsXHJcbiAgICB2aXNpdG9yIDogMSxcclxuICAgIHZpc3VhbCA6IDEsXHJcbiAgICB2aXRhbCA6IDEsXHJcbiAgICB2b2ljZSA6IDEsXHJcbiAgICB2b2x1bWUgOiAxLFxyXG4gICAgdm9sdW50ZWVyIDogMSxcclxuICAgIHZvdGUgOiAxLFxyXG4gICAgdm90ZXIgOiAxLFxyXG4gICAgdnMgOiAxLFxyXG4gICAgdnVsbmVyYWJsZSA6IDEsXHJcbiAgICB3YWdlIDogMSxcclxuICAgIHdhaXQgOiAxLFxyXG4gICAgd2FrZSA6IDEsXHJcbiAgICB3YWxrIDogMSxcclxuICAgIHdhbGwgOiAxLFxyXG4gICAgd2FuZGVyIDogMSxcclxuICAgIHdhbnQgOiAxLFxyXG4gICAgd2FyIDogMSxcclxuICAgIHdhcm0gOiAxLFxyXG4gICAgd2FybiA6IDEsXHJcbiAgICB3YXJuaW5nIDogMSxcclxuICAgIHdhc2ggOiAxLFxyXG4gICAgd2FzdGUgOiAxLFxyXG4gICAgd2F0Y2ggOiAxLFxyXG4gICAgd2F0ZXIgOiAxLFxyXG4gICAgd2F2ZSA6IDEsXHJcbiAgICB3YXkgOiAxLFxyXG4gICAgd2UgOiAxLFxyXG4gICAgd2VhayA6IDEsXHJcbiAgICB3ZWFsdGggOiAxLFxyXG4gICAgd2VhbHRoeSA6IDEsXHJcbiAgICB3ZWFwb24gOiAxLFxyXG4gICAgd2VhciA6IDEsXHJcbiAgICB3ZWF0aGVyIDogMSxcclxuICAgIHdlZGRpbmcgOiAxLFxyXG4gICAgd2VlayA6IDEsXHJcbiAgICB3ZWVrZW5kIDogMSxcclxuICAgIHdlZWtseSA6IDEsXHJcbiAgICB3ZWlnaCA6IDEsXHJcbiAgICB3ZWlnaHQgOiAxLFxyXG4gICAgd2VsY29tZSA6IDEsXHJcbiAgICB3ZWxmYXJlIDogMSxcclxuICAgIHdlbGwgOiAxLFxyXG4gICAgd2VzdCA6IDEsXHJcbiAgICB3ZXN0ZXJuIDogMSxcclxuICAgIHdldCA6IDEsXHJcbiAgICB3aGF0IDogMSxcclxuICAgIHdoYXRldmVyIDogMSxcclxuICAgIHdoZWVsIDogMSxcclxuICAgIHdoZW4gOiAxLFxyXG4gICAgd2hlbmV2ZXIgOiAxLFxyXG4gICAgd2hlcmUgOiAxLFxyXG4gICAgd2hlcmVhcyA6IDEsXHJcbiAgICB3aGV0aGVyIDogMSxcclxuICAgIHdoaWNoIDogMSxcclxuICAgIHdoaWxlIDogMSxcclxuICAgIHdoaXNwZXIgOiAxLFxyXG4gICAgd2hpdGUgOiAxLFxyXG4gICAgd2hvIDogMSxcclxuICAgIHdob2xlIDogMSxcclxuICAgIHdob20gOiAxLFxyXG4gICAgd2hvc2UgOiAxLFxyXG4gICAgd2h5IDogMSxcclxuICAgIHdpZGUgOiAxLFxyXG4gICAgd2lkZWx5IDogMSxcclxuICAgIHdpZGVzcHJlYWQgOiAxLFxyXG4gICAgd2lmZSA6IDEsXHJcbiAgICB3aWxkIDogMSxcclxuICAgIHdpbGwgOiAxLFxyXG4gICAgd2lsbGluZyA6IDEsXHJcbiAgICB3aW4gOiAxLFxyXG4gICAgd2luZCA6IDEsXHJcbiAgICB3aW5kb3cgOiAxLFxyXG4gICAgd2luZSA6IDEsXHJcbiAgICB3aW5nIDogMSxcclxuICAgIHdpbm5lciA6IDEsXHJcbiAgICB3aW50ZXIgOiAxLFxyXG4gICAgd2lwZSA6IDEsXHJcbiAgICB3aXJlIDogMSxcclxuICAgIHdpc2RvbSA6IDEsXHJcbiAgICB3aXNlIDogMSxcclxuICAgIHdpc2ggOiAxLFxyXG4gICAgd2l0aCA6IDEsXHJcbiAgICB3aXRoZHJhdyA6IDEsXHJcbiAgICB3aXRoaW4gOiAxLFxyXG4gICAgd2l0aG91dCA6IDEsXHJcbiAgICB3aXRuZXNzIDogMSxcclxuICAgIHdvbWFuIDogMSxcclxuICAgIHdvbmRlciA6IDEsXHJcbiAgICB3b25kZXJmdWwgOiAxLFxyXG4gICAgd29vZCA6IDEsXHJcbiAgICB3b29kZW4gOiAxLFxyXG4gICAgd29yZCA6IDEsXHJcbiAgICB3b3JrIDogMSxcclxuICAgIHdvcmtlciA6IDEsXHJcbiAgICB3b3JraW5nIDogMSxcclxuICAgIHdvcmtzIDogMSxcclxuICAgIHdvcmtzaG9wIDogMSxcclxuICAgIHdvcmxkIDogMSxcclxuICAgIHdvcnJpZWQgOiAxLFxyXG4gICAgd29ycnkgOiAxLFxyXG4gICAgd29ydGggOiAxLFxyXG4gICAgd291bGQgOiAxLFxyXG4gICAgd291bmQgOiAxLFxyXG4gICAgd3JhcCA6IDEsXHJcbiAgICB3cml0ZSA6IDEsXHJcbiAgICB3cml0ZXIgOiAxLFxyXG4gICAgd3JpdGluZyA6IDEsXHJcbiAgICB3cm9uZyA6IDEsXHJcbiAgICB5YXJkIDogMSxcclxuICAgIHllYWggOiAxLFxyXG4gICAgeWVhciA6IDEsXHJcbiAgICB5ZWxsIDogMSxcclxuICAgIHllbGxvdyA6IDEsXHJcbiAgICB5ZXMgOiAxLFxyXG4gICAgeWVzdGVyZGF5IDogMSxcclxuICAgIHlldCA6IDEsXHJcbiAgICB5aWVsZCA6IDEsXHJcbiAgICB5b3UgOiAxLFxyXG4gICAgeW91bmcgOiAxLFxyXG4gICAgeW91ciA6IDEsXHJcbiAgICB5b3VycyA6IDEsXHJcbiAgICB5b3Vyc2VsZiA6IDEsXHJcbiAgICB5b3V0aCA6IDEsXHJcbiAgICB6b25lIDogMSxcclxuICB9OyIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBmaW5kZXIgPSByZXF1aXJlKCcuL2ZpbmRlci5qcycpO1xyXG5cclxuY29uc3QgQVBJX0RBSUxZX0xJTUlUID0gMjUwMDA7XHJcbmxldCBNQVhfV09SRFM7XHJcbmxldCBDQUNIRV9DTFVTVEVSUztcclxubGV0IE1BWF9OT0RFX0ZSRVFVRU5DWTtcclxubGV0IFRSQVZFUlNFX1NJTUlMQVI7XHJcblxyXG5sZXQgY2FjaGVJc0luaXRpYWxpemVkID0gZmFsc2U7XHJcbmxldCB0b3RhbFdvcmRzTGFzdERheTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsYXp5SW5pdENhY2hlKCkge1xyXG5cclxuICBpZiAoIWNhY2hlSXNJbml0aWFsaXplZCkge1xyXG4gICAgY2FjaGVJc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgY3VydGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgLy8gODY0MDAwMDAgbWlsbGlzZWNvbmRzICgyNCBob3VycylcclxuICAgIHRvdGFsV29yZHNMYXN0RGF5ID0gYXdhaXQgZmluZGVyLmZpbmRGaWxlcyhcImNhY2hlL3dvcmRzXCIsIGN1cnRpbWUgLSA4NjQwMDAwMCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJsYXp5SW5pdENhY2hlICB0b3RhbFdvcmRzTGFzdERheSA6IFwiK3RvdGFsV29yZHNMYXN0RGF5K1wiIGVycm9yczpcIitmaW5kZXIuZXJyb3JzKTtcclxuICAgIHJldHVybiB0b3RhbFdvcmRzTGFzdERheTtcclxuICB9XHJcbiAgcmV0dXJuIHRvdGFsV29yZHNMYXN0RGF5O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdENyYXdsZXIoXHJcbiAgX01BWF9XT1JEUyxcclxuICBfQ0FDSEVfQ0xVU1RFUlMsXHJcbiAgX01BWF9OT0RFX0ZSRVFVRU5DWSxcclxuICBfVFJBVkVSU0VfU0lNSUxBUlxyXG4gICkge1xyXG5cclxuICBNQVhfV09SRFMgPSBfTUFYX1dPUkRTO1xyXG4gIENBQ0hFX0NMVVNURVJTID0gX0NBQ0hFX0NMVVNURVJTO1xyXG4gIE1BWF9OT0RFX0ZSRVFVRU5DWSA9IF9NQVhfTk9ERV9GUkVRVUVOQ1k7XHJcbiAgVFJBVkVSU0VfU0lNSUxBUiA9IF9UUkFWRVJTRV9TSU1JTEFSO1xyXG5cclxuXHJcbiAgaWYgKCFmcy5leGlzdHNTeW5jKFwiY2FjaGUvd29yZHNcIikpe1xyXG4gICAgZnMubWtkaXJTeW5jKFwiY2FjaGUvd29yZHNcIiwgeyByZWN1cnNpdmU6IHRydWUgfSk7XHJcbiAgfVxyXG4gIGlmICghZnMuZXhpc3RzU3luYyhcImNhY2hlL2NsdXN0ZXJzXCIpKXtcclxuICAgIGZzLm1rZGlyU3luYyhcImNhY2hlL2NsdXN0ZXJzXCIpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVXb3JkVG9EaXNwbGF5KGRhdGEpIHtcclxuXHJcbiAgLy8gY3JlYXRlIG5ldyBhcnJheSB0byBwdXNoIGRhdGEgdG9cclxuICBsZXQgcmVzdWx0cyA9IFtdO1xyXG4gIGxldCByZXN1bHQgPSB7XHJcbiAgICBmcmVxdWVuY3k6ZGF0YS5mcmVxdWVuY3ksXHJcbiAgICBwcm9udW5jaWF0aW9uOmRhdGEucHJvbnVuY2lhdGlvbixcclxuICAgIHJlc3VsdHMsIGV0YzpcIlwiXHJcbiAgfTtcclxuXHJcbiAgaWYgKGRhdGEucmVzdWx0cykgZGF0YS5yZXN1bHRzLm1hcChkZWYgPT4ge1xyXG4gICAgbGV0IGRlZmluaXRpb25BcnJheSA9IFtdO1xyXG4gICAgbGV0IGRlZmluaXRpb24gPSB7XHJcbiAgICAgIHBhcnRPZlNwZWVjaDpkZWYucGFydE9mU3BlZWNoLFxyXG4gICAgICBwcm9wZXJ0aWVzOmRlZmluaXRpb25BcnJheVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjcmVhdGVzIGFycmF5IG9mIGtleXMgaW4gb2JqZWN0XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGVmKTtcclxuICAgIGtleXMubWFwKGtleSA9PiB7XHJcblxyXG4gICAgICAvLyBidWlsZHMgcmVnZXggdGhhdCBsb29rcyBmb3IgY2FwaXRhbCBsZXR0ZXJzXHJcbiAgICAgIC8vIFRoZSByZXNwb25zZSBwYXJhbWV0ZXJzIGFyZSBpbiBjYW1lbENhc2UsIHNvIHdlIG5lZWQgdG8gSURcclxuICAgICAgLy8gdGhlIGNhcGl0YWwgbGV0dGVycyBhbmQgYWRkIHNwYWNlcyBpbnN0ZWFkIHNvIHRoZSBcclxuICAgICAgLy8gZnJvbnQgZW5kIGNhbiBlYXNpbHkgZGlzcGxheSB0aGUgcGFyYW1ldGVyIGxhYmVsc1xyXG4gICAgICBjb25zdCByZWdleCA9IC8oPz1bQS1aXSkvO1xyXG5cclxuICAgICAgLy8gY3JlYXRlcyBwcmVzZW50YWJsZSBsYWJlbFxyXG4gICAgICBjb25zdCBsYWJlbCA9IGtleS5zcGxpdChyZWdleCkuam9pbignICcpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAvLyBncmFicyB0aGUgdmFsdWUgZm9yIHRoZSBwYXJhbWV0ZXIgZnJvbSB0aGVcclxuICAgICAgLy8gZGVmaW5pdGlvbiBvYmplY3QgaW4gcmVzcG9uc2VcclxuICAgICAgY29uc3QgdmFsdWUgPSBkZWZba2V5XTtcclxuXHJcbiAgICAgIC8vIGNvbnN0cnVjdHMgbmV3IG9iamVjdCB0byBzZW5kIHRvIGZyb250ZW5kXHJcbiAgICAgIGxldCBuZXdPYmogPSB7XHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgaXNTdHJpbmc6IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB0cnVlIDogZmFsc2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGRlZmluaXRpb25BcnJheS5wdXNoKG5ld09iaik7XHJcbiAgICB9KVxyXG5cclxuICAgIHJlc3VsdHMucHVzaChkZWZpbml0aW9uKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRTaW5nbGVXb3JkKHdvcmQsIGFzb2JqZWN0KSB7XHJcblxyXG4gIGNvbnN0IHdmcGF0aCA9IGBjYWNoZS93b3Jkcy8ke3dvcmR9YDtcclxuXHJcbiAgaWYgKGZzLmV4aXN0c1N5bmMod2ZwYXRoKSkge1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJGcm9tIGNhY2hlIGZpbGUvc2luZ2xlIFwiK3dmcGF0aCtcIiAgYXNvYmplY3Q6XCIrYXNvYmplY3QrXCIuLi5cXG5cIik7XHJcbiAgICBsZXQgaWpzb24gPSBmcy5yZWFkRmlsZVN5bmMod2ZwYXRoKS50b1N0cmluZygpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGlqc29uKTtcclxuXHJcbiAgICAgIGlmIChhc29iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzaW5nbGVXb3JkVG9EaXNwbGF5KGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IG9qc29uID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTsgICAgICAgICAvLyBtb2RpZmllZFxyXG4gICAgICAgIHJldHVybiBvanNvbjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJEZWxldGUgaW52YWxpZCBmaWxlIDogXCIrd2ZwYXRoLCBlKTtcclxuICAgICAgZnMudW5saW5rU3luYyh3ZnBhdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXdhaXQgbGF6eUluaXRDYWNoZSgpO1xyXG5cclxuICBpZiAodG90YWxXb3Jkc0xhc3REYXkgPj0gQVBJX0RBSUxZX0xJTUlUKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IG1ha2UgcmVxdWVzdCB0byBmaWxlL3NpbmdsZSBcIit3ZnBhdGgrXCIgIHRvdGFsV29yZHNMYXN0RGF5ID49IEFQSV9EQUlMWV9MSU1JVCA6ICBcIit0b3RhbFdvcmRzTGFzdERheStcIiA+PSBcIitBUElfREFJTFlfTElNSVQrXCJcXG5cIik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIHNlbmQgcmVxdWVzdCB0byB0aGUgV29yZHNBUElcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgIFwibWV0aG9kXCI6XCJHRVRcIixcclxuICAgIFwidXJsXCI6YGh0dHBzOi8vd29yZHNhcGl2MS5wLnJhcGlkYXBpLmNvbS93b3Jkcy8ke3dvcmR9YCxcclxuICAgIFwiaGVhZGVyc1wiOntcclxuICAgIFwiY29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcclxuICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6XCJ3b3Jkc2FwaXYxLnAucmFwaWRhcGkuY29tXCIsXHJcbiAgICBcIngtcmFwaWRhcGkta2V5XCI6cHJvY2Vzcy5lbnYuUkFQSURBUElfS0VZXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHRvdGFsV29yZHNMYXN0RGF5Kys7XHJcblxyXG4gIGNvbnN0IGRqc29uID0gSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSk7ICAvLyBvcmlnaW5hbFxyXG4gIGZzLndyaXRlRmlsZSh3ZnBhdGgsIGRqc29uLCAoZXJyKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYWNoZSBmaWxlL3NpbmdsZSBcIit3ZnBhdGgrXCIgIGFzb2JqZWN0OlwiK2Fzb2JqZWN0K1wiIHdyaXRlIGZhaWx1cmUgOiBcIitlcnIrXCJcXG5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhY2hlIGZpbGUvc2luZ2xlIFwiK3dmcGF0aCtcIiAgYXNvYmplY3Q6XCIrYXNvYmplY3QrXCIgd3JpdHRlbiBzdWNjZXNzZnVsbHlcXG5cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChhc29iamVjdCkge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCByZXN1bHQgPSBzaW5nbGVXb3JkVG9EaXNwbGF5KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgY29uc3Qgb2pzb24gPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpOyAgICAgICAgIC8vIG1vZGlmaWVkXHJcbiAgICByZXR1cm4gb2pzb247XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYXZlcnNlTm9kZSB7XHJcblxyXG4gIGVudHJ5O3ZhbDtsZXZlbDtwYXJ0T2ZTcGVlY2g7XHJcbiAgZGVmaW5pdGlvbjtzeW5vbnltcztzaW1pbGFyO3dvcmRzO1xyXG4gIGtleTtcclxuXHJcbiAgY29uc3RydWN0b3IoYnlfZGVmLCBlbnRyeSwgdmFsLCBsZXZlbCkge1xyXG4gICAgdGhpcy5lbnRyeT1lbnRyeTt0aGlzLnZhbD12YWw7dGhpcy5sZXZlbD1sZXZlbDtcclxuXHJcbiAgICB0aGlzLmRlZmluaXRpb24gPSB2YWwuZGVmaW5pdGlvbjsgXHJcbiAgICB0aGlzLnN5bm9ueW1zID0gW107XHJcbiAgICB0aGlzLnNpbWlsYXIgPSBbXTtcclxuICAgIHRoaXMud29yZHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZChieV9kZWYpO1xyXG4gIH1cclxuXHJcbiAgYWRkKGJ5X2RlZikge1xyXG4gIFxyXG4gICAgdGhpcy5wYXJ0T2ZTcGVlY2ggPSB0aGlzLnZhbC5wYXJ0T2ZTcGVlY2g7XHJcbiAgICB0aGlzLnN5bm9ueW1zLnB1c2guYXBwbHkodGhpcy5zeW5vbnltcywgdGhpcy52YWwuc3lub255bXMpO1xyXG4gICAgdGhpcy5zeW5vbnltcy5wdXNoKHRoaXMuZW50cnkud29yZCk7XHJcbiAgICB0aGlzLnN5bm9ueW1zLnNvcnQoKTtcclxuICBcclxuICAgIHRoaXMuc2ltaWxhci5wdXNoLmFwcGx5KHRoaXMuc2ltaWxhciwgdGhpcy52YWwuc2ltaWxhclRvKTtcclxuICAgIHRoaXMuc2ltaWxhci5zb3J0KCk7XHJcbiAgXHJcbiAgICB0aGlzLndvcmRzLnB1c2guYXBwbHkodGhpcy53b3JkcywgdGhpcy5zeW5vbnltcyk7XHJcbiAgICB0aGlzLndvcmRzLnB1c2guYXBwbHkodGhpcy53b3JkcywgdGhpcy5zaW1pbGFyKTtcclxuICBcclxuICAgIHRoaXMua2V5ID0gdGhpcy5sZXZlbCtcIjo6Ojo6OjpcIit0aGlzLnN5bm9ueW1zLmxlbmd0aCtcIjo6Ojo6OlwiK3RoaXMuc3lub255bXMuam9pbihcIiwgXCIpO1xyXG5cclxuICAgIGlmICghYnlfZGVmW3RoaXMudmFsLmRlZmluaXRpb25dKSB7XHJcblxyXG4gICAgICBieV9kZWZbdGhpcy52YWwuZGVmaW5pdGlvbl0gPSB0aGlzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcHJlc3MoKSB7XHJcbiAgICBkZWxldGUgdGhpcy52YWw7XHJcbiAgICBkZWxldGUgdGhpcy5rZXk7XHJcbiAgICBkZWxldGUgdGhpcy53b3JkcztcclxuICB9XHJcbiAgXHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERpY3Rpb25hcnlBbmRDaGlsZHJlbih0cmVzdWx0LCB3b3JkLCB0cmF2ZXJzaW9uKSB7XHJcblxyXG4gIGNvbnN0IGJ5X2RlZiA9IHRyZXN1bHQuYnlfZGVmO1xyXG4gIGNvbnN0IGVudHJ5ID0gYXdhaXQgbG9hZFNpbmdsZVdvcmQod29yZCwgdHJ1ZSk7XHJcblxyXG4gIGlmICghZW50cnkgfHxcclxuICAgICAgKHRyYXZlcnNpb24ubGV2ZWwgPiAxICYmIFxyXG4gICAgICBlbnRyeS5mcmVxdWVuY3kgJiYgZW50cnkuZnJlcXVlbmN5Pj1NQVhfTk9ERV9GUkVRVUVOQ1kpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICBmb3IgKGxldCBrZXkgaW4gZW50cnkucmVzdWx0cykge1xyXG4gICAgY29uc3QgdmFsID0gZW50cnkucmVzdWx0c1trZXldOyBcclxuXHJcbiAgICBsZXQgbm9kZSA9IG5ldyBUcmF2ZXJzZU5vZGUoYnlfZGVmLCBlbnRyeSwgdmFsLCB0cmF2ZXJzaW9uLmxldmVsKTtcclxuICAgIGlmIChUUkFWRVJTRV9TSU1JTEFSKSB7XHJcbiAgICAgIHRyYXZlcnNpb24ud29yZHNicmVhZHRoZmlyc3QucHVzaC5hcHBseSh0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0LCBub2RlLndvcmRzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYXZlcnNpb24ud29yZHNicmVhZHRoZmlyc3QucHVzaC5hcHBseSh0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0LCBub2RlLnN5bm9ueW1zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhdmVyc2VDbHVzdGVyKHRyZXN1bHQsIHdvcmQpIHtcclxuXHJcbiAgbGV0IHRyYXZlcnNpb24gPSB7XHJcbiAgICBsZXZlbCA6IDEsXHJcbiAgICB3b3Jkc2JyZWFkdGhmaXJzdCA6IFt3b3JkXVxyXG4gIH07XHJcbiAgdHJlc3VsdC5ub1dvcmRzID0gMDtcclxuICB0cmVzdWx0Lm1hc3RlciA9IGF3YWl0IGxvYWRTaW5nbGVXb3JkKHdvcmQsIHRydWUpO1xyXG5cclxuICBkbyB7XHJcbiAgICB2YXIgcHJldmlvdXNsZXZlbGNoaWxkd29yZHMgPSB0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0LmNvbmNhdChbXSk7XHJcbiAgICB0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0ID0gW107XHJcblxyXG4gICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICBmb3IgKGxldCB3IG9mIHByZXZpb3VzbGV2ZWxjaGlsZHdvcmRzKSB7XHJcbiAgICAgIGlmICh0cmVzdWx0LmJ5X3dbd10pIHtcclxuICAgICAgfSBlbHNlIGlmICh0cmVzdWx0Lm5vV29yZHMgPj0gTUFYX1dPUkRTKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMZXZlbCBcIit0cmF2ZXJzaW9uLmxldmVsK1wiIGZpbmlzaGVkLiBDb21wbGV0ZWQuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cmVzdWx0Lm5vV29yZHMrKztcclxuICAgICAgICB0cmVzdWx0LmJ5X3dbd10gPSAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRyZXN1bHQubm9Xb3JkcyArIFwiL1wiICsgTUFYX1dPUkRTKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBub2RlcHJvbWlzZSA9IGxvYWREaWN0aW9uYXJ5QW5kQ2hpbGRyZW4odHJlc3VsdCwgdywgdHJhdmVyc2lvbik7XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChub2RlcHJvbWlzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIGNvbnNvbGUubG9nKFwiTGV2ZWwgXCIrdHJhdmVyc2lvbi5sZXZlbCtcIiBmaW5pc2hlZC5cIik7XHJcblxyXG4gICAgdHJhdmVyc2lvbi5sZXZlbCsrO1xyXG4gIH0gd2hpbGUgKHRyYXZlcnNpb24ud29yZHNicmVhZHRoZmlyc3QubGVuZ3RoKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQ2x1c3Rlcih3b3JkLCBhc29iamVjdCkge1xyXG5cclxuICBjb25zdCBjZnBhdGggPSBgY2FjaGUvY2x1c3RlcnMvJHt3b3JkfWA7XHJcbiAgaWYgKENBQ0hFX0NMVVNURVJTICYmIGZzLmV4aXN0c1N5bmMoY2ZwYXRoKSkge1xyXG4gICAgbGV0IGlqc29uID0gZnMucmVhZEZpbGVTeW5jKGNmcGF0aCkudG9TdHJpbmcoKTtcclxuICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGlqc29uKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRnJvbSBjYWNoZSBmaWxlL2NsdXN0ZXIgXCIrY2ZwYXRoK1wiICBhc29iamVjdDpcIithc29iamVjdCtcIi4uLlxcblwiKTtcclxuXHJcbiAgICBpZiAoYXNvYmplY3QpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpanNvbjtcclxuICAgIH1cclxuXHJcbiAgfSBlbHNlIHtcclxuXHJcbiAgICBjb25zdCBieV9kZWYgPSB7fTtcclxuICAgIGNvbnN0IGJ5X3cgPSB7fTtcclxuICAgIGNvbnN0IGJ5X2tleSA9IFtdO1xyXG4gICAgbGV0IHRyZXN1bHQgPSB7XHJcbiAgICAgIGJ5X2RlZixcclxuICAgICAgYnlfdyAgICB9O1xyXG4gICAgY29uc3QgZW50cnkgPSBhd2FpdCB0cmF2ZXJzZUNsdXN0ZXIodHJlc3VsdCwgd29yZCk7XHJcbiAgICBieV9rZXkucHVzaC5hcHBseShieV9rZXksIE9iamVjdC52YWx1ZXMoYnlfZGVmKSk7XHJcbiAgICBjb25zdCBjbXAgPSAoZmlyc3RFbCwgc2Vjb25kRWwpID0+IHtcclxuICAgICAgcmV0dXJuIGZpcnN0RWwua2V5LmxvY2FsZUNvbXBhcmUoc2Vjb25kRWwua2V5KTtcclxuICAgIH07XHJcbiAgICBieV9rZXkuc29ydChjbXApO1xyXG4gICAgZm9yIChsZXQgZGVmb2JqIG9mIGJ5X2tleSkge1xyXG4gICAgICBkZWZvYmouY29tcHJlc3MoKTtcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgIG5vQ2x1c3RlckVudHJpZXM6Ynlfa2V5Lmxlbmd0aCxcclxuICAgICAgcmVzdWx0czpieV9rZXlcclxuICAgIH07XHJcbiAgICBpZiAodHJlc3VsdC5tYXN0ZXIpIHtcclxuICAgICAgcmVzdWx0LmZyZXF1ZW5jeSA9IHRyZXN1bHQubWFzdGVyLmZyZXF1ZW5jeTtcclxuICAgICAgcmVzdWx0LnByb251bmNpYXRpb24gPSB0cmVzdWx0Lm1hc3Rlci5wcm9udW5jaWF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjanNvbjtcclxuICAgIGlmIChDQUNIRV9DTFVTVEVSUykge1xyXG4gICAgICBjanNvbiA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgIGZzLndyaXRlRmlsZShjZnBhdGgsIGNqc29uLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNsdXN0ZXIgZmlsZS9jbHVzdGVyIFwiK2NmcGF0aCtcIiAgd3JpdGUgZmFpbHVyZSA6IFwiK2VycitcIlxcblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJDbHVzdGVyIGZpbGUvY2x1c3RlciBcIitjZnBhdGgrXCIgIHdyaXR0ZW4gc3VjY2Vzc2Z1bGx5XFxuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFzb2JqZWN0KSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIWNqc29uKSB7XHJcbiAgICAgICAgY2pzb24gPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjanNvbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQ29tbW9uV29yZChyZXN1bHQsIHdvcmQsIG5vV29yZHMpIHtcclxuXHJcbiAgY29uc3QgZW50cnkgPSBhd2FpdCBsb2FkU2luZ2xlV29yZCh3b3JkLCB0cnVlKTtcclxuXHJcbiAgcmVzdWx0Lm5vV29yZHMrKztcclxuICBjb25zb2xlLmxvZyhyZXN1bHQubm9Xb3JkcyArIFwiL1wiICsgbm9Xb3Jkcyk7XHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBlbnRyeS5yZXN1bHRzKSB7XHJcbiAgICBjb25zdCB2YWwgPSBlbnRyeS5yZXN1bHRzW2tleV07IFxyXG4gICAgY29uc3Qgc3lub255bXMgPSBbXS5jb25jYXQodmFsLnN5bm9ueW1zKTtcclxuICAgIHN5bm9ueW1zLnNvcnQoKTtcclxuXHJcbiAgICBjb25zdCBkZWZpbml0aW9uID0ge1xyXG4gICAgICBwYXJ0T2ZTcGVlY2g6IHZhbC5wYXJ0T2ZTcGVlY2gsXHJcbiAgICAgIGRlZmluaXRpb246IHZhbC5kZWZpbml0aW9uLFxyXG4gICAgICBzeW5vbnltc1xyXG4gICAgfTtcclxuICAgIHJlc3VsdC5ub0RlZmluaXRpb25zKys7XHJcbiAgICByZXN1bHQucmVzdWx0cy5wdXNoKGRlZmluaXRpb24pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRDb21tb25Xb3JkcygpIHtcclxuICBjb25zdCBjdyA9IHJlcXVpcmUoJy4vY29tbW9uLXdvcmRzLmpzJyk7XHJcblxyXG4gIC8vIGNyZWF0ZSBuZXcgYXJyYXkgdG8gcHVzaCBkYXRhIHRvXHJcbiAgbGV0IHJlc3VsdHMgPSBbXTtcclxuICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgbm9Xb3JkczowLFxyXG4gICAgbm9EZWZpbml0aW9uczowLFxyXG4gICAgcmVzdWx0c1xyXG4gIH07XHJcblxyXG4gIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gIGxldCBub1dvcmRzID0gT2JqZWN0LmtleXMoY3cuVGhlTW9zdENvbW1vbjMwMDApLmxlbmd0aDtcclxuICBmb3IgKGxldCBjb21tb25Xb3JkIGluIGN3LlRoZU1vc3RDb21tb24zMDAwKSB7XHJcbiAgICBwcm9taXNlcy5wdXNoKGxvYWRDb21tb25Xb3JkKHJlc3VsdCwgY29tbW9uV29yZCwgbm9Xb3JkcykpO1xyXG4gIH1cclxuICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbnZhciBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyk7XG52YXIgaHR0cEZvbGxvdyA9IHJlcXVpcmUoJ2ZvbGxvdy1yZWRpcmVjdHMnKS5odHRwO1xudmFyIGh0dHBzRm9sbG93ID0gcmVxdWlyZSgnZm9sbG93LXJlZGlyZWN0cycpLmh0dHBzO1xudmFyIHVybCA9IHJlcXVpcmUoJ3VybCcpO1xudmFyIHpsaWIgPSByZXF1aXJlKCd6bGliJyk7XG52YXIgcGtnID0gcmVxdWlyZSgnLi8uLi8uLi9wYWNrYWdlLmpzb24nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2VuaGFuY2VFcnJvcicpO1xuXG52YXIgaXNIdHRwcyA9IC9odHRwczo/LztcblxuLyplc2xpbnQgY29uc2lzdGVudC1yZXR1cm46MCovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh0dHBBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hIdHRwUmVxdWVzdChyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSkge1xuICAgIHZhciByZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgcmVzb2x2ZVByb21pc2UodmFsdWUpO1xuICAgIH07XG4gICAgdmFyIHJlamVjdCA9IGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkge1xuICAgICAgcmVqZWN0UHJvbWlzZSh2YWx1ZSk7XG4gICAgfTtcbiAgICB2YXIgZGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciBoZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICAvLyBTZXQgVXNlci1BZ2VudCAocmVxdWlyZWQgYnkgc29tZSBzZXJ2ZXJzKVxuICAgIC8vIE9ubHkgc2V0IGhlYWRlciBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgaW4gY29uZmlnXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvNjlcbiAgICBpZiAoIWhlYWRlcnNbJ1VzZXItQWdlbnQnXSAmJiAhaGVhZGVyc1sndXNlci1hZ2VudCddKSB7XG4gICAgICBoZWFkZXJzWydVc2VyLUFnZW50J10gPSAnYXhpb3MvJyArIHBrZy52ZXJzaW9uO1xuICAgIH1cblxuICAgIGlmIChkYXRhICYmICF1dGlscy5pc1N0cmVhbShkYXRhKSkge1xuICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkge1xuICAgICAgICAvLyBOb3RoaW5nIHRvIGRvLi4uXG4gICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IEJ1ZmZlci5mcm9tKG5ldyBVaW50OEFycmF5KGRhdGEpKTtcbiAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNTdHJpbmcoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IEJ1ZmZlci5mcm9tKGRhdGEsICd1dGYtOCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICAgICAnRGF0YSBhZnRlciB0cmFuc2Zvcm1hdGlvbiBtdXN0IGJlIGEgc3RyaW5nLCBhbiBBcnJheUJ1ZmZlciwgYSBCdWZmZXIsIG9yIGEgU3RyZWFtJyxcbiAgICAgICAgICBjb25maWdcbiAgICAgICAgKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBDb250ZW50LUxlbmd0aCBoZWFkZXIgaWYgZGF0YSBleGlzdHNcbiAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtTGVuZ3RoJ10gPSBkYXRhLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgdmFyIGF1dGggPSB1bmRlZmluZWQ7XG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgYXV0aCA9IHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQ7XG4gICAgfVxuXG4gICAgLy8gUGFyc2UgdXJsXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgdmFyIHBhcnNlZCA9IHVybC5wYXJzZShmdWxsUGF0aCk7XG4gICAgdmFyIHByb3RvY29sID0gcGFyc2VkLnByb3RvY29sIHx8ICdodHRwOic7XG5cbiAgICBpZiAoIWF1dGggJiYgcGFyc2VkLmF1dGgpIHtcbiAgICAgIHZhciB1cmxBdXRoID0gcGFyc2VkLmF1dGguc3BsaXQoJzonKTtcbiAgICAgIHZhciB1cmxVc2VybmFtZSA9IHVybEF1dGhbMF0gfHwgJyc7XG4gICAgICB2YXIgdXJsUGFzc3dvcmQgPSB1cmxBdXRoWzFdIHx8ICcnO1xuICAgICAgYXV0aCA9IHVybFVzZXJuYW1lICsgJzonICsgdXJsUGFzc3dvcmQ7XG4gICAgfVxuXG4gICAgaWYgKGF1dGgpIHtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzLkF1dGhvcml6YXRpb247XG4gICAgfVxuXG4gICAgdmFyIGlzSHR0cHNSZXF1ZXN0ID0gaXNIdHRwcy50ZXN0KHByb3RvY29sKTtcbiAgICB2YXIgYWdlbnQgPSBpc0h0dHBzUmVxdWVzdCA/IGNvbmZpZy5odHRwc0FnZW50IDogY29uZmlnLmh0dHBBZ2VudDtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgcGF0aDogYnVpbGRVUkwocGFyc2VkLnBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpLFxuICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgYWdlbnQ6IGFnZW50LFxuICAgICAgYWdlbnRzOiB7IGh0dHA6IGNvbmZpZy5odHRwQWdlbnQsIGh0dHBzOiBjb25maWcuaHR0cHNBZ2VudCB9LFxuICAgICAgYXV0aDogYXV0aFxuICAgIH07XG5cbiAgICBpZiAoY29uZmlnLnNvY2tldFBhdGgpIHtcbiAgICAgIG9wdGlvbnMuc29ja2V0UGF0aCA9IGNvbmZpZy5zb2NrZXRQYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLmhvc3RuYW1lID0gcGFyc2VkLmhvc3RuYW1lO1xuICAgICAgb3B0aW9ucy5wb3J0ID0gcGFyc2VkLnBvcnQ7XG4gICAgfVxuXG4gICAgdmFyIHByb3h5ID0gY29uZmlnLnByb3h5O1xuICAgIGlmICghcHJveHkgJiYgcHJveHkgIT09IGZhbHNlKSB7XG4gICAgICB2YXIgcHJveHlFbnYgPSBwcm90b2NvbC5zbGljZSgwLCAtMSkgKyAnX3Byb3h5JztcbiAgICAgIHZhciBwcm94eVVybCA9IHByb2Nlc3MuZW52W3Byb3h5RW52XSB8fCBwcm9jZXNzLmVudltwcm94eUVudi50b1VwcGVyQ2FzZSgpXTtcbiAgICAgIGlmIChwcm94eVVybCkge1xuICAgICAgICB2YXIgcGFyc2VkUHJveHlVcmwgPSB1cmwucGFyc2UocHJveHlVcmwpO1xuICAgICAgICB2YXIgbm9Qcm94eUVudiA9IHByb2Nlc3MuZW52Lm5vX3Byb3h5IHx8IHByb2Nlc3MuZW52Lk5PX1BST1hZO1xuICAgICAgICB2YXIgc2hvdWxkUHJveHkgPSB0cnVlO1xuXG4gICAgICAgIGlmIChub1Byb3h5RW52KSB7XG4gICAgICAgICAgdmFyIG5vUHJveHkgPSBub1Byb3h5RW52LnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIHRyaW0ocykge1xuICAgICAgICAgICAgcmV0dXJuIHMudHJpbSgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc2hvdWxkUHJveHkgPSAhbm9Qcm94eS5zb21lKGZ1bmN0aW9uIHByb3h5TWF0Y2gocHJveHlFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIXByb3h5RWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJveHlFbGVtZW50ID09PSAnKicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJveHlFbGVtZW50WzBdID09PSAnLicgJiZcbiAgICAgICAgICAgICAgICBwYXJzZWQuaG9zdG5hbWUuc3Vic3RyKHBhcnNlZC5ob3N0bmFtZS5sZW5ndGggLSBwcm94eUVsZW1lbnQubGVuZ3RoKSA9PT0gcHJveHlFbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkLmhvc3RuYW1lID09PSBwcm94eUVsZW1lbnQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChzaG91bGRQcm94eSkge1xuICAgICAgICAgIHByb3h5ID0ge1xuICAgICAgICAgICAgaG9zdDogcGFyc2VkUHJveHlVcmwuaG9zdG5hbWUsXG4gICAgICAgICAgICBwb3J0OiBwYXJzZWRQcm94eVVybC5wb3J0XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChwYXJzZWRQcm94eVVybC5hdXRoKSB7XG4gICAgICAgICAgICB2YXIgcHJveHlVcmxBdXRoID0gcGFyc2VkUHJveHlVcmwuYXV0aC5zcGxpdCgnOicpO1xuICAgICAgICAgICAgcHJveHkuYXV0aCA9IHtcbiAgICAgICAgICAgICAgdXNlcm5hbWU6IHByb3h5VXJsQXV0aFswXSxcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3h5VXJsQXV0aFsxXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJveHkpIHtcbiAgICAgIG9wdGlvbnMuaG9zdG5hbWUgPSBwcm94eS5ob3N0O1xuICAgICAgb3B0aW9ucy5ob3N0ID0gcHJveHkuaG9zdDtcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5ob3N0ID0gcGFyc2VkLmhvc3RuYW1lICsgKHBhcnNlZC5wb3J0ID8gJzonICsgcGFyc2VkLnBvcnQgOiAnJyk7XG4gICAgICBvcHRpb25zLnBvcnQgPSBwcm94eS5wb3J0O1xuICAgICAgb3B0aW9ucy5wYXRoID0gcHJvdG9jb2wgKyAnLy8nICsgcGFyc2VkLmhvc3RuYW1lICsgKHBhcnNlZC5wb3J0ID8gJzonICsgcGFyc2VkLnBvcnQgOiAnJykgKyBvcHRpb25zLnBhdGg7XG5cbiAgICAgIC8vIEJhc2ljIHByb3h5IGF1dGhvcml6YXRpb25cbiAgICAgIGlmIChwcm94eS5hdXRoKSB7XG4gICAgICAgIHZhciBiYXNlNjQgPSBCdWZmZXIuZnJvbShwcm94eS5hdXRoLnVzZXJuYW1lICsgJzonICsgcHJveHkuYXV0aC5wYXNzd29yZCwgJ3V0ZjgnKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snUHJveHktQXV0aG9yaXphdGlvbiddID0gJ0Jhc2ljICcgKyBiYXNlNjQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zcG9ydDtcbiAgICB2YXIgaXNIdHRwc1Byb3h5ID0gaXNIdHRwc1JlcXVlc3QgJiYgKHByb3h5ID8gaXNIdHRwcy50ZXN0KHByb3h5LnByb3RvY29sKSA6IHRydWUpO1xuICAgIGlmIChjb25maWcudHJhbnNwb3J0KSB7XG4gICAgICB0cmFuc3BvcnQgPSBjb25maWcudHJhbnNwb3J0O1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLm1heFJlZGlyZWN0cyA9PT0gMCkge1xuICAgICAgdHJhbnNwb3J0ID0gaXNIdHRwc1Byb3h5ID8gaHR0cHMgOiBodHRwO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29uZmlnLm1heFJlZGlyZWN0cykge1xuICAgICAgICBvcHRpb25zLm1heFJlZGlyZWN0cyA9IGNvbmZpZy5tYXhSZWRpcmVjdHM7XG4gICAgICB9XG4gICAgICB0cmFuc3BvcnQgPSBpc0h0dHBzUHJveHkgPyBodHRwc0ZvbGxvdyA6IGh0dHBGb2xsb3c7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoICYmIGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoID4gLTEpIHtcbiAgICAgIG9wdGlvbnMubWF4Qm9keUxlbmd0aCA9IGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgcmVxdWVzdFxuICAgIHZhciByZXEgPSB0cmFuc3BvcnQucmVxdWVzdChvcHRpb25zLCBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXMpIHtcbiAgICAgIGlmIChyZXEuYWJvcnRlZCkgcmV0dXJuO1xuXG4gICAgICAvLyB1bmNvbXByZXNzIHRoZSByZXNwb25zZSBib2R5IHRyYW5zcGFyZW50bHkgaWYgcmVxdWlyZWRcbiAgICAgIHZhciBzdHJlYW0gPSByZXM7XG4gICAgICBzd2l0Y2ggKHJlcy5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ10pIHtcbiAgICAgIC8qZXNsaW50IGRlZmF1bHQtY2FzZTowKi9cbiAgICAgIGNhc2UgJ2d6aXAnOlxuICAgICAgY2FzZSAnY29tcHJlc3MnOlxuICAgICAgY2FzZSAnZGVmbGF0ZSc6XG4gICAgICAgIC8vIGFkZCB0aGUgdW56aXBwZXIgdG8gdGhlIGJvZHkgc3RyZWFtIHByb2Nlc3NpbmcgcGlwZWxpbmVcbiAgICAgICAgc3RyZWFtID0gKHJlcy5zdGF0dXNDb2RlID09PSAyMDQpID8gc3RyZWFtIDogc3RyZWFtLnBpcGUoemxpYi5jcmVhdGVVbnppcCgpKTtcblxuICAgICAgICAvLyByZW1vdmUgdGhlIGNvbnRlbnQtZW5jb2RpbmcgaW4gb3JkZXIgdG8gbm90IGNvbmZ1c2UgZG93bnN0cmVhbSBvcGVyYXRpb25zXG4gICAgICAgIGRlbGV0ZSByZXMuaGVhZGVyc1snY29udGVudC1lbmNvZGluZyddO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gcmV0dXJuIHRoZSBsYXN0IHJlcXVlc3QgaW4gY2FzZSBvZiByZWRpcmVjdHNcbiAgICAgIHZhciBsYXN0UmVxdWVzdCA9IHJlcy5yZXEgfHwgcmVxO1xuXG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNNZXNzYWdlLFxuICAgICAgICBoZWFkZXJzOiByZXMuaGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IGxhc3RSZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3N0cmVhbScpIHtcbiAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHN0cmVhbTtcbiAgICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlQnVmZmVyID0gW107XG4gICAgICAgIHN0cmVhbS5vbignZGF0YScsIGZ1bmN0aW9uIGhhbmRsZVN0cmVhbURhdGEoY2h1bmspIHtcbiAgICAgICAgICByZXNwb25zZUJ1ZmZlci5wdXNoKGNodW5rKTtcblxuICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgY29udGVudCBsZW5ndGggaXMgbm90IG92ZXIgdGhlIG1heENvbnRlbnRMZW5ndGggaWYgc3BlY2lmaWVkXG4gICAgICAgICAgaWYgKGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoID4gLTEgJiYgQnVmZmVyLmNvbmNhdChyZXNwb25zZUJ1ZmZlcikubGVuZ3RoID4gY29uZmlnLm1heENvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIHN0cmVhbS5kZXN0cm95KCk7XG4gICAgICAgICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ21heENvbnRlbnRMZW5ndGggc2l6ZSBvZiAnICsgY29uZmlnLm1heENvbnRlbnRMZW5ndGggKyAnIGV4Y2VlZGVkJyxcbiAgICAgICAgICAgICAgY29uZmlnLCBudWxsLCBsYXN0UmVxdWVzdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RyZWFtLm9uKCdlcnJvcicsIGZ1bmN0aW9uIGhhbmRsZVN0cmVhbUVycm9yKGVycikge1xuICAgICAgICAgIGlmIChyZXEuYWJvcnRlZCkgcmV0dXJuO1xuICAgICAgICAgIHJlamVjdChlbmhhbmNlRXJyb3IoZXJyLCBjb25maWcsIG51bGwsIGxhc3RSZXF1ZXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24gaGFuZGxlU3RyZWFtRW5kKCkge1xuICAgICAgICAgIHZhciByZXNwb25zZURhdGEgPSBCdWZmZXIuY29uY2F0KHJlc3BvbnNlQnVmZmVyKTtcbiAgICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2FycmF5YnVmZmVyJykge1xuICAgICAgICAgICAgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2VEYXRhLnRvU3RyaW5nKGNvbmZpZy5yZXNwb25zZUVuY29kaW5nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNwb25zZS5kYXRhID0gcmVzcG9uc2VEYXRhO1xuICAgICAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgZXJyb3JzXG4gICAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3RFcnJvcihlcnIpIHtcbiAgICAgIGlmIChyZXEuYWJvcnRlZCkgcmV0dXJuO1xuICAgICAgcmVqZWN0KGVuaGFuY2VFcnJvcihlcnIsIGNvbmZpZywgbnVsbCwgcmVxKSk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgcmVxdWVzdCB0aW1lb3V0XG4gICAgaWYgKGNvbmZpZy50aW1lb3V0KSB7XG4gICAgICAvLyBTb21ldGltZSwgdGhlIHJlc3BvbnNlIHdpbGwgYmUgdmVyeSBzbG93LCBhbmQgZG9lcyBub3QgcmVzcG9uZCwgdGhlIGNvbm5lY3QgZXZlbnQgd2lsbCBiZSBibG9jayBieSBldmVudCBsb29wIHN5c3RlbS5cbiAgICAgIC8vIEFuZCB0aW1lciBjYWxsYmFjayB3aWxsIGJlIGZpcmVkLCBhbmQgYWJvcnQoKSB3aWxsIGJlIGludm9rZWQgYmVmb3JlIGNvbm5lY3Rpb24sIHRoZW4gZ2V0IFwic29ja2V0IGhhbmcgdXBcIiBhbmQgY29kZSBFQ09OTlJFU0VULlxuICAgICAgLy8gQXQgdGhpcyB0aW1lLCBpZiB3ZSBoYXZlIGEgbGFyZ2UgbnVtYmVyIG9mIHJlcXVlc3QsIG5vZGVqcyB3aWxsIGhhbmcgdXAgc29tZSBzb2NrZXQgb24gYmFja2dyb3VuZC4gYW5kIHRoZSBudW1iZXIgd2lsbCB1cCBhbmQgdXAuXG4gICAgICAvLyBBbmQgdGhlbiB0aGVzZSBzb2NrZXQgd2hpY2ggYmUgaGFuZyB1cCB3aWxsIGRldm9yaW5nIENQVSBsaXR0bGUgYnkgbGl0dGxlLlxuICAgICAgLy8gQ2xpZW50UmVxdWVzdC5zZXRUaW1lb3V0IHdpbGwgYmUgZmlyZWQgb24gdGhlIHNwZWNpZnkgbWlsbGlzZWNvbmRzLCBhbmQgY2FuIG1ha2Ugc3VyZSB0aGF0IGFib3J0KCkgd2lsbCBiZSBmaXJlZCBhZnRlciBjb25uZWN0LlxuICAgICAgcmVxLnNldFRpbWVvdXQoY29uZmlnLnRpbWVvdXQsIGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3RUaW1lb3V0KCkge1xuICAgICAgICByZXEuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAocmVxLmFib3J0ZWQpIHJldHVybjtcblxuICAgICAgICByZXEuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgaWYgKHV0aWxzLmlzU3RyZWFtKGRhdGEpKSB7XG4gICAgICBkYXRhLm9uKCdlcnJvcicsIGZ1bmN0aW9uIGhhbmRsZVN0cmVhbUVycm9yKGVycikge1xuICAgICAgICByZWplY3QoZW5oYW5jZUVycm9yKGVyciwgY29uZmlnLCBudWxsLCByZXEpKTtcbiAgICAgIH0pLnBpcGUocmVxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxLmVuZChkYXRhKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7IiwiLyoqXG4gKiBEZXRlY3QgRWxlY3Ryb24gcmVuZGVyZXIgcHJvY2Vzcywgd2hpY2ggaXMgbm9kZSwgYnV0IHdlIHNob3VsZFxuICogdHJlYXQgYXMgYSBicm93c2VyLlxuICovXG5cbmlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9icm93c2VyLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbm9kZS5qcycpO1xufVxuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnIzAwMDBDQycsICcjMDAwMEZGJywgJyMwMDMzQ0MnLCAnIzAwMzNGRicsICcjMDA2NkNDJywgJyMwMDY2RkYnLCAnIzAwOTlDQycsXG4gICcjMDA5OUZGJywgJyMwMENDMDAnLCAnIzAwQ0MzMycsICcjMDBDQzY2JywgJyMwMENDOTknLCAnIzAwQ0NDQycsICcjMDBDQ0ZGJyxcbiAgJyMzMzAwQ0MnLCAnIzMzMDBGRicsICcjMzMzM0NDJywgJyMzMzMzRkYnLCAnIzMzNjZDQycsICcjMzM2NkZGJywgJyMzMzk5Q0MnLFxuICAnIzMzOTlGRicsICcjMzNDQzAwJywgJyMzM0NDMzMnLCAnIzMzQ0M2NicsICcjMzNDQzk5JywgJyMzM0NDQ0MnLCAnIzMzQ0NGRicsXG4gICcjNjYwMENDJywgJyM2NjAwRkYnLCAnIzY2MzNDQycsICcjNjYzM0ZGJywgJyM2NkNDMDAnLCAnIzY2Q0MzMycsICcjOTkwMENDJyxcbiAgJyM5OTAwRkYnLCAnIzk5MzNDQycsICcjOTkzM0ZGJywgJyM5OUNDMDAnLCAnIzk5Q0MzMycsICcjQ0MwMDAwJywgJyNDQzAwMzMnLFxuICAnI0NDMDA2NicsICcjQ0MwMDk5JywgJyNDQzAwQ0MnLCAnI0NDMDBGRicsICcjQ0MzMzAwJywgJyNDQzMzMzMnLCAnI0NDMzM2NicsXG4gICcjQ0MzMzk5JywgJyNDQzMzQ0MnLCAnI0NDMzNGRicsICcjQ0M2NjAwJywgJyNDQzY2MzMnLCAnI0NDOTkwMCcsICcjQ0M5OTMzJyxcbiAgJyNDQ0NDMDAnLCAnI0NDQ0MzMycsICcjRkYwMDAwJywgJyNGRjAwMzMnLCAnI0ZGMDA2NicsICcjRkYwMDk5JywgJyNGRjAwQ0MnLFxuICAnI0ZGMDBGRicsICcjRkYzMzAwJywgJyNGRjMzMzMnLCAnI0ZGMzM2NicsICcjRkYzMzk5JywgJyNGRjMzQ0MnLCAnI0ZGMzNGRicsXG4gICcjRkY2NjAwJywgJyNGRjY2MzMnLCAnI0ZGOTkwMCcsICcjRkY5OTMzJywgJyNGRkNDMDAnLCAnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHxcbiAgICBwbHVyYWwobXMsIGgsICdob3VyJykgfHxcbiAgICBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fFxuICAgIHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8XG4gICAgbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXMgPCBuICogMS41KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobXMgLyBuKSArICcgJyArIG5hbWU7XG4gIH1cbiAgcmV0dXJuIE1hdGguY2VpbChtcyAvIG4pICsgJyAnICsgbmFtZSArICdzJztcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgdHR5ID0gcmVxdWlyZSgndHR5Jyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBOb2RlLmpzIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5pbml0ID0gaW5pdDtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gWyA2LCAyLCAzLCA0LCA1LCAxIF07XG5cbnRyeSB7XG4gIHZhciBzdXBwb3J0c0NvbG9yID0gcmVxdWlyZSgnc3VwcG9ydHMtY29sb3InKTtcbiAgaWYgKHN1cHBvcnRzQ29sb3IgJiYgc3VwcG9ydHNDb2xvci5sZXZlbCA+PSAyKSB7XG4gICAgZXhwb3J0cy5jb2xvcnMgPSBbXG4gICAgICAyMCwgMjEsIDI2LCAyNywgMzIsIDMzLCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDU2LCA1NywgNjIsIDYzLCA2OCxcbiAgICAgIDY5LCA3NCwgNzUsIDc2LCA3NywgNzgsIDc5LCA4MCwgODEsIDkyLCA5MywgOTgsIDk5LCAxMTIsIDExMywgMTI4LCAxMjksIDEzNCxcbiAgICAgIDEzNSwgMTQ4LCAxNDksIDE2MCwgMTYxLCAxNjIsIDE2MywgMTY0LCAxNjUsIDE2NiwgMTY3LCAxNjgsIDE2OSwgMTcwLCAxNzEsXG4gICAgICAxNzIsIDE3MywgMTc4LCAxNzksIDE4NCwgMTg1LCAxOTYsIDE5NywgMTk4LCAxOTksIDIwMCwgMjAxLCAyMDIsIDIwMywgMjA0LFxuICAgICAgMjA1LCAyMDYsIDIwNywgMjA4LCAyMDksIDIxNCwgMjE1LCAyMjAsIDIyMVxuICAgIF07XG4gIH1cbn0gY2F0Y2ggKGVycikge1xuICAvLyBzd2FsbG93IC0gd2Ugb25seSBjYXJlIGlmIGBzdXBwb3J0cy1jb2xvcmAgaXMgYXZhaWxhYmxlOyBpdCBkb2Vzbid0IGhhdmUgdG8gYmUuXG59XG5cbi8qKlxuICogQnVpbGQgdXAgdGhlIGRlZmF1bHQgYGluc3BlY3RPcHRzYCBvYmplY3QgZnJvbSB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuICpcbiAqICAgJCBERUJVR19DT0xPUlM9bm8gREVCVUdfREVQVEg9MTAgREVCVUdfU0hPV19ISURERU49ZW5hYmxlZCBub2RlIHNjcmlwdC5qc1xuICovXG5cbmV4cG9ydHMuaW5zcGVjdE9wdHMgPSBPYmplY3Qua2V5cyhwcm9jZXNzLmVudikuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIC9eZGVidWdfL2kudGVzdChrZXkpO1xufSkucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAvLyBjYW1lbC1jYXNlXG4gIHZhciBwcm9wID0ga2V5XG4gICAgLnN1YnN0cmluZyg2KVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL18oW2Etel0pL2csIGZ1bmN0aW9uIChfLCBrKSB7IHJldHVybiBrLnRvVXBwZXJDYXNlKCkgfSk7XG5cbiAgLy8gY29lcmNlIHN0cmluZyB2YWx1ZSBpbnRvIEpTIHZhbHVlXG4gIHZhciB2YWwgPSBwcm9jZXNzLmVudltrZXldO1xuICBpZiAoL14oeWVzfG9ufHRydWV8ZW5hYmxlZCkkL2kudGVzdCh2YWwpKSB2YWwgPSB0cnVlO1xuICBlbHNlIGlmICgvXihub3xvZmZ8ZmFsc2V8ZGlzYWJsZWQpJC9pLnRlc3QodmFsKSkgdmFsID0gZmFsc2U7XG4gIGVsc2UgaWYgKHZhbCA9PT0gJ251bGwnKSB2YWwgPSBudWxsO1xuICBlbHNlIHZhbCA9IE51bWJlcih2YWwpO1xuXG4gIG9ialtwcm9wXSA9IHZhbDtcbiAgcmV0dXJuIG9iajtcbn0sIHt9KTtcblxuLyoqXG4gKiBJcyBzdGRvdXQgYSBUVFk/IENvbG9yZWQgb3V0cHV0IGlzIGVuYWJsZWQgd2hlbiBgdHJ1ZWAuXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICByZXR1cm4gJ2NvbG9ycycgaW4gZXhwb3J0cy5pbnNwZWN0T3B0c1xuICAgID8gQm9vbGVhbihleHBvcnRzLmluc3BlY3RPcHRzLmNvbG9ycylcbiAgICA6IHR0eS5pc2F0dHkocHJvY2Vzcy5zdGRlcnIuZmQpO1xufVxuXG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGwgb24gYSBzaW5nbGUgbGluZS5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMubyA9IGZ1bmN0aW9uKHYpIHtcbiAgdGhpcy5pbnNwZWN0T3B0cy5jb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcbiAgcmV0dXJuIHV0aWwuaW5zcGVjdCh2LCB0aGlzLmluc3BlY3RPcHRzKVxuICAgIC5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci50cmltKClcbiAgICB9KS5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGxvd2luZyBtdWx0aXBsZSBsaW5lcyBpZiBuZWVkZWQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLk8gPSBmdW5jdGlvbih2KSB7XG4gIHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG4gIHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cyk7XG59O1xuXG4vKipcbiAqIEFkZHMgQU5TSSBjb2xvciBlc2NhcGUgY29kZXMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgbmFtZSA9IHRoaXMubmFtZXNwYWNlO1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgaWYgKHVzZUNvbG9ycykge1xuICAgIHZhciBjID0gdGhpcy5jb2xvcjtcbiAgICB2YXIgY29sb3JDb2RlID0gJ1xcdTAwMWJbMycgKyAoYyA8IDggPyBjIDogJzg7NTsnICsgYyk7XG4gICAgdmFyIHByZWZpeCA9ICcgICcgKyBjb2xvckNvZGUgKyAnOzFtJyArIG5hbWUgKyAnICcgKyAnXFx1MDAxYlswbSc7XG5cbiAgICBhcmdzWzBdID0gcHJlZml4ICsgYXJnc1swXS5zcGxpdCgnXFxuJykuam9pbignXFxuJyArIHByZWZpeCk7XG4gICAgYXJncy5wdXNoKGNvbG9yQ29kZSArICdtKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZikgKyAnXFx1MDAxYlswbScpO1xuICB9IGVsc2Uge1xuICAgIGFyZ3NbMF0gPSBnZXREYXRlKCkgKyBuYW1lICsgJyAnICsgYXJnc1swXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICBpZiAoZXhwb3J0cy5pbnNwZWN0T3B0cy5oaWRlRGF0ZSkge1xuICAgIHJldHVybiAnJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpICsgJyAnO1xuICB9XG59XG5cbi8qKlxuICogSW52b2tlcyBgdXRpbC5mb3JtYXQoKWAgd2l0aCB0aGUgc3BlY2lmaWVkIGFyZ3VtZW50cyBhbmQgd3JpdGVzIHRvIHN0ZGVyci5cbiAqL1xuXG5mdW5jdGlvbiBsb2coKSB7XG4gIHJldHVybiBwcm9jZXNzLnN0ZGVyci53cml0ZSh1dGlsLmZvcm1hdC5hcHBseSh1dGlsLCBhcmd1bWVudHMpICsgJ1xcbicpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgIC8vIElmIHlvdSBzZXQgYSBwcm9jZXNzLmVudiBmaWVsZCB0byBudWxsIG9yIHVuZGVmaW5lZCwgaXQgZ2V0cyBjYXN0IHRvIHRoZVxuICAgIC8vIHN0cmluZyAnbnVsbCcgb3IgJ3VuZGVmaW5lZCcuIEp1c3QgZGVsZXRlIGluc3RlYWQuXG4gICAgZGVsZXRlIHByb2Nlc3MuZW52LkRFQlVHO1xuICB9IGVsc2Uge1xuICAgIHByb2Nlc3MuZW52LkRFQlVHID0gbmFtZXNwYWNlcztcbiAgfVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5ERUJVRztcbn1cblxuLyoqXG4gKiBJbml0IGxvZ2ljIGZvciBgZGVidWdgIGluc3RhbmNlcy5cbiAqXG4gKiBDcmVhdGUgYSBuZXcgYGluc3BlY3RPcHRzYCBvYmplY3QgaW4gY2FzZSBgdXNlQ29sb3JzYCBpcyBzZXRcbiAqIGRpZmZlcmVudGx5IGZvciBhIHBhcnRpY3VsYXIgYGRlYnVnYCBpbnN0YW5jZS5cbiAqL1xuXG5mdW5jdGlvbiBpbml0IChkZWJ1Zykge1xuICBkZWJ1Zy5pbnNwZWN0T3B0cyA9IHt9O1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5pbnNwZWN0T3B0cyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRlYnVnLmluc3BlY3RPcHRzW2tleXNbaV1dID0gZXhwb3J0cy5pbnNwZWN0T3B0c1trZXlzW2ldXTtcbiAgfVxufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgcHJvY2Vzcy5lbnYuREVCVUdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7IiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuY29uc3QgaGFzRmxhZyA9IHJlcXVpcmUoJ2hhcy1mbGFnJyk7XG5cbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52O1xuXG5sZXQgZm9yY2VDb2xvcjtcbmlmIChoYXNGbGFnKCduby1jb2xvcicpIHx8XG5cdGhhc0ZsYWcoJ25vLWNvbG9ycycpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPWZhbHNlJykpIHtcblx0Zm9yY2VDb2xvciA9IGZhbHNlO1xufSBlbHNlIGlmIChoYXNGbGFnKCdjb2xvcicpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9ycycpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPXRydWUnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1hbHdheXMnKSkge1xuXHRmb3JjZUNvbG9yID0gdHJ1ZTtcbn1cbmlmICgnRk9SQ0VfQ09MT1InIGluIGVudikge1xuXHRmb3JjZUNvbG9yID0gZW52LkZPUkNFX0NPTE9SLmxlbmd0aCA9PT0gMCB8fCBwYXJzZUludChlbnYuRk9SQ0VfQ09MT1IsIDEwKSAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpIHtcblx0aWYgKGxldmVsID09PSAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRsZXZlbCxcblx0XHRoYXNCYXNpYzogdHJ1ZSxcblx0XHRoYXMyNTY6IGxldmVsID49IDIsXG5cdFx0aGFzMTZtOiBsZXZlbCA+PSAzXG5cdH07XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ29sb3Ioc3RyZWFtKSB7XG5cdGlmIChmb3JjZUNvbG9yID09PSBmYWxzZSkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTE2bScpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9ZnVsbCcpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9dHJ1ZWNvbG9yJykpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0yNTYnKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKHN0cmVhbSAmJiAhc3RyZWFtLmlzVFRZICYmIGZvcmNlQ29sb3IgIT09IHRydWUpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IG1pbiA9IGZvcmNlQ29sb3IgPyAxIDogMDtcblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuXHRcdC8vIE5vZGUuanMgNy41LjAgaXMgdGhlIGZpcnN0IHZlcnNpb24gb2YgTm9kZS5qcyB0byBpbmNsdWRlIGEgcGF0Y2ggdG9cblx0XHQvLyBsaWJ1diB0aGF0IGVuYWJsZXMgMjU2IGNvbG9yIG91dHB1dCBvbiBXaW5kb3dzLiBBbnl0aGluZyBlYXJsaWVyIGFuZCBpdFxuXHRcdC8vIHdvbid0IHdvcmsuIEhvd2V2ZXIsIGhlcmUgd2UgdGFyZ2V0IE5vZGUuanMgOCBhdCBtaW5pbXVtIGFzIGl0IGlzIGFuIExUU1xuXHRcdC8vIHJlbGVhc2UsIGFuZCBOb2RlLmpzIDcgaXMgbm90LiBXaW5kb3dzIDEwIGJ1aWxkIDEwNTg2IGlzIHRoZSBmaXJzdCBXaW5kb3dzXG5cdFx0Ly8gcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDI1NiBjb2xvcnMuIFdpbmRvd3MgMTAgYnVpbGQgMTQ5MzEgaXMgdGhlIGZpcnN0IHJlbGVhc2Vcblx0XHQvLyB0aGF0IHN1cHBvcnRzIDE2bS9UcnVlQ29sb3IuXG5cdFx0Y29uc3Qgb3NSZWxlYXNlID0gb3MucmVsZWFzZSgpLnNwbGl0KCcuJyk7XG5cdFx0aWYgKFxuXHRcdFx0TnVtYmVyKHByb2Nlc3MudmVyc2lvbnMubm9kZS5zcGxpdCgnLicpWzBdKSA+PSA4ICYmXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzBdKSA+PSAxMCAmJlxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTA1ODZcblx0XHQpIHtcblx0XHRcdHJldHVybiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxNDkzMSA/IDMgOiAyO1xuXHRcdH1cblxuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDSScgaW4gZW52KSB7XG5cdFx0aWYgKFsnVFJBVklTJywgJ0NJUkNMRUNJJywgJ0FQUFZFWU9SJywgJ0dJVExBQl9DSSddLnNvbWUoc2lnbiA9PiBzaWduIGluIGVudikgfHwgZW52LkNJX05BTUUgPT09ICdjb2Rlc2hpcCcpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRpZiAoJ1RFQU1DSVRZX1ZFUlNJT04nIGluIGVudikge1xuXHRcdHJldHVybiAvXig5XFwuKDAqWzEtOV1cXGQqKVxcLnxcXGR7Mix9XFwuKS8udGVzdChlbnYuVEVBTUNJVFlfVkVSU0lPTikgPyAxIDogMDtcblx0fVxuXG5cdGlmIChlbnYuQ09MT1JURVJNID09PSAndHJ1ZWNvbG9yJykge1xuXHRcdHJldHVybiAzO1xuXHR9XG5cblx0aWYgKCdURVJNX1BST0dSQU0nIGluIGVudikge1xuXHRcdGNvbnN0IHZlcnNpb24gPSBwYXJzZUludCgoZW52LlRFUk1fUFJPR1JBTV9WRVJTSU9OIHx8ICcnKS5zcGxpdCgnLicpWzBdLCAxMCk7XG5cblx0XHRzd2l0Y2ggKGVudi5URVJNX1BST0dSQU0pIHtcblx0XHRcdGNhc2UgJ2lUZXJtLmFwcCc6XG5cdFx0XHRcdHJldHVybiB2ZXJzaW9uID49IDMgPyAzIDogMjtcblx0XHRcdGNhc2UgJ0FwcGxlX1Rlcm1pbmFsJzpcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHQvLyBObyBkZWZhdWx0XG5cdFx0fVxuXHR9XG5cblx0aWYgKC8tMjU2KGNvbG9yKT8kL2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmICgvXnNjcmVlbnxeeHRlcm18XnZ0MTAwfF52dDIyMHxecnh2dHxjb2xvcnxhbnNpfGN5Z3dpbnxsaW51eC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NPTE9SVEVSTScgaW4gZW52KSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoZW52LlRFUk0gPT09ICdkdW1iJykge1xuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRyZXR1cm4gbWluO1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0TGV2ZWwoc3RyZWFtKSB7XG5cdGNvbnN0IGxldmVsID0gc3VwcG9ydHNDb2xvcihzdHJlYW0pO1xuXHRyZXR1cm4gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3VwcG9ydHNDb2xvcjogZ2V0U3VwcG9ydExldmVsLFxuXHRzdGRvdXQ6IGdldFN1cHBvcnRMZXZlbChwcm9jZXNzLnN0ZG91dCksXG5cdHN0ZGVycjogZ2V0U3VwcG9ydExldmVsKHByb2Nlc3Muc3RkZXJyKVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9zXCIpOyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gKGZsYWcsIGFyZ3YpID0+IHtcblx0YXJndiA9IGFyZ3YgfHwgcHJvY2Vzcy5hcmd2O1xuXHRjb25zdCBwcmVmaXggPSBmbGFnLnN0YXJ0c1dpdGgoJy0nKSA/ICcnIDogKGZsYWcubGVuZ3RoID09PSAxID8gJy0nIDogJy0tJyk7XG5cdGNvbnN0IHBvcyA9IGFyZ3YuaW5kZXhPZihwcmVmaXggKyBmbGFnKTtcblx0Y29uc3QgdGVybWluYXRvclBvcyA9IGFyZ3YuaW5kZXhPZignLS0nKTtcblx0cmV0dXJuIHBvcyAhPT0gLTEgJiYgKHRlcm1pbmF0b3JQb3MgPT09IC0xID8gdHJ1ZSA6IHBvcyA8IHRlcm1pbmF0b3JQb3MpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpsaWJcIik7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsImNvbnN0IEZpbmRGaWxlcyA9IHJlcXVpcmUoXCJub2RlLWZpbmQtZmlsZXNcIik7XHJcblxyXG5leHBvcnQgbGV0IGNudD0wLGVycm9ycz0wO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaWxlcyhyb290Rm9sZGVyLCBmaWxlTW9kaWZpZWREYXRlLCBvbkZpbGUpIHtcclxuICAgIHZhciBmaW5kZXIgPSBuZXcgRmluZEZpbGVzKHtcclxuICAgICAgICByb290Rm9sZGVyLFxyXG4gICAgICAgIGZpbGVNb2RpZmllZERhdGVcclxuICAgIH0pO1xyXG4gICAgdmFyIHJlc3VsdCxyZXNvbHZlLHJlamVjdDtcclxuICAgIGNudD0wOyBlcnJvcnM9MDtcclxuXHJcbiAgICBmaW5kZXIub24oXCJtYXRjaFwiLCBmdW5jdGlvbihzdHJQYXRoLCBzdGF0KSB7XHJcbiAgICAgICAgaWYgKG9uRmlsZSkgb25GaWxlKHN0clBhdGgsIHN0YXQpO1xyXG4gICAgICAgIGNudCsrO1xyXG4gICAgfSk7XHJcbiAgICBmaW5kZXIub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXNvbHZlKGNudCk7XHJcbiAgICB9KTtcclxuICAgIGZpbmRlci5vbihcInBhdGhlcnJvclwiLCBmdW5jdGlvbihlcnIsIHN0clBhdGgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZvciBQYXRoIFwiICsgc3RyUGF0aCArIFwiIFwiICsgZXJyKTsgIC8vIE5vdGUgdGhhdCBhbiBlcnJvciBpbiBhY2Nlc3NpbmcgYSBwYXJ0aWN1bGFyIGZpbGUgZG9lcyBub3Qgc3RvcCB0aGUgd2hvbGUgc2hvd1xyXG4gICAgICAgIGVycm9ycysrO1xyXG4gICAgfSk7XHJcbiAgICBmaW5kZXIub24oXCJlcnJvclwiLCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbCBFcnJvciBcIiArIGVycik7XHJcbiAgICAgICAgZXJyb3JzKys7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXN1bHQgPSBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsX3JlamVjdCk9PntcclxuICAgICAgICByZXNvbHZlID0gX3Jlc29sdmU7XHJcbiAgICAgICAgcmVqZWN0ID0gX3JlamVjdDtcclxuICAgICAgICBmaW5kZXIuc3RhcnRTZWFyY2goKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbmNvbnN0IGZzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZzXCIpKTtcbmNvbnN0IGFzeW5jXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImFzeW5jXCIpKTtcbmNvbnN0IHBhdGhfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicGF0aFwiKSk7XG5jb25zdCBldmVudHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXZlbnRzXCIpKTtcbnZhciBFdmVudEVtaXR0ZXIgPSBldmVudHNfMS5kZWZhdWx0LkV2ZW50RW1pdHRlcjtcbi8qKipcbiAqIFRoaXMgY2xhc3MgcmVjdXJzaXZlbHkgZmluZHMgZmlsZXMgdGhhdCBtYXRjaCB0aGUgZmlsdGVyIGZ1bmN0aW9uIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3JcbiAqIEFuIGFsdGVybmF0aXZlIGNvbnN0cnVjdG9yIHRha2VzIGEgZmlsZU1vZGlmaWVkRGF0ZSBhbmQgcmV0dXJucyBhbGwgZmlsZXMgdGhhdCBoYXZlIGJlZW4gbW9kaWZpZWQgc2luY2UgdGhhdCBkYXRlXG4gKiB0aGlzIGNsYXNzIGVtaXRzIGEgbnVtYmVyIG9mIGV2ZW50c1xuICogb24gXCJtYXRjaFwiIGlzIGVtaXR0ZWQgZm9yIGV2ZXJ5IHBhdGggdGhhdCBtYXRjaGVzXG4gKi9cbmNsYXNzIGZpbmRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAob3B0aW9ucy5maWxlTW9kaWZpZWREYXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZpbHRlckZ1bmN0aW9uID0gKHN0clBhdGgsIGZzU3RhdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZnNTdGF0Lm10aW1lID4gb3B0aW9ucy5maWxlTW9kaWZpZWREYXRlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLmZpbHRlckZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZpbHRlckZ1bmN0aW9uID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBzdGFydFNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5yZWN1cnNlRm9sZGVyKHRoaXMub3B0aW9ucy5yb290Rm9sZGVyLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGhpcyBTaG91bGQgQ2FsbCB3aGVuIGV2ZXJ5dGhpbmcgaXMgZmluaXNoZWRcIik7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlY3Vyc2VGb2xkZXIoc3RyRm9sZGVyTmFtZSwgZm9sZGVyQ29tcGxldGVDYWxsYmFjaykge1xuICAgICAgICBmc18xLmRlZmF1bHQucmVhZGRpcihzdHJGb2xkZXJOYW1lLCAoZXJyLCBmaWxlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMub25QYXRoRXJyb3IoZXJyLCBzdHJGb2xkZXJOYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sZGVyQ29tcGxldGVDYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmaWxlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb2xkZXJDb21wbGV0ZUNhbGxiYWNrKG51bGwpOyAvLyBUaGlzIGlzIGp1c3QgYW4gZW1wdHkgZm9sZGVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3luY18xLmRlZmF1bHQuZWFjaChmaWxlcywgKGZpbGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0clBhdGggPSBwYXRoXzEuZGVmYXVsdC5qb2luKHN0ckZvbGRlck5hbWUsIGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGUsIHN0clBhdGgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7IC8vIERvbid0IHJldHVybiBlcnJvciB0byBjYWxsYmFjayBvciB3ZSB3aWxsIG1pc3Mgb3RoZXIgZmlsZXMgaW4gZGlyZWN0b3J5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub25GaWxlRm91bmQoc3RyUGF0aCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBhdGhFcnJvcihlcnIsIHN0ckZvbGRlck5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgaWYoc3RyRm9sZGVyTmFtZS5sZW5ndGggPCAyMClcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmluaXNoZWQgXCIgKyBzdHJGb2xkZXJOYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sZGVyQ29tcGxldGVDYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkZpbGVGb3VuZChzdHJQYXRoLCBjYWxsYmFjaykge1xuICAgICAgICBmc18xLmRlZmF1bHQubHN0YXQoc3RyUGF0aCwgKGVyciwgc3RhdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMub25QYXRoRXJyb3IoZXJyLCBzdHJQYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7IC8vIERvbid0IHJldHVybiBlcnJvciB0byBjYWxsYmFjayBvciB3ZSB3aWxsIG1pc3Mgb3RoZXIgZmlsZXMgaW4gZGlyZWN0b3J5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKG5ldyBFcnJvcihcIkNvdWxkIG5vdCBnZXQgc3RhdCBmb3IgZmlsZSBcIiArIHN0clBhdGgpLCBzdHJQYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7IC8vIERvbid0IHJldHVybiBlcnJvciB0byBjYWxsYmFjayBvciB3ZSB3aWxsIG1pc3Mgb3RoZXIgZmlsZXMgaW4gZGlyZWN0b3J5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja01hdGNoKHN0clBhdGgsIHN0YXQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdXJzZUZvbGRlcihzdHJQYXRoLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25QYXRoRXJyb3IoZXJyLCBzdHJQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTWF0Y2goc3RyUGF0aCwgc3RhdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hlY2tNYXRjaChzdHJQYXRoLCBzdGF0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZpbHRlckZ1bmN0aW9uKHN0clBhdGgsIHN0YXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwibWF0Y2hcIiwgc3RyUGF0aCwgc3RhdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMub25QYXRoRXJyb3IoZSwgc3RyUGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25QYXRoRXJyb3IoZXJyLCBzdHJQYXRoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJwYXRoZXJyb3JcIiwgZXJyLCBzdHJQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy9BbHJlYWR5IGVtaXR0ZWQgYSBwYXRoIGVycm9yIGFuZCB0aGUgaGFuZGxlciBmYWlsZWQgbXVzdCBub3QgdGhyb3cgZXJyb3Igb3Igb3RoZXIgZmlsZXMgd2lsbCBmYWlsIHRvIHByb2Nlc3MgdG9vXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJFcnJvciBpbiBwYXRoIEVycm9yIEhhbmRsZXJcIiArIGUpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZmluZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZS1maW5kLWZpbGVzLmpzLm1hcCIsIi8qZ2xvYmFsIHNldEltbWVkaWF0ZTogZmFsc2UsIHNldFRpbWVvdXQ6IGZhbHNlLCBjb25zb2xlOiBmYWxzZSAqL1xuKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBhc3luYyA9IHt9O1xuXG4gICAgLy8gZ2xvYmFsIG9uIHRoZSBzZXJ2ZXIsIHdpbmRvdyBpbiB0aGUgYnJvd3NlclxuICAgIHZhciByb290LCBwcmV2aW91c19hc3luYztcblxuICAgIHJvb3QgPSB0aGlzO1xuICAgIGlmIChyb290ICE9IG51bGwpIHtcbiAgICAgIHByZXZpb3VzX2FzeW5jID0gcm9vdC5hc3luYztcbiAgICB9XG5cbiAgICBhc3luYy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByb290LmFzeW5jID0gcHJldmlvdXNfYXN5bmM7XG4gICAgICAgIHJldHVybiBhc3luYztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gb25seV9vbmNlKGZuKSB7XG4gICAgICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGNhbGxlZCkgdGhyb3cgbmV3IEVycm9yKFwiQ2FsbGJhY2sgd2FzIGFscmVhZHkgY2FsbGVkLlwiKTtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBmbi5hcHBseShyb290LCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vLyBjcm9zcy1icm93c2VyIGNvbXBhdGlibGl0eSBmdW5jdGlvbnMgLy8vL1xuXG4gICAgdmFyIF9lYWNoID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IpIHtcbiAgICAgICAgaWYgKGFyci5mb3JFYWNoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyLmZvckVhY2goaXRlcmF0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpdGVyYXRvcihhcnJbaV0sIGksIGFycik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIF9tYXAgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvcikge1xuICAgICAgICBpZiAoYXJyLm1hcCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyci5tYXAoaXRlcmF0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIF9lYWNoKGFyciwgZnVuY3Rpb24gKHgsIGksIGEpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVyYXRvcih4LCBpLCBhKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuXG4gICAgdmFyIF9yZWR1Y2UgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgbWVtbykge1xuICAgICAgICBpZiAoYXJyLnJlZHVjZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyci5yZWR1Y2UoaXRlcmF0b3IsIG1lbW8pO1xuICAgICAgICB9XG4gICAgICAgIF9lYWNoKGFyciwgZnVuY3Rpb24gKHgsIGksIGEpIHtcbiAgICAgICAgICAgIG1lbW8gPSBpdGVyYXRvcihtZW1vLCB4LCBpLCBhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG5cbiAgICB2YXIgX2tleXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cykge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgayBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfTtcblxuICAgIC8vLy8gZXhwb3J0ZWQgYXN5bmMgbW9kdWxlIGZ1bmN0aW9ucyAvLy8vXG5cbiAgICAvLy8vIG5leHRUaWNrIGltcGxlbWVudGF0aW9uIHdpdGggYnJvd3Nlci1jb21wYXRpYmxlIGZhbGxiYWNrIC8vLy9cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8ICEocHJvY2Vzcy5uZXh0VGljaykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgc2V0SW1tZWRpYXRlKGZuKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhc3luYy5uZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXN5bmMubmV4dFRpY2sgPSBwcm9jZXNzLm5leHRUaWNrO1xuICAgIH1cblxuICAgIGFzeW5jLmVhY2ggPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29tcGxldGVkID0gMDtcbiAgICAgICAgX2VhY2goYXJyLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgb25seV9vbmNlKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBhc3luYy5mb3JFYWNoID0gYXN5bmMuZWFjaDtcblxuICAgIGFzeW5jLmVhY2hTZXJpZXMgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29tcGxldGVkID0gMDtcbiAgICAgICAgdmFyIGl0ZXJhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgICAgICAgICBpdGVyYXRvcihhcnJbY29tcGxldGVkXSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhpdGVyYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBpdGVyYXRlKCk7XG4gICAgfTtcbiAgICBhc3luYy5mb3JFYWNoU2VyaWVzID0gYXN5bmMuZWFjaFNlcmllcztcblxuICAgIGFzeW5jLmVhY2hMaW1pdCA9IGZ1bmN0aW9uIChhcnIsIGxpbWl0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGZuID0gX2VhY2hMaW1pdChsaW1pdCk7XG4gICAgICAgIGZuLmFwcGx5KG51bGwsIFthcnIsIGl0ZXJhdG9yLCBjYWxsYmFja10pO1xuICAgIH07XG4gICAgYXN5bmMuZm9yRWFjaExpbWl0ID0gYXN5bmMuZWFjaExpbWl0O1xuXG4gICAgdmFyIF9lYWNoTGltaXQgPSBmdW5jdGlvbiAobGltaXQpIHtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgaWYgKCFhcnIubGVuZ3RoIHx8IGxpbWl0IDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb21wbGV0ZWQgPSAwO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ZWQgPSAwO1xuICAgICAgICAgICAgdmFyIHJ1bm5pbmcgPSAwO1xuXG4gICAgICAgICAgICAoZnVuY3Rpb24gcmVwbGVuaXNoICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJ1bm5pbmcgPCBsaW1pdCAmJiBzdGFydGVkIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3IoYXJyW3N0YXJ0ZWQgLSAxXSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxlbmlzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG5cbiAgICB2YXIgZG9QYXJhbGxlbCA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIFthc3luYy5lYWNoXS5jb25jYXQoYXJncykpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIGRvUGFyYWxsZWxMaW1pdCA9IGZ1bmN0aW9uKGxpbWl0LCBmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIFtfZWFjaExpbWl0KGxpbWl0KV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBkb1NlcmllcyA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIFthc3luYy5lYWNoU2VyaWVzXS5jb25jYXQoYXJncykpO1xuICAgICAgICB9O1xuICAgIH07XG5cblxuICAgIHZhciBfYXN5bmNNYXAgPSBmdW5jdGlvbiAoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBhcnIgPSBfbWFwKGFyciwgZnVuY3Rpb24gKHgsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiB7aW5kZXg6IGksIHZhbHVlOiB4fTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeC52YWx1ZSwgZnVuY3Rpb24gKGVyciwgdikge1xuICAgICAgICAgICAgICAgIHJlc3VsdHNbeC5pbmRleF0gPSB2O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBhc3luYy5tYXAgPSBkb1BhcmFsbGVsKF9hc3luY01hcCk7XG4gICAgYXN5bmMubWFwU2VyaWVzID0gZG9TZXJpZXMoX2FzeW5jTWFwKTtcbiAgICBhc3luYy5tYXBMaW1pdCA9IGZ1bmN0aW9uIChhcnIsIGxpbWl0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIF9tYXBMaW1pdChsaW1pdCkoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICB2YXIgX21hcExpbWl0ID0gZnVuY3Rpb24obGltaXQpIHtcbiAgICAgICAgcmV0dXJuIGRvUGFyYWxsZWxMaW1pdChsaW1pdCwgX2FzeW5jTWFwKTtcbiAgICB9O1xuXG4gICAgLy8gcmVkdWNlIG9ubHkgaGFzIGEgc2VyaWVzIHZlcnNpb24sIGFzIGRvaW5nIHJlZHVjZSBpbiBwYXJhbGxlbCB3b24ndFxuICAgIC8vIHdvcmsgaW4gbWFueSBzaXR1YXRpb25zLlxuICAgIGFzeW5jLnJlZHVjZSA9IGZ1bmN0aW9uIChhcnIsIG1lbW8sIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBhc3luYy5lYWNoU2VyaWVzKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcihtZW1vLCB4LCBmdW5jdGlvbiAoZXJyLCB2KSB7XG4gICAgICAgICAgICAgICAgbWVtbyA9IHY7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIG1lbW8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGluamVjdCBhbGlhc1xuICAgIGFzeW5jLmluamVjdCA9IGFzeW5jLnJlZHVjZTtcbiAgICAvLyBmb2xkbCBhbGlhc1xuICAgIGFzeW5jLmZvbGRsID0gYXN5bmMucmVkdWNlO1xuXG4gICAgYXN5bmMucmVkdWNlUmlnaHQgPSBmdW5jdGlvbiAoYXJyLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJldmVyc2VkID0gX21hcChhcnIsIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfSkucmV2ZXJzZSgpO1xuICAgICAgICBhc3luYy5yZWR1Y2UocmV2ZXJzZWQsIG1lbW8sIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICAvLyBmb2xkciBhbGlhc1xuICAgIGFzeW5jLmZvbGRyID0gYXN5bmMucmVkdWNlUmlnaHQ7XG5cbiAgICB2YXIgX2ZpbHRlciA9IGZ1bmN0aW9uIChlYWNoZm4sIGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGFyciA9IF9tYXAoYXJyLCBmdW5jdGlvbiAoeCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHtpbmRleDogaSwgdmFsdWU6IHh9O1xuICAgICAgICB9KTtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LnZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhfbWFwKHJlc3VsdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcbiAgICAgICAgICAgIH0pLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFzeW5jLmZpbHRlciA9IGRvUGFyYWxsZWwoX2ZpbHRlcik7XG4gICAgYXN5bmMuZmlsdGVyU2VyaWVzID0gZG9TZXJpZXMoX2ZpbHRlcik7XG4gICAgLy8gc2VsZWN0IGFsaWFzXG4gICAgYXN5bmMuc2VsZWN0ID0gYXN5bmMuZmlsdGVyO1xuICAgIGFzeW5jLnNlbGVjdFNlcmllcyA9IGFzeW5jLmZpbHRlclNlcmllcztcblxuICAgIHZhciBfcmVqZWN0ID0gZnVuY3Rpb24gKGVhY2hmbiwgYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgYXJyID0gX21hcChhcnIsIGZ1bmN0aW9uICh4LCBpKSB7XG4gICAgICAgICAgICByZXR1cm4ge2luZGV4OiBpLCB2YWx1ZTogeH07XG4gICAgICAgIH0pO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgudmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhfbWFwKHJlc3VsdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcbiAgICAgICAgICAgIH0pLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFzeW5jLnJlamVjdCA9IGRvUGFyYWxsZWwoX3JlamVjdCk7XG4gICAgYXN5bmMucmVqZWN0U2VyaWVzID0gZG9TZXJpZXMoX3JlamVjdCk7XG5cbiAgICB2YXIgX2RldGVjdCA9IGZ1bmN0aW9uIChlYWNoZm4sIGFyciwgaXRlcmF0b3IsIG1haW5fY2FsbGJhY2spIHtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrKHgpO1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBtYWluX2NhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYXN5bmMuZGV0ZWN0ID0gZG9QYXJhbGxlbChfZGV0ZWN0KTtcbiAgICBhc3luYy5kZXRlY3RTZXJpZXMgPSBkb1NlcmllcyhfZGV0ZWN0KTtcblxuICAgIGFzeW5jLnNvbWUgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgbWFpbl9jYWxsYmFjaykge1xuICAgICAgICBhc3luYy5lYWNoKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5fY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG1haW5fY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBtYWluX2NhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBhbnkgYWxpYXNcbiAgICBhc3luYy5hbnkgPSBhc3luYy5zb21lO1xuXG4gICAgYXN5bmMuZXZlcnkgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgbWFpbl9jYWxsYmFjaykge1xuICAgICAgICBhc3luYy5lYWNoKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICghdikge1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIG1haW5fY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gYWxsIGFsaWFzXG4gICAgYXN5bmMuYWxsID0gYXN5bmMuZXZlcnk7XG5cbiAgICBhc3luYy5zb3J0QnkgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMubWFwKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAoZXJyLCBjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHt2YWx1ZTogeCwgY3JpdGVyaWE6IGNyaXRlcmlhfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWEsIGIgPSByaWdodC5jcml0ZXJpYTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgX21hcChyZXN1bHRzLnNvcnQoZm4pLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYy5hdXRvID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICB2YXIga2V5cyA9IF9rZXlzKHRhc2tzKTtcbiAgICAgICAgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdHMgPSB7fTtcblxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICAgIHZhciBhZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgbGlzdGVuZXJzLnVuc2hpZnQoZm4pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyc1tpXSA9PT0gZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRhc2tDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9lYWNoKGxpc3RlbmVycy5zbGljZSgwKSwgZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfa2V5cyhyZXN1bHRzKS5sZW5ndGggPT09IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2VhY2goa2V5cywgZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gKHRhc2tzW2tdIGluc3RhbmNlb2YgRnVuY3Rpb24pID8gW3Rhc2tzW2tdXTogdGFza3Nba107XG4gICAgICAgICAgICB2YXIgdGFza0NhbGxiYWNrID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2FmZVJlc3VsdHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgX2VhY2goX2tleXMocmVzdWx0cyksIGZ1bmN0aW9uKHJrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhZmVSZXN1bHRzW3JrZXldID0gcmVzdWx0c1tya2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNhZmVSZXN1bHRzW2tdID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCBzYWZlUmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3Agc3Vic2VxdWVudCBlcnJvcnMgaGl0dGluZyBjYWxsYmFjayBtdWx0aXBsZSB0aW1lc1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKHRhc2tDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciByZXF1aXJlcyA9IHRhc2suc2xpY2UoMCwgTWF0aC5hYnModGFzay5sZW5ndGggLSAxKSkgfHwgW107XG4gICAgICAgICAgICB2YXIgcmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWR1Y2UocmVxdWlyZXMsIGZ1bmN0aW9uIChhLCB4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoYSAmJiByZXN1bHRzLmhhc093blByb3BlcnR5KHgpKTtcbiAgICAgICAgICAgICAgICB9LCB0cnVlKSAmJiAhcmVzdWx0cy5oYXNPd25Qcm9wZXJ0eShrKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocmVhZHkoKSkge1xuICAgICAgICAgICAgICAgIHRhc2tbdGFzay5sZW5ndGggLSAxXSh0YXNrQ2FsbGJhY2ssIHJlc3VsdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVhZHkoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1t0YXNrLmxlbmd0aCAtIDFdKHRhc2tDYWxsYmFjaywgcmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGFzeW5jLndhdGVyZmFsbCA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3cmFwSXRlcmF0b3IgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh3cmFwSXRlcmF0b3IobmV4dCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRvci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgd3JhcEl0ZXJhdG9yKGFzeW5jLml0ZXJhdG9yKHRhc2tzKSkoKTtcbiAgICB9O1xuXG4gICAgdmFyIF9wYXJhbGxlbCA9IGZ1bmN0aW9uKGVhY2hmbiwgdGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIGlmICh0YXNrcy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIGVhY2hmbi5tYXAodGFza3MsIGZ1bmN0aW9uIChmbiwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgZm4oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgZXJyLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSB7fTtcbiAgICAgICAgICAgIGVhY2hmbi5lYWNoKF9rZXlzKHRhc2tzKSwgZnVuY3Rpb24gKGssIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGFza3Nba10oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzW2tdID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMucGFyYWxsZWwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9wYXJhbGxlbCh7IG1hcDogYXN5bmMubWFwLCBlYWNoOiBhc3luYy5lYWNoIH0sIHRhc2tzLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnBhcmFsbGVsTGltaXQgPSBmdW5jdGlvbih0YXNrcywgbGltaXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9wYXJhbGxlbCh7IG1hcDogX21hcExpbWl0KGxpbWl0KSwgZWFjaDogX2VhY2hMaW1pdChsaW1pdCkgfSwgdGFza3MsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuc2VyaWVzID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBpZiAodGFza3MuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICBhc3luYy5tYXBTZXJpZXModGFza3MsIGZ1bmN0aW9uIChmbiwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgZm4oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgZXJyLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSB7fTtcbiAgICAgICAgICAgIGFzeW5jLmVhY2hTZXJpZXMoX2tleXModGFza3MpLCBmdW5jdGlvbiAoaywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0YXNrc1trXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNba10gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYy5pdGVyYXRvciA9IGZ1bmN0aW9uICh0YXNrcykge1xuICAgICAgICB2YXIgbWFrZUNhbGxiYWNrID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrc1tpbmRleF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLm5leHQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmbi5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaW5kZXggPCB0YXNrcy5sZW5ndGggLSAxKSA/IG1ha2VDYWxsYmFjayhpbmRleCArIDEpOiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBmbjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG1ha2VDYWxsYmFjaygwKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuYXBwbHkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KFxuICAgICAgICAgICAgICAgIG51bGwsIGFyZ3MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICB2YXIgX2NvbmNhdCA9IGZ1bmN0aW9uIChlYWNoZm4sIGFyciwgZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByID0gW107XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBjYikge1xuICAgICAgICAgICAgZm4oeCwgZnVuY3Rpb24gKGVyciwgeSkge1xuICAgICAgICAgICAgICAgIHIgPSByLmNvbmNhdCh5IHx8IFtdKTtcbiAgICAgICAgICAgICAgICBjYihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYXN5bmMuY29uY2F0ID0gZG9QYXJhbGxlbChfY29uY2F0KTtcbiAgICBhc3luYy5jb25jYXRTZXJpZXMgPSBkb1NlcmllcyhfY29uY2F0KTtcblxuICAgIGFzeW5jLndoaWxzdCA9IGZ1bmN0aW9uICh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRlc3QoKSkge1xuICAgICAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgaXRlcmF0b3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jLndoaWxzdCh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLndoaWxzdCh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYy5kb1doaWxzdCA9IGZ1bmN0aW9uIChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICBpdGVyYXRvcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGVzdCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMuZG9XaGlsc3QoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5kb1doaWxzdChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGFzeW5jLnVudGlsID0gZnVuY3Rpb24gKHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRlc3QoKSkge1xuICAgICAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgaXRlcmF0b3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jLnVudGlsKHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMudW50aWwodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuZG9VbnRpbCA9IGZ1bmN0aW9uIChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICBpdGVyYXRvcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRlc3QoKSkge1xuICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jLmRvVW50aWwoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5kb1VudGlsKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgYXN5bmMucXVldWUgPSBmdW5jdGlvbiAod29ya2VyLCBjb25jdXJyZW5jeSkge1xuICAgICAgICBpZiAoY29uY3VycmVuY3kgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uY3VycmVuY3kgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9pbnNlcnQocSwgZGF0YSwgcG9zLCBjYWxsYmFjaykge1xuICAgICAgICAgIGlmKGRhdGEuY29uc3RydWN0b3IgIT09IEFycmF5KSB7XG4gICAgICAgICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICAgICAgfVxuICAgICAgICAgIF9lYWNoKGRhdGEsIGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiB0YXNrLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogbnVsbFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIGlmIChwb3MpIHtcbiAgICAgICAgICAgICAgICBxLnRhc2tzLnVuc2hpZnQoaXRlbSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcS50YXNrcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHEuc2F0dXJhdGVkICYmIHEudGFza3MubGVuZ3RoID09PSBjb25jdXJyZW5jeSkge1xuICAgICAgICAgICAgICAgICAgcS5zYXR1cmF0ZWQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhxLnByb2Nlc3MpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHdvcmtlcnMgPSAwO1xuICAgICAgICB2YXIgcSA9IHtcbiAgICAgICAgICAgIHRhc2tzOiBbXSxcbiAgICAgICAgICAgIGNvbmN1cnJlbmN5OiBjb25jdXJyZW5jeSxcbiAgICAgICAgICAgIHNhdHVyYXRlZDogbnVsbCxcbiAgICAgICAgICAgIGVtcHR5OiBudWxsLFxuICAgICAgICAgICAgZHJhaW46IG51bGwsXG4gICAgICAgICAgICBwdXNoOiBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgX2luc2VydChxLCBkYXRhLCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuc2hpZnQ6IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICBfaW5zZXJ0KHEsIGRhdGEsIHRydWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdvcmtlcnMgPCBxLmNvbmN1cnJlbmN5ICYmIHEudGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXNrID0gcS50YXNrcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocS5lbXB0eSAmJiBxLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlcnMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlcnMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5jYWxsYmFjay5hcHBseSh0YXNrLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHEuZHJhaW4gJiYgcS50YXNrcy5sZW5ndGggKyB3b3JrZXJzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5kcmFpbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcS5wcm9jZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYiA9IG9ubHlfb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2JBcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5hcHBseShudWxsLCBjYkFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB3b3JrZXIodGFzay5kYXRhLCBjYik7XG4gICAgICAgICAgICAgICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHEudGFza3MubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJ1bm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHE7XG4gICAgfTtcblxuICAgIGFzeW5jLmNhcmdvID0gZnVuY3Rpb24gKHdvcmtlciwgcGF5bG9hZCkge1xuICAgICAgICB2YXIgd29ya2luZyAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIHRhc2tzICAgICAgID0gW107XG5cbiAgICAgICAgdmFyIGNhcmdvID0ge1xuICAgICAgICAgICAgdGFza3M6IHRhc2tzLFxuICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgICAgIHNhdHVyYXRlZDogbnVsbCxcbiAgICAgICAgICAgIGVtcHR5OiBudWxsLFxuICAgICAgICAgICAgZHJhaW46IG51bGwsXG4gICAgICAgICAgICBwdXNoOiBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfZWFjaChkYXRhLCBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGFzayxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJnby5zYXR1cmF0ZWQgJiYgdGFza3MubGVuZ3RoID09PSBwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJnby5zYXR1cmF0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGNhcmdvLnByb2Nlc3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIHByb2Nlc3MoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdvcmtpbmcpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNhcmdvLmRyYWluKSBjYXJnby5kcmFpbigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHRzID0gdHlwZW9mIHBheWxvYWQgPT09ICdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0YXNrcy5zcGxpY2UoMCwgcGF5bG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRhc2tzLnNwbGljZSgwKTtcblxuICAgICAgICAgICAgICAgIHZhciBkcyA9IF9tYXAodHMsIGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLmRhdGE7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZihjYXJnby5lbXB0eSkgY2FyZ28uZW1wdHkoKTtcbiAgICAgICAgICAgICAgICB3b3JraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3b3JrZXIoZHMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgd29ya2luZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICBfZWFjaCh0cywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jYWxsYmFjay5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvY2VzcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrcy5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnVubmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3b3JraW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY2FyZ287XG4gICAgfTtcblxuICAgIHZhciBfY29uc29sZV9mbiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KFtmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY29uc29sZVtuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2VhY2goYXJncywgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlW25hbWVdKHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSkpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgYXN5bmMubG9nID0gX2NvbnNvbGVfZm4oJ2xvZycpO1xuICAgIGFzeW5jLmRpciA9IF9jb25zb2xlX2ZuKCdkaXInKTtcbiAgICAvKmFzeW5jLmluZm8gPSBfY29uc29sZV9mbignaW5mbycpO1xuICAgIGFzeW5jLndhcm4gPSBfY29uc29sZV9mbignd2FybicpO1xuICAgIGFzeW5jLmVycm9yID0gX2NvbnNvbGVfZm4oJ2Vycm9yJyk7Ki9cblxuICAgIGFzeW5jLm1lbW9pemUgPSBmdW5jdGlvbiAoZm4sIGhhc2hlcikge1xuICAgICAgICB2YXIgbWVtbyA9IHt9O1xuICAgICAgICB2YXIgcXVldWVzID0ge307XG4gICAgICAgIGhhc2hlciA9IGhhc2hlciB8fCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICB2YXIga2V5ID0gaGFzaGVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKGtleSBpbiBtZW1vKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgbWVtb1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSBpbiBxdWV1ZXMpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZXNba2V5XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXVlc1trZXldID0gW2NhbGxiYWNrXTtcbiAgICAgICAgICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChbZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBtZW1vW2tleV0gPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBxID0gcXVldWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBxdWV1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBxLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgIHFbaV0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG1lbW9pemVkLm1lbW8gPSBtZW1vO1xuICAgICAgICBtZW1vaXplZC51bm1lbW9pemVkID0gZm47XG4gICAgICAgIHJldHVybiBtZW1vaXplZDtcbiAgICB9O1xuXG4gICAgYXN5bmMudW5tZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGZuLnVubWVtb2l6ZWQgfHwgZm4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBhc3luYy50aW1lcyA9IGZ1bmN0aW9uIChjb3VudCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjb3VudGVyID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY291bnRlci5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhc3luYy5tYXAoY291bnRlciwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMudGltZXNTZXJpZXMgPSBmdW5jdGlvbiAoY291bnQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgY291bnRlciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvdW50ZXIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXN5bmMubWFwU2VyaWVzKGNvdW50ZXIsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLmNvbXBvc2UgPSBmdW5jdGlvbiAoLyogZnVuY3Rpb25zLi4uICovKSB7XG4gICAgICAgIHZhciBmbnMgPSBBcnJheS5wcm90b3R5cGUucmV2ZXJzZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgYXN5bmMucmVkdWNlKGZucywgYXJncywgZnVuY3Rpb24gKG5ld2FyZ3MsIGZuLCBjYikge1xuICAgICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIG5ld2FyZ3MuY29uY2F0KFtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNiKGVyciwgbmV4dGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1dKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyLCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhhdCwgW2Vycl0uY29uY2F0KHJlc3VsdHMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBhc3luYy5hcHBseUVhY2ggPSBmdW5jdGlvbiAoZm5zIC8qYXJncy4uLiovKSB7XG4gICAgICAgIHZhciBnbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMuZWFjaChmbnMsIGZ1bmN0aW9uIChmbiwgY2IpIHtcbiAgICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzLmNvbmNhdChbY2JdKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgIHJldHVybiBnby5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnbztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBBTUQgLyBSZXF1aXJlSlNcbiAgICBpZiAodHlwZW9mIGRlZmluZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBhc3luYztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE5vZGUuanNcbiAgICBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGFzeW5jO1xuICAgIH1cbiAgICAvLyBpbmNsdWRlZCBkaXJlY3RseSB2aWEgPHNjcmlwdD4gdGFnXG4gICAgZWxzZSB7XG4gICAgICAgIHJvb3QuYXN5bmMgPSBhc3luYztcbiAgICB9XG5cbn0oKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTsiLCJcclxuY29uc3QgY3Jhd2xlciA9IHJlcXVpcmUoJy4vaW5jbHVkZS9jcmF3bGVyJyk7XHJcbmNvbnN0IGN3ID0gcmVxdWlyZSgnLi9pbmNsdWRlL2NvbW1vbi13b3Jkcy5qcycpO1xyXG5cclxuY29uc3QgTUFYX1dPUkRTID0gMTAwMDAwMDA7XHJcbmNvbnN0IENBQ0hFX0NMVVNURVJTID0gZmFsc2U7XHJcbmNvbnN0IE1BWF9OT0RFX0ZSRVFVRU5DWSA9IDEwMDA7XHJcbmNvbnN0IFRSQVZFUlNFX1NJTUlMQVIgPSB0cnVlO1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50LCBjb250ZXh0KSB7XHJcbiAgY3Jhd2xlci5pbml0Q3Jhd2xlcihcclxuICAgIE1BWF9XT1JEUyxcclxuICAgIENBQ0hFX0NMVVNURVJTLFxyXG4gICAgTUFYX05PREVfRlJFUVVFTkNZLFxyXG4gICAgVFJBVkVSU0VfU0lNSUxBUlxyXG4gICAgKTtcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImNyYXdsaW5nIGluIHRoZSBiYWNrZ3JvdW5kIHN0YXJ0aW5nIGZyb20gdG9wIDMwMDAgRW5nbGlzaCB3b3Jkcy4uLlwiKTtcclxuXHJcbiAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGNvbW1vbldvcmQgaW4gY3cuVGhlTW9zdENvbW1vbjMwMDApIHtcclxuICAgICAgcHJvbWlzZXMucHVzaChjcmF3bGVyLmxvYWRDbHVzdGVyKGNvbW1vbldvcmQsIGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhdHVzQ29kZTogMjAwLFxyXG4gICAgICBib2R5OiBqc29uLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZTogNTAwLCBib2R5OiBlcnIudG9TdHJpbmcoKSB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=