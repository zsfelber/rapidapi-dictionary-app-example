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
let cacheIsInitialized = false;
let totalWordsLastDay = 0;

async function lazyInitCache() {
  if (!cacheIsInitialized) {
    cacheIsInitialized = true;
    let curtime = new Date(); // 86400000 milliseconds (24 hours)

    totalWordsLastDay = await finder.findFiles("cache/words", curtime - 86400000);
    console.log("lazyInitCache  totalWordsLastDay : " + totalWordsLastDay + " errors:" + finder.errors);
  }

  if (totalWordsLastDay >= API_DAILY_LIMIT) {
    console.error("Could not make request to file/single " + wfpath + "  totalWordsLastDay >= API_DAILY_LIMIT :  " + totalWordsLastDay + " >= " + API_DAILY_LIMIT + "\n");
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

  if (!(await lazyInitCache())) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZm9sbG93LXJlZGlyZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9pbmNsdWRlL2NvbW1vbi13b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9pbmNsdWRlL2NyYXdsZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9odHRwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmVhbVwiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9ub2RlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9zXCIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYXMtZmxhZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6bGliXCIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL2luY2x1ZGUvZmluZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbm9kZS1maW5kLWZpbGVzL2Rpc3Qvbm9kZS1maW5kLWZpbGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXN5bmMvbGliL2FzeW5jLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vLi9jcmF3bC1iYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIlRoZU1vc3RDb21tb24zMDAwIiwiYSIsImFiYW5kb24iLCJhYmlsaXR5IiwiYWJsZSIsImFib3J0aW9uIiwiYWJvdXQiLCJhYm92ZSIsImFicm9hZCIsImFic2VuY2UiLCJhYnNvbHV0ZSIsImFic29sdXRlbHkiLCJhYnNvcmIiLCJhYnVzZSIsImFjYWRlbWljIiwiYWNjZXB0IiwiYWNjZXNzIiwiYWNjaWRlbnQiLCJhY2NvbXBhbnkiLCJhY2NvbXBsaXNoIiwiYWNjb3JkaW5nIiwiYWNjb3VudCIsImFjY3VyYXRlIiwiYWNjdXNlIiwiYWNoaWV2ZSIsImFjaGlldmVtZW50IiwiYWNpZCIsImFja25vd2xlZGdlIiwiYWNxdWlyZSIsImFjcm9zcyIsImFjdCIsImFjdGlvbiIsImFjdGl2ZSIsImFjdGl2aXN0IiwiYWN0aXZpdHkiLCJhY3RvciIsImFjdHJlc3MiLCJhY3R1YWwiLCJhY3R1YWxseSIsImFkIiwiYWRhcHQiLCJhZGQiLCJhZGRpdGlvbiIsImFkZGl0aW9uYWwiLCJhZGRyZXNzIiwiYWRlcXVhdGUiLCJhZGp1c3QiLCJhZGp1c3RtZW50IiwiYWRtaW5pc3RyYXRpb24iLCJhZG1pbmlzdHJhdG9yIiwiYWRtaXJlIiwiYWRtaXNzaW9uIiwiYWRtaXQiLCJhZG9sZXNjZW50IiwiYWRvcHQiLCJhZHVsdCIsImFkdmFuY2UiLCJhZHZhbmNlZCIsImFkdmFudGFnZSIsImFkdmVudHVyZSIsImFkdmVydGlzaW5nIiwiYWR2aWNlIiwiYWR2aXNlIiwiYWR2aXNlciIsImFkdm9jYXRlIiwiYWZmYWlyIiwiYWZmZWN0IiwiYWZmb3JkIiwiYWZyYWlkIiwiQWZyaWNhbiIsImFmdGVyIiwiYWZ0ZXJub29uIiwiYWdhaW4iLCJhZ2FpbnN0IiwiYWdlIiwiYWdlbmN5IiwiYWdlbmRhIiwiYWdlbnQiLCJhZ2dyZXNzaXZlIiwiYWdvIiwiYWdyZWUiLCJhZ3JlZW1lbnQiLCJhZ3JpY3VsdHVyYWwiLCJhaCIsImFoZWFkIiwiYWlkIiwiYWlkZSIsIkFJRFMiLCJhaW0iLCJhaXIiLCJhaXJjcmFmdCIsImFpcmxpbmUiLCJhaXJwb3J0IiwiYWxidW0iLCJhbGNvaG9sIiwiYWxpdmUiLCJhbGwiLCJhbGxpYW5jZSIsImFsbG93IiwiYWxseSIsImFsbW9zdCIsImFsb25lIiwiYWxvbmciLCJhbHJlYWR5IiwiYWxzbyIsImFsdGVyIiwiYWx0ZXJuYXRpdmUiLCJhbHRob3VnaCIsImFsd2F5cyIsIkFNIiwiYW1hemluZyIsIkFtZXJpY2FuIiwiYW1vbmciLCJhbW91bnQiLCJhbmFseXNpcyIsImFuYWx5c3QiLCJhbmFseXplIiwiYW5jaWVudCIsImFuZCIsImFuZ2VyIiwiYW5nbGUiLCJhbmdyeSIsImFuaW1hbCIsImFubml2ZXJzYXJ5IiwiYW5ub3VuY2UiLCJhbm51YWwiLCJhbm90aGVyIiwiYW5zd2VyIiwiYW50aWNpcGF0ZSIsImFueGlldHkiLCJhbnkiLCJhbnlib2R5IiwiYW55bW9yZSIsImFueW9uZSIsImFueXRoaW5nIiwiYW55d2F5IiwiYW55d2hlcmUiLCJhcGFydCIsImFwYXJ0bWVudCIsImFwcGFyZW50IiwiYXBwYXJlbnRseSIsImFwcGVhbCIsImFwcGVhciIsImFwcGVhcmFuY2UiLCJhcHBsZSIsImFwcGxpY2F0aW9uIiwiYXBwbHkiLCJhcHBvaW50IiwiYXBwb2ludG1lbnQiLCJhcHByZWNpYXRlIiwiYXBwcm9hY2giLCJhcHByb3ByaWF0ZSIsImFwcHJvdmFsIiwiYXBwcm92ZSIsImFwcHJveGltYXRlbHkiLCJBcmFiIiwiYXJjaGl0ZWN0IiwiYXJlYSIsImFyZ3VlIiwiYXJndW1lbnQiLCJhcmlzZSIsImFybSIsImFybWVkIiwiYXJteSIsImFyb3VuZCIsImFycmFuZ2UiLCJhcnJhbmdlbWVudCIsImFycmVzdCIsImFycml2YWwiLCJhcnJpdmUiLCJhcnQiLCJhcnRpY2xlIiwiYXJ0aXN0IiwiYXJ0aXN0aWMiLCJhcyIsIkFzaWFuIiwiYXNpZGUiLCJhc2siLCJhc2xlZXAiLCJhc3BlY3QiLCJhc3NhdWx0IiwiYXNzZXJ0IiwiYXNzZXNzIiwiYXNzZXNzbWVudCIsImFzc2V0IiwiYXNzaWduIiwiYXNzaWdubWVudCIsImFzc2lzdCIsImFzc2lzdGFuY2UiLCJhc3Npc3RhbnQiLCJhc3NvY2lhdGUiLCJhc3NvY2lhdGlvbiIsImFzc3VtZSIsImFzc3VtcHRpb24iLCJhc3N1cmUiLCJhdCIsImF0aGxldGUiLCJhdGhsZXRpYyIsImF0bW9zcGhlcmUiLCJhdHRhY2giLCJhdHRhY2siLCJhdHRlbXB0IiwiYXR0ZW5kIiwiYXR0ZW50aW9uIiwiYXR0aXR1ZGUiLCJhdHRvcm5leSIsImF0dHJhY3QiLCJhdHRyYWN0aXZlIiwiYXR0cmlidXRlIiwiYXVkaWVuY2UiLCJhdXRob3IiLCJhdXRob3JpdHkiLCJhdXRvIiwiYXZhaWxhYmxlIiwiYXZlcmFnZSIsImF2b2lkIiwiYXdhcmQiLCJhd2FyZSIsImF3YXJlbmVzcyIsImF3YXkiLCJhd2Z1bCIsImJhYnkiLCJiYWNrIiwiYmFja2dyb3VuZCIsImJhZCIsImJhZGx5IiwiYmFnIiwiYmFrZSIsImJhbGFuY2UiLCJiYWxsIiwiYmFuIiwiYmFuZCIsImJhbmsiLCJiYXIiLCJiYXJlbHkiLCJiYXJyZWwiLCJiYXJyaWVyIiwiYmFzZSIsImJhc2ViYWxsIiwiYmFzaWMiLCJiYXNpY2FsbHkiLCJiYXNpcyIsImJhc2tldCIsImJhc2tldGJhbGwiLCJiYXRocm9vbSIsImJhdHRlcnkiLCJiYXR0bGUiLCJiZSIsImJlYWNoIiwiYmVhbiIsImJlYXIiLCJiZWF0IiwiYmVhdXRpZnVsIiwiYmVhdXR5IiwiYmVjYXVzZSIsImJlY29tZSIsImJlZCIsImJlZHJvb20iLCJiZWVyIiwiYmVmb3JlIiwiYmVnaW4iLCJiZWdpbm5pbmciLCJiZWhhdmlvciIsImJlaGluZCIsImJlaW5nIiwiYmVsaWVmIiwiYmVsaWV2ZSIsImJlbGwiLCJiZWxvbmciLCJiZWxvdyIsImJlbHQiLCJiZW5jaCIsImJlbmQiLCJiZW5lYXRoIiwiYmVuZWZpdCIsImJlc2lkZSIsImJlc2lkZXMiLCJiZXN0IiwiYmV0IiwiYmV0dGVyIiwiYmV0d2VlbiIsImJleW9uZCIsIkJpYmxlIiwiYmlnIiwiYmlrZSIsImJpbGwiLCJiaWxsaW9uIiwiYmluZCIsImJpb2xvZ2ljYWwiLCJiaXJkIiwiYmlydGgiLCJiaXJ0aGRheSIsImJpdCIsImJpdGUiLCJibGFjayIsImJsYWRlIiwiYmxhbWUiLCJibGFua2V0IiwiYmxpbmQiLCJibG9jayIsImJsb29kIiwiYmxvdyIsImJsdWUiLCJib2FyZCIsImJvYXQiLCJib2R5IiwiYm9tYiIsImJvbWJpbmciLCJib25kIiwiYm9uZSIsImJvb2siLCJib29tIiwiYm9vdCIsImJvcmRlciIsImJvcm4iLCJib3Jyb3ciLCJib3NzIiwiYm90aCIsImJvdGhlciIsImJvdHRsZSIsImJvdHRvbSIsImJvdW5kYXJ5IiwiYm93bCIsImJveCIsImJveSIsImJveWZyaWVuZCIsImJyYWluIiwiYnJhbmNoIiwiYnJhbmQiLCJicmVhZCIsImJyZWFrIiwiYnJlYWtmYXN0IiwiYnJlYXN0IiwiYnJlYXRoIiwiYnJlYXRoZSIsImJyaWNrIiwiYnJpZGdlIiwiYnJpZWYiLCJicmllZmx5IiwiYnJpZ2h0IiwiYnJpbGxpYW50IiwiYnJpbmciLCJCcml0aXNoIiwiYnJvYWQiLCJicm9rZW4iLCJicm90aGVyIiwiYnJvd24iLCJicnVzaCIsImJ1Y2siLCJidWRnZXQiLCJidWlsZCIsImJ1aWxkaW5nIiwiYnVsbGV0IiwiYnVuY2giLCJidXJkZW4iLCJidXJuIiwiYnVyeSIsImJ1cyIsImJ1c2luZXNzIiwiYnVzeSIsImJ1dCIsImJ1dHRlciIsImJ1dHRvbiIsImJ1eSIsImJ1eWVyIiwiYnkiLCJjYWJpbiIsImNhYmluZXQiLCJjYWJsZSIsImNha2UiLCJjYWxjdWxhdGUiLCJjYWxsIiwiY2FtZXJhIiwiY2FtcCIsImNhbXBhaWduIiwiY2FtcHVzIiwiY2FuIiwiQ2FuYWRpYW4iLCJjYW5jZXIiLCJjYW5kaWRhdGUiLCJjYXAiLCJjYXBhYmlsaXR5IiwiY2FwYWJsZSIsImNhcGFjaXR5IiwiY2FwaXRhbCIsImNhcHRhaW4iLCJjYXB0dXJlIiwiY2FyIiwiY2FyYm9uIiwiY2FyZCIsImNhcmUiLCJjYXJlZXIiLCJjYXJlZnVsIiwiY2FyZWZ1bGx5IiwiY2FycmllciIsImNhcnJ5IiwiY2FzZSIsImNhc2giLCJjYXN0IiwiY2F0IiwiY2F0Y2giLCJjYXRlZ29yeSIsIkNhdGhvbGljIiwiY2F1c2UiLCJjZWlsaW5nIiwiY2VsZWJyYXRlIiwiY2VsZWJyYXRpb24iLCJjZWxlYnJpdHkiLCJjZWxsIiwiY2VudGVyIiwiY2VudHJhbCIsImNlbnR1cnkiLCJDRU8iLCJjZXJlbW9ueSIsImNlcnRhaW4iLCJjZXJ0YWlubHkiLCJjaGFpbiIsImNoYWlyIiwiY2hhaXJtYW4iLCJjaGFsbGVuZ2UiLCJjaGFtYmVyIiwiY2hhbXBpb24iLCJjaGFtcGlvbnNoaXAiLCJjaGFuY2UiLCJjaGFuZ2UiLCJjaGFuZ2luZyIsImNoYW5uZWwiLCJjaGFwdGVyIiwiY2hhcmFjdGVyIiwiY2hhcmFjdGVyaXN0aWMiLCJjaGFyYWN0ZXJpemUiLCJjaGFyZ2UiLCJjaGFyaXR5IiwiY2hhcnQiLCJjaGFzZSIsImNoZWFwIiwiY2hlY2siLCJjaGVlayIsImNoZWVzZSIsImNoZWYiLCJjaGVtaWNhbCIsImNoZXN0IiwiY2hpY2tlbiIsImNoaWVmIiwiY2hpbGQiLCJjaGlsZGhvb2QiLCJDaGluZXNlIiwiY2hpcCIsImNob2NvbGF0ZSIsImNob2ljZSIsImNob2xlc3Rlcm9sIiwiY2hvb3NlIiwiQ2hyaXN0aWFuIiwiQ2hyaXN0bWFzIiwiY2h1cmNoIiwiY2lnYXJldHRlIiwiY2lyY2xlIiwiY2lyY3Vtc3RhbmNlIiwiY2l0ZSIsImNpdGl6ZW4iLCJjaXR5IiwiY2l2aWwiLCJjaXZpbGlhbiIsImNsYWltIiwiY2xhc3MiLCJjbGFzc2ljIiwiY2xhc3Nyb29tIiwiY2xlYW4iLCJjbGVhciIsImNsZWFybHkiLCJjbGllbnQiLCJjbGltYXRlIiwiY2xpbWIiLCJjbGluaWMiLCJjbGluaWNhbCIsImNsb2NrIiwiY2xvc2UiLCJjbG9zZWx5IiwiY2xvc2VyIiwiY2xvdGhlcyIsImNsb3RoaW5nIiwiY2xvdWQiLCJjbHViIiwiY2x1ZSIsImNsdXN0ZXIiLCJjb2FjaCIsImNvYWwiLCJjb2FsaXRpb24iLCJjb2FzdCIsImNvYXQiLCJjb2RlIiwiY29mZmVlIiwiY29nbml0aXZlIiwiY29sZCIsImNvbGxhcHNlIiwiY29sbGVhZ3VlIiwiY29sbGVjdCIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aXZlIiwiY29sbGVnZSIsImNvbG9uaWFsIiwiY29sb3IiLCJjb2x1bW4iLCJjb21iaW5hdGlvbiIsImNvbWJpbmUiLCJjb21lIiwiY29tZWR5IiwiY29tZm9ydCIsImNvbWZvcnRhYmxlIiwiY29tbWFuZCIsImNvbW1hbmRlciIsImNvbW1lbnQiLCJjb21tZXJjaWFsIiwiY29tbWlzc2lvbiIsImNvbW1pdCIsImNvbW1pdG1lbnQiLCJjb21taXR0ZWUiLCJjb21tb24iLCJjb21tdW5pY2F0ZSIsImNvbW11bmljYXRpb24iLCJjb21tdW5pdHkiLCJjb21wYW55IiwiY29tcGFyZSIsImNvbXBhcmlzb24iLCJjb21wZXRlIiwiY29tcGV0aXRpb24iLCJjb21wZXRpdGl2ZSIsImNvbXBldGl0b3IiLCJjb21wbGFpbiIsImNvbXBsYWludCIsImNvbXBsZXRlIiwiY29tcGxldGVseSIsImNvbXBsZXgiLCJjb21wbGljYXRlZCIsImNvbXBvbmVudCIsImNvbXBvc2UiLCJjb21wb3NpdGlvbiIsImNvbXByZWhlbnNpdmUiLCJjb21wdXRlciIsImNvbmNlbnRyYXRlIiwiY29uY2VudHJhdGlvbiIsImNvbmNlcHQiLCJjb25jZXJuIiwiY29uY2VybmVkIiwiY29uY2VydCIsImNvbmNsdWRlIiwiY29uY2x1c2lvbiIsImNvbmNyZXRlIiwiY29uZGl0aW9uIiwiY29uZHVjdCIsImNvbmZlcmVuY2UiLCJjb25maWRlbmNlIiwiY29uZmlkZW50IiwiY29uZmlybSIsImNvbmZsaWN0IiwiY29uZnJvbnQiLCJjb25mdXNpb24iLCJDb25ncmVzcyIsImNvbmdyZXNzaW9uYWwiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsImNvbnNjaW91c25lc3MiLCJjb25zZW5zdXMiLCJjb25zZXF1ZW5jZSIsImNvbnNlcnZhdGl2ZSIsImNvbnNpZGVyIiwiY29uc2lkZXJhYmxlIiwiY29uc2lkZXJhdGlvbiIsImNvbnNpc3QiLCJjb25zaXN0ZW50IiwiY29uc3RhbnQiLCJjb25zdGFudGx5IiwiY29uc3RpdHV0ZSIsImNvbnN0aXR1dGlvbmFsIiwiY29uc3RydWN0IiwiY29uc3RydWN0aW9uIiwiY29uc3VsdGFudCIsImNvbnN1bWUiLCJjb25zdW1lciIsImNvbnN1bXB0aW9uIiwiY29udGFjdCIsImNvbnRhaW4iLCJjb250YWluZXIiLCJjb250ZW1wb3JhcnkiLCJjb250ZW50IiwiY29udGVzdCIsImNvbnRleHQiLCJjb250aW51ZSIsImNvbnRpbnVlZCIsImNvbnRyYWN0IiwiY29udHJhc3QiLCJjb250cmlidXRlIiwiY29udHJpYnV0aW9uIiwiY29udHJvbCIsImNvbnRyb3ZlcnNpYWwiLCJjb250cm92ZXJzeSIsImNvbnZlbnRpb24iLCJjb252ZW50aW9uYWwiLCJjb252ZXJzYXRpb24iLCJjb252ZXJ0IiwiY29udmljdGlvbiIsImNvbnZpbmNlIiwiY29vayIsImNvb2tpZSIsImNvb2tpbmciLCJjb29sIiwiY29vcGVyYXRpb24iLCJjb3AiLCJjb3BlIiwiY29weSIsImNvcmUiLCJjb3JuIiwiY29ybmVyIiwiY29ycG9yYXRlIiwiY29ycG9yYXRpb24iLCJjb3JyZWN0IiwiY29ycmVzcG9uZGVudCIsImNvc3QiLCJjb3R0b24iLCJjb3VjaCIsImNvdWxkIiwiY291bmNpbCIsImNvdW5zZWxvciIsImNvdW50IiwiY291bnRlciIsImNvdW50cnkiLCJjb3VudHkiLCJjb3VwbGUiLCJjb3VyYWdlIiwiY291cnNlIiwiY291cnQiLCJjb3VzaW4iLCJjb3ZlciIsImNvdmVyYWdlIiwiY293IiwiY3JhY2siLCJjcmFmdCIsImNyYXNoIiwiY3JhenkiLCJjcmVhbSIsImNyZWF0ZSIsImNyZWF0aW9uIiwiY3JlYXRpdmUiLCJjcmVhdHVyZSIsImNyZWRpdCIsImNyZXciLCJjcmltZSIsImNyaW1pbmFsIiwiY3Jpc2lzIiwiY3JpdGVyaWEiLCJjcml0aWMiLCJjcml0aWNhbCIsImNyaXRpY2lzbSIsImNyaXRpY2l6ZSIsImNyb3AiLCJjcm9zcyIsImNyb3dkIiwiY3J1Y2lhbCIsImNyeSIsImN1bHR1cmFsIiwiY3VsdHVyZSIsImN1cCIsImN1cmlvdXMiLCJjdXJyZW50IiwiY3VycmVudGx5IiwiY3VycmljdWx1bSIsImN1c3RvbSIsImN1c3RvbWVyIiwiY3V0IiwiY3ljbGUiLCJkYWQiLCJkYWlseSIsImRhbWFnZSIsImRhbmNlIiwiZGFuZ2VyIiwiZGFuZ2Vyb3VzIiwiZGFyZSIsImRhcmsiLCJkYXJrbmVzcyIsImRhdGEiLCJkYXRlIiwiZGF1Z2h0ZXIiLCJkYXkiLCJkZWFkIiwiZGVhbCIsImRlYWxlciIsImRlYXIiLCJkZWF0aCIsImRlYmF0ZSIsImRlYnQiLCJkZWNhZGUiLCJkZWNpZGUiLCJkZWNpc2lvbiIsImRlY2siLCJkZWNsYXJlIiwiZGVjbGluZSIsImRlY3JlYXNlIiwiZGVlcCIsImRlZXBseSIsImRlZXIiLCJkZWZlYXQiLCJkZWZlbmQiLCJkZWZlbmRhbnQiLCJkZWZlbnNlIiwiZGVmZW5zaXZlIiwiZGVmaWNpdCIsImRlZmluZSIsImRlZmluaXRlbHkiLCJkZWZpbml0aW9uIiwiZGVncmVlIiwiZGVsYXkiLCJkZWxpdmVyIiwiZGVsaXZlcnkiLCJkZW1hbmQiLCJkZW1vY3JhY3kiLCJEZW1vY3JhdCIsImRlbW9jcmF0aWMiLCJkZW1vbnN0cmF0ZSIsImRlbW9uc3RyYXRpb24iLCJkZW55IiwiZGVwYXJ0bWVudCIsImRlcGVuZCIsImRlcGVuZGVudCIsImRlcGVuZGluZyIsImRlcGljdCIsImRlcHJlc3Npb24iLCJkZXB0aCIsImRlcHV0eSIsImRlcml2ZSIsImRlc2NyaWJlIiwiZGVzY3JpcHRpb24iLCJkZXNlcnQiLCJkZXNlcnZlIiwiZGVzaWduIiwiZGVzaWduZXIiLCJkZXNpcmUiLCJkZXNrIiwiZGVzcGVyYXRlIiwiZGVzcGl0ZSIsImRlc3Ryb3kiLCJkZXN0cnVjdGlvbiIsImRldGFpbCIsImRldGFpbGVkIiwiZGV0ZWN0IiwiZGV0ZXJtaW5lIiwiZGV2ZWxvcCIsImRldmVsb3BpbmciLCJkZXZlbG9wbWVudCIsImRldmljZSIsImRldm90ZSIsImRpYWxvZ3VlIiwiZGllIiwiZGlldCIsImRpZmZlciIsImRpZmZlcmVuY2UiLCJkaWZmZXJlbnQiLCJkaWZmZXJlbnRseSIsImRpZmZpY3VsdCIsImRpZmZpY3VsdHkiLCJkaWciLCJkaWdpdGFsIiwiZGltZW5zaW9uIiwiZGluaW5nIiwiZGlubmVyIiwiZGlyZWN0IiwiZGlyZWN0aW9uIiwiZGlyZWN0bHkiLCJkaXJlY3RvciIsImRpcnQiLCJkaXJ0eSIsImRpc2FiaWxpdHkiLCJkaXNhZ3JlZSIsImRpc2FwcGVhciIsImRpc2FzdGVyIiwiZGlzY2lwbGluZSIsImRpc2NvdXJzZSIsImRpc2NvdmVyIiwiZGlzY292ZXJ5IiwiZGlzY3JpbWluYXRpb24iLCJkaXNjdXNzIiwiZGlzY3Vzc2lvbiIsImRpc2Vhc2UiLCJkaXNoIiwiZGlzbWlzcyIsImRpc29yZGVyIiwiZGlzcGxheSIsImRpc3B1dGUiLCJkaXN0YW5jZSIsImRpc3RhbnQiLCJkaXN0aW5jdCIsImRpc3RpbmN0aW9uIiwiZGlzdGluZ3Vpc2giLCJkaXN0cmlidXRlIiwiZGlzdHJpYnV0aW9uIiwiZGlzdHJpY3QiLCJkaXZlcnNlIiwiZGl2ZXJzaXR5IiwiZGl2aWRlIiwiZGl2aXNpb24iLCJkaXZvcmNlIiwiRE5BIiwiZG8iLCJkb2N0b3IiLCJkb2N1bWVudCIsImRvZyIsImRvbWVzdGljIiwiZG9taW5hbnQiLCJkb21pbmF0ZSIsImRvb3IiLCJkb3VibGUiLCJkb3VidCIsImRvd24iLCJkb3dudG93biIsImRvemVuIiwiZHJhZnQiLCJkcmFnIiwiZHJhbWEiLCJkcmFtYXRpYyIsImRyYW1hdGljYWxseSIsImRyYXciLCJkcmF3aW5nIiwiZHJlYW0iLCJkcmVzcyIsImRyaW5rIiwiZHJpdmUiLCJkcml2ZXIiLCJkcm9wIiwiZHJ1ZyIsImRyeSIsImR1ZSIsImR1cmluZyIsImR1c3QiLCJkdXR5IiwiZWFjaCIsImVhZ2VyIiwiZWFyIiwiZWFybHkiLCJlYXJuIiwiZWFybmluZ3MiLCJlYXJ0aCIsImVhc2UiLCJlYXNpbHkiLCJlYXN0IiwiZWFzdGVybiIsImVhc3kiLCJlYXQiLCJlY29ub21pYyIsImVjb25vbWljcyIsImVjb25vbWlzdCIsImVjb25vbXkiLCJlZGdlIiwiZWRpdGlvbiIsImVkaXRvciIsImVkdWNhdGUiLCJlZHVjYXRpb24iLCJlZHVjYXRpb25hbCIsImVkdWNhdG9yIiwiZWZmZWN0IiwiZWZmZWN0aXZlIiwiZWZmZWN0aXZlbHkiLCJlZmZpY2llbmN5IiwiZWZmaWNpZW50IiwiZWZmb3J0IiwiZWdnIiwiZWlnaHQiLCJlaXRoZXIiLCJlbGRlcmx5IiwiZWxlY3QiLCJlbGVjdGlvbiIsImVsZWN0cmljIiwiZWxlY3RyaWNpdHkiLCJlbGVjdHJvbmljIiwiZWxlbWVudCIsImVsZW1lbnRhcnkiLCJlbGltaW5hdGUiLCJlbGl0ZSIsImVsc2UiLCJlbHNld2hlcmUiLCJlbWJyYWNlIiwiZW1lcmdlIiwiZW1lcmdlbmN5IiwiZW1pc3Npb24iLCJlbW90aW9uIiwiZW1vdGlvbmFsIiwiZW1waGFzaXMiLCJlbXBoYXNpemUiLCJlbXBsb3kiLCJlbXBsb3llZSIsImVtcGxveWVyIiwiZW1wbG95bWVudCIsImVtcHR5IiwiZW5hYmxlIiwiZW5jb3VudGVyIiwiZW5jb3VyYWdlIiwiZW5kIiwiZW5lbXkiLCJlbmVyZ3kiLCJlbmZvcmNlbWVudCIsImVuZ2FnZSIsImVuZ2luZSIsImVuZ2luZWVyIiwiZW5naW5lZXJpbmciLCJFbmdsaXNoIiwiZW5oYW5jZSIsImVuam95IiwiZW5vcm1vdXMiLCJlbm91Z2giLCJlbnN1cmUiLCJlbnRlciIsImVudGVycHJpc2UiLCJlbnRlcnRhaW5tZW50IiwiZW50aXJlIiwiZW50aXJlbHkiLCJlbnRyYW5jZSIsImVudHJ5IiwiZW52aXJvbm1lbnQiLCJlbnZpcm9ubWVudGFsIiwiZXBpc29kZSIsImVxdWFsIiwiZXF1YWxseSIsImVxdWlwbWVudCIsImVyYSIsImVycm9yIiwiZXNjYXBlIiwiZXNwZWNpYWxseSIsImVzc2F5IiwiZXNzZW50aWFsIiwiZXNzZW50aWFsbHkiLCJlc3RhYmxpc2giLCJlc3RhYmxpc2htZW50IiwiZXN0YXRlIiwiZXN0aW1hdGUiLCJldGMiLCJldGhpY3MiLCJldGhuaWMiLCJFdXJvcGVhbiIsImV2YWx1YXRlIiwiZXZhbHVhdGlvbiIsImV2ZW4iLCJldmVuaW5nIiwiZXZlbnQiLCJldmVudHVhbGx5IiwiZXZlciIsImV2ZXJ5IiwiZXZlcnlib2R5IiwiZXZlcnlkYXkiLCJldmVyeW9uZSIsImV2ZXJ5dGhpbmciLCJldmVyeXdoZXJlIiwiZXZpZGVuY2UiLCJldm9sdXRpb24iLCJldm9sdmUiLCJleGFjdCIsImV4YWN0bHkiLCJleGFtaW5hdGlvbiIsImV4YW1pbmUiLCJleGFtcGxlIiwiZXhjZWVkIiwiZXhjZWxsZW50IiwiZXhjZXB0IiwiZXhjZXB0aW9uIiwiZXhjaGFuZ2UiLCJleGNpdGluZyIsImV4ZWN1dGl2ZSIsImV4ZXJjaXNlIiwiZXhoaWJpdCIsImV4aGliaXRpb24iLCJleGlzdCIsImV4aXN0ZW5jZSIsImV4aXN0aW5nIiwiZXhwYW5kIiwiZXhwYW5zaW9uIiwiZXhwZWN0IiwiZXhwZWN0YXRpb24iLCJleHBlbnNlIiwiZXhwZW5zaXZlIiwiZXhwZXJpZW5jZSIsImV4cGVyaW1lbnQiLCJleHBlcnQiLCJleHBsYWluIiwiZXhwbGFuYXRpb24iLCJleHBsb2RlIiwiZXhwbG9yZSIsImV4cGxvc2lvbiIsImV4cG9zZSIsImV4cG9zdXJlIiwiZXhwcmVzcyIsImV4cHJlc3Npb24iLCJleHRlbmQiLCJleHRlbnNpb24iLCJleHRlbnNpdmUiLCJleHRlbnQiLCJleHRlcm5hbCIsImV4dHJhIiwiZXh0cmFvcmRpbmFyeSIsImV4dHJlbWUiLCJleHRyZW1lbHkiLCJleWUiLCJmYWJyaWMiLCJmYWNlIiwiZmFjaWxpdHkiLCJmYWN0IiwiZmFjdG9yIiwiZmFjdG9yeSIsImZhY3VsdHkiLCJmYWRlIiwiZmFpbCIsImZhaWx1cmUiLCJmYWlyIiwiZmFpcmx5IiwiZmFpdGgiLCJmYWxsIiwiZmFsc2UiLCJmYW1pbGlhciIsImZhbWlseSIsImZhbW91cyIsImZhbiIsImZhbnRhc3kiLCJmYXIiLCJmYXJtIiwiZmFybWVyIiwiZmFzaGlvbiIsImZhc3QiLCJmYXQiLCJmYXRlIiwiZmF0aGVyIiwiZmF1bHQiLCJmYXZvciIsImZhdm9yaXRlIiwiZmVhciIsImZlYXR1cmUiLCJmZWRlcmFsIiwiZmVlIiwiZmVlZCIsImZlZWwiLCJmZWVsaW5nIiwiZmVsbG93IiwiZmVtYWxlIiwiZmVuY2UiLCJmZXciLCJmZXdlciIsImZpYmVyIiwiZmljdGlvbiIsImZpZWxkIiwiZmlmdGVlbiIsImZpZnRoIiwiZmlmdHkiLCJmaWdodCIsImZpZ2h0ZXIiLCJmaWdodGluZyIsImZpZ3VyZSIsImZpbGUiLCJmaWxsIiwiZmlsbSIsImZpbmFsIiwiZmluYWxseSIsImZpbmFuY2UiLCJmaW5hbmNpYWwiLCJmaW5kIiwiZmluZGluZyIsImZpbmUiLCJmaW5nZXIiLCJmaW5pc2giLCJmaXJlIiwiZmlybSIsImZpcnN0IiwiZmlzaCIsImZpc2hpbmciLCJmaXQiLCJmaXRuZXNzIiwiZml2ZSIsImZpeCIsImZsYWciLCJmbGFtZSIsImZsYXQiLCJmbGF2b3IiLCJmbGVlIiwiZmxlc2giLCJmbGlnaHQiLCJmbG9hdCIsImZsb29yIiwiZmxvdyIsImZsb3dlciIsImZseSIsImZvY3VzIiwiZm9sayIsImZvbGxvdyIsImZvbGxvd2luZyIsImZvb2QiLCJmb290IiwiZm9vdGJhbGwiLCJmb3IiLCJmb3JjZSIsImZvcmVpZ24iLCJmb3Jlc3QiLCJmb3JldmVyIiwiZm9yZ2V0IiwiZm9ybSIsImZvcm1hbCIsImZvcm1hdGlvbiIsImZvcm1lciIsImZvcm11bGEiLCJmb3J0aCIsImZvcnR1bmUiLCJmb3J3YXJkIiwiZm91bmQiLCJmb3VuZGF0aW9uIiwiZm91bmRlciIsImZvdXIiLCJmb3VydGgiLCJmcmFtZSIsImZyYW1ld29yayIsImZyZWUiLCJmcmVlZG9tIiwiZnJlZXplIiwiRnJlbmNoIiwiZnJlcXVlbmN5IiwiZnJlcXVlbnQiLCJmcmVxdWVudGx5IiwiZnJlc2giLCJmcmllbmQiLCJmcmllbmRseSIsImZyaWVuZHNoaXAiLCJmcm9tIiwiZnJvbnQiLCJmcnVpdCIsImZydXN0cmF0aW9uIiwiZnVlbCIsImZ1bGwiLCJmdWxseSIsImZ1biIsImZ1bmN0aW9uIiwiZnVuZCIsImZ1bmRhbWVudGFsIiwiZnVuZGluZyIsImZ1bmVyYWwiLCJmdW5ueSIsImZ1cm5pdHVyZSIsImZ1cnRoZXJtb3JlIiwiZnV0dXJlIiwiZ2FpbiIsImdhbGF4eSIsImdhbGxlcnkiLCJnYW1lIiwiZ2FuZyIsImdhcCIsImdhcmFnZSIsImdhcmRlbiIsImdhcmxpYyIsImdhcyIsImdhdGUiLCJnYXRoZXIiLCJnYXkiLCJnYXplIiwiZ2VhciIsImdlbmRlciIsImdlbmUiLCJnZW5lcmFsIiwiZ2VuZXJhbGx5IiwiZ2VuZXJhdGUiLCJnZW5lcmF0aW9uIiwiZ2VuZXRpYyIsImdlbnRsZW1hbiIsImdlbnRseSIsIkdlcm1hbiIsImdlc3R1cmUiLCJnZXQiLCJnaG9zdCIsImdpYW50IiwiZ2lmdCIsImdpZnRlZCIsImdpcmwiLCJnaXJsZnJpZW5kIiwiZ2l2ZSIsImdpdmVuIiwiZ2xhZCIsImdsYW5jZSIsImdsYXNzIiwiZ2xvYmFsIiwiZ2xvdmUiLCJnbyIsImdvYWwiLCJHb2QiLCJnb2xkIiwiZ29sZGVuIiwiZ29sZiIsImdvb2QiLCJnb3Zlcm5tZW50IiwiZ292ZXJub3IiLCJncmFiIiwiZ3JhZGUiLCJncmFkdWFsbHkiLCJncmFkdWF0ZSIsImdyYWluIiwiZ3JhbmQiLCJncmFuZGZhdGhlciIsImdyYW5kbW90aGVyIiwiZ3JhbnQiLCJncmFzcyIsImdyYXZlIiwiZ3JheSIsImdyZWF0IiwiZ3JlYXRlc3QiLCJncmVlbiIsImdyb2NlcnkiLCJncm91bmQiLCJncm91cCIsImdyb3ciLCJncm93aW5nIiwiZ3Jvd3RoIiwiZ3VhcmFudGVlIiwiZ3VhcmQiLCJndWVzcyIsImd1ZXN0IiwiZ3VpZGUiLCJndWlkZWxpbmUiLCJndWlsdHkiLCJndW4iLCJndXkiLCJoYWJpdCIsImhhYml0YXQiLCJoYWlyIiwiaGFsZiIsImhhbGwiLCJoYW5kIiwiaGFuZGZ1bCIsImhhbmRsZSIsImhhbmciLCJoYXBwZW4iLCJoYXBweSIsImhhcmQiLCJoYXJkbHkiLCJoYXQiLCJoYXRlIiwiaGF2ZSIsImhlIiwiaGVhZCIsImhlYWRsaW5lIiwiaGVhZHF1YXJ0ZXJzIiwiaGVhbHRoIiwiaGVhbHRoeSIsImhlYXIiLCJoZWFyaW5nIiwiaGVhcnQiLCJoZWF0IiwiaGVhdmVuIiwiaGVhdmlseSIsImhlYXZ5IiwiaGVlbCIsImhlaWdodCIsImhlbGljb3B0ZXIiLCJoZWxsIiwiaGVsbG8iLCJoZWxwIiwiaGVscGZ1bCIsImhlciIsImhlcmUiLCJoZXJpdGFnZSIsImhlcm8iLCJoZXJzZWxmIiwiaGV5IiwiaGkiLCJoaWRlIiwiaGlnaCIsImhpZ2hsaWdodCIsImhpZ2hseSIsImhpZ2h3YXkiLCJoaWxsIiwiaGltIiwiaGltc2VsZiIsImhpcCIsImhpcmUiLCJoaXMiLCJoaXN0b3JpYW4iLCJoaXN0b3JpYyIsImhpc3RvcmljYWwiLCJoaXN0b3J5IiwiaGl0IiwiaG9sZCIsImhvbGUiLCJob2xpZGF5IiwiaG9seSIsImhvbWUiLCJob21lbGVzcyIsImhvbmVzdCIsImhvbmV5IiwiaG9ub3IiLCJob3BlIiwiaG9yaXpvbiIsImhvcnJvciIsImhvcnNlIiwiaG9zcGl0YWwiLCJob3N0IiwiaG90IiwiaG90ZWwiLCJob3VyIiwiaG91c2UiLCJob3VzZWhvbGQiLCJob3VzaW5nIiwiaG93IiwiaG93ZXZlciIsImh1Z2UiLCJodW1hbiIsImh1bW9yIiwiaHVuZHJlZCIsImh1bmdyeSIsImh1bnRlciIsImh1bnRpbmciLCJodXJ0IiwiaHVzYmFuZCIsImh5cG90aGVzaXMiLCJJIiwiaWNlIiwiaWRlYSIsImlkZWFsIiwiaWRlbnRpZmljYXRpb24iLCJpZGVudGlmeSIsImlkZW50aXR5IiwiaWUiLCJpZiIsImlnbm9yZSIsImlsbCIsImlsbGVnYWwiLCJpbGxuZXNzIiwiaWxsdXN0cmF0ZSIsImltYWdlIiwiaW1hZ2luYXRpb24iLCJpbWFnaW5lIiwiaW1tZWRpYXRlIiwiaW1tZWRpYXRlbHkiLCJpbW1pZ3JhbnQiLCJpbW1pZ3JhdGlvbiIsImltcGFjdCIsImltcGxlbWVudCIsImltcGxpY2F0aW9uIiwiaW1wbHkiLCJpbXBvcnRhbmNlIiwiaW1wb3J0YW50IiwiaW1wb3NlIiwiaW1wb3NzaWJsZSIsImltcHJlc3MiLCJpbXByZXNzaW9uIiwiaW1wcmVzc2l2ZSIsImltcHJvdmUiLCJpbXByb3ZlbWVudCIsImluIiwiaW5jZW50aXZlIiwiaW5jaWRlbnQiLCJpbmNsdWRlIiwiaW5jbHVkaW5nIiwiaW5jb21lIiwiaW5jb3Jwb3JhdGUiLCJpbmNyZWFzZSIsImluY3JlYXNlZCIsImluY3JlYXNpbmciLCJpbmNyZWFzaW5nbHkiLCJpbmNyZWRpYmxlIiwiaW5kZWVkIiwiaW5kZXBlbmRlbmNlIiwiaW5kZXBlbmRlbnQiLCJpbmRleCIsIkluZGlhbiIsImluZGljYXRlIiwiaW5kaWNhdGlvbiIsImluZGl2aWR1YWwiLCJpbmR1c3RyaWFsIiwiaW5kdXN0cnkiLCJpbmZhbnQiLCJpbmZlY3Rpb24iLCJpbmZsYXRpb24iLCJpbmZsdWVuY2UiLCJpbmZvcm0iLCJpbmZvcm1hdGlvbiIsImluZ3JlZGllbnQiLCJpbml0aWFsIiwiaW5pdGlhbGx5IiwiaW5pdGlhdGl2ZSIsImluanVyeSIsImlubmVyIiwiaW5ub2NlbnQiLCJpbnF1aXJ5IiwiaW5zaWRlIiwiaW5zaWdodCIsImluc2lzdCIsImluc3BpcmUiLCJpbnN0YWxsIiwiaW5zdGFuY2UiLCJpbnN0ZWFkIiwiaW5zdGl0dXRpb24iLCJpbnN0aXR1dGlvbmFsIiwiaW5zdHJ1Y3Rpb24iLCJpbnN0cnVjdG9yIiwiaW5zdHJ1bWVudCIsImluc3VyYW5jZSIsImludGVsbGVjdHVhbCIsImludGVsbGlnZW5jZSIsImludGVuZCIsImludGVuc2UiLCJpbnRlbnNpdHkiLCJpbnRlbnRpb24iLCJpbnRlcmFjdGlvbiIsImludGVyZXN0IiwiaW50ZXJlc3RlZCIsImludGVyZXN0aW5nIiwiaW50ZXJuYWwiLCJpbnRlcm5hdGlvbmFsIiwiSW50ZXJuZXQiLCJpbnRlcnByZXQiLCJpbnRlcnByZXRhdGlvbiIsImludGVydmVudGlvbiIsImludGVydmlldyIsImludG8iLCJpbnRyb2R1Y2UiLCJpbnRyb2R1Y3Rpb24iLCJpbnZhc2lvbiIsImludmVzdCIsImludmVzdGlnYXRlIiwiaW52ZXN0aWdhdGlvbiIsImludmVzdGlnYXRvciIsImludmVzdG1lbnQiLCJpbnZlc3RvciIsImludml0ZSIsImludm9sdmUiLCJpbnZvbHZlZCIsImludm9sdmVtZW50IiwiSXJhcWkiLCJJcmlzaCIsImlyb24iLCJJc2xhbWljIiwiaXNsYW5kIiwiSXNyYWVsaSIsImlzc3VlIiwiaXQiLCJJdGFsaWFuIiwiaXRlbSIsIml0cyIsIml0c2VsZiIsImphY2tldCIsImphaWwiLCJKYXBhbmVzZSIsImpldCIsIkpldyIsIkpld2lzaCIsImpvYiIsImpvaW4iLCJqb2ludCIsImpva2UiLCJqb3VybmFsIiwiam91cm5hbGlzdCIsImpvdXJuZXkiLCJqb3kiLCJqdWRnZSIsImp1ZGdtZW50IiwianVpY2UiLCJqdW1wIiwianVuaW9yIiwianVyeSIsImp1c3QiLCJqdXN0aWNlIiwianVzdGlmeSIsImtlZXAiLCJrZXkiLCJraWNrIiwia2lkIiwia2lsbCIsImtpbGxlciIsImtpbGxpbmciLCJraW5kIiwia2luZyIsImtpc3MiLCJraXRjaGVuIiwia25lZSIsImtuaWZlIiwia25vY2siLCJrbm93Iiwia25vd2xlZGdlIiwibGFiIiwibGFiZWwiLCJsYWJvciIsImxhYm9yYXRvcnkiLCJsYWNrIiwibGFkeSIsImxha2UiLCJsYW5kIiwibGFuZHNjYXBlIiwibGFuZ3VhZ2UiLCJsYXAiLCJsYXJnZSIsImxhcmdlbHkiLCJsYXN0IiwibGF0ZSIsImxhdGVyIiwiTGF0aW4iLCJsYXR0ZXIiLCJsYXVnaCIsImxhdW5jaCIsImxhdyIsImxhd24iLCJsYXdzdWl0IiwibGF3eWVyIiwibGF5IiwibGF5ZXIiLCJsZWFkIiwibGVhZGVyIiwibGVhZGVyc2hpcCIsImxlYWRpbmciLCJsZWFmIiwibGVhZ3VlIiwibGVhbiIsImxlYXJuIiwibGVhcm5pbmciLCJsZWFzdCIsImxlYXRoZXIiLCJsZWF2ZSIsImxlZnQiLCJsZWciLCJsZWdhY3kiLCJsZWdhbCIsImxlZ2VuZCIsImxlZ2lzbGF0aW9uIiwibGVnaXRpbWF0ZSIsImxlbW9uIiwibGVuZ3RoIiwibGVzcyIsImxlc3NvbiIsImxldCIsImxldHRlciIsImxldmVsIiwibGliZXJhbCIsImxpYnJhcnkiLCJsaWNlbnNlIiwibGllIiwibGlmZSIsImxpZmVzdHlsZSIsImxpZmV0aW1lIiwibGlmdCIsImxpZ2h0IiwibGlrZSIsImxpa2VseSIsImxpbWl0IiwibGltaXRhdGlvbiIsImxpbWl0ZWQiLCJsaW5lIiwibGluayIsImxpcCIsImxpc3QiLCJsaXN0ZW4iLCJsaXRlcmFsbHkiLCJsaXRlcmFyeSIsImxpdGVyYXR1cmUiLCJsaXR0bGUiLCJsaXZlIiwibGl2aW5nIiwibG9hZCIsImxvYW4iLCJsb2NhbCIsImxvY2F0ZSIsImxvY2F0aW9uIiwibG9jayIsImxvbmciLCJsb29rIiwibG9vc2UiLCJsb3NlIiwibG9zcyIsImxvc3QiLCJsb3QiLCJsb3RzIiwibG91ZCIsImxvdmUiLCJsb3ZlbHkiLCJsb3ZlciIsImxvdyIsImxvd2VyIiwibHVjayIsImx1Y2t5IiwibHVuY2giLCJsdW5nIiwibWFjaGluZSIsIm1hZCIsIm1hZ2F6aW5lIiwibWFpbCIsIm1haW4iLCJtYWlubHkiLCJtYWludGFpbiIsIm1haW50ZW5hbmNlIiwibWFqb3IiLCJtYWpvcml0eSIsIm1ha2UiLCJtYWtlciIsIm1ha2V1cCIsIm1hbGUiLCJtYWxsIiwibWFuIiwibWFuYWdlIiwibWFuYWdlbWVudCIsIm1hbmFnZXIiLCJtYW5uZXIiLCJtYW51ZmFjdHVyZXIiLCJtYW51ZmFjdHVyaW5nIiwibWFueSIsIm1hcCIsIm1hcmdpbiIsIm1hcmsiLCJtYXJrZXQiLCJtYXJrZXRpbmciLCJtYXJyaWFnZSIsIm1hcnJpZWQiLCJtYXJyeSIsIm1hc2siLCJtYXNzIiwibWFzc2l2ZSIsIm1hc3RlciIsIm1hdGNoIiwibWF0ZXJpYWwiLCJtYXRoIiwibWF0dGVyIiwibWF5IiwibWF5YmUiLCJtYXlvciIsIm1lIiwibWVhbCIsIm1lYW4iLCJtZWFuaW5nIiwibWVhbndoaWxlIiwibWVhc3VyZSIsIm1lYXN1cmVtZW50IiwibWVhdCIsIm1lY2hhbmlzbSIsIm1lZGlhIiwibWVkaWNhbCIsIm1lZGljYXRpb24iLCJtZWRpY2luZSIsIm1lZGl1bSIsIm1lZXQiLCJtZWV0aW5nIiwibWVtYmVyIiwibWVtYmVyc2hpcCIsIm1lbW9yeSIsIm1lbnRhbCIsIm1lbnRpb24iLCJtZW51IiwibWVyZSIsIm1lcmVseSIsIm1lc3MiLCJtZXNzYWdlIiwibWV0YWwiLCJtZXRlciIsIm1ldGhvZCIsIk1leGljYW4iLCJtaWRkbGUiLCJtaWdodCIsIm1pbGl0YXJ5IiwibWlsayIsIm1pbGxpb24iLCJtaW5kIiwibWluZSIsIm1pbmlzdGVyIiwibWlub3IiLCJtaW5vcml0eSIsIm1pbnV0ZSIsIm1pcmFjbGUiLCJtaXJyb3IiLCJtaXNzIiwibWlzc2lsZSIsIm1pc3Npb24iLCJtaXN0YWtlIiwibWl4IiwibWl4dHVyZSIsIm1vZGUiLCJtb2RlbCIsIm1vZGVyYXRlIiwibW9kZXJuIiwibW9kZXN0IiwibW9tIiwibW9tZW50IiwibW9uZXkiLCJtb25pdG9yIiwibW9udGgiLCJtb29kIiwibW9vbiIsIm1vcmFsIiwibW9yZSIsIm1vcmVvdmVyIiwibW9ybmluZyIsIm1vcnRnYWdlIiwibW9zdCIsIm1vc3RseSIsIm1vdGhlciIsIm1vdGlvbiIsIm1vdGl2YXRpb24iLCJtb3RvciIsIm1vdW50IiwibW91bnRhaW4iLCJtb3VzZSIsIm1vdXRoIiwibW92ZSIsIm1vdmVtZW50IiwibW92aWUiLCJNciIsIk1ycyIsIk1zIiwibXVjaCIsIm11bHRpcGxlIiwibXVyZGVyIiwibXVzY2xlIiwibXVzZXVtIiwibXVzaWMiLCJtdXNpY2FsIiwibXVzaWNpYW4iLCJNdXNsaW0iLCJtdXN0IiwibXV0dWFsIiwibXkiLCJteXNlbGYiLCJteXN0ZXJ5IiwibXl0aCIsIm5ha2VkIiwibmFtZSIsIm5hcnJhdGl2ZSIsIm5hcnJvdyIsIm5hdGlvbiIsIm5hdGlvbmFsIiwibmF0aXZlIiwibmF0dXJhbCIsIm5hdHVyYWxseSIsIm5hdHVyZSIsIm5lYXIiLCJuZWFyYnkiLCJuZWFybHkiLCJuZWNlc3NhcmlseSIsIm5lY2Vzc2FyeSIsIm5lY2siLCJuZWVkIiwibmVnYXRpdmUiLCJuZWdvdGlhdGUiLCJuZWdvdGlhdGlvbiIsIm5laWdoYm9yIiwibmVpZ2hib3Job29kIiwibmVpdGhlciIsIm5lcnZlIiwibmVydm91cyIsIm5ldCIsIm5ldHdvcmsiLCJuZXZlciIsIm5ldmVydGhlbGVzcyIsIm5ldyIsIm5ld2x5IiwibmV3cyIsIm5ld3NwYXBlciIsIm5leHQiLCJuaWNlIiwibmlnaHQiLCJuaW5lIiwibm8iLCJub2JvZHkiLCJub2QiLCJub2lzZSIsIm5vbWluYXRpb24iLCJub25lIiwibm9uZXRoZWxlc3MiLCJub3IiLCJub3JtYWwiLCJub3JtYWxseSIsIm5vcnRoIiwibm9ydGhlcm4iLCJub3NlIiwibm90Iiwibm90ZSIsIm5vdGhpbmciLCJub3RpY2UiLCJub3Rpb24iLCJub3ZlbCIsIm5vdyIsIm5vd2hlcmUiLCJudWNsZWFyIiwibnVtYmVyIiwibnVtZXJvdXMiLCJudXJzZSIsIm51dCIsIm9iamVjdCIsIm9iamVjdGl2ZSIsIm9ibGlnYXRpb24iLCJvYnNlcnZhdGlvbiIsIm9ic2VydmUiLCJvYnNlcnZlciIsIm9idGFpbiIsIm9idmlvdXMiLCJvYnZpb3VzbHkiLCJvY2Nhc2lvbiIsIm9jY2FzaW9uYWxseSIsIm9jY3VwYXRpb24iLCJvY2N1cHkiLCJvY2N1ciIsIm9jZWFuIiwib2RkIiwib2RkcyIsIm9mIiwib2ZmIiwib2ZmZW5zZSIsIm9mZmVuc2l2ZSIsIm9mZmVyIiwib2ZmaWNlIiwib2ZmaWNlciIsIm9mZmljaWFsIiwib2Z0ZW4iLCJvaCIsIm9pbCIsIm9rIiwib2theSIsIm9sZCIsIk9seW1waWMiLCJvbiIsIm9uY2UiLCJvbmUiLCJvbmdvaW5nIiwib25pb24iLCJvbmxpbmUiLCJvbmx5Iiwib250byIsIm9wZW4iLCJvcGVuaW5nIiwib3BlcmF0ZSIsIm9wZXJhdGluZyIsIm9wZXJhdGlvbiIsIm9wZXJhdG9yIiwib3BpbmlvbiIsIm9wcG9uZW50Iiwib3Bwb3J0dW5pdHkiLCJvcHBvc2UiLCJvcHBvc2l0ZSIsIm9wcG9zaXRpb24iLCJvcHRpb24iLCJvciIsIm9yYW5nZSIsIm9yZGVyIiwib3JkaW5hcnkiLCJvcmdhbmljIiwib3JnYW5pemF0aW9uIiwib3JnYW5pemUiLCJvcmllbnRhdGlvbiIsIm9yaWdpbiIsIm9yaWdpbmFsIiwib3JpZ2luYWxseSIsIm90aGVyIiwib3RoZXJzIiwib3RoZXJ3aXNlIiwib3VnaHQiLCJvdXIiLCJvdXJzZWx2ZXMiLCJvdXQiLCJvdXRjb21lIiwib3V0c2lkZSIsIm92ZW4iLCJvdmVyIiwib3ZlcmFsbCIsIm92ZXJjb21lIiwib3Zlcmxvb2siLCJvd2UiLCJvd24iLCJvd25lciIsInBhY2UiLCJwYWNrIiwicGFja2FnZSIsInBhZ2UiLCJwYWluIiwicGFpbmZ1bCIsInBhaW50IiwicGFpbnRlciIsInBhaW50aW5nIiwicGFpciIsInBhbGUiLCJQYWxlc3RpbmlhbiIsInBhbG0iLCJwYW4iLCJwYW5lbCIsInBhbnQiLCJwYXBlciIsInBhcmVudCIsInBhcmsiLCJwYXJraW5nIiwicGFydCIsInBhcnRpY2lwYW50IiwicGFydGljaXBhdGUiLCJwYXJ0aWNpcGF0aW9uIiwicGFydGljdWxhciIsInBhcnRpY3VsYXJseSIsInBhcnRseSIsInBhcnRuZXIiLCJwYXJ0bmVyc2hpcCIsInBhcnR5IiwicGFzcyIsInBhc3NhZ2UiLCJwYXNzZW5nZXIiLCJwYXNzaW9uIiwicGFzdCIsInBhdGNoIiwicGF0aCIsInBhdGllbnQiLCJwYXR0ZXJuIiwicGF1c2UiLCJwYXkiLCJwYXltZW50IiwiUEMiLCJwZWFjZSIsInBlYWsiLCJwZWVyIiwicGVuYWx0eSIsInBlb3BsZSIsInBlcHBlciIsInBlciIsInBlcmNlaXZlIiwicGVyY2VudGFnZSIsInBlcmNlcHRpb24iLCJwZXJmZWN0IiwicGVyZmVjdGx5IiwicGVyZm9ybSIsInBlcmZvcm1hbmNlIiwicGVyaGFwcyIsInBlcmlvZCIsInBlcm1hbmVudCIsInBlcm1pc3Npb24iLCJwZXJtaXQiLCJwZXJzb24iLCJwZXJzb25hbCIsInBlcnNvbmFsaXR5IiwicGVyc29uYWxseSIsInBlcnNvbm5lbCIsInBlcnNwZWN0aXZlIiwicGVyc3VhZGUiLCJwZXQiLCJwaGFzZSIsInBoZW5vbWVub24iLCJwaGlsb3NvcGh5IiwicGhvbmUiLCJwaG90byIsInBob3RvZ3JhcGgiLCJwaG90b2dyYXBoZXIiLCJwaHJhc2UiLCJwaHlzaWNhbCIsInBoeXNpY2FsbHkiLCJwaHlzaWNpYW4iLCJwaWFubyIsInBpY2siLCJwaWN0dXJlIiwicGllIiwicGllY2UiLCJwaWxlIiwicGlsb3QiLCJwaW5lIiwicGluayIsInBpcGUiLCJwaXRjaCIsInBsYWNlIiwicGxhbiIsInBsYW5lIiwicGxhbmV0IiwicGxhbm5pbmciLCJwbGFudCIsInBsYXN0aWMiLCJwbGF0ZSIsInBsYXRmb3JtIiwicGxheSIsInBsYXllciIsInBsZWFzZSIsInBsZWFzdXJlIiwicGxlbnR5IiwicGxvdCIsInBsdXMiLCJQTSIsInBvY2tldCIsInBvZW0iLCJwb2V0IiwicG9ldHJ5IiwicG9pbnQiLCJwb2xlIiwicG9saWNlIiwicG9saWN5IiwicG9saXRpY2FsIiwicG9saXRpY2FsbHkiLCJwb2xpdGljaWFuIiwicG9saXRpY3MiLCJwb2xsIiwicG9sbHV0aW9uIiwicG9vbCIsInBvb3IiLCJwb3AiLCJwb3B1bGFyIiwicG9wdWxhdGlvbiIsInBvcmNoIiwicG9ydCIsInBvcnRpb24iLCJwb3J0cmFpdCIsInBvcnRyYXkiLCJwb3NlIiwicG9zaXRpb24iLCJwb3NpdGl2ZSIsInBvc3Nlc3MiLCJwb3NzaWJpbGl0eSIsInBvc3NpYmxlIiwicG9zc2libHkiLCJwb3N0IiwicG90IiwicG90YXRvIiwicG90ZW50aWFsIiwicG90ZW50aWFsbHkiLCJwb3VuZCIsInBvdXIiLCJwb3ZlcnR5IiwicG93ZGVyIiwicG93ZXIiLCJwb3dlcmZ1bCIsInByYWN0aWNhbCIsInByYWN0aWNlIiwicHJheSIsInByYXllciIsInByZWNpc2VseSIsInByZWRpY3QiLCJwcmVmZXIiLCJwcmVmZXJlbmNlIiwicHJlZ25hbmN5IiwicHJlZ25hbnQiLCJwcmVwYXJhdGlvbiIsInByZXBhcmUiLCJwcmVzY3JpcHRpb24iLCJwcmVzZW5jZSIsInByZXNlbnQiLCJwcmVzZW50YXRpb24iLCJwcmVzZXJ2ZSIsInByZXNpZGVudCIsInByZXNpZGVudGlhbCIsInByZXNzIiwicHJlc3N1cmUiLCJwcmV0ZW5kIiwicHJldHR5IiwicHJldmVudCIsInByZXZpb3VzIiwicHJldmlvdXNseSIsInByaWNlIiwicHJpZGUiLCJwcmllc3QiLCJwcmltYXJpbHkiLCJwcmltYXJ5IiwicHJpbWUiLCJwcmluY2lwYWwiLCJwcmluY2lwbGUiLCJwcmludCIsInByaW9yIiwicHJpb3JpdHkiLCJwcmlzb24iLCJwcmlzb25lciIsInByaXZhY3kiLCJwcml2YXRlIiwicHJvYmFibHkiLCJwcm9ibGVtIiwicHJvY2VkdXJlIiwicHJvY2VlZCIsInByb2Nlc3MiLCJwcm9kdWNlIiwicHJvZHVjZXIiLCJwcm9kdWN0IiwicHJvZHVjdGlvbiIsInByb2Zlc3Npb24iLCJwcm9mZXNzaW9uYWwiLCJwcm9mZXNzb3IiLCJwcm9maWxlIiwicHJvZml0IiwicHJvZ3JhbSIsInByb2dyZXNzIiwicHJvamVjdCIsInByb21pbmVudCIsInByb21pc2UiLCJwcm9tb3RlIiwicHJvbXB0IiwicHJvb2YiLCJwcm9wZXIiLCJwcm9wZXJseSIsInByb3BlcnR5IiwicHJvcG9ydGlvbiIsInByb3Bvc2FsIiwicHJvcG9zZSIsInByb3Bvc2VkIiwicHJvc2VjdXRvciIsInByb3NwZWN0IiwicHJvdGVjdCIsInByb3RlY3Rpb24iLCJwcm90ZWluIiwicHJvdGVzdCIsInByb3VkIiwicHJvdmUiLCJwcm92aWRlIiwicHJvdmlkZXIiLCJwcm92aW5jZSIsInByb3Zpc2lvbiIsInBzeWNob2xvZ2ljYWwiLCJwc3ljaG9sb2dpc3QiLCJwc3ljaG9sb2d5IiwicHVibGljIiwicHVibGljYXRpb24iLCJwdWJsaWNseSIsInB1Ymxpc2giLCJwdWJsaXNoZXIiLCJwdWxsIiwicHVuaXNobWVudCIsInB1cmNoYXNlIiwicHVyZSIsInB1cnBvc2UiLCJwdXJzdWUiLCJwdXNoIiwicHV0IiwicXVhbGlmeSIsInF1YWxpdHkiLCJxdWFydGVyIiwicXVhcnRlcmJhY2siLCJxdWVzdGlvbiIsInF1aWNrIiwicXVpY2tseSIsInF1aWV0IiwicXVpZXRseSIsInF1aXQiLCJxdWl0ZSIsInF1b3RlIiwicmFjZSIsInJhY2lhbCIsInJhZGljYWwiLCJyYWRpbyIsInJhaWwiLCJyYWluIiwicmFpc2UiLCJyYW5nZSIsInJhbmsiLCJyYXBpZCIsInJhcGlkbHkiLCJyYXJlIiwicmFyZWx5IiwicmF0ZSIsInJhdGhlciIsInJhdGluZyIsInJhdGlvIiwicmF3IiwicmVhY2giLCJyZWFjdCIsInJlYWN0aW9uIiwicmVhZCIsInJlYWRlciIsInJlYWRpbmciLCJyZWFkeSIsInJlYWwiLCJyZWFsaXR5IiwicmVhbGl6ZSIsInJlYWxseSIsInJlYXNvbiIsInJlYXNvbmFibGUiLCJyZWNhbGwiLCJyZWNlaXZlIiwicmVjZW50IiwicmVjZW50bHkiLCJyZWNpcGUiLCJyZWNvZ25pdGlvbiIsInJlY29nbml6ZSIsInJlY29tbWVuZCIsInJlY29tbWVuZGF0aW9uIiwicmVjb3JkIiwicmVjb3JkaW5nIiwicmVjb3ZlciIsInJlY292ZXJ5IiwicmVjcnVpdCIsInJlZCIsInJlZHVjZSIsInJlZHVjdGlvbiIsInJlZmVyIiwicmVmZXJlbmNlIiwicmVmbGVjdCIsInJlZmxlY3Rpb24iLCJyZWZvcm0iLCJyZWZ1Z2VlIiwicmVmdXNlIiwicmVnYXJkIiwicmVnYXJkaW5nIiwicmVnYXJkbGVzcyIsInJlZ2ltZSIsInJlZ2lvbiIsInJlZ2lvbmFsIiwicmVnaXN0ZXIiLCJyZWd1bGFyIiwicmVndWxhcmx5IiwicmVndWxhdGUiLCJyZWd1bGF0aW9uIiwicmVpbmZvcmNlIiwicmVqZWN0IiwicmVsYXRlIiwicmVsYXRpb24iLCJyZWxhdGlvbnNoaXAiLCJyZWxhdGl2ZSIsInJlbGF0aXZlbHkiLCJyZWxheCIsInJlbGVhc2UiLCJyZWxldmFudCIsInJlbGllZiIsInJlbGlnaW9uIiwicmVsaWdpb3VzIiwicmVseSIsInJlbWFpbiIsInJlbWFpbmluZyIsInJlbWFya2FibGUiLCJyZW1lbWJlciIsInJlbWluZCIsInJlbW90ZSIsInJlbW92ZSIsInJlcGVhdCIsInJlcGVhdGVkbHkiLCJyZXBsYWNlIiwicmVwbHkiLCJyZXBvcnQiLCJyZXBvcnRlciIsInJlcHJlc2VudCIsInJlcHJlc2VudGF0aW9uIiwicmVwcmVzZW50YXRpdmUiLCJSZXB1YmxpY2FuIiwicmVwdXRhdGlvbiIsInJlcXVlc3QiLCJyZXF1aXJlIiwicmVxdWlyZW1lbnQiLCJyZXNlYXJjaCIsInJlc2VhcmNoZXIiLCJyZXNlbWJsZSIsInJlc2VydmF0aW9uIiwicmVzaWRlbnQiLCJyZXNpc3QiLCJyZXNpc3RhbmNlIiwicmVzb2x1dGlvbiIsInJlc29sdmUiLCJyZXNvcnQiLCJyZXNvdXJjZSIsInJlc3BlY3QiLCJyZXNwb25kIiwicmVzcG9uZGVudCIsInJlc3BvbnNlIiwicmVzcG9uc2liaWxpdHkiLCJyZXNwb25zaWJsZSIsInJlc3QiLCJyZXN0YXVyYW50IiwicmVzdG9yZSIsInJlc3RyaWN0aW9uIiwicmVzdWx0IiwicmV0YWluIiwicmV0aXJlIiwicmV0aXJlbWVudCIsInJldHVybiIsInJldmVhbCIsInJldmVudWUiLCJyZXZpZXciLCJyZXZvbHV0aW9uIiwicmh5dGhtIiwicmljZSIsInJpY2giLCJyaWQiLCJyaWRlIiwicmlmbGUiLCJyaWdodCIsInJpbmciLCJyaXNlIiwicmlzayIsInJpdmVyIiwicm9hZCIsInJvY2siLCJyb2xlIiwicm9sbCIsInJvbWFudGljIiwicm9vZiIsInJvb20iLCJyb290Iiwicm9wZSIsInJvc2UiLCJyb3VnaCIsInJvdWdobHkiLCJyb3VuZCIsInJvdXRlIiwicm91dGluZSIsInJvdyIsInJ1YiIsInJ1bGUiLCJydW4iLCJydW5uaW5nIiwicnVyYWwiLCJydXNoIiwiUnVzc2lhbiIsInNhY3JlZCIsInNhZCIsInNhZmUiLCJzYWZldHkiLCJzYWtlIiwic2FsYWQiLCJzYWxhcnkiLCJzYWxlIiwic2FsZXMiLCJzYWx0Iiwic2FtZSIsInNhbXBsZSIsInNhbmN0aW9uIiwic2FuZCIsInNhdGVsbGl0ZSIsInNhdGlzZmFjdGlvbiIsInNhdGlzZnkiLCJzYXVjZSIsInNhdmUiLCJzYXZpbmciLCJzYXkiLCJzY2FsZSIsInNjYW5kYWwiLCJzY2FyZWQiLCJzY2VuYXJpbyIsInNjZW5lIiwic2NoZWR1bGUiLCJzY2hlbWUiLCJzY2hvbGFyIiwic2Nob2xhcnNoaXAiLCJzY2hvb2wiLCJzY2llbmNlIiwic2NpZW50aWZpYyIsInNjaWVudGlzdCIsInNjb3BlIiwic2NvcmUiLCJzY3JlYW0iLCJzY3JlZW4iLCJzY3JpcHQiLCJzZWEiLCJzZWFyY2giLCJzZWFzb24iLCJzZWF0Iiwic2Vjb25kIiwic2VjcmV0Iiwic2VjcmV0YXJ5Iiwic2VjdGlvbiIsInNlY3RvciIsInNlY3VyZSIsInNlY3VyaXR5Iiwic2VlIiwic2VlZCIsInNlZWsiLCJzZWVtIiwic2VnbWVudCIsInNlaXplIiwic2VsZWN0Iiwic2VsZWN0aW9uIiwic2VsZiIsInNlbGwiLCJTZW5hdGUiLCJzZW5hdG9yIiwic2VuZCIsInNlbmlvciIsInNlbnNlIiwic2Vuc2l0aXZlIiwic2VudGVuY2UiLCJzZXBhcmF0ZSIsInNlcXVlbmNlIiwic2VyaWVzIiwic2VyaW91cyIsInNlcmlvdXNseSIsInNlcnZlIiwic2VydmljZSIsInNlc3Npb24iLCJzZXQiLCJzZXR0aW5nIiwic2V0dGxlIiwic2V0dGxlbWVudCIsInNldmVuIiwic2V2ZXJhbCIsInNldmVyZSIsInNleCIsInNleHVhbCIsInNoYWRlIiwic2hhZG93Iiwic2hha2UiLCJzaGFsbCIsInNoYXBlIiwic2hhcmUiLCJzaGFycCIsInNoZSIsInNoZWV0Iiwic2hlbGYiLCJzaGVsbCIsInNoZWx0ZXIiLCJzaGlmdCIsInNoaW5lIiwic2hpcCIsInNoaXJ0Iiwic2hpdCIsInNob2NrIiwic2hvZSIsInNob290Iiwic2hvb3RpbmciLCJzaG9wIiwic2hvcHBpbmciLCJzaG9yZSIsInNob3J0Iiwic2hvcnRseSIsInNob3QiLCJzaG91bGQiLCJzaG91bGRlciIsInNob3V0Iiwic2hvdyIsInNob3dlciIsInNocnVnIiwic2h1dCIsInNpY2siLCJzaWRlIiwic2lnaCIsInNpZ2h0Iiwic2lnbiIsInNpZ25hbCIsInNpZ25pZmljYW5jZSIsInNpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRseSIsInNpbGVuY2UiLCJzaWxlbnQiLCJzaWx2ZXIiLCJzaW1pbGFyIiwic2ltaWxhcmx5Iiwic2ltcGxlIiwic2ltcGx5Iiwic2luIiwic2luY2UiLCJzaW5nIiwic2luZ2VyIiwic2luZ2xlIiwic2luayIsInNpciIsInNpc3RlciIsInNpdCIsInNpdGUiLCJzaXR1YXRpb24iLCJzaXgiLCJzaXplIiwic2tpIiwic2tpbGwiLCJza2luIiwic2t5Iiwic2xhdmUiLCJzbGVlcCIsInNsaWNlIiwic2xpZGUiLCJzbGlnaHQiLCJzbGlnaHRseSIsInNsaXAiLCJzbG93Iiwic2xvd2x5Iiwic21hbGwiLCJzbWFydCIsInNtZWxsIiwic21pbGUiLCJzbW9rZSIsInNtb290aCIsInNuYXAiLCJzbm93Iiwic28iLCJzb2NjZXIiLCJzb2NpYWwiLCJzb2NpZXR5Iiwic29mdCIsInNvZnR3YXJlIiwic29pbCIsInNvbGFyIiwic29sZGllciIsInNvbGlkIiwic29sdXRpb24iLCJzb2x2ZSIsInNvbWUiLCJzb21lYm9keSIsInNvbWVob3ciLCJzb21lb25lIiwic29tZXRoaW5nIiwic29tZXRpbWVzIiwic29tZXdoYXQiLCJzb21ld2hlcmUiLCJzb24iLCJzb25nIiwic29vbiIsInNvcGhpc3RpY2F0ZWQiLCJzb3JyeSIsInNvcnQiLCJzb3VsIiwic291bmQiLCJzb3VwIiwic291cmNlIiwic291dGgiLCJzb3V0aGVybiIsIlNvdmlldCIsInNwYWNlIiwiU3BhbmlzaCIsInNwZWFrIiwic3BlYWtlciIsInNwZWNpYWwiLCJzcGVjaWFsaXN0Iiwic3BlY2llcyIsInNwZWNpZmljIiwic3BlY2lmaWNhbGx5Iiwic3BlZWNoIiwic3BlZWQiLCJzcGVuZCIsInNwZW5kaW5nIiwic3BpbiIsInNwaXJpdCIsInNwaXJpdHVhbCIsInNwbGl0Iiwic3Bva2VzbWFuIiwic3BvcnQiLCJzcG90Iiwic3ByZWFkIiwic3ByaW5nIiwic3F1YXJlIiwic3F1ZWV6ZSIsInN0YWJpbGl0eSIsInN0YWJsZSIsInN0YWZmIiwic3RhZ2UiLCJzdGFpciIsInN0YWtlIiwic3RhbmQiLCJzdGFuZGFyZCIsInN0YW5kaW5nIiwic3RhciIsInN0YXJlIiwic3RhcnQiLCJzdGF0ZSIsInN0YXRlbWVudCIsInN0YXRpb24iLCJzdGF0aXN0aWNzIiwic3RhdHVzIiwic3RheSIsInN0ZWFkeSIsInN0ZWFsIiwic3RlZWwiLCJzdGVwIiwic3RpY2siLCJzdGlsbCIsInN0aXIiLCJzdG9jayIsInN0b21hY2giLCJzdG9uZSIsInN0b3AiLCJzdG9yYWdlIiwic3RvcmUiLCJzdG9ybSIsInN0b3J5Iiwic3RyYWlnaHQiLCJzdHJhbmdlIiwic3RyYW5nZXIiLCJzdHJhdGVnaWMiLCJzdHJhdGVneSIsInN0cmVhbSIsInN0cmVldCIsInN0cmVuZ3RoIiwic3RyZW5ndGhlbiIsInN0cmVzcyIsInN0cmV0Y2giLCJzdHJpa2UiLCJzdHJpbmciLCJzdHJpcCIsInN0cm9rZSIsInN0cm9uZyIsInN0cm9uZ2x5Iiwic3RydWN0dXJlIiwic3RydWdnbGUiLCJzdHVkZW50Iiwic3R1ZGlvIiwic3R1ZHkiLCJzdHVmZiIsInN0dXBpZCIsInN0eWxlIiwic3ViamVjdCIsInN1Ym1pdCIsInN1YnNlcXVlbnQiLCJzdWJzdGFuY2UiLCJzdWJzdGFudGlhbCIsInN1Y2NlZWQiLCJzdWNjZXNzIiwic3VjY2Vzc2Z1bCIsInN1Y2Nlc3NmdWxseSIsInN1Y2giLCJzdWRkZW4iLCJzdWRkZW5seSIsInN1ZSIsInN1ZmZlciIsInN1ZmZpY2llbnQiLCJzdWdhciIsInN1Z2dlc3QiLCJzdWdnZXN0aW9uIiwic3VpY2lkZSIsInN1aXQiLCJzdW1tZXIiLCJzdW1taXQiLCJzdW4iLCJzdXBlciIsInN1cHBseSIsInN1cHBvcnQiLCJzdXBwb3J0ZXIiLCJzdXBwb3NlIiwic3VwcG9zZWQiLCJTdXByZW1lIiwic3VyZSIsInN1cmVseSIsInN1cmZhY2UiLCJzdXJnZXJ5Iiwic3VycHJpc2UiLCJzdXJwcmlzZWQiLCJzdXJwcmlzaW5nIiwic3VycHJpc2luZ2x5Iiwic3Vycm91bmQiLCJzdXJ2ZXkiLCJzdXJ2aXZhbCIsInN1cnZpdmUiLCJzdXJ2aXZvciIsInN1c3BlY3QiLCJzdXN0YWluIiwic3dlYXIiLCJzd2VlcCIsInN3ZWV0Iiwic3dpbSIsInN3aW5nIiwic3dpdGNoIiwic3ltYm9sIiwic3ltcHRvbSIsInN5c3RlbSIsInRhYmxlIiwidGFibGVzcG9vbiIsInRhY3RpYyIsInRhaWwiLCJ0YWtlIiwidGFsZSIsInRhbGVudCIsInRhbGsiLCJ0YWxsIiwidGFuayIsInRhcCIsInRhcGUiLCJ0YXJnZXQiLCJ0YXNrIiwidGFzdGUiLCJ0YXgiLCJ0YXhwYXllciIsInRlYSIsInRlYWNoIiwidGVhY2hlciIsInRlYWNoaW5nIiwidGVhbSIsInRlYXIiLCJ0ZWFzcG9vbiIsInRlY2huaWNhbCIsInRlY2huaXF1ZSIsInRlY2hub2xvZ3kiLCJ0ZWVuIiwidGVlbmFnZXIiLCJ0ZWxlcGhvbmUiLCJ0ZWxlc2NvcGUiLCJ0ZWxldmlzaW9uIiwidGVsbCIsInRlbXBlcmF0dXJlIiwidGVtcG9yYXJ5IiwidGVuIiwidGVuZCIsInRlbmRlbmN5IiwidGVubmlzIiwidGVuc2lvbiIsInRlbnQiLCJ0ZXJtIiwidGVybXMiLCJ0ZXJyaWJsZSIsInRlcnJpdG9yeSIsInRlcnJvciIsInRlcnJvcmlzbSIsInRlcnJvcmlzdCIsInRlc3QiLCJ0ZXN0aWZ5IiwidGVzdGltb255IiwidGVzdGluZyIsInRleHQiLCJ0aGFuIiwidGhhbmsiLCJ0aGFua3MiLCJ0aGF0IiwidGhlIiwidGhlYXRlciIsInRoZWlyIiwidGhlbSIsInRoZW1lIiwidGhlbXNlbHZlcyIsInRoZW4iLCJ0aGVvcnkiLCJ0aGVyYXB5IiwidGhlcmUiLCJ0aGVyZWZvcmUiLCJ0aGVzZSIsInRoZXkiLCJ0aGljayIsInRoaW4iLCJ0aGluZyIsInRoaW5rIiwidGhpbmtpbmciLCJ0aGlyZCIsInRoaXJ0eSIsInRoaXMiLCJ0aG9zZSIsInRob3VnaCIsInRob3VnaHQiLCJ0aG91c2FuZCIsInRocmVhdCIsInRocmVhdGVuIiwidGhyZWUiLCJ0aHJvYXQiLCJ0aHJvdWdoIiwidGhyb3VnaG91dCIsInRocm93IiwidGh1cyIsInRpY2tldCIsInRpZSIsInRpZ2h0IiwidGltZSIsInRpbnkiLCJ0aXAiLCJ0aXJlIiwidGlyZWQiLCJ0aXNzdWUiLCJ0aXRsZSIsInRvIiwidG9iYWNjbyIsInRvZGF5IiwidG9lIiwidG9nZXRoZXIiLCJ0b21hdG8iLCJ0b21vcnJvdyIsInRvbmUiLCJ0b25ndWUiLCJ0b25pZ2h0IiwidG9vIiwidG9vbCIsInRvb3RoIiwidG9wIiwidG9waWMiLCJ0b3NzIiwidG90YWwiLCJ0b3RhbGx5IiwidG91Y2giLCJ0b3VnaCIsInRvdXIiLCJ0b3VyaXN0IiwidG91cm5hbWVudCIsInRvd2FyZCIsInRvd2FyZHMiLCJ0b3dlciIsInRvd24iLCJ0b3kiLCJ0cmFjZSIsInRyYWNrIiwidHJhZGUiLCJ0cmFkaXRpb24iLCJ0cmFkaXRpb25hbCIsInRyYWZmaWMiLCJ0cmFnZWR5IiwidHJhaWwiLCJ0cmFpbiIsInRyYWluaW5nIiwidHJhbnNmZXIiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1hdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2xhdGUiLCJ0cmFuc3BvcnRhdGlvbiIsInRyYXZlbCIsInRyZWF0IiwidHJlYXRtZW50IiwidHJlYXR5IiwidHJlZSIsInRyZW1lbmRvdXMiLCJ0cmVuZCIsInRyaWFsIiwidHJpYmUiLCJ0cmljayIsInRyaXAiLCJ0cm9vcCIsInRyb3VibGUiLCJ0cnVjayIsInRydWUiLCJ0cnVseSIsInRydXN0IiwidHJ1dGgiLCJ0cnkiLCJ0dWJlIiwidHVubmVsIiwidHVybiIsIlRWIiwidHdlbHZlIiwidHdlbnR5IiwidHdpY2UiLCJ0d2luIiwidHdvIiwidHlwZSIsInR5cGljYWwiLCJ0eXBpY2FsbHkiLCJ1Z2x5IiwidWx0aW1hdGUiLCJ1bHRpbWF0ZWx5IiwidW5hYmxlIiwidW5jbGUiLCJ1bmRlciIsInVuZGVyZ28iLCJ1bmRlcnN0YW5kIiwidW5kZXJzdGFuZGluZyIsInVuZm9ydHVuYXRlbHkiLCJ1bmlmb3JtIiwidW5pb24iLCJ1bmlxdWUiLCJ1bml0IiwiVW5pdGVkIiwidW5pdmVyc2FsIiwidW5pdmVyc2UiLCJ1bml2ZXJzaXR5IiwidW5rbm93biIsInVubGVzcyIsInVubGlrZSIsInVubGlrZWx5IiwidW50aWwiLCJ1bnVzdWFsIiwidXAiLCJ1cG9uIiwidXBwZXIiLCJ1cmJhbiIsInVyZ2UiLCJ1cyIsInVzZSIsInVzZWQiLCJ1c2VmdWwiLCJ1c2VyIiwidXN1YWwiLCJ1c3VhbGx5IiwidXRpbGl0eSIsInZhY2F0aW9uIiwidmFsbGV5IiwidmFsdWFibGUiLCJ2YWx1ZSIsInZhcmlhYmxlIiwidmFyaWF0aW9uIiwidmFyaWV0eSIsInZhcmlvdXMiLCJ2YXJ5IiwidmFzdCIsInZlZ2V0YWJsZSIsInZlaGljbGUiLCJ2ZW50dXJlIiwidmVyc2lvbiIsInZlcnN1cyIsInZlcnkiLCJ2ZXNzZWwiLCJ2ZXRlcmFuIiwidmlhIiwidmljdGltIiwidmljdG9yeSIsInZpZGVvIiwidmlldyIsInZpZXdlciIsInZpbGxhZ2UiLCJ2aW9sYXRlIiwidmlvbGF0aW9uIiwidmlvbGVuY2UiLCJ2aW9sZW50IiwidmlydHVhbGx5IiwidmlydHVlIiwidmlydXMiLCJ2aXNpYmxlIiwidmlzaW9uIiwidmlzaXQiLCJ2aXNpdG9yIiwidmlzdWFsIiwidml0YWwiLCJ2b2ljZSIsInZvbHVtZSIsInZvbHVudGVlciIsInZvdGUiLCJ2b3RlciIsInZzIiwidnVsbmVyYWJsZSIsIndhZ2UiLCJ3YWl0Iiwid2FrZSIsIndhbGsiLCJ3YWxsIiwid2FuZGVyIiwid2FudCIsIndhciIsIndhcm0iLCJ3YXJuIiwid2FybmluZyIsIndhc2giLCJ3YXN0ZSIsIndhdGNoIiwid2F0ZXIiLCJ3YXZlIiwid2F5Iiwid2UiLCJ3ZWFrIiwid2VhbHRoIiwid2VhbHRoeSIsIndlYXBvbiIsIndlYXIiLCJ3ZWF0aGVyIiwid2VkZGluZyIsIndlZWsiLCJ3ZWVrZW5kIiwid2Vla2x5Iiwid2VpZ2giLCJ3ZWlnaHQiLCJ3ZWxjb21lIiwid2VsZmFyZSIsIndlbGwiLCJ3ZXN0Iiwid2VzdGVybiIsIndldCIsIndoYXQiLCJ3aGF0ZXZlciIsIndoZWVsIiwid2hlbiIsIndoZW5ldmVyIiwid2hlcmUiLCJ3aGVyZWFzIiwid2hldGhlciIsIndoaWNoIiwid2hpbGUiLCJ3aGlzcGVyIiwid2hpdGUiLCJ3aG8iLCJ3aG9sZSIsIndob20iLCJ3aG9zZSIsIndoeSIsIndpZGUiLCJ3aWRlbHkiLCJ3aWRlc3ByZWFkIiwid2lmZSIsIndpbGQiLCJ3aWxsIiwid2lsbGluZyIsIndpbiIsIndpbmQiLCJ3aW5kb3ciLCJ3aW5lIiwid2luZyIsIndpbm5lciIsIndpbnRlciIsIndpcGUiLCJ3aXJlIiwid2lzZG9tIiwid2lzZSIsIndpc2giLCJ3aXRoIiwid2l0aGRyYXciLCJ3aXRoaW4iLCJ3aXRob3V0Iiwid2l0bmVzcyIsIndvbWFuIiwid29uZGVyIiwid29uZGVyZnVsIiwid29vZCIsIndvb2RlbiIsIndvcmQiLCJ3b3JrIiwid29ya2VyIiwid29ya2luZyIsIndvcmtzIiwid29ya3Nob3AiLCJ3b3JsZCIsIndvcnJpZWQiLCJ3b3JyeSIsIndvcnRoIiwid291bGQiLCJ3b3VuZCIsIndyYXAiLCJ3cml0ZSIsIndyaXRlciIsIndyaXRpbmciLCJ3cm9uZyIsInlhcmQiLCJ5ZWFoIiwieWVhciIsInllbGwiLCJ5ZWxsb3ciLCJ5ZXMiLCJ5ZXN0ZXJkYXkiLCJ5ZXQiLCJ5aWVsZCIsInlvdSIsInlvdW5nIiwieW91ciIsInlvdXJzIiwieW91cnNlbGYiLCJ5b3V0aCIsInpvbmUiLCJheGlvcyIsImZzIiwiZmluZGVyIiwiQVBJX0RBSUxZX0xJTUlUIiwiTUFYX1dPUkRTIiwiQ0FDSEVfQ0xVU1RFUlMiLCJNQVhfTk9ERV9GUkVRVUVOQ1kiLCJUUkFWRVJTRV9TSU1JTEFSIiwiY2FjaGVJc0luaXRpYWxpemVkIiwidG90YWxXb3Jkc0xhc3REYXkiLCJsYXp5SW5pdENhY2hlIiwiY3VydGltZSIsIkRhdGUiLCJmaW5kRmlsZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwid2ZwYXRoIiwiaW5pdENyYXdsZXIiLCJfTUFYX1dPUkRTIiwiX0NBQ0hFX0NMVVNURVJTIiwiX01BWF9OT0RFX0ZSRVFVRU5DWSIsIl9UUkFWRVJTRV9TSU1JTEFSIiwiZXhpc3RzU3luYyIsIm1rZGlyU3luYyIsInJlY3Vyc2l2ZSIsInNpbmdsZVdvcmRUb0Rpc3BsYXkiLCJyZXN1bHRzIiwicHJvbnVuY2lhdGlvbiIsImRlZiIsImRlZmluaXRpb25BcnJheSIsInBhcnRPZlNwZWVjaCIsInByb3BlcnRpZXMiLCJrZXlzIiwiT2JqZWN0IiwicmVnZXgiLCJ0b0xvd2VyQ2FzZSIsIm5ld09iaiIsImlzU3RyaW5nIiwibG9hZFNpbmdsZVdvcmQiLCJhc29iamVjdCIsImlqc29uIiwicmVhZEZpbGVTeW5jIiwidG9TdHJpbmciLCJKU09OIiwicGFyc2UiLCJvanNvbiIsInN0cmluZ2lmeSIsImUiLCJ1bmxpbmtTeW5jIiwiZW52IiwiUkFQSURBUElfS0VZIiwiZGpzb24iLCJ3cml0ZUZpbGUiLCJlcnIiLCJUcmF2ZXJzZU5vZGUiLCJjb25zdHJ1Y3RvciIsImJ5X2RlZiIsInZhbCIsInN5bm9ueW1zIiwid29yZHMiLCJzaW1pbGFyVG8iLCJjb21wcmVzcyIsImxvYWREaWN0aW9uYXJ5QW5kQ2hpbGRyZW4iLCJ0cmVzdWx0IiwidHJhdmVyc2lvbiIsIm5vZGUiLCJ3b3Jkc2JyZWFkdGhmaXJzdCIsInRyYXZlcnNlQ2x1c3RlciIsIm5vV29yZHMiLCJwcmV2aW91c2xldmVsY2hpbGR3b3JkcyIsImNvbmNhdCIsInByb21pc2VzIiwidyIsImJ5X3ciLCJub2RlcHJvbWlzZSIsIlByb21pc2UiLCJsb2FkQ2x1c3RlciIsImNmcGF0aCIsImJ5X2tleSIsInZhbHVlcyIsImNtcCIsImZpcnN0RWwiLCJzZWNvbmRFbCIsImxvY2FsZUNvbXBhcmUiLCJkZWZvYmoiLCJub0NsdXN0ZXJFbnRyaWVzIiwiY2pzb24iLCJsb2FkQ29tbW9uV29yZCIsIm5vRGVmaW5pdGlvbnMiLCJsb2FkQ29tbW9uV29yZHMiLCJjdyIsImNvbW1vbldvcmQiLCJGaW5kRmlsZXMiLCJjbnQiLCJyb290Rm9sZGVyIiwiZmlsZU1vZGlmaWVkRGF0ZSIsIm9uRmlsZSIsInN0clBhdGgiLCJzdGF0IiwiX3Jlc29sdmUiLCJfcmVqZWN0Iiwic3RhcnRTZWFyY2giLCJjcmF3bGVyIiwiaGFuZGxlciIsInN0YXR1c0NvZGUiLCJqc29uIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFD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WUFBWSxtQkFBTyxDQUFDLEVBQU87O0FBRTNCO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUNBQWlDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QyxFQUFFO0FBQy9ELEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7Ozs7Ozs7QUNqVUEsZ0M7Ozs7Ozs7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLEVBQUk7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZ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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtREFBbUQ7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7O0FDdFJBLG1DOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxFQUFjO0FBQ3pDLENBQUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyxFQUFXO0FBQ3RDOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsbUJBQU8sQ0FBQyxFQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztBQ2xNQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLE9BQU87QUFDbEIsWUFBWSxNQUFNO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBOztBQUVBLFVBQVUsbUJBQU8sQ0FBQyxFQUFLO0FBQ3ZCLFdBQVcsbUJBQU8sQ0FBQyxFQUFNOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixtQkFBTyxDQUFDLEVBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLEVBQWdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw2REFBNkQ7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHlCQUF5Qjs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLElBQUk7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsRUFBRTtBQUNuRCxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN6TEEsZ0M7Ozs7OztBQ0FBLGlDOzs7Ozs7O0FDQWE7QUFDYixXQUFXLG1CQUFPLENBQUMsRUFBSTtBQUN2QixnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFVOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsR0FBRztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsSUEsK0I7Ozs7Ozs7QUNBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEEsaUM7Ozs7Ozs7Ozs7Ozs7QUNBYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsRUFBVTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3hEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNNjBCLFNBQVMsR0FBR3AyQixtQkFBTyxDQUFDLEVBQUQsQ0FBekI7O0FBRU8sSUFBSXEyQixHQUFHLEdBQUMsQ0FBUjtBQUFBLElBQVU5RSxNQUFNLEdBQUMsQ0FBakI7QUFFQSxTQUFTSCxTQUFULENBQW1Ca0YsVUFBbkIsRUFBK0JDLGdCQUEvQixFQUFpREMsTUFBakQsRUFBeUQ7QUFDNUQsTUFBSS9GLE1BQU0sR0FBRyxJQUFJMkYsU0FBSixDQUFjO0FBQ3ZCRSxjQUR1QjtBQUV2QkM7QUFGdUIsR0FBZCxDQUFiO0FBSUEsTUFBSWgxQixNQUFKLEVBQVdiLE9BQVgsRUFBbUIxQyxNQUFuQjtBQUNBcTRCLEtBQUcsR0FBQyxDQUFKO0FBQU85RSxRQUFNLEdBQUMsQ0FBUDtBQUVQZCxRQUFNLENBQUNscUMsRUFBUCxDQUFVLE9BQVYsRUFBbUIsVUFBU2t3QyxPQUFULEVBQWtCQyxJQUFsQixFQUF3QjtBQUN2QyxRQUFJRixNQUFKLEVBQVlBLE1BQU0sQ0FBQ0MsT0FBRCxFQUFVQyxJQUFWLENBQU47QUFDWkwsT0FBRztBQUNOLEdBSEQ7QUFJQTVGLFFBQU0sQ0FBQ2xxQyxFQUFQLENBQVUsVUFBVixFQUFzQixZQUFXO0FBQzdCbWEsV0FBTyxDQUFDMjFCLEdBQUQsQ0FBUDtBQUNILEdBRkQ7QUFHQTVGLFFBQU0sQ0FBQ2xxQyxFQUFQLENBQVUsV0FBVixFQUF1QixVQUFTc3RDLEdBQVQsRUFBYzRDLE9BQWQsRUFBdUI7QUFDMUNwRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBb0JtRixPQUFwQixHQUE4QixHQUE5QixHQUFvQzVDLEdBQWhELEVBRDBDLENBQ2E7O0FBQ3ZEdEMsVUFBTTtBQUNULEdBSEQ7QUFJQWQsUUFBTSxDQUFDbHFDLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVNzdEMsR0FBVCxFQUFjO0FBQzdCeEMsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQWtCdUMsR0FBOUI7QUFDQXRDLFVBQU07QUFDVCxHQUhEO0FBS0Fod0IsUUFBTSxHQUFHLElBQUk0ekIsT0FBSixDQUFZLENBQUN3QixRQUFELEVBQVVDLE9BQVYsS0FBb0I7QUFDckNsMkIsV0FBTyxHQUFHaTJCLFFBQVY7QUFDQTM0QixVQUFNLEdBQUc0NEIsT0FBVDtBQUNBbkcsVUFBTSxDQUFDb0csV0FBUDtBQUNILEdBSlEsQ0FBVDtBQUtBLFNBQU90MUIsTUFBUDtBQUNILEM7Ozs7Ozs7QUNsQ1k7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDZCQUE2QixtQkFBTyxDQUFDLEVBQUk7QUFDekMsZ0NBQWdDLG1CQUFPLENBQUMsRUFBTztBQUMvQywrQkFBK0IsbUJBQU8sQ0FBQyxFQUFNO0FBQzdDLGlDQUFpQyxtQkFBTyxDQUFDLEVBQVE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkM7Ozs7OztBQ2hIQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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S0FBdkI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxJQUEzQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLElBQXpCO0FBR08sZUFBZWlHLE9BQWYsQ0FBdUIvbUUsS0FBdkIsRUFBOEJsVyxPQUE5QixFQUF1QztBQUM1Q2c5RSxTQUFPLENBQUNyRixXQUFSLENBQ0VkLFNBREYsRUFFRUMsY0FGRixFQUdFQyxrQkFIRixFQUlFQyxnQkFKRjs7QUFPQSxNQUFJO0FBRUZPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG9FQUFaO0FBRUEsUUFBSXlELFFBQVEsR0FBRyxFQUFmOztBQUNBLFNBQUssSUFBSW9CLFVBQVQsSUFBdUJELEVBQUUsQ0FBQzlnRyxpQkFBMUIsRUFBNkM7QUFDM0MyL0YsY0FBUSxDQUFDaDhCLElBQVQsQ0FBYys5QixPQUFPLENBQUMxQixXQUFSLENBQW9CZSxVQUFwQixFQUFnQyxLQUFoQyxDQUFkO0FBQ0Q7O0FBQ0QsVUFBTWhCLE9BQU8sQ0FBQy81RixHQUFSLENBQVkyNUYsUUFBWixDQUFOO0FBRUEsV0FBTztBQUNMaUMsZ0JBQVUsRUFBRSxHQURQO0FBRUwzdUYsVUFBSSxFQUFFNHVGLElBRkQ7QUFHTEMsYUFBTyxFQUFFO0FBQ1AsdUNBQStCO0FBRHhCO0FBSEosS0FBUDtBQVFELEdBbEJELENBa0JFLE9BQU9yRCxHQUFQLEVBQVk7QUFDWnhDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZdUMsR0FBWjtBQUNBLFdBQU87QUFBRW1ELGdCQUFVLEVBQUUsR0FBZDtBQUFtQjN1RixVQUFJLEVBQUV3ckYsR0FBRyxDQUFDWCxRQUFKO0FBQXpCLEtBQVA7QUFDRDtBQUNGLEMiLCJmaWxlIjoiY3Jhd2wtYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1Myk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7IiwidmFyIHVybCA9IHJlcXVpcmUoXCJ1cmxcIik7XG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xudmFyIGh0dHBzID0gcmVxdWlyZShcImh0dHBzXCIpO1xudmFyIGFzc2VydCA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG52YXIgV3JpdGFibGUgPSByZXF1aXJlKFwic3RyZWFtXCIpLldyaXRhYmxlO1xudmFyIGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZm9sbG93LXJlZGlyZWN0c1wiKTtcblxuLy8gUkZDNzIzMcKnNC4yLjE6IE9mIHRoZSByZXF1ZXN0IG1ldGhvZHMgZGVmaW5lZCBieSB0aGlzIHNwZWNpZmljYXRpb24sXG4vLyB0aGUgR0VULCBIRUFELCBPUFRJT05TLCBhbmQgVFJBQ0UgbWV0aG9kcyBhcmUgZGVmaW5lZCB0byBiZSBzYWZlLlxudmFyIFNBRkVfTUVUSE9EUyA9IHsgR0VUOiB0cnVlLCBIRUFEOiB0cnVlLCBPUFRJT05TOiB0cnVlLCBUUkFDRTogdHJ1ZSB9O1xuXG4vLyBDcmVhdGUgaGFuZGxlcnMgdGhhdCBwYXNzIGV2ZW50cyBmcm9tIG5hdGl2ZSByZXF1ZXN0c1xudmFyIGV2ZW50SGFuZGxlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuW1wiYWJvcnRcIiwgXCJhYm9ydGVkXCIsIFwiZXJyb3JcIiwgXCJzb2NrZXRcIiwgXCJ0aW1lb3V0XCJdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50SGFuZGxlcnNbZXZlbnRdID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHRoaXMuX3JlZGlyZWN0YWJsZS5lbWl0KGV2ZW50LCBhcmcpO1xuICB9O1xufSk7XG5cbi8vIEFuIEhUVFAoUykgcmVxdWVzdCB0aGF0IGNhbiBiZSByZWRpcmVjdGVkXG5mdW5jdGlvbiBSZWRpcmVjdGFibGVSZXF1ZXN0KG9wdGlvbnMsIHJlc3BvbnNlQ2FsbGJhY2spIHtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgcmVxdWVzdFxuICBXcml0YWJsZS5jYWxsKHRoaXMpO1xuICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLl9yZWRpcmVjdENvdW50ID0gMDtcbiAgdGhpcy5fcmVkaXJlY3RzID0gW107XG4gIHRoaXMuX3JlcXVlc3RCb2R5TGVuZ3RoID0gMDtcbiAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzID0gW107XG5cbiAgLy8gU2luY2UgaHR0cC5yZXF1ZXN0IHRyZWF0cyBob3N0IGFzIGFuIGFsaWFzIG9mIGhvc3RuYW1lLFxuICAvLyBidXQgdGhlIHVybCBtb2R1bGUgaW50ZXJwcmV0cyBob3N0IGFzIGhvc3RuYW1lIHBsdXMgcG9ydCxcbiAgLy8gZWxpbWluYXRlIHRoZSBob3N0IHByb3BlcnR5IHRvIGF2b2lkIGNvbmZ1c2lvbi5cbiAgaWYgKG9wdGlvbnMuaG9zdCkge1xuICAgIC8vIFVzZSBob3N0bmFtZSBpZiBzZXQsIGJlY2F1c2UgaXQgaGFzIHByZWNlZGVuY2VcbiAgICBpZiAoIW9wdGlvbnMuaG9zdG5hbWUpIHtcbiAgICAgIG9wdGlvbnMuaG9zdG5hbWUgPSBvcHRpb25zLmhvc3Q7XG4gICAgfVxuICAgIGRlbGV0ZSBvcHRpb25zLmhvc3Q7XG4gIH1cblxuICAvLyBBdHRhY2ggYSBjYWxsYmFjayBpZiBwYXNzZWRcbiAgaWYgKHJlc3BvbnNlQ2FsbGJhY2spIHtcbiAgICB0aGlzLm9uKFwicmVzcG9uc2VcIiwgcmVzcG9uc2VDYWxsYmFjayk7XG4gIH1cblxuICAvLyBSZWFjdCB0byByZXNwb25zZXMgb2YgbmF0aXZlIHJlcXVlc3RzXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fb25OYXRpdmVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIHNlbGYuX3Byb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XG4gIH07XG5cbiAgLy8gQ29tcGxldGUgdGhlIFVSTCBvYmplY3Qgd2hlbiBuZWNlc3NhcnlcbiAgaWYgKCFvcHRpb25zLnBhdGhuYW1lICYmIG9wdGlvbnMucGF0aCkge1xuICAgIHZhciBzZWFyY2hQb3MgPSBvcHRpb25zLnBhdGguaW5kZXhPZihcIj9cIik7XG4gICAgaWYgKHNlYXJjaFBvcyA8IDApIHtcbiAgICAgIG9wdGlvbnMucGF0aG5hbWUgPSBvcHRpb25zLnBhdGg7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3B0aW9ucy5wYXRobmFtZSA9IG9wdGlvbnMucGF0aC5zdWJzdHJpbmcoMCwgc2VhcmNoUG9zKTtcbiAgICAgIG9wdGlvbnMuc2VhcmNoID0gb3B0aW9ucy5wYXRoLnN1YnN0cmluZyhzZWFyY2hQb3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBlcmZvcm0gdGhlIGZpcnN0IHJlcXVlc3RcbiAgdGhpcy5fcGVyZm9ybVJlcXVlc3QoKTtcbn1cblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShXcml0YWJsZS5wcm90b3R5cGUpO1xuXG4vLyBXcml0ZXMgYnVmZmVyZWQgZGF0YSB0byB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIC8vIFZhbGlkYXRlIGlucHV0IGFuZCBzaGlmdCBwYXJhbWV0ZXJzIGlmIG5lY2Vzc2FyeVxuICBpZiAoISh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAoXCJsZW5ndGhcIiBpbiBkYXRhKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYXRhIHNob3VsZCBiZSBhIHN0cmluZywgQnVmZmVyIG9yIFVpbnQ4QXJyYXlcIik7XG4gIH1cbiAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2FsbGJhY2sgPSBlbmNvZGluZztcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH1cblxuICAvLyBJZ25vcmUgZW1wdHkgYnVmZmVycywgc2luY2Ugd3JpdGluZyB0aGVtIGRvZXNuJ3QgaW52b2tlIHRoZSBjYWxsYmFja1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzIyMDY2XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIE9ubHkgd3JpdGUgd2hlbiB3ZSBkb24ndCBleGNlZWQgdGhlIG1heGltdW0gYm9keSBsZW5ndGhcbiAgaWYgKHRoaXMuX3JlcXVlc3RCb2R5TGVuZ3RoICsgZGF0YS5sZW5ndGggPD0gdGhpcy5fb3B0aW9ucy5tYXhCb2R5TGVuZ3RoKSB7XG4gICAgdGhpcy5fcmVxdWVzdEJvZHlMZW5ndGggKz0gZGF0YS5sZW5ndGg7XG4gICAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzLnB1c2goeyBkYXRhOiBkYXRhLCBlbmNvZGluZzogZW5jb2RpbmcgfSk7XG4gICAgdGhpcy5fY3VycmVudFJlcXVlc3Qud3JpdGUoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcbiAgfVxuICAvLyBFcnJvciB3aGVuIHdlIGV4Y2VlZCB0aGUgbWF4aW11bSBib2R5IGxlbmd0aFxuICBlbHNlIHtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJSZXF1ZXN0IGJvZHkgbGFyZ2VyIHRoYW4gbWF4Qm9keUxlbmd0aCBsaW1pdFwiKSk7XG4gICAgdGhpcy5hYm9ydCgpO1xuICB9XG59O1xuXG4vLyBFbmRzIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIC8vIFNoaWZ0IHBhcmFtZXRlcnMgaWYgbmVjZXNzYXJ5XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2FsbGJhY2sgPSBkYXRhO1xuICAgIGRhdGEgPSBlbmNvZGluZyA9IG51bGw7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGVuY29kaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIC8vIFdyaXRlIGRhdGEgYW5kIGVuZFxuICB2YXIgY3VycmVudFJlcXVlc3QgPSB0aGlzLl9jdXJyZW50UmVxdWVzdDtcbiAgdGhpcy53cml0ZShkYXRhIHx8IFwiXCIsIGVuY29kaW5nLCBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudFJlcXVlc3QuZW5kKG51bGwsIG51bGwsIGNhbGxiYWNrKTtcbiAgfSk7XG59O1xuXG4vLyBTZXRzIGEgaGVhZGVyIHZhbHVlIG9uIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5zZXRIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5fb3B0aW9ucy5oZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LnNldEhlYWRlcihuYW1lLCB2YWx1ZSk7XG59O1xuXG4vLyBDbGVhcnMgYSBoZWFkZXIgdmFsdWUgb24gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLnJlbW92ZUhlYWRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9vcHRpb25zLmhlYWRlcnNbbmFtZV07XG4gIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LnJlbW92ZUhlYWRlcihuYW1lKTtcbn07XG5cbi8vIFByb3h5IGFsbCBvdGhlciBwdWJsaWMgQ2xpZW50UmVxdWVzdCBtZXRob2RzXG5bXG4gIFwiYWJvcnRcIiwgXCJmbHVzaEhlYWRlcnNcIiwgXCJnZXRIZWFkZXJcIixcbiAgXCJzZXROb0RlbGF5XCIsIFwic2V0U29ja2V0S2VlcEFsaXZlXCIsIFwic2V0VGltZW91dFwiLFxuXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRSZXF1ZXN0W21ldGhvZF0oYSwgYik7XG4gIH07XG59KTtcblxuLy8gUHJveHkgYWxsIHB1YmxpYyBDbGllbnRSZXF1ZXN0IHByb3BlcnRpZXNcbltcImFib3J0ZWRcIiwgXCJjb25uZWN0aW9uXCIsIFwic29ja2V0XCJdLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZSwgcHJvcGVydHksIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2N1cnJlbnRSZXF1ZXN0W3Byb3BlcnR5XTsgfSxcbiAgfSk7XG59KTtcblxuLy8gRXhlY3V0ZXMgdGhlIG5leHQgbmF0aXZlIHJlcXVlc3QgKGluaXRpYWwgb3IgcmVkaXJlY3QpXG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5fcGVyZm9ybVJlcXVlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIExvYWQgdGhlIG5hdGl2ZSBwcm90b2NvbFxuICB2YXIgcHJvdG9jb2wgPSB0aGlzLl9vcHRpb25zLnByb3RvY29sO1xuICB2YXIgbmF0aXZlUHJvdG9jb2wgPSB0aGlzLl9vcHRpb25zLm5hdGl2ZVByb3RvY29sc1twcm90b2NvbF07XG4gIGlmICghbmF0aXZlUHJvdG9jb2wpIHtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBwcm90b2NvbCBcIiArIHByb3RvY29sKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSWYgc3BlY2lmaWVkLCB1c2UgdGhlIGFnZW50IGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3RvY29sXG4gIC8vIChIVFRQIGFuZCBIVFRQUyB1c2UgZGlmZmVyZW50IHR5cGVzIG9mIGFnZW50cylcbiAgaWYgKHRoaXMuX29wdGlvbnMuYWdlbnRzKSB7XG4gICAgdmFyIHNjaGVtZSA9IHByb3RvY29sLnN1YnN0cigwLCBwcm90b2NvbC5sZW5ndGggLSAxKTtcbiAgICB0aGlzLl9vcHRpb25zLmFnZW50ID0gdGhpcy5fb3B0aW9ucy5hZ2VudHNbc2NoZW1lXTtcbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgbmF0aXZlIHJlcXVlc3RcbiAgdmFyIHJlcXVlc3QgPSB0aGlzLl9jdXJyZW50UmVxdWVzdCA9XG4gICAgICAgIG5hdGl2ZVByb3RvY29sLnJlcXVlc3QodGhpcy5fb3B0aW9ucywgdGhpcy5fb25OYXRpdmVSZXNwb25zZSk7XG4gIHRoaXMuX2N1cnJlbnRVcmwgPSB1cmwuZm9ybWF0KHRoaXMuX29wdGlvbnMpO1xuXG4gIC8vIFNldCB1cCBldmVudCBoYW5kbGVyc1xuICByZXF1ZXN0Ll9yZWRpcmVjdGFibGUgPSB0aGlzO1xuICBmb3IgKHZhciBldmVudCBpbiBldmVudEhhbmRsZXJzKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHJlcXVlc3Qub24oZXZlbnQsIGV2ZW50SGFuZGxlcnNbZXZlbnRdKTtcbiAgICB9XG4gIH1cblxuICAvLyBFbmQgYSByZWRpcmVjdGVkIHJlcXVlc3RcbiAgLy8gKFRoZSBmaXJzdCByZXF1ZXN0IG11c3QgYmUgZW5kZWQgZXhwbGljaXRseSB3aXRoIFJlZGlyZWN0YWJsZVJlcXVlc3QjZW5kKVxuICBpZiAodGhpcy5faXNSZWRpcmVjdCkge1xuICAgIC8vIFdyaXRlIHRoZSByZXF1ZXN0IGVudGl0eSBhbmQgZW5kLlxuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYnVmZmVycyA9IHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycztcbiAgICAoZnVuY3Rpb24gd3JpdGVOZXh0KCkge1xuICAgICAgaWYgKGkgPCBidWZmZXJzLmxlbmd0aCkge1xuICAgICAgICB2YXIgYnVmZmVyID0gYnVmZmVyc1tpKytdO1xuICAgICAgICByZXF1ZXN0LndyaXRlKGJ1ZmZlci5kYXRhLCBidWZmZXIuZW5jb2RpbmcsIHdyaXRlTmV4dCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVxdWVzdC5lbmQoKTtcbiAgICAgIH1cbiAgICB9KCkpO1xuICB9XG59O1xuXG4vLyBQcm9jZXNzZXMgYSByZXNwb25zZSBmcm9tIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5fcHJvY2Vzc1Jlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIC8vIFN0b3JlIHRoZSByZWRpcmVjdGVkIHJlc3BvbnNlXG4gIGlmICh0aGlzLl9vcHRpb25zLnRyYWNrUmVkaXJlY3RzKSB7XG4gICAgdGhpcy5fcmVkaXJlY3RzLnB1c2goe1xuICAgICAgdXJsOiB0aGlzLl9jdXJyZW50VXJsLFxuICAgICAgaGVhZGVyczogcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1c0NvZGUsXG4gICAgfSk7XG4gIH1cblxuICAvLyBSRkM3MjMxwqc2LjQ6IFRoZSAzeHggKFJlZGlyZWN0aW9uKSBjbGFzcyBvZiBzdGF0dXMgY29kZSBpbmRpY2F0ZXNcbiAgLy8gdGhhdCBmdXJ0aGVyIGFjdGlvbiBuZWVkcyB0byBiZSB0YWtlbiBieSB0aGUgdXNlciBhZ2VudCBpbiBvcmRlciB0b1xuICAvLyBmdWxmaWxsIHRoZSByZXF1ZXN0LiBJZiBhIExvY2F0aW9uIGhlYWRlciBmaWVsZCBpcyBwcm92aWRlZCxcbiAgLy8gdGhlIHVzZXIgYWdlbnQgTUFZIGF1dG9tYXRpY2FsbHkgcmVkaXJlY3QgaXRzIHJlcXVlc3QgdG8gdGhlIFVSSVxuICAvLyByZWZlcmVuY2VkIGJ5IHRoZSBMb2NhdGlvbiBmaWVsZCB2YWx1ZSxcbiAgLy8gZXZlbiBpZiB0aGUgc3BlY2lmaWMgc3RhdHVzIGNvZGUgaXMgbm90IHVuZGVyc3Rvb2QuXG4gIHZhciBsb2NhdGlvbiA9IHJlc3BvbnNlLmhlYWRlcnMubG9jYXRpb247XG4gIGlmIChsb2NhdGlvbiAmJiB0aGlzLl9vcHRpb25zLmZvbGxvd1JlZGlyZWN0cyAhPT0gZmFsc2UgJiZcbiAgICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gMzAwICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPCA0MDApIHtcbiAgICAvLyBSRkM3MjMxwqc2LjQ6IEEgY2xpZW50IFNIT1VMRCBkZXRlY3QgYW5kIGludGVydmVuZVxuICAgIC8vIGluIGN5Y2xpY2FsIHJlZGlyZWN0aW9ucyAoaS5lLiwgXCJpbmZpbml0ZVwiIHJlZGlyZWN0aW9uIGxvb3BzKS5cbiAgICBpZiAoKyt0aGlzLl9yZWRpcmVjdENvdW50ID4gdGhpcy5fb3B0aW9ucy5tYXhSZWRpcmVjdHMpIHtcbiAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIk1heCByZWRpcmVjdHMgZXhjZWVkZWQuXCIpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSRkM3MjMxwqc2LjQ6IEF1dG9tYXRpYyByZWRpcmVjdGlvbiBuZWVkcyB0byBkb25lIHdpdGhcbiAgICAvLyBjYXJlIGZvciBtZXRob2RzIG5vdCBrbm93biB0byBiZSBzYWZlIFvigKZdLFxuICAgIC8vIHNpbmNlIHRoZSB1c2VyIG1pZ2h0IG5vdCB3aXNoIHRvIHJlZGlyZWN0IGFuIHVuc2FmZSByZXF1ZXN0LlxuICAgIC8vIFJGQzcyMzHCpzYuNC43OiBUaGUgMzA3IChUZW1wb3JhcnkgUmVkaXJlY3QpIHN0YXR1cyBjb2RlIGluZGljYXRlc1xuICAgIC8vIHRoYXQgdGhlIHRhcmdldCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSVxuICAgIC8vIGFuZCB0aGUgdXNlciBhZ2VudCBNVVNUIE5PVCBjaGFuZ2UgdGhlIHJlcXVlc3QgbWV0aG9kXG4gICAgLy8gaWYgaXQgcGVyZm9ybXMgYW4gYXV0b21hdGljIHJlZGlyZWN0aW9uIHRvIHRoYXQgVVJJLlxuICAgIHZhciBoZWFkZXI7XG4gICAgdmFyIGhlYWRlcnMgPSB0aGlzLl9vcHRpb25zLmhlYWRlcnM7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDMwNyAmJiAhKHRoaXMuX29wdGlvbnMubWV0aG9kIGluIFNBRkVfTUVUSE9EUykpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMubWV0aG9kID0gXCJHRVRcIjtcbiAgICAgIC8vIERyb3AgYSBwb3NzaWJsZSBlbnRpdHkgYW5kIGhlYWRlcnMgcmVsYXRlZCB0byBpdFxuICAgICAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzID0gW107XG4gICAgICBmb3IgKGhlYWRlciBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmICgvXmNvbnRlbnQtL2kudGVzdChoZWFkZXIpKSB7XG4gICAgICAgICAgZGVsZXRlIGhlYWRlcnNbaGVhZGVyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERyb3AgdGhlIEhvc3QgaGVhZGVyLCBhcyB0aGUgcmVkaXJlY3QgbWlnaHQgbGVhZCB0byBhIGRpZmZlcmVudCBob3N0XG4gICAgaWYgKCF0aGlzLl9pc1JlZGlyZWN0KSB7XG4gICAgICBmb3IgKGhlYWRlciBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmICgvXmhvc3QkL2kudGVzdChoZWFkZXIpKSB7XG4gICAgICAgICAgZGVsZXRlIGhlYWRlcnNbaGVhZGVyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gdGhlIHJlZGlyZWN0ZWQgcmVxdWVzdFxuICAgIHZhciByZWRpcmVjdFVybCA9IHVybC5yZXNvbHZlKHRoaXMuX2N1cnJlbnRVcmwsIGxvY2F0aW9uKTtcbiAgICBkZWJ1ZyhcInJlZGlyZWN0aW5nIHRvXCIsIHJlZGlyZWN0VXJsKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIHVybC5wYXJzZShyZWRpcmVjdFVybCkpO1xuICAgIHRoaXMuX2lzUmVkaXJlY3QgPSB0cnVlO1xuICAgIHRoaXMuX3BlcmZvcm1SZXF1ZXN0KCk7XG5cbiAgICAvLyBEaXNjYXJkIHRoZSByZW1haW5kZXIgb2YgdGhlIHJlc3BvbnNlIHRvIGF2b2lkIHdhaXRpbmcgZm9yIGRhdGFcbiAgICByZXNwb25zZS5kZXN0cm95KCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gVGhlIHJlc3BvbnNlIGlzIG5vdCBhIHJlZGlyZWN0OyByZXR1cm4gaXQgYXMtaXNcbiAgICByZXNwb25zZS5yZXNwb25zZVVybCA9IHRoaXMuX2N1cnJlbnRVcmw7XG4gICAgcmVzcG9uc2UucmVkaXJlY3RzID0gdGhpcy5fcmVkaXJlY3RzO1xuICAgIHRoaXMuZW1pdChcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcblxuICAgIC8vIENsZWFuIHVwXG4gICAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzID0gW107XG4gIH1cbn07XG5cbi8vIFdyYXBzIHRoZSBrZXkvdmFsdWUgb2JqZWN0IG9mIHByb3RvY29scyB3aXRoIHJlZGlyZWN0IGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIHdyYXAocHJvdG9jb2xzKSB7XG4gIC8vIERlZmF1bHQgc2V0dGluZ3NcbiAgdmFyIGV4cG9ydHMgPSB7XG4gICAgbWF4UmVkaXJlY3RzOiAyMSxcbiAgICBtYXhCb2R5TGVuZ3RoOiAxMCAqIDEwMjQgKiAxMDI0LFxuICB9O1xuXG4gIC8vIFdyYXAgZWFjaCBwcm90b2NvbFxuICB2YXIgbmF0aXZlUHJvdG9jb2xzID0ge307XG4gIE9iamVjdC5rZXlzKHByb3RvY29scykuZm9yRWFjaChmdW5jdGlvbiAoc2NoZW1lKSB7XG4gICAgdmFyIHByb3RvY29sID0gc2NoZW1lICsgXCI6XCI7XG4gICAgdmFyIG5hdGl2ZVByb3RvY29sID0gbmF0aXZlUHJvdG9jb2xzW3Byb3RvY29sXSA9IHByb3RvY29sc1tzY2hlbWVdO1xuICAgIHZhciB3cmFwcGVkUHJvdG9jb2wgPSBleHBvcnRzW3NjaGVtZV0gPSBPYmplY3QuY3JlYXRlKG5hdGl2ZVByb3RvY29sKTtcblxuICAgIC8vIEV4ZWN1dGVzIGEgcmVxdWVzdCwgZm9sbG93aW5nIHJlZGlyZWN0c1xuICAgIHdyYXBwZWRQcm90b2NvbC5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgb3B0aW9ucyA9IHVybC5wYXJzZShvcHRpb25zKTtcbiAgICAgICAgb3B0aW9ucy5tYXhSZWRpcmVjdHMgPSBleHBvcnRzLm1heFJlZGlyZWN0cztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgcHJvdG9jb2w6IHByb3RvY29sLFxuICAgICAgICAgIG1heFJlZGlyZWN0czogZXhwb3J0cy5tYXhSZWRpcmVjdHMsXG4gICAgICAgICAgbWF4Qm9keUxlbmd0aDogZXhwb3J0cy5tYXhCb2R5TGVuZ3RoLFxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMubmF0aXZlUHJvdG9jb2xzID0gbmF0aXZlUHJvdG9jb2xzO1xuICAgICAgYXNzZXJ0LmVxdWFsKG9wdGlvbnMucHJvdG9jb2wsIHByb3RvY29sLCBcInByb3RvY29sIG1pc21hdGNoXCIpO1xuICAgICAgZGVidWcoXCJvcHRpb25zXCIsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIG5ldyBSZWRpcmVjdGFibGVSZXF1ZXN0KG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgLy8gRXhlY3V0ZXMgYSBHRVQgcmVxdWVzdCwgZm9sbG93aW5nIHJlZGlyZWN0c1xuICAgIHdyYXBwZWRQcm90b2NvbC5nZXQgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gd3JhcHBlZFByb3RvY29sLnJlcXVlc3Qob3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgcmVxdWVzdC5lbmQoKTtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gZXhwb3J0cztcbn1cblxuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB3cmFwKHsgaHR0cDogaHR0cCwgaHR0cHM6IGh0dHBzIH0pO1xubW9kdWxlLmV4cG9ydHMud3JhcCA9IHdyYXA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICovXG5leHBvcnRzLmluc3RhbmNlcyA9IFtdO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICB2YXIgcHJldlRpbWU7XG5cbiAgZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgLy8gZGlzYWJsZWQ/XG4gICAgaWYgKCFkZWJ1Zy5lbmFibGVkKSByZXR1cm47XG5cbiAgICB2YXIgc2VsZiA9IGRlYnVnO1xuXG4gICAgLy8gc2V0IGBkaWZmYCB0aW1lc3RhbXBcbiAgICB2YXIgY3VyciA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG4gICAgc2VsZi5kaWZmID0gbXM7XG4gICAgc2VsZi5wcmV2ID0gcHJldlRpbWU7XG4gICAgc2VsZi5jdXJyID0gY3VycjtcbiAgICBwcmV2VGltZSA9IGN1cnI7XG5cbiAgICAvLyB0dXJuIHRoZSBgYXJndW1lbnRzYCBpbnRvIGEgcHJvcGVyIEFycmF5XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSBleHBvcnRzLmNvZXJjZShhcmdzWzBdKTtcblxuICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICBhcmdzLnVuc2hpZnQoJyVPJyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCBmdW5jdGlvbihtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAvLyBpZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICBpZiAobWF0Y2ggPT09ICclJScpIHJldHVybiBtYXRjaDtcbiAgICAgIGluZGV4Kys7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gZXhwb3J0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZvcm1hdHRlcikge1xuICAgICAgICB2YXIgdmFsID0gYXJnc1tpbmRleF07XG4gICAgICAgIG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuICAgICAgICAvLyBub3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG4gICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcblxuICAgIC8vIGFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG4gICAgZXhwb3J0cy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cbiAgICB2YXIgbG9nRm4gPSBkZWJ1Zy5sb2cgfHwgZXhwb3J0cy5sb2cgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbiAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgfVxuXG4gIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgZGVidWcuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChuYW1lc3BhY2UpO1xuICBkZWJ1Zy51c2VDb2xvcnMgPSBleHBvcnRzLnVzZUNvbG9ycygpO1xuICBkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG4gIGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIGV4cG9ydHMuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHZhciBpbmRleCA9IGV4cG9ydHMuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBleHBvcnRzLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgZXhwb3J0cy5zYXZlKG5hbWVzcGFjZXMpO1xuXG4gIGV4cG9ydHMubmFtZXMgPSBbXTtcbiAgZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4gIHZhciBpO1xuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghc3BsaXRbaV0pIGNvbnRpbnVlOyAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgIGV4cG9ydHMuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhwb3J0cy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBleHBvcnRzLmluc3RhbmNlc1tpXTtcbiAgICBpbnN0YW5jZS5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gIGV4cG9ydHMuZW5hYmxlKCcnKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICBpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDb2VyY2UgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICByZXR1cm4gdmFsO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbXG4gICAgJ2Jhc2VVUkwnLCAndXJsJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLFxuICAgICdtYXhDb250ZW50TGVuZ3RoJywgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLFxuICAgICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnXG4gIF07XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICh1dGlscy5pc09iamVjdChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcbiAgICAuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKVxuICAgIC5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpO1xuXG4gIHZhciBvdGhlcktleXMgPSBPYmplY3RcbiAgICAua2V5cyhjb25maWcyKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBmdW5jdGlvbiBvdGhlcktleXNEZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIlxyXG4vLyBodHRwczovL3d3dy5lZi5jb20vd3dlbi9lbmdsaXNoLXJlc291cmNlcy9lbmdsaXNoLXZvY2FidWxhcnkvdG9wLTMwMDAtd29yZHMvXHJcblxyXG5leHBvcnQgY29uc3QgVGhlTW9zdENvbW1vbjMwMDAgPSB7XHJcbiAgICBhIDogMSxcclxuICAgIGFiYW5kb24gOiAxLFxyXG4gICAgYWJpbGl0eSA6IDEsXHJcbiAgICBhYmxlIDogMSxcclxuICAgIGFib3J0aW9uIDogMSxcclxuICAgIGFib3V0IDogMSxcclxuICAgIGFib3ZlIDogMSxcclxuICAgIGFicm9hZCA6IDEsXHJcbiAgICBhYnNlbmNlIDogMSxcclxuICAgIGFic29sdXRlIDogMSxcclxuICAgIGFic29sdXRlbHkgOiAxLFxyXG4gICAgYWJzb3JiIDogMSxcclxuICAgIGFidXNlIDogMSxcclxuICAgIGFjYWRlbWljIDogMSxcclxuICAgIGFjY2VwdCA6IDEsXHJcbiAgICBhY2Nlc3MgOiAxLFxyXG4gICAgYWNjaWRlbnQgOiAxLFxyXG4gICAgYWNjb21wYW55IDogMSxcclxuICAgIGFjY29tcGxpc2ggOiAxLFxyXG4gICAgYWNjb3JkaW5nIDogMSxcclxuICAgIGFjY291bnQgOiAxLFxyXG4gICAgYWNjdXJhdGUgOiAxLFxyXG4gICAgYWNjdXNlIDogMSxcclxuICAgIGFjaGlldmUgOiAxLFxyXG4gICAgYWNoaWV2ZW1lbnQgOiAxLFxyXG4gICAgYWNpZCA6IDEsXHJcbiAgICBhY2tub3dsZWRnZSA6IDEsXHJcbiAgICBhY3F1aXJlIDogMSxcclxuICAgIGFjcm9zcyA6IDEsXHJcbiAgICBhY3QgOiAxLFxyXG4gICAgYWN0aW9uIDogMSxcclxuICAgIGFjdGl2ZSA6IDEsXHJcbiAgICBhY3RpdmlzdCA6IDEsXHJcbiAgICBhY3Rpdml0eSA6IDEsXHJcbiAgICBhY3RvciA6IDEsXHJcbiAgICBhY3RyZXNzIDogMSxcclxuICAgIGFjdHVhbCA6IDEsXHJcbiAgICBhY3R1YWxseSA6IDEsXHJcbiAgICBhZCA6IDEsXHJcbiAgICBhZGFwdCA6IDEsXHJcbiAgICBhZGQgOiAxLFxyXG4gICAgYWRkaXRpb24gOiAxLFxyXG4gICAgYWRkaXRpb25hbCA6IDEsXHJcbiAgICBhZGRyZXNzIDogMSxcclxuICAgIGFkZXF1YXRlIDogMSxcclxuICAgIGFkanVzdCA6IDEsXHJcbiAgICBhZGp1c3RtZW50IDogMSxcclxuICAgIGFkbWluaXN0cmF0aW9uIDogMSxcclxuICAgIGFkbWluaXN0cmF0b3IgOiAxLFxyXG4gICAgYWRtaXJlIDogMSxcclxuICAgIGFkbWlzc2lvbiA6IDEsXHJcbiAgICBhZG1pdCA6IDEsXHJcbiAgICBhZG9sZXNjZW50IDogMSxcclxuICAgIGFkb3B0IDogMSxcclxuICAgIGFkdWx0IDogMSxcclxuICAgIGFkdmFuY2UgOiAxLFxyXG4gICAgYWR2YW5jZWQgOiAxLFxyXG4gICAgYWR2YW50YWdlIDogMSxcclxuICAgIGFkdmVudHVyZSA6IDEsXHJcbiAgICBhZHZlcnRpc2luZyA6IDEsXHJcbiAgICBhZHZpY2UgOiAxLFxyXG4gICAgYWR2aXNlIDogMSxcclxuICAgIGFkdmlzZXIgOiAxLFxyXG4gICAgYWR2b2NhdGUgOiAxLFxyXG4gICAgYWZmYWlyIDogMSxcclxuICAgIGFmZmVjdCA6IDEsXHJcbiAgICBhZmZvcmQgOiAxLFxyXG4gICAgYWZyYWlkIDogMSxcclxuICAgIEFmcmljYW4gOiAxLFxyXG4gICAgXCJBZnJpY2FuLUFtZXJpY2FuXCIgOiAxLFxyXG4gICAgYWZ0ZXIgOiAxLFxyXG4gICAgYWZ0ZXJub29uIDogMSxcclxuICAgIGFnYWluIDogMSxcclxuICAgIGFnYWluc3QgOiAxLFxyXG4gICAgYWdlIDogMSxcclxuICAgIGFnZW5jeSA6IDEsXHJcbiAgICBhZ2VuZGEgOiAxLFxyXG4gICAgYWdlbnQgOiAxLFxyXG4gICAgYWdncmVzc2l2ZSA6IDEsXHJcbiAgICBhZ28gOiAxLFxyXG4gICAgYWdyZWUgOiAxLFxyXG4gICAgYWdyZWVtZW50IDogMSxcclxuICAgIGFncmljdWx0dXJhbCA6IDEsXHJcbiAgICBhaCA6IDEsXHJcbiAgICBhaGVhZCA6IDEsXHJcbiAgICBhaWQgOiAxLFxyXG4gICAgYWlkZSA6IDEsXHJcbiAgICBBSURTIDogMSxcclxuICAgIGFpbSA6IDEsXHJcbiAgICBhaXIgOiAxLFxyXG4gICAgYWlyY3JhZnQgOiAxLFxyXG4gICAgYWlybGluZSA6IDEsXHJcbiAgICBhaXJwb3J0IDogMSxcclxuICAgIGFsYnVtIDogMSxcclxuICAgIGFsY29ob2wgOiAxLFxyXG4gICAgYWxpdmUgOiAxLFxyXG4gICAgYWxsIDogMSxcclxuICAgIGFsbGlhbmNlIDogMSxcclxuICAgIGFsbG93IDogMSxcclxuICAgIGFsbHkgOiAxLFxyXG4gICAgYWxtb3N0IDogMSxcclxuICAgIGFsb25lIDogMSxcclxuICAgIGFsb25nIDogMSxcclxuICAgIGFscmVhZHkgOiAxLFxyXG4gICAgYWxzbyA6IDEsXHJcbiAgICBhbHRlciA6IDEsXHJcbiAgICBhbHRlcm5hdGl2ZSA6IDEsXHJcbiAgICBhbHRob3VnaCA6IDEsXHJcbiAgICBhbHdheXMgOiAxLFxyXG4gICAgQU0gOiAxLFxyXG4gICAgYW1hemluZyA6IDEsXHJcbiAgICBBbWVyaWNhbiA6IDEsXHJcbiAgICBhbW9uZyA6IDEsXHJcbiAgICBhbW91bnQgOiAxLFxyXG4gICAgYW5hbHlzaXMgOiAxLFxyXG4gICAgYW5hbHlzdCA6IDEsXHJcbiAgICBhbmFseXplIDogMSxcclxuICAgIGFuY2llbnQgOiAxLFxyXG4gICAgYW5kIDogMSxcclxuICAgIGFuZ2VyIDogMSxcclxuICAgIGFuZ2xlIDogMSxcclxuICAgIGFuZ3J5IDogMSxcclxuICAgIGFuaW1hbCA6IDEsXHJcbiAgICBhbm5pdmVyc2FyeSA6IDEsXHJcbiAgICBhbm5vdW5jZSA6IDEsXHJcbiAgICBhbm51YWwgOiAxLFxyXG4gICAgYW5vdGhlciA6IDEsXHJcbiAgICBhbnN3ZXIgOiAxLFxyXG4gICAgYW50aWNpcGF0ZSA6IDEsXHJcbiAgICBhbnhpZXR5IDogMSxcclxuICAgIGFueSA6IDEsXHJcbiAgICBhbnlib2R5IDogMSxcclxuICAgIGFueW1vcmUgOiAxLFxyXG4gICAgYW55b25lIDogMSxcclxuICAgIGFueXRoaW5nIDogMSxcclxuICAgIGFueXdheSA6IDEsXHJcbiAgICBhbnl3aGVyZSA6IDEsXHJcbiAgICBhcGFydCA6IDEsXHJcbiAgICBhcGFydG1lbnQgOiAxLFxyXG4gICAgYXBwYXJlbnQgOiAxLFxyXG4gICAgYXBwYXJlbnRseSA6IDEsXHJcbiAgICBhcHBlYWwgOiAxLFxyXG4gICAgYXBwZWFyIDogMSxcclxuICAgIGFwcGVhcmFuY2UgOiAxLFxyXG4gICAgYXBwbGUgOiAxLFxyXG4gICAgYXBwbGljYXRpb24gOiAxLFxyXG4gICAgYXBwbHkgOiAxLFxyXG4gICAgYXBwb2ludCA6IDEsXHJcbiAgICBhcHBvaW50bWVudCA6IDEsXHJcbiAgICBhcHByZWNpYXRlIDogMSxcclxuICAgIGFwcHJvYWNoIDogMSxcclxuICAgIGFwcHJvcHJpYXRlIDogMSxcclxuICAgIGFwcHJvdmFsIDogMSxcclxuICAgIGFwcHJvdmUgOiAxLFxyXG4gICAgYXBwcm94aW1hdGVseSA6IDEsXHJcbiAgICBBcmFiIDogMSxcclxuICAgIGFyY2hpdGVjdCA6IDEsXHJcbiAgICBhcmVhIDogMSxcclxuICAgIGFyZ3VlIDogMSxcclxuICAgIGFyZ3VtZW50IDogMSxcclxuICAgIGFyaXNlIDogMSxcclxuICAgIGFybSA6IDEsXHJcbiAgICBhcm1lZCA6IDEsXHJcbiAgICBhcm15IDogMSxcclxuICAgIGFyb3VuZCA6IDEsXHJcbiAgICBhcnJhbmdlIDogMSxcclxuICAgIGFycmFuZ2VtZW50IDogMSxcclxuICAgIGFycmVzdCA6IDEsXHJcbiAgICBhcnJpdmFsIDogMSxcclxuICAgIGFycml2ZSA6IDEsXHJcbiAgICBhcnQgOiAxLFxyXG4gICAgYXJ0aWNsZSA6IDEsXHJcbiAgICBhcnRpc3QgOiAxLFxyXG4gICAgYXJ0aXN0aWMgOiAxLFxyXG4gICAgYXMgOiAxLFxyXG4gICAgQXNpYW4gOiAxLFxyXG4gICAgYXNpZGUgOiAxLFxyXG4gICAgYXNrIDogMSxcclxuICAgIGFzbGVlcCA6IDEsXHJcbiAgICBhc3BlY3QgOiAxLFxyXG4gICAgYXNzYXVsdCA6IDEsXHJcbiAgICBhc3NlcnQgOiAxLFxyXG4gICAgYXNzZXNzIDogMSxcclxuICAgIGFzc2Vzc21lbnQgOiAxLFxyXG4gICAgYXNzZXQgOiAxLFxyXG4gICAgYXNzaWduIDogMSxcclxuICAgIGFzc2lnbm1lbnQgOiAxLFxyXG4gICAgYXNzaXN0IDogMSxcclxuICAgIGFzc2lzdGFuY2UgOiAxLFxyXG4gICAgYXNzaXN0YW50IDogMSxcclxuICAgIGFzc29jaWF0ZSA6IDEsXHJcbiAgICBhc3NvY2lhdGlvbiA6IDEsXHJcbiAgICBhc3N1bWUgOiAxLFxyXG4gICAgYXNzdW1wdGlvbiA6IDEsXHJcbiAgICBhc3N1cmUgOiAxLFxyXG4gICAgYXQgOiAxLFxyXG4gICAgYXRobGV0ZSA6IDEsXHJcbiAgICBhdGhsZXRpYyA6IDEsXHJcbiAgICBhdG1vc3BoZXJlIDogMSxcclxuICAgIGF0dGFjaCA6IDEsXHJcbiAgICBhdHRhY2sgOiAxLFxyXG4gICAgYXR0ZW1wdCA6IDEsXHJcbiAgICBhdHRlbmQgOiAxLFxyXG4gICAgYXR0ZW50aW9uIDogMSxcclxuICAgIGF0dGl0dWRlIDogMSxcclxuICAgIGF0dG9ybmV5IDogMSxcclxuICAgIGF0dHJhY3QgOiAxLFxyXG4gICAgYXR0cmFjdGl2ZSA6IDEsXHJcbiAgICBhdHRyaWJ1dGUgOiAxLFxyXG4gICAgYXVkaWVuY2UgOiAxLFxyXG4gICAgYXV0aG9yIDogMSxcclxuICAgIGF1dGhvcml0eSA6IDEsXHJcbiAgICBhdXRvIDogMSxcclxuICAgIGF2YWlsYWJsZSA6IDEsXHJcbiAgICBhdmVyYWdlIDogMSxcclxuICAgIGF2b2lkIDogMSxcclxuICAgIGF3YXJkIDogMSxcclxuICAgIGF3YXJlIDogMSxcclxuICAgIGF3YXJlbmVzcyA6IDEsXHJcbiAgICBhd2F5IDogMSxcclxuICAgIGF3ZnVsIDogMSxcclxuICAgIGJhYnkgOiAxLFxyXG4gICAgYmFjayA6IDEsXHJcbiAgICBiYWNrZ3JvdW5kIDogMSxcclxuICAgIGJhZCA6IDEsXHJcbiAgICBiYWRseSA6IDEsXHJcbiAgICBiYWcgOiAxLFxyXG4gICAgYmFrZSA6IDEsXHJcbiAgICBiYWxhbmNlIDogMSxcclxuICAgIGJhbGwgOiAxLFxyXG4gICAgYmFuIDogMSxcclxuICAgIGJhbmQgOiAxLFxyXG4gICAgYmFuayA6IDEsXHJcbiAgICBiYXIgOiAxLFxyXG4gICAgYmFyZWx5IDogMSxcclxuICAgIGJhcnJlbCA6IDEsXHJcbiAgICBiYXJyaWVyIDogMSxcclxuICAgIGJhc2UgOiAxLFxyXG4gICAgYmFzZWJhbGwgOiAxLFxyXG4gICAgYmFzaWMgOiAxLFxyXG4gICAgYmFzaWNhbGx5IDogMSxcclxuICAgIGJhc2lzIDogMSxcclxuICAgIGJhc2tldCA6IDEsXHJcbiAgICBiYXNrZXRiYWxsIDogMSxcclxuICAgIGJhdGhyb29tIDogMSxcclxuICAgIGJhdHRlcnkgOiAxLFxyXG4gICAgYmF0dGxlIDogMSxcclxuICAgIGJlIDogMSxcclxuICAgIGJlYWNoIDogMSxcclxuICAgIGJlYW4gOiAxLFxyXG4gICAgYmVhciA6IDEsXHJcbiAgICBiZWF0IDogMSxcclxuICAgIGJlYXV0aWZ1bCA6IDEsXHJcbiAgICBiZWF1dHkgOiAxLFxyXG4gICAgYmVjYXVzZSA6IDEsXHJcbiAgICBiZWNvbWUgOiAxLFxyXG4gICAgYmVkIDogMSxcclxuICAgIGJlZHJvb20gOiAxLFxyXG4gICAgYmVlciA6IDEsXHJcbiAgICBiZWZvcmUgOiAxLFxyXG4gICAgYmVnaW4gOiAxLFxyXG4gICAgYmVnaW5uaW5nIDogMSxcclxuICAgIGJlaGF2aW9yIDogMSxcclxuICAgIGJlaGluZCA6IDEsXHJcbiAgICBiZWluZyA6IDEsXHJcbiAgICBiZWxpZWYgOiAxLFxyXG4gICAgYmVsaWV2ZSA6IDEsXHJcbiAgICBiZWxsIDogMSxcclxuICAgIGJlbG9uZyA6IDEsXHJcbiAgICBiZWxvdyA6IDEsXHJcbiAgICBiZWx0IDogMSxcclxuICAgIGJlbmNoIDogMSxcclxuICAgIGJlbmQgOiAxLFxyXG4gICAgYmVuZWF0aCA6IDEsXHJcbiAgICBiZW5lZml0IDogMSxcclxuICAgIGJlc2lkZSA6IDEsXHJcbiAgICBiZXNpZGVzIDogMSxcclxuICAgIGJlc3QgOiAxLFxyXG4gICAgYmV0IDogMSxcclxuICAgIGJldHRlciA6IDEsXHJcbiAgICBiZXR3ZWVuIDogMSxcclxuICAgIGJleW9uZCA6IDEsXHJcbiAgICBCaWJsZSA6IDEsXHJcbiAgICBiaWcgOiAxLFxyXG4gICAgYmlrZSA6IDEsXHJcbiAgICBiaWxsIDogMSxcclxuICAgIGJpbGxpb24gOiAxLFxyXG4gICAgYmluZCA6IDEsXHJcbiAgICBiaW9sb2dpY2FsIDogMSxcclxuICAgIGJpcmQgOiAxLFxyXG4gICAgYmlydGggOiAxLFxyXG4gICAgYmlydGhkYXkgOiAxLFxyXG4gICAgYml0IDogMSxcclxuICAgIGJpdGUgOiAxLFxyXG4gICAgYmxhY2sgOiAxLFxyXG4gICAgYmxhZGUgOiAxLFxyXG4gICAgYmxhbWUgOiAxLFxyXG4gICAgYmxhbmtldCA6IDEsXHJcbiAgICBibGluZCA6IDEsXHJcbiAgICBibG9jayA6IDEsXHJcbiAgICBibG9vZCA6IDEsXHJcbiAgICBibG93IDogMSxcclxuICAgIGJsdWUgOiAxLFxyXG4gICAgYm9hcmQgOiAxLFxyXG4gICAgYm9hdCA6IDEsXHJcbiAgICBib2R5IDogMSxcclxuICAgIGJvbWIgOiAxLFxyXG4gICAgYm9tYmluZyA6IDEsXHJcbiAgICBib25kIDogMSxcclxuICAgIGJvbmUgOiAxLFxyXG4gICAgYm9vayA6IDEsXHJcbiAgICBib29tIDogMSxcclxuICAgIGJvb3QgOiAxLFxyXG4gICAgYm9yZGVyIDogMSxcclxuICAgIGJvcm4gOiAxLFxyXG4gICAgYm9ycm93IDogMSxcclxuICAgIGJvc3MgOiAxLFxyXG4gICAgYm90aCA6IDEsXHJcbiAgICBib3RoZXIgOiAxLFxyXG4gICAgYm90dGxlIDogMSxcclxuICAgIGJvdHRvbSA6IDEsXHJcbiAgICBib3VuZGFyeSA6IDEsXHJcbiAgICBib3dsIDogMSxcclxuICAgIGJveCA6IDEsXHJcbiAgICBib3kgOiAxLFxyXG4gICAgYm95ZnJpZW5kIDogMSxcclxuICAgIGJyYWluIDogMSxcclxuICAgIGJyYW5jaCA6IDEsXHJcbiAgICBicmFuZCA6IDEsXHJcbiAgICBicmVhZCA6IDEsXHJcbiAgICBicmVhayA6IDEsXHJcbiAgICBicmVha2Zhc3QgOiAxLFxyXG4gICAgYnJlYXN0IDogMSxcclxuICAgIGJyZWF0aCA6IDEsXHJcbiAgICBicmVhdGhlIDogMSxcclxuICAgIGJyaWNrIDogMSxcclxuICAgIGJyaWRnZSA6IDEsXHJcbiAgICBicmllZiA6IDEsXHJcbiAgICBicmllZmx5IDogMSxcclxuICAgIGJyaWdodCA6IDEsXHJcbiAgICBicmlsbGlhbnQgOiAxLFxyXG4gICAgYnJpbmcgOiAxLFxyXG4gICAgQnJpdGlzaCA6IDEsXHJcbiAgICBicm9hZCA6IDEsXHJcbiAgICBicm9rZW4gOiAxLFxyXG4gICAgYnJvdGhlciA6IDEsXHJcbiAgICBicm93biA6IDEsXHJcbiAgICBicnVzaCA6IDEsXHJcbiAgICBidWNrIDogMSxcclxuICAgIGJ1ZGdldCA6IDEsXHJcbiAgICBidWlsZCA6IDEsXHJcbiAgICBidWlsZGluZyA6IDEsXHJcbiAgICBidWxsZXQgOiAxLFxyXG4gICAgYnVuY2ggOiAxLFxyXG4gICAgYnVyZGVuIDogMSxcclxuICAgIGJ1cm4gOiAxLFxyXG4gICAgYnVyeSA6IDEsXHJcbiAgICBidXMgOiAxLFxyXG4gICAgYnVzaW5lc3MgOiAxLFxyXG4gICAgYnVzeSA6IDEsXHJcbiAgICBidXQgOiAxLFxyXG4gICAgYnV0dGVyIDogMSxcclxuICAgIGJ1dHRvbiA6IDEsXHJcbiAgICBidXkgOiAxLFxyXG4gICAgYnV5ZXIgOiAxLFxyXG4gICAgYnkgOiAxLFxyXG4gICAgY2FiaW4gOiAxLFxyXG4gICAgY2FiaW5ldCA6IDEsXHJcbiAgICBjYWJsZSA6IDEsXHJcbiAgICBjYWtlIDogMSxcclxuICAgIGNhbGN1bGF0ZSA6IDEsXHJcbiAgICBjYWxsIDogMSxcclxuICAgIGNhbWVyYSA6IDEsXHJcbiAgICBjYW1wIDogMSxcclxuICAgIGNhbXBhaWduIDogMSxcclxuICAgIGNhbXB1cyA6IDEsXHJcbiAgICBjYW4gOiAxLFxyXG4gICAgQ2FuYWRpYW4gOiAxLFxyXG4gICAgY2FuY2VyIDogMSxcclxuICAgIGNhbmRpZGF0ZSA6IDEsXHJcbiAgICBjYXAgOiAxLFxyXG4gICAgY2FwYWJpbGl0eSA6IDEsXHJcbiAgICBjYXBhYmxlIDogMSxcclxuICAgIGNhcGFjaXR5IDogMSxcclxuICAgIGNhcGl0YWwgOiAxLFxyXG4gICAgY2FwdGFpbiA6IDEsXHJcbiAgICBjYXB0dXJlIDogMSxcclxuICAgIGNhciA6IDEsXHJcbiAgICBjYXJib24gOiAxLFxyXG4gICAgY2FyZCA6IDEsXHJcbiAgICBjYXJlIDogMSxcclxuICAgIGNhcmVlciA6IDEsXHJcbiAgICBjYXJlZnVsIDogMSxcclxuICAgIGNhcmVmdWxseSA6IDEsXHJcbiAgICBjYXJyaWVyIDogMSxcclxuICAgIGNhcnJ5IDogMSxcclxuICAgIGNhc2UgOiAxLFxyXG4gICAgY2FzaCA6IDEsXHJcbiAgICBjYXN0IDogMSxcclxuICAgIGNhdCA6IDEsXHJcbiAgICBjYXRjaCA6IDEsXHJcbiAgICBjYXRlZ29yeSA6IDEsXHJcbiAgICBDYXRob2xpYyA6IDEsXHJcbiAgICBjYXVzZSA6IDEsXHJcbiAgICBjZWlsaW5nIDogMSxcclxuICAgIGNlbGVicmF0ZSA6IDEsXHJcbiAgICBjZWxlYnJhdGlvbiA6IDEsXHJcbiAgICBjZWxlYnJpdHkgOiAxLFxyXG4gICAgY2VsbCA6IDEsXHJcbiAgICBjZW50ZXIgOiAxLFxyXG4gICAgY2VudHJhbCA6IDEsXHJcbiAgICBjZW50dXJ5IDogMSxcclxuICAgIENFTyA6IDEsXHJcbiAgICBjZXJlbW9ueSA6IDEsXHJcbiAgICBjZXJ0YWluIDogMSxcclxuICAgIGNlcnRhaW5seSA6IDEsXHJcbiAgICBjaGFpbiA6IDEsXHJcbiAgICBjaGFpciA6IDEsXHJcbiAgICBjaGFpcm1hbiA6IDEsXHJcbiAgICBjaGFsbGVuZ2UgOiAxLFxyXG4gICAgY2hhbWJlciA6IDEsXHJcbiAgICBjaGFtcGlvbiA6IDEsXHJcbiAgICBjaGFtcGlvbnNoaXAgOiAxLFxyXG4gICAgY2hhbmNlIDogMSxcclxuICAgIGNoYW5nZSA6IDEsXHJcbiAgICBjaGFuZ2luZyA6IDEsXHJcbiAgICBjaGFubmVsIDogMSxcclxuICAgIGNoYXB0ZXIgOiAxLFxyXG4gICAgY2hhcmFjdGVyIDogMSxcclxuICAgIGNoYXJhY3RlcmlzdGljIDogMSxcclxuICAgIGNoYXJhY3Rlcml6ZSA6IDEsXHJcbiAgICBjaGFyZ2UgOiAxLFxyXG4gICAgY2hhcml0eSA6IDEsXHJcbiAgICBjaGFydCA6IDEsXHJcbiAgICBjaGFzZSA6IDEsXHJcbiAgICBjaGVhcCA6IDEsXHJcbiAgICBjaGVjayA6IDEsXHJcbiAgICBjaGVlayA6IDEsXHJcbiAgICBjaGVlc2UgOiAxLFxyXG4gICAgY2hlZiA6IDEsXHJcbiAgICBjaGVtaWNhbCA6IDEsXHJcbiAgICBjaGVzdCA6IDEsXHJcbiAgICBjaGlja2VuIDogMSxcclxuICAgIGNoaWVmIDogMSxcclxuICAgIGNoaWxkIDogMSxcclxuICAgIGNoaWxkaG9vZCA6IDEsXHJcbiAgICBDaGluZXNlIDogMSxcclxuICAgIGNoaXAgOiAxLFxyXG4gICAgY2hvY29sYXRlIDogMSxcclxuICAgIGNob2ljZSA6IDEsXHJcbiAgICBjaG9sZXN0ZXJvbCA6IDEsXHJcbiAgICBjaG9vc2UgOiAxLFxyXG4gICAgQ2hyaXN0aWFuIDogMSxcclxuICAgIENocmlzdG1hcyA6IDEsXHJcbiAgICBjaHVyY2ggOiAxLFxyXG4gICAgY2lnYXJldHRlIDogMSxcclxuICAgIGNpcmNsZSA6IDEsXHJcbiAgICBjaXJjdW1zdGFuY2UgOiAxLFxyXG4gICAgY2l0ZSA6IDEsXHJcbiAgICBjaXRpemVuIDogMSxcclxuICAgIGNpdHkgOiAxLFxyXG4gICAgY2l2aWwgOiAxLFxyXG4gICAgY2l2aWxpYW4gOiAxLFxyXG4gICAgY2xhaW0gOiAxLFxyXG4gICAgY2xhc3MgOiAxLFxyXG4gICAgY2xhc3NpYyA6IDEsXHJcbiAgICBjbGFzc3Jvb20gOiAxLFxyXG4gICAgY2xlYW4gOiAxLFxyXG4gICAgY2xlYXIgOiAxLFxyXG4gICAgY2xlYXJseSA6IDEsXHJcbiAgICBjbGllbnQgOiAxLFxyXG4gICAgY2xpbWF0ZSA6IDEsXHJcbiAgICBjbGltYiA6IDEsXHJcbiAgICBjbGluaWMgOiAxLFxyXG4gICAgY2xpbmljYWwgOiAxLFxyXG4gICAgY2xvY2sgOiAxLFxyXG4gICAgY2xvc2UgOiAxLFxyXG4gICAgY2xvc2VseSA6IDEsXHJcbiAgICBjbG9zZXIgOiAxLFxyXG4gICAgY2xvdGhlcyA6IDEsXHJcbiAgICBjbG90aGluZyA6IDEsXHJcbiAgICBjbG91ZCA6IDEsXHJcbiAgICBjbHViIDogMSxcclxuICAgIGNsdWUgOiAxLFxyXG4gICAgY2x1c3RlciA6IDEsXHJcbiAgICBjb2FjaCA6IDEsXHJcbiAgICBjb2FsIDogMSxcclxuICAgIGNvYWxpdGlvbiA6IDEsXHJcbiAgICBjb2FzdCA6IDEsXHJcbiAgICBjb2F0IDogMSxcclxuICAgIGNvZGUgOiAxLFxyXG4gICAgY29mZmVlIDogMSxcclxuICAgIGNvZ25pdGl2ZSA6IDEsXHJcbiAgICBjb2xkIDogMSxcclxuICAgIGNvbGxhcHNlIDogMSxcclxuICAgIGNvbGxlYWd1ZSA6IDEsXHJcbiAgICBjb2xsZWN0IDogMSxcclxuICAgIGNvbGxlY3Rpb24gOiAxLFxyXG4gICAgY29sbGVjdGl2ZSA6IDEsXHJcbiAgICBjb2xsZWdlIDogMSxcclxuICAgIGNvbG9uaWFsIDogMSxcclxuICAgIGNvbG9yIDogMSxcclxuICAgIGNvbHVtbiA6IDEsXHJcbiAgICBjb21iaW5hdGlvbiA6IDEsXHJcbiAgICBjb21iaW5lIDogMSxcclxuICAgIGNvbWUgOiAxLFxyXG4gICAgY29tZWR5IDogMSxcclxuICAgIGNvbWZvcnQgOiAxLFxyXG4gICAgY29tZm9ydGFibGUgOiAxLFxyXG4gICAgY29tbWFuZCA6IDEsXHJcbiAgICBjb21tYW5kZXIgOiAxLFxyXG4gICAgY29tbWVudCA6IDEsXHJcbiAgICBjb21tZXJjaWFsIDogMSxcclxuICAgIGNvbW1pc3Npb24gOiAxLFxyXG4gICAgY29tbWl0IDogMSxcclxuICAgIGNvbW1pdG1lbnQgOiAxLFxyXG4gICAgY29tbWl0dGVlIDogMSxcclxuICAgIGNvbW1vbiA6IDEsXHJcbiAgICBjb21tdW5pY2F0ZSA6IDEsXHJcbiAgICBjb21tdW5pY2F0aW9uIDogMSxcclxuICAgIGNvbW11bml0eSA6IDEsXHJcbiAgICBjb21wYW55IDogMSxcclxuICAgIGNvbXBhcmUgOiAxLFxyXG4gICAgY29tcGFyaXNvbiA6IDEsXHJcbiAgICBjb21wZXRlIDogMSxcclxuICAgIGNvbXBldGl0aW9uIDogMSxcclxuICAgIGNvbXBldGl0aXZlIDogMSxcclxuICAgIGNvbXBldGl0b3IgOiAxLFxyXG4gICAgY29tcGxhaW4gOiAxLFxyXG4gICAgY29tcGxhaW50IDogMSxcclxuICAgIGNvbXBsZXRlIDogMSxcclxuICAgIGNvbXBsZXRlbHkgOiAxLFxyXG4gICAgY29tcGxleCA6IDEsXHJcbiAgICBjb21wbGljYXRlZCA6IDEsXHJcbiAgICBjb21wb25lbnQgOiAxLFxyXG4gICAgY29tcG9zZSA6IDEsXHJcbiAgICBjb21wb3NpdGlvbiA6IDEsXHJcbiAgICBjb21wcmVoZW5zaXZlIDogMSxcclxuICAgIGNvbXB1dGVyIDogMSxcclxuICAgIGNvbmNlbnRyYXRlIDogMSxcclxuICAgIGNvbmNlbnRyYXRpb24gOiAxLFxyXG4gICAgY29uY2VwdCA6IDEsXHJcbiAgICBjb25jZXJuIDogMSxcclxuICAgIGNvbmNlcm5lZCA6IDEsXHJcbiAgICBjb25jZXJ0IDogMSxcclxuICAgIGNvbmNsdWRlIDogMSxcclxuICAgIGNvbmNsdXNpb24gOiAxLFxyXG4gICAgY29uY3JldGUgOiAxLFxyXG4gICAgY29uZGl0aW9uIDogMSxcclxuICAgIGNvbmR1Y3QgOiAxLFxyXG4gICAgY29uZmVyZW5jZSA6IDEsXHJcbiAgICBjb25maWRlbmNlIDogMSxcclxuICAgIGNvbmZpZGVudCA6IDEsXHJcbiAgICBjb25maXJtIDogMSxcclxuICAgIGNvbmZsaWN0IDogMSxcclxuICAgIGNvbmZyb250IDogMSxcclxuICAgIGNvbmZ1c2lvbiA6IDEsXHJcbiAgICBDb25ncmVzcyA6IDEsXHJcbiAgICBjb25ncmVzc2lvbmFsIDogMSxcclxuICAgIGNvbm5lY3QgOiAxLFxyXG4gICAgY29ubmVjdGlvbiA6IDEsXHJcbiAgICBjb25zY2lvdXNuZXNzIDogMSxcclxuICAgIGNvbnNlbnN1cyA6IDEsXHJcbiAgICBjb25zZXF1ZW5jZSA6IDEsXHJcbiAgICBjb25zZXJ2YXRpdmUgOiAxLFxyXG4gICAgY29uc2lkZXIgOiAxLFxyXG4gICAgY29uc2lkZXJhYmxlIDogMSxcclxuICAgIGNvbnNpZGVyYXRpb24gOiAxLFxyXG4gICAgY29uc2lzdCA6IDEsXHJcbiAgICBjb25zaXN0ZW50IDogMSxcclxuICAgIGNvbnN0YW50IDogMSxcclxuICAgIGNvbnN0YW50bHkgOiAxLFxyXG4gICAgY29uc3RpdHV0ZSA6IDEsXHJcbiAgICBjb25zdGl0dXRpb25hbCA6IDEsXHJcbiAgICBjb25zdHJ1Y3QgOiAxLFxyXG4gICAgY29uc3RydWN0aW9uIDogMSxcclxuICAgIGNvbnN1bHRhbnQgOiAxLFxyXG4gICAgY29uc3VtZSA6IDEsXHJcbiAgICBjb25zdW1lciA6IDEsXHJcbiAgICBjb25zdW1wdGlvbiA6IDEsXHJcbiAgICBjb250YWN0IDogMSxcclxuICAgIGNvbnRhaW4gOiAxLFxyXG4gICAgY29udGFpbmVyIDogMSxcclxuICAgIGNvbnRlbXBvcmFyeSA6IDEsXHJcbiAgICBjb250ZW50IDogMSxcclxuICAgIGNvbnRlc3QgOiAxLFxyXG4gICAgY29udGV4dCA6IDEsXHJcbiAgICBjb250aW51ZSA6IDEsXHJcbiAgICBjb250aW51ZWQgOiAxLFxyXG4gICAgY29udHJhY3QgOiAxLFxyXG4gICAgY29udHJhc3QgOiAxLFxyXG4gICAgY29udHJpYnV0ZSA6IDEsXHJcbiAgICBjb250cmlidXRpb24gOiAxLFxyXG4gICAgY29udHJvbCA6IDEsXHJcbiAgICBjb250cm92ZXJzaWFsIDogMSxcclxuICAgIGNvbnRyb3ZlcnN5IDogMSxcclxuICAgIGNvbnZlbnRpb24gOiAxLFxyXG4gICAgY29udmVudGlvbmFsIDogMSxcclxuICAgIGNvbnZlcnNhdGlvbiA6IDEsXHJcbiAgICBjb252ZXJ0IDogMSxcclxuICAgIGNvbnZpY3Rpb24gOiAxLFxyXG4gICAgY29udmluY2UgOiAxLFxyXG4gICAgY29vayA6IDEsXHJcbiAgICBjb29raWUgOiAxLFxyXG4gICAgY29va2luZyA6IDEsXHJcbiAgICBjb29sIDogMSxcclxuICAgIGNvb3BlcmF0aW9uIDogMSxcclxuICAgIGNvcCA6IDEsXHJcbiAgICBjb3BlIDogMSxcclxuICAgIGNvcHkgOiAxLFxyXG4gICAgY29yZSA6IDEsXHJcbiAgICBjb3JuIDogMSxcclxuICAgIGNvcm5lciA6IDEsXHJcbiAgICBjb3Jwb3JhdGUgOiAxLFxyXG4gICAgY29ycG9yYXRpb24gOiAxLFxyXG4gICAgY29ycmVjdCA6IDEsXHJcbiAgICBjb3JyZXNwb25kZW50IDogMSxcclxuICAgIGNvc3QgOiAxLFxyXG4gICAgY290dG9uIDogMSxcclxuICAgIGNvdWNoIDogMSxcclxuICAgIGNvdWxkIDogMSxcclxuICAgIGNvdW5jaWwgOiAxLFxyXG4gICAgY291bnNlbG9yIDogMSxcclxuICAgIGNvdW50IDogMSxcclxuICAgIGNvdW50ZXIgOiAxLFxyXG4gICAgY291bnRyeSA6IDEsXHJcbiAgICBjb3VudHkgOiAxLFxyXG4gICAgY291cGxlIDogMSxcclxuICAgIGNvdXJhZ2UgOiAxLFxyXG4gICAgY291cnNlIDogMSxcclxuICAgIGNvdXJ0IDogMSxcclxuICAgIGNvdXNpbiA6IDEsXHJcbiAgICBjb3ZlciA6IDEsXHJcbiAgICBjb3ZlcmFnZSA6IDEsXHJcbiAgICBjb3cgOiAxLFxyXG4gICAgY3JhY2sgOiAxLFxyXG4gICAgY3JhZnQgOiAxLFxyXG4gICAgY3Jhc2ggOiAxLFxyXG4gICAgY3JhenkgOiAxLFxyXG4gICAgY3JlYW0gOiAxLFxyXG4gICAgY3JlYXRlIDogMSxcclxuICAgIGNyZWF0aW9uIDogMSxcclxuICAgIGNyZWF0aXZlIDogMSxcclxuICAgIGNyZWF0dXJlIDogMSxcclxuICAgIGNyZWRpdCA6IDEsXHJcbiAgICBjcmV3IDogMSxcclxuICAgIGNyaW1lIDogMSxcclxuICAgIGNyaW1pbmFsIDogMSxcclxuICAgIGNyaXNpcyA6IDEsXHJcbiAgICBjcml0ZXJpYSA6IDEsXHJcbiAgICBjcml0aWMgOiAxLFxyXG4gICAgY3JpdGljYWwgOiAxLFxyXG4gICAgY3JpdGljaXNtIDogMSxcclxuICAgIGNyaXRpY2l6ZSA6IDEsXHJcbiAgICBjcm9wIDogMSxcclxuICAgIGNyb3NzIDogMSxcclxuICAgIGNyb3dkIDogMSxcclxuICAgIGNydWNpYWwgOiAxLFxyXG4gICAgY3J5IDogMSxcclxuICAgIGN1bHR1cmFsIDogMSxcclxuICAgIGN1bHR1cmUgOiAxLFxyXG4gICAgY3VwIDogMSxcclxuICAgIGN1cmlvdXMgOiAxLFxyXG4gICAgY3VycmVudCA6IDEsXHJcbiAgICBjdXJyZW50bHkgOiAxLFxyXG4gICAgY3VycmljdWx1bSA6IDEsXHJcbiAgICBjdXN0b20gOiAxLFxyXG4gICAgY3VzdG9tZXIgOiAxLFxyXG4gICAgY3V0IDogMSxcclxuICAgIGN5Y2xlIDogMSxcclxuICAgIGRhZCA6IDEsXHJcbiAgICBkYWlseSA6IDEsXHJcbiAgICBkYW1hZ2UgOiAxLFxyXG4gICAgZGFuY2UgOiAxLFxyXG4gICAgZGFuZ2VyIDogMSxcclxuICAgIGRhbmdlcm91cyA6IDEsXHJcbiAgICBkYXJlIDogMSxcclxuICAgIGRhcmsgOiAxLFxyXG4gICAgZGFya25lc3MgOiAxLFxyXG4gICAgZGF0YSA6IDEsXHJcbiAgICBkYXRlIDogMSxcclxuICAgIGRhdWdodGVyIDogMSxcclxuICAgIGRheSA6IDEsXHJcbiAgICBkZWFkIDogMSxcclxuICAgIGRlYWwgOiAxLFxyXG4gICAgZGVhbGVyIDogMSxcclxuICAgIGRlYXIgOiAxLFxyXG4gICAgZGVhdGggOiAxLFxyXG4gICAgZGViYXRlIDogMSxcclxuICAgIGRlYnQgOiAxLFxyXG4gICAgZGVjYWRlIDogMSxcclxuICAgIGRlY2lkZSA6IDEsXHJcbiAgICBkZWNpc2lvbiA6IDEsXHJcbiAgICBkZWNrIDogMSxcclxuICAgIGRlY2xhcmUgOiAxLFxyXG4gICAgZGVjbGluZSA6IDEsXHJcbiAgICBkZWNyZWFzZSA6IDEsXHJcbiAgICBkZWVwIDogMSxcclxuICAgIGRlZXBseSA6IDEsXHJcbiAgICBkZWVyIDogMSxcclxuICAgIGRlZmVhdCA6IDEsXHJcbiAgICBkZWZlbmQgOiAxLFxyXG4gICAgZGVmZW5kYW50IDogMSxcclxuICAgIGRlZmVuc2UgOiAxLFxyXG4gICAgZGVmZW5zaXZlIDogMSxcclxuICAgIGRlZmljaXQgOiAxLFxyXG4gICAgZGVmaW5lIDogMSxcclxuICAgIGRlZmluaXRlbHkgOiAxLFxyXG4gICAgZGVmaW5pdGlvbiA6IDEsXHJcbiAgICBkZWdyZWUgOiAxLFxyXG4gICAgZGVsYXkgOiAxLFxyXG4gICAgZGVsaXZlciA6IDEsXHJcbiAgICBkZWxpdmVyeSA6IDEsXHJcbiAgICBkZW1hbmQgOiAxLFxyXG4gICAgZGVtb2NyYWN5IDogMSxcclxuICAgIERlbW9jcmF0IDogMSxcclxuICAgIGRlbW9jcmF0aWMgOiAxLFxyXG4gICAgZGVtb25zdHJhdGUgOiAxLFxyXG4gICAgZGVtb25zdHJhdGlvbiA6IDEsXHJcbiAgICBkZW55IDogMSxcclxuICAgIGRlcGFydG1lbnQgOiAxLFxyXG4gICAgZGVwZW5kIDogMSxcclxuICAgIGRlcGVuZGVudCA6IDEsXHJcbiAgICBkZXBlbmRpbmcgOiAxLFxyXG4gICAgZGVwaWN0IDogMSxcclxuICAgIGRlcHJlc3Npb24gOiAxLFxyXG4gICAgZGVwdGggOiAxLFxyXG4gICAgZGVwdXR5IDogMSxcclxuICAgIGRlcml2ZSA6IDEsXHJcbiAgICBkZXNjcmliZSA6IDEsXHJcbiAgICBkZXNjcmlwdGlvbiA6IDEsXHJcbiAgICBkZXNlcnQgOiAxLFxyXG4gICAgZGVzZXJ2ZSA6IDEsXHJcbiAgICBkZXNpZ24gOiAxLFxyXG4gICAgZGVzaWduZXIgOiAxLFxyXG4gICAgZGVzaXJlIDogMSxcclxuICAgIGRlc2sgOiAxLFxyXG4gICAgZGVzcGVyYXRlIDogMSxcclxuICAgIGRlc3BpdGUgOiAxLFxyXG4gICAgZGVzdHJveSA6IDEsXHJcbiAgICBkZXN0cnVjdGlvbiA6IDEsXHJcbiAgICBkZXRhaWwgOiAxLFxyXG4gICAgZGV0YWlsZWQgOiAxLFxyXG4gICAgZGV0ZWN0IDogMSxcclxuICAgIGRldGVybWluZSA6IDEsXHJcbiAgICBkZXZlbG9wIDogMSxcclxuICAgIGRldmVsb3BpbmcgOiAxLFxyXG4gICAgZGV2ZWxvcG1lbnQgOiAxLFxyXG4gICAgZGV2aWNlIDogMSxcclxuICAgIGRldm90ZSA6IDEsXHJcbiAgICBkaWFsb2d1ZSA6IDEsXHJcbiAgICBkaWUgOiAxLFxyXG4gICAgZGlldCA6IDEsXHJcbiAgICBkaWZmZXIgOiAxLFxyXG4gICAgZGlmZmVyZW5jZSA6IDEsXHJcbiAgICBkaWZmZXJlbnQgOiAxLFxyXG4gICAgZGlmZmVyZW50bHkgOiAxLFxyXG4gICAgZGlmZmljdWx0IDogMSxcclxuICAgIGRpZmZpY3VsdHkgOiAxLFxyXG4gICAgZGlnIDogMSxcclxuICAgIGRpZ2l0YWwgOiAxLFxyXG4gICAgZGltZW5zaW9uIDogMSxcclxuICAgIGRpbmluZyA6IDEsXHJcbiAgICBkaW5uZXIgOiAxLFxyXG4gICAgZGlyZWN0IDogMSxcclxuICAgIGRpcmVjdGlvbiA6IDEsXHJcbiAgICBkaXJlY3RseSA6IDEsXHJcbiAgICBkaXJlY3RvciA6IDEsXHJcbiAgICBkaXJ0IDogMSxcclxuICAgIGRpcnR5IDogMSxcclxuICAgIGRpc2FiaWxpdHkgOiAxLFxyXG4gICAgZGlzYWdyZWUgOiAxLFxyXG4gICAgZGlzYXBwZWFyIDogMSxcclxuICAgIGRpc2FzdGVyIDogMSxcclxuICAgIGRpc2NpcGxpbmUgOiAxLFxyXG4gICAgZGlzY291cnNlIDogMSxcclxuICAgIGRpc2NvdmVyIDogMSxcclxuICAgIGRpc2NvdmVyeSA6IDEsXHJcbiAgICBkaXNjcmltaW5hdGlvbiA6IDEsXHJcbiAgICBkaXNjdXNzIDogMSxcclxuICAgIGRpc2N1c3Npb24gOiAxLFxyXG4gICAgZGlzZWFzZSA6IDEsXHJcbiAgICBkaXNoIDogMSxcclxuICAgIGRpc21pc3MgOiAxLFxyXG4gICAgZGlzb3JkZXIgOiAxLFxyXG4gICAgZGlzcGxheSA6IDEsXHJcbiAgICBkaXNwdXRlIDogMSxcclxuICAgIGRpc3RhbmNlIDogMSxcclxuICAgIGRpc3RhbnQgOiAxLFxyXG4gICAgZGlzdGluY3QgOiAxLFxyXG4gICAgZGlzdGluY3Rpb24gOiAxLFxyXG4gICAgZGlzdGluZ3Vpc2ggOiAxLFxyXG4gICAgZGlzdHJpYnV0ZSA6IDEsXHJcbiAgICBkaXN0cmlidXRpb24gOiAxLFxyXG4gICAgZGlzdHJpY3QgOiAxLFxyXG4gICAgZGl2ZXJzZSA6IDEsXHJcbiAgICBkaXZlcnNpdHkgOiAxLFxyXG4gICAgZGl2aWRlIDogMSxcclxuICAgIGRpdmlzaW9uIDogMSxcclxuICAgIGRpdm9yY2UgOiAxLFxyXG4gICAgRE5BIDogMSxcclxuICAgIGRvIDogMSxcclxuICAgIGRvY3RvciA6IDEsXHJcbiAgICBkb2N1bWVudCA6IDEsXHJcbiAgICBkb2cgOiAxLFxyXG4gICAgZG9tZXN0aWMgOiAxLFxyXG4gICAgZG9taW5hbnQgOiAxLFxyXG4gICAgZG9taW5hdGUgOiAxLFxyXG4gICAgZG9vciA6IDEsXHJcbiAgICBkb3VibGUgOiAxLFxyXG4gICAgZG91YnQgOiAxLFxyXG4gICAgZG93biA6IDEsXHJcbiAgICBkb3dudG93biA6IDEsXHJcbiAgICBkb3plbiA6IDEsXHJcbiAgICBkcmFmdCA6IDEsXHJcbiAgICBkcmFnIDogMSxcclxuICAgIGRyYW1hIDogMSxcclxuICAgIGRyYW1hdGljIDogMSxcclxuICAgIGRyYW1hdGljYWxseSA6IDEsXHJcbiAgICBkcmF3IDogMSxcclxuICAgIGRyYXdpbmcgOiAxLFxyXG4gICAgZHJlYW0gOiAxLFxyXG4gICAgZHJlc3MgOiAxLFxyXG4gICAgZHJpbmsgOiAxLFxyXG4gICAgZHJpdmUgOiAxLFxyXG4gICAgZHJpdmVyIDogMSxcclxuICAgIGRyb3AgOiAxLFxyXG4gICAgZHJ1ZyA6IDEsXHJcbiAgICBkcnkgOiAxLFxyXG4gICAgZHVlIDogMSxcclxuICAgIGR1cmluZyA6IDEsXHJcbiAgICBkdXN0IDogMSxcclxuICAgIGR1dHkgOiAxLFxyXG4gICAgZWFjaCA6IDEsXHJcbiAgICBlYWdlciA6IDEsXHJcbiAgICBlYXIgOiAxLFxyXG4gICAgZWFybHkgOiAxLFxyXG4gICAgZWFybiA6IDEsXHJcbiAgICBlYXJuaW5ncyA6IDEsXHJcbiAgICBlYXJ0aCA6IDEsXHJcbiAgICBlYXNlIDogMSxcclxuICAgIGVhc2lseSA6IDEsXHJcbiAgICBlYXN0IDogMSxcclxuICAgIGVhc3Rlcm4gOiAxLFxyXG4gICAgZWFzeSA6IDEsXHJcbiAgICBlYXQgOiAxLFxyXG4gICAgZWNvbm9taWMgOiAxLFxyXG4gICAgZWNvbm9taWNzIDogMSxcclxuICAgIGVjb25vbWlzdCA6IDEsXHJcbiAgICBlY29ub215IDogMSxcclxuICAgIGVkZ2UgOiAxLFxyXG4gICAgZWRpdGlvbiA6IDEsXHJcbiAgICBlZGl0b3IgOiAxLFxyXG4gICAgZWR1Y2F0ZSA6IDEsXHJcbiAgICBlZHVjYXRpb24gOiAxLFxyXG4gICAgZWR1Y2F0aW9uYWwgOiAxLFxyXG4gICAgZWR1Y2F0b3IgOiAxLFxyXG4gICAgZWZmZWN0IDogMSxcclxuICAgIGVmZmVjdGl2ZSA6IDEsXHJcbiAgICBlZmZlY3RpdmVseSA6IDEsXHJcbiAgICBlZmZpY2llbmN5IDogMSxcclxuICAgIGVmZmljaWVudCA6IDEsXHJcbiAgICBlZmZvcnQgOiAxLFxyXG4gICAgZWdnIDogMSxcclxuICAgIGVpZ2h0IDogMSxcclxuICAgIGVpdGhlciA6IDEsXHJcbiAgICBlbGRlcmx5IDogMSxcclxuICAgIGVsZWN0IDogMSxcclxuICAgIGVsZWN0aW9uIDogMSxcclxuICAgIGVsZWN0cmljIDogMSxcclxuICAgIGVsZWN0cmljaXR5IDogMSxcclxuICAgIGVsZWN0cm9uaWMgOiAxLFxyXG4gICAgZWxlbWVudCA6IDEsXHJcbiAgICBlbGVtZW50YXJ5IDogMSxcclxuICAgIGVsaW1pbmF0ZSA6IDEsXHJcbiAgICBlbGl0ZSA6IDEsXHJcbiAgICBlbHNlIDogMSxcclxuICAgIGVsc2V3aGVyZSA6IDEsXHJcbiAgICBcImUtbWFpbFwiIDogMSxcclxuICAgIGVtYnJhY2UgOiAxLFxyXG4gICAgZW1lcmdlIDogMSxcclxuICAgIGVtZXJnZW5jeSA6IDEsXHJcbiAgICBlbWlzc2lvbiA6IDEsXHJcbiAgICBlbW90aW9uIDogMSxcclxuICAgIGVtb3Rpb25hbCA6IDEsXHJcbiAgICBlbXBoYXNpcyA6IDEsXHJcbiAgICBlbXBoYXNpemUgOiAxLFxyXG4gICAgZW1wbG95IDogMSxcclxuICAgIGVtcGxveWVlIDogMSxcclxuICAgIGVtcGxveWVyIDogMSxcclxuICAgIGVtcGxveW1lbnQgOiAxLFxyXG4gICAgZW1wdHkgOiAxLFxyXG4gICAgZW5hYmxlIDogMSxcclxuICAgIGVuY291bnRlciA6IDEsXHJcbiAgICBlbmNvdXJhZ2UgOiAxLFxyXG4gICAgZW5kIDogMSxcclxuICAgIGVuZW15IDogMSxcclxuICAgIGVuZXJneSA6IDEsXHJcbiAgICBlbmZvcmNlbWVudCA6IDEsXHJcbiAgICBlbmdhZ2UgOiAxLFxyXG4gICAgZW5naW5lIDogMSxcclxuICAgIGVuZ2luZWVyIDogMSxcclxuICAgIGVuZ2luZWVyaW5nIDogMSxcclxuICAgIEVuZ2xpc2ggOiAxLFxyXG4gICAgZW5oYW5jZSA6IDEsXHJcbiAgICBlbmpveSA6IDEsXHJcbiAgICBlbm9ybW91cyA6IDEsXHJcbiAgICBlbm91Z2ggOiAxLFxyXG4gICAgZW5zdXJlIDogMSxcclxuICAgIGVudGVyIDogMSxcclxuICAgIGVudGVycHJpc2UgOiAxLFxyXG4gICAgZW50ZXJ0YWlubWVudCA6IDEsXHJcbiAgICBlbnRpcmUgOiAxLFxyXG4gICAgZW50aXJlbHkgOiAxLFxyXG4gICAgZW50cmFuY2UgOiAxLFxyXG4gICAgZW50cnkgOiAxLFxyXG4gICAgZW52aXJvbm1lbnQgOiAxLFxyXG4gICAgZW52aXJvbm1lbnRhbCA6IDEsXHJcbiAgICBlcGlzb2RlIDogMSxcclxuICAgIGVxdWFsIDogMSxcclxuICAgIGVxdWFsbHkgOiAxLFxyXG4gICAgZXF1aXBtZW50IDogMSxcclxuICAgIGVyYSA6IDEsXHJcbiAgICBlcnJvciA6IDEsXHJcbiAgICBlc2NhcGUgOiAxLFxyXG4gICAgZXNwZWNpYWxseSA6IDEsXHJcbiAgICBlc3NheSA6IDEsXHJcbiAgICBlc3NlbnRpYWwgOiAxLFxyXG4gICAgZXNzZW50aWFsbHkgOiAxLFxyXG4gICAgZXN0YWJsaXNoIDogMSxcclxuICAgIGVzdGFibGlzaG1lbnQgOiAxLFxyXG4gICAgZXN0YXRlIDogMSxcclxuICAgIGVzdGltYXRlIDogMSxcclxuICAgIGV0YyA6IDEsXHJcbiAgICBldGhpY3MgOiAxLFxyXG4gICAgZXRobmljIDogMSxcclxuICAgIEV1cm9wZWFuIDogMSxcclxuICAgIGV2YWx1YXRlIDogMSxcclxuICAgIGV2YWx1YXRpb24gOiAxLFxyXG4gICAgZXZlbiA6IDEsXHJcbiAgICBldmVuaW5nIDogMSxcclxuICAgIGV2ZW50IDogMSxcclxuICAgIGV2ZW50dWFsbHkgOiAxLFxyXG4gICAgZXZlciA6IDEsXHJcbiAgICBldmVyeSA6IDEsXHJcbiAgICBldmVyeWJvZHkgOiAxLFxyXG4gICAgZXZlcnlkYXkgOiAxLFxyXG4gICAgZXZlcnlvbmUgOiAxLFxyXG4gICAgZXZlcnl0aGluZyA6IDEsXHJcbiAgICBldmVyeXdoZXJlIDogMSxcclxuICAgIGV2aWRlbmNlIDogMSxcclxuICAgIGV2b2x1dGlvbiA6IDEsXHJcbiAgICBldm9sdmUgOiAxLFxyXG4gICAgZXhhY3QgOiAxLFxyXG4gICAgZXhhY3RseSA6IDEsXHJcbiAgICBleGFtaW5hdGlvbiA6IDEsXHJcbiAgICBleGFtaW5lIDogMSxcclxuICAgIGV4YW1wbGUgOiAxLFxyXG4gICAgZXhjZWVkIDogMSxcclxuICAgIGV4Y2VsbGVudCA6IDEsXHJcbiAgICBleGNlcHQgOiAxLFxyXG4gICAgZXhjZXB0aW9uIDogMSxcclxuICAgIGV4Y2hhbmdlIDogMSxcclxuICAgIGV4Y2l0aW5nIDogMSxcclxuICAgIGV4ZWN1dGl2ZSA6IDEsXHJcbiAgICBleGVyY2lzZSA6IDEsXHJcbiAgICBleGhpYml0IDogMSxcclxuICAgIGV4aGliaXRpb24gOiAxLFxyXG4gICAgZXhpc3QgOiAxLFxyXG4gICAgZXhpc3RlbmNlIDogMSxcclxuICAgIGV4aXN0aW5nIDogMSxcclxuICAgIGV4cGFuZCA6IDEsXHJcbiAgICBleHBhbnNpb24gOiAxLFxyXG4gICAgZXhwZWN0IDogMSxcclxuICAgIGV4cGVjdGF0aW9uIDogMSxcclxuICAgIGV4cGVuc2UgOiAxLFxyXG4gICAgZXhwZW5zaXZlIDogMSxcclxuICAgIGV4cGVyaWVuY2UgOiAxLFxyXG4gICAgZXhwZXJpbWVudCA6IDEsXHJcbiAgICBleHBlcnQgOiAxLFxyXG4gICAgZXhwbGFpbiA6IDEsXHJcbiAgICBleHBsYW5hdGlvbiA6IDEsXHJcbiAgICBleHBsb2RlIDogMSxcclxuICAgIGV4cGxvcmUgOiAxLFxyXG4gICAgZXhwbG9zaW9uIDogMSxcclxuICAgIGV4cG9zZSA6IDEsXHJcbiAgICBleHBvc3VyZSA6IDEsXHJcbiAgICBleHByZXNzIDogMSxcclxuICAgIGV4cHJlc3Npb24gOiAxLFxyXG4gICAgZXh0ZW5kIDogMSxcclxuICAgIGV4dGVuc2lvbiA6IDEsXHJcbiAgICBleHRlbnNpdmUgOiAxLFxyXG4gICAgZXh0ZW50IDogMSxcclxuICAgIGV4dGVybmFsIDogMSxcclxuICAgIGV4dHJhIDogMSxcclxuICAgIGV4dHJhb3JkaW5hcnkgOiAxLFxyXG4gICAgZXh0cmVtZSA6IDEsXHJcbiAgICBleHRyZW1lbHkgOiAxLFxyXG4gICAgZXllIDogMSxcclxuICAgIGZhYnJpYyA6IDEsXHJcbiAgICBmYWNlIDogMSxcclxuICAgIGZhY2lsaXR5IDogMSxcclxuICAgIGZhY3QgOiAxLFxyXG4gICAgZmFjdG9yIDogMSxcclxuICAgIGZhY3RvcnkgOiAxLFxyXG4gICAgZmFjdWx0eSA6IDEsXHJcbiAgICBmYWRlIDogMSxcclxuICAgIGZhaWwgOiAxLFxyXG4gICAgZmFpbHVyZSA6IDEsXHJcbiAgICBmYWlyIDogMSxcclxuICAgIGZhaXJseSA6IDEsXHJcbiAgICBmYWl0aCA6IDEsXHJcbiAgICBmYWxsIDogMSxcclxuICAgIGZhbHNlIDogMSxcclxuICAgIGZhbWlsaWFyIDogMSxcclxuICAgIGZhbWlseSA6IDEsXHJcbiAgICBmYW1vdXMgOiAxLFxyXG4gICAgZmFuIDogMSxcclxuICAgIGZhbnRhc3kgOiAxLFxyXG4gICAgZmFyIDogMSxcclxuICAgIGZhcm0gOiAxLFxyXG4gICAgZmFybWVyIDogMSxcclxuICAgIGZhc2hpb24gOiAxLFxyXG4gICAgZmFzdCA6IDEsXHJcbiAgICBmYXQgOiAxLFxyXG4gICAgZmF0ZSA6IDEsXHJcbiAgICBmYXRoZXIgOiAxLFxyXG4gICAgZmF1bHQgOiAxLFxyXG4gICAgZmF2b3IgOiAxLFxyXG4gICAgZmF2b3JpdGUgOiAxLFxyXG4gICAgZmVhciA6IDEsXHJcbiAgICBmZWF0dXJlIDogMSxcclxuICAgIGZlZGVyYWwgOiAxLFxyXG4gICAgZmVlIDogMSxcclxuICAgIGZlZWQgOiAxLFxyXG4gICAgZmVlbCA6IDEsXHJcbiAgICBmZWVsaW5nIDogMSxcclxuICAgIGZlbGxvdyA6IDEsXHJcbiAgICBmZW1hbGUgOiAxLFxyXG4gICAgZmVuY2UgOiAxLFxyXG4gICAgZmV3IDogMSxcclxuICAgIGZld2VyIDogMSxcclxuICAgIGZpYmVyIDogMSxcclxuICAgIGZpY3Rpb24gOiAxLFxyXG4gICAgZmllbGQgOiAxLFxyXG4gICAgZmlmdGVlbiA6IDEsXHJcbiAgICBmaWZ0aCA6IDEsXHJcbiAgICBmaWZ0eSA6IDEsXHJcbiAgICBmaWdodCA6IDEsXHJcbiAgICBmaWdodGVyIDogMSxcclxuICAgIGZpZ2h0aW5nIDogMSxcclxuICAgIGZpZ3VyZSA6IDEsXHJcbiAgICBmaWxlIDogMSxcclxuICAgIGZpbGwgOiAxLFxyXG4gICAgZmlsbSA6IDEsXHJcbiAgICBmaW5hbCA6IDEsXHJcbiAgICBmaW5hbGx5IDogMSxcclxuICAgIGZpbmFuY2UgOiAxLFxyXG4gICAgZmluYW5jaWFsIDogMSxcclxuICAgIGZpbmQgOiAxLFxyXG4gICAgZmluZGluZyA6IDEsXHJcbiAgICBmaW5lIDogMSxcclxuICAgIGZpbmdlciA6IDEsXHJcbiAgICBmaW5pc2ggOiAxLFxyXG4gICAgZmlyZSA6IDEsXHJcbiAgICBmaXJtIDogMSxcclxuICAgIGZpcnN0IDogMSxcclxuICAgIGZpc2ggOiAxLFxyXG4gICAgZmlzaGluZyA6IDEsXHJcbiAgICBmaXQgOiAxLFxyXG4gICAgZml0bmVzcyA6IDEsXHJcbiAgICBmaXZlIDogMSxcclxuICAgIGZpeCA6IDEsXHJcbiAgICBmbGFnIDogMSxcclxuICAgIGZsYW1lIDogMSxcclxuICAgIGZsYXQgOiAxLFxyXG4gICAgZmxhdm9yIDogMSxcclxuICAgIGZsZWUgOiAxLFxyXG4gICAgZmxlc2ggOiAxLFxyXG4gICAgZmxpZ2h0IDogMSxcclxuICAgIGZsb2F0IDogMSxcclxuICAgIGZsb29yIDogMSxcclxuICAgIGZsb3cgOiAxLFxyXG4gICAgZmxvd2VyIDogMSxcclxuICAgIGZseSA6IDEsXHJcbiAgICBmb2N1cyA6IDEsXHJcbiAgICBmb2xrIDogMSxcclxuICAgIGZvbGxvdyA6IDEsXHJcbiAgICBmb2xsb3dpbmcgOiAxLFxyXG4gICAgZm9vZCA6IDEsXHJcbiAgICBmb290IDogMSxcclxuICAgIGZvb3RiYWxsIDogMSxcclxuICAgIGZvciA6IDEsXHJcbiAgICBmb3JjZSA6IDEsXHJcbiAgICBmb3JlaWduIDogMSxcclxuICAgIGZvcmVzdCA6IDEsXHJcbiAgICBmb3JldmVyIDogMSxcclxuICAgIGZvcmdldCA6IDEsXHJcbiAgICBmb3JtIDogMSxcclxuICAgIGZvcm1hbCA6IDEsXHJcbiAgICBmb3JtYXRpb24gOiAxLFxyXG4gICAgZm9ybWVyIDogMSxcclxuICAgIGZvcm11bGEgOiAxLFxyXG4gICAgZm9ydGggOiAxLFxyXG4gICAgZm9ydHVuZSA6IDEsXHJcbiAgICBmb3J3YXJkIDogMSxcclxuICAgIGZvdW5kIDogMSxcclxuICAgIGZvdW5kYXRpb24gOiAxLFxyXG4gICAgZm91bmRlciA6IDEsXHJcbiAgICBmb3VyIDogMSxcclxuICAgIGZvdXJ0aCA6IDEsXHJcbiAgICBmcmFtZSA6IDEsXHJcbiAgICBmcmFtZXdvcmsgOiAxLFxyXG4gICAgZnJlZSA6IDEsXHJcbiAgICBmcmVlZG9tIDogMSxcclxuICAgIGZyZWV6ZSA6IDEsXHJcbiAgICBGcmVuY2ggOiAxLFxyXG4gICAgZnJlcXVlbmN5IDogMSxcclxuICAgIGZyZXF1ZW50IDogMSxcclxuICAgIGZyZXF1ZW50bHkgOiAxLFxyXG4gICAgZnJlc2ggOiAxLFxyXG4gICAgZnJpZW5kIDogMSxcclxuICAgIGZyaWVuZGx5IDogMSxcclxuICAgIGZyaWVuZHNoaXAgOiAxLFxyXG4gICAgZnJvbSA6IDEsXHJcbiAgICBmcm9udCA6IDEsXHJcbiAgICBmcnVpdCA6IDEsXHJcbiAgICBmcnVzdHJhdGlvbiA6IDEsXHJcbiAgICBmdWVsIDogMSxcclxuICAgIGZ1bGwgOiAxLFxyXG4gICAgZnVsbHkgOiAxLFxyXG4gICAgZnVuIDogMSxcclxuICAgIGZ1bmN0aW9uIDogMSxcclxuICAgIGZ1bmQgOiAxLFxyXG4gICAgZnVuZGFtZW50YWwgOiAxLFxyXG4gICAgZnVuZGluZyA6IDEsXHJcbiAgICBmdW5lcmFsIDogMSxcclxuICAgIGZ1bm55IDogMSxcclxuICAgIGZ1cm5pdHVyZSA6IDEsXHJcbiAgICBmdXJ0aGVybW9yZSA6IDEsXHJcbiAgICBmdXR1cmUgOiAxLFxyXG4gICAgZ2FpbiA6IDEsXHJcbiAgICBnYWxheHkgOiAxLFxyXG4gICAgZ2FsbGVyeSA6IDEsXHJcbiAgICBnYW1lIDogMSxcclxuICAgIGdhbmcgOiAxLFxyXG4gICAgZ2FwIDogMSxcclxuICAgIGdhcmFnZSA6IDEsXHJcbiAgICBnYXJkZW4gOiAxLFxyXG4gICAgZ2FybGljIDogMSxcclxuICAgIGdhcyA6IDEsXHJcbiAgICBnYXRlIDogMSxcclxuICAgIGdhdGhlciA6IDEsXHJcbiAgICBnYXkgOiAxLFxyXG4gICAgZ2F6ZSA6IDEsXHJcbiAgICBnZWFyIDogMSxcclxuICAgIGdlbmRlciA6IDEsXHJcbiAgICBnZW5lIDogMSxcclxuICAgIGdlbmVyYWwgOiAxLFxyXG4gICAgZ2VuZXJhbGx5IDogMSxcclxuICAgIGdlbmVyYXRlIDogMSxcclxuICAgIGdlbmVyYXRpb24gOiAxLFxyXG4gICAgZ2VuZXRpYyA6IDEsXHJcbiAgICBnZW50bGVtYW4gOiAxLFxyXG4gICAgZ2VudGx5IDogMSxcclxuICAgIEdlcm1hbiA6IDEsXHJcbiAgICBnZXN0dXJlIDogMSxcclxuICAgIGdldCA6IDEsXHJcbiAgICBnaG9zdCA6IDEsXHJcbiAgICBnaWFudCA6IDEsXHJcbiAgICBnaWZ0IDogMSxcclxuICAgIGdpZnRlZCA6IDEsXHJcbiAgICBnaXJsIDogMSxcclxuICAgIGdpcmxmcmllbmQgOiAxLFxyXG4gICAgZ2l2ZSA6IDEsXHJcbiAgICBnaXZlbiA6IDEsXHJcbiAgICBnbGFkIDogMSxcclxuICAgIGdsYW5jZSA6IDEsXHJcbiAgICBnbGFzcyA6IDEsXHJcbiAgICBnbG9iYWwgOiAxLFxyXG4gICAgZ2xvdmUgOiAxLFxyXG4gICAgZ28gOiAxLFxyXG4gICAgZ29hbCA6IDEsXHJcbiAgICBHb2QgOiAxLFxyXG4gICAgZ29sZCA6IDEsXHJcbiAgICBnb2xkZW4gOiAxLFxyXG4gICAgZ29sZiA6IDEsXHJcbiAgICBnb29kIDogMSxcclxuICAgIGdvdmVybm1lbnQgOiAxLFxyXG4gICAgZ292ZXJub3IgOiAxLFxyXG4gICAgZ3JhYiA6IDEsXHJcbiAgICBncmFkZSA6IDEsXHJcbiAgICBncmFkdWFsbHkgOiAxLFxyXG4gICAgZ3JhZHVhdGUgOiAxLFxyXG4gICAgZ3JhaW4gOiAxLFxyXG4gICAgZ3JhbmQgOiAxLFxyXG4gICAgZ3JhbmRmYXRoZXIgOiAxLFxyXG4gICAgZ3JhbmRtb3RoZXIgOiAxLFxyXG4gICAgZ3JhbnQgOiAxLFxyXG4gICAgZ3Jhc3MgOiAxLFxyXG4gICAgZ3JhdmUgOiAxLFxyXG4gICAgZ3JheSA6IDEsXHJcbiAgICBncmVhdCA6IDEsXHJcbiAgICBncmVhdGVzdCA6IDEsXHJcbiAgICBncmVlbiA6IDEsXHJcbiAgICBncm9jZXJ5IDogMSxcclxuICAgIGdyb3VuZCA6IDEsXHJcbiAgICBncm91cCA6IDEsXHJcbiAgICBncm93IDogMSxcclxuICAgIGdyb3dpbmcgOiAxLFxyXG4gICAgZ3Jvd3RoIDogMSxcclxuICAgIGd1YXJhbnRlZSA6IDEsXHJcbiAgICBndWFyZCA6IDEsXHJcbiAgICBndWVzcyA6IDEsXHJcbiAgICBndWVzdCA6IDEsXHJcbiAgICBndWlkZSA6IDEsXHJcbiAgICBndWlkZWxpbmUgOiAxLFxyXG4gICAgZ3VpbHR5IDogMSxcclxuICAgIGd1biA6IDEsXHJcbiAgICBndXkgOiAxLFxyXG4gICAgaGFiaXQgOiAxLFxyXG4gICAgaGFiaXRhdCA6IDEsXHJcbiAgICBoYWlyIDogMSxcclxuICAgIGhhbGYgOiAxLFxyXG4gICAgaGFsbCA6IDEsXHJcbiAgICBoYW5kIDogMSxcclxuICAgIGhhbmRmdWwgOiAxLFxyXG4gICAgaGFuZGxlIDogMSxcclxuICAgIGhhbmcgOiAxLFxyXG4gICAgaGFwcGVuIDogMSxcclxuICAgIGhhcHB5IDogMSxcclxuICAgIGhhcmQgOiAxLFxyXG4gICAgaGFyZGx5IDogMSxcclxuICAgIGhhdCA6IDEsXHJcbiAgICBoYXRlIDogMSxcclxuICAgIGhhdmUgOiAxLFxyXG4gICAgaGUgOiAxLFxyXG4gICAgaGVhZCA6IDEsXHJcbiAgICBoZWFkbGluZSA6IDEsXHJcbiAgICBoZWFkcXVhcnRlcnMgOiAxLFxyXG4gICAgaGVhbHRoIDogMSxcclxuICAgIGhlYWx0aHkgOiAxLFxyXG4gICAgaGVhciA6IDEsXHJcbiAgICBoZWFyaW5nIDogMSxcclxuICAgIGhlYXJ0IDogMSxcclxuICAgIGhlYXQgOiAxLFxyXG4gICAgaGVhdmVuIDogMSxcclxuICAgIGhlYXZpbHkgOiAxLFxyXG4gICAgaGVhdnkgOiAxLFxyXG4gICAgaGVlbCA6IDEsXHJcbiAgICBoZWlnaHQgOiAxLFxyXG4gICAgaGVsaWNvcHRlciA6IDEsXHJcbiAgICBoZWxsIDogMSxcclxuICAgIGhlbGxvIDogMSxcclxuICAgIGhlbHAgOiAxLFxyXG4gICAgaGVscGZ1bCA6IDEsXHJcbiAgICBoZXIgOiAxLFxyXG4gICAgaGVyZSA6IDEsXHJcbiAgICBoZXJpdGFnZSA6IDEsXHJcbiAgICBoZXJvIDogMSxcclxuICAgIGhlcnNlbGYgOiAxLFxyXG4gICAgaGV5IDogMSxcclxuICAgIGhpIDogMSxcclxuICAgIGhpZGUgOiAxLFxyXG4gICAgaGlnaCA6IDEsXHJcbiAgICBoaWdobGlnaHQgOiAxLFxyXG4gICAgaGlnaGx5IDogMSxcclxuICAgIGhpZ2h3YXkgOiAxLFxyXG4gICAgaGlsbCA6IDEsXHJcbiAgICBoaW0gOiAxLFxyXG4gICAgaGltc2VsZiA6IDEsXHJcbiAgICBoaXAgOiAxLFxyXG4gICAgaGlyZSA6IDEsXHJcbiAgICBoaXMgOiAxLFxyXG4gICAgaGlzdG9yaWFuIDogMSxcclxuICAgIGhpc3RvcmljIDogMSxcclxuICAgIGhpc3RvcmljYWwgOiAxLFxyXG4gICAgaGlzdG9yeSA6IDEsXHJcbiAgICBoaXQgOiAxLFxyXG4gICAgaG9sZCA6IDEsXHJcbiAgICBob2xlIDogMSxcclxuICAgIGhvbGlkYXkgOiAxLFxyXG4gICAgaG9seSA6IDEsXHJcbiAgICBob21lIDogMSxcclxuICAgIGhvbWVsZXNzIDogMSxcclxuICAgIGhvbmVzdCA6IDEsXHJcbiAgICBob25leSA6IDEsXHJcbiAgICBob25vciA6IDEsXHJcbiAgICBob3BlIDogMSxcclxuICAgIGhvcml6b24gOiAxLFxyXG4gICAgaG9ycm9yIDogMSxcclxuICAgIGhvcnNlIDogMSxcclxuICAgIGhvc3BpdGFsIDogMSxcclxuICAgIGhvc3QgOiAxLFxyXG4gICAgaG90IDogMSxcclxuICAgIGhvdGVsIDogMSxcclxuICAgIGhvdXIgOiAxLFxyXG4gICAgaG91c2UgOiAxLFxyXG4gICAgaG91c2Vob2xkIDogMSxcclxuICAgIGhvdXNpbmcgOiAxLFxyXG4gICAgaG93IDogMSxcclxuICAgIGhvd2V2ZXIgOiAxLFxyXG4gICAgaHVnZSA6IDEsXHJcbiAgICBodW1hbiA6IDEsXHJcbiAgICBodW1vciA6IDEsXHJcbiAgICBodW5kcmVkIDogMSxcclxuICAgIGh1bmdyeSA6IDEsXHJcbiAgICBodW50ZXIgOiAxLFxyXG4gICAgaHVudGluZyA6IDEsXHJcbiAgICBodXJ0IDogMSxcclxuICAgIGh1c2JhbmQgOiAxLFxyXG4gICAgaHlwb3RoZXNpcyA6IDEsXHJcbiAgICBJIDogMSxcclxuICAgIGljZSA6IDEsXHJcbiAgICBpZGVhIDogMSxcclxuICAgIGlkZWFsIDogMSxcclxuICAgIGlkZW50aWZpY2F0aW9uIDogMSxcclxuICAgIGlkZW50aWZ5IDogMSxcclxuICAgIGlkZW50aXR5IDogMSxcclxuICAgIGllIDogMSxcclxuICAgIGlmIDogMSxcclxuICAgIGlnbm9yZSA6IDEsXHJcbiAgICBpbGwgOiAxLFxyXG4gICAgaWxsZWdhbCA6IDEsXHJcbiAgICBpbGxuZXNzIDogMSxcclxuICAgIGlsbHVzdHJhdGUgOiAxLFxyXG4gICAgaW1hZ2UgOiAxLFxyXG4gICAgaW1hZ2luYXRpb24gOiAxLFxyXG4gICAgaW1hZ2luZSA6IDEsXHJcbiAgICBpbW1lZGlhdGUgOiAxLFxyXG4gICAgaW1tZWRpYXRlbHkgOiAxLFxyXG4gICAgaW1taWdyYW50IDogMSxcclxuICAgIGltbWlncmF0aW9uIDogMSxcclxuICAgIGltcGFjdCA6IDEsXHJcbiAgICBpbXBsZW1lbnQgOiAxLFxyXG4gICAgaW1wbGljYXRpb24gOiAxLFxyXG4gICAgaW1wbHkgOiAxLFxyXG4gICAgaW1wb3J0YW5jZSA6IDEsXHJcbiAgICBpbXBvcnRhbnQgOiAxLFxyXG4gICAgaW1wb3NlIDogMSxcclxuICAgIGltcG9zc2libGUgOiAxLFxyXG4gICAgaW1wcmVzcyA6IDEsXHJcbiAgICBpbXByZXNzaW9uIDogMSxcclxuICAgIGltcHJlc3NpdmUgOiAxLFxyXG4gICAgaW1wcm92ZSA6IDEsXHJcbiAgICBpbXByb3ZlbWVudCA6IDEsXHJcbiAgICBpbiA6IDEsXHJcbiAgICBpbmNlbnRpdmUgOiAxLFxyXG4gICAgaW5jaWRlbnQgOiAxLFxyXG4gICAgaW5jbHVkZSA6IDEsXHJcbiAgICBpbmNsdWRpbmcgOiAxLFxyXG4gICAgaW5jb21lIDogMSxcclxuICAgIGluY29ycG9yYXRlIDogMSxcclxuICAgIGluY3JlYXNlIDogMSxcclxuICAgIGluY3JlYXNlZCA6IDEsXHJcbiAgICBpbmNyZWFzaW5nIDogMSxcclxuICAgIGluY3JlYXNpbmdseSA6IDEsXHJcbiAgICBpbmNyZWRpYmxlIDogMSxcclxuICAgIGluZGVlZCA6IDEsXHJcbiAgICBpbmRlcGVuZGVuY2UgOiAxLFxyXG4gICAgaW5kZXBlbmRlbnQgOiAxLFxyXG4gICAgaW5kZXggOiAxLFxyXG4gICAgSW5kaWFuIDogMSxcclxuICAgIGluZGljYXRlIDogMSxcclxuICAgIGluZGljYXRpb24gOiAxLFxyXG4gICAgaW5kaXZpZHVhbCA6IDEsXHJcbiAgICBpbmR1c3RyaWFsIDogMSxcclxuICAgIGluZHVzdHJ5IDogMSxcclxuICAgIGluZmFudCA6IDEsXHJcbiAgICBpbmZlY3Rpb24gOiAxLFxyXG4gICAgaW5mbGF0aW9uIDogMSxcclxuICAgIGluZmx1ZW5jZSA6IDEsXHJcbiAgICBpbmZvcm0gOiAxLFxyXG4gICAgaW5mb3JtYXRpb24gOiAxLFxyXG4gICAgaW5ncmVkaWVudCA6IDEsXHJcbiAgICBpbml0aWFsIDogMSxcclxuICAgIGluaXRpYWxseSA6IDEsXHJcbiAgICBpbml0aWF0aXZlIDogMSxcclxuICAgIGluanVyeSA6IDEsXHJcbiAgICBpbm5lciA6IDEsXHJcbiAgICBpbm5vY2VudCA6IDEsXHJcbiAgICBpbnF1aXJ5IDogMSxcclxuICAgIGluc2lkZSA6IDEsXHJcbiAgICBpbnNpZ2h0IDogMSxcclxuICAgIGluc2lzdCA6IDEsXHJcbiAgICBpbnNwaXJlIDogMSxcclxuICAgIGluc3RhbGwgOiAxLFxyXG4gICAgaW5zdGFuY2UgOiAxLFxyXG4gICAgaW5zdGVhZCA6IDEsXHJcbiAgICBpbnN0aXR1dGlvbiA6IDEsXHJcbiAgICBpbnN0aXR1dGlvbmFsIDogMSxcclxuICAgIGluc3RydWN0aW9uIDogMSxcclxuICAgIGluc3RydWN0b3IgOiAxLFxyXG4gICAgaW5zdHJ1bWVudCA6IDEsXHJcbiAgICBpbnN1cmFuY2UgOiAxLFxyXG4gICAgaW50ZWxsZWN0dWFsIDogMSxcclxuICAgIGludGVsbGlnZW5jZSA6IDEsXHJcbiAgICBpbnRlbmQgOiAxLFxyXG4gICAgaW50ZW5zZSA6IDEsXHJcbiAgICBpbnRlbnNpdHkgOiAxLFxyXG4gICAgaW50ZW50aW9uIDogMSxcclxuICAgIGludGVyYWN0aW9uIDogMSxcclxuICAgIGludGVyZXN0IDogMSxcclxuICAgIGludGVyZXN0ZWQgOiAxLFxyXG4gICAgaW50ZXJlc3RpbmcgOiAxLFxyXG4gICAgaW50ZXJuYWwgOiAxLFxyXG4gICAgaW50ZXJuYXRpb25hbCA6IDEsXHJcbiAgICBJbnRlcm5ldCA6IDEsXHJcbiAgICBpbnRlcnByZXQgOiAxLFxyXG4gICAgaW50ZXJwcmV0YXRpb24gOiAxLFxyXG4gICAgaW50ZXJ2ZW50aW9uIDogMSxcclxuICAgIGludGVydmlldyA6IDEsXHJcbiAgICBpbnRvIDogMSxcclxuICAgIGludHJvZHVjZSA6IDEsXHJcbiAgICBpbnRyb2R1Y3Rpb24gOiAxLFxyXG4gICAgaW52YXNpb24gOiAxLFxyXG4gICAgaW52ZXN0IDogMSxcclxuICAgIGludmVzdGlnYXRlIDogMSxcclxuICAgIGludmVzdGlnYXRpb24gOiAxLFxyXG4gICAgaW52ZXN0aWdhdG9yIDogMSxcclxuICAgIGludmVzdG1lbnQgOiAxLFxyXG4gICAgaW52ZXN0b3IgOiAxLFxyXG4gICAgaW52aXRlIDogMSxcclxuICAgIGludm9sdmUgOiAxLFxyXG4gICAgaW52b2x2ZWQgOiAxLFxyXG4gICAgaW52b2x2ZW1lbnQgOiAxLFxyXG4gICAgSXJhcWkgOiAxLFxyXG4gICAgSXJpc2ggOiAxLFxyXG4gICAgaXJvbiA6IDEsXHJcbiAgICBJc2xhbWljIDogMSxcclxuICAgIGlzbGFuZCA6IDEsXHJcbiAgICBJc3JhZWxpIDogMSxcclxuICAgIGlzc3VlIDogMSxcclxuICAgIGl0IDogMSxcclxuICAgIEl0YWxpYW4gOiAxLFxyXG4gICAgaXRlbSA6IDEsXHJcbiAgICBpdHMgOiAxLFxyXG4gICAgaXRzZWxmIDogMSxcclxuICAgIGphY2tldCA6IDEsXHJcbiAgICBqYWlsIDogMSxcclxuICAgIEphcGFuZXNlIDogMSxcclxuICAgIGpldCA6IDEsXHJcbiAgICBKZXcgOiAxLFxyXG4gICAgSmV3aXNoIDogMSxcclxuICAgIGpvYiA6IDEsXHJcbiAgICBqb2luIDogMSxcclxuICAgIGpvaW50IDogMSxcclxuICAgIGpva2UgOiAxLFxyXG4gICAgam91cm5hbCA6IDEsXHJcbiAgICBqb3VybmFsaXN0IDogMSxcclxuICAgIGpvdXJuZXkgOiAxLFxyXG4gICAgam95IDogMSxcclxuICAgIGp1ZGdlIDogMSxcclxuICAgIGp1ZGdtZW50IDogMSxcclxuICAgIGp1aWNlIDogMSxcclxuICAgIGp1bXAgOiAxLFxyXG4gICAganVuaW9yIDogMSxcclxuICAgIGp1cnkgOiAxLFxyXG4gICAganVzdCA6IDEsXHJcbiAgICBqdXN0aWNlIDogMSxcclxuICAgIGp1c3RpZnkgOiAxLFxyXG4gICAga2VlcCA6IDEsXHJcbiAgICBrZXkgOiAxLFxyXG4gICAga2ljayA6IDEsXHJcbiAgICBraWQgOiAxLFxyXG4gICAga2lsbCA6IDEsXHJcbiAgICBraWxsZXIgOiAxLFxyXG4gICAga2lsbGluZyA6IDEsXHJcbiAgICBraW5kIDogMSxcclxuICAgIGtpbmcgOiAxLFxyXG4gICAga2lzcyA6IDEsXHJcbiAgICBraXRjaGVuIDogMSxcclxuICAgIGtuZWUgOiAxLFxyXG4gICAga25pZmUgOiAxLFxyXG4gICAga25vY2sgOiAxLFxyXG4gICAga25vdyA6IDEsXHJcbiAgICBrbm93bGVkZ2UgOiAxLFxyXG4gICAgbGFiIDogMSxcclxuICAgIGxhYmVsIDogMSxcclxuICAgIGxhYm9yIDogMSxcclxuICAgIGxhYm9yYXRvcnkgOiAxLFxyXG4gICAgbGFjayA6IDEsXHJcbiAgICBsYWR5IDogMSxcclxuICAgIGxha2UgOiAxLFxyXG4gICAgbGFuZCA6IDEsXHJcbiAgICBsYW5kc2NhcGUgOiAxLFxyXG4gICAgbGFuZ3VhZ2UgOiAxLFxyXG4gICAgbGFwIDogMSxcclxuICAgIGxhcmdlIDogMSxcclxuICAgIGxhcmdlbHkgOiAxLFxyXG4gICAgbGFzdCA6IDEsXHJcbiAgICBsYXRlIDogMSxcclxuICAgIGxhdGVyIDogMSxcclxuICAgIExhdGluIDogMSxcclxuICAgIGxhdHRlciA6IDEsXHJcbiAgICBsYXVnaCA6IDEsXHJcbiAgICBsYXVuY2ggOiAxLFxyXG4gICAgbGF3IDogMSxcclxuICAgIGxhd24gOiAxLFxyXG4gICAgbGF3c3VpdCA6IDEsXHJcbiAgICBsYXd5ZXIgOiAxLFxyXG4gICAgbGF5IDogMSxcclxuICAgIGxheWVyIDogMSxcclxuICAgIGxlYWQgOiAxLFxyXG4gICAgbGVhZGVyIDogMSxcclxuICAgIGxlYWRlcnNoaXAgOiAxLFxyXG4gICAgbGVhZGluZyA6IDEsXHJcbiAgICBsZWFmIDogMSxcclxuICAgIGxlYWd1ZSA6IDEsXHJcbiAgICBsZWFuIDogMSxcclxuICAgIGxlYXJuIDogMSxcclxuICAgIGxlYXJuaW5nIDogMSxcclxuICAgIGxlYXN0IDogMSxcclxuICAgIGxlYXRoZXIgOiAxLFxyXG4gICAgbGVhdmUgOiAxLFxyXG4gICAgbGVmdCA6IDEsXHJcbiAgICBsZWcgOiAxLFxyXG4gICAgbGVnYWN5IDogMSxcclxuICAgIGxlZ2FsIDogMSxcclxuICAgIGxlZ2VuZCA6IDEsXHJcbiAgICBsZWdpc2xhdGlvbiA6IDEsXHJcbiAgICBsZWdpdGltYXRlIDogMSxcclxuICAgIGxlbW9uIDogMSxcclxuICAgIGxlbmd0aCA6IDEsXHJcbiAgICBsZXNzIDogMSxcclxuICAgIGxlc3NvbiA6IDEsXHJcbiAgICBsZXQgOiAxLFxyXG4gICAgbGV0dGVyIDogMSxcclxuICAgIGxldmVsIDogMSxcclxuICAgIGxpYmVyYWwgOiAxLFxyXG4gICAgbGlicmFyeSA6IDEsXHJcbiAgICBsaWNlbnNlIDogMSxcclxuICAgIGxpZSA6IDEsXHJcbiAgICBsaWZlIDogMSxcclxuICAgIGxpZmVzdHlsZSA6IDEsXHJcbiAgICBsaWZldGltZSA6IDEsXHJcbiAgICBsaWZ0IDogMSxcclxuICAgIGxpZ2h0IDogMSxcclxuICAgIGxpa2UgOiAxLFxyXG4gICAgbGlrZWx5IDogMSxcclxuICAgIGxpbWl0IDogMSxcclxuICAgIGxpbWl0YXRpb24gOiAxLFxyXG4gICAgbGltaXRlZCA6IDEsXHJcbiAgICBsaW5lIDogMSxcclxuICAgIGxpbmsgOiAxLFxyXG4gICAgbGlwIDogMSxcclxuICAgIGxpc3QgOiAxLFxyXG4gICAgbGlzdGVuIDogMSxcclxuICAgIGxpdGVyYWxseSA6IDEsXHJcbiAgICBsaXRlcmFyeSA6IDEsXHJcbiAgICBsaXRlcmF0dXJlIDogMSxcclxuICAgIGxpdHRsZSA6IDEsXHJcbiAgICBsaXZlIDogMSxcclxuICAgIGxpdmluZyA6IDEsXHJcbiAgICBsb2FkIDogMSxcclxuICAgIGxvYW4gOiAxLFxyXG4gICAgbG9jYWwgOiAxLFxyXG4gICAgbG9jYXRlIDogMSxcclxuICAgIGxvY2F0aW9uIDogMSxcclxuICAgIGxvY2sgOiAxLFxyXG4gICAgbG9uZyA6IDEsXHJcbiAgICBcImxvbmctdGVybVwiIDogMSxcclxuICAgIGxvb2sgOiAxLFxyXG4gICAgbG9vc2UgOiAxLFxyXG4gICAgbG9zZSA6IDEsXHJcbiAgICBsb3NzIDogMSxcclxuICAgIGxvc3QgOiAxLFxyXG4gICAgbG90IDogMSxcclxuICAgIGxvdHMgOiAxLFxyXG4gICAgbG91ZCA6IDEsXHJcbiAgICBsb3ZlIDogMSxcclxuICAgIGxvdmVseSA6IDEsXHJcbiAgICBsb3ZlciA6IDEsXHJcbiAgICBsb3cgOiAxLFxyXG4gICAgbG93ZXIgOiAxLFxyXG4gICAgbHVjayA6IDEsXHJcbiAgICBsdWNreSA6IDEsXHJcbiAgICBsdW5jaCA6IDEsXHJcbiAgICBsdW5nIDogMSxcclxuICAgIG1hY2hpbmUgOiAxLFxyXG4gICAgbWFkIDogMSxcclxuICAgIG1hZ2F6aW5lIDogMSxcclxuICAgIG1haWwgOiAxLFxyXG4gICAgbWFpbiA6IDEsXHJcbiAgICBtYWlubHkgOiAxLFxyXG4gICAgbWFpbnRhaW4gOiAxLFxyXG4gICAgbWFpbnRlbmFuY2UgOiAxLFxyXG4gICAgbWFqb3IgOiAxLFxyXG4gICAgbWFqb3JpdHkgOiAxLFxyXG4gICAgbWFrZSA6IDEsXHJcbiAgICBtYWtlciA6IDEsXHJcbiAgICBtYWtldXAgOiAxLFxyXG4gICAgbWFsZSA6IDEsXHJcbiAgICBtYWxsIDogMSxcclxuICAgIG1hbiA6IDEsXHJcbiAgICBtYW5hZ2UgOiAxLFxyXG4gICAgbWFuYWdlbWVudCA6IDEsXHJcbiAgICBtYW5hZ2VyIDogMSxcclxuICAgIG1hbm5lciA6IDEsXHJcbiAgICBtYW51ZmFjdHVyZXIgOiAxLFxyXG4gICAgbWFudWZhY3R1cmluZyA6IDEsXHJcbiAgICBtYW55IDogMSxcclxuICAgIG1hcCA6IDEsXHJcbiAgICBtYXJnaW4gOiAxLFxyXG4gICAgbWFyayA6IDEsXHJcbiAgICBtYXJrZXQgOiAxLFxyXG4gICAgbWFya2V0aW5nIDogMSxcclxuICAgIG1hcnJpYWdlIDogMSxcclxuICAgIG1hcnJpZWQgOiAxLFxyXG4gICAgbWFycnkgOiAxLFxyXG4gICAgbWFzayA6IDEsXHJcbiAgICBtYXNzIDogMSxcclxuICAgIG1hc3NpdmUgOiAxLFxyXG4gICAgbWFzdGVyIDogMSxcclxuICAgIG1hdGNoIDogMSxcclxuICAgIG1hdGVyaWFsIDogMSxcclxuICAgIG1hdGggOiAxLFxyXG4gICAgbWF0dGVyIDogMSxcclxuICAgIG1heSA6IDEsXHJcbiAgICBtYXliZSA6IDEsXHJcbiAgICBtYXlvciA6IDEsXHJcbiAgICBtZSA6IDEsXHJcbiAgICBtZWFsIDogMSxcclxuICAgIG1lYW4gOiAxLFxyXG4gICAgbWVhbmluZyA6IDEsXHJcbiAgICBtZWFud2hpbGUgOiAxLFxyXG4gICAgbWVhc3VyZSA6IDEsXHJcbiAgICBtZWFzdXJlbWVudCA6IDEsXHJcbiAgICBtZWF0IDogMSxcclxuICAgIG1lY2hhbmlzbSA6IDEsXHJcbiAgICBtZWRpYSA6IDEsXHJcbiAgICBtZWRpY2FsIDogMSxcclxuICAgIG1lZGljYXRpb24gOiAxLFxyXG4gICAgbWVkaWNpbmUgOiAxLFxyXG4gICAgbWVkaXVtIDogMSxcclxuICAgIG1lZXQgOiAxLFxyXG4gICAgbWVldGluZyA6IDEsXHJcbiAgICBtZW1iZXIgOiAxLFxyXG4gICAgbWVtYmVyc2hpcCA6IDEsXHJcbiAgICBtZW1vcnkgOiAxLFxyXG4gICAgbWVudGFsIDogMSxcclxuICAgIG1lbnRpb24gOiAxLFxyXG4gICAgbWVudSA6IDEsXHJcbiAgICBtZXJlIDogMSxcclxuICAgIG1lcmVseSA6IDEsXHJcbiAgICBtZXNzIDogMSxcclxuICAgIG1lc3NhZ2UgOiAxLFxyXG4gICAgbWV0YWwgOiAxLFxyXG4gICAgbWV0ZXIgOiAxLFxyXG4gICAgbWV0aG9kIDogMSxcclxuICAgIE1leGljYW4gOiAxLFxyXG4gICAgbWlkZGxlIDogMSxcclxuICAgIG1pZ2h0IDogMSxcclxuICAgIG1pbGl0YXJ5IDogMSxcclxuICAgIG1pbGsgOiAxLFxyXG4gICAgbWlsbGlvbiA6IDEsXHJcbiAgICBtaW5kIDogMSxcclxuICAgIG1pbmUgOiAxLFxyXG4gICAgbWluaXN0ZXIgOiAxLFxyXG4gICAgbWlub3IgOiAxLFxyXG4gICAgbWlub3JpdHkgOiAxLFxyXG4gICAgbWludXRlIDogMSxcclxuICAgIG1pcmFjbGUgOiAxLFxyXG4gICAgbWlycm9yIDogMSxcclxuICAgIG1pc3MgOiAxLFxyXG4gICAgbWlzc2lsZSA6IDEsXHJcbiAgICBtaXNzaW9uIDogMSxcclxuICAgIG1pc3Rha2UgOiAxLFxyXG4gICAgbWl4IDogMSxcclxuICAgIG1peHR1cmUgOiAxLFxyXG4gICAgXCJtbS1obW1cIiA6IDEsXHJcbiAgICBtb2RlIDogMSxcclxuICAgIG1vZGVsIDogMSxcclxuICAgIG1vZGVyYXRlIDogMSxcclxuICAgIG1vZGVybiA6IDEsXHJcbiAgICBtb2Rlc3QgOiAxLFxyXG4gICAgbW9tIDogMSxcclxuICAgIG1vbWVudCA6IDEsXHJcbiAgICBtb25leSA6IDEsXHJcbiAgICBtb25pdG9yIDogMSxcclxuICAgIG1vbnRoIDogMSxcclxuICAgIG1vb2QgOiAxLFxyXG4gICAgbW9vbiA6IDEsXHJcbiAgICBtb3JhbCA6IDEsXHJcbiAgICBtb3JlIDogMSxcclxuICAgIG1vcmVvdmVyIDogMSxcclxuICAgIG1vcm5pbmcgOiAxLFxyXG4gICAgbW9ydGdhZ2UgOiAxLFxyXG4gICAgbW9zdCA6IDEsXHJcbiAgICBtb3N0bHkgOiAxLFxyXG4gICAgbW90aGVyIDogMSxcclxuICAgIG1vdGlvbiA6IDEsXHJcbiAgICBtb3RpdmF0aW9uIDogMSxcclxuICAgIG1vdG9yIDogMSxcclxuICAgIG1vdW50IDogMSxcclxuICAgIG1vdW50YWluIDogMSxcclxuICAgIG1vdXNlIDogMSxcclxuICAgIG1vdXRoIDogMSxcclxuICAgIG1vdmUgOiAxLFxyXG4gICAgbW92ZW1lbnQgOiAxLFxyXG4gICAgbW92aWUgOiAxLFxyXG4gICAgTXIgOiAxLFxyXG4gICAgTXJzIDogMSxcclxuICAgIE1zIDogMSxcclxuICAgIG11Y2ggOiAxLFxyXG4gICAgbXVsdGlwbGUgOiAxLFxyXG4gICAgbXVyZGVyIDogMSxcclxuICAgIG11c2NsZSA6IDEsXHJcbiAgICBtdXNldW0gOiAxLFxyXG4gICAgbXVzaWMgOiAxLFxyXG4gICAgbXVzaWNhbCA6IDEsXHJcbiAgICBtdXNpY2lhbiA6IDEsXHJcbiAgICBNdXNsaW0gOiAxLFxyXG4gICAgbXVzdCA6IDEsXHJcbiAgICBtdXR1YWwgOiAxLFxyXG4gICAgbXkgOiAxLFxyXG4gICAgbXlzZWxmIDogMSxcclxuICAgIG15c3RlcnkgOiAxLFxyXG4gICAgbXl0aCA6IDEsXHJcbiAgICBuYWtlZCA6IDEsXHJcbiAgICBuYW1lIDogMSxcclxuICAgIG5hcnJhdGl2ZSA6IDEsXHJcbiAgICBuYXJyb3cgOiAxLFxyXG4gICAgbmF0aW9uIDogMSxcclxuICAgIG5hdGlvbmFsIDogMSxcclxuICAgIG5hdGl2ZSA6IDEsXHJcbiAgICBuYXR1cmFsIDogMSxcclxuICAgIG5hdHVyYWxseSA6IDEsXHJcbiAgICBuYXR1cmUgOiAxLFxyXG4gICAgbmVhciA6IDEsXHJcbiAgICBuZWFyYnkgOiAxLFxyXG4gICAgbmVhcmx5IDogMSxcclxuICAgIG5lY2Vzc2FyaWx5IDogMSxcclxuICAgIG5lY2Vzc2FyeSA6IDEsXHJcbiAgICBuZWNrIDogMSxcclxuICAgIG5lZWQgOiAxLFxyXG4gICAgbmVnYXRpdmUgOiAxLFxyXG4gICAgbmVnb3RpYXRlIDogMSxcclxuICAgIG5lZ290aWF0aW9uIDogMSxcclxuICAgIG5laWdoYm9yIDogMSxcclxuICAgIG5laWdoYm9yaG9vZCA6IDEsXHJcbiAgICBuZWl0aGVyIDogMSxcclxuICAgIG5lcnZlIDogMSxcclxuICAgIG5lcnZvdXMgOiAxLFxyXG4gICAgbmV0IDogMSxcclxuICAgIG5ldHdvcmsgOiAxLFxyXG4gICAgbmV2ZXIgOiAxLFxyXG4gICAgbmV2ZXJ0aGVsZXNzIDogMSxcclxuICAgIG5ldyA6IDEsXHJcbiAgICBuZXdseSA6IDEsXHJcbiAgICBuZXdzIDogMSxcclxuICAgIG5ld3NwYXBlciA6IDEsXHJcbiAgICBuZXh0IDogMSxcclxuICAgIG5pY2UgOiAxLFxyXG4gICAgbmlnaHQgOiAxLFxyXG4gICAgbmluZSA6IDEsXHJcbiAgICBubyA6IDEsXHJcbiAgICBub2JvZHkgOiAxLFxyXG4gICAgbm9kIDogMSxcclxuICAgIG5vaXNlIDogMSxcclxuICAgIG5vbWluYXRpb24gOiAxLFxyXG4gICAgbm9uZSA6IDEsXHJcbiAgICBub25ldGhlbGVzcyA6IDEsXHJcbiAgICBub3IgOiAxLFxyXG4gICAgbm9ybWFsIDogMSxcclxuICAgIG5vcm1hbGx5IDogMSxcclxuICAgIG5vcnRoIDogMSxcclxuICAgIG5vcnRoZXJuIDogMSxcclxuICAgIG5vc2UgOiAxLFxyXG4gICAgbm90IDogMSxcclxuICAgIG5vdGUgOiAxLFxyXG4gICAgbm90aGluZyA6IDEsXHJcbiAgICBub3RpY2UgOiAxLFxyXG4gICAgbm90aW9uIDogMSxcclxuICAgIG5vdmVsIDogMSxcclxuICAgIG5vdyA6IDEsXHJcbiAgICBub3doZXJlIDogMSxcclxuICAgIFwibid0XCIgOiAxLFxyXG4gICAgbnVjbGVhciA6IDEsXHJcbiAgICBudW1iZXIgOiAxLFxyXG4gICAgbnVtZXJvdXMgOiAxLFxyXG4gICAgbnVyc2UgOiAxLFxyXG4gICAgbnV0IDogMSxcclxuICAgIG9iamVjdCA6IDEsXHJcbiAgICBvYmplY3RpdmUgOiAxLFxyXG4gICAgb2JsaWdhdGlvbiA6IDEsXHJcbiAgICBvYnNlcnZhdGlvbiA6IDEsXHJcbiAgICBvYnNlcnZlIDogMSxcclxuICAgIG9ic2VydmVyIDogMSxcclxuICAgIG9idGFpbiA6IDEsXHJcbiAgICBvYnZpb3VzIDogMSxcclxuICAgIG9idmlvdXNseSA6IDEsXHJcbiAgICBvY2Nhc2lvbiA6IDEsXHJcbiAgICBvY2Nhc2lvbmFsbHkgOiAxLFxyXG4gICAgb2NjdXBhdGlvbiA6IDEsXHJcbiAgICBvY2N1cHkgOiAxLFxyXG4gICAgb2NjdXIgOiAxLFxyXG4gICAgb2NlYW4gOiAxLFxyXG4gICAgb2RkIDogMSxcclxuICAgIG9kZHMgOiAxLFxyXG4gICAgb2YgOiAxLFxyXG4gICAgb2ZmIDogMSxcclxuICAgIG9mZmVuc2UgOiAxLFxyXG4gICAgb2ZmZW5zaXZlIDogMSxcclxuICAgIG9mZmVyIDogMSxcclxuICAgIG9mZmljZSA6IDEsXHJcbiAgICBvZmZpY2VyIDogMSxcclxuICAgIG9mZmljaWFsIDogMSxcclxuICAgIG9mdGVuIDogMSxcclxuICAgIG9oIDogMSxcclxuICAgIG9pbCA6IDEsXHJcbiAgICBvayA6IDEsXHJcbiAgICBva2F5IDogMSxcclxuICAgIG9sZCA6IDEsXHJcbiAgICBPbHltcGljIDogMSxcclxuICAgIG9uIDogMSxcclxuICAgIG9uY2UgOiAxLFxyXG4gICAgb25lIDogMSxcclxuICAgIG9uZ29pbmcgOiAxLFxyXG4gICAgb25pb24gOiAxLFxyXG4gICAgb25saW5lIDogMSxcclxuICAgIG9ubHkgOiAxLFxyXG4gICAgb250byA6IDEsXHJcbiAgICBvcGVuIDogMSxcclxuICAgIG9wZW5pbmcgOiAxLFxyXG4gICAgb3BlcmF0ZSA6IDEsXHJcbiAgICBvcGVyYXRpbmcgOiAxLFxyXG4gICAgb3BlcmF0aW9uIDogMSxcclxuICAgIG9wZXJhdG9yIDogMSxcclxuICAgIG9waW5pb24gOiAxLFxyXG4gICAgb3Bwb25lbnQgOiAxLFxyXG4gICAgb3Bwb3J0dW5pdHkgOiAxLFxyXG4gICAgb3Bwb3NlIDogMSxcclxuICAgIG9wcG9zaXRlIDogMSxcclxuICAgIG9wcG9zaXRpb24gOiAxLFxyXG4gICAgb3B0aW9uIDogMSxcclxuICAgIG9yIDogMSxcclxuICAgIG9yYW5nZSA6IDEsXHJcbiAgICBvcmRlciA6IDEsXHJcbiAgICBvcmRpbmFyeSA6IDEsXHJcbiAgICBvcmdhbmljIDogMSxcclxuICAgIG9yZ2FuaXphdGlvbiA6IDEsXHJcbiAgICBvcmdhbml6ZSA6IDEsXHJcbiAgICBvcmllbnRhdGlvbiA6IDEsXHJcbiAgICBvcmlnaW4gOiAxLFxyXG4gICAgb3JpZ2luYWwgOiAxLFxyXG4gICAgb3JpZ2luYWxseSA6IDEsXHJcbiAgICBvdGhlciA6IDEsXHJcbiAgICBvdGhlcnMgOiAxLFxyXG4gICAgb3RoZXJ3aXNlIDogMSxcclxuICAgIG91Z2h0IDogMSxcclxuICAgIG91ciA6IDEsXHJcbiAgICBvdXJzZWx2ZXMgOiAxLFxyXG4gICAgb3V0IDogMSxcclxuICAgIG91dGNvbWUgOiAxLFxyXG4gICAgb3V0c2lkZSA6IDEsXHJcbiAgICBvdmVuIDogMSxcclxuICAgIG92ZXIgOiAxLFxyXG4gICAgb3ZlcmFsbCA6IDEsXHJcbiAgICBvdmVyY29tZSA6IDEsXHJcbiAgICBvdmVybG9vayA6IDEsXHJcbiAgICBvd2UgOiAxLFxyXG4gICAgb3duIDogMSxcclxuICAgIG93bmVyIDogMSxcclxuICAgIHBhY2UgOiAxLFxyXG4gICAgcGFjayA6IDEsXHJcbiAgICBwYWNrYWdlIDogMSxcclxuICAgIHBhZ2UgOiAxLFxyXG4gICAgcGFpbiA6IDEsXHJcbiAgICBwYWluZnVsIDogMSxcclxuICAgIHBhaW50IDogMSxcclxuICAgIHBhaW50ZXIgOiAxLFxyXG4gICAgcGFpbnRpbmcgOiAxLFxyXG4gICAgcGFpciA6IDEsXHJcbiAgICBwYWxlIDogMSxcclxuICAgIFBhbGVzdGluaWFuIDogMSxcclxuICAgIHBhbG0gOiAxLFxyXG4gICAgcGFuIDogMSxcclxuICAgIHBhbmVsIDogMSxcclxuICAgIHBhbnQgOiAxLFxyXG4gICAgcGFwZXIgOiAxLFxyXG4gICAgcGFyZW50IDogMSxcclxuICAgIHBhcmsgOiAxLFxyXG4gICAgcGFya2luZyA6IDEsXHJcbiAgICBwYXJ0IDogMSxcclxuICAgIHBhcnRpY2lwYW50IDogMSxcclxuICAgIHBhcnRpY2lwYXRlIDogMSxcclxuICAgIHBhcnRpY2lwYXRpb24gOiAxLFxyXG4gICAgcGFydGljdWxhciA6IDEsXHJcbiAgICBwYXJ0aWN1bGFybHkgOiAxLFxyXG4gICAgcGFydGx5IDogMSxcclxuICAgIHBhcnRuZXIgOiAxLFxyXG4gICAgcGFydG5lcnNoaXAgOiAxLFxyXG4gICAgcGFydHkgOiAxLFxyXG4gICAgcGFzcyA6IDEsXHJcbiAgICBwYXNzYWdlIDogMSxcclxuICAgIHBhc3NlbmdlciA6IDEsXHJcbiAgICBwYXNzaW9uIDogMSxcclxuICAgIHBhc3QgOiAxLFxyXG4gICAgcGF0Y2ggOiAxLFxyXG4gICAgcGF0aCA6IDEsXHJcbiAgICBwYXRpZW50IDogMSxcclxuICAgIHBhdHRlcm4gOiAxLFxyXG4gICAgcGF1c2UgOiAxLFxyXG4gICAgcGF5IDogMSxcclxuICAgIHBheW1lbnQgOiAxLFxyXG4gICAgUEMgOiAxLFxyXG4gICAgcGVhY2UgOiAxLFxyXG4gICAgcGVhayA6IDEsXHJcbiAgICBwZWVyIDogMSxcclxuICAgIHBlbmFsdHkgOiAxLFxyXG4gICAgcGVvcGxlIDogMSxcclxuICAgIHBlcHBlciA6IDEsXHJcbiAgICBwZXIgOiAxLFxyXG4gICAgcGVyY2VpdmUgOiAxLFxyXG4gICAgcGVyY2VudGFnZSA6IDEsXHJcbiAgICBwZXJjZXB0aW9uIDogMSxcclxuICAgIHBlcmZlY3QgOiAxLFxyXG4gICAgcGVyZmVjdGx5IDogMSxcclxuICAgIHBlcmZvcm0gOiAxLFxyXG4gICAgcGVyZm9ybWFuY2UgOiAxLFxyXG4gICAgcGVyaGFwcyA6IDEsXHJcbiAgICBwZXJpb2QgOiAxLFxyXG4gICAgcGVybWFuZW50IDogMSxcclxuICAgIHBlcm1pc3Npb24gOiAxLFxyXG4gICAgcGVybWl0IDogMSxcclxuICAgIHBlcnNvbiA6IDEsXHJcbiAgICBwZXJzb25hbCA6IDEsXHJcbiAgICBwZXJzb25hbGl0eSA6IDEsXHJcbiAgICBwZXJzb25hbGx5IDogMSxcclxuICAgIHBlcnNvbm5lbCA6IDEsXHJcbiAgICBwZXJzcGVjdGl2ZSA6IDEsXHJcbiAgICBwZXJzdWFkZSA6IDEsXHJcbiAgICBwZXQgOiAxLFxyXG4gICAgcGhhc2UgOiAxLFxyXG4gICAgcGhlbm9tZW5vbiA6IDEsXHJcbiAgICBwaGlsb3NvcGh5IDogMSxcclxuICAgIHBob25lIDogMSxcclxuICAgIHBob3RvIDogMSxcclxuICAgIHBob3RvZ3JhcGggOiAxLFxyXG4gICAgcGhvdG9ncmFwaGVyIDogMSxcclxuICAgIHBocmFzZSA6IDEsXHJcbiAgICBwaHlzaWNhbCA6IDEsXHJcbiAgICBwaHlzaWNhbGx5IDogMSxcclxuICAgIHBoeXNpY2lhbiA6IDEsXHJcbiAgICBwaWFubyA6IDEsXHJcbiAgICBwaWNrIDogMSxcclxuICAgIHBpY3R1cmUgOiAxLFxyXG4gICAgcGllIDogMSxcclxuICAgIHBpZWNlIDogMSxcclxuICAgIHBpbGUgOiAxLFxyXG4gICAgcGlsb3QgOiAxLFxyXG4gICAgcGluZSA6IDEsXHJcbiAgICBwaW5rIDogMSxcclxuICAgIHBpcGUgOiAxLFxyXG4gICAgcGl0Y2ggOiAxLFxyXG4gICAgcGxhY2UgOiAxLFxyXG4gICAgcGxhbiA6IDEsXHJcbiAgICBwbGFuZSA6IDEsXHJcbiAgICBwbGFuZXQgOiAxLFxyXG4gICAgcGxhbm5pbmcgOiAxLFxyXG4gICAgcGxhbnQgOiAxLFxyXG4gICAgcGxhc3RpYyA6IDEsXHJcbiAgICBwbGF0ZSA6IDEsXHJcbiAgICBwbGF0Zm9ybSA6IDEsXHJcbiAgICBwbGF5IDogMSxcclxuICAgIHBsYXllciA6IDEsXHJcbiAgICBwbGVhc2UgOiAxLFxyXG4gICAgcGxlYXN1cmUgOiAxLFxyXG4gICAgcGxlbnR5IDogMSxcclxuICAgIHBsb3QgOiAxLFxyXG4gICAgcGx1cyA6IDEsXHJcbiAgICBQTSA6IDEsXHJcbiAgICBwb2NrZXQgOiAxLFxyXG4gICAgcG9lbSA6IDEsXHJcbiAgICBwb2V0IDogMSxcclxuICAgIHBvZXRyeSA6IDEsXHJcbiAgICBwb2ludCA6IDEsXHJcbiAgICBwb2xlIDogMSxcclxuICAgIHBvbGljZSA6IDEsXHJcbiAgICBwb2xpY3kgOiAxLFxyXG4gICAgcG9saXRpY2FsIDogMSxcclxuICAgIHBvbGl0aWNhbGx5IDogMSxcclxuICAgIHBvbGl0aWNpYW4gOiAxLFxyXG4gICAgcG9saXRpY3MgOiAxLFxyXG4gICAgcG9sbCA6IDEsXHJcbiAgICBwb2xsdXRpb24gOiAxLFxyXG4gICAgcG9vbCA6IDEsXHJcbiAgICBwb29yIDogMSxcclxuICAgIHBvcCA6IDEsXHJcbiAgICBwb3B1bGFyIDogMSxcclxuICAgIHBvcHVsYXRpb24gOiAxLFxyXG4gICAgcG9yY2ggOiAxLFxyXG4gICAgcG9ydCA6IDEsXHJcbiAgICBwb3J0aW9uIDogMSxcclxuICAgIHBvcnRyYWl0IDogMSxcclxuICAgIHBvcnRyYXkgOiAxLFxyXG4gICAgcG9zZSA6IDEsXHJcbiAgICBwb3NpdGlvbiA6IDEsXHJcbiAgICBwb3NpdGl2ZSA6IDEsXHJcbiAgICBwb3NzZXNzIDogMSxcclxuICAgIHBvc3NpYmlsaXR5IDogMSxcclxuICAgIHBvc3NpYmxlIDogMSxcclxuICAgIHBvc3NpYmx5IDogMSxcclxuICAgIHBvc3QgOiAxLFxyXG4gICAgcG90IDogMSxcclxuICAgIHBvdGF0byA6IDEsXHJcbiAgICBwb3RlbnRpYWwgOiAxLFxyXG4gICAgcG90ZW50aWFsbHkgOiAxLFxyXG4gICAgcG91bmQgOiAxLFxyXG4gICAgcG91ciA6IDEsXHJcbiAgICBwb3ZlcnR5IDogMSxcclxuICAgIHBvd2RlciA6IDEsXHJcbiAgICBwb3dlciA6IDEsXHJcbiAgICBwb3dlcmZ1bCA6IDEsXHJcbiAgICBwcmFjdGljYWwgOiAxLFxyXG4gICAgcHJhY3RpY2UgOiAxLFxyXG4gICAgcHJheSA6IDEsXHJcbiAgICBwcmF5ZXIgOiAxLFxyXG4gICAgcHJlY2lzZWx5IDogMSxcclxuICAgIHByZWRpY3QgOiAxLFxyXG4gICAgcHJlZmVyIDogMSxcclxuICAgIHByZWZlcmVuY2UgOiAxLFxyXG4gICAgcHJlZ25hbmN5IDogMSxcclxuICAgIHByZWduYW50IDogMSxcclxuICAgIHByZXBhcmF0aW9uIDogMSxcclxuICAgIHByZXBhcmUgOiAxLFxyXG4gICAgcHJlc2NyaXB0aW9uIDogMSxcclxuICAgIHByZXNlbmNlIDogMSxcclxuICAgIHByZXNlbnQgOiAxLFxyXG4gICAgcHJlc2VudGF0aW9uIDogMSxcclxuICAgIHByZXNlcnZlIDogMSxcclxuICAgIHByZXNpZGVudCA6IDEsXHJcbiAgICBwcmVzaWRlbnRpYWwgOiAxLFxyXG4gICAgcHJlc3MgOiAxLFxyXG4gICAgcHJlc3N1cmUgOiAxLFxyXG4gICAgcHJldGVuZCA6IDEsXHJcbiAgICBwcmV0dHkgOiAxLFxyXG4gICAgcHJldmVudCA6IDEsXHJcbiAgICBwcmV2aW91cyA6IDEsXHJcbiAgICBwcmV2aW91c2x5IDogMSxcclxuICAgIHByaWNlIDogMSxcclxuICAgIHByaWRlIDogMSxcclxuICAgIHByaWVzdCA6IDEsXHJcbiAgICBwcmltYXJpbHkgOiAxLFxyXG4gICAgcHJpbWFyeSA6IDEsXHJcbiAgICBwcmltZSA6IDEsXHJcbiAgICBwcmluY2lwYWwgOiAxLFxyXG4gICAgcHJpbmNpcGxlIDogMSxcclxuICAgIHByaW50IDogMSxcclxuICAgIHByaW9yIDogMSxcclxuICAgIHByaW9yaXR5IDogMSxcclxuICAgIHByaXNvbiA6IDEsXHJcbiAgICBwcmlzb25lciA6IDEsXHJcbiAgICBwcml2YWN5IDogMSxcclxuICAgIHByaXZhdGUgOiAxLFxyXG4gICAgcHJvYmFibHkgOiAxLFxyXG4gICAgcHJvYmxlbSA6IDEsXHJcbiAgICBwcm9jZWR1cmUgOiAxLFxyXG4gICAgcHJvY2VlZCA6IDEsXHJcbiAgICBwcm9jZXNzIDogMSxcclxuICAgIHByb2R1Y2UgOiAxLFxyXG4gICAgcHJvZHVjZXIgOiAxLFxyXG4gICAgcHJvZHVjdCA6IDEsXHJcbiAgICBwcm9kdWN0aW9uIDogMSxcclxuICAgIHByb2Zlc3Npb24gOiAxLFxyXG4gICAgcHJvZmVzc2lvbmFsIDogMSxcclxuICAgIHByb2Zlc3NvciA6IDEsXHJcbiAgICBwcm9maWxlIDogMSxcclxuICAgIHByb2ZpdCA6IDEsXHJcbiAgICBwcm9ncmFtIDogMSxcclxuICAgIHByb2dyZXNzIDogMSxcclxuICAgIHByb2plY3QgOiAxLFxyXG4gICAgcHJvbWluZW50IDogMSxcclxuICAgIHByb21pc2UgOiAxLFxyXG4gICAgcHJvbW90ZSA6IDEsXHJcbiAgICBwcm9tcHQgOiAxLFxyXG4gICAgcHJvb2YgOiAxLFxyXG4gICAgcHJvcGVyIDogMSxcclxuICAgIHByb3Blcmx5IDogMSxcclxuICAgIHByb3BlcnR5IDogMSxcclxuICAgIHByb3BvcnRpb24gOiAxLFxyXG4gICAgcHJvcG9zYWwgOiAxLFxyXG4gICAgcHJvcG9zZSA6IDEsXHJcbiAgICBwcm9wb3NlZCA6IDEsXHJcbiAgICBwcm9zZWN1dG9yIDogMSxcclxuICAgIHByb3NwZWN0IDogMSxcclxuICAgIHByb3RlY3QgOiAxLFxyXG4gICAgcHJvdGVjdGlvbiA6IDEsXHJcbiAgICBwcm90ZWluIDogMSxcclxuICAgIHByb3Rlc3QgOiAxLFxyXG4gICAgcHJvdWQgOiAxLFxyXG4gICAgcHJvdmUgOiAxLFxyXG4gICAgcHJvdmlkZSA6IDEsXHJcbiAgICBwcm92aWRlciA6IDEsXHJcbiAgICBwcm92aW5jZSA6IDEsXHJcbiAgICBwcm92aXNpb24gOiAxLFxyXG4gICAgcHN5Y2hvbG9naWNhbCA6IDEsXHJcbiAgICBwc3ljaG9sb2dpc3QgOiAxLFxyXG4gICAgcHN5Y2hvbG9neSA6IDEsXHJcbiAgICBwdWJsaWMgOiAxLFxyXG4gICAgcHVibGljYXRpb24gOiAxLFxyXG4gICAgcHVibGljbHkgOiAxLFxyXG4gICAgcHVibGlzaCA6IDEsXHJcbiAgICBwdWJsaXNoZXIgOiAxLFxyXG4gICAgcHVsbCA6IDEsXHJcbiAgICBwdW5pc2htZW50IDogMSxcclxuICAgIHB1cmNoYXNlIDogMSxcclxuICAgIHB1cmUgOiAxLFxyXG4gICAgcHVycG9zZSA6IDEsXHJcbiAgICBwdXJzdWUgOiAxLFxyXG4gICAgcHVzaCA6IDEsXHJcbiAgICBwdXQgOiAxLFxyXG4gICAgcXVhbGlmeSA6IDEsXHJcbiAgICBxdWFsaXR5IDogMSxcclxuICAgIHF1YXJ0ZXIgOiAxLFxyXG4gICAgcXVhcnRlcmJhY2sgOiAxLFxyXG4gICAgcXVlc3Rpb24gOiAxLFxyXG4gICAgcXVpY2sgOiAxLFxyXG4gICAgcXVpY2tseSA6IDEsXHJcbiAgICBxdWlldCA6IDEsXHJcbiAgICBxdWlldGx5IDogMSxcclxuICAgIHF1aXQgOiAxLFxyXG4gICAgcXVpdGUgOiAxLFxyXG4gICAgcXVvdGUgOiAxLFxyXG4gICAgcmFjZSA6IDEsXHJcbiAgICByYWNpYWwgOiAxLFxyXG4gICAgcmFkaWNhbCA6IDEsXHJcbiAgICByYWRpbyA6IDEsXHJcbiAgICByYWlsIDogMSxcclxuICAgIHJhaW4gOiAxLFxyXG4gICAgcmFpc2UgOiAxLFxyXG4gICAgcmFuZ2UgOiAxLFxyXG4gICAgcmFuayA6IDEsXHJcbiAgICByYXBpZCA6IDEsXHJcbiAgICByYXBpZGx5IDogMSxcclxuICAgIHJhcmUgOiAxLFxyXG4gICAgcmFyZWx5IDogMSxcclxuICAgIHJhdGUgOiAxLFxyXG4gICAgcmF0aGVyIDogMSxcclxuICAgIHJhdGluZyA6IDEsXHJcbiAgICByYXRpbyA6IDEsXHJcbiAgICByYXcgOiAxLFxyXG4gICAgcmVhY2ggOiAxLFxyXG4gICAgcmVhY3QgOiAxLFxyXG4gICAgcmVhY3Rpb24gOiAxLFxyXG4gICAgcmVhZCA6IDEsXHJcbiAgICByZWFkZXIgOiAxLFxyXG4gICAgcmVhZGluZyA6IDEsXHJcbiAgICByZWFkeSA6IDEsXHJcbiAgICByZWFsIDogMSxcclxuICAgIHJlYWxpdHkgOiAxLFxyXG4gICAgcmVhbGl6ZSA6IDEsXHJcbiAgICByZWFsbHkgOiAxLFxyXG4gICAgcmVhc29uIDogMSxcclxuICAgIHJlYXNvbmFibGUgOiAxLFxyXG4gICAgcmVjYWxsIDogMSxcclxuICAgIHJlY2VpdmUgOiAxLFxyXG4gICAgcmVjZW50IDogMSxcclxuICAgIHJlY2VudGx5IDogMSxcclxuICAgIHJlY2lwZSA6IDEsXHJcbiAgICByZWNvZ25pdGlvbiA6IDEsXHJcbiAgICByZWNvZ25pemUgOiAxLFxyXG4gICAgcmVjb21tZW5kIDogMSxcclxuICAgIHJlY29tbWVuZGF0aW9uIDogMSxcclxuICAgIHJlY29yZCA6IDEsXHJcbiAgICByZWNvcmRpbmcgOiAxLFxyXG4gICAgcmVjb3ZlciA6IDEsXHJcbiAgICByZWNvdmVyeSA6IDEsXHJcbiAgICByZWNydWl0IDogMSxcclxuICAgIHJlZCA6IDEsXHJcbiAgICByZWR1Y2UgOiAxLFxyXG4gICAgcmVkdWN0aW9uIDogMSxcclxuICAgIHJlZmVyIDogMSxcclxuICAgIHJlZmVyZW5jZSA6IDEsXHJcbiAgICByZWZsZWN0IDogMSxcclxuICAgIHJlZmxlY3Rpb24gOiAxLFxyXG4gICAgcmVmb3JtIDogMSxcclxuICAgIHJlZnVnZWUgOiAxLFxyXG4gICAgcmVmdXNlIDogMSxcclxuICAgIHJlZ2FyZCA6IDEsXHJcbiAgICByZWdhcmRpbmcgOiAxLFxyXG4gICAgcmVnYXJkbGVzcyA6IDEsXHJcbiAgICByZWdpbWUgOiAxLFxyXG4gICAgcmVnaW9uIDogMSxcclxuICAgIHJlZ2lvbmFsIDogMSxcclxuICAgIHJlZ2lzdGVyIDogMSxcclxuICAgIHJlZ3VsYXIgOiAxLFxyXG4gICAgcmVndWxhcmx5IDogMSxcclxuICAgIHJlZ3VsYXRlIDogMSxcclxuICAgIHJlZ3VsYXRpb24gOiAxLFxyXG4gICAgcmVpbmZvcmNlIDogMSxcclxuICAgIHJlamVjdCA6IDEsXHJcbiAgICByZWxhdGUgOiAxLFxyXG4gICAgcmVsYXRpb24gOiAxLFxyXG4gICAgcmVsYXRpb25zaGlwIDogMSxcclxuICAgIHJlbGF0aXZlIDogMSxcclxuICAgIHJlbGF0aXZlbHkgOiAxLFxyXG4gICAgcmVsYXggOiAxLFxyXG4gICAgcmVsZWFzZSA6IDEsXHJcbiAgICByZWxldmFudCA6IDEsXHJcbiAgICByZWxpZWYgOiAxLFxyXG4gICAgcmVsaWdpb24gOiAxLFxyXG4gICAgcmVsaWdpb3VzIDogMSxcclxuICAgIHJlbHkgOiAxLFxyXG4gICAgcmVtYWluIDogMSxcclxuICAgIHJlbWFpbmluZyA6IDEsXHJcbiAgICByZW1hcmthYmxlIDogMSxcclxuICAgIHJlbWVtYmVyIDogMSxcclxuICAgIHJlbWluZCA6IDEsXHJcbiAgICByZW1vdGUgOiAxLFxyXG4gICAgcmVtb3ZlIDogMSxcclxuICAgIHJlcGVhdCA6IDEsXHJcbiAgICByZXBlYXRlZGx5IDogMSxcclxuICAgIHJlcGxhY2UgOiAxLFxyXG4gICAgcmVwbHkgOiAxLFxyXG4gICAgcmVwb3J0IDogMSxcclxuICAgIHJlcG9ydGVyIDogMSxcclxuICAgIHJlcHJlc2VudCA6IDEsXHJcbiAgICByZXByZXNlbnRhdGlvbiA6IDEsXHJcbiAgICByZXByZXNlbnRhdGl2ZSA6IDEsXHJcbiAgICBSZXB1YmxpY2FuIDogMSxcclxuICAgIHJlcHV0YXRpb24gOiAxLFxyXG4gICAgcmVxdWVzdCA6IDEsXHJcbiAgICByZXF1aXJlIDogMSxcclxuICAgIHJlcXVpcmVtZW50IDogMSxcclxuICAgIHJlc2VhcmNoIDogMSxcclxuICAgIHJlc2VhcmNoZXIgOiAxLFxyXG4gICAgcmVzZW1ibGUgOiAxLFxyXG4gICAgcmVzZXJ2YXRpb24gOiAxLFxyXG4gICAgcmVzaWRlbnQgOiAxLFxyXG4gICAgcmVzaXN0IDogMSxcclxuICAgIHJlc2lzdGFuY2UgOiAxLFxyXG4gICAgcmVzb2x1dGlvbiA6IDEsXHJcbiAgICByZXNvbHZlIDogMSxcclxuICAgIHJlc29ydCA6IDEsXHJcbiAgICByZXNvdXJjZSA6IDEsXHJcbiAgICByZXNwZWN0IDogMSxcclxuICAgIHJlc3BvbmQgOiAxLFxyXG4gICAgcmVzcG9uZGVudCA6IDEsXHJcbiAgICByZXNwb25zZSA6IDEsXHJcbiAgICByZXNwb25zaWJpbGl0eSA6IDEsXHJcbiAgICByZXNwb25zaWJsZSA6IDEsXHJcbiAgICByZXN0IDogMSxcclxuICAgIHJlc3RhdXJhbnQgOiAxLFxyXG4gICAgcmVzdG9yZSA6IDEsXHJcbiAgICByZXN0cmljdGlvbiA6IDEsXHJcbiAgICByZXN1bHQgOiAxLFxyXG4gICAgcmV0YWluIDogMSxcclxuICAgIHJldGlyZSA6IDEsXHJcbiAgICByZXRpcmVtZW50IDogMSxcclxuICAgIHJldHVybiA6IDEsXHJcbiAgICByZXZlYWwgOiAxLFxyXG4gICAgcmV2ZW51ZSA6IDEsXHJcbiAgICByZXZpZXcgOiAxLFxyXG4gICAgcmV2b2x1dGlvbiA6IDEsXHJcbiAgICByaHl0aG0gOiAxLFxyXG4gICAgcmljZSA6IDEsXHJcbiAgICByaWNoIDogMSxcclxuICAgIHJpZCA6IDEsXHJcbiAgICByaWRlIDogMSxcclxuICAgIHJpZmxlIDogMSxcclxuICAgIHJpZ2h0IDogMSxcclxuICAgIHJpbmcgOiAxLFxyXG4gICAgcmlzZSA6IDEsXHJcbiAgICByaXNrIDogMSxcclxuICAgIHJpdmVyIDogMSxcclxuICAgIHJvYWQgOiAxLFxyXG4gICAgcm9jayA6IDEsXHJcbiAgICByb2xlIDogMSxcclxuICAgIHJvbGwgOiAxLFxyXG4gICAgcm9tYW50aWMgOiAxLFxyXG4gICAgcm9vZiA6IDEsXHJcbiAgICByb29tIDogMSxcclxuICAgIHJvb3QgOiAxLFxyXG4gICAgcm9wZSA6IDEsXHJcbiAgICByb3NlIDogMSxcclxuICAgIHJvdWdoIDogMSxcclxuICAgIHJvdWdobHkgOiAxLFxyXG4gICAgcm91bmQgOiAxLFxyXG4gICAgcm91dGUgOiAxLFxyXG4gICAgcm91dGluZSA6IDEsXHJcbiAgICByb3cgOiAxLFxyXG4gICAgcnViIDogMSxcclxuICAgIHJ1bGUgOiAxLFxyXG4gICAgcnVuIDogMSxcclxuICAgIHJ1bm5pbmcgOiAxLFxyXG4gICAgcnVyYWwgOiAxLFxyXG4gICAgcnVzaCA6IDEsXHJcbiAgICBSdXNzaWFuIDogMSxcclxuICAgIHNhY3JlZCA6IDEsXHJcbiAgICBzYWQgOiAxLFxyXG4gICAgc2FmZSA6IDEsXHJcbiAgICBzYWZldHkgOiAxLFxyXG4gICAgc2FrZSA6IDEsXHJcbiAgICBzYWxhZCA6IDEsXHJcbiAgICBzYWxhcnkgOiAxLFxyXG4gICAgc2FsZSA6IDEsXHJcbiAgICBzYWxlcyA6IDEsXHJcbiAgICBzYWx0IDogMSxcclxuICAgIHNhbWUgOiAxLFxyXG4gICAgc2FtcGxlIDogMSxcclxuICAgIHNhbmN0aW9uIDogMSxcclxuICAgIHNhbmQgOiAxLFxyXG4gICAgc2F0ZWxsaXRlIDogMSxcclxuICAgIHNhdGlzZmFjdGlvbiA6IDEsXHJcbiAgICBzYXRpc2Z5IDogMSxcclxuICAgIHNhdWNlIDogMSxcclxuICAgIHNhdmUgOiAxLFxyXG4gICAgc2F2aW5nIDogMSxcclxuICAgIHNheSA6IDEsXHJcbiAgICBzY2FsZSA6IDEsXHJcbiAgICBzY2FuZGFsIDogMSxcclxuICAgIHNjYXJlZCA6IDEsXHJcbiAgICBzY2VuYXJpbyA6IDEsXHJcbiAgICBzY2VuZSA6IDEsXHJcbiAgICBzY2hlZHVsZSA6IDEsXHJcbiAgICBzY2hlbWUgOiAxLFxyXG4gICAgc2Nob2xhciA6IDEsXHJcbiAgICBzY2hvbGFyc2hpcCA6IDEsXHJcbiAgICBzY2hvb2wgOiAxLFxyXG4gICAgc2NpZW5jZSA6IDEsXHJcbiAgICBzY2llbnRpZmljIDogMSxcclxuICAgIHNjaWVudGlzdCA6IDEsXHJcbiAgICBzY29wZSA6IDEsXHJcbiAgICBzY29yZSA6IDEsXHJcbiAgICBzY3JlYW0gOiAxLFxyXG4gICAgc2NyZWVuIDogMSxcclxuICAgIHNjcmlwdCA6IDEsXHJcbiAgICBzZWEgOiAxLFxyXG4gICAgc2VhcmNoIDogMSxcclxuICAgIHNlYXNvbiA6IDEsXHJcbiAgICBzZWF0IDogMSxcclxuICAgIHNlY29uZCA6IDEsXHJcbiAgICBzZWNyZXQgOiAxLFxyXG4gICAgc2VjcmV0YXJ5IDogMSxcclxuICAgIHNlY3Rpb24gOiAxLFxyXG4gICAgc2VjdG9yIDogMSxcclxuICAgIHNlY3VyZSA6IDEsXHJcbiAgICBzZWN1cml0eSA6IDEsXHJcbiAgICBzZWUgOiAxLFxyXG4gICAgc2VlZCA6IDEsXHJcbiAgICBzZWVrIDogMSxcclxuICAgIHNlZW0gOiAxLFxyXG4gICAgc2VnbWVudCA6IDEsXHJcbiAgICBzZWl6ZSA6IDEsXHJcbiAgICBzZWxlY3QgOiAxLFxyXG4gICAgc2VsZWN0aW9uIDogMSxcclxuICAgIHNlbGYgOiAxLFxyXG4gICAgc2VsbCA6IDEsXHJcbiAgICBTZW5hdGUgOiAxLFxyXG4gICAgc2VuYXRvciA6IDEsXHJcbiAgICBzZW5kIDogMSxcclxuICAgIHNlbmlvciA6IDEsXHJcbiAgICBzZW5zZSA6IDEsXHJcbiAgICBzZW5zaXRpdmUgOiAxLFxyXG4gICAgc2VudGVuY2UgOiAxLFxyXG4gICAgc2VwYXJhdGUgOiAxLFxyXG4gICAgc2VxdWVuY2UgOiAxLFxyXG4gICAgc2VyaWVzIDogMSxcclxuICAgIHNlcmlvdXMgOiAxLFxyXG4gICAgc2VyaW91c2x5IDogMSxcclxuICAgIHNlcnZlIDogMSxcclxuICAgIHNlcnZpY2UgOiAxLFxyXG4gICAgc2Vzc2lvbiA6IDEsXHJcbiAgICBzZXQgOiAxLFxyXG4gICAgc2V0dGluZyA6IDEsXHJcbiAgICBzZXR0bGUgOiAxLFxyXG4gICAgc2V0dGxlbWVudCA6IDEsXHJcbiAgICBzZXZlbiA6IDEsXHJcbiAgICBzZXZlcmFsIDogMSxcclxuICAgIHNldmVyZSA6IDEsXHJcbiAgICBzZXggOiAxLFxyXG4gICAgc2V4dWFsIDogMSxcclxuICAgIHNoYWRlIDogMSxcclxuICAgIHNoYWRvdyA6IDEsXHJcbiAgICBzaGFrZSA6IDEsXHJcbiAgICBzaGFsbCA6IDEsXHJcbiAgICBzaGFwZSA6IDEsXHJcbiAgICBzaGFyZSA6IDEsXHJcbiAgICBzaGFycCA6IDEsXHJcbiAgICBzaGUgOiAxLFxyXG4gICAgc2hlZXQgOiAxLFxyXG4gICAgc2hlbGYgOiAxLFxyXG4gICAgc2hlbGwgOiAxLFxyXG4gICAgc2hlbHRlciA6IDEsXHJcbiAgICBzaGlmdCA6IDEsXHJcbiAgICBzaGluZSA6IDEsXHJcbiAgICBzaGlwIDogMSxcclxuICAgIHNoaXJ0IDogMSxcclxuICAgIHNoaXQgOiAxLFxyXG4gICAgc2hvY2sgOiAxLFxyXG4gICAgc2hvZSA6IDEsXHJcbiAgICBzaG9vdCA6IDEsXHJcbiAgICBzaG9vdGluZyA6IDEsXHJcbiAgICBzaG9wIDogMSxcclxuICAgIHNob3BwaW5nIDogMSxcclxuICAgIHNob3JlIDogMSxcclxuICAgIHNob3J0IDogMSxcclxuICAgIHNob3J0bHkgOiAxLFxyXG4gICAgc2hvdCA6IDEsXHJcbiAgICBzaG91bGQgOiAxLFxyXG4gICAgc2hvdWxkZXIgOiAxLFxyXG4gICAgc2hvdXQgOiAxLFxyXG4gICAgc2hvdyA6IDEsXHJcbiAgICBzaG93ZXIgOiAxLFxyXG4gICAgc2hydWcgOiAxLFxyXG4gICAgc2h1dCA6IDEsXHJcbiAgICBzaWNrIDogMSxcclxuICAgIHNpZGUgOiAxLFxyXG4gICAgc2lnaCA6IDEsXHJcbiAgICBzaWdodCA6IDEsXHJcbiAgICBzaWduIDogMSxcclxuICAgIHNpZ25hbCA6IDEsXHJcbiAgICBzaWduaWZpY2FuY2UgOiAxLFxyXG4gICAgc2lnbmlmaWNhbnQgOiAxLFxyXG4gICAgc2lnbmlmaWNhbnRseSA6IDEsXHJcbiAgICBzaWxlbmNlIDogMSxcclxuICAgIHNpbGVudCA6IDEsXHJcbiAgICBzaWx2ZXIgOiAxLFxyXG4gICAgc2ltaWxhciA6IDEsXHJcbiAgICBzaW1pbGFybHkgOiAxLFxyXG4gICAgc2ltcGxlIDogMSxcclxuICAgIHNpbXBseSA6IDEsXHJcbiAgICBzaW4gOiAxLFxyXG4gICAgc2luY2UgOiAxLFxyXG4gICAgc2luZyA6IDEsXHJcbiAgICBzaW5nZXIgOiAxLFxyXG4gICAgc2luZ2xlIDogMSxcclxuICAgIHNpbmsgOiAxLFxyXG4gICAgc2lyIDogMSxcclxuICAgIHNpc3RlciA6IDEsXHJcbiAgICBzaXQgOiAxLFxyXG4gICAgc2l0ZSA6IDEsXHJcbiAgICBzaXR1YXRpb24gOiAxLFxyXG4gICAgc2l4IDogMSxcclxuICAgIHNpemUgOiAxLFxyXG4gICAgc2tpIDogMSxcclxuICAgIHNraWxsIDogMSxcclxuICAgIHNraW4gOiAxLFxyXG4gICAgc2t5IDogMSxcclxuICAgIHNsYXZlIDogMSxcclxuICAgIHNsZWVwIDogMSxcclxuICAgIHNsaWNlIDogMSxcclxuICAgIHNsaWRlIDogMSxcclxuICAgIHNsaWdodCA6IDEsXHJcbiAgICBzbGlnaHRseSA6IDEsXHJcbiAgICBzbGlwIDogMSxcclxuICAgIHNsb3cgOiAxLFxyXG4gICAgc2xvd2x5IDogMSxcclxuICAgIHNtYWxsIDogMSxcclxuICAgIHNtYXJ0IDogMSxcclxuICAgIHNtZWxsIDogMSxcclxuICAgIHNtaWxlIDogMSxcclxuICAgIHNtb2tlIDogMSxcclxuICAgIHNtb290aCA6IDEsXHJcbiAgICBzbmFwIDogMSxcclxuICAgIHNub3cgOiAxLFxyXG4gICAgc28gOiAxLFxyXG4gICAgXCJzby1jYWxsZWRcIiA6IDEsXHJcbiAgICBzb2NjZXIgOiAxLFxyXG4gICAgc29jaWFsIDogMSxcclxuICAgIHNvY2lldHkgOiAxLFxyXG4gICAgc29mdCA6IDEsXHJcbiAgICBzb2Z0d2FyZSA6IDEsXHJcbiAgICBzb2lsIDogMSxcclxuICAgIHNvbGFyIDogMSxcclxuICAgIHNvbGRpZXIgOiAxLFxyXG4gICAgc29saWQgOiAxLFxyXG4gICAgc29sdXRpb24gOiAxLFxyXG4gICAgc29sdmUgOiAxLFxyXG4gICAgc29tZSA6IDEsXHJcbiAgICBzb21lYm9keSA6IDEsXHJcbiAgICBzb21laG93IDogMSxcclxuICAgIHNvbWVvbmUgOiAxLFxyXG4gICAgc29tZXRoaW5nIDogMSxcclxuICAgIHNvbWV0aW1lcyA6IDEsXHJcbiAgICBzb21ld2hhdCA6IDEsXHJcbiAgICBzb21ld2hlcmUgOiAxLFxyXG4gICAgc29uIDogMSxcclxuICAgIHNvbmcgOiAxLFxyXG4gICAgc29vbiA6IDEsXHJcbiAgICBzb3BoaXN0aWNhdGVkIDogMSxcclxuICAgIHNvcnJ5IDogMSxcclxuICAgIHNvcnQgOiAxLFxyXG4gICAgc291bCA6IDEsXHJcbiAgICBzb3VuZCA6IDEsXHJcbiAgICBzb3VwIDogMSxcclxuICAgIHNvdXJjZSA6IDEsXHJcbiAgICBzb3V0aCA6IDEsXHJcbiAgICBzb3V0aGVybiA6IDEsXHJcbiAgICBTb3ZpZXQgOiAxLFxyXG4gICAgc3BhY2UgOiAxLFxyXG4gICAgU3BhbmlzaCA6IDEsXHJcbiAgICBzcGVhayA6IDEsXHJcbiAgICBzcGVha2VyIDogMSxcclxuICAgIHNwZWNpYWwgOiAxLFxyXG4gICAgc3BlY2lhbGlzdCA6IDEsXHJcbiAgICBzcGVjaWVzIDogMSxcclxuICAgIHNwZWNpZmljIDogMSxcclxuICAgIHNwZWNpZmljYWxseSA6IDEsXHJcbiAgICBzcGVlY2ggOiAxLFxyXG4gICAgc3BlZWQgOiAxLFxyXG4gICAgc3BlbmQgOiAxLFxyXG4gICAgc3BlbmRpbmcgOiAxLFxyXG4gICAgc3BpbiA6IDEsXHJcbiAgICBzcGlyaXQgOiAxLFxyXG4gICAgc3Bpcml0dWFsIDogMSxcclxuICAgIHNwbGl0IDogMSxcclxuICAgIHNwb2tlc21hbiA6IDEsXHJcbiAgICBzcG9ydCA6IDEsXHJcbiAgICBzcG90IDogMSxcclxuICAgIHNwcmVhZCA6IDEsXHJcbiAgICBzcHJpbmcgOiAxLFxyXG4gICAgc3F1YXJlIDogMSxcclxuICAgIHNxdWVlemUgOiAxLFxyXG4gICAgc3RhYmlsaXR5IDogMSxcclxuICAgIHN0YWJsZSA6IDEsXHJcbiAgICBzdGFmZiA6IDEsXHJcbiAgICBzdGFnZSA6IDEsXHJcbiAgICBzdGFpciA6IDEsXHJcbiAgICBzdGFrZSA6IDEsXHJcbiAgICBzdGFuZCA6IDEsXHJcbiAgICBzdGFuZGFyZCA6IDEsXHJcbiAgICBzdGFuZGluZyA6IDEsXHJcbiAgICBzdGFyIDogMSxcclxuICAgIHN0YXJlIDogMSxcclxuICAgIHN0YXJ0IDogMSxcclxuICAgIHN0YXRlIDogMSxcclxuICAgIHN0YXRlbWVudCA6IDEsXHJcbiAgICBzdGF0aW9uIDogMSxcclxuICAgIHN0YXRpc3RpY3MgOiAxLFxyXG4gICAgc3RhdHVzIDogMSxcclxuICAgIHN0YXkgOiAxLFxyXG4gICAgc3RlYWR5IDogMSxcclxuICAgIHN0ZWFsIDogMSxcclxuICAgIHN0ZWVsIDogMSxcclxuICAgIHN0ZXAgOiAxLFxyXG4gICAgc3RpY2sgOiAxLFxyXG4gICAgc3RpbGwgOiAxLFxyXG4gICAgc3RpciA6IDEsXHJcbiAgICBzdG9jayA6IDEsXHJcbiAgICBzdG9tYWNoIDogMSxcclxuICAgIHN0b25lIDogMSxcclxuICAgIHN0b3AgOiAxLFxyXG4gICAgc3RvcmFnZSA6IDEsXHJcbiAgICBzdG9yZSA6IDEsXHJcbiAgICBzdG9ybSA6IDEsXHJcbiAgICBzdG9yeSA6IDEsXHJcbiAgICBzdHJhaWdodCA6IDEsXHJcbiAgICBzdHJhbmdlIDogMSxcclxuICAgIHN0cmFuZ2VyIDogMSxcclxuICAgIHN0cmF0ZWdpYyA6IDEsXHJcbiAgICBzdHJhdGVneSA6IDEsXHJcbiAgICBzdHJlYW0gOiAxLFxyXG4gICAgc3RyZWV0IDogMSxcclxuICAgIHN0cmVuZ3RoIDogMSxcclxuICAgIHN0cmVuZ3RoZW4gOiAxLFxyXG4gICAgc3RyZXNzIDogMSxcclxuICAgIHN0cmV0Y2ggOiAxLFxyXG4gICAgc3RyaWtlIDogMSxcclxuICAgIHN0cmluZyA6IDEsXHJcbiAgICBzdHJpcCA6IDEsXHJcbiAgICBzdHJva2UgOiAxLFxyXG4gICAgc3Ryb25nIDogMSxcclxuICAgIHN0cm9uZ2x5IDogMSxcclxuICAgIHN0cnVjdHVyZSA6IDEsXHJcbiAgICBzdHJ1Z2dsZSA6IDEsXHJcbiAgICBzdHVkZW50IDogMSxcclxuICAgIHN0dWRpbyA6IDEsXHJcbiAgICBzdHVkeSA6IDEsXHJcbiAgICBzdHVmZiA6IDEsXHJcbiAgICBzdHVwaWQgOiAxLFxyXG4gICAgc3R5bGUgOiAxLFxyXG4gICAgc3ViamVjdCA6IDEsXHJcbiAgICBzdWJtaXQgOiAxLFxyXG4gICAgc3Vic2VxdWVudCA6IDEsXHJcbiAgICBzdWJzdGFuY2UgOiAxLFxyXG4gICAgc3Vic3RhbnRpYWwgOiAxLFxyXG4gICAgc3VjY2VlZCA6IDEsXHJcbiAgICBzdWNjZXNzIDogMSxcclxuICAgIHN1Y2Nlc3NmdWwgOiAxLFxyXG4gICAgc3VjY2Vzc2Z1bGx5IDogMSxcclxuICAgIHN1Y2ggOiAxLFxyXG4gICAgc3VkZGVuIDogMSxcclxuICAgIHN1ZGRlbmx5IDogMSxcclxuICAgIHN1ZSA6IDEsXHJcbiAgICBzdWZmZXIgOiAxLFxyXG4gICAgc3VmZmljaWVudCA6IDEsXHJcbiAgICBzdWdhciA6IDEsXHJcbiAgICBzdWdnZXN0IDogMSxcclxuICAgIHN1Z2dlc3Rpb24gOiAxLFxyXG4gICAgc3VpY2lkZSA6IDEsXHJcbiAgICBzdWl0IDogMSxcclxuICAgIHN1bW1lciA6IDEsXHJcbiAgICBzdW1taXQgOiAxLFxyXG4gICAgc3VuIDogMSxcclxuICAgIHN1cGVyIDogMSxcclxuICAgIHN1cHBseSA6IDEsXHJcbiAgICBzdXBwb3J0IDogMSxcclxuICAgIHN1cHBvcnRlciA6IDEsXHJcbiAgICBzdXBwb3NlIDogMSxcclxuICAgIHN1cHBvc2VkIDogMSxcclxuICAgIFN1cHJlbWUgOiAxLFxyXG4gICAgc3VyZSA6IDEsXHJcbiAgICBzdXJlbHkgOiAxLFxyXG4gICAgc3VyZmFjZSA6IDEsXHJcbiAgICBzdXJnZXJ5IDogMSxcclxuICAgIHN1cnByaXNlIDogMSxcclxuICAgIHN1cnByaXNlZCA6IDEsXHJcbiAgICBzdXJwcmlzaW5nIDogMSxcclxuICAgIHN1cnByaXNpbmdseSA6IDEsXHJcbiAgICBzdXJyb3VuZCA6IDEsXHJcbiAgICBzdXJ2ZXkgOiAxLFxyXG4gICAgc3Vydml2YWwgOiAxLFxyXG4gICAgc3Vydml2ZSA6IDEsXHJcbiAgICBzdXJ2aXZvciA6IDEsXHJcbiAgICBzdXNwZWN0IDogMSxcclxuICAgIHN1c3RhaW4gOiAxLFxyXG4gICAgc3dlYXIgOiAxLFxyXG4gICAgc3dlZXAgOiAxLFxyXG4gICAgc3dlZXQgOiAxLFxyXG4gICAgc3dpbSA6IDEsXHJcbiAgICBzd2luZyA6IDEsXHJcbiAgICBzd2l0Y2ggOiAxLFxyXG4gICAgc3ltYm9sIDogMSxcclxuICAgIHN5bXB0b20gOiAxLFxyXG4gICAgc3lzdGVtIDogMSxcclxuICAgIHRhYmxlIDogMSxcclxuICAgIHRhYmxlc3Bvb24gOiAxLFxyXG4gICAgdGFjdGljIDogMSxcclxuICAgIHRhaWwgOiAxLFxyXG4gICAgdGFrZSA6IDEsXHJcbiAgICB0YWxlIDogMSxcclxuICAgIHRhbGVudCA6IDEsXHJcbiAgICB0YWxrIDogMSxcclxuICAgIHRhbGwgOiAxLFxyXG4gICAgdGFuayA6IDEsXHJcbiAgICB0YXAgOiAxLFxyXG4gICAgdGFwZSA6IDEsXHJcbiAgICB0YXJnZXQgOiAxLFxyXG4gICAgdGFzayA6IDEsXHJcbiAgICB0YXN0ZSA6IDEsXHJcbiAgICB0YXggOiAxLFxyXG4gICAgdGF4cGF5ZXIgOiAxLFxyXG4gICAgdGVhIDogMSxcclxuICAgIHRlYWNoIDogMSxcclxuICAgIHRlYWNoZXIgOiAxLFxyXG4gICAgdGVhY2hpbmcgOiAxLFxyXG4gICAgdGVhbSA6IDEsXHJcbiAgICB0ZWFyIDogMSxcclxuICAgIHRlYXNwb29uIDogMSxcclxuICAgIHRlY2huaWNhbCA6IDEsXHJcbiAgICB0ZWNobmlxdWUgOiAxLFxyXG4gICAgdGVjaG5vbG9neSA6IDEsXHJcbiAgICB0ZWVuIDogMSxcclxuICAgIHRlZW5hZ2VyIDogMSxcclxuICAgIHRlbGVwaG9uZSA6IDEsXHJcbiAgICB0ZWxlc2NvcGUgOiAxLFxyXG4gICAgdGVsZXZpc2lvbiA6IDEsXHJcbiAgICB0ZWxsIDogMSxcclxuICAgIHRlbXBlcmF0dXJlIDogMSxcclxuICAgIHRlbXBvcmFyeSA6IDEsXHJcbiAgICB0ZW4gOiAxLFxyXG4gICAgdGVuZCA6IDEsXHJcbiAgICB0ZW5kZW5jeSA6IDEsXHJcbiAgICB0ZW5uaXMgOiAxLFxyXG4gICAgdGVuc2lvbiA6IDEsXHJcbiAgICB0ZW50IDogMSxcclxuICAgIHRlcm0gOiAxLFxyXG4gICAgdGVybXMgOiAxLFxyXG4gICAgdGVycmlibGUgOiAxLFxyXG4gICAgdGVycml0b3J5IDogMSxcclxuICAgIHRlcnJvciA6IDEsXHJcbiAgICB0ZXJyb3Jpc20gOiAxLFxyXG4gICAgdGVycm9yaXN0IDogMSxcclxuICAgIHRlc3QgOiAxLFxyXG4gICAgdGVzdGlmeSA6IDEsXHJcbiAgICB0ZXN0aW1vbnkgOiAxLFxyXG4gICAgdGVzdGluZyA6IDEsXHJcbiAgICB0ZXh0IDogMSxcclxuICAgIHRoYW4gOiAxLFxyXG4gICAgdGhhbmsgOiAxLFxyXG4gICAgdGhhbmtzIDogMSxcclxuICAgIHRoYXQgOiAxLFxyXG4gICAgdGhlIDogMSxcclxuICAgIHRoZWF0ZXIgOiAxLFxyXG4gICAgdGhlaXIgOiAxLFxyXG4gICAgdGhlbSA6IDEsXHJcbiAgICB0aGVtZSA6IDEsXHJcbiAgICB0aGVtc2VsdmVzIDogMSxcclxuICAgIHRoZW4gOiAxLFxyXG4gICAgdGhlb3J5IDogMSxcclxuICAgIHRoZXJhcHkgOiAxLFxyXG4gICAgdGhlcmUgOiAxLFxyXG4gICAgdGhlcmVmb3JlIDogMSxcclxuICAgIHRoZXNlIDogMSxcclxuICAgIHRoZXkgOiAxLFxyXG4gICAgdGhpY2sgOiAxLFxyXG4gICAgdGhpbiA6IDEsXHJcbiAgICB0aGluZyA6IDEsXHJcbiAgICB0aGluayA6IDEsXHJcbiAgICB0aGlua2luZyA6IDEsXHJcbiAgICB0aGlyZCA6IDEsXHJcbiAgICB0aGlydHkgOiAxLFxyXG4gICAgdGhpcyA6IDEsXHJcbiAgICB0aG9zZSA6IDEsXHJcbiAgICB0aG91Z2ggOiAxLFxyXG4gICAgdGhvdWdodCA6IDEsXHJcbiAgICB0aG91c2FuZCA6IDEsXHJcbiAgICB0aHJlYXQgOiAxLFxyXG4gICAgdGhyZWF0ZW4gOiAxLFxyXG4gICAgdGhyZWUgOiAxLFxyXG4gICAgdGhyb2F0IDogMSxcclxuICAgIHRocm91Z2ggOiAxLFxyXG4gICAgdGhyb3VnaG91dCA6IDEsXHJcbiAgICB0aHJvdyA6IDEsXHJcbiAgICB0aHVzIDogMSxcclxuICAgIHRpY2tldCA6IDEsXHJcbiAgICB0aWUgOiAxLFxyXG4gICAgdGlnaHQgOiAxLFxyXG4gICAgdGltZSA6IDEsXHJcbiAgICB0aW55IDogMSxcclxuICAgIHRpcCA6IDEsXHJcbiAgICB0aXJlIDogMSxcclxuICAgIHRpcmVkIDogMSxcclxuICAgIHRpc3N1ZSA6IDEsXHJcbiAgICB0aXRsZSA6IDEsXHJcbiAgICB0byA6IDEsXHJcbiAgICB0b2JhY2NvIDogMSxcclxuICAgIHRvZGF5IDogMSxcclxuICAgIHRvZSA6IDEsXHJcbiAgICB0b2dldGhlciA6IDEsXHJcbiAgICB0b21hdG8gOiAxLFxyXG4gICAgdG9tb3Jyb3cgOiAxLFxyXG4gICAgdG9uZSA6IDEsXHJcbiAgICB0b25ndWUgOiAxLFxyXG4gICAgdG9uaWdodCA6IDEsXHJcbiAgICB0b28gOiAxLFxyXG4gICAgdG9vbCA6IDEsXHJcbiAgICB0b290aCA6IDEsXHJcbiAgICB0b3AgOiAxLFxyXG4gICAgdG9waWMgOiAxLFxyXG4gICAgdG9zcyA6IDEsXHJcbiAgICB0b3RhbCA6IDEsXHJcbiAgICB0b3RhbGx5IDogMSxcclxuICAgIHRvdWNoIDogMSxcclxuICAgIHRvdWdoIDogMSxcclxuICAgIHRvdXIgOiAxLFxyXG4gICAgdG91cmlzdCA6IDEsXHJcbiAgICB0b3VybmFtZW50IDogMSxcclxuICAgIHRvd2FyZCA6IDEsXHJcbiAgICB0b3dhcmRzIDogMSxcclxuICAgIHRvd2VyIDogMSxcclxuICAgIHRvd24gOiAxLFxyXG4gICAgdG95IDogMSxcclxuICAgIHRyYWNlIDogMSxcclxuICAgIHRyYWNrIDogMSxcclxuICAgIHRyYWRlIDogMSxcclxuICAgIHRyYWRpdGlvbiA6IDEsXHJcbiAgICB0cmFkaXRpb25hbCA6IDEsXHJcbiAgICB0cmFmZmljIDogMSxcclxuICAgIHRyYWdlZHkgOiAxLFxyXG4gICAgdHJhaWwgOiAxLFxyXG4gICAgdHJhaW4gOiAxLFxyXG4gICAgdHJhaW5pbmcgOiAxLFxyXG4gICAgdHJhbnNmZXIgOiAxLFxyXG4gICAgdHJhbnNmb3JtIDogMSxcclxuICAgIHRyYW5zZm9ybWF0aW9uIDogMSxcclxuICAgIHRyYW5zaXRpb24gOiAxLFxyXG4gICAgdHJhbnNsYXRlIDogMSxcclxuICAgIHRyYW5zcG9ydGF0aW9uIDogMSxcclxuICAgIHRyYXZlbCA6IDEsXHJcbiAgICB0cmVhdCA6IDEsXHJcbiAgICB0cmVhdG1lbnQgOiAxLFxyXG4gICAgdHJlYXR5IDogMSxcclxuICAgIHRyZWUgOiAxLFxyXG4gICAgdHJlbWVuZG91cyA6IDEsXHJcbiAgICB0cmVuZCA6IDEsXHJcbiAgICB0cmlhbCA6IDEsXHJcbiAgICB0cmliZSA6IDEsXHJcbiAgICB0cmljayA6IDEsXHJcbiAgICB0cmlwIDogMSxcclxuICAgIHRyb29wIDogMSxcclxuICAgIHRyb3VibGUgOiAxLFxyXG4gICAgdHJ1Y2sgOiAxLFxyXG4gICAgdHJ1ZSA6IDEsXHJcbiAgICB0cnVseSA6IDEsXHJcbiAgICB0cnVzdCA6IDEsXHJcbiAgICB0cnV0aCA6IDEsXHJcbiAgICB0cnkgOiAxLFxyXG4gICAgdHViZSA6IDEsXHJcbiAgICB0dW5uZWwgOiAxLFxyXG4gICAgdHVybiA6IDEsXHJcbiAgICBUViA6IDEsXHJcbiAgICB0d2VsdmUgOiAxLFxyXG4gICAgdHdlbnR5IDogMSxcclxuICAgIHR3aWNlIDogMSxcclxuICAgIHR3aW4gOiAxLFxyXG4gICAgdHdvIDogMSxcclxuICAgIHR5cGUgOiAxLFxyXG4gICAgdHlwaWNhbCA6IDEsXHJcbiAgICB0eXBpY2FsbHkgOiAxLFxyXG4gICAgdWdseSA6IDEsXHJcbiAgICB1bHRpbWF0ZSA6IDEsXHJcbiAgICB1bHRpbWF0ZWx5IDogMSxcclxuICAgIHVuYWJsZSA6IDEsXHJcbiAgICB1bmNsZSA6IDEsXHJcbiAgICB1bmRlciA6IDEsXHJcbiAgICB1bmRlcmdvIDogMSxcclxuICAgIHVuZGVyc3RhbmQgOiAxLFxyXG4gICAgdW5kZXJzdGFuZGluZyA6IDEsXHJcbiAgICB1bmZvcnR1bmF0ZWx5IDogMSxcclxuICAgIHVuaWZvcm0gOiAxLFxyXG4gICAgdW5pb24gOiAxLFxyXG4gICAgdW5pcXVlIDogMSxcclxuICAgIHVuaXQgOiAxLFxyXG4gICAgVW5pdGVkIDogMSxcclxuICAgIHVuaXZlcnNhbCA6IDEsXHJcbiAgICB1bml2ZXJzZSA6IDEsXHJcbiAgICB1bml2ZXJzaXR5IDogMSxcclxuICAgIHVua25vd24gOiAxLFxyXG4gICAgdW5sZXNzIDogMSxcclxuICAgIHVubGlrZSA6IDEsXHJcbiAgICB1bmxpa2VseSA6IDEsXHJcbiAgICB1bnRpbCA6IDEsXHJcbiAgICB1bnVzdWFsIDogMSxcclxuICAgIHVwIDogMSxcclxuICAgIHVwb24gOiAxLFxyXG4gICAgdXBwZXIgOiAxLFxyXG4gICAgdXJiYW4gOiAxLFxyXG4gICAgdXJnZSA6IDEsXHJcbiAgICB1cyA6IDEsXHJcbiAgICB1c2UgOiAxLFxyXG4gICAgdXNlZCA6IDEsXHJcbiAgICB1c2VmdWwgOiAxLFxyXG4gICAgdXNlciA6IDEsXHJcbiAgICB1c3VhbCA6IDEsXHJcbiAgICB1c3VhbGx5IDogMSxcclxuICAgIHV0aWxpdHkgOiAxLFxyXG4gICAgdmFjYXRpb24gOiAxLFxyXG4gICAgdmFsbGV5IDogMSxcclxuICAgIHZhbHVhYmxlIDogMSxcclxuICAgIHZhbHVlIDogMSxcclxuICAgIHZhcmlhYmxlIDogMSxcclxuICAgIHZhcmlhdGlvbiA6IDEsXHJcbiAgICB2YXJpZXR5IDogMSxcclxuICAgIHZhcmlvdXMgOiAxLFxyXG4gICAgdmFyeSA6IDEsXHJcbiAgICB2YXN0IDogMSxcclxuICAgIHZlZ2V0YWJsZSA6IDEsXHJcbiAgICB2ZWhpY2xlIDogMSxcclxuICAgIHZlbnR1cmUgOiAxLFxyXG4gICAgdmVyc2lvbiA6IDEsXHJcbiAgICB2ZXJzdXMgOiAxLFxyXG4gICAgdmVyeSA6IDEsXHJcbiAgICB2ZXNzZWwgOiAxLFxyXG4gICAgdmV0ZXJhbiA6IDEsXHJcbiAgICB2aWEgOiAxLFxyXG4gICAgdmljdGltIDogMSxcclxuICAgIHZpY3RvcnkgOiAxLFxyXG4gICAgdmlkZW8gOiAxLFxyXG4gICAgdmlldyA6IDEsXHJcbiAgICB2aWV3ZXIgOiAxLFxyXG4gICAgdmlsbGFnZSA6IDEsXHJcbiAgICB2aW9sYXRlIDogMSxcclxuICAgIHZpb2xhdGlvbiA6IDEsXHJcbiAgICB2aW9sZW5jZSA6IDEsXHJcbiAgICB2aW9sZW50IDogMSxcclxuICAgIHZpcnR1YWxseSA6IDEsXHJcbiAgICB2aXJ0dWUgOiAxLFxyXG4gICAgdmlydXMgOiAxLFxyXG4gICAgdmlzaWJsZSA6IDEsXHJcbiAgICB2aXNpb24gOiAxLFxyXG4gICAgdmlzaXQgOiAxLFxyXG4gICAgdmlzaXRvciA6IDEsXHJcbiAgICB2aXN1YWwgOiAxLFxyXG4gICAgdml0YWwgOiAxLFxyXG4gICAgdm9pY2UgOiAxLFxyXG4gICAgdm9sdW1lIDogMSxcclxuICAgIHZvbHVudGVlciA6IDEsXHJcbiAgICB2b3RlIDogMSxcclxuICAgIHZvdGVyIDogMSxcclxuICAgIHZzIDogMSxcclxuICAgIHZ1bG5lcmFibGUgOiAxLFxyXG4gICAgd2FnZSA6IDEsXHJcbiAgICB3YWl0IDogMSxcclxuICAgIHdha2UgOiAxLFxyXG4gICAgd2FsayA6IDEsXHJcbiAgICB3YWxsIDogMSxcclxuICAgIHdhbmRlciA6IDEsXHJcbiAgICB3YW50IDogMSxcclxuICAgIHdhciA6IDEsXHJcbiAgICB3YXJtIDogMSxcclxuICAgIHdhcm4gOiAxLFxyXG4gICAgd2FybmluZyA6IDEsXHJcbiAgICB3YXNoIDogMSxcclxuICAgIHdhc3RlIDogMSxcclxuICAgIHdhdGNoIDogMSxcclxuICAgIHdhdGVyIDogMSxcclxuICAgIHdhdmUgOiAxLFxyXG4gICAgd2F5IDogMSxcclxuICAgIHdlIDogMSxcclxuICAgIHdlYWsgOiAxLFxyXG4gICAgd2VhbHRoIDogMSxcclxuICAgIHdlYWx0aHkgOiAxLFxyXG4gICAgd2VhcG9uIDogMSxcclxuICAgIHdlYXIgOiAxLFxyXG4gICAgd2VhdGhlciA6IDEsXHJcbiAgICB3ZWRkaW5nIDogMSxcclxuICAgIHdlZWsgOiAxLFxyXG4gICAgd2Vla2VuZCA6IDEsXHJcbiAgICB3ZWVrbHkgOiAxLFxyXG4gICAgd2VpZ2ggOiAxLFxyXG4gICAgd2VpZ2h0IDogMSxcclxuICAgIHdlbGNvbWUgOiAxLFxyXG4gICAgd2VsZmFyZSA6IDEsXHJcbiAgICB3ZWxsIDogMSxcclxuICAgIHdlc3QgOiAxLFxyXG4gICAgd2VzdGVybiA6IDEsXHJcbiAgICB3ZXQgOiAxLFxyXG4gICAgd2hhdCA6IDEsXHJcbiAgICB3aGF0ZXZlciA6IDEsXHJcbiAgICB3aGVlbCA6IDEsXHJcbiAgICB3aGVuIDogMSxcclxuICAgIHdoZW5ldmVyIDogMSxcclxuICAgIHdoZXJlIDogMSxcclxuICAgIHdoZXJlYXMgOiAxLFxyXG4gICAgd2hldGhlciA6IDEsXHJcbiAgICB3aGljaCA6IDEsXHJcbiAgICB3aGlsZSA6IDEsXHJcbiAgICB3aGlzcGVyIDogMSxcclxuICAgIHdoaXRlIDogMSxcclxuICAgIHdobyA6IDEsXHJcbiAgICB3aG9sZSA6IDEsXHJcbiAgICB3aG9tIDogMSxcclxuICAgIHdob3NlIDogMSxcclxuICAgIHdoeSA6IDEsXHJcbiAgICB3aWRlIDogMSxcclxuICAgIHdpZGVseSA6IDEsXHJcbiAgICB3aWRlc3ByZWFkIDogMSxcclxuICAgIHdpZmUgOiAxLFxyXG4gICAgd2lsZCA6IDEsXHJcbiAgICB3aWxsIDogMSxcclxuICAgIHdpbGxpbmcgOiAxLFxyXG4gICAgd2luIDogMSxcclxuICAgIHdpbmQgOiAxLFxyXG4gICAgd2luZG93IDogMSxcclxuICAgIHdpbmUgOiAxLFxyXG4gICAgd2luZyA6IDEsXHJcbiAgICB3aW5uZXIgOiAxLFxyXG4gICAgd2ludGVyIDogMSxcclxuICAgIHdpcGUgOiAxLFxyXG4gICAgd2lyZSA6IDEsXHJcbiAgICB3aXNkb20gOiAxLFxyXG4gICAgd2lzZSA6IDEsXHJcbiAgICB3aXNoIDogMSxcclxuICAgIHdpdGggOiAxLFxyXG4gICAgd2l0aGRyYXcgOiAxLFxyXG4gICAgd2l0aGluIDogMSxcclxuICAgIHdpdGhvdXQgOiAxLFxyXG4gICAgd2l0bmVzcyA6IDEsXHJcbiAgICB3b21hbiA6IDEsXHJcbiAgICB3b25kZXIgOiAxLFxyXG4gICAgd29uZGVyZnVsIDogMSxcclxuICAgIHdvb2QgOiAxLFxyXG4gICAgd29vZGVuIDogMSxcclxuICAgIHdvcmQgOiAxLFxyXG4gICAgd29yayA6IDEsXHJcbiAgICB3b3JrZXIgOiAxLFxyXG4gICAgd29ya2luZyA6IDEsXHJcbiAgICB3b3JrcyA6IDEsXHJcbiAgICB3b3Jrc2hvcCA6IDEsXHJcbiAgICB3b3JsZCA6IDEsXHJcbiAgICB3b3JyaWVkIDogMSxcclxuICAgIHdvcnJ5IDogMSxcclxuICAgIHdvcnRoIDogMSxcclxuICAgIHdvdWxkIDogMSxcclxuICAgIHdvdW5kIDogMSxcclxuICAgIHdyYXAgOiAxLFxyXG4gICAgd3JpdGUgOiAxLFxyXG4gICAgd3JpdGVyIDogMSxcclxuICAgIHdyaXRpbmcgOiAxLFxyXG4gICAgd3JvbmcgOiAxLFxyXG4gICAgeWFyZCA6IDEsXHJcbiAgICB5ZWFoIDogMSxcclxuICAgIHllYXIgOiAxLFxyXG4gICAgeWVsbCA6IDEsXHJcbiAgICB5ZWxsb3cgOiAxLFxyXG4gICAgeWVzIDogMSxcclxuICAgIHllc3RlcmRheSA6IDEsXHJcbiAgICB5ZXQgOiAxLFxyXG4gICAgeWllbGQgOiAxLFxyXG4gICAgeW91IDogMSxcclxuICAgIHlvdW5nIDogMSxcclxuICAgIHlvdXIgOiAxLFxyXG4gICAgeW91cnMgOiAxLFxyXG4gICAgeW91cnNlbGYgOiAxLFxyXG4gICAgeW91dGggOiAxLFxyXG4gICAgem9uZSA6IDEsXHJcbiAgfTsiLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgZmluZGVyID0gcmVxdWlyZSgnLi9maW5kZXIuanMnKTtcclxuXHJcbmNvbnN0IEFQSV9EQUlMWV9MSU1JVCA9IDI1MDAwO1xyXG5sZXQgTUFYX1dPUkRTO1xyXG5sZXQgQ0FDSEVfQ0xVU1RFUlM7XHJcbmxldCBNQVhfTk9ERV9GUkVRVUVOQ1k7XHJcbmxldCBUUkFWRVJTRV9TSU1JTEFSO1xyXG5cclxubGV0IGNhY2hlSXNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG5sZXQgdG90YWxXb3Jkc0xhc3REYXkgPSAwO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbGF6eUluaXRDYWNoZSgpIHtcclxuXHJcbiAgaWYgKCFjYWNoZUlzSW5pdGlhbGl6ZWQpIHtcclxuICAgIGNhY2hlSXNJbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgbGV0IGN1cnRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIC8vIDg2NDAwMDAwIG1pbGxpc2Vjb25kcyAoMjQgaG91cnMpXHJcbiAgICB0b3RhbFdvcmRzTGFzdERheSA9IGF3YWl0IGZpbmRlci5maW5kRmlsZXMoXCJjYWNoZS93b3Jkc1wiLCBjdXJ0aW1lIC0gODY0MDAwMDApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwibGF6eUluaXRDYWNoZSAgdG90YWxXb3Jkc0xhc3REYXkgOiBcIit0b3RhbFdvcmRzTGFzdERheStcIiBlcnJvcnM6XCIrZmluZGVyLmVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBpZiAodG90YWxXb3Jkc0xhc3REYXkgPj0gQVBJX0RBSUxZX0xJTUlUKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IG1ha2UgcmVxdWVzdCB0byBmaWxlL3NpbmdsZSBcIit3ZnBhdGgrXCIgIHRvdGFsV29yZHNMYXN0RGF5ID49IEFQSV9EQUlMWV9MSU1JVCA6ICBcIit0b3RhbFdvcmRzTGFzdERheStcIiA+PSBcIitBUElfREFJTFlfTElNSVQrXCJcXG5cIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvdGFsV29yZHNMYXN0RGF5Kys7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0Q3Jhd2xlcihcclxuICBfTUFYX1dPUkRTLFxyXG4gIF9DQUNIRV9DTFVTVEVSUyxcclxuICBfTUFYX05PREVfRlJFUVVFTkNZLFxyXG4gIF9UUkFWRVJTRV9TSU1JTEFSXHJcbiAgKSB7XHJcblxyXG4gIE1BWF9XT1JEUyA9IF9NQVhfV09SRFM7XHJcbiAgQ0FDSEVfQ0xVU1RFUlMgPSBfQ0FDSEVfQ0xVU1RFUlM7XHJcbiAgTUFYX05PREVfRlJFUVVFTkNZID0gX01BWF9OT0RFX0ZSRVFVRU5DWTtcclxuICBUUkFWRVJTRV9TSU1JTEFSID0gX1RSQVZFUlNFX1NJTUlMQVI7XHJcblxyXG5cclxuICBpZiAoIWZzLmV4aXN0c1N5bmMoXCJjYWNoZS93b3Jkc1wiKSl7XHJcbiAgICBmcy5ta2RpclN5bmMoXCJjYWNoZS93b3Jkc1wiLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcclxuICB9XHJcbiAgaWYgKCFmcy5leGlzdHNTeW5jKFwiY2FjaGUvY2x1c3RlcnNcIikpe1xyXG4gICAgZnMubWtkaXJTeW5jKFwiY2FjaGUvY2x1c3RlcnNcIik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZVdvcmRUb0Rpc3BsYXkoZGF0YSkge1xyXG5cclxuICAvLyBjcmVhdGUgbmV3IGFycmF5IHRvIHB1c2ggZGF0YSB0b1xyXG4gIGxldCByZXN1bHRzID0gW107XHJcbiAgbGV0IHJlc3VsdCA9IHtcclxuICAgIGZyZXF1ZW5jeTpkYXRhLmZyZXF1ZW5jeSxcclxuICAgIHByb251bmNpYXRpb246ZGF0YS5wcm9udW5jaWF0aW9uLFxyXG4gICAgcmVzdWx0cywgZXRjOlwiXCJcclxuICB9O1xyXG5cclxuICBpZiAoZGF0YS5yZXN1bHRzKSBkYXRhLnJlc3VsdHMubWFwKGRlZiA9PiB7XHJcbiAgICBsZXQgZGVmaW5pdGlvbkFycmF5ID0gW107XHJcbiAgICBsZXQgZGVmaW5pdGlvbiA9IHtcclxuICAgICAgcGFydE9mU3BlZWNoOmRlZi5wYXJ0T2ZTcGVlY2gsXHJcbiAgICAgIHByb3BlcnRpZXM6ZGVmaW5pdGlvbkFycmF5XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNyZWF0ZXMgYXJyYXkgb2Yga2V5cyBpbiBvYmplY3RcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkZWYpO1xyXG4gICAga2V5cy5tYXAoa2V5ID0+IHtcclxuXHJcbiAgICAgIC8vIGJ1aWxkcyByZWdleCB0aGF0IGxvb2tzIGZvciBjYXBpdGFsIGxldHRlcnNcclxuICAgICAgLy8gVGhlIHJlc3BvbnNlIHBhcmFtZXRlcnMgYXJlIGluIGNhbWVsQ2FzZSwgc28gd2UgbmVlZCB0byBJRFxyXG4gICAgICAvLyB0aGUgY2FwaXRhbCBsZXR0ZXJzIGFuZCBhZGQgc3BhY2VzIGluc3RlYWQgc28gdGhlIFxyXG4gICAgICAvLyBmcm9udCBlbmQgY2FuIGVhc2lseSBkaXNwbGF5IHRoZSBwYXJhbWV0ZXIgbGFiZWxzXHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gLyg/PVtBLVpdKS87XHJcblxyXG4gICAgICAvLyBjcmVhdGVzIHByZXNlbnRhYmxlIGxhYmVsXHJcbiAgICAgIGNvbnN0IGxhYmVsID0ga2V5LnNwbGl0KHJlZ2V4KS5qb2luKCcgJykudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIC8vIGdyYWJzIHRoZSB2YWx1ZSBmb3IgdGhlIHBhcmFtZXRlciBmcm9tIHRoZVxyXG4gICAgICAvLyBkZWZpbml0aW9uIG9iamVjdCBpbiByZXNwb25zZVxyXG4gICAgICBjb25zdCB2YWx1ZSA9IGRlZltrZXldO1xyXG5cclxuICAgICAgLy8gY29uc3RydWN0cyBuZXcgb2JqZWN0IHRvIHNlbmQgdG8gZnJvbnRlbmRcclxuICAgICAgbGV0IG5ld09iaiA9IHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBpc1N0cmluZzogdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHRydWUgOiBmYWxzZVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZGVmaW5pdGlvbkFycmF5LnB1c2gobmV3T2JqKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmVzdWx0cy5wdXNoKGRlZmluaXRpb24pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFNpbmdsZVdvcmQod29yZCwgYXNvYmplY3QpIHtcclxuXHJcbiAgY29uc3Qgd2ZwYXRoID0gYGNhY2hlL3dvcmRzLyR7d29yZH1gO1xyXG5cclxuICBpZiAoZnMuZXhpc3RzU3luYyh3ZnBhdGgpKSB7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcIkZyb20gY2FjaGUgZmlsZS9zaW5nbGUgXCIrd2ZwYXRoK1wiICBhc29iamVjdDpcIithc29iamVjdCtcIi4uLlxcblwiKTtcclxuICAgIGxldCBpanNvbiA9IGZzLnJlYWRGaWxlU3luYyh3ZnBhdGgpLnRvU3RyaW5nKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoaWpzb24pO1xyXG5cclxuICAgICAgaWYgKGFzb2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHNpbmdsZVdvcmRUb0Rpc3BsYXkoZGF0YSk7XHJcbiAgICAgICAgY29uc3Qgb2pzb24gPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpOyAgICAgICAgIC8vIG1vZGlmaWVkXHJcbiAgICAgICAgcmV0dXJuIG9qc29uO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIkRlbGV0ZSBpbnZhbGlkIGZpbGUgOiBcIit3ZnBhdGgsIGUpO1xyXG4gICAgICBmcy51bmxpbmtTeW5jKHdmcGF0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIWF3YWl0IGxhenlJbml0Q2FjaGUoKSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBzZW5kIHJlcXVlc3QgdG8gdGhlIFdvcmRzQVBJXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICBcIm1ldGhvZFwiOlwiR0VUXCIsXHJcbiAgICBcInVybFwiOmBodHRwczovL3dvcmRzYXBpdjEucC5yYXBpZGFwaS5jb20vd29yZHMvJHt3b3JkfWAsXHJcbiAgICBcImhlYWRlcnNcIjp7XHJcbiAgICBcImNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXHJcbiAgICBcIngtcmFwaWRhcGktaG9zdFwiOlwid29yZHNhcGl2MS5wLnJhcGlkYXBpLmNvbVwiLFxyXG4gICAgXCJ4LXJhcGlkYXBpLWtleVwiOnByb2Nlc3MuZW52LlJBUElEQVBJX0tFWVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB0b3RhbFdvcmRzTGFzdERheSsrO1xyXG5cclxuICBjb25zdCBkanNvbiA9IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpOyAgLy8gb3JpZ2luYWxcclxuICBmcy53cml0ZUZpbGUod2ZwYXRoLCBkanNvbiwgKGVycikgPT4ge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQ2FjaGUgZmlsZS9zaW5nbGUgXCIrd2ZwYXRoK1wiICBhc29iamVjdDpcIithc29iamVjdCtcIiB3cml0ZSBmYWlsdXJlIDogXCIrZXJyK1wiXFxuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYWNoZSBmaWxlL3NpbmdsZSBcIit3ZnBhdGgrXCIgIGFzb2JqZWN0OlwiK2Fzb2JqZWN0K1wiIHdyaXR0ZW4gc3VjY2Vzc2Z1bGx5XFxuXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoYXNvYmplY3QpIHtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2luZ2xlV29yZFRvRGlzcGxheShyZXNwb25zZS5kYXRhKTtcclxuICAgIGNvbnN0IG9qc29uID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTsgICAgICAgICAvLyBtb2RpZmllZFxyXG4gICAgcmV0dXJuIG9qc29uO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmF2ZXJzZU5vZGUge1xyXG5cclxuICBlbnRyeTt2YWw7bGV2ZWw7cGFydE9mU3BlZWNoO1xyXG4gIGRlZmluaXRpb247c3lub255bXM7c2ltaWxhcjt3b3JkcztcclxuICBrZXk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGJ5X2RlZiwgZW50cnksIHZhbCwgbGV2ZWwpIHtcclxuICAgIHRoaXMuZW50cnk9ZW50cnk7dGhpcy52YWw9dmFsO3RoaXMubGV2ZWw9bGV2ZWw7XHJcblxyXG4gICAgdGhpcy5kZWZpbml0aW9uID0gdmFsLmRlZmluaXRpb247IFxyXG4gICAgdGhpcy5zeW5vbnltcyA9IFtdO1xyXG4gICAgdGhpcy5zaW1pbGFyID0gW107XHJcbiAgICB0aGlzLndvcmRzID0gW107XHJcblxyXG4gICAgdGhpcy5hZGQoYnlfZGVmKTtcclxuICB9XHJcblxyXG4gIGFkZChieV9kZWYpIHtcclxuICBcclxuICAgIHRoaXMucGFydE9mU3BlZWNoID0gdGhpcy52YWwucGFydE9mU3BlZWNoO1xyXG4gICAgdGhpcy5zeW5vbnltcy5wdXNoLmFwcGx5KHRoaXMuc3lub255bXMsIHRoaXMudmFsLnN5bm9ueW1zKTtcclxuICAgIHRoaXMuc3lub255bXMucHVzaCh0aGlzLmVudHJ5LndvcmQpO1xyXG4gICAgdGhpcy5zeW5vbnltcy5zb3J0KCk7XHJcbiAgXHJcbiAgICB0aGlzLnNpbWlsYXIucHVzaC5hcHBseSh0aGlzLnNpbWlsYXIsIHRoaXMudmFsLnNpbWlsYXJUbyk7XHJcbiAgICB0aGlzLnNpbWlsYXIuc29ydCgpO1xyXG4gIFxyXG4gICAgdGhpcy53b3Jkcy5wdXNoLmFwcGx5KHRoaXMud29yZHMsIHRoaXMuc3lub255bXMpO1xyXG4gICAgdGhpcy53b3Jkcy5wdXNoLmFwcGx5KHRoaXMud29yZHMsIHRoaXMuc2ltaWxhcik7XHJcbiAgXHJcbiAgICB0aGlzLmtleSA9IHRoaXMubGV2ZWwrXCI6Ojo6Ojo6XCIrdGhpcy5zeW5vbnltcy5sZW5ndGgrXCI6Ojo6OjpcIit0aGlzLnN5bm9ueW1zLmpvaW4oXCIsIFwiKTtcclxuXHJcbiAgICBpZiAoIWJ5X2RlZlt0aGlzLnZhbC5kZWZpbml0aW9uXSkge1xyXG5cclxuICAgICAgYnlfZGVmW3RoaXMudmFsLmRlZmluaXRpb25dID0gdGhpcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXByZXNzKCkge1xyXG4gICAgZGVsZXRlIHRoaXMudmFsO1xyXG4gICAgZGVsZXRlIHRoaXMua2V5O1xyXG4gICAgZGVsZXRlIHRoaXMud29yZHM7XHJcbiAgfVxyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWREaWN0aW9uYXJ5QW5kQ2hpbGRyZW4odHJlc3VsdCwgd29yZCwgdHJhdmVyc2lvbikge1xyXG5cclxuICBjb25zdCBieV9kZWYgPSB0cmVzdWx0LmJ5X2RlZjtcclxuICBjb25zdCBlbnRyeSA9IGF3YWl0IGxvYWRTaW5nbGVXb3JkKHdvcmQsIHRydWUpO1xyXG5cclxuICBpZiAoIWVudHJ5IHx8XHJcbiAgICAgICh0cmF2ZXJzaW9uLmxldmVsID4gMSAmJiBcclxuICAgICAgZW50cnkuZnJlcXVlbmN5ICYmIGVudHJ5LmZyZXF1ZW5jeT49TUFYX05PREVfRlJFUVVFTkNZKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgZm9yIChsZXQga2V5IGluIGVudHJ5LnJlc3VsdHMpIHtcclxuICAgIGNvbnN0IHZhbCA9IGVudHJ5LnJlc3VsdHNba2V5XTsgXHJcblxyXG4gICAgbGV0IG5vZGUgPSBuZXcgVHJhdmVyc2VOb2RlKGJ5X2RlZiwgZW50cnksIHZhbCwgdHJhdmVyc2lvbi5sZXZlbCk7XHJcbiAgICBpZiAoVFJBVkVSU0VfU0lNSUxBUikge1xyXG4gICAgICB0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0LnB1c2guYXBwbHkodHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdCwgbm9kZS53b3Jkcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0LnB1c2guYXBwbHkodHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdCwgbm9kZS5zeW5vbnltcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYXZlcnNlQ2x1c3Rlcih0cmVzdWx0LCB3b3JkKSB7XHJcblxyXG4gIGxldCB0cmF2ZXJzaW9uID0ge1xyXG4gICAgbGV2ZWwgOiAxLFxyXG4gICAgd29yZHNicmVhZHRoZmlyc3QgOiBbd29yZF1cclxuICB9O1xyXG4gIHRyZXN1bHQubm9Xb3JkcyA9IDA7XHJcbiAgdHJlc3VsdC5tYXN0ZXIgPSBhd2FpdCBsb2FkU2luZ2xlV29yZCh3b3JkLCB0cnVlKTtcclxuXHJcbiAgZG8ge1xyXG4gICAgdmFyIHByZXZpb3VzbGV2ZWxjaGlsZHdvcmRzID0gdHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdC5jb25jYXQoW10pO1xyXG4gICAgdHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdCA9IFtdO1xyXG5cclxuICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgdyBvZiBwcmV2aW91c2xldmVsY2hpbGR3b3Jkcykge1xyXG4gICAgICBpZiAodHJlc3VsdC5ieV93W3ddKSB7XHJcbiAgICAgIH0gZWxzZSBpZiAodHJlc3VsdC5ub1dvcmRzID49IE1BWF9XT1JEUykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGV2ZWwgXCIrdHJhdmVyc2lvbi5sZXZlbCtcIiBmaW5pc2hlZC4gQ29tcGxldGVkLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJlc3VsdC5ub1dvcmRzKys7XHJcbiAgICAgICAgdHJlc3VsdC5ieV93W3ddID0gMTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0cmVzdWx0Lm5vV29yZHMgKyBcIi9cIiArIE1BWF9XT1JEUyk7XHJcbiAgICBcclxuICAgICAgICBsZXQgbm9kZXByb21pc2UgPSBsb2FkRGljdGlvbmFyeUFuZENoaWxkcmVuKHRyZXN1bHQsIHcsIHRyYXZlcnNpb24pO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2gobm9kZXByb21pc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxldmVsIFwiK3RyYXZlcnNpb24ubGV2ZWwrXCIgZmluaXNoZWQuXCIpO1xyXG5cclxuICAgIHRyYXZlcnNpb24ubGV2ZWwrKztcclxuICB9IHdoaWxlICh0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0Lmxlbmd0aCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENsdXN0ZXIod29yZCwgYXNvYmplY3QpIHtcclxuXHJcbiAgY29uc3QgY2ZwYXRoID0gYGNhY2hlL2NsdXN0ZXJzLyR7d29yZH1gO1xyXG4gIGlmIChDQUNIRV9DTFVTVEVSUyAmJiBmcy5leGlzdHNTeW5jKGNmcGF0aCkpIHtcclxuICAgIGxldCBpanNvbiA9IGZzLnJlYWRGaWxlU3luYyhjZnBhdGgpLnRvU3RyaW5nKCk7XHJcbiAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShpanNvbik7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZyb20gY2FjaGUgZmlsZS9jbHVzdGVyIFwiK2NmcGF0aCtcIiAgYXNvYmplY3Q6XCIrYXNvYmplY3QrXCIuLi5cXG5cIik7XHJcblxyXG4gICAgaWYgKGFzb2JqZWN0KSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaWpzb247XHJcbiAgICB9XHJcblxyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgY29uc3QgYnlfZGVmID0ge307XHJcbiAgICBjb25zdCBieV93ID0ge307XHJcbiAgICBjb25zdCBieV9rZXkgPSBbXTtcclxuICAgIGxldCB0cmVzdWx0ID0ge1xyXG4gICAgICBieV9kZWYsXHJcbiAgICAgIGJ5X3cgICAgfTtcclxuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdHJhdmVyc2VDbHVzdGVyKHRyZXN1bHQsIHdvcmQpO1xyXG4gICAgYnlfa2V5LnB1c2guYXBwbHkoYnlfa2V5LCBPYmplY3QudmFsdWVzKGJ5X2RlZikpO1xyXG4gICAgY29uc3QgY21wID0gKGZpcnN0RWwsIHNlY29uZEVsKSA9PiB7XHJcbiAgICAgIHJldHVybiBmaXJzdEVsLmtleS5sb2NhbGVDb21wYXJlKHNlY29uZEVsLmtleSk7XHJcbiAgICB9O1xyXG4gICAgYnlfa2V5LnNvcnQoY21wKTtcclxuICAgIGZvciAobGV0IGRlZm9iaiBvZiBieV9rZXkpIHtcclxuICAgICAgZGVmb2JqLmNvbXByZXNzKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICBub0NsdXN0ZXJFbnRyaWVzOmJ5X2tleS5sZW5ndGgsXHJcbiAgICAgIHJlc3VsdHM6Ynlfa2V5XHJcbiAgICB9O1xyXG4gICAgaWYgKHRyZXN1bHQubWFzdGVyKSB7XHJcbiAgICAgIHJlc3VsdC5mcmVxdWVuY3kgPSB0cmVzdWx0Lm1hc3Rlci5mcmVxdWVuY3k7XHJcbiAgICAgIHJlc3VsdC5wcm9udW5jaWF0aW9uID0gdHJlc3VsdC5tYXN0ZXIucHJvbnVuY2lhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2pzb247XHJcbiAgICBpZiAoQ0FDSEVfQ0xVU1RFUlMpIHtcclxuICAgICAgY2pzb24gPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICBmcy53cml0ZUZpbGUoY2ZwYXRoLCBjanNvbiwgKGVycikgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDbHVzdGVyIGZpbGUvY2x1c3RlciBcIitjZnBhdGgrXCIgIHdyaXRlIGZhaWx1cmUgOiBcIitlcnIrXCJcXG5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2x1c3RlciBmaWxlL2NsdXN0ZXIgXCIrY2ZwYXRoK1wiICB3cml0dGVuIHN1Y2Nlc3NmdWxseVxcblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhc29iamVjdCkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFjanNvbikge1xyXG4gICAgICAgIGNqc29uID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2pzb247XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENvbW1vbldvcmQocmVzdWx0LCB3b3JkLCBub1dvcmRzKSB7XHJcblxyXG4gIGNvbnN0IGVudHJ5ID0gYXdhaXQgbG9hZFNpbmdsZVdvcmQod29yZCwgdHJ1ZSk7XHJcblxyXG4gIHJlc3VsdC5ub1dvcmRzKys7XHJcbiAgY29uc29sZS5sb2cocmVzdWx0Lm5vV29yZHMgKyBcIi9cIiArIG5vV29yZHMpO1xyXG5cclxuICBmb3IgKGxldCBrZXkgaW4gZW50cnkucmVzdWx0cykge1xyXG4gICAgY29uc3QgdmFsID0gZW50cnkucmVzdWx0c1trZXldOyBcclxuICAgIGNvbnN0IHN5bm9ueW1zID0gW10uY29uY2F0KHZhbC5zeW5vbnltcyk7XHJcbiAgICBzeW5vbnltcy5zb3J0KCk7XHJcblxyXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHtcclxuICAgICAgcGFydE9mU3BlZWNoOiB2YWwucGFydE9mU3BlZWNoLFxyXG4gICAgICBkZWZpbml0aW9uOiB2YWwuZGVmaW5pdGlvbixcclxuICAgICAgc3lub255bXNcclxuICAgIH07XHJcbiAgICByZXN1bHQubm9EZWZpbml0aW9ucysrO1xyXG4gICAgcmVzdWx0LnJlc3VsdHMucHVzaChkZWZpbml0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQ29tbW9uV29yZHMoKSB7XHJcbiAgY29uc3QgY3cgPSByZXF1aXJlKCcuL2NvbW1vbi13b3Jkcy5qcycpO1xyXG5cclxuICAvLyBjcmVhdGUgbmV3IGFycmF5IHRvIHB1c2ggZGF0YSB0b1xyXG4gIGxldCByZXN1bHRzID0gW107XHJcbiAgbGV0IHJlc3VsdCA9IHtcclxuICAgIG5vV29yZHM6MCxcclxuICAgIG5vRGVmaW5pdGlvbnM6MCxcclxuICAgIHJlc3VsdHNcclxuICB9O1xyXG5cclxuICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICBsZXQgbm9Xb3JkcyA9IE9iamVjdC5rZXlzKGN3LlRoZU1vc3RDb21tb24zMDAwKS5sZW5ndGg7XHJcbiAgZm9yIChsZXQgY29tbW9uV29yZCBpbiBjdy5UaGVNb3N0Q29tbW9uMzAwMCkge1xyXG4gICAgcHJvbWlzZXMucHVzaChsb2FkQ29tbW9uV29yZChyZXN1bHQsIGNvbW1vbldvcmQsIG5vV29yZHMpKTtcclxuICB9XHJcbiAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG52YXIgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xudmFyIGh0dHBGb2xsb3cgPSByZXF1aXJlKCdmb2xsb3ctcmVkaXJlY3RzJykuaHR0cDtcbnZhciBodHRwc0ZvbGxvdyA9IHJlcXVpcmUoJ2ZvbGxvdy1yZWRpcmVjdHMnKS5odHRwcztcbnZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbnZhciB6bGliID0gcmVxdWlyZSgnemxpYicpO1xudmFyIHBrZyA9IHJlcXVpcmUoJy4vLi4vLi4vcGFja2FnZS5qc29uJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9lbmhhbmNlRXJyb3InKTtcblxudmFyIGlzSHR0cHMgPSAvaHR0cHM6Py87XG5cbi8qZXNsaW50IGNvbnNpc3RlbnQtcmV0dXJuOjAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBodHRwQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoSHR0cFJlcXVlc3QocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpIHtcbiAgICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlKHZhbHVlKTtcbiAgICB9O1xuICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiByZWplY3QodmFsdWUpIHtcbiAgICAgIHJlamVjdFByb21pc2UodmFsdWUpO1xuICAgIH07XG4gICAgdmFyIGRhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgLy8gU2V0IFVzZXItQWdlbnQgKHJlcXVpcmVkIGJ5IHNvbWUgc2VydmVycylcbiAgICAvLyBPbmx5IHNldCBoZWFkZXIgaWYgaXQgaGFzbid0IGJlZW4gc2V0IGluIGNvbmZpZ1xuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzY5XG4gICAgaWYgKCFoZWFkZXJzWydVc2VyLUFnZW50J10gJiYgIWhlYWRlcnNbJ3VzZXItYWdlbnQnXSkge1xuICAgICAgaGVhZGVyc1snVXNlci1BZ2VudCddID0gJ2F4aW9zLycgKyBwa2cudmVyc2lvbjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSAmJiAhdXRpbHMuaXNTdHJlYW0oZGF0YSkpIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcbiAgICAgICAgLy8gTm90aGluZyB0byBkby4uLlxuICAgICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShuZXcgVWludDhBcnJheShkYXRhKSk7XG4gICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhLCAndXRmLTgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAgICAgJ0RhdGEgYWZ0ZXIgdHJhbnNmb3JtYXRpb24gbXVzdCBiZSBhIHN0cmluZywgYW4gQXJyYXlCdWZmZXIsIGEgQnVmZmVyLCBvciBhIFN0cmVhbScsXG4gICAgICAgICAgY29uZmlnXG4gICAgICAgICkpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgQ29udGVudC1MZW5ndGggaGVhZGVyIGlmIGRhdGEgZXhpc3RzXG4gICAgICBoZWFkZXJzWydDb250ZW50LUxlbmd0aCddID0gZGF0YS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIHZhciBhdXRoID0gdW5kZWZpbmVkO1xuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIGF1dGggPSB1c2VybmFtZSArICc6JyArIHBhc3N3b3JkO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIHVybFxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHZhciBwYXJzZWQgPSB1cmwucGFyc2UoZnVsbFBhdGgpO1xuICAgIHZhciBwcm90b2NvbCA9IHBhcnNlZC5wcm90b2NvbCB8fCAnaHR0cDonO1xuXG4gICAgaWYgKCFhdXRoICYmIHBhcnNlZC5hdXRoKSB7XG4gICAgICB2YXIgdXJsQXV0aCA9IHBhcnNlZC5hdXRoLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgdXJsVXNlcm5hbWUgPSB1cmxBdXRoWzBdIHx8ICcnO1xuICAgICAgdmFyIHVybFBhc3N3b3JkID0gdXJsQXV0aFsxXSB8fCAnJztcbiAgICAgIGF1dGggPSB1cmxVc2VybmFtZSArICc6JyArIHVybFBhc3N3b3JkO1xuICAgIH1cblxuICAgIGlmIChhdXRoKSB7XG4gICAgICBkZWxldGUgaGVhZGVycy5BdXRob3JpemF0aW9uO1xuICAgIH1cblxuICAgIHZhciBpc0h0dHBzUmVxdWVzdCA9IGlzSHR0cHMudGVzdChwcm90b2NvbCk7XG4gICAgdmFyIGFnZW50ID0gaXNIdHRwc1JlcXVlc3QgPyBjb25maWcuaHR0cHNBZ2VudCA6IGNvbmZpZy5odHRwQWdlbnQ7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHBhdGg6IGJ1aWxkVVJMKHBhcnNlZC5wYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKSxcbiAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIGFnZW50OiBhZ2VudCxcbiAgICAgIGFnZW50czogeyBodHRwOiBjb25maWcuaHR0cEFnZW50LCBodHRwczogY29uZmlnLmh0dHBzQWdlbnQgfSxcbiAgICAgIGF1dGg6IGF1dGhcbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZy5zb2NrZXRQYXRoKSB7XG4gICAgICBvcHRpb25zLnNvY2tldFBhdGggPSBjb25maWcuc29ja2V0UGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5ob3N0bmFtZSA9IHBhcnNlZC5ob3N0bmFtZTtcbiAgICAgIG9wdGlvbnMucG9ydCA9IHBhcnNlZC5wb3J0O1xuICAgIH1cblxuICAgIHZhciBwcm94eSA9IGNvbmZpZy5wcm94eTtcbiAgICBpZiAoIXByb3h5ICYmIHByb3h5ICE9PSBmYWxzZSkge1xuICAgICAgdmFyIHByb3h5RW52ID0gcHJvdG9jb2wuc2xpY2UoMCwgLTEpICsgJ19wcm94eSc7XG4gICAgICB2YXIgcHJveHlVcmwgPSBwcm9jZXNzLmVudltwcm94eUVudl0gfHwgcHJvY2Vzcy5lbnZbcHJveHlFbnYudG9VcHBlckNhc2UoKV07XG4gICAgICBpZiAocHJveHlVcmwpIHtcbiAgICAgICAgdmFyIHBhcnNlZFByb3h5VXJsID0gdXJsLnBhcnNlKHByb3h5VXJsKTtcbiAgICAgICAgdmFyIG5vUHJveHlFbnYgPSBwcm9jZXNzLmVudi5ub19wcm94eSB8fCBwcm9jZXNzLmVudi5OT19QUk9YWTtcbiAgICAgICAgdmFyIHNob3VsZFByb3h5ID0gdHJ1ZTtcblxuICAgICAgICBpZiAobm9Qcm94eUVudikge1xuICAgICAgICAgIHZhciBub1Byb3h5ID0gbm9Qcm94eUVudi5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiB0cmltKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnRyaW0oKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNob3VsZFByb3h5ID0gIW5vUHJveHkuc29tZShmdW5jdGlvbiBwcm94eU1hdGNoKHByb3h5RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFwcm94eUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3h5RWxlbWVudCA9PT0gJyonKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3h5RWxlbWVudFswXSA9PT0gJy4nICYmXG4gICAgICAgICAgICAgICAgcGFyc2VkLmhvc3RuYW1lLnN1YnN0cihwYXJzZWQuaG9zdG5hbWUubGVuZ3RoIC0gcHJveHlFbGVtZW50Lmxlbmd0aCkgPT09IHByb3h5RWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5ob3N0bmFtZSA9PT0gcHJveHlFbGVtZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoc2hvdWxkUHJveHkpIHtcbiAgICAgICAgICBwcm94eSA9IHtcbiAgICAgICAgICAgIGhvc3Q6IHBhcnNlZFByb3h5VXJsLmhvc3RuYW1lLFxuICAgICAgICAgICAgcG9ydDogcGFyc2VkUHJveHlVcmwucG9ydFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocGFyc2VkUHJveHlVcmwuYXV0aCkge1xuICAgICAgICAgICAgdmFyIHByb3h5VXJsQXV0aCA9IHBhcnNlZFByb3h5VXJsLmF1dGguc3BsaXQoJzonKTtcbiAgICAgICAgICAgIHByb3h5LmF1dGggPSB7XG4gICAgICAgICAgICAgIHVzZXJuYW1lOiBwcm94eVVybEF1dGhbMF0sXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiBwcm94eVVybEF1dGhbMV1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3h5KSB7XG4gICAgICBvcHRpb25zLmhvc3RuYW1lID0gcHJveHkuaG9zdDtcbiAgICAgIG9wdGlvbnMuaG9zdCA9IHByb3h5Lmhvc3Q7XG4gICAgICBvcHRpb25zLmhlYWRlcnMuaG9zdCA9IHBhcnNlZC5ob3N0bmFtZSArIChwYXJzZWQucG9ydCA/ICc6JyArIHBhcnNlZC5wb3J0IDogJycpO1xuICAgICAgb3B0aW9ucy5wb3J0ID0gcHJveHkucG9ydDtcbiAgICAgIG9wdGlvbnMucGF0aCA9IHByb3RvY29sICsgJy8vJyArIHBhcnNlZC5ob3N0bmFtZSArIChwYXJzZWQucG9ydCA/ICc6JyArIHBhcnNlZC5wb3J0IDogJycpICsgb3B0aW9ucy5wYXRoO1xuXG4gICAgICAvLyBCYXNpYyBwcm94eSBhdXRob3JpemF0aW9uXG4gICAgICBpZiAocHJveHkuYXV0aCkge1xuICAgICAgICB2YXIgYmFzZTY0ID0gQnVmZmVyLmZyb20ocHJveHkuYXV0aC51c2VybmFtZSArICc6JyArIHByb3h5LmF1dGgucGFzc3dvcmQsICd1dGY4JykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ1Byb3h5LUF1dGhvcml6YXRpb24nXSA9ICdCYXNpYyAnICsgYmFzZTY0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0cmFuc3BvcnQ7XG4gICAgdmFyIGlzSHR0cHNQcm94eSA9IGlzSHR0cHNSZXF1ZXN0ICYmIChwcm94eSA/IGlzSHR0cHMudGVzdChwcm94eS5wcm90b2NvbCkgOiB0cnVlKTtcbiAgICBpZiAoY29uZmlnLnRyYW5zcG9ydCkge1xuICAgICAgdHJhbnNwb3J0ID0gY29uZmlnLnRyYW5zcG9ydDtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5tYXhSZWRpcmVjdHMgPT09IDApIHtcbiAgICAgIHRyYW5zcG9ydCA9IGlzSHR0cHNQcm94eSA/IGh0dHBzIDogaHR0cDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbmZpZy5tYXhSZWRpcmVjdHMpIHtcbiAgICAgICAgb3B0aW9ucy5tYXhSZWRpcmVjdHMgPSBjb25maWcubWF4UmVkaXJlY3RzO1xuICAgICAgfVxuICAgICAgdHJhbnNwb3J0ID0gaXNIdHRwc1Byb3h5ID8gaHR0cHNGb2xsb3cgOiBodHRwRm9sbG93O1xuICAgIH1cblxuICAgIGlmIChjb25maWcubWF4Q29udGVudExlbmd0aCAmJiBjb25maWcubWF4Q29udGVudExlbmd0aCA+IC0xKSB7XG4gICAgICBvcHRpb25zLm1heEJvZHlMZW5ndGggPSBjb25maWcubWF4Q29udGVudExlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdGhlIHJlcXVlc3RcbiAgICB2YXIgcmVxID0gdHJhbnNwb3J0LnJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzKSB7XG4gICAgICBpZiAocmVxLmFib3J0ZWQpIHJldHVybjtcblxuICAgICAgLy8gdW5jb21wcmVzcyB0aGUgcmVzcG9uc2UgYm9keSB0cmFuc3BhcmVudGx5IGlmIHJlcXVpcmVkXG4gICAgICB2YXIgc3RyZWFtID0gcmVzO1xuICAgICAgc3dpdGNoIChyZXMuaGVhZGVyc1snY29udGVudC1lbmNvZGluZyddKSB7XG4gICAgICAvKmVzbGludCBkZWZhdWx0LWNhc2U6MCovXG4gICAgICBjYXNlICdnemlwJzpcbiAgICAgIGNhc2UgJ2NvbXByZXNzJzpcbiAgICAgIGNhc2UgJ2RlZmxhdGUnOlxuICAgICAgICAvLyBhZGQgdGhlIHVuemlwcGVyIHRvIHRoZSBib2R5IHN0cmVhbSBwcm9jZXNzaW5nIHBpcGVsaW5lXG4gICAgICAgIHN0cmVhbSA9IChyZXMuc3RhdHVzQ29kZSA9PT0gMjA0KSA/IHN0cmVhbSA6IHN0cmVhbS5waXBlKHpsaWIuY3JlYXRlVW56aXAoKSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBjb250ZW50LWVuY29kaW5nIGluIG9yZGVyIHRvIG5vdCBjb25mdXNlIGRvd25zdHJlYW0gb3BlcmF0aW9uc1xuICAgICAgICBkZWxldGUgcmVzLmhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIHJldHVybiB0aGUgbGFzdCByZXF1ZXN0IGluIGNhc2Ugb2YgcmVkaXJlY3RzXG4gICAgICB2YXIgbGFzdFJlcXVlc3QgPSByZXMucmVxIHx8IHJlcTtcblxuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzTWVzc2FnZSxcbiAgICAgICAgaGVhZGVyczogcmVzLmhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiBsYXN0UmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICdzdHJlYW0nKSB7XG4gICAgICAgIHJlc3BvbnNlLmRhdGEgPSBzdHJlYW07XG4gICAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXNwb25zZUJ1ZmZlciA9IFtdO1xuICAgICAgICBzdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1EYXRhKGNodW5rKSB7XG4gICAgICAgICAgcmVzcG9uc2VCdWZmZXIucHVzaChjaHVuayk7XG5cbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGNvbnRlbnQgbGVuZ3RoIGlzIG5vdCBvdmVyIHRoZSBtYXhDb250ZW50TGVuZ3RoIGlmIHNwZWNpZmllZFxuICAgICAgICAgIGlmIChjb25maWcubWF4Q29udGVudExlbmd0aCA+IC0xICYmIEJ1ZmZlci5jb25jYXQocmVzcG9uc2VCdWZmZXIpLmxlbmd0aCA+IGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICBzdHJlYW0uZGVzdHJveSgpO1xuICAgICAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdtYXhDb250ZW50TGVuZ3RoIHNpemUgb2YgJyArIGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoICsgJyBleGNlZWRlZCcsXG4gICAgICAgICAgICAgIGNvbmZpZywgbnVsbCwgbGFzdFJlcXVlc3QpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0cmVhbS5vbignZXJyb3InLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1FcnJvcihlcnIpIHtcbiAgICAgICAgICBpZiAocmVxLmFib3J0ZWQpIHJldHVybjtcbiAgICAgICAgICByZWplY3QoZW5oYW5jZUVycm9yKGVyciwgY29uZmlnLCBudWxsLCBsYXN0UmVxdWVzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uIGhhbmRsZVN0cmVhbUVuZCgpIHtcbiAgICAgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gQnVmZmVyLmNvbmNhdChyZXNwb25zZUJ1ZmZlcik7XG4gICAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdhcnJheWJ1ZmZlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlRGF0YS50b1N0cmluZyhjb25maWcucmVzcG9uc2VFbmNvZGluZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHJlc3BvbnNlRGF0YTtcbiAgICAgICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIGVycm9yc1xuICAgIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0RXJyb3IoZXJyKSB7XG4gICAgICBpZiAocmVxLmFib3J0ZWQpIHJldHVybjtcbiAgICAgIHJlamVjdChlbmhhbmNlRXJyb3IoZXJyLCBjb25maWcsIG51bGwsIHJlcSkpO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHJlcXVlc3QgdGltZW91dFxuICAgIGlmIChjb25maWcudGltZW91dCkge1xuICAgICAgLy8gU29tZXRpbWUsIHRoZSByZXNwb25zZSB3aWxsIGJlIHZlcnkgc2xvdywgYW5kIGRvZXMgbm90IHJlc3BvbmQsIHRoZSBjb25uZWN0IGV2ZW50IHdpbGwgYmUgYmxvY2sgYnkgZXZlbnQgbG9vcCBzeXN0ZW0uXG4gICAgICAvLyBBbmQgdGltZXIgY2FsbGJhY2sgd2lsbCBiZSBmaXJlZCwgYW5kIGFib3J0KCkgd2lsbCBiZSBpbnZva2VkIGJlZm9yZSBjb25uZWN0aW9uLCB0aGVuIGdldCBcInNvY2tldCBoYW5nIHVwXCIgYW5kIGNvZGUgRUNPTk5SRVNFVC5cbiAgICAgIC8vIEF0IHRoaXMgdGltZSwgaWYgd2UgaGF2ZSBhIGxhcmdlIG51bWJlciBvZiByZXF1ZXN0LCBub2RlanMgd2lsbCBoYW5nIHVwIHNvbWUgc29ja2V0IG9uIGJhY2tncm91bmQuIGFuZCB0aGUgbnVtYmVyIHdpbGwgdXAgYW5kIHVwLlxuICAgICAgLy8gQW5kIHRoZW4gdGhlc2Ugc29ja2V0IHdoaWNoIGJlIGhhbmcgdXAgd2lsbCBkZXZvcmluZyBDUFUgbGl0dGxlIGJ5IGxpdHRsZS5cbiAgICAgIC8vIENsaWVudFJlcXVlc3Quc2V0VGltZW91dCB3aWxsIGJlIGZpcmVkIG9uIHRoZSBzcGVjaWZ5IG1pbGxpc2Vjb25kcywgYW5kIGNhbiBtYWtlIHN1cmUgdGhhdCBhYm9ydCgpIHdpbGwgYmUgZmlyZWQgYWZ0ZXIgY29ubmVjdC5cbiAgICAgIHJlcS5zZXRUaW1lb3V0KGNvbmZpZy50aW1lb3V0LCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0VGltZW91dCgpIHtcbiAgICAgICAgcmVxLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXEpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKHJlcS5hYm9ydGVkKSByZXR1cm47XG5cbiAgICAgICAgcmVxLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIGlmICh1dGlscy5pc1N0cmVhbShkYXRhKSkge1xuICAgICAgZGF0YS5vbignZXJyb3InLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1FcnJvcihlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVuaGFuY2VFcnJvcihlcnIsIGNvbmZpZywgbnVsbCwgcmVxKSk7XG4gICAgICB9KS5waXBlKHJlcSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcS5lbmQoZGF0YSk7XG4gICAgfVxuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpOyIsIi8qKlxuICogRGV0ZWN0IEVsZWN0cm9uIHJlbmRlcmVyIHByb2Nlc3MsIHdoaWNoIGlzIG5vZGUsIGJ1dCB3ZSBzaG91bGRcbiAqIHRyZWF0IGFzIGEgYnJvd3Nlci5cbiAqL1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYnJvd3Nlci5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL25vZGUuanMnKTtcbn1cbiIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJyMwMDAwQ0MnLCAnIzAwMDBGRicsICcjMDAzM0NDJywgJyMwMDMzRkYnLCAnIzAwNjZDQycsICcjMDA2NkZGJywgJyMwMDk5Q0MnLFxuICAnIzAwOTlGRicsICcjMDBDQzAwJywgJyMwMENDMzMnLCAnIzAwQ0M2NicsICcjMDBDQzk5JywgJyMwMENDQ0MnLCAnIzAwQ0NGRicsXG4gICcjMzMwMENDJywgJyMzMzAwRkYnLCAnIzMzMzNDQycsICcjMzMzM0ZGJywgJyMzMzY2Q0MnLCAnIzMzNjZGRicsICcjMzM5OUNDJyxcbiAgJyMzMzk5RkYnLCAnIzMzQ0MwMCcsICcjMzNDQzMzJywgJyMzM0NDNjYnLCAnIzMzQ0M5OScsICcjMzNDQ0NDJywgJyMzM0NDRkYnLFxuICAnIzY2MDBDQycsICcjNjYwMEZGJywgJyM2NjMzQ0MnLCAnIzY2MzNGRicsICcjNjZDQzAwJywgJyM2NkNDMzMnLCAnIzk5MDBDQycsXG4gICcjOTkwMEZGJywgJyM5OTMzQ0MnLCAnIzk5MzNGRicsICcjOTlDQzAwJywgJyM5OUNDMzMnLCAnI0NDMDAwMCcsICcjQ0MwMDMzJyxcbiAgJyNDQzAwNjYnLCAnI0NDMDA5OScsICcjQ0MwMENDJywgJyNDQzAwRkYnLCAnI0NDMzMwMCcsICcjQ0MzMzMzJywgJyNDQzMzNjYnLFxuICAnI0NDMzM5OScsICcjQ0MzM0NDJywgJyNDQzMzRkYnLCAnI0NDNjYwMCcsICcjQ0M2NjMzJywgJyNDQzk5MDAnLCAnI0NDOTkzMycsXG4gICcjQ0NDQzAwJywgJyNDQ0NDMzMnLCAnI0ZGMDAwMCcsICcjRkYwMDMzJywgJyNGRjAwNjYnLCAnI0ZGMDA5OScsICcjRkYwMENDJyxcbiAgJyNGRjAwRkYnLCAnI0ZGMzMwMCcsICcjRkYzMzMzJywgJyNGRjMzNjYnLCAnI0ZGMzM5OScsICcjRkYzM0NDJywgJyNGRjMzRkYnLFxuICAnI0ZGNjYwMCcsICcjRkY2NjMzJywgJyNGRjk5MDAnLCAnI0ZGOTkzMycsICcjRkZDQzAwJywgJyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgTm9kZS5qcyBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFsgNiwgMiwgMywgNCwgNSwgMSBdO1xuXG50cnkge1xuICB2YXIgc3VwcG9ydHNDb2xvciA9IHJlcXVpcmUoJ3N1cHBvcnRzLWNvbG9yJyk7XG4gIGlmIChzdXBwb3J0c0NvbG9yICYmIHN1cHBvcnRzQ29sb3IubGV2ZWwgPj0gMikge1xuICAgIGV4cG9ydHMuY29sb3JzID0gW1xuICAgICAgMjAsIDIxLCAyNiwgMjcsIDMyLCAzMywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1LCA1NiwgNTcsIDYyLCA2MywgNjgsXG4gICAgICA2OSwgNzQsIDc1LCA3NiwgNzcsIDc4LCA3OSwgODAsIDgxLCA5MiwgOTMsIDk4LCA5OSwgMTEyLCAxMTMsIDEyOCwgMTI5LCAxMzQsXG4gICAgICAxMzUsIDE0OCwgMTQ5LCAxNjAsIDE2MSwgMTYyLCAxNjMsIDE2NCwgMTY1LCAxNjYsIDE2NywgMTY4LCAxNjksIDE3MCwgMTcxLFxuICAgICAgMTcyLCAxNzMsIDE3OCwgMTc5LCAxODQsIDE4NSwgMTk2LCAxOTcsIDE5OCwgMTk5LCAyMDAsIDIwMSwgMjAyLCAyMDMsIDIwNCxcbiAgICAgIDIwNSwgMjA2LCAyMDcsIDIwOCwgMjA5LCAyMTQsIDIxNSwgMjIwLCAyMjFcbiAgICBdO1xuICB9XG59IGNhdGNoIChlcnIpIHtcbiAgLy8gc3dhbGxvdyAtIHdlIG9ubHkgY2FyZSBpZiBgc3VwcG9ydHMtY29sb3JgIGlzIGF2YWlsYWJsZTsgaXQgZG9lc24ndCBoYXZlIHRvIGJlLlxufVxuXG4vKipcbiAqIEJ1aWxkIHVwIHRoZSBkZWZhdWx0IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGZyb20gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiAgICQgREVCVUdfQ09MT1JTPW5vIERFQlVHX0RFUFRIPTEwIERFQlVHX1NIT1dfSElEREVOPWVuYWJsZWQgbm9kZSBzY3JpcHQuanNcbiAqL1xuXG5leHBvcnRzLmluc3BlY3RPcHRzID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAvXmRlYnVnXy9pLnRlc3Qoa2V5KTtcbn0pLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgLy8gY2FtZWwtY2FzZVxuICB2YXIgcHJvcCA9IGtleVxuICAgIC5zdWJzdHJpbmcoNilcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9fKFthLXpdKS9nLCBmdW5jdGlvbiAoXywgaykgeyByZXR1cm4gay50b1VwcGVyQ2FzZSgpIH0pO1xuXG4gIC8vIGNvZXJjZSBzdHJpbmcgdmFsdWUgaW50byBKUyB2YWx1ZVxuICB2YXIgdmFsID0gcHJvY2Vzcy5lbnZba2V5XTtcbiAgaWYgKC9eKHllc3xvbnx0cnVlfGVuYWJsZWQpJC9pLnRlc3QodmFsKSkgdmFsID0gdHJ1ZTtcbiAgZWxzZSBpZiAoL14obm98b2ZmfGZhbHNlfGRpc2FibGVkKSQvaS50ZXN0KHZhbCkpIHZhbCA9IGZhbHNlO1xuICBlbHNlIGlmICh2YWwgPT09ICdudWxsJykgdmFsID0gbnVsbDtcbiAgZWxzZSB2YWwgPSBOdW1iZXIodmFsKTtcblxuICBvYmpbcHJvcF0gPSB2YWw7XG4gIHJldHVybiBvYmo7XG59LCB7fSk7XG5cbi8qKlxuICogSXMgc3Rkb3V0IGEgVFRZPyBDb2xvcmVkIG91dHB1dCBpcyBlbmFibGVkIHdoZW4gYHRydWVgLlxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgcmV0dXJuICdjb2xvcnMnIGluIGV4cG9ydHMuaW5zcGVjdE9wdHNcbiAgICA/IEJvb2xlYW4oZXhwb3J0cy5pbnNwZWN0T3B0cy5jb2xvcnMpXG4gICAgOiB0dHkuaXNhdHR5KHByb2Nlc3Muc3RkZXJyLmZkKTtcbn1cblxuLyoqXG4gKiBNYXAgJW8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsIG9uIGEgc2luZ2xlIGxpbmUuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLm8gPSBmdW5jdGlvbih2KSB7XG4gIHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG4gIHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cylcbiAgICAuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBzdHIudHJpbSgpXG4gICAgfSkuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBNYXAgJW8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsb3dpbmcgbXVsdGlwbGUgbGluZXMgaWYgbmVlZGVkLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5PID0gZnVuY3Rpb24odikge1xuICB0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuICByZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcblxuLyoqXG4gKiBBZGRzIEFOU0kgY29sb3IgZXNjYXBlIGNvZGVzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVzcGFjZTtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGlmICh1c2VDb2xvcnMpIHtcbiAgICB2YXIgYyA9IHRoaXMuY29sb3I7XG4gICAgdmFyIGNvbG9yQ29kZSA9ICdcXHUwMDFiWzMnICsgKGMgPCA4ID8gYyA6ICc4OzU7JyArIGMpO1xuICAgIHZhciBwcmVmaXggPSAnICAnICsgY29sb3JDb2RlICsgJzsxbScgKyBuYW1lICsgJyAnICsgJ1xcdTAwMWJbMG0nO1xuXG4gICAgYXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuICAgIGFyZ3MucHVzaChjb2xvckNvZGUgKyAnbSsnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpICsgJ1xcdTAwMWJbMG0nKTtcbiAgfSBlbHNlIHtcbiAgICBhcmdzWzBdID0gZ2V0RGF0ZSgpICsgbmFtZSArICcgJyArIGFyZ3NbMF07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgaWYgKGV4cG9ydHMuaW5zcGVjdE9wdHMuaGlkZURhdGUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSArICcgJztcbiAgfVxufVxuXG4vKipcbiAqIEludm9rZXMgYHV0aWwuZm9ybWF0KClgIHdpdGggdGhlIHNwZWNpZmllZCBhcmd1bWVudHMgYW5kIHdyaXRlcyB0byBzdGRlcnIuXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICByZXR1cm4gcHJvY2Vzcy5zdGRlcnIud3JpdGUodXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgYXJndW1lbnRzKSArICdcXG4nKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAvLyBJZiB5b3Ugc2V0IGEgcHJvY2Vzcy5lbnYgZmllbGQgdG8gbnVsbCBvciB1bmRlZmluZWQsIGl0IGdldHMgY2FzdCB0byB0aGVcbiAgICAvLyBzdHJpbmcgJ251bGwnIG9yICd1bmRlZmluZWQnLiBKdXN0IGRlbGV0ZSBpbnN0ZWFkLlxuICAgIGRlbGV0ZSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzLmVudi5ERUJVRyA9IG5hbWVzcGFjZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuREVCVUc7XG59XG5cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gaW5pdCAoZGVidWcpIHtcbiAgZGVidWcuaW5zcGVjdE9wdHMgPSB7fTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuaW5zcGVjdE9wdHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBkZWJ1Zy5pbnNwZWN0T3B0c1trZXlzW2ldXSA9IGV4cG9ydHMuaW5zcGVjdE9wdHNba2V5c1tpXV07XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYHByb2Nlc3MuZW52LkRFQlVHYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOyIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IGhhc0ZsYWcgPSByZXF1aXJlKCdoYXMtZmxhZycpO1xuXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudjtcblxubGV0IGZvcmNlQ29sb3I7XG5pZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fFxuXHRoYXNGbGFnKCduby1jb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1mYWxzZScpKSB7XG5cdGZvcmNlQ29sb3IgPSBmYWxzZTtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fFxuXHRoYXNGbGFnKCdjb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj10cnVlJykgfHxcblx0aGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcblx0Zm9yY2VDb2xvciA9IHRydWU7XG59XG5pZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcblx0Zm9yY2VDb2xvciA9IGVudi5GT1JDRV9DT0xPUi5sZW5ndGggPT09IDAgfHwgcGFyc2VJbnQoZW52LkZPUkNFX0NPTE9SLCAxMCkgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxldmVsKGxldmVsKSB7XG5cdGlmIChsZXZlbCA9PT0gMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bGV2ZWwsXG5cdFx0aGFzQmFzaWM6IHRydWUsXG5cdFx0aGFzMjU2OiBsZXZlbCA+PSAyLFxuXHRcdGhhczE2bTogbGV2ZWwgPj0gM1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0NvbG9yKHN0cmVhbSkge1xuXHRpZiAoZm9yY2VDb2xvciA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0xNm0nKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPWZ1bGwnKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPXRydWVjb2xvcicpKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmIChzdHJlYW0gJiYgIXN0cmVhbS5pc1RUWSAmJiBmb3JjZUNvbG9yICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBtaW4gPSBmb3JjZUNvbG9yID8gMSA6IDA7XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcblx0XHQvLyBOb2RlLmpzIDcuNS4wIGlzIHRoZSBmaXJzdCB2ZXJzaW9uIG9mIE5vZGUuanMgdG8gaW5jbHVkZSBhIHBhdGNoIHRvXG5cdFx0Ly8gbGlidXYgdGhhdCBlbmFibGVzIDI1NiBjb2xvciBvdXRwdXQgb24gV2luZG93cy4gQW55dGhpbmcgZWFybGllciBhbmQgaXRcblx0XHQvLyB3b24ndCB3b3JrLiBIb3dldmVyLCBoZXJlIHdlIHRhcmdldCBOb2RlLmpzIDggYXQgbWluaW11bSBhcyBpdCBpcyBhbiBMVFNcblx0XHQvLyByZWxlYXNlLCBhbmQgTm9kZS5qcyA3IGlzIG5vdC4gV2luZG93cyAxMCBidWlsZCAxMDU4NiBpcyB0aGUgZmlyc3QgV2luZG93c1xuXHRcdC8vIHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAyNTYgY29sb3JzLiBXaW5kb3dzIDEwIGJ1aWxkIDE0OTMxIGlzIHRoZSBmaXJzdCByZWxlYXNlXG5cdFx0Ly8gdGhhdCBzdXBwb3J0cyAxNm0vVHJ1ZUNvbG9yLlxuXHRcdGNvbnN0IG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xuXHRcdGlmIChcblx0XHRcdE51bWJlcihwcm9jZXNzLnZlcnNpb25zLm5vZGUuc3BsaXQoJy4nKVswXSkgPj0gOCAmJlxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMl0pID49IDEwNTg2XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTQ5MzEgPyAzIDogMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ0knIGluIGVudikge1xuXHRcdGlmIChbJ1RSQVZJUycsICdDSVJDTEVDSScsICdBUFBWRVlPUicsICdHSVRMQUJfQ0knXS5zb21lKHNpZ24gPT4gc2lnbiBpbiBlbnYpIHx8IGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKCdURUFNQ0lUWV9WRVJTSU9OJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gL14oOVxcLigwKlsxLTldXFxkKilcXC58XFxkezIsfVxcLikvLnRlc3QoZW52LlRFQU1DSVRZX1ZFUlNJT04pID8gMSA6IDA7XG5cdH1cblxuXHRpZiAoZW52LkNPTE9SVEVSTSA9PT0gJ3RydWVjb2xvcicpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmICgnVEVSTV9QUk9HUkFNJyBpbiBlbnYpIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gcGFyc2VJbnQoKGVudi5URVJNX1BST0dSQU1fVkVSU0lPTiB8fCAnJykuc3BsaXQoJy4nKVswXSwgMTApO1xuXG5cdFx0c3dpdGNoIChlbnYuVEVSTV9QUk9HUkFNKSB7XG5cdFx0XHRjYXNlICdpVGVybS5hcHAnOlxuXHRcdFx0XHRyZXR1cm4gdmVyc2lvbiA+PSAzID8gMyA6IDI7XG5cdFx0XHRjYXNlICdBcHBsZV9UZXJtaW5hbCc6XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdH1cblx0fVxuXG5cdGlmICgvLTI1Nihjb2xvcik/JC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoL15zY3JlZW58Xnh0ZXJtfF52dDEwMHxednQyMjB8XnJ4dnR8Y29sb3J8YW5zaXxjeWd3aW58bGludXgvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDT0xPUlRFUk0nIGluIGVudikge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKGVudi5URVJNID09PSAnZHVtYicpIHtcblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0cmV0dXJuIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydExldmVsKHN0cmVhbSkge1xuXHRjb25zdCBsZXZlbCA9IHN1cHBvcnRzQ29sb3Ioc3RyZWFtKTtcblx0cmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN1cHBvcnRzQ29sb3I6IGdldFN1cHBvcnRMZXZlbCxcblx0c3Rkb3V0OiBnZXRTdXBwb3J0TGV2ZWwocHJvY2Vzcy5zdGRvdXQpLFxuXHRzdGRlcnI6IGdldFN1cHBvcnRMZXZlbChwcm9jZXNzLnN0ZGVycilcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTsiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IChmbGFnLCBhcmd2KSA9PiB7XG5cdGFyZ3YgPSBhcmd2IHx8IHByb2Nlc3MuYXJndjtcblx0Y29uc3QgcHJlZml4ID0gZmxhZy5zdGFydHNXaXRoKCctJykgPyAnJyA6IChmbGFnLmxlbmd0aCA9PT0gMSA/ICctJyA6ICctLScpO1xuXHRjb25zdCBwb3MgPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cdGNvbnN0IHRlcm1pbmF0b3JQb3MgPSBhcmd2LmluZGV4T2YoJy0tJyk7XG5cdHJldHVybiBwb3MgIT09IC0xICYmICh0ZXJtaW5hdG9yUG9zID09PSAtMSA/IHRydWUgOiBwb3MgPCB0ZXJtaW5hdG9yUG9zKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6bGliXCIpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCJjb25zdCBGaW5kRmlsZXMgPSByZXF1aXJlKFwibm9kZS1maW5kLWZpbGVzXCIpO1xyXG5cclxuZXhwb3J0IGxldCBjbnQ9MCxlcnJvcnM9MDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlsZXMocm9vdEZvbGRlciwgZmlsZU1vZGlmaWVkRGF0ZSwgb25GaWxlKSB7XHJcbiAgICB2YXIgZmluZGVyID0gbmV3IEZpbmRGaWxlcyh7XHJcbiAgICAgICAgcm9vdEZvbGRlcixcclxuICAgICAgICBmaWxlTW9kaWZpZWREYXRlXHJcbiAgICB9KTtcclxuICAgIHZhciByZXN1bHQscmVzb2x2ZSxyZWplY3Q7XHJcbiAgICBjbnQ9MDsgZXJyb3JzPTA7XHJcblxyXG4gICAgZmluZGVyLm9uKFwibWF0Y2hcIiwgZnVuY3Rpb24oc3RyUGF0aCwgc3RhdCkge1xyXG4gICAgICAgIGlmIChvbkZpbGUpIG9uRmlsZShzdHJQYXRoLCBzdGF0KTtcclxuICAgICAgICBjbnQrKztcclxuICAgIH0pO1xyXG4gICAgZmluZGVyLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmVzb2x2ZShjbnQpO1xyXG4gICAgfSk7XHJcbiAgICBmaW5kZXIub24oXCJwYXRoZXJyb3JcIiwgZnVuY3Rpb24oZXJyLCBzdHJQYXRoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmb3IgUGF0aCBcIiArIHN0clBhdGggKyBcIiBcIiArIGVycik7ICAvLyBOb3RlIHRoYXQgYW4gZXJyb3IgaW4gYWNjZXNzaW5nIGEgcGFydGljdWxhciBmaWxlIGRvZXMgbm90IHN0b3AgdGhlIHdob2xlIHNob3dcclxuICAgICAgICBlcnJvcnMrKztcclxuICAgIH0pO1xyXG4gICAgZmluZGVyLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWwgRXJyb3IgXCIgKyBlcnIpO1xyXG4gICAgICAgIGVycm9ycysrO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzdWx0ID0gbmV3IFByb21pc2UoKF9yZXNvbHZlLF9yZWplY3QpPT57XHJcbiAgICAgICAgcmVzb2x2ZSA9IF9yZXNvbHZlO1xyXG4gICAgICAgIHJlamVjdCA9IF9yZWplY3Q7XHJcbiAgICAgICAgZmluZGVyLnN0YXJ0U2VhcmNoKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5jb25zdCBmc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJmc1wiKSk7XG5jb25zdCBhc3luY18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJhc3luY1wiKSk7XG5jb25zdCBwYXRoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInBhdGhcIikpO1xuY29uc3QgZXZlbnRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImV2ZW50c1wiKSk7XG52YXIgRXZlbnRFbWl0dGVyID0gZXZlbnRzXzEuZGVmYXVsdC5FdmVudEVtaXR0ZXI7XG4vKioqXG4gKiBUaGlzIGNsYXNzIHJlY3Vyc2l2ZWx5IGZpbmRzIGZpbGVzIHRoYXQgbWF0Y2ggdGhlIGZpbHRlciBmdW5jdGlvbiBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yXG4gKiBBbiBhbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciB0YWtlcyBhIGZpbGVNb2RpZmllZERhdGUgYW5kIHJldHVybnMgYWxsIGZpbGVzIHRoYXQgaGF2ZSBiZWVuIG1vZGlmaWVkIHNpbmNlIHRoYXQgZGF0ZVxuICogdGhpcyBjbGFzcyBlbWl0cyBhIG51bWJlciBvZiBldmVudHNcbiAqIG9uIFwibWF0Y2hcIiBpcyBlbWl0dGVkIGZvciBldmVyeSBwYXRoIHRoYXQgbWF0Y2hlc1xuICovXG5jbGFzcyBmaW5kZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZmlsZU1vZGlmaWVkRGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXJGdW5jdGlvbiA9IChzdHJQYXRoLCBmc1N0YXQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGZzU3RhdC5tdGltZSA+IG9wdGlvbnMuZmlsZU1vZGlmaWVkRGF0ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5maWx0ZXJGdW5jdGlvbikge1xuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXJGdW5jdGlvbiA9ICgpID0+IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgc3RhcnRTZWFyY2goKSB7XG4gICAgICAgIHRoaXMucmVjdXJzZUZvbGRlcih0aGlzLm9wdGlvbnMucm9vdEZvbGRlciwgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRoaXMgU2hvdWxkIENhbGwgd2hlbiBldmVyeXRoaW5nIGlzIGZpbmlzaGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWN1cnNlRm9sZGVyKHN0ckZvbGRlck5hbWUsIGZvbGRlckNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgZnNfMS5kZWZhdWx0LnJlYWRkaXIoc3RyRm9sZGVyTmFtZSwgKGVyciwgZmlsZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGVyciwgc3RyRm9sZGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGRlckNvbXBsZXRlQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZmlsZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sZGVyQ29tcGxldGVDYWxsYmFjayhudWxsKTsgLy8gVGhpcyBpcyBqdXN0IGFuIGVtcHR5IGZvbGRlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXN5bmNfMS5kZWZhdWx0LmVhY2goZmlsZXMsIChmaWxlLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJQYXRoID0gcGF0aF8xLmRlZmF1bHQuam9pbihzdHJGb2xkZXJOYW1lLCBmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBhdGhFcnJvcihlLCBzdHJQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpOyAvLyBEb24ndCByZXR1cm4gZXJyb3IgdG8gY2FsbGJhY2sgb3Igd2Ugd2lsbCBtaXNzIG90aGVyIGZpbGVzIGluIGRpcmVjdG9yeVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm9uRmlsZUZvdW5kKHN0clBhdGgsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25QYXRoRXJyb3IoZXJyLCBzdHJGb2xkZXJOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIGlmKHN0ckZvbGRlck5hbWUubGVuZ3RoIDwgMjApXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkIFwiICsgc3RyRm9sZGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGRlckNvbXBsZXRlQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25GaWxlRm91bmQoc3RyUGF0aCwgY2FsbGJhY2spIHtcbiAgICAgICAgZnNfMS5kZWZhdWx0LmxzdGF0KHN0clBhdGgsIChlcnIsIHN0YXQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGVyciwgc3RyUGF0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpOyAvLyBEb24ndCByZXR1cm4gZXJyb3IgdG8gY2FsbGJhY2sgb3Igd2Ugd2lsbCBtaXNzIG90aGVyIGZpbGVzIGluIGRpcmVjdG9yeVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhdGhFcnJvcihuZXcgRXJyb3IoXCJDb3VsZCBub3QgZ2V0IHN0YXQgZm9yIGZpbGUgXCIgKyBzdHJQYXRoKSwgc3RyUGF0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpOyAvLyBEb24ndCByZXR1cm4gZXJyb3IgdG8gY2FsbGJhY2sgb3Igd2Ugd2lsbCBtaXNzIG90aGVyIGZpbGVzIGluIGRpcmVjdG9yeVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tNYXRjaChzdHJQYXRoLCBzdGF0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3Vyc2VGb2xkZXIoc3RyUGF0aCwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGVyciwgc3RyUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja01hdGNoKHN0clBhdGgsIHN0YXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoZWNrTWF0Y2goc3RyUGF0aCwgc3RhdCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWx0ZXJGdW5jdGlvbihzdHJQYXRoLCBzdGF0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcIm1hdGNoXCIsIHN0clBhdGgsIHN0YXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGUsIHN0clBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uUGF0aEVycm9yKGVyciwgc3RyUGF0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwicGF0aGVycm9yXCIsIGVyciwgc3RyUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vQWxyZWFkeSBlbWl0dGVkIGEgcGF0aCBlcnJvciBhbmQgdGhlIGhhbmRsZXIgZmFpbGVkIG11c3Qgbm90IHRocm93IGVycm9yIG9yIG90aGVyIGZpbGVzIHdpbGwgZmFpbCB0byBwcm9jZXNzIHRvb1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwiRXJyb3IgaW4gcGF0aCBFcnJvciBIYW5kbGVyXCIgKyBlKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUtZmluZC1maWxlcy5qcy5tYXAiLCIvKmdsb2JhbCBzZXRJbW1lZGlhdGU6IGZhbHNlLCBzZXRUaW1lb3V0OiBmYWxzZSwgY29uc29sZTogZmFsc2UgKi9cbihmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgYXN5bmMgPSB7fTtcblxuICAgIC8vIGdsb2JhbCBvbiB0aGUgc2VydmVyLCB3aW5kb3cgaW4gdGhlIGJyb3dzZXJcbiAgICB2YXIgcm9vdCwgcHJldmlvdXNfYXN5bmM7XG5cbiAgICByb290ID0gdGhpcztcbiAgICBpZiAocm9vdCAhPSBudWxsKSB7XG4gICAgICBwcmV2aW91c19hc3luYyA9IHJvb3QuYXN5bmM7XG4gICAgfVxuXG4gICAgYXN5bmMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5hc3luYyA9IHByZXZpb3VzX2FzeW5jO1xuICAgICAgICByZXR1cm4gYXN5bmM7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9ubHlfb25jZShmbikge1xuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjYWxsZWQpIHRocm93IG5ldyBFcnJvcihcIkNhbGxiYWNrIHdhcyBhbHJlYWR5IGNhbGxlZC5cIik7XG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm4uYXBwbHkocm9vdCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLy8gY3Jvc3MtYnJvd3NlciBjb21wYXRpYmxpdHkgZnVuY3Rpb25zIC8vLy9cblxuICAgIHZhciBfZWFjaCA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yKSB7XG4gICAgICAgIGlmIChhcnIuZm9yRWFjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyci5mb3JFYWNoKGl0ZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaXRlcmF0b3IoYXJyW2ldLCBpLCBhcnIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBfbWFwID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IpIHtcbiAgICAgICAgaWYgKGFyci5tYXApIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIubWFwKGl0ZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBfZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBpLCBhKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goaXRlcmF0b3IoeCwgaSwgYSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcblxuICAgIHZhciBfcmVkdWNlID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIG1lbW8pIHtcbiAgICAgICAgaWYgKGFyci5yZWR1Y2UpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIucmVkdWNlKGl0ZXJhdG9yLCBtZW1vKTtcbiAgICAgICAgfVxuICAgICAgICBfZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBpLCBhKSB7XG4gICAgICAgICAgICBtZW1vID0gaXRlcmF0b3IobWVtbywgeCwgaSwgYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuXG4gICAgdmFyIF9rZXlzID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG5cbiAgICAvLy8vIGV4cG9ydGVkIGFzeW5jIG1vZHVsZSBmdW5jdGlvbnMgLy8vL1xuXG4gICAgLy8vLyBuZXh0VGljayBpbXBsZW1lbnRhdGlvbiB3aXRoIGJyb3dzZXItY29tcGF0aWJsZSBmYWxsYmFjayAvLy8vXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCAhKHByb2Nlc3MubmV4dFRpY2spKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhc3luYy5uZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIHNldEltbWVkaWF0ZShmbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXN5bmMubmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFzeW5jLm5leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcbiAgICB9XG5cbiAgICBhc3luYy5lYWNoID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIF9lYWNoKGFyciwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgsIG9ubHlfb25jZShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQgPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYXN5bmMuZm9yRWFjaCA9IGFzeW5jLmVhY2g7XG5cbiAgICBhc3luYy5lYWNoU2VyaWVzID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIHZhciBpdGVyYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgaXRlcmF0b3IoYXJyW2NvbXBsZXRlZF0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soaXRlcmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgaXRlcmF0ZSgpO1xuICAgIH07XG4gICAgYXN5bmMuZm9yRWFjaFNlcmllcyA9IGFzeW5jLmVhY2hTZXJpZXM7XG5cbiAgICBhc3luYy5lYWNoTGltaXQgPSBmdW5jdGlvbiAoYXJyLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBmbiA9IF9lYWNoTGltaXQobGltaXQpO1xuICAgICAgICBmbi5hcHBseShudWxsLCBbYXJyLCBpdGVyYXRvciwgY2FsbGJhY2tdKTtcbiAgICB9O1xuICAgIGFzeW5jLmZvckVhY2hMaW1pdCA9IGFzeW5jLmVhY2hMaW1pdDtcblxuICAgIHZhciBfZWFjaExpbWl0ID0gZnVuY3Rpb24gKGxpbWl0KSB7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgIGlmICghYXJyLmxlbmd0aCB8fCBsaW1pdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29tcGxldGVkID0gMDtcbiAgICAgICAgICAgIHZhciBzdGFydGVkID0gMDtcbiAgICAgICAgICAgIHZhciBydW5uaW5nID0gMDtcblxuICAgICAgICAgICAgKGZ1bmN0aW9uIHJlcGxlbmlzaCAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdoaWxlIChydW5uaW5nIDwgbGltaXQgJiYgc3RhcnRlZCA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRlZCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yKGFycltzdGFydGVkIC0gMV0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsZW5pc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuXG4gICAgdmFyIGRvUGFyYWxsZWwgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBbYXN5bmMuZWFjaF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBkb1BhcmFsbGVsTGltaXQgPSBmdW5jdGlvbihsaW1pdCwgZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBbX2VhY2hMaW1pdChsaW1pdCldLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgZG9TZXJpZXMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBbYXN5bmMuZWFjaFNlcmllc10uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG5cbiAgICB2YXIgX2FzeW5jTWFwID0gZnVuY3Rpb24gKGVhY2hmbiwgYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgYXJyID0gX21hcChhcnIsIGZ1bmN0aW9uICh4LCBpKSB7XG4gICAgICAgICAgICByZXR1cm4ge2luZGV4OiBpLCB2YWx1ZTogeH07XG4gICAgICAgIH0pO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgudmFsdWUsIGZ1bmN0aW9uIChlcnIsIHYpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzW3guaW5kZXhdID0gdjtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYXN5bmMubWFwID0gZG9QYXJhbGxlbChfYXN5bmNNYXApO1xuICAgIGFzeW5jLm1hcFNlcmllcyA9IGRvU2VyaWVzKF9hc3luY01hcCk7XG4gICAgYXN5bmMubWFwTGltaXQgPSBmdW5jdGlvbiAoYXJyLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBfbWFwTGltaXQobGltaXQpKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgdmFyIF9tYXBMaW1pdCA9IGZ1bmN0aW9uKGxpbWl0KSB7XG4gICAgICAgIHJldHVybiBkb1BhcmFsbGVsTGltaXQobGltaXQsIF9hc3luY01hcCk7XG4gICAgfTtcblxuICAgIC8vIHJlZHVjZSBvbmx5IGhhcyBhIHNlcmllcyB2ZXJzaW9uLCBhcyBkb2luZyByZWR1Y2UgaW4gcGFyYWxsZWwgd29uJ3RcbiAgICAvLyB3b3JrIGluIG1hbnkgc2l0dWF0aW9ucy5cbiAgICBhc3luYy5yZWR1Y2UgPSBmdW5jdGlvbiAoYXJyLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMuZWFjaFNlcmllcyhhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IobWVtbywgeCwgZnVuY3Rpb24gKGVyciwgdikge1xuICAgICAgICAgICAgICAgIG1lbW8gPSB2O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCBtZW1vKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBpbmplY3QgYWxpYXNcbiAgICBhc3luYy5pbmplY3QgPSBhc3luYy5yZWR1Y2U7XG4gICAgLy8gZm9sZGwgYWxpYXNcbiAgICBhc3luYy5mb2xkbCA9IGFzeW5jLnJlZHVjZTtcblxuICAgIGFzeW5jLnJlZHVjZVJpZ2h0ID0gZnVuY3Rpb24gKGFyciwgbWVtbywgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXZlcnNlZCA9IF9tYXAoYXJyLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0pLnJldmVyc2UoKTtcbiAgICAgICAgYXN5bmMucmVkdWNlKHJldmVyc2VkLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgLy8gZm9sZHIgYWxpYXNcbiAgICBhc3luYy5mb2xkciA9IGFzeW5jLnJlZHVjZVJpZ2h0O1xuXG4gICAgdmFyIF9maWx0ZXIgPSBmdW5jdGlvbiAoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBhcnIgPSBfbWFwKGFyciwgZnVuY3Rpb24gKHgsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiB7aW5kZXg6IGksIHZhbHVlOiB4fTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeC52YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soX21hcChyZXN1bHRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgICAgICB9KSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBhc3luYy5maWx0ZXIgPSBkb1BhcmFsbGVsKF9maWx0ZXIpO1xuICAgIGFzeW5jLmZpbHRlclNlcmllcyA9IGRvU2VyaWVzKF9maWx0ZXIpO1xuICAgIC8vIHNlbGVjdCBhbGlhc1xuICAgIGFzeW5jLnNlbGVjdCA9IGFzeW5jLmZpbHRlcjtcbiAgICBhc3luYy5zZWxlY3RTZXJpZXMgPSBhc3luYy5maWx0ZXJTZXJpZXM7XG5cbiAgICB2YXIgX3JlamVjdCA9IGZ1bmN0aW9uIChlYWNoZm4sIGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGFyciA9IF9tYXAoYXJyLCBmdW5jdGlvbiAoeCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHtpbmRleDogaSwgdmFsdWU6IHh9O1xuICAgICAgICB9KTtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LnZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICghdikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soX21hcChyZXN1bHRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgICAgICB9KSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBhc3luYy5yZWplY3QgPSBkb1BhcmFsbGVsKF9yZWplY3QpO1xuICAgIGFzeW5jLnJlamVjdFNlcmllcyA9IGRvU2VyaWVzKF9yZWplY3QpO1xuXG4gICAgdmFyIF9kZXRlY3QgPSBmdW5jdGlvbiAoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBtYWluX2NhbGxiYWNrKSB7XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayh4KTtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgbWFpbl9jYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFzeW5jLmRldGVjdCA9IGRvUGFyYWxsZWwoX2RldGVjdCk7XG4gICAgYXN5bmMuZGV0ZWN0U2VyaWVzID0gZG9TZXJpZXMoX2RldGVjdCk7XG5cbiAgICBhc3luYy5zb21lID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIG1haW5fY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMuZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgbWFpbl9jYWxsYmFjayhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gYW55IGFsaWFzXG4gICAgYXN5bmMuYW55ID0gYXN5bmMuc29tZTtcblxuICAgIGFzeW5jLmV2ZXJ5ID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIG1haW5fY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMuZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXYpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG1haW5fY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBtYWluX2NhbGxiYWNrKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGFsbCBhbGlhc1xuICAgIGFzeW5jLmFsbCA9IGFzeW5jLmV2ZXJ5O1xuXG4gICAgYXN5bmMuc29ydEJ5ID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGFzeW5jLm1hcChhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKGVyciwgY3JpdGVyaWEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCB7dmFsdWU6IHgsIGNyaXRlcmlhOiBjcml0ZXJpYX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyLCByZXN1bHRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhLCBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIF9tYXAocmVzdWx0cy5zb3J0KGZuKSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWU7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMuYXV0byA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgdmFyIGtleXMgPSBfa2V5cyh0YXNrcyk7XG4gICAgICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHRzID0ge307XG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICB2YXIgYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy51bnNoaWZ0KGZuKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0gPT09IGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciB0YXNrQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfZWFjaChsaXN0ZW5lcnMuc2xpY2UoMCksIGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBhZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX2tleXMocmVzdWx0cykubGVuZ3RoID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9lYWNoKGtleXMsIGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9ICh0YXNrc1trXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSA/IFt0YXNrc1trXV06IHRhc2tzW2tdO1xuICAgICAgICAgICAgdmFyIHRhc2tDYWxsYmFjayA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNhZmVSZXN1bHRzID0ge307XG4gICAgICAgICAgICAgICAgICAgIF9lYWNoKF9rZXlzKHJlc3VsdHMpLCBmdW5jdGlvbihya2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYWZlUmVzdWx0c1tya2V5XSA9IHJlc3VsdHNbcmtleV07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzYWZlUmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgc2FmZVJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBzdG9wIHN1YnNlcXVlbnQgZXJyb3JzIGhpdHRpbmcgY2FsbGJhY2sgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNba10gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayh0YXNrQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcmVxdWlyZXMgPSB0YXNrLnNsaWNlKDAsIE1hdGguYWJzKHRhc2subGVuZ3RoIC0gMSkpIHx8IFtdO1xuICAgICAgICAgICAgdmFyIHJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVkdWNlKHJlcXVpcmVzLCBmdW5jdGlvbiAoYSwgeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGEgJiYgcmVzdWx0cy5oYXNPd25Qcm9wZXJ0eSh4KSk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSkgJiYgIXJlc3VsdHMuaGFzT3duUHJvcGVydHkoayk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHJlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICB0YXNrW3Rhc2subGVuZ3RoIC0gMV0odGFza0NhbGxiYWNrLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tbdGFzay5sZW5ndGggLSAxXSh0YXNrQ2FsbGJhY2ssIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYy53YXRlcmZhbGwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd3JhcEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2god3JhcEl0ZXJhdG9yKG5leHQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3IuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHdyYXBJdGVyYXRvcihhc3luYy5pdGVyYXRvcih0YXNrcykpKCk7XG4gICAgfTtcblxuICAgIHZhciBfcGFyYWxsZWwgPSBmdW5jdGlvbihlYWNoZm4sIHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBpZiAodGFza3MuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICBlYWNoZm4ubWFwKHRhc2tzLCBmdW5jdGlvbiAoZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIGVyciwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXN1bHRzID0ge307XG4gICAgICAgICAgICBlYWNoZm4uZWFjaChfa2V5cyh0YXNrcyksIGZ1bmN0aW9uIChrLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRhc2tzW2tdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLnBhcmFsbGVsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBfcGFyYWxsZWwoeyBtYXA6IGFzeW5jLm1hcCwgZWFjaDogYXN5bmMuZWFjaCB9LCB0YXNrcywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5wYXJhbGxlbExpbWl0ID0gZnVuY3Rpb24odGFza3MsIGxpbWl0LCBjYWxsYmFjaykge1xuICAgICAgICBfcGFyYWxsZWwoeyBtYXA6IF9tYXBMaW1pdChsaW1pdCksIGVhY2g6IF9lYWNoTGltaXQobGltaXQpIH0sIHRhc2tzLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnNlcmllcyA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgaWYgKHRhc2tzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgYXN5bmMubWFwU2VyaWVzKHRhc2tzLCBmdW5jdGlvbiAoZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIGVyciwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXN1bHRzID0ge307XG4gICAgICAgICAgICBhc3luYy5lYWNoU2VyaWVzKF9rZXlzKHRhc2tzKSwgZnVuY3Rpb24gKGssIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGFza3Nba10oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzW2tdID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgICAgICAgdmFyIG1ha2VDYWxsYmFjayA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIGZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3NbaW5kZXhdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmbi5uZXh0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm4ubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGluZGV4IDwgdGFza3MubGVuZ3RoIC0gMSkgPyBtYWtlQ2FsbGJhY2soaW5kZXggKyAxKTogbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBtYWtlQ2FsbGJhY2soMCk7XG4gICAgfTtcblxuICAgIGFzeW5jLmFwcGx5ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShcbiAgICAgICAgICAgICAgICBudWxsLCBhcmdzLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIF9jb25jYXQgPSBmdW5jdGlvbiAoZWFjaGZuLCBhcnIsIGZuLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgY2IpIHtcbiAgICAgICAgICAgIGZuKHgsIGZ1bmN0aW9uIChlcnIsIHkpIHtcbiAgICAgICAgICAgICAgICByID0gci5jb25jYXQoeSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFzeW5jLmNvbmNhdCA9IGRvUGFyYWxsZWwoX2NvbmNhdCk7XG4gICAgYXN5bmMuY29uY2F0U2VyaWVzID0gZG9TZXJpZXMoX2NvbmNhdCk7XG5cbiAgICBhc3luYy53aGlsc3QgPSBmdW5jdGlvbiAodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0ZXN0KCkpIHtcbiAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYy53aGlsc3QodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy53aGlsc3QodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuZG9XaGlsc3QgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgaXRlcmF0b3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRlc3QoKSkge1xuICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jLmRvV2hpbHN0KGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMuZG9XaGlsc3QoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBhc3luYy51bnRpbCA9IGZ1bmN0aW9uICh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0ZXN0KCkpIHtcbiAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYy51bnRpbCh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLnVudGlsKHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLmRvVW50aWwgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgaXRlcmF0b3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0ZXN0KCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYy5kb1VudGlsKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMuZG9VbnRpbChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGFzeW5jLnF1ZXVlID0gZnVuY3Rpb24gKHdvcmtlciwgY29uY3VycmVuY3kpIHtcbiAgICAgICAgaWYgKGNvbmN1cnJlbmN5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbmN1cnJlbmN5ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfaW5zZXJ0KHEsIGRhdGEsIHBvcywgY2FsbGJhY2spIHtcbiAgICAgICAgICBpZihkYXRhLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xuICAgICAgICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfZWFjaChkYXRhLCBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgZGF0YTogdGFzayxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IG51bGxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgICAgICAgcS50YXNrcy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHEudGFza3MucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChxLnNhdHVyYXRlZCAmJiBxLnRhc2tzLmxlbmd0aCA9PT0gY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgICAgICAgIHEuc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2socS5wcm9jZXNzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3b3JrZXJzID0gMDtcbiAgICAgICAgdmFyIHEgPSB7XG4gICAgICAgICAgICB0YXNrczogW10sXG4gICAgICAgICAgICBjb25jdXJyZW5jeTogY29uY3VycmVuY3ksXG4gICAgICAgICAgICBzYXR1cmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICBlbXB0eTogbnVsbCxcbiAgICAgICAgICAgIGRyYWluOiBudWxsLFxuICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIF9pbnNlcnQocSwgZGF0YSwgZmFsc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bnNoaWZ0OiBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgX2luc2VydChxLCBkYXRhLCB0cnVlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JrZXJzIDwgcS5jb25jdXJyZW5jeSAmJiBxLnRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHEudGFza3Muc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHEuZW1wdHkgJiYgcS50YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHEuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3b3JrZXJzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXJzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkodGFzaywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxLmRyYWluICYmIHEudGFza3MubGVuZ3RoICsgd29ya2VycyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHEucHJvY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2IgPSBvbmx5X29uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNiQXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuYXBwbHkobnVsbCwgY2JBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyKHRhc2suZGF0YSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxLnRhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBydW5uaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlcnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBxO1xuICAgIH07XG5cbiAgICBhc3luYy5jYXJnbyA9IGZ1bmN0aW9uICh3b3JrZXIsIHBheWxvYWQpIHtcbiAgICAgICAgdmFyIHdvcmtpbmcgICAgID0gZmFsc2UsXG4gICAgICAgICAgICB0YXNrcyAgICAgICA9IFtdO1xuXG4gICAgICAgIHZhciBjYXJnbyA9IHtcbiAgICAgICAgICAgIHRhc2tzOiB0YXNrcyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgICAgICBzYXR1cmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICBlbXB0eTogbnVsbCxcbiAgICAgICAgICAgIGRyYWluOiBudWxsLFxuICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2VhY2goZGF0YSwgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZ28uc2F0dXJhdGVkICYmIHRhc2tzLmxlbmd0aCA9PT0gcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZ28uc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhjYXJnby5wcm9jZXNzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JraW5nKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZihjYXJnby5kcmFpbikgY2FyZ28uZHJhaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciB0cyA9IHR5cGVvZiBwYXlsb2FkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGFza3Muc3BsaWNlKDAsIHBheWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0YXNrcy5zcGxpY2UoMCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZHMgPSBfbWFwKHRzLCBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5kYXRhO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoY2FyZ28uZW1wdHkpIGNhcmdvLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgd29ya2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgd29ya2VyKGRzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgICAgICAgX2VhY2godHMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFza3MubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJ1bm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNhcmdvO1xuICAgIH07XG5cbiAgICB2YXIgX2NvbnNvbGVfZm4gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChbZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnNvbGVbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lYWNoKGFyZ3MsIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZVtuYW1lXSh4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGFzeW5jLmxvZyA9IF9jb25zb2xlX2ZuKCdsb2cnKTtcbiAgICBhc3luYy5kaXIgPSBfY29uc29sZV9mbignZGlyJyk7XG4gICAgLyphc3luYy5pbmZvID0gX2NvbnNvbGVfZm4oJ2luZm8nKTtcbiAgICBhc3luYy53YXJuID0gX2NvbnNvbGVfZm4oJ3dhcm4nKTtcbiAgICBhc3luYy5lcnJvciA9IF9jb25zb2xlX2ZuKCdlcnJvcicpOyovXG5cbiAgICBhc3luYy5tZW1vaXplID0gZnVuY3Rpb24gKGZuLCBoYXNoZXIpIHtcbiAgICAgICAgdmFyIG1lbW8gPSB7fTtcbiAgICAgICAgdmFyIHF1ZXVlcyA9IHt9O1xuICAgICAgICBoYXNoZXIgPSBoYXNoZXIgfHwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgdmFyIGtleSA9IGhhc2hlci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gbWVtbykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIG1lbW9ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgaW4gcXVldWVzKSB7XG4gICAgICAgICAgICAgICAgcXVldWVzW2tleV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWV1ZXNba2V5XSA9IFtjYWxsYmFja107XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoW2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVtb1trZXldID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcSA9IHF1ZXVlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcXVldWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBxW2ldLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBtZW1vaXplZC5tZW1vID0gbWVtbztcbiAgICAgICAgbWVtb2l6ZWQudW5tZW1vaXplZCA9IGZuO1xuICAgICAgICByZXR1cm4gbWVtb2l6ZWQ7XG4gICAgfTtcblxuICAgIGFzeW5jLnVubWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChmbi51bm1lbW9pemVkIHx8IGZuKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgYXN5bmMudGltZXMgPSBmdW5jdGlvbiAoY291bnQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgY291bnRlciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvdW50ZXIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXN5bmMubWFwKGNvdW50ZXIsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnRpbWVzU2VyaWVzID0gZnVuY3Rpb24gKGNvdW50LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb3VudGVyLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzeW5jLm1hcFNlcmllcyhjb3VudGVyLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5jb21wb3NlID0gZnVuY3Rpb24gKC8qIGZ1bmN0aW9ucy4uLiAqLykge1xuICAgICAgICB2YXIgZm5zID0gQXJyYXkucHJvdG90eXBlLnJldmVyc2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIGFzeW5jLnJlZHVjZShmbnMsIGFyZ3MsIGZ1bmN0aW9uIChuZXdhcmdzLCBmbiwgY2IpIHtcbiAgICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBuZXdhcmdzLmNvbmNhdChbZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjYihlcnIsIG5leHRhcmdzKTtcbiAgICAgICAgICAgICAgICB9XSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoYXQsIFtlcnJdLmNvbmNhdChyZXN1bHRzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgYXN5bmMuYXBwbHlFYWNoID0gZnVuY3Rpb24gKGZucyAvKmFyZ3MuLi4qLykge1xuICAgICAgICB2YXIgZ28gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jLmVhY2goZm5zLCBmdW5jdGlvbiAoZm4sIGNiKSB7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncy5jb25jYXQoW2NiXSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICByZXR1cm4gZ28uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ287XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQU1EIC8gUmVxdWlyZUpTXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXN5bmM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBOb2RlLmpzXG4gICAgZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBhc3luYztcbiAgICB9XG4gICAgLy8gaW5jbHVkZWQgZGlyZWN0bHkgdmlhIDxzY3JpcHQ+IHRhZ1xuICAgIGVsc2Uge1xuICAgICAgICByb290LmFzeW5jID0gYXN5bmM7XG4gICAgfVxuXG59KCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7IiwiXHJcbmNvbnN0IGNyYXdsZXIgPSByZXF1aXJlKCcuL2luY2x1ZGUvY3Jhd2xlcicpO1xyXG5jb25zdCBjdyA9IHJlcXVpcmUoJy4vaW5jbHVkZS9jb21tb24td29yZHMuanMnKTtcclxuXHJcbmNvbnN0IE1BWF9XT1JEUyA9IDEwMDAwMDAwO1xyXG5jb25zdCBDQUNIRV9DTFVTVEVSUyA9IGZhbHNlO1xyXG5jb25zdCBNQVhfTk9ERV9GUkVRVUVOQ1kgPSAxMDAwO1xyXG5jb25zdCBUUkFWRVJTRV9TSU1JTEFSID0gdHJ1ZTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihldmVudCwgY29udGV4dCkge1xyXG4gIGNyYXdsZXIuaW5pdENyYXdsZXIoXHJcbiAgICBNQVhfV09SRFMsXHJcbiAgICBDQUNIRV9DTFVTVEVSUyxcclxuICAgIE1BWF9OT0RFX0ZSRVFVRU5DWSxcclxuICAgIFRSQVZFUlNFX1NJTUlMQVJcclxuICAgICk7XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjcmF3bGluZyBpbiB0aGUgYmFja2dyb3VuZCBzdGFydGluZyBmcm9tIHRvcCAzMDAwIEVuZ2xpc2ggd29yZHMuLi5cIik7XHJcblxyXG4gICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICBmb3IgKGxldCBjb21tb25Xb3JkIGluIGN3LlRoZU1vc3RDb21tb24zMDAwKSB7XHJcbiAgICAgIHByb21pc2VzLnB1c2goY3Jhd2xlci5sb2FkQ2x1c3Rlcihjb21tb25Xb3JkLCBmYWxzZSkpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1c0NvZGU6IDIwMCxcclxuICAgICAgYm9keToganNvbixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIHJldHVybiB7IHN0YXR1c0NvZGU6IDUwMCwgYm9keTogZXJyLnRvU3RyaW5nKCkgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9